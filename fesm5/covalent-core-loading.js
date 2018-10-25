import { Component, ChangeDetectorRef, ElementRef, Injectable, ComponentFactoryResolver, SkipSelf, Optional, Injector, Directive, Input, ViewContainerRef, TemplateRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { tdFadeInOutAnimation } from '@covalent/core/common';
import { TemplatePortal, ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { __extends } from 'tslib';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var LoadingType = {
    Circular: 'circular',
    Linear: 'linear',
};
/** @enum {string} */
var LoadingMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
/** @enum {string} */
var LoadingStrategy = {
    Overlay: 'overlay',
    Replace: 'replace',
};
/** @enum {string} */
var LoadingStyle = {
    FullScreen: 'fullscreen',
    Overlay: 'overlay',
    None: 'none',
};
/** @type {?} */
var TD_CIRCLE_DIAMETER = 100;
var TdLoadingComponent = /** @class */ (function () {
    function TdLoadingComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new Subject();
        this._animationOut = new Subject();
        this._mode = LoadingMode.Indeterminate;
        this._defaultMode = LoadingMode.Indeterminate;
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
        this.type = LoadingType.Circular;
        /**
         * color: primary' | 'accent' | 'warn'
         * Sets theme color of [TdLoadingComponent] rendered.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLoadingComponent.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        /**
         * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
         */
        set: /**
         * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this._defaultMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        /**
         * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
         */
        set: /**
         * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            // Check for changes for `OnPush` change detection
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        // When overlay is used and the host width has a value greater than 1px
        // set the circle diameter when possible incase the loading component was rendered in a hidden state
        if (this.isOverlay() && this._hostHeight() > 1) {
            if (this.animation) {
                this._setCircleDiameter();
                this._changeDetectorRef.markForCheck();
            }
        }
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        // Ignore height if style is `overlay` or `fullscreen`.
        // Add height if child elements have a height and style is `none`, else return default height.
        if (this.isOverlay() || this.isFullScreen()) {
            return undefined;
        }
        else {
            return this.height ? this.height + "px" : '150px';
        }
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.getCircleDiameter = /**
     * @return {?}
     */
    function () {
        return this._circleDiameter;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.getCircleStrokeWidth = /**
     * @return {?}
     */
    function () {
        // we calculate the stroke width by setting it as 10% of its diameter
        /** @type {?} */
        var strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isCircular = /**
     * @return {?}
     */
    function () {
        return this.type === LoadingType.Circular;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isLinear = /**
     * @return {?}
     */
    function () {
        return this.type === LoadingType.Linear;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isFullScreen = /**
     * @return {?}
     */
    function () {
        return this.style === LoadingStyle.FullScreen;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isOverlay = /**
     * @return {?}
     */
    function () {
        return this.style === LoadingStyle.Overlay;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdLoadingComponent.prototype.animationComplete = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Check to see if its "in" or "out" animation to execute the proper callback
        if (!event.fromState) {
            this.inAnimationCompleted();
        }
        else {
            this.outAnimationCompleted();
        }
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.inAnimationCompleted = /**
     * @return {?}
     */
    function () {
        this._animationIn.next(undefined);
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.outAnimationCompleted = /**
     * @return {?}
     */
    function () {
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
    /**
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    TdLoadingComponent.prototype.startInAnimation = /**
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    function () {
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
    /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    TdLoadingComponent.prototype.startOutAnimation = /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    function () {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
        * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
        */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    };
    /**
     * Calculate the proper diameter for the circle and set it
     */
    /**
     * Calculate the proper diameter for the circle and set it
     * @return {?}
     */
    TdLoadingComponent.prototype._setCircleDiameter = /**
     * Calculate the proper diameter for the circle and set it
     * @return {?}
     */
    function () {
        // we set a default diameter of 100 since this is the default in material
        /** @type {?} */
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
    /**
     * Returns the host height of the loading component
     * @return {?}
     */
    TdLoadingComponent.prototype._hostHeight = /**
     * Returns the host height of the loading component
     * @return {?}
     */
    function () {
        if ((/** @type {?} */ (this._elementRef.nativeElement))) {
            return ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return 0;
    };
    TdLoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-loading',
                    template: "<div class=\"td-loading-wrapper\"\n    [style.min-height]=\"getHeight()\"\n    [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n    [class.td-overlay]=\"isOverlay() || isFullScreen()\" \n    [class.td-fullscreen]=\"isFullScreen()\">\n  <div [@tdFadeInOut]=\"animation\"\n     (@tdFadeInOut.done)=\"animationComplete($event)\"\n     [style.min-height]=\"getHeight()\"\n     class=\"td-loading\">\n    <mat-progress-spinner *ngIf=\"isCircular()\" \n                        [mode]=\"mode\"\n                        [value]=\"value\" \n                        [color]=\"color\" \n                        [diameter]=\"getCircleDiameter()\"\n                        [strokeWidth]=\"getCircleStrokeWidth()\">\n    </mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" \n                     [mode]=\"mode\"\n                     [value]=\"value\"\n                     [color]=\"color\">\n    </mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>",
                    animations: [
                        tdFadeInOutAnimation,
                    ],
                    styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    TdLoadingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    return TdLoadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * NOTE: \@internal usage only.
 */
var TdLoadingFactory = /** @class */ (function () {
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
    /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @return {?}
     */
    TdLoadingFactory.prototype.createFullScreenComponent = /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        ((/** @type {?} */ (options))).height = undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.FullScreen;
        /** @type {?} */
        var loadingRef = this._initializeContext();
        /** @type {?} */
        var loading = false;
        /** @type {?} */
        var overlayRef;
        loadingRef.observable
            .subscribe(function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                overlayRef = _this._createOverlay();
                loadingRef.componentRef = overlayRef.attach(new ComponentPortal(TdLoadingComponent));
                _this._mapOptions(options, loadingRef.componentRef.instance);
                loadingRef.componentRef.instance.startInAnimation();
                loadingRef.componentRef.changeDetectorRef.detectChanges();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                /** @type {?} */
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
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @return {?}
     */
    TdLoadingFactory.prototype.createOverlayComponent = /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @return {?}
     */
    function (options, viewContainerRef, templateRef) {
        ((/** @type {?} */ (options))).height = undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.Overlay;
        /** @type {?} */
        var loadingRef = this._createComponent(options);
        /** @type {?} */
        var loading = false;
        loadingRef.componentRef.instance.content = new TemplatePortal(templateRef, viewContainerRef);
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
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    TdLoadingFactory.prototype.createReplaceComponent = /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    function (options, viewContainerRef, templateRef, context) {
        /** @type {?} */
        var nativeElement = (/** @type {?} */ (templateRef.elementRef.nativeElement));
        ((/** @type {?} */ (options))).height = nativeElement.nextElementSibling ?
            nativeElement.nextElementSibling.scrollHeight : undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.None;
        /** @type {?} */
        var loadingRef = this._createComponent(options);
        /** @type {?} */
        var loading = false;
        viewContainerRef.createEmbeddedView(templateRef, context);
        loadingRef.observable
            .subscribe(function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                /** @type {?} */
                var index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                if (index < 0) {
                    viewContainerRef.clear();
                    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                }
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                /** @type {?} */
                var subs_2 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                    subs_2.unsubscribe();
                    // passing context so when the template is re-attached, we can keep the reference of the variables
                    /** @type {?} */
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
    /**
     * Creates a fullscreen overlay for the loading usage.
     * @return {?}
     */
    TdLoadingFactory.prototype._createOverlay = /**
     * Creates a fullscreen overlay for the loading usage.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var state = new OverlayConfig();
        state.hasBackdrop = false;
        state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
        return this._overlay.create(state);
    };
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     */
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     * @param {?} options
     * @return {?}
     */
    TdLoadingFactory.prototype._createComponent = /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var compRef = this._initializeContext();
        compRef.componentRef = this._componentFactoryResolver
            .resolveComponentFactory(TdLoadingComponent).create(this._injector);
        this._mapOptions(options, compRef.componentRef.instance);
        return compRef;
    };
    /**
     * Initialize context for loading component.
     */
    /**
     * Initialize context for loading component.
     * @return {?}
     */
    TdLoadingFactory.prototype._initializeContext = /**
     * Initialize context for loading component.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var subject = new Subject();
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
    /**
     * Maps configuration to the loading component instance.
     * @param {?} options
     * @param {?} instance
     * @return {?}
     */
    TdLoadingFactory.prototype._mapOptions = /**
     * Maps configuration to the loading component instance.
     * @param {?} options
     * @param {?} instance
     * @return {?}
     */
    function (options, instance) {
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
    TdLoadingFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdLoadingFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Overlay },
        { type: Injector }
    ]; };
    return TdLoadingFactory;
}());
/**
 * @param {?} parent
 * @param {?} componentFactoryResolver
 * @param {?} overlay
 * @param {?} injector
 * @return {?}
 */
function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay, injector) {
    return parent || new TdLoadingFactory(componentFactoryResolver, overlay, injector);
}
/** @type {?} */
var LOADING_FACTORY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingFactory,
    deps: [[new Optional(), new SkipSelf(), TdLoadingFactory], ComponentFactoryResolver, Overlay, Injector],
    useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
    /**
     * params:
     * - config: ILoadingDirectiveConfig
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     *
     * NOTE: \@internal usage only.
     * @param {?} config
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    TdLoadingService.prototype.createComponent = /**
     * params:
     * - config: ILoadingDirectiveConfig
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     *
     * NOTE: \@internal usage only.
     * @param {?} config
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    function (config, viewContainerRef, templateRef, context) {
        /** @type {?} */
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
    /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     */
    /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     * @param {?} config
     * @return {?}
     */
    TdLoadingService.prototype.create = /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
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
    /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     * @param {?} name
     * @return {?}
     */
    TdLoadingService.prototype.removeComponent = /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     * @param {?} name
     * @return {?}
     */
    function (name) {
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
     * @param {?=} name
     * @param {?=} registers
     * @return {?}
     */
    TdLoadingService.prototype.register = /**
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
     * @param {?=} name
     * @param {?=} registers
     * @return {?}
     */
    function (name, registers) {
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
     * @param {?=} name
     * @param {?=} resolves
     * @return {?}
     */
    TdLoadingService.prototype.resolve = /**
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
     * @param {?=} name
     * @param {?=} resolves
     * @return {?}
     */
    function (name, resolves) {
        if (name === void 0) { name = 'td-loading-main'; }
        if (resolves === void 0) { resolves = 1; }
        // clear timeout if the loading component is "resolved" before its "registered"
        this._clearTimeout(name);
        if (this._context[name]) {
            resolves = resolves < 1 ? 1 : resolves;
            if (this._context[name].times > 0) {
                /** @type {?} */
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
     * @param {?=} name
     * @return {?}
     */
    TdLoadingService.prototype.resolveAll = /**
     * params:
     * - name: string
     * returns: true if successful
     *
     * Resolves all request for the loading mask referenced by the name parameter.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolveAll()
     * @param {?=} name
     * @return {?}
     */
    function (name) {
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
    /**
     * params:
     * - name: string
     * - value: number
     * returns: true if successful
     *
     * Set value on a loading mask referenced by the name parameter.
     * Usage only available if its mode is 'determinate' and if loading is showing.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    TdLoadingService.prototype.setValue = /**
     * params:
     * - name: string
     * - value: number
     * returns: true if successful
     *
     * Set value on a loading mask referenced by the name parameter.
     * Usage only available if its mode is 'determinate' and if loading is showing.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (this._context[name]) {
            /** @type {?} */
            var instance = this._context[name].componentRef.instance;
            if (instance.mode === LoadingMode.Determinate && instance.animation) {
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
    /**
     * Clears timeout linked to the name.
     * @param {?} name Name of the loading component to be cleared
     * @return {?}
     */
    TdLoadingService.prototype._clearTimeout = /**
     * Clears timeout linked to the name.
     * @param {?} name Name of the loading component to be cleared
     * @return {?}
     */
    function (name) {
        clearTimeout(this._timeouts[name]);
        delete this._timeouts[name];
    };
    TdLoadingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdLoadingService.ctorParameters = function () { return [
        { type: TdLoadingFactory }
    ]; };
    return TdLoadingService;
}());
/**
 * @param {?} parent
 * @param {?} loadingFactory
 * @return {?}
 */
function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
    return parent || new TdLoadingService(loadingFactory);
}
/** @type {?} */
var LOADING_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingService,
    deps: [[new Optional(), new SkipSelf(), TdLoadingService], TdLoadingFactory],
    useFactory: LOADING_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Context class for variable reference
 */
var  /**
 * Context class for variable reference
 */
TdLoadingContext = /** @class */ (function () {
    function TdLoadingContext() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
    return TdLoadingContext;
}());
// Constant for generation of the id for the next component
/** @type {?} */
var TD_LOADING_NEXT_ID = 0;
var TdLoadingDirective = /** @class */ (function () {
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
        set: /**
         * tdLoading: string
         * Name reference of the loading mask, used to register/resolve requests to the mask.
         * @param {?} name
         * @return {?}
         */
        function (name) {
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
        set: /**
         * tdLoadingUntil?: any
         * If its null, undefined or false it will be used to register requests to the mask.
         * Else if its any value that can be resolved as true, it will resolve the mask.
         * [name] is optional when using [until], but can still be used to register/resolve it manually.
         * @param {?} until
         * @return {?}
         */
        function (until) {
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
        set: /**
         * tdLoadingType?: LoadingType or ['linear' | 'circular']
         * Sets the type of loading mask depending on value.
         * Defaults to [LoadingType.Circular | 'circular'].
         * @param {?} type
         * @return {?}
         */
        function (type) {
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
        /**
         * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
         * Sets the mode of loading mask depending on value.
         * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
         */
        set: /**
         * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
         * Sets the mode of loading mask depending on value.
         * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
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
        /**
         * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
         * Sets the strategy of loading mask depending on value.
         * Defaults to [LoadingMode.Replace | 'replace'].
         */
        set: /**
         * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
         * Sets the strategy of loading mask depending on value.
         * Defaults to [LoadingMode.Replace | 'replace'].
         * @param {?} stategy
         * @return {?}
         */
        function (stategy) {
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
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     */
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     * @return {?}
     */
    TdLoadingDirective.prototype.ngOnInit = /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     * @return {?}
     */
    function () {
        this._registerComponent();
    };
    /**
     * Remove component when directive is destroyed.
     */
    /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    TdLoadingDirective.prototype.ngOnDestroy = /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    function () {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    };
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     */
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @return {?}
     */
    TdLoadingDirective.prototype._registerComponent = /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @return {?}
     */
    function () {
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
    TdLoadingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLoading]',
                },] }
    ];
    /** @nocollapse */
    TdLoadingDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: TdLoadingService }
    ]; };
    TdLoadingDirective.propDecorators = {
        name: [{ type: Input, args: ['tdLoading',] }],
        until: [{ type: Input, args: ['tdLoadingUntil',] }],
        type: [{ type: Input, args: ['tdLoadingType',] }],
        mode: [{ type: Input, args: ['tdLoadingMode',] }],
        strategy: [{ type: Input, args: ['tdLoadingStrategy',] }],
        color: [{ type: Input, args: ['tdLoadingColor',] }]
    };
    return TdLoadingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_LOADING = [
    TdLoadingComponent,
    TdLoadingDirective,
];
/** @type {?} */
var TD_LOADING_ENTRY_COMPONENTS = [
    TdLoadingComponent,
];
var CovalentLoadingModule = /** @class */ (function () {
    function CovalentLoadingModule() {
    }
    CovalentLoadingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        OverlayModule,
                        PortalModule,
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
                },] }
    ];
    return CovalentLoadingModule;
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

export { CovalentLoadingModule, LoadingType, LoadingMode, LoadingStrategy, LoadingStyle, TD_CIRCLE_DIAMETER, TdLoadingComponent, TdLoadingContext, TdLoadingDirective, LOADING_PROVIDER_FACTORY, TdLoadingConfig, TdLoadingDirectiveConfig, TdLoadingService, LOADING_PROVIDER, LOADING_FACTORY_PROVIDER_FACTORY, TdLoadingFactory, LOADING_FACTORY_PROVIDER };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1sb2FkaW5nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nL3NlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xvYWRpbmcvZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy9sb2FkaW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdUeXBlIHtcbiAgQ2lyY3VsYXIgPSAnY2lyY3VsYXInLFxuICBMaW5lYXIgPSAnbGluZWFyJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ01vZGUge1xuICBEZXRlcm1pbmF0ZSA9ICdkZXRlcm1pbmF0ZScsXG4gIEluZGV0ZXJtaW5hdGUgPSAnaW5kZXRlcm1pbmF0ZScsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdTdHJhdGVneSB7XG4gIE92ZXJsYXkgPSAnb3ZlcmxheScsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdTdHlsZSB7XG4gIEZ1bGxTY3JlZW4gPSAnZnVsbHNjcmVlbicsXG4gIE92ZXJsYXkgPSAnb3ZlcmxheScsXG4gIE5vbmUgPSAnbm9uZScsXG59XG5cbmltcG9ydCB7IHRkRmFkZUluT3V0QW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IFREX0NJUkNMRV9ESUFNRVRFUjogbnVtYmVyID0gMTAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sb2FkaW5nJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdGRGYWRlSW5PdXRBbmltYXRpb24sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuXG4gIHByaXZhdGUgX2FuaW1hdGlvbkluOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgX2FuaW1hdGlvbk91dDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9tb2RlOiBMb2FkaW5nTW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gIHByaXZhdGUgX2RlZmF1bHRNb2RlOiBMb2FkaW5nTW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jaXJjbGVEaWFtZXRlcjogbnVtYmVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuXG4gIC8qKlxuICAgKiBGbGFnIGZvciBhbmltYXRpb25cbiAgICovXG4gIGFuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb250ZW50IGluamVjdGVkIGludG8gbG9hZGluZyBjb21wb25lbnQuXG4gICAqL1xuICBjb250ZW50OiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuXG4gIC8qKlxuICAgKiBTZXRzIG1vZGUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gdG8gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUgb3IgTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZVxuICAgKi9cbiAgc2V0IG1vZGUobW9kZTogTG9hZGluZ01vZGUpIHtcbiAgICB0aGlzLl9kZWZhdWx0TW9kZSA9IG1vZGU7XG4gIH1cbiAgZ2V0IG1vZGUoKTogTG9hZGluZ01vZGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdmFsdWUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gaWYgbW9kZSBpcyAnTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUnXG4gICAqL1xuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzdHlsZTogTG9hZGluZ1N0eWxlID0gTG9hZGluZ1N0eWxlLk5vbmU7XG5cbiAgLyoqXG4gICAqIGhlaWdodDogbnVtYmVyXG4gICAqIFNldHMgaGVpZ2h0IG9mIFtUZExvYWRpbmdDb21wb25lbnRdLlxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIHR5cGU6IExvYWRpbmdUeXBlXG4gICAqIFNldHMgdHlwZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSByZW5kZXJlZC5cbiAgICovXG4gIHR5cGU6IExvYWRpbmdUeXBlID0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG5cbiAgLyoqXG4gICAqIGNvbG9yOiBwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nXG4gICAqIFNldHMgdGhlbWUgY29sb3Igb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gcmVuZGVyZWQuXG4gICAqL1xuICBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAvLyBXaGVuIG92ZXJsYXkgaXMgdXNlZCBhbmQgdGhlIGhvc3Qgd2lkdGggaGFzIGEgdmFsdWUgZ3JlYXRlciB0aGFuIDFweFxuICAgIC8vIHNldCB0aGUgY2lyY2xlIGRpYW1ldGVyIHdoZW4gcG9zc2libGUgaW5jYXNlIHRoZSBsb2FkaW5nIGNvbXBvbmVudCB3YXMgcmVuZGVyZWQgaW4gYSBoaWRkZW4gc3RhdGVcbiAgICBpZiAodGhpcy5pc092ZXJsYXkoKSAmJiB0aGlzLl9ob3N0SGVpZ2h0KCkgPiAxKSB7XG4gICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5fc2V0Q2lyY2xlRGlhbWV0ZXIoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgLy8gSWdub3JlIGhlaWdodCBpZiBzdHlsZSBpcyBgb3ZlcmxheWAgb3IgYGZ1bGxzY3JlZW5gLlxuICAgIC8vIEFkZCBoZWlnaHQgaWYgY2hpbGQgZWxlbWVudHMgaGF2ZSBhIGhlaWdodCBhbmQgc3R5bGUgaXMgYG5vbmVgLCBlbHNlIHJldHVybiBkZWZhdWx0IGhlaWdodC5cbiAgICBpZiAodGhpcy5pc092ZXJsYXkoKSB8fCB0aGlzLmlzRnVsbFNjcmVlbigpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWlnaHQgPyBgJHt0aGlzLmhlaWdodH1weGAgOiAnMTUwcHgnO1xuICAgIH1cbiAgfVxuXG4gIGdldENpcmNsZURpYW1ldGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZURpYW1ldGVyO1xuICB9XG5cbiAgZ2V0Q2lyY2xlU3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICAvLyB3ZSBjYWxjdWxhdGUgdGhlIHN0cm9rZSB3aWR0aCBieSBzZXR0aW5nIGl0IGFzIDEwJSBvZiBpdHMgZGlhbWV0ZXJcbiAgICBsZXQgc3Ryb2tlV2lkdGg6IG51bWJlciA9IHRoaXMuZ2V0Q2lyY2xlRGlhbWV0ZXIoKSAvIDEwO1xuICAgIHJldHVybiBNYXRoLmFicyhzdHJva2VXaWR0aCk7XG4gIH1cblxuICBpc0NpcmN1bGFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICB9XG5cbiAgaXNMaW5lYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICB9XG5cbiAgaXNGdWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0eWxlID09PSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgfVxuXG4gIGlzT3ZlcmxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSA9PT0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gIH1cblxuICBhbmltYXRpb25Db21wbGV0ZShldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgaXRzIFwiaW5cIiBvciBcIm91dFwiIGFuaW1hdGlvbiB0byBleGVjdXRlIHRoZSBwcm9wZXIgY2FsbGJhY2tcbiAgICBpZiAoIWV2ZW50LmZyb21TdGF0ZSkge1xuICAgICAgdGhpcy5pbkFuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dEFuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGluQW5pbWF0aW9uQ29tcGxldGVkKCk6IHZvaWQge1xuICAgIHRoaXMuX2FuaW1hdGlvbkluLm5leHQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIG91dEFuaW1hdGlvbkNvbXBsZXRlZCgpOiB2b2lkIHtcbiAgIC8qIGxpdHRsZSBoYWNrIHRvIHJlc2V0IHRoZSBsb2FkZXIgdmFsdWUgYW5kIGFuaW1hdGlvbiBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET01cbiAgICAqIGVsc2UsIHRoZSBsb2FkZXIgd2lsbCBhcHBlYXIgd2l0aCBwcmV2IHZhbHVlIHdoZW4gaXRzIHJlZ2lzdGVyZWQgYWdhaW5cbiAgICAqIGFuZCB3aWxsIGRvIGFuIGFuaW1hdGlvbiBnb2luZyBwcmV2IHZhbHVlIHRvIDAuXG4gICAgKi9cbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX2FuaW1hdGlvbk91dC5uZXh0KHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGluIGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzdGFydEluQW5pbWF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLyogbmVlZCB0byBzd2l0Y2ggYmFjayB0byB0aGUgc2VsZWN0ZWQgbW9kZSwgc28gd2UgaGF2ZSBzYXZlZCBpdCBpbiBhbm90aGVyIHZhcmlhYmxlXG4gICAgKiAgYW5kIHRoZW4gcmVjb3ZlciBpdC4gKGlzc3VlIHdpdGggcHJvdHJhY3RvcilcbiAgICAqL1xuICAgIHRoaXMuX21vZGUgPSB0aGlzLl9kZWZhdWx0TW9kZTtcbiAgICAvLyBTZXQgdmFsdWVzIGJlZm9yZSB0aGUgYW5pbWF0aW9ucyBzdGFydHNcbiAgICB0aGlzLl9zZXRDaXJjbGVEaWFtZXRlcigpO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25Jbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb3V0IGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzdGFydE91dEFuaW1hdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYW5pbWF0aW9uID0gZmFsc2U7XG4gICAgLyogbmVlZCB0byBzd2l0Y2ggYmFjayBhbmQgZm9ydGggZnJvbSBkZXRlcm1pbmF0ZS9pbmRldGVybWluYXRlIHNvIHRoZSBzZXRJbnRlcnZhbCgpXG4gICAgKiBpbnNpZGUgbWF0LXByb2dyZXNzLXNwaW5uZXIgc3RvcHMgYW5kIHByb3RyYWN0b3IgZG9lc250IHRpbWVvdXQgd2FpdGluZyB0byBzeW5jLlxuICAgICovXG4gICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkRldGVybWluYXRlO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbk91dC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIHByb3BlciBkaWFtZXRlciBmb3IgdGhlIGNpcmNsZSBhbmQgc2V0IGl0XG4gICAqL1xuICBwcml2YXRlIF9zZXRDaXJjbGVEaWFtZXRlcigpOiB2b2lkIHtcbiAgICAvLyB3ZSBzZXQgYSBkZWZhdWx0IGRpYW1ldGVyIG9mIDEwMCBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIG1hdGVyaWFsXG4gICAgbGV0IGRpYW1ldGVyOiBudW1iZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG4gICAgLy8gaWYgaGVpZ2h0IGlzIHByb3ZpZGVkLCB0aGVuIHdlIHRha2UgdGhhdCBhcyBkaWFtZXRlclxuICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgZGlhbWV0ZXIgPSB0aGlzLmhlaWdodDtcbiAgICAgIC8vIGVsc2UgaWYgaXRzIG5vdCBwcm92aWRlZCwgdGhlbiB3ZSB0YWtlIHRoZSBob3N0IGhlaWdodFxuICAgIH0gZWxzZSBpZiAodGhpcy5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGlhbWV0ZXIgPSB0aGlzLl9ob3N0SGVpZ2h0KCk7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBkaWFtZXRlciBpcyBvdmVyIFREX0NJUkNMRV9ESUFNRVRFUiwgd2Ugc2V0IFREX0NJUkNMRV9ESUFNRVRFUlxuICAgIGlmICghIWRpYW1ldGVyICYmIGRpYW1ldGVyIDw9IFREX0NJUkNMRV9ESUFNRVRFUikge1xuICAgICAgdGhpcy5fY2lyY2xlRGlhbWV0ZXIgPSBNYXRoLmZsb29yKGRpYW1ldGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2lyY2xlRGlhbWV0ZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhvc3QgaGVpZ2h0IG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBfaG9zdEhlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdG9yLCBDb21wb25lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkTG9hZGluZ0NvbnRleHQgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkTG9hZGluZ0NvbXBvbmVudCwgTG9hZGluZ1R5cGUsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIExvYWRpbmdTdHlsZSB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElUZExvYWRpbmdDb25maWcgfSBmcm9tICcuL2xvYWRpbmcuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUludGVybmFsTG9hZGluZ09wdGlvbnMgZXh0ZW5kcyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzdHlsZT86IExvYWRpbmdTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9hZGluZ1JlZiB7XG4gIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgc3ViamVjdD86IFN1YmplY3Q8YW55PjtcbiAgdGltZXM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogTk9URTogQGludGVybmFsIHVzYWdlIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdGYWN0b3J5IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBtYXRlcmlhbCBgT3ZlcmxheWAgc2VydmljZXMgdG8gY3JlYXRlIGEgRE9NIGVsZW1lbnQgYW5kIGF0dGFjaCB0aGUgbG9hZGluZyBjb21wb25lbnRcbiAgICogaW50byBpdC4gTGV2ZXJhZ2luZyB0aGUgc3RhdGUgYW5kIGNvbmZpZ3VyYXRpb24gZnJvbSBpdC5cbiAgICpcbiAgICogU2F2ZXMgYSByZWZlcmVuY2UgaW4gY29udGV4dCB0byBiZSBjYWxsZWQgd2hlbiByZWdpc3RlcmluZy9yZXNvbHZpbmcgdGhlIGxvYWRpbmcgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVGdWxsU2NyZWVuQ29tcG9uZW50KG9wdGlvbnM6IElUZExvYWRpbmdDb25maWcpOiBJTG9hZGluZ1JlZiB7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5zdHlsZSA9IExvYWRpbmdTdHlsZS5GdWxsU2NyZWVuO1xuICAgIGxldCBsb2FkaW5nUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2luaXRpYWxpemVDb250ZXh0KCk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgICBsb2FkaW5nUmVmLm9ic2VydmFibGVcbiAgICAuc3Vic2NyaWJlKChyZWdpc3RlcmVkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChyZWdpc3RlcmVkID4gMCAmJiAhbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgb3ZlcmxheVJlZiA9IHRoaXMuX2NyZWF0ZU92ZXJsYXkoKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYgPSBvdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKFRkTG9hZGluZ0NvbXBvbmVudCkpO1xuICAgICAgICB0aGlzLl9tYXBPcHRpb25zKG9wdGlvbnMsIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRJbkFuaW1hdGlvbigpO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdGVyZWQgPD0gMCAmJiBsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbGV0IHN1YnM6IFN1YnNjcmlwdGlvbiA9IGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0T3V0QW5pbWF0aW9uKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBzdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgIG92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAgICAgb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsb2FkaW5nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb2FkaW5nIGNvbXBvbmVudCBkeW5hbWljYWxseSBhbmQgYXR0YWNoZXMgaXQgaW50byB0aGUgZ2l2ZW4gdmlld0NvbnRhaW5lclJlZi5cbiAgICogTGV2ZXJhZ2VzIFRlbXBsYXRlUG9ydGFscyBmcm9tIG1hdGVyaWFsIHRvIGluamVjdCB0aGUgdGVtcGxhdGUgaW5zaWRlIG9mIGl0IHNvIGl0IGZpdHNcbiAgICogcGVyZmVjdGx5IHdoZW4gb3ZlcmxheWluZyBpdC5cbiAgICpcbiAgICogU2F2ZXMgYSByZWZlcmVuY2UgaW4gY29udGV4dCB0byBiZSBjYWxsZWQgd2hlbiByZWdpc3RlcmluZy9yZXNvbHZpbmcgdGhlIGxvYWRpbmcgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVPdmVybGF5Q29tcG9uZW50KG9wdGlvbnM6IElUZExvYWRpbmdDb25maWcsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+KTogSUxvYWRpbmdSZWYge1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuT3ZlcmxheTtcbiAgICBsZXQgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZW50ID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZVxuICAgIC5zdWJzY3JpYmUoKHJlZ2lzdGVyZWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyZWQgPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydEluQW5pbWF0aW9uKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdGVyZWQgPD0gMCAmJiBsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRPdXRBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9hZGluZyBjb21wb25lbnQgZHluYW1pY2FsbHkgYW5kIGF0dGFjaGVzIGl0IGludG8gdGhlIGdpdmVuIHZpZXdDb250YWluZXJSZWYuXG4gICAqIFJlcGxhY2VzIHRoZSB0ZW1wbGF0ZSB3aXRoIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBkZXBlbmRpbmcgaWYgaXQgd2FzIHJlZ2lzdGVyZWQgb3IgcmVzb2x2ZWQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUmVwbGFjZUNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PiwgY29udGV4dDogVGRMb2FkaW5nQ29udGV4dCk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGVtcGxhdGVSZWYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gbmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgP1xuICAgICAgbmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0IDogdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuTm9uZTtcbiAgICBsZXQgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZiwgY29udGV4dCk7XG4gICAgbG9hZGluZ1JlZi5vYnNlcnZhYmxlXG4gICAgLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmluc2VydChsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0VmlldywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRJbkFuaW1hdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBzdWJzOiBTdWJzY3JpcHRpb24gPSBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydE91dEFuaW1hdGlvbigpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgc3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIC8vIHBhc3NpbmcgY29udGV4dCBzbyB3aGVuIHRoZSB0ZW1wbGF0ZSBpcyByZS1hdHRhY2hlZCwgd2UgY2FuIGtlZXAgdGhlIHJlZmVyZW5jZSBvZiB0aGUgdmFyaWFibGVzXG4gICAgICAgICAgbGV0IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZiwgY29udGV4dCk7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5kZXRhY2godmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3KSk7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTmVlZCB0byBjYWxsIFwibWFya0ZvckNoZWNrXCIgYW5kIFwiZGV0ZWN0Q2hhbmdlc1wiIG9uIGF0dGFjaGVkIHRlbXBsYXRlLCBzbyBpdHMgZGV0ZWN0ZWQgYnkgcGFyZW50IGNvbXBvbmVudCB3aGVuIGF0dGFjaGVkXG4gICAgICAgICAgICogd2l0aCBcIk9uUHVzaFwiIGNoYW5nZSBkZXRlY3Rpb25cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIGNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bGxzY3JlZW4gb3ZlcmxheSBmb3IgdGhlIGxvYWRpbmcgdXNhZ2UuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xuICAgIGxldCBzdGF0ZTogT3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKCk7XG4gICAgc3RhdGUuaGFzQmFja2Ryb3AgPSBmYWxzZTtcbiAgICBzdGF0ZS5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLmNlbnRlckhvcml6b250YWxseSgpLmNlbnRlclZlcnRpY2FsbHkoKTtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5jcmVhdGUoc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBnZW5lcmljIGNvbXBvbmVudCBkeW5hbWljYWxseSB3YWl0aW5nIHRvIGJlIGF0dGFjaGVkIHRvIGEgdmlld0NvbnRhaW5lclJlZi5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZUNvbXBvbmVudChvcHRpb25zOiBJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucyk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgY29tcFJlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9pbml0aWFsaXplQ29udGV4dCgpO1xuICAgIGNvbXBSZWYuY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRkTG9hZGluZ0NvbXBvbmVudCkuY3JlYXRlKHRoaXMuX2luamVjdG9yKTtcbiAgICB0aGlzLl9tYXBPcHRpb25zKG9wdGlvbnMsIGNvbXBSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICByZXR1cm4gY29tcFJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbnRleHQgZm9yIGxvYWRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUNvbnRleHQoKTogSUxvYWRpbmdSZWYge1xuICAgIGxldCBzdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9ic2VydmFibGU6IHN1YmplY3QuYXNPYnNlcnZhYmxlKCksXG4gICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgY29tcG9uZW50UmVmOiB1bmRlZmluZWQsXG4gICAgICB0aW1lczogMCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHMgY29uZmlndXJhdGlvbiB0byB0aGUgbG9hZGluZyBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIF9tYXBPcHRpb25zKG9wdGlvbnM6IElJbnRlcm5hbExvYWRpbmdPcHRpb25zLCBpbnN0YW5jZTogVGRMb2FkaW5nQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgIGlmIChvcHRpb25zLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5tb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLm1vZGUgPSBvcHRpb25zLm1vZGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExPQURJTkdfRkFDVE9SWV9QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGRMb2FkaW5nRmFjdG9yeSwgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIG92ZXJsYXk6IE92ZXJsYXksIGluamVjdG9yOiBJbmplY3Rvcik6IFRkTG9hZGluZ0ZhY3Rvcnkge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZExvYWRpbmdGYWN0b3J5KGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgb3ZlcmxheSwgaW5qZWN0b3IpO1xufVxuXG5leHBvcnQgY29uc3QgTE9BRElOR19GQUNUT1JZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRMb2FkaW5nRmFjdG9yeSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkTG9hZGluZ0ZhY3RvcnldLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE92ZXJsYXksIEluamVjdG9yXSxcbiAgdXNlRmFjdG9yeTogTE9BRElOR19GQUNUT1JZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIExvYWRpbmdUeXBlIH0gZnJvbSAnLi4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMb2FkaW5nRmFjdG9yeSwgSUxvYWRpbmdSZWYgfSBmcm9tICcuL2xvYWRpbmcuZmFjdG9yeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZT86IExvYWRpbmdUeXBlO1xuICBtb2RlPzogTG9hZGluZ01vZGU7XG4gIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG59XG5cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb25maWcgaW1wbGVtZW50cyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ1R5cGU7XG4gIG1vZGU/OiBMb2FkaW5nTW9kZTtcbiAgY29sb3I/OiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElUZExvYWRpbmdDb25maWcpIHtcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQgZm9yIFtUZExvYWRpbmddIGNvbmZpZ3VyYXRpb24uJyk7XG4gICAgfVxuICAgIHRoaXMubW9kZSA9IGNvbmZpZy5tb2RlID8gY29uZmlnLm1vZGUgOiBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlID8gY29uZmlnLnR5cGUgOiBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgICB0aGlzLmNvbG9yID0gY29uZmlnLmNvbG9yID8gY29uZmlnLmNvbG9yIDogJ3ByaW1hcnknO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyBleHRlbmRzIElUZExvYWRpbmdDb25maWcge1xuICBzdHJhdGVneT86IExvYWRpbmdTdHJhdGVneTtcbn1cblxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyBleHRlbmRzIFRkTG9hZGluZ0NvbmZpZyBpbXBsZW1lbnRzIElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IExvYWRpbmdUeXBlO1xuICBtb2RlOiBMb2FkaW5nTW9kZTtcbiAgc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMuc3RyYXRlZ3kgPSBjb25maWcuc3RyYXRlZ3kgPyBjb25maWcuc3RyYXRlZ3kgOiBMb2FkaW5nU3RyYXRlZ3kuUmVwbGFjZTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfY29udGV4dDoge1trZXk6IHN0cmluZ106IElMb2FkaW5nUmVmfSA9IHt9O1xuICBwcml2YXRlIF90aW1lb3V0czoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkaW5nRmFjdG9yeTogVGRMb2FkaW5nRmFjdG9yeSkge1xuICAgIHRoaXMuY3JlYXRlKHtcbiAgICAgIG5hbWU6ICd0ZC1sb2FkaW5nLW1haW4nLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElMb2FkaW5nRGlyZWN0aXZlQ29uZmlnXG4gICAqIC0gdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICAgKiAtIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+XG4gICAqXG4gICAqIENyZWF0ZXMgYW4gcmVwbGFjZSBsb2FkaW5nIG1hc2sgYW5kIGF0dGFjaGVzIGl0IHRvIHRoZSB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBSZXBsYWNlcyB0aGUgdGVtcGxhdGVSZWYgd2l0aCB0aGUgbWFzayB3aGVuIGEgcmVxdWVzdCBpcyByZWdpc3RlcmVkIG9uIGl0LlxuICAgKlxuICAgKiBOT1RFOiBAaW50ZXJuYWwgdXNhZ2Ugb25seS5cbiAgICovXG4gIGNyZWF0ZUNvbXBvbmVudChjb25maWc6IElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PiwgY29udGV4dDogVGRMb2FkaW5nQ29udGV4dCk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgZGlyZWN0aXZlQ29uZmlnOiBUZExvYWRpbmdEaXJlY3RpdmVDb25maWcgPSBuZXcgVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnKGNvbmZpZyk7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgTmFtZSBkdXBsaWNhdGlvbjogW1RkTG9hZGluZ10gZGlyZWN0aXZlIGhhcyBhIG5hbWUgY29uZmxpY3Qgd2l0aCAke2RpcmVjdGl2ZUNvbmZpZy5uYW1lfS5gKTtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGl2ZUNvbmZpZy5zdHJhdGVneSA9PT0gTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXkpIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlT3ZlcmxheUNvbXBvbmVudChkaXJlY3RpdmVDb25maWcsIHZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVSZXBsYWNlQ29tcG9uZW50KGRpcmVjdGl2ZUNvbmZpZywgdmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSVRkTG9hZGluZ0NvbmZpZ1xuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVsbHNjcmVlbiBsb2FkaW5nIG1hc2sgYW5kIGF0dGFjaGVzIGl0IHRvIHRoZSBET00gd2l0aCB0aGUgZ2l2ZW4gY29uZmlndXJhdGlvbi5cbiAgICogT25seSBkaXNwbGF5ZWQgd2hlbiB0aGUgbWFzayBoYXMgYSByZXF1ZXN0IHJlZ2lzdGVyZWQgb24gaXQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlKGNvbmZpZzogSVRkTG9hZGluZ0NvbmZpZyk6IHZvaWQge1xuICAgIGxldCBmdWxsc2NyZWVuQ29uZmlnOiBUZExvYWRpbmdDb25maWcgPSBuZXcgVGRMb2FkaW5nQ29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5yZW1vdmVDb21wb25lbnQoZnVsbHNjcmVlbkNvbmZpZy5uYW1lKTtcbiAgICB0aGlzLl9jb250ZXh0W2Z1bGxzY3JlZW5Db25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVGdWxsU2NyZWVuQ29tcG9uZW50KGZ1bGxzY3JlZW5Db25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICpcbiAgICogUmVtb3ZlcyBgbG9hZGluZ2AgY29tcG9uZW50IGZyb20gc2VydmljZSBjb250ZXh0LlxuICAgKi9cbiAgcHVibGljIHJlbW92ZUNvbXBvbmVudChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIC0gcmVnaXN0ZXJzPzogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhIHJlcXVlc3QgZm9yIHRoZSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIENhbiBvcHRpb25hbGx5IHBhc3MgcmVnaXN0ZXJzIGFyZ3VtZW50IHRvIHNldCBhIG51bWJlciBvZiByZWdpc3RlciBjYWxscy5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZWdpc3RlcigpXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nID0gJ3RkLWxvYWRpbmctbWFpbicsIHJlZ2lzdGVyczogbnVtYmVyID0gMSk6IGJvb2xlYW4ge1xuICAgIC8vIHRyeSByZWdpc3RlcmluZyBpbnRvIHRoZSBzZXJ2aWNlIGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBoYXMgYmVlbiBpbnN0YW5jaWF0ZWQgb3IgaWYgaXQgZXhpc3RzLlxuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICByZWdpc3RlcnMgPSByZWdpc3RlcnMgPCAxID8gMSA6IHJlZ2lzdGVycztcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgKz0gcmVnaXN0ZXJzO1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgaXQgZG9lc250IGV4aXN0LCBzZXQgYSB0aW1lb3V0IHNvIGl0cyByZWdpc3RlcmVkIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFwcGVuc1xuICAgICAgLy8gdGhpcyBpbiBjYXNlIFwicmVnaXN0ZXJcIiBvY2N1cmVkIG9uIHRoZSBgbmdPbkluaXRgIGxpZmVob29rIGN5Y2xlLlxuICAgICAgaWYgKCF0aGlzLl90aW1lb3V0c1tuYW1lXSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0c1tuYW1lXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVnaXN0ZXIobmFtZSwgcmVnaXN0ZXJzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBpdCB0aW1lb3V0IG9jY3VyZWQgYW5kIHN0aWxsIGRvZXNudCBleGlzdCwgaXQgbWVhbnMgdGhlIHRpZW1vdXQgd2FzbnQgbmVlZGVkIHNvIHdlIGNsZWFyIGl0LlxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXQobmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIC0gcmVzb2x2ZXM/OiBudW1iZXJcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFJlc29sdmVzIGEgcmVxdWVzdCBmb3IgdGhlIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICogQ2FuIG9wdGlvbmFsbHkgcGFzcyByZXNvbHZlcyBhcmd1bWVudCB0byBzZXQgYSBudW1iZXIgb2YgcmVzb2x2ZSBjYWxscy5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZXNvbHZlKClcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nLCByZXNvbHZlczogbnVtYmVyID0gMSk6IGJvb2xlYW4ge1xuICAgIC8vIGNsZWFyIHRpbWVvdXQgaWYgdGhlIGxvYWRpbmcgY29tcG9uZW50IGlzIFwicmVzb2x2ZWRcIiBiZWZvcmUgaXRzIFwicmVnaXN0ZXJlZFwiXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KG5hbWUpO1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICByZXNvbHZlcyA9IHJlc29sdmVzIDwgMSA/IDEgOiByZXNvbHZlcztcbiAgICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzID4gMCkge1xuICAgICAgICBsZXQgdGltZXM6IG51bWJlciA9IHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXM7XG4gICAgICAgIHRpbWVzIC09IHJlc29sdmVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzID0gdGltZXMgPCAwID8gMCA6IHRpbWVzO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFJlc29sdmVzIGFsbCByZXF1ZXN0IGZvciB0aGUgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBJZiBubyBwYXJhbWVtZXRlcnMgYXJlIHVzZWQsIHRoZW4gZGVmYXVsdCBtYWluIG1hc2sgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBlLmcuIGxvYWRpbmdTZXJ2aWNlLnJlc29sdmVBbGwoKVxuICAgKi9cbiAgcHVibGljIHJlc29sdmVBbGwobmFtZTogc3RyaW5nID0gJ3RkLWxvYWRpbmctbWFpbicpOiBib29sZWFuIHtcbiAgICAvLyBjbGVhciB0aW1lb3V0IGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBpcyBcInJlc29sdmVkXCIgYmVmb3JlIGl0cyBcInJlZ2lzdGVyZWRcIlxuICAgIHRoaXMuX2NsZWFyVGltZW91dChuYW1lKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA9IDA7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QubmV4dCh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHZhbHVlOiBudW1iZXJcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFNldCB2YWx1ZSBvbiBhIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICogVXNhZ2Ugb25seSBhdmFpbGFibGUgaWYgaXRzIG1vZGUgaXMgJ2RldGVybWluYXRlJyBhbmQgaWYgbG9hZGluZyBpcyBzaG93aW5nLlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICBsZXQgaW5zdGFuY2U6IFRkTG9hZGluZ0NvbXBvbmVudCA9IHRoaXMuX2NvbnRleHRbbmFtZV0uY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgICAgaWYgKGluc3RhbmNlLm1vZGUgPT09IExvYWRpbmdNb2RlLkRldGVybWluYXRlICYmIGluc3RhbmNlLmFuaW1hdGlvbikge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aW1lb3V0IGxpbmtlZCB0byB0aGUgbmFtZS5cbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgbG9hZGluZyBjb21wb25lbnQgdG8gYmUgY2xlYXJlZFxuICAgKi9cbiAgcHJpdmF0ZSBfY2xlYXJUaW1lb3V0KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0c1tuYW1lXSk7XG4gICAgZGVsZXRlIHRoaXMuX3RpbWVvdXRzW25hbWVdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMT0FESU5HX1BST1ZJREVSX0ZBQ1RPUlkoXG4gICAgcGFyZW50OiBUZExvYWRpbmdTZXJ2aWNlLCBsb2FkaW5nRmFjdG9yeTogVGRMb2FkaW5nRmFjdG9yeSk6IFRkTG9hZGluZ1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZExvYWRpbmdTZXJ2aWNlKGxvYWRpbmdGYWN0b3J5KTtcbn1cblxuZXhwb3J0IGNvbnN0IExPQURJTkdfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZExvYWRpbmdTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGRMb2FkaW5nU2VydmljZV0sIFRkTG9hZGluZ0ZhY3RvcnldLFxuICB1c2VGYWN0b3J5OiBMT0FESU5HX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvYWRpbmdUeXBlLCBMb2FkaW5nTW9kZSwgTG9hZGluZ1N0cmF0ZWd5LCBUZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElMb2FkaW5nUmVmIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZy5mYWN0b3J5JztcblxuLyoqXG4gKiBDb250ZXh0IGNsYXNzIGZvciB2YXJpYWJsZSByZWZlcmVuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbnRleHQge1xuICBwdWJsaWMgJGltcGxpY2l0OiBhbnkgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyB0ZExvYWRpbmc6IGFueSA9IHVuZGVmaW5lZDtcbn1cblxuLy8gQ29uc3RhbnQgZm9yIGdlbmVyYXRpb24gb2YgdGhlIGlkIGZvciB0aGUgbmV4dCBjb21wb25lbnRcbmxldCBURF9MT0FESU5HX05FWFRfSUQ6IG51bWJlciA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExvYWRpbmddJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQgPSBuZXcgVGRMb2FkaW5nQ29udGV4dCgpO1xuICBwcml2YXRlIF90eXBlOiBMb2FkaW5nVHlwZTtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGU7XG4gIHByaXZhdGUgX3N0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9hZGluZ1JlZjogSUxvYWRpbmdSZWY7XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZzogc3RyaW5nXG4gICAqIE5hbWUgcmVmZXJlbmNlIG9mIHRoZSBsb2FkaW5nIG1hc2ssIHVzZWQgdG8gcmVnaXN0ZXIvcmVzb2x2ZSByZXF1ZXN0cyB0byB0aGUgbWFzay5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nJylcbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nVW50aWw/OiBhbnlcbiAgICogSWYgaXRzIG51bGwsIHVuZGVmaW5lZCBvciBmYWxzZSBpdCB3aWxsIGJlIHVzZWQgdG8gcmVnaXN0ZXIgcmVxdWVzdHMgdG8gdGhlIG1hc2suXG4gICAqIEVsc2UgaWYgaXRzIGFueSB2YWx1ZSB0aGF0IGNhbiBiZSByZXNvbHZlZCBhcyB0cnVlLCBpdCB3aWxsIHJlc29sdmUgdGhlIG1hc2suXG4gICAqIFtuYW1lXSBpcyBvcHRpb25hbCB3aGVuIHVzaW5nIFt1bnRpbF0sIGJ1dCBjYW4gc3RpbGwgYmUgdXNlZCB0byByZWdpc3Rlci9yZXNvbHZlIGl0IG1hbnVhbGx5LlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdVbnRpbCcpXG4gIHNldCB1bnRpbCh1bnRpbDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICB0aGlzLl9uYW1lID0gJ3RkLWxvYWRpbmctdW50aWwtJyArIFREX0xPQURJTkdfTkVYVF9JRCsrO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuX2NvbnRleHQudGRMb2FkaW5nID0gdW50aWw7XG4gICAgaWYgKCF1bnRpbCkge1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVnaXN0ZXIodGhpcy5fbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlc29sdmVBbGwodGhpcy5fbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1R5cGU/OiBMb2FkaW5nVHlwZSBvciBbJ2xpbmVhcicgfCAnY2lyY3VsYXInXVxuICAgKiBTZXRzIHRoZSB0eXBlIG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nVHlwZS5DaXJjdWxhciB8ICdjaXJjdWxhciddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdUeXBlJylcbiAgc2V0IHR5cGUodHlwZTogTG9hZGluZ1R5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgTG9hZGluZ1R5cGUuTGluZWFyOlxuICAgICAgICB0aGlzLl90eXBlID0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3R5cGUgPSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ01vZGU/OiBMb2FkaW5nTW9kZSBvciBbJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJ11cbiAgICogU2V0cyB0aGUgbW9kZSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZSB8ICdpbmRldGVybWluYXRlJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ01vZGUnKVxuICBzZXQgbW9kZShtb2RlOiBMb2FkaW5nTW9kZSkge1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTpcbiAgICAgICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkRldGVybWluYXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nU3RyYXRlZ3k/OiBMb2FkaW5nU3RyYXRlZ3kgb3IgWydyZXBsYWNlJyB8ICdvdmVybGF5J11cbiAgICogU2V0cyB0aGUgc3RyYXRlZ3kgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdNb2RlLlJlcGxhY2UgfCAncmVwbGFjZSddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdTdHJhdGVneScpXG4gIHNldCBzdHJhdGVneShzdGF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3kpIHtcbiAgICBzd2l0Y2ggKHN0YXRlZ3kpIHtcbiAgICAgIGNhc2UgTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXk6XG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBMb2FkaW5nU3RyYXRlZ3kuUmVwbGFjZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ0NvbG9yPzogXCJwcmltYXJ5XCIgfCBcImFjY2VudFwiIHwgXCJ3YXJuXCJcbiAgICogU2V0cyB0aGUgdGhlbWUgY29sb3Igb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50LiBEZWZhdWx0cyB0byBcInByaW1hcnlcIlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdDb2xvcicpIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VGRMb2FkaW5nQ29udGV4dD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdTZXJ2aWNlOiBUZExvYWRpbmdTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY29tcG9uZW50IGluIHRoZSBET00sIHNvIGl0IHdpbGwgYmUgYXZhaWxhYmxlIHdoZW4gY2FsbGluZyByZXNvbHZlL3JlZ2lzdGVyLlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVnaXN0ZXJDb21wb25lbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29tcG9uZW50IHdoZW4gZGlyZWN0aXZlIGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlbW92ZUNvbXBvbmVudCh0aGlzLl9uYW1lKTtcbiAgICB0aGlzLl9sb2FkaW5nUmVmID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgW1RkTG9hZGluZ0NvbXBvbmVudF0gYW5kIGF0dGFjaGVzIGl0IHRvIHRoaXMgZGlyZWN0aXZlJ3MgW1ZpZXdDb250YWluZXJSZWZdLlxuICAgKiBQYXNzZXMgdGhpcyBkaXJlY3RpdmUncyBbVGVtcGxhdGVSZWZdIHRvIG1vZGlmeSBET00gZGVwZW5kaW5nIG9uIGxvYWRpbmcgYHN0cmF0ZWd5YC5cbiAgICovXG4gIHByaXZhdGUgX3JlZ2lzdGVyQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGlzIG5lZWRlZCB0byByZWdpc3RlciBsb2FkaW5nIGRpcmVjdGl2ZScpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBgVGRMb2FkaW5nQ29tcG9uZW50YCBoYXMgYmVlbiBjcmVhdGVkIGJlZm9yZSB0cnlpbmcgdG8gYWRkIG9uZSBhZ2Fpbi5cbiAgICAvLyBUaGVyZSBpcyBhIHdlaXJkIGVkZ2UgY2FzZSB3aGVuIHVzaW5nIGBbcm91dGVyTGlua0FjdGl2ZV1gIHRoYXQgY2FsbHMgdGhlIGBuZ09uSW5pdGAgdHdpY2UgaW4gYSByb3dcbiAgICBpZiAoIXRoaXMuX2xvYWRpbmdSZWYpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdSZWYgPSB0aGlzLl9sb2FkaW5nU2VydmljZS5jcmVhdGVDb21wb25lbnQoe1xuICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgICB0eXBlOiB0aGlzLl90eXBlLFxuICAgICAgICBtb2RlOiB0aGlzLl9tb2RlLFxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgc3RyYXRlZ3k6IHRoaXMuX3N0cmF0ZWd5LFxuICAgICAgfSwgdGhpcy5fdmlld0NvbnRhaW5lclJlZiwgdGhpcy5fdGVtcGxhdGVSZWYsIHRoaXMuX2NvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdTZXJ2aWNlLCBMT0FESU5HX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRMb2FkaW5nRmFjdG9yeSwgTE9BRElOR19GQUNUT1JZX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nLmZhY3RvcnknO1xuaW1wb3J0IHsgVGRMb2FkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy5jb21wb25lbnQnO1xuXG5jb25zdCBURF9MT0FESU5HOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRMb2FkaW5nQ29tcG9uZW50LFxuICBUZExvYWRpbmdEaXJlY3RpdmUsXG5dO1xuXG5jb25zdCBURF9MT0FESU5HX0VOVFJZX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZExvYWRpbmdDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfTE9BRElORyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFREX0xPQURJTkcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIExPQURJTkdfRkFDVE9SWV9QUk9WSURFUixcbiAgICBMT0FESU5HX1BST1ZJREVSLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBURF9MT0FESU5HX0VOVFJZX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TG9hZGluZ01vZHVs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