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
            this._animationIn = new rxjs.Subject();
            this._animationOut = new rxjs.Subject();
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
             */ function () {
                return this._mode;
            },
            /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             */
            set: /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             * @param {?} mode
             * @return {?}
             */ function (mode) {
                this._defaultMode = mode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             */
            set: /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                if (( /** @type {?} */(this._elementRef.nativeElement))) {
                    return (( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().height;
                }
                return 0;
            };
        TdLoadingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-loading',
                        template: "<div class=\"td-loading-wrapper\"\n    [style.min-height]=\"getHeight()\"\n    [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n    [class.td-overlay]=\"isOverlay() || isFullScreen()\" \n    [class.td-fullscreen]=\"isFullScreen()\">\n  <div [@tdFadeInOut]=\"animation\"\n     (@tdFadeInOut.done)=\"animationComplete($event)\"\n     [style.min-height]=\"getHeight()\"\n     class=\"td-loading\">\n    <mat-progress-spinner *ngIf=\"isCircular()\" \n                        [mode]=\"mode\"\n                        [value]=\"value\" \n                        [color]=\"color\" \n                        [diameter]=\"getCircleDiameter()\"\n                        [strokeWidth]=\"getCircleStrokeWidth()\">\n    </mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" \n                     [mode]=\"mode\"\n                     [value]=\"value\"\n                     [color]=\"color\">\n    </mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>",
                        animations: [
                            common.tdFadeInOutAnimation,
                        ],
                        styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdLoadingComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
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
                (( /** @type {?} */(options))).height = undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.FullScreen;
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
                        loadingRef.componentRef = overlayRef.attach(new portal.ComponentPortal(TdLoadingComponent));
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
                (( /** @type {?} */(options))).height = undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.Overlay;
                /** @type {?} */
                var loadingRef = this._createComponent(options);
                /** @type {?} */
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
                var nativeElement = ( /** @type {?} */(templateRef.elementRef.nativeElement));
                (( /** @type {?} */(options))).height = nativeElement.nextElementSibling ?
                    nativeElement.nextElementSibling.scrollHeight : undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.None;
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
                var state = new overlay.OverlayConfig();
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
                var subject = new rxjs.Subject();
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdLoadingFactory.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: overlay.Overlay },
                { type: core.Injector }
            ];
        };
        return TdLoadingFactory;
    }());
    /**
     * @param {?} parent
     * @param {?} componentFactoryResolver
     * @param {?} overlay
     * @param {?} injector
     * @return {?}
     */
    function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay$$1, injector) {
        return parent || new TdLoadingFactory(componentFactoryResolver, overlay$$1, injector);
    }
    /** @type {?} */
    var LOADING_FACTORY_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingFactory,
        deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingFactory], core.ComponentFactoryResolver, overlay.Overlay, core.Injector],
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
                if (name === void 0) {
                    name = 'td-loading-main';
                }
                if (registers === void 0) {
                    registers = 1;
                }
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
                if (name === void 0) {
                    name = 'td-loading-main';
                }
                if (resolves === void 0) {
                    resolves = 1;
                }
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
                if (name === void 0) {
                    name = 'td-loading-main';
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdLoadingService.ctorParameters = function () {
            return [
                { type: TdLoadingFactory }
            ];
        };
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
        deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingService], TdLoadingFactory],
        useFactory: LOADING_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Context class for variable reference
     */
    var /**
     * Context class for variable reference
     */ TdLoadingContext = /** @class */ (function () {
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
             */ function (name) {
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
             */ function (until) {
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
             */ function (type) {
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
             */ function (mode) {
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
             */ function (stategy) {
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
            { type: core.Directive, args: [{
                        selector: '[tdLoading]',
                    },] }
        ];
        /** @nocollapse */
        TdLoadingDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.TemplateRef },
                { type: TdLoadingService }
            ];
        };
        TdLoadingDirective.propDecorators = {
            name: [{ type: core.Input, args: ['tdLoading',] }],
            until: [{ type: core.Input, args: ['tdLoadingUntil',] }],
            type: [{ type: core.Input, args: ['tdLoadingType',] }],
            mode: [{ type: core.Input, args: ['tdLoadingMode',] }],
            strategy: [{ type: core.Input, args: ['tdLoadingStrategy',] }],
            color: [{ type: core.Input, args: ['tdLoadingColor',] }]
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

    exports.CovalentLoadingModule = CovalentLoadingModule;
    exports.LoadingType = LoadingType;
    exports.LoadingMode = LoadingMode;
    exports.LoadingStrategy = LoadingStrategy;
    exports.LoadingStyle = LoadingStyle;
    exports.TD_CIRCLE_DIAMETER = TD_CIRCLE_DIAMETER;
    exports.TdLoadingComponent = TdLoadingComponent;
    exports.TdLoadingContext = TdLoadingContext;
    exports.TdLoadingDirective = TdLoadingDirective;
    exports.LOADING_PROVIDER_FACTORY = LOADING_PROVIDER_FACTORY;
    exports.TdLoadingConfig = TdLoadingConfig;
    exports.TdLoadingDirectiveConfig = TdLoadingDirectiveConfig;
    exports.TdLoadingService = TdLoadingService;
    exports.LOADING_PROVIDER = LOADING_PROVIDER;
    exports.LOADING_FACTORY_PROVIDER_FACTORY = LOADING_FACTORY_PROVIDER_FACTORY;
    exports.TdLoadingFactory = TdLoadingFactory;
    exports.LOADING_FACTORY_PROVIDER = LOADING_FACTORY_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1sb2FkaW5nLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xvYWRpbmcvc2VydmljZXMvbG9hZGluZy5mYWN0b3J5LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nL2xvYWRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBMb2FkaW5nVHlwZSB7XG4gIENpcmN1bGFyID0gJ2NpcmN1bGFyJyxcbiAgTGluZWFyID0gJ2xpbmVhcicsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdNb2RlIHtcbiAgRGV0ZXJtaW5hdGUgPSAnZGV0ZXJtaW5hdGUnLFxuICBJbmRldGVybWluYXRlID0gJ2luZGV0ZXJtaW5hdGUnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3RyYXRlZ3kge1xuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3R5bGUge1xuICBGdWxsU2NyZWVuID0gJ2Z1bGxzY3JlZW4nLFxuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBOb25lID0gJ25vbmUnLFxufVxuXG5pbXBvcnQgeyB0ZEZhZGVJbk91dEFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBURF9DSVJDTEVfRElBTUVURVI6IG51bWJlciA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9hZGluZycsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRkRmFkZUluT3V0QW5pbWF0aW9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcblxuICBwcml2YXRlIF9hbmltYXRpb25JbjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9hbmltYXRpb25PdXQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF9kZWZhdWx0TW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY2lyY2xlRGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcblxuICAvKipcbiAgICogRmxhZyBmb3IgYW5pbWF0aW9uXG4gICAqL1xuICBhbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29udGVudCBpbmplY3RlZCBpbnRvIGxvYWRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgY29udGVudDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICAvKipcbiAgICogU2V0cyBtb2RlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHRvIExvYWRpbmdNb2RlLkRldGVybWluYXRlIG9yIExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGVcbiAgICovXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgdGhpcy5fZGVmYXVsdE1vZGUgPSBtb2RlO1xuICB9XG4gIGdldCBtb2RlKCk6IExvYWRpbmdNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHZhbHVlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIGlmIG1vZGUgaXMgJ0xvYWRpbmdNb2RlLkRldGVybWluYXRlJ1xuICAgKi9cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc3R5bGU6IExvYWRpbmdTdHlsZSA9IExvYWRpbmdTdHlsZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBoZWlnaHQ6IG51bWJlclxuICAgKiBTZXRzIGhlaWdodCBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XS5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiB0eXBlOiBMb2FkaW5nVHlwZVxuICAgKiBTZXRzIHR5cGUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gcmVuZGVyZWQuXG4gICAqL1xuICB0eXBlOiBMb2FkaW5nVHlwZSA9IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuXG4gIC8qKlxuICAgKiBjb2xvcjogcHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJ1xuICAgKiBTZXRzIHRoZW1lIGNvbG9yIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHJlbmRlcmVkLlxuICAgKi9cbiAgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gV2hlbiBvdmVybGF5IGlzIHVzZWQgYW5kIHRoZSBob3N0IHdpZHRoIGhhcyBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAxcHhcbiAgICAvLyBzZXQgdGhlIGNpcmNsZSBkaWFtZXRlciB3aGVuIHBvc3NpYmxlIGluY2FzZSB0aGUgbG9hZGluZyBjb21wb25lbnQgd2FzIHJlbmRlcmVkIGluIGEgaGlkZGVuIHN0YXRlXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgJiYgdGhpcy5faG9zdEhlaWdodCgpID4gMSkge1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX3NldENpcmNsZURpYW1ldGVyKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEhlaWdodCgpOiBzdHJpbmcge1xuICAgIC8vIElnbm9yZSBoZWlnaHQgaWYgc3R5bGUgaXMgYG92ZXJsYXlgIG9yIGBmdWxsc2NyZWVuYC5cbiAgICAvLyBBZGQgaGVpZ2h0IGlmIGNoaWxkIGVsZW1lbnRzIGhhdmUgYSBoZWlnaHQgYW5kIHN0eWxlIGlzIGBub25lYCwgZWxzZSByZXR1cm4gZGVmYXVsdCBoZWlnaHQuXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgfHwgdGhpcy5pc0Z1bGxTY3JlZW4oKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ID8gYCR7dGhpcy5oZWlnaHR9cHhgIDogJzE1MHB4JztcbiAgICB9XG4gIH1cblxuICBnZXRDaXJjbGVEaWFtZXRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVEaWFtZXRlcjtcbiAgfVxuXG4gIGdldENpcmNsZVN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgLy8gd2UgY2FsY3VsYXRlIHRoZSBzdHJva2Ugd2lkdGggYnkgc2V0dGluZyBpdCBhcyAxMCUgb2YgaXRzIGRpYW1ldGVyXG4gICAgbGV0IHN0cm9rZVdpZHRoOiBudW1iZXIgPSB0aGlzLmdldENpcmNsZURpYW1ldGVyKCkgLyAxMDtcbiAgICByZXR1cm4gTWF0aC5hYnMoc3Ryb2tlV2lkdGgpO1xuICB9XG5cbiAgaXNDaXJjdWxhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgfVxuXG4gIGlzTGluZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExvYWRpbmdUeXBlLkxpbmVhcjtcbiAgfVxuXG4gIGlzRnVsbFNjcmVlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSA9PT0gTG9hZGluZ1N0eWxlLkZ1bGxTY3JlZW47XG4gIH1cblxuICBpc092ZXJsYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUgPT09IExvYWRpbmdTdHlsZS5PdmVybGF5O1xuICB9XG5cbiAgYW5pbWF0aW9uQ29tcGxldGUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIGl0cyBcImluXCIgb3IgXCJvdXRcIiBhbmltYXRpb24gdG8gZXhlY3V0ZSB0aGUgcHJvcGVyIGNhbGxiYWNrXG4gICAgaWYgKCFldmVudC5mcm9tU3RhdGUpIHtcbiAgICAgIHRoaXMuaW5BbmltYXRpb25Db21wbGV0ZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRBbmltYXRpb25Db21wbGV0ZWQoKTtcbiAgICB9XG4gIH1cblxuICBpbkFuaW1hdGlvbkNvbXBsZXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9hbmltYXRpb25Jbi5uZXh0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBvdXRBbmltYXRpb25Db21wbGV0ZWQoKTogdm9pZCB7XG4gICAvKiBsaXR0bGUgaGFjayB0byByZXNldCB0aGUgbG9hZGVyIHZhbHVlIGFuZCBhbmltYXRpb24gYmVmb3JlIHJlbW92aW5nIGl0IGZyb20gRE9NXG4gICAgKiBlbHNlLCB0aGUgbG9hZGVyIHdpbGwgYXBwZWFyIHdpdGggcHJldiB2YWx1ZSB3aGVuIGl0cyByZWdpc3RlcmVkIGFnYWluXG4gICAgKiBhbmQgd2lsbCBkbyBhbiBhbmltYXRpb24gZ29pbmcgcHJldiB2YWx1ZSB0byAwLlxuICAgICovXG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25PdXQubmV4dCh1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBpbiBhbmltYXRpb24gYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgY29tcGxldGl0aW9uIGV2ZW50LlxuICAgKi9cbiAgc3RhcnRJbkFuaW1hdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8qIG5lZWQgdG8gc3dpdGNoIGJhY2sgdG8gdGhlIHNlbGVjdGVkIG1vZGUsIHNvIHdlIGhhdmUgc2F2ZWQgaXQgaW4gYW5vdGhlciB2YXJpYWJsZVxuICAgICogIGFuZCB0aGVuIHJlY292ZXIgaXQuIChpc3N1ZSB3aXRoIHByb3RyYWN0b3IpXG4gICAgKi9cbiAgICB0aGlzLl9tb2RlID0gdGhpcy5fZGVmYXVsdE1vZGU7XG4gICAgLy8gU2V0IHZhbHVlcyBiZWZvcmUgdGhlIGFuaW1hdGlvbnMgc3RhcnRzXG4gICAgdGhpcy5fc2V0Q2lyY2xlRGlhbWV0ZXIoKTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uSW4uYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIG91dCBhbmltYXRpb24gYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgY29tcGxldGl0aW9uIGV2ZW50LlxuICAgKi9cbiAgc3RhcnRPdXRBbmltYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGZhbHNlO1xuICAgIC8qIG5lZWQgdG8gc3dpdGNoIGJhY2sgYW5kIGZvcnRoIGZyb20gZGV0ZXJtaW5hdGUvaW5kZXRlcm1pbmF0ZSBzbyB0aGUgc2V0SW50ZXJ2YWwoKVxuICAgICogaW5zaWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyIHN0b3BzIGFuZCBwcm90cmFjdG9yIGRvZXNudCB0aW1lb3V0IHdhaXRpbmcgdG8gc3luYy5cbiAgICAqL1xuICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25PdXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBwcm9wZXIgZGlhbWV0ZXIgZm9yIHRoZSBjaXJjbGUgYW5kIHNldCBpdFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Q2lyY2xlRGlhbWV0ZXIoKTogdm9pZCB7XG4gICAgLy8gd2Ugc2V0IGEgZGVmYXVsdCBkaWFtZXRlciBvZiAxMDAgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBtYXRlcmlhbFxuICAgIGxldCBkaWFtZXRlcjogbnVtYmVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuICAgIC8vIGlmIGhlaWdodCBpcyBwcm92aWRlZCwgdGhlbiB3ZSB0YWtlIHRoYXQgYXMgZGlhbWV0ZXJcbiAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgIGRpYW1ldGVyID0gdGhpcy5oZWlnaHQ7XG4gICAgICAvLyBlbHNlIGlmIGl0cyBub3QgcHJvdmlkZWQsIHRoZW4gd2UgdGFrZSB0aGUgaG9zdCBoZWlnaHRcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpYW1ldGVyID0gdGhpcy5faG9zdEhlaWdodCgpO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgZGlhbWV0ZXIgaXMgb3ZlciBURF9DSVJDTEVfRElBTUVURVIsIHdlIHNldCBURF9DSVJDTEVfRElBTUVURVJcbiAgICBpZiAoISFkaWFtZXRlciAmJiBkaWFtZXRlciA8PSBURF9DSVJDTEVfRElBTUVURVIpIHtcbiAgICAgIHRoaXMuX2NpcmNsZURpYW1ldGVyID0gTWF0aC5mbG9vcihkaWFtZXRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NpcmNsZURpYW1ldGVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBob3N0IGhlaWdodCBvZiB0aGUgbG9hZGluZyBjb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgX2hvc3RIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENoYW5nZURldGVjdG9yUmVmLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdUeXBlLCBMb2FkaW5nTW9kZSwgTG9hZGluZ1N0cmF0ZWd5LCBMb2FkaW5nU3R5bGUgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGRMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9sb2FkaW5nLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbExvYWRpbmdPcHRpb25zIGV4dGVuZHMgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgc3R5bGU/OiBMb2FkaW5nU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvYWRpbmdSZWYge1xuICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHN1YmplY3Q/OiBTdWJqZWN0PGFueT47XG4gIHRpbWVzPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIE5PVEU6IEBpbnRlcm5hbCB1c2FnZSBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXMgbWF0ZXJpYWwgYE92ZXJsYXlgIHNlcnZpY2VzIHRvIGNyZWF0ZSBhIERPTSBlbGVtZW50IGFuZCBhdHRhY2ggdGhlIGxvYWRpbmcgY29tcG9uZW50XG4gICAqIGludG8gaXQuIExldmVyYWdpbmcgdGhlIHN0YXRlIGFuZCBjb25maWd1cmF0aW9uIGZyb20gaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlRnVsbFNjcmVlbkNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnKTogSUxvYWRpbmdSZWYge1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgICBsZXQgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9pbml0aWFsaXplQ29udGV4dCgpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gICAgbG9hZGluZ1JlZi5vYnNlcnZhYmxlXG4gICAgLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChUZExvYWRpbmdDb21wb25lbnQpKTtcbiAgICAgICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0SW5BbmltYXRpb24oKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBzdWJzOiBTdWJzY3JpcHRpb24gPSBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydE91dEFuaW1hdGlvbigpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgc3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICAgIG92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9hZGluZyBjb21wb25lbnQgZHluYW1pY2FsbHkgYW5kIGF0dGFjaGVzIGl0IGludG8gdGhlIGdpdmVuIHZpZXdDb250YWluZXJSZWYuXG4gICAqIExldmVyYWdlcyBUZW1wbGF0ZVBvcnRhbHMgZnJvbSBtYXRlcmlhbCB0byBpbmplY3QgdGhlIHRlbXBsYXRlIGluc2lkZSBvZiBpdCBzbyBpdCBmaXRzXG4gICAqIHBlcmZlY3RseSB3aGVuIG92ZXJsYXlpbmcgaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlT3ZlcmxheUNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pik6IElMb2FkaW5nUmVmIHtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gICAgbGV0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5fY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGVudCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICBsb2FkaW5nUmVmLm9ic2VydmFibGVcbiAgICAuc3Vic2NyaWJlKChyZWdpc3RlcmVkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChyZWdpc3RlcmVkID4gMCAmJiAhbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRJbkFuaW1hdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0T3V0QW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvYWRpbmcgY29tcG9uZW50IGR5bmFtaWNhbGx5IGFuZCBhdHRhY2hlcyBpdCBpbnRvIHRoZSBnaXZlbiB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBSZXBsYWNlcyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgbG9hZGluZyBjb21wb25lbnQgZGVwZW5kaW5nIGlmIGl0IHdhcyByZWdpc3RlcmVkIG9yIHJlc29sdmVkLlxuICAgKlxuICAgKiBTYXZlcyBhIHJlZmVyZW5jZSBpbiBjb250ZXh0IHRvIGJlIGNhbGxlZCB3aGVuIHJlZ2lzdGVyaW5nL3Jlc29sdmluZyB0aGUgbG9hZGluZyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlcGxhY2VDb21wb25lbnQob3B0aW9uczogSVRkTG9hZGluZ0NvbmZpZywgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRlbXBsYXRlUmVmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IG5hdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nID9cbiAgICAgIG5hdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCA6IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk5vbmU7XG4gICAgbGV0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5fY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZVxuICAgIC5zdWJzY3JpYmUoKHJlZ2lzdGVyZWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyZWQgPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0SW5BbmltYXRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZCA8PSAwICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgc3ViczogU3Vic2NyaXB0aW9uID0gbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRPdXRBbmltYXRpb24oKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAvLyBwYXNzaW5nIGNvbnRleHQgc28gd2hlbiB0aGUgdGVtcGxhdGUgaXMgcmUtYXR0YWNoZWQsIHdlIGNhbiBrZWVwIHRoZSByZWZlcmVuY2Ugb2YgdGhlIHZhcmlhYmxlc1xuICAgICAgICAgIGxldCBjZHI6IENoYW5nZURldGVjdG9yUmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuZGV0YWNoKHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0VmlldykpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE5lZWQgdG8gY2FsbCBcIm1hcmtGb3JDaGVja1wiIGFuZCBcImRldGVjdENoYW5nZXNcIiBvbiBhdHRhY2hlZCB0ZW1wbGF0ZSwgc28gaXRzIGRldGVjdGVkIGJ5IHBhcmVudCBjb21wb25lbnQgd2hlbiBhdHRhY2hlZFxuICAgICAgICAgICAqIHdpdGggXCJPblB1c2hcIiBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgICAgICAgICovXG4gICAgICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICBjZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsb2FkaW5nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmdWxsc2NyZWVuIG92ZXJsYXkgZm9yIHRoZSBsb2FkaW5nIHVzYWdlLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBsZXQgc3RhdGU6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZygpO1xuICAgIHN0YXRlLmhhc0JhY2tkcm9wID0gZmFsc2U7XG4gICAgc3RhdGUucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCk7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXkuY3JlYXRlKHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZ2VuZXJpYyBjb21wb25lbnQgZHluYW1pY2FsbHkgd2FpdGluZyB0byBiZSBhdHRhY2hlZCB0byBhIHZpZXdDb250YWluZXJSZWYuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVDb21wb25lbnQob3B0aW9uczogSUludGVybmFsTG9hZGluZ09wdGlvbnMpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IGNvbXBSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5faW5pdGlhbGl6ZUNvbnRleHQoKTtcbiAgICBjb21wUmVmLmNvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUZExvYWRpbmdDb21wb25lbnQpLmNyZWF0ZSh0aGlzLl9pbmplY3Rvcik7XG4gICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBjb21wUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgcmV0dXJuIGNvbXBSZWY7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb250ZXh0IGZvciBsb2FkaW5nIGNvbXBvbmVudC5cbiAgICovXG4gIHByaXZhdGUgX2luaXRpYWxpemVDb250ZXh0KCk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgc3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHJldHVybiB7XG4gICAgICBvYnNlcnZhYmxlOiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgIGNvbXBvbmVudFJlZjogdW5kZWZpbmVkLFxuICAgICAgdGltZXM6IDAsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIGNvbmZpZ3VyYXRpb24gdG8gdGhlIGxvYWRpbmcgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfbWFwT3B0aW9ucyhvcHRpb25zOiBJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucywgaW5zdGFuY2U6IFRkTG9hZGluZ0NvbXBvbmVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICBpZiAob3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5tb2RlID0gb3B0aW9ucy5tb2RlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVJfRkFDVE9SWShcbiAgICBwYXJlbnQ6IFRkTG9hZGluZ0ZhY3RvcnksIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBvdmVybGF5OiBPdmVybGF5LCBpbmplY3RvcjogSW5qZWN0b3IpOiBUZExvYWRpbmdGYWN0b3J5IHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRMb2FkaW5nRmFjdG9yeShjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIG92ZXJsYXksIGluamVjdG9yKTtcbn1cblxuZXhwb3J0IGNvbnN0IExPQURJTkdfRkFDVE9SWV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkTG9hZGluZ0ZhY3RvcnksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZExvYWRpbmdGYWN0b3J5XSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdmVybGF5LCBJbmplY3Rvcl0sXG4gIHVzZUZhY3Rvcnk6IExPQURJTkdfRkFDVE9SWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRMb2FkaW5nQ29udGV4dCB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRMb2FkaW5nQ29tcG9uZW50LCBMb2FkaW5nTW9kZSwgTG9hZGluZ1N0cmF0ZWd5LCBMb2FkaW5nVHlwZSB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTG9hZGluZ0ZhY3RvcnksIElMb2FkaW5nUmVmIH0gZnJvbSAnLi9sb2FkaW5nLmZhY3RvcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZExvYWRpbmdDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU/OiBMb2FkaW5nVHlwZTtcbiAgbW9kZT86IExvYWRpbmdNb2RlO1xuICBjb2xvcj86ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nO1xufVxuXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29uZmlnIGltcGxlbWVudHMgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZT86IExvYWRpbmdUeXBlO1xuICBtb2RlPzogTG9hZGluZ01vZGU7XG4gIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBJVGRMb2FkaW5nQ29uZmlnKSB7XG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgaWYgKCF0aGlzLm5hbWUpIHtcbiAgICAgIHRocm93IEVycm9yKCdOYW1lIGlzIHJlcXVpcmVkIGZvciBbVGRMb2FkaW5nXSBjb25maWd1cmF0aW9uLicpO1xuICAgIH1cbiAgICB0aGlzLm1vZGUgPSBjb25maWcubW9kZSA/IGNvbmZpZy5tb2RlIDogTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgICB0aGlzLnR5cGUgPSBjb25maWcudHlwZSA/IGNvbmZpZy50eXBlIDogTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gICAgdGhpcy5jb2xvciA9IGNvbmZpZy5jb2xvciA/IGNvbmZpZy5jb2xvciA6ICdwcmltYXJ5JztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcgZXh0ZW5kcyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgc3RyYXRlZ3k/OiBMb2FkaW5nU3RyYXRlZ3k7XG59XG5cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdEaXJlY3RpdmVDb25maWcgZXh0ZW5kcyBUZExvYWRpbmdDb25maWcgaW1wbGVtZW50cyBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBMb2FkaW5nVHlwZTtcbiAgbW9kZTogTG9hZGluZ01vZGU7XG4gIHN0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgICB0aGlzLnN0cmF0ZWd5ID0gY29uZmlnLnN0cmF0ZWd5ID8gY29uZmlnLnN0cmF0ZWd5IDogTG9hZGluZ1N0cmF0ZWd5LlJlcGxhY2U7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IHtba2V5OiBzdHJpbmddOiBJTG9hZGluZ1JlZn0gPSB7fTtcbiAgcHJpdmF0ZSBfdGltZW91dHM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGluZ0ZhY3Rvcnk6IFRkTG9hZGluZ0ZhY3RvcnkpIHtcbiAgICB0aGlzLmNyZWF0ZSh7XG4gICAgICBuYW1lOiAndGQtbG9hZGluZy1tYWluJyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZ1xuICAgKiAtIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICogLSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PlxuICAgKlxuICAgKiBDcmVhdGVzIGFuIHJlcGxhY2UgbG9hZGluZyBtYXNrIGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgdmlld0NvbnRhaW5lclJlZi5cbiAgICogUmVwbGFjZXMgdGhlIHRlbXBsYXRlUmVmIHdpdGggdGhlIG1hc2sgd2hlbiBhIHJlcXVlc3QgaXMgcmVnaXN0ZXJlZCBvbiBpdC5cbiAgICpcbiAgICogTk9URTogQGludGVybmFsIHVzYWdlIG9ubHkuXG4gICAqL1xuICBjcmVhdGVDb21wb25lbnQoY29uZmlnOiBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IGRpcmVjdGl2ZUNvbmZpZzogVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnID0gbmV3IFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyhjb25maWcpO1xuICAgIGlmICh0aGlzLl9jb250ZXh0W2RpcmVjdGl2ZUNvbmZpZy5uYW1lXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYE5hbWUgZHVwbGljYXRpb246IFtUZExvYWRpbmddIGRpcmVjdGl2ZSBoYXMgYSBuYW1lIGNvbmZsaWN0IHdpdGggJHtkaXJlY3RpdmVDb25maWcubmFtZX0uYCk7XG4gICAgfVxuICAgIGlmIChkaXJlY3RpdmVDb25maWcuc3RyYXRlZ3kgPT09IExvYWRpbmdTdHJhdGVneS5PdmVybGF5KSB7XG4gICAgICB0aGlzLl9jb250ZXh0W2RpcmVjdGl2ZUNvbmZpZy5uYW1lXSA9IHRoaXMuX2xvYWRpbmdGYWN0b3J5LmNyZWF0ZU92ZXJsYXlDb21wb25lbnQoZGlyZWN0aXZlQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlUmVwbGFjZUNvbXBvbmVudChkaXJlY3RpdmVDb25maWcsIHZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElUZExvYWRpbmdDb25maWdcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bGxzY3JlZW4gbG9hZGluZyBtYXNrIGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgRE9NIHdpdGggdGhlIGdpdmVuIGNvbmZpZ3VyYXRpb24uXG4gICAqIE9ubHkgZGlzcGxheWVkIHdoZW4gdGhlIG1hc2sgaGFzIGEgcmVxdWVzdCByZWdpc3RlcmVkIG9uIGl0LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZShjb25maWc6IElUZExvYWRpbmdDb25maWcpOiB2b2lkIHtcbiAgICBsZXQgZnVsbHNjcmVlbkNvbmZpZzogVGRMb2FkaW5nQ29uZmlnID0gbmV3IFRkTG9hZGluZ0NvbmZpZyhjb25maWcpO1xuICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KGZ1bGxzY3JlZW5Db25maWcubmFtZSk7XG4gICAgdGhpcy5fY29udGV4dFtmdWxsc2NyZWVuQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlRnVsbFNjcmVlbkNvbXBvbmVudChmdWxsc2NyZWVuQ29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqXG4gICAqIFJlbW92ZXMgYGxvYWRpbmdgIGNvbXBvbmVudCBmcm9tIHNlcnZpY2UgY29udGV4dC5cbiAgICovXG4gIHB1YmxpYyByZW1vdmVDb21wb25lbnQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0uY29tcG9uZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHJlZ2lzdGVycz86IG51bWJlclxuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogUmVzb2x2ZXMgYSByZXF1ZXN0IGZvciB0aGUgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKiBDYW4gb3B0aW9uYWxseSBwYXNzIHJlZ2lzdGVycyBhcmd1bWVudCB0byBzZXQgYSBudW1iZXIgb2YgcmVnaXN0ZXIgY2FsbHMuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZW1ldGVycyBhcmUgdXNlZCwgdGhlbiBkZWZhdWx0IG1haW4gbWFzayB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIGUuZy4gbG9hZGluZ1NlcnZpY2UucmVnaXN0ZXIoKVxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nLCByZWdpc3RlcnM6IG51bWJlciA9IDEpOiBib29sZWFuIHtcbiAgICAvLyB0cnkgcmVnaXN0ZXJpbmcgaW50byB0aGUgc2VydmljZSBpZiB0aGUgbG9hZGluZyBjb21wb25lbnQgaGFzIGJlZW4gaW5zdGFuY2lhdGVkIG9yIGlmIGl0IGV4aXN0cy5cbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgcmVnaXN0ZXJzID0gcmVnaXN0ZXJzIDwgMSA/IDEgOiByZWdpc3RlcnM7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzICs9IHJlZ2lzdGVycztcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC5uZXh0KHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGl0IGRvZXNudCBleGlzdCwgc2V0IGEgdGltZW91dCBzbyBpdHMgcmVnaXN0ZXJlZCBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcHBlbnNcbiAgICAgIC8vIHRoaXMgaW4gY2FzZSBcInJlZ2lzdGVyXCIgb2NjdXJlZCBvbiB0aGUgYG5nT25Jbml0YCBsaWZlaG9vayBjeWNsZS5cbiAgICAgIGlmICghdGhpcy5fdGltZW91dHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5fdGltZW91dHNbbmFtZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyKG5hbWUsIHJlZ2lzdGVycyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgaXQgdGltZW91dCBvY2N1cmVkIGFuZCBzdGlsbCBkb2VzbnQgZXhpc3QsIGl0IG1lYW5zIHRoZSB0aWVtb3V0IHdhc250IG5lZWRlZCBzbyB3ZSBjbGVhciBpdC5cbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHJlc29sdmVzPzogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhIHJlcXVlc3QgZm9yIHRoZSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIENhbiBvcHRpb25hbGx5IHBhc3MgcmVzb2x2ZXMgYXJndW1lbnQgdG8gc2V0IGEgbnVtYmVyIG9mIHJlc29sdmUgY2FsbHMuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZW1ldGVycyBhcmUgdXNlZCwgdGhlbiBkZWZhdWx0IG1haW4gbWFzayB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIGUuZy4gbG9hZGluZ1NlcnZpY2UucmVzb2x2ZSgpXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShuYW1lOiBzdHJpbmcgPSAndGQtbG9hZGluZy1tYWluJywgcmVzb2x2ZXM6IG51bWJlciA9IDEpOiBib29sZWFuIHtcbiAgICAvLyBjbGVhciB0aW1lb3V0IGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBpcyBcInJlc29sdmVkXCIgYmVmb3JlIGl0cyBcInJlZ2lzdGVyZWRcIlxuICAgIHRoaXMuX2NsZWFyVGltZW91dChuYW1lKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgcmVzb2x2ZXMgPSByZXNvbHZlcyA8IDEgPyAxIDogcmVzb2x2ZXM7XG4gICAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA+IDApIHtcbiAgICAgICAgbGV0IHRpbWVzOiBudW1iZXIgPSB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzO1xuICAgICAgICB0aW1lcyAtPSByZXNvbHZlcztcbiAgICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA9IHRpbWVzIDwgMCA/IDAgOiB0aW1lcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC5uZXh0KHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhbGwgcmVxdWVzdCBmb3IgdGhlIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZXNvbHZlQWxsKClcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlQWxsKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nKTogYm9vbGVhbiB7XG4gICAgLy8gY2xlYXIgdGltZW91dCBpZiB0aGUgbG9hZGluZyBjb21wb25lbnQgaXMgXCJyZXNvbHZlZFwiIGJlZm9yZSBpdHMgXCJyZWdpc3RlcmVkXCJcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQobmFtZSk7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgPSAwO1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogLSB2YWx1ZTogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBTZXQgdmFsdWUgb24gYSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIFVzYWdlIG9ubHkgYXZhaWxhYmxlIGlmIGl0cyBtb2RlIGlzICdkZXRlcm1pbmF0ZScgYW5kIGlmIGxvYWRpbmcgaXMgc2hvd2luZy5cbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgbGV0IGluc3RhbmNlOiBUZExvYWRpbmdDb21wb25lbnQgPSB0aGlzLl9jb250ZXh0W25hbWVdLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgIGlmIChpbnN0YW5jZS5tb2RlID09PSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSAmJiBpbnN0YW5jZS5hbmltYXRpb24pIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGltZW91dCBsaW5rZWQgdG8gdGhlIG5hbWUuXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50IHRvIGJlIGNsZWFyZWRcbiAgICovXG4gIHByaXZhdGUgX2NsZWFyVGltZW91dChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dHNbbmFtZV0pO1xuICAgIGRlbGV0ZSB0aGlzLl90aW1lb3V0c1tuYW1lXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTE9BRElOR19QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGRMb2FkaW5nU2VydmljZSwgbG9hZGluZ0ZhY3Rvcnk6IFRkTG9hZGluZ0ZhY3RvcnkpOiBUZExvYWRpbmdTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRMb2FkaW5nU2VydmljZShsb2FkaW5nRmFjdG9yeSk7XG59XG5cbmV4cG9ydCBjb25zdCBMT0FESU5HX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRMb2FkaW5nU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkTG9hZGluZ1NlcnZpY2VdLCBUZExvYWRpbmdGYWN0b3J5XSxcbiAgdXNlRmFjdG9yeTogTE9BRElOR19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2FkaW5nVHlwZSwgTG9hZGluZ01vZGUsIExvYWRpbmdTdHJhdGVneSwgVGRMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJTG9hZGluZ1JlZiB9IGZyb20gJy4uL3NlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeSc7XG5cbi8qKlxuICogQ29udGV4dCBjbGFzcyBmb3IgdmFyaWFibGUgcmVmZXJlbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb250ZXh0IHtcbiAgcHVibGljICRpbXBsaWNpdDogYW55ID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgdGRMb2FkaW5nOiBhbnkgPSB1bmRlZmluZWQ7XG59XG5cbi8vIENvbnN0YW50IGZvciBnZW5lcmF0aW9uIG9mIHRoZSBpZCBmb3IgdGhlIG5leHQgY29tcG9uZW50XG5sZXQgVERfTE9BRElOR19ORVhUX0lEOiBudW1iZXIgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMb2FkaW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9jb250ZXh0OiBUZExvYWRpbmdDb250ZXh0ID0gbmV3IFRkTG9hZGluZ0NvbnRleHQoKTtcbiAgcHJpdmF0ZSBfdHlwZTogTG9hZGluZ1R5cGU7XG4gIHByaXZhdGUgX21vZGU6IExvYWRpbmdNb2RlO1xuICBwcml2YXRlIF9zdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvYWRpbmdSZWY6IElMb2FkaW5nUmVmO1xuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmc6IHN0cmluZ1xuICAgKiBOYW1lIHJlZmVyZW5jZSBvZiB0aGUgbG9hZGluZyBtYXNrLCB1c2VkIHRvIHJlZ2lzdGVyL3Jlc29sdmUgcmVxdWVzdHMgdG8gdGhlIG1hc2suXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZycpXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1VudGlsPzogYW55XG4gICAqIElmIGl0cyBudWxsLCB1bmRlZmluZWQgb3IgZmFsc2UgaXQgd2lsbCBiZSB1c2VkIHRvIHJlZ2lzdGVyIHJlcXVlc3RzIHRvIHRoZSBtYXNrLlxuICAgKiBFbHNlIGlmIGl0cyBhbnkgdmFsdWUgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgYXMgdHJ1ZSwgaXQgd2lsbCByZXNvbHZlIHRoZSBtYXNrLlxuICAgKiBbbmFtZV0gaXMgb3B0aW9uYWwgd2hlbiB1c2luZyBbdW50aWxdLCBidXQgY2FuIHN0aWxsIGJlIHVzZWQgdG8gcmVnaXN0ZXIvcmVzb2x2ZSBpdCBtYW51YWxseS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nVW50aWwnKVxuICBzZXQgdW50aWwodW50aWw6IGFueSkge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgdGhpcy5fbmFtZSA9ICd0ZC1sb2FkaW5nLXVudGlsLScgKyBURF9MT0FESU5HX05FWFRfSUQrKztcbiAgICB9XG4gICAgdGhpcy5fY29udGV4dC4kaW1wbGljaXQgPSB0aGlzLl9jb250ZXh0LnRkTG9hZGluZyA9IHVudGlsO1xuICAgIGlmICghdW50aWwpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuX25hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZXNvbHZlQWxsKHRoaXMuX25hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdUeXBlPzogTG9hZGluZ1R5cGUgb3IgWydsaW5lYXInIHwgJ2NpcmN1bGFyJ11cbiAgICogU2V0cyB0aGUgdHlwZSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ1R5cGUuQ2lyY3VsYXIgfCAnY2lyY3VsYXInXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nVHlwZScpXG4gIHNldCB0eXBlKHR5cGU6IExvYWRpbmdUeXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIExvYWRpbmdUeXBlLkxpbmVhcjpcbiAgICAgICAgdGhpcy5fdHlwZSA9IExvYWRpbmdUeXBlLkxpbmVhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl90eXBlID0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdNb2RlPzogTG9hZGluZ01vZGUgb3IgWydkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZSddXG4gICAqIFNldHMgdGhlIG1vZGUgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGUgfCAnaW5kZXRlcm1pbmF0ZSddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdNb2RlJylcbiAgc2V0IG1vZGUobW9kZTogTG9hZGluZ01vZGUpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU6XG4gICAgICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1N0cmF0ZWd5PzogTG9hZGluZ1N0cmF0ZWd5IG9yIFsncmVwbGFjZScgfCAnb3ZlcmxheSddXG4gICAqIFNldHMgdGhlIHN0cmF0ZWd5IG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nTW9kZS5SZXBsYWNlIHwgJ3JlcGxhY2UnXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nU3RyYXRlZ3knKVxuICBzZXQgc3RyYXRlZ3koc3RhdGVneTogTG9hZGluZ1N0cmF0ZWd5KSB7XG4gICAgc3dpdGNoIChzdGF0ZWd5KSB7XG4gICAgICBjYXNlIExvYWRpbmdTdHJhdGVneS5PdmVybGF5OlxuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IExvYWRpbmdTdHJhdGVneS5PdmVybGF5O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gTG9hZGluZ1N0cmF0ZWd5LlJlcGxhY2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdDb2xvcj86IFwicHJpbWFyeVwiIHwgXCJhY2NlbnRcIiB8IFwid2FyblwiXG4gICAqIFNldHMgdGhlIHRoZW1lIGNvbG9yIG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudC4gRGVmYXVsdHMgdG8gXCJwcmltYXJ5XCJcbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nQ29sb3InKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFRkTG9hZGluZ0NvbnRleHQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nU2VydmljZTogVGRMb2FkaW5nU2VydmljZSkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNvbXBvbmVudCBpbiB0aGUgRE9NLCBzbyBpdCB3aWxsIGJlIGF2YWlsYWJsZSB3aGVuIGNhbGxpbmcgcmVzb2x2ZS9yZWdpc3Rlci5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyQ29tcG9uZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNvbXBvbmVudCB3aGVuIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZW1vdmVDb21wb25lbnQodGhpcy5fbmFtZSk7XG4gICAgdGhpcy5fbG9hZGluZ1JlZiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIFtUZExvYWRpbmdDb21wb25lbnRdIGFuZCBhdHRhY2hlcyBpdCB0byB0aGlzIGRpcmVjdGl2ZSdzIFtWaWV3Q29udGFpbmVyUmVmXS5cbiAgICogUGFzc2VzIHRoaXMgZGlyZWN0aXZlJ3MgW1RlbXBsYXRlUmVmXSB0byBtb2RpZnkgRE9NIGRlcGVuZGluZyBvbiBsb2FkaW5nIGBzdHJhdGVneWAuXG4gICAqL1xuICBwcml2YXRlIF9yZWdpc3RlckNvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBpcyBuZWVkZWQgdG8gcmVnaXN0ZXIgbG9hZGluZyBkaXJlY3RpdmUnKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgYFRkTG9hZGluZ0NvbXBvbmVudGAgaGFzIGJlZW4gY3JlYXRlZCBiZWZvcmUgdHJ5aW5nIHRvIGFkZCBvbmUgYWdhaW4uXG4gICAgLy8gVGhlcmUgaXMgYSB3ZWlyZCBlZGdlIGNhc2Ugd2hlbiB1c2luZyBgW3JvdXRlckxpbmtBY3RpdmVdYCB0aGF0IGNhbGxzIHRoZSBgbmdPbkluaXRgIHR3aWNlIGluIGEgcm93XG4gICAgaWYgKCF0aGlzLl9sb2FkaW5nUmVmKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nUmVmID0gdGhpcy5fbG9hZGluZ1NlcnZpY2UuY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgICAgdHlwZTogdGhpcy5fdHlwZSxcbiAgICAgICAgbW9kZTogdGhpcy5fbW9kZSxcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICAgIHN0cmF0ZWd5OiB0aGlzLl9zdHJhdGVneSxcbiAgICAgIH0sIHRoaXMuX3ZpZXdDb250YWluZXJSZWYsIHRoaXMuX3RlbXBsYXRlUmVmLCB0aGlzLl9jb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuaW1wb3J0IHsgVGRMb2FkaW5nU2VydmljZSwgTE9BRElOR19QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkTG9hZGluZ0ZhY3RvcnksIExPQURJTkdfRkFDVE9SWV9QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5mYWN0b3J5JztcbmltcG9ydCB7IFRkTG9hZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcuY29tcG9uZW50JztcblxuY29uc3QgVERfTE9BRElORzogVHlwZTxhbnk+W10gPSBbXG4gIFRkTG9hZGluZ0NvbXBvbmVudCxcbiAgVGRMb2FkaW5nRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgVERfTE9BRElOR19FTlRSWV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRMb2FkaW5nQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0xPQURJTkcsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9MT0FESU5HLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVIsXG4gICAgTE9BRElOR19QUk9WSURFUixcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgVERfTE9BRElOR19FTlRSWV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudExvYWRpbmdNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsiU3ViamVjdCIsIkNvbXBvbmVudCIsInRkRmFkZUluT3V0QW5pbWF0aW9uIiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiQ29tcG9uZW50UG9ydGFsIiwiVGVtcGxhdGVQb3J0YWwiLCJPdmVybGF5Q29uZmlnIiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIk92ZXJsYXkiLCJJbmplY3RvciIsIm92ZXJsYXkiLCJPcHRpb25hbCIsIlNraXBTZWxmIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiVGVtcGxhdGVSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJNYXRQcm9n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