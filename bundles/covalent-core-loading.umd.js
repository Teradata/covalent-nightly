(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@covalent/core/common'), require('@angular/cdk/portal'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/loading', ['exports', '@angular/core', 'rxjs', '@covalent/core/common', '@angular/cdk/portal', '@angular/cdk/overlay', '@angular/common', '@angular/material/progress-bar', '@angular/material/progress-spinner'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.loading = {}),global.ng.core,global.rxjs,global.covalent.core.common,global.ng.cdk.portal,global.ng.cdk.overlay,global.ng.common,global.ng.material['progress-bar'],global.ng.material['progress-spinner']));
}(this, (function (exports,core,rxjs,common,portal,overlay,common$1,progressBar,progressSpinner) { 'use strict';

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

var LoadingType = {
    Circular: 'circular',
    Linear: 'linear',
};
var LoadingMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
var LoadingStrategy = {
    Overlay: 'overlay',
    Replace: 'replace',
};
var LoadingStyle = {
    FullScreen: 'fullscreen',
    Overlay: 'overlay',
    None: 'none',
};
var TD_CIRCLE_DIAMETER = 100;
var TdLoadingComponent = /** @class */ (function () {
    function TdLoadingComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new rxjs.Subject();
        this._animationOut = new rxjs.Subject();
        this._mode = LoadingMode.Indeterminate;
        this._defaultMode = LoadingMode.Indeterminate;
        this._value = 0;
        this._circleDiameter = TD_CIRCLE_DIAMETER;
        this.animation = false;
        this.style = LoadingStyle.None;
        this.type = LoadingType.Circular;
        this.color = 'primary';
    }
    Object.defineProperty(TdLoadingComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
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
        set: function (value) {
            this._value = value;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    TdLoadingComponent.prototype.ngDoCheck = function () {
        if (this.isOverlay() && this._hostHeight() > 1) {
            if (this.animation) {
                this._setCircleDiameter();
                this._changeDetectorRef.markForCheck();
            }
        }
    };
    TdLoadingComponent.prototype.getHeight = function () {
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
        var strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
    };
    TdLoadingComponent.prototype.isCircular = function () {
        return this.type === LoadingType.Circular;
    };
    TdLoadingComponent.prototype.isLinear = function () {
        return this.type === LoadingType.Linear;
    };
    TdLoadingComponent.prototype.isFullScreen = function () {
        return this.style === LoadingStyle.FullScreen;
    };
    TdLoadingComponent.prototype.isOverlay = function () {
        return this.style === LoadingStyle.Overlay;
    };
    TdLoadingComponent.prototype.animationComplete = function (event) {
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
        this.value = 0;
        this._changeDetectorRef.markForCheck();
        this._animationOut.next(undefined);
    };
    TdLoadingComponent.prototype.startInAnimation = function () {
        this._mode = this._defaultMode;
        this._setCircleDiameter();
        this.animation = true;
        this._changeDetectorRef.markForCheck();
        return this._animationIn.asObservable();
    };
    TdLoadingComponent.prototype.startOutAnimation = function () {
        this.animation = false;
        this._mode = LoadingMode.Determinate;
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    };
    TdLoadingComponent.prototype._setCircleDiameter = function () {
        var diameter = TD_CIRCLE_DIAMETER;
        if (this.height) {
            diameter = this.height;
        }
        else if (this.height === undefined) {
            diameter = this._hostHeight();
        }
        if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
            this._circleDiameter = Math.floor(diameter);
        }
        else {
            this._circleDiameter = TD_CIRCLE_DIAMETER;
        }
    };
    TdLoadingComponent.prototype._hostHeight = function () {
        if ((this._elementRef.nativeElement)) {
            return ((this._elementRef.nativeElement)).getBoundingClientRect().height;
        }
        return 0;
    };
    return TdLoadingComponent;
}());
TdLoadingComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-loading',
                styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"],
                template: "<div class=\"td-loading-wrapper\"\n    [style.min-height]=\"getHeight()\"\n    [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n    [class.td-overlay]=\"isOverlay() || isFullScreen()\" \n    [class.td-fullscreen]=\"isFullScreen()\">\n  <div [@tdFadeInOut]=\"animation\"\n     (@tdFadeInOut.done)=\"animationComplete($event)\"\n     [style.min-height]=\"getHeight()\"\n     class=\"td-loading\">\n    <mat-progress-spinner *ngIf=\"isCircular()\" \n                        [mode]=\"mode\"\n                        [value]=\"value\" \n                        [color]=\"color\" \n                        [diameter]=\"getCircleDiameter()\"\n                        [strokeWidth]=\"getCircleStrokeWidth()\">\n    </mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" \n                     [mode]=\"mode\"\n                     [value]=\"value\"\n                     [color]=\"color\">\n    </mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>",
                animations: [
                    common.TdFadeInOutAnimation(),
                ],
            },] },
];
TdLoadingComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.ChangeDetectorRef, },
]; };
var TdLoadingFactory = /** @class */ (function () {
    function TdLoadingFactory(_componentFactoryResolver, _overlay, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._overlay = _overlay;
        this._injector = _injector;
    }
    TdLoadingFactory.prototype.createFullScreenComponent = function (options) {
        var _this = this;
        ((options)).height = undefined;
        ((options)).style = LoadingStyle.FullScreen;
        var loadingRef = this._initializeContext();
        var loading = false;
        var overlayRef;
        loadingRef.observable
            .subscribe(function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                overlayRef = _this._createOverlay();
                loadingRef.componentRef = overlayRef.attach(new portal.ComponentPortal(TdLoadingComponent));
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
    TdLoadingFactory.prototype.createOverlayComponent = function (options, viewContainerRef, templateRef) {
        ((options)).height = undefined;
        ((options)).style = LoadingStyle.Overlay;
        var loadingRef = this._createComponent(options);
        var loading = false;
        loadingRef.componentRef.instance.content = new portal.TemplatePortal(templateRef, viewContainerRef);
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
    TdLoadingFactory.prototype.createReplaceComponent = function (options, viewContainerRef, templateRef, context) {
        var nativeElement = (templateRef.elementRef.nativeElement);
        ((options)).height = nativeElement.nextElementSibling ?
            nativeElement.nextElementSibling.scrollHeight : undefined;
        ((options)).style = LoadingStyle.None;
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
                    var cdr = viewContainerRef.createEmbeddedView(templateRef, context);
                    viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                    cdr.detectChanges();
                    cdr.markForCheck();
                });
            }
        });
        return loadingRef;
    };
    TdLoadingFactory.prototype._createOverlay = function () {
        var state = new overlay.OverlayConfig();
        state.hasBackdrop = false;
        state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
        return this._overlay.create(state);
    };
    TdLoadingFactory.prototype._createComponent = function (options) {
        var compRef = this._initializeContext();
        compRef.componentRef = this._componentFactoryResolver
            .resolveComponentFactory(TdLoadingComponent).create(this._injector);
        this._mapOptions(options, compRef.componentRef.instance);
        return compRef;
    };
    TdLoadingFactory.prototype._initializeContext = function () {
        var subject = new rxjs.Subject();
        return {
            observable: subject.asObservable(),
            subject: subject,
            componentRef: undefined,
            times: 0,
        };
    };
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
    return TdLoadingFactory;
}());
TdLoadingFactory.decorators = [
    { type: core.Injectable },
];
TdLoadingFactory.ctorParameters = function () { return [
    { type: core.ComponentFactoryResolver, },
    { type: overlay.Overlay, },
    { type: core.Injector, },
]; };
function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay$$1, injector) {
    return parent || new TdLoadingFactory(componentFactoryResolver, overlay$$1, injector);
}
var LOADING_FACTORY_PROVIDER = {
    provide: TdLoadingFactory,
    deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingFactory], core.ComponentFactoryResolver, overlay.Overlay, core.Injector],
    useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
};
var TdLoadingConfig = /** @class */ (function () {
    function TdLoadingConfig(config) {
        this.name = config.name;
        if (!this.name) {
            throw Error('Name is required for [TdLoading] configuration.');
        }
        this.mode = config.mode ? config.mode : LoadingMode.Indeterminate;
        this.type = config.type ? config.type : LoadingType.Circular;
        this.color = config.color ? config.color : 'primary';
    }
    return TdLoadingConfig;
}());
var TdLoadingDirectiveConfig = /** @class */ (function (_super) {
    __extends(TdLoadingDirectiveConfig, _super);
    function TdLoadingDirectiveConfig(config) {
        var _this = _super.call(this, config) || this;
        _this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
        return _this;
    }
    return TdLoadingDirectiveConfig;
}(TdLoadingConfig));
var TdLoadingService = /** @class */ (function () {
    function TdLoadingService(_loadingFactory) {
        this._loadingFactory = _loadingFactory;
        this._context = {};
        this._timeouts = {};
        this.create({
            name: 'td-loading-main',
        });
    }
    TdLoadingService.prototype.createComponent = function (config, viewContainerRef, templateRef, context) {
        var directiveConfig = new TdLoadingDirectiveConfig(config);
        if (this._context[directiveConfig.name]) {
            throw Error("Name duplication: [TdLoading] directive has a name conflict with " + directiveConfig.name + ".");
        }
        if (directiveConfig.strategy === LoadingStrategy.Overlay) {
            this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
        }
        else {
            this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
        }
        return this._context[directiveConfig.name];
    };
    TdLoadingService.prototype.create = function (config) {
        var fullscreenConfig = new TdLoadingConfig(config);
        this.removeComponent(fullscreenConfig.name);
        this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
    };
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
    TdLoadingService.prototype.register = function (name, registers) {
        var _this = this;
        if (name === void 0) { name = 'td-loading-main'; }
        if (registers === void 0) { registers = 1; }
        if (this._context[name]) {
            registers = registers < 1 ? 1 : registers;
            this._context[name].times += registers;
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        else {
            if (!this._timeouts[name]) {
                this._timeouts[name] = setTimeout(function () {
                    _this.register(name, registers);
                });
            }
            else {
                this._clearTimeout(name);
            }
        }
        return false;
    };
    TdLoadingService.prototype.resolve = function (name, resolves) {
        if (name === void 0) { name = 'td-loading-main'; }
        if (resolves === void 0) { resolves = 1; }
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
    TdLoadingService.prototype.resolveAll = function (name) {
        if (name === void 0) { name = 'td-loading-main'; }
        this._clearTimeout(name);
        if (this._context[name]) {
            this._context[name].times = 0;
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        return false;
    };
    TdLoadingService.prototype.setValue = function (name, value) {
        if (this._context[name]) {
            var instance = this._context[name].componentRef.instance;
            if (instance.mode === LoadingMode.Determinate && instance.animation) {
                instance.value = value;
                return true;
            }
        }
        return false;
    };
    TdLoadingService.prototype._clearTimeout = function (name) {
        clearTimeout(this._timeouts[name]);
        delete this._timeouts[name];
    };
    return TdLoadingService;
}());
TdLoadingService.decorators = [
    { type: core.Injectable },
];
TdLoadingService.ctorParameters = function () { return [
    { type: TdLoadingFactory, },
]; };
function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
    return parent || new TdLoadingService(loadingFactory);
}
var LOADING_PROVIDER = {
    provide: TdLoadingService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingService], TdLoadingFactory],
    useFactory: LOADING_PROVIDER_FACTORY,
};
var TdLoadingContext = /** @class */ (function () {
    function TdLoadingContext() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
    return TdLoadingContext;
}());
var TD_LOADING_NEXT_ID = 0;
var TdLoadingDirective = /** @class */ (function () {
    function TdLoadingDirective(_viewContainerRef, _templateRef, _loadingService) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._loadingService = _loadingService;
        this._context = new TdLoadingContext();
        this.color = 'primary';
    }
    Object.defineProperty(TdLoadingDirective.prototype, "name", {
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
        set: function (type) {
            switch (type) {
                case LoadingType.Linear:
                    this._type = LoadingType.Linear;
                    break;
                default:
                    this._type = LoadingType.Circular;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "mode", {
        set: function (mode) {
            switch (mode) {
                case LoadingMode.Determinate:
                    this._mode = LoadingMode.Determinate;
                    break;
                default:
                    this._mode = LoadingMode.Indeterminate;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "strategy", {
        set: function (stategy) {
            switch (stategy) {
                case LoadingStrategy.Overlay:
                    this._strategy = LoadingStrategy.Overlay;
                    break;
                default:
                    this._strategy = LoadingStrategy.Replace;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    TdLoadingDirective.prototype.ngOnInit = function () {
        this._registerComponent();
    };
    TdLoadingDirective.prototype.ngOnDestroy = function () {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    };
    TdLoadingDirective.prototype._registerComponent = function () {
        if (!this._name) {
            throw new Error('Name is needed to register loading directive');
        }
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
    return TdLoadingDirective;
}());
TdLoadingDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLoading]',
            },] },
];
TdLoadingDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: core.TemplateRef, },
    { type: TdLoadingService, },
]; };
TdLoadingDirective.propDecorators = {
    "name": [{ type: core.Input, args: ['tdLoading',] },],
    "until": [{ type: core.Input, args: ['tdLoadingUntil',] },],
    "type": [{ type: core.Input, args: ['tdLoadingType',] },],
    "mode": [{ type: core.Input, args: ['tdLoadingMode',] },],
    "strategy": [{ type: core.Input, args: ['tdLoadingStrategy',] },],
    "color": [{ type: core.Input, args: ['tdLoadingColor',] },],
};
var TD_LOADING = [
    TdLoadingComponent,
    TdLoadingDirective,
];
var TD_LOADING_ENTRY_COMPONENTS = [
    TdLoadingComponent,
];
var CovalentLoadingModule = /** @class */ (function () {
    function CovalentLoadingModule() {
    }
    return CovalentLoadingModule;
}());
CovalentLoadingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common$1.CommonModule,
                    progressBar.MatProgressBarModule,
                    progressSpinner.MatProgressSpinnerModule,
                    overlay.OverlayModule,
                    portal.PortalModule,
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
            },] },
];
CovalentLoadingModule.ctorParameters = function () { return []; };

exports.CovalentLoadingModule = CovalentLoadingModule;
exports.LoadingType = LoadingType;
exports.LoadingMode = LoadingMode;
exports.LoadingStrategy = LoadingStrategy;
exports.LoadingStyle = LoadingStyle;
exports.TD_CIRCLE_DIAMETER = TD_CIRCLE_DIAMETER;
exports.TdLoadingComponent = TdLoadingComponent;
exports.TdLoadingContext = TdLoadingContext;
exports.TdLoadingDirective = TdLoadingDirective;
exports.TdLoadingConfig = TdLoadingConfig;
exports.TdLoadingDirectiveConfig = TdLoadingDirectiveConfig;
exports.TdLoadingService = TdLoadingService;
exports.LOADING_PROVIDER_FACTORY = LOADING_PROVIDER_FACTORY;
exports.LOADING_PROVIDER = LOADING_PROVIDER;
exports.TdLoadingFactory = TdLoadingFactory;
exports.LOADING_FACTORY_PROVIDER_FACTORY = LOADING_FACTORY_PROVIDER_FACTORY;
exports.LOADING_FACTORY_PROVIDER = LOADING_FACTORY_PROVIDER;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-loading.umd.js.map
