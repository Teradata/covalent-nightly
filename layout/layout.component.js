var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
var TdLayoutComponent = (function () {
    function TdLayoutComponent() {
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.toggle = function () {
        return this.sidenav.toggle();
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
TdLayoutComponent = __decorate([
    Component({
        selector: 'td-layout',
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host /deep/ > md-sidenav-container > md-sidenav > .mat-sidenav-focus-trap > .cdk-focus-trap-content { display: -webkit-box; display: -webkit-flex; display: -moz-box; display: -ms-flexbox; display: flex; flex-direction: column; } "],
        template: "<md-sidenav-container fullscreen> <md-sidenav> <ng-content select=\"td-navigation-drawer\"></ng-content> <ng-content select=\"[menu-items], [td-sidenav-content]\"></ng-content> </md-sidenav> <ng-content></ng-content> </md-sidenav-container> ",
    })
], TdLayoutComponent);
export { TdLayoutComponent };
//# sourceMappingURL=layout.component.js.map