import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
import { TdVirtualScrollContainerComponent } from './virtual-scroll-container.component';
var TD_VIRTUAL_SCROLL = [
    TdVirtualScrollRowDirective,
    TdVirtualScrollContainerComponent,
];
export { TdVirtualScrollRowDirective, TdVirtualScrollContainerComponent };
var CovalentVirtualScrollModule = (function () {
    function CovalentVirtualScrollModule() {
    }
    CovalentVirtualScrollModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                TD_VIRTUAL_SCROLL,
            ],
            exports: [
                TD_VIRTUAL_SCROLL,
            ],
        })
    ], CovalentVirtualScrollModule);
    return CovalentVirtualScrollModule;
}());
export { CovalentVirtualScrollModule };
//# sourceMappingURL=virtual-scroll.module.js.map