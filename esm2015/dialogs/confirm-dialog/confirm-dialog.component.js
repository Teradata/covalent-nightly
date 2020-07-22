/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export class TdConfirmDialogComponent {
    /**
     * @param {?} _dialogRef
     */
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
        this.isDestructive = false;
    }
    /**
     * @return {?}
     */
    cancel() {
        this._dialogRef.close(false);
    }
    /**
     * @return {?}
     */
    accept() {
        this._dialogRef.close(true);
    }
}
TdConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-confirm-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      [color]=\"isDestructive ? 'warn' : 'accent'\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                styles: [".td-dialog-message{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdConfirmDialogComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGlhbG9ncy8iLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPeEQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQU9uQyxZQUFvQixVQUFrRDtRQUFsRCxlQUFVLEdBQVYsVUFBVSxDQUF3QztRQUp0RSxpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUNoQyxpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUNoQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQUUwQyxDQUFDOzs7O0lBRTFFLE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNm1CQUE4Qzs7YUFFL0M7Ozs7WUFOUSxZQUFZOzs7O0lBUW5CLHlDQUFjOztJQUNkLDJDQUFnQjs7SUFDaEIsZ0RBQWdDOztJQUNoQyxnREFBZ0M7O0lBQ2hDLGlEQUErQjs7Ozs7SUFFbkIsOENBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jb25maXJtLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uOiBzdHJpbmcgPSAnQ0FOQ0VMJztcbiAgYWNjZXB0QnV0dG9uOiBzdHJpbmcgPSAnQUNDRVBUJztcbiAgaXNEZXN0cnVjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4pIHt9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XG4gIH1cblxuICBhY2NlcHQoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICB9XG59XG4iXX0=