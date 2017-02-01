var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CovalentCoreModule } from '@covalent/core';
import { TdDynamicFormsComponent } from './dynamic-forms.component';
import { TdDynamicElementComponent, TdDynamicElementDirective } from './dynamic-element.component';
import { TdDynamicFormsService } from './services/dynamic-forms.service';
import { TdDynamicInputComponent } from './dynamic-elements/dynamic-input/dynamic-input.component';
import { TdDynamicTextareaComponent } from './dynamic-elements/dynamic-textarea/dynamic-textarea.component';
import { TdDynamicSlideToggleComponent, } from './dynamic-elements/dynamic-slide-toggle/dynamic-slide-toggle.component';
import { TdDynamicCheckboxComponent, } from './dynamic-elements/dynamic-checkbox/dynamic-checkbox.component';
import { TdDynamicSliderComponent } from './dynamic-elements/dynamic-slider/dynamic-slider.component';
import { TdDynamicSelectComponent } from './dynamic-elements/dynamic-select/dynamic-select.component';
var TD_DYNAMIC_FORMS = [
    TdDynamicFormsComponent,
    TdDynamicElementComponent,
    TdDynamicElementDirective,
];
var TD_DYNAMIC_FORMS_ENTRY_COMPONENTS = [
    TdDynamicInputComponent,
    TdDynamicTextareaComponent,
    TdDynamicSlideToggleComponent,
    TdDynamicCheckboxComponent,
    TdDynamicSliderComponent,
    TdDynamicSelectComponent,
];
var CovalentDynamicFormsModule = CovalentDynamicFormsModule_1 = (function () {
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
CovalentDynamicFormsModule = CovalentDynamicFormsModule_1 = __decorate([
    NgModule({
        declarations: [
            TD_DYNAMIC_FORMS,
            TD_DYNAMIC_FORMS_ENTRY_COMPONENTS,
        ],
        imports: [
            ReactiveFormsModule,
            CovalentCoreModule.forRoot(),
        ],
        exports: [
            TD_DYNAMIC_FORMS,
            TD_DYNAMIC_FORMS_ENTRY_COMPONENTS,
        ],
        entryComponents: [TD_DYNAMIC_FORMS_ENTRY_COMPONENTS],
    })
], CovalentDynamicFormsModule);
export { CovalentDynamicFormsModule };
var CovalentDynamicFormsModule_1;
//# sourceMappingURL=dynamic-forms.module.js.map