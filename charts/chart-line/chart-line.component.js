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
var TdChartLineComponent = (function (_super) {
    __extends(TdChartLineComponent, _super);
    function TdChartLineComponent(parent, _platformLocation) {
        var _this = _super.call(this, parent) || this;
        _this._platformLocation = _platformLocation;
        _this.bottomAxis = '';
        _this.transition = true;
        _this.transitionDuration = 0;
        _this.transitionDelay = 0;
        _this.colors = ['#304FFE', '#00B8D4', '#FF3D00'];
        _this.timeSeries = false;
        return _this;
    }
    Object.defineProperty(TdChartLineComponent.prototype, "dataSrc", {
        set: function (dataSrc) {
            _super.prototype.setDataSrc.call(this, dataSrc);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChartLineComponent.prototype, "data", {
        set: function (data) {
            _super.prototype.setData.call(this, data);
        },
        enumerable: true,
        configurable: true
    });
    TdChartLineComponent.prototype.renderChart = function (data) {
        var _this = this;
        var t = d3.transition()
            .duration(this.transitionDuration)
            .delay(this.transitionDelay)
            .ease(d3.easeLinear);
        var parseTime = d3.timeParse('%d-%b-%y');
        var stringCol = function (record, bottomAxis) { return record[bottomAxis]; };
        var dateCol = function (record, bottomAxis) { return parseTime(record[bottomAxis]); };
        var row = this.timeSeries ? dateCol : stringCol;
        var xScale = this.timeSeries ? d3.scaleTime : d3.scaleLinear;
        var offset = this._parent.offset(data);
        var x = xScale().range([offset / 2, this._parent.width - (offset / 2)]);
        var y = d3.scaleLinear().range([this._parent.height, 0]);
        this._x = x;
        this._y = y;
        var color = d3.scaleOrdinal(this.colors);
        var drawLine = d3.line()
            .x(function (d) { return x(d.xValue); })
            .y(function (d) { return y(d.yValue); });
        var lines = this.columns.map(function (id) {
            return {
                id: id,
                values: data.map(function (d) {
                    return { xValue: row(d, _this.bottomAxis), yValue: +d[id] };
                }),
            };
        });
        x.domain(d3.extent(data, function (d) { return row(d, _this.bottomAxis); }));
        y.domain([
            d3.min(lines, function (c) { return d3.min(c.values, function (d) { return d.yValue; }); }),
            d3.max(lines, function (c) { return d3.max(c.values, function (d) { return d.yValue; }); }),
        ]);
        var defsId = this._parent.drawContainer();
        var svg = d3.select(this._parent.container).selectAll('.chartG');
        var line = svg.append('g')
            .classed('chart-lines', true)
            .selectAll('.lineTitle')
            .data(lines)
            .enter();
        var transitionFlag = this.transition;
        line.append('path')
            .attr('class', 'line')
            .merge(line)
            .attr('d', function (d) { return drawLine(d.values); })
            .style('stroke', function (d) { return color(d.id); })
            .attr('stroke-dasharray', function (d) {
            if (transitionFlag === true) {
                return this.getTotalLength();
            }
        })
            .attr('stroke-dashoffset', function (d) {
            if (transitionFlag === true) {
                return this.getTotalLength();
            }
        })
            .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');
        if (this.transition === true) {
            svg.selectAll('.line').transition(t)
                .attr('stroke-dashoffset', 0);
        }
        line.append('text')
            .datum(function (d) { return { id: d.id, value: d.values[d.values.length - 1] }; })
            .attr('transform', function (d) {
            if (!d.value) {
                return undefined;
            }
            else {
                return 'translate(' + x(d.value.xValue) + ',' + y(d.value.yValue) + ')';
            }
        })
            .attr('x', 3)
            .attr('dy', '0.35em')
            .style('font', '10px sans-serif')
            .text(function (d, i) { return _this.titles[i]; });
    };
    return TdChartLineComponent;
}(ChartComponent));
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdChartLineComponent.prototype, "dataSrc", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdChartLineComponent.prototype, "data", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], TdChartLineComponent.prototype, "bottomAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TdChartLineComponent.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdChartLineComponent.prototype, "transitionDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdChartLineComponent.prototype, "transitionDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TdChartLineComponent.prototype, "columns", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TdChartLineComponent.prototype, "colors", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TdChartLineComponent.prototype, "titles", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TdChartLineComponent.prototype, "timeSeries", void 0);
TdChartLineComponent = __decorate([
    Component({
        selector: 'td-chart-line',
        styles: [""],
        template: "",
    }),
    __param(0, Inject(forwardRef(function () { return TdChartsComponent; }))),
    __metadata("design:paramtypes", [TdChartsComponent,
        PlatformLocation])
], TdChartLineComponent);
export { TdChartLineComponent };
//# sourceMappingURL=chart-line.component.js.map