/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
import * as i0 from "@angular/core";
export class TdDataTableService {
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
    filterData(data, searchTerm, ignoreCase = false, excludedColumns) {
        /** @type {?} */
        let filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter((item) => {
                /** @type {?} */
                const res = Object.keys(item).find((key) => {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        const preItemValue = ('' + item[key]);
                        /** @type {?} */
                        const itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    }
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
    sortData(data, sortBy, sortOrder = TdDataTableSortingOrder.Ascending) {
        if (sortBy) {
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
            data.sort((a, b) => {
                /** @type {?} */
                let compA = a[sortBy];
                /** @type {?} */
                let compB = b[sortBy];
                /** @type {?} */
                let direction = 0;
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
    }
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
    pageData(data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    }
}
TdDataTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ TdDataTableService.ngInjectableDef = i0.defineInjectable({ factory: function TdDataTableService_Factory() { return new TdDataTableService(); }, token: TdDataTableService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFLbEUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7O0lBVzdCLFVBQVUsQ0FBQyxJQUFXLEVBQUUsVUFBa0IsRUFBRSxhQUFzQixLQUFLLEVBQUUsZUFBMEI7O1lBQzdGLE1BQU0sR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzNGLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs7c0JBQ3pCLEdBQUcsR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFO29CQUN0RCxJQUFJLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7OzhCQUNyRCxZQUFZLEdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs4QkFDdkMsU0FBUyxHQUFXLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZO3dCQUNoRixPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZDO2dCQUNILENBQUMsQ0FBQztnQkFDRixPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7O0lBVUQsUUFBUSxDQUFDLElBQVcsRUFBRSxNQUFjLEVBQUUsWUFBcUMsdUJBQXVCLENBQUMsU0FBUztRQUMxRyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsNkVBQTZFO1lBQ3RHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUU7O29CQUN2QixLQUFLLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7b0JBQ3RCLEtBQUssR0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDOztvQkFDdEIsU0FBUyxHQUFXLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUN0RixTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqRTtxQkFBTTtvQkFDTCxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7d0JBQ2pCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDaEI7eUJBQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO3dCQUN4QixTQUFTLEdBQUcsQ0FBQyxDQUFDO3FCQUNmO2lCQUNGO2dCQUNELE9BQU8sU0FBUyxHQUFHLENBQUMsU0FBUyxLQUFLLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFVRCxRQUFRLENBQUMsSUFBVyxFQUFFLE9BQWUsRUFBRSxLQUFhO1FBQ2xELElBQUksT0FBTyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUExRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNlYXJjaFRlcm06IHN0cmluZ1xuICAgKiAtIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZVxuICAgKiAtIGV4Y2x1ZGVkQ29sdW1uczogc3RyaW5nW10gPSBbXVxuICAgKlxuICAgKiBTZWFyY2hlcyBbZGF0YV0gcGFyYW1ldGVyIGZvciBbc2VhcmNoVGVybV0gbWF0Y2hlcyBhbmQgcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZW0uXG4gICAqL1xuICBmaWx0ZXJEYXRhKGRhdGE6IGFueVtdLCBzZWFyY2hUZXJtOiBzdHJpbmcsIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSwgZXhjbHVkZWRDb2x1bW5zPzogc3RyaW5nW10pOiBhbnlbXSB7XG4gICAgbGV0IGZpbHRlcjogc3RyaW5nID0gc2VhcmNoVGVybSA/IChpZ25vcmVDYXNlID8gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpIDogc2VhcmNoVGVybSkgOiAnJztcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IE9iamVjdC5rZXlzKGl0ZW0pLmZpbmQoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKCFleGNsdWRlZENvbHVtbnMgfHwgZXhjbHVkZWRDb2x1bW5zLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZUl0ZW1WYWx1ZTogc3RyaW5nID0gKCcnICsgaXRlbVtrZXldKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZTogc3RyaW5nID0gaWdub3JlQ2FzZSA/IHByZUl0ZW1WYWx1ZS50b0xvd2VyQ2FzZSgpIDogcHJlSXRlbVZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1WYWx1ZS5pbmRleE9mKGZpbHRlcikgPiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gISh0eXBlb2YgcmVzID09PSAndW5kZWZpbmVkJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gc29ydEJ5OiBzdHJpbmdcbiAgICogLSBzb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nXG4gICAqXG4gICAqIFNvcnRzIFtkYXRhXSBwYXJhbWV0ZXIgYnkgW3NvcnRCeV0gYW5kIFtzb3J0T3JkZXJdIGFuZCByZXR1cm5zIHRoZSBzb3J0ZWQgZGF0YS5cbiAgICovXG4gIHNvcnREYXRhKGRhdGE6IGFueVtdLCBzb3J0Qnk6IHN0cmluZywgc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyk6IGFueVtdIHtcbiAgICBpZiAoc29ydEJ5KSB7XG4gICAgICBkYXRhID0gQXJyYXkuZnJvbShkYXRhKTsgLy8gQ2hhbmdlIHRoZSBhcnJheSByZWZlcmVuY2UgdG8gdHJpZ2dlciBPblB1c2ggYW5kIG5vdCBtdXRhdGUgb3JpZ2luYWwgYXJyYXlcbiAgICAgIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGNvbXBBOiBhbnkgPSBhW3NvcnRCeV07XG4gICAgICAgIGxldCBjb21wQjogYW55ID0gYltzb3J0QnldO1xuICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQSkpICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEIpKSkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSAtIE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29tcEEgPCBjb21wQikge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wQSA+IGNvbXBCKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uICogKHNvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZyA/IC0xIDogMSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gZnJvbVJvdzogbnVtYmVyXG4gICAqIC0gdG9Sb3c6IDogbnVtYmVyXG4gICAqXG4gICAqIFJldHVybnMgYSBzZWN0aW9uIG9mIHRoZSBbZGF0YV0gcGFyYW1ldGVyIHN0YXJ0aW5nIGZyb20gW2Zyb21Sb3ddIGFuZCBlbmRpbmcgaW4gW3RvUm93XS5cbiAgICovXG4gIHBhZ2VEYXRhKGRhdGE6IGFueVtdLCBmcm9tUm93OiBudW1iZXIsIHRvUm93OiBudW1iZXIpOiBhbnlbXSB7XG4gICAgaWYgKGZyb21Sb3cgPj0gMSkge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoZnJvbVJvdyAtIDEsIHRvUm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiJdfQ==