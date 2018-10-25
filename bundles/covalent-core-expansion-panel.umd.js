(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/portal'), require('@angular/cdk/coercion'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/core'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/expansion-panel', ['exports', '@angular/core', '@angular/cdk/portal', '@angular/cdk/coercion', '@covalent/core/common', '@angular/common', '@angular/material/core', '@angular/material/icon'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['expansion-panel'] = {}),global.ng.core,global.ng.cdk.portal,global.ng.cdk.coercion,global.covalent.core.common,global.ng.common,global.ng.material.core,global.ng.material.icon));
}(this, (function (exports,core,portal,coercion,common,common$1,core$1,icon) { 'use strict';

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
            this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1leHBhbnNpb24tcGFuZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLFxuICAgICAgICAgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQge1xuICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICBJQ2FuRGlzYWJsZSxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgSUNhbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgdGRSb3RhdGVBbmltYXRpb24sXG59IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1sYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1zdWJsYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZXhwYW5zaW9uLXN1bW1hcnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCB7fVxuXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRXhwYW5zaW9uUGFuZWxNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChUZEV4cGFuc2lvblBhbmVsQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tcGFuZWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdGRDb2xsYXBzZUFuaW1hdGlvbixcbiAgICB0ZFJvdGF0ZUFuaW1hdGlvbixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCBleHRlbmRzIF9UZEV4cGFuc2lvblBhbmVsTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICBwcml2YXRlIF9leHBhbmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkKFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmUpIGV4cGFuc2lvblBhbmVsSGVhZGVyOiBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSkgZXhwYW5zaW9uUGFuZWxMYWJlbDogVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSkgZXhwYW5zaW9uUGFuZWxTdWJsYWJlbDogVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBsYWJlbD86IHN0cmluZ1xuICAgKiBTZXRzIGxhYmVsIG9mIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvICdDbGljayB0byBleHBhbmQnXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKiBTZXRzIHN1YmxhYmVsIG9mIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoKSBzdWJsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBleHBhbmQ/OiBib29sZWFuXG4gICAqIFRvZ2dsZXMgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGJldHdlZW4gZXhwYW5kL2NvbGxhcHNlLlxuICAgKi9cbiAgQElucHV0KCdleHBhbmQnKVxuICBzZXQgZXhwYW5kKGV4cGFuZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3NldEV4cGFuZChjb2VyY2VCb29sZWFuUHJvcGVydHkoZXhwYW5kKSk7XG4gIH1cbiAgZ2V0IGV4cGFuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIGV4cGFuZGVkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBpcyBleHBhbmRlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBleHBhbmRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBjb2xsYXBzZWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGlzIGNvbGxhcHNlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjb2xsYXBzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1leHBhbnNpb24tcGFuZWwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaXMgY2xpY2tlZC5cbiAgICovXG4gIGNsaWNrRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0RXhwYW5kKCF0aGlzLl9leHBhbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBleHBhbmQgc3RhdGUgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdXG4gICAqIHJldHVucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgdG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQoIXRoaXMuX2V4cGFuZCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdXG4gICAqIHJldHVucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgb3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0RXhwYW5kKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBjbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0RXhwYW5kKGZhbHNlKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodiAmJiB0aGlzLl9leHBhbmQpIHtcbiAgICAgIHRoaXMuX2V4cGFuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb25Db2xsYXBzZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNoYW5nZSBleHBhbmQgc3RhdGUgaW50ZXJuYWxseSBhbmQgZW1pdCB0aGUgW29uRXhwYW5kZWRdIGV2ZW50IGlmICd0cnVlJyBvciBbb25Db2xsYXBzZWRdXG4gICAqIGV2ZW50IGlmICdmYWxzZScuIChCbG9ja2VkIGlmIFtkaXNhYmxlZF0gaXMgJ3RydWUnKVxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0RXhwYW5kKG5ld0V4cGFuZDogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9leHBhbmQgIT09IG5ld0V4cGFuZCkge1xuICAgICAgdGhpcy5fZXhwYW5kID0gbmV3RXhwYW5kO1xuICAgICAgaWYgKG5ld0V4cGFuZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1leHBhbmRlZCcpO1xuICAgICAgICB0aGlzLl9vbkV4cGFuZGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1leHBhbmRlZCcpO1xuICAgICAgICB0aGlzLl9vbkNvbGxhcHNlZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX29uRXhwYW5kZWQoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZC5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxhcHNlZC5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWV4cGFuc2lvbi1wYW5lbC1ncm91cCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxHcm91cENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuc2lvbi1wYW5lbC1ncm91cCcpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50LCBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlLCBUZEV4cGFuc2lvblBhbmVsTGFiZWxEaXJlY3RpdmUsXG4gICAgICAgICBUZEV4cGFuc2lvblBhbmVsU3VibGFiZWxEaXJlY3RpdmUsIFRkRXhwYW5zaW9uUGFuZWxTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRXhwYW5zaW9uUGFuZWxHcm91cENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX0VYUEFOU0lPTl9QQU5FTDogVHlwZTxhbnk+W10gPSBbXG4gIFRkRXhwYW5zaW9uUGFuZWxHcm91cENvbXBvbmVudCxcbiAgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCxcbiAgVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSxcbiAgVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlLFxuICBUZEV4cGFuc2lvblBhbmVsU3VibGFiZWxEaXJlY3RpdmUsXG4gIFRkRXhwYW5zaW9uUGFuZWxTdW1tYXJ5Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0VYUEFOU0lPTl9QQU5FTCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFREX0VYUEFOU0lPTl9QQU5FTCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRFeHBhbnNpb25QYW5lbE1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiVmlld0NvbnRhaW5lclJlZiIsIlRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIiwiQ29tcG9uZW50IiwibWl4aW5EaXNhYmxlUmlwcGxlIiwibWl4aW5EaXNhYmxlZCIsIkV2ZW50RW1pdHRlciIsImNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSIsInRkQ29sbGFwc2VBbmltYXRpb24iLCJ0ZFJvdGF0ZUFuaW1hdGlvbiIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJDb250ZW50Q2hpbGQiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0UmlwcGxlTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIlBvcnRh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