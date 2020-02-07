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
                },] }
    ];
    return CovalentLoadingModule;
}());
export { CovalentLoadingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hGLE9BQU8sRUFBb0Isd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFbkQsVUFBVSxHQUFnQixDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDOztJQUVsRSwyQkFBMkIsR0FBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUVyRTtJQUFBO0lBTW9DLENBQUM7O2dCQU5wQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7b0JBQ3BHLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNyQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDeEQ7O0lBQ21DLDRCQUFDO0NBQUEsQUFOckMsSUFNcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdTZXJ2aWNlLCBMT0FESU5HX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRMb2FkaW5nRmFjdG9yeSwgTE9BRElOR19GQUNUT1JZX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nLmZhY3RvcnknO1xuaW1wb3J0IHsgVGRMb2FkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy5jb21wb25lbnQnO1xuXG5jb25zdCBURF9MT0FESU5HOiBUeXBlPGFueT5bXSA9IFtUZExvYWRpbmdDb21wb25lbnQsIFRkTG9hZGluZ0RpcmVjdGl2ZV07XG5cbmNvbnN0IFREX0xPQURJTkdfRU5UUllfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbVGRMb2FkaW5nQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgUG9ydGFsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVERfTE9BRElOR10sXG4gIGV4cG9ydHM6IFtURF9MT0FESU5HXSxcbiAgcHJvdmlkZXJzOiBbTE9BRElOR19GQUNUT1JZX1BST1ZJREVSLCBMT0FESU5HX1BST1ZJREVSXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRMb2FkaW5nTW9kdWxlIHt9XG4iXX0=