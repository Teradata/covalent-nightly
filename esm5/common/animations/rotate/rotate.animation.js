/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate, query, animateChild, group, } from '@angular/animations';
/**
 * @record
 */
export function IRotateAnimation() { }
if (false) {
    /** @type {?|undefined} */
    IRotateAnimation.prototype.degrees;
    /** @type {?|undefined} */
    IRotateAnimation.prototype.ease;
}
/**
 * const tdRotateAnimation
 *
 * Parameter Options:
 * * degressStart: Degrees of rotation that the dom object will end up in during the "false" state
 * * degreesEnd: Degrees of rotation that the dom object will end up in during the "true" state
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerates and decelerates. Defaults to ease-in.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a rotation animation.
 *
 * usage: [\@tdRotate]="{ value: true | false, params: { degreesEnd: 90 }}"
 * @type {?}
 */
export var tdRotateAnimation = trigger('tdRotate', [
    state('0', style({
        transform: 'rotate({{ degressStart }}deg)',
    }), { params: { degressStart: 0 } }),
    state('1', style({
        transform: 'rotate({{ degreesEnd }}deg)',
    }), { params: { degreesEnd: 180 } }),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
        ]),
    ], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
]);
/**
 * @deprecated see tdRotateAnimation
 * @param {?=} rotateOptions
 * @return {?}
 */
export function TdRotateAnimation(rotateOptions) {
    if (rotateOptions === void 0) { rotateOptions = {}; }
    return trigger(rotateOptions.anchor || 'tdRotate', [
        state('0', style({
            transform: 'rotate(0deg)',
        })),
        state('1', style({
            transform: 'rotate(' + (rotateOptions.degrees || 180) + 'deg)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((rotateOptions.duration || 250) + 'ms ' +
                    (rotateOptions.delay || 0) + 'ms ' +
                    (rotateOptions.ease || 'ease-in')),
            ]),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2FuaW1hdGlvbnMvcm90YXRlL3JvdGF0ZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUMxQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssR0FDM0IsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUk3QixzQ0FHQzs7O0lBRkMsbUNBQWlCOztJQUNqQixnQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmhCLE1BQU0sS0FBTyxpQkFBaUIsR0FBNkIsT0FBTyxDQUFDLFVBQVUsRUFBRTtJQUM3RSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLFNBQVMsRUFBRSwrQkFBK0I7S0FDM0MsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7SUFDbkMsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsU0FBUyxFQUFFLDZCQUE2QjtLQUN6QyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQztJQUNuQyxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxDQUFDO1NBQ3JELENBQUM7S0FDSCxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBQyxDQUFDO0NBQzlELENBQUM7Ozs7OztBQUdGLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxhQUFvQztJQUFwQyw4QkFBQSxFQUFBLGtCQUFvQztJQUNwRSxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRTtRQUNqRCxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNmLFNBQVMsRUFBRSxjQUFjO1NBQzFCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE1BQU07U0FDL0QsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLO29CQUM3QyxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSztvQkFDbEMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDO2FBQ3JDLENBQUM7U0FDSCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSb3RhdGVBbmltYXRpb24gZXh0ZW5kcyBJQW5pbWF0aW9uT3B0aW9ucyB7XG4gIGRlZ3JlZXM/OiBudW1iZXI7XG4gIGVhc2U/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogY29uc3QgdGRSb3RhdGVBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZGVncmVzc1N0YXJ0OiBEZWdyZWVzIG9mIHJvdGF0aW9uIHRoYXQgdGhlIGRvbSBvYmplY3Qgd2lsbCBlbmQgdXAgaW4gZHVyaW5nIHRoZSBcImZhbHNlXCIgc3RhdGVcbiAqICogZGVncmVlc0VuZDogRGVncmVlcyBvZiByb3RhdGlvbiB0aGF0IHRoZSBkb20gb2JqZWN0IHdpbGwgZW5kIHVwIGluIGR1cmluZyB0aGUgXCJ0cnVlXCIgc3RhdGVcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAxNTAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMuIERlZmF1bHRzIHRvIGVhc2UtaW4uXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSByb3RhdGlvbiBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRSb3RhdGVdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZGVncmVlc0VuZDogOTAgfX1cIlxuICovXG5cbmV4cG9ydCBjb25zdCB0ZFJvdGF0ZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRSb3RhdGUnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSh7eyBkZWdyZXNzU3RhcnQgfX1kZWcpJyxcbiAgfSksIHsgcGFyYW1zOiB7IGRlZ3Jlc3NTdGFydDogMCB9fSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoe3sgZGVncmVlc0VuZCB9fWRlZyknLFxuICB9KSwgeyBwYXJhbXM6IHsgZGVncmVlc0VuZDogMTgwIH19KSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAyNTAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLWluJyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZFJvdGF0ZUFuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkUm90YXRlQW5pbWF0aW9uKHJvdGF0ZU9wdGlvbnM6IElSb3RhdGVBbmltYXRpb24gPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKHJvdGF0ZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZFJvdGF0ZScsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgKHJvdGF0ZU9wdGlvbnMuZGVncmVlcyB8fCAxODApICsgJ2RlZyknLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgocm90YXRlT3B0aW9ucy5kdXJhdGlvbiB8fCAyNTApICsgJ21zICcgK1xuICAgICAgICAgIChyb3RhdGVPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zICcgK1xuICAgICAgICAgIChyb3RhdGVPcHRpb25zLmVhc2UgfHwgJ2Vhc2UtaW4nKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iXX0=