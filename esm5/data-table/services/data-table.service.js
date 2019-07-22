/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
import * as i0 from "@angular/core";
var TdDataTableService = /** @class */ (function () {
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
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    TdDataTableService.prototype.filterData = /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    function (data, searchTerm, ignoreCase, excludedColumns) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        /** @type {?} */
        var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter(function (item) {
                /** @type {?} */
                var res = Object.keys(item).find(function (key) {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        var preItemValue = ('' + item[key]);
                        /** @type {?} */
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
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    TdDataTableService.prototype.sortData = /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    function (data, sortBy, sortOrder) {
        if (sortOrder === void 0) { sortOrder = TdDataTableSortingOrder.Ascending; }
        if (sortBy) {
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
            data.sort(function (a, b) {
                /** @type {?} */
                var compA = a[sortBy];
                /** @type {?} */
                var compB = b[sortBy];
                /** @type {?} */
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
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    TdDataTableService.prototype.pageData = /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    function (data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    };
    TdDataTableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ TdDataTableService.ngInjectableDef = i0.defineInjectable({ factory: function TdDataTableService_Factory() { return new TdDataTableService(); }, token: TdDataTableService, providedIn: "root" });
    return TdDataTableService;
}());
export { TdDataTableService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFbEU7SUFBQTtLQTJFQztJQXRFQzs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsdUNBQVU7Ozs7Ozs7Ozs7Ozs7O0lBQVYsVUFBVyxJQUFXLEVBQUUsVUFBa0IsRUFBRSxVQUEyQixFQUFFLGVBQTBCO1FBQXZELDJCQUFBLEVBQUEsa0JBQTJCOztZQUNqRSxNQUFNLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMzRixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUzs7b0JBQ3JCLEdBQUcsR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVc7b0JBQ2xELElBQUksQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7NEJBQ3JELFlBQVksR0FBVyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7OzRCQUN2QyxTQUFTLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVk7d0JBQ2hGLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDdkM7Z0JBQ0gsQ0FBQyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7Ozs7O0lBQ0gscUNBQVE7Ozs7Ozs7Ozs7OztJQUFSLFVBQVMsSUFBVyxFQUFFLE1BQWMsRUFBRSxTQUFzRTtRQUF0RSwwQkFBQSxFQUFBLFlBQXFDLHVCQUF1QixDQUFDLFNBQVM7UUFDMUcsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtZQUN0RyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07O29CQUNuQixLQUFLLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7b0JBQ3RCLEtBQUssR0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDOztvQkFDdEIsU0FBUyxHQUFXLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUN0RixTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqRTtxQkFBTTtvQkFDTCxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7d0JBQ2pCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDaEI7eUJBQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO3dCQUN4QixTQUFTLEdBQUcsQ0FBQyxDQUFDO3FCQUNmO2lCQUNGO2dCQUNELE9BQU8sU0FBUyxHQUFHLENBQUMsU0FBUyxLQUFLLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7Ozs7O0lBQ0gscUNBQVE7Ozs7Ozs7Ozs7OztJQUFSLFVBQVMsSUFBVyxFQUFFLE9BQWUsRUFBRSxLQUFhO1FBQ2xELElBQUksT0FBTyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkExRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzZCQU5EO0NBK0VDLEFBM0VELElBMkVDO1NBeEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBzZWFyY2hUZXJtOiBzdHJpbmdcbiAgICogLSBpZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2VcbiAgICogLSBleGNsdWRlZENvbHVtbnM6IHN0cmluZ1tdID0gW11cbiAgICpcbiAgICogU2VhcmNoZXMgW2RhdGFdIHBhcmFtZXRlciBmb3IgW3NlYXJjaFRlcm1dIG1hdGNoZXMgYW5kIHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGVtLlxuICAgKi9cbiAgZmlsdGVyRGF0YShkYXRhOiBhbnlbXSwgc2VhcmNoVGVybTogc3RyaW5nLCBpZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UsIGV4Y2x1ZGVkQ29sdW1ucz86IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGxldCBmaWx0ZXI6IHN0cmluZyA9IHNlYXJjaFRlcm0gPyAoaWdub3JlQ2FzZSA/IHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSA6IHNlYXJjaFRlcm0pIDogJyc7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVzOiBhbnkgPSBPYmplY3Qua2V5cyhpdGVtKS5maW5kKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICghZXhjbHVkZWRDb2x1bW5zIHx8IGV4Y2x1ZGVkQ29sdW1ucy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVJdGVtVmFsdWU6IHN0cmluZyA9ICgnJyArIGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICBjb25zdCBpdGVtVmFsdWU6IHN0cmluZyA9IGlnbm9yZUNhc2UgPyBwcmVJdGVtVmFsdWUudG9Mb3dlckNhc2UoKSA6IHByZUl0ZW1WYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtVmFsdWUuaW5kZXhPZihmaWx0ZXIpID4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEodHlwZW9mIHJlcyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNvcnRCeTogc3RyaW5nXG4gICAqIC0gc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKlxuICAgKiBTb3J0cyBbZGF0YV0gcGFyYW1ldGVyIGJ5IFtzb3J0QnldIGFuZCBbc29ydE9yZGVyXSBhbmQgcmV0dXJucyB0aGUgc29ydGVkIGRhdGEuXG4gICAqL1xuICBzb3J0RGF0YShkYXRhOiBhbnlbXSwgc29ydEJ5OiBzdHJpbmcsIHNvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcpOiBhbnlbXSB7XG4gICAgaWYgKHNvcnRCeSkge1xuICAgICAgZGF0YSA9IEFycmF5LmZyb20oZGF0YSk7IC8vIENoYW5nZSB0aGUgYXJyYXkgcmVmZXJlbmNlIHRvIHRyaWdnZXIgT25QdXNoIGFuZCBub3QgbXV0YXRlIG9yaWdpbmFsIGFycmF5XG4gICAgICBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGxldCBjb21wQTogYW55ID0gYVtzb3J0QnldO1xuICAgICAgICBsZXQgY29tcEI6IGFueSA9IGJbc29ydEJ5XTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpKSAmJiAhTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKSkpIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSBOdW1iZXIucGFyc2VGbG9hdChjb21wQSkgLSBOdW1iZXIucGFyc2VGbG9hdChjb21wQik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbXBBIDwgY29tcEIpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29tcEEgPiBjb21wQikge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiAqIChzb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgPyAtMSA6IDEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIGZyb21Sb3c6IG51bWJlclxuICAgKiAtIHRvUm93OiA6IG51bWJlclxuICAgKlxuICAgKiBSZXR1cm5zIGEgc2VjdGlvbiBvZiB0aGUgW2RhdGFdIHBhcmFtZXRlciBzdGFydGluZyBmcm9tIFtmcm9tUm93XSBhbmQgZW5kaW5nIGluIFt0b1Jvd10uXG4gICAqL1xuICBwYWdlRGF0YShkYXRhOiBhbnlbXSwgZnJvbVJvdzogbnVtYmVyLCB0b1JvdzogbnVtYmVyKTogYW55W10ge1xuICAgIGlmIChmcm9tUm93ID49IDEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKGZyb21Sb3cgLSAxLCB0b1Jvdyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iXX0=