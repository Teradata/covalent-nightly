import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdMenuModule, MdListModule } from '@angular/material';
import { TdMenuComponent } from './menu.component';
var TD_MENU = [
    TdMenuComponent,
];
export { TdMenuComponent } from './menu.component';
var CovalentMenuModule = (function () {
    function CovalentMenuModule() {
    }
    return CovalentMenuModule;
}());
CovalentMenuModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            MdMenuModule,
            MdListModule,
        ],
        declarations: [
            TD_MENU,
        ],
        exports: [
            TD_MENU,
        ],
    })
], CovalentMenuModule);
export { CovalentMenuModule };
//# sourceMappingURL=menu.module.js.map