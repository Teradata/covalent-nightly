import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
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
    CovalentExpansionPanelModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatRippleModule,
                MatIconModule,
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
    return CovalentExpansionPanelModule;
}());
export { CovalentExpansionPanelModule };
//# sourceMappingURL=expansion-panel.module.js.map