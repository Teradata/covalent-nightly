var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Component, Directive, Input, ViewChild, Inject, forwardRef, Renderer2, ElementRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutManageListToggleDirective = (function (_super) {
    __extends(TdLayoutManageListToggleDirective, _super);
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
TdLayoutManageListToggleDirective = __decorate([
    Directive({
        selector: '[tdLayoutManageListToggle]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutManageListComponent; }))),
    __metadata("design:paramtypes", [TdLayoutManageListComponent,
        Renderer2,
        ElementRef])
], TdLayoutManageListToggleDirective);
export { TdLayoutManageListToggleDirective };
var TdLayoutManageListComponent = (function () {
    function TdLayoutManageListComponent() {
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
         *
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
        return this._sideNav.toggle(!this._sideNav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.open = function () {
        return this._sideNav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.close = function () {
        return this._sideNav.close();
    };
    return TdLayoutManageListComponent;
}());
__decorate([
    ViewChild(MdSidenav),
    __metadata("design:type", MdSidenav)
], TdLayoutManageListComponent.prototype, "_sideNav", void 0);
__decorate([
    Input('mode'),
    __metadata("design:type", String)
], TdLayoutManageListComponent.prototype, "mode", void 0);
__decorate([
    Input('opened'),
    __metadata("design:type", Boolean)
], TdLayoutManageListComponent.prototype, "opened", void 0);
__decorate([
    Input('sidenavWidth'),
    __metadata("design:type", String)
], TdLayoutManageListComponent.prototype, "sidenavWidth", void 0);
TdLayoutManageListComponent = __decorate([
    Component({
        selector: 'td-layout-manage-list',
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host md-sidenav-container.td-layout-manage-list > md-sidenav.mat-sidenav-opened, :host md-sidenav-container.td-layout-manage-list > md-sidenav.mat-sidenav-opening, :host md-sidenav-container.td-layout-manage-list > md-sidenav.mat-sidenav-closed, :host md-sidenav-container.td-layout-manage-list > md-sidenav.mat-sidenav-closing { box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2); } :host .list { text-align: start; } :host /deep/ md-sidenav-container.td-layout-manage-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host /deep/ md-sidenav-container.td-layout-manage-list > .mat-sidenav-content { flex-grow: 1; } :host /deep/ md-sidenav-container.td-layout-manage-list > md-sidenav { box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -moz-box; display: -ms-flexbox; display: flex; flex-direction: column; } :host /deep/ md-nav-list a[md-list-item] .mat-list-item-content { font-size: 14px; } :host /deep/ .mat-toolbar { font-weight: 400; } "],
        template: "<md-sidenav-container fullscreen class=\"td-layout-manage-list md-content\" flex layout=\"row\"> <md-sidenav #sidenav align=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\" layout=\"column\" layout-fill class=\"md-whiteframe-z1\"> <ng-content select=\"md-toolbar[td-sidenav-content]\"></ng-content> <div flex class=\"list md-content\" cdkScrollable> <ng-content select=\"[td-sidenav-content]\"></ng-content> </div> </md-sidenav> <div layout=\"column\" layout-fill class=\"md-content\"> <ng-content select=\"md-toolbar\"></ng-content> <div class=\"md-content\" flex cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </md-sidenav-container> ",
    })
], TdLayoutManageListComponent);
export { TdLayoutManageListComponent };
//# sourceMappingURL=layout-manage-list.component.js.map