import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LOADING_PROVIDER } from './services/loading.service';
import { LOADING_FACTORY_PROVIDER } from './services/loading.factory';
import { TdLoadingDirective } from './directives/loading.directive';
import { TdLoadingComponent } from './loading.component';
var TD_LOADING = [
    TdLoadingComponent,
    TdLoadingDirective,
];
var TD_LOADING_ENTRY_COMPONENTS = [
    TdLoadingComponent,
];
export { LoadingType, LoadingMode, LoadingStrategy } from './loading.component';
export { TdLoadingService } from './services/loading.service';
var CovalentLoadingModule = (function () {
    function CovalentLoadingModule() {
    }
    CovalentLoadingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatProgressBarModule,
                MatProgressSpinnerModule,
                OverlayModule,
                PortalModule,
            ],
            declarations: [
                TD_LOADING,
            ],
            exports: [
                TD_LOADING,
            ],
            providers: [
                LOADING_FACTORY_PROVIDER,
                LOADING_PROVIDER,
            ],
            entryComponents: [
                TD_LOADING_ENTRY_COMPONENTS,
            ],
        })
    ], CovalentLoadingModule);
    return CovalentLoadingModule;
}());
export { CovalentLoadingModule };
//# sourceMappingURL=loading.module.js.map