import { Directive, Input, Output, EventEmitter, HostListener, HostBinding, Host, Optional, ElementRef, Renderer2, Component, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef, ContentChild, Injectable, NgModule } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgModel, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { __extends } from 'tslib';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
import { TemplatePortalDirective, PortalModule } from '@angular/cdk/portal';
import { Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdFileSelectDirective = /** @class */ (function () {
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
        set: /**
         * multiple?: boolean
         * Sets whether multiple files can be selected at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         * @return {?}
         */
        function () {
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
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    TdFileSelectDirective.prototype.onChange = /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target instanceof HTMLInputElement) {
            /** @type {?} */
            var fileInputEl = ((/** @type {?} */ (event.target)));
            /** @type {?} */
            var files = fileInputEl.files;
            if (files.length) {
                /** @type {?} */
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
            }
        }
    };
    TdFileSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFileSelect]',
                },] }
    ];
    /** @nocollapse */
    TdFileSelectDirective.ctorParameters = function () { return [
        { type: NgModel, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    TdFileSelectDirective.propDecorators = {
        multiple: [{ type: Input, args: ['multiple',] }],
        onFileSelect: [{ type: Output, args: ['fileSelect',] }],
        multipleBinding: [{ type: HostBinding, args: ['attr.multiple',] }],
        onChange: [{ type: HostListener, args: ['change', ['$event'],] }]
    };
    return TdFileSelectDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdFileDropBase = /** @class */ (function () {
    function TdFileDropBase() {
    }
    return TdFileDropBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdFileDropMixinBase = mixinDisabled(TdFileDropBase);
var TdFileDropDirective = /** @class */ (function (_super) {
    __extends(TdFileDropDirective, _super);
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
        set: /**
         * multiple?: boolean
         * Sets whether multiple files can be dropped at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         * @return {?}
         */
        function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
        /**
         * Binds native 'disabled' attribute if [disabled] property is 'true'.
         */
        get: /**
         * Binds native 'disabled' attribute if [disabled] property is 'true'.
         * @return {?}
         */
        function () {
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
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDrop = /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            /** @type {?} */
            var transfer = ((/** @type {?} */ (event))).dataTransfer;
            /** @type {?} */
            var files = transfer.files;
            if (files.length) {
                /** @type {?} */
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
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragOver = /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = ((/** @type {?} */ (event))).dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this.disabled || (!this._multiple &&
            ((transfer.items && transfer.items.length > 1) || ((/** @type {?} */ (transfer))).mozItemCount > 1))) {
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
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragEnter = /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     */
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragLeave = /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    };
    /**
     * Validates if the transfer item types are 'Files'.
     */
    /**
     * Validates if the transfer item types are 'Files'.
     * @param {?} types
     * @return {?}
     */
    TdFileDropDirective.prototype._typeCheck = /**
     * Validates if the transfer item types are 'Files'.
     * @param {?} types
     * @return {?}
     */
    function (types) {
        /** @type {?} */
        var dropEffect = 'none';
        if (types) {
            if ((((/** @type {?} */ (types))).contains && ((/** @type {?} */ (types))).contains('Files'))
                || (((/** @type {?} */ (types))).indexOf && ((/** @type {?} */ (types))).indexOf('Files') !== -1)) {
                dropEffect = 'copy';
            }
        }
        return dropEffect;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype._stopEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    TdFileDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFileDrop]',
                    inputs: ['disabled'],
                },] }
    ];
    /** @nocollapse */
    TdFileDropDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdFileDropDirective.propDecorators = {
        multiple: [{ type: Input, args: ['multiple',] }],
        onFileDrop: [{ type: Output, args: ['fileDrop',] }],
        multipleBinding: [{ type: HostBinding, args: ['attr.multiple',] }],
        disabledBinding: [{ type: HostBinding, args: ['attr.disabled',] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
    };
    return TdFileDropDirective;
}(_TdFileDropMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdFileInputLabelDirective = /** @class */ (function (_super) {
    __extends(TdFileInputLabelDirective, _super);
    function TdFileInputLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdFileInputLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-file-input-label]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdFileInputLabelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdFileInputLabelDirective;
}(TemplatePortalDirective));
var TdFileInputBase = /** @class */ (function () {
    function TdFileInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileInputBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdFileInputMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileInputBase));
var TdFileInputComponent = /** @class */ (function (_super) {
    __extends(TdFileInputComponent, _super);
    function TdFileInputComponent(_renderer, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._renderer = _renderer;
        _this._multiple = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        _this.onSelect = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
         */
        set: /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when a file is selected.
     */
    /**
     * Method executed when a file is selected.
     * @param {?} files
     * @return {?}
     */
    TdFileInputComponent.prototype.handleSelect = /**
     * Method executed when a file is selected.
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.writeValue(files);
        this.onSelect.emit(files);
    };
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     */
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     * @return {?}
     */
    TdFileInputComponent.prototype.clear = /**
     * Used to clear the selected files from the [TdFileInputComponent].
     * @return {?}
     */
    function () {
        this.writeValue(undefined);
        this._renderer.setProperty(this.inputElement, 'value', '');
    };
    /** Method executed when the disabled value changes */
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdFileInputComponent.prototype.onDisabledChange = /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (v) {
            this.clear();
        }
    };
    TdFileInputComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdFileInputComponent; }),
                            multi: true,
                        }],
                    selector: 'td-file-input',
                    inputs: ['disabled', 'value'],
                    template: "<div>\n  <button mat-raised-button\n          class=\"td-file-input\"\n          type=\"button\"\n          [color]=\"color\" \n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          (keyup.enter)=\"fileInput.click()\"\n          (click)=\"fileInput.click()\"\n          (fileDrop)=\"handleSelect($event)\"\n          tdFileDrop>\n    <ng-content></ng-content>\n  </button>\n  <input #fileInput \n          class=\"td-file-input-hidden\" \n          type=\"file\"\n          [attr.accept]=\"accept\"                \n          (fileSelect)=\"handleSelect($event)\"\n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          tdFileSelect>\n</div>",
                    styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    TdFileInputComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdFileInputComponent.propDecorators = {
        _inputElement: [{ type: ViewChild, args: ['fileInput',] }],
        color: [{ type: Input, args: ['color',] }],
        multiple: [{ type: Input, args: ['multiple',] }],
        accept: [{ type: Input, args: ['accept',] }],
        onSelect: [{ type: Output, args: ['select',] }]
    };
    return TdFileInputComponent;
}(_TdFileInputMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdFileUploadBase = /** @class */ (function () {
    function TdFileUploadBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileUploadBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileUploadBase));
var TdFileUploadComponent = /** @class */ (function (_super) {
    __extends(TdFileUploadComponent, _super);
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
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdFileUploadComponent; }),
                            multi: true,
                        }],
                    selector: 'td-file-upload',
                    inputs: ['disabled', 'value'],
                    template: "<td-file-input *ngIf=\"!value\"\n               [(ngModel)]=\"value\"\n               [multiple]=\"multiple\"\n               [disabled]=\"disabled\"\n               [accept]=\"accept\"\n               [color]=\"defaultColor\"\n               (select)=\"handleSelect($event)\">\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button #fileUpload\n          class=\"td-file-upload\"\n          mat-raised-button\n          type=\"button\"\n          [color]=\"activeColor\"\n          (keyup.delete)=\"cancel()\"\n          (keyup.backspace)=\"cancel()\"\n          (keyup.escape)=\"cancel()\"\n          (click)=\"uploadPressed()\"> \n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button\n          type=\"button\"\n          class=\"td-file-upload-cancel\"\n          [color]=\"cancelColor\"            \n          (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>",
                    styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    TdFileUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TdFileUploadComponent.propDecorators = {
        fileInput: [{ type: ViewChild, args: [TdFileInputComponent,] }],
        inputLabel: [{ type: ContentChild, args: [TdFileInputLabelDirective,] }],
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdFileService = /** @class */ (function () {
    function TdFileService() {
        this._progressSubject = new Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    Object.defineProperty(TdFileService.prototype, "progress", {
        /**
         * Gets progress observable to keep track of the files being uploaded.
         * Needs to be supported by backend.
         */
        get: /**
         * Gets progress observable to keep track of the files being uploaded.
         * Needs to be supported by backend.
         * @return {?}
         */
        function () {
            return this._progressObservable;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
     */
    /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
     * @param {?} options
     * @return {?}
     */
    TdFileService.prototype.upload = /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        return new Observable(function (subscriber) {
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            /** @type {?} */
            var formData = new FormData();
            if (options.file !== undefined) {
                formData.append('file', options.file);
            }
            else if (options.formData !== undefined) {
                formData = options.formData;
            }
            else {
                return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
            }
            xhr.upload.onprogress = function (event) {
                /** @type {?} */
                var progress = 0;
                if (event.lengthComputable) {
                    progress = Math.round(event.loaded / event.total * 100);
                }
                _this._progressSubject.next(progress);
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        subscriber.next(xhr.response);
                        subscriber.complete();
                    }
                    else {
                        subscriber.error(xhr.response);
                    }
                }
            };
            xhr.open(options.method, options.url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if (options.headers) {
                for (var key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            xhr.send(formData);
        });
    };
    TdFileService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdFileService.ctorParameters = function () { return []; };
    return TdFileService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_FILE = [
    TdFileSelectDirective,
    TdFileDropDirective,
    TdFileUploadComponent,
    TdFileInputComponent,
    TdFileInputLabelDirective,
];
var CovalentFileModule = /** @class */ (function () {
    function CovalentFileModule() {
    }
    CovalentFileModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule,
                        MatIconModule,
                        MatButtonModule,
                        PortalModule,
                    ],
                    declarations: [
                        TD_FILE,
                    ],
                    exports: [
                        TD_FILE,
                    ],
                    providers: [
                        TdFileService,
                    ],
                },] }
    ];
    return CovalentFileModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentFileModule, TdFileDropBase, _TdFileDropMixinBase, TdFileDropDirective, TdFileSelectDirective, TdFileInputLabelDirective, TdFileInputBase, _TdFileInputMixinBase, TdFileInputComponent, TdFileUploadBase, _TdFileUploadMixinBase, TdFileUploadComponent, TdFileService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1maWxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9maWxlL2RpcmVjdGl2ZXMvZmlsZS1zZWxlY3QuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9maWxlL2RpcmVjdGl2ZXMvZmlsZS1kcm9wLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9maWxlL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS9zZXJ2aWNlcy9maWxlLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2ZpbGUvZmlsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRmlsZVNlbGVjdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZWxlY3REaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIHdoZXRoZXIgbXVsdGlwbGUgZmlsZXMgY2FuIGJlIHNlbGVjdGVkIGF0IG9uY2UgaW4gaG9zdCBlbGVtZW50LCBvciBqdXN0IGEgc2luZ2xlIGZpbGUuXG4gICAqIENhbiBhbHNvIGJlICdtdWx0aXBsZScgbmF0aXZlIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogZmlsZVNlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGZpbGUgb3IgZmlsZXMgYXJlIHNlbGVjdGVkIGluIGhvc3QgW0hUTUxJbnB1dEVsZW1lbnRdLlxuICAgKiBFbWl0cyBhIFtGaWxlTGlzdCB8IEZpbGVdIG9iamVjdC5cbiAgICogQWx0ZXJuYXRpdmUgdG8gbm90IHVzZSBbKG5nTW9kZWwpXS5cbiAgICovXG4gIEBPdXRwdXQoJ2ZpbGVTZWxlY3QnKSBvbkZpbGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdCB8IEZpbGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlTGlzdCB8IEZpbGU+KCk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnbXVsdGlwbGUnIGF0dHJpYnV0ZSBpZiBbbXVsdGlwbGVdIHByb3BlcnR5IGlzICd0cnVlJy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tdWx0aXBsZScpXG4gIGdldCBtdWx0aXBsZUJpbmRpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGUgPyAnJyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBtb2RlbDogTmdNb2RlbCkge1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2NoYW5nZScgaG9zdCBldmVudCB0byBnZXQgW0hUTUxJbnB1dEVsZW1lbnRdIGZpbGVzLlxuICAgKiBFbWl0cyB0aGUgJ29uRmlsZVNlbGVjdCcgZXZlbnQgd2l0aCBhIFtGaWxlTGlzdF0gb3IgW0ZpbGVdIGRlcGVuZGluZyBpZiAnbXVsdGlwbGUnIGF0dHIgZXhpc3RzIGluIGhvc3QuXG4gICAqIFVzZXMgWyhuZ01vZGVsKV0gaWYgZGVjbGFyZWQsIGluc3RlYWQgb2YgZW1pdHRpbmcgJ29uRmlsZVNlbGVjdCcgZXZlbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnLCBbJyRldmVudCddKVxuICBvbkNoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgbGV0IGZpbGVJbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50ID0gKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgICBsZXQgZmlsZXM6IEZpbGVMaXN0ID0gZmlsZUlucHV0RWwuZmlsZXM7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCB2YWx1ZTogRmlsZUxpc3QgfCBGaWxlID0gdGhpcy5fbXVsdGlwbGUgPyAoZmlsZXMubGVuZ3RoID4gMSA/IGZpbGVzIDogZmlsZXNbMF0pIDogZmlsZXNbMF07XG4gICAgICAgIHRoaXMubW9kZWwgPyB0aGlzLm1vZGVsLnVwZGF0ZS5lbWl0KHZhbHVlKSA6IHRoaXMub25GaWxlU2VsZWN0LmVtaXQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVGRGaWxlRHJvcEJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRmlsZURyb3BNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVkKFRkRmlsZURyb3BCYXNlKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRmlsZURyb3BdJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZURyb3BEaXJlY3RpdmUgZXh0ZW5kcyBfVGRGaWxlRHJvcE1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogU2V0cyB3aGV0aGVyIG11bHRpcGxlIGZpbGVzIGNhbiBiZSBkcm9wcGVkIGF0IG9uY2UgaW4gaG9zdCBlbGVtZW50LCBvciBqdXN0IGEgc2luZ2xlIGZpbGUuXG4gICAqIENhbiBhbHNvIGJlICdtdWx0aXBsZScgbmF0aXZlIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogZmlsZURyb3A/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSBmaWxlIG9yIGZpbGVzIGFyZSBkcm9wcGVkIGluIGhvc3QgZWxlbWVudCBhZnRlciBiZWluZyB2YWxpZGF0ZWQuXG4gICAqIEVtaXRzIGEgW0ZpbGVMaXN0IHwgRmlsZV0gb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnZmlsZURyb3AnKSBvbkZpbGVEcm9wOiBFdmVudEVtaXR0ZXI8RmlsZUxpc3QgfCBGaWxlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3QgfCBGaWxlPigpO1xuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ211bHRpcGxlJyBhdHRyaWJ1dGUgaWYgW211bHRpcGxlXSBwcm9wZXJ0eSBpcyAndHJ1ZScuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubXVsdGlwbGUnKVxuICBnZXQgbXVsdGlwbGVCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlID8gJycgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdkaXNhYmxlZCcgYXR0cmlidXRlIGlmIFtkaXNhYmxlZF0gcHJvcGVydHkgaXMgJ3RydWUnLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkQmluZGluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvICdkcm9wJyBob3N0IGV2ZW50IHRvIGdldCB2YWxpZGF0ZWQgdHJhbnNmZXIgaXRlbXMuXG4gICAqIEVtaXRzIHRoZSAnb25GaWxlRHJvcCcgZXZlbnQgd2l0aCBhIFtGaWxlTGlzdF0gb3IgW0ZpbGVdIGRlcGVuZGluZyBpZiAnbXVsdGlwbGUnIGF0dHIgZXhpc3RzIGluIGhvc3QuXG4gICAqIFN0b3BzIGV2ZW50IHByb3BhZ2F0aW9uIGFuZCBkZWZhdWx0IGFjdGlvbiBmcm9tIGJyb3dzZXIgZm9yICdkcm9wJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBvbkRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBsZXQgdHJhbnNmZXI6IERhdGFUcmFuc2ZlciA9ICg8RHJhZ0V2ZW50PmV2ZW50KS5kYXRhVHJhbnNmZXI7XG4gICAgICBsZXQgZmlsZXM6IEZpbGVMaXN0ID0gdHJhbnNmZXIuZmlsZXM7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCB2YWx1ZTogRmlsZUxpc3QgfCBGaWxlID0gdGhpcy5fbXVsdGlwbGUgPyAoZmlsZXMubGVuZ3RoID4gMSA/IGZpbGVzIDogZmlsZXNbMF0pIDogZmlsZXNbMF07XG4gICAgICAgIHRoaXMub25GaWxlRHJvcC5lbWl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZHJvcC16b25lJyk7XG4gICAgdGhpcy5fc3RvcEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvICdkcmFnb3ZlcicgaG9zdCBldmVudCB0byB2YWxpZGF0ZSB0cmFuc2ZlciBpdGVtcy5cbiAgICogQ2hlY2tzIGlmICdtdWx0aXBsZScgYXR0ciBleGlzdHMgaW4gaG9zdCB0byBhbGxvdyBtdWx0aXBsZSBmaWxlIGRyb3BzLlxuICAgKiBTdG9wcyBldmVudCBwcm9wYWdhdGlvbiBhbmQgZGVmYXVsdCBhY3Rpb24gZnJvbSBicm93c2VyIGZvciAnZHJhZ292ZXInIGV2ZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCB0cmFuc2ZlcjogRGF0YVRyYW5zZmVyID0gKDxEcmFnRXZlbnQ+ZXZlbnQpLmRhdGFUcmFuc2ZlcjtcbiAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5fdHlwZUNoZWNrKHRyYW5zZmVyLnR5cGVzKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAoIXRoaXMuX211bHRpcGxlICYmXG4gICAgICAoKHRyYW5zZmVyLml0ZW1zICYmIHRyYW5zZmVyLml0ZW1zLmxlbmd0aCA+IDEpIHx8ICg8YW55PnRyYW5zZmVyKS5tb3pJdGVtQ291bnQgPiAxKSkpIHtcbiAgICAgIHRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgfVxuICAgIHRoaXMuX3N0b3BFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnZHJhZ2VudGVyJyBob3N0IGV2ZW50IHRvIGFkZCBhbmltYXRpb24gY2xhc3MgJ2Ryb3Atem9uZScgd2hpY2ggY2FuIGJlIG92ZXJyaWRlbiBpbiBob3N0LlxuICAgKiBTdG9wcyBldmVudCBwcm9wYWdhdGlvbiBhbmQgZGVmYXVsdCBhY3Rpb24gZnJvbSBicm93c2VyIGZvciAnZHJhZ2VudGVyJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbnRlcicsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZHJvcC16b25lJyk7XG4gICAgfVxuICAgIHRoaXMuX3N0b3BFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnZHJhZ2xlYXZlJyBob3N0IGV2ZW50IHRvIHJlbW92ZSBhbmltYXRpb24gY2xhc3MgJ2Ryb3Atem9uZScuXG4gICAqIFN0b3BzIGV2ZW50IHByb3BhZ2F0aW9uIGFuZCBkZWZhdWx0IGFjdGlvbiBmcm9tIGJyb3dzZXIgZm9yICdkcmFnbGVhdmUnIGV2ZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgb25EcmFnTGVhdmUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZHJvcC16b25lJyk7XG4gICAgdGhpcy5fc3RvcEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlIHRyYW5zZmVyIGl0ZW0gdHlwZXMgYXJlICdGaWxlcycuXG4gICAqL1xuICBwcml2YXRlIF90eXBlQ2hlY2sodHlwZXM6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiB8IERPTVN0cmluZ0xpc3QpOiBzdHJpbmcge1xuICAgIGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSAnbm9uZSc7XG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICBpZiAoKCg8YW55PnR5cGVzKS5jb250YWlucyAmJiAoPGFueT50eXBlcykuY29udGFpbnMoJ0ZpbGVzJykpXG4gICAgICB8fCAoKDxhbnk+dHlwZXMpLmluZGV4T2YgJiYgKDxhbnk+dHlwZXMpLmluZGV4T2YoJ0ZpbGVzJykgIT09IC0xKSkge1xuICAgICAgICBkcm9wRWZmZWN0ID0gJ2NvcHknO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZHJvcEVmZmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgX3N0b3BFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkLFxuICAgICAgICAgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWZpbGUtaW5wdXQtbGFiZWxdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGRGaWxlSW5wdXRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZEZpbGVJbnB1dE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IobWl4aW5EaXNhYmxlZChUZEZpbGVJbnB1dEJhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRGaWxlSW5wdXRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1maWxlLWlucHV0JyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3ZhbHVlJ10sXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVJbnB1dENvbXBvbmVudCBleHRlbmRzIF9UZEZpbGVJbnB1dE1peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgSUNhbkRpc2FibGUge1xuXG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFRoZSBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPiBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIF9pbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGdldCBpbnB1dEVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqIFNldHMgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXS5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogU2V0cyBpZiBtdWx0aXBsZSBmaWxlcyBjYW4gYmUgZHJvcHBlZC9zZWxlY3RlZCBhdCBvbmNlIGluIFtUZEZpbGVJbnB1dENvbXBvbmVudF0uXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICAvKipcbiAgICogYWNjZXB0Pzogc3RyaW5nXG4gICAqIFNldHMgZmlsZXMgYWNjZXB0ZWQgd2hlbiBvcGVuaW5nIHRoZSBmaWxlIGJyb3dzZXIgZGlhbG9nLlxuICAgKiBTYW1lIGFzICdhY2NlcHQnIGF0dHJpYnV0ZSBpbiA8aW5wdXQvPiBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCdhY2NlcHQnKSBhY2NlcHQ6IHN0cmluZztcblxuICAvKipcbiAgICogc2VsZWN0PzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCBhIGZpbGUgaXMgc2VsZWN0ZWRcbiAgICogRW1pdHMgYSBbRmlsZSB8IEZpbGVMaXN0XSBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzZWxlY3QnKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPEZpbGUgfCBGaWxlTGlzdD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGUgfCBGaWxlTGlzdD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiBhIGZpbGUgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBoYW5kbGVTZWxlY3QoZmlsZXM6IEZpbGUgfCBGaWxlTGlzdCk6IHZvaWQge1xuICAgIHRoaXMud3JpdGVWYWx1ZShmaWxlcyk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KGZpbGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGNsZWFyIHRoZSBzZWxlY3RlZCBmaWxlcyBmcm9tIHRoZSBbVGRGaWxlSW5wdXRDb21wb25lbnRdLlxuICAgKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dEVsZW1lbnQsICd2YWx1ZScsICcnKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodikge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCwgQ29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuaW1wb3J0IHsgVGRGaWxlSW5wdXRDb21wb25lbnQsIFRkRmlsZUlucHV0TGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuLi9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIFRkRmlsZVVwbG9hZEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRmlsZVVwbG9hZE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IobWl4aW5EaXNhYmxlZChUZEZpbGVVcGxvYWRCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkRmlsZVVwbG9hZENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxuICBzZWxlY3RvcjogJ3RkLWZpbGUtdXBsb2FkJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3ZhbHVlJ10sXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZVVwbG9hZENvbXBvbmVudCBleHRlbmRzIF9UZEZpbGVVcGxvYWRNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoVGRGaWxlSW5wdXRDb21wb25lbnQpIGZpbGVJbnB1dDogVGRGaWxlSW5wdXRDb21wb25lbnQ7XG5cbiAgQENvbnRlbnRDaGlsZChUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlKSBpbnB1dExhYmVsOiBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBkZWZhdWx0Q29sb3I/OiBzdHJpbmdcbiAgICogU2V0cyBicm93c2UgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXSBhbmQgZGVmYXVsdHMgdG8gJ3ByaW1hcnknLlxuICAgKi9cbiAgQElucHV0KCdkZWZhdWx0Q29sb3InKSBkZWZhdWx0Q29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICAvKipcbiAgICogYWN0aXZlQ29sb3I/OiBzdHJpbmdcbiAgICogU2V0cyB1cGxvYWQgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXSBhbmQgZGVmYXVsdHMgdG8gJ2FjY2VudCcuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZUNvbG9yJykgYWN0aXZlQ29sb3I6IHN0cmluZyA9ICdhY2NlbnQnO1xuXG4gIC8qKlxuICAgKiBjYW5jZWxDb2xvcj86IHN0cmluZ1xuICAgKiBTZXRzIGNhbmNlbCBidXR0b24gY29sb3IuIFVzZXMgc2FtZSBjb2xvciBwYWxldHRlIGFjY2VwdGVkIGFzIFtNYXRCdXR0b25dIGFuZCBkZWZhdWx0cyB0byAnd2FybicuXG4gICAqL1xuICBASW5wdXQoJ2NhbmNlbENvbG9yJykgY2FuY2VsQ29sb3I6IHN0cmluZyA9ICd3YXJuJztcblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgbXVsdGlwbGUgZmlsZXMgY2FuIGJlIGRyb3BwZWQvc2VsZWN0ZWQgYXQgb25jZSBpbiBbVGRGaWxlVXBsb2FkQ29tcG9uZW50XS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1aXJlZD86IGJvb2xlYW5cbiAgICogRm9yY2VzIGF0IGxlYXN0IG9uZSBmaWxlIHVwbG9hZC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdyZXF1aXJlZCcpXG4gIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVkKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjY2VwdD86IHN0cmluZ1xuICAgKiBTZXRzIGZpbGVzIGFjY2VwdGVkIHdoZW4gb3BlbmluZyB0aGUgZmlsZSBicm93c2VyIGRpYWxvZy5cbiAgICogU2FtZSBhcyAnYWNjZXB0JyBhdHRyaWJ1dGUgaW4gPGlucHV0Lz4gZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgnYWNjZXB0JykgYWNjZXB0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGZpbGUgaXMgc2VsZWN0ZWQuXG4gICAqIEVtaXRzIGEgW0ZpbGUgfCBGaWxlTGlzdF0gb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc2VsZWN0Jykgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+KCk7XG5cbiAgLyoqXG4gICAqIHVwbG9hZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB1cGxvYWQgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqIEVtaXRzIGEgW0ZpbGUgfCBGaWxlTGlzdF0gb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgndXBsb2FkJykgb25VcGxvYWQ6IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+KCk7XG5cbiAgLyoqXG4gICAqIGNhbmNlbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCdjYW5jZWwnKSBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHVwbG9hZCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIHVwbG9hZFByZXNzZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMub25VcGxvYWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgaGFuZGxlU2VsZWN0KHZhbHVlOiBGaWxlIHwgRmlsZUxpc3QpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzIGV4ZWN1dGVkIHdoZW4gY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBDbGVhcnMgZmlsZXMuXG4gICAqL1xuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uQ2FuY2VsLmVtaXQodW5kZWZpbmVkKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZmlsZSBpbnB1dCBpcyByZW5kZXJlZCBiZWZvcmUgY2xlYXJpbmcgaXRcbiAgICBpZiAodGhpcy5maWxlSW5wdXQpIHtcbiAgICAgIHRoaXMuZmlsZUlucHV0LmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2KSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVcGxvYWRPcHRpb25zIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG1ldGhvZDogJ3Bvc3QnIHwgJ3B1dCc7XG4gIGZpbGU/OiBGaWxlO1xuICBoZWFkZXJzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGZvcm1EYXRhPzogRm9ybURhdGE7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9wcm9ncmVzc1N1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgLyoqXG4gICAqIEdldHMgcHJvZ3Jlc3Mgb2JzZXJ2YWJsZSB0byBrZWVwIHRyYWNrIG9mIHRoZSBmaWxlcyBiZWluZyB1cGxvYWRlZC5cbiAgICogTmVlZHMgdG8gYmUgc3VwcG9ydGVkIGJ5IGJhY2tlbmQuXG4gICAqL1xuICBnZXQgcHJvZ3Jlc3MoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlID0gdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBvcHRpb25zOiBJVXBsb2FkT3B0aW9ucyB7XG4gICAqICAgICB1cmw6IHN0cmluZyxcbiAgICogICAgIG1ldGhvZDogJ3Bvc3QnIHwgJ3B1dCcsXG4gICAqICAgICBmaWxlPzogRmlsZSxcbiAgICogICAgIGhlYWRlcnM/OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICogICAgIGZvcm1EYXRhPzogRm9ybURhdGFcbiAgICogfVxuICAgKlxuICAgKiBVc2VzIHVuZGVybHlpbmcgW1hNTEh0dHBSZXF1ZXN0XSB0byB1cGxvYWQgYSBmaWxlIHRvIGEgdXJsLlxuICAgKiBXaWxsIGJlIGRlcHJpY2F0ZWQgd2hlbiBBbmd1bGFyIGZpeGVzIFtIdHRwXSB0byBhbGxvdyBbRm9ybURhdGFdIGFzIGJvZHkuXG4gICAqL1xuICB1cGxvYWQob3B0aW9uczogSVVwbG9hZE9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAgIGxldCB4aHI6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBsZXQgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmZpbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmZvcm1EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9ybURhdGEgPSBvcHRpb25zLmZvcm1EYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoJ0ZvciBbSVVwbG9hZE9wdGlvbnNdIHlvdSBoYXZlIHRvIHNldCBlaXRoZXIgdGhlIFtmaWxlXSBvciB0aGUgW2Zvcm1EYXRhXSBwcm9wZXJ0eS4nKTtcbiAgICAgIH1cblxuICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICAgIGxldCBwcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KHByb2dyZXNzKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih4aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5pbXBvcnQgeyBUZEZpbGVTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmlsZS1zZWxlY3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkRmlsZURyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmlsZS1kcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZEZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEZpbGVJbnB1dENvbXBvbmVudCwgVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9maWxlLnNlcnZpY2UnO1xuXG5jb25zdCBURF9GSUxFOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRGaWxlU2VsZWN0RGlyZWN0aXZlLFxuICBUZEZpbGVEcm9wRGlyZWN0aXZlLFxuICBUZEZpbGVVcGxvYWRDb21wb25lbnQsXG4gIFRkRmlsZUlucHV0Q29tcG9uZW50LFxuICBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0ZJTEUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9GSUxFLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBUZEZpbGVTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEZpbGVNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBc0NFLCtCQUF3QyxLQUFjO1FBQWQsVUFBSyxHQUFMLEtBQUssQ0FBUztRQTVCOUMsY0FBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7OztRQWtCYixpQkFBWSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztLQVd2RztJQXRCRCxzQkFDSSwyQ0FBUTs7Ozs7Ozs7Ozs7OztRQURaLFVBQ2EsUUFBaUI7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDs7O09BQUE7SUFhRCxzQkFDSSxrREFBZTs7Ozs7Ozs7UUFEbkI7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLEdB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