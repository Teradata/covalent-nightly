(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/router'), require('rxjs/operators'), require('@angular/animations'), require('rxjs'), require('@angular/cdk/coercion')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/common', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/router', 'rxjs/operators', '@angular/animations', 'rxjs', '@angular/cdk/coercion'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.common = {}),global.ng.core,global.ng.forms,global.ng.common,global.ng.router,global.rxjs.operators,global.ng.animations,global.rxjs,global.ng.cdk.coercion));
}(this, (function (exports,core,forms,common,router,operators,animations,rxjs,coercion) { 'use strict';

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
                            TD_VALIDATORS,
                        ],
                        exports: [
                            forms.FormsModule,
                            common.CommonModule,
                            TD_FORMS,
                            TD_PIPES,
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
                _this._value = initialValue instanceof Array ? Object.assign([], initialValue) : initialValue;
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
    exports.tdRotateAnimation = tdRotateAnimation;
    exports.tdCollapseAnimation = tdCollapseAnimation;
    exports.tdFadeInOutAnimation = tdFadeInOutAnimation;
    exports.tdBounceAnimation = tdBounceAnimation;
    exports.tdFlashAnimation = tdFlashAnimation;
    exports.tdHeadshakeAnimation = tdHeadshakeAnimation;
    exports.tdJelloAnimation = tdJelloAnimation;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jb21tb24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vZm9ybXMvYXV0by10cmltL2F1dG8tdHJpbS5kaXJlY3RpdmUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90aW1lLWFnby90aW1lLWFnby5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvdGltZS1kaWZmZXJlbmNlL3RpbWUtZGlmZmVyZW5jZS5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvdGltZS11bnRpbC90aW1lLXVudGlsLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy9ieXRlcy9ieXRlcy5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvZGVjaW1hbC1ieXRlcy9kZWNpbWFsLWJ5dGVzLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy9kaWdpdHMvZGlnaXRzLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90cnVuY2F0ZS90cnVuY2F0ZS5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vc2VydmljZXMvcm91dGVyLXBhdGguc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3NlcnZpY2VzL2ljb24uc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2NvbW1vbi5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL3JvdGF0ZS9yb3RhdGUuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9jb2xsYXBzZS9jb2xsYXBzZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2ZhZGUvZmFkZUluT3V0LmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvYm91bmNlL2JvdW5jZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2ZsYXNoL2ZsYXNoLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvaGVhZHNoYWtlL2hlYWRzaGFrZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2plbGxvL2plbGxvLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvcHVsc2UvcHVsc2UuYW5pbWF0aW9uLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2JlaGF2aW9ycy9jb250cm9sLXZhbHVlLWFjY2Vzb3IubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9iZWhhdmlvcnMvZGlzYWJsZWQubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9iZWhhdmlvcnMvZGlzYWJsZS1yaXBwbGUubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9mb3Jtcy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0TGlzdGVuZXIsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRBdXRvVHJpbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEF1dG9UcmltRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgX21vZGVsOiBOZ01vZGVsKSB7fVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QncyAoYmx1cikgZXZlbnQgYW5kIHRyaW1zIHZhbHVlLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIG9uQmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgJiYgdGhpcy5fbW9kZWwudmFsdWUgJiYgdHlwZW9mKHRoaXMuX21vZGVsLnZhbHVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX21vZGVsLnVwZGF0ZS5lbWl0KHRoaXMuX21vZGVsLnZhbHVlLnRyaW0oKSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVBZ28nLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRpbWVBZ29QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0aW1lOiBhbnksIHJlZmVyZW5jZT86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gQ29udmVydCB0aW1lIHRvIGRhdGUgb2JqZWN0IGlmIG5vdCBhbHJlYWR5XG4gICAgdGltZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCByZWY6IERhdGUgPSBuZXcgRGF0ZShyZWZlcmVuY2UpO1xuXG4gICAgLy8gSWYgbm90IGEgdmFsaWQgdGltZXN0YW1wLCByZXR1cm4gJ0ludmFsaWQgRGF0ZSdcbiAgICBpZiAoIXRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgLy8gRm9yIHVuaXQgdGVzdGluZywgd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRlY2xhcmUgYSBzdGF0aWMgc3RhcnQgdGltZVxuICAgIC8vIGZvciBjYWxjdWxhdGlvbnMsIG9yIGVsc2Ugc3BlZWQgb2YgdGVzdHMgY2FuIGJvcmsuXG4gICAgbGV0IHN0YXJ0VGltZTogbnVtYmVyID0gaXNOYU4ocmVmLmdldFRpbWUoKSkgPyBEYXRlLm5vdygpIDogcmVmLmdldFRpbWUoKTtcbiAgICBsZXQgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigoc3RhcnRUaW1lIC0gdGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG5cbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBzZWNvbmQgYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCA2MCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIHNlY29uZHMgYWdvJztcbiAgICB9XG4gICAgLy8gTWludXRlc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgbWludXRlIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBtaW51dGVzIGFnbyc7XG4gICAgfVxuICAgIC8vIEhvdXJzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBob3VyIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMjQpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBob3VycyBhZ28nO1xuICAgIH1cbiAgICAvLyBEYXlzXG4gICAgZGlmZiA9IGRpZmYgLyAyNDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBkYXkgYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAzMCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIGRheXMgYWdvJztcbiAgICB9XG4gICAgLy8gTW9udGhzXG4gICAgZGlmZiA9IGRpZmYgLyAzMDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBtb250aCBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDEyKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgbW9udGhzIGFnbyc7XG4gICAgfVxuICAgIC8vIFllYXJzXG4gICAgZGlmZiA9IGRpZmYgLyAxMjtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSB5ZWFyIGFnbyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyB5ZWFycyBhZ28nO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lRGlmZmVyZW5jZScsXG59KVxuXG5leHBvcnQgY2xhc3MgVGRUaW1lRGlmZmVyZW5jZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHN0YXJ0OiBhbnksIGVuZD86IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHN0YXJ0VGltZTogRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0KTtcbiAgICBsZXQgZW5kVGltZTogRGF0ZTtcblxuICAgIGlmIChlbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICghc3RhcnRUaW1lLmdldFRpbWUoKSB8fCAhZW5kVGltZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG5cbiAgICBsZXQgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigoZW5kVGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgbGV0IGRheXM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCAqIDYwICogMjQpKTtcbiAgICBkaWZmID0gZGlmZiAtIChkYXlzICogKDYwICogNjAgKiAyNCkpO1xuXG4gICAgbGV0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjAgKiA2MCkpO1xuICAgIGRpZmYgPSBkaWZmIC0gKGhvdXJzICogKDYwICogNjApKTtcblxuICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjApKTtcbiAgICBkaWZmIC09IG1pbnV0ZXMgKiAoNjApO1xuXG4gICAgbGV0IHNlY29uZHM6IG51bWJlciA9IGRpZmY7XG5cbiAgICBsZXQgcGFkOiBzdHJpbmcgPSAnMDAnO1xuXG4gICAgbGV0IGRheXNGb3JtYXR0ZWQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaWYgKGRheXMgPiAwICYmIGRheXMgPCAyKSB7XG4gICAgICBkYXlzRm9ybWF0dGVkID0gJyBkYXkgLSAnO1xuICAgIH0gZWxzZSBpZiAoZGF5cyA+IDEpIHtcbiAgICAgIGRheXNGb3JtYXR0ZWQgPSAnIGRheXMgLSAnIDtcbiAgICB9XG5cbiAgICByZXR1cm4gKGRheXMgPiAwID8gZGF5cyArIGRheXNGb3JtYXR0ZWQgOiBkYXlzRm9ybWF0dGVkKSArXG4gICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChob3VycyArICcnKS5sZW5ndGgpICsgaG91cnMgKyAnOicgK1xuICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAobWludXRlcyArICcnKS5sZW5ndGgpICsgbWludXRlcyArICc6JyArXG4gICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChzZWNvbmRzICsgJycpLmxlbmd0aCkgKyBzZWNvbmRzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVVbnRpbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkVGltZVVudGlsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGltZTogYW55LCByZWZlcmVuY2U/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIENvbnZlcnQgdGltZSB0byBkYXRlIG9iamVjdCBpZiBub3QgYWxyZWFkeVxuICAgIHRpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgcmVmOiBEYXRlID0gbmV3IERhdGUocmVmZXJlbmNlKTtcblxuICAgIC8vIElmIG5vdCBhIHZhbGlkIHRpbWVzdGFtcCwgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gICAgaWYgKCF0aW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIC8vIEZvciB1bml0IHRlc3RpbmcsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZWNsYXJlIGEgc3RhdGljIHN0YXJ0IHRpbWVcbiAgICAvLyBmb3IgY2FsY3VsYXRpb25zLCBvciBlbHNlIHNwZWVkIG9mIHRlc3RzIGNhbiBib3JrLlxuICAgIGxldCBzdGFydFRpbWU6IG51bWJlciA9IGlzTmFOKHJlZi5nZXRUaW1lKCkpID8gRGF0ZS5ub3coKSA6IHJlZi5nZXRUaW1lKCk7XG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIDEwMDApO1xuXG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgc2Vjb25kJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCA2MCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgc2Vjb25kcyc7XG4gICAgfVxuICAgIC8vIE1pbnV0ZXNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIG1pbnV0ZSc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIG1pbnV0ZXMnO1xuICAgIH1cbiAgICAvLyBIb3Vyc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgaG91cic7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMjQpIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIGhvdXJzJztcbiAgICB9XG4gICAgLy8gRGF5c1xuICAgIGRpZmYgPSBkaWZmIC8gMjQ7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgZGF5JztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAzMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgZGF5cyc7XG4gICAgfVxuICAgIC8vIE1vbnRoc1xuICAgIGRpZmYgPSBkaWZmIC8gMzA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgbW9udGgnO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDEyKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBtb250aHMnO1xuICAgIH1cbiAgICAvLyBZZWFyc1xuICAgIGRpZmYgPSBkaWZmIC8gMTI7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgeWVhcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIHllYXJzJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYnl0ZXMnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qIGBieXRlc2AgbmVlZHMgdG8gYmUgYGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnNcbiAgVHJpZWQgYm90aCBgbnVtYmVyYCBhbmQgYG51bWJlciB8IHN0cmluZ2AgKi9cbiAgdHJhbnNmb3JtKGJ5dGVzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgaWYgKGJ5dGVzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAgQic7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChieXRlcywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJyAqL1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIGxldCBrOiBudW1iZXIgPSAxMDI0O1xuICAgIGxldCBzaXplczogc3RyaW5nW10gPSBbJ0InLCAnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddO1xuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcbiAgICAvLyBpZiBsZXNzIHRoYW4gMVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKHByZWNpc2lvbikpICsgJyAnICsgc2l6ZXNbaV07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZGVjaW1hbEJ5dGVzJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZERlY2ltYWxCeXRlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyogYGJ5dGVzYCBuZWVkcyB0byBiZSBgYW55YCBvciBUeXBlU2NyaXB0IGNvbXBsYWluc1xuICBUcmllZCBib3RoIGBudW1iZXJgIGFuZCBgbnVtYmVyIHwgc3RyaW5nYCAqL1xuICB0cmFuc2Zvcm0oYnl0ZXM6IGFueSwgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMCBCJztcbiAgICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlSW50KGJ5dGVzLCAxMCkpKSB7XG4gICAgICAvKiBJZiBub3QgYSB2YWxpZCBudW1iZXIsIHJldHVybiAnSW52YWxpZCBOdW1iZXInICovXG4gICAgICByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJztcbiAgICB9XG4gICAgbGV0IGs6IG51bWJlciA9IDEwMDA7XG4gICAgbGV0IHNpemVzOiBzdHJpbmdbXSA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddO1xuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcbiAgICAvLyBpZiBsZXNzIHRoYW4gMVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKHByZWNpc2lvbikpICsgJyAnICsgc2l6ZXNbaV07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RpZ2l0cycsXG59KVxuXG5leHBvcnQgY2xhc3MgVGREaWdpdHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgcHJpdmF0ZSBfZGVjaW1hbFBpcGU6IERlY2ltYWxQaXBlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyA9ICdlbicpIHtcbiAgICB0aGlzLl9kZWNpbWFsUGlwZSA9IG5ldyBEZWNpbWFsUGlwZSh0aGlzLl9sb2NhbGUpO1xuICB9XG5cbiAgLyogYGRpZ2l0c2AgbmVlZHMgdG8gYmUgdHlwZSBgZGlnaXRzOiBhbnlgIG9yIFR5cGVTY3JpcHQgY29tcGxhaW5zICovXG4gIHRyYW5zZm9ybShkaWdpdHM6IGFueSwgcHJlY2lzaW9uOiBudW1iZXIgPSAxKTogc3RyaW5nIHtcbiAgICBpZiAoZGlnaXRzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAnO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VJbnQoZGlnaXRzLCAxMCkpKSB7XG4gICAgICAvKiBJZiBub3QgYSB2YWxpZCBudW1iZXIsIHJldHVybiB0aGUgdmFsdWUgKi9cbiAgICAgIHJldHVybiBkaWdpdHM7XG4gICAgfSBlbHNlIGlmIChkaWdpdHMgPCAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjaW1hbFBpcGUudHJhbnNmb3JtKGRpZ2l0cy50b0ZpeGVkKHByZWNpc2lvbikpO1xuICAgIH1cbiAgICBsZXQgazogbnVtYmVyID0gMTAwMDtcbiAgICBsZXQgc2l6ZXM6IHN0cmluZ1tdID0gWycnLCAnSycsICdNJywgJ0InLCAnVCcsICdRJ107XG4gICAgbGV0IGk6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coZGlnaXRzKSAvIE1hdGgubG9nKGspKTtcbiAgICBsZXQgc2l6ZTogc3RyaW5nID0gc2l6ZXNbaV07XG4gICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxQaXBlLnRyYW5zZm9ybShwYXJzZUZsb2F0KChkaWdpdHMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSkgKyAoc2l6ZSA/ICcgJyArIHNpemUgOiAnJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJ1bmNhdGUnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkVHJ1bmNhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnksIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLy8gVHJ1bmNhdGVcbiAgICBsZXQgdHJ1bmNhdGVkOiBzdHJpbmcgPSB0ZXh0LnN1YnN0cigwLCBsZW5ndGgpO1xuXG4gICAgaWYgKHRleHQubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICBpZiAodHJ1bmNhdGVkLmxhc3RJbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgIHRydW5jYXRlZCA9IHRydW5jYXRlZC50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIHRydW5jYXRlZCArPSAnw6LCgMKmJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyUGF0aFNlcnZpY2Uge1xucHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzUm91dGU6IHN0cmluZyA9ICcvJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLl9yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoKGU6IGFueSkgPT4gZSBpbnN0YW5jZW9mIFJvdXRlc1JlY29nbml6ZWQpLFxuICAgICAgcGFpcndpc2UoKSxcbiAgICApLnN1YnNjcmliZSgoZTogYW55W10pID0+IHtcbiAgICAgIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlID0gZVswXS51cmxBZnRlclJlZGlyZWN0cztcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICogVXRpbGl0eSBmdW5jdGlvbiB0byBnZXQgdGhlIHJvdXRlIHRoZSB1c2VyIHByZXZpb3VzbHkgd2VudCB0b1xuICAqIGdvb2QgZm9yIHVzZSBpbiBhIFwiYmFjayBidXR0b25cIlxuICAqL1xuICBnZXRQcmV2aW91c1JvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE2LTIwMTcgYnkgVGVyYWRhdGEgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBURVJBREFUQSBDT1JQT1JBVElPTiBDT05GSURFTlRJQUwgQU5EIFRSQURFIFNFQ1JFVFxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEljb25TZXJ2aWNlIHtcblxuICBwcml2YXRlIF9pY29uczogc3RyaW5nW10gPSBbXG4gICAgJ2FjY2Vzc19hbGFybScsXG4gICAgJ2FjY2Vzc19hbGFybXMnLFxuICAgICdhY2Nlc3NfdGltZScsXG4gICAgJ2FjY2Vzc2liaWxpdHknLFxuICAgICdhY2NvdW50X2JhbGFuY2UnLFxuICAgICdhY2NvdW50X2JhbGFuY2Vfd2FsbGV0JyxcbiAgICAnYWNjb3VudF9ib3gnLFxuICAgICdhY2NvdW50X2NpcmNsZScsXG4gICAgJ2FkZCcsXG4gICAgJ2FkZF9hbGFybScsXG4gICAgJ2FkZF9ib3gnLFxuICAgICdhZGRfY2lyY2xlJyxcbiAgICAnYWRkX2NpcmNsZV9vdXRsaW5lJyxcbiAgICAnYWRkX3Nob3BwaW5nX2NhcnQnLFxuICAgICdhZGRfdG9fcGhvdG9zJyxcbiAgICAnYWRqdXN0JyxcbiAgICAnYWxhcm0nLFxuICAgICdhbGFybV9hZGQnLFxuICAgICdhbGFybV9vZmYnLFxuICAgICdhbGFybV9vbicsXG4gICAgJ2FsYnVtJyxcbiAgICAnYW5kcm9pZCcsXG4gICAgJ2Fubm91bmNlbWVudCcsXG4gICAgJ2FwcHMnLFxuICAgICdhcmNoaXZlJyxcbiAgICAnYXJyb3dfYmFjaycsXG4gICAgJ2Fycm93X2Ryb3BfZG93bicsXG4gICAgJ2Fycm93X2Ryb3BfZG93bl9jaXJjbGUnLFxuICAgICdhcnJvd19kcm9wX3VwJyxcbiAgICAnYXJyb3dfZm9yd2FyZCcsXG4gICAgJ2FzcGVjdF9yYXRpbycsXG4gICAgJ2Fzc2Vzc21lbnQnLFxuICAgICdhc3NpZ25tZW50JyxcbiAgICAnYXNzaWdubWVudF9pbmQnLFxuICAgICdhc3NpZ25tZW50X2xhdGUnLFxuICAgICdhc3NpZ25tZW50X3JldHVybicsXG4gICAgJ2Fzc2lnbm1lbnRfcmV0dXJuZWQnLFxuICAgICdhc3NpZ25tZW50X3R1cm5lZF9pbicsXG4gICAgJ2Fzc2lzdGFudF9waG90bycsXG4gICAgJ2F0dGFjaF9maWxlJyxcbiAgICAnYXR0YWNoX21vbmV5JyxcbiAgICAnYXR0YWNobWVudCcsXG4gICAgJ2F1ZGlvdHJhY2snLFxuICAgICdhdXRvcmVuZXcnLFxuICAgICdhdl90aW1lcicsXG4gICAgJ2JhY2tzcGFjZScsXG4gICAgJ2JhY2t1cCcsXG4gICAgJ2JhdHRlcnlfYWxlcnQnLFxuICAgICdiYXR0ZXJ5X2NoYXJnaW5nX2Z1bGwnLFxuICAgICdiYXR0ZXJ5X2Z1bGwnLFxuICAgICdiYXR0ZXJ5X3N0ZCcsXG4gICAgJ2JhdHRlcnlfdW5rbm93bicsXG4gICAgJ2JlZW5oZXJlJyxcbiAgICAnYmxvY2snLFxuICAgICdibHVldG9vdGgnLFxuICAgICdibHVldG9vdGhfYXVkaW8nLFxuICAgICdibHVldG9vdGhfY29ubmVjdGVkJyxcbiAgICAnYmx1ZXRvb3RoX2Rpc2FibGVkJyxcbiAgICAnYmx1ZXRvb3RoX3NlYXJjaGluZycsXG4gICAgJ2JsdXJfY2lyY3VsYXInLFxuICAgICdibHVyX2xpbmVhcicsXG4gICAgJ2JsdXJfb2ZmJyxcbiAgICAnYmx1cl9vbicsXG4gICAgJ2Jvb2snLFxuICAgICdib29rbWFyaycsXG4gICAgJ2Jvb2ttYXJrX2JvcmRlcicsXG4gICAgJ2JvcmRlcl9hbGwnLFxuICAgICdib3JkZXJfYm90dG9tJyxcbiAgICAnYm9yZGVyX2NsZWFyJyxcbiAgICAnYm9yZGVyX2NvbG9yJyxcbiAgICAnYm9yZGVyX2hvcml6b250YWwnLFxuICAgICdib3JkZXJfaW5uZXInLFxuICAgICdib3JkZXJfbGVmdCcsXG4gICAgJ2JvcmRlcl9vdXRlcicsXG4gICAgJ2JvcmRlcl9yaWdodCcsXG4gICAgJ2JvcmRlcl9zdHlsZScsXG4gICAgJ2JvcmRlcl90b3AnLFxuICAgICdib3JkZXJfdmVydGljYWwnLFxuICAgICdicmlnaHRuZXNzXzEnLFxuICAgICdicmlnaHRuZXNzXzInLFxuICAgICdicmlnaHRuZXNzXzMnLFxuICAgICdicmlnaHRuZXNzXzQnLFxuICAgICdicmlnaHRuZXNzXzUnLFxuICAgICdicmlnaHRuZXNzXzYnLFxuICAgICdicmlnaHRuZXNzXzcnLFxuICAgICdicmlnaHRuZXNzX2F1dG8nLFxuICAgICdicmlnaHRuZXNzX2hpZ2gnLFxuICAgICdicmlnaHRuZXNzX2xvdycsXG4gICAgJ2JyaWdodG5lc3NfbWVkaXVtJyxcbiAgICAnYnJva2VuX2ltYWdlJyxcbiAgICAnYnJ1c2gnLFxuICAgICdidWdfcmVwb3J0JyxcbiAgICAnYnVpbGQnLFxuICAgICdidXNpbmVzcycsXG4gICAgJ2NhY2hlZCcsXG4gICAgJ2Nha2UnLFxuICAgICdjYWxsJyxcbiAgICAnY2FsbF9lbmQnLFxuICAgICdjYWxsX21hZGUnLFxuICAgICdjYWxsX21lcmdlJyxcbiAgICAnY2FsbF9taXNzZWQnLFxuICAgICdjYWxsX3JlY2VpdmVkJyxcbiAgICAnY2FsbF9zcGxpdCcsXG4gICAgJ2NhbWVyYScsXG4gICAgJ2NhbWVyYV9hbHQnLFxuICAgICdjYW1lcmFfZnJvbnQnLFxuICAgICdjYW1lcmFfcmVhcicsXG4gICAgJ2NhbWVyYV9yb2xsJyxcbiAgICAnY2FuY2VsJyxcbiAgICAnY2FzdCcsXG4gICAgJ2Nhc3RfY29ubmVjdGVkJyxcbiAgICAnY2VudGVyX2ZvY3VzX3N0cm9uZycsXG4gICAgJ2NlbnRlcl9mb2N1c193ZWFrJyxcbiAgICAnY2hhdCcsXG4gICAgJ2NoZWNrJyxcbiAgICAnY2hlY2tfYm94JyxcbiAgICAnY2hlY2tfYm94X291dGxpbmVfYmxhbmsnLFxuICAgICdjaGVja19jaXJjbGUnLFxuICAgICdjaGV2cm9uX2xlZnQnLFxuICAgICdjaGV2cm9uX3JpZ2h0JyxcbiAgICAnY2xhc3MnLFxuICAgICdjbGVhcicsXG4gICAgJ2NsZWFyX2FsbCcsXG4gICAgJ2Nsb3NlJyxcbiAgICAnY2xvc2VkX2NhcHRpb24nLFxuICAgICdjbG91ZCcsXG4gICAgJ2Nsb3VkX2NpcmNsZScsXG4gICAgJ2Nsb3VkX2RvbmUnLFxuICAgICdjbG91ZF9kb3dubG9hZCcsXG4gICAgJ2Nsb3VkX29mZicsXG4gICAgJ2Nsb3VkX3F1ZXVlJyxcbiAgICAnY2xvdWRfdXBsb2FkJyxcbiAgICAnY29sbGVjdGlvbnMnLFxuICAgICdjb2xsZWN0aW9uc19ib29rbWFyaycsXG4gICAgJ2NvbG9yX2xlbnMnLFxuICAgICdjb2xvcml6ZScsXG4gICAgJ2NvbW1lbnQnLFxuICAgICdjb21wYXJlJyxcbiAgICAnY29tcHV0ZXInLFxuICAgICdjb25maXJtYXRpb25fbnVtYmVyJyxcbiAgICAnY29udGFjdF9waG9uZScsXG4gICAgJ2NvbnRhY3RzJyxcbiAgICAnY29udGVudF9jb3B5JyxcbiAgICAnY29udGVudF9jdXQnLFxuICAgICdjb250ZW50X3Bhc3RlJyxcbiAgICAnY29udHJvbF9wb2ludCcsXG4gICAgJ2NvbnRyb2xfcG9pbnRfZHVwbGljYXRlJyxcbiAgICAnY3JlYXRlJyxcbiAgICAnY3JlZGl0X2NhcmQnLFxuICAgICdjcm9wJyxcbiAgICAnY3JvcF8xNl85JyxcbiAgICAnY3JvcF8zXzInLFxuICAgICdjcm9wXzVfNCcsXG4gICAgJ2Nyb3BfN181JyxcbiAgICAnY3JvcF9kaW4nLFxuICAgICdjcm9wX2ZyZWUnLFxuICAgICdjcm9wX2xhbmRzY2FwZScsXG4gICAgJ2Nyb3Bfb3JpZ2luYWwnLFxuICAgICdjcm9wX3BvcnRyYWl0JyxcbiAgICAnY3JvcF9zcXVhcmUnLFxuICAgICdkYXNoYm9hcmQnLFxuICAgICdkYXRhX3VzYWdlJyxcbiAgICAnZGVoYXplJyxcbiAgICAnZGVsZXRlJyxcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgICdkZXNrdG9wX21hYycsXG4gICAgJ2Rlc2t0b3Bfd2luZG93cycsXG4gICAgJ2RldGFpbHMnLFxuICAgICdkZXZlbG9wZXJfYm9hcmQnLFxuICAgICdkZXZlbG9wZXJfbW9kZScsXG4gICAgJ2RldmljZV9odWInLFxuICAgICdkZXZpY2VzJyxcbiAgICAnZGlhbGVyX3NpcCcsXG4gICAgJ2RpYWxwYWQnLFxuICAgICdkaXJlY3Rpb25zJyxcbiAgICAnZGlyZWN0aW9uc19iaWtlJyxcbiAgICAnZGlyZWN0aW9uc19ib2F0JyxcbiAgICAnZGlyZWN0aW9uc19idXMnLFxuICAgICdkaXJlY3Rpb25zX2NhcicsXG4gICAgJ2RpcmVjdGlvbnNfcmFpbHdheScsXG4gICAgJ2RpcmVjdGlvbnNfcnVuJyxcbiAgICAnZGlyZWN0aW9uc19zdWJ3YXknLFxuICAgICdkaXJlY3Rpb25zX3RyYW5zaXQnLFxuICAgICdkaXJlY3Rpb25zX3dhbGsnLFxuICAgICdkaXNjX2Z1bGwnLFxuICAgICdkbnMnLFxuICAgICdkb19ub3RfZGlzdHVyYicsXG4gICAgJ2RvX25vdF9kaXN0dXJiX2FsdCcsXG4gICAgJ2RvY2snLFxuICAgICdkb21haW4nLFxuICAgICdkb25lJyxcbiAgICAnZG9uZV9hbGwnLFxuICAgICdkcmFmdHMnLFxuICAgICdkcml2ZV9ldGEnLFxuICAgICdkdnInLFxuICAgICdlZGl0JyxcbiAgICAnZWplY3QnLFxuICAgICdlbWFpbCcsXG4gICAgJ2VxdWFsaXplcicsXG4gICAgJ2Vycm9yJyxcbiAgICAnZXJyb3Jfb3V0bGluZScsXG4gICAgJ2V2ZW50JyxcbiAgICAnZXZlbnRfYXZhaWxhYmxlJyxcbiAgICAnZXZlbnRfYnVzeScsXG4gICAgJ2V2ZW50X25vdGUnLFxuICAgICdldmVudF9zZWF0JyxcbiAgICAnZXhpdF90b19hcHAnLFxuICAgICdleHBhbmRfbGVzcycsXG4gICAgJ2V4cGFuZF9tb3JlJyxcbiAgICAnZXhwbGljaXQnLFxuICAgICdleHBsb3JlJyxcbiAgICAnZXhwb3N1cmUnLFxuICAgICdleHBvc3VyZV9uZWdfMScsXG4gICAgJ2V4cG9zdXJlX25lZ18yJyxcbiAgICAnZXhwb3N1cmVfcGx1c18xJyxcbiAgICAnZXhwb3N1cmVfcGx1c18yJyxcbiAgICAnZXhwb3N1cmVfemVybycsXG4gICAgJ2V4dGVuc2lvbicsXG4gICAgJ2ZhY2UnLFxuICAgICdmYXN0X2ZvcndhcmQnLFxuICAgICdmYXN0X3Jld2luZCcsXG4gICAgJ2Zhdm9yaXRlJyxcbiAgICAnZmF2b3JpdGVfYm9yZGVyJyxcbiAgICAnZmVlZGJhY2snLFxuICAgICdmaWxlX2Rvd25sb2FkJyxcbiAgICAnZmlsZV91cGxvYWQnLFxuICAgICdmaWx0ZXInLFxuICAgICdmaWx0ZXJfMScsXG4gICAgJ2ZpbHRlcl8yJyxcbiAgICAnZmlsdGVyXzMnLFxuICAgICdmaWx0ZXJfNCcsXG4gICAgJ2ZpbHRlcl81JyxcbiAgICAnZmlsdGVyXzYnLFxuICAgICdmaWx0ZXJfNycsXG4gICAgJ2ZpbHRlcl84JyxcbiAgICAnZmlsdGVyXzknLFxuICAgICdmaWx0ZXJfOV9wbHVzJyxcbiAgICAnZmlsdGVyX2JfYW5kX3cnLFxuICAgICdmaWx0ZXJfY2VudGVyX2ZvY3VzJyxcbiAgICAnZmlsdGVyX2RyYW1hJyxcbiAgICAnZmlsdGVyX2ZyYW1lcycsXG4gICAgJ2ZpbHRlcl9oZHInLFxuICAgICdmaWx0ZXJfbGlzdCcsXG4gICAgJ2ZpbHRlcl9ub25lJyxcbiAgICAnZmlsdGVyX3RpbHRfc2hpZnQnLFxuICAgICdmaWx0ZXJfdmludGFnZScsXG4gICAgJ2ZpbmRfaW5fcGFnZScsXG4gICAgJ2ZpbmRfcmVwbGFjZScsXG4gICAgJ2ZsYWcnLFxuICAgICdmbGFyZScsXG4gICAgJ2ZsYXNoX2F1dG8nLFxuICAgICdmbGFzaF9vZmYnLFxuICAgICdmbGFzaF9vbicsXG4gICAgJ2ZsaWdodCcsXG4gICAgJ2ZsaWdodF9sYW5kJyxcbiAgICAnZmxpZ2h0X3Rha2VvZmYnLFxuICAgICdmbGlwJyxcbiAgICAnZmxpcF90b19iYWNrJyxcbiAgICAnZmxpcF90b19mcm9udCcsXG4gICAgJ2ZvbGRlcicsXG4gICAgJ2ZvbGRlcl9vcGVuJyxcbiAgICAnZm9sZGVyX3NoYXJlZCcsXG4gICAgJ2ZvbGRlcl9zcGVjaWFsJyxcbiAgICAnZm9udF9kb3dubG9hZCcsXG4gICAgJ2Zvcm1hdF9hbGlnbl9jZW50ZXInLFxuICAgICdmb3JtYXRfYWxpZ25fanVzdGlmeScsXG4gICAgJ2Zvcm1hdF9hbGlnbl9sZWZ0JyxcbiAgICAnZm9ybWF0X2FsaWduX3JpZ2h0JyxcbiAgICAnZm9ybWF0X2JvbGQnLFxuICAgICdmb3JtYXRfY2xlYXInLFxuICAgICdmb3JtYXRfY29sb3JfZmlsbCcsXG4gICAgJ2Zvcm1hdF9jb2xvcl9yZXNldCcsXG4gICAgJ2Zvcm1hdF9jb2xvcl90ZXh0JyxcbiAgICAnZm9ybWF0X2luZGVudF9kZWNyZWFzZScsXG4gICAgJ2Zvcm1hdF9pbmRlbnRfaW5jcmVhc2UnLFxuICAgICdmb3JtYXRfaXRhbGljJyxcbiAgICAnZm9ybWF0X2xpbmVfc3BhY2luZycsXG4gICAgJ2Zvcm1hdF9saXN0X2J1bGxldGVkJyxcbiAgICAnZm9ybWF0X2xpc3RfbnVtYmVyZWQnLFxuICAgICdmb3JtYXRfcGFpbnQnLFxuICAgICdmb3JtYXRfcXVvdGUnLFxuICAgICdmb3JtYXRfc2l6ZScsXG4gICAgJ2Zvcm1hdF9zdHJpa2V0aHJvdWdoJyxcbiAgICAnZm9ybWF0X3RleHRkaXJlY3Rpb25fbF90b19yJyxcbiAgICAnZm9ybWF0X3RleHRkaXJlY3Rpb25fcl90b19sJyxcbiAgICAnZm9ybWF0X3VuZGVybGluZWQnLFxuICAgICdmb3J1bScsXG4gICAgJ2ZvcndhcmQnLFxuICAgICdmb3J3YXJkXzEwJyxcbiAgICAnZm9yd2FyZF8zMCcsXG4gICAgJ2ZvcndhcmRfNScsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdmdWxsc2NyZWVuX2V4aXQnLFxuICAgICdmdW5jdGlvbnMnLFxuICAgICdnYW1lcGFkJyxcbiAgICAnZ2FtZXMnLFxuICAgICdnZXN0dXJlJyxcbiAgICAnZ2V0X2FwcCcsXG4gICAgJ2dpZicsXG4gICAgJ2dwc19maXhlZCcsXG4gICAgJ2dwc19ub3RfZml4ZWQnLFxuICAgICdncHNfb2ZmJyxcbiAgICAnZ3JhZGUnLFxuICAgICdncmFkaWVudCcsXG4gICAgJ2dyYWluJyxcbiAgICAnZ3JhcGhpY19lcScsXG4gICAgJ2dyaWRfb2ZmJyxcbiAgICAnZ3JpZF9vbicsXG4gICAgJ2dyb3VwJyxcbiAgICAnZ3JvdXBfYWRkJyxcbiAgICAnZ3JvdXBfd29yaycsXG4gICAgJ2hkJyxcbiAgICAnaGRyX29mZicsXG4gICAgJ2hkcl9vbicsXG4gICAgJ2hkcl9zdHJvbmcnLFxuICAgICdoZHJfd2VhaycsXG4gICAgJ2hlYWRzZXQnLFxuICAgICdoZWFkc2V0X21pYycsXG4gICAgJ2hlYWxpbmcnLFxuICAgICdoZWFyaW5nJyxcbiAgICAnaGVscCcsXG4gICAgJ2hlbHBfb3V0bGluZScsXG4gICAgJ2hpZ2hfcXVhbGl0eScsXG4gICAgJ2hpZ2hsaWdodF9vZmYnLFxuICAgICdoaXN0b3J5JyxcbiAgICAnaG9tZScsXG4gICAgJ2hvdGVsJyxcbiAgICAnaG91cmdsYXNzX2VtcHR5JyxcbiAgICAnaG91cmdsYXNzX2Z1bGwnLFxuICAgICdodHRwJyxcbiAgICAnaHR0cHMnLFxuICAgICdpbWFnZScsXG4gICAgJ2ltYWdlX2FzcGVjdF9yYXRpbycsXG4gICAgJ2ltcG9ydF9leHBvcnQnLFxuICAgICdpbmJveCcsXG4gICAgJ2luZGV0ZXJtaW5hdGVfY2hlY2tfYm94JyxcbiAgICAnaW5mbycsXG4gICAgJ2luZm9fb3V0bGluZScsXG4gICAgJ2lucHV0JyxcbiAgICAnaW5zZXJ0X2NoYXJ0JyxcbiAgICAnaW5zZXJ0X2NvbW1lbnQnLFxuICAgICdpbnNlcnRfZHJpdmVfZmlsZScsXG4gICAgJ2luc2VydF9lbW90aWNvbicsXG4gICAgJ2luc2VydF9pbnZpdGF0aW9uJyxcbiAgICAnaW5zZXJ0X2xpbmsnLFxuICAgICdpbnNlcnRfcGhvdG8nLFxuICAgICdpbnZlcnRfY29sb3JzJyxcbiAgICAnaW52ZXJ0X2NvbG9yc19vZmYnLFxuICAgICdpc28nLFxuICAgICdrZXlib2FyZCcsXG4gICAgJ2tleWJvYXJkX2Fycm93X2Rvd24nLFxuICAgICdrZXlib2FyZF9hcnJvd19sZWZ0JyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfcmlnaHQnLFxuICAgICdrZXlib2FyZF9hcnJvd191cCcsXG4gICAgJ2tleWJvYXJkX2JhY2tzcGFjZScsXG4gICAgJ2tleWJvYXJkX2NhcHNsb2NrJyxcbiAgICAna2V5Ym9hcmRfaGlkZScsXG4gICAgJ2tleWJvYXJkX3JldHVybicsXG4gICAgJ2tleWJvYXJkX3RhYicsXG4gICAgJ2tleWJvYXJkX3ZvaWNlJyxcbiAgICAnbGFiZWwnLFxuICAgICdsYWJlbF9vdXRsaW5lJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZ3VhZ2UnLFxuICAgICdsYXB0b3AnLFxuICAgICdsYXB0b3BfY2hyb21lYm9vaycsXG4gICAgJ2xhcHRvcF9tYWMnLFxuICAgICdsYXB0b3Bfd2luZG93cycsXG4gICAgJ2xhdW5jaCcsXG4gICAgJ2xheWVycycsXG4gICAgJ2xheWVyc19jbGVhcicsXG4gICAgJ2xlYWtfYWRkJyxcbiAgICAnbGVha19yZW1vdmUnLFxuICAgICdsZW5zJyxcbiAgICAnbGlicmFyeV9hZGQnLFxuICAgICdsaWJyYXJ5X2Jvb2tzJyxcbiAgICAnbGlicmFyeV9tdXNpYycsXG4gICAgJ2xpbmsnLFxuICAgICdsaXN0JyxcbiAgICAnbGl2ZV9oZWxwJyxcbiAgICAnbGl2ZV90dicsXG4gICAgJ2xvY2FsX2FjdGl2aXR5JyxcbiAgICAnbG9jYWxfYWlycG9ydCcsXG4gICAgJ2xvY2FsX2F0bScsXG4gICAgJ2xvY2FsX2JhcicsXG4gICAgJ2xvY2FsX2NhZmUnLFxuICAgICdsb2NhbF9jYXJfd2FzaCcsXG4gICAgJ2xvY2FsX2NvbnZlbmllbmNlX3N0b3JlJyxcbiAgICAnbG9jYWxfZGluaW5nJyxcbiAgICAnbG9jYWxfZHJpbmsnLFxuICAgICdsb2NhbF9mbG9yaXN0JyxcbiAgICAnbG9jYWxfZ2FzX3N0YXRpb24nLFxuICAgICdsb2NhbF9ncm9jZXJ5X3N0b3JlJyxcbiAgICAnbG9jYWxfaG9zcGl0YWwnLFxuICAgICdsb2NhbF9ob3RlbCcsXG4gICAgJ2xvY2FsX2xhdW5kcnlfc2VydmljZScsXG4gICAgJ2xvY2FsX2xpYnJhcnknLFxuICAgICdsb2NhbF9tYWxsJyxcbiAgICAnbG9jYWxfbW92aWVzJyxcbiAgICAnbG9jYWxfb2ZmZXInLFxuICAgICdsb2NhbF9wYXJraW5nJyxcbiAgICAnbG9jYWxfcGhhcm1hY3knLFxuICAgICdsb2NhbF9waG9uZScsXG4gICAgJ2xvY2FsX3BpenphJyxcbiAgICAnbG9jYWxfcGxheScsXG4gICAgJ2xvY2FsX3Bvc3Rfb2ZmaWNlJyxcbiAgICAnbG9jYWxfcHJpbnRzaG9wJyxcbiAgICAnbG9jYWxfc2VlJyxcbiAgICAnbG9jYWxfc2hpcHBpbmcnLFxuICAgICdsb2NhbF90YXhpJyxcbiAgICAnbG9jYXRpb25fY2l0eScsXG4gICAgJ2xvY2F0aW9uX2Rpc2FibGVkJyxcbiAgICAnbG9jYXRpb25fb2ZmJyxcbiAgICAnbG9jYXRpb25fb24nLFxuICAgICdsb2NhdGlvbl9zZWFyY2hpbmcnLFxuICAgICdsb2NrJyxcbiAgICAnbG9ja19vcGVuJyxcbiAgICAnbG9ja19vdXRsaW5lJyxcbiAgICAnbG9va3MnLFxuICAgICdsb29rc18zJyxcbiAgICAnbG9va3NfNCcsXG4gICAgJ2xvb2tzXzUnLFxuICAgICdsb29rc182JyxcbiAgICAnbG9va3Nfb25lJyxcbiAgICAnbG9va3NfdHdvJyxcbiAgICAnbG9vcCcsXG4gICAgJ2xvdXBlJyxcbiAgICAnbG95YWx0eScsXG4gICAgJ21haWwnLFxuICAgICdtYXAnLFxuICAgICdtYXJrdW5yZWFkJyxcbiAgICAnbWFya3VucmVhZF9tYWlsYm94JyxcbiAgICAnbWVtb3J5JyxcbiAgICAnbWVudScsXG4gICAgJ21lcmdlX3R5cGUnLFxuICAgICdtZXNzYWdlJyxcbiAgICAnbWljJyxcbiAgICAnbWljX25vbmUnLFxuICAgICdtaWNfb2ZmJyxcbiAgICAnbW1zJyxcbiAgICAnbW9kZV9jb21tZW50JyxcbiAgICAnbW9kZV9lZGl0JyxcbiAgICAnbW9uZXlfb2ZmJyxcbiAgICAnbW9ub2Nocm9tZV9waG90b3MnLFxuICAgICdtb29kJyxcbiAgICAnbW9vZF9iYWQnLFxuICAgICdtb3JlJyxcbiAgICAnbW9yZV9ob3JpeicsXG4gICAgJ21vcmVfdmVydCcsXG4gICAgJ21vdXNlJyxcbiAgICAnbW92aWUnLFxuICAgICdtb3ZpZV9jcmVhdGlvbicsXG4gICAgJ211c2ljX25vdGUnLFxuICAgICdteV9saWJyYXJ5X2FkZCcsXG4gICAgJ215X2xpYnJhcnlfYm9va3MnLFxuICAgICdteV9saWJyYXJ5X211c2ljJyxcbiAgICAnbXlfbG9jYXRpb24nLFxuICAgICduYXR1cmUnLFxuICAgICduYXR1cmVfcGVvcGxlJyxcbiAgICAnbmF2aWdhdGVfYmVmb3JlJyxcbiAgICAnbmF2aWdhdGVfbmV4dCcsXG4gICAgJ25hdmlnYXRpb24nLFxuICAgICduZXR3b3JrX2NlbGwnLFxuICAgICduZXR3b3JrX2xvY2tlZCcsXG4gICAgJ25ldHdvcmtfd2lmaScsXG4gICAgJ25ld19yZWxlYXNlcycsXG4gICAgJ25mYycsXG4gICAgJ25vX3NpbScsXG4gICAgJ25vdF9pbnRlcmVzdGVkJyxcbiAgICAnbm90ZV9hZGQnLFxuICAgICdub3RpZmljYXRpb25zJyxcbiAgICAnbm90aWZpY2F0aW9uc19hY3RpdmUnLFxuICAgICdub3RpZmljYXRpb25zX25vbmUnLFxuICAgICdub3RpZmljYXRpb25zX29mZicsXG4gICAgJ25vdGlmaWNhdGlvbnNfcGF1c2VkJyxcbiAgICAnb2ZmbGluZV9waW4nLFxuICAgICdvbmRlbWFuZF92aWRlbycsXG4gICAgJ29wZW5faW5fYnJvd3NlcicsXG4gICAgJ29wZW5faW5fbmV3JyxcbiAgICAnb3Blbl93aXRoJyxcbiAgICAncGFnZXMnLFxuICAgICdwYWdldmlldycsXG4gICAgJ3BhbGV0dGUnLFxuICAgICdwYW5vcmFtYScsXG4gICAgJ3Bhbm9yYW1hX2Zpc2hfZXllJyxcbiAgICAncGFub3JhbWFfaG9yaXpvbnRhbCcsXG4gICAgJ3Bhbm9yYW1hX3ZlcnRpY2FsJyxcbiAgICAncGFub3JhbWFfd2lkZV9hbmdsZScsXG4gICAgJ3BhcnR5X21vZGUnLFxuICAgICdwYXVzZScsXG4gICAgJ3BhdXNlX2NpcmNsZV9maWxsZWQnLFxuICAgICdwYXVzZV9jaXJjbGVfb3V0bGluZScsXG4gICAgJ3BheW1lbnQnLFxuICAgICdwZW9wbGUnLFxuICAgICdwZW9wbGVfb3V0bGluZScsXG4gICAgJ3Blcm1fY2FtZXJhX21pYycsXG4gICAgJ3Blcm1fY29udGFjdF9jYWxlbmRhcicsXG4gICAgJ3Blcm1fZGF0YV9zZXR0aW5nJyxcbiAgICAncGVybV9kZXZpY2VfaW5mb3JtYXRpb24nLFxuICAgICdwZXJtX2lkZW50aXR5JyxcbiAgICAncGVybV9tZWRpYScsXG4gICAgJ3Blcm1fcGhvbmVfbXNnJyxcbiAgICAncGVybV9zY2FuX3dpZmknLFxuICAgICdwZXJzb24nLFxuICAgICdwZXJzb25fYWRkJyxcbiAgICAncGVyc29uX291dGxpbmUnLFxuICAgICdwZXJzb25fcGluJyxcbiAgICAncGVyc29uYWxfdmlkZW8nLFxuICAgICdwaG9uZScsXG4gICAgJ3Bob25lX2FuZHJvaWQnLFxuICAgICdwaG9uZV9ibHVldG9vdGhfc3BlYWtlcicsXG4gICAgJ3Bob25lX2ZvcndhcmRlZCcsXG4gICAgJ3Bob25lX2luX3RhbGsnLFxuICAgICdwaG9uZV9pcGhvbmUnLFxuICAgICdwaG9uZV9sb2NrZWQnLFxuICAgICdwaG9uZV9taXNzZWQnLFxuICAgICdwaG9uZV9wYXVzZWQnLFxuICAgICdwaG9uZWxpbmsnLFxuICAgICdwaG9uZWxpbmtfZXJhc2UnLFxuICAgICdwaG9uZWxpbmtfbG9jaycsXG4gICAgJ3Bob25lbGlua19vZmYnLFxuICAgICdwaG9uZWxpbmtfcmluZycsXG4gICAgJ3Bob25lbGlua19zZXR1cCcsXG4gICAgJ3Bob3RvJyxcbiAgICAncGhvdG9fYWxidW0nLFxuICAgICdwaG90b19jYW1lcmEnLFxuICAgICdwaG90b19saWJyYXJ5JyxcbiAgICAncGhvdG9fc2l6ZV9zZWxlY3RfYWN0dWFsJyxcbiAgICAncGhvdG9fc2l6ZV9zZWxlY3RfbGFyZ2UnLFxuICAgICdwaG90b19zaXplX3NlbGVjdF9zbWFsbCcsXG4gICAgJ3BpY3R1cmVfYXNfcGRmJyxcbiAgICAncGljdHVyZV9pbl9waWN0dXJlJyxcbiAgICAncGluX2Ryb3AnLFxuICAgICdwbGFjZScsXG4gICAgJ3BsYXlfYXJyb3cnLFxuICAgICdwbGF5X2NpcmNsZV9maWxsZWQnLFxuICAgICdwbGF5X2NpcmNsZV9vdXRsaW5lJyxcbiAgICAncGxheV9mb3Jfd29yaycsXG4gICAgJ3BsYXlfc2hvcHBpbmdfYmFnJyxcbiAgICAncGxheWxpc3RfYWRkJyxcbiAgICAncGx1c19vbmUnLFxuICAgICdwb2xsJyxcbiAgICAncG9seW1lcicsXG4gICAgJ3BvcnRhYmxlX3dpZmlfb2ZmJyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3dlcicsXG4gICAgJ3Bvd2VyX2lucHV0JyxcbiAgICAncG93ZXJfc2V0dGluZ3NfbmV3JyxcbiAgICAncHJlc2VudF90b19hbGwnLFxuICAgICdwcmludCcsXG4gICAgJ3B1YmxpYycsXG4gICAgJ3B1Ymxpc2gnLFxuICAgICdxdWVyeV9idWlsZGVyJyxcbiAgICAncXVlc3Rpb25fYW5zd2VyJyxcbiAgICAncXVldWUnLFxuICAgICdxdWV1ZV9tdXNpYycsXG4gICAgJ3JhZGlvJyxcbiAgICAncmFkaW9fYnV0dG9uX2NoZWNrZWQnLFxuICAgICdyYWRpb19idXR0b25fdW5jaGVja2VkJyxcbiAgICAncmF0ZV9yZXZpZXcnLFxuICAgICdyZWNlaXB0JyxcbiAgICAncmVjZW50X2FjdG9ycycsXG4gICAgJ3JlZGVlbScsXG4gICAgJ3JlZG8nLFxuICAgICdyZWZyZXNoJyxcbiAgICAncmVtb3ZlJyxcbiAgICAncmVtb3ZlX2NpcmNsZScsXG4gICAgJ3JlbW92ZV9jaXJjbGVfb3V0bGluZScsXG4gICAgJ3JlbW92ZV9yZWRfZXllJyxcbiAgICAncmVvcmRlcicsXG4gICAgJ3JlcGVhdCcsXG4gICAgJ3JlcGVhdF9vbmUnLFxuICAgICdyZXBsYXknLFxuICAgICdyZXBsYXlfMTAnLFxuICAgICdyZXBsYXlfMzAnLFxuICAgICdyZXBsYXlfNScsXG4gICAgJ3JlcGx5JyxcbiAgICAncmVwbHlfYWxsJyxcbiAgICAncmVwb3J0JyxcbiAgICAncmVwb3J0X3Byb2JsZW0nLFxuICAgICdyZXN0YXVyYW50X21lbnUnLFxuICAgICdyZXN0b3JlJyxcbiAgICAncmluZ192b2x1bWUnLFxuICAgICdyb29tJyxcbiAgICAncm90YXRlXzkwX2RlZ3JlZXNfY2N3JyxcbiAgICAncm90YXRlX2xlZnQnLFxuICAgICdyb3RhdGVfcmlnaHQnLFxuICAgICdyb3V0ZXInLFxuICAgICdzYXRlbGxpdGUnLFxuICAgICdzYXZlJyxcbiAgICAnc2Nhbm5lcicsXG4gICAgJ3NjaGVkdWxlJyxcbiAgICAnc2Nob29sJyxcbiAgICAnc2NyZWVuX2xvY2tfbGFuZHNjYXBlJyxcbiAgICAnc2NyZWVuX2xvY2tfcG9ydHJhaXQnLFxuICAgICdzY3JlZW5fbG9ja19yb3RhdGlvbicsXG4gICAgJ3NjcmVlbl9yb3RhdGlvbicsXG4gICAgJ3NkX2NhcmQnLFxuICAgICdzZF9zdG9yYWdlJyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2VjdXJpdHknLFxuICAgICdzZWxlY3RfYWxsJyxcbiAgICAnc2VuZCcsXG4gICAgJ3NldHRpbmdzJyxcbiAgICAnc2V0dGluZ3NfYXBwbGljYXRpb25zJyxcbiAgICAnc2V0dGluZ3NfYmFja3VwX3Jlc3RvcmUnLFxuICAgICdzZXR0aW5nc19ibHVldG9vdGgnLFxuICAgICdzZXR0aW5nc19icmlnaHRuZXNzJyxcbiAgICAnc2V0dGluZ3NfY2VsbCcsXG4gICAgJ3NldHRpbmdzX2V0aGVybmV0JyxcbiAgICAnc2V0dGluZ3NfaW5wdXRfYW50ZW5uYScsXG4gICAgJ3NldHRpbmdzX2lucHV0X2NvbXBvbmVudCcsXG4gICAgJ3NldHRpbmdzX2lucHV0X2NvbXBvc2l0ZScsXG4gICAgJ3NldHRpbmdzX2lucHV0X2hkbWknLFxuICAgICdzZXR0aW5nc19pbnB1dF9zdmlkZW8nLFxuICAgICdzZXR0aW5nc19vdmVyc2NhbicsXG4gICAgJ3NldHRpbmdzX3Bob25lJyxcbiAgICAnc2V0dGluZ3NfcG93ZXInLFxuICAgICdzZXR0aW5nc19yZW1vdGUnLFxuICAgICdzZXR0aW5nc19zeXN0ZW1fZGF5ZHJlYW0nLFxuICAgICdzZXR0aW5nc192b2ljZScsXG4gICAgJ3NoYXJlJyxcbiAgICAnc2hvcCcsXG4gICAgJ3Nob3BfdHdvJyxcbiAgICAnc2hvcHBpbmdfYmFza2V0JyxcbiAgICAnc2hvcHBpbmdfY2FydCcsXG4gICAgJ3NodWZmbGUnLFxuICAgICdzaWduYWxfY2VsbHVsYXJfNF9iYXInLFxuICAgICdzaWduYWxfY2VsbHVsYXJfY29ubmVjdGVkX25vX2ludGVybmV0XzRfYmFyJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyX25vX3NpbScsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9udWxsJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyX29mZicsXG4gICAgJ3NpZ25hbF93aWZpXzRfYmFyJyxcbiAgICAnc2lnbmFsX3dpZmlfNF9iYXJfbG9jaycsXG4gICAgJ3NpZ25hbF93aWZpX29mZicsXG4gICAgJ3NpbV9jYXJkJyxcbiAgICAnc2ltX2NhcmRfYWxlcnQnLFxuICAgICdza2lwX25leHQnLFxuICAgICdza2lwX3ByZXZpb3VzJyxcbiAgICAnc2xpZGVzaG93JyxcbiAgICAnc21hcnRwaG9uZScsXG4gICAgJ3NtcycsXG4gICAgJ3Ntc19mYWlsZWQnLFxuICAgICdzbm9vemUnLFxuICAgICdzb3J0JyxcbiAgICAnc29ydF9ieV9hbHBoYScsXG4gICAgJ3NwYWNlX2JhcicsXG4gICAgJ3NwZWFrZXInLFxuICAgICdzcGVha2VyX2dyb3VwJyxcbiAgICAnc3BlYWtlcl9ub3RlcycsXG4gICAgJ3NwZWFrZXJfcGhvbmUnLFxuICAgICdzcGVsbGNoZWNrJyxcbiAgICAnc3RhcicsXG4gICAgJ3N0YXJfYm9yZGVyJyxcbiAgICAnc3Rhcl9oYWxmJyxcbiAgICAnc3RhcnMnLFxuICAgICdzdGF5X2N1cnJlbnRfbGFuZHNjYXBlJyxcbiAgICAnc3RheV9jdXJyZW50X3BvcnRyYWl0JyxcbiAgICAnc3RheV9wcmltYXJ5X2xhbmRzY2FwZScsXG4gICAgJ3N0YXlfcHJpbWFyeV9wb3J0cmFpdCcsXG4gICAgJ3N0b3AnLFxuICAgICdzdG9yYWdlJyxcbiAgICAnc3RvcmUnLFxuICAgICdzdG9yZV9tYWxsX2RpcmVjdG9yeScsXG4gICAgJ3N0cmFpZ2h0ZW4nLFxuICAgICdzdHJpa2V0aHJvdWdoX3MnLFxuICAgICdzdHlsZScsXG4gICAgJ3N1YmplY3QnLFxuICAgICdzdWJ0aXRsZXMnLFxuICAgICdzdXBlcnZpc29yX2FjY291bnQnLFxuICAgICdzdXJyb3VuZF9zb3VuZCcsXG4gICAgJ3N3YXBfY2FsbHMnLFxuICAgICdzd2FwX2hvcml6JyxcbiAgICAnc3dhcF92ZXJ0JyxcbiAgICAnc3dhcF92ZXJ0aWNhbF9jaXJjbGUnLFxuICAgICdzd2l0Y2hfY2FtZXJhJyxcbiAgICAnc3dpdGNoX3ZpZGVvJyxcbiAgICAnc3luYycsXG4gICAgJ3N5bmNfZGlzYWJsZWQnLFxuICAgICdzeW5jX3Byb2JsZW0nLFxuICAgICdzeXN0ZW1fdXBkYXRlJyxcbiAgICAnc3lzdGVtX3VwZGF0ZV9hbHQnLFxuICAgICd0YWInLFxuICAgICd0YWJfdW5zZWxlY3RlZCcsXG4gICAgJ3RhYmxldCcsXG4gICAgJ3RhYmxldF9hbmRyb2lkJyxcbiAgICAndGFibGV0X21hYycsXG4gICAgJ3RhZ19mYWNlcycsXG4gICAgJ3RhcF9hbmRfcGxheScsXG4gICAgJ3RlcnJhaW4nLFxuICAgICd0ZXh0X2Zvcm1hdCcsXG4gICAgJ3RleHRzbXMnLFxuICAgICd0ZXh0dXJlJyxcbiAgICAndGhlYXRlcnMnLFxuICAgICd0aHVtYl9kb3duJyxcbiAgICAndGh1bWJfdXAnLFxuICAgICd0aHVtYnNfdXBfZG93bicsXG4gICAgJ3RpbWVfdG9fbGVhdmUnLFxuICAgICd0aW1lbGFwc2UnLFxuICAgICd0aW1lcicsXG4gICAgJ3RpbWVyXzEwJyxcbiAgICAndGltZXJfMycsXG4gICAgJ3RpbWVyX29mZicsXG4gICAgJ3RvYycsXG4gICAgJ3RvZGF5JyxcbiAgICAndG9sbCcsXG4gICAgJ3RvbmFsaXR5JyxcbiAgICAndG95cycsXG4gICAgJ3RyYWNrX2NoYW5nZXMnLFxuICAgICd0cmFmZmljJyxcbiAgICAndHJhbnNmb3JtJyxcbiAgICAndHJhbnNsYXRlJyxcbiAgICAndHJlbmRpbmdfZG93bicsXG4gICAgJ3RyZW5kaW5nX2ZsYXQnLFxuICAgICd0cmVuZGluZ191cCcsXG4gICAgJ3R1bmUnLFxuICAgICd0dXJuZWRfaW4nLFxuICAgICd0dXJuZWRfaW5fbm90JyxcbiAgICAndHYnLFxuICAgICd1bmRvJyxcbiAgICAndW5mb2xkX2xlc3MnLFxuICAgICd1bmZvbGRfbW9yZScsXG4gICAgJ3VzYicsXG4gICAgJ3ZlcmlmaWVkX3VzZXInLFxuICAgICd2ZXJ0aWNhbF9hbGlnbl9ib3R0b20nLFxuICAgICd2ZXJ0aWNhbF9hbGlnbl9jZW50ZXInLFxuICAgICd2ZXJ0aWNhbF9hbGlnbl90b3AnLFxuICAgICd2aWJyYXRpb24nLFxuICAgICd2aWRlb19saWJyYXJ5JyxcbiAgICAndmlkZW9jYW0nLFxuICAgICd2aWRlb2NhbV9vZmYnLFxuICAgICd2aWV3X2FnZW5kYScsXG4gICAgJ3ZpZXdfYXJyYXknLFxuICAgICd2aWV3X2Nhcm91c2VsJyxcbiAgICAndmlld19jb2x1bW4nLFxuICAgICd2aWV3X2NvbWZ5JyxcbiAgICAndmlld19jb21wYWN0JyxcbiAgICAndmlld19kYXknLFxuICAgICd2aWV3X2hlYWRsaW5lJyxcbiAgICAndmlld19saXN0JyxcbiAgICAndmlld19tb2R1bGUnLFxuICAgICd2aWV3X3F1aWx0JyxcbiAgICAndmlld19zdHJlYW0nLFxuICAgICd2aWV3X3dlZWsnLFxuICAgICd2aWduZXR0ZScsXG4gICAgJ3Zpc2liaWxpdHknLFxuICAgICd2aXNpYmlsaXR5X29mZicsXG4gICAgJ3ZvaWNlX2NoYXQnLFxuICAgICd2b2ljZW1haWwnLFxuICAgICd2b2x1bWVfZG93bicsXG4gICAgJ3ZvbHVtZV9tdXRlJyxcbiAgICAndm9sdW1lX29mZicsXG4gICAgJ3ZvbHVtZV91cCcsXG4gICAgJ3Zwbl9rZXknLFxuICAgICd2cG5fbG9jaycsXG4gICAgJ3dhbGxwYXBlcicsXG4gICAgJ3dhcm5pbmcnLFxuICAgICd3YXRjaCcsXG4gICAgJ3diX2F1dG8nLFxuICAgICd3Yl9jbG91ZHknLFxuICAgICd3Yl9pbmNhbmRlc2NlbnQnLFxuICAgICd3Yl9pcmlkZXNjZW50JyxcbiAgICAnd2Jfc3VubnknLFxuICAgICd3YycsXG4gICAgJ3dlYicsXG4gICAgJ3doYXRzaG90JyxcbiAgICAnd2lkZ2V0cycsXG4gICAgJ3dpZmknLFxuICAgICd3aWZpX2xvY2snLFxuICAgICd3aWZpX3RldGhlcmluZycsXG4gICAgJ3dvcmsnLFxuICAgICd3cmFwX3RleHQnLFxuICAgICd5b3V0dWJlX3NlYXJjaGVkX2ZvcicsXG4gICAgJ3pvb21faW4nLFxuICAgICd6b29tX291dCcsXG4gIF07XG5cbiAgZ2V0IGljb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbnM7XG4gIH1cblxuICBmaWx0ZXIocXVlcnk6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5pY29ucy5maWx0ZXIoKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkgPyBxdWVyeS50b0xvd2VyQ2FzZSgpIDogJycpID4gLTE7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBGT1JNU1xuICovXG5cbi8vIEZvcm0gRGlyZWN0aXZlc1xuaW1wb3J0IHsgVGRBdXRvVHJpbURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybXMvYXV0by10cmltL2F1dG8tdHJpbS5kaXJlY3RpdmUnO1xuXG5jb25zdCBURF9GT1JNUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQXV0b1RyaW1EaXJlY3RpdmUsXG5dO1xuXG4vLyBWYWxpZGF0b3JzXG5jb25zdCBURF9WQUxJREFUT1JTOiBUeXBlPGFueT5bXSA9IFtcbl07XG5cbi8qKlxuICogUElQRVNcbiAqL1xuaW1wb3J0IHsgVGRUaW1lQWdvUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1hZ28vdGltZS1hZ28ucGlwZSc7XG5pbXBvcnQgeyBUZFRpbWVEaWZmZXJlbmNlUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1kaWZmZXJlbmNlL3RpbWUtZGlmZmVyZW5jZS5waXBlJztcbmltcG9ydCB7IFRkVGltZVVudGlsUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS11bnRpbC90aW1lLXVudGlsLnBpcGUnO1xuaW1wb3J0IHsgVGRCeXRlc1BpcGUgfSBmcm9tICcuL3BpcGVzL2J5dGVzL2J5dGVzLnBpcGUnO1xuaW1wb3J0IHsgVGREZWNpbWFsQnl0ZXNQaXBlIH0gZnJvbSAnLi9waXBlcy9kZWNpbWFsLWJ5dGVzL2RlY2ltYWwtYnl0ZXMucGlwZSc7XG5pbXBvcnQgeyBUZERpZ2l0c1BpcGUgfSBmcm9tICcuL3BpcGVzL2RpZ2l0cy9kaWdpdHMucGlwZSc7XG5pbXBvcnQgeyBUZFRydW5jYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdHJ1bmNhdGUvdHJ1bmNhdGUucGlwZSc7XG5cbmNvbnN0IFREX1BJUEVTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRUaW1lQWdvUGlwZSxcbiAgVGRUaW1lRGlmZmVyZW5jZVBpcGUsXG4gIFRkVGltZVVudGlsUGlwZSxcbiAgVGRCeXRlc1BpcGUsXG4gIFRkRGVjaW1hbEJ5dGVzUGlwZSxcbiAgVGREaWdpdHNQaXBlLFxuICBUZFRydW5jYXRlUGlwZSxcbl07XG5cbi8qKlxuICogU2VydmljZXNcbiAqL1xuXG5pbXBvcnQgeyBSb3V0ZXJQYXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcm91dGVyLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBJY29uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaWNvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfRk9STVMsXG4gICAgVERfUElQRVMsXG4gICAgVERfVkFMSURBVE9SUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBURF9GT1JNUyxcbiAgICBURF9QSVBFUyxcbiAgICBURF9WQUxJREFUT1JTLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBSb3V0ZXJQYXRoU2VydmljZSxcbiAgICBJY29uU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRDb21tb25Nb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbiAgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJUm90YXRlQW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICBkZWdyZWVzPzogbnVtYmVyO1xuICBlYXNlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkUm90YXRlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGRlZ3Jlc3NTdGFydDogRGVncmVlcyBvZiByb3RhdGlvbiB0aGF0IHRoZSBkb20gb2JqZWN0IHdpbGwgZW5kIHVwIGluIGR1cmluZyB0aGUgXCJmYWxzZVwiIHN0YXRlXG4gKiAqIGRlZ3JlZXNFbmQ6IERlZ3JlZXMgb2Ygcm90YXRpb24gdGhhdCB0aGUgZG9tIG9iamVjdCB3aWxsIGVuZCB1cCBpbiBkdXJpbmcgdGhlIFwidHJ1ZVwiIHN0YXRlXG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgcm90YXRpb24gYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkUm90YXRlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDkwIH19XCJcbiAqL1xuXG5leHBvcnQgY29uc3QgdGRSb3RhdGVBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUm90YXRlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoe3sgZGVncmVzc1N0YXJ0IH19ZGVnKScsXG4gIH0pLCB7IHBhcmFtczogeyBkZWdyZXNzU3RhcnQ6IDAgfX0pLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKHt7IGRlZ3JlZXNFbmQgfX1kZWcpJyxcbiAgfSksIHsgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDE4MCB9fSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMjUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1pbicgfX0pLFxuXSk7XG4iLCJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGFwc2VBbmltYXRpb24gZXh0ZW5kcyBJQW5pbWF0aW9uT3B0aW9ucyB7XG4gICBlYXNlT25DbG9zZT86IHN0cmluZztcbiAgIGVhc2VPbk9wZW4/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogY29uc3QgdGRDb2xsYXBzZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZU9uQ2xvc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBjbG9zaW5nLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICogKiBlYXNlT25PcGVuOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gb3BlbmluZy4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBjb2xsYXBzZS9leHBhbmQgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkQ29sbGFwc2VdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZENvbGxhcHNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZENvbGxhcHNlJywgW1xuICBzdGF0ZSgnMScsIHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcwJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0pKSxcbiAgc3RhdGUoJzAnLCAgc3R5bGUoe1xuICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICBvdmVyZmxvdzogQVVUT19TVFlMRSxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgc3R5bGUoe1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgIH0pLFxuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB9KSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLWluJyB9fSksXG4gIHRyYW5zaXRpb24oJzEgPT4gMCcsIFtcbiAgICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9KSxcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19Jywgc3R5bGUoe1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICAgIH0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcbiIsImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmFkZUluT3V0QW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICBlYXNlT25Jbj86IHN0cmluZztcbiAgZWFzZU9uT3V0Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkRmFkZUluT3V0QW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlT25JbjogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGZhZGluZyBpbi4gRGVmYXVsdHMgdG8gZWFzZS1pbi5cbiAqICogZWFzZU9uT3V0OiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gZmFkaW5nIG91dC4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBmYWRlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEZhZGVJbk91dF09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkRmFkZUluT3V0QW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEZhZGVJbk91dCcsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiBBVVRPX1NUWUxFLFxuICAgICAgdmlzaWJpbGl0eTogQVVUT19TVFlMRSxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2VPbkluIH19JyksXG4gICAgICBdKSxcbiAgICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlT25JbjogJ2Vhc2UtaW4nIH19KSxcbiAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZU9uT3V0IH19JyksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2VPbk91dDogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEJvdW5jZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgYm91bmNlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEJvdW5jZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkQm91bmNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEJvdW5jZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuMn0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjR9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKScsIG9mZnNldDogMC40M30pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuNTN9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKScsIG9mZnNldDogLjd9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjh9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC00cHgsIDApJywgb2Zmc2V0OiAuOX0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDEuMH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkRmxhc2hBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byA1MDAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlIGFuZCBkZWNlbGVyYXRlIHN0eWxlLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGZsYXNoIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEZsYXNoXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRGbGFzaEFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRGbGFzaCcsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgb3BhY2l0eTogMSxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgb3BhY2l0eTogMSxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwLjI1fSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDAuNX0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwLjc1fSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDEuMH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkSGVhZHNoYWtlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBoZWFkc2hha2UgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkSGVhZHNoYWtlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRIZWFkc2hha2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkSGVhZHNoYWtlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpJywgb2Zmc2V0OiAwLjA2NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyknLCBvZmZzZXQ6IDAuMTg1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpJywgb2Zmc2V0OiAwLjMxNX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyknLCBvZmZzZXQ6IDAuNDM1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwLjUwfSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG4iLCJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRKZWxsb0FuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgamVsbG8gYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkSmVsbG9dPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEplbGxvQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEplbGxvJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwLjAxMX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKScsIG9mZnNldDogMC4yMjJ9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpJywgb2Zmc2V0OiAwLjMzM30pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpJywgb2Zmc2V0OiAwLjQ0NH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpJywgb2Zmc2V0OiAwLjU1NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKScsIG9mZnNldDogMC42NjZ9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyknLCBvZmZzZXQ6IDAuNzc3fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKScsIG9mZnNldDogMC44ODh9KSxcbiAgICAgIF0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZFB1bHNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBwdWxzZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRQdWxzZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkUHVsc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUHVsc2UnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpJywgb2Zmc2V0OiAwLjUgfSksXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAxLjAgfSksXG4gICAgICAgIF0pLFxuICAgICAgKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG5jb25zdCBub29wOiBhbnkgPSAoKSA9PiB7XG4gIC8vIGVtcHR5IG1ldGhvZFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udHJvbFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHZhbHVlOiBhbnk7XG4gIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkNoYW5nZTogKF86IGFueSkgPT4gYW55O1xuICBvblRvdWNoZWQ6ICgpID0+IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSGFzQ2hhbmdlRGV0ZWN0b3JSZWYge1xuICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmO1xufVxuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGNvbXBvbmVudCB3aXRoIG5nTW9kZWwgc3VwcG9ydC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxJSGFzQ2hhbmdlRGV0ZWN0b3JSZWY+PlxuICAgICAgICAgICAgICAgIChiYXNlOiBULCBpbml0aWFsVmFsdWU/OiBhbnkpOiBDb25zdHJ1Y3RvcjxJQ29udHJvbFZhbHVlQWNjZXNzb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBpbml0aWFsVmFsdWUgaW5zdGFuY2VvZiBBcnJheSA/IE9iamVjdC5hc3NpZ24oW10sIGluaXRpYWxWYWx1ZSkgOiBpbml0aWFsVmFsdWU7XG4gICAgcHJpdmF0ZSBfc3ViamVjdFZhbHVlQ2hhbmdlczogU3ViamVjdDxhbnk+O1xuICAgIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpOyBcbiAgICAgIHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcyA9IHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMubmV4dCh2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKF86IGFueSkgPT4gbm9vcDtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiBub29wO1xuXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuLyoqIEludGVyZmFjZSB0byBpbXBsZW1lbnQgd2hlbiBhcHBseWluZyB0aGUgZGlzYWJsZWQgbWl4aW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNhbkRpc2FibGUge1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZDtcbn1cblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBjb21wb25lbnQgb3IgZGlyZWN0aXZlIHdpdGggYSBgZGlzYWJsZWRgIHByb3BlcnR5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPHt9Pj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPElDYW5EaXNhYmxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICBsZXQgbmV3VmFsdWU6IGJvb2xlYW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLm9uRGlzYWJsZWRDaGFuZ2UodGhpcy5fZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgLyoqIE5PVCBJTVBMRU1FTlRFRCwgdGhpcyBuZWVkcyB0byBiZSBvdmVycmlkZW4gYnkgc3ViY2xhc3NlcyBpZiBuZWVkZWQgKi9cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuLyoqIEludGVyZmFjZSB0byBpbXBsZW1lbnQgd2hlbiBhcHBseWluZyB0aGUgZGlzYWJsZWQgbWl4aW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNhbkRpc2FibGVSaXBwbGUge1xuICBkaXNhYmxlUmlwcGxlOiBib29sZWFuO1xuICBvbkRpc2FibGVSaXBwbGVDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQ7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSB3aXRoIGEgYGRpc2FibGVkYCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVSaXBwbGU8VCBleHRlbmRzIENvbnN0cnVjdG9yPHt9Pj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPElDYW5EaXNhYmxlUmlwcGxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9kaXNhYmxlUmlwcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVSaXBwbGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVJpcHBsZTtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVSaXBwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIGxldCBuZXdWYWx1ZTogYm9vbGVhbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fZGlzYWJsZVJpcHBsZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZVJpcHBsZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLm9uRGlzYWJsZVJpcHBsZUNoYW5nZSh0aGlzLl9kaXNhYmxlUmlwcGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGVSaXBwbGVDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgLyoqIE5PVCBJTVBMRU1FTlRFRCwgdGhpcyBuZWVkcyB0byBiZSBvdmVycmlkZW4gYnkgc3ViY2xhc3NlcyBpZiBuZWVkZWQgKi9cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgQ292YWxlbnRWYWxpZGF0b3JzIHtcbiAgc3RhdGljIG1pbihtaW5WYWx1ZTogYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIGxldCBmdW5jOiBWYWxpZGF0b3JGbiA9IChjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoISFWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIHx8ICghbWluVmFsdWUgJiYgbWluVmFsdWUgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBsZXQgdjogbnVtYmVyID0gYy52YWx1ZTtcbiAgICAgIHJldHVybiB2IDwgbWluVmFsdWUgP1xuICAgICAgICB7IG1pbjoge21pblZhbHVlOiBtaW5WYWx1ZSwgYWN0dWFsVmFsdWU6IHZ9IH0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuXG4gIHN0YXRpYyBtYXgobWF4VmFsdWU6IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBsZXQgZnVuYzogVmFsaWRhdG9yRm4gPSAoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgaWYgKCEhVmFsaWRhdG9ycy5yZXF1aXJlZChjKSB8fCAoIW1heFZhbHVlICYmIG1heFZhbHVlICE9PSAwKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgbGV0IHY6IG51bWJlciA9IGMudmFsdWU7XG4gICAgICByZXR1cm4gdiA+IG1heFZhbHVlID9cbiAgICAgICAgeyBtYXg6IHttYXhWYWx1ZTogbWF4VmFsdWUsIGFjdHVhbFZhbHVlOiB2fSB9IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICBzdGF0aWMgbnVtYmVyUmVxdWlyZWQoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiAoTnVtYmVyLmlzTmFOKGMudmFsdWUpKSA/XG4gICAgICAgIHsgcmVxdWlyZWQ6IHRydWUgfSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgfVxuXG59XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiTmdNb2RlbCIsIk9wdGlvbmFsIiwiSG9zdCIsIkhvc3RMaXN0ZW5lciIsIlBpcGUiLCJEZWNpbWFsUGlwZSIsIkluamVjdCIsIkxPQ0FMRV9JRCIsImZpbHRlciIsIlJvdXRlc1JlY29nbml6ZWQiLCJwYWlyd2lzZSIsIkluamVjdGFibGUiLCJSb3V0ZXIiLCJOZ01vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwidHJpZ2dlciIsInN0YXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiZ3JvdXAiLCJxdWVyeSIsImFuaW1hdGVDaGlsZCIsImFuaW1hdGUiLCJBVVRPX1NUWUxFIiwia2V5ZnJhbWVzIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJTdWJqZWN0IiwiY29lcmNlQm9vbGVhblByb3BlcnR5IiwiVmFsaWRhdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBU0UsNkJBQXdDLE1BQWU7WUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1NBQUk7Ozs7Ozs7OztRQU0zRCxvQ0FBTTs7Ozs7WUFETixVQUNPLEtBQVk7Z0JBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxRQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDbkQ7YUFDRjs7b0JBZkZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYztxQkFDekI7Ozs7O3dCQUpRQyxhQUFPLHVCQU9EQyxhQUFRLFlBQUlDLFNBQUk7Ozs7NkJBSzVCQyxpQkFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7UUFNbEMsMEJBQUM7S0FoQkQ7Ozs7OztBQ0pBO1FBRUE7U0FpRUM7Ozs7OztRQTdEQyxpQ0FBUzs7Ozs7WUFBVCxVQUFVLElBQVMsRUFBRSxTQUFlOztnQkFFbEMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztvQkFDbEIsR0FBRyxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Z0JBR25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ25CLE9BQU8sY0FBYyxDQUFDO2lCQUN2Qjs7OztvQkFJRyxTQUFTLEdBQVcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFH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