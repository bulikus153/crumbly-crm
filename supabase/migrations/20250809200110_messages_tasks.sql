-- Threads & Messages
create table if not exists public.threads (
  id uuid primary key default gen_random_uuid(),
  subject text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.thread_participants (
  thread_id uuid references public.threads(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  last_read_at timestamptz,
  inserted_at timestamptz not null default now(),
  primary key (thread_id, user_id)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid references public.threads(id) on delete cascade,
  sender_id uuid references auth.users(id) on delete set null,
  body text not null,
  attachments jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_messages_thread on public.messages(thread_id);

-- Tasks
-- Enum types
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'task_status') THEN
    CREATE TYPE public.task_status AS ENUM ('todo','in_progress','blocked','done');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'task_priority') THEN
    CREATE TYPE public.task_priority AS ENUM ('low','medium','high','urgent');
  END IF;
END$$;

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  status public.task_status not null default 'todo',
  priority public.task_priority not null default 'medium',
  due_date date,
  assignee_id uuid references auth.users(id) on delete set null,
  created_by uuid references auth.users(id) on delete set null,
  project_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.task_activity (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.tasks(id) on delete cascade,
  type text not null,
  payload jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- Triggers
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_tasks_updated_at
before update on public.tasks
for each row execute procedure public.set_updated_at();

-- Row Level Security
alter table public.threads enable row level security;
alter table public.thread_participants enable row level security;
alter table public.messages enable row level security;
alter table public.tasks enable row level security;
alter table public.task_activity enable row level security;

-- Threads policies
create policy "select threads if participant" on public.threads
  for select using (
    exists (
      select 1 from public.thread_participants tp
      where tp.thread_id = id and tp.user_id = auth.uid()
    )
  );

create policy "insert threads with creator" on public.threads
  for insert with check (auth.uid() = created_by);

-- Thread participants policies
create policy "select thread participants if participant" on public.thread_participants
  for select using (
    exists (
      select 1 from public.thread_participants tp
      where tp.thread_id = thread_id and tp.user_id = auth.uid()
    )
  );

create policy "insert thread participants if thread creator" on public.thread_participants
  for insert with check (
    exists (
      select 1 from public.threads t
      where t.id = thread_id and t.created_by = auth.uid()
    )
  );

create policy "delete thread participants if thread creator" on public.thread_participants
  for delete using (
    exists (
      select 1 from public.threads t
      where t.id = thread_id and t.created_by = auth.uid()
    )
  );

-- Messages policies
create policy "select messages if participant" on public.messages
  for select using (
    exists (
      select 1 from public.thread_participants tp
      where tp.thread_id = thread_id and tp.user_id = auth.uid()
    )
  );

create policy "insert messages if participant" on public.messages
  for insert with check (
    auth.uid() = sender_id and
    exists (
      select 1 from public.thread_participants tp
      where tp.thread_id = thread_id and tp.user_id = auth.uid()
    )
  );

-- Tasks policies
create policy "select tasks if creator or assignee" on public.tasks
  for select using (auth.uid() = created_by or auth.uid() = assignee_id);

create policy "insert tasks with creator" on public.tasks
  for insert with check (auth.uid() = created_by);

create policy "update tasks if creator or assignee" on public.tasks
  for update using (auth.uid() = created_by or auth.uid() = assignee_id);

create policy "delete tasks if creator" on public.tasks
  for delete using (auth.uid() = created_by);

-- Task activity policies
create policy "select task_activity if task member" on public.task_activity
  for select using (
    exists (
      select 1 from public.tasks t
      where t.id = task_id and (t.created_by = auth.uid() or t.assignee_id = auth.uid())
    )
  );

create policy "insert task_activity if creator" on public.task_activity
  for insert with check (auth.uid() = created_by);

