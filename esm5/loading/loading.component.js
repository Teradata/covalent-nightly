/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef, } from '@angular/core';
import { Subject } from 'rxjs';
/** @enum {string} */
var LoadingType = {
    Circular: 'circular',
    Linear: 'linear',
};
export { LoadingType };
/** @enum {string} */
var LoadingMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
export { LoadingMode };
/** @enum {string} */
var LoadingStrategy = {
    Overlay: 'overlay',
    Replace: 'replace',
};
export { LoadingStrategy };
/** @enum {string} */
var LoadingStyle = {
    FullScreen: 'fullscreen',
    Overlay: 'overlay',
    None: 'none',
};
export { LoadingStyle };
import { tdFadeInOutAnimation } from '@covalent/core/common';
/** @type {?} */
export var TD_CIRCLE_DIAMETER = 100;
var TdLoadingComponent = /** @class */ (function () {
    function TdLoadingComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new Subject();
        this._animationOut = new Subject();
        this._mode = LoadingMode.Indeterminate;
        this._defaultMode = LoadingMode.Indeterminate;
        this._value = 0;
        this._circleDiameter = TD_CIRCLE_DIAMETER;
        /**
         * Flag for animation
         */
        this.animation = false;
        this.style = LoadingStyle.None;
        /**
         * type: LoadingType
         * Sets type of [TdLoadingComponent] rendered.
         */
        this.type = LoadingType.Circular;
        /**
         * color: primary' | 'accent' | 'warn'
         * Sets theme color of [TdLoadingComponent] rendered.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLoadingComponent.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        /**
         * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
         */
        set: /**
         * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this._defaultMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        /**
         * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
         */
        set: /**
         * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            // Check for changes for `OnPush` change detection
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        // When overlay is used and the host width has a value greater than 1px
        // set the circle diameter when possible incase the loading component was rendered in a hidden state
        if (this.isOverlay() && this._hostHeight() > 1 && this.animation) {
            this._setCircleDiameter();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        // Ignore height if style is `overlay` or `fullscreen`.
        // Add height if child elements have a height and style is `none`, else return default height.
        if (this.isOverlay() || this.isFullScreen()) {
            return undefined;
        }
        else {
            return this.height ? this.height + "px" : '150px';
        }
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.getCircleDiameter = /**
     * @return {?}
     */
    function () {
        return this._circleDiameter;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.getCircleStrokeWidth = /**
     * @return {?}
     */
    function () {
        // we calculate the stroke width by setting it as 10% of its diameter
        /** @type {?} */
        var strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isCircular = /**
     * @return {?}
     */
    function () {
        return this.type === LoadingType.Circular;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isLinear = /**
     * @return {?}
     */
    function () {
        return this.type === LoadingType.Linear;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isFullScreen = /**
     * @return {?}
     */
    function () {
        return this.style === LoadingStyle.FullScreen;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isOverlay = /**
     * @return {?}
     */
    function () {
        return this.style === LoadingStyle.Overlay;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdLoadingComponent.prototype.animationComplete = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Check to see if its "in" or "out" animation to execute the proper callback
        if (!event.fromState) {
            this.inAnimationCompleted();
        }
        else {
            this.outAnimationCompleted();
        }
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.inAnimationCompleted = /**
     * @return {?}
     */
    function () {
        this._animationIn.next();
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.outAnimationCompleted = /**
     * @return {?}
     */
    function () {
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        this._animationOut.next();
    };
    /**
     * Starts in animation and returns an observable for completition event.
     */
    /**
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    TdLoadingComponent.prototype.startInAnimation = /**
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    function () {
        /* need to switch back to the selected mode, so we have saved it in another variable
         *  and then recover it. (issue with protractor)
         */
        this._mode = this._defaultMode;
        // Set values before the animations starts
        this._setCircleDiameter();
        // Check for changes for `OnPush` change detection
        this.animation = true;
        this._changeDetectorRef.markForCheck();
        return this._animationIn.asObservable();
    };
    /**
     * Starts out animation and returns an observable for completition event.
     */
    /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    TdLoadingComponent.prototype.startOutAnimation = /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    function () {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
         * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
         */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    };
    /**
     * Calculate the proper diameter for the circle and set it
     */
    /**
     * Calculate the proper diameter for the circle and set it
     * @private
     * @return {?}
     */
    TdLoadingComponent.prototype._setCircleDiameter = /**
     * Calculate the proper diameter for the circle and set it
     * @private
     * @return {?}
     */
    function () {
        // we set a default diameter of 100 since this is the default in material
        /** @type {?} */
        var diameter = TD_CIRCLE_DIAMETER;
        // if height is provided, then we take that as diameter
        if (this.height) {
            diameter = this.height;
            // else if its not provided, then we take the host height
        }
        else if (this.height === undefined) {
            diameter = this._hostHeight();
        }
        // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
        if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
            this._circleDiameter = Math.floor(diameter);
        }
        else {
            this._circleDiameter = TD_CIRCLE_DIAMETER;
        }
    };
    /**
     * Returns the host height of the loading component
     */
    /**
     * Returns the host height of the loading component
     * @private
     * @return {?}
     */
    TdLoadingComponent.prototype._hostHeight = /**
     * Returns the host height of the loading component
     * @private
     * @return {?}
     */
    function () {
        if ((/** @type {?} */ (this._elementRef.nativeElement))) {
            return ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return 0;
    };
    TdLoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-loading',
                    template: "<div\n  class=\"td-loading-wrapper\"\n  [style.min-height]=\"getHeight()\"\n  [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n  [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n  [class.td-fullscreen]=\"isFullScreen()\"\n>\n  <div\n    [@tdFadeInOut]=\"animation\"\n    (@tdFadeInOut.done)=\"animationComplete($event)\"\n    [style.min-height]=\"getHeight()\"\n    class=\"td-loading\"\n  >\n    <mat-progress-spinner\n      *ngIf=\"isCircular()\"\n      [mode]=\"mode\"\n      [value]=\"value\"\n      [color]=\"color\"\n      [diameter]=\"getCircleDiameter()\"\n      [strokeWidth]=\"getCircleStrokeWidth()\"\n    ></mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" [mode]=\"mode\" [value]=\"value\" [color]=\"color\"></mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>\n",
                    animations: [tdFadeInOutAnimation],
                    styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    TdLoadingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    return TdLoadingComponent;
}());
export { TdLoadingComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._animationIn;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._animationOut;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._defaultMode;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._circleDiameter;
    /**
     * Flag for animation
     * @type {?}
     */
    TdLoadingComponent.prototype.animation;
    /**
     * Content injected into loading component.
     * @type {?}
     */
    TdLoadingComponent.prototype.content;
    /** @type {?} */
    TdLoadingComponent.prototype.style;
    /**
     * height: number
     * Sets height of [TdLoadingComponent].
     * @type {?}
     */
    TdLoadingComponent.prototype.height;
    /**
     * type: LoadingType
     * Sets type of [TdLoadingComponent] rendered.
     * @type {?}
     */
    TdLoadingComponent.prototype.type;
    /**
     * color: primary' | 'accent' | 'warn'
     * Sets theme color of [TdLoadingComponent] rendered.
     * @type {?}
     */
    TdLoadingComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImxvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsaUJBQWlCLEVBRWpCLFVBQVUsR0FFWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFHekMsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUTs7Ozs7SUFJakIsYUFBYyxhQUFhO0lBQzNCLGVBQWdCLGVBQWU7Ozs7O0lBSS9CLFNBQVUsU0FBUztJQUNuQixTQUFVLFNBQVM7Ozs7O0lBSW5CLFlBQWEsWUFBWTtJQUN6QixTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNOzs7QUFHZixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLGtCQUFrQixHQUFXLEdBQUc7QUFFN0M7SUFrRUUsNEJBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQTNEbEYsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNoRCxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELFVBQUssR0FBZ0IsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxpQkFBWSxHQUFnQixXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3RELFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsb0JBQWUsR0FBVyxrQkFBa0IsQ0FBQzs7OztRQUtyRCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBNkIzQixVQUFLLEdBQWlCLFlBQVksQ0FBQyxJQUFJLENBQUM7Ozs7O1FBWXhDLFNBQUksR0FBZ0IsV0FBVyxDQUFDLFFBQVEsQ0FB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LEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ssd0NBQVc7Ozs7O0lBQW5CO1FBQ0UsSUFBSSxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDckY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7O2dCQXBNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBRXRCLHMzQkFBdUM7b0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLG9CQUFvQixDQUFDOztpQkFDbkM7Ozs7Z0JBckNDLFVBQVU7Z0JBRlYsaUJBQWlCOztJQXVPbkIseUJBQUM7Q0FBQSxBQXJNRCxJQXFNQztTQS9MWSxrQkFBa0I7Ozs7OztJQUM3QiwwQ0FBd0Q7Ozs7O0lBQ3hELDJDQUF5RDs7Ozs7SUFDekQsbUNBQXVEOzs7OztJQUN2RCwwQ0FBOEQ7Ozs7O0lBQzlELG9DQUEyQjs7Ozs7SUFDM0IsNkNBQXFEOzs7OztJQUtyRCx1Q0FBMkI7Ozs7O0lBSzNCLHFDQUE2Qjs7SUF3QjdCLG1DQUF3Qzs7Ozs7O0lBTXhDLG9DQUFlOzs7Ozs7SUFNZixrQ0FBeUM7Ozs7OztJQU16QyxtQ0FBaUQ7Ozs7O0lBRXJDLHlDQUErQjs7Ozs7SUFBRSxnREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgRG9DaGVjayxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gTG9hZGluZ1R5cGUge1xuICBDaXJjdWxhciA9ICdjaXJjdWxhcicsXG4gIExpbmVhciA9ICdsaW5lYXInLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nTW9kZSB7XG4gIERldGVybWluYXRlID0gJ2RldGVybWluYXRlJyxcbiAgSW5kZXRlcm1pbmF0ZSA9ICdpbmRldGVybWluYXRlJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ1N0cmF0ZWd5IHtcbiAgT3ZlcmxheSA9ICdvdmVybGF5JyxcbiAgUmVwbGFjZSA9ICdyZXBsYWNlJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ1N0eWxlIHtcbiAgRnVsbFNjcmVlbiA9ICdmdWxsc2NyZWVuJyxcbiAgT3ZlcmxheSA9ICdvdmVybGF5JyxcbiAgTm9uZSA9ICdub25lJyxcbn1cblxuaW1wb3J0IHsgdGRGYWRlSW5PdXRBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgVERfQ0lSQ0xFX0RJQU1FVEVSOiBudW1iZXIgPSAxMDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxvYWRpbmcnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3RkRmFkZUluT3V0QW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG4gIHByaXZhdGUgX2FuaW1hdGlvbkluOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgX2FuaW1hdGlvbk91dDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9tb2RlOiBMb2FkaW5nTW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gIHByaXZhdGUgX2RlZmF1bHRNb2RlOiBMb2FkaW5nTW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jaXJjbGVEaWFtZXRlcjogbnVtYmVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuXG4gIC8qKlxuICAgKiBGbGFnIGZvciBhbmltYXRpb25cbiAgICovXG4gIGFuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb250ZW50IGluamVjdGVkIGludG8gbG9hZGluZyBjb21wb25lbnQuXG4gICAqL1xuICBjb250ZW50OiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuXG4gIC8qKlxuICAgKiBTZXRzIG1vZGUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gdG8gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUgb3IgTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZVxuICAgKi9cbiAgc2V0IG1vZGUobW9kZTogTG9hZGluZ01vZGUpIHtcbiAgICB0aGlzLl9kZWZhdWx0TW9kZSA9IG1vZGU7XG4gIH1cbiAgZ2V0IG1vZGUoKTogTG9hZGluZ01vZGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdmFsdWUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gaWYgbW9kZSBpcyAnTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUnXG4gICAqL1xuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzdHlsZTogTG9hZGluZ1N0eWxlID0gTG9hZGluZ1N0eWxlLk5vbmU7XG5cbiAgLyoqXG4gICAqIGhlaWdodDogbnVtYmVyXG4gICAqIFNldHMgaGVpZ2h0IG9mIFtUZExvYWRpbmdDb21wb25lbnRdLlxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIHR5cGU6IExvYWRpbmdUeXBlXG4gICAqIFNldHMgdHlwZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSByZW5kZXJlZC5cbiAgICovXG4gIHR5cGU6IExvYWRpbmdUeXBlID0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG5cbiAgLyoqXG4gICAqIGNvbG9yOiBwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nXG4gICAqIFNldHMgdGhlbWUgY29sb3Igb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gcmVuZGVyZWQuXG4gICAqL1xuICBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAvLyBXaGVuIG92ZXJsYXkgaXMgdXNlZCBhbmQgdGhlIGhvc3Qgd2lkdGggaGFzIGEgdmFsdWUgZ3JlYXRlciB0aGFuIDFweFxuICAgIC8vIHNldCB0aGUgY2lyY2xlIGRpYW1ldGVyIHdoZW4gcG9zc2libGUgaW5jYXNlIHRoZSBsb2FkaW5nIGNvbXBvbmVudCB3YXMgcmVuZGVyZWQgaW4gYSBoaWRkZW4gc3RhdGVcbiAgICBpZiAodGhpcy5pc092ZXJsYXkoKSAmJiB0aGlzLl9ob3N0SGVpZ2h0KCkgPiAxICYmIHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRDaXJjbGVEaWFtZXRlcigpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgLy8gSWdub3JlIGhlaWdodCBpZiBzdHlsZSBpcyBgb3ZlcmxheWAgb3IgYGZ1bGxzY3JlZW5gLlxuICAgIC8vIEFkZCBoZWlnaHQgaWYgY2hpbGQgZWxlbWVudHMgaGF2ZSBhIGhlaWdodCBhbmQgc3R5bGUgaXMgYG5vbmVgLCBlbHNlIHJldHVybiBkZWZhdWx0IGhlaWdodC5cbiAgICBpZiAodGhpcy5pc092ZXJsYXkoKSB8fCB0aGlzLmlzRnVsbFNjcmVlbigpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWlnaHQgPyBgJHt0aGlzLmhlaWdodH1weGAgOiAnMTUwcHgnO1xuICAgIH1cbiAgfVxuXG4gIGdldENpcmNsZURpYW1ldGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZURpYW1ldGVyO1xuICB9XG5cbiAgZ2V0Q2lyY2xlU3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICAvLyB3ZSBjYWxjdWxhdGUgdGhlIHN0cm9rZSB3aWR0aCBieSBzZXR0aW5nIGl0IGFzIDEwJSBvZiBpdHMgZGlhbWV0ZXJcbiAgICBjb25zdCBzdHJva2VXaWR0aDogbnVtYmVyID0gdGhpcy5nZXRDaXJjbGVEaWFtZXRlcigpIC8gMTA7XG4gICAgcmV0dXJuIE1hdGguYWJzKHN0cm9rZVdpZHRoKTtcbiAgfVxuXG4gIGlzQ2lyY3VsYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gIH1cblxuICBpc0xpbmVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBMb2FkaW5nVHlwZS5MaW5lYXI7XG4gIH1cblxuICBpc0Z1bGxTY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUgPT09IExvYWRpbmdTdHlsZS5GdWxsU2NyZWVuO1xuICB9XG5cbiAgaXNPdmVybGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0eWxlID09PSBMb2FkaW5nU3R5bGUuT3ZlcmxheTtcbiAgfVxuXG4gIGFuaW1hdGlvbkNvbXBsZXRlKGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiBpdHMgXCJpblwiIG9yIFwib3V0XCIgYW5pbWF0aW9uIHRvIGV4ZWN1dGUgdGhlIHByb3BlciBjYWxsYmFja1xuICAgIGlmICghZXZlbnQuZnJvbVN0YXRlKSB7XG4gICAgICB0aGlzLmluQW5pbWF0aW9uQ29tcGxldGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0QW5pbWF0aW9uQ29tcGxldGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaW5BbmltYXRpb25Db21wbGV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW9uSW4ubmV4dCgpO1xuICB9XG5cbiAgb3V0QW5pbWF0aW9uQ29tcGxldGVkKCk6IHZvaWQge1xuICAgIC8qIGxpdHRsZSBoYWNrIHRvIHJlc2V0IHRoZSBsb2FkZXIgdmFsdWUgYW5kIGFuaW1hdGlvbiBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET01cbiAgICAgKiBlbHNlLCB0aGUgbG9hZGVyIHdpbGwgYXBwZWFyIHdpdGggcHJldiB2YWx1ZSB3aGVuIGl0cyByZWdpc3RlcmVkIGFnYWluXG4gICAgICogYW5kIHdpbGwgZG8gYW4gYW5pbWF0aW9uIGdvaW5nIHByZXYgdmFsdWUgdG8gMC5cbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX2FuaW1hdGlvbk91dC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGluIGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzdGFydEluQW5pbWF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLyogbmVlZCB0byBzd2l0Y2ggYmFjayB0byB0aGUgc2VsZWN0ZWQgbW9kZSwgc28gd2UgaGF2ZSBzYXZlZCBpdCBpbiBhbm90aGVyIHZhcmlhYmxlXG4gICAgICogIGFuZCB0aGVuIHJlY292ZXIgaXQuIChpc3N1ZSB3aXRoIHByb3RyYWN0b3IpXG4gICAgICovXG4gICAgdGhpcy5fbW9kZSA9IHRoaXMuX2RlZmF1bHRNb2RlO1xuICAgIC8vIFNldCB2YWx1ZXMgYmVmb3JlIHRoZSBhbmltYXRpb25zIHN0YXJ0c1xuICAgIHRoaXMuX3NldENpcmNsZURpYW1ldGVyKCk7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbkluLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBvdXQgYW5pbWF0aW9uIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgZm9yIGNvbXBsZXRpdGlvbiBldmVudC5cbiAgICovXG4gIHN0YXJ0T3V0QW5pbWF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAvKiBuZWVkIHRvIHN3aXRjaCBiYWNrIGFuZCBmb3J0aCBmcm9tIGRldGVybWluYXRlL2luZGV0ZXJtaW5hdGUgc28gdGhlIHNldEludGVydmFsKClcbiAgICAgKiBpbnNpZGUgbWF0LXByb2dyZXNzLXNwaW5uZXIgc3RvcHMgYW5kIHByb3RyYWN0b3IgZG9lc250IHRpbWVvdXQgd2FpdGluZyB0byBzeW5jLlxuICAgICAqL1xuICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25PdXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBwcm9wZXIgZGlhbWV0ZXIgZm9yIHRoZSBjaXJjbGUgYW5kIHNldCBpdFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Q2lyY2xlRGlhbWV0ZXIoKTogdm9pZCB7XG4gICAgLy8gd2Ugc2V0IGEgZGVmYXVsdCBkaWFtZXRlciBvZiAxMDAgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBtYXRlcmlhbFxuICAgIGxldCBkaWFtZXRlcjogbnVtYmVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuICAgIC8vIGlmIGhlaWdodCBpcyBwcm92aWRlZCwgdGhlbiB3ZSB0YWtlIHRoYXQgYXMgZGlhbWV0ZXJcbiAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgIGRpYW1ldGVyID0gdGhpcy5oZWlnaHQ7XG4gICAgICAvLyBlbHNlIGlmIGl0cyBub3QgcHJvdmlkZWQsIHRoZW4gd2UgdGFrZSB0aGUgaG9zdCBoZWlnaHRcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpYW1ldGVyID0gdGhpcy5faG9zdEhlaWdodCgpO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgZGlhbWV0ZXIgaXMgb3ZlciBURF9DSVJDTEVfRElBTUVURVIsIHdlIHNldCBURF9DSVJDTEVfRElBTUVURVJcbiAgICBpZiAoISFkaWFtZXRlciAmJiBkaWFtZXRlciA8PSBURF9DSVJDTEVfRElBTUVURVIpIHtcbiAgICAgIHRoaXMuX2NpcmNsZURpYW1ldGVyID0gTWF0aC5mbG9vcihkaWFtZXRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NpcmNsZURpYW1ldGVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBob3N0IGhlaWdodCBvZiB0aGUgbG9hZGluZyBjb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgX2hvc3RIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=