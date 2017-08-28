import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdIconModule, MdAutocompleteModule, MdChipsModule } from '@angular/material';
import { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
export { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
var CovalentChipsModule = (function () {
    function CovalentChipsModule() {
    }
    CovalentChipsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                ReactiveFormsModule,
                CommonModule,
                MdInputModule,
                MdIconModule,
                MdChipsModule,
                MdAutocompleteModule,
            ],
            declarations: [
                TdChipsComponent,
                TdChipDirective,
                TdAutocompleteOptionDirective,
            ],
            exports: [
                TdChipsComponent,
                TdChipDirective,
                TdAutocompleteOptionDirective,
            ],
        })
    ], CovalentChipsModule);
    return CovalentChipsModule;
}());
export { CovalentChipsModule };
//# sourceMappingURL=chips.module.js.map