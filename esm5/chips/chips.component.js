/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, forwardRef, ViewChild, ViewChildren, QueryList, HostListener, ElementRef, Optional, Inject, Directive, TemplateRef, ViewContainerRef, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UP_ARROW, DOWN_ARROW, ESCAPE, LEFT_ARROW, RIGHT_ARROW, DELETE, BACKSPACE, TAB } from '@angular/cdk/keycodes';
import { MatChip } from '@angular/material/chips';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { timer, merge, fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
var TdChipDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdChipDirective, _super);
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
    tslib_1.__extends(TdAutocompleteOptionDirective, _super);
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
    tslib_1.__extends(TdChipsComponent, _super);
    function TdChipsComponent(_elementRef, _renderer, _document, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this._document = _document;
        _this._isMousedown = false;
        _this._length = 0;
        _this._stacked = false;
        _this._requireMatch = false;
        _this._color = 'primary';
        _this._inputPosition = 'after';
        _this._chipAddition = true;
        _this._chipRemoval = true;
        _this._focused = false;
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
        this.inputControl.valueChanges.pipe(debounceTime(this.debounce)).subscribe(function (value) {
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
        if (this._outsideClickSubs) {
            this._outsideClickSubs.unsubscribe();
            this._outsideClickSubs = undefined;
        }
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
        var _this = this;
        /**
         * add a debounce ms delay when reopening the autocomplete to give it time
         * to rerender the next list and at the correct spot
         */
        this._closeAutocomplete();
        timer(this.debounce).toPromise().then(function () {
            _this.setFocusedState();
            _this._setFirstOptionActive();
            _this._openAutocomplete();
        });
        this.inputControl.setValue('');
        // check if value is already part of the model
        if (this.value.indexOf(value) > -1) {
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
            merge(fromEvent(this._document, 'click'), fromEvent(this._document, 'touchend')).pipe(debounceTime(this._touchendDebounce), filter(function (event) {
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
                    template: "<div class=\"td-chips-wrapper\"\n     [class.td-chips-stacked]=\"stacked\"\n     [class.td-chips-input-before-position]=\"inputPosition === 'before'\">\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip [class.td-chip-disabled]=\"disabled\"\n                   [class.td-chip-after-pad]=\"!canRemoveChip\"\n                   [disableRipple]=\"true\"\n                   [color]=\"color\"\n                   (keydown)=\"_chipKeydown($event, index)\"\n                   (blur)=\"_handleChipBlur($event, chip)\"\n                   (focus)=\"_handleChipFocus($event, chip)\">\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\">\n          </ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field floatLabel=\"never\"\n                  class=\"td-chips-form-field\"\n                  [style.width.px]=\"canAddChip ? null : 0\"\n                  [style.height.px]=\"canAddChip ? null : 0\"\n                  [color]=\"color\">\n    <input matInput\n            #input\n            [tabIndex]=\"-1\"\n            [matAutocomplete]=\"autocomplete\"\n            [formControl]=\"inputControl\"\n            [placeholder]=\"canAddChip? placeholder : ''\"\n            (keydown)=\"_inputKeydown($event)\"\n            (keyup.enter)=\"_handleAddChip()\"\n            (focus)=\"_handleFocus()\">\n  </mat-form-field>\n  <mat-autocomplete #autocomplete=\"matAutocomplete\"\n                   [displayWith]=\"_removeInputDisplay\"\n                   (optionSelected)=\"addChip($event.option.value)\">\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\">\n        </ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\"\n      [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\"\n        [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;max-width:100%;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:start;justify-content:start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-ms-flex-order:-20;order:-20;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
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
        focusListener: [{ type: HostListener, args: ['focus', ['$event'],] }],
        mousedownListener: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        clickListener: [{ type: HostListener, args: ['click', ['$event'],] }],
        keydownListener: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return TdChipsComponent;
}(_TdChipsMixinBase));
export { TdChipsComponent };
if (false) {
    /** @type {?} */
    TdChipsComponent.prototype._outsideClickSubs;
    /** @type {?} */
    TdChipsComponent.prototype._isMousedown;
    /** @type {?} */
    TdChipsComponent.prototype._items;
    /** @type {?} */
    TdChipsComponent.prototype._length;
    /** @type {?} */
    TdChipsComponent.prototype._stacked;
    /** @type {?} */
    TdChipsComponent.prototype._requireMatch;
    /** @type {?} */
    TdChipsComponent.prototype._color;
    /** @type {?} */
    TdChipsComponent.prototype._inputPosition;
    /** @type {?} */
    TdChipsComponent.prototype._chipAddition;
    /** @type {?} */
    TdChipsComponent.prototype._chipRemoval;
    /** @type {?} */
    TdChipsComponent.prototype._focused;
    /** @type {?} */
    TdChipsComponent.prototype._tabIndex;
    /** @type {?} */
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
    TdChipsComponent.prototype.onAdd;
    /**
     * remove?: function
     * Method to be executed when a chip is removed.
     * Sends chip value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.onRemove;
    /**
     * inputChange?: function
     * Method to be executed when the value in the autocomplete input changes.
     * Sends string value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.onInputChange;
    /**
     * chipFocus?: function
     * Method to be executed when a chip is focused.
     * Sends chip value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.onChipFocus;
    /**
     * blur?: function
     * Method to be executed when a chip is blurred.
     * Sends chip value as event.
     * @type {?}
     */
    TdChipsComponent.prototype.onChipBlur;
    /** @type {?} */
    TdChipsComponent.prototype._elementRef;
    /** @type {?} */
    TdChipsComponent.prototype._renderer;
    /** @type {?} */
    TdChipsComponent.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvIiwic291cmNlcyI6WyJjaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFXLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFDOUcsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQzdHLGlCQUFpQixFQUE0QixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBZ0IsR0FBRyxFQUFRLE1BQU0sdUJBQXVCLENBQUM7QUFDMUksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEUsT0FB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Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIGZvcndhcmRSZWYsIERvQ2hlY2ssIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE9uSW5pdCwgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLCBPcHRpb25hbCwgSW5qZWN0LCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBIb3N0QmluZGluZywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFVQX0FSUk9XLCBET1dOX0FSUk9XLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBERUxFVEUsIEJBQ0tTUEFDRSwgRU5URVIsIFNQQUNFLCBUQUIsIEhPTUUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgTWF0Q2hpcCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0T3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB0aW1lciwgbWVyZ2UsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtY2hpcF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hpcERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWF1dG9jb21wbGV0ZS1vcHRpb25dbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRkQ2hpcHNCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZENoaXBzTWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihtaXhpbkRpc2FibGVkKFRkQ2hpcHNCYXNlKSwgW10pO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hpcHNDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1jaGlwcycsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwcy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hpcHNDb21wb25lbnQgZXh0ZW5kcyBfVGRDaGlwc01peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgRG9DaGVjaywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tTdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfaXNNb3VzZWRvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9pdGVtczogYW55W107XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RhY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlTWF0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuICBwcml2YXRlIF9pbnB1dFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInO1xuICBwcml2YXRlIF9jaGlwQWRkaXRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9jaGlwUmVtb3ZhbDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdGFiSW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvdWNoZW5kRGVib3VuY2U6IG51bWJlciA9IDEwMDtcblxuICBfaW50ZXJuYWxDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBfaW50ZXJuYWxBY3RpdmF0ZU9wdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgX25hdGl2ZUlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE1hdElucHV0KSBfaW5wdXRDaGlsZDogTWF0SW5wdXQ7XG4gIEBWaWV3Q2hpbGQoTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcikgX2F1dG9jb21wbGV0ZVRyaWdnZXI6IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXI7XG4gIEBWaWV3Q2hpbGRyZW4oTWF0Q2hpcCkgX2NoaXBzQ2hpbGRyZW46IFF1ZXJ5TGlzdDxNYXRDaGlwPjtcblxuICBAQ29udGVudENoaWxkKFRkQ2hpcERpcmVjdGl2ZSkgX2NoaXBUZW1wbGF0ZTogVGRDaGlwRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlKSBfYXV0b2NvbXBsZXRlT3B0aW9uVGVtcGxhdGU6IFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlO1xuXG4gIEBWaWV3Q2hpbGRyZW4oTWF0T3B0aW9uKSBfb3B0aW9uczogUXVlcnlMaXN0PE1hdE9wdGlvbj47XG5cbiAgLyoqXG4gICAqIEZsYWcgdGhhdCBpcyB0cnVlIHdoZW4gYXV0b2NvbXBsZXRlIGlzIGZvY3VzZWQuXG4gICAqL1xuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtQ29udHJvbCBmb3IgdGhlIG1hdElucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgLyoqXG4gICAqIGl0ZW1zPzogYW55W11cbiAgICogUmVuZGVycyB0aGUgYG1hdC1hdXRvY29tcGxldGVgIHdpdGggdGhlIHByb3ZpZGVkIGxpc3QgdG8gZGlzcGxheSBhcyBvcHRpb25zLlxuICAgKi9cbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBpdGVtcyhpdGVtczogYW55W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGl0ZW1zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogc3RhY2tlZD86IGJvb2xlYW5cbiAgICogU2V0IHN0YWNrZWQgb3IgaG9yaXpvbnRhbCBjaGlwcyBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCdzdGFja2VkJylcbiAgc2V0IHN0YWNrZWQoc3RhY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YWNrZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc3RhY2tlZCk7XG4gIH1cbiAgZ2V0IHN0YWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrZWQ7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRQb3NpdGlvbj86ICdiZWZvcmUnIHwgJ2FmdGVyJ1xuICAgKiBTZXQgaW5wdXQgcG9zaXRpb24gYmVmb3JlIG9yIGFmdGVyIHRoZSBjaGlwcy5cbiAgICogRGVmYXVsdHMgdG8gJ2FmdGVyJy5cbiAgICovXG4gIEBJbnB1dCgnaW5wdXRQb3NpdGlvbicpXG4gIHNldCBpbnB1dFBvc2l0aW9uKGlucHV0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJykge1xuICAgIHRoaXMuX2lucHV0UG9zaXRpb24gPSBpbnB1dFBvc2l0aW9uO1xuICB9XG4gIGdldCBpbnB1dFBvc2l0aW9uKCk6ICdiZWZvcmUnIHwgJ2FmdGVyJyB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZU1hdGNoPzogYm9vbGVhblxuICAgKiBCbG9ja3MgY3VzdG9tIGlucHV0cyBhbmQgb25seSBhbGxvd3Mgc2VsZWN0aW9ucyBmcm9tIHRoZSBhdXRvY29tcGxldGUgbGlzdC5cbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZU1hdGNoJylcbiAgc2V0IHJlcXVpcmVNYXRjaChyZXF1aXJlTWF0Y2g6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlTWF0Y2ggPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxdWlyZU1hdGNoKTtcbiAgfVxuICBnZXQgcmVxdWlyZU1hdGNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogY2hpcEFkZGl0aW9uPzogYm9vbGVhblxuICAgKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBhZGQgY2hpcHMuIFdoZW4gc2V0dGluZyBkaXNhYmxlZCBhcyB0cnVlLCB0aGlzIHdpbGwgYmUgb3ZlcnJpZGVuLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCdjaGlwQWRkaXRpb24nKVxuICBzZXQgY2hpcEFkZGl0aW9uKGNoaXBBZGRpdGlvbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoaXBBZGRpdGlvbiA9IGNoaXBBZGRpdGlvbjtcbiAgICB0aGlzLl90b2dnbGVJbnB1dCgpO1xuICB9XG4gIGdldCBjaGlwQWRkaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBBZGRpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgbm90IGluIGRpc2FibGVkIHN0YXRlIGFuZCBpZiBjaGlwQWRkaXRpb24gaXMgc2V0IHRvICd0cnVlJ1xuICAgKiBTdGF0ZXMgaWYgYSBjaGlwIGNhbiBiZSBhZGRlZCBhbmQgaWYgdGhlIGlucHV0IGlzIGF2YWlsYWJsZVxuICAgKi9cbiAgZ2V0IGNhbkFkZENoaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpcEFkZGl0aW9uICYmICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoaXBSZW1vdmFsPzogYm9vbGVhblxuICAgKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byByZW1vdmUgY2hpcHMuIElmIGl0IGRvZXNuJ3QgZXhpc3QgY2hpcCByZW1tb3ZhbCBkZWZhdWx0cyB0byB0cnVlLlxuICAgKiBXaGVuIHNldHRpbmcgZGlzYWJsZWQgYXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIG92ZXJyaWRlbiB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnY2hpcFJlbW92YWwnKVxuICBzZXQgY2hpcFJlbW92YWwoY2hpcFJlbW92YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGlwUmVtb3ZhbCA9IGNoaXBSZW1vdmFsO1xuICB9XG4gIGdldCBjaGlwUmVtb3ZhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpcFJlbW92YWw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcFJlbW92YWwgaXMgc2V0IHRvICd0cnVlJ1xuICAgKiBTdGF0ZXMgaWYgYSBjaGlwIGNhbiBiZSByZW1vdmVkXG4gICAqL1xuICBnZXQgY2FuUmVtb3ZlQ2hpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwUmVtb3ZhbCAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBkZWJvdW5jZT86IG51bWJlclxuICAgKiBEZWJvdW5jZSB0aW1lb3V0IGJldHdlZW4ga2V5cHJlc3Nlcy4gRGVmYXVsdHMgdG8gMjAwLlxuICAgKi9cbiAgQElucHV0KCdkZWJvdW5jZScpIGRlYm91bmNlOiBudW1iZXIgPSAyMDA7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGUgY29sb3IgZm9yIHRoZSBpbnB1dCBhbmQgZm9jdXMvc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGNoaXBzLlxuICAgKiBEZWZhdWx0cyB0byAncHJpbWFyeSdcbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCk6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogYWRkPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGFkZGVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnYWRkJykgb25BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIHJlbW92ZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyByZW1vdmVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgncmVtb3ZlJykgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIGlucHV0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHZhbHVlIGluIHRoZSBhdXRvY29tcGxldGUgaW5wdXQgY2hhbmdlcy5cbiAgICogU2VuZHMgc3RyaW5nIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnaW5wdXRDaGFuZ2UnKSBvbklucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjaGlwRm9jdXM/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgZm9jdXNlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2NoaXBGb2N1cycpIG9uQ2hpcEZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBibHVyPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGJsdXJyZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCdjaGlwQmx1cicpIG9uQ2hpcEJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEhvc3RiaW5kaW5nIHRvIHNldCB0aGUgYTExeSBvZiB0aGUgVGRDaGlwc0NvbXBvbmVudCBkZXBlbmRpbmcgb24gaXRzIHN0YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogdGhpcy5fdGFiSW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgZm9jdXMgZXZlbnQgdG8gYWN0IG9uIGl0XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIGZvY3VzTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBzaG91bGQgb25seSBmb2N1cyBpZiBpdHMgbm90IHZpYSBtb3VzZWRvd24gdG8gcHJldmVudCBjbGFzaGluZyB3aXRoIGF1dG9jb21wbGV0ZVxuICAgIGlmICghdGhpcy5faXNNb3VzZWRvd24pIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgbW91c2Vkb3duIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgbW91c2Vkb3duTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAgLy8gc2V0cyBhIGZsYWcgdG8ga25vdyBpZiB0aGVyZSB3YXMgYSBtb3VzZWRvd24gYW5kIHRoZW4gaXQgcmV0dXJucyBpdCBiYWNrIHRvIGZhbHNlXG4gICAgdGhpcy5faXNNb3VzZWRvd24gPSB0cnVlO1xuICAgIHRpbWVyKCkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9pc01vdXNlZG93biA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGNsaWNraW5nIG9uIDpob3N0IG9yIGB0ZC1jaGlwcy13cmFwcGVyYCwgdGhlbiB3ZSBzdG9wIHRoZSBjbGljayBwcm9wYWdhdGlvbiBzbyB0aGUgYXV0b2NvbXBsZXRlXG4gICAqIGRvZXNudCBjbG9zZSBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja0xpc3RlbmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNsaWNrVGFyZ2V0OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGNsaWNrVGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgfHxcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3RkLWNoaXBzLXdyYXBwZXInKSA+IC0xKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gaG9zdCBrZXlkb3duIGV2ZW50IHRvIGFjdCBvbiBpdCBkZXBlbmRpbmcgb24gdGhlIGtleXByZXNzXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIFRBQjpcbiAgICAgICAgLy8gaWYgdGFiaW5nIG91dCwgdGhlbiB1bmZvY3VzIHRoZSBjb21wb25lbnRcbiAgICAgICAgdGltZXIoKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVTQ0FQRTpcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0Q2hpbGQuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSksXG4gICAgKS5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMub25JbnB1dENoYW5nZS5lbWl0KHZhbHVlID8gdmFsdWUgOiAnJyk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fd2F0Y2hPdXRzaWRlQ2xpY2soKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAvLyBUaHJvdyBvbkNoYW5nZSBldmVudCBvbmx5IGlmIGFycmF5IGNoYW5nZXMgc2l6ZS5cbiAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCAhPT0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICB0aGlzLl9sZW5ndGggPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX291dHNpZGVDbGlja1N1YnMpIHtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgX3NldEludGVybmFsQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5faW50ZXJuYWxDbGljayA9IHRydWU7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdG9nZ2xlSW5wdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgY2hpcCBmcm9tIHRoZSBhdXRvY29tcGxldGUuXG4gICAqIEl0IGNoZWNrIGlmIFtyZXF1aXJlTWF0Y2hdIGlzIGVuYWJsZWQsIGFuZCB0cmllcyB0byBhZGQgdGhlIGZpcnN0IGFjdGl2ZSBvcHRpb25cbiAgICogZWxzZSBpZiBqdXN0IGFkZHMgdGhlIHZhbHVlIHRoYXRzIG9uIHRoZSBpbnB1dFxuICAgKiByZXR1cm5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCAnZmFsc2UnIGlmIGl0IGZhaWxzLlxuICAgKi9cbiAgX2hhbmRsZUFkZENoaXAoKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zOiBNYXRPcHRpb25bXSA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZpbHRlcigob3B0aW9uOiBNYXRPcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5hY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzZWxlY3Rpb24sIHRoZW4gdXNlIHRoYXRcbiAgICAgIC8vIGVsc2UgdXNlIHRoZSBpbnB1dCB2YWx1ZSBhcyBjaGlwXG4gICAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5faW5wdXRDaGlsZC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWRkQ2hpcCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXRzIGV4ZWN0dXRlZCB3aGVuIHRyeWluZyB0byBhZGQgYSB2YWx1ZSBhcyBjaGlwXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICBhZGRDaGlwKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAvKipcbiAgICAgKiBhZGQgYSBkZWJvdW5jZSBtcyBkZWxheSB3aGVuIHJlb3BlbmluZyB0aGUgYXV0b2NvbXBsZXRlIHRvIGdpdmUgaXQgdGltZVxuICAgICAqIHRvIHJlcmVuZGVyIHRoZSBuZXh0IGxpc3QgYW5kIGF0IHRoZSBjb3JyZWN0IHNwb3RcbiAgICAgKi9cbiAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgIHRpbWVyKHRoaXMuZGVib3VuY2UpLnRvUHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgICB0aGlzLl9vcGVuQXV0b2NvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlucHV0Q29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgYWxyZWFkeSBwYXJ0IG9mIHRoZSBtb2RlbFxuICAgIGlmICh0aGlzLnZhbHVlLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlLnB1c2godmFsdWUpO1xuICAgIHRoaXMub25BZGQuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRyeWluZyB0byByZW1vdmUgYSBjaGlwLlxuICAgKiByZXR1cm5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCAnZmFsc2UnIGlmIGl0IGZhaWxzLlxuICAgKi9cbiAgcmVtb3ZlQ2hpcChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlbW92ZWRWYWx1ZXM6IGFueVtdID0gdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBkZWxldGluZyBsYXN0IHNpbmdsZSBjaGlwLCB0byBmb2N1cyBpbnB1dCBhZnRlcndhcmRzXG4gICAgICogRWxzZSBjaGVjayBpZiBpdHMgbm90IHRoZSBsYXN0IGNoaXAgb2YgdGhlIGxpc3QgdG8gZm9jdXMgdGhlIG5leHQgb25lLlxuICAgICAqL1xuICAgIGlmIChpbmRleCA9PT0gKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPCAodGhpcy5fdG90YWxDaGlwcyAtIDEpKSB7XG4gICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgdGhpcy5vblJlbW92ZS5lbWl0KHJlbW92ZWRWYWx1ZXNbMF0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5pbnB1dENvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYmx1ciBvZiBjaGlwIGFuZCBzZW5kcyBvdXQgZXZlbnRcbiAgICovXG4gIF9oYW5kbGVDaGlwQmx1cihldmVudDogRm9jdXNFdmVudCwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGlwQmx1ci5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9mIGNoaXAgYW5kIHNlbmRzIG91dCBldmVudFxuICAgKi9cbiAgX2hhbmRsZUNoaXBGb2N1cyhldmVudDogRm9jdXNFdmVudCwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Rm9jdXNlZFN0YXRlKCk7XG4gICAgdGhpcy5vbkNoaXBGb2N1cy5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIF9oYW5kbGVGb2N1cygpOiBib29sZWFuIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzZXRGb2N1c2VkU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RhYkluZGV4ID0gLTE7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBmb2N1cyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmVGb2N1c2VkU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3RhYkluZGV4ID0gMDtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IGZvY3VzIHRoZSBpbnB1dCBvciBmaXJzdCBjaGlwLiBTaW5jZSBpdHMgdGhlIGNvbXBvbmVudCBlbnRyeSBwb2ludFxuICAgKiBkZXBlbmRpbmcgaWYgYSB1c2VyIGNhbiBhZGQgb3IgcmVtb3ZlIGNoaXBzXG4gICAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VzIHJlbGV2YW50IGlucHV0IGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2lucHV0S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpbmNlIHRoZSBmaXJzdCBpdGVtIGlzIGhpZ2hsaWdodGVkIG9uIFtyZXF1aXJlTWF0Y2hdLCB3ZSBuZWVkIHRvIGluYWN0aXZhdGUgaXRcbiAgICAgICAgICogd2hlbiBwcmVzc2luZyB0aGUgdXAga2V5XG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLl9vcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICBpZiAobGVuZ3RoID4gMSAmJiB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVswXS5hY3RpdmUgJiYgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQWN0aXZhdGVPcHRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgIGNhc2UgREVMRVRFOlxuICAgICAgY2FzZSBCQUNLU1BBQ0U6XG4gICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIC8qKiBDaGVjayB0byBzZWUgaWYgaW5wdXQgaXMgZW1wdHkgd2hlbiBwcmVzc2luZyBsZWZ0IGFycm93IHRvIG1vdmUgdG8gdGhlIGxhc3QgY2hpcCAqL1xuICAgICAgICBpZiAoIXRoaXMuX2lucHV0Q2hpbGQudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiBpbnB1dCBpcyBlbXB0eSB3aGVuIHByZXNzaW5nIHJpZ2h0IGFycm93IHRvIG1vdmUgdG8gdGhlIGZpcnN0IGNoaXAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dENoaWxkLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBjaGlwIGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2NoaXBLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIHdlIGNhbiBkZWxldGUgYSBjaGlwICovXG4gICAgICAgIGlmICh0aGlzLmNhblJlbW92ZUNoaXApIHtcbiAgICAgICAgIHRoaXMucmVtb3ZlQ2hpcChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIGxlZnQvZG93biBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgZmlyc3QgY2hpcCB0byBmb2N1cyBpbnB1dCBuZXh0XG4gICAgICAgICAqIEFsc28gY2hlY2sgaWYgaW5wdXQgc2hvdWxkIGJlIGZvY3VzZWRcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIC8vIG9ubHkgdHJ5IHRvIHRhcmdldCBpbnB1dCBpZiBwcmVzc2luZyBsZWZ0XG4gICAgICAgICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCAmJiBldmVudC5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzTGFzdENoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIHJpZ2h0L3VwIGFycm93IHdhcyBwcmVzc2VkIHdoaWxlIGZvY3VzaW5nIHRoZSBsYXN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLl90b3RhbENoaXBzIC0gMSkpIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgcmlnaHRcbiAgICAgICAgICBpZiAodGhpcy5jYW5BZGRDaGlwICYmIGV2ZW50LmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcmVtb3ZlIGZyb20gZGlzcGxheSB0aGUgdmFsdWUgYWRkZWQgZnJvbSB0aGUgYXV0b2NvbXBsZXRlIHNpbmNlIGl0IGdvZXMgZGlyZWN0bHkgYXMgY2hpcC5cbiAgICovXG4gIF9yZW1vdmVJbnB1dERpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIG9wZW4gdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgb3BlbmVkXG4gICAqL1xuICBfb3BlbkF1dG9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLm9wZW5QYW5lbCgpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjbG9zZSB0aGUgYXV0b2NvbXBsZXRlIG1hbnVhbGx5IGlmIGl0cyBub3QgYWxyZWFkeSBjbG9zZWRcbiAgICovXG4gIF9jbG9zZUF1dG9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuY2xvc2VQYW5lbCgpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0b3RhbCBvZiBjaGlwc1xuICAgKi9cbiAgZ2V0IF90b3RhbENoaXBzKCk6IG51bWJlciB7XG4gICAgbGV0IGNoaXBzOiBNYXRDaGlwW10gPSB0aGlzLl9jaGlwc0NoaWxkcmVuLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gY2hpcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBmb2N1cyBhIGRlc2lyZWQgY2hpcCBieSBpbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNDaGlwKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvKiogY2hlY2sgdG8gc2VlIGlmIGluZGV4IGV4aXN0cyBpbiB0aGUgYXJyYXkgYmVmb3JlIGZvY3VzaW5nICovXG4gICAgaWYgKGluZGV4ID4gLTEgJiYgdGhpcy5fdG90YWxDaGlwcyA+IGluZGV4KSB7XG4gICAgICB0aGlzLl9jaGlwc0NoaWxkcmVuLnRvQXJyYXkoKVtpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWV0aG9kIHRvIGZvY3VzIGZpcnN0IGNoaXAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNGaXJzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKDApO1xuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBsYXN0IGNoaXAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNMYXN0Q2hpcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c0NoaXAodGhpcy5fdG90YWxDaGlwcyAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0b2dnbGUgdGhlIGRpc2FibGUgc3RhdGUgb2YgaW5wdXRcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcEFkZGl0aW9uIGlzIHNldCB0byAndHJ1ZSdcbiAgICovXG4gIHByaXZhdGUgX3RvZ2dsZUlucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbkFkZENoaXApIHtcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLmVuYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5kaXNhYmxlKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZmlyc3Qgb3B0aW9uIGFzIGFjdGl2ZSB0byBsZXQgdGhlIHVzZXIga25vdyB3aGljaCBvbmUgd2lsbCBiZSBhZGRlZCB3aGVuIHByZXNzaW5nIGVudGVyXG4gICAqIE9ubHkgaWYgW3JlcXVpcmVNYXRjaF0gaGFzIGJlZW4gc2V0XG4gICAqL1xuICBwcml2YXRlIF9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgIC8vIG5lZWQgdG8gdXNlIGEgdGltZXIgaGVyZSB0byB3YWl0IHVudGlsIHRoZSBhdXRvY29tcGxldGUgaGFzIGJlZW4gb3BlbmVkIChlbmQgb2YgcXVldWUpXG4gICAgICB0aW1lcigpLnRvUHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkICYmIHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gY2xlYW4gdXAgb2YgcHJldmlvdXNseSBhY3RpdmUgb3B0aW9uc1xuICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZvckVhY2goKG9wdGlvbjogTWF0T3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IG9uZSBhcyBhY3RpdmVcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVswXS5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmUgdGhlIGZvY3VzXG4gICAqIFRoZSBhdXRvY29tcGxldGUgcGFuZWwgaXMgY29uc2lkZXJlZCBpbnNpZGUgdGhlIGNvbXBvbmVudCBzbyB3ZVxuICAgKiBuZWVkIHRvIHVzZSBhIGZsYWcgdG8gZmluZCBvdXQgd2hlbiBpdHMgY2xpY2tlZC5cbiAgICovXG4gIHByaXZhdGUgX3dhdGNoT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgbWVyZ2UoXG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ2NsaWNrJyksXG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ3RvdWNoZW5kJyksXG4gICAgICApLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLl90b3VjaGVuZERlYm91bmNlKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9pbnRlcm5hbENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgICAgICAgICAgIChjbGlja1RhcmdldCAhPT0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSAmJlxuICAgICAgICAgICAgICAgICAgIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiYgIXRoaXMuX2ludGVybmFsQ2xpY2s7XG4gICAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuY2xvc2VQYW5lbCgpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==