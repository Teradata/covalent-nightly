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
 * BEHAVIORS
 */
export { mixinDisabled } from './behaviors/disabled.mixin';
export { mixinDisableRipple } from './behaviors/disable-ripple.mixin';
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
var TD_VALIDATORS = [];
export { CovalentValidators } from './forms/validators/validators';
/**
 * PIPES
 */
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';
var TD_PIPES = [
    TdTimeAgoPipe,
    TdTimeDifferencePipe,
    TdBytesPipe,
    TdDigitsPipe,
    TdTruncatePipe,
];
export { TdTimeAgoPipe, TdTimeDifferencePipe, TdBytesPipe, TdDigitsPipe, TdTruncatePipe };
/**
 * Services
 */
import { RouterPathService } from './services/router-path.service';
import { IconService } from './services/icon.service';
var CovalentCommonModule = (function () {
    function CovalentCommonModule() {
    }
    return CovalentCommonModule;
}());
CovalentCommonModule = __decorate([
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
        providers: [
            RouterPathService,
            IconService,
        ],
    })
], CovalentCommonModule);
export { CovalentCommonModule };
//# sourceMappingURL=common.module.js.map