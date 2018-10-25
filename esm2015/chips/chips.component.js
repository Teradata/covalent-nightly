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
import { timer, merge, fromEvent } from 'rxjs';
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
        this._isMousedown = false;
        this._length = 0;
        this._stacked = false;
        this._requireMatch = false;
        this._color = 'primary';
        this._inputPosition = 'after';
        this._chipAddition = true;
        this._chipRemoval = true;
        this._focused = false;
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
        if (this._outsideClickSubs) {
            this._outsideClickSubs.unsubscribe();
            this._outsideClickSubs = undefined;
        }
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
            merge(fromEvent(this._document, 'click'), fromEvent(this._document, 'touchend')).pipe(debounceTime(this._touchendDebounce), filter((event) => {
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
                template: "<div class=\"td-chips-wrapper\"\n     [class.td-chips-stacked]=\"stacked\"\n     [class.td-chips-input-before-position]=\"inputPosition === 'before'\">\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip [class.td-chip-disabled]=\"disabled\"\n                   [class.td-chip-after-pad]=\"!canRemoveChip\"\n                   [disableRipple]=\"true\"\n                   [color]=\"color\"\n                   (keydown)=\"_chipKeydown($event, index)\"\n                   (blur)=\"_handleChipBlur($event, chip)\"\n                   (focus)=\"_handleChipFocus($event, chip)\">\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\">\n          </ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field floatLabel=\"never\"\n                  class=\"td-chips-form-field\"\n                  [style.width.px]=\"canAddChip ? null : 0\"\n                  [style.height.px]=\"canAddChip ? null : 0\"\n                  [color]=\"color\">\n    <input matInput\n            #input\n            [tabIndex]=\"-1\"\n            [matAutocomplete]=\"autocomplete\"\n            [formControl]=\"inputControl\"\n            [placeholder]=\"canAddChip? placeholder : ''\"\n            (keydown)=\"_inputKeydown($event)\"\n            (keyup.enter)=\"_handleAddChip()\"\n            (focus)=\"_handleFocus()\">\n  </mat-form-field>\n  <mat-autocomplete #autocomplete=\"matAutocomplete\"\n                   [displayWith]=\"_removeInputDisplay\"\n                   (optionSelected)=\"addChip($event.option.value)\">\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\">\n        </ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\"\n      [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\"\n        [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvIiwic291cmNlcyI6WyJjaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVcsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUM5RyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFDN0csaUJBQWlCLEVBQTRCLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFnQixHQUFHLEVBQVEsTUFBTSx1QkFBdUIsQ0FBQztBQUMxSSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RSxPQUFP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dCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIGZvcndhcmRSZWYsIERvQ2hlY2ssIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE9uSW5pdCwgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLCBPcHRpb25hbCwgSW5qZWN0LCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBIb3N0QmluZGluZywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFVQX0FSUk9XLCBET1dOX0FSUk9XLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBERUxFVEUsIEJBQ0tTUEFDRSwgRU5URVIsIFNQQUNFLCBUQUIsIEhPTUUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgTWF0Q2hpcCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0T3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB0aW1lciwgbWVyZ2UsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtY2hpcF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hpcERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWF1dG9jb21wbGV0ZS1vcHRpb25dbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRkQ2hpcHNCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZENoaXBzTWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihtaXhpbkRpc2FibGVkKFRkQ2hpcHNCYXNlKSwgW10pO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hpcHNDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1jaGlwcycsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwcy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hpcHNDb21wb25lbnQgZXh0ZW5kcyBfVGRDaGlwc01peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgRG9DaGVjaywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tTdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfaXNNb3VzZWRvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9pdGVtczogYW55W107XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RhY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlTWF0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuICBwcml2YXRlIF9pbnB1dFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInO1xuICBwcml2YXRlIF9jaGlwQWRkaXRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9jaGlwUmVtb3ZhbDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdGFiSW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvdWNoZW5kRGVib3VuY2U6IG51bWJlciA9IDEwMDtcblxuICBfaW50ZXJuYWxDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBfaW50ZXJuYWxBY3RpdmF0ZU9wdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgX25hdGl2ZUlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE1hdElucHV0KSBfaW5wdXRDaGlsZDogTWF0SW5wdXQ7XG4gIEBWaWV3Q2hpbGQoTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcikgX2F1dG9jb21wbGV0ZVRyaWdnZXI6IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXI7XG4gIEBWaWV3Q2hpbGRyZW4oTWF0Q2hpcCkgX2NoaXBzQ2hpbGRyZW46IFF1ZXJ5TGlzdDxNYXRDaGlwPjtcblxuICBAQ29udGVudENoaWxkKFRkQ2hpcERpcmVjdGl2ZSkgX2NoaXBUZW1wbGF0ZTogVGRDaGlwRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlKSBfYXV0b2NvbXBsZXRlT3B0aW9uVGVtcGxhdGU6IFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlO1xuXG4gIEBWaWV3Q2hpbGRyZW4oTWF0T3B0aW9uKSBfb3B0aW9uczogUXVlcnlMaXN0PE1hdE9wdGlvbj47XG5cbiAgLyoqXG4gICAqIEZsYWcgdGhhdCBpcyB0cnVlIHdoZW4gYXV0b2NvbXBsZXRlIGlzIGZvY3VzZWQuXG4gICAqL1xuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtQ29udHJvbCBmb3IgdGhlIG1hdElucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgLyoqXG4gICAqIGl0ZW1zPzogYW55W11cbiAgICogUmVuZGVycyB0aGUgYG1hdC1hdXRvY29tcGxldGVgIHdpdGggdGhlIHByb3ZpZGVkIGxpc3QgdG8gZGlzcGxheSBhcyBvcHRpb25zLlxuICAgKi9cbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBpdGVtcyhpdGVtczogYW55W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGl0ZW1zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogc3RhY2tlZD86IGJvb2xlYW5cbiAgICogU2V0IHN0YWNrZWQgb3IgaG9yaXpvbnRhbCBjaGlwcyBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCdzdGFja2VkJylcbiAgc2V0IHN0YWNrZWQoc3RhY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YWNrZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc3RhY2tlZCk7XG4gIH1cbiAgZ2V0IHN0YWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrZWQ7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRQb3NpdGlvbj86ICdiZWZvcmUnIHwgJ2FmdGVyJ1xuICAgKiBTZXQgaW5wdXQgcG9zaXRpb24gYmVmb3JlIG9yIGFmdGVyIHRoZSBjaGlwcy5cbiAgICogRGVmYXVsdHMgdG8gJ2FmdGVyJy5cbiAgICovXG4gIEBJbnB1dCgnaW5wdXRQb3NpdGlvbicpXG4gIHNldCBpbnB1dFBvc2l0aW9uKGlucHV0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJykge1xuICAgIHRoaXMuX2lucHV0UG9zaXRpb24gPSBpbnB1dFBvc2l0aW9uO1xuICB9XG4gIGdldCBpbnB1dFBvc2l0aW9uKCk6ICdiZWZvcmUnIHwgJ2FmdGVyJyB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZU1hdGNoPzogYm9vbGVhblxuICAgKiBCbG9ja3MgY3VzdG9tIGlucHV0cyBhbmQgb25seSBhbGxvd3Mgc2VsZWN0aW9ucyBmcm9tIHRoZSBhdXRvY29tcGxldGUgbGlzdC5cbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZU1hdGNoJylcbiAgc2V0IHJlcXVpcmVNYXRjaChyZXF1aXJlTWF0Y2g6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlTWF0Y2ggPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxdWlyZU1hdGNoKTtcbiAgfVxuICBnZXQgcmVxdWlyZU1hdGNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogY2hpcEFkZGl0aW9uPzogYm9vbGVhblxuICAgKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBhZGQgY2hpcHMuIFdoZW4gc2V0dGluZyBkaXNhYmxlZCBhcyB0cnVlLCB0aGlzIHdpbGwgYmUgb3ZlcnJpZGVuLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCdjaGlwQWRkaXRpb24nKVxuICBzZXQgY2hpcEFkZGl0aW9uKGNoaXBBZGRpdGlvbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoaXBBZGRpdGlvbiA9IGNoaXBBZGRpdGlvbjtcbiAgICB0aGlzLl90b2dnbGVJbnB1dCgpO1xuICB9XG4gIGdldCBjaGlwQWRkaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBBZGRpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgbm90IGluIGRpc2FibGVkIHN0YXRlIGFuZCBpZiBjaGlwQWRkaXRpb24gaXMgc2V0IHRvICd0cnVlJ1xuICAgKiBTdGF0ZXMgaWYgYSBjaGlwIGNhbiBiZSBhZGRlZCBhbmQgaWYgdGhlIGlucHV0IGlzIGF2YWlsYWJsZVxuICAgKi9cbiAgZ2V0IGNhbkFkZENoaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpcEFkZGl0aW9uICYmICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoaXBSZW1vdmFsPzogYm9vbGVhblxuICAgKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byByZW1vdmUgY2hpcHMuIElmIGl0IGRvZXNuJ3QgZXhpc3QgY2hpcCByZW1tb3ZhbCBkZWZhdWx0cyB0byB0cnVlLlxuICAgKiBXaGVuIHNldHRpbmcgZGlzYWJsZWQgYXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIG92ZXJyaWRlbiB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnY2hpcFJlbW92YWwnKVxuICBzZXQgY2hpcFJlbW92YWwoY2hpcFJlbW92YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGlwUmVtb3ZhbCA9IGNoaXBSZW1vdmFsO1xuICB9XG4gIGdldCBjaGlwUmVtb3ZhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpcFJlbW92YWw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcFJlbW92YWwgaXMgc2V0IHRvICd0cnVlJ1xuICAgKiBTdGF0ZXMgaWYgYSBjaGlwIGNhbiBiZSByZW1vdmVkXG4gICAqL1xuICBnZXQgY2FuUmVtb3ZlQ2hpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwUmVtb3ZhbCAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBkZWJvdW5jZT86IG51bWJlclxuICAgKiBEZWJvdW5jZSB0aW1lb3V0IGJldHdlZW4ga2V5cHJlc3Nlcy4gRGVmYXVsdHMgdG8gMjAwLlxuICAgKi9cbiAgQElucHV0KCdkZWJvdW5jZScpIGRlYm91bmNlOiBudW1iZXIgPSAyMDA7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGUgY29sb3IgZm9yIHRoZSBpbnB1dCBhbmQgZm9jdXMvc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGNoaXBzLlxuICAgKiBEZWZhdWx0cyB0byAncHJpbWFyeSdcbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCk6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogYWRkPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGFkZGVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnYWRkJykgb25BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIHJlbW92ZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyByZW1vdmVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgncmVtb3ZlJykgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIGlucHV0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHZhbHVlIGluIHRoZSBhdXRvY29tcGxldGUgaW5wdXQgY2hhbmdlcy5cbiAgICogU2VuZHMgc3RyaW5nIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnaW5wdXRDaGFuZ2UnKSBvbklucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjaGlwRm9jdXM/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgZm9jdXNlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2NoaXBGb2N1cycpIG9uQ2hpcEZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBibHVyPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGJsdXJyZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCdjaGlwQmx1cicpIG9uQ2hpcEJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEhvc3RiaW5kaW5nIHRvIHNldCB0aGUgYTExeSBvZiB0aGUgVGRDaGlwc0NvbXBvbmVudCBkZXBlbmRpbmcgb24gaXRzIHN0YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogdGhpcy5fdGFiSW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgZm9jdXMgZXZlbnQgdG8gYWN0IG9uIGl0XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIGZvY3VzTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBzaG91bGQgb25seSBmb2N1cyBpZiBpdHMgbm90IHZpYSBtb3VzZWRvd24gdG8gcHJldmVudCBjbGFzaGluZyB3aXRoIGF1dG9jb21wbGV0ZVxuICAgIGlmICghdGhpcy5faXNNb3VzZWRvd24pIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgbW91c2Vkb3duIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgbW91c2Vkb3duTGlzdGVuZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICAgLy8gc2V0cyBhIGZsYWcgdG8ga25vdyBpZiB0aGVyZSB3YXMgYSBtb3VzZWRvd24gYW5kIHRoZW4gaXQgcmV0dXJucyBpdCBiYWNrIHRvIGZhbHNlXG4gICAgdGhpcy5faXNNb3VzZWRvd24gPSB0cnVlO1xuICAgIHRpbWVyKCkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9pc01vdXNlZG93biA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGNsaWNraW5nIG9uIDpob3N0IG9yIGB0ZC1jaGlwcy13cmFwcGVyYCwgdGhlbiB3ZSBzdG9wIHRoZSBjbGljayBwcm9wYWdhdGlvbiBzbyB0aGUgYXV0b2NvbXBsZXRlXG4gICAqIGRvZXNudCBjbG9zZSBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja0xpc3RlbmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNsaWNrVGFyZ2V0OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGNsaWNrVGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgfHxcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3RkLWNoaXBzLXdyYXBwZXInKSA+IC0xKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gaG9zdCBrZXlkb3duIGV2ZW50IHRvIGFjdCBvbiBpdCBkZXBlbmRpbmcgb24gdGhlIGtleXByZXNzXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIFRBQjpcbiAgICAgICAgLy8gaWYgdGFiaW5nIG91dCwgdGhlbiB1bmZvY3VzIHRoZSBjb21wb25lbnRcbiAgICAgICAgdGltZXIoKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVTQ0FQRTpcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0Q2hpbGQuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSksXG4gICAgKS5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMub25JbnB1dENoYW5nZS5lbWl0KHZhbHVlID8gdmFsdWUgOiAnJyk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fd2F0Y2hPdXRzaWRlQ2xpY2soKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAvLyBUaHJvdyBvbkNoYW5nZSBldmVudCBvbmx5IGlmIGFycmF5IGNoYW5nZXMgc2l6ZS5cbiAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCAhPT0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICB0aGlzLl9sZW5ndGggPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX291dHNpZGVDbGlja1N1YnMpIHtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgX3NldEludGVybmFsQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5faW50ZXJuYWxDbGljayA9IHRydWU7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdG9nZ2xlSW5wdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgY2hpcCBmcm9tIHRoZSBhdXRvY29tcGxldGUuXG4gICAqIEl0IGNoZWNrIGlmIFtyZXF1aXJlTWF0Y2hdIGlzIGVuYWJsZWQsIGFuZCB0cmllcyB0byBhZGQgdGhlIGZpcnN0IGFjdGl2ZSBvcHRpb25cbiAgICogZWxzZSBpZiBqdXN0IGFkZHMgdGhlIHZhbHVlIHRoYXRzIG9uIHRoZSBpbnB1dFxuICAgKiByZXR1cm5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCAnZmFsc2UnIGlmIGl0IGZhaWxzLlxuICAgKi9cbiAgX2hhbmRsZUFkZENoaXAoKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zOiBNYXRPcHRpb25bXSA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZpbHRlcigob3B0aW9uOiBNYXRPcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5hY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzZWxlY3Rpb24sIHRoZW4gdXNlIHRoYXRcbiAgICAgIC8vIGVsc2UgdXNlIHRoZSBpbnB1dCB2YWx1ZSBhcyBjaGlwXG4gICAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5faW5wdXRDaGlsZC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWRkQ2hpcCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXRzIGV4ZWN0dXRlZCB3aGVuIHRyeWluZyB0byBhZGQgYSB2YWx1ZSBhcyBjaGlwXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICBhZGRDaGlwKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAvKipcbiAgICAgKiBhZGQgYSBkZWJvdW5jZSBtcyBkZWxheSB3aGVuIHJlb3BlbmluZyB0aGUgYXV0b2NvbXBsZXRlIHRvIGdpdmUgaXQgdGltZVxuICAgICAqIHRvIHJlcmVuZGVyIHRoZSBuZXh0IGxpc3QgYW5kIGF0IHRoZSBjb3JyZWN0IHNwb3RcbiAgICAgKi9cbiAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgIHRpbWVyKHRoaXMuZGVib3VuY2UpLnRvUHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgICB0aGlzLl9vcGVuQXV0b2NvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlucHV0Q29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgYWxyZWFkeSBwYXJ0IG9mIHRoZSBtb2RlbFxuICAgIGlmICh0aGlzLnZhbHVlLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlLnB1c2godmFsdWUpO1xuICAgIHRoaXMub25BZGQuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRyeWluZyB0byByZW1vdmUgYSBjaGlwLlxuICAgKiByZXR1cm5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCAnZmFsc2UnIGlmIGl0IGZhaWxzLlxuICAgKi9cbiAgcmVtb3ZlQ2hpcChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlbW92ZWRWYWx1ZXM6IGFueVtdID0gdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBkZWxldGluZyBsYXN0IHNpbmdsZSBjaGlwLCB0byBmb2N1cyBpbnB1dCBhZnRlcndhcmRzXG4gICAgICogRWxzZSBjaGVjayBpZiBpdHMgbm90IHRoZSBsYXN0IGNoaXAgb2YgdGhlIGxpc3QgdG8gZm9jdXMgdGhlIG5leHQgb25lLlxuICAgICAqL1xuICAgIGlmIChpbmRleCA9PT0gKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPCAodGhpcy5fdG90YWxDaGlwcyAtIDEpKSB7XG4gICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgdGhpcy5vblJlbW92ZS5lbWl0KHJlbW92ZWRWYWx1ZXNbMF0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5pbnB1dENvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYmx1ciBvZiBjaGlwIGFuZCBzZW5kcyBvdXQgZXZlbnRcbiAgICovXG4gIF9oYW5kbGVDaGlwQmx1cihldmVudDogRm9jdXNFdmVudCwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGlwQmx1ci5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9mIGNoaXAgYW5kIHNlbmRzIG91dCBldmVudFxuICAgKi9cbiAgX2hhbmRsZUNoaXBGb2N1cyhldmVudDogRm9jdXNFdmVudCwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Rm9jdXNlZFN0YXRlKCk7XG4gICAgdGhpcy5vbkNoaXBGb2N1cy5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIF9oYW5kbGVGb2N1cygpOiBib29sZWFuIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMuX3NldEZpcnN0T3B0aW9uQWN0aXZlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzZXRGb2N1c2VkU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RhYkluZGV4ID0gLTE7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBmb2N1cyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmVGb2N1c2VkU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3RhYkluZGV4ID0gMDtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IGZvY3VzIHRoZSBpbnB1dCBvciBmaXJzdCBjaGlwLiBTaW5jZSBpdHMgdGhlIGNvbXBvbmVudCBlbnRyeSBwb2ludFxuICAgKiBkZXBlbmRpbmcgaWYgYSB1c2VyIGNhbiBhZGQgb3IgcmVtb3ZlIGNoaXBzXG4gICAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VzIHJlbGV2YW50IGlucHV0IGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2lucHV0S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpbmNlIHRoZSBmaXJzdCBpdGVtIGlzIGhpZ2hsaWdodGVkIG9uIFtyZXF1aXJlTWF0Y2hdLCB3ZSBuZWVkIHRvIGluYWN0aXZhdGUgaXRcbiAgICAgICAgICogd2hlbiBwcmVzc2luZyB0aGUgdXAga2V5XG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLl9vcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICBpZiAobGVuZ3RoID4gMSAmJiB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVswXS5hY3RpdmUgJiYgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQWN0aXZhdGVPcHRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgIGNhc2UgREVMRVRFOlxuICAgICAgY2FzZSBCQUNLU1BBQ0U6XG4gICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIC8qKiBDaGVjayB0byBzZWUgaWYgaW5wdXQgaXMgZW1wdHkgd2hlbiBwcmVzc2luZyBsZWZ0IGFycm93IHRvIG1vdmUgdG8gdGhlIGxhc3QgY2hpcCAqL1xuICAgICAgICBpZiAoIXRoaXMuX2lucHV0Q2hpbGQudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiBpbnB1dCBpcyBlbXB0eSB3aGVuIHByZXNzaW5nIHJpZ2h0IGFycm93IHRvIG1vdmUgdG8gdGhlIGZpcnN0IGNoaXAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dENoaWxkLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNGaXJzdENoaXAoKTtcbiAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBjaGlwIGtleSBwcmVzc2VzLlxuICAgKi9cbiAgX2NoaXBLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIHdlIGNhbiBkZWxldGUgYSBjaGlwICovXG4gICAgICAgIGlmICh0aGlzLmNhblJlbW92ZUNoaXApIHtcbiAgICAgICAgIHRoaXMucmVtb3ZlQ2hpcChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIGxlZnQvZG93biBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgZmlyc3QgY2hpcCB0byBmb2N1cyBpbnB1dCBuZXh0XG4gICAgICAgICAqIEFsc28gY2hlY2sgaWYgaW5wdXQgc2hvdWxkIGJlIGZvY3VzZWRcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIC8vIG9ubHkgdHJ5IHRvIHRhcmdldCBpbnB1dCBpZiBwcmVzc2luZyBsZWZ0XG4gICAgICAgICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCAmJiBldmVudC5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzTGFzdENoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIHJpZ2h0L3VwIGFycm93IHdhcyBwcmVzc2VkIHdoaWxlIGZvY3VzaW5nIHRoZSBsYXN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLl90b3RhbENoaXBzIC0gMSkpIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgcmlnaHRcbiAgICAgICAgICBpZiAodGhpcy5jYW5BZGRDaGlwICYmIGV2ZW50LmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcmVtb3ZlIGZyb20gZGlzcGxheSB0aGUgdmFsdWUgYWRkZWQgZnJvbSB0aGUgYXV0b2NvbXBsZXRlIHNpbmNlIGl0IGdvZXMgZGlyZWN0bHkgYXMgY2hpcC5cbiAgICovXG4gIF9yZW1vdmVJbnB1dERpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIG9wZW4gdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgb3BlbmVkXG4gICAqL1xuICBfb3BlbkF1dG9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLm9wZW5QYW5lbCgpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjbG9zZSB0aGUgYXV0b2NvbXBsZXRlIG1hbnVhbGx5IGlmIGl0cyBub3QgYWxyZWFkeSBjbG9zZWRcbiAgICovXG4gIF9jbG9zZUF1dG9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuY2xvc2VQYW5lbCgpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0b3RhbCBvZiBjaGlwc1xuICAgKi9cbiAgZ2V0IF90b3RhbENoaXBzKCk6IG51bWJlciB7XG4gICAgbGV0IGNoaXBzOiBNYXRDaGlwW10gPSB0aGlzLl9jaGlwc0NoaWxkcmVuLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gY2hpcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBmb2N1cyBhIGRlc2lyZWQgY2hpcCBieSBpbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNDaGlwKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvKiogY2hlY2sgdG8gc2VlIGlmIGluZGV4IGV4aXN0cyBpbiB0aGUgYXJyYXkgYmVmb3JlIGZvY3VzaW5nICovXG4gICAgaWYgKGluZGV4ID4gLTEgJiYgdGhpcy5fdG90YWxDaGlwcyA+IGluZGV4KSB7XG4gICAgICB0aGlzLl9jaGlwc0NoaWxkcmVuLnRvQXJyYXkoKVtpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWV0aG9kIHRvIGZvY3VzIGZpcnN0IGNoaXAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNGaXJzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKDApO1xuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBsYXN0IGNoaXAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNMYXN0Q2hpcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c0NoaXAodGhpcy5fdG90YWxDaGlwcyAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0b2dnbGUgdGhlIGRpc2FibGUgc3RhdGUgb2YgaW5wdXRcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcEFkZGl0aW9uIGlzIHNldCB0byAndHJ1ZSdcbiAgICovXG4gIHByaXZhdGUgX3RvZ2dsZUlucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbkFkZENoaXApIHtcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLmVuYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5kaXNhYmxlKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZmlyc3Qgb3B0aW9uIGFzIGFjdGl2ZSB0byBsZXQgdGhlIHVzZXIga25vdyB3aGljaCBvbmUgd2lsbCBiZSBhZGRlZCB3aGVuIHByZXNzaW5nIGVudGVyXG4gICAqIE9ubHkgaWYgW3JlcXVpcmVNYXRjaF0gaGFzIGJlZW4gc2V0XG4gICAqL1xuICBwcml2YXRlIF9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgIC8vIG5lZWQgdG8gdXNlIGEgdGltZXIgaGVyZSB0byB3YWl0IHVudGlsIHRoZSBhdXRvY29tcGxldGUgaGFzIGJlZW4gb3BlbmVkIChlbmQgb2YgcXVldWUpXG4gICAgICB0aW1lcigpLnRvUHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkICYmIHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gY2xlYW4gdXAgb2YgcHJldmlvdXNseSBhY3RpdmUgb3B0aW9uc1xuICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZvckVhY2goKG9wdGlvbjogTWF0T3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IG9uZSBhcyBhY3RpdmVcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVswXS5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmUgdGhlIGZvY3VzXG4gICAqIFRoZSBhdXRvY29tcGxldGUgcGFuZWwgaXMgY29uc2lkZXJlZCBpbnNpZGUgdGhlIGNvbXBvbmVudCBzbyB3ZVxuICAgKiBuZWVkIHRvIHVzZSBhIGZsYWcgdG8gZmluZCBvdXQgd2hlbiBpdHMgY2xpY2tlZC5cbiAgICovXG4gIHByaXZhdGUgX3dhdGNoT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgbWVyZ2UoXG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ2NsaWNrJyksXG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ3RvdWNoZW5kJyksXG4gICAgICApLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLl90b3VjaGVuZERlYm91bmNlKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9pbnRlcm5hbENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgICAgICAgICAgIChjbGlja1RhcmdldCAhPT0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSAmJlxuICAgICAgICAgICAgICAgICAgIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiYgIXRoaXMuX2ludGVybmFsQ2xpY2s7XG4gICAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuY2xvc2VQYW5lbCgpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXNlZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==