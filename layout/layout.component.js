var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
var TdLayoutComponent = (function () {
    function TdLayoutComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "over".
         * See "MdSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'over';
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "false".
         *
         * See "MdSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = false;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "320px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '320px';
    }
    Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
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
    TdLayoutComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutComponent;
}());
__decorate([
    ViewChild(MdSidenav),
    __metadata("design:type", MdSidenav)
], TdLayoutComponent.prototype, "sidenav", void 0);
__decorate([
    Input('mode'),
    __metadata("design:type", String)
], TdLayoutComponent.prototype, "mode", void 0);
__decorate([
    Input('opened'),
    __metadata("design:type", Boolean)
], TdLayoutComponent.prototype, "opened", void 0);
__decorate([
    Input('sidenavWidth'),
    __metadata("design:type", String)
], TdLayoutComponent.prototype, "sidenavWidth", void 0);
TdLayoutComponent = __decorate([
    Component({
        selector: 'td-layout',
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host /deep/ > md-sidenav-container > md-sidenav { display: -webkit-box; display: -webkit-flex; display: -moz-box; display: -ms-flexbox; display: flex; flex-direction: column; } "],
        template: "<md-sidenav-container fullscreen> <md-sidenav #sidenav class=\"td-layout-sidenav\" [mode]=\"mode\" [opened]=\"opened\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\" [disableClose]=\"disableClose\"> <ng-content select=\"td-navigation-drawer\"></ng-content> <ng-content select=\"[td-sidenav-content]\"></ng-content> </md-sidenav> <ng-content></ng-content> </md-sidenav-container> ",
    })
], TdLayoutComponent);
export { TdLayoutComponent };
//# sourceMappingURL=layout.component.js.map