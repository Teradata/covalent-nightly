var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, Injector, OpaqueToken } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { URLRegExpInterceptorMatcher } from './interceptors/url-regexp-interceptor-matcher.class';
export var HTTP_CONFIG = new OpaqueToken('HTTP_CONFIG');
export function httpFactory(http, injector, config) {
    return new HttpInterceptorService(http, injector, new URLRegExpInterceptorMatcher(), config.interceptors);
}
var CovalentHttpModule = CovalentHttpModule_1 = (function () {
    function CovalentHttpModule() {
    }
    CovalentHttpModule.forRoot = function (config) {
        if (config === void 0) { config = { interceptors: [] }; }
        return {
            ngModule: CovalentHttpModule_1,
            providers: [{
                    provide: HTTP_CONFIG,
                    useValue: config,
                }, {
                    provide: HttpInterceptorService,
                    useFactory: httpFactory,
                    deps: [Http, Injector, HTTP_CONFIG],
                },
            ],
        };
    };
    return CovalentHttpModule;
}());
CovalentHttpModule = CovalentHttpModule_1 = __decorate([
    NgModule({
        imports: [
            HttpModule,
        ],
    })
], CovalentHttpModule);
export { CovalentHttpModule };
var CovalentHttpModule_1;
//# sourceMappingURL=http.module.js.map