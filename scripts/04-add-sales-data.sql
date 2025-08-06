-- Add more historical deal data for the sales trend chart
INSERT INTO deals (title, company, value, stage, due_date, assignee_id, created_at) VALUES
('Social Media Management Tool', 'ConnectSphere', 22000, 'closed-won', now() - interval '2 months', '2c2c2c2c-2c2c-2c2c-2c2c-2c2c2c2c2c2c', now() - interval '2 months'),
('E-commerce Platform Dev', 'Shopify Plus', 35000, 'closed-won', now() - interval '3 months', '1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b', now() - interval '3 months'),
('Cybersecurity Audit', 'SecureNet', 12000, 'closed-won', now() - interval '4 months', '4e4e4e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e', now() - interval '4 months'),
('AI Chatbot Implementation', 'FutureBot', 9500, 'closed-won', now() - interval '5 months', '3d3d3d3d-3d3d-3d3d-3d3d-3d3d3d3d3d3d', now() - interval '5 months'),
('Mobile App Development', 'Appify', 45000, 'closed-won', now() - interval '6 months', '1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b', now() - interval '6 months');
