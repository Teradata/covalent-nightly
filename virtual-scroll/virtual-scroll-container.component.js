import * as tslib_1 from "tslib";
import { Component, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, QueryList, ViewChildren, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
var TD_VIRTUAL_OFFSET = 2;
var TdVirtualScrollContainerComponent = (function () {
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
        get: function () {
            return this._data;
        },
        /**
         * data: any[]
         * List of items to virtually iterate on.
         */
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
        var element = event.target;
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
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     */
    TdVirtualScrollContainerComponent.prototype.refresh = function () {
        this._calculateVirtualRows();
    };
    /**
     * Method to scroll to a specific row of the list.
     */
    TdVirtualScrollContainerComponent.prototype.scrollTo = function (row) {
        this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to scroll to the start of the list.
     */
    TdVirtualScrollContainerComponent.prototype.scrollToStart = function () {
        this.scrollTo(0);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to scroll to the end of the list.
     */
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
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    tslib_1.__decorate([
        Input('data'),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], TdVirtualScrollContainerComponent.prototype, "data", null);
    tslib_1.__decorate([
        ViewChildren('rowElement'),
        tslib_1.__metadata("design:type", QueryList)
    ], TdVirtualScrollContainerComponent.prototype, "_rows", void 0);
    tslib_1.__decorate([
        ContentChild(TdVirtualScrollRowDirective),
        tslib_1.__metadata("design:type", TdVirtualScrollRowDirective)
    ], TdVirtualScrollContainerComponent.prototype, "_rowTemplate", void 0);
    tslib_1.__decorate([
        Input('trackBy'),
        tslib_1.__metadata("design:type", Function)
    ], TdVirtualScrollContainerComponent.prototype, "trackBy", void 0);
    tslib_1.__decorate([
        HostListener('scroll', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdVirtualScrollContainerComponent.prototype, "handleScroll", null);
    TdVirtualScrollContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'td-virtual-scroll-container',
            styles: [":host { display: block; height: 100%; width: 100%; overflow: auto; position: relative; } /*# sourceMappingURL=virtual-scroll-container.component.css.map */ "],
            template: "<div [style.height.px]=\"totalHeight\"></div> <div [style.transform]=\"offsetTransform\" [style.position]=\"'absolute'\" [style.width.%]=\"100\"> <ng-template let-row let-index=\"index\" ngFor [ngForOf]=\"virtualData\" [ngForTrackBy]=\"trackBy\"> <div #rowElement [style.width.%]=\"100\"> <ng-template *ngIf=\"_rowTemplate\" [ngTemplateOutlet]=\"_rowTemplate.templateRef\" [ngTemplateOutletContext]=\"{row: row, index: (fromRow + index), first: (fromRow + index) === 0, last: (fromRow + index) === (data.length - 1), odd: ((fromRow + index + 1) % 2) === 1, even: ((fromRow + index + 1) % 2) === 0}\"> </ng-template> </div> </ng-template> </div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            DomSanitizer,
            Renderer2,
            ChangeDetectorRef])
    ], TdVirtualScrollContainerComponent);
    return TdVirtualScrollContainerComponent;
}());
export { TdVirtualScrollContainerComponent };
//# sourceMappingURL=virtual-scroll-container.component.js.map