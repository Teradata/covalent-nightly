import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var TdAlertDialogComponent = (function () {
    function TdAlertDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    TdAlertDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    TdAlertDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'td-alert-dialog',
            template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content> <span class=\"td-dialog-message\">{{message}}</span> </td-dialog-content> <td-dialog-actions> <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button> </td-dialog-actions> </td-dialog>",
            styles: [".td-dialog-message { word-break: break-word; } /*# sourceMappingURL=alert-dialog.component.css.map */ "],
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef])
    ], TdAlertDialogComponent);
    return TdAlertDialogComponent;
}());
export { TdAlertDialogComponent };
//# sourceMappingURL=alert-dialog.component.js.map