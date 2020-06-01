/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CovalentMenuModule } from '@covalent/core/menu';
import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { TdUserProfileComponent } from './user-profile.component';
var CovalentUserProfileModule = /** @class */ (function () {
    function CovalentUserProfileModule() {
    }
    CovalentUserProfileModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TdUserProfileComponent, TdUserProfileMenuComponent],
                    imports: [
                        CommonModule,
                        MatMenuModule,
                        MatIconModule,
                        MatButtonModule,
                        MatListModule,
                        /* covalent modules */
                        CovalentMenuModule,
                    ],
                    providers: [],
                    exports: [TdUserProfileComponent, TdUserProfileMenuComponent],
                },] }
    ];
    return CovalentUserProfileModule;
}());
export { CovalentUserProfileModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3VzZXItcHJvZmlsZS8iLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRTtJQUFBO0lBZXdDLENBQUM7O2dCQWZ4QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsMEJBQTBCLENBQUM7b0JBQ2xFLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGFBQWE7d0JBRWIsc0JBQXNCO3dCQUN0QixrQkFBa0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDO2lCQUM5RDs7SUFDdUMsZ0NBQUM7Q0FBQSxBQWZ6QyxJQWV5QztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5cbmltcG9ydCB7IENvdmFsZW50TWVudU1vZHVsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL21lbnUnO1xuXG5pbXBvcnQgeyBUZFVzZXJQcm9maWxlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlLW1lbnUvdXNlci1wcm9maWxlLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFRkVXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUZFVzZXJQcm9maWxlQ29tcG9uZW50LCBUZFVzZXJQcm9maWxlTWVudUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuXG4gICAgLyogY292YWxlbnQgbW9kdWxlcyAqL1xuICAgIENvdmFsZW50TWVudU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW1RkVXNlclByb2ZpbGVDb21wb25lbnQsIFRkVXNlclByb2ZpbGVNZW51Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRVc2VyUHJvZmlsZU1vZHVsZSB7fVxuIl19