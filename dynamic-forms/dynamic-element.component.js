var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, Input, HostBinding } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { TdDynamicFormsService } from './services/dynamic-forms.service';
import { AbstractControlValueAccessor } from './dynamic-elements/abstract-control-value-accesor';
var noop = function () {
    // empty method
};
export var ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicElementComponent; }),
    multi: true,
};
var TdDynamicElementDirective = (function () {
    function TdDynamicElementDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return TdDynamicElementDirective;
}());
TdDynamicElementDirective = __decorate([
    Directive({
        selector: '[tdDynamicContainer]',
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], TdDynamicElementDirective);
export { TdDynamicElementDirective };
var TdDynamicElementComponent = (function (_super) {
    __extends(TdDynamicElementComponent, _super);
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
        _this.onModelChange = function (_) { return noop; };
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
__decorate([
    Input(),
    __metadata("design:type", FormControl)
], TdDynamicElementComponent.prototype, "dynamicControl", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TdDynamicElementComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdDynamicElementComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TdDynamicElementComponent.prototype, "required", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdDynamicElementComponent.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TdDynamicElementComponent.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TdDynamicElementComponent.prototype, "selections", void 0);
__decorate([
    ViewChild(TdDynamicElementDirective),
    __metadata("design:type", TdDynamicElementDirective)
], TdDynamicElementComponent.prototype, "childElement", void 0);
__decorate([
    HostBinding('attr.flex'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TdDynamicElementComponent.prototype, "flex", null);
__decorate([
    HostBinding('attr.max'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TdDynamicElementComponent.prototype, "maxAttr", null);
__decorate([
    HostBinding('attr.min'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TdDynamicElementComponent.prototype, "minAttr", null);
TdDynamicElementComponent = __decorate([
    Component({
        providers: [TdDynamicFormsService, ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-element',
        template: '<div tdDynamicContainer></div>',
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver,
        TdDynamicFormsService])
], TdDynamicElementComponent);
export { TdDynamicElementComponent };
//# sourceMappingURL=dynamic-element.component.js.map