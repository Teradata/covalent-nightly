/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { TdDataTableComponent } from './data-table.component';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
import { TdDataTableRowComponent, TdDataTableColumnRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
/** @type {?} */
const TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableColumnRowComponent,
    TdDataTableTableComponent,
];
export class CovalentDataTableModule {
}
CovalentDataTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatCheckboxModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatPseudoCheckboxModule,
                ],
                declarations: [
                    TD_DATA_TABLE,
                ],
                exports: [
                    TD_DATA_TABLE,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7TUFFcEYsYUFBYSxHQUFnQjtJQUNqQyxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBRTVCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3Qix5QkFBeUI7Q0FDMUI7QUFpQkQsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBZm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYix1QkFBdUI7aUJBQ3hCO2dCQUNELFlBQVksRUFBRTtvQkFDWixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNlbGwvZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCwgVGREYXRhVGFibGVDb2x1bW5Sb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLXRhYmxlL2RhdGEtdGFibGUtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0YS10YWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5jb25zdCBURF9EQVRBX1RBQkxFOiBUeXBlPGFueT5bXSA9IFtcbiAgVGREYXRhVGFibGVDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUsXG5cbiAgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQsXG4gIFRkRGF0YVRhYmxlQ2VsbENvbXBvbmVudCxcbiAgVGREYXRhVGFibGVSb3dDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlQ29sdW1uUm93Q29tcG9uZW50LFxuICBUZERhdGFUYWJsZVRhYmxlQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0RBVEFfVEFCTEUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9EQVRBX1RBQkxFLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudERhdGFUYWJsZU1vZHVsZSB7XG5cbn1cbiJdfQ==