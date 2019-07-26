/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var TdPromptDialogComponent = /** @class */ (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // focus input once everything is rendered and good to go
        Promise.resolve().then(function () {
            ((/** @type {?} */ (_this._input.nativeElement))).focus();
        });
    };
    /**
     * Method executed when input is focused
     * Selects all text
     */
    /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    TdPromptDialogComponent.prototype.handleInputFocus = /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this._input.nativeElement))).select();
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(undefined);
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(this.value);
    };
    TdPromptDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-prompt-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input\n            matInput\n            #input\n            (focus)=\"handleInputFocus()\"\n            (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n            [(ngModel)]=\"value\"\n            name=\"value\"\n            required\n          />\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      color=\"accent\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      [disabled]=\"!form.valid\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                    styles: [".td-dialog-input-wrapper{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-ms-flex:1;flex:1;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdPromptDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    TdPromptDialogComponent.propDecorators = {
        _input: [{ type: ViewChild, args: ['input',] }]
    };
    return TdPromptDialogComponent;
}());
export { TdPromptDialogComponent };
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
    /** @type {?} */
    TdPromptDialogComponent.prototype._dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3MvcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQ7SUFjRSxpQ0FBb0IsVUFBaUQ7UUFBakQsZUFBVSxHQUFWLFVBQVUsQ0FBdUM7UUFMckUsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsaUJBQVksR0FBVyxRQUFRLENBQUM7SUFJd0MsQ0FBQzs7OztJQUV6RSxpREFBZTs7O0lBQWY7UUFBQSxpQkFLQztRQUpDLHlEQUF5RDtRQUN6RCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsbUJBQWtCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGtEQUFnQjs7Ozs7SUFBaEI7UUFDRSxDQUFDLG1CQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELHdDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx3Q0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiwra0NBQTZDOztpQkFFOUM7Ozs7Z0JBTlEsWUFBWTs7O3lCQWNsQixTQUFTLFNBQUMsT0FBTzs7SUEwQnBCLDhCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksdUJBQXVCOzs7SUFDbEMsd0NBQWM7O0lBQ2QsMENBQWdCOztJQUNoQix3Q0FBYzs7SUFDZCwrQ0FBZ0M7O0lBQ2hDLCtDQUFnQzs7SUFFaEMseUNBQXVDOztJQUUzQiw2Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcHJvbXB0LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvbXB0LWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICB0aXRsZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbjogc3RyaW5nID0gJ0NBTkNFTCc7XG4gIGFjY2VwdEJ1dHRvbjogc3RyaW5nID0gJ0FDQ0VQVCc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBfaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBmb2N1cyBpbnB1dCBvbmNlIGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWQgYW5kIGdvb2QgdG8gZ29cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICg8SFRNTElucHV0RWxlbWVudD50aGlzLl9pbnB1dC5uYXRpdmVFbGVtZW50KS5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIGlucHV0IGlzIGZvY3VzZWRcbiAgICogU2VsZWN0cyBhbGwgdGV4dFxuICAgKi9cbiAgaGFuZGxlSW5wdXRGb2N1cygpOiB2b2lkIHtcbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5faW5wdXQubmF0aXZlRWxlbWVudCkuc2VsZWN0KCk7XG4gIH1cblxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKHVuZGVmaW5lZCk7XG4gIH1cblxuICBhY2NlcHQoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=