import { ModuleWithProviders, Injector, OpaqueToken } from '@angular/core';
import { Http } from '@angular/http';
import { HttpInterceptorService, IHttpInterceptorConfig } from './interceptors/http-interceptor.service';
export declare const HTTP_CONFIG: OpaqueToken;
export declare type HttpConfig = {
    interceptors: IHttpInterceptorConfig[];
};
export declare function httpFactory(http: Http, injector: Injector, config: HttpConfig): HttpInterceptorService;
export declare class CovalentHttpModule {
    static forRoot(config?: HttpConfig): ModuleWithProviders;
}
