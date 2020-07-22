/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var TdConfirmDialogComponent = /** @class */ (function () {
    function TdConfirmDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
        this.isDestructive = false;
    }
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(false);
    };
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(true);
    };
    TdConfirmDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-confirm-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      [color]=\"isDestructive ? 'warn' : 'accent'\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                    styles: [".td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdConfirmDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    return TdConfirmDialogComponent;
}());
export { TdConfirmDialogComponent };
if (false) {
    /** @type {?} */
    TdConfirmDialogComponent.prototype.title;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.message;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.cancelButton;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.acceptButton;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.isDestructive;
    /**
     * @type {?}
     * @private
     */
    TdConfirmDialogComponent.prototype._dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGlhbG9ncy8iLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQ7SUFZRSxrQ0FBb0IsVUFBa0Q7UUFBbEQsZUFBVSxHQUFWLFVBQVUsQ0FBd0M7UUFKdEUsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFMEMsQ0FBQzs7OztJQUUxRSx5Q0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQseUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw2bUJBQThDOztpQkFFL0M7Ozs7Z0JBTlEsWUFBWTs7SUF1QnJCLCtCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksd0JBQXdCOzs7SUFDbkMseUNBQWM7O0lBQ2QsMkNBQWdCOztJQUNoQixnREFBZ0M7O0lBQ2hDLGdEQUFnQzs7SUFDaEMsaURBQStCOzs7OztJQUVuQiw4Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNvbmZpcm0tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBjYW5jZWxCdXR0b246IHN0cmluZyA9ICdDQU5DRUwnO1xuICBhY2NlcHRCdXR0b246IHN0cmluZyA9ICdBQ0NFUFQnO1xuICBpc0Rlc3RydWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50Pikge31cblxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKGZhbHNlKTtcbiAgfVxuXG4gIGFjY2VwdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==