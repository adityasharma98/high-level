import axios from "axios";
import { RestMethods } from "../../../constants";

export class RestApiService {
  private static async callApi<ResObj, ReqObj = object>(
    method: RestMethods,
    url: string,
    data?: ReqObj,
    headers?: Record<string, string | number>,
    timeout?: number
  ) {
    let response: ResObj;
    axios.defaults.timeoutErrorMessage = "TIMEOUT_ERROR";
    switch (method) {
      case "GET":
        response = (
          await axios.get<ResObj>(url, {
            headers: { "Content-Type": "application/json", ...headers },
            timeout: timeout,
          })
        ).data;
        break;
      case "POST":
        response = (
          await axios.post<ResObj>(url, data, {
            headers: { "Content-Type": "application/json", ...headers },
            timeout: timeout,
          })
        ).data;
        break;
      case "PUT":
        response = (
          await axios.put<ResObj>(url, data, {
            headers: { "Content-Type": "application/json", ...headers },
            timeout: timeout,
          })
        ).data;
        break;
      case "DELETE":
        response = (
          await axios.delete<ResObj>(url, {
            headers: { "Content-Type": "application/json", ...headers },
            timeout: timeout,
          })
        ).data;
        break;
      default:
        throw new Error(`Invalid HTTP method: ${method}`);
    }
    return response;
  }

  static async get<R>(
    url: string,
    headers?: Record<string, string | number>,
    timeout?: number
  ): Promise<R> {
    return this.callApi<R>(RestMethods.GET, url, null, headers, timeout);
  }

  static async post<T, R>(
    url: string,
    data: T,
    headers?: Record<string, string | number>,
    timeout?: number
  ): Promise<R> {
    return this.callApi<R, T>(RestMethods.POST, url, data, headers, timeout);
  }

  static async put<T, R>(
    url: string,
    data: T,
    headers?: Record<string, string | number>,
    timeout?: number
  ): Promise<R> {
    return this.callApi<R, T>(RestMethods.PUT, url, data, headers, timeout);
  }

  static async delete<R>(
    url: string,
    headers?: Record<string, string | number>,
    timeout?: number
  ): Promise<R> {
    return this.callApi<R>(RestMethods.DELETE, url, null, headers, timeout);
  }
}
