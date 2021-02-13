/**
 * @fileoverview added by tsickle
 * Generated from: chips.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this._inputValueChangesSubs = Subscription.EMPTY;
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
        this.add = new EventEmitter();
        /**
         * remove?: function
         * Method to be executed when a chip is removed.
         * Sends chip value as event.
         */
        this.remove = new EventEmitter();
        /**
         * inputChange?: function
         * Method to be executed when the value in the autocomplete input changes.
         * Sends string value as event.
         */
        this.inputChange = new EventEmitter();
        /**
         * chipFocus?: function
         * Method to be executed when a chip is focused.
         * Sends chip value as event.
         */
        this.chipFocus = new EventEmitter();
        /**
         * blur?: function
         * Method to be executed when a chip is blurred.
         * Sends chip value as event.
         */
        this.chipBlur = new EventEmitter();
        /**
         * compareWith? function
         * Function used to check whether a chip value already exists.
         * Defaults to strict equality comparison ===
         */
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => {
            return o1 === o2;
        });
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
        return this._required ? `${this.placeholder} *` : this.placeholder;
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
        timer()
            .toPromise()
            .then((/**
         * @return {?}
         */
        () => {
            this._isMousedown = false;
        }));
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
        if (clickTarget === this._elementRef.nativeElement || clickTarget.className.indexOf('td-chips-wrapper') > -1) {
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
                timer()
                    .toPromise()
                    .then((/**
                 * @return {?}
                 */
                () => {
                    this.removeFocusedState();
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._inputValueChangesSubs = this.inputControl.valueChanges
            .pipe(debounceTime(this.debounce))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.inputChange.emit(value ? value : '');
        }));
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
        this._inputValueChangesSubs.unsubscribe();
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
            const selectedOptions = this._options.toArray().filter((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
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
        timer(this.debounce)
            .toPromise()
            .then((/**
         * @return {?}
         */
        () => {
            this.setFocusedState();
            this._setFirstOptionActive();
            this._openAutocomplete();
        }));
        this.inputControl.setValue('');
        // check if value is already part of the model
        if (this.value.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.compareWith(item, value))) > -1) {
            return false;
        }
        this.value.push(value);
        this.add.emit(value);
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
        const removedValues = this.value.splice(index, 1);
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
    }
    /**
     * Sets blur of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    _handleChipBlur(event, value) {
        this.chipBlur.emit(value);
    }
    /**
     * Sets focus of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    _handleChipFocus(event, value) {
        this.setFocusedState();
        this.chipFocus.emit(value);
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
                    const length = this._options.length;
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
        const chips = this._chipsChildren.toArray();
        return chips.length;
    }
    /**
     * Method to focus a desired chip by index
     * @private
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
     * @private
     * @return {?}
     */
    _focusFirstChip() {
        this._focusChip(0);
    }
    /**
     * Method to focus last chip
     * @private
     * @return {?}
     */
    _focusLastChip() {
        this._focusChip(this._totalChips - 1);
    }
    /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     * @private
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
     * @private
     * @return {?}
     */
    _setFirstOptionActive() {
        if (this.requireMatch) {
            // need to use a timer here to wait until the autocomplete has been opened (end of queue)
            timer()
                .toPromise()
                .then((/**
             * @return {?}
             */
            () => {
                if (this.focused && this._options && this._options.length > 0) {
                    // clean up of previously active options
                    this._options.toArray().forEach((/**
                     * @param {?} option
                     * @return {?}
                     */
                    (option) => {
                        option.setInactiveStyles();
                    }));
                    // set the first one as active
                    this._options.toArray()[0].setActiveStyles();
                    this._internalActivateOption = true;
                    this._changeDetectorRef.markForCheck();
                }
            }));
        }
    }
    /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     * @private
     * @return {?}
     */
    _watchOutsideClick() {
        if (this._document) {
            this._outsideClickSubs = merge(fromEvent(this._document, 'click'), fromEvent(this._document, 'touchend'))
                .pipe(debounceTime(this._touchendDebounce), filter((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                const clickTarget = (/** @type {?} */ (event.target));
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._internalClick = false;
                }));
                return (this.focused &&
                    clickTarget !== this._elementRef.nativeElement &&
                    !this._elementRef.nativeElement.contains(clickTarget) &&
                    !this._internalClick);
            })))
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (this.focused) {
                    this._autocompleteTrigger.closePanel();
                    this.removeFocusedState();
                    this.onTouched();
                    this._changeDetectorRef.markForCheck();
                }
            }));
        }
        return undefined;
    }
}
TdChipsComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChipsComponent)),
                        multi: true,
                    },
                ],
                selector: 'td-chips',
                inputs: ['disabled', 'value'],
                template: "<div\n  class=\"td-chips-wrapper\"\n  [class.td-chips-stacked]=\"stacked\"\n  [class.td-chips-input-before-position]=\"inputPosition === 'before'\"\n>\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip\n      [class.td-chip-disabled]=\"disabled\"\n      [class.td-chip-after-pad]=\"!canRemoveChip\"\n      [disableRipple]=\"true\"\n      [color]=\"color\"\n      (keydown)=\"_chipKeydown($event, index)\"\n      (blur)=\"_handleChipBlur($event, chip)\"\n      (focus)=\"_handleChipFocus($event, chip)\"\n    >\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{ chip }}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\"\n          ></ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field\n    floatLabel=\"never\"\n    class=\"td-chips-form-field\"\n    [style.width.px]=\"canAddChip ? null : 0\"\n    [style.height.px]=\"canAddChip ? null : 0\"\n    [color]=\"color\"\n  >\n    <input\n      matInput\n      #input\n      [tabIndex]=\"-1\"\n      [matAutocomplete]=\"autocomplete\"\n      [formControl]=\"inputControl\"\n      [placeholder]=\"displayPlaceHolder\"\n      (keydown)=\"_inputKeydown($event)\"\n      (keyup.enter)=\"_handleAddChip()\"\n      (focus)=\"_handleFocus()\"\n    />\n  </mat-form-field>\n  <mat-autocomplete\n    #autocomplete=\"matAutocomplete\"\n    [displayWith]=\"_removeInputDisplay\"\n    (optionSelected)=\"addChip($event.option.value)\"\n  >\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{ item }}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\"\n        ></ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\" [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\" [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;min-height:48px;padding:0 5px}:host .td-chips-wrapper{-ms-flex-align:start;-ms-flex-direction:row;-ms-flex-wrap:wrap;align-items:flex-start;display:-ms-flexbox;display:flex;flex-direction:row;flex-wrap:wrap;min-height:42px}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{border-radius:16px;box-sizing:border-box;cursor:default;display:inline-block;margin:8px 8px 0 0;max-width:100%;position:relative}[dir=rtl] :host ::ng-deep .mat-basic-chip,body[dir=rtl] :host ::ng-deep .mat-basic-chip,html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{font-size:13px;line-height:32px;min-height:32px;padding:0 0 0 12px}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip,body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip,html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{-ms-flex:0 0 auto;-ms-flex-align:center;-ms-flex-order:-20;-ms-flex-pack:center;align-items:center;border-radius:50%;box-sizing:border-box;display:inline-block;flex:0 0 auto;height:32px;justify-content:center;margin:0 8px 0 -12px;order:-20;text-align:center;width:32px}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar],body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar],html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad,body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad,html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{font-size:21px;line-height:22px;margin:0 4px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{bottom:0;height:1px;position:relative;width:100%}:host .mat-form-field-underline.mat-disabled{background-color:rgba(0,0,0,0);background-position:0;bottom:-4px}:host .mat-form-field-underline .mat-form-field-ripple{-ms-transform:scaleX(.5);-ms-transform-origin:50%;height:2px;opacity:0;position:absolute;top:0;transform:scaleX(.5);transform-origin:50%;transition:background-color .3s cubic-bezier(.55,0,.55,.2);visibility:hidden;width:100%}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused,:host.ng-invalid .mat-form-field-underline .mat-form-field-ripple{-ms-transform:scaleX(1);opacity:1;transform:scaleX(1);transition:transform .15s linear,background-color .3s cubic-bezier(.55,0,.55,.2);visibility:visible}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2NoaXBzLyIsInNvdXJjZXMiOlsiY2hpcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFFVixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFHakIsV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFDTCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixTQUFTLEVBR1QsR0FBRyxHQUVKLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENB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MEJBb0IzQixLQUFLOzRCQU9MLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBWWhDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBZXBDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBYWhDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUF2U25DLDZDQUE2RDs7Ozs7SUFDN0Qsa0RBQWtFOzs7OztJQUNsRSx3Q0FBc0M7Ozs7O0lBRXRDLGtDQUFzQjs7Ozs7SUFDdEIsbUNBQTRCOzs7OztJQUM1QixvQ0FBa0M7Ozs7O0lBQ2xDLHlDQUF1Qzs7Ozs7SUFDdkMsa0NBQTBEOzs7OztJQUMxRCwwQ0FBcUQ7Ozs7O0lBQ3JELHlDQUFzQzs7Ozs7SUFDdEMsd0NBQXFDOzs7OztJQUNyQyxvQ0FBa0M7Ozs7O0lBQ2xDLHFDQUFtQzs7Ozs7SUFDbkMscUNBQThCOzs7OztJQUM5Qiw2Q0FBd0M7O0lBRXhDLDBDQUFnQzs7SUFDaEMsbURBQXlDOztJQUV6Qyx3Q0FBK0Q7O0lBQy9ELHVDQUE2RDs7SUFDN0QsZ0RBQWtHOztJQUNsRywwQ0FBMEQ7O0lBRTFELHlDQUE4RDs7SUFDOUQsdURBQzJEOztJQUUzRCxvQ0FBd0Q7Ozs7O0lBWXhELHdDQUE4Qzs7Ozs7O0lBNEg5Qyx1Q0FBNkI7Ozs7OztJQU03QixvQ0FBZ0M7Ozs7Ozs7SUF3QmhDLCtCQUEyRDs7Ozs7OztJQU8zRCxrQ0FBOEQ7Ozs7Ozs7SUFPOUQsdUNBQXlFOzs7Ozs7O0lBT3pFLHFDQUFpRTs7Ozs7OztJQU9qRSxvQ0FBZ0U7Ozs7Ozs7SUF5QmhFLHVDQUVFOzs7OztJQWhCQSx1Q0FBK0I7Ozs7O0lBQy9CLHFDQUE0Qjs7Ozs7SUFDNUIscUNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBmb3J3YXJkUmVmLFxuICBEb0NoZWNrLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRWxlbWVudFJlZixcbiAgT3B0aW9uYWwsXG4gIEluamVjdCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29udGVudENoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdEJpbmRpbmcsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgVVBfQVJST1csXG4gIERPV05fQVJST1csXG4gIEVTQ0FQRSxcbiAgTEVGVF9BUlJPVyxcbiAgUklHSFRfQVJST1csXG4gIERFTEVURSxcbiAgQkFDS1NQQUNFLFxuICBFTlRFUixcbiAgU1BBQ0UsXG4gIFRBQixcbiAgSE9NRSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE1hdENoaXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdE9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgdGltZXIsIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWNoaXBdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoaXBEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1hdXRvY29tcGxldGUtb3B0aW9uXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZENoaXBzQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRDaGlwc01peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IobWl4aW5EaXNhYmxlZChUZENoaXBzQmFzZSksIFtdKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGlwc0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzZWxlY3RvcjogJ3RkLWNoaXBzJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3ZhbHVlJ10sXG4gIHN0eWxlVXJsczogWycuL2NoaXBzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGlwcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoaXBzQ29tcG9uZW50XG4gIGV4dGVuZHMgX1RkQ2hpcHNNaXhpbkJhc2VcbiAgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIERvQ2hlY2ssIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJQ2FuRGlzYWJsZSB7XG4gIHByaXZhdGUgX291dHNpZGVDbGlja1N1YnM6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfaW5wdXRWYWx1ZUNoYW5nZXNTdWJzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2lzTW91c2Vkb3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdO1xuICBwcml2YXRlIF9sZW5ndGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3N0YWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZU1hdGNoOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcbiAgcHJpdmF0ZSBfaW5wdXRQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2FmdGVyJztcbiAgcHJpdmF0ZSBfY2hpcEFkZGl0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfY2hpcFJlbW92YWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3RhYkluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b3VjaGVuZERlYm91bmNlOiBudW1iZXIgPSAxMDA7XG5cbiAgX2ludGVybmFsQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2ludGVybmFsQWN0aXZhdGVPcHRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIF9uYXRpdmVJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChNYXRJbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgX2lucHV0Q2hpbGQ6IE1hdElucHV0O1xuICBAVmlld0NoaWxkKE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIsIHsgc3RhdGljOiB0cnVlIH0pIF9hdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xuICBAVmlld0NoaWxkcmVuKE1hdENoaXApIF9jaGlwc0NoaWxkcmVuOiBRdWVyeUxpc3Q8TWF0Q2hpcD47XG5cbiAgQENvbnRlbnRDaGlsZChUZENoaXBEaXJlY3RpdmUpIF9jaGlwVGVtcGxhdGU6IFRkQ2hpcERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZSlcbiAgX2F1dG9jb21wbGV0ZU9wdGlvblRlbXBsYXRlOiBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZTtcblxuICBAVmlld0NoaWxkcmVuKE1hdE9wdGlvbikgX29wdGlvbnM6IFF1ZXJ5TGlzdDxNYXRPcHRpb24+O1xuXG4gIC8qKlxuICAgKiBGbGFnIHRoYXQgaXMgdHJ1ZSB3aGVuIGF1dG9jb21wbGV0ZSBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICAvKipcbiAgICogRm9ybUNvbnRyb2wgZm9yIHRoZSBtYXRJbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIC8qKlxuICAgKiBpdGVtcz86IGFueVtdXG4gICAqIFJlbmRlcnMgdGhlIGBtYXQtYXV0b2NvbXBsZXRlYCB3aXRoIHRoZSBwcm92aWRlZCBsaXN0IHRvIGRpc3BsYXkgYXMgb3B0aW9ucy5cbiAgICovXG4gIEBJbnB1dCgnaXRlbXMnKVxuICBzZXQgaXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0YWNrZWQ/OiBib29sZWFuXG4gICAqIFNldCBzdGFja2VkIG9yIGhvcml6b250YWwgY2hpcHMgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnc3RhY2tlZCcpXG4gIHNldCBzdGFja2VkKHN0YWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGFja2VkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHN0YWNrZWQpO1xuICB9XG4gIGdldCBzdGFja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGFja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0UG9zaXRpb24/OiAnYmVmb3JlJyB8ICdhZnRlcidcbiAgICogU2V0IGlucHV0IHBvc2l0aW9uIGJlZm9yZSBvciBhZnRlciB0aGUgY2hpcHMuXG4gICAqIERlZmF1bHRzIHRvICdhZnRlcicuXG4gICAqL1xuICBASW5wdXQoJ2lucHV0UG9zaXRpb24nKVxuICBzZXQgaW5wdXRQb3NpdGlvbihpbnB1dFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicpIHtcbiAgICB0aGlzLl9pbnB1dFBvc2l0aW9uID0gaW5wdXRQb3NpdGlvbjtcbiAgfVxuICBnZXQgaW5wdXRQb3NpdGlvbigpOiAnYmVmb3JlJyB8ICdhZnRlcicge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVpcmVNYXRjaD86IGJvb2xlYW5cbiAgICogQmxvY2tzIGN1c3RvbSBpbnB1dHMgYW5kIG9ubHkgYWxsb3dzIHNlbGVjdGlvbnMgZnJvbSB0aGUgYXV0b2NvbXBsZXRlIGxpc3QuXG4gICAqL1xuICBASW5wdXQoJ3JlcXVpcmVNYXRjaCcpXG4gIHNldCByZXF1aXJlTWF0Y2gocmVxdWlyZU1hdGNoOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZU1hdGNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVNYXRjaCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVNYXRjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZU1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVpcmVkPzogYm9vbGVhblxuICAgKiBWYWx1ZSBpcyBzZXQgdG8gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgY2hpcCBpcyBuZWVkZWRcbiAgICogRGVmYXVsdHMgdG8gZmFsc2VcbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZWQnKVxuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlZCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGlwQWRkaXRpb24/OiBib29sZWFuXG4gICAqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIGFkZCBjaGlwcy4gV2hlbiBzZXR0aW5nIGRpc2FibGVkIGFzIHRydWUsIHRoaXMgd2lsbCBiZSBvdmVycmlkZW4uXG4gICAqIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoJ2NoaXBBZGRpdGlvbicpXG4gIHNldCBjaGlwQWRkaXRpb24oY2hpcEFkZGl0aW9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hpcEFkZGl0aW9uID0gY2hpcEFkZGl0aW9uO1xuICAgIHRoaXMuX3RvZ2dsZUlucHV0KCk7XG4gIH1cbiAgZ2V0IGNoaXBBZGRpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpcEFkZGl0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBBZGRpdGlvbiBpcyBzZXQgdG8gJ3RydWUnXG4gICAqIFN0YXRlcyBpZiBhIGNoaXAgY2FuIGJlIGFkZGVkIGFuZCBpZiB0aGUgaW5wdXQgaXMgYXZhaWxhYmxlXG4gICAqL1xuICBnZXQgY2FuQWRkQ2hpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwQWRkaXRpb24gJiYgIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogY2hpcFJlbW92YWw/OiBib29sZWFuXG4gICAqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIHJlbW92ZSBjaGlwcy4gSWYgaXQgZG9lc24ndCBleGlzdCBjaGlwIHJlbW1vdmFsIGRlZmF1bHRzIHRvIHRydWUuXG4gICAqIFdoZW4gc2V0dGluZyBkaXNhYmxlZCBhcyB0cnVlLCB0aGlzIHdpbGwgYmUgb3ZlcnJpZGVuIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCdjaGlwUmVtb3ZhbCcpXG4gIHNldCBjaGlwUmVtb3ZhbChjaGlwUmVtb3ZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoaXBSZW1vdmFsID0gY2hpcFJlbW92YWw7XG4gIH1cbiAgZ2V0IGNoaXBSZW1vdmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlwUmVtb3ZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgbm90IGluIGRpc2FibGVkIHN0YXRlIGFuZCBpZiBjaGlwUmVtb3ZhbCBpcyBzZXQgdG8gJ3RydWUnXG4gICAqIFN0YXRlcyBpZiBhIGNoaXAgY2FuIGJlIHJlbW92ZWRcbiAgICovXG4gIGdldCBjYW5SZW1vdmVDaGlwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoaXBSZW1vdmFsICYmICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGRpc3BsYXkgcGxhY2Vob2xkZXJcbiAgICovXG4gIGdldCBkaXNwbGF5UGxhY2VIb2xkZXIoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY2FuQWRkQ2hpcCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQgPyBgJHt0aGlzLnBsYWNlaG9sZGVyfSAqYCA6IHRoaXMucGxhY2Vob2xkZXI7XG4gIH1cblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBkZWJvdW5jZT86IG51bWJlclxuICAgKiBEZWJvdW5jZSB0aW1lb3V0IGJldHdlZW4ga2V5cHJlc3Nlcy4gRGVmYXVsdHMgdG8gMjAwLlxuICAgKi9cbiAgQElucHV0KCkgZGVib3VuY2U6IG51bWJlciA9IDIwMDtcblxuICAvKipcbiAgICogY29sb3I/OiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJ1xuICAgKiBTZXRzIHRoZSBjb2xvciBmb3IgdGhlIGlucHV0IGFuZCBmb2N1cy9zZWxlY3RlZCBzdGF0ZSBvZiB0aGUgY2hpcHMuXG4gICAqIERlZmF1bHRzIHRvICdwcmltYXJ5J1xuICAgKi9cbiAgQElucHV0KCdjb2xvcicpXG4gIHNldCBjb2xvcihjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicpIHtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICAgIH1cbiAgfVxuICBnZXQgY29sb3IoKTogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybicge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQ/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgYWRkZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgYWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiByZW1vdmU/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgcmVtb3ZlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIGlucHV0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHZhbHVlIGluIHRoZSBhdXRvY29tcGxldGUgaW5wdXQgY2hhbmdlcy5cbiAgICogU2VuZHMgc3RyaW5nIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjaGlwRm9jdXM/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgZm9jdXNlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGlwRm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIGJsdXI/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgYmx1cnJlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGlwQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogSG9zdGJpbmRpbmcgdG8gc2V0IHRoZSBhMTF5IG9mIHRoZSBUZENoaXBzQ29tcG9uZW50IGRlcGVuZGluZyBvbiBpdHMgc3RhdGVcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gLTEgOiB0aGlzLl90YWJJbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGFyZVdpdGg/IGZ1bmN0aW9uXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gY2hlY2sgd2hldGhlciBhIGNoaXAgdmFsdWUgYWxyZWFkeSBleGlzdHMuXG4gICAqIERlZmF1bHRzIHRvIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29uID09PVxuICAgKi9cbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbzEgPT09IG8yO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgZm9jdXMgZXZlbnQgdG8gYWN0IG9uIGl0XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIGZvY3VzTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBzaG91bGQgb25seSBmb2N1cyBpZiBpdHMgbm90IHZpYSBtb3VzZWRvd24gdG8gcHJldmVudCBjbGFzaGluZyB3aXRoIGF1dG9jb21wbGV0ZVxuICAgIGlmICghdGhpcy5faXNNb3VzZWRvd24pIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgbW91c2Vkb3duIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgbW91c2Vkb3duTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBzZXRzIGEgZmxhZyB0byBrbm93IGlmIHRoZXJlIHdhcyBhIG1vdXNlZG93biBhbmQgdGhlbiBpdCByZXR1cm5zIGl0IGJhY2sgdG8gZmFsc2VcbiAgICB0aGlzLl9pc01vdXNlZG93biA9IHRydWU7XG4gICAgdGltZXIoKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTW91c2Vkb3duID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBjbGlja2luZyBvbiA6aG9zdCBvciBgdGQtY2hpcHMtd3JhcHBlcmAsIHRoZW4gd2Ugc3RvcCB0aGUgY2xpY2sgcHJvcGFnYXRpb24gc28gdGhlIGF1dG9jb21wbGV0ZVxuICAgKiBkb2VzbnQgY2xvc2UgYXV0b21hdGljYWxseS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjbGlja1RhcmdldCA9PT0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IHx8IGNsaWNrVGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCd0ZC1jaGlwcy13cmFwcGVyJykgPiAtMSkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3Qga2V5ZG93biBldmVudCB0byBhY3Qgb24gaXQgZGVwZW5kaW5nIG9uIHRoZSBrZXlwcmVzc1xuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIGtleWRvd25MaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIC8vIGlmIHRhYmluZyBvdXQsIHRoZW4gdW5mb2N1cyB0aGUgY29tcG9uZW50XG4gICAgICAgIHRpbWVyKClcbiAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVNDQVBFOlxuICAgICAgICBpZiAodGhpcy5faW5wdXRDaGlsZC5mb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy5fbmF0aXZlSW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5wdXRWYWx1ZUNoYW5nZXNTdWJzID0gdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSkpXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSA/IHZhbHVlIDogJycpO1xuICAgICAgfSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fd2F0Y2hPdXRzaWRlQ2xpY2soKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAvLyBUaHJvdyBvbkNoYW5nZSBldmVudCBvbmx5IGlmIGFycmF5IGNoYW5nZXMgc2l6ZS5cbiAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCAhPT0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICB0aGlzLl9sZW5ndGggPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fb3V0c2lkZUNsaWNrU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2lucHV0VmFsdWVDaGFuZ2VzU3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgX3NldEludGVybmFsQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5faW50ZXJuYWxDbGljayA9IHRydWU7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdG9nZ2xlSW5wdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgY2hpcCBmcm9tIHRoZSBhdXRvY29tcGxldGUuXG4gICAqIEl0IGNoZWNrIGlmIFtyZXF1aXJlTWF0Y2hdIGlzIGVuYWJsZWQsIGFuZCB0cmllcyB0byBhZGQgdGhlIGZpcnN0IGFjdGl2ZSBvcHRpb25cbiAgICogZWxzZSBpZiBqdXN0IGFkZHMgdGhlIHZhbHVlIHRoYXRzIG9uIHRoZSBpbnB1dFxuICAgKiByZXR1cm5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCAnZmFsc2UnIGlmIGl0IGZhaWxzLlxuICAgKi9cbiAgX2hhbmRsZUFkZENoaXAoKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnM6IE1hdE9wdGlvbltdID0gdGhpcy5fb3B0aW9ucy50b0FycmF5KCkuZmlsdGVyKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICBzZWxlY3RlZE9wdGlvbnNbMF0uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhIHNlbGVjdGlvbiwgdGhlbiB1c2UgdGhhdFxuICAgICAgLy8gZWxzZSB1c2UgdGhlIGlucHV0IHZhbHVlIGFzIGNoaXBcbiAgICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuYWN0aXZlT3B0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9pbnB1dENoaWxkLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hZGRDaGlwKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdHMgZXhlY3R1dGVkIHdoZW4gdHJ5aW5nIHRvIGFkZCBhIHZhbHVlIGFzIGNoaXBcbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIGFkZENoaXAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8qKlxuICAgICAqIGFkZCBhIGRlYm91bmNlIG1zIGRlbGF5IHdoZW4gcmVvcGVuaW5nIHRoZSBhdXRvY29tcGxldGUgdG8gZ2l2ZSBpdCB0aW1lXG4gICAgICogdG8gcmVyZW5kZXIgdGhlIG5leHQgbGlzdCBhbmQgYXQgdGhlIGNvcnJlY3Qgc3BvdFxuICAgICAqL1xuXG4gICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICB0aW1lcih0aGlzLmRlYm91bmNlKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgICAgIHRoaXMuX29wZW5BdXRvY29tcGxldGUoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dENvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIGFscmVhZHkgcGFydCBvZiB0aGUgbW9kZWxcbiAgICBpZiAodGhpcy52YWx1ZS5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLCB2YWx1ZSkpID4gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlLnB1c2godmFsdWUpO1xuICAgIHRoaXMuYWRkLmVtaXQodmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0cnlpbmcgdG8gcmVtb3ZlIGEgY2hpcC5cbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIHJlbW92ZUNoaXAoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlbW92ZWRWYWx1ZXM6IGFueVtdID0gdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBkZWxldGluZyBsYXN0IHNpbmdsZSBjaGlwLCB0byBmb2N1cyBpbnB1dCBhZnRlcndhcmRzXG4gICAgICogRWxzZSBjaGVjayBpZiBpdHMgbm90IHRoZSBsYXN0IGNoaXAgb2YgdGhlIGxpc3QgdG8gZm9jdXMgdGhlIG5leHQgb25lLlxuICAgICAqL1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5fdG90YWxDaGlwcyAtIDEgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgdGhpcy5fdG90YWxDaGlwcyAtIDEpIHtcbiAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCArIDEpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiAwKSB7XG4gICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZS5lbWl0KHJlbW92ZWRWYWx1ZXNbMF0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5pbnB1dENvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYmx1ciBvZiBjaGlwIGFuZCBzZW5kcyBvdXQgZXZlbnRcbiAgICovXG4gIF9oYW5kbGVDaGlwQmx1cihldmVudDogRm9jdXNFdmVudCwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hpcEJsdXIuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvZiBjaGlwIGFuZCBzZW5kcyBvdXQgZXZlbnRcbiAgICovXG4gIF9oYW5kbGVDaGlwRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMuY2hpcEZvY3VzLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgX2hhbmRsZUZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuc2V0Rm9jdXNlZFN0YXRlKCk7XG4gICAgdGhpcy5fc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHNldEZvY3VzZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGFiSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGZvY3VzIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZUZvY3VzZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5fdGFiSW5kZXggPSAwO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1tYXRpY2FsbHkgZm9jdXMgdGhlIGlucHV0IG9yIGZpcnN0IGNoaXAuIFNpbmNlIGl0cyB0aGUgY29tcG9uZW50IGVudHJ5IHBvaW50XG4gICAqIGRlcGVuZGluZyBpZiBhIHVzZXIgY2FuIGFkZCBvciByZW1vdmUgY2hpcHNcbiAgICovXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbkFkZENoaXApIHtcbiAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzZXMgcmVsZXZhbnQgaW5wdXQga2V5IHByZXNzZXMuXG4gICAqL1xuICBfaW5wdXRLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogU2luY2UgdGhlIGZpcnN0IGl0ZW0gaXMgaGlnaGxpZ2h0ZWQgb24gW3JlcXVpcmVNYXRjaF0sIHdlIG5lZWQgdG8gaW5hY3RpdmF0ZSBpdFxuICAgICAgICAgKiB3aGVuIHByZXNzaW5nIHRoZSB1cCBrZXlcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5fb3B0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uYWN0aXZlICYmIHRoaXMuX2ludGVybmFsQWN0aXZhdGVPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIGlucHV0IGlzIGVtcHR5IHdoZW4gcHJlc3NpbmcgbGVmdCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBsYXN0IGNoaXAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dENoaWxkLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNMYXN0Q2hpcCgpO1xuICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIC8qKiBDaGVjayB0byBzZWUgaWYgaW5wdXQgaXMgZW1wdHkgd2hlbiBwcmVzc2luZyByaWdodCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBmaXJzdCBjaGlwICovXG4gICAgICAgIGlmICghdGhpcy5faW5wdXRDaGlsZC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VzIHJlbGV2YW50IGNoaXAga2V5IHByZXNzZXMuXG4gICAqL1xuICBfY2hpcEtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgREVMRVRFOlxuICAgICAgY2FzZSBCQUNLU1BBQ0U6XG4gICAgICAgIC8qKiBDaGVjayB0byBzZWUgaWYgd2UgY2FuIGRlbGV0ZSBhIGNoaXAgKi9cbiAgICAgICAgaWYgKHRoaXMuY2FuUmVtb3ZlQ2hpcCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpcChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIGxlZnQvZG93biBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgZmlyc3QgY2hpcCB0byBmb2N1cyBpbnB1dCBuZXh0XG4gICAgICAgICAqIEFsc28gY2hlY2sgaWYgaW5wdXQgc2hvdWxkIGJlIGZvY3VzZWRcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIC8vIG9ubHkgdHJ5IHRvIHRhcmdldCBpbnB1dCBpZiBwcmVzc2luZyBsZWZ0XG4gICAgICAgICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCAmJiBldmVudC5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzTGFzdENoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIHJpZ2h0L3VwIGFycm93IHdhcyBwcmVzc2VkIHdoaWxlIGZvY3VzaW5nIHRoZSBsYXN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSB7XG4gICAgICAgICAgLy8gb25seSB0cnkgdG8gdGFyZ2V0IGlucHV0IGlmIHByZXNzaW5nIHJpZ2h0XG4gICAgICAgICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCAmJiBldmVudC5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcmVtb3ZlIGZyb20gZGlzcGxheSB0aGUgdmFsdWUgYWRkZWQgZnJvbSB0aGUgYXV0b2NvbXBsZXRlIHNpbmNlIGl0IGdvZXMgZGlyZWN0bHkgYXMgY2hpcC5cbiAgICovXG4gIF9yZW1vdmVJbnB1dERpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIG9wZW4gdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgb3BlbmVkXG4gICAqL1xuICBfb3BlbkF1dG9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLm9wZW5QYW5lbCgpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjbG9zZSB0aGUgYXV0b2NvbXBsZXRlIG1hbnVhbGx5IGlmIGl0cyBub3QgYWxyZWFkeSBjbG9zZWRcbiAgICovXG4gIF9jbG9zZUF1dG9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuY2xvc2VQYW5lbCgpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0b3RhbCBvZiBjaGlwc1xuICAgKi9cbiAgZ2V0IF90b3RhbENoaXBzKCk6IG51bWJlciB7XG4gICAgY29uc3QgY2hpcHM6IE1hdENoaXBbXSA9IHRoaXMuX2NoaXBzQ2hpbGRyZW4udG9BcnJheSgpO1xuICAgIHJldHVybiBjaGlwcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGZvY3VzIGEgZGVzaXJlZCBjaGlwIGJ5IGluZGV4XG4gICAqL1xuICBwcml2YXRlIF9mb2N1c0NoaXAoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIC8qKiBjaGVjayB0byBzZWUgaWYgaW5kZXggZXhpc3RzIGluIHRoZSBhcnJheSBiZWZvcmUgZm9jdXNpbmcgKi9cbiAgICBpZiAoaW5kZXggPiAtMSAmJiB0aGlzLl90b3RhbENoaXBzID4gaW5kZXgpIHtcbiAgICAgIHRoaXMuX2NoaXBzQ2hpbGRyZW4udG9BcnJheSgpW2luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBNZXRob2QgdG8gZm9jdXMgZmlyc3QgY2hpcCAqL1xuICBwcml2YXRlIF9mb2N1c0ZpcnN0Q2hpcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c0NoaXAoMCk7XG4gIH1cblxuICAvKiogTWV0aG9kIHRvIGZvY3VzIGxhc3QgY2hpcCAqL1xuICBwcml2YXRlIF9mb2N1c0xhc3RDaGlwKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzQ2hpcCh0aGlzLl90b3RhbENoaXBzIC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHRvZ2dsZSB0aGUgZGlzYWJsZSBzdGF0ZSBvZiBpbnB1dFxuICAgKiBDaGVja3MgaWYgbm90IGluIGRpc2FibGVkIHN0YXRlIGFuZCBpZiBjaGlwQWRkaXRpb24gaXMgc2V0IHRvICd0cnVlJ1xuICAgKi9cbiAgcHJpdmF0ZSBfdG9nZ2xlSW5wdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCkge1xuICAgICAgdGhpcy5pbnB1dENvbnRyb2wuZW5hYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLmRpc2FibGUoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmaXJzdCBvcHRpb24gYXMgYWN0aXZlIHRvIGxldCB0aGUgdXNlciBrbm93IHdoaWNoIG9uZSB3aWxsIGJlIGFkZGVkIHdoZW4gcHJlc3NpbmcgZW50ZXJcbiAgICogT25seSBpZiBbcmVxdWlyZU1hdGNoXSBoYXMgYmVlbiBzZXRcbiAgICovXG4gIHByaXZhdGUgX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlcXVpcmVNYXRjaCkge1xuICAgICAgLy8gbmVlZCB0byB1c2UgYSB0aW1lciBoZXJlIHRvIHdhaXQgdW50aWwgdGhlIGF1dG9jb21wbGV0ZSBoYXMgYmVlbiBvcGVuZWQgKGVuZCBvZiBxdWV1ZSlcbiAgICAgIHRpbWVyKClcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkICYmIHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjbGVhbiB1cCBvZiBwcmV2aW91c2x5IGFjdGl2ZSBvcHRpb25zXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKS5mb3JFYWNoKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICBvcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBvbmUgYXMgYWN0aXZlXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVswXS5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQWN0aXZhdGVPcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2hlcyBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgY29tcG9uZW50IHRvIHJlbW92ZSB0aGUgZm9jdXNcbiAgICogVGhlIGF1dG9jb21wbGV0ZSBwYW5lbCBpcyBjb25zaWRlcmVkIGluc2lkZSB0aGUgY29tcG9uZW50IHNvIHdlXG4gICAqIG5lZWQgdG8gdXNlIGEgZmxhZyB0byBmaW5kIG91dCB3aGVuIGl0cyBjbGlja2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBfd2F0Y2hPdXRzaWRlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tTdWJzID0gbWVyZ2UoZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAnY2xpY2snKSwgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAndG91Y2hlbmQnKSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuX3RvdWNoZW5kRGVib3VuY2UpLFxuICAgICAgICAgIGZpbHRlcigoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgICAgICAgY2xpY2tUYXJnZXQgIT09IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAgICAgICAhdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAhdGhpcy5faW50ZXJuYWxDbGlja1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIl19