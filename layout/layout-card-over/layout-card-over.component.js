var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Input } from '@angular/core';
var TdLayoutCardOverComponent = (function () {
    function TdLayoutCardOverComponent() {
        /**
         * cardWidth?: string
         *
         * Card flex width in %.
         * Defaults to 70%.
         */
        this.cardWidth = 70;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    return TdLayoutCardOverComponent;
}());
__decorate([
    Input('cardTitle'),
    __metadata("design:type", String)
], TdLayoutCardOverComponent.prototype, "cardTitle", void 0);
__decorate([
    Input('cardSubtitle'),
    __metadata("design:type", String)
], TdLayoutCardOverComponent.prototype, "cardSubtitle", void 0);
__decorate([
    Input('cardWidth'),
    __metadata("design:type", Number)
], TdLayoutCardOverComponent.prototype, "cardWidth", void 0);
__decorate([
    Input('color'),
    __metadata("design:type", String)
], TdLayoutCardOverComponent.prototype, "color", void 0);
TdLayoutCardOverComponent = __decorate([
    Component({
        selector: 'td-layout-card-over',
        styles: [":host { position: relative; display: block; z-index: 2; width: 100%; min-height: 100%; height: 100%; } :host [td-after-card] { display: block; } .margin { margin-top: -64px; } "],
        template: "<md-toolbar [color]=\"color\"> </md-toolbar> <div class=\"margin\" layout-gt-xs=\"row\" layout-align-gt-xs=\"center start\" layout-fill> <div [attr.flex-gt-xs]=\"cardWidth\"> <md-card> <md-card-title *ngIf=\"cardTitle\">{{cardTitle}}</md-card-title> <md-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</md-card-subtitle> <md-divider *ngIf=\"cardTitle || cardSubtitle\"></md-divider> <ng-content></ng-content> </md-card> <ng-content select=\"[after-card], [td-after-card]\"></ng-content> </div> </div> ",
    })
], TdLayoutCardOverComponent);
export { TdLayoutCardOverComponent };
//# sourceMappingURL=layout-card-over.component.js.map