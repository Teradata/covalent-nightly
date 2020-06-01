/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class TdUserProfileComponent {
}
TdUserProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-user-profile',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"accountMenu\">\n  <mat-icon>person</mat-icon>\n</button>\n\n<mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <td-user-profile-menu [name]=\"name\" [email]=\"email\">\n    <ng-content select=\"[td-user-info-list]\" td-user-info-list></ng-content>\n    <ng-content select=\"[td-user-action-list]\" td-user-action-list></ng-content>\n  </td-user-profile-menu>\n</mat-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
TdUserProfileComponent.propDecorators = {
    name: [{ type: Input }],
    email: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdUserProfileComponent.prototype.name;
    /** @type {?} */
    TdUserProfileComponent.prototype.email;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3VzZXItcHJvZmlsZS8iLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFFLE1BQU0sT0FBTyxzQkFBc0I7OztZQUxsQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsOGJBQTRDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O21CQUVFLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLHNDQUFzQjs7SUFDdEIsdUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtdXNlci1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZFVzZXJQcm9maWxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xufVxuIl19