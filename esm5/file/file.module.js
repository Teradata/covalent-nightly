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
import { TdFileService } from './services/file.service';
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
                    providers: [TdFileService],
                },] }
    ];
    return CovalentFileModule;
}());
export { CovalentFileModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9maWxlLyIsInNvdXJjZXMiOlsiZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRWxELE9BQU8sR0FBZ0I7SUFDM0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtDQUMxQjtBQUVEO0lBQUE7SUFNaUMsQ0FBQzs7Z0JBTmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUNsRixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDbEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUMzQjs7SUFDZ0MseUJBQUM7Q0FBQSxBQU5sQyxJQU1rQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuaW1wb3J0IHsgVGRGaWxlU2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpbGUtc2VsZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpbGUtZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRGaWxlSW5wdXRDb21wb25lbnQsIFRkRmlsZUlucHV0TGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRGaWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZmlsZS5zZXJ2aWNlJztcblxuY29uc3QgVERfRklMRTogVHlwZTxhbnk+W10gPSBbXG4gIFRkRmlsZVNlbGVjdERpcmVjdGl2ZSxcbiAgVGRGaWxlRHJvcERpcmVjdGl2ZSxcbiAgVGRGaWxlVXBsb2FkQ29tcG9uZW50LFxuICBUZEZpbGVJbnB1dENvbXBvbmVudCxcbiAgVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIFBvcnRhbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1REX0ZJTEVdLFxuICBleHBvcnRzOiBbVERfRklMRV0sXG4gIHByb3ZpZGVyczogW1RkRmlsZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEZpbGVNb2R1bGUge31cbiJdfQ==