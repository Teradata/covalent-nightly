(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/media', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.media = {}),global.ng.core,global.rxjs,global.ng.common));
}(this, (function (exports,core,rxjs,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdMediaService = /** @class */ (function () {
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
            // we make sure that the resize checking happend outside of Angular since it happens often
            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
                return rxjs.fromEvent(window, 'resize').subscribe(function () {
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
        /**
         * Deregisters a query so its stops being notified or used.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.deregisterQuery = /**
         * Deregisters a query so its stops being notified or used.
         * @param {?} query
         * @return {?}
         */
            function (query) {
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
        /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.query = /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         * @param {?} query
         * @return {?}
         */
            function (query) {
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
        /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.registerQuery = /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         * @param {?} query
         * @return {?}
         */
            function (query) {
                if (this._queryMap.get(query.toLowerCase())) {
                    query = this._queryMap.get(query.toLowerCase());
                }
                if (!this._querySources[query]) {
                    this._querySources[query] = new rxjs.BehaviorSubject(matchMedia(query).matches);
                    this._queryObservables[query] = this._querySources[query].asObservable();
                }
                return this._queryObservables[query];
            };
        /**
         * Trigger a match media event on all subscribed observables.
         */
        /**
         * Trigger a match media event on all subscribed observables.
         * @return {?}
         */
        TdMediaService.prototype.broadcast = /**
         * Trigger a match media event on all subscribed observables.
         * @return {?}
         */
            function () {
                this._onResize();
            };
        /**
         * @return {?}
         */
        TdMediaService.prototype._onResize = /**
         * @return {?}
         */
            function () {
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
        /**
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype._matchMediaTrigger = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                this._querySources[query].next(matchMedia(query).matches);
            };
        TdMediaService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdMediaService.ctorParameters = function () {
            return [
                { type: core.NgZone }
            ];
        };
        return TdMediaService;
    }());
    /**
     * @param {?} parent
     * @param {?} ngZone
     * @return {?}
     */
    function MEDIA_PROVIDER_FACTORY(parent, ngZone) {
        return parent || new TdMediaService(ngZone);
    }
    /** @type {?} */
    var MEDIA_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdMediaService,
        deps: [[new core.Optional(), new core.SkipSelf(), TdMediaService], core.NgZone],
        useFactory: MEDIA_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdMediaToggleDirective = /** @class */ (function () {
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
            set: /**
             * tdMediaToggle: string
             * Media query used to evaluate screen/window size.
             * Toggles attributes, classes and styles if media query is matched.
             * @param {?} query
             * @return {?}
             */ function (query) {
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
            set: /**
             * mediaAttributes: {[key: string]: string}
             * Attributes to be toggled when media query matches.
             * @param {?} attributes
             * @return {?}
             */ function (attributes) {
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
            set: /**
             * mediaClasses: string[]
             * CSS Classes to be toggled when media query matches.
             * @param {?} classes
             * @return {?}
             */ function (classes) {
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
            set: /**
             * mediaStyles: {[key: string]: string}
             * CSS Styles to be toggled when media query matches.
             * @param {?} styles
             * @return {?}
             */ function (styles) {
                this._styles = styles;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._mediaChange(this._mediaService.query(this._query));
                this._subscription = this._mediaService.registerQuery(this._query).subscribe(function (matches) {
                    _this._mediaChange(matches);
                });
            };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                }
            };
        /**
         * @param {?} matches
         * @return {?}
         */
        TdMediaToggleDirective.prototype._mediaChange = /**
         * @param {?} matches
         * @return {?}
         */
            function (matches) {
                this._matches = matches;
                this._changeAttributes();
                this._changeClasses();
                this._changeStyles();
            };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeAttributes = /**
         * @return {?}
         */
            function () {
                for (var attr in this._attributes) {
                    if (this._matches) {
                        this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
                    }
                    else {
                        this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
                    }
                }
            };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeClasses = /**
         * @return {?}
         */
            function () {
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
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeStyles = /**
         * @return {?}
         */
            function () {
                for (var style in this._styles) {
                    if (this._matches) {
                        this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
                    }
                    else {
                        this._renderer.removeStyle(this._elementRef.nativeElement, style);
                    }
                }
            };
        TdMediaToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdMediaToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdMediaToggleDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: TdMediaService }
            ];
        };
        TdMediaToggleDirective.propDecorators = {
            query: [{ type: core.Input, args: ['tdMediaToggle',] }],
            attributes: [{ type: core.Input, args: ['mediaAttributes',] }],
            classes: [{ type: core.Input, args: ['mediaClasses',] }],
            styles: [{ type: core.Input, args: ['mediaStyles',] }]
        };
        return TdMediaToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MEDIA = [
        TdMediaToggleDirective,
    ];
    var CovalentMediaModule = /** @class */ (function () {
        function CovalentMediaModule() {
        }
        CovalentMediaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
                    },] }
        ];
        return CovalentMediaModule;
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

    exports.CovalentMediaModule = CovalentMediaModule;
    exports.TdMediaToggleDirective = TdMediaToggleDirective;
    exports.MEDIA_PROVIDER_FACTORY = MEDIA_PROVIDER_FACTORY;
    exports.TdMediaService = TdMediaService;
    exports.MEDIA_PROVIDER = MEDIA_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1tZWRpYS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL21lZGlhL3NlcnZpY2VzL21lZGlhLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL21lZGlhL2RpcmVjdGl2ZXMvbWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbWVkaWEvbWVkaWEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgU2tpcFNlbGYsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRNZWRpYVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2dsb2JhbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9xdWVyeU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3F1ZXJ5U291cmNlczogeyBba2V5OiBzdHJpbmddOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj59ID0ge307XG4gIHByaXZhdGUgX3F1ZXJ5T2JzZXJ2YWJsZXM6IHtba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPGJvb2xlYW4+fSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCd4cycsICcobWF4LXdpZHRoOiA1OTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LXhzJywgJyhtaW4td2lkdGg6IDYwMHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnc20nLCAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LXNtJywgJyhtaW4td2lkdGg6IDk2MHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnbWQnLCAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC1tZCcsICcobWluLXdpZHRoOiAxMjgwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdsZycsICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC1sZycsICcobWluLXdpZHRoOiAxOTIwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCd4bCcsICcobWluLXdpZHRoOiAxOTIwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdsYW5kc2NhcGUnLCAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdwb3J0cmFpdCcsICcob3JpZW50YXRpb246IHBvcnRyYWl0KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgncHJpbnQnLCAncHJpbnQnKTtcblxuICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgLy8gd2UgbWFrZSBzdXJlIHRoYXQgdGhlIHJlc2l6ZSBjaGVja2luZyBoYXBwZW5kIG91dHNpZGUgb2YgQW5ndWxhciBzaW5jZSBpdCBoYXBwZW5zIG9mdGVuXG4gICAgdGhpcy5fZ2xvYmFsU3Vic2NyaXB0aW9uID0gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gd2F5IHRvIHByZXZlbnQgdGhlIHJlc2l6ZSBldmVudCBmcm9tIHRyaWdnZXJpbmcgdGhlIG1hdGNoIG1lZGlhIGlmIHRoZXJlIGlzIGFscmVhZHkgb25lIGV2ZW50IHJ1bm5pbmcgYWxyZWFkeS5cbiAgICAgICAgaWYgKCF0aGlzLl9yZXNpemluZykge1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX29uUmVzaXplKCk7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGEgcXVlcnkgc28gaXRzIHN0b3BzIGJlaW5nIG5vdGlmaWVkIG9yIHVzZWQuXG4gICAqL1xuICBkZXJlZ2lzdGVyUXVlcnkocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldLnVuc3Vic2NyaWJlKCk7XG4gICAgZGVsZXRlIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV07XG4gICAgZGVsZXRlIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZXZhbHVhdGUgd2hldGhlciBhIGdpdmVuIG1lZGlhIHF1ZXJ5IGlzIHRydWUgb3IgZmFsc2UgZ2l2ZW4gdGhlIGN1cnJlbnQgZGV2aWNlJ3Mgc2NyZWVuIC8gd2luZG93IHNpemUuXG4gICAqL1xuICBwdWJsaWMgcXVlcnkocXVlcnk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICByZXR1cm4gbWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBtZWRpYSBxdWVyeSBhbmQgcmV0dXJucyBhbiBbT2JzZXJ2YWJsZV0gdGhhdCB3aWxsIHJlLWV2YWx1YXRlIGFuZFxuICAgKiByZXR1cm4gaWYgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMgb24gd2luZG93IHJlc2l6ZS5cbiAgICogTm90ZTogZG9uJ3QgZm9yZ2V0IHRvIHVuc3Vic2NyaWJlIGZyb20gW09ic2VydmFibGVdIHdoZW4gZmluaXNoZWQgd2F0Y2hpbmcuXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJRdWVyeShxdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XSkge1xuICAgICAgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyk7XG4gICAgICB0aGlzLl9xdWVyeU9ic2VydmFibGVzW3F1ZXJ5XSA9IHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0uYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9xdWVyeU9ic2VydmFibGVzW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgbWF0Y2ggbWVkaWEgZXZlbnQgb24gYWxsIHN1YnNjcmliZWQgb2JzZXJ2YWJsZXMuXG4gICAqL1xuICBwdWJsaWMgYnJvYWRjYXN0KCk6IHZvaWQge1xuICAgIHRoaXMuX29uUmVzaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF9vblJlc2l6ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBxdWVyeSBpbiB0aGlzLl9xdWVyeVNvdXJjZXMpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9tYXRjaE1lZGlhVHJpZ2dlcihxdWVyeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXRjaE1lZGlhVHJpZ2dlcihxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XS5uZXh0KG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNRURJQV9QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGRNZWRpYVNlcnZpY2UsIG5nWm9uZTogTmdab25lKTogVGRNZWRpYVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZE1lZGlhU2VydmljZShuZ1pvbmUpO1xufVxuXG5leHBvcnQgY29uc3QgTUVESUFfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZE1lZGlhU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkTWVkaWFTZXJ2aWNlXSwgTmdab25lXSxcbiAgdXNlRmFjdG9yeTogTUVESUFfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRNZWRpYVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZWRpYS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTWVkaWFUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZWRpYVRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9xdWVyeTogc3RyaW5nO1xuICBwcml2YXRlIF9tYXRjaGVzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2F0dHJpYnV0ZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gIHByaXZhdGUgX3N0eWxlczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgcHJpdmF0ZSBfY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICAvKipcbiAgICogdGRNZWRpYVRvZ2dsZTogc3RyaW5nXG4gICAqIE1lZGlhIHF1ZXJ5IHVzZWQgdG8gZXZhbHVhdGUgc2NyZWVuL3dpbmRvdyBzaXplLlxuICAgKiBUb2dnbGVzIGF0dHJpYnV0ZXMsIGNsYXNzZXMgYW5kIHN0eWxlcyBpZiBtZWRpYSBxdWVyeSBpcyBtYXRjaGVkLlxuICAgKi9cbiAgQElucHV0KCd0ZE1lZGlhVG9nZ2xlJylcbiAgc2V0IHF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1ZXJ5IG5lZWRlZCBmb3IgW3RkTWVkaWFUb2dnbGVdIGRpcmVjdGl2ZS4nKTtcbiAgICB9XG4gICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYUF0dHJpYnV0ZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9XG4gICAqIEF0dHJpYnV0ZXMgdG8gYmUgdG9nZ2xlZCB3aGVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMuXG4gICAqL1xuICBASW5wdXQoJ21lZGlhQXR0cmlidXRlcycpXG4gIHNldCBhdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IGFueSkge1xuICAgIHRoaXMuX2F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhQ2xhc3Nlczogc3RyaW5nW11cbiAgICogQ1NTIENsYXNzZXMgdG8gYmUgdG9nZ2xlZCB3aGVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMuXG4gICAqL1xuICBASW5wdXQoJ21lZGlhQ2xhc3NlcycpXG4gIHNldCBjbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY2xhc3NlcyA9IGNsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFTdHlsZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9XG4gICAqIENTUyBTdHlsZXMgdG8gYmUgdG9nZ2xlZCB3aGVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMuXG4gICAqL1xuICBASW5wdXQoJ21lZGlhU3R5bGVzJylcbiAgc2V0IHN0eWxlcyhzdHlsZXM6IGFueSkge1xuICAgIHRoaXMuX3N0eWxlcyA9IHN0eWxlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX21lZGlhU2VydmljZTogVGRNZWRpYVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX21lZGlhQ2hhbmdlKHRoaXMuX21lZGlhU2VydmljZS5xdWVyeSh0aGlzLl9xdWVyeSkpO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX21lZGlhU2VydmljZS5yZWdpc3RlclF1ZXJ5KHRoaXMuX3F1ZXJ5KS5zdWJzY3JpYmUoKG1hdGNoZXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuX21lZGlhQ2hhbmdlKG1hdGNoZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWVkaWFDaGFuZ2UobWF0Y2hlczogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xuICAgIHRoaXMuX2NoYW5nZUF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9jaGFuZ2VDbGFzc2VzKCk7XG4gICAgdGhpcy5fY2hhbmdlU3R5bGVzKCk7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VBdHRyaWJ1dGVzKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGF0dHIgaW4gdGhpcy5fYXR0cmlidXRlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYXR0ciwgdGhpcy5fYXR0cmlidXRlc1thdHRyXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VDbGFzc2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLl9tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVN0eWxlcygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBzdHlsZSBpbiB0aGlzLl9zdHlsZXMpIHtcbiAgICAgIGlmICh0aGlzLl9tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3R5bGUsIHRoaXMuX3N0eWxlc1tzdHlsZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdHlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1FRElBX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRkTWVkaWFUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX01FRElBOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRNZWRpYVRvZ2dsZURpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX01FRElBLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfTUVESUEsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1FRElBX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudE1lZGlhTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbImZyb21FdmVudCIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJOZ1pvbmUiLCJPcHRpb25hbCIsIlNraXBTZWxmIiwiRGlyZWN0aXZlIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVlFLHdCQUFvQixPQUFlO1lBQW5DLGlCQTRCQztZQTVCbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtZQU4zQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBRTNCLGNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7WUFDM0Qsa0JBQWEsR0FBK0MsRUFBRSxDQUFDO1lBQy9ELHNCQUFpQixHQUF5QyxFQUFFLENBQUM7WUFHbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDJDQUEyQyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDRDQUE0QyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENB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