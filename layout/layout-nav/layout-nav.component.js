import * as tslib_1 from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Router } from '@angular/router';
var TdLayoutNavComponent = (function () {
    function TdLayoutNavComponent(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLayoutNavComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    tslib_1.__decorate([
        Input('toolbarTitle'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "toolbarTitle", void 0);
    tslib_1.__decorate([
        Input('icon'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input('logo'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "logo", void 0);
    tslib_1.__decorate([
        Input('color'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input('navigationRoute'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "navigationRoute", void 0);
    TdLayoutNavComponent = tslib_1.__decorate([
        Component({
            selector: 'td-layout-nav',
            styles: [".td-menu-button { margin-left: 0px; } /deep/ [dir='rtl'] .td-menu-button { margin-right: 0px; margin-left: 6px; } :host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } "],
            template: "<div layout=\"column\" layout-fill> <md-toolbar [color]=\"color\"> <ng-content select=\"[td-menu-button]\"></ng-content> <span *ngIf=\"icon || logo || toolbarTitle\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\" layout=\"row\" layout-align=\"start center\"> <md-icon *ngIf=\"icon\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo\" [svgIcon]=\"logo\"></md-icon> <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span> </span> <ng-content select=\"[td-toolbar-content]\"></ng-content> </md-toolbar> <div flex layout=\"column\" class=\"content md-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer\"></ng-content> </div> ",
        }),
        tslib_1.__param(0, Optional()),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TdLayoutNavComponent);
    return TdLayoutNavComponent;
}());
export { TdLayoutNavComponent };
//# sourceMappingURL=layout-nav.component.js.map