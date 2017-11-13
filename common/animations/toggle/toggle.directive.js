import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, AnimationBuilder, AUTO_STYLE, style, animation } from '@angular/animations';
var TdToggleDirective = (function () {
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
        set: function (state) {
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
        get: function () {
            return !this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdToggleDirective.prototype, "ariaHiddenBinding", {
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
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     */
    TdToggleDirective.prototype.hide = function () {
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
    TdToggleDirective.prototype.show = function () {
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
    TdToggleDirective.prototype._onHideDone = function () {
        if (this._animationHidePlayer) {
            this._animationHidePlayer.destroy();
            this._animationHidePlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
        }
    };
    TdToggleDirective.prototype._onShowDone = function () {
        if (this._animationShowPlayer) {
            this._animationShowPlayer.destroy();
            this._animationShowPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._changeDetectorRef.markForCheck();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], TdToggleDirective.prototype, "duration", void 0);
    tslib_1.__decorate([
        Input('tdToggle'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdToggleDirective.prototype, "state", null);
    tslib_1.__decorate([
        HostBinding('attr.aria-expanded'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdToggleDirective.prototype, "ariaExpandedBinding", null);
    tslib_1.__decorate([
        HostBinding('attr.aria-hidden'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdToggleDirective.prototype, "ariaHiddenBinding", null);
    TdToggleDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdToggle]',
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef,
            ChangeDetectorRef,
            AnimationBuilder])
    ], TdToggleDirective);
    return TdToggleDirective;
}());
export { TdToggleDirective };
//# sourceMappingURL=toggle.directive.js.map