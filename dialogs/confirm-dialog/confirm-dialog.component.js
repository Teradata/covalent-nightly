import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
            template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content> <span class=\"td-dialog-message\">{{message}}</span> </td-dialog-content> <td-dialog-actions> <button mat-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button mat-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
            styles: [".td-dialog-message { word-break: break-word; } /*# sourceMappingURL=confirm-dialog.component.css.map */ "],
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef])
    ], TdConfirmDialogComponent);
    return TdConfirmDialogComponent;
}());
export { TdConfirmDialogComponent };
//# sourceMappingURL=confirm-dialog.component.js.map