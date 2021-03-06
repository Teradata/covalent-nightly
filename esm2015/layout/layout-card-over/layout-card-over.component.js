/**
 * @fileoverview added by tsickle
 * Generated from: layout-card-over/layout-card-over.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                styles: [":host{height:100%;min-height:100%;position:relative;width:100%;z-index:2}:host,:host [td-after-card]{display:block}.td-layout-card-over-wrapper{height:100%;margin:-64px 0;min-height:100%;width:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-ms-flex-align:start;-ms-flex-direction:row;-ms-flex-line-pack:start;-ms-flex-pack:center;align-content:flex-start;align-items:flex-start;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{box-sizing:border-box;max-height:100%}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbGF5b3V0LyIsInNvdXJjZXMiOlsibGF5b3V0LWNhcmQtb3Zlci9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU90QyxNQUFNLE9BQU8seUJBQXlCO0lBTHRDOzs7Ozs7O1FBMEJXLGNBQVMsR0FBVyxFQUFFLENBQUM7Ozs7Ozs7UUFRdkIsVUFBSyxHQUFrQyxTQUFTLENBQUM7SUFDNUQsQ0FBQzs7O1lBbkNBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUUvQiwwdEJBQWdEOzthQUNqRDs7O3dCQU9FLEtBQUs7MkJBT0wsS0FBSzt3QkFRTCxLQUFLO29CQVFMLEtBQUs7Ozs7Ozs7OztJQXZCTiw4Q0FBMkI7Ozs7Ozs7SUFPM0IsaURBQThCOzs7Ozs7OztJQVE5Qiw4Q0FBZ0M7Ozs7Ozs7O0lBUWhDLDBDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0LWNhcmQtb3ZlcicsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dENhcmRPdmVyQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIGNhcmRUaXRsZT86IHN0cmluZ1xuICAgKlxuICAgKiBUaXRsZSBzZXQgaW4gY2FyZC5cbiAgICovXG4gIEBJbnB1dCgpIGNhcmRUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjYXJkU3VidGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogU3VidGl0bGUgc2V0IGluIGNhcmQuXG4gICAqL1xuICBASW5wdXQoKSBjYXJkU3VidGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogY2FyZFdpZHRoPzogc3RyaW5nXG4gICAqXG4gICAqIENhcmQgZmxleCB3aWR0aCBpbiAlLlxuICAgKiBEZWZhdWx0cyB0byA3MCUuXG4gICAqL1xuICBASW5wdXQoKSBjYXJkV2lkdGg6IG51bWJlciA9IDcwO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBwcmltYXJ5IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybicgPSAncHJpbWFyeSc7XG59XG4iXX0=