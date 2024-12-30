"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.getOrganizerStat = /*#__PURE__*/ $mkFactory("SELECT DATE_TRUNC($1, t.\"createdAt\")::DATE AS date,\nSUM(t.total_amount)::NUMERIC AS total_revenue,\nSUM(td.quantity_bought)::NUMERIC AS total_seat,\nCOUNT(t.transaction_id)::NUMERIC AS total_transaction\nFROM \"transaction\" t\nJOIN transaction_detail td ON t.transaction_id = td.transaction_id\nJOIN \"event\" e ON td.event_id = e.event_id\nWHERE e.organizer_id = $2\nAND t.\"createdAt\"::DATE BETWEEN $3::DATE AND $4::DATE\nGROUP BY date")
