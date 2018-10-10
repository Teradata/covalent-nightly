import { AnimationTriggerMetadata } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';
/**
 * const tdPulseAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a pulse animation.
 *
 * usage: [@tdPulse]="{ value: true | false, params: { duration: 200 }}"
 */
export declare const tdPulseAnimation: AnimationTriggerMetadata;
/** @deprecated see tdPulseAnimation */
export declare function TdPulseAnimation(pulseOptions?: IAnimationOptions): AnimationTriggerMetadata;
