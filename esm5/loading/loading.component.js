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
        if (this.isOverlay() && this._hostHeight() > 1) {
            if (this.animation) {
                this._setCircleDiameter();
                this._changeDetectorRef.markForCheck();
            }
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
        this._animationIn.next(undefined);
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
        this._animationOut.next(undefined);
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
                    styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImxvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsaUJBQWlCLEVBRWpCLFVBQVUsR0FFWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFHekMsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUTs7Ozs7SUFJakIsYUFBYyxhQUFhO0lBQzNCLGVBQWdCLGVBQWU7Ozs7O0lBSS9CLFNBQVUsU0FBUztJQUNuQixTQUFVLFNBQVM7Ozs7O0lBSW5CLFlBQWEsWUFBWTtJQUN6QixTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNOzs7QUFHZixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLGtCQUFrQixHQUFXLEdBQUc7QUFFN0M7SUFrRUUsNEJBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQTNEbEYsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNoRCxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELFVBQUssR0FBZ0IsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxpQkFBWSxHQUFnQixXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3RELFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsb0JBQWUsR0FBVyxrQkFBa0IsQ0FBQzs7OztRQUtyRCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBNkIzQixVQUFLLEdBQWlCLFlBQVksQ0FBQyxJQUFJLENBQUM7Ozs7O1FBWXhDLFNBQUksR0FBZ0IsV0FBVyxDQUFDLFFBQVEsQ0FB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QUU7WUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyx3Q0FBVzs7Ozs7SUFBbkI7UUFDRSxJQUFJLG1CQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFBLEVBQUU7WUFDL0MsT0FBTyxDQUFDLG1CQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUNyRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBdE1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFFdEIsczNCQUF1QztvQkFDdkMsVUFBVSxFQUFFLENBQUMsb0JBQW9CLENBQUM7O2lCQUNuQzs7OztnQkFyQ0MsVUFBVTtnQkFGVixpQkFBaUI7O0lBeU9uQix5QkFBQztDQUFBLEFBdk1ELElBdU1DO1NBak1ZLGtCQUFrQjs7Ozs7O0lBQzdCLDBDQUF3RDs7Ozs7SUFDeEQsMkNBQXlEOzs7OztJQUN6RCxtQ0FBdUQ7Ozs7O0lBQ3ZELDBDQUE4RDs7Ozs7SUFDOUQsb0NBQTJCOzs7OztJQUMzQiw2Q0FBcUQ7Ozs7O0lBS3JELHVDQUEyQjs7Ozs7SUFLM0IscUNBQTZCOztJQXdCN0IsbUNBQXdDOzs7Ozs7SUFNeEMsb0NBQWU7Ozs7OztJQU1mLGtDQUF5Qzs7Ozs7O0lBTXpDLG1DQUFpRDs7Ozs7SUFFckMseUNBQStCOzs7OztJQUFFLGdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBEb0NoZWNrLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBMb2FkaW5nVHlwZSB7XG4gIENpcmN1bGFyID0gJ2NpcmN1bGFyJyxcbiAgTGluZWFyID0gJ2xpbmVhcicsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdNb2RlIHtcbiAgRGV0ZXJtaW5hdGUgPSAnZGV0ZXJtaW5hdGUnLFxuICBJbmRldGVybWluYXRlID0gJ2luZGV0ZXJtaW5hdGUnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3RyYXRlZ3kge1xuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3R5bGUge1xuICBGdWxsU2NyZWVuID0gJ2Z1bGxzY3JlZW4nLFxuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBOb25lID0gJ25vbmUnLFxufVxuXG5pbXBvcnQgeyB0ZEZhZGVJbk91dEFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBURF9DSVJDTEVfRElBTUVURVI6IG51bWJlciA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9hZGluZycsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbdGRGYWRlSW5PdXRBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uSW46IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uT3V0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgX21vZGU6IExvYWRpbmdNb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgcHJpdmF0ZSBfZGVmYXVsdE1vZGU6IExvYWRpbmdNb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2NpcmNsZURpYW1ldGVyOiBudW1iZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG5cbiAgLyoqXG4gICAqIEZsYWcgZm9yIGFuaW1hdGlvblxuICAgKi9cbiAgYW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENvbnRlbnQgaW5qZWN0ZWQgaW50byBsb2FkaW5nIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbnRlbnQ6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgLyoqXG4gICAqIFNldHMgbW9kZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSB0byBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSBvciBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlXG4gICAqL1xuICBzZXQgbW9kZShtb2RlOiBMb2FkaW5nTW9kZSkge1xuICAgIHRoaXMuX2RlZmF1bHRNb2RlID0gbW9kZTtcbiAgfVxuICBnZXQgbW9kZSgpOiBMb2FkaW5nTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB2YWx1ZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSBpZiBtb2RlIGlzICdMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSdcbiAgICovXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHN0eWxlOiBMb2FkaW5nU3R5bGUgPSBMb2FkaW5nU3R5bGUuTm9uZTtcblxuICAvKipcbiAgICogaGVpZ2h0OiBudW1iZXJcbiAgICogU2V0cyBoZWlnaHQgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0uXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogdHlwZTogTG9hZGluZ1R5cGVcbiAgICogU2V0cyB0eXBlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHJlbmRlcmVkLlxuICAgKi9cbiAgdHlwZTogTG9hZGluZ1R5cGUgPSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcblxuICAvKipcbiAgICogY29sb3I6IHByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGVtZSBjb2xvciBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSByZW5kZXJlZC5cbiAgICovXG4gIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIC8vIFdoZW4gb3ZlcmxheSBpcyB1c2VkIGFuZCB0aGUgaG9zdCB3aWR0aCBoYXMgYSB2YWx1ZSBncmVhdGVyIHRoYW4gMXB4XG4gICAgLy8gc2V0IHRoZSBjaXJjbGUgZGlhbWV0ZXIgd2hlbiBwb3NzaWJsZSBpbmNhc2UgdGhlIGxvYWRpbmcgY29tcG9uZW50IHdhcyByZW5kZXJlZCBpbiBhIGhpZGRlbiBzdGF0ZVxuICAgIGlmICh0aGlzLmlzT3ZlcmxheSgpICYmIHRoaXMuX2hvc3RIZWlnaHQoKSA+IDEpIHtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9zZXRDaXJjbGVEaWFtZXRlcigpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRIZWlnaHQoKTogc3RyaW5nIHtcbiAgICAvLyBJZ25vcmUgaGVpZ2h0IGlmIHN0eWxlIGlzIGBvdmVybGF5YCBvciBgZnVsbHNjcmVlbmAuXG4gICAgLy8gQWRkIGhlaWdodCBpZiBjaGlsZCBlbGVtZW50cyBoYXZlIGEgaGVpZ2h0IGFuZCBzdHlsZSBpcyBgbm9uZWAsIGVsc2UgcmV0dXJuIGRlZmF1bHQgaGVpZ2h0LlxuICAgIGlmICh0aGlzLmlzT3ZlcmxheSgpIHx8IHRoaXMuaXNGdWxsU2NyZWVuKCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhlaWdodCA/IGAke3RoaXMuaGVpZ2h0fXB4YCA6ICcxNTBweCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2lyY2xlRGlhbWV0ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlRGlhbWV0ZXI7XG4gIH1cblxuICBnZXRDaXJjbGVTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIC8vIHdlIGNhbGN1bGF0ZSB0aGUgc3Ryb2tlIHdpZHRoIGJ5IHNldHRpbmcgaXQgYXMgMTAlIG9mIGl0cyBkaWFtZXRlclxuICAgIGxldCBzdHJva2VXaWR0aDogbnVtYmVyID0gdGhpcy5nZXRDaXJjbGVEaWFtZXRlcigpIC8gMTA7XG4gICAgcmV0dXJuIE1hdGguYWJzKHN0cm9rZVdpZHRoKTtcbiAgfVxuXG4gIGlzQ2lyY3VsYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gIH1cblxuICBpc0xpbmVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBMb2FkaW5nVHlwZS5MaW5lYXI7XG4gIH1cblxuICBpc0Z1bGxTY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUgPT09IExvYWRpbmdTdHlsZS5GdWxsU2NyZWVuO1xuICB9XG5cbiAgaXNPdmVybGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0eWxlID09PSBMb2FkaW5nU3R5bGUuT3ZlcmxheTtcbiAgfVxuXG4gIGFuaW1hdGlvbkNvbXBsZXRlKGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiBpdHMgXCJpblwiIG9yIFwib3V0XCIgYW5pbWF0aW9uIHRvIGV4ZWN1dGUgdGhlIHByb3BlciBjYWxsYmFja1xuICAgIGlmICghZXZlbnQuZnJvbVN0YXRlKSB7XG4gICAgICB0aGlzLmluQW5pbWF0aW9uQ29tcGxldGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0QW5pbWF0aW9uQ29tcGxldGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaW5BbmltYXRpb25Db21wbGV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW9uSW4ubmV4dCh1bmRlZmluZWQpO1xuICB9XG5cbiAgb3V0QW5pbWF0aW9uQ29tcGxldGVkKCk6IHZvaWQge1xuICAgIC8qIGxpdHRsZSBoYWNrIHRvIHJlc2V0IHRoZSBsb2FkZXIgdmFsdWUgYW5kIGFuaW1hdGlvbiBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET01cbiAgICAgKiBlbHNlLCB0aGUgbG9hZGVyIHdpbGwgYXBwZWFyIHdpdGggcHJldiB2YWx1ZSB3aGVuIGl0cyByZWdpc3RlcmVkIGFnYWluXG4gICAgICogYW5kIHdpbGwgZG8gYW4gYW5pbWF0aW9uIGdvaW5nIHByZXYgdmFsdWUgdG8gMC5cbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX2FuaW1hdGlvbk91dC5uZXh0KHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGluIGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzdGFydEluQW5pbWF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLyogbmVlZCB0byBzd2l0Y2ggYmFjayB0byB0aGUgc2VsZWN0ZWQgbW9kZSwgc28gd2UgaGF2ZSBzYXZlZCBpdCBpbiBhbm90aGVyIHZhcmlhYmxlXG4gICAgICogIGFuZCB0aGVuIHJlY292ZXIgaXQuIChpc3N1ZSB3aXRoIHByb3RyYWN0b3IpXG4gICAgICovXG4gICAgdGhpcy5fbW9kZSA9IHRoaXMuX2RlZmF1bHRNb2RlO1xuICAgIC8vIFNldCB2YWx1ZXMgYmVmb3JlIHRoZSBhbmltYXRpb25zIHN0YXJ0c1xuICAgIHRoaXMuX3NldENpcmNsZURpYW1ldGVyKCk7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbkluLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBvdXQgYW5pbWF0aW9uIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgZm9yIGNvbXBsZXRpdGlvbiBldmVudC5cbiAgICovXG4gIHN0YXJ0T3V0QW5pbWF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAvKiBuZWVkIHRvIHN3aXRjaCBiYWNrIGFuZCBmb3J0aCBmcm9tIGRldGVybWluYXRlL2luZGV0ZXJtaW5hdGUgc28gdGhlIHNldEludGVydmFsKClcbiAgICAgKiBpbnNpZGUgbWF0LXByb2dyZXNzLXNwaW5uZXIgc3RvcHMgYW5kIHByb3RyYWN0b3IgZG9lc250IHRpbWVvdXQgd2FpdGluZyB0byBzeW5jLlxuICAgICAqL1xuICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25PdXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBwcm9wZXIgZGlhbWV0ZXIgZm9yIHRoZSBjaXJjbGUgYW5kIHNldCBpdFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Q2lyY2xlRGlhbWV0ZXIoKTogdm9pZCB7XG4gICAgLy8gd2Ugc2V0IGEgZGVmYXVsdCBkaWFtZXRlciBvZiAxMDAgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBtYXRlcmlhbFxuICAgIGxldCBkaWFtZXRlcjogbnVtYmVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuICAgIC8vIGlmIGhlaWdodCBpcyBwcm92aWRlZCwgdGhlbiB3ZSB0YWtlIHRoYXQgYXMgZGlhbWV0ZXJcbiAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgIGRpYW1ldGVyID0gdGhpcy5oZWlnaHQ7XG4gICAgICAvLyBlbHNlIGlmIGl0cyBub3QgcHJvdmlkZWQsIHRoZW4gd2UgdGFrZSB0aGUgaG9zdCBoZWlnaHRcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpYW1ldGVyID0gdGhpcy5faG9zdEhlaWdodCgpO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgZGlhbWV0ZXIgaXMgb3ZlciBURF9DSVJDTEVfRElBTUVURVIsIHdlIHNldCBURF9DSVJDTEVfRElBTUVURVJcbiAgICBpZiAoISFkaWFtZXRlciAmJiBkaWFtZXRlciA8PSBURF9DSVJDTEVfRElBTUVURVIpIHtcbiAgICAgIHRoaXMuX2NpcmNsZURpYW1ldGVyID0gTWF0aC5mbG9vcihkaWFtZXRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NpcmNsZURpYW1ldGVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBob3N0IGhlaWdodCBvZiB0aGUgbG9hZGluZyBjb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgX2hvc3RIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=