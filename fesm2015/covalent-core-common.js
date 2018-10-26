import { Directive, HostListener, Host, Optional, Pipe, Inject, LOCALE_ID, Injectable, NgModule } from '@angular/core';
import { NgModel, FormsModule, Validators } from '@angular/forms';
import { DecimalPipe, CommonModule } from '@angular/common';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { trigger, state, style, transition, animate, query, animateChild, group, AUTO_STYLE, keyframes } from '@angular/animations';
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

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
                    TD_VALIDATORS,
                ],
                exports: [
                    FormsModule,
                    CommonModule,
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

export { CovalentCommonModule, TdRotateAnimation, tdRotateAnimation, TdCollapseAnimation, tdCollapseAnimation, TdFadeInOutAnimation, tdFadeInOutAnimation, TdBounceAnimation, tdBounceAnimation, TdFlashAnimation, tdFlashAnimation, TdHeadshakeAnimation, tdHeadshakeAnimation, TdJelloAnimation, tdJelloAnimation, TdPulseAnimation, tdPulseAnimation, mixinControlValueAccessor, mixinDisabled, mixinDisableRipple, TdAutoTrimDirective, CovalentValidators, TdTimeAgoPipe, TdTimeDifferencePipe, TdBytesPipe, TdDigitsPipe, TdTruncatePipe, TdDecimalBytesPipe, TdTimeUntilPipe as ɵa, IconService as ɵc, RouterPathService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jb21tb24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9mb3Jtcy9hdXRvLXRyaW0vYXV0by10cmltLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL3RpbWUtYWdvL3RpbWUtYWdvLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90aW1lLWRpZmZlcmVuY2UvdGltZS1kaWZmZXJlbmNlLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90aW1lLXVudGlsL3RpbWUtdW50aWwucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL2J5dGVzL2J5dGVzLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy9kZWNpbWFsLWJ5dGVzL2RlY2ltYWwtYnl0ZXMucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL2RpZ2l0cy9kaWdpdHMucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL3RydW5jYXRlL3RydW5jYXRlLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9zZXJ2aWNlcy9yb3V0ZXItcGF0aC5zZXJ2aWNlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vc2VydmljZXMvaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvcm90YXRlL3JvdGF0ZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2NvbGxhcHNlL2NvbGxhcHNlLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvZmFkZS9mYWRlSW5PdXQuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9ib3VuY2UvYm91bmNlLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvZmxhc2gvZmxhc2guYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9oZWFkc2hha2UvaGVhZHNoYWtlLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvamVsbG8vamVsbG8uYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9wdWxzZS9wdWxzZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9iZWhhdmlvcnMvY29udHJvbC12YWx1ZS1hY2Nlc29yLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYmVoYXZpb3JzL2Rpc2FibGVkLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYmVoYXZpb3JzL2Rpc2FibGUtcmlwcGxlLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vZm9ybXMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdExpc3RlbmVyLCBIb3N0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkQXV0b1RyaW1dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRBdXRvVHJpbURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIF9tb2RlbDogTmdNb2RlbCkge31cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0J3MgKGJsdXIpIGV2ZW50IGFuZCB0cmltcyB2YWx1ZS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxuICBvbkJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGVsICYmIHRoaXMuX21vZGVsLnZhbHVlICYmIHR5cGVvZih0aGlzLl9tb2RlbC52YWx1ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9tb2RlbC51cGRhdGUuZW1pdCh0aGlzLl9tb2RlbC52YWx1ZS50cmltKCkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lQWdvJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRUaW1lQWdvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGltZTogYW55LCByZWZlcmVuY2U/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIENvbnZlcnQgdGltZSB0byBkYXRlIG9iamVjdCBpZiBub3QgYWxyZWFkeVxuICAgIHRpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgcmVmOiBEYXRlID0gbmV3IERhdGUocmVmZXJlbmNlKTtcblxuICAgIC8vIElmIG5vdCBhIHZhbGlkIHRpbWVzdGFtcCwgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gICAgaWYgKCF0aW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIC8vIEZvciB1bml0IHRlc3RpbmcsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZWNsYXJlIGEgc3RhdGljIHN0YXJ0IHRpbWVcbiAgICAvLyBmb3IgY2FsY3VsYXRpb25zLCBvciBlbHNlIHNwZWVkIG9mIHRlc3RzIGNhbiBib3JrLlxuICAgIGxldCBzdGFydFRpbWU6IG51bWJlciA9IGlzTmFOKHJlZi5nZXRUaW1lKCkpID8gRGF0ZS5ub3coKSA6IHJlZi5nZXRUaW1lKCk7XG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKHN0YXJ0VGltZSAtIHRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgc2Vjb25kIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBzZWNvbmRzIGFnbyc7XG4gICAgfVxuICAgIC8vIE1pbnV0ZXNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIG1pbnV0ZSBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgbWludXRlcyBhZ28nO1xuICAgIH1cbiAgICAvLyBIb3Vyc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgaG91ciBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDI0KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgaG91cnMgYWdvJztcbiAgICB9XG4gICAgLy8gRGF5c1xuICAgIGRpZmYgPSBkaWZmIC8gMjQ7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgZGF5IGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMzApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBkYXlzIGFnbyc7XG4gICAgfVxuICAgIC8vIE1vbnRoc1xuICAgIGRpZmYgPSBkaWZmIC8gMzA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgbW9udGggYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAxMikge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIG1vbnRocyBhZ28nO1xuICAgIH1cbiAgICAvLyBZZWFyc1xuICAgIGRpZmYgPSBkaWZmIC8gMTI7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgeWVhciBhZ28nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgeWVhcnMgYWdvJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGltZURpZmZlcmVuY2UnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkVGltZURpZmZlcmVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdGFydDogYW55LCBlbmQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBzdGFydFRpbWU6IERhdGUgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgbGV0IGVuZFRpbWU6IERhdGU7XG5cbiAgICBpZiAoZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZShlbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXJ0VGltZS5nZXRUaW1lKCkgfHwgIWVuZFRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgIGxldCBkYXlzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjAgKiA2MCAqIDI0KSk7XG4gICAgZGlmZiA9IGRpZmYgLSAoZGF5cyAqICg2MCAqIDYwICogMjQpKTtcblxuICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwICogNjApKTtcbiAgICBkaWZmID0gZGlmZiAtIChob3VycyAqICg2MCAqIDYwKSk7XG5cbiAgICBsZXQgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwKSk7XG4gICAgZGlmZiAtPSBtaW51dGVzICogKDYwKTtcblxuICAgIGxldCBzZWNvbmRzOiBudW1iZXIgPSBkaWZmO1xuXG4gICAgbGV0IHBhZDogc3RyaW5nID0gJzAwJztcblxuICAgIGxldCBkYXlzRm9ybWF0dGVkOiBzdHJpbmcgPSAnJztcblxuICAgIGlmIChkYXlzID4gMCAmJiBkYXlzIDwgMikge1xuICAgICAgZGF5c0Zvcm1hdHRlZCA9ICcgZGF5IC0gJztcbiAgICB9IGVsc2UgaWYgKGRheXMgPiAxKSB7XG4gICAgICBkYXlzRm9ybWF0dGVkID0gJyBkYXlzIC0gJyA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChkYXlzID4gMCA/IGRheXMgKyBkYXlzRm9ybWF0dGVkIDogZGF5c0Zvcm1hdHRlZCkgK1xuICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAoaG91cnMgKyAnJykubGVuZ3RoKSArIGhvdXJzICsgJzonICtcbiAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKG1pbnV0ZXMgKyAnJykubGVuZ3RoKSArIG1pbnV0ZXMgKyAnOicgK1xuICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAoc2Vjb25kcyArICcnKS5sZW5ndGgpICsgc2Vjb25kcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lVW50aWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRpbWVVbnRpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRpbWU6IGFueSwgcmVmZXJlbmNlPzogYW55KTogc3RyaW5nIHtcbiAgICAvLyBDb252ZXJ0IHRpbWUgdG8gZGF0ZSBvYmplY3QgaWYgbm90IGFscmVhZHlcbiAgICB0aW1lID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IHJlZjogRGF0ZSA9IG5ldyBEYXRlKHJlZmVyZW5jZSk7XG5cbiAgICAvLyBJZiBub3QgYSB2YWxpZCB0aW1lc3RhbXAsIHJldHVybiAnSW52YWxpZCBEYXRlJ1xuICAgIGlmICghdGltZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG5cbiAgICAvLyBGb3IgdW5pdCB0ZXN0aW5nLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gZGVjbGFyZSBhIHN0YXRpYyBzdGFydCB0aW1lXG4gICAgLy8gZm9yIGNhbGN1bGF0aW9ucywgb3IgZWxzZSBzcGVlZCBvZiB0ZXN0cyBjYW4gYm9yay5cbiAgICBsZXQgc3RhcnRUaW1lOiBudW1iZXIgPSBpc05hTihyZWYuZ2V0VGltZSgpKSA/IERhdGUubm93KCkgOiByZWYuZ2V0VGltZSgpO1xuICAgIGxldCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcblxuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIHNlY29uZCc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIHNlY29uZHMnO1xuICAgIH1cbiAgICAvLyBNaW51dGVzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBtaW51dGUnO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBtaW51dGVzJztcbiAgICB9XG4gICAgLy8gSG91cnNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIGhvdXInO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDI0KSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBob3Vycyc7XG4gICAgfVxuICAgIC8vIERheXNcbiAgICBkaWZmID0gZGlmZiAvIDI0O1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIGRheSc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMzApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIGRheXMnO1xuICAgIH1cbiAgICAvLyBNb250aHNcbiAgICBkaWZmID0gZGlmZiAvIDMwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIG1vbnRoJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAxMikge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgbW9udGhzJztcbiAgICB9XG4gICAgLy8gWWVhcnNcbiAgICBkaWZmID0gZGlmZiAvIDEyO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIHllYXInO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyB5ZWFycyc7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2J5dGVzJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZEJ5dGVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKiBgYnl0ZXNgIG5lZWRzIHRvIGJlIGBhbnlgIG9yIFR5cGVTY3JpcHQgY29tcGxhaW5zXG4gIFRyaWVkIGJvdGggYG51bWJlcmAgYW5kIGBudW1iZXIgfCBzdHJpbmdgICovXG4gIHRyYW5zZm9ybShieXRlczogYW55LCBwcmVjaXNpb246IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwIEInO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VJbnQoYnl0ZXMsIDEwKSkpIHtcbiAgICAgIC8qIElmIG5vdCBhIHZhbGlkIG51bWJlciwgcmV0dXJuICdJbnZhbGlkIE51bWJlcicgKi9cbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICBsZXQgazogbnVtYmVyID0gMTAyNDtcbiAgICBsZXQgc2l6ZXM6IHN0cmluZ1tdID0gWydCJywgJ0tpQicsICdNaUInLCAnR2lCJywgJ1RpQicsICdQaUInLCAnRWlCJywgJ1ppQicsICdZaUInXTtcbiAgICBsZXQgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RlY2ltYWxCeXRlcycsXG59KVxuXG5leHBvcnQgY2xhc3MgVGREZWNpbWFsQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qIGBieXRlc2AgbmVlZHMgdG8gYmUgYGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnNcbiAgVHJpZWQgYm90aCBgbnVtYmVyYCBhbmQgYG51bWJlciB8IHN0cmluZ2AgKi9cbiAgdHJhbnNmb3JtKGJ5dGVzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgaWYgKGJ5dGVzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAgQic7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChieXRlcywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJyAqL1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIGxldCBrOiBudW1iZXIgPSAxMDAwO1xuICAgIGxldCBzaXplczogc3RyaW5nW10gPSBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcbiAgICBsZXQgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBJbmplY3QsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdkaWdpdHMnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkRGlnaXRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHByaXZhdGUgX2RlY2ltYWxQaXBlOiBEZWNpbWFsUGlwZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcgPSAnZW4nKSB7XG4gICAgdGhpcy5fZGVjaW1hbFBpcGUgPSBuZXcgRGVjaW1hbFBpcGUodGhpcy5fbG9jYWxlKTtcbiAgfVxuXG4gIC8qIGBkaWdpdHNgIG5lZWRzIHRvIGJlIHR5cGUgYGRpZ2l0czogYW55YCBvciBUeXBlU2NyaXB0IGNvbXBsYWlucyAqL1xuICB0cmFuc2Zvcm0oZGlnaXRzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMSk6IHN0cmluZyB7XG4gICAgaWYgKGRpZ2l0cyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwJztcbiAgICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlSW50KGRpZ2l0cywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gdGhlIHZhbHVlICovXG4gICAgICByZXR1cm4gZGlnaXRzO1xuICAgIH0gZWxzZSBpZiAoZGlnaXRzIDwgMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxQaXBlLnRyYW5zZm9ybShkaWdpdHMudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgICB9XG4gICAgbGV0IGs6IG51bWJlciA9IDEwMDA7XG4gICAgbGV0IHNpemVzOiBzdHJpbmdbXSA9IFsnJywgJ0snLCAnTScsICdCJywgJ1QnLCAnUSddO1xuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGRpZ2l0cykgLyBNYXRoLmxvZyhrKSk7XG4gICAgbGV0IHNpemU6IHN0cmluZyA9IHNpemVzW2ldO1xuICAgIHJldHVybiB0aGlzLl9kZWNpbWFsUGlwZS50cmFuc2Zvcm0ocGFyc2VGbG9hdCgoZGlnaXRzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQocHJlY2lzaW9uKSkpICsgKHNpemUgPyAnICcgKyBzaXplIDogJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RydW5jYXRlJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGV4dDogYW55LCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIFRydW5jYXRlXG4gICAgbGV0IHRydW5jYXRlZDogc3RyaW5nID0gdGV4dC5zdWJzdHIoMCwgbGVuZ3RoKTtcblxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgaWYgKHRydW5jYXRlZC5sYXN0SW5kZXhPZignICcpID4gMCkge1xuICAgICAgICB0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0cnVuY2F0ZWQgKz0gJ8OiwoDCpic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXNSZWNvZ25pemVkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgZmlsdGVyLCBwYWlyd2lzZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlclBhdGhTZXJ2aWNlIHtcbnByaXZhdGUgc3RhdGljIF9wcmV2aW91c1JvdXRlOiBzdHJpbmcgPSAnLyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5fcm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKChlOiBhbnkpID0+IGUgaW5zdGFuY2VvZiBSb3V0ZXNSZWNvZ25pemVkKSxcbiAgICAgIHBhaXJ3aXNlKCksXG4gICAgKS5zdWJzY3JpYmUoKGU6IGFueVtdKSA9PiB7XG4gICAgICBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZSA9IGVbMF0udXJsQWZ0ZXJSZWRpcmVjdHM7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZ2V0IHRoZSByb3V0ZSB0aGUgdXNlciBwcmV2aW91c2x5IHdlbnQgdG9cbiAgKiBnb29kIGZvciB1c2UgaW4gYSBcImJhY2sgYnV0dG9uXCJcbiAgKi9cbiAgZ2V0UHJldmlvdXNSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IGJ5IFRlcmFkYXRhIENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVEVSQURBVEEgQ09SUE9SQVRJT04gQ09ORklERU5USUFMIEFORCBUUkFERSBTRUNSRVRcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJY29uU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfaWNvbnM6IHN0cmluZ1tdID0gW1xuICAgICdhY2Nlc3NfYWxhcm0nLFxuICAgICdhY2Nlc3NfYWxhcm1zJyxcbiAgICAnYWNjZXNzX3RpbWUnLFxuICAgICdhY2Nlc3NpYmlsaXR5JyxcbiAgICAnYWNjb3VudF9iYWxhbmNlJyxcbiAgICAnYWNjb3VudF9iYWxhbmNlX3dhbGxldCcsXG4gICAgJ2FjY291bnRfYm94JyxcbiAgICAnYWNjb3VudF9jaXJjbGUnLFxuICAgICdhZGQnLFxuICAgICdhZGRfYWxhcm0nLFxuICAgICdhZGRfYm94JyxcbiAgICAnYWRkX2NpcmNsZScsXG4gICAgJ2FkZF9jaXJjbGVfb3V0bGluZScsXG4gICAgJ2FkZF9zaG9wcGluZ19jYXJ0JyxcbiAgICAnYWRkX3RvX3Bob3RvcycsXG4gICAgJ2FkanVzdCcsXG4gICAgJ2FsYXJtJyxcbiAgICAnYWxhcm1fYWRkJyxcbiAgICAnYWxhcm1fb2ZmJyxcbiAgICAnYWxhcm1fb24nLFxuICAgICdhbGJ1bScsXG4gICAgJ2FuZHJvaWQnLFxuICAgICdhbm5vdW5jZW1lbnQnLFxuICAgICdhcHBzJyxcbiAgICAnYXJjaGl2ZScsXG4gICAgJ2Fycm93X2JhY2snLFxuICAgICdhcnJvd19kcm9wX2Rvd24nLFxuICAgICdhcnJvd19kcm9wX2Rvd25fY2lyY2xlJyxcbiAgICAnYXJyb3dfZHJvcF91cCcsXG4gICAgJ2Fycm93X2ZvcndhcmQnLFxuICAgICdhc3BlY3RfcmF0aW8nLFxuICAgICdhc3Nlc3NtZW50JyxcbiAgICAnYXNzaWdubWVudCcsXG4gICAgJ2Fzc2lnbm1lbnRfaW5kJyxcbiAgICAnYXNzaWdubWVudF9sYXRlJyxcbiAgICAnYXNzaWdubWVudF9yZXR1cm4nLFxuICAgICdhc3NpZ25tZW50X3JldHVybmVkJyxcbiAgICAnYXNzaWdubWVudF90dXJuZWRfaW4nLFxuICAgICdhc3Npc3RhbnRfcGhvdG8nLFxuICAgICdhdHRhY2hfZmlsZScsXG4gICAgJ2F0dGFjaF9tb25leScsXG4gICAgJ2F0dGFjaG1lbnQnLFxuICAgICdhdWRpb3RyYWNrJyxcbiAgICAnYXV0b3JlbmV3JyxcbiAgICAnYXZfdGltZXInLFxuICAgICdiYWNrc3BhY2UnLFxuICAgICdiYWNrdXAnLFxuICAgICdiYXR0ZXJ5X2FsZXJ0JyxcbiAgICAnYmF0dGVyeV9jaGFyZ2luZ19mdWxsJyxcbiAgICAnYmF0dGVyeV9mdWxsJyxcbiAgICAnYmF0dGVyeV9zdGQnLFxuICAgICdiYXR0ZXJ5X3Vua25vd24nLFxuICAgICdiZWVuaGVyZScsXG4gICAgJ2Jsb2NrJyxcbiAgICAnYmx1ZXRvb3RoJyxcbiAgICAnYmx1ZXRvb3RoX2F1ZGlvJyxcbiAgICAnYmx1ZXRvb3RoX2Nvbm5lY3RlZCcsXG4gICAgJ2JsdWV0b290aF9kaXNhYmxlZCcsXG4gICAgJ2JsdWV0b290aF9zZWFyY2hpbmcnLFxuICAgICdibHVyX2NpcmN1bGFyJyxcbiAgICAnYmx1cl9saW5lYXInLFxuICAgICdibHVyX29mZicsXG4gICAgJ2JsdXJfb24nLFxuICAgICdib29rJyxcbiAgICAnYm9va21hcmsnLFxuICAgICdib29rbWFya19ib3JkZXInLFxuICAgICdib3JkZXJfYWxsJyxcbiAgICAnYm9yZGVyX2JvdHRvbScsXG4gICAgJ2JvcmRlcl9jbGVhcicsXG4gICAgJ2JvcmRlcl9jb2xvcicsXG4gICAgJ2JvcmRlcl9ob3Jpem9udGFsJyxcbiAgICAnYm9yZGVyX2lubmVyJyxcbiAgICAnYm9yZGVyX2xlZnQnLFxuICAgICdib3JkZXJfb3V0ZXInLFxuICAgICdib3JkZXJfcmlnaHQnLFxuICAgICdib3JkZXJfc3R5bGUnLFxuICAgICdib3JkZXJfdG9wJyxcbiAgICAnYm9yZGVyX3ZlcnRpY2FsJyxcbiAgICAnYnJpZ2h0bmVzc18xJyxcbiAgICAnYnJpZ2h0bmVzc18yJyxcbiAgICAnYnJpZ2h0bmVzc18zJyxcbiAgICAnYnJpZ2h0bmVzc180JyxcbiAgICAnYnJpZ2h0bmVzc181JyxcbiAgICAnYnJpZ2h0bmVzc182JyxcbiAgICAnYnJpZ2h0bmVzc183JyxcbiAgICAnYnJpZ2h0bmVzc19hdXRvJyxcbiAgICAnYnJpZ2h0bmVzc19oaWdoJyxcbiAgICAnYnJpZ2h0bmVzc19sb3cnLFxuICAgICdicmlnaHRuZXNzX21lZGl1bScsXG4gICAgJ2Jyb2tlbl9pbWFnZScsXG4gICAgJ2JydXNoJyxcbiAgICAnYnVnX3JlcG9ydCcsXG4gICAgJ2J1aWxkJyxcbiAgICAnYnVzaW5lc3MnLFxuICAgICdjYWNoZWQnLFxuICAgICdjYWtlJyxcbiAgICAnY2FsbCcsXG4gICAgJ2NhbGxfZW5kJyxcbiAgICAnY2FsbF9tYWRlJyxcbiAgICAnY2FsbF9tZXJnZScsXG4gICAgJ2NhbGxfbWlzc2VkJyxcbiAgICAnY2FsbF9yZWNlaXZlZCcsXG4gICAgJ2NhbGxfc3BsaXQnLFxuICAgICdjYW1lcmEnLFxuICAgICdjYW1lcmFfYWx0JyxcbiAgICAnY2FtZXJhX2Zyb250JyxcbiAgICAnY2FtZXJhX3JlYXInLFxuICAgICdjYW1lcmFfcm9sbCcsXG4gICAgJ2NhbmNlbCcsXG4gICAgJ2Nhc3QnLFxuICAgICdjYXN0X2Nvbm5lY3RlZCcsXG4gICAgJ2NlbnRlcl9mb2N1c19zdHJvbmcnLFxuICAgICdjZW50ZXJfZm9jdXNfd2VhaycsXG4gICAgJ2NoYXQnLFxuICAgICdjaGVjaycsXG4gICAgJ2NoZWNrX2JveCcsXG4gICAgJ2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJyxcbiAgICAnY2hlY2tfY2lyY2xlJyxcbiAgICAnY2hldnJvbl9sZWZ0JyxcbiAgICAnY2hldnJvbl9yaWdodCcsXG4gICAgJ2NsYXNzJyxcbiAgICAnY2xlYXInLFxuICAgICdjbGVhcl9hbGwnLFxuICAgICdjbG9zZScsXG4gICAgJ2Nsb3NlZF9jYXB0aW9uJyxcbiAgICAnY2xvdWQnLFxuICAgICdjbG91ZF9jaXJjbGUnLFxuICAgICdjbG91ZF9kb25lJyxcbiAgICAnY2xvdWRfZG93bmxvYWQnLFxuICAgICdjbG91ZF9vZmYnLFxuICAgICdjbG91ZF9xdWV1ZScsXG4gICAgJ2Nsb3VkX3VwbG9hZCcsXG4gICAgJ2NvbGxlY3Rpb25zJyxcbiAgICAnY29sbGVjdGlvbnNfYm9va21hcmsnLFxuICAgICdjb2xvcl9sZW5zJyxcbiAgICAnY29sb3JpemUnLFxuICAgICdjb21tZW50JyxcbiAgICAnY29tcGFyZScsXG4gICAgJ2NvbXB1dGVyJyxcbiAgICAnY29uZmlybWF0aW9uX251bWJlcicsXG4gICAgJ2NvbnRhY3RfcGhvbmUnLFxuICAgICdjb250YWN0cycsXG4gICAgJ2NvbnRlbnRfY29weScsXG4gICAgJ2NvbnRlbnRfY3V0JyxcbiAgICAnY29udGVudF9wYXN0ZScsXG4gICAgJ2NvbnRyb2xfcG9pbnQnLFxuICAgICdjb250cm9sX3BvaW50X2R1cGxpY2F0ZScsXG4gICAgJ2NyZWF0ZScsXG4gICAgJ2NyZWRpdF9jYXJkJyxcbiAgICAnY3JvcCcsXG4gICAgJ2Nyb3BfMTZfOScsXG4gICAgJ2Nyb3BfM18yJyxcbiAgICAnY3JvcF81XzQnLFxuICAgICdjcm9wXzdfNScsXG4gICAgJ2Nyb3BfZGluJyxcbiAgICAnY3JvcF9mcmVlJyxcbiAgICAnY3JvcF9sYW5kc2NhcGUnLFxuICAgICdjcm9wX29yaWdpbmFsJyxcbiAgICAnY3JvcF9wb3J0cmFpdCcsXG4gICAgJ2Nyb3Bfc3F1YXJlJyxcbiAgICAnZGFzaGJvYXJkJyxcbiAgICAnZGF0YV91c2FnZScsXG4gICAgJ2RlaGF6ZScsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAnZGVza3RvcF9tYWMnLFxuICAgICdkZXNrdG9wX3dpbmRvd3MnLFxuICAgICdkZXRhaWxzJyxcbiAgICAnZGV2ZWxvcGVyX2JvYXJkJyxcbiAgICAnZGV2ZWxvcGVyX21vZGUnLFxuICAgICdkZXZpY2VfaHViJyxcbiAgICAnZGV2aWNlcycsXG4gICAgJ2RpYWxlcl9zaXAnLFxuICAgICdkaWFscGFkJyxcbiAgICAnZGlyZWN0aW9ucycsXG4gICAgJ2RpcmVjdGlvbnNfYmlrZScsXG4gICAgJ2RpcmVjdGlvbnNfYm9hdCcsXG4gICAgJ2RpcmVjdGlvbnNfYnVzJyxcbiAgICAnZGlyZWN0aW9uc19jYXInLFxuICAgICdkaXJlY3Rpb25zX3JhaWx3YXknLFxuICAgICdkaXJlY3Rpb25zX3J1bicsXG4gICAgJ2RpcmVjdGlvbnNfc3Vid2F5JyxcbiAgICAnZGlyZWN0aW9uc190cmFuc2l0JyxcbiAgICAnZGlyZWN0aW9uc193YWxrJyxcbiAgICAnZGlzY19mdWxsJyxcbiAgICAnZG5zJyxcbiAgICAnZG9fbm90X2Rpc3R1cmInLFxuICAgICdkb19ub3RfZGlzdHVyYl9hbHQnLFxuICAgICdkb2NrJyxcbiAgICAnZG9tYWluJyxcbiAgICAnZG9uZScsXG4gICAgJ2RvbmVfYWxsJyxcbiAgICAnZHJhZnRzJyxcbiAgICAnZHJpdmVfZXRhJyxcbiAgICAnZHZyJyxcbiAgICAnZWRpdCcsXG4gICAgJ2VqZWN0JyxcbiAgICAnZW1haWwnLFxuICAgICdlcXVhbGl6ZXInLFxuICAgICdlcnJvcicsXG4gICAgJ2Vycm9yX291dGxpbmUnLFxuICAgICdldmVudCcsXG4gICAgJ2V2ZW50X2F2YWlsYWJsZScsXG4gICAgJ2V2ZW50X2J1c3knLFxuICAgICdldmVudF9ub3RlJyxcbiAgICAnZXZlbnRfc2VhdCcsXG4gICAgJ2V4aXRfdG9fYXBwJyxcbiAgICAnZXhwYW5kX2xlc3MnLFxuICAgICdleHBhbmRfbW9yZScsXG4gICAgJ2V4cGxpY2l0JyxcbiAgICAnZXhwbG9yZScsXG4gICAgJ2V4cG9zdXJlJyxcbiAgICAnZXhwb3N1cmVfbmVnXzEnLFxuICAgICdleHBvc3VyZV9uZWdfMicsXG4gICAgJ2V4cG9zdXJlX3BsdXNfMScsXG4gICAgJ2V4cG9zdXJlX3BsdXNfMicsXG4gICAgJ2V4cG9zdXJlX3plcm8nLFxuICAgICdleHRlbnNpb24nLFxuICAgICdmYWNlJyxcbiAgICAnZmFzdF9mb3J3YXJkJyxcbiAgICAnZmFzdF9yZXdpbmQnLFxuICAgICdmYXZvcml0ZScsXG4gICAgJ2Zhdm9yaXRlX2JvcmRlcicsXG4gICAgJ2ZlZWRiYWNrJyxcbiAgICAnZmlsZV9kb3dubG9hZCcsXG4gICAgJ2ZpbGVfdXBsb2FkJyxcbiAgICAnZmlsdGVyJyxcbiAgICAnZmlsdGVyXzEnLFxuICAgICdmaWx0ZXJfMicsXG4gICAgJ2ZpbHRlcl8zJyxcbiAgICAnZmlsdGVyXzQnLFxuICAgICdmaWx0ZXJfNScsXG4gICAgJ2ZpbHRlcl82JyxcbiAgICAnZmlsdGVyXzcnLFxuICAgICdmaWx0ZXJfOCcsXG4gICAgJ2ZpbHRlcl85JyxcbiAgICAnZmlsdGVyXzlfcGx1cycsXG4gICAgJ2ZpbHRlcl9iX2FuZF93JyxcbiAgICAnZmlsdGVyX2NlbnRlcl9mb2N1cycsXG4gICAgJ2ZpbHRlcl9kcmFtYScsXG4gICAgJ2ZpbHRlcl9mcmFtZXMnLFxuICAgICdmaWx0ZXJfaGRyJyxcbiAgICAnZmlsdGVyX2xpc3QnLFxuICAgICdmaWx0ZXJfbm9uZScsXG4gICAgJ2ZpbHRlcl90aWx0X3NoaWZ0JyxcbiAgICAnZmlsdGVyX3ZpbnRhZ2UnLFxuICAgICdmaW5kX2luX3BhZ2UnLFxuICAgICdmaW5kX3JlcGxhY2UnLFxuICAgICdmbGFnJyxcbiAgICAnZmxhcmUnLFxuICAgICdmbGFzaF9hdXRvJyxcbiAgICAnZmxhc2hfb2ZmJyxcbiAgICAnZmxhc2hfb24nLFxuICAgICdmbGlnaHQnLFxuICAgICdmbGlnaHRfbGFuZCcsXG4gICAgJ2ZsaWdodF90YWtlb2ZmJyxcbiAgICAnZmxpcCcsXG4gICAgJ2ZsaXBfdG9fYmFjaycsXG4gICAgJ2ZsaXBfdG9fZnJvbnQnLFxuICAgICdmb2xkZXInLFxuICAgICdmb2xkZXJfb3BlbicsXG4gICAgJ2ZvbGRlcl9zaGFyZWQnLFxuICAgICdmb2xkZXJfc3BlY2lhbCcsXG4gICAgJ2ZvbnRfZG93bmxvYWQnLFxuICAgICdmb3JtYXRfYWxpZ25fY2VudGVyJyxcbiAgICAnZm9ybWF0X2FsaWduX2p1c3RpZnknLFxuICAgICdmb3JtYXRfYWxpZ25fbGVmdCcsXG4gICAgJ2Zvcm1hdF9hbGlnbl9yaWdodCcsXG4gICAgJ2Zvcm1hdF9ib2xkJyxcbiAgICAnZm9ybWF0X2NsZWFyJyxcbiAgICAnZm9ybWF0X2NvbG9yX2ZpbGwnLFxuICAgICdmb3JtYXRfY29sb3JfcmVzZXQnLFxuICAgICdmb3JtYXRfY29sb3JfdGV4dCcsXG4gICAgJ2Zvcm1hdF9pbmRlbnRfZGVjcmVhc2UnLFxuICAgICdmb3JtYXRfaW5kZW50X2luY3JlYXNlJyxcbiAgICAnZm9ybWF0X2l0YWxpYycsXG4gICAgJ2Zvcm1hdF9saW5lX3NwYWNpbmcnLFxuICAgICdmb3JtYXRfbGlzdF9idWxsZXRlZCcsXG4gICAgJ2Zvcm1hdF9saXN0X251bWJlcmVkJyxcbiAgICAnZm9ybWF0X3BhaW50JyxcbiAgICAnZm9ybWF0X3F1b3RlJyxcbiAgICAnZm9ybWF0X3NpemUnLFxuICAgICdmb3JtYXRfc3RyaWtldGhyb3VnaCcsXG4gICAgJ2Zvcm1hdF90ZXh0ZGlyZWN0aW9uX2xfdG9fcicsXG4gICAgJ2Zvcm1hdF90ZXh0ZGlyZWN0aW9uX3JfdG9fbCcsXG4gICAgJ2Zvcm1hdF91bmRlcmxpbmVkJyxcbiAgICAnZm9ydW0nLFxuICAgICdmb3J3YXJkJyxcbiAgICAnZm9yd2FyZF8xMCcsXG4gICAgJ2ZvcndhcmRfMzAnLFxuICAgICdmb3J3YXJkXzUnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbl9leGl0JyxcbiAgICAnZnVuY3Rpb25zJyxcbiAgICAnZ2FtZXBhZCcsXG4gICAgJ2dhbWVzJyxcbiAgICAnZ2VzdHVyZScsXG4gICAgJ2dldF9hcHAnLFxuICAgICdnaWYnLFxuICAgICdncHNfZml4ZWQnLFxuICAgICdncHNfbm90X2ZpeGVkJyxcbiAgICAnZ3BzX29mZicsXG4gICAgJ2dyYWRlJyxcbiAgICAnZ3JhZGllbnQnLFxuICAgICdncmFpbicsXG4gICAgJ2dyYXBoaWNfZXEnLFxuICAgICdncmlkX29mZicsXG4gICAgJ2dyaWRfb24nLFxuICAgICdncm91cCcsXG4gICAgJ2dyb3VwX2FkZCcsXG4gICAgJ2dyb3VwX3dvcmsnLFxuICAgICdoZCcsXG4gICAgJ2hkcl9vZmYnLFxuICAgICdoZHJfb24nLFxuICAgICdoZHJfc3Ryb25nJyxcbiAgICAnaGRyX3dlYWsnLFxuICAgICdoZWFkc2V0JyxcbiAgICAnaGVhZHNldF9taWMnLFxuICAgICdoZWFsaW5nJyxcbiAgICAnaGVhcmluZycsXG4gICAgJ2hlbHAnLFxuICAgICdoZWxwX291dGxpbmUnLFxuICAgICdoaWdoX3F1YWxpdHknLFxuICAgICdoaWdobGlnaHRfb2ZmJyxcbiAgICAnaGlzdG9yeScsXG4gICAgJ2hvbWUnLFxuICAgICdob3RlbCcsXG4gICAgJ2hvdXJnbGFzc19lbXB0eScsXG4gICAgJ2hvdXJnbGFzc19mdWxsJyxcbiAgICAnaHR0cCcsXG4gICAgJ2h0dHBzJyxcbiAgICAnaW1hZ2UnLFxuICAgICdpbWFnZV9hc3BlY3RfcmF0aW8nLFxuICAgICdpbXBvcnRfZXhwb3J0JyxcbiAgICAnaW5ib3gnLFxuICAgICdpbmRldGVybWluYXRlX2NoZWNrX2JveCcsXG4gICAgJ2luZm8nLFxuICAgICdpbmZvX291dGxpbmUnLFxuICAgICdpbnB1dCcsXG4gICAgJ2luc2VydF9jaGFydCcsXG4gICAgJ2luc2VydF9jb21tZW50JyxcbiAgICAnaW5zZXJ0X2RyaXZlX2ZpbGUnLFxuICAgICdpbnNlcnRfZW1vdGljb24nLFxuICAgICdpbnNlcnRfaW52aXRhdGlvbicsXG4gICAgJ2luc2VydF9saW5rJyxcbiAgICAnaW5zZXJ0X3Bob3RvJyxcbiAgICAnaW52ZXJ0X2NvbG9ycycsXG4gICAgJ2ludmVydF9jb2xvcnNfb2ZmJyxcbiAgICAnaXNvJyxcbiAgICAna2V5Ym9hcmQnLFxuICAgICdrZXlib2FyZF9hcnJvd19kb3duJyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfbGVmdCcsXG4gICAgJ2tleWJvYXJkX2Fycm93X3JpZ2h0JyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfdXAnLFxuICAgICdrZXlib2FyZF9iYWNrc3BhY2UnLFxuICAgICdrZXlib2FyZF9jYXBzbG9jaycsXG4gICAgJ2tleWJvYXJkX2hpZGUnLFxuICAgICdrZXlib2FyZF9yZXR1cm4nLFxuICAgICdrZXlib2FyZF90YWInLFxuICAgICdrZXlib2FyZF92b2ljZScsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGFiZWxfb3V0bGluZScsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmd1YWdlJyxcbiAgICAnbGFwdG9wJyxcbiAgICAnbGFwdG9wX2Nocm9tZWJvb2snLFxuICAgICdsYXB0b3BfbWFjJyxcbiAgICAnbGFwdG9wX3dpbmRvd3MnLFxuICAgICdsYXVuY2gnLFxuICAgICdsYXllcnMnLFxuICAgICdsYXllcnNfY2xlYXInLFxuICAgICdsZWFrX2FkZCcsXG4gICAgJ2xlYWtfcmVtb3ZlJyxcbiAgICAnbGVucycsXG4gICAgJ2xpYnJhcnlfYWRkJyxcbiAgICAnbGlicmFyeV9ib29rcycsXG4gICAgJ2xpYnJhcnlfbXVzaWMnLFxuICAgICdsaW5rJyxcbiAgICAnbGlzdCcsXG4gICAgJ2xpdmVfaGVscCcsXG4gICAgJ2xpdmVfdHYnLFxuICAgICdsb2NhbF9hY3Rpdml0eScsXG4gICAgJ2xvY2FsX2FpcnBvcnQnLFxuICAgICdsb2NhbF9hdG0nLFxuICAgICdsb2NhbF9iYXInLFxuICAgICdsb2NhbF9jYWZlJyxcbiAgICAnbG9jYWxfY2FyX3dhc2gnLFxuICAgICdsb2NhbF9jb252ZW5pZW5jZV9zdG9yZScsXG4gICAgJ2xvY2FsX2RpbmluZycsXG4gICAgJ2xvY2FsX2RyaW5rJyxcbiAgICAnbG9jYWxfZmxvcmlzdCcsXG4gICAgJ2xvY2FsX2dhc19zdGF0aW9uJyxcbiAgICAnbG9jYWxfZ3JvY2VyeV9zdG9yZScsXG4gICAgJ2xvY2FsX2hvc3BpdGFsJyxcbiAgICAnbG9jYWxfaG90ZWwnLFxuICAgICdsb2NhbF9sYXVuZHJ5X3NlcnZpY2UnLFxuICAgICdsb2NhbF9saWJyYXJ5JyxcbiAgICAnbG9jYWxfbWFsbCcsXG4gICAgJ2xvY2FsX21vdmllcycsXG4gICAgJ2xvY2FsX29mZmVyJyxcbiAgICAnbG9jYWxfcGFya2luZycsXG4gICAgJ2xvY2FsX3BoYXJtYWN5JyxcbiAgICAnbG9jYWxfcGhvbmUnLFxuICAgICdsb2NhbF9waXp6YScsXG4gICAgJ2xvY2FsX3BsYXknLFxuICAgICdsb2NhbF9wb3N0X29mZmljZScsXG4gICAgJ2xvY2FsX3ByaW50c2hvcCcsXG4gICAgJ2xvY2FsX3NlZScsXG4gICAgJ2xvY2FsX3NoaXBwaW5nJyxcbiAgICAnbG9jYWxfdGF4aScsXG4gICAgJ2xvY2F0aW9uX2NpdHknLFxuICAgICdsb2NhdGlvbl9kaXNhYmxlZCcsXG4gICAgJ2xvY2F0aW9uX29mZicsXG4gICAgJ2xvY2F0aW9uX29uJyxcbiAgICAnbG9jYXRpb25fc2VhcmNoaW5nJyxcbiAgICAnbG9jaycsXG4gICAgJ2xvY2tfb3BlbicsXG4gICAgJ2xvY2tfb3V0bGluZScsXG4gICAgJ2xvb2tzJyxcbiAgICAnbG9va3NfMycsXG4gICAgJ2xvb2tzXzQnLFxuICAgICdsb29rc181JyxcbiAgICAnbG9va3NfNicsXG4gICAgJ2xvb2tzX29uZScsXG4gICAgJ2xvb2tzX3R3bycsXG4gICAgJ2xvb3AnLFxuICAgICdsb3VwZScsXG4gICAgJ2xveWFsdHknLFxuICAgICdtYWlsJyxcbiAgICAnbWFwJyxcbiAgICAnbWFya3VucmVhZCcsXG4gICAgJ21hcmt1bnJlYWRfbWFpbGJveCcsXG4gICAgJ21lbW9yeScsXG4gICAgJ21lbnUnLFxuICAgICdtZXJnZV90eXBlJyxcbiAgICAnbWVzc2FnZScsXG4gICAgJ21pYycsXG4gICAgJ21pY19ub25lJyxcbiAgICAnbWljX29mZicsXG4gICAgJ21tcycsXG4gICAgJ21vZGVfY29tbWVudCcsXG4gICAgJ21vZGVfZWRpdCcsXG4gICAgJ21vbmV5X29mZicsXG4gICAgJ21vbm9jaHJvbWVfcGhvdG9zJyxcbiAgICAnbW9vZCcsXG4gICAgJ21vb2RfYmFkJyxcbiAgICAnbW9yZScsXG4gICAgJ21vcmVfaG9yaXonLFxuICAgICdtb3JlX3ZlcnQnLFxuICAgICdtb3VzZScsXG4gICAgJ21vdmllJyxcbiAgICAnbW92aWVfY3JlYXRpb24nLFxuICAgICdtdXNpY19ub3RlJyxcbiAgICAnbXlfbGlicmFyeV9hZGQnLFxuICAgICdteV9saWJyYXJ5X2Jvb2tzJyxcbiAgICAnbXlfbGlicmFyeV9tdXNpYycsXG4gICAgJ215X2xvY2F0aW9uJyxcbiAgICAnbmF0dXJlJyxcbiAgICAnbmF0dXJlX3Blb3BsZScsXG4gICAgJ25hdmlnYXRlX2JlZm9yZScsXG4gICAgJ25hdmlnYXRlX25leHQnLFxuICAgICduYXZpZ2F0aW9uJyxcbiAgICAnbmV0d29ya19jZWxsJyxcbiAgICAnbmV0d29ya19sb2NrZWQnLFxuICAgICduZXR3b3JrX3dpZmknLFxuICAgICduZXdfcmVsZWFzZXMnLFxuICAgICduZmMnLFxuICAgICdub19zaW0nLFxuICAgICdub3RfaW50ZXJlc3RlZCcsXG4gICAgJ25vdGVfYWRkJyxcbiAgICAnbm90aWZpY2F0aW9ucycsXG4gICAgJ25vdGlmaWNhdGlvbnNfYWN0aXZlJyxcbiAgICAnbm90aWZpY2F0aW9uc19ub25lJyxcbiAgICAnbm90aWZpY2F0aW9uc19vZmYnLFxuICAgICdub3RpZmljYXRpb25zX3BhdXNlZCcsXG4gICAgJ29mZmxpbmVfcGluJyxcbiAgICAnb25kZW1hbmRfdmlkZW8nLFxuICAgICdvcGVuX2luX2Jyb3dzZXInLFxuICAgICdvcGVuX2luX25ldycsXG4gICAgJ29wZW5fd2l0aCcsXG4gICAgJ3BhZ2VzJyxcbiAgICAncGFnZXZpZXcnLFxuICAgICdwYWxldHRlJyxcbiAgICAncGFub3JhbWEnLFxuICAgICdwYW5vcmFtYV9maXNoX2V5ZScsXG4gICAgJ3Bhbm9yYW1hX2hvcml6b250YWwnLFxuICAgICdwYW5vcmFtYV92ZXJ0aWNhbCcsXG4gICAgJ3Bhbm9yYW1hX3dpZGVfYW5nbGUnLFxuICAgICdwYXJ0eV9tb2RlJyxcbiAgICAncGF1c2UnLFxuICAgICdwYXVzZV9jaXJjbGVfZmlsbGVkJyxcbiAgICAncGF1c2VfY2lyY2xlX291dGxpbmUnLFxuICAgICdwYXltZW50JyxcbiAgICAncGVvcGxlJyxcbiAgICAncGVvcGxlX291dGxpbmUnLFxuICAgICdwZXJtX2NhbWVyYV9taWMnLFxuICAgICdwZXJtX2NvbnRhY3RfY2FsZW5kYXInLFxuICAgICdwZXJtX2RhdGFfc2V0dGluZycsXG4gICAgJ3Blcm1fZGV2aWNlX2luZm9ybWF0aW9uJyxcbiAgICAncGVybV9pZGVudGl0eScsXG4gICAgJ3Blcm1fbWVkaWEnLFxuICAgICdwZXJtX3Bob25lX21zZycsXG4gICAgJ3Blcm1fc2Nhbl93aWZpJyxcbiAgICAncGVyc29uJyxcbiAgICAncGVyc29uX2FkZCcsXG4gICAgJ3BlcnNvbl9vdXRsaW5lJyxcbiAgICAncGVyc29uX3BpbicsXG4gICAgJ3BlcnNvbmFsX3ZpZGVvJyxcbiAgICAncGhvbmUnLFxuICAgICdwaG9uZV9hbmRyb2lkJyxcbiAgICAncGhvbmVfYmx1ZXRvb3RoX3NwZWFrZXInLFxuICAgICdwaG9uZV9mb3J3YXJkZWQnLFxuICAgICdwaG9uZV9pbl90YWxrJyxcbiAgICAncGhvbmVfaXBob25lJyxcbiAgICAncGhvbmVfbG9ja2VkJyxcbiAgICAncGhvbmVfbWlzc2VkJyxcbiAgICAncGhvbmVfcGF1c2VkJyxcbiAgICAncGhvbmVsaW5rJyxcbiAgICAncGhvbmVsaW5rX2VyYXNlJyxcbiAgICAncGhvbmVsaW5rX2xvY2snLFxuICAgICdwaG9uZWxpbmtfb2ZmJyxcbiAgICAncGhvbmVsaW5rX3JpbmcnLFxuICAgICdwaG9uZWxpbmtfc2V0dXAnLFxuICAgICdwaG90bycsXG4gICAgJ3Bob3RvX2FsYnVtJyxcbiAgICAncGhvdG9fY2FtZXJhJyxcbiAgICAncGhvdG9fbGlicmFyeScsXG4gICAgJ3Bob3RvX3NpemVfc2VsZWN0X2FjdHVhbCcsXG4gICAgJ3Bob3RvX3NpemVfc2VsZWN0X2xhcmdlJyxcbiAgICAncGhvdG9fc2l6ZV9zZWxlY3Rfc21hbGwnLFxuICAgICdwaWN0dXJlX2FzX3BkZicsXG4gICAgJ3BpY3R1cmVfaW5fcGljdHVyZScsXG4gICAgJ3Bpbl9kcm9wJyxcbiAgICAncGxhY2UnLFxuICAgICdwbGF5X2Fycm93JyxcbiAgICAncGxheV9jaXJjbGVfZmlsbGVkJyxcbiAgICAncGxheV9jaXJjbGVfb3V0bGluZScsXG4gICAgJ3BsYXlfZm9yX3dvcmsnLFxuICAgICdwbGF5X3Nob3BwaW5nX2JhZycsXG4gICAgJ3BsYXlsaXN0X2FkZCcsXG4gICAgJ3BsdXNfb25lJyxcbiAgICAncG9sbCcsXG4gICAgJ3BvbHltZXInLFxuICAgICdwb3J0YWJsZV93aWZpX29mZicsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG93ZXInLFxuICAgICdwb3dlcl9pbnB1dCcsXG4gICAgJ3Bvd2VyX3NldHRpbmdzX25ldycsXG4gICAgJ3ByZXNlbnRfdG9fYWxsJyxcbiAgICAncHJpbnQnLFxuICAgICdwdWJsaWMnLFxuICAgICdwdWJsaXNoJyxcbiAgICAncXVlcnlfYnVpbGRlcicsXG4gICAgJ3F1ZXN0aW9uX2Fuc3dlcicsXG4gICAgJ3F1ZXVlJyxcbiAgICAncXVldWVfbXVzaWMnLFxuICAgICdyYWRpbycsXG4gICAgJ3JhZGlvX2J1dHRvbl9jaGVja2VkJyxcbiAgICAncmFkaW9fYnV0dG9uX3VuY2hlY2tlZCcsXG4gICAgJ3JhdGVfcmV2aWV3JyxcbiAgICAncmVjZWlwdCcsXG4gICAgJ3JlY2VudF9hY3RvcnMnLFxuICAgICdyZWRlZW0nLFxuICAgICdyZWRvJyxcbiAgICAncmVmcmVzaCcsXG4gICAgJ3JlbW92ZScsXG4gICAgJ3JlbW92ZV9jaXJjbGUnLFxuICAgICdyZW1vdmVfY2lyY2xlX291dGxpbmUnLFxuICAgICdyZW1vdmVfcmVkX2V5ZScsXG4gICAgJ3Jlb3JkZXInLFxuICAgICdyZXBlYXQnLFxuICAgICdyZXBlYXRfb25lJyxcbiAgICAncmVwbGF5JyxcbiAgICAncmVwbGF5XzEwJyxcbiAgICAncmVwbGF5XzMwJyxcbiAgICAncmVwbGF5XzUnLFxuICAgICdyZXBseScsXG4gICAgJ3JlcGx5X2FsbCcsXG4gICAgJ3JlcG9ydCcsXG4gICAgJ3JlcG9ydF9wcm9ibGVtJyxcbiAgICAncmVzdGF1cmFudF9tZW51JyxcbiAgICAncmVzdG9yZScsXG4gICAgJ3Jpbmdfdm9sdW1lJyxcbiAgICAncm9vbScsXG4gICAgJ3JvdGF0ZV85MF9kZWdyZWVzX2NjdycsXG4gICAgJ3JvdGF0ZV9sZWZ0JyxcbiAgICAncm90YXRlX3JpZ2h0JyxcbiAgICAncm91dGVyJyxcbiAgICAnc2F0ZWxsaXRlJyxcbiAgICAnc2F2ZScsXG4gICAgJ3NjYW5uZXInLFxuICAgICdzY2hlZHVsZScsXG4gICAgJ3NjaG9vbCcsXG4gICAgJ3NjcmVlbl9sb2NrX2xhbmRzY2FwZScsXG4gICAgJ3NjcmVlbl9sb2NrX3BvcnRyYWl0JyxcbiAgICAnc2NyZWVuX2xvY2tfcm90YXRpb24nLFxuICAgICdzY3JlZW5fcm90YXRpb24nLFxuICAgICdzZF9jYXJkJyxcbiAgICAnc2Rfc3RvcmFnZScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NlY3VyaXR5JyxcbiAgICAnc2VsZWN0X2FsbCcsXG4gICAgJ3NlbmQnLFxuICAgICdzZXR0aW5ncycsXG4gICAgJ3NldHRpbmdzX2FwcGxpY2F0aW9ucycsXG4gICAgJ3NldHRpbmdzX2JhY2t1cF9yZXN0b3JlJyxcbiAgICAnc2V0dGluZ3NfYmx1ZXRvb3RoJyxcbiAgICAnc2V0dGluZ3NfYnJpZ2h0bmVzcycsXG4gICAgJ3NldHRpbmdzX2NlbGwnLFxuICAgICdzZXR0aW5nc19ldGhlcm5ldCcsXG4gICAgJ3NldHRpbmdzX2lucHV0X2FudGVubmEnLFxuICAgICdzZXR0aW5nc19pbnB1dF9jb21wb25lbnQnLFxuICAgICdzZXR0aW5nc19pbnB1dF9jb21wb3NpdGUnLFxuICAgICdzZXR0aW5nc19pbnB1dF9oZG1pJyxcbiAgICAnc2V0dGluZ3NfaW5wdXRfc3ZpZGVvJyxcbiAgICAnc2V0dGluZ3Nfb3ZlcnNjYW4nLFxuICAgICdzZXR0aW5nc19waG9uZScsXG4gICAgJ3NldHRpbmdzX3Bvd2VyJyxcbiAgICAnc2V0dGluZ3NfcmVtb3RlJyxcbiAgICAnc2V0dGluZ3Nfc3lzdGVtX2RheWRyZWFtJyxcbiAgICAnc2V0dGluZ3Nfdm9pY2UnLFxuICAgICdzaGFyZScsXG4gICAgJ3Nob3AnLFxuICAgICdzaG9wX3R3bycsXG4gICAgJ3Nob3BwaW5nX2Jhc2tldCcsXG4gICAgJ3Nob3BwaW5nX2NhcnQnLFxuICAgICdzaHVmZmxlJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyXzRfYmFyJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyX2Nvbm5lY3RlZF9ub19pbnRlcm5ldF80X2JhcicsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9ub19zaW0nLFxuICAgICdzaWduYWxfY2VsbHVsYXJfbnVsbCcsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9vZmYnLFxuICAgICdzaWduYWxfd2lmaV80X2JhcicsXG4gICAgJ3NpZ25hbF93aWZpXzRfYmFyX2xvY2snLFxuICAgICdzaWduYWxfd2lmaV9vZmYnLFxuICAgICdzaW1fY2FyZCcsXG4gICAgJ3NpbV9jYXJkX2FsZXJ0JyxcbiAgICAnc2tpcF9uZXh0JyxcbiAgICAnc2tpcF9wcmV2aW91cycsXG4gICAgJ3NsaWRlc2hvdycsXG4gICAgJ3NtYXJ0cGhvbmUnLFxuICAgICdzbXMnLFxuICAgICdzbXNfZmFpbGVkJyxcbiAgICAnc25vb3plJyxcbiAgICAnc29ydCcsXG4gICAgJ3NvcnRfYnlfYWxwaGEnLFxuICAgICdzcGFjZV9iYXInLFxuICAgICdzcGVha2VyJyxcbiAgICAnc3BlYWtlcl9ncm91cCcsXG4gICAgJ3NwZWFrZXJfbm90ZXMnLFxuICAgICdzcGVha2VyX3Bob25lJyxcbiAgICAnc3BlbGxjaGVjaycsXG4gICAgJ3N0YXInLFxuICAgICdzdGFyX2JvcmRlcicsXG4gICAgJ3N0YXJfaGFsZicsXG4gICAgJ3N0YXJzJyxcbiAgICAnc3RheV9jdXJyZW50X2xhbmRzY2FwZScsXG4gICAgJ3N0YXlfY3VycmVudF9wb3J0cmFpdCcsXG4gICAgJ3N0YXlfcHJpbWFyeV9sYW5kc2NhcGUnLFxuICAgICdzdGF5X3ByaW1hcnlfcG9ydHJhaXQnLFxuICAgICdzdG9wJyxcbiAgICAnc3RvcmFnZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3RvcmVfbWFsbF9kaXJlY3RvcnknLFxuICAgICdzdHJhaWdodGVuJyxcbiAgICAnc3RyaWtldGhyb3VnaF9zJyxcbiAgICAnc3R5bGUnLFxuICAgICdzdWJqZWN0JyxcbiAgICAnc3VidGl0bGVzJyxcbiAgICAnc3VwZXJ2aXNvcl9hY2NvdW50JyxcbiAgICAnc3Vycm91bmRfc291bmQnLFxuICAgICdzd2FwX2NhbGxzJyxcbiAgICAnc3dhcF9ob3JpeicsXG4gICAgJ3N3YXBfdmVydCcsXG4gICAgJ3N3YXBfdmVydGljYWxfY2lyY2xlJyxcbiAgICAnc3dpdGNoX2NhbWVyYScsXG4gICAgJ3N3aXRjaF92aWRlbycsXG4gICAgJ3N5bmMnLFxuICAgICdzeW5jX2Rpc2FibGVkJyxcbiAgICAnc3luY19wcm9ibGVtJyxcbiAgICAnc3lzdGVtX3VwZGF0ZScsXG4gICAgJ3N5c3RlbV91cGRhdGVfYWx0JyxcbiAgICAndGFiJyxcbiAgICAndGFiX3Vuc2VsZWN0ZWQnLFxuICAgICd0YWJsZXQnLFxuICAgICd0YWJsZXRfYW5kcm9pZCcsXG4gICAgJ3RhYmxldF9tYWMnLFxuICAgICd0YWdfZmFjZXMnLFxuICAgICd0YXBfYW5kX3BsYXknLFxuICAgICd0ZXJyYWluJyxcbiAgICAndGV4dF9mb3JtYXQnLFxuICAgICd0ZXh0c21zJyxcbiAgICAndGV4dHVyZScsXG4gICAgJ3RoZWF0ZXJzJyxcbiAgICAndGh1bWJfZG93bicsXG4gICAgJ3RodW1iX3VwJyxcbiAgICAndGh1bWJzX3VwX2Rvd24nLFxuICAgICd0aW1lX3RvX2xlYXZlJyxcbiAgICAndGltZWxhcHNlJyxcbiAgICAndGltZXInLFxuICAgICd0aW1lcl8xMCcsXG4gICAgJ3RpbWVyXzMnLFxuICAgICd0aW1lcl9vZmYnLFxuICAgICd0b2MnLFxuICAgICd0b2RheScsXG4gICAgJ3RvbGwnLFxuICAgICd0b25hbGl0eScsXG4gICAgJ3RveXMnLFxuICAgICd0cmFja19jaGFuZ2VzJyxcbiAgICAndHJhZmZpYycsXG4gICAgJ3RyYW5zZm9ybScsXG4gICAgJ3RyYW5zbGF0ZScsXG4gICAgJ3RyZW5kaW5nX2Rvd24nLFxuICAgICd0cmVuZGluZ19mbGF0JyxcbiAgICAndHJlbmRpbmdfdXAnLFxuICAgICd0dW5lJyxcbiAgICAndHVybmVkX2luJyxcbiAgICAndHVybmVkX2luX25vdCcsXG4gICAgJ3R2JyxcbiAgICAndW5kbycsXG4gICAgJ3VuZm9sZF9sZXNzJyxcbiAgICAndW5mb2xkX21vcmUnLFxuICAgICd1c2InLFxuICAgICd2ZXJpZmllZF91c2VyJyxcbiAgICAndmVydGljYWxfYWxpZ25fYm90dG9tJyxcbiAgICAndmVydGljYWxfYWxpZ25fY2VudGVyJyxcbiAgICAndmVydGljYWxfYWxpZ25fdG9wJyxcbiAgICAndmlicmF0aW9uJyxcbiAgICAndmlkZW9fbGlicmFyeScsXG4gICAgJ3ZpZGVvY2FtJyxcbiAgICAndmlkZW9jYW1fb2ZmJyxcbiAgICAndmlld19hZ2VuZGEnLFxuICAgICd2aWV3X2FycmF5JyxcbiAgICAndmlld19jYXJvdXNlbCcsXG4gICAgJ3ZpZXdfY29sdW1uJyxcbiAgICAndmlld19jb21meScsXG4gICAgJ3ZpZXdfY29tcGFjdCcsXG4gICAgJ3ZpZXdfZGF5JyxcbiAgICAndmlld19oZWFkbGluZScsXG4gICAgJ3ZpZXdfbGlzdCcsXG4gICAgJ3ZpZXdfbW9kdWxlJyxcbiAgICAndmlld19xdWlsdCcsXG4gICAgJ3ZpZXdfc3RyZWFtJyxcbiAgICAndmlld193ZWVrJyxcbiAgICAndmlnbmV0dGUnLFxuICAgICd2aXNpYmlsaXR5JyxcbiAgICAndmlzaWJpbGl0eV9vZmYnLFxuICAgICd2b2ljZV9jaGF0JyxcbiAgICAndm9pY2VtYWlsJyxcbiAgICAndm9sdW1lX2Rvd24nLFxuICAgICd2b2x1bWVfbXV0ZScsXG4gICAgJ3ZvbHVtZV9vZmYnLFxuICAgICd2b2x1bWVfdXAnLFxuICAgICd2cG5fa2V5JyxcbiAgICAndnBuX2xvY2snLFxuICAgICd3YWxscGFwZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnd2F0Y2gnLFxuICAgICd3Yl9hdXRvJyxcbiAgICAnd2JfY2xvdWR5JyxcbiAgICAnd2JfaW5jYW5kZXNjZW50JyxcbiAgICAnd2JfaXJpZGVzY2VudCcsXG4gICAgJ3diX3N1bm55JyxcbiAgICAnd2MnLFxuICAgICd3ZWInLFxuICAgICd3aGF0c2hvdCcsXG4gICAgJ3dpZGdldHMnLFxuICAgICd3aWZpJyxcbiAgICAnd2lmaV9sb2NrJyxcbiAgICAnd2lmaV90ZXRoZXJpbmcnLFxuICAgICd3b3JrJyxcbiAgICAnd3JhcF90ZXh0JyxcbiAgICAneW91dHViZV9zZWFyY2hlZF9mb3InLFxuICAgICd6b29tX2luJyxcbiAgICAnem9vbV9vdXQnLFxuICBdO1xuXG4gIGdldCBpY29ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25zO1xuICB9XG5cbiAgZmlsdGVyKHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbnMuZmlsdGVyKChlbDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5ID8gcXVlcnkudG9Mb3dlckNhc2UoKSA6ICcnKSA+IC0xO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogRk9STVNcbiAqL1xuXG4vLyBGb3JtIERpcmVjdGl2ZXNcbmltcG9ydCB7IFRkQXV0b1RyaW1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm1zL2F1dG8tdHJpbS9hdXRvLXRyaW0uZGlyZWN0aXZlJztcblxuY29uc3QgVERfRk9STVM6IFR5cGU8YW55PltdID0gW1xuICBUZEF1dG9UcmltRGlyZWN0aXZlLFxuXTtcblxuLy8gVmFsaWRhdG9yc1xuY29uc3QgVERfVkFMSURBVE9SUzogVHlwZTxhbnk+W10gPSBbXG5dO1xuXG4vKipcbiAqIFBJUEVTXG4gKi9cbmltcG9ydCB7IFRkVGltZUFnb1BpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtYWdvL3RpbWUtYWdvLnBpcGUnO1xuaW1wb3J0IHsgVGRUaW1lRGlmZmVyZW5jZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtZGlmZmVyZW5jZS90aW1lLWRpZmZlcmVuY2UucGlwZSc7XG5pbXBvcnQgeyBUZFRpbWVVbnRpbFBpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtdW50aWwvdGltZS11bnRpbC5waXBlJztcbmltcG9ydCB7IFRkQnl0ZXNQaXBlIH0gZnJvbSAnLi9waXBlcy9ieXRlcy9ieXRlcy5waXBlJztcbmltcG9ydCB7IFRkRGVjaW1hbEJ5dGVzUGlwZSB9IGZyb20gJy4vcGlwZXMvZGVjaW1hbC1ieXRlcy9kZWNpbWFsLWJ5dGVzLnBpcGUnO1xuaW1wb3J0IHsgVGREaWdpdHNQaXBlIH0gZnJvbSAnLi9waXBlcy9kaWdpdHMvZGlnaXRzLnBpcGUnO1xuaW1wb3J0IHsgVGRUcnVuY2F0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RydW5jYXRlL3RydW5jYXRlLnBpcGUnO1xuXG5jb25zdCBURF9QSVBFUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkVGltZUFnb1BpcGUsXG4gIFRkVGltZURpZmZlcmVuY2VQaXBlLFxuICBUZFRpbWVVbnRpbFBpcGUsXG4gIFRkQnl0ZXNQaXBlLFxuICBUZERlY2ltYWxCeXRlc1BpcGUsXG4gIFRkRGlnaXRzUGlwZSxcbiAgVGRUcnVuY2F0ZVBpcGUsXG5dO1xuXG4vKipcbiAqIFNlcnZpY2VzXG4gKi9cblxuaW1wb3J0IHsgUm91dGVyUGF0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ljb24uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0ZPUk1TLFxuICAgIFREX1BJUEVTLFxuICAgIFREX1ZBTElEQVRPUlMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVERfRk9STVMsXG4gICAgVERfUElQRVMsXG4gICAgVERfVkFMSURBVE9SUyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUm91dGVyUGF0aFNlcnZpY2UsXG4gICAgSWNvblNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50Q29tbW9uTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG4gIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdGF0ZUFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgZGVncmVlcz86IG51bWJlcjtcbiAgZWFzZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZFJvdGF0ZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkZWdyZXNzU3RhcnQ6IERlZ3JlZXMgb2Ygcm90YXRpb24gdGhhdCB0aGUgZG9tIG9iamVjdCB3aWxsIGVuZCB1cCBpbiBkdXJpbmcgdGhlIFwiZmFsc2VcIiBzdGF0ZVxuICogKiBkZWdyZWVzRW5kOiBEZWdyZWVzIG9mIHJvdGF0aW9uIHRoYXQgdGhlIGRvbSBvYmplY3Qgd2lsbCBlbmQgdXAgaW4gZHVyaW5nIHRoZSBcInRydWVcIiBzdGF0ZVxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcy4gRGVmYXVsdHMgdG8gZWFzZS1pbi5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIHJvdGF0aW9uIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZFJvdGF0ZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkZWdyZWVzRW5kOiA5MCB9fVwiXG4gKi9cblxuZXhwb3J0IGNvbnN0IHRkUm90YXRlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZFJvdGF0ZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKHt7IGRlZ3Jlc3NTdGFydCB9fWRlZyknLFxuICB9KSwgeyBwYXJhbXM6IHsgZGVncmVzc1N0YXJ0OiAwIH19KSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSh7eyBkZWdyZWVzRW5kIH19ZGVnKScsXG4gIH0pLCB7IHBhcmFtczogeyBkZWdyZWVzRW5kOiAxODAgfX0pLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDI1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2UtaW4nIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkUm90YXRlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRSb3RhdGVBbmltYXRpb24ocm90YXRlT3B0aW9uczogSVJvdGF0ZUFuaW1hdGlvbiA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIocm90YXRlT3B0aW9ucy5hbmNob3IgfHwgJ3RkUm90YXRlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKCcgKyAocm90YXRlT3B0aW9ucy5kZWdyZWVzIHx8IDE4MCkgKyAnZGVnKScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChyb3RhdGVPcHRpb25zLmR1cmF0aW9uIHx8IDI1MCkgKyAnbXMgJyArXG4gICAgICAgICAgKHJvdGF0ZU9wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMgJyArXG4gICAgICAgICAgKHJvdGF0ZU9wdGlvbnMuZWFzZSB8fCAnZWFzZS1pbicpKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsYXBzZUFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgIGVhc2VPbkNsb3NlPzogc3RyaW5nO1xuICAgZWFzZU9uT3Blbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZENvbGxhcHNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlT25DbG9zZTogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGNsb3NpbmcuIERlZmF1bHRzIHRvIGVhc2UtaW4uXG4gKiAqIGVhc2VPbk9wZW46IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBvcGVuaW5nLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGNvbGxhcHNlL2V4cGFuZCBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRDb2xsYXBzZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogNTAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkQ29sbGFwc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkQ29sbGFwc2UnLCBbXG4gICAgc3RhdGUoJzEnLCBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMCcsICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2UtaW4nIH19KSxcbiAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG4gIF0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkQ29sbGFwc2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZENvbGxhcHNlQW5pbWF0aW9uKGNvbGxhcHNlT3B0aW9uczogSUNvbGxhcHNlQW5pbWF0aW9uID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihjb2xsYXBzZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZENvbGxhcHNlJywgW1xuICAgIHN0YXRlKCcxJywgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzAnLCAgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgICAgdmlzaWJpbGl0eTogQVVUT19TVFlMRSxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoY29sbGFwc2VPcHRpb25zLmR1cmF0aW9uIHx8IDE1MCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGNvbGxhcHNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmVhc2VPbkNsb3NlIHx8ICdlYXNlLWluJykpLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignMSA9PiAwJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoY29sbGFwc2VPcHRpb25zLmR1cmF0aW9uIHx8IDE1MCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGNvbGxhcHNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmVhc2VPbk9wZW4gfHwgJ2Vhc2Utb3V0JykpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGYWRlSW5PdXRBbmltYXRpb24gZXh0ZW5kcyBJQW5pbWF0aW9uT3B0aW9ucyB7XG4gIGVhc2VPbkluPzogc3RyaW5nO1xuICBlYXNlT25PdXQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogY29uc3QgdGRGYWRlSW5PdXRBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAxNTAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2VPbkluOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gZmFkaW5nIGluLiBEZWZhdWx0cyB0byBlYXNlLWluLlxuICogKiBlYXNlT25PdXQ6IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBmYWRpbmcgb3V0LiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGZhZGUgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkRmFkZUluT3V0XT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRGYWRlSW5PdXRBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkRmFkZUluT3V0JywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZU9uSW4gfX0nKSxcbiAgICAgIF0pLFxuICAgIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2VPbkluOiAnZWFzZS1pbicgfX0pLFxuICAgIHRyYW5zaXRpb24oJzEgPT4gMCcsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlT25PdXQgfX0nKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZU9uT3V0OiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkRmFkZUluT3V0QW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRGYWRlSW5PdXRBbmltYXRpb24oZmFkZUluT3V0OiBJRmFkZUluT3V0QW5pbWF0aW9uID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcigoZmFkZUluT3V0LmFuY2hvciB8fCAndGRGYWRlSW5PdXQnKSwgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChmYWRlSW5PdXQuZHVyYXRpb24gfHwgMTUwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoZmFkZUluT3V0LmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZWFzZU9uSW4gfHwgJ2Vhc2UtaW4nKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChmYWRlSW5PdXQuZHVyYXRpb24gfHwgMTUwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoZmFkZUluT3V0LmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZWFzZU9uT3V0IHx8ICdlYXNlLW91dCcpKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEJvdW5jZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgYm91bmNlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEJvdW5jZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkQm91bmNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEJvdW5jZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuMn0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjR9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKScsIG9mZnNldDogMC40M30pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuNTN9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKScsIG9mZnNldDogLjd9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjh9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC00cHgsIDApJywgb2Zmc2V0OiAuOX0pLFxuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDEuMH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkQm91bmNlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRCb3VuY2VBbmltYXRpb24oYm91bmNlT3B0aW9uczogSUFuaW1hdGlvbk9wdGlvbnMgPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKGJvdW5jZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZEJvdW5jZScsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoYm91bmNlT3B0aW9ucy5kdXJhdGlvbiB8fCA1MDApICsgJ21zICcgKyAoYm91bmNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjJ9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjR9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJywgb2Zmc2V0OiAwLjQzfSksXG4gICAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjUzfSksXG4gICAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKScsIG9mZnNldDogLjd9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDAuOH0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKScsIG9mZnNldDogLjl9KSxcbiAgICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDEuMH0pLFxuICAgICAgICBdKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iLCJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRGbGFzaEFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgZmxhc2ggYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkRmxhc2hdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEZsYXNoQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEZsYXNoJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICBvcGFjaXR5OiAxLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICBvcGFjaXR5OiAxLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuMjV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMC41fSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuNzV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMS4wfSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRGbGFzaEFuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkRmxhc2hBbmltYXRpb24oZmxhc2hPcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoZmxhc2hPcHRpb25zLmFuY2hvciB8fCAndGRGbGFzaCcsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChmbGFzaE9wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKGZsYXNoT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuMjV9KSxcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjV9KSxcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwLjc1fSksXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMS4wfSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEhlYWRzaGFrZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgaGVhZHNoYWtlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEhlYWRzaGFrZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkSGVhZHNoYWtlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEhlYWRzaGFrZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKScsIG9mZnNldDogMC4wNjV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpJywgb2Zmc2V0OiAwLjE4NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKScsIG9mZnNldDogMC4zMTV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpJywgb2Zmc2V0OiAwLjQzNX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMC41MH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkSGVhZHNoYWtlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRIZWFkc2hha2VBbmltYXRpb24oaGVhZHNoYWtlT3B0aW9uczogSUFuaW1hdGlvbk9wdGlvbnMgPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKGhlYWRzaGFrZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZEhlYWRzaGFrZScsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGhlYWRzaGFrZU9wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKGhlYWRzaGFrZU9wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyknLCBvZmZzZXQ6IDAuMDY1fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpJywgb2Zmc2V0OiAwLjE4NX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpJywgb2Zmc2V0OiAwLjMxNX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKScsIG9mZnNldDogMC40MzV9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMC41MH0pLFxuICAgICAgICBdKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iLCJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRKZWxsb0FuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgamVsbG8gYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkSmVsbG9dPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEplbGxvQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEplbGxvJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwLjAxMX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKScsIG9mZnNldDogMC4yMjJ9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpJywgb2Zmc2V0OiAwLjMzM30pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpJywgb2Zmc2V0OiAwLjQ0NH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpJywgb2Zmc2V0OiAwLjU1NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKScsIG9mZnNldDogMC42NjZ9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyknLCBvZmZzZXQ6IDAuNzc3fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKScsIG9mZnNldDogMC44ODh9KSxcbiAgICAgIF0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZEplbGxvQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRKZWxsb0FuaW1hdGlvbihqZWxsb09wdGlvbnM6IElBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihqZWxsb09wdGlvbnMuYW5jaG9yIHx8ICd0ZEplbGxvJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUnLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoamVsbG9PcHRpb25zLmR1cmF0aW9uIHx8IDUwMCkgKyAnbXMgJyArIChqZWxsb09wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCBvZmZzZXQ6IDAuMDExfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyknLCBvZmZzZXQ6IDAuMjIyfSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpJywgb2Zmc2V0OiAwLjMzM30pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyknLCBvZmZzZXQ6IDAuNDQ0fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKScsIG9mZnNldDogMC41NTV9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKScsIG9mZnNldDogMC42NjZ9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKScsIG9mZnNldDogMC43Nzd9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyknLCBvZmZzZXQ6IDAuODg4fSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZFB1bHNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBwdWxzZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRQdWxzZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkUHVsc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUHVsc2UnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpJywgb2Zmc2V0OiAwLjUgfSksXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAxLjAgfSksXG4gICAgICAgIF0pLFxuICAgICAgKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZFB1bHNlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRQdWxzZUFuaW1hdGlvbihwdWxzZU9wdGlvbnM6IElBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihwdWxzZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZFB1bHNlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgocHVsc2VPcHRpb25zLmR1cmF0aW9uIHx8IDUwMCkgKyAnbXMgJyArIChwdWxzZU9wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMnLFxuICAgICAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSknLCBvZmZzZXQ6IDAuNSB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMS4wIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG5jb25zdCBub29wOiBhbnkgPSAoKSA9PiB7XG4gIC8vIGVtcHR5IG1ldGhvZFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udHJvbFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHZhbHVlOiBhbnk7XG4gIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkNoYW5nZTogKF86IGFueSkgPT4gYW55O1xuICBvblRvdWNoZWQ6ICgpID0+IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSGFzQ2hhbmdlRGV0ZWN0b3JSZWYge1xuICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmO1xufVxuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGNvbXBvbmVudCB3aXRoIG5nTW9kZWwgc3VwcG9ydC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxJSGFzQ2hhbmdlRGV0ZWN0b3JSZWY+PlxuICAgICAgICAgICAgICAgIChiYXNlOiBULCBpbml0aWFsVmFsdWU/OiBhbnkpOiBDb25zdHJ1Y3RvcjxJQ29udHJvbFZhbHVlQWNjZXNzb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBpbml0aWFsVmFsdWU7XG4gICAgcHJpdmF0ZSBfc3ViamVjdFZhbHVlQ2hhbmdlczogU3ViamVjdDxhbnk+O1xuICAgIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpOyBcbiAgICAgIHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcyA9IHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMubmV4dCh2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKF86IGFueSkgPT4gbm9vcDtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiBub29wO1xuXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuLyoqIEludGVyZmFjZSB0byBpbXBsZW1lbnQgd2hlbiBhcHBseWluZyB0aGUgZGlzYWJsZWQgbWl4aW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNhbkRpc2FibGUge1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZDtcbn1cblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBjb21wb25lbnQgb3IgZGlyZWN0aXZlIHdpdGggYSBgZGlzYWJsZWRgIHByb3BlcnR5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPHt9Pj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPElDYW5EaXNhYmxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICBsZXQgbmV3VmFsdWU6IGJvb2xlYW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLm9uRGlzYWJsZWRDaGFuZ2UodGhpcy5fZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgLyoqIE5PVCBJTVBMRU1FTlRFRCwgdGhpcyBuZWVkcyB0byBiZSBvdmVycmlkZW4gYnkgc3ViY2xhc3NlcyBpZiBuZWVkZWQgKi9cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuLyoqIEludGVyZmFjZSB0byBpbXBsZW1lbnQgd2hlbiBhcHBseWluZyB0aGUgZGlzYWJsZWQgbWl4aW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNhbkRpc2FibGVSaXBwbGUge1xuICBkaXNhYmxlUmlwcGxlOiBib29sZWFuO1xuICBvbkRpc2FibGVSaXBwbGVDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQ7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSB3aXRoIGEgYGRpc2FibGVkYCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVSaXBwbGU8VCBleHRlbmRzIENvbnN0cnVjdG9yPHt9Pj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPElDYW5EaXNhYmxlUmlwcGxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9kaXNhYmxlUmlwcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVSaXBwbGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVJpcHBsZTtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVSaXBwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIGxldCBuZXdWYWx1ZTogYm9vbGVhbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fZGlzYWJsZVJpcHBsZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZVJpcHBsZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLm9uRGlzYWJsZVJpcHBsZUNoYW5nZSh0aGlzLl9kaXNhYmxlUmlwcGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGVSaXBwbGVDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgLyoqIE5PVCBJTVBMRU1FTlRFRCwgdGhpcyBuZWVkcyB0byBiZSBvdmVycmlkZW4gYnkgc3ViY2xhc3NlcyBpZiBuZWVkZWQgKi9cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgQ292YWxlbnRWYWxpZGF0b3JzIHtcbiAgc3RhdGljIG1pbihtaW5WYWx1ZTogYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIGxldCBmdW5jOiBWYWxpZGF0b3JGbiA9IChjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoISFWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIHx8ICghbWluVmFsdWUgJiYgbWluVmFsdWUgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBsZXQgdjogbnVtYmVyID0gYy52YWx1ZTtcbiAgICAgIHJldHVybiB2IDwgbWluVmFsdWUgP1xuICAgICAgICB7IG1pbjoge21pblZhbHVlOiBtaW5WYWx1ZSwgYWN0dWFsVmFsdWU6IHZ9IH0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuXG4gIHN0YXRpYyBtYXgobWF4VmFsdWU6IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBsZXQgZnVuYzogVmFsaWRhdG9yRm4gPSAoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgaWYgKCEhVmFsaWRhdG9ycy5yZXF1aXJlZChjKSB8fCAoIW1heFZhbHVlICYmIG1heFZhbHVlICE9PSAwKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgbGV0IHY6IG51bWJlciA9IGMudmFsdWU7XG4gICAgICByZXR1cm4gdiA+IG1heFZhbHVlID9cbiAgICAgICAgeyBtYXg6IHttYXhWYWx1ZTogbWF4VmFsdWUsIGFjdHVhbFZhbHVlOiB2fSB9IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICBzdGF0aWMgbnVtYmVyUmVxdWlyZWQoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiAoTnVtYmVyLmlzTmFOKGMudmFsdWUpKSA/XG4gICAgICAgIHsgcmVxdWlyZWQ6IHRydWUgfSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgfVxuXG59XG4iXSwibmFtZXMiOlsicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQU9hLG1CQUFtQjs7OztJQUU5QixZQUF3QyxNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztLQUFJOzs7Ozs7SUFNM0QsTUFBTSxDQUFDLEtBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDbkQ7S0FDRjs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBSlEsT0FBTyx1QkFPRCxRQUFRLFlBQUksSUFBSTs7O3FCQUs1QixZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0FDZGxDLE1BS2EsYUFBYTs7Ozs7O0lBQ3hCLFNBQVMsQ0FBQyxJQUFTLEVBQUUsU0FBZTs7UUFFbEMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNsQixHQUFHLEdBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDOztRQUduQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCOzs7O1lBSUcsU0FBUyxHQUFXLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRTs7WUFDckUsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQztRQUVsRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUM7U0FDMUM7O1FBRUQsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxjQUFjLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDO1NBQzFDOztRQUVELElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQztTQUN4Qzs7UUFFRCxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUM7U0FDdkM7O1FBRUQsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDO1NBQ3pDOztRQUVELElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDO1NBQ3hDO0tBQ0Y7OztZQWhFRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7YUFDaEI7Ozs7Ozs7QUNKRCxNQU1hLG9CQUFvQjs7Ozs7O0lBQy9CLFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBUzs7WUFDekIsU0FBUyxHQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQzs7WUFDakMsT0FBYTtRQUVqQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDOUMsT0FBTyxjQUFjLENBQUM7U0FDdkI7O1lBRUcsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQzs7WUFFM0UsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUVsQyxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUU5QixPQUFPLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQzs7WUFFbkIsT0FBTyxHQUFXLElBQUk7O1lBRXRCLEdBQUcsR0FBVyxJQUFJOztZQUVsQixhQUFhLEdBQVcsRUFBRTtRQUU5QixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUN4QixhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQzNCO2FBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLGFBQWEsR0FBRyxVQUFVLENBQUU7U0FDN0I7UUFFRCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsYUFBYSxHQUFHLGFBQWE7WUFDdEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUc7WUFDaEUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLEdBQUc7WUFDcEUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ2pFOzs7WUE5Q0YsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7Ozs7Ozs7QUNKRCxNQUthLGVBQWU7Ozs7OztJQUMxQixTQUFTLENBQUMsSUFBUyxFQUFFLFNBQWU7O1FBRWxDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDbEIsR0FBRyxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzs7UUFHbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixPQUFPLGNBQWMsQ0FBQztTQUN2Qjs7OztZQUlHLFNBQVMsR0FBVyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUU7O1lBQ3JFLElBQUksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFFbEUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQztTQUM5Qzs7UUFFRCxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQzlDOztRQUVELElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDNUM7O1FBRUQsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxVQUFVLENBQUM7U0FDbkI7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUMzQzs7UUFFRCxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQzdDOztRQUVELElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUM1QztLQUNGOzs7WUFoRUYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxXQUFXO2FBQ2xCOzs7Ozs7O0FDSkQsTUFNYSxXQUFXOzs7Ozs7OztJQUd0QixTQUFTLENBQUMsS0FBVSxFQUFFLFlBQW9CLENBQUM7UUFDekMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTs7WUFFckMsT0FBTyxnQkFBZ0IsQ0FBQztTQUN6Qjs7WUFDRyxDQUFDLEdBQVcsSUFBSTs7WUFDaEIsS0FBSyxHQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7O1lBQy9FLENBQUMsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsT0FBTyxnQkFBZ0IsQ0FBQztTQUN6QjtRQUNELE9BQU8sVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakY7OztZQXRCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLE9BQU87YUFDZDs7Ozs7OztBQ0pELE1BTWEsa0JBQWtCOzs7Ozs7OztJQUc3QixTQUFTLENBQUMsS0FBVSxFQUFFLFlBQW9CLENBQUM7UUFDekMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTs7WUFFckMsT0FBTyxnQkFBZ0IsQ0FBQztTQUN6Qjs7WUFDRyxDQUFDLEdBQVcsSUFBSTs7WUFDaEIsS0FBSyxHQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7O1lBQ3ZFLENBQUMsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsT0FBTyxnQkFBZ0IsQ0FBQztTQUN6QjtRQUNELE9BQU8sVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakY7OztZQXRCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGNBQWM7YUFDckI7Ozs7Ozs7QUNKRCxNQU9hLFlBQVk7Ozs7SUFJdkIsWUFBdUMsVUFBa0IsSUFBSTtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ25EOzs7Ozs7O0lBR0QsU0FBUyxDQUFDLE1BQVcsRUFBRSxZQUFvQixDQUFDO1FBQzFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFOztZQUV0QyxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQy9EOztZQUNHLENBQUMsR0FBVyxJQUFJOztZQUNoQixLQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7WUFDL0MsQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUN0RCxJQUFJLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3pIOzs7WUEzQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxRQUFRO2FBQ2Y7Ozs7eUNBTWMsTUFBTSxTQUFDLFNBQVM7Ozs7Ozs7QUNYL0IsTUFNYSxjQUFjOzs7Ozs7SUFDekIsU0FBUyxDQUFDLElBQVMsRUFBRSxNQUFjO1FBQ2pDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7OztZQUdHLFNBQVMsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUN4QixJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzlCO1lBRUQsU0FBUyxJQUFJLEdBQUcsQ0FBQztTQUNsQjtRQUVELE9BQU8sU0FBUyxDQUFDO0tBQ2xCOzs7WUF0QkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxVQUFVO2FBQ2pCOzs7Ozs7O0FDSkQsTUFNYSxpQkFBaUI7Ozs7SUFFNUIsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFNLEtBQUssQ0FBQyxZQUFZLGdCQUFnQixDQUFDLEVBQ2pELFFBQVEsRUFBRSxDQUNYLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBUTtZQUNuQixpQkFBaUIsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1NBQzNELENBQUMsQ0FBQztLQUNKOzs7Ozs7OztJQU1ELGdCQUFnQjtRQUNkLE9BQU8saUJBQWlCLENBQUMsY0FBYyxDQUFDO0tBQ3pDOztBQWhCWSxnQ0FBYyxHQUFXLEdBQUcsQ0FBQzs7WUFGM0MsVUFBVTs7OztZQUpGLE1BQU07Ozs7Ozs7TUNPRixXQUFXO0lBRHhCO1FBR1UsV0FBTSxHQUFhO1lBQ3pCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsS0FBSztZQUNMLFdBQVc7WUFDWCxTQUFTO1lBQ1QsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLFFBQVE7WUFDUixPQUFPO1lBQ1AsV0FBVztZQUNYLFdBQVc7WUFDWCxVQUFVO1lBQ1YsT0FBTztZQUNQLFNBQVM7WUFDVCxjQUFjO1lBQ2QsTUFBTTtZQUNOLFNBQVM7WUFDVCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLHdCQUF3QjtZQUN4QixlQUFlO1lBQ2YsZUFBZTtZQUNmLGNBQWM7WUFDZCxZQUFZO1lBQ1osWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsVUFBVTtZQUNWLFdBQVc7WUFDWCxRQUFRO1lBQ1IsZUFBZTtZQUNmLHVCQUF1QjtZQUN2QixjQUFjO1lBQ2QsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixVQUFVO1lBQ1YsT0FBTztZQUNQLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIsZUFBZTtZQUNmLGFBQWE7WUFDYixVQUFVO1lBQ1YsU0FBUztZQUNULE1BQU07WUFDTixVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixlQUFlO1lBQ2YsY0FBYztZQUNkLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsY0FBYztZQUNkLGFBQWE7WUFDYixjQUFjO1lBQ2QsY0FBYztZQUNkLGNBQWM7WUFDZCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsY0FBYztZQUNkLGNBQWM7WUFDZCxjQUFjO1lBQ2QsY0FBYztZQUNkLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLE9BQU87WUFDUCxZQUFZO1lBQ1osT0FBTztZQUNQLFVBQVU7WUFDVixRQUFRO1lBQ1IsTUFBTTtZQUNOLE1BQU07WUFDTixVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtZQUNmLFlBQVk7WUFDWixRQUFRO1lBQ1IsWUFBWTtZQUNaLGNBQWM7WUFDZCxhQUFhO1lBQ2IsYUFBYTtZQUNiLFFBQVE7WUFDUixNQUFNO1lBQ04sZ0JBQWdCO1lBQ2hCLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsTUFBTTtZQUNOLE9BQU87WUFDUCxXQUFXO1lBQ1gseUJBQXlCO1lBQ3pCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZUFBZTtZQUNmLE9BQU87WUFDUCxPQUFPO1lBQ1AsV0FBVztZQUNYLE9BQU87WUFDUCxnQkFBZ0I7WUFDaEIsT0FBTztZQUNQLGNBQWM7WUFDZCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxhQUFhO1lBQ2IsY0FBYztZQUNkLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsWUFBWTtZQUNaLFVBQVU7WUFDVixTQUFTO1lBQ1QsU0FBUztZQUNULFVBQVU7WUFDVixxQkFBcUI7WUFDckIsZUFBZTtZQUNmLFVBQVU7WUFDVixjQUFjO1lBQ2QsYUFBYTtZQUNiLGVBQWU7WUFDZixlQUFlO1lBQ2YseUJBQXlCO1lBQ3pCLFFBQVE7WUFDUixhQUFhO1lBQ2IsTUFBTTtZQUNOLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7WUFDYixXQUFXO1lBQ1gsWUFBWTtZQUNaLFFBQVE7WUFDUixRQUFRO1lBQ1IsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsU0FBUztZQUNULGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFNBQVM7WUFDVCxZQUFZO1lBQ1osU0FBUztZQUNULFlBQVk7WUFDWixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsS0FBSztZQUNMLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsTUFBTTtZQUNOLFFBQVE7WUFDUixNQUFNO1lBQ04sVUFBVTtZQUNWLFFBQVE7WUFDUixXQUFXO1lBQ1gsS0FBSztZQUNMLE1BQU07WUFDTixPQUFPO1lBQ1AsT0FBTztZQUNQLFdBQVc7WUFDWCxPQUFPO1lBQ1AsZUFBZTtZQUNmLE9BQU87WUFDUCxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixXQUFXO1lBQ1gsTUFBTTtZQUNOLGNBQWM7WUFDZCxhQUFhO1lBQ2IsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixVQUFVO1lBQ1YsZUFBZTtZQUNmLGFBQWE7WUFDYixRQUFRO1lBQ1IsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFDckIsY0FBYztZQUNkLGVBQWU7WUFDZixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsTUFBTTtZQUNOLE9BQU87WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7WUFDVixRQUFRO1lBQ1IsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixNQUFNO1lBQ04sY0FBYztZQUNkLGVBQWU7WUFDZixRQUFRO1lBQ1IsYUFBYTtZQUNiLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2IsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qiw2QkFBNkI7WUFDN0IsNkJBQTZCO1lBQzdCLG1CQUFtQjtZQUNuQixPQUFPO1lBQ1AsU0FBUztZQUNULFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsV0FBVztZQUNYLFNBQVM7WUFDVCxPQUFPO1lBQ1AsU0FBUztZQUNULFNBQVM7WUFDVCxLQUFLO1lBQ0wsV0FBVztZQUNYLGVBQWU7WUFDZixTQUFTO1lBQ1QsT0FBTztZQUNQLFVBQVU7WUFDVixPQUFPO1lBQ1AsWUFBWTtZQUNaLFVBQVU7WUFDVixTQUFTO1lBQ1QsT0FBTztZQUNQLFdBQVc7WUFDWCxZQUFZO1lBQ1osSUFBSTtZQUNKLFNBQVM7WUFDVCxRQUFRO1lBQ1IsWUFBWTtZQUNaLFVBQVU7WUFDVixTQUFTO1lBQ1QsYUFBYTtZQUNiLFNBQVM7WUFDVCxTQUFTO1lBQ1QsTUFBTTtZQUNOLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZUFBZTtZQUNmLFNBQVM7WUFDVCxNQUFNO1lBQ04sT0FBTztZQUNQLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLE9BQU87WUFDUCxPQUFPO1lBQ1Asb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixPQUFPO1lBQ1AseUJBQXlCO1lBQ3pCLE1BQU07WUFDTixjQUFjO1lBQ2QsT0FBTztZQUNQLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGNBQWM7WUFDZCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLEtBQUs7WUFDTCxVQUFVO1lBQ1YscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLE9BQU87WUFDUCxlQUFlO1lBQ2YsV0FBVztZQUNYLFVBQVU7WUFDVixRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsUUFBUTtZQUNSLFFBQVE7WUFDUixjQUFjO1lBQ2QsVUFBVTtZQUNWLGFBQWE7WUFDYixNQUFNO1lBQ04sYUFBYTtZQUNiLGVBQWU7WUFDZixlQUFlO1lBQ2YsTUFBTTtZQUNOLE1BQU07WUFDTixXQUFXO1lBQ1gsU0FBUztZQUNULGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLHlCQUF5QjtZQUN6QixjQUFjO1lBQ2QsYUFBYTtZQUNiLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztZQUNkLGFBQWE7WUFDYixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixhQUFhO1lBQ2IsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsYUFBYTtZQUNiLG9CQUFvQjtZQUNwQixNQUFNO1lBQ04sV0FBVztZQUNYLGNBQWM7WUFDZCxPQUFPO1lBQ1AsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFdBQVc7WUFDWCxXQUFXO1lBQ1gsTUFBTTtZQUNOLE9BQU87WUFDUCxTQUFTO1lBQ1QsTUFBTTtZQUNOLEtBQUs7WUFDTCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLFFBQVE7WUFDUixNQUFNO1lBQ04sWUFBWTtZQUNaLFNBQVM7WUFDVCxLQUFLO1lBQ0wsVUFBVTtZQUNWLFNBQVM7WUFDVCxLQUFLO1lBQ0wsY0FBYztZQUNkLFdBQVc7WUFDWCxXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLE1BQU07WUFDTixVQUFVO1lBQ1YsTUFBTTtZQUNOLFlBQVk7WUFDWixXQUFXO1lBQ1gsT0FBTztZQUNQLE9BQU87WUFDUCxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixRQUFRO1lBQ1IsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsWUFBWTtZQUNaLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGNBQWM7WUFDZCxLQUFLO1lBQ0wsUUFBUTtZQUNSLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0QixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsV0FBVztZQUNYLE9BQU87WUFDUCxVQUFVO1lBQ1YsU0FBUztZQUNULFVBQVU7WUFDVixtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsWUFBWTtZQUNaLE9BQU87WUFDUCxxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLFNBQVM7WUFDVCxRQUFRO1lBQ1IsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsUUFBUTtZQUNSLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixPQUFPO1lBQ1AsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLGNBQWM7WUFDZCxjQUFjO1lBQ2QsY0FBYztZQUNkLGNBQWM7WUFDZCxXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixPQUFPO1lBQ1AsYUFBYTtZQUNiLGNBQWM7WUFDZCxlQUFlO1lBQ2YsMEJBQTBCO1lBQzFCLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixVQUFVO1lBQ1YsT0FBTztZQUNQLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLFVBQVU7WUFDVixNQUFNO1lBQ04sU0FBUztZQUNULG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsT0FBTztZQUNQLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLE9BQU87WUFDUCxRQUFRO1lBQ1IsU0FBUztZQUNULGVBQWU7WUFDZixpQkFBaUI7WUFDakIsT0FBTztZQUNQLGFBQWE7WUFDYixPQUFPO1lBQ1Asc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixhQUFhO1lBQ2IsU0FBUztZQUNULGVBQWU7WUFDZixRQUFRO1lBQ1IsTUFBTTtZQUNOLFNBQVM7WUFDVCxRQUFRO1lBQ1IsZUFBZTtZQUNmLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsU0FBUztZQUNULFFBQVE7WUFDUixZQUFZO1lBQ1osUUFBUTtZQUNSLFdBQVc7WUFDWCxXQUFXO1lBQ1gsVUFBVTtZQUNWLE9BQU87WUFDUCxXQUFXO1lBQ1gsUUFBUTtZQUNSLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsU0FBUztZQUNULGFBQWE7WUFDYixNQUFNO1lBQ04sdUJBQXVCO1lBQ3ZCLGFBQWE7WUFDYixjQUFjO1lBQ2QsUUFBUTtZQUNSLFdBQVc7WUFDWCxNQUFNO1lBQ04sU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0QixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxZQUFZO1lBQ1osUUFBUTtZQUNSLFVBQVU7WUFDVixZQUFZO1lBQ1osTUFBTTtZQUNOLFVBQVU7WUFDVix1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsMEJBQTBCO1lBQzFCLDBCQUEwQjtZQUMxQixxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQiwwQkFBMEI7WUFDMUIsZ0JBQWdCO1lBQ2hCLE9BQU87WUFDUCxNQUFNO1lBQ04sVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsU0FBUztZQUNULHVCQUF1QjtZQUN2Qiw2Q0FBNkM7WUFDN0Msd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixpQkFBaUI7WUFDakIsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsZUFBZTtZQUNmLFdBQVc7WUFDWCxZQUFZO1lBQ1osS0FBSztZQUNMLFlBQVk7WUFDWixRQUFRO1lBQ1IsTUFBTTtZQUNOLGVBQWU7WUFDZixXQUFXO1lBQ1gsU0FBUztZQUNULGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLFlBQVk7WUFDWixNQUFNO1lBQ04sYUFBYTtZQUNiLFdBQVc7WUFDWCxPQUFPO1lBQ1Asd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLE1BQU07WUFDTixTQUFTO1lBQ1QsT0FBTztZQUNQLHNCQUFzQjtZQUN0QixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLE9BQU87WUFDUCxTQUFTO1lBQ1QsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsc0JBQXNCO1lBQ3RCLGVBQWU7WUFDZixjQUFjO1lBQ2QsTUFBTTtZQUNOLGVBQWU7WUFDZixjQUFjO1lBQ2QsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixLQUFLO1lBQ0wsZ0JBQWdCO1lBQ2hCLFFBQVE7WUFDUixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFdBQVc7WUFDWCxjQUFjO1lBQ2QsU0FBUztZQUNULGFBQWE7WUFDYixTQUFTO1lBQ1QsU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsV0FBVztZQUNYLE9BQU87WUFDUCxVQUFVO1lBQ1YsU0FBUztZQUNULFdBQVc7WUFDWCxLQUFLO1lBQ0wsT0FBTztZQUNQLE1BQU07WUFDTixVQUFVO1lBQ1YsTUFBTTtZQUNOLGVBQWU7WUFDZixTQUFTO1lBQ1QsV0FBVztZQUNYLFdBQVc7WUFDWCxlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7WUFDYixNQUFNO1lBQ04sV0FBVztZQUNYLGVBQWU7WUFDZixJQUFJO1lBQ0osTUFBTTtZQUNOLGFBQWE7WUFDYixhQUFhO1lBQ2IsS0FBSztZQUNMLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gsZUFBZTtZQUNmLFVBQVU7WUFDVixjQUFjO1lBQ2QsYUFBYTtZQUNiLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1lBQ2QsVUFBVTtZQUNWLGVBQWU7WUFDZixXQUFXO1lBQ1gsYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLFVBQVU7WUFDVixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixXQUFXO1lBQ1gsYUFBYTtZQUNiLGFBQWE7WUFDYixZQUFZO1lBQ1osV0FBVztZQUNYLFNBQVM7WUFDVCxVQUFVO1lBQ1YsV0FBVztZQUNYLFNBQVM7WUFDVCxPQUFPO1lBQ1AsU0FBUztZQUNULFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsZUFBZTtZQUNmLFVBQVU7WUFDVixJQUFJO1lBQ0osS0FBSztZQUNMLFVBQVU7WUFDVixTQUFTO1lBQ1QsTUFBTTtZQUNOLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsU0FBUztZQUNULFVBQVU7U0FDWCxDQUFDO0tBV0g7Ozs7SUFUQyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBRUQsTUFBTSxDQUFDQSxRQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFVO1lBQ2xDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQ0EsUUFBSyxHQUFHQSxRQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEUsQ0FBQyxDQUFDO0tBQ0o7OztZQXJ4QkYsVUFBVTs7Ozs7OztBQ05YO01BWU0sUUFBUSxHQUFnQjtJQUM1QixtQkFBbUI7Q0FDcEI7OztNQUdLLGFBQWEsR0FBZ0IsRUFDbEM7O01BYUssUUFBUSxHQUFnQjtJQUM1QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0NBQ2Y7TUErQlksb0JBQW9COzs7WUF0QmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixRQUFRO29CQUNSLFFBQVE7b0JBQ1IsYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxZQUFZO29CQUNaLFFBQVE7b0JBQ1IsUUFBUTtvQkFDUixhQUFhO2lCQUNkO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxpQkFBaUI7b0JBQ2pCLFdBQVc7aUJBQ1o7YUFDRjs7Ozs7OztBQ3RFRDs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLE1BQWEsaUJBQWlCLEdBQTZCLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDN0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDZixTQUFTLEVBQUUsK0JBQStCO0tBQzNDLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO0lBQ25DLEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQVMsRUFBRSw2QkFBNkI7S0FDekMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFDLENBQUM7SUFDbkMsVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUNwQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQztTQUNyRCxDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUMsQ0FBQztDQUM5RCxDQUFDOzs7Ozs7QUFHRixTQUFnQixpQkFBaUIsQ0FBQyxnQkFBa0MsRUFBRTtJQUNwRSxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRTtRQUNqRCxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNmLFNBQVMsRUFBRSxjQUFjO1NBQzFCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxTQUFTLElBQUksYUFBYSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNO1NBQy9ELENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksR0FBRyxJQUFJLEtBQUs7cUJBQzVDLGFBQWEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSztxQkFDakMsYUFBYSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQzthQUNyQyxDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztDQUNKOzs7Ozs7QUM1REQ7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLE1BQWEsbUJBQW1CLEdBQTZCLE9BQU8sQ0FBQyxZQUFZLEVBQUU7SUFDL0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDZixNQUFNLEVBQUUsR0FBRztRQUNYLFVBQVUsRUFBRSxRQUFRO0tBQ3JCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1FBQ2hCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLFVBQVUsRUFBRSxVQUFVO0tBQ3ZCLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDO1lBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUMvQyxPQUFPLENBQUMsMkNBQTJDLENBQUM7U0FDckQsQ0FBQztLQUNILEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFDLENBQUM7SUFDN0QsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQztTQUNyRCxDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUMsQ0FBQztDQUMvRCxDQUFDOzs7Ozs7QUFHSixTQUFnQixtQkFBbUIsQ0FBQyxrQkFBc0MsRUFBRTtJQUMxRSxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLFlBQVksRUFBRTtRQUNyRCxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNmLE1BQU0sRUFBRSxHQUFHO1lBQ1gsVUFBVSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7WUFDaEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksS0FBSztxQkFDeEMsZUFBZSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLO3FCQUNuQyxlQUFlLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDO2FBQ3BELENBQUM7U0FDSCxDQUFDO1FBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksS0FBSztxQkFDeEMsZUFBZSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLO3FCQUNuQyxlQUFlLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFDO2FBQ3BELENBQUM7U0FDSCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0NBQ0o7Ozs7OztBQ3pFRDs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsTUFBYSxvQkFBb0IsR0FBNkIsT0FBTyxDQUFDLGFBQWEsRUFBRTtJQUNqRixLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxHQUFHO1FBQ1osVUFBVSxFQUFFLFFBQVE7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsT0FBTyxFQUFFLFVBQVU7UUFDbkIsVUFBVSxFQUFFLFVBQVU7S0FDdkIsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQztTQUN6RCxDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUMsQ0FBQztJQUNqRSxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLGdEQUFnRCxDQUFDO1NBQzVELENBQUM7S0FDSCxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBQyxDQUFDO0NBQ3BFLENBQUM7Ozs7OztBQUdGLFNBQWdCLG9CQUFvQixDQUFDLFlBQWlDLEVBQUU7SUFDdEUsT0FBTyxPQUFPLEVBQUUsU0FBUyxDQUFDLE1BQU0sSUFBSSxhQUFhLEdBQUc7UUFDbEQsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDZixPQUFPLEVBQUUsR0FBRztZQUNaLFVBQVUsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxJQUFJLEtBQUs7cUJBQ2xDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSztxQkFDN0IsU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQzthQUMzQyxDQUFDO1NBQ0gsQ0FBQztRQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxJQUFJLEtBQUs7cUJBQ2xDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSztxQkFDN0IsU0FBUyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsQ0FBQzthQUM3QyxDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztDQUNKOzs7Ozs7QUN4RUQ7Ozs7Ozs7Ozs7Ozs7QUFnQkEsTUFBYSxpQkFBaUIsR0FBNkIsT0FBTyxDQUFDLFVBQVUsRUFBRTtJQUM3RSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsU0FBUyxFQUFFLHNCQUFzQjtLQUNsQyxDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxFQUNuRCxTQUFTLENBQUM7Z0JBQ1IsS0FBSyxDQUFDLEVBQUMsdUJBQXVCLEVBQUUsMENBQTBDLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFDMUgsS0FBSyxDQUFDLEVBQUMsdUJBQXVCLEVBQUUsMENBQTBDLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztnQkFDNUgsS0FBSyxDQUFDLEVBQUMsdUJBQXVCLEVBQUUsMENBQTBDLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztnQkFDaEksS0FBSyxDQUFDLEVBQUMsdUJBQXVCLEVBQUUsMENBQTBDLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztnQkFDakksS0FBSyxDQUFDLEVBQUMsdUJBQXVCLEVBQUUsMENBQTBDLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztnQkFDN0gsS0FBSyxDQUFDLEVBQUMsdUJBQXVCLEVBQUUsMENBQTBDLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDL0gsS0FBSyxDQUFDLEVBQUMsdUJBQXVCLEVBQUUsMENBQTBDLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztnQkFDNUgsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDekQsS0FBSyxDQUFDLEVBQUMsdUJBQXVCLEVBQUUsMENBQTBDLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUM3SCxDQUFDLENBQUM7U0FDSixDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUMsQ0FBQztDQUMvRCxDQUFDOzs7Ozs7QUFHRixTQUFnQixpQkFBaUIsQ0FBQyxnQkFBbUMsRUFBRTtJQUNyRSxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRTtRQUNqRCxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNmLFNBQVMsRUFBRSxzQkFBc0I7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7WUFDaEIsU0FBUyxFQUFFLHNCQUFzQjtTQUNsQyxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3BCLEtBQUssQ0FBQztnQkFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUMvQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksYUFBYSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsU0FBUyxDQUFDO29CQUM3RixLQUFLLENBQUMsRUFBQyx1QkFBdUIsRUFBRSwwQ0FBMEMsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO29CQUMxSCxLQUFLLENBQUMsRUFBQyx1QkFBdUIsRUFBRSwwQ0FBMEMsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO29CQUM1SCxLQUFLLENBQUMsRUFBQyx1QkFBdUIsRUFBRSwwQ0FBMEMsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO29CQUNoSSxLQUFLLENBQUMsRUFBQyx1QkFBdUIsRUFBRSwwQ0FBMEMsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO29CQUNqSSxLQUFLLENBQUMsRUFBQyx1QkFBdUIsRUFBRSwwQ0FBMEMsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO29CQUM3SCxLQUFLLENBQUMsRUFBQyx1QkFBdUIsRUFBRSwwQ0FBMEMsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUMvSCxLQUFLLENBQUMsRUFBQyx1QkFBdUIsRUFBRSwwQ0FBMEMsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO29CQUM1SCxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUN6RCxLQUFLLENBQUMsRUFBQyx1QkFBdUIsRUFBRSwwQ0FBMEMsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2lCQUM3SCxDQUFDLENBQUM7YUFDSixDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztDQUNKOzs7Ozs7QUNwRUQ7Ozs7Ozs7Ozs7Ozs7QUFnQkEsTUFBYSxnQkFBZ0IsR0FBNkIsT0FBTyxDQUFDLFNBQVMsRUFBRTtJQUMzRSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxFQUNuRCxTQUFTLENBQUM7Z0JBQ1IsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO2dCQUNqQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQztTQUNKLENBQUM7S0FDSCxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBQyxDQUFDO0NBQy9ELENBQUM7Ozs7OztBQUdGLFNBQWdCLGdCQUFnQixDQUFDLGVBQWtDLEVBQUU7SUFDbkUsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7UUFDL0MsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDZixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQztvQkFDM0YsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQzlCLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO29CQUNqQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztvQkFDaEMsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBQ2pDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2lCQUNqQyxDQUFDLENBQUM7YUFDSixDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztDQUNKOzs7Ozs7QUM1REQ7Ozs7Ozs7Ozs7Ozs7QUFnQkEsTUFBYSxvQkFBb0IsR0FBNkIsT0FBTyxDQUFDLGFBQWEsRUFBRTtJQUNuRixLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLFNBQVMsRUFBRSxlQUFlO0tBQzNCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxlQUFlO0tBQzNCLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxTQUFTLEVBQUU7UUFDcEIsS0FBSyxDQUFDO1lBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUMvQyxPQUFPLENBQUMsMkNBQTJDLEVBQ25ELFNBQVMsQ0FBQztnQkFDUixLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFDOUMsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDcEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDbEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDcEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDbEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7YUFDbEQsQ0FBQyxDQUFDO1NBQ0osQ0FBQztLQUNILEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFDLENBQUM7Q0FDL0QsQ0FBQzs7Ozs7O0FBR0YsU0FBZ0Isb0JBQW9CLENBQUMsbUJBQXNDLEVBQUU7SUFDM0UsT0FBTyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxJQUFJLGFBQWEsRUFBRTtRQUN2RCxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNmLFNBQVMsRUFBRSxlQUFlO1NBQzNCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxlQUFlO1NBQzNCLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLGdCQUFnQixDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsU0FBUyxDQUFDO29CQUNuRyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDOUMsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDcEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDbEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDcEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDbEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7aUJBQ2xELENBQUMsQ0FBQzthQUNKLENBQUM7U0FDSCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0NBQ0o7Ozs7OztBQzlERDs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFhLGdCQUFnQixHQUE2QixPQUFPLENBQUMsU0FBUyxFQUFFO0lBQzNFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1FBQ2YsU0FBUyxFQUFFLE1BQU07S0FDbEIsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsU0FBUyxFQUFFLE1BQU07S0FDbEIsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUNwQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywyQ0FBMkMsRUFDbkQsU0FBUyxDQUFDO2dCQUNSLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDekMsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDcEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDbEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDdEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDdEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDMUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztnQkFDMUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzthQUMvRSxDQUFDLENBQUM7U0FDSixDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUMsQ0FBQztDQUMvRCxDQUFDOzs7Ozs7QUFHRixTQUFnQixnQkFBZ0IsQ0FBQyxlQUFrQyxFQUFFO0lBQ25FLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1FBQy9DLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ2YsU0FBUyxFQUFFLE1BQU07U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7WUFDaEIsU0FBUyxFQUFFLE1BQU07U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQztvQkFDM0YsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUN6QyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUNwRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUNsRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUN0RSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUN0RSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUMxRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUMxRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2lCQUMvRSxDQUFDLENBQUM7YUFDSixDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztDQUNKOzs7Ozs7QUNwRUQ7Ozs7Ozs7Ozs7Ozs7QUFnQkEsTUFBYSxnQkFBZ0IsR0FBNkIsT0FBTyxDQUFDLFNBQVMsRUFBRTtJQUMzRSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLFNBQVMsRUFBRSxrQkFBa0I7S0FDOUIsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsU0FBUyxFQUFFLGtCQUFrQjtLQUM5QixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxFQUNuRCxTQUFTLENBQUM7Z0JBQ04sS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDbkQsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDOUQsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN0RCxDQUFDLENBQ0g7U0FDRixDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUMsQ0FBQztDQUMvRCxDQUFDOzs7Ozs7QUFHRixTQUFnQixnQkFBZ0IsQ0FBQyxlQUFrQyxFQUFFO0lBQ25FLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1FBQy9DLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ2YsU0FBUyxFQUFFLGtCQUFrQjtTQUM5QixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsR0FBRyxFQUFHLEtBQUssQ0FBQztZQUNoQixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksRUFDL0UsU0FBUyxDQUFDO29CQUNSLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ25ELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQzlELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3RELENBQUMsQ0FDSDthQUNGLENBQUM7U0FDSCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0NBQ0o7Ozs7OztBQ3pERDtNQUlNLElBQUksR0FBUTs7Q0FFakI7Ozs7Ozs7O0FBY0QsU0FBZ0IseUJBQXlCLENBQ3hCLElBQU8sRUFBRSxZQUFrQjtJQUMxQyxPQUFPLGNBQWMsSUFBSTs7OztRQUt2QixZQUFZLEdBQUcsSUFBVztZQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUxULFdBQU0sR0FBUSxZQUFZLENBQUM7WUFtQ25DLGFBQVEsR0FBRyxDQUFDLENBQU0sS0FBSyxJQUFJLENBQUM7WUFDNUIsY0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDO1lBOUJyQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztZQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM5RDs7Ozs7UUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFNO1lBQ2QsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQztTQUNGOzs7O1FBQ0QsSUFBSSxLQUFLO1lBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQUVELFVBQVUsQ0FBQyxLQUFVO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4Qzs7Ozs7UUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3BCOzs7OztRQUVELGlCQUFpQixDQUFDLEVBQU87WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDckI7S0FLRixDQUFDO0NBQ0g7Ozs7OztBQ2pFRDs7Ozs7O0FBV0EsU0FBZ0IsYUFBYSxDQUE0QixJQUFPO0lBQzlELE9BQU8sY0FBYyxJQUFJOzs7O1FBR3ZCLFlBQVksR0FBRyxJQUFXO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBSFQsY0FBUyxHQUFZLEtBQUssQ0FBQztTQUlsQzs7OztRQUVELElBQUksUUFBUTtZQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjOztnQkFDckIsUUFBUSxHQUFZLHFCQUFxQixDQUFDLEtBQUssQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO2dCQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN2QztTQUNGOzs7OztRQUVELGdCQUFnQixDQUFDLENBQVU7O1NBRTFCO0tBQ0YsQ0FBQztDQUNIOzs7Ozs7QUNsQ0Q7Ozs7OztBQVdBLFNBQWdCLGtCQUFrQixDQUE0QixJQUFPO0lBQ25FLE9BQU8sY0FBYyxJQUFJOzs7O1FBR3ZCLFlBQVksR0FBRyxJQUFXO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBSFQsbUJBQWMsR0FBWSxLQUFLLENBQUM7U0FJdkM7Ozs7UUFFRCxJQUFJLGFBQWE7WUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUI7Ozs7O1FBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYzs7Z0JBQzFCLFFBQVEsR0FBWSxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDakQ7U0FDRjs7Ozs7UUFFRCxxQkFBcUIsQ0FBQyxDQUFVOztTQUUvQjtLQUNGLENBQUM7Q0FDSDs7Ozs7O0FDbENELE1BRWEsa0JBQWtCOzs7OztJQUM3QixPQUFPLEdBQUcsQ0FBQyxRQUFhOztZQUNsQixJQUFJLEdBQWdCLENBQUMsQ0FBa0I7WUFDekMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzdELE9BQU8sU0FBUyxDQUFDO2FBQ2xCOztnQkFDRyxDQUFDLEdBQVcsQ0FBQyxDQUFDLEtBQUs7WUFDdkIsT0FBTyxDQUFDLEdBQUcsUUFBUTtnQkFDakIsRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUMsRUFBRTtnQkFDN0MsU0FBUyxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztJQUVELE9BQU8sR0FBRyxDQUFDLFFBQWE7O1lBQ2xCLElBQUksR0FBZ0IsQ0FBQyxDQUFrQjtZQUN6QyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0QsT0FBTyxTQUFTLENBQUM7YUFDbEI7O2dCQUNHLENBQUMsR0FBVyxDQUFDLENBQUMsS0FBSztZQUN2QixPQUFPLENBQUMsR0FBRyxRQUFRO2dCQUNqQixFQUFFLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBQyxFQUFFO2dCQUM3QyxTQUFTLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O0lBRUQsT0FBTyxjQUFjLENBQUMsQ0FBa0I7UUFDdEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN6QixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDbEIsU0FBUyxDQUFDO0tBQ2Y7Q0FFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==