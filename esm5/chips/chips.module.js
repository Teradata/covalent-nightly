/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
var CovalentChipsModule = /** @class */ (function () {
    function CovalentChipsModule() {
    }
    CovalentChipsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ReactiveFormsModule, CommonModule, MatInputModule, MatIconModule, MatChipsModule, MatAutocompleteModule],
                    declarations: [TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective],
                    exports: [TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective],
                },] }
    ];
    return CovalentChipsModule;
}());
export { CovalentChipsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvIiwic291cmNlcyI6WyJjaGlwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRztJQUFBO0lBS2tDLENBQUM7O2dCQUxsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixDQUFDO29CQUNsSCxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsNkJBQTZCLENBQUM7b0JBQ2hGLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSw2QkFBNkIsQ0FBQztpQkFDNUU7O0lBQ2lDLDBCQUFDO0NBQUEsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuXG5pbXBvcnQgeyBUZENoaXBzQ29tcG9uZW50LCBUZENoaXBEaXJlY3RpdmUsIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlwcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0Q2hpcHNNb2R1bGUsIE1hdEF1dG9jb21wbGV0ZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RkQ2hpcHNDb21wb25lbnQsIFRkQ2hpcERpcmVjdGl2ZSwgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbVGRDaGlwc0NvbXBvbmVudCwgVGRDaGlwRGlyZWN0aXZlLCBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50Q2hpcHNNb2R1bGUge31cbiJdfQ==