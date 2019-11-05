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
                return typeof res !== 'undefined';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL3NlcnZpY2VzL2RhdGEtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFbEU7SUFBQTtLQTBFQztJQXRFQzs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsdUNBQVU7Ozs7Ozs7Ozs7Ozs7O0lBQVYsVUFBVyxJQUFXLEVBQUUsVUFBa0IsRUFBRSxVQUEyQixFQUFFLGVBQTBCO1FBQXZELDJCQUFBLEVBQUEsa0JBQTJCOztZQUMvRCxNQUFNLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM3RixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsSUFBUzs7b0JBQ3JCLEdBQUcsR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQyxHQUFXO29CQUNsRCxJQUFJLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7OzRCQUNyRCxZQUFZLEdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7OzRCQUNyQyxTQUFTLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVk7d0JBQ2hGLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDdkM7Z0JBQ0gsQ0FBQyxFQUFDO2dCQUNGLE9BQU8sT0FBTyxHQUFHLEtBQUssV0FBVyxDQUFDO1lBQ3BDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7Ozs7O0lBQ0gscUNBQVE7Ozs7Ozs7Ozs7OztJQUFSLFVBQVMsSUFBVyxFQUFFLE1BQWMsRUFBRSxTQUFzRTtRQUF0RSwwQkFBQSxFQUFBLFlBQXFDLHVCQUF1QixDQUFDLFNBQVM7UUFDMUcsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtZQUN0RyxJQUFJLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLENBQU0sRUFBRSxDQUFNOztvQkFDakIsS0FBSyxHQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7O29CQUN0QixLQUFLLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7b0JBQ3hCLFNBQVMsR0FBVyxDQUFDO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdEYsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDakU7cUJBQU07b0JBQ0wsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO3dCQUNqQixTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2hCO3lCQUFNLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTt3QkFDeEIsU0FBUyxHQUFHLENBQUMsQ0FBQztxQkFDZjtpQkFDRjtnQkFDRCxPQUFPLFNBQVMsR0FBRyxDQUFDLFNBQVMsS0FBSyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRzs7Ozs7Ozs7Ozs7OztJQUNILHFDQUFROzs7Ozs7Ozs7Ozs7SUFBUixVQUFTLElBQVcsRUFBRSxPQUFlLEVBQUUsS0FBYTtRQUNsRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBekVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs2QkFORDtDQThFQyxBQTFFRCxJQTBFQztTQXZFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNlYXJjaFRlcm06IHN0cmluZ1xuICAgKiAtIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZVxuICAgKiAtIGV4Y2x1ZGVkQ29sdW1uczogc3RyaW5nW10gPSBbXVxuICAgKlxuICAgKiBTZWFyY2hlcyBbZGF0YV0gcGFyYW1ldGVyIGZvciBbc2VhcmNoVGVybV0gbWF0Y2hlcyBhbmQgcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZW0uXG4gICAqL1xuICBmaWx0ZXJEYXRhKGRhdGE6IGFueVtdLCBzZWFyY2hUZXJtOiBzdHJpbmcsIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSwgZXhjbHVkZWRDb2x1bW5zPzogc3RyaW5nW10pOiBhbnlbXSB7XG4gICAgY29uc3QgZmlsdGVyOiBzdHJpbmcgPSBzZWFyY2hUZXJtID8gKGlnbm9yZUNhc2UgPyBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkgOiBzZWFyY2hUZXJtKSA6ICcnO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlczogYW55ID0gT2JqZWN0LmtleXMoaXRlbSkuZmluZCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAoIWV4Y2x1ZGVkQ29sdW1ucyB8fCBleGNsdWRlZENvbHVtbnMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJlSXRlbVZhbHVlOiBzdHJpbmcgPSAnJyArIGl0ZW1ba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZTogc3RyaW5nID0gaWdub3JlQ2FzZSA/IHByZUl0ZW1WYWx1ZS50b0xvd2VyQ2FzZSgpIDogcHJlSXRlbVZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1WYWx1ZS5pbmRleE9mKGZpbHRlcikgPiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZW9mIHJlcyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gc29ydEJ5OiBzdHJpbmdcbiAgICogLSBzb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nXG4gICAqXG4gICAqIFNvcnRzIFtkYXRhXSBwYXJhbWV0ZXIgYnkgW3NvcnRCeV0gYW5kIFtzb3J0T3JkZXJdIGFuZCByZXR1cm5zIHRoZSBzb3J0ZWQgZGF0YS5cbiAgICovXG4gIHNvcnREYXRhKGRhdGE6IGFueVtdLCBzb3J0Qnk6IHN0cmluZywgc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyk6IGFueVtdIHtcbiAgICBpZiAoc29ydEJ5KSB7XG4gICAgICBkYXRhID0gQXJyYXkuZnJvbShkYXRhKTsgLy8gQ2hhbmdlIHRoZSBhcnJheSByZWZlcmVuY2UgdG8gdHJpZ2dlciBPblB1c2ggYW5kIG5vdCBtdXRhdGUgb3JpZ2luYWwgYXJyYXlcbiAgICAgIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY29tcEE6IGFueSA9IGFbc29ydEJ5XTtcbiAgICAgICAgY29uc3QgY29tcEI6IGFueSA9IGJbc29ydEJ5XTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpKSAmJiAhTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKSkpIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSBOdW1iZXIucGFyc2VGbG9hdChjb21wQSkgLSBOdW1iZXIucGFyc2VGbG9hdChjb21wQik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbXBBIDwgY29tcEIpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29tcEEgPiBjb21wQikge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiAqIChzb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgPyAtMSA6IDEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIGZyb21Sb3c6IG51bWJlclxuICAgKiAtIHRvUm93OiA6IG51bWJlclxuICAgKlxuICAgKiBSZXR1cm5zIGEgc2VjdGlvbiBvZiB0aGUgW2RhdGFdIHBhcmFtZXRlciBzdGFydGluZyBmcm9tIFtmcm9tUm93XSBhbmQgZW5kaW5nIGluIFt0b1Jvd10uXG4gICAqL1xuICBwYWdlRGF0YShkYXRhOiBhbnlbXSwgZnJvbVJvdzogbnVtYmVyLCB0b1JvdzogbnVtYmVyKTogYW55W10ge1xuICAgIGlmIChmcm9tUm93ID49IDEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKGZyb21Sb3cgLSAxLCB0b1Jvdyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iXX0=