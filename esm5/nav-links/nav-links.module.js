/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { TdNavLinksComponent } from './nav-links.component';
var CovalentNavLinksModule = /** @class */ (function () {
    function CovalentNavLinksModule() {
    }
    CovalentNavLinksModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TdNavLinksComponent],
                    // directives, components, and pipes owned by this NgModule
                    exports: [TdNavLinksComponent],
                    imports: [
                        CommonModule,
                        CovalentCommonModule,
                        CovalentExpansionPanelModule,
                        MatListModule,
                        MatIconModule,
                        MatDividerModule,
                        RouterModule,
                    ],
                },] }
    ];
    return CovalentNavLinksModule;
}());
export { CovalentNavLinksModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL25hdi1saW5rcy8iLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVEO0lBQUE7SUFhcUMsQ0FBQzs7Z0JBYnJDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUM5QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLDRCQUE0Qjt3QkFDNUIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsWUFBWTtxQkFDYjtpQkFDRjs7SUFDb0MsNkJBQUM7Q0FBQSxBQWJ0QyxJQWFzQztTQUF6QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuXG5pbXBvcnQgeyBDb3ZhbGVudENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5pbXBvcnQgeyBDb3ZhbGVudEV4cGFuc2lvblBhbmVsTW9kdWxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvZXhwYW5zaW9uLXBhbmVsJztcblxuaW1wb3J0IHsgVGROYXZMaW5rc0NvbXBvbmVudCB9IGZyb20gJy4vbmF2LWxpbmtzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RkTmF2TGlua3NDb21wb25lbnRdLCAvLyBkaXJlY3RpdmVzLCBjb21wb25lbnRzLCBhbmQgcGlwZXMgb3duZWQgYnkgdGhpcyBOZ01vZHVsZVxuICBleHBvcnRzOiBbVGROYXZMaW5rc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ292YWxlbnRDb21tb25Nb2R1bGUsXG4gICAgQ292YWxlbnRFeHBhbnNpb25QYW5lbE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gIF0sIC8vIG1vZHVsZXMgbmVlZGVkIHRvIHJ1biB0aGlzIG1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudE5hdkxpbmtzTW9kdWxlIHt9XG4iXX0=