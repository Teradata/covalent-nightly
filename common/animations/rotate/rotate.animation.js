import { trigger, state, style, transition, animate } from '@angular/animations';
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
export function TdRotateAnimation(anchor, duration, degrees) {
    if (duration === void 0) { duration = 250; }
    if (degrees === void 0) { degrees = 180; }
    return trigger(anchor, [
        state('0', style({
            transform: 'rotate(0deg)',
        })),
        state('1', style({
            transform: 'rotate(' + degrees + 'deg)',
        })),
        transition('0 <=> 1', [
            animate(duration + 'ms ease-out'),
        ]),
    ]);
}
//# sourceMappingURL=rotate.animation.js.map