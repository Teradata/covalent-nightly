(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@covalent/core/common'), require('@angular/cdk/portal'), require('@angular/cdk/overlay'), require('rxjs/operators'), require('@angular/common'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/loading', ['exports', '@angular/core', 'rxjs', '@covalent/core/common', '@angular/cdk/portal', '@angular/cdk/overlay', 'rxjs/operators', '@angular/common', '@angular/material/progress-bar', '@angular/material/progress-spinner'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.loading = {}),global.ng.core,global.rxjs,global.covalent.core.common,global.ng.cdk.portal,global.ng.cdk.overlay,global.rxjs.operators,global.ng.common,global.ng.material['progress-bar'],global.ng.material['progress-spinner']));
}(this, (function (exports,core,rxjs,common,portal,overlay,operators,common$1,progressBar,progressSpinner) { 'use strict';

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
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
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
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
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
                // passing context so when the template is attached, we can keep the reference of the variables
                /** @type {?} */
                var contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1sb2FkaW5nLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xvYWRpbmcvc2VydmljZXMvbG9hZGluZy5mYWN0b3J5LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nL2xvYWRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBMb2FkaW5nVHlwZSB7XG4gIENpcmN1bGFyID0gJ2NpcmN1bGFyJyxcbiAgTGluZWFyID0gJ2xpbmVhcicsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdNb2RlIHtcbiAgRGV0ZXJtaW5hdGUgPSAnZGV0ZXJtaW5hdGUnLFxuICBJbmRldGVybWluYXRlID0gJ2luZGV0ZXJtaW5hdGUnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3RyYXRlZ3kge1xuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3R5bGUge1xuICBGdWxsU2NyZWVuID0gJ2Z1bGxzY3JlZW4nLFxuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBOb25lID0gJ25vbmUnLFxufVxuXG5pbXBvcnQgeyB0ZEZhZGVJbk91dEFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBURF9DSVJDTEVfRElBTUVURVI6IG51bWJlciA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9hZGluZycsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRkRmFkZUluT3V0QW5pbWF0aW9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcblxuICBwcml2YXRlIF9hbmltYXRpb25JbjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9hbmltYXRpb25PdXQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF9kZWZhdWx0TW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY2lyY2xlRGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcblxuICAvKipcbiAgICogRmxhZyBmb3IgYW5pbWF0aW9uXG4gICAqL1xuICBhbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29udGVudCBpbmplY3RlZCBpbnRvIGxvYWRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgY29udGVudDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICAvKipcbiAgICogU2V0cyBtb2RlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHRvIExvYWRpbmdNb2RlLkRldGVybWluYXRlIG9yIExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGVcbiAgICovXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgdGhpcy5fZGVmYXVsdE1vZGUgPSBtb2RlO1xuICB9XG4gIGdldCBtb2RlKCk6IExvYWRpbmdNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHZhbHVlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIGlmIG1vZGUgaXMgJ0xvYWRpbmdNb2RlLkRldGVybWluYXRlJ1xuICAgKi9cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc3R5bGU6IExvYWRpbmdTdHlsZSA9IExvYWRpbmdTdHlsZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBoZWlnaHQ6IG51bWJlclxuICAgKiBTZXRzIGhlaWdodCBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XS5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiB0eXBlOiBMb2FkaW5nVHlwZVxuICAgKiBTZXRzIHR5cGUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gcmVuZGVyZWQuXG4gICAqL1xuICB0eXBlOiBMb2FkaW5nVHlwZSA9IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuXG4gIC8qKlxuICAgKiBjb2xvcjogcHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJ1xuICAgKiBTZXRzIHRoZW1lIGNvbG9yIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHJlbmRlcmVkLlxuICAgKi9cbiAgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gV2hlbiBvdmVybGF5IGlzIHVzZWQgYW5kIHRoZSBob3N0IHdpZHRoIGhhcyBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAxcHhcbiAgICAvLyBzZXQgdGhlIGNpcmNsZSBkaWFtZXRlciB3aGVuIHBvc3NpYmxlIGluY2FzZSB0aGUgbG9hZGluZyBjb21wb25lbnQgd2FzIHJlbmRlcmVkIGluIGEgaGlkZGVuIHN0YXRlXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgJiYgdGhpcy5faG9zdEhlaWdodCgpID4gMSkge1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX3NldENpcmNsZURpYW1ldGVyKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEhlaWdodCgpOiBzdHJpbmcge1xuICAgIC8vIElnbm9yZSBoZWlnaHQgaWYgc3R5bGUgaXMgYG92ZXJsYXlgIG9yIGBmdWxsc2NyZWVuYC5cbiAgICAvLyBBZGQgaGVpZ2h0IGlmIGNoaWxkIGVsZW1lbnRzIGhhdmUgYSBoZWlnaHQgYW5kIHN0eWxlIGlzIGBub25lYCwgZWxzZSByZXR1cm4gZGVmYXVsdCBoZWlnaHQuXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgfHwgdGhpcy5pc0Z1bGxTY3JlZW4oKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ID8gYCR7dGhpcy5oZWlnaHR9cHhgIDogJzE1MHB4JztcbiAgICB9XG4gIH1cblxuICBnZXRDaXJjbGVEaWFtZXRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVEaWFtZXRlcjtcbiAgfVxuXG4gIGdldENpcmNsZVN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgLy8gd2UgY2FsY3VsYXRlIHRoZSBzdHJva2Ugd2lkdGggYnkgc2V0dGluZyBpdCBhcyAxMCUgb2YgaXRzIGRpYW1ldGVyXG4gICAgbGV0IHN0cm9rZVdpZHRoOiBudW1iZXIgPSB0aGlzLmdldENpcmNsZURpYW1ldGVyKCkgLyAxMDtcbiAgICByZXR1cm4gTWF0aC5hYnMoc3Ryb2tlV2lkdGgpO1xuICB9XG5cbiAgaXNDaXJjdWxhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgfVxuXG4gIGlzTGluZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExvYWRpbmdUeXBlLkxpbmVhcjtcbiAgfVxuXG4gIGlzRnVsbFNjcmVlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSA9PT0gTG9hZGluZ1N0eWxlLkZ1bGxTY3JlZW47XG4gIH1cblxuICBpc092ZXJsYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUgPT09IExvYWRpbmdTdHlsZS5PdmVybGF5O1xuICB9XG5cbiAgYW5pbWF0aW9uQ29tcGxldGUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIGl0cyBcImluXCIgb3IgXCJvdXRcIiBhbmltYXRpb24gdG8gZXhlY3V0ZSB0aGUgcHJvcGVyIGNhbGxiYWNrXG4gICAgaWYgKCFldmVudC5mcm9tU3RhdGUpIHtcbiAgICAgIHRoaXMuaW5BbmltYXRpb25Db21wbGV0ZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRBbmltYXRpb25Db21wbGV0ZWQoKTtcbiAgICB9XG4gIH1cblxuICBpbkFuaW1hdGlvbkNvbXBsZXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9hbmltYXRpb25Jbi5uZXh0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBvdXRBbmltYXRpb25Db21wbGV0ZWQoKTogdm9pZCB7XG4gICAvKiBsaXR0bGUgaGFjayB0byByZXNldCB0aGUgbG9hZGVyIHZhbHVlIGFuZCBhbmltYXRpb24gYmVmb3JlIHJlbW92aW5nIGl0IGZyb20gRE9NXG4gICAgKiBlbHNlLCB0aGUgbG9hZGVyIHdpbGwgYXBwZWFyIHdpdGggcHJldiB2YWx1ZSB3aGVuIGl0cyByZWdpc3RlcmVkIGFnYWluXG4gICAgKiBhbmQgd2lsbCBkbyBhbiBhbmltYXRpb24gZ29pbmcgcHJldiB2YWx1ZSB0byAwLlxuICAgICovXG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLl9hbmltYXRpb25PdXQubmV4dCh1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBpbiBhbmltYXRpb24gYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgY29tcGxldGl0aW9uIGV2ZW50LlxuICAgKi9cbiAgc3RhcnRJbkFuaW1hdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8qIG5lZWQgdG8gc3dpdGNoIGJhY2sgdG8gdGhlIHNlbGVjdGVkIG1vZGUsIHNvIHdlIGhhdmUgc2F2ZWQgaXQgaW4gYW5vdGhlciB2YXJpYWJsZVxuICAgICogIGFuZCB0aGVuIHJlY292ZXIgaXQuIChpc3N1ZSB3aXRoIHByb3RyYWN0b3IpXG4gICAgKi9cbiAgICB0aGlzLl9tb2RlID0gdGhpcy5fZGVmYXVsdE1vZGU7XG4gICAgLy8gU2V0IHZhbHVlcyBiZWZvcmUgdGhlIGFuaW1hdGlvbnMgc3RhcnRzXG4gICAgdGhpcy5fc2V0Q2lyY2xlRGlhbWV0ZXIoKTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uSW4uYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIG91dCBhbmltYXRpb24gYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgY29tcGxldGl0aW9uIGV2ZW50LlxuICAgKi9cbiAgc3RhcnRPdXRBbmltYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGZhbHNlO1xuICAgIC8qIG5lZWQgdG8gc3dpdGNoIGJhY2sgYW5kIGZvcnRoIGZyb20gZGV0ZXJtaW5hdGUvaW5kZXRlcm1pbmF0ZSBzbyB0aGUgc2V0SW50ZXJ2YWwoKVxuICAgICogaW5zaWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyIHN0b3BzIGFuZCBwcm90cmFjdG9yIGRvZXNudCB0aW1lb3V0IHdhaXRpbmcgdG8gc3luYy5cbiAgICAqL1xuICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25PdXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBwcm9wZXIgZGlhbWV0ZXIgZm9yIHRoZSBjaXJjbGUgYW5kIHNldCBpdFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Q2lyY2xlRGlhbWV0ZXIoKTogdm9pZCB7XG4gICAgLy8gd2Ugc2V0IGEgZGVmYXVsdCBkaWFtZXRlciBvZiAxMDAgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBtYXRlcmlhbFxuICAgIGxldCBkaWFtZXRlcjogbnVtYmVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuICAgIC8vIGlmIGhlaWdodCBpcyBwcm92aWRlZCwgdGhlbiB3ZSB0YWtlIHRoYXQgYXMgZGlhbWV0ZXJcbiAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgIGRpYW1ldGVyID0gdGhpcy5oZWlnaHQ7XG4gICAgICAvLyBlbHNlIGlmIGl0cyBub3QgcHJvdmlkZWQsIHRoZW4gd2UgdGFrZSB0aGUgaG9zdCBoZWlnaHRcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpYW1ldGVyID0gdGhpcy5faG9zdEhlaWdodCgpO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgZGlhbWV0ZXIgaXMgb3ZlciBURF9DSVJDTEVfRElBTUVURVIsIHdlIHNldCBURF9DSVJDTEVfRElBTUVURVJcbiAgICBpZiAoISFkaWFtZXRlciAmJiBkaWFtZXRlciA8PSBURF9DSVJDTEVfRElBTUVURVIpIHtcbiAgICAgIHRoaXMuX2NpcmNsZURpYW1ldGVyID0gTWF0aC5mbG9vcihkaWFtZXRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NpcmNsZURpYW1ldGVyID0gVERfQ0lSQ0xFX0RJQU1FVEVSO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBob3N0IGhlaWdodCBvZiB0aGUgbG9hZGluZyBjb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgX2hvc3RIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENoYW5nZURldGVjdG9yUmVmLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsLCBFbWJlZGRlZFZpZXdSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdG9yLCBDb21wb25lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdTdHlsZSB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElUZExvYWRpbmdDb25maWcgfSBmcm9tICcuL2xvYWRpbmcuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUludGVybmFsTG9hZGluZ09wdGlvbnMgZXh0ZW5kcyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzdHlsZT86IExvYWRpbmdTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9hZGluZ1JlZiB7XG4gIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgc3ViamVjdD86IFN1YmplY3Q8YW55PjtcbiAgdGltZXM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogTk9URTogQGludGVybmFsIHVzYWdlIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdGYWN0b3J5IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBtYXRlcmlhbCBgT3ZlcmxheWAgc2VydmljZXMgdG8gY3JlYXRlIGEgRE9NIGVsZW1lbnQgYW5kIGF0dGFjaCB0aGUgbG9hZGluZyBjb21wb25lbnRcbiAgICogaW50byBpdC4gTGV2ZXJhZ2luZyB0aGUgc3RhdGUgYW5kIGNvbmZpZ3VyYXRpb24gZnJvbSBpdC5cbiAgICpcbiAgICogU2F2ZXMgYSByZWZlcmVuY2UgaW4gY29udGV4dCB0byBiZSBjYWxsZWQgd2hlbiByZWdpc3RlcmluZy9yZXNvbHZpbmcgdGhlIGxvYWRpbmcgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVGdWxsU2NyZWVuQ29tcG9uZW50KG9wdGlvbnM6IElUZExvYWRpbmdDb25maWcpOiBJTG9hZGluZ1JlZiB7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5zdHlsZSA9IExvYWRpbmdTdHlsZS5GdWxsU2NyZWVuO1xuICAgIGxldCBsb2FkaW5nUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2luaXRpYWxpemVDb250ZXh0KCk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgICBsb2FkaW5nUmVmLm9ic2VydmFibGUucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgKS5zdWJzY3JpYmUoKHJlZ2lzdGVyZWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyZWQgPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBvdmVybGF5UmVmID0gdGhpcy5fY3JlYXRlT3ZlcmxheSgpO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoVGRMb2FkaW5nQ29tcG9uZW50KSk7XG4gICAgICAgIHRoaXMuX21hcE9wdGlvbnMob3B0aW9ucywgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydEluQW5pbWF0aW9uKCk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZCA8PSAwICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgc3ViczogU3Vic2NyaXB0aW9uID0gbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRPdXRBbmltYXRpb24oKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgICAgb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgICAgICBvdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvYWRpbmcgY29tcG9uZW50IGR5bmFtaWNhbGx5IGFuZCBhdHRhY2hlcyBpdCBpbnRvIHRoZSBnaXZlbiB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBMZXZlcmFnZXMgVGVtcGxhdGVQb3J0YWxzIGZyb20gbWF0ZXJpYWwgdG8gaW5qZWN0IHRoZSB0ZW1wbGF0ZSBpbnNpZGUgb2YgaXQgc28gaXQgZml0c1xuICAgKiBwZXJmZWN0bHkgd2hlbiBvdmVybGF5aW5nIGl0LlxuICAgKlxuICAgKiBTYXZlcyBhIHJlZmVyZW5jZSBpbiBjb250ZXh0IHRvIGJlIGNhbGxlZCB3aGVuIHJlZ2lzdGVyaW5nL3Jlc29sdmluZyB0aGUgbG9hZGluZyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZU92ZXJsYXlDb21wb25lbnQob3B0aW9uczogSVRkTG9hZGluZ0NvbmZpZywgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4pOiBJTG9hZGluZ1JlZiB7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5zdHlsZSA9IExvYWRpbmdTdHlsZS5PdmVybGF5O1xuICAgIGxldCBsb2FkaW5nUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2NyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgICBsZXQgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRlbnQgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmluc2VydChsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0VmlldywgMCk7XG4gICAgbG9hZGluZ1JlZi5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICkuc3Vic2NyaWJlKChyZWdpc3RlcmVkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChyZWdpc3RlcmVkID4gMCAmJiAhbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRJbkFuaW1hdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0T3V0QW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvYWRpbmcgY29tcG9uZW50IGR5bmFtaWNhbGx5IGFuZCBhdHRhY2hlcyBpdCBpbnRvIHRoZSBnaXZlbiB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBSZXBsYWNlcyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgbG9hZGluZyBjb21wb25lbnQgZGVwZW5kaW5nIGlmIGl0IHdhcyByZWdpc3RlcmVkIG9yIHJlc29sdmVkLlxuICAgKlxuICAgKiBTYXZlcyBhIHJlZmVyZW5jZSBpbiBjb250ZXh0IHRvIGJlIGNhbGxlZCB3aGVuIHJlZ2lzdGVyaW5nL3Jlc29sdmluZyB0aGUgbG9hZGluZyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlcGxhY2VDb21wb25lbnQob3B0aW9uczogSVRkTG9hZGluZ0NvbmZpZywgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRlbXBsYXRlUmVmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IG5hdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nID9cbiAgICAgIG5hdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCA6IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk5vbmU7XG4gICAgbGV0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5fY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gcGFzc2luZyBjb250ZXh0IHNvIHdoZW4gdGhlIHRlbXBsYXRlIGlzIGF0dGFjaGVkLCB3ZSBjYW4ga2VlcCB0aGUgcmVmZXJlbmNlIG9mIHRoZSB2YXJpYWJsZXNcbiAgICBsZXQgY29udGVudFJlZjogRW1iZWRkZWRWaWV3UmVmPE9iamVjdD4gPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZiwgY29udGV4dCk7XG4gICAgbG9hZGluZ1JlZi5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICkuc3Vic2NyaWJlKChyZWdpc3RlcmVkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChyZWdpc3RlcmVkID4gMCAmJiAhbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gZGV0YWNoIHRoZSBjb250ZW50IGFuZCBhdHRhY2ggdGhlIGxvYWRlciBpZiBsb2FkZXIgaXMgdGhlcmVcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB2aWV3Q29udGFpbmVyUmVmLmluZGV4T2YobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5kZXRhY2godmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGNvbnRlbnRSZWYpKTtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmluc2VydChsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0VmlldywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRJbkFuaW1hdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBzdWJzOiBTdWJzY3JpcHRpb24gPSBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydE91dEFuaW1hdGlvbigpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgc3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIC8vIGRldGFjaCBsb2FkZXIgYW5kIGF0dGFjaCB0aGUgY29udGVudCBpZiBjb250ZW50IGlzIHRoZXJlXG4gICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB2aWV3Q29udGFpbmVyUmVmLmluZGV4T2YoY29udGVudFJlZik7XG4gICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5kZXRhY2godmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3KSk7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmluc2VydChjb250ZW50UmVmLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTmVlZCB0byBjYWxsIFwibWFya0ZvckNoZWNrXCIgYW5kIFwiZGV0ZWN0Q2hhbmdlc1wiIG9uIGF0dGFjaGVkIHRlbXBsYXRlLCBzbyBpdHMgZGV0ZWN0ZWQgYnkgcGFyZW50IGNvbXBvbmVudCB3aGVuIGF0dGFjaGVkXG4gICAgICAgICAgICogd2l0aCBcIk9uUHVzaFwiIGNoYW5nZSBkZXRlY3Rpb25cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb250ZW50UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICBjb250ZW50UmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZnVsbHNjcmVlbiBvdmVybGF5IGZvciB0aGUgbG9hZGluZyB1c2FnZS5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XG4gICAgbGV0IHN0YXRlOiBPdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcbiAgICBzdGF0ZS5oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICAgIHN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpO1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5LmNyZWF0ZShzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdlbmVyaWMgY29tcG9uZW50IGR5bmFtaWNhbGx5IHdhaXRpbmcgdG8gYmUgYXR0YWNoZWQgdG8gYSB2aWV3Q29udGFpbmVyUmVmLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM6IElJbnRlcm5hbExvYWRpbmdPcHRpb25zKTogSUxvYWRpbmdSZWYge1xuICAgIGxldCBjb21wUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2luaXRpYWxpemVDb250ZXh0KCk7XG4gICAgY29tcFJlZi5jb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVGRMb2FkaW5nQ29tcG9uZW50KS5jcmVhdGUodGhpcy5faW5qZWN0b3IpO1xuICAgIHRoaXMuX21hcE9wdGlvbnMob3B0aW9ucywgY29tcFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgIHJldHVybiBjb21wUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29udGV4dCBmb3IgbG9hZGluZyBjb21wb25lbnQuXG4gICAqL1xuICBwcml2YXRlIF9pbml0aWFsaXplQ29udGV4dCgpOiBJTG9hZGluZ1JlZiB7XG4gICAgbGV0IHN1YmplY3Q6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICByZXR1cm4ge1xuICAgICAgb2JzZXJ2YWJsZTogc3ViamVjdC5hc09ic2VydmFibGUoKSxcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICBjb21wb25lbnRSZWY6IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVzOiAwLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFwcyBjb25maWd1cmF0aW9uIHRvIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICovXG4gIHByaXZhdGUgX21hcE9wdGlvbnMob3B0aW9uczogSUludGVybmFsTG9hZGluZ09wdGlvbnMsIGluc3RhbmNlOiBUZExvYWRpbmdDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgaWYgKG9wdGlvbnMudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UubW9kZSA9IG9wdGlvbnMubW9kZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTE9BRElOR19GQUNUT1JZX1BST1ZJREVSX0ZBQ1RPUlkoXG4gICAgcGFyZW50OiBUZExvYWRpbmdGYWN0b3J5LCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgb3ZlcmxheTogT3ZlcmxheSwgaW5qZWN0b3I6IEluamVjdG9yKTogVGRMb2FkaW5nRmFjdG9yeSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkTG9hZGluZ0ZhY3RvcnkoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBvdmVybGF5LCBpbmplY3Rvcik7XG59XG5cbmV4cG9ydCBjb25zdCBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZExvYWRpbmdGYWN0b3J5LFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGRMb2FkaW5nRmFjdG9yeV0sIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT3ZlcmxheSwgSW5qZWN0b3JdLFxuICB1c2VGYWN0b3J5OiBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkTG9hZGluZ0NvbnRleHQgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkTG9hZGluZ0NvbXBvbmVudCwgTG9hZGluZ01vZGUsIExvYWRpbmdTdHJhdGVneSwgTG9hZGluZ1R5cGUgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExvYWRpbmdGYWN0b3J5LCBJTG9hZGluZ1JlZiB9IGZyb20gJy4vbG9hZGluZy5mYWN0b3J5JztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ1R5cGU7XG4gIG1vZGU/OiBMb2FkaW5nTW9kZTtcbiAgY29sb3I/OiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJztcbn1cblxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbmZpZyBpbXBsZW1lbnRzIElUZExvYWRpbmdDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU/OiBMb2FkaW5nVHlwZTtcbiAgbW9kZT86IExvYWRpbmdNb2RlO1xuICBjb2xvcj86ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogSVRkTG9hZGluZ0NvbmZpZykge1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICB0aHJvdyBFcnJvcignTmFtZSBpcyByZXF1aXJlZCBmb3IgW1RkTG9hZGluZ10gY29uZmlndXJhdGlvbi4nKTtcbiAgICB9XG4gICAgdGhpcy5tb2RlID0gY29uZmlnLm1vZGUgPyBjb25maWcubW9kZSA6IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gICAgdGhpcy50eXBlID0gY29uZmlnLnR5cGUgPyBjb25maWcudHlwZSA6IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICAgIHRoaXMuY29sb3IgPSBjb25maWcuY29sb3IgPyBjb25maWcuY29sb3IgOiAncHJpbWFyeSc7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnIGV4dGVuZHMgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIHN0cmF0ZWd5PzogTG9hZGluZ1N0cmF0ZWd5O1xufVxuXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnIGV4dGVuZHMgVGRMb2FkaW5nQ29uZmlnIGltcGxlbWVudHMgSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogTG9hZGluZ1R5cGU7XG4gIG1vZGU6IExvYWRpbmdNb2RlO1xuICBzdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgdGhpcy5zdHJhdGVneSA9IGNvbmZpZy5zdHJhdGVneSA/IGNvbmZpZy5zdHJhdGVneSA6IExvYWRpbmdTdHJhdGVneS5SZXBsYWNlO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9jb250ZXh0OiB7W2tleTogc3RyaW5nXTogSUxvYWRpbmdSZWZ9ID0ge307XG4gIHByaXZhdGUgX3RpbWVvdXRzOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRpbmdGYWN0b3J5OiBUZExvYWRpbmdGYWN0b3J5KSB7XG4gICAgdGhpcy5jcmVhdGUoe1xuICAgICAgbmFtZTogJ3RkLWxvYWRpbmctbWFpbicsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUxvYWRpbmdEaXJlY3RpdmVDb25maWdcbiAgICogLSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICAqIC0gdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD5cbiAgICpcbiAgICogQ3JlYXRlcyBhbiByZXBsYWNlIGxvYWRpbmcgbWFzayBhbmQgYXR0YWNoZXMgaXQgdG8gdGhlIHZpZXdDb250YWluZXJSZWYuXG4gICAqIFJlcGxhY2VzIHRoZSB0ZW1wbGF0ZVJlZiB3aXRoIHRoZSBtYXNrIHdoZW4gYSByZXF1ZXN0IGlzIHJlZ2lzdGVyZWQgb24gaXQuXG4gICAqXG4gICAqIE5PVEU6IEBpbnRlcm5hbCB1c2FnZSBvbmx5LlxuICAgKi9cbiAgY3JlYXRlQ29tcG9uZW50KGNvbmZpZzogSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZywgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+LCBjb250ZXh0OiBUZExvYWRpbmdDb250ZXh0KTogSUxvYWRpbmdSZWYge1xuICAgIGxldCBkaXJlY3RpdmVDb25maWc6IFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyA9IG5ldyBUZExvYWRpbmdEaXJlY3RpdmVDb25maWcoY29uZmlnKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0pIHtcbiAgICAgIHRocm93IEVycm9yKGBOYW1lIGR1cGxpY2F0aW9uOiBbVGRMb2FkaW5nXSBkaXJlY3RpdmUgaGFzIGEgbmFtZSBjb25mbGljdCB3aXRoICR7ZGlyZWN0aXZlQ29uZmlnLm5hbWV9LmApO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aXZlQ29uZmlnLnN0cmF0ZWd5ID09PSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheSkge1xuICAgICAgdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVPdmVybGF5Q29tcG9uZW50KGRpcmVjdGl2ZUNvbmZpZywgdmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250ZXh0W2RpcmVjdGl2ZUNvbmZpZy5uYW1lXSA9IHRoaXMuX2xvYWRpbmdGYWN0b3J5LmNyZWF0ZVJlcGxhY2VDb21wb25lbnQoZGlyZWN0aXZlQ29uZmlnLCB2aWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZiwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0W2RpcmVjdGl2ZUNvbmZpZy5uYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJVGRMb2FkaW5nQ29uZmlnXG4gICAqXG4gICAqIENyZWF0ZXMgYSBmdWxsc2NyZWVuIGxvYWRpbmcgbWFzayBhbmQgYXR0YWNoZXMgaXQgdG8gdGhlIERPTSB3aXRoIHRoZSBnaXZlbiBjb25maWd1cmF0aW9uLlxuICAgKiBPbmx5IGRpc3BsYXllZCB3aGVuIHRoZSBtYXNrIGhhcyBhIHJlcXVlc3QgcmVnaXN0ZXJlZCBvbiBpdC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGUoY29uZmlnOiBJVGRMb2FkaW5nQ29uZmlnKTogdm9pZCB7XG4gICAgbGV0IGZ1bGxzY3JlZW5Db25maWc6IFRkTG9hZGluZ0NvbmZpZyA9IG5ldyBUZExvYWRpbmdDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLnJlbW92ZUNvbXBvbmVudChmdWxsc2NyZWVuQ29uZmlnLm5hbWUpO1xuICAgIHRoaXMuX2NvbnRleHRbZnVsbHNjcmVlbkNvbmZpZy5uYW1lXSA9IHRoaXMuX2xvYWRpbmdGYWN0b3J5LmNyZWF0ZUZ1bGxTY3JlZW5Db21wb25lbnQoZnVsbHNjcmVlbkNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKlxuICAgKiBSZW1vdmVzIGBsb2FkaW5nYCBjb21wb25lbnQgZnJvbSBzZXJ2aWNlIGNvbnRleHQuXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlQ29tcG9uZW50KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdLmNvbXBvbmVudFJlZikge1xuICAgICAgICB0aGlzLl9jb250ZXh0W25hbWVdLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbnRleHRbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogLSByZWdpc3RlcnM/OiBudW1iZXJcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFJlc29sdmVzIGEgcmVxdWVzdCBmb3IgdGhlIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICogQ2FuIG9wdGlvbmFsbHkgcGFzcyByZWdpc3RlcnMgYXJndW1lbnQgdG8gc2V0IGEgbnVtYmVyIG9mIHJlZ2lzdGVyIGNhbGxzLlxuICAgKlxuICAgKiBJZiBubyBwYXJhbWVtZXRlcnMgYXJlIHVzZWQsIHRoZW4gZGVmYXVsdCBtYWluIG1hc2sgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBlLmcuIGxvYWRpbmdTZXJ2aWNlLnJlZ2lzdGVyKClcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlcihuYW1lOiBzdHJpbmcgPSAndGQtbG9hZGluZy1tYWluJywgcmVnaXN0ZXJzOiBudW1iZXIgPSAxKTogYm9vbGVhbiB7XG4gICAgLy8gdHJ5IHJlZ2lzdGVyaW5nIGludG8gdGhlIHNlcnZpY2UgaWYgdGhlIGxvYWRpbmcgY29tcG9uZW50IGhhcyBiZWVuIGluc3RhbmNpYXRlZCBvciBpZiBpdCBleGlzdHMuXG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHJlZ2lzdGVycyA9IHJlZ2lzdGVycyA8IDEgPyAxIDogcmVnaXN0ZXJzO1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyArPSByZWdpc3RlcnM7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QubmV4dCh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBpdCBkb2VzbnQgZXhpc3QsIHNldCBhIHRpbWVvdXQgc28gaXRzIHJlZ2lzdGVyZWQgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXBwZW5zXG4gICAgICAvLyB0aGlzIGluIGNhc2UgXCJyZWdpc3RlclwiIG9jY3VyZWQgb24gdGhlIGBuZ09uSW5pdGAgbGlmZWhvb2sgY3ljbGUuXG4gICAgICBpZiAoIXRoaXMuX3RpbWVvdXRzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRzW25hbWVdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWdpc3RlcihuYW1lLCByZWdpc3RlcnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIGl0IHRpbWVvdXQgb2NjdXJlZCBhbmQgc3RpbGwgZG9lc250IGV4aXN0LCBpdCBtZWFucyB0aGUgdGllbW91dCB3YXNudCBuZWVkZWQgc28gd2UgY2xlYXIgaXQuXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dChuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogLSByZXNvbHZlcz86IG51bWJlclxuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogUmVzb2x2ZXMgYSByZXF1ZXN0IGZvciB0aGUgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKiBDYW4gb3B0aW9uYWxseSBwYXNzIHJlc29sdmVzIGFyZ3VtZW50IHRvIHNldCBhIG51bWJlciBvZiByZXNvbHZlIGNhbGxzLlxuICAgKlxuICAgKiBJZiBubyBwYXJhbWVtZXRlcnMgYXJlIHVzZWQsIHRoZW4gZGVmYXVsdCBtYWluIG1hc2sgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBlLmcuIGxvYWRpbmdTZXJ2aWNlLnJlc29sdmUoKVxuICAgKi9cbiAgcHVibGljIHJlc29sdmUobmFtZTogc3RyaW5nID0gJ3RkLWxvYWRpbmctbWFpbicsIHJlc29sdmVzOiBudW1iZXIgPSAxKTogYm9vbGVhbiB7XG4gICAgLy8gY2xlYXIgdGltZW91dCBpZiB0aGUgbG9hZGluZyBjb21wb25lbnQgaXMgXCJyZXNvbHZlZFwiIGJlZm9yZSBpdHMgXCJyZWdpc3RlcmVkXCJcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQobmFtZSk7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHJlc29sdmVzID0gcmVzb2x2ZXMgPCAxID8gMSA6IHJlc29sdmVzO1xuICAgICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgPiAwKSB7XG4gICAgICAgIGxldCB0aW1lczogbnVtYmVyID0gdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcztcbiAgICAgICAgdGltZXMgLT0gcmVzb2x2ZXM7XG4gICAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgPSB0aW1lcyA8IDAgPyAwIDogdGltZXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QubmV4dCh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogUmVzb2x2ZXMgYWxsIHJlcXVlc3QgZm9yIHRoZSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZW1ldGVycyBhcmUgdXNlZCwgdGhlbiBkZWZhdWx0IG1haW4gbWFzayB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIGUuZy4gbG9hZGluZ1NlcnZpY2UucmVzb2x2ZUFsbCgpXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZUFsbChuYW1lOiBzdHJpbmcgPSAndGQtbG9hZGluZy1tYWluJyk6IGJvb2xlYW4ge1xuICAgIC8vIGNsZWFyIHRpbWVvdXQgaWYgdGhlIGxvYWRpbmcgY29tcG9uZW50IGlzIFwicmVzb2x2ZWRcIiBiZWZvcmUgaXRzIFwicmVnaXN0ZXJlZFwiXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KG5hbWUpO1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzID0gMDtcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC5uZXh0KHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIC0gdmFsdWU6IG51bWJlclxuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogU2V0IHZhbHVlIG9uIGEgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKiBVc2FnZSBvbmx5IGF2YWlsYWJsZSBpZiBpdHMgbW9kZSBpcyAnZGV0ZXJtaW5hdGUnIGFuZCBpZiBsb2FkaW5nIGlzIHNob3dpbmcuXG4gICAqL1xuICBwdWJsaWMgc2V0VmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIGxldCBpbnN0YW5jZTogVGRMb2FkaW5nQ29tcG9uZW50ID0gdGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICBpZiAoaW5zdGFuY2UubW9kZSA9PT0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUgJiYgaW5zdGFuY2UuYW5pbWF0aW9uKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRpbWVvdXQgbGlua2VkIHRvIHRoZSBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudCB0byBiZSBjbGVhcmVkXG4gICAqL1xuICBwcml2YXRlIF9jbGVhclRpbWVvdXQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRzW25hbWVdKTtcbiAgICBkZWxldGUgdGhpcy5fdGltZW91dHNbbmFtZV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExPQURJTkdfUFJPVklERVJfRkFDVE9SWShcbiAgICBwYXJlbnQ6IFRkTG9hZGluZ1NlcnZpY2UsIGxvYWRpbmdGYWN0b3J5OiBUZExvYWRpbmdGYWN0b3J5KTogVGRMb2FkaW5nU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkTG9hZGluZ1NlcnZpY2UobG9hZGluZ0ZhY3RvcnkpO1xufVxuXG5leHBvcnQgY29uc3QgTE9BRElOR19QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkTG9hZGluZ1NlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZExvYWRpbmdTZXJ2aWNlXSwgVGRMb2FkaW5nRmFjdG9yeV0sXG4gIHVzZUZhY3Rvcnk6IExPQURJTkdfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9hZGluZ1R5cGUsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIFRkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUxvYWRpbmdSZWYgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nLmZhY3RvcnknO1xuXG4vKipcbiAqIENvbnRleHQgY2xhc3MgZm9yIHZhcmlhYmxlIHJlZmVyZW5jZVxuICovXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29udGV4dCB7XG4gIHB1YmxpYyAkaW1wbGljaXQ6IGFueSA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHRkTG9hZGluZzogYW55ID0gdW5kZWZpbmVkO1xufVxuXG4vLyBDb25zdGFudCBmb3IgZ2VuZXJhdGlvbiBvZiB0aGUgaWQgZm9yIHRoZSBuZXh0IGNvbXBvbmVudFxubGV0IFREX0xPQURJTkdfTkVYVF9JRDogbnVtYmVyID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTG9hZGluZ10nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfY29udGV4dDogVGRMb2FkaW5nQ29udGV4dCA9IG5ldyBUZExvYWRpbmdDb250ZXh0KCk7XG4gIHByaXZhdGUgX3R5cGU6IExvYWRpbmdUeXBlO1xuICBwcml2YXRlIF9tb2RlOiBMb2FkaW5nTW9kZTtcbiAgcHJpdmF0ZSBfc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9sb2FkaW5nUmVmOiBJTG9hZGluZ1JlZjtcblxuICAvKipcbiAgICogdGRMb2FkaW5nOiBzdHJpbmdcbiAgICogTmFtZSByZWZlcmVuY2Ugb2YgdGhlIGxvYWRpbmcgbWFzaywgdXNlZCB0byByZWdpc3Rlci9yZXNvbHZlIHJlcXVlc3RzIHRvIHRoZSBtYXNrLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmcnKVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdVbnRpbD86IGFueVxuICAgKiBJZiBpdHMgbnVsbCwgdW5kZWZpbmVkIG9yIGZhbHNlIGl0IHdpbGwgYmUgdXNlZCB0byByZWdpc3RlciByZXF1ZXN0cyB0byB0aGUgbWFzay5cbiAgICogRWxzZSBpZiBpdHMgYW55IHZhbHVlIHRoYXQgY2FuIGJlIHJlc29sdmVkIGFzIHRydWUsIGl0IHdpbGwgcmVzb2x2ZSB0aGUgbWFzay5cbiAgICogW25hbWVdIGlzIG9wdGlvbmFsIHdoZW4gdXNpbmcgW3VudGlsXSwgYnV0IGNhbiBzdGlsbCBiZSB1c2VkIHRvIHJlZ2lzdGVyL3Jlc29sdmUgaXQgbWFudWFsbHkuXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1VudGlsJylcbiAgc2V0IHVudGlsKHVudGlsOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSAndGQtbG9hZGluZy11bnRpbC0nICsgVERfTE9BRElOR19ORVhUX0lEKys7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRleHQuJGltcGxpY2l0ID0gdGhpcy5fY29udGV4dC50ZExvYWRpbmcgPSB1bnRpbDtcbiAgICBpZiAoIXVudGlsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZWdpc3Rlcih0aGlzLl9uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVzb2x2ZUFsbCh0aGlzLl9uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nVHlwZT86IExvYWRpbmdUeXBlIG9yIFsnbGluZWFyJyB8ICdjaXJjdWxhciddXG4gICAqIFNldHMgdGhlIHR5cGUgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdUeXBlLkNpcmN1bGFyIHwgJ2NpcmN1bGFyJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1R5cGUnKVxuICBzZXQgdHlwZSh0eXBlOiBMb2FkaW5nVHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBMb2FkaW5nVHlwZS5MaW5lYXI6XG4gICAgICAgIHRoaXMuX3R5cGUgPSBMb2FkaW5nVHlwZS5MaW5lYXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fdHlwZSA9IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nTW9kZT86IExvYWRpbmdNb2RlIG9yIFsnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnXVxuICAgKiBTZXRzIHRoZSBtb2RlIG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlIHwgJ2luZGV0ZXJtaW5hdGUnXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nTW9kZScpXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIExvYWRpbmdNb2RlLkRldGVybWluYXRlOlxuICAgICAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdTdHJhdGVneT86IExvYWRpbmdTdHJhdGVneSBvciBbJ3JlcGxhY2UnIHwgJ292ZXJsYXknXVxuICAgKiBTZXRzIHRoZSBzdHJhdGVneSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ01vZGUuUmVwbGFjZSB8ICdyZXBsYWNlJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1N0cmF0ZWd5JylcbiAgc2V0IHN0cmF0ZWd5KHN0YXRlZ3k6IExvYWRpbmdTdHJhdGVneSkge1xuICAgIHN3aXRjaCAoc3RhdGVneSkge1xuICAgICAgY2FzZSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheTpcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IExvYWRpbmdTdHJhdGVneS5SZXBsYWNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nQ29sb3I/OiBcInByaW1hcnlcIiB8IFwiYWNjZW50XCIgfCBcIndhcm5cIlxuICAgKiBTZXRzIHRoZSB0aGVtZSBjb2xvciBvZiB0aGUgbG9hZGluZyBjb21wb25lbnQuIERlZmF1bHRzIHRvIFwicHJpbWFyeVwiXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ0NvbG9yJykgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxUZExvYWRpbmdDb250ZXh0PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ1NlcnZpY2U6IFRkTG9hZGluZ1NlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjb21wb25lbnQgaW4gdGhlIERPTSwgc28gaXQgd2lsbCBiZSBhdmFpbGFibGUgd2hlbiBjYWxsaW5nIHJlc29sdmUvcmVnaXN0ZXIuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlckNvbXBvbmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb21wb25lbnQgd2hlbiBkaXJlY3RpdmUgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVtb3ZlQ29tcG9uZW50KHRoaXMuX25hbWUpO1xuICAgIHRoaXMuX2xvYWRpbmdSZWYgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBbVGRMb2FkaW5nQ29tcG9uZW50XSBhbmQgYXR0YWNoZXMgaXQgdG8gdGhpcyBkaXJlY3RpdmUncyBbVmlld0NvbnRhaW5lclJlZl0uXG4gICAqIFBhc3NlcyB0aGlzIGRpcmVjdGl2ZSdzIFtUZW1wbGF0ZVJlZl0gdG8gbW9kaWZ5IERPTSBkZXBlbmRpbmcgb24gbG9hZGluZyBgc3RyYXRlZ3lgLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJDb21wb25lbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgbmVlZGVkIHRvIHJlZ2lzdGVyIGxvYWRpbmcgZGlyZWN0aXZlJyk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGBUZExvYWRpbmdDb21wb25lbnRgIGhhcyBiZWVuIGNyZWF0ZWQgYmVmb3JlIHRyeWluZyB0byBhZGQgb25lIGFnYWluLlxuICAgIC8vIFRoZXJlIGlzIGEgd2VpcmQgZWRnZSBjYXNlIHdoZW4gdXNpbmcgYFtyb3V0ZXJMaW5rQWN0aXZlXWAgdGhhdCBjYWxscyB0aGUgYG5nT25Jbml0YCB0d2ljZSBpbiBhIHJvd1xuICAgIGlmICghdGhpcy5fbG9hZGluZ1JlZikge1xuICAgICAgdGhpcy5fbG9hZGluZ1JlZiA9IHRoaXMuX2xvYWRpbmdTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudCh7XG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICAgIHR5cGU6IHRoaXMuX3R5cGUsXG4gICAgICAgIG1vZGU6IHRoaXMuX21vZGUsXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICBzdHJhdGVneTogdGhpcy5fc3RyYXRlZ3ksXG4gICAgICB9LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmLCB0aGlzLl90ZW1wbGF0ZVJlZiwgdGhpcy5fY29udGV4dCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5cbmltcG9ydCB7IFRkTG9hZGluZ1NlcnZpY2UsIExPQURJTkdfUFJPVklERVIgfSBmcm9tICcuL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdGYWN0b3J5LCBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVIgfSBmcm9tICcuL3NlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeSc7XG5pbXBvcnQgeyBUZExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX0xPQURJTkc6IFR5cGU8YW55PltdID0gW1xuICBUZExvYWRpbmdDb21wb25lbnQsXG4gIFRkTG9hZGluZ0RpcmVjdGl2ZSxcbl07XG5cbmNvbnN0IFREX0xPQURJTkdfRU5UUllfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkTG9hZGluZ0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9MT0FESU5HLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfTE9BRElORyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTE9BRElOR19GQUNUT1JZX1BST1ZJREVSLFxuICAgIExPQURJTkdfUFJPVklERVIsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFREX0xPQURJTkdfRU5UUllfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRMb2FkaW5nTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbIlN1YmplY3QiLCJDb21wb25lbnQiLCJ0ZEZhZGVJbk91dEFuaW1hdGlvbiIsIkVsZW1lbnRSZWYiLCJDaGFuZ2VEZXRlY3RvclJlZiIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwiQ29tcG9uZW50UG9ydGFsIiwiVGVtcGxhdGVQb3J0YWwiLCJPdmVybGF5Q29uZmlnIiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIk92ZXJsYXkiLCJJbmplY3RvciIsIm92ZXJsYXkiLCJPcHRpb25hbCIsIlNraXBTZWxmIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiVGVtcGxhdGVSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUiLCJPdmVybGF5TW9kdWxlIiwiUG9ydGFsTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztR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