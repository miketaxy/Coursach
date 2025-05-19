
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
 * Model TravelItem
 * 
 */
export type TravelItem = $Result.DefaultSelection<Prisma.$TravelItemPayload>
/**
 * Model SelectedTravelItem
 * 
 */
export type SelectedTravelItem = $Result.DefaultSelection<Prisma.$SelectedTravelItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  GUEST: 'GUEST',
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelItem`: Exposes CRUD operations for the **TravelItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelItems
    * const travelItems = await prisma.travelItem.findMany()
    * ```
    */
  get travelItem(): Prisma.TravelItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.selectedTravelItem`: Exposes CRUD operations for the **SelectedTravelItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SelectedTravelItems
    * const selectedTravelItems = await prisma.selectedTravelItem.findMany()
    * ```
    */
  get selectedTravelItem(): Prisma.SelectedTravelItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    TravelItem: 'TravelItem',
    SelectedTravelItem: 'SelectedTravelItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "travelItem" | "selectedTravelItem"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      TravelItem: {
        payload: Prisma.$TravelItemPayload<ExtArgs>
        fields: Prisma.TravelItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>
          }
          findFirst: {
            args: Prisma.TravelItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>
          }
          findMany: {
            args: Prisma.TravelItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>[]
          }
          create: {
            args: Prisma.TravelItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>
          }
          createMany: {
            args: Prisma.TravelItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>[]
          }
          delete: {
            args: Prisma.TravelItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>
          }
          update: {
            args: Prisma.TravelItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>
          }
          deleteMany: {
            args: Prisma.TravelItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>[]
          }
          upsert: {
            args: Prisma.TravelItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelItemPayload>
          }
          aggregate: {
            args: Prisma.TravelItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelItem>
          }
          groupBy: {
            args: Prisma.TravelItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelItemCountArgs<ExtArgs>
            result: $Utils.Optional<TravelItemCountAggregateOutputType> | number
          }
        }
      }
      SelectedTravelItem: {
        payload: Prisma.$SelectedTravelItemPayload<ExtArgs>
        fields: Prisma.SelectedTravelItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SelectedTravelItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SelectedTravelItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>
          }
          findFirst: {
            args: Prisma.SelectedTravelItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SelectedTravelItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>
          }
          findMany: {
            args: Prisma.SelectedTravelItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>[]
          }
          create: {
            args: Prisma.SelectedTravelItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>
          }
          createMany: {
            args: Prisma.SelectedTravelItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SelectedTravelItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>[]
          }
          delete: {
            args: Prisma.SelectedTravelItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>
          }
          update: {
            args: Prisma.SelectedTravelItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>
          }
          deleteMany: {
            args: Prisma.SelectedTravelItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SelectedTravelItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SelectedTravelItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>[]
          }
          upsert: {
            args: Prisma.SelectedTravelItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedTravelItemPayload>
          }
          aggregate: {
            args: Prisma.SelectedTravelItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSelectedTravelItem>
          }
          groupBy: {
            args: Prisma.SelectedTravelItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SelectedTravelItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SelectedTravelItemCountArgs<ExtArgs>
            result: $Utils.Optional<SelectedTravelItemCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    travelItem?: TravelItemOmit
    selectedTravelItem?: SelectedTravelItemOmit
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
    | 'updateManyAndReturn'
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
    SelectedTravelItem: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SelectedTravelItem?: boolean | UserCountOutputTypeCountSelectedTravelItemArgs
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
  export type UserCountOutputTypeCountSelectedTravelItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectedTravelItemWhereInput
  }


  /**
   * Count Type TravelItemCountOutputType
   */

  export type TravelItemCountOutputType = {
    SelectedTravelItem: number
  }

  export type TravelItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SelectedTravelItem?: boolean | TravelItemCountOutputTypeCountSelectedTravelItemArgs
  }

  // Custom InputTypes
  /**
   * TravelItemCountOutputType without action
   */
  export type TravelItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItemCountOutputType
     */
    select?: TravelItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TravelItemCountOutputType without action
   */
  export type TravelItemCountOutputTypeCountSelectedTravelItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectedTravelItemWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    role: $Enums.Role | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    role: $Enums.Role | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    role: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    role?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    role?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    role?: true
    password?: true
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
    id: number
    username: string
    role: $Enums.Role
    password: string
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
    id?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
    SelectedTravelItem?: boolean | User$SelectedTravelItemArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "role" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SelectedTravelItem?: boolean | User$SelectedTravelItemArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      SelectedTravelItem: Prisma.$SelectedTravelItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      role: $Enums.Role
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SelectedTravelItem<T extends User$SelectedTravelItemArgs<ExtArgs> = {}>(args?: Subset<T, User$SelectedTravelItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly password: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.SelectedTravelItem
   */
  export type User$SelectedTravelItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    where?: SelectedTravelItemWhereInput
    orderBy?: SelectedTravelItemOrderByWithRelationInput | SelectedTravelItemOrderByWithRelationInput[]
    cursor?: SelectedTravelItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelectedTravelItemScalarFieldEnum | SelectedTravelItemScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TravelItem
   */

  export type AggregateTravelItem = {
    _count: TravelItemCountAggregateOutputType | null
    _avg: TravelItemAvgAggregateOutputType | null
    _sum: TravelItemSumAggregateOutputType | null
    _min: TravelItemMinAggregateOutputType | null
    _max: TravelItemMaxAggregateOutputType | null
  }

  export type TravelItemAvgAggregateOutputType = {
    id: number | null
    Price: number | null
  }

  export type TravelItemSumAggregateOutputType = {
    id: number | null
    Price: number | null
  }

  export type TravelItemMinAggregateOutputType = {
    id: number | null
    description: string | null
    Title: string | null
    Image: string | null
    Price: number | null
  }

  export type TravelItemMaxAggregateOutputType = {
    id: number | null
    description: string | null
    Title: string | null
    Image: string | null
    Price: number | null
  }

  export type TravelItemCountAggregateOutputType = {
    id: number
    description: number
    Title: number
    Image: number
    Price: number
    _all: number
  }


  export type TravelItemAvgAggregateInputType = {
    id?: true
    Price?: true
  }

  export type TravelItemSumAggregateInputType = {
    id?: true
    Price?: true
  }

  export type TravelItemMinAggregateInputType = {
    id?: true
    description?: true
    Title?: true
    Image?: true
    Price?: true
  }

  export type TravelItemMaxAggregateInputType = {
    id?: true
    description?: true
    Title?: true
    Image?: true
    Price?: true
  }

  export type TravelItemCountAggregateInputType = {
    id?: true
    description?: true
    Title?: true
    Image?: true
    Price?: true
    _all?: true
  }

  export type TravelItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelItem to aggregate.
     */
    where?: TravelItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelItems to fetch.
     */
    orderBy?: TravelItemOrderByWithRelationInput | TravelItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelItems
    **/
    _count?: true | TravelItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelItemMaxAggregateInputType
  }

  export type GetTravelItemAggregateType<T extends TravelItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelItem[P]>
      : GetScalarType<T[P], AggregateTravelItem[P]>
  }




  export type TravelItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelItemWhereInput
    orderBy?: TravelItemOrderByWithAggregationInput | TravelItemOrderByWithAggregationInput[]
    by: TravelItemScalarFieldEnum[] | TravelItemScalarFieldEnum
    having?: TravelItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelItemCountAggregateInputType | true
    _avg?: TravelItemAvgAggregateInputType
    _sum?: TravelItemSumAggregateInputType
    _min?: TravelItemMinAggregateInputType
    _max?: TravelItemMaxAggregateInputType
  }

  export type TravelItemGroupByOutputType = {
    id: number
    description: string | null
    Title: string
    Image: string | null
    Price: number
    _count: TravelItemCountAggregateOutputType | null
    _avg: TravelItemAvgAggregateOutputType | null
    _sum: TravelItemSumAggregateOutputType | null
    _min: TravelItemMinAggregateOutputType | null
    _max: TravelItemMaxAggregateOutputType | null
  }

  type GetTravelItemGroupByPayload<T extends TravelItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelItemGroupByOutputType[P]>
            : GetScalarType<T[P], TravelItemGroupByOutputType[P]>
        }
      >
    >


  export type TravelItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    Title?: boolean
    Image?: boolean
    Price?: boolean
    SelectedTravelItem?: boolean | TravelItem$SelectedTravelItemArgs<ExtArgs>
    _count?: boolean | TravelItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelItem"]>

  export type TravelItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    Title?: boolean
    Image?: boolean
    Price?: boolean
  }, ExtArgs["result"]["travelItem"]>

  export type TravelItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    Title?: boolean
    Image?: boolean
    Price?: boolean
  }, ExtArgs["result"]["travelItem"]>

  export type TravelItemSelectScalar = {
    id?: boolean
    description?: boolean
    Title?: boolean
    Image?: boolean
    Price?: boolean
  }

  export type TravelItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "Title" | "Image" | "Price", ExtArgs["result"]["travelItem"]>
  export type TravelItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SelectedTravelItem?: boolean | TravelItem$SelectedTravelItemArgs<ExtArgs>
    _count?: boolean | TravelItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TravelItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TravelItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TravelItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelItem"
    objects: {
      SelectedTravelItem: Prisma.$SelectedTravelItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      Title: string
      Image: string | null
      Price: number
    }, ExtArgs["result"]["travelItem"]>
    composites: {}
  }

  type TravelItemGetPayload<S extends boolean | null | undefined | TravelItemDefaultArgs> = $Result.GetResult<Prisma.$TravelItemPayload, S>

  type TravelItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelItemCountAggregateInputType | true
    }

  export interface TravelItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelItem'], meta: { name: 'TravelItem' } }
    /**
     * Find zero or one TravelItem that matches the filter.
     * @param {TravelItemFindUniqueArgs} args - Arguments to find a TravelItem
     * @example
     * // Get one TravelItem
     * const travelItem = await prisma.travelItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelItemFindUniqueArgs>(args: SelectSubset<T, TravelItemFindUniqueArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelItemFindUniqueOrThrowArgs} args - Arguments to find a TravelItem
     * @example
     * // Get one TravelItem
     * const travelItem = await prisma.travelItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelItemFindFirstArgs} args - Arguments to find a TravelItem
     * @example
     * // Get one TravelItem
     * const travelItem = await prisma.travelItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelItemFindFirstArgs>(args?: SelectSubset<T, TravelItemFindFirstArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelItemFindFirstOrThrowArgs} args - Arguments to find a TravelItem
     * @example
     * // Get one TravelItem
     * const travelItem = await prisma.travelItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelItems
     * const travelItems = await prisma.travelItem.findMany()
     * 
     * // Get first 10 TravelItems
     * const travelItems = await prisma.travelItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelItemWithIdOnly = await prisma.travelItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelItemFindManyArgs>(args?: SelectSubset<T, TravelItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelItem.
     * @param {TravelItemCreateArgs} args - Arguments to create a TravelItem.
     * @example
     * // Create one TravelItem
     * const TravelItem = await prisma.travelItem.create({
     *   data: {
     *     // ... data to create a TravelItem
     *   }
     * })
     * 
     */
    create<T extends TravelItemCreateArgs>(args: SelectSubset<T, TravelItemCreateArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelItems.
     * @param {TravelItemCreateManyArgs} args - Arguments to create many TravelItems.
     * @example
     * // Create many TravelItems
     * const travelItem = await prisma.travelItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelItemCreateManyArgs>(args?: SelectSubset<T, TravelItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelItems and returns the data saved in the database.
     * @param {TravelItemCreateManyAndReturnArgs} args - Arguments to create many TravelItems.
     * @example
     * // Create many TravelItems
     * const travelItem = await prisma.travelItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelItems and only return the `id`
     * const travelItemWithIdOnly = await prisma.travelItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelItem.
     * @param {TravelItemDeleteArgs} args - Arguments to delete one TravelItem.
     * @example
     * // Delete one TravelItem
     * const TravelItem = await prisma.travelItem.delete({
     *   where: {
     *     // ... filter to delete one TravelItem
     *   }
     * })
     * 
     */
    delete<T extends TravelItemDeleteArgs>(args: SelectSubset<T, TravelItemDeleteArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelItem.
     * @param {TravelItemUpdateArgs} args - Arguments to update one TravelItem.
     * @example
     * // Update one TravelItem
     * const travelItem = await prisma.travelItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelItemUpdateArgs>(args: SelectSubset<T, TravelItemUpdateArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelItems.
     * @param {TravelItemDeleteManyArgs} args - Arguments to filter TravelItems to delete.
     * @example
     * // Delete a few TravelItems
     * const { count } = await prisma.travelItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelItemDeleteManyArgs>(args?: SelectSubset<T, TravelItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelItems
     * const travelItem = await prisma.travelItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelItemUpdateManyArgs>(args: SelectSubset<T, TravelItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelItems and returns the data updated in the database.
     * @param {TravelItemUpdateManyAndReturnArgs} args - Arguments to update many TravelItems.
     * @example
     * // Update many TravelItems
     * const travelItem = await prisma.travelItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelItems and only return the `id`
     * const travelItemWithIdOnly = await prisma.travelItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelItem.
     * @param {TravelItemUpsertArgs} args - Arguments to update or create a TravelItem.
     * @example
     * // Update or create a TravelItem
     * const travelItem = await prisma.travelItem.upsert({
     *   create: {
     *     // ... data to create a TravelItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelItem we want to update
     *   }
     * })
     */
    upsert<T extends TravelItemUpsertArgs>(args: SelectSubset<T, TravelItemUpsertArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelItemCountArgs} args - Arguments to filter TravelItems to count.
     * @example
     * // Count the number of TravelItems
     * const count = await prisma.travelItem.count({
     *   where: {
     *     // ... the filter for the TravelItems we want to count
     *   }
     * })
    **/
    count<T extends TravelItemCountArgs>(
      args?: Subset<T, TravelItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TravelItemAggregateArgs>(args: Subset<T, TravelItemAggregateArgs>): Prisma.PrismaPromise<GetTravelItemAggregateType<T>>

    /**
     * Group by TravelItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelItemGroupByArgs} args - Group by arguments.
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
      T extends TravelItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelItemGroupByArgs['orderBy'] }
        : { orderBy?: TravelItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TravelItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelItem model
   */
  readonly fields: TravelItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SelectedTravelItem<T extends TravelItem$SelectedTravelItemArgs<ExtArgs> = {}>(args?: Subset<T, TravelItem$SelectedTravelItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TravelItem model
   */
  interface TravelItemFieldRefs {
    readonly id: FieldRef<"TravelItem", 'Int'>
    readonly description: FieldRef<"TravelItem", 'String'>
    readonly Title: FieldRef<"TravelItem", 'String'>
    readonly Image: FieldRef<"TravelItem", 'String'>
    readonly Price: FieldRef<"TravelItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TravelItem findUnique
   */
  export type TravelItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * Filter, which TravelItem to fetch.
     */
    where: TravelItemWhereUniqueInput
  }

  /**
   * TravelItem findUniqueOrThrow
   */
  export type TravelItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * Filter, which TravelItem to fetch.
     */
    where: TravelItemWhereUniqueInput
  }

  /**
   * TravelItem findFirst
   */
  export type TravelItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * Filter, which TravelItem to fetch.
     */
    where?: TravelItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelItems to fetch.
     */
    orderBy?: TravelItemOrderByWithRelationInput | TravelItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelItems.
     */
    cursor?: TravelItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelItems.
     */
    distinct?: TravelItemScalarFieldEnum | TravelItemScalarFieldEnum[]
  }

  /**
   * TravelItem findFirstOrThrow
   */
  export type TravelItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * Filter, which TravelItem to fetch.
     */
    where?: TravelItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelItems to fetch.
     */
    orderBy?: TravelItemOrderByWithRelationInput | TravelItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelItems.
     */
    cursor?: TravelItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelItems.
     */
    distinct?: TravelItemScalarFieldEnum | TravelItemScalarFieldEnum[]
  }

  /**
   * TravelItem findMany
   */
  export type TravelItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * Filter, which TravelItems to fetch.
     */
    where?: TravelItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelItems to fetch.
     */
    orderBy?: TravelItemOrderByWithRelationInput | TravelItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelItems.
     */
    cursor?: TravelItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelItems.
     */
    skip?: number
    distinct?: TravelItemScalarFieldEnum | TravelItemScalarFieldEnum[]
  }

  /**
   * TravelItem create
   */
  export type TravelItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelItem.
     */
    data: XOR<TravelItemCreateInput, TravelItemUncheckedCreateInput>
  }

  /**
   * TravelItem createMany
   */
  export type TravelItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelItems.
     */
    data: TravelItemCreateManyInput | TravelItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelItem createManyAndReturn
   */
  export type TravelItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * The data used to create many TravelItems.
     */
    data: TravelItemCreateManyInput | TravelItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelItem update
   */
  export type TravelItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelItem.
     */
    data: XOR<TravelItemUpdateInput, TravelItemUncheckedUpdateInput>
    /**
     * Choose, which TravelItem to update.
     */
    where: TravelItemWhereUniqueInput
  }

  /**
   * TravelItem updateMany
   */
  export type TravelItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelItems.
     */
    data: XOR<TravelItemUpdateManyMutationInput, TravelItemUncheckedUpdateManyInput>
    /**
     * Filter which TravelItems to update
     */
    where?: TravelItemWhereInput
    /**
     * Limit how many TravelItems to update.
     */
    limit?: number
  }

  /**
   * TravelItem updateManyAndReturn
   */
  export type TravelItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * The data used to update TravelItems.
     */
    data: XOR<TravelItemUpdateManyMutationInput, TravelItemUncheckedUpdateManyInput>
    /**
     * Filter which TravelItems to update
     */
    where?: TravelItemWhereInput
    /**
     * Limit how many TravelItems to update.
     */
    limit?: number
  }

  /**
   * TravelItem upsert
   */
  export type TravelItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelItem to update in case it exists.
     */
    where: TravelItemWhereUniqueInput
    /**
     * In case the TravelItem found by the `where` argument doesn't exist, create a new TravelItem with this data.
     */
    create: XOR<TravelItemCreateInput, TravelItemUncheckedCreateInput>
    /**
     * In case the TravelItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelItemUpdateInput, TravelItemUncheckedUpdateInput>
  }

  /**
   * TravelItem delete
   */
  export type TravelItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    /**
     * Filter which TravelItem to delete.
     */
    where: TravelItemWhereUniqueInput
  }

  /**
   * TravelItem deleteMany
   */
  export type TravelItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelItems to delete
     */
    where?: TravelItemWhereInput
    /**
     * Limit how many TravelItems to delete.
     */
    limit?: number
  }

  /**
   * TravelItem.SelectedTravelItem
   */
  export type TravelItem$SelectedTravelItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    where?: SelectedTravelItemWhereInput
    orderBy?: SelectedTravelItemOrderByWithRelationInput | SelectedTravelItemOrderByWithRelationInput[]
    cursor?: SelectedTravelItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelectedTravelItemScalarFieldEnum | SelectedTravelItemScalarFieldEnum[]
  }

  /**
   * TravelItem without action
   */
  export type TravelItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
  }


  /**
   * Model SelectedTravelItem
   */

  export type AggregateSelectedTravelItem = {
    _count: SelectedTravelItemCountAggregateOutputType | null
    _avg: SelectedTravelItemAvgAggregateOutputType | null
    _sum: SelectedTravelItemSumAggregateOutputType | null
    _min: SelectedTravelItemMinAggregateOutputType | null
    _max: SelectedTravelItemMaxAggregateOutputType | null
  }

  export type SelectedTravelItemAvgAggregateOutputType = {
    id: number | null
    travelItemId: number | null
    userId: number | null
  }

  export type SelectedTravelItemSumAggregateOutputType = {
    id: number | null
    travelItemId: number | null
    userId: number | null
  }

  export type SelectedTravelItemMinAggregateOutputType = {
    id: number | null
    travelItemId: number | null
    userId: number | null
  }

  export type SelectedTravelItemMaxAggregateOutputType = {
    id: number | null
    travelItemId: number | null
    userId: number | null
  }

  export type SelectedTravelItemCountAggregateOutputType = {
    id: number
    travelItemId: number
    userId: number
    _all: number
  }


  export type SelectedTravelItemAvgAggregateInputType = {
    id?: true
    travelItemId?: true
    userId?: true
  }

  export type SelectedTravelItemSumAggregateInputType = {
    id?: true
    travelItemId?: true
    userId?: true
  }

  export type SelectedTravelItemMinAggregateInputType = {
    id?: true
    travelItemId?: true
    userId?: true
  }

  export type SelectedTravelItemMaxAggregateInputType = {
    id?: true
    travelItemId?: true
    userId?: true
  }

  export type SelectedTravelItemCountAggregateInputType = {
    id?: true
    travelItemId?: true
    userId?: true
    _all?: true
  }

  export type SelectedTravelItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelectedTravelItem to aggregate.
     */
    where?: SelectedTravelItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectedTravelItems to fetch.
     */
    orderBy?: SelectedTravelItemOrderByWithRelationInput | SelectedTravelItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SelectedTravelItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectedTravelItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectedTravelItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SelectedTravelItems
    **/
    _count?: true | SelectedTravelItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SelectedTravelItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SelectedTravelItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SelectedTravelItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SelectedTravelItemMaxAggregateInputType
  }

  export type GetSelectedTravelItemAggregateType<T extends SelectedTravelItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSelectedTravelItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelectedTravelItem[P]>
      : GetScalarType<T[P], AggregateSelectedTravelItem[P]>
  }




  export type SelectedTravelItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectedTravelItemWhereInput
    orderBy?: SelectedTravelItemOrderByWithAggregationInput | SelectedTravelItemOrderByWithAggregationInput[]
    by: SelectedTravelItemScalarFieldEnum[] | SelectedTravelItemScalarFieldEnum
    having?: SelectedTravelItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SelectedTravelItemCountAggregateInputType | true
    _avg?: SelectedTravelItemAvgAggregateInputType
    _sum?: SelectedTravelItemSumAggregateInputType
    _min?: SelectedTravelItemMinAggregateInputType
    _max?: SelectedTravelItemMaxAggregateInputType
  }

  export type SelectedTravelItemGroupByOutputType = {
    id: number
    travelItemId: number | null
    userId: number | null
    _count: SelectedTravelItemCountAggregateOutputType | null
    _avg: SelectedTravelItemAvgAggregateOutputType | null
    _sum: SelectedTravelItemSumAggregateOutputType | null
    _min: SelectedTravelItemMinAggregateOutputType | null
    _max: SelectedTravelItemMaxAggregateOutputType | null
  }

  type GetSelectedTravelItemGroupByPayload<T extends SelectedTravelItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SelectedTravelItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SelectedTravelItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SelectedTravelItemGroupByOutputType[P]>
            : GetScalarType<T[P], SelectedTravelItemGroupByOutputType[P]>
        }
      >
    >


  export type SelectedTravelItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelItemId?: boolean
    userId?: boolean
    travelItem?: boolean | SelectedTravelItem$travelItemArgs<ExtArgs>
    user?: boolean | SelectedTravelItem$userArgs<ExtArgs>
  }, ExtArgs["result"]["selectedTravelItem"]>

  export type SelectedTravelItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelItemId?: boolean
    userId?: boolean
    travelItem?: boolean | SelectedTravelItem$travelItemArgs<ExtArgs>
    user?: boolean | SelectedTravelItem$userArgs<ExtArgs>
  }, ExtArgs["result"]["selectedTravelItem"]>

  export type SelectedTravelItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelItemId?: boolean
    userId?: boolean
    travelItem?: boolean | SelectedTravelItem$travelItemArgs<ExtArgs>
    user?: boolean | SelectedTravelItem$userArgs<ExtArgs>
  }, ExtArgs["result"]["selectedTravelItem"]>

  export type SelectedTravelItemSelectScalar = {
    id?: boolean
    travelItemId?: boolean
    userId?: boolean
  }

  export type SelectedTravelItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "travelItemId" | "userId", ExtArgs["result"]["selectedTravelItem"]>
  export type SelectedTravelItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelItem?: boolean | SelectedTravelItem$travelItemArgs<ExtArgs>
    user?: boolean | SelectedTravelItem$userArgs<ExtArgs>
  }
  export type SelectedTravelItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelItem?: boolean | SelectedTravelItem$travelItemArgs<ExtArgs>
    user?: boolean | SelectedTravelItem$userArgs<ExtArgs>
  }
  export type SelectedTravelItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelItem?: boolean | SelectedTravelItem$travelItemArgs<ExtArgs>
    user?: boolean | SelectedTravelItem$userArgs<ExtArgs>
  }

  export type $SelectedTravelItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SelectedTravelItem"
    objects: {
      travelItem: Prisma.$TravelItemPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      travelItemId: number | null
      userId: number | null
    }, ExtArgs["result"]["selectedTravelItem"]>
    composites: {}
  }

  type SelectedTravelItemGetPayload<S extends boolean | null | undefined | SelectedTravelItemDefaultArgs> = $Result.GetResult<Prisma.$SelectedTravelItemPayload, S>

  type SelectedTravelItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SelectedTravelItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SelectedTravelItemCountAggregateInputType | true
    }

  export interface SelectedTravelItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SelectedTravelItem'], meta: { name: 'SelectedTravelItem' } }
    /**
     * Find zero or one SelectedTravelItem that matches the filter.
     * @param {SelectedTravelItemFindUniqueArgs} args - Arguments to find a SelectedTravelItem
     * @example
     * // Get one SelectedTravelItem
     * const selectedTravelItem = await prisma.selectedTravelItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SelectedTravelItemFindUniqueArgs>(args: SelectSubset<T, SelectedTravelItemFindUniqueArgs<ExtArgs>>): Prisma__SelectedTravelItemClient<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SelectedTravelItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SelectedTravelItemFindUniqueOrThrowArgs} args - Arguments to find a SelectedTravelItem
     * @example
     * // Get one SelectedTravelItem
     * const selectedTravelItem = await prisma.selectedTravelItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SelectedTravelItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SelectedTravelItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SelectedTravelItemClient<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SelectedTravelItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedTravelItemFindFirstArgs} args - Arguments to find a SelectedTravelItem
     * @example
     * // Get one SelectedTravelItem
     * const selectedTravelItem = await prisma.selectedTravelItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SelectedTravelItemFindFirstArgs>(args?: SelectSubset<T, SelectedTravelItemFindFirstArgs<ExtArgs>>): Prisma__SelectedTravelItemClient<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SelectedTravelItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedTravelItemFindFirstOrThrowArgs} args - Arguments to find a SelectedTravelItem
     * @example
     * // Get one SelectedTravelItem
     * const selectedTravelItem = await prisma.selectedTravelItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SelectedTravelItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SelectedTravelItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SelectedTravelItemClient<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SelectedTravelItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedTravelItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SelectedTravelItems
     * const selectedTravelItems = await prisma.selectedTravelItem.findMany()
     * 
     * // Get first 10 SelectedTravelItems
     * const selectedTravelItems = await prisma.selectedTravelItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const selectedTravelItemWithIdOnly = await prisma.selectedTravelItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SelectedTravelItemFindManyArgs>(args?: SelectSubset<T, SelectedTravelItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SelectedTravelItem.
     * @param {SelectedTravelItemCreateArgs} args - Arguments to create a SelectedTravelItem.
     * @example
     * // Create one SelectedTravelItem
     * const SelectedTravelItem = await prisma.selectedTravelItem.create({
     *   data: {
     *     // ... data to create a SelectedTravelItem
     *   }
     * })
     * 
     */
    create<T extends SelectedTravelItemCreateArgs>(args: SelectSubset<T, SelectedTravelItemCreateArgs<ExtArgs>>): Prisma__SelectedTravelItemClient<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SelectedTravelItems.
     * @param {SelectedTravelItemCreateManyArgs} args - Arguments to create many SelectedTravelItems.
     * @example
     * // Create many SelectedTravelItems
     * const selectedTravelItem = await prisma.selectedTravelItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SelectedTravelItemCreateManyArgs>(args?: SelectSubset<T, SelectedTravelItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SelectedTravelItems and returns the data saved in the database.
     * @param {SelectedTravelItemCreateManyAndReturnArgs} args - Arguments to create many SelectedTravelItems.
     * @example
     * // Create many SelectedTravelItems
     * const selectedTravelItem = await prisma.selectedTravelItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SelectedTravelItems and only return the `id`
     * const selectedTravelItemWithIdOnly = await prisma.selectedTravelItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SelectedTravelItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SelectedTravelItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SelectedTravelItem.
     * @param {SelectedTravelItemDeleteArgs} args - Arguments to delete one SelectedTravelItem.
     * @example
     * // Delete one SelectedTravelItem
     * const SelectedTravelItem = await prisma.selectedTravelItem.delete({
     *   where: {
     *     // ... filter to delete one SelectedTravelItem
     *   }
     * })
     * 
     */
    delete<T extends SelectedTravelItemDeleteArgs>(args: SelectSubset<T, SelectedTravelItemDeleteArgs<ExtArgs>>): Prisma__SelectedTravelItemClient<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SelectedTravelItem.
     * @param {SelectedTravelItemUpdateArgs} args - Arguments to update one SelectedTravelItem.
     * @example
     * // Update one SelectedTravelItem
     * const selectedTravelItem = await prisma.selectedTravelItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SelectedTravelItemUpdateArgs>(args: SelectSubset<T, SelectedTravelItemUpdateArgs<ExtArgs>>): Prisma__SelectedTravelItemClient<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SelectedTravelItems.
     * @param {SelectedTravelItemDeleteManyArgs} args - Arguments to filter SelectedTravelItems to delete.
     * @example
     * // Delete a few SelectedTravelItems
     * const { count } = await prisma.selectedTravelItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SelectedTravelItemDeleteManyArgs>(args?: SelectSubset<T, SelectedTravelItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SelectedTravelItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedTravelItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SelectedTravelItems
     * const selectedTravelItem = await prisma.selectedTravelItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SelectedTravelItemUpdateManyArgs>(args: SelectSubset<T, SelectedTravelItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SelectedTravelItems and returns the data updated in the database.
     * @param {SelectedTravelItemUpdateManyAndReturnArgs} args - Arguments to update many SelectedTravelItems.
     * @example
     * // Update many SelectedTravelItems
     * const selectedTravelItem = await prisma.selectedTravelItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SelectedTravelItems and only return the `id`
     * const selectedTravelItemWithIdOnly = await prisma.selectedTravelItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SelectedTravelItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SelectedTravelItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SelectedTravelItem.
     * @param {SelectedTravelItemUpsertArgs} args - Arguments to update or create a SelectedTravelItem.
     * @example
     * // Update or create a SelectedTravelItem
     * const selectedTravelItem = await prisma.selectedTravelItem.upsert({
     *   create: {
     *     // ... data to create a SelectedTravelItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SelectedTravelItem we want to update
     *   }
     * })
     */
    upsert<T extends SelectedTravelItemUpsertArgs>(args: SelectSubset<T, SelectedTravelItemUpsertArgs<ExtArgs>>): Prisma__SelectedTravelItemClient<$Result.GetResult<Prisma.$SelectedTravelItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SelectedTravelItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedTravelItemCountArgs} args - Arguments to filter SelectedTravelItems to count.
     * @example
     * // Count the number of SelectedTravelItems
     * const count = await prisma.selectedTravelItem.count({
     *   where: {
     *     // ... the filter for the SelectedTravelItems we want to count
     *   }
     * })
    **/
    count<T extends SelectedTravelItemCountArgs>(
      args?: Subset<T, SelectedTravelItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SelectedTravelItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SelectedTravelItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedTravelItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SelectedTravelItemAggregateArgs>(args: Subset<T, SelectedTravelItemAggregateArgs>): Prisma.PrismaPromise<GetSelectedTravelItemAggregateType<T>>

    /**
     * Group by SelectedTravelItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedTravelItemGroupByArgs} args - Group by arguments.
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
      T extends SelectedTravelItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SelectedTravelItemGroupByArgs['orderBy'] }
        : { orderBy?: SelectedTravelItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SelectedTravelItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelectedTravelItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SelectedTravelItem model
   */
  readonly fields: SelectedTravelItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SelectedTravelItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SelectedTravelItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    travelItem<T extends SelectedTravelItem$travelItemArgs<ExtArgs> = {}>(args?: Subset<T, SelectedTravelItem$travelItemArgs<ExtArgs>>): Prisma__TravelItemClient<$Result.GetResult<Prisma.$TravelItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends SelectedTravelItem$userArgs<ExtArgs> = {}>(args?: Subset<T, SelectedTravelItem$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SelectedTravelItem model
   */
  interface SelectedTravelItemFieldRefs {
    readonly id: FieldRef<"SelectedTravelItem", 'Int'>
    readonly travelItemId: FieldRef<"SelectedTravelItem", 'Int'>
    readonly userId: FieldRef<"SelectedTravelItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SelectedTravelItem findUnique
   */
  export type SelectedTravelItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * Filter, which SelectedTravelItem to fetch.
     */
    where: SelectedTravelItemWhereUniqueInput
  }

  /**
   * SelectedTravelItem findUniqueOrThrow
   */
  export type SelectedTravelItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * Filter, which SelectedTravelItem to fetch.
     */
    where: SelectedTravelItemWhereUniqueInput
  }

  /**
   * SelectedTravelItem findFirst
   */
  export type SelectedTravelItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * Filter, which SelectedTravelItem to fetch.
     */
    where?: SelectedTravelItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectedTravelItems to fetch.
     */
    orderBy?: SelectedTravelItemOrderByWithRelationInput | SelectedTravelItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelectedTravelItems.
     */
    cursor?: SelectedTravelItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectedTravelItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectedTravelItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelectedTravelItems.
     */
    distinct?: SelectedTravelItemScalarFieldEnum | SelectedTravelItemScalarFieldEnum[]
  }

  /**
   * SelectedTravelItem findFirstOrThrow
   */
  export type SelectedTravelItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * Filter, which SelectedTravelItem to fetch.
     */
    where?: SelectedTravelItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectedTravelItems to fetch.
     */
    orderBy?: SelectedTravelItemOrderByWithRelationInput | SelectedTravelItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelectedTravelItems.
     */
    cursor?: SelectedTravelItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectedTravelItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectedTravelItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelectedTravelItems.
     */
    distinct?: SelectedTravelItemScalarFieldEnum | SelectedTravelItemScalarFieldEnum[]
  }

  /**
   * SelectedTravelItem findMany
   */
  export type SelectedTravelItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * Filter, which SelectedTravelItems to fetch.
     */
    where?: SelectedTravelItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectedTravelItems to fetch.
     */
    orderBy?: SelectedTravelItemOrderByWithRelationInput | SelectedTravelItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SelectedTravelItems.
     */
    cursor?: SelectedTravelItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectedTravelItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectedTravelItems.
     */
    skip?: number
    distinct?: SelectedTravelItemScalarFieldEnum | SelectedTravelItemScalarFieldEnum[]
  }

  /**
   * SelectedTravelItem create
   */
  export type SelectedTravelItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SelectedTravelItem.
     */
    data?: XOR<SelectedTravelItemCreateInput, SelectedTravelItemUncheckedCreateInput>
  }

  /**
   * SelectedTravelItem createMany
   */
  export type SelectedTravelItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SelectedTravelItems.
     */
    data: SelectedTravelItemCreateManyInput | SelectedTravelItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SelectedTravelItem createManyAndReturn
   */
  export type SelectedTravelItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * The data used to create many SelectedTravelItems.
     */
    data: SelectedTravelItemCreateManyInput | SelectedTravelItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SelectedTravelItem update
   */
  export type SelectedTravelItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SelectedTravelItem.
     */
    data: XOR<SelectedTravelItemUpdateInput, SelectedTravelItemUncheckedUpdateInput>
    /**
     * Choose, which SelectedTravelItem to update.
     */
    where: SelectedTravelItemWhereUniqueInput
  }

  /**
   * SelectedTravelItem updateMany
   */
  export type SelectedTravelItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SelectedTravelItems.
     */
    data: XOR<SelectedTravelItemUpdateManyMutationInput, SelectedTravelItemUncheckedUpdateManyInput>
    /**
     * Filter which SelectedTravelItems to update
     */
    where?: SelectedTravelItemWhereInput
    /**
     * Limit how many SelectedTravelItems to update.
     */
    limit?: number
  }

  /**
   * SelectedTravelItem updateManyAndReturn
   */
  export type SelectedTravelItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * The data used to update SelectedTravelItems.
     */
    data: XOR<SelectedTravelItemUpdateManyMutationInput, SelectedTravelItemUncheckedUpdateManyInput>
    /**
     * Filter which SelectedTravelItems to update
     */
    where?: SelectedTravelItemWhereInput
    /**
     * Limit how many SelectedTravelItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SelectedTravelItem upsert
   */
  export type SelectedTravelItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SelectedTravelItem to update in case it exists.
     */
    where: SelectedTravelItemWhereUniqueInput
    /**
     * In case the SelectedTravelItem found by the `where` argument doesn't exist, create a new SelectedTravelItem with this data.
     */
    create: XOR<SelectedTravelItemCreateInput, SelectedTravelItemUncheckedCreateInput>
    /**
     * In case the SelectedTravelItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SelectedTravelItemUpdateInput, SelectedTravelItemUncheckedUpdateInput>
  }

  /**
   * SelectedTravelItem delete
   */
  export type SelectedTravelItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
    /**
     * Filter which SelectedTravelItem to delete.
     */
    where: SelectedTravelItemWhereUniqueInput
  }

  /**
   * SelectedTravelItem deleteMany
   */
  export type SelectedTravelItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelectedTravelItems to delete
     */
    where?: SelectedTravelItemWhereInput
    /**
     * Limit how many SelectedTravelItems to delete.
     */
    limit?: number
  }

  /**
   * SelectedTravelItem.travelItem
   */
  export type SelectedTravelItem$travelItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelItem
     */
    select?: TravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelItem
     */
    omit?: TravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelItemInclude<ExtArgs> | null
    where?: TravelItemWhereInput
  }

  /**
   * SelectedTravelItem.user
   */
  export type SelectedTravelItem$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SelectedTravelItem without action
   */
  export type SelectedTravelItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedTravelItem
     */
    select?: SelectedTravelItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedTravelItem
     */
    omit?: SelectedTravelItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedTravelItemInclude<ExtArgs> | null
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
    id: 'id',
    username: 'username',
    role: 'role',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TravelItemScalarFieldEnum: {
    id: 'id',
    description: 'description',
    Title: 'Title',
    Image: 'Image',
    Price: 'Price'
  };

  export type TravelItemScalarFieldEnum = (typeof TravelItemScalarFieldEnum)[keyof typeof TravelItemScalarFieldEnum]


  export const SelectedTravelItemScalarFieldEnum: {
    id: 'id',
    travelItemId: 'travelItemId',
    userId: 'userId'
  };

  export type SelectedTravelItemScalarFieldEnum = (typeof SelectedTravelItemScalarFieldEnum)[keyof typeof SelectedTravelItemScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    SelectedTravelItem?: SelectedTravelItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    SelectedTravelItem?: SelectedTravelItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    SelectedTravelItem?: SelectedTravelItemListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TravelItemWhereInput = {
    AND?: TravelItemWhereInput | TravelItemWhereInput[]
    OR?: TravelItemWhereInput[]
    NOT?: TravelItemWhereInput | TravelItemWhereInput[]
    id?: IntFilter<"TravelItem"> | number
    description?: StringNullableFilter<"TravelItem"> | string | null
    Title?: StringFilter<"TravelItem"> | string
    Image?: StringNullableFilter<"TravelItem"> | string | null
    Price?: FloatFilter<"TravelItem"> | number
    SelectedTravelItem?: SelectedTravelItemListRelationFilter
  }

  export type TravelItemOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    Title?: SortOrder
    Image?: SortOrderInput | SortOrder
    Price?: SortOrder
    SelectedTravelItem?: SelectedTravelItemOrderByRelationAggregateInput
  }

  export type TravelItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TravelItemWhereInput | TravelItemWhereInput[]
    OR?: TravelItemWhereInput[]
    NOT?: TravelItemWhereInput | TravelItemWhereInput[]
    description?: StringNullableFilter<"TravelItem"> | string | null
    Title?: StringFilter<"TravelItem"> | string
    Image?: StringNullableFilter<"TravelItem"> | string | null
    Price?: FloatFilter<"TravelItem"> | number
    SelectedTravelItem?: SelectedTravelItemListRelationFilter
  }, "id">

  export type TravelItemOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    Title?: SortOrder
    Image?: SortOrderInput | SortOrder
    Price?: SortOrder
    _count?: TravelItemCountOrderByAggregateInput
    _avg?: TravelItemAvgOrderByAggregateInput
    _max?: TravelItemMaxOrderByAggregateInput
    _min?: TravelItemMinOrderByAggregateInput
    _sum?: TravelItemSumOrderByAggregateInput
  }

  export type TravelItemScalarWhereWithAggregatesInput = {
    AND?: TravelItemScalarWhereWithAggregatesInput | TravelItemScalarWhereWithAggregatesInput[]
    OR?: TravelItemScalarWhereWithAggregatesInput[]
    NOT?: TravelItemScalarWhereWithAggregatesInput | TravelItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TravelItem"> | number
    description?: StringNullableWithAggregatesFilter<"TravelItem"> | string | null
    Title?: StringWithAggregatesFilter<"TravelItem"> | string
    Image?: StringNullableWithAggregatesFilter<"TravelItem"> | string | null
    Price?: FloatWithAggregatesFilter<"TravelItem"> | number
  }

  export type SelectedTravelItemWhereInput = {
    AND?: SelectedTravelItemWhereInput | SelectedTravelItemWhereInput[]
    OR?: SelectedTravelItemWhereInput[]
    NOT?: SelectedTravelItemWhereInput | SelectedTravelItemWhereInput[]
    id?: IntFilter<"SelectedTravelItem"> | number
    travelItemId?: IntNullableFilter<"SelectedTravelItem"> | number | null
    userId?: IntNullableFilter<"SelectedTravelItem"> | number | null
    travelItem?: XOR<TravelItemNullableScalarRelationFilter, TravelItemWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SelectedTravelItemOrderByWithRelationInput = {
    id?: SortOrder
    travelItemId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    travelItem?: TravelItemOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SelectedTravelItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SelectedTravelItemWhereInput | SelectedTravelItemWhereInput[]
    OR?: SelectedTravelItemWhereInput[]
    NOT?: SelectedTravelItemWhereInput | SelectedTravelItemWhereInput[]
    travelItemId?: IntNullableFilter<"SelectedTravelItem"> | number | null
    userId?: IntNullableFilter<"SelectedTravelItem"> | number | null
    travelItem?: XOR<TravelItemNullableScalarRelationFilter, TravelItemWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SelectedTravelItemOrderByWithAggregationInput = {
    id?: SortOrder
    travelItemId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: SelectedTravelItemCountOrderByAggregateInput
    _avg?: SelectedTravelItemAvgOrderByAggregateInput
    _max?: SelectedTravelItemMaxOrderByAggregateInput
    _min?: SelectedTravelItemMinOrderByAggregateInput
    _sum?: SelectedTravelItemSumOrderByAggregateInput
  }

  export type SelectedTravelItemScalarWhereWithAggregatesInput = {
    AND?: SelectedTravelItemScalarWhereWithAggregatesInput | SelectedTravelItemScalarWhereWithAggregatesInput[]
    OR?: SelectedTravelItemScalarWhereWithAggregatesInput[]
    NOT?: SelectedTravelItemScalarWhereWithAggregatesInput | SelectedTravelItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SelectedTravelItem"> | number
    travelItemId?: IntNullableWithAggregatesFilter<"SelectedTravelItem"> | number | null
    userId?: IntNullableWithAggregatesFilter<"SelectedTravelItem"> | number | null
  }

  export type UserCreateInput = {
    username: string
    role?: $Enums.Role
    password: string
    SelectedTravelItem?: SelectedTravelItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    role?: $Enums.Role
    password: string
    SelectedTravelItem?: SelectedTravelItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    SelectedTravelItem?: SelectedTravelItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    SelectedTravelItem?: SelectedTravelItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    role?: $Enums.Role
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TravelItemCreateInput = {
    description?: string | null
    Title: string
    Image?: string | null
    Price: number
    SelectedTravelItem?: SelectedTravelItemCreateNestedManyWithoutTravelItemInput
  }

  export type TravelItemUncheckedCreateInput = {
    id?: number
    description?: string | null
    Title: string
    Image?: string | null
    Price: number
    SelectedTravelItem?: SelectedTravelItemUncheckedCreateNestedManyWithoutTravelItemInput
  }

  export type TravelItemUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: FloatFieldUpdateOperationsInput | number
    SelectedTravelItem?: SelectedTravelItemUpdateManyWithoutTravelItemNestedInput
  }

  export type TravelItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: FloatFieldUpdateOperationsInput | number
    SelectedTravelItem?: SelectedTravelItemUncheckedUpdateManyWithoutTravelItemNestedInput
  }

  export type TravelItemCreateManyInput = {
    id?: number
    description?: string | null
    Title: string
    Image?: string | null
    Price: number
  }

  export type TravelItemUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type TravelItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type SelectedTravelItemCreateInput = {
    travelItem?: TravelItemCreateNestedOneWithoutSelectedTravelItemInput
    user?: UserCreateNestedOneWithoutSelectedTravelItemInput
  }

  export type SelectedTravelItemUncheckedCreateInput = {
    id?: number
    travelItemId?: number | null
    userId?: number | null
  }

  export type SelectedTravelItemUpdateInput = {
    travelItem?: TravelItemUpdateOneWithoutSelectedTravelItemNestedInput
    user?: UserUpdateOneWithoutSelectedTravelItemNestedInput
  }

  export type SelectedTravelItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    travelItemId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SelectedTravelItemCreateManyInput = {
    id?: number
    travelItemId?: number | null
    userId?: number | null
  }

  export type SelectedTravelItemUpdateManyMutationInput = {

  }

  export type SelectedTravelItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    travelItemId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SelectedTravelItemListRelationFilter = {
    every?: SelectedTravelItemWhereInput
    some?: SelectedTravelItemWhereInput
    none?: SelectedTravelItemWhereInput
  }

  export type SelectedTravelItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TravelItemCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    Title?: SortOrder
    Image?: SortOrder
    Price?: SortOrder
  }

  export type TravelItemAvgOrderByAggregateInput = {
    id?: SortOrder
    Price?: SortOrder
  }

  export type TravelItemMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    Title?: SortOrder
    Image?: SortOrder
    Price?: SortOrder
  }

  export type TravelItemMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    Title?: SortOrder
    Image?: SortOrder
    Price?: SortOrder
  }

  export type TravelItemSumOrderByAggregateInput = {
    id?: SortOrder
    Price?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type TravelItemNullableScalarRelationFilter = {
    is?: TravelItemWhereInput | null
    isNot?: TravelItemWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SelectedTravelItemCountOrderByAggregateInput = {
    id?: SortOrder
    travelItemId?: SortOrder
    userId?: SortOrder
  }

  export type SelectedTravelItemAvgOrderByAggregateInput = {
    id?: SortOrder
    travelItemId?: SortOrder
    userId?: SortOrder
  }

  export type SelectedTravelItemMaxOrderByAggregateInput = {
    id?: SortOrder
    travelItemId?: SortOrder
    userId?: SortOrder
  }

  export type SelectedTravelItemMinOrderByAggregateInput = {
    id?: SortOrder
    travelItemId?: SortOrder
    userId?: SortOrder
  }

  export type SelectedTravelItemSumOrderByAggregateInput = {
    id?: SortOrder
    travelItemId?: SortOrder
    userId?: SortOrder
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

  export type SelectedTravelItemCreateNestedManyWithoutUserInput = {
    create?: XOR<SelectedTravelItemCreateWithoutUserInput, SelectedTravelItemUncheckedCreateWithoutUserInput> | SelectedTravelItemCreateWithoutUserInput[] | SelectedTravelItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SelectedTravelItemCreateOrConnectWithoutUserInput | SelectedTravelItemCreateOrConnectWithoutUserInput[]
    createMany?: SelectedTravelItemCreateManyUserInputEnvelope
    connect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
  }

  export type SelectedTravelItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SelectedTravelItemCreateWithoutUserInput, SelectedTravelItemUncheckedCreateWithoutUserInput> | SelectedTravelItemCreateWithoutUserInput[] | SelectedTravelItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SelectedTravelItemCreateOrConnectWithoutUserInput | SelectedTravelItemCreateOrConnectWithoutUserInput[]
    createMany?: SelectedTravelItemCreateManyUserInputEnvelope
    connect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SelectedTravelItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<SelectedTravelItemCreateWithoutUserInput, SelectedTravelItemUncheckedCreateWithoutUserInput> | SelectedTravelItemCreateWithoutUserInput[] | SelectedTravelItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SelectedTravelItemCreateOrConnectWithoutUserInput | SelectedTravelItemCreateOrConnectWithoutUserInput[]
    upsert?: SelectedTravelItemUpsertWithWhereUniqueWithoutUserInput | SelectedTravelItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SelectedTravelItemCreateManyUserInputEnvelope
    set?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    disconnect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    delete?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    connect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    update?: SelectedTravelItemUpdateWithWhereUniqueWithoutUserInput | SelectedTravelItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SelectedTravelItemUpdateManyWithWhereWithoutUserInput | SelectedTravelItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SelectedTravelItemScalarWhereInput | SelectedTravelItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SelectedTravelItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SelectedTravelItemCreateWithoutUserInput, SelectedTravelItemUncheckedCreateWithoutUserInput> | SelectedTravelItemCreateWithoutUserInput[] | SelectedTravelItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SelectedTravelItemCreateOrConnectWithoutUserInput | SelectedTravelItemCreateOrConnectWithoutUserInput[]
    upsert?: SelectedTravelItemUpsertWithWhereUniqueWithoutUserInput | SelectedTravelItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SelectedTravelItemCreateManyUserInputEnvelope
    set?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    disconnect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    delete?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    connect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    update?: SelectedTravelItemUpdateWithWhereUniqueWithoutUserInput | SelectedTravelItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SelectedTravelItemUpdateManyWithWhereWithoutUserInput | SelectedTravelItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SelectedTravelItemScalarWhereInput | SelectedTravelItemScalarWhereInput[]
  }

  export type SelectedTravelItemCreateNestedManyWithoutTravelItemInput = {
    create?: XOR<SelectedTravelItemCreateWithoutTravelItemInput, SelectedTravelItemUncheckedCreateWithoutTravelItemInput> | SelectedTravelItemCreateWithoutTravelItemInput[] | SelectedTravelItemUncheckedCreateWithoutTravelItemInput[]
    connectOrCreate?: SelectedTravelItemCreateOrConnectWithoutTravelItemInput | SelectedTravelItemCreateOrConnectWithoutTravelItemInput[]
    createMany?: SelectedTravelItemCreateManyTravelItemInputEnvelope
    connect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
  }

  export type SelectedTravelItemUncheckedCreateNestedManyWithoutTravelItemInput = {
    create?: XOR<SelectedTravelItemCreateWithoutTravelItemInput, SelectedTravelItemUncheckedCreateWithoutTravelItemInput> | SelectedTravelItemCreateWithoutTravelItemInput[] | SelectedTravelItemUncheckedCreateWithoutTravelItemInput[]
    connectOrCreate?: SelectedTravelItemCreateOrConnectWithoutTravelItemInput | SelectedTravelItemCreateOrConnectWithoutTravelItemInput[]
    createMany?: SelectedTravelItemCreateManyTravelItemInputEnvelope
    connect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SelectedTravelItemUpdateManyWithoutTravelItemNestedInput = {
    create?: XOR<SelectedTravelItemCreateWithoutTravelItemInput, SelectedTravelItemUncheckedCreateWithoutTravelItemInput> | SelectedTravelItemCreateWithoutTravelItemInput[] | SelectedTravelItemUncheckedCreateWithoutTravelItemInput[]
    connectOrCreate?: SelectedTravelItemCreateOrConnectWithoutTravelItemInput | SelectedTravelItemCreateOrConnectWithoutTravelItemInput[]
    upsert?: SelectedTravelItemUpsertWithWhereUniqueWithoutTravelItemInput | SelectedTravelItemUpsertWithWhereUniqueWithoutTravelItemInput[]
    createMany?: SelectedTravelItemCreateManyTravelItemInputEnvelope
    set?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    disconnect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    delete?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    connect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    update?: SelectedTravelItemUpdateWithWhereUniqueWithoutTravelItemInput | SelectedTravelItemUpdateWithWhereUniqueWithoutTravelItemInput[]
    updateMany?: SelectedTravelItemUpdateManyWithWhereWithoutTravelItemInput | SelectedTravelItemUpdateManyWithWhereWithoutTravelItemInput[]
    deleteMany?: SelectedTravelItemScalarWhereInput | SelectedTravelItemScalarWhereInput[]
  }

  export type SelectedTravelItemUncheckedUpdateManyWithoutTravelItemNestedInput = {
    create?: XOR<SelectedTravelItemCreateWithoutTravelItemInput, SelectedTravelItemUncheckedCreateWithoutTravelItemInput> | SelectedTravelItemCreateWithoutTravelItemInput[] | SelectedTravelItemUncheckedCreateWithoutTravelItemInput[]
    connectOrCreate?: SelectedTravelItemCreateOrConnectWithoutTravelItemInput | SelectedTravelItemCreateOrConnectWithoutTravelItemInput[]
    upsert?: SelectedTravelItemUpsertWithWhereUniqueWithoutTravelItemInput | SelectedTravelItemUpsertWithWhereUniqueWithoutTravelItemInput[]
    createMany?: SelectedTravelItemCreateManyTravelItemInputEnvelope
    set?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    disconnect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    delete?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    connect?: SelectedTravelItemWhereUniqueInput | SelectedTravelItemWhereUniqueInput[]
    update?: SelectedTravelItemUpdateWithWhereUniqueWithoutTravelItemInput | SelectedTravelItemUpdateWithWhereUniqueWithoutTravelItemInput[]
    updateMany?: SelectedTravelItemUpdateManyWithWhereWithoutTravelItemInput | SelectedTravelItemUpdateManyWithWhereWithoutTravelItemInput[]
    deleteMany?: SelectedTravelItemScalarWhereInput | SelectedTravelItemScalarWhereInput[]
  }

  export type TravelItemCreateNestedOneWithoutSelectedTravelItemInput = {
    create?: XOR<TravelItemCreateWithoutSelectedTravelItemInput, TravelItemUncheckedCreateWithoutSelectedTravelItemInput>
    connectOrCreate?: TravelItemCreateOrConnectWithoutSelectedTravelItemInput
    connect?: TravelItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSelectedTravelItemInput = {
    create?: XOR<UserCreateWithoutSelectedTravelItemInput, UserUncheckedCreateWithoutSelectedTravelItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutSelectedTravelItemInput
    connect?: UserWhereUniqueInput
  }

  export type TravelItemUpdateOneWithoutSelectedTravelItemNestedInput = {
    create?: XOR<TravelItemCreateWithoutSelectedTravelItemInput, TravelItemUncheckedCreateWithoutSelectedTravelItemInput>
    connectOrCreate?: TravelItemCreateOrConnectWithoutSelectedTravelItemInput
    upsert?: TravelItemUpsertWithoutSelectedTravelItemInput
    disconnect?: TravelItemWhereInput | boolean
    delete?: TravelItemWhereInput | boolean
    connect?: TravelItemWhereUniqueInput
    update?: XOR<XOR<TravelItemUpdateToOneWithWhereWithoutSelectedTravelItemInput, TravelItemUpdateWithoutSelectedTravelItemInput>, TravelItemUncheckedUpdateWithoutSelectedTravelItemInput>
  }

  export type UserUpdateOneWithoutSelectedTravelItemNestedInput = {
    create?: XOR<UserCreateWithoutSelectedTravelItemInput, UserUncheckedCreateWithoutSelectedTravelItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutSelectedTravelItemInput
    upsert?: UserUpsertWithoutSelectedTravelItemInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSelectedTravelItemInput, UserUpdateWithoutSelectedTravelItemInput>, UserUncheckedUpdateWithoutSelectedTravelItemInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type SelectedTravelItemCreateWithoutUserInput = {
    travelItem?: TravelItemCreateNestedOneWithoutSelectedTravelItemInput
  }

  export type SelectedTravelItemUncheckedCreateWithoutUserInput = {
    id?: number
    travelItemId?: number | null
  }

  export type SelectedTravelItemCreateOrConnectWithoutUserInput = {
    where: SelectedTravelItemWhereUniqueInput
    create: XOR<SelectedTravelItemCreateWithoutUserInput, SelectedTravelItemUncheckedCreateWithoutUserInput>
  }

  export type SelectedTravelItemCreateManyUserInputEnvelope = {
    data: SelectedTravelItemCreateManyUserInput | SelectedTravelItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SelectedTravelItemUpsertWithWhereUniqueWithoutUserInput = {
    where: SelectedTravelItemWhereUniqueInput
    update: XOR<SelectedTravelItemUpdateWithoutUserInput, SelectedTravelItemUncheckedUpdateWithoutUserInput>
    create: XOR<SelectedTravelItemCreateWithoutUserInput, SelectedTravelItemUncheckedCreateWithoutUserInput>
  }

  export type SelectedTravelItemUpdateWithWhereUniqueWithoutUserInput = {
    where: SelectedTravelItemWhereUniqueInput
    data: XOR<SelectedTravelItemUpdateWithoutUserInput, SelectedTravelItemUncheckedUpdateWithoutUserInput>
  }

  export type SelectedTravelItemUpdateManyWithWhereWithoutUserInput = {
    where: SelectedTravelItemScalarWhereInput
    data: XOR<SelectedTravelItemUpdateManyMutationInput, SelectedTravelItemUncheckedUpdateManyWithoutUserInput>
  }

  export type SelectedTravelItemScalarWhereInput = {
    AND?: SelectedTravelItemScalarWhereInput | SelectedTravelItemScalarWhereInput[]
    OR?: SelectedTravelItemScalarWhereInput[]
    NOT?: SelectedTravelItemScalarWhereInput | SelectedTravelItemScalarWhereInput[]
    id?: IntFilter<"SelectedTravelItem"> | number
    travelItemId?: IntNullableFilter<"SelectedTravelItem"> | number | null
    userId?: IntNullableFilter<"SelectedTravelItem"> | number | null
  }

  export type SelectedTravelItemCreateWithoutTravelItemInput = {
    user?: UserCreateNestedOneWithoutSelectedTravelItemInput
  }

  export type SelectedTravelItemUncheckedCreateWithoutTravelItemInput = {
    id?: number
    userId?: number | null
  }

  export type SelectedTravelItemCreateOrConnectWithoutTravelItemInput = {
    where: SelectedTravelItemWhereUniqueInput
    create: XOR<SelectedTravelItemCreateWithoutTravelItemInput, SelectedTravelItemUncheckedCreateWithoutTravelItemInput>
  }

  export type SelectedTravelItemCreateManyTravelItemInputEnvelope = {
    data: SelectedTravelItemCreateManyTravelItemInput | SelectedTravelItemCreateManyTravelItemInput[]
    skipDuplicates?: boolean
  }

  export type SelectedTravelItemUpsertWithWhereUniqueWithoutTravelItemInput = {
    where: SelectedTravelItemWhereUniqueInput
    update: XOR<SelectedTravelItemUpdateWithoutTravelItemInput, SelectedTravelItemUncheckedUpdateWithoutTravelItemInput>
    create: XOR<SelectedTravelItemCreateWithoutTravelItemInput, SelectedTravelItemUncheckedCreateWithoutTravelItemInput>
  }

  export type SelectedTravelItemUpdateWithWhereUniqueWithoutTravelItemInput = {
    where: SelectedTravelItemWhereUniqueInput
    data: XOR<SelectedTravelItemUpdateWithoutTravelItemInput, SelectedTravelItemUncheckedUpdateWithoutTravelItemInput>
  }

  export type SelectedTravelItemUpdateManyWithWhereWithoutTravelItemInput = {
    where: SelectedTravelItemScalarWhereInput
    data: XOR<SelectedTravelItemUpdateManyMutationInput, SelectedTravelItemUncheckedUpdateManyWithoutTravelItemInput>
  }

  export type TravelItemCreateWithoutSelectedTravelItemInput = {
    description?: string | null
    Title: string
    Image?: string | null
    Price: number
  }

  export type TravelItemUncheckedCreateWithoutSelectedTravelItemInput = {
    id?: number
    description?: string | null
    Title: string
    Image?: string | null
    Price: number
  }

  export type TravelItemCreateOrConnectWithoutSelectedTravelItemInput = {
    where: TravelItemWhereUniqueInput
    create: XOR<TravelItemCreateWithoutSelectedTravelItemInput, TravelItemUncheckedCreateWithoutSelectedTravelItemInput>
  }

  export type UserCreateWithoutSelectedTravelItemInput = {
    username: string
    role?: $Enums.Role
    password: string
  }

  export type UserUncheckedCreateWithoutSelectedTravelItemInput = {
    id?: number
    username: string
    role?: $Enums.Role
    password: string
  }

  export type UserCreateOrConnectWithoutSelectedTravelItemInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSelectedTravelItemInput, UserUncheckedCreateWithoutSelectedTravelItemInput>
  }

  export type TravelItemUpsertWithoutSelectedTravelItemInput = {
    update: XOR<TravelItemUpdateWithoutSelectedTravelItemInput, TravelItemUncheckedUpdateWithoutSelectedTravelItemInput>
    create: XOR<TravelItemCreateWithoutSelectedTravelItemInput, TravelItemUncheckedCreateWithoutSelectedTravelItemInput>
    where?: TravelItemWhereInput
  }

  export type TravelItemUpdateToOneWithWhereWithoutSelectedTravelItemInput = {
    where?: TravelItemWhereInput
    data: XOR<TravelItemUpdateWithoutSelectedTravelItemInput, TravelItemUncheckedUpdateWithoutSelectedTravelItemInput>
  }

  export type TravelItemUpdateWithoutSelectedTravelItemInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type TravelItemUncheckedUpdateWithoutSelectedTravelItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutSelectedTravelItemInput = {
    update: XOR<UserUpdateWithoutSelectedTravelItemInput, UserUncheckedUpdateWithoutSelectedTravelItemInput>
    create: XOR<UserCreateWithoutSelectedTravelItemInput, UserUncheckedCreateWithoutSelectedTravelItemInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSelectedTravelItemInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSelectedTravelItemInput, UserUncheckedUpdateWithoutSelectedTravelItemInput>
  }

  export type UserUpdateWithoutSelectedTravelItemInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutSelectedTravelItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SelectedTravelItemCreateManyUserInput = {
    id?: number
    travelItemId?: number | null
  }

  export type SelectedTravelItemUpdateWithoutUserInput = {
    travelItem?: TravelItemUpdateOneWithoutSelectedTravelItemNestedInput
  }

  export type SelectedTravelItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    travelItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SelectedTravelItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    travelItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SelectedTravelItemCreateManyTravelItemInput = {
    id?: number
    userId?: number | null
  }

  export type SelectedTravelItemUpdateWithoutTravelItemInput = {
    user?: UserUpdateOneWithoutSelectedTravelItemNestedInput
  }

  export type SelectedTravelItemUncheckedUpdateWithoutTravelItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SelectedTravelItemUncheckedUpdateManyWithoutTravelItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
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