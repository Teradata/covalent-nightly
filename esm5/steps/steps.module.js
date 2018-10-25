/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CovalentCommonModule } from '@covalent/core/common';
// Steps
import { TdStepsComponent } from './steps.component';
import { TdStepHeaderComponent } from './step-header/step-header.component';
import { TdStepBodyComponent } from './step-body/step-body.component';
import { TdStepComponent, TdStepLabelDirective, TdStepActionsDirective, TdStepSummaryDirective } from './step.component';
/** @type {?} */
var TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
];
var CovalentStepsModule = /** @class */ (function () {
    function CovalentStepsModule() {
    }
    CovalentStepsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                        MatRippleModule,
                        PortalModule,
                        ScrollDispatchModule,
                        CovalentCommonModule,
                    ],
                    declarations: [
                        TD_STEPS,
                    ],
                    exports: [
                        TD_STEPS,
                    ],
                },] }
    ];
    return CovalentStepsModule;
}());
export { CovalentStepsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJzdGVwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFDN0Qsc0JBQXNCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFcEQsUUFBUSxHQUFnQjtJQUM1QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBO0lBa0JBLENBQUM7O2dCQWxCQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixvQkFBb0I7cUJBQ3JCO29CQUNELFlBQVksRUFBRTt3QkFDWixRQUFRO3FCQUNUO29CQUNELE9BQU8sRUFBRTt3QkFDUCxRQUFRO3FCQUNUO2lCQUNGOztJQUdELDBCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FGWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTY3JvbGxEaXNwYXRjaE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgQ292YWxlbnRDb21tb25Nb2R1bGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG4vLyBTdGVwc1xuaW1wb3J0IHsgVGRTdGVwc0NvbXBvbmVudCB9IGZyb20gJy4vc3RlcHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcEJvZHlDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtYm9keS9zdGVwLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcENvbXBvbmVudCwgVGRTdGVwTGFiZWxEaXJlY3RpdmUsIFRkU3RlcEFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgICBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlIH0gZnJvbSAnLi9zdGVwLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX1NURVBTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRTdGVwc0NvbXBvbmVudCxcbiAgVGRTdGVwQ29tcG9uZW50LFxuICBUZFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gIFRkU3RlcEJvZHlDb21wb25lbnQsXG4gIFRkU3RlcExhYmVsRGlyZWN0aXZlLFxuICBUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlLFxuICBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsXG4gICAgQ292YWxlbnRDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX1NURVBTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfU1RFUFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50U3RlcHNNb2R1bGUge1xuXG59XG4iXX0=