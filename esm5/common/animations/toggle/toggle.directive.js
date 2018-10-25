/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, AnimationBuilder, AUTO_STYLE, style, animation } from '@angular/animations';
var TdToggleDirective = /** @class */ (function () {
    function TdToggleDirective(_renderer, _element, _changeDetectorRef, _animationBuilder) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationBuilder = _animationBuilder;
        /**
         * duration?: number
         * Sets duration of toggle animation in milliseconds.
         * Defaults to 150 ms.
         */
        this.duration = 150;
        this._defaultDisplay = this._element.nativeElement.style.display;
        this._defaultOverflow = this._element.nativeElement.style.overflow;
    }
    Object.defineProperty(TdToggleDirective.prototype, "state", {
        /**
         * tdToggle: boolean
         * Toggles element, hides if its 'true', shows if its 'false'.
         */
        set: /**
         * tdToggle: boolean
         * Toggles element, hides if its 'true', shows if its 'false'.
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this._state = state;
            if (state) {
                if (this._animationShowPlayer) {
                    this._animationShowPlayer.destroy();
                    this._animationShowPlayer = undefined;
                }
                this.hide();
            }
            else {
                if (this._animationHidePlayer) {
                    this._animationHidePlayer.destroy();
                    this._animationHidePlayer = undefined;
                }
                this.show();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdToggleDirective.prototype, "ariaExpandedBinding", {
        /**
         * Binds native 'aria-expanded' attribute.
         */
        get: /**
         * Binds native 'aria-expanded' attribute.
         * @return {?}
         */
        function () {
            return !this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdToggleDirective.prototype, "ariaHiddenBinding", {
        /**
         * Binds native 'aria-hidden' attribute.
         */
        get: /**
         * Binds native 'aria-hidden' attribute.
         * @return {?}
         */
        function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     */
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    TdToggleDirective.prototype.hide = /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    function () {
        var _this = this;
        this._animationHidePlayer = this._animationBuilder.build(animation([
            style({
                height: AUTO_STYLE,
                display: AUTO_STYLE,
            }),
            animate(this.duration + 'ms ease-in', style({ height: '0' })),
        ])).create(this._element.nativeElement);
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._changeDetectorRef.markForCheck();
        this._animationHidePlayer.onDone(function () {
            _this._onHideDone();
        });
        this._animationHidePlayer.play();
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "overflow:[default]" style again at the end.
     */
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "overflow:[default]" style again at the end.
     * @return {?}
     */
    TdToggleDirective.prototype.show = /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "overflow:[default]" style again at the end.
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationShowPlayer = this._animationBuilder.build(animation([
            style({
                height: '0',
                display: 'none',
            }),
            animate(this.duration + 'ms ease-out', style({ height: AUTO_STYLE })),
        ])).create(this._element.nativeElement);
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._animationShowPlayer.onDone(function () {
            _this._onShowDone();
        });
        this._animationShowPlayer.play();
    };
    /**
     * @return {?}
     */
    TdToggleDirective.prototype._onHideDone = /**
     * @return {?}
     */
    function () {
        if (this._animationHidePlayer) {
            this._animationHidePlayer.destroy();
            this._animationHidePlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    TdToggleDirective.prototype._onShowDone = /**
     * @return {?}
     */
    function () {
        if (this._animationShowPlayer) {
            this._animationShowPlayer.destroy();
            this._animationShowPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._changeDetectorRef.markForCheck();
        }
    };
    TdToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdToggle]',
                },] }
    ];
    /** @nocollapse */
    TdToggleDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: AnimationBuilder }
    ]; };
    TdToggleDirective.propDecorators = {
        duration: [{ type: Input }],
        state: [{ type: Input, args: ['tdToggle',] }],
        ariaExpandedBinding: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
        ariaHiddenBinding: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
    };
    return TdToggleDirective;
}());
export { TdToggleDirective };
if (false) {
    /** @type {?} */
    TdToggleDirective.prototype._state;
    /** @type {?} */
    TdToggleDirective.prototype._defaultOverflow;
    /** @type {?} */
    TdToggleDirective.prototype._defaultDisplay;
    /** @type {?} */
    TdToggleDirective.prototype._animationShowPlayer;
    /** @type {?} */
    TdToggleDirective.prototype._animationHidePlayer;
    /**
     * duration?: number
     * Sets duration of toggle animation in milliseconds.
     * Defaults to 150 ms.
     * @type {?}
     */
    TdToggleDirective.prototype.duration;
    /** @type {?} */
    TdToggleDirective.prototype._renderer;
    /** @type {?} */
    TdToggleDirective.prototype._element;
    /** @type {?} */
    TdToggleDirective.prototype._changeDetectorRef;
    /** @type {?} */
    TdToggleDirective.prototype._animationBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2FuaW1hdGlvbnMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQW1CLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0c7SUF3REUsMkJBQW9CLFNBQW9CLEVBQ3BCLFFBQW9CLEVBQ3BCLGtCQUFxQyxFQUNyQyxpQkFBbUM7UUFIbkMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjs7Ozs7O1FBM0M5QyxhQUFRLEdBQVcsR0FBRyxDQUFDO1FBNEM5QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDckUsQ0FBQztJQXhDRCxzQkFDSSxvQ0FBSztRQUxUOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1UsS0FBYztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxD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Qjs7O0lBRTVCLG1DQUF3Qjs7SUFDeEIsNkNBQWlDOztJQUNqQyw0Q0FBZ0M7O0lBQ2hDLGlEQUE4Qzs7SUFDOUMsaURBQThDOzs7Ozs7O0lBTzlDLHFDQUFnQzs7SUF3Q3BCLHNDQUE0Qjs7SUFDNUIscUNBQTRCOztJQUM1QiwrQ0FBNkM7O0lBQzdDLDhDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25QbGF5ZXIsIEFVVE9fU1RZTEUsIHN0eWxlLCBhbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkVG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkVG9nZ2xlRGlyZWN0aXZlIHtcblxuICBwcml2YXRlIF9zdGF0ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGVmYXVsdE92ZXJmbG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RlZmF1bHREaXNwbGF5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FuaW1hdGlvblNob3dQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uSGlkZVBsYXllcjogQW5pbWF0aW9uUGxheWVyO1xuXG4gIC8qKlxuICAgKiBkdXJhdGlvbj86IG51bWJlclxuICAgKiBTZXRzIGR1cmF0aW9uIG9mIHRvZ2dsZSBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBEZWZhdWx0cyB0byAxNTAgbXMuXG4gICAqL1xuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyID0gMTUwO1xuXG4gIC8qKlxuICAgKiB0ZFRvZ2dsZTogYm9vbGVhblxuICAgKiBUb2dnbGVzIGVsZW1lbnQsIGhpZGVzIGlmIGl0cyAndHJ1ZScsIHNob3dzIGlmIGl0cyAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCd0ZFRvZ2dsZScpXG4gIHNldCBzdGF0ZShzdGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25TaG93UGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ2FyaWEtZXhwYW5kZWQnIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcbiAgZ2V0IGFyaWFFeHBhbmRlZEJpbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ2FyaWEtaGlkZGVuJyBhdHRyaWJ1dGUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKVxuICBnZXQgYXJpYUhpZGRlbkJpbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7XG4gICAgdGhpcy5fZGVmYXVsdERpc3BsYXkgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICB0aGlzLl9kZWZhdWx0T3ZlcmZsb3cgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgZWxlbWVudDogc2V0cyBcImRpc3BsYXk6W2RlZmF1bHRdXCIgc28gYW5pbWF0aW9uIGlzIHNob3duLFxuICAgKiBzdGFydHMgYW5pbWF0aW9uIGFuZCBhZGRzIFwiZGlzcGxheTonbm9uZSdcIiBzdHlsZSBhdCB0aGUgZW5kLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyID0gdGhpcy5fYW5pbWF0aW9uQnVpbGRlci5idWlsZChhbmltYXRpb24oW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICAgIGRpc3BsYXk6IEFVVE9fU1RZTEUsXG4gICAgICB9KSxcbiAgICAgIGFuaW1hdGUodGhpcy5kdXJhdGlvbiArICdtcyBlYXNlLWluJywgc3R5bGUoe2hlaWdodDogJzAnfSkpLFxuICAgIF0pKS5jcmVhdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vbkhpZGVEb25lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllci5wbGF5KCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgZWxlbWVudDogc2V0cyBcImRpc3BsYXk6W2RlZmF1bHRdXCIgc28gYW5pbWF0aW9uIGlzIHNob3duLFxuICAgKiBzdGFydHMgYW5pbWF0aW9uIGFuZCBhZGRzIFwib3ZlcmZsb3c6W2RlZmF1bHRdXCIgc3R5bGUgYWdhaW4gYXQgdGhlIGVuZC5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2RlZmF1bHREaXNwbGF5KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25TaG93UGxheWVyID0gdGhpcy5fYW5pbWF0aW9uQnVpbGRlci5idWlsZChhbmltYXRpb24oW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKHRoaXMuZHVyYXRpb24gKyAnbXMgZWFzZS1vdXQnLCBzdHlsZSh7aGVpZ2h0OiBBVVRPX1NUWUxFfSkpLFxuICAgIF0pKS5jcmVhdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB0aGlzLl9hbmltYXRpb25TaG93UGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vblNob3dEb25lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllci5wbGF5KCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkhpZGVEb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkhpZGVQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsIHRoaXMuX2RlZmF1bHRPdmVyZmxvdyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uU2hvd0RvbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgdGhpcy5fZGVmYXVsdE92ZXJmbG93KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIl19