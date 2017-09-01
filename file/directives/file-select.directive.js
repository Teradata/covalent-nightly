import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, Host, Optional } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgModel } from '@angular/forms';
var TdFileSelectDirective = (function () {
    function TdFileSelectDirective(model) {
        this.model = model;
        this._multiple = false;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         */
        this.onFileSelect = new EventEmitter();
    }
    Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be selected at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     */
    TdFileSelectDirective.prototype.onChange = function (event) {
        if (event.target instanceof HTMLInputElement) {
            var fileInputEl = event.target;
            var files = fileInputEl.files;
            if (files.length) {
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
            }
        }
    };
    tslib_1.__decorate([
        Input('multiple'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdFileSelectDirective.prototype, "multiple", null);
    tslib_1.__decorate([
        Output('fileSelect'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdFileSelectDirective.prototype, "onFileSelect", void 0);
    tslib_1.__decorate([
        HostBinding('attr.multiple'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdFileSelectDirective.prototype, "multipleBinding", null);
    tslib_1.__decorate([
        HostListener('change', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdFileSelectDirective.prototype, "onChange", null);
    TdFileSelectDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdFileSelect]',
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Host()),
        tslib_1.__metadata("design:paramtypes", [NgModel])
    ], TdFileSelectDirective);
    return TdFileSelectDirective;
}());
export { TdFileSelectDirective };
//# sourceMappingURL=file-select.directive.js.map