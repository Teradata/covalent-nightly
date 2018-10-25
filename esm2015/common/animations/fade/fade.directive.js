/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Output, EventEmitter, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, AnimationBuilder, AUTO_STYLE, style, animation } from '@angular/animations';
export class TdFadeDirective {
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
    /**
     * tdFade: boolean
     * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
     * @param {?} state
     * @return {?}
     */
    set state(state) {
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
     * Hides element: starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    hide() {
        this._animationFadeInPlayer = this._animationBuilder.build(animation([
            style({
                opacity: AUTO_STYLE,
                display: AUTO_STYLE,
            }),
            animate(this.duration + 'ms ease-out', style({ opacity: '0' })),
        ])).create(this._element.nativeElement);
        this._animationFadeInPlayer.onDone(() => {
            this._onFadeInDone();
        });
        this._animationFadeInPlayer.play();
    }
    /**
     * Shows element: sets "display:[default]" so animation is shown.
     * @return {?}
     */
    show() {
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationFadeOutPlayer = this._animationBuilder.build(animation([
            style({
                opacity: '0',
                display: 'none',
            }),
            animate(this.duration + 'ms ease-in', style({ opacity: AUTO_STYLE })),
        ])).create(this._element.nativeElement);
        this._animationFadeOutPlayer.onDone(() => {
            this._onFadeOutDone();
        });
        this._animationFadeOutPlayer.play();
    }
    /**
     * @return {?}
     */
    _onFadeInDone() {
        if (this._animationFadeInPlayer) {
            this._animationFadeInPlayer.destroy();
            this._animationFadeInPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
            this.onFadeIn.emit();
        }
    }
    /**
     * @return {?}
     */
    _onFadeOutDone() {
        if (this._animationFadeOutPlayer) {
            this._animationFadeOutPlayer.destroy();
            this._animationFadeOutPlayer = undefined;
            this._changeDetectorRef.markForCheck();
            this.onFadeOut.emit();
        }
    }
}
TdFadeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFade]',
            },] }
];
/** @nocollapse */
TdFadeDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: AnimationBuilder }
];
TdFadeDirective.propDecorators = {
    duration: [{ type: Input }],
    state: [{ type: Input, args: ['tdFade',] }],
    onFadeIn: [{ type: Output, args: ['fadeIn',] }],
    onFadeOut: [{ type: Output, args: ['fadeOut',] }],
    ariaExpandedBinding: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    ariaHiddenBinding: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9hbmltYXRpb25zL2ZhZGUvZmFkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBbUIsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUsvRyxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQWdFMUIsWUFBb0IsU0FBb0IsRUFDcEIsUUFBb0IsRUFDcEIsa0JBQXFDLEVBQ3JDLGlCQUFtQztRQUhuQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCOzs7Ozs7UUF2RDlDLGFBQVEsR0FBVyxHQUFHLENBQUM7Ozs7O1FBNEJkLGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNdkQsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBc0IxRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDbkUsQ0FBQzs7Ozs7OztJQW5ERCxJQUNJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyx1QkFB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QUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBL0hGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQUx5RSxTQUFTO1lBQS9ELFVBQVU7WUFBdUQsaUJBQWlCO1lBQ3BGLGdCQUFnQjs7O3VCQWlCL0IsS0FBSztvQkFNTCxLQUFLLFNBQUMsUUFBUTt1QkFzQmQsTUFBTSxTQUFDLFFBQVE7d0JBTWYsTUFBTSxTQUFDLFNBQVM7a0NBS2hCLFdBQVcsU0FBQyxvQkFBb0I7Z0NBUWhDLFdBQVcsU0FBQyxrQkFBa0I7Ozs7SUF6RC9CLGlDQUF3Qjs7SUFDeEIsMENBQWdDOztJQUNoQyxpREFBZ0Q7O0lBQ2hELGtEQUFpRDs7Ozs7OztJQU9qRCxtQ0FBZ0M7Ozs7OztJQTRCaEMsbUNBQTBFOzs7Ozs7SUFNMUUsb0NBQTRFOztJQWtCaEUsb0NBQTRCOztJQUM1QixtQ0FBNEI7O0lBQzVCLDZDQUE2Qzs7SUFDN0MsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25QbGF5ZXIsIEFVVE9fU1RZTEUsIHN0eWxlLCBhbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRmFkZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZhZGVEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBib29sZWFuO1xuICBwcml2YXRlIF9kZWZhdWx0RGlzcGxheTogc3RyaW5nO1xuICBwcml2YXRlIF9hbmltYXRpb25GYWRlSW5QbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uRmFkZU91dFBsYXllcjogQW5pbWF0aW9uUGxheWVyO1xuXG4gIC8qKlxuICAgKiBkdXJhdGlvbj86IG51bWJlclxuICAgKiBTZXRzIGR1cmF0aW9uIG9mIGZhZGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICogRGVmYXVsdHMgdG8gMTUwIG1zLlxuICAgKi9cbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciA9IDE1MDtcblxuICAvKipcbiAgICogdGRGYWRlOiBib29sZWFuXG4gICAqIEZhZGVzIGVsZW1lbnQsIEZhZGVzT3V0IGlmIGl0cyAndHJ1ZScsIEZhZGVzSW4gaWYgaXRzICdmYWxzZScuXG4gICAqL1xuICBASW5wdXQoJ3RkRmFkZScpXG4gIHNldCBzdGF0ZShzdGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uRmFkZUluUGxheWVyKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBmYWRlSW4/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBmYWRlSW4gYW5pbWF0aW9uIGVuZHMuXG4gICAqL1xuICBAT3V0cHV0KCdmYWRlSW4nKSBvbkZhZGVJbjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBmYWRlT3V0PzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gZmFkZU91dCBhbmltYXRpb24gZW5kcy5cbiAgICovXG4gIEBPdXRwdXQoJ2ZhZGVPdXQnKSBvbkZhZGVPdXQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdhcmlhLWV4cGFuZGVkJyBhdHRyaWJ1dGUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIGdldCBhcmlhRXhwYW5kZWRCaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5fc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdhcmlhLWhpZGRlbicgYXR0cmlidXRlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJylcbiAgZ2V0IGFyaWFIaWRkZW5CaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge1xuICAgIHRoaXMuX2RlZmF1bHREaXNwbGF5ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgZWxlbWVudDogc3RhcnRzIGFuaW1hdGlvbiBhbmQgYWRkcyBcImRpc3BsYXk6J25vbmUnXCIgc3R5bGUgYXQgdGhlIGVuZC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW9uRmFkZUluUGxheWVyID0gdGhpcy5fYW5pbWF0aW9uQnVpbGRlci5idWlsZChhbmltYXRpb24oW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiBBVVRPX1NUWUxFLFxuICAgICAgICBkaXNwbGF5OiBBVVRPX1NUWUxFLFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKHRoaXMuZHVyYXRpb24gKyAnbXMgZWFzZS1vdXQnLCBzdHlsZSh7b3BhY2l0eTogJzAnfSkpLFxuICAgIF0pKS5jcmVhdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgIHRoaXMuX29uRmFkZUluRG9uZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllci5wbGF5KCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgZWxlbWVudDogc2V0cyBcImRpc3BsYXk6W2RlZmF1bHRdXCIgc28gYW5pbWF0aW9uIGlzIHNob3duLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdGhpcy5fZGVmYXVsdERpc3BsYXkpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIgPSB0aGlzLl9hbmltYXRpb25CdWlsZGVyLmJ1aWxkKGFuaW1hdGlvbihbXG4gICAgICBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKHRoaXMuZHVyYXRpb24gKyAnbXMgZWFzZS1pbicsIHN0eWxlKHtvcGFjaXR5OiBBVVRPX1NUWUxFfSkpLFxuICAgIF0pKS5jcmVhdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZhZGVPdXREb25lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllci5wbGF5KCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkZhZGVJbkRvbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllcikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uRmFkZUluUGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLm9uRmFkZUluLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbkZhZGVPdXREb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMub25GYWRlT3V0LmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==