(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.td = global.td || {}, global.td.charts = global.td.charts || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

/* tslint:disable-next-line */
var d3$1 = require('d3');
var ChartComponent = (function () {
    function ChartComponent(_parent) {
        this._parent = _parent;
        this._initialized = false;
        this._dataSrc = '';
        this._parent.chartTotal++;
    }
    Object.defineProperty(ChartComponent.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    ChartComponent.prototype.ngOnInit = function () {
        this._initialized = true;
        this.drawChart();
    };
    ChartComponent.prototype.refresh = function () {
        this.drawChart();
    };
    ChartComponent.prototype.setData = function (data) {
        this._data = data;
        if (this._initialized) {
            this.drawChart();
        }
    };
    ChartComponent.prototype.setDataSrc = function (dataSrc) {
        this._dataSrc = dataSrc;
        if (this._initialized) {
            this.drawChart();
        }
    };
    ChartComponent.prototype.drawChart = function () {
        var _this = this;
        if (this._data) {
            this.renderChart(this._data);
        }
        else if (this._dataSrc) {
            var parseContent = {
                json: d3$1.json,
                csv: d3$1.csv,
                tsv: d3$1.tsv,
            };
            var contentType = this._dataSrc.substr(this._dataSrc.lastIndexOf('.') + 1);
            parseContent[contentType](this._dataSrc, function (error, data) {
                if (error) {
                    throw error;
                }
                _this.renderChart(data);
            });
        }
        else {
            throw new Error('[data] or [dataSrc] must be defined in [TdChartLineComponent]');
        }
    };
    return ChartComponent;
}());

var __extends = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable-next-line */
var d3$2 = require('d3');
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
        var x = d3$2.scaleBand().range([0, this._parent.width]).padding(this.padding);
        var y = d3$2.scaleLinear().range([this._parent.height, 0]);
        this._x = x;
        this._y = y;
        data.forEach(function (d) {
            d[_this.columns] = +d[_this.columns];
        });
        x.domain(data.map(function (d) { return d[_this.bottomAxis]; }));
        y.domain([0, d3$2.max(data, function (d) { return d[_this.columns]; })]);
        var defsId = this._parent.drawContainer();
        var svg = d3$2.select(this._parent.container).selectAll('.chartG');
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
        var t = d3$2.transition()
            .delay(this.transitionDelay)
            .duration(this.transitionDuration)
            .ease(d3$2.easeLinear);
        chartSvg.selectAll('.bar').transition(t)
            .attr('height', function (d) { return _this._parent.height - y(d[_this.columns]); })
            .attr('transform', function (d) { return 'translate(' + [x(d[_this.bottomAxis]), y(d[_this.columns])] + ')'; });
    };
    return TdChartBarComponent;
}(ChartComponent));
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", String),
    __metadata$1("design:paramtypes", [String])
], TdChartBarComponent.prototype, "dataSrc", null);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", Array),
    __metadata$1("design:paramtypes", [Array])
], TdChartBarComponent.prototype, "data", null);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", String)
], TdChartBarComponent.prototype, "bottomAxis", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", Boolean)
], TdChartBarComponent.prototype, "transition", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", Number)
], TdChartBarComponent.prototype, "transitionDuration", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", Number)
], TdChartBarComponent.prototype, "transitionDelay", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", String)
], TdChartBarComponent.prototype, "columns", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", Array)
], TdChartBarComponent.prototype, "colors", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", Number)
], TdChartBarComponent.prototype, "padding", void 0);
TdChartBarComponent = __decorate$1([
    _angular_core.Component({
        selector: 'td-chart-bar',
        styles: [""],
        template: "",
    }),
    __param$1(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdChartsComponent; }))),
    __metadata$1("design:paramtypes", [exports.TdChartsComponent,
        _angular_common.PlatformLocation])
], TdChartBarComponent);

