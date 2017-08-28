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
            styles: [":host { position: relative; display: block; z-index: 2; width: 100%; min-height: 100%; height: 100%; } :host [td-after-card] { display: block; } .margin { margin-top: -64px; } "],
            template: "<md-toolbar [color]=\"color\"> </md-toolbar> <div class=\"margin\" layout-gt-xs=\"row\" layout-align-gt-xs=\"center start\" layout-fill> <div [attr.flex-gt-xs]=\"cardWidth\"> <md-card> <md-card-title *ngIf=\"cardTitle\">{{cardTitle}}</md-card-title> <md-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</md-card-subtitle> <md-divider *ngIf=\"cardTitle || cardSubtitle\"></md-divider> <ng-content></ng-content> </md-card> <ng-content select=\"[td-after-card]\"></ng-content> </div> </div> ",
        })
    ], TdLayoutCardOverComponent);
    return TdLayoutCardOverComponent;
}());
export { TdLayoutCardOverComponent };
//# sourceMappingURL=layout-card-over.component.js.map