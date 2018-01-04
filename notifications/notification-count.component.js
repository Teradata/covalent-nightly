import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
export var TdNotificationCountPositionY;
(function (TdNotificationCountPositionY) {
    TdNotificationCountPositionY[TdNotificationCountPositionY["Top"] = 'top'] = "Top";
    TdNotificationCountPositionY[TdNotificationCountPositionY["Bottom"] = 'bottom'] = "Bottom";
    TdNotificationCountPositionY[TdNotificationCountPositionY["Center"] = 'center'] = "Center";
})(TdNotificationCountPositionY || (TdNotificationCountPositionY = {}));
export var TdNotificationCountPositionX;
(function (TdNotificationCountPositionX) {
    TdNotificationCountPositionX[TdNotificationCountPositionX["Before"] = 'before'] = "Before";
    TdNotificationCountPositionX[TdNotificationCountPositionX["After"] = 'after'] = "After";
    TdNotificationCountPositionX[TdNotificationCountPositionX["Center"] = 'center'] = "Center";
})(TdNotificationCountPositionX || (TdNotificationCountPositionX = {}));
var TdNotificationCountComponent = (function () {
    function TdNotificationCountComponent() {
        this._notifications = 0;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         */
        this.color = 'warn';
    }
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
        get: function () {
            return this._positionX;
        },
        /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         */
        set: function (positionX) {
            this._positionX = positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
        get: function () {
            return this._positionY;
        },
        /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         */
        set: function (positionY) {
            this._positionY = positionY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
        /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         */
        set: function (notifications) {
            this._notifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
        get: function () {
            return !this.show && !this._hasContent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
        /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         */
        get: function () {
            return this._notifications === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
        /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         */
        get: function () {
            if (this._notifications > 99) {
                return '99+';
            }
            return this._notifications.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
        /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         */
        get: function () {
            return this._notifications === true || (!isNaN(this._notifications) && this._notifications > 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     */
    TdNotificationCountComponent.prototype.ngAfterContentInit = function () {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
        }
    };
    /**
     * Method to check if element has any kind of content (elements or text)
     */
    TdNotificationCountComponent.prototype._hasContent = function () {
        if (this.content) {
            var contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    };
    tslib_1.__decorate([
        ViewChild('content'),
        tslib_1.__metadata("design:type", ElementRef)
    ], TdNotificationCountComponent.prototype, "content", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TdNotificationCountComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdNotificationCountComponent.prototype, "positionX", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdNotificationCountComponent.prototype, "positionY", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TdNotificationCountComponent.prototype, "notifications", null);
    tslib_1.__decorate([
        HostBinding('class.td-notification-hidden'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdNotificationCountComponent.prototype, "hideHost", null);
    TdNotificationCountComponent = tslib_1.__decorate([
        Component({
            selector: 'td-notification-count',
            styles: [":host { position: relative; display: block; text-align: center; min-width: 40px; height: 40px; } :host.td-notification-hidden { min-width: 0; } .td-notification-count { line-height: 21px; width: 20px; height: 20px; position: absolute; font-size: 10px; font-weight: 600; border-radius: 50%; z-index: 1; } .td-notification-count.td-notification-center-x { margin-left: auto; margin-right: auto; left: 0; right: 0; } .td-notification-count.td-notification-center-y { margin-top: auto; margin-bottom: auto; top: 0; bottom: 0; } .td-notification-count.td-notification-top { top: 0; } .td-notification-count.td-notification-bottom { bottom: 0; } .td-notification-count.td-notification-before { left: 0; } .td-notification-count.td-notification-after { right: 0; } .td-notification-count.td-notification-no-count { width: 8px; height: 8px; } .td-notification-count.td-notification-no-count.td-notification-top { top: 8px; } .td-notification-count.td-notification-no-count.td-notification-bottom { bottom: 8px; } .td-notification-count.td-notification-no-count.td-notification-before { left: 8px; } .td-notification-count.td-notification-no-count.td-notification-after { right: 8px; } ::ng-deep [dir='rtl'] .td-notification-count.td-notification-before { right: 0; left: auto; } ::ng-deep [dir='rtl'] .td-notification-count.td-notification-after { left: 0; right: auto; } ::ng-deep [dir='rtl'] .td-notification-count.td-notification-no-count.td-notification-before { right: 8px; left: auto; } ::ng-deep [dir='rtl'] .td-notification-count.td-notification-no-count.td-notification-after { left: 8px; right: auto; } .td-notification-content, .td-notification-content ::ng-deep > * { line-height: 40px; } /*# sourceMappingURL=notification-count.component.css.map */ "],
            template: "<div #content class=\"td-notification-content\"> <ng-content></ng-content> </div> <div *ngIf=\"show\" class=\"td-notification-count mat-{{color}}\" [class.td-notification-top]=\"positionY === 'top'\" [class.td-notification-bottom]=\"positionY === 'bottom'\" [class.td-notification-before]=\"positionX === 'before'\" [class.td-notification-after]=\"positionX === 'after'\" [class.td-notification-center-y]=\"positionY === 'center'\" [class.td-notification-center-x]=\"positionX === 'center'\" [class.td-notification-no-count]=\"noCount\"> {{noCount ? '' : notificationsDisplay}} </div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    ], TdNotificationCountComponent);
    return TdNotificationCountComponent;
}());
export { TdNotificationCountComponent };
//# sourceMappingURL=notification-count.component.js.map