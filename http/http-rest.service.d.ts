import { Headers, RequestOptionsArgs, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export interface IRestTransform {
    (response: Response): any;
}
export interface IRestConfig {
    baseHeaders?: Headers;
    dynamicHeaders?: () => Headers;
    baseUrl: string;
    path?: string;
    transform?: IRestTransform;
}
export interface IRestQuery {
    [key: string]: any;
}
export interface IHttp {
    delete: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
    get: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
    head: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
    patch: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
    post: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
    put: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
    request: (url: string | Request, options?: RequestOptionsArgs) => Observable<Response>;
}
export declare abstract class RESTService<T> {
    private _path;
    private _base;
    private _baseHeaders;
    private _dynamicHeaders;
    protected transform: IRestTransform;
    protected http: IHttp;
    constructor(http: IHttp, config: IRestConfig);
    query(query?: IRestQuery, transform?: IRestTransform): Observable<any>;
    get(id: string | number, transform?: IRestTransform): Observable<any>;
    create(obj: T, transform?: IRestTransform): Observable<any>;
    update(id: string | number, obj: T, transform?: IRestTransform): Observable<any>;
    delete(id: string | number, transform?: IRestTransform): Observable<any>;
    protected buildRequestOptions(): RequestOptionsArgs;
    protected buildUrl(id?: string | number, query?: IRestQuery): string;
    protected buildQuery(query: IRestQuery): string;
}
