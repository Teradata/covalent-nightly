/* tslint:disable-next-line */
var d3 = require('d3');
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
                json: d3.json,
                csv: d3.csv,
                tsv: d3.tsv,
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
export { ChartComponent };
//# sourceMappingURL=abstract-chart.component.js.map