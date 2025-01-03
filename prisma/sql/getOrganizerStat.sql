SELECT date_trunc($1, t."createdAt")::date AS date, 
  SUM(t.total_amount)::numeric AS total_revenue, 
  COUNT(t.transaction_id)::numeric AS total_transaction, 
  SUM(td.sum_seat)::numeric AS total_seat 
FROM "transaction" t 
JOIN (
  SELECT td.transaction_id, SUM(td.quantity_bought) AS sum_seat 
  FROM transaction_detail td 
  JOIN "event" e ON td.event_id = e.event_id 
  WHERE e.organizer_id = $2 
  GROUP BY td.transaction_id
) td ON t.transaction_id = td.transaction_id where t."createdAt" between $3::date and $4::date
GROUP BY date;