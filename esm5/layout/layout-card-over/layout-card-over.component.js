/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
var TdLayoutCardOverComponent = /** @class */ (function () {
    function TdLayoutCardOverComponent() {
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
    TdLayoutCardOverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-layout-card-over',
                    template: "<mat-toolbar [color]=\"color\"></mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div\n    class=\"td-layout-card-over\"\n    [style.max-width.%]=\"cardWidth\"\n    [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-webkit-box-flex]=\"1\"\n  >\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{ cardTitle }}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{ cardSubtitle }}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                    styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
                }] }
    ];
    TdLayoutCardOverComponent.propDecorators = {
        cardTitle: [{ type: Input, args: ['cardTitle',] }],
        cardSubtitle: [{ type: Input, args: ['cardSubtitle',] }],
        cardWidth: [{ type: Input, args: ['cardWidth',] }],
        color: [{ type: Input, args: ['color',] }]
    };
    return TdLayoutCardOverComponent;
}());
export { TdLayoutCardOverComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQtY2FyZC1vdmVyL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEM7SUFBQTs7Ozs7OztRQTBCc0IsY0FBUyxHQUFXLEVBQUUsQ0FBQzs7Ozs7OztRQVEzQixVQUFLLEdBQWtDLFNBQVMsQ0FBQztJQUNuRSxDQUFDOztnQkFuQ0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBRS9CLDhyQkFBZ0Q7O2lCQUNqRDs7OzRCQU9FLEtBQUssU0FBQyxXQUFXOytCQU9qQixLQUFLLFNBQUMsY0FBYzs0QkFRcEIsS0FBSyxTQUFDLFdBQVc7d0JBUWpCLEtBQUssU0FBQyxPQUFPOztJQUNoQixnQ0FBQztDQUFBLEFBbkNELElBbUNDO1NBOUJZLHlCQUF5Qjs7Ozs7Ozs7SUFNcEMsOENBQXNDOzs7Ozs7O0lBT3RDLGlEQUE0Qzs7Ozs7Ozs7SUFRNUMsOENBQTJDOzs7Ozs7OztJQVEzQywwQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1jYXJkLW92ZXInLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBjYXJkVGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogVGl0bGUgc2V0IGluIGNhcmQuXG4gICAqL1xuICBASW5wdXQoJ2NhcmRUaXRsZScpIGNhcmRUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjYXJkU3VidGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogU3VidGl0bGUgc2V0IGluIGNhcmQuXG4gICAqL1xuICBASW5wdXQoJ2NhcmRTdWJ0aXRsZScpIGNhcmRTdWJ0aXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjYXJkV2lkdGg/OiBzdHJpbmdcbiAgICpcbiAgICogQ2FyZCBmbGV4IHdpZHRoIGluICUuXG4gICAqIERlZmF1bHRzIHRvIDcwJS5cbiAgICovXG4gIEBJbnB1dCgnY2FyZFdpZHRoJykgY2FyZFdpZHRoOiBudW1iZXIgPSA3MDtcblxuICAvKipcbiAgICogY29sb3I/OiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgcHJpbWFyeSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJyA9ICdwcmltYXJ5Jztcbn1cbiJdfQ==