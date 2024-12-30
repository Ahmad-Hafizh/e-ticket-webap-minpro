
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  name: 'name',
  email: 'email',
  password: 'password',
  pfp_url: 'pfp_url',
  created_at: 'created_at',
  isVerified: 'isVerified',
  role: 'role',
  referred_id: 'referred_id'
};

exports.Prisma.ProfileScalarFieldEnum = {
  profile_id: 'profile_id',
  phone: 'phone',
  job_title: 'job_title',
  company: 'company',
  user_id: 'user_id'
};

exports.Prisma.AddressScalarFieldEnum = {
  address_id: 'address_id',
  profile_id: 'profile_id',
  address_name: 'address_name',
  address: 'address',
  city: 'city',
  country: 'country',
  zipcode: 'zipcode'
};

exports.Prisma.OrganizerScalarFieldEnum = {
  organizer_id: 'organizer_id',
  organizer_name: 'organizer_name',
  organizer_email: 'organizer_email',
  organizer_phone: 'organizer_phone',
  organizer_address: 'organizer_address',
  organizer_logo: 'organizer_logo',
  organizer_banner: 'organizer_banner',
  organizer_bio: 'organizer_bio',
  user_id: 'user_id'
};

exports.Prisma.Bank_accountScalarFieldEnum = {
  bank_account_id: 'bank_account_id',
  bank_name: 'bank_name',
  bank_account_name: 'bank_account_name',
  bank_account_number: 'bank_account_number',
  organizer_id: 'organizer_id'
};

exports.Prisma.PointScalarFieldEnum = {
  point_id: 'point_id',
  user_id: 'user_id',
  amount: 'amount',
  added_date: 'added_date',
  expired_date: 'expired_date'
};

exports.Prisma.ReferralScalarFieldEnum = {
  referral_id: 'referral_id',
  referral_code: 'referral_code',
  user_id: 'user_id'
};

exports.Prisma.Social_mediaScalarFieldEnum = {
  social_id: 'social_id',
  profile_id: 'profile_id',
  platform: 'platform',
  account_name: 'account_name',
  url: 'url'
};

exports.Prisma.CouponScalarFieldEnum = {
  coupon_id: 'coupon_id',
  coupon_name: 'coupon_name',
  user_id: 'user_id',
  coupon_code: 'coupon_code',
  discount: 'discount',
  max_amount: 'max_amount',
  start_date: 'start_date',
  expired_date: 'expired_date'
};

exports.Prisma.EventScalarFieldEnum = {
  event_id: 'event_id',
  organizer_id: 'organizer_id',
  title: 'title',
  description: 'description',
  imgEvent: 'imgEvent',
  coupon_id: 'coupon_id',
  event_location_id: 'event_location_id',
  startDate: 'startDate',
  endDate: 'endDate',
  startTime: 'startTime',
  endTime: 'endTime',
  timezone: 'timezone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  score: 'score'
};

exports.Prisma.Event_categoryScalarFieldEnum = {
  event_category_id: 'event_category_id',
  category_name: 'category_name'
};

exports.Prisma.Event_LocationScalarFieldEnum = {
  event_location_id: 'event_location_id',
  address_name: 'address_name',
  address: 'address',
  location_city_id: 'location_city_id',
  location_country_id: 'location_country_id',
  zipcode: 'zipcode'
};

exports.Prisma.Location_cityScalarFieldEnum = {
  location_city_id: 'location_city_id',
  city_name: 'city_name'
};

exports.Prisma.Location_countryScalarFieldEnum = {
  location_country_id: 'location_country_id',
  country_name: 'country_name'
};

exports.Prisma.Ticket_typesScalarFieldEnum = {
  ticket_types_id: 'ticket_types_id',
  event_id: 'event_id',
  types: 'types',
  price: 'price',
  quantity_available: 'quantity_available'
};

exports.Prisma.Transaction_DetailScalarFieldEnum = {
  transaction_details_id: 'transaction_details_id',
  user_id: 'user_id',
  event_id: 'event_id',
  ticket_types_id: 'ticket_types_id',
  quantity_bought: 'quantity_bought',
  subtotal: 'subtotal',
  transaction_id: 'transaction_id'
};

exports.Prisma.TransactionScalarFieldEnum = {
  transaction_id: 'transaction_id',
  user_id: 'user_id',
  coupon_id: 'coupon_id',
  total_amount: 'total_amount',
  payment_method: 'payment_method',
  createdAt: 'createdAt',
  isPaid: 'isPaid'
};

exports.Prisma.ReviewScalarFieldEnum = {
  review_id: 'review_id',
  event_id: 'event_id',
  user_id: 'user_id',
  review_text: 'review_text',
  review_img: 'review_img',
  score: 'score'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  user: 'user',
  organizer: 'organizer'
};

exports.AddressName = exports.$Enums.AddressName = {
  home: 'home',
  shipping: 'shipping',
  work: 'work'
};

exports.Platform = exports.$Enums.Platform = {
  instagram: 'instagram',
  twitter: 'twitter',
  linkedIn: 'linkedIn',
  whatsapp: 'whatsapp',
  line: 'line',
  behance: 'behance'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CREDIT_CARD: 'CREDIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  E_WALLET: 'E_WALLET'
};

exports.Prisma.ModelName = {
  User: 'User',
  Profile: 'Profile',
  Address: 'Address',
  Organizer: 'Organizer',
  Bank_account: 'Bank_account',
  Point: 'Point',
  Referral: 'Referral',
  Social_media: 'Social_media',
  Coupon: 'Coupon',
  Event: 'Event',
  Event_category: 'Event_category',
  Event_Location: 'Event_Location',
  Location_city: 'Location_city',
  Location_country: 'Location_country',
  Ticket_types: 'Ticket_types',
  Transaction_Detail: 'Transaction_Detail',
  Transaction: 'Transaction',
  Review: 'Review'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
