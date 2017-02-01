var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
var RouterPathService = RouterPathService_1 = (function () {
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events
            .filter(function (e) { return e instanceof RoutesRecognized; })
            .pairwise()
            .subscribe(function (e) {
            RouterPathService_1._previousRoute = e[0].urlAfterRedirects;
        });
    }
    /*
    * Utility function to get the route the user previously went to
    * good for use in a "back button"
    */
    RouterPathService.prototype.getPreviousRoute = function () {
        return RouterPathService_1._previousRoute;
    };
    return RouterPathService;
}());
RouterPathService._previousRoute = '/';
RouterPathService = RouterPathService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router])
], RouterPathService);
export { RouterPathService };
var RouterPathService_1;
//# sourceMappingURL=router.path.service.js.map