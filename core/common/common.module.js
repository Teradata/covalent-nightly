var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * ANIMATIONS
 */
import { TdToggleDirective } from './animations/toggle/toggle.directive';
import { TdFadeDirective } from './animations/fade/fade.directive';
var TD_ANIMATIONS = [
    TdToggleDirective,
    TdFadeDirective,
];
export { TdToggleDirective, TdFadeDirective };
export { TdCollapseAnimation } from './animations/collapse/collapse.animation';
export { TdFadeInOutAnimation } from './animations/fade/fadeInOut.animation';
/**
 * FORMS
 */
// Form Directives
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
var TD_FORMS = [
    TdAutoTrimDirective,
];
export { TdAutoTrimDirective };
// Validators
import { TdMinValidator } from './forms/validators/min/min.validator';
import { TdMaxValidator } from './forms/validators/max/max.validator';
import { TdNumberRequiredValidator } from './forms/validators/number-required/number-required.validator';
var TD_VALIDATORS = [
    TdMinValidator,
    TdMaxValidator,
    TdNumberRequiredValidator,
];
export { TdMinValidator, TdMaxValidator, TdNumberRequiredValidator };
/**
 * PIPES
 */
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';
import { RouterPathService } from './services/router.path.service';
var TD_PIPES = [
    TdTimeAgoPipe,
    TdTimeDifferencePipe,
    TdBytesPipe,
    TdDigitsPipe,
    TdTruncatePipe,
];
export { TdTimeAgoPipe, TdTimeDifferencePipe, TdBytesPipe, TdDigitsPipe, TdTruncatePipe };
var CovalentCommonModule = CovalentCommonModule_1 = (function () {
    function CovalentCommonModule() {
    }
    CovalentCommonModule.forRoot = function () {
        return {
            ngModule: CovalentCommonModule_1,
            providers: [RouterPathService],
        };
    };
    return CovalentCommonModule;
}());
CovalentCommonModule = CovalentCommonModule_1 = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
        ],
        declarations: [
            TD_FORMS,
            TD_PIPES,
            TD_ANIMATIONS,
            TD_VALIDATORS,
        ],
        exports: [
            FormsModule,
            CommonModule,
            TD_FORMS,
            TD_PIPES,
            TD_ANIMATIONS,
            TD_VALIDATORS,
        ],
    })
], CovalentCommonModule);
export { CovalentCommonModule };
var CovalentCommonModule_1;
//# sourceMappingURL=common.module.js.map