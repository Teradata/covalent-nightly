var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    return TdConfirmDialogComponent;
}());
TdConfirmDialogComponent = __decorate([
    Component({
        selector: 'td-confirm-dialog',
        template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content class=\"md-subhead tc-grey-700\"> {{message}} </td-dialog-content> <td-dialog-actions> <button md-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button md-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
        styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } "],
    }),
    __metadata("design:paramtypes", [MdDialogRef])
], TdConfirmDialogComponent);
export { TdConfirmDialogComponent };
//# sourceMappingURL=confirm-dialog.component.js.map