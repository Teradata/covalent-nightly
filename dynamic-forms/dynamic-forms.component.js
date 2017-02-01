var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TdDynamicFormsService } from './services/dynamic-forms.service';
var TdDynamicFormsComponent = (function () {
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
__decorate([
    Input('elements'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdDynamicFormsComponent.prototype, "elements", null);
TdDynamicFormsComponent = __decorate([
    Component({
        selector: 'td-dynamic-forms',
        template: "<form [formGroup]=\"dynamicForm\" novalidate> <div layout=\"row\"  layout-wrap  layout-margin  layout-align=\"start center\"> <template let-element ngFor [ngForOf]=\"elements\"> <td-dynamic-element [formControlName]=\"element.name\" [dynamicControl]=\"dynamicForm.controls[element.name]\" [id]=\"element.name\" [label]=\"element.label || element.name\"  [type]=\"element.type\" [required]=\"element.required\" [min]=\"element.min\" [max]=\"element.max\" [selections]=\"element.selections\"> </td-dynamic-element> </template> </div> <ng-content></ng-content> </form>",
    }),
    __metadata("design:paramtypes", [FormBuilder,
        TdDynamicFormsService,
        ChangeDetectorRef])
], TdDynamicFormsComponent);
export { TdDynamicFormsComponent };
//# sourceMappingURL=dynamic-forms.component.js.map