var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk';
import { MdRippleModule, MdIconModule } from '@angular/material';
import { TdExpansionPanelComponent, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective, TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent } from './expansion-panel.component';
import { TdExpansionPanelGroupComponent } from './expansion-panel-group.component';
var TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
export { TdExpansionPanelComponent } from './expansion-panel.component';
export { TdExpansionPanelGroupComponent } from './expansion-panel-group.component';
var CovalentExpansionPanelModule = (function () {
    function CovalentExpansionPanelModule() {
    }
    return CovalentExpansionPanelModule;
}());
CovalentExpansionPanelModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MdRippleModule,
            MdIconModule,
            PortalModule,
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
//# sourceMappingURL=expansion-panel.module.js.map