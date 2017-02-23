(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/http'), require('@angular/forms'), require('@angular/material'), require('@angular/flex-layout'), require('@angular/router'), require('rxjs/Observable'), require('rxjs/Subject'), require('@angular/platform-browser'), require('rxjs/add/operator/debounceTime')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/http', '@angular/forms', '@angular/material', '@angular/flex-layout', '@angular/router', 'rxjs/Observable', 'rxjs/Subject', '@angular/platform-browser', 'rxjs/add/operator/debounceTime'], factory) :
    (factory((global.td = global.td || {}, global.td.core = global.td.core || {}),global.ng.core,global.ng.common,global.ng.http,global.ng.forms,global.ng.material,global.ng.flexLayout,global.ng.router,global.Rx,global.Rx,global.ng.platformBrowser,global.Rx.Observable.prototype));
}(this, (function (exports,_angular_core,_angular_common,_angular_http,_angular_forms,_angular_material,_angular_flexLayout,_angular_router,rxjs_Observable,rxjs_Subject,_angular_platformBrowser,rxjs_add_operator_debounceTime) { 'use strict';

var __decorate$2 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdToggleDirective = (function () {
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
        set: function (state$$1) {
            this._state = state$$1;
            clearTimeout(this._timeoutNumber);
            if (state$$1) {
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
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Number)
], exports.TdToggleDirective.prototype, "duration", void 0);
__decorate$2([
    _angular_core.Input('tdToggle'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], exports.TdToggleDirective.prototype, "state", null);
__decorate$2([
    _angular_core.HostBinding('attr.aria-expanded'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], exports.TdToggleDirective.prototype, "ariaExpandedBinding", null);
__decorate$2([
    _angular_core.HostBinding('attr.aria-hidden'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], exports.TdToggleDirective.prototype, "ariaHiddenBinding", null);
__decorate$2([
    _angular_core.HostBinding('hidden'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], exports.TdToggleDirective.prototype, "hiddenBinding", null);
exports.TdToggleDirective = __decorate$2([
    _angular_core.Directive({
        selector: '[tdToggle]',
    }),
    __metadata("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], exports.TdToggleDirective);

var __decorate$3 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdFadeDirective = (function () {
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
        this.fadeIn = new _angular_core.EventEmitter();
        /**
         * fadeOut?: function
         * Method to be executed when fadeOut animation ends.
         */
        this.fadeOut = new _angular_core.EventEmitter();
        this._defaultDisplay = this._element.nativeElement.style.display;
        this._defaultOpacity = !this._element.nativeElement.style.opacity ? 1 : this._element.nativeElement.style.opacity;
    }
    Object.defineProperty(TdFadeDirective.prototype, "state", {
        /**
         * tdFade: boolean
         * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
         */
        set: function (state$$1) {
            this._state = state$$1;
            clearTimeout(this._timeoutNumber);
            if (state$$1) {
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
__decorate$3([
    _angular_core.Input(),
    __metadata$1("design:type", Number)
], exports.TdFadeDirective.prototype, "duration", void 0);
__decorate$3([
    _angular_core.Input('tdFade'),
    __metadata$1("design:type", Boolean),
    __metadata$1("design:paramtypes", [Boolean])
], exports.TdFadeDirective.prototype, "state", null);
__decorate$3([
    _angular_core.Output('fadeIn'),
    __metadata$1("design:type", _angular_core.EventEmitter)
], exports.TdFadeDirective.prototype, "fadeIn", void 0);
__decorate$3([
    _angular_core.Output('fadeOut'),
    __metadata$1("design:type", _angular_core.EventEmitter)
], exports.TdFadeDirective.prototype, "fadeOut", void 0);
__decorate$3([
    _angular_core.HostBinding('attr.aria-expanded'),
    __metadata$1("design:type", Boolean),
    __metadata$1("design:paramtypes", [])
], exports.TdFadeDirective.prototype, "ariaExpandedBinding", null);
__decorate$3([
    _angular_core.HostBinding('attr.aria-hidden'),
    __metadata$1("design:type", Boolean),
    __metadata$1("design:paramtypes", [])
], exports.TdFadeDirective.prototype, "ariaHiddenBinding", null);
__decorate$3([
    _angular_core.HostBinding('hidden'),
    __metadata$1("design:type", Boolean),
    __metadata$1("design:paramtypes", [])
], exports.TdFadeDirective.prototype, "hiddenBinding", null);
exports.TdFadeDirective = __decorate$3([
    _angular_core.Directive({
        selector: '[tdFade]',
    }),
    __metadata$1("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], exports.TdFadeDirective);

/**
 * Function TdCollapseAnimation
 *
 * params:
 * * duration: Duration of animation in miliseconds. Defaults to 150 ms.
 *
 * Returns an [AnimationEntryMetadata] object with states for a collapse/expand animation.
 *
 * usage: [@tdCollapse]="true|false"
 */
function TdCollapseAnimation(duration) {
    if (duration === void 0) { duration = 150; }
    return _angular_core.trigger('tdCollapse', [
        _angular_core.state('true', _angular_core.style({
            height: '0',
            overflow: 'hidden',
            display: 'none',
        })),
        _angular_core.state('false', _angular_core.style({
            height: '*',
            overflow: 'hidden',
            display: '*',
        })),
        _angular_core.transition('0 => 1', _angular_core.animate(duration + 'ms ease-in')),
        _angular_core.transition('1 => 0', _angular_core.animate(duration + 'ms ease-out')),
    ]);
}

/**
 * Function TdFadeInOutAnimation
 *
 * params:
 * * duration: Duration of animation in miliseconds. Defaults to 150 ms.
 *
 * Returns an [AnimationEntryMetadata] object with states for a fading animation.
 *
 * usage: [@tdFadeInOut]="true|false"
 */
function TdFadeInOutAnimation(duration) {
    if (duration === void 0) { duration = 150; }
    return _angular_core.trigger('tdFadeInOut', [
        _angular_core.state('false', _angular_core.style({
            opacity: '0',
            display: 'none',
        })),
        _angular_core.state('true', _angular_core.style({
            opacity: '*',
            display: '*',
        })),
        _angular_core.transition('0 => 1', _angular_core.animate(duration + 'ms ease-in')),
        _angular_core.transition('1 => 0', _angular_core.animate(duration + 'ms ease-out')),
    ]);
}

var __decorate$4 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.TdAutoTrimDirective = (function () {
    function TdAutoTrimDirective(_model) {
        this._model = _model;
    }
    /**
     * Listens to host's (blur) event and trims value.
     */
    TdAutoTrimDirective.prototype.onBlur = function (event) {
        if (this._model && this._model.value && typeof (this._model.value) === 'string') {
            this._model.update.emit(this._model.value.trim());
        }
    };
    return TdAutoTrimDirective;
}());
__decorate$4([
    _angular_core.HostListener('blur', ['$event']),
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Event]),
    __metadata$2("design:returntype", void 0)
], exports.TdAutoTrimDirective.prototype, "onBlur", null);
exports.TdAutoTrimDirective = __decorate$4([
    _angular_core.Directive({
        selector: '[tdAutoTrim]',
    }),
    __param(0, _angular_core.Optional()), __param(0, _angular_core.Host()),
    __metadata$2("design:paramtypes", [_angular_forms.NgModel])
], exports.TdAutoTrimDirective);

var __decorate$6 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NUMBER_INPUT_REQUIRED_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return exports.TdNumberRequiredValidator; }),
    multi: true,
};
exports.TdNumberRequiredValidator = TdNumberRequiredValidator_1 = (function () {
    function TdNumberRequiredValidator() {
    }
    TdNumberRequiredValidator.validate = function (c) {
        return (Number.isNaN(c.value)) ?
            { required: true } :
            undefined;
    };
    TdNumberRequiredValidator.prototype.validate = function (c) {
        return TdNumberRequiredValidator_1.validate(c);
    };
    return TdNumberRequiredValidator;
}());
exports.TdNumberRequiredValidator = TdNumberRequiredValidator_1 = __decorate$6([
    _angular_core.Directive({
        selector: "[type=number][required][formControlName],\n             [type=number][required][formControl],\n             [type=number][required][ngModel]",
        providers: [NUMBER_INPUT_REQUIRED_VALIDATOR],
    })
], exports.TdNumberRequiredValidator);
var TdNumberRequiredValidator_1;

var __decorate$5 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MIN_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return exports.TdMinValidator; }),
    multi: true,
};
exports.TdMinValidator = TdMinValidator_1 = (function () {
    function TdMinValidator() {
    }
    Object.defineProperty(TdMinValidator.prototype, "min", {
        set: function (min) {
            this._validator = TdMinValidator_1.validate(min);
        },
        enumerable: true,
        configurable: true
    });
    TdMinValidator.validate = function (minValue) {
        return function (c) {
            if (!!_angular_forms.Validators.required(c) || !!exports.TdNumberRequiredValidator.validate(c) || (!minValue && minValue !== 0)) {
                return undefined;
            }
            var v = c.value;
            return v < minValue ?
                { min: { minValue: minValue, actualValue: v } } :
                undefined;
        };
    };
    
    TdMinValidator.prototype.validate = function (c) {
        return this._validator(c);
    };
    
    return TdMinValidator;
}());
__decorate$5([
    _angular_core.Input('min'),
    __metadata$3("design:type", Number),
    __metadata$3("design:paramtypes", [Number])
], exports.TdMinValidator.prototype, "min", null);
exports.TdMinValidator = TdMinValidator_1 = __decorate$5([
    _angular_core.Directive({
        selector: '[min][formControlName],[min][formControl],[min][ngModel]',
        providers: [MIN_VALIDATOR],
    })
], exports.TdMinValidator);
var TdMinValidator_1;

var __decorate$7 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MAX_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return exports.TdMaxValidator; }),
    multi: true,
};
exports.TdMaxValidator = TdMaxValidator_1 = (function () {
    function TdMaxValidator() {
    }
    Object.defineProperty(TdMaxValidator.prototype, "max", {
        set: function (max) {
            this._validator = TdMaxValidator_1.validate(max);
        },
        enumerable: true,
        configurable: true
    });
    TdMaxValidator.validate = function (maxValue) {
        return function (c) {
            if (!!_angular_forms.Validators.required(c) || !!exports.TdNumberRequiredValidator.validate(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            var v = c.value;
            return v > maxValue ?
                { max: { maxValue: maxValue, actualValue: v } } :
                undefined;
        };
    };
    
    TdMaxValidator.prototype.validate = function (c) {
        return this._validator(c);
    };
    
    return TdMaxValidator;
}());
__decorate$7([
    _angular_core.Input('max'),
    __metadata$4("design:type", Number),
    __metadata$4("design:paramtypes", [Number])
], exports.TdMaxValidator.prototype, "max", null);
exports.TdMaxValidator = TdMaxValidator_1 = __decorate$7([
    _angular_core.Directive({
        selector: '[max][formControlName],[max][formControl],[max][ngModel]',
        providers: [MAX_VALIDATOR],
    })
], exports.TdMaxValidator);
var TdMaxValidator_1;

var __decorate$8 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.TdTimeAgoPipe = (function () {
    function TdTimeAgoPipe() {
    }
    TdTimeAgoPipe.prototype.transform = function (time, reference) {
        // Convert time to date object if not already
        time = new Date(time);
        var ref = new Date(reference);
        // If not a valid timestamp, return 'Invalid Date'
        if (!time.getTime()) {
            return 'Invalid Date';
        }
        // For unit testing, we need to be able to declare a static start time
        // for calculations, or else speed of tests can bork.
        var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
        var diff = Math.floor((startTime - time.getTime()) / 1000);
        if (diff < 2) {
            return '1 second ago';
        }
        if (diff < 60) {
            return Math.floor(diff) + ' seconds ago';
        }
        // Minutes
        diff = diff / 60;
        if (diff < 2) {
            return '1 minute ago';
        }
        if (diff < 60) {
            return Math.floor(diff) + ' minutes ago';
        }
        // Hours
        diff = diff / 60;
        if (diff < 2) {
            return '1 hour ago';
        }
        if (diff < 24) {
            return Math.floor(diff) + ' hours ago';
        }
        // Days
        diff = diff / 24;
        if (diff < 2) {
            return '1 day ago';
        }
        if (diff < 30) {
            return Math.floor(diff) + ' days ago';
        }
        // Months
        diff = diff / 30;
        if (diff < 2) {
            return '1 month ago';
        }
        if (diff < 12) {
            return Math.floor(diff) + ' months ago';
        }
        // Years
        diff = diff / 12;
        if (diff < 2) {
            return '1 year ago';
        }
        else {
            return Math.floor(diff) + ' years ago';
        }
    };
    return TdTimeAgoPipe;
}());
exports.TdTimeAgoPipe = __decorate$8([
    _angular_core.Pipe({
        name: 'timeAgo',
    })
], exports.TdTimeAgoPipe);

var __decorate$9 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.TdTimeDifferencePipe = (function () {
    function TdTimeDifferencePipe() {
    }
    TdTimeDifferencePipe.prototype.transform = function (start, end) {
        var startTime = new Date(start);
        var endTime;
        if (end !== undefined) {
            endTime = new Date(end);
        }
        else {
            endTime = new Date();
        }
        if (!startTime.getTime() || !endTime.getTime()) {
            return 'Invalid Date';
        }
        var diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        var days = Math.floor(diff / (60 * 60 * 24));
        diff = diff - (days * (60 * 60 * 24));
        var hours = Math.floor(diff / (60 * 60));
        diff = diff - (hours * (60 * 60));
        var minutes = Math.floor(diff / (60));
        diff -= minutes * (60);
        var seconds = diff;
        var pad = '00';
        var daysFormatted = '';
        if (days > 0 && days < 2) {
            daysFormatted = ' day - ';
        }
        else if (days > 1) {
            daysFormatted = ' days - ';
        }
        return (days > 0 ? days + daysFormatted : daysFormatted) +
            pad.substring(0, pad.length - (hours + '').length) + hours + ':' +
            pad.substring(0, pad.length - (minutes + '').length) + minutes + ':' +
            pad.substring(0, pad.length - (seconds + '').length) + seconds;
    };
    return TdTimeDifferencePipe;
}());
exports.TdTimeDifferencePipe = __decorate$9([
    _angular_core.Pipe({
        name: 'timeDifference',
    })
], exports.TdTimeDifferencePipe);

var __decorate$10 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.TdBytesPipe = (function () {
    function TdBytesPipe() {
    }
    /* `bytes` needs to be `any` or TypeScript complains
    Tried both `number` and `number | string` */
    TdBytesPipe.prototype.transform = function (bytes, precision) {
        if (precision === void 0) { precision = 2; }
        if (bytes === 0) {
            return '0 B';
        }
        else if (isNaN(parseInt(bytes, 10))) {
            /* If not a valid number, return 'Invalid Number' */
            return 'Invalid Number';
        }
        var k = 1000;
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        // if less than 1
        if (i < 0) {
            return 'Invalid Number';
        }
        return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
    };
    return TdBytesPipe;
}());
exports.TdBytesPipe = __decorate$10([
    _angular_core.Pipe({
        name: 'bytes',
    })
], exports.TdBytesPipe);

var __decorate$11 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.TdDigitsPipe = (function () {
    function TdDigitsPipe() {
    }
    /* `digits` needs to be type `digits: any` or TypeScript complains */
    TdDigitsPipe.prototype.transform = function (digits, precision) {
        if (precision === void 0) { precision = 1; }
        if (digits === 0) {
            return '0';
        }
        else if (isNaN(parseInt(digits, 10))) {
            /* If not a valid number, return 'Invalid Number' */
            return 'Invalid Number';
        }
        else if (digits < 1) {
            return digits;
        }
        var k = 1000;
        var sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
        var i = Math.floor(Math.log(digits) / Math.log(k));
        var size = sizes[i];
        return parseFloat((digits / Math.pow(k, i)).toFixed(precision)) + (size ? ' ' + size : '');
    };
    return TdDigitsPipe;
}());
exports.TdDigitsPipe = __decorate$11([
    _angular_core.Pipe({
        name: 'digits',
    })
], exports.TdDigitsPipe);

var __decorate$12 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.TdTruncatePipe = (function () {
    function TdTruncatePipe() {
    }
    TdTruncatePipe.prototype.transform = function (text, length) {
        if (typeof text !== 'string') {
            return '';
        }
        // Truncate
        var truncated = text.substr(0, length);
        if (text.length > length) {
            if (truncated.lastIndexOf(' ') > 0) {
                truncated = truncated.trim();
            }
            truncated += '…';
        }
        return truncated;
    };
    return TdTruncatePipe;
}());
exports.TdTruncatePipe = __decorate$12([
    _angular_core.Pipe({
        name: 'truncate',
    })
], exports.TdTruncatePipe);

var __decorate$13 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RouterPathService = RouterPathService_1 = (function () {
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events
            .filter(function (e) { return e instanceof _angular_router.RoutesRecognized; })
            .pairwise()
            .subscribe(function (e) {
            RouterPathService_1._previousRoute = e[0].urlAfterRedirects;
        });
    }
    /*
    * Utility function to get the route the user previously went to
    * good for use in a "back button"
    */
    RouterPathService.prototype.getPreviousRoute = function () {
        return RouterPathService_1._previousRoute;
    };
    return RouterPathService;
}());
RouterPathService._previousRoute = '/';
RouterPathService = RouterPathService_1 = __decorate$13([
    _angular_core.Injectable(),
    __metadata$5("design:paramtypes", [_angular_router.Router])
], RouterPathService);
var RouterPathService_1;

var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * ANIMATIONS
 */
var TD_ANIMATIONS = [
    exports.TdToggleDirective,
    exports.TdFadeDirective,
];
/**
 * FORMS
 */
// Form Directives
var TD_FORMS = [
    exports.TdAutoTrimDirective,
];
// Validators
var TD_VALIDATORS = [
    exports.TdMinValidator,
    exports.TdMaxValidator,
    exports.TdNumberRequiredValidator,
];
/**
 * PIPES
 */
var TD_PIPES = [
    exports.TdTimeAgoPipe,
    exports.TdTimeDifferencePipe,
    exports.TdBytesPipe,
    exports.TdDigitsPipe,
    exports.TdTruncatePipe,
];
exports.CovalentCommonModule = CovalentCommonModule_1 = (function () {
    function CovalentCommonModule() {
    }
    CovalentCommonModule.forRoot = function () {
        return {
            ngModule: CovalentCommonModule_1,
            providers: [RouterPathService],
        };
    };
    return CovalentCommonModule;
}());
exports.CovalentCommonModule = CovalentCommonModule_1 = __decorate$1([
    _angular_core.NgModule({
        imports: [
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
        ],
        declarations: [
            TD_FORMS,
            TD_PIPES,
            TD_ANIMATIONS,
            TD_VALIDATORS,
        ],
        exports: [
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            TD_FORMS,
            TD_PIPES,
            TD_ANIMATIONS,
            TD_VALIDATORS,
        ],
    })
], exports.CovalentCommonModule);
var CovalentCommonModule_1;

var __decorate$15 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var noop = function () {
    // empty method
};
var TD_CHIPS_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdChipsComponent; }),
    multi: true,
};
exports.TdChipsComponent = (function () {
    function TdChipsComponent() {
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = [];
        this._length = 0;
        this._requireMatch = false;
        /**
         * Boolean value that specifies if the input is valid against the provieded list.
         */
        this.matches = true;
        /**
         * Flag that is true when autocomplete is focused.
         */
        this.focused = false;
        /**
         * items?: string[]
         * Enables Autocompletion with the provided list of strings.
         */
        this.items = [];
        /**
         * readOnly?: boolean
         * Disables the chip input and removal.
         */
        this.readOnly = false;
        /**
         * add?: function
         * Method to be executed when string is added as chip through the autocomplete.
         * Sends chip value as event.
         */
        this.add = new _angular_core.EventEmitter();
        /**
         * remove?: function
         * Method to be executed when string is removed as chip with the "remove" button.
         * Sends chip value as event.
         */
        this.remove = new _angular_core.EventEmitter();
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
    }
    Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
        get: function () {
            return this._requireMatch;
        },
        /**
         * requireMatch?: boolean
         * Validates input against the provided list before adding it to the model.
         * If it doesnt exist, it cancels the event.
         */
        set: function (requireMatch) {
            this._requireMatch = requireMatch !== '' ? (requireMatch === 'true' || requireMatch === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "value", {
        get: function () { return this._value; },
        /**
         * Implemented as part of ControlValueAccessor.
         */
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._length = this._value ? this._value.length : 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    
    TdChipsComponent.prototype.ngDoCheck = function () {
        // Throw onChange event only if array changes size.
        if (this._value && this._value.length !== this._length) {
            this._length = this._value.length;
            this.onChange(this._value);
        }
    };
    Object.defineProperty(TdChipsComponent.prototype, "filteredItems", {
        /**
         * Returns a list of filtered items.
         * Removes the ones that have been added as value.
         */
        get: function () {
            var _this = this;
            if (!this._value) {
                return [];
            }
            return this.items.filter(function (item) {
                return _this._value.indexOf(item) < 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.addItem = function (value) {
        if (value.trim() === '' || this._value.indexOf(value) > -1) {
            return false;
        }
        if (this.items && this.requireMatch) {
            if (this.items.indexOf(value) < 0) {
                return false;
            }
        }
        this._value.push(value);
        this.add.emit(value);
        this.onChange(this._value);
        return true;
    };
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.removeItem = function (value) {
        var index = this._value.indexOf(value);
        if (index < 0) {
            return false;
        }
        this._value.splice(index, 1);
        this.remove.emit(value);
        this.onChange(this._value);
        return true;
    };
    TdChipsComponent.prototype.handleFocus = function () {
        this.focused = true;
        return true;
    };
    TdChipsComponent.prototype.handleBlur = function () {
        this.focused = false;
        this.onTouched();
        return true;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdChipsComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TdChipsComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TdChipsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TdChipsComponent;
}());
__decorate$15([
    _angular_core.Input('items'),
    __metadata$6("design:type", Array)
], exports.TdChipsComponent.prototype, "items", void 0);
__decorate$15([
    _angular_core.Input('requireMatch'),
    __metadata$6("design:type", Object),
    __metadata$6("design:paramtypes", [Object])
], exports.TdChipsComponent.prototype, "requireMatch", null);
__decorate$15([
    _angular_core.Input('readOnly'),
    __metadata$6("design:type", Boolean)
], exports.TdChipsComponent.prototype, "readOnly", void 0);
__decorate$15([
    _angular_core.Input('placeholder'),
    __metadata$6("design:type", String)
], exports.TdChipsComponent.prototype, "placeholder", void 0);
__decorate$15([
    _angular_core.Output('add'),
    __metadata$6("design:type", _angular_core.EventEmitter)
], exports.TdChipsComponent.prototype, "add", void 0);
__decorate$15([
    _angular_core.Output('remove'),
    __metadata$6("design:type", _angular_core.EventEmitter)
], exports.TdChipsComponent.prototype, "remove", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$6("design:type", Object),
    __metadata$6("design:paramtypes", [Object])
], exports.TdChipsComponent.prototype, "value", null);
exports.TdChipsComponent = __decorate$15([
    _angular_core.Component({
        providers: [TD_CHIPS_CONTROL_VALUE_ACCESSOR],
        selector: 'td-chips',
        styles: [":host { display: block; padding: 0px 5px 0px 5px; } :host /deep/ .td-chip { display: inline-block; cursor: default; border-radius: 16px; line-height: 32px; margin: 8px 8px 0 0; padding: 0 12px; box-sizing: border-box; max-width: 100%; position: relative; } :host /deep/ .td-chip md-icon { position: relative; top: 5px; left: 5px; height: 18px; width: 18px; font-size: 19px; } :host /deep/ .td-chip md-icon:hover { cursor: pointer; } .mat-input-underline { position: relative; height: 1px; width: 100%; margin-top: 4px; } .mat-input-underline.mat-disabled { border-top: 0; background-position: 0; background-size: 4px 1px; background-repeat: repeat-x; } .mat-input-underline .mat-input-ripple { position: absolute; height: 2px; z-index: 1; top: -1px; width: 100%; transform-origin: top; opacity: 0; transform: scaleY(0); } .mat-input-underline .mat-input-ripple.mat-warn { opacity: 1; transform: scaleY(1); } .mat-input-underline .mat-input-ripple.mat-focused { opacity: 1; transform: scaleY(1); } :host /deep/ md-input-container input::-webkit-calendar-picker-indicator { display: none; } :host /deep/ md-input-container .mat-input-underline { display: none; } "],
        template: "<div flex> <template let-chip ngFor [ngForOf]=\"value\"> <td-chip> <span>{{chip}}</span> <md-icon *ngIf=\"!readOnly\" [tabIndex]=\"0\"  (keydown.enter)=\"removeItem(chip)\"  (click)=\"removeItem(chip)\" title=\"Delete\">cancel</md-icon> </td-chip> </template> <td-autocomplete #autocomplete  [disabled]=\"readOnly\"  [searchItems]=\"filteredItems\" [placeholder]=\"readOnly? '' : placeholder\" (focus)=\"handleFocus()\" (blur)=\"handleBlur() && (matches = autocomplete.clear())\" (itemSelect)=\"(matches = addItem($event)) && autocomplete.clear()\"></td-autocomplete> <div class=\"mat-input-underline\" [class.mat-disabled]=\"readOnly\"> <span class=\"mat-input-ripple\" [class.mat-focused]=\"focused\" [class.mat-warn]=\"!matches\"></span> </div> </div> ",
    })
], exports.TdChipsComponent);

var __decorate$16 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TdChipComponent = (function () {
    function TdChipComponent() {
    }
    return TdChipComponent;
}());
TdChipComponent = __decorate$16([
    _angular_core.Component({
        selector: 'td-chip',
        styles: [":host { display: block; float: left; } "],
        template: "<span class=\"td-chip\"> <ng-content></ng-content> </span>",
    })
], TdChipComponent);

var __decorate$17 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var noop$1 = function () {
    // empty method
};
var TD_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TdAutoCompleteComponent; }),
    multi: true,
};
var TdAutoCompleteComponent = (function () {
    function TdAutoCompleteComponent() {
        this._value = '';
        /** Callback registered via registerOnTouched (ControlValueAccessor) */
        this._onTouchedCallback = noop$1;
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop$1;
        this.listName = this.randomName();
        this.dividerColor = 'primary';
        this.searchItems = [];
        this.readOnly = false;
        this.required = false;
        this.disabled = false;
        this.autoFocus = false;
        this.itemSelect = new _angular_core.EventEmitter();
        this.focus = new _angular_core.EventEmitter();
        this.blur = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdAutoCompleteComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    TdAutoCompleteComponent.prototype.clear = function () {
        this.writeValue('');
        return true;
    };
    TdAutoCompleteComponent.prototype.randomName = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 7; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    TdAutoCompleteComponent.prototype.handleItemSelect = function () {
        this.itemSelect.emit(this._value);
    };
    TdAutoCompleteComponent.prototype.handleFocus = function () {
        this.focus.emit(true);
    };
    TdAutoCompleteComponent.prototype.handleBlur = function () {
        this.blur.emit(false);
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    TdAutoCompleteComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    TdAutoCompleteComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    TdAutoCompleteComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    return TdAutoCompleteComponent;
}());
__decorate$17([
    _angular_core.Input('name'),
    __metadata$7("design:type", String)
], TdAutoCompleteComponent.prototype, "name", void 0);
__decorate$17([
    _angular_core.Input('dividerColor'),
    __metadata$7("design:type", String)
], TdAutoCompleteComponent.prototype, "dividerColor", void 0);
__decorate$17([
    _angular_core.Input('placeholder'),
    __metadata$7("design:type", String)
], TdAutoCompleteComponent.prototype, "placeholder", void 0);
__decorate$17([
    _angular_core.Input('searchItems'),
    __metadata$7("design:type", Array)
], TdAutoCompleteComponent.prototype, "searchItems", void 0);
__decorate$17([
    _angular_core.Input('readOnly'),
    __metadata$7("design:type", Boolean)
], TdAutoCompleteComponent.prototype, "readOnly", void 0);
__decorate$17([
    _angular_core.Input('required'),
    __metadata$7("design:type", Boolean)
], TdAutoCompleteComponent.prototype, "required", void 0);
__decorate$17([
    _angular_core.Input('disabled'),
    __metadata$7("design:type", Boolean)
], TdAutoCompleteComponent.prototype, "disabled", void 0);
__decorate$17([
    _angular_core.Input('autoFocus'),
    __metadata$7("design:type", Boolean)
], TdAutoCompleteComponent.prototype, "autoFocus", void 0);
__decorate$17([
    _angular_core.Input('max'),
    __metadata$7("design:type", Object)
], TdAutoCompleteComponent.prototype, "max", void 0);
__decorate$17([
    _angular_core.Input('maxLength'),
    __metadata$7("design:type", Number)
], TdAutoCompleteComponent.prototype, "maxLength", void 0);
__decorate$17([
    _angular_core.Input('min'),
    __metadata$7("design:type", Object)
], TdAutoCompleteComponent.prototype, "min", void 0);
__decorate$17([
    _angular_core.Input('minLength'),
    __metadata$7("design:type", Number)
], TdAutoCompleteComponent.prototype, "minLength", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$7("design:type", Object),
    __metadata$7("design:paramtypes", [Object])
], TdAutoCompleteComponent.prototype, "value", null);
__decorate$17([
    _angular_core.Output('itemSelect'),
    __metadata$7("design:type", _angular_core.EventEmitter)
], TdAutoCompleteComponent.prototype, "itemSelect", void 0);
__decorate$17([
    _angular_core.Output('focus'),
    __metadata$7("design:type", _angular_core.EventEmitter)
], TdAutoCompleteComponent.prototype, "focus", void 0);
__decorate$17([
    _angular_core.Output('blur'),
    __metadata$7("design:type", _angular_core.EventEmitter)
], TdAutoCompleteComponent.prototype, "blur", void 0);
TdAutoCompleteComponent = __decorate$17([
    _angular_core.Component({
        providers: [TD_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR],
        selector: 'td-autocomplete',
        styles: [":host { display: block; } "],
        template: "<div flex> <md-input-container> <input mdInput flex=\"100\"  [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [autofocus]=\"autoFocus\" [attr.list]=\"listName\" [max]=\"max\" [maxlength]=\"maxLength\" [min]=\"min\" [minlength]=\"minLength\" [readonly]=\"readOnly\" [disabled]=\"disabled\" [required]=\"required\" [name]=\"name\" (keyup.enter)=\"handleItemSelect()\" (focus)=\"handleFocus()\" (blur)=\"handleBlur()\"> </md-input-container> <datalist [id]=\"listName\"> <template let-item ngFor [ngForOf]=\"searchItems\"> <option [value]=\"item\"></option> </template> </datalist> </div> ",
    })
], TdAutoCompleteComponent);

var __decorate$14 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.CovalentChipsModule = CovalentChipsModule_1 = (function () {
    function CovalentChipsModule() {
    }
    CovalentChipsModule.forRoot = function () {
        return {
            ngModule: CovalentChipsModule_1,
            providers: [],
        };
    };
    return CovalentChipsModule;
}());
exports.CovalentChipsModule = CovalentChipsModule_1 = __decorate$14([
    _angular_core.NgModule({
        imports: [
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            _angular_material.MdInputModule.forRoot(),
            _angular_material.MdIconModule.forRoot(),
        ],
        declarations: [
            exports.TdChipsComponent,
            TdChipComponent,
            TdAutoCompleteComponent,
        ],
        exports: [
            exports.TdChipsComponent,
            TdChipComponent,
            TdAutoCompleteComponent,
        ],
    })
], exports.CovalentChipsModule);
var CovalentChipsModule_1;

var __extends = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$20 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TdDataTableTemplateDirective = (function (_super) {
    __extends(TdDataTableTemplateDirective, _super);
    function TdDataTableTemplateDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdDataTableTemplateDirective;
}(_angular_material.TemplatePortalDirective));
__decorate$20([
    _angular_core.Input(),
    __metadata$9("design:type", String)
], TdDataTableTemplateDirective.prototype, "tdDataTableTemplate", void 0);
TdDataTableTemplateDirective = __decorate$20([
    _angular_core.Directive({ selector: '[tdDataTableTemplate]template' }),
    __metadata$9("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], TdDataTableTemplateDirective);

var __decorate$19 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var noop$2 = function () {
    // empty method
};
var TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdDataTableComponent; }),
    multi: true,
};

(function (TdDataTableSortingOrder) {
    TdDataTableSortingOrder[TdDataTableSortingOrder["Ascending"] = 'ASC'] = "Ascending";
    TdDataTableSortingOrder[TdDataTableSortingOrder["Descending"] = 'DESC'] = "Descending";
})(exports.TdDataTableSortingOrder || (exports.TdDataTableSortingOrder = {}));



exports.TdDataTableComponent = (function () {
    function TdDataTableComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = [];
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop$2;
        this._selectable = false;
        this._multiple = true;
        /** sorting */
        this._sortable = false;
        this._sortOrder = exports.TdDataTableSortingOrder.Ascending;
        /** template fetching support */
        this._templateMap = new Map();
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        this.onSortChange = new _angular_core.EventEmitter();
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         */
        this.onRowSelect = new _angular_core.EventEmitter();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        this.onSelectAll = new _angular_core.EventEmitter();
        this.onChange = function (_) { return noop$2; };
        this.onTouched = function () { return noop$2; };
    }
    Object.defineProperty(TdDataTableComponent.prototype, "value", {
        get: function () { return this._value; },
        /**
         * Implemented as part of ControlValueAccessor.
         */
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
                this.refresh();
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TdDataTableComponent.prototype, "data", {
        /**
         * data?: {[key: string]: any}[]
         * Sets the data to be rendered as rows.
         */
        set: function (data) {
            this._data = data;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columns", {
        get: function () {
            var _this = this;
            if (this._columns) {
                return this._columns;
            }
            if (this.hasData) {
                this._columns = [];
                // if columns is undefined, use key in [data] rows as name and label for column headers.
                var row = this._data[0];
                Object.keys(row).forEach(function (k) {
                    if (!_this._columns.find(function (c) { return c.name === k; })) {
                        _this._columns.push({ name: k, label: k });
                    }
                });
                return this._columns;
            }
            else {
                return [];
            }
        },
        /**
         * columns?: ITdDataTableColumn[]
         * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
         * Defaults to [data] keys.
         */
        set: function (cols) {
            this._columns = cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "selectable", {
        /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         */
        set: function (_selectable) {
            this._selectable = _selectable !== '' ? (_selectable === 'true' || _selectable === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        set: function (sortable) {
            this._sortable = sortable !== '' ? (sortable === 'true' || sortable === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortBy", {
        /**
         * sortBy?: string
         * Sets the active sort column. [sortable] needs to be enabled.
         */
        set: function (columnName) {
            if (!columnName) {
                return;
            }
            var column = this.columns.find(function (c) { return c.name === columnName; });
            if (!column) {
                throw new Error('[sortBy] must be a valid column name');
            }
            this._sortBy = column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortOrder", {
        /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
         * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
         */
        set: function (order) {
            var sortOrder = order ? order.toUpperCase() : 'ASC';
            if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                throw new Error('[sortOrder] must be empty, ASC or DESC');
            }
            this._sortOrder = sortOrder === 'ASC' ?
                exports.TdDataTableSortingOrder.Ascending : exports.TdDataTableSortingOrder.Descending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "hasData", {
        get: function () {
            return this._data && this._data.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Loads templates and sets them in a map for faster access.
     */
    TdDataTableComponent.prototype.ngAfterContentInit = function () {
        for (var i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    };
    TdDataTableComponent.prototype.getCellValue = function (column, value) {
        if (column.nested === undefined || column.nested) {
            return this._getNestedValue(column.name, value);
        }
        return value[column.name];
    };
    /**
     * Getter method for template references
     */
    TdDataTableComponent.prototype.getTemplateRef = function (name) {
        return this._templateMap.get(name);
    };
    /**
     * Clears model (ngModel) of component by removing all values in array.
     */
    TdDataTableComponent.prototype.clearModel = function () {
        this._value.splice(0, this._value.length);
    };
    /**
     * Refreshes data table and rerenders [data] and [columns]
     */
    TdDataTableComponent.prototype.refresh = function () {
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Checks if all visible rows are selected.
     */
    TdDataTableComponent.prototype.areAllSelected = function () {
        var _this = this;
        var match = this._data.find(function (d) { return !_this.isRowSelected(d); });
        return typeof match === 'undefined';
    };
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    TdDataTableComponent.prototype.selectAll = function (checked) {
        var _this = this;
        if (checked) {
            this._data.forEach(function (row) {
                // skiping already selected rows
                if (!_this.isRowSelected(row)) {
                    _this._value.push(row);
                }
            });
        }
        else {
            this.clearModel();
        }
        this.onSelectAll.emit({ rows: this._value, selected: checked });
    };
    /**
     * Checks if row is selected
     */
    TdDataTableComponent.prototype.isRowSelected = function (row) {
        var _this = this;
        // if selection is done by a [uniqueId] it uses it to compare, else it compares by reference.
        if (this.uniqueId) {
            return this._value ? this._value.filter(function (val) {
                return val[_this.uniqueId] === row[_this.uniqueId];
            }).length > 0 : false;
        }
        return this._value ? this._value.indexOf(row) > -1 : false;
    };
    /**
     * Selects or clears a row depending on 'checked' value
     */
    TdDataTableComponent.prototype.select = function (row, checked, event) {
        var _this = this;
        event.preventDefault();
        // clears all the fields for the dataset
        if (!this._multiple) {
            this.clearModel();
        }
        if (checked) {
            this._value.push(row);
        }
        else {
            // if selection is done by a [uniqueId] it uses it to compare, else it compares by reference.
            if (this.uniqueId) {
                row = this._value.filter(function (val) {
                    return val[_this.uniqueId] === row[_this.uniqueId];
                })[0];
            }
            var index = this._value.indexOf(row);
            if (index > -1) {
                this._value.splice(index, 1);
            }
        }
        this.onRowSelect.emit({ row: row, selected: checked });
        this.onChange(this._value);
    };
    /**
     * Method handle for sort click event in column headers.
     */
    TdDataTableComponent.prototype.handleSort = function (column) {
        if (this._sortBy === column) {
            this._sortOrder = this._sortOrder === exports.TdDataTableSortingOrder.Ascending ?
                exports.TdDataTableSortingOrder.Descending : exports.TdDataTableSortingOrder.Ascending;
        }
        else {
            this._sortBy = column;
            this._sortOrder = exports.TdDataTableSortingOrder.Ascending;
        }
        this.onSortChange.next({ name: this._sortBy.name, order: this._sortOrder });
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdDataTableComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TdDataTableComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TdDataTableComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TdDataTableComponent.prototype._getNestedValue = function (name, value) {
        if (!(value instanceof Object) || !name) {
            return value;
        }
        if (name.indexOf('.') > -1) {
            var splitName = name.split(/\.(.+)/, 2);
            return this._getNestedValue(splitName[1], value[splitName[0]]);
        }
        else {
            return value[name];
        }
    };
    return TdDataTableComponent;
}());
__decorate$19([
    _angular_core.ContentChildren(TdDataTableTemplateDirective),
    __metadata$8("design:type", _angular_core.QueryList)
], exports.TdDataTableComponent.prototype, "_templates", void 0);
__decorate$19([
    _angular_core.Input(),
    __metadata$8("design:type", Object),
    __metadata$8("design:paramtypes", [Object])
], exports.TdDataTableComponent.prototype, "value", null);
__decorate$19([
    _angular_core.Input('uniqueId'),
    __metadata$8("design:type", String)
], exports.TdDataTableComponent.prototype, "uniqueId", void 0);
__decorate$19([
    _angular_core.Input('data'),
    __metadata$8("design:type", Array),
    __metadata$8("design:paramtypes", [Array])
], exports.TdDataTableComponent.prototype, "data", null);
__decorate$19([
    _angular_core.Input('columns'),
    __metadata$8("design:type", Array),
    __metadata$8("design:paramtypes", [Array])
], exports.TdDataTableComponent.prototype, "columns", null);
__decorate$19([
    _angular_core.Input('selectable'),
    __metadata$8("design:type", Object),
    __metadata$8("design:paramtypes", [Object])
], exports.TdDataTableComponent.prototype, "selectable", null);
__decorate$19([
    _angular_core.Input('multiple'),
    __metadata$8("design:type", Object),
    __metadata$8("design:paramtypes", [Object])
], exports.TdDataTableComponent.prototype, "multiple", null);
__decorate$19([
    _angular_core.Input('sortable'),
    __metadata$8("design:type", Object),
    __metadata$8("design:paramtypes", [Object])
], exports.TdDataTableComponent.prototype, "sortable", null);
__decorate$19([
    _angular_core.Input('sortBy'),
    __metadata$8("design:type", String),
    __metadata$8("design:paramtypes", [String])
], exports.TdDataTableComponent.prototype, "sortBy", null);
__decorate$19([
    _angular_core.Input('sortOrder'),
    __metadata$8("design:type", String),
    __metadata$8("design:paramtypes", [String])
], exports.TdDataTableComponent.prototype, "sortOrder", null);
__decorate$19([
    _angular_core.Output('sortChange'),
    __metadata$8("design:type", _angular_core.EventEmitter)
], exports.TdDataTableComponent.prototype, "onSortChange", void 0);
__decorate$19([
    _angular_core.Output('rowSelect'),
    __metadata$8("design:type", _angular_core.EventEmitter)
], exports.TdDataTableComponent.prototype, "onRowSelect", void 0);
__decorate$19([
    _angular_core.Output('selectAll'),
    __metadata$8("design:type", _angular_core.EventEmitter)
], exports.TdDataTableComponent.prototype, "onSelectAll", void 0);
exports.TdDataTableComponent = __decorate$19([
    _angular_core.Component({
        providers: [TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR],
        selector: 'td-data-table',
        styles: [".mat-table-container { display: block; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; } table.td-data-table.mat-selectable tbody > tr.td-data-table-row { transition: background-color 0.2s; } table.td-data-table.mat-selectable td.td-data-table-cell:first-child, table.td-data-table.mat-selectable th.td-data-table-column:first-child { width: 20px; padding: 0 24px; } table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2), table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2) { padding-left: 0px; } table.td-data-table td.mat-checkbox-cell, table.td-data-table th.mat-checkbox-column { width: 18px; font-size: 0 !important; } table.td-data-table td.mat-checkbox-cell md-pseudo-checkbox, table.td-data-table th.mat-checkbox-column md-pseudo-checkbox { width: 18px; height: 18px; } /deep/ table.td-data-table td.mat-checkbox-cell md-pseudo-checkbox.mat-pseudo-checkbox-checked::after, /deep/ table.td-data-table th.mat-checkbox-column md-pseudo-checkbox.mat-pseudo-checkbox-checked::after { top: 3px !important; left: 1px !important; width: 11px !important; height: 4px !important; } table.td-data-table td.mat-checkbox-cell md-checkbox /deep/ .mat-checkbox-inner-container, table.td-data-table th.mat-checkbox-column md-checkbox /deep/ .mat-checkbox-inner-container { width: 18px; height: 18px; margin: 0; } "],
        template: "<div class=\"mat-table-container\" *ngIf=\"hasData\" title> <table td-data-table [class.mat-selectable]=\"_selectable\"> <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"_selectable\"> <md-checkbox #checkBoxAll *ngIf=\"_multiple\" [checked]=\"areAllSelected()\" (click)=\"selectAll(!checkBoxAll.checked)\"> </md-checkbox> </th> <th td-data-table-column *ngFor=\"let column of columns\" [name]=\"column.name\" [numeric]=\"column.numeric\" [active]=\"(column.sortable || _sortable) && column === _sortBy\" [sortable]=\"column.sortable ||  _sortable\" [sortOrder]=\"_sortOrder\" (sortChange)=\"handleSort(column)\"> <span [mdTooltip]=\"column.tooltip\">{{column.label}}</span> </th> <tr td-data-table-row [class.mat-selected]=\"_selectable && isRowSelected(row)\" *ngFor=\"let row of _data\" (click)=\"_selectable && select(row, !isRowSelected(row), $event)\"> <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"_selectable\"> <md-pseudo-checkbox [state]=\"isRowSelected(row) ? 'checked' : 'unchecked'\"> </md-pseudo-checkbox> </td> <td td-data-table-cell [numeric]=\"column.numeric\" *ngFor=\"let column of columns\"> <span class=\"md-body-1\" *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span> <template *ngIf=\"getTemplateRef(column.name)\" [ngTemplateOutlet]=\"getTemplateRef(column.name)\" [ngOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name }\"> </template> </td> </tr> </table> </div> <div class=\"md-padding\" *ngIf=\"!hasData\" layout=\"row\" layout-align=\"center center\"> <h3>No results</h3> </div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    }),
    __metadata$8("design:paramtypes", [_angular_core.ChangeDetectorRef])
], exports.TdDataTableComponent);

var __decorate$21 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdDataTableColumnComponent = (function () {
    function TdDataTableColumnComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._sortOrder = exports.TdDataTableSortingOrder.Ascending;
        /**
         * name?: string
         * Sets unique column [name] for [sortable] events.
         */
        this.name = '';
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        this.sortable = false;
        /**
         * active?: boolean
         * Sets column to active state when 'true'.
         * Defaults to 'false'
         */
        this.active = false;
        /**
         * numeric?: boolean
         * Makes column follow the numeric data-table specs and sort icon.
         * Defaults to 'false'
         */
        this.numeric = false;
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        this.onSortChange = new _angular_core.EventEmitter();
        this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table-column', true);
    }
    Object.defineProperty(TdDataTableColumnComponent.prototype, "sortOrder", {
        /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of column.
         * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
         */
        set: function (order) {
            var sortOrder = order ? order.toUpperCase() : 'ASC';
            if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                throw new Error('[sortOrder] must be empty, ASC or DESC');
            }
            this._sortOrder = sortOrder === 'ASC' ?
                exports.TdDataTableSortingOrder.Ascending : exports.TdDataTableSortingOrder.Descending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindClickable", {
        get: function () {
            return this.sortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bingSortable", {
        get: function () {
            return this.sortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindActive", {
        get: function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindNumeric", {
        get: function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    TdDataTableColumnComponent.prototype.handleSortBy = function () {
        this.onSortChange.emit({ name: this.name, order: this._sortOrder });
    };
    TdDataTableColumnComponent.prototype.isAscending = function () {
        return this._sortOrder === exports.TdDataTableSortingOrder.Ascending;
    };
    TdDataTableColumnComponent.prototype.isDescending = function () {
        return this._sortOrder === exports.TdDataTableSortingOrder.Descending;
    };
    return TdDataTableColumnComponent;
}());
__decorate$21([
    _angular_core.Input('name'),
    __metadata$10("design:type", String)
], exports.TdDataTableColumnComponent.prototype, "name", void 0);
__decorate$21([
    _angular_core.Input('sortable'),
    __metadata$10("design:type", Boolean)
], exports.TdDataTableColumnComponent.prototype, "sortable", void 0);
__decorate$21([
    _angular_core.Input('active'),
    __metadata$10("design:type", Boolean)
], exports.TdDataTableColumnComponent.prototype, "active", void 0);
__decorate$21([
    _angular_core.Input('numeric'),
    __metadata$10("design:type", Boolean)
], exports.TdDataTableColumnComponent.prototype, "numeric", void 0);
__decorate$21([
    _angular_core.Input('sortOrder'),
    __metadata$10("design:type", String),
    __metadata$10("design:paramtypes", [String])
], exports.TdDataTableColumnComponent.prototype, "sortOrder", null);
__decorate$21([
    _angular_core.Output('sortChange'),
    __metadata$10("design:type", _angular_core.EventEmitter)
], exports.TdDataTableColumnComponent.prototype, "onSortChange", void 0);
__decorate$21([
    _angular_core.HostBinding('class.mat-clickable'),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [])
], exports.TdDataTableColumnComponent.prototype, "bindClickable", null);
__decorate$21([
    _angular_core.HostBinding('class.mat-sortable'),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [])
], exports.TdDataTableColumnComponent.prototype, "bingSortable", null);
__decorate$21([
    _angular_core.HostBinding('class.mat-active'),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [])
], exports.TdDataTableColumnComponent.prototype, "bindActive", null);
__decorate$21([
    _angular_core.HostBinding('class.mat-numeric'),
    __metadata$10("design:type", Boolean),
    __metadata$10("design:paramtypes", [])
], exports.TdDataTableColumnComponent.prototype, "bindNumeric", null);
exports.TdDataTableColumnComponent = __decorate$21([
    _angular_core.Component({
        /* tslint:disable-next-line */
        selector: 'th[td-data-table-column]',
        styles: [":host { font-size: 12px; font-weight: bold; white-space: nowrap; padding: 0 28px 0 28px; position: relative; vertical-align: middle; text-align: left; } :host:first-child { padding-left: 24px; } :host:last-child { padding-right: 24px; } :host md-icon { height: 16px; width: 16px; font-size: 16px !important; line-height: 16px !important; } :host md-icon.td-data-table-sort-icon { opacity: 0; transition: transform 0.25s, opacity 0.25s; } :host md-icon.td-data-table-sort-icon.mat-asc { transform: rotate(0deg); } :host md-icon.td-data-table-sort-icon.mat-desc { transform: rotate(180deg); } :host:hover.mat-sortable md-icon.td-data-table-sort-icon, :host.mat-active.mat-sortable md-icon.td-data-table-sort-icon { opacity: 1; } :host > * { vertical-align: middle; } :host.mat-clickable { cursor: pointer; } :host.mat-clickable:focus { outline: none; } :host md-icon.td-data-table-sort-icon { position: absolute; } :host.mat-numeric { text-align: right; } :host.mat-numeric md-icon.td-data-table-sort-icon { margin-left: -22px; } :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-left: 6px; } "],
        template: "<md-icon  class=\"td-data-table-sort-icon\"  *ngIf=\"sortable && numeric\" [class.mat-asc]=\"(!(active) || isAscending())\" [class.mat-desc]=\"(active && isDescending())\" (click)=\"sortable && handleSortBy()\"> arrow_upward </md-icon> <span class=\"md-caption\" (click)=\"sortable && handleSortBy()\"> <ng-content></ng-content> </span> <md-icon  class=\"td-data-table-sort-icon\"  *ngIf=\"sortable && !numeric\" [class.mat-asc]=\"(!(active) || isAscending())\" [class.mat-desc]=\"(active && isDescending())\" (click)=\"sortable && handleSortBy()\"> arrow_upward </md-icon>",
    }),
    __metadata$10("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.TdDataTableColumnComponent);

var __decorate$22 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdDataTableCellComponent = (function () {
    function TdDataTableCellComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         */
        this.numeric = false;
        this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table-cell', true);
    }
    Object.defineProperty(TdDataTableCellComponent.prototype, "bindNumeric", {
        get: function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    return TdDataTableCellComponent;
}());
__decorate$22([
    _angular_core.Input('numeric'),
    __metadata$11("design:type", Boolean)
], exports.TdDataTableCellComponent.prototype, "numeric", void 0);
__decorate$22([
    _angular_core.HostBinding('class.mat-numeric'),
    __metadata$11("design:type", Boolean),
    __metadata$11("design:paramtypes", [])
], exports.TdDataTableCellComponent.prototype, "bindNumeric", null);
exports.TdDataTableCellComponent = __decorate$22([
    _angular_core.Component({
        /* tslint:disable-next-line */
        selector: 'td[td-data-table-cell]',
        styles: [":host { font-size: 13px; vertical-align: middle; text-align: left; padding: 0 28px 0 28px; } :host:first-child { padding-left: 24px; } :host:last-child { padding-right: 24px; } :host > * { vertical-align: middle; } :host.mat-clickable { cursor: pointer; } :host.mat-clickable:focus { outline: none; } :host.mat-numeric { text-align: right; } "],
        template: "<ng-content></ng-content>",
    }),
    __metadata$11("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.TdDataTableCellComponent);

var __decorate$23 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdDataTableRowComponent = (function () {
    function TdDataTableRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table-row', true);
    }
    return TdDataTableRowComponent;
}());
exports.TdDataTableRowComponent = __decorate$23([
    _angular_core.Component({
        /* tslint:disable-next-line */
        selector: 'tr[td-data-table-row]',
        styles: [":host { border-bottom-style: solid; border-bottom-width: 1px; } tbody > :host { height: 48px; } thead > :host { height: 56px; } "],
        template: "<ng-content></ng-content>",
    }),
    __metadata$12("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.TdDataTableRowComponent);

var __decorate$24 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdDataTableTableComponent = (function () {
    function TdDataTableTableComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table', true);
    }
    return TdDataTableTableComponent;
}());
exports.TdDataTableTableComponent = __decorate$24([
    _angular_core.Component({
        /* tslint:disable-next-line */
        selector: 'table[td-data-table]',
        styles: [":host { width: 100%; border-spacing: 0; overflow: hidden; border-collapse: collapse; } "],
        template: "<thead> <tr td-data-table-row> <ng-content select=th[td-data-table-column]></ng-content> </tr> </thead> <ng-content></ng-content>",
    }),
    __metadata$13("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.TdDataTableTableComponent);

var __decorate$25 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.TdDataTableService = (function () {
    function TdDataTableService() {
    }
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     */
    TdDataTableService.prototype.filterData = function (data, searchTerm, ignoreCase) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter(function (item) {
                var res = Object.keys(item).find(function (key) {
                    var preItemValue = ('' + item[key]);
                    var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                    return itemValue.indexOf(filter) > -1;
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    };
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     */
    TdDataTableService.prototype.sortData = function (data, sortBy, sortOrder) {
        if (sortOrder === void 0) { sortOrder = exports.TdDataTableSortingOrder.Ascending; }
        if (sortBy) {
            data.sort(function (a, b) {
                var compA = a[sortBy];
                var compB = b[sortBy];
                var direction = 0;
                if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                    direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                }
                else {
                    if (compA < compB) {
                        direction = -1;
                    }
                    else if (compA > compB) {
                        direction = 1;
                    }
                }
                return direction * (sortOrder === exports.TdDataTableSortingOrder.Descending ? -1 : 1);
            });
        }
        return data;
    };
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     */
    TdDataTableService.prototype.pageData = function (data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    };
    return TdDataTableService;
}());
exports.TdDataTableService = __decorate$25([
    _angular_core.Injectable()
], exports.TdDataTableService);

var __decorate$18 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_DATA_TABLE = [
    exports.TdDataTableComponent,
    TdDataTableTemplateDirective,
    exports.TdDataTableColumnComponent,
    exports.TdDataTableCellComponent,
    exports.TdDataTableRowComponent,
    exports.TdDataTableTableComponent,
];
exports.CovalentDataTableModule = CovalentDataTableModule_1 = (function () {
    function CovalentDataTableModule() {
    }
    CovalentDataTableModule.forRoot = function () {
        return {
            ngModule: CovalentDataTableModule_1,
            providers: [exports.TdDataTableService],
        };
    };
    return CovalentDataTableModule;
}());
exports.CovalentDataTableModule = CovalentDataTableModule_1 = __decorate$18([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_material.MdCheckboxModule.forRoot(),
            _angular_material.MdTooltipModule.forRoot(),
            _angular_material.MdIconModule.forRoot(),
            _angular_material.MdSelectionModule,
        ],
        declarations: [
            TD_DATA_TABLE,
        ],
        exports: [
            TD_DATA_TABLE,
        ],
    })
], exports.CovalentDataTableModule);
var CovalentDataTableModule_1;

var __decorate$27 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdDialogTitleDirective = (function () {
    function TdDialogTitleDirective() {
    }
    return TdDialogTitleDirective;
}());
exports.TdDialogTitleDirective = __decorate$27([
    _angular_core.Directive({ selector: 'td-dialog-title' })
], exports.TdDialogTitleDirective);
var TdDialogContentDirective = (function () {
    function TdDialogContentDirective() {
    }
    return TdDialogContentDirective;
}());
TdDialogContentDirective = __decorate$27([
    _angular_core.Directive({ selector: 'td-dialog-content' })
], TdDialogContentDirective);
var TdDialogActionsDirective = (function () {
    function TdDialogActionsDirective() {
    }
    return TdDialogActionsDirective;
}());
TdDialogActionsDirective = __decorate$27([
    _angular_core.Directive({ selector: 'td-dialog-actions' })
], TdDialogActionsDirective);
exports.TdDialogComponent = (function () {
    function TdDialogComponent() {
    }
    TdDialogComponent.prototype.ngAfterContentInit = function () {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate td-dialog-title component at in td-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate td-dialog-content component at in td-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
        }
    };
    return TdDialogComponent;
}());
__decorate$27([
    _angular_core.ContentChildren(exports.TdDialogTitleDirective),
    __metadata$14("design:type", _angular_core.QueryList)
], exports.TdDialogComponent.prototype, "dialogTitle", void 0);
__decorate$27([
    _angular_core.ContentChildren(TdDialogContentDirective),
    __metadata$14("design:type", _angular_core.QueryList)
], exports.TdDialogComponent.prototype, "dialogContent", void 0);
__decorate$27([
    _angular_core.ContentChildren(TdDialogActionsDirective),
    __metadata$14("design:type", _angular_core.QueryList)
], exports.TdDialogComponent.prototype, "dialogActions", void 0);
exports.TdDialogComponent = __decorate$27([
    _angular_core.Component({
        selector: 'td-dialog',
        template: "<div class=\"td-dialog-wrapper\"> <h3 class=\"td-dialog-title md-title\" *ngIf=\"dialogTitle.length > 0\"> <ng-content select=\"td-dialog-title\"></ng-content> </h3> <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\"> <ng-content select=\"td-dialog-content\"></ng-content> </div> <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\" layout=\"row\"> <span flex></span> <ng-content select=\"td-dialog-actions\"></ng-content> </div> </div>",
        styles: [".td-dialog-title { margin-top: 0; margin-bottom: 20px; } .td-dialog-content { margin-bottom: 16px; } .td-dialog-actions { position: relative; top: 16px; left: 16px; } :host { display: block; } :host .td-dialog-actions /deep/ button { text-transform: uppercase; margin-left: 8px; padding-left: 8px; padding-right: 8px; min-width: 64px; } "],
    })
], exports.TdDialogComponent);

var __decorate$28 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdAlertDialogComponent = (function () {
    function TdAlertDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    TdAlertDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    return TdAlertDialogComponent;
}());
exports.TdAlertDialogComponent = __decorate$28([
    _angular_core.Component({
        selector: 'td-alert-dialog',
        template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content class=\"md-subhead tc-grey-700\"> {{message}} </td-dialog-content> <td-dialog-actions> <button md-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button> </td-dialog-actions> </td-dialog>",
        styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } "],
    }),
    __metadata$15("design:paramtypes", [_angular_material.MdDialogRef])
], exports.TdAlertDialogComponent);

var __decorate$29 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdConfirmDialogComponent = (function () {
    function TdConfirmDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdConfirmDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(false);
    };
    TdConfirmDialogComponent.prototype.accept = function () {
        this._dialogRef.close(true);
    };
    return TdConfirmDialogComponent;
}());
exports.TdConfirmDialogComponent = __decorate$29([
    _angular_core.Component({
        selector: 'td-confirm-dialog',
        template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content class=\"md-subhead tc-grey-700\"> {{message}} </td-dialog-content> <td-dialog-actions> <button md-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button md-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
        styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } "],
    }),
    __metadata$16("design:paramtypes", [_angular_material.MdDialogRef])
], exports.TdConfirmDialogComponent);

var __decorate$30 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdPromptDialogComponent = (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdPromptDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(undefined);
    };
    TdPromptDialogComponent.prototype.accept = function () {
        this._dialogRef.close(this.value);
    };
    return TdPromptDialogComponent;
}());
exports.TdPromptDialogComponent = __decorate$30([
    _angular_core.Component({
        selector: 'td-prompt-dialog',
        template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content layout=\"column\" class=\"md-subhead tc-grey-700\"> {{message}} <form #form=\"ngForm\" layout=\"row\" novalidate flex> <md-input-container flex> <input mdInput (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\" [(ngModel)]=\"value\" name=\"value\" required/> </md-input-container> </form> </td-dialog-content> <td-dialog-actions> <button md-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button md-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" [disabled]=\"!form.valid\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
        styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } "],
    }),
    __metadata$17("design:paramtypes", [_angular_material.MdDialogRef])
], exports.TdPromptDialogComponent);

var __decorate$31 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$18 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdDialogService = (function () {
    function TdDialogService(_dialogService) {
        this._dialogService = _dialogService;
    }
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MdDialogConfig
     * Wrapper function over the open() method in MdDialog.
     * Opens a modal dialog containing the given component.
     */
    TdDialogService.prototype.open = function (component, config) {
        return this._dialogService.open(component, config);
    };
    /**
     * Wrapper function over the closeAll() method in MdDialog.
     * Closes all of the currently-open dialogs.
     */
    TdDialogService.prototype.closeAll = function () {
        this._dialogService.closeAll();
    };
    /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MdDialogRef<TdAlertDialogComponent> object.
     */
    TdDialogService.prototype.openAlert = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(exports.TdAlertDialogComponent, dialogConfig);
        var alertDialogComponent = dialogRef.componentInstance;
        alertDialogComponent.title = config.title;
        alertDialogComponent.message = config.message;
        if (config.closeButton) {
            alertDialogComponent.closeButton = config.closeButton;
        }
        return dialogRef;
    };
    /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MdDialogRef<TdConfirmDialogComponent> object.
     */
    TdDialogService.prototype.openConfirm = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(exports.TdConfirmDialogComponent, dialogConfig);
        var confirmDialogComponent = dialogRef.componentInstance;
        confirmDialogComponent.title = config.title;
        confirmDialogComponent.message = config.message;
        if (config.acceptButton) {
            confirmDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            confirmDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    };
    /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MdDialogRef<TdPromptDialogComponent> object.
     */
    TdDialogService.prototype.openPrompt = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(exports.TdPromptDialogComponent, dialogConfig);
        var promptDialogComponent = dialogRef.componentInstance;
        promptDialogComponent.title = config.title;
        promptDialogComponent.message = config.message;
        promptDialogComponent.value = config.value;
        if (config.acceptButton) {
            promptDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            promptDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    };
    TdDialogService.prototype._createConfig = function (config) {
        var dialogConfig = new _angular_material.MdDialogConfig();
        dialogConfig.viewContainerRef = config.viewContainerRef;
        dialogConfig.disableClose = config.disableClose;
        return dialogConfig;
    };
    return TdDialogService;
}());
exports.TdDialogService = __decorate$31([
    _angular_core.Injectable(),
    __metadata$18("design:paramtypes", [_angular_material.MdDialog])
], exports.TdDialogService);

var __decorate$26 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_DIALOGS = [
    exports.TdAlertDialogComponent,
    exports.TdConfirmDialogComponent,
    exports.TdPromptDialogComponent,
    exports.TdDialogComponent,
    exports.TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
var TD_DIALOGS_ENTRY_COMPONENTS = [
    exports.TdAlertDialogComponent,
    exports.TdConfirmDialogComponent,
    exports.TdPromptDialogComponent,
];
exports.CovalentDialogsModule = CovalentDialogsModule_1 = (function () {
    function CovalentDialogsModule() {
    }
    CovalentDialogsModule.forRoot = function () {
        return {
            ngModule: CovalentDialogsModule_1,
            providers: [exports.TdDialogService],
        };
    };
    return CovalentDialogsModule;
}());
exports.CovalentDialogsModule = CovalentDialogsModule_1 = __decorate$26([
    _angular_core.NgModule({
        imports: [
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            _angular_material.MdDialogModule.forRoot(),
            _angular_material.MdInputModule.forRoot(),
            _angular_material.MdButtonModule.forRoot(),
        ],
        declarations: [
            TD_DIALOGS,
        ],
        exports: [
            TD_DIALOGS,
        ],
        entryComponents: [
            TD_DIALOGS_ENTRY_COMPONENTS,
        ],
    })
], exports.CovalentDialogsModule);
var CovalentDialogsModule_1;

var __extends$1 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$33 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$19 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TdExpansionPanelHeaderDirective = (function (_super) {
    __extends$1(TdExpansionPanelHeaderDirective, _super);
    function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelHeaderDirective;
}(_angular_material.TemplatePortalDirective));
TdExpansionPanelHeaderDirective = __decorate$33([
    _angular_core.Directive({
        selector: '[td-expansion-panel-header]template',
    }),
    __metadata$19("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], TdExpansionPanelHeaderDirective);
var TdExpansionPanelLabelDirective = (function (_super) {
    __extends$1(TdExpansionPanelLabelDirective, _super);
    function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelLabelDirective;
}(_angular_material.TemplatePortalDirective));
TdExpansionPanelLabelDirective = __decorate$33([
    _angular_core.Directive({
        selector: '[td-expansion-panel-label]template',
    }),
    __metadata$19("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], TdExpansionPanelLabelDirective);
var TdExpansionPanelSublabelDirective = (function (_super) {
    __extends$1(TdExpansionPanelSublabelDirective, _super);
    function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelSublabelDirective;
}(_angular_material.TemplatePortalDirective));
TdExpansionPanelSublabelDirective = __decorate$33([
    _angular_core.Directive({
        selector: '[td-expansion-panel-sublabel]template',
    }),
    __metadata$19("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], TdExpansionPanelSublabelDirective);
var TdExpansionPanelSummaryComponent = (function () {
    function TdExpansionPanelSummaryComponent() {
    }
    return TdExpansionPanelSummaryComponent;
}());
TdExpansionPanelSummaryComponent = __decorate$33([
    _angular_core.Component({
        selector: 'td-expansion-summary',
        template: '<ng-content></ng-content>',
    })
], TdExpansionPanelSummaryComponent);
exports.TdExpansionPanelComponent = (function () {
    function TdExpansionPanelComponent() {
        this._expand = false;
        this._disabled = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        this.expanded = new _angular_core.EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        this.collapsed = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
        get: function () {
            return this._expand;
        },
        /**
         * expand?: boolean
         * Toggles [TdExpansionPanelComponent] between expand/collapse.
         */
        set: function (expand) {
            this._setExpand(expand);
        },
        enumerable: true,
        configurable: true
    });
    
    
    Object.defineProperty(TdExpansionPanelComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if 'true'.
         */
        set: function (disabled) {
            if (disabled && this._expand) {
                this._expand = false;
                this._onCollapsed();
            }
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    
    
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     */
    TdExpansionPanelComponent.prototype.clickEvent = function () {
        this._setExpand(!this._expand);
    };
    
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdExpansionPanelComponent.prototype.toggle = function () {
        return this._setExpand(!this._expand);
    };
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdExpansionPanelComponent.prototype.open = function () {
        return this._setExpand(true);
    };
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdExpansionPanelComponent.prototype.close = function () {
        return this._setExpand(false);
    };
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     */
    TdExpansionPanelComponent.prototype._setExpand = function (newExpand) {
        if (this._disabled) {
            return false;
        }
        if (this._expand !== newExpand) {
            this._expand = newExpand;
            if (newExpand) {
                this._onExpanded();
            }
            else {
                this._onCollapsed();
            }
            return true;
        }
        return false;
    };
    
    TdExpansionPanelComponent.prototype._onExpanded = function () {
        this.expanded.emit(undefined);
    };
    
    TdExpansionPanelComponent.prototype._onCollapsed = function () {
        this.collapsed.emit(undefined);
    };
    
    return TdExpansionPanelComponent;
}());
__decorate$33([
    _angular_core.ContentChild(TdExpansionPanelHeaderDirective),
    __metadata$19("design:type", TdExpansionPanelHeaderDirective)
], exports.TdExpansionPanelComponent.prototype, "expansionPanelHeader", void 0);
__decorate$33([
    _angular_core.ContentChild(TdExpansionPanelLabelDirective),
    __metadata$19("design:type", TdExpansionPanelLabelDirective)
], exports.TdExpansionPanelComponent.prototype, "expansionPanelLabel", void 0);
__decorate$33([
    _angular_core.ContentChild(TdExpansionPanelSublabelDirective),
    __metadata$19("design:type", TdExpansionPanelSublabelDirective)
], exports.TdExpansionPanelComponent.prototype, "expansionPanelSublabel", void 0);
__decorate$33([
    _angular_core.Input(),
    __metadata$19("design:type", String)
], exports.TdExpansionPanelComponent.prototype, "label", void 0);
__decorate$33([
    _angular_core.Input(),
    __metadata$19("design:type", String)
], exports.TdExpansionPanelComponent.prototype, "sublabel", void 0);
__decorate$33([
    _angular_core.Input('expand'),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Boolean])
], exports.TdExpansionPanelComponent.prototype, "expand", null);
__decorate$33([
    _angular_core.Input('disabled'),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Boolean])
], exports.TdExpansionPanelComponent.prototype, "disabled", null);
__decorate$33([
    _angular_core.Output(),
    __metadata$19("design:type", _angular_core.EventEmitter)
], exports.TdExpansionPanelComponent.prototype, "expanded", void 0);
__decorate$33([
    _angular_core.Output(),
    __metadata$19("design:type", _angular_core.EventEmitter)
], exports.TdExpansionPanelComponent.prototype, "collapsed", void 0);
exports.TdExpansionPanelComponent = __decorate$33([
    _angular_core.Component({
        selector: 'td-expansion-panel',
        styles: [":host /deep/ md-nav-list [md-list-item]:active, :host /deep/ md-nav-list [md-list-item]:focus { outline: none; } :host /deep/ md-nav-list [md-list-item].mat-list-item.mat-interaction-disabled .mat-list-item-content { background: none !important; cursor: auto; } :host /deep/ md-nav-list [md-list-item].mat-tall .mat-list-item-content { height: auto; padding-left: 0; padding-right: 0; } :host { display: block; } :host .panel { transition: 1s all ease; } :host md-nav-list:first-of-type, :host md-list:first-of-type { padding-top: 0; } md-nav-list { padding: 0; } .td-expansion-primary, .td-expansion-secondary { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-right: 5px; } .td-expansion-content, .td-expansion-summary { overflow: hidden; } "],
        template: "<div class=\"panel\"  [class.td-expanded]=\"expand\"> <md-nav-list> <a [tabIndex]=\"disabled? -1 : 0\" (keydown.enter)=\"clickEvent()\" (click)=\"clickEvent()\" [class.mat-interaction-disabled]=\"disabled\" [class.mat-tall]=\"expansionPanelHeader\" md-list-item> <template [cdkPortalHost]=\"expansionPanelHeader\"></template> <div [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\" layout=\"row\"  layout-align=\"start center\"  flex> <div class=\"md-subhead td-expansion-primary\" flex-gt-xs=\"33\"> <template [cdkPortalHost]=\"expansionPanelLabel\"></template> <template [ngIf]=\"!expansionPanelLabel\">{{label || 'Click to expand '}}</template> </div> <div class=\"md-body-1 td-expansion-secondary\"> <template [cdkPortalHost]=\"expansionPanelSublabel\"></template> <template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</template> </div> <span flex></span> <md-icon class=\"td-expand-icon\" *ngIf=\"!expand && !disabled\">keyboard_arrow_down</md-icon> <md-icon class=\"td-expand-icon\" *ngIf=\"expand\">keyboard_arrow_up</md-icon> </div> </a> </md-nav-list> <div> <div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\"> <ng-content></ng-content> </div> <div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\"> <ng-content select=\"td-expansion-summary\"></ng-content> </div> </div> </div>",
        animations: [
            TdCollapseAnimation(),
        ],
    })
], exports.TdExpansionPanelComponent);

var __decorate$32 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_EXPANSION_PANEL = [
    exports.TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule_1 = (function () {
    function CovalentExpansionPanelModule() {
    }
    CovalentExpansionPanelModule.forRoot = function () {
        return {
            ngModule: CovalentExpansionPanelModule_1,
            providers: [],
        };
    };
    return CovalentExpansionPanelModule;
}());
exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule_1 = __decorate$32([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_material.MdListModule.forRoot(),
            _angular_material.MdIconModule.forRoot(),
            _angular_material.PortalModule.forRoot(),
        ],
        declarations: [
            TD_EXPANSION_PANEL,
        ],
        exports: [
            TD_EXPANSION_PANEL,
        ],
    })
], exports.CovalentExpansionPanelModule);
var CovalentExpansionPanelModule_1;

var __decorate$35 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$20 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.TdFileSelectDirective = (function () {
    function TdFileSelectDirective(model) {
        this.model = model;
        this._multiple = false;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         */
        this.onFileSelect = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be selected at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     */
    TdFileSelectDirective.prototype.onChange = function (event) {
        if (event.target instanceof HTMLInputElement) {
            var fileInputEl = event.target;
            var files = fileInputEl.files;
            if (files.length) {
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
            }
        }
    };
    return TdFileSelectDirective;
}());
__decorate$35([
    _angular_core.Input('multiple'),
    __metadata$20("design:type", Object),
    __metadata$20("design:paramtypes", [Object])
], exports.TdFileSelectDirective.prototype, "multiple", null);
__decorate$35([
    _angular_core.Output('fileSelect'),
    __metadata$20("design:type", _angular_core.EventEmitter)
], exports.TdFileSelectDirective.prototype, "onFileSelect", void 0);
__decorate$35([
    _angular_core.HostBinding('attr.multiple'),
    __metadata$20("design:type", String),
    __metadata$20("design:paramtypes", [])
], exports.TdFileSelectDirective.prototype, "multipleBinding", null);
__decorate$35([
    _angular_core.HostListener('change', ['$event']),
    __metadata$20("design:type", Function),
    __metadata$20("design:paramtypes", [Event]),
    __metadata$20("design:returntype", void 0)
], exports.TdFileSelectDirective.prototype, "onChange", null);
exports.TdFileSelectDirective = __decorate$35([
    _angular_core.Directive({
        selector: '[tdFileSelect]',
    }),
    __param$1(0, _angular_core.Optional()), __param$1(0, _angular_core.Host()),
    __metadata$20("design:paramtypes", [_angular_forms.NgModel])
], exports.TdFileSelectDirective);

var __decorate$36 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$21 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdFileDropDirective = (function () {
    function TdFileDropDirective(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._multiple = false;
        this._disabled = false;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         */
        this.onFileDrop = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be dropped at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "disabled", {
        /**
         * disabled?: boolean
         * Disabled drop events for host element.
         */
        set: function (disabled) {
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
        /**
         * Binds native 'disabled' attribute if [disabled] property is 'true'.
         */
        get: function () {
            return this._disabled ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     */
    TdFileDropDirective.prototype.onDrop = function (event) {
        if (!this._disabled) {
            var transfer = event.dataTransfer;
            var files = transfer.files;
            if (files.length) {
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.onFileDrop.emit(value);
            }
        }
        this._renderer.setElementClass(this._element.nativeElement, 'drop-zone', false);
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     */
    TdFileDropDirective.prototype.onDragOver = function (event) {
        var transfer = event.dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this._disabled || (!this._multiple &&
            ((transfer.items && transfer.items.length > 1) || transfer.mozItemCount > 1))) {
            transfer.dropEffect = 'none';
        }
        else {
            transfer.dropEffect = 'copy';
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     */
    TdFileDropDirective.prototype.onDragEnter = function (event) {
        if (!this._disabled) {
            this._renderer.setElementClass(this._element.nativeElement, 'drop-zone', true);
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     */
    TdFileDropDirective.prototype.onDragLeave = function (event) {
        this._renderer.setElementClass(this._element.nativeElement, 'drop-zone', false);
        this._stopEvent(event);
    };
    /**
     * Validates if the transfer item types are 'Files'.
     */
    TdFileDropDirective.prototype._typeCheck = function (types) {
        var dropEffect = 'none';
        if (types) {
            if ((types.contains && types.contains('Files'))
                || (types.indexOf && types.indexOf('Files') !== -1)) {
                dropEffect = 'copy';
            }
        }
        return dropEffect;
    };
    TdFileDropDirective.prototype._stopEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    return TdFileDropDirective;
}());
__decorate$36([
    _angular_core.Input('multiple'),
    __metadata$21("design:type", Object),
    __metadata$21("design:paramtypes", [Object])
], exports.TdFileDropDirective.prototype, "multiple", null);
__decorate$36([
    _angular_core.Input('disabled'),
    __metadata$21("design:type", Boolean),
    __metadata$21("design:paramtypes", [Boolean])
], exports.TdFileDropDirective.prototype, "disabled", null);
__decorate$36([
    _angular_core.Output('fileDrop'),
    __metadata$21("design:type", _angular_core.EventEmitter)
], exports.TdFileDropDirective.prototype, "onFileDrop", void 0);
__decorate$36([
    _angular_core.HostBinding('attr.multiple'),
    __metadata$21("design:type", String),
    __metadata$21("design:paramtypes", [])
], exports.TdFileDropDirective.prototype, "multipleBinding", null);
__decorate$36([
    _angular_core.HostBinding('attr.disabled'),
    __metadata$21("design:type", String),
    __metadata$21("design:paramtypes", [])
], exports.TdFileDropDirective.prototype, "disabledBinding", null);
__decorate$36([
    _angular_core.HostListener('drop', ['$event']),
    __metadata$21("design:type", Function),
    __metadata$21("design:paramtypes", [Event]),
    __metadata$21("design:returntype", void 0)
], exports.TdFileDropDirective.prototype, "onDrop", null);
__decorate$36([
    _angular_core.HostListener('dragover', ['$event']),
    __metadata$21("design:type", Function),
    __metadata$21("design:paramtypes", [Event]),
    __metadata$21("design:returntype", void 0)
], exports.TdFileDropDirective.prototype, "onDragOver", null);
__decorate$36([
    _angular_core.HostListener('dragenter', ['$event']),
    __metadata$21("design:type", Function),
    __metadata$21("design:paramtypes", [Event]),
    __metadata$21("design:returntype", void 0)
], exports.TdFileDropDirective.prototype, "onDragEnter", null);
__decorate$36([
    _angular_core.HostListener('dragleave', ['$event']),
    __metadata$21("design:type", Function),
    __metadata$21("design:paramtypes", [Event]),
    __metadata$21("design:returntype", void 0)
], exports.TdFileDropDirective.prototype, "onDragLeave", null);
exports.TdFileDropDirective = __decorate$36([
    _angular_core.Directive({
        selector: '[tdFileDrop]',
    }),
    __metadata$21("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], exports.TdFileDropDirective);

var __extends$2 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$38 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$23 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var noop$3 = function () {
    // empty method
};
var FILE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdFileInputComponent; }),
    multi: true,
};
exports.TdFileInputLabelDirective = (function (_super) {
    __extends$2(TdFileInputLabelDirective, _super);
    function TdFileInputLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdFileInputLabelDirective;
}(_angular_material.TemplatePortalDirective));
exports.TdFileInputLabelDirective = __decorate$38([
    _angular_core.Directive({
        selector: '[td-file-input-label]template',
    }),
    __metadata$23("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], exports.TdFileInputLabelDirective);
exports.TdFileInputComponent = (function () {
    function TdFileInputComponent(_renderer, _changeDetectorRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = undefined;
        this._multiple = false;
        this._disabled = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        this.onSelect = new _angular_core.EventEmitter();
        this.onChange = function (_) { return noop$3; };
        this.onTouched = function () { return noop$3; };
    }
    Object.defineProperty(TdFileInputComponent.prototype, "value", {
        // get/set accessor (needed for ControlValueAccessor)
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
        get: function () {
            return this._inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables [TdFileInputComponent] and clears selected/dropped files.
         */
        set: function (disabled) {
            if (disabled) {
                this.clear();
            }
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when a file is selected.
     */
    TdFileInputComponent.prototype.handleSelect = function (files) {
        this.writeValue(files);
        this.onSelect.emit(files);
    };
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     */
    TdFileInputComponent.prototype.clear = function () {
        this.writeValue(undefined);
        this._renderer.setElementProperty(this.inputElement, 'value', '');
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdFileInputComponent.prototype.writeValue = function (value) {
        this.value = value;
        this._changeDetectorRef.markForCheck();
    };
    TdFileInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TdFileInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TdFileInputComponent;
}());
__decorate$38([
    _angular_core.ViewChild('fileInput'),
    __metadata$23("design:type", _angular_core.ElementRef)
], exports.TdFileInputComponent.prototype, "_inputElement", void 0);
__decorate$38([
    _angular_core.Input('color'),
    __metadata$23("design:type", String)
], exports.TdFileInputComponent.prototype, "color", void 0);
__decorate$38([
    _angular_core.Input('multiple'),
    __metadata$23("design:type", Object),
    __metadata$23("design:paramtypes", [Object])
], exports.TdFileInputComponent.prototype, "multiple", null);
__decorate$38([
    _angular_core.Input('accept'),
    __metadata$23("design:type", String)
], exports.TdFileInputComponent.prototype, "accept", void 0);
__decorate$38([
    _angular_core.Input('disabled'),
    __metadata$23("design:type", Boolean),
    __metadata$23("design:paramtypes", [Boolean])
], exports.TdFileInputComponent.prototype, "disabled", null);
__decorate$38([
    _angular_core.Output('select'),
    __metadata$23("design:type", _angular_core.EventEmitter)
], exports.TdFileInputComponent.prototype, "onSelect", void 0);
exports.TdFileInputComponent = __decorate$38([
    _angular_core.Component({
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        providers: [FILE_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-file-input',
        styles: [":host { /** * Class that is added ondragenter by the [TdFileDrop] directive. */ } :host .td-file-input { padding-left: 8px; padding-right: 8px; } :host input.td-file-input-hidden { display: none; } :host .drop-zone { border-radius: 3px; } :host .drop-zone * { pointer-events: none; } "],
        template: "<div> <button md-raised-button class=\"td-file-input\" type=\"button\" [color]=\"color\"  [multiple]=\"multiple\"  [disabled]=\"disabled\" (keyup.enter)=\"fileInput.click()\" (click)=\"fileInput.click()\" (fileDrop)=\"handleSelect($event)\" tdFileDrop> <ng-content></ng-content> </button> <input #fileInput  class=\"td-file-input-hidden\"  type=\"file\" [attr.accept]=\"accept\"                 (fileSelect)=\"handleSelect($event)\" [multiple]=\"multiple\"  [disabled]=\"disabled\" tdFileSelect> </div>",
    }),
    __metadata$23("design:paramtypes", [_angular_core.Renderer, _angular_core.ChangeDetectorRef])
], exports.TdFileInputComponent);

var __decorate$37 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$22 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdFileUploadComponent = (function () {
    function TdFileUploadComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._multiple = false;
        this._disabled = false;
        /**
         * defaultColor?: string
         * Sets browse button color. Uses same color palette accepted as [mdButton] and defaults to 'primary'.
         */
        this.defaultColor = 'primary';
        /**
         * activeColor?: string
         * Sets upload button color. Uses same color palette accepted as [mdButton] and defaults to 'accent'.
         */
        this.activeColor = 'accent';
        /**
         * cancelColor?: string
         * Sets cancel button color. Uses same color palette accepted as [mdButton] and defaults to 'warn'.
         */
        this.cancelColor = 'warn';
        /**
         * select?: function
         * Event emitted when a file is selecte.
         * Emits a [File | FileList] object.
         */
        this.onSelect = new _angular_core.EventEmitter();
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        this.onUpload = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables [TdFileUploadComponent] and clears selected/dropped files.
         */
        set: function (disabled) {
            if (disabled) {
                this.cancel();
            }
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when upload button is clicked.
     */
    TdFileUploadComponent.prototype.uploadPressed = function () {
        if (this.files) {
            this.onUpload.emit(this.files);
        }
    };
    /**
     * Method executed when a file is selected.
     */
    TdFileUploadComponent.prototype.handleSelect = function (files) {
        this.files = files;
        this.onSelect.emit(files);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    TdFileUploadComponent.prototype.cancel = function () {
        this.files = undefined;
        this._changeDetectorRef.markForCheck();
    };
    return TdFileUploadComponent;
}());
__decorate$37([
    _angular_core.ContentChild(exports.TdFileInputLabelDirective),
    __metadata$22("design:type", exports.TdFileInputLabelDirective)
], exports.TdFileUploadComponent.prototype, "inputLabel", void 0);
__decorate$37([
    _angular_core.Input('defaultColor'),
    __metadata$22("design:type", String)
], exports.TdFileUploadComponent.prototype, "defaultColor", void 0);
__decorate$37([
    _angular_core.Input('activeColor'),
    __metadata$22("design:type", String)
], exports.TdFileUploadComponent.prototype, "activeColor", void 0);
__decorate$37([
    _angular_core.Input('cancelColor'),
    __metadata$22("design:type", String)
], exports.TdFileUploadComponent.prototype, "cancelColor", void 0);
__decorate$37([
    _angular_core.Input('multiple'),
    __metadata$22("design:type", Object),
    __metadata$22("design:paramtypes", [Object])
], exports.TdFileUploadComponent.prototype, "multiple", null);
__decorate$37([
    _angular_core.Input('accept'),
    __metadata$22("design:type", String)
], exports.TdFileUploadComponent.prototype, "accept", void 0);
__decorate$37([
    _angular_core.Input('disabled'),
    __metadata$22("design:type", Boolean),
    __metadata$22("design:paramtypes", [Boolean])
], exports.TdFileUploadComponent.prototype, "disabled", null);
__decorate$37([
    _angular_core.Output('select'),
    __metadata$22("design:type", _angular_core.EventEmitter)
], exports.TdFileUploadComponent.prototype, "onSelect", void 0);
__decorate$37([
    _angular_core.Output('upload'),
    __metadata$22("design:type", _angular_core.EventEmitter)
], exports.TdFileUploadComponent.prototype, "onUpload", void 0);
exports.TdFileUploadComponent = __decorate$37([
    _angular_core.Component({
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        selector: 'td-file-upload',
        styles: [":host { /** * Class that is added ondragenter by the [TdFileDrop] directive. */ } :host .td-file-upload { padding-left: 8px; padding-right: 8px; } :host .td-file-upload-cancel { height: 24px; width: 24px; position: relative; top: 24px; left: -12px; } :host .td-file-upload-cancel md-icon { border-radius: 12px; vertical-align: baseline; } :host .drop-zone { border-radius: 3px; } :host .drop-zone * { pointer-events: none; } "],
        template: "<td-file-input *ngIf=\"!files\" [multiple]=\"multiple\" [disabled]=\"disabled\" [accept]=\"accept\" [color]=\"defaultColor\" (select)=\"handleSelect($event)\"> <template [cdkPortalHost]=\"inputLabel\" [ngIf]=\"true\"></template> </td-file-input> <div *ngIf=\"files\" layout=\"row\"> <button #fileUpload class=\"td-file-upload\" md-raised-button type=\"button\" [color]=\"activeColor\" (keyup.delete)=\"cancel()\" (keyup.backspace)=\"cancel()\" (keyup.escape)=\"cancel()\" (click)=\"uploadPressed()\">  <ng-content></ng-content> </button> <button md-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\"             (click)=\"cancel()\"> <md-icon>cancel</md-icon> </button> </div>",
    }),
    __metadata$22("design:paramtypes", [_angular_core.ChangeDetectorRef])
], exports.TdFileUploadComponent);

var __decorate$39 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$24 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdFileService = (function () {
    function TdFileService() {
        this._progressSubject = new rxjs_Subject.Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    Object.defineProperty(TdFileService.prototype, "progress", {
        /**
         * Gets progress observable to keep track of the files being uploaded.
         * Needs to be supported by backend.
         */
        get: function () {
            return this._progressObservable;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file: File,
     *     headers?: {[key: string]: string}
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * Will be depricated when angular2 fixes [Http] to allow [FormData] as body.
     */
    TdFileService.prototype.upload = function (options) {
        var _this = this;
        return new rxjs_Observable.Observable(function (subscriber) {
            var xhr = new XMLHttpRequest();
            var formData = new FormData();
            formData.append('file', options.file);
            xhr.onprogress = function (event) {
                var progress = 0;
                if (event.total > 0) {
                    progress = Math.round(event.loaded / event.total * 100);
                }
                _this._progressSubject.next(progress);
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        subscriber.next(JSON.parse(xhr.response));
                        subscriber.complete();
                    }
                    else {
                        subscriber.error(xhr.response);
                    }
                }
            };
            xhr.open(options.method, options.url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if (options.headers) {
                for (var key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            xhr.send(formData);
        });
    };
    return TdFileService;
}());
exports.TdFileService = __decorate$39([
    _angular_core.Injectable(),
    __metadata$24("design:paramtypes", [])
], exports.TdFileService);

var __decorate$34 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_FILE = [
    exports.TdFileSelectDirective,
    exports.TdFileDropDirective,
    exports.TdFileUploadComponent,
    exports.TdFileInputComponent,
    exports.TdFileInputLabelDirective,
];
exports.CovalentFileModule = CovalentFileModule_1 = (function () {
    function CovalentFileModule() {
    }
    CovalentFileModule.forRoot = function () {
        return {
            ngModule: CovalentFileModule_1,
            providers: [exports.TdFileService],
        };
    };
    return CovalentFileModule;
}());
exports.CovalentFileModule = CovalentFileModule_1 = __decorate$34([
    _angular_core.NgModule({
        imports: [
            _angular_http.HttpModule,
            _angular_http.JsonpModule,
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            _angular_material.MdIconModule.forRoot(),
            _angular_material.MdButtonModule.forRoot(),
            _angular_material.PortalModule.forRoot(),
        ],
        declarations: [
            TD_FILE,
        ],
        exports: [
            TD_FILE,
        ],
    })
], exports.CovalentFileModule);
var CovalentFileModule_1;

var __decorate$41 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$25 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdJsonFormatterComponent = TdJsonFormatterComponent_1 = (function () {
    function TdJsonFormatterComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._open = false;
        this._levelsOpen = 0;
    }
    Object.defineProperty(TdJsonFormatterComponent.prototype, "levelsOpen", {
        get: function () {
            return this._levelsOpen;
        },
        /**
         * levelsOpen?: number
         * Levels opened by default when JS object is formatted and rendered.
         */
        set: function (levelsOpen) {
            if (!Number.isInteger(levelsOpen)) {
                throw new Error('[levelsOpen] needs to be an integer.');
            }
            this._levelsOpen = levelsOpen;
            this._open = levelsOpen > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "open", {
        get: function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
        get: function () {
            var elipsis = this._key && this._key.length > TdJsonFormatterComponent_1.KEY_MAX_LENGTH ? '…' : '';
            return this._key ? this._key.substring(0, TdJsonFormatterComponent_1.KEY_MAX_LENGTH) + elipsis : this._key;
        },
        /**
         * key?: string
         * Tag to be displayed next to formatted object.
         */
        set: function (key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        /**
         * data: any
         * JS object to be formatted.
         */
        set: function (data) {
            this._data = data;
            this.parseChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes json-formatter and rerenders [data]
     */
    TdJsonFormatterComponent.prototype.refresh = function () {
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Toggles collapse/expanded state of component.
     */
    TdJsonFormatterComponent.prototype.toggle = function () {
        this._open = !this._open;
    };
    TdJsonFormatterComponent.prototype.isObject = function () {
        return this.getType(this._data) === 'object';
    };
    TdJsonFormatterComponent.prototype.isArray = function () {
        return Array.isArray(this._data);
    };
    TdJsonFormatterComponent.prototype.hasChildren = function () {
        return this._children && this._children.length > 0;
    };
    /**
     * Gets parsed value depending on value type.
     */
    TdJsonFormatterComponent.prototype.getValue = function (value) {
        var type = this.getType(value);
        if (type === 'undefined' || (type === 'null')) {
            return type;
        }
        else if (type === 'date') {
            value = new Date(value).toString();
        }
        else if (type === 'string') {
            value = '"' + value + '"';
        }
        else if (type === 'function') {
            // Remove content of the function
            return value.toString()
                .replace(/[\r\n]/g, '')
                .replace(/\{.*\}/, '') + '{…}';
        }
        return value;
    };
    /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     */
    TdJsonFormatterComponent.prototype.getType = function (object) {
        if (typeof object === 'object') {
            if (!object) {
                return 'null';
            }
            var date = new Date(object);
            if (Object.prototype.toString.call(date) === '[object Date]') {
                if (!Number.isNaN(date.getTime())) {
                    return 'date';
                }
            }
        }
        return typeof object;
    };
    /**
     * Generates string representation depending if its an object or function.
     * see: http://stackoverflow.com/a/332429
     */
    TdJsonFormatterComponent.prototype.getObjectName = function () {
        var object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((object).constructor.toString());
        if (results && results.length > 1) {
            return results[1];
        }
        else {
            return '';
        }
    };
    /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     */
    TdJsonFormatterComponent.prototype.getPreview = function () {
        var _this = this;
        var previewData;
        var startChar = '{ ';
        var endChar = ' }';
        if (this.isArray()) {
            var previewArray = this._data.slice(0, TdJsonFormatterComponent_1.PREVIEW_LIMIT);
            previewData = previewArray.map(function (obj) {
                return _this.getValue(obj);
            });
            startChar = '[';
            endChar = ']';
        }
        else {
            var previewKeys = this._children.slice(0, TdJsonFormatterComponent_1.PREVIEW_LIMIT);
            previewData = previewKeys.map(function (key) {
                return key + ': ' + _this.getValue(_this._data[key]);
            });
        }
        var previewString = previewData.join(', ');
        var ellipsis = previewData.length >= TdJsonFormatterComponent_1.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent_1.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
        return startChar + previewString.substring(0, TdJsonFormatterComponent_1.PREVIEW_STRING_MAX_LENGTH) +
            ellipsis + endChar;
    };
    TdJsonFormatterComponent.prototype.parseChildren = function () {
        if (this.isObject()) {
            this._children = [];
            for (var key in this._data) {
                this._children.push(key);
            }
        }
    };
    return TdJsonFormatterComponent;
}());
/**
 * Max length for property names. Any names bigger than this get trunctated.
 */
exports.TdJsonFormatterComponent.KEY_MAX_LENGTH = 30;
/**
 * Max length for preview string. Any names bigger than this get trunctated.
 */
exports.TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH = 80;
/**
 * Max tooltip preview elements.
 */
exports.TdJsonFormatterComponent.PREVIEW_LIMIT = 5;
__decorate$41([
    _angular_core.Input('levelsOpen'),
    __metadata$25("design:type", Number),
    __metadata$25("design:paramtypes", [Number])
], exports.TdJsonFormatterComponent.prototype, "levelsOpen", null);
__decorate$41([
    _angular_core.Input('key'),
    __metadata$25("design:type", String),
    __metadata$25("design:paramtypes", [String])
], exports.TdJsonFormatterComponent.prototype, "key", null);
__decorate$41([
    _angular_core.Input('data'),
    __metadata$25("design:type", Object),
    __metadata$25("design:paramtypes", [Object])
], exports.TdJsonFormatterComponent.prototype, "data", null);
exports.TdJsonFormatterComponent = TdJsonFormatterComponent_1 = __decorate$41([
    _angular_core.Component({
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        selector: 'td-json-formatter',
        styles: [":host { display: block; } .td-json-formatter-wrapper { padding-top: 2px; padding-bottom: 2px; } .td-json-formatter-wrapper .td-key.td-key-node:hover { cursor: pointer; } .td-json-formatter-wrapper .td-object-children .td-key, .td-json-formatter-wrapper .td-object-children .td-object-children { padding-left: 24px; } .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf, .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf { padding-left: 48px; } .td-json-formatter-wrapper .value { margin-left: 5px; } .td-json-formatter-wrapper .value .td-empty { opacity: .5; text-decoration: line-through; } .td-json-formatter-wrapper .value .string { word-break: break-word; } .td-json-formatter-wrapper .value .date { word-break: break-word; } "],
        template: "<div class=\"td-json-formatter-wrapper\"> <a class=\"td-key\" [class.td-key-node]=\"hasChildren()\" [class.td-key-leaf]=\"!hasChildren()\" [tabIndex]=\"isObject()? 0 : -1\" (keydown.enter)=\"toggle()\" layout=\"row\" layout-align=\"start center\" (click)=\"toggle()\"> <md-icon class=\"tc-grey-600\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : 'keyboard_arrow_right'}}</md-icon> <span *ngIf=\"key\" class=\"key\">{{key}}:</span> <span class=\"value\"> <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [mdTooltip]=\"getPreview()\" mdTooltipPosition=\"after\"> <span>{{getObjectName()}}</span> <span *ngIf=\"isArray()\">[{{data.length}}]</span> </span> <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span> </span> </a> <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\"> <template let-key ngFor [ngForOf]=\"children\"> <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter> </template> </div> </div>",
        animations: [
            TdCollapseAnimation(),
        ],
    }),
    __metadata$25("design:paramtypes", [_angular_core.ChangeDetectorRef])
], exports.TdJsonFormatterComponent);
var TdJsonFormatterComponent_1;

var __decorate$40 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.CovalentJsonFormatterModule = CovalentJsonFormatterModule_1 = (function () {
    function CovalentJsonFormatterModule() {
    }
    CovalentJsonFormatterModule.forRoot = function () {
        return {
            ngModule: CovalentJsonFormatterModule_1,
            providers: [],
        };
    };
    return CovalentJsonFormatterModule;
}());
exports.CovalentJsonFormatterModule = CovalentJsonFormatterModule_1 = __decorate$40([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_material.MdTooltipModule.forRoot(),
            _angular_material.MdIconModule.forRoot(),
        ],
        declarations: [
            exports.TdJsonFormatterComponent,
        ],
        exports: [
            exports.TdJsonFormatterComponent,
        ],
    })
], exports.CovalentJsonFormatterModule);
var CovalentJsonFormatterModule_1;

var __decorate$43 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$26 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdLayoutComponent = (function () {
    function TdLayoutComponent() {
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.toggle = function () {
        return this.sidenav.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutComponent;
}());
__decorate$43([
    _angular_core.ViewChild(_angular_material.MdSidenav),
    __metadata$26("design:type", _angular_material.MdSidenav)
], exports.TdLayoutComponent.prototype, "sidenav", void 0);
exports.TdLayoutComponent = __decorate$43([
    _angular_core.Component({
        selector: 'td-layout',
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host /deep/ > md-sidenav-container > md-sidenav > .mat-sidenav-focus-trap > .cdk-focus-trap-content { display: -webkit-box; display: -webkit-flex; display: -moz-box; display: -ms-flexbox; display: flex; flex-direction: column; } "],
        template: "<md-sidenav-container fullscreen> <md-sidenav> <ng-content select=\"td-navigation-drawer\"></ng-content> <ng-content select=\"[menu-items], [td-sidenav-content]\"></ng-content> </md-sidenav> <ng-content></ng-content> </md-sidenav-container> ",
    })
], exports.TdLayoutComponent);

var __decorate$44 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$27 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.TdLayoutNavComponent = (function () {
    function TdLayoutNavComponent(_layout) {
        this._layout = _layout;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
        /**
         * navigationRoute?: string
         *
         * option to set the combined logo, icon, toolbar title route
         * defaults to '/'
         */
        this.navigationRoute = '/';
    }
    Object.defineProperty(TdLayoutNavComponent.prototype, "isMainSidenavAvailable", {
        /**
         * Checks if there is a [TdLayoutComponent] as parent.
         */
        get: function () {
            return !!this._layout;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
     */
    TdLayoutNavComponent.prototype.openMainSidenav = function () {
        this._layout.open();
    };
    return TdLayoutNavComponent;
}());
__decorate$44([
    _angular_core.Input('toolbarTitle'),
    __metadata$27("design:type", String)
], exports.TdLayoutNavComponent.prototype, "toolbarTitle", void 0);
__decorate$44([
    _angular_core.Input('icon'),
    __metadata$27("design:type", String)
], exports.TdLayoutNavComponent.prototype, "icon", void 0);
__decorate$44([
    _angular_core.Input('logo'),
    __metadata$27("design:type", String)
], exports.TdLayoutNavComponent.prototype, "logo", void 0);
__decorate$44([
    _angular_core.Input('color'),
    __metadata$27("design:type", String)
], exports.TdLayoutNavComponent.prototype, "color", void 0);
__decorate$44([
    _angular_core.Input('navigationRoute'),
    __metadata$27("design:type", String)
], exports.TdLayoutNavComponent.prototype, "navigationRoute", void 0);
exports.TdLayoutNavComponent = __decorate$44([
    _angular_core.Component({
        selector: 'td-layout-nav',
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host .td-menu-button { margin-left: 0px; } "],
        template: "<div layout=\"column\" layout-fill> <md-toolbar [color]=\"color\"> <button md-icon-button class=\"td-menu-button\" *ngIf=\"isMainSidenavAvailable\" (click)=\"openMainSidenav()\"> <md-icon class=\"md-24\">menu</md-icon> </button> <md-icon *ngIf=\"icon\" [routerLink]=\"navigationRoute\" class=\"cursor-pointer\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo cursor-pointer\" [svgIcon]=\"logo\" [routerLink]=\"navigationRoute\"></md-icon> <span *ngIf=\"toolbarTitle\" class=\"cursor-pointer\" [routerLink]=\"navigationRoute\">{{toolbarTitle}}</span> <ng-content select=\"[toolbar-content], [td-toolbar-content]\"></ng-content> </md-toolbar> <div flex layout=\"column\" class=\"content md-content\"> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer\"></ng-content> </div> ",
    }),
    __param$2(0, _angular_core.Optional()), __param$2(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdLayoutComponent; }))),
    __metadata$27("design:paramtypes", [exports.TdLayoutComponent])
], exports.TdLayoutNavComponent);

var __decorate$45 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$28 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.TdLayoutNavListComponent = (function () {
    function TdLayoutNavListComponent(_layout) {
        this._layout = _layout;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MdSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MdSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%" ("%" is not well supported yet as stated in the layout docs)
         * Defaults to "350px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '350px';
        /**
         * navigationRoute?: string
         *
         * option to set the combined logo, icon, toolbar title route
         * defaults to '/'
         */
        this.navigationRoute = '/';
    }
    Object.defineProperty(TdLayoutNavListComponent.prototype, "isMainSidenavAvailable", {
        /**
         * Checks if there is a [TdLayoutComponent] as parent.
         */
        get: function () {
            return !!this._layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.toggle = function () {
        return this._sideNav.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.open = function () {
        return this._sideNav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.close = function () {
        return this._sideNav.close();
    };
    /**
     * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
     */
    TdLayoutNavListComponent.prototype.openMainSidenav = function () {
        this._layout.open();
    };
    return TdLayoutNavListComponent;
}());
__decorate$45([
    _angular_core.ViewChild(_angular_material.MdSidenav),
    __metadata$28("design:type", _angular_material.MdSidenav)
], exports.TdLayoutNavListComponent.prototype, "_sideNav", void 0);
__decorate$45([
    _angular_core.Input('toolbarTitle'),
    __metadata$28("design:type", String)
], exports.TdLayoutNavListComponent.prototype, "toolbarTitle", void 0);
__decorate$45([
    _angular_core.Input('icon'),
    __metadata$28("design:type", String)
], exports.TdLayoutNavListComponent.prototype, "icon", void 0);
__decorate$45([
    _angular_core.Input('logo'),
    __metadata$28("design:type", String)
], exports.TdLayoutNavListComponent.prototype, "logo", void 0);
__decorate$45([
    _angular_core.Input('color'),
    __metadata$28("design:type", String)
], exports.TdLayoutNavListComponent.prototype, "color", void 0);
__decorate$45([
    _angular_core.Input('mode'),
    __metadata$28("design:type", String)
], exports.TdLayoutNavListComponent.prototype, "mode", void 0);
__decorate$45([
    _angular_core.Input('opened'),
    __metadata$28("design:type", Boolean)
], exports.TdLayoutNavListComponent.prototype, "opened", void 0);
__decorate$45([
    _angular_core.Input('sidenavWidth'),
    __metadata$28("design:type", String)
], exports.TdLayoutNavListComponent.prototype, "sidenavWidth", void 0);
__decorate$45([
    _angular_core.Input('navigationRoute'),
    __metadata$28("design:type", String)
], exports.TdLayoutNavListComponent.prototype, "navigationRoute", void 0);
exports.TdLayoutNavListComponent = __decorate$45([
    _angular_core.Component({
        selector: 'td-layout-nav-list',
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host md-sidenav-container.td-layout-nav-list > md-sidenav.mat-sidenav-opened, :host md-sidenav-container.td-layout-nav-list > md-sidenav.mat-sidenav-opening, :host md-sidenav-container.td-layout-nav-list > md-sidenav.mat-sidenav-closed, :host md-sidenav-container.td-layout-nav-list > md-sidenav.mat-sidenav-closing { box-shadow: none; } :host .td-menu-button { margin-left: 0px; } :host .list { text-align: start; } :host /deep/ md-sidenav-container.td-layout-nav-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host /deep/ md-sidenav-container.td-layout-nav-list > .mat-sidenav-content { flex-grow: 1; } :host /deep/ md-sidenav-container.td-layout-nav-list > md-sidenav > cdk-focus-trap, :host /deep/ md-sidenav-container.td-layout-nav-list > md-sidenav > cdk-focus-trap > div { box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -moz-box; display: -ms-flexbox; display: flex; flex-direction: column; } "],
        template: "<div layout=\"column\" layout-fill> <div flex layout=\"column\" class=\"content md-content\"> <md-sidenav-container fullscreen class=\"td-layout-nav-list\" layout=\"row\" flex> <md-sidenav #sidenav align=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" layout=\"column\"  layout-fill class=\"md-whiteframe-z1\"> <md-toolbar [color]=\"color\" class=\"md-whiteframe-z1\"> <button md-icon-button class=\"td-menu-button\" *ngIf=\"isMainSidenavAvailable\" (click)=\"openMainSidenav()\"> <md-icon class=\"md-24\">menu</md-icon> </button> <md-icon *ngIf=\"icon\" [routerLink]=\"navigationRoute\" class=\"cursor-pointer\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo cursor-pointer\" [svgIcon]=\"logo\" [routerLink]=\"navigationRoute\"></md-icon> <span *ngIf=\"toolbarTitle\" class=\"cursor-pointer\" [routerLink]=\"navigationRoute\">{{toolbarTitle}}</span> <ng-content select=\"[list-toolbar-content], [td-sidenav-toolbar-content]\"></ng-content> </md-toolbar> <div flex class=\"list md-content\"> <ng-content select=\"[list-items], [td-sidenav-content]\"></ng-content> </div> </md-sidenav> <div layout=\"column\" layout-fill class=\"md-content\"> <md-toolbar [color]=\"color\" class=\"md-whiteframe-z1\"> <button md-icon-button class=\"td-menu-button\" *ngIf=\"!sidenav.opened\" (click)=\"open()\"> <md-icon class=\"md-24\">arrow_back</md-icon> </button> <ng-content select=\"[nav-toolbar-content], [td-toolbar-content]\"></ng-content> </md-toolbar> <div class=\"md-content\" flex> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </md-sidenav-container> </div> <ng-content select=\"td-layout-footer\"></ng-content> </div>",
    }),
    __param$3(0, _angular_core.Optional()), __param$3(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdLayoutComponent; }))),
    __metadata$28("design:paramtypes", [exports.TdLayoutComponent])
], exports.TdLayoutNavListComponent);

var __decorate$46 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$29 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdLayoutCardOverComponent = (function () {
    function TdLayoutCardOverComponent() {
        /**
         * cardWidth?: string
         *
         * Card flex width in %.
         * Defaults to 70%.
         */
        this.cardWidth = 70;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    return TdLayoutCardOverComponent;
}());
__decorate$46([
    _angular_core.Input('cardTitle'),
    __metadata$29("design:type", String)
], exports.TdLayoutCardOverComponent.prototype, "cardTitle", void 0);
__decorate$46([
    _angular_core.Input('cardSubtitle'),
    __metadata$29("design:type", String)
], exports.TdLayoutCardOverComponent.prototype, "cardSubtitle", void 0);
__decorate$46([
    _angular_core.Input('cardWidth'),
    __metadata$29("design:type", Number)
], exports.TdLayoutCardOverComponent.prototype, "cardWidth", void 0);
__decorate$46([
    _angular_core.Input('color'),
    __metadata$29("design:type", String)
], exports.TdLayoutCardOverComponent.prototype, "color", void 0);
exports.TdLayoutCardOverComponent = __decorate$46([
    _angular_core.Component({
        selector: 'td-layout-card-over',
        styles: [":host { position: relative; display: block; z-index: 2; width: 100%; min-height: 100%; height: 100%; } :host [td-after-card] { display: block; } .margin { margin-top: -64px; } "],
        template: "<md-toolbar [color]=\"color\"> </md-toolbar> <div class=\"margin\" layout-gt-xs=\"row\" layout-align-gt-xs=\"center start\" layout-fill> <div [attr.flex-gt-xs]=\"cardWidth\"> <md-card> <md-card-title *ngIf=\"cardTitle\">{{cardTitle}}</md-card-title> <md-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</md-card-subtitle> <md-divider *ngIf=\"cardTitle || cardSubtitle\"></md-divider> <ng-content></ng-content> </md-card> <ng-content select=\"[after-card], [td-after-card]\"></ng-content> </div> </div> ",
    })
], exports.TdLayoutCardOverComponent);

var __decorate$47 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$30 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdLayoutManageListComponent = (function () {
    function TdLayoutManageListComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MdSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MdSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%" ("%" is not well supported yet as stated in the layout docs)
         * Defaults to "257px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '257px';
    }
    Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.toggle = function () {
        return this._sideNav.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.open = function () {
        return this._sideNav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.close = function () {
        return this._sideNav.close();
    };
    return TdLayoutManageListComponent;
}());
__decorate$47([
    _angular_core.ViewChild(_angular_material.MdSidenav),
    __metadata$30("design:type", _angular_material.MdSidenav)
], exports.TdLayoutManageListComponent.prototype, "_sideNav", void 0);
__decorate$47([
    _angular_core.Input('mode'),
    __metadata$30("design:type", String)
], exports.TdLayoutManageListComponent.prototype, "mode", void 0);
__decorate$47([
    _angular_core.Input('opened'),
    __metadata$30("design:type", Boolean)
], exports.TdLayoutManageListComponent.prototype, "opened", void 0);
__decorate$47([
    _angular_core.Input('sidenavWidth'),
    __metadata$30("design:type", String)
], exports.TdLayoutManageListComponent.prototype, "sidenavWidth", void 0);
exports.TdLayoutManageListComponent = __decorate$47([
    _angular_core.Component({
        selector: 'td-layout-manage-list',
        styles: [":host { display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host md-sidenav-container.td-layout-manage-list > md-sidenav.mat-sidenav-opened, :host md-sidenav-container.td-layout-manage-list > md-sidenav.mat-sidenav-opening, :host md-sidenav-container.td-layout-manage-list > md-sidenav.mat-sidenav-closed, :host md-sidenav-container.td-layout-manage-list > md-sidenav.mat-sidenav-closing { box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2); } :host .td-menu-button { margin-left: 0px; } :host .list { text-align: start; } :host /deep/ md-sidenav-container.td-layout-manage-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host /deep/ md-sidenav-container.td-layout-manage-list > .mat-sidenav-content { flex-grow: 1; } :host /deep/ md-sidenav-container.td-layout-manage-list > md-sidenav > cdk-focus-trap, :host /deep/ md-sidenav-container.td-layout-manage-list > md-sidenav > cdk-focus-trap > div { box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -moz-box; display: -ms-flexbox; display: flex; flex-direction: column; } :host /deep/ md-nav-list a[md-list-item] .mat-list-item-content { font-size: 14px; } "],
        template: "<md-sidenav-container fullscreen class=\"td-layout-manage-list md-content\" flex layout=\"row\"> <md-sidenav #sidenav align=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" layout=\"column\" layout-fill class=\"md-whiteframe-z1\"> <ng-content select=\"md-toolbar[list-items], md-toolbar[td-sidenav-content]\"></ng-content> <div flex class=\"list md-content\"> <ng-content select=\"[list-items], [td-sidenav-content]\"></ng-content> </div> </md-sidenav> <div layout=\"column\" layout-fill class=\"md-content\"> <md-toolbar class=\"md-whiteframe-z1\"> <button md-icon-button class=\"td-menu-button\" *ngIf=\"!sidenav.opened\" (click)=\"open()\"> <md-icon class=\"md-24\">arrow_back</md-icon> </button> <ng-content select=\"[toolbar-buttons], [td-toolbar-content]\"></ng-content> </md-toolbar> <div class=\"md-content\" flex> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </md-sidenav-container> ",
    })
], exports.TdLayoutManageListComponent);

var __decorate$48 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.TdLayoutFooterComponent = (function () {
    function TdLayoutFooterComponent() {
    }
    return TdLayoutFooterComponent;
}());
exports.TdLayoutFooterComponent = __decorate$48([
    _angular_core.Component({
        /* tslint:disable-next-line */
        selector: 'td-layout-footer,td-layout-footer-inner',
        styles: [":host { display: block; } .td-layout-footer { padding: 10px 16px; } "],
        template: "<div class=\"td-layout-footer\"> <ng-content></ng-content> </div> ",
    })
], exports.TdLayoutFooterComponent);

var __decorate$49 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$31 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.TdNavigationDrawerMenuDirective = (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    return TdNavigationDrawerMenuDirective;
}());
exports.TdNavigationDrawerMenuDirective = __decorate$49([
    _angular_core.Directive({
        selector: '[td-navigation-drawer-menu]',
    })
], exports.TdNavigationDrawerMenuDirective);
exports.TdNavigationDrawerComponent = (function () {
    function TdNavigationDrawerComponent(_layout, _sanitize) {
        this._layout = _layout;
        this._sanitize = _sanitize;
        this._menuToggled = false;
        /**
         * navigationRoute?: string
         *
         * option to set the combined logo, icon, toolbar title route
         * defaults to '/'
         */
        this.navigationRoute = '/';
    }
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
        get: function () {
            return this._menuToggled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
        /**
         * Checks if there is a [TdNavigationDrawerMenuDirective] as content.
         */
        get: function () {
            return this._drawerMenu.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
        /**
         * Checks if there is a background image for the toolbar.
         */
        get: function () {
            return !!this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundUrl", {
        /**
         * backgroundUrl?: SafeResourceUrl
         *
         * image to be displayed as the background of the toolbar.
         * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
         */
        set: function (backgroundUrl) {
            if (backgroundUrl) {
                var sanitizedUrl = this._sanitize.sanitize(_angular_core.SecurityContext.RESOURCE_URL, backgroundUrl);
                this._backgroundImage = this._sanitize.sanitize(_angular_core.SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
        get: function () {
            return this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    TdNavigationDrawerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._closeSubscription = this._layout.sidenav.onClose.subscribe(function () {
            _this._menuToggled = false;
        });
    };
    TdNavigationDrawerComponent.prototype.ngOnDestroy = function () {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    };
    TdNavigationDrawerComponent.prototype.toggleMenu = function () {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdNavigationDrawerComponent.prototype.toggle = function () {
        return this._layout.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdNavigationDrawerComponent.prototype.open = function () {
        return this._layout.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdNavigationDrawerComponent.prototype.close = function () {
        return this._layout.close();
    };
    return TdNavigationDrawerComponent;
}());
__decorate$49([
    _angular_core.ContentChildren(exports.TdNavigationDrawerMenuDirective),
    __metadata$31("design:type", _angular_core.QueryList)
], exports.TdNavigationDrawerComponent.prototype, "_drawerMenu", void 0);
__decorate$49([
    _angular_core.Input('sidenavTitle'),
    __metadata$31("design:type", String)
], exports.TdNavigationDrawerComponent.prototype, "sidenavTitle", void 0);
__decorate$49([
    _angular_core.Input('icon'),
    __metadata$31("design:type", String)
], exports.TdNavigationDrawerComponent.prototype, "icon", void 0);
__decorate$49([
    _angular_core.Input('logo'),
    __metadata$31("design:type", String)
], exports.TdNavigationDrawerComponent.prototype, "logo", void 0);
__decorate$49([
    _angular_core.Input('color'),
    __metadata$31("design:type", String)
], exports.TdNavigationDrawerComponent.prototype, "color", void 0);
__decorate$49([
    _angular_core.Input('navigationRoute'),
    __metadata$31("design:type", String)
], exports.TdNavigationDrawerComponent.prototype, "navigationRoute", void 0);
__decorate$49([
    _angular_core.Input('backgroundUrl'),
    __metadata$31("design:type", Object),
    __metadata$31("design:paramtypes", [Object])
], exports.TdNavigationDrawerComponent.prototype, "backgroundUrl", null);
__decorate$49([
    _angular_core.Input('name'),
    __metadata$31("design:type", String)
], exports.TdNavigationDrawerComponent.prototype, "name", void 0);
__decorate$49([
    _angular_core.Input('email'),
    __metadata$31("design:type", String)
], exports.TdNavigationDrawerComponent.prototype, "email", void 0);
exports.TdNavigationDrawerComponent = __decorate$49([
    _angular_core.Component({
        selector: 'td-navigation-drawer',
        styles: [":host { width: 100%; } :host md-toolbar { padding: 16px; } :host md-toolbar.td-toolbar-background { background-repeat: no-repeat; background-size: cover; } :host md-toolbar /deep/ > .mat-toolbar-layout > md-toolbar-row { height: auto !important; } "],
        template: "<md-toolbar [color]=\"color\" [style.background-image]=\"backgroundImage\" [class.td-toolbar-background]=\"!!isBackgroundAvailable\"> <div layout=\"column\" flex> <span *ngIf=\"icon || logo || sidenavTitle\" layout=\"row\" layout-align=\"start end\"> <md-icon *ngIf=\"icon\" (click)=\"close()\" [routerLink]=\"navigationRoute\" class=\"cursor-pointer\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo cursor-pointer\" [svgIcon]=\"logo\" (click)=\"close()\" [routerLink]=\"navigationRoute\"></md-icon> <span class=\"md-subhead cursor-pointer\" *ngIf=\"sidenavTitle\" (click)=\"close()\" [routerLink]=\"navigationRoute\">{{sidenavTitle}}</span> </span> <div class=\"md-body-2\" *ngIf=\"email && name\">{{name}}</div> <div class=\"md-body-1\" layout=\"row\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\"> <span flex>{{email || name}}</span> <button md-icon-button class=\"md-icon-button-mini\" *ngIf=\"isMenuAvailable\"> <md-icon *ngIf=\"!menuToggled\">arrow_drop_down</md-icon> <md-icon *ngIf=\"menuToggled\">arrow_drop_up</md-icon> </button> </div> </div> </md-toolbar> <div [@tdCollapse]=\"menuToggled\"> <ng-content></ng-content> </div> <div [@tdCollapse]=\"!menuToggled\"> <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content> </div>",
        animations: [TdCollapseAnimation()],
    }),
    __param$4(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdLayoutComponent; }))),
    __metadata$31("design:paramtypes", [exports.TdLayoutComponent,
        _angular_platformBrowser.DomSanitizer])
], exports.TdNavigationDrawerComponent);

var __decorate$42 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_LAYOUTS = [
    exports.TdLayoutComponent,
    exports.TdLayoutNavComponent,
    exports.TdLayoutNavListComponent,
    exports.TdLayoutCardOverComponent,
    exports.TdLayoutManageListComponent,
    exports.TdLayoutFooterComponent,
    exports.TdNavigationDrawerComponent,
    exports.TdNavigationDrawerMenuDirective,
];
exports.CovalentLayoutModule = CovalentLayoutModule_1 = (function () {
    function CovalentLayoutModule() {
    }
    CovalentLayoutModule.forRoot = function () {
        return {
            ngModule: CovalentLayoutModule_1,
            providers: [],
        };
    };
    return CovalentLayoutModule;
}());
exports.CovalentLayoutModule = CovalentLayoutModule_1 = __decorate$42([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_router.RouterModule,
            _angular_material.MdSidenavModule.forRoot(),
            _angular_material.MdToolbarModule.forRoot(),
            _angular_material.MdButtonModule.forRoot(),
            _angular_material.MdIconModule.forRoot(),
            _angular_material.MdCardModule.forRoot(),
            _angular_material.MdListModule.forRoot(),
        ],
        declarations: [
            TD_LAYOUTS,
        ],
        exports: [
            TD_LAYOUTS,
        ],
    })
], exports.CovalentLayoutModule);
var CovalentLayoutModule_1;

var __decorate$52 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$33 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

(function (LoadingType) {
    LoadingType[LoadingType["Circular"] = 'circular'] = "Circular";
    LoadingType[LoadingType["Linear"] = 'linear'] = "Linear";
})(exports.LoadingType || (exports.LoadingType = {}));

(function (LoadingMode) {
    LoadingMode[LoadingMode["Determinate"] = 'determinate'] = "Determinate";
    LoadingMode[LoadingMode["Indeterminate"] = 'indeterminate'] = "Indeterminate";
})(exports.LoadingMode || (exports.LoadingMode = {}));

(function (LoadingStrategy) {
    LoadingStrategy[LoadingStrategy["Overlay"] = 'overlay'] = "Overlay";
    LoadingStrategy[LoadingStrategy["Replace"] = 'replace'] = "Replace";
})(exports.LoadingStrategy || (exports.LoadingStrategy = {}));
var LoadingStyle;
(function (LoadingStyle) {
    LoadingStyle[LoadingStyle["FullScreen"] = 'fullscreen'] = "FullScreen";
    LoadingStyle[LoadingStyle["Overlay"] = 'overlay'] = "Overlay";
    LoadingStyle[LoadingStyle["None"] = 'none'] = "None";
})(LoadingStyle || (LoadingStyle = {}));
var TdLoadingComponent = (function () {
    function TdLoadingComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new rxjs_Subject.Subject();
        this._animationOut = new rxjs_Subject.Subject();
        this._mode = exports.LoadingMode.Indeterminate;
        this._defaultMode = exports.LoadingMode.Indeterminate;
        this._value = 0;
        /**
         * Flag for animation
         */
        this.animation = false;
        this.style = LoadingStyle.None;
        /**
         * type: LoadingType
         * Sets type of [TdLoadingComponent] rendered.
         */
        this.type = exports.LoadingType.Circular;
        /**
         * color: primary' | 'accent' | 'warn'
         * Sets theme color of [TdLoadingComponent] rendered.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLoadingComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        /**
         * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
         */
        set: function (mode) {
            this._defaultMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        /**
         * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
         */
        set: function (value) {
            this._value = value;
            // Check for changes for `OnPush` change detection
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    TdLoadingComponent.prototype.getHeight = function () {
        // Ignore height if style is `overlay` or `fullscreen`.
        // Add height if child elements have a height and style is `none`, else return default height.
        if (this.isOverlay() || this.isFullScreen()) {
            return undefined;
        }
        else {
            return this.height ? this.height + "px" : '150px';
        }
    };
    TdLoadingComponent.prototype.getCircleDiameter = function () {
        if (this.height) {
            var diameter = this.height * (2 / 3);
            if (diameter < 80) {
                return diameter + "px";
            }
        }
        return '80px';
    };
    TdLoadingComponent.prototype.isCircular = function () {
        return this.type === exports.LoadingType.Circular;
    };
    TdLoadingComponent.prototype.isLinear = function () {
        return this.type === exports.LoadingType.Linear;
    };
    TdLoadingComponent.prototype.isFullScreen = function () {
        return this.style === LoadingStyle.FullScreen;
    };
    TdLoadingComponent.prototype.isOverlay = function () {
        return this.style === LoadingStyle.Overlay;
    };
    TdLoadingComponent.prototype.animationComplete = function (event) {
        // Check to see if its "in" or "out" animation to execute the proper callback
        if (!event.fromState) {
            this.inAnimationCompleted();
        }
        else {
            this.outAnimationCompleted();
        }
    };
    TdLoadingComponent.prototype.inAnimationCompleted = function () {
        this._animationIn.next(undefined);
    };
    TdLoadingComponent.prototype.outAnimationCompleted = function () {
        var _this = this;
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        setTimeout(function () {
            _this._animationOut.next(undefined);
        });
    };
    /**
     * Starts in animation and returns an observable for completition event.
     */
    TdLoadingComponent.prototype.startInAnimation = function () {
        var _this = this;
        setTimeout(function () {
            _this.animation = true;
            // Check for changes for `OnPush` change detection
            _this._changeDetectorRef.markForCheck();
        });
        /* need to switch back to the selected mode, so we have saved it in another variable
        *  and then recover it. (issue with protractor)
        */
        this._mode = this._defaultMode;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationIn.asObservable();
    };
    /**
     * Starts out animation and returns an observable for completition event.
     */
    TdLoadingComponent.prototype.startOutAnimation = function () {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
        * inside md-progress-spinner stops and protractor doesnt timeout waiting to sync.
        */
        this._mode = exports.LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    };
    return TdLoadingComponent;
}());
TdLoadingComponent = __decorate$52([
    _angular_core.Component({
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        selector: 'td-loading',
        styles: [".td-loading-wrapper { position: relative; display: block; } .td-loading-wrapper.td-fullscreen { position: inherit; } .td-loading-wrapper.td-overlay .td-loading { position: absolute; margin: 0; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000; } .td-loading-wrapper.td-overlay .td-loading md-progress-bar { position: absolute; top: 0; left: 0; right: 0; } "],
        template: "<div class=\"td-loading-wrapper\" [style.min-height]=\"getHeight()\" [class.td-overlay]=\"isOverlay() || isFullScreen()\" [class.td-fullscreen]=\"isFullScreen()\"> <div [@tdFadeInOut]=\"animation\" (@tdFadeInOut.done)=\"animationComplete($event)\" class=\"td-loading\" layout=\"row\" layout-align=\"center center\" flex> <md-progress-spinner *ngIf=\"isCircular()\"  [mode]=\"mode\" [value]=\"value\"  [color]=\"color\"  [style.height]=\"getCircleDiameter()\" [style.width]=\"getCircleDiameter()\"> </md-progress-spinner> <md-progress-bar *ngIf=\"isLinear()\"  [mode]=\"mode\" [value]=\"value\" [color]=\"color\"> </md-progress-bar> </div> <template [cdkPortalHost]=\"content\"></template> </div>",
        animations: [
            TdFadeInOutAnimation(),
        ],
    }),
    __metadata$33("design:paramtypes", [_angular_core.ChangeDetectorRef])
], TdLoadingComponent);

var __decorate$53 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$34 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * NOTE: @internal usage only.
 */
var TdLoadingFactory = (function () {
    function TdLoadingFactory(_componentFactoryResolver, _overlay, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._overlay = _overlay;
        this._injector = _injector;
    }
    /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    TdLoadingFactory.prototype.createFullScreenComponent = function (options) {
        var _this = this;
        options.height = undefined;
        options.style = LoadingStyle.FullScreen;
        var loadingRef = this._initializeContext();
        var loading = false;
        var overlayRef;
        loadingRef.observable
            .subscribe(function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                overlayRef = _this._createOverlay();
                loadingRef.componentRef = overlayRef.attach(new _angular_material.ComponentPortal(TdLoadingComponent));
                _this._mapOptions(options, loadingRef.componentRef.instance);
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                var subs_1 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                    subs_1.unsubscribe();
                    loadingRef.componentRef.destroy();
                    overlayRef.detach();
                    overlayRef.dispose();
                });
            }
        });
        return loadingRef;
    };
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfecly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    TdLoadingFactory.prototype.createOverlayComponent = function (options, viewContainerRef, templateRef) {
        options.height = undefined;
        options.style = LoadingStyle.Overlay;
        var loadingRef = this._createComponent(options);
        var loading = false;
        loadingRef.componentRef.instance.content = new _angular_material.TemplatePortal(templateRef, viewContainerRef);
        viewContainerRef.clear();
        viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
        loadingRef.observable
            .subscribe(function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.startOutAnimation();
            }
        });
        return loadingRef;
    };
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    TdLoadingFactory.prototype.createReplaceComponent = function (options, viewContainerRef, templateRef) {
        var nativeElement = templateRef.elementRef.nativeElement;
        options.height = nativeElement.nextElementSibling ?
            nativeElement.nextElementSibling.scrollHeight : undefined;
        options.style = LoadingStyle.None;
        var loadingRef = this._createComponent(options);
        var loading = false;
        loadingRef.observable
            .subscribe(function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                var index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                if (index < 0) {
                    viewContainerRef.clear();
                    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                }
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                var subs_2 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                    subs_2.unsubscribe();
                    viewContainerRef.createEmbeddedView(templateRef);
                    viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                });
            }
        });
        return loadingRef;
    };
    /**
     * Creates a fullscreen overlay for the loading usage.
     */
    TdLoadingFactory.prototype._createOverlay = function () {
        var state$$1 = new _angular_material.OverlayState();
        state$$1.hasBackdrop = false;
        state$$1.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
        return this._overlay.create(state$$1);
    };
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     */
    TdLoadingFactory.prototype._createComponent = function (options) {
        var compRef = this._initializeContext();
        compRef.componentRef = this._componentFactoryResolver
            .resolveComponentFactory(TdLoadingComponent).create(this._injector);
        this._mapOptions(options, compRef.componentRef.instance);
        return compRef;
    };
    /**
     * Initialize context for loading component.
     */
    TdLoadingFactory.prototype._initializeContext = function () {
        var subject = new rxjs_Subject.Subject();
        return {
            observable: subject.asObservable(),
            subject: subject,
            componentRef: undefined,
            times: 0,
        };
    };
    /**
     * Maps configuration to the loading component instance.
     */
    TdLoadingFactory.prototype._mapOptions = function (options, instance) {
        instance.style = options.style;
        if (options.type !== undefined) {
            instance.type = options.type;
        }
        if (options.height !== undefined) {
            instance.height = options.height;
        }
        if (options.mode !== undefined) {
            instance.mode = options.mode;
        }
        if (options.color !== undefined) {
            instance.color = options.color;
        }
    };
    return TdLoadingFactory;
}());
TdLoadingFactory = __decorate$53([
    _angular_core.Injectable(),
    __metadata$34("design:paramtypes", [_angular_core.ComponentFactoryResolver,
        _angular_material.Overlay,
        _angular_core.Injector])
], TdLoadingFactory);

var __extends$3 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$51 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$32 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TdLoadingConfig = (function () {
    function TdLoadingConfig(config) {
        this.name = config.name;
        if (!this.name) {
            throw Error('Name is required for [TdLoading] configuration.');
        }
        this.mode = config.mode ? config.mode : exports.LoadingMode.Indeterminate;
        this.type = config.type ? config.type : exports.LoadingType.Circular;
        this.color = config.color ? config.color : 'primary';
    }
    return TdLoadingConfig;
}());
var TdLoadingDirectiveConfig = (function (_super) {
    __extends$3(TdLoadingDirectiveConfig, _super);
    function TdLoadingDirectiveConfig(config) {
        var _this = _super.call(this, config) || this;
        _this.strategy = config.strategy ? config.strategy : exports.LoadingStrategy.Replace;
        return _this;
    }
    return TdLoadingDirectiveConfig;
}(TdLoadingConfig));
exports.TdLoadingService = (function () {
    function TdLoadingService(_loadingFactory) {
        this._loadingFactory = _loadingFactory;
        this._context = {};
        this.create({
            name: 'td-loading-main',
        });
    }
    /**
     * params:
     * - config: ILoadingDirectiveConfig
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     *
     * NOTE: @internal usage only.
     */
    TdLoadingService.prototype.createComponent = function (config, viewContainerRef, templateRef) {
        var directiveConfig = new TdLoadingDirectiveConfig(config);
        if (this._context[directiveConfig.name]) {
            throw Error("Name duplication: [TdLoading] directive has a name conflict with " + directiveConfig.name + ".");
        }
        if (directiveConfig.strategy === exports.LoadingStrategy.Overlay) {
            this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
        }
        else {
            this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef);
        }
        return this._context[directiveConfig.name];
    };
    /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     */
    TdLoadingService.prototype.create = function (config) {
        var fullscreenConfig = new TdLoadingConfig(config);
        this.removeComponent(fullscreenConfig.name);
        this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
    };
    /**
     * @deprecated in 1.0.0-beta.1
     *
     * Please use the `create()` method.
     */
    TdLoadingService.prototype.createOverlayComponent = function (config, viewContainerRef) {
        /* tslint:disable-next-line */
        console.warn("createOverlayComponent() is deprecated.  Please use create() instead");
        this.create(config);
    };
    /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     */
    TdLoadingService.prototype.removeComponent = function (name) {
        if (this._context[name]) {
            this._context[name].subject.unsubscribe();
            if (this._context[name].componentRef) {
                this._context[name].componentRef.destroy();
            }
            this._context[name] = undefined;
            delete this._context[name];
        }
    };
    /**
     * params:
     * - name: string
     * - registers?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass registers argument to set a number of register calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.register()
     */
    TdLoadingService.prototype.register = function (name, registers) {
        if (name === void 0) { name = 'td-loading-main'; }
        if (registers === void 0) { registers = 1; }
        if (this._context[name]) {
            registers = registers < 1 ? 1 : registers;
            this._context[name].times += registers;
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        return false;
    };
    /**
     * params:
     * - name: string
     * - resolves?: number
     * returns: true if successful
     *
     * Registers a request for the loading mask referenced by the name parameter.
     * Can optionally pass resolves argument to set a number of resolve calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.register()
     */
    TdLoadingService.prototype.resolve = function (name, resolves) {
        if (name === void 0) { name = 'td-loading-main'; }
        if (resolves === void 0) { resolves = 1; }
        if (this._context[name]) {
            resolves = resolves < 1 ? 1 : resolves;
            if (this._context[name].times > 0) {
                var times = this._context[name].times;
                times -= resolves;
                this._context[name].times = times < 0 ? 0 : times;
            }
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        return false;
    };
    /**
     * params:
     * - name: string
     * - value: number
     * returns: true if successful
     *
     * Set value on a loading mask referenced by the name parameter.
     * Usage only available if its mode is 'determinate' and if loading is showing.
     */
    TdLoadingService.prototype.setValue = function (name, value) {
        if (this._context[name]) {
            var instance = this._context[name].componentRef.instance;
            if (instance.mode === exports.LoadingMode.Determinate && instance.animation) {
                instance.value = value;
                return true;
            }
        }
        return false;
    };
    return TdLoadingService;
}());
exports.TdLoadingService = __decorate$51([
    _angular_core.Injectable(),
    __metadata$32("design:paramtypes", [TdLoadingFactory])
], exports.TdLoadingService);

var __decorate$54 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$35 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TdLoadingDirective = (function () {
    function TdLoadingDirective(_viewContainerRef, _templateRef, _loadingService) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._loadingService = _loadingService;
        /**
         * tdLoadingColor?: "primary" | "accent" | "warn"
         * Sets the theme color of the loading component. Defaults to "primary"
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLoadingDirective.prototype, "name", {
        /**
         * tdLoading?: string
         * Name reference of the loading mask, used to register/resolve requests to the mask.
         */
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "typeDeprecated", {
        /**
         * @deprecated in 1.0.0-beta.1
         *
         * Please use the `tdLoadingType` method.
         */
        set: function (type) {
            /* tslint:disable-next-line */
            console.warn("loadingType is deprecated.  Please use tdLoadingType instead");
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "type", {
        /**
         * tdLoadingType?: LoadingType or ['linear' | 'circular']
         * Sets the type of loading mask depending on value.
         * Defaults to [LoadingType.Circular | 'circular'].
         */
        set: function (type) {
            switch (type) {
                case exports.LoadingType.Linear:
                    this._type = exports.LoadingType.Linear;
                    break;
                default:
                    this._type = exports.LoadingType.Circular;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "modeDeprecated", {
        /**
         * @deprecated in 1.0.0-beta.1
         *
         * Please use the `tdLoadingMode` method.
         */
        set: function (mode) {
            /* tslint:disable-next-line */
            console.warn("loadingMode is deprecated.  Please use tdLoadingMode instead");
            this.mode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "mode", {
        /**
         * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
         * Sets the mode of loading mask depending on value.
         * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
         */
        set: function (mode) {
            switch (mode) {
                case exports.LoadingMode.Determinate:
                    this._mode = exports.LoadingMode.Determinate;
                    break;
                default:
                    this._mode = exports.LoadingMode.Indeterminate;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "strategy", {
        /**
         * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
         * Sets the strategy of loading mask depending on value.
         * Defaults to [LoadingMode.Replace | 'replace'].
         */
        set: function (stategy) {
            switch (stategy) {
                case exports.LoadingStrategy.Overlay:
                    this._strategy = exports.LoadingStrategy.Overlay;
                    break;
                default:
                    this._strategy = exports.LoadingStrategy.Replace;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     */
    TdLoadingDirective.prototype.ngOnInit = function () {
        this._registerComponent();
    };
    /**
     * Remove component when directive is destroyed.
     */
    TdLoadingDirective.prototype.ngOnDestroy = function () {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    };
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     */
    TdLoadingDirective.prototype._registerComponent = function () {
        if (!this._name) {
            throw new Error('Name is needed to register loading directive');
        }
        // Check if `TdLoadingComponent` has been created before trying to add one again.
        // There is a weird edge case when using `[routerLinkActive]` that calls the `ngOnInit` twice in a row
        if (!this._loadingRef) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
            this._loadingRef = this._loadingService.createComponent({
                name: this._name,
                type: this._type,
                mode: this._mode,
                color: this.color,
                strategy: this._strategy,
            }, this._viewContainerRef, this._templateRef);
        }
    };
    return TdLoadingDirective;
}());
__decorate$54([
    _angular_core.Input('tdLoading'),
    __metadata$35("design:type", String),
    __metadata$35("design:paramtypes", [String])
], TdLoadingDirective.prototype, "name", null);
__decorate$54([
    _angular_core.Input('loadingType'),
    __metadata$35("design:type", Number),
    __metadata$35("design:paramtypes", [Number])
], TdLoadingDirective.prototype, "typeDeprecated", null);
__decorate$54([
    _angular_core.Input('tdLoadingType'),
    __metadata$35("design:type", Number),
    __metadata$35("design:paramtypes", [Number])
], TdLoadingDirective.prototype, "type", null);
__decorate$54([
    _angular_core.Input('loadingMode'),
    __metadata$35("design:type", Number),
    __metadata$35("design:paramtypes", [Number])
], TdLoadingDirective.prototype, "modeDeprecated", null);
__decorate$54([
    _angular_core.Input('tdLoadingMode'),
    __metadata$35("design:type", Number),
    __metadata$35("design:paramtypes", [Number])
], TdLoadingDirective.prototype, "mode", null);
__decorate$54([
    _angular_core.Input('tdLoadingStrategy'),
    __metadata$35("design:type", Number),
    __metadata$35("design:paramtypes", [Number])
], TdLoadingDirective.prototype, "strategy", null);
__decorate$54([
    _angular_core.Input('tdLoadingColor'),
    __metadata$35("design:type", String)
], TdLoadingDirective.prototype, "color", void 0);
TdLoadingDirective = __decorate$54([
    _angular_core.Directive({
        selector: '[tdLoading]',
    }),
    __metadata$35("design:paramtypes", [_angular_core.ViewContainerRef,
        _angular_core.TemplateRef,
        exports.TdLoadingService])
], TdLoadingDirective);

var __decorate$50 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_LOADING = [
    TdLoadingComponent,
    TdLoadingDirective,
];
var TD_LOADING_ENTRY_COMPONENTS = [
    TdLoadingComponent,
];
exports.CovalentLoadingModule = CovalentLoadingModule_1 = (function () {
    function CovalentLoadingModule() {
    }
    CovalentLoadingModule.forRoot = function () {
        return {
            ngModule: CovalentLoadingModule_1,
            providers: [exports.TdLoadingService, TdLoadingFactory],
        };
    };
    return CovalentLoadingModule;
}());
exports.CovalentLoadingModule = CovalentLoadingModule_1 = __decorate$50([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_material.MdProgressBarModule.forRoot(),
            _angular_material.MdProgressSpinnerModule.forRoot(),
            _angular_material.OverlayModule.forRoot(),
            _angular_material.PortalModule.forRoot(),
        ],
        declarations: [
            TD_LOADING,
        ],
        exports: [
            TD_LOADING,
        ],
        entryComponents: [
            TD_LOADING_ENTRY_COMPONENTS,
        ],
    })
], exports.CovalentLoadingModule);
var CovalentLoadingModule_1;

var __decorate$56 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$36 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdMediaService = (function () {
    function TdMediaService(_ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this._queryMap = new Map();
        this._querySources = {};
        this._queryObservables = {};
        this._queryMap.set('xs', '(max-width: 599px)');
        this._queryMap.set('gt-xs', '(min-width: 600px)');
        this._queryMap.set('sm', '(min-width: 600px) and (max-width: 959px)');
        this._queryMap.set('gt-sm', '(min-width: 960px)');
        this._queryMap.set('md', '(min-width: 960px) and (max-width: 1279px)');
        this._queryMap.set('gt-md', '(min-width: 1280px)');
        this._queryMap.set('lg', '(min-width: 1280px) and (max-width: 1919px)');
        this._queryMap.set('gt-lg', '(min-width: 1920px)');
        this._queryMap.set('xl', '(min-width: 1920px)');
        this._queryMap.set('landscape', 'landscape');
        this._queryMap.set('portrait', 'portrait');
        this._queryMap.set('print', 'print');
        var running = false;
        window.onresize = function () {
            // way to prevent the resize event from triggering the match media if there is already one event running already.
            if (!running) {
                running = true;
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(function () {
                        _this._onResize();
                        running = false;
                    });
                }
                else {
                    setTimeout(function () {
                        _this._onResize();
                        running = false;
                    }, 66);
                }
            }
        };
    }
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     */
    TdMediaService.prototype.query = function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        return this._ngZone.run(function () {
            return window.matchMedia(query).matches;
        });
    };
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     */
    TdMediaService.prototype.registerQuery = function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        if (!this._querySources[query]) {
            this._querySources[query] = new rxjs_Subject.Subject();
            this._queryObservables[query] = this._querySources[query].asObservable();
        }
        return this._queryObservables[query];
    };
    /**
     * Trigger a match media event on all subscribed observables.
     */
    TdMediaService.prototype.broadcast = function () {
        this._onResize();
    };
    TdMediaService.prototype._onResize = function () {
        var _this = this;
        var _loop_1 = function (query) {
            this_1._ngZone.run(function () {
                _this._matchMediaTrigger(query);
            });
        };
        var this_1 = this;
        for (var query in this._querySources) {
            _loop_1(query);
        }
    };
    TdMediaService.prototype._matchMediaTrigger = function (query) {
        this._querySources[query].next(window.matchMedia(query).matches);
    };
    return TdMediaService;
}());
exports.TdMediaService = __decorate$56([
    _angular_core.Injectable(),
    __metadata$36("design:paramtypes", [_angular_core.NgZone])
], exports.TdMediaService);

var __decorate$57 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$37 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdMediaToggleDirective = (function () {
    function TdMediaToggleDirective(_renderer, _elementRef, _mediaService) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._mediaService = _mediaService;
        this._matches = false;
        this._attributes = {};
        this._styles = {};
        this._classes = [];
    }
    Object.defineProperty(TdMediaToggleDirective.prototype, "query", {
        /**
         * tdMediaToggle: string
         * Media query used to evaluate screen/window size.
         * Toggles attributes, classes and styles if media query is matched.
         */
        set: function (query) {
            if (!query) {
                throw new Error('Query needed for [tdMediaToggle] directive.');
            }
            this._query = query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "attributes", {
        /**
         * mediaAttributes: {[key: string]: string}
         * Attributes to be toggled when media query matches.
         */
        set: function (attributes) {
            this._attributes = attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "classes", {
        /**
         * mediaClasses: string[]
         * CSS Classes to be toggled when media query matches.
         */
        set: function (classes) {
            this._classes = classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "styles", {
        /**
         * mediaStyles: {[key: string]: string}
         * CSS Styles to be toggled when media query matches.
         */
        set: function (styles) {
            this._styles = styles;
        },
        enumerable: true,
        configurable: true
    });
    TdMediaToggleDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe(function (matches) {
            _this._mediaChange(matches);
        });
    };
    TdMediaToggleDirective.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    TdMediaToggleDirective.prototype._mediaChange = function (matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    };
    TdMediaToggleDirective.prototype._changeAttributes = function () {
        for (var attr in this._attributes) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, attr, this._matches ? this._attributes[attr] : undefined);
        }
    };
    TdMediaToggleDirective.prototype._changeClasses = function () {
        var _this = this;
        this._classes.forEach(function (className) {
            _this._renderer.setElementClass(_this._elementRef.nativeElement, className, _this._matches);
        });
    };
    TdMediaToggleDirective.prototype._changeStyles = function () {
        for (var style$$1 in this._styles) {
            this._renderer.setElementStyle(this._elementRef.nativeElement, style$$1, this._matches ? this._styles[style$$1] : undefined);
        }
    };
    return TdMediaToggleDirective;
}());
__decorate$57([
    _angular_core.Input('tdMediaToggle'),
    __metadata$37("design:type", String),
    __metadata$37("design:paramtypes", [String])
], exports.TdMediaToggleDirective.prototype, "query", null);
__decorate$57([
    _angular_core.Input('mediaAttributes'),
    __metadata$37("design:type", Object),
    __metadata$37("design:paramtypes", [Object])
], exports.TdMediaToggleDirective.prototype, "attributes", null);
__decorate$57([
    _angular_core.Input('mediaClasses'),
    __metadata$37("design:type", Array),
    __metadata$37("design:paramtypes", [Array])
], exports.TdMediaToggleDirective.prototype, "classes", null);
__decorate$57([
    _angular_core.Input('mediaStyles'),
    __metadata$37("design:type", Object),
    __metadata$37("design:paramtypes", [Object])
], exports.TdMediaToggleDirective.prototype, "styles", null);
exports.TdMediaToggleDirective = __decorate$57([
    _angular_core.Directive({
        selector: '[tdMediaToggle]',
    }),
    __metadata$37("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef, exports.TdMediaService])
], exports.TdMediaToggleDirective);

var __decorate$55 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_MEDIA = [
    exports.TdMediaToggleDirective,
];
exports.CovalentMediaModule = CovalentMediaModule_1 = (function () {
    function CovalentMediaModule() {
    }
    CovalentMediaModule.forRoot = function () {
        return {
            ngModule: CovalentMediaModule_1,
            providers: [exports.TdMediaService],
        };
    };
    return CovalentMediaModule;
}());
exports.CovalentMediaModule = CovalentMediaModule_1 = __decorate$55([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
        ],
        declarations: [
            TD_MEDIA,
        ],
        exports: [
            TD_MEDIA,
        ],
    })
], exports.CovalentMediaModule);
var CovalentMediaModule_1;

var __decorate$59 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.TdMenuComponent = (function () {
    function TdMenuComponent() {
    }
    return TdMenuComponent;
}());
exports.TdMenuComponent = __decorate$59([
    _angular_core.Component({
        selector: 'td-menu',
        template: "<div layout=\"column\"> <ng-content select=\"[td-menu-header]\"></ng-content> <md-divider></md-divider> <div class=\"td-menu-content\"> <ng-content></ng-content> </div> <md-divider></md-divider> <ng-content select=\"[td-menu-footer]\"></ng-content> </div>",
        styles: [":host { display: block; margin-top: -8px; margin-bottom: -8px; } :host /deep/ [td-menu-header] { padding: 8px; text-align: center; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content { height: auto; padding: 8px; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content .mat-list-text { padding-right: 0px; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line] { margin-top: 4px; } .td-menu-content { max-height: calc(50vh); overflow-y: auto; } "],
    })
], exports.TdMenuComponent);

var __decorate$58 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_MENU = [
    exports.TdMenuComponent,
];
exports.CovalentMenuModule = CovalentMenuModule_1 = (function () {
    function CovalentMenuModule() {
    }
    CovalentMenuModule.forRoot = function () {
        return {
            ngModule: CovalentMenuModule_1,
            providers: [],
        };
    };
    return CovalentMenuModule;
}());
exports.CovalentMenuModule = CovalentMenuModule_1 = __decorate$58([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_material.MdMenuModule.forRoot(),
            _angular_material.MdListModule.forRoot(),
        ],
        declarations: [
            TD_MENU,
        ],
        exports: [
            TD_MENU,
        ],
    })
], exports.CovalentMenuModule);
var CovalentMenuModule_1;

var __decorate$61 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$38 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

(function (TdNotificationCountPositionY) {
    TdNotificationCountPositionY[TdNotificationCountPositionY["Top"] = 'top'] = "Top";
    TdNotificationCountPositionY[TdNotificationCountPositionY["Bottom"] = 'bottom'] = "Bottom";
    TdNotificationCountPositionY[TdNotificationCountPositionY["Center"] = 'center'] = "Center";
})(exports.TdNotificationCountPositionY || (exports.TdNotificationCountPositionY = {}));

(function (TdNotificationCountPositionX) {
    TdNotificationCountPositionX[TdNotificationCountPositionX["Before"] = 'before'] = "Before";
    TdNotificationCountPositionX[TdNotificationCountPositionX["After"] = 'after'] = "After";
    TdNotificationCountPositionX[TdNotificationCountPositionX["Center"] = 'center'] = "Center";
})(exports.TdNotificationCountPositionX || (exports.TdNotificationCountPositionX = {}));
exports.TdNotificationCountComponent = (function () {
    function TdNotificationCountComponent() {
        this._notifications = 0;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         */
        this.color = 'warn';
    }
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
        get: function () {
            return this._positionX;
        },
        /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         */
        set: function (positionX) {
            this._positionX = positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
        get: function () {
            return this._positionY;
        },
        /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         */
        set: function (positionY) {
            this._positionY = positionY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
        /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         */
        set: function (notifications) {
            this._notifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
        get: function () {
            return !this.show && !this._hasContent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
        /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         */
        get: function () {
            return this._notifications === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
        /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         */
        get: function () {
            if (this._notifications > 99) {
                return '99+';
            }
            return this._notifications.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
        /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         */
        get: function () {
            return this._notifications === true || (!isNaN(this._notifications) && this._notifications > 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     */
    TdNotificationCountComponent.prototype.ngAfterContentInit = function () {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? exports.TdNotificationCountPositionX.After : exports.TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? exports.TdNotificationCountPositionY.Top : exports.TdNotificationCountPositionY.Center;
        }
    };
    /**
     * Method to check if element has any kind of content (elements or text)
     */
    TdNotificationCountComponent.prototype._hasContent = function () {
        if (this.content) {
            var contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    };
    return TdNotificationCountComponent;
}());
__decorate$61([
    _angular_core.ViewChild('content'),
    __metadata$38("design:type", _angular_core.ElementRef)
], exports.TdNotificationCountComponent.prototype, "content", void 0);
__decorate$61([
    _angular_core.Input(),
    __metadata$38("design:type", String)
], exports.TdNotificationCountComponent.prototype, "color", void 0);
__decorate$61([
    _angular_core.Input(),
    __metadata$38("design:type", Number),
    __metadata$38("design:paramtypes", [Number])
], exports.TdNotificationCountComponent.prototype, "positionX", null);
__decorate$61([
    _angular_core.Input(),
    __metadata$38("design:type", Number),
    __metadata$38("design:paramtypes", [Number])
], exports.TdNotificationCountComponent.prototype, "positionY", null);
__decorate$61([
    _angular_core.Input(),
    __metadata$38("design:type", Object),
    __metadata$38("design:paramtypes", [Object])
], exports.TdNotificationCountComponent.prototype, "notifications", null);
__decorate$61([
    _angular_core.HostBinding('class.td-notification-hidden'),
    __metadata$38("design:type", Boolean),
    __metadata$38("design:paramtypes", [])
], exports.TdNotificationCountComponent.prototype, "hideHost", null);
exports.TdNotificationCountComponent = __decorate$61([
    _angular_core.Component({
        selector: 'td-notification-count',
        styles: [":host { position: relative; display: block; text-align: center; min-width: 40px; height: 40px; } :host.td-notification-hidden { min-width: 0; } .td-notification-count { line-height: 21px; width: 20px; height: 20px; position: absolute; font-size: 10px; font-weight: 600; border-radius: 50%; z-index: 1; } .td-notification-count.td-notification-center-x { margin-left: auto; margin-right: auto; left: 0px; right: 0px; } .td-notification-count.td-notification-center-y { margin-top: auto; margin-bottom: auto; top: 0px; bottom: 0px; } .td-notification-count.td-notification-top { top: 0px; } .td-notification-count.td-notification-bottom { bottom: 0px; } .td-notification-count.td-notification-before { left: 0px; } .td-notification-count.td-notification-after { right: 0px; } .td-notification-count.td-notification-no-count { width: 8px; height: 8px; } .td-notification-count.td-notification-no-count.td-notification-top { top: 8px; } .td-notification-count.td-notification-no-count.td-notification-bottom { bottom: 8px; } .td-notification-count.td-notification-no-count.td-notification-before { left: 8px; } .td-notification-count.td-notification-no-count.td-notification-after { right: 8px; } /deep/ [dir='rtl'] .td-notification-count.td-notification-before { right: 0px; left: auto; } /deep/ [dir='rtl'] .td-notification-count.td-notification-after { left: 0px; right: auto; } /deep/ [dir='rtl'] .td-notification-count.td-notification-no-count.td-notification-before { right: 8px; left: auto; } /deep/ [dir='rtl'] .td-notification-count.td-notification-no-count.td-notification-after { left: 8px; right: auto; } .td-notification-content, .td-notification-content /deep/ > * { line-height: 40px; } "],
        template: "<div #content class=\"td-notification-content\"> <ng-content></ng-content> </div> <div *ngIf=\"show\" class=\"td-notification-count mat-{{color}}\" [class.td-notification-top]=\"positionY === 'top'\" [class.td-notification-bottom]=\"positionY === 'bottom'\" [class.td-notification-before]=\"positionX === 'before'\" [class.td-notification-after]=\"positionX === 'after'\" [class.td-notification-center-y]=\"positionY === 'center'\" [class.td-notification-center-x]=\"positionX === 'center'\" [class.td-notification-no-count]=\"noCount\"> {{noCount ? '' : notificationsDisplay}} </div>",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    })
], exports.TdNotificationCountComponent);

var __decorate$60 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_NOTIFICATIONS = [
    exports.TdNotificationCountComponent,
];
exports.CovalentNotificationsModule = CovalentNotificationsModule_1 = (function () {
    function CovalentNotificationsModule() {
    }
    CovalentNotificationsModule.forRoot = function () {
        return {
            ngModule: CovalentNotificationsModule_1,
            providers: [],
        };
    };
    return CovalentNotificationsModule;
}());
exports.CovalentNotificationsModule = CovalentNotificationsModule_1 = __decorate$60([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
        ],
        declarations: [
            TD_NOTIFICATIONS,
        ],
        exports: [
            TD_NOTIFICATIONS,
        ],
    })
], exports.CovalentNotificationsModule);
var CovalentNotificationsModule_1;

var __decorate$63 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$39 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdPagingBarComponent = (function () {
    function TdPagingBarComponent() {
        this._pageSizes = [50, 100, 200, 500, 1000];
        this._pageSize = 50;
        this._total = 0;
        this._page = 1;
        this._fromRow = 1;
        this._toRow = 1;
        this._initialized = false;
        /**
         * pageSizeAll?: boolean
         * Shows or hides the 'all' menu item in the page size menu. Defaults to 'false'
         */
        this.pageSizeAll = false;
        /**
         * pageSizeAllText?: string
         * Text for the 'all' menu item in the page size menu. Defaults to 'All'
         */
        this.pageSizeAllText = 'All';
        /**
         * firstLast?: boolean
         * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
         */
        this.firstLast = true;
        /**
         * initialPage?: number
         * Sets starting page for the paging bar. Defaults to '1'
         */
        this.initialPage = 1;
        /**
         * change?: function
         * Method to be executed when page size changes or any button is clicked in the paging bar.
         * Emits an [IPageChangeEvent] implemented object.
         */
        this.onChange = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdPagingBarComponent.prototype, "pageSizes", {
        get: function () {
            return this._pageSizes;
        },
        /**
         * pageSizes?: number[]
         * Array that populates page size menu. Defaults to [50, 100, 200, 500, 1000]
         */
        set: function (pageSizes) {
            if (!(pageSizes instanceof Array)) {
                throw new Error('[pageSizes] needs to be an number array.');
            }
            this._pageSizes = pageSizes;
            this._pageSize = this._pageSizes[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        /**
         * pageSize?: number
         * Selected page size for the pagination. Defaults to first element of the [pageSizes] array.
         */
        set: function (pageSize) {
            if ((this._pageSizes.indexOf(pageSize) > -1 || this.total === pageSize) && this._pageSize !== pageSize) {
                this._pageSize = pageSize;
                this._page = 1;
                if (this._initialized) {
                    this._handleOnChange();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "total", {
        get: function () {
            return this._total;
        },
        /**
         * total: number
         * Total rows for the pagination.
         */
        set: function (total) {
            this._total = total;
            this._calculateRows();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "range", {
        /**
         * range: string
         * Returns the range of the rows.
         */
        get: function () {
            return (!this._toRow ? 0 : this._fromRow) + "-" + this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "page", {
        /**
         * page: number
         * Returns the current page.
         */
        get: function () {
            return this._page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "maxPage", {
        /**
         * page: number
         * Returns the max page for the current pageSize and total.
         */
        get: function () {
            return Math.ceil(this._total / this._pageSize);
        },
        enumerable: true,
        configurable: true
    });
    TdPagingBarComponent.prototype.ngOnInit = function () {
        this._page = this.initialPage;
        this._calculateRows();
        this._initialized = true;
    };
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.navigateToPage = function (page) {
        if (page === 1 || (page >= 1 && page <= this.maxPage)) {
            this._page = page;
            this._handleOnChange();
            return true;
        }
        return false;
    };
    /**
     * firstPage?: function
     * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.firstPage = function () {
        return this.navigateToPage(1);
    };
    /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.prevPage = function () {
        return this.navigateToPage(this._page - 1);
    };
    /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.nextPage = function () {
        return this.navigateToPage(this._page + 1);
    };
    /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.lastPage = function () {
        return this.navigateToPage(this.maxPage);
    };
    TdPagingBarComponent.prototype.isMinPage = function () {
        return this._page <= 1;
    };
    TdPagingBarComponent.prototype.isMaxPage = function () {
        return this._page >= this.maxPage;
    };
    TdPagingBarComponent.prototype._calculateRows = function () {
        var top = (this._pageSize * this._page);
        this._fromRow = (this._pageSize * (this._page - 1)) + 1;
        this._toRow = this._total > top ? top : this._total;
    };
    TdPagingBarComponent.prototype._handleOnChange = function () {
        this._calculateRows();
        var event = {
            page: this._page,
            maxPage: this.maxPage,
            pageSize: this._pageSize,
            total: this._total,
            fromRow: this._fromRow,
            toRow: this._toRow,
        };
        this.onChange.emit(event);
    };
    return TdPagingBarComponent;
}());
__decorate$63([
    _angular_core.Input('pageSizeAll'),
    __metadata$39("design:type", Boolean)
], exports.TdPagingBarComponent.prototype, "pageSizeAll", void 0);
__decorate$63([
    _angular_core.Input('pageSizeAllText'),
    __metadata$39("design:type", String)
], exports.TdPagingBarComponent.prototype, "pageSizeAllText", void 0);
__decorate$63([
    _angular_core.Input('firstLast'),
    __metadata$39("design:type", Boolean)
], exports.TdPagingBarComponent.prototype, "firstLast", void 0);
__decorate$63([
    _angular_core.Input('initialPage'),
    __metadata$39("design:type", Number)
], exports.TdPagingBarComponent.prototype, "initialPage", void 0);
__decorate$63([
    _angular_core.Input('pageSizes'),
    __metadata$39("design:type", Array),
    __metadata$39("design:paramtypes", [Array])
], exports.TdPagingBarComponent.prototype, "pageSizes", null);
__decorate$63([
    _angular_core.Input('pageSize'),
    __metadata$39("design:type", Number),
    __metadata$39("design:paramtypes", [Number])
], exports.TdPagingBarComponent.prototype, "pageSize", null);
__decorate$63([
    _angular_core.Input('total'),
    __metadata$39("design:type", Number),
    __metadata$39("design:paramtypes", [Number])
], exports.TdPagingBarComponent.prototype, "total", null);
__decorate$63([
    _angular_core.Output('change'),
    __metadata$39("design:type", _angular_core.EventEmitter)
], exports.TdPagingBarComponent.prototype, "onChange", void 0);
exports.TdPagingBarComponent = __decorate$63([
    _angular_core.Component({
        selector: 'td-paging-bar',
        template: "<div layout=\"row\" layout-align=\"end center\" class=\"md-caption td-paging-bar\"> <ng-content select=\"[td-paging-bar-label]\"></ng-content> <md-select [(ngModel)]=\"pageSize\"> <template let-size ngFor [ngForOf]=\"pageSizes\"> <md-option [value]=\"size\"> {{size}} </md-option> </template> <md-option *ngIf=\"pageSizeAll\" [value]=\"total\">{{pageSizeAllText}}</md-option> </md-select> <div> <ng-content></ng-content> </div> <div class=\"td-paging-bar-navigation\"> <button md-icon-button type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\"> <md-icon>skip_previous</md-icon> </button> <button md-icon-button type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\"> <md-icon>navigate_before</md-icon> </button> <button md-icon-button type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\"> <md-icon>navigate_next</md-icon> </button> <button md-icon-button type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\"> <md-icon>skip_next</md-icon> </button> </div> </div>",
        styles: [":host { display: block; } .td-paging-bar { height: 48px; } .td-paging-bar > * { margin: 0 10px; } [md-icon-button] { font-size: 12px; font-weight: normal; } md-select /deep/ .mat-select-trigger { min-width: 44px; font-size: 12px; } md-select /deep/ .mat-select-value { top: auto; position: static; } md-select /deep/ .mat-select-underline { display: none; } .td-paging-size { margin-right: -5px; } "],
    })
], exports.TdPagingBarComponent);

var __decorate$62 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.CovalentPagingModule = CovalentPagingModule_1 = (function () {
    function CovalentPagingModule() {
    }
    CovalentPagingModule.forRoot = function () {
        return {
            ngModule: CovalentPagingModule_1,
            providers: [],
        };
    };
    return CovalentPagingModule;
}());
exports.CovalentPagingModule = CovalentPagingModule_1 = __decorate$62([
    _angular_core.NgModule({
        imports: [
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            _angular_material.MdIconModule.forRoot(),
            _angular_material.MdSelectModule.forRoot(),
            _angular_material.MdButtonModule.forRoot(),
        ],
        declarations: [
            exports.TdPagingBarComponent,
        ],
        exports: [
            exports.TdPagingBarComponent,
        ],
    })
], exports.CovalentPagingModule);
var CovalentPagingModule_1;

var __decorate$65 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$40 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdSearchInputComponent = (function () {
    function TdSearchInputComponent() {
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         */
        this.showUnderline = false;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         */
        this.debounce = 400;
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         */
        this.onSearchDebounce = new _angular_core.EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        this.onSearch = new _angular_core.EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        this.onClear = new _angular_core.EventEmitter();
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        this.onBlur = new _angular_core.EventEmitter();
    }
    TdSearchInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._input._ngControl.valueChanges
            .debounceTime(this.debounce)
            .subscribe(function (value) {
            _this._searchTermChanged(value);
        });
    };
    /**
     * Method to focus to underlying input.
     */
    TdSearchInputComponent.prototype.focus = function () {
        this._input.focus();
    };
    TdSearchInputComponent.prototype.handleBlur = function () {
        this.onBlur.emit(undefined);
    };
    TdSearchInputComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    TdSearchInputComponent.prototype.handleSearch = function (event) {
        this.stopPropagation(event);
        this.onSearch.emit(this.value);
    };
    TdSearchInputComponent.prototype.clearSearch = function () {
        this.value = '';
        this.onClear.emit(undefined);
    };
    TdSearchInputComponent.prototype._searchTermChanged = function (value) {
        this.onSearchDebounce.emit(value);
    };
    return TdSearchInputComponent;
}());
__decorate$65([
    _angular_core.ViewChild(_angular_material.MdInputDirective),
    __metadata$40("design:type", _angular_material.MdInputDirective)
], exports.TdSearchInputComponent.prototype, "_input", void 0);
__decorate$65([
    _angular_core.Input('showUnderline'),
    __metadata$40("design:type", Boolean)
], exports.TdSearchInputComponent.prototype, "showUnderline", void 0);
__decorate$65([
    _angular_core.Input('debounce'),
    __metadata$40("design:type", Number)
], exports.TdSearchInputComponent.prototype, "debounce", void 0);
__decorate$65([
    _angular_core.Input('placeholder'),
    __metadata$40("design:type", String)
], exports.TdSearchInputComponent.prototype, "placeholder", void 0);
__decorate$65([
    _angular_core.Output('searchDebounce'),
    __metadata$40("design:type", _angular_core.EventEmitter)
], exports.TdSearchInputComponent.prototype, "onSearchDebounce", void 0);
__decorate$65([
    _angular_core.Output('search'),
    __metadata$40("design:type", _angular_core.EventEmitter)
], exports.TdSearchInputComponent.prototype, "onSearch", void 0);
__decorate$65([
    _angular_core.Output('clear'),
    __metadata$40("design:type", _angular_core.EventEmitter)
], exports.TdSearchInputComponent.prototype, "onClear", void 0);
__decorate$65([
    _angular_core.Output('blur'),
    __metadata$40("design:type", _angular_core.EventEmitter)
], exports.TdSearchInputComponent.prototype, "onBlur", void 0);
exports.TdSearchInputComponent = __decorate$65([
    _angular_core.Component({
        selector: 'td-search-input',
        template: "<div class=\"td-search-input\" layout=\"row\" layout-align=\"end center\"> <md-input-container [class.mat-hide-underline]=\"!showUnderline\" flex> <input mdInput #searchElement type=\"search\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" (blur)=\"handleBlur()\" (search)=\"stopPropagation($event)\" (keyup.enter)=\"handleSearch($event)\"/> </md-input-container> <button md-icon-button type=\"button\" [@searchState]=\"searchElement.value ? true : false\" (click)=\"clearSearch()\" flex=\"none\"> <md-icon>cancel</md-icon> </button> </div>",
        styles: [".td-search-input { height: 64px; overflow-x: hidden; } .td-search-input /deep/ md-input-container.mat-hide-underline .mat-input-underline { display: none; } "],
        animations: [
            _angular_core.trigger('searchState', [
                _angular_core.state('false', _angular_core.style({
                    transform: 'translateX(150%)',
                    display: 'none',
                })),
                _angular_core.state('true', _angular_core.style({
                    transform: 'translateX(0%)',
                    display: 'block',
                })),
                _angular_core.transition('0 => 1', _angular_core.animate('200ms ease-in')),
                _angular_core.transition('1 => 0', _angular_core.animate('200ms ease-out')),
            ]),
        ],
    })
], exports.TdSearchInputComponent);

var __decorate$66 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$41 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdSearchBoxComponent = (function () {
    function TdSearchBoxComponent() {
        this._searchVisible = false;
        /**
         * backIcon?: string
         * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
         * Defaults to 'search' icon.
         */
        this.backIcon = 'search';
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         */
        this.showUnderline = false;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         */
        this.debounce = 400;
        /**
         * alwaysVisible?: boolean
         * Sets if the input should always be visible. Defaults to 'false'.
         */
        this.alwaysVisible = false;
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         */
        this.onSearchDebounce = new _angular_core.EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        this.onSearch = new _angular_core.EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        this.onClear = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdSearchBoxComponent.prototype, "value", {
        get: function () {
            return this._searchInput.value;
        },
        set: function (value) {
            this._searchInput.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
        get: function () {
            return this._searchVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when the search icon is clicked.
     */
    TdSearchBoxComponent.prototype.searchClicked = function () {
        if (this.alwaysVisible || !this._searchVisible) {
            this._searchInput.focus();
        }
        this.toggleVisibility();
    };
    TdSearchBoxComponent.prototype.toggleVisibility = function () {
        this._searchVisible = !this._searchVisible;
    };
    TdSearchBoxComponent.prototype.handleSearchDebounce = function (value) {
        this.onSearchDebounce.emit(value);
    };
    TdSearchBoxComponent.prototype.handleSearch = function (value) {
        this.onSearch.emit(value);
    };
    TdSearchBoxComponent.prototype.handleClear = function () {
        this.onClear.emit(undefined);
    };
    return TdSearchBoxComponent;
}());
__decorate$66([
    _angular_core.ViewChild(exports.TdSearchInputComponent),
    __metadata$41("design:type", exports.TdSearchInputComponent)
], exports.TdSearchBoxComponent.prototype, "_searchInput", void 0);
__decorate$66([
    _angular_core.Input('backIcon'),
    __metadata$41("design:type", String)
], exports.TdSearchBoxComponent.prototype, "backIcon", void 0);
__decorate$66([
    _angular_core.Input('showUnderline'),
    __metadata$41("design:type", Boolean)
], exports.TdSearchBoxComponent.prototype, "showUnderline", void 0);
__decorate$66([
    _angular_core.Input('debounce'),
    __metadata$41("design:type", Number)
], exports.TdSearchBoxComponent.prototype, "debounce", void 0);
__decorate$66([
    _angular_core.Input('alwaysVisible'),
    __metadata$41("design:type", Boolean)
], exports.TdSearchBoxComponent.prototype, "alwaysVisible", void 0);
__decorate$66([
    _angular_core.Input('placeholder'),
    __metadata$41("design:type", String)
], exports.TdSearchBoxComponent.prototype, "placeholder", void 0);
__decorate$66([
    _angular_core.Output('searchDebounce'),
    __metadata$41("design:type", _angular_core.EventEmitter)
], exports.TdSearchBoxComponent.prototype, "onSearchDebounce", void 0);
__decorate$66([
    _angular_core.Output('search'),
    __metadata$41("design:type", _angular_core.EventEmitter)
], exports.TdSearchBoxComponent.prototype, "onSearch", void 0);
__decorate$66([
    _angular_core.Output('clear'),
    __metadata$41("design:type", _angular_core.EventEmitter)
], exports.TdSearchBoxComponent.prototype, "onClear", void 0);
exports.TdSearchBoxComponent = __decorate$66([
    _angular_core.Component({
        selector: 'td-search-box',
        template: "<div class=\"td-search-box\" layout=\"row\" layout-align=\"end center\"> <button md-icon-button type=\"button\" class=\"td-search-icon\" flex=\"none\" (click)=\"searchClicked()\"> <md-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</md-icon> <md-icon *ngIf=\"!searchVisible || alwaysVisible\">search</md-icon> </button> <td-search-input #searchInput [@inputState]=\"alwaysVisible || searchVisible\" [debounce]=\"debounce\" [showUnderline]=\"showUnderline\" [placeholder]=\"placeholder\" (searchDebounce)=\"handleSearchDebounce($event)\" (search)=\"handleSearch($event)\" (clear)=\"handleClear(); toggleVisibility()\"> </td-search-input> </div>",
        styles: [":host { display: block; } .td-search-box { height: 64px; } .td-search-box td-search-input { margin-left: 12px; } .td-search-box td-search-input /deep/ .mat-input-placeholder.mat-focused { visibility: hidden; } "],
        animations: [
            _angular_core.trigger('inputState', [
                _angular_core.state('false', _angular_core.style({
                    width: '0%',
                    'margin-left': '0px',
                })),
                _angular_core.state('true', _angular_core.style({
                    width: '100%',
                    'margin-left': '*',
                })),
                _angular_core.transition('0 => 1', _angular_core.animate('200ms ease-in')),
                _angular_core.transition('1 => 0', _angular_core.animate('200ms ease-out')),
            ]),
        ],
    })
], exports.TdSearchBoxComponent);

var __decorate$64 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.CovalentSearchModule = CovalentSearchModule_1 = (function () {
    function CovalentSearchModule() {
    }
    CovalentSearchModule.forRoot = function () {
        return {
            ngModule: CovalentSearchModule_1,
            providers: [],
        };
    };
    return CovalentSearchModule;
}());
exports.CovalentSearchModule = CovalentSearchModule_1 = __decorate$64([
    _angular_core.NgModule({
        imports: [
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            _angular_material.MdInputModule.forRoot(),
            _angular_material.MdIconModule.forRoot(),
            _angular_material.MdButtonModule.forRoot(),
        ],
        declarations: [
            exports.TdSearchInputComponent,
            exports.TdSearchBoxComponent,
        ],
        exports: [
            exports.TdSearchInputComponent,
            exports.TdSearchBoxComponent,
        ],
    })
], exports.CovalentSearchModule);
var CovalentSearchModule_1;

var __extends$4 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$69 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$43 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

(function (StepState) {
    StepState[StepState["None"] = 'none'] = "None";
    StepState[StepState["Required"] = 'required'] = "Required";
    StepState[StepState["Complete"] = 'complete'] = "Complete";
})(exports.StepState || (exports.StepState = {}));
var TdStepLabelDirective = (function (_super) {
    __extends$4(TdStepLabelDirective, _super);
    function TdStepLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepLabelDirective;
}(_angular_material.TemplatePortalDirective));
TdStepLabelDirective = __decorate$69([
    _angular_core.Directive({
        selector: '[td-step-label]template',
    }),
    __metadata$43("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], TdStepLabelDirective);
var TdStepActionsDirective = (function (_super) {
    __extends$4(TdStepActionsDirective, _super);
    function TdStepActionsDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepActionsDirective;
}(_angular_material.TemplatePortalDirective));
TdStepActionsDirective = __decorate$69([
    _angular_core.Directive({
        selector: '[td-step-actions]template',
    }),
    __metadata$43("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], TdStepActionsDirective);
var TdStepSummaryDirective = (function (_super) {
    __extends$4(TdStepSummaryDirective, _super);
    function TdStepSummaryDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepSummaryDirective;
}(_angular_material.TemplatePortalDirective));
TdStepSummaryDirective = __decorate$69([
    _angular_core.Directive({
        selector: '[td-step-summary]template',
    }),
    __metadata$43("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], TdStepSummaryDirective);
exports.TdStepComponent = (function () {
    function TdStepComponent(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._active = false;
        this._state = exports.StepState.None;
        this._disabled = false;
        /**
         * activated?: function
         * Event emitted when [TdStepComponent] is activated.
         */
        this.onActivated = new _angular_core.EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        this.onDeactivated = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdStepComponent.prototype, "stepContent", {
        get: function () {
            return this._contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        /**
         * active?: boolean
         * Toggles [TdStepComponent] between active/deactive.
         */
        set: function (active) {
            this._setActive(active);
        },
        enumerable: true,
        configurable: true
    });
    
    
    Object.defineProperty(TdStepComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if 'true'.
         */
        set: function (disabled) {
            if (disabled && this._active) {
                this._active = false;
                this._onDeactivated();
            }
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    
    
    Object.defineProperty(TdStepComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets state of [TdStepComponent] depending on value.
         * Defaults to [StepState.None | 'none'].
         */
        set: function (state$$1) {
            switch (state$$1) {
                case exports.StepState.Complete:
                    this._state = exports.StepState.Complete;
                    break;
                case exports.StepState.Required:
                    this._state = exports.StepState.Required;
                    break;
                default:
                    this._state = exports.StepState.None;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    
    TdStepComponent.prototype.ngOnInit = function () {
        this._contentPortal = new _angular_material.TemplatePortal(this._content, this._viewContainerRef);
    };
    /**
     * Toggle active state of [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdStepComponent.prototype.toggle = function () {
        return this._setActive(!this._active);
    };
    /**
     * Opens [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdStepComponent.prototype.open = function () {
        return this._setActive(true);
    };
    /**
     * Closes [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdStepComponent.prototype.close = function () {
        return this._setActive(false);
    };
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepComponent.prototype.isComplete = function () {
        return this._state === exports.StepState.Complete;
    };
    
    /**
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     */
    TdStepComponent.prototype._setActive = function (newActive) {
        if (this._disabled) {
            return false;
        }
        if (this._active !== newActive) {
            this._active = newActive;
            if (newActive) {
                this._onActivated();
            }
            else {
                this._onDeactivated();
            }
            return true;
        }
        return false;
    };
    
    TdStepComponent.prototype._onActivated = function () {
        this.onActivated.emit(undefined);
    };
    
    TdStepComponent.prototype._onDeactivated = function () {
        this.onDeactivated.emit(undefined);
    };
    
    return TdStepComponent;
}());
__decorate$69([
    _angular_core.ViewChild(_angular_core.TemplateRef),
    __metadata$43("design:type", _angular_core.TemplateRef)
], exports.TdStepComponent.prototype, "_content", void 0);
__decorate$69([
    _angular_core.ContentChild(TdStepLabelDirective),
    __metadata$43("design:type", TdStepLabelDirective)
], exports.TdStepComponent.prototype, "stepLabel", void 0);
__decorate$69([
    _angular_core.ContentChild(TdStepActionsDirective),
    __metadata$43("design:type", TdStepActionsDirective)
], exports.TdStepComponent.prototype, "stepActions", void 0);
__decorate$69([
    _angular_core.ContentChild(TdStepSummaryDirective),
    __metadata$43("design:type", TdStepSummaryDirective)
], exports.TdStepComponent.prototype, "stepSummary", void 0);
__decorate$69([
    _angular_core.Input('label'),
    __metadata$43("design:type", String)
], exports.TdStepComponent.prototype, "label", void 0);
__decorate$69([
    _angular_core.Input('sublabel'),
    __metadata$43("design:type", String)
], exports.TdStepComponent.prototype, "sublabel", void 0);
__decorate$69([
    _angular_core.Input('active'),
    __metadata$43("design:type", Boolean),
    __metadata$43("design:paramtypes", [Boolean])
], exports.TdStepComponent.prototype, "active", null);
__decorate$69([
    _angular_core.Input('disabled'),
    __metadata$43("design:type", Boolean),
    __metadata$43("design:paramtypes", [Boolean])
], exports.TdStepComponent.prototype, "disabled", null);
__decorate$69([
    _angular_core.Input('state'),
    __metadata$43("design:type", Number),
    __metadata$43("design:paramtypes", [Number])
], exports.TdStepComponent.prototype, "state", null);
__decorate$69([
    _angular_core.Output('activated'),
    __metadata$43("design:type", _angular_core.EventEmitter)
], exports.TdStepComponent.prototype, "onActivated", void 0);
__decorate$69([
    _angular_core.Output('deactivated'),
    __metadata$43("design:type", _angular_core.EventEmitter)
], exports.TdStepComponent.prototype, "onDeactivated", void 0);
exports.TdStepComponent = __decorate$69([
    _angular_core.Component({
        selector: 'td-step',
        template: "<template> <ng-content></ng-content> </template>",
    }),
    __metadata$43("design:paramtypes", [_angular_core.ViewContainerRef])
], exports.TdStepComponent);

var __decorate$68 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$42 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

(function (StepMode) {
    StepMode[StepMode["Vertical"] = 'vertical'] = "Vertical";
    StepMode[StepMode["Horizontal"] = 'horizontal'] = "Horizontal";
})(exports.StepMode || (exports.StepMode = {}));
exports.TdStepsComponent = (function () {
    function TdStepsComponent() {
        this._mode = exports.StepMode.Vertical;
        /**
         * stepChange?: function
         * Method to be executed when [onStepChange] event is emitted.
         * Emits an [IStepChangeEvent] implemented object.
         */
        this.onStepChange = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TdStepsComponent.prototype, "stepsContent", {
        set: function (steps) {
            if (steps) {
                this._steps = steps;
                this._registerSteps();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepsComponent.prototype, "steps", {
        get: function () {
            return this._steps.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepsComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        /**
         * mode?: StepMode or ["vertical" | "horizontal"]
         * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
         */
        set: function (mode) {
            switch (mode) {
                case exports.StepMode.Horizontal:
                    this._mode = exports.StepMode.Horizontal;
                    break;
                default:
                    this._mode = exports.StepMode.Vertical;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Executed after content is initialized, loops through any [TdStepComponent] children elements,
     * assigns them a number and subscribes as an observer to their [onActivated] event.
     */
    TdStepsComponent.prototype.ngAfterContentInit = function () {
        this._registerSteps();
    };
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     */
    TdStepsComponent.prototype.ngOnDestroy = function () {
        this._deregisterSteps();
    };
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     */
    TdStepsComponent.prototype.isHorizontal = function () {
        return this._mode === exports.StepMode.Horizontal;
    };
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     */
    TdStepsComponent.prototype.isVertical = function () {
        return this._mode === exports.StepMode.Vertical;
    };
    TdStepsComponent.prototype.areStepsActive = function () {
        return this._steps.filter(function (step) {
            return step.active;
        }).length > 0;
    };
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     */
    TdStepsComponent.prototype._onStepSelection = function (step) {
        if (this.prevStep !== step) {
            var prevStep = this.prevStep;
            this.prevStep = step;
            var event_1 = {
                newStep: step,
                prevStep: prevStep,
            };
            this._deactivateAllBut(step);
            this.onStepChange.emit(event_1);
        }
    };
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     */
    TdStepsComponent.prototype._deactivateAllBut = function (activeStep) {
        this._steps.filter(function (step) { return step !== activeStep; })
            .forEach(function (step) {
            step.active = false;
        });
    };
    TdStepsComponent.prototype._registerSteps = function () {
        var _this = this;
        this._subcriptions = [];
        this._steps.toArray().forEach(function (step) {
            var subscription = step.onActivated.asObservable().subscribe(function () {
                _this._onStepSelection(step);
            });
            _this._subcriptions.push(subscription);
        });
    };
    TdStepsComponent.prototype._deregisterSteps = function () {
        if (this._subcriptions) {
            this._subcriptions.forEach(function (subs) {
                subs.unsubscribe();
            });
            this._subcriptions = undefined;
        }
    };
    return TdStepsComponent;
}());
__decorate$68([
    _angular_core.ContentChildren(exports.TdStepComponent),
    __metadata$42("design:type", _angular_core.QueryList),
    __metadata$42("design:paramtypes", [_angular_core.QueryList])
], exports.TdStepsComponent.prototype, "stepsContent", null);
__decorate$68([
    _angular_core.Input('mode'),
    __metadata$42("design:type", Number),
    __metadata$42("design:paramtypes", [Number])
], exports.TdStepsComponent.prototype, "mode", null);
__decorate$68([
    _angular_core.Output('stepChange'),
    __metadata$42("design:type", _angular_core.EventEmitter)
], exports.TdStepsComponent.prototype, "onStepChange", void 0);
exports.TdStepsComponent = __decorate$68([
    _angular_core.Component({
        selector: 'td-steps',
        styles: [".td-line-wrapper, .td-step { position: relative; } .td-line-wrapper { width: 24px; min-height: 1px; } .td-horizontal-line { border-bottom-width: 1px; border-bottom-style: solid; height: 1px; position: relative; top: 36px; margin-left: -6px; margin-right: -3px; min-width: 15px; } .td-vertical-line { position: absolute; left: 20px; bottom: -16px; top: -16px; border-left-width: 1px; border-left-style: solid; } "],
        template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\" layout=\"row\" title> <template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\"> <td-step-header class=\"td-step-horizontal-header\" (keydown.enter)=\"step.toggle()\" [number]=\"index + 1\" [active]=\"step.active\"  [disabled]=\"step.disabled\"  [state]=\"step.state\" (click)=\"step.toggle()\"> <template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></template> <template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</template> <template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</template> </td-step-header> <span *ngIf=\"!last\" class=\"td-horizontal-line\" flex></span> </template> </div> <div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\" layout=\"column\"> <td-step-header class=\"td-step-vertical-header\" (keydown.enter)=\"step.toggle()\" [number]=\"index + 1\" [active]=\"step.active\"  [disabled]=\"step.disabled\"  [state]=\"step.state\" (click)=\"step.toggle()\" *ngIf=\"isVertical()\"> <template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></template> <template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</template> <template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</template> </td-step-header> <template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\"> <td-step-body [active]=\"step.active\" [state]=\"step.state\"> <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\"> <div *ngIf=\"!last\" class=\"td-vertical-line\"></div> </div> <template td-step-body-content [cdkPortalHost]=\"step.stepContent\"></template> <template td-step-body-actions [cdkPortalHost]=\"step.stepActions\"></template> <template td-step-body-summary [cdkPortalHost]=\"step.stepSummary\"></template> </td-step-body> </template> </div> ",
    })
], exports.TdStepsComponent);

var __decorate$70 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$44 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TdStepHeaderComponent = (function () {
    function TdStepHeaderComponent() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = exports.StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepHeaderComponent.prototype.isComplete = function () {
        return this.state === exports.StepState.Complete;
    };
    
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    TdStepHeaderComponent.prototype.isRequired = function () {
        return this.state === exports.StepState.Required;
    };
    
    return TdStepHeaderComponent;
}());
__decorate$70([
    _angular_core.Input('number'),
    __metadata$44("design:type", Number)
], TdStepHeaderComponent.prototype, "number", void 0);
__decorate$70([
    _angular_core.Input('active'),
    __metadata$44("design:type", Boolean)
], TdStepHeaderComponent.prototype, "active", void 0);
__decorate$70([
    _angular_core.Input('disabled'),
    __metadata$44("design:type", Boolean)
], TdStepHeaderComponent.prototype, "disabled", void 0);
__decorate$70([
    _angular_core.Input('state'),
    __metadata$44("design:type", Number)
], TdStepHeaderComponent.prototype, "state", void 0);
TdStepHeaderComponent = __decorate$70([
    _angular_core.Component({
        selector: 'td-step-header',
        styles: [":host /deep/ md-nav-list { padding-top: 0px; } :host /deep/ md-nav-list [md-list-item]:active, :host /deep/ md-nav-list [md-list-item]:focus { outline: none; } :host /deep/ md-nav-list [md-list-item].mat-interaction-disabled .mat-list-item-content { background: none !important; cursor: auto; } :host /deep/ md-nav-list .mat-list-item-content { flex: 1; height: 72px !important; padding: 0px !important; } .mat-ripple-boundary { position: relative; height: 72px; } .td-step-header md-icon.td-edit-icon { margin-right: 8px; } md-icon.mat-warn { font-size: 24px; height: 24px; width: 24px; } md-icon.mat-complete { position: relative; left: -2px; top: 2px; font-size: 28px; height: 24px; width: 24px; } .td-circle { height: 24px; width: 24px; line-height: 24px; border-radius: 99%; text-align: center; flex: none; } .td-circle md-icon { margin-top: 2px; font-weight: bold; } .td-triangle > md-icon { font-size: 27px; } .td-complete { font-size: 0; } .td-circle, .td-complete { margin-left: 8px; font-size: 14px; } .td-triangle { margin-left: 7px; } .td-step-label-wrapper { padding-left: 8px; padding-right: 8px; } .td-step-sublabel { line-height: 14px; font-weight: normal; } "],
        template: "<div class=\"td-step-header\" layout=\"row\" layout-align=\"start center\" flex> <md-nav-list flex> <a md-list-item [class.mat-interaction-disabled]=\"disabled\" [tabIndex]=\"disabled ? -1 : 0\" flex> <div class=\"mat-ripple-boundary\" md-ripple [mdRippleSpeedFactor]=\"10\" [mdRippleDisabled]=\"disabled\" layout=\"row\"  layout-align=\"start center\" flex> <div class=\"td-circle\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-active]=\"active && !disabled\" *ngIf=\"!isRequired() && !isComplete()\"> <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span> </div> <div class=\"td-complete\" *ngIf=\"isComplete()\"> <md-icon class=\"mat-complete\">check_circle</md-icon> </div> <div class=\"td-triangle\" [class.bg-muted]=\"disabled\" *ngIf=\"isRequired()\"> <md-icon class=\"mat-warn\">warning</md-icon> </div> <div class=\"td-step-label-wrapper\" [class.mat-disabled]=\"(!active && !isComplete()) || disabled\" [class.mat-warn]=\"isRequired() && !disabled\"> <div class=\"md-body-2 td-step-label\"> <ng-content select=\"[td-step-header-label]\"></ng-content> </div> <div class=\"md-caption td-step-sublabel\"> <ng-content select=\"[td-step-header-sublabel]\"></ng-content> </div> </div> <span flex></span> <md-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</md-icon> </div> </a> </md-nav-list> </div>",
    })
], TdStepHeaderComponent);

var __decorate$71 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$45 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TdStepBodyComponent = (function () {
    function TdStepBodyComponent() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of body.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = exports.StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepBodyComponent.prototype.isComplete = function () {
        return this.state === exports.StepState.Complete;
    };
    
    return TdStepBodyComponent;
}());
__decorate$71([
    _angular_core.Input('active'),
    __metadata$45("design:type", Boolean)
], TdStepBodyComponent.prototype, "active", void 0);
__decorate$71([
    _angular_core.Input('state'),
    __metadata$45("design:type", Number)
], TdStepBodyComponent.prototype, "state", void 0);
TdStepBodyComponent = __decorate$71([
    _angular_core.Component({
        selector: 'td-step-body',
        styles: [".td-step-summary, .td-step-content-wrapper { overflow: hidden; } "],
        template: "<div layout=\"row\" flex> <ng-content></ng-content> <div flex> <div class=\"td-step-content-wrapper\" [@tdCollapse]=\"!active\"> <div #contentRef [class.td-step-content]=\"contentRef.children.length || contentRef.textContent.trim()\"> <ng-content select=\"[td-step-body-content]\"></ng-content> </div> <div #actionsRef layout=\"row\" [class.td-step-actions]=\"actionsRef.children.length || actionsRef.textContent.trim()\"> <ng-content select=\"[td-step-body-actions]\"></ng-content> </div> </div> <div #summaryRef [@tdCollapse]=\"active || !isComplete()\" [class.td-step-summary]=\"summaryRef.children.length || summaryRef.textContent.trim()\"> <ng-content select=\"[td-step-body-summary]\"></ng-content> </div> </div> </div>",
        animations: [
            TdCollapseAnimation(),
        ],
    })
], TdStepBodyComponent);

var __decorate$67 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Steps
var TD_STEPS = [
    exports.TdStepsComponent,
    exports.TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
];
exports.CovalentStepsModule = CovalentStepsModule_1 = (function () {
    function CovalentStepsModule() {
    }
    CovalentStepsModule.forRoot = function () {
        return {
            ngModule: CovalentStepsModule_1,
            providers: [],
        };
    };
    return CovalentStepsModule;
}());
exports.CovalentStepsModule = CovalentStepsModule_1 = __decorate$67([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_material.MdIconModule.forRoot(),
            _angular_material.MdListModule.forRoot(),
            _angular_material.MdRippleModule.forRoot(),
            _angular_material.PortalModule.forRoot(),
            exports.CovalentCommonModule.forRoot(),
        ],
        declarations: [
            TD_STEPS,
        ],
        exports: [
            TD_STEPS,
        ],
    })
], exports.CovalentStepsModule);
var CovalentStepsModule_1;

var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * COMMON
 */
/**
 * CHIPS
 */
/**
 * DATA TABLE
 */
/**
 * DIALOGS
 */
/**
 * EXPANSION PANEL
 */
/**
 * FILE
 */
/**
 * JSON FORMATTER
 */
/**
 * LAYOUT
 */
/**
 * LOADING
 */
/**
 * MEDIA
 */
/**
 * MENU
 */
/**
 * NOTIFICATIONS
 */
/**
 * PAGING
 */
/**
 * SEARCH
 */
/**
 * STEPS
 */
exports.CovalentCoreModule = CovalentCoreModule_1 = (function () {
    function CovalentCoreModule() {
    }
    CovalentCoreModule.forRoot = function () {
        return {
            ngModule: CovalentCoreModule_1,
            providers: [],
        };
    };
    return CovalentCoreModule;
}());
exports.CovalentCoreModule = CovalentCoreModule_1 = __decorate([
    _angular_core.NgModule({
        imports: [
            _angular_http.HttpModule,
            _angular_http.JsonpModule,
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            _angular_material.MaterialModule.forRoot(),
            _angular_flexLayout.FlexLayoutModule,
            exports.CovalentCommonModule.forRoot(),
            exports.CovalentChipsModule.forRoot(),
            exports.CovalentDataTableModule.forRoot(),
            exports.CovalentDialogsModule.forRoot(),
            exports.CovalentExpansionPanelModule.forRoot(),
            exports.CovalentFileModule.forRoot(),
            exports.CovalentJsonFormatterModule.forRoot(),
            exports.CovalentLayoutModule.forRoot(),
            exports.CovalentLoadingModule.forRoot(),
            exports.CovalentMediaModule.forRoot(),
            exports.CovalentMenuModule.forRoot(),
            exports.CovalentNotificationsModule.forRoot(),
            exports.CovalentPagingModule.forRoot(),
            exports.CovalentSearchModule.forRoot(),
            exports.CovalentStepsModule.forRoot(),
        ],
        exports: [
            _angular_http.HttpModule,
            _angular_http.JsonpModule,
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            _angular_material.MaterialModule,
            _angular_flexLayout.FlexLayoutModule,
            exports.CovalentCommonModule,
            exports.CovalentChipsModule,
            exports.CovalentDataTableModule,
            exports.CovalentDialogsModule,
            exports.CovalentExpansionPanelModule,
            exports.CovalentFileModule,
            exports.CovalentJsonFormatterModule,
            exports.CovalentLayoutModule,
            exports.CovalentLoadingModule,
            exports.CovalentMediaModule,
            exports.CovalentMenuModule,
            exports.CovalentNotificationsModule,
            exports.CovalentPagingModule,
            exports.CovalentSearchModule,
            exports.CovalentStepsModule,
        ],
    })
], exports.CovalentCoreModule);
var CovalentCoreModule_1;

exports.TdCollapseAnimation = TdCollapseAnimation;
exports.TdFadeInOutAnimation = TdFadeInOutAnimation;

Object.defineProperty(exports, '__esModule', { value: true });

})));
