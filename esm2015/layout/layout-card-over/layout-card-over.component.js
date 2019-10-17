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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQtY2FyZC1vdmVyL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdEMsTUFBTSxPQUFPLHlCQUF5QjtJQUx0Qzs7Ozs7OztRQTBCc0IsY0FBUyxHQUFXLEVBQUUsQ0FBQzs7Ozs7OztRQVEzQixVQUFLLEdBQWtDLFNBQVMsQ0FBQztJQUNuRSxDQUFDOzs7WUFuQ0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBRS9CLDhyQkFBZ0Q7O2FBQ2pEOzs7d0JBT0UsS0FBSyxTQUFDLFdBQVc7MkJBT2pCLEtBQUssU0FBQyxjQUFjO3dCQVFwQixLQUFLLFNBQUMsV0FBVztvQkFRakIsS0FBSyxTQUFDLE9BQU87Ozs7Ozs7OztJQXZCZCw4Q0FBc0M7Ozs7Ozs7SUFPdEMsaURBQTRDOzs7Ozs7OztJQVE1Qyw4Q0FBMkM7Ozs7Ozs7O0lBUTNDLDBDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0LWNhcmQtb3ZlcicsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dENhcmRPdmVyQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIGNhcmRUaXRsZT86IHN0cmluZ1xuICAgKlxuICAgKiBUaXRsZSBzZXQgaW4gY2FyZC5cbiAgICovXG4gIEBJbnB1dCgnY2FyZFRpdGxlJykgY2FyZFRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNhcmRTdWJ0aXRsZT86IHN0cmluZ1xuICAgKlxuICAgKiBTdWJ0aXRsZSBzZXQgaW4gY2FyZC5cbiAgICovXG4gIEBJbnB1dCgnY2FyZFN1YnRpdGxlJykgY2FyZFN1YnRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNhcmRXaWR0aD86IHN0cmluZ1xuICAgKlxuICAgKiBDYXJkIGZsZXggd2lkdGggaW4gJS5cbiAgICogRGVmYXVsdHMgdG8gNzAlLlxuICAgKi9cbiAgQElucHV0KCdjYXJkV2lkdGgnKSBjYXJkV2lkdGg6IG51bWJlciA9IDcwO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBwcmltYXJ5IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xufVxuIl19