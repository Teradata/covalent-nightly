import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule, MatIconModule } from '@angular/material';
import { TdJsonFormatterComponent } from './json-formatter.component';
export { TdJsonFormatterComponent } from './json-formatter.component';
var CovalentJsonFormatterModule = (function () {
    function CovalentJsonFormatterModule() {
    }
    return CovalentJsonFormatterModule;
}());
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
export { CovalentJsonFormatterModule };
//# sourceMappingURL=json-formatter.module.js.map