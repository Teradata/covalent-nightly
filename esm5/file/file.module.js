/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TdFileSelectDirective } from './directives/file-select.directive';
import { TdFileDropDirective } from './directives/file-drop.directive';
import { TdFileUploadComponent } from './file-upload/file-upload.component';
import { TdFileInputComponent, TdFileInputLabelDirective } from './file-input/file-input.component';
/** @type {?} */
var TD_FILE = [
    TdFileSelectDirective,
    TdFileDropDirective,
    TdFileUploadComponent,
    TdFileInputComponent,
    TdFileInputLabelDirective,
];
var CovalentFileModule = /** @class */ (function () {
    function CovalentFileModule() {
    }
    CovalentFileModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, PortalModule],
                    declarations: [TD_FILE],
                    exports: [TD_FILE],
                },] }
    ];
    return CovalentFileModule;
}());
export { CovalentFileModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9maWxlLyIsInNvdXJjZXMiOlsiZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0lBRTlGLE9BQU8sR0FBZ0I7SUFDM0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtDQUMxQjtBQUVEO0lBQUE7SUFLaUMsQ0FBQzs7Z0JBTGpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUNsRixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztpQkFDbkI7O0lBQ2dDLHlCQUFDO0NBQUEsQUFMbEMsSUFLa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbmltcG9ydCB7IFRkRmlsZVNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9maWxlLXNlbGVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRGaWxlRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9maWxlLWRyb3AuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRmlsZUlucHV0Q29tcG9uZW50LCBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50JztcblxuY29uc3QgVERfRklMRTogVHlwZTxhbnk+W10gPSBbXG4gIFRkRmlsZVNlbGVjdERpcmVjdGl2ZSxcbiAgVGRGaWxlRHJvcERpcmVjdGl2ZSxcbiAgVGRGaWxlVXBsb2FkQ29tcG9uZW50LFxuICBUZEZpbGVJbnB1dENvbXBvbmVudCxcbiAgVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIFBvcnRhbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1REX0ZJTEVdLFxuICBleHBvcnRzOiBbVERfRklMRV0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50RmlsZU1vZHVsZSB7fVxuIl19