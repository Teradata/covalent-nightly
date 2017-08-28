import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutManageListToggleDirective = (function (_super) {
    tslib_1.__extends(TdLayoutManageListToggleDirective, _super);
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
        set: function (tdLayoutManageListToggle) {
            this.disabled = !(tdLayoutManageListToggle === '' || tdLayoutManageListToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    tslib_1.__decorate([
        Input('tdLayoutManageListToggle'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", null);
    TdLayoutManageListToggleDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutManageListToggle]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutManageListComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutManageListComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutManageListToggleDirective);
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
export { TdLayoutManageListToggleDirective };
var TdLayoutManageListCloseDirective = (function (_super) {
    tslib_1.__extends(TdLayoutManageListCloseDirective, _super);
    function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
        set: function (tdLayoutManageListClose) {
            this.disabled = !(tdLayoutManageListClose === '' || tdLayoutManageListClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    tslib_1.__decorate([
        Input('tdLayoutManageListClose'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", null);
    TdLayoutManageListCloseDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutManageListClose]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutManageListComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutManageListComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutManageListCloseDirective);
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
export { TdLayoutManageListCloseDirective };
var TdLayoutManageListOpenDirective = (function (_super) {
    tslib_1.__extends(TdLayoutManageListOpenDirective, _super);
    function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
        set: function (tdLayoutManageListOpen) {
            this.disabled = !(tdLayoutManageListOpen === '' || tdLayoutManageListOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    tslib_1.__decorate([
        Input('tdLayoutManageListOpen'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", null);
    TdLayoutManageListOpenDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutManageListOpen]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutManageListComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutManageListComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutManageListOpenDirective);
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));
export { TdLayoutManageListOpenDirective };
//# sourceMappingURL=layout-manage-list.directives.js.map