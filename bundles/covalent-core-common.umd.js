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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jb21tb24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vZm9ybXMvYXV0by10cmltL2F1dG8tdHJpbS5kaXJlY3RpdmUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90aW1lLWFnby90aW1lLWFnby5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvdGltZS1kaWZmZXJlbmNlL3RpbWUtZGlmZmVyZW5jZS5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvdGltZS11bnRpbC90aW1lLXVudGlsLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy9ieXRlcy9ieXRlcy5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vcGlwZXMvZGVjaW1hbC1ieXRlcy9kZWNpbWFsLWJ5dGVzLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy9kaWdpdHMvZGlnaXRzLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90cnVuY2F0ZS90cnVuY2F0ZS5waXBlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vc2VydmljZXMvcm91dGVyLXBhdGguc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3NlcnZpY2VzL2ljb24uc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2NvbW1vbi5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL3JvdGF0ZS9yb3RhdGUuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9jb2xsYXBzZS9jb2xsYXBzZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2ZhZGUvZmFkZUluT3V0LmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvYm91bmNlL2JvdW5jZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2ZsYXNoL2ZsYXNoLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvaGVhZHNoYWtlL2hlYWRzaGFrZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2plbGxvL2plbGxvLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvcHVsc2UvcHVsc2UuYW5pbWF0aW9uLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2JlaGF2aW9ycy9jb250cm9sLXZhbHVlLWFjY2Vzb3IubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9iZWhhdmlvcnMvZGlzYWJsZWQubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9iZWhhdmlvcnMvZGlzYWJsZS1yaXBwbGUubWl4aW4udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9mb3Jtcy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0TGlzdGVuZXIsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRBdXRvVHJpbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEF1dG9UcmltRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgX21vZGVsOiBOZ01vZGVsKSB7fVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QncyAoYmx1cikgZXZlbnQgYW5kIHRyaW1zIHZhbHVlLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIG9uQmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgJiYgdGhpcy5fbW9kZWwudmFsdWUgJiYgdHlwZW9mKHRoaXMuX21vZGVsLnZhbHVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX21vZGVsLnVwZGF0ZS5lbWl0KHRoaXMuX21vZGVsLnZhbHVlLnRyaW0oKSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVBZ28nLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRpbWVBZ29QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0aW1lOiBhbnksIHJlZmVyZW5jZT86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gQ29udmVydCB0aW1lIHRvIGRhdGUgb2JqZWN0IGlmIG5vdCBhbHJlYWR5XG4gICAgdGltZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCByZWY6IERhdGUgPSBuZXcgRGF0ZShyZWZlcmVuY2UpO1xuXG4gICAgLy8gSWYgbm90IGEgdmFsaWQgdGltZXN0YW1wLCByZXR1cm4gJ0ludmFsaWQgRGF0ZSdcbiAgICBpZiAoIXRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgLy8gRm9yIHVuaXQgdGVzdGluZywgd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRlY2xhcmUgYSBzdGF0aWMgc3RhcnQgdGltZVxuICAgIC8vIGZvciBjYWxjdWxhdGlvbnMsIG9yIGVsc2Ugc3BlZWQgb2YgdGVzdHMgY2FuIGJvcmsuXG4gICAgbGV0IHN0YXJ0VGltZTogbnVtYmVyID0gaXNOYU4ocmVmLmdldFRpbWUoKSkgPyBEYXRlLm5vdygpIDogcmVmLmdldFRpbWUoKTtcbiAgICBsZXQgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigoc3RhcnRUaW1lIC0gdGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG5cbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBzZWNvbmQgYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCA2MCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIHNlY29uZHMgYWdvJztcbiAgICB9XG4gICAgLy8gTWludXRlc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgbWludXRlIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBtaW51dGVzIGFnbyc7XG4gICAgfVxuICAgIC8vIEhvdXJzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBob3VyIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMjQpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBob3VycyBhZ28nO1xuICAgIH1cbiAgICAvLyBEYXlzXG4gICAgZGlmZiA9IGRpZmYgLyAyNDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBkYXkgYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAzMCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIGRheXMgYWdvJztcbiAgICB9XG4gICAgLy8gTW9udGhzXG4gICAgZGlmZiA9IGRpZmYgLyAzMDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSBtb250aCBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDEyKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgbW9udGhzIGFnbyc7XG4gICAgfVxuICAgIC8vIFllYXJzXG4gICAgZGlmZiA9IGRpZmYgLyAxMjtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnMSB5ZWFyIGFnbyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyB5ZWFycyBhZ28nO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lRGlmZmVyZW5jZScsXG59KVxuXG5leHBvcnQgY2xhc3MgVGRUaW1lRGlmZmVyZW5jZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHN0YXJ0OiBhbnksIGVuZD86IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHN0YXJ0VGltZTogRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0KTtcbiAgICBsZXQgZW5kVGltZTogRGF0ZTtcblxuICAgIGlmIChlbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICghc3RhcnRUaW1lLmdldFRpbWUoKSB8fCAhZW5kVGltZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG5cbiAgICBsZXQgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigoZW5kVGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgbGV0IGRheXM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCAqIDYwICogMjQpKTtcbiAgICBkaWZmID0gZGlmZiAtIChkYXlzICogKDYwICogNjAgKiAyNCkpO1xuXG4gICAgbGV0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjAgKiA2MCkpO1xuICAgIGRpZmYgPSBkaWZmIC0gKGhvdXJzICogKDYwICogNjApKTtcblxuICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjApKTtcbiAgICBkaWZmIC09IG1pbnV0ZXMgKiAoNjApO1xuXG4gICAgbGV0IHNlY29uZHM6IG51bWJlciA9IGRpZmY7XG5cbiAgICBsZXQgcGFkOiBzdHJpbmcgPSAnMDAnO1xuXG4gICAgbGV0IGRheXNGb3JtYXR0ZWQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaWYgKGRheXMgPiAwICYmIGRheXMgPCAyKSB7XG4gICAgICBkYXlzRm9ybWF0dGVkID0gJyBkYXkgLSAnO1xuICAgIH0gZWxzZSBpZiAoZGF5cyA+IDEpIHtcbiAgICAgIGRheXNGb3JtYXR0ZWQgPSAnIGRheXMgLSAnIDtcbiAgICB9XG5cbiAgICByZXR1cm4gKGRheXMgPiAwID8gZGF5cyArIGRheXNGb3JtYXR0ZWQgOiBkYXlzRm9ybWF0dGVkKSArXG4gICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChob3VycyArICcnKS5sZW5ndGgpICsgaG91cnMgKyAnOicgK1xuICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAobWludXRlcyArICcnKS5sZW5ndGgpICsgbWludXRlcyArICc6JyArXG4gICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChzZWNvbmRzICsgJycpLmxlbmd0aCkgKyBzZWNvbmRzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVVbnRpbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkVGltZVVudGlsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGltZTogYW55LCByZWZlcmVuY2U/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIENvbnZlcnQgdGltZSB0byBkYXRlIG9iamVjdCBpZiBub3QgYWxyZWFkeVxuICAgIHRpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgcmVmOiBEYXRlID0gbmV3IERhdGUocmVmZXJlbmNlKTtcblxuICAgIC8vIElmIG5vdCBhIHZhbGlkIHRpbWVzdGFtcCwgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gICAgaWYgKCF0aW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIC8vIEZvciB1bml0IHRlc3RpbmcsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZWNsYXJlIGEgc3RhdGljIHN0YXJ0IHRpbWVcbiAgICAvLyBmb3IgY2FsY3VsYXRpb25zLCBvciBlbHNlIHNwZWVkIG9mIHRlc3RzIGNhbiBib3JrLlxuICAgIGxldCBzdGFydFRpbWU6IG51bWJlciA9IGlzTmFOKHJlZi5nZXRUaW1lKCkpID8gRGF0ZS5ub3coKSA6IHJlZi5nZXRUaW1lKCk7XG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKHRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIDEwMDApO1xuXG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgc2Vjb25kJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCA2MCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgc2Vjb25kcyc7XG4gICAgfVxuICAgIC8vIE1pbnV0ZXNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIG1pbnV0ZSc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIG1pbnV0ZXMnO1xuICAgIH1cbiAgICAvLyBIb3Vyc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgaG91cic7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMjQpIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIGhvdXJzJztcbiAgICB9XG4gICAgLy8gRGF5c1xuICAgIGRpZmYgPSBkaWZmIC8gMjQ7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgZGF5JztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAzMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgZGF5cyc7XG4gICAgfVxuICAgIC8vIE1vbnRoc1xuICAgIGRpZmYgPSBkaWZmIC8gMzA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgbW9udGgnO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDEyKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBtb250aHMnO1xuICAgIH1cbiAgICAvLyBZZWFyc1xuICAgIGRpZmYgPSBkaWZmIC8gMTI7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgeWVhcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIHllYXJzJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYnl0ZXMnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qIGBieXRlc2AgbmVlZHMgdG8gYmUgYGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnNcbiAgVHJpZWQgYm90aCBgbnVtYmVyYCBhbmQgYG51bWJlciB8IHN0cmluZ2AgKi9cbiAgdHJhbnNmb3JtKGJ5dGVzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgaWYgKGJ5dGVzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAgQic7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChieXRlcywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJyAqL1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIGxldCBrOiBudW1iZXIgPSAxMDI0O1xuICAgIGxldCBzaXplczogc3RyaW5nW10gPSBbJ0InLCAnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddO1xuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcbiAgICAvLyBpZiBsZXNzIHRoYW4gMVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKHByZWNpc2lvbikpICsgJyAnICsgc2l6ZXNbaV07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZGVjaW1hbEJ5dGVzJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZERlY2ltYWxCeXRlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyogYGJ5dGVzYCBuZWVkcyB0byBiZSBgYW55YCBvciBUeXBlU2NyaXB0IGNvbXBsYWluc1xuICBUcmllZCBib3RoIGBudW1iZXJgIGFuZCBgbnVtYmVyIHwgc3RyaW5nYCAqL1xuICB0cmFuc2Zvcm0oYnl0ZXM6IGFueSwgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMCBCJztcbiAgICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlSW50KGJ5dGVzLCAxMCkpKSB7XG4gICAgICAvKiBJZiBub3QgYSB2YWxpZCBudW1iZXIsIHJldHVybiAnSW52YWxpZCBOdW1iZXInICovXG4gICAgICByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJztcbiAgICB9XG4gICAgbGV0IGs6IG51bWJlciA9IDEwMDA7XG4gICAgbGV0IHNpemVzOiBzdHJpbmdbXSA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddO1xuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcbiAgICAvLyBpZiBsZXNzIHRoYW4gMVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKHByZWNpc2lvbikpICsgJyAnICsgc2l6ZXNbaV07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RpZ2l0cycsXG59KVxuXG5leHBvcnQgY2xhc3MgVGREaWdpdHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgcHJpdmF0ZSBfZGVjaW1hbFBpcGU6IERlY2ltYWxQaXBlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyA9ICdlbicpIHtcbiAgICB0aGlzLl9kZWNpbWFsUGlwZSA9IG5ldyBEZWNpbWFsUGlwZSh0aGlzLl9sb2NhbGUpO1xuICB9XG5cbiAgLyogYGRpZ2l0c2AgbmVlZHMgdG8gYmUgdHlwZSBgZGlnaXRzOiBhbnlgIG9yIFR5cGVTY3JpcHQgY29tcGxhaW5zICovXG4gIHRyYW5zZm9ybShkaWdpdHM6IGFueSwgcHJlY2lzaW9uOiBudW1iZXIgPSAxKTogc3RyaW5nIHtcbiAgICBpZiAoZGlnaXRzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAnO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VJbnQoZGlnaXRzLCAxMCkpKSB7XG4gICAgICAvKiBJZiBub3QgYSB2YWxpZCBudW1iZXIsIHJldHVybiB0aGUgdmFsdWUgKi9cbiAgICAgIHJldHVybiBkaWdpdHM7XG4gICAgfSBlbHNlIGlmIChkaWdpdHMgPCAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjaW1hbFBpcGUudHJhbnNmb3JtKGRpZ2l0cy50b0ZpeGVkKHByZWNpc2lvbikpO1xuICAgIH1cbiAgICBsZXQgazogbnVtYmVyID0gMTAwMDtcbiAgICBsZXQgc2l6ZXM6IHN0cmluZ1tdID0gWycnLCAnSycsICdNJywgJ0InLCAnVCcsICdRJ107XG4gICAgbGV0IGk6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coZGlnaXRzKSAvIE1hdGgubG9nKGspKTtcbiAgICBsZXQgc2l6ZTogc3RyaW5nID0gc2l6ZXNbaV07XG4gICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxQaXBlLnRyYW5zZm9ybShwYXJzZUZsb2F0KChkaWdpdHMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSkgKyAoc2l6ZSA/ICcgJyArIHNpemUgOiAnJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJ1bmNhdGUnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkVHJ1bmNhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnksIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLy8gVHJ1bmNhdGVcbiAgICBsZXQgdHJ1bmNhdGVkOiBzdHJpbmcgPSB0ZXh0LnN1YnN0cigwLCBsZW5ndGgpO1xuXG4gICAgaWYgKHRleHQubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICBpZiAodHJ1bmNhdGVkLmxhc3RJbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgIHRydW5jYXRlZCA9IHRydW5jYXRlZC50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIHRydW5jYXRlZCArPSAnw6LCgMKmJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyUGF0aFNlcnZpY2Uge1xucHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzUm91dGU6IHN0cmluZyA9ICcvJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLl9yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoKGU6IGFueSkgPT4gZSBpbnN0YW5jZW9mIFJvdXRlc1JlY29nbml6ZWQpLFxuICAgICAgcGFpcndpc2UoKSxcbiAgICApLnN1YnNjcmliZSgoZTogYW55W10pID0+IHtcbiAgICAgIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlID0gZVswXS51cmxBZnRlclJlZGlyZWN0cztcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICogVXRpbGl0eSBmdW5jdGlvbiB0byBnZXQgdGhlIHJvdXRlIHRoZSB1c2VyIHByZXZpb3VzbHkgd2VudCB0b1xuICAqIGdvb2QgZm9yIHVzZSBpbiBhIFwiYmFjayBidXR0b25cIlxuICAqL1xuICBnZXRQcmV2aW91c1JvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE2LTIwMTcgYnkgVGVyYWRhdGEgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBURVJBREFUQSBDT1JQT1JBVElPTiBDT05GSURFTlRJQUwgQU5EIFRSQURFIFNFQ1JFVFxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEljb25TZXJ2aWNlIHtcblxuICBwcml2YXRlIF9pY29uczogc3RyaW5nW10gPSBbXG4gICAgJ2FjY2Vzc19hbGFybScsXG4gICAgJ2FjY2Vzc19hbGFybXMnLFxuICAgICdhY2Nlc3NfdGltZScsXG4gICAgJ2FjY2Vzc2liaWxpdHknLFxuICAgICdhY2NvdW50X2JhbGFuY2UnLFxuICAgICdhY2NvdW50X2JhbGFuY2Vfd2FsbGV0JyxcbiAgICAnYWNjb3VudF9ib3gnLFxuICAgICdhY2NvdW50X2NpcmNsZScsXG4gICAgJ2FkZCcsXG4gICAgJ2FkZF9hbGFybScsXG4gICAgJ2FkZF9ib3gnLFxuICAgICdhZGRfY2lyY2xlJyxcbiAgICAnYWRkX2NpcmNsZV9vdXRsaW5lJyxcbiAgICAnYWRkX3Nob3BwaW5nX2NhcnQnLFxuICAgICdhZGRfdG9fcGhvdG9zJyxcbiAgICAnYWRqdXN0JyxcbiAgICAnYWxhcm0nLFxuICAgICdhbGFybV9hZGQnLFxuICAgICdhbGFybV9vZmYnLFxuICAgICdhbGFybV9vbicsXG4gICAgJ2FsYnVtJyxcbiAgICAnYW5kcm9pZCcsXG4gICAgJ2Fubm91bmNlbWVudCcsXG4gICAgJ2FwcHMnLFxuICAgICdhcmNoaXZlJyxcbiAgICAnYXJyb3dfYmFjaycsXG4gICAgJ2Fycm93X2Ryb3BfZG93bicsXG4gICAgJ2Fycm93X2Ryb3BfZG93bl9jaXJjbGUnLFxuICAgICdhcnJvd19kcm9wX3VwJyxcbiAgICAnYXJyb3dfZm9yd2FyZCcsXG4gICAgJ2FzcGVjdF9yYXRpbycsXG4gICAgJ2Fzc2Vzc21lbnQnLFxuICAgICdhc3NpZ25tZW50JyxcbiAgICAnYXNzaWdubWVudF9pbmQnLFxuICAgICdhc3NpZ25tZW50X2xhdGUnLFxuICAgICdhc3NpZ25tZW50X3JldHVybicsXG4gICAgJ2Fzc2lnbm1lbnRfcmV0dXJuZWQnLFxuICAgICdhc3NpZ25tZW50X3R1cm5lZF9pbicsXG4gICAgJ2Fzc2lzdGFudF9waG90bycsXG4gICAgJ2F0dGFjaF9maWxlJyxcbiAgICAnYXR0YWNoX21vbmV5JyxcbiAgICAnYXR0YWNobWVudCcsXG4gICAgJ2F1ZGlvdHJhY2snLFxuICAgICdhdXRvcmVuZXcnLFxuICAgICdhdl90aW1lcicsXG4gICAgJ2JhY2tzcGFjZScsXG4gICAgJ2JhY2t1cCcsXG4gICAgJ2JhdHRlcnlfYWxlcnQnLFxuICAgICdiYXR0ZXJ5X2NoYXJnaW5nX2Z1bGwnLFxuICAgICdiYXR0ZXJ5X2Z1bGwnLFxuICAgICdiYXR0ZXJ5X3N0ZCcsXG4gICAgJ2JhdHRlcnlfdW5rbm93bicsXG4gICAgJ2JlZW5oZXJlJyxcbiAgICAnYmxvY2snLFxuICAgICdibHVldG9vdGgnLFxuICAgICdibHVldG9vdGhfYXVkaW8nLFxuICAgICdibHVldG9vdGhfY29ubmVjdGVkJyxcbiAgICAnYmx1ZXRvb3RoX2Rpc2FibGVkJyxcbiAgICAnYmx1ZXRvb3RoX3NlYXJjaGluZycsXG4gICAgJ2JsdXJfY2lyY3VsYXInLFxuICAgICdibHVyX2xpbmVhcicsXG4gICAgJ2JsdXJfb2ZmJyxcbiAgICAnYmx1cl9vbicsXG4gICAgJ2Jvb2snLFxuICAgICdib29rbWFyaycsXG4gICAgJ2Jvb2ttYXJrX2JvcmRlcicsXG4gICAgJ2JvcmRlcl9hbGwnLFxuICAgICdib3JkZXJfYm90dG9tJyxcbiAgICAnYm9yZGVyX2NsZWFyJyxcbiAgICAnYm9yZGVyX2NvbG9yJyxcbiAgICAnYm9yZGVyX2hvcml6b250YWwnLFxuICAgICdib3JkZXJfaW5uZXInLFxuICAgICdib3JkZXJfbGVmdCcsXG4gICAgJ2JvcmRlcl9vdXRlcicsXG4gICAgJ2JvcmRlcl9yaWdodCcsXG4gICAgJ2JvcmRlcl9zdHlsZScsXG4gICAgJ2JvcmRlcl90b3AnLFxuICAgICdib3JkZXJfdmVydGljYWwnLFxuICAgICdicmlnaHRuZXNzXzEnLFxuICAgICdicmlnaHRuZXNzXzInLFxuICAgICdicmlnaHRuZXNzXzMnLFxuICAgICdicmlnaHRuZXNzXzQnLFxuICAgICdicmlnaHRuZXNzXzUnLFxuICAgICdicmlnaHRuZXNzXzYnLFxuICAgICdicmlnaHRuZXNzXzcnLFxuICAgICdicmlnaHRuZXNzX2F1dG8nLFxuICAgICdicmlnaHRuZXNzX2hpZ2gnLFxuICAgICdicmlnaHRuZXNzX2xvdycsXG4gICAgJ2JyaWdodG5lc3NfbWVkaXVtJyxcbiAgICAnYnJva2VuX2ltYWdlJyxcbiAgICAnYnJ1c2gnLFxuICAgICdidWdfcmVwb3J0JyxcbiAgICAnYnVpbGQnLFxuICAgICdidXNpbmVzcycsXG4gICAgJ2NhY2hlZCcsXG4gICAgJ2Nha2UnLFxuICAgICdjYWxsJyxcbiAgICAnY2FsbF9lbmQnLFxuICAgICdjYWxsX21hZGUnLFxuICAgICdjYWxsX21lcmdlJyxcbiAgICAnY2FsbF9taXNzZWQnLFxuICAgICdjYWxsX3JlY2VpdmVkJyxcbiAgICAnY2FsbF9zcGxpdCcsXG4gICAgJ2NhbWVyYScsXG4gICAgJ2NhbWVyYV9hbHQnLFxuICAgICdjYW1lcmFfZnJvbnQnLFxuICAgICdjYW1lcmFfcmVhcicsXG4gICAgJ2NhbWVyYV9yb2xsJyxcbiAgICAnY2FuY2VsJyxcbiAgICAnY2FzdCcsXG4gICAgJ2Nhc3RfY29ubmVjdGVkJyxcbiAgICAnY2VudGVyX2ZvY3VzX3N0cm9uZycsXG4gICAgJ2NlbnRlcl9mb2N1c193ZWFrJyxcbiAgICAnY2hhdCcsXG4gICAgJ2NoZWNrJyxcbiAgICAnY2hlY2tfYm94JyxcbiAgICAnY2hlY2tfYm94X291dGxpbmVfYmxhbmsnLFxuICAgICdjaGVja19jaXJjbGUnLFxuICAgICdjaGV2cm9uX2xlZnQnLFxuICAgICdjaGV2cm9uX3JpZ2h0JyxcbiAgICAnY2xhc3MnLFxuICAgICdjbGVhcicsXG4gICAgJ2NsZWFyX2FsbCcsXG4gICAgJ2Nsb3NlJyxcbiAgICAnY2xvc2VkX2NhcHRpb24nLFxuICAgICdjbG91ZCcsXG4gICAgJ2Nsb3VkX2NpcmNsZScsXG4gICAgJ2Nsb3VkX2RvbmUnLFxuICAgICdjbG91ZF9kb3dubG9hZCcsXG4gICAgJ2Nsb3VkX29mZicsXG4gICAgJ2Nsb3VkX3F1ZXVlJyxcbiAgICAnY2xvdWRfdXBsb2FkJyxcbiAgICAnY29sbGVjdGlvbnMnLFxuICAgICdjb2xsZWN0aW9uc19ib29rbWFyaycsXG4gICAgJ2NvbG9yX2xlbnMnLFxuICAgICdjb2xvcml6ZScsXG4gICAgJ2NvbW1lbnQnLFxuICAgICdjb21wYXJlJyxcbiAgICAnY29tcHV0ZXInLFxuICAgICdjb25maXJtYXRpb25fbnVtYmVyJyxcbiAgICAnY29udGFjdF9waG9uZScsXG4gICAgJ2NvbnRhY3RzJyxcbiAgICAnY29udGVudF9jb3B5JyxcbiAgICAnY29udGVudF9jdXQnLFxuICAgICdjb250ZW50X3Bhc3RlJyxcbiAgICAnY29udHJvbF9wb2ludCcsXG4gICAgJ2NvbnRyb2xfcG9pbnRfZHVwbGljYXRlJyxcbiAgICAnY3JlYXRlJyxcbiAgICAnY3JlZGl0X2NhcmQnLFxuICAgICdjcm9wJyxcbiAgICAnY3JvcF8xNl85JyxcbiAgICAnY3JvcF8zXzInLFxuICAgICdjcm9wXzVfNCcsXG4gICAgJ2Nyb3BfN181JyxcbiAgICAnY3JvcF9kaW4nLFxuICAgICdjcm9wX2ZyZWUnLFxuICAgICdjcm9wX2xhbmRzY2FwZScsXG4gICAgJ2Nyb3Bfb3JpZ2luYWwnLFxuICAgICdjcm9wX3BvcnRyYWl0JyxcbiAgICAnY3JvcF9zcXVhcmUnLFxuICAgICdkYXNoYm9hcmQnLFxuICAgICdkYXRhX3VzYWdlJyxcbiAgICAnZGVoYXplJyxcbiAgICAnZGVsZXRlJyxcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgICdkZXNrdG9wX21hYycsXG4gICAgJ2Rlc2t0b3Bfd2luZG93cycsXG4gICAgJ2RldGFpbHMnLFxuICAgICdkZXZlbG9wZXJfYm9hcmQnLFxuICAgICdkZXZlbG9wZXJfbW9kZScsXG4gICAgJ2RldmljZV9odWInLFxuICAgICdkZXZpY2VzJyxcbiAgICAnZGlhbGVyX3NpcCcsXG4gICAgJ2RpYWxwYWQnLFxuICAgICdkaXJlY3Rpb25zJyxcbiAgICAnZGlyZWN0aW9uc19iaWtlJyxcbiAgICAnZGlyZWN0aW9uc19ib2F0JyxcbiAgICAnZGlyZWN0aW9uc19idXMnLFxuICAgICdkaXJlY3Rpb25zX2NhcicsXG4gICAgJ2RpcmVjdGlvbnNfcmFpbHdheScsXG4gICAgJ2RpcmVjdGlvbnNfcnVuJyxcbiAgICAnZGlyZWN0aW9uc19zdWJ3YXknLFxuICAgICdkaXJlY3Rpb25zX3RyYW5zaXQnLFxuICAgICdkaXJlY3Rpb25zX3dhbGsnLFxuICAgICdkaXNjX2Z1bGwnLFxuICAgICdkbnMnLFxuICAgICdkb19ub3RfZGlzdHVyYicsXG4gICAgJ2RvX25vdF9kaXN0dXJiX2FsdCcsXG4gICAgJ2RvY2snLFxuICAgICdkb21haW4nLFxuICAgICdkb25lJyxcbiAgICAnZG9uZV9hbGwnLFxuICAgICdkcmFmdHMnLFxuICAgICdkcml2ZV9ldGEnLFxuICAgICdkdnInLFxuICAgICdlZGl0JyxcbiAgICAnZWplY3QnLFxuICAgICdlbWFpbCcsXG4gICAgJ2VxdWFsaXplcicsXG4gICAgJ2Vycm9yJyxcbiAgICAnZXJyb3Jfb3V0bGluZScsXG4gICAgJ2V2ZW50JyxcbiAgICAnZXZlbnRfYXZhaWxhYmxlJyxcbiAgICAnZXZlbnRfYnVzeScsXG4gICAgJ2V2ZW50X25vdGUnLFxuICAgICdldmVudF9zZWF0JyxcbiAgICAnZXhpdF90b19hcHAnLFxuICAgICdleHBhbmRfbGVzcycsXG4gICAgJ2V4cGFuZF9tb3JlJyxcbiAgICAnZXhwbGljaXQnLFxuICAgICdleHBsb3JlJyxcbiAgICAnZXhwb3N1cmUnLFxuICAgICdleHBvc3VyZV9uZWdfMScsXG4gICAgJ2V4cG9zdXJlX25lZ18yJyxcbiAgICAnZXhwb3N1cmVfcGx1c18xJyxcbiAgICAnZXhwb3N1cmVfcGx1c18yJyxcbiAgICAnZXhwb3N1cmVfemVybycsXG4gICAgJ2V4dGVuc2lvbicsXG4gICAgJ2ZhY2UnLFxuICAgICdmYXN0X2ZvcndhcmQnLFxuICAgICdmYXN0X3Jld2luZCcsXG4gICAgJ2Zhdm9yaXRlJyxcbiAgICAnZmF2b3JpdGVfYm9yZGVyJyxcbiAgICAnZmVlZGJhY2snLFxuICAgICdmaWxlX2Rvd25sb2FkJyxcbiAgICAnZmlsZV91cGxvYWQnLFxuICAgICdmaWx0ZXInLFxuICAgICdmaWx0ZXJfMScsXG4gICAgJ2ZpbHRlcl8yJyxcbiAgICAnZmlsdGVyXzMnLFxuICAgICdmaWx0ZXJfNCcsXG4gICAgJ2ZpbHRlcl81JyxcbiAgICAnZmlsdGVyXzYnLFxuICAgICdmaWx0ZXJfNycsXG4gICAgJ2ZpbHRlcl84JyxcbiAgICAnZmlsdGVyXzknLFxuICAgICdmaWx0ZXJfOV9wbHVzJyxcbiAgICAnZmlsdGVyX2JfYW5kX3cnLFxuICAgICdmaWx0ZXJfY2VudGVyX2ZvY3VzJyxcbiAgICAnZmlsdGVyX2RyYW1hJyxcbiAgICAnZmlsdGVyX2ZyYW1lcycsXG4gICAgJ2ZpbHRlcl9oZHInLFxuICAgICdmaWx0ZXJfbGlzdCcsXG4gICAgJ2ZpbHRlcl9ub25lJyxcbiAgICAnZmlsdGVyX3RpbHRfc2hpZnQnLFxuICAgICdmaWx0ZXJfdmludGFnZScsXG4gICAgJ2ZpbmRfaW5fcGFnZScsXG4gICAgJ2ZpbmRfcmVwbGFjZScsXG4gICAgJ2ZsYWcnLFxuICAgICdmbGFyZScsXG4gICAgJ2ZsYXNoX2F1dG8nLFxuICAgICdmbGFzaF9vZmYnLFxuICAgICdmbGFzaF9vbicsXG4gICAgJ2ZsaWdodCcsXG4gICAgJ2ZsaWdodF9sYW5kJyxcbiAgICAnZmxpZ2h0X3Rha2VvZmYnLFxuICAgICdmbGlwJyxcbiAgICAnZmxpcF90b19iYWNrJyxcbiAgICAnZmxpcF90b19mcm9udCcsXG4gICAgJ2ZvbGRlcicsXG4gICAgJ2ZvbGRlcl9vcGVuJyxcbiAgICAnZm9sZGVyX3NoYXJlZCcsXG4gICAgJ2ZvbGRlcl9zcGVjaWFsJyxcbiAgICAnZm9udF9kb3dubG9hZCcsXG4gICAgJ2Zvcm1hdF9hbGlnbl9jZW50ZXInLFxuICAgICdmb3JtYXRfYWxpZ25fanVzdGlmeScsXG4gICAgJ2Zvcm1hdF9hbGlnbl9sZWZ0JyxcbiAgICAnZm9ybWF0X2FsaWduX3JpZ2h0JyxcbiAgICAnZm9ybWF0X2JvbGQnLFxuICAgICdmb3JtYXRfY2xlYXInLFxuICAgICdmb3JtYXRfY29sb3JfZmlsbCcsXG4gICAgJ2Zvcm1hdF9jb2xvcl9yZXNldCcsXG4gICAgJ2Zvcm1hdF9jb2xvcl90ZXh0JyxcbiAgICAnZm9ybWF0X2luZGVudF9kZWNyZWFzZScsXG4gICAgJ2Zvcm1hdF9pbmRlbnRfaW5jcmVhc2UnLFxuICAgICdmb3JtYXRfaXRhbGljJyxcbiAgICAnZm9ybWF0X2xpbmVfc3BhY2luZycsXG4gICAgJ2Zvcm1hdF9saXN0X2J1bGxldGVkJyxcbiAgICAnZm9ybWF0X2xpc3RfbnVtYmVyZWQnLFxuICAgICdmb3JtYXRfcGFpbnQnLFxuICAgICdmb3JtYXRfcXVvdGUnLFxuICAgICdmb3JtYXRfc2l6ZScsXG4gICAgJ2Zvcm1hdF9zdHJpa2V0aHJvdWdoJyxcbiAgICAnZm9ybWF0X3RleHRkaXJlY3Rpb25fbF90b19yJyxcbiAgICAnZm9ybWF0X3RleHRkaXJlY3Rpb25fcl90b19sJyxcbiAgICAnZm9ybWF0X3VuZGVybGluZWQnLFxuICAgICdmb3J1bScsXG4gICAgJ2ZvcndhcmQnLFxuICAgICdmb3J3YXJkXzEwJyxcbiAgICAnZm9yd2FyZF8zMCcsXG4gICAgJ2ZvcndhcmRfNScsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdmdWxsc2NyZWVuX2V4aXQnLFxuICAgICdmdW5jdGlvbnMnLFxuICAgICdnYW1lcGFkJyxcbiAgICAnZ2FtZXMnLFxuICAgICdnZXN0dXJlJyxcbiAgICAnZ2V0X2FwcCcsXG4gICAgJ2dpZicsXG4gICAgJ2dwc19maXhlZCcsXG4gICAgJ2dwc19ub3RfZml4ZWQnLFxuICAgICdncHNfb2ZmJyxcbiAgICAnZ3JhZGUnLFxuICAgICdncmFkaWVudCcsXG4gICAgJ2dyYWluJyxcbiAgICAnZ3JhcGhpY19lcScsXG4gICAgJ2dyaWRfb2ZmJyxcbiAgICAnZ3JpZF9vbicsXG4gICAgJ2dyb3VwJyxcbiAgICAnZ3JvdXBfYWRkJyxcbiAgICAnZ3JvdXBfd29yaycsXG4gICAgJ2hkJyxcbiAgICAnaGRyX29mZicsXG4gICAgJ2hkcl9vbicsXG4gICAgJ2hkcl9zdHJvbmcnLFxuICAgICdoZHJfd2VhaycsXG4gICAgJ2hlYWRzZXQnLFxuICAgICdoZWFkc2V0X21pYycsXG4gICAgJ2hlYWxpbmcnLFxuICAgICdoZWFyaW5nJyxcbiAgICAnaGVscCcsXG4gICAgJ2hlbHBfb3V0bGluZScsXG4gICAgJ2hpZ2hfcXVhbGl0eScsXG4gICAgJ2hpZ2hsaWdodF9vZmYnLFxuICAgICdoaXN0b3J5JyxcbiAgICAnaG9tZScsXG4gICAgJ2hvdGVsJyxcbiAgICAnaG91cmdsYXNzX2VtcHR5JyxcbiAgICAnaG91cmdsYXNzX2Z1bGwnLFxuICAgICdodHRwJyxcbiAgICAnaHR0cHMnLFxuICAgICdpbWFnZScsXG4gICAgJ2ltYWdlX2FzcGVjdF9yYXRpbycsXG4gICAgJ2ltcG9ydF9leHBvcnQnLFxuICAgICdpbmJveCcsXG4gICAgJ2luZGV0ZXJtaW5hdGVfY2hlY2tfYm94JyxcbiAgICAnaW5mbycsXG4gICAgJ2luZm9fb3V0bGluZScsXG4gICAgJ2lucHV0JyxcbiAgICAnaW5zZXJ0X2NoYXJ0JyxcbiAgICAnaW5zZXJ0X2NvbW1lbnQnLFxuICAgICdpbnNlcnRfZHJpdmVfZmlsZScsXG4gICAgJ2luc2VydF9lbW90aWNvbicsXG4gICAgJ2luc2VydF9pbnZpdGF0aW9uJyxcbiAgICAnaW5zZXJ0X2xpbmsnLFxuICAgICdpbnNlcnRfcGhvdG8nLFxuICAgICdpbnZlcnRfY29sb3JzJyxcbiAgICAnaW52ZXJ0X2NvbG9yc19vZmYnLFxuICAgICdpc28nLFxuICAgICdrZXlib2FyZCcsXG4gICAgJ2tleWJvYXJkX2Fycm93X2Rvd24nLFxuICAgICdrZXlib2FyZF9hcnJvd19sZWZ0JyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfcmlnaHQnLFxuICAgICdrZXlib2FyZF9hcnJvd191cCcsXG4gICAgJ2tleWJvYXJkX2JhY2tzcGFjZScsXG4gICAgJ2tleWJvYXJkX2NhcHNsb2NrJyxcbiAgICAna2V5Ym9hcmRfaGlkZScsXG4gICAgJ2tleWJvYXJkX3JldHVybicsXG4gICAgJ2tleWJvYXJkX3RhYicsXG4gICAgJ2tleWJvYXJkX3ZvaWNlJyxcbiAgICAnbGFiZWwnLFxuICAgICdsYWJlbF9vdXRsaW5lJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZ3VhZ2UnLFxuICAgICdsYXB0b3AnLFxuICAgICdsYXB0b3BfY2hyb21lYm9vaycsXG4gICAgJ2xhcHRvcF9tYWMnLFxuICAgICdsYXB0b3Bfd2luZG93cycsXG4gICAgJ2xhdW5jaCcsXG4gICAgJ2xheWVycycsXG4gICAgJ2xheWVyc19jbGVhcicsXG4gICAgJ2xlYWtfYWRkJyxcbiAgICAnbGVha19yZW1vdmUnLFxuICAgICdsZW5zJyxcbiAgICAnbGlicmFyeV9hZGQnLFxuICAgICdsaWJyYXJ5X2Jvb2tzJyxcbiAgICAnbGlicmFyeV9tdXNpYycsXG4gICAgJ2xpbmsnLFxuICAgICdsaXN0JyxcbiAgICAnbGl2ZV9oZWxwJyxcbiAgICAnbGl2ZV90dicsXG4gICAgJ2xvY2FsX2FjdGl2aXR5JyxcbiAgICAnbG9jYWxfYWlycG9ydCcsXG4gICAgJ2xvY2FsX2F0bScsXG4gICAgJ2xvY2FsX2JhcicsXG4gICAgJ2xvY2FsX2NhZmUnLFxuICAgICdsb2NhbF9jYXJfd2FzaCcsXG4gICAgJ2xvY2FsX2NvbnZlbmllbmNlX3N0b3JlJyxcbiAgICAnbG9jYWxfZGluaW5nJyxcbiAgICAnbG9jYWxfZHJpbmsnLFxuICAgICdsb2NhbF9mbG9yaXN0JyxcbiAgICAnbG9jYWxfZ2FzX3N0YXRpb24nLFxuICAgICdsb2NhbF9ncm9jZXJ5X3N0b3JlJyxcbiAgICAnbG9jYWxfaG9zcGl0YWwnLFxuICAgICdsb2NhbF9ob3RlbCcsXG4gICAgJ2xvY2FsX2xhdW5kcnlfc2VydmljZScsXG4gICAgJ2xvY2FsX2xpYnJhcnknLFxuICAgICdsb2NhbF9tYWxsJyxcbiAgICAnbG9jYWxfbW92aWVzJyxcbiAgICAnbG9jYWxfb2ZmZXInLFxuICAgICdsb2NhbF9wYXJraW5nJyxcbiAgICAnbG9jYWxfcGhhcm1hY3knLFxuICAgICdsb2NhbF9waG9uZScsXG4gICAgJ2xvY2FsX3BpenphJyxcbiAgICAnbG9jYWxfcGxheScsXG4gICAgJ2xvY2FsX3Bvc3Rfb2ZmaWNlJyxcbiAgICAnbG9jYWxfcHJpbnRzaG9wJyxcbiAgICAnbG9jYWxfc2VlJyxcbiAgICAnbG9jYWxfc2hpcHBpbmcnLFxuICAgICdsb2NhbF90YXhpJyxcbiAgICAnbG9jYXRpb25fY2l0eScsXG4gICAgJ2xvY2F0aW9uX2Rpc2FibGVkJyxcbiAgICAnbG9jYXRpb25fb2ZmJyxcbiAgICAnbG9jYXRpb25fb24nLFxuICAgICdsb2NhdGlvbl9zZWFyY2hpbmcnLFxuICAgICdsb2NrJyxcbiAgICAnbG9ja19vcGVuJyxcbiAgICAnbG9ja19vdXRsaW5lJyxcbiAgICAnbG9va3MnLFxuICAgICdsb29rc18zJyxcbiAgICAnbG9va3NfNCcsXG4gICAgJ2xvb2tzXzUnLFxuICAgICdsb29rc182JyxcbiAgICAnbG9va3Nfb25lJyxcbiAgICAnbG9va3NfdHdvJyxcbiAgICAnbG9vcCcsXG4gICAgJ2xvdXBlJyxcbiAgICAnbG95YWx0eScsXG4gICAgJ21haWwnLFxuICAgICdtYXAnLFxuICAgICdtYXJrdW5yZWFkJyxcbiAgICAnbWFya3VucmVhZF9tYWlsYm94JyxcbiAgICAnbWVtb3J5JyxcbiAgICAnbWVudScsXG4gICAgJ21lcmdlX3R5cGUnLFxuICAgICdtZXNzYWdlJyxcbiAgICAnbWljJyxcbiAgICAnbWljX25vbmUnLFxuICAgICdtaWNfb2ZmJyxcbiAgICAnbW1zJyxcbiAgICAnbW9kZV9jb21tZW50JyxcbiAgICAnbW9kZV9lZGl0JyxcbiAgICAnbW9uZXlfb2ZmJyxcbiAgICAnbW9ub2Nocm9tZV9waG90b3MnLFxuICAgICdtb29kJyxcbiAgICAnbW9vZF9iYWQnLFxuICAgICdtb3JlJyxcbiAgICAnbW9yZV9ob3JpeicsXG4gICAgJ21vcmVfdmVydCcsXG4gICAgJ21vdXNlJyxcbiAgICAnbW92aWUnLFxuICAgICdtb3ZpZV9jcmVhdGlvbicsXG4gICAgJ211c2ljX25vdGUnLFxuICAgICdteV9saWJyYXJ5X2FkZCcsXG4gICAgJ215X2xpYnJhcnlfYm9va3MnLFxuICAgICdteV9saWJyYXJ5X211c2ljJyxcbiAgICAnbXlfbG9jYXRpb24nLFxuICAgICduYXR1cmUnLFxuICAgICduYXR1cmVfcGVvcGxlJyxcbiAgICAnbmF2aWdhdGVfYmVmb3JlJyxcbiAgICAnbmF2aWdhdGVfbmV4dCcsXG4gICAgJ25hdmlnYXRpb24nLFxuICAgICduZXR3b3JrX2NlbGwnLFxuICAgICduZXR3b3JrX2xvY2tlZCcsXG4gICAgJ25ldHdvcmtfd2lmaScsXG4gICAgJ25ld19yZWxlYXNlcycsXG4gICAgJ25mYycsXG4gICAgJ25vX3NpbScsXG4gICAgJ25vdF9pbnRlcmVzdGVkJyxcbiAgICAnbm90ZV9hZGQnLFxuICAgICdub3RpZmljYXRpb25zJyxcbiAgICAnbm90aWZpY2F0aW9uc19hY3RpdmUnLFxuICAgICdub3RpZmljYXRpb25zX25vbmUnLFxuICAgICdub3RpZmljYXRpb25zX29mZicsXG4gICAgJ25vdGlmaWNhdGlvbnNfcGF1c2VkJyxcbiAgICAnb2ZmbGluZV9waW4nLFxuICAgICdvbmRlbWFuZF92aWRlbycsXG4gICAgJ29wZW5faW5fYnJvd3NlcicsXG4gICAgJ29wZW5faW5fbmV3JyxcbiAgICAnb3Blbl93aXRoJyxcbiAgICAncGFnZXMnLFxuICAgICdwYWdldmlldycsXG4gICAgJ3BhbGV0dGUnLFxuICAgICdwYW5vcmFtYScsXG4gICAgJ3Bhbm9yYW1hX2Zpc2hfZXllJyxcbiAgICAncGFub3JhbWFfaG9yaXpvbnRhbCcsXG4gICAgJ3Bhbm9yYW1hX3ZlcnRpY2FsJyxcbiAgICAncGFub3JhbWFfd2lkZV9hbmdsZScsXG4gICAgJ3BhcnR5X21vZGUnLFxuICAgICdwYXVzZScsXG4gICAgJ3BhdXNlX2NpcmNsZV9maWxsZWQnLFxuICAgICdwYXVzZV9jaXJjbGVfb3V0bGluZScsXG4gICAgJ3BheW1lbnQnLFxuICAgICdwZW9wbGUnLFxuICAgICdwZW9wbGVfb3V0bGluZScsXG4gICAgJ3Blcm1fY2FtZXJhX21pYycsXG4gICAgJ3Blcm1fY29udGFjdF9jYWxlbmRhcicsXG4gICAgJ3Blcm1fZGF0YV9zZXR0aW5nJyxcbiAgICAncGVybV9kZXZpY2VfaW5mb3JtYXRpb24nLFxuICAgICdwZXJtX2lkZW50aXR5JyxcbiAgICAncGVybV9tZWRpYScsXG4gICAgJ3Blcm1fcGhvbmVfbXNnJyxcbiAgICAncGVybV9zY2FuX3dpZmknLFxuICAgICdwZXJzb24nLFxuICAgICdwZXJzb25fYWRkJyxcbiAgICAncGVyc29uX291dGxpbmUnLFxuICAgICdwZXJzb25fcGluJyxcbiAgICAncGVyc29uYWxfdmlkZW8nLFxuICAgICdwaG9uZScsXG4gICAgJ3Bob25lX2FuZHJvaWQnLFxuICAgICdwaG9uZV9ibHVldG9vdGhfc3BlYWtlcicsXG4gICAgJ3Bob25lX2ZvcndhcmRlZCcsXG4gICAgJ3Bob25lX2luX3RhbGsnLFxuICAgICdwaG9uZV9pcGhvbmUnLFxuICAgICdwaG9uZV9sb2NrZWQnLFxuICAgICdwaG9uZV9taXNzZWQnLFxuICAgICdwaG9uZV9wYXVzZWQnLFxuICAgICdwaG9uZWxpbmsnLFxuICAgICdwaG9uZWxpbmtfZXJhc2UnLFxuICAgICdwaG9uZWxpbmtfbG9jaycsXG4gICAgJ3Bob25lbGlua19vZmYnLFxuICAgICdwaG9uZWxpbmtfcmluZycsXG4gICAgJ3Bob25lbGlua19zZXR1cCcsXG4gICAgJ3Bob3RvJyxcbiAgICAncGhvdG9fYWxidW0nLFxuICAgICdwaG90b19jYW1lcmEnLFxuICAgICdwaG90b19saWJyYXJ5JyxcbiAgICAncGhvdG9fc2l6ZV9zZWxlY3RfYWN0dWFsJyxcbiAgICAncGhvdG9fc2l6ZV9zZWxlY3RfbGFyZ2UnLFxuICAgICdwaG90b19zaXplX3NlbGVjdF9zbWFsbCcsXG4gICAgJ3BpY3R1cmVfYXNfcGRmJyxcbiAgICAncGljdHVyZV9pbl9waWN0dXJlJyxcbiAgICAncGluX2Ryb3AnLFxuICAgICdwbGFjZScsXG4gICAgJ3BsYXlfYXJyb3cnLFxuICAgICdwbGF5X2NpcmNsZV9maWxsZWQnLFxuICAgICdwbGF5X2NpcmNsZV9vdXRsaW5lJyxcbiAgICAncGxheV9mb3Jfd29yaycsXG4gICAgJ3BsYXlfc2hvcHBpbmdfYmFnJyxcbiAgICAncGxheWxpc3RfYWRkJyxcbiAgICAncGx1c19vbmUnLFxuICAgICdwb2xsJyxcbiAgICAncG9seW1lcicsXG4gICAgJ3BvcnRhYmxlX3dpZmlfb2ZmJyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3dlcicsXG4gICAgJ3Bvd2VyX2lucHV0JyxcbiAgICAncG93ZXJfc2V0dGluZ3NfbmV3JyxcbiAgICAncHJlc2VudF90b19hbGwnLFxuICAgICdwcmludCcsXG4gICAgJ3B1YmxpYycsXG4gICAgJ3B1Ymxpc2gnLFxuICAgICdxdWVyeV9idWlsZGVyJyxcbiAgICAncXVlc3Rpb25fYW5zd2VyJyxcbiAgICAncXVldWUnLFxuICAgICdxdWV1ZV9tdXNpYycsXG4gICAgJ3JhZGlvJyxcbiAgICAncmFkaW9fYnV0dG9uX2NoZWNrZWQnLFxuICAgICdyYWRpb19idXR0b25fdW5jaGVja2VkJyxcbiAgICAncmF0ZV9yZXZpZXcnLFxuICAgICdyZWNlaXB0JyxcbiAgICAncmVjZW50X2FjdG9ycycsXG4gICAgJ3JlZGVlbScsXG4gICAgJ3JlZG8nLFxuICAgICdyZWZyZXNoJyxcbiAgICAncmVtb3ZlJyxcbiAgICAncmVtb3ZlX2NpcmNsZScsXG4gICAgJ3JlbW92ZV9jaXJjbGVfb3V0bGluZScsXG4gICAgJ3JlbW92ZV9yZWRfZXllJyxcbiAgICAncmVvcmRlcicsXG4gICAgJ3JlcGVhdCcsXG4gICAgJ3JlcGVhdF9vbmUnLFxuICAgICdyZXBsYXknLFxuICAgICdyZXBsYXlfMTAnLFxuICAgICdyZXBsYXlfMzAnLFxuICAgICdyZXBsYXlfNScsXG4gICAgJ3JlcGx5JyxcbiAgICAncmVwbHlfYWxsJyxcbiAgICAncmVwb3J0JyxcbiAgICAncmVwb3J0X3Byb2JsZW0nLFxuICAgICdyZXN0YXVyYW50X21lbnUnLFxuICAgICdyZXN0b3JlJyxcbiAgICAncmluZ192b2x1bWUnLFxuICAgICdyb29tJyxcbiAgICAncm90YXRlXzkwX2RlZ3JlZXNfY2N3JyxcbiAgICAncm90YXRlX2xlZnQnLFxuICAgICdyb3RhdGVfcmlnaHQnLFxuICAgICdyb3V0ZXInLFxuICAgICdzYXRlbGxpdGUnLFxuICAgICdzYXZlJyxcbiAgICAnc2Nhbm5lcicsXG4gICAgJ3NjaGVkdWxlJyxcbiAgICAnc2Nob29sJyxcbiAgICAnc2NyZWVuX2xvY2tfbGFuZHNjYXBlJyxcbiAgICAnc2NyZWVuX2xvY2tfcG9ydHJhaXQnLFxuICAgICdzY3JlZW5fbG9ja19yb3RhdGlvbicsXG4gICAgJ3NjcmVlbl9yb3RhdGlvbicsXG4gICAgJ3NkX2NhcmQnLFxuICAgICdzZF9zdG9yYWdlJyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2VjdXJpdHknLFxuICAgICdzZWxlY3RfYWxsJyxcbiAgICAnc2VuZCcsXG4gICAgJ3NldHRpbmdzJyxcbiAgICAnc2V0dGluZ3NfYXBwbGljYXRpb25zJyxcbiAgICAnc2V0dGluZ3NfYmFja3VwX3Jlc3RvcmUnLFxuICAgICdzZXR0aW5nc19ibHVldG9vdGgnLFxuICAgICdzZXR0aW5nc19icmlnaHRuZXNzJyxcbiAgICAnc2V0dGluZ3NfY2VsbCcsXG4gICAgJ3NldHRpbmdzX2V0aGVybmV0JyxcbiAgICAnc2V0dGluZ3NfaW5wdXRfYW50ZW5uYScsXG4gICAgJ3NldHRpbmdzX2lucHV0X2NvbXBvbmVudCcsXG4gICAgJ3NldHRpbmdzX2lucHV0X2NvbXBvc2l0ZScsXG4gICAgJ3NldHRpbmdzX2lucHV0X2hkbWknLFxuICAgICdzZXR0aW5nc19pbnB1dF9zdmlkZW8nLFxuICAgICdzZXR0aW5nc19vdmVyc2NhbicsXG4gICAgJ3NldHRpbmdzX3Bob25lJyxcbiAgICAnc2V0dGluZ3NfcG93ZXInLFxuICAgICdzZXR0aW5nc19yZW1vdGUnLFxuICAgICdzZXR0aW5nc19zeXN0ZW1fZGF5ZHJlYW0nLFxuICAgICdzZXR0aW5nc192b2ljZScsXG4gICAgJ3NoYXJlJyxcbiAgICAnc2hvcCcsXG4gICAgJ3Nob3BfdHdvJyxcbiAgICAnc2hvcHBpbmdfYmFza2V0JyxcbiAgICAnc2hvcHBpbmdfY2FydCcsXG4gICAgJ3NodWZmbGUnLFxuICAgICdzaWduYWxfY2VsbHVsYXJfNF9iYXInLFxuICAgICdzaWduYWxfY2VsbHVsYXJfY29ubmVjdGVkX25vX2ludGVybmV0XzRfYmFyJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyX25vX3NpbScsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9udWxsJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyX29mZicsXG4gICAgJ3NpZ25hbF93aWZpXzRfYmFyJyxcbiAgICAnc2lnbmFsX3dpZmlfNF9iYXJfbG9jaycsXG4gICAgJ3NpZ25hbF93aWZpX29mZicsXG4gICAgJ3NpbV9jYXJkJyxcbiAgICAnc2ltX2NhcmRfYWxlcnQnLFxuICAgICdza2lwX25leHQnLFxuICAgICdza2lwX3ByZXZpb3VzJyxcbiAgICAnc2xpZGVzaG93JyxcbiAgICAnc21hcnRwaG9uZScsXG4gICAgJ3NtcycsXG4gICAgJ3Ntc19mYWlsZWQnLFxuICAgICdzbm9vemUnLFxuICAgICdzb3J0JyxcbiAgICAnc29ydF9ieV9hbHBoYScsXG4gICAgJ3NwYWNlX2JhcicsXG4gICAgJ3NwZWFrZXInLFxuICAgICdzcGVha2VyX2dyb3VwJyxcbiAgICAnc3BlYWtlcl9ub3RlcycsXG4gICAgJ3NwZWFrZXJfcGhvbmUnLFxuICAgICdzcGVsbGNoZWNrJyxcbiAgICAnc3RhcicsXG4gICAgJ3N0YXJfYm9yZGVyJyxcbiAgICAnc3Rhcl9oYWxmJyxcbiAgICAnc3RhcnMnLFxuICAgICdzdGF5X2N1cnJlbnRfbGFuZHNjYXBlJyxcbiAgICAnc3RheV9jdXJyZW50X3BvcnRyYWl0JyxcbiAgICAnc3RheV9wcmltYXJ5X2xhbmRzY2FwZScsXG4gICAgJ3N0YXlfcHJpbWFyeV9wb3J0cmFpdCcsXG4gICAgJ3N0b3AnLFxuICAgICdzdG9yYWdlJyxcbiAgICAnc3RvcmUnLFxuICAgICdzdG9yZV9tYWxsX2RpcmVjdG9yeScsXG4gICAgJ3N0cmFpZ2h0ZW4nLFxuICAgICdzdHJpa2V0aHJvdWdoX3MnLFxuICAgICdzdHlsZScsXG4gICAgJ3N1YmplY3QnLFxuICAgICdzdWJ0aXRsZXMnLFxuICAgICdzdXBlcnZpc29yX2FjY291bnQnLFxuICAgICdzdXJyb3VuZF9zb3VuZCcsXG4gICAgJ3N3YXBfY2FsbHMnLFxuICAgICdzd2FwX2hvcml6JyxcbiAgICAnc3dhcF92ZXJ0JyxcbiAgICAnc3dhcF92ZXJ0aWNhbF9jaXJjbGUnLFxuICAgICdzd2l0Y2hfY2FtZXJhJyxcbiAgICAnc3dpdGNoX3ZpZGVvJyxcbiAgICAnc3luYycsXG4gICAgJ3N5bmNfZGlzYWJsZWQnLFxuICAgICdzeW5jX3Byb2JsZW0nLFxuICAgICdzeXN0ZW1fdXBkYXRlJyxcbiAgICAnc3lzdGVtX3VwZGF0ZV9hbHQnLFxuICAgICd0YWInLFxuICAgICd0YWJfdW5zZWxlY3RlZCcsXG4gICAgJ3RhYmxldCcsXG4gICAgJ3RhYmxldF9hbmRyb2lkJyxcbiAgICAndGFibGV0X21hYycsXG4gICAgJ3RhZ19mYWNlcycsXG4gICAgJ3RhcF9hbmRfcGxheScsXG4gICAgJ3RlcnJhaW4nLFxuICAgICd0ZXh0X2Zvcm1hdCcsXG4gICAgJ3RleHRzbXMnLFxuICAgICd0ZXh0dXJlJyxcbiAgICAndGhlYXRlcnMnLFxuICAgICd0aHVtYl9kb3duJyxcbiAgICAndGh1bWJfdXAnLFxuICAgICd0aHVtYnNfdXBfZG93bicsXG4gICAgJ3RpbWVfdG9fbGVhdmUnLFxuICAgICd0aW1lbGFwc2UnLFxuICAgICd0aW1lcicsXG4gICAgJ3RpbWVyXzEwJyxcbiAgICAndGltZXJfMycsXG4gICAgJ3RpbWVyX29mZicsXG4gICAgJ3RvYycsXG4gICAgJ3RvZGF5JyxcbiAgICAndG9sbCcsXG4gICAgJ3RvbmFsaXR5JyxcbiAgICAndG95cycsXG4gICAgJ3RyYWNrX2NoYW5nZXMnLFxuICAgICd0cmFmZmljJyxcbiAgICAndHJhbnNmb3JtJyxcbiAgICAndHJhbnNsYXRlJyxcbiAgICAndHJlbmRpbmdfZG93bicsXG4gICAgJ3RyZW5kaW5nX2ZsYXQnLFxuICAgICd0cmVuZGluZ191cCcsXG4gICAgJ3R1bmUnLFxuICAgICd0dXJuZWRfaW4nLFxuICAgICd0dXJuZWRfaW5fbm90JyxcbiAgICAndHYnLFxuICAgICd1bmRvJyxcbiAgICAndW5mb2xkX2xlc3MnLFxuICAgICd1bmZvbGRfbW9yZScsXG4gICAgJ3VzYicsXG4gICAgJ3ZlcmlmaWVkX3VzZXInLFxuICAgICd2ZXJ0aWNhbF9hbGlnbl9ib3R0b20nLFxuICAgICd2ZXJ0aWNhbF9hbGlnbl9jZW50ZXInLFxuICAgICd2ZXJ0aWNhbF9hbGlnbl90b3AnLFxuICAgICd2aWJyYXRpb24nLFxuICAgICd2aWRlb19saWJyYXJ5JyxcbiAgICAndmlkZW9jYW0nLFxuICAgICd2aWRlb2NhbV9vZmYnLFxuICAgICd2aWV3X2FnZW5kYScsXG4gICAgJ3ZpZXdfYXJyYXknLFxuICAgICd2aWV3X2Nhcm91c2VsJyxcbiAgICAndmlld19jb2x1bW4nLFxuICAgICd2aWV3X2NvbWZ5JyxcbiAgICAndmlld19jb21wYWN0JyxcbiAgICAndmlld19kYXknLFxuICAgICd2aWV3X2hlYWRsaW5lJyxcbiAgICAndmlld19saXN0JyxcbiAgICAndmlld19tb2R1bGUnLFxuICAgICd2aWV3X3F1aWx0JyxcbiAgICAndmlld19zdHJlYW0nLFxuICAgICd2aWV3X3dlZWsnLFxuICAgICd2aWduZXR0ZScsXG4gICAgJ3Zpc2liaWxpdHknLFxuICAgICd2aXNpYmlsaXR5X29mZicsXG4gICAgJ3ZvaWNlX2NoYXQnLFxuICAgICd2b2ljZW1haWwnLFxuICAgICd2b2x1bWVfZG93bicsXG4gICAgJ3ZvbHVtZV9tdXRlJyxcbiAgICAndm9sdW1lX29mZicsXG4gICAgJ3ZvbHVtZV91cCcsXG4gICAgJ3Zwbl9rZXknLFxuICAgICd2cG5fbG9jaycsXG4gICAgJ3dhbGxwYXBlcicsXG4gICAgJ3dhcm5pbmcnLFxuICAgICd3YXRjaCcsXG4gICAgJ3diX2F1dG8nLFxuICAgICd3Yl9jbG91ZHknLFxuICAgICd3Yl9pbmNhbmRlc2NlbnQnLFxuICAgICd3Yl9pcmlkZXNjZW50JyxcbiAgICAnd2Jfc3VubnknLFxuICAgICd3YycsXG4gICAgJ3dlYicsXG4gICAgJ3doYXRzaG90JyxcbiAgICAnd2lkZ2V0cycsXG4gICAgJ3dpZmknLFxuICAgICd3aWZpX2xvY2snLFxuICAgICd3aWZpX3RldGhlcmluZycsXG4gICAgJ3dvcmsnLFxuICAgICd3cmFwX3RleHQnLFxuICAgICd5b3V0dWJlX3NlYXJjaGVkX2ZvcicsXG4gICAgJ3pvb21faW4nLFxuICAgICd6b29tX291dCcsXG4gIF07XG5cbiAgZ2V0IGljb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbnM7XG4gIH1cblxuICBmaWx0ZXIocXVlcnk6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5pY29ucy5maWx0ZXIoKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkgPyBxdWVyeS50b0xvd2VyQ2FzZSgpIDogJycpID4gLTE7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBGT1JNU1xuICovXG5cbi8vIEZvcm0gRGlyZWN0aXZlc1xuaW1wb3J0IHsgVGRBdXRvVHJpbURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybXMvYXV0by10cmltL2F1dG8tdHJpbS5kaXJlY3RpdmUnO1xuXG5jb25zdCBURF9GT1JNUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQXV0b1RyaW1EaXJlY3RpdmUsXG5dO1xuXG4vLyBWYWxpZGF0b3JzXG5jb25zdCBURF9WQUxJREFUT1JTOiBUeXBlPGFueT5bXSA9IFtcbl07XG5cbi8qKlxuICogUElQRVNcbiAqL1xuaW1wb3J0IHsgVGRUaW1lQWdvUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1hZ28vdGltZS1hZ28ucGlwZSc7XG5pbXBvcnQgeyBUZFRpbWVEaWZmZXJlbmNlUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1kaWZmZXJlbmNlL3RpbWUtZGlmZmVyZW5jZS5waXBlJztcbmltcG9ydCB7IFRkVGltZVVudGlsUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS11bnRpbC90aW1lLXVudGlsLnBpcGUnO1xuaW1wb3J0IHsgVGRCeXRlc1BpcGUgfSBmcm9tICcuL3BpcGVzL2J5dGVzL2J5dGVzLnBpcGUnO1xuaW1wb3J0IHsgVGREZWNpbWFsQnl0ZXNQaXBlIH0gZnJvbSAnLi9waXBlcy9kZWNpbWFsLWJ5dGVzL2RlY2ltYWwtYnl0ZXMucGlwZSc7XG5pbXBvcnQgeyBUZERpZ2l0c1BpcGUgfSBmcm9tICcuL3BpcGVzL2RpZ2l0cy9kaWdpdHMucGlwZSc7XG5pbXBvcnQgeyBUZFRydW5jYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdHJ1bmNhdGUvdHJ1bmNhdGUucGlwZSc7XG5cbmNvbnN0IFREX1BJUEVTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRUaW1lQWdvUGlwZSxcbiAgVGRUaW1lRGlmZmVyZW5jZVBpcGUsXG4gIFRkVGltZVVudGlsUGlwZSxcbiAgVGRCeXRlc1BpcGUsXG4gIFRkRGVjaW1hbEJ5dGVzUGlwZSxcbiAgVGREaWdpdHNQaXBlLFxuICBUZFRydW5jYXRlUGlwZSxcbl07XG5cbi8qKlxuICogU2VydmljZXNcbiAqL1xuXG5pbXBvcnQgeyBSb3V0ZXJQYXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcm91dGVyLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBJY29uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaWNvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfRk9STVMsXG4gICAgVERfUElQRVMsXG4gICAgVERfVkFMSURBVE9SUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBURF9GT1JNUyxcbiAgICBURF9QSVBFUyxcbiAgICBURF9WQUxJREFUT1JTLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBSb3V0ZXJQYXRoU2VydmljZSxcbiAgICBJY29uU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRDb21tb25Nb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbiAgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJUm90YXRlQW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICBkZWdyZWVzPzogbnVtYmVyO1xuICBlYXNlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkUm90YXRlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGRlZ3Jlc3NTdGFydDogRGVncmVlcyBvZiByb3RhdGlvbiB0aGF0IHRoZSBkb20gb2JqZWN0IHdpbGwgZW5kIHVwIGluIGR1cmluZyB0aGUgXCJmYWxzZVwiIHN0YXRlXG4gKiAqIGRlZ3JlZXNFbmQ6IERlZ3JlZXMgb2Ygcm90YXRpb24gdGhhdCB0aGUgZG9tIG9iamVjdCB3aWxsIGVuZCB1cCBpbiBkdXJpbmcgdGhlIFwidHJ1ZVwiIHN0YXRlXG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgcm90YXRpb24gYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkUm90YXRlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDkwIH19XCJcbiAqL1xuXG5leHBvcnQgY29uc3QgdGRSb3RhdGVBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUm90YXRlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoe3sgZGVncmVzc1N0YXJ0IH19ZGVnKScsXG4gIH0pLCB7IHBhcmFtczogeyBkZWdyZXNzU3RhcnQ6IDAgfX0pLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKHt7IGRlZ3JlZXNFbmQgfX1kZWcpJyxcbiAgfSksIHsgcGFyYW1zOiB7IGRlZ3JlZXNFbmQ6IDE4MCB9fSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMjUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1pbicgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRSb3RhdGVBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFJvdGF0ZUFuaW1hdGlvbihyb3RhdGVPcHRpb25zOiBJUm90YXRlQW5pbWF0aW9uID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihyb3RhdGVPcHRpb25zLmFuY2hvciB8fCAndGRSb3RhdGUnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIChyb3RhdGVPcHRpb25zLmRlZ3JlZXMgfHwgMTgwKSArICdkZWcpJyxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKHJvdGF0ZU9wdGlvbnMuZHVyYXRpb24gfHwgMjUwKSArICdtcyAnICtcbiAgICAgICAgICAocm90YXRlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcyAnICtcbiAgICAgICAgICAocm90YXRlT3B0aW9ucy5lYXNlIHx8ICdlYXNlLWluJykpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbGxhcHNlQW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICAgZWFzZU9uQ2xvc2U/OiBzdHJpbmc7XG4gICBlYXNlT25PcGVuPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkQ29sbGFwc2VBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAxNTAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2VPbkNsb3NlOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gY2xvc2luZy4gRGVmYXVsdHMgdG8gZWFzZS1pbi5cbiAqICogZWFzZU9uT3BlbjogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIG9wZW5pbmcuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgY29sbGFwc2UvZXhwYW5kIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZENvbGxhcHNlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRDb2xsYXBzZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRDb2xsYXBzZScsIFtcbiAgc3RhdGUoJzEnLCBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9KSksXG4gIHN0YXRlKCcwJywgIHN0eWxlKHtcbiAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgb3ZlcmZsb3c6IEFVVE9fU1RZTEUsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA9PiAxJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICB9KSxcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19Jywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgfSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1pbicgfX0pLFxuICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSksXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsIHN0eWxlKHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICB9KSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRDb2xsYXBzZUFuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkQ29sbGFwc2VBbmltYXRpb24oY29sbGFwc2VPcHRpb25zOiBJQ29sbGFwc2VBbmltYXRpb24gPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKGNvbGxhcHNlT3B0aW9ucy5hbmNob3IgfHwgJ3RkQ29sbGFwc2UnLCBbXG4gICAgc3RhdGUoJzEnLCBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMCcsICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChjb2xsYXBzZU9wdGlvbnMuZHVyYXRpb24gfHwgMTUwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChjb2xsYXBzZU9wdGlvbnMuZWFzZU9uQ2xvc2UgfHwgJ2Vhc2UtaW4nKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChjb2xsYXBzZU9wdGlvbnMuZHVyYXRpb24gfHwgMTUwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChjb2xsYXBzZU9wdGlvbnMuZWFzZU9uT3BlbiB8fCAnZWFzZS1vdXQnKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwICB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhZGVJbk91dEFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgZWFzZU9uSW4/OiBzdHJpbmc7XG4gIGVhc2VPbk91dD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZEZhZGVJbk91dEFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZU9uSW46IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBmYWRpbmcgaW4uIERlZmF1bHRzIHRvIGVhc2UtaW4uXG4gKiAqIGVhc2VPbk91dDogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGZhZGluZyBvdXQuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgZmFkZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRGYWRlSW5PdXRdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEZhZGVJbk91dEFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRGYWRlSW5PdXQnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlT25JbiB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZU9uSW46ICdlYXNlLWluJyB9fSksXG4gICAgdHJhbnNpdGlvbignMSA9PiAwJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2VPbk91dCB9fScpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlT25PdXQ6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRGYWRlSW5PdXRBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEZhZGVJbk91dEFuaW1hdGlvbihmYWRlSW5PdXQ6IElGYWRlSW5PdXRBbmltYXRpb24gPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKChmYWRlSW5PdXQuYW5jaG9yIHx8ICd0ZEZhZGVJbk91dCcpLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGZhZGVJbk91dC5kdXJhdGlvbiB8fCAxNTApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZGVsYXkgfHwgMCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGZhZGVJbk91dC5lYXNlT25JbiB8fCAnZWFzZS1pbicpKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJzEgPT4gMCcsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGZhZGVJbk91dC5kdXJhdGlvbiB8fCAxNTApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZGVsYXkgfHwgMCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGZhZGVJbk91dC5lYXNlT25PdXQgfHwgJ2Vhc2Utb3V0JykpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkQm91bmNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBib3VuY2UgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkQm91bmNlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRCb3VuY2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkQm91bmNlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMC4yfSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCknLCBvZmZzZXQ6IDAuNH0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjQzfSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMC41M30pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApJywgb2Zmc2V0OiAuN30pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuOH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTRweCwgMCknLCBvZmZzZXQ6IC45fSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMS4wfSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRCb3VuY2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEJvdW5jZUFuaW1hdGlvbihib3VuY2VPcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoYm91bmNlT3B0aW9ucy5hbmNob3IgfHwgJ3RkQm91bmNlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChib3VuY2VPcHRpb25zLmR1cmF0aW9uIHx8IDUwMCkgKyAnbXMgJyArIChib3VuY2VPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuMn0pLFxuICAgICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCknLCBvZmZzZXQ6IDAuNH0pLFxuICAgICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCknLCBvZmZzZXQ6IDAuNDN9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuNTN9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApJywgb2Zmc2V0OiAuN30pLFxuICAgICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMC44fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC00cHgsIDApJywgb2Zmc2V0OiAuOX0pLFxuICAgICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMS4wfSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEZsYXNoQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBmbGFzaCBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRGbGFzaF09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkRmxhc2hBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkRmxhc2gnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIG9wYWNpdHk6IDEsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIG9wYWNpdHk6IDEsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMC4yNX0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMC43NX0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxLjB9KSxcbiAgICAgIF0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZEZsYXNoQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRGbGFzaEFuaW1hdGlvbihmbGFzaE9wdGlvbnM6IElBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihmbGFzaE9wdGlvbnMuYW5jaG9yIHx8ICd0ZEZsYXNoJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGZsYXNoT3B0aW9ucy5kdXJhdGlvbiB8fCA1MDApICsgJ21zICcgKyAoZmxhc2hPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMC4yNX0pLFxuICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDAuNX0pLFxuICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuNzV9KSxcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxLjB9KSxcbiAgICAgICAgXSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkSGVhZHNoYWtlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBoZWFkc2hha2UgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkSGVhZHNoYWtlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRIZWFkc2hha2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkSGVhZHNoYWtlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpJywgb2Zmc2V0OiAwLjA2NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyknLCBvZmZzZXQ6IDAuMTg1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpJywgb2Zmc2V0OiAwLjMxNX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyknLCBvZmZzZXQ6IDAuNDM1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwLjUwfSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRIZWFkc2hha2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEhlYWRzaGFrZUFuaW1hdGlvbihoZWFkc2hha2VPcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoaGVhZHNoYWtlT3B0aW9ucy5hbmNob3IgfHwgJ3RkSGVhZHNoYWtlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoaGVhZHNoYWtlT3B0aW9ucy5kdXJhdGlvbiB8fCA1MDApICsgJ21zICcgKyAoaGVhZHNoYWtlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKScsIG9mZnNldDogMC4wNjV9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyknLCBvZmZzZXQ6IDAuMTg1fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyknLCBvZmZzZXQ6IDAuMzE1fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpJywgb2Zmc2V0OiAwLjQzNX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwLjUwfSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEplbGxvQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBqZWxsbyBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRKZWxsb109XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkSmVsbG9BbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkSmVsbG8nLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ25vbmUnLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvZmZzZXQ6IDAuMDExfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpJywgb2Zmc2V0OiAwLjIyMn0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyknLCBvZmZzZXQ6IDAuMzMzfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyknLCBvZmZzZXQ6IDAuNDQ0fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyknLCBvZmZzZXQ6IDAuNTU1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpJywgb2Zmc2V0OiAwLjY2Nn0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKScsIG9mZnNldDogMC43Nzd9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpJywgb2Zmc2V0OiAwLjg4OH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkSmVsbG9BbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEplbGxvQW5pbWF0aW9uKGplbGxvT3B0aW9uczogSUFuaW1hdGlvbk9wdGlvbnMgPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKGplbGxvT3B0aW9ucy5hbmNob3IgfHwgJ3RkSmVsbG8nLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChqZWxsb09wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKGplbGxvT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMC4wMTF9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKScsIG9mZnNldDogMC4yMjJ9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyknLCBvZmZzZXQ6IDAuMzMzfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKScsIG9mZnNldDogMC40NDR9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpJywgb2Zmc2V0OiAwLjU1NX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpJywgb2Zmc2V0OiAwLjY2Nn0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpJywgb2Zmc2V0OiAwLjc3N30pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKScsIG9mZnNldDogMC44ODh9KSxcbiAgICAgICAgXSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkUHVsc2VBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byA1MDAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlIGFuZCBkZWNlbGVyYXRlIHN0eWxlLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIHB1bHNlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZFB1bHNlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRQdWxzZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRQdWxzZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSknLCBvZmZzZXQ6IDAuNSB9KSxcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDEuMCB9KSxcbiAgICAgICAgXSksXG4gICAgICApLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkUHVsc2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZFB1bHNlQW5pbWF0aW9uKHB1bHNlT3B0aW9uczogSUFuaW1hdGlvbk9wdGlvbnMgPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKHB1bHNlT3B0aW9ucy5hbmNob3IgfHwgJ3RkUHVsc2UnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChwdWxzZU9wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKHB1bHNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsXG4gICAgICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KScsIG9mZnNldDogMC41IH0pLFxuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAxLjAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuY29uc3Qgbm9vcDogYW55ID0gKCkgPT4ge1xuICAvLyBlbXB0eSBtZXRob2Rcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogYW55O1xuICB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcbiAgb25DaGFuZ2U6IChfOiBhbnkpID0+IGFueTtcbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUhhc0NoYW5nZURldGVjdG9yUmVmIHtcbiAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbn1cblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBjb21wb25lbnQgd2l0aCBuZ01vZGVsIHN1cHBvcnQuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I8SUhhc0NoYW5nZURldGVjdG9yUmVmPj5cbiAgICAgICAgICAgICAgICAoYmFzZTogVCwgaW5pdGlhbFZhbHVlPzogYW55KTogQ29uc3RydWN0b3I8SUNvbnRyb2xWYWx1ZUFjY2Vzc29yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF92YWx1ZTogYW55ID0gaW5pdGlhbFZhbHVlO1xuICAgIHByaXZhdGUgX3N1YmplY3RWYWx1ZUNoYW5nZXM6IFN1YmplY3Q8YW55PjtcbiAgICB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTsgXG4gICAgICB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMgPSB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICAgIGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzLm5leHQodik7XG4gICAgICB9XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IG5vb3A7XG4gICAgb25Ub3VjaGVkID0gKCkgPT4gbm9vcDtcblxuICB9O1xufVxuIiwiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbi8qKiBJbnRlcmZhY2UgdG8gaW1wbGVtZW50IHdoZW4gYXBwbHlpbmcgdGhlIGRpc2FibGVkIG1peGluICovXG5leHBvcnQgaW50ZXJmYWNlIElDYW5EaXNhYmxlIHtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQ7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSB3aXRoIGEgYGRpc2FibGVkYCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcjx7fT4+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxJQ2FuRGlzYWJsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBib29sZWFuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLl9kaXNhYmxlZCAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVkQ2hhbmdlKHRoaXMuX2Rpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIC8qKiBOT1QgSU1QTEVNRU5URUQsIHRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGJ5IHN1YmNsYXNzZXMgaWYgbmVlZGVkICovXG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbi8qKiBJbnRlcmZhY2UgdG8gaW1wbGVtZW50IHdoZW4gYXBwbHlpbmcgdGhlIGRpc2FibGVkIG1peGluICovXG5leHBvcnQgaW50ZXJmYWNlIElDYW5EaXNhYmxlUmlwcGxlIHtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgb25EaXNhYmxlUmlwcGxlQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGNvbXBvbmVudCBvciBkaXJlY3RpdmUgd2l0aCBhIGBkaXNhYmxlZGAgcHJvcGVydHkuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlUmlwcGxlPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcjx7fT4+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxJQ2FuRGlzYWJsZVJpcHBsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZVJpcHBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlUmlwcGxlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVSaXBwbGU7XG4gICAgfVxuICAgIHNldCBkaXNhYmxlUmlwcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICBsZXQgbmV3VmFsdWU6IGJvb2xlYW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2Rpc2FibGVSaXBwbGUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVSaXBwbGUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVSaXBwbGVDaGFuZ2UodGhpcy5fZGlzYWJsZVJpcHBsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25EaXNhYmxlUmlwcGxlQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIC8qKiBOT1QgSU1QTEVNRU5URUQsIHRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGJ5IHN1YmNsYXNzZXMgaWYgbmVlZGVkICovXG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIENvdmFsZW50VmFsaWRhdG9ycyB7XG4gIHN0YXRpYyBtaW4obWluVmFsdWU6IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBsZXQgZnVuYzogVmFsaWRhdG9yRm4gPSAoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgaWYgKCEhVmFsaWRhdG9ycy5yZXF1aXJlZChjKSB8fCAoIW1pblZhbHVlICYmIG1pblZhbHVlICE9PSAwKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgbGV0IHY6IG51bWJlciA9IGMudmFsdWU7XG4gICAgICByZXR1cm4gdiA8IG1pblZhbHVlID9cbiAgICAgICAgeyBtaW46IHttaW5WYWx1ZTogbWluVmFsdWUsIGFjdHVhbFZhbHVlOiB2fSB9IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICBzdGF0aWMgbWF4KG1heFZhbHVlOiBhbnkpOiBWYWxpZGF0b3JGbiB7XG4gICAgbGV0IGZ1bmM6IFZhbGlkYXRvckZuID0gKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgIGlmICghIVZhbGlkYXRvcnMucmVxdWlyZWQoYykgfHwgKCFtYXhWYWx1ZSAmJiBtYXhWYWx1ZSAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGxldCB2OiBudW1iZXIgPSBjLnZhbHVlO1xuICAgICAgcmV0dXJuIHYgPiBtYXhWYWx1ZSA/XG4gICAgICAgIHsgbWF4OiB7bWF4VmFsdWU6IG1heFZhbHVlLCBhY3R1YWxWYWx1ZTogdn0gfSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgc3RhdGljIG51bWJlclJlcXVpcmVkKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gKE51bWJlci5pc05hTihjLnZhbHVlKSkgP1xuICAgICAgICB7IHJlcXVpcmVkOiB0cnVlIH0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gIH1cblxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIk5nTW9kZWwiLCJPcHRpb25hbCIsIkhvc3QiLCJIb3N0TGlzdGVuZXIiLCJQaXBlIiwiRGVjaW1hbFBpcGUiLCJJbmplY3QiLCJMT0NBTEVfSUQiLCJmaWx0ZXIiLCJSb3V0ZXNSZWNvZ25pemVkIiwicGFpcndpc2UiLCJJbmplY3RhYmxlIiwiUm91dGVyIiwiTmdNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsInRyaWdnZXIiLCJzdGF0ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsImdyb3VwIiwicXVlcnkiLCJhbmltYXRlQ2hpbGQiLCJhbmltYXRlIiwiQVVUT19TVFlMRSIsImtleWZyYW1lcyIsInRzbGliXzEuX19leHRlbmRzIiwiU3ViamVjdCIsImNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSIsIlZhbGlkYXRvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNFLDZCQUF3QyxNQUFlO1lBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztTQUFJOzs7Ozs7Ozs7UUFNM0Qsb0NBQU07Ozs7O1lBRE4sVUFDTyxLQUFZO2dCQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksUUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ25EO2FBQ0Y7O29CQWZGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7cUJBQ3pCOzs7Ozt3QkFKUUMsYUFBTyx1QkFPREMsYUFBUSxZQUFJQyxTQUFJOzs7OzZCQUs1QkMsaUJBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7O1FBTWxDLDBCQUFDO0tBaEJEOzs7Ozs7QUNKQTtRQUVBO1NBaUVDOzs7Ozs7UUE3REMsaUNBQVM7Ozs7O1lBQVQsVUFBVSxJQUFTLEVBQUUsU0FBZTs7Z0JBRWxDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7b0JBQ2xCLEdBQUcsR0FBUyxJQUFJLElBQUksQ0FB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