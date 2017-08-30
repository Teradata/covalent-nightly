import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
var TdConfirmDialogComponent = (function () {
    function TdConfirmDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdConfirmDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(false);
    };
    TdConfirmDialogComponent.prototype.accept = function () {
        this._dialogRef.close(true);
    };
    TdConfirmDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'td-confirm-dialog',
            template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content class=\"md-subhead tc-grey-700\"> {{message}} </td-dialog-content> <td-dialog-actions> <button md-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button md-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
            styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } /*# sourceMappingURL=confirm-dialog.component.css.map */ "],
        }),
        tslib_1.__metadata("design:paramtypes", [MdDialogRef])
    ], TdConfirmDialogComponent);
    return TdConfirmDialogComponent;
}());
export { TdConfirmDialogComponent };
//# sourceMappingURL=confirm-dialog.component.js.map