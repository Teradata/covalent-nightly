import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { TdPagingBarComponent } from './paging-bar.component';
export { TdPagingBarComponent } from './paging-bar.component';
var CovalentPagingModule = (function () {
    function CovalentPagingModule() {
    }
    return CovalentPagingModule;
}());
CovalentPagingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            MatIconModule,
            MatButtonModule,
        ],
        declarations: [
            TdPagingBarComponent,
        ],
        exports: [
            TdPagingBarComponent,
        ],
    })
], CovalentPagingModule);
export { CovalentPagingModule };
//# sourceMappingURL=paging.module.js.map