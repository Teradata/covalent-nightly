(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/divider')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/sidesheet', ['exports', '@angular/core', '@angular/common', '@angular/material/divider'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.sidesheet = {}), global.ng.core, global.ng.common, global.ng.material.divider));
}(this, (function (exports, core, common, divider) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdSidesheetContentDirective = /** @class */ (function () {
        function TdSidesheetContentDirective() {
        }
        TdSidesheetContentDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'td-sidesheet-content',
                    },] }
        ];
        return TdSidesheetContentDirective;
    }());
    var TdSidesheetTitleDirective = /** @class */ (function () {
        function TdSidesheetTitleDirective() {
        }
        TdSidesheetTitleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'td-sidesheet-title',
                    },] }
        ];
        return TdSidesheetTitleDirective;
    }());
    var TdSidesheetActionsDirective = /** @class */ (function () {
        function TdSidesheetActionsDirective() {
            this.align = 'start';
        }
        TdSidesheetActionsDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'td-sidesheet-actions',
                        /* tslint:disable-next-line */
                        host: {
                            '[class.align-end]': 'align === "end"',
                            '[class.align-start]': 'align === "start"',
                        },
                    },] }
        ];
        TdSidesheetActionsDirective.propDecorators = {
            align: [{ type: core.Input }]
        };
        return TdSidesheetActionsDirective;
    }());
    if (false) {
        /** @type {?} */
        TdSidesheetActionsDirective.prototype.align;
    }
    var TdSidesheetHeaderComponent = /** @class */ (function () {
        function TdSidesheetHeaderComponent() {
        }
        TdSidesheetHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-sidesheet-header',
                        template: "<ng-content select=\"td-sidesheet-title\"></ng-content>\n<ng-content select=\"[mat-icon-button][td-sidesheet-header-action]\"></ng-content>\n"
                    }] }
        ];
        return TdSidesheetHeaderComponent;
    }());
    var TdSidesheetComponent = /** @class */ (function () {
        function TdSidesheetComponent() {
        }
        TdSidesheetComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-sidesheet',
                        template: "<ng-content select=\"td-sidesheet-header\"></ng-content>\n<ng-template [ngIf]=\"headerExists\">\n  <mat-divider></mat-divider>\n</ng-template>\n<div class=\"td-sidesheet-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf]=\"actionsExist\">\n  <mat-divider></mat-divider>\n</ng-template>\n<ng-content select=\"td-sidesheet-actions\"></ng-content>\n",
                        // tslint:disable-next-line:use-component-view-encapsulation
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["td-sidesheet,td-sidesheet td-sidesheet-header{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}td-sidesheet{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0;width:100%;min-height:100%;height:100%}td-sidesheet td-sidesheet-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;padding:20px 16px;font-size:18px}td-sidesheet .mat-divider-horizontal{position:static!important}td-sidesheet td-sidesheet-title{-webkit-box-flex:1;-ms-flex:1;flex:1}td-sidesheet td-sidesheet-header .mat-button-focus-overlay{background-color:transparent!important}td-sidesheet td-sidesheet-header .mat-icon-button{width:24px;height:24px;line-height:21px}td-sidesheet td-sidesheet-actions{padding:8px;display:block}td-sidesheet .td-sidesheet-content-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto}td-sidesheet td-sidesheet-content{display:block;padding:16px}td-sidesheet-content>:first-child,td-sidesheet>:first-child{margin-top:0}td-sidesheet-content>:last-child,td-sidesheet>:last-child{margin-bottom:0}"]
                    }] }
        ];
        TdSidesheetComponent.propDecorators = {
            headerExists: [{ type: core.ContentChild, args: [TdSidesheetHeaderComponent,] }],
            actionsExist: [{ type: core.ContentChild, args: [TdSidesheetActionsDirective,] }]
        };
        return TdSidesheetComponent;
    }());
    if (false) {
        /** @type {?} */
        TdSidesheetComponent.prototype.headerExists;
        /** @type {?} */
        TdSidesheetComponent.prototype.actionsExist;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_SIDESHEET = [
        TdSidesheetComponent,
        TdSidesheetHeaderComponent,
        TdSidesheetContentDirective,
        TdSidesheetTitleDirective,
        TdSidesheetActionsDirective,
    ];
    var CovalentSidesheetModule = /** @class */ (function () {
        function CovalentSidesheetModule() {
        }
        CovalentSidesheetModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, divider.MatDividerModule],
                        declarations: [TD_SIDESHEET],
                        exports: [TD_SIDESHEET],
                    },] }
        ];
        return CovalentSidesheetModule;
    }());

    exports.CovalentSidesheetModule = CovalentSidesheetModule;
    exports.TdSidesheetActionsDirective = TdSidesheetActionsDirective;
    exports.TdSidesheetComponent = TdSidesheetComponent;
    exports.TdSidesheetContentDirective = TdSidesheetContentDirective;
    exports.TdSidesheetHeaderComponent = TdSidesheetHeaderComponent;
    exports.TdSidesheetTitleDirective = TdSidesheetTitleDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-sidesheet.umd.js.map
