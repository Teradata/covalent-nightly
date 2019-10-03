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
                    entryComponents: [TD_DIALOGS_ENTRY_COMPONENTS],
                },] }
    ];
    return CovalentDialogsModule;
}());
export { CovalentDialogsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3MvZGlhbG9ncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0lBRTVFLFVBQVUsR0FBZ0I7SUFDOUIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0NBQ3pCOztJQUVLLDJCQUEyQixHQUFnQjtJQUMvQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtDQUN4QjtBQUVEO0lBQUE7SUFNb0MsQ0FBQzs7Z0JBTnBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO29CQUN0RixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDckIsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQy9DOztJQUNtQyw0QkFBQztDQUFBLEFBTnJDLElBTXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbmltcG9ydCB7XG4gIFRkRGlhbG9nQ29tcG9uZW50LFxuICBUZERpYWxvZ1RpdGxlRGlyZWN0aXZlLFxuICBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUsXG4gIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSxcbn0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQWxlcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQtZGlhbG9nL3Byb21wdC1kaWFsb2cuY29tcG9uZW50JztcblxuY29uc3QgVERfRElBTE9HUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQWxlcnREaWFsb2dDb21wb25lbnQsXG4gIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG4gIFRkRGlhbG9nQ29tcG9uZW50LFxuICBUZERpYWxvZ1RpdGxlRGlyZWN0aXZlLFxuICBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUsXG4gIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSxcbl07XG5cbmNvbnN0IFREX0RJQUxPR1NfRU5UUllfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQWxlcnREaWFsb2dDb21wb25lbnQsXG4gIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVERfRElBTE9HU10sXG4gIGV4cG9ydHM6IFtURF9ESUFMT0dTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVERfRElBTE9HU19FTlRSWV9DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnREaWFsb2dzTW9kdWxlIHt9XG4iXX0=