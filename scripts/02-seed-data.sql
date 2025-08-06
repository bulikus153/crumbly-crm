-- Seed users with sample data
INSERT INTO users (id, name, email, avatar_url, role) VALUES
('8a8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e', 'Olivia Johnson', 'olivia@company.com', '/avatars/olivia-johnson.png', 'Admin'),
('1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b', 'John Smith', 'john@company.com', '/avatars/john-smith.png', 'Sales Manager'),
('2c2c2c2c-2c2c-2c2c-2c2c-2c2c2c2c2c2c', 'Sarah Wilson', 'sarah@company.com', '/avatars/sarah-wilson.png', 'Sales Rep'),
('3d3d3d3d-3d3d-3d3d-3d3d-3d3d3d3d3d3d', 'Mike Chen', 'mike@company.com', '/avatars/mike-chen.png', 'Sales Rep'),
('4e4e4e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e', 'Emily Rodriguez', 'emily@company.com', '/avatars/emily-rodriguez.png', 'Sales Rep');

-- Seed contacts
INSERT INTO contacts (name, email, company, status, value, region, last_contact, avatar_url, owner_id) VALUES
('John Doe', 'john@techcorp.com', 'TechCorp', 'Hot Lead', 15000, 'North America', now() - interval '2 days', '/avatars/john-doe.png', '1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b'),
('Sarah Wilson', 'sarah.w@innovate.com', 'Innovate Inc', 'Qualified', 8500, 'Europe', now() - interval '1 week', '/avatars/sarah-wilson.png', '2c2c2c2c-2c2c-2c2c-2c2c-2c2c2c2c2c2c'),
('Mike Chen', 'mike.c@startup.io', 'Startup.io', 'Cold Lead', 3200, 'Asia', now() - interval '3 weeks', '/avatars/mike-chen.png', '3d3d3d3d-3d3d-3d3d-3d3d-3d3d3d3d3d3d'),
('Emily Rodriguez', 'emily.r@growth.co', 'Growth Co', 'Proposal Sent', 12000, 'North America', now() - interval '5 days', '/avatars/emily-rodriguez.png', '4e4e4e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e');

-- Seed deals
INSERT INTO deals (title, company, value, stage, due_date, assignee_id, created_at) VALUES
('Enterprise Software License', 'TechCorp', 15000, 'proposal', now() + interval '45 days', '1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b', now() - interval '1 month'),
('Marketing Automation Setup', 'Innovate Inc', 8500, 'negotiation', now() + interval '50 days', '2c2c2c2c-2c2c-2c2c-2c2c-2c2c2c2c2c2c', now() - interval '2 months'),
('Cloud Migration Project', 'Growth Co', 25000, 'qualified', now() + interval '70 days', '3d3d3d3d-3d3d-3d3d-3d3d-3d3d3d3d3d3d', now() - interval '3 months'),
('Data Analytics Platform', 'DataCorp', 18000, 'closed-won', now() - interval '25 days', '1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b', now() - interval '1 month');

-- Seed tasks
INSERT INTO tasks (title, type, time, duration, priority, assignee_id, due_date) VALUES
('Follow up with TechCorp', 'Call', '10:00:00', '30 min', 'High', '1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b', now()),
('Proposal review meeting', 'Meeting', '14:00:00', '1 hour', 'Medium', '2c2c2c2c-2c2c-2c2c-2c2c-2c2c2c2c2c2c', now()),
('Demo preparation', 'Task', '16:00:00', '45 min', 'Low', '3d3d3d3d-3d3d-3d3d-3d3d-3d3d3d3d3d3d', now());

-- Seed notifications
INSERT INTO notifications (user_id, type, title, message, read, priority, created_at) VALUES
('8a8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e', 'ai', 'AI Suggestion: High-value lead detected', 'John Doe from TechCorp shows strong buying signals. Recommend immediate follow-up.', false, 'high', now() - interval '5 minutes'),
('8a8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e', 'system', 'Deal moved to Negotiation', 'Enterprise Software License deal has been moved to negotiation stage.', false, 'medium', now() - interval '1 hour'),
('8a8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e', 'user', 'New email from Sarah Wilson', 'Re: Marketing Automation Setup - Please review the updated proposal.', true, 'medium', now() - interval '2 hours'),
('8a8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e', 'error', 'Integration sync failed', 'Google Calendar sync encountered an error. Please check your connection.', true, 'high', now() - interval '6 hours');
