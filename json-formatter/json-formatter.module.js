import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTooltipModule, MdIconModule } from '@angular/material';
import { TdJsonFormatterComponent } from './json-formatter.component';
export { TdJsonFormatterComponent } from './json-formatter.component';
var CovalentJsonFormatterModule = (function () {
    function CovalentJsonFormatterModule() {
    }
    CovalentJsonFormatterModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MdTooltipModule,
                MdIconModule,
            ],
            declarations: [
                TdJsonFormatterComponent,
            ],
            exports: [
                TdJsonFormatterComponent,
            ],
        })
    ], CovalentJsonFormatterModule);
    return CovalentJsonFormatterModule;
}());
export { CovalentJsonFormatterModule };
//# sourceMappingURL=json-formatter.module.js.map