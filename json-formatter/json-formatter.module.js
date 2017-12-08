import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { TdJsonFormatterComponent } from './json-formatter.component';
export { TdJsonFormatterComponent } from './json-formatter.component';
var CovalentJsonFormatterModule = (function () {
    function CovalentJsonFormatterModule() {
    }
    CovalentJsonFormatterModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatTooltipModule,
                MatIconModule,
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