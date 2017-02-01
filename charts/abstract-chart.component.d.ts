import { OnInit } from '@angular/core';
import { TdChartsComponent } from './charts.component';
export interface IChartData {
    [key: string]: any;
}
export declare abstract class ChartComponent implements OnInit {
    protected _parent: TdChartsComponent;
    protected _initialized: boolean;
    protected _dataSrc: string;
    protected _data: IChartData[];
    protected _x: any;
    protected _y: any;
    readonly x: any;
    readonly y: any;
    constructor(_parent: TdChartsComponent);
    ngOnInit(): void;
    refresh(): void;
    protected setData(data: IChartData[]): void;
    protected setDataSrc(dataSrc: string): void;
    protected drawChart(): void;
    protected abstract renderChart(data: any): void;
}
