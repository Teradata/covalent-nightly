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
TdAlertDialogComponent = __decorate([
    Component({
        selector: 'td-alert-dialog',
        template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content class=\"md-subhead tc-grey-700\"> {{message}} </td-dialog-content> <td-dialog-actions> <button md-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button> </td-dialog-actions> </td-dialog>",
        styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } "],
    }),
    __metadata("design:paramtypes", [MdDialogRef])
], TdAlertDialogComponent);
export { TdAlertDialogComponent };
//# sourceMappingURL=alert-dialog.component.js.map