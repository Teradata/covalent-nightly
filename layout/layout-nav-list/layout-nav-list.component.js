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
import { Component, Input, ViewChild, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav } from '@angular/material';
var TdLayoutNavListComponent = (function () {
    function TdLayoutNavListComponent(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MdSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MdSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "350px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '350px';
    }
    Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutNavListComponent;
}());
__decorate([
    ViewChild(MdSidenav),
    __metadata("design:type", MdSidenav)
], TdLayoutNavListComponent.prototype, "sidenav", void 0);
__decorate([
    Input('toolbarTitle'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "toolbarTitle", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "icon", void 0);
__decorate([
    Input('logo'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "logo", void 0);
__decorate([
    Input('color'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "color", void 0);
__decorate([
    Input('mode'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "mode", void 0);
__decorate([
    Input('opened'),
    __metadata("design:type", Boolean)
], TdLayoutNavListComponent.prototype, "opened", void 0);
__decorate([
    Input('sidenavWidth'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "sidenavWidth", void 0);
__decorate([
    Input('navigationRoute'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "navigationRoute", void 0);
TdLayoutNavListComponent = __decorate([
    Component({
        selector: 'td-layout-nav-list',
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host md-sidenav-container.td-layout-nav-list > md-sidenav.mat-sidenav-opened, :host md-sidenav-container.td-layout-nav-list > md-sidenav.mat-sidenav-opening, :host md-sidenav-container.td-layout-nav-list > md-sidenav.mat-sidenav-closed, :host md-sidenav-container.td-layout-nav-list > md-sidenav.mat-sidenav-closing { box-shadow: none; } :host .list { text-align: start; } :host /deep/ md-sidenav-container.td-layout-nav-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host /deep/ md-sidenav-container.td-layout-nav-list > .mat-sidenav-content { flex-grow: 1; } :host /deep/ md-sidenav-container.td-layout-nav-list > md-sidenav { box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -moz-box; display: -ms-flexbox; display: flex; flex-direction: column; } "],
        template: "<div layout=\"column\" layout-fill> <div flex layout=\"column\" class=\"content md-content\"> <md-sidenav-container fullscreen class=\"td-layout-nav-list\" layout=\"row\" flex> <md-sidenav #sidenav align=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\" layout=\"column\"  layout-fill class=\"md-whiteframe-z1\"> <md-toolbar [color]=\"color\" class=\"md-whiteframe-z1\"> <ng-content select=\"[td-menu-button]\"></ng-content> <span *ngIf=\"icon || logo || toolbarTitle\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\" layout=\"row\" layout-align=\"start center\"> <md-icon *ngIf=\"icon\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo\" [svgIcon]=\"logo\"></md-icon> <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span> </span> <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content> </md-toolbar> <div flex class=\"list md-content\" cdkScrollable> <ng-content select=\"[td-sidenav-content]\"></ng-content> </div> </md-sidenav> <div layout=\"column\" layout-fill class=\"md-content\"> <md-toolbar [color]=\"color\" class=\"md-whiteframe-z1\"> <ng-content select=\"[td-toolbar-content]\"></ng-content> </md-toolbar> <div class=\"md-content\" flex cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </md-sidenav-container> </div> <ng-content select=\"td-layout-footer\"></ng-content> </div>",
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [Router])
], TdLayoutNavListComponent);
export { TdLayoutNavListComponent };
//# sourceMappingURL=layout-nav-list.component.js.map