/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TdDialogComponent, TdDialogTitleDirective, TdDialogActionsDirective, TdDialogContentDirective, } from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdDialogService } from './services/dialog.service';
/** @type {?} */
var TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
/** @type {?} */
var TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
var CovalentDialogsModule = /** @class */ (function () {
    function CovalentDialogsModule() {
    }
    CovalentDialogsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule, MatDialogModule, MatInputModule, MatButtonModule],
                    declarations: [TD_DIALOGS],
                    exports: [TD_DIALOGS],
                    providers: [TdDialogService],
                },] }
    ];
    return CovalentDialogsModule;
}());
export { CovalentDialogsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsiZGlhbG9ncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQUV0RCxVQUFVLEdBQWdCO0lBQzlCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtDQUN6Qjs7SUFFSywyQkFBMkIsR0FBZ0I7SUFDL0Msc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7Q0FDeEI7QUFFRDtJQUFBO0lBTW9DLENBQUM7O2dCQU5wQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztvQkFDdEYsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUMxQixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3JCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDN0I7O0lBQ21DLDRCQUFDO0NBQUEsQUFOckMsSUFNcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuaW1wb3J0IHtcbiAgVGREaWFsb2dDb21wb25lbnQsXG4gIFRkRGlhbG9nVGl0bGVEaXJlY3RpdmUsXG4gIFRkRGlhbG9nQWN0aW9uc0RpcmVjdGl2ZSxcbiAgVGREaWFsb2dDb250ZW50RGlyZWN0aXZlLFxufSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRQcm9tcHREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3Byb21wdC1kaWFsb2cvcHJvbXB0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZSc7XG5cbmNvbnN0IFREX0RJQUxPR1M6IFR5cGU8YW55PltdID0gW1xuICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gIFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50LFxuICBUZERpYWxvZ0NvbXBvbmVudCxcbiAgVGREaWFsb2dUaXRsZURpcmVjdGl2ZSxcbiAgVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlLFxuICBUZERpYWxvZ0NvbnRlbnREaXJlY3RpdmUsXG5dO1xuXG5jb25zdCBURF9ESUFMT0dTX0VOVFJZX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gIFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1REX0RJQUxPR1NdLFxuICBleHBvcnRzOiBbVERfRElBTE9HU10sXG4gIHByb3ZpZGVyczogW1RkRGlhbG9nU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50RGlhbG9nc01vZHVsZSB7fVxuIl19