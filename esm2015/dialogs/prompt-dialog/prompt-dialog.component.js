/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export class TdPromptDialogComponent {
    /**
     * @param {?} _dialogRef
     */
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // focus input once everything is rendered and good to go
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            ((/** @type {?} */ (this._input.nativeElement))).focus();
        }));
    }
    /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    handleInputFocus() {
        ((/** @type {?} */ (this._input.nativeElement))).select();
    }
    /**
     * @return {?}
     */
    cancel() {
        this._dialogRef.close();
    }
    /**
     * @return {?}
     */
    accept() {
        this._dialogRef.close(this.value);
    }
}
TdPromptDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-prompt-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input\n            matInput\n            #input\n            (focus)=\"handleInputFocus()\"\n            (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n            [(ngModel)]=\"value\"\n            name=\"value\"\n            required\n          />\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      color=\"accent\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      [disabled]=\"!form.valid\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                styles: [".td-dialog-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-webkit-box-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdPromptDialogComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
TdPromptDialogComponent.propDecorators = {
    _input: [{ type: ViewChild, args: ['input', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TdPromptDialogComponent.prototype.title;
    /** @type {?} */
    TdPromptDialogComponent.prototype.message;
    /** @type {?} */
    TdPromptDialogComponent.prototype.value;
    /** @type {?} */
    TdPromptDialogComponent.prototype.cancelButton;
    /** @type {?} */
    TdPromptDialogComponent.prototype.acceptButton;
    /** @type {?} */
    TdPromptDialogComponent.prototype._input;
    /**
     * @type {?}
     * @private
     */
    TdPromptDialogComponent.prototype._dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3MvcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPeEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVNsQyxZQUFvQixVQUFpRDtRQUFqRCxlQUFVLEdBQVYsVUFBVSxDQUF1QztRQUxyRSxpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUNoQyxpQkFBWSxHQUFXLFFBQVEsQ0FBQztJQUl3QyxDQUFDOzs7O0lBRXpFLGVBQWU7UUFDYix5REFBeUQ7UUFDekQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUMxQixDQUFDLG1CQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFNRCxnQkFBZ0I7UUFDZCxDQUFDLG1CQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK2tDQUE2Qzs7YUFFOUM7Ozs7WUFOUSxZQUFZOzs7cUJBY2xCLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBTnBDLHdDQUFjOztJQUNkLDBDQUFnQjs7SUFDaEIsd0NBQWM7O0lBQ2QsK0NBQWdDOztJQUNoQywrQ0FBZ0M7O0lBRWhDLHlDQUF5RDs7Ozs7SUFFN0MsNkNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXByb21wdC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb21wdC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRQcm9tcHREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBjYW5jZWxCdXR0b246IHN0cmluZyA9ICdDQU5DRUwnO1xuICBhY2NlcHRCdXR0b246IHN0cmluZyA9ICdBQ0NFUFQnO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgX2lucHV0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50Pikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gZm9jdXMgaW5wdXQgb25jZSBldmVyeXRoaW5nIGlzIHJlbmRlcmVkIGFuZCBnb29kIHRvIGdvXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5faW5wdXQubmF0aXZlRWxlbWVudCkuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiBpbnB1dCBpcyBmb2N1c2VkXG4gICAqIFNlbGVjdHMgYWxsIHRleHRcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMoKTogdm9pZCB7XG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuX2lucHV0Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdCgpO1xuICB9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgYWNjZXB0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIl19