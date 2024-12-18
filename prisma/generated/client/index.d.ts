
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model Social_media
 * 
 */
export type Social_media = $Result.DefaultSelection<Prisma.$Social_mediaPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Event_category
 * 
 */
export type Event_category = $Result.DefaultSelection<Prisma.$Event_categoryPayload>
/**
 * Model Event_Location
 * 
 */
export type Event_Location = $Result.DefaultSelection<Prisma.$Event_LocationPayload>
/**
 * Model Location_city
 * 
 */
export type Location_city = $Result.DefaultSelection<Prisma.$Location_cityPayload>
/**
 * Model Location_country
 * 
 */
export type Location_country = $Result.DefaultSelection<Prisma.$Location_countryPayload>
/**
 * Model Ticket_types
 * 
 */
export type Ticket_types = $Result.DefaultSelection<Prisma.$Ticket_typesPayload>
/**
 * Model Transaction_Detail
 * 
 */
export type Transaction_Detail = $Result.DefaultSelection<Prisma.$Transaction_DetailPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  E_WALLET: 'E_WALLET'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const Role: {
  user: 'user',
  organizer: 'organizer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AddressName: {
  home: 'home',
  shipping: 'shipping',
  work: 'work'
};

export type AddressName = (typeof AddressName)[keyof typeof AddressName]


export const Platform: {
  instagram: 'instagram',
  twitter: 'twitter',
  linkedIn: 'linkedIn',
  whatsapp: 'whatsapp',
  line: 'line',
  behance: 'behance'
};

export type Platform = (typeof Platform)[keyof typeof Platform]

}

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AddressName = $Enums.AddressName

