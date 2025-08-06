-- Create custom types (enums) for structured data
CREATE TYPE deal_stage AS ENUM ('discovery', 'qualified', 'proposal', 'negotiation', 'closed-won', 'closed-lost');
CREATE TYPE contact_status AS ENUM ('Hot Lead', 'Qualified', 'Cold Lead', 'Proposal Sent', 'Customer');
CREATE TYPE task_priority AS ENUM ('High', 'Medium', 'Low');
CREATE TYPE notification_type AS ENUM ('ai', 'system', 'user', 'error');
CREATE TYPE notification_priority AS ENUM ('high', 'medium', 'low');

-- Users table to store user information
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    avatar_url TEXT,
    role TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Contacts table for leads and customers
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    company TEXT,
    status contact_status,
    value NUMERIC,
    region TEXT,
    last_contact TIMESTAMPTZ,
    avatar_url TEXT,
    owner_id UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Deals table to track sales opportunities
CREATE TABLE deals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    company TEXT,
    value NUMERIC,
    stage deal_stage,
    due_date DATE,
    assignee_id UUID REFERENCES users(id),
    contact_id UUID REFERENCES contacts(id),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Tasks table for user and team tasks
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    type TEXT,
    time TIME,
    duration TEXT,
    priority task_priority,
    assignee_id UUID REFERENCES users(id),
    due_date DATE,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Notifications table for system and user alerts
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    type notification_type,
    title TEXT NOT NULL,
    message TEXT,
    read BOOLEAN DEFAULT false,
    priority notification_priority,
    created_at TIMESTAMPTZ DEFAULT now()
);
