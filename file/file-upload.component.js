var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var TdFileUploadComponent = (function () {
    function TdFileUploadComponent() {
        this._multiple = false;
        this._disabled = false;
        /**
         * defaultColor?: string
         * Sets browse button color. Uses same color palette accepted as [mdButton] and defaults to 'primary'.
         */
        this.defaultColor = 'primary';
        /**
         * activeColor?: string
         * Sets upload button color. Uses same color palette accepted as [mdButton] and defaults to 'accent'.
         */
        this.activeColor = 'accent';
        /**
         * cancelColor?: string
         * Sets cancel button color. Uses same color palette accepted as [mdButton] and defaults to 'warn'.
         */
        this.cancelColor = 'warn';
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        this.onUpload = new EventEmitter();
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
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables [TdFileUploadComponent] and clears selected/dropped files.
         */
        set: function (disabled) {
            if (disabled) {
                this.cancel();
            }
            this._disabled = disabled;
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
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    TdFileUploadComponent.prototype.cancel = function () {
        this.files = undefined;
    };
    return TdFileUploadComponent;
}());
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
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdFileUploadComponent.prototype, "multiple", null);
__decorate([
    Input('accept'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "accept", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdFileUploadComponent.prototype, "disabled", null);
__decorate([
    Output('upload'),
    __metadata("design:type", EventEmitter)
], TdFileUploadComponent.prototype, "onUpload", void 0);
TdFileUploadComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'td-file-upload',
        styles: [":host { /** * Class that is added ondragenter by the [TdFileDrop] directive. */ } :host button { padding-left: 0; padding-right: 0; } :host button label { cursor: pointer; display: block; height: 100%; padding-left: 8px; padding-right: 8px; } :host button label md-icon { position: relative; top: 6px; padding-right: 5px; } :host input.md-file-upload-input { display: none; } :host .td-file-cancel { height: 24px; width: 24px; position: relative; top: 24px; left: -12px; } :host .td-file-cancel md-icon { border-radius: 12px; vertical-align: baseline; } :host .drop-zone { border-radius: 3px; } :host .drop-zone * { pointer-events: none; } "],
        template: "<div> <div *ngIf=\"!files\"> <button md-raised-button class=\"td-file-browse\" type=\"button\" [color]=\"defaultColor\"  [multiple]=\"multiple\"  [disabled]=\"disabled\" (keyup.enter)=\"fileBrowse.click()\" (click)=\"fileBrowse.click()\" (fileDrop)=\"files = $event\" tdFileDrop>  <label>    <md-icon>attachment</md-icon>Choose a File... </label> </button> <input #fileBrowse  class=\"md-file-upload-input\"  type=\"file\" [attr.accept]=\"accept\"                 (fileSelect)=\"files = $event\" [multiple]=\"multiple\"  [disabled]=\"disabled\" tdFileSelect> </div> <div *ngIf=\"files\" layout=\"row\"> <button #fileUpload class=\"td-file-upload\" md-raised-button type=\"button\" [color]=\"activeColor\" (keyup.delete)=\"cancel()\" (keyup.backspace)=\"cancel()\" (keyup.escape)=\"cancel()\" (click)=\"uploadPressed()\"> <label>    <md-icon>file_upload</md-icon> {{ files.name || files.length }} <span *ngIf=\"files.length\">files selected</span>  </label> </button> <button md-icon-button type=\"button\" class=\"td-file-cancel\" [color]=\"cancelColor\"             (click)=\"cancel()\"> <md-icon>cancel</md-icon> </button> </div> </div>",
    })
], TdFileUploadComponent);
export { TdFileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map