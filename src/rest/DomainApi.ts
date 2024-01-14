/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AbstractJsonSchemaPropertyObject {
  title?: string;
  readOnly?: boolean;
}

export interface Item {
  type?: string;
  properties?: Record<string, AbstractJsonSchemaPropertyObject>;
  requiredProperties?: string[];
}

export interface JsonSchema {
  title?: string;
  description?: string;
  properties?: Record<string, AbstractJsonSchemaPropertyObject>;
  requiredProperties?: string[];
  definitions?: Record<string, Item>;
  type?: string;
  $schema?: string;
}

export type Links = Record<string, Link>;

export interface RepresentationModelObject {
  _links?: Links;
}

export interface Product {
  id?: string;
  storeName?: string;
  name?: string;
  /** @format double */
  price?: number;
  /** @format date */
  date?: string;
  quantityAndUnit?: string;
}

export interface EntityModelProduct {
  storeName?: string;
  name?: string;
  /** @format double */
  price?: number;
  /** @format date */
  date?: string;
  quantityAndUnit?: string;
  _links?: Links;
}

export interface PageMetadata {
  /** @format int64 */
  size?: number;
  /** @format int64 */
  totalElements?: number;
  /** @format int64 */
  totalPages?: number;
  /** @format int64 */
  number?: number;
}

