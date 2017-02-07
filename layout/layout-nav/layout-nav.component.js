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
import { TdLayoutComponent } from '../layout.component';
var TdLayoutNavComponent = (function () {
    function TdLayoutNavComponent(_layout) {
        this._layout = _layout;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
        /**
         * navigationRoute?: string
         *
         * option to set the combined logo, icon, toolbar title route
         * defaults to '/'
         */
        this.navigationRoute = '/';
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
    /**
     * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
     */
    TdLayoutNavComponent.prototype.openMainSidenav = function () {
        this._layout.open();
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
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host .td-menu-button { margin-left: 0px; } "],
        template: "<div layout=\"column\" layout-fill> <md-toolbar [color]=\"color\"> <button md-icon-button class=\"td-menu-button\" *ngIf=\"isMainSidenavAvailable\" (click)=\"openMainSidenav()\"> <md-icon class=\"md-24\">menu</md-icon> </button> <md-icon *ngIf=\"icon\" [routerLink]=\"navigationRoute\" class=\"cursor-pointer\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo cursor-pointer\" [svgIcon]=\"logo\" [routerLink]=\"navigationRoute\"></md-icon> <span *ngIf=\"toolbarTitle\" class=\"cursor-pointer\" [routerLink]=\"navigationRoute\">{{toolbarTitle}}</span> <ng-content select=\"[toolbar-content], [td-toolbar-content]\"></ng-content> </md-toolbar> <div flex layout=\"column\" class=\"content md-content\"> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer\"></ng-content> </div> ",
    }),
    __param(0, Optional()), __param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
    __metadata("design:paramtypes", [TdLayoutComponent])
], TdLayoutNavComponent);
export { TdLayoutNavComponent };
//# sourceMappingURL=layout-nav.component.js.map