var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable-next-line */
var d3 = require('d3');
exports.TdYLeftAxisComponent = (function () {
    function TdYLeftAxisComponent(_parent) {
        this._parent = _parent;
        this.show = true;
        this.grid = false;
        this.ticks = false;
    }
    TdYLeftAxisComponent.prototype.draw = function (svg) {
        var y = this.link.y;
        svg.append('g')
            .attr('display', this.show && this.grid ? 'display' : 'none')
            .attr('class', 'grid')
            .call(d3.axisLeft(y)
            .tickSize(-this._parent.width)
            .tickFormat(''));
        svg.append('text')
            .attr('display', this.show ? 'display' : 'none')
            .attr('y', -15)
            .classed('axisTitle', true)
            .attr('dy', '0.71em')
            .attr('fill', '#000')
            .text(this.legend);
        var ticks = svg.append('g')
            .attr('class', 'ticks ticks-y')
            .attr('display', this.show ? 'display' : 'none')
            .call(d3.axisLeft(y));
        ticks
            .selectAll('.tick line')
            .attr('display', this.show && this.ticks ? 'display' : 'none');
        ticks
            .selectAll('.tick text')
            .attr('display', this.show && this.ticks ? 'display' : 'none');
    };
    return TdYLeftAxisComponent;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", ChartComponent)
], exports.TdYLeftAxisComponent.prototype, "link", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdYLeftAxisComponent.prototype, "show", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdYLeftAxisComponent.prototype, "grid", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdYLeftAxisComponent.prototype, "ticks", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.TdYLeftAxisComponent.prototype, "legend", void 0);
exports.TdYLeftAxisComponent = __decorate([
    _angular_core.Component({
        selector: 'td-axis-y-left',
        template: '',
    }),
    __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdChartsComponent; }))),
    __metadata("design:paramtypes", [exports.TdChartsComponent])
], exports.TdYLeftAxisComponent);
exports.TdYRightAxisComponent = (function () {
    function TdYRightAxisComponent(_parent) {
        this._parent = _parent;
        this.show = true;
        this.grid = false;
        this.ticks = false;
    }
    TdYRightAxisComponent.prototype.draw = function (svg) {
        var y = this.link.y;
        svg.append('g')
            .attr('display', this.show && this.grid ? 'display' : 'none')
            .attr('transform', 'translate(' + this._parent.width + ', 0)')
            .attr('class', 'grid')
            .call(d3.axisRight(y)
            .tickSize(-this._parent.width)
            .tickFormat(''));
        svg.append('text')
            .attr('display', this.show ? 'display' : 'none')
            .attr('y', -15)
            .attr('transform', 'translate(' + this._parent.width + ', 0)')
            .classed('axisTitle', true)
            .attr('dy', '0.71em')
            .attr('fill', '#000')
            .text(this.legend);
        var ticks = svg.append('g')
            .attr('class', 'ticks ticks-y')
            .attr('transform', 'translate(' + this._parent.width + ', 0)')
            .attr('display', this.show ? 'display' : 'none')
            .call(d3.axisRight(y));
        ticks
            .selectAll('.tick line')
            .attr('display', this.show && this.ticks ? 'display' : 'none');
        ticks
            .selectAll('.tick text')
            .attr('display', this.show && this.ticks ? 'display' : 'none');
    };
    return TdYRightAxisComponent;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", ChartComponent)
], exports.TdYRightAxisComponent.prototype, "link", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdYRightAxisComponent.prototype, "show", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdYRightAxisComponent.prototype, "grid", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdYRightAxisComponent.prototype, "ticks", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.TdYRightAxisComponent.prototype, "legend", void 0);
exports.TdYRightAxisComponent = __decorate([
    _angular_core.Component({
        selector: 'td-axis-y-right',
        template: '',
    }),
    __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdChartsComponent; }))),
    __metadata("design:paramtypes", [exports.TdChartsComponent])
], exports.TdYRightAxisComponent);
exports.TdXAxisComponent = (function () {
    function TdXAxisComponent(_parent) {
        this._parent = _parent;
        this.show = true;
        this.grid = false;
        this.ticks = false;
    }
    TdXAxisComponent.prototype.draw = function (svg) {
        var x = this.link.x;
        svg.append('g')
            .attr('display', this.show && this.grid ? 'display' : 'none')
            .attr('class', 'grid')
            .attr('transform', 'translate(0,' + this._parent.height + ')')
            .call(d3.axisBottom(x)
            .tickSize(-this._parent.height)
            .tickFormat(''));
        svg.append('text')
            .attr('display', this.show ? 'display' : 'none')
            .classed('axisTitle', true)
            .attr('transform', 'translate(' + (this._parent.width / 2 - 20) + ',' + (this._parent.height + 40) + ')')
            .text(this.legend);
        var ticks = svg.append('g')
            .attr('class', 'ticks ticks-x')
            .attr('transform', 'translate(0,' + this._parent.height + ')')
            .attr('display', this.show ? 'display' : 'none')
            .call(d3.axisBottom(x));
        ticks
            .selectAll('.tick line')
            .attr('display', this.show && this.ticks ? 'display' : 'none');
        ticks
            .selectAll('.tick text')
            .attr('display', this.show && this.ticks ? 'display' : 'none');
    };
    return TdXAxisComponent;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", ChartComponent)
], exports.TdXAxisComponent.prototype, "link", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdXAxisComponent.prototype, "show", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdXAxisComponent.prototype, "grid", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdXAxisComponent.prototype, "ticks", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.TdXAxisComponent.prototype, "legend", void 0);
exports.TdXAxisComponent = __decorate([
    _angular_core.Component({
        selector: 'td-axis-x',
        template: '',
    }),
    __param(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdChartsComponent; }))),
    __metadata("design:paramtypes", [exports.TdChartsComponent])
], exports.TdXAxisComponent);
exports.TdChartsComponent = (function () {
    function TdChartsComponent(elementRef) {
        this._paletteMap = new Map();
        // Core color palettes.
        this._mdRed = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f',
            '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000'];
        this._mdPink = ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b',
            '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162'];
        this._mdPurple = ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2',
            '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff'];
        this._mdDeepPurple = ['#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1',
            '#512da8', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea'];
        this._mdIndigo = ['#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f',
            '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe'];
        this._mdBlue = ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2',
            '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff'];
        this._mdLightBlue = ['#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5',
            '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea'];
        this._mdCyan = ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7',
            '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4'];
        this._mdTeal = ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b',
            '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5'];
        this._mdGreen = ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c',
            '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853'];
        this._mdLightGreen = ['#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342',
            '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17'];
        this._mdLime = ['#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b',
            '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00'];
        this._mdYellow = ['#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d',
            '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600'];
        this._mdAmber = ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000',
            '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00'];
        this._mdOrange = ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00',
            '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00'];
        this._mdDeepOrange = ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e',
            '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00'];
        this._mdBrown = ['#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037',
            '#4e342e', '#3e2723', '#d7ccc8', '#bcaaa4', '#8d6e63', '#5d4037'];
        this._mdGrey = ['#ffffff', '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575',
            '#616161', '#424242', '#212121', '#000000', '#ffffff', '#eeeeee', '#bdbdbd', '#616161'];
        this._mdBlueGrey = ['#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a',
            '#455a64', '#37474f', '#263238', '#cfd8dc', '#b0bec5', '#78909c', '#455a64'];
        this._margin = { top: 50, right: 80, bottom: 50, left: 50 };
        this.chartCount = 0;
        this.chartTotal = 0;
        this.title = '';
        this.fillOpacity = 1;
        this.shadow = false;
        this.shadowColor = 'rgba(0, 0, 0, 0.54)';
        this.shadowDepth = ['125%', 2, 0, 2];
        this.chartHeight = 450;
        this.offset = function (data) { return 0; };
        this.container = elementRef.nativeElement;
        this._paletteMap.set('red', this._mdRed);
        this._paletteMap.set('pink', this._mdPink);
        this._paletteMap.set('purple', this._mdPurple);
        this._paletteMap.set('deepPurple', this._mdDeepPurple);
        this._paletteMap.set('indigo', this._mdIndigo);
        this._paletteMap.set('blue', this._mdBlue);
        this._paletteMap.set('lightBlue', this._mdLightBlue);
        this._paletteMap.set('cyan', this._mdCyan);
        this._paletteMap.set('teal', this._mdTeal);
        this._paletteMap.set('green', this._mdGreen);
        this._paletteMap.set('lightGreen', this._mdLightGreen);
        this._paletteMap.set('lime', this._mdLime);
        this._paletteMap.set('yellow', this._mdYellow);
        this._paletteMap.set('amber', this._mdAmber);
        this._paletteMap.set('orange', this._mdOrange);
        this._paletteMap.set('deepOrange', this._mdDeepOrange);
        this._paletteMap.set('brown', this._mdBrown);
        this._paletteMap.set('grey', this._mdGrey);
        this._paletteMap.set('blueGrey', this._mdBlueGrey);
    }
    Object.defineProperty(TdChartsComponent.prototype, "margin", {
        get: function () {
            return this._margin;
        },
        set: function (margin) {
            if (margin.bottom) {
                this._margin.bottom = margin.bottom;
            }
            if (margin.left) {
                this._margin.left = margin.left;
            }
            if (margin.right) {
                this._margin.right = margin.right;
            }
            if (margin.top) {
                this._margin.top = margin.top;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChartsComponent.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChartsComponent.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChartsComponent.prototype, "chartBar", {
        set: function (chartBar) {
            var _this = this;
            if (chartBar) {
                this.offset = function (data) {
                    return _this.width / data.length;
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    TdChartsComponent.prototype.ngOnInit = function () {
        this._width = 960 - this._margin.left - this._margin.right;
        this._height = this.chartHeight - this._margin.top - this._margin.bottom;
        var viewBoxWidth = this._width + this._margin.left + this._margin.right;
        var viewBoxHeight = this._height + this._margin.top + this._margin.bottom;
        d3.select(this.container)
            .classed('svg-container', true)
            .attr('title', '')
            .append('svg')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr('viewBox', '0 0 ' + viewBoxWidth + ' ' + (viewBoxHeight))
            .classed('svg-content-responsive', true)
            .append('g')
            .classed('chartG', true)
            .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');
    };
    TdChartsComponent.prototype.drawAxis = function () {
        var svg = d3.select(this.container)
            .selectAll('.chartG');
        if (this.leftYAxis) {
            this.leftYAxis.draw(svg);
        }
        if (this.rightYAxis) {
            this.rightYAxis.draw(svg);
        }
        if (this.xAxis) {
            this.xAxis.draw(svg);
        }
    };
    TdChartsComponent.prototype.drawContainer = function () {
        this.chartCount++;
        if (this.chartCount === this.chartTotal) {
            this.drawAxis();
        }
        var defs = d3.select(this.container)
            .select('svg')
            .append('defs');
        var svg = d3.select(this.container)
            .selectAll('.chartG');
        svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('transform', 'translate(' + (this._width / 2) + ',' + (0 - (this._margin.top / 2)) + ')')
            .text(this.title)
            .attr('class', 'md-title');
        var defsStr = Math.random().toString().slice(2);
        var defsClass = 'drop-shadow' + defsStr;
        var filter = defs.append('filter')
            .attr('id', defsClass);
        filter
            .attr('height', this.shadow ? this.shadowDepth[0] : '125%');
        filter.append('feGaussianBlur')
            .attr('in', 'SourceAlpha')
            .attr('stdDeviation', this.shadow ? this.shadowDepth[1] : 0)
            .attr('result', 'blur');
        filter.append('feOffset')
            .attr('in', 'blur')
            .attr('dx', this.shadow ? this.shadowDepth[2] : 0)
            .attr('dy', this.shadow ? this.shadowDepth[3] : 0)
            .attr('result', 'offsetBlur');
        filter.append('feFlood')
            .attr('flood-color', this.shadowColor);
        filter.append('feComposite')
            .attr('in2', 'offsetBlur')
            .attr('operator', 'in');
        var feMerge = filter.append('feMerge');
        feMerge.append('feMergeNode');
        feMerge.append('feMergeNode')
            .attr('in', 'SourceGraphic');
        var feComponentTransfer = filter.append('feComponentTransfer');
        feComponentTransfer.append('feFuncA')
            .attr('type', 'linear')
            .attr('slope', this.fillOpacity);
        return defsClass;
    };
    /**
     * Method to generate color Palette.
     */
    TdChartsComponent.prototype.generatePalette = function (firstColor, secondColor) {
        if (this._paletteMap.get(firstColor) && this._paletteMap.get(secondColor)) {
            return this._paletteMap.get(firstColor).slice(0, 6)
                .concat(this._paletteMap.get(secondColor).slice(6, 14));
        }
        return undefined;
    };
    return TdChartsComponent;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], exports.TdChartsComponent.prototype, "margin", null);
__decorate([
    _angular_core.ContentChild(exports.TdXAxisComponent),
    __metadata("design:type", exports.TdXAxisComponent)
], exports.TdChartsComponent.prototype, "xAxis", void 0);
__decorate([
    _angular_core.ContentChild(exports.TdYLeftAxisComponent),
    __metadata("design:type", exports.TdYLeftAxisComponent)
], exports.TdChartsComponent.prototype, "leftYAxis", void 0);
__decorate([
    _angular_core.ContentChild(exports.TdYRightAxisComponent),
    __metadata("design:type", exports.TdYRightAxisComponent)
], exports.TdChartsComponent.prototype, "rightYAxis", void 0);
__decorate([
    _angular_core.ContentChild(TdChartBarComponent),
    __metadata("design:type", TdChartBarComponent),
    __metadata("design:paramtypes", [TdChartBarComponent])
], exports.TdChartsComponent.prototype, "chartBar", null);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.TdChartsComponent.prototype, "title", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], exports.TdChartsComponent.prototype, "fillOpacity", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.TdChartsComponent.prototype, "shadow", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.TdChartsComponent.prototype, "shadowColor", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Array)
], exports.TdChartsComponent.prototype, "shadowDepth", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], exports.TdChartsComponent.prototype, "chartHeight", void 0);
exports.TdChartsComponent = __decorate([
    _angular_core.Component({
        selector: 'td-charts',
        styles: [":host { display: block; } :host /deep/ .grid path { stroke-width: 0; } :host /deep/ .axisTitle { font-size: 11px; font-weight: bold; } :host /deep/ .line { fill: none; stroke-width: 2px; } "],
        template: "<div class='charts'> </div> ",
    }),
    __metadata("design:paramtypes", [_angular_core.ElementRef])
], exports.TdChartsComponent);

var __extends$1 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$3 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable-next-line */
var d3$3 = require('d3');
var TdChartLineComponent = (function (_super) {
    __extends$1(TdChartLineComponent, _super);
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
        var t = d3$3.transition()
            .duration(this.transitionDuration)
            .delay(this.transitionDelay)
            .ease(d3$3.easeLinear);
        var parseTime = d3$3.timeParse('%d-%b-%y');
        var stringCol = function (record, bottomAxis) { return record[bottomAxis]; };
        var dateCol = function (record, bottomAxis) { return parseTime(record[bottomAxis]); };
        var row = this.timeSeries ? dateCol : stringCol;
        var xScale = this.timeSeries ? d3$3.scaleTime : d3$3.scaleLinear;
        var offset = this._parent.offset(data);
        var x = xScale().range([offset / 2, this._parent.width - (offset / 2)]);
        var y = d3$3.scaleLinear().range([this._parent.height, 0]);
        this._x = x;
        this._y = y;
        var color = d3$3.scaleOrdinal(this.colors);
        var drawLine = d3$3.line()
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
        x.domain(d3$3.extent(data, function (d) { return row(d, _this.bottomAxis); }));
        y.domain([
            d3$3.min(lines, function (c) { return d3$3.min(c.values, function (d) { return d.yValue; }); }),
            d3$3.max(lines, function (c) { return d3$3.max(c.values, function (d) { return d.yValue; }); }),
        ]);
        var defsId = this._parent.drawContainer();
        var svg = d3$3.select(this._parent.container).selectAll('.chartG');
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
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", String),
    __metadata$2("design:paramtypes", [String])
], TdChartLineComponent.prototype, "dataSrc", null);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", Array),
    __metadata$2("design:paramtypes", [Array])
], TdChartLineComponent.prototype, "data", null);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], TdChartLineComponent.prototype, "bottomAxis", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", Boolean)
], TdChartLineComponent.prototype, "transition", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", Number)
], TdChartLineComponent.prototype, "transitionDuration", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", Number)
], TdChartLineComponent.prototype, "transitionDelay", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", Array)
], TdChartLineComponent.prototype, "columns", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", Array)
], TdChartLineComponent.prototype, "colors", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", Array)
], TdChartLineComponent.prototype, "titles", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$2("design:type", Boolean)
], TdChartLineComponent.prototype, "timeSeries", void 0);
TdChartLineComponent = __decorate$3([
    _angular_core.Component({
        selector: 'td-chart-line',
        styles: [""],
        template: "",
    }),
    __param$2(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdChartsComponent; }))),
    __metadata$2("design:paramtypes", [exports.TdChartsComponent,
        _angular_common.PlatformLocation])
], TdChartLineComponent);

