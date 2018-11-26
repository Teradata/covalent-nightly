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

export { CovalentCommonModule, tdRotateAnimation, tdCollapseAnimation, tdFadeInOutAnimation, tdBounceAnimation, tdFlashAnimation, tdHeadshakeAnimation, tdJelloAnimation, tdPulseAnimation, mixinControlValueAccessor, mixinDisabled, mixinDisableRipple, TdAutoTrimDirective, CovalentValidators, TdTimeAgoPipe, TdTimeDifferencePipe, TdBytesPipe, TdDigitsPipe, TdTruncatePipe, TdDecimalBytesPipe, TdTimeUntilPipe as ɵa, IconService as ɵc, RouterPathService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jb21tb24uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9mb3Jtcy9hdXRvLXRyaW0vYXV0by10cmltLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL3RpbWUtYWdvL3RpbWUtYWdvLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90aW1lLWRpZmZlcmVuY2UvdGltZS1kaWZmZXJlbmNlLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy90aW1lLXVudGlsL3RpbWUtdW50aWwucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL2J5dGVzL2J5dGVzLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9waXBlcy9kZWNpbWFsLWJ5dGVzL2RlY2ltYWwtYnl0ZXMucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL2RpZ2l0cy9kaWdpdHMucGlwZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL3BpcGVzL3RydW5jYXRlL3RydW5jYXRlLnBpcGUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9zZXJ2aWNlcy9yb3V0ZXItcGF0aC5zZXJ2aWNlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vc2VydmljZXMvaWNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvcm90YXRlL3JvdGF0ZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9hbmltYXRpb25zL2NvbGxhcHNlL2NvbGxhcHNlLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvZmFkZS9mYWRlSW5PdXQuYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9ib3VuY2UvYm91bmNlLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvZmxhc2gvZmxhc2guYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9oZWFkc2hha2UvaGVhZHNoYWtlLmFuaW1hdGlvbi50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uL2FuaW1hdGlvbnMvamVsbG8vamVsbG8uYW5pbWF0aW9uLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYW5pbWF0aW9ucy9wdWxzZS9wdWxzZS5hbmltYXRpb24udHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi9iZWhhdmlvcnMvY29udHJvbC12YWx1ZS1hY2Nlc29yLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYmVoYXZpb3JzL2Rpc2FibGVkLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vYmVoYXZpb3JzL2Rpc2FibGUtcmlwcGxlLm1peGluLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vZm9ybXMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdExpc3RlbmVyLCBIb3N0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkQXV0b1RyaW1dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRBdXRvVHJpbURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIF9tb2RlbDogTmdNb2RlbCkge31cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0J3MgKGJsdXIpIGV2ZW50IGFuZCB0cmltcyB2YWx1ZS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxuICBvbkJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGVsICYmIHRoaXMuX21vZGVsLnZhbHVlICYmIHR5cGVvZih0aGlzLl9tb2RlbC52YWx1ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9tb2RlbC51cGRhdGUuZW1pdCh0aGlzLl9tb2RlbC52YWx1ZS50cmltKCkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lQWdvJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRUaW1lQWdvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGltZTogYW55LCByZWZlcmVuY2U/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIENvbnZlcnQgdGltZSB0byBkYXRlIG9iamVjdCBpZiBub3QgYWxyZWFkeVxuICAgIHRpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgcmVmOiBEYXRlID0gbmV3IERhdGUocmVmZXJlbmNlKTtcblxuICAgIC8vIElmIG5vdCBhIHZhbGlkIHRpbWVzdGFtcCwgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gICAgaWYgKCF0aW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIC8vIEZvciB1bml0IHRlc3RpbmcsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZWNsYXJlIGEgc3RhdGljIHN0YXJ0IHRpbWVcbiAgICAvLyBmb3IgY2FsY3VsYXRpb25zLCBvciBlbHNlIHNwZWVkIG9mIHRlc3RzIGNhbiBib3JrLlxuICAgIGxldCBzdGFydFRpbWU6IG51bWJlciA9IGlzTmFOKHJlZi5nZXRUaW1lKCkpID8gRGF0ZS5ub3coKSA6IHJlZi5nZXRUaW1lKCk7XG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKHN0YXJ0VGltZSAtIHRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgc2Vjb25kIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBzZWNvbmRzIGFnbyc7XG4gICAgfVxuICAgIC8vIE1pbnV0ZXNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIG1pbnV0ZSBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgbWludXRlcyBhZ28nO1xuICAgIH1cbiAgICAvLyBIb3Vyc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgaG91ciBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDI0KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgaG91cnMgYWdvJztcbiAgICB9XG4gICAgLy8gRGF5c1xuICAgIGRpZmYgPSBkaWZmIC8gMjQ7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgZGF5IGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMzApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBkYXlzIGFnbyc7XG4gICAgfVxuICAgIC8vIE1vbnRoc1xuICAgIGRpZmYgPSBkaWZmIC8gMzA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgbW9udGggYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAxMikge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIG1vbnRocyBhZ28nO1xuICAgIH1cbiAgICAvLyBZZWFyc1xuICAgIGRpZmYgPSBkaWZmIC8gMTI7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgeWVhciBhZ28nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgeWVhcnMgYWdvJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGltZURpZmZlcmVuY2UnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkVGltZURpZmZlcmVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdGFydDogYW55LCBlbmQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBzdGFydFRpbWU6IERhdGUgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgbGV0IGVuZFRpbWU6IERhdGU7XG5cbiAgICBpZiAoZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZShlbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXJ0VGltZS5nZXRUaW1lKCkgfHwgIWVuZFRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgIGxldCBkYXlzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjAgKiA2MCAqIDI0KSk7XG4gICAgZGlmZiA9IGRpZmYgLSAoZGF5cyAqICg2MCAqIDYwICogMjQpKTtcblxuICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwICogNjApKTtcbiAgICBkaWZmID0gZGlmZiAtIChob3VycyAqICg2MCAqIDYwKSk7XG5cbiAgICBsZXQgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwKSk7XG4gICAgZGlmZiAtPSBtaW51dGVzICogKDYwKTtcblxuICAgIGxldCBzZWNvbmRzOiBudW1iZXIgPSBkaWZmO1xuXG4gICAgbGV0IHBhZDogc3RyaW5nID0gJzAwJztcblxuICAgIGxldCBkYXlzRm9ybWF0dGVkOiBzdHJpbmcgPSAnJztcblxuICAgIGlmIChkYXlzID4gMCAmJiBkYXlzIDwgMikge1xuICAgICAgZGF5c0Zvcm1hdHRlZCA9ICcgZGF5IC0gJztcbiAgICB9IGVsc2UgaWYgKGRheXMgPiAxKSB7XG4gICAgICBkYXlzRm9ybWF0dGVkID0gJyBkYXlzIC0gJyA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChkYXlzID4gMCA/IGRheXMgKyBkYXlzRm9ybWF0dGVkIDogZGF5c0Zvcm1hdHRlZCkgK1xuICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAoaG91cnMgKyAnJykubGVuZ3RoKSArIGhvdXJzICsgJzonICtcbiAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKG1pbnV0ZXMgKyAnJykubGVuZ3RoKSArIG1pbnV0ZXMgKyAnOicgK1xuICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAoc2Vjb25kcyArICcnKS5sZW5ndGgpICsgc2Vjb25kcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lVW50aWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRpbWVVbnRpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRpbWU6IGFueSwgcmVmZXJlbmNlPzogYW55KTogc3RyaW5nIHtcbiAgICAvLyBDb252ZXJ0IHRpbWUgdG8gZGF0ZSBvYmplY3QgaWYgbm90IGFscmVhZHlcbiAgICB0aW1lID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IHJlZjogRGF0ZSA9IG5ldyBEYXRlKHJlZmVyZW5jZSk7XG5cbiAgICAvLyBJZiBub3QgYSB2YWxpZCB0aW1lc3RhbXAsIHJldHVybiAnSW52YWxpZCBEYXRlJ1xuICAgIGlmICghdGltZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG5cbiAgICAvLyBGb3IgdW5pdCB0ZXN0aW5nLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gZGVjbGFyZSBhIHN0YXRpYyBzdGFydCB0aW1lXG4gICAgLy8gZm9yIGNhbGN1bGF0aW9ucywgb3IgZWxzZSBzcGVlZCBvZiB0ZXN0cyBjYW4gYm9yay5cbiAgICBsZXQgc3RhcnRUaW1lOiBudW1iZXIgPSBpc05hTihyZWYuZ2V0VGltZSgpKSA/IERhdGUubm93KCkgOiByZWYuZ2V0VGltZSgpO1xuICAgIGxldCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcblxuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIHNlY29uZCc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIHNlY29uZHMnO1xuICAgIH1cbiAgICAvLyBNaW51dGVzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBtaW51dGUnO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBtaW51dGVzJztcbiAgICB9XG4gICAgLy8gSG91cnNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIGhvdXInO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDI0KSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBob3Vycyc7XG4gICAgfVxuICAgIC8vIERheXNcbiAgICBkaWZmID0gZGlmZiAvIDI0O1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIGRheSc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMzApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIGRheXMnO1xuICAgIH1cbiAgICAvLyBNb250aHNcbiAgICBkaWZmID0gZGlmZiAvIDMwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIG1vbnRoJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAxMikge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgbW9udGhzJztcbiAgICB9XG4gICAgLy8gWWVhcnNcbiAgICBkaWZmID0gZGlmZiAvIDEyO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICdpbiAxIHllYXInO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyB5ZWFycyc7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2J5dGVzJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZEJ5dGVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKiBgYnl0ZXNgIG5lZWRzIHRvIGJlIGBhbnlgIG9yIFR5cGVTY3JpcHQgY29tcGxhaW5zXG4gIFRyaWVkIGJvdGggYG51bWJlcmAgYW5kIGBudW1iZXIgfCBzdHJpbmdgICovXG4gIHRyYW5zZm9ybShieXRlczogYW55LCBwcmVjaXNpb246IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwIEInO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VJbnQoYnl0ZXMsIDEwKSkpIHtcbiAgICAgIC8qIElmIG5vdCBhIHZhbGlkIG51bWJlciwgcmV0dXJuICdJbnZhbGlkIE51bWJlcicgKi9cbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICBsZXQgazogbnVtYmVyID0gMTAyNDtcbiAgICBsZXQgc2l6ZXM6IHN0cmluZ1tdID0gWydCJywgJ0tpQicsICdNaUInLCAnR2lCJywgJ1RpQicsICdQaUInLCAnRWlCJywgJ1ppQicsICdZaUInXTtcbiAgICBsZXQgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RlY2ltYWxCeXRlcycsXG59KVxuXG5leHBvcnQgY2xhc3MgVGREZWNpbWFsQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qIGBieXRlc2AgbmVlZHMgdG8gYmUgYGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnNcbiAgVHJpZWQgYm90aCBgbnVtYmVyYCBhbmQgYG51bWJlciB8IHN0cmluZ2AgKi9cbiAgdHJhbnNmb3JtKGJ5dGVzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgaWYgKGJ5dGVzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAgQic7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChieXRlcywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJyAqL1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIGxldCBrOiBudW1iZXIgPSAxMDAwO1xuICAgIGxldCBzaXplczogc3RyaW5nW10gPSBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcbiAgICBsZXQgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBJbmplY3QsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdkaWdpdHMnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkRGlnaXRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHByaXZhdGUgX2RlY2ltYWxQaXBlOiBEZWNpbWFsUGlwZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcgPSAnZW4nKSB7XG4gICAgdGhpcy5fZGVjaW1hbFBpcGUgPSBuZXcgRGVjaW1hbFBpcGUodGhpcy5fbG9jYWxlKTtcbiAgfVxuXG4gIC8qIGBkaWdpdHNgIG5lZWRzIHRvIGJlIHR5cGUgYGRpZ2l0czogYW55YCBvciBUeXBlU2NyaXB0IGNvbXBsYWlucyAqL1xuICB0cmFuc2Zvcm0oZGlnaXRzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMSk6IHN0cmluZyB7XG4gICAgaWYgKGRpZ2l0cyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwJztcbiAgICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlSW50KGRpZ2l0cywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gdGhlIHZhbHVlICovXG4gICAgICByZXR1cm4gZGlnaXRzO1xuICAgIH0gZWxzZSBpZiAoZGlnaXRzIDwgMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxQaXBlLnRyYW5zZm9ybShkaWdpdHMudG9GaXhlZChwcmVjaXNpb24pKTtcbiAgICB9XG4gICAgbGV0IGs6IG51bWJlciA9IDEwMDA7XG4gICAgbGV0IHNpemVzOiBzdHJpbmdbXSA9IFsnJywgJ0snLCAnTScsICdCJywgJ1QnLCAnUSddO1xuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGRpZ2l0cykgLyBNYXRoLmxvZyhrKSk7XG4gICAgbGV0IHNpemU6IHN0cmluZyA9IHNpemVzW2ldO1xuICAgIHJldHVybiB0aGlzLl9kZWNpbWFsUGlwZS50cmFuc2Zvcm0ocGFyc2VGbG9hdCgoZGlnaXRzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQocHJlY2lzaW9uKSkpICsgKHNpemUgPyAnICcgKyBzaXplIDogJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RydW5jYXRlJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGV4dDogYW55LCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIFRydW5jYXRlXG4gICAgbGV0IHRydW5jYXRlZDogc3RyaW5nID0gdGV4dC5zdWJzdHIoMCwgbGVuZ3RoKTtcblxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgaWYgKHRydW5jYXRlZC5sYXN0SW5kZXhPZignICcpID4gMCkge1xuICAgICAgICB0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0cnVuY2F0ZWQgKz0gJ8OiwoDCpic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXNSZWNvZ25pemVkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgZmlsdGVyLCBwYWlyd2lzZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlclBhdGhTZXJ2aWNlIHtcbnByaXZhdGUgc3RhdGljIF9wcmV2aW91c1JvdXRlOiBzdHJpbmcgPSAnLyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5fcm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKChlOiBhbnkpID0+IGUgaW5zdGFuY2VvZiBSb3V0ZXNSZWNvZ25pemVkKSxcbiAgICAgIHBhaXJ3aXNlKCksXG4gICAgKS5zdWJzY3JpYmUoKGU6IGFueVtdKSA9PiB7XG4gICAgICBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZSA9IGVbMF0udXJsQWZ0ZXJSZWRpcmVjdHM7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZ2V0IHRoZSByb3V0ZSB0aGUgdXNlciBwcmV2aW91c2x5IHdlbnQgdG9cbiAgKiBnb29kIGZvciB1c2UgaW4gYSBcImJhY2sgYnV0dG9uXCJcbiAgKi9cbiAgZ2V0UHJldmlvdXNSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IGJ5IFRlcmFkYXRhIENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVEVSQURBVEEgQ09SUE9SQVRJT04gQ09ORklERU5USUFMIEFORCBUUkFERSBTRUNSRVRcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJY29uU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfaWNvbnM6IHN0cmluZ1tdID0gW1xuICAgICdhY2Nlc3NfYWxhcm0nLFxuICAgICdhY2Nlc3NfYWxhcm1zJyxcbiAgICAnYWNjZXNzX3RpbWUnLFxuICAgICdhY2Nlc3NpYmlsaXR5JyxcbiAgICAnYWNjb3VudF9iYWxhbmNlJyxcbiAgICAnYWNjb3VudF9iYWxhbmNlX3dhbGxldCcsXG4gICAgJ2FjY291bnRfYm94JyxcbiAgICAnYWNjb3VudF9jaXJjbGUnLFxuICAgICdhZGQnLFxuICAgICdhZGRfYWxhcm0nLFxuICAgICdhZGRfYm94JyxcbiAgICAnYWRkX2NpcmNsZScsXG4gICAgJ2FkZF9jaXJjbGVfb3V0bGluZScsXG4gICAgJ2FkZF9zaG9wcGluZ19jYXJ0JyxcbiAgICAnYWRkX3RvX3Bob3RvcycsXG4gICAgJ2FkanVzdCcsXG4gICAgJ2FsYXJtJyxcbiAgICAnYWxhcm1fYWRkJyxcbiAgICAnYWxhcm1fb2ZmJyxcbiAgICAnYWxhcm1fb24nLFxuICAgICdhbGJ1bScsXG4gICAgJ2FuZHJvaWQnLFxuICAgICdhbm5vdW5jZW1lbnQnLFxuICAgICdhcHBzJyxcbiAgICAnYXJjaGl2ZScsXG4gICAgJ2Fycm93X2JhY2snLFxuICAgICdhcnJvd19kcm9wX2Rvd24nLFxuICAgICdhcnJvd19kcm9wX2Rvd25fY2lyY2xlJyxcbiAgICAnYXJyb3dfZHJvcF91cCcsXG4gICAgJ2Fycm93X2ZvcndhcmQnLFxuICAgICdhc3BlY3RfcmF0aW8nLFxuICAgICdhc3Nlc3NtZW50JyxcbiAgICAnYXNzaWdubWVudCcsXG4gICAgJ2Fzc2lnbm1lbnRfaW5kJyxcbiAgICAnYXNzaWdubWVudF9sYXRlJyxcbiAgICAnYXNzaWdubWVudF9yZXR1cm4nLFxuICAgICdhc3NpZ25tZW50X3JldHVybmVkJyxcbiAgICAnYXNzaWdubWVudF90dXJuZWRfaW4nLFxuICAgICdhc3Npc3RhbnRfcGhvdG8nLFxuICAgICdhdHRhY2hfZmlsZScsXG4gICAgJ2F0dGFjaF9tb25leScsXG4gICAgJ2F0dGFjaG1lbnQnLFxuICAgICdhdWRpb3RyYWNrJyxcbiAgICAnYXV0b3JlbmV3JyxcbiAgICAnYXZfdGltZXInLFxuICAgICdiYWNrc3BhY2UnLFxuICAgICdiYWNrdXAnLFxuICAgICdiYXR0ZXJ5X2FsZXJ0JyxcbiAgICAnYmF0dGVyeV9jaGFyZ2luZ19mdWxsJyxcbiAgICAnYmF0dGVyeV9mdWxsJyxcbiAgICAnYmF0dGVyeV9zdGQnLFxuICAgICdiYXR0ZXJ5X3Vua25vd24nLFxuICAgICdiZWVuaGVyZScsXG4gICAgJ2Jsb2NrJyxcbiAgICAnYmx1ZXRvb3RoJyxcbiAgICAnYmx1ZXRvb3RoX2F1ZGlvJyxcbiAgICAnYmx1ZXRvb3RoX2Nvbm5lY3RlZCcsXG4gICAgJ2JsdWV0b290aF9kaXNhYmxlZCcsXG4gICAgJ2JsdWV0b290aF9zZWFyY2hpbmcnLFxuICAgICdibHVyX2NpcmN1bGFyJyxcbiAgICAnYmx1cl9saW5lYXInLFxuICAgICdibHVyX29mZicsXG4gICAgJ2JsdXJfb24nLFxuICAgICdib29rJyxcbiAgICAnYm9va21hcmsnLFxuICAgICdib29rbWFya19ib3JkZXInLFxuICAgICdib3JkZXJfYWxsJyxcbiAgICAnYm9yZGVyX2JvdHRvbScsXG4gICAgJ2JvcmRlcl9jbGVhcicsXG4gICAgJ2JvcmRlcl9jb2xvcicsXG4gICAgJ2JvcmRlcl9ob3Jpem9udGFsJyxcbiAgICAnYm9yZGVyX2lubmVyJyxcbiAgICAnYm9yZGVyX2xlZnQnLFxuICAgICdib3JkZXJfb3V0ZXInLFxuICAgICdib3JkZXJfcmlnaHQnLFxuICAgICdib3JkZXJfc3R5bGUnLFxuICAgICdib3JkZXJfdG9wJyxcbiAgICAnYm9yZGVyX3ZlcnRpY2FsJyxcbiAgICAnYnJpZ2h0bmVzc18xJyxcbiAgICAnYnJpZ2h0bmVzc18yJyxcbiAgICAnYnJpZ2h0bmVzc18zJyxcbiAgICAnYnJpZ2h0bmVzc180JyxcbiAgICAnYnJpZ2h0bmVzc181JyxcbiAgICAnYnJpZ2h0bmVzc182JyxcbiAgICAnYnJpZ2h0bmVzc183JyxcbiAgICAnYnJpZ2h0bmVzc19hdXRvJyxcbiAgICAnYnJpZ2h0bmVzc19oaWdoJyxcbiAgICAnYnJpZ2h0bmVzc19sb3cnLFxuICAgICdicmlnaHRuZXNzX21lZGl1bScsXG4gICAgJ2Jyb2tlbl9pbWFnZScsXG4gICAgJ2JydXNoJyxcbiAgICAnYnVnX3JlcG9ydCcsXG4gICAgJ2J1aWxkJyxcbiAgICAnYnVzaW5lc3MnLFxuICAgICdjYWNoZWQnLFxuICAgICdjYWtlJyxcbiAgICAnY2FsbCcsXG4gICAgJ2NhbGxfZW5kJyxcbiAgICAnY2FsbF9tYWRlJyxcbiAgICAnY2FsbF9tZXJnZScsXG4gICAgJ2NhbGxfbWlzc2VkJyxcbiAgICAnY2FsbF9yZWNlaXZlZCcsXG4gICAgJ2NhbGxfc3BsaXQnLFxuICAgICdjYW1lcmEnLFxuICAgICdjYW1lcmFfYWx0JyxcbiAgICAnY2FtZXJhX2Zyb250JyxcbiAgICAnY2FtZXJhX3JlYXInLFxuICAgICdjYW1lcmFfcm9sbCcsXG4gICAgJ2NhbmNlbCcsXG4gICAgJ2Nhc3QnLFxuICAgICdjYXN0X2Nvbm5lY3RlZCcsXG4gICAgJ2NlbnRlcl9mb2N1c19zdHJvbmcnLFxuICAgICdjZW50ZXJfZm9jdXNfd2VhaycsXG4gICAgJ2NoYXQnLFxuICAgICdjaGVjaycsXG4gICAgJ2NoZWNrX2JveCcsXG4gICAgJ2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJyxcbiAgICAnY2hlY2tfY2lyY2xlJyxcbiAgICAnY2hldnJvbl9sZWZ0JyxcbiAgICAnY2hldnJvbl9yaWdodCcsXG4gICAgJ2NsYXNzJyxcbiAgICAnY2xlYXInLFxuICAgICdjbGVhcl9hbGwnLFxuICAgICdjbG9zZScsXG4gICAgJ2Nsb3NlZF9jYXB0aW9uJyxcbiAgICAnY2xvdWQnLFxuICAgICdjbG91ZF9jaXJjbGUnLFxuICAgICdjbG91ZF9kb25lJyxcbiAgICAnY2xvdWRfZG93bmxvYWQnLFxuICAgICdjbG91ZF9vZmYnLFxuICAgICdjbG91ZF9xdWV1ZScsXG4gICAgJ2Nsb3VkX3VwbG9hZCcsXG4gICAgJ2NvbGxlY3Rpb25zJyxcbiAgICAnY29sbGVjdGlvbnNfYm9va21hcmsnLFxuICAgICdjb2xvcl9sZW5zJyxcbiAgICAnY29sb3JpemUnLFxuICAgICdjb21tZW50JyxcbiAgICAnY29tcGFyZScsXG4gICAgJ2NvbXB1dGVyJyxcbiAgICAnY29uZmlybWF0aW9uX251bWJlcicsXG4gICAgJ2NvbnRhY3RfcGhvbmUnLFxuICAgICdjb250YWN0cycsXG4gICAgJ2NvbnRlbnRfY29weScsXG4gICAgJ2NvbnRlbnRfY3V0JyxcbiAgICAnY29udGVudF9wYXN0ZScsXG4gICAgJ2NvbnRyb2xfcG9pbnQnLFxuICAgICdjb250cm9sX3BvaW50X2R1cGxpY2F0ZScsXG4gICAgJ2NyZWF0ZScsXG4gICAgJ2NyZWRpdF9jYXJkJyxcbiAgICAnY3JvcCcsXG4gICAgJ2Nyb3BfMTZfOScsXG4gICAgJ2Nyb3BfM18yJyxcbiAgICAnY3JvcF81XzQnLFxuICAgICdjcm9wXzdfNScsXG4gICAgJ2Nyb3BfZGluJyxcbiAgICAnY3JvcF9mcmVlJyxcbiAgICAnY3JvcF9sYW5kc2NhcGUnLFxuICAgICdjcm9wX29yaWdpbmFsJyxcbiAgICAnY3JvcF9wb3J0cmFpdCcsXG4gICAgJ2Nyb3Bfc3F1YXJlJyxcbiAgICAnZGFzaGJvYXJkJyxcbiAgICAnZGF0YV91c2FnZScsXG4gICAgJ2RlaGF6ZScsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAnZGVza3RvcF9tYWMnLFxuICAgICdkZXNrdG9wX3dpbmRvd3MnLFxuICAgICdkZXRhaWxzJyxcbiAgICAnZGV2ZWxvcGVyX2JvYXJkJyxcbiAgICAnZGV2ZWxvcGVyX21vZGUnLFxuICAgICdkZXZpY2VfaHViJyxcbiAgICAnZGV2aWNlcycsXG4gICAgJ2RpYWxlcl9zaXAnLFxuICAgICdkaWFscGFkJyxcbiAgICAnZGlyZWN0aW9ucycsXG4gICAgJ2RpcmVjdGlvbnNfYmlrZScsXG4gICAgJ2RpcmVjdGlvbnNfYm9hdCcsXG4gICAgJ2RpcmVjdGlvbnNfYnVzJyxcbiAgICAnZGlyZWN0aW9uc19jYXInLFxuICAgICdkaXJlY3Rpb25zX3JhaWx3YXknLFxuICAgICdkaXJlY3Rpb25zX3J1bicsXG4gICAgJ2RpcmVjdGlvbnNfc3Vid2F5JyxcbiAgICAnZGlyZWN0aW9uc190cmFuc2l0JyxcbiAgICAnZGlyZWN0aW9uc193YWxrJyxcbiAgICAnZGlzY19mdWxsJyxcbiAgICAnZG5zJyxcbiAgICAnZG9fbm90X2Rpc3R1cmInLFxuICAgICdkb19ub3RfZGlzdHVyYl9hbHQnLFxuICAgICdkb2NrJyxcbiAgICAnZG9tYWluJyxcbiAgICAnZG9uZScsXG4gICAgJ2RvbmVfYWxsJyxcbiAgICAnZHJhZnRzJyxcbiAgICAnZHJpdmVfZXRhJyxcbiAgICAnZHZyJyxcbiAgICAnZWRpdCcsXG4gICAgJ2VqZWN0JyxcbiAgICAnZW1haWwnLFxuICAgICdlcXVhbGl6ZXInLFxuICAgICdlcnJvcicsXG4gICAgJ2Vycm9yX291dGxpbmUnLFxuICAgICdldmVudCcsXG4gICAgJ2V2ZW50X2F2YWlsYWJsZScsXG4gICAgJ2V2ZW50X2J1c3knLFxuICAgICdldmVudF9ub3RlJyxcbiAgICAnZXZlbnRfc2VhdCcsXG4gICAgJ2V4aXRfdG9fYXBwJyxcbiAgICAnZXhwYW5kX2xlc3MnLFxuICAgICdleHBhbmRfbW9yZScsXG4gICAgJ2V4cGxpY2l0JyxcbiAgICAnZXhwbG9yZScsXG4gICAgJ2V4cG9zdXJlJyxcbiAgICAnZXhwb3N1cmVfbmVnXzEnLFxuICAgICdleHBvc3VyZV9uZWdfMicsXG4gICAgJ2V4cG9zdXJlX3BsdXNfMScsXG4gICAgJ2V4cG9zdXJlX3BsdXNfMicsXG4gICAgJ2V4cG9zdXJlX3plcm8nLFxuICAgICdleHRlbnNpb24nLFxuICAgICdmYWNlJyxcbiAgICAnZmFzdF9mb3J3YXJkJyxcbiAgICAnZmFzdF9yZXdpbmQnLFxuICAgICdmYXZvcml0ZScsXG4gICAgJ2Zhdm9yaXRlX2JvcmRlcicsXG4gICAgJ2ZlZWRiYWNrJyxcbiAgICAnZmlsZV9kb3dubG9hZCcsXG4gICAgJ2ZpbGVfdXBsb2FkJyxcbiAgICAnZmlsdGVyJyxcbiAgICAnZmlsdGVyXzEnLFxuICAgICdmaWx0ZXJfMicsXG4gICAgJ2ZpbHRlcl8zJyxcbiAgICAnZmlsdGVyXzQnLFxuICAgICdmaWx0ZXJfNScsXG4gICAgJ2ZpbHRlcl82JyxcbiAgICAnZmlsdGVyXzcnLFxuICAgICdmaWx0ZXJfOCcsXG4gICAgJ2ZpbHRlcl85JyxcbiAgICAnZmlsdGVyXzlfcGx1cycsXG4gICAgJ2ZpbHRlcl9iX2FuZF93JyxcbiAgICAnZmlsdGVyX2NlbnRlcl9mb2N1cycsXG4gICAgJ2ZpbHRlcl9kcmFtYScsXG4gICAgJ2ZpbHRlcl9mcmFtZXMnLFxuICAgICdmaWx0ZXJfaGRyJyxcbiAgICAnZmlsdGVyX2xpc3QnLFxuICAgICdmaWx0ZXJfbm9uZScsXG4gICAgJ2ZpbHRlcl90aWx0X3NoaWZ0JyxcbiAgICAnZmlsdGVyX3ZpbnRhZ2UnLFxuICAgICdmaW5kX2luX3BhZ2UnLFxuICAgICdmaW5kX3JlcGxhY2UnLFxuICAgICdmbGFnJyxcbiAgICAnZmxhcmUnLFxuICAgICdmbGFzaF9hdXRvJyxcbiAgICAnZmxhc2hfb2ZmJyxcbiAgICAnZmxhc2hfb24nLFxuICAgICdmbGlnaHQnLFxuICAgICdmbGlnaHRfbGFuZCcsXG4gICAgJ2ZsaWdodF90YWtlb2ZmJyxcbiAgICAnZmxpcCcsXG4gICAgJ2ZsaXBfdG9fYmFjaycsXG4gICAgJ2ZsaXBfdG9fZnJvbnQnLFxuICAgICdmb2xkZXInLFxuICAgICdmb2xkZXJfb3BlbicsXG4gICAgJ2ZvbGRlcl9zaGFyZWQnLFxuICAgICdmb2xkZXJfc3BlY2lhbCcsXG4gICAgJ2ZvbnRfZG93bmxvYWQnLFxuICAgICdmb3JtYXRfYWxpZ25fY2VudGVyJyxcbiAgICAnZm9ybWF0X2FsaWduX2p1c3RpZnknLFxuICAgICdmb3JtYXRfYWxpZ25fbGVmdCcsXG4gICAgJ2Zvcm1hdF9hbGlnbl9yaWdodCcsXG4gICAgJ2Zvcm1hdF9ib2xkJyxcbiAgICAnZm9ybWF0X2NsZWFyJyxcbiAgICAnZm9ybWF0X2NvbG9yX2ZpbGwnLFxuICAgICdmb3JtYXRfY29sb3JfcmVzZXQnLFxuICAgICdmb3JtYXRfY29sb3JfdGV4dCcsXG4gICAgJ2Zvcm1hdF9pbmRlbnRfZGVjcmVhc2UnLFxuICAgICdmb3JtYXRfaW5kZW50X2luY3JlYXNlJyxcbiAgICAnZm9ybWF0X2l0YWxpYycsXG4gICAgJ2Zvcm1hdF9saW5lX3NwYWNpbmcnLFxuICAgICdmb3JtYXRfbGlzdF9idWxsZXRlZCcsXG4gICAgJ2Zvcm1hdF9saXN0X251bWJlcmVkJyxcbiAgICAnZm9ybWF0X3BhaW50JyxcbiAgICAnZm9ybWF0X3F1b3RlJyxcbiAgICAnZm9ybWF0X3NpemUnLFxuICAgICdmb3JtYXRfc3RyaWtldGhyb3VnaCcsXG4gICAgJ2Zvcm1hdF90ZXh0ZGlyZWN0aW9uX2xfdG9fcicsXG4gICAgJ2Zvcm1hdF90ZXh0ZGlyZWN0aW9uX3JfdG9fbCcsXG4gICAgJ2Zvcm1hdF91bmRlcmxpbmVkJyxcbiAgICAnZm9ydW0nLFxuICAgICdmb3J3YXJkJyxcbiAgICAnZm9yd2FyZF8xMCcsXG4gICAgJ2ZvcndhcmRfMzAnLFxuICAgICdmb3J3YXJkXzUnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbl9leGl0JyxcbiAgICAnZnVuY3Rpb25zJyxcbiAgICAnZ2FtZXBhZCcsXG4gICAgJ2dhbWVzJyxcbiAgICAnZ2VzdHVyZScsXG4gICAgJ2dldF9hcHAnLFxuICAgICdnaWYnLFxuICAgICdncHNfZml4ZWQnLFxuICAgICdncHNfbm90X2ZpeGVkJyxcbiAgICAnZ3BzX29mZicsXG4gICAgJ2dyYWRlJyxcbiAgICAnZ3JhZGllbnQnLFxuICAgICdncmFpbicsXG4gICAgJ2dyYXBoaWNfZXEnLFxuICAgICdncmlkX29mZicsXG4gICAgJ2dyaWRfb24nLFxuICAgICdncm91cCcsXG4gICAgJ2dyb3VwX2FkZCcsXG4gICAgJ2dyb3VwX3dvcmsnLFxuICAgICdoZCcsXG4gICAgJ2hkcl9vZmYnLFxuICAgICdoZHJfb24nLFxuICAgICdoZHJfc3Ryb25nJyxcbiAgICAnaGRyX3dlYWsnLFxuICAgICdoZWFkc2V0JyxcbiAgICAnaGVhZHNldF9taWMnLFxuICAgICdoZWFsaW5nJyxcbiAgICAnaGVhcmluZycsXG4gICAgJ2hlbHAnLFxuICAgICdoZWxwX291dGxpbmUnLFxuICAgICdoaWdoX3F1YWxpdHknLFxuICAgICdoaWdobGlnaHRfb2ZmJyxcbiAgICAnaGlzdG9yeScsXG4gICAgJ2hvbWUnLFxuICAgICdob3RlbCcsXG4gICAgJ2hvdXJnbGFzc19lbXB0eScsXG4gICAgJ2hvdXJnbGFzc19mdWxsJyxcbiAgICAnaHR0cCcsXG4gICAgJ2h0dHBzJyxcbiAgICAnaW1hZ2UnLFxuICAgICdpbWFnZV9hc3BlY3RfcmF0aW8nLFxuICAgICdpbXBvcnRfZXhwb3J0JyxcbiAgICAnaW5ib3gnLFxuICAgICdpbmRldGVybWluYXRlX2NoZWNrX2JveCcsXG4gICAgJ2luZm8nLFxuICAgICdpbmZvX291dGxpbmUnLFxuICAgICdpbnB1dCcsXG4gICAgJ2luc2VydF9jaGFydCcsXG4gICAgJ2luc2VydF9jb21tZW50JyxcbiAgICAnaW5zZXJ0X2RyaXZlX2ZpbGUnLFxuICAgICdpbnNlcnRfZW1vdGljb24nLFxuICAgICdpbnNlcnRfaW52aXRhdGlvbicsXG4gICAgJ2luc2VydF9saW5rJyxcbiAgICAnaW5zZXJ0X3Bob3RvJyxcbiAgICAnaW52ZXJ0X2NvbG9ycycsXG4gICAgJ2ludmVydF9jb2xvcnNfb2ZmJyxcbiAgICAnaXNvJyxcbiAgICAna2V5Ym9hcmQnLFxuICAgICdrZXlib2FyZF9hcnJvd19kb3duJyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfbGVmdCcsXG4gICAgJ2tleWJvYXJkX2Fycm93X3JpZ2h0JyxcbiAgICAna2V5Ym9hcmRfYXJyb3dfdXAnLFxuICAgICdrZXlib2FyZF9iYWNrc3BhY2UnLFxuICAgICdrZXlib2FyZF9jYXBzbG9jaycsXG4gICAgJ2tleWJvYXJkX2hpZGUnLFxuICAgICdrZXlib2FyZF9yZXR1cm4nLFxuICAgICdrZXlib2FyZF90YWInLFxuICAgICdrZXlib2FyZF92b2ljZScsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGFiZWxfb3V0bGluZScsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmd1YWdlJyxcbiAgICAnbGFwdG9wJyxcbiAgICAnbGFwdG9wX2Nocm9tZWJvb2snLFxuICAgICdsYXB0b3BfbWFjJyxcbiAgICAnbGFwdG9wX3dpbmRvd3MnLFxuICAgICdsYXVuY2gnLFxuICAgICdsYXllcnMnLFxuICAgICdsYXllcnNfY2xlYXInLFxuICAgICdsZWFrX2FkZCcsXG4gICAgJ2xlYWtfcmVtb3ZlJyxcbiAgICAnbGVucycsXG4gICAgJ2xpYnJhcnlfYWRkJyxcbiAgICAnbGlicmFyeV9ib29rcycsXG4gICAgJ2xpYnJhcnlfbXVzaWMnLFxuICAgICdsaW5rJyxcbiAgICAnbGlzdCcsXG4gICAgJ2xpdmVfaGVscCcsXG4gICAgJ2xpdmVfdHYnLFxuICAgICdsb2NhbF9hY3Rpdml0eScsXG4gICAgJ2xvY2FsX2FpcnBvcnQnLFxuICAgICdsb2NhbF9hdG0nLFxuICAgICdsb2NhbF9iYXInLFxuICAgICdsb2NhbF9jYWZlJyxcbiAgICAnbG9jYWxfY2FyX3dhc2gnLFxuICAgICdsb2NhbF9jb252ZW5pZW5jZV9zdG9yZScsXG4gICAgJ2xvY2FsX2RpbmluZycsXG4gICAgJ2xvY2FsX2RyaW5rJyxcbiAgICAnbG9jYWxfZmxvcmlzdCcsXG4gICAgJ2xvY2FsX2dhc19zdGF0aW9uJyxcbiAgICAnbG9jYWxfZ3JvY2VyeV9zdG9yZScsXG4gICAgJ2xvY2FsX2hvc3BpdGFsJyxcbiAgICAnbG9jYWxfaG90ZWwnLFxuICAgICdsb2NhbF9sYXVuZHJ5X3NlcnZpY2UnLFxuICAgICdsb2NhbF9saWJyYXJ5JyxcbiAgICAnbG9jYWxfbWFsbCcsXG4gICAgJ2xvY2FsX21vdmllcycsXG4gICAgJ2xvY2FsX29mZmVyJyxcbiAgICAnbG9jYWxfcGFya2luZycsXG4gICAgJ2xvY2FsX3BoYXJtYWN5JyxcbiAgICAnbG9jYWxfcGhvbmUnLFxuICAgICdsb2NhbF9waXp6YScsXG4gICAgJ2xvY2FsX3BsYXknLFxuICAgICdsb2NhbF9wb3N0X29mZmljZScsXG4gICAgJ2xvY2FsX3ByaW50c2hvcCcsXG4gICAgJ2xvY2FsX3NlZScsXG4gICAgJ2xvY2FsX3NoaXBwaW5nJyxcbiAgICAnbG9jYWxfdGF4aScsXG4gICAgJ2xvY2F0aW9uX2NpdHknLFxuICAgICdsb2NhdGlvbl9kaXNhYmxlZCcsXG4gICAgJ2xvY2F0aW9uX29mZicsXG4gICAgJ2xvY2F0aW9uX29uJyxcbiAgICAnbG9jYXRpb25fc2VhcmNoaW5nJyxcbiAgICAnbG9jaycsXG4gICAgJ2xvY2tfb3BlbicsXG4gICAgJ2xvY2tfb3V0bGluZScsXG4gICAgJ2xvb2tzJyxcbiAgICAnbG9va3NfMycsXG4gICAgJ2xvb2tzXzQnLFxuICAgICdsb29rc181JyxcbiAgICAnbG9va3NfNicsXG4gICAgJ2xvb2tzX29uZScsXG4gICAgJ2xvb2tzX3R3bycsXG4gICAgJ2xvb3AnLFxuICAgICdsb3VwZScsXG4gICAgJ2xveWFsdHknLFxuICAgICdtYWlsJyxcbiAgICAnbWFwJyxcbiAgICAnbWFya3VucmVhZCcsXG4gICAgJ21hcmt1bnJlYWRfbWFpbGJveCcsXG4gICAgJ21lbW9yeScsXG4gICAgJ21lbnUnLFxuICAgICdtZXJnZV90eXBlJyxcbiAgICAnbWVzc2FnZScsXG4gICAgJ21pYycsXG4gICAgJ21pY19ub25lJyxcbiAgICAnbWljX29mZicsXG4gICAgJ21tcycsXG4gICAgJ21vZGVfY29tbWVudCcsXG4gICAgJ21vZGVfZWRpdCcsXG4gICAgJ21vbmV5X29mZicsXG4gICAgJ21vbm9jaHJvbWVfcGhvdG9zJyxcbiAgICAnbW9vZCcsXG4gICAgJ21vb2RfYmFkJyxcbiAgICAnbW9yZScsXG4gICAgJ21vcmVfaG9yaXonLFxuICAgICdtb3JlX3ZlcnQnLFxuICAgICdtb3VzZScsXG4gICAgJ21vdmllJyxcbiAgICAnbW92aWVfY3JlYXRpb24nLFxuICAgICdtdXNpY19ub3RlJyxcbiAgICAnbXlfbGlicmFyeV9hZGQnLFxuICAgICdteV9saWJyYXJ5X2Jvb2tzJyxcbiAgICAnbXlfbGlicmFyeV9tdXNpYycsXG4gICAgJ215X2xvY2F0aW9uJyxcbiAgICAnbmF0dXJlJyxcbiAgICAnbmF0dXJlX3Blb3BsZScsXG4gICAgJ25hdmlnYXRlX2JlZm9yZScsXG4gICAgJ25hdmlnYXRlX25leHQnLFxuICAgICduYXZpZ2F0aW9uJyxcbiAgICAnbmV0d29ya19jZWxsJyxcbiAgICAnbmV0d29ya19sb2NrZWQnLFxuICAgICduZXR3b3JrX3dpZmknLFxuICAgICduZXdfcmVsZWFzZXMnLFxuICAgICduZmMnLFxuICAgICdub19zaW0nLFxuICAgICdub3RfaW50ZXJlc3RlZCcsXG4gICAgJ25vdGVfYWRkJyxcbiAgICAnbm90aWZpY2F0aW9ucycsXG4gICAgJ25vdGlmaWNhdGlvbnNfYWN0aXZlJyxcbiAgICAnbm90aWZpY2F0aW9uc19ub25lJyxcbiAgICAnbm90aWZpY2F0aW9uc19vZmYnLFxuICAgICdub3RpZmljYXRpb25zX3BhdXNlZCcsXG4gICAgJ29mZmxpbmVfcGluJyxcbiAgICAnb25kZW1hbmRfdmlkZW8nLFxuICAgICdvcGVuX2luX2Jyb3dzZXInLFxuICAgICdvcGVuX2luX25ldycsXG4gICAgJ29wZW5fd2l0aCcsXG4gICAgJ3BhZ2VzJyxcbiAgICAncGFnZXZpZXcnLFxuICAgICdwYWxldHRlJyxcbiAgICAncGFub3JhbWEnLFxuICAgICdwYW5vcmFtYV9maXNoX2V5ZScsXG4gICAgJ3Bhbm9yYW1hX2hvcml6b250YWwnLFxuICAgICdwYW5vcmFtYV92ZXJ0aWNhbCcsXG4gICAgJ3Bhbm9yYW1hX3dpZGVfYW5nbGUnLFxuICAgICdwYXJ0eV9tb2RlJyxcbiAgICAncGF1c2UnLFxuICAgICdwYXVzZV9jaXJjbGVfZmlsbGVkJyxcbiAgICAncGF1c2VfY2lyY2xlX291dGxpbmUnLFxuICAgICdwYXltZW50JyxcbiAgICAncGVvcGxlJyxcbiAgICAncGVvcGxlX291dGxpbmUnLFxuICAgICdwZXJtX2NhbWVyYV9taWMnLFxuICAgICdwZXJtX2NvbnRhY3RfY2FsZW5kYXInLFxuICAgICdwZXJtX2RhdGFfc2V0dGluZycsXG4gICAgJ3Blcm1fZGV2aWNlX2luZm9ybWF0aW9uJyxcbiAgICAncGVybV9pZGVudGl0eScsXG4gICAgJ3Blcm1fbWVkaWEnLFxuICAgICdwZXJtX3Bob25lX21zZycsXG4gICAgJ3Blcm1fc2Nhbl93aWZpJyxcbiAgICAncGVyc29uJyxcbiAgICAncGVyc29uX2FkZCcsXG4gICAgJ3BlcnNvbl9vdXRsaW5lJyxcbiAgICAncGVyc29uX3BpbicsXG4gICAgJ3BlcnNvbmFsX3ZpZGVvJyxcbiAgICAncGhvbmUnLFxuICAgICdwaG9uZV9hbmRyb2lkJyxcbiAgICAncGhvbmVfYmx1ZXRvb3RoX3NwZWFrZXInLFxuICAgICdwaG9uZV9mb3J3YXJkZWQnLFxuICAgICdwaG9uZV9pbl90YWxrJyxcbiAgICAncGhvbmVfaXBob25lJyxcbiAgICAncGhvbmVfbG9ja2VkJyxcbiAgICAncGhvbmVfbWlzc2VkJyxcbiAgICAncGhvbmVfcGF1c2VkJyxcbiAgICAncGhvbmVsaW5rJyxcbiAgICAncGhvbmVsaW5rX2VyYXNlJyxcbiAgICAncGhvbmVsaW5rX2xvY2snLFxuICAgICdwaG9uZWxpbmtfb2ZmJyxcbiAgICAncGhvbmVsaW5rX3JpbmcnLFxuICAgICdwaG9uZWxpbmtfc2V0dXAnLFxuICAgICdwaG90bycsXG4gICAgJ3Bob3RvX2FsYnVtJyxcbiAgICAncGhvdG9fY2FtZXJhJyxcbiAgICAncGhvdG9fbGlicmFyeScsXG4gICAgJ3Bob3RvX3NpemVfc2VsZWN0X2FjdHVhbCcsXG4gICAgJ3Bob3RvX3NpemVfc2VsZWN0X2xhcmdlJyxcbiAgICAncGhvdG9fc2l6ZV9zZWxlY3Rfc21hbGwnLFxuICAgICdwaWN0dXJlX2FzX3BkZicsXG4gICAgJ3BpY3R1cmVfaW5fcGljdHVyZScsXG4gICAgJ3Bpbl9kcm9wJyxcbiAgICAncGxhY2UnLFxuICAgICdwbGF5X2Fycm93JyxcbiAgICAncGxheV9jaXJjbGVfZmlsbGVkJyxcbiAgICAncGxheV9jaXJjbGVfb3V0bGluZScsXG4gICAgJ3BsYXlfZm9yX3dvcmsnLFxuICAgICdwbGF5X3Nob3BwaW5nX2JhZycsXG4gICAgJ3BsYXlsaXN0X2FkZCcsXG4gICAgJ3BsdXNfb25lJyxcbiAgICAncG9sbCcsXG4gICAgJ3BvbHltZXInLFxuICAgICdwb3J0YWJsZV93aWZpX29mZicsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG93ZXInLFxuICAgICdwb3dlcl9pbnB1dCcsXG4gICAgJ3Bvd2VyX3NldHRpbmdzX25ldycsXG4gICAgJ3ByZXNlbnRfdG9fYWxsJyxcbiAgICAncHJpbnQnLFxuICAgICdwdWJsaWMnLFxuICAgICdwdWJsaXNoJyxcbiAgICAncXVlcnlfYnVpbGRlcicsXG4gICAgJ3F1ZXN0aW9uX2Fuc3dlcicsXG4gICAgJ3F1ZXVlJyxcbiAgICAncXVldWVfbXVzaWMnLFxuICAgICdyYWRpbycsXG4gICAgJ3JhZGlvX2J1dHRvbl9jaGVja2VkJyxcbiAgICAncmFkaW9fYnV0dG9uX3VuY2hlY2tlZCcsXG4gICAgJ3JhdGVfcmV2aWV3JyxcbiAgICAncmVjZWlwdCcsXG4gICAgJ3JlY2VudF9hY3RvcnMnLFxuICAgICdyZWRlZW0nLFxuICAgICdyZWRvJyxcbiAgICAncmVmcmVzaCcsXG4gICAgJ3JlbW92ZScsXG4gICAgJ3JlbW92ZV9jaXJjbGUnLFxuICAgICdyZW1vdmVfY2lyY2xlX291dGxpbmUnLFxuICAgICdyZW1vdmVfcmVkX2V5ZScsXG4gICAgJ3Jlb3JkZXInLFxuICAgICdyZXBlYXQnLFxuICAgICdyZXBlYXRfb25lJyxcbiAgICAncmVwbGF5JyxcbiAgICAncmVwbGF5XzEwJyxcbiAgICAncmVwbGF5XzMwJyxcbiAgICAncmVwbGF5XzUnLFxuICAgICdyZXBseScsXG4gICAgJ3JlcGx5X2FsbCcsXG4gICAgJ3JlcG9ydCcsXG4gICAgJ3JlcG9ydF9wcm9ibGVtJyxcbiAgICAncmVzdGF1cmFudF9tZW51JyxcbiAgICAncmVzdG9yZScsXG4gICAgJ3Jpbmdfdm9sdW1lJyxcbiAgICAncm9vbScsXG4gICAgJ3JvdGF0ZV85MF9kZWdyZWVzX2NjdycsXG4gICAgJ3JvdGF0ZV9sZWZ0JyxcbiAgICAncm90YXRlX3JpZ2h0JyxcbiAgICAncm91dGVyJyxcbiAgICAnc2F0ZWxsaXRlJyxcbiAgICAnc2F2ZScsXG4gICAgJ3NjYW5uZXInLFxuICAgICdzY2hlZHVsZScsXG4gICAgJ3NjaG9vbCcsXG4gICAgJ3NjcmVlbl9sb2NrX2xhbmRzY2FwZScsXG4gICAgJ3NjcmVlbl9sb2NrX3BvcnRyYWl0JyxcbiAgICAnc2NyZWVuX2xvY2tfcm90YXRpb24nLFxuICAgICdzY3JlZW5fcm90YXRpb24nLFxuICAgICdzZF9jYXJkJyxcbiAgICAnc2Rfc3RvcmFnZScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NlY3VyaXR5JyxcbiAgICAnc2VsZWN0X2FsbCcsXG4gICAgJ3NlbmQnLFxuICAgICdzZXR0aW5ncycsXG4gICAgJ3NldHRpbmdzX2FwcGxpY2F0aW9ucycsXG4gICAgJ3NldHRpbmdzX2JhY2t1cF9yZXN0b3JlJyxcbiAgICAnc2V0dGluZ3NfYmx1ZXRvb3RoJyxcbiAgICAnc2V0dGluZ3NfYnJpZ2h0bmVzcycsXG4gICAgJ3NldHRpbmdzX2NlbGwnLFxuICAgICdzZXR0aW5nc19ldGhlcm5ldCcsXG4gICAgJ3NldHRpbmdzX2lucHV0X2FudGVubmEnLFxuICAgICdzZXR0aW5nc19pbnB1dF9jb21wb25lbnQnLFxuICAgICdzZXR0aW5nc19pbnB1dF9jb21wb3NpdGUnLFxuICAgICdzZXR0aW5nc19pbnB1dF9oZG1pJyxcbiAgICAnc2V0dGluZ3NfaW5wdXRfc3ZpZGVvJyxcbiAgICAnc2V0dGluZ3Nfb3ZlcnNjYW4nLFxuICAgICdzZXR0aW5nc19waG9uZScsXG4gICAgJ3NldHRpbmdzX3Bvd2VyJyxcbiAgICAnc2V0dGluZ3NfcmVtb3RlJyxcbiAgICAnc2V0dGluZ3Nfc3lzdGVtX2RheWRyZWFtJyxcbiAgICAnc2V0dGluZ3Nfdm9pY2UnLFxuICAgICdzaGFyZScsXG4gICAgJ3Nob3AnLFxuICAgICdzaG9wX3R3bycsXG4gICAgJ3Nob3BwaW5nX2Jhc2tldCcsXG4gICAgJ3Nob3BwaW5nX2NhcnQnLFxuICAgICdzaHVmZmxlJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyXzRfYmFyJyxcbiAgICAnc2lnbmFsX2NlbGx1bGFyX2Nvbm5lY3RlZF9ub19pbnRlcm5ldF80X2JhcicsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9ub19zaW0nLFxuICAgICdzaWduYWxfY2VsbHVsYXJfbnVsbCcsXG4gICAgJ3NpZ25hbF9jZWxsdWxhcl9vZmYnLFxuICAgICdzaWduYWxfd2lmaV80X2JhcicsXG4gICAgJ3NpZ25hbF93aWZpXzRfYmFyX2xvY2snLFxuICAgICdzaWduYWxfd2lmaV9vZmYnLFxuICAgICdzaW1fY2FyZCcsXG4gICAgJ3NpbV9jYXJkX2FsZXJ0JyxcbiAgICAnc2tpcF9uZXh0JyxcbiAgICAnc2tpcF9wcmV2aW91cycsXG4gICAgJ3NsaWRlc2hvdycsXG4gICAgJ3NtYXJ0cGhvbmUnLFxuICAgICdzbXMnLFxuICAgICdzbXNfZmFpbGVkJyxcbiAgICAnc25vb3plJyxcbiAgICAnc29ydCcsXG4gICAgJ3NvcnRfYnlfYWxwaGEnLFxuICAgICdzcGFjZV9iYXInLFxuICAgICdzcGVha2VyJyxcbiAgICAnc3BlYWtlcl9ncm91cCcsXG4gICAgJ3NwZWFrZXJfbm90ZXMnLFxuICAgICdzcGVha2VyX3Bob25lJyxcbiAgICAnc3BlbGxjaGVjaycsXG4gICAgJ3N0YXInLFxuICAgICdzdGFyX2JvcmRlcicsXG4gICAgJ3N0YXJfaGFsZicsXG4gICAgJ3N0YXJzJyxcbiAgICAnc3RheV9jdXJyZW50X2xhbmRzY2FwZScsXG4gICAgJ3N0YXlfY3VycmVudF9wb3J0cmFpdCcsXG4gICAgJ3N0YXlfcHJpbWFyeV9sYW5kc2NhcGUnLFxuICAgICdzdGF5X3ByaW1hcnlfcG9ydHJhaXQnLFxuICAgICdzdG9wJyxcbiAgICAnc3RvcmFnZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3RvcmVfbWFsbF9kaXJlY3RvcnknLFxuICAgICdzdHJhaWdodGVuJyxcbiAgICAnc3RyaWtldGhyb3VnaF9zJyxcbiAgICAnc3R5bGUnLFxuICAgICdzdWJqZWN0JyxcbiAgICAnc3VidGl0bGVzJyxcbiAgICAnc3VwZXJ2aXNvcl9hY2NvdW50JyxcbiAgICAnc3Vycm91bmRfc291bmQnLFxuICAgICdzd2FwX2NhbGxzJyxcbiAgICAnc3dhcF9ob3JpeicsXG4gICAgJ3N3YXBfdmVydCcsXG4gICAgJ3N3YXBfdmVydGljYWxfY2lyY2xlJyxcbiAgICAnc3dpdGNoX2NhbWVyYScsXG4gICAgJ3N3aXRjaF92aWRlbycsXG4gICAgJ3N5bmMnLFxuICAgICdzeW5jX2Rpc2FibGVkJyxcbiAgICAnc3luY19wcm9ibGVtJyxcbiAgICAnc3lzdGVtX3VwZGF0ZScsXG4gICAgJ3N5c3RlbV91cGRhdGVfYWx0JyxcbiAgICAndGFiJyxcbiAgICAndGFiX3Vuc2VsZWN0ZWQnLFxuICAgICd0YWJsZXQnLFxuICAgICd0YWJsZXRfYW5kcm9pZCcsXG4gICAgJ3RhYmxldF9tYWMnLFxuICAgICd0YWdfZmFjZXMnLFxuICAgICd0YXBfYW5kX3BsYXknLFxuICAgICd0ZXJyYWluJyxcbiAgICAndGV4dF9mb3JtYXQnLFxuICAgICd0ZXh0c21zJyxcbiAgICAndGV4dHVyZScsXG4gICAgJ3RoZWF0ZXJzJyxcbiAgICAndGh1bWJfZG93bicsXG4gICAgJ3RodW1iX3VwJyxcbiAgICAndGh1bWJzX3VwX2Rvd24nLFxuICAgICd0aW1lX3RvX2xlYXZlJyxcbiAgICAndGltZWxhcHNlJyxcbiAgICAndGltZXInLFxuICAgICd0aW1lcl8xMCcsXG4gICAgJ3RpbWVyXzMnLFxuICAgICd0aW1lcl9vZmYnLFxuICAgICd0b2MnLFxuICAgICd0b2RheScsXG4gICAgJ3RvbGwnLFxuICAgICd0b25hbGl0eScsXG4gICAgJ3RveXMnLFxuICAgICd0cmFja19jaGFuZ2VzJyxcbiAgICAndHJhZmZpYycsXG4gICAgJ3RyYW5zZm9ybScsXG4gICAgJ3RyYW5zbGF0ZScsXG4gICAgJ3RyZW5kaW5nX2Rvd24nLFxuICAgICd0cmVuZGluZ19mbGF0JyxcbiAgICAndHJlbmRpbmdfdXAnLFxuICAgICd0dW5lJyxcbiAgICAndHVybmVkX2luJyxcbiAgICAndHVybmVkX2luX25vdCcsXG4gICAgJ3R2JyxcbiAgICAndW5kbycsXG4gICAgJ3VuZm9sZF9sZXNzJyxcbiAgICAndW5mb2xkX21vcmUnLFxuICAgICd1c2InLFxuICAgICd2ZXJpZmllZF91c2VyJyxcbiAgICAndmVydGljYWxfYWxpZ25fYm90dG9tJyxcbiAgICAndmVydGljYWxfYWxpZ25fY2VudGVyJyxcbiAgICAndmVydGljYWxfYWxpZ25fdG9wJyxcbiAgICAndmlicmF0aW9uJyxcbiAgICAndmlkZW9fbGlicmFyeScsXG4gICAgJ3ZpZGVvY2FtJyxcbiAgICAndmlkZW9jYW1fb2ZmJyxcbiAgICAndmlld19hZ2VuZGEnLFxuICAgICd2aWV3X2FycmF5JyxcbiAgICAndmlld19jYXJvdXNlbCcsXG4gICAgJ3ZpZXdfY29sdW1uJyxcbiAgICAndmlld19jb21meScsXG4gICAgJ3ZpZXdfY29tcGFjdCcsXG4gICAgJ3ZpZXdfZGF5JyxcbiAgICAndmlld19oZWFkbGluZScsXG4gICAgJ3ZpZXdfbGlzdCcsXG4gICAgJ3ZpZXdfbW9kdWxlJyxcbiAgICAndmlld19xdWlsdCcsXG4gICAgJ3ZpZXdfc3RyZWFtJyxcbiAgICAndmlld193ZWVrJyxcbiAgICAndmlnbmV0dGUnLFxuICAgICd2aXNpYmlsaXR5JyxcbiAgICAndmlzaWJpbGl0eV9vZmYnLFxuICAgICd2b2ljZV9jaGF0JyxcbiAgICAndm9pY2VtYWlsJyxcbiAgICAndm9sdW1lX2Rvd24nLFxuICAgICd2b2x1bWVfbXV0ZScsXG4gICAgJ3ZvbHVtZV9vZmYnLFxuICAgICd2b2x1bWVfdXAnLFxuICAgICd2cG5fa2V5JyxcbiAgICAndnBuX2xvY2snLFxuICAgICd3YWxscGFwZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnd2F0Y2gnLFxuICAgICd3Yl9hdXRvJyxcbiAgICAnd2JfY2xvdWR5JyxcbiAgICAnd2JfaW5jYW5kZXNjZW50JyxcbiAgICAnd2JfaXJpZGVzY2VudCcsXG4gICAgJ3diX3N1bm55JyxcbiAgICAnd2MnLFxuICAgICd3ZWInLFxuICAgICd3aGF0c2hvdCcsXG4gICAgJ3dpZGdldHMnLFxuICAgICd3aWZpJyxcbiAgICAnd2lmaV9sb2NrJyxcbiAgICAnd2lmaV90ZXRoZXJpbmcnLFxuICAgICd3b3JrJyxcbiAgICAnd3JhcF90ZXh0JyxcbiAgICAneW91dHViZV9zZWFyY2hlZF9mb3InLFxuICAgICd6b29tX2luJyxcbiAgICAnem9vbV9vdXQnLFxuICBdO1xuXG4gIGdldCBpY29ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25zO1xuICB9XG5cbiAgZmlsdGVyKHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbnMuZmlsdGVyKChlbDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5ID8gcXVlcnkudG9Mb3dlckNhc2UoKSA6ICcnKSA+IC0xO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogRk9STVNcbiAqL1xuXG4vLyBGb3JtIERpcmVjdGl2ZXNcbmltcG9ydCB7IFRkQXV0b1RyaW1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm1zL2F1dG8tdHJpbS9hdXRvLXRyaW0uZGlyZWN0aXZlJztcblxuY29uc3QgVERfRk9STVM6IFR5cGU8YW55PltdID0gW1xuICBUZEF1dG9UcmltRGlyZWN0aXZlLFxuXTtcblxuLy8gVmFsaWRhdG9yc1xuY29uc3QgVERfVkFMSURBVE9SUzogVHlwZTxhbnk+W10gPSBbXG5dO1xuXG4vKipcbiAqIFBJUEVTXG4gKi9cbmltcG9ydCB7IFRkVGltZUFnb1BpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtYWdvL3RpbWUtYWdvLnBpcGUnO1xuaW1wb3J0IHsgVGRUaW1lRGlmZmVyZW5jZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtZGlmZmVyZW5jZS90aW1lLWRpZmZlcmVuY2UucGlwZSc7XG5pbXBvcnQgeyBUZFRpbWVVbnRpbFBpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtdW50aWwvdGltZS11bnRpbC5waXBlJztcbmltcG9ydCB7IFRkQnl0ZXNQaXBlIH0gZnJvbSAnLi9waXBlcy9ieXRlcy9ieXRlcy5waXBlJztcbmltcG9ydCB7IFRkRGVjaW1hbEJ5dGVzUGlwZSB9IGZyb20gJy4vcGlwZXMvZGVjaW1hbC1ieXRlcy9kZWNpbWFsLWJ5dGVzLnBpcGUnO1xuaW1wb3J0IHsgVGREaWdpdHNQaXBlIH0gZnJvbSAnLi9waXBlcy9kaWdpdHMvZGlnaXRzLnBpcGUnO1xuaW1wb3J0IHsgVGRUcnVuY2F0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RydW5jYXRlL3RydW5jYXRlLnBpcGUnO1xuXG5jb25zdCBURF9QSVBFUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkVGltZUFnb1BpcGUsXG4gIFRkVGltZURpZmZlcmVuY2VQaXBlLFxuICBUZFRpbWVVbnRpbFBpcGUsXG4gIFRkQnl0ZXNQaXBlLFxuICBUZERlY2ltYWxCeXRlc1BpcGUsXG4gIFRkRGlnaXRzUGlwZSxcbiAgVGRUcnVuY2F0ZVBpcGUsXG5dO1xuXG4vKipcbiAqIFNlcnZpY2VzXG4gKi9cblxuaW1wb3J0IHsgUm91dGVyUGF0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ljb24uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0ZPUk1TLFxuICAgIFREX1BJUEVTLFxuICAgIFREX1ZBTElEQVRPUlMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVERfRk9STVMsXG4gICAgVERfUElQRVMsXG4gICAgVERfVkFMSURBVE9SUyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUm91dGVyUGF0aFNlcnZpY2UsXG4gICAgSWNvblNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50Q29tbW9uTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG4gIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdGF0ZUFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgZGVncmVlcz86IG51bWJlcjtcbiAgZWFzZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZFJvdGF0ZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkZWdyZXNzU3RhcnQ6IERlZ3JlZXMgb2Ygcm90YXRpb24gdGhhdCB0aGUgZG9tIG9iamVjdCB3aWxsIGVuZCB1cCBpbiBkdXJpbmcgdGhlIFwiZmFsc2VcIiBzdGF0ZVxuICogKiBkZWdyZWVzRW5kOiBEZWdyZWVzIG9mIHJvdGF0aW9uIHRoYXQgdGhlIGRvbSBvYmplY3Qgd2lsbCBlbmQgdXAgaW4gZHVyaW5nIHRoZSBcInRydWVcIiBzdGF0ZVxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcy4gRGVmYXVsdHMgdG8gZWFzZS1pbi5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIHJvdGF0aW9uIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZFJvdGF0ZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkZWdyZWVzRW5kOiA5MCB9fVwiXG4gKi9cblxuZXhwb3J0IGNvbnN0IHRkUm90YXRlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZFJvdGF0ZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKHt7IGRlZ3Jlc3NTdGFydCB9fWRlZyknLFxuICB9KSwgeyBwYXJhbXM6IHsgZGVncmVzc1N0YXJ0OiAwIH19KSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSh7eyBkZWdyZWVzRW5kIH19ZGVnKScsXG4gIH0pLCB7IHBhcmFtczogeyBkZWdyZWVzRW5kOiAxODAgfX0pLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDI1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2UtaW4nIH19KSxcbl0pO1xuIiwiaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbGxhcHNlQW5pbWF0aW9uIGV4dGVuZHMgSUFuaW1hdGlvbk9wdGlvbnMge1xuICAgZWFzZU9uQ2xvc2U/OiBzdHJpbmc7XG4gICBlYXNlT25PcGVuPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGNvbnN0IHRkQ29sbGFwc2VBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAxNTAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2VPbkNsb3NlOiBBbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzIHdoZW4gY2xvc2luZy4gRGVmYXVsdHMgdG8gZWFzZS1pbi5cbiAqICogZWFzZU9uT3BlbjogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIG9wZW5pbmcuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgY29sbGFwc2UvZXhwYW5kIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZENvbGxhcHNlXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRDb2xsYXBzZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRDb2xsYXBzZScsIFtcbiAgc3RhdGUoJzEnLCBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9KSksXG4gIHN0YXRlKCcwJywgIHN0eWxlKHtcbiAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgb3ZlcmZsb3c6IEFVVE9fU1RZTEUsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA9PiAxJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICB9KSxcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19Jywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgfSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1pbicgfX0pLFxuICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSksXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsIHN0eWxlKHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICB9KSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxNTAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG4iLCJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwICB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhZGVJbk91dEFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgZWFzZU9uSW4/OiBzdHJpbmc7XG4gIGVhc2VPbk91dD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZEZhZGVJbk91dEFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZU9uSW46IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBmYWRpbmcgaW4uIERlZmF1bHRzIHRvIGVhc2UtaW4uXG4gKiAqIGVhc2VPbk91dDogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGZhZGluZyBvdXQuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgZmFkZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRGYWRlSW5PdXRdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEZhZGVJbk91dEFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRGYWRlSW5PdXQnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlT25JbiB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZU9uSW46ICdlYXNlLWluJyB9fSksXG4gICAgdHJhbnNpdGlvbignMSA9PiAwJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2VPbk91dCB9fScpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlT25PdXQ6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG4iLCJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRCb3VuY2VBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byA1MDAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlIGFuZCBkZWNlbGVyYXRlIHN0eWxlLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGJvdW5jZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRCb3VuY2VdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEJvdW5jZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRCb3VuY2UnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7YW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjJ9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKScsIG9mZnNldDogMC40fSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCknLCBvZmZzZXQ6IDAuNDN9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAwLjUzfSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCknLCBvZmZzZXQ6IC43fSksXG4gICAgICAgIHN0eWxlKHthbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCknLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsIG9mZnNldDogMC44fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKScsIG9mZnNldDogLjl9KSxcbiAgICAgICAgc3R5bGUoe2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJywgb2Zmc2V0OiAxLjB9KSxcbiAgICAgIF0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEZsYXNoQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBmbGFzaCBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRGbGFzaF09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkRmxhc2hBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkRmxhc2gnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIG9wYWNpdHk6IDEsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIG9wYWNpdHk6IDEsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMC4yNX0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMC43NX0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxLjB9KSxcbiAgICAgIF0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcbiIsIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZEhlYWRzaGFrZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgaGVhZHNoYWtlIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEhlYWRzaGFrZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkSGVhZHNoYWtlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEhlYWRzaGFrZScsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKScsIG9mZnNldDogMC4wNjV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpJywgb2Zmc2V0OiAwLjE4NX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKScsIG9mZnNldDogMC4zMTV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpJywgb2Zmc2V0OiAwLjQzNX0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMC41MH0pLFxuICAgICAgXSkpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogJzAnLCBlYXNlOiAnZWFzZS1vdXQnIH19KSxcbl0pO1xuIiwiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkSmVsbG9BbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byA1MDAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlIGFuZCBkZWNlbGVyYXRlIHN0eWxlLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGplbGxvIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEplbGxvXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRKZWxsb0FuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRKZWxsbycsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ25vbmUnLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMC4wMTF9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyknLCBvZmZzZXQ6IDAuMjIyfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKScsIG9mZnNldDogMC4zMzN9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKScsIG9mZnNldDogMC40NDR9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKScsIG9mZnNldDogMC41NTV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyknLCBvZmZzZXQ6IDAuNjY2fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpJywgb2Zmc2V0OiAwLjc3N30pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyknLCBvZmZzZXQ6IDAuODg4fSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG4iLCJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRQdWxzZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgcHVsc2UgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkUHVsc2VdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZFB1bHNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZFB1bHNlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAwIH0pLFxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KScsIG9mZnNldDogMC41IH0pLFxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMS4wIH0pLFxuICAgICAgICBdKSxcbiAgICAgICksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHtcbiAgLy8gZW1wdHkgbWV0aG9kXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sVmFsdWVBY2Nlc3NvciBleHRlbmRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgdmFsdWU6IGFueTtcbiAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XG4gIG9uQ2hhbmdlOiAoXzogYW55KSA9PiBhbnk7XG4gIG9uVG91Y2hlZDogKCkgPT4gYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElIYXNDaGFuZ2VEZXRlY3RvclJlZiB7XG4gIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IHdpdGggbmdNb2RlbCBzdXBwb3J0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPElIYXNDaGFuZ2VEZXRlY3RvclJlZj4+XG4gICAgICAgICAgICAgICAgKGJhc2U6IFQsIGluaXRpYWxWYWx1ZT86IGFueSk6IENvbnN0cnVjdG9yPElDb250cm9sVmFsdWVBY2Nlc3Nvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IGluaXRpYWxWYWx1ZTtcbiAgICBwcml2YXRlIF9zdWJqZWN0VmFsdWVDaGFuZ2VzOiBTdWJqZWN0PGFueT47XG4gICAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7IFxuICAgICAgdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzID0gdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHYpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcy5uZXh0KHYpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiBub29wO1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IG5vb3A7XG5cbiAgfTtcbn1cbiIsImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG4vKiogSW50ZXJmYWNlIHRvIGltcGxlbWVudCB3aGVuIGFwcGx5aW5nIHRoZSBkaXNhYmxlZCBtaXhpbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ2FuRGlzYWJsZSB7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGNvbXBvbmVudCBvciBkaXJlY3RpdmUgd2l0aCBhIGBkaXNhYmxlZGAgcHJvcGVydHkuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8e30+PihiYXNlOiBUKTogQ29uc3RydWN0b3I8SUNhbkRpc2FibGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIGxldCBuZXdWYWx1ZTogYm9vbGVhbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMub25EaXNhYmxlZENoYW5nZSh0aGlzLl9kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAvKiogTk9UIElNUExFTUVOVEVELCB0aGlzIG5lZWRzIHRvIGJlIG92ZXJyaWRlbiBieSBzdWJjbGFzc2VzIGlmIG5lZWRlZCAqL1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG4vKiogSW50ZXJmYWNlIHRvIGltcGxlbWVudCB3aGVuIGFwcGx5aW5nIHRoZSBkaXNhYmxlZCBtaXhpbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIGRpc2FibGVSaXBwbGU6IGJvb2xlYW47XG4gIG9uRGlzYWJsZVJpcHBsZUNoYW5nZSh2OiBib29sZWFuKTogdm9pZDtcbn1cblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBjb21wb25lbnQgb3IgZGlyZWN0aXZlIHdpdGggYSBgZGlzYWJsZWRgIHByb3BlcnR5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZVJpcHBsZTxUIGV4dGVuZHMgQ29uc3RydWN0b3I8e30+PihiYXNlOiBUKTogQ29uc3RydWN0b3I8SUNhbkRpc2FibGVSaXBwbGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2Rpc2FibGVSaXBwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZVJpcHBsZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUmlwcGxlO1xuICAgIH1cbiAgICBzZXQgZGlzYWJsZVJpcHBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBib29sZWFuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLl9kaXNhYmxlUmlwcGxlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlUmlwcGxlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMub25EaXNhYmxlUmlwcGxlQ2hhbmdlKHRoaXMuX2Rpc2FibGVSaXBwbGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uRGlzYWJsZVJpcHBsZUNoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAvKiogTk9UIElNUExFTUVOVEVELCB0aGlzIG5lZWRzIHRvIGJlIG92ZXJyaWRlbiBieSBzdWJjbGFzc2VzIGlmIG5lZWRlZCAqL1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFZhbGlkYXRvcnMge1xuICBzdGF0aWMgbWluKG1pblZhbHVlOiBhbnkpOiBWYWxpZGF0b3JGbiB7XG4gICAgbGV0IGZ1bmM6IFZhbGlkYXRvckZuID0gKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgIGlmICghIVZhbGlkYXRvcnMucmVxdWlyZWQoYykgfHwgKCFtaW5WYWx1ZSAmJiBtaW5WYWx1ZSAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGxldCB2OiBudW1iZXIgPSBjLnZhbHVlO1xuICAgICAgcmV0dXJuIHYgPCBtaW5WYWx1ZSA/XG4gICAgICAgIHsgbWluOiB7bWluVmFsdWU6IG1pblZhbHVlLCBhY3R1YWxWYWx1ZTogdn0gfSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgc3RhdGljIG1heChtYXhWYWx1ZTogYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIGxldCBmdW5jOiBWYWxpZGF0b3JGbiA9IChjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoISFWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIHx8ICghbWF4VmFsdWUgJiYgbWF4VmFsdWUgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBsZXQgdjogbnVtYmVyID0gYy52YWx1ZTtcbiAgICAgIHJldHVybiB2ID4gbWF4VmFsdWUgP1xuICAgICAgICB7IG1heDoge21heFZhbHVlOiBtYXhWYWx1ZSwgYWN0dWFsVmFsdWU6IHZ9IH0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuXG4gIHN0YXRpYyBudW1iZXJSZXF1aXJlZChjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIChOdW1iZXIuaXNOYU4oYy52YWx1ZSkpID9cbiAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSB9IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE1BT2EsbUJBQW1COzs7O0lBRTlCLFlBQXdDLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO0tBQUk7Ozs7OztJQU0zRCxNQUFNLENBQUMsS0FBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksUUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNuRDtLQUNGOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFKUSxPQUFPLHVCQU9ELFFBQVEsWUFBSSxJQUFJOzs7cUJBSzVCLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7QUNkbEMsTUFLYSxhQUFhOzs7Ozs7SUFDeEIsU0FBUyxDQUFDLElBQVMsRUFBRSxTQUFlOztRQUVsQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2xCLEdBQUcsR0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7O1FBR25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkIsT0FBTyxjQUFjLENBQUM7U0FDdkI7Ozs7WUFJRyxTQUFTLEdBQVcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFOztZQUNyRSxJQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FB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