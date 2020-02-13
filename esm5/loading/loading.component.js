/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef } from '@angular/core';
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
     * Starts in animation and returns an observable for completition event.
     */
    /**
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    TdLoadingComponent.prototype.show = /**
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
    };
    /**
     * Starts out animation and returns an observable for completition event.
     */
    /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    TdLoadingComponent.prototype.hide = /**
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
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
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
                    template: "<div\n  class=\"td-loading-wrapper\"\n  [style.min-height]=\"getHeight()\"\n  [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n  [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n  [class.td-fullscreen]=\"isFullScreen()\"\n>\n  <div [@tdFadeInOut]=\"animation\" [style.min-height]=\"getHeight()\" class=\"td-loading\">\n    <mat-progress-spinner\n      *ngIf=\"isCircular()\"\n      [mode]=\"mode\"\n      [value]=\"value\"\n      [color]=\"color\"\n      [diameter]=\"getCircleDiameter()\"\n      [strokeWidth]=\"getCircleStrokeWidth()\"\n    ></mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" [mode]=\"mode\" [value]=\"value\" [color]=\"color\"></mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFXLE1BQU0sZUFBZSxDQUFDOzs7SUFJaEYsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUTs7Ozs7SUFJakIsYUFBYyxhQUFhO0lBQzNCLGVBQWdCLGVBQWU7Ozs7O0lBSS9CLFNBQVUsU0FBUztJQUNuQixTQUFVLFNBQVM7Ozs7O0lBSW5CLFlBQWEsWUFBWTtJQUN6QixTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNOzs7QUFHZixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLGtCQUFrQixHQUFXLEdBQUc7QUFFN0M7SUFnRUUsNEJBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXpEbEYsVUFBSyxHQUFnQixXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLGlCQUFZLEdBQWdCLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdEQsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixvQkFBZSxHQUFXLGtCQUFrQixDQUFDOzs7O1FBS3JELGNBQVMsR0FBWSxLQUFLLENBQUM7UUE2QjNCLFVBQUssR0FBaUIsWUFBWSxDQUFDLElBQUksQ0FBQzs7Ozs7UUFZeEMsU0FBSSxHQUFnQixXQUFXLENBQUMsUUFBUSxDQUFDOzs7OztRQU16QyxVQUFLLEdBQWtDLFNBQVMsQ0FBQztJQUU0QyxDQUFDO0lBdkM5RixzQkFBSSxvQ0FBSTs7OztRQUdSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7UUFSRDs7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LG1DQUF3Qzs7Ozs7O0lBTXhDLG9DQUFlOzs7Ozs7SUFNZixrQ0FBeUM7Ozs7OztJQU16QyxtQ0FBaUQ7Ozs7O0lBRXJDLHlDQUErQjs7Ozs7SUFBRSxnREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5leHBvcnQgZW51bSBMb2FkaW5nVHlwZSB7XG4gIENpcmN1bGFyID0gJ2NpcmN1bGFyJyxcbiAgTGluZWFyID0gJ2xpbmVhcicsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdNb2RlIHtcbiAgRGV0ZXJtaW5hdGUgPSAnZGV0ZXJtaW5hdGUnLFxuICBJbmRldGVybWluYXRlID0gJ2luZGV0ZXJtaW5hdGUnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3RyYXRlZ3kge1xuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3R5bGUge1xuICBGdWxsU2NyZWVuID0gJ2Z1bGxzY3JlZW4nLFxuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBOb25lID0gJ25vbmUnLFxufVxuXG5pbXBvcnQgeyB0ZEZhZGVJbk91dEFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBURF9DSVJDTEVfRElBTUVURVI6IG51bWJlciA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9hZGluZycsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbdGRGYWRlSW5PdXRBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF9kZWZhdWx0TW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY2lyY2xlRGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcblxuICAvKipcbiAgICogRmxhZyBmb3IgYW5pbWF0aW9uXG4gICAqL1xuICBhbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29udGVudCBpbmplY3RlZCBpbnRvIGxvYWRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgY29udGVudDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICAvKipcbiAgICogU2V0cyBtb2RlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHRvIExvYWRpbmdNb2RlLkRldGVybWluYXRlIG9yIExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGVcbiAgICovXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgdGhpcy5fZGVmYXVsdE1vZGUgPSBtb2RlO1xuICB9XG4gIGdldCBtb2RlKCk6IExvYWRpbmdNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHZhbHVlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIGlmIG1vZGUgaXMgJ0xvYWRpbmdNb2RlLkRldGVybWluYXRlJ1xuICAgKi9cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc3R5bGU6IExvYWRpbmdTdHlsZSA9IExvYWRpbmdTdHlsZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBoZWlnaHQ6IG51bWJlclxuICAgKiBTZXRzIGhlaWdodCBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XS5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiB0eXBlOiBMb2FkaW5nVHlwZVxuICAgKiBTZXRzIHR5cGUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gcmVuZGVyZWQuXG4gICAqL1xuICB0eXBlOiBMb2FkaW5nVHlwZSA9IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuXG4gIC8qKlxuICAgKiBjb2xvcjogcHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJ1xuICAgKiBTZXRzIHRoZW1lIGNvbG9yIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHJlbmRlcmVkLlxuICAgKi9cbiAgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gV2hlbiBvdmVybGF5IGlzIHVzZWQgYW5kIHRoZSBob3N0IHdpZHRoIGhhcyBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAxcHhcbiAgICAvLyBzZXQgdGhlIGNpcmNsZSBkaWFtZXRlciB3aGVuIHBvc3NpYmxlIGluY2FzZSB0aGUgbG9hZGluZyBjb21wb25lbnQgd2FzIHJlbmRlcmVkIGluIGEgaGlkZGVuIHN0YXRlXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgJiYgdGhpcy5faG9zdEhlaWdodCgpID4gMSAmJiB0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0Q2lyY2xlRGlhbWV0ZXIoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhlaWdodCgpOiBzdHJpbmcge1xuICAgIC8vIElnbm9yZSBoZWlnaHQgaWYgc3R5bGUgaXMgYG92ZXJsYXlgIG9yIGBmdWxsc2NyZWVuYC5cbiAgICAvLyBBZGQgaGVpZ2h0IGlmIGNoaWxkIGVsZW1lbnRzIGhhdmUgYSBoZWlnaHQgYW5kIHN0eWxlIGlzIGBub25lYCwgZWxzZSByZXR1cm4gZGVmYXVsdCBoZWlnaHQuXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgfHwgdGhpcy5pc0Z1bGxTY3JlZW4oKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ID8gYCR7dGhpcy5oZWlnaHR9cHhgIDogJzE1MHB4JztcbiAgICB9XG4gIH1cblxuICBnZXRDaXJjbGVEaWFtZXRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVEaWFtZXRlcjtcbiAgfVxuXG4gIGdldENpcmNsZVN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgLy8gd2UgY2FsY3VsYXRlIHRoZSBzdHJva2Ugd2lkdGggYnkgc2V0dGluZyBpdCBhcyAxMCUgb2YgaXRzIGRpYW1ldGVyXG4gICAgY29uc3Qgc3Ryb2tlV2lkdGg6IG51bWJlciA9IHRoaXMuZ2V0Q2lyY2xlRGlhbWV0ZXIoKSAvIDEwO1xuICAgIHJldHVybiBNYXRoLmFicyhzdHJva2VXaWR0aCk7XG4gIH1cblxuICBpc0NpcmN1bGFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICB9XG5cbiAgaXNMaW5lYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICB9XG5cbiAgaXNGdWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0eWxlID09PSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgfVxuXG4gIGlzT3ZlcmxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSA9PT0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGluIGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIC8qIG5lZWQgdG8gc3dpdGNoIGJhY2sgdG8gdGhlIHNlbGVjdGVkIG1vZGUsIHNvIHdlIGhhdmUgc2F2ZWQgaXQgaW4gYW5vdGhlciB2YXJpYWJsZVxuICAgICAqICBhbmQgdGhlbiByZWNvdmVyIGl0LiAoaXNzdWUgd2l0aCBwcm90cmFjdG9yKVxuICAgICAqL1xuICAgIHRoaXMuX21vZGUgPSB0aGlzLl9kZWZhdWx0TW9kZTtcbiAgICAvLyBTZXQgdmFsdWVzIGJlZm9yZSB0aGUgYW5pbWF0aW9ucyBzdGFydHNcbiAgICB0aGlzLl9zZXRDaXJjbGVEaWFtZXRlcigpO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBvdXQgYW5pbWF0aW9uIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgZm9yIGNvbXBsZXRpdGlvbiBldmVudC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAvKiBuZWVkIHRvIHN3aXRjaCBiYWNrIGFuZCBmb3J0aCBmcm9tIGRldGVybWluYXRlL2luZGV0ZXJtaW5hdGUgc28gdGhlIHNldEludGVydmFsKClcbiAgICAgKiBpbnNpZGUgbWF0LXByb2dyZXNzLXNwaW5uZXIgc3RvcHMgYW5kIHByb3RyYWN0b3IgZG9lc250IHRpbWVvdXQgd2FpdGluZyB0byBzeW5jLlxuICAgICAqL1xuICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIC8qIGxpdHRsZSBoYWNrIHRvIHJlc2V0IHRoZSBsb2FkZXIgdmFsdWUgYW5kIGFuaW1hdGlvbiBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET01cbiAgICAgKiBlbHNlLCB0aGUgbG9hZGVyIHdpbGwgYXBwZWFyIHdpdGggcHJldiB2YWx1ZSB3aGVuIGl0cyByZWdpc3RlcmVkIGFnYWluXG4gICAgICogYW5kIHdpbGwgZG8gYW4gYW5pbWF0aW9uIGdvaW5nIHByZXYgdmFsdWUgdG8gMC5cbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgcHJvcGVyIGRpYW1ldGVyIGZvciB0aGUgY2lyY2xlIGFuZCBzZXQgaXRcbiAgICovXG4gIHByaXZhdGUgX3NldENpcmNsZURpYW1ldGVyKCk6IHZvaWQge1xuICAgIC8vIHdlIHNldCBhIGRlZmF1bHQgZGlhbWV0ZXIgb2YgMTAwIHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gbWF0ZXJpYWxcbiAgICBsZXQgZGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcbiAgICAvLyBpZiBoZWlnaHQgaXMgcHJvdmlkZWQsIHRoZW4gd2UgdGFrZSB0aGF0IGFzIGRpYW1ldGVyXG4gICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICBkaWFtZXRlciA9IHRoaXMuaGVpZ2h0O1xuICAgICAgLy8gZWxzZSBpZiBpdHMgbm90IHByb3ZpZGVkLCB0aGVuIHdlIHRha2UgdGhlIGhvc3QgaGVpZ2h0XG4gICAgfSBlbHNlIGlmICh0aGlzLmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkaWFtZXRlciA9IHRoaXMuX2hvc3RIZWlnaHQoKTtcbiAgICB9XG4gICAgLy8gaWYgdGhlIGRpYW1ldGVyIGlzIG92ZXIgVERfQ0lSQ0xFX0RJQU1FVEVSLCB3ZSBzZXQgVERfQ0lSQ0xFX0RJQU1FVEVSXG4gICAgaWYgKCEhZGlhbWV0ZXIgJiYgZGlhbWV0ZXIgPD0gVERfQ0lSQ0xFX0RJQU1FVEVSKSB7XG4gICAgICB0aGlzLl9jaXJjbGVEaWFtZXRlciA9IE1hdGguZmxvb3IoZGlhbWV0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jaXJjbGVEaWFtZXRlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaG9zdCBoZWlnaHQgb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIF9ob3N0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIl19