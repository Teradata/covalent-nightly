(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/media', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.media = {}),global.ng.core,global.rxjs,global.ng.common));
}(this, (function (exports,core,rxjs,common) { 'use strict';

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
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return rxjs.fromEvent(window, 'resize').subscribe(function () {
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
    TdMediaService.prototype.deregisterQuery = function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        this._querySources[query].unsubscribe();
        delete this._querySources[query];
        delete this._queryObservables[query];
    };
    TdMediaService.prototype.query = function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        return this._ngZone.run(function () {
            return matchMedia(query).matches;
        });
    };
    TdMediaService.prototype.registerQuery = function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        if (!this._querySources[query]) {
            this._querySources[query] = new rxjs.BehaviorSubject(matchMedia(query).matches);
            this._queryObservables[query] = this._querySources[query].asObservable();
        }
        return this._queryObservables[query];
    };
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
    return TdMediaService;
}());
TdMediaService.decorators = [
    { type: core.Injectable },
];
TdMediaService.ctorParameters = function () { return [
    { type: core.NgZone, },
]; };
function MEDIA_PROVIDER_FACTORY(parent, ngZone) {
    return parent || new TdMediaService(ngZone);
}
var MEDIA_PROVIDER = {
    provide: TdMediaService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdMediaService], core.NgZone],
    useFactory: MEDIA_PROVIDER_FACTORY,
};
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
        set: function (attributes) {
            this._attributes = attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "classes", {
        set: function (classes) {
            this._classes = classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "styles", {
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
        for (var style in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style);
            }
        }
    };
    return TdMediaToggleDirective;
}());
TdMediaToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdMediaToggle]',
            },] },
];
TdMediaToggleDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: TdMediaService, },
]; };
TdMediaToggleDirective.propDecorators = {
    "query": [{ type: core.Input, args: ['tdMediaToggle',] },],
    "attributes": [{ type: core.Input, args: ['mediaAttributes',] },],
    "classes": [{ type: core.Input, args: ['mediaClasses',] },],
    "styles": [{ type: core.Input, args: ['mediaStyles',] },],
};
var TD_MEDIA = [
    TdMediaToggleDirective,
];
var CovalentMediaModule = /** @class */ (function () {
    function CovalentMediaModule() {
    }
    return CovalentMediaModule;
}());
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
            },] },
];
CovalentMediaModule.ctorParameters = function () { return []; };

exports.CovalentMediaModule = CovalentMediaModule;
exports.TdMediaToggleDirective = TdMediaToggleDirective;
exports.TdMediaService = TdMediaService;
exports.MEDIA_PROVIDER_FACTORY = MEDIA_PROVIDER_FACTORY;
exports.MEDIA_PROVIDER = MEDIA_PROVIDER;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-media.umd.js.map
