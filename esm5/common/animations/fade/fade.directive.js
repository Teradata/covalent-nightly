/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Output, EventEmitter, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, AnimationBuilder, AUTO_STYLE, style, animation } from '@angular/animations';
var TdFadeDirective = /** @class */ (function () {
    function TdFadeDirective(_renderer, _element, _changeDetectorRef, _animationBuilder) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationBuilder = _animationBuilder;
        /**
         * duration?: number
         * Sets duration of fade animation in milliseconds.
         * Defaults to 150 ms.
         */
        this.duration = 150;
        /**
         * fadeIn?: function
         * Method to be executed when fadeIn animation ends.
         */
        this.onFadeIn = new EventEmitter();
        /**
         * fadeOut?: function
         * Method to be executed when fadeOut animation ends.
         */
        this.onFadeOut = new EventEmitter();
        this._defaultDisplay = this._element.nativeElement.style.display;
    }
    Object.defineProperty(TdFadeDirective.prototype, "state", {
        /**
         * tdFade: boolean
         * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
         */
        set: /**
         * tdFade: boolean
         * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this._state = state;
            if (state) {
                if (this._animationFadeOutPlayer) {
                    this._animationFadeOutPlayer.destroy();
                    this._animationFadeOutPlayer = undefined;
                }
                this.hide();
            }
            else {
                if (this._animationFadeInPlayer) {
                    this._animationFadeInPlayer.destroy();
                    this._animationFadeInPlayer = undefined;
                }
                this.show();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFadeDirective.prototype, "ariaExpandedBinding", {
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
    Object.defineProperty(TdFadeDirective.prototype, "ariaHiddenBinding", {
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
     * Hides element: starts animation and adds "display:'none'" style at the end.
     */
    /**
     * Hides element: starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    TdFadeDirective.prototype.hide = /**
     * Hides element: starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    function () {
        var _this = this;
        this._animationFadeInPlayer = this._animationBuilder.build(animation([
            style({
                opacity: AUTO_STYLE,
                display: AUTO_STYLE,
            }),
            animate(this.duration + 'ms ease-out', style({ opacity: '0' })),
        ])).create(this._element.nativeElement);
        this._animationFadeInPlayer.onDone(function () {
            _this._onFadeInDone();
        });
        this._animationFadeInPlayer.play();
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown.
     */
    /**
     * Shows element: sets "display:[default]" so animation is shown.
     * @return {?}
     */
    TdFadeDirective.prototype.show = /**
     * Shows element: sets "display:[default]" so animation is shown.
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationFadeOutPlayer = this._animationBuilder.build(animation([
            style({
                opacity: '0',
                display: 'none',
            }),
            animate(this.duration + 'ms ease-in', style({ opacity: AUTO_STYLE })),
        ])).create(this._element.nativeElement);
        this._animationFadeOutPlayer.onDone(function () {
            _this._onFadeOutDone();
        });
        this._animationFadeOutPlayer.play();
    };
    /**
     * @return {?}
     */
    TdFadeDirective.prototype._onFadeInDone = /**
     * @return {?}
     */
    function () {
        if (this._animationFadeInPlayer) {
            this._animationFadeInPlayer.destroy();
            this._animationFadeInPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
            this.onFadeIn.emit();
        }
    };
    /**
     * @return {?}
     */
    TdFadeDirective.prototype._onFadeOutDone = /**
     * @return {?}
     */
    function () {
        if (this._animationFadeOutPlayer) {
            this._animationFadeOutPlayer.destroy();
            this._animationFadeOutPlayer = undefined;
            this._changeDetectorRef.markForCheck();
            this.onFadeOut.emit();
        }
    };
    TdFadeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFade]',
                },] }
    ];
    /** @nocollapse */
    TdFadeDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: AnimationBuilder }
    ]; };
    TdFadeDirective.propDecorators = {
        duration: [{ type: Input }],
        state: [{ type: Input, args: ['tdFade',] }],
        onFadeIn: [{ type: Output, args: ['fadeIn',] }],
        onFadeOut: [{ type: Output, args: ['fadeOut',] }],
        ariaExpandedBinding: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
        ariaHiddenBinding: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
    };
    return TdFadeDirective;
}());
export { TdFadeDirective };
if (false) {
    /** @type {?} */
    TdFadeDirective.prototype._state;
    /** @type {?} */
    TdFadeDirective.prototype._defaultDisplay;
    /** @type {?} */
    TdFadeDirective.prototype._animationFadeInPlayer;
    /** @type {?} */
    TdFadeDirective.prototype._animationFadeOutPlayer;
    /**
     * duration?: number
     * Sets duration of fade animation in milliseconds.
     * Defaults to 150 ms.
     * @type {?}
     */
    TdFadeDirective.prototype.duration;
    /**
     * fadeIn?: function
     * Method to be executed when fadeIn animation ends.
     * @type {?}
     */
    TdFadeDirective.prototype.onFadeIn;
    /**
     * fadeOut?: function
     * Method to be executed when fadeOut animation ends.
     * @type {?}
     */
    TdFadeDirective.prototype.onFadeOut;
    /** @type {?} */
    TdFadeDirective.prototype._renderer;
    /** @type {?} */
    TdFadeDirective.prototype._element;
    /** @type {?} */
    TdFadeDirective.prototype._changeDetectorRef;
    /** @type {?} */
    TdFadeDirective.prototype._animationBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9hbmltYXRpb25zL2ZhZGUvZmFkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBbUIsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRztJQW1FRSx5QkFBb0IsU0FBb0IsRUFDcEIsUUFBb0IsRUFDcEIsa0JBQXFDLEVBQ3JDLGlCQUFtQztRQUhuQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCOzs7Ozs7UUF2RDlDLGFBQVEsR0FBVyxHQUFHLENBQUM7Ozs7O1FBNEJkLGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNdkQsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBc0IxRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDbkUsQ0FBQztJQW5ERCxzQkFDSSxrQ0FBSztRQUxUOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1UsS0FBYztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLHVCQUF1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O1lBQ3hFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVPLHdDQUFjOzs7SUFBdEI7UUFDRSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7O2dCQS9IRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQUx5RSxTQUFTO2dCQUEvRCxVQUFVO2dCQUF1RCxpQkFBaUI7Z0JBQ3BGLGdCQUFnQjs7OzJCQWlCL0IsS0FBSzt3QkFNTCxLQUFLLFNBQUMsUUFBUTsyQkFzQmQsTUFBTSxTQUFDLFFBQVE7NEJBTWYsTUFBTSxTQUFDLFNBQVM7c0NBS2hCLFdBQVcsU0FBQyxvQkFBb0I7b0NBUWhDLFdBQVcsU0FBQyxrQkFBa0I7O0lBa0VqQyxzQkFBQztDQUFBLEFBaElELElBZ0lDO1NBN0hZLGVBQWU7OztJQUUxQixpQ0FBd0I7O0lBQ3hCLDBDQUFnQzs7SUFDaEMsaURBQWdEOztJQUNoRCxrREFBaUQ7Ozs7Ozs7SUFPakQsbUNBQWdDOzs7Ozs7SUE0QmhDLG1DQUEwRTs7Ozs7O0lBTTFFLG9DQUE0RTs7SUFrQmhFLG9DQUE0Qjs7SUFDNUIsbUNBQTRCOztJQUM1Qiw2Q0FBNkM7O0lBQzdDLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uUGxheWVyLCBBVVRPX1NUWUxFLCBzdHlsZSwgYW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZhZGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGYWRlRGlyZWN0aXZlIHtcblxuICBwcml2YXRlIF9zdGF0ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGVmYXVsdERpc3BsYXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uRmFkZUluUGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XG4gIHByaXZhdGUgX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcblxuICAvKipcbiAgICogZHVyYXRpb24/OiBudW1iZXJcbiAgICogU2V0cyBkdXJhdGlvbiBvZiBmYWRlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAqIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAgICovXG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXIgPSAxNTA7XG5cbiAgLyoqXG4gICAqIHRkRmFkZTogYm9vbGVhblxuICAgKiBGYWRlcyBlbGVtZW50LCBGYWRlc091dCBpZiBpdHMgJ3RydWUnLCBGYWRlc0luIGlmIGl0cyAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCd0ZEZhZGUnKVxuICBzZXQgc3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZmFkZUluPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gZmFkZUluIGFuaW1hdGlvbiBlbmRzLlxuICAgKi9cbiAgQE91dHB1dCgnZmFkZUluJykgb25GYWRlSW46IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogZmFkZU91dD86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGZhZGVPdXQgYW5pbWF0aW9uIGVuZHMuXG4gICAqL1xuICBAT3V0cHV0KCdmYWRlT3V0Jykgb25GYWRlT3V0OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnYXJpYS1leHBhbmRlZCcgYXR0cmlidXRlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxuICBnZXQgYXJpYUV4cGFuZGVkQmluZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuX3N0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnYXJpYS1oaWRkZW4nIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhpZGRlbicpXG4gIGdldCBhcmlhSGlkZGVuQmluZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgICB0aGlzLl9kZWZhdWx0RGlzcGxheSA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGVsZW1lbnQ6IHN0YXJ0cyBhbmltYXRpb24gYW5kIGFkZHMgXCJkaXNwbGF5Oidub25lJ1wiIHN0eWxlIGF0IHRoZSBlbmQuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllciA9IHRoaXMuX2FuaW1hdGlvbkJ1aWxkZXIuYnVpbGQoYW5pbWF0aW9uKFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgICAgZGlzcGxheTogQVVUT19TVFlMRSxcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSh0aGlzLmR1cmF0aW9uICsgJ21zIGVhc2Utb3V0Jywgc3R5bGUoe29wYWNpdHk6ICcwJ30pKSxcbiAgICBdKSkuY3JlYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uRmFkZUluUGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZhZGVJbkRvbmUoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGVsZW1lbnQ6IHNldHMgXCJkaXNwbGF5OltkZWZhdWx0XVwiIHNvIGFuaW1hdGlvbiBpcyBzaG93bi5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2RlZmF1bHREaXNwbGF5KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyID0gdGhpcy5fYW5pbWF0aW9uQnVpbGRlci5idWlsZChhbmltYXRpb24oW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSh0aGlzLmR1cmF0aW9uICsgJ21zIGVhc2UtaW4nLCBzdHlsZSh7b3BhY2l0eTogQVVUT19TVFlMRX0pKSxcbiAgICBdKSkuY3JlYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25GYWRlT3V0RG9uZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25GYWRlSW5Eb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllci5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5vbkZhZGVJbi5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25GYWRlT3V0RG9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllcikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllci5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLm9uRmFkZU91dC5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=