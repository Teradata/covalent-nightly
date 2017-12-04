import * as tslib_1 from "tslib";
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
var TdDataTableService = (function () {
    function TdDataTableService() {
    }
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     */
    TdDataTableService.prototype.filterData = function (data, searchTerm, ignoreCase, excludedColumns) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter(function (item) {
                var res = Object.keys(item).find(function (key) {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        var preItemValue = ('' + item[key]);
                        var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
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
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
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
    TdDataTableService = tslib_1.__decorate([
        Injectable()
    ], TdDataTableService);
    return TdDataTableService;
}());
export { TdDataTableService };
export function DATA_TABLE_PROVIDER_FACTORY(parent) {
    return parent || new TdDataTableService();
}
export var DATA_TABLE_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDataTableService,
    deps: [[new Optional(), new SkipSelf(), TdDataTableService]],
    useFactory: DATA_TABLE_PROVIDER_FACTORY,
};
//# sourceMappingURL=data-table.service.js.map