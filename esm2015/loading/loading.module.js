/**
 * @fileoverview added by tsickle
 * Generated from: loading.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const TD_LOADING = [TdLoadingComponent, TdLoadingDirective];
/** @type {?} */
const TD_LOADING_ENTRY_COMPONENTS = [TdLoadingComponent];
export class CovalentLoadingModule {
}
CovalentLoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatProgressBarModule, MatProgressSpinnerModule, OverlayModule, PortalModule],
                declarations: [TD_LOADING],
                exports: [TD_LOADING],
                providers: [LOADING_FACTORY_PROVIDER, LOADING_PROVIDER],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbImxvYWRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RSxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEYsT0FBTyxFQUFvQix3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUVuRCxVQUFVLEdBQWdCLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7O01BRWxFLDJCQUEyQixHQUFnQixDQUFDLGtCQUFrQixDQUFDO0FBUXJFLE1BQU0sT0FBTyxxQkFBcUI7OztZQU5qQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7Z0JBQ3BHLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNyQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQzthQUN4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuaW1wb3J0IHsgVGRMb2FkaW5nU2VydmljZSwgTE9BRElOR19QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkTG9hZGluZ0ZhY3RvcnksIExPQURJTkdfRkFDVE9SWV9QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5mYWN0b3J5JztcbmltcG9ydCB7IFRkTG9hZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcuY29tcG9uZW50JztcblxuY29uc3QgVERfTE9BRElORzogVHlwZTxhbnk+W10gPSBbVGRMb2FkaW5nQ29tcG9uZW50LCBUZExvYWRpbmdEaXJlY3RpdmVdO1xuXG5jb25zdCBURF9MT0FESU5HX0VOVFJZX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1RkTG9hZGluZ0NvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdFByb2dyZXNzQmFyTW9kdWxlLCBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1REX0xPQURJTkddLFxuICBleHBvcnRzOiBbVERfTE9BRElOR10sXG4gIHByb3ZpZGVyczogW0xPQURJTkdfRkFDVE9SWV9QUk9WSURFUiwgTE9BRElOR19QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TG9hZGluZ01vZHVsZSB7fVxuIl19