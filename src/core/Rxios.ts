import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Observable } from "rxjs";
import { clearToken } from "./authentication/function";
import { BASE_ROUTE } from "./constants/routePaths";
export type RxiosConfig = AxiosRequestConfig;

type BasicObject = Record<string, unknown>;

enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export class Rxios {
  private httpClient: AxiosInstance;

  constructor(options: RxiosConfig = {}) {
    this.httpClient = axios.create(options);
  }

  interceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  };

  private handleUnAuthorized = () => {
    clearToken();
    window.location.reload();
  };

  private observableRequest<T>(config: RxiosConfig) {
    this.httpClient.interceptors.response.use(
      (response) => response,
      (err) => {
        const status = err?.response?.status?.toString();
        if (status === "401") {
          this.handleUnAuthorized();
        } else if (status?.startsWith("5")) {
          window.location.replace(`/${BASE_ROUTE.SOMETHING_WENT_WRONG}`);
        }
        return Promise.reject(err);
      }
    );
    const request = this.httpClient.request<T>(this.interceptor(config));

    return new Observable<T>((subscriber) => {
      request
        .then((response) => {
          subscriber.next(response.data);
        })
        .catch((err: Error) => {
          subscriber.error(err);
        })
        .finally(() => {
          subscriber.complete();
        });
    });
  }

  public get<T>(
    url: string,
    params?: BasicObject,
    config?: AxiosRequestConfig
  ) {
    const request = { method: HttpMethod.GET, url, params, ...config };
    return this.observableRequest<T>(request);
  }

  public post<T>(
    url: string,
    payload: BasicObject,
    config: AxiosRequestConfig = {}
  ) {
    const request = {
      method: HttpMethod.POST,
      url,
      data: payload,
      ...config,
    };
    return this.observableRequest<T>(request);
  }

  public put<T>(
    url: string,
    payload: BasicObject,
    config: AxiosRequestConfig = {}
  ) {
    const request = {
      method: HttpMethod.PUT,
      url,
      data: payload,
      ...config,
    };
    return this.observableRequest<T>(request);
  }

  public patch<T>(
    url: string,
    payload: BasicObject,
    config: AxiosRequestConfig = {}
  ) {
    const request = {
      method: HttpMethod.PATCH,
      url,
      data: payload,
      ...config,
    };
    return this.observableRequest<T>(request);
  }

  public delete<T>(url: string, config: AxiosRequestConfig = {}) {
    const request = {
      method: HttpMethod.DELETE,
      url,
      ...config,
    };
    return this.observableRequest<T>(request);
  }
}

export default Rxios;
