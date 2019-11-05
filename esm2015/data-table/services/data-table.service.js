/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                /** @type {?} */
                const res = Object.keys(item).find((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        const preItemValue = '' + item[key];
                        /** @type {?} */
                        const itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                }));
                return typeof res !== 'undefined';
            }));
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
            data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                /** @type {?} */
                const compA = a[sortBy];
                /** @type {?} */
                const compB = b[sortBy];
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
            }));
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
/** @nocollapse */ TdDataTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TdDataTableService_Factory() { return new TdDataTableService(); }, token: TdDataTableService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL3NlcnZpY2VzL2RhdGEtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFLbEUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7O0lBVTdCLFVBQVUsQ0FBQyxJQUFXLEVBQUUsVUFBa0IsRUFBRSxhQUFzQixLQUFLLEVBQUUsZUFBMEI7O2NBQzNGLE1BQU0sR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdGLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs7c0JBQ3pCLEdBQUcsR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtvQkFDdEQsSUFBSSxDQUFDLGVBQWUsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs4QkFDckQsWUFBWSxHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDOzs4QkFDckMsU0FBUyxHQUFXLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZO3dCQUNoRixPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZDO2dCQUNILENBQUMsRUFBQztnQkFDRixPQUFPLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7O0lBVUQsUUFBUSxDQUFDLElBQVcsRUFBRSxNQUFjLEVBQUUsWUFBcUMsdUJBQXVCLENBQUMsU0FBUztRQUMxRyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsNkVBQTZFO1lBQ3RHLElBQUksQ0FBQyxJQUFJOzs7OztZQUFDLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxFQUFFOztzQkFDckIsS0FBSyxHQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7O3NCQUN0QixLQUFLLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7b0JBQ3hCLFNBQVMsR0FBVyxDQUFDO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdEYsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDakU7cUJBQU07b0JBQ0wsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO3dCQUNqQixTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2hCO3lCQUFNLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTt3QkFDeEIsU0FBUyxHQUFHLENBQUMsQ0FBQztxQkFDZjtpQkFDRjtnQkFDRCxPQUFPLFNBQVMsR0FBRyxDQUFDLFNBQVMsS0FBSyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7O0lBVUQsUUFBUSxDQUFDLElBQVcsRUFBRSxPQUFlLEVBQUUsS0FBYTtRQUNsRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBekVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVNlcnZpY2Uge1xuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gc2VhcmNoVGVybTogc3RyaW5nXG4gICAqIC0gaWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlXG4gICAqIC0gZXhjbHVkZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdXG4gICAqXG4gICAqIFNlYXJjaGVzIFtkYXRhXSBwYXJhbWV0ZXIgZm9yIFtzZWFyY2hUZXJtXSBtYXRjaGVzIGFuZCByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlbS5cbiAgICovXG4gIGZpbHRlckRhdGEoZGF0YTogYW55W10sIHNlYXJjaFRlcm06IHN0cmluZywgaWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlLCBleGNsdWRlZENvbHVtbnM/OiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBmaWx0ZXI6IHN0cmluZyA9IHNlYXJjaFRlcm0gPyAoaWdub3JlQ2FzZSA/IHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSA6IHNlYXJjaFRlcm0pIDogJyc7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVzOiBhbnkgPSBPYmplY3Qua2V5cyhpdGVtKS5maW5kKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICghZXhjbHVkZWRDb2x1bW5zIHx8IGV4Y2x1ZGVkQ29sdW1ucy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVJdGVtVmFsdWU6IHN0cmluZyA9ICcnICsgaXRlbVtrZXldO1xuICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlOiBzdHJpbmcgPSBpZ25vcmVDYXNlID8gcHJlSXRlbVZhbHVlLnRvTG93ZXJDYXNlKCkgOiBwcmVJdGVtVmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVZhbHVlLmluZGV4T2YoZmlsdGVyKSA+IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcmVzICE9PSAndW5kZWZpbmVkJztcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBzb3J0Qnk6IHN0cmluZ1xuICAgKiAtIHNvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICpcbiAgICogU29ydHMgW2RhdGFdIHBhcmFtZXRlciBieSBbc29ydEJ5XSBhbmQgW3NvcnRPcmRlcl0gYW5kIHJldHVybnMgdGhlIHNvcnRlZCBkYXRhLlxuICAgKi9cbiAgc29ydERhdGEoZGF0YTogYW55W10sIHNvcnRCeTogc3RyaW5nLCBzb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nKTogYW55W10ge1xuICAgIGlmIChzb3J0QnkpIHtcbiAgICAgIGRhdGEgPSBBcnJheS5mcm9tKGRhdGEpOyAvLyBDaGFuZ2UgdGhlIGFycmF5IHJlZmVyZW5jZSB0byB0cmlnZ2VyIE9uUHVzaCBhbmQgbm90IG11dGF0ZSBvcmlnaW5hbCBhcnJheVxuICAgICAgZGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wQTogYW55ID0gYVtzb3J0QnldO1xuICAgICAgICBjb25zdCBjb21wQjogYW55ID0gYltzb3J0QnldO1xuICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQSkpICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEIpKSkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSAtIE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29tcEEgPCBjb21wQikge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wQSA+IGNvbXBCKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uICogKHNvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZyA/IC0xIDogMSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gZnJvbVJvdzogbnVtYmVyXG4gICAqIC0gdG9Sb3c6IDogbnVtYmVyXG4gICAqXG4gICAqIFJldHVybnMgYSBzZWN0aW9uIG9mIHRoZSBbZGF0YV0gcGFyYW1ldGVyIHN0YXJ0aW5nIGZyb20gW2Zyb21Sb3ddIGFuZCBlbmRpbmcgaW4gW3RvUm93XS5cbiAgICovXG4gIHBhZ2VEYXRhKGRhdGE6IGFueVtdLCBmcm9tUm93OiBudW1iZXIsIHRvUm93OiBudW1iZXIpOiBhbnlbXSB7XG4gICAgaWYgKGZyb21Sb3cgPj0gMSkge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoZnJvbVJvdyAtIDEsIHRvUm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiJdfQ==