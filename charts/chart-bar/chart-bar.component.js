var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Inject, forwardRef } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { TdChartsComponent } from '../charts.component';
import { ChartComponent } from '../abstract-chart.component';
/* tslint:disable-next-line */
var d3 = require('d3');
var TdChartBarComponent = (function (_super) {
    __extends(TdChartBarComponent, _super);
    function TdChartBarComponent(parent, _platformLocation) {
        var _this = _super.call(this, parent) || this;
        _this._platformLocation = _platformLocation;
        _this._colorPalette = [];
        _this._mdBarColorPalette = ['#F8BBD0', '#f48fb1', '#ec407a', '#e91e63', '#d81b60',
            '#c2185b', '#9C27B0', '#6A1B9A', '#4A148C', '#311B92', '#512DA8', '#673AB7', '#9575CD', '#B39DDB'];
        _this.bottomAxis = '';
        _this.transition = true;
        _this.transitionDuration = 0;
        _this.transitionDelay = 0;
        _this.padding = 0;
        return _this;
    }
    Object.defineProperty(TdChartBarComponent.prototype, "dataSrc", {
        set: function (dataSrc) {
            _super.prototype.setDataSrc.call(this, dataSrc);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChartBarComponent.prototype, "data", {
        set: function (data) {
            _super.prototype.setData.call(this, data);
        },
        enumerable: true,
        configurable: true
    });
    TdChartBarComponent.prototype.renderChart = function (data) {
        var _this = this;
        var palette = this._parent.generatePalette(this.colors[0], this.colors[1]);
        this._colorPalette = palette ? palette : this._mdBarColorPalette;
        var x = d3.scaleBand().range([0, this._parent.width]).padding(this.padding);
        var y = d3.scaleLinear().range([this._parent.height, 0]);
        this._x = x;
        this._y = y;
        data.forEach(function (d) {
            d[_this.columns] = +d[_this.columns];
        });
        x.domain(data.map(function (d) { return d[_this.bottomAxis]; }));
        y.domain([0, d3.max(data, function (d) { return d[_this.columns]; })]);
        var defsId = this._parent.drawContainer();
        var svg = d3.select(this._parent.container).selectAll('.chartG');
        var bar = svg.append('g')
            .classed('chart-bars', true)
            .selectAll('.bar')
            .data(data);
        bar
            .enter().append('rect')
            .attr('class', 'bar')
            .merge(bar)
            .attr('width', x.bandwidth())
            .attr('height', 0)
            .attr('fill', function (d, i) {
            return _this._colorPalette[Math.floor(i / (data.length / _this._colorPalette.length))];
        })
            .attr('transform', function (d) { return 'translate(' + [x(d[_this.bottomAxis]), _this._parent.height] + ')'; })
            .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');
        if (this.transition === true) {
            this._transtion(svg, x, y);
        }
    };
    TdChartBarComponent.prototype._transtion = function (chartSvg, x, y) {
        var _this = this;
        var t = d3.transition()
            .delay(this.transitionDelay)
            .duration(this.transitionDuration)
            .ease(d3.easeLinear);
        chartSvg.selectAll('.bar').transition(t)
            .attr('height', function (d) { return _this._parent.height - y(d[_this.columns]); })
            .attr('transform', function (d) { return 'translate(' + [x(d[_this.bottomAxis]), y(d[_this.columns])] + ')'; });
    };
    return TdChartBarComponent;
}(ChartComponent));
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdChartBarComponent.prototype, "dataSrc", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdChartBarComponent.prototype, "data", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], TdChartBarComponent.prototype, "bottomAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TdChartBarComponent.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdChartBarComponent.prototype, "transitionDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdChartBarComponent.prototype, "transitionDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TdChartBarComponent.prototype, "columns", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TdChartBarComponent.prototype, "colors", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdChartBarComponent.prototype, "padding", void 0);
TdChartBarComponent = __decorate([
    Component({
        selector: 'td-chart-bar',
        styles: [""],
        template: "",
    }),
    __param(0, Inject(forwardRef(function () { return TdChartsComponent; }))),
    __metadata("design:paramtypes", [TdChartsComponent,
        PlatformLocation])
], TdChartBarComponent);
export { TdChartBarComponent };
//# sourceMappingURL=chart-bar.component.js.map