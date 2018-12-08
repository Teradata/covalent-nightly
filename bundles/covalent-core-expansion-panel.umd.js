(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/portal'), require('@angular/cdk/coercion'), require('@covalent/core/common'), require('rxjs/operators'), require('rxjs'), require('@angular/common'), require('@angular/material/core'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/expansion-panel', ['exports', '@angular/core', '@angular/cdk/portal', '@angular/cdk/coercion', '@covalent/core/common', 'rxjs/operators', 'rxjs', '@angular/common', '@angular/material/core', '@angular/material/icon'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['expansion-panel'] = {}),global.ng.core,global.ng.cdk.portal,global.ng.cdk.coercion,global.covalent.core.common,global.rxjs.operators,global.rxjs,global.ng.common,global.ng.material.core,global.ng.material.icon));
}(this, (function (exports,core,portal,coercion,common,operators,rxjs,common$1,core$1,icon) { 'use strict';

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
    var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelHeaderDirective, _super);
        function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelHeaderDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-expansion-panel-header]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelHeaderDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdExpansionPanelHeaderDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelLabelDirective, _super);
        function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelLabelDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-expansion-panel-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelLabelDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdExpansionPanelLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelSublabelDirective, _super);
        function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelSublabelDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-expansion-panel-sublabel]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelSublabelDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdExpansionPanelSublabelDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelSummaryComponent = /** @class */ (function () {
        function TdExpansionPanelSummaryComponent() {
        }
        TdExpansionPanelSummaryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-expansion-summary',
                        template: '<ng-content></ng-content>'
                    }] }
        ];
        return TdExpansionPanelSummaryComponent;
    }());
    var TdExpansionPanelBase = /** @class */ (function () {
        function TdExpansionPanelBase() {
        }
        return TdExpansionPanelBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdExpansionPanelMixinBase = common.mixinDisableRipple(common.mixinDisabled(TdExpansionPanelBase));
    var TdExpansionPanelComponent = /** @class */ (function (_super) {
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
            _this.expanded = new core.EventEmitter();
            /**
             * collapsed?: function
             * Event emitted when [TdExpansionPanelComponent] is collapsed.
             */
            _this.collapsed = new core.EventEmitter();
            _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
            return _this;
        }
        Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
            get: /**
             * @return {?}
             */ function () {
                return this._expand;
            },
            /**
             * expand?: boolean
             * Toggles [TdExpansionPanelComponent] between expand/collapse.
             */
            set: /**
             * expand?: boolean
             * Toggles [TdExpansionPanelComponent] between expand/collapse.
             * @param {?} expand
             * @return {?}
             */ function (expand) {
                this._setExpand(coercion.coerceBooleanProperty(expand));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         */
        /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.clickEvent = /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         * @return {?}
         */
            function () {
                this._setExpand(!this._expand);
            };
        /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.toggle = /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setExpand(!this._expand);
            };
        /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.open = /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setExpand(true);
            };
        /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.close = /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setExpand(false);
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                if (v && this._expand) {
                    this._expand = false;
                    this._onCollapsed();
                }
            };
        /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         */
        /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * @param {?} newExpand
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._setExpand = /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * @param {?} newExpand
         * @return {?}
         */
            function (newExpand) {
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
        /**
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._onExpanded = /**
         * @return {?}
         */
            function () {
                this.expanded.emit(undefined);
            };
        /**
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._onCollapsed = /**
         * @return {?}
         */
            function () {
                this.collapsed.emit(undefined);
            };
        TdExpansionPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-expansion-panel',
                        template: "<div class=\"td-expansion-panel-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled? -1 : 0\"\n      (keydown.enter)=\"clickEvent()\"\n      (click)=\"clickEvent()\">\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\"\n        [class.mat-disabled]=\"disabled\"\n        *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\"\n      [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\"\n      [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                        inputs: ['disabled', 'disableRipple'],
                        animations: [
                            common.tdCollapseAnimation,
                            common.tdRotateAnimation,
                        ],
                        styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
                    }] }
        ];
        /** @nocollapse */
        TdExpansionPanelComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdExpansionPanelComponent.propDecorators = {
            expansionPanelHeader: [{ type: core.ContentChild, args: [TdExpansionPanelHeaderDirective,] }],
            expansionPanelLabel: [{ type: core.ContentChild, args: [TdExpansionPanelLabelDirective,] }],
            expansionPanelSublabel: [{ type: core.ContentChild, args: [TdExpansionPanelSublabelDirective,] }],
            label: [{ type: core.Input }],
            sublabel: [{ type: core.Input }],
            expand: [{ type: core.Input, args: ['expand',] }],
            expanded: [{ type: core.Output }],
            collapsed: [{ type: core.Output }]
        };
        return TdExpansionPanelComponent;
    }(_TdExpansionPanelMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdExpansionPanelGroupComponent = /** @class */ (function () {
        function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._multi = false;
            this._lastOpenedPanels = [];
            this._destroyed = new rxjs.Subject();
            this._stopWatchingPanels = new rxjs.Subject();
            this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
        }
        Object.defineProperty(TdExpansionPanelGroupComponent.prototype, "multi", {
            /**
             * multi?: boolean
             * Sets whether multiple panels can be opened at a given time.
             * Set to false for accordion mode.
             * Defaults to false.
             */
            set: /**
             * multi?: boolean
             * Sets whether multiple panels can be opened at a given time.
             * Set to false for accordion mode.
             * Defaults to false.
             * @param {?} multi
             * @return {?}
             */ function (multi) {
                this._multi = coercion.coerceBooleanProperty(multi);
                if (this._multi === false && this._lastOpenedPanels.length > 0) {
                    this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._destroyed.next(true);
                this._destroyed.unsubscribe();
                this._stopWatchingPanels.next(true);
                this._stopWatchingPanels.unsubscribe();
            };
        /**
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._multi) {
                    /** @type {?} */
                    var openedPanels = this.expansionPanels.filter(function (expansionPanel) { return expansionPanel.expand; });
                    /** @type {?} */
                    var numOpenedPanels = openedPanels.length;
                    if (numOpenedPanels > 1) {
                        this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
                    }
                }
                this._attachListeners(this.expansionPanels);
                this.expansionPanels.changes
                    .pipe(operators.takeUntil(this._destroyed))
                    .subscribe(function (expansionPanels) {
                    _this._stopWatchingPanels.next(true);
                    _this._stopWatchingPanels.unsubscribe();
                    _this._stopWatchingPanels = new rxjs.Subject();
                    _this._attachListeners(expansionPanels);
                });
            };
        /**
         * Opens all expansion panels, only if multi set set to true.
         */
        /**
         * Opens all expansion panels, only if multi set set to true.
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.openAll = /**
         * Opens all expansion panels, only if multi set set to true.
         * @return {?}
         */
            function () {
                if (this._multi) {
                    this.expansionPanels.forEach(function (expansionPanel) {
                        expansionPanel.open();
                    });
                }
            };
        /**
         * Closes all expansion panels
         */
        /**
         * Closes all expansion panels
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.closeAll = /**
         * Closes all expansion panels
         * @return {?}
         */
            function () {
                this.expansionPanels.forEach(function (expansionPanel) {
                    expansionPanel.close();
                });
            };
        /**
         * @param {?} expansionPanels
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype._attachListeners = /**
         * @param {?} expansionPanels
         * @return {?}
         */
            function (expansionPanels) {
                var _this = this;
                this._lastOpenedPanels = [];
                expansionPanels.forEach(function (expansionPanel) {
                    expansionPanel.expanded
                        .pipe(operators.takeUntil(_this._stopWatchingPanels))
                        .subscribe(function () {
                        /** @type {?} */
                        var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                        if (indexOfPanel !== -1) {
                            _this._lastOpenedPanels.splice(indexOfPanel, 1);
                        }
                        _this._lastOpenedPanels.push(expansionPanel);
                        if (!_this._multi) {
                            _this._closeAllExcept(expansionPanel);
                        }
                    });
                    expansionPanel.collapsed
                        .pipe(operators.takeUntil(_this._stopWatchingPanels))
                        .subscribe(function () {
                        /** @type {?} */
                        var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                        if (indexOfPanel !== -1) {
                            _this._lastOpenedPanels.splice(indexOfPanel, 1);
                        }
                    });
                });
            };
        /**
         * @param {?} expansionPanel
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype._closeAllExcept = /**
         * @param {?} expansionPanel
         * @return {?}
         */
            function (expansionPanel) {
                this.expansionPanels.forEach(function (panel) {
                    if (panel !== expansionPanel) {
                        panel.close();
                    }
                });
            };
        TdExpansionPanelGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-expansion-panel-group',
                        template: "<ng-content></ng-content>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdExpansionPanelGroupComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdExpansionPanelGroupComponent.propDecorators = {
            multi: [{ type: core.Input, args: ['multi',] }],
            expansionPanels: [{ type: core.ContentChildren, args: [TdExpansionPanelComponent,] }]
        };
        return TdExpansionPanelGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_EXPANSION_PANEL = [
        TdExpansionPanelGroupComponent,
        TdExpansionPanelComponent,
        TdExpansionPanelHeaderDirective,
        TdExpansionPanelLabelDirective,
        TdExpansionPanelSublabelDirective,
        TdExpansionPanelSummaryComponent,
    ];
    var CovalentExpansionPanelModule = /** @class */ (function () {
        function CovalentExpansionPanelModule() {
        }
        CovalentExpansionPanelModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common$1.CommonModule,
                            core$1.MatRippleModule,
                            icon.MatIconModule,
                            portal.PortalModule,
                        ],
                        declarations: [
                            TD_EXPANSION_PANEL,
                        ],
                        exports: [
                            TD_EXPANSION_PANEL,
                        ],
                    },] }
        ];
        return CovalentExpansionPanelModule;
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

    exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule;
    exports.TdExpansionPanelHeaderDirective = TdExpansionPanelHeaderDirective;
    exports.TdExpansionPanelLabelDirective = TdExpansionPanelLabelDirective;
    exports.TdExpansionPanelSublabelDirective = TdExpansionPanelSublabelDirective;
    exports.TdExpansionPanelSummaryComponent = TdExpansionPanelSummaryComponent;
    exports.TdExpansionPanelBase = TdExpansionPanelBase;
    exports._TdExpansionPanelMixinBase = _TdExpansionPanelMixinBase;
    exports.TdExpansionPanelComponent = TdExpansionPanelComponent;
    exports.TdExpansionPanelGroupComponent = TdExpansionPanelGroupComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1leHBhbnNpb24tcGFuZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLFxuICAgICAgICAgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQge1xuICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICBJQ2FuRGlzYWJsZSxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgSUNhbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgdGRSb3RhdGVBbmltYXRpb24sXG59IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1sYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1zdWJsYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZXhwYW5zaW9uLXN1bW1hcnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCB7fVxuXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRXhwYW5zaW9uUGFuZWxNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChUZEV4cGFuc2lvblBhbmVsQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tcGFuZWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdGRDb2xsYXBzZUFuaW1hdGlvbixcbiAgICB0ZFJvdGF0ZUFuaW1hdGlvbixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCBleHRlbmRzIF9UZEV4cGFuc2lvblBhbmVsTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICBwcml2YXRlIF9leHBhbmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkKFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmUpIGV4cGFuc2lvblBhbmVsSGVhZGVyOiBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSkgZXhwYW5zaW9uUGFuZWxMYWJlbDogVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSkgZXhwYW5zaW9uUGFuZWxTdWJsYWJlbDogVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBsYWJlbD86IHN0cmluZ1xuICAgKiBTZXRzIGxhYmVsIG9mIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvICdDbGljayB0byBleHBhbmQnXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKiBTZXRzIHN1YmxhYmVsIG9mIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoKSBzdWJsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBleHBhbmQ/OiBib29sZWFuXG4gICAqIFRvZ2dsZXMgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGJldHdlZW4gZXhwYW5kL2NvbGxhcHNlLlxuICAgKi9cbiAgQElucHV0KCdleHBhbmQnKVxuICBzZXQgZXhwYW5kKGV4cGFuZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3NldEV4cGFuZChjb2VyY2VCb29sZWFuUHJvcGVydHkoZXhwYW5kKSk7XG4gIH1cbiAgZ2V0IGV4cGFuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIGV4cGFuZGVkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBpcyBleHBhbmRlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBleHBhbmRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBjb2xsYXBzZWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGlzIGNvbGxhcHNlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjb2xsYXBzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1leHBhbnNpb24tcGFuZWwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaXMgY2xpY2tlZC5cbiAgICovXG4gIGNsaWNrRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0RXhwYW5kKCF0aGlzLl9leHBhbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBleHBhbmQgc3RhdGUgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdXG4gICAqIHJldHVucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgdG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQoIXRoaXMuX2V4cGFuZCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdXG4gICAqIHJldHVucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgb3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0RXhwYW5kKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBjbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0RXhwYW5kKGZhbHNlKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodiAmJiB0aGlzLl9leHBhbmQpIHtcbiAgICAgIHRoaXMuX2V4cGFuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb25Db2xsYXBzZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNoYW5nZSBleHBhbmQgc3RhdGUgaW50ZXJuYWxseSBhbmQgZW1pdCB0aGUgW29uRXhwYW5kZWRdIGV2ZW50IGlmICd0cnVlJyBvciBbb25Db2xsYXBzZWRdXG4gICAqIGV2ZW50IGlmICdmYWxzZScuIChCbG9ja2VkIGlmIFtkaXNhYmxlZF0gaXMgJ3RydWUnKVxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0RXhwYW5kKG5ld0V4cGFuZDogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9leHBhbmQgIT09IG5ld0V4cGFuZCkge1xuICAgICAgdGhpcy5fZXhwYW5kID0gbmV3RXhwYW5kO1xuICAgICAgaWYgKG5ld0V4cGFuZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1leHBhbmRlZCcpO1xuICAgICAgICB0aGlzLl9vbkV4cGFuZGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1leHBhbmRlZCcpO1xuICAgICAgICB0aGlzLl9vbkNvbGxhcHNlZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX29uRXhwYW5kZWQoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZC5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxhcHNlZC5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWV4cGFuc2lvbi1wYW5lbC1ncm91cCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEdyb3VwQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9sYXN0T3BlbmVkUGFuZWxzOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50W10gPSBbXTtcblxuICBwcml2YXRlIF9kZXN0cm95ZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIF9zdG9wV2F0Y2hpbmdQYW5lbHM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBtdWx0aT86IGJvb2xlYW5cbiAgICogU2V0cyB3aGV0aGVyIG11bHRpcGxlIHBhbmVscyBjYW4gYmUgb3BlbmVkIGF0IGEgZ2l2ZW4gdGltZS5cbiAgICogU2V0IHRvIGZhbHNlIGZvciBhY2NvcmRpb24gbW9kZS5cbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ211bHRpJylcbiAgc2V0IG11bHRpKG11bHRpOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGkpO1xuICAgIGlmICh0aGlzLl9tdWx0aSA9PT0gZmFsc2UgJiYgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9jbG9zZUFsbEV4Y2VwdChcbiAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVsc1t0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmxlbmd0aCAtIDFdLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpIGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFxuICAgIFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRcbiAgPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAndGQtZXhwYW5zaW9uLXBhbmVsLWdyb3VwJyxcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fZGVzdHJveWVkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbXVsdGkpIHtcbiAgICAgIGNvbnN0IG9wZW5lZFBhbmVsczogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudFtdID0gdGhpcy5leHBhbnNpb25QYW5lbHMuZmlsdGVyKFxuICAgICAgICAoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IGV4cGFuc2lvblBhbmVsLmV4cGFuZCxcbiAgICAgICk7XG4gICAgICBjb25zdCBudW1PcGVuZWRQYW5lbHM6IG51bWJlciA9IG9wZW5lZFBhbmVscy5sZW5ndGg7XG4gICAgICBpZiAobnVtT3BlbmVkUGFuZWxzID4gMSkge1xuICAgICAgICB0aGlzLl9jbG9zZUFsbEV4Y2VwdChvcGVuZWRQYW5lbHNbbnVtT3BlbmVkUGFuZWxzIC0gMV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaExpc3RlbmVycyh0aGlzLmV4cGFuc2lvblBhbmVscyk7XG5cbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5jaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoTGlzdGVuZXJzKGV4cGFuc2lvblBhbmVscyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbGwgZXhwYW5zaW9uIHBhbmVscywgb25seSBpZiBtdWx0aSBzZXQgc2V0IHRvIHRydWUuXG4gICAqL1xuICBwdWJsaWMgb3BlbkFsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbXVsdGkpIHtcbiAgICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goXG4gICAgICAgIChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgIGV4cGFuc2lvblBhbmVsLm9wZW4oKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbGwgZXhwYW5zaW9uIHBhbmVsc1xuICAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goXG4gICAgICAoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgICAgZXhwYW5zaW9uUGFuZWwuY2xvc2UoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaExpc3RlbmVycyhcbiAgICBleHBhbnNpb25QYW5lbHM6IFF1ZXJ5TGlzdDxUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50PixcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscyA9IFtdO1xuICAgIGV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgZXhwYW5zaW9uUGFuZWwuZXhwYW5kZWRcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscykpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4T2ZQYW5lbDogbnVtYmVyID0gdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5pbmRleE9mKFxuICAgICAgICAgICAgZXhwYW5zaW9uUGFuZWwsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaW5kZXhPZlBhbmVsICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5zcGxpY2UoaW5kZXhPZlBhbmVsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5wdXNoKGV4cGFuc2lvblBhbmVsKTtcblxuICAgICAgICAgIGlmICghdGhpcy5fbXVsdGkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlQWxsRXhjZXB0KGV4cGFuc2lvblBhbmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICBleHBhbnNpb25QYW5lbC5jb2xsYXBzZWRcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscykpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4T2ZQYW5lbDogbnVtYmVyID0gdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5pbmRleE9mKFxuICAgICAgICAgICAgZXhwYW5zaW9uUGFuZWwsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaW5kZXhPZlBhbmVsICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5zcGxpY2UoaW5kZXhPZlBhbmVsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VBbGxFeGNlcHQoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChwYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKHBhbmVsICE9PSBleHBhbnNpb25QYW5lbCkge1xuICAgICAgICBwYW5lbC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCwgVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSwgVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlLFxuICAgICAgICAgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlLCBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEV4cGFuc2lvblBhbmVsR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQnO1xuXG5jb25zdCBURF9FWFBBTlNJT05fUEFORUw6IFR5cGU8YW55PltdID0gW1xuICBUZEV4cGFuc2lvblBhbmVsR3JvdXBDb21wb25lbnQsXG4gIFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXG4gIFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmUsXG4gIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSxcbiAgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlLFxuICBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9FWFBBTlNJT05fUEFORUwsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9FWFBBTlNJT05fUEFORUwsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50RXhwYW5zaW9uUGFuZWxNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSIsIkNvbXBvbmVudCIsIm1peGluRGlzYWJsZVJpcHBsZSIsIm1peGluRGlzYWJsZWQiLCJFdmVudEVtaXR0ZXIiLCJjb2VyY2VCb29sZWFuUHJvcGVydHkiLCJ0ZENvbGxhcHNlQW5pbWF0aW9uIiwidGRSb3RhdGVBbmltYXRpb24iLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiQ29udGVudENoaWxkIiwiSW5wdXQiLCJPdXRwdXQiLCJTdWJqZWN0IiwidGFrZVVudGlsIiwiQ29udGVudENoaWxkcmVuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRSaXBwbGVNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiUG9ydGFsTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFB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