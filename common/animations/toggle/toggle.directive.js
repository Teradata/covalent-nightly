var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { ɵAnimation as Animation, AnimationDriver, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵDomAnimationEngine as DomAnimationEngine } from '@angular/animations/browser';
import { animate } from '@angular/animations';
var TdToggleDirective = (function () {
    function TdToggleDirective(_renderer, _element, _changeDetectorRef, animationDriver, animationStyleNormalizer) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * duration?: number
         * Sets duration of toggle animation in miliseconds.
         * Defaults to 150 ms.
         */
        this.duration = 150;
        this._engine = new DomAnimationEngine(animationDriver, animationStyleNormalizer);
    }
    Object.defineProperty(TdToggleDirective.prototype, "state", {
        /**
         * tdToggle: boolean
         * Toggles element, hides if its 'true', shows if its 'false'.
         */
        set: function (state) {
            this._state = state;
            if (this._animationPlayer) {
                this._animationPlayer.destroy();
                this._animationPlayer = undefined;
            }
            if (state) {
                this.hide();
            }
            else {
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
        this._defaultDisplay = this._element.nativeElement.style.display;
        this._defaultOverflow = this._element.nativeElement.style.overflow;
        this._animationPlayer = this._engine.animateTimeline(this._element.nativeElement, new Animation([animate(this.duration + 'ms ease-out')]).buildTimelines([{ height: this._element.nativeElement.scrollHeight + 'px' }], [{ height: 0 }]));
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._changeDetectorRef.markForCheck();
        this._animationPlayer.play();
        this._animationPlayer.onDone(function () {
            _this._animationPlayer.destroy();
            _this._renderer.setStyle(_this._element.nativeElement, 'overflow', _this._defaultOverflow);
            _this._renderer.setStyle(_this._element.nativeElement, 'display', 'none');
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "overflow:[default]" style again at the end.
     */
    TdToggleDirective.prototype.show = function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationPlayer = this._engine.animateTimeline(this._element.nativeElement, new Animation([animate(this.duration + 'ms ease-in')]).buildTimelines([{ height: 0 }], [{ height: this._element.nativeElement.scrollHeight + 'px' }]));
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._animationPlayer.play();
        this._animationPlayer.onDone(function () {
            _this._animationPlayer.destroy();
            _this._renderer.setStyle(_this._element.nativeElement, 'overflow', _this._defaultOverflow);
            _this._changeDetectorRef.markForCheck();
        });
    };
    return TdToggleDirective;
}());
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdToggleDirective.prototype, "duration", void 0);
__decorate([
    Input('tdToggle'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdToggleDirective.prototype, "state", null);
__decorate([
    HostBinding('attr.aria-expanded'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdToggleDirective.prototype, "ariaExpandedBinding", null);
__decorate([
    HostBinding('attr.aria-hidden'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdToggleDirective.prototype, "ariaHiddenBinding", null);
TdToggleDirective = __decorate([
    Directive({
        selector: '[tdToggle]',
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef,
        ChangeDetectorRef,
        AnimationDriver,
        AnimationStyleNormalizer])
], TdToggleDirective);
export { TdToggleDirective };
//# sourceMappingURL=toggle.directive.js.map