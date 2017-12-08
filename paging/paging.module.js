import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TdPagingBarComponent } from './paging-bar.component';
export { TdPagingBarComponent } from './paging-bar.component';
var CovalentPagingModule = (function () {
    function CovalentPagingModule() {
    }
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
    return CovalentPagingModule;
}());
export { CovalentPagingModule };
//# sourceMappingURL=paging.module.js.map