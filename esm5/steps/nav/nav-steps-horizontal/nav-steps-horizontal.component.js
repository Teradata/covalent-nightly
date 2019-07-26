/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            .subscribe(function () {
            _this._configureSteps();
            _this.updatePagination();
            _this._changeDetectorRef.markForCheck();
        });
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
     * @return {?}
     */
    TdNavStepsHorizontalComponent.prototype._configureSteps = /**
     * Set the step line separators and display numbers
     * @return {?}
     */
    function () {
        var _this = this;
        this._separators.forEach(function (separator) {
            _this._renderer.removeChild(_this._stepList.nativeElement, separator);
        });
        /** @type {?} */
        var stepsArray = this._steps.toArray();
        // set the index number of the step so can display that number in circle
        stepsArray.forEach(function (step, index) {
            if (index > 0 && index < stepsArray.length) {
                /** @type {?} */
                var separator = _this._renderer.createElement('div');
                _this._renderer.addClass(separator, 'td-horizontal-line');
                _this._separators.push(separator);
                _this._renderer.insertBefore(_this._stepList.nativeElement, separator, step.elementRef.nativeElement);
            }
            step.number = index + 1;
        });
    };
    TdNavStepsHorizontalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nav[td-steps][horizontal]',
                    template: "<div class=\"td-steps-header\">\n  <div\n    class=\"td-step-header-pagination td-step-header-pagination-before mat-elevation-z4\"\n    aria-hidden=\"true\"\n    mat-ripple\n    [matRippleDisabled]=\"_disableScrollBefore\"\n    [class.td-step-header-pagination-disabled]=\"_disableScrollBefore\"\n    (click)=\"_scrollHeader('before')\"\n  >\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n  <div #stepListContainer class=\"td-steps-header-container\" (keydown)=\"_handleKeydown($event)\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div\n    class=\"td-step-header-pagination td-step-header-pagination-after mat-elevation-z4\"\n    aria-hidden=\"true\"\n    mat-ripple\n    [matRippleDisabled]=\"_disableScrollAfter\"\n    [class.td-step-header-pagination-disabled]=\"_disableScrollAfter\"\n    (click)=\"_scrollHeader('after')\"\n  >\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    /* tslint:disable-next-line */
                    host: {
                        class: 'td-steps td-steps-horizontal',
                        '[class.td-step-header-pagination-controls-enabled]': '_showPaginationControls',
                        '[class.td-step-header-rtl]': "_getLayoutDirection() == 'rtl'",
                    },
                    styles: [":host{width:100%;display:block}.td-steps-header,.td-steps-header-list{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.td-steps-header-container{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;z-index:1}.td-steps-header-list{-ms-flex-positive:1;flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1),-webkit-transform .5s cubic-bezier(.35,0,.25,1);-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}.td-step-header-pagination{position:relative;display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}:host.td-step-header-pagination-controls-enabled .td-step-header-pagination{display:-ms-flexbox;display:flex}.td-step-header-pagination-before,:host.td-step-header-rtl .td-step-header-pagination-after{padding-left:4px}.td-step-header-pagination-before .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-after .td-step-header-pagination-chevron{-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg)}.td-step-header-pagination-after,:host.td-step-header-rtl .td-step-header-pagination-before{padding-right:4px}.td-step-header-pagination-after .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-before .td-step-header-pagination-chevron{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.td-step-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.td-step-header-pagination-disabled{box-shadow:none;cursor:default}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;min-width:20px;-ms-flex:1;flex:1;box-sizing:border-box}"]
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
        _stepListContainer: [{ type: ViewChild, args: ['stepListContainer',] }],
        _stepList: [{ type: ViewChild, args: ['stepList',] }]
    };
    return TdNavStepsHorizontalComponent;
}());
export { TdNavStepsHorizontalComponent };
if (false) {
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._separators;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     */
    TdNavStepsHorizontalComponent.prototype._destroyed;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._widthSubject;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._scrollDistance;
    /** @type {?} */
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
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._elementRef;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._viewportRuler;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._dir;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._renderer;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJuYXYvbmF2LXN0ZXBzLWhvcml6b250YWwvbmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULFNBQVMsRUFFVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFTbEY7SUFnRUUsdUNBQ1UsV0FBdUIsRUFDdkIsY0FBNkIsRUFDakIsSUFBb0IsRUFDaEMsU0FBb0IsRUFDcEIsa0JBQXFDO1FBSnJDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ2pCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXhEdkMsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDOzs7O1FBR3ZCLGVBQVUsR0FBa0IsSUFBSSxPQUFPLEVBQVEs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Q3hDLG9EQUF3Qzs7Ozs7SUFHeEMsbURBQWlFOztJQUVqRSxzREFBK0Q7O0lBRS9ELHdEQUFvQzs7SUFDcEMsK0RBQWdEOzs7OztJQUdoRCxnRUFBeUM7Ozs7O0lBR3pDLDREQUFvQzs7Ozs7SUFHcEMsNkRBQXFDOztJQUdyQywrQ0FBbUY7O0lBRW5GLDJEQUErRDs7SUFDL0Qsa0RBQTZDOztJQTZCM0Msb0RBQStCOztJQUMvQix1REFBcUM7O0lBQ3JDLDZDQUF3Qzs7SUFDeEMsa0RBQTRCOztJQUM1QiwyREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9wdGlvbmFsLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFZpZXdDaGlsZCxcbiAgUXVlcnlMaXN0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUklHSFRfQVJST1csIExFRlRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vbmF2LXN0ZXAtbGluay9uYXYtc3RlcC1saW5rLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIGRpcmVjdGlvbnMgdGhhdCBzY3JvbGxpbmcgY2FuIGdvIGluIHdoZW4gdGhlIGhlYWRlcidzIHRhYnMgZXhjZWVkIHRoZSBoZWFkZXIgd2lkdGguICdBZnRlcidcbiAqIHdpbGwgc2Nyb2xsIHRoZSBoZWFkZXIgdG93YXJkcyB0aGUgZW5kIG9mIHRoZSB0YWJzIGxpc3QgYW5kICdiZWZvcmUnIHdpbGwgc2Nyb2xsIHRvd2FyZHMgdGhlXG4gKiBiZWdpbm5pbmcgb2YgdGhlIGxpc3QuXG4gKi9cbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmF2W3RkLXN0ZXBzXVtob3Jpem9udGFsXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwcy1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcHMtaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtc3RlcHMgdGQtc3RlcHMtaG9yaXpvbnRhbCcsXG4gICAgJ1tjbGFzcy50ZC1zdGVwLWhlYWRlci1wYWdpbmF0aW9uLWNvbnRyb2xzLWVuYWJsZWRdJzogJ19zaG93UGFnaW5hdGlvbkNvbnRyb2xzJyxcbiAgICAnW2NsYXNzLnRkLXN0ZXAtaGVhZGVyLXJ0bF0nOiBcIl9nZXRMYXlvdXREaXJlY3Rpb24oKSA9PSAncnRsJ1wiLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdlN0ZXBzSG9yaXpvbnRhbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3NlcGFyYXRvcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIF9zY3JvbGxEaXN0YW5jZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRyb2xzIGZvciBwYWdpbmF0aW9uIHNob3VsZCBiZSBkaXNwbGF5ZWQgKi9cbiAgX3Nob3dQYWdpbmF0aW9uQ29udHJvbHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgc3RlcCBsaXN0IGNhbiBiZSBzY3JvbGxlZCBtb3JlIHRvd2FyZHMgdGhlIGVuZC4gKi9cbiAgX2Rpc2FibGVTY3JvbGxBZnRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHN0ZXAgbGlzdCBjYW4gYmUgc2Nyb2xsZWQgbW9yZSB0b3dhcmRzIHRoZSBiZWdpbm5pbmcuICovXG4gIF9kaXNhYmxlU2Nyb2xsQmVmb3JlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgc3RlcHNcbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdlN0ZXBMaW5rQ29tcG9uZW50KSBfc3RlcHM6IFF1ZXJ5TGlzdDxUZE5hdlN0ZXBMaW5rQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkKCdzdGVwTGlzdENvbnRhaW5lcicpIF9zdGVwTGlzdENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc3RlcExpc3QnKSBfc3RlcExpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgLypcbiAgICogQ3VycmVudCB3aWR0aCBvZiB0aGUgZWxlbWVudCBjb250YWluZXJcbiAgICovXG4gIGdldCBuYXRpdmVFbGVtZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGxldCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgbGV0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGxldCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgbGV0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGxldCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiAoXG4gICAgICBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC1cbiAgICAgIGJvcmRlckxlZnQgLVxuICAgICAgYm9yZGVyUmlnaHQgLVxuICAgICAgbWFyZ2luTGVmdCAtXG4gICAgICBtYXJnaW5SaWdodCAtXG4gICAgICBwYWRkaW5nTGVmdCAtXG4gICAgICBwYWRkaW5nUmlnaHRcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKSxcbiAgICAgIHRoaXMuX3ZpZXdwb3J0UnVsZXIuY2hhbmdlKDE1MCksXG4gICAgICB0aGlzLl9kaXIgPyB0aGlzLl9kaXIuY2hhbmdlIDogb2YodW5kZWZpbmVkKSxcbiAgICAgIHRoaXMuX3N0ZXBzLmNoYW5nZXMsXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njcm9sbERpc3RhbmNlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlU3RlcFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuIHRvIHJpZ2h0IGFuZCBsZWZ0IGtleSBldmVudHMgdG8gbW92ZSB0aGUgdGhlIHZpZXdwb3J0LlxuICAgKi9cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgdGhpcy5fc2Nyb2xsSGVhZGVyKCdiZWZvcmUnKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLl9zY3JvbGxIZWFkZXIoJ2FmdGVyJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2aWV3IHdoZXRoZXIgcGFnaW5hdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBvciBub3QuXG4gICAqL1xuICB1cGRhdGVQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTtcbiAgICB0aGlzLl9jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gICAgdGhpcy5fdXBkYXRlU3RlcFNjcm9sbFBvc2l0aW9uKCk7XG4gIH1cblxuICAvKiogVGhlIGxheW91dCBkaXJlY3Rpb24gb2YgdGhlIGNvbnRhaW5pbmcgYXBwLiAqL1xuICBfZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpciAmJiB0aGlzLl9kaXIudmFsdWUgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcbiAgfVxuXG4gIC8qKiBQZXJmb3JtcyB0aGUgQ1NTIHRyYW5zZm9ybWF0aW9uIG9uIHRoZSBzdGVwIGxpc3QgdGhhdCB3aWxsIGNhdXNlIHRoZSBsaXN0IHRvIHNjcm9sbC4gKi9cbiAgX3VwZGF0ZVN0ZXBTY3JvbGxQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGVYOiBudW1iZXIgPSB0aGlzLl9nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicgPyAtdGhpcy5zY3JvbGxEaXN0YW5jZSA6IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgLy8gTW92ZSBzdGVwIGxpc3QgdGhlIGFtb3VudCBvZiBwaXhlbHMgc2Nyb2xsZWRcbiAgICB0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7TWF0aC5yb3VuZCh0cmFuc2xhdGVYKX1weClgO1xuXG4gICAgLy8gU2V0dGluZyB0aGUgYHRyYW5zZm9ybWAgb24gSUUgd2lsbCBjaGFuZ2UgdGhlIHNjcm9sbCBvZmZzZXQgb2YgdGhlIHBhcmVudCwgY2F1c2luZyB0aGVcbiAgICAvLyBwb3NpdGlvbiB0byBiZSB0aHJvd24gb2ZmIGluIHNvbWUgY2FzZXMuIFdlIGhhdmUgdG8gcmVzZXQgaXQgb3Vyc2VsdmVzIHRvIGVuc3VyZSB0aGF0XG4gICAgLy8gaXQgZG9lc24ndCBnZXQgdGhyb3duIG9mZi5cbiAgICBpZiAodGhpcy5fZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInKSB7XG4gICAgICB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0aGlzLl9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgdGhhdCB0aGUgc3RlcCBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXG4gIGdldCBzY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxEaXN0YW5jZTtcbiAgfVxuICBzZXQgc2Nyb2xsRGlzdGFuY2UodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLl9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpLCB2KSk7XG5cbiAgICAvLyBNYXJrIHRoYXQgdGhlIHNjcm9sbCBkaXN0YW5jZSBoYXMgY2hhbmdlZCBzbyB0aGF0IGFmdGVyIHRoZSB2aWV3IGlzIGNoZWNrZWQsIHRoZSBDU1NcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbiBjYW4gbW92ZSB0aGUgaGVhZGVyLlxuICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlQ2hhbmdlZCA9IHRydWU7XG4gICAgdGhpcy5fY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBzdGVwIGxpc3QgaW4gdGhlICdiZWZvcmUnIG9yICdhZnRlcicgZGlyZWN0aW9uICh0b3dhcmRzIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3Qgb3JcbiAgICogdGhlIGVuZCBvZiB0aGUgbGlzdCwgcmVzcGVjdGl2ZWx5KS5cbiAgICovXG4gIF9zY3JvbGxIZWFkZXIoc2Nyb2xsRGlyOiBTY3JvbGxEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICAvLyBNb3ZlIHRoZSBzY3JvbGwgZGlzdGFuY2Ugb25lLWhhbGYgdGhlIGxlbmd0aCBvZiB0aGUgc3RlcCBsaXN0J3Mgdmlld3BvcnQuXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSAoKHNjcm9sbERpciA9PT0gJ2JlZm9yZScgPyAtMSA6IDEpICogdGhpcy5fc3RlcExpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkgLyAyO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHdoZXRoZXIgdGhlIHBhZ2luYXRpb24gY29udHJvbHMgc2hvdWxkIGJlIGRpc3BsYXllZC4gSWYgdGhlIHNjcm9sbCB3aWR0aCBvZiB0aGVcbiAgICogc3RlcCBsaXN0IGlzIHdpZGVyIHRoYW4gdGhlIHNpemUgb2YgdGhlIGhlYWRlciBjb250YWluZXIsIHRoZW4gdGhlIHBhZ2luYXRpb24gY29udHJvbHMgc2hvdWxkXG4gICAqIGJlIHNob3duLlxuICAgKi9cbiAgX2NoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTogdm9pZCB7XG4gICAgY29uc3QgaXNFbmFibGVkOiBib29sZWFuID0gdGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA+IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgIGlmICghaXNFbmFibGVkKSB7XG4gICAgICB0aGlzLnNjcm9sbERpc3RhbmNlID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbmFibGVkICE9PSB0aGlzLl9zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gaXNFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHdoZXRoZXIgdGhlIGJlZm9yZSBhbmQgYWZ0ZXIgY29udHJvbHMgc2hvdWxkIGJlIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAqIElmIHRoZSBoZWFkZXIgaXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdCAoc2Nyb2xsIGRpc3RhbmNlIGlzIGVxdWFsIHRvIDApIHRoZW4gZGlzYWJsZSB0aGVcbiAgICogYmVmb3JlIGJ1dHRvbi4gSWYgdGhlIGhlYWRlciBpcyBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0IChzY3JvbGwgZGlzdGFuY2UgaXMgZXF1YWwgdG8gdGhlXG4gICAqIG1heGltdW0gZGlzdGFuY2Ugd2UgY2FuIHNjcm9sbCksIHRoZW4gZGlzYWJsZSB0aGUgYWZ0ZXIgYnV0dG9uLlxuICAgKi9cbiAgX2NoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhZ2luYXRpb24gYXJyb3dzIHNob3VsZCBiZSBhY3RpdmF0ZWQuXG4gICAgdGhpcy5fZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgPT09IDA7XG4gICAgdGhpcy5fZGlzYWJsZVNjcm9sbEFmdGVyID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gdGhpcy5fZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoYXQgaXMgdGhlIG1heGltdW0gbGVuZ3RoIGluIHBpeGVscyB0aGF0IGNhbiBiZSBzZXQgZm9yIHRoZSBzY3JvbGwgZGlzdGFuY2UuIFRoaXNcbiAgICogaXMgZXF1YWwgdG8gdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0aGUgc3RlcCBsaXN0IGNvbnRhaW5lciBhbmQgc3RlcCBoZWFkZXIgY29udGFpbmVyLlxuICAgKi9cbiAgX2dldE1heFNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggLSB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGVwIGxpbmUgc2VwYXJhdG9ycyBhbmQgZGlzcGxheSBudW1iZXJzXG4gICAqL1xuICBwcml2YXRlIF9jb25maWd1cmVTdGVwcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXBhcmF0b3JzLmZvckVhY2goKHNlcGFyYXRvcjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQsIHNlcGFyYXRvcik7XG4gICAgfSk7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcExpbmtDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBzZXQgdGhlIGluZGV4IG51bWJlciBvZiB0aGUgc3RlcCBzbyBjYW4gZGlzcGxheSB0aGF0IG51bWJlciBpbiBjaXJjbGVcbiAgICBzdGVwc0FycmF5LmZvckVhY2goKHN0ZXA6IFRkTmF2U3RlcExpbmtDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBzdGVwc0FycmF5Lmxlbmd0aCkge1xuICAgICAgICBsZXQgc2VwYXJhdG9yOiBhbnkgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc2VwYXJhdG9yLCAndGQtaG9yaXpvbnRhbC1saW5lJyk7XG4gICAgICAgIHRoaXMuX3NlcGFyYXRvcnMucHVzaChzZXBhcmF0b3IpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudCwgc2VwYXJhdG9yLCBzdGVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBzdGVwLm51bWJlciA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgfVxufVxuIl19