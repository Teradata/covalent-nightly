/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            data = data.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var res = Object.keys(item).find((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        var preItemValue = '' + item[key];
                        /** @type {?} */
                        var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                }));
                return !(typeof res === 'undefined');
            }));
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
            data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
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
            }));
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
    /** @nocollapse */ TdDataTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TdDataTableService_Factory() { return new TdDataTableService(); }, token: TdDataTableService, providedIn: "root" });
    return TdDataTableService;
}());
export { TdDataTableService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL3NlcnZpY2VzL2RhdGEtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFbEU7SUFBQTtLQTBFQztJQXRFQzs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsdUNBQVU7Ozs7Ozs7Ozs7Ozs7O0lBQVYsVUFBVyxJQUFXLEVBQUUsVUFBa0IsRUFBRSxVQUEyQixFQUFFLGVBQTBCO1FBQXZELDJCQUFBLEVBQUEsa0JBQTJCOztZQUNqRSxNQUFNLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMzRixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsSUFBUzs7b0JBQ3JCLEdBQUcsR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQyxHQUFXO29CQUNsRCxJQUFJLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7OzRCQUNyRCxZQUFZLEdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7OzRCQUNyQyxTQUFTLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVk7d0JBQ2hGLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDdkM7Z0JBQ0gsQ0FBQyxFQUFDO2dCQUNGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7Ozs7O0lBQ0gscUNBQVE7Ozs7Ozs7Ozs7OztJQUFSLFVBQVMsSUFBVyxFQUFFLE1BQWMsRUFBRSxTQUFzRTtRQUF0RSwwQkFBQSxFQUFBLFlBQXFDLHVCQUF1QixDQUFDLFNBQVM7UUFDMUcsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtZQUN0RyxJQUFJLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLENBQU0sRUFBRSxDQUFNOztvQkFDbkIsS0FBSyxHQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7O29CQUN0QixLQUFLLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7b0JBQ3RCLFNBQVMsR0FBVyxDQUFDO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdEYsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDakU7cUJBQU07b0JBQ0wsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO3dCQUNqQixTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2hCO3lCQUFNLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTt3QkFDeEIsU0FBUyxHQUFHLENBQUMsQ0FBQztxQkFDZjtpQkFDRjtnQkFDRCxPQUFPLFNBQVMsR0FBRyxDQUFDLFNBQVMsS0FBSyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRzs7Ozs7Ozs7Ozs7OztJQUNILHFDQUFROzs7Ozs7Ozs7Ozs7SUFBUixVQUFTLElBQVcsRUFBRSxPQUFlLEVBQUUsS0FBYTtRQUNsRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBekVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs2QkFORDtDQThFQyxBQTFFRCxJQTBFQztTQXZFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNlYXJjaFRlcm06IHN0cmluZ1xuICAgKiAtIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZVxuICAgKiAtIGV4Y2x1ZGVkQ29sdW1uczogc3RyaW5nW10gPSBbXVxuICAgKlxuICAgKiBTZWFyY2hlcyBbZGF0YV0gcGFyYW1ldGVyIGZvciBbc2VhcmNoVGVybV0gbWF0Y2hlcyBhbmQgcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZW0uXG4gICAqL1xuICBmaWx0ZXJEYXRhKGRhdGE6IGFueVtdLCBzZWFyY2hUZXJtOiBzdHJpbmcsIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSwgZXhjbHVkZWRDb2x1bW5zPzogc3RyaW5nW10pOiBhbnlbXSB7XG4gICAgbGV0IGZpbHRlcjogc3RyaW5nID0gc2VhcmNoVGVybSA/IChpZ25vcmVDYXNlID8gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpIDogc2VhcmNoVGVybSkgOiAnJztcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IE9iamVjdC5rZXlzKGl0ZW0pLmZpbmQoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKCFleGNsdWRlZENvbHVtbnMgfHwgZXhjbHVkZWRDb2x1bW5zLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZUl0ZW1WYWx1ZTogc3RyaW5nID0gJycgKyBpdGVtW2tleV07XG4gICAgICAgICAgICBjb25zdCBpdGVtVmFsdWU6IHN0cmluZyA9IGlnbm9yZUNhc2UgPyBwcmVJdGVtVmFsdWUudG9Mb3dlckNhc2UoKSA6IHByZUl0ZW1WYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtVmFsdWUuaW5kZXhPZihmaWx0ZXIpID4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEodHlwZW9mIHJlcyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNvcnRCeTogc3RyaW5nXG4gICAqIC0gc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKlxuICAgKiBTb3J0cyBbZGF0YV0gcGFyYW1ldGVyIGJ5IFtzb3J0QnldIGFuZCBbc29ydE9yZGVyXSBhbmQgcmV0dXJucyB0aGUgc29ydGVkIGRhdGEuXG4gICAqL1xuICBzb3J0RGF0YShkYXRhOiBhbnlbXSwgc29ydEJ5OiBzdHJpbmcsIHNvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcpOiBhbnlbXSB7XG4gICAgaWYgKHNvcnRCeSkge1xuICAgICAgZGF0YSA9IEFycmF5LmZyb20oZGF0YSk7IC8vIENoYW5nZSB0aGUgYXJyYXkgcmVmZXJlbmNlIHRvIHRyaWdnZXIgT25QdXNoIGFuZCBub3QgbXV0YXRlIG9yaWdpbmFsIGFycmF5XG4gICAgICBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGxldCBjb21wQTogYW55ID0gYVtzb3J0QnldO1xuICAgICAgICBsZXQgY29tcEI6IGFueSA9IGJbc29ydEJ5XTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpKSAmJiAhTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKSkpIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSBOdW1iZXIucGFyc2VGbG9hdChjb21wQSkgLSBOdW1iZXIucGFyc2VGbG9hdChjb21wQik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbXBBIDwgY29tcEIpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29tcEEgPiBjb21wQikge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiAqIChzb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgPyAtMSA6IDEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIGZyb21Sb3c6IG51bWJlclxuICAgKiAtIHRvUm93OiA6IG51bWJlclxuICAgKlxuICAgKiBSZXR1cm5zIGEgc2VjdGlvbiBvZiB0aGUgW2RhdGFdIHBhcmFtZXRlciBzdGFydGluZyBmcm9tIFtmcm9tUm93XSBhbmQgZW5kaW5nIGluIFt0b1Jvd10uXG4gICAqL1xuICBwYWdlRGF0YShkYXRhOiBhbnlbXSwgZnJvbVJvdzogbnVtYmVyLCB0b1JvdzogbnVtYmVyKTogYW55W10ge1xuICAgIGlmIChmcm9tUm93ID49IDEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKGZyb21Sb3cgLSAxLCB0b1Jvdyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iXX0=