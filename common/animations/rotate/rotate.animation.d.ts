import { AnimationTriggerMetadata } from '@angular/animations';
/**
 * Function TdRotateAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in miliseconds. Defaults to 250 ms.
 * * degrees: Degrees of rotation that the dom object will animation. A negative value will cause the animation to initially rotate counter-clockwise.
 * Defaults to 180 degrees.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based rotation animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export declare function TdRotateAnimation(anchor: string, duration?: number, degrees?: number): AnimationTriggerMetadata;
