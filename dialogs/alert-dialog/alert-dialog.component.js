import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
var TdAlertDialogComponent = (function () {
    function TdAlertDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    TdAlertDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    return TdAlertDialogComponent;
}());
TdAlertDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'td-alert-dialog',
        template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content class=\"md-subhead tc-grey-700\"> {{message}} </td-dialog-content> <td-dialog-actions> <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button> </td-dialog-actions> </td-dialog>",
        styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } /*# sourceMappingURL=alert-dialog.component.css.map */ "],
    }),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef])
], TdAlertDialogComponent);
export { TdAlertDialogComponent };
//# sourceMappingURL=alert-dialog.component.js.map