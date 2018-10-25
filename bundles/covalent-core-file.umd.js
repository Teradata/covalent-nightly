(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/coercion'), require('@angular/forms'), require('@covalent/core/common'), require('@angular/cdk/portal'), require('rxjs'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/file', ['exports', '@angular/core', '@angular/cdk/coercion', '@angular/forms', '@covalent/core/common', '@angular/cdk/portal', 'rxjs', '@angular/common', '@angular/material/icon', '@angular/material/button'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.file = {}),global.ng.core,global.ng.cdk.coercion,global.ng.forms,global.covalent.core.common,global.ng.cdk.portal,global.rxjs,global.ng.common,global.ng.material.icon,global.ng.material.button));
}(this, (function (exports,core,coercion,forms,common,portal,rxjs,common$1,icon,button) { 'use strict';

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
            this.onFileSelect = new core.EventEmitter();
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
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
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
             */ function () {
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
                    var fileInputEl = (( /** @type {?} */(event.target)));
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
            { type: core.Directive, args: [{
                        selector: '[tdFileSelect]',
                    },] }
        ];
        /** @nocollapse */
        TdFileSelectDirective.ctorParameters = function () {
            return [
                { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
            ];
        };
        TdFileSelectDirective.propDecorators = {
            multiple: [{ type: core.Input, args: ['multiple',] }],
            onFileSelect: [{ type: core.Output, args: ['fileSelect',] }],
            multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
            onChange: [{ type: core.HostListener, args: ['change', ['$event'],] }]
        };
        return TdFileSelectDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
    var _TdFileDropMixinBase = common.mixinDisabled(TdFileDropBase);
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
            _this.onFileDrop = new core.EventEmitter();
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
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
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
             */ function () {
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
             */ function () {
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
                    var transfer = (( /** @type {?} */(event))).dataTransfer;
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
                var transfer = (( /** @type {?} */(event))).dataTransfer;
                transfer.dropEffect = this._typeCheck(transfer.types);
                if (this.disabled || (!this._multiple &&
                    ((transfer.items && transfer.items.length > 1) || (( /** @type {?} */(transfer))).mozItemCount > 1))) {
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
                    if (((( /** @type {?} */(types))).contains && (( /** @type {?} */(types))).contains('Files'))
                        || ((( /** @type {?} */(types))).indexOf && (( /** @type {?} */(types))).indexOf('Files') !== -1)) {
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
            { type: core.Directive, args: [{
                        selector: '[tdFileDrop]',
                        inputs: ['disabled'],
                    },] }
        ];
        /** @nocollapse */
        TdFileDropDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdFileDropDirective.propDecorators = {
            multiple: [{ type: core.Input, args: ['multiple',] }],
            onFileDrop: [{ type: core.Output, args: ['fileDrop',] }],
            multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
            disabledBinding: [{ type: core.HostBinding, args: ['attr.disabled',] }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            onDragEnter: [{ type: core.HostListener, args: ['dragenter', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }]
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
            { type: core.Directive, args: [{
                        selector: '[td-file-input-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdFileInputLabelDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdFileInputLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdFileInputBase = /** @class */ (function () {
        function TdFileInputBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileInputBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileInputMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(TdFileInputBase));
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
            _this.onSelect = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
            get: /**
             * @return {?}
             */ function () {
                return this._inputElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
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
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdFileInputComponent; }),
                                multi: true,
                            }],
                        selector: 'td-file-input',
                        inputs: ['disabled', 'value'],
                        template: "<div>\n  <button mat-raised-button\n          class=\"td-file-input\"\n          type=\"button\"\n          [color]=\"color\" \n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          (keyup.enter)=\"fileInput.click()\"\n          (click)=\"fileInput.click()\"\n          (fileDrop)=\"handleSelect($event)\"\n          tdFileDrop>\n    <ng-content></ng-content>\n  </button>\n  <input #fileInput \n          class=\"td-file-input-hidden\" \n          type=\"file\"\n          [attr.accept]=\"accept\"                \n          (fileSelect)=\"handleSelect($event)\"\n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          tdFileSelect>\n</div>",
                        styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileInputComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdFileInputComponent.propDecorators = {
            _inputElement: [{ type: core.ViewChild, args: ['fileInput',] }],
            color: [{ type: core.Input, args: ['color',] }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            accept: [{ type: core.Input, args: ['accept',] }],
            onSelect: [{ type: core.Output, args: ['select',] }]
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
    var _TdFileUploadMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(TdFileUploadBase));
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
            _this.onSelect = new core.EventEmitter();
            /**
             * upload?: function
             * Event emitted when upload button is clicked.
             * Emits a [File | FileList] object.
             */
            _this.onUpload = new core.EventEmitter();
            /**
             * cancel?: function
             * Event emitted when cancel button is clicked.
             */
            _this.onCancel = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileUploadComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (required) {
                this._required = coercion.coerceBooleanProperty(required);
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
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdFileUploadComponent; }),
                                multi: true,
                            }],
                        selector: 'td-file-upload',
                        inputs: ['disabled', 'value'],
                        template: "<td-file-input *ngIf=\"!value\"\n               [(ngModel)]=\"value\"\n               [multiple]=\"multiple\"\n               [disabled]=\"disabled\"\n               [accept]=\"accept\"\n               [color]=\"defaultColor\"\n               (select)=\"handleSelect($event)\">\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button #fileUpload\n          class=\"td-file-upload\"\n          mat-raised-button\n          type=\"button\"\n          [color]=\"activeColor\"\n          (keyup.delete)=\"cancel()\"\n          (keyup.backspace)=\"cancel()\"\n          (keyup.escape)=\"cancel()\"\n          (click)=\"uploadPressed()\"> \n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button\n          type=\"button\"\n          class=\"td-file-upload-cancel\"\n          [color]=\"cancelColor\"            \n          (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>",
                        styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileUploadComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        TdFileUploadComponent.propDecorators = {
            fileInput: [{ type: core.ViewChild, args: [TdFileInputComponent,] }],
            inputLabel: [{ type: core.ContentChild, args: [TdFileInputLabelDirective,] }],
            defaultColor: [{ type: core.Input, args: ['defaultColor',] }],
            activeColor: [{ type: core.Input, args: ['activeColor',] }],
            cancelColor: [{ type: core.Input, args: ['cancelColor',] }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            required: [{ type: core.Input, args: ['required',] }],
            accept: [{ type: core.Input, args: ['accept',] }],
            onSelect: [{ type: core.Output, args: ['select',] }],
            onUpload: [{ type: core.Output, args: ['upload',] }],
            onCancel: [{ type: core.Output, args: ['cancel',] }]
        };
        return TdFileUploadComponent;
    }(_TdFileUploadMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileService = /** @class */ (function () {
        function TdFileService() {
            this._progressSubject = new rxjs.Subject();
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
             */ function () {
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
                return new rxjs.Observable(function (subscriber) {
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
            { type: core.Injectable }
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
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common$1.CommonModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                            portal.PortalModule,
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

    exports.CovalentFileModule = CovalentFileModule;
    exports.TdFileDropBase = TdFileDropBase;
    exports._TdFileDropMixinBase = _TdFileDropMixinBase;
    exports.TdFileDropDirective = TdFileDropDirective;
    exports.TdFileSelectDirective = TdFileSelectDirective;
    exports.TdFileInputLabelDirective = TdFileInputLabelDirective;
    exports.TdFileInputBase = TdFileInputBase;
    exports._TdFileInputMixinBase = _TdFileInputMixinBase;
    exports.TdFileInputComponent = TdFileInputComponent;
    exports.TdFileUploadBase = TdFileUploadBase;
    exports._TdFileUploadMixinBase = _TdFileUploadMixinBase;
    exports.TdFileUploadComponent = TdFileUploadComponent;
    exports.TdFileService = TdFileService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1maWxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS9kaXJlY3RpdmVzL2ZpbGUtc2VsZWN0LmRpcmVjdGl2ZS50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2ZpbGUvZGlyZWN0aXZlcy9maWxlLWRyb3AuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9maWxlL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2ZpbGUvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9maWxlL3NlcnZpY2VzL2ZpbGUuc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS9maWxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRGaWxlU2VsZWN0XScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZVNlbGVjdERpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIFNldHMgd2hldGhlciBtdWx0aXBsZSBmaWxlcyBjYW4gYmUgc2VsZWN0ZWQgYXQgb25jZSBpbiBob3N0IGVsZW1lbnQsIG9yIGp1c3QgYSBzaW5nbGUgZmlsZS5cbiAgICogQ2FuIGFsc28gYmUgJ211bHRpcGxlJyBuYXRpdmUgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmaWxlU2VsZWN0PzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgZmlsZSBvciBmaWxlcyBhcmUgc2VsZWN0ZWQgaW4gaG9zdCBbSFRNTElucHV0RWxlbWVudF0uXG4gICAqIEVtaXRzIGEgW0ZpbGVMaXN0IHwgRmlsZV0gb2JqZWN0LlxuICAgKiBBbHRlcm5hdGl2ZSB0byBub3QgdXNlIFsobmdNb2RlbCldLlxuICAgKi9cbiAgQE91dHB1dCgnZmlsZVNlbGVjdCcpIG9uRmlsZVNlbGVjdDogRXZlbnRFbWl0dGVyPEZpbGVMaXN0IHwgRmlsZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0IHwgRmlsZT4oKTtcblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdtdWx0aXBsZScgYXR0cmlidXRlIGlmIFttdWx0aXBsZV0gcHJvcGVydHkgaXMgJ3RydWUnLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm11bHRpcGxlJylcbiAgZ2V0IG11bHRpcGxlQmluZGluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZSA/ICcnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG1vZGVsOiBOZ01vZGVsKSB7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnY2hhbmdlJyBob3N0IGV2ZW50IHRvIGdldCBbSFRNTElucHV0RWxlbWVudF0gZmlsZXMuXG4gICAqIEVtaXRzIHRoZSAnb25GaWxlU2VsZWN0JyBldmVudCB3aXRoIGEgW0ZpbGVMaXN0XSBvciBbRmlsZV0gZGVwZW5kaW5nIGlmICdtdWx0aXBsZScgYXR0ciBleGlzdHMgaW4gaG9zdC5cbiAgICogVXNlcyBbKG5nTW9kZWwpXSBpZiBkZWNsYXJlZCwgaW5zdGVhZCBvZiBlbWl0dGluZyAnb25GaWxlU2VsZWN0JyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBsZXQgZmlsZUlucHV0RWw6IEhUTUxJbnB1dEVsZW1lbnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIGxldCBmaWxlczogRmlsZUxpc3QgPSBmaWxlSW5wdXRFbC5maWxlcztcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHZhbHVlOiBGaWxlTGlzdCB8IEZpbGUgPSB0aGlzLl9tdWx0aXBsZSA/IChmaWxlcy5sZW5ndGggPiAxID8gZmlsZXMgOiBmaWxlc1swXSkgOiBmaWxlc1swXTtcbiAgICAgICAgdGhpcy5tb2RlbCA/IHRoaXMubW9kZWwudXBkYXRlLmVtaXQodmFsdWUpIDogdGhpcy5vbkZpbGVTZWxlY3QuZW1pdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFRkRmlsZURyb3BCYXNlIHt9XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZEZpbGVEcm9wTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlZChUZEZpbGVEcm9wQmFzZSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZpbGVEcm9wXScsXG4gIGlucHV0czogWydkaXNhYmxlZCddLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVEcm9wRGlyZWN0aXZlIGV4dGVuZHMgX1RkRmlsZURyb3BNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ2FuRGlzYWJsZSB7XG5cbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIFNldHMgd2hldGhlciBtdWx0aXBsZSBmaWxlcyBjYW4gYmUgZHJvcHBlZCBhdCBvbmNlIGluIGhvc3QgZWxlbWVudCwgb3IganVzdCBhIHNpbmdsZSBmaWxlLlxuICAgKiBDYW4gYWxzbyBiZSAnbXVsdGlwbGUnIG5hdGl2ZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpbGVEcm9wPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgZmlsZSBvciBmaWxlcyBhcmUgZHJvcHBlZCBpbiBob3N0IGVsZW1lbnQgYWZ0ZXIgYmVpbmcgdmFsaWRhdGVkLlxuICAgKiBFbWl0cyBhIFtGaWxlTGlzdCB8IEZpbGVdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ2ZpbGVEcm9wJykgb25GaWxlRHJvcDogRXZlbnRFbWl0dGVyPEZpbGVMaXN0IHwgRmlsZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0IHwgRmlsZT4oKTtcblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdtdWx0aXBsZScgYXR0cmlidXRlIGlmIFttdWx0aXBsZV0gcHJvcGVydHkgaXMgJ3RydWUnLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm11bHRpcGxlJylcbiAgZ2V0IG11bHRpcGxlQmluZGluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZSA/ICcnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnZGlzYWJsZWQnIGF0dHJpYnV0ZSBpZiBbZGlzYWJsZWRdIHByb3BlcnR5IGlzICd0cnVlJy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZEJpbmRpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICcnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnZHJvcCcgaG9zdCBldmVudCB0byBnZXQgdmFsaWRhdGVkIHRyYW5zZmVyIGl0ZW1zLlxuICAgKiBFbWl0cyB0aGUgJ29uRmlsZURyb3AnIGV2ZW50IHdpdGggYSBbRmlsZUxpc3RdIG9yIFtGaWxlXSBkZXBlbmRpbmcgaWYgJ211bHRpcGxlJyBhdHRyIGV4aXN0cyBpbiBob3N0LlxuICAgKiBTdG9wcyBldmVudCBwcm9wYWdhdGlvbiBhbmQgZGVmYXVsdCBhY3Rpb24gZnJvbSBicm93c2VyIGZvciAnZHJvcCcgZXZlbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgbGV0IHRyYW5zZmVyOiBEYXRhVHJhbnNmZXIgPSAoPERyYWdFdmVudD5ldmVudCkuZGF0YVRyYW5zZmVyO1xuICAgICAgbGV0IGZpbGVzOiBGaWxlTGlzdCA9IHRyYW5zZmVyLmZpbGVzO1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgdmFsdWU6IEZpbGVMaXN0IHwgRmlsZSA9IHRoaXMuX211bHRpcGxlID8gKGZpbGVzLmxlbmd0aCA+IDEgPyBmaWxlcyA6IGZpbGVzWzBdKSA6IGZpbGVzWzBdO1xuICAgICAgICB0aGlzLm9uRmlsZURyb3AuZW1pdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Ryb3Atem9uZScpO1xuICAgIHRoaXMuX3N0b3BFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnZHJhZ292ZXInIGhvc3QgZXZlbnQgdG8gdmFsaWRhdGUgdHJhbnNmZXIgaXRlbXMuXG4gICAqIENoZWNrcyBpZiAnbXVsdGlwbGUnIGF0dHIgZXhpc3RzIGluIGhvc3QgdG8gYWxsb3cgbXVsdGlwbGUgZmlsZSBkcm9wcy5cbiAgICogU3RvcHMgZXZlbnQgcHJvcGFnYXRpb24gYW5kIGRlZmF1bHQgYWN0aW9uIGZyb20gYnJvd3NlciBmb3IgJ2RyYWdvdmVyJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgb25EcmFnT3ZlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgdHJhbnNmZXI6IERhdGFUcmFuc2ZlciA9ICg8RHJhZ0V2ZW50PmV2ZW50KS5kYXRhVHJhbnNmZXI7XG4gICAgdHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuX3R5cGVDaGVjayh0cmFuc2Zlci50eXBlcyk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgKCF0aGlzLl9tdWx0aXBsZSAmJlxuICAgICAgKCh0cmFuc2Zlci5pdGVtcyAmJiB0cmFuc2Zlci5pdGVtcy5sZW5ndGggPiAxKSB8fCAoPGFueT50cmFuc2ZlcikubW96SXRlbUNvdW50ID4gMSkpKSB7XG4gICAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICAgIH1cbiAgICB0aGlzLl9zdG9wRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2RyYWdlbnRlcicgaG9zdCBldmVudCB0byBhZGQgYW5pbWF0aW9uIGNsYXNzICdkcm9wLXpvbmUnIHdoaWNoIGNhbiBiZSBvdmVycmlkZW4gaW4gaG9zdC5cbiAgICogU3RvcHMgZXZlbnQgcHJvcGFnYXRpb24gYW5kIGRlZmF1bHQgYWN0aW9uIGZyb20gYnJvd3NlciBmb3IgJ2RyYWdlbnRlcicgZXZlbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Ryb3Atem9uZScpO1xuICAgIH1cbiAgICB0aGlzLl9zdG9wRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2RyYWdsZWF2ZScgaG9zdCBldmVudCB0byByZW1vdmUgYW5pbWF0aW9uIGNsYXNzICdkcm9wLXpvbmUnLlxuICAgKiBTdG9wcyBldmVudCBwcm9wYWdhdGlvbiBhbmQgZGVmYXVsdCBhY3Rpb24gZnJvbSBicm93c2VyIGZvciAnZHJhZ2xlYXZlJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Ryb3Atem9uZScpO1xuICAgIHRoaXMuX3N0b3BFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGlmIHRoZSB0cmFuc2ZlciBpdGVtIHR5cGVzIGFyZSAnRmlsZXMnLlxuICAgKi9cbiAgcHJpdmF0ZSBfdHlwZUNoZWNrKHR5cGVzOiBSZWFkb25seUFycmF5PHN0cmluZz4gfCBET01TdHJpbmdMaXN0KTogc3RyaW5nIHtcbiAgICBsZXQgZHJvcEVmZmVjdDogc3RyaW5nID0gJ25vbmUnO1xuICAgIGlmICh0eXBlcykge1xuICAgICAgaWYgKCgoPGFueT50eXBlcykuY29udGFpbnMgJiYgKDxhbnk+dHlwZXMpLmNvbnRhaW5zKCdGaWxlcycpKVxuICAgICAgfHwgKCg8YW55PnR5cGVzKS5pbmRleE9mICYmICg8YW55PnR5cGVzKS5pbmRleE9mKCdGaWxlcycpICE9PSAtMSkpIHtcbiAgICAgICAgZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRyb3BFZmZlY3Q7XG4gIH1cblxuICBwcml2YXRlIF9zdG9wRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCxcbiAgICAgICAgIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1maWxlLWlucHV0LWxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRkRmlsZUlucHV0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRGaWxlSW5wdXRNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRGaWxlSW5wdXRCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkRmlsZUlucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIHNlbGVjdG9yOiAndGQtZmlsZS1pbnB1dCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGaWxlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBfVGRGaWxlSW5wdXRNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgbmF0aXZlIGA8aW5wdXQgdHlwZT1cImZpbGVcIj4gZWxlbWVudCAqL1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBnZXQgaW5wdXRFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKiBTZXRzIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0uXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgbXVsdGlwbGUgZmlsZXMgY2FuIGJlIGRyb3BwZWQvc2VsZWN0ZWQgYXQgb25jZSBpbiBbVGRGaWxlSW5wdXRDb21wb25lbnRdLlxuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjY2VwdD86IHN0cmluZ1xuICAgKiBTZXRzIGZpbGVzIGFjY2VwdGVkIHdoZW4gb3BlbmluZyB0aGUgZmlsZSBicm93c2VyIGRpYWxvZy5cbiAgICogU2FtZSBhcyAnYWNjZXB0JyBhdHRyaWJ1dGUgaW4gPGlucHV0Lz4gZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgnYWNjZXB0JykgYWNjZXB0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgYSBmaWxlIGlzIHNlbGVjdGVkXG4gICAqIEVtaXRzIGEgW0ZpbGUgfCBGaWxlTGlzdF0gb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc2VsZWN0Jykgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgaGFuZGxlU2VsZWN0KGZpbGVzOiBGaWxlIHwgRmlsZUxpc3QpOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdChmaWxlcyk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBjbGVhciB0aGUgc2VsZWN0ZWQgZmlsZXMgZnJvbSB0aGUgW1RkRmlsZUlucHV0Q29tcG9uZW50XS5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh1bmRlZmluZWQpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXRFbGVtZW50LCAndmFsdWUnLCAnJyk7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHYpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcbmltcG9ydCB7IFRkRmlsZUlucHV0Q29tcG9uZW50LCBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi4vZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBUZEZpbGVVcGxvYWRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZEZpbGVVcGxvYWRNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRGaWxlVXBsb2FkQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZEZpbGVVcGxvYWRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1maWxlLXVwbG9hZCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVVcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBfVGRGaWxlVXBsb2FkTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBJQ2FuRGlzYWJsZSB7XG5cbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKFRkRmlsZUlucHV0Q29tcG9uZW50KSBmaWxlSW5wdXQ6IFRkRmlsZUlucHV0Q29tcG9uZW50O1xuXG4gIEBDb250ZW50Q2hpbGQoVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSkgaW5wdXRMYWJlbDogVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZTtcblxuICAvKipcbiAgICogZGVmYXVsdENvbG9yPzogc3RyaW5nXG4gICAqIFNldHMgYnJvd3NlIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0gYW5kIGRlZmF1bHRzIHRvICdwcmltYXJ5Jy5cbiAgICovXG4gIEBJbnB1dCgnZGVmYXVsdENvbG9yJykgZGVmYXVsdENvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZUNvbG9yPzogc3RyaW5nXG4gICAqIFNldHMgdXBsb2FkIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0gYW5kIGRlZmF1bHRzIHRvICdhY2NlbnQnLlxuICAgKi9cbiAgQElucHV0KCdhY3RpdmVDb2xvcicpIGFjdGl2ZUNvbG9yOiBzdHJpbmcgPSAnYWNjZW50JztcblxuICAvKipcbiAgICogY2FuY2VsQ29sb3I/OiBzdHJpbmdcbiAgICogU2V0cyBjYW5jZWwgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXSBhbmQgZGVmYXVsdHMgdG8gJ3dhcm4nLlxuICAgKi9cbiAgQElucHV0KCdjYW5jZWxDb2xvcicpIGNhbmNlbENvbG9yOiBzdHJpbmcgPSAnd2Fybic7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIG11bHRpcGxlIGZpbGVzIGNhbiBiZSBkcm9wcGVkL3NlbGVjdGVkIGF0IG9uY2UgaW4gW1RkRmlsZVVwbG9hZENvbXBvbmVudF0uXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZWQ/OiBib29sZWFuXG4gICAqIEZvcmNlcyBhdCBsZWFzdCBvbmUgZmlsZSB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZWQnKVxuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlZCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBhY2NlcHQ/OiBzdHJpbmdcbiAgICogU2V0cyBmaWxlcyBhY2NlcHRlZCB3aGVuIG9wZW5pbmcgdGhlIGZpbGUgYnJvd3NlciBkaWFsb2cuXG4gICAqIFNhbWUgYXMgJ2FjY2VwdCcgYXR0cmlidXRlIGluIDxpbnB1dC8+IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoJ2FjY2VwdCcpIGFjY2VwdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkLlxuICAgKiBFbWl0cyBhIFtGaWxlIHwgRmlsZUxpc3RdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlbGVjdCcpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PigpO1xuXG4gIC8qKlxuICAgKiB1cGxvYWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdXBsb2FkIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhIFtGaWxlIHwgRmlsZUxpc3RdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3VwbG9hZCcpIG9uVXBsb2FkOiBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PigpO1xuXG4gIC8qKlxuICAgKiBjYW5jZWw/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgnY2FuY2VsJykgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB1cGxvYWQgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICB1cGxvYWRQcmVzc2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLm9uVXBsb2FkLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIGEgZmlsZSBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGhhbmRsZVNlbGVjdCh2YWx1ZTogRmlsZSB8IEZpbGVMaXN0KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kcyBleGVjdXRlZCB3aGVuIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogQ2xlYXJzIGZpbGVzLlxuICAgKi9cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkNhbmNlbC5lbWl0KHVuZGVmaW5lZCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGZpbGUgaW5wdXQgaXMgcmVuZGVyZWQgYmVmb3JlIGNsZWFyaW5nIGl0XG4gICAgaWYgKHRoaXMuZmlsZUlucHV0KSB7XG4gICAgICB0aGlzLmZpbGVJbnB1dC5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodikge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmliZXIgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXBsb2FkT3B0aW9ucyB7XG4gIHVybDogc3RyaW5nO1xuICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnO1xuICBmaWxlPzogRmlsZTtcbiAgaGVhZGVycz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBmb3JtRGF0YT86IEZvcm1EYXRhO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRGaWxlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Byb2dyZXNzT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHByb2dyZXNzIG9ic2VydmFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgZmlsZXMgYmVpbmcgdXBsb2FkZWQuXG4gICAqIE5lZWRzIHRvIGJlIHN1cHBvcnRlZCBieSBiYWNrZW5kLlxuICAgKi9cbiAgZ2V0IHByb2dyZXNzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZSA9IHRoaXMuX3Byb2dyZXNzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gb3B0aW9uczogSVVwbG9hZE9wdGlvbnMge1xuICAgKiAgICAgdXJsOiBzdHJpbmcsXG4gICAqICAgICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnLFxuICAgKiAgICAgZmlsZT86IEZpbGUsXG4gICAqICAgICBoZWFkZXJzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAqICAgICBmb3JtRGF0YT86IEZvcm1EYXRhXG4gICAqIH1cbiAgICpcbiAgICogVXNlcyB1bmRlcmx5aW5nIFtYTUxIdHRwUmVxdWVzdF0gdG8gdXBsb2FkIGEgZmlsZSB0byBhIHVybC5cbiAgICogV2lsbCBiZSBkZXByaWNhdGVkIHdoZW4gQW5ndWxhciBmaXhlcyBbSHR0cF0gdG8gYWxsb3cgW0Zvcm1EYXRhXSBhcyBib2R5LlxuICAgKi9cbiAgdXBsb2FkKG9wdGlvbnM6IElVcGxvYWRPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8YW55Pigoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG4gICAgICBsZXQgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgbGV0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBpZiAob3B0aW9ucy5maWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5mb3JtRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcm1EYXRhID0gb3B0aW9ucy5mb3JtRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyLmVycm9yKCdGb3IgW0lVcGxvYWRPcHRpb25zXSB5b3UgaGF2ZSB0byBzZXQgZWl0aGVyIHRoZSBbZmlsZV0gb3IgdGhlIFtmb3JtRGF0YV0gcHJvcGVydHkuJyk7XG4gICAgICB9XG5cbiAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4ge1xuICAgICAgICBsZXQgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChwcm9ncmVzcyk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuaW1wb3J0IHsgVGRGaWxlU2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpbGUtc2VsZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpbGUtZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRGaWxlSW5wdXRDb21wb25lbnQsIFRkRmlsZUlucHV0TGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRGaWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZmlsZS5zZXJ2aWNlJztcblxuY29uc3QgVERfRklMRTogVHlwZTxhbnk+W10gPSBbXG4gIFRkRmlsZVNlbGVjdERpcmVjdGl2ZSxcbiAgVGRGaWxlRHJvcERpcmVjdGl2ZSxcbiAgVGRGaWxlVXBsb2FkQ29tcG9uZW50LFxuICBUZEZpbGVJbnB1dENvbXBvbmVudCxcbiAgVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9GSUxFLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfRklMRSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVGRGaWxlU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRGaWxlTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsImNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSIsIkRpcmVjdGl2ZSIsIk5nTW9kZWwiLCJPcHRpb25hbCIsIkhvc3QiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RCaW5kaW5nIiwiSG9zdExpc3RlbmVyIiwibWl4aW5EaXNhYmxlZCIsInRzbGliXzEuX19leHRlbmRzIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsIlRlbXBsYXRlUmVmIiwiVmlld0NvbnRhaW5lclJlZiIsIlRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIiwibWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3Q2hpbGQiLCJDb250ZW50Q2hpbGQiLCJTdWJqZWN0IiwiT2JzZXJ2YWJsZSIsIkluamVjdGFibGUiLCJOZ01vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIlBvcnRhbE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBc0NFLCtCQUF3QyxLQUFjO1lBQWQsVUFBSyxHQUFMLEtBQUssQ0FBUztZQTVCOUMsY0FBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7OztZQWtCYixpQkFBWSxHQUFrQyxJQUFJQSxpQkFBWSxFQUFtQixDQUFDO1NBV3ZHO1FBdEJELHNCQUNJLDJDQUFROzs7Ozs7Ozs7Ozs7Z0JBRFosVUFDYSxRQUFpQjtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBR0MsOEJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7OztXQUFBO1FBYUQsc0JBQ0ksa0RBQWU7Ozs7Ozs7Z0JBRG5CO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO2FBQ3hDOzs7V0FBQTs7Ozs7Ozs7Ozs7OztRQVdELHdDQUFROzs7Ozs7O1lBRFIsVUFDUyxLQUFZO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxNQUFNLFlBQVksZ0JBQWdCLEVBQUU7O3dCQUN4QyxXQUFXLHVCQUF3QyxLQUFLLENBQUMsTUFBTSxHQUFDOzt3QkFDaEUsS0FBSyxHQUFhLFdBQVcsQ0FBQyxLQUFLO29CQUN2QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7OzRCQUNaLEtBQUssR0FBb0IsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzlGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM1RTtpQkFDRjthQUNGOztvQkFuREZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3FCQUMzQjs7Ozs7d0JBSlFDLGFBQU8sdUJBbUNEQyxhQUFRLFlBQUlDLFNBQUk7Ozs7K0JBckI1QkMsVUFBSyxTQUFDLFVBQVU7bUNBV2hCQyxXQUFNLFNBQUMsWUFBWTtzQ0FLbkJDLGdCQUFXLFNBQUMsZUFBZTsrQkFhM0JDLGlCQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOztRQVdwQyw0QkFBQztLQXBERDs7SUNMQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsYUFBZ0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7Ozs7UUNyQkQ7U0FBOEI7UUFBRCxxQkFBQztJQUFELENBQUMsSUFBQTs7O0FBRzlCLFFBQWEsb0JBQW9CLEdBQUdDLG9CQUFhLENBQUMsY0FBYyxDQUFDO0FBRWpFO1FBSXlDQyx1Q0FBb0I7UUFxQzNELDZCQUFvQixTQUFvQixFQUFVLFFBQW9CO1lBQXRFLFlBQ0UsaUJBQU8sU0FDUjtZQUZtQixlQUFTLEdBQVQsU0FBUyxDQUFXO1lBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBWTtZQW5DOUQsZUFBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7O1lBaUJmLGdCQUFVLEdBQWtDLElBQUlYLGlCQUFZLEVBQW1CLENBQUM7O1NBb0JuRztRQTlCRCxzQkFDSSx5Q0FBUTs7Ozs7Ozs7Ozs7O2dCQURaLFVBQ2EsUUFBaUI7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUdDLDhCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xEOzs7V0FBQTtRQVlELHNCQUNJLGdEQUFlOzs7Ozs7O2dCQURuQjtnQkFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQzthQUN4Qzs7O1dBQUE7UUFLRCxzQkFDSSxnREFBZTs7Ozs7OztnQkFEbkI7Z0JBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7YUFDdkM7OztXQUFBOzs7Ozs7Ozs7Ozs7O1FBWUQsb0NBQU07Ozs7Ozs7WUFETixVQUNPLEtBQVk7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFOzt3QkFDZCxRQUFRLEdBQWlCLG9CQUFZLEtBQUssSUFBRSxZQUFZOzt3QkFDeEQsS0FBSyxHQUFhLFFBQVEsQ0FBQyxLQUFLO29CQUNwQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7OzRCQUNaLEtBQUssR0FBb0IsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzlGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM3QjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4Qjs7Ozs7Ozs7Ozs7OztRQVFELHdDQUFVOzs7Ozs7O1lBRFYsVUFDVyxLQUFZOztvQkFDakIsUUFBUSxHQUFpQixvQkFBWSxLQUFLLElBQUUsWUFBWTtnQkFDNUQsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7cUJBQ2xDLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssb0JBQU0sUUFBUSxJQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0RixRQUFRLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7aUJBQzlCO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7Ozs7Ozs7Ozs7O1FBT0QseUNBQVc7Ozs7OztZQURYLFVBQ1ksS0FBWTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUNuRTtnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOzs7Ozs7Ozs7OztRQU9ELHlDQUFXOzs7Ozs7WUFEWCxVQUNZLEtBQVk7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOzs7Ozs7Ozs7UUFLTyx3Q0FBVTs7Ozs7WUFBbEIsVUFBbUIsS0FBNEM7O29CQUN6RCxVQUFVLEdBQVcsTUFBTTtnQkFDL0IsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLG9CQUFNLEtBQUssSUFBRSxRQUFRLElBQUksb0JBQU0sS0FBSyxJQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUM7NEJBQ3hELG9CQUFNLEtBQUssSUFBRSxPQUFPLElBQUksb0JBQU0sS0FBSyxJQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNqRSxVQUFVLEdBQUcsTUFBTSxDQUFDO3FCQUNyQjtpQkFDRjtnQkFDRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjs7Ozs7UUFFTyx3Q0FBVTs7OztZQUFsQixVQUFtQixLQUFZO2dCQUM3QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN6Qjs7b0JBekhGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztxQkFDckI7Ozs7O3dCQWIrQ1UsY0FBUzt3QkFBckJDLGVBQVU7Ozs7K0JBdUIzQ1AsVUFBSyxTQUFDLFVBQVU7aUNBVWhCQyxXQUFNLFNBQUMsVUFBVTtzQ0FLakJDLGdCQUFXLFNBQUMsZUFBZTtzQ0FRM0JBLGdCQUFXLFNBQUMsZUFBZTs2QkFjM0JDLGlCQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO2lDQW1CL0JBLGlCQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO2tDQWlCbkNBLGlCQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO2tDQVlwQ0EsaUJBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O1FBd0J2QywwQkFBQztLQUFBLENBdEh3QyxvQkFBb0I7Ozs7Ozs7UUNKZEUsNkNBQXVCO1FBQ3BFLG1DQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO21CQUMzRSxrQkFBTSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7U0FDckM7O29CQU5GVCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztxQkFDN0M7Ozs7O3dCQVQrQlksZ0JBQVc7d0JBQUVDLHFCQUFnQjs7O1FBYzdELGdDQUFDO0tBQUEsQ0FKOENDLDhCQUF1QixHQUlyRTs7UUFHQyx5QkFBbUIsa0JBQXFDO1lBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7U0FBSTtRQUM5RCxzQkFBQztJQUFELENBQUMsSUFBQTs7O0FBR0QsUUFBYSxxQkFBcUIsR0FBR0MsZ0NBQXlCLENBQUNQLG9CQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFOUY7UUFZMENDLHdDQUFxQjtRQTBDN0QsOEJBQW9CLFNBQW9CLEVBQUUsa0JBQXFDO1lBQS9FLFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7WUFGbUIsZUFBUyxHQUFULFNBQVMsQ0FBVztZQXhDaEMsZUFBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7O1lBc0NqQixjQUFRLEdBQWtDLElBQUlYLGlCQUFZLEVBQW1CLENBQUM7O1NBSS9GO1FBdENELHNCQUFJLDhDQUFZOzs7Z0JBQWhCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7YUFDekM7OztXQUFBO1FBWUQsc0JBQ0ksMENBQVE7OztnQkFHWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkI7Ozs7Ozs7Ozs7Z0JBTkQsVUFDYSxRQUFpQjtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBR0MsOEJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7OztXQUFBOzs7Ozs7Ozs7UUEwQkQsMkNBQVk7Ozs7O1lBQVosVUFBYSxLQUFzQjtnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7Ozs7Ozs7O1FBS0Qsb0NBQUs7Ozs7WUFBTDtnQkFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM1RDs7Ozs7OztRQUdELCtDQUFnQjs7Ozs7WUFBaEIsVUFBaUIsQ0FBVTtnQkFDekIsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2FBQ0Y7O29CQS9FRmlCLGNBQVMsU0FBQzt3QkFDVCxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07d0JBQy9DLFNBQVMsRUFBRSxDQUFDO2dDQUNWLE9BQU8sRUFBRUMsdUJBQWlCO2dDQUMxQixXQUFXLEVBQUVDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEdBQUEsQ0FBQztnQ0FDbkQsS0FBSyxFQUFFLElBQUk7NkJBQ1osQ0FBQzt3QkFDRixRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQzt3QkFFN0Isa3NCQUEwQzs7cUJBQzNDOzs7Ozt3QkFsQ29CVCxjQUFTO3dCQUFpQ1Usc0JBQWlCOzs7O29DQXdDN0VDLGNBQVMsU0FBQyxXQUFXOzRCQVNyQmpCLFVBQUssU0FBQyxPQUFPOytCQU1iQSxVQUFLLFNBQUMsVUFBVTs2QkFhaEJBLFVBQUssU0FBQyxRQUFROytCQU9kQyxXQUFNLFNBQUMsUUFBUTs7UUE2QmxCLDJCQUFDO0tBQUEsQ0FyRXlDLHFCQUFxQjs7Ozs7OztRQzVCN0QsMEJBQW1CLGtCQUFxQztZQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1NBQUk7UUFDOUQsdUJBQUM7SUFBRCxDQUFDLElBQUE7OztBQUdELFFBQWEsc0JBQXNCLEdBQUdVLGdDQUF5QixDQUFDUCxvQkFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFaEc7UUFZMkNDLHlDQUFzQjtRQStFL0QsK0JBQVksa0JBQXFDO1lBQWpELFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7WUEvRU8sZUFBUyxHQUFZLEtBQUssQ0FBQztZQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDOzs7OztZQVVaLGtCQUFZLEdBQVcsU0FBUyxDQUFDOzs7OztZQU1sQyxpQkFBVyxHQUFXLFFBQVEsQ0FBQzs7Ozs7WUFNL0IsaUJBQVcsR0FBVyxNQUFNLENBQUM7Ozs7OztZQXVDakMsY0FBUSxHQUFrQyxJQUFJWCxpQkFBWSxFQUFtQixDQUFDOzs7Ozs7WUFPOUUsY0FBUSxHQUFrQyxJQUFJQSxpQkFBWSxFQUFtQixDQUFDOzs7OztZQU05RSxjQUFRLEdBQXVCLElBQUlBLGlCQUFZLEVBQVEsQ0FBQzs7U0FJekU7UUFsREQsc0JBQ0ksMkNBQVE7OztnQkFHWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkI7Ozs7Ozs7Ozs7Z0JBTkQsVUFDYSxRQUFpQjtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBR0MsOEJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7OztXQUFBO1FBVUQsc0JBQ0ksMkNBQVE7OztnQkFHWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkI7Ozs7Ozs7Ozs7OztnQkFORCxVQUNhLFFBQWlCO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHQSw4QkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRDs7O1dBQUE7Ozs7Ozs7O1FBdUNELDZDQUFhOzs7O1lBQWI7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEM7YUFDRjs7Ozs7Ozs7O1FBS0QsNENBQVk7Ozs7O1lBQVosVUFBYSxLQUFzQjtnQkFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCOzs7Ozs7Ozs7O1FBTUQsc0NBQU07Ozs7O1lBQU47Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztnQkFFOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUN4QjthQUNGOzs7Ozs7O1FBR0QsZ0RBQWdCOzs7OztZQUFoQixVQUFpQixDQUFVO2dCQUN6QixJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2Y7YUFDRjs7b0JBbElGaUIsY0FBUyxTQUFDO3dCQUNULGVBQWUsRUFBRUMsNEJBQXVCLENBQUMsTUFBTTt3QkFDL0MsU0FBUyxFQUFFLENBQUM7Z0NBQ1YsT0FBTyxFQUFFQyx1QkFBaUI7Z0NBQzFCLFdBQVcsRUFBRUMsZUFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsR0FBQSxDQUFDO2dDQUNwRCxLQUFLLEVBQUUsSUFBSTs2QkFDWixDQUFDO3dCQUNGLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7d0JBRTdCLG8rQkFBMkM7O3FCQUM1Qzs7Ozs7d0JBekJrR0Msc0JBQWlCOzs7O2dDQStCakhDLGNBQVMsU0FBQyxvQkFBb0I7aUNBRTlCQyxpQkFBWSxTQUFDLHlCQUF5QjttQ0FNdENsQixVQUFLLFNBQUMsY0FBYztrQ0FNcEJBLFVBQUssU0FBQyxhQUFhO2tDQU1uQkEsVUFBSyxTQUFDLGFBQWE7K0JBTW5CQSxVQUFLLFNBQUMsVUFBVTsrQkFhaEJBLFVBQUssU0FBQyxVQUFVOzZCQWFoQkEsVUFBSyxTQUFDLFFBQVE7K0JBT2RDLFdBQU0sU0FBQyxRQUFROytCQU9mQSxXQUFNLFNBQUMsUUFBUTsrQkFNZkEsV0FBTSxTQUFDLFFBQVE7O1FBMENsQiw0QkFBQztLQUFBLENBdkgwQyxzQkFBc0I7Ozs7OztBQzFCakU7UUF5QkU7WUFYUSxxQkFBZ0IsR0FBb0IsSUFBSWtCLFlBQU8sRUFBVSxDQUFDO1lBWWhFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDakU7UUFORCxzQkFBSSxtQ0FBUTs7Ozs7Ozs7O2dCQUFaO2dCQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOzs7V0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtQkQsOEJBQU07Ozs7Ozs7Ozs7Ozs7OztZQUFOLFVBQU8sT0FBdUI7Z0JBQTlCLGlCQTBDQztnQkF6Q0MsT0FBTyxJQUFJQyxlQUFVLENBQU0sVUFBQyxVQUEyQjs7d0JBQ2pELEdBQUcsR0FBbUIsSUFBSSxjQUFjLEVBQUU7O3dCQUMxQyxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUU7b0JBRXZDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7d0JBQzlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDdkM7eUJBQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTt3QkFDekMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO3FCQUMvRztvQkFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFDLEtBQW9COzs0QkFDdkMsUUFBUSxHQUFXLENBQUM7d0JBQ3hCLElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFOzRCQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7eUJBQ3pEO3dCQUNELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3RDLENBQUM7b0JBRUYsR0FBRyxDQUFDLGtCQUFrQixHQUFHO3dCQUN2QixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFOzRCQUN4QixJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dDQUN6QyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDOUIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDOzZCQUN2QjtpQ0FBTTtnQ0FDTCxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDaEM7eUJBQ0Y7cUJBQ0YsQ0FBQztvQkFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDNUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7b0JBQzNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTt3QkFDbkIsS0FBSyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFOzRCQUMvQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDakQ7cUJBQ0Y7b0JBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEIsQ0FBQyxDQUFDO2FBQ0o7O29CQXpFRkMsZUFBVTs7OztRQTBFWCxvQkFBQztLQTFFRDs7Ozs7O0FDVkE7UUFlTSxPQUFPLEdBQWdCO1FBQzNCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQix5QkFBeUI7S0FDMUI7QUFFRDtRQUFBO1NBb0JDOztvQkFwQkFDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLGlCQUFXOzRCQUNYQyxxQkFBWTs0QkFDWkMsa0JBQWE7NEJBQ2JDLHNCQUFlOzRCQUNmQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osT0FBTzt5QkFDUjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsT0FBTzt5QkFDUjt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsYUFBYTt5QkFDZDtxQkFDRjs7UUFHRCx5QkFBQztLQXBCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9