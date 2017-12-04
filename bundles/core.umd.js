(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/animations'), require('@angular/cdk/coercion'), require('@angular/router'), require('rxjs/operators/filter'), require('rxjs/operators/pairwise'), require('@angular/material'), require('@angular/platform-browser'), require('@angular/cdk/portal'), require('@angular/cdk/keycodes'), require('rxjs/observable/timer'), require('rxjs/observable/merge'), require('rxjs/operator/toPromise'), require('rxjs/observable/fromEvent'), require('rxjs/operators/debounceTime'), require('rxjs/Subject'), require('rxjs/Observable'), require('@angular/cdk/bidi'), require('@angular/cdk/scrolling'), require('@angular/cdk/overlay'), require('rxjs/BehaviorSubject'), require('rxjs/operators/skip')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/animations', '@angular/cdk/coercion', '@angular/router', 'rxjs/operators/filter', 'rxjs/operators/pairwise', '@angular/material', '@angular/platform-browser', '@angular/cdk/portal', '@angular/cdk/keycodes', 'rxjs/observable/timer', 'rxjs/observable/merge', 'rxjs/operator/toPromise', 'rxjs/observable/fromEvent', 'rxjs/operators/debounceTime', 'rxjs/Subject', 'rxjs/Observable', '@angular/cdk/bidi', '@angular/cdk/scrolling', '@angular/cdk/overlay', 'rxjs/BehaviorSubject', 'rxjs/operators/skip'], factory) :
	(factory((global.td = global.td || {}, global.td.core = global.td.core || {}),global.ng.core,global.ng.common,global.ng.forms,global.ng.animations,global.ng.cdk.coercion,global.ng.router,global.Rx.Observable,global.Rx.Observable,global.ng.material,global.ng.platformBrowser,global.ng.cdk.portal,global.ng.cdk.keycodes,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable,global.Rx.Observable,global.Rx,global.Rx,global.ng.cdk.bidi,global.ng.cdk.scrolling,global.ng.cdk.overlay,global.Rx.BehaviorSubject,global.Rx.Observable));
}(this, (function (exports,_angular_core,_angular_common,_angular_forms,_angular_animations,_angular_cdk_coercion,_angular_router,rxjs_operators_filter,rxjs_operators_pairwise,_angular_material,_angular_platformBrowser,_angular_cdk_portal,_angular_cdk_keycodes,rxjs_observable_timer,rxjs_observable_merge,rxjs_operator_toPromise,rxjs_observable_fromEvent,rxjs_operators_debounceTime,rxjs_Subject,rxjs_Observable,_angular_cdk_bidi,_angular_cdk_scrolling,_angular_cdk_overlay,rxjs_BehaviorSubject,rxjs_operators_skip) { 'use strict';

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

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}





function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var TdToggleDirective = (function () {
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
        set: function (state$$1) {
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
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     */
    TdToggleDirective.prototype.hide = function () {
        var _this = this;
        this._animationHidePlayer = this._animationBuilder.build(_angular_animations.animation([
            _angular_animations.style({
                height: _angular_animations.AUTO_STYLE,
                display: _angular_animations.AUTO_STYLE,
            }),
            _angular_animations.animate(this.duration + 'ms ease-in', _angular_animations.style({ height: '0' })),
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
    TdToggleDirective.prototype.show = function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationShowPlayer = this._animationBuilder.build(_angular_animations.animation([
            _angular_animations.style({
                height: '0',
                display: 'none',
            }),
            _angular_animations.animate(this.duration + 'ms ease-out', _angular_animations.style({ height: _angular_animations.AUTO_STYLE })),
        ])).create(this._element.nativeElement);
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._animationShowPlayer.onDone(function () {
            _this._onShowDone();
        });
        this._animationShowPlayer.play();
    };
    TdToggleDirective.prototype._onHideDone = function () {
        if (this._animationHidePlayer) {
            this._animationHidePlayer.destroy();
            this._animationHidePlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
        }
    };
    TdToggleDirective.prototype._onShowDone = function () {
        if (this._animationShowPlayer) {
            this._animationShowPlayer.destroy();
            this._animationShowPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._changeDetectorRef.markForCheck();
        }
    };
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Number)
    ], TdToggleDirective.prototype, "duration", void 0);
    __decorate([
        _angular_core.Input('tdToggle'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdToggleDirective.prototype, "state", null);
    __decorate([
        _angular_core.HostBinding('attr.aria-expanded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdToggleDirective.prototype, "ariaExpandedBinding", null);
    __decorate([
        _angular_core.HostBinding('attr.aria-hidden'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdToggleDirective.prototype, "ariaHiddenBinding", null);
    TdToggleDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdToggle]',
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2,
            _angular_core.ElementRef,
            _angular_core.ChangeDetectorRef,
            _angular_animations.AnimationBuilder])
    ], TdToggleDirective);
    return TdToggleDirective;
}());

var TdFadeDirective = (function () {
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
        this.onFadeIn = new _angular_core.EventEmitter();
        /**
         * fadeOut?: function
         * Method to be executed when fadeOut animation ends.
         */
        this.onFadeOut = new _angular_core.EventEmitter();
        this._defaultDisplay = this._element.nativeElement.style.display;
    }
    Object.defineProperty(TdFadeDirective.prototype, "state", {
        /**
         * tdFade: boolean
         * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
         */
        set: function (state$$1) {
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
    /**
     * Hides element: starts animation and adds "display:'none'" style at the end.
     */
    TdFadeDirective.prototype.hide = function () {
        var _this = this;
        this._animationFadeInPlayer = this._animationBuilder.build(_angular_animations.animation([
            _angular_animations.style({
                opacity: _angular_animations.AUTO_STYLE,
                display: _angular_animations.AUTO_STYLE,
            }),
            _angular_animations.animate(this.duration + 'ms ease-out', _angular_animations.style({ opacity: '0' })),
        ])).create(this._element.nativeElement);
        this._animationFadeInPlayer.onDone(function () {
            _this._onFadeInDone();
        });
        this._animationFadeInPlayer.play();
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown.
     */
    TdFadeDirective.prototype.show = function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationFadeOutPlayer = this._animationBuilder.build(_angular_animations.animation([
            _angular_animations.style({
                opacity: '0',
                display: 'none',
            }),
            _angular_animations.animate(this.duration + 'ms ease-in', _angular_animations.style({ opacity: _angular_animations.AUTO_STYLE })),
        ])).create(this._element.nativeElement);
        this._animationFadeOutPlayer.onDone(function () {
            _this._onFadeOutDone();
        });
        this._animationFadeOutPlayer.play();
    };
    TdFadeDirective.prototype._onFadeInDone = function () {
        if (this._animationFadeInPlayer) {
            this._animationFadeInPlayer.destroy();
            this._animationFadeInPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
            this.onFadeIn.emit();
        }
    };
    TdFadeDirective.prototype._onFadeOutDone = function () {
        if (this._animationFadeOutPlayer) {
            this._animationFadeOutPlayer.destroy();
            this._animationFadeOutPlayer = undefined;
            this._changeDetectorRef.markForCheck();
            this.onFadeOut.emit();
        }
    };
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Number)
    ], TdFadeDirective.prototype, "duration", void 0);
    __decorate([
        _angular_core.Input('tdFade'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdFadeDirective.prototype, "state", null);
    __decorate([
        _angular_core.Output('fadeIn'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdFadeDirective.prototype, "onFadeIn", void 0);
    __decorate([
        _angular_core.Output('fadeOut'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdFadeDirective.prototype, "onFadeOut", void 0);
    __decorate([
        _angular_core.HostBinding('attr.aria-expanded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdFadeDirective.prototype, "ariaExpandedBinding", null);
    __decorate([
        _angular_core.HostBinding('attr.aria-hidden'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdFadeDirective.prototype, "ariaHiddenBinding", null);
    TdFadeDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdFade]',
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2,
            _angular_core.ElementRef,
            _angular_core.ChangeDetectorRef,
            _angular_animations.AnimationBuilder])
    ], TdFadeDirective);
    return TdFadeDirective;
}());

/**
 * Function TdRotateAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdRotate.
 * * duration: Duration the animation will run in milliseconds. Defaults to 250 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * degrees: Degrees of rotation that the dom object will animation. A negative value will cause the animation to initially rotate counter-clockwise.
 * * ease: Animation accelerates and decelerates when rotation. Defaults to ease-in.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based rotation animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
function TdRotateAnimation(rotateOptions) {
    if (rotateOptions === void 0) { rotateOptions = {}; }
    return _angular_animations.trigger(rotateOptions.anchor || 'tdRotate', [
        _angular_animations.state('0', _angular_animations.style({
            transform: 'rotate(0deg)',
        })),
        _angular_animations.state('1', _angular_animations.style({
            transform: 'rotate(' + (rotateOptions.degrees || 180) + 'deg)',
        })),
        _angular_animations.transition('0 <=> 1', [
            _angular_animations.animate((rotateOptions.duration || 250) + 'ms ' +
                (rotateOptions.delay || 0) + 'ms ' +
                (rotateOptions.ease || 'ease-in')),
        ]),
    ]);
}

/**
 * Function TdCollapseAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdCollapse.
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
 * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a collapse/expand animation.
 *
 * usage: [@tdCollapse]="true|false"
 */
function TdCollapseAnimation(collapseOptions) {
    if (collapseOptions === void 0) { collapseOptions = {}; }
    return _angular_animations.trigger(collapseOptions.anchor || 'tdCollapse', [
        _angular_animations.state('1', _angular_animations.style({
            height: '0',
            display: 'none',
            overflow: 'hidden',
        })),
        _angular_animations.state('0', _angular_animations.style({
            height: _angular_animations.AUTO_STYLE,
            display: _angular_animations.AUTO_STYLE,
            overflow: 'hidden',
        })),
        _angular_animations.transition('0 => 1', [
            _angular_animations.animate((collapseOptions.duration || 150) + 'ms ' +
                (collapseOptions.delay || 0) + 'ms ' +
                (collapseOptions.easeOnClose || 'ease-in')),
        ]),
        _angular_animations.transition('1 => 0', [
            _angular_animations.animate((collapseOptions.duration || 150) + 'ms ' +
                (collapseOptions.delay || 0) + 'ms ' +
                (collapseOptions.easeOnOpen || 'ease-out')),
        ]),
    ]);
}

/**
 * Function TdFadeInOutAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdFadeInOut
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
 * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a fading animation.
 *
 * usage: [@tdFadeInOut]="true|false"
 */
function TdFadeInOutAnimation(fadeInOut) {
    if (fadeInOut === void 0) { fadeInOut = {}; }
    return _angular_animations.trigger((fadeInOut.anchor || 'tdFadeInOut'), [
        _angular_animations.state('0', _angular_animations.style({
            opacity: '0',
            display: 'none',
        })),
        _angular_animations.state('1', _angular_animations.style({
            opacity: _angular_animations.AUTO_STYLE,
            display: _angular_animations.AUTO_STYLE,
        })),
        _angular_animations.transition('0 => 1', _angular_animations.animate((fadeInOut.duration || 150) + 'ms ' +
            (fadeInOut.delay || 0) + 'ms ' +
            (fadeInOut.easeOnIn || 'ease-in'))),
        _angular_animations.transition('1 => 0', _angular_animations.animate((fadeInOut.duration || 150) + 'ms ' +
            (fadeInOut.delay || 0) + 'ms ' +
            (fadeInOut.easeOnOut || 'ease-out'))),
    ]);
}

/**
 * Function TdBounceAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based bounce animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
function TdBounceAnimation(bounceOptions) {
    if (bounceOptions === void 0) { bounceOptions = {}; }
    return _angular_animations.trigger(bounceOptions.anchor || 'tdBounce', [
        _angular_animations.state('0', _angular_animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        _angular_animations.state('1', _angular_animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        _angular_animations.transition('0 <=> 1', _angular_animations.animate((bounceOptions.duration || 500) + 'ms ' + (bounceOptions.delay || 0) + 'ms', _angular_animations.keyframes([
            _angular_animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0 }),
            _angular_animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
            _angular_animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
            _angular_animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43 }),
            _angular_animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
            _angular_animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7 }),
            _angular_animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8 }),
            _angular_animations.style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
            _angular_animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0 }),
        ]))),
    ]);
}

/**
 * Function TdFlashAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based flash animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
function TdFlashAnimation(flashOptions) {
    if (flashOptions === void 0) { flashOptions = {}; }
    return _angular_animations.trigger(flashOptions.anchor || 'tdFlash', [
        _angular_animations.state('0', _angular_animations.style({
            opacity: 1,
        })),
        _angular_animations.state('1', _angular_animations.style({
            opacity: 1,
        })),
        _angular_animations.transition('0 <=> 1', _angular_animations.animate((flashOptions.duration || 500) + 'ms ' + (flashOptions.delay || 0) + 'ms', _angular_animations.keyframes([
            _angular_animations.style({ opacity: 1, offset: 0 }),
            _angular_animations.style({ opacity: 0, offset: 0.25 }),
            _angular_animations.style({ opacity: 1, offset: 0.5 }),
            _angular_animations.style({ opacity: 0, offset: 0.75 }),
            _angular_animations.style({ opacity: 1, offset: 1.0 }),
        ]))),
    ]);
}

/**
 * Function TdHeadshakeAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based headshake animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
function TdHeadshakeAnimation(headshakeOptions) {
    if (headshakeOptions === void 0) { headshakeOptions = {}; }
    return _angular_animations.trigger(headshakeOptions.anchor || 'tdHeadshake', [
        _angular_animations.state('0', _angular_animations.style({
            transform: 'translateX(0)',
        })),
        _angular_animations.state('1', _angular_animations.style({
            transform: 'translateX(0)',
        })),
        _angular_animations.transition('0 <=> 1', _angular_animations.animate((headshakeOptions.duration || 500) + 'ms ' + (headshakeOptions.delay || 0) + 'ms', _angular_animations.keyframes([
            _angular_animations.style({ transform: 'translateX(0)', offset: 0 }),
            _angular_animations.style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
            _angular_animations.style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
            _angular_animations.style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
            _angular_animations.style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
            _angular_animations.style({ transform: 'translateX(0)', offset: 0.50 }),
        ]))),
    ]);
}

/**
 * Function TdJelloAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based jello animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
function TdJelloAnimation(jelloOptions) {
    if (jelloOptions === void 0) { jelloOptions = {}; }
    return _angular_animations.trigger(jelloOptions.anchor || 'tdJello', [
        _angular_animations.state('0', _angular_animations.style({
            transform: 'none',
        })),
        _angular_animations.state('1', _angular_animations.style({
            transform: 'none',
        })),
        _angular_animations.transition('0 <=> 1', _angular_animations.animate((jelloOptions.duration || 500) + 'ms ' + (jelloOptions.delay || 0) + 'ms', _angular_animations.keyframes([
            _angular_animations.style({ transform: 'none', offset: 0 }),
            _angular_animations.style({ transform: 'none', offset: 0.011 }),
            _angular_animations.style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
            _angular_animations.style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
            _angular_animations.style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
            _angular_animations.style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
            _angular_animations.style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
            _angular_animations.style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
            _angular_animations.style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
        ]))),
    ]);
}

/**
 * Function TdPulseAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based pulse animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
function TdPulseAnimation(pulseOptions) {
    if (pulseOptions === void 0) { pulseOptions = {}; }
    return _angular_animations.trigger(pulseOptions.anchor || 'tdPulse', [
        _angular_animations.state('0', _angular_animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        _angular_animations.state('1', _angular_animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        _angular_animations.transition('0 <=> 1', _angular_animations.animate((pulseOptions.duration || 500) + 'ms ' + (pulseOptions.delay || 0) + 'ms', _angular_animations.keyframes([
            _angular_animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            _angular_animations.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
            _angular_animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
        ]))),
    ]);
}

/** Mixin to augment a component or directive with a `disabled` property. */
function mixinDisabled(base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._disabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                var newValue = _angular_cdk_coercion.coerceBooleanProperty(value);
                if (this._disabled !== newValue) {
                    this._disabled = newValue;
                    this.onDisabledChange(this._disabled);
                }
            },
            enumerable: true,
            configurable: true
        });
        class_1.prototype.onDisabledChange = function (v) {
            /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
        };
        return class_1;
    }(base));
}

/** Mixin to augment a component or directive with a `disabled` property. */
function mixinDisableRipple(base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._disableRipple = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disableRipple", {
            get: function () {
                return this._disableRipple;
            },
            set: function (value) {
                var newValue = _angular_cdk_coercion.coerceBooleanProperty(value);
                if (this._disableRipple !== newValue) {
                    this._disableRipple = newValue;
                    this.onDisableRippleChange(this._disableRipple);
                }
            },
            enumerable: true,
            configurable: true
        });
        class_1.prototype.onDisableRippleChange = function (v) {
            /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
        };
        return class_1;
    }(base));
}

var TdAutoTrimDirective = (function () {
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
    __decorate([
        _angular_core.HostListener('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TdAutoTrimDirective.prototype, "onBlur", null);
    TdAutoTrimDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdAutoTrim]',
        }),
        __param(0, _angular_core.Optional()), __param(0, _angular_core.Host()),
        __metadata("design:paramtypes", [_angular_forms.NgModel])
    ], TdAutoTrimDirective);
    return TdAutoTrimDirective;
}());

var CovalentValidators = (function () {
    function CovalentValidators() {
    }
    CovalentValidators.min = function (minValue) {
        var func = function (c) {
            if (!!_angular_forms.Validators.required(c) || (!minValue && minValue !== 0)) {
                return undefined;
            }
            var v = c.value;
            return v < minValue ?
                { min: { minValue: minValue, actualValue: v } } :
                undefined;
        };
        return func;
    };
    CovalentValidators.max = function (maxValue) {
        var func = function (c) {
            if (!!_angular_forms.Validators.required(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            var v = c.value;
            return v > maxValue ?
                { max: { maxValue: maxValue, actualValue: v } } :
                undefined;
        };
        return func;
    };
    CovalentValidators.numberRequired = function (c) {
        return (Number.isNaN(c.value)) ?
            { required: true } :
            undefined;
    };
    return CovalentValidators;
}());

var TdTimeAgoPipe = (function () {
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
    TdTimeAgoPipe = __decorate([
        _angular_core.Pipe({
            name: 'timeAgo',
        })
    ], TdTimeAgoPipe);
    return TdTimeAgoPipe;
}());

var TdTimeDifferencePipe = (function () {
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
    TdTimeDifferencePipe = __decorate([
        _angular_core.Pipe({
            name: 'timeDifference',
        })
    ], TdTimeDifferencePipe);
    return TdTimeDifferencePipe;
}());

var TdBytesPipe = (function () {
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
        var k = 1024;
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        // if less than 1
        if (i < 0) {
            return 'Invalid Number';
        }
        return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
    };
    TdBytesPipe = __decorate([
        _angular_core.Pipe({
            name: 'bytes',
        })
    ], TdBytesPipe);
    return TdBytesPipe;
}());

var TdDigitsPipe = (function () {
    function TdDigitsPipe(_locale) {
        if (_locale === void 0) { _locale = 'en'; }
        this._locale = _locale;
        this._decimalPipe = new _angular_common.DecimalPipe(this._locale);
    }
    /* `digits` needs to be type `digits: any` or TypeScript complains */
    TdDigitsPipe.prototype.transform = function (digits, precision) {
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
        var k = 1000;
        var sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
        var i = Math.floor(Math.log(digits) / Math.log(k));
        var size = sizes[i];
        return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
    };
    TdDigitsPipe = __decorate([
        _angular_core.Pipe({
            name: 'digits',
        }),
        __param(0, _angular_core.Inject(_angular_core.LOCALE_ID)),
        __metadata("design:paramtypes", [String])
    ], TdDigitsPipe);
    return TdDigitsPipe;
}());

var TdTruncatePipe = (function () {
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
    TdTruncatePipe = __decorate([
        _angular_core.Pipe({
            name: 'truncate',
        })
    ], TdTruncatePipe);
    return TdTruncatePipe;
}());

var RouterPathService = (function () {
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events.pipe(rxjs_operators_filter.filter(function (e) { return e instanceof _angular_router.RoutesRecognized; }), rxjs_operators_pairwise.pairwise()).subscribe(function (e) {
            RouterPathService_1._previousRoute = e[0].urlAfterRedirects;
        });
    }
    RouterPathService_1 = RouterPathService;
    /*
    * Utility function to get the route the user previously went to
    * good for use in a "back button"
    */
    RouterPathService.prototype.getPreviousRoute = function () {
        return RouterPathService_1._previousRoute;
    };
    RouterPathService._previousRoute = '/';
    RouterPathService = RouterPathService_1 = __decorate([
        _angular_core.Injectable(),
        __metadata("design:paramtypes", [_angular_router.Router])
    ], RouterPathService);
    return RouterPathService;
    var RouterPathService_1;
}());

/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */
var IconService = (function () {
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
        get: function () {
            return this._icons;
        },
        enumerable: true,
        configurable: true
    });
    IconService.prototype.filter = function (query) {
        return this.icons.filter(function (el) {
            return el.toLowerCase().indexOf(query ? query.toLowerCase() : '') > -1;
        });
    };
    IconService = __decorate([
        _angular_core.Injectable()
    ], IconService);
    return IconService;
}());

/**
 * ANIMATIONS
 */
// Directives
var TD_ANIMATIONS = [
    TdToggleDirective,
    TdFadeDirective,
];
/**
 * FORMS
 */
// Form Directives
var TD_FORMS = [
    TdAutoTrimDirective,
];
// Validators
var TD_VALIDATORS = [];
/**
 * PIPES
 */
var TD_PIPES = [
    TdTimeAgoPipe,
    TdTimeDifferencePipe,
    TdBytesPipe,
    TdDigitsPipe,
    TdTruncatePipe,
];
/**
 * Services
 */
var CovalentCommonModule = (function () {
    function CovalentCommonModule() {
    }
    CovalentCommonModule = __decorate([
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
            providers: [
                RouterPathService,
                IconService,
            ],
        })
    ], CovalentCommonModule);
    return CovalentCommonModule;
}());

