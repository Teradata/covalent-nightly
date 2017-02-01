var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { TdMaxValidator, TdMinValidator, TdNumberRequiredValidator } from '@covalent/core';
import { TdDynamicInputComponent } from '../dynamic-elements/dynamic-input/dynamic-input.component';
import { TdDynamicTextareaComponent } from '../dynamic-elements/dynamic-textarea/dynamic-textarea.component';
import { TdDynamicSlideToggleComponent } from '../dynamic-elements/dynamic-slide-toggle/dynamic-slide-toggle.component';
import { TdDynamicCheckboxComponent } from '../dynamic-elements/dynamic-checkbox/dynamic-checkbox.component';
import { TdDynamicSliderComponent } from '../dynamic-elements/dynamic-slider/dynamic-slider.component';
import { TdDynamicSelectComponent } from '../dynamic-elements/dynamic-select/dynamic-select.component';
export var TdDynamicType;
(function (TdDynamicType) {
    TdDynamicType[TdDynamicType["Text"] = 'text'] = "Text";
    TdDynamicType[TdDynamicType["Boolean"] = 'boolean'] = "Boolean";
    TdDynamicType[TdDynamicType["Number"] = 'number'] = "Number";
    TdDynamicType[TdDynamicType["Array"] = 'array'] = "Array";
})(TdDynamicType || (TdDynamicType = {}));
export var TdDynamicElement;
(function (TdDynamicElement) {
    TdDynamicElement[TdDynamicElement["Input"] = 'input'] = "Input";
    TdDynamicElement[TdDynamicElement["Textarea"] = 'textarea'] = "Textarea";
    TdDynamicElement[TdDynamicElement["Slider"] = 'slider'] = "Slider";
    TdDynamicElement[TdDynamicElement["SlideToggle"] = 'slide-toggle'] = "SlideToggle";
    TdDynamicElement[TdDynamicElement["Checkbox"] = 'checkbox'] = "Checkbox";
    TdDynamicElement[TdDynamicElement["Select"] = 'select'] = "Select";
})(TdDynamicElement || (TdDynamicElement = {}));
export var DYNAMIC_ELEMENT_NAME_REGEX = /^[a-zA-Z]+[a-zA-Z0-9-_]*$/;
var TdDynamicFormsService = (function () {
    function TdDynamicFormsService() {
    }
    /**
     * Method to validate if the [name] is a proper element name.
     * Throws error if name is not valid.
     */
    TdDynamicFormsService.prototype.validateDynamicElementName = function (name) {
        if (!DYNAMIC_ELEMENT_NAME_REGEX.test(name)) {
            throw new Error("Dynamic element name: \"" + name + "\" is not valid.");
        }
    };
    /**
     * Gets component to be rendered depending on [TdDynamicElement | TdDynamicType]
     * Throws error if it does not exists or not supported.
     */
    TdDynamicFormsService.prototype.getDynamicElement = function (element) {
        switch (element) {
            case TdDynamicType.Text:
            case TdDynamicType.Number:
            case TdDynamicElement.Input:
                return TdDynamicInputComponent;
            case TdDynamicElement.Textarea:
                return TdDynamicTextareaComponent;
            case TdDynamicType.Boolean:
            case TdDynamicElement.SlideToggle:
                return TdDynamicSlideToggleComponent;
            case TdDynamicElement.Checkbox:
                return TdDynamicCheckboxComponent;
            case TdDynamicElement.Slider:
                return TdDynamicSliderComponent;
            case TdDynamicType.Array:
            case TdDynamicElement.Select:
                return TdDynamicSelectComponent;
            default:
                throw new Error("Error: type " + element + " does not exist or not supported.");
        }
    };
    /**
     * Gets default flex for element depending on [TdDynamicElement | TdDynamicType].
     * Throws error if it does not exists or not supported.
     */
    TdDynamicFormsService.prototype.getDefaultElementFlex = function (element) {
        switch (element) {
            case TdDynamicType.Text:
            case TdDynamicType.Number:
            case TdDynamicElement.Slider:
            case TdDynamicElement.Input:
            case TdDynamicType.Array:
            case TdDynamicElement.Select:
                return 45;
            case TdDynamicElement.Textarea:
                return 95;
            case TdDynamicType.Boolean:
            case TdDynamicElement.Checkbox:
            case TdDynamicElement.SlideToggle:
                return 20;
            default:
                throw new Error("Error: type " + element + " does not exist or not supported.");
        }
    };
    /**
     * Creates form control for element depending [ITdDynamicElementConfig] properties.
     */
    TdDynamicFormsService.prototype.createFormControl = function (config) {
        var validator = this.createValidators(config);
        return new FormControl(config.default, validator);
    };
    /**
     * Creates form validationdepending [ITdDynamicElementConfig] properties.
     */
    TdDynamicFormsService.prototype.createValidators = function (config) {
        var validator;
        if (config.required) {
            validator = config.type === TdDynamicType.Number ? TdNumberRequiredValidator.validate : Validators.required;
        }
        if (config.max || config.max === 0) {
            validator = Validators.compose([validator, TdMaxValidator.validate(config.max)]);
        }
        if (config.min || config.min === 0) {
            validator = Validators.compose([validator, TdMinValidator.validate(config.min)]);
        }
        return validator;
    };
    return TdDynamicFormsService;
}());
TdDynamicFormsService = __decorate([
    Injectable()
], TdDynamicFormsService);
export { TdDynamicFormsService };
//# sourceMappingURL=dynamic-forms.service.js.map