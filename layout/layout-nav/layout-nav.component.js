var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, forwardRef, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TdLayoutComponent } from '../layout.component';
var TdLayoutNavComponent = (function () {
    function TdLayoutNavComponent(_layout, _router) {
        this._layout = _layout;
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLayoutNavComponent.prototype, "isMainSidenavAvailable", {
        /**
         * Checks if there is a [TdLayoutComponent] as parent.
         */
        get: function () {
            return !!this._layout;
        },
        enumerable: true,
        configurable: true
    });
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
    /**
     * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
     */
    TdLayoutNavComponent.prototype.openMainSidenav = function () {
        this._layout.toggle();
    };
    return TdLayoutNavComponent;
}());
__decorate([
    Input('toolbarTitle'),
    __metadata("design:type", String)
], TdLayoutNavComponent.prototype, "toolbarTitle", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], TdLayoutNavComponent.prototype, "icon", void 0);
__decorate([
    Input('logo'),
    __metadata("design:type", String)
], TdLayoutNavComponent.prototype, "logo", void 0);
__decorate([
    Input('color'),
    __metadata("design:type", String)
], TdLayoutNavComponent.prototype, "color", void 0);
__decorate([
    Input('navigationRoute'),
    __metadata("design:type", String)
], TdLayoutNavComponent.prototype, "navigationRoute", void 0);
TdLayoutNavComponent = __decorate([
    Component({
        selector: 'td-layout-nav',
        styles: [".td-menu-button { margin-left: 0px; } /deep/ [dir='rtl'] .td-menu-button { margin-right: 0px; margin-left: 6px; } :host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } "],
        template: "<div layout=\"column\" layout-fill> <md-toolbar [color]=\"color\"> <button md-icon-button class=\"td-menu-button\" *ngIf=\"isMainSidenavAvailable\" (click)=\"openMainSidenav()\"> <md-icon class=\"md-24\">menu</md-icon> </button> <span *ngIf=\"icon || logo || toolbarTitle\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\" layout=\"row\" layout-align=\"start center\"> <md-icon *ngIf=\"icon\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo\" [svgIcon]=\"logo\"></md-icon> <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span> </span> <ng-content select=\"[td-toolbar-content]\"></ng-content> </md-toolbar> <div flex layout=\"column\" class=\"content md-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer\"></ng-content> </div> ",
    }),
    __param(0, Optional()), __param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
    __param(1, Optional()),
    __metadata("design:paramtypes", [TdLayoutComponent,
        Router])
], TdLayoutNavComponent);
export { TdLayoutNavComponent };
//# sourceMappingURL=layout-nav.component.js.map