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
            styles: [":host { position: relative; display: block; z-index: 2; width: 100%; min-height: 100%; height: 100%; } :host [td-after-card] { display: block; } .td-layout-card-over-wrapper { margin: -64px; margin-left: 0; margin-right: 0; width: 100%; min-height: 100%; height: 100%; } @media (min-width: 600px) { .td-layout-card-over-wrapper { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; -ms-flex-line-pack: start; align-content: flex-start; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; } .td-layout-card-over-wrapper .td-layout-card-over { max-height: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; } } @media (max-width: 599px) { .td-layout-card-over-wrapper .td-layout-card-over { max-width: 100% !important; } } /*# sourceMappingURL=layout-card-over.component.css.map */ "],
            template: "<mat-toolbar [color]=\"color\"> </mat-toolbar> <div class=\"td-layout-card-over-wrapper\"> <div class=\"td-layout-card-over\" [style.max-width.%]=\"cardWidth\" [style.flex]=\"'1 1 ' + cardWidth + '%'\" [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\" [style.-webkit-box-flex]=\"1\"> <mat-card> <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title> <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle> <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider> <ng-content></ng-content> </mat-card> <ng-content select=\"[td-after-card]\"></ng-content> </div> </div> ",
        })
    ], TdLayoutCardOverComponent);
    return TdLayoutCardOverComponent;
}());
export { TdLayoutCardOverComponent };
//# sourceMappingURL=layout-card-over.component.js.map