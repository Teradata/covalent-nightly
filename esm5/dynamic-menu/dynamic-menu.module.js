/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TdDynamicMenuComponent } from './dynamic-menu.component';
import { TdDynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';
var CovalentDynamicMenuModule = /** @class */ (function () {
    function CovalentDynamicMenuModule() {
    }
    CovalentDynamicMenuModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TdDynamicMenuComponent, TdDynamicMenuItemComponent],
                    imports: [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatTooltipModule],
                    providers: [],
                    exports: [TdDynamicMenuComponent, TdDynamicMenuItemComponent],
                },] }
    ];
    return CovalentDynamicMenuModule;
}());
export { CovalentDynamicMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2R5bmFtaWMtbWVudS8iLCJzb3VyY2VzIjpbImR5bmFtaWMtbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUU3RjtJQUFBO0lBTXdDLENBQUM7O2dCQU54QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsMEJBQTBCLENBQUM7b0JBQ2xFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3ZHLFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDO2lCQUM5RDs7SUFDdUMsZ0NBQUM7Q0FBQSxBQU56QyxJQU15QztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFRkRHluYW1pY01lbnVDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREeW5hbWljTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtbWVudS1pdGVtL2R5bmFtaWMtbWVudS1pdGVtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RkRHluYW1pY01lbnVDb21wb25lbnQsIFRkRHluYW1pY01lbnVJdGVtQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRNZW51TW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW1RkRHluYW1pY01lbnVDb21wb25lbnQsIFRkRHluYW1pY01lbnVJdGVtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnREeW5hbWljTWVudU1vZHVsZSB7fVxuIl19