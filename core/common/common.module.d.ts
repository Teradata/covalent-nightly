import { ModuleWithProviders } from '@angular/core';
/**
 * ANIMATIONS
 */
import { TdToggleDirective } from './animations/toggle/toggle.directive';
import { TdFadeDirective } from './animations/fade/fade.directive';
export { TdToggleDirective, TdFadeDirective };
export { TdCollapseAnimation } from './animations/collapse/collapse.animation';
export { TdFadeInOutAnimation } from './animations/fade/fadeInOut.animation';
/**
 * FORMS
 */
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
export { TdAutoTrimDirective };
import { TdMinValidator } from './forms/validators/min/min.validator';
import { TdMaxValidator } from './forms/validators/max/max.validator';
import { TdNumberRequiredValidator } from './forms/validators/number-required/number-required.validator';
export { TdMinValidator, TdMaxValidator, TdNumberRequiredValidator };
/**
 * PIPES
 */
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';
export { TdTimeAgoPipe, TdTimeDifferencePipe, TdBytesPipe, TdDigitsPipe, TdTruncatePipe };
export declare class CovalentCommonModule {
    static forRoot(): ModuleWithProviders;
}
