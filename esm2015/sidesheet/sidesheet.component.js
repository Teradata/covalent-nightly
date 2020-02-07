/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Directive, Input, ViewEncapsulation } from '@angular/core';
export class TdSidesheetContentDirective {
}
TdSidesheetContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-content',
            },] }
];
export class TdSidesheetTitleDirective {
}
TdSidesheetTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-title',
            },] }
];
export class TdSidesheetActionsDirective {
    constructor() {
        this.align = 'start';
    }
}
TdSidesheetActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-actions',
                /* tslint:disable-next-line */
                host: {
                    '[class.align-end]': 'align === "end"',
                    '[class.align-start]': 'align === "start"',
                },
            },] }
];
TdSidesheetActionsDirective.propDecorators = {
    align: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdSidesheetActionsDirective.prototype.align;
}
export class TdSidesheetHeaderComponent {
}
TdSidesheetHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet-header',
                template: "<ng-content select=\"td-sidesheet-title\"></ng-content>\n<ng-content select=\"[mat-icon-button][td-sidesheet-header-action]\"></ng-content>\n"
            }] }
];
export class TdSidesheetComponent {
}
TdSidesheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet',
                template: "<ng-content select=\"td-sidesheet-header\"></ng-content>\n<ng-template [ngIf]=\"headerExists\">\n  <mat-divider></mat-divider>\n</ng-template>\n<div class=\"td-sidesheet-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf]=\"actionsExist\">\n  <mat-divider></mat-divider>\n</ng-template>\n<ng-content select=\"td-sidesheet-actions\"></ng-content>\n",
                // tslint:disable-next-line:use-component-view-encapsulation
                encapsulation: ViewEncapsulation.None,
                styles: ["td-sidesheet,td-sidesheet td-sidesheet-header{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}td-sidesheet{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0;width:100%;min-height:100%;height:100%}td-sidesheet td-sidesheet-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;padding:20px 16px;font-size:18px}td-sidesheet .mat-divider-horizontal{position:static!important}td-sidesheet td-sidesheet-title{-webkit-box-flex:1;-ms-flex:1;flex:1}td-sidesheet td-sidesheet-header .mat-button-focus-overlay{background-color:transparent!important}td-sidesheet td-sidesheet-header .mat-icon-button{width:24px;height:24px;line-height:21px}td-sidesheet td-sidesheet-actions{padding:8px;display:block}td-sidesheet .td-sidesheet-content-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto}td-sidesheet td-sidesheet-content{display:block;padding:16px}td-sidesheet-content>:first-child,td-sidesheet>:first-child{margin-top:0}td-sidesheet-content>:last-child,td-sidesheet>:last-child{margin-bottom:0}"]
            }] }
];
TdSidesheetComponent.propDecorators = {
    headerExists: [{ type: ContentChild, args: [TdSidesheetHeaderComponent,] }],
    actionsExist: [{ type: ContentChild, args: [TdSidesheetActionsDirective,] }]
};
if (false) {
    /** @type {?} */
    TdSidesheetComponent.prototype.headerExists;
    /** @type {?} */
    TdSidesheetComponent.prototype.actionsExist;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3NpZGVzaGVldC8iLCJzb3VyY2VzIjpbInNpZGVzaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLN0YsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSHZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOztBQU1ELE1BQU0sT0FBTyx5QkFBeUI7OztZQUhyQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7QUFXRCxNQUFNLE9BQU8sMkJBQTJCO0lBUnhDO1FBU1csVUFBSyxHQUFvQixPQUFPLENBQUM7SUFDNUMsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7O2dCQUVoQyxJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsaUJBQWlCO29CQUN0QyxxQkFBcUIsRUFBRSxtQkFBbUI7aUJBQzNDO2FBQ0Y7OztvQkFFRSxLQUFLOzs7O0lBQU4sNENBQTBDOztBQU81QyxNQUFNLE9BQU8sMEJBQTBCOzs7WUFKdEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHlKQUE4QzthQUMvQzs7QUFVRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFQaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixnWUFBeUM7O2dCQUd6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OzsyQkFFRSxZQUFZLFNBQUMsMEJBQTBCOzJCQUN2QyxZQUFZLFNBQUMsMkJBQTJCOzs7O0lBRHpDLDRDQUFtRjs7SUFDbkYsNENBQXFGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RkLXNpZGVzaGVldC1jb250ZW50Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTaWRlc2hlZXRDb250ZW50RGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RkLXNpZGVzaGVldC10aXRsZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2lkZXNoZWV0VGl0bGVEaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGQtc2lkZXNoZWV0LWFjdGlvbnMnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWxpZ24tZW5kXSc6ICdhbGlnbiA9PT0gXCJlbmRcIicsXG4gICAgJ1tjbGFzcy5hbGlnbi1zdGFydF0nOiAnYWxpZ24gPT09IFwic3RhcnRcIicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU2lkZXNoZWV0QWN0aW9uc0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGFsaWduOiAnc3RhcnQnIHwgJ2VuZCcgPSAnc3RhcnQnO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zaWRlc2hlZXQtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlc2hlZXQtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTaWRlc2hlZXRIZWFkZXJDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtc2lkZXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGVzaGVldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGVzaGVldC5jb21wb25lbnQuc2NzcyddLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWNvbXBvbmVudC12aWV3LWVuY2Fwc3VsYXRpb25cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTaWRlc2hlZXRDb21wb25lbnQge1xuICBAQ29udGVudENoaWxkKFRkU2lkZXNoZWV0SGVhZGVyQ29tcG9uZW50KSBoZWFkZXJFeGlzdHM6IFRkU2lkZXNoZWV0SGVhZGVyQ29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKFRkU2lkZXNoZWV0QWN0aW9uc0RpcmVjdGl2ZSkgYWN0aW9uc0V4aXN0OiBUZFNpZGVzaGVldEFjdGlvbnNEaXJlY3RpdmU7XG59XG4iXX0=