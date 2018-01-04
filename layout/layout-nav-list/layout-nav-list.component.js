import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
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
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
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
    tslib_1.__decorate([
        ViewChild(MatSidenav),
        tslib_1.__metadata("design:type", MatSidenav)
    ], TdLayoutNavListComponent.prototype, "sidenav", void 0);
    tslib_1.__decorate([
        Input('toolbarTitle'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "toolbarTitle", void 0);
    tslib_1.__decorate([
        Input('icon'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input('logo'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "logo", void 0);
    tslib_1.__decorate([
        Input('color'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input('mode'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "mode", void 0);
    tslib_1.__decorate([
        Input('opened'),
        tslib_1.__metadata("design:type", Boolean)
    ], TdLayoutNavListComponent.prototype, "opened", void 0);
    tslib_1.__decorate([
        Input('sidenavWidth'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "sidenavWidth", void 0);
    tslib_1.__decorate([
        Input('navigationRoute'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "navigationRoute", void 0);
    TdLayoutNavListComponent = tslib_1.__decorate([
        Component({
            selector: 'td-layout-nav-list',
            styles: [":host { margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-layout-nav-list-wrapper { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } :host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host .td-layout-nav-list-wrapper .td-layout-nav-list-content { text-align: start; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } :host .td-layout-nav-list-wrapper .td-layout-nav-list-main { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; position: relative; overflow: auto; } :host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content { display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opened, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opening, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closed, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closing { -webkit-box-shadow: none; box-shadow: none; } :host ::ng-deep mat-sidenav-container.td-layout-nav-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host ::ng-deep mat-sidenav-container.td-layout-nav-list > .mat-drawer-content { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; } :host ::ng-deep mat-sidenav-container.td-layout-nav-list > mat-sidenav { -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; } /*# sourceMappingURL=layout-nav-list.component.css.map */ "],
            template: "<div class=\"td-layout-nav-list-wrapper\"> <mat-sidenav-container fullscreen class=\"td-layout-nav-list\"> <mat-sidenav #sidenav position=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\"> <mat-toolbar [color]=\"color\"> <ng-content select=\"[td-menu-button]\"></ng-content> <span *ngIf=\"icon || logo || toolbarTitle\" class=\"td-layout-nav-list-toolbar-content\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\"> <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon> <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon> <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span> </span> <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content> </mat-toolbar> <div class=\"td-layout-nav-list-content\" cdkScrollable> <ng-content select=\"[td-sidenav-content]\"></ng-content> </div> </mat-sidenav> <div class=\"td-layout-nav-list-main\"> <mat-toolbar [color]=\"color\"> <ng-content select=\"[td-toolbar-content]\"></ng-content> </mat-toolbar> <div class=\"td-layout-nav-list-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </mat-sidenav-container> </div> <ng-content select=\"td-layout-footer\"></ng-content>",
        }),
        tslib_1.__param(0, Optional()),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TdLayoutNavListComponent);
    return TdLayoutNavListComponent;
}());
export { TdLayoutNavListComponent };
//# sourceMappingURL=layout-nav-list.component.js.map