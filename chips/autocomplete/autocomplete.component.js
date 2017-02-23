var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, forwardRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () {
    // empty method
};
export var TD_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdAutoCompleteComponent; }),
    multi: true,
};
var TdAutoCompleteComponent = (function () {
    function TdAutoCompleteComponent() {
        this._value = '';
        /** Callback registered via registerOnTouched (ControlValueAccessor) */
        this._onTouchedCallback = noop;
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop;
        this.listName = this.randomName();
        this.dividerColor = 'primary';
        this.searchItems = [];
        this.readOnly = false;
        this.required = false;
        this.disabled = false;
        this.autoFocus = false;
        this.itemSelect = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
    }
    Object.defineProperty(TdAutoCompleteComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    TdAutoCompleteComponent.prototype.clear = function () {
        this.writeValue('');
        return true;
    };
    TdAutoCompleteComponent.prototype.randomName = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 7; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    TdAutoCompleteComponent.prototype.handleItemSelect = function () {
        this.itemSelect.emit(this._value);
    };
    TdAutoCompleteComponent.prototype.handleFocus = function () {
        this.focus.emit(true);
    };
    TdAutoCompleteComponent.prototype.handleBlur = function () {
        this.blur.emit(false);
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    TdAutoCompleteComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    TdAutoCompleteComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    TdAutoCompleteComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    return TdAutoCompleteComponent;
}());
__decorate([
    Input('name'),
    __metadata("design:type", String)
], TdAutoCompleteComponent.prototype, "name", void 0);
__decorate([
    Input('dividerColor'),
    __metadata("design:type", String)
], TdAutoCompleteComponent.prototype, "dividerColor", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", String)
], TdAutoCompleteComponent.prototype, "placeholder", void 0);
__decorate([
    Input('searchItems'),
    __metadata("design:type", Array)
], TdAutoCompleteComponent.prototype, "searchItems", void 0);
__decorate([
    Input('readOnly'),
    __metadata("design:type", Boolean)
], TdAutoCompleteComponent.prototype, "readOnly", void 0);
__decorate([
    Input('required'),
    __metadata("design:type", Boolean)
], TdAutoCompleteComponent.prototype, "required", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], TdAutoCompleteComponent.prototype, "disabled", void 0);
__decorate([
    Input('autoFocus'),
    __metadata("design:type", Boolean)
], TdAutoCompleteComponent.prototype, "autoFocus", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Object)
], TdAutoCompleteComponent.prototype, "max", void 0);
__decorate([
    Input('maxLength'),
    __metadata("design:type", Number)
], TdAutoCompleteComponent.prototype, "maxLength", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Object)
], TdAutoCompleteComponent.prototype, "min", void 0);
__decorate([
    Input('minLength'),
    __metadata("design:type", Number)
], TdAutoCompleteComponent.prototype, "minLength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdAutoCompleteComponent.prototype, "value", null);
__decorate([
    Output('itemSelect'),
    __metadata("design:type", EventEmitter)
], TdAutoCompleteComponent.prototype, "itemSelect", void 0);
__decorate([
    Output('focus'),
    __metadata("design:type", EventEmitter)
], TdAutoCompleteComponent.prototype, "focus", void 0);
__decorate([
    Output('blur'),
    __metadata("design:type", EventEmitter)
], TdAutoCompleteComponent.prototype, "blur", void 0);
TdAutoCompleteComponent = __decorate([
    Component({
        providers: [TD_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR],
        selector: 'td-autocomplete',
        styles: [":host { display: block; } "],
        template: "<div flex> <md-input-container> <input mdInput flex=\"100\"  [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [autofocus]=\"autoFocus\" [attr.list]=\"listName\" [max]=\"max\" [maxlength]=\"maxLength\" [min]=\"min\" [minlength]=\"minLength\" [readonly]=\"readOnly\" [disabled]=\"disabled\" [required]=\"required\" [name]=\"name\" (keyup.enter)=\"handleItemSelect()\" (focus)=\"handleFocus()\" (blur)=\"handleBlur()\"> </md-input-container> <datalist [id]=\"listName\"> <template let-item ngFor [ngForOf]=\"searchItems\"> <option [value]=\"item\"></option> </template> </datalist> </div> ",
    })
], TdAutoCompleteComponent);
export { TdAutoCompleteComponent };
//# sourceMappingURL=autocomplete.component.js.map