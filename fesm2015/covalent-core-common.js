import { Directive, ElementRef, Input, HostBinding, Renderer2, ChangeDetectorRef, Output, EventEmitter, HostListener, Host, Optional, Pipe, Inject, LOCALE_ID, Injectable, NgModule } from '@angular/core';
import { animate, AnimationBuilder, AUTO_STYLE, style, animation, trigger, state, transition, query, animateChild, group, keyframes } from '@angular/animations';
import { NgModel, FormsModule, Validators } from '@angular/forms';
import { DecimalPipe, CommonModule } from '@angular/common';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdToggleDirective {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _animationBuilder
     */
    constructor(_renderer, _element, _changeDetectorRef, _animationBuilder) {
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
    /**
     * tdToggle: boolean
     * Toggles element, hides if its 'true', shows if its 'false'.
     * @param {?} state
     * @return {?}
     */
    set state(state$$1) {
        this._state = state$$1;
        if (state$$1) {
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
    }
    /**
     * Binds native 'aria-expanded' attribute.
     * @return {?}
     */
    get ariaExpandedBinding() {
        return !this._state;
    }
    /**
     * Binds native 'aria-hidden' attribute.
     * @return {?}
     */
    get ariaHiddenBinding() {
        return this._state;
    }
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    hide() {
        this._animationHidePlayer = this._animationBuilder.build(animation([
            style({
                height: AUTO_STYLE,
                display: AUTO_STYLE,
            }),
            animate(this.duration + 'ms ease-in', style({ height: '0' })),
        ])).create(this._element.nativeElement);
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._changeDetectorRef.markForCheck();
        this._animationHidePlayer.onDone(() => {
            this._onHideDone();
        });
        this._animationHidePlayer.play();
    }
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "overflow:[default]" style again at the end.
     * @return {?}
     */
    show() {
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
        this._animationShowPlayer.onDone(() => {
            this._onShowDone();
        });
        this._animationShowPlayer.play();
    }
    /**
     * @return {?}
     */
    _onHideDone() {
        if (this._animationHidePlayer) {
            this._animationHidePlayer.destroy();
            this._animationHidePlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    _onShowDone() {
        if (this._animationShowPlayer) {
            this._animationShowPlayer.destroy();
            this._animationShowPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._changeDetectorRef.markForCheck();
        }
    }
}
TdToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdToggle]',
            },] }
];
/** @nocollapse */
TdToggleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: AnimationBuilder }
];
TdToggleDirective.propDecorators = {
    duration: [{ type: Input }],
    state: [{ type: Input, args: ['tdToggle',] }],
    ariaExpandedBinding: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    ariaHiddenBinding: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdFadeDirective {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _animationBuilder
     */
    constructor(_renderer, _element, _changeDetectorRef, _animationBuilder) {
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
    /**
     * tdFade: boolean
     * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
     * @param {?} state
     * @return {?}
     */
    set state(state$$1) {
        this._state = state$$1;
        if (state$$1) {
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
    }
    /**
     * Binds native 'aria-expanded' attribute.
     * @return {?}
     */
    get ariaExpandedBinding() {
        return !this._state;
    }
    /**
     * Binds native 'aria-hidden' attribute.
     * @return {?}
     */
    get ariaHiddenBinding() {
        return this._state;
    }
    /**
     * Hides element: starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    hide() {
        this._animationFadeInPlayer = this._animationBuilder.build(animation([
            style({
                opacity: AUTO_STYLE,
                display: AUTO_STYLE,
            }),
            animate(this.duration + 'ms ease-out', style({ opacity: '0' })),
        ])).create(this._element.nativeElement);
        this._animationFadeInPlayer.onDone(() => {
            this._onFadeInDone();
        });
        this._animationFadeInPlayer.play();
    }
    /**
     * Shows element: sets "display:[default]" so animation is shown.
     * @return {?}
     */
    show() {
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationFadeOutPlayer = this._animationBuilder.build(animation([
            style({
                opacity: '0',
                display: 'none',
            }),
            animate(this.duration + 'ms ease-in', style({ opacity: AUTO_STYLE })),
        ])).create(this._element.nativeElement);
        this._animationFadeOutPlayer.onDone(() => {
            this._onFadeOutDone();
        });
        this._animationFadeOutPlayer.play();
    }
    /**
     * @return {?}
     */
    _onFadeInDone() {
        if (this._animationFadeInPlayer) {
            this._animationFadeInPlayer.destroy();
            this._animationFadeInPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
            this.onFadeIn.emit();
        }
    }
    /**
     * @return {?}
     */
    _onFadeOutDone() {
        if (this._animationFadeOutPlayer) {
            this._animationFadeOutPlayer.destroy();
            this._animationFadeOutPlayer = undefined;
            this._changeDetectorRef.markForCheck();
            this.onFadeOut.emit();
        }
    }
}
TdFadeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFade]',
            },] }
];
/** @nocollapse */
TdFadeDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: AnimationBuilder }
];
TdFadeDirective.propDecorators = {
    duration: [{ type: Input }],
    state: [{ type: Input, args: ['tdFade',] }],
    onFadeIn: [{ type: Output, args: ['fadeIn',] }],
    onFadeOut: [{ type: Output, args: ['fadeOut',] }],
    ariaExpandedBinding: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    ariaHiddenBinding: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdAutoTrimDirective {
    /**
     * @param {?} _model
     */
    constructor(_model) {
        this._model = _model;
    }
    /**
     * Listens to host's (blur) event and trims value.
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        if (this._model && this._model.value && typeof (this._model.value) === 'string') {
            this._model.update.emit(this._model.value.trim());
        }
    }
}
TdAutoTrimDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdAutoTrim]',
            },] }
];
/** @nocollapse */
TdAutoTrimDirective.ctorParameters = () => [
    { type: NgModel, decorators: [{ type: Optional }, { type: Host }] }
];
TdAutoTrimDirective.propDecorators = {
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdTimeAgoPipe {
    /**
     * @param {?} time
     * @param {?=} reference
     * @return {?}
     */
    transform(time, reference) {
        // Convert time to date object if not already
        time = new Date(time);
        /** @type {?} */
        let ref = new Date(reference);
        // If not a valid timestamp, return 'Invalid Date'
        if (!time.getTime()) {
            return 'Invalid Date';
        }
        // For unit testing, we need to be able to declare a static start time
        // for calculations, or else speed of tests can bork.
        /** @type {?} */
        let startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
        /** @type {?} */
        let diff = Math.floor((startTime - time.getTime()) / 1000);
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
    }
}
TdTimeAgoPipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeAgo',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdTimeDifferencePipe {
    /**
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    transform(start, end) {
        /** @type {?} */
        let startTime = new Date(start);
        /** @type {?} */
        let endTime;
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
        let diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        /** @type {?} */
        let days = Math.floor(diff / (60 * 60 * 24));
        diff = diff - (days * (60 * 60 * 24));
        /** @type {?} */
        let hours = Math.floor(diff / (60 * 60));
        diff = diff - (hours * (60 * 60));
        /** @type {?} */
        let minutes = Math.floor(diff / (60));
        diff -= minutes * (60);
        /** @type {?} */
        let seconds = diff;
        /** @type {?} */
        let pad = '00';
        /** @type {?} */
        let daysFormatted = '';
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
    }
}
TdTimeDifferencePipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeDifference',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdTimeUntilPipe {
    /**
     * @param {?} time
     * @param {?=} reference
     * @return {?}
     */
    transform(time, reference) {
        // Convert time to date object if not already
        time = new Date(time);
        /** @type {?} */
        let ref = new Date(reference);
        // If not a valid timestamp, return 'Invalid Date'
        if (!time.getTime()) {
            return 'Invalid Date';
        }
        // For unit testing, we need to be able to declare a static start time
        // for calculations, or else speed of tests can bork.
        /** @type {?} */
        let startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
        /** @type {?} */
        let diff = Math.floor((time.getTime() - startTime) / 1000);
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
    }
}
TdTimeUntilPipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeUntil',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdBytesPipe {
    /* `bytes` needs to be `any` or TypeScript complains
      Tried both `number` and `number | string` */
    /**
     * @param {?} bytes
     * @param {?=} precision
     * @return {?}
     */
    transform(bytes, precision = 2) {
        if (bytes === 0) {
            return '0 B';
        }
        else if (isNaN(parseInt(bytes, 10))) {
            /* If not a valid number, return 'Invalid Number' */
            return 'Invalid Number';
        }
        /** @type {?} */
        let k = 1024;
        /** @type {?} */
        let sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        /** @type {?} */
        let i = Math.floor(Math.log(bytes) / Math.log(k));
        // if less than 1
        if (i < 0) {
            return 'Invalid Number';
        }
        return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
    }
}
TdBytesPipe.decorators = [
    { type: Pipe, args: [{
                name: 'bytes',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDecimalBytesPipe {
    /* `bytes` needs to be `any` or TypeScript complains
      Tried both `number` and `number | string` */
    /**
     * @param {?} bytes
     * @param {?=} precision
     * @return {?}
     */
    transform(bytes, precision = 2) {
        if (bytes === 0) {
            return '0 B';
        }
        else if (isNaN(parseInt(bytes, 10))) {
            /* If not a valid number, return 'Invalid Number' */
            return 'Invalid Number';
        }
        /** @type {?} */
        let k = 1000;
        /** @type {?} */
        let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        /** @type {?} */
        let i = Math.floor(Math.log(bytes) / Math.log(k));
        // if less than 1
        if (i < 0) {
            return 'Invalid Number';
        }
        return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
    }
}
TdDecimalBytesPipe.decorators = [
    { type: Pipe, args: [{
                name: 'decimalBytes',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDigitsPipe {
    /**
     * @param {?=} _locale
     */
    constructor(_locale = 'en') {
        this._locale = _locale;
        this._decimalPipe = new DecimalPipe(this._locale);
    }
    /* `digits` needs to be type `digits: any` or TypeScript complains */
    /**
     * @param {?} digits
     * @param {?=} precision
     * @return {?}
     */
    transform(digits, precision = 1) {
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
        let k = 1000;
        /** @type {?} */
        let sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
        /** @type {?} */
        let i = Math.floor(Math.log(digits) / Math.log(k));
        /** @type {?} */
        let size = sizes[i];
        return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
    }
}
TdDigitsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'digits',
            },] }
];
/** @nocollapse */
TdDigitsPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdTruncatePipe {
    /**
     * @param {?} text
     * @param {?} length
     * @return {?}
     */
    transform(text, length) {
        if (typeof text !== 'string') {
            return '';
        }
        // Truncate
        /** @type {?} */
        let truncated = text.substr(0, length);
        if (text.length > length) {
            if (truncated.lastIndexOf(' ') > 0) {
                truncated = truncated.trim();
            }
            truncated += '…';
        }
        return truncated;
    }
}
TdTruncatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'truncate',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class RouterPathService {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        this._router.events.pipe(filter((e) => e instanceof RoutesRecognized), pairwise()).subscribe((e) => {
            RouterPathService._previousRoute = e[0].urlAfterRedirects;
        });
    }
    /*
      * Utility function to get the route the user previously went to
      * good for use in a "back button"
      */
    /**
     * @return {?}
     */
    getPreviousRoute() {
        return RouterPathService._previousRoute;
    }
}
RouterPathService._previousRoute = '/';
RouterPathService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterPathService.ctorParameters = () => [
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class IconService {
    constructor() {
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
    /**
     * @return {?}
     */
    get icons() {
        return this._icons;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    filter(query$$1) {
        return this.icons.filter((el) => {
            return el.toLowerCase().indexOf(query$$1 ? query$$1.toLowerCase() : '') > -1;
        });
    }
}
IconService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_ANIMATIONS = [
    TdToggleDirective,
    TdFadeDirective,
];
/** @type {?} */
const TD_FORMS = [
    TdAutoTrimDirective,
];
// Validators
/** @type {?} */
const TD_VALIDATORS = [];
/** @type {?} */
const TD_PIPES = [
    TdTimeAgoPipe,
    TdTimeDifferencePipe,
    TdTimeUntilPipe,
    TdBytesPipe,
    TdDecimalBytesPipe,
    TdDigitsPipe,
    TdTruncatePipe,
];
class CovalentCommonModule {
}
CovalentCommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule,
                ],
                declarations: [
                    TD_FORMS,
                    TD_PIPES,
                    TD_ANIMATIONS,
                    TD_VALIDATORS,
                ],
                exports: [
                    FormsModule,
                    CommonModule,
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
const tdRotateAnimation = trigger('tdRotate', [
    state('0', style({
        transform: 'rotate({{ degressStart }}deg)',
    }), { params: { degressStart: 0 } }),
    state('1', style({
        transform: 'rotate({{ degreesEnd }}deg)',
    }), { params: { degreesEnd: 180 } }),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
        ]),
    ], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
]);
/**
 * @deprecated see tdRotateAnimation
 * @param {?=} rotateOptions
 * @return {?}
 */
function TdRotateAnimation(rotateOptions = {}) {
    return trigger(rotateOptions.anchor || 'tdRotate', [
        state('0', style({
            transform: 'rotate(0deg)',
        })),
        state('1', style({
            transform: 'rotate(' + (rotateOptions.degrees || 180) + 'deg)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((rotateOptions.duration || 250) + 'ms ' +
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
const tdCollapseAnimation = trigger('tdCollapse', [
    state('1', style({
        height: '0',
        visibility: 'hidden',
    })),
    state('0', style({
        height: AUTO_STYLE,
        visibility: AUTO_STYLE,
    })),
    transition('0 => 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
        ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
    transition('1 => 0', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
        ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdCollapseAnimation
 * @param {?=} collapseOptions
 * @return {?}
 */
function TdCollapseAnimation(collapseOptions = {}) {
    return trigger(collapseOptions.anchor || 'tdCollapse', [
        state('1', style({
            height: '0',
            visibility: 'hidden',
        })),
        state('0', style({
            height: AUTO_STYLE,
            visibility: AUTO_STYLE,
        })),
        transition('0 => 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((collapseOptions.duration || 150) + 'ms ' +
                    (collapseOptions.delay || 0) + 'ms ' +
                    (collapseOptions.easeOnClose || 'ease-in')),
            ]),
        ]),
        transition('1 => 0', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((collapseOptions.duration || 150) + 'ms ' +
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
const tdFadeInOutAnimation = trigger('tdFadeInOut', [
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
 * @deprecated see tdFadeInOutAnimation
 * @param {?=} fadeInOut
 * @return {?}
 */
function TdFadeInOutAnimation(fadeInOut = {}) {
    return trigger((fadeInOut.anchor || 'tdFadeInOut'), [
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
                animate((fadeInOut.duration || 150) + 'ms ' +
                    (fadeInOut.delay || 0) + 'ms ' +
                    (fadeInOut.easeOnIn || 'ease-in')),
            ]),
        ]),
        transition('1 => 0', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((fadeInOut.duration || 150) + 'ms ' +
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
const tdBounceAnimation = trigger('tdBounce', [
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
                style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0 }),
                style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
                style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
                style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43 }),
                style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
                style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7 }),
                style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8 }),
                style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
                style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdBounceAnimation
 * @param {?=} bounceOptions
 * @return {?}
 */
function TdBounceAnimation(bounceOptions = {}) {
    return trigger(bounceOptions.anchor || 'tdBounce', [
        state('0', style({
            transform: 'translate3d(0, 0, 0)',
        })),
        state('1', style({
            transform: 'translate3d(0, 0, 0)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((bounceOptions.duration || 500) + 'ms ' + (bounceOptions.delay || 0) + 'ms', keyframes([
                    style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0 }),
                    style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
                    style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
                    style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43 }),
                    style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
                    style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7 }),
                    style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8 }),
                    style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
                    style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0 }),
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
const tdFlashAnimation = trigger('tdFlash', [
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
 * @deprecated see tdFlashAnimation
 * @param {?=} flashOptions
 * @return {?}
 */
function TdFlashAnimation(flashOptions = {}) {
    return trigger(flashOptions.anchor || 'tdFlash', [
        state('0', style({
            opacity: 1,
        })),
        state('1', style({
            opacity: 1,
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((flashOptions.duration || 500) + 'ms ' + (flashOptions.delay || 0) + 'ms', keyframes([
                    style({ opacity: 1, offset: 0 }),
                    style({ opacity: 0, offset: 0.25 }),
                    style({ opacity: 1, offset: 0.5 }),
                    style({ opacity: 0, offset: 0.75 }),
                    style({ opacity: 1, offset: 1.0 }),
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
const tdHeadshakeAnimation = trigger('tdHeadshake', [
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
                style({ transform: 'translateX(0)', offset: 0.50 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdHeadshakeAnimation
 * @param {?=} headshakeOptions
 * @return {?}
 */
function TdHeadshakeAnimation(headshakeOptions = {}) {
    return trigger(headshakeOptions.anchor || 'tdHeadshake', [
        state('0', style({
            transform: 'translateX(0)',
        })),
        state('1', style({
            transform: 'translateX(0)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((headshakeOptions.duration || 500) + 'ms ' + (headshakeOptions.delay || 0) + 'ms', keyframes([
                    style({ transform: 'translateX(0)', offset: 0 }),
                    style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                    style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                    style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                    style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                    style({ transform: 'translateX(0)', offset: 0.50 }),
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
const tdJelloAnimation = trigger('tdJello', [
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
 * @deprecated see tdJelloAnimation
 * @param {?=} jelloOptions
 * @return {?}
 */
function TdJelloAnimation(jelloOptions = {}) {
    return trigger(jelloOptions.anchor || 'tdJello', [
        state('0', style({
            transform: 'none',
        })),
        state('1', style({
            transform: 'none',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((jelloOptions.duration || 500) + 'ms ' + (jelloOptions.delay || 0) + 'ms', keyframes([
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
const tdPulseAnimation = trigger('tdPulse', [
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
 * @deprecated see tdPulseAnimation
 * @param {?=} pulseOptions
 * @return {?}
 */
function TdPulseAnimation(pulseOptions = {}) {
    return trigger(pulseOptions.anchor || 'tdPulse', [
        state('0', style({
            transform: 'scale3d(1, 1, 1)',
        })),
        state('1', style({
            transform: 'scale3d(1, 1, 1)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((pulseOptions.duration || 500) + 'ms ' + (pulseOptions.delay || 0) + 'ms', keyframes([
                    style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ]),
    ]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const noop = () => {
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
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._value = initialValue;
            this.onChange = (_) => noop;
            this.onTouched = () => noop;
            this._subjectValueChanges = new Subject();
            this.valueChanges = this._subjectValueChanges.asObservable();
        }
        /**
         * @param {?} v
         * @return {?}
         */
        set value(v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
                this._changeDetectorRef.markForCheck();
                this._subjectValueChanges.next(v);
            }
        }
        /**
         * @return {?}
         */
        get value() {
            return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        writeValue(value) {
            this.value = value;
            this._changeDetectorRef.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnChange(fn) {
            this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
    };
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
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disabled = false;
        }
        /**
         * @return {?}
         */
        get disabled() {
            return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) {
            /** @type {?} */
            let newValue = coerceBooleanProperty(value);
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this.onDisabledChange(this._disabled);
            }
        }
        /**
         * @param {?} v
         * @return {?}
         */
        onDisabledChange(v) {
            /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
        }
    };
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
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disableRipple = false;
        }
        /**
         * @return {?}
         */
        get disableRipple() {
            return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set disableRipple(value) {
            /** @type {?} */
            let newValue = coerceBooleanProperty(value);
            if (this._disableRipple !== newValue) {
                this._disableRipple = newValue;
                this.onDisableRippleChange(this._disableRipple);
            }
        }
        /**
         * @param {?} v
         * @return {?}
         */
        onDisableRippleChange(v) {
            /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentValidators {
    /**
     * @param {?} minValue
     * @return {?}
     */
    static min(minValue) {
        /** @type {?} */
        let func = (c) => {
            if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
                return undefined;
            }
            /** @type {?} */
            let v = c.value;
            return v < minValue ?
                { min: { minValue: minValue, actualValue: v } } :
                undefined;
        };
        return func;
    }
    /**
     * @param {?} maxValue
     * @return {?}
     */
    static max(maxValue) {
        /** @type {?} */
        let func = (c) => {
            if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            /** @type {?} */
            let v = c.value;
            return v > maxValue ?
                { max: { maxValue: maxValue, actualValue: v } } :
                undefined;
        };
        return func;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    static numberRequired(c) {
        return (Number.isNaN(c.value)) ?
            { required: true } :
            undefined;
    }
}

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

export { CovalentCommonModule, TdToggleDirective, TdFadeDirective, TdRotateAnimation, tdRotateAnimation, TdCollapseAnimation, tdCollapseAnimation, TdFadeInOutAnimation, tdFadeInOutAnimation, TdBounceAnimation, tdBounceAnimation, TdFlashAnimation, tdFlashAnimation, TdHeadshakeAnimation, tdHeadshakeAnimation, TdJelloAnimation, tdJelloAnimation, TdPulseAnimation, tdPulseAnimation, mixinControlValueAccessor, mixinDisabled, mixinDisableRipple, TdAutoTrimDirective, CovalentValidators, TdTimeAgoPipe, TdTimeDifferencePipe, TdBytesPipe, TdDigitsPipe, TdTruncatePipe, TdDecimalBytesPipe, TdTimeUntilPipe as ɵa, IconService as ɵc, RouterPathService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jb21tb24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9mYWRlL2ZhZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vZm9ybXMvYXV0by10cmltL2F1dG8tdHJpbS5kaXJlY3RpdmUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90aW1lLWFnby90aW1lLWFnby5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvdGltZS1kaWZmZXJlbmNlL3RpbWUtZGlmZmVyZW5jZS5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvdGltZS11bnRpbC90aW1lLXVudGlsLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy9ieXRlcy9ieXRlcy5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvZGVjaW1hbC1ieXRlcy9kZWNpbWFsLWJ5dGVzLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy9kaWdpdHMvZGlnaXRzLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90cnVuY2F0ZS90cnVuY2F0ZS5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vc2VydmljZXMvcm91dGVyLXBhdGguc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3NlcnZpY2VzL2ljb24uc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2NvbW1vbi5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL3JvdGF0ZS9yb3RhdGUuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9jb2xsYXBzZS9jb2xsYXBzZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2ZhZGUvZmFkZUluT3V0LmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvYm91bmNlL2JvdW5jZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2ZsYXNoL2ZsYXNoLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvaGVhZHNoYWtlL2hlYWRzaGFrZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2plbGxvL2plbGxvLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvcHVsc2UvcHVsc2UuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYmVoYXZpb3JzL2NvbnRyb2wtdmFsdWUtYWNjZXNvci5taXhpbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2JlaGF2aW9ycy9kaXNhYmxlZC5taXhpbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2JlaGF2aW9ycy9kaXNhYmxlLXJpcHBsZS5taXhpbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2Zvcm1zL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uUGxheWVyLCBBVVRPX1NUWUxFLCBzdHlsZSwgYW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZFRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRvZ2dsZURpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlZmF1bHRPdmVyZmxvdzogc3RyaW5nO1xuICBwcml2YXRlIF9kZWZhdWx0RGlzcGxheTogc3RyaW5nO1xuICBwcml2YXRlIF9hbmltYXRpb25TaG93UGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XG4gIHByaXZhdGUgX2FuaW1hdGlvbkhpZGVQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcblxuICAvKipcbiAgICogZHVyYXRpb24/OiBudW1iZXJcbiAgICogU2V0cyBkdXJhdGlvbiBvZiB0b2dnbGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICogRGVmYXVsdHMgdG8gMTUwIG1zLlxuICAgKi9cbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciA9IDE1MDtcblxuICAvKipcbiAgICogdGRUb2dnbGU6IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBlbGVtZW50LCBoaWRlcyBpZiBpdHMgJ3RydWUnLCBzaG93cyBpZiBpdHMgJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgndGRUb2dnbGUnKVxuICBzZXQgc3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkhpZGVQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkhpZGVQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdhcmlhLWV4cGFuZGVkJyBhdHRyaWJ1dGUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIGdldCBhcmlhRXhwYW5kZWRCaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5fc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdhcmlhLWhpZGRlbicgYXR0cmlidXRlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJylcbiAgZ2V0IGFyaWFIaWRkZW5CaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge1xuICAgIHRoaXMuX2RlZmF1bHREaXNwbGF5ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgdGhpcy5fZGVmYXVsdE92ZXJmbG93ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGVsZW1lbnQ6IHNldHMgXCJkaXNwbGF5OltkZWZhdWx0XVwiIHNvIGFuaW1hdGlvbiBpcyBzaG93bixcbiAgICogc3RhcnRzIGFuaW1hdGlvbiBhbmQgYWRkcyBcImRpc3BsYXk6J25vbmUnXCIgc3R5bGUgYXQgdGhlIGVuZC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllciA9IHRoaXMuX2FuaW1hdGlvbkJ1aWxkZXIuYnVpbGQoYW5pbWF0aW9uKFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgICAgICBkaXNwbGF5OiBBVVRPX1NUWUxFLFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKHRoaXMuZHVyYXRpb24gKyAnbXMgZWFzZS1pbicsIHN0eWxlKHtoZWlnaHQ6ICcwJ30pKSxcbiAgICBdKSkuY3JlYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25IaWRlRG9uZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2FuaW1hdGlvbkhpZGVQbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGVsZW1lbnQ6IHNldHMgXCJkaXNwbGF5OltkZWZhdWx0XVwiIHNvIGFuaW1hdGlvbiBpcyBzaG93bixcbiAgICogc3RhcnRzIGFuaW1hdGlvbiBhbmQgYWRkcyBcIm92ZXJmbG93OltkZWZhdWx0XVwiIHN0eWxlIGFnYWluIGF0IHRoZSBlbmQuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB0aGlzLl9kZWZhdWx0RGlzcGxheSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllciA9IHRoaXMuX2FuaW1hdGlvbkJ1aWxkZXIuYnVpbGQoYW5pbWF0aW9uKFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSh0aGlzLmR1cmF0aW9uICsgJ21zIGVhc2Utb3V0Jywgc3R5bGUoe2hlaWdodDogQVVUT19TVFlMRX0pKSxcbiAgICBdKSkuY3JlYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5fYW5pbWF0aW9uU2hvd1BsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25TaG93RG9uZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25IaWRlRG9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllcikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uSGlkZVBsYXllci5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hbmltYXRpb25IaWRlUGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCB0aGlzLl9kZWZhdWx0T3ZlcmZsb3cpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vblNob3dEb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25TaG93UGxheWVyKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25TaG93UGxheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2FuaW1hdGlvblNob3dQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsIHRoaXMuX2RlZmF1bHRPdmVyZmxvdyk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uUGxheWVyLCBBVVRPX1NUWUxFLCBzdHlsZSwgYW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZhZGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGYWRlRGlyZWN0aXZlIHtcblxuICBwcml2YXRlIF9zdGF0ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGVmYXVsdERpc3BsYXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uRmFkZUluUGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XG4gIHByaXZhdGUgX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcblxuICAvKipcbiAgICogZHVyYXRpb24/OiBudW1iZXJcbiAgICogU2V0cyBkdXJhdGlvbiBvZiBmYWRlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAqIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAgICovXG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXIgPSAxNTA7XG5cbiAgLyoqXG4gICAqIHRkRmFkZTogYm9vbGVhblxuICAgKiBGYWRlcyBlbGVtZW50LCBGYWRlc091dCBpZiBpdHMgJ3RydWUnLCBGYWRlc0luIGlmIGl0cyAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCd0ZEZhZGUnKVxuICBzZXQgc3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZmFkZUluPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gZmFkZUluIGFuaW1hdGlvbiBlbmRzLlxuICAgKi9cbiAgQE91dHB1dCgnZmFkZUluJykgb25GYWRlSW46IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogZmFkZU91dD86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGZhZGVPdXQgYW5pbWF0aW9uIGVuZHMuXG4gICAqL1xuICBAT3V0cHV0KCdmYWRlT3V0Jykgb25GYWRlT3V0OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnYXJpYS1leHBhbmRlZCcgYXR0cmlidXRlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxuICBnZXQgYXJpYUV4cGFuZGVkQmluZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuX3N0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnYXJpYS1oaWRkZW4nIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhpZGRlbicpXG4gIGdldCBhcmlhSGlkZGVuQmluZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgICB0aGlzLl9kZWZhdWx0RGlzcGxheSA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGVsZW1lbnQ6IHN0YXJ0cyBhbmltYXRpb24gYW5kIGFkZHMgXCJkaXNwbGF5Oidub25lJ1wiIHN0eWxlIGF0IHRoZSBlbmQuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllciA9IHRoaXMuX2FuaW1hdGlvbkJ1aWxkZXIuYnVpbGQoYW5pbWF0aW9uKFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgICAgZGlzcGxheTogQVVUT19TVFlMRSxcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSh0aGlzLmR1cmF0aW9uICsgJ21zIGVhc2Utb3V0Jywgc3R5bGUoe29wYWNpdHk6ICcwJ30pKSxcbiAgICBdKSkuY3JlYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uRmFkZUluUGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZhZGVJbkRvbmUoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGVsZW1lbnQ6IHNldHMgXCJkaXNwbGF5OltkZWZhdWx0XVwiIHNvIGFuaW1hdGlvbiBpcyBzaG93bi5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2RlZmF1bHREaXNwbGF5KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyID0gdGhpcy5fYW5pbWF0aW9uQnVpbGRlci5idWlsZChhbmltYXRpb24oW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZSh0aGlzLmR1cmF0aW9uICsgJ21zIGVhc2UtaW4nLCBzdHlsZSh7b3BhY2l0eTogQVVUT19TVFlMRX0pKSxcbiAgICBdKSkuY3JlYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25GYWRlT3V0RG9uZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVPdXRQbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25GYWRlSW5Eb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZhZGVJblBsYXllci5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hbmltYXRpb25GYWRlSW5QbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5vbkZhZGVJbi5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25GYWRlT3V0RG9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllcikge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uRmFkZU91dFBsYXllci5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9hbmltYXRpb25GYWRlT3V0UGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLm9uRmFkZU91dC5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEF1dG9UcmltXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQXV0b1RyaW1EaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBfbW9kZWw6IE5nTW9kZWwpIHt9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gaG9zdCdzIChibHVyKSBldmVudCBhbmQgdHJpbXMgdmFsdWUuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcbiAgb25CbHVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9tb2RlbCAmJiB0aGlzLl9tb2RlbC52YWx1ZSAmJiB0eXBlb2YodGhpcy5fbW9kZWwudmFsdWUpID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fbW9kZWwudXBkYXRlLmVtaXQodGhpcy5fbW9kZWwudmFsdWUudHJpbSgpKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGltZUFnbycsXG59KVxuZXhwb3J0IGNsYXNzIFRkVGltZUFnb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRpbWU6IGFueSwgcmVmZXJlbmNlPzogYW55KTogc3RyaW5nIHtcbiAgICAvLyBDb252ZXJ0IHRpbWUgdG8gZGF0ZSBvYmplY3QgaWYgbm90IGFscmVhZHlcbiAgICB0aW1lID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IHJlZjogRGF0ZSA9IG5ldyBEYXRlKHJlZmVyZW5jZSk7XG5cbiAgICAvLyBJZiBub3QgYSB2YWxpZCB0aW1lc3RhbXAsIHJldHVybiAnSW52YWxpZCBEYXRlJ1xuICAgIGlmICghdGltZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG5cbiAgICAvLyBGb3IgdW5pdCB0ZXN0aW5nLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gZGVjbGFyZSBhIHN0YXRpYyBzdGFydCB0aW1lXG4gICAgLy8gZm9yIGNhbGN1bGF0aW9ucywgb3IgZWxzZSBzcGVlZCBvZiB0ZXN0cyBjYW4gYm9yay5cbiAgICBsZXQgc3RhcnRUaW1lOiBudW1iZXIgPSBpc05hTihyZWYuZ2V0VGltZSgpKSA/IERhdGUubm93KCkgOiByZWYuZ2V0VGltZSgpO1xuICAgIGxldCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKChzdGFydFRpbWUgLSB0aW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIHNlY29uZCBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgc2Vjb25kcyBhZ28nO1xuICAgIH1cbiAgICAvLyBNaW51dGVzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBtaW51dGUgYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCA2MCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIG1pbnV0ZXMgYWdvJztcbiAgICB9XG4gICAgLy8gSG91cnNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIGhvdXIgYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAyNCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIGhvdXJzIGFnbyc7XG4gICAgfVxuICAgIC8vIERheXNcbiAgICBkaWZmID0gZGlmZiAvIDI0O1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIGRheSBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDMwKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgZGF5cyBhZ28nO1xuICAgIH1cbiAgICAvLyBNb250aHNcbiAgICBkaWZmID0gZGlmZiAvIDMwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIG1vbnRoIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMTIpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBtb250aHMgYWdvJztcbiAgICB9XG4gICAgLy8gWWVhcnNcbiAgICBkaWZmID0gZGlmZiAvIDEyO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIHllYXIgYWdvJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIHllYXJzIGFnbyc7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVEaWZmZXJlbmNlJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZFRpbWVEaWZmZXJlbmNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oc3RhcnQ6IGFueSwgZW5kPzogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgc3RhcnRUaW1lOiBEYXRlID0gbmV3IERhdGUoc3RhcnQpO1xuICAgIGxldCBlbmRUaW1lOiBEYXRlO1xuXG4gICAgaWYgKGVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFzdGFydFRpbWUuZ2V0VGltZSgpIHx8ICFlbmRUaW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIGxldCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKChlbmRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG5cbiAgICBsZXQgZGF5czogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwICogNjAgKiAyNCkpO1xuICAgIGRpZmYgPSBkaWZmIC0gKGRheXMgKiAoNjAgKiA2MCAqIDI0KSk7XG5cbiAgICBsZXQgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCAqIDYwKSk7XG4gICAgZGlmZiA9IGRpZmYgLSAoaG91cnMgKiAoNjAgKiA2MCkpO1xuXG4gICAgbGV0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCkpO1xuICAgIGRpZmYgLT0gbWludXRlcyAqICg2MCk7XG5cbiAgICBsZXQgc2Vjb25kczogbnVtYmVyID0gZGlmZjtcblxuICAgIGxldCBwYWQ6IHN0cmluZyA9ICcwMCc7XG5cbiAgICBsZXQgZGF5c0Zvcm1hdHRlZDogc3RyaW5nID0gJyc7XG5cbiAgICBpZiAoZGF5cyA+IDAgJiYgZGF5cyA8IDIpIHtcbiAgICAgIGRheXNGb3JtYXR0ZWQgPSAnIGRheSAtICc7XG4gICAgfSBlbHNlIGlmIChkYXlzID4gMSkge1xuICAgICAgZGF5c0Zvcm1hdHRlZCA9ICcgZGF5cyAtICcgO1xuICAgIH1cblxuICAgIHJldHVybiAoZGF5cyA+IDAgPyBkYXlzICsgZGF5c0Zvcm1hdHRlZCA6IGRheXNGb3JtYXR0ZWQpICtcbiAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKGhvdXJzICsgJycpLmxlbmd0aCkgKyBob3VycyArICc6JyArXG4gICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChtaW51dGVzICsgJycpLmxlbmd0aCkgKyBtaW51dGVzICsgJzonICtcbiAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKHNlY29uZHMgKyAnJykubGVuZ3RoKSArIHNlY29uZHM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGltZVVudGlsJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRUaW1lVW50aWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0aW1lOiBhbnksIHJlZmVyZW5jZT86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gQ29udmVydCB0aW1lIHRvIGRhdGUgb2JqZWN0IGlmIG5vdCBhbHJlYWR5XG4gICAgdGltZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCByZWY6IERhdGUgPSBuZXcgRGF0ZShyZWZlcmVuY2UpO1xuXG4gICAgLy8gSWYgbm90IGEgdmFsaWQgdGltZXN0YW1wLCByZXR1cm4gJ0ludmFsaWQgRGF0ZSdcbiAgICBpZiAoIXRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgLy8gRm9yIHVuaXQgdGVzdGluZywgd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRlY2xhcmUgYSBzdGF0aWMgc3RhcnQgdGltZVxuICAgIC8vIGZvciBjYWxjdWxhdGlvbnMsIG9yIGVsc2Ugc3BlZWQgb2YgdGVzdHMgY2FuIGJvcmsuXG4gICAgbGV0IHN0YXJ0VGltZTogbnVtYmVyID0gaXNOYU4ocmVmLmdldFRpbWUoKSkgPyBEYXRlLm5vdygpIDogcmVmLmdldFRpbWUoKTtcbiAgICBsZXQgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigodGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gMTAwMCk7XG5cbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBzZWNvbmQnO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBzZWNvbmRzJztcbiAgICB9XG4gICAgLy8gTWludXRlc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgbWludXRlJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCA2MCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgbWludXRlcyc7XG4gICAgfVxuICAgIC8vIEhvdXJzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBob3VyJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAyNCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgaG91cnMnO1xuICAgIH1cbiAgICAvLyBEYXlzXG4gICAgZGlmZiA9IGRpZmYgLyAyNDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBkYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDMwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBkYXlzJztcbiAgICB9XG4gICAgLy8gTW9udGhzXG4gICAgZGlmZiA9IGRpZmYgLyAzMDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBtb250aCc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMTIpIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIG1vbnRocyc7XG4gICAgfVxuICAgIC8vIFllYXJzXG4gICAgZGlmZiA9IGRpZmYgLyAxMjtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSB5ZWFyJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgeWVhcnMnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdieXRlcycsXG59KVxuXG5leHBvcnQgY2xhc3MgVGRCeXRlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyogYGJ5dGVzYCBuZWVkcyB0byBiZSBgYW55YCBvciBUeXBlU2NyaXB0IGNvbXBsYWluc1xuICBUcmllZCBib3RoIGBudW1iZXJgIGFuZCBgbnVtYmVyIHwgc3RyaW5nYCAqL1xuICB0cmFuc2Zvcm0oYnl0ZXM6IGFueSwgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMCBCJztcbiAgICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlSW50KGJ5dGVzLCAxMCkpKSB7XG4gICAgICAvKiBJZiBub3QgYSB2YWxpZCBudW1iZXIsIHJldHVybiAnSW52YWxpZCBOdW1iZXInICovXG4gICAgICByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJztcbiAgICB9XG4gICAgbGV0IGs6IG51bWJlciA9IDEwMjQ7XG4gICAgbGV0IHNpemVzOiBzdHJpbmdbXSA9IFsnQicsICdLaUInLCAnTWlCJywgJ0dpQicsICdUaUInLCAnUGlCJywgJ0VpQicsICdaaUInLCAnWWlCJ107XG4gICAgbGV0IGk6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuICAgIC8vIGlmIGxlc3MgdGhhbiAxXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJztcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQocHJlY2lzaW9uKSkgKyAnICcgKyBzaXplc1tpXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdkZWNpbWFsQnl0ZXMnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkRGVjaW1hbEJ5dGVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKiBgYnl0ZXNgIG5lZWRzIHRvIGJlIGBhbnlgIG9yIFR5cGVTY3JpcHQgY29tcGxhaW5zXG4gIFRyaWVkIGJvdGggYG51bWJlcmAgYW5kIGBudW1iZXIgfCBzdHJpbmdgICovXG4gIHRyYW5zZm9ybShieXRlczogYW55LCBwcmVjaXNpb246IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwIEInO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VJbnQoYnl0ZXMsIDEwKSkpIHtcbiAgICAgIC8qIElmIG5vdCBhIHZhbGlkIG51bWJlciwgcmV0dXJuICdJbnZhbGlkIE51bWJlcicgKi9cbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICBsZXQgazogbnVtYmVyID0gMTAwMDtcbiAgICBsZXQgc2l6ZXM6IHN0cmluZ1tdID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ107XG4gICAgbGV0IGk6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuICAgIC8vIGlmIGxlc3MgdGhhbiAxXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJztcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQocHJlY2lzaW9uKSkgKyAnICcgKyBzaXplc1tpXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZGlnaXRzJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZERpZ2l0c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBwcml2YXRlIF9kZWNpbWFsUGlwZTogRGVjaW1hbFBpcGU7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nID0gJ2VuJykge1xuICAgIHRoaXMuX2RlY2ltYWxQaXBlID0gbmV3IERlY2ltYWxQaXBlKHRoaXMuX2xvY2FsZSk7XG4gIH1cblxuICAvKiBgZGlnaXRzYCBuZWVkcyB0byBiZSB0eXBlIGBkaWdpdHM6IGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnMgKi9cbiAgdHJhbnNmb3JtKGRpZ2l0czogYW55LCBwcmVjaXNpb246IG51bWJlciA9IDEpOiBzdHJpbmcge1xuICAgIGlmIChkaWdpdHMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMCc7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChkaWdpdHMsIDEwKSkpIHtcbiAgICAgIC8qIElmIG5vdCBhIHZhbGlkIG51bWJlciwgcmV0dXJuIHRoZSB2YWx1ZSAqL1xuICAgICAgcmV0dXJuIGRpZ2l0cztcbiAgICB9IGVsc2UgaWYgKGRpZ2l0cyA8IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWNpbWFsUGlwZS50cmFuc2Zvcm0oZGlnaXRzLnRvRml4ZWQocHJlY2lzaW9uKSk7XG4gICAgfVxuICAgIGxldCBrOiBudW1iZXIgPSAxMDAwO1xuICAgIGxldCBzaXplczogc3RyaW5nW10gPSBbJycsICdLJywgJ00nLCAnQicsICdUJywgJ1EnXTtcbiAgICBsZXQgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhkaWdpdHMpIC8gTWF0aC5sb2coaykpO1xuICAgIGxldCBzaXplOiBzdHJpbmcgPSBzaXplc1tpXTtcbiAgICByZXR1cm4gdGhpcy5fZGVjaW1hbFBpcGUudHJhbnNmb3JtKHBhcnNlRmxvYXQoKGRpZ2l0cyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKHByZWNpc2lvbikpKSArIChzaXplID8gJyAnICsgc2l6ZSA6ICcnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0cnVuY2F0ZScsXG59KVxuXG5leHBvcnQgY2xhc3MgVGRUcnVuY2F0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IGFueSwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvLyBUcnVuY2F0ZVxuICAgIGxldCB0cnVuY2F0ZWQ6IHN0cmluZyA9IHRleHQuc3Vic3RyKDAsIGxlbmd0aCk7XG5cbiAgICBpZiAodGV4dC5sZW5ndGggPiBsZW5ndGgpIHtcbiAgICAgIGlmICh0cnVuY2F0ZWQubGFzdEluZGV4T2YoJyAnKSA+IDApIHtcbiAgICAgICAgdHJ1bmNhdGVkID0gdHJ1bmNhdGVkLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgdHJ1bmNhdGVkICs9ICfDosKAwqYnO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVuY2F0ZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzUmVjb2duaXplZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IGZpbHRlciwgcGFpcndpc2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXJQYXRoU2VydmljZSB7XG5wcml2YXRlIHN0YXRpYyBfcHJldmlvdXNSb3V0ZTogc3RyaW5nID0gJy8nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuX3JvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcigoZTogYW55KSA9PiBlIGluc3RhbmNlb2YgUm91dGVzUmVjb2duaXplZCksXG4gICAgICBwYWlyd2lzZSgpLFxuICAgICkuc3Vic2NyaWJlKChlOiBhbnlbXSkgPT4ge1xuICAgICAgUm91dGVyUGF0aFNlcnZpY2UuX3ByZXZpb3VzUm91dGUgPSBlWzBdLnVybEFmdGVyUmVkaXJlY3RzO1xuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGdldCB0aGUgcm91dGUgdGhlIHVzZXIgcHJldmlvdXNseSB3ZW50IHRvXG4gICogZ29vZCBmb3IgdXNlIGluIGEgXCJiYWNrIGJ1dHRvblwiXG4gICovXG4gIGdldFByZXZpb3VzUm91dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gUm91dGVyUGF0aFNlcnZpY2UuX3ByZXZpb3VzUm91dGU7XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxNyBieSBUZXJhZGF0YSBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRFUkFEQVRBIENPUlBPUkFUSU9OIENPTkZJREVOVElBTCBBTkQgVFJBREUgU0VDUkVUXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWNvblNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2ljb25zOiBzdHJpbmdbXSA9IFtcbiAgICAnYWNjZXNzX2FsYXJtJyxcbiAgICAnYWNjZXNzX2FsYXJtcycsXG4gICAgJ2FjY2Vzc190aW1lJyxcbiAgICAnYWNjZXNzaWJpbGl0eScsXG4gICAgJ2FjY291bnRfYmFsYW5jZScsXG4gICAgJ2FjY291bnRfYmFsYW5jZV93YWxsZXQnLFxuICAgICdhY2NvdW50X2JveCcsXG4gICAgJ2FjY291bnRfY2lyY2xlJyxcbiAgICAnYWRkJyxcbiAgICAnYWRkX2FsYXJtJyxcbiAgICAnYWRkX2JveCcsXG4gICAgJ2FkZF9jaXJjbGUnLFxuICAgICdhZGRfY2lyY2xlX291dGxpbmUnLFxuICAgICdhZGRfc2hvcHBpbmdfY2FydCcsXG4gICAgJ2FkZF90b19waG90b3MnLFxuICAgICdhZGp1c3QnLFxuICAgICdhbGFybScsXG4gICAgJ2FsYXJtX2FkZCcsXG4gICAgJ2FsYXJtX29mZicsXG4gICAgJ2FsYXJtX29uJyxcbiAgICAnYWxidW0nLFxuICAgICdhbmRyb2lkJyxcbiAgICAnYW5ub3VuY2VtZW50JyxcbiAgICAnYXBwcycsXG4gICAgJ2FyY2hpdmUnLFxuICAgICdhcnJvd19iYWNrJyxcbiAgICAnYXJyb3dfZHJvcF9kb3duJyxcbiAgICAnYXJyb3dfZHJvcF9kb3duX2NpcmNsZScsXG4gICAgJ2Fycm93X2Ryb3BfdXAnLFxuICAgICdhcnJvd19mb3J3YXJkJyxcbiAgICAnYXNwZWN0X3JhdGlvJyxcbiAgICAnYXNzZXNzbWVudCcsXG4gICAgJ2Fzc2lnbm1lbnQnLFxuICAgICdhc3NpZ25tZW50X2luZCcsXG4gICAgJ2Fzc2lnbm1lbnRfbGF0ZScsXG4gICAgJ2Fzc2lnbm1lbnRfcmV0dXJuJyxcbiAgICAnYXNzaWdubWVudF9yZXR1cm5lZCcsXG4gICAgJ2Fzc2lnbm1lbnRfdHVybmVkX2luJyxcbiAgICAnYXNzaXN0YW50X3Bob3RvJyxcbiAgICAnYXR0YWNoX2ZpbGUnLFxuICAgICdhdHRhY2hfbW9uZXknLFxuICAgICdhdHRhY2htZW50JyxcbiAgICAnYXVkaW90cmFjaycsXG4gICAgJ2F1dG9yZW5ldycsXG4gICAgJ2F2X3RpbWVyJyxcbiAgICAnYmFja3NwYWNlJyxcbiAgICAnYmFja3VwJyxcbiAgICAnYmF0dGVyeV9hbGVydCcsXG4gICAgJ2JhdHRlcnlfY2hhcmdpbmdfZnVsbCcsXG4gICAgJ2JhdHRlcnlfZnVsbCcsXG4gICAgJ2JhdHRlcnlfc3RkJyxcbiAgICAnYmF0dGVyeV91bmtub3duJyxcbiAgICAnYmVlbmhlcmUnLFxuICAgICdibG9jaycsXG4gICAgJ2JsdWV0b290aCcsXG4gICAgJ2JsdWV0b290aF9hdWRpbycsXG4gICAgJ2JsdWV0b290aF9jb25uZWN0ZWQnLFxuICAgICdibHVldG9vdGhfZGlzYWJsZWQnLFxuICAgICdibHVldG9vdGhfc2VhcmNoaW5nJyxcbiAgICAnYmx1cl9jaXJjdWxhcicsXG4gICAgJ2JsdXJfbGluZWFyJyxcbiAgICAnYmx1cl9vZmYnLFxuICAgICdibHVyX29uJyxcbiAgICAnYm9vaycsXG4gICAgJ2Jvb2ttYXJrJyxcbiAgICAnYm9va21hcmtfYm9yZGVyJyxcbiAgICAnYm9yZGVyX2FsbCcsXG4gICAgJ2JvcmRlcl9ib3R0b20nLFxuICAgICdib3JkZXJfY2xlYXInLFxuICAgICdib3JkZXJfY29sb3InLFxuICAgICdib3JkZXJfaG9yaXpvbnRhbCcsXG4gICAgJ2JvcmRlcl9pbm5lcicsXG4gICAgJ2JvcmRlcl9sZWZ0JyxcbiAgICAnYm9yZGVyX291dGVyJyxcbiAgICAnYm9yZGVyX3JpZ2h0JyxcbiAgICAnYm9yZGVyX3N0eWxlJyxcbiAgICAnYm9yZGVyX3RvcCcsXG4gICAgJ2JvcmRlcl92ZXJ0aWNhbCcsXG4gICAgJ2JyaWdodG5lc3NfMScsXG4gICAgJ2JyaWdodG5lc3NfMicsXG4gICAgJ2JyaWdodG5lc3NfMycsXG4gICAgJ2JyaWdodG5lc3NfNCcsXG4gICAgJ2JyaWdodG5lc3NfNScsXG4gICAgJ2JyaWdodG5lc3NfNicsXG4gICAgJ2JyaWdodG5lc3NfNycsXG4gICAgJ2JyaWdodG5lc3NfYXV0bycsXG4gICAgJ2JyaWdodG5lc3NfaGlnaCcsXG4gICAgJ2JyaWdodG5lc3NfbG93JyxcbiAgICAnYnJpZ2h0bmVzc19tZWRpdW0nLFxuICAgICdicm9rZW5faW1hZ2UnLFxuICAgICdicnVzaCcsXG4gICAgJ2J1Z19yZXBvcnQnLFxuICAgICdidWlsZCcsXG4gICAgJ2J1c2luZXNzJyxcbiAgICAnY2FjaGVkJyxcbiAgICAnY2FrZScsXG4gICAgJ2NhbGwnLFxuICAgICdjYWxsX2VuZCcsXG4gICAgJ2NhbGxfbWFkZScsXG4gICAgJ2NhbGxfbWVyZ2UnLFxuICAgICdjYWxsX21pc3NlZCcsXG4gICAgJ2NhbGxfcmVjZWl2ZWQnLFxuICAgICdjYWxsX3NwbGl0JyxcbiAgICAnY2FtZXJhJyxcbiAgICAnY2FtZXJhX2FsdCcsXG4gICAgJ2NhbWVyYV9mcm9udCcsXG4gICAgJ2NhbWVyYV9yZWFyJyxcbiAgICAnY2FtZXJhX3JvbGwnLFxuICAgICdjYW5jZWwnLFxuICAgICdjYXN0JyxcbiAgICAnY2FzdF9jb25uZWN0ZWQnLFxuICAgICdjZW50ZXJfZm9jdXNfc3Ryb25nJyxcbiAgICAnY2VudGVyX2ZvY3VzX3dlYWsnLFxuICAgICdjaGF0JyxcbiAgICAnY2hlY2snLFxuICAgICdjaGVja19ib3gnLFxuICAgICdjaGVja19ib3hfb3V0bGluZV9ibGFuaycsXG4gICAgJ2NoZWNrX2NpcmNsZScsXG4gICAgJ2NoZXZyb25fbGVmdCcsXG4gICAgJ2NoZXZyb25fcmlnaHQnLFxuICAgICdjbGFzcycsXG4gICAgJ2NsZWFyJyxcbiAgICAnY2xlYXJfYWxsJyxcbiAgICAnY2xvc2UnLFxuICAgICdjbG9zZWRfY2FwdGlvbicsXG4gICAgJ2Nsb3VkJyxcbiAgICAnY2xvdWRfY2lyY2xlJyxcbiAgICAnY2xvdWRfZG9uZScsXG4gICAgJ2Nsb3VkX2Rvd25sb2FkJyxcbiAgICAnY2xvdWRfb2ZmJyxcbiAgICAnY2xvdWRfcXVldWUnLFxuICAgICdjbG91ZF91cGxvYWQnLFxuICAgICdjb2xsZWN0aW9ucycsXG4gICAgJ2NvbGxlY3Rpb25zX2Jvb2ttYXJrJyxcbiAgICAnY29sb3JfbGVucycsXG4gICAgJ2NvbG9yaXplJyxcbiAgICAnY29tbWVudCcsXG4gICAgJ2NvbXBhcmUnLFxuICAgICdjb21wdXRlcicsXG4gICAgJ2NvbmZpcm1hdGlvbl9udW1iZXInLFxuICAgICdjb250YWN0X3Bob25lJyxcbiAgICAnY29udGFjdHMnLFxuICAgICdjb250ZW50X2NvcHknLFxuICAgICdjb250ZW50X2N1dCcsXG4gICAgJ2NvbnRlbnRfcGFzdGUnLFxuICAgICdjb250cm9sX3BvaW50JyxcbiAgICAnY29udHJvbF9wb2ludF9kdXBsaWNhdGUnLFxuICAgICdjcmVhdGUnLFxuICAgICdjcmVkaXRfY2FyZCcsXG4gICAgJ2Nyb3AnLFxuICAgICdjcm9wXzE2XzknLFxuICAgICdjcm9wXzNfMicsXG4gICAgJ2Nyb3BfNV80JyxcbiAgICAnY3JvcF83XzUnLFxuICAgICdjcm9wX2RpbicsXG4gICAgJ2Nyb3BfZnJlZScsXG4gICAgJ2Nyb3BfbGFuZHNjYXBlJyxcbiAgICAnY3JvcF9vcmlnaW5hbCcsXG4gICAgJ2Nyb3BfcG9ydHJhaXQnLFxuICAgICdjcm9wX3NxdWFyZScsXG4gICAgJ2Rhc2hib2FyZCcsXG4gICAgJ2RhdGFfdXNhZ2UnLFxuICAgICdkZWhhemUnLFxuICAgICdkZWxldGUnLFxuICAgICdkZXNjcmlwdGlvbicsXG4gICAgJ2Rlc2t0b3BfbWFjJyxcbiAgICAnZGVza3RvcF93aW5kb3dzJyxcbiAgICAnZGV0YWlscycsXG4gICAgJ2RldmVsb3Blcl9ib2FyZCcsXG4gICAgJ2RldmVsb3Blcl9tb2RlJyxcbiAgICAnZGV2aWNlX2h1YicsXG4gICAgJ2RldmljZXMnLFxuICAgICdkaWFsZXJfc2lwJyxcbiAgICAnZGlhbHBhZCcsXG4gICAgJ2RpcmVjdGlvbnMnLFxuICAgICdkaXJlY3Rpb25zX2Jpa2UnLFxuICAgICdkaXJlY3Rpb25zX2JvYXQnLFxuICAgICdkaXJlY3Rpb25zX2J1cycsXG4gICAgJ2RpcmVjdGlvbnNfY2FyJyxcbiAgICAnZGlyZWN0aW9uc19yYWlsd2F5JyxcbiAgICAnZGlyZWN0aW9uc19ydW4nLFxuICAgICdkaXJlY3Rpb25zX3N1YndheScsXG4gICAgJ2RpcmVjdGlvbnNfdHJhbnNpdCcsXG4gICAgJ2RpcmVjdGlvbnNfd2FsaycsXG4gICAgJ2Rpc2NfZnVsbCcsXG4gICAgJ2RucycsXG4gICAgJ2RvX25vdF9kaXN0dXJiJyxcbiAgICAnZG9fbm90X2Rpc3R1cmJfYWx0JyxcbiAgICAnZG9jaycsXG4gICAgJ2RvbWFpbicsXG4gICAgJ2RvbmUnLFxuICAgICdkb25lX2FsbCcsXG4gICAgJ2RyYWZ0cycsXG4gICAgJ2RyaXZlX2V0YScsXG4gICAgJ2R2cicsXG4gICAgJ2VkaXQnLFxuICAgICdlamVjdCcsXG4gICAgJ2VtYWlsJyxcbiAgICAnZXF1YWxpemVyJyxcbiAgICAnZXJyb3InLFxuICAgICdlcnJvcl9vdXRsaW5lJyxcbiAgICAnZXZlbnQnLFxuICAgICdldmVudF9hdmFpbGFibGUnLFxuICAgICdldmVudF9idXN5JyxcbiAgICAnZXZlbnRfbm90ZScsXG4gICAgJ2V2ZW50X3NlYXQnLFxuICAgICdleGl0X3RvX2FwcCcsXG4gICAgJ2V4cGFuZF9sZXNzJyxcbiAgICAnZXhwYW5kX21vcmUnLFxuICAgICdleHBsaWNpdCcsXG4gICAgJ2V4cGxvcmUnLFxuICAgICdleHBvc3VyZScsXG4gICAgJ2V4cG9zdXJlX25lZ18xJyxcbiAgICAnZXhwb3N1cmVfbmVnXzInLFxuICAgICdleHBvc3VyZV9wbHVzXzEnLFxuICAgICdleHBvc3VyZV9wbHVzXzInLFxuICAgICdleHBvc3VyZV96ZXJvJyxcbiAgICAnZXh0ZW5zaW9uJyxcbiAgICAnZmFjZScsXG4gICAgJ2Zhc3RfZm9yd2FyZCcsXG4gICAgJ2Zhc3RfcmV3aW5kJyxcbiAgICAnZmF2b3JpdGUnLFxuICAgICdmYXZvcml0ZV9ib3JkZXInLFxuICAgICdmZWVkYmFjaycsXG4gICAgJ2ZpbGVfZG93bmxvYWQnLFxuICAgICdmaWxlX3VwbG9hZCcsXG4gICAgJ2ZpbHRlcicsXG4gICAgJ2ZpbHRlcl8xJyxcbiAgICAnZmlsdGVyXzInLFxuICAgICdmaWx0ZXJfMycsXG4gICAgJ2ZpbHRlcl80JyxcbiAgICAnZmlsdGVyXzUnLFxuICAgICdmaWx0ZXJfNicsXG4gICAgJ2ZpbHRlcl83JyxcbiAgICAnZmlsdGVyXzgnLFxuICAgICdmaWx0ZXJfOScsXG4gICAgJ2ZpbHRlcl85X3BsdXMnLFxuICAgICdmaWx0ZXJfYl9hbmRfdycsXG4gICAgJ2ZpbHRlcl9jZW50ZXJfZm9jdXMnLFxuICAgICdmaWx0ZXJfZHJhbWEnLFxuICAgICdmaWx0ZXJfZnJhbWVzJyxcbiAgICAnZmlsdGVyX2hkcicsXG4gICAgJ2ZpbHRlcl9saXN0JyxcbiAgICAnZmlsdGVyX25vbmUnLFxuICAgICdmaWx0ZXJfdGlsdF9zaGlmdCcsXG4gICAgJ2ZpbHRlcl92aW50YWdlJyxcbiAgICAnZmluZF9pbl9wYWdlJyxcbiAgICAnZmluZF9yZXBsYWNlJyxcbiAgICAnZmxhZycsXG4gICAgJ2ZsYXJlJyxcbiAgICAnZmxhc2hfYXV0bycsXG4gICAgJ2ZsYXNoX29mZicsXG4gICAgJ2ZsYXNoX29uJyxcbiAgICAnZmxpZ2h0JyxcbiAgICAnZmxpZ2h0X2xhbmQnLFxuICAgICdmbGlnaHRfdGFrZW9mZicsXG4gICAgJ2ZsaXAnLFxuICAgICdmbGlwX3RvX2JhY2snLFxuICAgICdmbGlwX3RvX2Zyb250JyxcbiAgICAnZm9sZGVyJyxcbiAgICAnZm9sZGVyX29wZW4nLFxuICAgICdmb2xkZXJfc2hhcmVkJyxcbiAgICAnZm9sZGVyX3NwZWNpYWwnLFxuICAgICdmb250X2Rvd25sb2FkJyxcbiAgICAnZm9ybWF0X2FsaWduX2NlbnRlcicsXG4gICAgJ2Zvcm1hdF9hbGlnbl9qdXN0aWZ5JyxcbiAgICAnZm9ybWF0X2FsaWduX2xlZnQnLFxuICAgICdmb3JtYXRfYWxpZ25fcmlnaHQnLFxuICAgICdmb3JtYXRfYm9sZCcsXG4gICAgJ2Zvcm1hdF9jbGVhcicsXG4gICAgJ2Zvcm1hdF9jb2xvcl9maWxsJyxcbiAgICAnZm9ybWF0X2NvbG9yX3Jlc2V0JyxcbiAgICAnZm9ybWF0X2NvbG9yX3RleHQnLFxuICAgICdmb3JtYXRfaW5kZW50X2RlY3JlYXNlJyxcbiAgICAnZm9ybWF0X2luZGVudF9pbmNyZWFzZScsXG4gICAgJ2Zvcm1hdF9pdGFsaWMnLFxuICAgICdmb3JtYXRfbGluZV9zcGFjaW5nJyxcbiAgICAnZm9ybWF0X2xpc3RfYnVsbGV0ZWQnLFxuICAgICdmb3JtYXRfbGlzdF9udW1iZXJlZCcsXG4gICAgJ2Zvcm1hdF9wYWludCcsXG4gICAgJ2Zvcm1hdF9xdW90ZScsXG4gICAgJ2Zvcm1hdF9zaXplJyxcbiAgICAnZm9ybWF0X3N0cmlrZXRocm91Z2gnLFxuICAgICdmb3JtYXRfdGV4dGRpcmVjdGlvbl9sX3RvX3InLFxuICAgICdmb3JtYXRfdGV4dGRpcmVjdGlvbl9yX3RvX2wnLFxuICAgICdmb3JtYXRfdW5kZXJsaW5lZCcsXG4gICAgJ2ZvcnVtJyxcbiAgICAnZm9yd2FyZCcsXG4gICAgJ2ZvcndhcmRfMTAnLFxuICAgICdmb3J3YXJkXzMwJyxcbiAgICAnZm9yd2FyZF81JyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2Z1bGxzY3JlZW5fZXhpdCcsXG4gICAgJ2Z1bmN0aW9ucycsXG4gICAgJ2dhbWVwYWQnLFxuICAgICdnYW1lcycsXG4gICAgJ2dlc3R1cmUnLFxuICAgICdnZXRfYXBwJyxcbiAgICAnZ2lmJyxcbiAgICAnZ3BzX2ZpeGVkJyxcbiAgICAnZ3BzX25vdF9maXhlZCcsXG4gICAgJ2dwc19vZmYnLFxuICAgICdncmFkZScsXG4gICAgJ2dyYWRpZW50JyxcbiAgICAnZ3JhaW4nLFxuICAgICdncmFwaGljX2VxJyxcbiAgICAnZ3JpZF9vZmYnLFxuICAgICdncmlkX29uJyxcbiAgICAnZ3JvdXAnLFxuICAgICdncm91cF9hZGQnLFxuICAgICdncm91cF93b3JrJyxcbiAgICAnaGQnLFxuICAgICdoZHJfb2ZmJyxcbiAgICAnaGRyX29uJyxcbiAgICAnaGRyX3N0cm9uZycsXG4gICAgJ2hkcl93ZWFrJyxcbiAgICAnaGVhZHNldCcsXG4gICAgJ2hlYWRzZXRfbWljJyxcbiAgICAnaGVhbGluZycsXG4gICAgJ2hlYXJpbmcnLFxuICAgICdoZWxwJyxcbiAgICAnaGVscF9vdXRsaW5lJyxcbiAgICAnaGlnaF9xdWFsaXR5JyxcbiAgICAnaGlnaGxpZ2h0X29mZicsXG4gICAgJ2hpc3RvcnknLFxuICAgICdob21lJyxcbiAgICAnaG90ZWwnLFxuICAgICdob3VyZ2xhc3NfZW1wdHknLFxuICAgICdob3VyZ2xhc3NfZnVsbCcsXG4gICAgJ2h0dHAnLFxuICAgICdodHRwcycsXG4gICAgJ2ltYWdlJyxcbiAgICAnaW1hZ2VfYXNwZWN0X3JhdGlvJyxcbiAgICAnaW1wb3J0X2V4cG9ydCcsXG4gICAgJ2luYm94JyxcbiAgICAnaW5kZXRlcm1pbmF0ZV9jaGVja19ib3gnLFxuICAgICdpbmZvJyxcbiAgICAnaW5mb19vdXRsaW5lJyxcbiAgICAnaW5wdXQnLFxuICAgICdpbnNlcnRfY2hhcnQnLFxuICAgICdpbnNlcnRfY29tbWVudCcsXG4gICAgJ2luc2VydF9kcml2ZV9maWxlJyxcbiAgICAnaW5zZXJ0X2Vtb3RpY29uJyxcbiAgICAnaW5zZXJ0X2ludml0YXRpb24nLFxuICAgICdpbnNlcnRfbGluaycsXG4gICAgJ2luc2VydF9waG90bycsXG4gICAgJ2ludmVydF9jb2xvcnMnLFxuICAgICdpbnZlcnRfY29sb3JzX29mZicsXG4gICAgJ2lzbycsXG4gICAgJ2tleWJvYXJkJyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfZG93bicsXG4gICAgJ2tleWJvYXJkX2Fycm93X2xlZnQnLFxuICAgICdrZXlib2FyZF9hcnJvd19yaWdodCcsXG4gICAgJ2tleWJvYXJkX2Fycm93X3VwJyxcbiAgICAna2V5Ym9hcmRfYmFja3NwYWNlJyxcbiAgICAna2V5Ym9hcmRfY2Fwc2xvY2snLFxuICAgICdrZXlib2FyZF9oaWRlJyxcbiAgICAna2V5Ym9hcmRfcmV0dXJuJyxcbiAgICAna2V5Ym9hcmRfdGFiJyxcbiAgICAna2V5Ym9hcmRfdm9pY2UnLFxuICAgICdsYWJlbCcsXG4gICAgJ2xhYmVsX291dGxpbmUnLFxuICAgICdsYW5kc2NhcGUnLFxuICAgICdsYW5ndWFnZScsXG4gICAgJ2xhcHRvcCcsXG4gICAgJ2xhcHRvcF9jaHJvbWVib29rJyxcbiAgICAnbGFwdG9wX21hYycsXG4gICAgJ2xhcHRvcF93aW5kb3dzJyxcbiAgICAnbGF1bmNoJyxcbiAgICAnbGF5ZXJzJyxcbiAgICAnbGF5ZXJzX2NsZWFyJyxcbiAgICAnbGVha19hZGQnLFxuICAgICdsZWFrX3JlbW92ZScsXG4gICAgJ2xlbnMnLFxuICAgICdsaWJyYXJ5X2FkZCcsXG4gICAgJ2xpYnJhcnlfYm9va3MnLFxuICAgICdsaWJyYXJ5X211c2ljJyxcbiAgICAnbGluaycsXG4gICAgJ2xpc3QnLFxuICAgICdsaXZlX2hlbHAnLFxuICAgICdsaXZlX3R2JyxcbiAgICAnbG9jYWxfYWN0aXZpdHknLFxuICAgICdsb2NhbF9haXJwb3J0JyxcbiAgICAnbG9jYWxfYXRtJyxcbiAgICAnbG9jYWxfYmFyJyxcbiAgICAnbG9jYWxfY2FmZScsXG4gICAgJ2xvY2FsX2Nhcl93YXNoJyxcbiAgICAnbG9jYWxfY29udmVuaWVuY2Vfc3RvcmUnLFxuICAgICdsb2NhbF9kaW5pbmcnLFxuICAgICdsb2NhbF9kcmluaycsXG4gICAgJ2xvY2FsX2Zsb3Jpc3QnLFxuICAgICdsb2NhbF9nYXNfc3RhdGlvbicsXG4gICAgJ2xvY2FsX2dyb2Nlcnlfc3RvcmUnLFxuICAgICdsb2NhbF9ob3NwaXRhbCcsXG4gICAgJ2xvY2FsX2hvdGVsJyxcbiAgICAnbG9jYWxfbGF1bmRyeV9zZXJ2aWNlJyxcbiAgICAnbG9jYWxfbGlicmFyeScsXG4gICAgJ2xvY2FsX21hbGwnLFxuICAgICdsb2NhbF9tb3ZpZXMnLFxuICAgICdsb2NhbF9vZmZlcicsXG4gICAgJ2xvY2FsX3BhcmtpbmcnLFxuICAgICdsb2NhbF9waGFybWFjeScsXG4gICAgJ2xvY2FsX3Bob25lJyxcbiAgICAnbG9jYWxfcGl6emEnLFxuICAgICdsb2NhbF9wbGF5JyxcbiAgICAnbG9jYWxfcG9zdF9vZmZpY2UnLFxuICAgICdsb2NhbF9wcmludHNob3AnLFxuICAgICdsb2NhbF9zZWUnLFxuICAgICdsb2NhbF9zaGlwcGluZycsXG4gICAgJ2xvY2FsX3RheGknLFxuICAgICdsb2NhdGlvbl9jaXR5JyxcbiAgICAnbG9jYXRpb25fZGlzYWJsZWQnLFxuICAgICdsb2NhdGlvbl9vZmYnLFxuICAgICdsb2NhdGlvbl9vbicsXG4gICAgJ2xvY2F0aW9uX3NlYXJjaGluZycsXG4gICAgJ2xvY2snLFxuICAgICdsb2NrX29wZW4nLFxuICAgICdsb2NrX291dGxpbmUnLFxuICAgICdsb29rcycsXG4gICAgJ2xvb2tzXzMnLFxuICAgICdsb29rc180JyxcbiAgICAnbG9va3NfNScsXG4gICAgJ2xvb2tzXzYnLFxuICAgICdsb29rc19vbmUnLFxuICAgICdsb29rc190d28nLFxuICAgICdsb29wJyxcbiAgICAnbG91cGUnLFxuICAgICdsb3lhbHR5JyxcbiAgICAnbWFpbCcsXG4gICAgJ21hcCcsXG4gICAgJ21hcmt1bnJlYWQnLFxuICAgICdtYXJrdW5yZWFkX21haWxib3gnLFxuICAgICdtZW1vcnknLFxuICAgICdtZW51JyxcbiAgICAnbWVyZ2VfdHlwZScsXG4gICAgJ21lc3NhZ2UnLFxuICAgICdtaWMnLFxuICAgICdtaWNfbm9uZScsXG4gICAgJ21pY19vZmYnLFxuICAgICdtbXMnLFxuICAgICdtb2RlX2NvbW1lbnQnLFxuICAgICdtb2RlX2VkaXQnLFxuICAgICdtb25leV9vZmYnLFxuICAgICdtb25vY2hyb21lX3Bob3RvcycsXG4gICAgJ21vb2QnLFxuICAgICdtb29kX2JhZCcsXG4gICAgJ21vcmUnLFxuICAgICdtb3JlX2hvcml6JyxcbiAgICAnbW9yZV92ZXJ0JyxcbiAgICAnbW91c2UnLFxuICAgICdtb3ZpZScsXG4gICAgJ21vdmllX2NyZWF0aW9uJyxcbiAgICAnbXVzaWNfbm90ZScsXG4gICAgJ215X2xpYnJhcnlfYWRkJyxcbiAgICAnbXlfbGlicmFyeV9ib29rcycsXG4gICAgJ215X2xpYnJhcnlfbXVzaWMnLFxuICAgICdteV9sb2NhdGlvbicsXG4gICAgJ25hdHVyZScsXG4gICAgJ25hdHVyZV9wZW9wbGUnLFxuICAgICduYXZpZ2F0ZV9iZWZvcmUnLFxuICAgICduYXZpZ2F0ZV9uZXh0JyxcbiAgICAnbmF2aWdhdGlvbicsXG4gICAgJ25ldHdvcmtfY2VsbCcsXG4gICAgJ25ldHdvcmtfbG9ja2VkJyxcbiAgICAnbmV0d29ya193aWZpJyxcbiAgICAnbmV3X3JlbGVhc2VzJyxcbiAgICAnbmZjJyxcbiAgICAnbm9fc2ltJyxcbiAgICAnbm90X2ludGVyZXN0ZWQnLFxuICAgICdub3RlX2FkZCcsXG4gICAgJ25vdGlmaWNhdGlvbnMnLFxuICAgICdub3RpZmljYXRpb25zX2FjdGl2ZScsXG4gICAgJ25vdGlmaWNhdGlvbnNfbm9uZScsXG4gICAgJ25vdGlmaWNhdGlvbnNfb2ZmJyxcbiAgICAnbm90aWZpY2F0aW9uc19wYXVzZWQnLFxuICAgICdvZmZsaW5lX3BpbicsXG4gICAgJ29uZGVtYW5kX3ZpZGVvJyxcbiAgICAnb3Blbl9pbl9icm93c2VyJyxcbiAgICAnb3Blbl9pbl9uZXcnLFxuICAgICdvcGVuX3dpdGgnLFxuICAgICdwYWdlcycsXG4gICAgJ3BhZ2V2aWV3JyxcbiAgICAncGFsZXR0ZScsXG4gICAgJ3Bhbm9yYW1hJyxcbiAgICAncGFub3JhbWFfZmlzaF9leWUnLFxuICAgICdwYW5vcmFtYV9ob3Jpem9udGFsJyxcbiAgICAncGFub3JhbWFfdmVydGljYWwnLFxuICAgICdwYW5vcmFtYV93aWRlX2FuZ2xlJyxcbiAgICAncGFydHlfbW9kZScsXG4gICAgJ3BhdXNlJyxcbiAgICAncGF1c2VfY2lyY2xlX2ZpbGxlZCcsXG4gICAgJ3BhdXNlX2NpcmNsZV9vdXRsaW5lJyxcbiAgICAncGF5bWVudCcsXG4gICAgJ3Blb3BsZScsXG4gICAgJ3Blb3BsZV9vdXRsaW5lJyxcbiAgICAncGVybV9jYW1lcmFfbWljJyxcbiAgICAncGVybV9jb250YWN0X2NhbGVuZGFyJyxcbiAgICAncGVybV9kYXRhX3NldHRpbmcnLFxuICAgICdwZXJtX2RldmljZV9pbmZvcm1hdGlvbicsXG4gICAgJ3Blcm1faWRlbnRpdHknLFxuICAgICdwZXJtX21lZGlhJyxcbiAgICAncGVybV9waG9uZV9tc2cnLFxuICAgICdwZXJtX3NjYW5fd2lmaScsXG4gICAgJ3BlcnNvbicsXG4gICAgJ3BlcnNvbl9hZGQnLFxuICAgICdwZXJzb25fb3V0bGluZScsXG4gICAgJ3BlcnNvbl9waW4nLFxuICAgICdwZXJzb25hbF92aWRlbycsXG4gICAgJ3Bob25lJyxcbiAgICAncGhvbmVfYW5kcm9pZCcsXG4gICAgJ3Bob25lX2JsdWV0b290aF9zcGVha2VyJyxcbiAgICAncGhvbmVfZm9yd2FyZGVkJyxcbiAgICAncGhvbmVfaW5fdGFsaycsXG4gICAgJ3Bob25lX2lwaG9uZScsXG4gICAgJ3Bob25lX2xvY2tlZCcsXG4gICAgJ3Bob25lX21pc3NlZCcsXG4gICAgJ3Bob25lX3BhdXNlZCcsXG4gICAgJ3Bob25lbGluaycsXG4gICAgJ3Bob25lbGlua19lcmFzZScsXG4gICAgJ3Bob25lbGlua19sb2NrJyxcbiAgICAncGhvbmVsaW5rX29mZicsXG4gICAgJ3Bob25lbGlua19yaW5nJyxcbiAgICAncGhvbmVsaW5rX3NldHVwJyxcbiAgICAncGhvdG8nLFxuICAgICdwaG90b19hbGJ1bScsXG4gICAgJ3Bob3RvX2NhbWVyYScsXG4gICAgJ3Bob3RvX2xpYnJhcnknLFxuICAgICdwaG90b19zaXplX3NlbGVjdF9hY3R1YWwnLFxuICAgICdwaG90b19zaXplX3NlbGVjdF9sYXJnZScsXG4gICAgJ3Bob3RvX3NpemVfc2VsZWN0X3NtYWxsJyxcbiAgICAncGljdHVyZV9hc19wZGYnLFxuICAgICdwaWN0dXJlX2luX3BpY3R1cmUnLFxuICAgICdwaW5fZHJvcCcsXG4gICAgJ3BsYWNlJyxcbiAgICAncGxheV9hcnJvdycsXG4gICAgJ3BsYXlfY2lyY2xlX2ZpbGxlZCcsXG4gICAgJ3BsYXlfY2lyY2xlX291dGxpbmUnLFxuICAgICdwbGF5X2Zvcl93b3JrJyxcbiAgICAncGxheV9zaG9wcGluZ19iYWcnLFxuICAgICdwbGF5bGlzdF9hZGQnLFxuICAgICdwbHVzX29uZScsXG4gICAgJ3BvbGwnLFxuICAgICdwb2x5bWVyJyxcbiAgICAncG9ydGFibGVfd2lmaV9vZmYnLFxuICAgICdwb3J0cmFpdCcsXG4gICAgJ3Bvd2VyJyxcbiAgICAncG93ZXJfaW5wdXQnLFxuICAgICdwb3dlcl9zZXR0aW5nc19uZXcnLFxuICAgICdwcmVzZW50X3RvX2FsbCcsXG4gICAgJ3ByaW50JyxcbiAgICAncHVibGljJyxcbiAgICAncHVibGlzaCcsXG4gICAgJ3F1ZXJ5X2J1aWxkZXInLFxuICAgICdxdWVzdGlvbl9hbnN3ZXInLFxuICAgICdxdWV1ZScsXG4gICAgJ3F1ZXVlX211c2ljJyxcbiAgICAncmFkaW8nLFxuICAgICdyYWRpb19idXR0b25fY2hlY2tlZCcsXG4gICAgJ3JhZGlvX2J1dHRvbl91bmNoZWNrZWQnLFxuICAgICdyYXRlX3JldmlldycsXG4gICAgJ3JlY2VpcHQnLFxuICAgICdyZWNlbnRfYWN0b3JzJyxcbiAgICAncmVkZWVtJyxcbiAgICAncmVkbycsXG4gICAgJ3JlZnJlc2gnLFxuICAgICdyZW1vdmUnLFxuICAgICdyZW1vdmVfY2lyY2xlJyxcbiAgICAncmVtb3ZlX2NpcmNsZV9vdXRsaW5lJyxcbiAgICAncmVtb3ZlX3JlZF9leWUnLFxuICAgICdyZW9yZGVyJyxcbiAgICAncmVwZWF0JyxcbiAgICAncmVwZWF0X29uZScsXG4gICAgJ3JlcGxheScsXG4gICAgJ3JlcGxheV8xMCcsXG4gICAgJ3JlcGxheV8zMCcsXG4gICAgJ3JlcGxheV81JyxcbiAgICAncmVwbHknLFxuICAgICdyZXBseV9hbGwnLFxuICAgICdyZXBvcnQnLFxuICAgICdyZXBvcnRfcHJvYmxlbScsXG4gICAgJ3Jlc3RhdXJhbnRfbWVudScsXG4gICAgJ3Jlc3RvcmUnLFxuICAgICdyaW5nX3ZvbHVtZScsXG4gICAgJ3Jvb20nLFxuICAgICdyb3RhdGVfOTBfZGVncmVlc19jY3cnLFxuICAgICdyb3RhdGVfbGVmdCcsXG4gICAgJ3JvdGF0ZV9yaWdodCcsXG4gICAgJ3JvdXRlcicsXG4gICAgJ3NhdGVsbGl0ZScsXG4gICAgJ3NhdmUnLFxuICAgICdzY2FubmVyJyxcbiAgICAnc2NoZWR1bGUnLFxuICAgICdzY2hvb2wnLFxuICAgICdzY3JlZW5fbG9ja19sYW5kc2NhcGUnLFxuICAgICdzY3JlZW5fbG9ja19wb3J0cmFpdCcsXG4gICAgJ3NjcmVlbl9sb2NrX3JvdGF0aW9uJyxcbiAgICAnc2NyZWVuX3JvdGF0aW9uJyxcbiAgICAnc2RfY2FyZCcsXG4gICAgJ3NkX3N0b3JhZ2UnLFxuICAgICdzZWFyY2gnLFxuICAgICdzZWN1cml0eScsXG4gICAgJ3NlbGVjdF9hbGwnLFxuICAgICdzZW5kJyxcbiAgICAnc2V0dGluZ3MnLFxuICAgICdzZXR0aW5nc19hcHBsaWNhdGlvbnMnLFxuICAgICdzZXR0aW5nc19iYWNrdXBfcmVzdG9yZScsXG4gICAgJ3NldHRpbmdzX2JsdWV0b290aCcsXG4gICAgJ3NldHRpbmdzX2JyaWdodG5lc3MnLFxuICAgICdzZXR0aW5nc19jZWxsJyxcbiAgICAnc2V0dGluZ3NfZXRoZXJuZXQnLFxuICAgICdzZXR0aW5nc19pbnB1dF9hbnRlbm5hJyxcbiAgICAnc2V0dGluZ3NfaW5wdXRfY29tcG9uZW50JyxcbiAgICAnc2V0dGluZ3NfaW5wdXRfY29tcG9zaXRlJyxcbiAgICAnc2V0dGluZ3NfaW5wdXRfaGRtaScsXG4gICAgJ3NldHRpbmdzX2lucHV0X3N2aWRlbycsXG4gICAgJ3NldHRpbmdzX292ZXJzY2FuJyxcbiAgICAnc2V0dGluZ3NfcGhvbmUnLFxuICAgICdzZXR0aW5nc19wb3dlcicsXG4gICAgJ3NldHRpbmdzX3JlbW90ZScsXG4gICAgJ3NldHRpbmdzX3N5c3RlbV9kYXlkcmVhbScsXG4gICAgJ3NldHRpbmdzX3ZvaWNlJyxcbiAgICAnc2hhcmUnLFxuICAgICdzaG9wJyxcbiAgICAnc2hvcF90d28nLFxuICAgICdzaG9wcGluZ19iYXNrZXQnLFxuICAgICdzaG9wcGluZ19jYXJ0JyxcbiAgICAnc2h1ZmZsZScsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl80X2JhcicsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9jb25uZWN0ZWRfbm9faW50ZXJuZXRfNF9iYXInLFxuICAgICdzaWduYWxfY2VsbHVsYXJfbm9fc2ltJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyX251bGwnLFxuICAgICdzaWduYWxfY2VsbHVsYXJfb2ZmJyxcbiAgICAnc2lnbmFsX3dpZmlfNF9iYXInLFxuICAgICdzaWduYWxfd2lmaV80X2Jhcl9sb2NrJyxcbiAgICAnc2lnbmFsX3dpZmlfb2ZmJyxcbiAgICAnc2ltX2NhcmQnLFxuICAgICdzaW1fY2FyZF9hbGVydCcsXG4gICAgJ3NraXBfbmV4dCcsXG4gICAgJ3NraXBfcHJldmlvdXMnLFxuICAgICdzbGlkZXNob3cnLFxuICAgICdzbWFydHBob25lJyxcbiAgICAnc21zJyxcbiAgICAnc21zX2ZhaWxlZCcsXG4gICAgJ3Nub296ZScsXG4gICAgJ3NvcnQnLFxuICAgICdzb3J0X2J5X2FscGhhJyxcbiAgICAnc3BhY2VfYmFyJyxcbiAgICAnc3BlYWtlcicsXG4gICAgJ3NwZWFrZXJfZ3JvdXAnLFxuICAgICdzcGVha2VyX25vdGVzJyxcbiAgICAnc3BlYWtlcl9waG9uZScsXG4gICAgJ3NwZWxsY2hlY2snLFxuICAgICdzdGFyJyxcbiAgICAnc3Rhcl9ib3JkZXInLFxuICAgICdzdGFyX2hhbGYnLFxuICAgICdzdGFycycsXG4gICAgJ3N0YXlfY3VycmVudF9sYW5kc2NhcGUnLFxuICAgICdzdGF5X2N1cnJlbnRfcG9ydHJhaXQnLFxuICAgICdzdGF5X3ByaW1hcnlfbGFuZHNjYXBlJyxcbiAgICAnc3RheV9wcmltYXJ5X3BvcnRyYWl0JyxcbiAgICAnc3RvcCcsXG4gICAgJ3N0b3JhZ2UnLFxuICAgICdzdG9yZScsXG4gICAgJ3N0b3JlX21hbGxfZGlyZWN0b3J5JyxcbiAgICAnc3RyYWlnaHRlbicsXG4gICAgJ3N0cmlrZXRocm91Z2hfcycsXG4gICAgJ3N0eWxlJyxcbiAgICAnc3ViamVjdCcsXG4gICAgJ3N1YnRpdGxlcycsXG4gICAgJ3N1cGVydmlzb3JfYWNjb3VudCcsXG4gICAgJ3N1cnJvdW5kX3NvdW5kJyxcbiAgICAnc3dhcF9jYWxscycsXG4gICAgJ3N3YXBfaG9yaXonLFxuICAgICdzd2FwX3ZlcnQnLFxuICAgICdzd2FwX3ZlcnRpY2FsX2NpcmNsZScsXG4gICAgJ3N3aXRjaF9jYW1lcmEnLFxuICAgICdzd2l0Y2hfdmlkZW8nLFxuICAgICdzeW5jJyxcbiAgICAnc3luY19kaXNhYmxlZCcsXG4gICAgJ3N5bmNfcHJvYmxlbScsXG4gICAgJ3N5c3RlbV91cGRhdGUnLFxuICAgICdzeXN0ZW1fdXBkYXRlX2FsdCcsXG4gICAgJ3RhYicsXG4gICAgJ3RhYl91bnNlbGVjdGVkJyxcbiAgICAndGFibGV0JyxcbiAgICAndGFibGV0X2FuZHJvaWQnLFxuICAgICd0YWJsZXRfbWFjJyxcbiAgICAndGFnX2ZhY2VzJyxcbiAgICAndGFwX2FuZF9wbGF5JyxcbiAgICAndGVycmFpbicsXG4gICAgJ3RleHRfZm9ybWF0JyxcbiAgICAndGV4dHNtcycsXG4gICAgJ3RleHR1cmUnLFxuICAgICd0aGVhdGVycycsXG4gICAgJ3RodW1iX2Rvd24nLFxuICAgICd0aHVtYl91cCcsXG4gICAgJ3RodW1ic191cF9kb3duJyxcbiAgICAndGltZV90b19sZWF2ZScsXG4gICAgJ3RpbWVsYXBzZScsXG4gICAgJ3RpbWVyJyxcbiAgICAndGltZXJfMTAnLFxuICAgICd0aW1lcl8zJyxcbiAgICAndGltZXJfb2ZmJyxcbiAgICAndG9jJyxcbiAgICAndG9kYXknLFxuICAgICd0b2xsJyxcbiAgICAndG9uYWxpdHknLFxuICAgICd0b3lzJyxcbiAgICAndHJhY2tfY2hhbmdlcycsXG4gICAgJ3RyYWZmaWMnLFxuICAgICd0cmFuc2Zvcm0nLFxuICAgICd0cmFuc2xhdGUnLFxuICAgICd0cmVuZGluZ19kb3duJyxcbiAgICAndHJlbmRpbmdfZmxhdCcsXG4gICAgJ3RyZW5kaW5nX3VwJyxcbiAgICAndHVuZScsXG4gICAgJ3R1cm5lZF9pbicsXG4gICAgJ3R1cm5lZF9pbl9ub3QnLFxuICAgICd0dicsXG4gICAgJ3VuZG8nLFxuICAgICd1bmZvbGRfbGVzcycsXG4gICAgJ3VuZm9sZF9tb3JlJyxcbiAgICAndXNiJyxcbiAgICAndmVyaWZpZWRfdXNlcicsXG4gICAgJ3ZlcnRpY2FsX2FsaWduX2JvdHRvbScsXG4gICAgJ3ZlcnRpY2FsX2FsaWduX2NlbnRlcicsXG4gICAgJ3ZlcnRpY2FsX2FsaWduX3RvcCcsXG4gICAgJ3ZpYnJhdGlvbicsXG4gICAgJ3ZpZGVvX2xpYnJhcnknLFxuICAgICd2aWRlb2NhbScsXG4gICAgJ3ZpZGVvY2FtX29mZicsXG4gICAgJ3ZpZXdfYWdlbmRhJyxcbiAgICAndmlld19hcnJheScsXG4gICAgJ3ZpZXdfY2Fyb3VzZWwnLFxuICAgICd2aWV3X2NvbHVtbicsXG4gICAgJ3ZpZXdfY29tZnknLFxuICAgICd2aWV3X2NvbXBhY3QnLFxuICAgICd2aWV3X2RheScsXG4gICAgJ3ZpZXdfaGVhZGxpbmUnLFxuICAgICd2aWV3X2xpc3QnLFxuICAgICd2aWV3X21vZHVsZScsXG4gICAgJ3ZpZXdfcXVpbHQnLFxuICAgICd2aWV3X3N0cmVhbScsXG4gICAgJ3ZpZXdfd2VlaycsXG4gICAgJ3ZpZ25ldHRlJyxcbiAgICAndmlzaWJpbGl0eScsXG4gICAgJ3Zpc2liaWxpdHlfb2ZmJyxcbiAgICAndm9pY2VfY2hhdCcsXG4gICAgJ3ZvaWNlbWFpbCcsXG4gICAgJ3ZvbHVtZV9kb3duJyxcbiAgICAndm9sdW1lX211dGUnLFxuICAgICd2b2x1bWVfb2ZmJyxcbiAgICAndm9sdW1lX3VwJyxcbiAgICAndnBuX2tleScsXG4gICAgJ3Zwbl9sb2NrJyxcbiAgICAnd2FsbHBhcGVyJyxcbiAgICAnd2FybmluZycsXG4gICAgJ3dhdGNoJyxcbiAgICAnd2JfYXV0bycsXG4gICAgJ3diX2Nsb3VkeScsXG4gICAgJ3diX2luY2FuZGVzY2VudCcsXG4gICAgJ3diX2lyaWRlc2NlbnQnLFxuICAgICd3Yl9zdW5ueScsXG4gICAgJ3djJyxcbiAgICAnd2ViJyxcbiAgICAnd2hhdHNob3QnLFxuICAgICd3aWRnZXRzJyxcbiAgICAnd2lmaScsXG4gICAgJ3dpZmlfbG9jaycsXG4gICAgJ3dpZmlfdGV0aGVyaW5nJyxcbiAgICAnd29yaycsXG4gICAgJ3dyYXBfdGV4dCcsXG4gICAgJ3lvdXR1YmVfc2VhcmNoZWRfZm9yJyxcbiAgICAnem9vbV9pbicsXG4gICAgJ3pvb21fb3V0JyxcbiAgXTtcblxuICBnZXQgaWNvbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9pY29ucztcbiAgfVxuXG4gIGZpbHRlcihxdWVyeTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmljb25zLmZpbHRlcigoZWw6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeSA/IHF1ZXJ5LnRvTG93ZXJDYXNlKCkgOiAnJykgPiAtMTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEFOSU1BVElPTlNcbiAqL1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgeyBUZFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vYW5pbWF0aW9ucy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZEZhZGVEaXJlY3RpdmUgfSBmcm9tICcuL2FuaW1hdGlvbnMvZmFkZS9mYWRlLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX0FOSU1BVElPTlM6IFR5cGU8YW55PltdID0gW1xuICBUZFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRGYWRlRGlyZWN0aXZlLFxuXTtcblxuLyoqXG4gKiBGT1JNU1xuICovXG5cbi8vIEZvcm0gRGlyZWN0aXZlc1xuaW1wb3J0IHsgVGRBdXRvVHJpbURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybXMvYXV0by10cmltL2F1dG8tdHJpbS5kaXJlY3RpdmUnO1xuXG5jb25zdCBURF9GT1JNUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQXV0b1RyaW1EaXJlY3RpdmUsXG5dO1xuXG4vLyBWYWxpZGF0b3JzXG5jb25zdCBURF9WQUxJREFUT1JTOiBUeXBlPGFueT5bXSA9IFtcbl07XG5cbi8qKlxuICogUElQRVNcbiAqL1xuaW1wb3J0IHsgVGRUaW1lQWdvUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1hZ28vdGltZS1hZ28ucGlwZSc7XG5pbXBvcnQgeyBUZFRpbWVEaWZmZXJlbmNlUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1kaWZmZXJlbmNlL3RpbWUtZGlmZmVyZW5jZS5waXBlJztcbmltcG9ydCB7IFRkVGltZVVudGlsUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS11bnRpbC90aW1lLXVudGlsLnBpcGUnO1xuaW1wb3J0IHsgVGRCeXRlc1BpcGUgfSBmcm9tICcuL3BpcGVzL2J5dGVzL2J5dGVzLnBpcGUnO1xuaW1wb3J0IHsgVGREZWNpbWFsQnl0ZXNQaXBlIH0gZnJvbSAnLi9waXBlcy9kZWNpbWFsLWJ5dGVzL2RlY2ltYWwtYnl0ZXMucGlwZSc7XG5pbXBvcnQgeyBUZERpZ2l0c1BpcGUgfSBmcm9tICcuL3BpcGVzL2RpZ2l0cy9kaWdpdHMucGlwZSc7XG5pbXBvcnQgeyBUZFRydW5jYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdHJ1bmNhdGUvdHJ1bmNhdGUucGlwZSc7XG5cbmNvbnN0IFREX1BJUEVTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRUaW1lQWdvUGlwZSxcbiAgVGRUaW1lRGlmZmVyZW5jZVBpcGUsXG4gIFRkVGltZVVudGlsUGlwZSxcbiAgVGRCeXRlc1BpcGUsXG4gIFRkRGVjaW1hbEJ5dGVzUGlwZSxcbiAgVGREaWdpdHNQaXBlLFxuICBUZFRydW5jYXRlUGlwZSxcbl07XG5cbi8qKlxuICogU2VydmljZXNcbiAqL1xuXG5pbXBvcnQgeyBSb3V0ZXJQYXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcm91dGVyLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBJY29uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaWNvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfRk9STVMsXG4gICAgVERfUElQRVMsXG4gICAgVERfQU5JTUFUSU9OUyxcbiAgICBURF9WQUxJREFUT1JTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFREX0ZPUk1TLFxuICAgIFREX1BJUEVTLFxuICAgIFREX0FOSU1BVElPTlMsXG4gICAgVERfVkFMSURBVE9SUyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUm91dGVyUGF0aFNlcnZpY2UsXG4gICAgSWNvblNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50Q29tbW9uTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG4gIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdGF0ZUFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgZGVncmVlcz86IG51bWJlcjtcbiAgZWFzZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZFJvdGF0ZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkZWdyZXNzU3RhcnQ6IERlZ3JlZXMgb2Ygcm90YXRpb24gdGhhdCB0aGUgZG9tIG9iamVjdCB3aWxsIGVuZCB1cCBpbiBkdXJpbmcgdGhlIFwiZmFsc2VcIiBzdGF0ZVxuICogKiBkZWdyZWVzRW5kOiBEZWdyZWVzIG9mIHJvdGF0aW9uIHRoYXQgdGhlIGRvbSBvYmplY3Qgd2lsbCBlbmQgdXAgaW4gZHVyaW5nIHRoZSBcInRydWVcIiBzdGF0ZVxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcy4gRGVmYXVsdHMgdG8gZWFzZS1pbi5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIHJvdGF0aW9uIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZFJvdGF0ZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkZWdyZWVzRW5kOiA5MCB9fVwiXG4gKi9cblxuZXhwb3J0IGNvbnN0IHRkUm90YXRlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZFJvdGF0ZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKHt7IGRlZ3Jlc3NTdGFydCB9fWRlZyknLFxuICB9KSwgeyBwYXJhbXM6IHsgZGVncmVzc1N0YXJ0OiAwIH19KSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSh7eyBkZWdyZWVzRW5kIH19ZGVnKScsXG4gIH0pLCB7IHBhcmFtczogeyBkZWdyZWVzRW5kOiAxODAgfX0pLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDI1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2UtaW4nIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkUm90YXRlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRSb3RhdGVBbmltYXRpb24ocm90YXRlT3B0aW9uczogSVJvdGF0ZUFuaW1hdGlvbiA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIocm90YXRlT3B0aW9ucy5hbmNob3IgfHwgJ3RkUm90YXRlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKCcgKyAocm90YXRlT3B0aW9ucy5kZWdyZWVzIHx8IDE4MCkgKyAnZGVnKScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChyb3RhdGVPcHRpb25zLmR1cmF0aW9uIHx8IDI1MCkgKyAnbXMgJyArXG4gICAgICAgICAgKHJvdGF0ZU9wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMgJyArXG4gICAgICAgICAgKHJvdGF0ZU9wdGlvbnMuZWFzZSB8fCAnZWFzZS1pbicpKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsYXBzZUFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgIGVhc2VPbkNsb3NlPzogc3RyaW5nO1xuICAgZWFzZU9uT3Blbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZENvbGxhcHNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlT25DbG9zZTogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGNsb3NpbmcuIERlZmF1bHRzIHRvIGVhc2UtaW4uXG4gKiAqIGVhc2VPbk9wZW46IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBvcGVuaW5nLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGNvbGxhcHNlL2V4cGFuZCBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRDb2xsYXBzZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogNTAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkQ29sbGFwc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkQ29sbGFwc2UnLCBbXG4gICAgc3RhdGUoJzEnLCBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMCcsICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2UtaW4nIH19KSxcbiAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG4gIF0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkQ29sbGFwc2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZENvbGxhcHNlQW5pbWF0aW9uKGNvbGxhcHNlT3B0aW9uczogSUNvbGxhcHNlQW5pbWF0aW9uID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihjb2xsYXBzZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZENvbGxhcHNlJywgW1xuICAgIHN0YXRlKCcxJywgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzAnLCAgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgICAgdmlzaWJpbGl0eTogQVVUT19TVFlMRSxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoY29sbGFwc2VPcHRpb25zLmR1cmF0aW9uIHx8IDE1MCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGNvbGxhcHNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmVhc2VPbkNsb3NlIHx8ICdlYXNlLWluJykpLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignMSA9PiAwJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoY29sbGFwc2VPcHRpb25zLmR1cmF0aW9uIHx8IDE1MCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGNvbGxhcHNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmVhc2VPbk9wZW4gfHwgJ2Vhc2Utb3V0JykpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGYWRlSW5PdXRBbmltYXRpb24gZXh0ZW5kcyBJQW5pbWF0aW9uT3B0aW9ucyB7XG4gIGVhc2VPbkluPzogc3RyaW5nO1xuICBlYXNlT25PdXQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogY29uc3QgdGRGYWRlSW5PdXRBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAxNTAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2VPbkluOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gZmFkaW5nIGluLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICogKiBlYXNlT25PdXQ6IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBmYWRpbmcgb3V0LiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGZhZGUgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkRmFkZUluT3V0XT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRGYWRlSW5PdXRBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkRmFkZUluT3V0JywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZU9uSW4gfX0nKSxcbiAgICAgIF0pLFxuICAgIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2VPbkluOiAnZWFzZS1pbicgfX0pLFxuICAgIHRyYW5zaXRpb24oJzEgPT4gMCcsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlT25PdXQgfX0nKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZU9uT3V0OiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkRmFkZUluT3V0QW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRGYWRlSW5PdXRBbmltYXRpb24oZmFkZUluT3V0OiBJRmFkZUluT3V0QW5pbWF0aW9uID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcigoZmFkZUluT3V0LmFuY2hvciB8fCAndGRGYWRlSW5PdXQnKSwgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChmYWRlSW5PdXQuZHVyYXRpb24gfHwgMTUwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoZmFkZUluT3V0LmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZWFzZU9uSW4gfHwgJ2Vhc2UtaW4nKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChmYWRlSW5PdXQuZHVyYXRpb24gfHwgMTUwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoZmFkZUluT3V0LmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZWFzZU9uT3V0IHx8ICdlYXNlLW91dCcpKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEJvdW5jZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgYm91bmNlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEJvdW5jZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkQm91bmNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEJvdW5jZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuMn0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjR9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKScsIG9mZnNldDogMC40M30pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuNTN9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKScsIG9mZnNldDogLjd9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjh9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC00cHgsIDApJywgb2Zmc2V0OiAuOX0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDEuMH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkQm91bmNlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRCb3VuY2VBbmltYXRpb24oYm91bmNlT3B0aW9uczogSUFuaW1hdGlvbk9wdGlvbnMgPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKGJvdW5jZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZEJvdW5jZScsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoYm91bmNlT3B0aW9ucy5kdXJhdGlvbiB8fCA1MDApICsgJ21zICcgKyAoYm91bmNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjJ9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjR9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjQzfSksXG4gICAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjUzfSksXG4gICAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKScsIG9mZnNldDogLjd9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuOH0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKScsIG9mZnNldDogLjl9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDEuMH0pLFxuICAgICAgICBdKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iLCJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRGbGFzaEFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgZmxhc2ggYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkRmxhc2hdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEZsYXNoQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEZsYXNoJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICBvcGFjaXR5OiAxLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICBvcGFjaXR5OiAxLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuMjV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMC41fSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuNzV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMS4wfSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRGbGFzaEFuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkRmxhc2hBbmltYXRpb24oZmxhc2hPcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoZmxhc2hPcHRpb25zLmFuY2hvciB8fCAndGRGbGFzaCcsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChmbGFzaE9wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKGZsYXNoT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuMjV9KSxcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjV9KSxcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwLjc1fSksXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMS4wfSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEhlYWRzaGFrZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgaGVhZHNoYWtlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEhlYWRzaGFrZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkSGVhZHNoYWtlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEhlYWRzaGFrZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKScsIG9mZnNldDogMC4wNjV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpJywgb2Zmc2V0OiAwLjE4NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKScsIG9mZnNldDogMC4zMTV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpJywgb2Zmc2V0OiAwLjQzNX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMC41MH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkSGVhZHNoYWtlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRIZWFkc2hha2VBbmltYXRpb24oaGVhZHNoYWtlT3B0aW9uczogSUFuaW1hdGlvbk9wdGlvbnMgPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKGhlYWRzaGFrZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZEhlYWRzaGFrZScsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGhlYWRzaGFrZU9wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKGhlYWRzaGFrZU9wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyknLCBvZmZzZXQ6IDAuMDY1fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpJywgb2Zmc2V0OiAwLjE4NX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpJywgb2Zmc2V0OiAwLjMxNX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKScsIG9mZnNldDogMC40MzV9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMC41MH0pLFxuICAgICAgICBdKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iLCJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRKZWxsb0FuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgamVsbG8gYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkSmVsbG9dPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEplbGxvQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEplbGxvJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwLjAxMX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKScsIG9mZnNldDogMC4yMjJ9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpJywgb2Zmc2V0OiAwLjMzM30pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpJywgb2Zmc2V0OiAwLjQ0NH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpJywgb2Zmc2V0OiAwLjU1NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKScsIG9mZnNldDogMC42NjZ9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyknLCBvZmZzZXQ6IDAuNzc3fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKScsIG9mZnNldDogMC44ODh9KSxcbiAgICAgIF0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZEplbGxvQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRKZWxsb0FuaW1hdGlvbihqZWxsb09wdGlvbnM6IElBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihqZWxsb09wdGlvbnMuYW5jaG9yIHx8ICd0ZEplbGxvJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUnLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoamVsbG9PcHRpb25zLmR1cmF0aW9uIHx8IDUwMCkgKyAnbXMgJyArIChqZWxsb09wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvZmZzZXQ6IDAuMDExfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyknLCBvZmZzZXQ6IDAuMjIyfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpJywgb2Zmc2V0OiAwLjMzM30pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyknLCBvZmZzZXQ6IDAuNDQ0fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKScsIG9mZnNldDogMC41NTV9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKScsIG9mZnNldDogMC42NjZ9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKScsIG9mZnNldDogMC43Nzd9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyknLCBvZmZzZXQ6IDAuODg4fSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZFB1bHNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBwdWxzZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRQdWxzZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkUHVsc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUHVsc2UnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpJywgb2Zmc2V0OiAwLjUgfSksXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAxLjAgfSksXG4gICAgICAgIF0pLFxuICAgICAgKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZFB1bHNlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRQdWxzZUFuaW1hdGlvbihwdWxzZU9wdGlvbnM6IElBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihwdWxzZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZFB1bHNlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgocHVsc2VPcHRpb25zLmR1cmF0aW9uIHx8IDUwMCkgKyAnbXMgJyArIChwdWxzZU9wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMnLFxuICAgICAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSknLCBvZmZzZXQ6IDAuNSB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMS4wIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBub29wOiBhbnkgPSAoKSA9PiB7XG4gIC8vIGVtcHR5IG1ldGhvZFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udHJvbFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHZhbHVlOiBhbnk7XG4gIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkNoYW5nZTogKF86IGFueSkgPT4gYW55O1xuICBvblRvdWNoZWQ6ICgpID0+IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSGFzQ2hhbmdlRGV0ZWN0b3JSZWYge1xuICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmO1xufVxuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGNvbXBvbmVudCB3aXRoIG5nTW9kZWwgc3VwcG9ydC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxJSGFzQ2hhbmdlRGV0ZWN0b3JSZWY+PlxuICAgICAgICAgICAgICAgIChiYXNlOiBULCBpbml0aWFsVmFsdWU/OiBhbnkpOiBDb25zdHJ1Y3RvcjxJQ29udHJvbFZhbHVlQWNjZXNzb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBpbml0aWFsVmFsdWU7XG4gICAgcHJpdmF0ZSBfc3ViamVjdFZhbHVlQ2hhbmdlczogU3ViamVjdDxhbnk+O1xuICAgIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpOyBcbiAgICAgIHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcyA9IHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMubmV4dCh2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKF86IGFueSkgPT4gbm9vcDtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiBub29wO1xuXG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuLyoqIEludGVyZmFjZSB0byBpbXBsZW1lbnQgd2hlbiBhcHBseWluZyB0aGUgZGlzYWJsZWQgbWl4aW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNhbkRpc2FibGUge1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZDtcbn1cblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBjb21wb25lbnQgb3IgZGlyZWN0aXZlIHdpdGggYSBgZGlzYWJsZWRgIHByb3BlcnR5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPHt9Pj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPElDYW5EaXNhYmxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICBsZXQgbmV3VmFsdWU6IGJvb2xlYW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLm9uRGlzYWJsZWRDaGFuZ2UodGhpcy5fZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgLyoqIE5PVCBJTVBMRU1FTlRFRCwgdGhpcyBuZWVkcyB0byBiZSBvdmVycmlkZW4gYnkgc3ViY2xhc3NlcyBpZiBuZWVkZWQgKi9cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuLyoqIEludGVyZmFjZSB0byBpbXBsZW1lbnQgd2hlbiBhcHBseWluZyB0aGUgZGlzYWJsZWQgbWl4aW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNhbkRpc2FibGVSaXBwbGUge1xuICBkaXNhYmxlUmlwcGxlOiBib29sZWFuO1xuICBvbkRpc2FibGVSaXBwbGVDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQ7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSB3aXRoIGEgYGRpc2FibGVkYCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVSaXBwbGU8VCBleHRlbmRzIENvbnN0cnVjdG9yPHt9Pj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPElDYW5EaXNhYmxlUmlwcGxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9kaXNhYmxlUmlwcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVSaXBwbGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVJpcHBsZTtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVSaXBwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIGxldCBuZXdWYWx1ZTogYm9vbGVhbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fZGlzYWJsZVJpcHBsZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZVJpcHBsZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLm9uRGlzYWJsZVJpcHBsZUNoYW5nZSh0aGlzLl9kaXNhYmxlUmlwcGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGVSaXBwbGVDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgLyoqIE5PVCBJTVBMRU1FTlRFRCwgdGhpcyBuZWVkcyB0byBiZSBvdmVycmlkZW4gYnkgc3ViY2xhc3NlcyBpZiBuZWVkZWQgKi9cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgQ292YWxlbnRWYWxpZGF0b3JzIHtcbiAgc3RhdGljIG1pbihtaW5WYWx1ZTogYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIGxldCBmdW5jOiBWYWxpZGF0b3JGbiA9IChjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoISFWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIHx8ICghbWluVmFsdWUgJiYgbWluVmFsdWUgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBsZXQgdjogbnVtYmVyID0gYy52YWx1ZTtcbiAgICAgIHJldHVybiB2IDwgbWluVmFsdWUgP1xuICAgICAgICB7IG1pbjoge21pblZhbHVlOiBtaW5WYWx1ZSwgYWN0dWFsVmFsdWU6IHZ9IH0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuXG4gIHN0YXRpYyBtYXgobWF4VmFsdWU6IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBsZXQgZnVuYzogVmFsaWRhdG9yRm4gPSAoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgaWYgKCEhVmFsaWRhdG9ycy5yZXF1aXJlZChjKSB8fCAoIW1heFZhbHVlICYmIG1heFZhbHVlICE9PSAwKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgbGV0IHY6IG51bWJlciA9IGMudmFsdWU7XG4gICAgICByZXR1cm4gdiA+IG1heFZhbHVlID9cbiAgICAgICAgeyBtYXg6IHttYXhWYWx1ZTogbWF4VmFsdWUsIGFjdHVhbFZhbHVlOiB2fSB9IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICBzdGF0aWMgbnVtYmVyUmVxdWlyZWQoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiAoTnVtYmVyLmlzTmFOKGMudmFsdWUpKSA/XG4gICAgICAgIHsgcmVxdWlyZWQ6IHRydWUgfSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgfVxuXG59XG4iXSwibmFtZXMiOlsic3RhdGUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE1BTWEsaUJBQWlCOzs7Ozs7O0lBcUQ1QixZQUFvQixTQUFvQixFQUNwQixRQUFvQixFQUNwQixrQkFBcUMsRUFDckMsaUJBQW1DO1FBSG5DLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7Ozs7OztRQTNDOUMsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQTRDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFL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