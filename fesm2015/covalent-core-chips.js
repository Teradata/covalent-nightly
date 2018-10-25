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
import { timer, merge, fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChipDirective extends TemplatePortalDirective {
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
class TdAutocompleteOptionDirective extends TemplatePortalDirective {
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
class TdChipsBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdChipsMixinBase = mixinControlValueAccessor(mixinDisabled(TdChipsBase), []);
class TdChipsComponent extends _TdChipsMixinBase {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentChipsModule {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jaGlwcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvY2hpcHMvY2hpcHMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jaGlwcy9jaGlwcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBmb3J3YXJkUmVmLCBEb0NoZWNrLCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBPbkluaXQsIEhvc3RMaXN0ZW5lcixcbiAgRWxlbWVudFJlZiwgT3B0aW9uYWwsIEluamVjdCwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBVUF9BUlJPVywgRE9XTl9BUlJPVywgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgREVMRVRFLCBCQUNLU1BBQ0UsIEVOVEVSLCBTUEFDRSwgVEFCLCBIT01FIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE1hdENoaXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdE9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgdGltZXIsIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWNoaXBdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoaXBEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1hdXRvY29tcGxldGUtb3B0aW9uXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZENoaXBzQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRDaGlwc01peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IobWl4aW5EaXNhYmxlZChUZENoaXBzQmFzZSksIFtdKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoaXBzQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIHNlbGVjdG9yOiAndGQtY2hpcHMnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAndmFsdWUnXSxcbiAgc3R5bGVVcmxzOiBbJy4vY2hpcHMuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGlwcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoaXBzQ29tcG9uZW50IGV4dGVuZHMgX1RkQ2hpcHNNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIERvQ2hlY2ssIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJQ2FuRGlzYWJsZSB7XG5cbiAgcHJpdmF0ZSBfb3V0c2lkZUNsaWNrU3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX2lzTW91c2Vkb3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdO1xuICBwcml2YXRlIF9sZW5ndGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3N0YWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZU1hdGNoOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcbiAgcHJpdmF0ZSBfaW5wdXRQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2FmdGVyJztcbiAgcHJpdmF0ZSBfY2hpcEFkZGl0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfY2hpcFJlbW92YWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3RhYkluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b3VjaGVuZERlYm91bmNlOiBudW1iZXIgPSAxMDA7XG5cbiAgX2ludGVybmFsQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2ludGVybmFsQWN0aXZhdGVPcHRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIF9uYXRpdmVJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChNYXRJbnB1dCkgX2lucHV0Q2hpbGQ6IE1hdElucHV0O1xuICBAVmlld0NoaWxkKE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIpIF9hdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xuICBAVmlld0NoaWxkcmVuKE1hdENoaXApIF9jaGlwc0NoaWxkcmVuOiBRdWVyeUxpc3Q8TWF0Q2hpcD47XG5cbiAgQENvbnRlbnRDaGlsZChUZENoaXBEaXJlY3RpdmUpIF9jaGlwVGVtcGxhdGU6IFRkQ2hpcERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZSkgX2F1dG9jb21wbGV0ZU9wdGlvblRlbXBsYXRlOiBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZTtcblxuICBAVmlld0NoaWxkcmVuKE1hdE9wdGlvbikgX29wdGlvbnM6IFF1ZXJ5TGlzdDxNYXRPcHRpb24+O1xuXG4gIC8qKlxuICAgKiBGbGFnIHRoYXQgaXMgdHJ1ZSB3aGVuIGF1dG9jb21wbGV0ZSBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICAvKipcbiAgICogRm9ybUNvbnRyb2wgZm9yIHRoZSBtYXRJbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIC8qKlxuICAgKiBpdGVtcz86IGFueVtdXG4gICAqIFJlbmRlcnMgdGhlIGBtYXQtYXV0b2NvbXBsZXRlYCB3aXRoIHRoZSBwcm92aWRlZCBsaXN0IHRvIGRpc3BsYXkgYXMgb3B0aW9ucy5cbiAgICovXG4gIEBJbnB1dCgnaXRlbXMnKVxuICBzZXQgaXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0YWNrZWQ/OiBib29sZWFuXG4gICAqIFNldCBzdGFja2VkIG9yIGhvcml6b250YWwgY2hpcHMgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnc3RhY2tlZCcpXG4gIHNldCBzdGFja2VkKHN0YWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGFja2VkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHN0YWNrZWQpO1xuICB9XG4gIGdldCBzdGFja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGFja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0UG9zaXRpb24/OiAnYmVmb3JlJyB8ICdhZnRlcidcbiAgICogU2V0IGlucHV0IHBvc2l0aW9uIGJlZm9yZSBvciBhZnRlciB0aGUgY2hpcHMuXG4gICAqIERlZmF1bHRzIHRvICdhZnRlcicuXG4gICAqL1xuICBASW5wdXQoJ2lucHV0UG9zaXRpb24nKVxuICBzZXQgaW5wdXRQb3NpdGlvbihpbnB1dFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicpIHtcbiAgICB0aGlzLl9pbnB1dFBvc2l0aW9uID0gaW5wdXRQb3NpdGlvbjtcbiAgfVxuICBnZXQgaW5wdXRQb3NpdGlvbigpOiAnYmVmb3JlJyB8ICdhZnRlcicge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVpcmVNYXRjaD86IGJvb2xlYW5cbiAgICogQmxvY2tzIGN1c3RvbSBpbnB1dHMgYW5kIG9ubHkgYWxsb3dzIHNlbGVjdGlvbnMgZnJvbSB0aGUgYXV0b2NvbXBsZXRlIGxpc3QuXG4gICAqL1xuICBASW5wdXQoJ3JlcXVpcmVNYXRjaCcpXG4gIHNldCByZXF1aXJlTWF0Y2gocmVxdWlyZU1hdGNoOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZU1hdGNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVNYXRjaCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVNYXRjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZU1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoaXBBZGRpdGlvbj86IGJvb2xlYW5cbiAgICogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gYWRkIGNoaXBzLiBXaGVuIHNldHRpbmcgZGlzYWJsZWQgYXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIG92ZXJyaWRlbi5cbiAgICogRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgnY2hpcEFkZGl0aW9uJylcbiAgc2V0IGNoaXBBZGRpdGlvbihjaGlwQWRkaXRpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGlwQWRkaXRpb24gPSBjaGlwQWRkaXRpb247XG4gICAgdGhpcy5fdG9nZ2xlSW5wdXQoKTtcbiAgfVxuICBnZXQgY2hpcEFkZGl0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlwQWRkaXRpb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIG5vdCBpbiBkaXNhYmxlZCBzdGF0ZSBhbmQgaWYgY2hpcEFkZGl0aW9uIGlzIHNldCB0byAndHJ1ZSdcbiAgICogU3RhdGVzIGlmIGEgY2hpcCBjYW4gYmUgYWRkZWQgYW5kIGlmIHRoZSBpbnB1dCBpcyBhdmFpbGFibGVcbiAgICovXG4gIGdldCBjYW5BZGRDaGlwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoaXBBZGRpdGlvbiAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGlwUmVtb3ZhbD86IGJvb2xlYW5cbiAgICogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gcmVtb3ZlIGNoaXBzLiBJZiBpdCBkb2Vzbid0IGV4aXN0IGNoaXAgcmVtbW92YWwgZGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICogV2hlbiBzZXR0aW5nIGRpc2FibGVkIGFzIHRydWUsIHRoaXMgd2lsbCBiZSBvdmVycmlkZW4gdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ2NoaXBSZW1vdmFsJylcbiAgc2V0IGNoaXBSZW1vdmFsKGNoaXBSZW1vdmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hpcFJlbW92YWwgPSBjaGlwUmVtb3ZhbDtcbiAgfVxuICBnZXQgY2hpcFJlbW92YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBSZW1vdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBSZW1vdmFsIGlzIHNldCB0byAndHJ1ZSdcbiAgICogU3RhdGVzIGlmIGEgY2hpcCBjYW4gYmUgcmVtb3ZlZFxuICAgKi9cbiAgZ2V0IGNhblJlbW92ZUNoaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpcFJlbW92YWwgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDIwMC5cbiAgICovXG4gIEBJbnB1dCgnZGVib3VuY2UnKSBkZWJvdW5jZTogbnVtYmVyID0gMjAwO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nXG4gICAqIFNldHMgdGhlIGNvbG9yIGZvciB0aGUgaW5wdXQgYW5kIGZvY3VzL3NlbGVjdGVkIHN0YXRlIG9mIHRoZSBjaGlwcy5cbiAgICogRGVmYXVsdHMgdG8gJ3ByaW1hcnknXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJylcbiAgc2V0IGNvbG9yKGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJykge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZD86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyBhZGRlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2FkZCcpIG9uQWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiByZW1vdmU/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgcmVtb3ZlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ3JlbW92ZScpIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBpbnB1dENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSB2YWx1ZSBpbiB0aGUgYXV0b2NvbXBsZXRlIGlucHV0IGNoYW5nZXMuXG4gICAqIFNlbmRzIHN0cmluZyB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2lucHV0Q2hhbmdlJykgb25JbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogY2hpcEZvY3VzPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGZvY3VzZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCdjaGlwRm9jdXMnKSBvbkNoaXBGb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogYmx1cj86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyBibHVycmVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnY2hpcEJsdXInKSBvbkNoaXBCbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBIb3N0YmluZGluZyB0byBzZXQgdGhlIGExMXkgb2YgdGhlIFRkQ2hpcHNDb21wb25lbnQgZGVwZW5kaW5nIG9uIGl0cyBzdGF0ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAtMSA6IHRoaXMuX3RhYkluZGV4O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICAgICAgICAgICAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGZvY3VzIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICBmb2N1c0xpc3RlbmVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgLy8gc2hvdWxkIG9ubHkgZm9jdXMgaWYgaXRzIG5vdCB2aWEgbW91c2Vkb3duIHRvIHByZXZlbnQgY2xhc2hpbmcgd2l0aCBhdXRvY29tcGxldGVcbiAgICBpZiAoIXRoaXMuX2lzTW91c2Vkb3duKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IG1vdXNlZG93biBldmVudCB0byBhY3Qgb24gaXRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG1vdXNlZG93bkxpc3RlbmVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgIC8vIHNldHMgYSBmbGFnIHRvIGtub3cgaWYgdGhlcmUgd2FzIGEgbW91c2Vkb3duIGFuZCB0aGVuIGl0IHJldHVybnMgaXQgYmFjayB0byBmYWxzZVxuICAgIHRoaXMuX2lzTW91c2Vkb3duID0gdHJ1ZTtcbiAgICB0aW1lcigpLnRvUHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5faXNNb3VzZWRvd24gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBjbGlja2luZyBvbiA6aG9zdCBvciBgdGQtY2hpcHMtd3JhcHBlcmAsIHRoZW4gd2Ugc3RvcCB0aGUgY2xpY2sgcHJvcGFnYXRpb24gc28gdGhlIGF1dG9jb21wbGV0ZVxuICAgKiBkb2VzbnQgY2xvc2UgYXV0b21hdGljYWxseS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjbGlja1RhcmdldCA9PT0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IHx8XG4gICAgICAgIGNsaWNrVGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCd0ZC1jaGlwcy13cmFwcGVyJykgPiAtMSkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3Qga2V5ZG93biBldmVudCB0byBhY3Qgb24gaXQgZGVwZW5kaW5nIG9uIHRoZSBrZXlwcmVzc1xuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIGtleWRvd25MaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIC8vIGlmIHRhYmluZyBvdXQsIHRoZW4gdW5mb2N1cyB0aGUgY29tcG9uZW50XG4gICAgICAgIHRpbWVyKCkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFU0NBUEU6XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dENoaWxkLmZvY3VzZWQpIHtcbiAgICAgICAgICB0aGlzLl9uYXRpdmVJbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpLFxuICAgICkuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSA/IHZhbHVlIDogJycpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3dhdGNoT3V0c2lkZUNsaWNrKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gVGhyb3cgb25DaGFuZ2UgZXZlbnQgb25seSBpZiBhcnJheSBjaGFuZ2VzIHNpemUuXG4gICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggIT09IHRoaXMuX2xlbmd0aCkge1xuICAgICAgdGhpcy5fbGVuZ3RoID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vdXRzaWRlQ2xpY2tTdWJzKSB7XG4gICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tTdWJzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRJbnRlcm5hbENsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2ludGVybmFsQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3RvZ2dsZUlucHV0KCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IGNoaXAgZnJvbSB0aGUgYXV0b2NvbXBsZXRlLlxuICAgKiBJdCBjaGVjayBpZiBbcmVxdWlyZU1hdGNoXSBpcyBlbmFibGVkLCBhbmQgdHJpZXMgdG8gYWRkIHRoZSBmaXJzdCBhY3RpdmUgb3B0aW9uXG4gICAqIGVsc2UgaWYganVzdCBhZGRzIHRoZSB2YWx1ZSB0aGF0cyBvbiB0aGUgaW5wdXRcbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIF9oYW5kbGVBZGRDaGlwKCk6IGJvb2xlYW4ge1xuICAgIGxldCB2YWx1ZTogYW55O1xuICAgIGlmICh0aGlzLnJlcXVpcmVNYXRjaCkge1xuICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uczogTWF0T3B0aW9uW10gPSB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKS5maWx0ZXIoKG9wdGlvbjogTWF0T3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24uYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBpZiAoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbnNbMF0udmFsdWU7XG4gICAgICAgIHNlbGVjdGVkT3B0aW9uc1swXS5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgfVxuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc2VsZWN0aW9uLCB0aGVuIHVzZSB0aGF0XG4gICAgICAvLyBlbHNlIHVzZSB0aGUgaW5wdXQgdmFsdWUgYXMgY2hpcFxuICAgICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5hY3RpdmVPcHRpb24udmFsdWU7XG4gICAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuYWN0aXZlT3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX2lucHV0Q2hpbGQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFkZENoaXAodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0cyBleGVjdHV0ZWQgd2hlbiB0cnlpbmcgdG8gYWRkIGEgdmFsdWUgYXMgY2hpcFxuICAgKiByZXR1cm5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCAnZmFsc2UnIGlmIGl0IGZhaWxzLlxuICAgKi9cbiAgYWRkQ2hpcCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgLyoqXG4gICAgICogYWRkIGEgZGVib3VuY2UgbXMgZGVsYXkgd2hlbiByZW9wZW5pbmcgdGhlIGF1dG9jb21wbGV0ZSB0byBnaXZlIGl0IHRpbWVcbiAgICAgKiB0byByZXJlbmRlciB0aGUgbmV4dCBsaXN0IGFuZCBhdCB0aGUgY29ycmVjdCBzcG90XG4gICAgICovXG4gICAgdGhpcy5fY2xvc2VBdXRvY29tcGxldGUoKTtcbiAgICB0aW1lcih0aGlzLmRlYm91bmNlKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0Rm9jdXNlZFN0YXRlKCk7XG4gICAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgICAgdGhpcy5fb3BlbkF1dG9jb21wbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dENvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIGFscmVhZHkgcGFydCBvZiB0aGUgbW9kZWxcbiAgICBpZiAodGhpcy52YWx1ZS5pbmRleE9mKHZhbHVlKSA+IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLm9uQWRkLmVtaXQodmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0cnlpbmcgdG8gcmVtb3ZlIGEgY2hpcC5cbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIHJlbW92ZUNoaXAoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCByZW1vdmVkVmFsdWVzOiBhbnlbXSA9IHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAocmVtb3ZlZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgZGVsZXRpbmcgbGFzdCBzaW5nbGUgY2hpcCwgdG8gZm9jdXMgaW5wdXQgYWZ0ZXJ3YXJkc1xuICAgICAqIEVsc2UgY2hlY2sgaWYgaXRzIG5vdCB0aGUgbGFzdCBjaGlwIG9mIHRoZSBsaXN0IHRvIGZvY3VzIHRoZSBuZXh0IG9uZS5cbiAgICAgKi9cbiAgICBpZiAoaW5kZXggPT09ICh0aGlzLl90b3RhbENoaXBzIC0gMSkgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuX2lucHV0Q2hpbGQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSkge1xuICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4ICsgMSk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IDApIHtcbiAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHRoaXMub25SZW1vdmUuZW1pdChyZW1vdmVkVmFsdWVzWzBdKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGJsdXIgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hpcEJsdXIuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvZiBjaGlwIGFuZCBzZW5kcyBvdXQgZXZlbnRcbiAgICovXG4gIF9oYW5kbGVDaGlwRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGlwRm9jdXMuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc2V0Rm9jdXNlZFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZm9jdXMgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlRm9jdXNlZFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl90YWJJbmRleCA9IDA7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvZ3JhbW1hdGljYWxseSBmb2N1cyB0aGUgaW5wdXQgb3IgZmlyc3QgY2hpcC4gU2luY2UgaXRzIHRoZSBjb21wb25lbnQgZW50cnkgcG9pbnRcbiAgICogZGVwZW5kaW5nIGlmIGEgdXNlciBjYW4gYWRkIG9yIHJlbW92ZSBjaGlwc1xuICAgKi9cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCkge1xuICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBpbnB1dCBrZXkgcHJlc3Nlcy5cbiAgICovXG4gIF9pbnB1dEtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW5jZSB0aGUgZmlyc3QgaXRlbSBpcyBoaWdobGlnaHRlZCBvbiBbcmVxdWlyZU1hdGNoXSwgd2UgbmVlZCB0byBpbmFjdGl2YXRlIGl0XG4gICAgICAgICAqIHdoZW4gcHJlc3NpbmcgdGhlIHVwIGtleVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5fb3B0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uYWN0aXZlICYmIHRoaXMuX2ludGVybmFsQWN0aXZhdGVPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIGlucHV0IGlzIGVtcHR5IHdoZW4gcHJlc3NpbmcgbGVmdCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBsYXN0IGNoaXAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dENoaWxkLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNMYXN0Q2hpcCgpO1xuICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIC8qKiBDaGVjayB0byBzZWUgaWYgaW5wdXQgaXMgZW1wdHkgd2hlbiBwcmVzc2luZyByaWdodCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBmaXJzdCBjaGlwICovXG4gICAgICAgIGlmICghdGhpcy5faW5wdXRDaGlsZC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzZXMgcmVsZXZhbnQgY2hpcCBrZXkgcHJlc3Nlcy5cbiAgICovXG4gIF9jaGlwS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBERUxFVEU6XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiB3ZSBjYW4gZGVsZXRlIGEgY2hpcCAqL1xuICAgICAgICBpZiAodGhpcy5jYW5SZW1vdmVDaGlwKSB7XG4gICAgICAgICB0aGlzLnJlbW92ZUNoaXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiBsZWZ0L2Rvd24gYXJyb3cgd2FzIHByZXNzZWQgd2hpbGUgZm9jdXNpbmcgdGhlIGZpcnN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgbGVmdFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiByaWdodC91cCBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgbGFzdCBjaGlwIHRvIGZvY3VzIGlucHV0IG5leHRcbiAgICAgICAgICogQWxzbyBjaGVjayBpZiBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5fdG90YWxDaGlwcyAtIDEpKSB7XG4gICAgICAgICAgLy8gb25seSB0cnkgdG8gdGFyZ2V0IGlucHV0IGlmIHByZXNzaW5nIHJpZ2h0XG4gICAgICAgICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCAmJiBldmVudC5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8ICh0aGlzLl90b3RhbENoaXBzIC0gMSkpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBmcm9tIGRpc3BsYXkgdGhlIHZhbHVlIGFkZGVkIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBzaW5jZSBpdCBnb2VzIGRpcmVjdGx5IGFzIGNoaXAuXG4gICAqL1xuICBfcmVtb3ZlSW5wdXREaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBvcGVuIHRoZSBhdXRvY29tcGxldGUgbWFudWFsbHkgaWYgaXRzIG5vdCBhbHJlYWR5IG9wZW5lZFxuICAgKi9cbiAgX29wZW5BdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5vcGVuUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBfY2xvc2VBdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgb2YgY2hpcHNcbiAgICovXG4gIGdldCBfdG90YWxDaGlwcygpOiBudW1iZXIge1xuICAgIGxldCBjaGlwczogTWF0Q2hpcFtdID0gdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KCk7XG4gICAgcmV0dXJuIGNoaXBzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZm9jdXMgYSBkZXNpcmVkIGNoaXAgYnkgaW5kZXhcbiAgICovXG4gIHByaXZhdGUgX2ZvY3VzQ2hpcChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgLyoqIGNoZWNrIHRvIHNlZSBpZiBpbmRleCBleGlzdHMgaW4gdGhlIGFycmF5IGJlZm9yZSBmb2N1c2luZyAqL1xuICAgIGlmIChpbmRleCA+IC0xICYmIHRoaXMuX3RvdGFsQ2hpcHMgPiBpbmRleCkge1xuICAgICAgdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KClbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBmaXJzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzRmlyc3RDaGlwKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzQ2hpcCgwKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgdG8gZm9jdXMgbGFzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzTGFzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdG9nZ2xlIHRoZSBkaXNhYmxlIHN0YXRlIG9mIGlucHV0XG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBBZGRpdGlvbiBpcyBzZXQgdG8gJ3RydWUnXG4gICAqL1xuICBwcml2YXRlIF90b2dnbGVJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dENvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZpcnN0IG9wdGlvbiBhcyBhY3RpdmUgdG8gbGV0IHRoZSB1c2VyIGtub3cgd2hpY2ggb25lIHdpbGwgYmUgYWRkZWQgd2hlbiBwcmVzc2luZyBlbnRlclxuICAgKiBPbmx5IGlmIFtyZXF1aXJlTWF0Y2hdIGhhcyBiZWVuIHNldFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIGhlcmUgdG8gd2FpdCB1bnRpbCB0aGUgYXV0b2NvbXBsZXRlIGhhcyBiZWVuIG9wZW5lZCAoZW5kIG9mIHF1ZXVlKVxuICAgICAgdGltZXIoKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGNsZWFuIHVwIG9mIHByZXZpb3VzbHkgYWN0aXZlIG9wdGlvbnNcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKS5mb3JFYWNoKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBvbmUgYXMgYWN0aXZlXG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlIHRoZSBmb2N1c1xuICAgKiBUaGUgYXV0b2NvbXBsZXRlIHBhbmVsIGlzIGNvbnNpZGVyZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgc28gd2VcbiAgICogbmVlZCB0byB1c2UgYSBmbGFnIHRvIGZpbmQgb3V0IHdoZW4gaXRzIGNsaWNrZWQuXG4gICAqL1xuICBwcml2YXRlIF93YXRjaE91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIG1lcmdlKFxuICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICdjbGljaycpLFxuICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICd0b3VjaGVuZCcpLFxuICAgICAgKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5fdG91Y2hlbmREZWJvdW5jZSksXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb2N1c2VkICYmXG4gICAgICAgICAgICAgICAgICAoY2xpY2tUYXJnZXQgIT09IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkgJiZcbiAgICAgICAgICAgICAgICAgICF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmICF0aGlzLl9pbnRlcm5hbENsaWNrO1xuICAgICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbmltcG9ydCB7IFRkQ2hpcHNDb21wb25lbnQsIFRkQ2hpcERpcmVjdGl2ZSwgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2NoaXBzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRDaGlwc0NvbXBvbmVudCxcbiAgICBUZENoaXBEaXJlY3RpdmUsXG4gICAgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZENoaXBzQ29tcG9uZW50LFxuICAgIFRkQ2hpcERpcmVjdGl2ZSxcbiAgICBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRDaGlwc01vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BdUJhLGVBQWdCLFNBQVEsdUJBQXVCOzs7OztJQUMxRCxZQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO1FBQzNFLEtBQUssQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztLQUN0Qzs7O1lBTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7Ozs7WUFyQjBDLFdBQVc7WUFBRSxnQkFBZ0I7O0FBK0J4RSxNQUFhLDZCQUE4QixTQUFRLHVCQUF1Qjs7Ozs7SUFDeEUsWUFBWSxXQUE2QixFQUFFLGdCQUFrQztRQUMzRSxLQUFLLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDdEM7OztZQU5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2FBQ2hEOzs7O1lBOUIwQyxXQUFXO1lBQUUsZ0JBQWdCOztBQXFDeEUsTUFBYSxXQUFXOzs7O0lBQ3RCLFlBQW1CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0tBQUk7Q0FDN0Q7OztBQUdELE1BQWEsaUJBQWlCLEdBQUcseUJBQXlCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQWMxRixNQUFhLGdCQUFpQixTQUFRLGlCQUFpQjs7Ozs7OztJQWtOckQsWUFBb0IsV0FBdUIsRUFDdkIsU0FBb0IsRUFDVSxTQUFjLEVBQ3BELGtCQUFxQztRQUMvQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUpSLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDVSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBaE54RCxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUc5QixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsV0FBTSxHQUFrQyxTQUFTLENBQUM7UUFDbEQsbUJBQWMsR0FBdUIsT0FBTyxDQUFDO1FBQzdDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixzQkFBaUIsR0FBVyxHQUFHLENBQUM7UUFFeEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsNEJBQXVCLEdBQVksS0FBSyxDQUFDOzs7O1FBc0J6QyxpQkFBWSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDOzs7OztRQTJHM0IsYUFBUSxHQUFXLEdBQUcsQ0FBQzs7Ozs7O1FBd0IzQixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7OztRQU9oRCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7OztRQU9qRCxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDOzs7Ozs7UUFPbkUsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7Ozs7O1FBTzFELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQWUxRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9FOzs7OztJQXRMRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7Ozs7SUFXRCxJQUNJLEtBQUssQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7Ozs7SUFPRCxJQUNJLE9BQU8sQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2hEOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7Ozs7OztJQU9ELElBQ0ksYUFBYSxDQUFDLGFBQWlDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0tBQ3JDOzs7O0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVCOzs7Ozs7O0lBTUQsSUFDSSxZQUFZLENBQUMsWUFBcUI7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUMxRDs7OztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7Ozs7Ozs7SUFPRCxJQUNJLFlBQVksQ0FBQyxZQUFxQjtRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7OztJQU1ELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDNUM7Ozs7Ozs7O0lBT0QsSUFDSSxXQUFXLENBQUMsV0FBb0I7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7S0FDakM7Ozs7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7Ozs7OztJQU1ELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDM0M7Ozs7Ozs7O0lBbUJELElBQ0ksS0FBSyxDQUFDLEtBQW9DO1FBQzVDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9FO0tBQ0Y7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBd0NELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQzVDOzs7Ozs7SUFjRCxhQUFhLENBQUMsS0FBaUI7O1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO1FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3hCOzs7Ozs7SUFNRCxpQkFBaUIsQ0FBQyxLQUFpQjs7UUFFakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCLENBQUMsQ0FBQztLQUNKOzs7Ozs7O0lBT0QsYUFBYSxDQUFDLEtBQVk7O2NBQ2xCLFdBQVcsc0JBQTZCLEtBQUssQ0FBQyxNQUFNLEVBQUE7UUFDMUQsSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhO1lBQzlDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtLQUNGOzs7Ozs7SUFNRCxlQUFlLENBQUMsS0FBb0I7UUFDbEMsUUFBUSxLQUFLLENBQUMsT0FBTztZQUNuQixLQUFLLEdBQUc7O2dCQUVOLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7aUJBQzNCLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7aUJBQzNCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDtnQkFDRCxNQUFNO1lBQ1IsUUFBUTs7U0FFVDtLQUNGOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDakMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDNUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFhO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3hDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qzs7OztJQUVELFNBQVM7O1FBRVAsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1NBQ3BDO0tBQ0Y7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztLQUM1Qjs7Ozs7O0lBR0QsZ0JBQWdCLENBQUMsQ0FBVTtRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7Ozs7O0lBUUQsY0FBYzs7WUFDUixLQUFVO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztnQkFDakIsZUFBZSxHQUFnQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQWlCO2dCQUNsRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDdEIsQ0FBQztZQUNGLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLEtBQUssR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO2FBQU07OztZQUdMLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRTtnQkFDMUMsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDNUQ7aUJBQU07Z0JBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUMvQixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3ZCLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1Qjs7Ozs7OztJQU1ELE9BQU8sQ0FBQyxLQUFVOzs7OztRQUtoQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBRS9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7O0lBTUQsVUFBVSxDQUFDLEtBQWE7O1lBQ2xCLGFBQWEsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDZDs7Ozs7UUFNRCxJQUFJLEtBQUssTUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjthQUFNLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7OztJQUtELGVBQWUsQ0FBQyxLQUFpQixFQUFFLEtBQVU7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7Ozs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxLQUFpQixFQUFFLEtBQVU7UUFDNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzlCOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztLQUNiOzs7OztJQUtELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QztLQUNGOzs7OztJQUtELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7Ozs7OztJQU1ELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtLQUNGOzs7Ozs7SUFLRCxhQUFhLENBQUMsS0FBb0I7UUFDaEMsUUFBUSxLQUFLLENBQUMsT0FBTztZQUNuQixLQUFLLFFBQVE7Ozs7O2dCQUtYLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7d0JBQ2pCLE1BQU0sR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQ3pDLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7d0JBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDL0MsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQzs7d0JBRXJDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztxQkFDeEI7aUJBQ0Y7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssTUFBTSxDQUFDO1lBQ1osS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztnQkFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7O29CQUV0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3hCO2dCQUNELE1BQU07WUFDUixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7O2dCQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7b0JBRXZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7Z0JBQ0QsTUFBTTtZQUNSLFFBQVE7O1NBRVQ7S0FDRjs7Ozs7OztJQUtELFlBQVksQ0FBQyxLQUFvQixFQUFFLEtBQWE7UUFDOUMsUUFBUSxLQUFLLENBQUMsT0FBTztZQUNuQixLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssU0FBUzs7Z0JBRVosSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN2QjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFVBQVU7Ozs7O2dCQUtiLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTs7b0JBRWYsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO3dCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUMxQjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQ3ZCO2lCQUNGO3FCQUFNLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtvQkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzVCOztnQkFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUixLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLFdBQVc7Ozs7O2dCQUtkLElBQUksS0FBSyxNQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O29CQUVwQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7d0JBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQzFCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztxQkFDeEI7aUJBQ0Y7cUJBQU0sSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzVCOztnQkFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUixRQUFROztTQUVUO0tBQ0Y7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7Ozs7O0lBS0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QztLQUNGOzs7OztJQUtELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QztLQUNGOzs7OztJQUtELElBQUksV0FBVzs7WUFDVCxLQUFLLEdBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7UUFDcEQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0tBQ3JCOzs7Ozs7SUFLTyxVQUFVLENBQUMsS0FBYTs7UUFFOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QztLQUNGOzs7OztJQUdPLGVBQWU7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjs7Ozs7SUFHTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2Qzs7Ozs7O0lBTU8sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qzs7Ozs7O0lBTU8scUJBQXFCO1FBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O29CQUU3RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQWlCO3dCQUNoRCxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztxQkFDNUIsQ0FBQyxDQUFDOztvQkFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO29CQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3hDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Ozs7OztJQU9PLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsS0FBSyxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FDdEMsQ0FBQyxJQUFJLENBQ0osWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUNwQyxNQUFNLENBQ0osQ0FBQyxLQUFpQjs7c0JBQ1YsV0FBVyxzQkFBNkIsS0FBSyxDQUFDLE1BQU0sRUFBQTtnQkFDMUQsVUFBVSxDQUFDO29CQUNULElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2lCQUM3QixDQUFDLENBQUM7Z0JBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTztxQkFDWixXQUFXLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7b0JBQ2hELENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNyRixDQUNGLENBQ0YsQ0FBQyxTQUFTLENBQUM7Z0JBQ1YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDeEM7YUFDRixDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sU0FBUyxDQUFDO0tBQ2xCOzs7WUE5ckJGLFNBQVMsU0FBQztnQkFDVCxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sZ0JBQWdCLENBQUM7d0JBQy9DLEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7Z0JBRTdCLHF6RkFBcUM7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQXZEQyxVQUFVO1lBQ2dELFNBQVM7NENBMlF0RCxRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7WUEzUXhDLGlCQUFpQjs7OzJCQTRFaEIsU0FBUyxTQUFDLE9BQU87MEJBQ2pCLFNBQVMsU0FBQyxRQUFRO21DQUNsQixTQUFTLFNBQUMsc0JBQXNCOzZCQUNoQyxZQUFZLFNBQUMsT0FBTzs0QkFFcEIsWUFBWSxTQUFDLGVBQWU7MENBQzVCLFlBQVksU0FBQyw2QkFBNkI7dUJBRTFDLFlBQVksU0FBQyxTQUFTO29CQWtCdEIsS0FBSyxTQUFDLE9BQU87c0JBZWIsS0FBSyxTQUFDLFNBQVM7NEJBYWYsS0FBSyxTQUFDLGVBQWU7MkJBWXJCLEtBQUssU0FBQyxjQUFjOzJCQWFwQixLQUFLLFNBQUMsY0FBYzswQkFzQnBCLEtBQUssU0FBQyxhQUFhOzBCQW9CbkIsS0FBSyxTQUFDLGFBQWE7dUJBTW5CLEtBQUssU0FBQyxVQUFVO29CQU9oQixLQUFLLFNBQUMsT0FBTztvQkFpQmIsTUFBTSxTQUFDLEtBQUs7dUJBT1osTUFBTSxTQUFDLFFBQVE7NEJBT2YsTUFBTSxTQUFDLGFBQWE7MEJBT3BCLE1BQU0sU0FBQyxXQUFXO3lCQU9sQixNQUFNLFNBQUMsVUFBVTt1QkFLakIsV0FBVyxTQUFDLGVBQWU7NEJBZ0IzQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dDQVloQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQWFwQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQWNoQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0FDN1RyQyxNQWdDYSxtQkFBbUI7OztZQXBCL0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxhQUFhO29CQUNiLGNBQWM7b0JBQ2QscUJBQXFCO2lCQUN0QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLDZCQUE2QjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZiw2QkFBNkI7aUJBQzlCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9