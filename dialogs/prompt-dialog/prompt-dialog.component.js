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
var TdPromptDialogComponent = (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdPromptDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(undefined);
    };
    TdPromptDialogComponent.prototype.accept = function () {
        this._dialogRef.close(this.value);
    };
    return TdPromptDialogComponent;
}());
TdPromptDialogComponent = __decorate([
    Component({
        selector: 'td-prompt-dialog',
        template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content layout=\"column\" class=\"md-subhead tc-grey-700\"> {{message}} <form #form=\"ngForm\" layout=\"row\" novalidate flex> <md-input-container flex> <input mdInput (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\" [(ngModel)]=\"value\" name=\"value\" required/> </md-input-container> </form> </td-dialog-content> <td-dialog-actions> <button md-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button md-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" [disabled]=\"!form.valid\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
        styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } "],
    }),
    __metadata("design:paramtypes", [MdDialogRef])
], TdPromptDialogComponent);
export { TdPromptDialogComponent };
//# sourceMappingURL=prompt-dialog.component.js.map