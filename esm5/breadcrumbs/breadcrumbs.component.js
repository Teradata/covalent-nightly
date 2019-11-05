/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, } from '@angular/core';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
var TdBreadcrumbsComponent = /** @class */ (function () {
    function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = Subscription.EMPTY;
        this._widthSubject = new Subject();
        this._resizing = false;
        // the list of hidden breadcrumbs not shown right now (responsive)
        this.hiddenBreadcrumbs = [];
        /**
         * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
         */
        this.separatorIcon = 'chevron_right';
    }
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this._resizing) {
                _this._resizing = true;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._calculateVisibility();
                    _this._resizing = false;
                    _this._changeDetectorRef.markForCheck();
                }), 100);
            }
        }));
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.setCrumbIcons();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._resizeSubscription.unsubscribe();
    };
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
        /*
         * Current width of the element container
         */
        get: /*
           * Current width of the element container
           */
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = (/** @type {?} */ (this._elementRef.nativeElement));
            // Need to take into account border, margin and padding that might be around all the crumbs
            /** @type {?} */
            var style = window.getComputedStyle(element);
            /** @type {?} */
            var borderLeft = parseInt(style.borderLeft, 10);
            /** @type {?} */
            var borderRight = parseInt(style.borderRight, 10);
            /** @type {?} */
            var marginLeft = parseInt(style.marginLeft, 10);
            /** @type {?} */
            var marginRight = parseInt(style.marginRight, 10);
            /** @type {?} */
            var paddingLeft = parseInt(style.paddingLeft, 10);
            /** @type {?} */
            var paddingRight = parseInt(style.paddingRight, 10);
            return (element.getBoundingClientRect().width -
                borderLeft -
                borderRight -
                marginLeft -
                marginRight -
                paddingLeft -
                paddingRight);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
        /**
         * The total count of individual breadcrumbs
         */
        get: /**
         * The total count of individual breadcrumbs
         * @return {?}
         */
        function () {
            return this._breadcrumbs ? this._breadcrumbs.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the crumb icon separators
     */
    /**
     * Set the crumb icon separators
     * @private
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
     * Set the crumb icon separators
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var breadcrumbArray = this._breadcrumbs.toArray();
        if (breadcrumbArray.length > 0) {
            // don't show the icon on the last breadcrumb
            breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
        }
        breadcrumbArray.forEach((/**
         * @param {?} breadcrumb
         * @return {?}
         */
        function (breadcrumb) {
            breadcrumb.separatorIcon = _this.separatorIcon;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype._calculateVisibility = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var crumbsArray = this._breadcrumbs.toArray();
        /** @type {?} */
        var crumbWidthSum = 0;
        /** @type {?} */
        var hiddenCrumbs = [];
        // loop through crumbs in reverse order to calculate which ones should be removed
        for (var i = crumbsArray.length - 1; i >= 0; i--) {
            /** @type {?} */
            var breadcrumb = crumbsArray[i];
            // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
            // and hide it
            if (crumbWidthSum + breadcrumb.width > this.nativeElementWidth) {
                breadcrumb.displayCrumb = false;
                hiddenCrumbs.push(breadcrumb);
            }
            else {
                // else we show it
                breadcrumb.displayCrumb = true;
            }
            crumbWidthSum += breadcrumb.width;
        }
        this.hiddenBreadcrumbs = hiddenCrumbs;
        this._changeDetectorRef.markForCheck();
    };
    TdBreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-breadcrumbs',
                    template: "<ng-content></ng-content>\n",
                    /* tslint:disable-next-line */
                    host: {
                        class: 'td-breadcrumbs',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;width:100%}:host.td-breadcrumbs{white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    TdBreadcrumbsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TdBreadcrumbsComponent.propDecorators = {
        _breadcrumbs: [{ type: ContentChildren, args: [TdBreadcrumbComponent,] }],
        separatorIcon: [{ type: Input }]
    };
    return TdBreadcrumbsComponent;
}());
export { TdBreadcrumbsComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._resizeSubscription;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._resizing;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._breadcrumbs;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype.hiddenBreadcrumbs;
    /**
     * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
     * @type {?}
     */
    TdBreadcrumbsComponent.prototype.separatorIcon;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJicmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFHVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUU7SUF5QkUsZ0NBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWRsRix3QkFBbUIsR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN2RCxrQkFBYSxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ3ZELGNBQVMsR0FBWSxLQUFLLENBQUM7O1FBS25DLHNCQUFpQixHQUE0QixFQUFFLENBQUM7Ozs7UUFLdkMsa0JBQWEsR0FBVyxlQUFlLENBQUM7SUFFNEMsQ0FBQzs7OztJQUU5Rix5Q0FBUTs7O0lBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQzlCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxv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LDJDQUFtQzs7SUFHbkMsOENBQXVGOztJQUV2RixtREFBZ0Q7Ozs7O0lBS2hELCtDQUFpRDs7Ozs7SUFFckMsNkNBQStCOzs7OztJQUFFLG9EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRG9DaGVjayxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1icycsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgY2xhc3M6ICd0ZC1icmVhZGNydW1icycsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRCcmVhZGNydW1iQ29tcG9uZW50KSBfYnJlYWRjcnVtYnM6IFF1ZXJ5TGlzdDxUZEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gYnJlYWRjcnVtYnMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuQnJlYWRjcnVtYnM6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGljb24gdXJsIHNob3duIGJldHdlZW4gYnJlYWRjcnVtYnMuIERlZmF1bHRzIHRvICdjaGV2cm9uX3JpZ2h0Jy5cbiAgICovXG4gIEBJbnB1dCgpIHNlcGFyYXRvckljb246IHN0cmluZyA9ICdjaGV2cm9uX3JpZ2h0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShkZWJvdW5jZVRpbWUoMTApKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDcnVtYkljb25zKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qXG4gICAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIGVsZW1lbnQgY29udGFpbmVyXG4gICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vIE5lZWQgdG8gdGFrZSBpbnRvIGFjY291bnQgYm9yZGVyLCBtYXJnaW4gYW5kIHBhZGRpbmcgdGhhdCBtaWdodCBiZSBhcm91bmQgYWxsIHRoZSBjcnVtYnNcbiAgICBjb25zdCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBjb25zdCBib3JkZXJSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyUmlnaHQsIDEwKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgY29uc3QgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgY29uc3QgcGFkZGluZ0xlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCk7XG4gICAgY29uc3QgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiAoXG4gICAgICBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC1cbiAgICAgIGJvcmRlckxlZnQgLVxuICAgICAgYm9yZGVyUmlnaHQgLVxuICAgICAgbWFyZ2luTGVmdCAtXG4gICAgICBtYXJnaW5SaWdodCAtXG4gICAgICBwYWRkaW5nTGVmdCAtXG4gICAgICBwYWRkaW5nUmlnaHRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBjb3VudCBvZiBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYnJlYWRjcnVtYnMgPyB0aGlzLl9icmVhZGNydW1icy5sZW5ndGggOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3J1bWIgaWNvbiBzZXBhcmF0b3JzXG4gICAqL1xuICBwcml2YXRlIHNldENydW1iSWNvbnMoKTogdm9pZCB7XG4gICAgY29uc3QgYnJlYWRjcnVtYkFycmF5OiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IHRoaXMuX2JyZWFkY3J1bWJzLnRvQXJyYXkoKTtcbiAgICBpZiAoYnJlYWRjcnVtYkFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGRvbid0IHNob3cgdGhlIGljb24gb24gdGhlIGxhc3QgYnJlYWRjcnVtYlxuICAgICAgYnJlYWRjcnVtYkFycmF5W2JyZWFkY3J1bWJBcnJheS5sZW5ndGggLSAxXS5fZGlzcGxheUljb24gPSBmYWxzZTtcbiAgICB9XG4gICAgYnJlYWRjcnVtYkFycmF5LmZvckVhY2goKGJyZWFkY3J1bWI6IFRkQnJlYWRjcnVtYkNvbXBvbmVudCkgPT4ge1xuICAgICAgYnJlYWRjcnVtYi5zZXBhcmF0b3JJY29uID0gdGhpcy5zZXBhcmF0b3JJY29uO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICBjb25zdCBjcnVtYnNBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgbGV0IGNydW1iV2lkdGhTdW06IG51bWJlciA9IDA7XG4gICAgY29uc3QgaGlkZGVuQ3J1bWJzOiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IFtdO1xuICAgIC8vIGxvb3AgdGhyb3VnaCBjcnVtYnMgaW4gcmV2ZXJzZSBvcmRlciB0byBjYWxjdWxhdGUgd2hpY2ggb25lcyBzaG91bGQgYmUgcmVtb3ZlZFxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNydW1ic0FycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBicmVhZGNydW1iOiBUZEJyZWFkY3J1bWJDb21wb25lbnQgPSBjcnVtYnNBcnJheVtpXTtcbiAgICAgIC8vIGlmIGNydW1iIGV4Y2VlZHMgd2lkdGgsIHRoZW4gd2Ugc2tpcCBpdCBmcm9tIHRoZSBzdW0gYW5kIGFkZCBpdCBpbnRvIHRoZSBoaWRkZW5jcnVtYnMgYXJyYXlcbiAgICAgIC8vIGFuZCBoaWRlIGl0XG4gICAgICBpZiAoY3J1bWJXaWR0aFN1bSArIGJyZWFkY3J1bWIud2lkdGggPiB0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCkge1xuICAgICAgICBicmVhZGNydW1iLmRpc3BsYXlDcnVtYiA9IGZhbHNlO1xuICAgICAgICBoaWRkZW5DcnVtYnMucHVzaChicmVhZGNydW1iKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVsc2Ugd2Ugc2hvdyBpdFxuICAgICAgICBicmVhZGNydW1iLmRpc3BsYXlDcnVtYiA9IHRydWU7XG4gICAgICB9XG4gICAgICBjcnVtYldpZHRoU3VtICs9IGJyZWFkY3J1bWIud2lkdGg7XG4gICAgfVxuICAgIHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMgPSBoaWRkZW5DcnVtYnM7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==