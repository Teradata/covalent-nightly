var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdChartsComponent, TdXAxisComponent, TdYLeftAxisComponent, TdYRightAxisComponent } from './charts.component';
import { TdChartBarComponent } from './chart-bar/chart-bar.component';
import { TdChartLineComponent } from './chart-line/chart-line.component';
import { TdChartAreaComponent } from './chart-area/chart-area.component';
var CovalentChartsModule = CovalentChartsModule_1 = (function () {
    function CovalentChartsModule() {
    }
    CovalentChartsModule.forRoot = function () {
        return {
            ngModule: CovalentChartsModule_1,
            providers: [],
        };
    };
    return CovalentChartsModule;
}());
CovalentChartsModule = CovalentChartsModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        declarations: [
            TdYLeftAxisComponent,
            TdYRightAxisComponent,
            TdXAxisComponent,
            TdChartsComponent,
            TdChartBarComponent,
            TdChartLineComponent,
            TdChartAreaComponent,
        ],
        exports: [
            TdYLeftAxisComponent,
            TdYRightAxisComponent,
            TdXAxisComponent,
            TdChartsComponent,
            TdChartBarComponent,
            TdChartLineComponent,
            TdChartAreaComponent,
        ],
    })
], CovalentChartsModule);
export { CovalentChartsModule };
var CovalentChartsModule_1;
//# sourceMappingURL=charts.module.js.map