import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
var TdLayoutManageListComponent = (function () {
    function TdLayoutManageListComponent() {
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
         *
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
         * Defaults to "257px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '257px';
    }
    Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
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
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    tslib_1.__decorate([
        ViewChild(MatSidenav),
        tslib_1.__metadata("design:type", MatSidenav)
    ], TdLayoutManageListComponent.prototype, "sidenav", void 0);
    tslib_1.__decorate([
        Input('mode'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutManageListComponent.prototype, "mode", void 0);
    tslib_1.__decorate([
        Input('opened'),
        tslib_1.__metadata("design:type", Boolean)
    ], TdLayoutManageListComponent.prototype, "opened", void 0);
    tslib_1.__decorate([
        Input('sidenavWidth'),
        tslib_1.__metadata("design:type", String)
    ], TdLayoutManageListComponent.prototype, "sidenavWidth", void 0);
    TdLayoutManageListComponent = tslib_1.__decorate([
        Component({
            selector: 'td-layout-manage-list',
            styles: [":host { display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host mat-sidenav-container.td-layout-manage-list { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opened, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opening, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closed, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closing { -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2); box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2); } :host .td-layout-manage-list-sidenav { text-align: start; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } :host .td-layout-manage-list-main { margin: 0; width: 100%; min-height: 100%; height: 100%; position: relative; overflow: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } :host .td-layout-manage-list-main .td-layout-manage-list-content { display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host ::ng-deep mat-sidenav-container.td-layout-manage-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host ::ng-deep mat-sidenav-container.td-layout-manage-list > .mat-drawer-content { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; } :host ::ng-deep mat-sidenav-container.td-layout-manage-list > mat-sidenav { -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; } :host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content { font-size: 14px; } :host ::ng-deep .mat-toolbar { font-weight: 400; } /*# sourceMappingURL=layout-manage-list.component.css.map */ "],
            template: "<mat-sidenav-container fullscreen class=\"td-layout-manage-list\"> <mat-sidenav #sidenav position=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\"> <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content> <div class=\"td-layout-manage-list-sidenav\" cdkScrollable> <ng-content select=\"[td-sidenav-content]\"></ng-content> </div> </mat-sidenav> <div class=\"td-layout-manage-list-main\"> <ng-content select=\"mat-toolbar\"></ng-content> <div class=\"td-layout-manage-list-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </mat-sidenav-container> ",
        })
    ], TdLayoutManageListComponent);
    return TdLayoutManageListComponent;
}());
export { TdLayoutManageListComponent };
//# sourceMappingURL=layout-manage-list.component.js.map