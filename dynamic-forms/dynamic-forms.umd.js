(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@covalent/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@covalent/core'], factory) :
    (factory((global.td = global.td || {}, global.td.dynamicForms = global.td.dynamicForms || {}),global.ng.core,global.ng.forms,global.td.core));
}(this, (function (exports,_angular_core,_angular_forms,_covalent_core) { 'use strict';

var noop = function () {
    // empty method
};
var AbstractControlValueAccessor = (function () {
    function AbstractControlValueAccessor() {
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = undefined;
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
    }
    Object.defineProperty(AbstractControlValueAccessor.prototype, "value", {
        // get/set accessor (needed for ControlValueAccessor)
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * Implemented as part of ControlValueAccessor.
     */
    AbstractControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
    };
    AbstractControlValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AbstractControlValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return AbstractControlValueAccessor;
}());

var __extends = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$3 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var INPUT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdDynamicInputComponent; }),
    multi: true,
};
exports.TdDynamicInputComponent = (function (_super) {
    __extends(TdDynamicInputComponent, _super);
    function TdDynamicInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.type = undefined;
        _this.required = undefined;
        _this.min = undefined;
        _this.max = undefined;
        return _this;
    }
    return TdDynamicInputComponent;
}(AbstractControlValueAccessor));
exports.TdDynamicInputComponent = __decorate$3([
    _angular_core.Component({
        providers: [INPUT_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-input',
        styles: [""],
        template: "<div class=\"dynamic-input-wrapper\" layout=\"column\"> <md-input-container> <input #elementInput md-input [(ngModel)]=\"value\" [placeholder]=\"label\" [type]=\"type\" [required]=\"required\" [min]=\"min\" [max]=\"max\" flex> <md-hint align=\"start\"> <span class=\"tc-red-600\"> <span *ngIf=\"control.errors?.max\">Max: {{control.errors?.max.maxValue}}</span> <span *ngIf=\"control.errors?.min\">Min: {{control.errors?.min.minValue}}</span> </span> </md-hint> </md-input-container> </div>",
    })
], exports.TdDynamicInputComponent);

var __extends$1 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$4 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdDynamicTextareaComponent; }),
    multi: true,
};
exports.TdDynamicTextareaComponent = (function (_super) {
    __extends$1(TdDynamicTextareaComponent, _super);
    function TdDynamicTextareaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.required = undefined;
        return _this;
    }
    return TdDynamicTextareaComponent;
}(AbstractControlValueAccessor));
exports.TdDynamicTextareaComponent = __decorate$4([
    _angular_core.Component({
        providers: [TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-textarea',
        styles: [""],
        template: "<div class=\"dynamic-textarea-wrapper\" layout=\"column\"> <md-input-container> <textarea #elementInput md-input [(ngModel)]=\"value\" [placeholder]=\"label\" [required]=\"required\" rows=\"4\" flex> </textarea> </md-input-container> </div>",
    })
], exports.TdDynamicTextareaComponent);

var __extends$2 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$5 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdDynamicSlideToggleComponent; }),
    multi: true,
};
exports.TdDynamicSlideToggleComponent = (function (_super) {
    __extends$2(TdDynamicSlideToggleComponent, _super);
    function TdDynamicSlideToggleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        return _this;
    }
    return TdDynamicSlideToggleComponent;
}(AbstractControlValueAccessor));
exports.TdDynamicSlideToggleComponent = __decorate$5([
    _angular_core.Component({
        providers: [SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-slide-toggle',
        styles: [""],
        template: "<div class=\"dynamic-slide-toggle-wrapper\"> <md-slide-toggle [(ngModel)]=\"value\" [required]=\"required\" flex> {{label}} </md-slide-toggle> </div>",
    })
], exports.TdDynamicSlideToggleComponent);

var __extends$3 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$6 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdDynamicCheckboxComponent; }),
    multi: true,
};
exports.TdDynamicCheckboxComponent = (function (_super) {
    __extends$3(TdDynamicCheckboxComponent, _super);
    function TdDynamicCheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        return _this;
    }
    return TdDynamicCheckboxComponent;
}(AbstractControlValueAccessor));
exports.TdDynamicCheckboxComponent = __decorate$6([
    _angular_core.Component({
        providers: [CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-checkbox',
        styles: [""],
        template: "<div class=\"dynamic-checkbox-wrapper\"> <md-checkbox [(ngModel)]=\"value\" [required]=\"required\" flex> {{label}} </md-checkbox> </div>",
    })
], exports.TdDynamicCheckboxComponent);

var __extends$4 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$7 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SLIDER_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdDynamicSliderComponent; }),
    multi: true,
};
exports.TdDynamicSliderComponent = (function (_super) {
    __extends$4(TdDynamicSliderComponent, _super);
    function TdDynamicSliderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.required = undefined;
        _this.min = undefined;
        _this.max = undefined;
        return _this;
    }
    return TdDynamicSliderComponent;
}(AbstractControlValueAccessor));
exports.TdDynamicSliderComponent = __decorate$7([
    _angular_core.Component({
        providers: [SLIDER_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-slider',
        styles: [".td-slider-label { padding-bottom: 0px !important; top: 0px; } "],
        template: "<div class=\"dynamic-slider-wrapper relative push-top\" flex layout=\"column\"> <label class=\"md-input-placeholder md-float td-slider-label\" [class.md-focused]=\"slider._isActive\"> {{label}} <span *ngIf=\"required\" class=\"md-placeholder-required\">*</span></label> <div layout=\"row\" layout-align=\"start center\" flex> <md-slider #slider [(ngModel)]=\"value\" [min]=\"min\" [max]=\"max\" thumbLabel tickInterval=\"auto\" [required]=\"required\" flex> </md-slider> </div>   </div>",
    })
], exports.TdDynamicSliderComponent);

var __extends$5 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$8 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdDynamicSelectComponent; }),
    multi: true,
};
exports.TdDynamicSelectComponent = (function (_super) {
    __extends$5(TdDynamicSelectComponent, _super);
    function TdDynamicSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.required = undefined;
        _this.selections = undefined;
        return _this;
    }
    return TdDynamicSelectComponent;
}(AbstractControlValueAccessor));
exports.TdDynamicSelectComponent = __decorate$8([
    _angular_core.Component({
        providers: [SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-select',
        styles: [""],
        template: "<div class=\"dynamic-select-wrapper\" layout=\"row\"> <md-select [(ngModel)]=\"value\" [placeholder]=\"label\" [required]=\"required\" flex> <md-option *ngFor=\"let selection of selections\" [value]=\"selection\">{{selection}}</md-option> </md-select> </div>",
    })
], exports.TdDynamicSelectComponent);

var __decorate$2 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

(function (TdDynamicType) {
    TdDynamicType[TdDynamicType["Text"] = 'text'] = "Text";
    TdDynamicType[TdDynamicType["Boolean"] = 'boolean'] = "Boolean";
    TdDynamicType[TdDynamicType["Number"] = 'number'] = "Number";
    TdDynamicType[TdDynamicType["Array"] = 'array'] = "Array";
})(exports.TdDynamicType || (exports.TdDynamicType = {}));

(function (TdDynamicElement) {
    TdDynamicElement[TdDynamicElement["Input"] = 'input'] = "Input";
    TdDynamicElement[TdDynamicElement["Textarea"] = 'textarea'] = "Textarea";
    TdDynamicElement[TdDynamicElement["Slider"] = 'slider'] = "Slider";
    TdDynamicElement[TdDynamicElement["SlideToggle"] = 'slide-toggle'] = "SlideToggle";
    TdDynamicElement[TdDynamicElement["Checkbox"] = 'checkbox'] = "Checkbox";
    TdDynamicElement[TdDynamicElement["Select"] = 'select'] = "Select";
})(exports.TdDynamicElement || (exports.TdDynamicElement = {}));
var DYNAMIC_ELEMENT_NAME_REGEX = /^[a-zA-Z]+[a-zA-Z0-9-_]*$/;
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
            case exports.TdDynamicType.Text:
            case exports.TdDynamicType.Number:
            case exports.TdDynamicElement.Input:
                return exports.TdDynamicInputComponent;
            case exports.TdDynamicElement.Textarea:
                return exports.TdDynamicTextareaComponent;
            case exports.TdDynamicType.Boolean:
            case exports.TdDynamicElement.SlideToggle:
                return exports.TdDynamicSlideToggleComponent;
            case exports.TdDynamicElement.Checkbox:
                return exports.TdDynamicCheckboxComponent;
            case exports.TdDynamicElement.Slider:
                return exports.TdDynamicSliderComponent;
            case exports.TdDynamicType.Array:
            case exports.TdDynamicElement.Select:
                return exports.TdDynamicSelectComponent;
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
            case exports.TdDynamicType.Text:
            case exports.TdDynamicType.Number:
            case exports.TdDynamicElement.Slider:
            case exports.TdDynamicElement.Input:
            case exports.TdDynamicType.Array:
            case exports.TdDynamicElement.Select:
                return 45;
            case exports.TdDynamicElement.Textarea:
                return 95;
            case exports.TdDynamicType.Boolean:
            case exports.TdDynamicElement.Checkbox:
            case exports.TdDynamicElement.SlideToggle:
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
        return new _angular_forms.FormControl(config.default, validator);
    };
    /**
     * Creates form validationdepending [ITdDynamicElementConfig] properties.
     */
    TdDynamicFormsService.prototype.createValidators = function (config) {
        var validator;
        if (config.required) {
            validator = config.type === exports.TdDynamicType.Number ? _covalent_core.TdNumberRequiredValidator.validate : _angular_forms.Validators.required;
        }
        if (config.max || config.max === 0) {
            validator = _angular_forms.Validators.compose([validator, _covalent_core.TdMaxValidator.validate(config.max)]);
        }
        if (config.min || config.min === 0) {
            validator = _angular_forms.Validators.compose([validator, _covalent_core.TdMinValidator.validate(config.min)]);
        }
        return validator;
    };
    return TdDynamicFormsService;
}());
TdDynamicFormsService = __decorate$2([
    _angular_core.Injectable()
], TdDynamicFormsService);

