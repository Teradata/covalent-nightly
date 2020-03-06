/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { Router } from '@angular/router';
export class TdLayoutNavComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        /**
         * color?: 'accent' | 'primary' | 'warn'
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    /**
     * Checks if router was injected.
     * @return {?}
     */
    get routerEnabled() {
        return !!this._router && !!this.navigationRoute;
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    }
}
TdLayoutNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav',
                template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span\n      *ngIf=\"icon || logo || toolbarTitle\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n      class=\"td-layout-nav-toolbar-content\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
                styles: [".td-menu-button{margin-left:0}::ng-deep [dir=rtl] .td-menu-button{margin-right:0;margin-left:6px}:host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host .td-layout-nav-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%}:host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-layout-nav-wrapper .td-layout-nav-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}"]
            }] }
];
/** @nocollapse */
TdLayoutNavComponent.ctorParameters = () => [
    { type: Router, decorators: [{ type: Optional }] }
];
TdLayoutNavComponent.propDecorators = {
    toolbarTitle: [{ type: Input }],
    icon: [{ type: Input }],
    logo: [{ type: Input }],
    color: [{ type: Input }],
    navigationRoute: [{ type: Input }]
};
if (false) {
    /**
     * toolbarTitle?: string
     *
     * Title set in toolbar.
     * @type {?}
     */
    TdLayoutNavComponent.prototype.toolbarTitle;
    /**
     * icon?: string
     *
     * icon name to be displayed before the title
     * @type {?}
     */
    TdLayoutNavComponent.prototype.icon;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     * @type {?}
     */
    TdLayoutNavComponent.prototype.logo;
    /**
     * color?: 'accent' | 'primary' | 'warn'
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     * @type {?}
     */
    TdLayoutNavComponent.prototype.color;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and toolbarTitle.
     * @type {?}
     */
    TdLayoutNavComponent.prototype.navigationRoute;
    /**
     * @type {?}
     * @private
     */
    TdLayoutNavComponent.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtbmF2L2xheW91dC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxRQUFRLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUE2Qy9CLFlBQWdDLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFROzs7Ozs7O1FBaEJ0QyxVQUFLLEdBQWtDLFNBQVMsQ0FBQztJQWdCUixDQUFDOzs7OztJQUpuRCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFJRCxxQkFBcUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBRXpCLDAwQkFBMEM7O2FBQzNDOzs7O1lBUFEsTUFBTSx1QkFxREEsUUFBUTs7OzJCQXZDcEIsS0FBSzttQkFPTCxLQUFLO21CQVFMLEtBQUs7b0JBUUwsS0FBSzs4QkFPTCxLQUFLOzs7Ozs7Ozs7SUE5Qk4sNENBQThCOzs7Ozs7O0lBTzlCLG9DQUFzQjs7Ozs7Ozs7SUFRdEIsb0NBQXNCOzs7Ozs7OztJQVF0QixxQ0FBMEQ7Ozs7Ozs7SUFPMUQsK0NBQWlDOzs7OztJQVNyQix1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0LW5hdicsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1uYXYuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1uYXYuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiB0b29sYmFyVGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogVGl0bGUgc2V0IGluIHRvb2xiYXIuXG4gICAqL1xuICBASW5wdXQoKSB0b29sYmFyVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCkgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBwcmltYXJ5IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRpb25Sb3V0ZT86IHN0cmluZ1xuICAgKlxuICAgKiBvcHRpb24gdG8gc2V0IHRoZSBjb21iaW5lZCByb3V0ZSBmb3IgdGhlIGljb24sIGxvZ28sIGFuZCB0b29sYmFyVGl0bGUuXG4gICAqL1xuICBASW5wdXQoKSBuYXZpZ2F0aW9uUm91dGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdXRlciB3YXMgaW5qZWN0ZWQuXG4gICAqL1xuICBnZXQgcm91dGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9yb3V0ZXIgJiYgISF0aGlzLm5hdmlnYXRpb25Sb3V0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIGhhbmRsZU5hdmlnYXRpb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm5hdmlnYXRpb25Sb3V0ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=