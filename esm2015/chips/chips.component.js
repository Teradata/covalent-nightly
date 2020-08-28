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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvIiwic291cmNlcyI6WyJjaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBRVYsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBR2pCLFdBQVcsRUFDWCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sU0FBUyxFQUdULEdBQUcsR0FFSixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXhFLE9BQU8s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QkFPTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dDQVloQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQWVwQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQWFoQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBdlNuQyw2Q0FBNkQ7Ozs7O0lBQzdELGtEQUFrRTs7Ozs7SUFDbEUsd0NBQXNDOzs7OztJQUV0QyxrQ0FBc0I7Ozs7O0lBQ3RCLG1DQUE0Qjs7Ozs7SUFDNUIsb0NBQWtDOzs7OztJQUNsQyx5Q0FBdUM7Ozs7O0lBQ3ZDLGtDQUEwRDs7Ozs7SUFDMUQsMENBQXFEOzs7OztJQUNyRCx5Q0FBc0M7Ozs7O0lBQ3RDLHdDQUFxQzs7Ozs7SUFDckMsb0NBQWtDOzs7OztJQUNsQyxxQ0FBbUM7Ozs7O0lBQ25DLHFDQUE4Qjs7Ozs7SUFDOUIsNkNBQXdDOztJQUV4QywwQ0FBZ0M7O0lBQ2hDLG1EQUF5Qzs7SUFFekMsd0NBQStEOztJQUMvRCx1Q0FBNkQ7O0lBQzdELGdEQUFrRzs7SUFDbEcsMENBQTBEOztJQUUxRCx5Q0FBOEQ7O0lBQzlELHVEQUMyRDs7SUFFM0Qsb0NBQXdEOzs7OztJQVl4RCx3Q0FBOEM7Ozs7OztJQTRIOUMsdUNBQTZCOzs7Ozs7SUFNN0Isb0NBQWdDOzs7Ozs7O0lBd0JoQywrQkFBMkQ7Ozs7Ozs7SUFPM0Qsa0NBQThEOzs7Ozs7O0lBTzlELHVDQUF5RTs7Ozs7OztJQU96RSxxQ0FBaUU7Ozs7Ozs7SUFPakUsb0NBQWdFOzs7Ozs7O0lBeUJoRSx1Q0FFRTs7Ozs7SUFoQkEsdUNBQStCOzs7OztJQUMvQixxQ0FBNEI7Ozs7O0lBQzVCLHFDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgZm9yd2FyZFJlZixcbiAgRG9DaGVjayxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWYsXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIFVQX0FSUk9XLFxuICBET1dOX0FSUk9XLFxuICBFU0NBUEUsXG4gIExFRlRfQVJST1csXG4gIFJJR0hUX0FSUk9XLFxuICBERUxFVEUsXG4gIEJBQ0tTUEFDRSxcbiAgRU5URVIsXG4gIFNQQUNFLFxuICBUQUIsXG4gIEhPTUUsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBNYXRDaGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0SW5wdXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRPcHRpb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIHRpbWVyLCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1jaGlwXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGlwRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtYXV0b2NvbXBsZXRlLW9wdGlvbl1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGRDaGlwc0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkQ2hpcHNNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRDaGlwc0Jhc2UpLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hpcHNDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0ZC1jaGlwcycsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwcy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGlwc0NvbXBvbmVudFxuICBleHRlbmRzIF9UZENoaXBzTWl4aW5CYXNlXG4gIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBEb0NoZWNrLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSUNhbkRpc2FibGUge1xuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tTdWJzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2lucHV0VmFsdWVDaGFuZ2VzU3ViczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc01vdXNlZG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBhbnlbXTtcbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zdGFja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVNYXRjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG4gIHByaXZhdGUgX2lucHV0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG4gIHByaXZhdGUgX2NoaXBBZGRpdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2NoaXBSZW1vdmFsOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90YWJJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdG91Y2hlbmREZWJvdW5jZTogbnVtYmVyID0gMTAwO1xuXG4gIF9pbnRlcm5hbENsaWNrOiBib29sZWFuID0gZmFsc2U7XG4gIF9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfbmF0aXZlSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIF9pbnB1dENoaWxkOiBNYXRJbnB1dDtcbiAgQFZpZXdDaGlsZChNYXRBdXRvY29tcGxldGVUcmlnZ2VyLCB7IHN0YXRpYzogdHJ1ZSB9KSBfYXV0b2NvbXBsZXRlVHJpZ2dlcjogTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcjtcbiAgQFZpZXdDaGlsZHJlbihNYXRDaGlwKSBfY2hpcHNDaGlsZHJlbjogUXVlcnlMaXN0PE1hdENoaXA+O1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGlwRGlyZWN0aXZlKSBfY2hpcFRlbXBsYXRlOiBUZENoaXBEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUpXG4gIF9hdXRvY29tcGxldGVPcHRpb25UZW1wbGF0ZTogVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmU7XG5cbiAgQFZpZXdDaGlsZHJlbihNYXRPcHRpb24pIF9vcHRpb25zOiBRdWVyeUxpc3Q8TWF0T3B0aW9uPjtcblxuICAvKipcbiAgICogRmxhZyB0aGF0IGlzIHRydWUgd2hlbiBhdXRvY29tcGxldGUgaXMgZm9jdXNlZC5cbiAgICovXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1Db250cm9sIGZvciB0aGUgbWF0SW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGlucHV0Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICAvKipcbiAgICogaXRlbXM/OiBhbnlbXVxuICAgKiBSZW5kZXJzIHRoZSBgbWF0LWF1dG9jb21wbGV0ZWAgd2l0aCB0aGUgcHJvdmlkZWQgbGlzdCB0byBkaXNwbGF5IGFzIG9wdGlvbnMuXG4gICAqL1xuICBASW5wdXQoJ2l0ZW1zJylcbiAgc2V0IGl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgaXRlbXMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGFja2VkPzogYm9vbGVhblxuICAgKiBTZXQgc3RhY2tlZCBvciBob3Jpem9udGFsIGNoaXBzIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ3N0YWNrZWQnKVxuICBzZXQgc3RhY2tlZChzdGFja2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhY2tlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzdGFja2VkKTtcbiAgfVxuICBnZXQgc3RhY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnB1dFBvc2l0aW9uPzogJ2JlZm9yZScgfCAnYWZ0ZXInXG4gICAqIFNldCBpbnB1dCBwb3NpdGlvbiBiZWZvcmUgb3IgYWZ0ZXIgdGhlIGNoaXBzLlxuICAgKiBEZWZhdWx0cyB0byAnYWZ0ZXInLlxuICAgKi9cbiAgQElucHV0KCdpbnB1dFBvc2l0aW9uJylcbiAgc2V0IGlucHV0UG9zaXRpb24oaW5wdXRQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInKSB7XG4gICAgdGhpcy5faW5wdXRQb3NpdGlvbiA9IGlucHV0UG9zaXRpb247XG4gIH1cbiAgZ2V0IGlucHV0UG9zaXRpb24oKTogJ2JlZm9yZScgfCAnYWZ0ZXInIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRQb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1aXJlTWF0Y2g/OiBib29sZWFuXG4gICAqIEJsb2NrcyBjdXN0b20gaW5wdXRzIGFuZCBvbmx5IGFsbG93cyBzZWxlY3Rpb25zIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBsaXN0LlxuICAgKi9cbiAgQElucHV0KCdyZXF1aXJlTWF0Y2gnKVxuICBzZXQgcmVxdWlyZU1hdGNoKHJlcXVpcmVNYXRjaDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVNYXRjaCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlTWF0Y2gpO1xuICB9XG4gIGdldCByZXF1aXJlTWF0Y2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVNYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1aXJlZD86IGJvb2xlYW5cbiAgICogVmFsdWUgaXMgc2V0IHRvIHRydWUgaWYgYXQgbGVhc3Qgb25lIGNoaXAgaXMgbmVlZGVkXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlXG4gICAqL1xuICBASW5wdXQoJ3JlcXVpcmVkJylcbiAgc2V0IHJlcXVpcmVkKHJlcXVpcmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxdWlyZWQpO1xuICB9XG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cblxuICAvKipcbiAgICogY2hpcEFkZGl0aW9uPzogYm9vbGVhblxuICAgKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBhZGQgY2hpcHMuIFdoZW4gc2V0dGluZyBkaXNhYmxlZCBhcyB0cnVlLCB0aGlzIHdpbGwgYmUgb3ZlcnJpZGVuLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCdjaGlwQWRkaXRpb24nKVxuICBzZXQgY2hpcEFkZGl0aW9uKGNoaXBBZGRpdGlvbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoaXBBZGRpdGlvbiA9IGNoaXBBZGRpdGlvbjtcbiAgICB0aGlzLl90b2dnbGVJbnB1dCgpO1xuICB9XG4gIGdldCBjaGlwQWRkaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBBZGRpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgbm90IGluIGRpc2FibGVkIHN0YXRlIGFuZCBpZiBjaGlwQWRkaXRpb24gaXMgc2V0IHRvICd0cnVlJ1xuICAgKiBTdGF0ZXMgaWYgYSBjaGlwIGNhbiBiZSBhZGRlZCBhbmQgaWYgdGhlIGlucHV0IGlzIGF2YWlsYWJsZVxuICAgKi9cbiAgZ2V0IGNhbkFkZENoaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpcEFkZGl0aW9uICYmICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoaXBSZW1vdmFsPzogYm9vbGVhblxuICAgKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byByZW1vdmUgY2hpcHMuIElmIGl0IGRvZXNuJ3QgZXhpc3QgY2hpcCByZW1tb3ZhbCBkZWZhdWx0cyB0byB0cnVlLlxuICAgKiBXaGVuIHNldHRpbmcgZGlzYWJsZWQgYXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIG92ZXJyaWRlbiB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnY2hpcFJlbW92YWwnKVxuICBzZXQgY2hpcFJlbW92YWwoY2hpcFJlbW92YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGlwUmVtb3ZhbCA9IGNoaXBSZW1vdmFsO1xuICB9XG4gIGdldCBjaGlwUmVtb3ZhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpcFJlbW92YWw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcFJlbW92YWwgaXMgc2V0IHRvICd0cnVlJ1xuICAgKiBTdGF0ZXMgaWYgYSBjaGlwIGNhbiBiZSByZW1vdmVkXG4gICAqL1xuICBnZXQgY2FuUmVtb3ZlQ2hpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwUmVtb3ZhbCAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBkaXNwbGF5IHBsYWNlaG9sZGVyXG4gICAqL1xuICBnZXQgZGlzcGxheVBsYWNlSG9sZGVyKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNhbkFkZENoaXApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkID8gYCR7dGhpcy5wbGFjZWhvbGRlcn0gKmAgOiB0aGlzLnBsYWNlaG9sZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgYXV0b2NvbXBsZXRlIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDIwMC5cbiAgICovXG4gIEBJbnB1dCgpIGRlYm91bmNlOiBudW1iZXIgPSAyMDA7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGUgY29sb3IgZm9yIHRoZSBpbnB1dCBhbmQgZm9jdXMvc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGNoaXBzLlxuICAgKiBEZWZhdWx0cyB0byAncHJpbWFyeSdcbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCk6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogYWRkPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGFkZGVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgpIGFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogcmVtb3ZlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIHJlbW92ZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBpbnB1dENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSB2YWx1ZSBpbiB0aGUgYXV0b2NvbXBsZXRlIGlucHV0IGNoYW5nZXMuXG4gICAqIFNlbmRzIHN0cmluZyB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogY2hpcEZvY3VzPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGZvY3VzZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hpcEZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBibHVyPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGJsdXJyZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hpcEJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEhvc3RiaW5kaW5nIHRvIHNldCB0aGUgYTExeSBvZiB0aGUgVGRDaGlwc0NvbXBvbmVudCBkZXBlbmRpbmcgb24gaXRzIHN0YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogdGhpcy5fdGFiSW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBhcmVXaXRoPyBmdW5jdGlvblxuICAgKiBGdW5jdGlvbiB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgYSBjaGlwIHZhbHVlIGFscmVhZHkgZXhpc3RzLlxuICAgKiBEZWZhdWx0cyB0byBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbiA9PT1cbiAgICovXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbiA9IChvMTogYW55LCBvMjogYW55KSA9PiB7XG4gICAgcmV0dXJuIG8xID09PSBvMjtcbiAgfTtcblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGZvY3VzIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICBmb2N1c0xpc3RlbmVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgLy8gc2hvdWxkIG9ubHkgZm9jdXMgaWYgaXRzIG5vdCB2aWEgbW91c2Vkb3duIHRvIHByZXZlbnQgY2xhc2hpbmcgd2l0aCBhdXRvY29tcGxldGVcbiAgICBpZiAoIXRoaXMuX2lzTW91c2Vkb3duKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IG1vdXNlZG93biBldmVudCB0byBhY3Qgb24gaXRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG1vdXNlZG93bkxpc3RlbmVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgLy8gc2V0cyBhIGZsYWcgdG8ga25vdyBpZiB0aGVyZSB3YXMgYSBtb3VzZWRvd24gYW5kIHRoZW4gaXQgcmV0dXJucyBpdCBiYWNrIHRvIGZhbHNlXG4gICAgdGhpcy5faXNNb3VzZWRvd24gPSB0cnVlO1xuICAgIHRpbWVyKClcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc01vdXNlZG93biA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSWYgY2xpY2tpbmcgb24gOmhvc3Qgb3IgYHRkLWNoaXBzLXdyYXBwZXJgLCB0aGVuIHdlIHN0b3AgdGhlIGNsaWNrIHByb3BhZ2F0aW9uIHNvIHRoZSBhdXRvY29tcGxldGVcbiAgICogZG9lc250IGNsb3NlIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrTGlzdGVuZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoY2xpY2tUYXJnZXQgPT09IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCB8fCBjbGlja1RhcmdldC5jbGFzc05hbWUuaW5kZXhPZigndGQtY2hpcHMtd3JhcHBlcicpID4gLTEpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGtleWRvd24gZXZlbnQgdG8gYWN0IG9uIGl0IGRlcGVuZGluZyBvbiB0aGUga2V5cHJlc3NcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBrZXlkb3duTGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICAvLyBpZiB0YWJpbmcgb3V0LCB0aGVuIHVuZm9jdXMgdGhlIGNvbXBvbmVudFxuICAgICAgICB0aW1lcigpXG4gICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVTQ0FQRTpcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0Q2hpbGQuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2lucHV0VmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpKVxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodmFsdWUgPyB2YWx1ZSA6ICcnKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3dhdGNoT3V0c2lkZUNsaWNrKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gVGhyb3cgb25DaGFuZ2UgZXZlbnQgb25seSBpZiBhcnJheSBjaGFuZ2VzIHNpemUuXG4gICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggIT09IHRoaXMuX2xlbmd0aCkge1xuICAgICAgdGhpcy5fbGVuZ3RoID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9pbnB1dFZhbHVlQ2hhbmdlc1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIF9zZXRJbnRlcm5hbENsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2ludGVybmFsQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3RvZ2dsZUlucHV0KCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IGNoaXAgZnJvbSB0aGUgYXV0b2NvbXBsZXRlLlxuICAgKiBJdCBjaGVjayBpZiBbcmVxdWlyZU1hdGNoXSBpcyBlbmFibGVkLCBhbmQgdHJpZXMgdG8gYWRkIHRoZSBmaXJzdCBhY3RpdmUgb3B0aW9uXG4gICAqIGVsc2UgaWYganVzdCBhZGRzIHRoZSB2YWx1ZSB0aGF0cyBvbiB0aGUgaW5wdXRcbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIF9oYW5kbGVBZGRDaGlwKCk6IGJvb2xlYW4ge1xuICAgIGxldCB2YWx1ZTogYW55O1xuICAgIGlmICh0aGlzLnJlcXVpcmVNYXRjaCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zOiBNYXRPcHRpb25bXSA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZpbHRlcigob3B0aW9uOiBNYXRPcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5hY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzZWxlY3Rpb24sIHRoZW4gdXNlIHRoYXRcbiAgICAgIC8vIGVsc2UgdXNlIHRoZSBpbnB1dCB2YWx1ZSBhcyBjaGlwXG4gICAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5faW5wdXRDaGlsZC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWRkQ2hpcCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXRzIGV4ZWN0dXRlZCB3aGVuIHRyeWluZyB0byBhZGQgYSB2YWx1ZSBhcyBjaGlwXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICBhZGRDaGlwKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAvKipcbiAgICAgKiBhZGQgYSBkZWJvdW5jZSBtcyBkZWxheSB3aGVuIHJlb3BlbmluZyB0aGUgYXV0b2NvbXBsZXRlIHRvIGdpdmUgaXQgdGltZVxuICAgICAqIHRvIHJlcmVuZGVyIHRoZSBuZXh0IGxpc3QgYW5kIGF0IHRoZSBjb3JyZWN0IHNwb3RcbiAgICAgKi9cblxuICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgdGltZXIodGhpcy5kZWJvdW5jZSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgICAgICB0aGlzLl9vcGVuQXV0b2NvbXBsZXRlKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVsXG4gICAgaWYgKHRoaXMudmFsdWUuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbSwgdmFsdWUpKSA+IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLmFkZC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdHJ5aW5nIHRvIHJlbW92ZSBhIGNoaXAuXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICByZW1vdmVDaGlwKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCByZW1vdmVkVmFsdWVzOiBhbnlbXSA9IHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAocmVtb3ZlZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgZGVsZXRpbmcgbGFzdCBzaW5nbGUgY2hpcCwgdG8gZm9jdXMgaW5wdXQgYWZ0ZXJ3YXJkc1xuICAgICAqIEVsc2UgY2hlY2sgaWYgaXRzIG5vdCB0aGUgbGFzdCBjaGlwIG9mIHRoZSBsaXN0IHRvIGZvY3VzIHRoZSBuZXh0IG9uZS5cbiAgICAgKi9cbiAgICBpZiAoaW5kZXggPT09IHRoaXMuX3RvdGFsQ2hpcHMgLSAxICYmIGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA8IHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSB7XG4gICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmUuZW1pdChyZW1vdmVkVmFsdWVzWzBdKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGJsdXIgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoaXBCbHVyLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50LCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICB0aGlzLmNoaXBGb2N1cy5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIF9oYW5kbGVGb2N1cygpOiBib29sZWFuIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzZXRGb2N1c2VkU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RhYkluZGV4ID0gLTE7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBmb2N1cyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmVGb2N1c2VkU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3RhYkluZGV4ID0gMDtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IGZvY3VzIHRoZSBpbnB1dCBvciBmaXJzdCBjaGlwLiBTaW5jZSBpdHMgdGhlIGNvbXBvbmVudCBlbnRyeSBwb2ludFxuICAgKiBkZXBlbmRpbmcgaWYgYSB1c2VyIGNhbiBhZGQgb3IgcmVtb3ZlIGNoaXBzXG4gICAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VzIHJlbGV2YW50IGlucHV0IGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2lucHV0S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpbmNlIHRoZSBmaXJzdCBpdGVtIGlzIGhpZ2hsaWdodGVkIG9uIFtyZXF1aXJlTWF0Y2hdLCB3ZSBuZWVkIHRvIGluYWN0aXZhdGUgaXRcbiAgICAgICAgICogd2hlbiBwcmVzc2luZyB0aGUgdXAga2V5XG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IHRoaXMuX29wdGlvbnMubGVuZ3RoO1xuICAgICAgICAgIGlmIChsZW5ndGggPiAxICYmIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLmFjdGl2ZSAmJiB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVswXS5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgY2FzZSBERUxFVEU6XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiBpbnB1dCBpcyBlbXB0eSB3aGVuIHByZXNzaW5nIGxlZnQgYXJyb3cgdG8gbW92ZSB0byB0aGUgbGFzdCBjaGlwICovXG4gICAgICAgIGlmICghdGhpcy5faW5wdXRDaGlsZC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzTGFzdENoaXAoKTtcbiAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIGlucHV0IGlzIGVtcHR5IHdoZW4gcHJlc3NpbmcgcmlnaHQgYXJyb3cgdG8gbW92ZSB0byB0aGUgZmlyc3QgY2hpcCAqL1xuICAgICAgICBpZiAoIXRoaXMuX2lucHV0Q2hpbGQudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBjaGlwIGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2NoaXBLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIHdlIGNhbiBkZWxldGUgYSBjaGlwICovXG4gICAgICAgIGlmICh0aGlzLmNhblJlbW92ZUNoaXApIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUNoaXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiBsZWZ0L2Rvd24gYXJyb3cgd2FzIHByZXNzZWQgd2hpbGUgZm9jdXNpbmcgdGhlIGZpcnN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgbGVmdFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiByaWdodC91cCBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgbGFzdCBjaGlwIHRvIGZvY3VzIGlucHV0IG5leHRcbiAgICAgICAgICogQWxzbyBjaGVjayBpZiBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLl90b3RhbENoaXBzIC0gMSkge1xuICAgICAgICAgIC8vIG9ubHkgdHJ5IHRvIHRhcmdldCBpbnB1dCBpZiBwcmVzc2luZyByaWdodFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCB0aGlzLl90b3RhbENoaXBzIC0gMSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBmcm9tIGRpc3BsYXkgdGhlIHZhbHVlIGFkZGVkIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBzaW5jZSBpdCBnb2VzIGRpcmVjdGx5IGFzIGNoaXAuXG4gICAqL1xuICBfcmVtb3ZlSW5wdXREaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBvcGVuIHRoZSBhdXRvY29tcGxldGUgbWFudWFsbHkgaWYgaXRzIG5vdCBhbHJlYWR5IG9wZW5lZFxuICAgKi9cbiAgX29wZW5BdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5vcGVuUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBfY2xvc2VBdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgb2YgY2hpcHNcbiAgICovXG4gIGdldCBfdG90YWxDaGlwcygpOiBudW1iZXIge1xuICAgIGNvbnN0IGNoaXBzOiBNYXRDaGlwW10gPSB0aGlzLl9jaGlwc0NoaWxkcmVuLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gY2hpcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBmb2N1cyBhIGRlc2lyZWQgY2hpcCBieSBpbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNDaGlwKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvKiogY2hlY2sgdG8gc2VlIGlmIGluZGV4IGV4aXN0cyBpbiB0aGUgYXJyYXkgYmVmb3JlIGZvY3VzaW5nICovXG4gICAgaWYgKGluZGV4ID4gLTEgJiYgdGhpcy5fdG90YWxDaGlwcyA+IGluZGV4KSB7XG4gICAgICB0aGlzLl9jaGlwc0NoaWxkcmVuLnRvQXJyYXkoKVtpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWV0aG9kIHRvIGZvY3VzIGZpcnN0IGNoaXAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNGaXJzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKDApO1xuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBsYXN0IGNoaXAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNMYXN0Q2hpcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c0NoaXAodGhpcy5fdG90YWxDaGlwcyAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0b2dnbGUgdGhlIGRpc2FibGUgc3RhdGUgb2YgaW5wdXRcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcEFkZGl0aW9uIGlzIHNldCB0byAndHJ1ZSdcbiAgICovXG4gIHByaXZhdGUgX3RvZ2dsZUlucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbkFkZENoaXApIHtcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLmVuYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5kaXNhYmxlKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZmlyc3Qgb3B0aW9uIGFzIGFjdGl2ZSB0byBsZXQgdGhlIHVzZXIga25vdyB3aGljaCBvbmUgd2lsbCBiZSBhZGRlZCB3aGVuIHByZXNzaW5nIGVudGVyXG4gICAqIE9ubHkgaWYgW3JlcXVpcmVNYXRjaF0gaGFzIGJlZW4gc2V0XG4gICAqL1xuICBwcml2YXRlIF9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgIC8vIG5lZWQgdG8gdXNlIGEgdGltZXIgaGVyZSB0byB3YWl0IHVudGlsIHRoZSBhdXRvY29tcGxldGUgaGFzIGJlZW4gb3BlbmVkIChlbmQgb2YgcXVldWUpXG4gICAgICB0aW1lcigpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY2xlYW4gdXAgb2YgcHJldmlvdXNseSBhY3RpdmUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KCkuZm9yRWFjaCgob3B0aW9uOiBNYXRPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgb25lIGFzIGFjdGl2ZVxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmUgdGhlIGZvY3VzXG4gICAqIFRoZSBhdXRvY29tcGxldGUgcGFuZWwgaXMgY29uc2lkZXJlZCBpbnNpZGUgdGhlIGNvbXBvbmVudCBzbyB3ZVxuICAgKiBuZWVkIHRvIHVzZSBhIGZsYWcgdG8gZmluZCBvdXQgd2hlbiBpdHMgY2xpY2tlZC5cbiAgICovXG4gIHByaXZhdGUgX3dhdGNoT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fb3V0c2lkZUNsaWNrU3VicyA9IG1lcmdlKGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ2NsaWNrJyksIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ3RvdWNoZW5kJykpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLl90b3VjaGVuZERlYm91bmNlKSxcbiAgICAgICAgICBmaWx0ZXIoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkICYmXG4gICAgICAgICAgICAgIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiZcbiAgICAgICAgICAgICAgIXRoaXMuX2ludGVybmFsQ2xpY2tcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5jbG9zZVBhbmVsKCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==