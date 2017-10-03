import * as tslib_1 from "tslib";
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
tslib_1.__decorate([
    Input('cardTitle'),
    tslib_1.__metadata("design:type", String)
], TdLayoutCardOverComponent.prototype, "cardTitle", void 0);
tslib_1.__decorate([
    Input('cardSubtitle'),
    tslib_1.__metadata("design:type", String)
], TdLayoutCardOverComponent.prototype, "cardSubtitle", void 0);
tslib_1.__decorate([
    Input('cardWidth'),
    tslib_1.__metadata("design:type", Number)
], TdLayoutCardOverComponent.prototype, "cardWidth", void 0);
tslib_1.__decorate([
    Input('color'),
    tslib_1.__metadata("design:type", String)
], TdLayoutCardOverComponent.prototype, "color", void 0);
TdLayoutCardOverComponent = tslib_1.__decorate([
    Component({
        selector: 'td-layout-card-over',
        styles: [":host { position: relative; display: block; z-index: 2; width: 100%; min-height: 100%; height: 100%; } :host [td-after-card] { display: block; } .margin { margin-top: -64px; } /*# sourceMappingURL=layout-card-over.component.css.map */ "],
        template: "<mat-toolbar [color]=\"color\"> </mat-toolbar> <div class=\"margin\" layout-gt-xs=\"row\" layout-align-gt-xs=\"center start\" layout-fill> <div [attr.flex-gt-xs]=\"cardWidth\"> <mat-card> <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title> <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle> <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider> <ng-content></ng-content> </mat-card> <ng-content select=\"[td-after-card]\"></ng-content> </div> </div> ",
    })
], TdLayoutCardOverComponent);
export { TdLayoutCardOverComponent };
//# sourceMappingURL=layout-card-over.component.js.map