export const AddressName: typeof $Enums.AddressName

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs>;

  /**
   * `prisma.social_media`: Exposes CRUD operations for the **Social_media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Social_medias
    * const social_medias = await prisma.social_media.findMany()
    * ```
    */
  get social_media(): Prisma.Social_mediaDelegate<ExtArgs>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.event_category`: Exposes CRUD operations for the **Event_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_categories
    * const event_categories = await prisma.event_category.findMany()
    * ```
    */
  get event_category(): Prisma.Event_categoryDelegate<ExtArgs>;

  /**
   * `prisma.event_Location`: Exposes CRUD operations for the **Event_Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_Locations
    * const event_Locations = await prisma.event_Location.findMany()
    * ```
    */
  get event_Location(): Prisma.Event_LocationDelegate<ExtArgs>;

  /**
   * `prisma.location_city`: Exposes CRUD operations for the **Location_city** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Location_cities
    * const location_cities = await prisma.location_city.findMany()
    * ```
    */
  get location_city(): Prisma.Location_cityDelegate<ExtArgs>;

  /**
   * `prisma.location_country`: Exposes CRUD operations for the **Location_country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Location_countries
    * const location_countries = await prisma.location_country.findMany()
    * ```
    */
  get location_country(): Prisma.Location_countryDelegate<ExtArgs>;

  /**
   * `prisma.ticket_types`: Exposes CRUD operations for the **Ticket_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_types
    * const ticket_types = await prisma.ticket_types.findMany()
    * ```
    */
  get ticket_types(): Prisma.Ticket_typesDelegate<ExtArgs>;

  /**
   * `prisma.transaction_Detail`: Exposes CRUD operations for the **Transaction_Detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_Details
    * const transaction_Details = await prisma.transaction_Detail.findMany()
    * ```
    */
  get transaction_Detail(): Prisma.Transaction_DetailDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    Address: 'Address',
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
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "profile" | "address" | "point" | "referral" | "social_media" | "coupon" | "event" | "event_category" | "event_Location" | "location_city" | "location_country" | "ticket_types" | "transaction_Detail" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      Social_media: {
        payload: Prisma.$Social_mediaPayload<ExtArgs>
        fields: Prisma.Social_mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Social_mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Social_mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload>
          }
          findFirst: {
            args: Prisma.Social_mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Social_mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload>
          }
          findMany: {
            args: Prisma.Social_mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload>[]
          }
          create: {
            args: Prisma.Social_mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload>
          }
          createMany: {
            args: Prisma.Social_mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Social_mediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload>[]
          }
          delete: {
            args: Prisma.Social_mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload>
          }
          update: {
            args: Prisma.Social_mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload>
          }
          deleteMany: {
            args: Prisma.Social_mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Social_mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Social_mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Social_mediaPayload>
          }
          aggregate: {
            args: Prisma.Social_mediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial_media>
          }
          groupBy: {
            args: Prisma.Social_mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Social_mediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Social_mediaCountArgs<ExtArgs>
            result: $Utils.Optional<Social_mediaCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Event_category: {
        payload: Prisma.$Event_categoryPayload<ExtArgs>
        fields: Prisma.Event_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Event_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Event_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload>
          }
          findFirst: {
            args: Prisma.Event_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Event_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload>
          }
          findMany: {
            args: Prisma.Event_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload>[]
          }
          create: {
            args: Prisma.Event_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload>
          }
          createMany: {
            args: Prisma.Event_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Event_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload>[]
          }
          delete: {
            args: Prisma.Event_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload>
          }
          update: {
            args: Prisma.Event_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload>
          }
          deleteMany: {
            args: Prisma.Event_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Event_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Event_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_categoryPayload>
          }
          aggregate: {
            args: Prisma.Event_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_category>
          }
          groupBy: {
            args: Prisma.Event_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Event_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Event_categoryCountAggregateOutputType> | number
          }
        }
      }
      Event_Location: {
        payload: Prisma.$Event_LocationPayload<ExtArgs>
        fields: Prisma.Event_LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Event_LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Event_LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload>
          }
          findFirst: {
            args: Prisma.Event_LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Event_LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload>
          }
          findMany: {
            args: Prisma.Event_LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload>[]
          }
          create: {
            args: Prisma.Event_LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload>
          }
          createMany: {
            args: Prisma.Event_LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Event_LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload>[]
          }
          delete: {
            args: Prisma.Event_LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload>
          }
          update: {
            args: Prisma.Event_LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload>
          }
          deleteMany: {
            args: Prisma.Event_LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Event_LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Event_LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_LocationPayload>
          }
          aggregate: {
            args: Prisma.Event_LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_Location>
          }
          groupBy: {
            args: Prisma.Event_LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.Event_LocationCountArgs<ExtArgs>
            result: $Utils.Optional<Event_LocationCountAggregateOutputType> | number
          }
        }
      }
      Location_city: {
        payload: Prisma.$Location_cityPayload<ExtArgs>
        fields: Prisma.Location_cityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Location_cityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Location_cityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload>
          }
          findFirst: {
            args: Prisma.Location_cityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Location_cityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload>
          }
          findMany: {
            args: Prisma.Location_cityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload>[]
          }
          create: {
            args: Prisma.Location_cityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload>
          }
          createMany: {
            args: Prisma.Location_cityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Location_cityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload>[]
          }
          delete: {
            args: Prisma.Location_cityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload>
          }
          update: {
            args: Prisma.Location_cityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload>
          }
          deleteMany: {
            args: Prisma.Location_cityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Location_cityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Location_cityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_cityPayload>
          }
          aggregate: {
            args: Prisma.Location_cityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation_city>
          }
          groupBy: {
            args: Prisma.Location_cityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Location_cityGroupByOutputType>[]
          }
          count: {
            args: Prisma.Location_cityCountArgs<ExtArgs>
            result: $Utils.Optional<Location_cityCountAggregateOutputType> | number
          }
        }
      }
      Location_country: {
        payload: Prisma.$Location_countryPayload<ExtArgs>
        fields: Prisma.Location_countryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Location_countryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Location_countryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload>
          }
          findFirst: {
            args: Prisma.Location_countryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Location_countryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload>
          }
          findMany: {
            args: Prisma.Location_countryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload>[]
          }
          create: {
            args: Prisma.Location_countryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload>
          }
          createMany: {
            args: Prisma.Location_countryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Location_countryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload>[]
          }
          delete: {
            args: Prisma.Location_countryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload>
          }
          update: {
            args: Prisma.Location_countryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload>
          }
          deleteMany: {
            args: Prisma.Location_countryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Location_countryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Location_countryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Location_countryPayload>
          }
          aggregate: {
            args: Prisma.Location_countryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation_country>
          }
          groupBy: {
            args: Prisma.Location_countryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Location_countryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Location_countryCountArgs<ExtArgs>
            result: $Utils.Optional<Location_countryCountAggregateOutputType> | number
          }
        }
      }
      Ticket_types: {
        payload: Prisma.$Ticket_typesPayload<ExtArgs>
        fields: Prisma.Ticket_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Ticket_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Ticket_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload>
          }
          findFirst: {
            args: Prisma.Ticket_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Ticket_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload>
          }
          findMany: {
            args: Prisma.Ticket_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload>[]
          }
          create: {
            args: Prisma.Ticket_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload>
          }
          createMany: {
            args: Prisma.Ticket_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Ticket_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload>[]
          }
          delete: {
            args: Prisma.Ticket_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload>
          }
          update: {
            args: Prisma.Ticket_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload>
          }
          deleteMany: {
            args: Prisma.Ticket_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Ticket_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Ticket_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_typesPayload>
          }
          aggregate: {
            args: Prisma.Ticket_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_types>
          }
          groupBy: {
            args: Prisma.Ticket_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Ticket_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_typesCountAggregateOutputType> | number
          }
        }
      }
      Transaction_Detail: {
        payload: Prisma.$Transaction_DetailPayload<ExtArgs>
        fields: Prisma.Transaction_DetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Transaction_DetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Transaction_DetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload>
          }
          findFirst: {
            args: Prisma.Transaction_DetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Transaction_DetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload>
          }
          findMany: {
            args: Prisma.Transaction_DetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload>[]
          }
          create: {
            args: Prisma.Transaction_DetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload>
          }
          createMany: {
            args: Prisma.Transaction_DetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Transaction_DetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload>[]
          }
          delete: {
            args: Prisma.Transaction_DetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload>
          }
          update: {
            args: Prisma.Transaction_DetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload>
          }
          deleteMany: {
            args: Prisma.Transaction_DetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Transaction_DetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Transaction_DetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Transaction_DetailPayload>
          }
          aggregate: {
            args: Prisma.Transaction_DetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_Detail>
          }
          groupBy: {
            args: Prisma.Transaction_DetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_DetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.Transaction_DetailCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_DetailCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    points: number
    coupons: number
    events: number
    transaction_details: number
    transaction: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | UserCountOutputTypeCountPointsArgs
    coupons?: boolean | UserCountOutputTypeCountCouponsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
    transaction_details?: boolean | UserCountOutputTypeCountTransaction_detailsArgs
    transaction?: boolean | UserCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransaction_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Transaction_DetailWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    addresses: number
    social_medias: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | ProfileCountOutputTypeCountAddressesArgs
    social_medias?: boolean | ProfileCountOutputTypeCountSocial_mediasArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSocial_mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Social_mediaWhereInput
  }


  /**
   * Count Type ReferralCountOutputType
   */

  export type ReferralCountOutputType = {
    referred_users: number
  }

  export type ReferralCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred_users?: boolean | ReferralCountOutputTypeCountReferred_usersArgs
  }

  // Custom InputTypes
  /**
   * ReferralCountOutputType without action
   */
  export type ReferralCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCountOutputType
     */
    select?: ReferralCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReferralCountOutputType without action
   */
  export type ReferralCountOutputTypeCountReferred_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    event_category: number
    ticket_types: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_category?: boolean | EventCountOutputTypeCountEvent_categoryArgs
    ticket_types?: boolean | EventCountOutputTypeCountTicket_typesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEvent_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event_categoryWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicket_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ticket_typesWhereInput
  }


  /**
   * Count Type Event_categoryCountOutputType
   */

  export type Event_categoryCountOutputType = {
    Event: number
  }

  export type Event_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Event_categoryCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * Event_categoryCountOutputType without action
   */
  export type Event_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_categoryCountOutputType
     */
    select?: Event_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Event_categoryCountOutputType without action
   */
  export type Event_categoryCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type Location_cityCountOutputType
   */

  export type Location_cityCountOutputType = {
    event_location: number
  }

  export type Location_cityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_location?: boolean | Location_cityCountOutputTypeCountEvent_locationArgs
  }

  // Custom InputTypes
  /**
   * Location_cityCountOutputType without action
   */
  export type Location_cityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_cityCountOutputType
     */
    select?: Location_cityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Location_cityCountOutputType without action
   */
  export type Location_cityCountOutputTypeCountEvent_locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event_LocationWhereInput
  }


  /**
   * Count Type Location_countryCountOutputType
   */

  export type Location_countryCountOutputType = {
    event_location: number
  }

  export type Location_countryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_location?: boolean | Location_countryCountOutputTypeCountEvent_locationArgs
  }

  // Custom InputTypes
  /**
   * Location_countryCountOutputType without action
   */
  export type Location_countryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_countryCountOutputType
     */
    select?: Location_countryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Location_countryCountOutputType without action
   */
  export type Location_countryCountOutputTypeCountEvent_locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event_LocationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
    referred_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
    referred_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    pfp_url: string | null
    created_at: Date | null
    isVerified: boolean | null
    role: $Enums.Role | null
    referred_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    pfp_url: string | null
    created_at: Date | null
    isVerified: boolean | null
    role: $Enums.Role | null
    referred_id: number | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password: number
    pfp_url: number
    created_at: number
    isVerified: number
    role: number
    referred_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
    referred_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
    referred_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    pfp_url?: true
    created_at?: true
    isVerified?: true
    role?: true
    referred_id?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    pfp_url?: true
    created_at?: true
    isVerified?: true
    role?: true
    referred_id?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    pfp_url?: true
    created_at?: true
    isVerified?: true
    role?: true
    referred_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    name: string
    email: string
    password: string
    pfp_url: string | null
    created_at: Date
    isVerified: boolean
    role: $Enums.Role
    referred_id: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pfp_url?: boolean
    created_at?: boolean
    isVerified?: boolean
    role?: boolean
    referred_id?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    referral?: boolean | User$referralArgs<ExtArgs>
    referred?: boolean | User$referredArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    coupons?: boolean | User$couponsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    transaction_details?: boolean | User$transaction_detailsArgs<ExtArgs>
    transaction?: boolean | User$transactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pfp_url?: boolean
    created_at?: boolean
    isVerified?: boolean
    role?: boolean
    referred_id?: boolean
    referred?: boolean | User$referredArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pfp_url?: boolean
    created_at?: boolean
    isVerified?: boolean
    role?: boolean
    referred_id?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    referral?: boolean | User$referralArgs<ExtArgs>
    referred?: boolean | User$referredArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    coupons?: boolean | User$couponsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    transaction_details?: boolean | User$transaction_detailsArgs<ExtArgs>
    transaction?: boolean | User$transactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred?: boolean | User$referredArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      referral: Prisma.$ReferralPayload<ExtArgs> | null
      referred: Prisma.$ReferralPayload<ExtArgs> | null
      points: Prisma.$PointPayload<ExtArgs>[]
      coupons: Prisma.$CouponPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      transaction_details: Prisma.$Transaction_DetailPayload<ExtArgs>[]
      transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      email: string
      password: string
      pfp_url: string | null
      created_at: Date
      isVerified: boolean
      role: $Enums.Role
      referred_id: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    referral<T extends User$referralArgs<ExtArgs> = {}>(args?: Subset<T, User$referralArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    referred<T extends User$referredArgs<ExtArgs> = {}>(args?: Subset<T, User$referredArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    points<T extends User$pointsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany"> | Null>
    coupons<T extends User$couponsArgs<ExtArgs> = {}>(args?: Subset<T, User$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    transaction_details<T extends User$transaction_detailsArgs<ExtArgs> = {}>(args?: Subset<T, User$transaction_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "findMany"> | Null>
    transaction<T extends User$transactionArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly pfp_url: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly referred_id: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.referral
   */
  export type User$referralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
  }

  /**
   * User.referred
   */
  export type User$referredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
  }

  /**
   * User.points
   */
  export type User$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * User.coupons
   */
  export type User$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.transaction_details
   */
  export type User$transaction_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    where?: Transaction_DetailWhereInput
    orderBy?: Transaction_DetailOrderByWithRelationInput | Transaction_DetailOrderByWithRelationInput[]
    cursor?: Transaction_DetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_DetailScalarFieldEnum | Transaction_DetailScalarFieldEnum[]
  }

  /**
   * User.transaction
   */
  export type User$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
  }

  export type ProfileSumAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
  }

  export type ProfileMinAggregateOutputType = {
    profile_id: number | null
    phone: string | null
    job_title: string | null
    company: string | null
    user_id: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    profile_id: number | null
    phone: string | null
    job_title: string | null
    company: string | null
    user_id: number | null
  }

  export type ProfileCountAggregateOutputType = {
    profile_id: number
    phone: number
    job_title: number
    company: number
    user_id: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    profile_id?: true
    user_id?: true
  }

  export type ProfileSumAggregateInputType = {
    profile_id?: true
    user_id?: true
  }

  export type ProfileMinAggregateInputType = {
    profile_id?: true
    phone?: true
    job_title?: true
    company?: true
    user_id?: true
  }

  export type ProfileMaxAggregateInputType = {
    profile_id?: true
    phone?: true
    job_title?: true
    company?: true
    user_id?: true
  }

  export type ProfileCountAggregateInputType = {
    profile_id?: true
    phone?: true
    job_title?: true
    company?: true
    user_id?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    profile_id: number
    phone: string | null
    job_title: string | null
    company: string | null
    user_id: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    phone?: boolean
    job_title?: boolean
    company?: boolean
    user_id?: boolean
    addresses?: boolean | Profile$addressesArgs<ExtArgs>
    social_medias?: boolean | Profile$social_mediasArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    phone?: boolean
    job_title?: boolean
    company?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    profile_id?: boolean
    phone?: boolean
    job_title?: boolean
    company?: boolean
    user_id?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Profile$addressesArgs<ExtArgs>
    social_medias?: boolean | Profile$social_mediasArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      social_medias: Prisma.$Social_mediaPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profile_id: number
      phone: string | null
      job_title: string | null
      company: string | null
      user_id: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.findMany({ select: { profile_id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.createManyAndReturn({ 
     *   select: { profile_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends Profile$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany"> | Null>
    social_medias<T extends Profile$social_mediasArgs<ExtArgs> = {}>(args?: Subset<T, Profile$social_mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly profile_id: FieldRef<"Profile", 'Int'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly job_title: FieldRef<"Profile", 'String'>
    readonly company: FieldRef<"Profile", 'String'>
    readonly user_id: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile.addresses
   */
  export type Profile$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Profile.social_medias
   */
  export type Profile$social_mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    where?: Social_mediaWhereInput
    orderBy?: Social_mediaOrderByWithRelationInput | Social_mediaOrderByWithRelationInput[]
    cursor?: Social_mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Social_mediaScalarFieldEnum | Social_mediaScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    address_id: number | null
    profile_id: number | null
  }

  export type AddressSumAggregateOutputType = {
    address_id: number | null
    profile_id: number | null
  }

  export type AddressMinAggregateOutputType = {
    address_id: number | null
    profile_id: number | null
    address_name: $Enums.AddressName | null
    address: string | null
    city: string | null
    country: string | null
    zipcode: string | null
  }

  export type AddressMaxAggregateOutputType = {
    address_id: number | null
    profile_id: number | null
    address_name: $Enums.AddressName | null
    address: string | null
    city: string | null
    country: string | null
    zipcode: string | null
  }

  export type AddressCountAggregateOutputType = {
    address_id: number
    profile_id: number
    address_name: number
    address: number
    city: number
    country: number
    zipcode: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    address_id?: true
    profile_id?: true
  }

  export type AddressSumAggregateInputType = {
    address_id?: true
    profile_id?: true
  }

  export type AddressMinAggregateInputType = {
    address_id?: true
    profile_id?: true
    address_name?: true
    address?: true
    city?: true
    country?: true
    zipcode?: true
  }

  export type AddressMaxAggregateInputType = {
    address_id?: true
    profile_id?: true
    address_name?: true
    address?: true
    city?: true
    country?: true
    zipcode?: true
  }

  export type AddressCountAggregateInputType = {
    address_id?: true
    profile_id?: true
    address_name?: true
    address?: true
    city?: true
    country?: true
    zipcode?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    address_id: number
    profile_id: number
    address_name: $Enums.AddressName
    address: string
    city: string
    country: string
    zipcode: string | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    profile_id?: boolean
    address_name?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    zipcode?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    profile_id?: boolean
    address_name?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    zipcode?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    address_id?: boolean
    profile_id?: boolean
    address_name?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    zipcode?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      address_id: number
      profile_id: number
      address_name: $Enums.AddressName
      address: string
      city: string
      country: string
      zipcode: string | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.findMany({ select: { address_id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.createManyAndReturn({ 
     *   select: { address_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly address_id: FieldRef<"Address", 'Int'>
    readonly profile_id: FieldRef<"Address", 'Int'>
    readonly address_name: FieldRef<"Address", 'AddressName'>
    readonly address: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly zipcode: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    point_id: number | null
    user_id: number | null
    amount: number | null
  }

  export type PointSumAggregateOutputType = {
    point_id: number | null
    user_id: number | null
    amount: number | null
  }

  export type PointMinAggregateOutputType = {
    point_id: number | null
    user_id: number | null
    amount: number | null
    added_date: Date | null
    expired_date: Date | null
  }

  export type PointMaxAggregateOutputType = {
    point_id: number | null
    user_id: number | null
    amount: number | null
    added_date: Date | null
    expired_date: Date | null
  }

  export type PointCountAggregateOutputType = {
    point_id: number
    user_id: number
    amount: number
    added_date: number
    expired_date: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    point_id?: true
    user_id?: true
    amount?: true
  }

  export type PointSumAggregateInputType = {
    point_id?: true
    user_id?: true
    amount?: true
  }

  export type PointMinAggregateInputType = {
    point_id?: true
    user_id?: true
    amount?: true
    added_date?: true
    expired_date?: true
  }

  export type PointMaxAggregateInputType = {
    point_id?: true
    user_id?: true
    amount?: true
    added_date?: true
    expired_date?: true
  }

  export type PointCountAggregateInputType = {
    point_id?: true
    user_id?: true
    amount?: true
    added_date?: true
    expired_date?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    point_id: number
    user_id: number
    amount: number
    added_date: Date
    expired_date: Date
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    point_id?: boolean
    user_id?: boolean
    amount?: boolean
    added_date?: boolean
    expired_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    point_id?: boolean
    user_id?: boolean
    amount?: boolean
    added_date?: boolean
    expired_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    point_id?: boolean
    user_id?: boolean
    amount?: boolean
    added_date?: boolean
    expired_date?: boolean
  }

  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      point_id: number
      user_id: number
      amount: number
      added_date: Date
      expired_date: Date
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `point_id`
     * const pointWithPoint_idOnly = await prisma.point.findMany({ select: { point_id: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `point_id`
     * const pointWithPoint_idOnly = await prisma.point.createManyAndReturn({ 
     *   select: { point_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Point model
   */ 
  interface PointFieldRefs {
    readonly point_id: FieldRef<"Point", 'Int'>
    readonly user_id: FieldRef<"Point", 'Int'>
    readonly amount: FieldRef<"Point", 'Int'>
    readonly added_date: FieldRef<"Point", 'DateTime'>
    readonly expired_date: FieldRef<"Point", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralAvgAggregateOutputType = {
    referral_id: number | null
    user_id: number | null
  }

  export type ReferralSumAggregateOutputType = {
    referral_id: number | null
    user_id: number | null
  }

  export type ReferralMinAggregateOutputType = {
    referral_id: number | null
    referral_code: string | null
    user_id: number | null
  }

  export type ReferralMaxAggregateOutputType = {
    referral_id: number | null
    referral_code: string | null
    user_id: number | null
  }

  export type ReferralCountAggregateOutputType = {
    referral_id: number
    referral_code: number
    user_id: number
    _all: number
  }


  export type ReferralAvgAggregateInputType = {
    referral_id?: true
    user_id?: true
  }

  export type ReferralSumAggregateInputType = {
    referral_id?: true
    user_id?: true
  }

  export type ReferralMinAggregateInputType = {
    referral_id?: true
    referral_code?: true
    user_id?: true
  }

  export type ReferralMaxAggregateInputType = {
    referral_id?: true
    referral_code?: true
    user_id?: true
  }

  export type ReferralCountAggregateInputType = {
    referral_id?: true
    referral_code?: true
    user_id?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _avg?: ReferralAvgAggregateInputType
    _sum?: ReferralSumAggregateInputType
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    referral_id: number
    referral_code: string
    user_id: number
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    referral_id?: boolean
    referral_code?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    referred_users?: boolean | Referral$referred_usersArgs<ExtArgs>
    _count?: boolean | ReferralCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    referral_id?: boolean
    referral_code?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    referral_id?: boolean
    referral_code?: boolean
    user_id?: boolean
  }

  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    referred_users?: boolean | Referral$referred_usersArgs<ExtArgs>
    _count?: boolean | ReferralCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      referred_users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      referral_id: number
      referral_code: string
      user_id: number
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `referral_id`
     * const referralWithReferral_idOnly = await prisma.referral.findMany({ select: { referral_id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `referral_id`
     * const referralWithReferral_idOnly = await prisma.referral.createManyAndReturn({ 
     *   select: { referral_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    referred_users<T extends Referral$referred_usersArgs<ExtArgs> = {}>(args?: Subset<T, Referral$referred_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referral model
   */ 
  interface ReferralFieldRefs {
    readonly referral_id: FieldRef<"Referral", 'Int'>
    readonly referral_code: FieldRef<"Referral", 'String'>
    readonly user_id: FieldRef<"Referral", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
  }

  /**
   * Referral.referred_users
   */
  export type Referral$referred_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model Social_media
   */

  export type AggregateSocial_media = {
    _count: Social_mediaCountAggregateOutputType | null
    _avg: Social_mediaAvgAggregateOutputType | null
    _sum: Social_mediaSumAggregateOutputType | null
    _min: Social_mediaMinAggregateOutputType | null
    _max: Social_mediaMaxAggregateOutputType | null
  }

  export type Social_mediaAvgAggregateOutputType = {
    social_id: number | null
    profile_id: number | null
  }

  export type Social_mediaSumAggregateOutputType = {
    social_id: number | null
    profile_id: number | null
  }

  export type Social_mediaMinAggregateOutputType = {
    social_id: number | null
    profile_id: number | null
    platform: $Enums.Platform | null
    account_name: string | null
    url: string | null
  }

  export type Social_mediaMaxAggregateOutputType = {
    social_id: number | null
    profile_id: number | null
    platform: $Enums.Platform | null
    account_name: string | null
    url: string | null
  }

  export type Social_mediaCountAggregateOutputType = {
    social_id: number
    profile_id: number
    platform: number
    account_name: number
    url: number
    _all: number
  }


  export type Social_mediaAvgAggregateInputType = {
    social_id?: true
    profile_id?: true
  }

  export type Social_mediaSumAggregateInputType = {
    social_id?: true
    profile_id?: true
  }

  export type Social_mediaMinAggregateInputType = {
    social_id?: true
    profile_id?: true
    platform?: true
    account_name?: true
    url?: true
  }

  export type Social_mediaMaxAggregateInputType = {
    social_id?: true
    profile_id?: true
    platform?: true
    account_name?: true
    url?: true
  }

  export type Social_mediaCountAggregateInputType = {
    social_id?: true
    profile_id?: true
    platform?: true
    account_name?: true
    url?: true
    _all?: true
  }

  export type Social_mediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Social_media to aggregate.
     */
    where?: Social_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Social_medias to fetch.
     */
    orderBy?: Social_mediaOrderByWithRelationInput | Social_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Social_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Social_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Social_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Social_medias
    **/
    _count?: true | Social_mediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Social_mediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Social_mediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Social_mediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Social_mediaMaxAggregateInputType
  }

  export type GetSocial_mediaAggregateType<T extends Social_mediaAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial_media]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial_media[P]>
      : GetScalarType<T[P], AggregateSocial_media[P]>
  }




  export type Social_mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Social_mediaWhereInput
    orderBy?: Social_mediaOrderByWithAggregationInput | Social_mediaOrderByWithAggregationInput[]
    by: Social_mediaScalarFieldEnum[] | Social_mediaScalarFieldEnum
    having?: Social_mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Social_mediaCountAggregateInputType | true
    _avg?: Social_mediaAvgAggregateInputType
    _sum?: Social_mediaSumAggregateInputType
    _min?: Social_mediaMinAggregateInputType
    _max?: Social_mediaMaxAggregateInputType
  }

  export type Social_mediaGroupByOutputType = {
    social_id: number
    profile_id: number
    platform: $Enums.Platform
    account_name: string
    url: string
    _count: Social_mediaCountAggregateOutputType | null
    _avg: Social_mediaAvgAggregateOutputType | null
    _sum: Social_mediaSumAggregateOutputType | null
    _min: Social_mediaMinAggregateOutputType | null
    _max: Social_mediaMaxAggregateOutputType | null
  }

  type GetSocial_mediaGroupByPayload<T extends Social_mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Social_mediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Social_mediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Social_mediaGroupByOutputType[P]>
            : GetScalarType<T[P], Social_mediaGroupByOutputType[P]>
        }
      >
    >


  export type Social_mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    social_id?: boolean
    profile_id?: boolean
    platform?: boolean
    account_name?: boolean
    url?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social_media"]>

  export type Social_mediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    social_id?: boolean
    profile_id?: boolean
    platform?: boolean
    account_name?: boolean
    url?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social_media"]>

  export type Social_mediaSelectScalar = {
    social_id?: boolean
    profile_id?: boolean
    platform?: boolean
    account_name?: boolean
    url?: boolean
  }

  export type Social_mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type Social_mediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $Social_mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Social_media"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      social_id: number
      profile_id: number
      platform: $Enums.Platform
      account_name: string
      url: string
    }, ExtArgs["result"]["social_media"]>
    composites: {}
  }

  type Social_mediaGetPayload<S extends boolean | null | undefined | Social_mediaDefaultArgs> = $Result.GetResult<Prisma.$Social_mediaPayload, S>

  type Social_mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Social_mediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Social_mediaCountAggregateInputType | true
    }

  export interface Social_mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Social_media'], meta: { name: 'Social_media' } }
    /**
     * Find zero or one Social_media that matches the filter.
     * @param {Social_mediaFindUniqueArgs} args - Arguments to find a Social_media
     * @example
     * // Get one Social_media
     * const social_media = await prisma.social_media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Social_mediaFindUniqueArgs>(args: SelectSubset<T, Social_mediaFindUniqueArgs<ExtArgs>>): Prisma__Social_mediaClient<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Social_media that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Social_mediaFindUniqueOrThrowArgs} args - Arguments to find a Social_media
     * @example
     * // Get one Social_media
     * const social_media = await prisma.social_media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Social_mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, Social_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Social_mediaClient<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Social_media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_mediaFindFirstArgs} args - Arguments to find a Social_media
     * @example
     * // Get one Social_media
     * const social_media = await prisma.social_media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Social_mediaFindFirstArgs>(args?: SelectSubset<T, Social_mediaFindFirstArgs<ExtArgs>>): Prisma__Social_mediaClient<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Social_media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_mediaFindFirstOrThrowArgs} args - Arguments to find a Social_media
     * @example
     * // Get one Social_media
     * const social_media = await prisma.social_media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Social_mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, Social_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Social_mediaClient<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Social_medias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Social_medias
     * const social_medias = await prisma.social_media.findMany()
     * 
     * // Get first 10 Social_medias
     * const social_medias = await prisma.social_media.findMany({ take: 10 })
     * 
     * // Only select the `social_id`
     * const social_mediaWithSocial_idOnly = await prisma.social_media.findMany({ select: { social_id: true } })
     * 
     */
    findMany<T extends Social_mediaFindManyArgs>(args?: SelectSubset<T, Social_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Social_media.
     * @param {Social_mediaCreateArgs} args - Arguments to create a Social_media.
     * @example
     * // Create one Social_media
     * const Social_media = await prisma.social_media.create({
     *   data: {
     *     // ... data to create a Social_media
     *   }
     * })
     * 
     */
    create<T extends Social_mediaCreateArgs>(args: SelectSubset<T, Social_mediaCreateArgs<ExtArgs>>): Prisma__Social_mediaClient<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Social_medias.
     * @param {Social_mediaCreateManyArgs} args - Arguments to create many Social_medias.
     * @example
     * // Create many Social_medias
     * const social_media = await prisma.social_media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Social_mediaCreateManyArgs>(args?: SelectSubset<T, Social_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Social_medias and returns the data saved in the database.
     * @param {Social_mediaCreateManyAndReturnArgs} args - Arguments to create many Social_medias.
     * @example
     * // Create many Social_medias
     * const social_media = await prisma.social_media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Social_medias and only return the `social_id`
     * const social_mediaWithSocial_idOnly = await prisma.social_media.createManyAndReturn({ 
     *   select: { social_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Social_mediaCreateManyAndReturnArgs>(args?: SelectSubset<T, Social_mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Social_media.
     * @param {Social_mediaDeleteArgs} args - Arguments to delete one Social_media.
     * @example
     * // Delete one Social_media
     * const Social_media = await prisma.social_media.delete({
     *   where: {
     *     // ... filter to delete one Social_media
     *   }
     * })
     * 
     */
    delete<T extends Social_mediaDeleteArgs>(args: SelectSubset<T, Social_mediaDeleteArgs<ExtArgs>>): Prisma__Social_mediaClient<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Social_media.
     * @param {Social_mediaUpdateArgs} args - Arguments to update one Social_media.
     * @example
     * // Update one Social_media
     * const social_media = await prisma.social_media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Social_mediaUpdateArgs>(args: SelectSubset<T, Social_mediaUpdateArgs<ExtArgs>>): Prisma__Social_mediaClient<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Social_medias.
     * @param {Social_mediaDeleteManyArgs} args - Arguments to filter Social_medias to delete.
     * @example
     * // Delete a few Social_medias
     * const { count } = await prisma.social_media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Social_mediaDeleteManyArgs>(args?: SelectSubset<T, Social_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Social_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Social_medias
     * const social_media = await prisma.social_media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Social_mediaUpdateManyArgs>(args: SelectSubset<T, Social_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Social_media.
     * @param {Social_mediaUpsertArgs} args - Arguments to update or create a Social_media.
     * @example
     * // Update or create a Social_media
     * const social_media = await prisma.social_media.upsert({
     *   create: {
     *     // ... data to create a Social_media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social_media we want to update
     *   }
     * })
     */
    upsert<T extends Social_mediaUpsertArgs>(args: SelectSubset<T, Social_mediaUpsertArgs<ExtArgs>>): Prisma__Social_mediaClient<$Result.GetResult<Prisma.$Social_mediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Social_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_mediaCountArgs} args - Arguments to filter Social_medias to count.
     * @example
     * // Count the number of Social_medias
     * const count = await prisma.social_media.count({
     *   where: {
     *     // ... the filter for the Social_medias we want to count
     *   }
     * })
    **/
    count<T extends Social_mediaCountArgs>(
      args?: Subset<T, Social_mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Social_mediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_mediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Social_mediaAggregateArgs>(args: Subset<T, Social_mediaAggregateArgs>): Prisma.PrismaPromise<GetSocial_mediaAggregateType<T>>

    /**
     * Group by Social_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Social_mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Social_mediaGroupByArgs['orderBy'] }
        : { orderBy?: Social_mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Social_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocial_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Social_media model
   */
  readonly fields: Social_mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Social_media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Social_mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Social_media model
   */ 
  interface Social_mediaFieldRefs {
    readonly social_id: FieldRef<"Social_media", 'Int'>
    readonly profile_id: FieldRef<"Social_media", 'Int'>
    readonly platform: FieldRef<"Social_media", 'Platform'>
    readonly account_name: FieldRef<"Social_media", 'String'>
    readonly url: FieldRef<"Social_media", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Social_media findUnique
   */
  export type Social_mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Social_media to fetch.
     */
    where: Social_mediaWhereUniqueInput
  }

  /**
   * Social_media findUniqueOrThrow
   */
  export type Social_mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Social_media to fetch.
     */
    where: Social_mediaWhereUniqueInput
  }

  /**
   * Social_media findFirst
   */
  export type Social_mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Social_media to fetch.
     */
    where?: Social_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Social_medias to fetch.
     */
    orderBy?: Social_mediaOrderByWithRelationInput | Social_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Social_medias.
     */
    cursor?: Social_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Social_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Social_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Social_medias.
     */
    distinct?: Social_mediaScalarFieldEnum | Social_mediaScalarFieldEnum[]
  }

  /**
   * Social_media findFirstOrThrow
   */
  export type Social_mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Social_media to fetch.
     */
    where?: Social_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Social_medias to fetch.
     */
    orderBy?: Social_mediaOrderByWithRelationInput | Social_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Social_medias.
     */
    cursor?: Social_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Social_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Social_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Social_medias.
     */
    distinct?: Social_mediaScalarFieldEnum | Social_mediaScalarFieldEnum[]
  }

  /**
   * Social_media findMany
   */
  export type Social_mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Social_medias to fetch.
     */
    where?: Social_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Social_medias to fetch.
     */
    orderBy?: Social_mediaOrderByWithRelationInput | Social_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Social_medias.
     */
    cursor?: Social_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Social_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Social_medias.
     */
    skip?: number
    distinct?: Social_mediaScalarFieldEnum | Social_mediaScalarFieldEnum[]
  }

  /**
   * Social_media create
   */
  export type Social_mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Social_media.
     */
    data: XOR<Social_mediaCreateInput, Social_mediaUncheckedCreateInput>
  }

  /**
   * Social_media createMany
   */
  export type Social_mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Social_medias.
     */
    data: Social_mediaCreateManyInput | Social_mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Social_media createManyAndReturn
   */
  export type Social_mediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Social_medias.
     */
    data: Social_mediaCreateManyInput | Social_mediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Social_media update
   */
  export type Social_mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Social_media.
     */
    data: XOR<Social_mediaUpdateInput, Social_mediaUncheckedUpdateInput>
    /**
     * Choose, which Social_media to update.
     */
    where: Social_mediaWhereUniqueInput
  }

  /**
   * Social_media updateMany
   */
  export type Social_mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Social_medias.
     */
    data: XOR<Social_mediaUpdateManyMutationInput, Social_mediaUncheckedUpdateManyInput>
    /**
     * Filter which Social_medias to update
     */
    where?: Social_mediaWhereInput
  }

  /**
   * Social_media upsert
   */
  export type Social_mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Social_media to update in case it exists.
     */
    where: Social_mediaWhereUniqueInput
    /**
     * In case the Social_media found by the `where` argument doesn't exist, create a new Social_media with this data.
     */
    create: XOR<Social_mediaCreateInput, Social_mediaUncheckedCreateInput>
    /**
     * In case the Social_media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Social_mediaUpdateInput, Social_mediaUncheckedUpdateInput>
  }

  /**
   * Social_media delete
   */
  export type Social_mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
    /**
     * Filter which Social_media to delete.
     */
    where: Social_mediaWhereUniqueInput
  }

  /**
   * Social_media deleteMany
   */
  export type Social_mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Social_medias to delete
     */
    where?: Social_mediaWhereInput
  }

  /**
   * Social_media without action
   */
  export type Social_mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_media
     */
    select?: Social_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Social_mediaInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    coupon_id: number | null
    user_id: number | null
    discount: number | null
    max_amount: number | null
  }

  export type CouponSumAggregateOutputType = {
    coupon_id: number | null
    user_id: number | null
    discount: number | null
    max_amount: number | null
  }

  export type CouponMinAggregateOutputType = {
    coupon_id: number | null
    coupon_name: string | null
    user_id: number | null
    coupon_code: string | null
    discount: number | null
    max_amount: number | null
    start_date: Date | null
    expired_date: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    coupon_id: number | null
    coupon_name: string | null
    user_id: number | null
    coupon_code: string | null
    discount: number | null
    max_amount: number | null
    start_date: Date | null
    expired_date: Date | null
  }

  export type CouponCountAggregateOutputType = {
    coupon_id: number
    coupon_name: number
    user_id: number
    coupon_code: number
    discount: number
    max_amount: number
    start_date: number
    expired_date: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    coupon_id?: true
    user_id?: true
    discount?: true
    max_amount?: true
  }

  export type CouponSumAggregateInputType = {
    coupon_id?: true
    user_id?: true
    discount?: true
    max_amount?: true
  }

  export type CouponMinAggregateInputType = {
    coupon_id?: true
    coupon_name?: true
    user_id?: true
    coupon_code?: true
    discount?: true
    max_amount?: true
    start_date?: true
    expired_date?: true
  }

  export type CouponMaxAggregateInputType = {
    coupon_id?: true
    coupon_name?: true
    user_id?: true
    coupon_code?: true
    discount?: true
    max_amount?: true
    start_date?: true
    expired_date?: true
  }

  export type CouponCountAggregateInputType = {
    coupon_id?: true
    coupon_name?: true
    user_id?: true
    coupon_code?: true
    discount?: true
    max_amount?: true
    start_date?: true
    expired_date?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    coupon_id: number
    coupon_name: string
    user_id: number
    coupon_code: string
    discount: number
    max_amount: number | null
    start_date: Date
    expired_date: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coupon_id?: boolean
    coupon_name?: boolean
    user_id?: boolean
    coupon_code?: boolean
    discount?: boolean
    max_amount?: boolean
    start_date?: boolean
    expired_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coupon_id?: boolean
    coupon_name?: boolean
    user_id?: boolean
    coupon_code?: boolean
    discount?: boolean
    max_amount?: boolean
    start_date?: boolean
    expired_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectScalar = {
    coupon_id?: boolean
    coupon_name?: boolean
    user_id?: boolean
    coupon_code?: boolean
    discount?: boolean
    max_amount?: boolean
    start_date?: boolean
    expired_date?: boolean
  }

  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      coupon_id: number
      coupon_name: string
      user_id: number
      coupon_code: string
      discount: number
      max_amount: number | null
      start_date: Date
      expired_date: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `coupon_id`
     * const couponWithCoupon_idOnly = await prisma.coupon.findMany({ select: { coupon_id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {CouponCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `coupon_id`
     * const couponWithCoupon_idOnly = await prisma.coupon.createManyAndReturn({ 
     *   select: { coupon_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coupon model
   */ 
  interface CouponFieldRefs {
    readonly coupon_id: FieldRef<"Coupon", 'Int'>
    readonly coupon_name: FieldRef<"Coupon", 'String'>
    readonly user_id: FieldRef<"Coupon", 'Int'>
    readonly coupon_code: FieldRef<"Coupon", 'String'>
    readonly discount: FieldRef<"Coupon", 'Int'>
    readonly max_amount: FieldRef<"Coupon", 'Int'>
    readonly start_date: FieldRef<"Coupon", 'DateTime'>
    readonly expired_date: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon createManyAndReturn
   */
  export type CouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    event_id: number | null
    user_id: number | null
    coupon_id: number | null
    event_location_id: number | null
  }

  export type EventSumAggregateOutputType = {
    event_id: number | null
    user_id: number | null
    coupon_id: number | null
    event_location_id: number | null
  }

  export type EventMinAggregateOutputType = {
    event_id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    imgEvent: string | null
    coupon_id: number | null
    event_location_id: number | null
    startDate: Date | null
    endDate: Date | null
    startTime: string | null
    endTime: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    event_id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    imgEvent: string | null
    coupon_id: number | null
    event_location_id: number | null
    startDate: Date | null
    endDate: Date | null
    startTime: string | null
    endTime: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    event_id: number
    user_id: number
    title: number
    description: number
    imgEvent: number
    coupon_id: number
    event_location_id: number
    startDate: number
    endDate: number
    startTime: number
    endTime: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    event_id?: true
    user_id?: true
    coupon_id?: true
    event_location_id?: true
  }

  export type EventSumAggregateInputType = {
    event_id?: true
    user_id?: true
    coupon_id?: true
    event_location_id?: true
  }

  export type EventMinAggregateInputType = {
    event_id?: true
    user_id?: true
    title?: true
    description?: true
    imgEvent?: true
    coupon_id?: true
    event_location_id?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    event_id?: true
    user_id?: true
    title?: true
    description?: true
    imgEvent?: true
    coupon_id?: true
    event_location_id?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    event_id?: true
    user_id?: true
    title?: true
    description?: true
    imgEvent?: true
    coupon_id?: true
    event_location_id?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    event_id: number
    user_id: number
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    event_location_id: number
    startDate: Date
    endDate: Date
    startTime: string
    endTime: string
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    imgEvent?: boolean
    coupon_id?: boolean
    event_location_id?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event_category?: boolean | Event$event_categoryArgs<ExtArgs>
    event_location?: boolean | Event_LocationDefaultArgs<ExtArgs>
    ticket_types?: boolean | Event$ticket_typesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    imgEvent?: boolean
    coupon_id?: boolean
    event_location_id?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event_location?: boolean | Event_LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    event_id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    imgEvent?: boolean
    coupon_id?: boolean
    event_location_id?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event_category?: boolean | Event$event_categoryArgs<ExtArgs>
    event_location?: boolean | Event_LocationDefaultArgs<ExtArgs>
    ticket_types?: boolean | Event$ticket_typesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event_location?: boolean | Event_LocationDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event_category: Prisma.$Event_categoryPayload<ExtArgs>[]
      event_location: Prisma.$Event_LocationPayload<ExtArgs>
      ticket_types: Prisma.$Ticket_typesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      event_id: number
      user_id: number
      title: string
      description: string
      imgEvent: string
      coupon_id: number
      event_location_id: number
      startDate: Date
      endDate: Date
      startTime: string
      endTime: string
      timezone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `event_id`
     * const eventWithEvent_idOnly = await prisma.event.findMany({ select: { event_id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `event_id`
     * const eventWithEvent_idOnly = await prisma.event.createManyAndReturn({ 
     *   select: { event_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event_category<T extends Event$event_categoryArgs<ExtArgs> = {}>(args?: Subset<T, Event$event_categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "findMany"> | Null>
    event_location<T extends Event_LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Event_LocationDefaultArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket_types<T extends Event$ticket_typesArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticket_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly event_id: FieldRef<"Event", 'Int'>
    readonly user_id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly imgEvent: FieldRef<"Event", 'String'>
    readonly coupon_id: FieldRef<"Event", 'Int'>
    readonly event_location_id: FieldRef<"Event", 'Int'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly startTime: FieldRef<"Event", 'String'>
    readonly endTime: FieldRef<"Event", 'String'>
    readonly timezone: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.event_category
   */
  export type Event$event_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    where?: Event_categoryWhereInput
    orderBy?: Event_categoryOrderByWithRelationInput | Event_categoryOrderByWithRelationInput[]
    cursor?: Event_categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_categoryScalarFieldEnum | Event_categoryScalarFieldEnum[]
  }

  /**
   * Event.ticket_types
   */
  export type Event$ticket_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    where?: Ticket_typesWhereInput
    orderBy?: Ticket_typesOrderByWithRelationInput | Ticket_typesOrderByWithRelationInput[]
    cursor?: Ticket_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Event_category
   */

  export type AggregateEvent_category = {
    _count: Event_categoryCountAggregateOutputType | null
    _avg: Event_categoryAvgAggregateOutputType | null
    _sum: Event_categorySumAggregateOutputType | null
    _min: Event_categoryMinAggregateOutputType | null
    _max: Event_categoryMaxAggregateOutputType | null
  }

  export type Event_categoryAvgAggregateOutputType = {
    event_category_id: number | null
  }

  export type Event_categorySumAggregateOutputType = {
    event_category_id: number | null
  }

  export type Event_categoryMinAggregateOutputType = {
    event_category_id: number | null
    category_name: string | null
  }

  export type Event_categoryMaxAggregateOutputType = {
    event_category_id: number | null
    category_name: string | null
  }

  export type Event_categoryCountAggregateOutputType = {
    event_category_id: number
    category_name: number
    _all: number
  }


  export type Event_categoryAvgAggregateInputType = {
    event_category_id?: true
  }

  export type Event_categorySumAggregateInputType = {
    event_category_id?: true
  }

  export type Event_categoryMinAggregateInputType = {
    event_category_id?: true
    category_name?: true
  }

  export type Event_categoryMaxAggregateInputType = {
    event_category_id?: true
    category_name?: true
  }

  export type Event_categoryCountAggregateInputType = {
    event_category_id?: true
    category_name?: true
    _all?: true
  }

  export type Event_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event_category to aggregate.
     */
    where?: Event_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_categories to fetch.
     */
    orderBy?: Event_categoryOrderByWithRelationInput | Event_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Event_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Event_categories
    **/
    _count?: true | Event_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_categoryMaxAggregateInputType
  }

  export type GetEvent_categoryAggregateType<T extends Event_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_category[P]>
      : GetScalarType<T[P], AggregateEvent_category[P]>
  }




  export type Event_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event_categoryWhereInput
    orderBy?: Event_categoryOrderByWithAggregationInput | Event_categoryOrderByWithAggregationInput[]
    by: Event_categoryScalarFieldEnum[] | Event_categoryScalarFieldEnum
    having?: Event_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_categoryCountAggregateInputType | true
    _avg?: Event_categoryAvgAggregateInputType
    _sum?: Event_categorySumAggregateInputType
    _min?: Event_categoryMinAggregateInputType
    _max?: Event_categoryMaxAggregateInputType
  }

  export type Event_categoryGroupByOutputType = {
    event_category_id: number
    category_name: string
    _count: Event_categoryCountAggregateOutputType | null
    _avg: Event_categoryAvgAggregateOutputType | null
    _sum: Event_categorySumAggregateOutputType | null
    _min: Event_categoryMinAggregateOutputType | null
    _max: Event_categoryMaxAggregateOutputType | null
  }

  type GetEvent_categoryGroupByPayload<T extends Event_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Event_categoryGroupByOutputType[P]>
        }
      >
    >


  export type Event_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_category_id?: boolean
    category_name?: boolean
    Event?: boolean | Event_category$EventArgs<ExtArgs>
    _count?: boolean | Event_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event_category"]>

  export type Event_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_category_id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["event_category"]>

  export type Event_categorySelectScalar = {
    event_category_id?: boolean
    category_name?: boolean
  }

  export type Event_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Event_category$EventArgs<ExtArgs>
    _count?: boolean | Event_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Event_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Event_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event_category"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      event_category_id: number
      category_name: string
    }, ExtArgs["result"]["event_category"]>
    composites: {}
  }

  type Event_categoryGetPayload<S extends boolean | null | undefined | Event_categoryDefaultArgs> = $Result.GetResult<Prisma.$Event_categoryPayload, S>

  type Event_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Event_categoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Event_categoryCountAggregateInputType | true
    }

  export interface Event_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event_category'], meta: { name: 'Event_category' } }
    /**
     * Find zero or one Event_category that matches the filter.
     * @param {Event_categoryFindUniqueArgs} args - Arguments to find a Event_category
     * @example
     * // Get one Event_category
     * const event_category = await prisma.event_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Event_categoryFindUniqueArgs>(args: SelectSubset<T, Event_categoryFindUniqueArgs<ExtArgs>>): Prisma__Event_categoryClient<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event_category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Event_categoryFindUniqueOrThrowArgs} args - Arguments to find a Event_category
     * @example
     * // Get one Event_category
     * const event_category = await prisma.event_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Event_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Event_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Event_categoryClient<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_categoryFindFirstArgs} args - Arguments to find a Event_category
     * @example
     * // Get one Event_category
     * const event_category = await prisma.event_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Event_categoryFindFirstArgs>(args?: SelectSubset<T, Event_categoryFindFirstArgs<ExtArgs>>): Prisma__Event_categoryClient<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_categoryFindFirstOrThrowArgs} args - Arguments to find a Event_category
     * @example
     * // Get one Event_category
     * const event_category = await prisma.event_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Event_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Event_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Event_categoryClient<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Event_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_categories
     * const event_categories = await prisma.event_category.findMany()
     * 
     * // Get first 10 Event_categories
     * const event_categories = await prisma.event_category.findMany({ take: 10 })
     * 
     * // Only select the `event_category_id`
     * const event_categoryWithEvent_category_idOnly = await prisma.event_category.findMany({ select: { event_category_id: true } })
     * 
     */
    findMany<T extends Event_categoryFindManyArgs>(args?: SelectSubset<T, Event_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event_category.
     * @param {Event_categoryCreateArgs} args - Arguments to create a Event_category.
     * @example
     * // Create one Event_category
     * const Event_category = await prisma.event_category.create({
     *   data: {
     *     // ... data to create a Event_category
     *   }
     * })
     * 
     */
    create<T extends Event_categoryCreateArgs>(args: SelectSubset<T, Event_categoryCreateArgs<ExtArgs>>): Prisma__Event_categoryClient<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Event_categories.
     * @param {Event_categoryCreateManyArgs} args - Arguments to create many Event_categories.
     * @example
     * // Create many Event_categories
     * const event_category = await prisma.event_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Event_categoryCreateManyArgs>(args?: SelectSubset<T, Event_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_categories and returns the data saved in the database.
     * @param {Event_categoryCreateManyAndReturnArgs} args - Arguments to create many Event_categories.
     * @example
     * // Create many Event_categories
     * const event_category = await prisma.event_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_categories and only return the `event_category_id`
     * const event_categoryWithEvent_category_idOnly = await prisma.event_category.createManyAndReturn({ 
     *   select: { event_category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Event_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, Event_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event_category.
     * @param {Event_categoryDeleteArgs} args - Arguments to delete one Event_category.
     * @example
     * // Delete one Event_category
     * const Event_category = await prisma.event_category.delete({
     *   where: {
     *     // ... filter to delete one Event_category
     *   }
     * })
     * 
     */
    delete<T extends Event_categoryDeleteArgs>(args: SelectSubset<T, Event_categoryDeleteArgs<ExtArgs>>): Prisma__Event_categoryClient<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event_category.
     * @param {Event_categoryUpdateArgs} args - Arguments to update one Event_category.
     * @example
     * // Update one Event_category
     * const event_category = await prisma.event_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Event_categoryUpdateArgs>(args: SelectSubset<T, Event_categoryUpdateArgs<ExtArgs>>): Prisma__Event_categoryClient<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Event_categories.
     * @param {Event_categoryDeleteManyArgs} args - Arguments to filter Event_categories to delete.
     * @example
     * // Delete a few Event_categories
     * const { count } = await prisma.event_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Event_categoryDeleteManyArgs>(args?: SelectSubset<T, Event_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_categories
     * const event_category = await prisma.event_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Event_categoryUpdateManyArgs>(args: SelectSubset<T, Event_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_category.
     * @param {Event_categoryUpsertArgs} args - Arguments to update or create a Event_category.
     * @example
     * // Update or create a Event_category
     * const event_category = await prisma.event_category.upsert({
     *   create: {
     *     // ... data to create a Event_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_category we want to update
     *   }
     * })
     */
    upsert<T extends Event_categoryUpsertArgs>(args: SelectSubset<T, Event_categoryUpsertArgs<ExtArgs>>): Prisma__Event_categoryClient<$Result.GetResult<Prisma.$Event_categoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Event_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_categoryCountArgs} args - Arguments to filter Event_categories to count.
     * @example
     * // Count the number of Event_categories
     * const count = await prisma.event_category.count({
     *   where: {
     *     // ... the filter for the Event_categories we want to count
     *   }
     * })
    **/
    count<T extends Event_categoryCountArgs>(
      args?: Subset<T, Event_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_categoryAggregateArgs>(args: Subset<T, Event_categoryAggregateArgs>): Prisma.PrismaPromise<GetEvent_categoryAggregateType<T>>

    /**
     * Group by Event_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Event_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Event_categoryGroupByArgs['orderBy'] }
        : { orderBy?: Event_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Event_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event_category model
   */
  readonly fields: Event_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Event_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends Event_category$EventArgs<ExtArgs> = {}>(args?: Subset<T, Event_category$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event_category model
   */ 
  interface Event_categoryFieldRefs {
    readonly event_category_id: FieldRef<"Event_category", 'Int'>
    readonly category_name: FieldRef<"Event_category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event_category findUnique
   */
  export type Event_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Event_category to fetch.
     */
    where: Event_categoryWhereUniqueInput
  }

  /**
   * Event_category findUniqueOrThrow
   */
  export type Event_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Event_category to fetch.
     */
    where: Event_categoryWhereUniqueInput
  }

  /**
   * Event_category findFirst
   */
  export type Event_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Event_category to fetch.
     */
    where?: Event_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_categories to fetch.
     */
    orderBy?: Event_categoryOrderByWithRelationInput | Event_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event_categories.
     */
    cursor?: Event_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event_categories.
     */
    distinct?: Event_categoryScalarFieldEnum | Event_categoryScalarFieldEnum[]
  }

  /**
   * Event_category findFirstOrThrow
   */
  export type Event_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Event_category to fetch.
     */
    where?: Event_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_categories to fetch.
     */
    orderBy?: Event_categoryOrderByWithRelationInput | Event_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event_categories.
     */
    cursor?: Event_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event_categories.
     */
    distinct?: Event_categoryScalarFieldEnum | Event_categoryScalarFieldEnum[]
  }

  /**
   * Event_category findMany
   */
  export type Event_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Event_categories to fetch.
     */
    where?: Event_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_categories to fetch.
     */
    orderBy?: Event_categoryOrderByWithRelationInput | Event_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Event_categories.
     */
    cursor?: Event_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_categories.
     */
    skip?: number
    distinct?: Event_categoryScalarFieldEnum | Event_categoryScalarFieldEnum[]
  }

  /**
   * Event_category create
   */
  export type Event_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Event_category.
     */
    data: XOR<Event_categoryCreateInput, Event_categoryUncheckedCreateInput>
  }

  /**
   * Event_category createMany
   */
  export type Event_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Event_categories.
     */
    data: Event_categoryCreateManyInput | Event_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event_category createManyAndReturn
   */
  export type Event_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Event_categories.
     */
    data: Event_categoryCreateManyInput | Event_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event_category update
   */
  export type Event_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Event_category.
     */
    data: XOR<Event_categoryUpdateInput, Event_categoryUncheckedUpdateInput>
    /**
     * Choose, which Event_category to update.
     */
    where: Event_categoryWhereUniqueInput
  }

  /**
   * Event_category updateMany
   */
  export type Event_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Event_categories.
     */
    data: XOR<Event_categoryUpdateManyMutationInput, Event_categoryUncheckedUpdateManyInput>
    /**
     * Filter which Event_categories to update
     */
    where?: Event_categoryWhereInput
  }

  /**
   * Event_category upsert
   */
  export type Event_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Event_category to update in case it exists.
     */
    where: Event_categoryWhereUniqueInput
    /**
     * In case the Event_category found by the `where` argument doesn't exist, create a new Event_category with this data.
     */
    create: XOR<Event_categoryCreateInput, Event_categoryUncheckedCreateInput>
    /**
     * In case the Event_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Event_categoryUpdateInput, Event_categoryUncheckedUpdateInput>
  }

  /**
   * Event_category delete
   */
  export type Event_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
    /**
     * Filter which Event_category to delete.
     */
    where: Event_categoryWhereUniqueInput
  }

  /**
   * Event_category deleteMany
   */
  export type Event_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event_categories to delete
     */
    where?: Event_categoryWhereInput
  }

  /**
   * Event_category.Event
   */
  export type Event_category$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event_category without action
   */
  export type Event_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_category
     */
    select?: Event_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_categoryInclude<ExtArgs> | null
  }


  /**
   * Model Event_Location
   */

  export type AggregateEvent_Location = {
    _count: Event_LocationCountAggregateOutputType | null
    _avg: Event_LocationAvgAggregateOutputType | null
    _sum: Event_LocationSumAggregateOutputType | null
    _min: Event_LocationMinAggregateOutputType | null
    _max: Event_LocationMaxAggregateOutputType | null
  }

  export type Event_LocationAvgAggregateOutputType = {
    event_location_id: number | null
    location_city_id: number | null
    location_country_id: number | null
  }

  export type Event_LocationSumAggregateOutputType = {
    event_location_id: number | null
    location_city_id: number | null
    location_country_id: number | null
  }

  export type Event_LocationMinAggregateOutputType = {
    event_location_id: number | null
    address_name: string | null
    address: string | null
    location_city_id: number | null
    location_country_id: number | null
    zipcode: string | null
  }

  export type Event_LocationMaxAggregateOutputType = {
    event_location_id: number | null
    address_name: string | null
    address: string | null
    location_city_id: number | null
    location_country_id: number | null
    zipcode: string | null
  }

  export type Event_LocationCountAggregateOutputType = {
    event_location_id: number
    address_name: number
    address: number
    location_city_id: number
    location_country_id: number
    zipcode: number
    _all: number
  }


  export type Event_LocationAvgAggregateInputType = {
    event_location_id?: true
    location_city_id?: true
    location_country_id?: true
  }

  export type Event_LocationSumAggregateInputType = {
    event_location_id?: true
    location_city_id?: true
    location_country_id?: true
  }

  export type Event_LocationMinAggregateInputType = {
    event_location_id?: true
    address_name?: true
    address?: true
    location_city_id?: true
    location_country_id?: true
    zipcode?: true
  }

  export type Event_LocationMaxAggregateInputType = {
    event_location_id?: true
    address_name?: true
    address?: true
    location_city_id?: true
    location_country_id?: true
    zipcode?: true
  }

  export type Event_LocationCountAggregateInputType = {
    event_location_id?: true
    address_name?: true
    address?: true
    location_city_id?: true
    location_country_id?: true
    zipcode?: true
    _all?: true
  }

  export type Event_LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event_Location to aggregate.
     */
    where?: Event_LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_Locations to fetch.
     */
    orderBy?: Event_LocationOrderByWithRelationInput | Event_LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Event_LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Event_Locations
    **/
    _count?: true | Event_LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_LocationMaxAggregateInputType
  }

  export type GetEvent_LocationAggregateType<T extends Event_LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_Location]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_Location[P]>
      : GetScalarType<T[P], AggregateEvent_Location[P]>
  }




  export type Event_LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event_LocationWhereInput
    orderBy?: Event_LocationOrderByWithAggregationInput | Event_LocationOrderByWithAggregationInput[]
    by: Event_LocationScalarFieldEnum[] | Event_LocationScalarFieldEnum
    having?: Event_LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_LocationCountAggregateInputType | true
    _avg?: Event_LocationAvgAggregateInputType
    _sum?: Event_LocationSumAggregateInputType
    _min?: Event_LocationMinAggregateInputType
    _max?: Event_LocationMaxAggregateInputType
  }

  export type Event_LocationGroupByOutputType = {
    event_location_id: number
    address_name: string
    address: string
    location_city_id: number
    location_country_id: number
    zipcode: string | null
    _count: Event_LocationCountAggregateOutputType | null
    _avg: Event_LocationAvgAggregateOutputType | null
    _sum: Event_LocationSumAggregateOutputType | null
    _min: Event_LocationMinAggregateOutputType | null
    _max: Event_LocationMaxAggregateOutputType | null
  }

  type GetEvent_LocationGroupByPayload<T extends Event_LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_LocationGroupByOutputType[P]>
            : GetScalarType<T[P], Event_LocationGroupByOutputType[P]>
        }
      >
    >


  export type Event_LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_location_id?: boolean
    address_name?: boolean
    address?: boolean
    location_city_id?: boolean
    location_country_id?: boolean
    zipcode?: boolean
    city?: boolean | Location_cityDefaultArgs<ExtArgs>
    country?: boolean | Location_countryDefaultArgs<ExtArgs>
    event?: boolean | Event_Location$eventArgs<ExtArgs>
  }, ExtArgs["result"]["event_Location"]>

  export type Event_LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_location_id?: boolean
    address_name?: boolean
    address?: boolean
    location_city_id?: boolean
    location_country_id?: boolean
    zipcode?: boolean
    city?: boolean | Location_cityDefaultArgs<ExtArgs>
    country?: boolean | Location_countryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event_Location"]>

  export type Event_LocationSelectScalar = {
    event_location_id?: boolean
    address_name?: boolean
    address?: boolean
    location_city_id?: boolean
    location_country_id?: boolean
    zipcode?: boolean
  }

  export type Event_LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | Location_cityDefaultArgs<ExtArgs>
    country?: boolean | Location_countryDefaultArgs<ExtArgs>
    event?: boolean | Event_Location$eventArgs<ExtArgs>
  }
  export type Event_LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | Location_cityDefaultArgs<ExtArgs>
    country?: boolean | Location_countryDefaultArgs<ExtArgs>
  }

  export type $Event_LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event_Location"
    objects: {
      city: Prisma.$Location_cityPayload<ExtArgs>
      country: Prisma.$Location_countryPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      event_location_id: number
      address_name: string
      address: string
      location_city_id: number
      location_country_id: number
      zipcode: string | null
    }, ExtArgs["result"]["event_Location"]>
    composites: {}
  }

  type Event_LocationGetPayload<S extends boolean | null | undefined | Event_LocationDefaultArgs> = $Result.GetResult<Prisma.$Event_LocationPayload, S>

  type Event_LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Event_LocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Event_LocationCountAggregateInputType | true
    }

  export interface Event_LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event_Location'], meta: { name: 'Event_Location' } }
    /**
     * Find zero or one Event_Location that matches the filter.
     * @param {Event_LocationFindUniqueArgs} args - Arguments to find a Event_Location
     * @example
     * // Get one Event_Location
     * const event_Location = await prisma.event_Location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Event_LocationFindUniqueArgs>(args: SelectSubset<T, Event_LocationFindUniqueArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event_Location that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Event_LocationFindUniqueOrThrowArgs} args - Arguments to find a Event_Location
     * @example
     * // Get one Event_Location
     * const event_Location = await prisma.event_Location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Event_LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, Event_LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event_Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_LocationFindFirstArgs} args - Arguments to find a Event_Location
     * @example
     * // Get one Event_Location
     * const event_Location = await prisma.event_Location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Event_LocationFindFirstArgs>(args?: SelectSubset<T, Event_LocationFindFirstArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event_Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_LocationFindFirstOrThrowArgs} args - Arguments to find a Event_Location
     * @example
     * // Get one Event_Location
     * const event_Location = await prisma.event_Location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Event_LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, Event_LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Event_Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_Locations
     * const event_Locations = await prisma.event_Location.findMany()
     * 
     * // Get first 10 Event_Locations
     * const event_Locations = await prisma.event_Location.findMany({ take: 10 })
     * 
     * // Only select the `event_location_id`
     * const event_LocationWithEvent_location_idOnly = await prisma.event_Location.findMany({ select: { event_location_id: true } })
     * 
     */
    findMany<T extends Event_LocationFindManyArgs>(args?: SelectSubset<T, Event_LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event_Location.
     * @param {Event_LocationCreateArgs} args - Arguments to create a Event_Location.
     * @example
     * // Create one Event_Location
     * const Event_Location = await prisma.event_Location.create({
     *   data: {
     *     // ... data to create a Event_Location
     *   }
     * })
     * 
     */
    create<T extends Event_LocationCreateArgs>(args: SelectSubset<T, Event_LocationCreateArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Event_Locations.
     * @param {Event_LocationCreateManyArgs} args - Arguments to create many Event_Locations.
     * @example
     * // Create many Event_Locations
     * const event_Location = await prisma.event_Location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Event_LocationCreateManyArgs>(args?: SelectSubset<T, Event_LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_Locations and returns the data saved in the database.
     * @param {Event_LocationCreateManyAndReturnArgs} args - Arguments to create many Event_Locations.
     * @example
     * // Create many Event_Locations
     * const event_Location = await prisma.event_Location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_Locations and only return the `event_location_id`
     * const event_LocationWithEvent_location_idOnly = await prisma.event_Location.createManyAndReturn({ 
     *   select: { event_location_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Event_LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, Event_LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event_Location.
     * @param {Event_LocationDeleteArgs} args - Arguments to delete one Event_Location.
     * @example
     * // Delete one Event_Location
     * const Event_Location = await prisma.event_Location.delete({
     *   where: {
     *     // ... filter to delete one Event_Location
     *   }
     * })
     * 
     */
    delete<T extends Event_LocationDeleteArgs>(args: SelectSubset<T, Event_LocationDeleteArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event_Location.
     * @param {Event_LocationUpdateArgs} args - Arguments to update one Event_Location.
     * @example
     * // Update one Event_Location
     * const event_Location = await prisma.event_Location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Event_LocationUpdateArgs>(args: SelectSubset<T, Event_LocationUpdateArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Event_Locations.
     * @param {Event_LocationDeleteManyArgs} args - Arguments to filter Event_Locations to delete.
     * @example
     * // Delete a few Event_Locations
     * const { count } = await prisma.event_Location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Event_LocationDeleteManyArgs>(args?: SelectSubset<T, Event_LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_Locations
     * const event_Location = await prisma.event_Location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Event_LocationUpdateManyArgs>(args: SelectSubset<T, Event_LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_Location.
     * @param {Event_LocationUpsertArgs} args - Arguments to update or create a Event_Location.
     * @example
     * // Update or create a Event_Location
     * const event_Location = await prisma.event_Location.upsert({
     *   create: {
     *     // ... data to create a Event_Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_Location we want to update
     *   }
     * })
     */
    upsert<T extends Event_LocationUpsertArgs>(args: SelectSubset<T, Event_LocationUpsertArgs<ExtArgs>>): Prisma__Event_LocationClient<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Event_Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_LocationCountArgs} args - Arguments to filter Event_Locations to count.
     * @example
     * // Count the number of Event_Locations
     * const count = await prisma.event_Location.count({
     *   where: {
     *     // ... the filter for the Event_Locations we want to count
     *   }
     * })
    **/
    count<T extends Event_LocationCountArgs>(
      args?: Subset<T, Event_LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_LocationAggregateArgs>(args: Subset<T, Event_LocationAggregateArgs>): Prisma.PrismaPromise<GetEvent_LocationAggregateType<T>>

    /**
     * Group by Event_Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Event_LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Event_LocationGroupByArgs['orderBy'] }
        : { orderBy?: Event_LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Event_LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_LocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event_Location model
   */
  readonly fields: Event_LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event_Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Event_LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends Location_cityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Location_cityDefaultArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    country<T extends Location_countryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Location_countryDefaultArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event<T extends Event_Location$eventArgs<ExtArgs> = {}>(args?: Subset<T, Event_Location$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event_Location model
   */ 
  interface Event_LocationFieldRefs {
    readonly event_location_id: FieldRef<"Event_Location", 'Int'>
    readonly address_name: FieldRef<"Event_Location", 'String'>
    readonly address: FieldRef<"Event_Location", 'String'>
    readonly location_city_id: FieldRef<"Event_Location", 'Int'>
    readonly location_country_id: FieldRef<"Event_Location", 'Int'>
    readonly zipcode: FieldRef<"Event_Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event_Location findUnique
   */
  export type Event_LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Event_Location to fetch.
     */
    where: Event_LocationWhereUniqueInput
  }

  /**
   * Event_Location findUniqueOrThrow
   */
  export type Event_LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Event_Location to fetch.
     */
    where: Event_LocationWhereUniqueInput
  }

  /**
   * Event_Location findFirst
   */
  export type Event_LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Event_Location to fetch.
     */
    where?: Event_LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_Locations to fetch.
     */
    orderBy?: Event_LocationOrderByWithRelationInput | Event_LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event_Locations.
     */
    cursor?: Event_LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event_Locations.
     */
    distinct?: Event_LocationScalarFieldEnum | Event_LocationScalarFieldEnum[]
  }

  /**
   * Event_Location findFirstOrThrow
   */
  export type Event_LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Event_Location to fetch.
     */
    where?: Event_LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_Locations to fetch.
     */
    orderBy?: Event_LocationOrderByWithRelationInput | Event_LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event_Locations.
     */
    cursor?: Event_LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event_Locations.
     */
    distinct?: Event_LocationScalarFieldEnum | Event_LocationScalarFieldEnum[]
  }

  /**
   * Event_Location findMany
   */
  export type Event_LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Event_Locations to fetch.
     */
    where?: Event_LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_Locations to fetch.
     */
    orderBy?: Event_LocationOrderByWithRelationInput | Event_LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Event_Locations.
     */
    cursor?: Event_LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_Locations.
     */
    skip?: number
    distinct?: Event_LocationScalarFieldEnum | Event_LocationScalarFieldEnum[]
  }

  /**
   * Event_Location create
   */
  export type Event_LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Event_Location.
     */
    data: XOR<Event_LocationCreateInput, Event_LocationUncheckedCreateInput>
  }

  /**
   * Event_Location createMany
   */
  export type Event_LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Event_Locations.
     */
    data: Event_LocationCreateManyInput | Event_LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event_Location createManyAndReturn
   */
  export type Event_LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Event_Locations.
     */
    data: Event_LocationCreateManyInput | Event_LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event_Location update
   */
  export type Event_LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Event_Location.
     */
    data: XOR<Event_LocationUpdateInput, Event_LocationUncheckedUpdateInput>
    /**
     * Choose, which Event_Location to update.
     */
    where: Event_LocationWhereUniqueInput
  }

  /**
   * Event_Location updateMany
   */
  export type Event_LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Event_Locations.
     */
    data: XOR<Event_LocationUpdateManyMutationInput, Event_LocationUncheckedUpdateManyInput>
    /**
     * Filter which Event_Locations to update
     */
    where?: Event_LocationWhereInput
  }

  /**
   * Event_Location upsert
   */
  export type Event_LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Event_Location to update in case it exists.
     */
    where: Event_LocationWhereUniqueInput
    /**
     * In case the Event_Location found by the `where` argument doesn't exist, create a new Event_Location with this data.
     */
    create: XOR<Event_LocationCreateInput, Event_LocationUncheckedCreateInput>
    /**
     * In case the Event_Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Event_LocationUpdateInput, Event_LocationUncheckedUpdateInput>
  }

  /**
   * Event_Location delete
   */
  export type Event_LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    /**
     * Filter which Event_Location to delete.
     */
    where: Event_LocationWhereUniqueInput
  }

  /**
   * Event_Location deleteMany
   */
  export type Event_LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event_Locations to delete
     */
    where?: Event_LocationWhereInput
  }

  /**
   * Event_Location.event
   */
  export type Event_Location$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Event_Location without action
   */
  export type Event_LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
  }


  /**
   * Model Location_city
   */

  export type AggregateLocation_city = {
    _count: Location_cityCountAggregateOutputType | null
    _avg: Location_cityAvgAggregateOutputType | null
    _sum: Location_citySumAggregateOutputType | null
    _min: Location_cityMinAggregateOutputType | null
    _max: Location_cityMaxAggregateOutputType | null
  }

  export type Location_cityAvgAggregateOutputType = {
    location_city_id: number | null
  }

  export type Location_citySumAggregateOutputType = {
    location_city_id: number | null
  }

  export type Location_cityMinAggregateOutputType = {
    location_city_id: number | null
    city_name: string | null
  }

  export type Location_cityMaxAggregateOutputType = {
    location_city_id: number | null
    city_name: string | null
  }

  export type Location_cityCountAggregateOutputType = {
    location_city_id: number
    city_name: number
    _all: number
  }


  export type Location_cityAvgAggregateInputType = {
    location_city_id?: true
  }

  export type Location_citySumAggregateInputType = {
    location_city_id?: true
  }

  export type Location_cityMinAggregateInputType = {
    location_city_id?: true
    city_name?: true
  }

  export type Location_cityMaxAggregateInputType = {
    location_city_id?: true
    city_name?: true
  }

  export type Location_cityCountAggregateInputType = {
    location_city_id?: true
    city_name?: true
    _all?: true
  }

  export type Location_cityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location_city to aggregate.
     */
    where?: Location_cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Location_cities to fetch.
     */
    orderBy?: Location_cityOrderByWithRelationInput | Location_cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Location_cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Location_cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Location_cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Location_cities
    **/
    _count?: true | Location_cityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Location_cityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Location_citySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Location_cityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Location_cityMaxAggregateInputType
  }

  export type GetLocation_cityAggregateType<T extends Location_cityAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation_city]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation_city[P]>
      : GetScalarType<T[P], AggregateLocation_city[P]>
  }




  export type Location_cityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Location_cityWhereInput
    orderBy?: Location_cityOrderByWithAggregationInput | Location_cityOrderByWithAggregationInput[]
    by: Location_cityScalarFieldEnum[] | Location_cityScalarFieldEnum
    having?: Location_cityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Location_cityCountAggregateInputType | true
    _avg?: Location_cityAvgAggregateInputType
    _sum?: Location_citySumAggregateInputType
    _min?: Location_cityMinAggregateInputType
    _max?: Location_cityMaxAggregateInputType
  }

  export type Location_cityGroupByOutputType = {
    location_city_id: number
    city_name: string
    _count: Location_cityCountAggregateOutputType | null
    _avg: Location_cityAvgAggregateOutputType | null
    _sum: Location_citySumAggregateOutputType | null
    _min: Location_cityMinAggregateOutputType | null
    _max: Location_cityMaxAggregateOutputType | null
  }

  type GetLocation_cityGroupByPayload<T extends Location_cityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Location_cityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Location_cityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Location_cityGroupByOutputType[P]>
            : GetScalarType<T[P], Location_cityGroupByOutputType[P]>
        }
      >
    >


  export type Location_citySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_city_id?: boolean
    city_name?: boolean
    event_location?: boolean | Location_city$event_locationArgs<ExtArgs>
    _count?: boolean | Location_cityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location_city"]>

  export type Location_citySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_city_id?: boolean
    city_name?: boolean
  }, ExtArgs["result"]["location_city"]>

  export type Location_citySelectScalar = {
    location_city_id?: boolean
    city_name?: boolean
  }

  export type Location_cityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_location?: boolean | Location_city$event_locationArgs<ExtArgs>
    _count?: boolean | Location_cityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Location_cityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Location_cityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location_city"
    objects: {
      event_location: Prisma.$Event_LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      location_city_id: number
      city_name: string
    }, ExtArgs["result"]["location_city"]>
    composites: {}
  }

  type Location_cityGetPayload<S extends boolean | null | undefined | Location_cityDefaultArgs> = $Result.GetResult<Prisma.$Location_cityPayload, S>

  type Location_cityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Location_cityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Location_cityCountAggregateInputType | true
    }

  export interface Location_cityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location_city'], meta: { name: 'Location_city' } }
    /**
     * Find zero or one Location_city that matches the filter.
     * @param {Location_cityFindUniqueArgs} args - Arguments to find a Location_city
     * @example
     * // Get one Location_city
     * const location_city = await prisma.location_city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Location_cityFindUniqueArgs>(args: SelectSubset<T, Location_cityFindUniqueArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Location_city that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Location_cityFindUniqueOrThrowArgs} args - Arguments to find a Location_city
     * @example
     * // Get one Location_city
     * const location_city = await prisma.location_city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Location_cityFindUniqueOrThrowArgs>(args: SelectSubset<T, Location_cityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Location_city that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_cityFindFirstArgs} args - Arguments to find a Location_city
     * @example
     * // Get one Location_city
     * const location_city = await prisma.location_city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Location_cityFindFirstArgs>(args?: SelectSubset<T, Location_cityFindFirstArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Location_city that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_cityFindFirstOrThrowArgs} args - Arguments to find a Location_city
     * @example
     * // Get one Location_city
     * const location_city = await prisma.location_city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Location_cityFindFirstOrThrowArgs>(args?: SelectSubset<T, Location_cityFindFirstOrThrowArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Location_cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_cityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Location_cities
     * const location_cities = await prisma.location_city.findMany()
     * 
     * // Get first 10 Location_cities
     * const location_cities = await prisma.location_city.findMany({ take: 10 })
     * 
     * // Only select the `location_city_id`
     * const location_cityWithLocation_city_idOnly = await prisma.location_city.findMany({ select: { location_city_id: true } })
     * 
     */
    findMany<T extends Location_cityFindManyArgs>(args?: SelectSubset<T, Location_cityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Location_city.
     * @param {Location_cityCreateArgs} args - Arguments to create a Location_city.
     * @example
     * // Create one Location_city
     * const Location_city = await prisma.location_city.create({
     *   data: {
     *     // ... data to create a Location_city
     *   }
     * })
     * 
     */
    create<T extends Location_cityCreateArgs>(args: SelectSubset<T, Location_cityCreateArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Location_cities.
     * @param {Location_cityCreateManyArgs} args - Arguments to create many Location_cities.
     * @example
     * // Create many Location_cities
     * const location_city = await prisma.location_city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Location_cityCreateManyArgs>(args?: SelectSubset<T, Location_cityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Location_cities and returns the data saved in the database.
     * @param {Location_cityCreateManyAndReturnArgs} args - Arguments to create many Location_cities.
     * @example
     * // Create many Location_cities
     * const location_city = await prisma.location_city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Location_cities and only return the `location_city_id`
     * const location_cityWithLocation_city_idOnly = await prisma.location_city.createManyAndReturn({ 
     *   select: { location_city_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Location_cityCreateManyAndReturnArgs>(args?: SelectSubset<T, Location_cityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Location_city.
     * @param {Location_cityDeleteArgs} args - Arguments to delete one Location_city.
     * @example
     * // Delete one Location_city
     * const Location_city = await prisma.location_city.delete({
     *   where: {
     *     // ... filter to delete one Location_city
     *   }
     * })
     * 
     */
    delete<T extends Location_cityDeleteArgs>(args: SelectSubset<T, Location_cityDeleteArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Location_city.
     * @param {Location_cityUpdateArgs} args - Arguments to update one Location_city.
     * @example
     * // Update one Location_city
     * const location_city = await prisma.location_city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Location_cityUpdateArgs>(args: SelectSubset<T, Location_cityUpdateArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Location_cities.
     * @param {Location_cityDeleteManyArgs} args - Arguments to filter Location_cities to delete.
     * @example
     * // Delete a few Location_cities
     * const { count } = await prisma.location_city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Location_cityDeleteManyArgs>(args?: SelectSubset<T, Location_cityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Location_cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_cityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Location_cities
     * const location_city = await prisma.location_city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Location_cityUpdateManyArgs>(args: SelectSubset<T, Location_cityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location_city.
     * @param {Location_cityUpsertArgs} args - Arguments to update or create a Location_city.
     * @example
     * // Update or create a Location_city
     * const location_city = await prisma.location_city.upsert({
     *   create: {
     *     // ... data to create a Location_city
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location_city we want to update
     *   }
     * })
     */
    upsert<T extends Location_cityUpsertArgs>(args: SelectSubset<T, Location_cityUpsertArgs<ExtArgs>>): Prisma__Location_cityClient<$Result.GetResult<Prisma.$Location_cityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Location_cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_cityCountArgs} args - Arguments to filter Location_cities to count.
     * @example
     * // Count the number of Location_cities
     * const count = await prisma.location_city.count({
     *   where: {
     *     // ... the filter for the Location_cities we want to count
     *   }
     * })
    **/
    count<T extends Location_cityCountArgs>(
      args?: Subset<T, Location_cityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Location_cityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location_city.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_cityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Location_cityAggregateArgs>(args: Subset<T, Location_cityAggregateArgs>): Prisma.PrismaPromise<GetLocation_cityAggregateType<T>>

    /**
     * Group by Location_city.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_cityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Location_cityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Location_cityGroupByArgs['orderBy'] }
        : { orderBy?: Location_cityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Location_cityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocation_cityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location_city model
   */
  readonly fields: Location_cityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location_city.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Location_cityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event_location<T extends Location_city$event_locationArgs<ExtArgs> = {}>(args?: Subset<T, Location_city$event_locationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location_city model
   */ 
  interface Location_cityFieldRefs {
    readonly location_city_id: FieldRef<"Location_city", 'Int'>
    readonly city_name: FieldRef<"Location_city", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location_city findUnique
   */
  export type Location_cityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * Filter, which Location_city to fetch.
     */
    where: Location_cityWhereUniqueInput
  }

  /**
   * Location_city findUniqueOrThrow
   */
  export type Location_cityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * Filter, which Location_city to fetch.
     */
    where: Location_cityWhereUniqueInput
  }

  /**
   * Location_city findFirst
   */
  export type Location_cityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * Filter, which Location_city to fetch.
     */
    where?: Location_cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Location_cities to fetch.
     */
    orderBy?: Location_cityOrderByWithRelationInput | Location_cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Location_cities.
     */
    cursor?: Location_cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Location_cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Location_cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Location_cities.
     */
    distinct?: Location_cityScalarFieldEnum | Location_cityScalarFieldEnum[]
  }

  /**
   * Location_city findFirstOrThrow
   */
  export type Location_cityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * Filter, which Location_city to fetch.
     */
    where?: Location_cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Location_cities to fetch.
     */
    orderBy?: Location_cityOrderByWithRelationInput | Location_cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Location_cities.
     */
    cursor?: Location_cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Location_cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Location_cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Location_cities.
     */
    distinct?: Location_cityScalarFieldEnum | Location_cityScalarFieldEnum[]
  }

  /**
   * Location_city findMany
   */
  export type Location_cityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * Filter, which Location_cities to fetch.
     */
    where?: Location_cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Location_cities to fetch.
     */
    orderBy?: Location_cityOrderByWithRelationInput | Location_cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Location_cities.
     */
    cursor?: Location_cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Location_cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Location_cities.
     */
    skip?: number
    distinct?: Location_cityScalarFieldEnum | Location_cityScalarFieldEnum[]
  }

  /**
   * Location_city create
   */
  export type Location_cityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * The data needed to create a Location_city.
     */
    data: XOR<Location_cityCreateInput, Location_cityUncheckedCreateInput>
  }

  /**
   * Location_city createMany
   */
  export type Location_cityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Location_cities.
     */
    data: Location_cityCreateManyInput | Location_cityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location_city createManyAndReturn
   */
  export type Location_cityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Location_cities.
     */
    data: Location_cityCreateManyInput | Location_cityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location_city update
   */
  export type Location_cityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * The data needed to update a Location_city.
     */
    data: XOR<Location_cityUpdateInput, Location_cityUncheckedUpdateInput>
    /**
     * Choose, which Location_city to update.
     */
    where: Location_cityWhereUniqueInput
  }

  /**
   * Location_city updateMany
   */
  export type Location_cityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Location_cities.
     */
    data: XOR<Location_cityUpdateManyMutationInput, Location_cityUncheckedUpdateManyInput>
    /**
     * Filter which Location_cities to update
     */
    where?: Location_cityWhereInput
  }

  /**
   * Location_city upsert
   */
  export type Location_cityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * The filter to search for the Location_city to update in case it exists.
     */
    where: Location_cityWhereUniqueInput
    /**
     * In case the Location_city found by the `where` argument doesn't exist, create a new Location_city with this data.
     */
    create: XOR<Location_cityCreateInput, Location_cityUncheckedCreateInput>
    /**
     * In case the Location_city was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Location_cityUpdateInput, Location_cityUncheckedUpdateInput>
  }

  /**
   * Location_city delete
   */
  export type Location_cityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
    /**
     * Filter which Location_city to delete.
     */
    where: Location_cityWhereUniqueInput
  }

  /**
   * Location_city deleteMany
   */
  export type Location_cityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location_cities to delete
     */
    where?: Location_cityWhereInput
  }

  /**
   * Location_city.event_location
   */
  export type Location_city$event_locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    where?: Event_LocationWhereInput
    orderBy?: Event_LocationOrderByWithRelationInput | Event_LocationOrderByWithRelationInput[]
    cursor?: Event_LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_LocationScalarFieldEnum | Event_LocationScalarFieldEnum[]
  }

  /**
   * Location_city without action
   */
  export type Location_cityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_city
     */
    select?: Location_citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_cityInclude<ExtArgs> | null
  }


  /**
   * Model Location_country
   */

  export type AggregateLocation_country = {
    _count: Location_countryCountAggregateOutputType | null
    _avg: Location_countryAvgAggregateOutputType | null
    _sum: Location_countrySumAggregateOutputType | null
    _min: Location_countryMinAggregateOutputType | null
    _max: Location_countryMaxAggregateOutputType | null
  }

  export type Location_countryAvgAggregateOutputType = {
    location_country_id: number | null
  }

  export type Location_countrySumAggregateOutputType = {
    location_country_id: number | null
  }

  export type Location_countryMinAggregateOutputType = {
    location_country_id: number | null
    country_name: string | null
  }

  export type Location_countryMaxAggregateOutputType = {
    location_country_id: number | null
    country_name: string | null
  }

  export type Location_countryCountAggregateOutputType = {
    location_country_id: number
    country_name: number
    _all: number
  }


  export type Location_countryAvgAggregateInputType = {
    location_country_id?: true
  }

  export type Location_countrySumAggregateInputType = {
    location_country_id?: true
  }

  export type Location_countryMinAggregateInputType = {
    location_country_id?: true
    country_name?: true
  }

  export type Location_countryMaxAggregateInputType = {
    location_country_id?: true
    country_name?: true
  }

  export type Location_countryCountAggregateInputType = {
    location_country_id?: true
    country_name?: true
    _all?: true
  }

  export type Location_countryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location_country to aggregate.
     */
    where?: Location_countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Location_countries to fetch.
     */
    orderBy?: Location_countryOrderByWithRelationInput | Location_countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Location_countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Location_countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Location_countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Location_countries
    **/
    _count?: true | Location_countryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Location_countryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Location_countrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Location_countryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Location_countryMaxAggregateInputType
  }

  export type GetLocation_countryAggregateType<T extends Location_countryAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation_country]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation_country[P]>
      : GetScalarType<T[P], AggregateLocation_country[P]>
  }




  export type Location_countryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Location_countryWhereInput
    orderBy?: Location_countryOrderByWithAggregationInput | Location_countryOrderByWithAggregationInput[]
    by: Location_countryScalarFieldEnum[] | Location_countryScalarFieldEnum
    having?: Location_countryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Location_countryCountAggregateInputType | true
    _avg?: Location_countryAvgAggregateInputType
    _sum?: Location_countrySumAggregateInputType
    _min?: Location_countryMinAggregateInputType
    _max?: Location_countryMaxAggregateInputType
  }

  export type Location_countryGroupByOutputType = {
    location_country_id: number
    country_name: string
    _count: Location_countryCountAggregateOutputType | null
    _avg: Location_countryAvgAggregateOutputType | null
    _sum: Location_countrySumAggregateOutputType | null
    _min: Location_countryMinAggregateOutputType | null
    _max: Location_countryMaxAggregateOutputType | null
  }

  type GetLocation_countryGroupByPayload<T extends Location_countryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Location_countryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Location_countryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Location_countryGroupByOutputType[P]>
            : GetScalarType<T[P], Location_countryGroupByOutputType[P]>
        }
      >
    >


  export type Location_countrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_country_id?: boolean
    country_name?: boolean
    event_location?: boolean | Location_country$event_locationArgs<ExtArgs>
    _count?: boolean | Location_countryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location_country"]>

  export type Location_countrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_country_id?: boolean
    country_name?: boolean
  }, ExtArgs["result"]["location_country"]>

  export type Location_countrySelectScalar = {
    location_country_id?: boolean
    country_name?: boolean
  }

  export type Location_countryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_location?: boolean | Location_country$event_locationArgs<ExtArgs>
    _count?: boolean | Location_countryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Location_countryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Location_countryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location_country"
    objects: {
      event_location: Prisma.$Event_LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      location_country_id: number
      country_name: string
    }, ExtArgs["result"]["location_country"]>
    composites: {}
  }

  type Location_countryGetPayload<S extends boolean | null | undefined | Location_countryDefaultArgs> = $Result.GetResult<Prisma.$Location_countryPayload, S>

  type Location_countryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Location_countryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Location_countryCountAggregateInputType | true
    }

  export interface Location_countryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location_country'], meta: { name: 'Location_country' } }
    /**
     * Find zero or one Location_country that matches the filter.
     * @param {Location_countryFindUniqueArgs} args - Arguments to find a Location_country
     * @example
     * // Get one Location_country
     * const location_country = await prisma.location_country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Location_countryFindUniqueArgs>(args: SelectSubset<T, Location_countryFindUniqueArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Location_country that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Location_countryFindUniqueOrThrowArgs} args - Arguments to find a Location_country
     * @example
     * // Get one Location_country
     * const location_country = await prisma.location_country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Location_countryFindUniqueOrThrowArgs>(args: SelectSubset<T, Location_countryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Location_country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_countryFindFirstArgs} args - Arguments to find a Location_country
     * @example
     * // Get one Location_country
     * const location_country = await prisma.location_country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Location_countryFindFirstArgs>(args?: SelectSubset<T, Location_countryFindFirstArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Location_country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_countryFindFirstOrThrowArgs} args - Arguments to find a Location_country
     * @example
     * // Get one Location_country
     * const location_country = await prisma.location_country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Location_countryFindFirstOrThrowArgs>(args?: SelectSubset<T, Location_countryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Location_countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_countryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Location_countries
     * const location_countries = await prisma.location_country.findMany()
     * 
     * // Get first 10 Location_countries
     * const location_countries = await prisma.location_country.findMany({ take: 10 })
     * 
     * // Only select the `location_country_id`
     * const location_countryWithLocation_country_idOnly = await prisma.location_country.findMany({ select: { location_country_id: true } })
     * 
     */
    findMany<T extends Location_countryFindManyArgs>(args?: SelectSubset<T, Location_countryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Location_country.
     * @param {Location_countryCreateArgs} args - Arguments to create a Location_country.
     * @example
     * // Create one Location_country
     * const Location_country = await prisma.location_country.create({
     *   data: {
     *     // ... data to create a Location_country
     *   }
     * })
     * 
     */
    create<T extends Location_countryCreateArgs>(args: SelectSubset<T, Location_countryCreateArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Location_countries.
     * @param {Location_countryCreateManyArgs} args - Arguments to create many Location_countries.
     * @example
     * // Create many Location_countries
     * const location_country = await prisma.location_country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Location_countryCreateManyArgs>(args?: SelectSubset<T, Location_countryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Location_countries and returns the data saved in the database.
     * @param {Location_countryCreateManyAndReturnArgs} args - Arguments to create many Location_countries.
     * @example
     * // Create many Location_countries
     * const location_country = await prisma.location_country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Location_countries and only return the `location_country_id`
     * const location_countryWithLocation_country_idOnly = await prisma.location_country.createManyAndReturn({ 
     *   select: { location_country_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Location_countryCreateManyAndReturnArgs>(args?: SelectSubset<T, Location_countryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Location_country.
     * @param {Location_countryDeleteArgs} args - Arguments to delete one Location_country.
     * @example
     * // Delete one Location_country
     * const Location_country = await prisma.location_country.delete({
     *   where: {
     *     // ... filter to delete one Location_country
     *   }
     * })
     * 
     */
    delete<T extends Location_countryDeleteArgs>(args: SelectSubset<T, Location_countryDeleteArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Location_country.
     * @param {Location_countryUpdateArgs} args - Arguments to update one Location_country.
     * @example
     * // Update one Location_country
     * const location_country = await prisma.location_country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Location_countryUpdateArgs>(args: SelectSubset<T, Location_countryUpdateArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Location_countries.
     * @param {Location_countryDeleteManyArgs} args - Arguments to filter Location_countries to delete.
     * @example
     * // Delete a few Location_countries
     * const { count } = await prisma.location_country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Location_countryDeleteManyArgs>(args?: SelectSubset<T, Location_countryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Location_countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_countryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Location_countries
     * const location_country = await prisma.location_country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Location_countryUpdateManyArgs>(args: SelectSubset<T, Location_countryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location_country.
     * @param {Location_countryUpsertArgs} args - Arguments to update or create a Location_country.
     * @example
     * // Update or create a Location_country
     * const location_country = await prisma.location_country.upsert({
     *   create: {
     *     // ... data to create a Location_country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location_country we want to update
     *   }
     * })
     */
    upsert<T extends Location_countryUpsertArgs>(args: SelectSubset<T, Location_countryUpsertArgs<ExtArgs>>): Prisma__Location_countryClient<$Result.GetResult<Prisma.$Location_countryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Location_countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_countryCountArgs} args - Arguments to filter Location_countries to count.
     * @example
     * // Count the number of Location_countries
     * const count = await prisma.location_country.count({
     *   where: {
     *     // ... the filter for the Location_countries we want to count
     *   }
     * })
    **/
    count<T extends Location_countryCountArgs>(
      args?: Subset<T, Location_countryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Location_countryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location_country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_countryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Location_countryAggregateArgs>(args: Subset<T, Location_countryAggregateArgs>): Prisma.PrismaPromise<GetLocation_countryAggregateType<T>>

    /**
     * Group by Location_country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_countryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Location_countryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Location_countryGroupByArgs['orderBy'] }
        : { orderBy?: Location_countryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Location_countryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocation_countryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location_country model
   */
  readonly fields: Location_countryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location_country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Location_countryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event_location<T extends Location_country$event_locationArgs<ExtArgs> = {}>(args?: Subset<T, Location_country$event_locationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_LocationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location_country model
   */ 
  interface Location_countryFieldRefs {
    readonly location_country_id: FieldRef<"Location_country", 'Int'>
    readonly country_name: FieldRef<"Location_country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location_country findUnique
   */
  export type Location_countryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * Filter, which Location_country to fetch.
     */
    where: Location_countryWhereUniqueInput
  }

  /**
   * Location_country findUniqueOrThrow
   */
  export type Location_countryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * Filter, which Location_country to fetch.
     */
    where: Location_countryWhereUniqueInput
  }

  /**
   * Location_country findFirst
   */
  export type Location_countryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * Filter, which Location_country to fetch.
     */
    where?: Location_countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Location_countries to fetch.
     */
    orderBy?: Location_countryOrderByWithRelationInput | Location_countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Location_countries.
     */
    cursor?: Location_countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Location_countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Location_countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Location_countries.
     */
    distinct?: Location_countryScalarFieldEnum | Location_countryScalarFieldEnum[]
  }

  /**
   * Location_country findFirstOrThrow
   */
  export type Location_countryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * Filter, which Location_country to fetch.
     */
    where?: Location_countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Location_countries to fetch.
     */
    orderBy?: Location_countryOrderByWithRelationInput | Location_countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Location_countries.
     */
    cursor?: Location_countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Location_countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Location_countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Location_countries.
     */
    distinct?: Location_countryScalarFieldEnum | Location_countryScalarFieldEnum[]
  }

  /**
   * Location_country findMany
   */
  export type Location_countryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * Filter, which Location_countries to fetch.
     */
    where?: Location_countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Location_countries to fetch.
     */
    orderBy?: Location_countryOrderByWithRelationInput | Location_countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Location_countries.
     */
    cursor?: Location_countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Location_countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Location_countries.
     */
    skip?: number
    distinct?: Location_countryScalarFieldEnum | Location_countryScalarFieldEnum[]
  }

  /**
   * Location_country create
   */
  export type Location_countryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * The data needed to create a Location_country.
     */
    data: XOR<Location_countryCreateInput, Location_countryUncheckedCreateInput>
  }

  /**
   * Location_country createMany
   */
  export type Location_countryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Location_countries.
     */
    data: Location_countryCreateManyInput | Location_countryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location_country createManyAndReturn
   */
  export type Location_countryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Location_countries.
     */
    data: Location_countryCreateManyInput | Location_countryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location_country update
   */
  export type Location_countryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * The data needed to update a Location_country.
     */
    data: XOR<Location_countryUpdateInput, Location_countryUncheckedUpdateInput>
    /**
     * Choose, which Location_country to update.
     */
    where: Location_countryWhereUniqueInput
  }

  /**
   * Location_country updateMany
   */
  export type Location_countryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Location_countries.
     */
    data: XOR<Location_countryUpdateManyMutationInput, Location_countryUncheckedUpdateManyInput>
    /**
     * Filter which Location_countries to update
     */
    where?: Location_countryWhereInput
  }

  /**
   * Location_country upsert
   */
  export type Location_countryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * The filter to search for the Location_country to update in case it exists.
     */
    where: Location_countryWhereUniqueInput
    /**
     * In case the Location_country found by the `where` argument doesn't exist, create a new Location_country with this data.
     */
    create: XOR<Location_countryCreateInput, Location_countryUncheckedCreateInput>
    /**
     * In case the Location_country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Location_countryUpdateInput, Location_countryUncheckedUpdateInput>
  }

  /**
   * Location_country delete
   */
  export type Location_countryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
    /**
     * Filter which Location_country to delete.
     */
    where: Location_countryWhereUniqueInput
  }

  /**
   * Location_country deleteMany
   */
  export type Location_countryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location_countries to delete
     */
    where?: Location_countryWhereInput
  }

  /**
   * Location_country.event_location
   */
  export type Location_country$event_locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_Location
     */
    select?: Event_LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_LocationInclude<ExtArgs> | null
    where?: Event_LocationWhereInput
    orderBy?: Event_LocationOrderByWithRelationInput | Event_LocationOrderByWithRelationInput[]
    cursor?: Event_LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_LocationScalarFieldEnum | Event_LocationScalarFieldEnum[]
  }

  /**
   * Location_country without action
   */
  export type Location_countryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location_country
     */
    select?: Location_countrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Location_countryInclude<ExtArgs> | null
  }


  /**
   * Model Ticket_types
   */

  export type AggregateTicket_types = {
    _count: Ticket_typesCountAggregateOutputType | null
    _avg: Ticket_typesAvgAggregateOutputType | null
    _sum: Ticket_typesSumAggregateOutputType | null
    _min: Ticket_typesMinAggregateOutputType | null
    _max: Ticket_typesMaxAggregateOutputType | null
  }

  export type Ticket_typesAvgAggregateOutputType = {
    ticket_types_id: number | null
    event_id: number | null
    price: number | null
    quantity_available: number | null
  }

  export type Ticket_typesSumAggregateOutputType = {
    ticket_types_id: number | null
    event_id: number | null
    price: number | null
    quantity_available: number | null
  }

  export type Ticket_typesMinAggregateOutputType = {
    ticket_types_id: number | null
    event_id: number | null
    types: string | null
    price: number | null
    quantity_available: number | null
  }

  export type Ticket_typesMaxAggregateOutputType = {
    ticket_types_id: number | null
    event_id: number | null
    types: string | null
    price: number | null
    quantity_available: number | null
  }

  export type Ticket_typesCountAggregateOutputType = {
    ticket_types_id: number
    event_id: number
    types: number
    price: number
    quantity_available: number
    _all: number
  }


  export type Ticket_typesAvgAggregateInputType = {
    ticket_types_id?: true
    event_id?: true
    price?: true
    quantity_available?: true
  }

  export type Ticket_typesSumAggregateInputType = {
    ticket_types_id?: true
    event_id?: true
    price?: true
    quantity_available?: true
  }

  export type Ticket_typesMinAggregateInputType = {
    ticket_types_id?: true
    event_id?: true
    types?: true
    price?: true
    quantity_available?: true
  }

  export type Ticket_typesMaxAggregateInputType = {
    ticket_types_id?: true
    event_id?: true
    types?: true
    price?: true
    quantity_available?: true
  }

  export type Ticket_typesCountAggregateInputType = {
    ticket_types_id?: true
    event_id?: true
    types?: true
    price?: true
    quantity_available?: true
    _all?: true
  }

  export type Ticket_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket_types to aggregate.
     */
    where?: Ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_types to fetch.
     */
    orderBy?: Ticket_typesOrderByWithRelationInput | Ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ticket_types
    **/
    _count?: true | Ticket_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_typesMaxAggregateInputType
  }

  export type GetTicket_typesAggregateType<T extends Ticket_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_types[P]>
      : GetScalarType<T[P], AggregateTicket_types[P]>
  }




  export type Ticket_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ticket_typesWhereInput
    orderBy?: Ticket_typesOrderByWithAggregationInput | Ticket_typesOrderByWithAggregationInput[]
    by: Ticket_typesScalarFieldEnum[] | Ticket_typesScalarFieldEnum
    having?: Ticket_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_typesCountAggregateInputType | true
    _avg?: Ticket_typesAvgAggregateInputType
    _sum?: Ticket_typesSumAggregateInputType
    _min?: Ticket_typesMinAggregateInputType
    _max?: Ticket_typesMaxAggregateInputType
  }

  export type Ticket_typesGroupByOutputType = {
    ticket_types_id: number
    event_id: number
    types: string
    price: number
    quantity_available: number
    _count: Ticket_typesCountAggregateOutputType | null
    _avg: Ticket_typesAvgAggregateOutputType | null
    _sum: Ticket_typesSumAggregateOutputType | null
    _min: Ticket_typesMinAggregateOutputType | null
    _max: Ticket_typesMaxAggregateOutputType | null
  }

  type GetTicket_typesGroupByPayload<T extends Ticket_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_typesGroupByOutputType[P]>
        }
      >
    >


  export type Ticket_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_types_id?: boolean
    event_id?: boolean
    types?: boolean
    price?: boolean
    quantity_available?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    transaction_details?: boolean | Ticket_types$transaction_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_types"]>

  export type Ticket_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_types_id?: boolean
    event_id?: boolean
    types?: boolean
    price?: boolean
    quantity_available?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_types"]>

  export type Ticket_typesSelectScalar = {
    ticket_types_id?: boolean
    event_id?: boolean
    types?: boolean
    price?: boolean
    quantity_available?: boolean
  }

  export type Ticket_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    transaction_details?: boolean | Ticket_types$transaction_detailsArgs<ExtArgs>
  }
  export type Ticket_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $Ticket_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket_types"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      transaction_details: Prisma.$Transaction_DetailPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_types_id: number
      event_id: number
      types: string
      price: number
      quantity_available: number
    }, ExtArgs["result"]["ticket_types"]>
    composites: {}
  }

  type Ticket_typesGetPayload<S extends boolean | null | undefined | Ticket_typesDefaultArgs> = $Result.GetResult<Prisma.$Ticket_typesPayload, S>

  type Ticket_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Ticket_typesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ticket_typesCountAggregateInputType | true
    }

  export interface Ticket_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket_types'], meta: { name: 'Ticket_types' } }
    /**
     * Find zero or one Ticket_types that matches the filter.
     * @param {Ticket_typesFindUniqueArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Ticket_typesFindUniqueArgs>(args: SelectSubset<T, Ticket_typesFindUniqueArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket_types that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Ticket_typesFindUniqueOrThrowArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Ticket_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, Ticket_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesFindFirstArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Ticket_typesFindFirstArgs>(args?: SelectSubset<T, Ticket_typesFindFirstArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesFindFirstOrThrowArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Ticket_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, Ticket_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ticket_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_types
     * const ticket_types = await prisma.ticket_types.findMany()
     * 
     * // Get first 10 Ticket_types
     * const ticket_types = await prisma.ticket_types.findMany({ take: 10 })
     * 
     * // Only select the `ticket_types_id`
     * const ticket_typesWithTicket_types_idOnly = await prisma.ticket_types.findMany({ select: { ticket_types_id: true } })
     * 
     */
    findMany<T extends Ticket_typesFindManyArgs>(args?: SelectSubset<T, Ticket_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket_types.
     * @param {Ticket_typesCreateArgs} args - Arguments to create a Ticket_types.
     * @example
     * // Create one Ticket_types
     * const Ticket_types = await prisma.ticket_types.create({
     *   data: {
     *     // ... data to create a Ticket_types
     *   }
     * })
     * 
     */
    create<T extends Ticket_typesCreateArgs>(args: SelectSubset<T, Ticket_typesCreateArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ticket_types.
     * @param {Ticket_typesCreateManyArgs} args - Arguments to create many Ticket_types.
     * @example
     * // Create many Ticket_types
     * const ticket_types = await prisma.ticket_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Ticket_typesCreateManyArgs>(args?: SelectSubset<T, Ticket_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ticket_types and returns the data saved in the database.
     * @param {Ticket_typesCreateManyAndReturnArgs} args - Arguments to create many Ticket_types.
     * @example
     * // Create many Ticket_types
     * const ticket_types = await prisma.ticket_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ticket_types and only return the `ticket_types_id`
     * const ticket_typesWithTicket_types_idOnly = await prisma.ticket_types.createManyAndReturn({ 
     *   select: { ticket_types_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Ticket_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, Ticket_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket_types.
     * @param {Ticket_typesDeleteArgs} args - Arguments to delete one Ticket_types.
     * @example
     * // Delete one Ticket_types
     * const Ticket_types = await prisma.ticket_types.delete({
     *   where: {
     *     // ... filter to delete one Ticket_types
     *   }
     * })
     * 
     */
    delete<T extends Ticket_typesDeleteArgs>(args: SelectSubset<T, Ticket_typesDeleteArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket_types.
     * @param {Ticket_typesUpdateArgs} args - Arguments to update one Ticket_types.
     * @example
     * // Update one Ticket_types
     * const ticket_types = await prisma.ticket_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Ticket_typesUpdateArgs>(args: SelectSubset<T, Ticket_typesUpdateArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ticket_types.
     * @param {Ticket_typesDeleteManyArgs} args - Arguments to filter Ticket_types to delete.
     * @example
     * // Delete a few Ticket_types
     * const { count } = await prisma.ticket_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Ticket_typesDeleteManyArgs>(args?: SelectSubset<T, Ticket_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_types
     * const ticket_types = await prisma.ticket_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Ticket_typesUpdateManyArgs>(args: SelectSubset<T, Ticket_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_types.
     * @param {Ticket_typesUpsertArgs} args - Arguments to update or create a Ticket_types.
     * @example
     * // Update or create a Ticket_types
     * const ticket_types = await prisma.ticket_types.upsert({
     *   create: {
     *     // ... data to create a Ticket_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_types we want to update
     *   }
     * })
     */
    upsert<T extends Ticket_typesUpsertArgs>(args: SelectSubset<T, Ticket_typesUpsertArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesCountArgs} args - Arguments to filter Ticket_types to count.
     * @example
     * // Count the number of Ticket_types
     * const count = await prisma.ticket_types.count({
     *   where: {
     *     // ... the filter for the Ticket_types we want to count
     *   }
     * })
    **/
    count<T extends Ticket_typesCountArgs>(
      args?: Subset<T, Ticket_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_typesAggregateArgs>(args: Subset<T, Ticket_typesAggregateArgs>): Prisma.PrismaPromise<GetTicket_typesAggregateType<T>>

    /**
     * Group by Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ticket_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ticket_typesGroupByArgs['orderBy'] }
        : { orderBy?: Ticket_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ticket_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket_types model
   */
  readonly fields: Ticket_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Ticket_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transaction_details<T extends Ticket_types$transaction_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket_types$transaction_detailsArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket_types model
   */ 
  interface Ticket_typesFieldRefs {
    readonly ticket_types_id: FieldRef<"Ticket_types", 'Int'>
    readonly event_id: FieldRef<"Ticket_types", 'Int'>
    readonly types: FieldRef<"Ticket_types", 'String'>
    readonly price: FieldRef<"Ticket_types", 'Int'>
    readonly quantity_available: FieldRef<"Ticket_types", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket_types findUnique
   */
  export type Ticket_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_types to fetch.
     */
    where: Ticket_typesWhereUniqueInput
  }

  /**
   * Ticket_types findUniqueOrThrow
   */
  export type Ticket_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_types to fetch.
     */
    where: Ticket_typesWhereUniqueInput
  }

  /**
   * Ticket_types findFirst
   */
  export type Ticket_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_types to fetch.
     */
    where?: Ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_types to fetch.
     */
    orderBy?: Ticket_typesOrderByWithRelationInput | Ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ticket_types.
     */
    cursor?: Ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ticket_types.
     */
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * Ticket_types findFirstOrThrow
   */
  export type Ticket_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_types to fetch.
     */
    where?: Ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_types to fetch.
     */
    orderBy?: Ticket_typesOrderByWithRelationInput | Ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ticket_types.
     */
    cursor?: Ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ticket_types.
     */
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * Ticket_types findMany
   */
  export type Ticket_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_types to fetch.
     */
    where?: Ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_types to fetch.
     */
    orderBy?: Ticket_typesOrderByWithRelationInput | Ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ticket_types.
     */
    cursor?: Ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_types.
     */
    skip?: number
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * Ticket_types create
   */
  export type Ticket_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket_types.
     */
    data: XOR<Ticket_typesCreateInput, Ticket_typesUncheckedCreateInput>
  }

  /**
   * Ticket_types createMany
   */
  export type Ticket_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ticket_types.
     */
    data: Ticket_typesCreateManyInput | Ticket_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket_types createManyAndReturn
   */
  export type Ticket_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ticket_types.
     */
    data: Ticket_typesCreateManyInput | Ticket_typesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket_types update
   */
  export type Ticket_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket_types.
     */
    data: XOR<Ticket_typesUpdateInput, Ticket_typesUncheckedUpdateInput>
    /**
     * Choose, which Ticket_types to update.
     */
    where: Ticket_typesWhereUniqueInput
  }

  /**
   * Ticket_types updateMany
   */
  export type Ticket_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ticket_types.
     */
    data: XOR<Ticket_typesUpdateManyMutationInput, Ticket_typesUncheckedUpdateManyInput>
    /**
     * Filter which Ticket_types to update
     */
    where?: Ticket_typesWhereInput
  }

  /**
   * Ticket_types upsert
   */
  export type Ticket_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket_types to update in case it exists.
     */
    where: Ticket_typesWhereUniqueInput
    /**
     * In case the Ticket_types found by the `where` argument doesn't exist, create a new Ticket_types with this data.
     */
    create: XOR<Ticket_typesCreateInput, Ticket_typesUncheckedCreateInput>
    /**
     * In case the Ticket_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Ticket_typesUpdateInput, Ticket_typesUncheckedUpdateInput>
  }

  /**
   * Ticket_types delete
   */
  export type Ticket_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
    /**
     * Filter which Ticket_types to delete.
     */
    where: Ticket_typesWhereUniqueInput
  }

  /**
   * Ticket_types deleteMany
   */
  export type Ticket_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket_types to delete
     */
    where?: Ticket_typesWhereInput
  }

  /**
   * Ticket_types.transaction_details
   */
  export type Ticket_types$transaction_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    where?: Transaction_DetailWhereInput
  }

  /**
   * Ticket_types without action
   */
  export type Ticket_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_types
     */
    select?: Ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_typesInclude<ExtArgs> | null
  }


  /**
   * Model Transaction_Detail
   */

  export type AggregateTransaction_Detail = {
    _count: Transaction_DetailCountAggregateOutputType | null
    _avg: Transaction_DetailAvgAggregateOutputType | null
    _sum: Transaction_DetailSumAggregateOutputType | null
    _min: Transaction_DetailMinAggregateOutputType | null
    _max: Transaction_DetailMaxAggregateOutputType | null
  }

  export type Transaction_DetailAvgAggregateOutputType = {
    transaction_details_id: number | null
    user_id: number | null
    ticket_types_id: number | null
    quantity_bought: number | null
    subtotal: number | null
  }

  export type Transaction_DetailSumAggregateOutputType = {
    transaction_details_id: number | null
    user_id: number | null
    ticket_types_id: number | null
    quantity_bought: number | null
    subtotal: number | null
  }

  export type Transaction_DetailMinAggregateOutputType = {
    transaction_details_id: number | null
    user_id: number | null
    ticket_types_id: number | null
    quantity_bought: number | null
    subtotal: number | null
  }

  export type Transaction_DetailMaxAggregateOutputType = {
    transaction_details_id: number | null
    user_id: number | null
    ticket_types_id: number | null
    quantity_bought: number | null
    subtotal: number | null
  }

  export type Transaction_DetailCountAggregateOutputType = {
    transaction_details_id: number
    user_id: number
    ticket_types_id: number
    quantity_bought: number
    subtotal: number
    _all: number
  }


  export type Transaction_DetailAvgAggregateInputType = {
    transaction_details_id?: true
    user_id?: true
    ticket_types_id?: true
    quantity_bought?: true
    subtotal?: true
  }

  export type Transaction_DetailSumAggregateInputType = {
    transaction_details_id?: true
    user_id?: true
    ticket_types_id?: true
    quantity_bought?: true
    subtotal?: true
  }

  export type Transaction_DetailMinAggregateInputType = {
    transaction_details_id?: true
    user_id?: true
    ticket_types_id?: true
    quantity_bought?: true
    subtotal?: true
  }

  export type Transaction_DetailMaxAggregateInputType = {
    transaction_details_id?: true
    user_id?: true
    ticket_types_id?: true
    quantity_bought?: true
    subtotal?: true
  }

  export type Transaction_DetailCountAggregateInputType = {
    transaction_details_id?: true
    user_id?: true
    ticket_types_id?: true
    quantity_bought?: true
    subtotal?: true
    _all?: true
  }

  export type Transaction_DetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction_Detail to aggregate.
     */
    where?: Transaction_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaction_Details to fetch.
     */
    orderBy?: Transaction_DetailOrderByWithRelationInput | Transaction_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Transaction_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaction_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaction_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transaction_Details
    **/
    _count?: true | Transaction_DetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaction_DetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaction_DetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_DetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_DetailMaxAggregateInputType
  }

  export type GetTransaction_DetailAggregateType<T extends Transaction_DetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_Detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_Detail[P]>
      : GetScalarType<T[P], AggregateTransaction_Detail[P]>
  }




  export type Transaction_DetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Transaction_DetailWhereInput
    orderBy?: Transaction_DetailOrderByWithAggregationInput | Transaction_DetailOrderByWithAggregationInput[]
    by: Transaction_DetailScalarFieldEnum[] | Transaction_DetailScalarFieldEnum
    having?: Transaction_DetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_DetailCountAggregateInputType | true
    _avg?: Transaction_DetailAvgAggregateInputType
    _sum?: Transaction_DetailSumAggregateInputType
    _min?: Transaction_DetailMinAggregateInputType
    _max?: Transaction_DetailMaxAggregateInputType
  }

  export type Transaction_DetailGroupByOutputType = {
    transaction_details_id: number
    user_id: number
    ticket_types_id: number
    quantity_bought: number
    subtotal: number
    _count: Transaction_DetailCountAggregateOutputType | null
    _avg: Transaction_DetailAvgAggregateOutputType | null
    _sum: Transaction_DetailSumAggregateOutputType | null
    _min: Transaction_DetailMinAggregateOutputType | null
    _max: Transaction_DetailMaxAggregateOutputType | null
  }

  type GetTransaction_DetailGroupByPayload<T extends Transaction_DetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_DetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_DetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_DetailGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_DetailGroupByOutputType[P]>
        }
      >
    >


  export type Transaction_DetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_details_id?: boolean
    user_id?: boolean
    ticket_types_id?: boolean
    quantity_bought?: boolean
    subtotal?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticket_types?: boolean | Ticket_typesDefaultArgs<ExtArgs>
    transaction?: boolean | Transaction_Detail$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_Detail"]>

  export type Transaction_DetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_details_id?: boolean
    user_id?: boolean
    ticket_types_id?: boolean
    quantity_bought?: boolean
    subtotal?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticket_types?: boolean | Ticket_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_Detail"]>

  export type Transaction_DetailSelectScalar = {
    transaction_details_id?: boolean
    user_id?: boolean
    ticket_types_id?: boolean
    quantity_bought?: boolean
    subtotal?: boolean
  }

  export type Transaction_DetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticket_types?: boolean | Ticket_typesDefaultArgs<ExtArgs>
    transaction?: boolean | Transaction_Detail$transactionArgs<ExtArgs>
  }
  export type Transaction_DetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticket_types?: boolean | Ticket_typesDefaultArgs<ExtArgs>
  }

  export type $Transaction_DetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction_Detail"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ticket_types: Prisma.$Ticket_typesPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_details_id: number
      user_id: number
      ticket_types_id: number
      quantity_bought: number
      subtotal: number
    }, ExtArgs["result"]["transaction_Detail"]>
    composites: {}
  }

  type Transaction_DetailGetPayload<S extends boolean | null | undefined | Transaction_DetailDefaultArgs> = $Result.GetResult<Prisma.$Transaction_DetailPayload, S>

  type Transaction_DetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Transaction_DetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Transaction_DetailCountAggregateInputType | true
    }

  export interface Transaction_DetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction_Detail'], meta: { name: 'Transaction_Detail' } }
    /**
     * Find zero or one Transaction_Detail that matches the filter.
     * @param {Transaction_DetailFindUniqueArgs} args - Arguments to find a Transaction_Detail
     * @example
     * // Get one Transaction_Detail
     * const transaction_Detail = await prisma.transaction_Detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Transaction_DetailFindUniqueArgs>(args: SelectSubset<T, Transaction_DetailFindUniqueArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction_Detail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Transaction_DetailFindUniqueOrThrowArgs} args - Arguments to find a Transaction_Detail
     * @example
     * // Get one Transaction_Detail
     * const transaction_Detail = await prisma.transaction_Detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Transaction_DetailFindUniqueOrThrowArgs>(args: SelectSubset<T, Transaction_DetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction_Detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_DetailFindFirstArgs} args - Arguments to find a Transaction_Detail
     * @example
     * // Get one Transaction_Detail
     * const transaction_Detail = await prisma.transaction_Detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Transaction_DetailFindFirstArgs>(args?: SelectSubset<T, Transaction_DetailFindFirstArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction_Detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_DetailFindFirstOrThrowArgs} args - Arguments to find a Transaction_Detail
     * @example
     * // Get one Transaction_Detail
     * const transaction_Detail = await prisma.transaction_Detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Transaction_DetailFindFirstOrThrowArgs>(args?: SelectSubset<T, Transaction_DetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transaction_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_DetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_Details
     * const transaction_Details = await prisma.transaction_Detail.findMany()
     * 
     * // Get first 10 Transaction_Details
     * const transaction_Details = await prisma.transaction_Detail.findMany({ take: 10 })
     * 
     * // Only select the `transaction_details_id`
     * const transaction_DetailWithTransaction_details_idOnly = await prisma.transaction_Detail.findMany({ select: { transaction_details_id: true } })
     * 
     */
    findMany<T extends Transaction_DetailFindManyArgs>(args?: SelectSubset<T, Transaction_DetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction_Detail.
     * @param {Transaction_DetailCreateArgs} args - Arguments to create a Transaction_Detail.
     * @example
     * // Create one Transaction_Detail
     * const Transaction_Detail = await prisma.transaction_Detail.create({
     *   data: {
     *     // ... data to create a Transaction_Detail
     *   }
     * })
     * 
     */
    create<T extends Transaction_DetailCreateArgs>(args: SelectSubset<T, Transaction_DetailCreateArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transaction_Details.
     * @param {Transaction_DetailCreateManyArgs} args - Arguments to create many Transaction_Details.
     * @example
     * // Create many Transaction_Details
     * const transaction_Detail = await prisma.transaction_Detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Transaction_DetailCreateManyArgs>(args?: SelectSubset<T, Transaction_DetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaction_Details and returns the data saved in the database.
     * @param {Transaction_DetailCreateManyAndReturnArgs} args - Arguments to create many Transaction_Details.
     * @example
     * // Create many Transaction_Details
     * const transaction_Detail = await prisma.transaction_Detail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaction_Details and only return the `transaction_details_id`
     * const transaction_DetailWithTransaction_details_idOnly = await prisma.transaction_Detail.createManyAndReturn({ 
     *   select: { transaction_details_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Transaction_DetailCreateManyAndReturnArgs>(args?: SelectSubset<T, Transaction_DetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction_Detail.
     * @param {Transaction_DetailDeleteArgs} args - Arguments to delete one Transaction_Detail.
     * @example
     * // Delete one Transaction_Detail
     * const Transaction_Detail = await prisma.transaction_Detail.delete({
     *   where: {
     *     // ... filter to delete one Transaction_Detail
     *   }
     * })
     * 
     */
    delete<T extends Transaction_DetailDeleteArgs>(args: SelectSubset<T, Transaction_DetailDeleteArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction_Detail.
     * @param {Transaction_DetailUpdateArgs} args - Arguments to update one Transaction_Detail.
     * @example
     * // Update one Transaction_Detail
     * const transaction_Detail = await prisma.transaction_Detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Transaction_DetailUpdateArgs>(args: SelectSubset<T, Transaction_DetailUpdateArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transaction_Details.
     * @param {Transaction_DetailDeleteManyArgs} args - Arguments to filter Transaction_Details to delete.
     * @example
     * // Delete a few Transaction_Details
     * const { count } = await prisma.transaction_Detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Transaction_DetailDeleteManyArgs>(args?: SelectSubset<T, Transaction_DetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_DetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_Details
     * const transaction_Detail = await prisma.transaction_Detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Transaction_DetailUpdateManyArgs>(args: SelectSubset<T, Transaction_DetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction_Detail.
     * @param {Transaction_DetailUpsertArgs} args - Arguments to update or create a Transaction_Detail.
     * @example
     * // Update or create a Transaction_Detail
     * const transaction_Detail = await prisma.transaction_Detail.upsert({
     *   create: {
     *     // ... data to create a Transaction_Detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_Detail we want to update
     *   }
     * })
     */
    upsert<T extends Transaction_DetailUpsertArgs>(args: SelectSubset<T, Transaction_DetailUpsertArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transaction_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_DetailCountArgs} args - Arguments to filter Transaction_Details to count.
     * @example
     * // Count the number of Transaction_Details
     * const count = await prisma.transaction_Detail.count({
     *   where: {
     *     // ... the filter for the Transaction_Details we want to count
     *   }
     * })
    **/
    count<T extends Transaction_DetailCountArgs>(
      args?: Subset<T, Transaction_DetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_DetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_Detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_DetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transaction_DetailAggregateArgs>(args: Subset<T, Transaction_DetailAggregateArgs>): Prisma.PrismaPromise<GetTransaction_DetailAggregateType<T>>

    /**
     * Group by Transaction_Detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_DetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Transaction_DetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Transaction_DetailGroupByArgs['orderBy'] }
        : { orderBy?: Transaction_DetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Transaction_DetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_DetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction_Detail model
   */
  readonly fields: Transaction_DetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction_Detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Transaction_DetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket_types<T extends Ticket_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Ticket_typesDefaultArgs<ExtArgs>>): Prisma__Ticket_typesClient<$Result.GetResult<Prisma.$Ticket_typesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transaction<T extends Transaction_Detail$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Transaction_Detail$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction_Detail model
   */ 
  interface Transaction_DetailFieldRefs {
    readonly transaction_details_id: FieldRef<"Transaction_Detail", 'Int'>
    readonly user_id: FieldRef<"Transaction_Detail", 'Int'>
    readonly ticket_types_id: FieldRef<"Transaction_Detail", 'Int'>
    readonly quantity_bought: FieldRef<"Transaction_Detail", 'Int'>
    readonly subtotal: FieldRef<"Transaction_Detail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction_Detail findUnique
   */
  export type Transaction_DetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Transaction_Detail to fetch.
     */
    where: Transaction_DetailWhereUniqueInput
  }

  /**
   * Transaction_Detail findUniqueOrThrow
   */
  export type Transaction_DetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Transaction_Detail to fetch.
     */
    where: Transaction_DetailWhereUniqueInput
  }

  /**
   * Transaction_Detail findFirst
   */
  export type Transaction_DetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Transaction_Detail to fetch.
     */
    where?: Transaction_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaction_Details to fetch.
     */
    orderBy?: Transaction_DetailOrderByWithRelationInput | Transaction_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaction_Details.
     */
    cursor?: Transaction_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaction_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaction_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaction_Details.
     */
    distinct?: Transaction_DetailScalarFieldEnum | Transaction_DetailScalarFieldEnum[]
  }

  /**
   * Transaction_Detail findFirstOrThrow
   */
  export type Transaction_DetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Transaction_Detail to fetch.
     */
    where?: Transaction_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaction_Details to fetch.
     */
    orderBy?: Transaction_DetailOrderByWithRelationInput | Transaction_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaction_Details.
     */
    cursor?: Transaction_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaction_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaction_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaction_Details.
     */
    distinct?: Transaction_DetailScalarFieldEnum | Transaction_DetailScalarFieldEnum[]
  }

  /**
   * Transaction_Detail findMany
   */
  export type Transaction_DetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Transaction_Details to fetch.
     */
    where?: Transaction_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaction_Details to fetch.
     */
    orderBy?: Transaction_DetailOrderByWithRelationInput | Transaction_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transaction_Details.
     */
    cursor?: Transaction_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaction_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaction_Details.
     */
    skip?: number
    distinct?: Transaction_DetailScalarFieldEnum | Transaction_DetailScalarFieldEnum[]
  }

  /**
   * Transaction_Detail create
   */
  export type Transaction_DetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction_Detail.
     */
    data: XOR<Transaction_DetailCreateInput, Transaction_DetailUncheckedCreateInput>
  }

  /**
   * Transaction_Detail createMany
   */
  export type Transaction_DetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transaction_Details.
     */
    data: Transaction_DetailCreateManyInput | Transaction_DetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction_Detail createManyAndReturn
   */
  export type Transaction_DetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transaction_Details.
     */
    data: Transaction_DetailCreateManyInput | Transaction_DetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction_Detail update
   */
  export type Transaction_DetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction_Detail.
     */
    data: XOR<Transaction_DetailUpdateInput, Transaction_DetailUncheckedUpdateInput>
    /**
     * Choose, which Transaction_Detail to update.
     */
    where: Transaction_DetailWhereUniqueInput
  }

  /**
   * Transaction_Detail updateMany
   */
  export type Transaction_DetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transaction_Details.
     */
    data: XOR<Transaction_DetailUpdateManyMutationInput, Transaction_DetailUncheckedUpdateManyInput>
    /**
     * Filter which Transaction_Details to update
     */
    where?: Transaction_DetailWhereInput
  }

  /**
   * Transaction_Detail upsert
   */
  export type Transaction_DetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction_Detail to update in case it exists.
     */
    where: Transaction_DetailWhereUniqueInput
    /**
     * In case the Transaction_Detail found by the `where` argument doesn't exist, create a new Transaction_Detail with this data.
     */
    create: XOR<Transaction_DetailCreateInput, Transaction_DetailUncheckedCreateInput>
    /**
     * In case the Transaction_Detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Transaction_DetailUpdateInput, Transaction_DetailUncheckedUpdateInput>
  }

  /**
   * Transaction_Detail delete
   */
  export type Transaction_DetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
    /**
     * Filter which Transaction_Detail to delete.
     */
    where: Transaction_DetailWhereUniqueInput
  }

  /**
   * Transaction_Detail deleteMany
   */
  export type Transaction_DetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction_Details to delete
     */
    where?: Transaction_DetailWhereInput
  }

  /**
   * Transaction_Detail.transaction
   */
  export type Transaction_Detail$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Transaction_Detail without action
   */
  export type Transaction_DetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_Detail
     */
    select?: Transaction_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Transaction_DetailInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    transaction_id: number | null
    transaction_details_id: number | null
    user_id: number | null
    coupon_id: number | null
    total_amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    transaction_id: number | null
    transaction_details_id: number | null
    user_id: number | null
    coupon_id: number | null
    total_amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    transaction_id: number | null
    transaction_details_id: number | null
    user_id: number | null
    coupon_id: number | null
    total_amount: number | null
    payment_method: $Enums.PaymentMethod | null
    createdAt: Date | null
    isPaid: boolean | null
  }

  export type TransactionMaxAggregateOutputType = {
    transaction_id: number | null
    transaction_details_id: number | null
    user_id: number | null
    coupon_id: number | null
    total_amount: number | null
    payment_method: $Enums.PaymentMethod | null
    createdAt: Date | null
    isPaid: boolean | null
  }

  export type TransactionCountAggregateOutputType = {
    transaction_id: number
    transaction_details_id: number
    user_id: number
    coupon_id: number
    total_amount: number
    payment_method: number
    createdAt: number
    isPaid: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    transaction_id?: true
    transaction_details_id?: true
    user_id?: true
    coupon_id?: true
    total_amount?: true
  }

  export type TransactionSumAggregateInputType = {
    transaction_id?: true
    transaction_details_id?: true
    user_id?: true
    coupon_id?: true
    total_amount?: true
  }

  export type TransactionMinAggregateInputType = {
    transaction_id?: true
    transaction_details_id?: true
    user_id?: true
    coupon_id?: true
    total_amount?: true
    payment_method?: true
    createdAt?: true
    isPaid?: true
  }

  export type TransactionMaxAggregateInputType = {
    transaction_id?: true
    transaction_details_id?: true
    user_id?: true
    coupon_id?: true
    total_amount?: true
    payment_method?: true
    createdAt?: true
    isPaid?: true
  }

  export type TransactionCountAggregateInputType = {
    transaction_id?: true
    transaction_details_id?: true
    user_id?: true
    coupon_id?: true
    total_amount?: true
    payment_method?: true
    createdAt?: true
    isPaid?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    transaction_id: number
    transaction_details_id: number
    user_id: number
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt: Date
    isPaid: boolean
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    transaction_details_id?: boolean
    user_id?: boolean
    coupon_id?: boolean
    total_amount?: boolean
    payment_method?: boolean
    createdAt?: boolean
    isPaid?: boolean
    transaction_details?: boolean | Transaction_DetailDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    transaction_details_id?: boolean
    user_id?: boolean
    coupon_id?: boolean
    total_amount?: boolean
    payment_method?: boolean
    createdAt?: boolean
    isPaid?: boolean
    transaction_details?: boolean | Transaction_DetailDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    transaction_id?: boolean
    transaction_details_id?: boolean
    user_id?: boolean
    coupon_id?: boolean
    total_amount?: boolean
    payment_method?: boolean
    createdAt?: boolean
    isPaid?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_details?: boolean | Transaction_DetailDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_details?: boolean | Transaction_DetailDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      transaction_details: Prisma.$Transaction_DetailPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: number
      transaction_details_id: number
      user_id: number
      coupon_id: number
      total_amount: number
      payment_method: $Enums.PaymentMethod
      createdAt: Date
      isPaid: boolean
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const transactionWithTransaction_idOnly = await prisma.transaction.findMany({ select: { transaction_id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `transaction_id`
     * const transactionWithTransaction_idOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { transaction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction_details<T extends Transaction_DetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Transaction_DetailDefaultArgs<ExtArgs>>): Prisma__Transaction_DetailClient<$Result.GetResult<Prisma.$Transaction_DetailPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly transaction_id: FieldRef<"Transaction", 'Int'>
    readonly transaction_details_id: FieldRef<"Transaction", 'Int'>
    readonly user_id: FieldRef<"Transaction", 'Int'>
    readonly coupon_id: FieldRef<"Transaction", 'Int'>
    readonly total_amount: FieldRef<"Transaction", 'Int'>
    readonly payment_method: FieldRef<"Transaction", 'PaymentMethod'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly isPaid: FieldRef<"Transaction", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    profile_id: 'profile_id',
    phone: 'phone',
    job_title: 'job_title',
    company: 'company',
    user_id: 'user_id'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    address_id: 'address_id',
    profile_id: 'profile_id',
    address_name: 'address_name',
    address: 'address',
    city: 'city',
    country: 'country',
    zipcode: 'zipcode'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const PointScalarFieldEnum: {
    point_id: 'point_id',
    user_id: 'user_id',
    amount: 'amount',
    added_date: 'added_date',
    expired_date: 'expired_date'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    referral_id: 'referral_id',
    referral_code: 'referral_code',
    user_id: 'user_id'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const Social_mediaScalarFieldEnum: {
    social_id: 'social_id',
    profile_id: 'profile_id',
    platform: 'platform',
    account_name: 'account_name',
    url: 'url'
  };

  export type Social_mediaScalarFieldEnum = (typeof Social_mediaScalarFieldEnum)[keyof typeof Social_mediaScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    coupon_id: 'coupon_id',
    coupon_name: 'coupon_name',
    user_id: 'user_id',
    coupon_code: 'coupon_code',
    discount: 'discount',
    max_amount: 'max_amount',
    start_date: 'start_date',
    expired_date: 'expired_date'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const EventScalarFieldEnum: {
    event_id: 'event_id',
    user_id: 'user_id',
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
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const Event_categoryScalarFieldEnum: {
    event_category_id: 'event_category_id',
    category_name: 'category_name'
  };

  export type Event_categoryScalarFieldEnum = (typeof Event_categoryScalarFieldEnum)[keyof typeof Event_categoryScalarFieldEnum]


  export const Event_LocationScalarFieldEnum: {
    event_location_id: 'event_location_id',
    address_name: 'address_name',
    address: 'address',
    location_city_id: 'location_city_id',
    location_country_id: 'location_country_id',
    zipcode: 'zipcode'
  };

  export type Event_LocationScalarFieldEnum = (typeof Event_LocationScalarFieldEnum)[keyof typeof Event_LocationScalarFieldEnum]


  export const Location_cityScalarFieldEnum: {
    location_city_id: 'location_city_id',
    city_name: 'city_name'
  };

  export type Location_cityScalarFieldEnum = (typeof Location_cityScalarFieldEnum)[keyof typeof Location_cityScalarFieldEnum]


  export const Location_countryScalarFieldEnum: {
    location_country_id: 'location_country_id',
    country_name: 'country_name'
  };

  export type Location_countryScalarFieldEnum = (typeof Location_countryScalarFieldEnum)[keyof typeof Location_countryScalarFieldEnum]


  export const Ticket_typesScalarFieldEnum: {
    ticket_types_id: 'ticket_types_id',
    event_id: 'event_id',
    types: 'types',
    price: 'price',
    quantity_available: 'quantity_available'
  };

  export type Ticket_typesScalarFieldEnum = (typeof Ticket_typesScalarFieldEnum)[keyof typeof Ticket_typesScalarFieldEnum]


  export const Transaction_DetailScalarFieldEnum: {
    transaction_details_id: 'transaction_details_id',
    user_id: 'user_id',
    ticket_types_id: 'ticket_types_id',
    quantity_bought: 'quantity_bought',
    subtotal: 'subtotal'
  };

  export type Transaction_DetailScalarFieldEnum = (typeof Transaction_DetailScalarFieldEnum)[keyof typeof Transaction_DetailScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    transaction_id: 'transaction_id',
    transaction_details_id: 'transaction_details_id',
    user_id: 'user_id',
    coupon_id: 'coupon_id',
    total_amount: 'total_amount',
    payment_method: 'payment_method',
    createdAt: 'createdAt',
    isPaid: 'isPaid'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'AddressName'
   */
  export type EnumAddressNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressName'>
    


  /**
   * Reference to a field of type 'AddressName[]'
   */
  export type ListEnumAddressNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressName[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pfp_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    referred_id?: IntNullableFilter<"User"> | number | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    referral?: XOR<ReferralNullableScalarRelationFilter, ReferralWhereInput> | null
    referred?: XOR<ReferralNullableScalarRelationFilter, ReferralWhereInput> | null
    points?: PointListRelationFilter
    coupons?: CouponListRelationFilter
    events?: EventListRelationFilter
    transaction_details?: Transaction_DetailListRelationFilter
    transaction?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pfp_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    referred_id?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
    referral?: ReferralOrderByWithRelationInput
    referred?: ReferralOrderByWithRelationInput
    points?: PointOrderByRelationAggregateInput
    coupons?: CouponOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    transaction_details?: Transaction_DetailOrderByRelationAggregateInput
    transaction?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pfp_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    referred_id?: IntNullableFilter<"User"> | number | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    referral?: XOR<ReferralNullableScalarRelationFilter, ReferralWhereInput> | null
    referred?: XOR<ReferralNullableScalarRelationFilter, ReferralWhereInput> | null
    points?: PointListRelationFilter
    coupons?: CouponListRelationFilter
    events?: EventListRelationFilter
    transaction_details?: Transaction_DetailListRelationFilter
    transaction?: TransactionListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pfp_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    referred_id?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    pfp_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    referred_id?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    profile_id?: IntFilter<"Profile"> | number
    phone?: StringNullableFilter<"Profile"> | string | null
    job_title?: StringNullableFilter<"Profile"> | string | null
    company?: StringNullableFilter<"Profile"> | string | null
    user_id?: IntFilter<"Profile"> | number
    addresses?: AddressListRelationFilter
    social_medias?: Social_mediaListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    profile_id?: SortOrder
    phone?: SortOrderInput | SortOrder
    job_title?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    user_id?: SortOrder
    addresses?: AddressOrderByRelationAggregateInput
    social_medias?: Social_mediaOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    profile_id?: number
    user_id?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    phone?: StringNullableFilter<"Profile"> | string | null
    job_title?: StringNullableFilter<"Profile"> | string | null
    company?: StringNullableFilter<"Profile"> | string | null
    addresses?: AddressListRelationFilter
    social_medias?: Social_mediaListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "profile_id" | "user_id">

  export type ProfileOrderByWithAggregationInput = {
    profile_id?: SortOrder
    phone?: SortOrderInput | SortOrder
    job_title?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    profile_id?: IntWithAggregatesFilter<"Profile"> | number
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    job_title?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    company?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    user_id?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    address_id?: IntFilter<"Address"> | number
    profile_id?: IntFilter<"Address"> | number
    address_name?: EnumAddressNameFilter<"Address"> | $Enums.AddressName
    address?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    zipcode?: StringNullableFilter<"Address"> | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    address_id?: SortOrder
    profile_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipcode?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    address_id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    profile_id?: IntFilter<"Address"> | number
    address_name?: EnumAddressNameFilter<"Address"> | $Enums.AddressName
    address?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    zipcode?: StringNullableFilter<"Address"> | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "address_id">

  export type AddressOrderByWithAggregationInput = {
    address_id?: SortOrder
    profile_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipcode?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    address_id?: IntWithAggregatesFilter<"Address"> | number
    profile_id?: IntWithAggregatesFilter<"Address"> | number
    address_name?: EnumAddressNameWithAggregatesFilter<"Address"> | $Enums.AddressName
    address?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    zipcode?: StringNullableWithAggregatesFilter<"Address"> | string | null
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    point_id?: IntFilter<"Point"> | number
    user_id?: IntFilter<"Point"> | number
    amount?: IntFilter<"Point"> | number
    added_date?: DateTimeFilter<"Point"> | Date | string
    expired_date?: DateTimeFilter<"Point"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointOrderByWithRelationInput = {
    point_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    added_date?: SortOrder
    expired_date?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    point_id?: number
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    user_id?: IntFilter<"Point"> | number
    amount?: IntFilter<"Point"> | number
    added_date?: DateTimeFilter<"Point"> | Date | string
    expired_date?: DateTimeFilter<"Point"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "point_id">

  export type PointOrderByWithAggregationInput = {
    point_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    added_date?: SortOrder
    expired_date?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    point_id?: IntWithAggregatesFilter<"Point"> | number
    user_id?: IntWithAggregatesFilter<"Point"> | number
    amount?: IntWithAggregatesFilter<"Point"> | number
    added_date?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    expired_date?: DateTimeWithAggregatesFilter<"Point"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    referral_id?: IntFilter<"Referral"> | number
    referral_code?: StringFilter<"Referral"> | string
    user_id?: IntFilter<"Referral"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    referred_users?: UserListRelationFilter
  }

  export type ReferralOrderByWithRelationInput = {
    referral_id?: SortOrder
    referral_code?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    referred_users?: UserOrderByRelationAggregateInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    referral_id?: number
    referral_code?: string
    user_id?: number
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    referred_users?: UserListRelationFilter
  }, "referral_id" | "referral_code" | "user_id">

  export type ReferralOrderByWithAggregationInput = {
    referral_id?: SortOrder
    referral_code?: SortOrder
    user_id?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _avg?: ReferralAvgOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
    _sum?: ReferralSumOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    referral_id?: IntWithAggregatesFilter<"Referral"> | number
    referral_code?: StringWithAggregatesFilter<"Referral"> | string
    user_id?: IntWithAggregatesFilter<"Referral"> | number
  }

  export type Social_mediaWhereInput = {
    AND?: Social_mediaWhereInput | Social_mediaWhereInput[]
    OR?: Social_mediaWhereInput[]
    NOT?: Social_mediaWhereInput | Social_mediaWhereInput[]
    social_id?: IntFilter<"Social_media"> | number
    profile_id?: IntFilter<"Social_media"> | number
    platform?: EnumPlatformFilter<"Social_media"> | $Enums.Platform
    account_name?: StringFilter<"Social_media"> | string
    url?: StringFilter<"Social_media"> | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type Social_mediaOrderByWithRelationInput = {
    social_id?: SortOrder
    profile_id?: SortOrder
    platform?: SortOrder
    account_name?: SortOrder
    url?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type Social_mediaWhereUniqueInput = Prisma.AtLeast<{
    social_id?: number
    AND?: Social_mediaWhereInput | Social_mediaWhereInput[]
    OR?: Social_mediaWhereInput[]
    NOT?: Social_mediaWhereInput | Social_mediaWhereInput[]
    profile_id?: IntFilter<"Social_media"> | number
    platform?: EnumPlatformFilter<"Social_media"> | $Enums.Platform
    account_name?: StringFilter<"Social_media"> | string
    url?: StringFilter<"Social_media"> | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "social_id">

  export type Social_mediaOrderByWithAggregationInput = {
    social_id?: SortOrder
    profile_id?: SortOrder
    platform?: SortOrder
    account_name?: SortOrder
    url?: SortOrder
    _count?: Social_mediaCountOrderByAggregateInput
    _avg?: Social_mediaAvgOrderByAggregateInput
    _max?: Social_mediaMaxOrderByAggregateInput
    _min?: Social_mediaMinOrderByAggregateInput
    _sum?: Social_mediaSumOrderByAggregateInput
  }

  export type Social_mediaScalarWhereWithAggregatesInput = {
    AND?: Social_mediaScalarWhereWithAggregatesInput | Social_mediaScalarWhereWithAggregatesInput[]
    OR?: Social_mediaScalarWhereWithAggregatesInput[]
    NOT?: Social_mediaScalarWhereWithAggregatesInput | Social_mediaScalarWhereWithAggregatesInput[]
    social_id?: IntWithAggregatesFilter<"Social_media"> | number
    profile_id?: IntWithAggregatesFilter<"Social_media"> | number
    platform?: EnumPlatformWithAggregatesFilter<"Social_media"> | $Enums.Platform
    account_name?: StringWithAggregatesFilter<"Social_media"> | string
    url?: StringWithAggregatesFilter<"Social_media"> | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    coupon_id?: IntFilter<"Coupon"> | number
    coupon_name?: StringFilter<"Coupon"> | string
    user_id?: IntFilter<"Coupon"> | number
    coupon_code?: StringFilter<"Coupon"> | string
    discount?: IntFilter<"Coupon"> | number
    max_amount?: IntNullableFilter<"Coupon"> | number | null
    start_date?: DateTimeFilter<"Coupon"> | Date | string
    expired_date?: DateTimeFilter<"Coupon"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CouponOrderByWithRelationInput = {
    coupon_id?: SortOrder
    coupon_name?: SortOrder
    user_id?: SortOrder
    coupon_code?: SortOrder
    discount?: SortOrder
    max_amount?: SortOrderInput | SortOrder
    start_date?: SortOrder
    expired_date?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    coupon_id?: number
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    coupon_name?: StringFilter<"Coupon"> | string
    user_id?: IntFilter<"Coupon"> | number
    coupon_code?: StringFilter<"Coupon"> | string
    discount?: IntFilter<"Coupon"> | number
    max_amount?: IntNullableFilter<"Coupon"> | number | null
    start_date?: DateTimeFilter<"Coupon"> | Date | string
    expired_date?: DateTimeFilter<"Coupon"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "coupon_id">

  export type CouponOrderByWithAggregationInput = {
    coupon_id?: SortOrder
    coupon_name?: SortOrder
    user_id?: SortOrder
    coupon_code?: SortOrder
    discount?: SortOrder
    max_amount?: SortOrderInput | SortOrder
    start_date?: SortOrder
    expired_date?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    coupon_id?: IntWithAggregatesFilter<"Coupon"> | number
    coupon_name?: StringWithAggregatesFilter<"Coupon"> | string
    user_id?: IntWithAggregatesFilter<"Coupon"> | number
    coupon_code?: StringWithAggregatesFilter<"Coupon"> | string
    discount?: IntWithAggregatesFilter<"Coupon"> | number
    max_amount?: IntNullableWithAggregatesFilter<"Coupon"> | number | null
    start_date?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    expired_date?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    event_id?: IntFilter<"Event"> | number
    user_id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    imgEvent?: StringFilter<"Event"> | string
    coupon_id?: IntFilter<"Event"> | number
    event_location_id?: IntFilter<"Event"> | number
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: StringFilter<"Event"> | string
    endTime?: StringFilter<"Event"> | string
    timezone?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event_category?: Event_categoryListRelationFilter
    event_location?: XOR<Event_LocationScalarRelationFilter, Event_LocationWhereInput>
    ticket_types?: Ticket_typesListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    event_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgEvent?: SortOrder
    coupon_id?: SortOrder
    event_location_id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    event_category?: Event_categoryOrderByRelationAggregateInput
    event_location?: Event_LocationOrderByWithRelationInput
    ticket_types?: Ticket_typesOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    event_id?: number
    event_location_id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    user_id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    imgEvent?: StringFilter<"Event"> | string
    coupon_id?: IntFilter<"Event"> | number
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: StringFilter<"Event"> | string
    endTime?: StringFilter<"Event"> | string
    timezone?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event_category?: Event_categoryListRelationFilter
    event_location?: XOR<Event_LocationScalarRelationFilter, Event_LocationWhereInput>
    ticket_types?: Ticket_typesListRelationFilter
  }, "event_id" | "event_location_id">

  export type EventOrderByWithAggregationInput = {
    event_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgEvent?: SortOrder
    coupon_id?: SortOrder
    event_location_id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    event_id?: IntWithAggregatesFilter<"Event"> | number
    user_id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    imgEvent?: StringWithAggregatesFilter<"Event"> | string
    coupon_id?: IntWithAggregatesFilter<"Event"> | number
    event_location_id?: IntWithAggregatesFilter<"Event"> | number
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    startTime?: StringWithAggregatesFilter<"Event"> | string
    endTime?: StringWithAggregatesFilter<"Event"> | string
    timezone?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type Event_categoryWhereInput = {
    AND?: Event_categoryWhereInput | Event_categoryWhereInput[]
    OR?: Event_categoryWhereInput[]
    NOT?: Event_categoryWhereInput | Event_categoryWhereInput[]
    event_category_id?: IntFilter<"Event_category"> | number
    category_name?: StringFilter<"Event_category"> | string
    Event?: EventListRelationFilter
  }

  export type Event_categoryOrderByWithRelationInput = {
    event_category_id?: SortOrder
    category_name?: SortOrder
    Event?: EventOrderByRelationAggregateInput
  }

  export type Event_categoryWhereUniqueInput = Prisma.AtLeast<{
    event_category_id?: number
    category_name?: string
    AND?: Event_categoryWhereInput | Event_categoryWhereInput[]
    OR?: Event_categoryWhereInput[]
    NOT?: Event_categoryWhereInput | Event_categoryWhereInput[]
    Event?: EventListRelationFilter
  }, "event_category_id" | "category_name">

  export type Event_categoryOrderByWithAggregationInput = {
    event_category_id?: SortOrder
    category_name?: SortOrder
    _count?: Event_categoryCountOrderByAggregateInput
    _avg?: Event_categoryAvgOrderByAggregateInput
    _max?: Event_categoryMaxOrderByAggregateInput
    _min?: Event_categoryMinOrderByAggregateInput
    _sum?: Event_categorySumOrderByAggregateInput
  }

  export type Event_categoryScalarWhereWithAggregatesInput = {
    AND?: Event_categoryScalarWhereWithAggregatesInput | Event_categoryScalarWhereWithAggregatesInput[]
    OR?: Event_categoryScalarWhereWithAggregatesInput[]
    NOT?: Event_categoryScalarWhereWithAggregatesInput | Event_categoryScalarWhereWithAggregatesInput[]
    event_category_id?: IntWithAggregatesFilter<"Event_category"> | number
    category_name?: StringWithAggregatesFilter<"Event_category"> | string
  }

  export type Event_LocationWhereInput = {
    AND?: Event_LocationWhereInput | Event_LocationWhereInput[]
    OR?: Event_LocationWhereInput[]
    NOT?: Event_LocationWhereInput | Event_LocationWhereInput[]
    event_location_id?: IntFilter<"Event_Location"> | number
    address_name?: StringFilter<"Event_Location"> | string
    address?: StringFilter<"Event_Location"> | string
    location_city_id?: IntFilter<"Event_Location"> | number
    location_country_id?: IntFilter<"Event_Location"> | number
    zipcode?: StringNullableFilter<"Event_Location"> | string | null
    city?: XOR<Location_cityScalarRelationFilter, Location_cityWhereInput>
    country?: XOR<Location_countryScalarRelationFilter, Location_countryWhereInput>
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type Event_LocationOrderByWithRelationInput = {
    event_location_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    location_city_id?: SortOrder
    location_country_id?: SortOrder
    zipcode?: SortOrderInput | SortOrder
    city?: Location_cityOrderByWithRelationInput
    country?: Location_countryOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type Event_LocationWhereUniqueInput = Prisma.AtLeast<{
    event_location_id?: number
    AND?: Event_LocationWhereInput | Event_LocationWhereInput[]
    OR?: Event_LocationWhereInput[]
    NOT?: Event_LocationWhereInput | Event_LocationWhereInput[]
    address_name?: StringFilter<"Event_Location"> | string
    address?: StringFilter<"Event_Location"> | string
    location_city_id?: IntFilter<"Event_Location"> | number
    location_country_id?: IntFilter<"Event_Location"> | number
    zipcode?: StringNullableFilter<"Event_Location"> | string | null
    city?: XOR<Location_cityScalarRelationFilter, Location_cityWhereInput>
    country?: XOR<Location_countryScalarRelationFilter, Location_countryWhereInput>
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "event_location_id">

  export type Event_LocationOrderByWithAggregationInput = {
    event_location_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    location_city_id?: SortOrder
    location_country_id?: SortOrder
    zipcode?: SortOrderInput | SortOrder
    _count?: Event_LocationCountOrderByAggregateInput
    _avg?: Event_LocationAvgOrderByAggregateInput
    _max?: Event_LocationMaxOrderByAggregateInput
    _min?: Event_LocationMinOrderByAggregateInput
    _sum?: Event_LocationSumOrderByAggregateInput
  }

  export type Event_LocationScalarWhereWithAggregatesInput = {
    AND?: Event_LocationScalarWhereWithAggregatesInput | Event_LocationScalarWhereWithAggregatesInput[]
    OR?: Event_LocationScalarWhereWithAggregatesInput[]
    NOT?: Event_LocationScalarWhereWithAggregatesInput | Event_LocationScalarWhereWithAggregatesInput[]
    event_location_id?: IntWithAggregatesFilter<"Event_Location"> | number
    address_name?: StringWithAggregatesFilter<"Event_Location"> | string
    address?: StringWithAggregatesFilter<"Event_Location"> | string
    location_city_id?: IntWithAggregatesFilter<"Event_Location"> | number
    location_country_id?: IntWithAggregatesFilter<"Event_Location"> | number
    zipcode?: StringNullableWithAggregatesFilter<"Event_Location"> | string | null
  }

  export type Location_cityWhereInput = {
    AND?: Location_cityWhereInput | Location_cityWhereInput[]
    OR?: Location_cityWhereInput[]
    NOT?: Location_cityWhereInput | Location_cityWhereInput[]
    location_city_id?: IntFilter<"Location_city"> | number
    city_name?: StringFilter<"Location_city"> | string
    event_location?: Event_LocationListRelationFilter
  }

  export type Location_cityOrderByWithRelationInput = {
    location_city_id?: SortOrder
    city_name?: SortOrder
    event_location?: Event_LocationOrderByRelationAggregateInput
  }

  export type Location_cityWhereUniqueInput = Prisma.AtLeast<{
    location_city_id?: number
    city_name?: string
    AND?: Location_cityWhereInput | Location_cityWhereInput[]
    OR?: Location_cityWhereInput[]
    NOT?: Location_cityWhereInput | Location_cityWhereInput[]
    event_location?: Event_LocationListRelationFilter
  }, "location_city_id" | "city_name">

  export type Location_cityOrderByWithAggregationInput = {
    location_city_id?: SortOrder
    city_name?: SortOrder
    _count?: Location_cityCountOrderByAggregateInput
    _avg?: Location_cityAvgOrderByAggregateInput
    _max?: Location_cityMaxOrderByAggregateInput
    _min?: Location_cityMinOrderByAggregateInput
    _sum?: Location_citySumOrderByAggregateInput
  }

  export type Location_cityScalarWhereWithAggregatesInput = {
    AND?: Location_cityScalarWhereWithAggregatesInput | Location_cityScalarWhereWithAggregatesInput[]
    OR?: Location_cityScalarWhereWithAggregatesInput[]
    NOT?: Location_cityScalarWhereWithAggregatesInput | Location_cityScalarWhereWithAggregatesInput[]
    location_city_id?: IntWithAggregatesFilter<"Location_city"> | number
    city_name?: StringWithAggregatesFilter<"Location_city"> | string
  }

  export type Location_countryWhereInput = {
    AND?: Location_countryWhereInput | Location_countryWhereInput[]
    OR?: Location_countryWhereInput[]
    NOT?: Location_countryWhereInput | Location_countryWhereInput[]
    location_country_id?: IntFilter<"Location_country"> | number
    country_name?: StringFilter<"Location_country"> | string
    event_location?: Event_LocationListRelationFilter
  }

  export type Location_countryOrderByWithRelationInput = {
    location_country_id?: SortOrder
    country_name?: SortOrder
    event_location?: Event_LocationOrderByRelationAggregateInput
  }

  export type Location_countryWhereUniqueInput = Prisma.AtLeast<{
    location_country_id?: number
    country_name?: string
    AND?: Location_countryWhereInput | Location_countryWhereInput[]
    OR?: Location_countryWhereInput[]
    NOT?: Location_countryWhereInput | Location_countryWhereInput[]
    event_location?: Event_LocationListRelationFilter
  }, "location_country_id" | "country_name">

  export type Location_countryOrderByWithAggregationInput = {
    location_country_id?: SortOrder
    country_name?: SortOrder
    _count?: Location_countryCountOrderByAggregateInput
    _avg?: Location_countryAvgOrderByAggregateInput
    _max?: Location_countryMaxOrderByAggregateInput
    _min?: Location_countryMinOrderByAggregateInput
    _sum?: Location_countrySumOrderByAggregateInput
  }

  export type Location_countryScalarWhereWithAggregatesInput = {
    AND?: Location_countryScalarWhereWithAggregatesInput | Location_countryScalarWhereWithAggregatesInput[]
    OR?: Location_countryScalarWhereWithAggregatesInput[]
    NOT?: Location_countryScalarWhereWithAggregatesInput | Location_countryScalarWhereWithAggregatesInput[]
    location_country_id?: IntWithAggregatesFilter<"Location_country"> | number
    country_name?: StringWithAggregatesFilter<"Location_country"> | string
  }

  export type Ticket_typesWhereInput = {
    AND?: Ticket_typesWhereInput | Ticket_typesWhereInput[]
    OR?: Ticket_typesWhereInput[]
    NOT?: Ticket_typesWhereInput | Ticket_typesWhereInput[]
    ticket_types_id?: IntFilter<"Ticket_types"> | number
    event_id?: IntFilter<"Ticket_types"> | number
    types?: StringFilter<"Ticket_types"> | string
    price?: IntFilter<"Ticket_types"> | number
    quantity_available?: IntFilter<"Ticket_types"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    transaction_details?: XOR<Transaction_DetailNullableScalarRelationFilter, Transaction_DetailWhereInput> | null
  }

  export type Ticket_typesOrderByWithRelationInput = {
    ticket_types_id?: SortOrder
    event_id?: SortOrder
    types?: SortOrder
    price?: SortOrder
    quantity_available?: SortOrder
    event?: EventOrderByWithRelationInput
    transaction_details?: Transaction_DetailOrderByWithRelationInput
  }

  export type Ticket_typesWhereUniqueInput = Prisma.AtLeast<{
    ticket_types_id?: number
    AND?: Ticket_typesWhereInput | Ticket_typesWhereInput[]
    OR?: Ticket_typesWhereInput[]
    NOT?: Ticket_typesWhereInput | Ticket_typesWhereInput[]
    event_id?: IntFilter<"Ticket_types"> | number
    types?: StringFilter<"Ticket_types"> | string
    price?: IntFilter<"Ticket_types"> | number
    quantity_available?: IntFilter<"Ticket_types"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    transaction_details?: XOR<Transaction_DetailNullableScalarRelationFilter, Transaction_DetailWhereInput> | null
  }, "ticket_types_id">

  export type Ticket_typesOrderByWithAggregationInput = {
    ticket_types_id?: SortOrder
    event_id?: SortOrder
    types?: SortOrder
    price?: SortOrder
    quantity_available?: SortOrder
    _count?: Ticket_typesCountOrderByAggregateInput
    _avg?: Ticket_typesAvgOrderByAggregateInput
    _max?: Ticket_typesMaxOrderByAggregateInput
    _min?: Ticket_typesMinOrderByAggregateInput
    _sum?: Ticket_typesSumOrderByAggregateInput
  }

  export type Ticket_typesScalarWhereWithAggregatesInput = {
    AND?: Ticket_typesScalarWhereWithAggregatesInput | Ticket_typesScalarWhereWithAggregatesInput[]
    OR?: Ticket_typesScalarWhereWithAggregatesInput[]
    NOT?: Ticket_typesScalarWhereWithAggregatesInput | Ticket_typesScalarWhereWithAggregatesInput[]
    ticket_types_id?: IntWithAggregatesFilter<"Ticket_types"> | number
    event_id?: IntWithAggregatesFilter<"Ticket_types"> | number
    types?: StringWithAggregatesFilter<"Ticket_types"> | string
    price?: IntWithAggregatesFilter<"Ticket_types"> | number
    quantity_available?: IntWithAggregatesFilter<"Ticket_types"> | number
  }

  export type Transaction_DetailWhereInput = {
    AND?: Transaction_DetailWhereInput | Transaction_DetailWhereInput[]
    OR?: Transaction_DetailWhereInput[]
    NOT?: Transaction_DetailWhereInput | Transaction_DetailWhereInput[]
    transaction_details_id?: IntFilter<"Transaction_Detail"> | number
    user_id?: IntFilter<"Transaction_Detail"> | number
    ticket_types_id?: IntFilter<"Transaction_Detail"> | number
    quantity_bought?: IntFilter<"Transaction_Detail"> | number
    subtotal?: IntFilter<"Transaction_Detail"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticket_types?: XOR<Ticket_typesScalarRelationFilter, Ticket_typesWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type Transaction_DetailOrderByWithRelationInput = {
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    ticket_types_id?: SortOrder
    quantity_bought?: SortOrder
    subtotal?: SortOrder
    user?: UserOrderByWithRelationInput
    ticket_types?: Ticket_typesOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type Transaction_DetailWhereUniqueInput = Prisma.AtLeast<{
    transaction_details_id?: number
    ticket_types_id?: number
    AND?: Transaction_DetailWhereInput | Transaction_DetailWhereInput[]
    OR?: Transaction_DetailWhereInput[]
    NOT?: Transaction_DetailWhereInput | Transaction_DetailWhereInput[]
    user_id?: IntFilter<"Transaction_Detail"> | number
    quantity_bought?: IntFilter<"Transaction_Detail"> | number
    subtotal?: IntFilter<"Transaction_Detail"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticket_types?: XOR<Ticket_typesScalarRelationFilter, Ticket_typesWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "transaction_details_id" | "ticket_types_id">

  export type Transaction_DetailOrderByWithAggregationInput = {
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    ticket_types_id?: SortOrder
    quantity_bought?: SortOrder
    subtotal?: SortOrder
    _count?: Transaction_DetailCountOrderByAggregateInput
    _avg?: Transaction_DetailAvgOrderByAggregateInput
    _max?: Transaction_DetailMaxOrderByAggregateInput
    _min?: Transaction_DetailMinOrderByAggregateInput
    _sum?: Transaction_DetailSumOrderByAggregateInput
  }

  export type Transaction_DetailScalarWhereWithAggregatesInput = {
    AND?: Transaction_DetailScalarWhereWithAggregatesInput | Transaction_DetailScalarWhereWithAggregatesInput[]
    OR?: Transaction_DetailScalarWhereWithAggregatesInput[]
    NOT?: Transaction_DetailScalarWhereWithAggregatesInput | Transaction_DetailScalarWhereWithAggregatesInput[]
    transaction_details_id?: IntWithAggregatesFilter<"Transaction_Detail"> | number
    user_id?: IntWithAggregatesFilter<"Transaction_Detail"> | number
    ticket_types_id?: IntWithAggregatesFilter<"Transaction_Detail"> | number
    quantity_bought?: IntWithAggregatesFilter<"Transaction_Detail"> | number
    subtotal?: IntWithAggregatesFilter<"Transaction_Detail"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    transaction_id?: IntFilter<"Transaction"> | number
    transaction_details_id?: IntFilter<"Transaction"> | number
    user_id?: IntFilter<"Transaction"> | number
    coupon_id?: IntFilter<"Transaction"> | number
    total_amount?: IntFilter<"Transaction"> | number
    payment_method?: EnumPaymentMethodFilter<"Transaction"> | $Enums.PaymentMethod
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    isPaid?: BoolFilter<"Transaction"> | boolean
    transaction_details?: XOR<Transaction_DetailScalarRelationFilter, Transaction_DetailWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    transaction_id?: SortOrder
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    total_amount?: SortOrder
    payment_method?: SortOrder
    createdAt?: SortOrder
    isPaid?: SortOrder
    transaction_details?: Transaction_DetailOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: number
    transaction_details_id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    user_id?: IntFilter<"Transaction"> | number
    coupon_id?: IntFilter<"Transaction"> | number
    total_amount?: IntFilter<"Transaction"> | number
    payment_method?: EnumPaymentMethodFilter<"Transaction"> | $Enums.PaymentMethod
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    isPaid?: BoolFilter<"Transaction"> | boolean
    transaction_details?: XOR<Transaction_DetailScalarRelationFilter, Transaction_DetailWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "transaction_id" | "transaction_details_id">

  export type TransactionOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    total_amount?: SortOrder
    payment_method?: SortOrder
    createdAt?: SortOrder
    isPaid?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    transaction_id?: IntWithAggregatesFilter<"Transaction"> | number
    transaction_details_id?: IntWithAggregatesFilter<"Transaction"> | number
    user_id?: IntWithAggregatesFilter<"Transaction"> | number
    coupon_id?: IntWithAggregatesFilter<"Transaction"> | number
    total_amount?: IntWithAggregatesFilter<"Transaction"> | number
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"Transaction"> | $Enums.PaymentMethod
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    isPaid?: BoolWithAggregatesFilter<"Transaction"> | boolean
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    referral?: ReferralCreateNestedOneWithoutUserInput
    referred?: ReferralCreateNestedOneWithoutReferred_usersInput
    points?: PointCreateNestedManyWithoutUserInput
    coupons?: CouponCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailCreateNestedManyWithoutUserInput
    transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    referral?: ReferralUncheckedCreateNestedOneWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    referral?: ReferralUpdateOneWithoutUserNestedInput
    referred?: ReferralUpdateOneWithoutReferred_usersNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    coupons?: CouponUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUpdateManyWithoutUserNestedInput
    transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    referral?: ReferralUncheckedUpdateOneWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfileCreateInput = {
    phone?: string | null
    job_title?: string | null
    company?: string | null
    addresses?: AddressCreateNestedManyWithoutProfileInput
    social_medias?: Social_mediaCreateNestedManyWithoutProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    profile_id?: number
    phone?: string | null
    job_title?: string | null
    company?: string | null
    user_id: number
    addresses?: AddressUncheckedCreateNestedManyWithoutProfileInput
    social_medias?: Social_mediaUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: AddressUpdateManyWithoutProfileNestedInput
    social_medias?: Social_mediaUpdateManyWithoutProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    addresses?: AddressUncheckedUpdateManyWithoutProfileNestedInput
    social_medias?: Social_mediaUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    profile_id?: number
    phone?: string | null
    job_title?: string | null
    company?: string | null
    user_id: number
  }

  export type ProfileUpdateManyMutationInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateInput = {
    address_name: $Enums.AddressName
    address: string
    city: string
    country: string
    zipcode?: string | null
    profile: ProfileCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    address_id?: number
    profile_id: number
    address_name: $Enums.AddressName
    address: string
    city: string
    country: string
    zipcode?: string | null
  }

  export type AddressUpdateInput = {
    address_name?: EnumAddressNameFieldUpdateOperationsInput | $Enums.AddressName
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    address_name?: EnumAddressNameFieldUpdateOperationsInput | $Enums.AddressName
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyInput = {
    address_id?: number
    profile_id: number
    address_name: $Enums.AddressName
    address: string
    city: string
    country: string
    zipcode?: string | null
  }

  export type AddressUpdateManyMutationInput = {
    address_name?: EnumAddressNameFieldUpdateOperationsInput | $Enums.AddressName
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    address_name?: EnumAddressNameFieldUpdateOperationsInput | $Enums.AddressName
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PointCreateInput = {
    amount: number
    added_date?: Date | string
    expired_date: Date | string
    user: UserCreateNestedOneWithoutPointsInput
  }

  export type PointUncheckedCreateInput = {
    point_id?: number
    user_id: number
    amount: number
    added_date?: Date | string
    expired_date: Date | string
  }

  export type PointUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    added_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointUncheckedUpdateInput = {
    point_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    added_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateManyInput = {
    point_id?: number
    user_id: number
    amount: number
    added_date?: Date | string
    expired_date: Date | string
  }

  export type PointUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    added_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyInput = {
    point_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    added_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    referral_code: string
    user: UserCreateNestedOneWithoutReferralInput
    referred_users?: UserCreateNestedManyWithoutReferredInput
  }

  export type ReferralUncheckedCreateInput = {
    referral_id?: number
    referral_code: string
    user_id: number
    referred_users?: UserUncheckedCreateNestedManyWithoutReferredInput
  }

  export type ReferralUpdateInput = {
    referral_code?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReferralNestedInput
    referred_users?: UserUpdateManyWithoutReferredNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    referral_id?: IntFieldUpdateOperationsInput | number
    referral_code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    referred_users?: UserUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type ReferralCreateManyInput = {
    referral_id?: number
    referral_code: string
    user_id: number
  }

  export type ReferralUpdateManyMutationInput = {
    referral_code?: StringFieldUpdateOperationsInput | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    referral_id?: IntFieldUpdateOperationsInput | number
    referral_code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type Social_mediaCreateInput = {
    platform: $Enums.Platform
    account_name: string
    url: string
    profile: ProfileCreateNestedOneWithoutSocial_mediasInput
  }

  export type Social_mediaUncheckedCreateInput = {
    social_id?: number
    profile_id: number
    platform: $Enums.Platform
    account_name: string
    url: string
  }

  export type Social_mediaUpdateInput = {
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    account_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneRequiredWithoutSocial_mediasNestedInput
  }

  export type Social_mediaUncheckedUpdateInput = {
    social_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    account_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Social_mediaCreateManyInput = {
    social_id?: number
    profile_id: number
    platform: $Enums.Platform
    account_name: string
    url: string
  }

  export type Social_mediaUpdateManyMutationInput = {
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    account_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Social_mediaUncheckedUpdateManyInput = {
    social_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    account_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type CouponCreateInput = {
    coupon_name: string
    coupon_code: string
    discount: number
    max_amount?: number | null
    start_date?: Date | string
    expired_date: Date | string
    user: UserCreateNestedOneWithoutCouponsInput
  }

  export type CouponUncheckedCreateInput = {
    coupon_id?: number
    coupon_name: string
    user_id: number
    coupon_code: string
    discount: number
    max_amount?: number | null
    start_date?: Date | string
    expired_date: Date | string
  }

  export type CouponUpdateInput = {
    coupon_name?: StringFieldUpdateOperationsInput | string
    coupon_code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    max_amount?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    coupon_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    coupon_code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    max_amount?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateManyInput = {
    coupon_id?: number
    coupon_name: string
    user_id: number
    coupon_code: string
    discount: number
    max_amount?: number | null
    start_date?: Date | string
    expired_date: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    coupon_name?: StringFieldUpdateOperationsInput | string
    coupon_code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    max_amount?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    coupon_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    coupon_code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    max_amount?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    event_category?: Event_categoryCreateNestedManyWithoutEventInput
    event_location: Event_LocationCreateNestedOneWithoutEventInput
    ticket_types?: Ticket_typesCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    event_id?: number
    user_id: number
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    event_location_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    event_category?: Event_categoryUncheckedCreateNestedManyWithoutEventInput
    ticket_types?: Ticket_typesUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    event_category?: Event_categoryUpdateManyWithoutEventNestedInput
    event_location?: Event_LocationUpdateOneRequiredWithoutEventNestedInput
    ticket_types?: Ticket_typesUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    event_location_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event_category?: Event_categoryUncheckedUpdateManyWithoutEventNestedInput
    ticket_types?: Ticket_typesUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    event_id?: number
    user_id: number
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    event_location_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    event_location_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event_categoryCreateInput = {
    category_name: string
    Event?: EventCreateNestedManyWithoutEvent_categoryInput
  }

  export type Event_categoryUncheckedCreateInput = {
    event_category_id?: number
    category_name: string
    Event?: EventUncheckedCreateNestedManyWithoutEvent_categoryInput
  }

  export type Event_categoryUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    Event?: EventUpdateManyWithoutEvent_categoryNestedInput
  }

  export type Event_categoryUncheckedUpdateInput = {
    event_category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Event?: EventUncheckedUpdateManyWithoutEvent_categoryNestedInput
  }

  export type Event_categoryCreateManyInput = {
    event_category_id?: number
    category_name: string
  }

  export type Event_categoryUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type Event_categoryUncheckedUpdateManyInput = {
    event_category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type Event_LocationCreateInput = {
    address_name: string
    address: string
    zipcode?: string | null
    city: Location_cityCreateNestedOneWithoutEvent_locationInput
    country: Location_countryCreateNestedOneWithoutEvent_locationInput
    event?: EventCreateNestedOneWithoutEvent_locationInput
  }

  export type Event_LocationUncheckedCreateInput = {
    event_location_id?: number
    address_name: string
    address: string
    location_city_id: number
    location_country_id: number
    zipcode?: string | null
    event?: EventUncheckedCreateNestedOneWithoutEvent_locationInput
  }

  export type Event_LocationUpdateInput = {
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: Location_cityUpdateOneRequiredWithoutEvent_locationNestedInput
    country?: Location_countryUpdateOneRequiredWithoutEvent_locationNestedInput
    event?: EventUpdateOneWithoutEvent_locationNestedInput
  }

  export type Event_LocationUncheckedUpdateInput = {
    event_location_id?: IntFieldUpdateOperationsInput | number
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location_city_id?: IntFieldUpdateOperationsInput | number
    location_country_id?: IntFieldUpdateOperationsInput | number
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUncheckedUpdateOneWithoutEvent_locationNestedInput
  }

  export type Event_LocationCreateManyInput = {
    event_location_id?: number
    address_name: string
    address: string
    location_city_id: number
    location_country_id: number
    zipcode?: string | null
  }

  export type Event_LocationUpdateManyMutationInput = {
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Event_LocationUncheckedUpdateManyInput = {
    event_location_id?: IntFieldUpdateOperationsInput | number
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location_city_id?: IntFieldUpdateOperationsInput | number
    location_country_id?: IntFieldUpdateOperationsInput | number
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Location_cityCreateInput = {
    city_name: string
    event_location?: Event_LocationCreateNestedManyWithoutCityInput
  }

  export type Location_cityUncheckedCreateInput = {
    location_city_id?: number
    city_name: string
    event_location?: Event_LocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type Location_cityUpdateInput = {
    city_name?: StringFieldUpdateOperationsInput | string
    event_location?: Event_LocationUpdateManyWithoutCityNestedInput
  }

  export type Location_cityUncheckedUpdateInput = {
    location_city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    event_location?: Event_LocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type Location_cityCreateManyInput = {
    location_city_id?: number
    city_name: string
  }

  export type Location_cityUpdateManyMutationInput = {
    city_name?: StringFieldUpdateOperationsInput | string
  }

  export type Location_cityUncheckedUpdateManyInput = {
    location_city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
  }

  export type Location_countryCreateInput = {
    country_name: string
    event_location?: Event_LocationCreateNestedManyWithoutCountryInput
  }

  export type Location_countryUncheckedCreateInput = {
    location_country_id?: number
    country_name: string
    event_location?: Event_LocationUncheckedCreateNestedManyWithoutCountryInput
  }

  export type Location_countryUpdateInput = {
    country_name?: StringFieldUpdateOperationsInput | string
    event_location?: Event_LocationUpdateManyWithoutCountryNestedInput
  }

  export type Location_countryUncheckedUpdateInput = {
    location_country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
    event_location?: Event_LocationUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type Location_countryCreateManyInput = {
    location_country_id?: number
    country_name: string
  }

  export type Location_countryUpdateManyMutationInput = {
    country_name?: StringFieldUpdateOperationsInput | string
  }

  export type Location_countryUncheckedUpdateManyInput = {
    location_country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
  }

  export type Ticket_typesCreateInput = {
    types: string
    price: number
    quantity_available: number
    event: EventCreateNestedOneWithoutTicket_typesInput
    transaction_details?: Transaction_DetailCreateNestedOneWithoutTicket_typesInput
  }

  export type Ticket_typesUncheckedCreateInput = {
    ticket_types_id?: number
    event_id: number
    types: string
    price: number
    quantity_available: number
    transaction_details?: Transaction_DetailUncheckedCreateNestedOneWithoutTicket_typesInput
  }

  export type Ticket_typesUpdateInput = {
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTicket_typesNestedInput
    transaction_details?: Transaction_DetailUpdateOneWithoutTicket_typesNestedInput
  }

  export type Ticket_typesUncheckedUpdateInput = {
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
    transaction_details?: Transaction_DetailUncheckedUpdateOneWithoutTicket_typesNestedInput
  }

  export type Ticket_typesCreateManyInput = {
    ticket_types_id?: number
    event_id: number
    types: string
    price: number
    quantity_available: number
  }

  export type Ticket_typesUpdateManyMutationInput = {
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
  }

  export type Ticket_typesUncheckedUpdateManyInput = {
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
  }

  export type Transaction_DetailCreateInput = {
    quantity_bought: number
    subtotal: number
    user: UserCreateNestedOneWithoutTransaction_detailsInput
    ticket_types: Ticket_typesCreateNestedOneWithoutTransaction_detailsInput
    transaction?: TransactionCreateNestedOneWithoutTransaction_detailsInput
  }

  export type Transaction_DetailUncheckedCreateInput = {
    transaction_details_id?: number
    user_id: number
    ticket_types_id: number
    quantity_bought: number
    subtotal: number
    transaction?: TransactionUncheckedCreateNestedOneWithoutTransaction_detailsInput
  }

  export type Transaction_DetailUpdateInput = {
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTransaction_detailsNestedInput
    ticket_types?: Ticket_typesUpdateOneRequiredWithoutTransaction_detailsNestedInput
    transaction?: TransactionUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type Transaction_DetailUncheckedUpdateInput = {
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type Transaction_DetailCreateManyInput = {
    transaction_details_id?: number
    user_id: number
    ticket_types_id: number
    quantity_bought: number
    subtotal: number
  }

  export type Transaction_DetailUpdateManyMutationInput = {
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type Transaction_DetailUncheckedUpdateManyInput = {
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt?: Date | string
    isPaid: boolean
    transaction_details: Transaction_DetailCreateNestedOneWithoutTransactionInput
    user: UserCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    transaction_id?: number
    transaction_details_id: number
    user_id: number
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt?: Date | string
    isPaid: boolean
  }

  export type TransactionUpdateInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    transaction_details?: Transaction_DetailUpdateOneRequiredWithoutTransactionNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateManyInput = {
    transaction_id?: number
    transaction_details_id: number
    user_id: number
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt?: Date | string
    isPaid: boolean
  }

  export type TransactionUpdateManyMutationInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ReferralNullableScalarRelationFilter = {
    is?: ReferralWhereInput | null
    isNot?: ReferralWhereInput | null
  }

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type CouponListRelationFilter = {
    every?: CouponWhereInput
    some?: CouponWhereInput
    none?: CouponWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type Transaction_DetailListRelationFilter = {
    every?: Transaction_DetailWhereInput
    some?: Transaction_DetailWhereInput
    none?: Transaction_DetailWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Transaction_DetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pfp_url?: SortOrder
    created_at?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    referred_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
    referred_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pfp_url?: SortOrder
    created_at?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    referred_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pfp_url?: SortOrder
    created_at?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    referred_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
    referred_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type Social_mediaListRelationFilter = {
    every?: Social_mediaWhereInput
    some?: Social_mediaWhereInput
    none?: Social_mediaWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Social_mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    profile_id?: SortOrder
    phone?: SortOrder
    job_title?: SortOrder
    company?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    phone?: SortOrder
    job_title?: SortOrder
    company?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    profile_id?: SortOrder
    phone?: SortOrder
    job_title?: SortOrder
    company?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumAddressNameFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressName | EnumAddressNameFieldRefInput<$PrismaModel>
    in?: $Enums.AddressName[] | ListEnumAddressNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressName[] | ListEnumAddressNameFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressNameFilter<$PrismaModel> | $Enums.AddressName
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    address_id?: SortOrder
    profile_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipcode?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    address_id?: SortOrder
    profile_id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    address_id?: SortOrder
    profile_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipcode?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    address_id?: SortOrder
    profile_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipcode?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    address_id?: SortOrder
    profile_id?: SortOrder
  }

  export type EnumAddressNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressName | EnumAddressNameFieldRefInput<$PrismaModel>
    in?: $Enums.AddressName[] | ListEnumAddressNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressName[] | ListEnumAddressNameFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressNameWithAggregatesFilter<$PrismaModel> | $Enums.AddressName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressNameFilter<$PrismaModel>
    _max?: NestedEnumAddressNameFilter<$PrismaModel>
  }

  export type PointCountOrderByAggregateInput = {
    point_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    added_date?: SortOrder
    expired_date?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    point_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    point_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    added_date?: SortOrder
    expired_date?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    point_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    added_date?: SortOrder
    expired_date?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    point_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralCountOrderByAggregateInput = {
    referral_id?: SortOrder
    referral_code?: SortOrder
    user_id?: SortOrder
  }

  export type ReferralAvgOrderByAggregateInput = {
    referral_id?: SortOrder
    user_id?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    referral_id?: SortOrder
    referral_code?: SortOrder
    user_id?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    referral_id?: SortOrder
    referral_code?: SortOrder
    user_id?: SortOrder
  }

  export type ReferralSumOrderByAggregateInput = {
    referral_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type Social_mediaCountOrderByAggregateInput = {
    social_id?: SortOrder
    profile_id?: SortOrder
    platform?: SortOrder
    account_name?: SortOrder
    url?: SortOrder
  }

  export type Social_mediaAvgOrderByAggregateInput = {
    social_id?: SortOrder
    profile_id?: SortOrder
  }

  export type Social_mediaMaxOrderByAggregateInput = {
    social_id?: SortOrder
    profile_id?: SortOrder
    platform?: SortOrder
    account_name?: SortOrder
    url?: SortOrder
  }

  export type Social_mediaMinOrderByAggregateInput = {
    social_id?: SortOrder
    profile_id?: SortOrder
    platform?: SortOrder
    account_name?: SortOrder
    url?: SortOrder
  }

  export type Social_mediaSumOrderByAggregateInput = {
    social_id?: SortOrder
    profile_id?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type CouponCountOrderByAggregateInput = {
    coupon_id?: SortOrder
    coupon_name?: SortOrder
    user_id?: SortOrder
    coupon_code?: SortOrder
    discount?: SortOrder
    max_amount?: SortOrder
    start_date?: SortOrder
    expired_date?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    coupon_id?: SortOrder
    user_id?: SortOrder
    discount?: SortOrder
    max_amount?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    coupon_id?: SortOrder
    coupon_name?: SortOrder
    user_id?: SortOrder
    coupon_code?: SortOrder
    discount?: SortOrder
    max_amount?: SortOrder
    start_date?: SortOrder
    expired_date?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    coupon_id?: SortOrder
    coupon_name?: SortOrder
    user_id?: SortOrder
    coupon_code?: SortOrder
    discount?: SortOrder
    max_amount?: SortOrder
    start_date?: SortOrder
    expired_date?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    coupon_id?: SortOrder
    user_id?: SortOrder
    discount?: SortOrder
    max_amount?: SortOrder
  }

  export type Event_categoryListRelationFilter = {
    every?: Event_categoryWhereInput
    some?: Event_categoryWhereInput
    none?: Event_categoryWhereInput
  }

  export type Event_LocationScalarRelationFilter = {
    is?: Event_LocationWhereInput
    isNot?: Event_LocationWhereInput
  }

  export type Ticket_typesListRelationFilter = {
    every?: Ticket_typesWhereInput
    some?: Ticket_typesWhereInput
    none?: Ticket_typesWhereInput
  }

  export type Event_categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Ticket_typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    event_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgEvent?: SortOrder
    coupon_id?: SortOrder
    event_location_id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    event_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    event_location_id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    event_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgEvent?: SortOrder
    coupon_id?: SortOrder
    event_location_id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    event_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgEvent?: SortOrder
    coupon_id?: SortOrder
    event_location_id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    event_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    event_location_id?: SortOrder
  }

  export type Event_categoryCountOrderByAggregateInput = {
    event_category_id?: SortOrder
    category_name?: SortOrder
  }

  export type Event_categoryAvgOrderByAggregateInput = {
    event_category_id?: SortOrder
  }

  export type Event_categoryMaxOrderByAggregateInput = {
    event_category_id?: SortOrder
    category_name?: SortOrder
  }

  export type Event_categoryMinOrderByAggregateInput = {
    event_category_id?: SortOrder
    category_name?: SortOrder
  }

  export type Event_categorySumOrderByAggregateInput = {
    event_category_id?: SortOrder
  }

  export type Location_cityScalarRelationFilter = {
    is?: Location_cityWhereInput
    isNot?: Location_cityWhereInput
  }

  export type Location_countryScalarRelationFilter = {
    is?: Location_countryWhereInput
    isNot?: Location_countryWhereInput
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type Event_LocationCountOrderByAggregateInput = {
    event_location_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    location_city_id?: SortOrder
    location_country_id?: SortOrder
    zipcode?: SortOrder
  }

  export type Event_LocationAvgOrderByAggregateInput = {
    event_location_id?: SortOrder
    location_city_id?: SortOrder
    location_country_id?: SortOrder
  }

  export type Event_LocationMaxOrderByAggregateInput = {
    event_location_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    location_city_id?: SortOrder
    location_country_id?: SortOrder
    zipcode?: SortOrder
  }

  export type Event_LocationMinOrderByAggregateInput = {
    event_location_id?: SortOrder
    address_name?: SortOrder
    address?: SortOrder
    location_city_id?: SortOrder
    location_country_id?: SortOrder
    zipcode?: SortOrder
  }

  export type Event_LocationSumOrderByAggregateInput = {
    event_location_id?: SortOrder
    location_city_id?: SortOrder
    location_country_id?: SortOrder
  }

  export type Event_LocationListRelationFilter = {
    every?: Event_LocationWhereInput
    some?: Event_LocationWhereInput
    none?: Event_LocationWhereInput
  }

  export type Event_LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Location_cityCountOrderByAggregateInput = {
    location_city_id?: SortOrder
    city_name?: SortOrder
  }

  export type Location_cityAvgOrderByAggregateInput = {
    location_city_id?: SortOrder
  }

  export type Location_cityMaxOrderByAggregateInput = {
    location_city_id?: SortOrder
    city_name?: SortOrder
  }

  export type Location_cityMinOrderByAggregateInput = {
    location_city_id?: SortOrder
    city_name?: SortOrder
  }

  export type Location_citySumOrderByAggregateInput = {
    location_city_id?: SortOrder
  }

  export type Location_countryCountOrderByAggregateInput = {
    location_country_id?: SortOrder
    country_name?: SortOrder
  }

  export type Location_countryAvgOrderByAggregateInput = {
    location_country_id?: SortOrder
  }

  export type Location_countryMaxOrderByAggregateInput = {
    location_country_id?: SortOrder
    country_name?: SortOrder
  }

  export type Location_countryMinOrderByAggregateInput = {
    location_country_id?: SortOrder
    country_name?: SortOrder
  }

  export type Location_countrySumOrderByAggregateInput = {
    location_country_id?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type Transaction_DetailNullableScalarRelationFilter = {
    is?: Transaction_DetailWhereInput | null
    isNot?: Transaction_DetailWhereInput | null
  }

  export type Ticket_typesCountOrderByAggregateInput = {
    ticket_types_id?: SortOrder
    event_id?: SortOrder
    types?: SortOrder
    price?: SortOrder
    quantity_available?: SortOrder
  }

  export type Ticket_typesAvgOrderByAggregateInput = {
    ticket_types_id?: SortOrder
    event_id?: SortOrder
    price?: SortOrder
    quantity_available?: SortOrder
  }

  export type Ticket_typesMaxOrderByAggregateInput = {
    ticket_types_id?: SortOrder
    event_id?: SortOrder
    types?: SortOrder
    price?: SortOrder
    quantity_available?: SortOrder
  }

  export type Ticket_typesMinOrderByAggregateInput = {
    ticket_types_id?: SortOrder
    event_id?: SortOrder
    types?: SortOrder
    price?: SortOrder
    quantity_available?: SortOrder
  }

  export type Ticket_typesSumOrderByAggregateInput = {
    ticket_types_id?: SortOrder
    event_id?: SortOrder
    price?: SortOrder
    quantity_available?: SortOrder
  }

  export type Ticket_typesScalarRelationFilter = {
    is?: Ticket_typesWhereInput
    isNot?: Ticket_typesWhereInput
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type Transaction_DetailCountOrderByAggregateInput = {
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    ticket_types_id?: SortOrder
    quantity_bought?: SortOrder
    subtotal?: SortOrder
  }

  export type Transaction_DetailAvgOrderByAggregateInput = {
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    ticket_types_id?: SortOrder
    quantity_bought?: SortOrder
    subtotal?: SortOrder
  }

  export type Transaction_DetailMaxOrderByAggregateInput = {
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    ticket_types_id?: SortOrder
    quantity_bought?: SortOrder
    subtotal?: SortOrder
  }

  export type Transaction_DetailMinOrderByAggregateInput = {
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    ticket_types_id?: SortOrder
    quantity_bought?: SortOrder
    subtotal?: SortOrder
  }

  export type Transaction_DetailSumOrderByAggregateInput = {
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    ticket_types_id?: SortOrder
    quantity_bought?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type Transaction_DetailScalarRelationFilter = {
    is?: Transaction_DetailWhereInput
    isNot?: Transaction_DetailWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    total_amount?: SortOrder
    payment_method?: SortOrder
    createdAt?: SortOrder
    isPaid?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    transaction_id?: SortOrder
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    total_amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    total_amount?: SortOrder
    payment_method?: SortOrder
    createdAt?: SortOrder
    isPaid?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    total_amount?: SortOrder
    payment_method?: SortOrder
    createdAt?: SortOrder
    isPaid?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    transaction_id?: SortOrder
    transaction_details_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    total_amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ReferralCreateNestedOneWithoutUserInput = {
    create?: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutUserInput
    connect?: ReferralWhereUniqueInput
  }

  export type ReferralCreateNestedOneWithoutReferred_usersInput = {
    create?: XOR<ReferralCreateWithoutReferred_usersInput, ReferralUncheckedCreateWithoutReferred_usersInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutReferred_usersInput
    connect?: ReferralWhereUniqueInput
  }

  export type PointCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutUserInput = {
    create?: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput> | CouponCreateWithoutUserInput[] | CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUserInput | CouponCreateOrConnectWithoutUserInput[]
    createMany?: CouponCreateManyUserInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type Transaction_DetailCreateNestedManyWithoutUserInput = {
    create?: XOR<Transaction_DetailCreateWithoutUserInput, Transaction_DetailUncheckedCreateWithoutUserInput> | Transaction_DetailCreateWithoutUserInput[] | Transaction_DetailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutUserInput | Transaction_DetailCreateOrConnectWithoutUserInput[]
    createMany?: Transaction_DetailCreateManyUserInputEnvelope
    connect?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ReferralUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutUserInput
    connect?: ReferralWhereUniqueInput
  }

  export type PointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput> | CouponCreateWithoutUserInput[] | CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUserInput | CouponCreateOrConnectWithoutUserInput[]
    createMany?: CouponCreateManyUserInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type Transaction_DetailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Transaction_DetailCreateWithoutUserInput, Transaction_DetailUncheckedCreateWithoutUserInput> | Transaction_DetailCreateWithoutUserInput[] | Transaction_DetailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutUserInput | Transaction_DetailCreateOrConnectWithoutUserInput[]
    createMany?: Transaction_DetailCreateManyUserInputEnvelope
    connect?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReferralUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutUserInput
    upsert?: ReferralUpsertWithoutUserInput
    disconnect?: ReferralWhereInput | boolean
    delete?: ReferralWhereInput | boolean
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutUserInput, ReferralUpdateWithoutUserInput>, ReferralUncheckedUpdateWithoutUserInput>
  }

  export type ReferralUpdateOneWithoutReferred_usersNestedInput = {
    create?: XOR<ReferralCreateWithoutReferred_usersInput, ReferralUncheckedCreateWithoutReferred_usersInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutReferred_usersInput
    upsert?: ReferralUpsertWithoutReferred_usersInput
    disconnect?: ReferralWhereInput | boolean
    delete?: ReferralWhereInput | boolean
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutReferred_usersInput, ReferralUpdateWithoutReferred_usersInput>, ReferralUncheckedUpdateWithoutReferred_usersInput>
  }

  export type PointUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutUserNestedInput = {
    create?: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput> | CouponCreateWithoutUserInput[] | CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUserInput | CouponCreateOrConnectWithoutUserInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutUserInput | CouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CouponCreateManyUserInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutUserInput | CouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutUserInput | CouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type Transaction_DetailUpdateManyWithoutUserNestedInput = {
    create?: XOR<Transaction_DetailCreateWithoutUserInput, Transaction_DetailUncheckedCreateWithoutUserInput> | Transaction_DetailCreateWithoutUserInput[] | Transaction_DetailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutUserInput | Transaction_DetailCreateOrConnectWithoutUserInput[]
    upsert?: Transaction_DetailUpsertWithWhereUniqueWithoutUserInput | Transaction_DetailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Transaction_DetailCreateManyUserInputEnvelope
    set?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
    disconnect?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
    delete?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
    connect?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
    update?: Transaction_DetailUpdateWithWhereUniqueWithoutUserInput | Transaction_DetailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Transaction_DetailUpdateManyWithWhereWithoutUserInput | Transaction_DetailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Transaction_DetailScalarWhereInput | Transaction_DetailScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReferralUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutUserInput
    upsert?: ReferralUpsertWithoutUserInput
    disconnect?: ReferralWhereInput | boolean
    delete?: ReferralWhereInput | boolean
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutUserInput, ReferralUpdateWithoutUserInput>, ReferralUncheckedUpdateWithoutUserInput>
  }

  export type PointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput> | CouponCreateWithoutUserInput[] | CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUserInput | CouponCreateOrConnectWithoutUserInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutUserInput | CouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CouponCreateManyUserInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutUserInput | CouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutUserInput | CouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Transaction_DetailCreateWithoutUserInput, Transaction_DetailUncheckedCreateWithoutUserInput> | Transaction_DetailCreateWithoutUserInput[] | Transaction_DetailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutUserInput | Transaction_DetailCreateOrConnectWithoutUserInput[]
    upsert?: Transaction_DetailUpsertWithWhereUniqueWithoutUserInput | Transaction_DetailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Transaction_DetailCreateManyUserInputEnvelope
    set?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
    disconnect?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
    delete?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
    connect?: Transaction_DetailWhereUniqueInput | Transaction_DetailWhereUniqueInput[]
    update?: Transaction_DetailUpdateWithWhereUniqueWithoutUserInput | Transaction_DetailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Transaction_DetailUpdateManyWithWhereWithoutUserInput | Transaction_DetailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Transaction_DetailScalarWhereInput | Transaction_DetailScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AddressCreateNestedManyWithoutProfileInput = {
    create?: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput> | AddressCreateWithoutProfileInput[] | AddressUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput | AddressCreateOrConnectWithoutProfileInput[]
    createMany?: AddressCreateManyProfileInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type Social_mediaCreateNestedManyWithoutProfileInput = {
    create?: XOR<Social_mediaCreateWithoutProfileInput, Social_mediaUncheckedCreateWithoutProfileInput> | Social_mediaCreateWithoutProfileInput[] | Social_mediaUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: Social_mediaCreateOrConnectWithoutProfileInput | Social_mediaCreateOrConnectWithoutProfileInput[]
    createMany?: Social_mediaCreateManyProfileInputEnvelope
    connect?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput> | AddressCreateWithoutProfileInput[] | AddressUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput | AddressCreateOrConnectWithoutProfileInput[]
    createMany?: AddressCreateManyProfileInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type Social_mediaUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Social_mediaCreateWithoutProfileInput, Social_mediaUncheckedCreateWithoutProfileInput> | Social_mediaCreateWithoutProfileInput[] | Social_mediaUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: Social_mediaCreateOrConnectWithoutProfileInput | Social_mediaCreateOrConnectWithoutProfileInput[]
    createMany?: Social_mediaCreateManyProfileInputEnvelope
    connect?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
  }

  export type AddressUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput> | AddressCreateWithoutProfileInput[] | AddressUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput | AddressCreateOrConnectWithoutProfileInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutProfileInput | AddressUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AddressCreateManyProfileInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutProfileInput | AddressUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutProfileInput | AddressUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type Social_mediaUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Social_mediaCreateWithoutProfileInput, Social_mediaUncheckedCreateWithoutProfileInput> | Social_mediaCreateWithoutProfileInput[] | Social_mediaUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: Social_mediaCreateOrConnectWithoutProfileInput | Social_mediaCreateOrConnectWithoutProfileInput[]
    upsert?: Social_mediaUpsertWithWhereUniqueWithoutProfileInput | Social_mediaUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: Social_mediaCreateManyProfileInputEnvelope
    set?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
    disconnect?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
    delete?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
    connect?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
    update?: Social_mediaUpdateWithWhereUniqueWithoutProfileInput | Social_mediaUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: Social_mediaUpdateManyWithWhereWithoutProfileInput | Social_mediaUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: Social_mediaScalarWhereInput | Social_mediaScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type AddressUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput> | AddressCreateWithoutProfileInput[] | AddressUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput | AddressCreateOrConnectWithoutProfileInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutProfileInput | AddressUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AddressCreateManyProfileInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutProfileInput | AddressUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutProfileInput | AddressUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type Social_mediaUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Social_mediaCreateWithoutProfileInput, Social_mediaUncheckedCreateWithoutProfileInput> | Social_mediaCreateWithoutProfileInput[] | Social_mediaUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: Social_mediaCreateOrConnectWithoutProfileInput | Social_mediaCreateOrConnectWithoutProfileInput[]
    upsert?: Social_mediaUpsertWithWhereUniqueWithoutProfileInput | Social_mediaUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: Social_mediaCreateManyProfileInputEnvelope
    set?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
    disconnect?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
    delete?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
    connect?: Social_mediaWhereUniqueInput | Social_mediaWhereUniqueInput[]
    update?: Social_mediaUpdateWithWhereUniqueWithoutProfileInput | Social_mediaUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: Social_mediaUpdateManyWithWhereWithoutProfileInput | Social_mediaUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: Social_mediaScalarWhereInput | Social_mediaScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutAddressesInput = {
    create?: XOR<ProfileCreateWithoutAddressesInput, ProfileUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAddressesInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumAddressNameFieldUpdateOperationsInput = {
    set?: $Enums.AddressName
  }

  export type ProfileUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<ProfileCreateWithoutAddressesInput, ProfileUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAddressesInput
    upsert?: ProfileUpsertWithoutAddressesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAddressesInput, ProfileUpdateWithoutAddressesInput>, ProfileUncheckedUpdateWithoutAddressesInput>
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserCreateNestedOneWithoutReferralInput = {
    create?: XOR<UserCreateWithoutReferralInput, UserUncheckedCreateWithoutReferralInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReferredInput = {
    create?: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput> | UserCreateWithoutReferredInput[] | UserUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredInput | UserCreateOrConnectWithoutReferredInput[]
    createMany?: UserCreateManyReferredInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferredInput = {
    create?: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput> | UserCreateWithoutReferredInput[] | UserUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredInput | UserCreateOrConnectWithoutReferredInput[]
    createMany?: UserCreateManyReferredInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReferralNestedInput = {
    create?: XOR<UserCreateWithoutReferralInput, UserUncheckedCreateWithoutReferralInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralInput
    upsert?: UserUpsertWithoutReferralInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralInput, UserUpdateWithoutReferralInput>, UserUncheckedUpdateWithoutReferralInput>
  }

  export type UserUpdateManyWithoutReferredNestedInput = {
    create?: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput> | UserCreateWithoutReferredInput[] | UserUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredInput | UserCreateOrConnectWithoutReferredInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredInput | UserUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: UserCreateManyReferredInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredInput | UserUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredInput | UserUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferredNestedInput = {
    create?: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput> | UserCreateWithoutReferredInput[] | UserUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredInput | UserCreateOrConnectWithoutReferredInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredInput | UserUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: UserCreateManyReferredInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredInput | UserUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredInput | UserUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutSocial_mediasInput = {
    create?: XOR<ProfileCreateWithoutSocial_mediasInput, ProfileUncheckedCreateWithoutSocial_mediasInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSocial_mediasInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type ProfileUpdateOneRequiredWithoutSocial_mediasNestedInput = {
    create?: XOR<ProfileCreateWithoutSocial_mediasInput, ProfileUncheckedCreateWithoutSocial_mediasInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSocial_mediasInput
    upsert?: ProfileUpsertWithoutSocial_mediasInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSocial_mediasInput, ProfileUpdateWithoutSocial_mediasInput>, ProfileUncheckedUpdateWithoutSocial_mediasInput>
  }

  export type UserCreateNestedOneWithoutCouponsInput = {
    create?: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCouponsNestedInput = {
    create?: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsInput
    upsert?: UserUpsertWithoutCouponsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCouponsInput, UserUpdateWithoutCouponsInput>, UserUncheckedUpdateWithoutCouponsInput>
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type Event_categoryCreateNestedManyWithoutEventInput = {
    create?: XOR<Event_categoryCreateWithoutEventInput, Event_categoryUncheckedCreateWithoutEventInput> | Event_categoryCreateWithoutEventInput[] | Event_categoryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Event_categoryCreateOrConnectWithoutEventInput | Event_categoryCreateOrConnectWithoutEventInput[]
    connect?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
  }

  export type Event_LocationCreateNestedOneWithoutEventInput = {
    create?: XOR<Event_LocationCreateWithoutEventInput, Event_LocationUncheckedCreateWithoutEventInput>
    connectOrCreate?: Event_LocationCreateOrConnectWithoutEventInput
    connect?: Event_LocationWhereUniqueInput
  }

  export type Ticket_typesCreateNestedManyWithoutEventInput = {
    create?: XOR<Ticket_typesCreateWithoutEventInput, Ticket_typesUncheckedCreateWithoutEventInput> | Ticket_typesCreateWithoutEventInput[] | Ticket_typesUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Ticket_typesCreateOrConnectWithoutEventInput | Ticket_typesCreateOrConnectWithoutEventInput[]
    createMany?: Ticket_typesCreateManyEventInputEnvelope
    connect?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
  }

  export type Event_categoryUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<Event_categoryCreateWithoutEventInput, Event_categoryUncheckedCreateWithoutEventInput> | Event_categoryCreateWithoutEventInput[] | Event_categoryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Event_categoryCreateOrConnectWithoutEventInput | Event_categoryCreateOrConnectWithoutEventInput[]
    connect?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
  }

  export type Ticket_typesUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<Ticket_typesCreateWithoutEventInput, Ticket_typesUncheckedCreateWithoutEventInput> | Ticket_typesCreateWithoutEventInput[] | Ticket_typesUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Ticket_typesCreateOrConnectWithoutEventInput | Ticket_typesCreateOrConnectWithoutEventInput[]
    createMany?: Ticket_typesCreateManyEventInputEnvelope
    connect?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type Event_categoryUpdateManyWithoutEventNestedInput = {
    create?: XOR<Event_categoryCreateWithoutEventInput, Event_categoryUncheckedCreateWithoutEventInput> | Event_categoryCreateWithoutEventInput[] | Event_categoryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Event_categoryCreateOrConnectWithoutEventInput | Event_categoryCreateOrConnectWithoutEventInput[]
    upsert?: Event_categoryUpsertWithWhereUniqueWithoutEventInput | Event_categoryUpsertWithWhereUniqueWithoutEventInput[]
    set?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
    disconnect?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
    delete?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
    connect?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
    update?: Event_categoryUpdateWithWhereUniqueWithoutEventInput | Event_categoryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: Event_categoryUpdateManyWithWhereWithoutEventInput | Event_categoryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: Event_categoryScalarWhereInput | Event_categoryScalarWhereInput[]
  }

  export type Event_LocationUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<Event_LocationCreateWithoutEventInput, Event_LocationUncheckedCreateWithoutEventInput>
    connectOrCreate?: Event_LocationCreateOrConnectWithoutEventInput
    upsert?: Event_LocationUpsertWithoutEventInput
    connect?: Event_LocationWhereUniqueInput
    update?: XOR<XOR<Event_LocationUpdateToOneWithWhereWithoutEventInput, Event_LocationUpdateWithoutEventInput>, Event_LocationUncheckedUpdateWithoutEventInput>
  }

  export type Ticket_typesUpdateManyWithoutEventNestedInput = {
    create?: XOR<Ticket_typesCreateWithoutEventInput, Ticket_typesUncheckedCreateWithoutEventInput> | Ticket_typesCreateWithoutEventInput[] | Ticket_typesUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Ticket_typesCreateOrConnectWithoutEventInput | Ticket_typesCreateOrConnectWithoutEventInput[]
    upsert?: Ticket_typesUpsertWithWhereUniqueWithoutEventInput | Ticket_typesUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: Ticket_typesCreateManyEventInputEnvelope
    set?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
    disconnect?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
    delete?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
    connect?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
    update?: Ticket_typesUpdateWithWhereUniqueWithoutEventInput | Ticket_typesUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: Ticket_typesUpdateManyWithWhereWithoutEventInput | Ticket_typesUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: Ticket_typesScalarWhereInput | Ticket_typesScalarWhereInput[]
  }

  export type Event_categoryUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<Event_categoryCreateWithoutEventInput, Event_categoryUncheckedCreateWithoutEventInput> | Event_categoryCreateWithoutEventInput[] | Event_categoryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Event_categoryCreateOrConnectWithoutEventInput | Event_categoryCreateOrConnectWithoutEventInput[]
    upsert?: Event_categoryUpsertWithWhereUniqueWithoutEventInput | Event_categoryUpsertWithWhereUniqueWithoutEventInput[]
    set?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
    disconnect?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
    delete?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
    connect?: Event_categoryWhereUniqueInput | Event_categoryWhereUniqueInput[]
    update?: Event_categoryUpdateWithWhereUniqueWithoutEventInput | Event_categoryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: Event_categoryUpdateManyWithWhereWithoutEventInput | Event_categoryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: Event_categoryScalarWhereInput | Event_categoryScalarWhereInput[]
  }

  export type Ticket_typesUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<Ticket_typesCreateWithoutEventInput, Ticket_typesUncheckedCreateWithoutEventInput> | Ticket_typesCreateWithoutEventInput[] | Ticket_typesUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Ticket_typesCreateOrConnectWithoutEventInput | Ticket_typesCreateOrConnectWithoutEventInput[]
    upsert?: Ticket_typesUpsertWithWhereUniqueWithoutEventInput | Ticket_typesUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: Ticket_typesCreateManyEventInputEnvelope
    set?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
    disconnect?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
    delete?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
    connect?: Ticket_typesWhereUniqueInput | Ticket_typesWhereUniqueInput[]
    update?: Ticket_typesUpdateWithWhereUniqueWithoutEventInput | Ticket_typesUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: Ticket_typesUpdateManyWithWhereWithoutEventInput | Ticket_typesUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: Ticket_typesScalarWhereInput | Ticket_typesScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutEvent_categoryInput = {
    create?: XOR<EventCreateWithoutEvent_categoryInput, EventUncheckedCreateWithoutEvent_categoryInput> | EventCreateWithoutEvent_categoryInput[] | EventUncheckedCreateWithoutEvent_categoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEvent_categoryInput | EventCreateOrConnectWithoutEvent_categoryInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutEvent_categoryInput = {
    create?: XOR<EventCreateWithoutEvent_categoryInput, EventUncheckedCreateWithoutEvent_categoryInput> | EventCreateWithoutEvent_categoryInput[] | EventUncheckedCreateWithoutEvent_categoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEvent_categoryInput | EventCreateOrConnectWithoutEvent_categoryInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutEvent_categoryNestedInput = {
    create?: XOR<EventCreateWithoutEvent_categoryInput, EventUncheckedCreateWithoutEvent_categoryInput> | EventCreateWithoutEvent_categoryInput[] | EventUncheckedCreateWithoutEvent_categoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEvent_categoryInput | EventCreateOrConnectWithoutEvent_categoryInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEvent_categoryInput | EventUpsertWithWhereUniqueWithoutEvent_categoryInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEvent_categoryInput | EventUpdateWithWhereUniqueWithoutEvent_categoryInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEvent_categoryInput | EventUpdateManyWithWhereWithoutEvent_categoryInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutEvent_categoryNestedInput = {
    create?: XOR<EventCreateWithoutEvent_categoryInput, EventUncheckedCreateWithoutEvent_categoryInput> | EventCreateWithoutEvent_categoryInput[] | EventUncheckedCreateWithoutEvent_categoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEvent_categoryInput | EventCreateOrConnectWithoutEvent_categoryInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEvent_categoryInput | EventUpsertWithWhereUniqueWithoutEvent_categoryInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEvent_categoryInput | EventUpdateWithWhereUniqueWithoutEvent_categoryInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEvent_categoryInput | EventUpdateManyWithWhereWithoutEvent_categoryInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type Location_cityCreateNestedOneWithoutEvent_locationInput = {
    create?: XOR<Location_cityCreateWithoutEvent_locationInput, Location_cityUncheckedCreateWithoutEvent_locationInput>
    connectOrCreate?: Location_cityCreateOrConnectWithoutEvent_locationInput
    connect?: Location_cityWhereUniqueInput
  }

  export type Location_countryCreateNestedOneWithoutEvent_locationInput = {
    create?: XOR<Location_countryCreateWithoutEvent_locationInput, Location_countryUncheckedCreateWithoutEvent_locationInput>
    connectOrCreate?: Location_countryCreateOrConnectWithoutEvent_locationInput
    connect?: Location_countryWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutEvent_locationInput = {
    create?: XOR<EventCreateWithoutEvent_locationInput, EventUncheckedCreateWithoutEvent_locationInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_locationInput
    connect?: EventWhereUniqueInput
  }

  export type EventUncheckedCreateNestedOneWithoutEvent_locationInput = {
    create?: XOR<EventCreateWithoutEvent_locationInput, EventUncheckedCreateWithoutEvent_locationInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_locationInput
    connect?: EventWhereUniqueInput
  }

  export type Location_cityUpdateOneRequiredWithoutEvent_locationNestedInput = {
    create?: XOR<Location_cityCreateWithoutEvent_locationInput, Location_cityUncheckedCreateWithoutEvent_locationInput>
    connectOrCreate?: Location_cityCreateOrConnectWithoutEvent_locationInput
    upsert?: Location_cityUpsertWithoutEvent_locationInput
    connect?: Location_cityWhereUniqueInput
    update?: XOR<XOR<Location_cityUpdateToOneWithWhereWithoutEvent_locationInput, Location_cityUpdateWithoutEvent_locationInput>, Location_cityUncheckedUpdateWithoutEvent_locationInput>
  }

  export type Location_countryUpdateOneRequiredWithoutEvent_locationNestedInput = {
    create?: XOR<Location_countryCreateWithoutEvent_locationInput, Location_countryUncheckedCreateWithoutEvent_locationInput>
    connectOrCreate?: Location_countryCreateOrConnectWithoutEvent_locationInput
    upsert?: Location_countryUpsertWithoutEvent_locationInput
    connect?: Location_countryWhereUniqueInput
    update?: XOR<XOR<Location_countryUpdateToOneWithWhereWithoutEvent_locationInput, Location_countryUpdateWithoutEvent_locationInput>, Location_countryUncheckedUpdateWithoutEvent_locationInput>
  }

  export type EventUpdateOneWithoutEvent_locationNestedInput = {
    create?: XOR<EventCreateWithoutEvent_locationInput, EventUncheckedCreateWithoutEvent_locationInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_locationInput
    upsert?: EventUpsertWithoutEvent_locationInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEvent_locationInput, EventUpdateWithoutEvent_locationInput>, EventUncheckedUpdateWithoutEvent_locationInput>
  }

  export type EventUncheckedUpdateOneWithoutEvent_locationNestedInput = {
    create?: XOR<EventCreateWithoutEvent_locationInput, EventUncheckedCreateWithoutEvent_locationInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_locationInput
    upsert?: EventUpsertWithoutEvent_locationInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEvent_locationInput, EventUpdateWithoutEvent_locationInput>, EventUncheckedUpdateWithoutEvent_locationInput>
  }

  export type Event_LocationCreateNestedManyWithoutCityInput = {
    create?: XOR<Event_LocationCreateWithoutCityInput, Event_LocationUncheckedCreateWithoutCityInput> | Event_LocationCreateWithoutCityInput[] | Event_LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: Event_LocationCreateOrConnectWithoutCityInput | Event_LocationCreateOrConnectWithoutCityInput[]
    createMany?: Event_LocationCreateManyCityInputEnvelope
    connect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
  }

  export type Event_LocationUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<Event_LocationCreateWithoutCityInput, Event_LocationUncheckedCreateWithoutCityInput> | Event_LocationCreateWithoutCityInput[] | Event_LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: Event_LocationCreateOrConnectWithoutCityInput | Event_LocationCreateOrConnectWithoutCityInput[]
    createMany?: Event_LocationCreateManyCityInputEnvelope
    connect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
  }

  export type Event_LocationUpdateManyWithoutCityNestedInput = {
    create?: XOR<Event_LocationCreateWithoutCityInput, Event_LocationUncheckedCreateWithoutCityInput> | Event_LocationCreateWithoutCityInput[] | Event_LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: Event_LocationCreateOrConnectWithoutCityInput | Event_LocationCreateOrConnectWithoutCityInput[]
    upsert?: Event_LocationUpsertWithWhereUniqueWithoutCityInput | Event_LocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: Event_LocationCreateManyCityInputEnvelope
    set?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    disconnect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    delete?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    connect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    update?: Event_LocationUpdateWithWhereUniqueWithoutCityInput | Event_LocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: Event_LocationUpdateManyWithWhereWithoutCityInput | Event_LocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: Event_LocationScalarWhereInput | Event_LocationScalarWhereInput[]
  }

  export type Event_LocationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<Event_LocationCreateWithoutCityInput, Event_LocationUncheckedCreateWithoutCityInput> | Event_LocationCreateWithoutCityInput[] | Event_LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: Event_LocationCreateOrConnectWithoutCityInput | Event_LocationCreateOrConnectWithoutCityInput[]
    upsert?: Event_LocationUpsertWithWhereUniqueWithoutCityInput | Event_LocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: Event_LocationCreateManyCityInputEnvelope
    set?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    disconnect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    delete?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    connect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    update?: Event_LocationUpdateWithWhereUniqueWithoutCityInput | Event_LocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: Event_LocationUpdateManyWithWhereWithoutCityInput | Event_LocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: Event_LocationScalarWhereInput | Event_LocationScalarWhereInput[]
  }

  export type Event_LocationCreateNestedManyWithoutCountryInput = {
    create?: XOR<Event_LocationCreateWithoutCountryInput, Event_LocationUncheckedCreateWithoutCountryInput> | Event_LocationCreateWithoutCountryInput[] | Event_LocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: Event_LocationCreateOrConnectWithoutCountryInput | Event_LocationCreateOrConnectWithoutCountryInput[]
    createMany?: Event_LocationCreateManyCountryInputEnvelope
    connect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
  }

  export type Event_LocationUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Event_LocationCreateWithoutCountryInput, Event_LocationUncheckedCreateWithoutCountryInput> | Event_LocationCreateWithoutCountryInput[] | Event_LocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: Event_LocationCreateOrConnectWithoutCountryInput | Event_LocationCreateOrConnectWithoutCountryInput[]
    createMany?: Event_LocationCreateManyCountryInputEnvelope
    connect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
  }

  export type Event_LocationUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Event_LocationCreateWithoutCountryInput, Event_LocationUncheckedCreateWithoutCountryInput> | Event_LocationCreateWithoutCountryInput[] | Event_LocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: Event_LocationCreateOrConnectWithoutCountryInput | Event_LocationCreateOrConnectWithoutCountryInput[]
    upsert?: Event_LocationUpsertWithWhereUniqueWithoutCountryInput | Event_LocationUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: Event_LocationCreateManyCountryInputEnvelope
    set?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    disconnect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    delete?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    connect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    update?: Event_LocationUpdateWithWhereUniqueWithoutCountryInput | Event_LocationUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: Event_LocationUpdateManyWithWhereWithoutCountryInput | Event_LocationUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: Event_LocationScalarWhereInput | Event_LocationScalarWhereInput[]
  }

  export type Event_LocationUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Event_LocationCreateWithoutCountryInput, Event_LocationUncheckedCreateWithoutCountryInput> | Event_LocationCreateWithoutCountryInput[] | Event_LocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: Event_LocationCreateOrConnectWithoutCountryInput | Event_LocationCreateOrConnectWithoutCountryInput[]
    upsert?: Event_LocationUpsertWithWhereUniqueWithoutCountryInput | Event_LocationUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: Event_LocationCreateManyCountryInputEnvelope
    set?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    disconnect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    delete?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    connect?: Event_LocationWhereUniqueInput | Event_LocationWhereUniqueInput[]
    update?: Event_LocationUpdateWithWhereUniqueWithoutCountryInput | Event_LocationUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: Event_LocationUpdateManyWithWhereWithoutCountryInput | Event_LocationUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: Event_LocationScalarWhereInput | Event_LocationScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTicket_typesInput = {
    create?: XOR<EventCreateWithoutTicket_typesInput, EventUncheckedCreateWithoutTicket_typesInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicket_typesInput
    connect?: EventWhereUniqueInput
  }

  export type Transaction_DetailCreateNestedOneWithoutTicket_typesInput = {
    create?: XOR<Transaction_DetailCreateWithoutTicket_typesInput, Transaction_DetailUncheckedCreateWithoutTicket_typesInput>
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutTicket_typesInput
    connect?: Transaction_DetailWhereUniqueInput
  }

  export type Transaction_DetailUncheckedCreateNestedOneWithoutTicket_typesInput = {
    create?: XOR<Transaction_DetailCreateWithoutTicket_typesInput, Transaction_DetailUncheckedCreateWithoutTicket_typesInput>
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutTicket_typesInput
    connect?: Transaction_DetailWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutTicket_typesNestedInput = {
    create?: XOR<EventCreateWithoutTicket_typesInput, EventUncheckedCreateWithoutTicket_typesInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicket_typesInput
    upsert?: EventUpsertWithoutTicket_typesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicket_typesInput, EventUpdateWithoutTicket_typesInput>, EventUncheckedUpdateWithoutTicket_typesInput>
  }

  export type Transaction_DetailUpdateOneWithoutTicket_typesNestedInput = {
    create?: XOR<Transaction_DetailCreateWithoutTicket_typesInput, Transaction_DetailUncheckedCreateWithoutTicket_typesInput>
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutTicket_typesInput
    upsert?: Transaction_DetailUpsertWithoutTicket_typesInput
    disconnect?: Transaction_DetailWhereInput | boolean
    delete?: Transaction_DetailWhereInput | boolean
    connect?: Transaction_DetailWhereUniqueInput
    update?: XOR<XOR<Transaction_DetailUpdateToOneWithWhereWithoutTicket_typesInput, Transaction_DetailUpdateWithoutTicket_typesInput>, Transaction_DetailUncheckedUpdateWithoutTicket_typesInput>
  }

  export type Transaction_DetailUncheckedUpdateOneWithoutTicket_typesNestedInput = {
    create?: XOR<Transaction_DetailCreateWithoutTicket_typesInput, Transaction_DetailUncheckedCreateWithoutTicket_typesInput>
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutTicket_typesInput
    upsert?: Transaction_DetailUpsertWithoutTicket_typesInput
    disconnect?: Transaction_DetailWhereInput | boolean
    delete?: Transaction_DetailWhereInput | boolean
    connect?: Transaction_DetailWhereUniqueInput
    update?: XOR<XOR<Transaction_DetailUpdateToOneWithWhereWithoutTicket_typesInput, Transaction_DetailUpdateWithoutTicket_typesInput>, Transaction_DetailUncheckedUpdateWithoutTicket_typesInput>
  }

  export type UserCreateNestedOneWithoutTransaction_detailsInput = {
    create?: XOR<UserCreateWithoutTransaction_detailsInput, UserUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransaction_detailsInput
    connect?: UserWhereUniqueInput
  }

  export type Ticket_typesCreateNestedOneWithoutTransaction_detailsInput = {
    create?: XOR<Ticket_typesCreateWithoutTransaction_detailsInput, Ticket_typesUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: Ticket_typesCreateOrConnectWithoutTransaction_detailsInput
    connect?: Ticket_typesWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutTransaction_detailsInput = {
    create?: XOR<TransactionCreateWithoutTransaction_detailsInput, TransactionUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTransaction_detailsInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedOneWithoutTransaction_detailsInput = {
    create?: XOR<TransactionCreateWithoutTransaction_detailsInput, TransactionUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTransaction_detailsInput
    connect?: TransactionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransaction_detailsNestedInput = {
    create?: XOR<UserCreateWithoutTransaction_detailsInput, UserUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransaction_detailsInput
    upsert?: UserUpsertWithoutTransaction_detailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransaction_detailsInput, UserUpdateWithoutTransaction_detailsInput>, UserUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type Ticket_typesUpdateOneRequiredWithoutTransaction_detailsNestedInput = {
    create?: XOR<Ticket_typesCreateWithoutTransaction_detailsInput, Ticket_typesUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: Ticket_typesCreateOrConnectWithoutTransaction_detailsInput
    upsert?: Ticket_typesUpsertWithoutTransaction_detailsInput
    connect?: Ticket_typesWhereUniqueInput
    update?: XOR<XOR<Ticket_typesUpdateToOneWithWhereWithoutTransaction_detailsInput, Ticket_typesUpdateWithoutTransaction_detailsInput>, Ticket_typesUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type TransactionUpdateOneWithoutTransaction_detailsNestedInput = {
    create?: XOR<TransactionCreateWithoutTransaction_detailsInput, TransactionUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTransaction_detailsInput
    upsert?: TransactionUpsertWithoutTransaction_detailsInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutTransaction_detailsInput, TransactionUpdateWithoutTransaction_detailsInput>, TransactionUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type TransactionUncheckedUpdateOneWithoutTransaction_detailsNestedInput = {
    create?: XOR<TransactionCreateWithoutTransaction_detailsInput, TransactionUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTransaction_detailsInput
    upsert?: TransactionUpsertWithoutTransaction_detailsInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutTransaction_detailsInput, TransactionUpdateWithoutTransaction_detailsInput>, TransactionUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type Transaction_DetailCreateNestedOneWithoutTransactionInput = {
    create?: XOR<Transaction_DetailCreateWithoutTransactionInput, Transaction_DetailUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutTransactionInput
    connect?: Transaction_DetailWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type Transaction_DetailUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<Transaction_DetailCreateWithoutTransactionInput, Transaction_DetailUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: Transaction_DetailCreateOrConnectWithoutTransactionInput
    upsert?: Transaction_DetailUpsertWithoutTransactionInput
    connect?: Transaction_DetailWhereUniqueInput
    update?: XOR<XOR<Transaction_DetailUpdateToOneWithWhereWithoutTransactionInput, Transaction_DetailUpdateWithoutTransactionInput>, Transaction_DetailUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    upsert?: UserUpsertWithoutTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionInput, UserUpdateWithoutTransactionInput>, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAddressNameFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressName | EnumAddressNameFieldRefInput<$PrismaModel>
    in?: $Enums.AddressName[] | ListEnumAddressNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressName[] | ListEnumAddressNameFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressNameFilter<$PrismaModel> | $Enums.AddressName
  }

  export type NestedEnumAddressNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressName | EnumAddressNameFieldRefInput<$PrismaModel>
    in?: $Enums.AddressName[] | ListEnumAddressNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressName[] | ListEnumAddressNameFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressNameWithAggregatesFilter<$PrismaModel> | $Enums.AddressName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressNameFilter<$PrismaModel>
    _max?: NestedEnumAddressNameFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    phone?: string | null
    job_title?: string | null
    company?: string | null
    addresses?: AddressCreateNestedManyWithoutProfileInput
    social_medias?: Social_mediaCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    profile_id?: number
    phone?: string | null
    job_title?: string | null
    company?: string | null
    addresses?: AddressUncheckedCreateNestedManyWithoutProfileInput
    social_medias?: Social_mediaUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ReferralCreateWithoutUserInput = {
    referral_code: string
    referred_users?: UserCreateNestedManyWithoutReferredInput
  }

  export type ReferralUncheckedCreateWithoutUserInput = {
    referral_id?: number
    referral_code: string
    referred_users?: UserUncheckedCreateNestedManyWithoutReferredInput
  }

  export type ReferralCreateOrConnectWithoutUserInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput>
  }

  export type ReferralCreateWithoutReferred_usersInput = {
    referral_code: string
    user: UserCreateNestedOneWithoutReferralInput
  }

  export type ReferralUncheckedCreateWithoutReferred_usersInput = {
    referral_id?: number
    referral_code: string
    user_id: number
  }

  export type ReferralCreateOrConnectWithoutReferred_usersInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutReferred_usersInput, ReferralUncheckedCreateWithoutReferred_usersInput>
  }

  export type PointCreateWithoutUserInput = {
    amount: number
    added_date?: Date | string
    expired_date: Date | string
  }

  export type PointUncheckedCreateWithoutUserInput = {
    point_id?: number
    amount: number
    added_date?: Date | string
    expired_date: Date | string
  }

  export type PointCreateOrConnectWithoutUserInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointCreateManyUserInputEnvelope = {
    data: PointCreateManyUserInput | PointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CouponCreateWithoutUserInput = {
    coupon_name: string
    coupon_code: string
    discount: number
    max_amount?: number | null
    start_date?: Date | string
    expired_date: Date | string
  }

  export type CouponUncheckedCreateWithoutUserInput = {
    coupon_id?: number
    coupon_name: string
    coupon_code: string
    discount: number
    max_amount?: number | null
    start_date?: Date | string
    expired_date: Date | string
  }

  export type CouponCreateOrConnectWithoutUserInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput>
  }

  export type CouponCreateManyUserInputEnvelope = {
    data: CouponCreateManyUserInput | CouponCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutUserInput = {
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    event_category?: Event_categoryCreateNestedManyWithoutEventInput
    event_location: Event_LocationCreateNestedOneWithoutEventInput
    ticket_types?: Ticket_typesCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    event_id?: number
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    event_location_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    event_category?: Event_categoryUncheckedCreateNestedManyWithoutEventInput
    ticket_types?: Ticket_typesUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: EventCreateManyUserInput | EventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Transaction_DetailCreateWithoutUserInput = {
    quantity_bought: number
    subtotal: number
    ticket_types: Ticket_typesCreateNestedOneWithoutTransaction_detailsInput
    transaction?: TransactionCreateNestedOneWithoutTransaction_detailsInput
  }

  export type Transaction_DetailUncheckedCreateWithoutUserInput = {
    transaction_details_id?: number
    ticket_types_id: number
    quantity_bought: number
    subtotal: number
    transaction?: TransactionUncheckedCreateNestedOneWithoutTransaction_detailsInput
  }

  export type Transaction_DetailCreateOrConnectWithoutUserInput = {
    where: Transaction_DetailWhereUniqueInput
    create: XOR<Transaction_DetailCreateWithoutUserInput, Transaction_DetailUncheckedCreateWithoutUserInput>
  }

  export type Transaction_DetailCreateManyUserInputEnvelope = {
    data: Transaction_DetailCreateManyUserInput | Transaction_DetailCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt?: Date | string
    isPaid: boolean
    transaction_details: Transaction_DetailCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    transaction_id?: number
    transaction_details_id: number
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt?: Date | string
    isPaid: boolean
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: AddressUpdateManyWithoutProfileNestedInput
    social_medias?: Social_mediaUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: AddressUncheckedUpdateManyWithoutProfileNestedInput
    social_medias?: Social_mediaUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ReferralUpsertWithoutUserInput = {
    update: XOR<ReferralUpdateWithoutUserInput, ReferralUncheckedUpdateWithoutUserInput>
    create: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutUserInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutUserInput, ReferralUncheckedUpdateWithoutUserInput>
  }

  export type ReferralUpdateWithoutUserInput = {
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_users?: UserUpdateManyWithoutReferredNestedInput
  }

  export type ReferralUncheckedUpdateWithoutUserInput = {
    referral_id?: IntFieldUpdateOperationsInput | number
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_users?: UserUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type ReferralUpsertWithoutReferred_usersInput = {
    update: XOR<ReferralUpdateWithoutReferred_usersInput, ReferralUncheckedUpdateWithoutReferred_usersInput>
    create: XOR<ReferralCreateWithoutReferred_usersInput, ReferralUncheckedCreateWithoutReferred_usersInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutReferred_usersInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutReferred_usersInput, ReferralUncheckedUpdateWithoutReferred_usersInput>
  }

  export type ReferralUpdateWithoutReferred_usersInput = {
    referral_code?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateWithoutReferred_usersInput = {
    referral_id?: IntFieldUpdateOperationsInput | number
    referral_code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PointUpsertWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointUpdateWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
  }

  export type PointUpdateManyWithWhereWithoutUserInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutUserInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    point_id?: IntFilter<"Point"> | number
    user_id?: IntFilter<"Point"> | number
    amount?: IntFilter<"Point"> | number
    added_date?: DateTimeFilter<"Point"> | Date | string
    expired_date?: DateTimeFilter<"Point"> | Date | string
  }

  export type CouponUpsertWithWhereUniqueWithoutUserInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutUserInput, CouponUncheckedUpdateWithoutUserInput>
    create: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutUserInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutUserInput, CouponUncheckedUpdateWithoutUserInput>
  }

  export type CouponUpdateManyWithWhereWithoutUserInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutUserInput>
  }

  export type CouponScalarWhereInput = {
    AND?: CouponScalarWhereInput | CouponScalarWhereInput[]
    OR?: CouponScalarWhereInput[]
    NOT?: CouponScalarWhereInput | CouponScalarWhereInput[]
    coupon_id?: IntFilter<"Coupon"> | number
    coupon_name?: StringFilter<"Coupon"> | string
    user_id?: IntFilter<"Coupon"> | number
    coupon_code?: StringFilter<"Coupon"> | string
    discount?: IntFilter<"Coupon"> | number
    max_amount?: IntNullableFilter<"Coupon"> | number | null
    start_date?: DateTimeFilter<"Coupon"> | Date | string
    expired_date?: DateTimeFilter<"Coupon"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    event_id?: IntFilter<"Event"> | number
    user_id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    imgEvent?: StringFilter<"Event"> | string
    coupon_id?: IntFilter<"Event"> | number
    event_location_id?: IntFilter<"Event"> | number
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: StringFilter<"Event"> | string
    endTime?: StringFilter<"Event"> | string
    timezone?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type Transaction_DetailUpsertWithWhereUniqueWithoutUserInput = {
    where: Transaction_DetailWhereUniqueInput
    update: XOR<Transaction_DetailUpdateWithoutUserInput, Transaction_DetailUncheckedUpdateWithoutUserInput>
    create: XOR<Transaction_DetailCreateWithoutUserInput, Transaction_DetailUncheckedCreateWithoutUserInput>
  }

  export type Transaction_DetailUpdateWithWhereUniqueWithoutUserInput = {
    where: Transaction_DetailWhereUniqueInput
    data: XOR<Transaction_DetailUpdateWithoutUserInput, Transaction_DetailUncheckedUpdateWithoutUserInput>
  }

  export type Transaction_DetailUpdateManyWithWhereWithoutUserInput = {
    where: Transaction_DetailScalarWhereInput
    data: XOR<Transaction_DetailUpdateManyMutationInput, Transaction_DetailUncheckedUpdateManyWithoutUserInput>
  }

  export type Transaction_DetailScalarWhereInput = {
    AND?: Transaction_DetailScalarWhereInput | Transaction_DetailScalarWhereInput[]
    OR?: Transaction_DetailScalarWhereInput[]
    NOT?: Transaction_DetailScalarWhereInput | Transaction_DetailScalarWhereInput[]
    transaction_details_id?: IntFilter<"Transaction_Detail"> | number
    user_id?: IntFilter<"Transaction_Detail"> | number
    ticket_types_id?: IntFilter<"Transaction_Detail"> | number
    quantity_bought?: IntFilter<"Transaction_Detail"> | number
    subtotal?: IntFilter<"Transaction_Detail"> | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    transaction_id?: IntFilter<"Transaction"> | number
    transaction_details_id?: IntFilter<"Transaction"> | number
    user_id?: IntFilter<"Transaction"> | number
    coupon_id?: IntFilter<"Transaction"> | number
    total_amount?: IntFilter<"Transaction"> | number
    payment_method?: EnumPaymentMethodFilter<"Transaction"> | $Enums.PaymentMethod
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    isPaid?: BoolFilter<"Transaction"> | boolean
  }

  export type AddressCreateWithoutProfileInput = {
    address_name: $Enums.AddressName
    address: string
    city: string
    country: string
    zipcode?: string | null
  }

  export type AddressUncheckedCreateWithoutProfileInput = {
    address_id?: number
    address_name: $Enums.AddressName
    address: string
    city: string
    country: string
    zipcode?: string | null
  }

  export type AddressCreateOrConnectWithoutProfileInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput>
  }

  export type AddressCreateManyProfileInputEnvelope = {
    data: AddressCreateManyProfileInput | AddressCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type Social_mediaCreateWithoutProfileInput = {
    platform: $Enums.Platform
    account_name: string
    url: string
  }

  export type Social_mediaUncheckedCreateWithoutProfileInput = {
    social_id?: number
    platform: $Enums.Platform
    account_name: string
    url: string
  }

  export type Social_mediaCreateOrConnectWithoutProfileInput = {
    where: Social_mediaWhereUniqueInput
    create: XOR<Social_mediaCreateWithoutProfileInput, Social_mediaUncheckedCreateWithoutProfileInput>
  }

  export type Social_mediaCreateManyProfileInputEnvelope = {
    data: Social_mediaCreateManyProfileInput | Social_mediaCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProfileInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referral?: ReferralCreateNestedOneWithoutUserInput
    referred?: ReferralCreateNestedOneWithoutReferred_usersInput
    points?: PointCreateNestedManyWithoutUserInput
    coupons?: CouponCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailCreateNestedManyWithoutUserInput
    transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
    referral?: ReferralUncheckedCreateNestedOneWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type AddressUpsertWithWhereUniqueWithoutProfileInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutProfileInput, AddressUncheckedUpdateWithoutProfileInput>
    create: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutProfileInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutProfileInput, AddressUncheckedUpdateWithoutProfileInput>
  }

  export type AddressUpdateManyWithWhereWithoutProfileInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutProfileInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    address_id?: IntFilter<"Address"> | number
    profile_id?: IntFilter<"Address"> | number
    address_name?: EnumAddressNameFilter<"Address"> | $Enums.AddressName
    address?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    zipcode?: StringNullableFilter<"Address"> | string | null
  }

  export type Social_mediaUpsertWithWhereUniqueWithoutProfileInput = {
    where: Social_mediaWhereUniqueInput
    update: XOR<Social_mediaUpdateWithoutProfileInput, Social_mediaUncheckedUpdateWithoutProfileInput>
    create: XOR<Social_mediaCreateWithoutProfileInput, Social_mediaUncheckedCreateWithoutProfileInput>
  }

  export type Social_mediaUpdateWithWhereUniqueWithoutProfileInput = {
    where: Social_mediaWhereUniqueInput
    data: XOR<Social_mediaUpdateWithoutProfileInput, Social_mediaUncheckedUpdateWithoutProfileInput>
  }

  export type Social_mediaUpdateManyWithWhereWithoutProfileInput = {
    where: Social_mediaScalarWhereInput
    data: XOR<Social_mediaUpdateManyMutationInput, Social_mediaUncheckedUpdateManyWithoutProfileInput>
  }

  export type Social_mediaScalarWhereInput = {
    AND?: Social_mediaScalarWhereInput | Social_mediaScalarWhereInput[]
    OR?: Social_mediaScalarWhereInput[]
    NOT?: Social_mediaScalarWhereInput | Social_mediaScalarWhereInput[]
    social_id?: IntFilter<"Social_media"> | number
    profile_id?: IntFilter<"Social_media"> | number
    platform?: EnumPlatformFilter<"Social_media"> | $Enums.Platform
    account_name?: StringFilter<"Social_media"> | string
    url?: StringFilter<"Social_media"> | string
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referral?: ReferralUpdateOneWithoutUserNestedInput
    referred?: ReferralUpdateOneWithoutReferred_usersNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    coupons?: CouponUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUpdateManyWithoutUserNestedInput
    transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
    referral?: ReferralUncheckedUpdateOneWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutAddressesInput = {
    phone?: string | null
    job_title?: string | null
    company?: string | null
    social_medias?: Social_mediaCreateNestedManyWithoutProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutAddressesInput = {
    profile_id?: number
    phone?: string | null
    job_title?: string | null
    company?: string | null
    user_id: number
    social_medias?: Social_mediaUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutAddressesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAddressesInput, ProfileUncheckedCreateWithoutAddressesInput>
  }

  export type ProfileUpsertWithoutAddressesInput = {
    update: XOR<ProfileUpdateWithoutAddressesInput, ProfileUncheckedUpdateWithoutAddressesInput>
    create: XOR<ProfileCreateWithoutAddressesInput, ProfileUncheckedCreateWithoutAddressesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAddressesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAddressesInput, ProfileUncheckedUpdateWithoutAddressesInput>
  }

  export type ProfileUpdateWithoutAddressesInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    social_medias?: Social_mediaUpdateManyWithoutProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAddressesInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    social_medias?: Social_mediaUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserCreateWithoutPointsInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    referral?: ReferralCreateNestedOneWithoutUserInput
    referred?: ReferralCreateNestedOneWithoutReferred_usersInput
    coupons?: CouponCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailCreateNestedManyWithoutUserInput
    transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    referral?: ReferralUncheckedCreateNestedOneWithoutUserInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    referral?: ReferralUpdateOneWithoutUserNestedInput
    referred?: ReferralUpdateOneWithoutReferred_usersNestedInput
    coupons?: CouponUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUpdateManyWithoutUserNestedInput
    transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    referral?: ReferralUncheckedUpdateOneWithoutUserNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReferralInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    referred?: ReferralCreateNestedOneWithoutReferred_usersInput
    points?: PointCreateNestedManyWithoutUserInput
    coupons?: CouponCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailCreateNestedManyWithoutUserInput
    transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralInput, UserUncheckedCreateWithoutReferralInput>
  }

  export type UserCreateWithoutReferredInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    referral?: ReferralCreateNestedOneWithoutUserInput
    points?: PointCreateNestedManyWithoutUserInput
    coupons?: CouponCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailCreateNestedManyWithoutUserInput
    transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferredInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    referral?: ReferralUncheckedCreateNestedOneWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput>
  }

  export type UserCreateManyReferredInputEnvelope = {
    data: UserCreateManyReferredInput | UserCreateManyReferredInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReferralInput = {
    update: XOR<UserUpdateWithoutReferralInput, UserUncheckedUpdateWithoutReferralInput>
    create: XOR<UserCreateWithoutReferralInput, UserUncheckedCreateWithoutReferralInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralInput, UserUncheckedUpdateWithoutReferralInput>
  }

  export type UserUpdateWithoutReferralInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    referred?: ReferralUpdateOneWithoutReferred_usersNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    coupons?: CouponUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUpdateManyWithoutUserNestedInput
    transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReferredInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferredInput, UserUncheckedUpdateWithoutReferredInput>
    create: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferredInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferredInput, UserUncheckedUpdateWithoutReferredInput>
  }

  export type UserUpdateManyWithWhereWithoutReferredInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferredInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    user_id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pfp_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    referred_id?: IntNullableFilter<"User"> | number | null
  }

  export type ProfileCreateWithoutSocial_mediasInput = {
    phone?: string | null
    job_title?: string | null
    company?: string | null
    addresses?: AddressCreateNestedManyWithoutProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutSocial_mediasInput = {
    profile_id?: number
    phone?: string | null
    job_title?: string | null
    company?: string | null
    user_id: number
    addresses?: AddressUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutSocial_mediasInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSocial_mediasInput, ProfileUncheckedCreateWithoutSocial_mediasInput>
  }

  export type ProfileUpsertWithoutSocial_mediasInput = {
    update: XOR<ProfileUpdateWithoutSocial_mediasInput, ProfileUncheckedUpdateWithoutSocial_mediasInput>
    create: XOR<ProfileCreateWithoutSocial_mediasInput, ProfileUncheckedCreateWithoutSocial_mediasInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSocial_mediasInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSocial_mediasInput, ProfileUncheckedUpdateWithoutSocial_mediasInput>
  }

  export type ProfileUpdateWithoutSocial_mediasInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: AddressUpdateManyWithoutProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSocial_mediasInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    addresses?: AddressUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserCreateWithoutCouponsInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    referral?: ReferralCreateNestedOneWithoutUserInput
    referred?: ReferralCreateNestedOneWithoutReferred_usersInput
    points?: PointCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailCreateNestedManyWithoutUserInput
    transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCouponsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    referral?: ReferralUncheckedCreateNestedOneWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCouponsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
  }

  export type UserUpsertWithoutCouponsInput = {
    update: XOR<UserUpdateWithoutCouponsInput, UserUncheckedUpdateWithoutCouponsInput>
    create: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCouponsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCouponsInput, UserUncheckedUpdateWithoutCouponsInput>
  }

  export type UserUpdateWithoutCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    referral?: ReferralUpdateOneWithoutUserNestedInput
    referred?: ReferralUpdateOneWithoutReferred_usersNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUpdateManyWithoutUserNestedInput
    transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCouponsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    referral?: ReferralUncheckedUpdateOneWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEventsInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    referral?: ReferralCreateNestedOneWithoutUserInput
    referred?: ReferralCreateNestedOneWithoutReferred_usersInput
    points?: PointCreateNestedManyWithoutUserInput
    coupons?: CouponCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailCreateNestedManyWithoutUserInput
    transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    referral?: ReferralUncheckedCreateNestedOneWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type Event_categoryCreateWithoutEventInput = {
    category_name: string
  }

  export type Event_categoryUncheckedCreateWithoutEventInput = {
    event_category_id?: number
    category_name: string
  }

  export type Event_categoryCreateOrConnectWithoutEventInput = {
    where: Event_categoryWhereUniqueInput
    create: XOR<Event_categoryCreateWithoutEventInput, Event_categoryUncheckedCreateWithoutEventInput>
  }

  export type Event_LocationCreateWithoutEventInput = {
    address_name: string
    address: string
    zipcode?: string | null
    city: Location_cityCreateNestedOneWithoutEvent_locationInput
    country: Location_countryCreateNestedOneWithoutEvent_locationInput
  }

  export type Event_LocationUncheckedCreateWithoutEventInput = {
    event_location_id?: number
    address_name: string
    address: string
    location_city_id: number
    location_country_id: number
    zipcode?: string | null
  }

  export type Event_LocationCreateOrConnectWithoutEventInput = {
    where: Event_LocationWhereUniqueInput
    create: XOR<Event_LocationCreateWithoutEventInput, Event_LocationUncheckedCreateWithoutEventInput>
  }

  export type Ticket_typesCreateWithoutEventInput = {
    types: string
    price: number
    quantity_available: number
    transaction_details?: Transaction_DetailCreateNestedOneWithoutTicket_typesInput
  }

  export type Ticket_typesUncheckedCreateWithoutEventInput = {
    ticket_types_id?: number
    types: string
    price: number
    quantity_available: number
    transaction_details?: Transaction_DetailUncheckedCreateNestedOneWithoutTicket_typesInput
  }

  export type Ticket_typesCreateOrConnectWithoutEventInput = {
    where: Ticket_typesWhereUniqueInput
    create: XOR<Ticket_typesCreateWithoutEventInput, Ticket_typesUncheckedCreateWithoutEventInput>
  }

  export type Ticket_typesCreateManyEventInputEnvelope = {
    data: Ticket_typesCreateManyEventInput | Ticket_typesCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    referral?: ReferralUpdateOneWithoutUserNestedInput
    referred?: ReferralUpdateOneWithoutReferred_usersNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    coupons?: CouponUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUpdateManyWithoutUserNestedInput
    transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    referral?: ReferralUncheckedUpdateOneWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Event_categoryUpsertWithWhereUniqueWithoutEventInput = {
    where: Event_categoryWhereUniqueInput
    update: XOR<Event_categoryUpdateWithoutEventInput, Event_categoryUncheckedUpdateWithoutEventInput>
    create: XOR<Event_categoryCreateWithoutEventInput, Event_categoryUncheckedCreateWithoutEventInput>
  }

  export type Event_categoryUpdateWithWhereUniqueWithoutEventInput = {
    where: Event_categoryWhereUniqueInput
    data: XOR<Event_categoryUpdateWithoutEventInput, Event_categoryUncheckedUpdateWithoutEventInput>
  }

  export type Event_categoryUpdateManyWithWhereWithoutEventInput = {
    where: Event_categoryScalarWhereInput
    data: XOR<Event_categoryUpdateManyMutationInput, Event_categoryUncheckedUpdateManyWithoutEventInput>
  }

  export type Event_categoryScalarWhereInput = {
    AND?: Event_categoryScalarWhereInput | Event_categoryScalarWhereInput[]
    OR?: Event_categoryScalarWhereInput[]
    NOT?: Event_categoryScalarWhereInput | Event_categoryScalarWhereInput[]
    event_category_id?: IntFilter<"Event_category"> | number
    category_name?: StringFilter<"Event_category"> | string
  }

  export type Event_LocationUpsertWithoutEventInput = {
    update: XOR<Event_LocationUpdateWithoutEventInput, Event_LocationUncheckedUpdateWithoutEventInput>
    create: XOR<Event_LocationCreateWithoutEventInput, Event_LocationUncheckedCreateWithoutEventInput>
    where?: Event_LocationWhereInput
  }

  export type Event_LocationUpdateToOneWithWhereWithoutEventInput = {
    where?: Event_LocationWhereInput
    data: XOR<Event_LocationUpdateWithoutEventInput, Event_LocationUncheckedUpdateWithoutEventInput>
  }

  export type Event_LocationUpdateWithoutEventInput = {
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: Location_cityUpdateOneRequiredWithoutEvent_locationNestedInput
    country?: Location_countryUpdateOneRequiredWithoutEvent_locationNestedInput
  }

  export type Event_LocationUncheckedUpdateWithoutEventInput = {
    event_location_id?: IntFieldUpdateOperationsInput | number
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location_city_id?: IntFieldUpdateOperationsInput | number
    location_country_id?: IntFieldUpdateOperationsInput | number
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ticket_typesUpsertWithWhereUniqueWithoutEventInput = {
    where: Ticket_typesWhereUniqueInput
    update: XOR<Ticket_typesUpdateWithoutEventInput, Ticket_typesUncheckedUpdateWithoutEventInput>
    create: XOR<Ticket_typesCreateWithoutEventInput, Ticket_typesUncheckedCreateWithoutEventInput>
  }

  export type Ticket_typesUpdateWithWhereUniqueWithoutEventInput = {
    where: Ticket_typesWhereUniqueInput
    data: XOR<Ticket_typesUpdateWithoutEventInput, Ticket_typesUncheckedUpdateWithoutEventInput>
  }

  export type Ticket_typesUpdateManyWithWhereWithoutEventInput = {
    where: Ticket_typesScalarWhereInput
    data: XOR<Ticket_typesUpdateManyMutationInput, Ticket_typesUncheckedUpdateManyWithoutEventInput>
  }

  export type Ticket_typesScalarWhereInput = {
    AND?: Ticket_typesScalarWhereInput | Ticket_typesScalarWhereInput[]
    OR?: Ticket_typesScalarWhereInput[]
    NOT?: Ticket_typesScalarWhereInput | Ticket_typesScalarWhereInput[]
    ticket_types_id?: IntFilter<"Ticket_types"> | number
    event_id?: IntFilter<"Ticket_types"> | number
    types?: StringFilter<"Ticket_types"> | string
    price?: IntFilter<"Ticket_types"> | number
    quantity_available?: IntFilter<"Ticket_types"> | number
  }

  export type EventCreateWithoutEvent_categoryInput = {
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    event_location: Event_LocationCreateNestedOneWithoutEventInput
    ticket_types?: Ticket_typesCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEvent_categoryInput = {
    event_id?: number
    user_id: number
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    event_location_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    ticket_types?: Ticket_typesUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEvent_categoryInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEvent_categoryInput, EventUncheckedCreateWithoutEvent_categoryInput>
  }

  export type EventUpsertWithWhereUniqueWithoutEvent_categoryInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutEvent_categoryInput, EventUncheckedUpdateWithoutEvent_categoryInput>
    create: XOR<EventCreateWithoutEvent_categoryInput, EventUncheckedCreateWithoutEvent_categoryInput>
  }

  export type EventUpdateWithWhereUniqueWithoutEvent_categoryInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutEvent_categoryInput, EventUncheckedUpdateWithoutEvent_categoryInput>
  }

  export type EventUpdateManyWithWhereWithoutEvent_categoryInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEvent_categoryInput>
  }

  export type Location_cityCreateWithoutEvent_locationInput = {
    city_name: string
  }

  export type Location_cityUncheckedCreateWithoutEvent_locationInput = {
    location_city_id?: number
    city_name: string
  }

  export type Location_cityCreateOrConnectWithoutEvent_locationInput = {
    where: Location_cityWhereUniqueInput
    create: XOR<Location_cityCreateWithoutEvent_locationInput, Location_cityUncheckedCreateWithoutEvent_locationInput>
  }

  export type Location_countryCreateWithoutEvent_locationInput = {
    country_name: string
  }

  export type Location_countryUncheckedCreateWithoutEvent_locationInput = {
    location_country_id?: number
    country_name: string
  }

  export type Location_countryCreateOrConnectWithoutEvent_locationInput = {
    where: Location_countryWhereUniqueInput
    create: XOR<Location_countryCreateWithoutEvent_locationInput, Location_countryUncheckedCreateWithoutEvent_locationInput>
  }

  export type EventCreateWithoutEvent_locationInput = {
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    event_category?: Event_categoryCreateNestedManyWithoutEventInput
    ticket_types?: Ticket_typesCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEvent_locationInput = {
    event_id?: number
    user_id: number
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    event_category?: Event_categoryUncheckedCreateNestedManyWithoutEventInput
    ticket_types?: Ticket_typesUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEvent_locationInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEvent_locationInput, EventUncheckedCreateWithoutEvent_locationInput>
  }

  export type Location_cityUpsertWithoutEvent_locationInput = {
    update: XOR<Location_cityUpdateWithoutEvent_locationInput, Location_cityUncheckedUpdateWithoutEvent_locationInput>
    create: XOR<Location_cityCreateWithoutEvent_locationInput, Location_cityUncheckedCreateWithoutEvent_locationInput>
    where?: Location_cityWhereInput
  }

  export type Location_cityUpdateToOneWithWhereWithoutEvent_locationInput = {
    where?: Location_cityWhereInput
    data: XOR<Location_cityUpdateWithoutEvent_locationInput, Location_cityUncheckedUpdateWithoutEvent_locationInput>
  }

  export type Location_cityUpdateWithoutEvent_locationInput = {
    city_name?: StringFieldUpdateOperationsInput | string
  }

  export type Location_cityUncheckedUpdateWithoutEvent_locationInput = {
    location_city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
  }

  export type Location_countryUpsertWithoutEvent_locationInput = {
    update: XOR<Location_countryUpdateWithoutEvent_locationInput, Location_countryUncheckedUpdateWithoutEvent_locationInput>
    create: XOR<Location_countryCreateWithoutEvent_locationInput, Location_countryUncheckedCreateWithoutEvent_locationInput>
    where?: Location_countryWhereInput
  }

  export type Location_countryUpdateToOneWithWhereWithoutEvent_locationInput = {
    where?: Location_countryWhereInput
    data: XOR<Location_countryUpdateWithoutEvent_locationInput, Location_countryUncheckedUpdateWithoutEvent_locationInput>
  }

  export type Location_countryUpdateWithoutEvent_locationInput = {
    country_name?: StringFieldUpdateOperationsInput | string
  }

  export type Location_countryUncheckedUpdateWithoutEvent_locationInput = {
    location_country_id?: IntFieldUpdateOperationsInput | number
    country_name?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpsertWithoutEvent_locationInput = {
    update: XOR<EventUpdateWithoutEvent_locationInput, EventUncheckedUpdateWithoutEvent_locationInput>
    create: XOR<EventCreateWithoutEvent_locationInput, EventUncheckedCreateWithoutEvent_locationInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEvent_locationInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEvent_locationInput, EventUncheckedUpdateWithoutEvent_locationInput>
  }

  export type EventUpdateWithoutEvent_locationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    event_category?: Event_categoryUpdateManyWithoutEventNestedInput
    ticket_types?: Ticket_typesUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEvent_locationInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event_category?: Event_categoryUncheckedUpdateManyWithoutEventNestedInput
    ticket_types?: Ticket_typesUncheckedUpdateManyWithoutEventNestedInput
  }

  export type Event_LocationCreateWithoutCityInput = {
    address_name: string
    address: string
    zipcode?: string | null
    country: Location_countryCreateNestedOneWithoutEvent_locationInput
    event?: EventCreateNestedOneWithoutEvent_locationInput
  }

  export type Event_LocationUncheckedCreateWithoutCityInput = {
    event_location_id?: number
    address_name: string
    address: string
    location_country_id: number
    zipcode?: string | null
    event?: EventUncheckedCreateNestedOneWithoutEvent_locationInput
  }

  export type Event_LocationCreateOrConnectWithoutCityInput = {
    where: Event_LocationWhereUniqueInput
    create: XOR<Event_LocationCreateWithoutCityInput, Event_LocationUncheckedCreateWithoutCityInput>
  }

  export type Event_LocationCreateManyCityInputEnvelope = {
    data: Event_LocationCreateManyCityInput | Event_LocationCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type Event_LocationUpsertWithWhereUniqueWithoutCityInput = {
    where: Event_LocationWhereUniqueInput
    update: XOR<Event_LocationUpdateWithoutCityInput, Event_LocationUncheckedUpdateWithoutCityInput>
    create: XOR<Event_LocationCreateWithoutCityInput, Event_LocationUncheckedCreateWithoutCityInput>
  }

  export type Event_LocationUpdateWithWhereUniqueWithoutCityInput = {
    where: Event_LocationWhereUniqueInput
    data: XOR<Event_LocationUpdateWithoutCityInput, Event_LocationUncheckedUpdateWithoutCityInput>
  }

  export type Event_LocationUpdateManyWithWhereWithoutCityInput = {
    where: Event_LocationScalarWhereInput
    data: XOR<Event_LocationUpdateManyMutationInput, Event_LocationUncheckedUpdateManyWithoutCityInput>
  }

  export type Event_LocationScalarWhereInput = {
    AND?: Event_LocationScalarWhereInput | Event_LocationScalarWhereInput[]
    OR?: Event_LocationScalarWhereInput[]
    NOT?: Event_LocationScalarWhereInput | Event_LocationScalarWhereInput[]
    event_location_id?: IntFilter<"Event_Location"> | number
    address_name?: StringFilter<"Event_Location"> | string
    address?: StringFilter<"Event_Location"> | string
    location_city_id?: IntFilter<"Event_Location"> | number
    location_country_id?: IntFilter<"Event_Location"> | number
    zipcode?: StringNullableFilter<"Event_Location"> | string | null
  }

  export type Event_LocationCreateWithoutCountryInput = {
    address_name: string
    address: string
    zipcode?: string | null
    city: Location_cityCreateNestedOneWithoutEvent_locationInput
    event?: EventCreateNestedOneWithoutEvent_locationInput
  }

  export type Event_LocationUncheckedCreateWithoutCountryInput = {
    event_location_id?: number
    address_name: string
    address: string
    location_city_id: number
    zipcode?: string | null
    event?: EventUncheckedCreateNestedOneWithoutEvent_locationInput
  }

  export type Event_LocationCreateOrConnectWithoutCountryInput = {
    where: Event_LocationWhereUniqueInput
    create: XOR<Event_LocationCreateWithoutCountryInput, Event_LocationUncheckedCreateWithoutCountryInput>
  }

  export type Event_LocationCreateManyCountryInputEnvelope = {
    data: Event_LocationCreateManyCountryInput | Event_LocationCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type Event_LocationUpsertWithWhereUniqueWithoutCountryInput = {
    where: Event_LocationWhereUniqueInput
    update: XOR<Event_LocationUpdateWithoutCountryInput, Event_LocationUncheckedUpdateWithoutCountryInput>
    create: XOR<Event_LocationCreateWithoutCountryInput, Event_LocationUncheckedCreateWithoutCountryInput>
  }

  export type Event_LocationUpdateWithWhereUniqueWithoutCountryInput = {
    where: Event_LocationWhereUniqueInput
    data: XOR<Event_LocationUpdateWithoutCountryInput, Event_LocationUncheckedUpdateWithoutCountryInput>
  }

  export type Event_LocationUpdateManyWithWhereWithoutCountryInput = {
    where: Event_LocationScalarWhereInput
    data: XOR<Event_LocationUpdateManyMutationInput, Event_LocationUncheckedUpdateManyWithoutCountryInput>
  }

  export type EventCreateWithoutTicket_typesInput = {
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    event_category?: Event_categoryCreateNestedManyWithoutEventInput
    event_location: Event_LocationCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicket_typesInput = {
    event_id?: number
    user_id: number
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    event_location_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
    event_category?: Event_categoryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicket_typesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicket_typesInput, EventUncheckedCreateWithoutTicket_typesInput>
  }

  export type Transaction_DetailCreateWithoutTicket_typesInput = {
    quantity_bought: number
    subtotal: number
    user: UserCreateNestedOneWithoutTransaction_detailsInput
    transaction?: TransactionCreateNestedOneWithoutTransaction_detailsInput
  }

  export type Transaction_DetailUncheckedCreateWithoutTicket_typesInput = {
    transaction_details_id?: number
    user_id: number
    quantity_bought: number
    subtotal: number
    transaction?: TransactionUncheckedCreateNestedOneWithoutTransaction_detailsInput
  }

  export type Transaction_DetailCreateOrConnectWithoutTicket_typesInput = {
    where: Transaction_DetailWhereUniqueInput
    create: XOR<Transaction_DetailCreateWithoutTicket_typesInput, Transaction_DetailUncheckedCreateWithoutTicket_typesInput>
  }

  export type EventUpsertWithoutTicket_typesInput = {
    update: XOR<EventUpdateWithoutTicket_typesInput, EventUncheckedUpdateWithoutTicket_typesInput>
    create: XOR<EventCreateWithoutTicket_typesInput, EventUncheckedCreateWithoutTicket_typesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicket_typesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicket_typesInput, EventUncheckedUpdateWithoutTicket_typesInput>
  }

  export type EventUpdateWithoutTicket_typesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    event_category?: Event_categoryUpdateManyWithoutEventNestedInput
    event_location?: Event_LocationUpdateOneRequiredWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicket_typesInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    event_location_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event_category?: Event_categoryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type Transaction_DetailUpsertWithoutTicket_typesInput = {
    update: XOR<Transaction_DetailUpdateWithoutTicket_typesInput, Transaction_DetailUncheckedUpdateWithoutTicket_typesInput>
    create: XOR<Transaction_DetailCreateWithoutTicket_typesInput, Transaction_DetailUncheckedCreateWithoutTicket_typesInput>
    where?: Transaction_DetailWhereInput
  }

  export type Transaction_DetailUpdateToOneWithWhereWithoutTicket_typesInput = {
    where?: Transaction_DetailWhereInput
    data: XOR<Transaction_DetailUpdateWithoutTicket_typesInput, Transaction_DetailUncheckedUpdateWithoutTicket_typesInput>
  }

  export type Transaction_DetailUpdateWithoutTicket_typesInput = {
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTransaction_detailsNestedInput
    transaction?: TransactionUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type Transaction_DetailUncheckedUpdateWithoutTicket_typesInput = {
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type UserCreateWithoutTransaction_detailsInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    referral?: ReferralCreateNestedOneWithoutUserInput
    referred?: ReferralCreateNestedOneWithoutReferred_usersInput
    points?: PointCreateNestedManyWithoutUserInput
    coupons?: CouponCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
    transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransaction_detailsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    referral?: ReferralUncheckedCreateNestedOneWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransaction_detailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransaction_detailsInput, UserUncheckedCreateWithoutTransaction_detailsInput>
  }

  export type Ticket_typesCreateWithoutTransaction_detailsInput = {
    types: string
    price: number
    quantity_available: number
    event: EventCreateNestedOneWithoutTicket_typesInput
  }

  export type Ticket_typesUncheckedCreateWithoutTransaction_detailsInput = {
    ticket_types_id?: number
    event_id: number
    types: string
    price: number
    quantity_available: number
  }

  export type Ticket_typesCreateOrConnectWithoutTransaction_detailsInput = {
    where: Ticket_typesWhereUniqueInput
    create: XOR<Ticket_typesCreateWithoutTransaction_detailsInput, Ticket_typesUncheckedCreateWithoutTransaction_detailsInput>
  }

  export type TransactionCreateWithoutTransaction_detailsInput = {
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt?: Date | string
    isPaid: boolean
    user: UserCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutTransaction_detailsInput = {
    transaction_id?: number
    user_id: number
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt?: Date | string
    isPaid: boolean
  }

  export type TransactionCreateOrConnectWithoutTransaction_detailsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTransaction_detailsInput, TransactionUncheckedCreateWithoutTransaction_detailsInput>
  }

  export type UserUpsertWithoutTransaction_detailsInput = {
    update: XOR<UserUpdateWithoutTransaction_detailsInput, UserUncheckedUpdateWithoutTransaction_detailsInput>
    create: XOR<UserCreateWithoutTransaction_detailsInput, UserUncheckedCreateWithoutTransaction_detailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransaction_detailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransaction_detailsInput, UserUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type UserUpdateWithoutTransaction_detailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    referral?: ReferralUpdateOneWithoutUserNestedInput
    referred?: ReferralUpdateOneWithoutReferred_usersNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    coupons?: CouponUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
    transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransaction_detailsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    referral?: ReferralUncheckedUpdateOneWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Ticket_typesUpsertWithoutTransaction_detailsInput = {
    update: XOR<Ticket_typesUpdateWithoutTransaction_detailsInput, Ticket_typesUncheckedUpdateWithoutTransaction_detailsInput>
    create: XOR<Ticket_typesCreateWithoutTransaction_detailsInput, Ticket_typesUncheckedCreateWithoutTransaction_detailsInput>
    where?: Ticket_typesWhereInput
  }

  export type Ticket_typesUpdateToOneWithWhereWithoutTransaction_detailsInput = {
    where?: Ticket_typesWhereInput
    data: XOR<Ticket_typesUpdateWithoutTransaction_detailsInput, Ticket_typesUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type Ticket_typesUpdateWithoutTransaction_detailsInput = {
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTicket_typesNestedInput
  }

  export type Ticket_typesUncheckedUpdateWithoutTransaction_detailsInput = {
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpsertWithoutTransaction_detailsInput = {
    update: XOR<TransactionUpdateWithoutTransaction_detailsInput, TransactionUncheckedUpdateWithoutTransaction_detailsInput>
    create: XOR<TransactionCreateWithoutTransaction_detailsInput, TransactionUncheckedCreateWithoutTransaction_detailsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutTransaction_detailsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutTransaction_detailsInput, TransactionUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type TransactionUpdateWithoutTransaction_detailsInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTransaction_detailsInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Transaction_DetailCreateWithoutTransactionInput = {
    quantity_bought: number
    subtotal: number
    user: UserCreateNestedOneWithoutTransaction_detailsInput
    ticket_types: Ticket_typesCreateNestedOneWithoutTransaction_detailsInput
  }

  export type Transaction_DetailUncheckedCreateWithoutTransactionInput = {
    transaction_details_id?: number
    user_id: number
    ticket_types_id: number
    quantity_bought: number
    subtotal: number
  }

  export type Transaction_DetailCreateOrConnectWithoutTransactionInput = {
    where: Transaction_DetailWhereUniqueInput
    create: XOR<Transaction_DetailCreateWithoutTransactionInput, Transaction_DetailUncheckedCreateWithoutTransactionInput>
  }

  export type UserCreateWithoutTransactionInput = {
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    referral?: ReferralCreateNestedOneWithoutUserInput
    referred?: ReferralCreateNestedOneWithoutReferred_usersInput
    points?: PointCreateNestedManyWithoutUserInput
    coupons?: CouponCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
    referred_id?: number | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    referral?: ReferralUncheckedCreateNestedOneWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: CouponUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    transaction_details?: Transaction_DetailUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
  }

  export type Transaction_DetailUpsertWithoutTransactionInput = {
    update: XOR<Transaction_DetailUpdateWithoutTransactionInput, Transaction_DetailUncheckedUpdateWithoutTransactionInput>
    create: XOR<Transaction_DetailCreateWithoutTransactionInput, Transaction_DetailUncheckedCreateWithoutTransactionInput>
    where?: Transaction_DetailWhereInput
  }

  export type Transaction_DetailUpdateToOneWithWhereWithoutTransactionInput = {
    where?: Transaction_DetailWhereInput
    data: XOR<Transaction_DetailUpdateWithoutTransactionInput, Transaction_DetailUncheckedUpdateWithoutTransactionInput>
  }

  export type Transaction_DetailUpdateWithoutTransactionInput = {
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTransaction_detailsNestedInput
    ticket_types?: Ticket_typesUpdateOneRequiredWithoutTransaction_detailsNestedInput
  }

  export type Transaction_DetailUncheckedUpdateWithoutTransactionInput = {
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutTransactionInput = {
    update: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateWithoutTransactionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    referral?: ReferralUpdateOneWithoutUserNestedInput
    referred?: ReferralUpdateOneWithoutReferred_usersNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    coupons?: CouponUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referred_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    referral?: ReferralUncheckedUpdateOneWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PointCreateManyUserInput = {
    point_id?: number
    amount: number
    added_date?: Date | string
    expired_date: Date | string
  }

  export type CouponCreateManyUserInput = {
    coupon_id?: number
    coupon_name: string
    coupon_code: string
    discount: number
    max_amount?: number | null
    start_date?: Date | string
    expired_date: Date | string
  }

  export type EventCreateManyUserInput = {
    event_id?: number
    title: string
    description: string
    imgEvent: string
    coupon_id: number
    event_location_id: number
    startDate: Date | string
    endDate: Date | string
    startTime: string
    endTime: string
    timezone: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type Transaction_DetailCreateManyUserInput = {
    transaction_details_id?: number
    ticket_types_id: number
    quantity_bought: number
    subtotal: number
  }

  export type TransactionCreateManyUserInput = {
    transaction_id?: number
    transaction_details_id: number
    coupon_id: number
    total_amount: number
    payment_method: $Enums.PaymentMethod
    createdAt?: Date | string
    isPaid: boolean
  }

  export type PointUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    added_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateWithoutUserInput = {
    point_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    added_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyWithoutUserInput = {
    point_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    added_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUpdateWithoutUserInput = {
    coupon_name?: StringFieldUpdateOperationsInput | string
    coupon_code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    max_amount?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutUserInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    coupon_name?: StringFieldUpdateOperationsInput | string
    coupon_code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    max_amount?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyWithoutUserInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    coupon_name?: StringFieldUpdateOperationsInput | string
    coupon_code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    max_amount?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event_category?: Event_categoryUpdateManyWithoutEventNestedInput
    event_location?: Event_LocationUpdateOneRequiredWithoutEventNestedInput
    ticket_types?: Ticket_typesUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    event_location_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event_category?: Event_categoryUncheckedUpdateManyWithoutEventNestedInput
    ticket_types?: Ticket_typesUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    event_location_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Transaction_DetailUpdateWithoutUserInput = {
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    ticket_types?: Ticket_typesUpdateOneRequiredWithoutTransaction_detailsNestedInput
    transaction?: TransactionUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type Transaction_DetailUncheckedUpdateWithoutUserInput = {
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type Transaction_DetailUncheckedUpdateManyWithoutUserInput = {
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    quantity_bought?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutUserInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    transaction_details?: Transaction_DetailUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    transaction_details_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressCreateManyProfileInput = {
    address_id?: number
    address_name: $Enums.AddressName
    address: string
    city: string
    country: string
    zipcode?: string | null
  }

  export type Social_mediaCreateManyProfileInput = {
    social_id?: number
    platform: $Enums.Platform
    account_name: string
    url: string
  }

  export type AddressUpdateWithoutProfileInput = {
    address_name?: EnumAddressNameFieldUpdateOperationsInput | $Enums.AddressName
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateWithoutProfileInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address_name?: EnumAddressNameFieldUpdateOperationsInput | $Enums.AddressName
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyWithoutProfileInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address_name?: EnumAddressNameFieldUpdateOperationsInput | $Enums.AddressName
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Social_mediaUpdateWithoutProfileInput = {
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    account_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Social_mediaUncheckedUpdateWithoutProfileInput = {
    social_id?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    account_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Social_mediaUncheckedUpdateManyWithoutProfileInput = {
    social_id?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    account_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyReferredInput = {
    user_id?: number
    name: string
    email: string
    password: string
    pfp_url?: string | null
    created_at?: Date | string
    isVerified?: boolean
    role?: $Enums.Role
  }

  export type UserUpdateWithoutReferredInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    referral?: ReferralUpdateOneWithoutUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    coupons?: CouponUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUpdateManyWithoutUserNestedInput
    transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    referral?: ReferralUncheckedUpdateOneWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    transaction_details?: Transaction_DetailUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferredInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type Ticket_typesCreateManyEventInput = {
    ticket_types_id?: number
    types: string
    price: number
    quantity_available: number
  }

  export type Event_categoryUpdateWithoutEventInput = {
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type Event_categoryUncheckedUpdateWithoutEventInput = {
    event_category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type Event_categoryUncheckedUpdateManyWithoutEventInput = {
    event_category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type Ticket_typesUpdateWithoutEventInput = {
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
    transaction_details?: Transaction_DetailUpdateOneWithoutTicket_typesNestedInput
  }

  export type Ticket_typesUncheckedUpdateWithoutEventInput = {
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
    transaction_details?: Transaction_DetailUncheckedUpdateOneWithoutTicket_typesNestedInput
  }

  export type Ticket_typesUncheckedUpdateManyWithoutEventInput = {
    ticket_types_id?: IntFieldUpdateOperationsInput | number
    types?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity_available?: IntFieldUpdateOperationsInput | number
  }

  export type EventUpdateWithoutEvent_categoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    event_location?: Event_LocationUpdateOneRequiredWithoutEventNestedInput
    ticket_types?: Ticket_typesUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEvent_categoryInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    event_location_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_types?: Ticket_typesUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutEvent_categoryInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imgEvent?: StringFieldUpdateOperationsInput | string
    coupon_id?: IntFieldUpdateOperationsInput | number
    event_location_id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event_LocationCreateManyCityInput = {
    event_location_id?: number
    address_name: string
    address: string
    location_country_id: number
    zipcode?: string | null
  }

  export type Event_LocationUpdateWithoutCityInput = {
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: Location_countryUpdateOneRequiredWithoutEvent_locationNestedInput
    event?: EventUpdateOneWithoutEvent_locationNestedInput
  }

  export type Event_LocationUncheckedUpdateWithoutCityInput = {
    event_location_id?: IntFieldUpdateOperationsInput | number
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location_country_id?: IntFieldUpdateOperationsInput | number
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUncheckedUpdateOneWithoutEvent_locationNestedInput
  }

  export type Event_LocationUncheckedUpdateManyWithoutCityInput = {
    event_location_id?: IntFieldUpdateOperationsInput | number
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location_country_id?: IntFieldUpdateOperationsInput | number
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Event_LocationCreateManyCountryInput = {
    event_location_id?: number
    address_name: string
    address: string
    location_city_id: number
    zipcode?: string | null
  }

  export type Event_LocationUpdateWithoutCountryInput = {
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: Location_cityUpdateOneRequiredWithoutEvent_locationNestedInput
    event?: EventUpdateOneWithoutEvent_locationNestedInput
  }

  export type Event_LocationUncheckedUpdateWithoutCountryInput = {
    event_location_id?: IntFieldUpdateOperationsInput | number
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location_city_id?: IntFieldUpdateOperationsInput | number
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUncheckedUpdateOneWithoutEvent_locationNestedInput
  }

  export type Event_LocationUncheckedUpdateManyWithoutCountryInput = {
    event_location_id?: IntFieldUpdateOperationsInput | number
    address_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location_city_id?: IntFieldUpdateOperationsInput | number
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}