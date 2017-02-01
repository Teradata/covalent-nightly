var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdHighlightComponent } from './highlight.component';
var CovalentHighlightModule = CovalentHighlightModule_1 = (function () {
    function CovalentHighlightModule() {
    }
    CovalentHighlightModule.forRoot = function () {
        return {
            ngModule: CovalentHighlightModule_1,
            providers: [],
        };
    };
    return CovalentHighlightModule;
}());
CovalentHighlightModule = CovalentHighlightModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        declarations: [
            TdHighlightComponent,
        ],
        exports: [
            TdHighlightComponent,
        ],
    })
], CovalentHighlightModule);
export { CovalentHighlightModule };
var CovalentHighlightModule_1;
//# sourceMappingURL=highlight.module.js.map