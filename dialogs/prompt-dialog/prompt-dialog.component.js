import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var TdPromptDialogComponent = (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdPromptDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // focus input once everything is rendered and good to go
        Promise.resolve().then(function () {
            _this._input.nativeElement.focus();
        });
    };
    /**
     * Method executed when input is focused
     * Selects all text
     */
    TdPromptDialogComponent.prototype.handleInputFocus = function () {
        this._input.nativeElement.select();
    };
    TdPromptDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(undefined);
    };
    TdPromptDialogComponent.prototype.accept = function () {
        this._dialogRef.close(this.value);
    };
    tslib_1.__decorate([
        ViewChild('input'),
        tslib_1.__metadata("design:type", ElementRef)
    ], TdPromptDialogComponent.prototype, "_input", void 0);
    TdPromptDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'td-prompt-dialog',
            template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content> <span class=\"td-dialog-message\">{{message}}</span> <form #form=\"ngForm\" novalidate> <div class=\"td-dialog-input-wrapper\"> <mat-form-field class=\"td-dialog-input\"> <input matInput #input (focus)=\"handleInputFocus()\" (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\" [(ngModel)]=\"value\" name=\"value\" required/> </mat-form-field> </div> </form> </td-dialog-content> <td-dialog-actions> <button mat-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button mat-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" [disabled]=\"!form.valid\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
            styles: [".td-dialog-input-wrapper { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } .td-dialog-input-wrapper .td-dialog-input { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-sizing: border-box; box-sizing: border-box; } .td-dialog-message { word-break: break-word; } /*# sourceMappingURL=prompt-dialog.component.css.map */ "],
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef])
    ], TdPromptDialogComponent);
    return TdPromptDialogComponent;
}());
export { TdPromptDialogComponent };
//# sourceMappingURL=prompt-dialog.component.js.map