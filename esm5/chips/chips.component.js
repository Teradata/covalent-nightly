/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, Input, Output, forwardRef, ViewChild, ViewChildren, QueryList, HostListener, ElementRef, Optional, Inject, Directive, TemplateRef, ViewContainerRef, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Renderer2, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UP_ARROW, DOWN_ARROW, ESCAPE, LEFT_ARROW, RIGHT_ARROW, DELETE, BACKSPACE, TAB, } from '@angular/cdk/keycodes';
import { MatChip } from '@angular/material/chips';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Subscription, timer, merge, fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
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
export { TdChipDirective };
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
export { TdAutocompleteOptionDirective };
var TdChipsBase = /** @class */ (function () {
    function TdChipsBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdChipsBase;
}());
export { TdChipsBase };
if (false) {
    /** @type {?} */
    TdChipsBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdChipsMixinBase = mixinControlValueAccessor(mixinDisabled(TdChipsBase), []);
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
        _this.add = new EventEmitter();
        /**
         * remove?: function
         * Method to be executed when a chip is removed.
         * Sends chip value as event.
         */
        _this.remove = new EventEmitter();
        /**
         * inputChange?: function
         * Method to be executed when the value in the autocomplete input changes.
         * Sends string value as event.
         */
        _this.inputChange = new EventEmitter();
        /**
         * chipFocus?: function
         * Method to be executed when a chip is focused.
         * Sends chip value as event.
         */
        _this.chipFocus = new EventEmitter();
        /**
         * blur?: function
         * Method to be executed when a chip is blurred.
         * Sends chip value as event.
         */
        _this.chipBlur = new EventEmitter();
        /**
         * compareWith? function
         * Function used to check whether a chip value already exists.
         * Defaults to strict equality comparison ===
         */
        _this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) {
            return o1 === o2;
        });
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
            return this._required ? this.placeholder + " *" : this.placeholder;
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
        timer()
            .toPromise()
            .then((/**
         * @return {?}
         */
        function () {
            _this._isMousedown = false;
        }));
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
        if (clickTarget === this._elementRef.nativeElement || clickTarget.className.indexOf('td-chips-wrapper') > -1) {
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
                timer()
                    .toPromise()
                    .then((/**
                 * @return {?}
                 */
                function () {
                    _this.removeFocusedState();
                }));
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
        this._inputValueChangesSubs = this.inputControl.valueChanges
            .pipe(debounceTime(this.debounce))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.inputChange.emit(value ? value : '');
        }));
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
            var selectedOptions = this._options.toArray().filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return option.active;
            }));
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
        timer(this.debounce)
            .toPromise()
            .then((/**
         * @return {?}
         */
        function () {
            _this.setFocusedState();
            _this._setFirstOptionActive();
            _this._openAutocomplete();
        }));
        this.inputControl.setValue('');
        // check if value is already part of the model
        if (this.value.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.compareWith(item, value); })) > -1) {
            return false;
        }
        this.value.push(value);
        this.add.emit(value);
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
        if (index === this._totalChips - 1 && index === 0) {
            this._inputChild.focus();
        }
        else if (index < this._totalChips - 1) {
            this._focusChip(index + 1);
        }
        else if (index > 0) {
            this._focusChip(index - 1);
        }
        this.remove.emit(removedValues[0]);
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
        this.chipBlur.emit(value);
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
        this.chipFocus.emit(value);
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
                if (index === this._totalChips - 1) {
                    // only try to target input if pressing right
                    if (this.canAddChip && event.keyCode === RIGHT_ARROW) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusFirstChip();
                    }
                }
                else if (index < this._totalChips - 1) {
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
     * @private
     * @param {?} index
     * @return {?}
     */
    TdChipsComponent.prototype._focusChip = /**
     * Method to focus a desired chip by index
     * @private
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
     * @private
     * @return {?}
     */
    TdChipsComponent.prototype._focusFirstChip = /**
     * Method to focus first chip
     * @private
     * @return {?}
     */
    function () {
        this._focusChip(0);
    };
    /** Method to focus last chip */
    /**
     * Method to focus last chip
     * @private
     * @return {?}
     */
    TdChipsComponent.prototype._focusLastChip = /**
     * Method to focus last chip
     * @private
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
     * @private
     * @return {?}
     */
    TdChipsComponent.prototype._toggleInput = /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     * @private
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
     * @private
     * @return {?}
     */
    TdChipsComponent.prototype._setFirstOptionActive = /**
     * Sets first option as active to let the user know which one will be added when pressing enter
     * Only if [requireMatch] has been set
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.requireMatch) {
            // need to use a timer here to wait until the autocomplete has been opened (end of queue)
            timer()
                .toPromise()
                .then((/**
             * @return {?}
             */
            function () {
                if (_this.focused && _this._options && _this._options.length > 0) {
                    // clean up of previously active options
                    _this._options.toArray().forEach((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) {
                        option.setInactiveStyles();
                    }));
                    // set the first one as active
                    _this._options.toArray()[0].setActiveStyles();
                    _this._internalActivateOption = true;
                    _this._changeDetectorRef.markForCheck();
                }
            }));
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
     * @private
     * @return {?}
     */
    TdChipsComponent.prototype._watchOutsideClick = /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._document) {
            this._outsideClickSubs = merge(fromEvent(this._document, 'click'), fromEvent(this._document, 'touchend'))
                .pipe(debounceTime(this._touchendDebounce), filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var clickTarget = (/** @type {?} */ (event.target));
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._internalClick = false;
                }));
                return (_this.focused &&
                    clickTarget !== _this._elementRef.nativeElement &&
                    !_this._elementRef.nativeElement.contains(clickTarget) &&
                    !_this._internalClick);
            })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.focused) {
                    _this._autocompleteTrigger.closePanel();
                    _this.removeFocusedState();
                    _this.onTouched();
                    _this._changeDetectorRef.markForCheck();
                }
            }));
        }
        return undefined;
    };
    TdChipsComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdChipsComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-chips',
                    inputs: ['disabled', 'value'],
                    template: "<div\n  class=\"td-chips-wrapper\"\n  [class.td-chips-stacked]=\"stacked\"\n  [class.td-chips-input-before-position]=\"inputPosition === 'before'\"\n>\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip\n      [class.td-chip-disabled]=\"disabled\"\n      [class.td-chip-after-pad]=\"!canRemoveChip\"\n      [disableRipple]=\"true\"\n      [color]=\"color\"\n      (keydown)=\"_chipKeydown($event, index)\"\n      (blur)=\"_handleChipBlur($event, chip)\"\n      (focus)=\"_handleChipFocus($event, chip)\"\n    >\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{ chip }}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\"\n          ></ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field\n    floatLabel=\"never\"\n    class=\"td-chips-form-field\"\n    [style.width.px]=\"canAddChip ? null : 0\"\n    [style.height.px]=\"canAddChip ? null : 0\"\n    [color]=\"color\"\n  >\n    <input\n      matInput\n      #input\n      [tabIndex]=\"-1\"\n      [matAutocomplete]=\"autocomplete\"\n      [formControl]=\"inputControl\"\n      [placeholder]=\"displayPlaceHolder\"\n      (keydown)=\"_inputKeydown($event)\"\n      (keyup.enter)=\"_handleAddChip()\"\n      (focus)=\"_handleFocus()\"\n    />\n  </mat-form-field>\n  <mat-autocomplete\n    #autocomplete=\"matAutocomplete\"\n    [displayWith]=\"_removeInputDisplay\"\n    (optionSelected)=\"addChip($event.option.value)\"\n  >\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{ item }}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\"\n        ></ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\" [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\" [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;max-width:100%;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:start;justify-content:flex-start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-ms-flex-order:-20;order:-20;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-ms-transform-origin:50%;transform-origin:50%;-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2)}:host.ng-invalid .mat-form-field-underline .mat-form-field-ripple{visibility:visible;opacity:1;-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2)}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
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
        _nativeInput: [{ type: ViewChild, args: ['input', { static: true },] }],
        _inputChild: [{ type: ViewChild, args: [MatInput, { static: true },] }],
        _autocompleteTrigger: [{ type: ViewChild, args: [MatAutocompleteTrigger, { static: true },] }],
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
        placeholder: [{ type: Input }],
        debounce: [{ type: Input }],
        color: [{ type: Input, args: ['color',] }],
        add: [{ type: Output }],
        remove: [{ type: Output }],
        inputChange: [{ type: Output }],
        chipFocus: [{ type: Output }],
        chipBlur: [{ type: Output }],
        tabIndex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        compareWith: [{ type: Input }],
        focusListener: [{ type: HostListener, args: ['focus', ['$event'],] }],
        mousedownListener: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        clickListener: [{ type: HostListener, args: ['click', ['$event'],] }],
        keydownListener: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return TdChipsComponent;
}(_TdChipsMixinBase));
export { TdChipsComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._outsideClickSubs;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._inputValueChangesSubs;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._isMousedown;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._items;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._length;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._stacked;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._requireMatch;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._color;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._inputPosition;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._chipAddition;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._chipRemoval;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._focused;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._required;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._tabIndex;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._touchendDebounce;
    /** @type {?} */
    TdChipsComponent.prototype._internalClick;
    /** @type {?} */
    TdChipsComponent.prototype._internalActivateOption;
    /** @type {?} */
    TdChipsComponent.prototype._nativeInput;
    /** @type {?} */
    TdChipsComponent.prototype._inputChild;
    /** @type {?} */
    TdChipsComponent.prototype._autocompleteTrigger;
    /** @type {?} */
    TdChipsComponent.prototype._chipsChildren;
    /** @type {?} */
    TdChipsComponent.prototype._chipTemplate;
    /** @type {?} */
    TdChipsComponent.prototype._autocompleteOptionTemplate;
    /** @type {?} */
    TdChipsComponent.prototype._options;
    /**
     * FormControl for the matInput element.
     * @type {?}
     */
    TdChipsComponent.prototype.inputControl;
    /**
     * placeholder?: string
     * Placeholder for the autocomplete input.
     * @type {?}
     */
    TdChipsComponent.prototype.placeholder;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 200.
     * @type {?}
     */
    TdChipsComponent.prototype.debounce;
    /**
     * add?: function
     * Method to be executed when a chip is added.
     * Sends chip value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.add;
    /**
     * remove?: function
     * Method to be executed when a chip is removed.
     * Sends chip value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.remove;
    /**
     * inputChange?: function
     * Method to be executed when the value in the autocomplete input changes.
     * Sends string value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.inputChange;
    /**
     * chipFocus?: function
     * Method to be executed when a chip is focused.
     * Sends chip value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.chipFocus;
    /**
     * blur?: function
     * Method to be executed when a chip is blurred.
     * Sends chip value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.chipBlur;
    /**
     * compareWith? function
     * Function used to check whether a chip value already exists.
     * Defaults to strict equality comparison ===
     * @type {?}
     */
    TdChipsComponent.prototype.compareWith;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdChipsComponent.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvIiwic291cmNlcyI6WyJjaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUVWLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUdqQixXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLFNBQVMsRUFHVCxHQUFHLEdBRUosTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RSxPQUFP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QU9MLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBWWhDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBZXBDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0NBYWhDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBb2JyQyx1QkFBQztDQUFBLEFBNXVCRCxDQWVVLGlCQUFpQixHQTZ0QjFCO1NBOXRCWSxnQkFBZ0I7Ozs7OztJQUczQiw2Q0FBNkQ7Ozs7O0lBQzdELGtEQUFrRTs7Ozs7SUFDbEUsd0NBQXNDOzs7OztJQUV0QyxrQ0FBc0I7Ozs7O0lBQ3RCLG1DQUE0Qjs7Ozs7SUFDNUIsb0NBQWtDOzs7OztJQUNsQyx5Q0FBdUM7Ozs7O0lBQ3ZDLGtDQUEwRDs7Ozs7SUFDMUQsMENBQXFEOzs7OztJQUNyRCx5Q0FBc0M7Ozs7O0lBQ3RDLHdDQUFxQzs7Ozs7SUFDckMsb0NBQWtDOzs7OztJQUNsQyxxQ0FBbUM7Ozs7O0lBQ25DLHFDQUE4Qjs7Ozs7SUFDOUIsNkNBQXdDOztJQUV4QywwQ0FBZ0M7O0lBQ2hDLG1EQUF5Qzs7SUFFekMsd0NBQStEOztJQUMvRCx1Q0FBNkQ7O0lBQzdELGdEQUFrRzs7SUFDbEcsMENBQTBEOztJQUUxRCx5Q0FBOEQ7O0lBQzlELHVEQUMyRDs7SUFFM0Qsb0NBQXdEOzs7OztJQVl4RCx3Q0FBOEM7Ozs7OztJQTRIOUMsdUNBQTZCOzs7Ozs7SUFNN0Isb0NBQWdDOzs7Ozs7O0lBd0JoQywrQkFBMkQ7Ozs7Ozs7SUFPM0Qsa0NBQThEOzs7Ozs7O0lBTzlELHVDQUF5RTs7Ozs7OztJQU96RSxxQ0FBaUU7Ozs7Ozs7SUFPakUsb0NBQWdFOzs7Ozs7O0lBeUJoRSx1Q0FFRTs7Ozs7SUFoQkEsdUNBQStCOzs7OztJQUMvQixxQ0FBNEI7Ozs7O0lBQzVCLHFDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgZm9yd2FyZFJlZixcbiAgRG9DaGVjayxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWYsXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIFVQX0FSUk9XLFxuICBET1dOX0FSUk9XLFxuICBFU0NBUEUsXG4gIExFRlRfQVJST1csXG4gIFJJR0hUX0FSUk9XLFxuICBERUxFVEUsXG4gIEJBQ0tTUEFDRSxcbiAgRU5URVIsXG4gIFNQQUNFLFxuICBUQUIsXG4gIEhPTUUsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBNYXRDaGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0SW5wdXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRPcHRpb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIHRpbWVyLCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1jaGlwXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGlwRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtYXV0b2NvbXBsZXRlLW9wdGlvbl1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGRDaGlwc0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkQ2hpcHNNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRDaGlwc0Jhc2UpLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hpcHNDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0ZC1jaGlwcycsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwcy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGlwc0NvbXBvbmVudFxuICBleHRlbmRzIF9UZENoaXBzTWl4aW5CYXNlXG4gIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBEb0NoZWNrLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSUNhbkRpc2FibGUge1xuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tTdWJzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2lucHV0VmFsdWVDaGFuZ2VzU3ViczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc01vdXNlZG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXTtcbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zdGFja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVNYXRjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG4gIHByaXZhdGUgX2lucHV0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG4gIHByaXZhdGUgX2NoaXBBZGRpdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2NoaXBSZW1vdmFsOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90YWJJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdG91Y2hlbmREZWJvdW5jZTogbnVtYmVyID0gMTAwO1xuXG4gIF9pbnRlcm5hbENsaWNrOiBib29sZWFuID0gZmFsc2U7XG4gIF9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfbmF0aXZlSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIF9pbnB1dENoaWxkOiBNYXRJbnB1dDtcbiAgQFZpZXdDaGlsZChNYXRBdXRvY29tcGxldGVUcmlnZ2VyLCB7IHN0YXRpYzogdHJ1ZSB9KSBfYXV0b2NvbXBsZXRlVHJpZ2dlcjogTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcjtcbiAgQFZpZXdDaGlsZHJlbihNYXRDaGlwKSBfY2hpcHNDaGlsZHJlbjogUXVlcnlMaXN0PE1hdENoaXA+O1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGlwRGlyZWN0aXZlKSBfY2hpcFRlbXBsYXRlOiBUZENoaXBEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUpXG4gIF9hdXRvY29tcGxldGVPcHRpb25UZW1wbGF0ZTogVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmU7XG5cbiAgQFZpZXdDaGlsZHJlbihNYXRPcHRpb24pIF9vcHRpb25zOiBRdWVyeUxpc3Q8TWF0T3B0aW9uPjtcblxuICAvKipcbiAgICogRmxhZyB0aGF0IGlzIHRydWUgd2hlbiBhdXRvY29tcGxldGUgaXMgZm9jdXNlZC5cbiAgICovXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1Db250cm9sIGZvciB0aGUgbWF0SW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGlucHV0Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICAvKipcbiAgICogaXRlbXM/OiBhbnlbXVxuICAgKiBSZW5kZXJzIHRoZSBgbWF0LWF1dG9jb21wbGV0ZWAgd2l0aCB0aGUgcHJvdmlkZWQgbGlzdCB0byBkaXNwbGF5IGFzIG9wdGlvbnMuXG4gICAqL1xuICBASW5wdXQoJ2l0ZW1zJylcbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgaXRlbXMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGFja2VkPzogYm9vbGVhblxuICAgKiBTZXQgc3RhY2tlZCBvciBob3Jpem9udGFsIGNoaXBzIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ3N0YWNrZWQnKVxuICBzZXQgc3RhY2tlZChzdGFja2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhY2tlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzdGFja2VkKTtcbiAgfVxuICBnZXQgc3RhY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnB1dFBvc2l0aW9uPzogJ2JlZm9yZScgfCAnYWZ0ZXInXG4gICAqIFNldCBpbnB1dCBwb3NpdGlvbiBiZWZvcmUgb3IgYWZ0ZXIgdGhlIGNoaXBzLlxuICAgKiBEZWZhdWx0cyB0byAnYWZ0ZXInLlxuICAgKi9cbiAgQElucHV0KCdpbnB1dFBvc2l0aW9uJylcbiAgc2V0IGlucHV0UG9zaXRpb24oaW5wdXRQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInKSB7XG4gICAgdGhpcy5faW5wdXRQb3NpdGlvbiA9IGlucHV0UG9zaXRpb247XG4gIH1cbiAgZ2V0IGlucHV0UG9zaXRpb24oKTogJ2JlZm9yZScgfCAnYWZ0ZXInIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRQb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1aXJlTWF0Y2g/OiBib29sZWFuXG4gICAqIEJsb2NrcyBjdXN0b20gaW5wdXRzIGFuZCBvbmx5IGFsbG93cyBzZWxlY3Rpb25zIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBsaXN0LlxuICAgKi9cbiAgQElucHV0KCdyZXF1aXJlTWF0Y2gnKVxuICBzZXQgcmVxdWlyZU1hdGNoKHJlcXVpcmVNYXRjaDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVNYXRjaCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlTWF0Y2gpO1xuICB9XG4gIGdldCByZXF1aXJlTWF0Y2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVNYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1aXJlZD86IGJvb2xlYW5cbiAgICogVmFsdWUgaXMgc2V0IHRvIHRydWUgaWYgYXQgbGVhc3Qgb25lIGNoaXAgaXMgbmVlZGVkXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlXG4gICAqL1xuICBASW5wdXQoJ3JlcXVpcmVkJylcbiAgc2V0IHJlcXVpcmVkKHJlcXVpcmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxdWlyZWQpO1xuICB9XG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cblxuICAvKipcbiAgICogY2hpcEFkZGl0aW9uPzogYm9vbGVhblxuICAgKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBhZGQgY2hpcHMuIFdoZW4gc2V0dGluZyBkaXNhYmxlZCBhcyB0cnVlLCB0aGlzIHdpbGwgYmUgb3ZlcnJpZGVuLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCdjaGlwQWRkaXRpb24nKVxuICBzZXQgY2hpcEFkZGl0aW9uKGNoaXBBZGRpdGlvbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoaXBBZGRpdGlvbiA9IGNoaXBBZGRpdGlvbjtcbiAgICB0aGlzLl90b2dnbGVJbnB1dCgpO1xuICB9XG4gIGdldCBjaGlwQWRkaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBBZGRpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgbm90IGluIGRpc2FibGVkIHN0YXRlIGFuZCBpZiBjaGlwQWRkaXRpb24gaXMgc2V0IHRvICd0cnVlJ1xuICAgKiBTdGF0ZXMgaWYgYSBjaGlwIGNhbiBiZSBhZGRlZCBhbmQgaWYgdGhlIGlucHV0IGlzIGF2YWlsYWJsZVxuICAgKi9cbiAgZ2V0IGNhbkFkZENoaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpcEFkZGl0aW9uICYmICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoaXBSZW1vdmFsPzogYm9vbGVhblxuICAgKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byByZW1vdmUgY2hpcHMuIElmIGl0IGRvZXNuJ3QgZXhpc3QgY2hpcCByZW1tb3ZhbCBkZWZhdWx0cyB0byB0cnVlLlxuICAgKiBXaGVuIHNldHRpbmcgZGlzYWJsZWQgYXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIG92ZXJyaWRlbiB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnY2hpcFJlbW92YWwnKVxuICBzZXQgY2hpcFJlbW92YWwoY2hpcFJlbW92YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGlwUmVtb3ZhbCA9IGNoaXBSZW1vdmFsO1xuICB9XG4gIGdldCBjaGlwUmVtb3ZhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpcFJlbW92YWw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcFJlbW92YWwgaXMgc2V0IHRvICd0cnVlJ1xuICAgKiBTdGF0ZXMgaWYgYSBjaGlwIGNhbiBiZSByZW1vdmVkXG4gICAqL1xuICBnZXQgY2FuUmVtb3ZlQ2hpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwUmVtb3ZhbCAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBkaXNwbGF5IHBsYWNlaG9sZGVyXG4gICAqL1xuICBnZXQgZGlzcGxheVBsYWNlSG9sZGVyKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNhbkFkZENoaXApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkID8gYCR7dGhpcy5wbGFjZWhvbGRlcn0gKmAgOiB0aGlzLnBsYWNlaG9sZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgYXV0b2NvbXBsZXRlIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDIwMC5cbiAgICovXG4gIEBJbnB1dCgpIGRlYm91bmNlOiBudW1iZXIgPSAyMDA7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGUgY29sb3IgZm9yIHRoZSBpbnB1dCBhbmQgZm9jdXMvc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGNoaXBzLlxuICAgKiBEZWZhdWx0cyB0byAncHJpbWFyeSdcbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCk6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogYWRkPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGFkZGVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgpIGFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogcmVtb3ZlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIHJlbW92ZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBpbnB1dENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSB2YWx1ZSBpbiB0aGUgYXV0b2NvbXBsZXRlIGlucHV0IGNoYW5nZXMuXG4gICAqIFNlbmRzIHN0cmluZyB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogY2hpcEZvY3VzPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGZvY3VzZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hpcEZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBibHVyPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGJsdXJyZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hpcEJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEhvc3RiaW5kaW5nIHRvIHNldCB0aGUgYTExeSBvZiB0aGUgVGRDaGlwc0NvbXBvbmVudCBkZXBlbmRpbmcgb24gaXRzIHN0YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogdGhpcy5fdGFiSW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBhcmVXaXRoPyBmdW5jdGlvblxuICAgKiBGdW5jdGlvbiB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgYSBjaGlwIHZhbHVlIGFscmVhZHkgZXhpc3RzLlxuICAgKiBEZWZhdWx0cyB0byBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbiA9PT1cbiAgICovXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbiA9IChvMTogYW55LCBvMjogYW55KSA9PiB7XG4gICAgcmV0dXJuIG8xID09PSBvMjtcbiAgfTtcblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGZvY3VzIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICBmb2N1c0xpc3RlbmVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgLy8gc2hvdWxkIG9ubHkgZm9jdXMgaWYgaXRzIG5vdCB2aWEgbW91c2Vkb3duIHRvIHByZXZlbnQgY2xhc2hpbmcgd2l0aCBhdXRvY29tcGxldGVcbiAgICBpZiAoIXRoaXMuX2lzTW91c2Vkb3duKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IG1vdXNlZG93biBldmVudCB0byBhY3Qgb24gaXRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG1vdXNlZG93bkxpc3RlbmVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgLy8gc2V0cyBhIGZsYWcgdG8ga25vdyBpZiB0aGVyZSB3YXMgYSBtb3VzZWRvd24gYW5kIHRoZW4gaXQgcmV0dXJucyBpdCBiYWNrIHRvIGZhbHNlXG4gICAgdGhpcy5faXNNb3VzZWRvd24gPSB0cnVlO1xuICAgIHRpbWVyKClcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc01vdXNlZG93biA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSWYgY2xpY2tpbmcgb24gOmhvc3Qgb3IgYHRkLWNoaXBzLXdyYXBwZXJgLCB0aGVuIHdlIHN0b3AgdGhlIGNsaWNrIHByb3BhZ2F0aW9uIHNvIHRoZSBhdXRvY29tcGxldGVcbiAgICogZG9lc250IGNsb3NlIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrTGlzdGVuZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoY2xpY2tUYXJnZXQgPT09IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCB8fCBjbGlja1RhcmdldC5jbGFzc05hbWUuaW5kZXhPZigndGQtY2hpcHMtd3JhcHBlcicpID4gLTEpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGtleWRvd24gZXZlbnQgdG8gYWN0IG9uIGl0IGRlcGVuZGluZyBvbiB0aGUga2V5cHJlc3NcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBrZXlkb3duTGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICAvLyBpZiB0YWJpbmcgb3V0LCB0aGVuIHVuZm9jdXMgdGhlIGNvbXBvbmVudFxuICAgICAgICB0aW1lcigpXG4gICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVTQ0FQRTpcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0Q2hpbGQuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2lucHV0VmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpKVxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodmFsdWUgPyB2YWx1ZSA6ICcnKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3dhdGNoT3V0c2lkZUNsaWNrKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gVGhyb3cgb25DaGFuZ2UgZXZlbnQgb25seSBpZiBhcnJheSBjaGFuZ2VzIHNpemUuXG4gICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggIT09IHRoaXMuX2xlbmd0aCkge1xuICAgICAgdGhpcy5fbGVuZ3RoID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9pbnB1dFZhbHVlQ2hhbmdlc1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIF9zZXRJbnRlcm5hbENsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2ludGVybmFsQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3RvZ2dsZUlucHV0KCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IGNoaXAgZnJvbSB0aGUgYXV0b2NvbXBsZXRlLlxuICAgKiBJdCBjaGVjayBpZiBbcmVxdWlyZU1hdGNoXSBpcyBlbmFibGVkLCBhbmQgdHJpZXMgdG8gYWRkIHRoZSBmaXJzdCBhY3RpdmUgb3B0aW9uXG4gICAqIGVsc2UgaWYganVzdCBhZGRzIHRoZSB2YWx1ZSB0aGF0cyBvbiB0aGUgaW5wdXRcbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIF9oYW5kbGVBZGRDaGlwKCk6IGJvb2xlYW4ge1xuICAgIGxldCB2YWx1ZTogYW55O1xuICAgIGlmICh0aGlzLnJlcXVpcmVNYXRjaCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zOiBNYXRPcHRpb25bXSA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZpbHRlcigob3B0aW9uOiBNYXRPcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5hY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzZWxlY3Rpb24sIHRoZW4gdXNlIHRoYXRcbiAgICAgIC8vIGVsc2UgdXNlIHRoZSBpbnB1dCB2YWx1ZSBhcyBjaGlwXG4gICAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5faW5wdXRDaGlsZC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWRkQ2hpcCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXRzIGV4ZWN0dXRlZCB3aGVuIHRyeWluZyB0byBhZGQgYSB2YWx1ZSBhcyBjaGlwXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICBhZGRDaGlwKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAvKipcbiAgICAgKiBhZGQgYSBkZWJvdW5jZSBtcyBkZWxheSB3aGVuIHJlb3BlbmluZyB0aGUgYXV0b2NvbXBsZXRlIHRvIGdpdmUgaXQgdGltZVxuICAgICAqIHRvIHJlcmVuZGVyIHRoZSBuZXh0IGxpc3QgYW5kIGF0IHRoZSBjb3JyZWN0IHNwb3RcbiAgICAgKi9cblxuICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgdGltZXIodGhpcy5kZWJvdW5jZSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgICAgICB0aGlzLl9vcGVuQXV0b2NvbXBsZXRlKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVsXG4gICAgaWYgKHRoaXMudmFsdWUuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbSwgdmFsdWUpKSA+IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLmFkZC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdHJ5aW5nIHRvIHJlbW92ZSBhIGNoaXAuXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICByZW1vdmVDaGlwKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCByZW1vdmVkVmFsdWVzOiBhbnlbXSA9IHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAocmVtb3ZlZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgZGVsZXRpbmcgbGFzdCBzaW5nbGUgY2hpcCwgdG8gZm9jdXMgaW5wdXQgYWZ0ZXJ3YXJkc1xuICAgICAqIEVsc2UgY2hlY2sgaWYgaXRzIG5vdCB0aGUgbGFzdCBjaGlwIG9mIHRoZSBsaXN0IHRvIGZvY3VzIHRoZSBuZXh0IG9uZS5cbiAgICAgKi9cbiAgICBpZiAoaW5kZXggPT09IHRoaXMuX3RvdGFsQ2hpcHMgLSAxICYmIGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA8IHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSB7XG4gICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmUuZW1pdChyZW1vdmVkVmFsdWVzWzBdKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGJsdXIgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoaXBCbHVyLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50LCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICB0aGlzLmNoaXBGb2N1cy5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIF9oYW5kbGVGb2N1cygpOiBib29sZWFuIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzZXRGb2N1c2VkU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RhYkluZGV4ID0gLTE7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBmb2N1cyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmVGb2N1c2VkU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3RhYkluZGV4ID0gMDtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IGZvY3VzIHRoZSBpbnB1dCBvciBmaXJzdCBjaGlwLiBTaW5jZSBpdHMgdGhlIGNvbXBvbmVudCBlbnRyeSBwb2ludFxuICAgKiBkZXBlbmRpbmcgaWYgYSB1c2VyIGNhbiBhZGQgb3IgcmVtb3ZlIGNoaXBzXG4gICAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VzIHJlbGV2YW50IGlucHV0IGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2lucHV0S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpbmNlIHRoZSBmaXJzdCBpdGVtIGlzIGhpZ2hsaWdodGVkIG9uIFtyZXF1aXJlTWF0Y2hdLCB3ZSBuZWVkIHRvIGluYWN0aXZhdGUgaXRcbiAgICAgICAgICogd2hlbiBwcmVzc2luZyB0aGUgdXAga2V5XG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IHRoaXMuX29wdGlvbnMubGVuZ3RoO1xuICAgICAgICAgIGlmIChsZW5ndGggPiAxICYmIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLmFjdGl2ZSAmJiB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVswXS5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgY2FzZSBERUxFVEU6XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiBpbnB1dCBpcyBlbXB0eSB3aGVuIHByZXNzaW5nIGxlZnQgYXJyb3cgdG8gbW92ZSB0byB0aGUgbGFzdCBjaGlwICovXG4gICAgICAgIGlmICghdGhpcy5faW5wdXRDaGlsZC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzTGFzdENoaXAoKTtcbiAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIGlucHV0IGlzIGVtcHR5IHdoZW4gcHJlc3NpbmcgcmlnaHQgYXJyb3cgdG8gbW92ZSB0byB0aGUgZmlyc3QgY2hpcCAqL1xuICAgICAgICBpZiAoIXRoaXMuX2lucHV0Q2hpbGQudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBjaGlwIGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2NoaXBLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIHdlIGNhbiBkZWxldGUgYSBjaGlwICovXG4gICAgICAgIGlmICh0aGlzLmNhblJlbW92ZUNoaXApIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUNoaXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiBsZWZ0L2Rvd24gYXJyb3cgd2FzIHByZXNzZWQgd2hpbGUgZm9jdXNpbmcgdGhlIGZpcnN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgbGVmdFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiByaWdodC91cCBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgbGFzdCBjaGlwIHRvIGZvY3VzIGlucHV0IG5leHRcbiAgICAgICAgICogQWxzbyBjaGVjayBpZiBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLl90b3RhbENoaXBzIC0gMSkge1xuICAgICAgICAgIC8vIG9ubHkgdHJ5IHRvIHRhcmdldCBpbnB1dCBpZiBwcmVzc2luZyByaWdodFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCB0aGlzLl90b3RhbENoaXBzIC0gMSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBmcm9tIGRpc3BsYXkgdGhlIHZhbHVlIGFkZGVkIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBzaW5jZSBpdCBnb2VzIGRpcmVjdGx5IGFzIGNoaXAuXG4gICAqL1xuICBfcmVtb3ZlSW5wdXREaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBvcGVuIHRoZSBhdXRvY29tcGxldGUgbWFudWFsbHkgaWYgaXRzIG5vdCBhbHJlYWR5IG9wZW5lZFxuICAgKi9cbiAgX29wZW5BdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5vcGVuUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBfY2xvc2VBdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgb2YgY2hpcHNcbiAgICovXG4gIGdldCBfdG90YWxDaGlwcygpOiBudW1iZXIge1xuICAgIGNvbnN0IGNoaXBzOiBNYXRDaGlwW10gPSB0aGlzLl9jaGlwc0NoaWxkcmVuLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gY2hpcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBmb2N1cyBhIGRlc2lyZWQgY2hpcCBieSBpbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNDaGlwKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvKiogY2hlY2sgdG8gc2VlIGlmIGluZGV4IGV4aXN0cyBpbiB0aGUgYXJyYXkgYmVmb3JlIGZvY3VzaW5nICovXG4gICAgaWYgKGluZGV4ID4gLTEgJiYgdGhpcy5fdG90YWxDaGlwcyA+IGluZGV4KSB7XG4gICAgICB0aGlzLl9jaGlwc0NoaWxkcmVuLnRvQXJyYXkoKVtpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWV0aG9kIHRvIGZvY3VzIGZpcnN0IGNoaXAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNGaXJzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKDApO1xuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBsYXN0IGNoaXAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNMYXN0Q2hpcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c0NoaXAodGhpcy5fdG90YWxDaGlwcyAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0b2dnbGUgdGhlIGRpc2FibGUgc3RhdGUgb2YgaW5wdXRcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcEFkZGl0aW9uIGlzIHNldCB0byAndHJ1ZSdcbiAgICovXG4gIHByaXZhdGUgX3RvZ2dsZUlucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbkFkZENoaXApIHtcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLmVuYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5kaXNhYmxlKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZmlyc3Qgb3B0aW9uIGFzIGFjdGl2ZSB0byBsZXQgdGhlIHVzZXIga25vdyB3aGljaCBvbmUgd2lsbCBiZSBhZGRlZCB3aGVuIHByZXNzaW5nIGVudGVyXG4gICAqIE9ubHkgaWYgW3JlcXVpcmVNYXRjaF0gaGFzIGJlZW4gc2V0XG4gICAqL1xuICBwcml2YXRlIF9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgIC8vIG5lZWQgdG8gdXNlIGEgdGltZXIgaGVyZSB0byB3YWl0IHVudGlsIHRoZSBhdXRvY29tcGxldGUgaGFzIGJlZW4gb3BlbmVkIChlbmQgb2YgcXVldWUpXG4gICAgICB0aW1lcigpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY2xlYW4gdXAgb2YgcHJldmlvdXNseSBhY3RpdmUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KCkuZm9yRWFjaCgob3B0aW9uOiBNYXRPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgb25lIGFzIGFjdGl2ZVxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmUgdGhlIGZvY3VzXG4gICAqIFRoZSBhdXRvY29tcGxldGUgcGFuZWwgaXMgY29uc2lkZXJlZCBpbnNpZGUgdGhlIGNvbXBvbmVudCBzbyB3ZVxuICAgKiBuZWVkIHRvIHVzZSBhIGZsYWcgdG8gZmluZCBvdXQgd2hlbiBpdHMgY2xpY2tlZC5cbiAgICovXG4gIHByaXZhdGUgX3dhdGNoT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fb3V0c2lkZUNsaWNrU3VicyA9IG1lcmdlKGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ2NsaWNrJyksIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ3RvdWNoZW5kJykpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLl90b3VjaGVuZERlYm91bmNlKSxcbiAgICAgICAgICBmaWx0ZXIoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkICYmXG4gICAgICAgICAgICAgIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiZcbiAgICAgICAgICAgICAgIXRoaXMuX2ludGVybmFsQ2xpY2tcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5jbG9zZVBhbmVsKCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==