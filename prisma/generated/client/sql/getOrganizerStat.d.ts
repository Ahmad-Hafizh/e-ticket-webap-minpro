import * as $runtime from "../runtime/library"

/**
 * @param text
 * @param int4
 * @param date
 * @param date
 */
export const getOrganizerStat: (text: string, int4: number, date: Date, date: Date) => $runtime.TypedSql<getOrganizerStat.Parameters, getOrganizerStat.Result>

export namespace getOrganizerStat {
  export type Parameters = [text: string, int4: number, date: Date, date: Date]
  export type Result = {
    date: Date | null
    total_revenue: $runtime.Decimal | null
    total_transaction: $runtime.Decimal | null
    total_seat: $runtime.Decimal | null
  }
}
