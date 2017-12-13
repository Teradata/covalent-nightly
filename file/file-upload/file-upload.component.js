import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChild, ChangeDetectorRef, forwardRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor } from '../../common/common.module';
import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var TdFileUploadBase = (function () {
    function TdFileUploadBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileUploadBase;
}());
export { TdFileUploadBase };
/* tslint:disable-next-line */
export var _TdFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileUploadBase));
var TdFileUploadComponent = (function (_super) {
    tslib_1.__extends(TdFileUploadComponent, _super);
    function TdFileUploadComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._multiple = false;
        _this._required = false;
        /**
         * defaultColor?: string
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         */
        _this.defaultColor = 'primary';
        /**
         * activeColor?: string
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         */
        _this.activeColor = 'accent';
        /**
         * cancelColor?: string
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
    TdFileUploadComponent_1 = TdFileUploadComponent;
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         */
        set: function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         */
        set: function (required) {
            this._required = coerceBooleanProperty(required);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when upload button is clicked.
     */
    TdFileUploadComponent.prototype.uploadPressed = function () {
        if (this.value) {
            this.onUpload.emit(this.value);
        }
    };
    /**
     * Method executed when a file is selected.
     */
    TdFileUploadComponent.prototype.handleSelect = function (value) {
        this.value = value;
        this.onSelect.emit(value);
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    TdFileUploadComponent.prototype.cancel = function () {
        this.value = undefined;
        this.onCancel.emit(undefined);
        // check if the file input is rendered before clearing it
        if (this.fileInput) {
            this.fileInput.clear();
        }
    };
    /** Method executed when the disabled value changes */
    TdFileUploadComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.cancel();
        }
    };
    tslib_1.__decorate([
        ViewChild(TdFileInputComponent),
        tslib_1.__metadata("design:type", TdFileInputComponent)
    ], TdFileUploadComponent.prototype, "fileInput", void 0);
    tslib_1.__decorate([
        ContentChild(TdFileInputLabelDirective),
        tslib_1.__metadata("design:type", TdFileInputLabelDirective)
    ], TdFileUploadComponent.prototype, "inputLabel", void 0);
    tslib_1.__decorate([
        Input('defaultColor'),
        tslib_1.__metadata("design:type", String)
    ], TdFileUploadComponent.prototype, "defaultColor", void 0);
    tslib_1.__decorate([
        Input('activeColor'),
        tslib_1.__metadata("design:type", String)
    ], TdFileUploadComponent.prototype, "activeColor", void 0);
    tslib_1.__decorate([
        Input('cancelColor'),
        tslib_1.__metadata("design:type", String)
    ], TdFileUploadComponent.prototype, "cancelColor", void 0);
    tslib_1.__decorate([
        Input('multiple'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdFileUploadComponent.prototype, "multiple", null);
    tslib_1.__decorate([
        Input('required'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdFileUploadComponent.prototype, "required", null);
    tslib_1.__decorate([
        Input('accept'),
        tslib_1.__metadata("design:type", String)
    ], TdFileUploadComponent.prototype, "accept", void 0);
    tslib_1.__decorate([
        Output('select'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdFileUploadComponent.prototype, "onSelect", void 0);
    tslib_1.__decorate([
        Output('upload'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdFileUploadComponent.prototype, "onUpload", void 0);
    tslib_1.__decorate([
        Output('cancel'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdFileUploadComponent.prototype, "onCancel", void 0);
    TdFileUploadComponent = TdFileUploadComponent_1 = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TdFileUploadComponent_1; }),
                    multi: true,
                }],
            selector: 'td-file-upload',
            inputs: ['disabled', 'value'],
            styles: [".td-file-upload { padding-left: 8px; padding-right: 8px; } .td-file-upload-cancel { height: 24px; width: 24px; position: relative; top: 24px; left: -12px; } ::ng-deep [dir='rtl'] .td-file-upload-cancel { right: -12px; left: 0; } .td-file-upload-cancel mat-icon { border-radius: 12px; vertical-align: baseline; } /** * Class that is added ondragenter by the [TdFileDrop] directive. */ .drop-zone { border-radius: 3px; } .drop-zone * { pointer-events: none; } /*# sourceMappingURL=file-upload.component.css.map */ "],
            template: "<td-file-input *ngIf=\"!value\" [(ngModel)]=\"value\" [multiple]=\"multiple\" [disabled]=\"disabled\" [accept]=\"accept\" [color]=\"defaultColor\" (select)=\"handleSelect($event)\"> <ng-template [cdkPortalHost]=\"inputLabel\" [ngIf]=\"true\"></ng-template> </td-file-input> <div *ngIf=\"value\"> <button #fileUpload class=\"td-file-upload\" mat-raised-button type=\"button\" [color]=\"activeColor\" (keyup.delete)=\"cancel()\" (keyup.backspace)=\"cancel()\" (keyup.escape)=\"cancel()\" (click)=\"uploadPressed()\">  <ng-content></ng-content> </button> <button mat-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\"             (click)=\"cancel()\"> <mat-icon>cancel</mat-icon> </button> </div>",
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], TdFileUploadComponent);
    return TdFileUploadComponent;
    var TdFileUploadComponent_1;
}(_TdFileUploadMixinBase));
export { TdFileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map