import { PlatformLocation } from '@angular/common';
import { TdChartsComponent } from '../charts.component';
import { ChartComponent, IChartData } from '../abstract-chart.component';
export declare class TdChartBarComponent extends ChartComponent {
    private _platformLocation;
    private _colorPalette;
    private _mdBarColorPalette;
    dataSrc: string;
    data: IChartData[];
    bottomAxis: string;
    transition: boolean;
    transitionDuration: number;
    transitionDelay: number;
    columns: string;
    colors: string[];
    padding: number;
    constructor(parent: TdChartsComponent, _platformLocation: PlatformLocation);
    renderChart(data: any): void;
    private _transtion(chartSvg, x, y);
}
