/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';
var CovalentSearchModule = /** @class */ (function () {
    function CovalentSearchModule() {
    }
    CovalentSearchModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule, MatInputModule, MatIconModule, MatButtonModule],
                    declarations: [TdSearchInputComponent, TdSearchBoxComponent],
                    exports: [TdSearchInputComponent, TdSearchBoxComponent],
                },] }
    ];
    return CovalentSearchModule;
}());
export { CovalentSearchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3NlYXJjaC8iLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RTtJQUFBO0lBS21DLENBQUM7O2dCQUxuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztvQkFDcEYsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUM7b0JBQzVELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDO2lCQUN4RDs7SUFDa0MsMkJBQUM7Q0FBQSxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuaW1wb3J0IHsgVGRTZWFyY2hJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RkU2VhcmNoSW5wdXRDb21wb25lbnQsIFRkU2VhcmNoQm94Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RkU2VhcmNoSW5wdXRDb21wb25lbnQsIFRkU2VhcmNoQm94Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRTZWFyY2hNb2R1bGUge31cbiJdfQ==