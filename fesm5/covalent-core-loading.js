import { Component, ChangeDetectorRef, ElementRef, Injectable, ComponentFactoryResolver, SkipSelf, Optional, Injector, Directive, Input, ViewContainerRef, TemplateRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { tdFadeInOutAnimation } from '@covalent/core/common';
import { TemplatePortal, ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { distinctUntilChanged } from 'rxjs/operators';
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
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe(function (registered) {
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
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe(function (registered) {
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
        // passing context so when the template is attached, we can keep the reference of the variables
        /** @type {?} */
        var contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe(function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                // detach the content and attach the loader if loader is there
                /** @type {?} */
                var index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                if (index < 0) {
                    viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
                    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                }
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                /** @type {?} */
                var subs_2 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                    subs_2.unsubscribe();
                    // detach loader and attach the content if content is there
                    /** @type {?} */
                    var index = viewContainerRef.indexOf(contentRef);
                    if (index < 0) {
                        viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                        viewContainerRef.insert(contentRef, 0);
                    }
                    /**
                     * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                     * with "OnPush" change detection
                     */
                    contentRef.detectChanges();
                    contentRef.markForCheck();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1sb2FkaW5nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nL3NlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xvYWRpbmcvZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy9sb2FkaW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdUeXBlIHtcbiAgQ2lyY3VsYXIgPSAnY2lyY3VsYXInLFxuICBMaW5lYXIgPSAnbGluZWFyJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ01vZGUge1xuICBEZXRlcm1pbmF0ZSA9ICdkZXRlcm1pbmF0ZScsXG4gIEluZGV0ZXJtaW5hdGUgPSAnaW5kZXRlcm1pbmF0ZScsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdTdHJhdGVneSB7XG4gIE92ZXJsYXkgPSAnb3ZlcmxheScsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdTdHlsZSB7XG4gIEZ1bGxTY3JlZW4gPSAnZnVsbHNjcmVlbicsXG4gIE92ZXJsYXkgPSAnb3ZlcmxheScsXG4gIE5vbmUgPSAnbm9uZScsXG59XG5cbmltcG9ydCB7IHRkRmFkZUluT3V0QW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IFREX0NJUkNMRV9ESUFNRVRFUjogbnVtYmVyID0gMTAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sb2FkaW5nJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdGRGYWRlSW5PdXRBbmltYXRpb24sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuXG4gIHByaXZhdGUgX2FuaW1hdGlvbkluOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgX2FuaW1hdGlvbk91dDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9tb2RlOiBMb2FkaW5nTW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gIHByaXZhdGUgX2RlZmF1bHRNb2RlOiBMb2FkaW5nTW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jaXJjbGVEaWFtZXRlcjogbnVtYmVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuXG4gIC8qKlxuICAgKiBGbGFnIGZvciBhbmltYXRpb25cbiAgICovXG4gIGFuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb250ZW50IGluamVjdGVkIGludG8gbG9hZGluZyBjb21wb25lbnQuXG4gICAqL1xuICBjb250ZW50OiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuXG4gIC8qKlxuICAgKiBTZXRzIG1vZGUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gdG8gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUgb3IgTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZVxuICAgKi9cbiAgc2V0IG1vZGUobW9kZTogTG9hZGluZ01vZGUpIHtcbiAgICB0aGlzLl9kZWZhdWx0TW9kZSA9IG1vZGU7XG4gIH1cbiAgZ2V0IG1vZGUoKTogTG9hZGluZ01vZGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdmFsdWUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gaWYgbW9kZSBpcyAnTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUnXG4gICAqL1xuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzdHlsZTogTG9hZGluZ1N0eWxlID0gTG9hZGluZ1N0eWxlLk5vbmU7XG5cbiAgLyoqXG4gICAqIGhlaWdodDogbnVtYmVyXG4gICAqIFNldHMgaGVpZ2h0IG9mIFtUZExvYWRpbmdDb21wb25lbnRdLlxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIHR5cGU6IExvYWRpbmdUeXBlXG4gICAqIFNldHMgdHlwZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSByZW5kZXJlZC5cbiAgICovXG4gIHR5cGU6IExvYWRpbmdUeXBlID0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG5cbiAgLyoqXG4gICAqIGNvbG9yOiBwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nXG4gICAqIFNldHMgdGhlbWUgY29sb3Igb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gcmVuZGVyZWQuXG4gICAqL1xuICBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAvLyBXaGVuIG92ZXJsYXkgaXMgdXNlZCBhbmQgdGhlIGhvc3Qgd2lkdGggaGFzIGEgdmFsdWUgZ3JlYXRlciB0aGFuIDFweFxuICAgIC8vIHNldCB0aGUgY2lyY2xlIGRpYW1ldGVyIHdoZW4gcG9zc2libGUgaW5jYXNlIHRoZSBsb2FkaW5nIGNvbXBvbmVudCB3YXMgcmVuZGVyZWQgaW4gYSBoaWRkZW4gc3RhdGVcbiAgICBpZiAodGhpcy5pc092ZXJsYXkoKSAmJiB0aGlzLl9ob3N0SGVpZ2h0KCkgPiAxKSB7XG4gICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5fc2V0Q2lyY2xlRGlhbWV0ZXIoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgLy8gSWdub3JlIGhlaWdodCBpZiBzdHlsZSBpcyBgb3ZlcmxheWAgb3IgYGZ1bGxzY3JlZW5gLlxuICAgIC8vIEFkZCBoZWlnaHQgaWYgY2hpbGQgZWxlbWVudHMgaGF2ZSBhIGhlaWdodCBhbmQgc3R5bGUgaXMgYG5vbmVgLCBlbHNlIHJldHVybiBkZWZhdWx0IGhlaWdodC5cbiAgICBpZiAodGhpcy5pc092ZXJsYXkoKSB8fCB0aGlzLmlzRnVsbFNjcmVlbigpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWlnaHQgPyBgJHt0aGlzLmhlaWdodH1weGAgOiAnMTUwcHgnO1xuICAgIH1cbiAgfVxuXG4gIGdldENpcmNsZURpYW1ldGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZURpYW1ldGVyO1xuICB9XG5cbiAgZ2V0Q2lyY2xlU3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICAvLyB3ZSBjYWxjdWxhdGUgdGhlIHN0cm9rZSB3aWR0aCBieSBzZXR0aW5nIGl0IGFzIDEwJSBvZiBpdHMgZGlhbWV0ZXJcbiAgICBsZXQgc3Ryb2tlV2lkdGg6IG51bWJlciA9IHRoaXMuZ2V0Q2lyY2xlRGlhbWV0ZXIoKSAvIDEwO1xuICAgIHJldHVybiBNYXRoLmFicyhzdHJva2VXaWR0aCk7XG4gIH1cblxuICBpc0NpcmN1bGFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICB9XG5cbiAgaXNMaW5lYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICB9XG5cbiAgaXNGdWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0eWxlID09PSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgfVxuXG4gIGlzT3ZlcmxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSA9PT0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gIH1cblxuICBhbmltYXRpb25Db21wbGV0ZShldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgaXRzIFwiaW5cIiBvciBcIm91dFwiIGFuaW1hdGlvbiB0byBleGVjdXRlIHRoZSBwcm9wZXIgY2FsbGJhY2tcbiAgICBpZiAoIWV2ZW50LmZyb21TdGF0ZSkge1xuICAgICAgdGhpcy5pbkFuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dEFuaW1hdGlvbkNvbXBsZXRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGluQW5pbWF0aW9uQ29tcGxldGVkKCk6IHZvaWQge1xuICAgIHRoaXMuX2FuaW1hdGlvbkluLm5leHQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIG91dEFuaW1hdGlvbkNvbXBsZXRlZCgpOiB2b2lkIHtcbiAgIC8qIGxpdHRsZSBoYWNrIHRvIHJlc2V0IHRoZSBsb2FkZXIgdmFsdWUgYW5kIGFuaW1hdGlvbiBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET01cbiAgICAqIGVsc2UsIHRoZSBsb2FkZXIgd2lsbCBhcHBlYXIgd2l0aCBwcmV2IHZhbHVlIHdoZW4gaXRzIHJlZ2lzdGVyZWQgYWdhaW5cbiAgICAqIGFuZCB3aWxsIGRvIGFuIGFuaW1hdGlvbiBnb2luZyBwcmV2IHZhbHVlIHRvIDAuXG4gICAgKi9cbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuX2FuaW1hdGlvbk91dC5uZXh0KHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGluIGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzdGFydEluQW5pbWF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLyogbmVlZCB0byBzd2l0Y2ggYmFjayB0byB0aGUgc2VsZWN0ZWQgbW9kZSwgc28gd2UgaGF2ZSBzYXZlZCBpdCBpbiBhbm90aGVyIHZhcmlhYmxlXG4gICAgKiAgYW5kIHRoZW4gcmVjb3ZlciBpdC4gKGlzc3VlIHdpdGggcHJvdHJhY3RvcilcbiAgICAqL1xuICAgIHRoaXMuX21vZGUgPSB0aGlzLl9kZWZhdWx0TW9kZTtcbiAgICAvLyBTZXQgdmFsdWVzIGJlZm9yZSB0aGUgYW5pbWF0aW9ucyBzdGFydHNcbiAgICB0aGlzLl9zZXRDaXJjbGVEaWFtZXRlcigpO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25Jbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb3V0IGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzdGFydE91dEFuaW1hdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYW5pbWF0aW9uID0gZmFsc2U7XG4gICAgLyogbmVlZCB0byBzd2l0Y2ggYmFjayBhbmQgZm9ydGggZnJvbSBkZXRlcm1pbmF0ZS9pbmRldGVybWluYXRlIHNvIHRoZSBzZXRJbnRlcnZhbCgpXG4gICAgKiBpbnNpZGUgbWF0LXByb2dyZXNzLXNwaW5uZXIgc3RvcHMgYW5kIHByb3RyYWN0b3IgZG9lc250IHRpbWVvdXQgd2FpdGluZyB0byBzeW5jLlxuICAgICovXG4gICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkRldGVybWluYXRlO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbk91dC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIHByb3BlciBkaWFtZXRlciBmb3IgdGhlIGNpcmNsZSBhbmQgc2V0IGl0XG4gICAqL1xuICBwcml2YXRlIF9zZXRDaXJjbGVEaWFtZXRlcigpOiB2b2lkIHtcbiAgICAvLyB3ZSBzZXQgYSBkZWZhdWx0IGRpYW1ldGVyIG9mIDEwMCBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIG1hdGVyaWFsXG4gICAgbGV0IGRpYW1ldGVyOiBudW1iZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG4gICAgLy8gaWYgaGVpZ2h0IGlzIHByb3ZpZGVkLCB0aGVuIHdlIHRha2UgdGhhdCBhcyBkaWFtZXRlclxuICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgZGlhbWV0ZXIgPSB0aGlzLmhlaWdodDtcbiAgICAgIC8vIGVsc2UgaWYgaXRzIG5vdCBwcm92aWRlZCwgdGhlbiB3ZSB0YWtlIHRoZSBob3N0IGhlaWdodFxuICAgIH0gZWxzZSBpZiAodGhpcy5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGlhbWV0ZXIgPSB0aGlzLl9ob3N0SGVpZ2h0KCk7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBkaWFtZXRlciBpcyBvdmVyIFREX0NJUkNMRV9ESUFNRVRFUiwgd2Ugc2V0IFREX0NJUkNMRV9ESUFNRVRFUlxuICAgIGlmICghIWRpYW1ldGVyICYmIGRpYW1ldGVyIDw9IFREX0NJUkNMRV9ESUFNRVRFUikge1xuICAgICAgdGhpcy5fY2lyY2xlRGlhbWV0ZXIgPSBNYXRoLmZsb29yKGRpYW1ldGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2lyY2xlRGlhbWV0ZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhvc3QgaGVpZ2h0IG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBfaG9zdEhlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwsIEVtYmVkZGVkVmlld1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsLCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkTG9hZGluZ0NvbnRleHQgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkTG9hZGluZ0NvbXBvbmVudCwgTG9hZGluZ1N0eWxlIH0gZnJvbSAnLi4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVRkTG9hZGluZ0NvbmZpZyB9IGZyb20gJy4vbG9hZGluZy5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucyBleHRlbmRzIElUZExvYWRpbmdDb25maWcge1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHN0eWxlPzogTG9hZGluZ1N0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2FkaW5nUmVmIHtcbiAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBzdWJqZWN0PzogU3ViamVjdDxhbnk+O1xuICB0aW1lcz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBOT1RFOiBAaW50ZXJuYWwgdXNhZ2Ugb25seS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0ZhY3Rvcnkge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VzIG1hdGVyaWFsIGBPdmVybGF5YCBzZXJ2aWNlcyB0byBjcmVhdGUgYSBET00gZWxlbWVudCBhbmQgYXR0YWNoIHRoZSBsb2FkaW5nIGNvbXBvbmVudFxuICAgKiBpbnRvIGl0LiBMZXZlcmFnaW5nIHRoZSBzdGF0ZSBhbmQgY29uZmlndXJhdGlvbiBmcm9tIGl0LlxuICAgKlxuICAgKiBTYXZlcyBhIHJlZmVyZW5jZSBpbiBjb250ZXh0IHRvIGJlIGNhbGxlZCB3aGVuIHJlZ2lzdGVyaW5nL3Jlc29sdmluZyB0aGUgbG9hZGluZyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUZ1bGxTY3JlZW5Db21wb25lbnQob3B0aW9uczogSVRkTG9hZGluZ0NvbmZpZyk6IElMb2FkaW5nUmVmIHtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLkZ1bGxTY3JlZW47XG4gICAgbGV0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5faW5pdGlhbGl6ZUNvbnRleHQoKTtcbiAgICBsZXQgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICApLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChUZExvYWRpbmdDb21wb25lbnQpKTtcbiAgICAgICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0SW5BbmltYXRpb24oKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBzdWJzOiBTdWJzY3JpcHRpb24gPSBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydE91dEFuaW1hdGlvbigpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgc3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICAgIG92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9hZGluZyBjb21wb25lbnQgZHluYW1pY2FsbHkgYW5kIGF0dGFjaGVzIGl0IGludG8gdGhlIGdpdmVuIHZpZXdDb250YWluZXJSZWYuXG4gICAqIExldmVyYWdlcyBUZW1wbGF0ZVBvcnRhbHMgZnJvbSBtYXRlcmlhbCB0byBpbmplY3QgdGhlIHRlbXBsYXRlIGluc2lkZSBvZiBpdCBzbyBpdCBmaXRzXG4gICAqIHBlcmZlY3RseSB3aGVuIG92ZXJsYXlpbmcgaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlT3ZlcmxheUNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pik6IElMb2FkaW5nUmVmIHtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gICAgbGV0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5fY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGVudCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICBsb2FkaW5nUmVmLm9ic2VydmFibGUucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgKS5zdWJzY3JpYmUoKHJlZ2lzdGVyZWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyZWQgPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydEluQW5pbWF0aW9uKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdGVyZWQgPD0gMCAmJiBsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRPdXRBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9hZGluZyBjb21wb25lbnQgZHluYW1pY2FsbHkgYW5kIGF0dGFjaGVzIGl0IGludG8gdGhlIGdpdmVuIHZpZXdDb250YWluZXJSZWYuXG4gICAqIFJlcGxhY2VzIHRoZSB0ZW1wbGF0ZSB3aXRoIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBkZXBlbmRpbmcgaWYgaXQgd2FzIHJlZ2lzdGVyZWQgb3IgcmVzb2x2ZWQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUmVwbGFjZUNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PiwgY29udGV4dDogVGRMb2FkaW5nQ29udGV4dCk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGVtcGxhdGVSZWYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gbmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgP1xuICAgICAgbmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0IDogdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuTm9uZTtcbiAgICBsZXQgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBwYXNzaW5nIGNvbnRleHQgc28gd2hlbiB0aGUgdGVtcGxhdGUgaXMgYXR0YWNoZWQsIHdlIGNhbiBrZWVwIHRoZSByZWZlcmVuY2Ugb2YgdGhlIHZhcmlhYmxlc1xuICAgIGxldCBjb250ZW50UmVmOiBFbWJlZGRlZFZpZXdSZWY8T2JqZWN0PiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmLCBjb250ZXh0KTtcbiAgICBsb2FkaW5nUmVmLm9ic2VydmFibGUucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgKS5zdWJzY3JpYmUoKHJlZ2lzdGVyZWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyZWQgPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAvLyBkZXRhY2ggdGhlIGNvbnRlbnQgYW5kIGF0dGFjaCB0aGUgbG9hZGVyIGlmIGxvYWRlciBpcyB0aGVyZVxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmRldGFjaCh2aWV3Q29udGFpbmVyUmVmLmluZGV4T2YoY29udGVudFJlZikpO1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydEluQW5pbWF0aW9uKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdGVyZWQgPD0gMCAmJiBsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbGV0IHN1YnM6IFN1YnNjcmlwdGlvbiA9IGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0T3V0QW5pbWF0aW9uKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBzdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgLy8gZGV0YWNoIGxvYWRlciBhbmQgYXR0YWNoIHRoZSBjb250ZW50IGlmIGNvbnRlbnQgaXMgdGhlcmVcbiAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihjb250ZW50UmVmKTtcbiAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmRldGFjaCh2aWV3Q29udGFpbmVyUmVmLmluZGV4T2YobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcpKTtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGNvbnRlbnRSZWYsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBOZWVkIHRvIGNhbGwgXCJtYXJrRm9yQ2hlY2tcIiBhbmQgXCJkZXRlY3RDaGFuZ2VzXCIgb24gYXR0YWNoZWQgdGVtcGxhdGUsIHNvIGl0cyBkZXRlY3RlZCBieSBwYXJlbnQgY29tcG9uZW50IHdoZW4gYXR0YWNoZWRcbiAgICAgICAgICAgKiB3aXRoIFwiT25QdXNoXCIgY2hhbmdlIGRldGVjdGlvblxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnRlbnRSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIGNvbnRlbnRSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsb2FkaW5nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmdWxsc2NyZWVuIG92ZXJsYXkgZm9yIHRoZSBsb2FkaW5nIHVzYWdlLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBsZXQgc3RhdGU6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xuICAgIHN0YXRlLmhhc0JhY2tkcm9wID0gZmFsc2U7XG4gICAgc3RhdGUucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCk7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXkuY3JlYXRlKHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZ2VuZXJpYyBjb21wb25lbnQgZHluYW1pY2FsbHkgd2FpdGluZyB0byBiZSBhdHRhY2hlZCB0byBhIHZpZXdDb250YWluZXJSZWYuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVDb21wb25lbnQob3B0aW9uczogSUludGVybmFsTG9hZGluZ09wdGlvbnMpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IGNvbXBSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5faW5pdGlhbGl6ZUNvbnRleHQoKTtcbiAgICBjb21wUmVmLmNvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUZExvYWRpbmdDb21wb25lbnQpLmNyZWF0ZSh0aGlzLl9pbmplY3Rvcik7XG4gICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBjb21wUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgcmV0dXJuIGNvbXBSZWY7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb250ZXh0IGZvciBsb2FkaW5nIGNvbXBvbmVudC5cbiAgICovXG4gIHByaXZhdGUgX2luaXRpYWxpemVDb250ZXh0KCk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgc3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHJldHVybiB7XG4gICAgICBvYnNlcnZhYmxlOiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgIGNvbXBvbmVudFJlZjogdW5kZWZpbmVkLFxuICAgICAgdGltZXM6IDAsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIGNvbmZpZ3VyYXRpb24gdG8gdGhlIGxvYWRpbmcgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfbWFwT3B0aW9ucyhvcHRpb25zOiBJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucywgaW5zdGFuY2U6IFRkTG9hZGluZ0NvbXBvbmVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICBpZiAob3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5tb2RlID0gb3B0aW9ucy5tb2RlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVJfRkFDVE9SWShcbiAgICBwYXJlbnQ6IFRkTG9hZGluZ0ZhY3RvcnksIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBvdmVybGF5OiBPdmVybGF5LCBpbmplY3RvcjogSW5qZWN0b3IpOiBUZExvYWRpbmdGYWN0b3J5IHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRMb2FkaW5nRmFjdG9yeShjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIG92ZXJsYXksIGluamVjdG9yKTtcbn1cblxuZXhwb3J0IGNvbnN0IExPQURJTkdfRkFDVE9SWV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkTG9hZGluZ0ZhY3RvcnksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZExvYWRpbmdGYWN0b3J5XSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdmVybGF5LCBJbmplY3Rvcl0sXG4gIHVzZUZhY3Rvcnk6IExPQURJTkdfRkFDVE9SWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRMb2FkaW5nQ29udGV4dCB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRMb2FkaW5nQ29tcG9uZW50LCBMb2FkaW5nTW9kZSwgTG9hZGluZ1N0cmF0ZWd5LCBMb2FkaW5nVHlwZSB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTG9hZGluZ0ZhY3RvcnksIElMb2FkaW5nUmVmIH0gZnJvbSAnLi9sb2FkaW5nLmZhY3RvcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZExvYWRpbmdDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU/OiBMb2FkaW5nVHlwZTtcbiAgbW9kZT86IExvYWRpbmdNb2RlO1xuICBjb2xvcj86ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nO1xufVxuXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29uZmlnIGltcGxlbWVudHMgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZT86IExvYWRpbmdUeXBlO1xuICBtb2RlPzogTG9hZGluZ01vZGU7XG4gIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBJVGRMb2FkaW5nQ29uZmlnKSB7XG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgaWYgKCF0aGlzLm5hbWUpIHtcbiAgICAgIHRocm93IEVycm9yKCdOYW1lIGlzIHJlcXVpcmVkIGZvciBbVGRMb2FkaW5nXSBjb25maWd1cmF0aW9uLicpO1xuICAgIH1cbiAgICB0aGlzLm1vZGUgPSBjb25maWcubW9kZSA/IGNvbmZpZy5tb2RlIDogTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgICB0aGlzLnR5cGUgPSBjb25maWcudHlwZSA/IGNvbmZpZy50eXBlIDogTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gICAgdGhpcy5jb2xvciA9IGNvbmZpZy5jb2xvciA/IGNvbmZpZy5jb2xvciA6ICdwcmltYXJ5JztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcgZXh0ZW5kcyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgc3RyYXRlZ3k/OiBMb2FkaW5nU3RyYXRlZ3k7XG59XG5cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdEaXJlY3RpdmVDb25maWcgZXh0ZW5kcyBUZExvYWRpbmdDb25maWcgaW1wbGVtZW50cyBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBMb2FkaW5nVHlwZTtcbiAgbW9kZTogTG9hZGluZ01vZGU7XG4gIHN0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgICB0aGlzLnN0cmF0ZWd5ID0gY29uZmlnLnN0cmF0ZWd5ID8gY29uZmlnLnN0cmF0ZWd5IDogTG9hZGluZ1N0cmF0ZWd5LlJlcGxhY2U7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IHtba2V5OiBzdHJpbmddOiBJTG9hZGluZ1JlZn0gPSB7fTtcbiAgcHJpdmF0ZSBfdGltZW91dHM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGluZ0ZhY3Rvcnk6IFRkTG9hZGluZ0ZhY3RvcnkpIHtcbiAgICB0aGlzLmNyZWF0ZSh7XG4gICAgICBuYW1lOiAndGQtbG9hZGluZy1tYWluJyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZ1xuICAgKiAtIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICogLSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PlxuICAgKlxuICAgKiBDcmVhdGVzIGFuIHJlcGxhY2UgbG9hZGluZyBtYXNrIGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgdmlld0NvbnRhaW5lclJlZi5cbiAgICogUmVwbGFjZXMgdGhlIHRlbXBsYXRlUmVmIHdpdGggdGhlIG1hc2sgd2hlbiBhIHJlcXVlc3QgaXMgcmVnaXN0ZXJlZCBvbiBpdC5cbiAgICpcbiAgICogTk9URTogQGludGVybmFsIHVzYWdlIG9ubHkuXG4gICAqL1xuICBjcmVhdGVDb21wb25lbnQoY29uZmlnOiBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IGRpcmVjdGl2ZUNvbmZpZzogVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnID0gbmV3IFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyhjb25maWcpO1xuICAgIGlmICh0aGlzLl9jb250ZXh0W2RpcmVjdGl2ZUNvbmZpZy5uYW1lXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYE5hbWUgZHVwbGljYXRpb246IFtUZExvYWRpbmddIGRpcmVjdGl2ZSBoYXMgYSBuYW1lIGNvbmZsaWN0IHdpdGggJHtkaXJlY3RpdmVDb25maWcubmFtZX0uYCk7XG4gICAgfVxuICAgIGlmIChkaXJlY3RpdmVDb25maWcuc3RyYXRlZ3kgPT09IExvYWRpbmdTdHJhdGVneS5PdmVybGF5KSB7XG4gICAgICB0aGlzLl9jb250ZXh0W2RpcmVjdGl2ZUNvbmZpZy5uYW1lXSA9IHRoaXMuX2xvYWRpbmdGYWN0b3J5LmNyZWF0ZU92ZXJsYXlDb21wb25lbnQoZGlyZWN0aXZlQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlUmVwbGFjZUNvbXBvbmVudChkaXJlY3RpdmVDb25maWcsIHZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElUZExvYWRpbmdDb25maWdcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bGxzY3JlZW4gbG9hZGluZyBtYXNrIGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgRE9NIHdpdGggdGhlIGdpdmVuIGNvbmZpZ3VyYXRpb24uXG4gICAqIE9ubHkgZGlzcGxheWVkIHdoZW4gdGhlIG1hc2sgaGFzIGEgcmVxdWVzdCByZWdpc3RlcmVkIG9uIGl0LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZShjb25maWc6IElUZExvYWRpbmdDb25maWcpOiB2b2lkIHtcbiAgICBsZXQgZnVsbHNjcmVlbkNvbmZpZzogVGRMb2FkaW5nQ29uZmlnID0gbmV3IFRkTG9hZGluZ0NvbmZpZyhjb25maWcpO1xuICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KGZ1bGxzY3JlZW5Db25maWcubmFtZSk7XG4gICAgdGhpcy5fY29udGV4dFtmdWxsc2NyZWVuQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlRnVsbFNjcmVlbkNvbXBvbmVudChmdWxsc2NyZWVuQ29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqXG4gICAqIFJlbW92ZXMgYGxvYWRpbmdgIGNvbXBvbmVudCBmcm9tIHNlcnZpY2UgY29udGV4dC5cbiAgICovXG4gIHB1YmxpYyByZW1vdmVDb21wb25lbnQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0uY29tcG9uZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHJlZ2lzdGVycz86IG51bWJlclxuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogUmVzb2x2ZXMgYSByZXF1ZXN0IGZvciB0aGUgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKiBDYW4gb3B0aW9uYWxseSBwYXNzIHJlZ2lzdGVycyBhcmd1bWVudCB0byBzZXQgYSBudW1iZXIgb2YgcmVnaXN0ZXIgY2FsbHMuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZW1ldGVycyBhcmUgdXNlZCwgdGhlbiBkZWZhdWx0IG1haW4gbWFzayB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIGUuZy4gbG9hZGluZ1NlcnZpY2UucmVnaXN0ZXIoKVxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nLCByZWdpc3RlcnM6IG51bWJlciA9IDEpOiBib29sZWFuIHtcbiAgICAvLyB0cnkgcmVnaXN0ZXJpbmcgaW50byB0aGUgc2VydmljZSBpZiB0aGUgbG9hZGluZyBjb21wb25lbnQgaGFzIGJlZW4gaW5zdGFuY2lhdGVkIG9yIGlmIGl0IGV4aXN0cy5cbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgcmVnaXN0ZXJzID0gcmVnaXN0ZXJzIDwgMSA/IDEgOiByZWdpc3RlcnM7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzICs9IHJlZ2lzdGVycztcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC5uZXh0KHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGl0IGRvZXNudCBleGlzdCwgc2V0IGEgdGltZW91dCBzbyBpdHMgcmVnaXN0ZXJlZCBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcHBlbnNcbiAgICAgIC8vIHRoaXMgaW4gY2FzZSBcInJlZ2lzdGVyXCIgb2NjdXJlZCBvbiB0aGUgYG5nT25Jbml0YCBsaWZlaG9vayBjeWNsZS5cbiAgICAgIGlmICghdGhpcy5fdGltZW91dHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5fdGltZW91dHNbbmFtZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyKG5hbWUsIHJlZ2lzdGVycyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgaXQgdGltZW91dCBvY2N1cmVkIGFuZCBzdGlsbCBkb2VzbnQgZXhpc3QsIGl0IG1lYW5zIHRoZSB0aWVtb3V0IHdhc250IG5lZWRlZCBzbyB3ZSBjbGVhciBpdC5cbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHJlc29sdmVzPzogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhIHJlcXVlc3QgZm9yIHRoZSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIENhbiBvcHRpb25hbGx5IHBhc3MgcmVzb2x2ZXMgYXJndW1lbnQgdG8gc2V0IGEgbnVtYmVyIG9mIHJlc29sdmUgY2FsbHMuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZW1ldGVycyBhcmUgdXNlZCwgdGhlbiBkZWZhdWx0IG1haW4gbWFzayB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIGUuZy4gbG9hZGluZ1NlcnZpY2UucmVzb2x2ZSgpXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShuYW1lOiBzdHJpbmcgPSAndGQtbG9hZGluZy1tYWluJywgcmVzb2x2ZXM6IG51bWJlciA9IDEpOiBib29sZWFuIHtcbiAgICAvLyBjbGVhciB0aW1lb3V0IGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBpcyBcInJlc29sdmVkXCIgYmVmb3JlIGl0cyBcInJlZ2lzdGVyZWRcIlxuICAgIHRoaXMuX2NsZWFyVGltZW91dChuYW1lKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgcmVzb2x2ZXMgPSByZXNvbHZlcyA8IDEgPyAxIDogcmVzb2x2ZXM7XG4gICAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA+IDApIHtcbiAgICAgICAgbGV0IHRpbWVzOiBudW1iZXIgPSB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzO1xuICAgICAgICB0aW1lcyAtPSByZXNvbHZlcztcbiAgICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA9IHRpbWVzIDwgMCA/IDAgOiB0aW1lcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC5uZXh0KHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhbGwgcmVxdWVzdCBmb3IgdGhlIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZXNvbHZlQWxsKClcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlQWxsKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nKTogYm9vbGVhbiB7XG4gICAgLy8gY2xlYXIgdGltZW91dCBpZiB0aGUgbG9hZGluZyBjb21wb25lbnQgaXMgXCJyZXNvbHZlZFwiIGJlZm9yZSBpdHMgXCJyZWdpc3RlcmVkXCJcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQobmFtZSk7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgPSAwO1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogLSB2YWx1ZTogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBTZXQgdmFsdWUgb24gYSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIFVzYWdlIG9ubHkgYXZhaWxhYmxlIGlmIGl0cyBtb2RlIGlzICdkZXRlcm1pbmF0ZScgYW5kIGlmIGxvYWRpbmcgaXMgc2hvd2luZy5cbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgbGV0IGluc3RhbmNlOiBUZExvYWRpbmdDb21wb25lbnQgPSB0aGlzLl9jb250ZXh0W25hbWVdLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgIGlmIChpbnN0YW5jZS5tb2RlID09PSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSAmJiBpbnN0YW5jZS5hbmltYXRpb24pIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGltZW91dCBsaW5rZWQgdG8gdGhlIG5hbWUuXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50IHRvIGJlIGNsZWFyZWRcbiAgICovXG4gIHByaXZhdGUgX2NsZWFyVGltZW91dChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dHNbbmFtZV0pO1xuICAgIGRlbGV0ZSB0aGlzLl90aW1lb3V0c1tuYW1lXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTE9BRElOR19QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGRMb2FkaW5nU2VydmljZSwgbG9hZGluZ0ZhY3Rvcnk6IFRkTG9hZGluZ0ZhY3RvcnkpOiBUZExvYWRpbmdTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRMb2FkaW5nU2VydmljZShsb2FkaW5nRmFjdG9yeSk7XG59XG5cbmV4cG9ydCBjb25zdCBMT0FESU5HX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRMb2FkaW5nU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkTG9hZGluZ1NlcnZpY2VdLCBUZExvYWRpbmdGYWN0b3J5XSxcbiAgdXNlRmFjdG9yeTogTE9BRElOR19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2FkaW5nVHlwZSwgTG9hZGluZ01vZGUsIExvYWRpbmdTdHJhdGVneSwgVGRMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJTG9hZGluZ1JlZiB9IGZyb20gJy4uL3NlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeSc7XG5cbi8qKlxuICogQ29udGV4dCBjbGFzcyBmb3IgdmFyaWFibGUgcmVmZXJlbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb250ZXh0IHtcbiAgcHVibGljICRpbXBsaWNpdDogYW55ID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgdGRMb2FkaW5nOiBhbnkgPSB1bmRlZmluZWQ7XG59XG5cbi8vIENvbnN0YW50IGZvciBnZW5lcmF0aW9uIG9mIHRoZSBpZCBmb3IgdGhlIG5leHQgY29tcG9uZW50XG5sZXQgVERfTE9BRElOR19ORVhUX0lEOiBudW1iZXIgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMb2FkaW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9jb250ZXh0OiBUZExvYWRpbmdDb250ZXh0ID0gbmV3IFRkTG9hZGluZ0NvbnRleHQoKTtcbiAgcHJpdmF0ZSBfdHlwZTogTG9hZGluZ1R5cGU7XG4gIHByaXZhdGUgX21vZGU6IExvYWRpbmdNb2RlO1xuICBwcml2YXRlIF9zdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvYWRpbmdSZWY6IElMb2FkaW5nUmVmO1xuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmc6IHN0cmluZ1xuICAgKiBOYW1lIHJlZmVyZW5jZSBvZiB0aGUgbG9hZGluZyBtYXNrLCB1c2VkIHRvIHJlZ2lzdGVyL3Jlc29sdmUgcmVxdWVzdHMgdG8gdGhlIG1hc2suXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZycpXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1VudGlsPzogYW55XG4gICAqIElmIGl0cyBudWxsLCB1bmRlZmluZWQgb3IgZmFsc2UgaXQgd2lsbCBiZSB1c2VkIHRvIHJlZ2lzdGVyIHJlcXVlc3RzIHRvIHRoZSBtYXNrLlxuICAgKiBFbHNlIGlmIGl0cyBhbnkgdmFsdWUgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgYXMgdHJ1ZSwgaXQgd2lsbCByZXNvbHZlIHRoZSBtYXNrLlxuICAgKiBbbmFtZV0gaXMgb3B0aW9uYWwgd2hlbiB1c2luZyBbdW50aWxdLCBidXQgY2FuIHN0aWxsIGJlIHVzZWQgdG8gcmVnaXN0ZXIvcmVzb2x2ZSBpdCBtYW51YWxseS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nVW50aWwnKVxuICBzZXQgdW50aWwodW50aWw6IGFueSkge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgdGhpcy5fbmFtZSA9ICd0ZC1sb2FkaW5nLXVudGlsLScgKyBURF9MT0FESU5HX05FWFRfSUQrKztcbiAgICB9XG4gICAgdGhpcy5fY29udGV4dC4kaW1wbGljaXQgPSB0aGlzLl9jb250ZXh0LnRkTG9hZGluZyA9IHVudGlsO1xuICAgIGlmICghdW50aWwpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuX25hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZXNvbHZlQWxsKHRoaXMuX25hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdUeXBlPzogTG9hZGluZ1R5cGUgb3IgWydsaW5lYXInIHwgJ2NpcmN1bGFyJ11cbiAgICogU2V0cyB0aGUgdHlwZSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ1R5cGUuQ2lyY3VsYXIgfCAnY2lyY3VsYXInXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nVHlwZScpXG4gIHNldCB0eXBlKHR5cGU6IExvYWRpbmdUeXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIExvYWRpbmdUeXBlLkxpbmVhcjpcbiAgICAgICAgdGhpcy5fdHlwZSA9IExvYWRpbmdUeXBlLkxpbmVhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl90eXBlID0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdNb2RlPzogTG9hZGluZ01vZGUgb3IgWydkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZSddXG4gICAqIFNldHMgdGhlIG1vZGUgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGUgfCAnaW5kZXRlcm1pbmF0ZSddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdNb2RlJylcbiAgc2V0IG1vZGUobW9kZTogTG9hZGluZ01vZGUpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU6XG4gICAgICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1N0cmF0ZWd5PzogTG9hZGluZ1N0cmF0ZWd5IG9yIFsncmVwbGFjZScgfCAnb3ZlcmxheSddXG4gICAqIFNldHMgdGhlIHN0cmF0ZWd5IG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nTW9kZS5SZXBsYWNlIHwgJ3JlcGxhY2UnXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nU3RyYXRlZ3knKVxuICBzZXQgc3RyYXRlZ3koc3RhdGVneTogTG9hZGluZ1N0cmF0ZWd5KSB7XG4gICAgc3dpdGNoIChzdGF0ZWd5KSB7XG4gICAgICBjYXNlIExvYWRpbmdTdHJhdGVneS5PdmVybGF5OlxuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IExvYWRpbmdTdHJhdGVneS5PdmVybGF5O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gTG9hZGluZ1N0cmF0ZWd5LlJlcGxhY2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdDb2xvcj86IFwicHJpbWFyeVwiIHwgXCJhY2NlbnRcIiB8IFwid2FyblwiXG4gICAqIFNldHMgdGhlIHRoZW1lIGNvbG9yIG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudC4gRGVmYXVsdHMgdG8gXCJwcmltYXJ5XCJcbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nQ29sb3InKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFRkTG9hZGluZ0NvbnRleHQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nU2VydmljZTogVGRMb2FkaW5nU2VydmljZSkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNvbXBvbmVudCBpbiB0aGUgRE9NLCBzbyBpdCB3aWxsIGJlIGF2YWlsYWJsZSB3aGVuIGNhbGxpbmcgcmVzb2x2ZS9yZWdpc3Rlci5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyQ29tcG9uZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNvbXBvbmVudCB3aGVuIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZW1vdmVDb21wb25lbnQodGhpcy5fbmFtZSk7XG4gICAgdGhpcy5fbG9hZGluZ1JlZiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIFtUZExvYWRpbmdDb21wb25lbnRdIGFuZCBhdHRhY2hlcyBpdCB0byB0aGlzIGRpcmVjdGl2ZSdzIFtWaWV3Q29udGFpbmVyUmVmXS5cbiAgICogUGFzc2VzIHRoaXMgZGlyZWN0aXZlJ3MgW1RlbXBsYXRlUmVmXSB0byBtb2RpZnkgRE9NIGRlcGVuZGluZyBvbiBsb2FkaW5nIGBzdHJhdGVneWAuXG4gICAqL1xuICBwcml2YXRlIF9yZWdpc3RlckNvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBpcyBuZWVkZWQgdG8gcmVnaXN0ZXIgbG9hZGluZyBkaXJlY3RpdmUnKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgYFRkTG9hZGluZ0NvbXBvbmVudGAgaGFzIGJlZW4gY3JlYXRlZCBiZWZvcmUgdHJ5aW5nIHRvIGFkZCBvbmUgYWdhaW4uXG4gICAgLy8gVGhlcmUgaXMgYSB3ZWlyZCBlZGdlIGNhc2Ugd2hlbiB1c2luZyBgW3JvdXRlckxpbmtBY3RpdmVdYCB0aGF0IGNhbGxzIHRoZSBgbmdPbkluaXRgIHR3aWNlIGluIGEgcm93XG4gICAgaWYgKCF0aGlzLl9sb2FkaW5nUmVmKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nUmVmID0gdGhpcy5fbG9hZGluZ1NlcnZpY2UuY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgICAgdHlwZTogdGhpcy5fdHlwZSxcbiAgICAgICAgbW9kZTogdGhpcy5fbW9kZSxcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICAgIHN0cmF0ZWd5OiB0aGlzLl9zdHJhdGVneSxcbiAgICAgIH0sIHRoaXMuX3ZpZXdDb250YWluZXJSZWYsIHRoaXMuX3RlbXBsYXRlUmVmLCB0aGlzLl9jb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuaW1wb3J0IHsgVGRMb2FkaW5nU2VydmljZSwgTE9BRElOR19QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkTG9hZGluZ0ZhY3RvcnksIExPQURJTkdfRkFDVE9SWV9QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5mYWN0b3J5JztcbmltcG9ydCB7IFRkTG9hZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcuY29tcG9uZW50JztcblxuY29uc3QgVERfTE9BRElORzogVHlwZTxhbnk+W10gPSBbXG4gIFRkTG9hZGluZ0NvbXBvbmVudCxcbiAgVGRMb2FkaW5nRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgVERfTE9BRElOR19FTlRSWV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRMb2FkaW5nQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0xPQURJTkcsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9MT0FESU5HLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVIsXG4gICAgTE9BRElOR19QUk9WSURFUixcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgVERfTE9BRElOR19FTlRSWV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudExvYWRpbmdNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQU1FLFVBQVcsVUFBVTtJQUNyQixRQUFTLFFBQVE7Ozs7SUFJakIsYUFBYyxhQUFhO0lBQzNCLGVBQWdCLGVBQWU7Ozs7SUFJL0IsU0FBVSxTQUFTO0lBQ25CLFNBQVUsU0FBUzs7OztJQUluQixZQUFhLFlBQVk7SUFDekIsU0FBVSxTQUFTO0lBQ25CLE1BQU8sTUFBTTs7O0FBS2YsSUFBYSxrQkFBa0IsR0FBVyxHQUFHO0FBRTdDO0lBcUVFLDRCQUFvQixXQUF1QixFQUN2QixrQkFBcUM7UUFEckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQTVEakQsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNoRCxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELFVBQUssR0FBZ0IsV0FBVyxDQUFDLGFB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