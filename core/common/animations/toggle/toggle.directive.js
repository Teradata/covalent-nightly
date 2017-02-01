var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, HostBinding, Renderer } from '@angular/core';
var TdToggleDirective = (function () {
    function TdToggleDirective(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        /**
         * duration?: number
         * Sets duration of toggle animation in miliseconds.
         * Defaults to 150 ms.
         */
        this.duration = 150;
        this._defaultDisplay = this._element.nativeElement.style.display;
    }
    Object.defineProperty(TdToggleDirective.prototype, "state", {
        /**
         * tdToggle: boolean
         * Toggles element, hides if its 'true', shows if its 'false'.
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
    Object.defineProperty(TdToggleDirective.prototype, "hiddenBinding", {
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
    TdToggleDirective.prototype.hide = function () {
        var _this = this;
        this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        var animation = this._renderer
            .animate(this._element.nativeElement, undefined, [{
                styles: {
                    styles: [
                        { 'height': this._element.nativeElement.scrollHeight + 'px' },
                        { 'overflow': 'hidden' },
                    ],
                },
                offset: 0,
            }, {
                styles: {
                    styles: [
                        { 'height': 0 },
                        { 'overflow': 'hidden' },
                    ],
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
            _this._renderer.setElementStyle(_this._element.nativeElement, 'display', 'none');
            _this._hiddenState = _this._state;
            animation.destroy();
        }, this.duration);
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:[default]" style again at the end.
     */
    TdToggleDirective.prototype.show = function () {
        var _this = this;
        this._hiddenState = this._state;
        this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        var startingAnimation = this._renderer
            .animate(this._element.nativeElement, undefined, [{
                styles: {
                    styles: [
                        { 'overflow': 'hidden' },
                    ],
                },
                offset: 0,
            }, {
                styles: {
                    styles: [
                        { 'overflow': 'hidden' },
                    ],
                },
                offset: 1,
            },
        ], 0, 0, 'ease-in');
        startingAnimation.play();
        startingAnimation.onDone(function () {
            startingAnimation.destroy();
            var animation = _this._renderer
                .animate(_this._element.nativeElement, undefined, [{
                    styles: {
                        styles: [
                            { 'height': 0 },
                            { 'overflow': 'hidden' },
                        ],
                    },
                    offset: 0,
                }, {
                    styles: {
                        styles: [
                            { 'height': _this._element.nativeElement.scrollHeight + 'px' },
                            { 'overflow': 'hidden' },
                        ],
                    },
                    offset: 1,
                },
            ], _this.duration, 0, 'ease-in');
            animation.play();
            /**
             * Using timeout instead of onComplete since there is a bug if you start another animation
             * before the previous one ends. The onComplete event is not executed.
             * e.g. hide event started before show event is completed.
             */
            _this._timeoutNumber = window.setTimeout(function () {
                _this._renderer.setElementStyle(_this._element.nativeElement, 'display', _this._defaultDisplay);
                animation.destroy();
            }, _this.duration);
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
__decorate([
    HostBinding('hidden'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdToggleDirective.prototype, "hiddenBinding", null);
TdToggleDirective = __decorate([
    Directive({
        selector: '[tdToggle]',
    }),
    __metadata("design:paramtypes", [Renderer, ElementRef])
], TdToggleDirective);
export { TdToggleDirective };
//# sourceMappingURL=toggle.directive.js.map