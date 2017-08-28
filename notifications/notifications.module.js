import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdNotificationCountComponent } from './notification-count.component';
var TD_NOTIFICATIONS = [
    TdNotificationCountComponent,
];
export { TdNotificationCountComponent, TdNotificationCountPositionX, TdNotificationCountPositionY } from './notification-count.component';
var CovalentNotificationsModule = (function () {
    function CovalentNotificationsModule() {
    }
    CovalentNotificationsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                TD_NOTIFICATIONS,
            ],
            exports: [
                TD_NOTIFICATIONS,
            ],
        })
    ], CovalentNotificationsModule);
    return CovalentNotificationsModule;
}());
export { CovalentNotificationsModule };
//# sourceMappingURL=notifications.module.js.map