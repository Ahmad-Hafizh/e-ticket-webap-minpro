SELECT DATE_TRUNC($1, t."createdAt")::DATE AS date, 
  SUM(t.total_amount)::NUMERIC AS total_revenue, 
  SUM(td.quantity_bought)::NUMERIC AS total_seat, 
  COUNT(t.transaction_id)::NUMERIC AS total_transaction 
FROM "transaction" t 
JOIN transaction_detail td ON t.transaction_id = td.transaction_id  
JOIN "event" e ON td.event_id = e.event_id 
WHERE e.organizer_id = $2
AND t."createdAt"::DATE BETWEEN $3::DATE AND $4::DATE 
GROUP BY date