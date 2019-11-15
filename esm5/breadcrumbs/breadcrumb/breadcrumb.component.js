/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
var TdBreadcrumbComponent = /** @class */ (function () {
    function TdBreadcrumbComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._displayCrumb = true;
        this._width = 0;
        // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
        this.separatorIcon = 'chevron_right';
        // Should show the right chevron or not before the label
        this._displayIcon = true;
    }
    Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayCrumb;
        },
        /**
         * Whether to display the crumb or not
         */
        set: /**
         * Whether to display the crumb or not
         * @param {?} shouldDisplay
         * @return {?}
         */
        function (shouldDisplay) {
            this._displayCrumb = shouldDisplay;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbComponent.prototype, "width", {
        /**
         * Width of the DOM element of the crumb
         */
        get: /**
         * Width of the DOM element of the crumb
         * @return {?}
         */
        function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbComponent.prototype, "displayBinding", {
        /**
         * Gets the display style of the crumb
         */
        get: /**
         * Gets the display style of the crumb
         * @return {?}
         */
        function () {
            // Set the display to none on the component, just in case the end user is hiding
            // and showing them instead of the component doing itself for reasons like responsive
            return this._displayCrumb ? undefined : 'none';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdBreadcrumbComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // set the width from the actual rendered DOM element
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._width = ((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width;
            _this._changeDetectorRef.markForCheck();
        }));
    };
    /**
     * Stop click propagation when clicking on icon
     */
    /**
     * Stop click propagation when clicking on icon
     * @param {?} event
     * @return {?}
     */
    TdBreadcrumbComponent.prototype._handleIconClick = /**
     * Stop click propagation when clicking on icon
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    TdBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-breadcrumb, a[td-breadcrumb]',
                    template: "<ng-content></ng-content>\n<mat-icon\n  *ngIf=\"_displayIcon\"\n  class=\"td-breadcrumb-separator-icon\"\n  [style.cursor]=\"'default'\"\n  (click)=\"_handleIconClick($event)\"\n>\n  {{ separatorIcon }}\n</mat-icon>\n",
                    /* tslint:disable-next-line */
                    host: {
                        class: 'mat-button td-breadcrumb',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host.td-breadcrumb{display:inline-block;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host.td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
                }] }
    ];
    /** @nocollapse */
    TdBreadcrumbComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TdBreadcrumbComponent.propDecorators = {
        displayBinding: [{ type: HostBinding, args: ['style.display',] }]
    };
    return TdBreadcrumbComponent;
}());
export { TdBreadcrumbComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._displayCrumb;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._width;
    /** @type {?} */
    TdBreadcrumbComponent.prototype.separatorIcon;
    /** @type {?} */
    TdBreadcrumbComponent.prototype._displayIcon;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImJyZWFkY3J1bWJzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFFWCx1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBK0NFLCtCQUFvQixXQUF1QixFQUFVLGtCQUFxQztRQUF0RSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFwQ2xGLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLFdBQU0sR0FBVyxDQUFDLENBQUM7O1FBRTNCLGtCQUFhLEdBQVcsZUFBZSxDQUFDOztRQUV4QyxpQkFBWSxHQUFZLElBQUksQ0FBQztJQStCZ0UsQ0FBQztJQTdCOUYsc0JBQUksK0NBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQztRQUVEOztXQUVHOzs7Ozs7UUFDSCxVQUFpQixhQUFzQjtZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsQ0FBQzs7O09BUkE7SUFhRCxzQkFBSSx3Q0FBSztRQUhUOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBS0Qsc0JBQ0ksaURBQWM7UUFKbEI7O1dBRUc7Ozs7O1FBQ0g7WUFFRSxnRkFBZ0Y7WUFDaEYscUZBQXFGO1lBQ3JGLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7Ozs7SUFJRCwrQ0FBZTs7O0lBQWY7UUFBQSxpQkFNQztRQUxDLHFEQUFxRDtRQUNyRCxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxtQkFBYSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDMUYsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxnREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLEtBQVk7UUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBRTNDLHFPQUEwQzs7b0JBRTFDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsMEJBQTBCO3FCQUNsQztvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWhCQyxVQUFVO2dCQUlWLGlCQUFpQjs7O2lDQTJDaEIsV0FBVyxTQUFDLGVBQWU7O0lBd0I5Qiw0QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBdERZLHFCQUFxQjs7Ozs7O0lBQ2hDLDhDQUFzQzs7Ozs7SUFDdEMsdUNBQTJCOztJQUUzQiw4Q0FBd0M7O0lBRXhDLDZDQUE2Qjs7Ozs7SUErQmpCLDRDQUErQjs7Ozs7SUFBRSxtREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1iLCBhW3RkLWJyZWFkY3J1bWJdJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtYXQtYnV0dG9uIHRkLWJyZWFkY3J1bWInLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2Rpc3BsYXlDcnVtYjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xuICAvLyBTZXRzIHRoZSBpY29uIHVybCBzaG93biBiZXR3ZWVuIGJyZWFkY3J1bWJzLiBEZWZhdWx0cyB0byAnY2hldnJvbl9yaWdodCdcbiAgc2VwYXJhdG9ySWNvbjogc3RyaW5nID0gJ2NoZXZyb25fcmlnaHQnO1xuICAvLyBTaG91bGQgc2hvdyB0aGUgcmlnaHQgY2hldnJvbiBvciBub3QgYmVmb3JlIHRoZSBsYWJlbFxuICBfZGlzcGxheUljb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGdldCBkaXNwbGF5Q3J1bWIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlDcnVtYjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNydW1iIG9yIG5vdFxuICAgKi9cbiAgc2V0IGRpc3BsYXlDcnVtYihzaG91bGREaXNwbGF5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheUNydW1iID0gc2hvdWxkRGlzcGxheTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgRE9NIGVsZW1lbnQgb2YgdGhlIGNydW1iXG4gICAqL1xuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZGlzcGxheSBzdHlsZSBvZiB0aGUgY3J1bWJcbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBkaXNwbGF5QmluZGluZygpOiBzdHJpbmcge1xuICAgIC8vIFNldCB0aGUgZGlzcGxheSB0byBub25lIG9uIHRoZSBjb21wb25lbnQsIGp1c3QgaW4gY2FzZSB0aGUgZW5kIHVzZXIgaXMgaGlkaW5nXG4gICAgLy8gYW5kIHNob3dpbmcgdGhlbSBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQgZG9pbmcgaXRzZWxmIGZvciByZWFzb25zIGxpa2UgcmVzcG9uc2l2ZVxuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5Q3J1bWIgPyB1bmRlZmluZWQgOiAnbm9uZSc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHNldCB0aGUgd2lkdGggZnJvbSB0aGUgYWN0dWFsIHJlbmRlcmVkIERPTSBlbGVtZW50XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl93aWR0aCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgY2xpY2sgcHJvcGFnYXRpb24gd2hlbiBjbGlja2luZyBvbiBpY29uXG4gICAqL1xuICBfaGFuZGxlSWNvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiJdfQ==