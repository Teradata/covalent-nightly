import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators/filter';
import { pairwise } from 'rxjs/operators/pairwise';
var RouterPathService = RouterPathService_1 = (function () {
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events.pipe(filter(function (e) { return e instanceof RoutesRecognized; }), pairwise()).subscribe(function (e) {
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
RouterPathService = RouterPathService_1 = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Router])
], RouterPathService);
export { RouterPathService };
var RouterPathService_1;
//# sourceMappingURL=router-path.service.js.map