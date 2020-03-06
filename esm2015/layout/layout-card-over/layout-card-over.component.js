/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
export class TdLayoutCardOverComponent {
    constructor() {
        /**
         * cardWidth?: string
         *
         * Card flex width in %.
         * Defaults to 70%.
         */
        this.cardWidth = 70;
        /**
         * color?: 'accent' | 'primary' | 'warn'
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
}
TdLayoutCardOverComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-card-over',
                template: "<mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\"></mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div\n    class=\"td-layout-card-over\"\n    [style.max-width.%]=\"cardWidth\"\n    [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-webkit-box-flex]=\"1\"\n  >\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{ cardTitle }}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{ cardSubtitle }}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
            }] }
];
TdLayoutCardOverComponent.propDecorators = {
    cardTitle: [{ type: Input }],
    cardSubtitle: [{ type: Input }],
    cardWidth: [{ type: Input }],
    color: [{ type: Input }]
};
if (false) {
    /**
     * cardTitle?: string
     *
     * Title set in card.
     * @type {?}
     */
    TdLayoutCardOverComponent.prototype.cardTitle;
    /**
     * cardSubtitle?: string
     *
     * Subtitle set in card.
     * @type {?}
     */
    TdLayoutCardOverComponent.prototype.cardSubtitle;
    /**
     * cardWidth?: string
     *
     * Card flex width in %.
     * Defaults to 70%.
     * @type {?}
     */
    TdLayoutCardOverComponent.prototype.cardWidth;
    /**
     * color?: 'accent' | 'primary' | 'warn'
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     * @type {?}
     */
    TdLayoutCardOverComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtY2FyZC1vdmVyL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdEMsTUFBTSxPQUFPLHlCQUF5QjtJQUx0Qzs7Ozs7OztRQTBCVyxjQUFTLEdBQVcsRUFBRSxDQUFDOzs7Ozs7O1FBUXZCLFVBQUssR0FBa0MsU0FBUyxDQUFDO0lBQzVELENBQUM7OztZQW5DQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFFL0IsMHRCQUFnRDs7YUFDakQ7Ozt3QkFPRSxLQUFLOzJCQU9MLEtBQUs7d0JBUUwsS0FBSztvQkFRTCxLQUFLOzs7Ozs7Ozs7SUF2Qk4sOENBQTJCOzs7Ozs7O0lBTzNCLGlEQUE4Qjs7Ozs7Ozs7SUFROUIsOENBQWdDOzs7Ozs7OztJQVFoQywwQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1jYXJkLW92ZXInLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBjYXJkVGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogVGl0bGUgc2V0IGluIGNhcmQuXG4gICAqL1xuICBASW5wdXQoKSBjYXJkVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogY2FyZFN1YnRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFN1YnRpdGxlIHNldCBpbiBjYXJkLlxuICAgKi9cbiAgQElucHV0KCkgY2FyZFN1YnRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNhcmRXaWR0aD86IHN0cmluZ1xuICAgKlxuICAgKiBDYXJkIGZsZXggd2lkdGggaW4gJS5cbiAgICogRGVmYXVsdHMgdG8gNzAlLlxuICAgKi9cbiAgQElucHV0KCkgY2FyZFdpZHRoOiBudW1iZXIgPSA3MDtcblxuICAvKipcbiAgICogY29sb3I/OiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgcHJpbWFyeSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xufVxuIl19