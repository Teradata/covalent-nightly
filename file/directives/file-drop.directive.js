import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled } from '../../common/common.module';
var TdFileDropBase = (function () {
    function TdFileDropBase() {
    }
    return TdFileDropBase;
}());
export { TdFileDropBase };
/* tslint:disable-next-line */
export var _TdFileDropMixinBase = mixinDisabled(TdFileDropBase);
var TdFileDropDirective = (function (_super) {
    tslib_1.__extends(TdFileDropDirective, _super);
    function TdFileDropDirective(_renderer, _element) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._element = _element;
        _this._multiple = false;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         */
        _this.onFileDrop = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be dropped at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
        /**
         * Binds native 'disabled' attribute if [disabled] property is 'true'.
         */
        get: function () {
            return this.disabled ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     */
    TdFileDropDirective.prototype.onDrop = function (event) {
        if (!this.disabled) {
            var transfer = event.dataTransfer;
            var files = transfer.files;
            if (files.length) {
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.onFileDrop.emit(value);
            }
        }
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     */
    TdFileDropDirective.prototype.onDragOver = function (event) {
        var transfer = event.dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this.disabled || (!this._multiple &&
            ((transfer.items && transfer.items.length > 1) || transfer.mozItemCount > 1))) {
            transfer.dropEffect = 'none';
        }
        else {
            transfer.dropEffect = 'copy';
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     */
    TdFileDropDirective.prototype.onDragEnter = function (event) {
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     */
    TdFileDropDirective.prototype.onDragLeave = function (event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    };
    /**
     * Validates if the transfer item types are 'Files'.
     */
    TdFileDropDirective.prototype._typeCheck = function (types) {
        var dropEffect = 'none';
        if (types) {
            if ((types.contains && types.contains('Files'))
                || (types.indexOf && types.indexOf('Files') !== -1)) {
                dropEffect = 'copy';
            }
        }
        return dropEffect;
    };
    TdFileDropDirective.prototype._stopEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    tslib_1.__decorate([
        Input('multiple'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdFileDropDirective.prototype, "multiple", null);
    tslib_1.__decorate([
        Output('fileDrop'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdFileDropDirective.prototype, "onFileDrop", void 0);
    tslib_1.__decorate([
        HostBinding('attr.multiple'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdFileDropDirective.prototype, "multipleBinding", null);
    tslib_1.__decorate([
        HostBinding('attr.disabled'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdFileDropDirective.prototype, "disabledBinding", null);
    tslib_1.__decorate([
        HostListener('drop', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdFileDropDirective.prototype, "onDrop", null);
    tslib_1.__decorate([
        HostListener('dragover', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdFileDropDirective.prototype, "onDragOver", null);
    tslib_1.__decorate([
        HostListener('dragenter', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdFileDropDirective.prototype, "onDragEnter", null);
    tslib_1.__decorate([
        HostListener('dragleave', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdFileDropDirective.prototype, "onDragLeave", null);
    TdFileDropDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdFileDrop]',
            inputs: ['disabled'],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
    ], TdFileDropDirective);
    return TdFileDropDirective;
}(_TdFileDropMixinBase));
export { TdFileDropDirective };
//# sourceMappingURL=file-drop.directive.js.map