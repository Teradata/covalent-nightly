(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/forms'), require('@angular/common'), require('@angular/router'), require('rxjs/operators'), require('rxjs'), require('@angular/cdk/coercion')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/common', ['exports', '@angular/core', '@angular/animations', '@angular/forms', '@angular/common', '@angular/router', 'rxjs/operators', 'rxjs', '@angular/cdk/coercion'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.common = {}),global.ng.core,global.ng.animations,global.ng.forms,global.ng.common,global.ng.router,global.rxjs.operators,global.rxjs,global.ng.cdk.coercion));
}(this, (function (exports,core,animations,forms,common,router,operators,rxjs,coercion) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdToggleDirective = /** @class */ (function () {
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
            set: /**
             * tdToggle: boolean
             * Toggles element, hides if its 'true', shows if its 'false'.
             * @param {?} state
             * @return {?}
             */ function (state) {
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
            get: /**
             * Binds native 'aria-expanded' attribute.
             * @return {?}
             */ function () {
                return !this._state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdToggleDirective.prototype, "ariaHiddenBinding", {
            /**
             * Binds native 'aria-hidden' attribute.
             */
            get: /**
             * Binds native 'aria-hidden' attribute.
             * @return {?}
             */ function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Hides element: sets "display:[default]" so animation is shown,
         * starts animation and adds "display:'none'" style at the end.
         */
        /**
         * Hides element: sets "display:[default]" so animation is shown,
         * starts animation and adds "display:'none'" style at the end.
         * @return {?}
         */
        TdToggleDirective.prototype.hide = /**
         * Hides element: sets "display:[default]" so animation is shown,
         * starts animation and adds "display:'none'" style at the end.
         * @return {?}
         */
            function () {
                var _this = this;
                this._animationHidePlayer = this._animationBuilder.build(animations.animation([
                    animations.style({
                        height: animations.AUTO_STYLE,
                        display: animations.AUTO_STYLE,
                    }),
                    animations.animate(this.duration + 'ms ease-in', animations.style({ height: '0' })),
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
        /**
         * Shows element: sets "display:[default]" so animation is shown,
         * starts animation and adds "overflow:[default]" style again at the end.
         * @return {?}
         */
        TdToggleDirective.prototype.show = /**
         * Shows element: sets "display:[default]" so animation is shown,
         * starts animation and adds "overflow:[default]" style again at the end.
         * @return {?}
         */
            function () {
                var _this = this;
                this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
                this._changeDetectorRef.markForCheck();
                this._animationShowPlayer = this._animationBuilder.build(animations.animation([
                    animations.style({
                        height: '0',
                        display: 'none',
                    }),
                    animations.animate(this.duration + 'ms ease-out', animations.style({ height: animations.AUTO_STYLE })),
                ])).create(this._element.nativeElement);
                this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
                this._animationShowPlayer.onDone(function () {
                    _this._onShowDone();
                });
                this._animationShowPlayer.play();
            };
        /**
         * @return {?}
         */
        TdToggleDirective.prototype._onHideDone = /**
         * @return {?}
         */
            function () {
                if (this._animationHidePlayer) {
                    this._animationHidePlayer.destroy();
                    this._animationHidePlayer = undefined;
                    this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
                    this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
                    this._changeDetectorRef.markForCheck();
                }
            };
        /**
         * @return {?}
         */
        TdToggleDirective.prototype._onShowDone = /**
         * @return {?}
         */
            function () {
                if (this._animationShowPlayer) {
                    this._animationShowPlayer.destroy();
                    this._animationShowPlayer = undefined;
                    this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
                    this._changeDetectorRef.markForCheck();
                }
            };
        TdToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdToggleDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: animations.AnimationBuilder }
            ];
        };
        TdToggleDirective.propDecorators = {
            duration: [{ type: core.Input }],
            state: [{ type: core.Input, args: ['tdToggle',] }],
            ariaExpandedBinding: [{ type: core.HostBinding, args: ['attr.aria-expanded',] }],
            ariaHiddenBinding: [{ type: core.HostBinding, args: ['attr.aria-hidden',] }]
        };
        return TdToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
            this.onFadeIn = new core.EventEmitter();
            /**
             * fadeOut?: function
             * Method to be executed when fadeOut animation ends.
             */
            this.onFadeOut = new core.EventEmitter();
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
             */ function (state) {
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
             */ function () {
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
             */ function () {
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
                this._animationFadeInPlayer = this._animationBuilder.build(animations.animation([
                    animations.style({
                        opacity: animations.AUTO_STYLE,
                        display: animations.AUTO_STYLE,
                    }),
                    animations.animate(this.duration + 'ms ease-out', animations.style({ opacity: '0' })),
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
                this._animationFadeOutPlayer = this._animationBuilder.build(animations.animation([
                    animations.style({
                        opacity: '0',
                        display: 'none',
                    }),
                    animations.animate(this.duration + 'ms ease-in', animations.style({ opacity: animations.AUTO_STYLE })),
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
            { type: core.Directive, args: [{
                        selector: '[tdFade]',
                    },] }
        ];
        /** @nocollapse */
        TdFadeDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: animations.AnimationBuilder }
            ];
        };
        TdFadeDirective.propDecorators = {
            duration: [{ type: core.Input }],
            state: [{ type: core.Input, args: ['tdFade',] }],
            onFadeIn: [{ type: core.Output, args: ['fadeIn',] }],
            onFadeOut: [{ type: core.Output, args: ['fadeOut',] }],
            ariaExpandedBinding: [{ type: core.HostBinding, args: ['attr.aria-expanded',] }],
            ariaHiddenBinding: [{ type: core.HostBinding, args: ['attr.aria-hidden',] }]
        };
        return TdFadeDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdAutoTrimDirective = /** @class */ (function () {
        function TdAutoTrimDirective(_model) {
            this._model = _model;
        }
        /**
         * Listens to host's (blur) event and trims value.
         */
        /**
         * Listens to host's (blur) event and trims value.
         * @param {?} event
         * @return {?}
         */
        TdAutoTrimDirective.prototype.onBlur = /**
         * Listens to host's (blur) event and trims value.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._model && this._model.value && typeof (this._model.value) === 'string') {
                    this._model.update.emit(this._model.value.trim());
                }
            };
        TdAutoTrimDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdAutoTrim]',
                    },] }
        ];
        /** @nocollapse */
        TdAutoTrimDirective.ctorParameters = function () {
            return [
                { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
            ];
        };
        TdAutoTrimDirective.propDecorators = {
            onBlur: [{ type: core.HostListener, args: ['blur', ['$event'],] }]
        };
        return TdAutoTrimDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeAgoPipe = /** @class */ (function () {
        function TdTimeAgoPipe() {
        }
        /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        TdTimeAgoPipe.prototype.transform = /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
            function (time, reference) {
                // Convert time to date object if not already
                time = new Date(time);
                /** @type {?} */
                var ref = new Date(reference);
                // If not a valid timestamp, return 'Invalid Date'
                if (!time.getTime()) {
                    return 'Invalid Date';
                }
                // For unit testing, we need to be able to declare a static start time
                // for calculations, or else speed of tests can bork.
                /** @type {?} */
                var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
                /** @type {?} */
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
        TdTimeAgoPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeAgo',
                    },] }
        ];
        return TdTimeAgoPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeDifferencePipe = /** @class */ (function () {
        function TdTimeDifferencePipe() {
        }
        /**
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
        TdTimeDifferencePipe.prototype.transform = /**
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
            function (start, end) {
                /** @type {?} */
                var startTime = new Date(start);
                /** @type {?} */
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
                /** @type {?} */
                var diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
                /** @type {?} */
                var days = Math.floor(diff / (60 * 60 * 24));
                diff = diff - (days * (60 * 60 * 24));
                /** @type {?} */
                var hours = Math.floor(diff / (60 * 60));
                diff = diff - (hours * (60 * 60));
                /** @type {?} */
                var minutes = Math.floor(diff / (60));
                diff -= minutes * (60);
                /** @type {?} */
                var seconds = diff;
                /** @type {?} */
                var pad = '00';
                /** @type {?} */
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
        TdTimeDifferencePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeDifference',
                    },] }
        ];
        return TdTimeDifferencePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeUntilPipe = /** @class */ (function () {
        function TdTimeUntilPipe() {
        }
        /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        TdTimeUntilPipe.prototype.transform = /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
            function (time, reference) {
                // Convert time to date object if not already
                time = new Date(time);
                /** @type {?} */
                var ref = new Date(reference);
                // If not a valid timestamp, return 'Invalid Date'
                if (!time.getTime()) {
                    return 'Invalid Date';
                }
                // For unit testing, we need to be able to declare a static start time
                // for calculations, or else speed of tests can bork.
                /** @type {?} */
                var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
                /** @type {?} */
                var diff = Math.floor((time.getTime() - startTime) / 1000);
                if (diff < 2) {
                    return 'in 1 second';
                }
                if (diff < 60) {
                    return 'in ' + Math.floor(diff) + ' seconds';
                }
                // Minutes
                diff = diff / 60;
                if (diff < 2) {
                    return 'in 1 minute';
                }
                if (diff < 60) {
                    return 'in ' + Math.floor(diff) + ' minutes';
                }
                // Hours
                diff = diff / 60;
                if (diff < 2) {
                    return 'in 1 hour';
                }
                if (diff < 24) {
                    return 'in ' + Math.floor(diff) + ' hours';
                }
                // Days
                diff = diff / 24;
                if (diff < 2) {
                    return 'in 1 day';
                }
                if (diff < 30) {
                    return 'in ' + Math.floor(diff) + ' days';
                }
                // Months
                diff = diff / 30;
                if (diff < 2) {
                    return 'in 1 month';
                }
                if (diff < 12) {
                    return 'in ' + Math.floor(diff) + ' months';
                }
                // Years
                diff = diff / 12;
                if (diff < 2) {
                    return 'in 1 year';
                }
                else {
                    return 'in ' + Math.floor(diff) + ' years';
                }
            };
        TdTimeUntilPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeUntil',
                    },] }
        ];
        return TdTimeUntilPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdBytesPipe = /** @class */ (function () {
        function TdBytesPipe() {
        }
        /* `bytes` needs to be `any` or TypeScript complains
        Tried both `number` and `number | string` */
        /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        TdBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
            /**
             * @param {?} bytes
             * @param {?=} precision
             * @return {?}
             */
            function (bytes, precision) {
                if (precision === void 0) {
                    precision = 2;
                }
                if (bytes === 0) {
                    return '0 B';
                }
                else if (isNaN(parseInt(bytes, 10))) {
                    /* If not a valid number, return 'Invalid Number' */
                    return 'Invalid Number';
                }
                /** @type {?} */
                var k = 1024;
                /** @type {?} */
                var sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
                /** @type {?} */
                var i = Math.floor(Math.log(bytes) / Math.log(k));
                // if less than 1
                if (i < 0) {
                    return 'Invalid Number';
                }
                return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
            };
        TdBytesPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'bytes',
                    },] }
        ];
        return TdBytesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDecimalBytesPipe = /** @class */ (function () {
        function TdDecimalBytesPipe() {
        }
        /* `bytes` needs to be `any` or TypeScript complains
        Tried both `number` and `number | string` */
        /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        TdDecimalBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
            /**
             * @param {?} bytes
             * @param {?=} precision
             * @return {?}
             */
            function (bytes, precision) {
                if (precision === void 0) {
                    precision = 2;
                }
                if (bytes === 0) {
                    return '0 B';
                }
                else if (isNaN(parseInt(bytes, 10))) {
                    /* If not a valid number, return 'Invalid Number' */
                    return 'Invalid Number';
                }
                /** @type {?} */
                var k = 1000;
                /** @type {?} */
                var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                /** @type {?} */
                var i = Math.floor(Math.log(bytes) / Math.log(k));
                // if less than 1
                if (i < 0) {
                    return 'Invalid Number';
                }
                return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
            };
        TdDecimalBytesPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'decimalBytes',
                    },] }
        ];
        return TdDecimalBytesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDigitsPipe = /** @class */ (function () {
        function TdDigitsPipe(_locale) {
            if (_locale === void 0) {
                _locale = 'en';
            }
            this._locale = _locale;
            this._decimalPipe = new common.DecimalPipe(this._locale);
        }
        /* `digits` needs to be type `digits: any` or TypeScript complains */
        /* `digits` needs to be type `digits: any` or TypeScript complains */
        /**
         * @param {?} digits
         * @param {?=} precision
         * @return {?}
         */
        TdDigitsPipe.prototype.transform = /* `digits` needs to be type `digits: any` or TypeScript complains */
            /**
             * @param {?} digits
             * @param {?=} precision
             * @return {?}
             */
            function (digits, precision) {
                if (precision === void 0) {
                    precision = 1;
                }
                if (digits === 0) {
                    return '0';
                }
                else if (isNaN(parseInt(digits, 10))) {
                    /* If not a valid number, return the value */
                    return digits;
                }
                else if (digits < 1) {
                    return this._decimalPipe.transform(digits.toFixed(precision));
                }
                /** @type {?} */
                var k = 1000;
                /** @type {?} */
                var sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
                /** @type {?} */
                var i = Math.floor(Math.log(digits) / Math.log(k));
                /** @type {?} */
                var size = sizes[i];
                return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
            };
        TdDigitsPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'digits',
                    },] }
        ];
        /** @nocollapse */
        TdDigitsPipe.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
            ];
        };
        return TdDigitsPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTruncatePipe = /** @class */ (function () {
        function TdTruncatePipe() {
        }
        /**
         * @param {?} text
         * @param {?} length
         * @return {?}
         */
        TdTruncatePipe.prototype.transform = /**
         * @param {?} text
         * @param {?} length
         * @return {?}
         */
            function (text, length) {
                if (typeof text !== 'string') {
                    return '';
                }
                // Truncate
                /** @type {?} */
                var truncated = text.substr(0, length);
                if (text.length > length) {
                    if (truncated.lastIndexOf(' ') > 0) {
                        truncated = truncated.trim();
                    }
                    truncated += '…';
                }
                return truncated;
            };
        TdTruncatePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'truncate',
                    },] }
        ];
        return TdTruncatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var RouterPathService = /** @class */ (function () {
        function RouterPathService(_router) {
            this._router = _router;
            this._router.events.pipe(operators.filter(function (e) { return e instanceof router.RoutesRecognized; }), operators.pairwise()).subscribe(function (e) {
                RouterPathService._previousRoute = e[0].urlAfterRedirects;
            });
        }
        /*
        * Utility function to get the route the user previously went to
        * good for use in a "back button"
        */
        /*
          * Utility function to get the route the user previously went to
          * good for use in a "back button"
          */
        /**
         * @return {?}
         */
        RouterPathService.prototype.getPreviousRoute = /*
          * Utility function to get the route the user previously went to
          * good for use in a "back button"
          */
            /**
             * @return {?}
             */
            function () {
                return RouterPathService._previousRoute;
            };
        RouterPathService._previousRoute = '/';
        RouterPathService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        RouterPathService.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return RouterPathService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var IconService = /** @class */ (function () {
        function IconService() {
            this._icons = [
                'access_alarm',
                'access_alarms',
                'access_time',
                'accessibility',
                'account_balance',
                'account_balance_wallet',
                'account_box',
                'account_circle',
                'add',
                'add_alarm',
                'add_box',
                'add_circle',
                'add_circle_outline',
                'add_shopping_cart',
                'add_to_photos',
                'adjust',
                'alarm',
                'alarm_add',
                'alarm_off',
                'alarm_on',
                'album',
                'android',
                'announcement',
                'apps',
                'archive',
                'arrow_back',
                'arrow_drop_down',
                'arrow_drop_down_circle',
                'arrow_drop_up',
                'arrow_forward',
                'aspect_ratio',
                'assessment',
                'assignment',
                'assignment_ind',
                'assignment_late',
                'assignment_return',
                'assignment_returned',
                'assignment_turned_in',
                'assistant_photo',
                'attach_file',
                'attach_money',
                'attachment',
                'audiotrack',
                'autorenew',
                'av_timer',
                'backspace',
                'backup',
                'battery_alert',
                'battery_charging_full',
                'battery_full',
                'battery_std',
                'battery_unknown',
                'beenhere',
                'block',
                'bluetooth',
                'bluetooth_audio',
                'bluetooth_connected',
                'bluetooth_disabled',
                'bluetooth_searching',
                'blur_circular',
                'blur_linear',
                'blur_off',
                'blur_on',
                'book',
                'bookmark',
                'bookmark_border',
                'border_all',
                'border_bottom',
                'border_clear',
                'border_color',
                'border_horizontal',
                'border_inner',
                'border_left',
                'border_outer',
                'border_right',
                'border_style',
                'border_top',
                'border_vertical',
                'brightness_1',
                'brightness_2',
                'brightness_3',
                'brightness_4',
                'brightness_5',
                'brightness_6',
                'brightness_7',
                'brightness_auto',
                'brightness_high',
                'brightness_low',
                'brightness_medium',
                'broken_image',
                'brush',
                'bug_report',
                'build',
                'business',
                'cached',
                'cake',
                'call',
                'call_end',
                'call_made',
                'call_merge',
                'call_missed',
                'call_received',
                'call_split',
                'camera',
                'camera_alt',
                'camera_front',
                'camera_rear',
                'camera_roll',
                'cancel',
                'cast',
                'cast_connected',
                'center_focus_strong',
                'center_focus_weak',
                'chat',
                'check',
                'check_box',
                'check_box_outline_blank',
                'check_circle',
                'chevron_left',
                'chevron_right',
                'class',
                'clear',
                'clear_all',
                'close',
                'closed_caption',
                'cloud',
                'cloud_circle',
                'cloud_done',
                'cloud_download',
                'cloud_off',
                'cloud_queue',
                'cloud_upload',
                'collections',
                'collections_bookmark',
                'color_lens',
                'colorize',
                'comment',
                'compare',
                'computer',
                'confirmation_number',
                'contact_phone',
                'contacts',
                'content_copy',
                'content_cut',
                'content_paste',
                'control_point',
                'control_point_duplicate',
                'create',
                'credit_card',
                'crop',
                'crop_16_9',
                'crop_3_2',
                'crop_5_4',
                'crop_7_5',
                'crop_din',
                'crop_free',
                'crop_landscape',
                'crop_original',
                'crop_portrait',
                'crop_square',
                'dashboard',
                'data_usage',
                'dehaze',
                'delete',
                'description',
                'desktop_mac',
                'desktop_windows',
                'details',
                'developer_board',
                'developer_mode',
                'device_hub',
                'devices',
                'dialer_sip',
                'dialpad',
                'directions',
                'directions_bike',
                'directions_boat',
                'directions_bus',
                'directions_car',
                'directions_railway',
                'directions_run',
                'directions_subway',
                'directions_transit',
                'directions_walk',
                'disc_full',
                'dns',
                'do_not_disturb',
                'do_not_disturb_alt',
                'dock',
                'domain',
                'done',
                'done_all',
                'drafts',
                'drive_eta',
                'dvr',
                'edit',
                'eject',
                'email',
                'equalizer',
                'error',
                'error_outline',
                'event',
                'event_available',
                'event_busy',
                'event_note',
                'event_seat',
                'exit_to_app',
                'expand_less',
                'expand_more',
                'explicit',
                'explore',
                'exposure',
                'exposure_neg_1',
                'exposure_neg_2',
                'exposure_plus_1',
                'exposure_plus_2',
                'exposure_zero',
                'extension',
                'face',
                'fast_forward',
                'fast_rewind',
                'favorite',
                'favorite_border',
                'feedback',
                'file_download',
                'file_upload',
                'filter',
                'filter_1',
                'filter_2',
                'filter_3',
                'filter_4',
                'filter_5',
                'filter_6',
                'filter_7',
                'filter_8',
                'filter_9',
                'filter_9_plus',
                'filter_b_and_w',
                'filter_center_focus',
                'filter_drama',
                'filter_frames',
                'filter_hdr',
                'filter_list',
                'filter_none',
                'filter_tilt_shift',
                'filter_vintage',
                'find_in_page',
                'find_replace',
                'flag',
                'flare',
                'flash_auto',
                'flash_off',
                'flash_on',
                'flight',
                'flight_land',
                'flight_takeoff',
                'flip',
                'flip_to_back',
                'flip_to_front',
                'folder',
                'folder_open',
                'folder_shared',
                'folder_special',
                'font_download',
                'format_align_center',
                'format_align_justify',
                'format_align_left',
                'format_align_right',
                'format_bold',
                'format_clear',
                'format_color_fill',
                'format_color_reset',
                'format_color_text',
                'format_indent_decrease',
                'format_indent_increase',
                'format_italic',
                'format_line_spacing',
                'format_list_bulleted',
                'format_list_numbered',
                'format_paint',
                'format_quote',
                'format_size',
                'format_strikethrough',
                'format_textdirection_l_to_r',
                'format_textdirection_r_to_l',
                'format_underlined',
                'forum',
                'forward',
                'forward_10',
                'forward_30',
                'forward_5',
                'fullscreen',
                'fullscreen_exit',
                'functions',
                'gamepad',
                'games',
                'gesture',
                'get_app',
                'gif',
                'gps_fixed',
                'gps_not_fixed',
                'gps_off',
                'grade',
                'gradient',
                'grain',
                'graphic_eq',
                'grid_off',
                'grid_on',
                'group',
                'group_add',
                'group_work',
                'hd',
                'hdr_off',
                'hdr_on',
                'hdr_strong',
                'hdr_weak',
                'headset',
                'headset_mic',
                'healing',
                'hearing',
                'help',
                'help_outline',
                'high_quality',
                'highlight_off',
                'history',
                'home',
                'hotel',
                'hourglass_empty',
                'hourglass_full',
                'http',
                'https',
                'image',
                'image_aspect_ratio',
                'import_export',
                'inbox',
                'indeterminate_check_box',
                'info',
                'info_outline',
                'input',
                'insert_chart',
                'insert_comment',
                'insert_drive_file',
                'insert_emoticon',
                'insert_invitation',
                'insert_link',
                'insert_photo',
                'invert_colors',
                'invert_colors_off',
                'iso',
                'keyboard',
                'keyboard_arrow_down',
                'keyboard_arrow_left',
                'keyboard_arrow_right',
                'keyboard_arrow_up',
                'keyboard_backspace',
                'keyboard_capslock',
                'keyboard_hide',
                'keyboard_return',
                'keyboard_tab',
                'keyboard_voice',
                'label',
                'label_outline',
                'landscape',
                'language',
                'laptop',
                'laptop_chromebook',
                'laptop_mac',
                'laptop_windows',
                'launch',
                'layers',
                'layers_clear',
                'leak_add',
                'leak_remove',
                'lens',
                'library_add',
                'library_books',
                'library_music',
                'link',
                'list',
                'live_help',
                'live_tv',
                'local_activity',
                'local_airport',
                'local_atm',
                'local_bar',
                'local_cafe',
                'local_car_wash',
                'local_convenience_store',
                'local_dining',
                'local_drink',
                'local_florist',
                'local_gas_station',
                'local_grocery_store',
                'local_hospital',
                'local_hotel',
                'local_laundry_service',
                'local_library',
                'local_mall',
                'local_movies',
                'local_offer',
                'local_parking',
                'local_pharmacy',
                'local_phone',
                'local_pizza',
                'local_play',
                'local_post_office',
                'local_printshop',
                'local_see',
                'local_shipping',
                'local_taxi',
                'location_city',
                'location_disabled',
                'location_off',
                'location_on',
                'location_searching',
                'lock',
                'lock_open',
                'lock_outline',
                'looks',
                'looks_3',
                'looks_4',
                'looks_5',
                'looks_6',
                'looks_one',
                'looks_two',
                'loop',
                'loupe',
                'loyalty',
                'mail',
                'map',
                'markunread',
                'markunread_mailbox',
                'memory',
                'menu',
                'merge_type',
                'message',
                'mic',
                'mic_none',
                'mic_off',
                'mms',
                'mode_comment',
                'mode_edit',
                'money_off',
                'monochrome_photos',
                'mood',
                'mood_bad',
                'more',
                'more_horiz',
                'more_vert',
                'mouse',
                'movie',
                'movie_creation',
                'music_note',
                'my_library_add',
                'my_library_books',
                'my_library_music',
                'my_location',
                'nature',
                'nature_people',
                'navigate_before',
                'navigate_next',
                'navigation',
                'network_cell',
                'network_locked',
                'network_wifi',
                'new_releases',
                'nfc',
                'no_sim',
                'not_interested',
                'note_add',
                'notifications',
                'notifications_active',
                'notifications_none',
                'notifications_off',
                'notifications_paused',
                'offline_pin',
                'ondemand_video',
                'open_in_browser',
                'open_in_new',
                'open_with',
                'pages',
                'pageview',
                'palette',
                'panorama',
                'panorama_fish_eye',
                'panorama_horizontal',
                'panorama_vertical',
                'panorama_wide_angle',
                'party_mode',
                'pause',
                'pause_circle_filled',
                'pause_circle_outline',
                'payment',
                'people',
                'people_outline',
                'perm_camera_mic',
                'perm_contact_calendar',
                'perm_data_setting',
                'perm_device_information',
                'perm_identity',
                'perm_media',
                'perm_phone_msg',
                'perm_scan_wifi',
                'person',
                'person_add',
                'person_outline',
                'person_pin',
                'personal_video',
                'phone',
                'phone_android',
                'phone_bluetooth_speaker',
                'phone_forwarded',
                'phone_in_talk',
                'phone_iphone',
                'phone_locked',
                'phone_missed',
                'phone_paused',
                'phonelink',
                'phonelink_erase',
                'phonelink_lock',
                'phonelink_off',
                'phonelink_ring',
                'phonelink_setup',
                'photo',
                'photo_album',
                'photo_camera',
                'photo_library',
                'photo_size_select_actual',
                'photo_size_select_large',
                'photo_size_select_small',
                'picture_as_pdf',
                'picture_in_picture',
                'pin_drop',
                'place',
                'play_arrow',
                'play_circle_filled',
                'play_circle_outline',
                'play_for_work',
                'play_shopping_bag',
                'playlist_add',
                'plus_one',
                'poll',
                'polymer',
                'portable_wifi_off',
                'portrait',
                'power',
                'power_input',
                'power_settings_new',
                'present_to_all',
                'print',
                'public',
                'publish',
                'query_builder',
                'question_answer',
                'queue',
                'queue_music',
                'radio',
                'radio_button_checked',
                'radio_button_unchecked',
                'rate_review',
                'receipt',
                'recent_actors',
                'redeem',
                'redo',
                'refresh',
                'remove',
                'remove_circle',
                'remove_circle_outline',
                'remove_red_eye',
                'reorder',
                'repeat',
                'repeat_one',
                'replay',
                'replay_10',
                'replay_30',
                'replay_5',
                'reply',
                'reply_all',
                'report',
                'report_problem',
                'restaurant_menu',
                'restore',
                'ring_volume',
                'room',
                'rotate_90_degrees_ccw',
                'rotate_left',
                'rotate_right',
                'router',
                'satellite',
                'save',
                'scanner',
                'schedule',
                'school',
                'screen_lock_landscape',
                'screen_lock_portrait',
                'screen_lock_rotation',
                'screen_rotation',
                'sd_card',
                'sd_storage',
                'search',
                'security',
                'select_all',
                'send',
                'settings',
                'settings_applications',
                'settings_backup_restore',
                'settings_bluetooth',
                'settings_brightness',
                'settings_cell',
                'settings_ethernet',
                'settings_input_antenna',
                'settings_input_component',
                'settings_input_composite',
                'settings_input_hdmi',
                'settings_input_svideo',
                'settings_overscan',
                'settings_phone',
                'settings_power',
                'settings_remote',
                'settings_system_daydream',
                'settings_voice',
                'share',
                'shop',
                'shop_two',
                'shopping_basket',
                'shopping_cart',
                'shuffle',
                'signal_cellular_4_bar',
                'signal_cellular_connected_no_internet_4_bar',
                'signal_cellular_no_sim',
                'signal_cellular_null',
                'signal_cellular_off',
                'signal_wifi_4_bar',
                'signal_wifi_4_bar_lock',
                'signal_wifi_off',
                'sim_card',
                'sim_card_alert',
                'skip_next',
                'skip_previous',
                'slideshow',
                'smartphone',
                'sms',
                'sms_failed',
                'snooze',
                'sort',
                'sort_by_alpha',
                'space_bar',
                'speaker',
                'speaker_group',
                'speaker_notes',
                'speaker_phone',
                'spellcheck',
                'star',
                'star_border',
                'star_half',
                'stars',
                'stay_current_landscape',
                'stay_current_portrait',
                'stay_primary_landscape',
                'stay_primary_portrait',
                'stop',
                'storage',
                'store',
                'store_mall_directory',
                'straighten',
                'strikethrough_s',
                'style',
                'subject',
                'subtitles',
                'supervisor_account',
                'surround_sound',
                'swap_calls',
                'swap_horiz',
                'swap_vert',
                'swap_vertical_circle',
                'switch_camera',
                'switch_video',
                'sync',
                'sync_disabled',
                'sync_problem',
                'system_update',
                'system_update_alt',
                'tab',
                'tab_unselected',
                'tablet',
                'tablet_android',
                'tablet_mac',
                'tag_faces',
                'tap_and_play',
                'terrain',
                'text_format',
                'textsms',
                'texture',
                'theaters',
                'thumb_down',
                'thumb_up',
                'thumbs_up_down',
                'time_to_leave',
                'timelapse',
                'timer',
                'timer_10',
                'timer_3',
                'timer_off',
                'toc',
                'today',
                'toll',
                'tonality',
                'toys',
                'track_changes',
                'traffic',
                'transform',
                'translate',
                'trending_down',
                'trending_flat',
                'trending_up',
                'tune',
                'turned_in',
                'turned_in_not',
                'tv',
                'undo',
                'unfold_less',
                'unfold_more',
                'usb',
                'verified_user',
                'vertical_align_bottom',
                'vertical_align_center',
                'vertical_align_top',
                'vibration',
                'video_library',
                'videocam',
                'videocam_off',
                'view_agenda',
                'view_array',
                'view_carousel',
                'view_column',
                'view_comfy',
                'view_compact',
                'view_day',
                'view_headline',
                'view_list',
                'view_module',
                'view_quilt',
                'view_stream',
                'view_week',
                'vignette',
                'visibility',
                'visibility_off',
                'voice_chat',
                'voicemail',
                'volume_down',
                'volume_mute',
                'volume_off',
                'volume_up',
                'vpn_key',
                'vpn_lock',
                'wallpaper',
                'warning',
                'watch',
                'wb_auto',
                'wb_cloudy',
                'wb_incandescent',
                'wb_iridescent',
                'wb_sunny',
                'wc',
                'web',
                'whatshot',
                'widgets',
                'wifi',
                'wifi_lock',
                'wifi_tethering',
                'work',
                'wrap_text',
                'youtube_searched_for',
                'zoom_in',
                'zoom_out',
            ];
        }
        Object.defineProperty(IconService.prototype, "icons", {
            get: /**
             * @return {?}
             */ function () {
                return this._icons;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} query
         * @return {?}
         */
        IconService.prototype.filter = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                return this.icons.filter(function (el) {
                    return el.toLowerCase().indexOf(query ? query.toLowerCase() : '') > -1;
                });
            };
        IconService.decorators = [
            { type: core.Injectable }
        ];
        return IconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_ANIMATIONS = [
        TdToggleDirective,
        TdFadeDirective,
    ];
    /** @type {?} */
    var TD_FORMS = [
        TdAutoTrimDirective,
    ];
    // Validators
    /** @type {?} */
    var TD_VALIDATORS = [];
    /** @type {?} */
    var TD_PIPES = [
        TdTimeAgoPipe,
        TdTimeDifferencePipe,
        TdTimeUntilPipe,
        TdBytesPipe,
        TdDecimalBytesPipe,
        TdDigitsPipe,
        TdTruncatePipe,
    ];
    var CovalentCommonModule = /** @class */ (function () {
        function CovalentCommonModule() {
        }
        CovalentCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                        ],
                        declarations: [
                            TD_FORMS,
                            TD_PIPES,
                            TD_ANIMATIONS,
                            TD_VALIDATORS,
                        ],
                        exports: [
                            forms.FormsModule,
                            common.CommonModule,
                            TD_FORMS,
                            TD_PIPES,
                            TD_ANIMATIONS,
                            TD_VALIDATORS,
                        ],
                        providers: [
                            RouterPathService,
                            IconService,
                        ],
                    },] }
        ];
        return CovalentCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdRotateAnimation
     *
     * Parameter Options:
     * * degressStart: Degrees of rotation that the dom object will end up in during the "false" state
     * * degreesEnd: Degrees of rotation that the dom object will end up in during the "true" state
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerates and decelerates. Defaults to ease-in.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a rotation animation.
     *
     * usage: [\@tdRotate]="{ value: true | false, params: { degreesEnd: 90 }}"
     * @type {?}
     */
    var tdRotateAnimation = animations.trigger('tdRotate', [
        animations.state('0', animations.style({
            transform: 'rotate({{ degressStart }}deg)',
        }), { params: { degressStart: 0 } }),
        animations.state('1', animations.style({
            transform: 'rotate({{ degreesEnd }}deg)',
        }), { params: { degreesEnd: 180 } }),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
            ]),
        ], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
    ]);
    /**
     * @deprecated see tdRotateAnimation
     * @param {?=} rotateOptions
     * @return {?}
     */
    function TdRotateAnimation(rotateOptions) {
        if (rotateOptions === void 0) {
            rotateOptions = {};
        }
        return animations.trigger(rotateOptions.anchor || 'tdRotate', [
            animations.state('0', animations.style({
                transform: 'rotate(0deg)',
            })),
            animations.state('1', animations.style({
                transform: 'rotate(' + (rotateOptions.degrees || 180) + 'deg)',
            })),
            animations.transition('0 <=> 1', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((rotateOptions.duration || 250) + 'ms ' +
                        (rotateOptions.delay || 0) + 'ms ' +
                        (rotateOptions.ease || 'ease-in')),
                ]),
            ]),
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdCollapseAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
     * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a collapse/expand animation.
     *
     * usage: [\@tdCollapse]="{ value: true | false, params: { duration: 500 }}"
     * @type {?}
     */
    var tdCollapseAnimation = animations.trigger('tdCollapse', [
        animations.state('1', animations.style({
            height: '0',
            visibility: 'hidden',
        })),
        animations.state('0', animations.style({
            height: animations.AUTO_STYLE,
            visibility: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
    ]);
    /**
     * @deprecated see tdCollapseAnimation
     * @param {?=} collapseOptions
     * @return {?}
     */
    function TdCollapseAnimation(collapseOptions) {
        if (collapseOptions === void 0) {
            collapseOptions = {};
        }
        return animations.trigger(collapseOptions.anchor || 'tdCollapse', [
            animations.state('1', animations.style({
                height: '0',
                visibility: 'hidden',
            })),
            animations.state('0', animations.style({
                height: animations.AUTO_STYLE,
                visibility: animations.AUTO_STYLE,
            })),
            animations.transition('0 => 1', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((collapseOptions.duration || 150) + 'ms ' +
                        (collapseOptions.delay || 0) + 'ms ' +
                        (collapseOptions.easeOnClose || 'ease-in')),
                ]),
            ]),
            animations.transition('1 => 0', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((collapseOptions.duration || 150) + 'ms ' +
                        (collapseOptions.delay || 0) + 'ms ' +
                        (collapseOptions.easeOnOpen || 'ease-out')),
                ]),
            ]),
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdFadeInOutAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
     * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a fade animation.
     *
     * usage: [\@tdFadeInOut]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdFadeInOutAnimation = animations.trigger('tdFadeInOut', [
        animations.state('0', animations.style({
            opacity: '0',
            visibility: 'hidden',
        })),
        animations.state('1', animations.style({
            opacity: animations.AUTO_STYLE,
            visibility: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ easeOnIn }}'),
            ]),
        ], { params: { duration: 150, delay: '0', easeOnIn: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ easeOnOut }}'),
            ]),
        ], { params: { duration: 150, delay: '0', easeOnOut: 'ease-out' } }),
    ]);
    /**
     * @deprecated see tdFadeInOutAnimation
     * @param {?=} fadeInOut
     * @return {?}
     */
    function TdFadeInOutAnimation(fadeInOut) {
        if (fadeInOut === void 0) {
            fadeInOut = {};
        }
        return animations.trigger((fadeInOut.anchor || 'tdFadeInOut'), [
            animations.state('0', animations.style({
                opacity: '0',
                visibility: 'hidden',
            })),
            animations.state('1', animations.style({
                opacity: animations.AUTO_STYLE,
                visibility: animations.AUTO_STYLE,
            })),
            animations.transition('0 => 1', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((fadeInOut.duration || 150) + 'ms ' +
                        (fadeInOut.delay || 0) + 'ms ' +
                        (fadeInOut.easeOnIn || 'ease-in')),
                ]),
            ]),
            animations.transition('1 => 0', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((fadeInOut.duration || 150) + 'ms ' +
                        (fadeInOut.delay || 0) + 'ms ' +
                        (fadeInOut.easeOnOut || 'ease-out')),
                ]),
            ]),
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdBounceAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a bounce animation.
     *
     * usage: [\@tdBounce]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdBounceAnimation = animations.trigger('tdBounce', [
        animations.state('0', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.state('1', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8 }),
                    animations.style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);
    /**
     * @deprecated see tdBounceAnimation
     * @param {?=} bounceOptions
     * @return {?}
     */
    function TdBounceAnimation(bounceOptions) {
        if (bounceOptions === void 0) {
            bounceOptions = {};
        }
        return animations.trigger(bounceOptions.anchor || 'tdBounce', [
            animations.state('0', animations.style({
                transform: 'translate3d(0, 0, 0)',
            })),
            animations.state('1', animations.style({
                transform: 'translate3d(0, 0, 0)',
            })),
            animations.transition('0 <=> 1', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((bounceOptions.duration || 500) + 'ms ' + (bounceOptions.delay || 0) + 'ms', animations.keyframes([
                        animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0 }),
                        animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
                        animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
                        animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43 }),
                        animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
                        animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7 }),
                        animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8 }),
                        animations.style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
                        animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0 }),
                    ])),
                ]),
            ]),
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdFlashAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a flash animation.
     *
     * usage: [\@tdFlash]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdFlashAnimation = animations.trigger('tdFlash', [
        animations.state('0', animations.style({
            opacity: 1,
        })),
        animations.state('1', animations.style({
            opacity: 1,
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ opacity: 1, offset: 0 }),
                    animations.style({ opacity: 0, offset: 0.25 }),
                    animations.style({ opacity: 1, offset: 0.5 }),
                    animations.style({ opacity: 0, offset: 0.75 }),
                    animations.style({ opacity: 1, offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);
    /**
     * @deprecated see tdFlashAnimation
     * @param {?=} flashOptions
     * @return {?}
     */
    function TdFlashAnimation(flashOptions) {
        if (flashOptions === void 0) {
            flashOptions = {};
        }
        return animations.trigger(flashOptions.anchor || 'tdFlash', [
            animations.state('0', animations.style({
                opacity: 1,
            })),
            animations.state('1', animations.style({
                opacity: 1,
            })),
            animations.transition('0 <=> 1', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((flashOptions.duration || 500) + 'ms ' + (flashOptions.delay || 0) + 'ms', animations.keyframes([
                        animations.style({ opacity: 1, offset: 0 }),
                        animations.style({ opacity: 0, offset: 0.25 }),
                        animations.style({ opacity: 1, offset: 0.5 }),
                        animations.style({ opacity: 0, offset: 0.75 }),
                        animations.style({ opacity: 1, offset: 1.0 }),
                    ])),
                ]),
            ]),
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdHeadshakeAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a headshake animation.
     *
     * usage: [\@tdHeadshake]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdHeadshakeAnimation = animations.trigger('tdHeadshake', [
        animations.state('0', animations.style({
            transform: 'translateX(0)',
        })),
        animations.state('1', animations.style({
            transform: 'translateX(0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'translateX(0)', offset: 0 }),
                    animations.style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                    animations.style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                    animations.style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                    animations.style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                    animations.style({ transform: 'translateX(0)', offset: 0.50 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);
    /**
     * @deprecated see tdHeadshakeAnimation
     * @param {?=} headshakeOptions
     * @return {?}
     */
    function TdHeadshakeAnimation(headshakeOptions) {
        if (headshakeOptions === void 0) {
            headshakeOptions = {};
        }
        return animations.trigger(headshakeOptions.anchor || 'tdHeadshake', [
            animations.state('0', animations.style({
                transform: 'translateX(0)',
            })),
            animations.state('1', animations.style({
                transform: 'translateX(0)',
            })),
            animations.transition('0 <=> 1', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((headshakeOptions.duration || 500) + 'ms ' + (headshakeOptions.delay || 0) + 'ms', animations.keyframes([
                        animations.style({ transform: 'translateX(0)', offset: 0 }),
                        animations.style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                        animations.style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                        animations.style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                        animations.style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                        animations.style({ transform: 'translateX(0)', offset: 0.50 }),
                    ])),
                ]),
            ]),
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdJelloAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a jello animation.
     *
     * usage: [\@tdJello]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdJelloAnimation = animations.trigger('tdJello', [
        animations.state('0', animations.style({
            transform: 'none',
        })),
        animations.state('1', animations.style({
            transform: 'none',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'none', offset: 0 }),
                    animations.style({ transform: 'none', offset: 0.011 }),
                    animations.style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                    animations.style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                    animations.style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                    animations.style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                    animations.style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                    animations.style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                    animations.style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);
    /**
     * @deprecated see tdJelloAnimation
     * @param {?=} jelloOptions
     * @return {?}
     */
    function TdJelloAnimation(jelloOptions) {
        if (jelloOptions === void 0) {
            jelloOptions = {};
        }
        return animations.trigger(jelloOptions.anchor || 'tdJello', [
            animations.state('0', animations.style({
                transform: 'none',
            })),
            animations.state('1', animations.style({
                transform: 'none',
            })),
            animations.transition('0 <=> 1', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((jelloOptions.duration || 500) + 'ms ' + (jelloOptions.delay || 0) + 'ms', animations.keyframes([
                        animations.style({ transform: 'none', offset: 0 }),
                        animations.style({ transform: 'none', offset: 0.011 }),
                        animations.style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                        animations.style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                        animations.style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                        animations.style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                        animations.style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                        animations.style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                        animations.style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
                    ])),
                ]),
            ]),
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdPulseAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a pulse animation.
     *
     * usage: [\@tdPulse]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdPulseAnimation = animations.trigger('tdPulse', [
        animations.state('0', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.state('1', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    animations.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);
    /**
     * @deprecated see tdPulseAnimation
     * @param {?=} pulseOptions
     * @return {?}
     */
    function TdPulseAnimation(pulseOptions) {
        if (pulseOptions === void 0) {
            pulseOptions = {};
        }
        return animations.trigger(pulseOptions.anchor || 'tdPulse', [
            animations.state('0', animations.style({
                transform: 'scale3d(1, 1, 1)',
            })),
            animations.state('1', animations.style({
                transform: 'scale3d(1, 1, 1)',
            })),
            animations.transition('0 <=> 1', [
                animations.group([
                    animations.query('@*', animations.animateChild(), { optional: true }),
                    animations.animate((pulseOptions.duration || 500) + 'ms ' + (pulseOptions.delay || 0) + 'ms', animations.keyframes([
                        animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                        animations.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                        animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                    ])),
                ]),
            ]),
        ]);
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = function () {
        // empty method
    };
    /**
     * Mixin to augment a component with ngModel support.
     * @template T
     * @param {?} base
     * @param {?=} initialValue
     * @return {?}
     */
    function mixinControlValueAccessor(base, initialValue) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._value = initialValue;
                _this.onChange = function (_) { return noop; };
                _this.onTouched = function () { return noop; };
                _this._subjectValueChanges = new rxjs.Subject();
                _this.valueChanges = _this._subjectValueChanges.asObservable();
                return _this;
            }
            Object.defineProperty(class_1.prototype, "value", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._value;
                },
                set: /**
                 * @param {?} v
                 * @return {?}
                 */ function (v) {
                    if (v !== this._value) {
                        this._value = v;
                        this.onChange(v);
                        this._changeDetectorRef.markForCheck();
                        this._subjectValueChanges.next(v);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.writeValue = /**
             * @param {?} value
             * @return {?}
             */
                function (value) {
                    this.value = value;
                    this._changeDetectorRef.markForCheck();
                };
            /**
             * @param {?} fn
             * @return {?}
             */
            class_1.prototype.registerOnChange = /**
             * @param {?} fn
             * @return {?}
             */
                function (fn) {
                    this.onChange = fn;
                };
            /**
             * @param {?} fn
             * @return {?}
             */
            class_1.prototype.registerOnTouched = /**
             * @param {?} fn
             * @return {?}
             */
                function (fn) {
                    this.onTouched = fn;
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Mixin to augment a component or directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisabled(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disabled = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disabled", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._disabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    /** @type {?} */
                    var newValue = coercion.coerceBooleanProperty(value);
                    if (this._disabled !== newValue) {
                        this._disabled = newValue;
                        this.onDisabledChange(this._disabled);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} v
             * @return {?}
             */
            class_1.prototype.onDisabledChange = /**
             * @param {?} v
             * @return {?}
             */
                function (v) {
                    /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Mixin to augment a component or directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisableRipple(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disableRipple = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disableRipple", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._disableRipple;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    /** @type {?} */
                    var newValue = coercion.coerceBooleanProperty(value);
                    if (this._disableRipple !== newValue) {
                        this._disableRipple = newValue;
                        this.onDisableRippleChange(this._disableRipple);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} v
             * @return {?}
             */
            class_1.prototype.onDisableRippleChange = /**
             * @param {?} v
             * @return {?}
             */
                function (v) {
                    /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentValidators = /** @class */ (function () {
        function CovalentValidators() {
        }
        /**
         * @param {?} minValue
         * @return {?}
         */
        CovalentValidators.min = /**
         * @param {?} minValue
         * @return {?}
         */
            function (minValue) {
                /** @type {?} */
                var func = function (c) {
                    if (!!forms.Validators.required(c) || (!minValue && minValue !== 0)) {
                        return undefined;
                    }
                    /** @type {?} */
                    var v = c.value;
                    return v < minValue ?
                        { min: { minValue: minValue, actualValue: v } } :
                        undefined;
                };
                return func;
            };
        /**
         * @param {?} maxValue
         * @return {?}
         */
        CovalentValidators.max = /**
         * @param {?} maxValue
         * @return {?}
         */
            function (maxValue) {
                /** @type {?} */
                var func = function (c) {
                    if (!!forms.Validators.required(c) || (!maxValue && maxValue !== 0)) {
                        return undefined;
                    }
                    /** @type {?} */
                    var v = c.value;
                    return v > maxValue ?
                        { max: { maxValue: maxValue, actualValue: v } } :
                        undefined;
                };
                return func;
            };
        /**
         * @param {?} c
         * @return {?}
         */
        CovalentValidators.numberRequired = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                return (Number.isNaN(c.value)) ?
                    { required: true } :
                    undefined;
            };
        return CovalentValidators;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentCommonModule = CovalentCommonModule;
    exports.TdToggleDirective = TdToggleDirective;
    exports.TdFadeDirective = TdFadeDirective;
    exports.TdRotateAnimation = TdRotateAnimation;
    exports.tdRotateAnimation = tdRotateAnimation;
    exports.TdCollapseAnimation = TdCollapseAnimation;
    exports.tdCollapseAnimation = tdCollapseAnimation;
    exports.TdFadeInOutAnimation = TdFadeInOutAnimation;
    exports.tdFadeInOutAnimation = tdFadeInOutAnimation;
    exports.TdBounceAnimation = TdBounceAnimation;
    exports.tdBounceAnimation = tdBounceAnimation;
    exports.TdFlashAnimation = TdFlashAnimation;
    exports.tdFlashAnimation = tdFlashAnimation;
    exports.TdHeadshakeAnimation = TdHeadshakeAnimation;
    exports.tdHeadshakeAnimation = tdHeadshakeAnimation;
    exports.TdJelloAnimation = TdJelloAnimation;
    exports.tdJelloAnimation = tdJelloAnimation;
    exports.TdPulseAnimation = TdPulseAnimation;
    exports.tdPulseAnimation = tdPulseAnimation;
    exports.mixinControlValueAccessor = mixinControlValueAccessor;
    exports.mixinDisabled = mixinDisabled;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.TdAutoTrimDirective = TdAutoTrimDirective;
    exports.CovalentValidators = CovalentValidators;
    exports.TdTimeAgoPipe = TdTimeAgoPipe;
    exports.TdTimeDifferencePipe = TdTimeDifferencePipe;
    exports.TdBytesPipe = TdBytesPipe;
    exports.TdDigitsPipe = TdDigitsPipe;
    exports.TdTruncatePipe = TdTruncatePipe;
    exports.TdDecimalBytesPipe = TdDecimalBytesPipe;
    exports.ɵa = TdTimeUntilPipe;
    exports.ɵc = IconService;
    exports.ɵb = RouterPathService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jb21tb24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvZmFkZS9mYWRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2Zvcm1zL2F1dG8tdHJpbS9hdXRvLXRyaW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvdGltZS1hZ28vdGltZS1hZ28ucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL3RpbWUtZGlmZmVyZW5jZS90aW1lLWRpZmZlcmVuY2UucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL3RpbWUtdW50aWwvdGltZS11bnRpbC5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvYnl0ZXMvYnl0ZXMucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL2RlY2ltYWwtYnl0ZXMvZGVjaW1hbC1ieXRlcy5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvZGlnaXRzL2RpZ2l0cy5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvdHJ1bmNhdGUvdHJ1bmNhdGUucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3NlcnZpY2VzL3JvdXRlci1wYXRoLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9zZXJ2aWNlcy9pY29uLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9yb3RhdGUvcm90YXRlLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvY29sbGFwc2UvY29sbGFwc2UuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9mYWRlL2ZhZGVJbk91dC5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2JvdW5jZS9ib3VuY2UuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9mbGFzaC9mbGFzaC5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2hlYWRzaGFrZS9oZWFkc2hha2UuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9qZWxsby9qZWxsby5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL3B1bHNlL3B1bHNlLmFuaW1hdGlvbi50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9iZWhhdmlvcnMvY29udHJvbC12YWx1ZS1hY2Nlc29yLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYmVoYXZpb3JzL2Rpc2FibGVkLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYmVoYXZpb3JzL2Rpc2FibGUtcmlwcGxlLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vZm9ybXMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25QbGF5ZXIsIEFVVE9fU1RZTEUsIHN0eWxlLCBhbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkVG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkVG9nZ2xlRGlyZWN0aXZlIHtcblxuICBwcml2YXRlIF9zdGF0ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGVmYXVsdE92ZXJmbG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RlZmF1bHREaXNwbGF5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FuaW1hdGlvblNob3dQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uSGlkZVBsYXllcjogQW5pbWF0aW9uUGxheWVyO1xuXG4gIC8qKlxuICAgKiBkdXJhdGlvbj86IG51bWJlclxuICAgKiBTZXRzIGR1cmF0aW9uIG9mIHRvZ2dsZSBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBEZWZhdWx0cyB0byAxNTAgbXMuXG4gICAqL1xuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyID0gMTUwO1xuXG4gIC8qKlxuICAgKiB0ZFRvZ2dsZTogYm9vbGVhblxuICAgKiBUb2dnbGVzIGVsZW1lbnQsIGhpZGVzIGlmIGl0cyAndHJ1ZScsIHNob3dzIGlmIGl0cyAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCd0ZFRvZ2dsZScpXG4gIHNldCBzdGF0ZShzdGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25TaG93UGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ2FyaWEtZXhwYW5kZWQnIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcbiAgZ2V0IGFyaWFFeHBhbmRlZEJpbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ2FyaWEtaGlkZGVuJyBhdHRyaWJ1dGUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKVxuICBnZXQgYXJpYUhpZGRlbkJpbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7XG4gICAgdGhpcy5fZGVmYXVsdERpc3BsYXkgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICB0aGlzLl9kZWZhdWx0T3ZlcmZsb3cgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgZWxlbWVudDogc2V0cyBcImRpc3BsYXk6W2RlZmF1bHRdXCIgc28gYW5pbWF0aW9uIGlzIHNob3duLFxuICAgKiBzdGFydHMgYW5pbWF0aW9uIGFuZCBhZGRzIFwiZGlzcGxheTonbm9uZSdcIiBzdHlsZSBhdCB0aGUgZW5kLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyID0gdGhpcy5fYW5pbWF0aW9uQnVpbGRlci5idWlsZChhbmltYXRpb24oW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICAgIGRpc3BsYXk6IEFVVE9fU1RZTEUsXG4gICAgICB9KSxcbiAgICAgIGFuaW1hdGUodGhpcy5kdXJhdGlvbiArICdtcyBlYXNlLWluJywgc3R5bGUoe2hlaWdodDogJzAnfSkpLFxuICAgIF0pKS5jcmVhdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vbkhpZGVEb25lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllci5wbGF5KCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgZWxlbWVudDogc2V0cyBcImRpc3BsYXk6W2RlZmF1bHRdXCIgc28gYW5pbWF0aW9uIGlzIHNob3duLFxuICAgKiBzdGFydHMgYW5pbWF0aW9uIGFuZCBhZGRzIFwib3ZlcmZsb3c6W2RlZmF1bHRdXCIgc3R5bGUgYWdhaW4gYXQgdGhlIGVuZC5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2RlZmF1bHREaXNwbGF5KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25TaG93UGxheWVyID0gdGhpcy5fYW5pbWF0aW9uQnVpbGRlci5idWlsZChhbmltYXRpb24oW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKHRoaXMuZHVyYXRpb24gKyAnbXMgZWFzZS1vdXQnLCBzdHlsZSh7aGVpZ2h0OiBBVVRPX1NUWUxFfSkpLFxuICAgIF0pKS5jcmVhdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB0aGlzLl9hbmltYXRpb25TaG93UGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vblNob3dEb25lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllci5wbGF5KCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkhpZGVEb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkhpZGVQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsIHRoaXMuX2RlZmF1bHRPdmVyZmxvdyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uU2hvd0RvbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgdGhpcy5fZGVmYXVsdE92ZXJmbG93KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25QbGF5ZXIsIEFVVE9fU1RZTEUsIHN0eWxlLCBhbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRmFkZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZhZGVEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBib29sZWFuO1xuICBwcml2YXRlIF9kZWZhdWx0RGlzcGxheTogc3RyaW5nO1xuICBwcml2YXRlIF9hbmltYXRpb25GYWRlSW5QbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uRmFkZU91dFBsYXllcjogQW5pbWF0aW9uUGxheWVyO1xuXG4gIC8qKlxuICAgKiBkdXJhdGlvbj86IG51bWJlclxuICAgKiBTZXRzIGR1cmF0aW9uIG9mIGZhZGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICogRGVmYXVsdHMgdG8gMTUwIG1zLlxuICAgKi9cbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciA9IDE1MDtcblxuICAvKipcbiAgICogdGRGYWRlOiBib29sZWFuXG4gICAqIEZhZGVzIGVsZW1lbnQsIEZhZGVzT3V0IGlmIGl0cyAndHJ1ZScsIEZhZGVzSW4gaWYgaXRzICdmYWxzZScuXG4gICAqL1xuICBASW5wdXQoJ3RkRmFkZScpXG4gIHNldCBzdGF0ZShzdGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uRmFkZUluUGxheWVyKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBmYWRlSW4/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBmYWRlSW4gYW5pbWF0aW9uIGVuZHMuXG4gICAqL1xuICBAT3V0cHV0KCdmYWRlSW4nKSBvbkZhZGVJbjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBmYWRlT3V0PzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gZmFkZU91dCBhbmltYXRpb24gZW5kcy5cbiAgICovXG4gIEBPdXRwdXQoJ2ZhZGVPdXQnKSBvbkZhZGVPdXQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdhcmlhLWV4cGFuZGVkJyBhdHRyaWJ1dGUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIGdldCBhcmlhRXhwYW5kZWRCaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5fc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdhcmlhLWhpZGRlbicgYXR0cmlidXRlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJylcbiAgZ2V0IGFyaWFIaWRkZW5CaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge1xuICAgIHRoaXMuX2RlZmF1bHREaXNwbGF5ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgZWxlbWVudDogc3RhcnRzIGFuaW1hdGlvbiBhbmQgYWRkcyBcImRpc3BsYXk6J25vbmUnXCIgc3R5bGUgYXQgdGhlIGVuZC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW9uRmFkZUluUGxheWVyID0gdGhpcy5fYW5pbWF0aW9uQnVpbGRlci5idWlsZChhbmltYXRpb24oW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiBBVVRPX1NUWUxFLFxuICAgICAgICBkaXNwbGF5OiBBVVRPX1NUWUxFLFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKHRoaXMuZHVyYXRpb24gKyAnbXMgZWFzZS1vdXQnLCBzdHlsZSh7b3BhY2l0eTogJzAnfSkpLFxuICAgIF0pKS5jcmVhdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgIHRoaXMuX29uRmFkZUluRG9uZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllci5wbGF5KCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgZWxlbWVudDogc2V0cyBcImRpc3BsYXk6W2RlZmF1bHRdXCIgc28gYW5pbWF0aW9uIGlzIHNob3duLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdGhpcy5fZGVmYXVsdERpc3BsYXkpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIgPSB0aGlzLl9hbmltYXRpb25CdWlsZGVyLmJ1aWxkKGFuaW1hdGlvbihbXG4gICAgICBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKHRoaXMuZHVyYXRpb24gKyAnbXMgZWFzZS1pbicsIHN0eWxlKHtvcGFjaXR5OiBBVVRPX1NUWUxFfSkpLFxuICAgIF0pKS5jcmVhdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZhZGVPdXREb25lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllci5wbGF5KCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkZhZGVJbkRvbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllcikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uRmFkZUluUGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLm9uRmFkZUluLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbkZhZGVPdXREb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMub25GYWRlT3V0LmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdExpc3RlbmVyLCBIb3N0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkQXV0b1RyaW1dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRBdXRvVHJpbURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIF9tb2RlbDogTmdNb2RlbCkge31cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0J3MgKGJsdXIpIGV2ZW50IGFuZCB0cmltcyB2YWx1ZS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxuICBvbkJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGVsICYmIHRoaXMuX21vZGVsLnZhbHVlICYmIHR5cGVvZih0aGlzLl9tb2RlbC52YWx1ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9tb2RlbC51cGRhdGUuZW1pdCh0aGlzLl9tb2RlbC52YWx1ZS50cmltKCkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lQWdvJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRUaW1lQWdvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGltZTogYW55LCByZWZlcmVuY2U/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIENvbnZlcnQgdGltZSB0byBkYXRlIG9iamVjdCBpZiBub3QgYWxyZWFkeVxuICAgIHRpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgcmVmOiBEYXRlID0gbmV3IERhdGUocmVmZXJlbmNlKTtcblxuICAgIC8vIElmIG5vdCBhIHZhbGlkIHRpbWVzdGFtcCwgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gICAgaWYgKCF0aW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIC8vIEZvciB1bml0IHRlc3RpbmcsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZWNsYXJlIGEgc3RhdGljIHN0YXJ0IHRpbWVcbiAgICAvLyBmb3IgY2FsY3VsYXRpb25zLCBvciBlbHNlIHNwZWVkIG9mIHRlc3RzIGNhbiBib3JrLlxuICAgIGxldCBzdGFydFRpbWU6IG51bWJlciA9IGlzTmFOKHJlZi5nZXRUaW1lKCkpID8gRGF0ZS5ub3coKSA6IHJlZi5nZXRUaW1lKCk7XG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKHN0YXJ0VGltZSAtIHRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgc2Vjb25kIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBzZWNvbmRzIGFnbyc7XG4gICAgfVxuICAgIC8vIE1pbnV0ZXNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIG1pbnV0ZSBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgbWludXRlcyBhZ28nO1xuICAgIH1cbiAgICAvLyBIb3Vyc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgaG91ciBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDI0KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgaG91cnMgYWdvJztcbiAgICB9XG4gICAgLy8gRGF5c1xuICAgIGRpZmYgPSBkaWZmIC8gMjQ7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgZGF5IGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMzApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBkYXlzIGFnbyc7XG4gICAgfVxuICAgIC8vIE1vbnRoc1xuICAgIGRpZmYgPSBkaWZmIC8gMzA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgbW9udGggYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAxMikge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIG1vbnRocyBhZ28nO1xuICAgIH1cbiAgICAvLyBZZWFyc1xuICAgIGRpZmYgPSBkaWZmIC8gMTI7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgeWVhciBhZ28nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgeWVhcnMgYWdvJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGltZURpZmZlcmVuY2UnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkVGltZURpZmZlcmVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdGFydDogYW55LCBlbmQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBzdGFydFRpbWU6IERhdGUgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgbGV0IGVuZFRpbWU6IERhdGU7XG5cbiAgICBpZiAoZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZShlbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXJ0VGltZS5nZXRUaW1lKCkgfHwgIWVuZFRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgIGxldCBkYXlzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjAgKiA2MCAqIDI0KSk7XG4gICAgZGlmZiA9IGRpZmYgLSAoZGF5cyAqICg2MCAqIDYwICogMjQpKTtcblxuICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwICogNjApKTtcbiAgICBkaWZmID0gZGlmZiAtIChob3VycyAqICg2MCAqIDYwKSk7XG5cbiAgICBsZXQgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwKSk7XG4gICAgZGlmZiAtPSBtaW51dGVzICogKDYwKTtcblxuICAgIGxldCBzZWNvbmRzOiBudW1iZXIgPSBkaWZmO1xuXG4gICAgbGV0IHBhZDogc3RyaW5nID0gJzAwJztcblxuICAgIGxldCBkYXlzRm9ybWF0dGVkOiBzdHJpbmcgPSAnJztcblxuICAgIGlmIChkYXlzID4gMCAmJiBkYXlzIDwgMikge1xuICAgICAgZGF5c0Zvcm1hdHRlZCA9ICcgZGF5IC0gJztcbiAgICB9IGVsc2UgaWYgKGRheXMgPiAxKSB7XG4gICAgICBkYXlzRm9ybWF0dGVkID0gJyBkYXlzIC0gJyA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChkYXlzID4gMCA/IGRheXMgKyBkYXlzRm9ybWF0dGVkIDogZGF5c0Zvcm1hdHRlZCkgK1xuICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAoaG91cnMgKyAnJykubGVuZ3RoKSArIGhvdXJzICsgJzonICtcbiAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKG1pbnV0ZXMgKyAnJykubGVuZ3RoKSArIG1pbnV0ZXMgKyAnOicgK1xuICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAoc2Vjb25kcyArICcnKS5sZW5ndGgpICsgc2Vjb25kcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lVW50aWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRpbWVVbnRpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRpbWU6IGFueSwgcmVmZXJlbmNlPzogYW55KTogc3RyaW5nIHtcbiAgICAvLyBDb252ZXJ0IHRpbWUgdG8gZGF0ZSBvYmplY3QgaWYgbm90IGFscmVhZHlcbiAgICB0aW1lID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IHJlZjogRGF0ZSA9IG5ldyBEYXRlKHJlZmVyZW5jZSk7XG5cbiAgICAvLyBJZiBub3QgYSB2YWxpZCB0aW1lc3RhbXAsIHJldHVybiAnSW52YWxpZCBEYXRlJ1xuICAgIGlmICghdGltZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG5cbiAgICAvLyBGb3IgdW5pdCB0ZXN0aW5nLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gZGVjbGFyZSBhIHN0YXRpYyBzdGFydCB0aW1lXG4gICAgLy8gZm9yIGNhbGN1bGF0aW9ucywgb3IgZWxzZSBzcGVlZCBvZiB0ZXN0cyBjYW4gYm9yay5cbiAgICBsZXQgc3RhcnRUaW1lOiBudW1iZXIgPSBpc05hTihyZWYuZ2V0VGltZSgpKSA/IERhdGUubm93KCkgOiByZWYuZ2V0VGltZSgpO1xuICAgIGxldCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcblxuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIHNlY29uZCc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIHNlY29uZHMnO1xuICAgIH1cbiAgICAvLyBNaW51dGVzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBtaW51dGUnO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBtaW51dGVzJztcbiAgICB9XG4gICAgLy8gSG91cnNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIGhvdXInO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDI0KSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBob3Vycyc7XG4gICAgfVxuICAgIC8vIERheXNcbiAgICBkaWZmID0gZGlmZiAvIDI0O1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIGRheSc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMzApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIGRheXMnO1xuICAgIH1cbiAgICAvLyBNb250aHNcbiAgICBkaWZmID0gZGlmZiAvIDMwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIG1vbnRoJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAxMikge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgbW9udGhzJztcbiAgICB9XG4gICAgLy8gWWVhcnNcbiAgICBkaWZmID0gZGlmZiAvIDEyO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIHllYXInO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyB5ZWFycyc7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2J5dGVzJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZEJ5dGVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKiBgYnl0ZXNgIG5lZWRzIHRvIGJlIGBhbnlgIG9yIFR5cGVTY3JpcHQgY29tcGxhaW5zXG4gIFRyaWVkIGJvdGggYG51bWJlcmAgYW5kIGBudW1iZXIgfCBzdHJpbmdgICovXG4gIHRyYW5zZm9ybShieXRlczogYW55LCBwcmVjaXNpb246IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwIEInO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VJbnQoYnl0ZXMsIDEwKSkpIHtcbiAgICAgIC8qIElmIG5vdCBhIHZhbGlkIG51bWJlciwgcmV0dXJuICdJbnZhbGlkIE51bWJlcicgKi9cbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICBsZXQgazogbnVtYmVyID0gMTAyNDtcbiAgICBsZXQgc2l6ZXM6IHN0cmluZ1tdID0gWydCJywgJ0tpQicsICdNaUInLCAnR2lCJywgJ1RpQicsICdQaUInLCAnRWlCJywgJ1ppQicsICdZaUInXTtcbiAgICBsZXQgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RlY2ltYWxCeXRlcycsXG59KVxuXG5leHBvcnQgY2xhc3MgVGREZWNpbWFsQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qIGBieXRlc2AgbmVlZHMgdG8gYmUgYGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnNcbiAgVHJpZWQgYm90aCBgbnVtYmVyYCBhbmQgYG51bWJlciB8IHN0cmluZ2AgKi9cbiAgdHJhbnNmb3JtKGJ5dGVzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgaWYgKGJ5dGVzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAgQic7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChieXRlcywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJyAqL1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIGxldCBrOiBudW1iZXIgPSAxMDAwO1xuICAgIGxldCBzaXplczogc3RyaW5nW10gPSBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcbiAgICBsZXQgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBJbmplY3QsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdkaWdpdHMnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkRGlnaXRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHByaXZhdGUgX2RlY2ltYWxQaXBlOiBEZWNpbWFsUGlwZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcgPSAnZW4nKSB7XG4gICAgdGhpcy5fZGVjaW1hbFBpcGUgPSBuZXcgRGVjaW1hbFBpcGUodGhpcy5fbG9jYWxlKTtcbiAgfVxuXG4gIC8qIGBkaWdpdHNgIG5lZWRzIHRvIGJlIHR5cGUgYGRpZ2l0czogYW55YCBvciBUeXBlU2NyaXB0IGNvbXBsYWlucyAqL1xuICB0cmFuc2Zvcm0oZGlnaXRzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMSk6IHN0cmluZyB7XG4gICAgaWYgKGRpZ2l0cyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwJztcbiAgICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlSW50KGRpZ2l0cywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gdGhlIHZhbHVlICovXG4gICAgICByZXR1cm4gZGlnaXRzO1xuICAgIH0gZWxzZSBpZiAoZGlnaXRzIDwgMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxQaXBlLnRyYW5zZm9ybShkaWdpdHMudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgICB9XG4gICAgbGV0IGs6IG51bWJlciA9IDEwMDA7XG4gICAgbGV0IHNpemVzOiBzdHJpbmdbXSA9IFsnJywgJ0snLCAnTScsICdCJywgJ1QnLCAnUSddO1xuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGRpZ2l0cykgLyBNYXRoLmxvZyhrKSk7XG4gICAgbGV0IHNpemU6IHN0cmluZyA9IHNpemVzW2ldO1xuICAgIHJldHVybiB0aGlzLl9kZWNpbWFsUGlwZS50cmFuc2Zvcm0ocGFyc2VGbG9hdCgoZGlnaXRzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQocHJlY2lzaW9uKSkpICsgKHNpemUgPyAnICcgKyBzaXplIDogJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RydW5jYXRlJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGV4dDogYW55LCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIFRydW5jYXRlXG4gICAgbGV0IHRydW5jYXRlZDogc3RyaW5nID0gdGV4dC5zdWJzdHIoMCwgbGVuZ3RoKTtcblxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgaWYgKHRydW5jYXRlZC5sYXN0SW5kZXhPZignICcpID4gMCkge1xuICAgICAgICB0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0cnVuY2F0ZWQgKz0gJ8OiwoDCpic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXNSZWNvZ25pemVkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgZmlsdGVyLCBwYWlyd2lzZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlclBhdGhTZXJ2aWNlIHtcbnByaXZhdGUgc3RhdGljIF9wcmV2aW91c1JvdXRlOiBzdHJpbmcgPSAnLyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5fcm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKChlOiBhbnkpID0+IGUgaW5zdGFuY2VvZiBSb3V0ZXNSZWNvZ25pemVkKSxcbiAgICAgIHBhaXJ3aXNlKCksXG4gICAgKS5zdWJzY3JpYmUoKGU6IGFueVtdKSA9PiB7XG4gICAgICBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZSA9IGVbMF0udXJsQWZ0ZXJSZWRpcmVjdHM7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZ2V0IHRoZSByb3V0ZSB0aGUgdXNlciBwcmV2aW91c2x5IHdlbnQgdG9cbiAgKiBnb29kIGZvciB1c2UgaW4gYSBcImJhY2sgYnV0dG9uXCJcbiAgKi9cbiAgZ2V0UHJldmlvdXNSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IGJ5IFRlcmFkYXRhIENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVEVSQURBVEEgQ09SUE9SQVRJT04gQ09ORklERU5USUFMIEFORCBUUkFERSBTRUNSRVRcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJY29uU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfaWNvbnM6IHN0cmluZ1tdID0gW1xuICAgICdhY2Nlc3NfYWxhcm0nLFxuICAgICdhY2Nlc3NfYWxhcm1zJyxcbiAgICAnYWNjZXNzX3RpbWUnLFxuICAgICdhY2Nlc3NpYmlsaXR5JyxcbiAgICAnYWNjb3VudF9iYWxhbmNlJyxcbiAgICAnYWNjb3VudF9iYWxhbmNlX3dhbGxldCcsXG4gICAgJ2FjY291bnRfYm94JyxcbiAgICAnYWNjb3VudF9jaXJjbGUnLFxuICAgICdhZGQnLFxuICAgICdhZGRfYWxhcm0nLFxuICAgICdhZGRfYm94JyxcbiAgICAnYWRkX2NpcmNsZScsXG4gICAgJ2FkZF9jaXJjbGVfb3V0bGluZScsXG4gICAgJ2FkZF9zaG9wcGluZ19jYXJ0JyxcbiAgICAnYWRkX3RvX3Bob3RvcycsXG4gICAgJ2FkanVzdCcsXG4gICAgJ2FsYXJtJyxcbiAgICAnYWxhcm1fYWRkJyxcbiAgICAnYWxhcm1fb2ZmJyxcbiAgICAnYWxhcm1fb24nLFxuICAgICdhbGJ1bScsXG4gICAgJ2FuZHJvaWQnLFxuICAgICdhbm5vdW5jZW1lbnQnLFxuICAgICdhcHBzJyxcbiAgICAnYXJjaGl2ZScsXG4gICAgJ2Fycm93X2JhY2snLFxuICAgICdhcnJvd19kcm9wX2Rvd24nLFxuICAgICdhcnJvd19kcm9wX2Rvd25fY2lyY2xlJyxcbiAgICAnYXJyb3dfZHJvcF91cCcsXG4gICAgJ2Fycm93X2ZvcndhcmQnLFxuICAgICdhc3BlY3RfcmF0aW8nLFxuICAgICdhc3Nlc3NtZW50JyxcbiAgICAnYXNzaWdubWVudCcsXG4gICAgJ2Fzc2lnbm1lbnRfaW5kJyxcbiAgICAnYXNzaWdubWVudF9sYXRlJyxcbiAgICAnYXNzaWdubWVudF9yZXR1cm4nLFxuICAgICdhc3NpZ25tZW50X3JldHVybmVkJyxcbiAgICAnYXNzaWdubWVudF90dXJuZWRfaW4nLFxuICAgICdhc3Npc3RhbnRfcGhvdG8nLFxuICAgICdhdHRhY2hfZmlsZScsXG4gICAgJ2F0dGFjaF9tb25leScsXG4gICAgJ2F0dGFjaG1lbnQnLFxuICAgICdhdWRpb3RyYWNrJyxcbiAgICAnYXV0b3JlbmV3JyxcbiAgICAnYXZfdGltZXInLFxuICAgICdiYWNrc3BhY2UnLFxuICAgICdiYWNrdXAnLFxuICAgICdiYXR0ZXJ5X2FsZXJ0JyxcbiAgICAnYmF0dGVyeV9jaGFyZ2luZ19mdWxsJyxcbiAgICAnYmF0dGVyeV9mdWxsJyxcbiAgICAnYmF0dGVyeV9zdGQnLFxuICAgICdiYXR0ZXJ5X3Vua25vd24nLFxuICAgICdiZWVuaGVyZScsXG4gICAgJ2Jsb2NrJyxcbiAgICAnYmx1ZXRvb3RoJyxcbiAgICAnYmx1ZXRvb3RoX2F1ZGlvJyxcbiAgICAnYmx1ZXRvb3RoX2Nvbm5lY3RlZCcsXG4gICAgJ2JsdWV0b290aF9kaXNhYmxlZCcsXG4gICAgJ2JsdWV0b290aF9zZWFyY2hpbmcnLFxuICAgICdibHVyX2NpcmN1bGFyJyxcbiAgICAnYmx1cl9saW5lYXInLFxuICAgICdibHVyX29mZicsXG4gICAgJ2JsdXJfb24nLFxuICAgICdib29rJyxcbiAgICAnYm9va21hcmsnLFxuICAgICdib29rbWFya19ib3JkZXInLFxuICAgICdib3JkZXJfYWxsJyxcbiAgICAnYm9yZGVyX2JvdHRvbScsXG4gICAgJ2JvcmRlcl9jbGVhcicsXG4gICAgJ2JvcmRlcl9jb2xvcicsXG4gICAgJ2JvcmRlcl9ob3Jpem9udGFsJyxcbiAgICAnYm9yZGVyX2lubmVyJyxcbiAgICAnYm9yZGVyX2xlZnQnLFxuICAgICdib3JkZXJfb3V0ZXInLFxuICAgICdib3JkZXJfcmlnaHQnLFxuICAgICdib3JkZXJfc3R5bGUnLFxuICAgICdib3JkZXJfdG9wJyxcbiAgICAnYm9yZGVyX3ZlcnRpY2FsJyxcbiAgICAnYnJpZ2h0bmVzc18xJyxcbiAgICAnYnJpZ2h0bmVzc18yJyxcbiAgICAnYnJpZ2h0bmVzc18zJyxcbiAgICAnYnJpZ2h0bmVzc180JyxcbiAgICAnYnJpZ2h0bmVzc181JyxcbiAgICAnYnJpZ2h0bmVzc182JyxcbiAgICAnYnJpZ2h0bmVzc183JyxcbiAgICAnYnJpZ2h0bmVzc19hdXRvJyxcbiAgICAnYnJpZ2h0bmVzc19oaWdoJyxcbiAgICAnYnJpZ2h0bmVzc19sb3cnLFxuICAgICdicmlnaHRuZXNzX21lZGl1bScsXG4gICAgJ2Jyb2tlbl9pbWFnZScsXG4gICAgJ2JydXNoJyxcbiAgICAnYnVnX3JlcG9ydCcsXG4gICAgJ2J1aWxkJyxcbiAgICAnYnVzaW5lc3MnLFxuICAgICdjYWNoZWQnLFxuICAgICdjYWtlJyxcbiAgICAnY2FsbCcsXG4gICAgJ2NhbGxfZW5kJyxcbiAgICAnY2FsbF9tYWRlJyxcbiAgICAnY2FsbF9tZXJnZScsXG4gICAgJ2NhbGxfbWlzc2VkJyxcbiAgICAnY2FsbF9yZWNlaXZlZCcsXG4gICAgJ2NhbGxfc3BsaXQnLFxuICAgICdjYW1lcmEnLFxuICAgICdjYW1lcmFfYWx0JyxcbiAgICAnY2FtZXJhX2Zyb250JyxcbiAgICAnY2FtZXJhX3JlYXInLFxuICAgICdjYW1lcmFfcm9sbCcsXG4gICAgJ2NhbmNlbCcsXG4gICAgJ2Nhc3QnLFxuICAgICdjYXN0X2Nvbm5lY3RlZCcsXG4gICAgJ2NlbnRlcl9mb2N1c19zdHJvbmcnLFxuICAgICdjZW50ZXJfZm9jdXNfd2VhaycsXG4gICAgJ2NoYXQnLFxuICAgICdjaGVjaycsXG4gICAgJ2NoZWNrX2JveCcsXG4gICAgJ2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJyxcbiAgICAnY2hlY2tfY2lyY2xlJyxcbiAgICAnY2hldnJvbl9sZWZ0JyxcbiAgICAnY2hldnJvbl9yaWdodCcsXG4gICAgJ2NsYXNzJyxcbiAgICAnY2xlYXInLFxuICAgICdjbGVhcl9hbGwnLFxuICAgICdjbG9zZScsXG4gICAgJ2Nsb3NlZF9jYXB0aW9uJyxcbiAgICAnY2xvdWQnLFxuICAgICdjbG91ZF9jaXJjbGUnLFxuICAgICdjbG91ZF9kb25lJyxcbiAgICAnY2xvdWRfZG93bmxvYWQnLFxuICAgICdjbG91ZF9vZmYnLFxuICAgICdjbG91ZF9xdWV1ZScsXG4gICAgJ2Nsb3VkX3VwbG9hZCcsXG4gICAgJ2NvbGxlY3Rpb25zJyxcbiAgICAnY29sbGVjdGlvbnNfYm9va21hcmsnLFxuICAgICdjb2xvcl9sZW5zJyxcbiAgICAnY29sb3JpemUnLFxuICAgICdjb21tZW50JyxcbiAgICAnY29tcGFyZScsXG4gICAgJ2NvbXB1dGVyJyxcbiAgICAnY29uZmlybWF0aW9uX251bWJlcicsXG4gICAgJ2NvbnRhY3RfcGhvbmUnLFxuICAgICdjb250YWN0cycsXG4gICAgJ2NvbnRlbnRfY29weScsXG4gICAgJ2NvbnRlbnRfY3V0JyxcbiAgICAnY29udGVudF9wYXN0ZScsXG4gICAgJ2NvbnRyb2xfcG9pbnQnLFxuICAgICdjb250cm9sX3BvaW50X2R1cGxpY2F0ZScsXG4gICAgJ2NyZWF0ZScsXG4gICAgJ2NyZWRpdF9jYXJkJyxcbiAgICAnY3JvcCcsXG4gICAgJ2Nyb3BfMTZfOScsXG4gICAgJ2Nyb3BfM18yJyxcbiAgICAnY3JvcF81XzQnLFxuICAgICdjcm9wXzdfNScsXG4gICAgJ2Nyb3BfZGluJyxcbiAgICAnY3JvcF9mcmVlJyxcbiAgICAnY3JvcF9sYW5kc2NhcGUnLFxuICAgICdjcm9wX29yaWdpbmFsJyxcbiAgICAnY3JvcF9wb3J0cmFpdCcsXG4gICAgJ2Nyb3Bfc3F1YXJlJyxcbiAgICAnZGFzaGJvYXJkJyxcbiAgICAnZGF0YV91c2FnZScsXG4gICAgJ2RlaGF6ZScsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAnZGVza3RvcF9tYWMnLFxuICAgICdkZXNrdG9wX3dpbmRvd3MnLFxuICAgICdkZXRhaWxzJyxcbiAgICAnZGV2ZWxvcGVyX2JvYXJkJyxcbiAgICAnZGV2ZWxvcGVyX21vZGUnLFxuICAgICdkZXZpY2VfaHViJyxcbiAgICAnZGV2aWNlcycsXG4gICAgJ2RpYWxlcl9zaXAnLFxuICAgICdkaWFscGFkJyxcbiAgICAnZGlyZWN0aW9ucycsXG4gICAgJ2RpcmVjdGlvbnNfYmlrZScsXG4gICAgJ2RpcmVjdGlvbnNfYm9hdCcsXG4gICAgJ2RpcmVjdGlvbnNfYnVzJyxcbiAgICAnZGlyZWN0aW9uc19jYXInLFxuICAgICdkaXJlY3Rpb25zX3JhaWx3YXknLFxuICAgICdkaXJlY3Rpb25zX3J1bicsXG4gICAgJ2RpcmVjdGlvbnNfc3Vid2F5JyxcbiAgICAnZGlyZWN0aW9uc190cmFuc2l0JyxcbiAgICAnZGlyZWN0aW9uc193YWxrJyxcbiAgICAnZGlzY19mdWxsJyxcbiAgICAnZG5zJyxcbiAgICAnZG9fbm90X2Rpc3R1cmInLFxuICAgICdkb19ub3RfZGlzdHVyYl9hbHQnLFxuICAgICdkb2NrJyxcbiAgICAnZG9tYWluJyxcbiAgICAnZG9uZScsXG4gICAgJ2RvbmVfYWxsJyxcbiAgICAnZHJhZnRzJyxcbiAgICAnZHJpdmVfZXRhJyxcbiAgICAnZHZyJyxcbiAgICAnZWRpdCcsXG4gICAgJ2VqZWN0JyxcbiAgICAnZW1haWwnLFxuICAgICdlcXVhbGl6ZXInLFxuICAgICdlcnJvcicsXG4gICAgJ2Vycm9yX291dGxpbmUnLFxuICAgICdldmVudCcsXG4gICAgJ2V2ZW50X2F2YWlsYWJsZScsXG4gICAgJ2V2ZW50X2J1c3knLFxuICAgICdldmVudF9ub3RlJyxcbiAgICAnZXZlbnRfc2VhdCcsXG4gICAgJ2V4aXRfdG9fYXBwJyxcbiAgICAnZXhwYW5kX2xlc3MnLFxuICAgICdleHBhbmRfbW9yZScsXG4gICAgJ2V4cGxpY2l0JyxcbiAgICAnZXhwbG9yZScsXG4gICAgJ2V4cG9zdXJlJyxcbiAgICAnZXhwb3N1cmVfbmVnXzEnLFxuICAgICdleHBvc3VyZV9uZWdfMicsXG4gICAgJ2V4cG9zdXJlX3BsdXNfMScsXG4gICAgJ2V4cG9zdXJlX3BsdXNfMicsXG4gICAgJ2V4cG9zdXJlX3plcm8nLFxuICAgICdleHRlbnNpb24nLFxuICAgICdmYWNlJyxcbiAgICAnZmFzdF9mb3J3YXJkJyxcbiAgICAnZmFzdF9yZXdpbmQnLFxuICAgICdmYXZvcml0ZScsXG4gICAgJ2Zhdm9yaXRlX2JvcmRlcicsXG4gICAgJ2ZlZWRiYWNrJyxcbiAgICAnZmlsZV9kb3dubG9hZCcsXG4gICAgJ2ZpbGVfdXBsb2FkJyxcbiAgICAnZmlsdGVyJyxcbiAgICAnZmlsdGVyXzEnLFxuICAgICdmaWx0ZXJfMicsXG4gICAgJ2ZpbHRlcl8zJyxcbiAgICAnZmlsdGVyXzQnLFxuICAgICdmaWx0ZXJfNScsXG4gICAgJ2ZpbHRlcl82JyxcbiAgICAnZmlsdGVyXzcnLFxuICAgICdmaWx0ZXJfOCcsXG4gICAgJ2ZpbHRlcl85JyxcbiAgICAnZmlsdGVyXzlfcGx1cycsXG4gICAgJ2ZpbHRlcl9iX2FuZF93JyxcbiAgICAnZmlsdGVyX2NlbnRlcl9mb2N1cycsXG4gICAgJ2ZpbHRlcl9kcmFtYScsXG4gICAgJ2ZpbHRlcl9mcmFtZXMnLFxuICAgICdmaWx0ZXJfaGRyJyxcbiAgICAnZmlsdGVyX2xpc3QnLFxuICAgICdmaWx0ZXJfbm9uZScsXG4gICAgJ2ZpbHRlcl90aWx0X3NoaWZ0JyxcbiAgICAnZmlsdGVyX3ZpbnRhZ2UnLFxuICAgICdmaW5kX2luX3BhZ2UnLFxuICAgICdmaW5kX3JlcGxhY2UnLFxuICAgICdmbGFnJyxcbiAgICAnZmxhcmUnLFxuICAgICdmbGFzaF9hdXRvJyxcbiAgICAnZmxhc2hfb2ZmJyxcbiAgICAnZmxhc2hfb24nLFxuICAgICdmbGlnaHQnLFxuICAgICdmbGlnaHRfbGFuZCcsXG4gICAgJ2ZsaWdodF90YWtlb2ZmJyxcbiAgICAnZmxpcCcsXG4gICAgJ2ZsaXBfdG9fYmFjaycsXG4gICAgJ2ZsaXBfdG9fZnJvbnQnLFxuICAgICdmb2xkZXInLFxuICAgICdmb2xkZXJfb3BlbicsXG4gICAgJ2ZvbGRlcl9zaGFyZWQnLFxuICAgICdmb2xkZXJfc3BlY2lhbCcsXG4gICAgJ2ZvbnRfZG93bmxvYWQnLFxuICAgICdmb3JtYXRfYWxpZ25fY2VudGVyJyxcbiAgICAnZm9ybWF0X2FsaWduX2p1c3RpZnknLFxuICAgICdmb3JtYXRfYWxpZ25fbGVmdCcsXG4gICAgJ2Zvcm1hdF9hbGlnbl9yaWdodCcsXG4gICAgJ2Zvcm1hdF9ib2xkJyxcbiAgICAnZm9ybWF0X2NsZWFyJyxcbiAgICAnZm9ybWF0X2NvbG9yX2ZpbGwnLFxuICAgICdmb3JtYXRfY29sb3JfcmVzZXQnLFxuICAgICdmb3JtYXRfY29sb3JfdGV4dCcsXG4gICAgJ2Zvcm1hdF9pbmRlbnRfZGVjcmVhc2UnLFxuICAgICdmb3JtYXRfaW5kZW50X2luY3JlYXNlJyxcbiAgICAnZm9ybWF0X2l0YWxpYycsXG4gICAgJ2Zvcm1hdF9saW5lX3NwYWNpbmcnLFxuICAgICdmb3JtYXRfbGlzdF9idWxsZXRlZCcsXG4gICAgJ2Zvcm1hdF9saXN0X251bWJlcmVkJyxcbiAgICAnZm9ybWF0X3BhaW50JyxcbiAgICAnZm9ybWF0X3F1b3RlJyxcbiAgICAnZm9ybWF0X3NpemUnLFxuICAgICdmb3JtYXRfc3RyaWtldGhyb3VnaCcsXG4gICAgJ2Zvcm1hdF90ZXh0ZGlyZWN0aW9uX2xfdG9fcicsXG4gICAgJ2Zvcm1hdF90ZXh0ZGlyZWN0aW9uX3JfdG9fbCcsXG4gICAgJ2Zvcm1hdF91bmRlcmxpbmVkJyxcbiAgICAnZm9ydW0nLFxuICAgICdmb3J3YXJkJyxcbiAgICAnZm9yd2FyZF8xMCcsXG4gICAgJ2ZvcndhcmRfMzAnLFxuICAgICdmb3J3YXJkXzUnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbl9leGl0JyxcbiAgICAnZnVuY3Rpb25zJyxcbiAgICAnZ2FtZXBhZCcsXG4gICAgJ2dhbWVzJyxcbiAgICAnZ2VzdHVyZScsXG4gICAgJ2dldF9hcHAnLFxuICAgICdnaWYnLFxuICAgICdncHNfZml4ZWQnLFxuICAgICdncHNfbm90X2ZpeGVkJyxcbiAgICAnZ3BzX29mZicsXG4gICAgJ2dyYWRlJyxcbiAgICAnZ3JhZGllbnQnLFxuICAgICdncmFpbicsXG4gICAgJ2dyYXBoaWNfZXEnLFxuICAgICdncmlkX29mZicsXG4gICAgJ2dyaWRfb24nLFxuICAgICdncm91cCcsXG4gICAgJ2dyb3VwX2FkZCcsXG4gICAgJ2dyb3VwX3dvcmsnLFxuICAgICdoZCcsXG4gICAgJ2hkcl9vZmYnLFxuICAgICdoZHJfb24nLFxuICAgICdoZHJfc3Ryb25nJyxcbiAgICAnaGRyX3dlYWsnLFxuICAgICdoZWFkc2V0JyxcbiAgICAnaGVhZHNldF9taWMnLFxuICAgICdoZWFsaW5nJyxcbiAgICAnaGVhcmluZycsXG4gICAgJ2hlbHAnLFxuICAgICdoZWxwX291dGxpbmUnLFxuICAgICdoaWdoX3F1YWxpdHknLFxuICAgICdoaWdobGlnaHRfb2ZmJyxcbiAgICAnaGlzdG9yeScsXG4gICAgJ2hvbWUnLFxuICAgICdob3RlbCcsXG4gICAgJ2hvdXJnbGFzc19lbXB0eScsXG4gICAgJ2hvdXJnbGFzc19mdWxsJyxcbiAgICAnaHR0cCcsXG4gICAgJ2h0dHBzJyxcbiAgICAnaW1hZ2UnLFxuICAgICdpbWFnZV9hc3BlY3RfcmF0aW8nLFxuICAgICdpbXBvcnRfZXhwb3J0JyxcbiAgICAnaW5ib3gnLFxuICAgICdpbmRldGVybWluYXRlX2NoZWNrX2JveCcsXG4gICAgJ2luZm8nLFxuICAgICdpbmZvX291dGxpbmUnLFxuICAgICdpbnB1dCcsXG4gICAgJ2luc2VydF9jaGFydCcsXG4gICAgJ2luc2VydF9jb21tZW50JyxcbiAgICAnaW5zZXJ0X2RyaXZlX2ZpbGUnLFxuICAgICdpbnNlcnRfZW1vdGljb24nLFxuICAgICdpbnNlcnRfaW52aXRhdGlvbicsXG4gICAgJ2luc2VydF9saW5rJyxcbiAgICAnaW5zZXJ0X3Bob3RvJyxcbiAgICAnaW52ZXJ0X2NvbG9ycycsXG4gICAgJ2ludmVydF9jb2xvcnNfb2ZmJyxcbiAgICAnaXNvJyxcbiAgICAna2V5Ym9hcmQnLFxuICAgICdrZXlib2FyZF9hcnJvd19kb3duJyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfbGVmdCcsXG4gICAgJ2tleWJvYXJkX2Fycm93X3JpZ2h0JyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfdXAnLFxuICAgICdrZXlib2FyZF9iYWNrc3BhY2UnLFxuICAgICdrZXlib2FyZF9jYXBzbG9jaycsXG4gICAgJ2tleWJvYXJkX2hpZGUnLFxuICAgICdrZXlib2FyZF9yZXR1cm4nLFxuICAgICdrZXlib2FyZF90YWInLFxuICAgICdrZXlib2FyZF92b2ljZScsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGFiZWxfb3V0bGluZScsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmd1YWdlJyxcbiAgICAnbGFwdG9wJyxcbiAgICAnbGFwdG9wX2Nocm9tZWJvb2snLFxuICAgICdsYXB0b3BfbWFjJyxcbiAgICAnbGFwdG9wX3dpbmRvd3MnLFxuICAgICdsYXVuY2gnLFxuICAgICdsYXllcnMnLFxuICAgICdsYXllcnNfY2xlYXInLFxuICAgICdsZWFrX2FkZCcsXG4gICAgJ2xlYWtfcmVtb3ZlJyxcbiAgICAnbGVucycsXG4gICAgJ2xpYnJhcnlfYWRkJyxcbiAgICAnbGlicmFyeV9ib29rcycsXG4gICAgJ2xpYnJhcnlfbXVzaWMnLFxuICAgICdsaW5rJyxcbiAgICAnbGlzdCcsXG4gICAgJ2xpdmVfaGVscCcsXG4gICAgJ2xpdmVfdHYnLFxuICAgICdsb2NhbF9hY3Rpdml0eScsXG4gICAgJ2xvY2FsX2FpcnBvcnQnLFxuICAgICdsb2NhbF9hdG0nLFxuICAgICdsb2NhbF9iYXInLFxuICAgICdsb2NhbF9jYWZlJyxcbiAgICAnbG9jYWxfY2FyX3dhc2gnLFxuICAgICdsb2NhbF9jb252ZW5pZW5jZV9zdG9yZScsXG4gICAgJ2xvY2FsX2RpbmluZycsXG4gICAgJ2xvY2FsX2RyaW5rJyxcbiAgICAnbG9jYWxfZmxvcmlzdCcsXG4gICAgJ2xvY2FsX2dhc19zdGF0aW9uJyxcbiAgICAnbG9jYWxfZ3JvY2VyeV9zdG9yZScsXG4gICAgJ2xvY2FsX2hvc3BpdGFsJyxcbiAgICAnbG9jYWxfaG90ZWwnLFxuICAgICdsb2NhbF9sYXVuZHJ5X3NlcnZpY2UnLFxuICAgICdsb2NhbF9saWJyYXJ5JyxcbiAgICAnbG9jYWxfbWFsbCcsXG4gICAgJ2xvY2FsX21vdmllcycsXG4gICAgJ2xvY2FsX29mZmVyJyxcbiAgICAnbG9jYWxfcGFya2luZycsXG4gICAgJ2xvY2FsX3BoYXJtYWN5JyxcbiAgICAnbG9jYWxfcGhvbmUnLFxuICAgICdsb2NhbF9waXp6YScsXG4gICAgJ2xvY2FsX3BsYXknLFxuICAgICdsb2NhbF9wb3N0X29mZmljZScsXG4gICAgJ2xvY2FsX3ByaW50c2hvcCcsXG4gICAgJ2xvY2FsX3NlZScsXG4gICAgJ2xvY2FsX3NoaXBwaW5nJyxcbiAgICAnbG9jYWxfdGF4aScsXG4gICAgJ2xvY2F0aW9uX2NpdHknLFxuICAgICdsb2NhdGlvbl9kaXNhYmxlZCcsXG4gICAgJ2xvY2F0aW9uX29mZicsXG4gICAgJ2xvY2F0aW9uX29uJyxcbiAgICAnbG9jYXRpb25fc2VhcmNoaW5nJyxcbiAgICAnbG9jaycsXG4gICAgJ2xvY2tfb3BlbicsXG4gICAgJ2xvY2tfb3V0bGluZScsXG4gICAgJ2xvb2tzJyxcbiAgICAnbG9va3NfMycsXG4gICAgJ2xvb2tzXzQnLFxuICAgICdsb29rc181JyxcbiAgICAnbG9va3NfNicsXG4gICAgJ2xvb2tzX29uZScsXG4gICAgJ2xvb2tzX3R3bycsXG4gICAgJ2xvb3AnLFxuICAgICdsb3VwZScsXG4gICAgJ2xveWFsdHknLFxuICAgICdtYWlsJyxcbiAgICAnbWFwJyxcbiAgICAnbWFya3VucmVhZCcsXG4gICAgJ21hcmt1bnJlYWRfbWFpbGJveCcsXG4gICAgJ21lbW9yeScsXG4gICAgJ21lbnUnLFxuICAgICdtZXJnZV90eXBlJyxcbiAgICAnbWVzc2FnZScsXG4gICAgJ21pYycsXG4gICAgJ21pY19ub25lJyxcbiAgICAnbWljX29mZicsXG4gICAgJ21tcycsXG4gICAgJ21vZGVfY29tbWVudCcsXG4gICAgJ21vZGVfZWRpdCcsXG4gICAgJ21vbmV5X29mZicsXG4gICAgJ21vbm9jaHJvbWVfcGhvdG9zJyxcbiAgICAnbW9vZCcsXG4gICAgJ21vb2RfYmFkJyxcbiAgICAnbW9yZScsXG4gICAgJ21vcmVfaG9yaXonLFxuICAgICdtb3JlX3ZlcnQnLFxuICAgICdtb3VzZScsXG4gICAgJ21vdmllJyxcbiAgICAnbW92aWVfY3JlYXRpb24nLFxuICAgICdtdXNpY19ub3RlJyxcbiAgICAnbXlfbGlicmFyeV9hZGQnLFxuICAgICdteV9saWJyYXJ5X2Jvb2tzJyxcbiAgICAnbXlfbGlicmFyeV9tdXNpYycsXG4gICAgJ215X2xvY2F0aW9uJyxcbiAgICAnbmF0dXJlJyxcbiAgICAnbmF0dXJlX3Blb3BsZScsXG4gICAgJ25hdmlnYXRlX2JlZm9yZScsXG4gICAgJ25hdmlnYXRlX25leHQnLFxuICAgICduYXZpZ2F0aW9uJyxcbiAgICAnbmV0d29ya19jZWxsJyxcbiAgICAnbmV0d29ya19sb2NrZWQnLFxuICAgICduZXR3b3JrX3dpZmknLFxuICAgICduZXdfcmVsZWFzZXMnLFxuICAgICduZmMnLFxuICAgICdub19zaW0nLFxuICAgICdub3RfaW50ZXJlc3RlZCcsXG4gICAgJ25vdGVfYWRkJyxcbiAgICAnbm90aWZpY2F0aW9ucycsXG4gICAgJ25vdGlmaWNhdGlvbnNfYWN0aXZlJyxcbiAgICAnbm90aWZpY2F0aW9uc19ub25lJyxcbiAgICAnbm90aWZpY2F0aW9uc19vZmYnLFxuICAgICdub3RpZmljYXRpb25zX3BhdXNlZCcsXG4gICAgJ29mZmxpbmVfcGluJyxcbiAgICAnb25kZW1hbmRfdmlkZW8nLFxuICAgICdvcGVuX2luX2Jyb3dzZXInLFxuICAgICdvcGVuX2luX25ldycsXG4gICAgJ29wZW5fd2l0aCcsXG4gICAgJ3BhZ2VzJyxcbiAgICAncGFnZXZpZXcnLFxuICAgICdwYWxldHRlJyxcbiAgICAncGFub3JhbWEnLFxuICAgICdwYW5vcmFtYV9maXNoX2V5ZScsXG4gICAgJ3Bhbm9yYW1hX2hvcml6b250YWwnLFxuICAgICdwYW5vcmFtYV92ZXJ0aWNhbCcsXG4gICAgJ3Bhbm9yYW1hX3dpZGVfYW5nbGUnLFxuICAgICdwYXJ0eV9tb2RlJyxcbiAgICAncGF1c2UnLFxuICAgICdwYXVzZV9jaXJjbGVfZmlsbGVkJyxcbiAgICAncGF1c2VfY2lyY2xlX291dGxpbmUnLFxuICAgICdwYXltZW50JyxcbiAgICAncGVvcGxlJyxcbiAgICAncGVvcGxlX291dGxpbmUnLFxuICAgICdwZXJtX2NhbWVyYV9taWMnLFxuICAgICdwZXJtX2NvbnRhY3RfY2FsZW5kYXInLFxuICAgICdwZXJtX2RhdGFfc2V0dGluZycsXG4gICAgJ3Blcm1fZGV2aWNlX2luZm9ybWF0aW9uJyxcbiAgICAncGVybV9pZGVudGl0eScsXG4gICAgJ3Blcm1fbWVkaWEnLFxuICAgICdwZXJtX3Bob25lX21zZycsXG4gICAgJ3Blcm1fc2Nhbl93aWZpJyxcbiAgICAncGVyc29uJyxcbiAgICAncGVyc29uX2FkZCcsXG4gICAgJ3BlcnNvbl9vdXRsaW5lJyxcbiAgICAncGVyc29uX3BpbicsXG4gICAgJ3BlcnNvbmFsX3ZpZGVvJyxcbiAgICAncGhvbmUnLFxuICAgICdwaG9uZV9hbmRyb2lkJyxcbiAgICAncGhvbmVfYmx1ZXRvb3RoX3NwZWFrZXInLFxuICAgICdwaG9uZV9mb3J3YXJkZWQnLFxuICAgICdwaG9uZV9pbl90YWxrJyxcbiAgICAncGhvbmVfaXBob25lJyxcbiAgICAncGhvbmVfbG9ja2VkJyxcbiAgICAncGhvbmVfbWlzc2VkJyxcbiAgICAncGhvbmVfcGF1c2VkJyxcbiAgICAncGhvbmVsaW5rJyxcbiAgICAncGhvbmVsaW5rX2VyYXNlJyxcbiAgICAncGhvbmVsaW5rX2xvY2snLFxuICAgICdwaG9uZWxpbmtfb2ZmJyxcbiAgICAncGhvbmVsaW5rX3JpbmcnLFxuICAgICdwaG9uZWxpbmtfc2V0dXAnLFxuICAgICdwaG90bycsXG4gICAgJ3Bob3RvX2FsYnVtJyxcbiAgICAncGhvdG9fY2FtZXJhJyxcbiAgICAncGhvdG9fbGlicmFyeScsXG4gICAgJ3Bob3RvX3NpemVfc2VsZWN0X2FjdHVhbCcsXG4gICAgJ3Bob3RvX3NpemVfc2VsZWN0X2xhcmdlJyxcbiAgICAncGhvdG9fc2l6ZV9zZWxlY3Rfc21hbGwnLFxuICAgICdwaWN0dXJlX2FzX3BkZicsXG4gICAgJ3BpY3R1cmVfaW5fcGljdHVyZScsXG4gICAgJ3Bpbl9kcm9wJyxcbiAgICAncGxhY2UnLFxuICAgICdwbGF5X2Fycm93JyxcbiAgICAncGxheV9jaXJjbGVfZmlsbGVkJyxcbiAgICAncGxheV9jaXJjbGVfb3V0bGluZScsXG4gICAgJ3BsYXlfZm9yX3dvcmsnLFxuICAgICdwbGF5X3Nob3BwaW5nX2JhZycsXG4gICAgJ3BsYXlsaXN0X2FkZCcsXG4gICAgJ3BsdXNfb25lJyxcbiAgICAncG9sbCcsXG4gICAgJ3BvbHltZXInLFxuICAgICdwb3J0YWJsZV93aWZpX29mZicsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG93ZXInLFxuICAgICdwb3dlcl9pbnB1dCcsXG4gICAgJ3Bvd2VyX3NldHRpbmdzX25ldycsXG4gICAgJ3ByZXNlbnRfdG9fYWxsJyxcbiAgICAncHJpbnQnLFxuICAgICdwdWJsaWMnLFxuICAgICdwdWJsaXNoJyxcbiAgICAncXVlcnlfYnVpbGRlcicsXG4gICAgJ3F1ZXN0aW9uX2Fuc3dlcicsXG4gICAgJ3F1ZXVlJyxcbiAgICAncXVldWVfbXVzaWMnLFxuICAgICdyYWRpbycsXG4gICAgJ3JhZGlvX2J1dHRvbl9jaGVja2VkJyxcbiAgICAncmFkaW9fYnV0dG9uX3VuY2hlY2tlZCcsXG4gICAgJ3JhdGVfcmV2aWV3JyxcbiAgICAncmVjZWlwdCcsXG4gICAgJ3JlY2VudF9hY3RvcnMnLFxuICAgICdyZWRlZW0nLFxuICAgICdyZWRvJyxcbiAgICAncmVmcmVzaCcsXG4gICAgJ3JlbW92ZScsXG4gICAgJ3JlbW92ZV9jaXJjbGUnLFxuICAgICdyZW1vdmVfY2lyY2xlX291dGxpbmUnLFxuICAgICdyZW1vdmVfcmVkX2V5ZScsXG4gICAgJ3Jlb3JkZXInLFxuICAgICdyZXBlYXQnLFxuICAgICdyZXBlYXRfb25lJyxcbiAgICAncmVwbGF5JyxcbiAgICAncmVwbGF5XzEwJyxcbiAgICAncmVwbGF5XzMwJyxcbiAgICAncmVwbGF5XzUnLFxuICAgICdyZXBseScsXG4gICAgJ3JlcGx5X2FsbCcsXG4gICAgJ3JlcG9ydCcsXG4gICAgJ3JlcG9ydF9wcm9ibGVtJyxcbiAgICAncmVzdGF1cmFudF9tZW51JyxcbiAgICAncmVzdG9yZScsXG4gICAgJ3Jpbmdfdm9sdW1lJyxcbiAgICAncm9vbScsXG4gICAgJ3JvdGF0ZV85MF9kZWdyZWVzX2NjdycsXG4gICAgJ3JvdGF0ZV9sZWZ0JyxcbiAgICAncm90YXRlX3JpZ2h0JyxcbiAgICAncm91dGVyJyxcbiAgICAnc2F0ZWxsaXRlJyxcbiAgICAnc2F2ZScsXG4gICAgJ3NjYW5uZXInLFxuICAgICdzY2hlZHVsZScsXG4gICAgJ3NjaG9vbCcsXG4gICAgJ3NjcmVlbl9sb2NrX2xhbmRzY2FwZScsXG4gICAgJ3NjcmVlbl9sb2NrX3BvcnRyYWl0JyxcbiAgICAnc2NyZWVuX2xvY2tfcm90YXRpb24nLFxuICAgICdzY3JlZW5fcm90YXRpb24nLFxuICAgICdzZF9jYXJkJyxcbiAgICAnc2Rfc3RvcmFnZScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NlY3VyaXR5JyxcbiAgICAnc2VsZWN0X2FsbCcsXG4gICAgJ3NlbmQnLFxuICAgICdzZXR0aW5ncycsXG4gICAgJ3NldHRpbmdzX2FwcGxpY2F0aW9ucycsXG4gICAgJ3NldHRpbmdzX2JhY2t1cF9yZXN0b3JlJyxcbiAgICAnc2V0dGluZ3NfYmx1ZXRvb3RoJyxcbiAgICAnc2V0dGluZ3NfYnJpZ2h0bmVzcycsXG4gICAgJ3NldHRpbmdzX2NlbGwnLFxuICAgICdzZXR0aW5nc19ldGhlcm5ldCcsXG4gICAgJ3NldHRpbmdzX2lucHV0X2FudGVubmEnLFxuICAgICdzZXR0aW5nc19pbnB1dF9jb21wb25lbnQnLFxuICAgICdzZXR0aW5nc19pbnB1dF9jb21wb3NpdGUnLFxuICAgICdzZXR0aW5nc19pbnB1dF9oZG1pJyxcbiAgICAnc2V0dGluZ3NfaW5wdXRfc3ZpZGVvJyxcbiAgICAnc2V0dGluZ3Nfb3ZlcnNjYW4nLFxuICAgICdzZXR0aW5nc19waG9uZScsXG4gICAgJ3NldHRpbmdzX3Bvd2VyJyxcbiAgICAnc2V0dGluZ3NfcmVtb3RlJyxcbiAgICAnc2V0dGluZ3Nfc3lzdGVtX2RheWRyZWFtJyxcbiAgICAnc2V0dGluZ3Nfdm9pY2UnLFxuICAgICdzaGFyZScsXG4gICAgJ3Nob3AnLFxuICAgICdzaG9wX3R3bycsXG4gICAgJ3Nob3BwaW5nX2Jhc2tldCcsXG4gICAgJ3Nob3BwaW5nX2NhcnQnLFxuICAgICdzaHVmZmxlJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyXzRfYmFyJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyX2Nvbm5lY3RlZF9ub19pbnRlcm5ldF80X2JhcicsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9ub19zaW0nLFxuICAgICdzaWduYWxfY2VsbHVsYXJfbnVsbCcsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9vZmYnLFxuICAgICdzaWduYWxfd2lmaV80X2JhcicsXG4gICAgJ3NpZ25hbF93aWZpXzRfYmFyX2xvY2snLFxuICAgICdzaWduYWxfd2lmaV9vZmYnLFxuICAgICdzaW1fY2FyZCcsXG4gICAgJ3NpbV9jYXJkX2FsZXJ0JyxcbiAgICAnc2tpcF9uZXh0JyxcbiAgICAnc2tpcF9wcmV2aW91cycsXG4gICAgJ3NsaWRlc2hvdycsXG4gICAgJ3NtYXJ0cGhvbmUnLFxuICAgICdzbXMnLFxuICAgICdzbXNfZmFpbGVkJyxcbiAgICAnc25vb3plJyxcbiAgICAnc29ydCcsXG4gICAgJ3NvcnRfYnlfYWxwaGEnLFxuICAgICdzcGFjZV9iYXInLFxuICAgICdzcGVha2VyJyxcbiAgICAnc3BlYWtlcl9ncm91cCcsXG4gICAgJ3NwZWFrZXJfbm90ZXMnLFxuICAgICdzcGVha2VyX3Bob25lJyxcbiAgICAnc3BlbGxjaGVjaycsXG4gICAgJ3N0YXInLFxuICAgICdzdGFyX2JvcmRlcicsXG4gICAgJ3N0YXJfaGFsZicsXG4gICAgJ3N0YXJzJyxcbiAgICAnc3RheV9jdXJyZW50X2xhbmRzY2FwZScsXG4gICAgJ3N0YXlfY3VycmVudF9wb3J0cmFpdCcsXG4gICAgJ3N0YXlfcHJpbWFyeV9sYW5kc2NhcGUnLFxuICAgICdzdGF5X3ByaW1hcnlfcG9ydHJhaXQnLFxuICAgICdzdG9wJyxcbiAgICAnc3RvcmFnZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3RvcmVfbWFsbF9kaXJlY3RvcnknLFxuICAgICdzdHJhaWdodGVuJyxcbiAgICAnc3RyaWtldGhyb3VnaF9zJyxcbiAgICAnc3R5bGUnLFxuICAgICdzdWJqZWN0JyxcbiAgICAnc3VidGl0bGVzJyxcbiAgICAnc3VwZXJ2aXNvcl9hY2NvdW50JyxcbiAgICAnc3Vycm91bmRfc291bmQnLFxuICAgICdzd2FwX2NhbGxzJyxcbiAgICAnc3dhcF9ob3JpeicsXG4gICAgJ3N3YXBfdmVydCcsXG4gICAgJ3N3YXBfdmVydGljYWxfY2lyY2xlJyxcbiAgICAnc3dpdGNoX2NhbWVyYScsXG4gICAgJ3N3aXRjaF92aWRlbycsXG4gICAgJ3N5bmMnLFxuICAgICdzeW5jX2Rpc2FibGVkJyxcbiAgICAnc3luY19wcm9ibGVtJyxcbiAgICAnc3lzdGVtX3VwZGF0ZScsXG4gICAgJ3N5c3RlbV91cGRhdGVfYWx0JyxcbiAgICAndGFiJyxcbiAgICAndGFiX3Vuc2VsZWN0ZWQnLFxuICAgICd0YWJsZXQnLFxuICAgICd0YWJsZXRfYW5kcm9pZCcsXG4gICAgJ3RhYmxldF9tYWMnLFxuICAgICd0YWdfZmFjZXMnLFxuICAgICd0YXBfYW5kX3BsYXknLFxuICAgICd0ZXJyYWluJyxcbiAgICAndGV4dF9mb3JtYXQnLFxuICAgICd0ZXh0c21zJyxcbiAgICAndGV4dHVyZScsXG4gICAgJ3RoZWF0ZXJzJyxcbiAgICAndGh1bWJfZG93bicsXG4gICAgJ3RodW1iX3VwJyxcbiAgICAndGh1bWJzX3VwX2Rvd24nLFxuICAgICd0aW1lX3RvX2xlYXZlJyxcbiAgICAndGltZWxhcHNlJyxcbiAgICAndGltZXInLFxuICAgICd0aW1lcl8xMCcsXG4gICAgJ3RpbWVyXzMnLFxuICAgICd0aW1lcl9vZmYnLFxuICAgICd0b2MnLFxuICAgICd0b2RheScsXG4gICAgJ3RvbGwnLFxuICAgICd0b25hbGl0eScsXG4gICAgJ3RveXMnLFxuICAgICd0cmFja19jaGFuZ2VzJyxcbiAgICAndHJhZmZpYycsXG4gICAgJ3RyYW5zZm9ybScsXG4gICAgJ3RyYW5zbGF0ZScsXG4gICAgJ3RyZW5kaW5nX2Rvd24nLFxuICAgICd0cmVuZGluZ19mbGF0JyxcbiAgICAndHJlbmRpbmdfdXAnLFxuICAgICd0dW5lJyxcbiAgICAndHVybmVkX2luJyxcbiAgICAndHVybmVkX2luX25vdCcsXG4gICAgJ3R2JyxcbiAgICAndW5kbycsXG4gICAgJ3VuZm9sZF9sZXNzJyxcbiAgICAndW5mb2xkX21vcmUnLFxuICAgICd1c2InLFxuICAgICd2ZXJpZmllZF91c2VyJyxcbiAgICAndmVydGljYWxfYWxpZ25fYm90dG9tJyxcbiAgICAndmVydGljYWxfYWxpZ25fY2VudGVyJyxcbiAgICAndmVydGljYWxfYWxpZ25fdG9wJyxcbiAgICAndmlicmF0aW9uJyxcbiAgICAndmlkZW9fbGlicmFyeScsXG4gICAgJ3ZpZGVvY2FtJyxcbiAgICAndmlkZW9jYW1fb2ZmJyxcbiAgICAndmlld19hZ2VuZGEnLFxuICAgICd2aWV3X2FycmF5JyxcbiAgICAndmlld19jYXJvdXNlbCcsXG4gICAgJ3ZpZXdfY29sdW1uJyxcbiAgICAndmlld19jb21meScsXG4gICAgJ3ZpZXdfY29tcGFjdCcsXG4gICAgJ3ZpZXdfZGF5JyxcbiAgICAndmlld19oZWFkbGluZScsXG4gICAgJ3ZpZXdfbGlzdCcsXG4gICAgJ3ZpZXdfbW9kdWxlJyxcbiAgICAndmlld19xdWlsdCcsXG4gICAgJ3ZpZXdfc3RyZWFtJyxcbiAgICAndmlld193ZWVrJyxcbiAgICAndmlnbmV0dGUnLFxuICAgICd2aXNpYmlsaXR5JyxcbiAgICAndmlzaWJpbGl0eV9vZmYnLFxuICAgICd2b2ljZV9jaGF0JyxcbiAgICAndm9pY2VtYWlsJyxcbiAgICAndm9sdW1lX2Rvd24nLFxuICAgICd2b2x1bWVfbXV0ZScsXG4gICAgJ3ZvbHVtZV9vZmYnLFxuICAgICd2b2x1bWVfdXAnLFxuICAgICd2cG5fa2V5JyxcbiAgICAndnBuX2xvY2snLFxuICAgICd3YWxscGFwZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnd2F0Y2gnLFxuICAgICd3Yl9hdXRvJyxcbiAgICAnd2JfY2xvdWR5JyxcbiAgICAnd2JfaW5jYW5kZXNjZW50JyxcbiAgICAnd2JfaXJpZGVzY2VudCcsXG4gICAgJ3diX3N1bm55JyxcbiAgICAnd2MnLFxuICAgICd3ZWInLFxuICAgICd3aGF0c2hvdCcsXG4gICAgJ3dpZGdldHMnLFxuICAgICd3aWZpJyxcbiAgICAnd2lmaV9sb2NrJyxcbiAgICAnd2lmaV90ZXRoZXJpbmcnLFxuICAgICd3b3JrJyxcbiAgICAnd3JhcF90ZXh0JyxcbiAgICAneW91dHViZV9zZWFyY2hlZF9mb3InLFxuICAgICd6b29tX2luJyxcbiAgICAnem9vbV9vdXQnLFxuICBdO1xuXG4gIGdldCBpY29ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25zO1xuICB9XG5cbiAgZmlsdGVyKHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbnMuZmlsdGVyKChlbDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5ID8gcXVlcnkudG9Mb3dlckNhc2UoKSA6ICcnKSA+IC0xO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQU5JTUFUSU9OU1xuICovXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCB7IFRkVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9hbmltYXRpb25zL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkRmFkZURpcmVjdGl2ZSB9IGZyb20gJy4vYW5pbWF0aW9ucy9mYWRlL2ZhZGUuZGlyZWN0aXZlJztcblxuY29uc3QgVERfQU5JTUFUSU9OUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkVG9nZ2xlRGlyZWN0aXZlLFxuICBUZEZhZGVEaXJlY3RpdmUsXG5dO1xuXG4vKipcbiAqIEZPUk1TXG4gKi9cblxuLy8gRm9ybSBEaXJlY3RpdmVzXG5pbXBvcnQgeyBUZEF1dG9UcmltRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3Jtcy9hdXRvLXRyaW0vYXV0by10cmltLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX0ZPUk1TOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRBdXRvVHJpbURpcmVjdGl2ZSxcbl07XG5cbi8vIFZhbGlkYXRvcnNcbmNvbnN0IFREX1ZBTElEQVRPUlM6IFR5cGU8YW55PltdID0gW1xuXTtcblxuLyoqXG4gKiBQSVBFU1xuICovXG5pbXBvcnQgeyBUZFRpbWVBZ29QaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLWFnby90aW1lLWFnby5waXBlJztcbmltcG9ydCB7IFRkVGltZURpZmZlcmVuY2VQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLWRpZmZlcmVuY2UvdGltZS1kaWZmZXJlbmNlLnBpcGUnO1xuaW1wb3J0IHsgVGRUaW1lVW50aWxQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLXVudGlsL3RpbWUtdW50aWwucGlwZSc7XG5pbXBvcnQgeyBUZEJ5dGVzUGlwZSB9IGZyb20gJy4vcGlwZXMvYnl0ZXMvYnl0ZXMucGlwZSc7XG5pbXBvcnQgeyBUZERlY2ltYWxCeXRlc1BpcGUgfSBmcm9tICcuL3BpcGVzL2RlY2ltYWwtYnl0ZXMvZGVjaW1hbC1ieXRlcy5waXBlJztcbmltcG9ydCB7IFRkRGlnaXRzUGlwZSB9IGZyb20gJy4vcGlwZXMvZGlnaXRzL2RpZ2l0cy5waXBlJztcbmltcG9ydCB7IFRkVHJ1bmNhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy90cnVuY2F0ZS90cnVuY2F0ZS5waXBlJztcblxuY29uc3QgVERfUElQRVM6IFR5cGU8YW55PltdID0gW1xuICBUZFRpbWVBZ29QaXBlLFxuICBUZFRpbWVEaWZmZXJlbmNlUGlwZSxcbiAgVGRUaW1lVW50aWxQaXBlLFxuICBUZEJ5dGVzUGlwZSxcbiAgVGREZWNpbWFsQnl0ZXNQaXBlLFxuICBUZERpZ2l0c1BpcGUsXG4gIFRkVHJ1bmNhdGVQaXBlLFxuXTtcblxuLyoqXG4gKiBTZXJ2aWNlc1xuICovXG5cbmltcG9ydCB7IFJvdXRlclBhdGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXItcGF0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEljb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pY29uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9GT1JNUyxcbiAgICBURF9QSVBFUyxcbiAgICBURF9BTklNQVRJT05TLFxuICAgIFREX1ZBTElEQVRPUlMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVERfRk9STVMsXG4gICAgVERfUElQRVMsXG4gICAgVERfQU5JTUFUSU9OUyxcbiAgICBURF9WQUxJREFUT1JTLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBSb3V0ZXJQYXRoU2VydmljZSxcbiAgICBJY29uU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRDb21tb25Nb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbiAgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJUm90YXRlQW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICBkZWdyZWVzPzogbnVtYmVyO1xuICBlYXNlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkUm90YXRlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGRlZ3Jlc3NTdGFydDogRGVncmVlcyBvZiByb3RhdGlvbiB0aGF0IHRoZSBkb20gb2JqZWN0IHdpbGwgZW5kIHVwIGluIGR1cmluZyB0aGUgXCJmYWxzZVwiIHN0YXRlXG4gKiAqIGRlZ3JlZXNFbmQ6IERlZ3JlZXMgb2Ygcm90YXRpb24gdGhhdCB0aGUgZG9tIG9iamVjdCB3aWxsIGVuZCB1cCBpbiBkdXJpbmcgdGhlIFwidHJ1ZVwiIHN0YXRlXG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgcm90YXRpb24gYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkUm90YXRlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDkwIH19XCJcbiAqL1xuXG5leHBvcnQgY29uc3QgdGRSb3RhdGVBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUm90YXRlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoe3sgZGVncmVzc1N0YXJ0IH19ZGVnKScsXG4gIH0pLCB7IHBhcmFtczogeyBkZWdyZXNzU3RhcnQ6IDAgfX0pLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKHt7IGRlZ3JlZXNFbmQgfX1kZWcpJyxcbiAgfSksIHsgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDE4MCB9fSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMjUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1pbicgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRSb3RhdGVBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFJvdGF0ZUFuaW1hdGlvbihyb3RhdGVPcHRpb25zOiBJUm90YXRlQW5pbWF0aW9uID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihyb3RhdGVPcHRpb25zLmFuY2hvciB8fCAndGRSb3RhdGUnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIChyb3RhdGVPcHRpb25zLmRlZ3JlZXMgfHwgMTgwKSArICdkZWcpJyxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKHJvdGF0ZU9wdGlvbnMuZHVyYXRpb24gfHwgMjUwKSArICdtcyAnICtcbiAgICAgICAgICAocm90YXRlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcyAnICtcbiAgICAgICAgICAocm90YXRlT3B0aW9ucy5lYXNlIHx8ICdlYXNlLWluJykpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbGxhcHNlQW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICAgZWFzZU9uQ2xvc2U/OiBzdHJpbmc7XG4gICBlYXNlT25PcGVuPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkQ29sbGFwc2VBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAxNTAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2VPbkNsb3NlOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gY2xvc2luZy4gRGVmYXVsdHMgdG8gZWFzZS1pbi5cbiAqICogZWFzZU9uT3BlbjogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIG9wZW5pbmcuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgY29sbGFwc2UvZXhwYW5kIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZENvbGxhcHNlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRDb2xsYXBzZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRDb2xsYXBzZScsIFtcbiAgICBzdGF0ZSgnMScsIHN0eWxlKHtcbiAgICAgIGhlaWdodDogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcwJywgIHN0eWxlKHtcbiAgICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyksXG4gICAgICBdKSxcbiAgICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1pbicgfX0pLFxuICAgIHRyYW5zaXRpb24oJzEgPT4gMCcsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyksXG4gICAgICBdKSxcbiAgICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbiAgXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRDb2xsYXBzZUFuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkQ29sbGFwc2VBbmltYXRpb24oY29sbGFwc2VPcHRpb25zOiBJQ29sbGFwc2VBbmltYXRpb24gPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKGNvbGxhcHNlT3B0aW9ucy5hbmNob3IgfHwgJ3RkQ29sbGFwc2UnLCBbXG4gICAgc3RhdGUoJzEnLCBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMCcsICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChjb2xsYXBzZU9wdGlvbnMuZHVyYXRpb24gfHwgMTUwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChjb2xsYXBzZU9wdGlvbnMuZWFzZU9uQ2xvc2UgfHwgJ2Vhc2UtaW4nKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChjb2xsYXBzZU9wdGlvbnMuZHVyYXRpb24gfHwgMTUwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChjb2xsYXBzZU9wdGlvbnMuZWFzZU9uT3BlbiB8fCAnZWFzZS1vdXQnKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwICB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhZGVJbk91dEFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgZWFzZU9uSW4/OiBzdHJpbmc7XG4gIGVhc2VPbk91dD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZEZhZGVJbk91dEFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZU9uSW46IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBmYWRpbmcgaW4uIERlZmF1bHRzIHRvIGVhc2UtaW4uXG4gKiAqIGVhc2VPbk91dDogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGZhZGluZyBvdXQuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgZmFkZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRGYWRlSW5PdXRdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEZhZGVJbk91dEFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRGYWRlSW5PdXQnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlT25JbiB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZU9uSW46ICdlYXNlLWluJyB9fSksXG4gICAgdHJhbnNpdGlvbignMSA9PiAwJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2VPbk91dCB9fScpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlT25PdXQ6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRGYWRlSW5PdXRBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEZhZGVJbk91dEFuaW1hdGlvbihmYWRlSW5PdXQ6IElGYWRlSW5PdXRBbmltYXRpb24gPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKChmYWRlSW5PdXQuYW5jaG9yIHx8ICd0ZEZhZGVJbk91dCcpLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGZhZGVJbk91dC5kdXJhdGlvbiB8fCAxNTApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZGVsYXkgfHwgMCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGZhZGVJbk91dC5lYXNlT25JbiB8fCAnZWFzZS1pbicpKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJzEgPT4gMCcsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGZhZGVJbk91dC5kdXJhdGlvbiB8fCAxNTApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZGVsYXkgfHwgMCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGZhZGVJbk91dC5lYXNlT25PdXQgfHwgJ2Vhc2Utb3V0JykpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkQm91bmNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBib3VuY2UgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkQm91bmNlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRCb3VuY2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkQm91bmNlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMC4yfSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCknLCBvZmZzZXQ6IDAuNH0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjQzfSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMC41M30pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApJywgb2Zmc2V0OiAuN30pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuOH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTRweCwgMCknLCBvZmZzZXQ6IC45fSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMS4wfSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRCb3VuY2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEJvdW5jZUFuaW1hdGlvbihib3VuY2VPcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoYm91bmNlT3B0aW9ucy5hbmNob3IgfHwgJ3RkQm91bmNlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChib3VuY2VPcHRpb25zLmR1cmF0aW9uIHx8IDUwMCkgKyAnbXMgJyArIChib3VuY2VPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuMn0pLFxuICAgICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCknLCBvZmZzZXQ6IDAuNH0pLFxuICAgICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCknLCBvZmZzZXQ6IDAuNDN9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuNTN9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApJywgb2Zmc2V0OiAuN30pLFxuICAgICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMC44fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC00cHgsIDApJywgb2Zmc2V0OiAuOX0pLFxuICAgICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMS4wfSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEZsYXNoQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBmbGFzaCBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRGbGFzaF09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkRmxhc2hBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkRmxhc2gnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIG9wYWNpdHk6IDEsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIG9wYWNpdHk6IDEsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMC4yNX0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMC43NX0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxLjB9KSxcbiAgICAgIF0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZEZsYXNoQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRGbGFzaEFuaW1hdGlvbihmbGFzaE9wdGlvbnM6IElBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihmbGFzaE9wdGlvbnMuYW5jaG9yIHx8ICd0ZEZsYXNoJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGZsYXNoT3B0aW9ucy5kdXJhdGlvbiB8fCA1MDApICsgJ21zICcgKyAoZmxhc2hPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMC4yNX0pLFxuICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDAuNX0pLFxuICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuNzV9KSxcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxLjB9KSxcbiAgICAgICAgXSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkSGVhZHNoYWtlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBoZWFkc2hha2UgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkSGVhZHNoYWtlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRIZWFkc2hha2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkSGVhZHNoYWtlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpJywgb2Zmc2V0OiAwLjA2NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyknLCBvZmZzZXQ6IDAuMTg1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpJywgb2Zmc2V0OiAwLjMxNX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyknLCBvZmZzZXQ6IDAuNDM1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwLjUwfSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRIZWFkc2hha2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEhlYWRzaGFrZUFuaW1hdGlvbihoZWFkc2hha2VPcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoaGVhZHNoYWtlT3B0aW9ucy5hbmNob3IgfHwgJ3RkSGVhZHNoYWtlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoaGVhZHNoYWtlT3B0aW9ucy5kdXJhdGlvbiB8fCA1MDApICsgJ21zICcgKyAoaGVhZHNoYWtlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKScsIG9mZnNldDogMC4wNjV9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyknLCBvZmZzZXQ6IDAuMTg1fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyknLCBvZmZzZXQ6IDAuMzE1fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpJywgb2Zmc2V0OiAwLjQzNX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwLjUwfSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEplbGxvQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBqZWxsbyBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRKZWxsb109XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkSmVsbG9BbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkSmVsbG8nLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ25vbmUnLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvZmZzZXQ6IDAuMDExfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpJywgb2Zmc2V0OiAwLjIyMn0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyknLCBvZmZzZXQ6IDAuMzMzfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyknLCBvZmZzZXQ6IDAuNDQ0fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyknLCBvZmZzZXQ6IDAuNTU1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpJywgb2Zmc2V0OiAwLjY2Nn0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKScsIG9mZnNldDogMC43Nzd9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpJywgb2Zmc2V0OiAwLjg4OH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkSmVsbG9BbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEplbGxvQW5pbWF0aW9uKGplbGxvT3B0aW9uczogSUFuaW1hdGlvbk9wdGlvbnMgPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKGplbGxvT3B0aW9ucy5hbmNob3IgfHwgJ3RkSmVsbG8nLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChqZWxsb09wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKGplbGxvT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMC4wMTF9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKScsIG9mZnNldDogMC4yMjJ9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyknLCBvZmZzZXQ6IDAuMzMzfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKScsIG9mZnNldDogMC40NDR9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpJywgb2Zmc2V0OiAwLjU1NX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpJywgb2Zmc2V0OiAwLjY2Nn0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpJywgb2Zmc2V0OiAwLjc3N30pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKScsIG9mZnNldDogMC44ODh9KSxcbiAgICAgICAgXSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkUHVsc2VBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byA1MDAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlIGFuZCBkZWNlbGVyYXRlIHN0eWxlLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIHB1bHNlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZFB1bHNlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRQdWxzZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRQdWxzZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSknLCBvZmZzZXQ6IDAuNSB9KSxcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDEuMCB9KSxcbiAgICAgICAgXSksXG4gICAgICApLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkUHVsc2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFB1bHNlQW5pbWF0aW9uKHB1bHNlT3B0aW9uczogSUFuaW1hdGlvbk9wdGlvbnMgPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKHB1bHNlT3B0aW9ucy5hbmNob3IgfHwgJ3RkUHVsc2UnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChwdWxzZU9wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKHB1bHNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsXG4gICAgICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KScsIG9mZnNldDogMC41IH0pLFxuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAxLjAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3Qgbm9vcDogYW55ID0gKCkgPT4ge1xuICAvLyBlbXB0eSBtZXRob2Rcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogYW55O1xuICB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcbiAgb25DaGFuZ2U6IChfOiBhbnkpID0+IGFueTtcbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUhhc0NoYW5nZURldGVjdG9yUmVmIHtcbiAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbn1cblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBjb21wb25lbnQgd2l0aCBuZ01vZGVsIHN1cHBvcnQuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I8SUhhc0NoYW5nZURldGVjdG9yUmVmPj5cbiAgICAgICAgICAgICAgICAoYmFzZTogVCwgaW5pdGlhbFZhbHVlPzogYW55KTogQ29uc3RydWN0b3I8SUNvbnRyb2xWYWx1ZUFjY2Vzc29yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF92YWx1ZTogYW55ID0gaW5pdGlhbFZhbHVlO1xuICAgIHByaXZhdGUgX3N1YmplY3RWYWx1ZUNoYW5nZXM6IFN1YmplY3Q8YW55PjtcbiAgICB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTsgXG4gICAgICB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMgPSB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICAgIGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzLm5leHQodik7XG4gICAgICB9XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IG5vb3A7XG4gICAgb25Ub3VjaGVkID0gKCkgPT4gbm9vcDtcblxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbi8qKiBJbnRlcmZhY2UgdG8gaW1wbGVtZW50IHdoZW4gYXBwbHlpbmcgdGhlIGRpc2FibGVkIG1peGluICovXG5leHBvcnQgaW50ZXJmYWNlIElDYW5EaXNhYmxlIHtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQ7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSB3aXRoIGEgYGRpc2FibGVkYCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcjx7fT4+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxJQ2FuRGlzYWJsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBib29sZWFuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLl9kaXNhYmxlZCAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVkQ2hhbmdlKHRoaXMuX2Rpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIC8qKiBOT1QgSU1QTEVNRU5URUQsIHRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGJ5IHN1YmNsYXNzZXMgaWYgbmVlZGVkICovXG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbi8qKiBJbnRlcmZhY2UgdG8gaW1wbGVtZW50IHdoZW4gYXBwbHlpbmcgdGhlIGRpc2FibGVkIG1peGluICovXG5leHBvcnQgaW50ZXJmYWNlIElDYW5EaXNhYmxlUmlwcGxlIHtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgb25EaXNhYmxlUmlwcGxlQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGNvbXBvbmVudCBvciBkaXJlY3RpdmUgd2l0aCBhIGBkaXNhYmxlZGAgcHJvcGVydHkuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlUmlwcGxlPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcjx7fT4+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxJQ2FuRGlzYWJsZVJpcHBsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZVJpcHBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlUmlwcGxlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVSaXBwbGU7XG4gICAgfVxuICAgIHNldCBkaXNhYmxlUmlwcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICBsZXQgbmV3VmFsdWU6IGJvb2xlYW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2Rpc2FibGVSaXBwbGUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVSaXBwbGUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVSaXBwbGVDaGFuZ2UodGhpcy5fZGlzYWJsZVJpcHBsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25EaXNhYmxlUmlwcGxlQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIC8qKiBOT1QgSU1QTEVNRU5URUQsIHRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGJ5IHN1YmNsYXNzZXMgaWYgbmVlZGVkICovXG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIENvdmFsZW50VmFsaWRhdG9ycyB7XG4gIHN0YXRpYyBtaW4obWluVmFsdWU6IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBsZXQgZnVuYzogVmFsaWRhdG9yRm4gPSAoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgaWYgKCEhVmFsaWRhdG9ycy5yZXF1aXJlZChjKSB8fCAoIW1pblZhbHVlICYmIG1pblZhbHVlICE9PSAwKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgbGV0IHY6IG51bWJlciA9IGMudmFsdWU7XG4gICAgICByZXR1cm4gdiA8IG1pblZhbHVlID9cbiAgICAgICAgeyBtaW46IHttaW5WYWx1ZTogbWluVmFsdWUsIGFjdHVhbFZhbHVlOiB2fSB9IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICBzdGF0aWMgbWF4KG1heFZhbHVlOiBhbnkpOiBWYWxpZGF0b3JGbiB7XG4gICAgbGV0IGZ1bmM6IFZhbGlkYXRvckZuID0gKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgIGlmICghIVZhbGlkYXRvcnMucmVxdWlyZWQoYykgfHwgKCFtYXhWYWx1ZSAmJiBtYXhWYWx1ZSAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGxldCB2OiBudW1iZXIgPSBjLnZhbHVlO1xuICAgICAgcmV0dXJuIHYgPiBtYXhWYWx1ZSA/XG4gICAgICAgIHsgbWF4OiB7bWF4VmFsdWU6IG1heFZhbHVlLCBhY3R1YWxWYWx1ZTogdn0gfSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgc3RhdGljIG51bWJlclJlcXVpcmVkKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gKE51bWJlci5pc05hTihjLnZhbHVlKSkgP1xuICAgICAgICB7IHJlcXVpcmVkOiB0cnVlIH0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gIH1cblxufVxuIl0sIm5hbWVzIjpbImFuaW1hdGlvbiIsInN0eWxlIiwiQVVUT19TVFlMRSIsImFuaW1hdGUiLCJEaXJlY3RpdmUiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJBbmltYXRpb25CdWlsZGVyIiwiSW5wdXQiLCJIb3N0QmluZGluZyIsIkV2ZW50RW1pdHRlciIsIk91dHB1dCIsIk5nTW9kZWwiLCJPcHRpb25hbCIsIkhvc3QiLCJIb3N0TGlzdGVuZXIiLCJQaXBlIiwiRGVjaW1hbFBpcGUiLCJJbmplY3QiLCJMT0NBTEVfSUQiLCJmaWx0ZXIiLCJSb3V0ZXNSZWNvZ25pemVkIiwicGFpcndpc2UiLCJJbmplY3RhYmxlIiwiUm91dGVyIiwiTmdNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsInRyaWdnZXIiLCJzdGF0ZSIsInRyYW5zaXRpb24iLCJncm91cCIsInF1ZXJ5IiwiYW5pbWF0ZUNoaWxkIiwia2V5ZnJhbWVzIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJTdWJqZWN0IiwiY29lcmNlQm9vbGVhblByb3BlcnR5IiwiVmFsaWRhdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBMkRFLDJCQUFvQixTQUFvQixFQUNwQixRQUFvQixFQUNwQixrQkFBcUMsRUFDckMsaUJBQW1DO1lBSG5DLGNBQVMsR0FBVCxTQUFTLENBQVc7WUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtZQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1lBQ3JDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7Ozs7OztZQTNDOUMsYUFBUSxHQUFXLEdBQUcsQ0FBQztZQTRDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxL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