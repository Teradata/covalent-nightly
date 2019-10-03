(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/animations'), require('rxjs'), require('@angular/cdk/coercion')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/common', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/animations', 'rxjs', '@angular/cdk/coercion'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.common = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.animations, global.rxjs, global.ng.cdk.coercion));
}(this, function (exports, core, common, forms, animations, rxjs, coercion) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (this._model && this._model.value && typeof this._model.value === 'string') {
                this._model.update.emit(this._model.value.trim());
            }
        };
        TdAutoTrimDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdAutoTrim]',
                    },] }
        ];
        /** @nocollapse */
        TdAutoTrimDirective.ctorParameters = function () { return [
            { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
        ]; };
        TdAutoTrimDirective.propDecorators = {
            onBlur: [{ type: core.HostListener, args: ['blur', ['$event'],] }]
        };
        return TdAutoTrimDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFullscreenDirective = /** @class */ (function () {
        function TdFullscreenDirective(_document, _el) {
            this._document = _document;
            this._el = _el;
            this.fullScreenIsActive = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TdFullscreenDirective.prototype.fsChangeHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
        };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.toggleFullScreen = /**
         * @return {?}
         */
        function () {
            this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
        };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.enterFullScreen = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            var nativeElement = this._el.nativeElement;
            /** @type {?} */
            var enterFullScreenMap = {
                requestFullscreen: (/**
                 * @return {?}
                 */
                function () { return nativeElement.requestFullscreen(); }),
                // Chrome
                webkitRequestFullscreen: (/**
                 * @return {?}
                 */
                function () { return nativeElement.webkitRequestFullscreen(); }),
                // Safari
                mozRequestFullScreen: (/**
                 * @return {?}
                 */
                function () { return nativeElement.mozRequestFullScreen(); }),
                // Firefox
                msRequestFullscreen: (/**
                 * @return {?}
                 */
                function () { return nativeElement.msRequestFullscreen(); }),
            };
            try {
                for (var _b = __values(Object.keys(enterFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var handler = _c.value;
                    if (nativeElement[handler]) {
                        enterFullScreenMap[handler]();
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.exitFullScreen = /**
         * @return {?}
         */
        function () {
            var e_2, _a;
            var _b = this, _document = _b._document, nativeElement = _b._el.nativeElement;
            /** @type {?} */
            var exitFullScreenMap = {
                exitFullscreen: (/**
                 * @return {?}
                 */
                function () { return _document.exitFullscreen(); }),
                // Chrome
                webkitExitFullscreen: (/**
                 * @return {?}
                 */
                function () { return _document.webkitExitFullscreen(); }),
                // Safari
                mozCancelFullScreen: (/**
                 * @return {?}
                 */
                function () { return _document.mozCancelFullScreen(); }),
                // Firefox
                msExitFullscreen: (/**
                 * @return {?}
                 */
                function () { return _document.msExitFullscreen(); }),
            };
            try {
                for (var _c = __values(Object.keys(exitFullScreenMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var handler = _d.value;
                    if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                        exitFullScreenMap[handler]();
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdFullscreenDirective.prototype._getFullScreenElement = /**
         * @private
         * @return {?}
         */
        function () {
            var e_3, _a;
            var _document = this._document;
            /** @type {?} */
            var tdFullScreenElementMap = {
                fullscreenElement: (/**
                 * @return {?}
                 */
                function () { return _document.fullscreenElement; }),
                // Chrome, Opera
                webkitFullscreenElement: (/**
                 * @return {?}
                 */
                function () { return _document.webkitFullscreenElement; }),
                // Safari
                mozFullscreenElement: (/**
                 * @return {?}
                 */
                function () { return _document.mozFullscreenElement; }),
                // Firefox
                msFullscreenElement: (/**
                 * @return {?}
                 */
                function () { return _document.msFullscreenElement; }),
            };
            try {
                for (var _b = __values(Object.keys(tdFullScreenElementMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var props = _c.value;
                    if (_document[props]) {
                        return _document[props];
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        TdFullscreenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFullScreen]',
                        exportAs: 'tdFullScreen',
                    },] }
        ];
        /** @nocollapse */
        TdFullscreenDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.ElementRef }
        ]; };
        TdFullscreenDirective.propDecorators = {
            fsChangeHandler: [{ type: core.HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
        };
        return TdFullscreenDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            diff = diff - days * (60 * 60 * 24);
            /** @type {?} */
            var hours = Math.floor(diff / (60 * 60));
            diff = diff - hours * (60 * 60);
            /** @type {?} */
            var minutes = Math.floor(diff / 60);
            diff -= minutes * 60;
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
            return ((days > 0 ? days + daysFormatted : daysFormatted) +
                pad.substring(0, pad.length - (hours + '').length) +
                hours +
                ':' +
                pad.substring(0, pad.length - (minutes + '').length) +
                minutes +
                ':' +
                pad.substring(0, pad.length - (seconds + '').length) +
                seconds);
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (precision === void 0) { precision = 2; }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (precision === void 0) { precision = 2; }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDigitsPipe = /** @class */ (function () {
        function TdDigitsPipe(_locale) {
            if (_locale === void 0) { _locale = 'en'; }
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
            if (precision === void 0) { precision = 1; }
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
            return (this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : ''));
        };
        TdDigitsPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'digits',
                    },] }
        ];
        /** @nocollapse */
        TdDigitsPipe.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        return TdDigitsPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DIRECTIVES = [TdAutoTrimDirective, TdFullscreenDirective];
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
    /**
     * Services
     */
    var CovalentCommonModule = /** @class */ (function () {
        function CovalentCommonModule() {
        }
        CovalentCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [forms.FormsModule, common.CommonModule],
                        declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                        exports: [forms.FormsModule, common.CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                    },] }
        ];
        return CovalentCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        animations.transition('0 <=> 1', [animations.group([animations.query('@*', animations.animateChild(), { optional: true }), animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}')])], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            overflow: 'hidden',
        })),
        animations.state('0', animations.style({
            height: animations.AUTO_STYLE,
            overflow: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.style({
                overflow: 'hidden',
                height: animations.AUTO_STYLE,
            }),
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.style({
                    height: '0',
                    overflow: 'hidden',
                })),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.style({
                height: '0',
                overflow: 'hidden',
            }),
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.style({
                    overflow: 'hidden',
                    height: animations.AUTO_STYLE,
                })),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0.2,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                        transform: 'translate3d(0, -30px, 0)',
                        offset: 0.4,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                        transform: 'translate3d(0, -30px, 0)',
                        offset: 0.43,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0.53,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                        transform: 'translate3d(0, -15px, 0)',
                        offset: 0.7,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0.8,
                    }),
                    animations.style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 1.0,
                    }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    animations.style({ transform: 'translateX(0)', offset: 0.5 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = (/**
     * @return {?}
     */
    function () {
        // empty method
    });
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
                _this._value = initialValue instanceof Array ? Object.assign([], initialValue) : initialValue;
                _this.onChange = (/**
                 * @param {?} _
                 * @return {?}
                 */
                function (_) { return noop; });
                _this.onTouched = (/**
                 * @return {?}
                 */
                function () { return noop; });
                _this._subjectValueChanges = new rxjs.Subject();
                _this.valueChanges = _this._subjectValueChanges.asObservable();
                return _this;
            }
            Object.defineProperty(class_1.prototype, "value", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this._value;
                },
                set: /**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                 */
                function () {
                    return this._disabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                 */
                function () {
                    return this._disableRipple;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var func = (/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                if (!!forms.Validators.required(c) || (!minValue && minValue !== 0)) {
                    return undefined;
                }
                /** @type {?} */
                var v = c.value;
                return v < minValue ? { min: { minValue: minValue, actualValue: v } } : undefined;
            });
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
            var func = (/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                if (!!forms.Validators.required(c) || (!maxValue && maxValue !== 0)) {
                    return undefined;
                }
                /** @type {?} */
                var v = c.value;
                return v > maxValue ? { max: { maxValue: maxValue, actualValue: v } } : undefined;
            });
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
            return Number.isNaN(c.value) ? { required: true } : undefined;
        };
        return CovalentValidators;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Assign a text value to the system clipboard. Note: Due to browser
     * security restrictions, the copy will only succeed if this method
     * is invoked as a result of a user action (eg. user button click).
     *
     * @param {?} value text value to be assigned to clipboard.
     * @return {?} boolean indicating success/failure of copy operation.
     */
    function copyToClipboard(value) {
        // Create a temporary textarea element and append to DOM
        /** @type {?} */
        var fakeTextArea = document.createElement('textarea');
        document.body.appendChild(fakeTextArea);
        // Assign value to be copied to clipboard
        fakeTextArea.value = value;
        fakeTextArea.select();
        // Copy to clipboard
        /** @type {?} */
        var success = document.execCommand('copy');
        // Remove temporary textarea
        document.body.removeChild(fakeTextArea);
        // Return boolean indicating if exec command succeeded
        return success;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Conversion function that takes an array of objects and converts
     * them to CSV format. Custom key and line separators can be specified.
     *
     * @param {?} objects list of strings in JSON format or actual objects
     * @param {?=} keySeparator optional parameter to specify custom value separator
     * @param {?=} lineSeparator optional parameter to specify custom end of line separator
     * @return {?} CSV formatted string
     */
    function convertObjectsToCSV(objects, keySeparator, lineSeparator) {
        if (keySeparator === void 0) { keySeparator = ','; }
        if (lineSeparator === void 0) { lineSeparator = '\r\n'; }
        if (!objects) {
            return '';
        }
        /** @type {?} */
        var outputString = '';
        // Iterate through array, creating one output line per object
        objects.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        function (value, key) {
            /** @type {?} */
            var line = '';
            for (var index in objects[key]) {
                if (line !== '') {
                    line += keySeparator;
                }
                if (objects[key][index] === null || objects[key][index] === undefined) {
                    objects[key][index] = '';
                }
                line += objects[key][index];
            }
            outputString += "" + line + lineSeparator;
        }));
        // Append header row identifying keys into output
        if (objects[0]) {
            /** @type {?} */
            var headers = Object.keys(objects[0]).join(keySeparator);
            outputString = "" + headers + lineSeparator + outputString;
        }
        return outputString;
    }
    /**
     * Conversion function that takes a CSV representation
     * of objects and converts them to JSON.
     * The first row in the input must be the object keys.
     * Custom key separator and line separator can be specified.
     * Indentation size for output JSON can be specified.
     *
     * @param {?} csv list of strings in JSON format or actual objects
     * @param {?=} keySeparator optional parameter to specify custom value separator
     * @param {?=} lineSeparator optional parameter to specify custom end of line separator
     * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2.
     * @return {?} JSON formatted string
     */
    function convertCSVToJSON(csv, keySeparator, lineSeparator, indent) {
        if (keySeparator === void 0) { keySeparator = ','; }
        if (lineSeparator === void 0) { lineSeparator = '\r\n'; }
        if (indent === void 0) { indent = 2; }
        if (!csv) {
            return '';
        }
        /** @type {?} */
        var csvArray = csv.split(lineSeparator);
        // Input CSV must have a minimum of two rows
        if (csvArray.length < 2) {
            return '';
        }
        /** @type {?} */
        var newObjects = [];
        // Extract object keys from header row
        /** @type {?} */
        var keys = csvArray[0].split(keySeparator);
        // Iterate through array, creating one output line per object
        for (var i = 1; i < csvArray.length; i++) {
            /** @type {?} */
            var newObject = {};
            /** @type {?} */
            var values = csvArray[i].split(keySeparator);
            if (values.length !== keys.length) {
                continue;
            }
            for (var j = 0; j < keys.length; j++) {
                newObject[keys[j]] = values[j];
            }
            newObjects.push(newObject);
        }
        return formatJSON(newObjects, indent);
    }
    /**
     * Convert object to JSON using stringify. Indentation size for output JSON can be specified.
     *
     * @param {?} json object to be converted
     * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2.
     * @return {?}
     */
    function formatJSON(json, indent) {
        if (indent === void 0) { indent = 2; }
        return JSON.stringify(json, undefined, indent);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Download CSV content to the specified file with .csv extension
     * appended to the provided base file name.
     *
     * @param {?} fileBaseName base name of destination file
     * @param {?} csv CSV contents
     * @return {?}
     */
    function downloadCSV(fileBaseName, csv) {
        downloadFile(fileBaseName + ".csv", csv, 'text/csv');
    }
    /**
     * Download JSON content to the specified file with .json extension
     * appended to the provided base file name.
     *
     * @param {?} fileBaseName base name of destination file
     * @param {?} json JSON contents
     * @param {?=} format indicates if JSON should be prettied
     * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2
     * @return {?}
     */
    function downloadJSON(fileBaseName, json, format, indent) {
        if (format === void 0) { format = false; }
        if (indent === void 0) { indent = 2; }
        downloadFile(fileBaseName + ".json", format ? formatJSON(JSON.parse(json), indent) : json, 'application/json');
    }
    /**
     * Convert objects to CSV format and download to file with .csv
     * extension appended to the provided base file name. Custom key
     * separator and line separator can be specified.
     *
     * @param {?} fileBaseName base name of destination file
     * @param {?} objects object array to be converted to CSV format
     *   prior to writing to download destination
     * @param {?=} keySeparator optional parameter to specify custom value separator
     * @param {?=} lineSeparator optional parameter to specify custom end of line separator
     * @return {?}
     */
    function downloadObjectsToCSV(fileBaseName, objects, keySeparator, lineSeparator) {
        if (keySeparator === void 0) { keySeparator = ','; }
        if (lineSeparator === void 0) { lineSeparator = '\r\n'; }
        downloadFile(fileBaseName + ".csv", convertObjectsToCSV(objects, keySeparator, lineSeparator), 'text/csv');
    }
    /**
     * Convert objects to JSON format and download to file with .json
     * extension appended to the provided base file name.
     *
     * @param {?} fileBaseName base name of destination file
     * @param {?} objects object array to be converted to JSON format
     *   prior to writing to download destination
     * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2
     * @return {?}
     */
    function downloadObjectsToJSON(fileBaseName, objects, indent) {
        if (indent === void 0) { indent = 2; }
        downloadFile(fileBaseName + ".json", formatJSON(objects, indent), 'application/json');
    }
    /**
     * Download string content to the specified file with desired mime type.
     *
     * @param {?} fileName full filename (including appropriate extension) of destination file
     * @param {?} contents string contents to be written to download destination
     * @param {?=} mimeType mime type appropriate to file content to support consumption of destination file
     * @return {?}
     */
    function downloadFile(fileName, contents, mimeType) {
        if (mimeType === void 0) { mimeType = 'text/plain'; }
        if (!fileName || !contents) {
            return;
        }
        // Create blob object and assign URL
        /** @type {?} */
        var blob = new Blob([contents], { type: mimeType });
        /** @type {?} */
        var url = window.URL.createObjectURL(blob);
        // Construct anchor for URL, append to DOM, click and cleanup.
        /** @type {?} */
        var a = document.createElement('a');
        a.setAttribute('style', 'display: none');
        a.setAttribute('download', fileName);
        a.href = url;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Read file as UTF-8 text. Return string contents on read completion.
     *
     * @param {?} file filename or File object
     * @return {?} promise that resolves to file content string
     */
    function readFile(file) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = (/**
             * @return {?}
             */
            function () {
                resolve((/** @type {?} */ (reader.result)));
            });
        }));
    }

    exports.CovalentCommonModule = CovalentCommonModule;
    exports.CovalentValidators = CovalentValidators;
    exports.TdAutoTrimDirective = TdAutoTrimDirective;
    exports.TdBytesPipe = TdBytesPipe;
    exports.TdDecimalBytesPipe = TdDecimalBytesPipe;
    exports.TdDigitsPipe = TdDigitsPipe;
    exports.TdTimeAgoPipe = TdTimeAgoPipe;
    exports.TdTimeDifferencePipe = TdTimeDifferencePipe;
    exports.TdTruncatePipe = TdTruncatePipe;
    exports.convertCSVToJSON = convertCSVToJSON;
    exports.convertObjectsToCSV = convertObjectsToCSV;
    exports.copyToClipboard = copyToClipboard;
    exports.downloadCSV = downloadCSV;
    exports.downloadFile = downloadFile;
    exports.downloadJSON = downloadJSON;
    exports.downloadObjectsToCSV = downloadObjectsToCSV;
    exports.downloadObjectsToJSON = downloadObjectsToJSON;
    exports.formatJSON = formatJSON;
    exports.mixinControlValueAccessor = mixinControlValueAccessor;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.mixinDisabled = mixinDisabled;
    exports.readFile = readFile;
    exports.tdBounceAnimation = tdBounceAnimation;
    exports.tdCollapseAnimation = tdCollapseAnimation;
    exports.tdFadeInOutAnimation = tdFadeInOutAnimation;
    exports.tdFlashAnimation = tdFlashAnimation;
    exports.tdHeadshakeAnimation = tdHeadshakeAnimation;
    exports.tdJelloAnimation = tdJelloAnimation;
    exports.tdPulseAnimation = tdPulseAnimation;
    exports.tdRotateAnimation = tdRotateAnimation;
    exports.ɵa = TdFullscreenDirective;
    exports.ɵb = TdTimeUntilPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-core-common.umd.js.map
