/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef, } from '@angular/core';
import { Subject } from 'rxjs';
/** @enum {string} */
const LoadingType = {
    Circular: 'circular',
    Linear: 'linear',
};
export { LoadingType };
/** @enum {string} */
const LoadingMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
export { LoadingMode };
/** @enum {string} */
const LoadingStrategy = {
    Overlay: 'overlay',
    Replace: 'replace',
};
export { LoadingStrategy };
/** @enum {string} */
const LoadingStyle = {
    FullScreen: 'fullscreen',
    Overlay: 'overlay',
    None: 'none',
};
export { LoadingStyle };
import { tdFadeInOutAnimation } from '@covalent/core/common';
/** @type {?} */
export const TD_CIRCLE_DIAMETER = 100;
export class TdLoadingComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _changeDetectorRef) {
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
    /**
     * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        this._defaultMode = mode;
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // When overlay is used and the host width has a value greater than 1px
        // set the circle diameter when possible incase the loading component was rendered in a hidden state
        if (this.isOverlay() && this._hostHeight() > 1 && this.animation) {
            this._setCircleDiameter();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    getHeight() {
        // Ignore height if style is `overlay` or `fullscreen`.
        // Add height if child elements have a height and style is `none`, else return default height.
        if (this.isOverlay() || this.isFullScreen()) {
            return undefined;
        }
        else {
            return this.height ? `${this.height}px` : '150px';
        }
    }
    /**
     * @return {?}
     */
    getCircleDiameter() {
        return this._circleDiameter;
    }
    /**
     * @return {?}
     */
    getCircleStrokeWidth() {
        // we calculate the stroke width by setting it as 10% of its diameter
        /** @type {?} */
        const strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
    }
    /**
     * @return {?}
     */
    isCircular() {
        return this.type === LoadingType.Circular;
    }
    /**
     * @return {?}
     */
    isLinear() {
        return this.type === LoadingType.Linear;
    }
    /**
     * @return {?}
     */
    isFullScreen() {
        return this.style === LoadingStyle.FullScreen;
    }
    /**
     * @return {?}
     */
    isOverlay() {
        return this.style === LoadingStyle.Overlay;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    animationComplete(event) {
        // Check to see if its "in" or "out" animation to execute the proper callback
        if (!event.fromState) {
            this.inAnimationCompleted();
        }
        else {
            this.outAnimationCompleted();
        }
    }
    /**
     * @return {?}
     */
    inAnimationCompleted() {
        this._animationIn.next();
    }
    /**
     * @return {?}
     */
    outAnimationCompleted() {
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        this._animationOut.next();
    }
    /**
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    startInAnimation() {
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
    }
    /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    startOutAnimation() {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
         * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
         */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    }
    /**
     * Calculate the proper diameter for the circle and set it
     * @private
     * @return {?}
     */
    _setCircleDiameter() {
        // we set a default diameter of 100 since this is the default in material
        /** @type {?} */
        let diameter = TD_CIRCLE_DIAMETER;
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
    }
    /**
     * Returns the host height of the loading component
     * @private
     * @return {?}
     */
    _hostHeight() {
        if ((/** @type {?} */ (this._elementRef.nativeElement))) {
            return ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return 0;
    }
}
TdLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-loading',
                template: "<div\n  class=\"td-loading-wrapper\"\n  [style.min-height]=\"getHeight()\"\n  [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n  [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n  [class.td-fullscreen]=\"isFullScreen()\"\n>\n  <div\n    [@tdFadeInOut]=\"animation\"\n    (@tdFadeInOut.done)=\"animationComplete($event)\"\n    [style.min-height]=\"getHeight()\"\n    class=\"td-loading\"\n  >\n    <mat-progress-spinner\n      *ngIf=\"isCircular()\"\n      [mode]=\"mode\"\n      [value]=\"value\"\n      [color]=\"color\"\n      [diameter]=\"getCircleDiameter()\"\n      [strokeWidth]=\"getCircleStrokeWidth()\"\n    ></mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" [mode]=\"mode\" [value]=\"value\" [color]=\"color\"></mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>\n",
                animations: [tdFadeInOutAnimation],
                styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
            }] }
];
/** @nocollapse */
TdLoadingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImxvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsaUJBQWlCLEVBRWpCLFVBQVUsR0FFWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFHekMsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUTs7Ozs7SUFJakIsYUFBYyxhQUFhO0lBQzNCLGVBQWdCLGVBQWU7Ozs7O0lBSS9CLFNBQVUsU0FBUztJQUNuQixTQUFVLFNBQVM7Ozs7O0lBSW5CLFlBQWEsWUFBWTtJQUN6QixTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNOzs7QUFHZixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxPQUFPLGtCQUFrQixHQUFXLEdBQUc7QUFRN0MsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUE0RDdCLFlBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQTNEbEYsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNoRCxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELFVBQUssR0FBZ0IsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxpQkFBWSxHQUFnQixXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3RELFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsb0JBQWUsR0FBVyxrQkFBa0IsQ0FBQzs7OztRQUtyRCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBNkIzQixVQUFLLEdBQWlCLFlBQVksQ0FBQyxJQUFJLENBQUM7Ozs7O1FBWXhDLFNBQUksR0FB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RUFBRTtZQUMvQyxPQUFPLENBQUMsbUJBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ3JGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUFwTUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUV0QixzM0JBQXVDO2dCQUN2QyxVQUFVLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzs7YUFDbkM7Ozs7WUFyQ0MsVUFBVTtZQUZWLGlCQUFpQjs7Ozs7OztJQXlDakIsMENBQXdEOzs7OztJQUN4RCwyQ0FBeUQ7Ozs7O0lBQ3pELG1DQUF1RDs7Ozs7SUFDdkQsMENBQThEOzs7OztJQUM5RCxvQ0FBMkI7Ozs7O0lBQzNCLDZDQUFxRDs7Ozs7SUFLckQsdUNBQTJCOzs7OztJQUszQixxQ0FBNkI7O0lBd0I3QixtQ0FBd0M7Ozs7OztJQU14QyxvQ0FBZTs7Ozs7O0lBTWYsa0NBQXlDOzs7Ozs7SUFNekMsbUNBQWlEOzs7OztJQUVyQyx5Q0FBK0I7Ozs7O0lBQUUsZ0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIERvQ2hlY2ssXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdUeXBlIHtcbiAgQ2lyY3VsYXIgPSAnY2lyY3VsYXInLFxuICBMaW5lYXIgPSAnbGluZWFyJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ01vZGUge1xuICBEZXRlcm1pbmF0ZSA9ICdkZXRlcm1pbmF0ZScsXG4gIEluZGV0ZXJtaW5hdGUgPSAnaW5kZXRlcm1pbmF0ZScsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdTdHJhdGVneSB7XG4gIE92ZXJsYXkgPSAnb3ZlcmxheScsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdTdHlsZSB7XG4gIEZ1bGxTY3JlZW4gPSAnZnVsbHNjcmVlbicsXG4gIE92ZXJsYXkgPSAnb3ZlcmxheScsXG4gIE5vbmUgPSAnbm9uZScsXG59XG5cbmltcG9ydCB7IHRkRmFkZUluT3V0QW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IFREX0NJUkNMRV9ESUFNRVRFUjogbnVtYmVyID0gMTAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sb2FkaW5nJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFt0ZEZhZGVJbk91dEFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBwcml2YXRlIF9hbmltYXRpb25JbjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9hbmltYXRpb25PdXQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF9kZWZhdWx0TW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY2lyY2xlRGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcblxuICAvKipcbiAgICogRmxhZyBmb3IgYW5pbWF0aW9uXG4gICAqL1xuICBhbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29udGVudCBpbmplY3RlZCBpbnRvIGxvYWRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgY29udGVudDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICAvKipcbiAgICogU2V0cyBtb2RlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHRvIExvYWRpbmdNb2RlLkRldGVybWluYXRlIG9yIExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGVcbiAgICovXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgdGhpcy5fZGVmYXVsdE1vZGUgPSBtb2RlO1xuICB9XG4gIGdldCBtb2RlKCk6IExvYWRpbmdNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHZhbHVlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIGlmIG1vZGUgaXMgJ0xvYWRpbmdNb2RlLkRldGVybWluYXRlJ1xuICAgKi9cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc3R5bGU6IExvYWRpbmdTdHlsZSA9IExvYWRpbmdTdHlsZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBoZWlnaHQ6IG51bWJlclxuICAgKiBTZXRzIGhlaWdodCBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XS5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiB0eXBlOiBMb2FkaW5nVHlwZVxuICAgKiBTZXRzIHR5cGUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gcmVuZGVyZWQuXG4gICAqL1xuICB0eXBlOiBMb2FkaW5nVHlwZSA9IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuXG4gIC8qKlxuICAgKiBjb2xvcjogcHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJ1xuICAgKiBTZXRzIHRoZW1lIGNvbG9yIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHJlbmRlcmVkLlxuICAgKi9cbiAgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gV2hlbiBvdmVybGF5IGlzIHVzZWQgYW5kIHRoZSBob3N0IHdpZHRoIGhhcyBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAxcHhcbiAgICAvLyBzZXQgdGhlIGNpcmNsZSBkaWFtZXRlciB3aGVuIHBvc3NpYmxlIGluY2FzZSB0aGUgbG9hZGluZyBjb21wb25lbnQgd2FzIHJlbmRlcmVkIGluIGEgaGlkZGVuIHN0YXRlXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgJiYgdGhpcy5faG9zdEhlaWdodCgpID4gMSAmJiB0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0Q2lyY2xlRGlhbWV0ZXIoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhlaWdodCgpOiBzdHJpbmcge1xuICAgIC8vIElnbm9yZSBoZWlnaHQgaWYgc3R5bGUgaXMgYG92ZXJsYXlgIG9yIGBmdWxsc2NyZWVuYC5cbiAgICAvLyBBZGQgaGVpZ2h0IGlmIGNoaWxkIGVsZW1lbnRzIGhhdmUgYSBoZWlnaHQgYW5kIHN0eWxlIGlzIGBub25lYCwgZWxzZSByZXR1cm4gZGVmYXVsdCBoZWlnaHQuXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgfHwgdGhpcy5pc0Z1bGxTY3JlZW4oKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ID8gYCR7dGhpcy5oZWlnaHR9cHhgIDogJzE1MHB4JztcbiAgICB9XG4gIH1cblxuICBnZXRDaXJjbGVEaWFtZXRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVEaWFtZXRlcjtcbiAgfVxuXG4gIGdldENpcmNsZVN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgLy8gd2UgY2FsY3VsYXRlIHRoZSBzdHJva2Ugd2lkdGggYnkgc2V0dGluZyBpdCBhcyAxMCUgb2YgaXRzIGRpYW1ldGVyXG4gICAgY29uc3Qgc3Ryb2tlV2lkdGg6IG51bWJlciA9IHRoaXMuZ2V0Q2lyY2xlRGlhbWV0ZXIoKSAvIDEwO1xuICAgIHJldHVybiBNYXRoLmFicyhzdHJva2VXaWR0aCk7XG4gIH1cblxuICBpc0NpcmN1bGFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICB9XG5cbiAgaXNMaW5lYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICB9XG5cbiAgaXNGdWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0eWxlID09PSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgfVxuXG4gIGlzT3ZlcmxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSA9PT0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gIH1cblxuICBhbmltYXRpb25Db21wbGV0ZShldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgaXRzIFwiaW5cIiBvciBcIm91dFwiIGFuaW1hdGlvbiB0byBleGVjdXRlIHRoZSBwcm9wZXIgY2FsbGJhY2tcbiAgICBpZiAoIWV2ZW50LmZyb21TdGF0ZSkge1xuICAgICAgdGhpcy5pbkFuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dEFuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGluQW5pbWF0aW9uQ29tcGxldGVkKCk6IHZvaWQge1xuICAgIHRoaXMuX2FuaW1hdGlvbkluLm5leHQoKTtcbiAgfVxuXG4gIG91dEFuaW1hdGlvbkNvbXBsZXRlZCgpOiB2b2lkIHtcbiAgICAvKiBsaXR0bGUgaGFjayB0byByZXNldCB0aGUgbG9hZGVyIHZhbHVlIGFuZCBhbmltYXRpb24gYmVmb3JlIHJlbW92aW5nIGl0IGZyb20gRE9NXG4gICAgICogZWxzZSwgdGhlIGxvYWRlciB3aWxsIGFwcGVhciB3aXRoIHByZXYgdmFsdWUgd2hlbiBpdHMgcmVnaXN0ZXJlZCBhZ2FpblxuICAgICAqIGFuZCB3aWxsIGRvIGFuIGFuaW1hdGlvbiBnb2luZyBwcmV2IHZhbHVlIHRvIDAuXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25PdXQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBpbiBhbmltYXRpb24gYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgY29tcGxldGl0aW9uIGV2ZW50LlxuICAgKi9cbiAgc3RhcnRJbkFuaW1hdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8qIG5lZWQgdG8gc3dpdGNoIGJhY2sgdG8gdGhlIHNlbGVjdGVkIG1vZGUsIHNvIHdlIGhhdmUgc2F2ZWQgaXQgaW4gYW5vdGhlciB2YXJpYWJsZVxuICAgICAqICBhbmQgdGhlbiByZWNvdmVyIGl0LiAoaXNzdWUgd2l0aCBwcm90cmFjdG9yKVxuICAgICAqL1xuICAgIHRoaXMuX21vZGUgPSB0aGlzLl9kZWZhdWx0TW9kZTtcbiAgICAvLyBTZXQgdmFsdWVzIGJlZm9yZSB0aGUgYW5pbWF0aW9ucyBzdGFydHNcbiAgICB0aGlzLl9zZXRDaXJjbGVEaWFtZXRlcigpO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25Jbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb3V0IGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzdGFydE91dEFuaW1hdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYW5pbWF0aW9uID0gZmFsc2U7XG4gICAgLyogbmVlZCB0byBzd2l0Y2ggYmFjayBhbmQgZm9ydGggZnJvbSBkZXRlcm1pbmF0ZS9pbmRldGVybWluYXRlIHNvIHRoZSBzZXRJbnRlcnZhbCgpXG4gICAgICogaW5zaWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyIHN0b3BzIGFuZCBwcm90cmFjdG9yIGRvZXNudCB0aW1lb3V0IHdhaXRpbmcgdG8gc3luYy5cbiAgICAgKi9cbiAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uT3V0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgcHJvcGVyIGRpYW1ldGVyIGZvciB0aGUgY2lyY2xlIGFuZCBzZXQgaXRcbiAgICovXG4gIHByaXZhdGUgX3NldENpcmNsZURpYW1ldGVyKCk6IHZvaWQge1xuICAgIC8vIHdlIHNldCBhIGRlZmF1bHQgZGlhbWV0ZXIgb2YgMTAwIHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gbWF0ZXJpYWxcbiAgICBsZXQgZGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcbiAgICAvLyBpZiBoZWlnaHQgaXMgcHJvdmlkZWQsIHRoZW4gd2UgdGFrZSB0aGF0IGFzIGRpYW1ldGVyXG4gICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICBkaWFtZXRlciA9IHRoaXMuaGVpZ2h0O1xuICAgICAgLy8gZWxzZSBpZiBpdHMgbm90IHByb3ZpZGVkLCB0aGVuIHdlIHRha2UgdGhlIGhvc3QgaGVpZ2h0XG4gICAgfSBlbHNlIGlmICh0aGlzLmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkaWFtZXRlciA9IHRoaXMuX2hvc3RIZWlnaHQoKTtcbiAgICB9XG4gICAgLy8gaWYgdGhlIGRpYW1ldGVyIGlzIG92ZXIgVERfQ0lSQ0xFX0RJQU1FVEVSLCB3ZSBzZXQgVERfQ0lSQ0xFX0RJQU1FVEVSXG4gICAgaWYgKCEhZGlhbWV0ZXIgJiYgZGlhbWV0ZXIgPD0gVERfQ0lSQ0xFX0RJQU1FVEVSKSB7XG4gICAgICB0aGlzLl9jaXJjbGVEaWFtZXRlciA9IE1hdGguZmxvb3IoZGlhbWV0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jaXJjbGVEaWFtZXRlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaG9zdCBoZWlnaHQgb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIF9ob3N0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIl19