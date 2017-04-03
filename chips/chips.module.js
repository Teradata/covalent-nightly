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
import { TdChipsComponent } from './chips.component';
export { TdChipsComponent } from './chips.component';
var CovalentChipsModule = CovalentChipsModule_1 = (function () {
    function CovalentChipsModule() {
    }
    /**
     * @deprecated in 1.0.0-beta.3
     *
     * Please use without calling forRoot()
     */
    CovalentChipsModule.forRoot = function () {
        /* tslint:disable-next-line */
        console.warn('forRoot() has been deprecated in CovalentChipsModule');
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
            ReactiveFormsModule,
            CommonModule,
            MdInputModule,
            MdIconModule,
            MdChipsModule,
            MdAutocompleteModule,
        ],
        declarations: [
            TdChipsComponent,
        ],
        exports: [
            TdChipsComponent,
        ],
    })
], CovalentChipsModule);
export { CovalentChipsModule };
var CovalentChipsModule_1;
//# sourceMappingURL=chips.module.js.map