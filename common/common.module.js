import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * ANIMATIONS
 */
// Directives
import { TdToggleDirective } from './animations/toggle/toggle.directive';
import { TdFadeDirective } from './animations/fade/fade.directive';
var TD_ANIMATIONS = [
    TdToggleDirective,
    TdFadeDirective,
];
export { TdToggleDirective, TdFadeDirective };
// Utility functions
export { TdRotateAnimation } from './animations/rotate/rotate.animation';
export { TdCollapseAnimation } from './animations/collapse/collapse.animation';
export { TdFadeInOutAnimation } from './animations/fade/fadeInOut.animation';
export { TdBounceAnimation } from './animations/bounce/bounce.animation';
export { TdFlashAnimation } from './animations/flash/flash.animation';
export { TdHeadshakeAnimation } from './animations/headshake/headshake.animation';
export { TdJelloAnimation } from './animations/jello/jello.animation';
export { TdPulseAnimation } from './animations/pulse/pulse.animation';
/**
 * BEHAVIORS
 */
export { mixinControlValueAccessor } from './behaviors/control-value-accesor.mixin';
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
    CovalentCommonModule = tslib_1.__decorate([
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
    return CovalentCommonModule;
}());
export { CovalentCommonModule };
//# sourceMappingURL=common.module.js.map