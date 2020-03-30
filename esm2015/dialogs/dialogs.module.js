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
import { TdWindowDialogComponent } from './window-dialog/window-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
/** @type {?} */
const TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
    TdWindowDialogComponent,
];
/** @type {?} */
const TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
export class CovalentDialogsModule {
}
CovalentDialogsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule,
                    MatDialogModule,
                    MatInputModule,
                    MatButtonModule,
                    MatToolbarModule,
                    MatTooltipModule,
                    MatIconModule,
                ],
                declarations: [TD_DIALOGS],
                exports: [TD_DIALOGS],
                providers: [TdDialogService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsiZGlhbG9ncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7TUFFakQsVUFBVSxHQUFnQjtJQUM5QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0NBQ3hCOztNQUVLLDJCQUEyQixHQUFnQjtJQUMvQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtDQUN4QjtBQWtCRCxNQUFNLE9BQU8scUJBQXFCOzs7WUFoQmpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxlQUFlO29CQUVmLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNyQixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5pbXBvcnQge1xuICBUZERpYWxvZ0NvbXBvbmVudCxcbiAgVGREaWFsb2dUaXRsZURpcmVjdGl2ZSxcbiAgVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlLFxuICBUZERpYWxvZ0NvbnRlbnREaXJlY3RpdmUsXG59IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkV2luZG93RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi93aW5kb3ctZGlhbG9nL3dpbmRvdy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuY29uc3QgVERfRElBTE9HUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQWxlcnREaWFsb2dDb21wb25lbnQsXG4gIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG4gIFRkRGlhbG9nQ29tcG9uZW50LFxuICBUZERpYWxvZ1RpdGxlRGlyZWN0aXZlLFxuICBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUsXG4gIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSxcbiAgVGRXaW5kb3dEaWFsb2dDb21wb25lbnQsXG5dO1xuXG5jb25zdCBURF9ESUFMT0dTX0VOVFJZX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gIFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1REX0RJQUxPR1NdLFxuICBleHBvcnRzOiBbVERfRElBTE9HU10sXG4gIHByb3ZpZGVyczogW1RkRGlhbG9nU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50RGlhbG9nc01vZHVsZSB7fVxuIl19