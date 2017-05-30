var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, forwardRef, ViewChild, ViewChildren, QueryList, HostListener, ElementRef, Optional, Inject, Directive, TemplateRef, ViewContainerRef, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { MdChip, MdInputDirective, TemplatePortalDirective, MdOption, MdAutocompleteTrigger, UP_ARROW, ESCAPE, LEFT_ARROW, RIGHT_ARROW, DELETE, BACKSPACE, TAB, HOME } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
var noop = function () {
    // empty method
};
var TdBasicChipDirective = (function (_super) {
    __extends(TdBasicChipDirective, _super);
    function TdBasicChipDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdBasicChipDirective;
}(TemplatePortalDirective));
TdBasicChipDirective = __decorate([
    Directive({
        selector: '[td-basic-chip]ng-template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdBasicChipDirective);
export { TdBasicChipDirective };
var TdAutocompleteOptionDirective = (function (_super) {
    __extends(TdAutocompleteOptionDirective, _super);
    function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdAutocompleteOptionDirective;
}(TemplatePortalDirective));
TdAutocompleteOptionDirective = __decorate([
    Directive({
        selector: '[td-autocomplete-option]ng-template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdAutocompleteOptionDirective);
export { TdAutocompleteOptionDirective };
var TdChipsComponent = TdChipsComponent_1 = (function () {
    function TdChipsComponent(_elementRef, _renderer, _changeDetectorRef, _document) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._document = _document;
        this._isMousedown = false;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = [];
        this._length = 0;
        this._requireMatch = false;
        this._readOnly = false;
        this._color = 'primary';
        this._chipAddition = true;
        this._focused = false;
        this._tabIndex = 0;
        this._internalClick = false;
        /**
         * FormControl for the mdInput element.
         */
        this.inputControl = new FormControl();
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 200.
         */
        this.debounce = 200;
        /**
         * add?: function
         * Method to be executed when a chip is added.
         * Sends chip value as event.
         */
        this.onAdd = new EventEmitter();
        /**
         * remove?: function
         * Method to be executed when a chip is removed.
         * Sends chip value as event.
         */
        this.onRemove = new EventEmitter();
        /**
         * inputChange?: function
         * Method to be executed when the value in the autocomplete input changes.
         * Sends string value as event.
         */
        this.onInputChange = new EventEmitter();
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
        this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
    }
    Object.defineProperty(TdChipsComponent.prototype, "focused", {
        /**
         * Flag that is true when autocomplete is focused.
         */
        get: function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        /**
         * items?: any[]
         * Renders the `md-autocomplete` with the provided list to display as options.
         */
        set: function (items) {
            this._items = items;
            this._setFirstOptionActive();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
        get: function () {
            return this._requireMatch;
        },
        /**
         * requireMatch?: boolean
         * Blocks custom inputs and only allows selections from the autocomplete list.
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
            this._toggleInput();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
        get: function () {
            return this._chipAddition;
        },
        /**
         * chipAddition?: boolean
         * Disables the ability to add chips. When setting readOnly as true, this will be overriden.
         * Defaults to true.
         */
        set: function (chipAddition) {
            this._chipAddition = chipAddition;
            this._toggleInput();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "canAddChip", {
        /**
         * Checks if not in readOnly state and if chipAddition is set to 'true'
         * States if a chip can be added and if the input is available
         */
        get: function () {
            return this.chipAddition && !this.readOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        /**
         * color?: 'primary' | 'accent' | 'warn'
         * Sets the color for the input and focus/selected state of the chips.
         * Defaults to 'primary'
         */
        set: function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
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
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "tabIndex", {
        /**
         * Hostbinding to set the a11y of the TdChipsComponent depending on its state
         */
        get: function () {
            return this.readOnly ? -1 : this._tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to host focus event to act on it
     */
    TdChipsComponent.prototype.focusListener = function (event) {
        // should only focus if its not via mousedown to prevent clashing with autocomplete
        if (!this._isMousedown) {
            this.focus();
        }
        event.preventDefault();
    };
    /**
     * Listens to host mousedown event to act on it
     */
    TdChipsComponent.prototype.mousedownListener = function (event) {
        var _this = this;
        // sets a flag to know if there was a mousedown and then it returns it back to false
        this._isMousedown = true;
        Observable.timer().toPromise().then(function () {
            _this._isMousedown = false;
        });
    };
    /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     */
    TdChipsComponent.prototype.clickListener = function (event) {
        var clickTarget = event.target;
        if (clickTarget === this._elementRef.nativeElement ||
            clickTarget.className.indexOf('td-chips-wrapper') > -1) {
            this.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * Listens to host keydown event to act on it depending on the keypress
     */
    TdChipsComponent.prototype.keydownListener = function (event) {
        var _this = this;
        switch (event.keyCode) {
            case TAB:
                // if tabing out, then unfocus the component
                Observable.timer().toPromise().then(function () {
                    _this.removeFocusedState();
                });
                break;
            case ESCAPE:
            case HOME:
                this.focus();
                break;
            default:
        }
    };
    TdChipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .debounceTime(this.debounce)
            .subscribe(function (value) {
            _this.onInputChange.emit(value ? value : '');
        });
        this._changeDetectorRef.markForCheck();
    };
    TdChipsComponent.prototype.ngAfterViewInit = function () {
        this._watchOutsideClick();
        this._changeDetectorRef.markForCheck();
    };
    TdChipsComponent.prototype.ngDoCheck = function () {
        // Throw onChange event only if array changes size.
        if (this._value && this._value.length !== this._length) {
            this._length = this._value.length;
            this.onChange(this._value);
        }
    };
    TdChipsComponent.prototype.ngOnDestroy = function () {
        if (this._outsideClickSubs) {
            this._outsideClickSubs.unsubscribe();
            this._outsideClickSubs = undefined;
        }
    };
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype._handleAddChip = function () {
        var value;
        if (this.requireMatch) {
            var selectedOptions = this._options.toArray().filter(function (option) {
                return option.active;
            });
            if (selectedOptions.length > 0) {
                value = selectedOptions[0].value;
                selectedOptions[0].setInactiveStyles();
            }
            if (!value) {
                return false;
            }
        }
        else {
            // if there is a selection, then use that
            // else use the input value as chip
            if (this._autocompleteTrigger.activeOption) {
                value = this._autocompleteTrigger.activeOption.value;
                this._autocompleteTrigger.activeOption.setInactiveStyles();
            }
            else {
                value = this._inputChild.value;
                if (value.trim() === '') {
                    return false;
                }
            }
        }
        return this.addChip(value);
    };
    /**
     * Method thats exectuted when trying to add a value as chip
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.addChip = function (value) {
        var _this = this;
        this.inputControl.setValue('');
        // check if value is already part of the model
        if (this._value.indexOf(value) > -1) {
            return false;
        }
        this._value.push(value);
        this.onAdd.emit(value);
        this.onChange(this._value);
        this._changeDetectorRef.markForCheck();
        /**
         * add a 200 ms delay when reopening the autocomplete to give it time
         * to rerender the next list and at the correct spot
         */
        this._closeAutocomplete();
        Observable.timer(200).toPromise().then(function () {
            _this.setFocusedState();
            _this._setFirstOptionActive();
            _this._openAutocomplete();
        });
        return true;
    };
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    TdChipsComponent.prototype.removeChip = function (index) {
        var removedValues = this._value.splice(index, 1);
        if (removedValues.length === 0) {
            return false;
        }
        /**
         * Checks if deleting last single chip, to focus input afterwards
         * Else check if its not the last chip of the list to focus the next one.
         */
        if (index === (this._totalChips - 1) && index === 0) {
            this._inputChild.focus();
        }
        else if (index < (this._totalChips - 1)) {
            this._focusChip(index + 1);
        }
        else if (index > 0) {
            this._focusChip(index - 1);
        }
        this.onRemove.emit(removedValues[0]);
        this.onChange(this._value);
        this.inputControl.setValue('');
        this._changeDetectorRef.markForCheck();
        return true;
    };
    TdChipsComponent.prototype._handleFocus = function () {
        this.setFocusedState();
        this._setFirstOptionActive();
        return true;
    };
    /**
     * Sets focus state of the component
     */
    TdChipsComponent.prototype.setFocusedState = function () {
        if (!this.readOnly) {
            this._focused = true;
            this._tabIndex = -1;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Removes focus state of the component
     */
    TdChipsComponent.prototype.removeFocusedState = function () {
        this._focused = false;
        this._tabIndex = 0;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     */
    TdChipsComponent.prototype.focus = function () {
        if (this.canAddChip) {
            this._inputChild.focus();
        }
        else if (!this.readOnly) {
            this._focusFirstChip();
        }
    };
    /**
     * Passes relevant input key presses.
     */
    TdChipsComponent.prototype._inputKeydown = function (event) {
        switch (event.keyCode) {
            case UP_ARROW:
                /**
                 * Since the first item is highlighted on [requireMatch], we need to inactivate it
                 * when pressing the up key
                 */
                if (this.requireMatch) {
                    var length_1 = this._options.length;
                    if (length_1 > 0 && this._options.toArray()[0].active) {
                        this._options.toArray()[0].setInactiveStyles();
                        event.preventDefault();
                    }
                }
                break;
            case LEFT_ARROW:
            case DELETE:
            case BACKSPACE:
                this._closeAutocomplete();
                /** Check to see if input is empty when pressing left arrow to move to the last chip */
                if (!this._inputChild.value) {
                    this._focusLastChip();
                    event.preventDefault();
                }
                break;
            case RIGHT_ARROW:
                this._closeAutocomplete();
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
                    this.removeChip(index);
                }
                break;
            case LEFT_ARROW:
                /**
                 * Check to see if left arrow was pressed while focusing the first chip to focus input next
                 * Also check if input should be focused
                 */
                if (index === 0) {
                    if (this.canAddChip) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusLastChip();
                    }
                }
                else if (index > 0) {
                    this._focusChip(index - 1);
                }
                event.stopPropagation();
                break;
            case RIGHT_ARROW:
                /**
                 * Check to see if right arrow was pressed while focusing the last chip to focus input next
                 * Also check if input should be focused
                 */
                if (index === (this._totalChips - 1)) {
                    if (this.canAddChip) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusFirstChip();
                    }
                }
                else if (index < (this._totalChips - 1)) {
                    this._focusChip(index + 1);
                }
                event.stopPropagation();
                break;
            default:
        }
    };
    /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     */
    TdChipsComponent.prototype._removeInputDisplay = function () {
        return '';
    };
    /**
     * Method to open the autocomplete manually if its not already opened
     */
    TdChipsComponent.prototype._openAutocomplete = function () {
        if (!this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.openPanel();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Method to close the autocomplete manually if its not already closed
     */
    TdChipsComponent.prototype._closeAutocomplete = function () {
        if (this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.closePanel();
            this._changeDetectorRef.markForCheck();
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
    /** Method to focus last chip */
    TdChipsComponent.prototype._focusLastChip = function () {
        this._focusChip(this._totalChips - 1);
    };
    /**
     * Method to toggle the disable state of input
     * Checks if not in readOnly state and if chipAddition is set to 'true'
     */
    TdChipsComponent.prototype._toggleInput = function () {
        if (this.canAddChip) {
            this.inputControl.enable();
        }
        else {
            this.inputControl.disable();
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Sets first option as active to let the user know which one will be added when pressing enter
     * Only if [requireMatch] has been set
     */
    TdChipsComponent.prototype._setFirstOptionActive = function () {
        var _this = this;
        if (this.requireMatch) {
            // need to use a timer here to wait until the autocomplete has been opened (end of queue)
            Observable.timer().toPromise().then(function () {
                if (_this.focused && _this._options && _this._options.length > 0) {
                    // clean up of previously active options
                    _this._options.toArray().forEach(function (option) {
                        option.setInactiveStyles();
                    });
                    // set the first one as active
                    _this._options.toArray()[0].setActiveStyles();
                    _this._changeDetectorRef.markForCheck();
                }
            });
        }
    };
    /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     */
    TdChipsComponent.prototype._watchOutsideClick = function () {
        var _this = this;
        if (this._document) {
            this._outsideClickSubs = Observable.fromEvent(this._document, 'click').filter(function (event) {
                var clickTarget = event.target;
                setTimeout(function () {
                    _this._internalClick = false;
                });
                return _this.focused &&
                    (clickTarget !== _this._elementRef.nativeElement) &&
                    !_this._elementRef.nativeElement.contains(clickTarget) && !_this._internalClick;
            }).subscribe(function () {
                if (_this.focused) {
                    _this.removeFocusedState();
                    _this.onTouched();
                    _this._changeDetectorRef.markForCheck();
                }
            });
        }
        return undefined;
    };
    return TdChipsComponent;
}());
__decorate([
    ViewChild(MdInputDirective),
    __metadata("design:type", MdInputDirective)
], TdChipsComponent.prototype, "_inputChild", void 0);
__decorate([
    ViewChild(MdAutocompleteTrigger),
    __metadata("design:type", MdAutocompleteTrigger)
], TdChipsComponent.prototype, "_autocompleteTrigger", void 0);
__decorate([
    ViewChildren(MdChip),
    __metadata("design:type", QueryList)
], TdChipsComponent.prototype, "_chipsChildren", void 0);
__decorate([
    ContentChild(TdBasicChipDirective),
    __metadata("design:type", TdBasicChipDirective)
], TdChipsComponent.prototype, "_basicChipTemplate", void 0);
__decorate([
    ContentChild(TdAutocompleteOptionDirective),
    __metadata("design:type", TdAutocompleteOptionDirective)
], TdChipsComponent.prototype, "_autocompleteOptionTemplate", void 0);
__decorate([
    ViewChildren(MdOption),
    __metadata("design:type", QueryList)
], TdChipsComponent.prototype, "_options", void 0);
__decorate([
    Input('items'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdChipsComponent.prototype, "items", null);
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
    Input('chipAddition'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdChipsComponent.prototype, "chipAddition", null);
__decorate([
    Input('placeholder'),
    __metadata("design:type", String)
], TdChipsComponent.prototype, "placeholder", void 0);
__decorate([
    Input('debounce'),
    __metadata("design:type", Number)
], TdChipsComponent.prototype, "debounce", void 0);
__decorate([
    Input('color'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdChipsComponent.prototype, "color", null);
__decorate([
    Output('add'),
    __metadata("design:type", EventEmitter)
], TdChipsComponent.prototype, "onAdd", void 0);
__decorate([
    Output('remove'),
    __metadata("design:type", EventEmitter)
], TdChipsComponent.prototype, "onRemove", void 0);
__decorate([
    Output('inputChange'),
    __metadata("design:type", EventEmitter)
], TdChipsComponent.prototype, "onInputChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdChipsComponent.prototype, "value", null);
__decorate([
    HostBinding('attr.tabindex'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], TdChipsComponent.prototype, "tabIndex", null);
__decorate([
    HostListener('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FocusEvent]),
    __metadata("design:returntype", void 0)
], TdChipsComponent.prototype, "focusListener", null);
__decorate([
    HostListener('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FocusEvent]),
    __metadata("design:returntype", void 0)
], TdChipsComponent.prototype, "mousedownListener", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], TdChipsComponent.prototype, "clickListener", null);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], TdChipsComponent.prototype, "keydownListener", null);
TdChipsComponent = TdChipsComponent_1 = __decorate([
    Component({
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return TdChipsComponent_1; }),
                multi: true,
            }],
        selector: 'td-chips',
        styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ :host { display: block; padding: 0px 5px 0px 5px; } :host .td-chips-wrapper { display: flex; flex-direction: row; flex-wrap: wrap; align-items: flex-start; } :host /deep/ { /* TODO see if we can make styles more abstract to future proof for contact chips */ } :host /deep/ .mat-input-wrapper { margin-bottom: 2px; } :host /deep/ .mat-basic-chip { display: inline-block; cursor: default; border-radius: 16px; margin: 8px 8px 0 0; box-sizing: border-box; max-width: 100%; position: relative; } html[dir=rtl] :host /deep/ .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } body[dir=rtl] :host /deep/ .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } [dir=rtl] :host /deep/ .mat-basic-chip { margin: 8px 0 0 8px; unicode-bidi: embed; } :host /deep/ .mat-basic-chip bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip .td-basic-chip { min-height: 30px; font-size: 14px; padding: 0 0 0 12px; } html[dir=rtl] :host /deep/ .mat-basic-chip .td-basic-chip { padding: 0 12px 0 0; unicode-bidi: embed; } body[dir=rtl] :host /deep/ .mat-basic-chip .td-basic-chip { padding: 0 12px 0 0; unicode-bidi: embed; } [dir=rtl] :host /deep/ .mat-basic-chip .td-basic-chip { padding: 0 12px 0 0; unicode-bidi: embed; } :host /deep/ .mat-basic-chip .td-basic-chip bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip .td-basic-chip bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip.td-chip-disabled { padding: 0 12px 0 0; } html[dir=rtl] :host /deep/ .mat-basic-chip.td-chip-disabled { padding: 0 0 0 12px; unicode-bidi: embed; } body[dir=rtl] :host /deep/ .mat-basic-chip.td-chip-disabled { padding: 0 0 0 12px; unicode-bidi: embed; } [dir=rtl] :host /deep/ .mat-basic-chip.td-chip-disabled { padding: 0 0 0 12px; unicode-bidi: embed; } :host /deep/ .mat-basic-chip.td-chip-disabled bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip.td-chip-disabled bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host /deep/ .mat-basic-chip md-icon.td-chip-removal { margin: 0 4px; font-size: 21px; } :host /deep/ .mat-basic-chip md-icon.td-chip-removal:hover { cursor: pointer; } :host .mat-input-underline { position: relative; height: 1px; width: 100%; margin-top: 4px; border-top-width: 1px; border-top-style: solid; } :host .mat-input-underline.mat-disabled { border-top: 0; background-position: 0; background-size: 4px 1px; background-repeat: repeat-x; } :host .mat-input-underline .mat-input-ripple { position: absolute; height: 2px; z-index: 1; top: -1px; width: 100%; transform-origin: 50%; transform: scaleX(0.5); visibility: hidden; transition: background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); } :host .mat-input-underline .mat-input-ripple.mat-focused { visibility: visible; transform: scaleX(1); transition: transform 150ms linear, background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); } :host /deep/ md-input-container .mat-input-underline { display: none; } "],
        template: "<div class=\"td-chips-wrapper\"> <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\"> <md-basic-chip [class.td-chip-disabled]=\"readOnly\" [color]=\"color\" (keydown)=\"_chipKeydown($event, index)\" (focus)=\"setFocusedState()\"> <div layout=\"row\" layout-align=\"start center\" flex> <div class=\"td-basic-chip\" layout=\"row\" layout-align=\"start center\"> <span *ngIf=\"!_basicChipTemplate?.templateRef\">{{chip}}</span> <ng-template *ngIf=\"_basicChipTemplate?.templateRef\" [ngTemplateOutlet]=\"_basicChipTemplate?.templateRef\" [ngOutletContext]=\"{ chip: chip }\"> </ng-template> </div> <md-icon *ngIf=\"!readOnly\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\"> cancel </md-icon> </div> </md-basic-chip> </ng-template> <md-input-container floatPlaceholder=\"never\" [style.width.px]=\"canAddChip ? null : 0\" [color]=\"color\"> <input mdInput flex=\"100\" #input [tabIndex]=\"-1\" [mdAutocomplete]=\"autocomplete\" [formControl]=\"inputControl\" [placeholder]=\"canAddChip? placeholder : ''\" (keydown)=\"_inputKeydown($event)\" (keyup.enter)=\"_handleAddChip()\" (focus)=\"_handleFocus()\"> </md-input-container> <md-autocomplete #autocomplete=\"mdAutocomplete\" [displayWith]=\"_removeInputDisplay\"> <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\"> <md-option (click)=\"_internalClick = addChip(item)\" [value]=\"item\"> <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span> <ng-template *ngIf=\"_autocompleteOptionTemplate?.templateRef\" [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\" [ngOutletContext]=\"{ option: item }\"> </ng-template> </md-option> </ng-template> </md-autocomplete> </div> <div *ngIf=\"chipAddition\" class=\"mat-input-underline\" [class.mat-disabled]=\"readOnly\"> <span class=\"mat-input-ripple\" [class.mat-focused]=\"focused\"></span> </div> <ng-content></ng-content>",
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __param(3, Optional()), __param(3, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ChangeDetectorRef, Object])
], TdChipsComponent);
export { TdChipsComponent };
var TdChipsComponent_1;
//# sourceMappingURL=chips.component.js.map