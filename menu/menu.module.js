import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { TdMenuComponent } from './menu.component';
var TD_MENU = [
    TdMenuComponent,
];
export { TdMenuComponent } from './menu.component';
var CovalentMenuModule = (function () {
    function CovalentMenuModule() {
    }
    CovalentMenuModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatMenuModule,
                MatListModule,
            ],
            declarations: [
                TD_MENU,
            ],
            exports: [
                TD_MENU,
            ],
        })
    ], CovalentMenuModule);
    return CovalentMenuModule;
}());
export { CovalentMenuModule };
//# sourceMappingURL=menu.module.js.map