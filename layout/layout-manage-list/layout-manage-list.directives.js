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
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutManageListToggleDirective = (function (_super) {
    __extends(TdLayoutManageListToggleDirective, _super);
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
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutManageListToggle'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", null);
TdLayoutManageListToggleDirective = __decorate([
    Directive({
        selector: '[tdLayoutManageListToggle]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutManageListComponent; }))),
    __metadata("design:paramtypes", [TdLayoutManageListComponent,
        Renderer2,
        ElementRef])
], TdLayoutManageListToggleDirective);
export { TdLayoutManageListToggleDirective };
var TdLayoutManageListCloseDirective = (function (_super) {
    __extends(TdLayoutManageListCloseDirective, _super);
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
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutManageListClose'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", null);
TdLayoutManageListCloseDirective = __decorate([
    Directive({
        selector: '[tdLayoutManageListClose]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutManageListComponent; }))),
    __metadata("design:paramtypes", [TdLayoutManageListComponent,
        Renderer2,
        ElementRef])
], TdLayoutManageListCloseDirective);
export { TdLayoutManageListCloseDirective };
var TdLayoutManageListOpenDirective = (function (_super) {
    __extends(TdLayoutManageListOpenDirective, _super);
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
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));
__decorate([
    Input('tdLayoutManageListOpen'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", null);
TdLayoutManageListOpenDirective = __decorate([
    Directive({
        selector: '[tdLayoutManageListOpen]',
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutManageListComponent; }))),
    __metadata("design:paramtypes", [TdLayoutManageListComponent,
        Renderer2,
        ElementRef])
], TdLayoutManageListOpenDirective);
export { TdLayoutManageListOpenDirective };
//# sourceMappingURL=layout-manage-list.directives.js.map