-- Function to get main dashboard KPIs
CREATE OR REPLACE FUNCTION get_dashboard_kpis()
RETURNS TABLE(total_revenue NUMERIC, new_leads_count BIGINT, conversion_rate REAL) AS $$
DECLARE
    total_deals BIGINT;
    won_deals BIGINT;
BEGIN
    SELECT SUM(value) INTO total_revenue FROM deals WHERE stage = 'closed-won';
    SELECT COUNT(*) INTO new_leads_count FROM contacts WHERE created_at >= now() - interval '30 days';
    
    SELECT COUNT(*) INTO total_deals FROM deals;
    SELECT COUNT(*) INTO won_deals FROM deals WHERE stage = 'closed-won';

    IF total_deals > 0 THEN
        conversion_rate := (won_deals::REAL / total_deals::REAL) * 100;
    ELSE
        conversion_rate := 0;
    END IF;

    RETURN QUERY SELECT total_revenue, new_leads_count, conversion_rate;
END;
$$ LANGUAGE plpgsql;

-- Function to get monthly sales trend for the last 6 months
CREATE OR REPLACE FUNCTION get_monthly_sales_trend()
RETURNS TABLE(month_name TEXT, sales NUMERIC) AS $$
BEGIN
    RETURN QUERY
    SELECT
        to_char(d.created_at, 'Mon') as month_name,
        SUM(d.value) as sales
    FROM deals d
    WHERE d.stage = 'closed-won' AND d.created_at >= date_trunc('month', now()) - interval '5 months'
    GROUP BY month_name, to_char(d.created_at, 'MM')
    ORDER BY to_char(d.created_at, 'MM');
END;
$$ LANGUAGE plpgsql;
