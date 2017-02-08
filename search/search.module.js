var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdIconModule, MdButtonModule } from '@angular/material';
import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';
export { TdSearchBoxComponent } from './search-box/search-box.component';
export { TdSearchInputComponent } from './search-input/search-input.component';
var CovalentSearchModule = CovalentSearchModule_1 = (function () {
    function CovalentSearchModule() {
    }
    CovalentSearchModule.forRoot = function () {
        return {
            ngModule: CovalentSearchModule_1,
            providers: [],
        };
    };
    return CovalentSearchModule;
}());
CovalentSearchModule = CovalentSearchModule_1 = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            MdInputModule.forRoot(),
            MdIconModule.forRoot(),
            MdButtonModule.forRoot(),
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
var CovalentSearchModule_1;
//# sourceMappingURL=search.module.js.map