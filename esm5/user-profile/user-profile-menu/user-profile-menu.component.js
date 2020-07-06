/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var TdUserProfileMenuComponent = /** @class */ (function () {
    function TdUserProfileMenuComponent() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TdUserProfileMenuComponent.prototype._blockEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    TdUserProfileMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-user-profile-menu',
                    template: "<td-menu class=\"user-profile-menu\">\n  <!--header-->\n  <mat-list td-menu-header>\n    <mat-list-item *ngIf=\"name || email\" (click)=\"_blockEvent($event)\">\n      <mat-icon matListAvatar>person</mat-icon>\n      <span matLine *ngIf=\"name\" class=\"mat-body-1\">{{ name }}</span>\n      <span matLine *ngIf=\"email\">{{ email }}</span>\n    </mat-list-item>\n    <ng-content select=\"[td-user-info-list]\"></ng-content>\n  </mat-list>\n  <!--content-->\n  <mat-action-list>\n    <ng-content select=\"[td-user-action-list]\"></ng-content>\n  </mat-action-list>\n</td-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".user-profile-menu [td-menu-header]{text-align:left;padding-bottom:0}::ng-deep [mat-list-item] .mat-list-item-content .mat-icon[matListAvatar],::ng-deep mat-list-item:not(:first-child) .mat-list-item-content .mat-icon[matListAvatar]{background:0 0}.mat-action-list{padding-top:0}:host ::ng-deep .mat-action-list .mat-divider,:host ::ng-deep .mat-divider{margin:8px 0}:host ::ng-deep mat-divider:last-child{display:none}:host ::ng-deep mat-list .mat-list-item.mat-2-line .mat-list-item-content{height:inherit}:host ::ng-deep mat-list .mat-list-item .mat-list-item-content{padding:8px}td-menu{margin-bottom:0}"]
                }] }
    ];
    TdUserProfileMenuComponent.propDecorators = {
        email: [{ type: Input }],
        name: [{ type: Input }]
    };
    return TdUserProfileMenuComponent;
}());
export { TdUserProfileMenuComponent };
if (false) {
    /** @type {?} */
    TdUserProfileMenuComponent.prototype.email;
    /** @type {?} */
    TdUserProfileMenuComponent.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvdXNlci1wcm9maWxlLyIsInNvdXJjZXMiOlsidXNlci1wcm9maWxlLW1lbnUvdXNlci1wcm9maWxlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRTtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFKQyxnREFBVzs7OztJQUFYLFVBQVksS0FBWTtRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw4a0JBQWlEO29CQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7d0JBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLGlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBUlksMEJBQTBCOzs7SUFDckMsMkNBQXVCOztJQUN2QiwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC11c2VyLXByb2ZpbGUtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyLXByb2ZpbGUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VzZXItcHJvZmlsZS1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZFVzZXJQcm9maWxlTWVudUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICBfYmxvY2tFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=