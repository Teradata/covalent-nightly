var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Renderer } from '@angular/core';
var TdFadeDirective = (function () {
    function TdFadeDirective(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
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
        this._defaultDisplay = this._element.nativeElement.style.display;
        this._defaultOpacity = !this._element.nativeElement.style.opacity ? 1 : this._element.nativeElement.style.opacity;
    }
    Object.defineProperty(TdFadeDirective.prototype, "state", {
        /**
         * tdFade: boolean
         * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
         */
        set: function (state) {
            this._state = state;
            clearTimeout(this._timeoutNumber);
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
    Object.defineProperty(TdFadeDirective.prototype, "hiddenBinding", {
        /**
         * Binds 'hidden' attribute.
         */
        get: function () {
            return this._hiddenState ? true : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     */
    TdFadeDirective.prototype.hide = function () {
        var _this = this;
        this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        var animation = this._renderer
            .animate(this._element.nativeElement, undefined, [{
                styles: {
                    styles: [{ 'opacity': 1 }],
                },
                offset: 0,
            }, {
                styles: {
                    styles: [{ 'opacity': 0 }],
                },
                offset: 1,
            },
        ], this.duration, 0, 'ease-in');
        animation.play();
        /**
         * Using timeout instead of onComplete since there is a bug if you start another animation
         * before the previous one ends. The onComplete event is not executed.
         * e.g.hide event started before show event is completed.
         */
        this._timeoutNumber = window.setTimeout(function () {
            setTimeout(function () {
                _this._renderer.setElementStyle(_this._element.nativeElement, 'display', 'none');
            }, 0);
            _this._hiddenState = _this._state;
            _this.fadeOut.emit(undefined);
            animation.destroy();
        }, this.duration);
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:[default]" style again at the end.
     */
    TdFadeDirective.prototype.show = function () {
        var _this = this;
        this._hiddenState = this._state;
        this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        var animation = this._renderer
            .animate(this._element.nativeElement, undefined, [{
                styles: {
                    styles: [{ 'opacity': 0 }],
                },
                offset: 0,
            }, {
                styles: {
                    styles: [{ 'opacity': 1 }],
                },
                offset: 1,
            },
        ], this.duration, 0, 'ease-in');
        animation.play();
        /**
         * Using timeout instead of onComplete since there is a bug if you start another animation
         * before the previous one ends. The onComplete event is not executed.
         * e.g. hide event started before show event is completed.
         */
        this._timeoutNumber = window.setTimeout(function () {
            _this._renderer.setElementStyle(_this._element.nativeElement, 'display', _this._defaultDisplay);
            _this.fadeIn.emit(undefined);
            animation.destroy();
        }, this.duration);
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
__decorate([
    HostBinding('hidden'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdFadeDirective.prototype, "hiddenBinding", null);
TdFadeDirective = __decorate([
    Directive({
        selector: '[tdFade]',
    }),
    __metadata("design:paramtypes", [Renderer, ElementRef])
], TdFadeDirective);
export { TdFadeDirective };
//# sourceMappingURL=fade.directive.js.map