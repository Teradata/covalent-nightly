/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TdLayoutComponent } from './layout.component';
import { TdLayoutToggleDirective, TdLayoutCloseDirective, TdLayoutOpenDirective } from './layout.directives';
import { TdLayoutNavComponent } from './layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout-nav-list/layout-nav-list.component';
import { TdLayoutNavListToggleDirective, TdLayoutNavListCloseDirective, TdLayoutNavListOpenDirective, } from './layout-nav-list/layout-nav-list.directives';
import { TdLayoutCardOverComponent } from './layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout-manage-list/layout-manage-list.component';
import { TdLayoutManageListToggleDirective, TdLayoutManageListCloseDirective, TdLayoutManageListOpenDirective, } from './layout-manage-list/layout-manage-list.directives';
import { TdLayoutFooterComponent } from './layout-footer/layout-footer.component';
import { TdNavigationDrawerComponent, TdNavigationDrawerMenuDirective, TdNavigationDrawerToolbarDirective, } from './navigation-drawer/navigation-drawer.component';
/** @type {?} */
var TD_LAYOUTS = [
    TdLayoutComponent,
    TdLayoutToggleDirective,
    TdLayoutCloseDirective,
    TdLayoutOpenDirective,
    TdLayoutNavComponent,
    TdLayoutNavListComponent,
    TdLayoutNavListToggleDirective,
    TdLayoutNavListCloseDirective,
    TdLayoutNavListOpenDirective,
    TdLayoutCardOverComponent,
    TdLayoutManageListComponent,
    TdLayoutManageListToggleDirective,
    TdLayoutManageListCloseDirective,
    TdLayoutManageListOpenDirective,
    TdLayoutFooterComponent,
    TdNavigationDrawerComponent,
    TdNavigationDrawerMenuDirective,
    TdNavigationDrawerToolbarDirective,
];
var CovalentLayoutModule = /** @class */ (function () {
    function CovalentLayoutModule() {
    }
    CovalentLayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ScrollDispatchModule,
                        MatSidenavModule,
                        MatToolbarModule,
                        MatButtonModule,
                        MatIconModule,
                        MatCardModule,
                        MatDividerModule,
                    ],
                    declarations: [TD_LAYOUTS],
                    exports: [TD_LAYOUTS],
                },] }
    ];
    return CovalentLayoutModule;
}());
export { CovalentLayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3Qiw0QkFBNEIsR0FDN0IsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNoRyxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLGdDQUFnQyxFQUNoQywrQkFBK0IsR0FDaEMsTUFBTSxvREFBb0QsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVsRixPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLCtCQUErQixFQUMvQixrQ0FBa0MsR0FDbkMsTUFBTSxpREFBaUQsQ0FBQzs7SUFFbkQsVUFBVSxHQUFnQjtJQUM5QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFFckIsb0JBQW9CO0lBRXBCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUU1Qix5QkFBeUI7SUFFekIsMkJBQTJCO0lBQzNCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBRS9CLHVCQUF1QjtJQUV2QiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLGtDQUFrQztDQUNuQztBQUVEO0lBQUE7SUFjbUMsQ0FBQzs7Z0JBZG5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUN0Qjs7SUFDa0MsMkJBQUM7Q0FBQSxBQWRwQyxJQWNvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5cbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTGF5b3V0VG9nZ2xlRGlyZWN0aXZlLCBUZExheW91dENsb3NlRGlyZWN0aXZlLCBUZExheW91dE9wZW5EaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRkTGF5b3V0TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2L2xheW91dC1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgVGRMYXlvdXROYXZMaXN0VG9nZ2xlRGlyZWN0aXZlLFxuICBUZExheW91dE5hdkxpc3RDbG9zZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXROYXZMaXN0T3BlbkRpcmVjdGl2ZSxcbn0gZnJvbSAnLi9sYXlvdXQtbmF2LWxpc3QvbGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWNhcmQtb3Zlci9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1tYW5hZ2UtbGlzdC9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdE9wZW5EaXJlY3RpdmUsXG59IGZyb20gJy4vbGF5b3V0LW1hbmFnZS1saXN0L2xheW91dC1tYW5hZ2UtbGlzdC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRkTGF5b3V0Rm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtZm9vdGVyL2xheW91dC1mb290ZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgVGROYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50LFxuICBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlLFxuICBUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlLFxufSBmcm9tICcuL25hdmlnYXRpb24tZHJhd2VyL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX0xBWU9VVFM6IFR5cGU8YW55PltdID0gW1xuICBUZExheW91dENvbXBvbmVudCxcbiAgVGRMYXlvdXRUb2dnbGVEaXJlY3RpdmUsXG4gIFRkTGF5b3V0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0T3BlbkRpcmVjdGl2ZSxcblxuICBUZExheW91dE5hdkNvbXBvbmVudCxcblxuICBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gIFRkTGF5b3V0TmF2TGlzdFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXROYXZMaXN0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TmF2TGlzdE9wZW5EaXJlY3RpdmUsXG5cbiAgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCxcblxuICBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdE9wZW5EaXJlY3RpdmUsXG5cbiAgVGRMYXlvdXRGb290ZXJDb21wb25lbnQsXG5cbiAgVGROYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50LFxuICBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlLFxuICBUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTY3JvbGxEaXNwYXRjaE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtURF9MQVlPVVRTXSxcbiAgZXhwb3J0czogW1REX0xBWU9VVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudExheW91dE1vZHVsZSB7fVxuIl19