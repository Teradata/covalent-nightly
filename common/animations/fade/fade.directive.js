import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Output, EventEmitter, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, AnimationBuilder, AUTO_STYLE, style, animation } from '@angular/animations';
var TdFadeDirective = (function () {
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
        set: function (state) {
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
        get: function () {
            return !this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFadeDirective.prototype, "ariaHiddenBinding", {
        /**
         * Binds native 'aria-hidden' attribute.
         */
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Hides element: starts animation and adds "display:'none'" style at the end.
     */
    TdFadeDirective.prototype.hide = function () {
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
    TdFadeDirective.prototype.show = function () {
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
    TdFadeDirective.prototype._onFadeInDone = function () {
        if (this._animationFadeInPlayer) {
            this._animationFadeInPlayer.destroy();
            this._animationFadeInPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
            this.onFadeIn.emit();
        }
    };
    TdFadeDirective.prototype._onFadeOutDone = function () {
        if (this._animationFadeOutPlayer) {
            this._animationFadeOutPlayer.destroy();
            this._animationFadeOutPlayer = undefined;
            this._changeDetectorRef.markForCheck();
            this.onFadeOut.emit();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], TdFadeDirective.prototype, "duration", void 0);
    tslib_1.__decorate([
        Input('tdFade'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdFadeDirective.prototype, "state", null);
    tslib_1.__decorate([
        Output('fadeIn'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdFadeDirective.prototype, "onFadeIn", void 0);
    tslib_1.__decorate([
        Output('fadeOut'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdFadeDirective.prototype, "onFadeOut", void 0);
    tslib_1.__decorate([
        HostBinding('attr.aria-expanded'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdFadeDirective.prototype, "ariaExpandedBinding", null);
    tslib_1.__decorate([
        HostBinding('attr.aria-hidden'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdFadeDirective.prototype, "ariaHiddenBinding", null);
    TdFadeDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdFade]',
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef,
            ChangeDetectorRef,
            AnimationBuilder])
    ], TdFadeDirective);
    return TdFadeDirective;
}());
export { TdFadeDirective };
//# sourceMappingURL=fade.directive.js.map