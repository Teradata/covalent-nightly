/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, } from '@angular/core';
import { Subscription, Subject, fromEvent, merge, } from 'rxjs';
import { debounceTime, distinctUntilChanged, } from 'rxjs/operators';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
var TdBreadcrumbsComponent = /** @class */ (function () {
    function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = Subscription.EMPTY;
        this._widthSubject = new Subject();
        this._resizing = false;
        // the list of hidden breadcrumbs not shown right now (responsive)
        this.hiddenBreadcrumbs = new Array();
        /**
         * Sets the icon url shown between breadcrumbs. Defaults to right chevron.
         */
        this.separatorIcon = 'navigate_next';
    }
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe(function () {
            if (!_this._resizing) {
                _this._resizing = true;
                setTimeout(function () {
                    _this.displayWidthAvailableCrumbs();
                    _this._resizing = false;
                    _this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
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
            var element = ((/** @type {?} */ (this._elementRef.nativeElement)));
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
            return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
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
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
     * Set the crumb icon separators
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
        breadcrumbArray.forEach(function (breadcrumb) {
            breadcrumb.separatorIcon = _this.separatorIcon;
        });
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.displayWidthAvailableCrumbs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var curTotCrumbWidth = 0;
        /** @type {?} */
        var crumbsArray = this._breadcrumbs.toArray();
        // calculate the current width of the shown breadcrumbs
        for (var i = this.hiddenBreadcrumbs.length; i < crumbsArray.length; i++) {
            curTotCrumbWidth += crumbsArray[i].width;
        }
        // hide the first bread crumb if window size is smaller than all the crumb sizes
        if (this.nativeElementWidth < curTotCrumbWidth) {
            crumbsArray[this.hiddenBreadcrumbs.length].displayCrumb = false;
            this.hiddenBreadcrumbs.push(crumbsArray[this.hiddenBreadcrumbs.length]);
            this.displayWidthAvailableCrumbs();
        }
        else {
            // loop over all the hidden crumbs and see if adding them back in will
            // fit in the current window size
            /** @type {?} */
            var totalHidden = this.hiddenBreadcrumbs.length - 1;
            for (var i = totalHidden; i >= 0; i--) {
                /** @type {?} */
                var hiddenCrumbWidth = crumbsArray[i].width;
                if ((curTotCrumbWidth + hiddenCrumbWidth) < this.nativeElementWidth) {
                    crumbsArray[i].displayCrumb = true;
                    crumbsArray[i + 1]._displayIcon = true;
                    this.hiddenBreadcrumbs.pop();
                    // recalculate the total width based on adding back in a crumb
                    /** @type {?} */
                    var newTotCrumbWidth = 0;
                    for (var j = this.hiddenBreadcrumbs.length; j < crumbsArray.length; j++) {
                        newTotCrumbWidth += crumbsArray[j].width;
                    }
                    curTotCrumbWidth = newTotCrumbWidth;
                }
                else if (i === totalHidden) {
                    // need to break out of loop here because the first in the hidden
                    // list can't fit in current window size
                    break;
                }
            }
        }
    };
    TdBreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-breadcrumbs',
                    template: "<div class=\"td-breadcrumbs\">\n  <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;width:100%}:host .td-breadcrumbs{white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    TdBreadcrumbsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TdBreadcrumbsComponent.propDecorators = {
        _breadcrumbs: [{ type: ContentChildren, args: [TdBreadcrumbComponent,] }],
        separatorIcon: [{ type: Input, args: ['separatorIcon',] }]
    };
    return TdBreadcrumbsComponent;
}());
export { TdBreadcrumbsComponent };
if (false) {
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._resizeSubscription;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._widthSubject;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._resizing;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._breadcrumbs;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype.hiddenBreadcrumbs;
    /**
     * Sets the icon url shown between breadcrumbs. Defaults to right chevron.
     * @type {?}
     */
    TdBreadcrumbsComponent.prototype.separatorIcon;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._elementRef;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJicmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFHVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsU0FBUyxFQUNULEtBQUssR0FDTixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUU7SUFzQkUsZ0NBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWRsRix3QkFBbUIsR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN2RCxrQkFBYSxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ3ZELGNBQVMsR0FBWSxLQUFLLENBQUM7O1FBS25DLHNCQUFpQixHQUE0QixJQUFJLEtBQUssRUFBRSxDQUFDOzs7O1FBS2pDLGtCQUFhLEdBQVcsZUFBZSxDQUFDO0lBRThCLENBQUM7Ozs7SUFFL0YseUNBQVE7OztJQUFSO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQzlCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QixZQUFZLENBQUMsRUFBRSxDQUFDLENBQ2pCLEVBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FB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LEVBQUUsQ0FBQzs7O3dCQUV6QixnQkFBZ0IsR0FBVyxDQUFDO29CQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQy9FLGdCQUFnQixJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQzFDO29CQUNELGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO2lCQUNyQztxQkFBTSxJQUFJLENBQUMsS0FBSyxXQUFXLEVBQUU7b0JBQzVCLGlFQUFpRTtvQkFDakUsd0NBQXdDO29CQUN4QyxNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtJQUNILENBQUM7O2dCQXBJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFFMUIsaUZBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQXRCQyxVQUFVO2dCQURWLGlCQUFpQjs7OytCQStCaEIsZUFBZSxTQUFDLHFCQUFxQjtnQ0FPckMsS0FBSyxTQUFDLGVBQWU7O0lBa0h4Qiw2QkFBQztDQUFBLEFBdElELElBc0lDO1NBaElZLHNCQUFzQjs7O0lBRWpDLHFEQUErRDs7SUFDL0QsK0NBQStEOztJQUMvRCwyQ0FBbUM7O0lBR25DLDhDQUF1Rjs7SUFFdkYsbURBQXlEOzs7OztJQUt6RCwrQ0FBZ0U7O0lBRXBELDZDQUErQjs7SUFBRSxvREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERvQ2hlY2ssXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFN1YnNjcmlwdGlvbixcbiAgU3ViamVjdCxcbiAgZnJvbUV2ZW50LFxuICBtZXJnZSxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWJyZWFkY3J1bWJzJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2ssIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfcmVzaXplU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9yZXNpemluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICBAQ29udGVudENoaWxkcmVuKFRkQnJlYWRjcnVtYkNvbXBvbmVudCkgX2JyZWFkY3J1bWJzOiBRdWVyeUxpc3Q8VGRCcmVhZGNydW1iQ29tcG9uZW50PjtcbiAgLy8gdGhlIGxpc3Qgb2YgaGlkZGVuIGJyZWFkY3J1bWJzIG5vdCBzaG93biByaWdodCBub3cgKHJlc3BvbnNpdmUpXG4gIGhpZGRlbkJyZWFkY3J1bWJzOiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IG5ldyBBcnJheSgpO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpY29uIHVybCBzaG93biBiZXR3ZWVuIGJyZWFkY3J1bWJzLiBEZWZhdWx0cyB0byByaWdodCBjaGV2cm9uLlxuICAgKi9cbiAgQElucHV0KCdzZXBhcmF0b3JJY29uJykgc2VwYXJhdG9ySWNvbjogc3RyaW5nID0gJ25hdmlnYXRlX25leHQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwKSxcbiAgICAgICksXG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9yZXNpemluZykge1xuICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGxheVdpZHRoQXZhaWxhYmxlQ3J1bWJzKCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDcnVtYkljb25zKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qXG4gICogQ3VycmVudCB3aWR0aCBvZiB0aGUgZWxlbWVudCBjb250YWluZXJcbiAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyBOZWVkIHRvIHRha2UgaW50byBhY2NvdW50IGJvcmRlciwgbWFyZ2luIGFuZCBwYWRkaW5nIHRoYXQgbWlnaHQgYmUgYXJvdW5kIGFsbCB0aGUgY3J1bWJzXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgbGV0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBsZXQgYm9yZGVyUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0LCAxMCk7XG4gICAgbGV0IG1hcmdpbkxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBsZXQgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApO1xuICAgIGxldCBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdSaWdodCwgMTApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBib3JkZXJMZWZ0IC0gYm9yZGVyUmlnaHQgLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQgLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG90YWwgY291bnQgb2YgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICAgKi9cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JyZWFkY3J1bWJzID8gdGhpcy5fYnJlYWRjcnVtYnMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNydW1iIGljb24gc2VwYXJhdG9yc1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRDcnVtYkljb25zKCk6IHZvaWQge1xuICAgIGxldCBicmVhZGNydW1iQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgIGlmIChicmVhZGNydW1iQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgaWNvbiBvbiB0aGUgbGFzdCBicmVhZGNydW1iXG4gICAgICBicmVhZGNydW1iQXJyYXlbYnJlYWRjcnVtYkFycmF5Lmxlbmd0aCAtIDFdLl9kaXNwbGF5SWNvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBicmVhZGNydW1iQXJyYXkuZm9yRWFjaCgoYnJlYWRjcnVtYjogVGRCcmVhZGNydW1iQ29tcG9uZW50KSA9PiB7XG4gICAgICBicmVhZGNydW1iLnNlcGFyYXRvckljb24gPSB0aGlzLnNlcGFyYXRvckljb247XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlXaWR0aEF2YWlsYWJsZUNydW1icygpOiB2b2lkIHtcbiAgICBsZXQgY3VyVG90Q3J1bWJXaWR0aDogbnVtYmVyID0gMDtcbiAgICBsZXQgY3J1bWJzQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCB3aWR0aCBvZiB0aGUgc2hvd24gYnJlYWRjcnVtYnNcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aDsgaSA8IGNydW1ic0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJUb3RDcnVtYldpZHRoICs9IGNydW1ic0FycmF5W2ldLndpZHRoO1xuICAgIH1cbiAgICAvLyBoaWRlIHRoZSBmaXJzdCBicmVhZCBjcnVtYiBpZiB3aW5kb3cgc2l6ZSBpcyBzbWFsbGVyIHRoYW4gYWxsIHRoZSBjcnVtYiBzaXplc1xuICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCA8IGN1clRvdENydW1iV2lkdGgpIHtcbiAgICAgIGNydW1ic0FycmF5W3RoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoXS5kaXNwbGF5Q3J1bWIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMucHVzaChjcnVtYnNBcnJheVt0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aF0pO1xuICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVDcnVtYnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbG9vcCBvdmVyIGFsbCB0aGUgaGlkZGVuIGNydW1icyBhbmQgc2VlIGlmIGFkZGluZyB0aGVtIGJhY2sgaW4gd2lsbFxuICAgICAgLy8gZml0IGluIHRoZSBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICBsZXQgdG90YWxIaWRkZW46IG51bWJlciA9IHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRvdGFsSGlkZGVuOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgaGlkZGVuQ3J1bWJXaWR0aDogbnVtYmVyID0gY3J1bWJzQXJyYXlbaV0ud2lkdGg7XG4gICAgICAgIGlmICgoY3VyVG90Q3J1bWJXaWR0aCArIGhpZGRlbkNydW1iV2lkdGgpIDwgdGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgICBjcnVtYnNBcnJheVtpXS5kaXNwbGF5Q3J1bWIgPSB0cnVlO1xuICAgICAgICAgIGNydW1ic0FycmF5W2kgKyAxXS5fZGlzcGxheUljb24gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMucG9wKCk7XG4gICAgICAgICAgLy8gcmVjYWxjdWxhdGUgdGhlIHRvdGFsIHdpZHRoIGJhc2VkIG9uIGFkZGluZyBiYWNrIGluIGEgY3J1bWJcbiAgICAgICAgICBsZXQgbmV3VG90Q3J1bWJXaWR0aDogbnVtYmVyID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzLmxlbmd0aDsgaiA8IGNydW1ic0FycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBuZXdUb3RDcnVtYldpZHRoICs9IGNydW1ic0FycmF5W2pdLndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJUb3RDcnVtYldpZHRoID0gbmV3VG90Q3J1bWJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSB0b3RhbEhpZGRlbikge1xuICAgICAgICAgIC8vIG5lZWQgdG8gYnJlYWsgb3V0IG9mIGxvb3AgaGVyZSBiZWNhdXNlIHRoZSBmaXJzdCBpbiB0aGUgaGlkZGVuXG4gICAgICAgICAgLy8gbGlzdCBjYW4ndCBmaXQgaW4gY3VycmVudCB3aW5kb3cgc2l6ZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==