var noop = function () {
    // empty method
};
var TdChipDirective = (function (_super) {
    __extends(TdChipDirective, _super);
    function TdChipDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdChipDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-chip]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdChipDirective);
    return TdChipDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdAutocompleteOptionDirective = (function (_super) {
    __extends(TdAutocompleteOptionDirective, _super);
    function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdAutocompleteOptionDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-autocomplete-option]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdAutocompleteOptionDirective);
    return TdAutocompleteOptionDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdChipsBase = (function () {
    function TdChipsBase() {
    }
    return TdChipsBase;
}());
/* tslint:disable-next-line */
var _TdChipsMixinBase = mixinDisabled(TdChipsBase);
var TdChipsComponent = (function (_super) {
    __extends(TdChipsComponent, _super);
    function TdChipsComponent(_elementRef, _renderer, _changeDetectorRef, _document) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._document = _document;
        _this._isMousedown = false;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        _this._value = [];
        _this._length = 0;
        _this._stacked = false;
        _this._requireMatch = false;
        _this._color = 'primary';
        _this._chipAddition = true;
        _this._chipRemoval = true;
        _this._focused = false;
        _this._tabIndex = 0;
        _this._internalClick = false;
        /**
         * FormControl for the matInput element.
         */
        _this.inputControl = new _angular_forms.FormControl();
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 200.
         */
        _this.debounce = 200;
        /**
         * add?: function
         * Method to be executed when a chip is added.
         * Sends chip value as event.
         */
        _this.onAdd = new _angular_core.EventEmitter();
        /**
         * remove?: function
         * Method to be executed when a chip is removed.
         * Sends chip value as event.
         */
        _this.onRemove = new _angular_core.EventEmitter();
        /**
         * inputChange?: function
         * Method to be executed when the value in the autocomplete input changes.
         * Sends string value as event.
         */
        _this.onInputChange = new _angular_core.EventEmitter();
        /**
         * chipFocus?: function
         * Method to be executed when a chip is focused.
         * Sends chip value as event.
         */
        _this.onChipFocus = new _angular_core.EventEmitter();
        /**
         * blur?: function
         * Method to be executed when a chip is blurred.
         * Sends chip value as event.
         */
        _this.onChipBlur = new _angular_core.EventEmitter();
        _this.onChange = function (_) { return noop; };
        _this.onTouched = function () { return noop; };
        _this._renderer.addClass(_this._elementRef.nativeElement, 'mat-' + _this._color);
        return _this;
    }
    TdChipsComponent_1 = TdChipsComponent;
    Object.defineProperty(TdChipsComponent.prototype, "focused", {
        /**
         * Flag that is true when autocomplete is focused.
         */
        get: function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        /**
         * items?: any[]
         * Renders the `mat-autocomplete` with the provided list to display as options.
         */
        set: function (items) {
            this._items = items;
            this._setFirstOptionActive();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "stacked", {
        get: function () {
            return this._stacked;
        },
        /**
         * stacked?: boolean
         * Set stacked or horizontal chips depending on value.
         * Defaults to false.
         */
        set: function (stacked) {
            this._stacked = _angular_cdk_coercion.coerceBooleanProperty(stacked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
        get: function () {
            return this._requireMatch;
        },
        /**
         * requireMatch?: boolean
         * Blocks custom inputs and only allows selections from the autocomplete list.
         */
        set: function (requireMatch) {
            this._requireMatch = _angular_cdk_coercion.coerceBooleanProperty(requireMatch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "readOnly", {
        /**
         * @deprecated 1.0.0@beta.6
         * readOnly?: boolean
         * Disables the chips input and chip removal icon.
         */
        set: function (readOnly) {
            this.disabled = readOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
        get: function () {
            return this._chipAddition;
        },
        /**
         * chipAddition?: boolean
         * Disables the ability to add chips. When setting disabled as true, this will be overriden.
         * Defaults to true.
         */
        set: function (chipAddition) {
            this._chipAddition = chipAddition;
            this._toggleInput();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "canAddChip", {
        /**
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * States if a chip can be added and if the input is available
         */
        get: function () {
            return this.chipAddition && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipRemoval", {
        get: function () {
            return this._chipRemoval;
        },
        /**
         * chipRemoval?: boolean
         * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
         * When setting disabled as true, this will be overriden to false.
         */
        set: function (chipRemoval) {
            this._chipRemoval = chipRemoval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "canRemoveChip", {
        /**
         * Checks if not in disabled state and if chipRemoval is set to 'true'
         * States if a chip can be removed
         */
        get: function () {
            return this.chipRemoval && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        /**
         * color?: 'primary' | 'accent' | 'warn'
         * Sets the color for the input and focus/selected state of the chips.
         * Defaults to 'primary'
         */
        set: function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
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
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "tabIndex", {
        /**
         * Hostbinding to set the a11y of the TdChipsComponent depending on its state
         */
        get: function () {
            return this.disabled ? -1 : this._tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to host focus event to act on it
     */
    TdChipsComponent.prototype.focusListener = function (event) {
        // should only focus if its not via mousedown to prevent clashing with autocomplete
        if (!this._isMousedown) {
            this.focus();
        }
        event.preventDefault();
    };
    /**
     * Listens to host mousedown event to act on it
     */
    TdChipsComponent.prototype.mousedownListener = function (event) {
        var _this = this;
        // sets a flag to know if there was a mousedown and then it returns it back to false
        this._isMousedown = true;
        rxjs_operator_toPromise.toPromise.call(rxjs_observable_timer.timer()).then(function () {
            _this._isMousedown = false;
        });
    };
    /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     */
    TdChipsComponent.prototype.clickListener = function (event) {
        var clickTarget = event.target;
        if (clickTarget === this._elementRef.nativeElement ||
            clickTarget.className.indexOf('td-chips-wrapper') > -1) {
            this.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * Listens to host keydown event to act on it depending on the keypress
     */
    TdChipsComponent.prototype.keydownListener = function (event) {
        var _this = this;
        switch (event.keyCode) {
            case _angular_cdk_keycodes.TAB:
                // if tabing out, then unfocus the component
                rxjs_operator_toPromise.toPromise.call(rxjs_observable_timer.timer()).then(function () {
                    _this.removeFocusedState();
                });
                break;
            case _angular_cdk_keycodes.ESCAPE:
                if (this._inputChild.focused) {
                    this._nativeInput.nativeElement.blur();
                    this.removeFocusedState();
                    this._closeAutocomplete();
                }
                else {
                    this.focus();
                }
                break;
            default:
        }
    };
    TdChipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges.pipe(rxjs_operators_debounceTime.debounceTime(this.debounce)).subscribe(function (value) {
            _this.onInputChange.emit(value ? value : '');
        });
        this._changeDetectorRef.markForCheck();
    };
    TdChipsComponent.prototype.ngAfterViewInit = function () {
        this._watchOutsideClick();
        this._changeDetectorRef.markForCheck();
    };
    TdChipsComponent.prototype.ngDoCheck = function () {
        // Throw onChange event only if array changes size.
        if (this._value && this._value.length !== this._length) {
            this._length = this._value.length;
            this.onChange(this._value);
        }
    };
    TdChipsComponent.prototype.ngOnDestroy = function () {
        if (this._outsideClickSubs) {
            this._outsideClickSubs.unsubscribe();
            this._outsideClickSubs = undefined;
        }
    };
    TdChipsComponent.prototype._setInternalClick = function () {
        this._internalClick = true;
    };
    /** Method executed when the disabled value changes */
    TdChipsComponent.prototype.onDisabledChange = function (v) {
        this._toggleInput();
    };
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype._handleAddChip = function () {
        var value;
        if (this.requireMatch) {
            var selectedOptions = this._options.toArray().filter(function (option) {
                return option.active;
            });
            if (selectedOptions.length > 0) {
                value = selectedOptions[0].value;
                selectedOptions[0].setInactiveStyles();
            }
            if (!value) {
                return false;
            }
        }
        else {
            // if there is a selection, then use that
            // else use the input value as chip
            if (this._autocompleteTrigger.activeOption) {
                value = this._autocompleteTrigger.activeOption.value;
                this._autocompleteTrigger.activeOption.setInactiveStyles();
            }
            else {
                value = this._inputChild.value;
                if (value.trim() === '') {
                    return false;
                }
            }
        }
        return this.addChip(value);
    };
    /**
     * Method thats exectuted when trying to add a value as chip
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.addChip = function (value) {
        var _this = this;
        /**
         * add a debounce ms delay when reopening the autocomplete to give it time
         * to rerender the next list and at the correct spot
         */
        this._closeAutocomplete();
        rxjs_operator_toPromise.toPromise.call(rxjs_observable_timer.timer(this.debounce)).then(function () {
            _this.setFocusedState();
            _this._setFirstOptionActive();
            _this._openAutocomplete();
        });
        this.inputControl.setValue('');
        // check if value is already part of the model
        if (this._value.indexOf(value) > -1) {
            return false;
        }
        this._value.push(value);
        this.onAdd.emit(value);
        this.onChange(this._value);
        this._changeDetectorRef.markForCheck();
        return true;
    };
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.removeChip = function (index) {
        var removedValues = this._value.splice(index, 1);
        if (removedValues.length === 0) {
            return false;
        }
        /**
         * Checks if deleting last single chip, to focus input afterwards
         * Else check if its not the last chip of the list to focus the next one.
         */
        if (index === (this._totalChips - 1) && index === 0) {
            this._inputChild.focus();
        }
        else if (index < (this._totalChips - 1)) {
            this._focusChip(index + 1);
        }
        else if (index > 0) {
            this._focusChip(index - 1);
        }
        this.onRemove.emit(removedValues[0]);
        this.onChange(this._value);
        this.inputControl.setValue('');
        this._changeDetectorRef.markForCheck();
        return true;
    };
    /**
     * Sets blur of chip and sends out event
     */
    TdChipsComponent.prototype._handleChipBlur = function (event, value) {
        this.onChipBlur.emit(value);
    };
    /**
     * Sets focus of chip and sends out event
     */
    TdChipsComponent.prototype._handleChipFocus = function (event, value) {
        this.setFocusedState();
        this.onChipFocus.emit(value);
    };
    TdChipsComponent.prototype._handleFocus = function () {
        this.setFocusedState();
        this._setFirstOptionActive();
        return true;
    };
    /**
     * Sets focus state of the component
     */
    TdChipsComponent.prototype.setFocusedState = function () {
        if (!this.disabled) {
            this._focused = true;
            this._tabIndex = -1;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Removes focus state of the component
     */
    TdChipsComponent.prototype.removeFocusedState = function () {
        this._focused = false;
        this._tabIndex = 0;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     */
    TdChipsComponent.prototype.focus = function () {
        if (this.canAddChip) {
            this._inputChild.focus();
        }
        else if (!this.disabled) {
            this._focusFirstChip();
        }
    };
    /**
     * Passes relevant input key presses.
     */
    TdChipsComponent.prototype._inputKeydown = function (event) {
        switch (event.keyCode) {
            case _angular_cdk_keycodes.UP_ARROW:
                /**
                 * Since the first item is highlighted on [requireMatch], we need to inactivate it
                 * when pressing the up key
                 */
                if (this.requireMatch) {
                    var length_1 = this._options.length;
                    if (length_1 > 0 && this._options.toArray()[0].active) {
                        this._options.toArray()[0].setInactiveStyles();
                        // prevent default window scrolling
                        event.preventDefault();
                    }
                }
                break;
            case _angular_cdk_keycodes.LEFT_ARROW:
            case _angular_cdk_keycodes.DELETE:
            case _angular_cdk_keycodes.BACKSPACE:
                this._closeAutocomplete();
                /** Check to see if input is empty when pressing left arrow to move to the last chip */
                if (!this._inputChild.value) {
                    this._focusLastChip();
                    // prevent default window scrolling
                    event.preventDefault();
                }
                break;
            case _angular_cdk_keycodes.RIGHT_ARROW:
                this._closeAutocomplete();
                /** Check to see if input is empty when pressing right arrow to move to the first chip */
                if (!this._inputChild.value) {
                    this._focusFirstChip();
                    // prevent default window scrolling
                    event.preventDefault();
                }
                break;
            default:
        }
    };
    /**
     * Passes relevant chip key presses.
     */
    TdChipsComponent.prototype._chipKeydown = function (event, index) {
        switch (event.keyCode) {
            case _angular_cdk_keycodes.DELETE:
            case _angular_cdk_keycodes.BACKSPACE:
                /** Check to see if we can delete a chip */
                if (this.canRemoveChip) {
                    this.removeChip(index);
                }
                break;
            case _angular_cdk_keycodes.UP_ARROW:
            case _angular_cdk_keycodes.LEFT_ARROW:
                /**
                 * Check to see if left/down arrow was pressed while focusing the first chip to focus input next
                 * Also check if input should be focused
                 */
                if (index === 0) {
                    // only try to target input if pressing left
                    if (this.canAddChip && event.keyCode === _angular_cdk_keycodes.LEFT_ARROW) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusLastChip();
                    }
                }
                else if (index > 0) {
                    this._focusChip(index - 1);
                }
                // prevent default window scrolling
                event.preventDefault();
                break;
            case _angular_cdk_keycodes.DOWN_ARROW:
            case _angular_cdk_keycodes.RIGHT_ARROW:
                /**
                 * Check to see if right/up arrow was pressed while focusing the last chip to focus input next
                 * Also check if input should be focused
                 */
                if (index === (this._totalChips - 1)) {
                    // only try to target input if pressing right
                    if (this.canAddChip && event.keyCode === _angular_cdk_keycodes.RIGHT_ARROW) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusFirstChip();
                    }
                }
                else if (index < (this._totalChips - 1)) {
                    this._focusChip(index + 1);
                }
                // prevent default window scrolling
                event.preventDefault();
                break;
            default:
        }
    };
    /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     */
    TdChipsComponent.prototype._removeInputDisplay = function () {
        return '';
    };
    /**
     * Method to open the autocomplete manually if its not already opened
     */
    TdChipsComponent.prototype._openAutocomplete = function () {
        if (!this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.openPanel();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Method to close the autocomplete manually if its not already closed
     */
    TdChipsComponent.prototype._closeAutocomplete = function () {
        if (this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.closePanel();
            this._changeDetectorRef.markForCheck();
        }
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
    Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
        /**
         * Get total of chips
         */
        get: function () {
            var chips = this._chipsChildren.toArray();
            return chips.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to focus a desired chip by index
     */
    TdChipsComponent.prototype._focusChip = function (index) {
        /** check to see if index exists in the array before focusing */
        if (index > -1 && this._totalChips > index) {
            this._chipsChildren.toArray()[index].focus();
        }
    };
    /** Method to focus first chip */
    TdChipsComponent.prototype._focusFirstChip = function () {
        this._focusChip(0);
    };
    /** Method to focus last chip */
    TdChipsComponent.prototype._focusLastChip = function () {
        this._focusChip(this._totalChips - 1);
    };
    /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     */
    TdChipsComponent.prototype._toggleInput = function () {
        if (this.canAddChip) {
            this.inputControl.enable();
        }
        else {
            this.inputControl.disable();
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Sets first option as active to let the user know which one will be added when pressing enter
     * Only if [requireMatch] has been set
     */
    TdChipsComponent.prototype._setFirstOptionActive = function () {
        var _this = this;
        if (this.requireMatch) {
            // need to use a timer here to wait until the autocomplete has been opened (end of queue)
            rxjs_operator_toPromise.toPromise.call(rxjs_observable_timer.timer()).then(function () {
                if (_this.focused && _this._options && _this._options.length > 0) {
                    // clean up of previously active options
                    _this._options.toArray().forEach(function (option) {
                        option.setInactiveStyles();
                    });
                    // set the first one as active
                    _this._options.toArray()[0].setActiveStyles();
                    _this._changeDetectorRef.markForCheck();
                }
            });
        }
    };
    /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     */
    TdChipsComponent.prototype._watchOutsideClick = function () {
        var _this = this;
        if (this._document) {
            rxjs_observable_merge.merge(rxjs_observable_fromEvent.fromEvent(this._document, 'click'), rxjs_observable_fromEvent.fromEvent(this._document, 'touchend')).pipe(rxjs_operators_filter.filter(function (event) {
                var clickTarget = event.target;
                setTimeout(function () {
                    _this._internalClick = false;
                });
                return _this.focused &&
                    (clickTarget !== _this._elementRef.nativeElement) &&
                    !_this._elementRef.nativeElement.contains(clickTarget) && !_this._internalClick;
            })).subscribe(function () {
                if (_this.focused) {
                    _this._autocompleteTrigger.closePanel();
                    _this.removeFocusedState();
                    _this.onTouched();
                    _this._changeDetectorRef.markForCheck();
                }
            });
        }
        return undefined;
    };
    __decorate([
        _angular_core.ViewChild('input'),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdChipsComponent.prototype, "_nativeInput", void 0);
    __decorate([
        _angular_core.ViewChild(_angular_material.MatInput),
        __metadata("design:type", _angular_material.MatInput)
    ], TdChipsComponent.prototype, "_inputChild", void 0);
    __decorate([
        _angular_core.ViewChild(_angular_material.MatAutocompleteTrigger),
        __metadata("design:type", _angular_material.MatAutocompleteTrigger)
    ], TdChipsComponent.prototype, "_autocompleteTrigger", void 0);
    __decorate([
        _angular_core.ViewChildren(_angular_material.MatChip),
        __metadata("design:type", _angular_core.QueryList)
    ], TdChipsComponent.prototype, "_chipsChildren", void 0);
    __decorate([
        _angular_core.ContentChild(TdChipDirective),
        __metadata("design:type", TdChipDirective)
    ], TdChipsComponent.prototype, "_chipTemplate", void 0);
    __decorate([
        _angular_core.ContentChild(TdAutocompleteOptionDirective),
        __metadata("design:type", TdAutocompleteOptionDirective)
    ], TdChipsComponent.prototype, "_autocompleteOptionTemplate", void 0);
    __decorate([
        _angular_core.ViewChildren(_angular_material.MatOption),
        __metadata("design:type", _angular_core.QueryList)
    ], TdChipsComponent.prototype, "_options", void 0);
    __decorate([
        _angular_core.Input('items'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TdChipsComponent.prototype, "items", null);
    __decorate([
        _angular_core.Input('stacked'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdChipsComponent.prototype, "stacked", null);
    __decorate([
        _angular_core.Input('requireMatch'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdChipsComponent.prototype, "requireMatch", null);
    __decorate([
        _angular_core.Input('readOnly'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdChipsComponent.prototype, "readOnly", null);
    __decorate([
        _angular_core.Input('chipAddition'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdChipsComponent.prototype, "chipAddition", null);
    __decorate([
        _angular_core.Input('chipRemoval'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdChipsComponent.prototype, "chipRemoval", null);
    __decorate([
        _angular_core.Input('placeholder'),
        __metadata("design:type", String)
    ], TdChipsComponent.prototype, "placeholder", void 0);
    __decorate([
        _angular_core.Input('debounce'),
        __metadata("design:type", Number)
    ], TdChipsComponent.prototype, "debounce", void 0);
    __decorate([
        _angular_core.Input('color'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdChipsComponent.prototype, "color", null);
    __decorate([
        _angular_core.Output('add'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdChipsComponent.prototype, "onAdd", void 0);
    __decorate([
        _angular_core.Output('remove'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdChipsComponent.prototype, "onRemove", void 0);
    __decorate([
        _angular_core.Output('inputChange'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdChipsComponent.prototype, "onInputChange", void 0);
    __decorate([
        _angular_core.Output('chipFocus'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdChipsComponent.prototype, "onChipFocus", void 0);
    __decorate([
        _angular_core.Output('chipBlur'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdChipsComponent.prototype, "onChipBlur", void 0);
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TdChipsComponent.prototype, "value", null);
    __decorate([
        _angular_core.HostBinding('attr.tabindex'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], TdChipsComponent.prototype, "tabIndex", null);
    __decorate([
        _angular_core.HostListener('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FocusEvent]),
        __metadata("design:returntype", void 0)
    ], TdChipsComponent.prototype, "focusListener", null);
    __decorate([
        _angular_core.HostListener('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FocusEvent]),
        __metadata("design:returntype", void 0)
    ], TdChipsComponent.prototype, "mousedownListener", null);
    __decorate([
        _angular_core.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TdChipsComponent.prototype, "clickListener", null);
    __decorate([
        _angular_core.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TdChipsComponent.prototype, "keydownListener", null);
    TdChipsComponent = TdChipsComponent_1 = __decorate([
        _angular_core.Component({
            providers: [{
                    provide: _angular_forms.NG_VALUE_ACCESSOR,
                    useExisting: _angular_core.forwardRef(function () { return TdChipsComponent_1; }),
                    multi: true,
                }],
            selector: 'td-chips',
            inputs: ['disabled'],
            styles: [":host { display: block; padding: 0px 5px 0px 5px; min-height: 48px; } :host .td-chips-wrapper { min-height: 42px; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; } :host .td-chips-wrapper.td-chips-stacked .mat-basic-chip { width: 100%; } :host .td-chip, :host .td-chip > .td-chip-content { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; max-width: 100%; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host .td-chip.td-chip-stacked, :host .td-chip > .td-chip-content.td-chip-stacked { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; } :host ::ng-deep { /* TODO see if we can make styles more abstract to future proof for contact chips */ } :host ::ng-deep .mat-form-field-wrapper { padding-bottom: 2px; } :host ::ng-deep .mat-basic-chip { display: inline-block; cursor: default; border-radius: 16px; margin: 8px 8px 0 0; -webkit-box-sizing: border-box; box-sizing: border-box; max-width: 100%; position: relative; } html[dir=rtl] :host ::ng-deep .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } body[dir=rtl] :host ::ng-deep .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } [dir=rtl] :host ::ng-deep .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } :host ::ng-deep .mat-basic-chip bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host ::ng-deep .mat-basic-chip bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host ::ng-deep .mat-basic-chip .td-chip { min-height: 32px; line-height: 32px; font-size: 13px; padding: 0 0 0 12px; } html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip { padding: 0 12px 0 0; unicode-bidi: embed; } body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip { padding: 0 12px 0 0; unicode-bidi: embed; } [dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip { padding: 0 12px 0 0; unicode-bidi: embed; } :host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] { display: inline-block; -webkit-box-ordinal-group: -19; -ms-flex-order: -20; order: -20; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; text-align: center; height: 32px; width: 32px; margin: 0 8px 0 -12px; border-radius: 50%; } html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] { margin: 0 -12px 0 8px; unicode-bidi: embed; } body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] { margin: 0 -12px 0 8px; unicode-bidi: embed; } [dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] { margin: 0 -12px 0 8px; unicode-bidi: embed; } :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host ::ng-deep .mat-basic-chip.td-chip-after-pad { padding: 0 12px 0 0; } html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad { padding: 0 0 0 12px; unicode-bidi: embed; } body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad { padding: 0 0 0 12px; unicode-bidi: embed; } [dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad { padding: 0 0 0 12px; unicode-bidi: embed; } :host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal { margin: 0 4px; font-size: 21px; line-height: 22px; } :host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover { cursor: pointer; } :host .mat-form-field-underline { position: relative; height: 1px; width: 100%; bottom: 0; } :host .mat-form-field-underline.mat-disabled { background-position: 0; bottom: -4px; background-color: transparent; } :host .mat-form-field-underline .mat-form-field-ripple { position: absolute; height: 2px; top: 0; width: 100%; -webkit-transform-origin: 50%; transform-origin: 50%; -webkit-transform: scaleX(0.5); transform: scaleX(0.5); visibility: hidden; -webkit-transition: background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); transition: background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); } :host .mat-form-field-underline .mat-form-field-ripple.mat-focused { visibility: visible; -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transition: background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), -webkit-transform 150ms linear; transition: background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), -webkit-transform 150ms linear; transition: transform 150ms linear, background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); transition: transform 150ms linear, background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), -webkit-transform 150ms linear; } :host ::ng-deep mat-form-field .mat-form-field-underline { display: none; } /*# sourceMappingURL=chips.component.css.map */ "],
            template: "<div class=\"td-chips-wrapper\" [class.td-chips-stacked]=\"stacked\"> <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\"> <mat-basic-chip [class.td-chip-disabled]=\"disabled\" [class.td-chip-after-pad]=\"!canRemoveChip\" [color]=\"color\" [disabled]=\"true\" (keydown)=\"_chipKeydown($event, index)\" (blur)=\"_handleChipBlur($event, chip)\" (focus)=\"_handleChipFocus($event, chip)\"> <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\"> <span class=\"td-chip-content\"> <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span> <ng-template *ngIf=\"_chipTemplate?.templateRef\" [ngTemplateOutlet]=\"_chipTemplate?.templateRef\" [ngTemplateOutletContext]=\"{ chip: chip }\"> </ng-template> </span> <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\"> cancel </mat-icon> </div> </mat-basic-chip> </ng-template> <mat-form-field floatPlaceholder=\"never\" [style.width.px]=\"canAddChip ? null : 0\" [style.height.px]=\"canAddChip ? null : 0\" [color]=\"color\"> <input matInput #input [tabIndex]=\"-1\" [matAutocomplete]=\"autocomplete\" [formControl]=\"inputControl\" [placeholder]=\"canAddChip? placeholder : ''\" (keydown)=\"_inputKeydown($event)\" (keyup.enter)=\"_handleAddChip()\" (focus)=\"_handleFocus()\"> </mat-form-field> <mat-autocomplete #autocomplete=\"matAutocomplete\" [displayWith]=\"_removeInputDisplay\" (optionSelected)=\"addChip($event.option.value)\"> <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\"> <mat-option (click)=\"_setInternalClick()\" [value]=\"item\"> <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span> <ng-template *ngIf=\"_autocompleteOptionTemplate?.templateRef\" [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\" [ngTemplateOutletContext]=\"{ option: item }\"> </ng-template> </mat-option> </ng-template> </mat-autocomplete> </div> <div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\" [class.mat-disabled]=\"disabled\"> <span class=\"mat-form-field-ripple\" [class.mat-focused]=\"focused\"></span> </div> <ng-content></ng-content>",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }),
        __param(3, _angular_core.Optional()), __param(3, _angular_core.Inject(_angular_platformBrowser.DOCUMENT)),
        __metadata("design:paramtypes", [_angular_core.ElementRef,
            _angular_core.Renderer2,
            _angular_core.ChangeDetectorRef, Object])
    ], TdChipsComponent);
    return TdChipsComponent;
    var TdChipsComponent_1;
}(_TdChipsMixinBase));

var CovalentChipsModule = (function () {
    function CovalentChipsModule() {
    }
    CovalentChipsModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_forms.ReactiveFormsModule,
                _angular_common.CommonModule,
                _angular_material.MatInputModule,
                _angular_material.MatIconModule,
                _angular_material.MatChipsModule,
                _angular_material.MatAutocompleteModule,
            ],
            declarations: [
                TdChipsComponent,
                TdChipDirective,
                TdAutocompleteOptionDirective,
            ],
            exports: [
                TdChipsComponent,
                TdChipDirective,
                TdAutocompleteOptionDirective,
            ],
        })
    ], CovalentChipsModule);
    return CovalentChipsModule;
}());

var TdDataTableColumnRowComponent = (function () {
    function TdDataTableColumnRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
    TdDataTableColumnRowComponent = __decorate([
        _angular_core.Component({
            /* tslint:disable-next-line */
            selector: 'tr[td-data-table-column-row]',
            styles: [":host { border-bottom-style: solid; border-bottom-width: 1px; } :host.td-data-table-row { height: 48px; } :host.td-data-table-column-row { height: 56px; } /*# sourceMappingURL=data-table-row.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        __metadata("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer2])
    ], TdDataTableColumnRowComponent);
    return TdDataTableColumnRowComponent;
}());
var TdDataTableRowComponent = (function () {
    function TdDataTableRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            if (selected) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
            }
            this._selected = selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableRowComponent.prototype, "height", {
        get: function () {
            var height = 48;
            if (this._elementRef.nativeElement) {
                height = this._elementRef.nativeElement.getBoundingClientRect().height;
            }
            return height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listening to click event to explicitly focus the row element.
     */
    TdDataTableRowComponent.prototype.clickListener = function () {
        this.focus();
    };
    TdDataTableRowComponent.prototype.focus = function () {
        this._elementRef.nativeElement.focus();
    };
    __decorate([
        _angular_core.Input('selected'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdDataTableRowComponent.prototype, "selected", null);
    __decorate([
        _angular_core.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TdDataTableRowComponent.prototype, "clickListener", null);
    TdDataTableRowComponent = __decorate([
        _angular_core.Component({
            /* tslint:disable-next-line */
            selector: 'tr[td-data-table-row]',
            styles: [":host { border-bottom-style: solid; border-bottom-width: 1px; } :host.td-data-table-row { height: 48px; } :host.td-data-table-column-row { height: 56px; } /*# sourceMappingURL=data-table-row.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        __metadata("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer2])
    ], TdDataTableRowComponent);
    return TdDataTableRowComponent;
}());

var TdDataTableTemplateDirective = (function (_super) {
    __extends(TdDataTableTemplateDirective, _super);
    function TdDataTableTemplateDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", String)
    ], TdDataTableTemplateDirective.prototype, "tdDataTableTemplate", void 0);
    TdDataTableTemplateDirective = __decorate([
        _angular_core.Directive({ selector: '[tdDataTableTemplate]ng-template' }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdDataTableTemplateDirective);
    return TdDataTableTemplateDirective;
}(_angular_cdk_portal.TemplatePortalDirective));

var noop$1 = function () {
    // empty method
};
var TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TdDataTableComponent; }),
    multi: true,
};

(function (TdDataTableSortingOrder) {
    TdDataTableSortingOrder[TdDataTableSortingOrder["Ascending"] = 'ASC'] = "Ascending";
    TdDataTableSortingOrder[TdDataTableSortingOrder["Descending"] = 'DESC'] = "Descending";
})(exports.TdDataTableSortingOrder || (exports.TdDataTableSortingOrder = {}));
/**
 * Constant to set the rows offset before and after the viewport
 */
var TD_VIRTUAL_OFFSET = 2;
/**
 * Constant to set default row height if none is provided
 */
var TD_VIRTUAL_DEFAULT_ROW_HEIGHT = 48;
var TdDataTableComponent = (function () {
    function TdDataTableComponent(_document, _elementRef, _domSanitizer, _changeDetectorRef) {
        this._document = _document;
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._changeDetectorRef = _changeDetectorRef;
        this._hostWidth = 0;
        this._widths = [];
        this._onResize = new rxjs_Subject.Subject();
        this._scrollHorizontalOffset = 0;
        this._onHorizontalScroll = new rxjs_Subject.Subject();
        this._onVerticalScroll = new rxjs_Subject.Subject();
        // Array of cached row heights to allow dynamic row heights
        this._rowHeightCache = [];
        // Total pseudo height of all the elements
        this._totalHeight = 0;
        // Total host height for the viewport
        this._hostHeight = 0;
        // Scrolled vertical pixels
        this._scrollVerticalOffset = 0;
        // Variables that set from and to which rows will be rendered
        this._fromRow = 0;
        this._toRow = 0;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = [];
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop$1;
        this._selectable = false;
        this._clickable = false;
        this._multiple = true;
        this._allSelected = false;
        this._indeterminate = false;
        /** sorting */
        this._sortable = false;
        this._sortOrder = exports.TdDataTableSortingOrder.Ascending;
        /** shift select */
        this._shiftPreviouslyPressed = false;
        this._lastSelectedIndex = -1;
        this._firstSelectedIndex = -1;
        this._firstCheckboxValue = false;
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
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         */
        this.onRowClick = new _angular_core.EventEmitter();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        this.onSelectAll = new _angular_core.EventEmitter();
        /**
         * compareWith?: function(row, model): boolean
         * Allows custom comparison between row and model to see if row is selected or not
         * Default comparation is by reference
         */
        this.compareWith = function (row, model) {
            return row === model;
        };
        this.onChange = function (_) { return noop$1; };
        this.onTouched = function () { return noop$1; };
    }
    Object.defineProperty(TdDataTableComponent.prototype, "hostWidth", {
        get: function () {
            // if the checkboxes are rendered, we need to remove their width
            // from the total width to calculate properly
            if (this.selectable) {
                return this._hostWidth - 42;
            }
            return this._hostWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "offsetTransform", {
        /**
         * Returns the offset style with a proper calculation on how much it should move
         * over the y axis of the total height
         */
        get: function () {
            return this._offsetTransform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "totalHeight", {
        /**
         * Returns the assumed total height of the rows
         */
        get: function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "fromRow", {
        /**
         * Returns the initial row to render in the viewport
         */
        get: function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "toRow", {
        /**
         * Returns the last row to render in the viewport
         */
        get: function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columnsLeftScroll", {
        /**
         * Returns scroll position to reposition column headers
         */
        get: function () {
            return this._scrollHorizontalOffset * -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "allSelected", {
        /**
         * Returns true if all values are selected.
         */
        get: function () {
            return this._allSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "indeterminate", {
        /**
         * Returns true if all values are not deselected
         * and at least one is.
         */
        get: function () {
            return this._indeterminate;
        },
        enumerable: true,
        configurable: true
    });
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
        get: function () {
            return this._data;
        },
        /**
         * data?: {[key: string]: any}[]
         * Sets the data to be rendered as rows.
         */
        set: function (data) {
            var _this = this;
            this._data = data;
            this._rowHeightCache = [];
            Promise.resolve().then(function () {
                _this.refresh();
                // scroll back to the top if the data has changed
                _this._scrollableDiv.nativeElement.scrollTop = 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "virtualData", {
        get: function () {
            return this._virtualData;
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
        get: function () {
            return this._selectable;
        },
        /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         */
        set: function (selectable) {
            this._selectable = _angular_cdk_coercion.coerceBooleanProperty(selectable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "clickable", {
        get: function () {
            return this._clickable;
        },
        /**
         * clickable?: boolean
         * Enables row click events, hover.
         * Defaults to 'false'
         */
        set: function (clickable) {
            this._clickable = _angular_cdk_coercion.coerceBooleanProperty(clickable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         */
        set: function (multiple) {
            this._multiple = _angular_cdk_coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
        get: function () {
            return this._sortable;
        },
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        set: function (sortable) {
            this._sortable = _angular_cdk_coercion.coerceBooleanProperty(sortable);
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
    Object.defineProperty(TdDataTableComponent.prototype, "sortByColumn", {
        get: function () {
            return this._sortBy;
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
    Object.defineProperty(TdDataTableComponent.prototype, "sortOrderEnum", {
        get: function () {
            return this._sortOrder;
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
     * Initialize observable for resize and scroll events
     */
    TdDataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize observable for resize calculations
        this._resizeSubs = this._onResize.asObservable().subscribe(function () {
            if (_this._rows) {
                _this._rows.toArray().forEach(function (row, index) {
                    _this._rowHeightCache[_this.fromRow + index] = row.height + 1;
                });
            }
            _this._calculateWidths();
            _this._calculateVirtualRows();
        });
        // initialize observable for scroll column header reposition
        this._horizontalScrollSubs = this._onHorizontalScroll.asObservable()
            .subscribe(function (horizontalScroll) {
            _this._scrollHorizontalOffset = horizontalScroll;
            _this._changeDetectorRef.markForCheck();
        });
        // initialize observable for virtual scroll rendering
        this._verticalScrollSubs = this._onVerticalScroll.asObservable()
            .subscribe(function (verticalScroll) {
            _this._scrollVerticalOffset = verticalScroll;
            _this._calculateVirtualRows();
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * Loads templates and sets them in a map for faster access.
     */
    TdDataTableComponent.prototype.ngAfterContentInit = function () {
        for (var i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    };
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     */
    TdDataTableComponent.prototype.ngAfterContentChecked = function () {
        if (this._elementRef.nativeElement) {
            var newHostWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth) {
                this._hostWidth = newHostWidth;
                this._onResize.next();
            }
        }
        if (this._scrollableDiv.nativeElement) {
            var newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
            // if the height of the viewport has changed, then we mark for check
            if (this._hostHeight !== newHostHeight) {
                this._hostHeight = newHostHeight;
                this._calculateVirtualRows();
                this._changeDetectorRef.markForCheck();
            }
        }
    };
    /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     */
    TdDataTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._rowsChangedSubs = this._rows.changes.pipe(rxjs_operators_debounceTime.debounceTime(0)).subscribe(function () {
            _this._onResize.next();
        });
        this._calculateVirtualRows();
    };
    /**
     * Unsubscribes observables when data table is destroyed
     */
    TdDataTableComponent.prototype.ngOnDestroy = function () {
        if (this._resizeSubs) {
            this._resizeSubs.unsubscribe();
        }
        if (this._horizontalScrollSubs) {
            this._horizontalScrollSubs.unsubscribe();
        }
        if (this._verticalScrollSubs) {
            this._verticalScrollSubs.unsubscribe();
        }
        if (this._rowsChangedSubs) {
            this._rowsChangedSubs.unsubscribe();
        }
    };
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     */
    TdDataTableComponent.prototype.handleScroll = function (event) {
        var element = event.target;
        if (element) {
            var horizontalScroll = element.scrollLeft;
            if (this._scrollHorizontalOffset !== horizontalScroll) {
                this._onHorizontalScroll.next(horizontalScroll);
            }
            var verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._onVerticalScroll.next(verticalScroll);
            }
        }
    };
    /**
     * Returns the width needed for the columns via index
     */
    TdDataTableComponent.prototype.getColumnWidth = function (index) {
        if (this._widths[index]) {
            return this._widths[index].value;
        }
        return undefined;
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
        this._calculateVirtualRows();
        this._calculateWidths();
        this._calculateCheckboxState();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    TdDataTableComponent.prototype.selectAll = function (checked) {
        var _this = this;
        var toggledRows = [];
        if (checked) {
            this._data.forEach(function (row) {
                // skiping already selected rows
                if (!_this.isRowSelected(row)) {
                    _this._value.push(row);
                    // checking which ones are being toggled
                    toggledRows.push(row);
                }
            });
            this._allSelected = true;
            this._indeterminate = true;
        }
        else {
            this._data.forEach(function (row) {
                // checking which ones are being toggled
                if (_this.isRowSelected(row)) {
                    toggledRows.push(row);
                    var modelRow = _this._value.filter(function (val) {
                        return _this.compareWith(row, val);
                    })[0];
                    var index = _this._value.indexOf(modelRow);
                    if (index > -1) {
                        _this._value.splice(index, 1);
                    }
                }
            });
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.onSelectAll.emit({ rows: toggledRows, selected: checked });
    };
    /**
     * Checks if row is selected
     */
    TdDataTableComponent.prototype.isRowSelected = function (row) {
        var _this = this;
        // compare items by [compareWith] function
        return this._value ? this._value.filter(function (val) {
            return _this.compareWith(row, val);
        }).length > 0 : false;
    };
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     */
    TdDataTableComponent.prototype.select = function (row, event, currentSelected) {
        if (this.selectable) {
            this.blockEvent(event);
            // Check to see if Shift key is selected and need to select everything in between
            var mouseEvent = event;
            if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                var firstIndex = currentSelected;
                var lastIndex = this._lastSelectedIndex;
                if (currentSelected > this._lastSelectedIndex) {
                    firstIndex = this._lastSelectedIndex;
                    lastIndex = currentSelected;
                }
                // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                // else the checkboxes clicked are all after the initial one
                if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                    (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                    for (var i = firstIndex; i <= lastIndex; i++) {
                        if (this._firstSelectedIndex !== i) {
                            this._doSelection(this._data[i], i);
                        }
                    }
                }
                else if ((this._firstSelectedIndex > currentSelected) || (this._firstSelectedIndex < currentSelected)) {
                    // change indexes depending on where the next checkbox is selected (before or after)
                    if (this._firstSelectedIndex > currentSelected) {
                        lastIndex--;
                    }
                    else if (this._firstSelectedIndex < currentSelected) {
                        firstIndex++;
                    }
                    for (var i = firstIndex; i <= lastIndex; i++) {
                        var rowSelected = this.isRowSelected(this._data[i]);
                        // if row is selected and first checkbox was selected
                        // or if row was unselected and first checkbox was unselected
                        // we ignore the toggle
                        if ((this._firstCheckboxValue && !rowSelected) ||
                            (!this._firstCheckboxValue && rowSelected)) {
                            this._doSelection(this._data[i], i);
                        }
                        else if (this._shiftPreviouslyPressed) {
                            // else if the checkbox selected was in the middle of the last selection and the first selection
                            // then we undo the selections
                            if ((currentSelected >= this._firstSelectedIndex && currentSelected <= this._lastSelectedIndex) ||
                                (currentSelected <= this._firstSelectedIndex && currentSelected >= this._lastSelectedIndex)) {
                                this._doSelection(this._data[i], i);
                            }
                        }
                    }
                }
                this._shiftPreviouslyPressed = true;
                // if shift wasnt pressed, then we take the element checked as the first row
                // incase the next click uses shift
            }
            else if (mouseEvent && !mouseEvent.shiftKey) {
                this._firstCheckboxValue = this._doSelection(row, currentSelected);
                this._shiftPreviouslyPressed = false;
                this._firstSelectedIndex = currentSelected;
            }
            this._lastSelectedIndex = currentSelected;
        }
    };
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     */
    TdDataTableComponent.prototype.disableTextSelection = function () {
        if (this._document) {
            this._document.onselectstart = function () {
                return false;
            };
        }
    };
    /**
     * Resets the original onselectstart method.
     */
    TdDataTableComponent.prototype.enableTextSelection = function () {
        if (this._document) {
            this._document.onselectstart = undefined;
        }
    };
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     */
    TdDataTableComponent.prototype.handleRowClick = function (row, index, event) {
        if (this.clickable) {
            // ignoring linting rules here because attribute it actually null or not there
            // can't check for undefined
            var srcElement = event.srcElement || event.currentTarget;
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null) {
                this.onRowClick.emit({
                    row: row,
                    index: index,
                });
            }
        }
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
     * Handle all keyup events when focusing a data table row
     */
    TdDataTableComponent.prototype._rowKeyup = function (event, row, index) {
        switch (event.keyCode) {
            case _angular_cdk_keycodes.ENTER:
            case _angular_cdk_keycodes.SPACE:
                /** if user presses enter or space, the row should be selected */
                if (this.selectable) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            case _angular_cdk_keycodes.UP_ARROW:
                /**
                 * if users presses the up arrow, we focus the prev row
                 * unless its the first row
                 */
                if (index > 0) {
                    this._rows.toArray()[index - 1].focus();
                }
                this.blockEvent(event);
                if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index >= 0) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            case _angular_cdk_keycodes.DOWN_ARROW:
                /**
                 * if users presses the down arrow, we focus the next row
                 * unless its the last row
                 */
                if (index < (this._rows.toArray().length - 1)) {
                    this._rows.toArray()[index + 1].focus();
                }
                this.blockEvent(event);
                if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index < this._data.length) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            default:
        }
    };
    /**
     * Method to prevent the default events
     */
    TdDataTableComponent.prototype.blockEvent = function (event) {
        event.preventDefault();
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
    /**
     * Does the actual Row Selection
     */
    TdDataTableComponent.prototype._doSelection = function (row, rowIndex) {
        var _this = this;
        var wasSelected = this.isRowSelected(row);
        if (!wasSelected) {
            if (!this._multiple) {
                this.clearModel();
            }
            this._value.push(row);
        }
        else {
            // compare items by [compareWith] function
            row = this._value.filter(function (val) {
                return _this.compareWith(row, val);
            })[0];
            var index = this._value.indexOf(row);
            if (index > -1) {
                this._value.splice(index, 1);
            }
        }
        this._calculateCheckboxState();
        this.onRowSelect.emit({ row: row, index: rowIndex, selected: !wasSelected });
        this.onChange(this._value);
        return !wasSelected;
    };
    /**
     * Calculate all the state of all checkboxes
     */
    TdDataTableComponent.prototype._calculateCheckboxState = function () {
        var _this = this;
        if (this._data) {
            this._allSelected = typeof this._data.find(function (d) { return !_this.isRowSelected(d); }) === 'undefined';
            this._indeterminate = false;
            for (var _i = 0, _a = this._data; _i < _a.length; _i++) {
                var row = _a[_i];
                if (!this.isRowSelected(row)) {
                    continue;
                }
                this._indeterminate = true;
                break;
            }
        }
    };
    /**
     * Calculates the widths for columns and cells depending on content
     */
    TdDataTableComponent.prototype._calculateWidths = function () {
        var _this = this;
        if (this._colElements && this._colElements.length) {
            this._widths = [];
            this._colElements.forEach(function (col, index) {
                _this._adjustColumnWidth(index, _this._calculateWidth());
            });
            this._adjustColumnWidhts();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     */
    TdDataTableComponent.prototype._adjustColumnWidhts = function () {
        var _this = this;
        var fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        var flexibleWidths = this._widths.filter(function (width, index) {
            if (_this.columns[index].hidden) {
                return false;
            }
            if (width.limit || width.max || width.min) {
                fixedTotalWidth += width.value;
            }
            return !width.limit && !width.max && !width.min;
        }).length;
        // calculate how much pixes are left that could be spread across
        // the flexible columns
        var recalculateHostWidth = 0;
        if (fixedTotalWidth < this.hostWidth) {
            recalculateHostWidth = this.hostWidth - fixedTotalWidth;
        }
        // if we have flexible columns and pixels to spare on them
        // we try and spread the pixels across them
        if (flexibleWidths && recalculateHostWidth) {
            var newValue_1 = Math.floor(recalculateHostWidth / flexibleWidths);
            var adjustedNumber_1 = 0;
            // adjust the column widths with the spread pixels
            this._widths.forEach(function (colWidth) {
                if (_this._widths[colWidth.index].max && _this._widths[colWidth.index].value > newValue_1 ||
                    _this._widths[colWidth.index].min && _this._widths[colWidth.index].value < newValue_1 ||
                    !_this._widths[colWidth.index].limit) {
                    _this._adjustColumnWidth(colWidth.index, newValue_1);
                    adjustedNumber_1++;
                }
            });
            // if there are still columns that need to be recalculated, we start over
            var newFlexibleWidths = this._widths.filter(function (width) {
                return !width.limit && !width.max;
            }).length;
            if (newFlexibleWidths !== adjustedNumber_1 && newFlexibleWidths !== flexibleWidths) {
                this._adjustColumnWidhts();
            }
        }
    };
    /**
     * Adjusts a single column to see if it can be recalculated
     */
    TdDataTableComponent.prototype._adjustColumnWidth = function (index, value) {
        this._widths[index] = {
            value: value,
            index: index,
            limit: false,
            min: false,
            max: false,
        };
        // flag to see if we need to skip the min width projection
        // depending if a width or min width has been provided
        var skipMinWidthProjection = false;
        if (this.columns[index]) {
            // if the provided width has min/max, then we check to see if we need to set it
            if (typeof this.columns[index].width === 'object') {
                var widthOpts = this.columns[index].width;
                // if the column width is less than the configured min, we override it
                skipMinWidthProjection = (widthOpts && !!widthOpts.min);
                if (widthOpts && widthOpts.min >= this._widths[index].value) {
                    this._widths[index].value = widthOpts.min;
                    this._widths[index].min = true;
                    // if the column width is more than the configured max, we override it
                }
                else if (widthOpts && widthOpts.max <= this._widths[index].value) {
                    this._widths[index].value = widthOpts.max;
                    this._widths[index].max = true;
                }
                // if it has a fixed width, then we just set it
            }
            else if (typeof this.columns[index].width === 'number') {
                this._widths[index].value = this.columns[index].width;
                skipMinWidthProjection = this._widths[index].limit = true;
            }
        }
        // if there wasn't any width or min width provided, we set a min to what the column width min should be
        if (!skipMinWidthProjection &&
            this._widths[index].value < this._colElements.toArray()[index].projectedWidth) {
            this._widths[index].value = this._colElements.toArray()[index].projectedWidth;
            this._widths[index].min = true;
            this._widths[index].limit = false;
        }
    };
    /**
     * Generic method to calculate column width
     */
    TdDataTableComponent.prototype._calculateWidth = function () {
        var renderedColumns = this.columns.filter(function (col) { return !col.hidden; });
        return Math.floor(this.hostWidth / renderedColumns.length);
    };
    /**
     * Method to calculate the rows to be rendered in the viewport
     */
    TdDataTableComponent.prototype._calculateVirtualRows = function () {
        var _this = this;
        var scrolledRows = 0;
        if (this._data) {
            this._totalHeight = 0;
            var rowHeightSum_1 = 0;
            // loop through all rows to see if we have their height cached
            // and sum them all to calculate the total height
            this._data.forEach(function (d, index) {
                // iterate through all rows at first and assume all
                // rows are the same height as the first one
                if (!_this._rowHeightCache[index]) {
                    _this._rowHeightCache[index] = _this._rowHeightCache[0] || TD_VIRTUAL_DEFAULT_ROW_HEIGHT;
                }
                rowHeightSum_1 += _this._rowHeightCache[index];
                // check how many rows have been scrolled
                if (_this._scrollVerticalOffset - rowHeightSum_1 > 0) {
                    scrolledRows++;
                }
            });
            this._totalHeight = rowHeightSum_1;
            // set the initial row to be rendered taking into account the row offset
            var fromRow = scrolledRows - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            var hostHeight = this._hostHeight;
            var index = 0;
            // calculate how many rows can fit in the viewport
            while (hostHeight > 0) {
                hostHeight -= this._rowHeightCache[this.fromRow + index];
                index++;
            }
            // set the last row to be rendered taking into account the row offset
            var range = (index - 1) + (TD_VIRTUAL_OFFSET * 2);
            var toRow = range + this.fromRow;
            // if last row is greater than the total length, then we use the total length
            if (isFinite(toRow) && toRow > this._data.length) {
                toRow = this._data.length;
            }
            else if (!isFinite(toRow)) {
                toRow = TD_VIRTUAL_OFFSET;
            }
            this._toRow = toRow;
        }
        else {
            this._totalHeight = 0;
            this._fromRow = 0;
            this._toRow = 0;
        }
        var offset = 0;
        // calculate the proper offset depending on how many rows have been scrolled
        if (scrolledRows > TD_VIRTUAL_OFFSET) {
            for (var index = 0; index < this.fromRow; index++) {
                offset += this._rowHeightCache[index];
            }
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    __decorate([
        _angular_core.ContentChildren(TdDataTableTemplateDirective),
        __metadata("design:type", _angular_core.QueryList)
    ], TdDataTableComponent.prototype, "_templates", void 0);
    __decorate([
        _angular_core.ViewChild('scrollableDiv'),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdDataTableComponent.prototype, "_scrollableDiv", void 0);
    __decorate([
        _angular_core.ViewChildren('columnElement'),
        __metadata("design:type", _angular_core.QueryList)
    ], TdDataTableComponent.prototype, "_colElements", void 0);
    __decorate([
        _angular_core.ViewChildren(TdDataTableRowComponent),
        __metadata("design:type", _angular_core.QueryList)
    ], TdDataTableComponent.prototype, "_rows", void 0);
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TdDataTableComponent.prototype, "value", null);
    __decorate([
        _angular_core.Input('data'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TdDataTableComponent.prototype, "data", null);
    __decorate([
        _angular_core.Input('columns'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TdDataTableComponent.prototype, "columns", null);
    __decorate([
        _angular_core.Input('selectable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdDataTableComponent.prototype, "selectable", null);
    __decorate([
        _angular_core.Input('clickable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdDataTableComponent.prototype, "clickable", null);
    __decorate([
        _angular_core.Input('multiple'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdDataTableComponent.prototype, "multiple", null);
    __decorate([
        _angular_core.Input('sortable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdDataTableComponent.prototype, "sortable", null);
    __decorate([
        _angular_core.Input('sortBy'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdDataTableComponent.prototype, "sortBy", null);
    __decorate([
        _angular_core.Input('sortOrder'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdDataTableComponent.prototype, "sortOrder", null);
    __decorate([
        _angular_core.Output('sortChange'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdDataTableComponent.prototype, "onSortChange", void 0);
    __decorate([
        _angular_core.Output('rowSelect'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdDataTableComponent.prototype, "onRowSelect", void 0);
    __decorate([
        _angular_core.Output('rowClick'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdDataTableComponent.prototype, "onRowClick", void 0);
    __decorate([
        _angular_core.Output('selectAll'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdDataTableComponent.prototype, "onSelectAll", void 0);
    __decorate([
        _angular_core.Input('compareWith'),
        __metadata("design:type", Function)
    ], TdDataTableComponent.prototype, "compareWith", void 0);
    TdDataTableComponent = __decorate([
        _angular_core.Component({
            providers: [TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR],
            selector: 'td-data-table',
            styles: [":host { display: block; overflow: hidden; } :host .td-data-table-scrollable { position: relative; overflow: auto; height: calc(100% - 56px); } table.td-data-table { width: auto !important; } table.td-data-table.mat-selectable tbody > tr.td-data-table-row { -webkit-transition: background-color 0.2s; transition: background-color 0.2s; } table.td-data-table.mat-selectable .td-data-table-column:first-child > .td-data-table-column-content-wrapper, table.td-data-table.mat-selectable th.td-data-table-column:first-child > .td-data-table-column-content-wrapper, table.td-data-table.mat-selectable td.td-data-table-cell:first-child > .td-data-table-column-content-wrapper { width: 18px; min-width: 18px; padding: 0 24px; } table.td-data-table.mat-selectable .td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper, table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper, table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2) > .td-data-table-column-content-wrapper { padding-left: 0px; } [dir='rtl'] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper, [dir='rtl'] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper, [dir='rtl'] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2) > .td-data-table-column-content-wrapper { padding-right: 0px; padding-left: 28px; } table.td-data-table td.mat-checkbox-cell, table.td-data-table th.mat-checkbox-column { min-width: 42px; width: 42px; font-size: 0 !important; } table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox, table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox { width: 18px; height: 18px; } ::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after, ::ng-deep table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after { width: 11px !important; height: 4px !important; } table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container, table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container { width: 18px; height: 18px; margin: 0; } /*# sourceMappingURL=data-table.component.css.map */ "],
            template: "<table td-data-table [style.left.px]=\"columnsLeftScroll\" [class.mat-selectable]=\"selectable\"> <tr td-data-table-column-row> <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\"> <mat-checkbox #checkBoxAll *ngIf=\"multiple\" [disabled]=\"!hasData\" [indeterminate]=\"indeterminate && !allSelected && hasData\" [checked]=\"allSelected && hasData\" (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\" (keyup.enter)=\"selectAll(!checkBoxAll.checked)\" (keyup.space)=\"selectAll(!checkBoxAll.checked)\" (keydown.space)=\"blockEvent($event)\"> </mat-checkbox> </th> <th td-data-table-column #columnElement *ngFor=\"let column of columns; let i = index;\" [style.min-width.px]=\"getColumnWidth(i)\" [style.max-width.px]=\"getColumnWidth(i)\" [name]=\"column.name\" [numeric]=\"column.numeric\" [active]=\"(column.sortable || sortable) && column === sortByColumn\" [sortable]=\"column.sortable || (sortable && column.sortable !== false)\" [sortOrder]=\"sortOrderEnum\" [hidden]=\"column.hidden\" (sortChange)=\"handleSort(column)\"> <span [matTooltip]=\"column.tooltip\">{{column.label}}</span> </th> </tr> </table> <div #scrollableDiv class=\"td-data-table-scrollable\" (scroll)=\"handleScroll($event)\"> <div [style.height.px]=\"totalHeight\"></div> <table td-data-table [style.transform]=\"offsetTransform\" [style.position]=\"'absolute'\" [class.mat-selectable]=\"selectable\" [class.mat-clickable]=\"clickable\"> <tr td-data-table-row #dtRow [tabIndex]=\"selectable ? 0 : -1\" [selected]=\"(clickable || selectable) && isRowSelected(row)\" *ngFor=\"let row of virtualData; let rowIndex = index\" (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\" (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\" (keydown.space)=\"blockEvent($event)\" (keydown.shift.space)=\"blockEvent($event)\" (keydown.shift)=\"disableTextSelection()\" (keyup.shift)=\"enableTextSelection()\"> <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\"> <mat-pseudo-checkbox [state]=\"dtRow.selected ? 'checked' : 'unchecked'\" (mousedown)=\"disableTextSelection()\" (mouseup)=\"enableTextSelection()\" stopRowClick (click)=\"select(row, $event, fromRow + rowIndex)\"> </mat-pseudo-checkbox> </td> <td td-data-table-cell [numeric]=\"column.numeric\" [hidden]=\"column.hidden\" *ngFor=\"let column of columns; let i = index\" [style.min-width.px]=\"getColumnWidth(i)\" [style.max-width.px]=\"getColumnWidth(i)\"> <span *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span> <ng-template *ngIf=\"getTemplateRef(column.name)\" [ngTemplateOutlet]=\"getTemplateRef(column.name)\" [ngTemplateOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name }\"> </ng-template> </td> </tr> </table> </div> <ng-content></ng-content>",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }),
        __param(0, _angular_core.Optional()), __param(0, _angular_core.Inject(_angular_platformBrowser.DOCUMENT)),
        __metadata("design:paramtypes", [Object, _angular_core.ElementRef,
            _angular_platformBrowser.DomSanitizer,
            _angular_core.ChangeDetectorRef])
    ], TdDataTableComponent);
    return TdDataTableComponent;
}());

var TdDataTableColumnComponent = (function () {
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
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
    }
    Object.defineProperty(TdDataTableColumnComponent.prototype, "projectedWidth", {
        get: function () {
            if (this._columnContent && this._columnContent.nativeElement) {
                return this._columnContent.nativeElement.getBoundingClientRect().width;
            }
            return 100;
        },
        enumerable: true,
        configurable: true
    });
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
    /**
     * Listening to click event on host to throw a sort event
     */
    TdDataTableColumnComponent.prototype.handleClick = function () {
        if (this.sortable) {
            this.onSortChange.emit({ name: this.name, order: this._sortOrder });
        }
    };
    TdDataTableColumnComponent.prototype.isAscending = function () {
        return this._sortOrder === exports.TdDataTableSortingOrder.Ascending;
    };
    TdDataTableColumnComponent.prototype.isDescending = function () {
        return this._sortOrder === exports.TdDataTableSortingOrder.Descending;
    };
    __decorate([
        _angular_core.ViewChild('columnContent', { read: _angular_core.ElementRef }),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdDataTableColumnComponent.prototype, "_columnContent", void 0);
    __decorate([
        _angular_core.Input('name'),
        __metadata("design:type", String)
    ], TdDataTableColumnComponent.prototype, "name", void 0);
    __decorate([
        _angular_core.Input('sortable'),
        __metadata("design:type", Boolean)
    ], TdDataTableColumnComponent.prototype, "sortable", void 0);
    __decorate([
        _angular_core.Input('active'),
        __metadata("design:type", Boolean)
    ], TdDataTableColumnComponent.prototype, "active", void 0);
    __decorate([
        _angular_core.Input('numeric'),
        __metadata("design:type", Boolean)
    ], TdDataTableColumnComponent.prototype, "numeric", void 0);
    __decorate([
        _angular_core.Input('sortOrder'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdDataTableColumnComponent.prototype, "sortOrder", null);
    __decorate([
        _angular_core.Output('sortChange'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdDataTableColumnComponent.prototype, "onSortChange", void 0);
    __decorate([
        _angular_core.HostBinding('class.mat-clickable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdDataTableColumnComponent.prototype, "bindClickable", null);
    __decorate([
        _angular_core.HostBinding('class.mat-sortable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdDataTableColumnComponent.prototype, "bingSortable", null);
    __decorate([
        _angular_core.HostBinding('class.mat-active'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdDataTableColumnComponent.prototype, "bindActive", null);
    __decorate([
        _angular_core.HostBinding('class.mat-numeric'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdDataTableColumnComponent.prototype, "bindNumeric", null);
    __decorate([
        _angular_core.HostListener('click', ['event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TdDataTableColumnComponent.prototype, "handleClick", null);
    TdDataTableColumnComponent = __decorate([
        _angular_core.Component({
            /* tslint:disable-next-line */
            selector: 'th[td-data-table-column]',
            styles: [":host { white-space: nowrap; position: relative; padding: 0; vertical-align: middle; text-align: left; } :host > .td-data-table-heading { padding: 0 28px 0 28px; } :host:first-child > .td-data-table-heading { padding-left: 24px; padding-right: initial; } html[dir=rtl] :host:first-child > .td-data-table-heading { padding-left: initial; unicode-bidi: embed; } body[dir=rtl] :host:first-child > .td-data-table-heading { padding-left: initial; unicode-bidi: embed; } [dir=rtl] :host:first-child > .td-data-table-heading { padding-left: initial; unicode-bidi: embed; } :host:first-child > .td-data-table-heading bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child > .td-data-table-heading bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:first-child > .td-data-table-heading { padding-right: 24px; unicode-bidi: embed; } body[dir=rtl] :host:first-child > .td-data-table-heading { padding-right: 24px; unicode-bidi: embed; } [dir=rtl] :host:first-child > .td-data-table-heading { padding-right: 24px; unicode-bidi: embed; } :host:first-child > .td-data-table-heading bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child > .td-data-table-heading bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-heading { padding-left: 28px; padding-right: 24px; } html[dir=rtl] :host:last-child > .td-data-table-heading { padding-left: 24px; unicode-bidi: embed; } body[dir=rtl] :host:last-child > .td-data-table-heading { padding-left: 24px; unicode-bidi: embed; } [dir=rtl] :host:last-child > .td-data-table-heading { padding-left: 24px; unicode-bidi: embed; } :host:last-child > .td-data-table-heading bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-heading bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:last-child > .td-data-table-heading { padding-right: 28px; unicode-bidi: embed; } body[dir=rtl] :host:last-child > .td-data-table-heading { padding-right: 28px; unicode-bidi: embed; } [dir=rtl] :host:last-child > .td-data-table-heading { padding-right: 28px; unicode-bidi: embed; } :host:last-child > .td-data-table-heading bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-heading bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host mat-icon { height: 16px; width: 16px; font-size: 16px !important; line-height: 16px !important; } :host mat-icon.td-data-table-sort-icon { opacity: 0; -webkit-transition: -webkit-transform 0.25s; transition: -webkit-transform 0.25s; transition: transform 0.25s; transition: transform 0.25s, -webkit-transform 0.25s; } :host mat-icon.td-data-table-sort-icon.mat-asc { -webkit-transform: rotate(0deg); transform: rotate(0deg); } :host mat-icon.td-data-table-sort-icon.mat-desc { -webkit-transform: rotate(180deg); transform: rotate(180deg); } :host:hover.mat-sortable mat-icon.td-data-table-sort-icon, :host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon { opacity: 1; } html[dir=rtl] :host { text-align: right; unicode-bidi: embed; } body[dir=rtl] :host { text-align: right; unicode-bidi: embed; } [dir=rtl] :host { text-align: right; unicode-bidi: embed; } :host bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host > * { vertical-align: middle; } :host.mat-clickable { cursor: pointer; } :host.mat-clickable:focus { outline: none; } :host .td-data-table-heading { display: inline-block; position: relative; } :host mat-icon.td-data-table-sort-icon { position: absolute; top: 0px; } :host.mat-numeric { text-align: right; } html[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } :host.mat-numeric bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host.mat-numeric mat-icon.td-data-table-sort-icon { margin-left: -22px; margin-right: initial; } html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon { margin-right: -22px; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon { margin-right: -22px; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon { margin-right: -22px; unicode-bidi: embed; } :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon { margin-left: 6px; margin-right: initial; } html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } [dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon { margin-right: 6px; unicode-bidi: embed; } body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon { margin-right: 6px; unicode-bidi: embed; } [dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon { margin-right: 6px; unicode-bidi: embed; } :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } /*# sourceMappingURL=data-table-column.component.css.map */ "],
            template: "<span #columnContent class=\"td-data-table-heading\"> <mat-icon  class=\"td-data-table-sort-icon\"  *ngIf=\"sortable && numeric\" [class.mat-asc]=\"(!(active) || isAscending())\" [class.mat-desc]=\"(active && isDescending())\"> arrow_upward </mat-icon> <span> <ng-content></ng-content> </span> <mat-icon  class=\"td-data-table-sort-icon\"  *ngIf=\"sortable && !numeric\" [class.mat-asc]=\"(!(active) || isAscending())\" [class.mat-desc]=\"(active && isDescending())\"> arrow_upward </mat-icon> </span> ",
        }),
        __metadata("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer2])
    ], TdDataTableColumnComponent);
    return TdDataTableColumnComponent;
}());

var TdDataTableCellComponent = (function () {
    function TdDataTableCellComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         */
        this.numeric = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
    }
    Object.defineProperty(TdDataTableCellComponent.prototype, "bindNumeric", {
        get: function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        _angular_core.Input('numeric'),
        __metadata("design:type", Boolean)
    ], TdDataTableCellComponent.prototype, "numeric", void 0);
    __decorate([
        _angular_core.HostBinding('class.mat-numeric'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdDataTableCellComponent.prototype, "bindNumeric", null);
    TdDataTableCellComponent = __decorate([
        _angular_core.Component({
            /* tslint:disable-next-line */
            selector: 'td[td-data-table-cell]',
            styles: [":host { vertical-align: middle; text-align: left; padding: 0; } html[dir=rtl] :host { text-align: right; unicode-bidi: embed; } body[dir=rtl] :host { text-align: right; unicode-bidi: embed; } [dir=rtl] :host { text-align: right; unicode-bidi: embed; } :host bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host > .td-data-table-cell-content-wrapper { padding: 0 28px 0 28px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host > .td-data-table-cell-content-wrapper.td-data-table-cell-numeric { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host:first-child > .td-data-table-cell-content-wrapper { padding-left: 24px; padding-right: initial; } html[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-left: initial; unicode-bidi: embed; } body[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-left: initial; unicode-bidi: embed; } [dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-left: initial; unicode-bidi: embed; } :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-right: 24px; unicode-bidi: embed; } body[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-right: 24px; unicode-bidi: embed; } [dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-right: 24px; unicode-bidi: embed; } :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-cell-content-wrapper { padding-left: 28px; padding-right: 24px; } html[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-left: 24px; unicode-bidi: embed; } body[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-left: 24px; unicode-bidi: embed; } [dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-left: 24px; unicode-bidi: embed; } :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-right: 28px; unicode-bidi: embed; } body[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-right: 28px; unicode-bidi: embed; } [dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-right: 28px; unicode-bidi: embed; } :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host > * { vertical-align: middle; } :host.mat-clickable { cursor: pointer; } :host.mat-clickable:focus { outline: none; } :host.mat-numeric { text-align: right; } html[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } :host.mat-numeric bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } /*# sourceMappingURL=data-table-cell.component.css.map */ "],
            template: "<div class=\"td-data-table-cell-content-wrapper\" [class.td-data-table-cell-numeric]=\"numeric\"> <ng-content></ng-content> </div>",
        }),
        __metadata("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer2])
    ], TdDataTableCellComponent);
    return TdDataTableCellComponent;
}());

var TdDataTableTableComponent = (function () {
    function TdDataTableTableComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
    }
    TdDataTableTableComponent = __decorate([
        _angular_core.Component({
            /* tslint:disable-next-line */
            selector: 'table[td-data-table]',
            styles: [":host { width: 100%; position: relative; border-spacing: 0; overflow: hidden; border-collapse: collapse; } /*# sourceMappingURL=data-table-table.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        __metadata("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer2])
    ], TdDataTableTableComponent);
    return TdDataTableTableComponent;
}());

var TdDataTableService = (function () {
    function TdDataTableService() {
    }
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     */
    TdDataTableService.prototype.filterData = function (data, searchTerm, ignoreCase, excludedColumns) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        var filter$$1 = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter$$1) {
            data = data.filter(function (item) {
                var res = Object.keys(item).find(function (key) {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        var preItemValue = ('' + item[key]);
                        var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter$$1) > -1;
                    }
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
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
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
    TdDataTableService = __decorate([
        _angular_core.Injectable()
    ], TdDataTableService);
    return TdDataTableService;
}());
function DATA_TABLE_PROVIDER_FACTORY(parent) {
    return parent || new TdDataTableService();
}
var DATA_TABLE_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDataTableService,
    deps: [[new _angular_core.Optional(), new _angular_core.SkipSelf(), TdDataTableService]],
    useFactory: DATA_TABLE_PROVIDER_FACTORY,
};

var TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableColumnRowComponent,
    TdDataTableTableComponent,
];
var CovalentDataTableModule = (function () {
    function CovalentDataTableModule() {
    }
    CovalentDataTableModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_material.MatCheckboxModule,
                _angular_material.MatTooltipModule,
                _angular_material.MatIconModule,
                _angular_material.MatPseudoCheckboxModule,
            ],
            declarations: [
                TD_DATA_TABLE,
            ],
            exports: [
                TD_DATA_TABLE,
            ],
            providers: [
                DATA_TABLE_PROVIDER,
            ],
        })
    ], CovalentDataTableModule);
    return CovalentDataTableModule;
}());

var TdDialogTitleDirective = (function () {
    function TdDialogTitleDirective() {
    }
    TdDialogTitleDirective = __decorate([
        _angular_core.Directive({ selector: 'td-dialog-title' })
    ], TdDialogTitleDirective);
    return TdDialogTitleDirective;
}());
var TdDialogContentDirective = (function () {
    function TdDialogContentDirective() {
    }
    TdDialogContentDirective = __decorate([
        _angular_core.Directive({ selector: 'td-dialog-content' })
    ], TdDialogContentDirective);
    return TdDialogContentDirective;
}());
var TdDialogActionsDirective = (function () {
    function TdDialogActionsDirective() {
    }
    TdDialogActionsDirective = __decorate([
        _angular_core.Directive({ selector: 'td-dialog-actions' })
    ], TdDialogActionsDirective);
    return TdDialogActionsDirective;
}());
var TdDialogComponent = (function () {
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
    __decorate([
        _angular_core.ContentChildren(TdDialogTitleDirective),
        __metadata("design:type", _angular_core.QueryList)
    ], TdDialogComponent.prototype, "dialogTitle", void 0);
    __decorate([
        _angular_core.ContentChildren(TdDialogContentDirective),
        __metadata("design:type", _angular_core.QueryList)
    ], TdDialogComponent.prototype, "dialogContent", void 0);
    __decorate([
        _angular_core.ContentChildren(TdDialogActionsDirective),
        __metadata("design:type", _angular_core.QueryList)
    ], TdDialogComponent.prototype, "dialogActions", void 0);
    TdDialogComponent = __decorate([
        _angular_core.Component({
            selector: 'td-dialog',
            template: "<div class=\"td-dialog-wrapper\"> <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\"> <ng-content select=\"td-dialog-title\"></ng-content> </h3> <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\"> <ng-content select=\"td-dialog-content\"></ng-content> </div> <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\"> <span class=\"td-dialog-spacer\"></span> <ng-content select=\"td-dialog-actions\"></ng-content> </div> </div>",
            styles: [".td-dialog-title { margin-top: 0; margin-bottom: 20px; } .td-dialog-content { margin-bottom: 16px; } .td-dialog-actions { position: relative; top: 16px; left: 16px; } ::ng-deep [dir='rtl'] .td-dialog-actions { right: 16px; left: auto; } :host { display: block; } :host .td-dialog-actions { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } :host .td-dialog-actions .td-dialog-spacer { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-dialog-actions ::ng-deep button { text-transform: uppercase; margin-left: 8px; padding-left: 8px; padding-right: 8px; min-width: 64px; } [dir='rtl'] :host .td-dialog-actions ::ng-deep button { margin-right: 8px; margin-left: inherit; } /*# sourceMappingURL=dialog.component.css.map */ "],
        })
    ], TdDialogComponent);
    return TdDialogComponent;
}());

var TdAlertDialogComponent = (function () {
    function TdAlertDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    TdAlertDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    TdAlertDialogComponent = __decorate([
        _angular_core.Component({
            selector: 'td-alert-dialog',
            template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content> <span class=\"td-dialog-message\">{{message}}</span> </td-dialog-content> <td-dialog-actions> <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button> </td-dialog-actions> </td-dialog>",
            styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } /*# sourceMappingURL=alert-dialog.component.css.map */ "],
        }),
        __metadata("design:paramtypes", [_angular_material.MatDialogRef])
    ], TdAlertDialogComponent);
    return TdAlertDialogComponent;
}());

var TdConfirmDialogComponent = (function () {
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
    TdConfirmDialogComponent = __decorate([
        _angular_core.Component({
            selector: 'td-confirm-dialog',
            template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content> <span class=\"td-dialog-message\">{{message}}</span> </td-dialog-content> <td-dialog-actions> <button mat-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button mat-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
            styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } /*# sourceMappingURL=confirm-dialog.component.css.map */ "],
        }),
        __metadata("design:paramtypes", [_angular_material.MatDialogRef])
    ], TdConfirmDialogComponent);
    return TdConfirmDialogComponent;
}());

var TdPromptDialogComponent = (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdPromptDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // focus input once everything is rendered and good to go
        Promise.resolve().then(function () {
            _this._input.nativeElement.focus();
        });
    };
    /**
     * Method executed when input is focused
     * Selects all text
     */
    TdPromptDialogComponent.prototype.handleInputFocus = function () {
        this._input.nativeElement.select();
    };
    TdPromptDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(undefined);
    };
    TdPromptDialogComponent.prototype.accept = function () {
        this._dialogRef.close(this.value);
    };
    __decorate([
        _angular_core.ViewChild('input'),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdPromptDialogComponent.prototype, "_input", void 0);
    TdPromptDialogComponent = __decorate([
        _angular_core.Component({
            selector: 'td-prompt-dialog',
            template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content> <span class=\"td-dialog-message\">{{message}}</span> <form #form=\"ngForm\" novalidate> <div class=\"td-dialog-input-wrapper\"> <mat-form-field class=\"td-dialog-input\"> <input matInput #input (focus)=\"handleInputFocus()\" (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\" [(ngModel)]=\"value\" name=\"value\" required/> </mat-form-field> </div> </form> </td-dialog-content> <td-dialog-actions> <button mat-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button mat-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" [disabled]=\"!form.valid\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
            styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } .td-dialog-input-wrapper { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } .td-dialog-input-wrapper .td-dialog-input { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-sizing: border-box; box-sizing: border-box; } /*# sourceMappingURL=prompt-dialog.component.css.map */ "],
        }),
        __metadata("design:paramtypes", [_angular_material.MatDialogRef])
    ], TdPromptDialogComponent);
    return TdPromptDialogComponent;
}());

var TdDialogService = (function () {
    function TdDialogService(_dialogService) {
        this._dialogService = _dialogService;
    }
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     */
    TdDialogService.prototype.open = function (component, config) {
        return this._dialogService.open(component, config);
    };
    /**
     * Wrapper function over the closeAll() method in MatDialog.
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
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     */
    TdDialogService.prototype.openAlert = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
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
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     */
    TdDialogService.prototype.openConfirm = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
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
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     */
    TdDialogService.prototype.openPrompt = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
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
        var dialogConfig = new _angular_material.MatDialogConfig();
        dialogConfig.viewContainerRef = config.viewContainerRef;
        dialogConfig.disableClose = config.disableClose;
        return dialogConfig;
    };
    TdDialogService = __decorate([
        _angular_core.Injectable(),
        __metadata("design:paramtypes", [_angular_material.MatDialog])
    ], TdDialogService);
    return TdDialogService;
}());
function DIALOG_PROVIDER_FACTORY(parent, dialog) {
    return parent || new TdDialogService(dialog);
}
var DIALOG_PROVIDER = {
    // If there is already service available, use that. Otherwise, provide a new one.
    provide: TdDialogService,
    deps: [[new _angular_core.Optional(), new _angular_core.SkipSelf(), TdDialogService], _angular_material.MatDialog],
    useFactory: DIALOG_PROVIDER_FACTORY,
};

var TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
var TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
var CovalentDialogsModule = (function () {
    function CovalentDialogsModule() {
    }
    CovalentDialogsModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_forms.FormsModule,
                _angular_common.CommonModule,
                _angular_material.MatDialogModule,
                _angular_material.MatInputModule,
                _angular_material.MatButtonModule,
            ],
            declarations: [
                TD_DIALOGS,
            ],
            exports: [
                TD_DIALOGS,
            ],
            providers: [
                DIALOG_PROVIDER,
            ],
            entryComponents: [
                TD_DIALOGS_ENTRY_COMPONENTS,
            ],
        })
    ], CovalentDialogsModule);
    return CovalentDialogsModule;
}());

var TdExpansionPanelHeaderDirective = (function (_super) {
    __extends(TdExpansionPanelHeaderDirective, _super);
    function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelHeaderDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-expansion-panel-header]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdExpansionPanelHeaderDirective);
    return TdExpansionPanelHeaderDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdExpansionPanelLabelDirective = (function (_super) {
    __extends(TdExpansionPanelLabelDirective, _super);
    function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelLabelDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-expansion-panel-label]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdExpansionPanelLabelDirective);
    return TdExpansionPanelLabelDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdExpansionPanelSublabelDirective = (function (_super) {
    __extends(TdExpansionPanelSublabelDirective, _super);
    function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelSublabelDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-expansion-panel-sublabel]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdExpansionPanelSublabelDirective);
    return TdExpansionPanelSublabelDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdExpansionPanelSummaryComponent = (function () {
    function TdExpansionPanelSummaryComponent() {
    }
    TdExpansionPanelSummaryComponent = __decorate([
        _angular_core.Component({
            selector: 'td-expansion-summary',
            template: '<ng-content></ng-content>',
        })
    ], TdExpansionPanelSummaryComponent);
    return TdExpansionPanelSummaryComponent;
}());
var TdExpansionPanelBase = (function () {
    function TdExpansionPanelBase() {
    }
    return TdExpansionPanelBase;
}());
/* tslint:disable-next-line */
var _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
var TdExpansionPanelComponent = (function (_super) {
    __extends(TdExpansionPanelComponent, _super);
    function TdExpansionPanelComponent(_renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._expand = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        _this.expanded = new _angular_core.EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        _this.collapsed = new _angular_core.EventEmitter();
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
        return _this;
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
            this._setExpand(_angular_cdk_coercion.coerceBooleanProperty(expand));
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
    /** Method executed when the disabled value changes */
    TdExpansionPanelComponent.prototype.onDisabledChange = function (v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    };
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     */
    TdExpansionPanelComponent.prototype._setExpand = function (newExpand) {
        if (this.disabled) {
            return false;
        }
        if (this._expand !== newExpand) {
            this._expand = newExpand;
            if (newExpand) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
                this._onExpanded();
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
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
    __decorate([
        _angular_core.ContentChild(TdExpansionPanelHeaderDirective),
        __metadata("design:type", TdExpansionPanelHeaderDirective)
    ], TdExpansionPanelComponent.prototype, "expansionPanelHeader", void 0);
    __decorate([
        _angular_core.ContentChild(TdExpansionPanelLabelDirective),
        __metadata("design:type", TdExpansionPanelLabelDirective)
    ], TdExpansionPanelComponent.prototype, "expansionPanelLabel", void 0);
    __decorate([
        _angular_core.ContentChild(TdExpansionPanelSublabelDirective),
        __metadata("design:type", TdExpansionPanelSublabelDirective)
    ], TdExpansionPanelComponent.prototype, "expansionPanelSublabel", void 0);
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", String)
    ], TdExpansionPanelComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", String)
    ], TdExpansionPanelComponent.prototype, "sublabel", void 0);
    __decorate([
        _angular_core.Input('expand'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdExpansionPanelComponent.prototype, "expand", null);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdExpansionPanelComponent.prototype, "expanded", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdExpansionPanelComponent.prototype, "collapsed", void 0);
    TdExpansionPanelComponent = __decorate([
        _angular_core.Component({
            selector: 'td-expansion-panel',
            styles: [":host { display: block; } :host .td-expansion-panel-header { position: relative; outline: none; } :host .td-expansion-panel-header:focus:not(.mat-disabled), :host .td-expansion-panel-header:hover:not(.mat-disabled) { cursor: pointer; } :host .td-expansion-panel-header .td-expansion-panel-header-content { height: 48px; padding: 0 16px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; } :host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label, :host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-panel-spacer { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } .td-expansion-label, .td-expansion-sublabel { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-right: 5px; } ::ng-deep [dir='rtl'] .td-expansion-label, ::ng-deep [dir='rtl'] .td-expansion-sublabel { margin-left: 5px; margin-right: inherit; } /*# sourceMappingURL=expansion-panel.component.css.map */ "],
            template: "<div class=\"td-expansion-panel-header\" [class.mat-disabled]=\"disabled\" matRipple [matRippleDisabled]=\"disabled || disableRipple\" [tabIndex]=\"disabled? -1 : 0\" (keydown.enter)=\"clickEvent()\" (click)=\"clickEvent()\"> <ng-template [cdkPortalHost]=\"expansionPanelHeader\"></ng-template> <div class=\"td-expansion-panel-header-content\" [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\"> <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\"> <ng-template [cdkPortalHost]=\"expansionPanelLabel\"></ng-template> <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template> </div> <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\"> <ng-template [cdkPortalHost]=\"expansionPanelSublabel\"></ng-template> <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template> </div> <span class=\"td-expansion-panel-spacer\"></span> <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon> </div> </div> <div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\"> <ng-content></ng-content> </div> <div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\"> <ng-content select=\"td-expansion-summary\"></ng-content> </div> ",
            inputs: ['disabled', 'disableRipple'],
            animations: [
                TdCollapseAnimation(),
                TdRotateAnimation({ anchor: 'tdRotate' }),
            ],
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdExpansionPanelComponent);
    return TdExpansionPanelComponent;
}(_TdExpansionPanelMixinBase));

var TdExpansionPanelGroupComponent = (function () {
    function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    TdExpansionPanelGroupComponent = __decorate([
        _angular_core.Component({
            selector: 'td-expansion-panel-group',
            styles: [" /*# sourceMappingURL=expansion-panel-group.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdExpansionPanelGroupComponent);
    return TdExpansionPanelGroupComponent;
}());

var TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
var CovalentExpansionPanelModule = (function () {
    function CovalentExpansionPanelModule() {
    }
    CovalentExpansionPanelModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_material.MatRippleModule,
                _angular_material.MatIconModule,
                _angular_cdk_portal.PortalModule,
            ],
            declarations: [
                TD_EXPANSION_PANEL,
            ],
            exports: [
                TD_EXPANSION_PANEL,
            ],
        })
    ], CovalentExpansionPanelModule);
    return CovalentExpansionPanelModule;
}());

var TdFileSelectDirective = (function () {
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
            this._multiple = _angular_cdk_coercion.coerceBooleanProperty(multiple);
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
    __decorate([
        _angular_core.Input('multiple'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdFileSelectDirective.prototype, "multiple", null);
    __decorate([
        _angular_core.Output('fileSelect'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdFileSelectDirective.prototype, "onFileSelect", void 0);
    __decorate([
        _angular_core.HostBinding('attr.multiple'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TdFileSelectDirective.prototype, "multipleBinding", null);
    __decorate([
        _angular_core.HostListener('change', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TdFileSelectDirective.prototype, "onChange", null);
    TdFileSelectDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdFileSelect]',
        }),
        __param(0, _angular_core.Optional()), __param(0, _angular_core.Host()),
        __metadata("design:paramtypes", [_angular_forms.NgModel])
    ], TdFileSelectDirective);
    return TdFileSelectDirective;
}());

var TdFileDropBase = (function () {
    function TdFileDropBase() {
    }
    return TdFileDropBase;
}());
/* tslint:disable-next-line */
var _TdFileDropMixinBase = mixinDisabled(TdFileDropBase);
var TdFileDropDirective = (function (_super) {
    __extends(TdFileDropDirective, _super);
    function TdFileDropDirective(_renderer, _element) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._element = _element;
        _this._multiple = false;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         */
        _this.onFileDrop = new _angular_core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be dropped at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: function (multiple) {
            this._multiple = _angular_cdk_coercion.coerceBooleanProperty(multiple);
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
            return this.disabled ? '' : undefined;
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
        if (!this.disabled) {
            var transfer = event.dataTransfer;
            var files = transfer.files;
            if (files.length) {
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.onFileDrop.emit(value);
            }
        }
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
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
        if (this.disabled || (!this._multiple &&
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
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     */
    TdFileDropDirective.prototype.onDragLeave = function (event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
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
    __decorate([
        _angular_core.Input('multiple'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdFileDropDirective.prototype, "multiple", null);
    __decorate([
        _angular_core.Output('fileDrop'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdFileDropDirective.prototype, "onFileDrop", void 0);
    __decorate([
        _angular_core.HostBinding('attr.multiple'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TdFileDropDirective.prototype, "multipleBinding", null);
    __decorate([
        _angular_core.HostBinding('attr.disabled'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TdFileDropDirective.prototype, "disabledBinding", null);
    __decorate([
        _angular_core.HostListener('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TdFileDropDirective.prototype, "onDrop", null);
    __decorate([
        _angular_core.HostListener('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TdFileDropDirective.prototype, "onDragOver", null);
    __decorate([
        _angular_core.HostListener('dragenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TdFileDropDirective.prototype, "onDragEnter", null);
    __decorate([
        _angular_core.HostListener('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TdFileDropDirective.prototype, "onDragLeave", null);
    TdFileDropDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdFileDrop]',
            inputs: ['disabled'],
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2, _angular_core.ElementRef])
    ], TdFileDropDirective);
    return TdFileDropDirective;
}(_TdFileDropMixinBase));

var noop$3 = function () {
    // empty method
};
var FILE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TdFileInputComponent; }),
    multi: true,
};
var TdFileInputLabelDirective = (function (_super) {
    __extends(TdFileInputLabelDirective, _super);
    function TdFileInputLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdFileInputLabelDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-file-input-label]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdFileInputLabelDirective);
    return TdFileInputLabelDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdFileInputBase = (function () {
    function TdFileInputBase() {
    }
    return TdFileInputBase;
}());
/* tslint:disable-next-line */
var _TdFileInputMixinBase = mixinDisabled(TdFileInputBase);
var TdFileInputComponent = (function (_super) {
    __extends(TdFileInputComponent, _super);
    function TdFileInputComponent(_renderer, _changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._changeDetectorRef = _changeDetectorRef;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        _this._value = undefined;
        _this._multiple = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        _this.onSelect = new _angular_core.EventEmitter();
        _this.onChange = function (_) { return noop$3; };
        _this.onTouched = function () { return noop$3; };
        return _this;
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
            this._multiple = _angular_cdk_coercion.coerceBooleanProperty(multiple);
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
        this._renderer.setProperty(this.inputElement, 'value', '');
    };
    /** Method executed when the disabled value changes */
    TdFileInputComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.clear();
        }
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
    __decorate([
        _angular_core.ViewChild('fileInput'),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdFileInputComponent.prototype, "_inputElement", void 0);
    __decorate([
        _angular_core.Input('color'),
        __metadata("design:type", String)
    ], TdFileInputComponent.prototype, "color", void 0);
    __decorate([
        _angular_core.Input('multiple'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdFileInputComponent.prototype, "multiple", null);
    __decorate([
        _angular_core.Input('accept'),
        __metadata("design:type", String)
    ], TdFileInputComponent.prototype, "accept", void 0);
    __decorate([
        _angular_core.Output('select'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdFileInputComponent.prototype, "onSelect", void 0);
    TdFileInputComponent = __decorate([
        _angular_core.Component({
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            providers: [FILE_INPUT_CONTROL_VALUE_ACCESSOR],
            selector: 'td-file-input',
            inputs: ['disabled'],
            styles: [":host { /** * Class that is added ondragenter by the [TdFileDrop] directive. */ } :host .td-file-input { padding-left: 8px; padding-right: 8px; } :host input.td-file-input-hidden { display: none; } :host .drop-zone { border-radius: 3px; } :host .drop-zone * { pointer-events: none; } /*# sourceMappingURL=file-input.component.css.map */ "],
            template: "<div> <button mat-raised-button class=\"td-file-input\" type=\"button\" [color]=\"color\"  [multiple]=\"multiple\"  [disabled]=\"disabled\" (keyup.enter)=\"fileInput.click()\" (click)=\"fileInput.click()\" (fileDrop)=\"handleSelect($event)\" tdFileDrop> <ng-content></ng-content> </button> <input #fileInput  class=\"td-file-input-hidden\"  type=\"file\" [attr.accept]=\"accept\"                 (fileSelect)=\"handleSelect($event)\" [multiple]=\"multiple\"  [disabled]=\"disabled\" tdFileSelect> </div>",
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2, _angular_core.ChangeDetectorRef])
    ], TdFileInputComponent);
    return TdFileInputComponent;
}(_TdFileInputMixinBase));

var noop$2 = function () {
    // empty method
};
var TdFileUploadBase = (function () {
    function TdFileUploadBase() {
    }
    return TdFileUploadBase;
}());
/* tslint:disable-next-line */
var _TdFileUploadMixinBase = mixinDisabled(TdFileUploadBase);
var FILE_UPLOAD_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TdFileUploadComponent; }),
    multi: true,
};
var TdFileUploadComponent = (function (_super) {
    __extends(TdFileUploadComponent, _super);
    function TdFileUploadComponent(_changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        _this._value = undefined;
        _this._multiple = false;
        _this._required = false;
        /**
         * defaultColor?: string
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         */
        _this.defaultColor = 'primary';
        /**
         * activeColor?: string
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         */
        _this.activeColor = 'accent';
        /**
         * cancelColor?: string
         * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
         */
        _this.cancelColor = 'warn';
        /**
         * select?: function
         * Event emitted when a file is selected.
         * Emits a [File | FileList] object.
         */
        _this.onSelect = new _angular_core.EventEmitter();
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        _this.onUpload = new _angular_core.EventEmitter();
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         */
        _this.onCancel = new _angular_core.EventEmitter();
        _this.onChange = function (_) { return noop$2; };
        _this.onTouched = function () { return noop$2; };
        return _this;
    }
    Object.defineProperty(TdFileUploadComponent.prototype, "value", {
        // get/set accessor (needed for ControlValueAccessor)
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "files", {
        /**
         * @deprecated use value property instead
         */
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         */
        set: function (multiple) {
            this._multiple = _angular_cdk_coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         */
        set: function (required) {
            this._required = _angular_cdk_coercion.coerceBooleanProperty(required);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when upload button is clicked.
     */
    TdFileUploadComponent.prototype.uploadPressed = function () {
        if (this.value) {
            this.onUpload.emit(this.value);
        }
    };
    /**
     * Method executed when a file is selected.
     */
    TdFileUploadComponent.prototype.handleSelect = function (value) {
        this.value = value;
        this.onSelect.emit(value);
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    TdFileUploadComponent.prototype.cancel = function () {
        this.value = undefined;
        this.onCancel.emit(undefined);
        // check if the file input is rendered before clearing it
        if (this.fileInput) {
            this.fileInput.clear();
        }
    };
    /** Method executed when the disabled value changes */
    TdFileUploadComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.cancel();
        }
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdFileUploadComponent.prototype.writeValue = function (value) {
        this.value = value;
        this._changeDetectorRef.markForCheck();
    };
    TdFileUploadComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TdFileUploadComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        _angular_core.ViewChild(TdFileInputComponent),
        __metadata("design:type", TdFileInputComponent)
    ], TdFileUploadComponent.prototype, "fileInput", void 0);
    __decorate([
        _angular_core.ContentChild(TdFileInputLabelDirective),
        __metadata("design:type", TdFileInputLabelDirective)
    ], TdFileUploadComponent.prototype, "inputLabel", void 0);
    __decorate([
        _angular_core.Input('defaultColor'),
        __metadata("design:type", String)
    ], TdFileUploadComponent.prototype, "defaultColor", void 0);
    __decorate([
        _angular_core.Input('activeColor'),
        __metadata("design:type", String)
    ], TdFileUploadComponent.prototype, "activeColor", void 0);
    __decorate([
        _angular_core.Input('cancelColor'),
        __metadata("design:type", String)
    ], TdFileUploadComponent.prototype, "cancelColor", void 0);
    __decorate([
        _angular_core.Input('multiple'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdFileUploadComponent.prototype, "multiple", null);
    __decorate([
        _angular_core.Input('required'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdFileUploadComponent.prototype, "required", null);
    __decorate([
        _angular_core.Input('accept'),
        __metadata("design:type", String)
    ], TdFileUploadComponent.prototype, "accept", void 0);
    __decorate([
        _angular_core.Output('select'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdFileUploadComponent.prototype, "onSelect", void 0);
    __decorate([
        _angular_core.Output('upload'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdFileUploadComponent.prototype, "onUpload", void 0);
    __decorate([
        _angular_core.Output('cancel'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdFileUploadComponent.prototype, "onCancel", void 0);
    TdFileUploadComponent = __decorate([
        _angular_core.Component({
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            providers: [FILE_UPLOAD_CONTROL_VALUE_ACCESSOR],
            selector: 'td-file-upload',
            inputs: ['disabled'],
            styles: [".td-file-upload { padding-left: 8px; padding-right: 8px; } .td-file-upload-cancel { height: 24px; width: 24px; position: relative; top: 24px; left: -12px; } ::ng-deep [dir='rtl'] .td-file-upload-cancel { right: -12px; left: 0; } .td-file-upload-cancel mat-icon { border-radius: 12px; vertical-align: baseline; } /** * Class that is added ondragenter by the [TdFileDrop] directive. */ .drop-zone { border-radius: 3px; } .drop-zone * { pointer-events: none; } /*# sourceMappingURL=file-upload.component.css.map */ "],
            template: "<td-file-input *ngIf=\"!value\" [(ngModel)]=\"value\" [multiple]=\"multiple\" [disabled]=\"disabled\" [accept]=\"accept\" [color]=\"defaultColor\" (select)=\"handleSelect($event)\"> <ng-template [cdkPortalHost]=\"inputLabel\" [ngIf]=\"true\"></ng-template> </td-file-input> <div *ngIf=\"value\"> <button #fileUpload class=\"td-file-upload\" mat-raised-button type=\"button\" [color]=\"activeColor\" (keyup.delete)=\"cancel()\" (keyup.backspace)=\"cancel()\" (keyup.escape)=\"cancel()\" (click)=\"uploadPressed()\">  <ng-content></ng-content> </button> <button mat-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\"             (click)=\"cancel()\"> <mat-icon>cancel</mat-icon> </button> </div>",
        }),
        __metadata("design:paramtypes", [_angular_core.ChangeDetectorRef])
    ], TdFileUploadComponent);
    return TdFileUploadComponent;
}(_TdFileUploadMixinBase));

var TdFileService = (function () {
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
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * Will be depricated when angular fixes [Http] to allow [FormData] as body.
     */
    TdFileService.prototype.upload = function (options) {
        var _this = this;
        return new rxjs_Observable.Observable(function (subscriber) {
            var xhr = new XMLHttpRequest();
            var formData = new FormData();
            if (options.file !== undefined) {
                formData.append('file', options.file);
            }
            else if (options.formData !== undefined) {
                formData = options.formData;
            }
            else {
                return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
            }
            xhr.upload.onprogress = function (event) {
                var progress = 0;
                if (event.lengthComputable) {
                    progress = Math.round(event.loaded / event.total * 100);
                }
                _this._progressSubject.next(progress);
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        subscriber.next(xhr.response);
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
    TdFileService = __decorate([
        _angular_core.Injectable(),
        __metadata("design:paramtypes", [])
    ], TdFileService);
    return TdFileService;
}());

var TD_FILE = [
    TdFileSelectDirective,
    TdFileDropDirective,
    TdFileUploadComponent,
    TdFileInputComponent,
    TdFileInputLabelDirective,
];
var CovalentFileModule = (function () {
    function CovalentFileModule() {
    }
    CovalentFileModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_forms.FormsModule,
                _angular_common.CommonModule,
                _angular_material.MatIconModule,
                _angular_material.MatButtonModule,
                _angular_cdk_portal.PortalModule,
            ],
            declarations: [
                TD_FILE,
            ],
            exports: [
                TD_FILE,
            ],
            providers: [
                TdFileService,
            ],
        })
    ], CovalentFileModule);
    return CovalentFileModule;
}());

var TdJsonFormatterComponent = (function () {
    function TdJsonFormatterComponent(_changeDetectorRef, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._open = false;
        this._levelsOpen = 0;
    }
    TdJsonFormatterComponent_1 = TdJsonFormatterComponent;
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
    Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
        get: function () {
            if (this._dir) {
                return this._dir.dir === 'rtl';
            }
            return false;
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
        else if (Array.isArray(value)) {
            return this.getObjectName() + ' [' + value.length + ']';
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
            if (Array.isArray(object)) {
                return 'object';
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
    /**
     * Max length for property names. Any names bigger than this get trunctated.
     */
    TdJsonFormatterComponent.KEY_MAX_LENGTH = 30;
    /**
     * Max length for preview string. Any names bigger than this get trunctated.
     */
    TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH = 80;
    /**
     * Max tooltip preview elements.
     */
    TdJsonFormatterComponent.PREVIEW_LIMIT = 5;
    __decorate([
        _angular_core.Input('levelsOpen'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdJsonFormatterComponent.prototype, "levelsOpen", null);
    __decorate([
        _angular_core.Input('key'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdJsonFormatterComponent.prototype, "key", null);
    __decorate([
        _angular_core.Input('data'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TdJsonFormatterComponent.prototype, "data", null);
    TdJsonFormatterComponent = TdJsonFormatterComponent_1 = __decorate([
        _angular_core.Component({
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            selector: 'td-json-formatter',
            styles: [":host { display: block; } .td-json-formatter-wrapper { padding-top: 2px; padding-bottom: 2px; } .td-json-formatter-wrapper .td-key { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } .td-json-formatter-wrapper .td-key.td-key-node:hover { cursor: pointer; } .td-json-formatter-wrapper .td-object-children .td-key, .td-json-formatter-wrapper .td-object-children .td-object-children { padding-left: 24px; } ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-key, ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-object-children { padding-right: 24px; padding-left: 0; } .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf, .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf { padding-left: 48px; } ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf, ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf { padding-right: 48px; padding-left: 0; } .td-json-formatter-wrapper .value { margin-left: 5px; } ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .value { padding-right: 5px; padding-left: 0; } .td-json-formatter-wrapper .value .td-empty { opacity: .5; text-decoration: line-through; } .td-json-formatter-wrapper .value .string { word-break: break-word; } .td-json-formatter-wrapper .value .date { word-break: break-word; } /*# sourceMappingURL=json-formatter.component.css.map */ "],
            template: "<div class=\"td-json-formatter-wrapper\"> <a class=\"td-key\" [class.td-key-node]=\"hasChildren()\" [class.td-key-leaf]=\"!hasChildren()\" [tabIndex]=\"isObject()? 0 : -1\" (keydown.enter)=\"toggle()\" (click)=\"toggle()\"> <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon> <span *ngIf=\"key\" class=\"key\">{{key}}:</span> <span class=\"value\"> <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\"> <span>{{getObjectName()}}</span> <span *ngIf=\"isArray()\">[{{data.length}}]</span> </span> <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span> </span> </a> <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\"> <ng-template let-key ngFor [ngForOf]=\"children\"> <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter> </ng-template> </div> </div>",
            animations: [
                TdCollapseAnimation(),
            ],
        }),
        __param(1, _angular_core.Optional()),
        __metadata("design:paramtypes", [_angular_core.ChangeDetectorRef,
            _angular_cdk_bidi.Dir])
    ], TdJsonFormatterComponent);
    return TdJsonFormatterComponent;
    var TdJsonFormatterComponent_1;
}());

var CovalentJsonFormatterModule = (function () {
    function CovalentJsonFormatterModule() {
    }
    CovalentJsonFormatterModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_material.MatTooltipModule,
                _angular_material.MatIconModule,
            ],
            declarations: [
                TdJsonFormatterComponent,
            ],
            exports: [
                TdJsonFormatterComponent,
            ],
        })
    ], CovalentJsonFormatterModule);
    return CovalentJsonFormatterModule;
}());

var TdLayoutComponent = (function () {
    function TdLayoutComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "over".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'over';
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "false".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = false;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "320px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '320px';
    }
    Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
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
    TdLayoutComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
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
    __decorate([
        _angular_core.ViewChild(_angular_material.MatSidenav),
        __metadata("design:type", _angular_material.MatSidenav)
    ], TdLayoutComponent.prototype, "sidenav", void 0);
    __decorate([
        _angular_core.Input('mode'),
        __metadata("design:type", String)
    ], TdLayoutComponent.prototype, "mode", void 0);
    __decorate([
        _angular_core.Input('opened'),
        __metadata("design:type", Boolean)
    ], TdLayoutComponent.prototype, "opened", void 0);
    __decorate([
        _angular_core.Input('sidenavWidth'),
        __metadata("design:type", String)
    ], TdLayoutComponent.prototype, "sidenavWidth", void 0);
    TdLayoutComponent = __decorate([
        _angular_core.Component({
            selector: 'td-layout',
            styles: [":host { display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host ::ng-deep > mat-sidenav-container > mat-sidenav { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; } /*# sourceMappingURL=layout.component.css.map */ "],
            template: "<mat-sidenav-container fullscreen> <mat-sidenav #sidenav class=\"td-layout-sidenav\" [mode]=\"mode\" [opened]=\"opened\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\" [disableClose]=\"disableClose\"> <ng-content select=\"td-navigation-drawer\"></ng-content> <ng-content select=\"[td-sidenav-content]\"></ng-content> </mat-sidenav> <ng-content></ng-content> </mat-sidenav-container> ",
        })
    ], TdLayoutComponent);
    return TdLayoutComponent;
}());

var LayoutToggle = (function () {
    function LayoutToggle(_layout, _renderer, _elementRef) {
        this._layout = _layout;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._initialized = false;
        this._disabled = false;
        this._hideWhenOpened = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
    }
    Object.defineProperty(LayoutToggle.prototype, "disabled", {
        set: function (disabled) {
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
        /**
         * hideWhenOpened?: boolean
         * When this is set to true, the host will be hidden when
         * the sidenav is opened.
         */
        set: function (hideWhenOpened) {
            this._hideWhenOpened = hideWhenOpened;
            if (this._initialized) {
                this._toggleVisibility();
            }
        },
        enumerable: true,
        configurable: true
    });
    LayoutToggle.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._initialized = true;
        this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(function () {
            _this._toggleVisibility();
        });
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
        // Force the view to be toggled again since the animation may not be triggered
        // properly if its a child route
        Promise.resolve().then(function () {
            _this._layout.sidenav.toggle(_this._layout.opened);
        });
    };
    LayoutToggle.prototype.ngOnDestroy = function () {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    };
    /**
     * Listens to host click event to trigger the layout toggle
     */
    LayoutToggle.prototype.clickListener = function (event) {
        event.preventDefault();
        if (!this._disabled) {
            this.onClick();
        }
    };
    LayoutToggle.prototype._toggleVisibility = function () {
        if (this._layout.sidenav.opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    };
    __decorate([
        _angular_core.Input('hideWhenOpened'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LayoutToggle.prototype, "hideWhenOpened", null);
    __decorate([
        _angular_core.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], LayoutToggle.prototype, "clickListener", null);
    return LayoutToggle;
}());

var TdLayoutToggleDirective = (function (_super) {
    __extends(TdLayoutToggleDirective, _super);
    function TdLayoutToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
        set: function (tdLayoutToggle) {
            this.disabled = !(tdLayoutToggle === '' || tdLayoutToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    __decorate([
        _angular_core.Input('tdLayoutToggle'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutToggleDirective.prototype, "tdLayoutToggle", null);
    TdLayoutToggleDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutToggle]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutComponent; }))),
        __metadata("design:paramtypes", [TdLayoutComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutToggleDirective);
    return TdLayoutToggleDirective;
}(LayoutToggle));
var TdLayoutCloseDirective = (function (_super) {
    __extends(TdLayoutCloseDirective, _super);
    function TdLayoutCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
        set: function (tdLayoutClose) {
            this.disabled = !(tdLayoutClose === '' || tdLayoutClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    __decorate([
        _angular_core.Input('tdLayoutClose'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutCloseDirective.prototype, "tdLayoutClose", null);
    TdLayoutCloseDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutClose]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutComponent; }))),
        __metadata("design:paramtypes", [TdLayoutComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutCloseDirective);
    return TdLayoutCloseDirective;
}(LayoutToggle));
var TdLayoutOpenDirective = (function (_super) {
    __extends(TdLayoutOpenDirective, _super);
    function TdLayoutOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
        set: function (tdLayoutOpen) {
            this.disabled = !(tdLayoutOpen === '' || tdLayoutOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    __decorate([
        _angular_core.Input('tdLayoutOpen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutOpenDirective.prototype, "tdLayoutClose", null);
    TdLayoutOpenDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutOpen]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutComponent; }))),
        __metadata("design:paramtypes", [TdLayoutComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutOpenDirective);
    return TdLayoutOpenDirective;
}(LayoutToggle));

var TdLayoutNavComponent = (function () {
    function TdLayoutNavComponent(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLayoutNavComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    __decorate([
        _angular_core.Input('toolbarTitle'),
        __metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "toolbarTitle", void 0);
    __decorate([
        _angular_core.Input('icon'),
        __metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "icon", void 0);
    __decorate([
        _angular_core.Input('logo'),
        __metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "logo", void 0);
    __decorate([
        _angular_core.Input('color'),
        __metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "color", void 0);
    __decorate([
        _angular_core.Input('navigationRoute'),
        __metadata("design:type", String)
    ], TdLayoutNavComponent.prototype, "navigationRoute", void 0);
    TdLayoutNavComponent = __decorate([
        _angular_core.Component({
            selector: 'td-layout-nav',
            styles: [".td-menu-button { margin-left: 0px; } ::ng-deep [dir='rtl'] .td-menu-button { margin-right: 0px; margin-left: 6px; } :host { display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host .td-layout-nav-wrapper { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; } :host .td-layout-nav-wrapper .td-layout-nav-toolbar-content { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host .td-layout-nav-wrapper .td-layout-nav-content { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } /*# sourceMappingURL=layout-nav.component.css.map */ "],
            template: "<div class=\"td-layout-nav-wrapper\"> <mat-toolbar [color]=\"color\"> <ng-content select=\"[td-menu-button]\"></ng-content> <span *ngIf=\"icon || logo || toolbarTitle\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\" class=\"td-layout-nav-toolbar-content\"> <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon> <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon> <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span> </span> <ng-content select=\"[td-toolbar-content]\"></ng-content> </mat-toolbar> <div class=\"td-layout-nav-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer\"></ng-content> </div> ",
        }),
        __param(0, _angular_core.Optional()),
        __metadata("design:paramtypes", [_angular_router.Router])
    ], TdLayoutNavComponent);
    return TdLayoutNavComponent;
}());

var TdLayoutNavListComponent = (function () {
    function TdLayoutNavListComponent(_router) {
        this._router = _router;
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
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "350px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '350px';
    }
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
    Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    __decorate([
        _angular_core.ViewChild(_angular_material.MatSidenav),
        __metadata("design:type", _angular_material.MatSidenav)
    ], TdLayoutNavListComponent.prototype, "sidenav", void 0);
    __decorate([
        _angular_core.Input('toolbarTitle'),
        __metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "toolbarTitle", void 0);
    __decorate([
        _angular_core.Input('icon'),
        __metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "icon", void 0);
    __decorate([
        _angular_core.Input('logo'),
        __metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "logo", void 0);
    __decorate([
        _angular_core.Input('color'),
        __metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "color", void 0);
    __decorate([
        _angular_core.Input('mode'),
        __metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "mode", void 0);
    __decorate([
        _angular_core.Input('opened'),
        __metadata("design:type", Boolean)
    ], TdLayoutNavListComponent.prototype, "opened", void 0);
    __decorate([
        _angular_core.Input('sidenavWidth'),
        __metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "sidenavWidth", void 0);
    __decorate([
        _angular_core.Input('navigationRoute'),
        __metadata("design:type", String)
    ], TdLayoutNavListComponent.prototype, "navigationRoute", void 0);
    TdLayoutNavListComponent = __decorate([
        _angular_core.Component({
            selector: 'td-layout-nav-list',
            styles: [":host { display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-layout-nav-list-wrapper { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } :host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host .td-layout-nav-list-wrapper .td-layout-nav-list-content { text-align: start; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } :host .td-layout-nav-list-wrapper .td-layout-nav-list-main { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; position: relative; overflow: auto; } :host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content { display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opened, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opening, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closed, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closing { -webkit-box-shadow: none; box-shadow: none; } :host ::ng-deep mat-sidenav-container.td-layout-nav-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host ::ng-deep mat-sidenav-container.td-layout-nav-list > .mat-drawer-content { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; } :host ::ng-deep mat-sidenav-container.td-layout-nav-list > mat-sidenav { -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; } /*# sourceMappingURL=layout-nav-list.component.css.map */ "],
            template: "<div class=\"td-layout-nav-list-wrapper\"> <mat-sidenav-container fullscreen class=\"td-layout-nav-list\"> <mat-sidenav #sidenav position=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\"> <mat-toolbar [color]=\"color\"> <ng-content select=\"[td-menu-button]\"></ng-content> <span *ngIf=\"icon || logo || toolbarTitle\" class=\"td-layout-nav-list-toolbar-content\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\"> <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon> <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon> <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span> </span> <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content> </mat-toolbar> <div class=\"td-layout-nav-list-content\" cdkScrollable> <ng-content select=\"[td-sidenav-content]\"></ng-content> </div> </mat-sidenav> <div class=\"td-layout-nav-list-main\"> <mat-toolbar [color]=\"color\"> <ng-content select=\"[td-toolbar-content]\"></ng-content> </mat-toolbar> <div class=\"td-layout-nav-list-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </mat-sidenav-container> </div> <ng-content select=\"td-layout-footer\"></ng-content>",
        }),
        __param(0, _angular_core.Optional()),
        __metadata("design:paramtypes", [_angular_router.Router])
    ], TdLayoutNavListComponent);
    return TdLayoutNavListComponent;
}());

var TdLayoutNavListToggleDirective = (function (_super) {
    __extends(TdLayoutNavListToggleDirective, _super);
    function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
        set: function (tdLayoutNavListToggle) {
            this.disabled = !(tdLayoutNavListToggle === '' || tdLayoutNavListToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    __decorate([
        _angular_core.Input('tdLayoutNavListToggle'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", null);
    TdLayoutNavListToggleDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutNavListToggle]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutNavListComponent; }))),
        __metadata("design:paramtypes", [TdLayoutNavListComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutNavListToggleDirective);
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
var TdLayoutNavListCloseDirective = (function (_super) {
    __extends(TdLayoutNavListCloseDirective, _super);
    function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
        set: function (tdLayoutNavListClose) {
            this.disabled = !(tdLayoutNavListClose === '' || tdLayoutNavListClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    __decorate([
        _angular_core.Input('tdLayoutNavListClose'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", null);
    TdLayoutNavListCloseDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutNavListClose]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutNavListComponent; }))),
        __metadata("design:paramtypes", [TdLayoutNavListComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutNavListCloseDirective);
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
var TdLayoutNavListOpenDirective = (function (_super) {
    __extends(TdLayoutNavListOpenDirective, _super);
    function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
        set: function (tdLayoutNavListOpen) {
            this.disabled = !(tdLayoutNavListOpen === '' || tdLayoutNavListOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    __decorate([
        _angular_core.Input('tdLayoutNavListOpen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", null);
    TdLayoutNavListOpenDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutNavListOpen]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutNavListComponent; }))),
        __metadata("design:paramtypes", [TdLayoutNavListComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutNavListOpenDirective);
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));

var TdLayoutCardOverComponent = (function () {
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
    __decorate([
        _angular_core.Input('cardTitle'),
        __metadata("design:type", String)
    ], TdLayoutCardOverComponent.prototype, "cardTitle", void 0);
    __decorate([
        _angular_core.Input('cardSubtitle'),
        __metadata("design:type", String)
    ], TdLayoutCardOverComponent.prototype, "cardSubtitle", void 0);
    __decorate([
        _angular_core.Input('cardWidth'),
        __metadata("design:type", Number)
    ], TdLayoutCardOverComponent.prototype, "cardWidth", void 0);
    __decorate([
        _angular_core.Input('color'),
        __metadata("design:type", String)
    ], TdLayoutCardOverComponent.prototype, "color", void 0);
    TdLayoutCardOverComponent = __decorate([
        _angular_core.Component({
            selector: 'td-layout-card-over',
            styles: [":host { position: relative; display: block; z-index: 2; width: 100%; min-height: 100%; height: 100%; } :host [td-after-card] { display: block; } .td-layout-card-over-wrapper { margin: -64px; margin-left: 0; margin-right: 0; width: 100%; min-height: 100%; height: 100%; } @media (min-width: 600px) { .td-layout-card-over-wrapper { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; -ms-flex-line-pack: start; align-content: flex-start; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; } .td-layout-card-over-wrapper .td-layout-card-over { max-height: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; } } @media (max-width: 599px) { .td-layout-card-over-wrapper .td-layout-card-over { max-width: 100% !important; } } /*# sourceMappingURL=layout-card-over.component.css.map */ "],
            template: "<mat-toolbar [color]=\"color\"> </mat-toolbar> <div class=\"td-layout-card-over-wrapper\"> <div class=\"td-layout-card-over\" [style.max-width.%]=\"cardWidth\" [style.flex]=\"'1 1 ' + cardWidth + '%'\" [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\" [style.-webkit-box-flex]=\"1\"> <mat-card> <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title> <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle> <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider> <ng-content></ng-content> </mat-card> <ng-content select=\"[td-after-card]\"></ng-content> </div> </div> ",
        })
    ], TdLayoutCardOverComponent);
    return TdLayoutCardOverComponent;
}());

var TdLayoutManageListComponent = (function () {
    function TdLayoutManageListComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
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
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
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
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    __decorate([
        _angular_core.ViewChild(_angular_material.MatSidenav),
        __metadata("design:type", _angular_material.MatSidenav)
    ], TdLayoutManageListComponent.prototype, "sidenav", void 0);
    __decorate([
        _angular_core.Input('mode'),
        __metadata("design:type", String)
    ], TdLayoutManageListComponent.prototype, "mode", void 0);
    __decorate([
        _angular_core.Input('opened'),
        __metadata("design:type", Boolean)
    ], TdLayoutManageListComponent.prototype, "opened", void 0);
    __decorate([
        _angular_core.Input('sidenavWidth'),
        __metadata("design:type", String)
    ], TdLayoutManageListComponent.prototype, "sidenavWidth", void 0);
    TdLayoutManageListComponent = __decorate([
        _angular_core.Component({
            selector: 'td-layout-manage-list',
            styles: [":host { display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host mat-sidenav-container.td-layout-manage-list { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opened, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opening, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closed, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closing { -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2); box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2); } :host .td-layout-manage-list-sidenav { text-align: start; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } :host .td-layout-manage-list-main { margin: 0; width: 100%; min-height: 100%; height: 100%; position: relative; overflow: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } :host .td-layout-manage-list-main .td-layout-manage-list-content { display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host ::ng-deep mat-sidenav-container.td-layout-manage-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host ::ng-deep mat-sidenav-container.td-layout-manage-list > .mat-drawer-content { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; } :host ::ng-deep mat-sidenav-container.td-layout-manage-list > mat-sidenav { -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; } :host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content { font-size: 14px; } :host ::ng-deep .mat-toolbar { font-weight: 400; } /*# sourceMappingURL=layout-manage-list.component.css.map */ "],
            template: "<mat-sidenav-container fullscreen class=\"td-layout-manage-list\"> <mat-sidenav #sidenav position=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\"> <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content> <div class=\"td-layout-manage-list-sidenav\" cdkScrollable> <ng-content select=\"[td-sidenav-content]\"></ng-content> </div> </mat-sidenav> <div class=\"td-layout-manage-list-main\"> <ng-content select=\"mat-toolbar\"></ng-content> <div class=\"td-layout-manage-list-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </mat-sidenav-container> ",
        })
    ], TdLayoutManageListComponent);
    return TdLayoutManageListComponent;
}());

var TdLayoutManageListToggleDirective = (function (_super) {
    __extends(TdLayoutManageListToggleDirective, _super);
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
        set: function (tdLayoutManageListToggle) {
            this.disabled = !(tdLayoutManageListToggle === '' || tdLayoutManageListToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    __decorate([
        _angular_core.Input('tdLayoutManageListToggle'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", null);
    TdLayoutManageListToggleDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutManageListToggle]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutManageListComponent; }))),
        __metadata("design:paramtypes", [TdLayoutManageListComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutManageListToggleDirective);
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
var TdLayoutManageListCloseDirective = (function (_super) {
    __extends(TdLayoutManageListCloseDirective, _super);
    function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
        set: function (tdLayoutManageListClose) {
            this.disabled = !(tdLayoutManageListClose === '' || tdLayoutManageListClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    __decorate([
        _angular_core.Input('tdLayoutManageListClose'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", null);
    TdLayoutManageListCloseDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutManageListClose]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutManageListComponent; }))),
        __metadata("design:paramtypes", [TdLayoutManageListComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutManageListCloseDirective);
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
var TdLayoutManageListOpenDirective = (function (_super) {
    __extends(TdLayoutManageListOpenDirective, _super);
    function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
        set: function (tdLayoutManageListOpen) {
            this.disabled = !(tdLayoutManageListOpen === '' || tdLayoutManageListOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    __decorate([
        _angular_core.Input('tdLayoutManageListOpen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", null);
    TdLayoutManageListOpenDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLayoutManageListOpen]',
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutManageListComponent; }))),
        __metadata("design:paramtypes", [TdLayoutManageListComponent,
            _angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutManageListOpenDirective);
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));

var TdLayoutFooterComponent = (function () {
    function TdLayoutFooterComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        /**
         * color?: string
         *
         * Optional color option: primary | accent | warn.
         */
        set: function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        _angular_core.Input('color'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdLayoutFooterComponent.prototype, "color", null);
    TdLayoutFooterComponent = __decorate([
        _angular_core.Component({
            /* tslint:disable-next-line */
            selector: 'td-layout-footer,td-layout-footer-inner',
            styles: [":host { display: block; padding: 10px 16px; } /*# sourceMappingURL=layout-footer.component.css.map */ "],
            template: "<ng-content></ng-content> ",
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2,
            _angular_core.ElementRef])
    ], TdLayoutFooterComponent);
    return TdLayoutFooterComponent;
}());

var TdNavigationDrawerMenuDirective = (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    TdNavigationDrawerMenuDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-navigation-drawer-menu]',
        })
    ], TdNavigationDrawerMenuDirective);
    return TdNavigationDrawerMenuDirective;
}());
var TdNavigationDrawerToolbarDirective = (function () {
    function TdNavigationDrawerToolbarDirective() {
    }
    TdNavigationDrawerToolbarDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-navigation-drawer-toolbar]',
        })
    ], TdNavigationDrawerToolbarDirective);
    return TdNavigationDrawerToolbarDirective;
}());
var TdNavigationDrawerComponent = (function () {
    function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
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
         * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
         */
        get: function () {
            return this._drawerMenu ? this._drawerMenu.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
        /**
         * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
         */
        get: function () {
            return this._toolbar ? this._toolbar.length > 0 : false;
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
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    TdNavigationDrawerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe(function (opened) {
            if (!opened) {
                _this._menuToggled = false;
            }
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
    TdNavigationDrawerComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
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
    __decorate([
        _angular_core.ContentChildren(TdNavigationDrawerMenuDirective),
        __metadata("design:type", _angular_core.QueryList)
    ], TdNavigationDrawerComponent.prototype, "_drawerMenu", void 0);
    __decorate([
        _angular_core.ContentChildren(TdNavigationDrawerToolbarDirective),
        __metadata("design:type", _angular_core.QueryList)
    ], TdNavigationDrawerComponent.prototype, "_toolbar", void 0);
    __decorate([
        _angular_core.Input('sidenavTitle'),
        __metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "sidenavTitle", void 0);
    __decorate([
        _angular_core.Input('icon'),
        __metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "icon", void 0);
    __decorate([
        _angular_core.Input('logo'),
        __metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "logo", void 0);
    __decorate([
        _angular_core.Input('color'),
        __metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "color", void 0);
    __decorate([
        _angular_core.Input('navigationRoute'),
        __metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "navigationRoute", void 0);
    __decorate([
        _angular_core.Input('backgroundUrl')
        // TODO angular complains with warnings if this is type [SafeResourceUrl].. so we will make it <any> until its fixed.
        // https://github.com/webpack/webpack/issues/2977
        ,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TdNavigationDrawerComponent.prototype, "backgroundUrl", null);
    __decorate([
        _angular_core.Input('name'),
        __metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "name", void 0);
    __decorate([
        _angular_core.Input('email'),
        __metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "email", void 0);
    TdNavigationDrawerComponent = __decorate([
        _angular_core.Component({
            selector: 'td-navigation-drawer',
            styles: [":host { width: 100%; } :host mat-toolbar { padding: 16px; } :host mat-toolbar.td-toolbar-background { background-repeat: no-repeat; background-size: cover; } :host mat-toolbar.td-nagivation-drawer-toolbar { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; height: auto !important; display: block !important; } :host mat-toolbar .td-navigation-drawer-toolbar-content { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host mat-toolbar .td-navigation-drawer-menu-toggle { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button { height: 24px; line-height: 24px; width: 24px; } :host > div { overflow: hidden; } /*# sourceMappingURL=navigation-drawer.component.css.map */ "],
            template: "<mat-toolbar [color]=\"color\" [style.background-image]=\"backgroundImage\" [class.td-toolbar-background]=\"!!isBackgroundAvailable\" class=\"td-nagivation-drawer-toolbar\"> <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content> <ng-container *ngIf=\"!isCustomToolbar\"> <div *ngIf=\"icon || logo || sidenavTitle\" class=\"td-navigation-drawer-toolbar-content\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\"> <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon> <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon> <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span> </div> <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div> <div class=\"td-navigation-drawer-menu-toggle\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\"> <span class=\"td-navigation-drawer-label\">{{email || name}}</span> <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\"> <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon> <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon> </button> </div> </ng-container> </mat-toolbar> <div [@tdCollapse]=\"menuToggled\"> <ng-content></ng-content> </div> <div [@tdCollapse]=\"!menuToggled\"> <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content> </div> ",
            animations: [TdCollapseAnimation()],
        }),
        __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return TdLayoutComponent; }))),
        __param(1, _angular_core.Optional()),
        __metadata("design:paramtypes", [TdLayoutComponent,
            _angular_router.Router,
            _angular_platformBrowser.DomSanitizer])
    ], TdNavigationDrawerComponent);
    return TdNavigationDrawerComponent;
}());

var TD_LAYOUTS = [
    TdLayoutComponent,
    TdLayoutToggleDirective,
    TdLayoutCloseDirective,
    TdLayoutOpenDirective,
    TdLayoutNavComponent,
    TdLayoutNavListComponent,
    TdLayoutNavListToggleDirective,
    TdLayoutNavListCloseDirective,
    TdLayoutNavListOpenDirective,
    TdLayoutCardOverComponent,
    TdLayoutManageListComponent,
    TdLayoutManageListToggleDirective,
    TdLayoutManageListCloseDirective,
    TdLayoutManageListOpenDirective,
    TdLayoutFooterComponent,
    TdNavigationDrawerComponent,
    TdNavigationDrawerMenuDirective,
    TdNavigationDrawerToolbarDirective,
];
var CovalentLayoutModule = (function () {
    function CovalentLayoutModule() {
    }
    CovalentLayoutModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_cdk_scrolling.ScrollDispatchModule,
                _angular_material.MatSidenavModule,
                _angular_material.MatToolbarModule,
                _angular_material.MatButtonModule,
                _angular_material.MatIconModule,
                _angular_material.MatCardModule,
                _angular_material.MatListModule,
            ],
            declarations: [
                TD_LAYOUTS,
            ],
            exports: [
                TD_LAYOUTS,
            ],
        })
    ], CovalentLayoutModule);
    return CovalentLayoutModule;
}());

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
var TD_CIRCLE_DIAMETER = 100;
var TdLoadingComponent = (function () {
    function TdLoadingComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new rxjs_Subject.Subject();
        this._animationOut = new rxjs_Subject.Subject();
        this._mode = exports.LoadingMode.Indeterminate;
        this._defaultMode = exports.LoadingMode.Indeterminate;
        this._value = 0;
        this._circleDiameter = TD_CIRCLE_DIAMETER;
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
        return this._circleDiameter;
    };
    TdLoadingComponent.prototype.getCircleStrokeWidth = function () {
        // we calculate the stroke width by setting it as 10% of its diameter
        var strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
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
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        this._animationOut.next(undefined);
    };
    /**
     * Starts in animation and returns an observable for completition event.
     */
    TdLoadingComponent.prototype.startInAnimation = function () {
        /* need to switch back to the selected mode, so we have saved it in another variable
        *  and then recover it. (issue with protractor)
        */
        this._mode = this._defaultMode;
        // Set values before the animations starts
        this._setCircleDiameter();
        // Check for changes for `OnPush` change detection
        this.animation = true;
        this._changeDetectorRef.markForCheck();
        return this._animationIn.asObservable();
    };
    /**
     * Starts out animation and returns an observable for completition event.
     */
    TdLoadingComponent.prototype.startOutAnimation = function () {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
        * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
        */
        this._mode = exports.LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    };
    /**
     * Calculate the proper diameter for the circle and set it
     */
    TdLoadingComponent.prototype._setCircleDiameter = function () {
        // we set a default diameter of 100 since this is the default in material
        var diameter = TD_CIRCLE_DIAMETER;
        // if height is provided, then we take that as diameter
        if (this.height) {
            diameter = this.height;
            // else if its not provided, then we take the host height
        }
        else if (this.height === undefined) {
            diameter = this._hostHeight();
        }
        // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
        if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
            this._circleDiameter = Math.floor(diameter);
        }
        else {
            this._circleDiameter = TD_CIRCLE_DIAMETER;
        }
    };
    /**
     * Returns the host height of the loading component
     */
    TdLoadingComponent.prototype._hostHeight = function () {
        if (this._elementRef.nativeElement) {
            return this._elementRef.nativeElement.getBoundingClientRect().height;
        }
        return 0;
    };
    TdLoadingComponent = __decorate([
        _angular_core.Component({
            selector: 'td-loading',
            styles: [".td-loading-wrapper { position: relative; display: block; } .td-loading-wrapper.td-fullscreen { position: inherit; } .td-loading-wrapper .td-loading { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } .td-loading-wrapper.td-overlay .td-loading { position: absolute; margin: 0; top: 0; left: 0; right: 0; z-index: 1000; } .td-loading-wrapper.td-overlay .td-loading mat-progress-bar { position: absolute; top: 0; left: 0; right: 0; } .td-loading-wrapper.td-overlay-circular .td-loading { bottom: 0; } /*# sourceMappingURL=loading.component.css.map */ "],
            template: "<div class=\"td-loading-wrapper\" [style.min-height]=\"getHeight()\" [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\" [class.td-overlay]=\"isOverlay() || isFullScreen()\"  [class.td-fullscreen]=\"isFullScreen()\"> <div [@tdFadeInOut]=\"animation\" (@tdFadeInOut.done)=\"animationComplete($event)\" [style.min-height]=\"getHeight()\" class=\"td-loading\"> <mat-progress-spinner *ngIf=\"isCircular()\"  [mode]=\"mode\" [value]=\"value\"  [color]=\"color\"  [diameter]=\"getCircleDiameter()\" [strokeWidth]=\"getCircleStrokeWidth()\"> </mat-progress-spinner> <mat-progress-bar *ngIf=\"isLinear()\"  [mode]=\"mode\" [value]=\"value\" [color]=\"color\"> </mat-progress-bar> </div> <ng-template [cdkPortalHost]=\"content\"></ng-template> </div>",
            animations: [
                TdFadeInOutAnimation(),
            ],
        }),
        __metadata("design:paramtypes", [_angular_core.ElementRef,
            _angular_core.ChangeDetectorRef])
    ], TdLoadingComponent);
    return TdLoadingComponent;
}());

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
                loadingRef.componentRef = overlayRef.attach(new _angular_cdk_portal.ComponentPortal(TdLoadingComponent));
                _this._mapOptions(options, loadingRef.componentRef.instance);
                loadingRef.componentRef.instance.startInAnimation();
                loadingRef.componentRef.changeDetectorRef.detectChanges();
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
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    TdLoadingFactory.prototype.createOverlayComponent = function (options, viewContainerRef, templateRef) {
        options.height = undefined;
        options.style = LoadingStyle.Overlay;
        var loadingRef = this._createComponent(options);
        var loading = false;
        loadingRef.componentRef.instance.content = new _angular_cdk_portal.TemplatePortal(templateRef, viewContainerRef);
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
    TdLoadingFactory.prototype.createReplaceComponent = function (options, viewContainerRef, templateRef, context) {
        var nativeElement = templateRef.elementRef.nativeElement;
        options.height = nativeElement.nextElementSibling ?
            nativeElement.nextElementSibling.scrollHeight : undefined;
        options.style = LoadingStyle.None;
        var loadingRef = this._createComponent(options);
        var loading = false;
        viewContainerRef.createEmbeddedView(templateRef, context);
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
                    // passing context so when the template is re-attached, we can keep the reference of the variables
                    var cdr = viewContainerRef.createEmbeddedView(templateRef, context);
                    viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                    /**
                     * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                     * with "OnPush" change detection
                     */
                    cdr.detectChanges();
                    cdr.markForCheck();
                });
            }
        });
        return loadingRef;
    };
    /**
     * Creates a fullscreen overlay for the loading usage.
     */
    TdLoadingFactory.prototype._createOverlay = function () {
        var state$$1 = new _angular_cdk_overlay.OverlayConfig();
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
    TdLoadingFactory = __decorate([
        _angular_core.Injectable(),
        __metadata("design:paramtypes", [_angular_core.ComponentFactoryResolver,
            _angular_cdk_overlay.Overlay,
            _angular_core.Injector])
    ], TdLoadingFactory);
    return TdLoadingFactory;
}());
function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay, injector) {
    return parent || new TdLoadingFactory(componentFactoryResolver, overlay, injector);
}
var LOADING_FACTORY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingFactory,
    deps: [[new _angular_core.Optional(), new _angular_core.SkipSelf(), TdLoadingFactory], _angular_core.ComponentFactoryResolver, _angular_cdk_overlay.Overlay, _angular_core.Injector],
    useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
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
    __extends(TdLoadingDirectiveConfig, _super);
    function TdLoadingDirectiveConfig(config) {
        var _this = _super.call(this, config) || this;
        _this.strategy = config.strategy ? config.strategy : exports.LoadingStrategy.Replace;
        return _this;
    }
    return TdLoadingDirectiveConfig;
}(TdLoadingConfig));
var TdLoadingService = (function () {
    function TdLoadingService(_loadingFactory) {
        this._loadingFactory = _loadingFactory;
        this._context = {};
        this._timeouts = {};
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
    TdLoadingService.prototype.createComponent = function (config, viewContainerRef, templateRef, context) {
        var directiveConfig = new TdLoadingDirectiveConfig(config);
        if (this._context[directiveConfig.name]) {
            throw Error("Name duplication: [TdLoading] directive has a name conflict with " + directiveConfig.name + ".");
        }
        if (directiveConfig.strategy === exports.LoadingStrategy.Overlay) {
            this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
        }
        else {
            this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
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
        var _this = this;
        if (name === void 0) { name = 'td-loading-main'; }
        if (registers === void 0) { registers = 1; }
        // try registering into the service if the loading component has been instanciated or if it exists.
        if (this._context[name]) {
            registers = registers < 1 ? 1 : registers;
            this._context[name].times += registers;
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        else {
            // if it doesnt exist, set a timeout so its registered after change detection happens
            // this in case "register" occured on the `ngOnInit` lifehook cycle.
            if (!this._timeouts[name]) {
                this._timeouts[name] = setTimeout(function () {
                    _this.register(name, registers);
                });
            }
            else {
                // if it timeout occured and still doesnt exist, it means the tiemout wasnt needed so we clear it.
                this._clearTimeout(name);
            }
        }
        return false;
    };
    /**
     * params:
     * - name: string
     * - resolves?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass resolves argument to set a number of resolve calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolve()
     */
    TdLoadingService.prototype.resolve = function (name, resolves) {
        if (name === void 0) { name = 'td-loading-main'; }
        if (resolves === void 0) { resolves = 1; }
        // clear timeout if the loading component is "resolved" before its "registered"
        this._clearTimeout(name);
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
     * returns: true if successful
     *
     * Resolves all request for the loading mask referenced by the name parameter.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolveAll()
     */
    TdLoadingService.prototype.resolveAll = function (name) {
        if (name === void 0) { name = 'td-loading-main'; }
        // clear timeout if the loading component is "resolved" before its "registered"
        this._clearTimeout(name);
        if (this._context[name]) {
            this._context[name].times = 0;
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
    /**
     * Clears timeout linked to the name.
     * @param name Name of the loading component to be cleared
     */
    TdLoadingService.prototype._clearTimeout = function (name) {
        clearTimeout(this._timeouts[name]);
        delete this._timeouts[name];
    };
    TdLoadingService = __decorate([
        _angular_core.Injectable(),
        __metadata("design:paramtypes", [TdLoadingFactory])
    ], TdLoadingService);
    return TdLoadingService;
}());
function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
    return parent || new TdLoadingService(loadingFactory);
}
var LOADING_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingService,
    deps: [[new _angular_core.Optional(), new _angular_core.SkipSelf(), TdLoadingService], TdLoadingFactory],
    useFactory: LOADING_PROVIDER_FACTORY,
};

/**
 * Context class for variable reference
 */
var TdLoadingContext = (function () {
    function TdLoadingContext() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
    return TdLoadingContext;
}());
// Constant for generation of the id for the next component
var TD_LOADING_NEXT_ID = 0;
var TdLoadingDirective = (function () {
    function TdLoadingDirective(_viewContainerRef, _templateRef, _loadingService) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._loadingService = _loadingService;
        this._context = new TdLoadingContext();
        /**
         * tdLoadingColor?: "primary" | "accent" | "warn"
         * Sets the theme color of the loading component. Defaults to "primary"
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLoadingDirective.prototype, "name", {
        /**
         * tdLoading: string
         * Name reference of the loading mask, used to register/resolve requests to the mask.
         */
        set: function (name) {
            if (!this._name) {
                if (name) {
                    this._name = name;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "until", {
        /**
         * tdLoadingUntil?: any
         * If its null, undefined or false it will be used to register requests to the mask.
         * Else if its any value that can be resolved as true, it will resolve the mask.
         * [name] is optional when using [until], but can still be used to register/resolve it manually.
         */
        set: function (until) {
            if (!this._name) {
                this._name = 'td-loading-until-' + TD_LOADING_NEXT_ID++;
            }
            this._context.$implicit = this._context.tdLoading = until;
            if (!until) {
                this._loadingService.register(this._name);
            }
            else {
                this._loadingService.resolveAll(this._name);
            }
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
            this._loadingRef = this._loadingService.createComponent({
                name: this._name,
                type: this._type,
                mode: this._mode,
                color: this.color,
                strategy: this._strategy,
            }, this._viewContainerRef, this._templateRef, this._context);
        }
    };
    __decorate([
        _angular_core.Input('tdLoading'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdLoadingDirective.prototype, "name", null);
    __decorate([
        _angular_core.Input('tdLoadingUntil'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TdLoadingDirective.prototype, "until", null);
    __decorate([
        _angular_core.Input('tdLoadingType'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdLoadingDirective.prototype, "type", null);
    __decorate([
        _angular_core.Input('tdLoadingMode'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdLoadingDirective.prototype, "mode", null);
    __decorate([
        _angular_core.Input('tdLoadingStrategy'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdLoadingDirective.prototype, "strategy", null);
    __decorate([
        _angular_core.Input('tdLoadingColor'),
        __metadata("design:type", String)
    ], TdLoadingDirective.prototype, "color", void 0);
    TdLoadingDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdLoading]',
        }),
        __metadata("design:paramtypes", [_angular_core.ViewContainerRef,
            _angular_core.TemplateRef,
            TdLoadingService])
    ], TdLoadingDirective);
    return TdLoadingDirective;
}());

var TD_LOADING = [
    TdLoadingComponent,
    TdLoadingDirective,
];
var TD_LOADING_ENTRY_COMPONENTS = [
    TdLoadingComponent,
];
var CovalentLoadingModule = (function () {
    function CovalentLoadingModule() {
    }
    CovalentLoadingModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_material.MatProgressBarModule,
                _angular_material.MatProgressSpinnerModule,
                _angular_cdk_overlay.OverlayModule,
                _angular_cdk_portal.PortalModule,
            ],
            declarations: [
                TD_LOADING,
            ],
            exports: [
                TD_LOADING,
            ],
            providers: [
                LOADING_FACTORY_PROVIDER,
                LOADING_PROVIDER,
            ],
            entryComponents: [
                TD_LOADING_ENTRY_COMPONENTS,
            ],
        })
    ], CovalentLoadingModule);
    return CovalentLoadingModule;
}());

var TdMediaService = (function () {
    function TdMediaService(_ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this._resizing = false;
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
        this._queryMap.set('landscape', '(orientation: landscape)');
        this._queryMap.set('portrait', '(orientation: portrait)');
        this._queryMap.set('print', 'print');
        this._resizing = false;
        // we make sure that the resize checking happend outside of angular since it happens often
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return rxjs_observable_fromEvent.fromEvent(window, 'resize').subscribe(function () {
                // way to prevent the resize event from triggering the match media if there is already one event running already.
                if (!_this._resizing) {
                    _this._resizing = true;
                    setTimeout(function () {
                        _this._onResize();
                        _this._resizing = false;
                    }, 100);
                }
            });
        });
    }
    /**
     * Deregisters a query so its stops being notified or used.
     */
    TdMediaService.prototype.deregisterQuery = function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        this._querySources[query].unsubscribe();
        delete this._querySources[query];
        delete this._queryObservables[query];
    };
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     */
    TdMediaService.prototype.query = function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        return this._ngZone.run(function () {
            return matchMedia(query).matches;
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
            this._querySources[query] = new rxjs_BehaviorSubject.BehaviorSubject(matchMedia(query).matches);
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
        this._querySources[query].next(matchMedia(query).matches);
    };
    TdMediaService = __decorate([
        _angular_core.Injectable(),
        __metadata("design:paramtypes", [_angular_core.NgZone])
    ], TdMediaService);
    return TdMediaService;
}());
function MEDIA_PROVIDER_FACTORY(parent, ngZone) {
    return parent || new TdMediaService(ngZone);
}
var MEDIA_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdMediaService,
    deps: [[new _angular_core.Optional(), new _angular_core.SkipSelf(), TdMediaService], _angular_core.NgZone],
    useFactory: MEDIA_PROVIDER_FACTORY,
};

var TdMediaToggleDirective = (function () {
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
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    TdMediaToggleDirective.prototype._mediaChange = function (matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    };
    TdMediaToggleDirective.prototype._changeAttributes = function () {
        for (var attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    };
    TdMediaToggleDirective.prototype._changeClasses = function () {
        var _this = this;
        this._classes.forEach(function (className) {
            if (_this._matches) {
                _this._renderer.addClass(_this._elementRef.nativeElement, className);
            }
            else {
                _this._renderer.removeClass(_this._elementRef.nativeElement, className);
            }
        });
    };
    TdMediaToggleDirective.prototype._changeStyles = function () {
        for (var style$$1 in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style$$1, this._styles[style$$1]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style$$1);
            }
        }
    };
    __decorate([
        _angular_core.Input('tdMediaToggle'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdMediaToggleDirective.prototype, "query", null);
    __decorate([
        _angular_core.Input('mediaAttributes'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TdMediaToggleDirective.prototype, "attributes", null);
    __decorate([
        _angular_core.Input('mediaClasses'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TdMediaToggleDirective.prototype, "classes", null);
    __decorate([
        _angular_core.Input('mediaStyles'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TdMediaToggleDirective.prototype, "styles", null);
    TdMediaToggleDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdMediaToggle]',
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2, _angular_core.ElementRef, TdMediaService])
    ], TdMediaToggleDirective);
    return TdMediaToggleDirective;
}());

var TD_MEDIA = [
    TdMediaToggleDirective,
];
var CovalentMediaModule = (function () {
    function CovalentMediaModule() {
    }
    CovalentMediaModule = __decorate([
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
            providers: [
                MEDIA_PROVIDER,
            ],
        })
    ], CovalentMediaModule);
    return CovalentMediaModule;
}());

var TdMenuComponent = (function () {
    function TdMenuComponent() {
    }
    TdMenuComponent = __decorate([
        _angular_core.Component({
            selector: 'td-menu',
            template: "<ng-content select=\"[td-menu-header]\"></ng-content> <mat-divider></mat-divider> <div class=\"td-menu-content\"> <ng-content></ng-content> </div> <mat-divider></mat-divider> <ng-content select=\"[td-menu-footer]\"></ng-content>",
            styles: [":host { display: block; margin-top: -8px; margin-bottom: -8px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; } :host ::ng-deep [td-menu-header] { padding: 8px; text-align: center; } :host ::ng-deep mat-list a[mat-list-item].mat-2-line, :host ::ng-deep mat-list mat-list-item.mat-2-line, :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line, :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line, :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line, :host ::ng-deep mat-nav-list mat-list-item.mat-2-line, :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line, :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line { height: auto; } :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content, :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content, :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content, :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content, :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content, :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content, :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content, :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content { height: auto; padding: 8px; } :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text { padding-right: 0px; } [dir='rtl'] :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text { padding-left: 0px; padding-right: 16px; } :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine], :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine], :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine], :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine], :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine], :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine], :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine], :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine] { margin-top: 4px; } .td-menu-content { max-height: calc(50vh); overflow-y: auto; } /*# sourceMappingURL=menu.component.css.map */ "],
        })
    ], TdMenuComponent);
    return TdMenuComponent;
}());

var TD_MENU = [
    TdMenuComponent,
];
var CovalentMenuModule = (function () {
    function CovalentMenuModule() {
    }
    CovalentMenuModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_material.MatMenuModule,
                _angular_material.MatListModule,
            ],
            declarations: [
                TD_MENU,
            ],
            exports: [
                TD_MENU,
            ],
        })
    ], CovalentMenuModule);
    return CovalentMenuModule;
}());

var TdMessageContainerDirective = (function () {
    function TdMessageContainerDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TdMessageContainerDirective = __decorate([
        _angular_core.Directive({
            selector: '[tdMessageContainer]',
        }),
        __metadata("design:paramtypes", [_angular_core.ViewContainerRef])
    ], TdMessageContainerDirective);
    return TdMessageContainerDirective;
}());
var TdMessageComponent = (function () {
    function TdMessageComponent(_renderer, _changeDetectorRef, _elementRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._opened = true;
        this._hidden = false;
        this._animating = false;
        this._initialized = false;
        /**
         * icon?: string
         *
         * The icon to be displayed before the title.
         * Defaults to `info_outline` icon
         */
        this.icon = 'info_outline';
        this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
    }
    Object.defineProperty(TdMessageComponent.prototype, "collapsedAnimation", {
        /**
         * Binding host to tdCollapse animation
         */
        get: function () {
            return !this._opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "hidden", {
        /**
         * Binding host to display style when hidden
         */
        get: function () {
            return this._hidden ? 'none' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        /**
         * color?: primary | accent | warn
         *
         * Sets the color of the message.
         * Can also use any material color: purple | light-blue, etc.
         */
        set: function (color) {
            this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
            this._renderer.removeClass(this._elementRef.nativeElement, 'bgc-' + this._color + '-100');
            this._renderer.removeClass(this._elementRef.nativeElement, 'tc-' + this._color + '-700');
            if (color === 'primary' || color === 'accent' || color === 'warn') {
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + color);
            }
            else {
                this._renderer.addClass(this._elementRef.nativeElement, 'bgc-' + color + '-100');
                this._renderer.addClass(this._elementRef.nativeElement, 'tc-' + color + '-700');
            }
            this._color = color;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "opened", {
        get: function () {
            return this._opened;
        },
        /**
         * opened?: boolean
         *
         * Shows or hiddes the message depending on its value.
         * Defaults to 'true'.
         */
        set: function (opened) {
            if (this._initialized) {
                if (opened) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
            else {
                this._opened = opened;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     */
    TdMessageComponent.prototype.animationDoneListener = function () {
        if (!this._opened) {
            this._hidden = true;
            this._detach();
        }
        this._animating = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Initializes the component and attaches the content.
     */
    TdMessageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve(undefined).then(function () {
            if (_this._opened) {
                _this._attach();
            }
            _this._initialized = true;
        });
    };
    /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     */
    TdMessageComponent.prototype.open = function () {
        if (!this._opened && !this._animating) {
            this._opened = true;
            this._attach();
            this._startAnimationState();
        }
    };
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     */
    TdMessageComponent.prototype.close = function () {
        if (this._opened && !this._animating) {
            this._opened = false;
            this._startAnimationState();
        }
    };
    /**
     * Toggles between open and close depending on state.
     */
    TdMessageComponent.prototype.toggle = function () {
        if (this._opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Method to set the state before starting an animation
     */
    TdMessageComponent.prototype._startAnimationState = function () {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to attach template to DOM
     */
    TdMessageComponent.prototype._attach = function () {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to detach template from DOM
     */
    TdMessageComponent.prototype._detach = function () {
        this._childElement.viewContainer.clear();
        this._changeDetectorRef.markForCheck();
    };
    __decorate([
        _angular_core.ViewChild(TdMessageContainerDirective),
        __metadata("design:type", TdMessageContainerDirective)
    ], TdMessageComponent.prototype, "_childElement", void 0);
    __decorate([
        _angular_core.ViewChild(_angular_core.TemplateRef),
        __metadata("design:type", _angular_core.TemplateRef)
    ], TdMessageComponent.prototype, "_template", void 0);
    __decorate([
        _angular_core.HostBinding('@tdCollapse'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdMessageComponent.prototype, "collapsedAnimation", null);
    __decorate([
        _angular_core.HostBinding('style.display'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TdMessageComponent.prototype, "hidden", null);
    __decorate([
        _angular_core.Input('label'),
        __metadata("design:type", String)
    ], TdMessageComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input('sublabel'),
        __metadata("design:type", String)
    ], TdMessageComponent.prototype, "sublabel", void 0);
    __decorate([
        _angular_core.Input('icon'),
        __metadata("design:type", String)
    ], TdMessageComponent.prototype, "icon", void 0);
    __decorate([
        _angular_core.Input('color'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TdMessageComponent.prototype, "color", null);
    __decorate([
        _angular_core.Input('opened'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdMessageComponent.prototype, "opened", null);
    __decorate([
        _angular_core.HostListener('@tdCollapse.done'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TdMessageComponent.prototype, "animationDoneListener", null);
    TdMessageComponent = __decorate([
        _angular_core.Component({
            selector: 'td-message',
            template: "<div tdMessageContainer></div> <ng-template> <div class=\"td-message-wrapper\"> <mat-icon class=\"td-message-icon\">{{icon}}</mat-icon> <div class=\"td-message-labels\"> <div *ngIf=\"label\" class=\"td-message-label\">{{label}}</div> <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{sublabel}}</div> </div> <ng-content select=\"[td-message-actions]\"></ng-content> </div> </ng-template>",
            styles: [":host { display: block; } :host .td-message-wrapper { padding: 8px 16px; min-height: 52px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host .td-message-wrapper .td-message-icon { margin-right: 16px; } :host .td-message-wrapper .td-message-labels { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } /*# sourceMappingURL=message.component.css.map */ "],
            animations: [
                TdCollapseAnimation({ duration: 100 }),
            ],
        }),
        __metadata("design:paramtypes", [_angular_core.Renderer2,
            _angular_core.ChangeDetectorRef,
            _angular_core.ElementRef])
    ], TdMessageComponent);
    return TdMessageComponent;
}());

var TD_MESSAGE = [
    TdMessageComponent,
    TdMessageContainerDirective,
];
var CovalentMessageModule = (function () {
    function CovalentMessageModule() {
    }
    CovalentMessageModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_material.MatIconModule,
            ],
            declarations: [
                TD_MESSAGE,
            ],
            exports: [
                TD_MESSAGE,
            ],
        })
    ], CovalentMessageModule);
    return CovalentMessageModule;
}());

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
var TdNotificationCountComponent = (function () {
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
    __decorate([
        _angular_core.ViewChild('content'),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdNotificationCountComponent.prototype, "content", void 0);
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", String)
    ], TdNotificationCountComponent.prototype, "color", void 0);
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdNotificationCountComponent.prototype, "positionX", null);
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdNotificationCountComponent.prototype, "positionY", null);
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TdNotificationCountComponent.prototype, "notifications", null);
    __decorate([
        _angular_core.HostBinding('class.td-notification-hidden'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TdNotificationCountComponent.prototype, "hideHost", null);
    TdNotificationCountComponent = __decorate([
        _angular_core.Component({
            selector: 'td-notification-count',
            styles: [":host { position: relative; display: block; text-align: center; min-width: 40px; height: 40px; } :host.td-notification-hidden { min-width: 0; } .td-notification-count { line-height: 21px; width: 20px; height: 20px; position: absolute; font-size: 10px; font-weight: 600; border-radius: 50%; z-index: 1; } .td-notification-count.td-notification-center-x { margin-left: auto; margin-right: auto; left: 0px; right: 0px; } .td-notification-count.td-notification-center-y { margin-top: auto; margin-bottom: auto; top: 0px; bottom: 0px; } .td-notification-count.td-notification-top { top: 0px; } .td-notification-count.td-notification-bottom { bottom: 0px; } .td-notification-count.td-notification-before { left: 0px; } .td-notification-count.td-notification-after { right: 0px; } .td-notification-count.td-notification-no-count { width: 8px; height: 8px; } .td-notification-count.td-notification-no-count.td-notification-top { top: 8px; } .td-notification-count.td-notification-no-count.td-notification-bottom { bottom: 8px; } .td-notification-count.td-notification-no-count.td-notification-before { left: 8px; } .td-notification-count.td-notification-no-count.td-notification-after { right: 8px; } ::ng-deep [dir='rtl'] .td-notification-count.td-notification-before { right: 0px; left: auto; } ::ng-deep [dir='rtl'] .td-notification-count.td-notification-after { left: 0px; right: auto; } ::ng-deep [dir='rtl'] .td-notification-count.td-notification-no-count.td-notification-before { right: 8px; left: auto; } ::ng-deep [dir='rtl'] .td-notification-count.td-notification-no-count.td-notification-after { left: 8px; right: auto; } .td-notification-content, .td-notification-content ::ng-deep > * { line-height: 40px; } /*# sourceMappingURL=notification-count.component.css.map */ "],
            template: "<div #content class=\"td-notification-content\"> <ng-content></ng-content> </div> <div *ngIf=\"show\" class=\"td-notification-count mat-{{color}}\" [class.td-notification-top]=\"positionY === 'top'\" [class.td-notification-bottom]=\"positionY === 'bottom'\" [class.td-notification-before]=\"positionX === 'before'\" [class.td-notification-after]=\"positionX === 'after'\" [class.td-notification-center-y]=\"positionY === 'center'\" [class.td-notification-center-x]=\"positionX === 'center'\" [class.td-notification-no-count]=\"noCount\"> {{noCount ? '' : notificationsDisplay}} </div>",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        })
    ], TdNotificationCountComponent);
    return TdNotificationCountComponent;
}());

var TD_NOTIFICATIONS = [
    TdNotificationCountComponent,
];
var CovalentNotificationsModule = (function () {
    function CovalentNotificationsModule() {
    }
    CovalentNotificationsModule = __decorate([
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
    ], CovalentNotificationsModule);
    return CovalentNotificationsModule;
}());

var TdPagingBarComponent = (function () {
    function TdPagingBarComponent(_dir) {
        this._dir = _dir;
        this._pageSize = 50;
        this._total = 0;
        this._page = 1;
        this._fromRow = 1;
        this._toRow = 1;
        this._initialized = false;
        this._pageLinks = [];
        this._pageLinkCount = 0;
        // special case when 2 pageLinks, detect when hit end of pages so can lead in correct direction
        this._hitEnd = false;
        // special case when 2 pageLinks, detect when hit start of pages so can lead in correct direction
        this._hitStart = false;
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
    Object.defineProperty(TdPagingBarComponent.prototype, "pageLinkCount", {
        get: function () {
            return this._pageLinkCount;
        },
        /**
         * pageLinkCount?: number
         * Amount of page navigation links for the paging bar. Defaults to '0'
         */
        set: function (pageLinkCount) {
            this._pageLinkCount = _angular_cdk_coercion.coerceNumberProperty(pageLinkCount);
            this._calculatePageLinks();
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
         * Selected page size for the pagination. Defaults 50.
         */
        set: function (pageSize) {
            this._pageSize = _angular_cdk_coercion.coerceNumberProperty(pageSize);
            this._page = 1;
            if (this._initialized) {
                this._handleOnChange();
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
            this._total = _angular_cdk_coercion.coerceNumberProperty(total);
            this._calculateRows();
            this._calculatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "pageLinks", {
        /**
         * pageLinks: number[]
         * Returns the pageLinks in an array
         */
        get: function () {
            return this._pageLinks;
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
    Object.defineProperty(TdPagingBarComponent.prototype, "isRTL", {
        get: function () {
            if (this._dir) {
                return this._dir.dir === 'rtl';
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TdPagingBarComponent.prototype.ngOnInit = function () {
        this._page = _angular_cdk_coercion.coerceNumberProperty(this.initialPage);
        this._calculateRows();
        this._calculatePageLinks();
        this._initialized = true;
    };
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.navigateToPage = function (page) {
        if (page === 1 || (page >= 1 && page <= this.maxPage)) {
            this._page = _angular_cdk_coercion.coerceNumberProperty(Math.floor(page));
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
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     */
    TdPagingBarComponent.prototype._calculatePageLinks = function () {
        // special case when 2 pageLinks, detect when hit end of pages so can lead in correct direction
        if (this.isMaxPage()) {
            this._hitEnd = true;
            this._hitStart = false;
        }
        // special case when 2 pageLinks, detect when hit start of pages so can lead in correct direction
        if (this.isMinPage()) {
            this._hitEnd = false;
            this._hitStart = true;
        }
        // If the pageLinkCount goes above max possible pages based on perpage setting then reset it to maxPage
        var actualPageLinkCount = this.pageLinkCount;
        if (this.pageLinkCount > this.maxPage) {
            actualPageLinkCount = this.maxPage;
        }
        // reset the pageLinks array
        this._pageLinks = [];
        // fill in the array with the pageLinks based on the current selected page
        var middlePageLinks = Math.floor(actualPageLinkCount / 2);
        for (var x = 0; x < actualPageLinkCount; x++) {
            // don't go past the maxPage in the pageLinks
            // have to handle even and odd pageLinkCounts differently so can still lead to the next numbers
            if ((actualPageLinkCount % 2 === 0 && (this.page + middlePageLinks > this.maxPage)) ||
                (actualPageLinkCount % 2 !== 0 && (this.page + middlePageLinks >= this.maxPage))) {
                this._pageLinks[x] = this.maxPage - (actualPageLinkCount - (x + 1));
                // if the selected page is after the middle then set that page as middle and get the correct balance on left and right
                // special handling when there are only 2 pageLinks to just drop to next if block so can lead to next numbers when moving to right
                // when moving to the left then go into this block
            }
            else if ((actualPageLinkCount > 2 || actualPageLinkCount <= 2 && this._hitEnd) && (this.page - middlePageLinks) > 0) {
                this._pageLinks[x] = (this.page - middlePageLinks) + x;
                // if the selected page is before the middle then set the pages based on the x index leading up to and after selected page
            }
            else if ((this.page - middlePageLinks) <= 0) {
                this._pageLinks[x] = x + 1;
                // other wise just set the array in order starting from the selected page
            }
            else {
                this._pageLinks[x] = this.page + x;
            }
        }
    };
    TdPagingBarComponent.prototype._handleOnChange = function () {
        this._calculateRows();
        this._calculatePageLinks();
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
    __decorate([
        _angular_core.Input('firstLast'),
        __metadata("design:type", Boolean)
    ], TdPagingBarComponent.prototype, "firstLast", void 0);
    __decorate([
        _angular_core.Input('initialPage'),
        __metadata("design:type", Number)
    ], TdPagingBarComponent.prototype, "initialPage", void 0);
    __decorate([
        _angular_core.Input('pageLinkCount'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdPagingBarComponent.prototype, "pageLinkCount", null);
    __decorate([
        _angular_core.Input('pageSize'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdPagingBarComponent.prototype, "pageSize", null);
    __decorate([
        _angular_core.Input('total'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdPagingBarComponent.prototype, "total", null);
    __decorate([
        _angular_core.Output('change'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdPagingBarComponent.prototype, "onChange", void 0);
    TdPagingBarComponent = __decorate([
        _angular_core.Component({
            selector: 'td-paging-bar',
            template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\" > <ng-content></ng-content> <div class=\"td-paging-bar-navigation\"> <button mat-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\"> <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon> </button> <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\"> <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon> </button> <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\"> <button class=\"td-paging-bar-link-page\" mat-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button> </ng-template> <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\"> <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon> </button> <button mat-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\"> <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon> </button> </div> </div>",
            styles: [":host { display: block; } :host .td-paging-bar { height: 48px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host .td-paging-bar ::ng-deep > * { margin: 0 10px; } :host .td-paging-bar [mat-icon-button] { font-size: 12px; font-weight: normal; } /*# sourceMappingURL=paging-bar.component.css.map */ "],
        }),
        __param(0, _angular_core.Optional()),
        __metadata("design:paramtypes", [_angular_cdk_bidi.Dir])
    ], TdPagingBarComponent);
    return TdPagingBarComponent;
}());

var CovalentPagingModule = (function () {
    function CovalentPagingModule() {
    }
    CovalentPagingModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_material.MatIconModule,
                _angular_material.MatButtonModule,
            ],
            declarations: [
                TdPagingBarComponent,
            ],
            exports: [
                TdPagingBarComponent,
            ],
        })
    ], CovalentPagingModule);
    return CovalentPagingModule;
}());

var TdSearchInputComponent = (function () {
    function TdSearchInputComponent(_dir) {
        this._dir = _dir;
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
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        this.clearIcon = 'cancel';
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
    Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
        get: function () {
            if (this._dir) {
                return this._dir.dir === 'rtl';
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TdSearchInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._input.ngControl.valueChanges.pipe(rxjs_operators_skip.skip(1), // skip first change when value is set to undefined
        rxjs_operators_debounceTime.debounceTime(this.debounce)).subscribe(function (value) {
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
    __decorate([
        _angular_core.ViewChild(_angular_material.MatInput),
        __metadata("design:type", _angular_material.MatInput)
    ], TdSearchInputComponent.prototype, "_input", void 0);
    __decorate([
        _angular_core.Input('showUnderline'),
        __metadata("design:type", Boolean)
    ], TdSearchInputComponent.prototype, "showUnderline", void 0);
    __decorate([
        _angular_core.Input('debounce'),
        __metadata("design:type", Number)
    ], TdSearchInputComponent.prototype, "debounce", void 0);
    __decorate([
        _angular_core.Input('placeholder'),
        __metadata("design:type", String)
    ], TdSearchInputComponent.prototype, "placeholder", void 0);
    __decorate([
        _angular_core.Input('clearIcon'),
        __metadata("design:type", String)
    ], TdSearchInputComponent.prototype, "clearIcon", void 0);
    __decorate([
        _angular_core.Output('searchDebounce'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdSearchInputComponent.prototype, "onSearchDebounce", void 0);
    __decorate([
        _angular_core.Output('search'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdSearchInputComponent.prototype, "onSearch", void 0);
    __decorate([
        _angular_core.Output('clear'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdSearchInputComponent.prototype, "onClear", void 0);
    __decorate([
        _angular_core.Output('blur'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdSearchInputComponent.prototype, "onBlur", void 0);
    TdSearchInputComponent = __decorate([
        _angular_core.Component({
            selector: 'td-search-input',
            template: "<div class=\"td-search-input\"> <mat-form-field class=\"td-search-input-field\" [class.mat-hide-underline]=\"!showUnderline\" floatPlaceholder=\"never\"> <input matInput #searchElement type=\"search\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" (blur)=\"handleBlur()\" (search)=\"stopPropagation($event)\" (keyup.enter)=\"handleSearch($event)\"/> </mat-form-field> <button mat-icon-button class=\"td-search-input-clear\" type=\"button\" [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\" (click)=\"clearSearch()\"> <mat-icon>{{clearIcon}}</mat-icon> </button> </div>",
            styles: [".td-search-input { overflow-x: hidden; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } .td-search-input .td-search-input-field { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline { display: none; } .td-search-input .td-search-input-clear { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; } /*# sourceMappingURL=search-input.component.css.map */ "],
            animations: [
                _angular_animations.trigger('searchState', [
                    _angular_animations.state('hide-left', _angular_animations.style({
                        transform: 'translateX(-150%)',
                        display: 'none',
                    })),
                    _angular_animations.state('hide-right', _angular_animations.style({
                        transform: 'translateX(150%)',
                        display: 'none',
                    })),
                    _angular_animations.state('show', _angular_animations.style({
                        transform: 'translateX(0%)',
                        display: 'block',
                    })),
                    _angular_animations.transition('* => show', _angular_animations.animate('200ms ease-in')),
                    _angular_animations.transition('show => *', _angular_animations.animate('200ms ease-out')),
                ]),
            ],
        }),
        __param(0, _angular_core.Optional()),
        __metadata("design:paramtypes", [_angular_cdk_bidi.Dir])
    ], TdSearchInputComponent);
    return TdSearchInputComponent;
}());

var TdSearchBoxComponent = (function () {
    function TdSearchBoxComponent() {
        this._searchVisible = false;
        /**
         * backIcon?: string
         * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
         * Defaults to 'search' icon.
         */
        this.backIcon = 'search';
        /**
         * searchIcon?: string
         * The icon used to open/focus the search toggle.
         * Defaults to 'search' icon.
         */
        this.searchIcon = 'search';
        /**
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        this.clearIcon = 'cancel';
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
    __decorate([
        _angular_core.ViewChild(TdSearchInputComponent),
        __metadata("design:type", TdSearchInputComponent)
    ], TdSearchBoxComponent.prototype, "_searchInput", void 0);
    __decorate([
        _angular_core.Input('backIcon'),
        __metadata("design:type", String)
    ], TdSearchBoxComponent.prototype, "backIcon", void 0);
    __decorate([
        _angular_core.Input('searchIcon'),
        __metadata("design:type", String)
    ], TdSearchBoxComponent.prototype, "searchIcon", void 0);
    __decorate([
        _angular_core.Input('clearIcon'),
        __metadata("design:type", String)
    ], TdSearchBoxComponent.prototype, "clearIcon", void 0);
    __decorate([
        _angular_core.Input('showUnderline'),
        __metadata("design:type", Boolean)
    ], TdSearchBoxComponent.prototype, "showUnderline", void 0);
    __decorate([
        _angular_core.Input('debounce'),
        __metadata("design:type", Number)
    ], TdSearchBoxComponent.prototype, "debounce", void 0);
    __decorate([
        _angular_core.Input('alwaysVisible'),
        __metadata("design:type", Boolean)
    ], TdSearchBoxComponent.prototype, "alwaysVisible", void 0);
    __decorate([
        _angular_core.Input('placeholder'),
        __metadata("design:type", String)
    ], TdSearchBoxComponent.prototype, "placeholder", void 0);
    __decorate([
        _angular_core.Output('searchDebounce'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdSearchBoxComponent.prototype, "onSearchDebounce", void 0);
    __decorate([
        _angular_core.Output('search'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdSearchBoxComponent.prototype, "onSearch", void 0);
    __decorate([
        _angular_core.Output('clear'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdSearchBoxComponent.prototype, "onClear", void 0);
    TdSearchBoxComponent = __decorate([
        _angular_core.Component({
            selector: 'td-search-box',
            template: "<div class=\"td-search-box\"> <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\"> <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon> <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon> </button> <td-search-input #searchInput [@inputState]=\"alwaysVisible || searchVisible\" [debounce]=\"debounce\" [showUnderline]=\"showUnderline\" [placeholder]=\"placeholder\" [clearIcon]=\"clearIcon\" (searchDebounce)=\"handleSearchDebounce($event)\" (search)=\"handleSearch($event)\" (clear)=\"handleClear(); toggleVisibility()\"> </td-search-input> </div>",
            styles: [":host { display: block; } .td-search-box { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } .td-search-box .td-search-icon { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; } .td-search-box td-search-input { margin-left: 12px; } ::ng-deep [dir='rtl'] .td-search-box td-search-input { margin-right: 12px; margin-left: 0px !important; } /*# sourceMappingURL=search-box.component.css.map */ "],
            animations: [
                _angular_animations.trigger('inputState', [
                    _angular_animations.state('0', _angular_animations.style({
                        width: '0%',
                        margin: '0px',
                    })),
                    _angular_animations.state('1', _angular_animations.style({
                        width: '100%',
                        margin: _angular_animations.AUTO_STYLE,
                    })),
                    _angular_animations.transition('0 => 1', _angular_animations.animate('200ms ease-in')),
                    _angular_animations.transition('1 => 0', _angular_animations.animate('200ms ease-out')),
                ]),
            ],
        })
    ], TdSearchBoxComponent);
    return TdSearchBoxComponent;
}());

var CovalentSearchModule = (function () {
    function CovalentSearchModule() {
    }
    CovalentSearchModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_forms.FormsModule,
                _angular_common.CommonModule,
                _angular_material.MatInputModule,
                _angular_material.MatIconModule,
                _angular_material.MatButtonModule,
            ],
            declarations: [
                TdSearchInputComponent,
                TdSearchBoxComponent,
            ],
            exports: [
                TdSearchInputComponent,
                TdSearchBoxComponent,
            ],
        })
    ], CovalentSearchModule);
    return CovalentSearchModule;
}());

(function (StepState) {
    StepState[StepState["None"] = 'none'] = "None";
    StepState[StepState["Required"] = 'required'] = "Required";
    StepState[StepState["Complete"] = 'complete'] = "Complete";
})(exports.StepState || (exports.StepState = {}));
var TdStepLabelDirective = (function (_super) {
    __extends(TdStepLabelDirective, _super);
    function TdStepLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdStepLabelDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-step-label]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdStepLabelDirective);
    return TdStepLabelDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdStepActionsDirective = (function (_super) {
    __extends(TdStepActionsDirective, _super);
    function TdStepActionsDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdStepActionsDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-step-actions]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdStepActionsDirective);
    return TdStepActionsDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdStepSummaryDirective = (function (_super) {
    __extends(TdStepSummaryDirective, _super);
    function TdStepSummaryDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdStepSummaryDirective = __decorate([
        _angular_core.Directive({
            selector: '[td-step-summary]ng-template',
        }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TdStepSummaryDirective);
    return TdStepSummaryDirective;
}(_angular_cdk_portal.TemplatePortalDirective));
var TdStepBase = (function () {
    function TdStepBase() {
    }
    return TdStepBase;
}());
/* tslint:disable-next-line */
var _TdStepMixinBase = mixinDisableRipple(mixinDisabled(TdStepBase));
var TdStepComponent = (function (_super) {
    __extends(TdStepComponent, _super);
    function TdStepComponent(_viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._viewContainerRef = _viewContainerRef;
        _this._active = false;
        _this._state = exports.StepState.None;
        /**
         * activated?: function
         * Event emitted when [TdStepComponent] is activated.
         */
        _this.onActivated = new _angular_core.EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        _this.onDeactivated = new _angular_core.EventEmitter();
        return _this;
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
            this._setActive(_angular_cdk_coercion.coerceBooleanProperty(active));
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
        this._contentPortal = new _angular_cdk_portal.TemplatePortal(this._content, this._viewContainerRef);
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
    /** Method executed when the disabled value changes */
    TdStepComponent.prototype.onDisabledChange = function (v) {
        if (v && this._active) {
            this._active = false;
            this._onDeactivated();
        }
    };
    /**
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     */
    TdStepComponent.prototype._setActive = function (newActive) {
        if (this.disabled) {
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
    __decorate([
        _angular_core.ViewChild(_angular_core.TemplateRef),
        __metadata("design:type", _angular_core.TemplateRef)
    ], TdStepComponent.prototype, "_content", void 0);
    __decorate([
        _angular_core.ContentChild(TdStepLabelDirective),
        __metadata("design:type", TdStepLabelDirective)
    ], TdStepComponent.prototype, "stepLabel", void 0);
    __decorate([
        _angular_core.ContentChild(TdStepActionsDirective),
        __metadata("design:type", TdStepActionsDirective)
    ], TdStepComponent.prototype, "stepActions", void 0);
    __decorate([
        _angular_core.ContentChild(TdStepSummaryDirective),
        __metadata("design:type", TdStepSummaryDirective)
    ], TdStepComponent.prototype, "stepSummary", void 0);
    __decorate([
        _angular_core.Input('label'),
        __metadata("design:type", String)
    ], TdStepComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input('sublabel'),
        __metadata("design:type", String)
    ], TdStepComponent.prototype, "sublabel", void 0);
    __decorate([
        _angular_core.Input('active'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TdStepComponent.prototype, "active", null);
    __decorate([
        _angular_core.Input('state'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdStepComponent.prototype, "state", null);
    __decorate([
        _angular_core.Output('activated'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdStepComponent.prototype, "onActivated", void 0);
    __decorate([
        _angular_core.Output('deactivated'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdStepComponent.prototype, "onDeactivated", void 0);
    TdStepComponent = __decorate([
        _angular_core.Component({
            selector: 'td-step',
            inputs: ['disabled', 'disableRipple'],
            template: "<ng-template> <ng-content></ng-content> </ng-template>",
        }),
        __metadata("design:paramtypes", [_angular_core.ViewContainerRef])
    ], TdStepComponent);
    return TdStepComponent;
}(_TdStepMixinBase));

(function (StepMode) {
    StepMode[StepMode["Vertical"] = 'vertical'] = "Vertical";
    StepMode[StepMode["Horizontal"] = 'horizontal'] = "Horizontal";
})(exports.StepMode || (exports.StepMode = {}));
var TdStepsComponent = (function () {
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
    __decorate([
        _angular_core.ContentChildren(TdStepComponent),
        __metadata("design:type", _angular_core.QueryList),
        __metadata("design:paramtypes", [_angular_core.QueryList])
    ], TdStepsComponent.prototype, "stepsContent", null);
    __decorate([
        _angular_core.Input('mode'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TdStepsComponent.prototype, "mode", null);
    __decorate([
        _angular_core.Output('stepChange'),
        __metadata("design:type", _angular_core.EventEmitter)
    ], TdStepsComponent.prototype, "onStepChange", void 0);
    TdStepsComponent = __decorate([
        _angular_core.Component({
            selector: 'td-steps',
            styles: [".td-line-wrapper, .td-step { position: relative; } .td-steps-header { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; } .td-line-wrapper { width: 24px; min-height: 1px; } .td-horizontal-line { border-bottom-width: 1px; border-bottom-style: solid; height: 1px; position: relative; top: 36px; min-width: 15px; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-sizing: border-box; box-sizing: border-box; } ::ng-deep :not([dir='rtl']) .td-horizontal-line { left: -6px; right: -3px; } ::ng-deep [dir='rtl'] .td-horizontal-line { left: -3px; right: -6px; } .td-vertical-line { position: absolute; bottom: -16px; top: -16px; border-left-width: 1px; border-left-style: solid; } ::ng-deep :not([dir='rtl']) .td-vertical-line { left: 20px; right: auto; } ::ng-deep [dir='rtl'] .td-vertical-line { left: auto; right: 20px; } /*# sourceMappingURL=steps.component.css.map */ "],
            template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\"> <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\"> <td-step-header class=\"td-step-horizontal-header\" (keydown.enter)=\"step.open()\" [number]=\"index + 1\" [active]=\"step.active\" [disableRipple]=\"step.disableRipple\" [disabled]=\"step.disabled\"  [state]=\"step.state\" (click)=\"step.open()\"> <ng-template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></ng-template> <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template> <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</ng-template> </td-step-header> <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span> </ng-template> </div> <div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\"> <td-step-header class=\"td-step-vertical-header\" (keydown.enter)=\"step.toggle()\" [number]=\"index + 1\" [active]=\"step.active\"  [disabled]=\"step.disabled\" [disableRipple]=\"step.disableRipple\" [state]=\"step.state\" (click)=\"step.toggle()\" *ngIf=\"isVertical()\"> <ng-template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></ng-template> <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template> <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</ng-template> </td-step-header> <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\"> <td-step-body [active]=\"step.active\" [state]=\"step.state\"> <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\"> <div *ngIf=\"!last\" class=\"td-vertical-line\"></div> </div> <ng-template td-step-body-content [cdkPortalHost]=\"step.stepContent\"></ng-template> <ng-template td-step-body-actions [cdkPortalHost]=\"step.stepActions\"></ng-template> <ng-template td-step-body-summary [cdkPortalHost]=\"step.stepSummary\"></ng-template> </td-step-body> </ng-template> </div> ",
        })
    ], TdStepsComponent);
    return TdStepsComponent;
}());

var TdStepHeaderBase = (function () {
    function TdStepHeaderBase() {
    }
    return TdStepHeaderBase;
}());
/* tslint:disable-next-line */
var _TdStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdStepHeaderBase));
var TdStepHeaderComponent = (function (_super) {
    __extends(TdStepHeaderComponent, _super);
    function TdStepHeaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        _this.state = exports.StepState.None;
        return _this;
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
    __decorate([
        _angular_core.Input('number'),
        __metadata("design:type", Number)
    ], TdStepHeaderComponent.prototype, "number", void 0);
    __decorate([
        _angular_core.Input('active'),
        __metadata("design:type", Boolean)
    ], TdStepHeaderComponent.prototype, "active", void 0);
    __decorate([
        _angular_core.Input('state'),
        __metadata("design:type", Number)
    ], TdStepHeaderComponent.prototype, "state", void 0);
    TdStepHeaderComponent = __decorate([
        _angular_core.Component({
            selector: 'td-step-header',
            inputs: ['disabled', 'disableRipple'],
            styles: [".td-step-header { position: relative; outline: none; height: 72px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; } .td-step-header:hover:not(.mat-disabled) { cursor: pointer; } .td-step-header mat-icon.td-edit-icon { margin: 0 8px; } .td-step-header mat-icon.mat-warn { font-size: 24px; height: 24px; width: 24px; } .td-step-header mat-icon.mat-complete { position: relative; left: -2px; top: 2px; font-size: 28px; height: 24px; width: 24px; } .td-step-header .td-circle { height: 24px; width: 24px; line-height: 24px; border-radius: 99%; text-align: center; -webkit-box-flex: 0; -ms-flex: none; flex: none; } .td-step-header .td-circle mat-icon { margin-top: 2px; font-weight: bold; } .td-step-header .td-triangle > mat-icon { font-size: 25px; } .td-step-header .td-complete { font-size: 0; } ::ng-deep :not([dir='rtl']) .td-step-header .td-circle, ::ng-deep :not([dir='rtl']) .td-step-header .td-triangle, ::ng-deep :not([dir='rtl']) .td-step-header .td-complete { margin-left: 8px; margin-right: 0px; } ::ng-deep [dir='rtl'] .td-step-header .td-circle, ::ng-deep [dir='rtl'] .td-step-header .td-triangle, ::ng-deep [dir='rtl'] .td-step-header .td-complete { margin-left: 0px; margin-right: 8px; } .td-step-header .td-circle, .td-step-header .td-complete { font-size: 14px; } .td-step-header .td-step-label-wrapper { padding-left: 8px; padding-right: 8px; } .td-step-header .td-step-header-separator { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-sizing: border-box; box-sizing: border-box; } /*# sourceMappingURL=step-header.component.css.map */ "],
            template: "<div class=\"td-step-header\" [class.mat-disabled]=\"disabled\" matRipple [matRippleDisabled]=\"disabled || disableRipple\" [tabIndex]=\"disabled ? -1 : 0\"> <div class=\"td-circle\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-active]=\"active && !disabled\" *ngIf=\"!isRequired() && !isComplete()\"> <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span> </div> <div class=\"td-complete\" *ngIf=\"isComplete()\"> <mat-icon class=\"mat-complete\">check_circle</mat-icon> </div> <div class=\"td-triangle\" [class.bg-muted]=\"disabled\" *ngIf=\"isRequired()\"> <mat-icon class=\"mat-warn\">warning</mat-icon> </div> <div class=\"td-step-label-wrapper\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-warn]=\"isRequired() && !disabled\"> <div class=\"td-step-label\"> <ng-content select=\"[td-step-header-label]\"></ng-content> </div> <div class=\"td-step-sublabel\"> <ng-content select=\"[td-step-header-sublabel]\"></ng-content> </div> </div> <span class=\"td-step-header-separator\"></span> <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon> </div>",
        })
    ], TdStepHeaderComponent);
    return TdStepHeaderComponent;
}(_TdStepHeaderMixinBase));

var TdStepBodyComponent = (function () {
    function TdStepBodyComponent() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of body.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = exports.StepState.None;
    }
    Object.defineProperty(TdStepBodyComponent.prototype, "hasContent", {
        get: function () {
            return this.contentRef &&
                (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepBodyComponent.prototype, "hasActions", {
        get: function () {
            return this.actionsRef &&
                (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepBodyComponent.prototype, "hasSummary", {
        get: function () {
            return this.summaryRef &&
                (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepBodyComponent.prototype.isComplete = function () {
        return this.state === exports.StepState.Complete;
    };
    __decorate([
        _angular_core.ViewChild('contentRef', { read: _angular_core.ElementRef }),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdStepBodyComponent.prototype, "contentRef", void 0);
    __decorate([
        _angular_core.ViewChild('actionsRef', { read: _angular_core.ElementRef }),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdStepBodyComponent.prototype, "actionsRef", void 0);
    __decorate([
        _angular_core.ViewChild('summaryRef', { read: _angular_core.ElementRef }),
        __metadata("design:type", _angular_core.ElementRef)
    ], TdStepBodyComponent.prototype, "summaryRef", void 0);
    __decorate([
        _angular_core.Input('active'),
        __metadata("design:type", Boolean)
    ], TdStepBodyComponent.prototype, "active", void 0);
    __decorate([
        _angular_core.Input('state'),
        __metadata("design:type", Number)
    ], TdStepBodyComponent.prototype, "state", void 0);
    TdStepBodyComponent = __decorate([
        _angular_core.Component({
            selector: 'td-step-body',
            styles: [":host { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; } :host .td-step-body { overflow-x: hidden; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-sizing: border-box; box-sizing: border-box; } :host .td-step-body .td-step-content { overflow-x: auto; } :host .td-step-body .td-step-actions { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; } /*# sourceMappingURL=step-body.component.css.map */ "],
            template: "<ng-content></ng-content> <div class=\"td-step-body\"> <div class=\"td-step-content-wrapper\" [@tdCollapse]=\"!active\"> <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\"> <ng-content select=\"[td-step-body-content]\"></ng-content> </div> <div #actionsRef [class.td-step-actions]=\"hasActions\"> <ng-content select=\"[td-step-body-actions]\"></ng-content> </div> </div> <div #summaryRef [@tdCollapse]=\"active || !isComplete()\" [class.td-step-summary]=\"hasSummary\"> <ng-content select=\"[td-step-body-summary]\"></ng-content> </div> </div>",
            animations: [
                TdCollapseAnimation(),
            ],
        })
    ], TdStepBodyComponent);
    return TdStepBodyComponent;
}());

// Steps
var TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
];
var CovalentStepsModule = (function () {
    function CovalentStepsModule() {
    }
    CovalentStepsModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _angular_material.MatIconModule,
                _angular_material.MatRippleModule,
                _angular_cdk_portal.PortalModule,
                _angular_cdk_scrolling.ScrollDispatchModule,
                CovalentCommonModule,
            ],
            declarations: [
                TD_STEPS,
            ],
            exports: [
                TD_STEPS,
            ],
        })
    ], CovalentStepsModule);
    return CovalentStepsModule;
}());

var TdVirtualScrollRowDirective = (function (_super) {
    __extends(TdVirtualScrollRowDirective, _super);
    function TdVirtualScrollRowDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdVirtualScrollRowDirective = __decorate([
        _angular_core.Directive({ selector: '[tdVirtualScrollRow]' }),
        __metadata("design:paramtypes", [_angular_core.TemplateRef,
            _angular_core.ViewContainerRef])
    ], TdVirtualScrollRowDirective);
    return TdVirtualScrollRowDirective;
}(_angular_cdk_portal.TemplatePortalDirective));

var TD_VIRTUAL_OFFSET$1 = 2;
var TdVirtualScrollContainerComponent = (function () {
    function TdVirtualScrollContainerComponent(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._initialized = false;
        this._totalHeight = 0;
        this._hostHeight = 0;
        this._scrollVerticalOffset = 0;
        this._fromRow = 0;
        this._toRow = 0;
        /**
         * trackBy?: TrackByFunction
         * This accepts the same trackBy function [ngFor] does.
         * https://angular.io/api/core/TrackByFunction
         */
        this.trackBy = function (index, item) {
            return item;
        };
    }
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        /**
         * data: any[]
         * List of items to virtually iterate on.
         */
        set: function (data) {
            this._data = data;
            if (this._initialized) {
                this._calculateVirtualRows();
            }
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "virtualData", {
        get: function () {
            return this._virtualData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "rowHeight", {
        get: function () {
            if (this._rows && this._rows.toArray()[0]) {
                return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "totalHeight", {
        get: function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "fromRow", {
        get: function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "toRow", {
        get: function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "offsetTransform", {
        get: function () {
            return this._offsetTransform;
        },
        enumerable: true,
        configurable: true
    });
    TdVirtualScrollContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._rowChangeSubs = this._rows.changes.subscribe(function () {
            _this._calculateVirtualRows();
        });
        this._initialized = true;
        this._calculateVirtualRows();
    };
    TdVirtualScrollContainerComponent.prototype.ngAfterViewChecked = function () {
        var newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
        if (this._hostHeight !== newHostHeight) {
            this._hostHeight = newHostHeight;
            if (this._initialized) {
                this._calculateVirtualRows();
            }
        }
    };
    TdVirtualScrollContainerComponent.prototype.ngOnDestroy = function () {
        if (this._rowChangeSubs) {
            this._rowChangeSubs.unsubscribe();
        }
    };
    TdVirtualScrollContainerComponent.prototype.handleScroll = function (event) {
        var element = event.target;
        if (element) {
            var verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
        }
    };
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     */
    TdVirtualScrollContainerComponent.prototype.refresh = function () {
        this._calculateVirtualRows();
    };
    /**
     * Method to scroll to a specific row of the list.
     */
    TdVirtualScrollContainerComponent.prototype.scrollTo = function (row) {
        this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to scroll to the start of the list.
     */
    TdVirtualScrollContainerComponent.prototype.scrollToStart = function () {
        this.scrollTo(0);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to scroll to the end of the list.
     */
    TdVirtualScrollContainerComponent.prototype.scrollToEnd = function () {
        this.scrollTo(this.totalHeight / this.rowHeight);
        this._changeDetectorRef.markForCheck();
    };
    TdVirtualScrollContainerComponent.prototype._calculateVirtualRows = function () {
        var _this = this;
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            var fromRow = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET$1;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            var range = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET$1 * 2);
            var toRow = range + this.fromRow;
            if (isFinite(toRow) && toRow > this._data.length) {
                toRow = this._data.length;
            }
            else if (!isFinite(toRow)) {
                toRow = TD_VIRTUAL_OFFSET$1;
            }
            this._toRow = toRow;
        }
        else {
            this._totalHeight = 0;
            this._fromRow = 0;
            this._toRow = 0;
        }
        var offset = 0;
        if (this._scrollVerticalOffset > (TD_VIRTUAL_OFFSET$1 * this.rowHeight)) {
            offset = this.fromRow * this.rowHeight;
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    __decorate([
        _angular_core.Input('data'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TdVirtualScrollContainerComponent.prototype, "data", null);
    __decorate([
        _angular_core.ViewChildren('rowElement'),
        __metadata("design:type", _angular_core.QueryList)
    ], TdVirtualScrollContainerComponent.prototype, "_rows", void 0);
    __decorate([
        _angular_core.ContentChild(TdVirtualScrollRowDirective),
        __metadata("design:type", TdVirtualScrollRowDirective)
    ], TdVirtualScrollContainerComponent.prototype, "_rowTemplate", void 0);
    __decorate([
        _angular_core.Input('trackBy'),
        __metadata("design:type", Function)
    ], TdVirtualScrollContainerComponent.prototype, "trackBy", void 0);
    __decorate([
        _angular_core.HostListener('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TdVirtualScrollContainerComponent.prototype, "handleScroll", null);
    TdVirtualScrollContainerComponent = __decorate([
        _angular_core.Component({
            selector: 'td-virtual-scroll-container',
            styles: [":host { display: block; height: 100%; width: 100%; overflow: auto; position: relative; } /*# sourceMappingURL=virtual-scroll-container.component.css.map */ "],
            template: "<div [style.height.px]=\"totalHeight\"></div> <div [style.transform]=\"offsetTransform\" [style.position]=\"'absolute'\" [style.width.%]=\"100\"> <ng-template let-row let-index=\"index\" ngFor [ngForOf]=\"virtualData\" [ngForTrackBy]=\"trackBy\"> <div #rowElement [style.width.%]=\"100\"> <ng-template *ngIf=\"_rowTemplate\" [ngTemplateOutlet]=\"_rowTemplate.templateRef\" [ngTemplateOutletContext]=\"{row: row, index: (fromRow + index), first: (fromRow + index) === 0, last: (fromRow + index) === (data.length - 1), odd: ((fromRow + index + 1) % 2) === 1, even: ((fromRow + index + 1) % 2) === 0}\"> </ng-template> </div> </ng-template> </div>",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [_angular_core.ElementRef,
            _angular_platformBrowser.DomSanitizer,
            _angular_core.Renderer2,
            _angular_core.ChangeDetectorRef])
    ], TdVirtualScrollContainerComponent);
    return TdVirtualScrollContainerComponent;
}());

var TD_VIRTUAL_SCROLL = [
    TdVirtualScrollRowDirective,
    TdVirtualScrollContainerComponent,
];
var CovalentVirtualScrollModule = (function () {
    function CovalentVirtualScrollModule() {
    }
    CovalentVirtualScrollModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
            ],
            declarations: [
                TD_VIRTUAL_SCROLL,
            ],
            exports: [
                TD_VIRTUAL_SCROLL,
            ],
        })
    ], CovalentVirtualScrollModule);
    return CovalentVirtualScrollModule;
}());

/**
 * COMMON
 */

exports.TdToggleDirective = TdToggleDirective;
exports.TdFadeDirective = TdFadeDirective;
exports.TdAutoTrimDirective = TdAutoTrimDirective;
exports.TdTimeAgoPipe = TdTimeAgoPipe;
exports.TdTimeDifferencePipe = TdTimeDifferencePipe;
exports.TdBytesPipe = TdBytesPipe;
exports.TdDigitsPipe = TdDigitsPipe;
exports.TdTruncatePipe = TdTruncatePipe;
exports.CovalentCommonModule = CovalentCommonModule;
exports.TdRotateAnimation = TdRotateAnimation;
exports.TdCollapseAnimation = TdCollapseAnimation;
exports.TdFadeInOutAnimation = TdFadeInOutAnimation;
exports.TdBounceAnimation = TdBounceAnimation;
exports.TdFlashAnimation = TdFlashAnimation;
exports.TdHeadshakeAnimation = TdHeadshakeAnimation;
exports.TdJelloAnimation = TdJelloAnimation;
exports.TdPulseAnimation = TdPulseAnimation;
exports.mixinDisabled = mixinDisabled;
exports.mixinDisableRipple = mixinDisableRipple;
exports.CovalentValidators = CovalentValidators;
exports.CovalentChipsModule = CovalentChipsModule;
exports.TdChipsComponent = TdChipsComponent;
exports.TdChipDirective = TdChipDirective;
exports.TdAutocompleteOptionDirective = TdAutocompleteOptionDirective;
exports.CovalentDataTableModule = CovalentDataTableModule;
exports.TdDataTableComponent = TdDataTableComponent;
exports.TdDataTableService = TdDataTableService;
exports.TdDataTableColumnComponent = TdDataTableColumnComponent;
exports.TdDataTableCellComponent = TdDataTableCellComponent;
exports.TdDataTableRowComponent = TdDataTableRowComponent;
exports.TdDataTableColumnRowComponent = TdDataTableColumnRowComponent;
exports.TdDataTableTableComponent = TdDataTableTableComponent;
exports.TdDialogService = TdDialogService;
exports.TdDialogComponent = TdDialogComponent;
exports.TdDialogTitleDirective = TdDialogTitleDirective;
exports.TdAlertDialogComponent = TdAlertDialogComponent;
exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
exports.TdPromptDialogComponent = TdPromptDialogComponent;
exports.CovalentDialogsModule = CovalentDialogsModule;
exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule;
exports.TdExpansionPanelComponent = TdExpansionPanelComponent;
exports.TdExpansionPanelGroupComponent = TdExpansionPanelGroupComponent;
exports.CovalentFileModule = CovalentFileModule;
exports.TdFileUploadComponent = TdFileUploadComponent;
exports.TdFileInputComponent = TdFileInputComponent;
exports.TdFileInputLabelDirective = TdFileInputLabelDirective;
exports.TdFileSelectDirective = TdFileSelectDirective;
exports.TdFileDropDirective = TdFileDropDirective;
exports.TdFileService = TdFileService;
exports.CovalentJsonFormatterModule = CovalentJsonFormatterModule;
exports.TdJsonFormatterComponent = TdJsonFormatterComponent;
exports.TdLayoutComponent = TdLayoutComponent;
exports.TdLayoutToggleDirective = TdLayoutToggleDirective;
exports.TdLayoutCloseDirective = TdLayoutCloseDirective;
exports.TdLayoutOpenDirective = TdLayoutOpenDirective;
exports.TdLayoutNavComponent = TdLayoutNavComponent;
exports.TdLayoutNavListComponent = TdLayoutNavListComponent;
exports.TdLayoutNavListToggleDirective = TdLayoutNavListToggleDirective;
exports.TdLayoutNavListCloseDirective = TdLayoutNavListCloseDirective;
exports.TdLayoutNavListOpenDirective = TdLayoutNavListOpenDirective;
exports.TdLayoutCardOverComponent = TdLayoutCardOverComponent;
exports.TdLayoutManageListComponent = TdLayoutManageListComponent;
exports.TdLayoutManageListToggleDirective = TdLayoutManageListToggleDirective;
exports.TdLayoutManageListCloseDirective = TdLayoutManageListCloseDirective;
exports.TdLayoutManageListOpenDirective = TdLayoutManageListOpenDirective;
exports.TdLayoutFooterComponent = TdLayoutFooterComponent;
exports.TdNavigationDrawerComponent = TdNavigationDrawerComponent;
exports.TdNavigationDrawerMenuDirective = TdNavigationDrawerMenuDirective;
exports.TdNavigationDrawerToolbarDirective = TdNavigationDrawerToolbarDirective;
exports.CovalentLayoutModule = CovalentLayoutModule;
exports.CovalentLoadingModule = CovalentLoadingModule;
exports.TdLoadingService = TdLoadingService;
exports.TdMediaService = TdMediaService;
exports.TdMediaToggleDirective = TdMediaToggleDirective;
exports.CovalentMediaModule = CovalentMediaModule;
exports.CovalentMenuModule = CovalentMenuModule;
exports.TdMenuComponent = TdMenuComponent;
exports.CovalentMessageModule = CovalentMessageModule;
exports.TdMessageComponent = TdMessageComponent;
exports.CovalentNotificationsModule = CovalentNotificationsModule;
exports.TdNotificationCountComponent = TdNotificationCountComponent;
exports.CovalentPagingModule = CovalentPagingModule;
exports.TdPagingBarComponent = TdPagingBarComponent;
exports.CovalentSearchModule = CovalentSearchModule;
exports.TdSearchBoxComponent = TdSearchBoxComponent;
exports.TdSearchInputComponent = TdSearchInputComponent;
exports.CovalentStepsModule = CovalentStepsModule;
exports.TdStepComponent = TdStepComponent;
exports.TdStepsComponent = TdStepsComponent;
exports.TdVirtualScrollRowDirective = TdVirtualScrollRowDirective;
exports.TdVirtualScrollContainerComponent = TdVirtualScrollContainerComponent;
exports.CovalentVirtualScrollModule = CovalentVirtualScrollModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core.umd.js.map
