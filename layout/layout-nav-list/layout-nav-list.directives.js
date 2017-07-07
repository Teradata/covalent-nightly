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
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutNavListToggleDirective = (function (_super) {
    __extends(TdLayoutNavListToggleDirective, _super);
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
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutNavListToggle'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", null);
TdLayoutNavListToggleDirective = __decorate([
    Directive({
        selector: '[tdLayoutNavListToggle]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutNavListComponent; }))),
    __metadata("design:paramtypes", [TdLayoutNavListComponent,
        Renderer2,
        ElementRef])
], TdLayoutNavListToggleDirective);
export { TdLayoutNavListToggleDirective };
var TdLayoutNavListCloseDirective = (function (_super) {
    __extends(TdLayoutNavListCloseDirective, _super);
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
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutNavListClose'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", null);
TdLayoutNavListCloseDirective = __decorate([
    Directive({
        selector: '[tdLayoutNavListClose]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutNavListComponent; }))),
    __metadata("design:paramtypes", [TdLayoutNavListComponent,
        Renderer2,
        ElementRef])
], TdLayoutNavListCloseDirective);
export { TdLayoutNavListCloseDirective };
var TdLayoutNavListOpenDirective = (function (_super) {
    __extends(TdLayoutNavListOpenDirective, _super);
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
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutNavListOpen'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", null);
TdLayoutNavListOpenDirective = __decorate([
    Directive({
        selector: '[tdLayoutNavListOpen]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutNavListComponent; }))),
    __metadata("design:paramtypes", [TdLayoutNavListComponent,
        Renderer2,
        ElementRef])
], TdLayoutNavListOpenDirective);
export { TdLayoutNavListOpenDirective };
//# sourceMappingURL=layout-nav-list.directives.js.map