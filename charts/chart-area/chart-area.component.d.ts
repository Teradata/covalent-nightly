import { PlatformLocation } from '@angular/common';
import { TdChartsComponent } from '../charts.component';
import { ChartComponent, IChartData } from '../abstract-chart.component';
export declare class TdChartAreaComponent extends ChartComponent {
    private _platformLocation;
    dataSrc: string;
    data: IChartData[];
    bottomAxis: string;
    transition: boolean;
    transitionDuration: number;
    transitionDelay: number;
    columns: string;
    colors: string[];
    constructor(parent: TdChartsComponent, _platformLocation: PlatformLocation);
    renderChart(data: any): void;
}
