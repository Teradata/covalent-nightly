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
export var TD_CHIPS_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdChipsComponent; }),
    multi: true,
};
var TdChipsComponent = (function () {
    function TdChipsComponent() {
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = [];
        this._length = 0;
        this._requireMatch = false;
        /**
         * Boolean value that specifies if the input is valid against the provieded list.
         */
        this.matches = true;
        /**
         * Flag that is true when autocomplete is focused.
         */
        this.focused = false;
        /**
         * items?: string[]
         * Enables Autocompletion with the provided list of strings.
         */
        this.items = [];
        /**
         * readOnly?: boolean
         * Disables the chip input and removal.
         */
        this.readOnly = false;
        /**
         * add?: function
         * Method to be executed when string is added as chip through the autocomplete.
         * Sends chip value as event.
         */
        this.add = new EventEmitter();
        /**
         * remove?: function
         * Method to be executed when string is removed as chip with the "remove" button.
         * Sends chip value as event.
         */
        this.remove = new EventEmitter();
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
    }
    Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
        get: function () {
            return this._requireMatch;
        },
        /**
         * requireMatch?: boolean
         * Validates input against the provided list before adding it to the model.
         * If it doesnt exist, it cancels the event.
         */
        set: function (requireMatch) {
            this._requireMatch = requireMatch !== '' ? (requireMatch === 'true' || requireMatch === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "value", {
        get: function () { return this._value; },
        /**
         * Implemented as part of ControlValueAccessor.
         */
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._length = this._value ? this._value.length : 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    TdChipsComponent.prototype.ngDoCheck = function () {
        // Throw onChange event only if array changes size.
        if (this._value && this._value.length !== this._length) {
            this._length = this._value.length;
            this.onChange(this._value);
        }
    };
    Object.defineProperty(TdChipsComponent.prototype, "filteredItems", {
        /**
         * Returns a list of filtered items.
         * Removes the ones that have been added as value.
         */
        get: function () {
            var _this = this;
            if (!this._value) {
                return [];
            }
            return this.items.filter(function (item) {
                return _this._value.indexOf(item) < 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.addItem = function (value) {
        if (value.trim() === '' || this._value.indexOf(value) > -1) {
            return false;
        }
        if (this.items && this.requireMatch) {
            if (this.items.indexOf(value) < 0) {
                return false;
            }
        }
        this._value.push(value);
        this.add.emit(value);
        this.onChange(this._value);
        return true;
    };
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.removeItem = function (value) {
        var index = this._value.indexOf(value);
        if (index < 0) {
            return false;
        }
        this._value.splice(index, 1);
        this.remove.emit(value);
        this.onChange(this._value);
        return true;
    };
    TdChipsComponent.prototype.handleFocus = function () {
        this.focused = true;
        return true;
    };
    TdChipsComponent.prototype.handleBlur = function () {
        this.focused = false;
        this.onTouched();
        return true;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdChipsComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TdChipsComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TdChipsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TdChipsComponent;
}());
__decorate([
    Input('items'),
    __metadata("design:type", Array)
], TdChipsComponent.prototype, "items", void 0);
__decorate([
    Input('requireMatch'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdChipsComponent.prototype, "requireMatch", null);
__decorate([
    Input('readOnly'),
    __metadata("design:type", Boolean)
], TdChipsComponent.prototype, "readOnly", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", String)
], TdChipsComponent.prototype, "placeholder", void 0);
__decorate([
    Output('add'),
    __metadata("design:type", EventEmitter)
], TdChipsComponent.prototype, "add", void 0);
__decorate([
    Output('remove'),
    __metadata("design:type", EventEmitter)
], TdChipsComponent.prototype, "remove", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdChipsComponent.prototype, "value", null);
TdChipsComponent = __decorate([
    Component({
        providers: [TD_CHIPS_CONTROL_VALUE_ACCESSOR],
        selector: 'td-chips',
        styles: [":host { display: block; padding: 0px 5px 0px 5px; } :host /deep/ .td-chip { display: inline-block; cursor: default; border-radius: 16px; line-height: 32px; margin: 8px 8px 0 0; padding: 0 12px; box-sizing: border-box; max-width: 100%; position: relative; } :host /deep/ .td-chip md-icon { position: relative; top: 5px; left: 5px; height: 18px; width: 18px; font-size: 19px; } :host /deep/ .td-chip md-icon:hover { cursor: pointer; } .mat-input-underline { position: relative; height: 1px; width: 100%; margin-top: 4px; } .mat-input-underline.mat-disabled { border-top: 0; background-position: 0; background-size: 4px 1px; background-repeat: repeat-x; } .mat-input-underline .mat-input-ripple { position: absolute; height: 2px; z-index: 1; top: -1px; width: 100%; transform-origin: top; opacity: 0; transform: scaleY(0); } .mat-input-underline .mat-input-ripple.mat-warn { opacity: 1; transform: scaleY(1); } .mat-input-underline .mat-input-ripple.mat-focused { opacity: 1; transform: scaleY(1); } :host /deep/ md-input-container input::-webkit-calendar-picker-indicator { display: none; } :host /deep/ md-input-container .mat-input-underline { display: none; } "],
        template: "<div flex> <template let-chip ngFor [ngForOf]=\"value\"> <td-chip> <span>{{chip}}</span> <md-icon *ngIf=\"!readOnly\" [tabIndex]=\"0\"  (keydown.enter)=\"removeItem(chip)\"  (click)=\"removeItem(chip)\" title=\"Delete\">cancel</md-icon> </td-chip> </template> <td-autocomplete #autocomplete  [disabled]=\"readOnly\"  [searchItems]=\"filteredItems\" [placeholder]=\"readOnly? '' : placeholder\" (focus)=\"handleFocus()\" (blur)=\"handleBlur() && (matches = autocomplete.clear())\" (itemSelect)=\"(matches = addItem($event)) && autocomplete.clear()\"></td-autocomplete> <div class=\"mat-input-underline\" [class.mat-disabled]=\"readOnly\"> <span class=\"mat-input-ripple\" [class.mat-focused]=\"focused\" [class.mat-warn]=\"!matches\"></span> </div> </div> ",
    })
], TdChipsComponent);
export { TdChipsComponent };
//# sourceMappingURL=chips.component.js.map