import { __extends } from 'tslib';
import { Component, Input, Output, forwardRef, ViewChild, ViewChildren, HostListener, ElementRef, Optional, Inject, Directive, TemplateRef, ViewContainerRef, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Renderer2, EventEmitter, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UP_ARROW, DOWN_ARROW, ESCAPE, LEFT_ARROW, RIGHT_ARROW, DELETE, BACKSPACE, TAB } from '@angular/cdk/keycodes';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatAutocompleteTrigger, MatAutocompleteModule } from '@angular/material/autocomplete';
import { Subscription, timer, merge, fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdChipDirective = /** @class */ (function (_super) {
    __extends(TdChipDirective, _super);
    function TdChipDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdChipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-chip]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdChipDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdChipDirective;
}(TemplatePortalDirective));
var TdAutocompleteOptionDirective = /** @class */ (function (_super) {
    __extends(TdAutocompleteOptionDirective, _super);
    function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdAutocompleteOptionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-autocomplete-option]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdAutocompleteOptionDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdAutocompleteOptionDirective;
}(TemplatePortalDirective));
var TdChipsBase = /** @class */ (function () {
    function TdChipsBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdChipsBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdChipsMixinBase = mixinControlValueAccessor(mixinDisabled(TdChipsBase), []);
var TdChipsComponent = /** @class */ (function (_super) {
    __extends(TdChipsComponent, _super);
    function TdChipsComponent(_elementRef, _renderer, _document, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this._document = _document;
        _this._outsideClickSubs = Subscription.EMPTY;
        _this._inputValueChangesSubs = Subscription.EMPTY;
        _this._isMousedown = false;
        _this._length = 0;
        _this._stacked = false;
        _this._requireMatch = false;
        _this._color = 'primary';
        _this._inputPosition = 'after';
        _this._chipAddition = true;
        _this._chipRemoval = true;
        _this._focused = false;
        _this._required = false;
        _this._tabIndex = 0;
        _this._touchendDebounce = 100;
        _this._internalClick = false;
        _this._internalActivateOption = false;
        /**
         * FormControl for the matInput element.
         */
        _this.inputControl = new FormControl();
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 200.
         */
        _this.debounce = 200;
        /**
         * add?: function
         * Method to be executed when a chip is added.
         * Sends chip value as event.
         */
        _this.onAdd = new EventEmitter();
        /**
         * remove?: function
         * Method to be executed when a chip is removed.
         * Sends chip value as event.
         */
        _this.onRemove = new EventEmitter();
        /**
         * inputChange?: function
         * Method to be executed when the value in the autocomplete input changes.
         * Sends string value as event.
         */
        _this.onInputChange = new EventEmitter();
        /**
         * chipFocus?: function
         * Method to be executed when a chip is focused.
         * Sends chip value as event.
         */
        _this.onChipFocus = new EventEmitter();
        /**
         * blur?: function
         * Method to be executed when a chip is blurred.
         * Sends chip value as event.
         */
        _this.onChipBlur = new EventEmitter();
        /**
         * compareWith? function
         * Function used to check whether a chip value already exists.
         * Defaults to strict equality comparison ===
         */
        _this.compareWith = function (o1, o2) {
            return o1 === o2;
        };
        _this._renderer.addClass(_this._elementRef.nativeElement, 'mat-' + _this._color);
        return _this;
    }
    Object.defineProperty(TdChipsComponent.prototype, "focused", {
        /**
         * Flag that is true when autocomplete is focused.
         */
        get: /**
         * Flag that is true when autocomplete is focused.
         * @return {?}
         */
        function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        /**
         * items?: any[]
         * Renders the `mat-autocomplete` with the provided list to display as options.
         */
        set: /**
         * items?: any[]
         * Renders the `mat-autocomplete` with the provided list to display as options.
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._items = items;
            this._setFirstOptionActive();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "stacked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._stacked;
        },
        /**
         * stacked?: boolean
         * Set stacked or horizontal chips depending on value.
         * Defaults to false.
         */
        set: /**
         * stacked?: boolean
         * Set stacked or horizontal chips depending on value.
         * Defaults to false.
         * @param {?} stacked
         * @return {?}
         */
        function (stacked) {
            this._stacked = coerceBooleanProperty(stacked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "inputPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inputPosition;
        },
        /**
         * inputPosition?: 'before' | 'after'
         * Set input position before or after the chips.
         * Defaults to 'after'.
         */
        set: /**
         * inputPosition?: 'before' | 'after'
         * Set input position before or after the chips.
         * Defaults to 'after'.
         * @param {?} inputPosition
         * @return {?}
         */
        function (inputPosition) {
            this._inputPosition = inputPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._requireMatch;
        },
        /**
         * requireMatch?: boolean
         * Blocks custom inputs and only allows selections from the autocomplete list.
         */
        set: /**
         * requireMatch?: boolean
         * Blocks custom inputs and only allows selections from the autocomplete list.
         * @param {?} requireMatch
         * @return {?}
         */
        function (requireMatch) {
            this._requireMatch = coerceBooleanProperty(requireMatch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        /**
         * required?: boolean
         * Value is set to true if at least one chip is needed
         * Defaults to false
         */
        set: /**
         * required?: boolean
         * Value is set to true if at least one chip is needed
         * Defaults to false
         * @param {?} required
         * @return {?}
         */
        function (required) {
            this._required = coerceBooleanProperty(required);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._chipAddition;
        },
        /**
         * chipAddition?: boolean
         * Disables the ability to add chips. When setting disabled as true, this will be overriden.
         * Defaults to true.
         */
        set: /**
         * chipAddition?: boolean
         * Disables the ability to add chips. When setting disabled as true, this will be overriden.
         * Defaults to true.
         * @param {?} chipAddition
         * @return {?}
         */
        function (chipAddition) {
            this._chipAddition = chipAddition;
            this._toggleInput();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "canAddChip", {
        /**
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * States if a chip can be added and if the input is available
         */
        get: /**
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * States if a chip can be added and if the input is available
         * @return {?}
         */
        function () {
            return this.chipAddition && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipRemoval", {
        get: /**
         * @return {?}
         */
        function () {
            return this._chipRemoval;
        },
        /**
         * chipRemoval?: boolean
         * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
         * When setting disabled as true, this will be overriden to false.
         */
        set: /**
         * chipRemoval?: boolean
         * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
         * When setting disabled as true, this will be overriden to false.
         * @param {?} chipRemoval
         * @return {?}
         */
        function (chipRemoval) {
            this._chipRemoval = chipRemoval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "canRemoveChip", {
        /**
         * Checks if not in disabled state and if chipRemoval is set to 'true'
         * States if a chip can be removed
         */
        get: /**
         * Checks if not in disabled state and if chipRemoval is set to 'true'
         * States if a chip can be removed
         * @return {?}
         */
        function () {
            return this.chipRemoval && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "displayPlaceHolder", {
        /**
         * returns the display placeholder
         */
        get: /**
         * returns the display placeholder
         * @return {?}
         */
        function () {
            if (!this.canAddChip) {
                return '';
            }
            return (this._required) ? this.placeholder + " *" : this.placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        /**
         * color?: 'primary' | 'accent' | 'warn'
         * Sets the color for the input and focus/selected state of the chips.
         * Defaults to 'primary'
         */
        set: /**
         * color?: 'primary' | 'accent' | 'warn'
         * Sets the color for the input and focus/selected state of the chips.
         * Defaults to 'primary'
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "tabIndex", {
        /**
         * Hostbinding to set the a11y of the TdChipsComponent depending on its state
         */
        get: /**
         * Hostbinding to set the a11y of the TdChipsComponent depending on its state
         * @return {?}
         */
        function () {
            return this.disabled ? -1 : this._tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to host focus event to act on it
     */
    /**
     * Listens to host focus event to act on it
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype.focusListener = /**
     * Listens to host focus event to act on it
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // should only focus if its not via mousedown to prevent clashing with autocomplete
        if (!this._isMousedown) {
            this.focus();
        }
        event.preventDefault();
    };
    /**
     * Listens to host mousedown event to act on it
     */
    /**
     * Listens to host mousedown event to act on it
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype.mousedownListener = /**
     * Listens to host mousedown event to act on it
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // sets a flag to know if there was a mousedown and then it returns it back to false
        this._isMousedown = true;
        timer().toPromise().then(function () {
            _this._isMousedown = false;
        });
    };
    /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     */
    /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype.clickListener = /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var clickTarget = (/** @type {?} */ (event.target));
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
    /**
     * Listens to host keydown event to act on it depending on the keypress
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype.keydownListener = /**
     * Listens to host keydown event to act on it depending on the keypress
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        switch (event.keyCode) {
            case TAB:
                // if tabing out, then unfocus the component
                timer().toPromise().then(function () {
                    _this.removeFocusedState();
                });
                break;
            case ESCAPE:
                if (this._inputChild.focused) {
                    this._nativeInput.nativeElement.blur();
                    this.removeFocusedState();
                    this._closeAutocomplete();
                }
                else {
                    this.focus();
                }
                break;
            default:
            // default
        }
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._inputValueChangesSubs = this.inputControl.valueChanges.pipe(debounceTime(this.debounce)).subscribe(function (value) {
            _this.onInputChange.emit(value ? value : '');
        });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._watchOutsideClick();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        // Throw onChange event only if array changes size.
        if (this.value && this.value.length !== this._length) {
            this._length = this.value.length;
            this.onChange(this.value);
        }
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._outsideClickSubs.unsubscribe();
        this._inputValueChangesSubs.unsubscribe();
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype._setInternalClick = /**
     * @return {?}
     */
    function () {
        this._internalClick = true;
    };
    /** Method executed when the disabled value changes */
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdChipsComponent.prototype.onDisabledChange = /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this._toggleInput();
    };
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     */
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     * @return {?}
     */
    TdChipsComponent.prototype._handleAddChip = /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value;
        if (this.requireMatch) {
            /** @type {?} */
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
    /**
     * Method thats exectuted when trying to add a value as chip
     * returns 'true' if successful, 'false' if it fails.
     * @param {?} value
     * @return {?}
     */
    TdChipsComponent.prototype.addChip = /**
     * Method thats exectuted when trying to add a value as chip
     * returns 'true' if successful, 'false' if it fails.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /**
         * add a debounce ms delay when reopening the autocomplete to give it time
         * to rerender the next list and at the correct spot
         */
        var _this = this;
        this._closeAutocomplete();
        timer(this.debounce).toPromise().then(function () {
            _this.setFocusedState();
            _this._setFirstOptionActive();
            _this._openAutocomplete();
        });
        this.inputControl.setValue('');
        // check if value is already part of the model
        if (this.value.findIndex(function (item) { return _this.compareWith(item, value); }) > -1) {
            return false;
        }
        this.value.push(value);
        this.onAdd.emit(value);
        this.onChange(this.value);
        this._changeDetectorRef.markForCheck();
        return true;
    };
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     * @param {?} index
     * @return {?}
     */
    TdChipsComponent.prototype.removeChip = /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var removedValues = this.value.splice(index, 1);
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
        this.onChange(this.value);
        this.inputControl.setValue('');
        this._changeDetectorRef.markForCheck();
        return true;
    };
    /**
     * Sets blur of chip and sends out event
     */
    /**
     * Sets blur of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    TdChipsComponent.prototype._handleChipBlur = /**
     * Sets blur of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        this.onChipBlur.emit(value);
    };
    /**
     * Sets focus of chip and sends out event
     */
    /**
     * Sets focus of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    TdChipsComponent.prototype._handleChipFocus = /**
     * Sets focus of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        this.setFocusedState();
        this.onChipFocus.emit(value);
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype._handleFocus = /**
     * @return {?}
     */
    function () {
        this.setFocusedState();
        this._setFirstOptionActive();
        return true;
    };
    /**
     * Sets focus state of the component
     */
    /**
     * Sets focus state of the component
     * @return {?}
     */
    TdChipsComponent.prototype.setFocusedState = /**
     * Sets focus state of the component
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._focused = true;
            this._tabIndex = -1;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Removes focus state of the component
     */
    /**
     * Removes focus state of the component
     * @return {?}
     */
    TdChipsComponent.prototype.removeFocusedState = /**
     * Removes focus state of the component
     * @return {?}
     */
    function () {
        this._focused = false;
        this._tabIndex = 0;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     */
    /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     * @return {?}
     */
    TdChipsComponent.prototype.focus = /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     * @return {?}
     */
    function () {
        if (this.canAddChip) {
            this._inputChild.focus();
        }
        else if (!this.disabled) {
            this._focusFirstChip();
        }
    };
    /**
     * Passes relevant input key presses.
     */
    /**
     * Passes relevant input key presses.
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype._inputKeydown = /**
     * Passes relevant input key presses.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case UP_ARROW:
                /**
                 * Since the first item is highlighted on [requireMatch], we need to inactivate it
                 * when pressing the up key
                 */
                if (this.requireMatch) {
                    /** @type {?} */
                    var length_1 = this._options.length;
                    if (length_1 > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
                        this._options.toArray()[0].setInactiveStyles();
                        this._internalActivateOption = false;
                        // prevent default window scrolling
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
                    // prevent default window scrolling
                    event.preventDefault();
                }
                break;
            case RIGHT_ARROW:
                this._closeAutocomplete();
                /** Check to see if input is empty when pressing right arrow to move to the first chip */
                if (!this._inputChild.value) {
                    this._focusFirstChip();
                    // prevent default window scrolling
                    event.preventDefault();
                }
                break;
            default:
            // default
        }
    };
    /**
     * Passes relevant chip key presses.
     */
    /**
     * Passes relevant chip key presses.
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TdChipsComponent.prototype._chipKeydown = /**
     * Passes relevant chip key presses.
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        switch (event.keyCode) {
            case DELETE:
            case BACKSPACE:
                /** Check to see if we can delete a chip */
                if (this.canRemoveChip) {
                    this.removeChip(index);
                }
                break;
            case UP_ARROW:
            case LEFT_ARROW:
                /**
                 * Check to see if left/down arrow was pressed while focusing the first chip to focus input next
                 * Also check if input should be focused
                 */
                if (index === 0) {
                    // only try to target input if pressing left
                    if (this.canAddChip && event.keyCode === LEFT_ARROW) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusLastChip();
                    }
                }
                else if (index > 0) {
                    this._focusChip(index - 1);
                }
                // prevent default window scrolling
                event.preventDefault();
                break;
            case DOWN_ARROW:
            case RIGHT_ARROW:
                /**
                 * Check to see if right/up arrow was pressed while focusing the last chip to focus input next
                 * Also check if input should be focused
                 */
                if (index === (this._totalChips - 1)) {
                    // only try to target input if pressing right
                    if (this.canAddChip && event.keyCode === RIGHT_ARROW) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusFirstChip();
                    }
                }
                else if (index < (this._totalChips - 1)) {
                    this._focusChip(index + 1);
                }
                // prevent default window scrolling
                event.preventDefault();
                break;
            default:
            // default
        }
    };
    /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     */
    /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     * @return {?}
     */
    TdChipsComponent.prototype._removeInputDisplay = /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     * @return {?}
     */
    function () {
        return '';
    };
    /**
     * Method to open the autocomplete manually if its not already opened
     */
    /**
     * Method to open the autocomplete manually if its not already opened
     * @return {?}
     */
    TdChipsComponent.prototype._openAutocomplete = /**
     * Method to open the autocomplete manually if its not already opened
     * @return {?}
     */
    function () {
        if (!this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.openPanel();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Method to close the autocomplete manually if its not already closed
     */
    /**
     * Method to close the autocomplete manually if its not already closed
     * @return {?}
     */
    TdChipsComponent.prototype._closeAutocomplete = /**
     * Method to close the autocomplete manually if its not already closed
     * @return {?}
     */
    function () {
        if (this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.closePanel();
            this._changeDetectorRef.markForCheck();
        }
    };
    Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
        /**
         * Get total of chips
         */
        get: /**
         * Get total of chips
         * @return {?}
         */
        function () {
            /** @type {?} */
            var chips = this._chipsChildren.toArray();
            return chips.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to focus a desired chip by index
     */
    /**
     * Method to focus a desired chip by index
     * @param {?} index
     * @return {?}
     */
    TdChipsComponent.prototype._focusChip = /**
     * Method to focus a desired chip by index
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** check to see if index exists in the array before focusing */
        if (index > -1 && this._totalChips > index) {
            this._chipsChildren.toArray()[index].focus();
        }
    };
    /** Method to focus first chip */
    /**
     * Method to focus first chip
     * @return {?}
     */
    TdChipsComponent.prototype._focusFirstChip = /**
     * Method to focus first chip
     * @return {?}
     */
    function () {
        this._focusChip(0);
    };
    /** Method to focus last chip */
    /**
     * Method to focus last chip
     * @return {?}
     */
    TdChipsComponent.prototype._focusLastChip = /**
     * Method to focus last chip
     * @return {?}
     */
    function () {
        this._focusChip(this._totalChips - 1);
    };
    /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     */
    /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     * @return {?}
     */
    TdChipsComponent.prototype._toggleInput = /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     * @return {?}
     */
    function () {
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
    /**
     * Sets first option as active to let the user know which one will be added when pressing enter
     * Only if [requireMatch] has been set
     * @return {?}
     */
    TdChipsComponent.prototype._setFirstOptionActive = /**
     * Sets first option as active to let the user know which one will be added when pressing enter
     * Only if [requireMatch] has been set
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.requireMatch) {
            // need to use a timer here to wait until the autocomplete has been opened (end of queue)
            timer().toPromise().then(function () {
                if (_this.focused && _this._options && _this._options.length > 0) {
                    // clean up of previously active options
                    _this._options.toArray().forEach(function (option) {
                        option.setInactiveStyles();
                    });
                    // set the first one as active
                    _this._options.toArray()[0].setActiveStyles();
                    _this._internalActivateOption = true;
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
    /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     * @return {?}
     */
    TdChipsComponent.prototype._watchOutsideClick = /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._document) {
            this._outsideClickSubs = merge(fromEvent(this._document, 'click'), fromEvent(this._document, 'touchend')).pipe(debounceTime(this._touchendDebounce), filter(function (event) {
                /** @type {?} */
                var clickTarget = (/** @type {?} */ (event.target));
                setTimeout(function () {
                    _this._internalClick = false;
                });
                return _this.focused &&
                    (clickTarget !== _this._elementRef.nativeElement) &&
                    !_this._elementRef.nativeElement.contains(clickTarget) && !_this._internalClick;
            })).subscribe(function () {
                if (_this.focused) {
                    _this._autocompleteTrigger.closePanel();
                    _this.removeFocusedState();
                    _this.onTouched();
                    _this._changeDetectorRef.markForCheck();
                }
            });
        }
        return undefined;
    };
    TdChipsComponent.decorators = [
        { type: Component, args: [{
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdChipsComponent; }),
                            multi: true,
                        }],
                    selector: 'td-chips',
                    inputs: ['disabled', 'value'],
                    template: "<div class=\"td-chips-wrapper\"\n     [class.td-chips-stacked]=\"stacked\"\n     [class.td-chips-input-before-position]=\"inputPosition === 'before'\">\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip [class.td-chip-disabled]=\"disabled\"\n                   [class.td-chip-after-pad]=\"!canRemoveChip\"\n                   [disableRipple]=\"true\"\n                   [color]=\"color\"\n                   (keydown)=\"_chipKeydown($event, index)\"\n                   (blur)=\"_handleChipBlur($event, chip)\"\n                   (focus)=\"_handleChipFocus($event, chip)\">\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\">\n          </ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field floatLabel=\"never\"\n                  class=\"td-chips-form-field\"\n                  [style.width.px]=\"canAddChip ? null : 0\"\n                  [style.height.px]=\"canAddChip ? null : 0\"\n                  [color]=\"color\">\n    <input matInput\n            #input\n            [tabIndex]=\"-1\"\n            [matAutocomplete]=\"autocomplete\"\n            [formControl]=\"inputControl\"\n            [placeholder]=\"displayPlaceHolder\"\n            (keydown)=\"_inputKeydown($event)\"\n            (keyup.enter)=\"_handleAddChip()\"\n            (focus)=\"_handleFocus()\">\n  </mat-form-field>\n  <mat-autocomplete #autocomplete=\"matAutocomplete\"\n                   [displayWith]=\"_removeInputDisplay\"\n                   (optionSelected)=\"addChip($event.option.value)\">\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\">\n        </ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\"\n      [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\"\n        [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;max-width:100%;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:start;justify-content:start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-ms-flex-order:-20;order:-20;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host.ng-invalid .mat-form-field-underline .mat-form-field-ripple{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
                }] }
    ];
    /** @nocollapse */
    TdChipsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
    TdChipsComponent.propDecorators = {
        _nativeInput: [{ type: ViewChild, args: ['input',] }],
        _inputChild: [{ type: ViewChild, args: [MatInput,] }],
        _autocompleteTrigger: [{ type: ViewChild, args: [MatAutocompleteTrigger,] }],
        _chipsChildren: [{ type: ViewChildren, args: [MatChip,] }],
        _chipTemplate: [{ type: ContentChild, args: [TdChipDirective,] }],
        _autocompleteOptionTemplate: [{ type: ContentChild, args: [TdAutocompleteOptionDirective,] }],
        _options: [{ type: ViewChildren, args: [MatOption,] }],
        items: [{ type: Input, args: ['items',] }],
        stacked: [{ type: Input, args: ['stacked',] }],
        inputPosition: [{ type: Input, args: ['inputPosition',] }],
        requireMatch: [{ type: Input, args: ['requireMatch',] }],
        required: [{ type: Input, args: ['required',] }],
        chipAddition: [{ type: Input, args: ['chipAddition',] }],
        chipRemoval: [{ type: Input, args: ['chipRemoval',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        debounce: [{ type: Input, args: ['debounce',] }],
        color: [{ type: Input, args: ['color',] }],
        onAdd: [{ type: Output, args: ['add',] }],
        onRemove: [{ type: Output, args: ['remove',] }],
        onInputChange: [{ type: Output, args: ['inputChange',] }],
        onChipFocus: [{ type: Output, args: ['chipFocus',] }],
        onChipBlur: [{ type: Output, args: ['chipBlur',] }],
        tabIndex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        compareWith: [{ type: Input, args: ['compareWith',] }],
        focusListener: [{ type: HostListener, args: ['focus', ['$event'],] }],
        mousedownListener: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        clickListener: [{ type: HostListener, args: ['click', ['$event'],] }],
        keydownListener: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return TdChipsComponent;
}(_TdChipsMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CovalentChipsModule = /** @class */ (function () {
    function CovalentChipsModule() {
    }
    CovalentChipsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        MatInputModule,
                        MatIconModule,
                        MatChipsModule,
                        MatAutocompleteModule,
                    ],
                    declarations: [
                        TdChipsComponent,
                        TdChipDirective,
                        TdAutocompleteOptionDirective,
                    ],
                    exports: [
                        TdChipsComponent,
                        TdChipDirective,
                        TdAutocompleteOptionDirective,
                    ],
                },] }
    ];
    return CovalentChipsModule;
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

export { CovalentChipsModule, TdChipDirective, TdAutocompleteOptionDirective, TdChipsBase, _TdChipsMixinBase, TdChipsComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jaGlwcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvY2hpcHMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jaGlwcy9jaGlwcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBmb3J3YXJkUmVmLCBEb0NoZWNrLCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBPbkluaXQsIEhvc3RMaXN0ZW5lcixcbiAgRWxlbWVudFJlZiwgT3B0aW9uYWwsIEluamVjdCwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBVUF9BUlJPVywgRE9XTl9BUlJPVywgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgREVMRVRFLCBCQUNLU1BBQ0UsIEVOVEVSLCBTUEFDRSwgVEFCLCBIT01FIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE1hdENoaXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdE9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgdGltZXIsIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWNoaXBdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoaXBEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1hdXRvY29tcGxldGUtb3B0aW9uXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZENoaXBzQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRDaGlwc01peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IobWl4aW5EaXNhYmxlZChUZENoaXBzQmFzZSksIFtdKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoaXBzQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIHNlbGVjdG9yOiAndGQtY2hpcHMnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAndmFsdWUnXSxcbiAgc3R5bGVVcmxzOiBbJy4vY2hpcHMuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGlwcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoaXBzQ29tcG9uZW50IGV4dGVuZHMgX1RkQ2hpcHNNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIERvQ2hlY2ssIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJQ2FuRGlzYWJsZSB7XG5cbiAgcHJpdmF0ZSBfb3V0c2lkZUNsaWNrU3ViczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pbnB1dFZhbHVlQ2hhbmdlc1N1YnM6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfaXNNb3VzZWRvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9pdGVtczogYW55W107XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RhY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlTWF0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuICBwcml2YXRlIF9pbnB1dFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInO1xuICBwcml2YXRlIF9jaGlwQWRkaXRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9jaGlwUmVtb3ZhbDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdGFiSW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvdWNoZW5kRGVib3VuY2U6IG51bWJlciA9IDEwMDtcblxuICBfaW50ZXJuYWxDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBfaW50ZXJuYWxBY3RpdmF0ZU9wdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgX25hdGl2ZUlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE1hdElucHV0KSBfaW5wdXRDaGlsZDogTWF0SW5wdXQ7XG4gIEBWaWV3Q2hpbGQoTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcikgX2F1dG9jb21wbGV0ZVRyaWdnZXI6IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXI7XG4gIEBWaWV3Q2hpbGRyZW4oTWF0Q2hpcCkgX2NoaXBzQ2hpbGRyZW46IFF1ZXJ5TGlzdDxNYXRDaGlwPjtcblxuICBAQ29udGVudENoaWxkKFRkQ2hpcERpcmVjdGl2ZSkgX2NoaXBUZW1wbGF0ZTogVGRDaGlwRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlKSBfYXV0b2NvbXBsZXRlT3B0aW9uVGVtcGxhdGU6IFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlO1xuXG4gIEBWaWV3Q2hpbGRyZW4oTWF0T3B0aW9uKSBfb3B0aW9uczogUXVlcnlMaXN0PE1hdE9wdGlvbj47XG5cbiAgLyoqXG4gICAqIEZsYWcgdGhhdCBpcyB0cnVlIHdoZW4gYXV0b2NvbXBsZXRlIGlzIGZvY3VzZWQuXG4gICAqL1xuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtQ29udHJvbCBmb3IgdGhlIG1hdElucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgLyoqXG4gICAqIGl0ZW1zPzogYW55W11cbiAgICogUmVuZGVycyB0aGUgYG1hdC1hdXRvY29tcGxldGVgIHdpdGggdGhlIHByb3ZpZGVkIGxpc3QgdG8gZGlzcGxheSBhcyBvcHRpb25zLlxuICAgKi9cbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBpdGVtcyhpdGVtczogYW55W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGl0ZW1zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogc3RhY2tlZD86IGJvb2xlYW5cbiAgICogU2V0IHN0YWNrZWQgb3IgaG9yaXpvbnRhbCBjaGlwcyBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCdzdGFja2VkJylcbiAgc2V0IHN0YWNrZWQoc3RhY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YWNrZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc3RhY2tlZCk7XG4gIH1cbiAgZ2V0IHN0YWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrZWQ7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRQb3NpdGlvbj86ICdiZWZvcmUnIHwgJ2FmdGVyJ1xuICAgKiBTZXQgaW5wdXQgcG9zaXRpb24gYmVmb3JlIG9yIGFmdGVyIHRoZSBjaGlwcy5cbiAgICogRGVmYXVsdHMgdG8gJ2FmdGVyJy5cbiAgICovXG4gIEBJbnB1dCgnaW5wdXRQb3NpdGlvbicpXG4gIHNldCBpbnB1dFBvc2l0aW9uKGlucHV0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJykge1xuICAgIHRoaXMuX2lucHV0UG9zaXRpb24gPSBpbnB1dFBvc2l0aW9uO1xuICB9XG4gIGdldCBpbnB1dFBvc2l0aW9uKCk6ICdiZWZvcmUnIHwgJ2FmdGVyJyB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZU1hdGNoPzogYm9vbGVhblxuICAgKiBCbG9ja3MgY3VzdG9tIGlucHV0cyBhbmQgb25seSBhbGxvd3Mgc2VsZWN0aW9ucyBmcm9tIHRoZSBhdXRvY29tcGxldGUgbGlzdC5cbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZU1hdGNoJylcbiAgc2V0IHJlcXVpcmVNYXRjaChyZXF1aXJlTWF0Y2g6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlTWF0Y2ggPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxdWlyZU1hdGNoKTtcbiAgfVxuICBnZXQgcmVxdWlyZU1hdGNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZWQ/OiBib29sZWFuXG4gICAqIFZhbHVlIGlzIHNldCB0byB0cnVlIGlmIGF0IGxlYXN0IG9uZSBjaGlwIGlzIG5lZWRlZFxuICAgKiBEZWZhdWx0cyB0byBmYWxzZVxuICAgKi9cbiAgQElucHV0KCdyZXF1aXJlZCcpXG4gIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVkKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoaXBBZGRpdGlvbj86IGJvb2xlYW5cbiAgICogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gYWRkIGNoaXBzLiBXaGVuIHNldHRpbmcgZGlzYWJsZWQgYXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIG92ZXJyaWRlbi5cbiAgICogRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgnY2hpcEFkZGl0aW9uJylcbiAgc2V0IGNoaXBBZGRpdGlvbihjaGlwQWRkaXRpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGlwQWRkaXRpb24gPSBjaGlwQWRkaXRpb247XG4gICAgdGhpcy5fdG9nZ2xlSW5wdXQoKTtcbiAgfVxuICBnZXQgY2hpcEFkZGl0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlwQWRkaXRpb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcEFkZGl0aW9uIGlzIHNldCB0byAndHJ1ZSdcbiAgICogU3RhdGVzIGlmIGEgY2hpcCBjYW4gYmUgYWRkZWQgYW5kIGlmIHRoZSBpbnB1dCBpcyBhdmFpbGFibGVcbiAgICovXG4gIGdldCBjYW5BZGRDaGlwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoaXBBZGRpdGlvbiAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGlwUmVtb3ZhbD86IGJvb2xlYW5cbiAgICogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gcmVtb3ZlIGNoaXBzLiBJZiBpdCBkb2Vzbid0IGV4aXN0IGNoaXAgcmVtbW92YWwgZGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICogV2hlbiBzZXR0aW5nIGRpc2FibGVkIGFzIHRydWUsIHRoaXMgd2lsbCBiZSBvdmVycmlkZW4gdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ2NoaXBSZW1vdmFsJylcbiAgc2V0IGNoaXBSZW1vdmFsKGNoaXBSZW1vdmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hpcFJlbW92YWwgPSBjaGlwUmVtb3ZhbDtcbiAgfVxuICBnZXQgY2hpcFJlbW92YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBSZW1vdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBSZW1vdmFsIGlzIHNldCB0byAndHJ1ZSdcbiAgICogU3RhdGVzIGlmIGEgY2hpcCBjYW4gYmUgcmVtb3ZlZFxuICAgKi9cbiAgZ2V0IGNhblJlbW92ZUNoaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpcFJlbW92YWwgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZGlzcGxheSBwbGFjZWhvbGRlclxuICAgKi9cbiAgZ2V0IGRpc3BsYXlQbGFjZUhvbGRlcigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiAodGhpcy5fcmVxdWlyZWQpID8gYCR7dGhpcy5wbGFjZWhvbGRlcn0gKmAgOiAgdGhpcy5wbGFjZWhvbGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBkZWJvdW5jZT86IG51bWJlclxuICAgKiBEZWJvdW5jZSB0aW1lb3V0IGJldHdlZW4ga2V5cHJlc3Nlcy4gRGVmYXVsdHMgdG8gMjAwLlxuICAgKi9cbiAgQElucHV0KCdkZWJvdW5jZScpIGRlYm91bmNlOiBudW1iZXIgPSAyMDA7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGUgY29sb3IgZm9yIHRoZSBpbnB1dCBhbmQgZm9jdXMvc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGNoaXBzLlxuICAgKiBEZWZhdWx0cyB0byAncHJpbWFyeSdcbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCk6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogYWRkPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGFkZGVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnYWRkJykgb25BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIHJlbW92ZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyByZW1vdmVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgncmVtb3ZlJykgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIGlucHV0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHZhbHVlIGluIHRoZSBhdXRvY29tcGxldGUgaW5wdXQgY2hhbmdlcy5cbiAgICogU2VuZHMgc3RyaW5nIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnaW5wdXRDaGFuZ2UnKSBvbklucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjaGlwRm9jdXM/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgZm9jdXNlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2NoaXBGb2N1cycpIG9uQ2hpcEZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBibHVyPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGJsdXJyZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCdjaGlwQmx1cicpIG9uQ2hpcEJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEhvc3RiaW5kaW5nIHRvIHNldCB0aGUgYTExeSBvZiB0aGUgVGRDaGlwc0NvbXBvbmVudCBkZXBlbmRpbmcgb24gaXRzIHN0YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogdGhpcy5fdGFiSW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21wYXJlV2l0aD8gZnVuY3Rpb25cbiAgICogRnVuY3Rpb24gdXNlZCB0byBjaGVjayB3aGV0aGVyIGEgY2hpcCB2YWx1ZSBhbHJlYWR5IGV4aXN0cy5cbiAgICogRGVmYXVsdHMgdG8gc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb24gPT09XG4gICAqL1xuICBASW5wdXQoJ2NvbXBhcmVXaXRoJykgY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbzEgPT09IG8yO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gaG9zdCBmb2N1cyBldmVudCB0byBhY3Qgb24gaXRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSlcbiAgZm9jdXNMaXN0ZW5lcihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIC8vIHNob3VsZCBvbmx5IGZvY3VzIGlmIGl0cyBub3QgdmlhIG1vdXNlZG93biB0byBwcmV2ZW50IGNsYXNoaW5nIHdpdGggYXV0b2NvbXBsZXRlXG4gICAgaWYgKCF0aGlzLl9pc01vdXNlZG93bikge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gaG9zdCBtb3VzZWRvd24gZXZlbnQgdG8gYWN0IG9uIGl0XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBtb3VzZWRvd25MaXN0ZW5lcihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgICAvLyBzZXRzIGEgZmxhZyB0byBrbm93IGlmIHRoZXJlIHdhcyBhIG1vdXNlZG93biBhbmQgdGhlbiBpdCByZXR1cm5zIGl0IGJhY2sgdG8gZmFsc2VcbiAgICB0aGlzLl9pc01vdXNlZG93biA9IHRydWU7XG4gICAgdGltZXIoKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2lzTW91c2Vkb3duID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSWYgY2xpY2tpbmcgb24gOmhvc3Qgb3IgYHRkLWNoaXBzLXdyYXBwZXJgLCB0aGVuIHdlIHN0b3AgdGhlIGNsaWNrIHByb3BhZ2F0aW9uIHNvIHRoZSBhdXRvY29tcGxldGVcbiAgICogZG9lc250IGNsb3NlIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrTGlzdGVuZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoY2xpY2tUYXJnZXQgPT09IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCB8fFxuICAgICAgICBjbGlja1RhcmdldC5jbGFzc05hbWUuaW5kZXhPZigndGQtY2hpcHMtd3JhcHBlcicpID4gLTEpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGtleWRvd24gZXZlbnQgdG8gYWN0IG9uIGl0IGRlcGVuZGluZyBvbiB0aGUga2V5cHJlc3NcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBrZXlkb3duTGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICAvLyBpZiB0YWJpbmcgb3V0LCB0aGVuIHVuZm9jdXMgdGhlIGNvbXBvbmVudFxuICAgICAgICB0aW1lcigpLnRvUHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVNDQVBFOlxuICAgICAgICBpZiAodGhpcy5faW5wdXRDaGlsZC5mb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy5fbmF0aXZlSW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dFZhbHVlQ2hhbmdlc1N1YnMgPSB0aGlzLmlucHV0Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSxcbiAgICApLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5vbklucHV0Q2hhbmdlLmVtaXQodmFsdWUgPyB2YWx1ZSA6ICcnKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl93YXRjaE91dHNpZGVDbGljaygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIC8vIFRocm93IG9uQ2hhbmdlIGV2ZW50IG9ubHkgaWYgYXJyYXkgY2hhbmdlcyBzaXplLlxuICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoICE9PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2xlbmd0aCA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2lucHV0VmFsdWVDaGFuZ2VzU3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgX3NldEludGVybmFsQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5faW50ZXJuYWxDbGljayA9IHRydWU7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdG9nZ2xlSW5wdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgY2hpcCBmcm9tIHRoZSBhdXRvY29tcGxldGUuXG4gICAqIEl0IGNoZWNrIGlmIFtyZXF1aXJlTWF0Y2hdIGlzIGVuYWJsZWQsIGFuZCB0cmllcyB0byBhZGQgdGhlIGZpcnN0IGFjdGl2ZSBvcHRpb25cbiAgICogZWxzZSBpZiBqdXN0IGFkZHMgdGhlIHZhbHVlIHRoYXRzIG9uIHRoZSBpbnB1dFxuICAgKiByZXR1cm5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCAnZmFsc2UnIGlmIGl0IGZhaWxzLlxuICAgKi9cbiAgX2hhbmRsZUFkZENoaXAoKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zOiBNYXRPcHRpb25bXSA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZpbHRlcigob3B0aW9uOiBNYXRPcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5hY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzZWxlY3Rpb24sIHRoZW4gdXNlIHRoYXRcbiAgICAgIC8vIGVsc2UgdXNlIHRoZSBpbnB1dCB2YWx1ZSBhcyBjaGlwXG4gICAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5faW5wdXRDaGlsZC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWRkQ2hpcCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXRzIGV4ZWN0dXRlZCB3aGVuIHRyeWluZyB0byBhZGQgYSB2YWx1ZSBhcyBjaGlwXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICBhZGRDaGlwKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAvKipcbiAgICAgKiBhZGQgYSBkZWJvdW5jZSBtcyBkZWxheSB3aGVuIHJlb3BlbmluZyB0aGUgYXV0b2NvbXBsZXRlIHRvIGdpdmUgaXQgdGltZVxuICAgICAqIHRvIHJlcmVuZGVyIHRoZSBuZXh0IGxpc3QgYW5kIGF0IHRoZSBjb3JyZWN0IHNwb3RcbiAgICAgKi9cblxuICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgdGltZXIodGhpcy5kZWJvdW5jZSkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgICAgdGhpcy5fc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTtcbiAgICAgIHRoaXMuX29wZW5BdXRvY29tcGxldGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVsXG4gICAgaWYgKHRoaXMudmFsdWUuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbSwgdmFsdWUpKSA+IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLm9uQWRkLmVtaXQodmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0cnlpbmcgdG8gcmVtb3ZlIGEgY2hpcC5cbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIHJlbW92ZUNoaXAoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCByZW1vdmVkVmFsdWVzOiBhbnlbXSA9IHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAocmVtb3ZlZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgZGVsZXRpbmcgbGFzdCBzaW5nbGUgY2hpcCwgdG8gZm9jdXMgaW5wdXQgYWZ0ZXJ3YXJkc1xuICAgICAqIEVsc2UgY2hlY2sgaWYgaXRzIG5vdCB0aGUgbGFzdCBjaGlwIG9mIHRoZSBsaXN0IHRvIGZvY3VzIHRoZSBuZXh0IG9uZS5cbiAgICAgKi9cbiAgICBpZiAoaW5kZXggPT09ICh0aGlzLl90b3RhbENoaXBzIC0gMSkgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSkge1xuICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4ICsgMSk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IDApIHtcbiAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHRoaXMub25SZW1vdmUuZW1pdChyZW1vdmVkVmFsdWVzWzBdKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGJsdXIgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hpcEJsdXIuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvZiBjaGlwIGFuZCBzZW5kcyBvdXQgZXZlbnRcbiAgICovXG4gIF9oYW5kbGVDaGlwRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGlwRm9jdXMuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc2V0Rm9jdXNlZFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZm9jdXMgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlRm9jdXNlZFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl90YWJJbmRleCA9IDA7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvZ3JhbW1hdGljYWxseSBmb2N1cyB0aGUgaW5wdXQgb3IgZmlyc3QgY2hpcC4gU2luY2UgaXRzIHRoZSBjb21wb25lbnQgZW50cnkgcG9pbnRcbiAgICogZGVwZW5kaW5nIGlmIGEgdXNlciBjYW4gYWRkIG9yIHJlbW92ZSBjaGlwc1xuICAgKi9cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCkge1xuICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBpbnB1dCBrZXkgcHJlc3Nlcy5cbiAgICovXG4gIF9pbnB1dEtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW5jZSB0aGUgZmlyc3QgaXRlbSBpcyBoaWdobGlnaHRlZCBvbiBbcmVxdWlyZU1hdGNoXSwgd2UgbmVlZCB0byBpbmFjdGl2YXRlIGl0XG4gICAgICAgICAqIHdoZW4gcHJlc3NpbmcgdGhlIHVwIGtleVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5fb3B0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uYWN0aXZlICYmIHRoaXMuX2ludGVybmFsQWN0aXZhdGVPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIGlucHV0IGlzIGVtcHR5IHdoZW4gcHJlc3NpbmcgbGVmdCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBsYXN0IGNoaXAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dENoaWxkLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNMYXN0Q2hpcCgpO1xuICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIC8qKiBDaGVjayB0byBzZWUgaWYgaW5wdXQgaXMgZW1wdHkgd2hlbiBwcmVzc2luZyByaWdodCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBmaXJzdCBjaGlwICovXG4gICAgICAgIGlmICghdGhpcy5faW5wdXRDaGlsZC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzZXMgcmVsZXZhbnQgY2hpcCBrZXkgcHJlc3Nlcy5cbiAgICovXG4gIF9jaGlwS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBERUxFVEU6XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiB3ZSBjYW4gZGVsZXRlIGEgY2hpcCAqL1xuICAgICAgICBpZiAodGhpcy5jYW5SZW1vdmVDaGlwKSB7XG4gICAgICAgICB0aGlzLnJlbW92ZUNoaXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiBsZWZ0L2Rvd24gYXJyb3cgd2FzIHByZXNzZWQgd2hpbGUgZm9jdXNpbmcgdGhlIGZpcnN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgbGVmdFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiByaWdodC91cCBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgbGFzdCBjaGlwIHRvIGZvY3VzIGlucHV0IG5leHRcbiAgICAgICAgICogQWxzbyBjaGVjayBpZiBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5fdG90YWxDaGlwcyAtIDEpKSB7XG4gICAgICAgICAgLy8gb25seSB0cnkgdG8gdGFyZ2V0IGlucHV0IGlmIHByZXNzaW5nIHJpZ2h0XG4gICAgICAgICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCAmJiBldmVudC5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8ICh0aGlzLl90b3RhbENoaXBzIC0gMSkpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBmcm9tIGRpc3BsYXkgdGhlIHZhbHVlIGFkZGVkIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBzaW5jZSBpdCBnb2VzIGRpcmVjdGx5IGFzIGNoaXAuXG4gICAqL1xuICBfcmVtb3ZlSW5wdXREaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBvcGVuIHRoZSBhdXRvY29tcGxldGUgbWFudWFsbHkgaWYgaXRzIG5vdCBhbHJlYWR5IG9wZW5lZFxuICAgKi9cbiAgX29wZW5BdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5vcGVuUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBfY2xvc2VBdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgb2YgY2hpcHNcbiAgICovXG4gIGdldCBfdG90YWxDaGlwcygpOiBudW1iZXIge1xuICAgIGxldCBjaGlwczogTWF0Q2hpcFtdID0gdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KCk7XG4gICAgcmV0dXJuIGNoaXBzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZm9jdXMgYSBkZXNpcmVkIGNoaXAgYnkgaW5kZXhcbiAgICovXG4gIHByaXZhdGUgX2ZvY3VzQ2hpcChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgLyoqIGNoZWNrIHRvIHNlZSBpZiBpbmRleCBleGlzdHMgaW4gdGhlIGFycmF5IGJlZm9yZSBmb2N1c2luZyAqL1xuICAgIGlmIChpbmRleCA+IC0xICYmIHRoaXMuX3RvdGFsQ2hpcHMgPiBpbmRleCkge1xuICAgICAgdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KClbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBmaXJzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzRmlyc3RDaGlwKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzQ2hpcCgwKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgdG8gZm9jdXMgbGFzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzTGFzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdG9nZ2xlIHRoZSBkaXNhYmxlIHN0YXRlIG9mIGlucHV0XG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBBZGRpdGlvbiBpcyBzZXQgdG8gJ3RydWUnXG4gICAqL1xuICBwcml2YXRlIF90b2dnbGVJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dENvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZpcnN0IG9wdGlvbiBhcyBhY3RpdmUgdG8gbGV0IHRoZSB1c2VyIGtub3cgd2hpY2ggb25lIHdpbGwgYmUgYWRkZWQgd2hlbiBwcmVzc2luZyBlbnRlclxuICAgKiBPbmx5IGlmIFtyZXF1aXJlTWF0Y2hdIGhhcyBiZWVuIHNldFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIGhlcmUgdG8gd2FpdCB1bnRpbCB0aGUgYXV0b2NvbXBsZXRlIGhhcyBiZWVuIG9wZW5lZCAoZW5kIG9mIHF1ZXVlKVxuICAgICAgdGltZXIoKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGNsZWFuIHVwIG9mIHByZXZpb3VzbHkgYWN0aXZlIG9wdGlvbnNcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKS5mb3JFYWNoKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBvbmUgYXMgYWN0aXZlXG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlIHRoZSBmb2N1c1xuICAgKiBUaGUgYXV0b2NvbXBsZXRlIHBhbmVsIGlzIGNvbnNpZGVyZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgc28gd2VcbiAgICogbmVlZCB0byB1c2UgYSBmbGFnIHRvIGZpbmQgb3V0IHdoZW4gaXRzIGNsaWNrZWQuXG4gICAqL1xuICBwcml2YXRlIF93YXRjaE91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMgPSBtZXJnZShcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAnY2xpY2snKSxcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAndG91Y2hlbmQnKSxcbiAgICAgICkucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuX3RvdWNoZW5kRGVib3VuY2UpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNlZCAmJlxuICAgICAgICAgICAgICAgICAgKGNsaWNrVGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpICYmXG4gICAgICAgICAgICAgICAgICAhdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJiAhdGhpcy5faW50ZXJuYWxDbGljaztcbiAgICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5jbG9zZVBhbmVsKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuXG5pbXBvcnQgeyBUZENoaXBzQ29tcG9uZW50LCBUZENoaXBEaXJlY3RpdmUsIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlwcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkQ2hpcHNDb21wb25lbnQsXG4gICAgVGRDaGlwRGlyZWN0aXZlLFxuICAgIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRDaGlwc0NvbXBvbmVudCxcbiAgICBUZENoaXBEaXJlY3RpdmUsXG4gICAgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50Q2hpcHNNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QnFDQSxtQ0FBdUI7SUFDMUQseUJBQVksV0FBNkIsRUFBRSxnQkFBa0M7ZUFDM0Usa0JBQU0sV0FBVyxFQUFFLGdCQUFnQixDQUFDO0tBQ3JDOztnQkFORixTQUFTLFNBQUM7b0JB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