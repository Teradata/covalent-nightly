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
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var TdVirtualScrollRowDirective = /** @class */ (function (_super) {
    __extends(TdVirtualScrollRowDirective, _super);
    function TdVirtualScrollRowDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdVirtualScrollRowDirective;
}(portal.TemplatePortalDirective));
TdVirtualScrollRowDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[tdVirtualScrollRow]' },] },
];
TdVirtualScrollRowDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
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
        this.trackBy = function (index, item) {
            return item;
        };
    }
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
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
        get: function () {
            return this._virtualData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "rowHeight", {
        get: function () {
            if (this._rows && this._rows.toArray()[0]) {
                return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "totalHeight", {
        get: function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "fromRow", {
        get: function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "toRow", {
        get: function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "offsetTransform", {
        get: function () {
            return this._offsetTransform;
        },
        enumerable: true,
        configurable: true
    });
    TdVirtualScrollContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._rowChangeSubs = this._rows.changes.subscribe(function () {
            _this._calculateVirtualRows();
        });
        this._initialized = true;
        this._calculateVirtualRows();
    };
    TdVirtualScrollContainerComponent.prototype.ngAfterViewChecked = function () {
        var newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
        if (this._hostHeight !== newHostHeight) {
            this._hostHeight = newHostHeight;
            if (this._initialized) {
                this._calculateVirtualRows();
            }
        }
    };
    TdVirtualScrollContainerComponent.prototype.ngOnDestroy = function () {
        if (this._rowChangeSubs) {
            this._rowChangeSubs.unsubscribe();
        }
    };
    TdVirtualScrollContainerComponent.prototype.handleScroll = function (event) {
        var element = ((event.target));
        if (element) {
            var verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
        }
    };
    TdVirtualScrollContainerComponent.prototype.refresh = function () {
        this._calculateVirtualRows();
    };
    TdVirtualScrollContainerComponent.prototype.scrollTo = function (row) {
        this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
        this._changeDetectorRef.markForCheck();
    };
    TdVirtualScrollContainerComponent.prototype.scrollToStart = function () {
        this.scrollTo(0);
        this._changeDetectorRef.markForCheck();
    };
    TdVirtualScrollContainerComponent.prototype.scrollToEnd = function () {
        this.scrollTo(this.totalHeight / this.rowHeight);
        this._changeDetectorRef.markForCheck();
    };
    TdVirtualScrollContainerComponent.prototype._calculateVirtualRows = function () {
        var _this = this;
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            var fromRow = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            var range = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET * 2);
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
        var offset = 0;
        if (this._scrollVerticalOffset > (TD_VIRTUAL_OFFSET * this.rowHeight)) {
            offset = this.fromRow * this.rowHeight;
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        Promise.resolve().then(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    return TdVirtualScrollContainerComponent;
}());
TdVirtualScrollContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-virtual-scroll-container',
                styles: [":host{display:block;height:100%;width:100%;overflow:auto;position:relative}"],
                template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\"\n      [style.position]=\"'absolute'\"\n      [style.width.%]=\"100\">\n  <ng-template let-row\n                let-index=\"index\"\n                ngFor\n                [ngForOf]=\"virtualData\"\n                [ngForTrackBy]=\"trackBy\">\n    <div #rowElement\n         [style.width.%]=\"100\">\n      <ng-template *ngIf=\"_rowTemplate\"\n                  [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n                  [ngTemplateOutletContext]=\"{row: row,\n                                      index: (fromRow + index),\n                                      first: (fromRow + index) === 0,\n                                      last: (fromRow + index) === (data.length - 1),\n                                      odd: ((fromRow + index + 1) % 2) === 1,\n                                      even: ((fromRow + index + 1) % 2) === 0}\">\n      </ng-template>\n    </div>\n  </ng-template>\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdVirtualScrollContainerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: platformBrowser.DomSanitizer, },
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
]; };
TdVirtualScrollContainerComponent.propDecorators = {
    "data": [{ type: core.Input, args: ['data',] },],
    "_rows": [{ type: core.ViewChildren, args: ['rowElement',] },],
    "_rowTemplate": [{ type: core.ContentChild, args: [TdVirtualScrollRowDirective,] },],
    "trackBy": [{ type: core.Input, args: ['trackBy',] },],
    "handleScroll": [{ type: core.HostListener, args: ['scroll', ['$event'],] },],
};
var TD_VIRTUAL_SCROLL = [
    TdVirtualScrollRowDirective,
    TdVirtualScrollContainerComponent,
];
var CovalentVirtualScrollModule = /** @class */ (function () {
    function CovalentVirtualScrollModule() {
    }
    return CovalentVirtualScrollModule;
}());
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
            },] },
];
CovalentVirtualScrollModule.ctorParameters = function () { return []; };

exports.CovalentVirtualScrollModule = CovalentVirtualScrollModule;
exports.TdVirtualScrollContainerComponent = TdVirtualScrollContainerComponent;
exports.TdVirtualScrollRowDirective = TdVirtualScrollRowDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-virtual-scroll.umd.js.map
