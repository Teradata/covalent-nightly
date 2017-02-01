import { OnInit, ElementRef } from '@angular/core';
import { ChartComponent } from './abstract-chart.component';
import { TdChartBarComponent } from './chart-bar/chart-bar.component';
export interface IChartMargin {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export declare class TdYLeftAxisComponent {
    private _parent;
    link: ChartComponent;
    show: boolean;
    grid: boolean;
    ticks: boolean;
    legend: string;
    constructor(_parent: TdChartsComponent);
    draw(svg: any): void;
}
export declare class TdYRightAxisComponent {
    private _parent;
    link: ChartComponent;
    show: boolean;
    grid: boolean;
    ticks: boolean;
    legend: string;
    constructor(_parent: TdChartsComponent);
    draw(svg: any): void;
}
export declare class TdXAxisComponent {
    private _parent;
    link: ChartComponent;
    show: boolean;
    grid: boolean;
    ticks: boolean;
    legend: string;
    constructor(_parent: TdChartsComponent);
    draw(svg: any): void;
}
export declare class TdChartsComponent implements OnInit {
    private _paletteMap;
    private _mdRed;
    private _mdPink;
    private _mdPurple;
    private _mdDeepPurple;
    private _mdIndigo;
    private _mdBlue;
    private _mdLightBlue;
    private _mdCyan;
    private _mdTeal;
    private _mdGreen;
    private _mdLightGreen;
    private _mdLime;
    private _mdYellow;
    private _mdAmber;
    private _mdOrange;
    private _mdDeepOrange;
    private _mdBrown;
    private _mdGrey;
    private _mdBlueGrey;
    private _margin;
    private _width;
    private _height;
    margin: IChartMargin;
    readonly width: number;
    readonly height: number;
    container: HTMLElement;
    chartCount: number;
    chartTotal: number;
    xAxis: TdXAxisComponent;
    leftYAxis: TdYLeftAxisComponent;
    rightYAxis: TdYRightAxisComponent;
    chartBar: TdChartBarComponent;
    title: string;
    fillOpacity: number;
    shadow: boolean;
    shadowColor: string;
    shadowDepth: any[];
    chartHeight: number;
    constructor(elementRef: ElementRef);
    offset: (data: any) => number;
    ngOnInit(): void;
    drawAxis(): void;
    drawContainer(): string;
    /**
     * Method to generate color Palette.
     */
    generatePalette(firstColor: string, secondColor: string): any;
}
