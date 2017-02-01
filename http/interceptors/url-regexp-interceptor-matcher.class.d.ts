import { RequestOptionsArgs } from '@angular/http';
import { IHttpInterceptorMapping } from './http-interceptor-mapping.interface';
import { IHttpInterceptorMatcher } from './http-interceptor-matcher.interface';
/**
 * Concrete implementation for http interceptor matchers.
 * This implementation uses regex to check mapping paths vs request url.
 */
export declare class URLRegExpInterceptorMatcher implements IHttpInterceptorMatcher {
    matches(options: RequestOptionsArgs, mapping: IHttpInterceptorMapping): boolean;
}
