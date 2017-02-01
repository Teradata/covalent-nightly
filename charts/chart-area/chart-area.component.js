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
var TdChartAreaComponent = (function (_super) {
    __extends(TdChartAreaComponent, _super);
    function TdChartAreaComponent(parent, _platformLocation) {
        var _this = _super.call(this, parent) || this;
        _this._platformLocation = _platformLocation;
        _this.bottomAxis = '';
        _this.transition = true;
        _this.transitionDuration = 0;
        _this.transitionDelay = 0;
        _this.colors = ['#03a9f4', '#0277bd'];
        return _this;
    }
    Object.defineProperty(TdChartAreaComponent.prototype, "dataSrc", {
        set: function (dataSrc) {
            _super.prototype.setDataSrc.call(this, dataSrc);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChartAreaComponent.prototype, "data", {
        set: function (data) {
            _super.prototype.setData.call(this, data);
        },
        enumerable: true,
        configurable: true
    });
    TdChartAreaComponent.prototype.renderChart = function (data) {
        var _this = this;
        var offset = this._parent.offset(data);
        var x = d3.scaleLinear().range([offset / 2, this._parent.width - (offset / 2)]);
        var y = d3.scaleLinear().range([this._parent.height, 0]);
        this._x = x;
        this._y = y;
        var area = d3.area()
            .x(function (d) { return x(d[_this.bottomAxis]); })
            .y0(this._parent.height)
            .y1(function (d) { return y(d[_this.columns]); })
            .curve(d3.curveCardinal);
        var valueline = d3.line()
            .x(function (d) { return x(d[_this.bottomAxis]); })
            .y(function (d) { return y(d[_this.columns]); });
        data.forEach(function (d) {
            d[_this.bottomAxis] = d[_this.bottomAxis];
            d[_this.columns] = +d[_this.columns];
        });
        x.domain([
            d3.min(data, function (d) { return d[_this.bottomAxis]; }),
            d3.max(data, function (d) { return d[_this.bottomAxis]; }),
        ]);
        y.domain([0, d3.max(data, function (d) { return d[_this.columns]; })]);
        var defsId = this._parent.drawContainer();
        var svg = d3.select(this._parent.container).selectAll('.chartG');
        if (d3.select('#rectClip rect').size() === 0) {
            svg.append('clipPath')
                .attr('id', 'rectClip')
                .append('rect')
                .attr('width', 0)
                .attr('height', this._parent.height);
        }
        if (this.transition === true) {
            d3.select('#rectClip rect')
                .transition().duration(this.transitionDuration)
                .delay(this.transitionDelay)
                .attr('width', this._parent.width);
        }
        else {
            d3.select('#rectClip rect')
                .attr('width', this._parent.width);
        }
        svg.append('g')
            .classed('chart-area', true);
        d3.select(this._parent.container).selectAll('.chart-area')
            .append('path')
            .data([data])
            .attr('class', 'area')
            .attr('fill', this.colors[0])
            .attr('stroke', this.colors[1])
            .attr('d', area)
            .attr('clip-path', 'url(' + this._platformLocation.pathname + '#rectClip)')
            .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');
        d3.select(this._parent.container).selectAll('.chart-area')
            .append('path')
            .data([data])
            .attr('class', 'line')
            .attr('d', valueline)
            .attr('clip-path', 'url(' + this._platformLocation.pathname + '#rectClip)')
            .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');
    };
    return TdChartAreaComponent;
}(ChartComponent));
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdChartAreaComponent.prototype, "dataSrc", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdChartAreaComponent.prototype, "data", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], TdChartAreaComponent.prototype, "bottomAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TdChartAreaComponent.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdChartAreaComponent.prototype, "transitionDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdChartAreaComponent.prototype, "transitionDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TdChartAreaComponent.prototype, "columns", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TdChartAreaComponent.prototype, "colors", void 0);
TdChartAreaComponent = __decorate([
    Component({
        selector: 'td-chart-area',
        styles: [""],
        template: "",
    }),
    __param(0, Inject(forwardRef(function () { return TdChartsComponent; }))),
    __metadata("design:paramtypes", [TdChartsComponent,
        PlatformLocation])
], TdChartAreaComponent);
export { TdChartAreaComponent };
//# sourceMappingURL=chart-area.component.js.map