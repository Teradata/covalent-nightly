/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
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
                        ScrollingModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbImxheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3Qiw0QkFBNEIsR0FDN0IsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNoRyxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLGdDQUFnQyxFQUNoQywrQkFBK0IsR0FDaEMsTUFBTSxvREFBb0QsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVsRixPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLCtCQUErQixFQUMvQixrQ0FBa0MsR0FDbkMsTUFBTSxpREFBaUQsQ0FBQzs7SUFFbkQsVUFBVSxHQUFnQjtJQUM5QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFFckIsb0JBQW9CO0lBRXBCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUU1Qix5QkFBeUI7SUFFekIsMkJBQTJCO0lBQzNCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBRS9CLHVCQUF1QjtJQUV2QiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLGtDQUFrQztDQUNuQztBQUVEO0lBQUE7SUFjbUMsQ0FBQzs7Z0JBZG5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUN0Qjs7SUFDa0MsMkJBQUM7Q0FBQSxBQWRwQyxJQWNvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBNYXRTaWRlbmF2TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuXG5pbXBvcnQgeyBUZExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExheW91dFRvZ2dsZURpcmVjdGl2ZSwgVGRMYXlvdXRDbG9zZURpcmVjdGl2ZSwgVGRMYXlvdXRPcGVuRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXlvdXQuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBUZExheW91dE5hdkNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW5hdi9sYXlvdXQtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExheW91dE5hdkxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1uYXYtbGlzdC9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFRkTGF5b3V0TmF2TGlzdFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXROYXZMaXN0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TmF2TGlzdE9wZW5EaXJlY3RpdmUsXG59IGZyb20gJy4vbGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRkTGF5b3V0Q2FyZE92ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1jYXJkLW92ZXIvbGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbWFuYWdlLWxpc3QvbGF5b3V0LW1hbmFnZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBUZExheW91dE1hbmFnZUxpc3RUb2dnbGVEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdENsb3NlRGlyZWN0aXZlLFxuICBUZExheW91dE1hbmFnZUxpc3RPcGVuRGlyZWN0aXZlLFxufSBmcm9tICcuL2xheW91dC1tYW5hZ2UtbGlzdC9sYXlvdXQtbWFuYWdlLWxpc3QuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBUZExheW91dEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWZvb3Rlci9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7XG4gIFRkTmF2aWdhdGlvbkRyYXdlckNvbXBvbmVudCxcbiAgVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSxcbiAgVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uLWRyYXdlci9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQnO1xuXG5jb25zdCBURF9MQVlPVVRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRMYXlvdXRDb21wb25lbnQsXG4gIFRkTGF5b3V0VG9nZ2xlRGlyZWN0aXZlLFxuICBUZExheW91dENsb3NlRGlyZWN0aXZlLFxuICBUZExheW91dE9wZW5EaXJlY3RpdmUsXG5cbiAgVGRMYXlvdXROYXZDb21wb25lbnQsXG5cbiAgVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICBUZExheW91dE5hdkxpc3RUb2dnbGVEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TmF2TGlzdENsb3NlRGlyZWN0aXZlLFxuICBUZExheW91dE5hdkxpc3RPcGVuRGlyZWN0aXZlLFxuXG4gIFRkTGF5b3V0Q2FyZE92ZXJDb21wb25lbnQsXG5cbiAgVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICBUZExheW91dE1hbmFnZUxpc3RUb2dnbGVEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdENsb3NlRGlyZWN0aXZlLFxuICBUZExheW91dE1hbmFnZUxpc3RPcGVuRGlyZWN0aXZlLFxuXG4gIFRkTGF5b3V0Rm9vdGVyQ29tcG9uZW50LFxuXG4gIFRkTmF2aWdhdGlvbkRyYXdlckNvbXBvbmVudCxcbiAgVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSxcbiAgVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2Nyb2xsaW5nTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1REX0xBWU9VVFNdLFxuICBleHBvcnRzOiBbVERfTEFZT1VUU10sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TGF5b3V0TW9kdWxlIHt9XG4iXX0=