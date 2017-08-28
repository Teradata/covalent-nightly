import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutNavListToggleDirective = (function (_super) {
    tslib_1.__extends(TdLayoutNavListToggleDirective, _super);
    function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
        set: function (tdLayoutNavListToggle) {
            this.disabled = !(tdLayoutNavListToggle === '' || tdLayoutNavListToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    tslib_1.__decorate([
        Input('tdLayoutNavListToggle'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", null);
    TdLayoutNavListToggleDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutNavListToggle]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutNavListComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutNavListComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutNavListToggleDirective);
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
export { TdLayoutNavListToggleDirective };
var TdLayoutNavListCloseDirective = (function (_super) {
    tslib_1.__extends(TdLayoutNavListCloseDirective, _super);
    function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
        set: function (tdLayoutNavListClose) {
            this.disabled = !(tdLayoutNavListClose === '' || tdLayoutNavListClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    tslib_1.__decorate([
        Input('tdLayoutNavListClose'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", null);
    TdLayoutNavListCloseDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutNavListClose]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutNavListComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutNavListComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutNavListCloseDirective);
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
export { TdLayoutNavListCloseDirective };
var TdLayoutNavListOpenDirective = (function (_super) {
    tslib_1.__extends(TdLayoutNavListOpenDirective, _super);
    function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
        set: function (tdLayoutNavListOpen) {
            this.disabled = !(tdLayoutNavListOpen === '' || tdLayoutNavListOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    tslib_1.__decorate([
        Input('tdLayoutNavListOpen'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", null);
    TdLayoutNavListOpenDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutNavListOpen]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutNavListComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutNavListComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutNavListOpenDirective);
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));
export { TdLayoutNavListOpenDirective };
//# sourceMappingURL=layout-nav-list.directives.js.map