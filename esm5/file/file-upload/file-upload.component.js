/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChild, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var TdFileUploadBase = /** @class */ (function () {
    function TdFileUploadBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileUploadBase;
}());
export { TdFileUploadBase };
if (false) {
    /** @type {?} */
    TdFileUploadBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileUploadBase));
var TdFileUploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdFileUploadComponent, _super);
    function TdFileUploadComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._multiple = false;
        _this._required = false;
        /**
         * defaultColor?: 'accent' | 'primary' | 'warn'
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         */
        _this.defaultColor = 'primary';
        /**
         * activeColor?: 'accent' | 'primary' | 'warn'
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         */
        _this.activeColor = 'accent';
        /**
         * cancelColor?: 'accent' | 'primary' | 'warn'
         * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
         */
        _this.cancelColor = 'warn';
        /**
         * select?: function
         * Event emitted when a file is selected.
         * Emits a [File | FileList] object.
         */
        _this.onSelect = new EventEmitter();
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        _this.onUpload = new EventEmitter();
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         */
        _this.onCancel = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         */
        set: /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         */
        set: /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         * @param {?} required
         * @return {?}
         */
        function (required) {
            this._required = coerceBooleanProperty(required);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when upload button is clicked.
     */
    /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    TdFileUploadComponent.prototype.uploadPressed = /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    function () {
        if (this.value) {
            this.onUpload.emit(this.value);
        }
    };
    /**
     * Method executed when a file is selected.
     */
    /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    TdFileUploadComponent.prototype.handleSelect = /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.onSelect.emit(value);
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    TdFileUploadComponent.prototype.cancel = /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    function () {
        this.value = undefined;
        this.onCancel.emit(undefined);
        // check if the file input is rendered before clearing it
        if (this.fileInput) {
            this.fileInput.clear();
        }
    };
    /** Method executed when the disabled value changes */
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdFileUploadComponent.prototype.onDisabledChange = /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (v) {
            this.cancel();
        }
    };
    TdFileUploadComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdFileUploadComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-file-upload',
                    inputs: ['disabled', 'value'],
                    template: "<td-file-input\n  *ngIf=\"!value\"\n  [(ngModel)]=\"value\"\n  [multiple]=\"multiple\"\n  [disabled]=\"disabled\"\n  [accept]=\"accept\"\n  [color]=\"defaultColor\"\n  (select)=\"handleSelect($event)\"\n>\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button\n    #fileUpload\n    class=\"td-file-upload\"\n    mat-raised-button\n    type=\"button\"\n    [color]=\"activeColor\"\n    (keyup.delete)=\"cancel()\"\n    (keyup.backspace)=\"cancel()\"\n    (keyup.escape)=\"cancel()\"\n    (click)=\"uploadPressed()\"\n  >\n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\" (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>\n",
                    styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    TdFileUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TdFileUploadComponent.propDecorators = {
        fileInput: [{ type: ViewChild, args: [TdFileInputComponent, { static: false },] }],
        inputLabel: [{ type: ContentChild, args: [TdFileInputLabelDirective, { static: false },] }],
        defaultColor: [{ type: Input, args: ['defaultColor',] }],
        activeColor: [{ type: Input, args: ['activeColor',] }],
        cancelColor: [{ type: Input, args: ['cancelColor',] }],
        multiple: [{ type: Input, args: ['multiple',] }],
        required: [{ type: Input, args: ['required',] }],
        accept: [{ type: Input, args: ['accept',] }],
        onSelect: [{ type: Output, args: ['select',] }],
        onUpload: [{ type: Output, args: ['upload',] }],
        onCancel: [{ type: Output, args: ['cancel',] }]
    };
    return TdFileUploadComponent;
}(_TdFileUploadMixinBase));
export { TdFileUploadComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileUploadComponent.prototype._multiple;
    /**
     * @type {?}
     * @private
     */
    TdFileUploadComponent.prototype._required;
    /** @type {?} */
    TdFileUploadComponent.prototype.fileInput;
    /** @type {?} */
    TdFileUploadComponent.prototype.inputLabel;
    /**
     * defaultColor?: 'accent' | 'primary' | 'warn'
     * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.defaultColor;
    /**
     * activeColor?: 'accent' | 'primary' | 'warn'
     * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.activeColor;
    /**
     * cancelColor?: 'accent' | 'primary' | 'warn'
     * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.cancelColor;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     * @type {?}
     */
    TdFileUploadComponent.prototype.accept;
    /**
     * select?: function
     * Event emitted when a file is selected.
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onSelect;
    /**
     * upload?: function
     * Event emitted when upload button is clicked.
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onUpload;
    /**
     * cancel?: function
     * Event emitted when cancel button is clicked.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onCancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJmaWxlL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQWUsYUFBYSxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RTtJQUNFLDBCQUFtQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7SUFDOUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURhLDhDQUE0Qzs7OztBQUkxRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcseUJBQXlCLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFaEc7SUFjMkMsaURBQXNCO0lBOEUvRCwrQkFBWSxrQkFBcUM7UUFBakQsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQS9FTyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7Ozs7O1FBVVosa0JBQVksR0FBa0MsU0FBUyxDQUFDOzs7OztRQU16RCxpQkFBVyxHQUFrQyxRQUFRLENBQUM7Ozs7O1FBTXRELGlCQUFXLEdBQWtDLE1BQU0sQ0FB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SUFDbkMsMENBQW1DOztJQUVuQywwQ0FBb0Y7O0lBRXBGLDJDQUFrRzs7Ozs7O0lBTWxHLDZDQUErRTs7Ozs7O0lBTS9FLDRDQUE0RTs7Ozs7O0lBTTVFLDRDQUEwRTs7Ozs7OztJQWdDMUUsdUNBQWdDOzs7Ozs7O0lBT2hDLHlDQUFnRzs7Ozs7OztJQU9oRyx5Q0FBZ0c7Ozs7OztJQU1oRyx5Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdDaGlsZCxcbiAgQ29udGVudENoaWxkLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5pbXBvcnQgeyBUZEZpbGVJbnB1dENvbXBvbmVudCwgVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4uL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgVGRGaWxlVXBsb2FkQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRGaWxlVXBsb2FkTWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihtaXhpbkRpc2FibGVkKFRkRmlsZVVwbG9hZEJhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkRmlsZVVwbG9hZENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzZWxlY3RvcjogJ3RkLWZpbGUtdXBsb2FkJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3ZhbHVlJ10sXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZVVwbG9hZENvbXBvbmVudCBleHRlbmRzIF9UZEZpbGVVcGxvYWRNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIElDYW5EaXNhYmxlIHtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKFRkRmlsZUlucHV0Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsZUlucHV0OiBUZEZpbGVJbnB1dENvbXBvbmVudDtcblxuICBAQ29udGVudENoaWxkKFRkRmlsZUlucHV0TGFiZWxEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dExhYmVsOiBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBkZWZhdWx0Q29sb3I/OiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJ1xuICAgKiBTZXRzIGJyb3dzZSBidXR0b24gY29sb3IuIFVzZXMgc2FtZSBjb2xvciBwYWxldHRlIGFjY2VwdGVkIGFzIFtNYXRCdXR0b25dIGFuZCBkZWZhdWx0cyB0byAncHJpbWFyeScuXG4gICAqL1xuICBASW5wdXQoJ2RlZmF1bHRDb2xvcicpIGRlZmF1bHRDb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZUNvbG9yPzogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybidcbiAgICogU2V0cyB1cGxvYWQgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXSBhbmQgZGVmYXVsdHMgdG8gJ2FjY2VudCcuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZUNvbG9yJykgYWN0aXZlQ29sb3I6ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nID0gJ2FjY2VudCc7XG5cbiAgLyoqXG4gICAqIGNhbmNlbENvbG9yPzogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybidcbiAgICogU2V0cyBjYW5jZWwgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXSBhbmQgZGVmYXVsdHMgdG8gJ3dhcm4nLlxuICAgKi9cbiAgQElucHV0KCdjYW5jZWxDb2xvcicpIGNhbmNlbENvbG9yOiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJyA9ICd3YXJuJztcblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgbXVsdGlwbGUgZmlsZXMgY2FuIGJlIGRyb3BwZWQvc2VsZWN0ZWQgYXQgb25jZSBpbiBbVGRGaWxlVXBsb2FkQ29tcG9uZW50XS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1aXJlZD86IGJvb2xlYW5cbiAgICogRm9yY2VzIGF0IGxlYXN0IG9uZSBmaWxlIHVwbG9hZC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdyZXF1aXJlZCcpXG4gIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVkKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjY2VwdD86IHN0cmluZ1xuICAgKiBTZXRzIGZpbGVzIGFjY2VwdGVkIHdoZW4gb3BlbmluZyB0aGUgZmlsZSBicm93c2VyIGRpYWxvZy5cbiAgICogU2FtZSBhcyAnYWNjZXB0JyBhdHRyaWJ1dGUgaW4gPGlucHV0Lz4gZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgnYWNjZXB0JykgYWNjZXB0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGZpbGUgaXMgc2VsZWN0ZWQuXG4gICAqIEVtaXRzIGEgW0ZpbGUgfCBGaWxlTGlzdF0gb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc2VsZWN0Jykgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+KCk7XG5cbiAgLyoqXG4gICAqIHVwbG9hZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB1cGxvYWQgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqIEVtaXRzIGEgW0ZpbGUgfCBGaWxlTGlzdF0gb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgndXBsb2FkJykgb25VcGxvYWQ6IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+KCk7XG5cbiAgLyoqXG4gICAqIGNhbmNlbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCdjYW5jZWwnKSBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHVwbG9hZCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIHVwbG9hZFByZXNzZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMub25VcGxvYWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgaGFuZGxlU2VsZWN0KHZhbHVlOiBGaWxlIHwgRmlsZUxpc3QpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzIGV4ZWN1dGVkIHdoZW4gY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBDbGVhcnMgZmlsZXMuXG4gICAqL1xuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uQ2FuY2VsLmVtaXQodW5kZWZpbmVkKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZmlsZSBpbnB1dCBpcyByZW5kZXJlZCBiZWZvcmUgY2xlYXJpbmcgaXRcbiAgICBpZiAodGhpcy5maWxlSW5wdXQpIHtcbiAgICAgIHRoaXMuZmlsZUlucHV0LmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2KSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxufVxuIl19