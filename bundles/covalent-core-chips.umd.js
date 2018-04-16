(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/cdk/portal'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('@angular/material/chips'), require('@angular/material/input'), require('@angular/material/core'), require('@angular/material/autocomplete'), require('rxjs'), require('rxjs/operators'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/icon')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/chips', ['exports', '@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/cdk/portal', '@angular/cdk/coercion', '@angular/cdk/keycodes', '@angular/material/chips', '@angular/material/input', '@angular/material/core', '@angular/material/autocomplete', 'rxjs', 'rxjs/operators', '@covalent/core/common', '@angular/common', '@angular/material/icon'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.chips = {}),global.ng.core,global.ng.platformBrowser,global.ng.forms,global.ng.cdk.portal,global.ng.cdk.coercion,global.ng.cdk.keycodes,global.ng.material.chips,global.ng.material.input,global.ng.material.core,global.ng.material.autocomplete,global.rxjs,global.Rx.Observable.prototype,global.covalent.core.common,global.ng.common,global.ng.material.icon));
}(this, (function (exports,core,platformBrowser,forms,portal,coercion,keycodes,chips,input,core$1,autocomplete,rxjs,operators,common,common$1,icon) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var TdChipDirective = /** @class */ (function (_super) {
    __extends(TdChipDirective, _super);
    function TdChipDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdChipDirective;
}(portal.TemplatePortalDirective));
TdChipDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-chip]ng-template',
            },] },
];
TdChipDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdAutocompleteOptionDirective = /** @class */ (function (_super) {
    __extends(TdAutocompleteOptionDirective, _super);
    function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdAutocompleteOptionDirective;
}(portal.TemplatePortalDirective));
TdAutocompleteOptionDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-autocomplete-option]ng-template',
            },] },
];
TdAutocompleteOptionDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdChipsBase = /** @class */ (function () {
    function TdChipsBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdChipsBase;
}());
var _TdChipsMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(TdChipsBase), []);
var TdChipsComponent = /** @class */ (function (_super) {
    __extends(TdChipsComponent, _super);
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
        _this._internalClick = false;
        _this._internalActivateOption = false;
        _this.inputControl = new forms.FormControl();
        _this.debounce = 200;
        _this.onAdd = new core.EventEmitter();
        _this.onRemove = new core.EventEmitter();
        _this.onInputChange = new core.EventEmitter();
        _this.onChipFocus = new core.EventEmitter();
        _this.onChipBlur = new core.EventEmitter();
        _this._renderer.addClass(_this._elementRef.nativeElement, 'mat-' + _this._color);
        return _this;
    }
    Object.defineProperty(TdChipsComponent.prototype, "focused", {
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
        set: function (items) {
            this._items = items;
            this._setFirstOptionActive();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "stacked", {
        get: function () {
            return this._stacked;
        },
        set: function (stacked) {
            this._stacked = coercion.coerceBooleanProperty(stacked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "inputPosition", {
        get: function () {
            return this._inputPosition;
        },
        set: function (inputPosition) {
            this._inputPosition = inputPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
        get: function () {
            return this._requireMatch;
        },
        set: function (requireMatch) {
            this._requireMatch = coercion.coerceBooleanProperty(requireMatch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
        get: function () {
            return this._chipAddition;
        },
        set: function (chipAddition) {
            this._chipAddition = chipAddition;
            this._toggleInput();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "canAddChip", {
        get: function () {
            return this.chipAddition && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipRemoval", {
        get: function () {
            return this._chipRemoval;
        },
        set: function (chipRemoval) {
            this._chipRemoval = chipRemoval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "canRemoveChip", {
        get: function () {
            return this.chipRemoval && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
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
    Object.defineProperty(TdChipsComponent.prototype, "tabIndex", {
        get: function () {
            return this.disabled ? -1 : this._tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    TdChipsComponent.prototype.focusListener = function (event) {
        if (!this._isMousedown) {
            this.focus();
        }
        event.preventDefault();
    };
    TdChipsComponent.prototype.mousedownListener = function (event) {
        var _this = this;
        this._isMousedown = true;
        rxjs.timer().toPromise().then(function () {
            _this._isMousedown = false;
        });
    };
    TdChipsComponent.prototype.clickListener = function (event) {
        var clickTarget = (event.target);
        if (clickTarget === this._elementRef.nativeElement ||
            clickTarget.className.indexOf('td-chips-wrapper') > -1) {
            this.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    TdChipsComponent.prototype.keydownListener = function (event) {
        var _this = this;
        switch (event.keyCode) {
            case keycodes.TAB:
                rxjs.timer().toPromise().then(function () {
                    _this.removeFocusedState();
                });
                break;
            case keycodes.ESCAPE:
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
        }
    };
    TdChipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges.pipe(operators.debounceTime(this.debounce)).subscribe(function (value) {
            _this.onInputChange.emit(value ? value : '');
        });
        this._changeDetectorRef.markForCheck();
    };
    TdChipsComponent.prototype.ngAfterViewInit = function () {
        this._watchOutsideClick();
        this._changeDetectorRef.markForCheck();
    };
    TdChipsComponent.prototype.ngDoCheck = function () {
        if (this.value && this.value.length !== this._length) {
            this._length = this.value.length;
            this.onChange(this.value);
        }
    };
    TdChipsComponent.prototype.ngOnDestroy = function () {
        if (this._outsideClickSubs) {
            this._outsideClickSubs.unsubscribe();
            this._outsideClickSubs = undefined;
        }
    };
    TdChipsComponent.prototype._setInternalClick = function () {
        this._internalClick = true;
    };
    TdChipsComponent.prototype.onDisabledChange = function (v) {
        this._toggleInput();
    };
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
    TdChipsComponent.prototype.addChip = function (value) {
        var _this = this;
        this._closeAutocomplete();
        rxjs.timer(this.debounce).toPromise().then(function () {
            _this.setFocusedState();
            _this._setFirstOptionActive();
            _this._openAutocomplete();
        });
        this.inputControl.setValue('');
        if (this.value.indexOf(value) > -1) {
            return false;
        }
        this.value.push(value);
        this.onAdd.emit(value);
        this.onChange(this.value);
        this._changeDetectorRef.markForCheck();
        return true;
    };
    TdChipsComponent.prototype.removeChip = function (index) {
        var removedValues = this.value.splice(index, 1);
        if (removedValues.length === 0) {
            return false;
        }
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
    TdChipsComponent.prototype._handleChipBlur = function (event, value) {
        this.onChipBlur.emit(value);
    };
    TdChipsComponent.prototype._handleChipFocus = function (event, value) {
        this.setFocusedState();
        this.onChipFocus.emit(value);
    };
    TdChipsComponent.prototype._handleFocus = function () {
        this.setFocusedState();
        this._setFirstOptionActive();
        return true;
    };
    TdChipsComponent.prototype.setFocusedState = function () {
        if (!this.disabled) {
            this._focused = true;
            this._tabIndex = -1;
            this._changeDetectorRef.markForCheck();
        }
    };
    TdChipsComponent.prototype.removeFocusedState = function () {
        this._focused = false;
        this._tabIndex = 0;
        this._changeDetectorRef.markForCheck();
    };
    TdChipsComponent.prototype.focus = function () {
        if (this.canAddChip) {
            this._inputChild.focus();
        }
        else if (!this.disabled) {
            this._focusFirstChip();
        }
    };
    TdChipsComponent.prototype._inputKeydown = function (event) {
        switch (event.keyCode) {
            case keycodes.UP_ARROW:
                if (this.requireMatch) {
                    var length = this._options.length;
                    if (length > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
                        this._options.toArray()[0].setInactiveStyles();
                        this._internalActivateOption = false;
                        event.preventDefault();
                    }
                }
                break;
            case keycodes.LEFT_ARROW:
            case keycodes.DELETE:
            case keycodes.BACKSPACE:
                this._closeAutocomplete();
                if (!this._inputChild.value) {
                    this._focusLastChip();
                    event.preventDefault();
                }
                break;
            case keycodes.RIGHT_ARROW:
                this._closeAutocomplete();
                if (!this._inputChild.value) {
                    this._focusFirstChip();
                    event.preventDefault();
                }
                break;
            default:
        }
    };
    TdChipsComponent.prototype._chipKeydown = function (event, index) {
        switch (event.keyCode) {
            case keycodes.DELETE:
            case keycodes.BACKSPACE:
                if (this.canRemoveChip) {
                    this.removeChip(index);
                }
                break;
            case keycodes.UP_ARROW:
            case keycodes.LEFT_ARROW:
                if (index === 0) {
                    if (this.canAddChip && event.keyCode === keycodes.LEFT_ARROW) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusLastChip();
                    }
                }
                else if (index > 0) {
                    this._focusChip(index - 1);
                }
                event.preventDefault();
                break;
            case keycodes.DOWN_ARROW:
            case keycodes.RIGHT_ARROW:
                if (index === (this._totalChips - 1)) {
                    if (this.canAddChip && event.keyCode === keycodes.RIGHT_ARROW) {
                        this._inputChild.focus();
                    }
                    else {
                        this._focusFirstChip();
                    }
                }
                else if (index < (this._totalChips - 1)) {
                    this._focusChip(index + 1);
                }
                event.preventDefault();
                break;
            default:
        }
    };
    TdChipsComponent.prototype._removeInputDisplay = function () {
        return '';
    };
    TdChipsComponent.prototype._openAutocomplete = function () {
        if (!this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.openPanel();
            this._changeDetectorRef.markForCheck();
        }
    };
    TdChipsComponent.prototype._closeAutocomplete = function () {
        if (this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.closePanel();
            this._changeDetectorRef.markForCheck();
        }
    };
    Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
        get: function () {
            var chips$$1 = this._chipsChildren.toArray();
            return chips$$1.length;
        },
        enumerable: true,
        configurable: true
    });
    TdChipsComponent.prototype._focusChip = function (index) {
        if (index > -1 && this._totalChips > index) {
            this._chipsChildren.toArray()[index].focus();
        }
    };
    TdChipsComponent.prototype._focusFirstChip = function () {
        this._focusChip(0);
    };
    TdChipsComponent.prototype._focusLastChip = function () {
        this._focusChip(this._totalChips - 1);
    };
    TdChipsComponent.prototype._toggleInput = function () {
        if (this.canAddChip) {
            this.inputControl.enable();
        }
        else {
            this.inputControl.disable();
        }
        this._changeDetectorRef.markForCheck();
    };
    TdChipsComponent.prototype._setFirstOptionActive = function () {
        var _this = this;
        if (this.requireMatch) {
            rxjs.timer().toPromise().then(function () {
                if (_this.focused && _this._options && _this._options.length > 0) {
                    _this._options.toArray().forEach(function (option) {
                        option.setInactiveStyles();
                    });
                    _this._options.toArray()[0].setActiveStyles();
                    _this._internalActivateOption = true;
                    _this._changeDetectorRef.markForCheck();
                }
            });
        }
    };
    TdChipsComponent.prototype._watchOutsideClick = function () {
        var _this = this;
        if (this._document) {
            rxjs.merge(rxjs.fromEvent(this._document, 'click'), rxjs.fromEvent(this._document, 'touchend')).pipe(operators.filter(function (event) {
                var clickTarget = (event.target);
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
    return TdChipsComponent;
}(_TdChipsMixinBase));
TdChipsComponent.decorators = [
    { type: core.Component, args: [{
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdChipsComponent; }),
                        multi: true,
                    }],
                selector: 'td-chips',
                inputs: ['disabled', 'value'],
                styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-webkit-box-ordinal-group:-19;-ms-flex-order:-20;order:-20;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-webkit-transform-origin:50%;transform-origin:50%;-webkit-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;-webkit-transition:background-color .3s cubic-bezier(.55,0,.55,.2);transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition:background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear;transition:background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear;transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"],
                template: "<div class=\"td-chips-wrapper\"\n     [class.td-chips-stacked]=\"stacked\"\n     [class.td-chips-input-before-position]=\"inputPosition === 'before'\">\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip [class.td-chip-disabled]=\"disabled\"\n                   [class.td-chip-after-pad]=\"!canRemoveChip\"\n                   [disableRipple]=\"true\"\n                   [color]=\"color\"\n                   (keydown)=\"_chipKeydown($event, index)\"\n                   (blur)=\"_handleChipBlur($event, chip)\"\n                   (focus)=\"_handleChipFocus($event, chip)\">\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\">\n          </ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field floatLabel=\"never\"\n                  class=\"td-chips-form-field\"\n                  [style.width.px]=\"canAddChip ? null : 0\"\n                  [style.height.px]=\"canAddChip ? null : 0\"\n                  [color]=\"color\">\n    <input matInput\n            #input\n            [tabIndex]=\"-1\"\n            [matAutocomplete]=\"autocomplete\"\n            [formControl]=\"inputControl\"\n            [placeholder]=\"canAddChip? placeholder : ''\"\n            (keydown)=\"_inputKeydown($event)\"\n            (keyup.enter)=\"_handleAddChip()\"\n            (focus)=\"_handleFocus()\">\n  </mat-form-field>\n  <mat-autocomplete #autocomplete=\"matAutocomplete\"\n                   [displayWith]=\"_removeInputDisplay\"\n                   (optionSelected)=\"addChip($event.option.value)\">\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\">\n        </ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\"\n      [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\"\n        [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdChipsComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [platformBrowser.DOCUMENT,] },] },
    { type: core.ChangeDetectorRef, },
]; };
TdChipsComponent.propDecorators = {
    "_nativeInput": [{ type: core.ViewChild, args: ['input',] },],
    "_inputChild": [{ type: core.ViewChild, args: [input.MatInput,] },],
    "_autocompleteTrigger": [{ type: core.ViewChild, args: [autocomplete.MatAutocompleteTrigger,] },],
    "_chipsChildren": [{ type: core.ViewChildren, args: [chips.MatChip,] },],
    "_chipTemplate": [{ type: core.ContentChild, args: [TdChipDirective,] },],
    "_autocompleteOptionTemplate": [{ type: core.ContentChild, args: [TdAutocompleteOptionDirective,] },],
    "_options": [{ type: core.ViewChildren, args: [core$1.MatOption,] },],
    "items": [{ type: core.Input, args: ['items',] },],
    "stacked": [{ type: core.Input, args: ['stacked',] },],
    "inputPosition": [{ type: core.Input, args: ['inputPosition',] },],
    "requireMatch": [{ type: core.Input, args: ['requireMatch',] },],
    "chipAddition": [{ type: core.Input, args: ['chipAddition',] },],
    "chipRemoval": [{ type: core.Input, args: ['chipRemoval',] },],
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "debounce": [{ type: core.Input, args: ['debounce',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "onAdd": [{ type: core.Output, args: ['add',] },],
    "onRemove": [{ type: core.Output, args: ['remove',] },],
    "onInputChange": [{ type: core.Output, args: ['inputChange',] },],
    "onChipFocus": [{ type: core.Output, args: ['chipFocus',] },],
    "onChipBlur": [{ type: core.Output, args: ['chipBlur',] },],
    "tabIndex": [{ type: core.HostBinding, args: ['attr.tabindex',] },],
    "focusListener": [{ type: core.HostListener, args: ['focus', ['$event'],] },],
    "mousedownListener": [{ type: core.HostListener, args: ['mousedown', ['$event'],] },],
    "clickListener": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "keydownListener": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
};
var CovalentChipsModule = /** @class */ (function () {
    function CovalentChipsModule() {
    }
    return CovalentChipsModule;
}());
CovalentChipsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    forms.ReactiveFormsModule,
                    common$1.CommonModule,
                    input.MatInputModule,
                    icon.MatIconModule,
                    chips.MatChipsModule,
                    autocomplete.MatAutocompleteModule,
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
            },] },
];
CovalentChipsModule.ctorParameters = function () { return []; };

exports.CovalentChipsModule = CovalentChipsModule;
exports.TdChipDirective = TdChipDirective;
exports.TdAutocompleteOptionDirective = TdAutocompleteOptionDirective;
exports.TdChipsBase = TdChipsBase;
exports._TdChipsMixinBase = _TdChipsMixinBase;
exports.TdChipsComponent = TdChipsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-chips.umd.js.map
