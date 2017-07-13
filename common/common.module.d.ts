/**
 * ANIMATIONS
 */
import { TdToggleDirective } from './animations/toggle/toggle.directive';
import { TdFadeDirective } from './animations/fade/fade.directive';
export { TdToggleDirective, TdFadeDirective };
export { TdCollapseAnimation } from './animations/collapse/collapse.animation';
export { TdFadeInOutAnimation } from './animations/fade/fadeInOut.animation';
/**
 * BEHAVIORS
 */
export { ICanDisable, mixinDisabled } from './behaviors/disabled.mixin';
export { ICanDisableRipple, mixinDisableRipple } from './behaviors/disable-ripple.mixin';
/**
 * FORMS
 */
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
export { TdAutoTrimDirective };
export { CovalentValidators } from './forms/validators/validators';
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
}
