import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';
export { TdSearchBoxComponent } from './search-box/search-box.component';
export { TdSearchInputComponent } from './search-input/search-input.component';
var CovalentSearchModule = (function () {
    function CovalentSearchModule() {
    }
    return CovalentSearchModule;
}());
CovalentSearchModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
        ],
        declarations: [
            TdSearchInputComponent,
            TdSearchBoxComponent,
        ],
        exports: [
            TdSearchInputComponent,
            TdSearchBoxComponent,
        ],
    })
], CovalentSearchModule);
export { CovalentSearchModule };
//# sourceMappingURL=search.module.js.map