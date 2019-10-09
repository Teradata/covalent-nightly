/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.onInputChange.emit(value ? value : '');
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
            let selectedOptions = this._options.toArray().filter((/**
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
        if (index === this._totalChips - 1 && index === 0) {
            this._inputChild.focus();
        }
        else if (index < this._totalChips - 1) {
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
        let chips = this._chipsChildren.toArray();
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
                styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;max-width:100%;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:start;justify-content:flex-start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-ms-flex-order:-20;order:-20;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-ms-transform-origin:50%;transform-origin:50%;-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2)}:host.ng-invalid .mat-form-field-underline .mat-form-field-ripple{visibility:visible;opacity:1;-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2)}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
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
    _chipTemplate: [{ type: ContentChild, args: [TdChipDirective, { static: false },] }],
    _autocompleteOptionTemplate: [{ type: ContentChild, args: [TdAutocompleteOptionDirective, { static: false },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvIiwic291cmNlcyI6WyJjaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBRVYsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBR2pCLFdBQVcsRUFDWCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sU0FBUyxFQUdULEdBQUcsR0FFSixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXhFLE9BQU8s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NEI7Ozs7O0lBQzVCLHFDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgZm9yd2FyZFJlZixcbiAgRG9DaGVjayxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWYsXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIFVQX0FSUk9XLFxuICBET1dOX0FSUk9XLFxuICBFU0NBUEUsXG4gIExFRlRfQVJST1csXG4gIFJJR0hUX0FSUk9XLFxuICBERUxFVEUsXG4gIEJBQ0tTUEFDRSxcbiAgRU5URVIsXG4gIFNQQUNFLFxuICBUQUIsXG4gIEhPTUUsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBNYXRDaGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0SW5wdXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRPcHRpb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIHRpbWVyLCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1jaGlwXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGlwRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtYXV0b2NvbXBsZXRlLW9wdGlvbl1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGRDaGlwc0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkQ2hpcHNNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRDaGlwc0Jhc2UpLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hpcHNDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0ZC1jaGlwcycsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwcy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGlwc0NvbXBvbmVudCBleHRlbmRzIF9UZENoaXBzTWl4aW5CYXNlXG4gIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBEb0NoZWNrLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSUNhbkRpc2FibGUge1xuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tTdWJzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2lucHV0VmFsdWVDaGFuZ2VzU3ViczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc01vdXNlZG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXTtcbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zdGFja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVNYXRjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG4gIHByaXZhdGUgX2lucHV0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG4gIHByaXZhdGUgX2NoaXBBZGRpdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2NoaXBSZW1vdmFsOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90YWJJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdG91Y2hlbmREZWJvdW5jZTogbnVtYmVyID0gMTAwO1xuXG4gIF9pbnRlcm5hbENsaWNrOiBib29sZWFuID0gZmFsc2U7XG4gIF9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfbmF0aXZlSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIF9pbnB1dENoaWxkOiBNYXRJbnB1dDtcbiAgQFZpZXdDaGlsZChNYXRBdXRvY29tcGxldGVUcmlnZ2VyLCB7IHN0YXRpYzogdHJ1ZSB9KSBfYXV0b2NvbXBsZXRlVHJpZ2dlcjogTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcjtcbiAgQFZpZXdDaGlsZHJlbihNYXRDaGlwKSBfY2hpcHNDaGlsZHJlbjogUXVlcnlMaXN0PE1hdENoaXA+O1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGlwRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgX2NoaXBUZW1wbGF0ZTogVGRDaGlwRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgX2F1dG9jb21wbGV0ZU9wdGlvblRlbXBsYXRlOiBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZTtcblxuICBAVmlld0NoaWxkcmVuKE1hdE9wdGlvbikgX29wdGlvbnM6IFF1ZXJ5TGlzdDxNYXRPcHRpb24+O1xuXG4gIC8qKlxuICAgKiBGbGFnIHRoYXQgaXMgdHJ1ZSB3aGVuIGF1dG9jb21wbGV0ZSBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICAvKipcbiAgICogRm9ybUNvbnRyb2wgZm9yIHRoZSBtYXRJbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIC8qKlxuICAgKiBpdGVtcz86IGFueVtdXG4gICAqIFJlbmRlcnMgdGhlIGBtYXQtYXV0b2NvbXBsZXRlYCB3aXRoIHRoZSBwcm92aWRlZCBsaXN0IHRvIGRpc3BsYXkgYXMgb3B0aW9ucy5cbiAgICovXG4gIEBJbnB1dCgnaXRlbXMnKVxuICBzZXQgaXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0YWNrZWQ/OiBib29sZWFuXG4gICAqIFNldCBzdGFja2VkIG9yIGhvcml6b250YWwgY2hpcHMgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnc3RhY2tlZCcpXG4gIHNldCBzdGFja2VkKHN0YWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGFja2VkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHN0YWNrZWQpO1xuICB9XG4gIGdldCBzdGFja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGFja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0UG9zaXRpb24/OiAnYmVmb3JlJyB8ICdhZnRlcidcbiAgICogU2V0IGlucHV0IHBvc2l0aW9uIGJlZm9yZSBvciBhZnRlciB0aGUgY2hpcHMuXG4gICAqIERlZmF1bHRzIHRvICdhZnRlcicuXG4gICAqL1xuICBASW5wdXQoJ2lucHV0UG9zaXRpb24nKVxuICBzZXQgaW5wdXRQb3NpdGlvbihpbnB1dFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicpIHtcbiAgICB0aGlzLl9pbnB1dFBvc2l0aW9uID0gaW5wdXRQb3NpdGlvbjtcbiAgfVxuICBnZXQgaW5wdXRQb3NpdGlvbigpOiAnYmVmb3JlJyB8ICdhZnRlcicge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVpcmVNYXRjaD86IGJvb2xlYW5cbiAgICogQmxvY2tzIGN1c3RvbSBpbnB1dHMgYW5kIG9ubHkgYWxsb3dzIHNlbGVjdGlvbnMgZnJvbSB0aGUgYXV0b2NvbXBsZXRlIGxpc3QuXG4gICAqL1xuICBASW5wdXQoJ3JlcXVpcmVNYXRjaCcpXG4gIHNldCByZXF1aXJlTWF0Y2gocmVxdWlyZU1hdGNoOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZU1hdGNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVNYXRjaCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVNYXRjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZU1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVpcmVkPzogYm9vbGVhblxuICAgKiBWYWx1ZSBpcyBzZXQgdG8gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgY2hpcCBpcyBuZWVkZWRcbiAgICogRGVmYXVsdHMgdG8gZmFsc2VcbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZWQnKVxuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlZCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGlwQWRkaXRpb24/OiBib29sZWFuXG4gICAqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIGFkZCBjaGlwcy4gV2hlbiBzZXR0aW5nIGRpc2FibGVkIGFzIHRydWUsIHRoaXMgd2lsbCBiZSBvdmVycmlkZW4uXG4gICAqIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoJ2NoaXBBZGRpdGlvbicpXG4gIHNldCBjaGlwQWRkaXRpb24oY2hpcEFkZGl0aW9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hpcEFkZGl0aW9uID0gY2hpcEFkZGl0aW9uO1xuICAgIHRoaXMuX3RvZ2dsZUlucHV0KCk7XG4gIH1cbiAgZ2V0IGNoaXBBZGRpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpcEFkZGl0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBBZGRpdGlvbiBpcyBzZXQgdG8gJ3RydWUnXG4gICAqIFN0YXRlcyBpZiBhIGNoaXAgY2FuIGJlIGFkZGVkIGFuZCBpZiB0aGUgaW5wdXQgaXMgYXZhaWxhYmxlXG4gICAqL1xuICBnZXQgY2FuQWRkQ2hpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwQWRkaXRpb24gJiYgIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogY2hpcFJlbW92YWw/OiBib29sZWFuXG4gICAqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIHJlbW92ZSBjaGlwcy4gSWYgaXQgZG9lc24ndCBleGlzdCBjaGlwIHJlbW1vdmFsIGRlZmF1bHRzIHRvIHRydWUuXG4gICAqIFdoZW4gc2V0dGluZyBkaXNhYmxlZCBhcyB0cnVlLCB0aGlzIHdpbGwgYmUgb3ZlcnJpZGVuIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCdjaGlwUmVtb3ZhbCcpXG4gIHNldCBjaGlwUmVtb3ZhbChjaGlwUmVtb3ZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoaXBSZW1vdmFsID0gY2hpcFJlbW92YWw7XG4gIH1cbiAgZ2V0IGNoaXBSZW1vdmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlwUmVtb3ZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgbm90IGluIGRpc2FibGVkIHN0YXRlIGFuZCBpZiBjaGlwUmVtb3ZhbCBpcyBzZXQgdG8gJ3RydWUnXG4gICAqIFN0YXRlcyBpZiBhIGNoaXAgY2FuIGJlIHJlbW92ZWRcbiAgICovXG4gIGdldCBjYW5SZW1vdmVDaGlwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoaXBSZW1vdmFsICYmICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGRpc3BsYXkgcGxhY2Vob2xkZXJcbiAgICovXG4gIGdldCBkaXNwbGF5UGxhY2VIb2xkZXIoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY2FuQWRkQ2hpcCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQgPyBgJHt0aGlzLnBsYWNlaG9sZGVyfSAqYCA6IHRoaXMucGxhY2Vob2xkZXI7XG4gIH1cblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDIwMC5cbiAgICovXG4gIEBJbnB1dCgnZGVib3VuY2UnKSBkZWJvdW5jZTogbnVtYmVyID0gMjAwO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nXG4gICAqIFNldHMgdGhlIGNvbG9yIGZvciB0aGUgaW5wdXQgYW5kIGZvY3VzL3NlbGVjdGVkIHN0YXRlIG9mIHRoZSBjaGlwcy5cbiAgICogRGVmYXVsdHMgdG8gJ3ByaW1hcnknXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJylcbiAgc2V0IGNvbG9yKGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJykge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZD86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyBhZGRlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2FkZCcpIG9uQWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiByZW1vdmU/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgcmVtb3ZlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ3JlbW92ZScpIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBpbnB1dENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSB2YWx1ZSBpbiB0aGUgYXV0b2NvbXBsZXRlIGlucHV0IGNoYW5nZXMuXG4gICAqIFNlbmRzIHN0cmluZyB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2lucHV0Q2hhbmdlJykgb25JbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogY2hpcEZvY3VzPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGZvY3VzZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCdjaGlwRm9jdXMnKSBvbkNoaXBGb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogYmx1cj86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyBibHVycmVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnY2hpcEJsdXInKSBvbkNoaXBCbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBIb3N0YmluZGluZyB0byBzZXQgdGhlIGExMXkgb2YgdGhlIFRkQ2hpcHNDb21wb25lbnQgZGVwZW5kaW5nIG9uIGl0cyBzdGF0ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAtMSA6IHRoaXMuX3RhYkluZGV4O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21wYXJlV2l0aD8gZnVuY3Rpb25cbiAgICogRnVuY3Rpb24gdXNlZCB0byBjaGVjayB3aGV0aGVyIGEgY2hpcCB2YWx1ZSBhbHJlYWR5IGV4aXN0cy5cbiAgICogRGVmYXVsdHMgdG8gc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb24gPT09XG4gICAqL1xuICBASW5wdXQoJ2NvbXBhcmVXaXRoJykgY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbzEgPT09IG8yO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgZm9jdXMgZXZlbnQgdG8gYWN0IG9uIGl0XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIGZvY3VzTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBzaG91bGQgb25seSBmb2N1cyBpZiBpdHMgbm90IHZpYSBtb3VzZWRvd24gdG8gcHJldmVudCBjbGFzaGluZyB3aXRoIGF1dG9jb21wbGV0ZVxuICAgIGlmICghdGhpcy5faXNNb3VzZWRvd24pIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgbW91c2Vkb3duIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgbW91c2Vkb3duTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBzZXRzIGEgZmxhZyB0byBrbm93IGlmIHRoZXJlIHdhcyBhIG1vdXNlZG93biBhbmQgdGhlbiBpdCByZXR1cm5zIGl0IGJhY2sgdG8gZmFsc2VcbiAgICB0aGlzLl9pc01vdXNlZG93biA9IHRydWU7XG4gICAgdGltZXIoKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTW91c2Vkb3duID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBjbGlja2luZyBvbiA6aG9zdCBvciBgdGQtY2hpcHMtd3JhcHBlcmAsIHRoZW4gd2Ugc3RvcCB0aGUgY2xpY2sgcHJvcGFnYXRpb24gc28gdGhlIGF1dG9jb21wbGV0ZVxuICAgKiBkb2VzbnQgY2xvc2UgYXV0b21hdGljYWxseS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjbGlja1RhcmdldCA9PT0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IHx8IGNsaWNrVGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCd0ZC1jaGlwcy13cmFwcGVyJykgPiAtMSkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3Qga2V5ZG93biBldmVudCB0byBhY3Qgb24gaXQgZGVwZW5kaW5nIG9uIHRoZSBrZXlwcmVzc1xuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIGtleWRvd25MaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIC8vIGlmIHRhYmluZyBvdXQsIHRoZW4gdW5mb2N1cyB0aGUgY29tcG9uZW50XG4gICAgICAgIHRpbWVyKClcbiAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVNDQVBFOlxuICAgICAgICBpZiAodGhpcy5faW5wdXRDaGlsZC5mb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy5fbmF0aXZlSW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5wdXRWYWx1ZUNoYW5nZXNTdWJzID0gdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSkpXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMub25JbnB1dENoYW5nZS5lbWl0KHZhbHVlID8gdmFsdWUgOiAnJyk7XG4gICAgICB9KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl93YXRjaE91dHNpZGVDbGljaygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIC8vIFRocm93IG9uQ2hhbmdlIGV2ZW50IG9ubHkgaWYgYXJyYXkgY2hhbmdlcyBzaXplLlxuICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoICE9PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2xlbmd0aCA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vdXRzaWRlQ2xpY2tTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5faW5wdXRWYWx1ZUNoYW5nZXNTdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBfc2V0SW50ZXJuYWxDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnRlcm5hbENsaWNrID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl90b2dnbGVJbnB1dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZSBhIG5ldyBjaGlwIGZyb20gdGhlIGF1dG9jb21wbGV0ZS5cbiAgICogSXQgY2hlY2sgaWYgW3JlcXVpcmVNYXRjaF0gaXMgZW5hYmxlZCwgYW5kIHRyaWVzIHRvIGFkZCB0aGUgZmlyc3QgYWN0aXZlIG9wdGlvblxuICAgKiBlbHNlIGlmIGp1c3QgYWRkcyB0aGUgdmFsdWUgdGhhdHMgb24gdGhlIGlucHV0XG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICBfaGFuZGxlQWRkQ2hpcCgpOiBib29sZWFuIHtcbiAgICBsZXQgdmFsdWU6IGFueTtcbiAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgIGxldCBzZWxlY3RlZE9wdGlvbnM6IE1hdE9wdGlvbltdID0gdGhpcy5fb3B0aW9ucy50b0FycmF5KCkuZmlsdGVyKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICBzZWxlY3RlZE9wdGlvbnNbMF0uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhIHNlbGVjdGlvbiwgdGhlbiB1c2UgdGhhdFxuICAgICAgLy8gZWxzZSB1c2UgdGhlIGlucHV0IHZhbHVlIGFzIGNoaXBcbiAgICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuYWN0aXZlT3B0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9pbnB1dENoaWxkLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hZGRDaGlwKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdHMgZXhlY3R1dGVkIHdoZW4gdHJ5aW5nIHRvIGFkZCBhIHZhbHVlIGFzIGNoaXBcbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIGFkZENoaXAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8qKlxuICAgICAqIGFkZCBhIGRlYm91bmNlIG1zIGRlbGF5IHdoZW4gcmVvcGVuaW5nIHRoZSBhdXRvY29tcGxldGUgdG8gZ2l2ZSBpdCB0aW1lXG4gICAgICogdG8gcmVyZW5kZXIgdGhlIG5leHQgbGlzdCBhbmQgYXQgdGhlIGNvcnJlY3Qgc3BvdFxuICAgICAqL1xuXG4gICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICB0aW1lcih0aGlzLmRlYm91bmNlKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgICAgIHRoaXMuX29wZW5BdXRvY29tcGxldGUoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dENvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIGFscmVhZHkgcGFydCBvZiB0aGUgbW9kZWxcbiAgICBpZiAodGhpcy52YWx1ZS5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLCB2YWx1ZSkpID4gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlLnB1c2godmFsdWUpO1xuICAgIHRoaXMub25BZGQuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRyeWluZyB0byByZW1vdmUgYSBjaGlwLlxuICAgKiByZXR1cm5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCAnZmFsc2UnIGlmIGl0IGZhaWxzLlxuICAgKi9cbiAgcmVtb3ZlQ2hpcChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlbW92ZWRWYWx1ZXM6IGFueVtdID0gdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBkZWxldGluZyBsYXN0IHNpbmdsZSBjaGlwLCB0byBmb2N1cyBpbnB1dCBhZnRlcndhcmRzXG4gICAgICogRWxzZSBjaGVjayBpZiBpdHMgbm90IHRoZSBsYXN0IGNoaXAgb2YgdGhlIGxpc3QgdG8gZm9jdXMgdGhlIG5leHQgb25lLlxuICAgICAqL1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5fdG90YWxDaGlwcyAtIDEgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgdGhpcy5fdG90YWxDaGlwcyAtIDEpIHtcbiAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCArIDEpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiAwKSB7XG4gICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uUmVtb3ZlLmVtaXQocmVtb3ZlZFZhbHVlc1swXSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmlucHV0Q29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBibHVyIG9mIGNoaXAgYW5kIHNlbmRzIG91dCBldmVudFxuICAgKi9cbiAgX2hhbmRsZUNoaXBCbHVyKGV2ZW50OiBGb2N1c0V2ZW50LCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoaXBCbHVyLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50LCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hpcEZvY3VzLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgX2hhbmRsZUZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuc2V0Rm9jdXNlZFN0YXRlKCk7XG4gICAgdGhpcy5fc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHNldEZvY3VzZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGFiSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGZvY3VzIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZUZvY3VzZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5fdGFiSW5kZXggPSAwO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1tYXRpY2FsbHkgZm9jdXMgdGhlIGlucHV0IG9yIGZpcnN0IGNoaXAuIFNpbmNlIGl0cyB0aGUgY29tcG9uZW50IGVudHJ5IHBvaW50XG4gICAqIGRlcGVuZGluZyBpZiBhIHVzZXIgY2FuIGFkZCBvciByZW1vdmUgY2hpcHNcbiAgICovXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbkFkZENoaXApIHtcbiAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzZXMgcmVsZXZhbnQgaW5wdXQga2V5IHByZXNzZXMuXG4gICAqL1xuICBfaW5wdXRLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogU2luY2UgdGhlIGZpcnN0IGl0ZW0gaXMgaGlnaGxpZ2h0ZWQgb24gW3JlcXVpcmVNYXRjaF0sIHdlIG5lZWQgdG8gaW5hY3RpdmF0ZSBpdFxuICAgICAgICAgKiB3aGVuIHByZXNzaW5nIHRoZSB1cCBrZXlcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVNYXRjaCkge1xuICAgICAgICAgIGxldCBsZW5ndGg6IG51bWJlciA9IHRoaXMuX29wdGlvbnMubGVuZ3RoO1xuICAgICAgICAgIGlmIChsZW5ndGggPiAxICYmIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLmFjdGl2ZSAmJiB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVswXS5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgY2FzZSBERUxFVEU6XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiBpbnB1dCBpcyBlbXB0eSB3aGVuIHByZXNzaW5nIGxlZnQgYXJyb3cgdG8gbW92ZSB0byB0aGUgbGFzdCBjaGlwICovXG4gICAgICAgIGlmICghdGhpcy5faW5wdXRDaGlsZC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzTGFzdENoaXAoKTtcbiAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIGlucHV0IGlzIGVtcHR5IHdoZW4gcHJlc3NpbmcgcmlnaHQgYXJyb3cgdG8gbW92ZSB0byB0aGUgZmlyc3QgY2hpcCAqL1xuICAgICAgICBpZiAoIXRoaXMuX2lucHV0Q2hpbGQudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBjaGlwIGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2NoaXBLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIHdlIGNhbiBkZWxldGUgYSBjaGlwICovXG4gICAgICAgIGlmICh0aGlzLmNhblJlbW92ZUNoaXApIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUNoaXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiBsZWZ0L2Rvd24gYXJyb3cgd2FzIHByZXNzZWQgd2hpbGUgZm9jdXNpbmcgdGhlIGZpcnN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgbGVmdFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiByaWdodC91cCBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgbGFzdCBjaGlwIHRvIGZvY3VzIGlucHV0IG5leHRcbiAgICAgICAgICogQWxzbyBjaGVjayBpZiBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLl90b3RhbENoaXBzIC0gMSkge1xuICAgICAgICAgIC8vIG9ubHkgdHJ5IHRvIHRhcmdldCBpbnB1dCBpZiBwcmVzc2luZyByaWdodFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCB0aGlzLl90b3RhbENoaXBzIC0gMSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBmcm9tIGRpc3BsYXkgdGhlIHZhbHVlIGFkZGVkIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBzaW5jZSBpdCBnb2VzIGRpcmVjdGx5IGFzIGNoaXAuXG4gICAqL1xuICBfcmVtb3ZlSW5wdXREaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBvcGVuIHRoZSBhdXRvY29tcGxldGUgbWFudWFsbHkgaWYgaXRzIG5vdCBhbHJlYWR5IG9wZW5lZFxuICAgKi9cbiAgX29wZW5BdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5vcGVuUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBfY2xvc2VBdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgb2YgY2hpcHNcbiAgICovXG4gIGdldCBfdG90YWxDaGlwcygpOiBudW1iZXIge1xuICAgIGxldCBjaGlwczogTWF0Q2hpcFtdID0gdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KCk7XG4gICAgcmV0dXJuIGNoaXBzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZm9jdXMgYSBkZXNpcmVkIGNoaXAgYnkgaW5kZXhcbiAgICovXG4gIHByaXZhdGUgX2ZvY3VzQ2hpcChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgLyoqIGNoZWNrIHRvIHNlZSBpZiBpbmRleCBleGlzdHMgaW4gdGhlIGFycmF5IGJlZm9yZSBmb2N1c2luZyAqL1xuICAgIGlmIChpbmRleCA+IC0xICYmIHRoaXMuX3RvdGFsQ2hpcHMgPiBpbmRleCkge1xuICAgICAgdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KClbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBmaXJzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzRmlyc3RDaGlwKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzQ2hpcCgwKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgdG8gZm9jdXMgbGFzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzTGFzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdG9nZ2xlIHRoZSBkaXNhYmxlIHN0YXRlIG9mIGlucHV0XG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBBZGRpdGlvbiBpcyBzZXQgdG8gJ3RydWUnXG4gICAqL1xuICBwcml2YXRlIF90b2dnbGVJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dENvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZpcnN0IG9wdGlvbiBhcyBhY3RpdmUgdG8gbGV0IHRoZSB1c2VyIGtub3cgd2hpY2ggb25lIHdpbGwgYmUgYWRkZWQgd2hlbiBwcmVzc2luZyBlbnRlclxuICAgKiBPbmx5IGlmIFtyZXF1aXJlTWF0Y2hdIGhhcyBiZWVuIHNldFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIGhlcmUgdG8gd2FpdCB1bnRpbCB0aGUgYXV0b2NvbXBsZXRlIGhhcyBiZWVuIG9wZW5lZCAoZW5kIG9mIHF1ZXVlKVxuICAgICAgdGltZXIoKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZvY3VzZWQgJiYgdGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHVwIG9mIHByZXZpb3VzbHkgYWN0aXZlIG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZvckVhY2goKG9wdGlvbjogTWF0T3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIG9wdGlvbi5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IG9uZSBhcyBhY3RpdmVcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlIHRoZSBmb2N1c1xuICAgKiBUaGUgYXV0b2NvbXBsZXRlIHBhbmVsIGlzIGNvbnNpZGVyZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgc28gd2VcbiAgICogbmVlZCB0byB1c2UgYSBmbGFnIHRvIGZpbmQgb3V0IHdoZW4gaXRzIGNsaWNrZWQuXG4gICAqL1xuICBwcml2YXRlIF93YXRjaE91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMgPSBtZXJnZShmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICdjbGljaycpLCBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICd0b3VjaGVuZCcpKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5fdG91Y2hlbmREZWJvdW5jZSksXG4gICAgICAgICAgZmlsdGVyKChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9pbnRlcm5hbENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNlZCAmJlxuICAgICAgICAgICAgICBjbGlja1RhcmdldCAhPT0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICAgICAgICF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmXG4gICAgICAgICAgICAgICF0aGlzLl9pbnRlcm5hbENsaWNrXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuY2xvc2VQYW5lbCgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=