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
            styles: [".td-menu-button { margin-left: 0; } ::ng-deep [dir='rtl'] .td-menu-button { margin-right: 0; margin-left: 6px; } :host { display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host .td-layout-nav-wrapper { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; } :host .td-layout-nav-wrapper .td-layout-nav-toolbar-content { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host .td-layout-nav-wrapper .td-layout-nav-content { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } /*# sourceMappingURL=layout-nav.component.css.map */ "],
            template: "<div class=\"td-layout-nav-wrapper\"> <mat-toolbar [color]=\"color\"> <ng-content select=\"[td-menu-button]\"></ng-content> <span *ngIf=\"icon || logo || toolbarTitle\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\" class=\"td-layout-nav-toolbar-content\"> <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon> <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon> <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span> </span> <ng-content select=\"[td-toolbar-content]\"></ng-content> </mat-toolbar> <div class=\"td-layout-nav-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer\"></ng-content> </div> ",
        }),
        tslib_1.__param(0, Optional()),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TdLayoutNavComponent);
    return TdLayoutNavComponent;
}());
export { TdLayoutNavComponent };
//# sourceMappingURL=layout-nav.component.js.map