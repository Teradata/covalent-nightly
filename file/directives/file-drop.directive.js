var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';
var TdFileDropDirective = (function () {
    function TdFileDropDirective(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._multiple = false;
        this._disabled = false;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         */
        this.onFileDrop = new EventEmitter();
    }
    Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be dropped at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "disabled", {
        /**
         * disabled?: boolean
         * Disabled drop events for host element.
         */
        set: function (disabled) {
            this._disabled = disabled;
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
            return this._disabled ? '' : undefined;
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
        if (!this._disabled) {
            var transfer = event.dataTransfer;
            var files = transfer.files;
            if (files.length) {
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.onFileDrop.emit(value);
            }
        }
        this._renderer.setElementClass(this._element.nativeElement, 'drop-zone', false);
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
        if (this._disabled || (!this._multiple &&
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
        if (!this._disabled) {
            this._renderer.setElementClass(this._element.nativeElement, 'drop-zone', true);
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     */
    TdFileDropDirective.prototype.onDragLeave = function (event) {
        this._renderer.setElementClass(this._element.nativeElement, 'drop-zone', false);
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
    return TdFileDropDirective;
}());
__decorate([
    Input('multiple'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdFileDropDirective.prototype, "multiple", null);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdFileDropDirective.prototype, "disabled", null);
__decorate([
    Output('fileDrop'),
    __metadata("design:type", EventEmitter)
], TdFileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    HostBinding('attr.multiple'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TdFileDropDirective.prototype, "multipleBinding", null);
__decorate([
    HostBinding('attr.disabled'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TdFileDropDirective.prototype, "disabledBinding", null);
__decorate([
    HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], TdFileDropDirective.prototype, "onDrop", null);
__decorate([
    HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], TdFileDropDirective.prototype, "onDragOver", null);
__decorate([
    HostListener('dragenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], TdFileDropDirective.prototype, "onDragEnter", null);
__decorate([
    HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], TdFileDropDirective.prototype, "onDragLeave", null);
TdFileDropDirective = __decorate([
    Directive({
        selector: '[tdFileDrop]',
    }),
    __metadata("design:paramtypes", [Renderer, ElementRef])
], TdFileDropDirective);
export { TdFileDropDirective };
//# sourceMappingURL=file-drop.directive.js.map