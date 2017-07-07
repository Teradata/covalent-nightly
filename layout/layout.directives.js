var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { LayoutToggle } from './layout-toggle.class';
var TdLayoutToggleDirective = (function (_super) {
    __extends(TdLayoutToggleDirective, _super);
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
    return TdLayoutToggleDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutToggle'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutToggleDirective.prototype, "tdLayoutToggle", null);
TdLayoutToggleDirective = __decorate([
    Directive({
        selector: '[tdLayoutToggle]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
    __metadata("design:paramtypes", [TdLayoutComponent,
        Renderer2,
        ElementRef])
], TdLayoutToggleDirective);
export { TdLayoutToggleDirective };
var TdLayoutCloseDirective = (function (_super) {
    __extends(TdLayoutCloseDirective, _super);
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
    return TdLayoutCloseDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutClose'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutCloseDirective.prototype, "tdLayoutClose", null);
TdLayoutCloseDirective = __decorate([
    Directive({
        selector: '[tdLayoutClose]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
    __metadata("design:paramtypes", [TdLayoutComponent,
        Renderer2,
        ElementRef])
], TdLayoutCloseDirective);
export { TdLayoutCloseDirective };
var TdLayoutOpenDirective = (function (_super) {
    __extends(TdLayoutOpenDirective, _super);
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
    return TdLayoutOpenDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutOpen'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutOpenDirective.prototype, "tdLayoutClose", null);
TdLayoutOpenDirective = __decorate([
    Directive({
        selector: '[tdLayoutOpen]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
    __metadata("design:paramtypes", [TdLayoutComponent,
        Renderer2,
        ElementRef])
], TdLayoutOpenDirective);
export { TdLayoutOpenDirective };
//# sourceMappingURL=layout.directives.js.map