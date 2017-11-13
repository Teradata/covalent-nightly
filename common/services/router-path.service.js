import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators/filter';
import { pairwise } from 'rxjs/operators/pairwise';
var RouterPathService = (function () {
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events.pipe(filter(function (e) { return e instanceof RoutesRecognized; }), pairwise()).subscribe(function (e) {
            RouterPathService_1._previousRoute = e[0].urlAfterRedirects;
        });
    }
    RouterPathService_1 = RouterPathService;
    /*
    * Utility function to get the route the user previously went to
    * good for use in a "back button"
    */
    RouterPathService.prototype.getPreviousRoute = function () {
        return RouterPathService_1._previousRoute;
    };
    RouterPathService._previousRoute = '/';
    RouterPathService = RouterPathService_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], RouterPathService);
    return RouterPathService;
    var RouterPathService_1;
}());
export { RouterPathService };
//# sourceMappingURL=router-path.service.js.map