/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, AnimationBuilder, AUTO_STYLE, style, animation } from '@angular/animations';
export class TdToggleDirective {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _animationBuilder
     */
    constructor(_renderer, _element, _changeDetectorRef, _animationBuilder) {
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
    /**
     * tdToggle: boolean
     * Toggles element, hides if its 'true', shows if its 'false'.
     * @param {?} state
     * @return {?}
     */
    set state(state) {
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
    }
    /**
     * Binds native 'aria-expanded' attribute.
     * @return {?}
     */
    get ariaExpandedBinding() {
        return !this._state;
    }
    /**
     * Binds native 'aria-hidden' attribute.
     * @return {?}
     */
    get ariaHiddenBinding() {
        return this._state;
    }
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    hide() {
        this._animationHidePlayer = this._animationBuilder.build(animation([
            style({
                height: AUTO_STYLE,
                display: AUTO_STYLE,
            }),
            animate(this.duration + 'ms ease-in', style({ height: '0' })),
        ])).create(this._element.nativeElement);
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._changeDetectorRef.markForCheck();
        this._animationHidePlayer.onDone(() => {
            this._onHideDone();
        });
        this._animationHidePlayer.play();
    }
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "overflow:[default]" style again at the end.
     * @return {?}
     */
    show() {
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
        this._animationShowPlayer.onDone(() => {
            this._onShowDone();
        });
        this._animationShowPlayer.play();
    }
    /**
     * @return {?}
     */
    _onHideDone() {
        if (this._animationHidePlayer) {
            this._animationHidePlayer.destroy();
            this._animationHidePlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    _onShowDone() {
        if (this._animationShowPlayer) {
            this._animationShowPlayer.destroy();
            this._animationShowPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._changeDetectorRef.markForCheck();
        }
    }
}
TdToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdToggle]',
            },] }
];
/** @nocollapse */
TdToggleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: AnimationBuilder }
];
TdToggleDirective.propDecorators = {
    duration: [{ type: Input }],
    state: [{ type: Input, args: ['tdToggle',] }],
    ariaExpandedBinding: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    ariaHiddenBinding: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2FuaW1hdGlvbnMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQW1CLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLL0csTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQXFENUIsWUFBb0IsU0FBb0IsRUFDcEIsUUFBb0IsRUFDcEIsa0JBQXFDLEVBQ3JDLGlCQUFtQztRQUhuQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCOzs7Ozs7UUEzQzlDLGFBQVEsR0FBVyxHQUFHLENBQUM7UUE0QzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7O0lBeENELElBQ0ksS0FBSyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFB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WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uUGxheWVyLCBBVVRPX1NUWUxFLCBzdHlsZSwgYW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZFRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRvZ2dsZURpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlZmF1bHRPdmVyZmxvdzogc3RyaW5nO1xuICBwcml2YXRlIF9kZWZhdWx0RGlzcGxheTogc3RyaW5nO1xuICBwcml2YXRlIF9hbmltYXRpb25TaG93UGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XG4gIHByaXZhdGUgX2FuaW1hdGlvbkhpZGVQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcblxuICAvKipcbiAgICogZHVyYXRpb24/OiBudW1iZXJcbiAgICogU2V0cyBkdXJhdGlvbiBvZiB0b2dnbGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICogRGVmYXVsdHMgdG8gMTUwIG1zLlxuICAgKi9cbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciA9IDE1MDtcblxuICAvKipcbiAgICogdGRUb2dnbGU6IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBlbGVtZW50LCBoaWRlcyBpZiBpdHMgJ3RydWUnLCBzaG93cyBpZiBpdHMgJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgndGRUb2dnbGUnKVxuICBzZXQgc3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkhpZGVQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkhpZGVQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdhcmlhLWV4cGFuZGVkJyBhdHRyaWJ1dGUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIGdldCBhcmlhRXhwYW5kZWRCaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5fc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdhcmlhLWhpZGRlbicgYXR0cmlidXRlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJylcbiAgZ2V0IGFyaWFIaWRkZW5CaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge1xuICAgIHRoaXMuX2RlZmF1bHREaXNwbGF5ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgdGhpcy5fZGVmYXVsdE92ZXJmbG93ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGVsZW1lbnQ6IHNldHMgXCJkaXNwbGF5OltkZWZhdWx0XVwiIHNvIGFuaW1hdGlvbiBpcyBzaG93bixcbiAgICogc3RhcnRzIGFuaW1hdGlvbiBhbmQgYWRkcyBcImRpc3BsYXk6J25vbmUnXCIgc3R5bGUgYXQgdGhlIGVuZC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllciA9IHRoaXMuX2FuaW1hdGlvbkJ1aWxkZXIuYnVpbGQoYW5pbWF0aW9uKFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgICAgICBkaXNwbGF5OiBBVVRPX1NUWUxFLFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKHRoaXMuZHVyYXRpb24gKyAnbXMgZWFzZS1pbicsIHN0eWxlKHtoZWlnaHQ6ICcwJ30pKSxcbiAgICBdKSkuY3JlYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25IaWRlRG9uZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2FuaW1hdGlvbkhpZGVQbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGVsZW1lbnQ6IHNldHMgXCJkaXNwbGF5OltkZWZhdWx0XVwiIHNvIGFuaW1hdGlvbiBpcyBzaG93bixcbiAgICogc3RhcnRzIGFuaW1hdGlvbiBhbmQgYWRkcyBcIm92ZXJmbG93OltkZWZhdWx0XVwiIHN0eWxlIGFnYWluIGF0IHRoZSBlbmQuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB0aGlzLl9kZWZhdWx0RGlzcGxheSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllciA9IHRoaXMuX2FuaW1hdGlvbkJ1aWxkZXIuYnVpbGQoYW5pbWF0aW9uKFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSh0aGlzLmR1cmF0aW9uICsgJ21zIGVhc2Utb3V0Jywgc3R5bGUoe2hlaWdodDogQVVUT19TVFlMRX0pKSxcbiAgICBdKSkuY3JlYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25TaG93RG9uZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25IaWRlRG9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllcikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllci5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCB0aGlzLl9kZWZhdWx0T3ZlcmZsb3cpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vblNob3dEb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25TaG93UGxheWVyKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25TaG93UGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsIHRoaXMuX2RlZmF1bHRPdmVyZmxvdyk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==