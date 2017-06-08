var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdIconModule, MdAutocompleteModule, MdChipsModule } from '@angular/material';
import { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
export { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
var CovalentChipsModule = (function () {
    function CovalentChipsModule() {
    }
    return CovalentChipsModule;
}());
CovalentChipsModule = __decorate([
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
export { CovalentChipsModule };
//# sourceMappingURL=chips.module.js.map