import { Directive, Optional, Host, HostListener, Inject, ElementRef, Pipe, LOCALE_ID, Injectable, NgModule } from '@angular/core';
import { DOCUMENT, DecimalPipe, CommonModule } from '@angular/common';
import { NgModel, FormsModule, Validators } from '@angular/forms';
import { __values, __extends, __spread } from 'tslib';
import { RoutesRecognized, Router } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { trigger, state, style, transition, group, query, animateChild, animate, AUTO_STYLE, keyframes } from '@angular/animations';
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

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
        { type: Directive, args: [{
                    selector: '[tdAutoTrim]',
                },] }
    ];
    /** @nocollapse */
    TdAutoTrimDirective.ctorParameters = function () { return [
        { type: NgModel, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    TdAutoTrimDirective.propDecorators = {
        onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
    };
    return TdAutoTrimDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdAutoTrimDirective.prototype._model;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IFsDocument() { }
if (false) {
    /** @type {?} */
    IFsDocument.prototype.fullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.webkitFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.mozFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.msFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.webkitExitFullscreen;
    /** @type {?} */
    IFsDocument.prototype.mozCancelFullScreen;
    /** @type {?} */
    IFsDocument.prototype.msExitFullscreen;
}
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
        { type: Directive, args: [{
                    selector: '[tdFullScreen]',
                    exportAs: 'tdFullScreen',
                },] }
    ];
    /** @nocollapse */
    TdFullscreenDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef }
    ]; };
    TdFullscreenDirective.propDecorators = {
        fsChangeHandler: [{ type: HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
    };
    return TdFullscreenDirective;
}());
if (false) {
    /** @type {?} */
    TdFullscreenDirective.prototype.fullScreenIsActive;
    /**
     * @type {?}
     * @private
     */
    TdFullscreenDirective.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdFullscreenDirective.prototype._el;
}

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
        { type: Pipe, args: [{
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
        { type: Pipe, args: [{
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
        { type: Pipe, args: [{
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
        { type: Pipe, args: [{
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
        { type: Pipe, args: [{
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
        this._decimalPipe = new DecimalPipe(this._locale);
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
        { type: Pipe, args: [{
                    name: 'digits',
                },] }
    ];
    /** @nocollapse */
    TdDigitsPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return TdDigitsPipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDigitsPipe.prototype._decimalPipe;
    /**
     * @type {?}
     * @private
     */
    TdDigitsPipe.prototype._locale;
}

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
        { type: Pipe, args: [{
                    name: 'truncate',
                },] }
    ];
    return TdTruncatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouterPathService = /** @class */ (function () {
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e instanceof RoutesRecognized; })), pairwise())
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            RouterPathService._previousRoute = e[0].urlAfterRedirects;
        }));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    RouterPathService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return RouterPathService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    RouterPathService._previousRoute;
    /**
     * @type {?}
     * @private
     */
    RouterPathService.prototype._router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconService = /** @class */ (function () {
    function IconService() {
        // To update, run this little script on https://material.io/resources/icons/?style=baseline
        // JSON.stringify(
        //   Array.from(document.querySelectorAll('icons-library .material-icons.icon-image-preview')).map(
        //     ({textContent}) => textContent
        //   )
        // );
        this._icons = [
            '3d_rotation',
            'accessibility',
            'accessibility_new',
            'accessible',
            'accessible_forward',
            'account_balance',
            'account_balance_wallet',
            'account_box',
            'account_circle',
            'add_shopping_cart',
            'alarm',
            'alarm_add',
            'alarm_off',
            'alarm_on',
            'all_inbox',
            'all_out',
            'android',
            'announcement',
            'arrow_right_alt',
            'aspect_ratio',
            'assessment',
            'assignment',
            'assignment_ind',
            'assignment_late',
            'assignment_return',
            'assignment_returned',
            'assignment_turned_in',
            'autorenew',
            'backup',
            'book',
            'bookmark',
            'bookmark_border',
            'bookmarks',
            'bug_report',
            'build',
            'cached',
            'calendar_today',
            'calendar_view_day',
            'camera_enhance',
            'cancel_schedule_send',
            'card_giftcard',
            'card_membership',
            'card_travel',
            'change_history',
            'check_circle',
            'check_circle_outline',
            'chrome_reader_mode',
            'class',
            'code',
            'commute',
            'compare_arrows',
            'contact_support',
            'contactless',
            'copyright',
            'credit_card',
            'dashboard',
            'date_range',
            'delete',
            'delete_forever',
            'delete_outline',
            'description',
            'dns',
            'done',
            'done_all',
            'done_outline',
            'donut_large',
            'donut_small',
            'drag_indicator',
            'eco',
            'eject',
            'euro_symbol',
            'event',
            'event_seat',
            'exit_to_app',
            'explore',
            'explore_off',
            'extension',
            'face',
            'favorite',
            'favorite_border',
            'feedback',
            'find_in_page',
            'find_replace',
            'fingerprint',
            'flight_land',
            'flight_takeoff',
            'flip_to_back',
            'flip_to_front',
            'g_translate',
            'gavel',
            'get_app',
            'gif',
            'grade',
            'group_work',
            'help',
            'help_outline',
            'highlight_off',
            'history',
            'home',
            'horizontal_split',
            'hourglass_empty',
            'hourglass_full',
            'http',
            'https',
            'important_devices',
            'info',
            'input',
            'invert_colors',
            'label',
            'label_important',
            'label_off',
            'language',
            'launch',
            'line_style',
            'line_weight',
            'list',
            'lock',
            'lock_open',
            'loyalty',
            'markunread_mailbox',
            'maximize',
            'minimize',
            'motorcycle',
            'note_add',
            'offline_bolt',
            'offline_pin',
            'opacity',
            'open_in_browser',
            'open_in_new',
            'open_with',
            'pageview',
            'pan_tool',
            'payment',
            'perm_camera_mic',
            'perm_contact_calendar',
            'perm_data_setting',
            'perm_device_information',
            'perm_identity',
            'perm_media',
            'perm_phone_msg',
            'perm_scan_wifi',
            'pets',
            'picture_in_picture',
            'picture_in_picture_alt',
            'play_for_work',
            'polymer',
            'power_settings_new',
            'pregnant_woman',
            'print',
            'query_builder',
            'question_answer',
            'receipt',
            'record_voice_over',
            'redeem',
            'remove_shopping_cart',
            'reorder',
            'report_problem',
            'restore',
            'restore_from_trash',
            'restore_page',
            'room',
            'rounded_corner',
            'rowing',
            'schedule',
            'search',
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
            'settings_voice',
            'shop',
            'shop_two',
            'shopping_basket',
            'shopping_cart',
            'speaker_notes',
            'speaker_notes_off',
            'spellcheck',
            'stars',
            'store',
            'subject',
            'supervised_user_circle',
            'supervisor_account',
            'swap_horiz',
            'swap_horizontal_circle',
            'swap_vert',
            'swap_vertical_circle',
            'sync_alt',
            'system_update_alt',
            'tab',
            'tab_unselected',
            'text_rotate_up',
            'text_rotate_vertical',
            'text_rotation_angledown',
            'text_rotation_angleup',
            'text_rotation_down',
            'text_rotation_none',
            'theaters',
            'thumb_down',
            'thumb_up',
            'thumbs_up_down',
            'timeline',
            'toc',
            'today',
            'toll',
            'touch_app',
            'track_changes',
            'translate',
            'trending_down',
            'trending_flat',
            'trending_up',
            'turned_in',
            'turned_in_not',
            'update',
            'verified_user',
            'vertical_split',
            'view_agenda',
            'view_array',
            'view_carousel',
            'view_column',
            'view_day',
            'view_headline',
            'view_list',
            'view_module',
            'view_quilt',
            'view_stream',
            'view_week',
            'visibility',
            'visibility_off',
            'voice_over_off',
            'watch_later',
            'work',
            'work_off',
            'work_outline',
            'youtube_searched_for',
            'zoom_in',
            'zoom_out',
            'add_alert',
            'error',
            'error_outline',
            'notification_important',
            'warning',
            '4k',
            'add_to_queue',
            'airplay',
            'album',
            'art_track',
            'av_timer',
            'branding_watermark',
            'call_to_action',
            'closed_caption',
            'control_camera',
            'equalizer',
            'explicit',
            'fast_forward',
            'fast_rewind',
            'featured_play_list',
            'featured_video',
            'fiber_dvr',
            'fiber_manual_record',
            'fiber_new',
            'fiber_pin',
            'fiber_smart_record',
            'forward_10',
            'forward_30',
            'forward_5',
            'games',
            'hd',
            'hearing',
            'high_quality',
            'library_add',
            'library_books',
            'library_music',
            'loop',
            'mic',
            'mic_none',
            'mic_off',
            'missed_video_call',
            'movie',
            'music_video',
            'new_releases',
            'not_interested',
            'note',
            'pause',
            'pause_circle_filled',
            'pause_circle_outline',
            'play_arrow',
            'play_circle_filled',
            'play_circle_outline',
            'playlist_add',
            'playlist_add_check',
            'playlist_play',
            'queue',
            'queue_music',
            'queue_play_next',
            'radio',
            'recent_actors',
            'remove_from_queue',
            'repeat',
            'repeat_one',
            'replay',
            'replay_10',
            'replay_30',
            'replay_5',
            'shuffle',
            'skip_next',
            'skip_previous',
            'slow_motion_video',
            'snooze',
            'sort_by_alpha',
            'speed',
            'stop',
            'subscriptions',
            'subtitles',
            'surround_sound',
            'video_call',
            'video_label',
            'video_library',
            'videocam',
            'videocam_off',
            'volume_down',
            'volume_mute',
            'volume_off',
            'volume_up',
            'web',
            'web_asset',
            'business',
            'call',
            'call_end',
            'call_made',
            'call_merge',
            'call_missed',
            'call_missed_outgoing',
            'call_received',
            'call_split',
            'cancel_presentation',
            'chat',
            'chat_bubble',
            'chat_bubble_outline',
            'clear_all',
            'comment',
            'contact_mail',
            'contact_phone',
            'contacts',
            'desktop_access_disabled',
            'dialer_sip',
            'dialpad',
            'domain_disabled',
            'duo',
            'email',
            'forum',
            'import_contacts',
            'import_export',
            'invert_colors_off',
            'list_alt',
            'live_help',
            'mail_outline',
            'message',
            'mobile_screen_share',
            'no_sim',
            'pause_presentation',
            'person_add_disabled',
            'phone',
            'phone_disabled',
            'phone_enabled',
            'phonelink_erase',
            'phonelink_lock',
            'phonelink_ring',
            'phonelink_setup',
            'portable_wifi_off',
            'present_to_all',
            'print_disabled',
            'ring_volume',
            'rss_feed',
            'screen_share',
            'sentiment_satisfied_alt',
            'speaker_phone',
            'stay_current_landscape',
            'stay_current_portrait',
            'stay_primary_landscape',
            'stay_primary_portrait',
            'stop_screen_share',
            'swap_calls',
            'textsms',
            'unsubscribe',
            'voicemail',
            'vpn_key',
            'add',
            'add_box',
            'add_circle',
            'add_circle_outline',
            'amp_stories',
            'archive',
            'backspace',
            'ballot',
            'block',
            'clear',
            'create',
            'delete_sweep',
            'drafts',
            'dynamic_feed',
            'file_copy',
            'filter_list',
            'flag',
            'font_download',
            'forward',
            'gesture',
            'how_to_reg',
            'how_to_vote',
            'inbox',
            'link',
            'link_off',
            'low_priority',
            'mail',
            'markunread',
            'move_to_inbox',
            'next_week',
            'outlined_flag',
            'policy',
            'redo',
            'remove',
            'remove_circle',
            'remove_circle_outline',
            'reply',
            'reply_all',
            'report',
            'report_off',
            'save',
            'save_alt',
            'select_all',
            'send',
            'sort',
            'square_foot',
            'text_format',
            'unarchive',
            'undo',
            'waves',
            'where_to_vote',
            'access_alarm',
            'access_alarms',
            'access_time',
            'add_alarm',
            'add_to_home_screen',
            'airplanemode_active',
            'airplanemode_inactive',
            'battery_alert',
            'battery_charging_full',
            'battery_full',
            'battery_std',
            'battery_unknown',
            'bluetooth',
            'bluetooth_connected',
            'bluetooth_disabled',
            'bluetooth_searching',
            'brightness_auto',
            'brightness_high',
            'brightness_low',
            'brightness_medium',
            'data_usage',
            'developer_mode',
            'devices',
            'dvr',
            'gps_fixed',
            'gps_not_fixed',
            'gps_off',
            'graphic_eq',
            'location_disabled',
            'location_searching',
            'mobile_friendly',
            'mobile_off',
            'nfc',
            'screen_lock_landscape',
            'screen_lock_portrait',
            'screen_lock_rotation',
            'screen_rotation',
            'sd_storage',
            'settings_system_daydream',
            'signal_cellular_4_bar',
            'signal_cellular_alt',
            'signal_cellular_connected_no_internet_4_bar',
            'signal_cellular_no_sim',
            'signal_cellular_null',
            'signal_cellular_off',
            'signal_wifi_4_bar',
            'signal_wifi_4_bar_lock',
            'signal_wifi_off',
            'storage',
            'usb',
            'wallpaper',
            'widgets',
            'wifi_lock',
            'wifi_tethering',
            'add_comment',
            'attach_file',
            'attach_money',
            'bar_chart',
            'border_all',
            'border_bottom',
            'border_clear',
            'border_horizontal',
            'border_inner',
            'border_left',
            'border_outer',
            'border_right',
            'border_style',
            'border_top',
            'border_vertical',
            'bubble_chart',
            'drag_handle',
            'format_align_center',
            'format_align_justify',
            'format_align_left',
            'format_align_right',
            'format_bold',
            'format_clear',
            'format_color_reset',
            'format_indent_decrease',
            'format_indent_increase',
            'format_italic',
            'format_line_spacing',
            'format_list_bulleted',
            'format_list_numbered',
            'format_list_numbered_rtl',
            'format_paint',
            'format_quote',
            'format_shapes',
            'format_size',
            'format_strikethrough',
            'format_textdirection_l_to_r',
            'format_textdirection_r_to_l',
            'format_underlined',
            'functions',
            'height',
            'highlight',
            'insert_chart',
            'insert_chart_outlined',
            'insert_comment',
            'insert_drive_file',
            'insert_emoticon',
            'insert_invitation',
            'insert_link',
            'insert_photo',
            'linear_scale',
            'merge_type',
            'mode_comment',
            'monetization_on',
            'money_off',
            'multiline_chart',
            'notes',
            'pie_chart',
            'post_add',
            'publish',
            'scatter_plot',
            'score',
            'short_text',
            'show_chart',
            'space_bar',
            'strikethrough_s',
            'table_chart',
            'text_fields',
            'title',
            'vertical_align_bottom',
            'vertical_align_center',
            'vertical_align_top',
            'wrap_text',
            'attachment',
            'cloud',
            'cloud_circle',
            'cloud_done',
            'cloud_download',
            'cloud_off',
            'cloud_queue',
            'cloud_upload',
            'create_new_folder',
            'folder',
            'folder_open',
            'folder_shared',
            'cast',
            'cast_connected',
            'computer',
            'desktop_mac',
            'desktop_windows',
            'developer_board',
            'device_hub',
            'device_unknown',
            'devices_other',
            'dock',
            'gamepad',
            'headset',
            'headset_mic',
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
            'laptop',
            'laptop_chromebook',
            'laptop_mac',
            'laptop_windows',
            'memory',
            'mouse',
            'phone_android',
            'phone_iphone',
            'phonelink',
            'phonelink_off',
            'power_input',
            'router',
            'scanner',
            'security',
            'sim_card',
            'smartphone',
            'speaker',
            'speaker_group',
            'tablet',
            'tablet_android',
            'tablet_mac',
            'toys',
            'tv',
            'videogame_asset',
            'watch',
            'add_a_photo',
            'add_photo_alternate',
            'add_to_photos',
            'adjust',
            'assistant',
            'assistant_photo',
            'audiotrack',
            'blur_circular',
            'blur_linear',
            'blur_off',
            'blur_on',
            'brightness_1',
            'brightness_2',
            'brightness_3',
            'brightness_4',
            'brightness_5',
            'brightness_6',
            'brightness_7',
            'broken_image',
            'brush',
            'burst_mode',
            'camera',
            'camera_alt',
            'camera_front',
            'camera_rear',
            'camera_roll',
            'center_focus_strong',
            'center_focus_weak',
            'collections',
            'collections_bookmark',
            'color_lens',
            'colorize',
            'compare',
            'control_point',
            'control_point_duplicate',
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
            'crop_rotate',
            'crop_square',
            'dehaze',
            'details',
            'edit',
            'euro',
            'exposure',
            'exposure_neg_1',
            'exposure_neg_2',
            'exposure_plus_1',
            'exposure_plus_2',
            'exposure_zero',
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
            'filter_none',
            'filter_tilt_shift',
            'filter_vintage',
            'flare',
            'flash_auto',
            'flash_off',
            'flash_on',
            'flip',
            'flip_camera_android',
            'flip_camera_ios',
            'gradient',
            'grain',
            'grid_off',
            'grid_on',
            'hdr_off',
            'hdr_on',
            'hdr_strong',
            'hdr_weak',
            'healing',
            'image',
            'image_aspect_ratio',
            'image_search',
            'iso',
            'landscape',
            'leak_add',
            'leak_remove',
            'lens',
            'linked_camera',
            'looks',
            'looks_3',
            'looks_4',
            'looks_5',
            'looks_6',
            'looks_one',
            'looks_two',
            'loupe',
            'monochrome_photos',
            'movie_creation',
            'movie_filter',
            'music_note',
            'music_off',
            'nature',
            'nature_people',
            'navigate_before',
            'navigate_next',
            'palette',
            'panorama',
            'panorama_fish_eye',
            'panorama_horizontal',
            'panorama_vertical',
            'panorama_wide_angle',
            'photo',
            'photo_album',
            'photo_camera',
            'photo_filter',
            'photo_library',
            'photo_size_select_actual',
            'photo_size_select_large',
            'photo_size_select_small',
            'picture_as_pdf',
            'portrait',
            'remove_red_eye',
            'rotate_90_degrees_ccw',
            'rotate_left',
            'rotate_right',
            'shutter_speed',
            'slideshow',
            'straighten',
            'style',
            'switch_camera',
            'switch_video',
            'tag_faces',
            'texture',
            'timelapse',
            'timer',
            'timer_10',
            'timer_3',
            'timer_off',
            'tonality',
            'transform',
            'tune',
            'view_comfy',
            'view_compact',
            'vignette',
            'wb_auto',
            'wb_cloudy',
            'wb_incandescent',
            'wb_iridescent',
            'wb_sunny',
            '360',
            'atm',
            'beenhere',
            'category',
            'compass_calibration',
            'departure_board',
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
            'edit_attributes',
            'ev_station',
            'fastfood',
            'flight',
            'hotel',
            'layers',
            'layers_clear',
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
            'map',
            'menu_book',
            'money',
            'museum',
            'my_location',
            'navigation',
            'near_me',
            'person_pin',
            'rate_review',
            'restaurant',
            'restaurant_menu',
            'satellite',
            'store_mall_directory',
            'streetview',
            'subway',
            'terrain',
            'traffic',
            'train',
            'tram',
            'transfer_within_a_station',
            'transit_enterexit',
            'trip_origin',
            'zoom_out_map',
            'apps',
            'arrow_back',
            'arrow_back_ios',
            'arrow_downward',
            'arrow_drop_down',
            'arrow_drop_down_circle',
            'arrow_drop_up',
            'arrow_forward',
            'arrow_forward_ios',
            'arrow_left',
            'arrow_right',
            'arrow_upward',
            'cancel',
            'check',
            'chevron_left',
            'chevron_right',
            'close',
            'double_arrow',
            'expand_less',
            'expand_more',
            'first_page',
            'fullscreen',
            'fullscreen_exit',
            'home_work',
            'last_page',
            'menu',
            'menu_open',
            'more_horiz',
            'more_vert',
            'refresh',
            'subdirectory_arrow_left',
            'subdirectory_arrow_right',
            'unfold_less',
            'unfold_more',
            'account_tree',
            'adb',
            'airline_seat_flat',
            'airline_seat_flat_angled',
            'airline_seat_individual_suite',
            'airline_seat_legroom_extra',
            'airline_seat_legroom_normal',
            'airline_seat_legroom_reduced',
            'airline_seat_recline_extra',
            'airline_seat_recline_normal',
            'bluetooth_audio',
            'confirmation_number',
            'disc_full',
            'drive_eta',
            'enhanced_encryption',
            'event_available',
            'event_busy',
            'event_note',
            'folder_special',
            'live_tv',
            'mms',
            'more',
            'network_check',
            'network_locked',
            'no_encryption',
            'ondemand_video',
            'personal_video',
            'phone_bluetooth_speaker',
            'phone_callback',
            'phone_forwarded',
            'phone_in_talk',
            'phone_locked',
            'phone_missed',
            'phone_paused',
            'power',
            'power_off',
            'priority_high',
            'sd_card',
            'sms',
            'sms_failed',
            'sync',
            'sync_disabled',
            'sync_problem',
            'system_update',
            'tap_and_play',
            'time_to_leave',
            'tv_off',
            'vibration',
            'voice_chat',
            'vpn_lock',
            'wc',
            'wifi',
            'wifi_off',
            'ac_unit',
            'airport_shuttle',
            'all_inclusive',
            'apartment',
            'bathtub',
            'beach_access',
            'business_center',
            'casino',
            'child_care',
            'child_friendly',
            'fitness_center',
            'free_breakfast',
            'golf_course',
            'hot_tub',
            'house',
            'kitchen',
            'meeting_room',
            'no_meeting_room',
            'pool',
            'room_service',
            'rv_hookup',
            'smoke_free',
            'smoking_rooms',
            'spa',
            'storefront',
            'cake',
            'deck',
            'emoji_emotions',
            'emoji_events',
            'emoji_flags',
            'emoji_food_beverage',
            'emoji_nature',
            'emoji_objects',
            'emoji_people',
            'emoji_symbols',
            'emoji_transportation',
            'fireplace',
            'group',
            'group_add',
            'king_bed',
            'location_city',
            'mood',
            'mood_bad',
            'nights_stay',
            'notifications',
            'notifications_active',
            'notifications_none',
            'notifications_off',
            'notifications_paused',
            'outdoor_grill',
            'pages',
            'party_mode',
            'people',
            'people_alt',
            'people_outline',
            'person',
            'person_add',
            'person_outline',
            'plus_one',
            'poll',
            'public',
            'school',
            'sentiment_dissatisfied',
            'sentiment_satisfied',
            'sentiment_very_dissatisfied',
            'sentiment_very_satisfied',
            'share',
            'single_bed',
            'sports',
            'sports_baseball',
            'sports_basketball',
            'sports_cricket',
            'sports_esports',
            'sports_football',
            'sports_golf',
            'sports_handball',
            'sports_hockey',
            'sports_kabaddi',
            'sports_mma',
            'sports_motorsports',
            'sports_rugby',
            'sports_soccer',
            'sports_tennis',
            'sports_volleyball',
            'thumb_down_alt',
            'thumb_up_alt',
            'whatshot',
            'check_box',
            'check_box_outline_blank',
            'indeterminate_check_box',
            'radio_button_checked',
            'radio_button_unchecked',
            'star',
            'star_border',
            'star_half',
            'toggle_off',
            'toggle_on',
        ];
    }
    Object.defineProperty(IconService.prototype, "icons", {
        get: /**
         * @return {?}
         */
        function () {
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
        return this.icons.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            return el.toLowerCase().indexOf(query ? query.toLowerCase() : '') > -1;
        }));
    };
    IconService.decorators = [
        { type: Injectable }
    ];
    return IconService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    IconService.prototype._icons;
}

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
var CovalentCommonModule = /** @class */ (function () {
    function CovalentCommonModule() {
    }
    CovalentCommonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule],
                    declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                    exports: [FormsModule, CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                    providers: [RouterPathService, IconService],
                },] }
    ];
    return CovalentCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IRotateAnimation() { }
if (false) {
    /** @type {?|undefined} */
    IRotateAnimation.prototype.degrees;
    /** @type {?|undefined} */
    IRotateAnimation.prototype.ease;
}
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
var tdRotateAnimation = trigger('tdRotate', [
    state('0', style({
        transform: 'rotate({{ degressStart }}deg)',
    }), { params: { degressStart: 0 } }),
    state('1', style({
        transform: 'rotate({{ degreesEnd }}deg)',
    }), { params: { degreesEnd: 180 } }),
    transition('0 <=> 1', [group([query('@*', animateChild(), { optional: true }), animate('{{ duration }}ms {{ delay }}ms {{ ease }}')])], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ICollapseAnimation() { }
if (false) {
    /** @type {?|undefined} */
    ICollapseAnimation.prototype.easeOnClose;
    /** @type {?|undefined} */
    ICollapseAnimation.prototype.easeOnOpen;
}
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
var tdCollapseAnimation = trigger('tdCollapse', [
    state('1', style({
        height: '0',
        overflow: 'hidden',
    })),
    state('0', style({
        height: AUTO_STYLE,
        overflow: AUTO_STYLE,
    })),
    transition('0 => 1', [
        style({
            overflow: 'hidden',
            height: AUTO_STYLE,
        }),
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', style({
                height: '0',
                overflow: 'hidden',
            })),
        ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
    transition('1 => 0', [
        style({
            height: '0',
            overflow: 'hidden',
        }),
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', style({
                overflow: 'hidden',
                height: AUTO_STYLE,
            })),
        ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IFadeInOutAnimation() { }
if (false) {
    /** @type {?|undefined} */
    IFadeInOutAnimation.prototype.easeOnIn;
    /** @type {?|undefined} */
    IFadeInOutAnimation.prototype.easeOnOut;
}
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
var tdFadeInOutAnimation = trigger('tdFadeInOut', [
    state('0', style({
        opacity: '0',
        visibility: 'hidden',
    })),
    state('1', style({
        opacity: AUTO_STYLE,
        visibility: AUTO_STYLE,
    })),
    transition('0 => 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ easeOnIn }}'),
        ]),
    ], { params: { duration: 150, delay: '0', easeOnIn: 'ease-in' } }),
    transition('1 => 0', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ easeOnOut }}'),
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
var tdBounceAnimation = trigger('tdBounce', [
    state('0', style({
        transform: 'translate3d(0, 0, 0)',
    })),
    state('1', style({
        transform: 'translate3d(0, 0, 0)',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.2,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                    transform: 'translate3d(0, -30px, 0)',
                    offset: 0.4,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                    transform: 'translate3d(0, -30px, 0)',
                    offset: 0.43,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.53,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                    transform: 'translate3d(0, -15px, 0)',
                    offset: 0.7,
                }),
                style({
                    animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.8,
                }),
                style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
                style({
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
var tdFlashAnimation = trigger('tdFlash', [
    state('0', style({
        opacity: 1,
    })),
    state('1', style({
        opacity: 1,
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ opacity: 0, offset: 0.25 }),
                style({ opacity: 1, offset: 0.5 }),
                style({ opacity: 0, offset: 0.75 }),
                style({ opacity: 1, offset: 1.0 }),
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
var tdHeadshakeAnimation = trigger('tdHeadshake', [
    state('0', style({
        transform: 'translateX(0)',
    })),
    state('1', style({
        transform: 'translateX(0)',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'translateX(0)', offset: 0 }),
                style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                style({ transform: 'translateX(0)', offset: 0.5 }),
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
var tdJelloAnimation = trigger('tdJello', [
    state('0', style({
        transform: 'none',
    })),
    state('1', style({
        transform: 'none',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'none', offset: 0 }),
                style({ transform: 'none', offset: 0.011 }),
                style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
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
var tdPulseAnimation = trigger('tdPulse', [
    state('0', style({
        transform: 'scale3d(1, 1, 1)',
    })),
    state('1', style({
        transform: 'scale3d(1, 1, 1)',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
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
var ɵ0 = noop;
/**
 * @record
 */
function IControlValueAccessor() { }
if (false) {
    /** @type {?} */
    IControlValueAccessor.prototype.value;
    /** @type {?} */
    IControlValueAccessor.prototype.valueChanges;
    /** @type {?} */
    IControlValueAccessor.prototype.onChange;
    /** @type {?} */
    IControlValueAccessor.prototype.onTouched;
}
/**
 * @record
 */
function IHasChangeDetectorRef() { }
if (false) {
    /** @type {?} */
    IHasChangeDetectorRef.prototype._changeDetectorRef;
}
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
            _this._subjectValueChanges = new Subject();
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
 * Interface to implement when applying the disabled mixin
 * @record
 */
function ICanDisable() { }
if (false) {
    /** @type {?} */
    ICanDisable.prototype.disabled;
    /**
     * @param {?} v
     * @return {?}
     */
    ICanDisable.prototype.onDisabledChange = function (v) { };
}
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
                var newValue = coerceBooleanProperty(value);
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
 * Interface to implement when applying the disabled mixin
 * @record
 */
function ICanDisableRipple() { }
if (false) {
    /** @type {?} */
    ICanDisableRipple.prototype.disableRipple;
    /**
     * @param {?} v
     * @return {?}
     */
    ICanDisableRipple.prototype.onDisableRippleChange = function (v) { };
}
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
                var newValue = coerceBooleanProperty(value);
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
        // tslint:disable-next-line:prefer-immediate-return
        /** @type {?} */
        var func = (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
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
        // tslint:disable-next-line:prefer-immediate-return
        /** @type {?} */
        var func = (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
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
        var e_1, _a;
        /** @type {?} */
        var line = '';
        try {
            for (var _b = __values(Object.keys(objects[key])), _c = _b.next(); !_c.done; _c = _b.next()) {
                var index = _c.value;
                if (line !== '') {
                    line += keySeparator;
                }
                if (objects[key][index] === null || objects[key][index] === undefined) {
                    objects[key][index] = '';
                }
                line += objects[key][index];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentCommonModule, CovalentValidators, TdAutoTrimDirective, TdBytesPipe, TdDecimalBytesPipe, TdDigitsPipe, TdFullscreenDirective, TdTimeAgoPipe, TdTimeDifferencePipe, TdTimeUntilPipe, TdTruncatePipe, convertCSVToJSON, convertObjectsToCSV, copyToClipboard, downloadCSV, downloadFile, downloadJSON, downloadObjectsToCSV, downloadObjectsToJSON, formatJSON, mixinControlValueAccessor, mixinDisableRipple, mixinDisabled, readFile, tdBounceAnimation, tdCollapseAnimation, tdFadeInOutAnimation, tdFlashAnimation, tdHeadshakeAnimation, tdJelloAnimation, tdPulseAnimation, tdRotateAnimation, RouterPathService as ɵa, IconService as ɵb };
//# sourceMappingURL=covalent-core-common.js.map
