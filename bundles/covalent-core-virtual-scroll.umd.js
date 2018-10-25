(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/portal'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/virtual-scroll', ['exports', '@angular/core', '@angular/cdk/portal', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['virtual-scroll'] = {}),global.ng.core,global.ng.cdk.portal,global.ng.platformBrowser,global.ng.common));
}(this, (function (exports,core,portal,platformBrowser,common) { 'use strict';

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
    var TdVirtualScrollRowDirective = /** @class */ (function (_super) {
        __extends(TdVirtualScrollRowDirective, _super);
        function TdVirtualScrollRowDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdVirtualScrollRowDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[tdVirtualScrollRow]' },] }
        ];
        /** @nocollapse */
        TdVirtualScrollRowDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdVirtualScrollRowDirective;
    }(portal.TemplatePortalDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_VIRTUAL_OFFSET = 2;
    var TdVirtualScrollContainerComponent = /** @class */ (function () {
        function TdVirtualScrollContainerComponent(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._domSanitizer = _domSanitizer;
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._initialized = false;
            this._totalHeight = 0;
            this._hostHeight = 0;
            this._scrollVerticalOffset = 0;
            this._fromRow = 0;
            this._toRow = 0;
            /**
             * trackBy?: TrackByFunction
             * This accepts the same trackBy function [ngFor] does.
             * https://angular.io/api/core/TrackByFunction
             */
            this.trackBy = function (index, item) {
                return item;
            };
        }
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            /**
             * data: any[]
             * List of items to virtually iterate on.
             */
            set: /**
             * data: any[]
             * List of items to virtually iterate on.
             * @param {?} data
             * @return {?}
             */ function (data) {
                this._data = data;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "virtualData", {
            get: /**
             * @return {?}
             */ function () {
                return this._virtualData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "rowHeight", {
            get: /**
             * @return {?}
             */ function () {
                if (this._rows && this._rows.toArray()[0]) {
                    return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "totalHeight", {
            get: /**
             * @return {?}
             */ function () {
                return this._totalHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "fromRow", {
            get: /**
             * @return {?}
             */ function () {
                return this._fromRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "toRow", {
            get: /**
             * @return {?}
             */ function () {
                return this._toRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "offsetTransform", {
            get: /**
             * @return {?}
             */ function () {
                return this._offsetTransform;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._rowChangeSubs = this._rows.changes.subscribe(function () {
                    _this._calculateVirtualRows();
                });
                this._initialized = true;
                this._calculateVirtualRows();
            };
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
                if (this._hostHeight !== newHostHeight) {
                    this._hostHeight = newHostHeight;
                    if (this._initialized) {
                        this._calculateVirtualRows();
                    }
                }
            };
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._rowChangeSubs) {
                    this._rowChangeSubs.unsubscribe();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.handleScroll = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var element = (( /** @type {?} */(event.target)));
                if (element) {
                    /** @type {?} */
                    var verticalScroll = element.scrollTop;
                    if (this._scrollVerticalOffset !== verticalScroll) {
                        this._scrollVerticalOffset = verticalScroll;
                        if (this._initialized) {
                            this._calculateVirtualRows();
                        }
                    }
                }
            };
        /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         */
        /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.refresh = /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         * @return {?}
         */
            function () {
                this._calculateVirtualRows();
            };
        /**
         * Method to scroll to a specific row of the list.
         */
        /**
         * Method to scroll to a specific row of the list.
         * @param {?} row
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollTo = /**
         * Method to scroll to a specific row of the list.
         * @param {?} row
         * @return {?}
         */
            function (row) {
                this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Method to scroll to the start of the list.
         */
        /**
         * Method to scroll to the start of the list.
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollToStart = /**
         * Method to scroll to the start of the list.
         * @return {?}
         */
            function () {
                this.scrollTo(0);
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Method to scroll to the end of the list.
         */
        /**
         * Method to scroll to the end of the list.
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollToEnd = /**
         * Method to scroll to the end of the list.
         * @return {?}
         */
            function () {
                this.scrollTo(this.totalHeight / this.rowHeight);
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype._calculateVirtualRows = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._data) {
                    this._totalHeight = this._data.length * this.rowHeight;
                    /** @type {?} */
                    var fromRow = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET;
                    this._fromRow = fromRow > 0 ? fromRow : 0;
                    /** @type {?} */
                    var range = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET * 2);
                    /** @type {?} */
                    var toRow = range + this.fromRow;
                    if (isFinite(toRow) && toRow > this._data.length) {
                        toRow = this._data.length;
                    }
                    else if (!isFinite(toRow)) {
                        toRow = TD_VIRTUAL_OFFSET;
                    }
                    this._toRow = toRow;
                }
                else {
                    this._totalHeight = 0;
                    this._fromRow = 0;
                    this._toRow = 0;
                }
                /** @type {?} */
                var offset = 0;
                if (this._scrollVerticalOffset > (TD_VIRTUAL_OFFSET * this.rowHeight)) {
                    offset = this.fromRow * this.rowHeight;
                }
                this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
                if (this._data) {
                    this._virtualData = this.data.slice(this.fromRow, this.toRow);
                }
                // mark for check at the end of the queue so we are sure
                // that the changes will be marked
                Promise.resolve().then(function () {
                    _this._changeDetectorRef.markForCheck();
                });
            };
        TdVirtualScrollContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-virtual-scroll-container',
                        template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\"\n      [style.position]=\"'absolute'\"\n      [style.width.%]=\"100\">\n  <ng-template let-row\n                let-index=\"index\"\n                ngFor\n                [ngForOf]=\"virtualData\"\n                [ngForTrackBy]=\"trackBy\">\n    <div #rowElement\n         [style.width.%]=\"100\">\n      <ng-template *ngIf=\"_rowTemplate\"\n                  [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n                  [ngTemplateOutletContext]=\"{row: row,\n                                      index: (fromRow + index),\n                                      first: (fromRow + index) === 0,\n                                      last: (fromRow + index) === (data.length - 1),\n                                      odd: ((fromRow + index + 1) % 2) === 1,\n                                      even: ((fromRow + index + 1) % 2) === 0}\">\n      </ng-template>\n    </div>\n  </ng-template>\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;height:100%;width:100%;overflow:auto;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        TdVirtualScrollContainerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: platformBrowser.DomSanitizer },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdVirtualScrollContainerComponent.propDecorators = {
            data: [{ type: core.Input, args: ['data',] }],
            _rows: [{ type: core.ViewChildren, args: ['rowElement',] }],
            _rowTemplate: [{ type: core.ContentChild, args: [TdVirtualScrollRowDirective,] }],
            trackBy: [{ type: core.Input, args: ['trackBy',] }],
            handleScroll: [{ type: core.HostListener, args: ['scroll', ['$event'],] }]
        };
        return TdVirtualScrollContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_VIRTUAL_SCROLL = [
        TdVirtualScrollRowDirective,
        TdVirtualScrollContainerComponent,
    ];
    var CovalentVirtualScrollModule = /** @class */ (function () {
        function CovalentVirtualScrollModule() {
        }
        CovalentVirtualScrollModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TD_VIRTUAL_SCROLL,
                        ],
                        exports: [
                            TD_VIRTUAL_SCROLL,
                        ],
                    },] }
        ];
        return CovalentVirtualScrollModule;
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

    exports.CovalentVirtualScrollModule = CovalentVirtualScrollModule;
    exports.TdVirtualScrollContainerComponent = TdVirtualScrollContainerComponent;
    exports.TdVirtualScrollRowDirective = TdVirtualScrollRowDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS12aXJ0dWFsLXNjcm9sbC51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AY292YWxlbnQvY29yZS92aXJ0dWFsLXNjcm9sbC92aXJ0dWFsLXNjcm9sbC1yb3cuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS92aXJ0dWFsLXNjcm9sbC92aXJ0dWFsLXNjcm9sbC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS92aXJ0dWFsLXNjcm9sbC92aXJ0dWFsLXNjcm9sbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1t0ZFZpcnR1YWxTY3JvbGxSb3ddJ30pXG5leHBvcnQgY2xhc3MgVGRWaXJ0dWFsU2Nyb2xsUm93RGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG4gIFxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLFxuICAgICAgICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLFxuICAgICAgICAgUmVuZGVyZXIyLCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3ksIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwtcm93LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX1ZJUlRVQUxfT0ZGU0VUOiBudW1iZXIgPSAyO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC12aXJ0dWFsLXNjcm9sbC1jb250YWluZXInLFxuICBzdHlsZVVybHM6IFsnLi92aXJ0dWFsLXNjcm9sbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi92aXJ0dWFsLXNjcm9sbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRWaXJ0dWFsU2Nyb2xsQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9yb3dDaGFuZ2VTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfdG90YWxIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2hvc3RIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3Njcm9sbFZlcnRpY2FsT2Zmc2V0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9vZmZzZXRUcmFuc2Zvcm06IFNhZmVTdHlsZTtcblxuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIF9kYXRhOiBhbnlbXTtcbiAgcHJpdmF0ZSBfdmlydHVhbERhdGE6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBkYXRhOiBhbnlbXVxuICAgKiBMaXN0IG9mIGl0ZW1zIHRvIHZpcnR1YWxseSBpdGVyYXRlIG9uLlxuICAgKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IGRhdGEoZGF0YTogYW55W10pIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB2aXJ0dWFsRGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxEYXRhO1xuICB9XG5cbiAgQFZpZXdDaGlsZHJlbigncm93RWxlbWVudCcpIF9yb3dzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQENvbnRlbnRDaGlsZChUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmUpIF9yb3dUZW1wbGF0ZTogVGRWaXJ0dWFsU2Nyb2xsUm93RGlyZWN0aXZlO1xuXG4gIGdldCByb3dIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fcm93cyAmJiB0aGlzLl9yb3dzLnRvQXJyYXkoKVswXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvd3MudG9BcnJheSgpWzBdLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCB0b3RhbEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEhlaWdodDtcbiAgfVxuXG4gIGdldCBmcm9tUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Sb3c7XG4gIH1cblxuICBnZXQgdG9Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Sb3c7XG4gIH1cblxuICBnZXQgb2Zmc2V0VHJhbnNmb3JtKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRyYW5zZm9ybTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jvd0NoYW5nZVN1YnMgPSB0aGlzLl9yb3dzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgbGV0IG5ld0hvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgaWYgKHRoaXMuX2hvc3RIZWlnaHQgIT09IG5ld0hvc3RIZWlnaHQpIHtcbiAgICAgIHRoaXMuX2hvc3RIZWlnaHQgPSBuZXdIb3N0SGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jvd0NoYW5nZVN1YnMpIHtcbiAgICAgIHRoaXMuX3Jvd0NoYW5nZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tCeT86IFRyYWNrQnlGdW5jdGlvblxuICAgKiBUaGlzIGFjY2VwdHMgdGhlIHNhbWUgdHJhY2tCeSBmdW5jdGlvbiBbbmdGb3JdIGRvZXMuXG4gICAqIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9UcmFja0J5RnVuY3Rpb25cbiAgICovXG4gIEBJbnB1dCgndHJhY2tCeScpIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+ID0gIChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGxldCB2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgIT09IHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlZnJlc2ggYW5kIHJlY2FsY3VsYXRlIHRoZSB2aXJ0dWFsIHJvd3NcbiAgICogZS5nLiBhZnRlciBjaGFuZ2luZyB0aGUgW2RhdGFdIGNvbnRlbnRcbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcm93IG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgc2Nyb2xsVG8ocm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gcm93ICogdGhpcy5yb3dIZWlnaHQ7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNjcm9sbCB0byB0aGUgc3RhcnQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBzY3JvbGxUb1N0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG8oMCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNjcm9sbCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgc2Nyb2xsVG9FbmQoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxUbyh0aGlzLnRvdGFsSGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlVmlydHVhbFJvd3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gdGhpcy5fZGF0YS5sZW5ndGggKiB0aGlzLnJvd0hlaWdodDtcbiAgICAgIGxldCBmcm9tUm93OiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCAvIHRoaXMucm93SGVpZ2h0KSkgLSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSBmcm9tUm93ID4gMCA/IGZyb21Sb3cgOiAwO1xuICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aGlzLl9ob3N0SGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpKSArIChURF9WSVJUVUFMX09GRlNFVCAqIDIpO1xuICAgICAgbGV0IHRvUm93OiBudW1iZXIgPSByYW5nZSArIHRoaXMuZnJvbVJvdztcbiAgICAgIGlmIChpc0Zpbml0ZSh0b1JvdykgJiYgdG9Sb3cgPiB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICB0b1JvdyA9IHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmICghaXNGaW5pdGUodG9Sb3cpKSB7XG4gICAgICAgIHRvUm93ID0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB9XG4gICAgICB0aGlzLl90b1JvdyA9IHRvUm93O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gMDtcbiAgICAgIHRoaXMuX3RvUm93ID0gMDtcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIGlmICh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCA+IChURF9WSVJUVUFMX09GRlNFVCAqIHRoaXMucm93SGVpZ2h0KSkge1xuICAgICAgb2Zmc2V0ID0gdGhpcy5mcm9tUm93ICogdGhpcy5yb3dIZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5fb2Zmc2V0VHJhbnNmb3JtID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndHJhbnNsYXRlWSgnICsgKG9mZnNldCAtIHRoaXMudG90YWxIZWlnaHQpICsgJ3B4KScpO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsRGF0YSA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLmZyb21Sb3csIHRoaXMudG9Sb3cpO1xuICAgIH1cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRWaXJ0dWFsU2Nyb2xsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgVERfVklSVFVBTF9TQ1JPTEw6IFR5cGU8YW55PltdID0gW1xuICBUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmUsXG4gIFRkVmlydHVhbFNjcm9sbENvbnRhaW5lckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX1ZJUlRVQUxfU0NST0xMLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfVklSVFVBTF9TQ1JPTEwsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50VmlydHVhbFNjcm9sbE1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiVmlld0NvbnRhaW5lclJlZiIsIlRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiRG9tU2FuaXRpemVyIiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIlZpZXdDaGlsZHJlbiIsIkNvbnRlbnRDaGlsZCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxH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