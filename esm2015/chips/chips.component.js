/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
import { Subscription, timer, merge, fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
export class TdChipDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdChipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-chip]ng-template',
            },] }
];
/** @nocollapse */
TdChipDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdAutocompleteOptionDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdAutocompleteOptionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-autocomplete-option]ng-template',
            },] }
];
/** @nocollapse */
TdAutocompleteOptionDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdChipsBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdChipsBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdChipsMixinBase = mixinControlValueAccessor(mixinDisabled(TdChipsBase), []);
export class TdChipsComponent extends _TdChipsMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _document
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _renderer, _document, _changeDetectorRef) {
        super(_changeDetectorRef);
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._document = _document;
        this._outsideClickSubs = Subscription.EMPTY;
        this._isMousedown = false;
        this._length = 0;
        this._stacked = false;
        this._requireMatch = false;
        this._color = 'primary';
        this._inputPosition = 'after';
        this._chipAddition = true;
        this._chipRemoval = true;
        this._focused = false;
        this._required = false;
        this._tabIndex = 0;
        this._touchendDebounce = 100;
        this._internalClick = false;
        this._internalActivateOption = false;
        /**
         * FormControl for the matInput element.
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
        /**
         * chipFocus?: function
         * Method to be executed when a chip is focused.
         * Sends chip value as event.
         */
        this.onChipFocus = new EventEmitter();
        /**
         * blur?: function
         * Method to be executed when a chip is blurred.
         * Sends chip value as event.
         */
        this.onChipBlur = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
    }
    /**
     * Flag that is true when autocomplete is focused.
     * @return {?}
     */
    get focused() {
        return this._focused;
    }
    /**
     * items?: any[]
     * Renders the `mat-autocomplete` with the provided list to display as options.
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this._items = items;
        this._setFirstOptionActive();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * stacked?: boolean
     * Set stacked or horizontal chips depending on value.
     * Defaults to false.
     * @param {?} stacked
     * @return {?}
     */
    set stacked(stacked) {
        this._stacked = coerceBooleanProperty(stacked);
    }
    /**
     * @return {?}
     */
    get stacked() {
        return this._stacked;
    }
    /**
     * inputPosition?: 'before' | 'after'
     * Set input position before or after the chips.
     * Defaults to 'after'.
     * @param {?} inputPosition
     * @return {?}
     */
    set inputPosition(inputPosition) {
        this._inputPosition = inputPosition;
    }
    /**
     * @return {?}
     */
    get inputPosition() {
        return this._inputPosition;
    }
    /**
     * requireMatch?: boolean
     * Blocks custom inputs and only allows selections from the autocomplete list.
     * @param {?} requireMatch
     * @return {?}
     */
    set requireMatch(requireMatch) {
        this._requireMatch = coerceBooleanProperty(requireMatch);
    }
    /**
     * @return {?}
     */
    get requireMatch() {
        return this._requireMatch;
    }
    /**
     * required?: boolean
     * Value is set to true if at least one chip is needed
     * Defaults to false
     * @param {?} required
     * @return {?}
     */
    set required(required) {
        this._required = coerceBooleanProperty(required);
    }
    /**
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * chipAddition?: boolean
     * Disables the ability to add chips. When setting disabled as true, this will be overriden.
     * Defaults to true.
     * @param {?} chipAddition
     * @return {?}
     */
    set chipAddition(chipAddition) {
        this._chipAddition = chipAddition;
        this._toggleInput();
    }
    /**
     * @return {?}
     */
    get chipAddition() {
        return this._chipAddition;
    }
    /**
     * Checks if not in disabled state and if chipAddition is set to 'true'
     * States if a chip can be added and if the input is available
     * @return {?}
     */
    get canAddChip() {
        return this.chipAddition && !this.disabled;
    }
    /**
     * chipRemoval?: boolean
     * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
     * When setting disabled as true, this will be overriden to false.
     * @param {?} chipRemoval
     * @return {?}
     */
    set chipRemoval(chipRemoval) {
        this._chipRemoval = chipRemoval;
    }
    /**
     * @return {?}
     */
    get chipRemoval() {
        return this._chipRemoval;
    }
    /**
     * Checks if not in disabled state and if chipRemoval is set to 'true'
     * States if a chip can be removed
     * @return {?}
     */
    get canRemoveChip() {
        return this.chipRemoval && !this.disabled;
    }
    /**
     * returns the display placeholder
     * @return {?}
     */
    get displayPlaceHolder() {
        if (!this.canAddChip) {
            return '';
        }
        return (this._required) ? `${this.placeholder} *` : this.placeholder;
    }
    /**
     * color?: 'primary' | 'accent' | 'warn'
     * Sets the color for the input and focus/selected state of the chips.
     * Defaults to 'primary'
     * @param {?} color
     * @return {?}
     */
    set color(color) {
        if (color) {
            this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
            this._color = color;
            this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
        }
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * Hostbinding to set the a11y of the TdChipsComponent depending on its state
     * @return {?}
     */
    get tabIndex() {
        return this.disabled ? -1 : this._tabIndex;
    }
    /**
     * Listens to host focus event to act on it
     * @param {?} event
     * @return {?}
     */
    focusListener(event) {
        // should only focus if its not via mousedown to prevent clashing with autocomplete
        if (!this._isMousedown) {
            this.focus();
        }
        event.preventDefault();
    }
    /**
     * Listens to host mousedown event to act on it
     * @param {?} event
     * @return {?}
     */
    mousedownListener(event) {
        // sets a flag to know if there was a mousedown and then it returns it back to false
        this._isMousedown = true;
        timer().toPromise().then(() => {
            this._isMousedown = false;
        });
    }
    /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     * @param {?} event
     * @return {?}
     */
    clickListener(event) {
        /** @type {?} */
        const clickTarget = (/** @type {?} */ (event.target));
        if (clickTarget === this._elementRef.nativeElement ||
            clickTarget.className.indexOf('td-chips-wrapper') > -1) {
            this.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * Listens to host keydown event to act on it depending on the keypress
     * @param {?} event
     * @return {?}
     */
    keydownListener(event) {
        switch (event.keyCode) {
            case TAB:
                // if tabing out, then unfocus the component
                timer().toPromise().then(() => {
                    this.removeFocusedState();
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inputControl.valueChanges.pipe(debounceTime(this.debounce)).subscribe((value) => {
            this.onInputChange.emit(value ? value : '');
        });
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._watchOutsideClick();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // Throw onChange event only if array changes size.
        if (this.value && this.value.length !== this._length) {
            this._length = this.value.length;
            this.onChange(this.value);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._outsideClickSubs.unsubscribe();
    }
    /**
     * @return {?}
     */
    _setInternalClick() {
        this._internalClick = true;
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        this._toggleInput();
    }
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     * @return {?}
     */
    _handleAddChip() {
        /** @type {?} */
        let value;
        if (this.requireMatch) {
            /** @type {?} */
            let selectedOptions = this._options.toArray().filter((option) => {
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
    }
    /**
     * Method thats exectuted when trying to add a value as chip
     * returns 'true' if successful, 'false' if it fails.
     * @param {?} value
     * @return {?}
     */
    addChip(value) {
        /**
         * add a debounce ms delay when reopening the autocomplete to give it time
         * to rerender the next list and at the correct spot
         */
        this._closeAutocomplete();
        timer(this.debounce).toPromise().then(() => {
            this.setFocusedState();
            this._setFirstOptionActive();
            this._openAutocomplete();
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
    }
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     * @param {?} index
     * @return {?}
     */
    removeChip(index) {
        /** @type {?} */
        let removedValues = this.value.splice(index, 1);
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
    }
    /**
     * Sets blur of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    _handleChipBlur(event, value) {
        this.onChipBlur.emit(value);
    }
    /**
     * Sets focus of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    _handleChipFocus(event, value) {
        this.setFocusedState();
        this.onChipFocus.emit(value);
    }
    /**
     * @return {?}
     */
    _handleFocus() {
        this.setFocusedState();
        this._setFirstOptionActive();
        return true;
    }
    /**
     * Sets focus state of the component
     * @return {?}
     */
    setFocusedState() {
        if (!this.disabled) {
            this._focused = true;
            this._tabIndex = -1;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Removes focus state of the component
     * @return {?}
     */
    removeFocusedState() {
        this._focused = false;
        this._tabIndex = 0;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     * @return {?}
     */
    focus() {
        if (this.canAddChip) {
            this._inputChild.focus();
        }
        else if (!this.disabled) {
            this._focusFirstChip();
        }
    }
    /**
     * Passes relevant input key presses.
     * @param {?} event
     * @return {?}
     */
    _inputKeydown(event) {
        switch (event.keyCode) {
            case UP_ARROW:
                /**
                 * Since the first item is highlighted on [requireMatch], we need to inactivate it
                 * when pressing the up key
                 */
                if (this.requireMatch) {
                    /** @type {?} */
                    let length = this._options.length;
                    if (length > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
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
    }
    /**
     * Passes relevant chip key presses.
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    _chipKeydown(event, index) {
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
    }
    /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     * @return {?}
     */
    _removeInputDisplay() {
        return '';
    }
    /**
     * Method to open the autocomplete manually if its not already opened
     * @return {?}
     */
    _openAutocomplete() {
        if (!this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.openPanel();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Method to close the autocomplete manually if its not already closed
     * @return {?}
     */
    _closeAutocomplete() {
        if (this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.closePanel();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Get total of chips
     * @return {?}
     */
    get _totalChips() {
        /** @type {?} */
        let chips = this._chipsChildren.toArray();
        return chips.length;
    }
    /**
     * Method to focus a desired chip by index
     * @param {?} index
     * @return {?}
     */
    _focusChip(index) {
        /** check to see if index exists in the array before focusing */
        if (index > -1 && this._totalChips > index) {
            this._chipsChildren.toArray()[index].focus();
        }
    }
    /**
     * Method to focus first chip
     * @return {?}
     */
    _focusFirstChip() {
        this._focusChip(0);
    }
    /**
     * Method to focus last chip
     * @return {?}
     */
    _focusLastChip() {
        this._focusChip(this._totalChips - 1);
    }
    /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     * @return {?}
     */
    _toggleInput() {
        if (this.canAddChip) {
            this.inputControl.enable();
        }
        else {
            this.inputControl.disable();
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Sets first option as active to let the user know which one will be added when pressing enter
     * Only if [requireMatch] has been set
     * @return {?}
     */
    _setFirstOptionActive() {
        if (this.requireMatch) {
            // need to use a timer here to wait until the autocomplete has been opened (end of queue)
            timer().toPromise().then(() => {
                if (this.focused && this._options && this._options.length > 0) {
                    // clean up of previously active options
                    this._options.toArray().forEach((option) => {
                        option.setInactiveStyles();
                    });
                    // set the first one as active
                    this._options.toArray()[0].setActiveStyles();
                    this._internalActivateOption = true;
                    this._changeDetectorRef.markForCheck();
                }
            });
        }
    }
    /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     * @return {?}
     */
    _watchOutsideClick() {
        if (this._document) {
            this._outsideClickSubs = merge(fromEvent(this._document, 'click'), fromEvent(this._document, 'touchend')).pipe(debounceTime(this._touchendDebounce), filter((event) => {
                /** @type {?} */
                const clickTarget = (/** @type {?} */ (event.target));
                setTimeout(() => {
                    this._internalClick = false;
                });
                return this.focused &&
                    (clickTarget !== this._elementRef.nativeElement) &&
                    !this._elementRef.nativeElement.contains(clickTarget) && !this._internalClick;
            })).subscribe(() => {
                if (this.focused) {
                    this._autocompleteTrigger.closePanel();
                    this.removeFocusedState();
                    this.onTouched();
                    this._changeDetectorRef.markForCheck();
                }
            });
        }
        return undefined;
    }
}
TdChipsComponent.decorators = [
    { type: Component, args: [{
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdChipsComponent),
                        multi: true,
                    }],
                selector: 'td-chips',
                inputs: ['disabled', 'value'],
                template: "<div class=\"td-chips-wrapper\"\n     [class.td-chips-stacked]=\"stacked\"\n     [class.td-chips-input-before-position]=\"inputPosition === 'before'\">\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip [class.td-chip-disabled]=\"disabled\"\n                   [class.td-chip-after-pad]=\"!canRemoveChip\"\n                   [disableRipple]=\"true\"\n                   [color]=\"color\"\n                   (keydown)=\"_chipKeydown($event, index)\"\n                   (blur)=\"_handleChipBlur($event, chip)\"\n                   (focus)=\"_handleChipFocus($event, chip)\">\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\">\n          </ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field floatLabel=\"never\"\n                  class=\"td-chips-form-field\"\n                  [style.width.px]=\"canAddChip ? null : 0\"\n                  [style.height.px]=\"canAddChip ? null : 0\"\n                  [color]=\"color\">\n    <input matInput\n            #input\n            [tabIndex]=\"-1\"\n            [matAutocomplete]=\"autocomplete\"\n            [formControl]=\"inputControl\"\n            [placeholder]=\"displayPlaceHolder\"\n            (keydown)=\"_inputKeydown($event)\"\n            (keyup.enter)=\"_handleAddChip()\"\n            (focus)=\"_handleFocus()\">\n  </mat-form-field>\n  <mat-autocomplete #autocomplete=\"matAutocomplete\"\n                   [displayWith]=\"_removeInputDisplay\"\n                   (optionSelected)=\"addChip($event.option.value)\">\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\">\n        </ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\"\n      [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\"\n        [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;max-width:100%;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:start;justify-content:start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-ms-flex-order:-20;order:-20;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
            }] }
];
/** @nocollapse */
TdChipsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
];
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
    focusListener: [{ type: HostListener, args: ['focus', ['$event'],] }],
    mousedownListener: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    clickListener: [{ type: HostListener, args: ['click', ['$event'],] }],
    keydownListener: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
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
    TdChipsComponent.prototype._required;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvIiwic291cmNlcyI6WyJjaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVcsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUM5RyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFDN0csaUJBQWlCLEVBQTRCLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFnQixHQUFHLEVBQVEsTUFBTSx1QkFBdUIsQ0FBQztBQUMxSSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RSxPQUFP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O0lBQ3JELHlDQUFzQzs7SUFDdEMsd0NBQXFDOztJQUNyQyxvQ0FBa0M7O0lBQ2xDLHFDQUFtQzs7SUFDbkMscUNBQThCOztJQUM5Qiw2Q0FBd0M7O0lBRXhDLDBDQUFnQzs7SUFDaEMsbURBQXlDOztJQUV6Qyx3Q0FBNkM7O0lBQzdDLHVDQUEyQzs7SUFDM0MsZ0RBQWdGOztJQUNoRiwwQ0FBMEQ7O0lBRTFELHlDQUE4RDs7SUFDOUQsdURBQXdHOztJQUV4RyxvQ0FBd0Q7Ozs7O0lBWXhELHdDQUE4Qzs7Ozs7O0lBNEg5Qyx1Q0FBMEM7Ozs7OztJQU0xQyxvQ0FBMEM7Ozs7Ozs7SUF3QjFDLGlDQUFrRTs7Ozs7OztJQU9sRSxvQ0FBd0U7Ozs7Ozs7SUFPeEUseUNBQXdGOzs7Ozs7O0lBT3hGLHVDQUE4RTs7Ozs7OztJQU85RSxzQ0FBNEU7O0lBVWhFLHVDQUErQjs7SUFDL0IscUNBQTRCOztJQUM1QixxQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIGZvcndhcmRSZWYsIERvQ2hlY2ssIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE9uSW5pdCwgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLCBPcHRpb25hbCwgSW5qZWN0LCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBIb3N0QmluZGluZywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFVQX0FSUk9XLCBET1dOX0FSUk9XLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBERUxFVEUsIEJBQ0tTUEFDRSwgRU5URVIsIFNQQUNFLCBUQUIsIEhPTUUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgTWF0Q2hpcCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0T3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB0aW1lciwgbWVyZ2UsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtY2hpcF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hpcERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWF1dG9jb21wbGV0ZS1vcHRpb25dbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRkQ2hpcHNCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZENoaXBzTWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihtaXhpbkRpc2FibGVkKFRkQ2hpcHNCYXNlKSwgW10pO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hpcHNDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1jaGlwcycsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwcy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hpcHNDb21wb25lbnQgZXh0ZW5kcyBfVGRDaGlwc01peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgRG9DaGVjaywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tTdWJzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgcHJpdmF0ZSBfaXNNb3VzZWRvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9pdGVtczogYW55W107XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RhY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlTWF0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuICBwcml2YXRlIF9pbnB1dFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInO1xuICBwcml2YXRlIF9jaGlwQWRkaXRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9jaGlwUmVtb3ZhbDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdGFiSW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvdWNoZW5kRGVib3VuY2U6IG51bWJlciA9IDEwMDtcblxuICBfaW50ZXJuYWxDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBfaW50ZXJuYWxBY3RpdmF0ZU9wdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgX25hdGl2ZUlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE1hdElucHV0KSBfaW5wdXRDaGlsZDogTWF0SW5wdXQ7XG4gIEBWaWV3Q2hpbGQoTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcikgX2F1dG9jb21wbGV0ZVRyaWdnZXI6IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXI7XG4gIEBWaWV3Q2hpbGRyZW4oTWF0Q2hpcCkgX2NoaXBzQ2hpbGRyZW46IFF1ZXJ5TGlzdDxNYXRDaGlwPjtcblxuICBAQ29udGVudENoaWxkKFRkQ2hpcERpcmVjdGl2ZSkgX2NoaXBUZW1wbGF0ZTogVGRDaGlwRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlKSBfYXV0b2NvbXBsZXRlT3B0aW9uVGVtcGxhdGU6IFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlO1xuXG4gIEBWaWV3Q2hpbGRyZW4oTWF0T3B0aW9uKSBfb3B0aW9uczogUXVlcnlMaXN0PE1hdE9wdGlvbj47XG5cbiAgLyoqXG4gICAqIEZsYWcgdGhhdCBpcyB0cnVlIHdoZW4gYXV0b2NvbXBsZXRlIGlzIGZvY3VzZWQuXG4gICAqL1xuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtQ29udHJvbCBmb3IgdGhlIG1hdElucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgLyoqXG4gICAqIGl0ZW1zPzogYW55W11cbiAgICogUmVuZGVycyB0aGUgYG1hdC1hdXRvY29tcGxldGVgIHdpdGggdGhlIHByb3ZpZGVkIGxpc3QgdG8gZGlzcGxheSBhcyBvcHRpb25zLlxuICAgKi9cbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBpdGVtcyhpdGVtczogYW55W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGl0ZW1zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogc3RhY2tlZD86IGJvb2xlYW5cbiAgICogU2V0IHN0YWNrZWQgb3IgaG9yaXpvbnRhbCBjaGlwcyBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCdzdGFja2VkJylcbiAgc2V0IHN0YWNrZWQoc3RhY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YWNrZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc3RhY2tlZCk7XG4gIH1cbiAgZ2V0IHN0YWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrZWQ7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRQb3NpdGlvbj86ICdiZWZvcmUnIHwgJ2FmdGVyJ1xuICAgKiBTZXQgaW5wdXQgcG9zaXRpb24gYmVmb3JlIG9yIGFmdGVyIHRoZSBjaGlwcy5cbiAgICogRGVmYXVsdHMgdG8gJ2FmdGVyJy5cbiAgICovXG4gIEBJbnB1dCgnaW5wdXRQb3NpdGlvbicpXG4gIHNldCBpbnB1dFBvc2l0aW9uKGlucHV0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJykge1xuICAgIHRoaXMuX2lucHV0UG9zaXRpb24gPSBpbnB1dFBvc2l0aW9uO1xuICB9XG4gIGdldCBpbnB1dFBvc2l0aW9uKCk6ICdiZWZvcmUnIHwgJ2FmdGVyJyB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZU1hdGNoPzogYm9vbGVhblxuICAgKiBCbG9ja3MgY3VzdG9tIGlucHV0cyBhbmQgb25seSBhbGxvd3Mgc2VsZWN0aW9ucyBmcm9tIHRoZSBhdXRvY29tcGxldGUgbGlzdC5cbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZU1hdGNoJylcbiAgc2V0IHJlcXVpcmVNYXRjaChyZXF1aXJlTWF0Y2g6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlTWF0Y2ggPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxdWlyZU1hdGNoKTtcbiAgfVxuICBnZXQgcmVxdWlyZU1hdGNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZWQ/OiBib29sZWFuXG4gICAqIFZhbHVlIGlzIHNldCB0byB0cnVlIGlmIGF0IGxlYXN0IG9uZSBjaGlwIGlzIG5lZWRlZFxuICAgKiBEZWZhdWx0cyB0byBmYWxzZVxuICAgKi9cbiAgQElucHV0KCdyZXF1aXJlZCcpXG4gIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVkKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoaXBBZGRpdGlvbj86IGJvb2xlYW5cbiAgICogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gYWRkIGNoaXBzLiBXaGVuIHNldHRpbmcgZGlzYWJsZWQgYXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIG92ZXJyaWRlbi5cbiAgICogRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgnY2hpcEFkZGl0aW9uJylcbiAgc2V0IGNoaXBBZGRpdGlvbihjaGlwQWRkaXRpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGlwQWRkaXRpb24gPSBjaGlwQWRkaXRpb247XG4gICAgdGhpcy5fdG9nZ2xlSW5wdXQoKTtcbiAgfVxuICBnZXQgY2hpcEFkZGl0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlwQWRkaXRpb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcEFkZGl0aW9uIGlzIHNldCB0byAndHJ1ZSdcbiAgICogU3RhdGVzIGlmIGEgY2hpcCBjYW4gYmUgYWRkZWQgYW5kIGlmIHRoZSBpbnB1dCBpcyBhdmFpbGFibGVcbiAgICovXG4gIGdldCBjYW5BZGRDaGlwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoaXBBZGRpdGlvbiAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGlwUmVtb3ZhbD86IGJvb2xlYW5cbiAgICogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gcmVtb3ZlIGNoaXBzLiBJZiBpdCBkb2Vzbid0IGV4aXN0IGNoaXAgcmVtbW92YWwgZGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICogV2hlbiBzZXR0aW5nIGRpc2FibGVkIGFzIHRydWUsIHRoaXMgd2lsbCBiZSBvdmVycmlkZW4gdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ2NoaXBSZW1vdmFsJylcbiAgc2V0IGNoaXBSZW1vdmFsKGNoaXBSZW1vdmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hpcFJlbW92YWwgPSBjaGlwUmVtb3ZhbDtcbiAgfVxuICBnZXQgY2hpcFJlbW92YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBSZW1vdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBSZW1vdmFsIGlzIHNldCB0byAndHJ1ZSdcbiAgICogU3RhdGVzIGlmIGEgY2hpcCBjYW4gYmUgcmVtb3ZlZFxuICAgKi9cbiAgZ2V0IGNhblJlbW92ZUNoaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpcFJlbW92YWwgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZGlzcGxheSBwbGFjZWhvbGRlclxuICAgKi9cbiAgZ2V0IGRpc3BsYXlQbGFjZUhvbGRlcigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiAodGhpcy5fcmVxdWlyZWQpID8gYCR7dGhpcy5wbGFjZWhvbGRlcn0gKmAgOiAgdGhpcy5wbGFjZWhvbGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBkZWJvdW5jZT86IG51bWJlclxuICAgKiBEZWJvdW5jZSB0aW1lb3V0IGJldHdlZW4ga2V5cHJlc3Nlcy4gRGVmYXVsdHMgdG8gMjAwLlxuICAgKi9cbiAgQElucHV0KCdkZWJvdW5jZScpIGRlYm91bmNlOiBudW1iZXIgPSAyMDA7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGUgY29sb3IgZm9yIHRoZSBpbnB1dCBhbmQgZm9jdXMvc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGNoaXBzLlxuICAgKiBEZWZhdWx0cyB0byAncHJpbWFyeSdcbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCk6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogYWRkPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGFkZGVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnYWRkJykgb25BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIHJlbW92ZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyByZW1vdmVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgncmVtb3ZlJykgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIGlucHV0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHZhbHVlIGluIHRoZSBhdXRvY29tcGxldGUgaW5wdXQgY2hhbmdlcy5cbiAgICogU2VuZHMgc3RyaW5nIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnaW5wdXRDaGFuZ2UnKSBvbklucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjaGlwRm9jdXM/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgZm9jdXNlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2NoaXBGb2N1cycpIG9uQ2hpcEZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBibHVyPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGJsdXJyZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCdjaGlwQmx1cicpIG9uQ2hpcEJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEhvc3RiaW5kaW5nIHRvIHNldCB0aGUgYTExeSBvZiB0aGUgVGRDaGlwc0NvbXBvbmVudCBkZXBlbmRpbmcgb24gaXRzIHN0YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogdGhpcy5fdGFiSW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgZm9jdXMgZXZlbnQgdG8gYWN0IG9uIGl0XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIGZvY3VzTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBzaG91bGQgb25seSBmb2N1cyBpZiBpdHMgbm90IHZpYSBtb3VzZWRvd24gdG8gcHJldmVudCBjbGFzaGluZyB3aXRoIGF1dG9jb21wbGV0ZVxuICAgIGlmICghdGhpcy5faXNNb3VzZWRvd24pIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgbW91c2Vkb3duIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgbW91c2Vkb3duTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAgLy8gc2V0cyBhIGZsYWcgdG8ga25vdyBpZiB0aGVyZSB3YXMgYSBtb3VzZWRvd24gYW5kIHRoZW4gaXQgcmV0dXJucyBpdCBiYWNrIHRvIGZhbHNlXG4gICAgdGhpcy5faXNNb3VzZWRvd24gPSB0cnVlO1xuICAgIHRpbWVyKCkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9pc01vdXNlZG93biA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGNsaWNraW5nIG9uIDpob3N0IG9yIGB0ZC1jaGlwcy13cmFwcGVyYCwgdGhlbiB3ZSBzdG9wIHRoZSBjbGljayBwcm9wYWdhdGlvbiBzbyB0aGUgYXV0b2NvbXBsZXRlXG4gICAqIGRvZXNudCBjbG9zZSBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja0xpc3RlbmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNsaWNrVGFyZ2V0OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGNsaWNrVGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgfHxcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3RkLWNoaXBzLXdyYXBwZXInKSA+IC0xKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gaG9zdCBrZXlkb3duIGV2ZW50IHRvIGFjdCBvbiBpdCBkZXBlbmRpbmcgb24gdGhlIGtleXByZXNzXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIFRBQjpcbiAgICAgICAgLy8gaWYgdGFiaW5nIG91dCwgdGhlbiB1bmZvY3VzIHRoZSBjb21wb25lbnRcbiAgICAgICAgdGltZXIoKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVTQ0FQRTpcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0Q2hpbGQuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSksXG4gICAgKS5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMub25JbnB1dENoYW5nZS5lbWl0KHZhbHVlID8gdmFsdWUgOiAnJyk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fd2F0Y2hPdXRzaWRlQ2xpY2soKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAvLyBUaHJvdyBvbkNoYW5nZSBldmVudCBvbmx5IGlmIGFycmF5IGNoYW5nZXMgc2l6ZS5cbiAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCAhPT0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICB0aGlzLl9sZW5ndGggPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tTdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBfc2V0SW50ZXJuYWxDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnRlcm5hbENsaWNrID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl90b2dnbGVJbnB1dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZSBhIG5ldyBjaGlwIGZyb20gdGhlIGF1dG9jb21wbGV0ZS5cbiAgICogSXQgY2hlY2sgaWYgW3JlcXVpcmVNYXRjaF0gaXMgZW5hYmxlZCwgYW5kIHRyaWVzIHRvIGFkZCB0aGUgZmlyc3QgYWN0aXZlIG9wdGlvblxuICAgKiBlbHNlIGlmIGp1c3QgYWRkcyB0aGUgdmFsdWUgdGhhdHMgb24gdGhlIGlucHV0XG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICBfaGFuZGxlQWRkQ2hpcCgpOiBib29sZWFuIHtcbiAgICBsZXQgdmFsdWU6IGFueTtcbiAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgIGxldCBzZWxlY3RlZE9wdGlvbnM6IE1hdE9wdGlvbltdID0gdGhpcy5fb3B0aW9ucy50b0FycmF5KCkuZmlsdGVyKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICBzZWxlY3RlZE9wdGlvbnNbMF0uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhIHNlbGVjdGlvbiwgdGhlbiB1c2UgdGhhdFxuICAgICAgLy8gZWxzZSB1c2UgdGhlIGlucHV0IHZhbHVlIGFzIGNoaXBcbiAgICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuYWN0aXZlT3B0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9pbnB1dENoaWxkLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hZGRDaGlwKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdHMgZXhlY3R1dGVkIHdoZW4gdHJ5aW5nIHRvIGFkZCBhIHZhbHVlIGFzIGNoaXBcbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIGFkZENoaXAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8qKlxuICAgICAqIGFkZCBhIGRlYm91bmNlIG1zIGRlbGF5IHdoZW4gcmVvcGVuaW5nIHRoZSBhdXRvY29tcGxldGUgdG8gZ2l2ZSBpdCB0aW1lXG4gICAgICogdG8gcmVyZW5kZXIgdGhlIG5leHQgbGlzdCBhbmQgYXQgdGhlIGNvcnJlY3Qgc3BvdFxuICAgICAqL1xuICAgIFxuICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgdGltZXIodGhpcy5kZWJvdW5jZSkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgICAgdGhpcy5fc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTtcbiAgICAgIHRoaXMuX29wZW5BdXRvY29tcGxldGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVsXG4gICAgaWYgKHRoaXMudmFsdWUuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgdGhpcy5vbkFkZC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdHJ5aW5nIHRvIHJlbW92ZSBhIGNoaXAuXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICByZW1vdmVDaGlwKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBsZXQgcmVtb3ZlZFZhbHVlczogYW55W10gPSB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHJlbW92ZWRWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGRlbGV0aW5nIGxhc3Qgc2luZ2xlIGNoaXAsIHRvIGZvY3VzIGlucHV0IGFmdGVyd2FyZHNcbiAgICAgKiBFbHNlIGNoZWNrIGlmIGl0cyBub3QgdGhlIGxhc3QgY2hpcCBvZiB0aGUgbGlzdCB0byBmb2N1cyB0aGUgbmV4dCBvbmUuXG4gICAgICovXG4gICAgaWYgKGluZGV4ID09PSAodGhpcy5fdG90YWxDaGlwcyAtIDEpICYmIGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7ICAgICBcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSkge1xuICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4ICsgMSk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IDApIHtcbiAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHRoaXMub25SZW1vdmUuZW1pdChyZW1vdmVkVmFsdWVzWzBdKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGJsdXIgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hpcEJsdXIuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvZiBjaGlwIGFuZCBzZW5kcyBvdXQgZXZlbnRcbiAgICovXG4gIF9oYW5kbGVDaGlwRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGlwRm9jdXMuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc2V0Rm9jdXNlZFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZm9jdXMgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlRm9jdXNlZFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl90YWJJbmRleCA9IDA7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvZ3JhbW1hdGljYWxseSBmb2N1cyB0aGUgaW5wdXQgb3IgZmlyc3QgY2hpcC4gU2luY2UgaXRzIHRoZSBjb21wb25lbnQgZW50cnkgcG9pbnRcbiAgICogZGVwZW5kaW5nIGlmIGEgdXNlciBjYW4gYWRkIG9yIHJlbW92ZSBjaGlwc1xuICAgKi9cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCkge1xuICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBpbnB1dCBrZXkgcHJlc3Nlcy5cbiAgICovXG4gIF9pbnB1dEtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW5jZSB0aGUgZmlyc3QgaXRlbSBpcyBoaWdobGlnaHRlZCBvbiBbcmVxdWlyZU1hdGNoXSwgd2UgbmVlZCB0byBpbmFjdGl2YXRlIGl0XG4gICAgICAgICAqIHdoZW4gcHJlc3NpbmcgdGhlIHVwIGtleVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5fb3B0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uYWN0aXZlICYmIHRoaXMuX2ludGVybmFsQWN0aXZhdGVPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIGlucHV0IGlzIGVtcHR5IHdoZW4gcHJlc3NpbmcgbGVmdCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBsYXN0IGNoaXAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dENoaWxkLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNMYXN0Q2hpcCgpO1xuICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIC8qKiBDaGVjayB0byBzZWUgaWYgaW5wdXQgaXMgZW1wdHkgd2hlbiBwcmVzc2luZyByaWdodCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBmaXJzdCBjaGlwICovXG4gICAgICAgIGlmICghdGhpcy5faW5wdXRDaGlsZC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzZXMgcmVsZXZhbnQgY2hpcCBrZXkgcHJlc3Nlcy5cbiAgICovXG4gIF9jaGlwS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBERUxFVEU6XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiB3ZSBjYW4gZGVsZXRlIGEgY2hpcCAqL1xuICAgICAgICBpZiAodGhpcy5jYW5SZW1vdmVDaGlwKSB7XG4gICAgICAgICB0aGlzLnJlbW92ZUNoaXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiBsZWZ0L2Rvd24gYXJyb3cgd2FzIHByZXNzZWQgd2hpbGUgZm9jdXNpbmcgdGhlIGZpcnN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgbGVmdFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiByaWdodC91cCBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgbGFzdCBjaGlwIHRvIGZvY3VzIGlucHV0IG5leHRcbiAgICAgICAgICogQWxzbyBjaGVjayBpZiBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5fdG90YWxDaGlwcyAtIDEpKSB7XG4gICAgICAgICAgLy8gb25seSB0cnkgdG8gdGFyZ2V0IGlucHV0IGlmIHByZXNzaW5nIHJpZ2h0XG4gICAgICAgICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCAmJiBldmVudC5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8ICh0aGlzLl90b3RhbENoaXBzIC0gMSkpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBmcm9tIGRpc3BsYXkgdGhlIHZhbHVlIGFkZGVkIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBzaW5jZSBpdCBnb2VzIGRpcmVjdGx5IGFzIGNoaXAuXG4gICAqL1xuICBfcmVtb3ZlSW5wdXREaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBvcGVuIHRoZSBhdXRvY29tcGxldGUgbWFudWFsbHkgaWYgaXRzIG5vdCBhbHJlYWR5IG9wZW5lZFxuICAgKi9cbiAgX29wZW5BdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5vcGVuUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBfY2xvc2VBdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgb2YgY2hpcHNcbiAgICovXG4gIGdldCBfdG90YWxDaGlwcygpOiBudW1iZXIge1xuICAgIGxldCBjaGlwczogTWF0Q2hpcFtdID0gdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KCk7XG4gICAgcmV0dXJuIGNoaXBzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZm9jdXMgYSBkZXNpcmVkIGNoaXAgYnkgaW5kZXhcbiAgICovXG4gIHByaXZhdGUgX2ZvY3VzQ2hpcChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgLyoqIGNoZWNrIHRvIHNlZSBpZiBpbmRleCBleGlzdHMgaW4gdGhlIGFycmF5IGJlZm9yZSBmb2N1c2luZyAqL1xuICAgIGlmIChpbmRleCA+IC0xICYmIHRoaXMuX3RvdGFsQ2hpcHMgPiBpbmRleCkge1xuICAgICAgdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KClbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBmaXJzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzRmlyc3RDaGlwKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzQ2hpcCgwKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgdG8gZm9jdXMgbGFzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzTGFzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdG9nZ2xlIHRoZSBkaXNhYmxlIHN0YXRlIG9mIGlucHV0XG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBBZGRpdGlvbiBpcyBzZXQgdG8gJ3RydWUnXG4gICAqL1xuICBwcml2YXRlIF90b2dnbGVJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dENvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZpcnN0IG9wdGlvbiBhcyBhY3RpdmUgdG8gbGV0IHRoZSB1c2VyIGtub3cgd2hpY2ggb25lIHdpbGwgYmUgYWRkZWQgd2hlbiBwcmVzc2luZyBlbnRlclxuICAgKiBPbmx5IGlmIFtyZXF1aXJlTWF0Y2hdIGhhcyBiZWVuIHNldFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIGhlcmUgdG8gd2FpdCB1bnRpbCB0aGUgYXV0b2NvbXBsZXRlIGhhcyBiZWVuIG9wZW5lZCAoZW5kIG9mIHF1ZXVlKVxuICAgICAgdGltZXIoKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGNsZWFuIHVwIG9mIHByZXZpb3VzbHkgYWN0aXZlIG9wdGlvbnNcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKS5mb3JFYWNoKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBvbmUgYXMgYWN0aXZlXG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlIHRoZSBmb2N1c1xuICAgKiBUaGUgYXV0b2NvbXBsZXRlIHBhbmVsIGlzIGNvbnNpZGVyZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgc28gd2VcbiAgICogbmVlZCB0byB1c2UgYSBmbGFnIHRvIGZpbmQgb3V0IHdoZW4gaXRzIGNsaWNrZWQuXG4gICAqL1xuICBwcml2YXRlIF93YXRjaE91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMgPSBtZXJnZShcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAnY2xpY2snKSxcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAndG91Y2hlbmQnKSxcbiAgICAgICkucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuX3RvdWNoZW5kRGVib3VuY2UpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNlZCAmJlxuICAgICAgICAgICAgICAgICAgKGNsaWNrVGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpICYmXG4gICAgICAgICAgICAgICAgICAhdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJiAhdGhpcy5faW50ZXJuYWxDbGljaztcbiAgICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5jbG9zZVBhbmVsKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIl19