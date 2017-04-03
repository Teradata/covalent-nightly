var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, forwardRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { MdChip, MdInputDirective, ESCAPE, LEFT_ARROW, RIGHT_ARROW, DELETE, BACKSPACE } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';
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
        this._readOnly = false;
        /**
         * Boolean value that specifies if the input is valid against the provieded list.
         */
        this.matches = true;
        /**
         * Flag that is true when autocomplete is focused.
         */
        this.focused = false;
        /**
         * FormControl for the mdInput element.
         */
        this.inputControl = new FormControl();
        /**
         * Subject to control what items to render in the autocomplete
         */
        this.subject = new Subject();
        /**
         * Observable of items to render in the autocomplete
         */
        this.filteredItems = this.subject.asObservable();
        /**
         * items?: string[]
         * Enables Autocompletion with the provided list of strings.
         */
        this.items = [];
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
    Object.defineProperty(TdChipsComponent.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        /**
         * readOnly?: boolean
         * Disables the chips input and chip removal icon.
         */
        set: function (readOnly) {
            this._readOnly = readOnly;
            if (readOnly) {
                this.inputControl.disable();
            }
            else {
                this.inputControl.enable();
            }
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
                if (this._value) {
                    this._filter(this.inputControl.value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    TdChipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .debounceTime(100)
            .subscribe(function (value) {
            _this.matches = true;
            _this._filter(value);
        });
        // filter the autocomplete options after everything is rendered
        Observable.timer().subscribe(function () {
            _this._filter(_this.inputControl.value);
        });
    };
    TdChipsComponent.prototype.ngDoCheck = function () {
        // Throw onChange event only if array changes size.
        if (this._value && this._value.length !== this._length) {
            this._length = this._value.length;
            this.onChange(this._value);
        }
    };
    /**
     * Returns a list of filtered items.
     */
    TdChipsComponent.prototype.filter = function (val) {
        return this.items.filter(function (item) {
            return val ? item.indexOf(val) > -1 : true;
        });
    };
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.addChip = function (value) {
        if (value.trim() === '' || this._value.indexOf(value) > -1) {
            this.matches = false;
            return false;
        }
        if (this.items && this.requireMatch) {
            if (this.items.indexOf(value) < 0) {
                this.matches = false;
                return false;
            }
        }
        this._value.push(value);
        this.add.emit(value);
        this.onChange(this._value);
        this.inputControl.setValue('');
        this.matches = true;
        return true;
    };
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.removeChip = function (value) {
        var index = this._value.indexOf(value);
        if (index < 0) {
            return false;
        }
        this._value.splice(index, 1);
        this.remove.emit(value);
        this.onChange(this._value);
        this.inputControl.setValue('');
        return true;
    };
    TdChipsComponent.prototype.handleFocus = function () {
        this.focused = true;
        return true;
    };
    TdChipsComponent.prototype.handleBlur = function () {
        this.focused = false;
        this.matches = true;
        this.onTouched();
        return true;
    };
    /**
     * Programmatically focus the input. Since its the component entry point
     */
    TdChipsComponent.prototype.focus = function () {
        this._inputChild.focus();
    };
    /**
     * Passes relevant input key presses.
     */
    TdChipsComponent.prototype._inputKeydown = function (event) {
        switch (event.keyCode) {
            case LEFT_ARROW:
            case DELETE:
            case BACKSPACE:
                /** Check to see if input is empty when pressing left arrow to move to the last chip */
                if (!this._inputChild.value) {
                    this._focusLastChip();
                    event.preventDefault();
                }
                break;
            case RIGHT_ARROW:
                /** Check to see if input is empty when pressing right arrow to move to the first chip */
                if (!this._inputChild.value) {
                    this._focusFirstChip();
                    event.preventDefault();
                }
                break;
            default:
        }
    };
    /**
     * Passes relevant chip key presses.
     */
    TdChipsComponent.prototype._chipKeydown = function (event, index) {
        switch (event.keyCode) {
            case DELETE:
            case BACKSPACE:
                /** Check to see if not in [readOnly] state to delete a chip */
                if (!this.readOnly) {
                    /**
                     * Checks if deleting last single chip, to focus input afterwards
                     * Else check if its not the last chip of the list to focus the next one.
                     */
                    if (index === (this._totalChips - 1) && index === 0) {
                        this.focus();
                    }
                    else if (index < (this._totalChips - 1)) {
                        this._focusChip(index + 1);
                    }
                    this.removeChip(this.value[index]);
                }
                break;
            case LEFT_ARROW:
                /** Check to see if left arrow was pressed while focusing the first chip to focus input next */
                if (index === 0) {
                    this.focus();
                    event.stopPropagation();
                }
                break;
            case RIGHT_ARROW:
                /** Check to see if right arrow was pressed while focusing the last chip to focus input next */
                if (index === (this._totalChips - 1)) {
                    this.focus();
                    event.stopPropagation();
                }
                break;
            case ESCAPE:
                this.focus();
                break;
            default:
        }
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
    /**
     *
     * Method to filter the options for the autocomplete
     */
    TdChipsComponent.prototype._filter = function (value) {
        var _this = this;
        var items = this.filter(value);
        items = items.filter(function (filteredItem) {
            return _this._value && filteredItem ? _this._value.indexOf(filteredItem) < 0 : true;
        });
        this.subject.next(items);
    };
    Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
        /**
         * Get total of chips
         */
        get: function () {
            var chips = this._chipsChildren.toArray();
            return chips.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to focus a desired chip by index
     */
    TdChipsComponent.prototype._focusChip = function (index) {
        /** check to see if index exists in the array before focusing */
        if (index > -1 && this._totalChips > index) {
            this._chipsChildren.toArray()[index].focus();
        }
    };
    /** Method to focus first chip */
    TdChipsComponent.prototype._focusFirstChip = function () {
        this._focusChip(0);
    };
    /** MEthod to focus last chip */
    TdChipsComponent.prototype._focusLastChip = function () {
        this._focusChip(this._totalChips - 1);
    };
    return TdChipsComponent;
}());
__decorate([
    ViewChild(MdInputDirective),
    __metadata("design:type", MdInputDirective)
], TdChipsComponent.prototype, "_inputChild", void 0);
__decorate([
    ViewChildren(MdChip),
    __metadata("design:type", QueryList)
], TdChipsComponent.prototype, "_chipsChildren", void 0);
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
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdChipsComponent.prototype, "readOnly", null);
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
        styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ :host { display: block; padding: 0px 5px 0px 5px; } :host /deep/ .mat-input-wrapper { margin-bottom: 2px; } :host /deep/ .mat-input-container { margin-top: 8px; } :host /deep/ .mat-basic-chip { display: inline-block; cursor: default; border-radius: 16px; line-height: 32px; margin: 8px 8px 0 0; padding: 0 12px; box-sizing: border-box; max-width: 100%; position: relative; } html[dir=rtl] :host /deep/ .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } body[dir=rtl] :host /deep/ .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } [dir=rtl] :host /deep/ .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } :host /deep/ .mat-basic-chip bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip md-icon { position: relative; top: 5px; left: 5px; right: auto; height: 18px; width: 18px; font-size: 19px; } html[dir=rtl] :host /deep/ .mat-basic-chip md-icon { left: auto; unicode-bidi: embed; } body[dir=rtl] :host /deep/ .mat-basic-chip md-icon { left: auto; unicode-bidi: embed; } [dir=rtl] :host /deep/ .mat-basic-chip md-icon { left: auto; unicode-bidi: embed; } :host /deep/ .mat-basic-chip md-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip md-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host /deep/ .mat-basic-chip md-icon { right: 5px; unicode-bidi: embed; } body[dir=rtl] :host /deep/ .mat-basic-chip md-icon { right: 5px; unicode-bidi: embed; } [dir=rtl] :host /deep/ .mat-basic-chip md-icon { right: 5px; unicode-bidi: embed; } :host /deep/ .mat-basic-chip md-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip md-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip md-icon:hover { cursor: pointer; } .mat-input-underline { position: relative; height: 1px; width: 100%; } .mat-input-underline.mat-disabled { border-top: 0; background-position: 0; background-size: 4px 1px; background-repeat: repeat-x; } .mat-input-underline .mat-input-ripple { position: absolute; height: 2px; z-index: 1; top: -1px; width: 100%; transform-origin: top; opacity: 0; transform: scaleY(0); } .mat-input-underline .mat-input-ripple.mat-warn { opacity: 1; transform: scaleY(1); } .mat-input-underline .mat-input-ripple.mat-focused { opacity: 1; transform: scaleY(1); } :host /deep/ md-input-container input::-webkit-calendar-picker-indicator { display: none; } :host /deep/ md-input-container .mat-input-underline { display: none; } "],
        template: "<div flex> <md-chip-list [tabIndex]=\"-1\" (focus)=\"focus()\"> <ng-template let-chip let-index=\"index\" ngFor [ngForOf]=\"value\"> <md-basic-chip [class.td-chip-disabled]=\"readOnly\" (keydown)=\"_chipKeydown($event, index)\"> <span>{{chip}}</span> <md-icon *ngIf=\"!readOnly\" (click)=\"removeChip(chip)\"> cancel </md-icon> </md-basic-chip> </ng-template> <md-input-container floatPlaceholder=\"never\" [style.width.px]=\"readOnly ? 0 : null\" [dividerColor]=\"matches ? 'primary' : 'warn'\"> <input mdInput flex=\"100\"  #input [mdAutocomplete]=\"autocomplete\" [formControl]=\"inputControl\" [placeholder]=\"readOnly? '' : placeholder\" (keydown)=\"_inputKeydown($event)\" (keyup.enter)=\"addChip(input.value)\" (focus)=\"handleFocus()\" (blur)=\"handleBlur()\"> </md-input-container> <md-autocomplete #autocomplete=\"mdAutocomplete\"> <ng-template let-item ngFor [ngForOf]=\"filteredItems | async\"> <md-option (click)=\"addChip(input.value)\" [value]=\"item\">{{item}}</md-option> </ng-template> </md-autocomplete> </md-chip-list> <div class=\"mat-input-underline\" [class.mat-disabled]=\"readOnly\"> <span class=\"mat-input-ripple\" [class.mat-focused]=\"focused\" [class.mat-warn]=\"!matches\"></span> </div> </div> ",
    })
], TdChipsComponent);
export { TdChipsComponent };
//# sourceMappingURL=chips.component.js.map