var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule, MdIconModule, PortalModule } from '@angular/material';
import { TdExpansionPanelComponent, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective, TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent } from './expansion-panel.component';
var TD_EXPANSION_PANEL = [
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
export { TdExpansionPanelComponent } from './expansion-panel.component';
var CovalentExpansionPanelModule = CovalentExpansionPanelModule_1 = (function () {
    function CovalentExpansionPanelModule() {
    }
    CovalentExpansionPanelModule.forRoot = function () {
        return {
            ngModule: CovalentExpansionPanelModule_1,
            providers: [],
        };
    };
    return CovalentExpansionPanelModule;
}());
CovalentExpansionPanelModule = CovalentExpansionPanelModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MdListModule.forRoot(),
            MdIconModule.forRoot(),
            PortalModule.forRoot(),
        ],
        declarations: [
            TD_EXPANSION_PANEL,
        ],
        exports: [
            TD_EXPANSION_PANEL,
        ],
    })
], CovalentExpansionPanelModule);
export { CovalentExpansionPanelModule };
var CovalentExpansionPanelModule_1;
//# sourceMappingURL=expansion-panel.module.js.map