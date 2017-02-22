var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () {
    // empty method
};
export var FILE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdFileInputComponent; }),
    multi: true,
};
var TdFileInputLabelDirective = (function (_super) {
    __extends(TdFileInputLabelDirective, _super);
    function TdFileInputLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdFileInputLabelDirective;
}(TemplatePortalDirective));
TdFileInputLabelDirective = __decorate([
    Directive({
        selector: '[td-file-input-label]template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdFileInputLabelDirective);
export { TdFileInputLabelDirective };
var TdFileInputComponent = (function () {
    function TdFileInputComponent(_renderer, _changeDetectorRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = undefined;
        this._multiple = false;
        this._disabled = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        this.onSelect = new EventEmitter();
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
    }
    Object.defineProperty(TdFileInputComponent.prototype, "value", {
        // get/set accessor (needed for ControlValueAccessor)
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
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
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables [TdFileInputComponent] and clears selected/dropped files.
         */
        set: function (disabled) {
            if (disabled) {
                this.clear();
            }
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when a file is selected.
     */
    TdFileInputComponent.prototype.handleSelect = function (files) {
        this.writeValue(files);
        this.onSelect.emit(files);
    };
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     */
    TdFileInputComponent.prototype.clear = function () {
        this.writeValue(undefined);
        this._renderer.setElementProperty(this.inputElement, 'value', '');
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdFileInputComponent.prototype.writeValue = function (value) {
        this.value = value;
        this._changeDetectorRef.markForCheck();
    };
    TdFileInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TdFileInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TdFileInputComponent;
}());
__decorate([
    ViewChild('fileInput'),
    __metadata("design:type", ElementRef)
], TdFileInputComponent.prototype, "_inputElement", void 0);
__decorate([
    Input('color'),
    __metadata("design:type", String)
], TdFileInputComponent.prototype, "color", void 0);
__decorate([
    Input('multiple'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdFileInputComponent.prototype, "multiple", null);
__decorate([
    Input('accept'),
    __metadata("design:type", String)
], TdFileInputComponent.prototype, "accept", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdFileInputComponent.prototype, "disabled", null);
__decorate([
    Output('select'),
    __metadata("design:type", EventEmitter)
], TdFileInputComponent.prototype, "onSelect", void 0);
TdFileInputComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [FILE_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-file-input',
        styles: [":host { /** * Class that is added ondragenter by the [TdFileDrop] directive. */ } :host .td-file-input { padding-left: 8px; padding-right: 8px; } :host input.td-file-input-hidden { display: none; } :host .drop-zone { border-radius: 3px; } :host .drop-zone * { pointer-events: none; } "],
        template: "<div> <button md-raised-button class=\"td-file-input\" type=\"button\" [color]=\"color\"  [multiple]=\"multiple\"  [disabled]=\"disabled\" (keyup.enter)=\"fileInput.click()\" (click)=\"fileInput.click()\" (fileDrop)=\"handleSelect($event)\" tdFileDrop> <ng-content></ng-content> </button> <input #fileInput  class=\"td-file-input-hidden\"  type=\"file\" [attr.accept]=\"accept\"                 (fileSelect)=\"handleSelect($event)\" [multiple]=\"multiple\"  [disabled]=\"disabled\" tdFileSelect> </div>",
    }),
    __metadata("design:paramtypes", [Renderer, ChangeDetectorRef])
], TdFileInputComponent);
export { TdFileInputComponent };
//# sourceMappingURL=file-input.component.js.map