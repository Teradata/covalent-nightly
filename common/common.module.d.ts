/**
 * ANIMATIONS
 */
import { TdToggleDirective } from './animations/toggle/toggle.directive';
import { TdFadeDirective } from './animations/fade/fade.directive';
export { TdToggleDirective, TdFadeDirective };
export { TdRotateAnimation, IRotateAnimation } from './animations/rotate/rotate.animation';
export { TdCollapseAnimation, ICollapseAnimation } from './animations/collapse/collapse.animation';
export { TdFadeInOutAnimation, IFadeInOutAnimation } from './animations/fade/fadeInOut.animation';
export { TdBounceAnimation } from './animations/bounce/bounce.animation';
export { TdFlashAnimation } from './animations/flash/flash.animation';
export { TdHeadshakeAnimation } from './animations/headshake/headshake.animation';
export { TdJelloAnimation } from './animations/jello/jello.animation';
export { TdPulseAnimation } from './animations/pulse/pulse.animation';
/**
 * BEHAVIORS
 */
export { IControlValueAccessor, mixinControlValueAccessor } from './behaviors/control-value-accesor.mixin';
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
