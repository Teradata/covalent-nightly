/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, } from '@angular/core';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
export class TdBreadcrumbsComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _changeDetectorRef) {
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
    ngOnInit() {
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe((/**
         * @return {?}
         */
        () => {
            if (!this._resizing) {
                this._resizing = true;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._calculateVisibility();
                    this._resizing = false;
                    this._changeDetectorRef.markForCheck();
                }), 100);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setCrumbIcons();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
    }
    /*
       * Current width of the element container
       */
    /**
     * @return {?}
     */
    get nativeElementWidth() {
        /** @type {?} */
        const element = (/** @type {?} */ (this._elementRef.nativeElement));
        // Need to take into account border, margin and padding that might be around all the crumbs
        /** @type {?} */
        const style = window.getComputedStyle(element);
        /** @type {?} */
        const borderLeft = parseInt(style.borderLeft, 10);
        /** @type {?} */
        const borderRight = parseInt(style.borderRight, 10);
        /** @type {?} */
        const marginLeft = parseInt(style.marginLeft, 10);
        /** @type {?} */
        const marginRight = parseInt(style.marginRight, 10);
        /** @type {?} */
        const paddingLeft = parseInt(style.paddingLeft, 10);
        /** @type {?} */
        const paddingRight = parseInt(style.paddingRight, 10);
        return (element.getBoundingClientRect().width -
            borderLeft -
            borderRight -
            marginLeft -
            marginRight -
            paddingLeft -
            paddingRight);
    }
    /**
     * The total count of individual breadcrumbs
     * @return {?}
     */
    get count() {
        return this._breadcrumbs ? this._breadcrumbs.length : 0;
    }
    /**
     * Set the crumb icon separators
     * @private
     * @return {?}
     */
    setCrumbIcons() {
        /** @type {?} */
        const breadcrumbArray = this._breadcrumbs.toArray();
        if (breadcrumbArray.length > 0) {
            // don't show the icon on the last breadcrumb
            breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
        }
        breadcrumbArray.forEach((/**
         * @param {?} breadcrumb
         * @return {?}
         */
        (breadcrumb) => {
            breadcrumb.separatorIcon = this.separatorIcon;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _calculateVisibility() {
        /** @type {?} */
        const crumbsArray = this._breadcrumbs.toArray();
        /** @type {?} */
        let crumbWidthSum = 0;
        /** @type {?} */
        const hiddenCrumbs = [];
        // loop through crumbs in reverse order to calculate which ones should be removed
        for (let i = crumbsArray.length - 1; i >= 0; i--) {
            /** @type {?} */
            const breadcrumb = crumbsArray[i];
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
    }
}
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
TdBreadcrumbsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TdBreadcrumbsComponent.propDecorators = {
    _breadcrumbs: [{ type: ContentChildren, args: [TdBreadcrumbComponent,] }],
    separatorIcon: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJicmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFHVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFZMUUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFlakMsWUFBb0IsV0FBdUIsRUFBVSxrQkFBcUM7UUFBdEUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBZGxGLHdCQUFtQixHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3ZELGtCQUFhLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDdkQsY0FBUyxHQUFZLEtBQUssQ0FBQzs7UUFLbkMsc0JBQWlCLEdBQTRCLEVBQUUsQ0FBQzs7OztRQUt2QyxrQkFBYSxHQUFXLGVBQWUsQ0FBQztJQUU0QyxDQUFDOzs7O0lBRTlGLFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUM5QixTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMs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ZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERvQ2hlY2ssXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYnMnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtYnJlYWRjcnVtYnMnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcmVzaXplU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9yZXNpemluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICBAQ29udGVudENoaWxkcmVuKFRkQnJlYWRjcnVtYkNvbXBvbmVudCkgX2JyZWFkY3J1bWJzOiBRdWVyeUxpc3Q8VGRCcmVhZGNydW1iQ29tcG9uZW50PjtcbiAgLy8gdGhlIGxpc3Qgb2YgaGlkZGVuIGJyZWFkY3J1bWJzIG5vdCBzaG93biByaWdodCBub3cgKHJlc3BvbnNpdmUpXG4gIGhpZGRlbkJyZWFkY3J1bWJzOiBUZEJyZWFkY3J1bWJDb21wb25lbnRbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpY29uIHVybCBzaG93biBiZXR3ZWVuIGJyZWFkY3J1bWJzLiBEZWZhdWx0cyB0byAnY2hldnJvbl9yaWdodCcuXG4gICAqL1xuICBASW5wdXQoKSBzZXBhcmF0b3JJY29uOiBzdHJpbmcgPSAnY2hldnJvbl9yaWdodCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoZGVib3VuY2VUaW1lKDEwKSksXG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2FsY3VsYXRlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCh0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3J1bWJJY29ucygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKlxuICAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAvLyBOZWVkIHRvIHRha2UgaW50byBhY2NvdW50IGJvcmRlciwgbWFyZ2luIGFuZCBwYWRkaW5nIHRoYXQgbWlnaHQgYmUgYXJvdW5kIGFsbCB0aGUgY3J1bWJzXG4gICAgY29uc3Qgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBjb25zdCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgY29uc3QgYm9yZGVyUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0LCAxMCk7XG4gICAgY29uc3QgbWFyZ2luTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApO1xuICAgIGNvbnN0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGNvbnN0IHBhZGRpbmdMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApO1xuICAgIGNvbnN0IHBhZGRpbmdSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0LCAxMCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtXG4gICAgICBib3JkZXJMZWZ0IC1cbiAgICAgIGJvcmRlclJpZ2h0IC1cbiAgICAgIG1hcmdpbkxlZnQgLVxuICAgICAgbWFyZ2luUmlnaHQgLVxuICAgICAgcGFkZGluZ0xlZnQgLVxuICAgICAgcGFkZGluZ1JpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG90YWwgY291bnQgb2YgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICAgKi9cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JyZWFkY3J1bWJzID8gdGhpcy5fYnJlYWRjcnVtYnMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNydW1iIGljb24gc2VwYXJhdG9yc1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRDcnVtYkljb25zKCk6IHZvaWQge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgaWYgKGJyZWFkY3J1bWJBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBkb24ndCBzaG93IHRoZSBpY29uIG9uIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAgIGJyZWFkY3J1bWJBcnJheVticmVhZGNydW1iQXJyYXkubGVuZ3RoIC0gMV0uX2Rpc3BsYXlJY29uID0gZmFsc2U7XG4gICAgfVxuICAgIGJyZWFkY3J1bWJBcnJheS5mb3JFYWNoKChicmVhZGNydW1iOiBUZEJyZWFkY3J1bWJDb21wb25lbnQpID0+IHtcbiAgICAgIGJyZWFkY3J1bWIuc2VwYXJhdG9ySWNvbiA9IHRoaXMuc2VwYXJhdG9ySWNvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgY29uc3QgY3J1bWJzQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgIGxldCBjcnVtYldpZHRoU3VtOiBudW1iZXIgPSAwO1xuICAgIGNvbnN0IGhpZGRlbkNydW1iczogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSBbXTtcbiAgICAvLyBsb29wIHRocm91Z2ggY3J1bWJzIGluIHJldmVyc2Ugb3JkZXIgdG8gY2FsY3VsYXRlIHdoaWNoIG9uZXMgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjcnVtYnNBcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgYnJlYWRjcnVtYjogVGRCcmVhZGNydW1iQ29tcG9uZW50ID0gY3J1bWJzQXJyYXlbaV07XG4gICAgICAvLyBpZiBjcnVtYiBleGNlZWRzIHdpZHRoLCB0aGVuIHdlIHNraXAgaXQgZnJvbSB0aGUgc3VtIGFuZCBhZGQgaXQgaW50byB0aGUgaGlkZGVuY3J1bWJzIGFycmF5XG4gICAgICAvLyBhbmQgaGlkZSBpdFxuICAgICAgaWYgKGNydW1iV2lkdGhTdW0gKyBicmVhZGNydW1iLndpZHRoID4gdGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5Q3J1bWIgPSBmYWxzZTtcbiAgICAgICAgaGlkZGVuQ3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbHNlIHdlIHNob3cgaXRcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5Q3J1bWIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY3J1bWJXaWR0aFN1bSArPSBicmVhZGNydW1iLndpZHRoO1xuICAgIH1cbiAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzID0gaGlkZGVuQ3J1bWJzO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=