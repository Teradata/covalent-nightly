import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CovalentCommonModule } from '../common/common.module';
// Steps
import { TdStepsComponent } from './steps.component';
import { TdStepHeaderComponent } from './step-header/step-header.component';
import { TdStepBodyComponent } from './step-body/step-body.component';
import { TdStepComponent, TdStepLabelDirective, TdStepActionsDirective, TdStepSummaryDirective } from './step.component';
var TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
];
export { TdStepComponent, StepState } from './step.component';
export { TdStepsComponent, StepMode } from './steps.component';
var CovalentStepsModule = (function () {
    function CovalentStepsModule() {
    }
    CovalentStepsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatIconModule,
                MatRippleModule,
                PortalModule,
                ScrollDispatchModule,
                CovalentCommonModule,
            ],
            declarations: [
                TD_STEPS,
            ],
            exports: [
                TD_STEPS,
            ],
        })
    ], CovalentStepsModule);
    return CovalentStepsModule;
}());
export { CovalentStepsModule };
//# sourceMappingURL=steps.module.js.map