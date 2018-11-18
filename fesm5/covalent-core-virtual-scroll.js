import { __extends } from 'tslib';
import { Directive, TemplateRef, ViewContainerRef, Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewChildren, ElementRef, HostListener, Renderer2, NgModule } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
        { type: Directive, args: [{ selector: '[tdVirtualScrollRow]' },] }
    ];
    /** @nocollapse */
    TdVirtualScrollRowDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdVirtualScrollRowDirective;
}(TemplatePortalDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_VIRTUAL_OFFSET = 2;
/** @type {?} */
var SCROLL_DEBOUNCE = 200;
var TdVirtualScrollContainerComponent = /** @class */ (function () {
    function TdVirtualScrollContainerComponent(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._subs = [];
        this._bottom = new Subject();
        this._initialized = false;
        this._totalHeight = 0;
        this._hostHeight = 0;
        this._scrollVerticalOffset = 0;
        this._fromRow = 0;
        this._toRow = 0;
        /**
         * bottom: function
         * Method to be executed when user scrolled to the last item of the list.
         * An [ITdVirtualScrollBottomEvent] event is emitted
         */
        this.bottom = new EventEmitter();
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
         */
        function () {
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
         */
        function (data) {
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
         */
        function () {
            return this._virtualData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "rowHeight", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "fromRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "toRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "offsetTransform", {
        get: /**
         * @return {?}
         */
        function () {
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
        this._subs.push(this._rows.changes.subscribe(function () {
            _this._calculateVirtualRows();
        }));
        this._initialized = true;
        this._calculateVirtualRows();
        this._subs.push(this._bottom.pipe(debounceTime(SCROLL_DEBOUNCE)).subscribe(function () {
            _this.bottom.emit({
                lastRow: _this._data[_this._data.length - 1],
                lastIndex: _this.toRow,
            });
        }));
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
        if (this._subs) {
            this._subs.forEach(function (sub) {
                sub.unsubscribe();
            });
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
        var element = ((/** @type {?} */ (event.target)));
        if (element) {
            /** @type {?} */
            var verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
            if (this._initialized) {
                // check to see if bottom was hit to throw the bottom event
                if ((this._data.length * this.rowHeight) - (verticalScroll + this._hostHeight) === 0) {
                    this._bottom.next();
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
        { type: Component, args: [{
                    selector: 'td-virtual-scroll-container',
                    template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\"\n      [style.position]=\"'absolute'\"\n      [style.width.%]=\"100\">\n  <ng-template let-row\n                let-index=\"index\"\n                ngFor\n                [ngForOf]=\"virtualData\"\n                [ngForTrackBy]=\"trackBy\">\n    <div #rowElement\n         [style.width.%]=\"100\">\n      <ng-template *ngIf=\"_rowTemplate\"\n                  [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n                  [ngTemplateOutletContext]=\"{row: row,\n                                      index: (fromRow + index),\n                                      first: (fromRow + index) === 0,\n                                      last: (fromRow + index) === (data.length - 1),\n                                      odd: ((fromRow + index + 1) % 2) === 1,\n                                      even: ((fromRow + index + 1) % 2) === 0}\">\n      </ng-template>\n    </div>\n  </ng-template>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;height:100%;width:100%;overflow:auto;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    TdVirtualScrollContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DomSanitizer },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdVirtualScrollContainerComponent.propDecorators = {
        data: [{ type: Input, args: ['data',] }],
        bottom: [{ type: Output }],
        _rows: [{ type: ViewChildren, args: ['rowElement',] }],
        _rowTemplate: [{ type: ContentChild, args: [TdVirtualScrollRowDirective,] }],
        trackBy: [{ type: Input, args: ['trackBy',] }],
        handleScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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

export { CovalentVirtualScrollModule, TdVirtualScrollContainerComponent, TdVirtualScrollRowDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS12aXJ0dWFsLXNjcm9sbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwtcm93LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3RkVmlydHVhbFNjcm9sbFJvd10nfSlcbmV4cG9ydCBjbGFzcyBUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbiAgXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCxcbiAgICAgICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lcixcbiAgICAgICAgIFJlbmRlcmVyMiwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95LCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLXJvdy5kaXJlY3RpdmUnO1xuXG5jb25zdCBURF9WSVJUVUFMX09GRlNFVDogbnVtYmVyID0gMjtcbmNvbnN0IFNDUk9MTF9ERUJPVU5DRTogbnVtYmVyID0gMjAwO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFZpcnR1YWxTY3JvbGxCb3R0b21FdmVudCB7XG4gIGxhc3RSb3c6IGFueTtcbiAgbGFzdEluZGV4OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lcicsXG4gIHN0eWxlVXJsczogWycuL3ZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZFZpcnR1YWxTY3JvbGxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2JvdHRvbTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF90b3RhbEhlaWdodDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfaG9zdEhlaWdodDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc2Nyb2xsVmVydGljYWxPZmZzZXQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX29mZnNldFRyYW5zZm9ybTogU2FmZVN0eWxlO1xuXG4gIHByaXZhdGUgX2Zyb21Sb3c6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvUm93OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICBwcml2YXRlIF92aXJ0dWFsRGF0YTogYW55W107XG5cbiAgLyoqXG4gICAqIGRhdGE6IGFueVtdXG4gICAqIExpc3Qgb2YgaXRlbXMgdG8gdmlydHVhbGx5IGl0ZXJhdGUgb24uXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IHZpcnR1YWxEYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbERhdGE7XG4gIH1cblxuICAvKipcbiAgICogYm90dG9tOiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiB1c2VyIHNjcm9sbGVkIHRvIHRoZSBsYXN0IGl0ZW0gb2YgdGhlIGxpc3QuXG4gICAqIEFuIFtJVGRWaXJ0dWFsU2Nyb2xsQm90dG9tRXZlbnRdIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBib3R0b206IEV2ZW50RW1pdHRlcjxJVGRWaXJ0dWFsU2Nyb2xsQm90dG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGRWaXJ0dWFsU2Nyb2xsQm90dG9tRXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZHJlbigncm93RWxlbWVudCcpIF9yb3dzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQENvbnRlbnRDaGlsZChUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmUpIF9yb3dUZW1wbGF0ZTogVGRWaXJ0dWFsU2Nyb2xsUm93RGlyZWN0aXZlO1xuXG4gIGdldCByb3dIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fcm93cyAmJiB0aGlzLl9yb3dzLnRvQXJyYXkoKVswXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvd3MudG9BcnJheSgpWzBdLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCB0b3RhbEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEhlaWdodDtcbiAgfVxuXG4gIGdldCBmcm9tUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Sb3c7XG4gIH1cblxuICBnZXQgdG9Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Sb3c7XG4gIH1cblxuICBnZXQgb2Zmc2V0VHJhbnNmb3JtKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRyYW5zZm9ybTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnMucHVzaCh0aGlzLl9yb3dzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgfSkpO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuXG4gICAgdGhpcy5fc3Vicy5wdXNoKHRoaXMuX2JvdHRvbS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKFNDUk9MTF9ERUJPVU5DRSksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5ib3R0b20uZW1pdCh7XG4gICAgICAgIGxhc3RSb3c6IHRoaXMuX2RhdGFbdGhpcy5fZGF0YS5sZW5ndGggLSAxXSxcbiAgICAgICAgbGFzdEluZGV4OiB0aGlzLnRvUm93LFxuICAgICAgfSk7XG4gICAgfSkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGxldCBuZXdIb3N0SGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGlmICh0aGlzLl9ob3N0SGVpZ2h0ICE9PSBuZXdIb3N0SGVpZ2h0KSB7XG4gICAgICB0aGlzLl9ob3N0SGVpZ2h0ID0gbmV3SG9zdEhlaWdodDtcbiAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJzKSB7XG4gICAgICB0aGlzLl9zdWJzLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrQnk/OiBUcmFja0J5RnVuY3Rpb25cbiAgICogVGhpcyBhY2NlcHRzIHRoZSBzYW1lIHRyYWNrQnkgZnVuY3Rpb24gW25nRm9yXSBkb2VzLlxuICAgKiBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvcmUvVHJhY2tCeUZ1bmN0aW9uXG4gICAqL1xuICBASW5wdXQoJ3RyYWNrQnknKSB0cmFja0J5OiBUcmFja0J5RnVuY3Rpb248YW55PiA9ICAoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBoYW5kbGVTY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgdmVydGljYWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ICE9PSB2ZXJ0aWNhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsU2Nyb2xsO1xuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGJvdHRvbSB3YXMgaGl0IHRvIHRocm93IHRoZSBib3R0b20gZXZlbnRcbiAgICAgICAgaWYgKCh0aGlzLl9kYXRhLmxlbmd0aCAqIHRoaXMucm93SGVpZ2h0KSAtICh2ZXJ0aWNhbFNjcm9sbCArIHRoaXMuX2hvc3RIZWlnaHQpID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fYm90dG9tLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcmVmcmVzaCBhbmQgcmVjYWxjdWxhdGUgdGhlIHZpcnR1YWwgcm93c1xuICAgKiBlLmcuIGFmdGVyIGNoYW5naW5nIHRoZSBbZGF0YV0gY29udGVudFxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzY3JvbGwgdG8gYSBzcGVjaWZpYyByb3cgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBzY3JvbGxUbyhyb3c6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSByb3cgKiB0aGlzLnJvd0hlaWdodDtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc2Nyb2xsIHRvIHRoZSBzdGFydCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIHNjcm9sbFRvU3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxUbygwKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc2Nyb2xsIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBzY3JvbGxUb0VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbFRvKHRoaXMudG90YWxIZWlnaHQgLyB0aGlzLnJvd0hlaWdodCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVWaXJ0dWFsUm93cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSB0aGlzLl9kYXRhLmxlbmd0aCAqIHRoaXMucm93SGVpZ2h0O1xuICAgICAgbGV0IGZyb21Sb3c6IG51bWJlciA9IE1hdGguZmxvb3IoKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC8gdGhpcy5yb3dIZWlnaHQpKSAtIFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IGZyb21Sb3cgPiAwID8gZnJvbVJvdyA6IDA7XG4gICAgICBsZXQgcmFuZ2U6IG51bWJlciA9IE1hdGguZmxvb3IoKHRoaXMuX2hvc3RIZWlnaHQgLyB0aGlzLnJvd0hlaWdodCkpICsgKFREX1ZJUlRVQUxfT0ZGU0VUICogMik7XG4gICAgICBsZXQgdG9Sb3c6IG51bWJlciA9IHJhbmdlICsgdGhpcy5mcm9tUm93O1xuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID4gKFREX1ZJUlRVQUxfT0ZGU0VUICogdGhpcy5yb3dIZWlnaHQpKSB7XG4gICAgICBvZmZzZXQgPSB0aGlzLmZyb21Sb3cgKiB0aGlzLnJvd0hlaWdodDtcbiAgICB9XG5cbiAgICB0aGlzLl9vZmZzZXRUcmFuc2Zvcm0gPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd0cmFuc2xhdGVZKCcgKyAob2Zmc2V0IC0gdGhpcy50b3RhbEhlaWdodCkgKyAncHgpJyk7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3ZpcnR1YWxEYXRhID0gdGhpcy5kYXRhLnNsaWNlKHRoaXMuZnJvbVJvdywgdGhpcy50b1Jvdyk7XG4gICAgfVxuXG4gICAgLy8gbWFyayBmb3IgY2hlY2sgYXQgdGhlIGVuZCBvZiB0aGUgcXVldWUgc28gd2UgYXJlIHN1cmVcbiAgICAvLyB0aGF0IHRoZSBjaGFuZ2VzIHdpbGwgYmUgbWFya2VkXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZFZpcnR1YWxTY3JvbGxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBURF9WSVJUVUFMX1NDUk9MTDogVHlwZTxhbnk+W10gPSBbXG4gIFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZSxcbiAgVGRWaXJ0dWFsU2Nyb2xsQ29udGFpbmVyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfVklSVFVBTF9TQ1JPTEwsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9WSVJUVUFMX1NDUk9MTCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRWaXJ0dWFsU2Nyb2xsTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBSWlEQSwrQ0FBdUI7SUFFdEUscUNBQVksV0FBNkIsRUFDN0IsZ0JBQWtDO2VBQzVDLGtCQUFNLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztLQUNyQzs7Z0JBTkYsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFDOzs7O2dCQUh6QixXQUFXO2dCQUFFLGdCQUFnQjs7SUFXakQsa0NBQUM7Q0FBQSxDQVBnRCx1QkFBdUI7Ozs7OztBQ0p4RTtJQVVNLGlCQUFpQixHQUFXLENBQUM7O0lBQzdCLGVBQWUsR0FBVyxHQUFHOztJQW9GakMsMkNBQW9CLFdBQXVCLEVBQ3ZCLGFBQTJCLEVBQzNCLFNBQW9CLEVBQ3BCLGtCQUFxQztRQUhyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUF4RWpELFVBQUssR0FBbUIsRUFBRSxDQUFDO1FBQzNCLFlBQU8sR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QiwwQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFHbEMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7UUE4QmpCLFdBQU0sR0FBOEMsSUFBSSxZQUFZLEVBQStCLENBQUM7Ozs7OztRQTBFNUYsWUFBTyxHQUEwQixVQUFDLEtBQWEsRUFBRSxJQUFTO1lBQzFFLE9BQU8sSUFBSSxDQUFDO1NBQ2IsQ0FBQTtLQTVDNEQ7SUFyRDdELHNCQUNJLG1EQUFJOzs7O1FBT1I7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7Ozs7Ozs7O1FBVkQsVUFDUyxJQUFXO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEM7OztPQUFBO0lBS0Qsc0JBQUksMERBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7O09BQUE7SUFhRCxzQkFBSSx3REFBUzs7OztRQUFiO1lBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDN0U7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNWOzs7T0FBQTtJQUVELHNCQUFJLDBEQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7OztPQUFBO0lBRUQsc0JBQUksc0RBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7O09BQUE7SUFFRCxzQkFBSSxvREFBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7T0FBQTtJQUVELHNCQUFJLDhEQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDOUI7OztPQUFBOzs7O0lBT0QsMkRBQWU7OztJQUFmO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDM0MsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDL0IsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUM5QixDQUFDLFNBQVMsQ0FBQztZQUNWLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNmLE9BQU8sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDMUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxLQUFLO2FBQ3RCLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQyxDQUFDO0tBQ0w7Ozs7SUFFRCw4REFBa0I7OztJQUFsQjs7WUFDTSxhQUFhLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNO1FBQ3pGLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxhQUFhLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUM5QjtTQUNGO0tBQ0Y7Ozs7SUFFRCx1REFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQWlCO2dCQUNuQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Ozs7SUFZRCx3REFBWTs7OztJQURaLFVBQ2EsS0FBWTs7WUFDbkIsT0FBTyx1QkFBOEIsS0FBSyxDQUFDLE1BQU0sR0FBQztRQUN0RCxJQUFJLE9BQU8sRUFBRTs7Z0JBQ1AsY0FBYyxHQUFXLE9BQU8sQ0FBQyxTQUFTO1lBQzlDLElBQUksSUFBSSxDQUFDLHFCQUFxQixLQUFLLGNBQWMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGNBQWMsQ0FBQztnQkFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztpQkFDOUI7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7Z0JBRXJCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNwRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7S0FDRjs7Ozs7Ozs7OztJQU1ELG1EQUFPOzs7OztJQUFQO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDOUI7Ozs7Ozs7OztJQUtELG9EQUFROzs7OztJQUFSLFVBQVMsR0FBVztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3hDOzs7Ozs7OztJQUtELHlEQUFhOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qzs7Ozs7Ozs7SUFLRCx1REFBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7Ozs7SUFFTyxpRUFBcUI7OztJQUE3QjtRQUFBLGlCQWtDQztRQWpDQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O2dCQUNuRCxPQUFPLEdBQVcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLGlCQUFpQjtZQUNuRyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3RDLEtBQUssR0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQzs7Z0JBQ3pGLEtBQUssR0FBVyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDeEMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0IsS0FBSyxHQUFHLGlCQUFpQixDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCOztZQUVHLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLHFCQUFxQixJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsYUFBYSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekgsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRDs7O1FBSUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNyQixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0tBQ0o7O2dCQXBORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFFdkMscS9CQUF3RDtvQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkF0QjZFLFVBQVU7Z0JBRS9FLFlBQVk7Z0JBRFosU0FBUztnQkFEZ0IsaUJBQWlCOzs7dUJBNENoRCxLQUFLLFNBQUMsTUFBTTt5QkFxQlosTUFBTTt3QkFFTixZQUFZLFNBQUMsWUFBWTsrQkFFekIsWUFBWSxTQUFDLDJCQUEyQjswQkFzRXhDLEtBQUssU0FBQyxTQUFTOytCQUlmLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBdUZwQyx3Q0FBQztDQXJORDs7Ozs7O0FDbEJBO0lBTU0saUJBQWlCLEdBQWdCO0lBQ3JDLDJCQUEyQjtJQUMzQixpQ0FBaUM7Q0FDbEM7QUFFRDtJQUFBO0tBYUM7O2dCQWJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3FCQUNsQjtpQkFDRjs7SUFHRCxrQ0FBQztDQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9