var __extends$2 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$4 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable-next-line */
var d3$4 = require('d3');
var TdChartAreaComponent = (function (_super) {
    __extends$2(TdChartAreaComponent, _super);
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
        var x = d3$4.scaleLinear().range([offset / 2, this._parent.width - (offset / 2)]);
        var y = d3$4.scaleLinear().range([this._parent.height, 0]);
        this._x = x;
        this._y = y;
        var area = d3$4.area()
            .x(function (d) { return x(d[_this.bottomAxis]); })
            .y0(this._parent.height)
            .y1(function (d) { return y(d[_this.columns]); })
            .curve(d3$4.curveCardinal);
        var valueline = d3$4.line()
            .x(function (d) { return x(d[_this.bottomAxis]); })
            .y(function (d) { return y(d[_this.columns]); });
        data.forEach(function (d) {
            d[_this.bottomAxis] = d[_this.bottomAxis];
            d[_this.columns] = +d[_this.columns];
        });
        x.domain([
            d3$4.min(data, function (d) { return d[_this.bottomAxis]; }),
            d3$4.max(data, function (d) { return d[_this.bottomAxis]; }),
        ]);
        y.domain([0, d3$4.max(data, function (d) { return d[_this.columns]; })]);
        var defsId = this._parent.drawContainer();
        var svg = d3$4.select(this._parent.container).selectAll('.chartG');
        if (d3$4.select('#rectClip rect').size() === 0) {
            svg.append('clipPath')
                .attr('id', 'rectClip')
                .append('rect')
                .attr('width', 0)
                .attr('height', this._parent.height);
        }
        if (this.transition === true) {
            d3$4.select('#rectClip rect')
                .transition().duration(this.transitionDuration)
                .delay(this.transitionDelay)
                .attr('width', this._parent.width);
        }
        else {
            d3$4.select('#rectClip rect')
                .attr('width', this._parent.width);
        }
        svg.append('g')
            .classed('chart-area', true);
        d3$4.select(this._parent.container).selectAll('.chart-area')
            .append('path')
            .data([data])
            .attr('class', 'area')
            .attr('fill', this.colors[0])
            .attr('stroke', this.colors[1])
            .attr('d', area)
            .attr('clip-path', 'url(' + this._platformLocation.pathname + '#rectClip)')
            .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');
        d3$4.select(this._parent.container).selectAll('.chart-area')
            .append('path')
            .data([data])
            .attr('class', 'line')
            .attr('d', valueline)
            .attr('clip-path', 'url(' + this._platformLocation.pathname + '#rectClip)')
            .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');
    };
    return TdChartAreaComponent;
}(ChartComponent));
__decorate$4([
    _angular_core.Input(),
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [String])
], TdChartAreaComponent.prototype, "dataSrc", null);
__decorate$4([
    _angular_core.Input(),
    __metadata$3("design:type", Array),
    __metadata$3("design:paramtypes", [Array])
], TdChartAreaComponent.prototype, "data", null);
__decorate$4([
    _angular_core.Input(),
    __metadata$3("design:type", String)
], TdChartAreaComponent.prototype, "bottomAxis", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$3("design:type", Boolean)
], TdChartAreaComponent.prototype, "transition", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$3("design:type", Number)
], TdChartAreaComponent.prototype, "transitionDuration", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$3("design:type", Number)
], TdChartAreaComponent.prototype, "transitionDelay", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$3("design:type", String)
], TdChartAreaComponent.prototype, "columns", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$3("design:type", Array)
], TdChartAreaComponent.prototype, "colors", void 0);
TdChartAreaComponent = __decorate$4([
    _angular_core.Component({
        selector: 'td-chart-area',
        styles: [""],
        template: "",
    }),
    __param$3(0, _angular_core.Inject(_angular_core.forwardRef(function () { return exports.TdChartsComponent; }))),
    __metadata$3("design:paramtypes", [exports.TdChartsComponent,
        _angular_common.PlatformLocation])
], TdChartAreaComponent);

var __decorate$2 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.CovalentChartsModule = CovalentChartsModule_1 = (function () {
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
exports.CovalentChartsModule = CovalentChartsModule_1 = __decorate$2([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
        ],
        declarations: [
            exports.TdYLeftAxisComponent,
            exports.TdYRightAxisComponent,
            exports.TdXAxisComponent,
            exports.TdChartsComponent,
            TdChartBarComponent,
            TdChartLineComponent,
            TdChartAreaComponent,
        ],
        exports: [
            exports.TdYLeftAxisComponent,
            exports.TdYRightAxisComponent,
            exports.TdXAxisComponent,
            exports.TdChartsComponent,
            TdChartBarComponent,
            TdChartLineComponent,
            TdChartAreaComponent,
        ],
    })
], exports.CovalentChartsModule);
var CovalentChartsModule_1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
