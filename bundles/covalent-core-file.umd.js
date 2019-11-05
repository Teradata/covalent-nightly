(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/cdk/portal'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/cdk/coercion'), require('@covalent/core/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/file', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/cdk/portal', '@angular/material/icon', '@angular/material/button', '@angular/cdk/coercion', '@covalent/core/common', '@angular/common/http', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.file = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.cdk.portal, global.ng.material.icon, global.ng.material.button, global.ng.cdk.coercion, global.covalent.core.common, global.ng.common.http, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, common, forms, portal, icon, button, coercion, common$1, http, rxjs, operators) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.fileSelect = new core.EventEmitter();
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
             */
            function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
         */
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
         * @param {?} event
         * @return {?}
         */
        TdFileSelectDirective.prototype.onChange = /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.target instanceof HTMLInputElement) {
                /** @type {?} */
                var fileInputEl = event.target;
                /** @type {?} */
                var files = fileInputEl.files;
                if (files.length) {
                    /** @type {?} */
                    var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                    this.model ? this.model.update.emit(value) : this.fileSelect.emit(value);
                }
            }
        };
        TdFileSelectDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFileSelect]',
                    },] }
        ];
        /** @nocollapse */
        TdFileSelectDirective.ctorParameters = function () { return [
            { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
        ]; };
        TdFileSelectDirective.propDecorators = {
            multiple: [{ type: core.Input, args: ['multiple',] }],
            fileSelect: [{ type: core.Output }],
            multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
            onChange: [{ type: core.HostListener, args: ['change', ['$event'],] }]
        };
        return TdFileSelectDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFileDropBase = /** @class */ (function () {
        function TdFileDropBase() {
        }
        return TdFileDropBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileDropMixinBase = common$1.mixinDisabled(TdFileDropBase);
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
            _this.fileDrop = new core.EventEmitter();
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
         * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         */
        /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDrop = /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
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
                    this.fileDrop.emit(value);
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
            if (this.disabled ||
                (!this._multiple && ((transfer.items && transfer.items.length > 1) || ((/** @type {?} */ (transfer))).mozItemCount > 1))) {
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
         * @private
         * @param {?} types
         * @return {?}
         */
        TdFileDropDirective.prototype._typeCheck = /**
         * Validates if the transfer item types are 'Files'.
         * @private
         * @param {?} types
         * @return {?}
         */
        function (types) {
            /** @type {?} */
            var dropEffect = 'none';
            if (types &&
                ((((/** @type {?} */ (types))).contains && ((/** @type {?} */ (types))).contains('Files')) ||
                    (((/** @type {?} */ (types))).indexOf && ((/** @type {?} */ (types))).indexOf('Files') !== -1))) {
                dropEffect = 'copy';
            }
            return dropEffect;
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype._stopEvent = /**
         * @private
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
        TdFileDropDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdFileDropDirective.propDecorators = {
            multiple: [{ type: core.Input, args: ['multiple',] }],
            fileDrop: [{ type: core.Output }],
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        TdFileInputLabelDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
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
    var _TdFileInputMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileInputBase));
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
            _this.select = new core.EventEmitter();
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
            this.select.emit(files);
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
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         */
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        TdFileInputComponent.prototype.setDisabledState = /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        TdFileInputComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdFileInputComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-file-input',
                        inputs: ['disabled', 'value'],
                        template: "<div>\n  <button\n    mat-raised-button\n    class=\"td-file-input\"\n    type=\"button\"\n    [color]=\"color\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    (keyup.enter)=\"fileInput.click()\"\n    (click)=\"fileInput.click()\"\n    (fileDrop)=\"handleSelect($event)\"\n    tdFileDrop\n  >\n    <ng-content></ng-content>\n  </button>\n  <input\n    #fileInput\n    class=\"td-file-input-hidden\"\n    type=\"file\"\n    [attr.accept]=\"accept\"\n    (fileSelect)=\"handleSelect($event)\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    tdFileSelect\n  />\n</div>\n",
                        styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileInputComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        TdFileInputComponent.propDecorators = {
            _inputElement: [{ type: core.ViewChild, args: ['fileInput', { static: true },] }],
            color: [{ type: core.Input }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            accept: [{ type: core.Input }],
            select: [{ type: core.Output }]
        };
        return TdFileInputComponent;
    }(_TdFileInputMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFileUploadBase = /** @class */ (function () {
        function TdFileUploadBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileUploadBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileUploadMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileUploadBase));
    var TdFileUploadComponent = /** @class */ (function (_super) {
        __extends(TdFileUploadComponent, _super);
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
            _this.select = new core.EventEmitter();
            /**
             * upload?: function
             * Event emitted when upload button is clicked.
             * Emits a [File | FileList] object.
             */
            _this.upload = new core.EventEmitter();
            /**
             * cancel?: function
             * Event emitted when cancel button is clicked.
             */
            _this.cancel = new core.EventEmitter();
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
                this._multiple = coercion.coerceBooleanProperty(multiple);
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
                this.upload.emit(this.value);
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
            this.select.emit(value);
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
        TdFileUploadComponent.prototype._cancel = /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         * @return {?}
         */
        function () {
            this.value = undefined;
            this.cancel.emit();
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
                this._cancel();
            }
        };
        TdFileUploadComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdFileUploadComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-file-upload',
                        inputs: ['disabled', 'value'],
                        template: "<td-file-input\n  *ngIf=\"!value\"\n  [(ngModel)]=\"value\"\n  [multiple]=\"multiple\"\n  [disabled]=\"disabled\"\n  [accept]=\"accept\"\n  [color]=\"defaultColor\"\n  (select)=\"handleSelect($event)\"\n>\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button\n    #fileUpload\n    class=\"td-file-upload\"\n    mat-raised-button\n    type=\"button\"\n    [color]=\"activeColor\"\n    (keyup.delete)=\"_cancel()\"\n    (keyup.backspace)=\"_cancel()\"\n    (keyup.escape)=\"_cancel()\"\n    (click)=\"uploadPressed()\"\n  >\n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\" (click)=\"_cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>\n",
                        styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileUploadComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        TdFileUploadComponent.propDecorators = {
            fileInput: [{ type: core.ViewChild, args: [TdFileInputComponent, { static: false },] }],
            inputLabel: [{ type: core.ContentChild, args: [TdFileInputLabelDirective, { static: false },] }],
            defaultColor: [{ type: core.Input }],
            activeColor: [{ type: core.Input }],
            cancelColor: [{ type: core.Input }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            required: [{ type: core.Input, args: ['required',] }],
            accept: [{ type: core.Input }],
            select: [{ type: core.Output }],
            upload: [{ type: core.Output }],
            cancel: [{ type: core.Output }]
        };
        return TdFileUploadComponent;
    }(_TdFileUploadMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        imports: [forms.FormsModule, common.CommonModule, icon.MatIconModule, button.MatButtonModule, portal.PortalModule],
                        declarations: [TD_FILE],
                        exports: [TD_FILE],
                    },] }
        ];
        return CovalentFileModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFileService = /** @class */ (function () {
        /**
         * Creates a new instance
         * @param _http the http client instance
         * @breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
         */
        function TdFileService(_http) {
            this._http = _http;
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
             */
            function () {
                return this._progressObservable;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Uploads a file to URL.
         */
        /**
         * Uploads a file to URL.
         * @param {?} url
         * @param {?} method
         * @param {?} body
         * @param {?=} __3
         * @return {?}
         */
        TdFileService.prototype.send = /**
         * Uploads a file to URL.
         * @param {?} url
         * @param {?} method
         * @param {?} body
         * @param {?=} __3
         * @return {?}
         */
        function (url, method, body, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, headers = _b.headers, params = _b.params;
            if (!this._http) {
                throw new Error('The HttpClient module needs to be imported at root module level');
            }
            /** @type {?} */
            var req = new http.HttpRequest(method.toUpperCase(), url, body, {
                reportProgress: true,
                headers: new http.HttpHeaders(headers || {}),
                params: new http.HttpParams({ fromObject: params || {} }),
            });
            return this._http.request(req).pipe(operators.tap((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.handleEvent(event); })));
        };
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
         * @deprecated use send instead
         * @breaking-change 3.0.0
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
         * @deprecated use send instead
         * \@breaking-change 3.0.0
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
         * @deprecated use send instead
         * \@breaking-change 3.0.0
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) {
                var e_1, _a;
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
                xhr.upload.onprogress = (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    /** @type {?} */
                    var progress = 0;
                    if (event.lengthComputable) {
                        progress = Math.round((event.loaded / event.total) * 100);
                    }
                    _this._progressSubject.next(progress);
                });
                xhr.onreadystatechange = (/**
                 * @return {?}
                 */
                function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            subscriber.next(xhr.response);
                            subscriber.complete();
                        }
                        else {
                            subscriber.error(xhr.response);
                        }
                    }
                });
                xhr.open(options.method, options.url, true);
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                if (options.headers) {
                    try {
                        for (var _b = __values(Object.keys(options.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var key = _c.value;
                            xhr.setRequestHeader(key, options.headers[key]);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                xhr.send(formData);
            }));
        };
        /**
         * @private
         * @template T
         * @param {?} event
         * @return {?}
         */
        TdFileService.prototype.handleEvent = /**
         * @private
         * @template T
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case http.HttpEventType.Sent:
                    this._progressSubject.next(0);
                    break;
                case http.HttpEventType.UploadProgress:
                    this._progressSubject.next(Math.round((100 * event.loaded) / event.total));
                    break;
                case http.HttpEventType.Response:
                    this._progressSubject.next(100);
                    break;
                default:
                    break;
            }
        };
        TdFileService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: CovalentFileModule,
                    },] }
        ];
        /** @nocollapse */
        TdFileService.ctorParameters = function () { return [
            { type: http.HttpClient, decorators: [{ type: core.Optional }] }
        ]; };
        /** @nocollapse */ TdFileService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TdFileService_Factory() { return new TdFileService(core.ɵɵinject(http.HttpClient, 8)); }, token: TdFileService, providedIn: CovalentFileModule });
        return TdFileService;
    }());

    exports.CovalentFileModule = CovalentFileModule;
    exports.TdFileDropBase = TdFileDropBase;
    exports.TdFileDropDirective = TdFileDropDirective;
    exports.TdFileInputBase = TdFileInputBase;
    exports.TdFileInputComponent = TdFileInputComponent;
    exports.TdFileInputLabelDirective = TdFileInputLabelDirective;
    exports.TdFileSelectDirective = TdFileSelectDirective;
    exports.TdFileService = TdFileService;
    exports.TdFileUploadBase = TdFileUploadBase;
    exports.TdFileUploadComponent = TdFileUploadComponent;
    exports._TdFileDropMixinBase = _TdFileDropMixinBase;
    exports._TdFileInputMixinBase = _TdFileInputMixinBase;
    exports._TdFileUploadMixinBase = _TdFileUploadMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-core-file.umd.js.map
