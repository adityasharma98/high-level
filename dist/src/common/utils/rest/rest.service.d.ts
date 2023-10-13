export declare class RestApiService {
    private static callApi;
    static get<R>(url: string, headers?: Record<string, string | number>, timeout?: number): Promise<R>;
    static post<T, R>(url: string, data: T, headers?: Record<string, string | number>, timeout?: number): Promise<R>;
    static put<T, R>(url: string, data: T, headers?: Record<string, string | number>, timeout?: number): Promise<R>;
    static delete<R>(url: string, headers?: Record<string, string | number>, timeout?: number): Promise<R>;
}
