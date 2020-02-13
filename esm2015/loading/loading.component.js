/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef } from '@angular/core';
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
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    show() {
        /* need to switch back to the selected mode, so we have saved it in another variable
         *  and then recover it. (issue with protractor)
         */
        this._mode = this._defaultMode;
        // Set values before the animations starts
        this._setCircleDiameter();
        // Check for changes for `OnPush` change detection
        this.animation = true;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    hide() {
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
                template: "<div\n  class=\"td-loading-wrapper\"\n  [style.min-height]=\"getHeight()\"\n  [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n  [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n  [class.td-fullscreen]=\"isFullScreen()\"\n>\n  <div [@tdFadeInOut]=\"animation\" [style.min-height]=\"getHeight()\" class=\"td-loading\">\n    <mat-progress-spinner\n      *ngIf=\"isCircular()\"\n      [mode]=\"mode\"\n      [value]=\"value\"\n      [color]=\"color\"\n      [diameter]=\"getCircleDiameter()\"\n      [strokeWidth]=\"getCircleStrokeWidth()\"\n    ></mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" [mode]=\"mode\" [value]=\"value\" [color]=\"color\"></mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>\n",
                animations: [tdFadeInOutAnimation],
                styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFXLE1BQU0sZUFBZSxDQUFDOzs7SUFJaEYsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUTs7Ozs7SUFJakIsYUFBYyxhQUFhO0lBQzNCLGVBQWdCLGVBQWU7Ozs7O0lBSS9CLFNBQVUsU0FBUztJQUNuQixTQUFVLFNBQVM7Ozs7O0lBSW5CLFlBQWEsWUFBWTtJQUN6QixTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNOzs7QUFHZixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxPQUFPLGtCQUFrQixHQUFXLEdBQUc7QUFRN0MsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUEwRDdCLFlBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXpEbEYsVUFBSyxHQUFnQixXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLGlCQUFZLEdBQWdCLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdEQsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixvQkFBZSxHQUFXLGtCQUFrQixDQUFDOzs7O1FBS3JELGNBQVMsR0FBWSxLQUFLLENBQUM7UUE2QjNCLFVBQUssR0FBaUIsWUFBWSxDQUFDLElBQUksQ0FBQzs7Ozs7UUFZeEMsU0FBSSxHQUFnQixXQUFXLENBQUMsUUFBUSxDQUFDOzs7OztRQU16QyxVQUFLLEdBQWtDLFNBQVMsQ0FBQztJQUU0QyxDQUFDOzs7Ozs7SUF2QzlGLElBQUksSUFBSSxDQUFDLElBQWlCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBS0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQXdCRCxTQUFTO1FBQ1AsdUVBQXVFO1FBQ3ZFLG9HQUFvRztRQUNwRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCx1REFBdUQ7UUFDdkQsOEZBQThGO1FBQzlGLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUMzQyxPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsb0JBQW9COzs7Y0FFWixXQUFXLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtRQUN6RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDOzs7OztJQUtELElBQUk7UUFDRjs7V0FFRztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMvQiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUtELElBQUk7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2Qjs7V0FFRztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxrREFBa0Q7UUFDbEQ7OztXQUdHO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUtPLGtCQUFrQjs7O1lBRXBCLFFBQVEsR0FBVyxrQkFBa0I7UUFDekMsdURBQXVEO1FBQ3ZELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLHlEQUF5RDtTQUMxRDthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDcEMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQjtRQUNELHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxJQUFJLGtCQUFrQixFQUFFO1lBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7OztJQUtPLFdBQVc7UUFDakIsSUFBSSxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDckY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7OztZQTlLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBRXRCLDR5QkFBdUM7Z0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLG9CQUFvQixDQUFDOzthQUNuQzs7OztZQWpDc0MsVUFBVTtZQUE3QixpQkFBaUI7Ozs7Ozs7SUFtQ25DLG1DQUF1RDs7Ozs7SUFDdkQsMENBQThEOzs7OztJQUM5RCxvQ0FBMkI7Ozs7O0lBQzNCLDZDQUFxRDs7Ozs7SUFLckQsdUNBQTJCOzs7OztJQUszQixxQ0FBNkI7O0lBd0I3QixtQ0FBd0M7Ozs7OztJQU14QyxvQ0FBZTs7Ozs7O0lBTWYsa0NBQXlDOzs7Ozs7SUFNekMsbUNBQWlEOzs7OztJQUVyQyx5Q0FBK0I7Ozs7O0lBQUUsZ0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuZXhwb3J0IGVudW0gTG9hZGluZ1R5cGUge1xuICBDaXJjdWxhciA9ICdjaXJjdWxhcicsXG4gIExpbmVhciA9ICdsaW5lYXInLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nTW9kZSB7XG4gIERldGVybWluYXRlID0gJ2RldGVybWluYXRlJyxcbiAgSW5kZXRlcm1pbmF0ZSA9ICdpbmRldGVybWluYXRlJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ1N0cmF0ZWd5IHtcbiAgT3ZlcmxheSA9ICdvdmVybGF5JyxcbiAgUmVwbGFjZSA9ICdyZXBsYWNlJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ1N0eWxlIHtcbiAgRnVsbFNjcmVlbiA9ICdmdWxsc2NyZWVuJyxcbiAgT3ZlcmxheSA9ICdvdmVybGF5JyxcbiAgTm9uZSA9ICdub25lJyxcbn1cblxuaW1wb3J0IHsgdGRGYWRlSW5PdXRBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgVERfQ0lSQ0xFX0RJQU1FVEVSOiBudW1iZXIgPSAxMDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxvYWRpbmcnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3RkRmFkZUluT3V0QW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG4gIHByaXZhdGUgX21vZGU6IExvYWRpbmdNb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgcHJpdmF0ZSBfZGVmYXVsdE1vZGU6IExvYWRpbmdNb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2NpcmNsZURpYW1ldGVyOiBudW1iZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG5cbiAgLyoqXG4gICAqIEZsYWcgZm9yIGFuaW1hdGlvblxuICAgKi9cbiAgYW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENvbnRlbnQgaW5qZWN0ZWQgaW50byBsb2FkaW5nIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbnRlbnQ6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgLyoqXG4gICAqIFNldHMgbW9kZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSB0byBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSBvciBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlXG4gICAqL1xuICBzZXQgbW9kZShtb2RlOiBMb2FkaW5nTW9kZSkge1xuICAgIHRoaXMuX2RlZmF1bHRNb2RlID0gbW9kZTtcbiAgfVxuICBnZXQgbW9kZSgpOiBMb2FkaW5nTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB2YWx1ZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSBpZiBtb2RlIGlzICdMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSdcbiAgICovXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHN0eWxlOiBMb2FkaW5nU3R5bGUgPSBMb2FkaW5nU3R5bGUuTm9uZTtcblxuICAvKipcbiAgICogaGVpZ2h0OiBudW1iZXJcbiAgICogU2V0cyBoZWlnaHQgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0uXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogdHlwZTogTG9hZGluZ1R5cGVcbiAgICogU2V0cyB0eXBlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHJlbmRlcmVkLlxuICAgKi9cbiAgdHlwZTogTG9hZGluZ1R5cGUgPSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcblxuICAvKipcbiAgICogY29sb3I6IHByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGVtZSBjb2xvciBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSByZW5kZXJlZC5cbiAgICovXG4gIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIC8vIFdoZW4gb3ZlcmxheSBpcyB1c2VkIGFuZCB0aGUgaG9zdCB3aWR0aCBoYXMgYSB2YWx1ZSBncmVhdGVyIHRoYW4gMXB4XG4gICAgLy8gc2V0IHRoZSBjaXJjbGUgZGlhbWV0ZXIgd2hlbiBwb3NzaWJsZSBpbmNhc2UgdGhlIGxvYWRpbmcgY29tcG9uZW50IHdhcyByZW5kZXJlZCBpbiBhIGhpZGRlbiBzdGF0ZVxuICAgIGlmICh0aGlzLmlzT3ZlcmxheSgpICYmIHRoaXMuX2hvc3RIZWlnaHQoKSA+IDEgJiYgdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3NldENpcmNsZURpYW1ldGVyKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBnZXRIZWlnaHQoKTogc3RyaW5nIHtcbiAgICAvLyBJZ25vcmUgaGVpZ2h0IGlmIHN0eWxlIGlzIGBvdmVybGF5YCBvciBgZnVsbHNjcmVlbmAuXG4gICAgLy8gQWRkIGhlaWdodCBpZiBjaGlsZCBlbGVtZW50cyBoYXZlIGEgaGVpZ2h0IGFuZCBzdHlsZSBpcyBgbm9uZWAsIGVsc2UgcmV0dXJuIGRlZmF1bHQgaGVpZ2h0LlxuICAgIGlmICh0aGlzLmlzT3ZlcmxheSgpIHx8IHRoaXMuaXNGdWxsU2NyZWVuKCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhlaWdodCA/IGAke3RoaXMuaGVpZ2h0fXB4YCA6ICcxNTBweCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2lyY2xlRGlhbWV0ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlRGlhbWV0ZXI7XG4gIH1cblxuICBnZXRDaXJjbGVTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIC8vIHdlIGNhbGN1bGF0ZSB0aGUgc3Ryb2tlIHdpZHRoIGJ5IHNldHRpbmcgaXQgYXMgMTAlIG9mIGl0cyBkaWFtZXRlclxuICAgIGNvbnN0IHN0cm9rZVdpZHRoOiBudW1iZXIgPSB0aGlzLmdldENpcmNsZURpYW1ldGVyKCkgLyAxMDtcbiAgICByZXR1cm4gTWF0aC5hYnMoc3Ryb2tlV2lkdGgpO1xuICB9XG5cbiAgaXNDaXJjdWxhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgfVxuXG4gIGlzTGluZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExvYWRpbmdUeXBlLkxpbmVhcjtcbiAgfVxuXG4gIGlzRnVsbFNjcmVlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSA9PT0gTG9hZGluZ1N0eWxlLkZ1bGxTY3JlZW47XG4gIH1cblxuICBpc092ZXJsYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUgPT09IExvYWRpbmdTdHlsZS5PdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBpbiBhbmltYXRpb24gYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgY29tcGxldGl0aW9uIGV2ZW50LlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICAvKiBuZWVkIHRvIHN3aXRjaCBiYWNrIHRvIHRoZSBzZWxlY3RlZCBtb2RlLCBzbyB3ZSBoYXZlIHNhdmVkIGl0IGluIGFub3RoZXIgdmFyaWFibGVcbiAgICAgKiAgYW5kIHRoZW4gcmVjb3ZlciBpdC4gKGlzc3VlIHdpdGggcHJvdHJhY3RvcilcbiAgICAgKi9cbiAgICB0aGlzLl9tb2RlID0gdGhpcy5fZGVmYXVsdE1vZGU7XG4gICAgLy8gU2V0IHZhbHVlcyBiZWZvcmUgdGhlIGFuaW1hdGlvbnMgc3RhcnRzXG4gICAgdGhpcy5fc2V0Q2lyY2xlRGlhbWV0ZXIoKTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb3V0IGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uID0gZmFsc2U7XG4gICAgLyogbmVlZCB0byBzd2l0Y2ggYmFjayBhbmQgZm9ydGggZnJvbSBkZXRlcm1pbmF0ZS9pbmRldGVybWluYXRlIHNvIHRoZSBzZXRJbnRlcnZhbCgpXG4gICAgICogaW5zaWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyIHN0b3BzIGFuZCBwcm90cmFjdG9yIGRvZXNudCB0aW1lb3V0IHdhaXRpbmcgdG8gc3luYy5cbiAgICAgKi9cbiAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICAvKiBsaXR0bGUgaGFjayB0byByZXNldCB0aGUgbG9hZGVyIHZhbHVlIGFuZCBhbmltYXRpb24gYmVmb3JlIHJlbW92aW5nIGl0IGZyb20gRE9NXG4gICAgICogZWxzZSwgdGhlIGxvYWRlciB3aWxsIGFwcGVhciB3aXRoIHByZXYgdmFsdWUgd2hlbiBpdHMgcmVnaXN0ZXJlZCBhZ2FpblxuICAgICAqIGFuZCB3aWxsIGRvIGFuIGFuaW1hdGlvbiBnb2luZyBwcmV2IHZhbHVlIHRvIDAuXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIHByb3BlciBkaWFtZXRlciBmb3IgdGhlIGNpcmNsZSBhbmQgc2V0IGl0XG4gICAqL1xuICBwcml2YXRlIF9zZXRDaXJjbGVEaWFtZXRlcigpOiB2b2lkIHtcbiAgICAvLyB3ZSBzZXQgYSBkZWZhdWx0IGRpYW1ldGVyIG9mIDEwMCBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIG1hdGVyaWFsXG4gICAgbGV0IGRpYW1ldGVyOiBudW1iZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG4gICAgLy8gaWYgaGVpZ2h0IGlzIHByb3ZpZGVkLCB0aGVuIHdlIHRha2UgdGhhdCBhcyBkaWFtZXRlclxuICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgZGlhbWV0ZXIgPSB0aGlzLmhlaWdodDtcbiAgICAgIC8vIGVsc2UgaWYgaXRzIG5vdCBwcm92aWRlZCwgdGhlbiB3ZSB0YWtlIHRoZSBob3N0IGhlaWdodFxuICAgIH0gZWxzZSBpZiAodGhpcy5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGlhbWV0ZXIgPSB0aGlzLl9ob3N0SGVpZ2h0KCk7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBkaWFtZXRlciBpcyBvdmVyIFREX0NJUkNMRV9ESUFNRVRFUiwgd2Ugc2V0IFREX0NJUkNMRV9ESUFNRVRFUlxuICAgIGlmICghIWRpYW1ldGVyICYmIGRpYW1ldGVyIDw9IFREX0NJUkNMRV9ESUFNRVRFUikge1xuICAgICAgdGhpcy5fY2lyY2xlRGlhbWV0ZXIgPSBNYXRoLmZsb29yKGRpYW1ldGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2lyY2xlRGlhbWV0ZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhvc3QgaGVpZ2h0IG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBfaG9zdEhlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiJdfQ==