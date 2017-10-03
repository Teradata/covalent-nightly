import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatIconModule, MatAutocompleteModule, MatChipsModule } from '@angular/material';
import { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
export { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
var CovalentChipsModule = (function () {
    function CovalentChipsModule() {
    }
    return CovalentChipsModule;
}());
CovalentChipsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            ReactiveFormsModule,
            CommonModule,
            MatInputModule,
            MatIconModule,
            MatChipsModule,
            MatAutocompleteModule,
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
export { CovalentChipsModule };
//# sourceMappingURL=chips.module.js.map