(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/coercion'), require('@angular/forms'), require('@covalent/core/common'), require('@angular/cdk/portal'), require('rxjs'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/file', ['exports', '@angular/core', '@angular/cdk/coercion', '@angular/forms', '@covalent/core/common', '@angular/cdk/portal', 'rxjs', '@angular/common', '@angular/material/icon', '@angular/material/button'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.file = {}),global.ng.core,global.ng.cdk.coercion,global.ng.forms,global.covalent.core.common,global.ng.cdk.portal,global.rxjs,global.ng.common,global.ng.material.icon,global.ng.material.button));
}(this, (function (exports,core,coercion,forms,common,portal,rxjs,common$1,icon,button) { 'use strict';

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
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var TdFileSelectDirective = /** @class */ (function () {
    function TdFileSelectDirective(model) {
        this.model = model;
        this._multiple = false;
        this.onFileSelect = new core.EventEmitter();
    }
    Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
        get: function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TdFileSelectDirective.prototype.onChange = function (event) {
        if (event.target instanceof HTMLInputElement) {
            var fileInputEl = ((event.target));
            var files = fileInputEl.files;
            if (files.length) {
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
            }
        }
    };
    return TdFileSelectDirective;
}());
TdFileSelectDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdFileSelect]',
            },] },
];
TdFileSelectDirective.ctorParameters = function () { return [
    { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host },] },
]; };
TdFileSelectDirective.propDecorators = {
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "onFileSelect": [{ type: core.Output, args: ['fileSelect',] },],
    "multipleBinding": [{ type: core.HostBinding, args: ['attr.multiple',] },],
    "onChange": [{ type: core.HostListener, args: ['change', ['$event'],] },],
};
var TdFileDropBase = /** @class */ (function () {
    function TdFileDropBase() {
    }
    return TdFileDropBase;
}());
var _TdFileDropMixinBase = common.mixinDisabled(TdFileDropBase);
var TdFileDropDirective = /** @class */ (function (_super) {
    __extends(TdFileDropDirective, _super);
    function TdFileDropDirective(_renderer, _element) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._element = _element;
        _this._multiple = false;
        _this.onFileDrop = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
        get: function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
        get: function () {
            return this.disabled ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TdFileDropDirective.prototype.onDrop = function (event) {
        if (!this.disabled) {
            var transfer = ((event)).dataTransfer;
            var files = transfer.files;
            if (files.length) {
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.onFileDrop.emit(value);
            }
        }
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    };
    TdFileDropDirective.prototype.onDragOver = function (event) {
        var transfer = ((event)).dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this.disabled || (!this._multiple &&
            ((transfer.items && transfer.items.length > 1) || ((transfer)).mozItemCount > 1))) {
            transfer.dropEffect = 'none';
        }
        else {
            transfer.dropEffect = 'copy';
        }
        this._stopEvent(event);
    };
    TdFileDropDirective.prototype.onDragEnter = function (event) {
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    };
    TdFileDropDirective.prototype.onDragLeave = function (event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    };
    TdFileDropDirective.prototype._typeCheck = function (types) {
        var dropEffect = 'none';
        if (types) {
            if ((((types)).contains && ((types)).contains('Files'))
                || (((types)).indexOf && ((types)).indexOf('Files') !== -1)) {
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
}(_TdFileDropMixinBase));
TdFileDropDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdFileDrop]',
                inputs: ['disabled'],
            },] },
];
TdFileDropDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdFileDropDirective.propDecorators = {
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "onFileDrop": [{ type: core.Output, args: ['fileDrop',] },],
    "multipleBinding": [{ type: core.HostBinding, args: ['attr.multiple',] },],
    "disabledBinding": [{ type: core.HostBinding, args: ['attr.disabled',] },],
    "onDrop": [{ type: core.HostListener, args: ['drop', ['$event'],] },],
    "onDragOver": [{ type: core.HostListener, args: ['dragover', ['$event'],] },],
    "onDragEnter": [{ type: core.HostListener, args: ['dragenter', ['$event'],] },],
    "onDragLeave": [{ type: core.HostListener, args: ['dragleave', ['$event'],] },],
};
var TdFileInputLabelDirective = /** @class */ (function (_super) {
    __extends(TdFileInputLabelDirective, _super);
    function TdFileInputLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdFileInputLabelDirective;
}(portal.TemplatePortalDirective));
TdFileInputLabelDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-file-input-label]ng-template',
            },] },
];
TdFileInputLabelDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdFileInputBase = /** @class */ (function () {
    function TdFileInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileInputBase;
}());
var _TdFileInputMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(TdFileInputBase));
var TdFileInputComponent = /** @class */ (function (_super) {
    __extends(TdFileInputComponent, _super);
    function TdFileInputComponent(_renderer, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._renderer = _renderer;
        _this._multiple = false;
        _this.onSelect = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
        get: function () {
            return this._inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    TdFileInputComponent.prototype.handleSelect = function (files) {
        this.writeValue(files);
        this.onSelect.emit(files);
    };
    TdFileInputComponent.prototype.clear = function () {
        this.writeValue(undefined);
        this._renderer.setProperty(this.inputElement, 'value', '');
    };
    TdFileInputComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.clear();
        }
    };
    return TdFileInputComponent;
}(_TdFileInputMixinBase));
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
                styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"],
                template: "<div>\n  <button mat-raised-button\n          class=\"td-file-input\"\n          type=\"button\"\n          [color]=\"color\" \n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          (keyup.enter)=\"fileInput.click()\"\n          (click)=\"fileInput.click()\"\n          (fileDrop)=\"handleSelect($event)\"\n          tdFileDrop>\n    <ng-content></ng-content>\n  </button>\n  <input #fileInput \n          class=\"td-file-input-hidden\" \n          type=\"file\"\n          [attr.accept]=\"accept\"                \n          (fileSelect)=\"handleSelect($event)\"\n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          tdFileSelect>\n</div>",
            },] },
];
TdFileInputComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
]; };
TdFileInputComponent.propDecorators = {
    "_inputElement": [{ type: core.ViewChild, args: ['fileInput',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "accept": [{ type: core.Input, args: ['accept',] },],
    "onSelect": [{ type: core.Output, args: ['select',] },],
};
var TdFileUploadBase = /** @class */ (function () {
    function TdFileUploadBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileUploadBase;
}());
var _TdFileUploadMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(TdFileUploadBase));
var TdFileUploadComponent = /** @class */ (function (_super) {
    __extends(TdFileUploadComponent, _super);
    function TdFileUploadComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._multiple = false;
        _this._required = false;
        _this.defaultColor = 'primary';
        _this.activeColor = 'accent';
        _this.cancelColor = 'warn';
        _this.onSelect = new core.EventEmitter();
        _this.onUpload = new core.EventEmitter();
        _this.onCancel = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (required) {
            this._required = coercion.coerceBooleanProperty(required);
        },
        enumerable: true,
        configurable: true
    });
    TdFileUploadComponent.prototype.uploadPressed = function () {
        if (this.value) {
            this.onUpload.emit(this.value);
        }
    };
    TdFileUploadComponent.prototype.handleSelect = function (value) {
        this.value = value;
        this.onSelect.emit(value);
    };
    TdFileUploadComponent.prototype.cancel = function () {
        this.value = undefined;
        this.onCancel.emit(undefined);
        if (this.fileInput) {
            this.fileInput.clear();
        }
    };
    TdFileUploadComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.cancel();
        }
    };
    return TdFileUploadComponent;
}(_TdFileUploadMixinBase));
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
                styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"],
                template: "<td-file-input *ngIf=\"!value\"\n               [(ngModel)]=\"value\"\n               [multiple]=\"multiple\"\n               [disabled]=\"disabled\"\n               [accept]=\"accept\"\n               [color]=\"defaultColor\"\n               (select)=\"handleSelect($event)\">\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button #fileUpload\n          class=\"td-file-upload\"\n          mat-raised-button\n          type=\"button\"\n          [color]=\"activeColor\"\n          (keyup.delete)=\"cancel()\"\n          (keyup.backspace)=\"cancel()\"\n          (keyup.escape)=\"cancel()\"\n          (click)=\"uploadPressed()\"> \n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button\n          type=\"button\"\n          class=\"td-file-upload-cancel\"\n          [color]=\"cancelColor\"            \n          (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>",
            },] },
];
TdFileUploadComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
TdFileUploadComponent.propDecorators = {
    "fileInput": [{ type: core.ViewChild, args: [TdFileInputComponent,] },],
    "inputLabel": [{ type: core.ContentChild, args: [TdFileInputLabelDirective,] },],
    "defaultColor": [{ type: core.Input, args: ['defaultColor',] },],
    "activeColor": [{ type: core.Input, args: ['activeColor',] },],
    "cancelColor": [{ type: core.Input, args: ['cancelColor',] },],
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "required": [{ type: core.Input, args: ['required',] },],
    "accept": [{ type: core.Input, args: ['accept',] },],
    "onSelect": [{ type: core.Output, args: ['select',] },],
    "onUpload": [{ type: core.Output, args: ['upload',] },],
    "onCancel": [{ type: core.Output, args: ['cancel',] },],
};
var TdFileService = /** @class */ (function () {
    function TdFileService() {
        this._progressSubject = new rxjs.Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    Object.defineProperty(TdFileService.prototype, "progress", {
        get: function () {
            return this._progressObservable;
        },
        enumerable: true,
        configurable: true
    });
    TdFileService.prototype.upload = function (options) {
        var _this = this;
        return new rxjs.Observable(function (subscriber) {
            var xhr = new XMLHttpRequest();
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
    return TdFileService;
}());
TdFileService.decorators = [
    { type: core.Injectable },
];
TdFileService.ctorParameters = function () { return []; };
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
    return CovalentFileModule;
}());
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
            },] },
];
CovalentFileModule.ctorParameters = function () { return []; };

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
//# sourceMappingURL=covalent-core-file.umd.js.map