var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TdDynamicFormsComponent = (function () {
    function TdDynamicFormsComponent(_formBuilder, _dynamicFormsService, _changeDetectorRef) {
        this._formBuilder = _formBuilder;
        this._dynamicFormsService = _dynamicFormsService;
        this._changeDetectorRef = _changeDetectorRef;
        this.dynamicForm = this._formBuilder.group({});
    }
    Object.defineProperty(TdDynamicFormsComponent.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        /**
         * elements: ITdDynamicElementConfig[]
         * JS Object that will render the elements depending on its config.
         * [name] property is required.
         */
        set: function (elements) {
            var _this = this;
            if (elements) {
                if (this._elements) {
                    this._elements.forEach(function (elem) {
                        _this.dynamicForm.removeControl(elem.name);
                    });
                }
                var duplicates_1 = [];
                elements.forEach(function (elem) {
                    _this._dynamicFormsService.validateDynamicElementName(elem.name);
                    if (duplicates_1.indexOf(elem.name) > -1) {
                        throw new Error("Dynamic element name: \"" + elem.name + "\" is duplicated");
                    }
                    duplicates_1.push(elem.name);
                    _this.dynamicForm.registerControl(elem.name, _this._dynamicFormsService.createFormControl(elem));
                });
                this._elements = elements;
                this._changeDetectorRef.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "form", {
        /**
         * Getter property for dynamic [FormGroup].
         */
        get: function () {
            return this.dynamicForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "valid", {
        /**
         * Getter property for [valid] of dynamic [FormGroup].
         */
        get: function () {
            if (this.dynamicForm) {
                return this.dynamicForm.valid;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "value", {
        /**
         * Getter property for [value] of dynamic [FormGroup].
         */
        get: function () {
            if (this.dynamicForm) {
                return this.dynamicForm.value;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "errors", {
        /**
         * Getter property for [errors] of dynamic [FormGroup].
         */
        get: function () {
            if (this.dynamicForm) {
                var errors = {};
                for (var name_1 in this.dynamicForm.controls) {
                    errors[name_1] = this.dynamicForm.controls[name_1].errors;
                }
                return errors;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "controls", {
        /**
         * Getter property for [controls] of dynamic [FormGroup].
         */
        get: function () {
            if (this.dynamicForm) {
                return this.dynamicForm.controls;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    return TdDynamicFormsComponent;
}());
__decorate$1([
    _angular_core.Input('elements'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], exports.TdDynamicFormsComponent.prototype, "elements", null);
exports.TdDynamicFormsComponent = __decorate$1([
    _angular_core.Component({
        selector: 'td-dynamic-forms',
        template: "<form [formGroup]=\"dynamicForm\" novalidate> <div layout=\"row\"  layout-wrap  layout-margin  layout-align=\"start center\"> <template let-element ngFor [ngForOf]=\"elements\"> <td-dynamic-element [formControlName]=\"element.name\" [dynamicControl]=\"dynamicForm.controls[element.name]\" [id]=\"element.name\" [label]=\"element.label || element.name\"  [type]=\"element.type\" [required]=\"element.required\" [min]=\"element.min\" [max]=\"element.max\" [selections]=\"element.selections\"> </td-dynamic-element> </template> </div> <ng-content></ng-content> </form>",
    }),
    __metadata("design:paramtypes", [_angular_forms.FormBuilder,
        TdDynamicFormsService,
        _angular_core.ChangeDetectorRef])
], exports.TdDynamicFormsComponent);

var __extends$6 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$9 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var noop$1 = function () {
    // empty method
};
var ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TdDynamicElementComponent; }),
    multi: true,
};
var TdDynamicElementDirective = (function () {
    function TdDynamicElementDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return TdDynamicElementDirective;
}());
TdDynamicElementDirective = __decorate$9([
    _angular_core.Directive({
        selector: '[tdDynamicContainer]',
    }),
    __metadata$1("design:paramtypes", [_angular_core.ViewContainerRef])
], TdDynamicElementDirective);
exports.TdDynamicElementComponent = (function (_super) {
    __extends$6(TdDynamicElementComponent, _super);
    function TdDynamicElementComponent(_componentFactoryResolver, _dynamicFormsService) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._dynamicFormsService = _dynamicFormsService;
        /**
         * Sets label to be displayed.
         */
        _this.label = '';
        /**
         * Sets type or element of element to be rendered.
         * Throws error if does not exist or no supported.
         */
        _this.type = undefined;
        /**
         * Sets required validation checkup (if supported by element).
         */
        _this.required = undefined;
        /**
         * Sets min validation checkup (if supported by element).
         */
        _this.min = undefined;
        /**
         * Sets max validation checkup (if supported by element).
         */
        _this.max = undefined;
        /**
         * Sets selections for array elements (if supported by element).
         */
        _this.selections = undefined;
        _this.onModelChange = function (_) { return noop$1; };
        return _this;
    }
    Object.defineProperty(TdDynamicElementComponent.prototype, "value", {
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
                this.onModelChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicElementComponent.prototype, "flex", {
        get: function () {
            if (this.type) {
                return this._dynamicFormsService.getDefaultElementFlex(this.type);
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicElementComponent.prototype, "maxAttr", {
        get: function () {
            return this.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicElementComponent.prototype, "minAttr", {
        get: function () {
            return this.min;
        },
        enumerable: true,
        configurable: true
    });
    TdDynamicElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ref = this._componentFactoryResolver.
            resolveComponentFactory(this._dynamicFormsService.getDynamicElement(this.type))
            .create(this.childElement.viewContainer.injector);
        this.childElement.viewContainer.insert(ref.hostView);
        ref.instance.control = this.dynamicControl;
        ref.instance.label = this.label;
        ref.instance.type = this.type;
        ref.instance._value = this._value;
        ref.instance.required = this.required;
        ref.instance.min = this.min;
        ref.instance.max = this.max;
        ref.instance.selections = this.selections;
        ref.instance.registerOnChange(function (value) {
            _this.value = value;
        });
        this.registerOnModelChange(function (value) {
            // fix to check if value is NaN (type=number)
            if (!Number.isNaN(value)) {
                ref.instance.value = value;
            }
        });
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdDynamicElementComponent.prototype.registerOnModelChange = function (fn) {
        this.onModelChange = fn;
    };
    return TdDynamicElementComponent;
}(AbstractControlValueAccessor));
__decorate$9([
    _angular_core.Input(),
    __metadata$1("design:type", _angular_forms.FormControl)
], exports.TdDynamicElementComponent.prototype, "dynamicControl", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$1("design:type", String)
], exports.TdDynamicElementComponent.prototype, "label", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$1("design:type", Number)
], exports.TdDynamicElementComponent.prototype, "type", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$1("design:type", Boolean)
], exports.TdDynamicElementComponent.prototype, "required", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$1("design:type", Number)
], exports.TdDynamicElementComponent.prototype, "min", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$1("design:type", Number)
], exports.TdDynamicElementComponent.prototype, "max", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$1("design:type", Array)
], exports.TdDynamicElementComponent.prototype, "selections", void 0);
__decorate$9([
    _angular_core.ViewChild(TdDynamicElementDirective),
    __metadata$1("design:type", TdDynamicElementDirective)
], exports.TdDynamicElementComponent.prototype, "childElement", void 0);
__decorate$9([
    _angular_core.HostBinding('attr.flex'),
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], exports.TdDynamicElementComponent.prototype, "flex", null);
__decorate$9([
    _angular_core.HostBinding('attr.max'),
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], exports.TdDynamicElementComponent.prototype, "maxAttr", null);
__decorate$9([
    _angular_core.HostBinding('attr.min'),
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], exports.TdDynamicElementComponent.prototype, "minAttr", null);
exports.TdDynamicElementComponent = __decorate$9([
    _angular_core.Component({
        providers: [TdDynamicFormsService, ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-element',
        template: '<div tdDynamicContainer></div>',
    }),
    __metadata$1("design:paramtypes", [_angular_core.ComponentFactoryResolver,
        TdDynamicFormsService])
], exports.TdDynamicElementComponent);

var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TD_DYNAMIC_FORMS = [
    exports.TdDynamicFormsComponent,
    exports.TdDynamicElementComponent,
    TdDynamicElementDirective,
];
var TD_DYNAMIC_FORMS_ENTRY_COMPONENTS = [
    exports.TdDynamicInputComponent,
    exports.TdDynamicTextareaComponent,
    exports.TdDynamicSlideToggleComponent,
    exports.TdDynamicCheckboxComponent,
    exports.TdDynamicSliderComponent,
    exports.TdDynamicSelectComponent,
];
exports.CovalentDynamicFormsModule = CovalentDynamicFormsModule_1 = (function () {
    function CovalentDynamicFormsModule() {
    }
    CovalentDynamicFormsModule.forRoot = function () {
        return {
            ngModule: CovalentDynamicFormsModule_1,
            providers: [TdDynamicFormsService],
        };
    };
    return CovalentDynamicFormsModule;
}());
exports.CovalentDynamicFormsModule = CovalentDynamicFormsModule_1 = __decorate([
    _angular_core.NgModule({
        declarations: [
            TD_DYNAMIC_FORMS,
            TD_DYNAMIC_FORMS_ENTRY_COMPONENTS,
        ],
        imports: [
            _angular_forms.ReactiveFormsModule,
            _covalent_core.CovalentCoreModule.forRoot(),
        ],
        exports: [
            TD_DYNAMIC_FORMS,
            TD_DYNAMIC_FORMS_ENTRY_COMPONENTS,
        ],
        entryComponents: [TD_DYNAMIC_FORMS_ENTRY_COMPONENTS],
    })
], exports.CovalentDynamicFormsModule);
var CovalentDynamicFormsModule_1;

exports.DYNAMIC_ELEMENT_NAME_REGEX = DYNAMIC_ELEMENT_NAME_REGEX;

Object.defineProperty(exports, '__esModule', { value: true });

})));
