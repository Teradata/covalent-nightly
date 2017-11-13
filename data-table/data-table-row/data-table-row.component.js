import * as tslib_1 from "tslib";
import { Component, Input, Renderer2, ElementRef, HostListener } from '@angular/core';
var TdDataTableColumnRowComponent = (function () {
    function TdDataTableColumnRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
    TdDataTableColumnRowComponent = tslib_1.__decorate([
        Component({
            /* tslint:disable-next-line */
            selector: 'tr[td-data-table-column-row]',
            styles: [":host { border-bottom-style: solid; border-bottom-width: 1px; } :host.td-data-table-row { height: 48px; } :host.td-data-table-column-row { height: 56px; } /*# sourceMappingURL=data-table-row.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TdDataTableColumnRowComponent);
    return TdDataTableColumnRowComponent;
}());
export { TdDataTableColumnRowComponent };
var TdDataTableRowComponent = (function () {
    function TdDataTableRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            if (selected) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
            }
            this._selected = selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableRowComponent.prototype, "height", {
        get: function () {
            var height = 48;
            if (this._elementRef.nativeElement) {
                height = this._elementRef.nativeElement.getBoundingClientRect().height;
            }
            return height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listening to click event to explicitly focus the row element.
     */
    TdDataTableRowComponent.prototype.clickListener = function () {
        this.focus();
    };
    TdDataTableRowComponent.prototype.focus = function () {
        this._elementRef.nativeElement.focus();
    };
    tslib_1.__decorate([
        Input('selected'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdDataTableRowComponent.prototype, "selected", null);
    tslib_1.__decorate([
        HostListener('click', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdDataTableRowComponent.prototype, "clickListener", null);
    TdDataTableRowComponent = tslib_1.__decorate([
        Component({
            /* tslint:disable-next-line */
            selector: 'tr[td-data-table-row]',
            styles: [":host { border-bottom-style: solid; border-bottom-width: 1px; } :host.td-data-table-row { height: 48px; } :host.td-data-table-column-row { height: 56px; } /*# sourceMappingURL=data-table-row.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TdDataTableRowComponent);
    return TdDataTableRowComponent;
}());
export { TdDataTableRowComponent };
//# sourceMappingURL=data-table-row.component.js.map