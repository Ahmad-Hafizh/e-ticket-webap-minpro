"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.getOrganizerStat = /*#__PURE__*/ $mkFactory("SELECT date_trunc($1, t.\"createdAt\")::date AS date,\nSUM(t.total_amount) AS total_revenue,\nCOUNT(t.transaction_id) AS total_transaction,\nSUM(td.sum_seat) AS total_seat\nFROM \"transaction\" t\nJOIN (\nSELECT td.transaction_id, SUM(td.quantity_bought) AS sum_seat\nFROM transaction_detail td\nJOIN \"event\" e ON td.event_id = e.event_id\nWHERE e.organizer_id = $2\nGROUP BY td.transaction_id\n) td ON t.transaction_id = td.transaction_id where t.\"createdAt\" between $3::date and $4::date\nGROUP BY date;")
