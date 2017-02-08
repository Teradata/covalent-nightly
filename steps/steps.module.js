var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdListModule, MdRippleModule, PortalModule } from '@angular/material';
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
var CovalentStepsModule = CovalentStepsModule_1 = (function () {
    function CovalentStepsModule() {
    }
    CovalentStepsModule.forRoot = function () {
        return {
            ngModule: CovalentStepsModule_1,
            providers: [],
        };
    };
    return CovalentStepsModule;
}());
CovalentStepsModule = CovalentStepsModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MdIconModule.forRoot(),
            MdListModule.forRoot(),
            MdRippleModule.forRoot(),
            PortalModule.forRoot(),
            CovalentCommonModule.forRoot(),
        ],
        declarations: [
            TD_STEPS,
        ],
        exports: [
            TD_STEPS,
        ],
    })
], CovalentStepsModule);
export { CovalentStepsModule };
var CovalentStepsModule_1;
//# sourceMappingURL=steps.module.js.map