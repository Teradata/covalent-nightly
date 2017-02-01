var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
var TdDataTableService = (function () {
    function TdDataTableService() {
    }
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     */
    TdDataTableService.prototype.filterData = function (data, searchTerm, ignoreCase) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter(function (item) {
                var res = Object.keys(item).find(function (key) {
                    var preItemValue = ('' + item[key]);
                    var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                    return itemValue.indexOf(filter) > -1;
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    };
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     */
    TdDataTableService.prototype.sortData = function (data, sortBy, sortOrder) {
        if (sortOrder === void 0) { sortOrder = TdDataTableSortingOrder.Ascending; }
        if (sortBy) {
            data.sort(function (a, b) {
                var compA = a[sortBy];
                var compB = b[sortBy];
                var direction = 0;
                if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                    direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                }
                else {
                    if (compA < compB) {
                        direction = -1;
                    }
                    else if (compA > compB) {
                        direction = 1;
                    }
                }
                return direction * (sortOrder === TdDataTableSortingOrder.Descending ? -1 : 1);
            });
        }
        return data;
    };
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     */
    TdDataTableService.prototype.pageData = function (data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    };
    return TdDataTableService;
}());
TdDataTableService = __decorate([
    Injectable()
], TdDataTableService);
export { TdDataTableService };
//# sourceMappingURL=data-table.service.js.map