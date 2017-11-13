import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { LayoutToggle } from './layout-toggle.class';
var TdLayoutToggleDirective = (function (_super) {
    tslib_1.__extends(TdLayoutToggleDirective, _super);
    function TdLayoutToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
        set: function (tdLayoutToggle) {
            this.disabled = !(tdLayoutToggle === '' || tdLayoutToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    tslib_1.__decorate([
        Input('tdLayoutToggle'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutToggleDirective.prototype, "tdLayoutToggle", null);
    TdLayoutToggleDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutToggle]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutToggleDirective);
    return TdLayoutToggleDirective;
}(LayoutToggle));
export { TdLayoutToggleDirective };
var TdLayoutCloseDirective = (function (_super) {
    tslib_1.__extends(TdLayoutCloseDirective, _super);
    function TdLayoutCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
        set: function (tdLayoutClose) {
            this.disabled = !(tdLayoutClose === '' || tdLayoutClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    tslib_1.__decorate([
        Input('tdLayoutClose'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutCloseDirective.prototype, "tdLayoutClose", null);
    TdLayoutCloseDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutClose]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutCloseDirective);
    return TdLayoutCloseDirective;
}(LayoutToggle));
export { TdLayoutCloseDirective };
var TdLayoutOpenDirective = (function (_super) {
    tslib_1.__extends(TdLayoutOpenDirective, _super);
    function TdLayoutOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
        set: function (tdLayoutOpen) {
            this.disabled = !(tdLayoutOpen === '' || tdLayoutOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    tslib_1.__decorate([
        Input('tdLayoutOpen'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdLayoutOpenDirective.prototype, "tdLayoutClose", null);
    TdLayoutOpenDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLayoutOpen]',
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
        tslib_1.__metadata("design:paramtypes", [TdLayoutComponent,
            Renderer2,
            ElementRef])
    ], TdLayoutOpenDirective);
    return TdLayoutOpenDirective;
}(LayoutToggle));
export { TdLayoutOpenDirective };
//# sourceMappingURL=layout.directives.js.map