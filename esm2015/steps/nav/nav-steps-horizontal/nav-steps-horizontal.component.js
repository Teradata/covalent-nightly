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
        let element = (/** @type {?} */ (this._elementRef.nativeElement));
        // Need to take into account border, margin and padding that might be around all the crumbs
        /** @type {?} */
        let style = window.getComputedStyle(element);
        /** @type {?} */
        let borderLeft = parseInt(style.borderLeft, 10);
        /** @type {?} */
        let borderRight = parseInt(style.borderRight, 10);
        /** @type {?} */
        let marginLeft = parseInt(style.marginLeft, 10);
        /** @type {?} */
        let marginRight = parseInt(style.marginRight, 10);
        /** @type {?} */
        let paddingLeft = parseInt(style.paddingLeft, 10);
        /** @type {?} */
        let paddingRight = parseInt(style.paddingRight, 10);
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
        let stepsArray = this._steps.toArray();
        // set the index number of the step so can display that number in circle
        stepsArray.forEach((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        (step, index) => {
            if (index > 0 && index < stepsArray.length) {
                /** @type {?} */
                let separator = this._renderer.createElement('div');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJuYXYvbmF2LXN0ZXBzLWhvcml6b250YWwvbmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULFNBQVMsRUFFVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFxQmxGLE1BQU0sT0FBTyw2QkFBNkI7Ozs7Ozs7O0lBb0R4QyxZQUNVLFdBQXVCLEVBQ3ZCLGNBQTZCLEVBQ2pCLElBQW9CLEVBQ2hDLFNBQW9CLEVBQ3BCLGtCQUFxQztRQUpyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUF4RHZDLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQzs7OztRQUd2Qixl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LDZDQUF3Qzs7Ozs7SUFDeEMsa0RBQTRCOzs7OztJQUM1QiwyREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9wdGlvbmFsLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFZpZXdDaGlsZCxcbiAgUXVlcnlMaXN0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUklHSFRfQVJST1csIExFRlRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vbmF2LXN0ZXAtbGluay9uYXYtc3RlcC1saW5rLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIGRpcmVjdGlvbnMgdGhhdCBzY3JvbGxpbmcgY2FuIGdvIGluIHdoZW4gdGhlIGhlYWRlcidzIHRhYnMgZXhjZWVkIHRoZSBoZWFkZXIgd2lkdGguICdBZnRlcidcbiAqIHdpbGwgc2Nyb2xsIHRoZSBoZWFkZXIgdG93YXJkcyB0aGUgZW5kIG9mIHRoZSB0YWJzIGxpc3QgYW5kICdiZWZvcmUnIHdpbGwgc2Nyb2xsIHRvd2FyZHMgdGhlXG4gKiBiZWdpbm5pbmcgb2YgdGhlIGxpc3QuXG4gKi9cbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmF2W3RkLXN0ZXBzXVtob3Jpem9udGFsXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwcy1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcHMtaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICd0ZC1zdGVwcyB0ZC1zdGVwcy1ob3Jpem9udGFsJyxcbiAgICAnW2NsYXNzLnRkLXN0ZXAtaGVhZGVyLXBhZ2luYXRpb24tY29udHJvbHMtZW5hYmxlZF0nOiAnX3Nob3dQYWdpbmF0aW9uQ29udHJvbHMnLFxuICAgICdbY2xhc3MudGQtc3RlcC1oZWFkZXItcnRsXSc6IFwiX2dldExheW91dERpcmVjdGlvbigpID09ICdydGwnXCIsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcHNIb3Jpem9udGFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zY3JvbGxEaXN0YW5jZUNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgY29udHJvbHMgZm9yIHBhZ2luYXRpb24gc2hvdWxkIGJlIGRpc3BsYXllZCAqL1xuICBfc2hvd1BhZ2luYXRpb25Db250cm9sczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzdGVwIGxpc3QgY2FuIGJlIHNjcm9sbGVkIG1vcmUgdG93YXJkcyB0aGUgZW5kLiAqL1xuICBfZGlzYWJsZVNjcm9sbEFmdGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgc3RlcCBsaXN0IGNhbiBiZSBzY3JvbGxlZCBtb3JlIHRvd2FyZHMgdGhlIGJlZ2lubmluZy4gKi9cbiAgX2Rpc2FibGVTY3JvbGxCZWZvcmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBzdGVwc1xuICBAQ29udGVudENoaWxkcmVuKFRkTmF2U3RlcExpbmtDb21wb25lbnQpIF9zdGVwczogUXVlcnlMaXN0PFRkTmF2U3RlcExpbmtDb21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ3N0ZXBMaXN0Q29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgX3N0ZXBMaXN0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzdGVwTGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIF9zdGVwTGlzdDogRWxlbWVudFJlZjtcblxuICAvKlxuICAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBOZWVkIHRvIHRha2UgaW50byBhY2NvdW50IGJvcmRlciwgbWFyZ2luIGFuZCBwYWRkaW5nIHRoYXQgbWlnaHQgYmUgYXJvdW5kIGFsbCB0aGUgY3J1bWJzXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgbGV0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBsZXQgYm9yZGVyUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0LCAxMCk7XG4gICAgbGV0IG1hcmdpbkxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBsZXQgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApO1xuICAgIGxldCBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdSaWdodCwgMTApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLVxuICAgICAgYm9yZGVyTGVmdCAtXG4gICAgICBib3JkZXJSaWdodCAtXG4gICAgICBtYXJnaW5MZWZ0IC1cbiAgICAgIG1hcmdpblJpZ2h0IC1cbiAgICAgIHBhZGRpbmdMZWZ0IC1cbiAgICAgIHBhZGRpbmdSaWdodFxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBtZXJnZShcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLFxuICAgICAgdGhpcy5fdmlld3BvcnRSdWxlci5jaGFuZ2UoMTUwKSxcbiAgICAgIHRoaXMuX2RpciA/IHRoaXMuX2Rpci5jaGFuZ2UgOiBvZih1bmRlZmluZWQpLFxuICAgICAgdGhpcy5fc3RlcHMuY2hhbmdlcyxcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9jb25maWd1cmVTdGVwcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLl9jb25maWd1cmVTdGVwcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQodGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVTdGVwU2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gcmlnaHQgYW5kIGxlZnQga2V5IGV2ZW50cyB0byBtb3ZlIHRoZSB0aGUgdmlld3BvcnQuXG4gICAqL1xuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICB0aGlzLl9zY3JvbGxIZWFkZXIoJ2JlZm9yZScpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX3Njcm9sbEhlYWRlcignYWZ0ZXInKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHZpZXcgd2hldGhlciBwYWdpbmF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdC5cbiAgICovXG4gIHVwZGF0ZVBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpO1xuICAgIHRoaXMuX2NoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgICB0aGlzLl91cGRhdGVTdGVwU2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIC8qKiBUaGUgbGF5b3V0IGRpcmVjdGlvbiBvZiB0aGUgY29udGFpbmluZyBhcHAuICovXG4gIF9nZXRMYXlvdXREaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyICYmIHRoaXMuX2Rpci52YWx1ZSA9PT0gJ3J0bCcgPyAncnRsJyA6ICdsdHInO1xuICB9XG5cbiAgLyoqIFBlcmZvcm1zIHRoZSBDU1MgdHJhbnNmb3JtYXRpb24gb24gdGhlIHN0ZXAgbGlzdCB0aGF0IHdpbGwgY2F1c2UgdGhlIGxpc3QgdG8gc2Nyb2xsLiAqL1xuICBfdXBkYXRlU3RlcFNjcm9sbFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHRyYW5zbGF0ZVg6IG51bWJlciA9IHRoaXMuX2dldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJyA/IC10aGlzLnNjcm9sbERpc3RhbmNlIDogdGhpcy5zY3JvbGxEaXN0YW5jZTtcbiAgICAvLyBNb3ZlIHN0ZXAgbGlzdCB0aGUgYW1vdW50IG9mIHBpeGVscyBzY3JvbGxlZFxuICAgIHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtNYXRoLnJvdW5kKHRyYW5zbGF0ZVgpfXB4KWA7XG5cbiAgICAvLyBTZXR0aW5nIHRoZSBgdHJhbnNmb3JtYCBvbiBJRSB3aWxsIGNoYW5nZSB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgcGFyZW50LCBjYXVzaW5nIHRoZVxuICAgIC8vIHBvc2l0aW9uIHRvIGJlIHRocm93biBvZmYgaW4gc29tZSBjYXNlcy4gV2UgaGF2ZSB0byByZXNldCBpdCBvdXJzZWx2ZXMgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyBpdCBkb2Vzbid0IGdldCB0aHJvd24gb2ZmLlxuICAgIGlmICh0aGlzLl9nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicpIHtcbiAgICAgIHRoaXMuX3N0ZXBMaXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0ZXBMaXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRoaXMuX2dldE1heFNjcm9sbERpc3RhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGRpc3RhbmNlIGluIHBpeGVscyB0aGF0IHRoZSBzdGVwIGhlYWRlciBzaG91bGQgYmUgdHJhbnNmb3JtZWQgaW4gdGhlIFgtYXhpcy4gKi9cbiAgZ2V0IHNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbERpc3RhbmNlO1xuICB9XG4gIHNldCBzY3JvbGxEaXN0YW5jZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuX2dldE1heFNjcm9sbERpc3RhbmNlKCksIHYpKTtcblxuICAgIC8vIE1hcmsgdGhhdCB0aGUgc2Nyb2xsIGRpc3RhbmNlIGhhcyBjaGFuZ2VkIHNvIHRoYXQgYWZ0ZXIgdGhlIHZpZXcgaXMgY2hlY2tlZCwgdGhlIENTU1xuICAgIC8vIHRyYW5zZm9ybWF0aW9uIGNhbiBtb3ZlIHRoZSBoZWFkZXIuXG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIHN0ZXAgbGlzdCBpbiB0aGUgJ2JlZm9yZScgb3IgJ2FmdGVyJyBkaXJlY3Rpb24gKHRvd2FyZHMgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdCBvclxuICAgKiB0aGUgZW5kIG9mIHRoZSBsaXN0LCByZXNwZWN0aXZlbHkpLlxuICAgKi9cbiAgX3Njcm9sbEhlYWRlcihzY3JvbGxEaXI6IFNjcm9sbERpcmVjdGlvbik6IHZvaWQge1xuICAgIC8vIE1vdmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBvbmUtaGFsZiB0aGUgbGVuZ3RoIG9mIHRoZSBzdGVwIGxpc3QncyB2aWV3cG9ydC5cbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9ICgoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyA/IC0xIDogMSkgKiB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKSAvIDI7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgd2hldGhlciB0aGUgcGFnaW5hdGlvbiBjb250cm9scyBzaG91bGQgYmUgZGlzcGxheWVkLiBJZiB0aGUgc2Nyb2xsIHdpZHRoIG9mIHRoZVxuICAgKiBzdGVwIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgc2l6ZSBvZiB0aGUgaGVhZGVyIGNvbnRhaW5lciwgdGhlbiB0aGUgcGFnaW5hdGlvbiBjb250cm9scyBzaG91bGRcbiAgICogYmUgc2hvd24uXG4gICAqL1xuICBfY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0VuYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgPSAwO1xuICAgIH1cblxuICAgIGlmIChpc0VuYWJsZWQgIT09IHRoaXMuX3Nob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dQYWdpbmF0aW9uQ29udHJvbHMgPSBpc0VuYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgd2hldGhlciB0aGUgYmVmb3JlIGFuZCBhZnRlciBjb250cm9scyBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICogSWYgdGhlIGhlYWRlciBpcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0IChzY3JvbGwgZGlzdGFuY2UgaXMgZXF1YWwgdG8gMCkgdGhlbiBkaXNhYmxlIHRoZVxuICAgKiBiZWZvcmUgYnV0dG9uLiBJZiB0aGUgaGVhZGVyIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QgKHNjcm9sbCBkaXN0YW5jZSBpcyBlcXVhbCB0byB0aGVcbiAgICogbWF4aW11bSBkaXN0YW5jZSB3ZSBjYW4gc2Nyb2xsKSwgdGhlbiBkaXNhYmxlIHRoZSBhZnRlciBidXR0b24uXG4gICAqL1xuICBfY2hlY2tTY3JvbGxpbmdDb250cm9scygpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcGFnaW5hdGlvbiBhcnJvd3Mgc2hvdWxkIGJlIGFjdGl2YXRlZC5cbiAgICB0aGlzLl9kaXNhYmxlU2Nyb2xsQmVmb3JlID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gMDtcbiAgICB0aGlzLl9kaXNhYmxlU2Nyb2xsQWZ0ZXIgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSB0aGlzLl9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hhdCBpcyB0aGUgbWF4aW11bSBsZW5ndGggaW4gcGl4ZWxzIHRoYXQgY2FuIGJlIHNldCBmb3IgdGhlIHNjcm9sbCBkaXN0YW5jZS4gVGhpc1xuICAgKiBpcyBlcXVhbCB0byB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRoZSBzdGVwIGxpc3QgY29udGFpbmVyIGFuZCBzdGVwIGhlYWRlciBjb250YWluZXIuXG4gICAqL1xuICBfZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAtIHRoaXMuX3N0ZXBMaXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0ZXAgbGluZSBzZXBhcmF0b3JzIGFuZCBkaXNwbGF5IG51bWJlcnNcbiAgICovXG4gIHByaXZhdGUgX2NvbmZpZ3VyZVN0ZXBzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NlcGFyYXRvcnMuZm9yRWFjaCgoc2VwYXJhdG9yOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudCwgc2VwYXJhdG9yKTtcbiAgICB9KTtcbiAgICBsZXQgc3RlcHNBcnJheTogVGROYXZTdGVwTGlua0NvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIHNldCB0aGUgaW5kZXggbnVtYmVyIG9mIHRoZSBzdGVwIHNvIGNhbiBkaXNwbGF5IHRoYXQgbnVtYmVyIGluIGNpcmNsZVxuICAgIHN0ZXBzQXJyYXkuZm9yRWFjaCgoc3RlcDogVGROYXZTdGVwTGlua0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IHN0ZXBzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGxldCBzZXBhcmF0b3I6IGFueSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzZXBhcmF0b3IsICd0ZC1ob3Jpem9udGFsLWxpbmUnKTtcbiAgICAgICAgdGhpcy5fc2VwYXJhdG9ycy5wdXNoKHNlcGFyYXRvcik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LCBzZXBhcmF0b3IsIHN0ZXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHN0ZXAubnVtYmVyID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICB9XG59XG4iXX0=