export interface PagedModelEntityModelProduct {
  _embedded?: {
    products?: EntityModelProduct[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface CollectionModelEntityModelProduct {
  _embedded?: {
    products?: EntityModelProduct[];
  };
  _links?: Links;
}

export interface InvoiceLine {
  id?: string;
  /** @format date */
  date?: string;
  product?: string;
  /** @format float */
  price?: number;
  /** @format int32 */
  itemIdentificationIdOfSeller?: number;
  storeName?: string;
  /** @format int32 */
  unitCode?: number;
}

export interface EntityModelInvoiceLine {
  /** @format date */
  date?: string;
  product?: string;
  /** @format float */
  price?: number;
  /** @format int32 */
  itemIdentificationIdOfSeller?: number;
  storeName?: string;
  /** @format int32 */
  unitCode?: number;
  _links?: Links;
}

export interface PagedModelEntityModelInvoiceLine {
  _embedded?: {
    invoiceLines?: EntityModelInvoiceLine[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface CollectionModelEntityModelInvoiceLine {
  _embedded?: {
    invoiceLines?: EntityModelInvoiceLine[];
  };
  _links?: Links;
}

export interface EntityModelRole {
  /** @format int32 */
  roleId?: number;
  authority?: string;
  _links?: Links;
}

export interface PagedModelEntityModelRole {
  _embedded?: {
    roles?: EntityModelRole[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface Invoice {
  id?: string;
  storeName?: string;
  unitCode?: string;
  documentNo?: string;
  /** @format date */
  date?: string;
  /** @uniqueItems true */
  invoiceLineList?: InvoiceLine[];
  /** @format float */
  totalCost?: number;
}

export interface EntityModelInvoice {
  storeName?: string;
  unitCode?: string;
  documentNo?: string;
  /** @format date */
  date?: string;
  /** @uniqueItems true */
  invoiceLineList?: InvoiceLine[];
  /** @format float */
  totalCost?: number;
  _links?: Links;
}

export interface PagedModelEntityModelInvoice {
  _embedded?: {
    invoices?: EntityModelInvoice[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface CollectionModelEntityModelInvoice {
  _embedded?: {
    invoices?: EntityModelInvoice[];
  };
  _links?: Links;
}

export interface ApplicationUser {
  /** @format int32 */
  userId?: number;
  username?: string;
  password?: string;
  authorities?: GrantedAuthority[];
  enabled?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  /** @format int32 */
  id?: number;
}

export interface GrantedAuthority {
  authority?: string;
}

export interface EntityModelApplicationUser {
  /** @format int32 */
  userId?: number;
  username?: string;
  password?: string;
  enabled?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  /** @format int32 */
  id?: number;
  _links?: Links;
}

export interface PagedModelEntityModelApplicationUser {
  _embedded?: {
    applicationUsers?: EntityModelApplicationUser[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface CollectionModelRole {
  _embedded?: {
    roles?: RoleResponse[];
  };
  _links?: Links;
}

export interface CollectionModelObject {
  _embedded?: {
    objects?: object[];
  };
  _links?: Links;
}

export interface EntityModelClient {
  id?: string;
  clientId?: string;
  /** @format date-time */
  clientIdIssuedAt?: string;
  clientSecret?: string;
  /** @format date-time */
  clientSecretExpiresAt?: string;
  clientName?: string;
  clientAuthenticationMethods?: string;
  authorizationGrantTypes?: string;
  redirectUris?: string;
  postLogoutRedirectUris?: string;
  scopes?: string;
  clientSettings?: string;
  tokenSettings?: string;
  enabled?: boolean;
  username?: string;
  authorities?: GrantedAuthority[];
  password?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  _links?: Links;
}

export interface PagedModelEntityModelClient {
  _embedded?: {
    clients?: EntityModelClient[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface EntityModelKeyValue {
  name?: string;
  key?: string;
  value?: string;
  _links?: Links;
}

export interface PagedModelEntityModelKeyValue {
  _embedded?: {
    keyValues?: EntityModelKeyValue[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface CollectionModelEntityModelKeyValue {
  _embedded?: {
    keyValues?: EntityModelKeyValue[];
  };
  _links?: Links;
}

export interface ApplicationUserRequestBody {
  /** @format int32 */
  userId?: number;
  username?: string;
  password?: string;
  authorities?: string[];
  enabled?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  /** @format int32 */
  id?: number;
}

export interface RoleResponse {
  /** @format int32 */
  roleId?: number;
  authority?: string;
}

export interface ClientRequestBody {
  id?: string;
  clientId?: string;
  /** @format date-time */
  clientIdIssuedAt?: string;
  clientSecret?: string;
  /** @format date-time */
  clientSecretExpiresAt?: string;
  clientName?: string;
  clientAuthenticationMethods?: string;
  authorizationGrantTypes?: string;
  redirectUris?: string;
  postLogoutRedirectUris?: string;
  scopes?: string;
  clientSettings?: string;
  tokenSettings?: string;
  enabled?: boolean;
  username?: string;
  authorities?: GrantedAuthority[];
  password?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
}

export interface InvoiceLineRequestBody {
  id?: string;
  /** @format date */
  date?: string;
  product?: string;
  /** @format float */
  price?: number;
  /** @format int32 */
  itemIdentificationIdOfSeller?: number;
  storeName?: string;
  /** @format int32 */
  unitCode?: number;
}

export interface InvoiceRequestBody {
  id?: string;
  storeName?: string;
  unitCode?: string;
  documentNo?: string;
  /** @format date */
  date?: string;
  /** @uniqueItems true */
  invoiceLineList?: InvoiceLine[];
  /** @format float */
  totalCost?: number;
}

export interface KeyValueRequestBody {
  id?: string;
  name?: string;
  key?: string;
  value?: string;
}

export interface ProductRequestBody {
  id?: string;
  storeName?: string;
  name?: string;
  /** @format double */
  price?: number;
  /** @format date */
  date?: string;
  quantityAndUnit?: string;
}

export interface RoleRequestBody {
  /** @format int32 */
  roleId?: number;
  authority?: string;
}

export interface ExternalInvoiceServiceParameters {
  documentNo?: string;
  /** @format date */
  date?: string;
  /** @format float */
  totalCost?: number;
}

export interface RegistrationDTO {
  username?: string;
  password?: string;
}

export interface LoginResponseDTO {
  user?: ApplicationUser;
  jwt?: string;
}

export interface ProductPriceIncreaseStatistic {
  name: string;
  /** @format double */
  firstPrice?: number;
  /** @format double */
  secondPrice?: number;
  /** @format int32 */
  timeIntervalDays?: number;
  /** @format double */
  ratio?: number;
  /** @format double */
  ratioPerDay?: number;
}

export interface ProductPriceIncreaseStatisticWithTimeTrail {
  productPriceIncreaseStatistic?: ProductPriceIncreaseStatistic;
  invoiceLinesOfASpecificProduct?: Product[];
}

export interface Link {
  href?: string;
  hreflang?: string;
  title?: string;
  type?: string;
  deprecation?: string;
  profile?: string;
  name?: string;
  templated?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8080/invoicebackend";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      return data;
    });
  };
}

/**
 * @title OpenAPI definition
 * @version v0
 * @baseUrl http://localhost:8080/invoicebackend
 */
export class DomainApi<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  applicationUsers = {
    /**
     * @description get-applicationuser
     *
     * @tags application-user-entity-controller
     * @name GetCollectionResourceApplicationuserGet1
     * @request GET:/applicationUsers
     */
    getCollectionResourceApplicationuserGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelApplicationUser, any>({
        path: `/applicationUsers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-applicationuser
     *
     * @tags application-user-entity-controller
     * @name PostCollectionResourceApplicationuserPost
     * @request POST:/applicationUsers
     */
    postCollectionResourceApplicationuserPost: (data: ApplicationUserRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelApplicationUser, any>({
        path: `/applicationUsers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags application-user-search-controller
     * @name ExecuteSearchApplicationuserGet
     * @request GET:/applicationUsers/search/findByUsername
     */
    executeSearchApplicationuserGet: (
      query?: {
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityModelApplicationUser, void>({
        path: `/applicationUsers/search/findByUsername`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-applicationuser
     *
     * @tags application-user-entity-controller
     * @name GetItemResourceApplicationuserGet
     * @request GET:/applicationUsers/{id}
     */
    getItemResourceApplicationuserGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelApplicationUser, void>({
        path: `/applicationUsers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-applicationuser
     *
     * @tags application-user-entity-controller
     * @name PutItemResourceApplicationuserPut
     * @request PUT:/applicationUsers/{id}
     */
    putItemResourceApplicationuserPut: (id: string, data: ApplicationUserRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelApplicationUser, any>({
        path: `/applicationUsers/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-applicationuser
     *
     * @tags application-user-entity-controller
     * @name DeleteItemResourceApplicationuserDelete
     * @request DELETE:/applicationUsers/{id}
     */
    deleteItemResourceApplicationuserDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applicationUsers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-applicationuser
     *
     * @tags application-user-entity-controller
     * @name PatchItemResourceApplicationuserPatch
     * @request PATCH:/applicationUsers/{id}
     */
    patchItemResourceApplicationuserPatch: (id: string, data: ApplicationUserRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelApplicationUser, any>({
        path: `/applicationUsers/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name FollowPropertyReferenceApplicationuserGet1
     * @request GET:/applicationUsers/{id}/authorities
     */
    followPropertyReferenceApplicationuserGet1: (id: string, params: RequestParams = {}) =>
      this.request<CollectionModelRole, void>({
        path: `/applicationUsers/${id}/authorities`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name CreatePropertyReferenceApplicationuserPut
     * @request PUT:/applicationUsers/{id}/authorities
     */
    createPropertyReferenceApplicationuserPut: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<CollectionModelRole, any>({
        path: `/applicationUsers/${id}/authorities`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name DeletePropertyReferenceApplicationuserDelete
     * @request DELETE:/applicationUsers/{id}/authorities
     */
    deletePropertyReferenceApplicationuserDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applicationUsers/${id}/authorities`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name CreatePropertyReferenceApplicationuserPatch
     * @request PATCH:/applicationUsers/{id}/authorities
     */
    createPropertyReferenceApplicationuserPatch: (
      id: string,
      data: CollectionModelObject,
      params: RequestParams = {},
    ) =>
      this.request<CollectionModelRole, any>({
        path: `/applicationUsers/${id}/authorities`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name FollowPropertyReferenceApplicationuserGet
     * @request GET:/applicationUsers/{id}/authorities/{propertyId}
     */
    followPropertyReferenceApplicationuserGet: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<CollectionModelRole, void>({
        path: `/applicationUsers/${id}/authorities/${propertyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description delete-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name DeletePropertyReferenceIdApplicationuserDelete
     * @request DELETE:/applicationUsers/{id}/authorities/{propertyId}
     */
    deletePropertyReferenceIdApplicationuserDelete: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applicationUsers/${id}/authorities/${propertyId}`,
        method: "DELETE",
        ...params,
      }),
  };
  clients = {
    /**
     * @description get-client
     *
     * @tags client-entity-controller
     * @name GetCollectionResourceClientGet1
     * @request GET:/clients
     */
    getCollectionResourceClientGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelClient, any>({
        path: `/clients`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-client
     *
     * @tags client-entity-controller
     * @name PostCollectionResourceClientPost
     * @request POST:/clients
     */
    postCollectionResourceClientPost: (data: ClientRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelClient, any>({
        path: `/clients`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags client-search-controller
     * @name ExecuteSearchClientGet
     * @request GET:/clients/search/findByClientId
     */
    executeSearchClientGet: (
      query?: {
        clientId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityModelClient, void>({
        path: `/clients/search/findByClientId`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-client
     *
     * @tags client-entity-controller
     * @name GetItemResourceClientGet
     * @request GET:/clients/{id}
     */
    getItemResourceClientGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelClient, void>({
        path: `/clients/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-client
     *
     * @tags client-entity-controller
     * @name PutItemResourceClientPut
     * @request PUT:/clients/{id}
     */
    putItemResourceClientPut: (id: string, data: ClientRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelClient, any>({
        path: `/clients/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-client
     *
     * @tags client-entity-controller
     * @name DeleteItemResourceClientDelete
     * @request DELETE:/clients/{id}
     */
    deleteItemResourceClientDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/clients/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-client
     *
     * @tags client-entity-controller
     * @name PatchItemResourceClientPatch
     * @request PATCH:/clients/{id}
     */
    patchItemResourceClientPatch: (id: string, data: ClientRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelClient, any>({
        path: `/clients/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  invoiceLines = {
    /**
     * @description get-invoiceline
     *
     * @tags invoice-line-entity-controller
     * @name GetCollectionResourceInvoicelineGet1
     * @request GET:/invoiceLines
     */
    getCollectionResourceInvoicelineGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelInvoiceLine, any>({
        path: `/invoiceLines`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-invoiceline
     *
     * @tags invoice-line-entity-controller
     * @name PostCollectionResourceInvoicelinePost
     * @request POST:/invoiceLines
     */
    postCollectionResourceInvoicelinePost: (data: InvoiceLineRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelInvoiceLine, any>({
        path: `/invoiceLines`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoice-line-search-controller
     * @name ExecuteSearchInvoicelineGet
     * @request GET:/invoiceLines/search/findByDateBetween
     */
    executeSearchInvoicelineGet: (
      query?: {
        /** @format date */
        start?: string;
        /** @format date */
        end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionModelEntityModelInvoiceLine, void>({
        path: `/invoiceLines/search/findByDateBetween`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoice-line-search-controller
     * @name ExecuteSearchInvoicelineGet1
     * @request GET:/invoiceLines/search/findDistinctProductBy
     */
    executeSearchInvoicelineGet1: (params: RequestParams = {}) =>
      this.request<CollectionModelEntityModelInvoiceLine, void>({
        path: `/invoiceLines/search/findDistinctProductBy`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description get-invoiceline
     *
     * @tags invoice-line-entity-controller
     * @name GetItemResourceInvoicelineGet
     * @request GET:/invoiceLines/{id}
     */
    getItemResourceInvoicelineGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelInvoiceLine, void>({
        path: `/invoiceLines/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-invoiceline
     *
     * @tags invoice-line-entity-controller
     * @name PutItemResourceInvoicelinePut
     * @request PUT:/invoiceLines/{id}
     */
    putItemResourceInvoicelinePut: (id: string, data: InvoiceLineRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelInvoiceLine, any>({
        path: `/invoiceLines/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-invoiceline
     *
     * @tags invoice-line-entity-controller
     * @name DeleteItemResourceInvoicelineDelete
     * @request DELETE:/invoiceLines/{id}
     */
    deleteItemResourceInvoicelineDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/invoiceLines/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-invoiceline
     *
     * @tags invoice-line-entity-controller
     * @name PatchItemResourceInvoicelinePatch
     * @request PATCH:/invoiceLines/{id}
     */
    patchItemResourceInvoicelinePatch: (id: string, data: InvoiceLineRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelInvoiceLine, any>({
        path: `/invoiceLines/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  invoices = {
    /**
     * @description get-invoice
     *
     * @tags invoice-entity-controller
     * @name GetCollectionResourceInvoiceGet1
     * @request GET:/invoices
     */
    getCollectionResourceInvoiceGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelInvoice, any>({
        path: `/invoices`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-invoice
     *
     * @tags invoice-entity-controller
     * @name PostCollectionResourceInvoicePost
     * @request POST:/invoices
     */
    postCollectionResourceInvoicePost: (data: InvoiceRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelInvoice, any>({
        path: `/invoices`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoice-search-controller
     * @name ExecuteSearchInvoiceGet
     * @request GET:/invoices/search/findByDateBetween
     */
    executeSearchInvoiceGet: (
      query?: {
        /** @format date */
        start?: string;
        /** @format date */
        end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionModelEntityModelInvoice, void>({
        path: `/invoices/search/findByDateBetween`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-invoice
     *
     * @tags invoice-entity-controller
     * @name GetItemResourceInvoiceGet
     * @request GET:/invoices/{id}
     */
    getItemResourceInvoiceGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelInvoice, void>({
        path: `/invoices/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-invoice
     *
     * @tags invoice-entity-controller
     * @name PutItemResourceInvoicePut
     * @request PUT:/invoices/{id}
     */
    putItemResourceInvoicePut: (id: string, data: InvoiceRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelInvoice, any>({
        path: `/invoices/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-invoice
     *
     * @tags invoice-entity-controller
     * @name DeleteItemResourceInvoiceDelete
     * @request DELETE:/invoices/{id}
     */
    deleteItemResourceInvoiceDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/invoices/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-invoice
     *
     * @tags invoice-entity-controller
     * @name PatchItemResourceInvoicePatch
     * @request PATCH:/invoices/{id}
     */
    patchItemResourceInvoicePatch: (id: string, data: InvoiceRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelInvoice, any>({
        path: `/invoices/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  keyValues = {
    /**
     * @description get-keyvalue
     *
     * @tags key-value-entity-controller
     * @name GetCollectionResourceKeyvalueGet1
     * @request GET:/keyValues
     */
    getCollectionResourceKeyvalueGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelKeyValue, any>({
        path: `/keyValues`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-keyvalue
     *
     * @tags key-value-entity-controller
     * @name PostCollectionResourceKeyvaluePost
     * @request POST:/keyValues
     */
    postCollectionResourceKeyvaluePost: (data: KeyValueRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelKeyValue, any>({
        path: `/keyValues`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags key-value-search-controller
     * @name ExecuteSearchKeyvalueGet
     * @request GET:/keyValues/search/findByName
     */
    executeSearchKeyvalueGet: (
      query?: {
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionModelEntityModelKeyValue, void>({
        path: `/keyValues/search/findByName`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-keyvalue
     *
     * @tags key-value-entity-controller
     * @name GetItemResourceKeyvalueGet
     * @request GET:/keyValues/{id}
     */
    getItemResourceKeyvalueGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelKeyValue, void>({
        path: `/keyValues/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-keyvalue
     *
     * @tags key-value-entity-controller
     * @name PutItemResourceKeyvaluePut
     * @request PUT:/keyValues/{id}
     */
    putItemResourceKeyvaluePut: (id: string, data: KeyValueRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelKeyValue, any>({
        path: `/keyValues/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-keyvalue
     *
     * @tags key-value-entity-controller
     * @name DeleteItemResourceKeyvalueDelete
     * @request DELETE:/keyValues/{id}
     */
    deleteItemResourceKeyvalueDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/keyValues/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-keyvalue
     *
     * @tags key-value-entity-controller
     * @name PatchItemResourceKeyvaluePatch
     * @request PATCH:/keyValues/{id}
     */
    patchItemResourceKeyvaluePatch: (id: string, data: KeyValueRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelKeyValue, any>({
        path: `/keyValues/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * @description get-product
     *
     * @tags product-entity-controller
     * @name GetCollectionResourceProductGet1
     * @request GET:/products
     */
    getCollectionResourceProductGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelProduct, any>({
        path: `/products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-product
     *
     * @tags product-entity-controller
     * @name PostCollectionResourceProductPost
     * @request POST:/products
     */
    postCollectionResourceProductPost: (data: ProductRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelProduct, any>({
        path: `/products`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-search-controller
     * @name ExecuteSearchProductGet
     * @request GET:/products/search/deleteByStoreNameAndDate
     */
    executeSearchProductGet: (
      query?: {
        storeName?: string;
        /** @format date */
        date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/products/search/deleteByStoreNameAndDate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-search-controller
     * @name ExecuteSearchProductGet1
     * @request GET:/products/search/findByDate
     */
    executeSearchProductGet1: (
      query?: {
        /** @format date */
        date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionModelEntityModelProduct, void>({
        path: `/products/search/findByDate`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-search-controller
     * @name ExecuteSearchProductGet2
     * @request GET:/products/search/findByDateBetween
     */
    executeSearchProductGet2: (
      query?: {
        /** @format date */
        start?: string;
        /** @format date */
        end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionModelEntityModelProduct, void>({
        path: `/products/search/findByDateBetween`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-search-controller
     * @name ExecuteSearchProductGet3
     * @request GET:/products/search/findByStoreName
     */
    executeSearchProductGet3: (
      query?: {
        storeName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionModelEntityModelProduct, void>({
        path: `/products/search/findByStoreName`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-search-controller
     * @name ExecuteSearchProductGet4
     * @request GET:/products/search/findDistinctNameBy
     */
    executeSearchProductGet4: (params: RequestParams = {}) =>
      this.request<CollectionModelEntityModelProduct, void>({
        path: `/products/search/findDistinctNameBy`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-search-controller
     * @name ExecuteSearchProductGet5
     * @request GET:/products/search/getMostRecentProductsOfAllStores
     */
    executeSearchProductGet5: (params: RequestParams = {}) =>
      this.request<CollectionModelEntityModelProduct, void>({
        path: `/products/search/getMostRecentProductsOfAllStores`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description get-product
     *
     * @tags product-entity-controller
     * @name GetItemResourceProductGet
     * @request GET:/products/{id}
     */
    getItemResourceProductGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelProduct, void>({
        path: `/products/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-product
     *
     * @tags product-entity-controller
     * @name PutItemResourceProductPut
     * @request PUT:/products/{id}
     */
    putItemResourceProductPut: (id: string, data: ProductRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelProduct, any>({
        path: `/products/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-product
     *
     * @tags product-entity-controller
     * @name DeleteItemResourceProductDelete
     * @request DELETE:/products/{id}
     */
    deleteItemResourceProductDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/products/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-product
     *
     * @tags product-entity-controller
     * @name PatchItemResourceProductPatch
     * @request PATCH:/products/{id}
     */
    patchItemResourceProductPatch: (id: string, data: ProductRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelProduct, any>({
        path: `/products/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  profile = {
    /**
     * No description
     *
     * @tags profile-controller
     * @name ListAllFormsOfMetadata1
     * @request GET:/profile
     */
    listAllFormsOfMetadata1: (params: RequestParams = {}) =>
      this.request<RepresentationModelObject, any>({
        path: `/profile`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor111
     * @request GET:/profile/applicationUsers
     */
    descriptor111: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/applicationUsers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor112
     * @request GET:/profile/clients
     */
    descriptor112: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/clients`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor113
     * @request GET:/profile/invoiceLines
     */
    descriptor113: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/invoiceLines`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor114
     * @request GET:/profile/invoices
     */
    descriptor114: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/invoices`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor115
     * @request GET:/profile/keyValues
     */
    descriptor115: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/keyValues`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor116
     * @request GET:/profile/products
     */
    descriptor116: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/products`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor117
     * @request GET:/profile/roles
     */
    descriptor117: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  roles = {
    /**
     * @description get-role
     *
     * @tags role-entity-controller
     * @name GetCollectionResourceRoleGet1
     * @request GET:/roles
     */
    getCollectionResourceRoleGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelRole, any>({
        path: `/roles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-role
     *
     * @tags role-entity-controller
     * @name PostCollectionResourceRolePost
     * @request POST:/roles
     */
    postCollectionResourceRolePost: (data: RoleRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelRole, any>({
        path: `/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags role-search-controller
     * @name ExecuteSearchRoleGet
     * @request GET:/roles/search/findByAuthority
     */
    executeSearchRoleGet: (
      query?: {
        authority?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityModelRole, void>({
        path: `/roles/search/findByAuthority`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-role
     *
     * @tags role-entity-controller
     * @name GetItemResourceRoleGet
     * @request GET:/roles/{id}
     */
    getItemResourceRoleGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelRole, void>({
        path: `/roles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-role
     *
     * @tags role-entity-controller
     * @name PutItemResourceRolePut
     * @request PUT:/roles/{id}
     */
    putItemResourceRolePut: (id: string, data: RoleRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelRole, any>({
        path: `/roles/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-role
     *
     * @tags role-entity-controller
     * @name DeleteItemResourceRoleDelete
     * @request DELETE:/roles/{id}
     */
    deleteItemResourceRoleDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/roles/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-role
     *
     * @tags role-entity-controller
     * @name PatchItemResourceRolePatch
     * @request PATCH:/roles/{id}
     */
    patchItemResourceRolePatch: (id: string, data: RoleRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelRole, any>({
        path: `/roles/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  send = {
    /**
     * No description
     *
     * @tags kafka-controller
     * @name SendMessage
     * @request POST:/send
     */
    sendMessage: (
      query: {
        message: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/send`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),
  };
  invoice = {
    /**
     * No description
     *
     * @tags invoice-controller
     * @name GetInvoiceInfo
     * @request POST:/invoice/{store}
     */
    getInvoiceInfo: (store: string, data: ExternalInvoiceServiceParameters, params: RequestParams = {}) =>
      this.request<Invoice, any>({
        path: `/invoice/${store}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoice-controller
     * @name OcrTheImage
     * @request GET:/invoice/ocr
     */
    ocrTheImage: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/invoice/ocr`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags authentication-controller
     * @name RegisterUser
     * @request POST:/auth/register
     */
    registerUser: (data: RegistrationDTO, params: RequestParams = {}) =>
      this.request<ApplicationUser, any>({
        path: `/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags authentication-controller
     * @name LoginUser
     * @request POST:/auth/login
     */
    loginUser: (data: RegistrationDTO, params: RequestParams = {}) =>
      this.request<LoginResponseDTO, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user-controller
     * @name HelloUserController
     * @request GET:/user/
     */
    helloUserController: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/user/`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  statistics = {
    /**
     * No description
     *
     * @tags statistics-controller
     * @name GetProductOfHighestIncreasingRatioByDays
     * @request GET:/statistics/price/increase/highest
     */
    getProductOfHighestIncreasingRatioByDays: (
      query: {
        /** @format int32 */
        daysBefore: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductPriceIncreaseStatisticWithTimeTrail[], any>({
        path: `/statistics/price/increase/highest`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  product = {
    /**
     * No description
     *
     * @tags product-controller
     * @name GetTodaysProductsOfAllStores
     * @request GET:/product/today
     */
    getTodaysProductsOfAllStores: (params: RequestParams = {}) =>
      this.request<Product[], any>({
        path: `/product/today`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name SearchProducts
     * @request GET:/product/search/{partOfProductName}
     */
    searchProducts: (partOfProductName: string, params: RequestParams = {}) =>
      this.request<Product[], any>({
        path: `/product/search/${partOfProductName}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name GetAllProductNamesOfAllStores
     * @request GET:/product/names
     */
    getAllProductNamesOfAllStores: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/product/names`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  keyvalue = {
    /**
     * No description
     *
     * @tags key-value-controller
     * @name GetStoreNameKeyValuesMap
     * @request GET:/keyvalue/store
     */
    getStoreNameKeyValuesMap: (params: RequestParams = {}) =>
      this.request<Record<string, string>, any>({
        path: `/keyvalue/store`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  invoiceLine = {
    /**
     * No description
     *
     * @tags invoice-line-controller
     * @name GetAllProductNames
     * @request GET:/invoiceLine/productNames
     */
    getAllProductNames: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/invoiceLine/productNames`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  client = {
    /**
     * No description
     *
     * @tags client-controller
     * @name Login
     * @request GET:/client/login
     */
    login: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/client/login`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags admin-controller
     * @name HelloAdmineController
     * @request GET:/admin/
     */
    helloAdmineController: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/admin/`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
