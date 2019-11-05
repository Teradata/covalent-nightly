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
var TdNavStepsHorizontalComponent = /** @class */ (function () {
    function TdNavStepsHorizontalComponent(_elementRef, _viewportRuler, _dir, _renderer, _changeDetectorRef) {
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
    Object.defineProperty(TdNavStepsHorizontalComponent.prototype, "nativeElementWidth", {
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
    /**
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        merge(this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._viewportRuler.change(150), this._dir ? this._dir.change : of(undefined), this._steps.changes)
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._configureSteps();
            _this.updatePagination();
            _this._changeDetectorRef.markForCheck();
        }));
        this._configureSteps();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
        if (this._scrollDistanceChanged) {
            this._updateStepScrollPosition();
            this._scrollDistanceChanged = false;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Listen to right and left key events to move the the viewport.
     */
    /**
     * Listen to right and left key events to move the the viewport.
     * @param {?} event
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._handleKeydown = /**
     * Listen to right and left key events to move the the viewport.
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * Updates the view whether pagination should be enabled or not.
     */
    /**
     * Updates the view whether pagination should be enabled or not.
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype.updatePagination = /**
     * Updates the view whether pagination should be enabled or not.
     * @return {?}
     */
    function () {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateStepScrollPosition();
    };
    /** The layout direction of the containing app. */
    /**
     * The layout direction of the containing app.
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._getLayoutDirection = /**
     * The layout direction of the containing app.
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /** Performs the CSS transformation on the step list that will cause the list to scroll. */
    /**
     * Performs the CSS transformation on the step list that will cause the list to scroll.
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._updateStepScrollPosition = /**
     * Performs the CSS transformation on the step list that will cause the list to scroll.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var translateX = this._getLayoutDirection() === 'ltr' ? -this.scrollDistance : this.scrollDistance;
        // Move step list the amount of pixels scrolled
        this._stepList.nativeElement.style.transform = "translateX(" + Math.round(translateX) + "px)";
        // Setting the `transform` on IE will change the scroll offset of the parent, causing the
        // position to be thrown off in some cases. We have to reset it ourselves to ensure that
        // it doesn't get thrown off.
        if (this._getLayoutDirection() === 'ltr') {
            this._stepListContainer.nativeElement.scrollLeft = 0;
        }
        else {
            this._stepListContainer.nativeElement.scrollLeft = this._getMaxScrollDistance();
        }
    };
    Object.defineProperty(TdNavStepsHorizontalComponent.prototype, "scrollDistance", {
        /** Sets the distance in pixels that the step header should be transformed in the X-axis. */
        get: /**
         * Sets the distance in pixels that the step header should be transformed in the X-axis.
         * @return {?}
         */
        function () {
            return this._scrollDistance;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this._scrollDistanceChanged = true;
            this._checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively).
     */
    /**
     * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively).
     * @param {?} scrollDir
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._scrollHeader = /**
     * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively).
     * @param {?} scrollDir
     * @return {?}
     */
    function (scrollDir) {
        // Move the scroll distance one-half the length of the step list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this._stepListContainer.nativeElement.offsetWidth) / 2;
    };
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * step list is wider than the size of the header container, then the pagination controls should
     * be shown.
     */
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * step list is wider than the size of the header container, then the pagination controls should
     * be shown.
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._checkPaginationEnabled = /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * step list is wider than the size of the header container, then the pagination controls should
     * be shown.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isEnabled = this._stepList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this._showPaginationControls) {
            this._changeDetectorRef.markForCheck();
        }
        this._showPaginationControls = isEnabled;
    };
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     */
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._checkScrollingControls = /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     * @return {?}
     */
    function () {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance === 0;
        this._disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the step list container and step header container.
     */
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the step list container and step header container.
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._getMaxScrollDistance = /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the step list container and step header container.
     * @return {?}
     */
    function () {
        return this._stepList.nativeElement.scrollWidth - this._stepListContainer.nativeElement.offsetWidth || 0;
    };
    /**
     * Set the step line separators and display numbers
     */
    /**
     * Set the step line separators and display numbers
     * @private
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._configureSteps = /**
     * Set the step line separators and display numbers
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._separators.forEach((/**
         * @param {?} separator
         * @return {?}
         */
        function (separator) {
            _this._renderer.removeChild(_this._stepList.nativeElement, separator);
        }));
        /** @type {?} */
        var stepsArray = this._steps.toArray();
        // set the index number of the step so can display that number in circle
        stepsArray.forEach((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        function (step, index) {
            if (index > 0 && index < stepsArray.length) {
                /** @type {?} */
                var separator = _this._renderer.createElement('div');
                _this._renderer.addClass(separator, 'td-horizontal-line');
                _this._separators.push(separator);
                _this._renderer.insertBefore(_this._stepList.nativeElement, separator, step.elementRef.nativeElement);
            }
            step.number = index + 1;
        }));
    };
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
    TdNavStepsHorizontalComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewportRuler },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdNavStepsHorizontalComponent.propDecorators = {
        _steps: [{ type: ContentChildren, args: [TdNavStepLinkComponent,] }],
        _stepListContainer: [{ type: ViewChild, args: ['stepListContainer', { static: true },] }],
        _stepList: [{ type: ViewChild, args: ['stepList', { static: true },] }]
    };
    return TdNavStepsHorizontalComponent;
}());
export { TdNavStepsHorizontalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJzdGVwcy9uYXYvbmF2LXN0ZXBzLWhvcml6b250YWwvbmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULFNBQVMsRUFFVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFTbEY7SUFnRUUsdUNBQ1UsV0FBdUIsRUFDdkIsY0FBNkIsRUFDakIsSUFBb0IsRUFDaEMsU0FBb0IsRUFDcEIsa0JBQXFDO1FBSnJDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ2pCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXhEdkMsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDOzs7O1FBR3ZCLGVBQVUsR0FBa0IsSUFBSSxPQUFPLEVBQVEs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QUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFzTXpDLG9DQUFDO0NBQUEsQUExT0QsSUEwT0M7U0E5TlksNkJBQTZCOzs7Ozs7SUFDeEMsb0RBQXdDOzs7Ozs7SUFHeEMsbURBQWlFOzs7OztJQUVqRSxzREFBK0Q7Ozs7O0lBRS9ELHdEQUFvQzs7Ozs7SUFDcEMsK0RBQWdEOzs7OztJQUdoRCxnRUFBeUM7Ozs7O0lBR3pDLDREQUFvQzs7Ozs7SUFHcEMsNkRBQXFDOztJQUdyQywrQ0FBbUY7O0lBRW5GLDJEQUFpRjs7SUFDakYsa0RBQStEOzs7OztJQTZCN0Qsb0RBQStCOzs7OztJQUMvQix1REFBcUM7Ozs7O0lBQ3JDLDZDQUF3Qzs7Ozs7SUFDeEMsa0RBQTRCOzs7OztJQUM1QiwyREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9wdGlvbmFsLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFZpZXdDaGlsZCxcbiAgUXVlcnlMaXN0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUklHSFRfQVJST1csIExFRlRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vbmF2LXN0ZXAtbGluay9uYXYtc3RlcC1saW5rLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIGRpcmVjdGlvbnMgdGhhdCBzY3JvbGxpbmcgY2FuIGdvIGluIHdoZW4gdGhlIGhlYWRlcidzIHRhYnMgZXhjZWVkIHRoZSBoZWFkZXIgd2lkdGguICdBZnRlcidcbiAqIHdpbGwgc2Nyb2xsIHRoZSBoZWFkZXIgdG93YXJkcyB0aGUgZW5kIG9mIHRoZSB0YWJzIGxpc3QgYW5kICdiZWZvcmUnIHdpbGwgc2Nyb2xsIHRvd2FyZHMgdGhlXG4gKiBiZWdpbm5pbmcgb2YgdGhlIGxpc3QuXG4gKi9cbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmF2W3RkLXN0ZXBzXVtob3Jpem9udGFsXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwcy1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcHMtaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICd0ZC1zdGVwcyB0ZC1zdGVwcy1ob3Jpem9udGFsJyxcbiAgICAnW2NsYXNzLnRkLXN0ZXAtaGVhZGVyLXBhZ2luYXRpb24tY29udHJvbHMtZW5hYmxlZF0nOiAnX3Nob3dQYWdpbmF0aW9uQ29udHJvbHMnLFxuICAgICdbY2xhc3MudGQtc3RlcC1oZWFkZXItcnRsXSc6IFwiX2dldExheW91dERpcmVjdGlvbigpID09ICdydGwnXCIsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcHNIb3Jpem9udGFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zY3JvbGxEaXN0YW5jZUNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgY29udHJvbHMgZm9yIHBhZ2luYXRpb24gc2hvdWxkIGJlIGRpc3BsYXllZCAqL1xuICBfc2hvd1BhZ2luYXRpb25Db250cm9sczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzdGVwIGxpc3QgY2FuIGJlIHNjcm9sbGVkIG1vcmUgdG93YXJkcyB0aGUgZW5kLiAqL1xuICBfZGlzYWJsZVNjcm9sbEFmdGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgc3RlcCBsaXN0IGNhbiBiZSBzY3JvbGxlZCBtb3JlIHRvd2FyZHMgdGhlIGJlZ2lubmluZy4gKi9cbiAgX2Rpc2FibGVTY3JvbGxCZWZvcmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBzdGVwc1xuICBAQ29udGVudENoaWxkcmVuKFRkTmF2U3RlcExpbmtDb21wb25lbnQpIF9zdGVwczogUXVlcnlMaXN0PFRkTmF2U3RlcExpbmtDb21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ3N0ZXBMaXN0Q29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgX3N0ZXBMaXN0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzdGVwTGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIF9zdGVwTGlzdDogRWxlbWVudFJlZjtcblxuICAvKlxuICAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIE5lZWQgdG8gdGFrZSBpbnRvIGFjY291bnQgYm9yZGVyLCBtYXJnaW4gYW5kIHBhZGRpbmcgdGhhdCBtaWdodCBiZSBhcm91bmQgYWxsIHRoZSBjcnVtYnNcbiAgICBjb25zdCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBjb25zdCBib3JkZXJSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyUmlnaHQsIDEwKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgY29uc3QgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgY29uc3QgcGFkZGluZ0xlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCk7XG4gICAgY29uc3QgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiAoXG4gICAgICBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC1cbiAgICAgIGJvcmRlckxlZnQgLVxuICAgICAgYm9yZGVyUmlnaHQgLVxuICAgICAgbWFyZ2luTGVmdCAtXG4gICAgICBtYXJnaW5SaWdodCAtXG4gICAgICBwYWRkaW5nTGVmdCAtXG4gICAgICBwYWRkaW5nUmlnaHRcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKSxcbiAgICAgIHRoaXMuX3ZpZXdwb3J0UnVsZXIuY2hhbmdlKDE1MCksXG4gICAgICB0aGlzLl9kaXIgPyB0aGlzLl9kaXIuY2hhbmdlIDogb2YodW5kZWZpbmVkKSxcbiAgICAgIHRoaXMuX3N0ZXBzLmNoYW5nZXMsXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njcm9sbERpc3RhbmNlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlU3RlcFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuIHRvIHJpZ2h0IGFuZCBsZWZ0IGtleSBldmVudHMgdG8gbW92ZSB0aGUgdGhlIHZpZXdwb3J0LlxuICAgKi9cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgdGhpcy5fc2Nyb2xsSGVhZGVyKCdiZWZvcmUnKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLl9zY3JvbGxIZWFkZXIoJ2FmdGVyJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2aWV3IHdoZXRoZXIgcGFnaW5hdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBvciBub3QuXG4gICAqL1xuICB1cGRhdGVQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTtcbiAgICB0aGlzLl9jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gICAgdGhpcy5fdXBkYXRlU3RlcFNjcm9sbFBvc2l0aW9uKCk7XG4gIH1cblxuICAvKiogVGhlIGxheW91dCBkaXJlY3Rpb24gb2YgdGhlIGNvbnRhaW5pbmcgYXBwLiAqL1xuICBfZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpciAmJiB0aGlzLl9kaXIudmFsdWUgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcbiAgfVxuXG4gIC8qKiBQZXJmb3JtcyB0aGUgQ1NTIHRyYW5zZm9ybWF0aW9uIG9uIHRoZSBzdGVwIGxpc3QgdGhhdCB3aWxsIGNhdXNlIHRoZSBsaXN0IHRvIHNjcm9sbC4gKi9cbiAgX3VwZGF0ZVN0ZXBTY3JvbGxQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGVYOiBudW1iZXIgPSB0aGlzLl9nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicgPyAtdGhpcy5zY3JvbGxEaXN0YW5jZSA6IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgLy8gTW92ZSBzdGVwIGxpc3QgdGhlIGFtb3VudCBvZiBwaXhlbHMgc2Nyb2xsZWRcbiAgICB0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7TWF0aC5yb3VuZCh0cmFuc2xhdGVYKX1weClgO1xuXG4gICAgLy8gU2V0dGluZyB0aGUgYHRyYW5zZm9ybWAgb24gSUUgd2lsbCBjaGFuZ2UgdGhlIHNjcm9sbCBvZmZzZXQgb2YgdGhlIHBhcmVudCwgY2F1c2luZyB0aGVcbiAgICAvLyBwb3NpdGlvbiB0byBiZSB0aHJvd24gb2ZmIGluIHNvbWUgY2FzZXMuIFdlIGhhdmUgdG8gcmVzZXQgaXQgb3Vyc2VsdmVzIHRvIGVuc3VyZSB0aGF0XG4gICAgLy8gaXQgZG9lc24ndCBnZXQgdGhyb3duIG9mZi5cbiAgICBpZiAodGhpcy5fZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInKSB7XG4gICAgICB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0aGlzLl9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgdGhhdCB0aGUgc3RlcCBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXG4gIGdldCBzY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxEaXN0YW5jZTtcbiAgfVxuICBzZXQgc2Nyb2xsRGlzdGFuY2UodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLl9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpLCB2KSk7XG5cbiAgICAvLyBNYXJrIHRoYXQgdGhlIHNjcm9sbCBkaXN0YW5jZSBoYXMgY2hhbmdlZCBzbyB0aGF0IGFmdGVyIHRoZSB2aWV3IGlzIGNoZWNrZWQsIHRoZSBDU1NcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbiBjYW4gbW92ZSB0aGUgaGVhZGVyLlxuICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlQ2hhbmdlZCA9IHRydWU7XG4gICAgdGhpcy5fY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBzdGVwIGxpc3QgaW4gdGhlICdiZWZvcmUnIG9yICdhZnRlcicgZGlyZWN0aW9uICh0b3dhcmRzIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3Qgb3JcbiAgICogdGhlIGVuZCBvZiB0aGUgbGlzdCwgcmVzcGVjdGl2ZWx5KS5cbiAgICovXG4gIF9zY3JvbGxIZWFkZXIoc2Nyb2xsRGlyOiBTY3JvbGxEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICAvLyBNb3ZlIHRoZSBzY3JvbGwgZGlzdGFuY2Ugb25lLWhhbGYgdGhlIGxlbmd0aCBvZiB0aGUgc3RlcCBsaXN0J3Mgdmlld3BvcnQuXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSAoKHNjcm9sbERpciA9PT0gJ2JlZm9yZScgPyAtMSA6IDEpICogdGhpcy5fc3RlcExpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkgLyAyO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHdoZXRoZXIgdGhlIHBhZ2luYXRpb24gY29udHJvbHMgc2hvdWxkIGJlIGRpc3BsYXllZC4gSWYgdGhlIHNjcm9sbCB3aWR0aCBvZiB0aGVcbiAgICogc3RlcCBsaXN0IGlzIHdpZGVyIHRoYW4gdGhlIHNpemUgb2YgdGhlIGhlYWRlciBjb250YWluZXIsIHRoZW4gdGhlIHBhZ2luYXRpb24gY29udHJvbHMgc2hvdWxkXG4gICAqIGJlIHNob3duLlxuICAgKi9cbiAgX2NoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTogdm9pZCB7XG4gICAgY29uc3QgaXNFbmFibGVkOiBib29sZWFuID0gdGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA+IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgIGlmICghaXNFbmFibGVkKSB7XG4gICAgICB0aGlzLnNjcm9sbERpc3RhbmNlID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbmFibGVkICE9PSB0aGlzLl9zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gaXNFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHdoZXRoZXIgdGhlIGJlZm9yZSBhbmQgYWZ0ZXIgY29udHJvbHMgc2hvdWxkIGJlIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAqIElmIHRoZSBoZWFkZXIgaXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdCAoc2Nyb2xsIGRpc3RhbmNlIGlzIGVxdWFsIHRvIDApIHRoZW4gZGlzYWJsZSB0aGVcbiAgICogYmVmb3JlIGJ1dHRvbi4gSWYgdGhlIGhlYWRlciBpcyBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0IChzY3JvbGwgZGlzdGFuY2UgaXMgZXF1YWwgdG8gdGhlXG4gICAqIG1heGltdW0gZGlzdGFuY2Ugd2UgY2FuIHNjcm9sbCksIHRoZW4gZGlzYWJsZSB0aGUgYWZ0ZXIgYnV0dG9uLlxuICAgKi9cbiAgX2NoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhZ2luYXRpb24gYXJyb3dzIHNob3VsZCBiZSBhY3RpdmF0ZWQuXG4gICAgdGhpcy5fZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgPT09IDA7XG4gICAgdGhpcy5fZGlzYWJsZVNjcm9sbEFmdGVyID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gdGhpcy5fZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoYXQgaXMgdGhlIG1heGltdW0gbGVuZ3RoIGluIHBpeGVscyB0aGF0IGNhbiBiZSBzZXQgZm9yIHRoZSBzY3JvbGwgZGlzdGFuY2UuIFRoaXNcbiAgICogaXMgZXF1YWwgdG8gdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0aGUgc3RlcCBsaXN0IGNvbnRhaW5lciBhbmQgc3RlcCBoZWFkZXIgY29udGFpbmVyLlxuICAgKi9cbiAgX2dldE1heFNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggLSB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGVwIGxpbmUgc2VwYXJhdG9ycyBhbmQgZGlzcGxheSBudW1iZXJzXG4gICAqL1xuICBwcml2YXRlIF9jb25maWd1cmVTdGVwcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXBhcmF0b3JzLmZvckVhY2goKHNlcGFyYXRvcjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQsIHNlcGFyYXRvcik7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RlcHNBcnJheTogVGROYXZTdGVwTGlua0NvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIHNldCB0aGUgaW5kZXggbnVtYmVyIG9mIHRoZSBzdGVwIHNvIGNhbiBkaXNwbGF5IHRoYXQgbnVtYmVyIGluIGNpcmNsZVxuICAgIHN0ZXBzQXJyYXkuZm9yRWFjaCgoc3RlcDogVGROYXZTdGVwTGlua0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IHN0ZXBzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvcjogYW55ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNlcGFyYXRvciwgJ3RkLWhvcml6b250YWwtbGluZScpO1xuICAgICAgICB0aGlzLl9zZXBhcmF0b3JzLnB1c2goc2VwYXJhdG9yKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQsIHNlcGFyYXRvciwgc3RlcC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgc3RlcC5udW1iZXIgPSBpbmRleCArIDE7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==