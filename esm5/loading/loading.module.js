/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LOADING_PROVIDER } from './services/loading.service';
import { LOADING_FACTORY_PROVIDER } from './services/loading.factory';
import { TdLoadingDirective } from './directives/loading.directive';
import { TdLoadingComponent } from './loading.component';
/** @type {?} */
var TD_LOADING = [TdLoadingComponent, TdLoadingDirective];
/** @type {?} */
var TD_LOADING_ENTRY_COMPONENTS = [TdLoadingComponent];
var CovalentLoadingModule = /** @class */ (function () {
    function CovalentLoadingModule() {
    }
    CovalentLoadingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, MatProgressBarModule, MatProgressSpinnerModule, OverlayModule, PortalModule],
                    declarations: [TD_LOADING],
                    exports: [TD_LOADING],
                    providers: [LOADING_FACTORY_PROVIDER, LOADING_PROVIDER],
                    entryComponents: [TD_LOADING_ENTRY_COMPONENTS],
                },] }
    ];
    return CovalentLoadingModule;
}());
export { CovalentLoadingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlFLE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRixPQUFPLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRW5ELFVBQVUsR0FBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQzs7SUFFbEUsMkJBQTJCLEdBQWdCLENBQUMsa0JBQWtCLENBQUM7QUFFckU7SUFBQTtJQU9vQyxDQUFDOztnQkFQcEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO29CQUNwRyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDckIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3ZELGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUMvQzs7SUFDbUMsNEJBQUM7Q0FBQSxBQVByQyxJQU9xQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5cbmltcG9ydCB7IFRkTG9hZGluZ1NlcnZpY2UsIExPQURJTkdfUFJPVklERVIgfSBmcm9tICcuL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdGYWN0b3J5LCBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVIgfSBmcm9tICcuL3NlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeSc7XG5pbXBvcnQgeyBUZExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX0xPQURJTkc6IFR5cGU8YW55PltdID0gW1RkTG9hZGluZ0NvbXBvbmVudCwgVGRMb2FkaW5nRGlyZWN0aXZlXTtcblxuY29uc3QgVERfTE9BRElOR19FTlRSWV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtUZExvYWRpbmdDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRQcm9ncmVzc0Jhck1vZHVsZSwgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtURF9MT0FESU5HXSxcbiAgZXhwb3J0czogW1REX0xPQURJTkddLFxuICBwcm92aWRlcnM6IFtMT0FESU5HX0ZBQ1RPUllfUFJPVklERVIsIExPQURJTkdfUFJPVklERVJdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtURF9MT0FESU5HX0VOVFJZX0NPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudExvYWRpbmdNb2R1bGUge31cbiJdfQ==