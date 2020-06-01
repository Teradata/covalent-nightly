/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var TdUserProfileComponent = /** @class */ (function () {
    function TdUserProfileComponent() {
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
    return TdUserProfileComponent;
}());
export { TdUserProfileComponent };
if (false) {
    /** @type {?} */
    TdUserProfileComponent.prototype.name;
    /** @type {?} */
    TdUserProfileComponent.prototype.email;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3VzZXItcHJvZmlsZS8iLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFO0lBQUE7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsOGJBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozt1QkFFRSxLQUFLO3dCQUNMLEtBQUs7O0lBQ1IsNkJBQUM7Q0FBQSxBQVJELElBUUM7U0FIWSxzQkFBc0I7OztJQUNqQyxzQ0FBc0I7O0lBQ3RCLHVDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXVzZXItcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRVc2VyUHJvZmlsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZW1haWw6IHN0cmluZztcbn1cbiJdfQ==