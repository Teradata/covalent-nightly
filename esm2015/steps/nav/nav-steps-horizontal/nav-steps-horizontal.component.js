/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Optional, ContentChildren, ViewChild, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Renderer2, } from '@angular/core';
import { Subject, merge, of } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Directionality } from '@angular/cdk/bidi';
import { RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';
export class TdNavStepsHorizontalComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _viewportRuler
     * @param {?} _dir
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _viewportRuler, _dir, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._separators = [];
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
        this._widthSubject = new Subject();
        this._scrollDistance = 0;
        this._scrollDistanceChanged = false;
        /**
         * Whether the controls for pagination should be displayed
         */
        this._showPaginationControls = false;
        /**
         * Whether the step list can be scrolled more towards the end.
         */
        this._disableScrollAfter = true;
        /**
         * Whether the step list can be scrolled more towards the beginning.
         */
        this._disableScrollBefore = true;
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
     * @return {?}
     */
    ngAfterContentInit() {
        merge(this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._viewportRuler.change(150), this._dir ? this._dir.change : of(undefined), this._steps.changes)
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._configureSteps();
            this.updatePagination();
            this._changeDetectorRef.markForCheck();
        }));
        this._configureSteps();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
        if (this._scrollDistanceChanged) {
            this._updateStepScrollPosition();
            this._scrollDistanceChanged = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Listen to right and left key events to move the the viewport.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        switch (event.keyCode) {
            case LEFT_ARROW:
                this._scrollHeader('before');
                event.preventDefault();
                break;
            case RIGHT_ARROW:
                this._scrollHeader('after');
                event.preventDefault();
                break;
            default:
            // do something
        }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     * @return {?}
     */
    updatePagination() {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateStepScrollPosition();
    }
    /**
     * The layout direction of the containing app.
     * @return {?}
     */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * Performs the CSS transformation on the step list that will cause the list to scroll.
     * @return {?}
     */
    _updateStepScrollPosition() {
        /** @type {?} */
        const translateX = this._getLayoutDirection() === 'ltr' ? -this.scrollDistance : this.scrollDistance;
        // Move step list the amount of pixels scrolled
        this._stepList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
        // Setting the `transform` on IE will change the scroll offset of the parent, causing the
        // position to be thrown off in some cases. We have to reset it ourselves to ensure that
        // it doesn't get thrown off.
        if (this._getLayoutDirection() === 'ltr') {
            this._stepListContainer.nativeElement.scrollLeft = 0;
        }
        else {
            this._stepListContainer.nativeElement.scrollLeft = this._getMaxScrollDistance();
        }
    }
    /**
     * Sets the distance in pixels that the step header should be transformed in the X-axis.
     * @return {?}
     */
    get scrollDistance() {
        return this._scrollDistance;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set scrollDistance(v) {
        this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this._scrollDistanceChanged = true;
        this._checkScrollingControls();
    }
    /**
     * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively).
     * @param {?} scrollDir
     * @return {?}
     */
    _scrollHeader(scrollDir) {
        // Move the scroll distance one-half the length of the step list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this._stepListContainer.nativeElement.offsetWidth) / 2;
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * step list is wider than the size of the header container, then the pagination controls should
     * be shown.
     * @return {?}
     */
    _checkPaginationEnabled() {
        /** @type {?} */
        const isEnabled = this._stepList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this._showPaginationControls) {
            this._changeDetectorRef.markForCheck();
        }
        this._showPaginationControls = isEnabled;
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     * @return {?}
     */
    _checkScrollingControls() {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance === 0;
        this._disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the step list container and step header container.
     * @return {?}
     */
    _getMaxScrollDistance() {
        return this._stepList.nativeElement.scrollWidth - this._stepListContainer.nativeElement.offsetWidth || 0;
    }
    /**
     * Set the step line separators and display numbers
     * @private
     * @return {?}
     */
    _configureSteps() {
        this._separators.forEach((/**
         * @param {?} separator
         * @return {?}
         */
        (separator) => {
            this._renderer.removeChild(this._stepList.nativeElement, separator);
        }));
        /** @type {?} */
        const stepsArray = this._steps.toArray();
        // set the index number of the step so can display that number in circle
        stepsArray.forEach((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        (step, index) => {
            if (index > 0 && index < stepsArray.length) {
                /** @type {?} */
                const separator = this._renderer.createElement('div');
                this._renderer.addClass(separator, 'td-horizontal-line');
                this._separators.push(separator);
                this._renderer.insertBefore(this._stepList.nativeElement, separator, step.elementRef.nativeElement);
            }
            step.number = index + 1;
        }));
    }
}
TdNavStepsHorizontalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nav[td-steps][horizontal]',
                template: "<div class=\"td-steps-header\">\n  <div\n    class=\"td-step-header-pagination td-step-header-pagination-before mat-elevation-z4\"\n    aria-hidden=\"true\"\n    mat-ripple\n    [matRippleDisabled]=\"_disableScrollBefore\"\n    [class.td-step-header-pagination-disabled]=\"_disableScrollBefore\"\n    (click)=\"_scrollHeader('before')\"\n  >\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n  <div #stepListContainer class=\"td-steps-header-container\" (keydown)=\"_handleKeydown($event)\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div\n    class=\"td-step-header-pagination td-step-header-pagination-after mat-elevation-z4\"\n    aria-hidden=\"true\"\n    mat-ripple\n    [matRippleDisabled]=\"_disableScrollAfter\"\n    [class.td-step-header-pagination-disabled]=\"_disableScrollAfter\"\n    (click)=\"_scrollHeader('after')\"\n  >\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                host: {
                    'class': 'td-steps td-steps-horizontal',
                    '[class.td-step-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.td-step-header-rtl]': "_getLayoutDirection() == 'rtl'",
                },
                styles: [":host{width:100%;display:block}.td-steps-header,.td-steps-header-list{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.td-steps-header-container{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;z-index:1}.td-steps-header-list{-ms-flex-positive:1;flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1);-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}.td-step-header-pagination{position:relative;display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}:host.td-step-header-pagination-controls-enabled .td-step-header-pagination{display:-ms-flexbox;display:flex}.td-step-header-pagination-before,:host.td-step-header-rtl .td-step-header-pagination-after{padding-left:4px}.td-step-header-pagination-before .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-after .td-step-header-pagination-chevron{-ms-transform:rotate(-135deg);transform:rotate(-135deg)}.td-step-header-pagination-after,:host.td-step-header-rtl .td-step-header-pagination-before{padding-right:4px}.td-step-header-pagination-after .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-before .td-step-header-pagination-chevron{-ms-transform:rotate(45deg);transform:rotate(45deg)}.td-step-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.td-step-header-pagination-disabled{box-shadow:none;cursor:default}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;min-width:20px;-ms-flex:1;flex:1;box-sizing:border-box}"]
            }] }
];
/** @nocollapse */
TdNavStepsHorizontalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewportRuler },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdNavStepsHorizontalComponent.propDecorators = {
    _steps: [{ type: ContentChildren, args: [TdNavStepLinkComponent,] }],
    _stepListContainer: [{ type: ViewChild, args: ['stepListContainer', { static: true },] }],
    _stepList: [{ type: ViewChild, args: ['stepList', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._separators;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._scrollDistance;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._scrollDistanceChanged;
    /**
     * Whether the controls for pagination should be displayed
     * @type {?}
     */
    TdNavStepsHorizontalComponent.prototype._showPaginationControls;
    /**
     * Whether the step list can be scrolled more towards the end.
     * @type {?}
     */
    TdNavStepsHorizontalComponent.prototype._disableScrollAfter;
    /**
     * Whether the step list can be scrolled more towards the beginning.
     * @type {?}
     */
    TdNavStepsHorizontalComponent.prototype._disableScrollBefore;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._steps;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._stepListContainer;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._stepList;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._viewportRuler;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJzdGVwcy9uYXYvbmF2LXN0ZXBzLWhvcml6b250YWwvbmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULFNBQVMsRUFFVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFxQmxGLE1BQU0sT0FBTyw2QkFBNkI7Ozs7Ozs7O0lBb0R4QyxZQUNVLFdBQXVCLEVBQ3ZCLGNBQTZCLEVBQ2pCLElBQW9CLEVBQ2hDLFNBQW9CLEVBQ3BCLGtCQUFxQztRQUpyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUF4RHZDLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQzs7OztRQUd2Qixl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NkNBQXdDOzs7OztJQUN4QyxrREFBNEI7Ozs7O0lBQzVCLDJEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT3B0aW9uYWwsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVmlld0NoaWxkLFxuICBRdWVyeUxpc3QsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBSSUdIVF9BUlJPVywgTEVGVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBWaWV3cG9ydFJ1bGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbmltcG9ydCB7IFRkTmF2U3RlcExpbmtDb21wb25lbnQgfSBmcm9tICcuLi9uYXYtc3RlcC1saW5rL25hdi1zdGVwLWxpbmsuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgZGlyZWN0aW9ucyB0aGF0IHNjcm9sbGluZyBjYW4gZ28gaW4gd2hlbiB0aGUgaGVhZGVyJ3MgdGFicyBleGNlZWQgdGhlIGhlYWRlciB3aWR0aC4gJ0FmdGVyJ1xuICogd2lsbCBzY3JvbGwgdGhlIGhlYWRlciB0b3dhcmRzIHRoZSBlbmQgb2YgdGhlIHRhYnMgbGlzdCBhbmQgJ2JlZm9yZScgd2lsbCBzY3JvbGwgdG93YXJkcyB0aGVcbiAqIGJlZ2lubmluZyBvZiB0aGUgbGlzdC5cbiAqL1xuZXhwb3J0IHR5cGUgU2Nyb2xsRGlyZWN0aW9uID0gJ2FmdGVyJyB8ICdiZWZvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYXZbdGQtc3RlcHNdW2hvcml6b250YWxdJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1zdGVwcy1ob3Jpem9udGFsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ3RkLXN0ZXBzIHRkLXN0ZXBzLWhvcml6b250YWwnLFxuICAgICdbY2xhc3MudGQtc3RlcC1oZWFkZXItcGFnaW5hdGlvbi1jb250cm9scy1lbmFibGVkXSc6ICdfc2hvd1BhZ2luYXRpb25Db250cm9scycsXG4gICAgJ1tjbGFzcy50ZC1zdGVwLWhlYWRlci1ydGxdJzogXCJfZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT0gJ3J0bCdcIixcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwc0hvcml6b250YWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zZXBhcmF0b3JzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBfc2Nyb2xsRGlzdGFuY2U6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjb250cm9scyBmb3IgcGFnaW5hdGlvbiBzaG91bGQgYmUgZGlzcGxheWVkICovXG4gIF9zaG93UGFnaW5hdGlvbkNvbnRyb2xzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHN0ZXAgbGlzdCBjYW4gYmUgc2Nyb2xsZWQgbW9yZSB0b3dhcmRzIHRoZSBlbmQuICovXG4gIF9kaXNhYmxlU2Nyb2xsQWZ0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzdGVwIGxpc3QgY2FuIGJlIHNjcm9sbGVkIG1vcmUgdG93YXJkcyB0aGUgYmVnaW5uaW5nLiAqL1xuICBfZGlzYWJsZVNjcm9sbEJlZm9yZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIHN0ZXBzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZTdGVwTGlua0NvbXBvbmVudCkgX3N0ZXBzOiBRdWVyeUxpc3Q8VGROYXZTdGVwTGlua0NvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZCgnc3RlcExpc3RDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBfc3RlcExpc3RDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3N0ZXBMaXN0JywgeyBzdGF0aWM6IHRydWUgfSkgX3N0ZXBMaXN0OiBFbGVtZW50UmVmO1xuXG4gIC8qXG4gICAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIGVsZW1lbnQgY29udGFpbmVyXG4gICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGNvbnN0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgY29uc3QgYm9yZGVyTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdCwgMTApO1xuICAgIGNvbnN0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGNvbnN0IG1hcmdpbkxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBjb25zdCBtYXJnaW5SaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luUmlnaHQsIDEwKTtcbiAgICBjb25zdCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBjb25zdCBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdSaWdodCwgMTApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLVxuICAgICAgYm9yZGVyTGVmdCAtXG4gICAgICBib3JkZXJSaWdodCAtXG4gICAgICBtYXJnaW5MZWZ0IC1cbiAgICAgIG1hcmdpblJpZ2h0IC1cbiAgICAgIHBhZGRpbmdMZWZ0IC1cbiAgICAgIHBhZGRpbmdSaWdodFxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBtZXJnZShcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLFxuICAgICAgdGhpcy5fdmlld3BvcnRSdWxlci5jaGFuZ2UoMTUwKSxcbiAgICAgIHRoaXMuX2RpciA/IHRoaXMuX2Rpci5jaGFuZ2UgOiBvZih1bmRlZmluZWQpLFxuICAgICAgdGhpcy5fc3RlcHMuY2hhbmdlcyxcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9jb25maWd1cmVTdGVwcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLl9jb25maWd1cmVTdGVwcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQodGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVTdGVwU2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gcmlnaHQgYW5kIGxlZnQga2V5IGV2ZW50cyB0byBtb3ZlIHRoZSB0aGUgdmlld3BvcnQuXG4gICAqL1xuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICB0aGlzLl9zY3JvbGxIZWFkZXIoJ2JlZm9yZScpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX3Njcm9sbEhlYWRlcignYWZ0ZXInKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHZpZXcgd2hldGhlciBwYWdpbmF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdC5cbiAgICovXG4gIHVwZGF0ZVBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpO1xuICAgIHRoaXMuX2NoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgICB0aGlzLl91cGRhdGVTdGVwU2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIC8qKiBUaGUgbGF5b3V0IGRpcmVjdGlvbiBvZiB0aGUgY29udGFpbmluZyBhcHAuICovXG4gIF9nZXRMYXlvdXREaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyICYmIHRoaXMuX2Rpci52YWx1ZSA9PT0gJ3J0bCcgPyAncnRsJyA6ICdsdHInO1xuICB9XG5cbiAgLyoqIFBlcmZvcm1zIHRoZSBDU1MgdHJhbnNmb3JtYXRpb24gb24gdGhlIHN0ZXAgbGlzdCB0aGF0IHdpbGwgY2F1c2UgdGhlIGxpc3QgdG8gc2Nyb2xsLiAqL1xuICBfdXBkYXRlU3RlcFNjcm9sbFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0ZVg6IG51bWJlciA9IHRoaXMuX2dldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJyA/IC10aGlzLnNjcm9sbERpc3RhbmNlIDogdGhpcy5zY3JvbGxEaXN0YW5jZTtcbiAgICAvLyBNb3ZlIHN0ZXAgbGlzdCB0aGUgYW1vdW50IG9mIHBpeGVscyBzY3JvbGxlZFxuICAgIHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtNYXRoLnJvdW5kKHRyYW5zbGF0ZVgpfXB4KWA7XG5cbiAgICAvLyBTZXR0aW5nIHRoZSBgdHJhbnNmb3JtYCBvbiBJRSB3aWxsIGNoYW5nZSB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgcGFyZW50LCBjYXVzaW5nIHRoZVxuICAgIC8vIHBvc2l0aW9uIHRvIGJlIHRocm93biBvZmYgaW4gc29tZSBjYXNlcy4gV2UgaGF2ZSB0byByZXNldCBpdCBvdXJzZWx2ZXMgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyBpdCBkb2Vzbid0IGdldCB0aHJvd24gb2ZmLlxuICAgIGlmICh0aGlzLl9nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicpIHtcbiAgICAgIHRoaXMuX3N0ZXBMaXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0ZXBMaXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRoaXMuX2dldE1heFNjcm9sbERpc3RhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGRpc3RhbmNlIGluIHBpeGVscyB0aGF0IHRoZSBzdGVwIGhlYWRlciBzaG91bGQgYmUgdHJhbnNmb3JtZWQgaW4gdGhlIFgtYXhpcy4gKi9cbiAgZ2V0IHNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbERpc3RhbmNlO1xuICB9XG4gIHNldCBzY3JvbGxEaXN0YW5jZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuX2dldE1heFNjcm9sbERpc3RhbmNlKCksIHYpKTtcblxuICAgIC8vIE1hcmsgdGhhdCB0aGUgc2Nyb2xsIGRpc3RhbmNlIGhhcyBjaGFuZ2VkIHNvIHRoYXQgYWZ0ZXIgdGhlIHZpZXcgaXMgY2hlY2tlZCwgdGhlIENTU1xuICAgIC8vIHRyYW5zZm9ybWF0aW9uIGNhbiBtb3ZlIHRoZSBoZWFkZXIuXG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIHN0ZXAgbGlzdCBpbiB0aGUgJ2JlZm9yZScgb3IgJ2FmdGVyJyBkaXJlY3Rpb24gKHRvd2FyZHMgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdCBvclxuICAgKiB0aGUgZW5kIG9mIHRoZSBsaXN0LCByZXNwZWN0aXZlbHkpLlxuICAgKi9cbiAgX3Njcm9sbEhlYWRlcihzY3JvbGxEaXI6IFNjcm9sbERpcmVjdGlvbik6IHZvaWQge1xuICAgIC8vIE1vdmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBvbmUtaGFsZiB0aGUgbGVuZ3RoIG9mIHRoZSBzdGVwIGxpc3QncyB2aWV3cG9ydC5cbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9ICgoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyA/IC0xIDogMSkgKiB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKSAvIDI7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgd2hldGhlciB0aGUgcGFnaW5hdGlvbiBjb250cm9scyBzaG91bGQgYmUgZGlzcGxheWVkLiBJZiB0aGUgc2Nyb2xsIHdpZHRoIG9mIHRoZVxuICAgKiBzdGVwIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgc2l6ZSBvZiB0aGUgaGVhZGVyIGNvbnRhaW5lciwgdGhlbiB0aGUgcGFnaW5hdGlvbiBjb250cm9scyBzaG91bGRcbiAgICogYmUgc2hvd24uXG4gICAqL1xuICBfY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0VuYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgPSAwO1xuICAgIH1cblxuICAgIGlmIChpc0VuYWJsZWQgIT09IHRoaXMuX3Nob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dQYWdpbmF0aW9uQ29udHJvbHMgPSBpc0VuYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgd2hldGhlciB0aGUgYmVmb3JlIGFuZCBhZnRlciBjb250cm9scyBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICogSWYgdGhlIGhlYWRlciBpcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0IChzY3JvbGwgZGlzdGFuY2UgaXMgZXF1YWwgdG8gMCkgdGhlbiBkaXNhYmxlIHRoZVxuICAgKiBiZWZvcmUgYnV0dG9uLiBJZiB0aGUgaGVhZGVyIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QgKHNjcm9sbCBkaXN0YW5jZSBpcyBlcXVhbCB0byB0aGVcbiAgICogbWF4aW11bSBkaXN0YW5jZSB3ZSBjYW4gc2Nyb2xsKSwgdGhlbiBkaXNhYmxlIHRoZSBhZnRlciBidXR0b24uXG4gICAqL1xuICBfY2hlY2tTY3JvbGxpbmdDb250cm9scygpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcGFnaW5hdGlvbiBhcnJvd3Mgc2hvdWxkIGJlIGFjdGl2YXRlZC5cbiAgICB0aGlzLl9kaXNhYmxlU2Nyb2xsQmVmb3JlID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gMDtcbiAgICB0aGlzLl9kaXNhYmxlU2Nyb2xsQWZ0ZXIgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSB0aGlzLl9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hhdCBpcyB0aGUgbWF4aW11bSBsZW5ndGggaW4gcGl4ZWxzIHRoYXQgY2FuIGJlIHNldCBmb3IgdGhlIHNjcm9sbCBkaXN0YW5jZS4gVGhpc1xuICAgKiBpcyBlcXVhbCB0byB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRoZSBzdGVwIGxpc3QgY29udGFpbmVyIGFuZCBzdGVwIGhlYWRlciBjb250YWluZXIuXG4gICAqL1xuICBfZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAtIHRoaXMuX3N0ZXBMaXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0ZXAgbGluZSBzZXBhcmF0b3JzIGFuZCBkaXNwbGF5IG51bWJlcnNcbiAgICovXG4gIHByaXZhdGUgX2NvbmZpZ3VyZVN0ZXBzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NlcGFyYXRvcnMuZm9yRWFjaCgoc2VwYXJhdG9yOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudCwgc2VwYXJhdG9yKTtcbiAgICB9KTtcbiAgICBjb25zdCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgLy8gc2V0IHRoZSBpbmRleCBudW1iZXIgb2YgdGhlIHN0ZXAgc28gY2FuIGRpc3BsYXkgdGhhdCBudW1iZXIgaW4gY2lyY2xlXG4gICAgc3RlcHNBcnJheS5mb3JFYWNoKChzdGVwOiBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgc3RlcHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yOiBhbnkgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc2VwYXJhdG9yLCAndGQtaG9yaXpvbnRhbC1saW5lJyk7XG4gICAgICAgIHRoaXMuX3NlcGFyYXRvcnMucHVzaChzZXBhcmF0b3IpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudCwgc2VwYXJhdG9yLCBzdGVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBzdGVwLm51bWJlciA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgfVxufVxuIl19