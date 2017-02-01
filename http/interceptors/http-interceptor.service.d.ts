import { Type, Injector } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IHttpInterceptorMatcher } from './http-interceptor-matcher.interface';
export interface IHttpInterceptorConfig {
    interceptor: Type<any>;
    paths: string[];
}
export declare class HttpInterceptorService {
    private _http;
    private _injector;
    private _httpInterceptorMatcher;
    private _requestInterceptors;
    constructor(_http: Http, _injector: Injector, _httpInterceptorMatcher: IHttpInterceptorMatcher, requestInterceptorConfigs: IHttpInterceptorConfig[]);
    delete(url: string, requestOptions?: RequestOptionsArgs): Observable<Response>;
    get(url: string, requestOptions?: RequestOptionsArgs): Observable<Response>;
    head(url: string, requestOptions?: RequestOptionsArgs): Observable<Response>;
    patch(url: string, data: any, requestOptions?: RequestOptionsArgs): Observable<Response>;
    post(url: string, data: any, requestOptions?: RequestOptionsArgs): Observable<Response>;
    put(url: string, data: any, requestOptions?: RequestOptionsArgs): Observable<Response>;
    request(url: string | Request, requestOptions?: RequestOptionsArgs): Observable<Response>;
    private _setupRequest(url, requestOptions, interceptors);
    private _requestResolve(requestOptions, interceptors);
    private _responseResolve(response, interceptors);
    private _responseErrorResolve(error, interceptors);
}
