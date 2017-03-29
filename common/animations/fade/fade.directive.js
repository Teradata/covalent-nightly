var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Output, EventEmitter, HostBinding, Renderer2, ChangeDetectorRef, } from '@angular/core';
import { ɵAnimation as Animation, AnimationDriver, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵDomAnimationEngine as DomAnimationEngine } from '@angular/animations/browser';
import { animate } from '@angular/animations';
var TdFadeDirective = (function () {
    function TdFadeDirective(_renderer, _element, _changeDetectorRef, animationDriver, animationStyleNormalizer) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * duration?: number
         * Sets duration of fade animation in miliseconds.
         * Defaults to 150 ms.
         */
        this.duration = 150;
        /**
         * fadeIn?: function
         * Method to be executed when fadeIn animation ends.
         */
        this.fadeIn = new EventEmitter();
        /**
         * fadeOut?: function
         * Method to be executed when fadeOut animation ends.
         */
        this.fadeOut = new EventEmitter();
        this._engine = new DomAnimationEngine(animationDriver, animationStyleNormalizer);
    }
    Object.defineProperty(TdFadeDirective.prototype, "state", {
        /**
         * tdFade: boolean
         * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
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
        this._defaultDisplay = this._element.nativeElement.style.display;
        this._defaultOpacity = !this._element.nativeElement.style.opacity ? 1 : this._element.nativeElement.style.opacity;
        this._animationPlayer = this._engine.animateTimeline(this._element.nativeElement, new Animation([animate(this.duration + 'ms ease-out')]).buildTimelines([{ opacity: this._defaultOpacity }], [{ opacity: 0 }]));
        this._changeDetectorRef.markForCheck();
        this._animationPlayer.play();
        this._animationPlayer.onDone(function () {
            _this._animationPlayer.destroy();
            _this._renderer.setStyle(_this._element.nativeElement, 'display', 'none');
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown.
     */
    TdFadeDirective.prototype.show = function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationPlayer = this._engine.animateTimeline(this._element.nativeElement, new Animation([animate(this.duration + 'ms ease-in')]).buildTimelines([{ opacity: 0 }], [{ opacity: this._defaultOpacity }]));
        this._animationPlayer.play();
        this._animationPlayer.onDone(function () {
            _this._animationPlayer.destroy();
            _this._changeDetectorRef.markForCheck();
        });
    };
    return TdFadeDirective;
}());
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdFadeDirective.prototype, "duration", void 0);
__decorate([
    Input('tdFade'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdFadeDirective.prototype, "state", null);
__decorate([
    Output('fadeIn'),
    __metadata("design:type", EventEmitter)
], TdFadeDirective.prototype, "fadeIn", void 0);
__decorate([
    Output('fadeOut'),
    __metadata("design:type", EventEmitter)
], TdFadeDirective.prototype, "fadeOut", void 0);
__decorate([
    HostBinding('attr.aria-expanded'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdFadeDirective.prototype, "ariaExpandedBinding", null);
__decorate([
    HostBinding('attr.aria-hidden'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdFadeDirective.prototype, "ariaHiddenBinding", null);
TdFadeDirective = __decorate([
    Directive({
        selector: '[tdFade]',
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef,
        ChangeDetectorRef,
        AnimationDriver,
        AnimationStyleNormalizer])
], TdFadeDirective);
export { TdFadeDirective };
//# sourceMappingURL=fade.directive.js.map