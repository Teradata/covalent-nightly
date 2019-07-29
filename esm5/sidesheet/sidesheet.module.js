/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { TdSidesheetComponent, TdSidesheetHeaderComponent, TdSidesheetContentDirective, TdSidesheetTitleDirective, TdSidesheetActionsDirective, } from './sidesheet.component';
/** @type {?} */
var TD_SIDESHEET = [
    TdSidesheetComponent,
    TdSidesheetHeaderComponent,
    TdSidesheetContentDirective,
    TdSidesheetTitleDirective,
    TdSidesheetActionsDirective,
];
var CovalentSidesheetModule = /** @class */ (function () {
    function CovalentSidesheetModule() {
    }
    CovalentSidesheetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, MatDividerModule],
                    declarations: [TD_SIDESHEET],
                    exports: [TD_SIDESHEET],
                },] }
    ];
    return CovalentSidesheetModule;
}());
export { CovalentSidesheetModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXNoZWV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3NpZGVzaGVldC8iLCJzb3VyY2VzIjpbInNpZGVzaGVldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQix5QkFBeUIsRUFDekIsMkJBQTJCLEdBQzVCLE1BQU0sdUJBQXVCLENBQUM7O0lBRXpCLFlBQVksR0FBZ0I7SUFDaEMsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDJCQUEyQjtDQUM1QjtBQUVEO0lBQUE7SUFLc0MsQ0FBQzs7Z0JBTHRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pDLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFDcUMsOEJBQUM7Q0FBQSxBQUx2QyxJQUt1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuXG5pbXBvcnQge1xuICBUZFNpZGVzaGVldENvbXBvbmVudCxcbiAgVGRTaWRlc2hlZXRIZWFkZXJDb21wb25lbnQsXG4gIFRkU2lkZXNoZWV0Q29udGVudERpcmVjdGl2ZSxcbiAgVGRTaWRlc2hlZXRUaXRsZURpcmVjdGl2ZSxcbiAgVGRTaWRlc2hlZXRBY3Rpb25zRGlyZWN0aXZlLFxufSBmcm9tICcuL3NpZGVzaGVldC5jb21wb25lbnQnO1xuXG5jb25zdCBURF9TSURFU0hFRVQ6IFR5cGU8YW55PltdID0gW1xuICBUZFNpZGVzaGVldENvbXBvbmVudCxcbiAgVGRTaWRlc2hlZXRIZWFkZXJDb21wb25lbnQsXG4gIFRkU2lkZXNoZWV0Q29udGVudERpcmVjdGl2ZSxcbiAgVGRTaWRlc2hlZXRUaXRsZURpcmVjdGl2ZSxcbiAgVGRTaWRlc2hlZXRBY3Rpb25zRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1REX1NJREVTSEVFVF0sXG4gIGV4cG9ydHM6IFtURF9TSURFU0hFRVRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFNpZGVzaGVldE1vZHVsZSB7fVxuIl19