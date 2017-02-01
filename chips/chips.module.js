var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdIconModule } from '@angular/material';
import { TdChipsComponent } from './chips.component';
import { TdChipComponent } from './chip.component';
import { TdAutoCompleteComponent } from './autocomplete/autocomplete.component';
export { TdChipsComponent } from './chips.component';
var CovalentChipsModule = CovalentChipsModule_1 = (function () {
    function CovalentChipsModule() {
    }
    CovalentChipsModule.forRoot = function () {
        return {
            ngModule: CovalentChipsModule_1,
            providers: [],
        };
    };
    return CovalentChipsModule;
}());
CovalentChipsModule = CovalentChipsModule_1 = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            MdInputModule.forRoot(),
            MdIconModule.forRoot(),
        ],
        declarations: [
            TdChipsComponent,
            TdChipComponent,
            TdAutoCompleteComponent,
        ],
        exports: [
            TdChipsComponent,
            TdChipComponent,
            TdAutoCompleteComponent,
        ],
    })
], CovalentChipsModule);
export { CovalentChipsModule };
var CovalentChipsModule_1;
//# sourceMappingURL=chips.module.js.map