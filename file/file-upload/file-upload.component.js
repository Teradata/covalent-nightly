var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk';
import { mixinDisabled } from '../../common/common.module';
import { TdFileInputLabelDirective } from '../file-input/file-input.component';
var TdFileUploadBase = (function () {
    function TdFileUploadBase() {
    }
    return TdFileUploadBase;
}());
export { TdFileUploadBase };
/* tslint:disable-next-line */
export var _TdFileUploadMixinBase = mixinDisabled(TdFileUploadBase);
var TdFileUploadComponent = (function (_super) {
    __extends(TdFileUploadComponent, _super);
    function TdFileUploadComponent(_changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._multiple = false;
        /**
         * defaultColor?: string
         * Sets browse button color. Uses same color palette accepted as [mdButton] and defaults to 'primary'.
         */
        _this.defaultColor = 'primary';
        /**
         * activeColor?: string
         * Sets upload button color. Uses same color palette accepted as [mdButton] and defaults to 'accent'.
         */
        _this.activeColor = 'accent';
        /**
         * cancelColor?: string
         * Sets cancel button color. Uses same color palette accepted as [mdButton] and defaults to 'warn'.
         */
        _this.cancelColor = 'warn';
        /**
         * select?: function
         * Event emitted when a file is selecte.
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
    /**
     * Method executed when upload button is clicked.
     */
    TdFileUploadComponent.prototype.uploadPressed = function () {
        if (this.files) {
            this.onUpload.emit(this.files);
        }
    };
    /**
     * Method executed when a file is selected.
     */
    TdFileUploadComponent.prototype.handleSelect = function (files) {
        this.files = files;
        this.onSelect.emit(files);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    TdFileUploadComponent.prototype.cancel = function () {
        this.files = undefined;
        this.onCancel.emit(undefined);
        this._changeDetectorRef.markForCheck();
    };
    /** Method executed when the disabled value changes */
    TdFileUploadComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.cancel();
        }
    };
    return TdFileUploadComponent;
}(_TdFileUploadMixinBase));
__decorate([
    ContentChild(TdFileInputLabelDirective),
    __metadata("design:type", TdFileInputLabelDirective)
], TdFileUploadComponent.prototype, "inputLabel", void 0);
__decorate([
    Input('defaultColor'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "defaultColor", void 0);
__decorate([
    Input('activeColor'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "activeColor", void 0);
__decorate([
    Input('cancelColor'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "cancelColor", void 0);
__decorate([
    Input('multiple'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdFileUploadComponent.prototype, "multiple", null);
__decorate([
    Input('accept'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "accept", void 0);
__decorate([
    Output('select'),
    __metadata("design:type", EventEmitter)
], TdFileUploadComponent.prototype, "onSelect", void 0);
__decorate([
    Output('upload'),
    __metadata("design:type", EventEmitter)
], TdFileUploadComponent.prototype, "onUpload", void 0);
__decorate([
    Output('cancel'),
    __metadata("design:type", EventEmitter)
], TdFileUploadComponent.prototype, "onCancel", void 0);
TdFileUploadComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'td-file-upload',
        inputs: ['disabled'],
        styles: [".td-file-upload { padding-left: 8px; padding-right: 8px; } .td-file-upload-cancel { height: 24px; width: 24px; position: relative; top: 24px; left: -12px; } /deep/ [dir='rtl'] .td-file-upload-cancel { right: -12px; left: 0; } .td-file-upload-cancel md-icon { border-radius: 12px; vertical-align: baseline; } /** * Class that is added ondragenter by the [TdFileDrop] directive. */ .drop-zone { border-radius: 3px; } .drop-zone * { pointer-events: none; } "],
        template: "<td-file-input *ngIf=\"!files\" [multiple]=\"multiple\" [disabled]=\"disabled\" [accept]=\"accept\" [color]=\"defaultColor\" (select)=\"handleSelect($event)\"> <ng-template [cdkPortalHost]=\"inputLabel\" [ngIf]=\"true\"></ng-template> </td-file-input> <div *ngIf=\"files\" layout=\"row\"> <button #fileUpload class=\"td-file-upload\" md-raised-button type=\"button\" [color]=\"activeColor\" (keyup.delete)=\"cancel()\" (keyup.backspace)=\"cancel()\" (keyup.escape)=\"cancel()\" (click)=\"uploadPressed()\">  <ng-content></ng-content> </button> <button md-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\"             (click)=\"cancel()\"> <md-icon>cancel</md-icon> </button> </div>",
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], TdFileUploadComponent);
export { TdFileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map