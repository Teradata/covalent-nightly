/**
 * @fileoverview added by tsickle
 * Generated from: chips.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
export class CovalentChipsModule {
}
CovalentChipsModule.decorators = [
    { type: NgModule, args: [{
                imports: [ReactiveFormsModule, CommonModule, MatInputModule, MatIconModule, MatChipsModule, MatAutocompleteModule],
                declarations: [TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective],
                exports: [TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2NoaXBzLyIsInNvdXJjZXMiOlsiY2hpcHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT3JHLE1BQU0sT0FBTyxtQkFBbUI7OztZQUwvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixDQUFDO2dCQUNsSCxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsNkJBQTZCLENBQUM7Z0JBQ2hGLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSw2QkFBNkIsQ0FBQzthQUM1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcblxuaW1wb3J0IHsgVGRDaGlwc0NvbXBvbmVudCwgVGRDaGlwRGlyZWN0aXZlLCBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2hpcHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JlYWN0aXZlRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdENoaXBzTW9kdWxlLCBNYXRBdXRvY29tcGxldGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUZENoaXBzQ29tcG9uZW50LCBUZENoaXBEaXJlY3RpdmUsIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1RkQ2hpcHNDb21wb25lbnQsIFRkQ2hpcERpcmVjdGl2ZSwgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudENoaXBzTW9kdWxlIHt9XG4iXX0=