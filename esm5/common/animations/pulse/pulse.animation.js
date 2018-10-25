/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group } from '@angular/animations';
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
 * usage: [\@tdPulse]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export var tdPulseAnimation = trigger('tdPulse', [
    state('0', style({
        transform: 'scale3d(1, 1, 1)',
    })),
    state('1', style({
        transform: 'scale3d(1, 1, 1)',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdPulseAnimation
 * @param {?=} pulseOptions
 * @return {?}
 */
export function TdPulseAnimation(pulseOptions) {
    if (pulseOptions === void 0) { pulseOptions = {}; }
    return trigger(pulseOptions.anchor || 'tdPulse', [
        state('0', style({
            transform: 'scale3d(1, 1, 1)',
        })),
        state('1', style({
            transform: 'scale3d(1, 1, 1)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((pulseOptions.duration || 500) + 'ms ' + (pulseOptions.delay || 0) + 'ms', keyframes([
                    style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsc2UuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYW5pbWF0aW9ucy9wdWxzZS9wdWxzZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFDZixLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWV2RyxNQUFNLEtBQU8sZ0JBQWdCLEdBQTZCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7SUFDM0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDZixTQUFTLEVBQUUsa0JBQWtCO0tBQzlCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxrQkFBa0I7S0FDOUIsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUNwQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywyQ0FBMkMsRUFDbkQsU0FBUyxDQUFDO2dCQUNOLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25ELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQzlELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdEQsQ0FBQyxDQUNIO1NBQ0YsQ0FBQztLQUNILEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFDLENBQUM7Q0FDL0QsQ0FBQzs7Ozs7O0FBR0YsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFlBQW9DO0lBQXBDLDZCQUFBLEVBQUEsaUJBQW9DO0lBQ25FLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1FBQy9DLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ2YsU0FBUyxFQUFFLGtCQUFrQjtTQUM5QixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsR0FBRyxFQUFHLEtBQUssQ0FBQztZQUNoQixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQy9FLFNBQVMsQ0FBQztvQkFDUixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNuRCxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUM5RCxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUN0RCxDQUFDLENBQ0g7YUFDRixDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRQdWxzZUFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgcHVsc2UgYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkUHVsc2VdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZFB1bHNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZFB1bHNlJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgfSkpLFxuICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICBncm91cChbXG4gICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlIH19JyxcbiAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAwIH0pLFxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KScsIG9mZnNldDogMC41IH0pLFxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMS4wIH0pLFxuICAgICAgICBdKSxcbiAgICAgICksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRQdWxzZUFuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkUHVsc2VBbmltYXRpb24ocHVsc2VPcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIocHVsc2VPcHRpb25zLmFuY2hvciB8fCAndGRQdWxzZScsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKHB1bHNlT3B0aW9ucy5kdXJhdGlvbiB8fCA1MDApICsgJ21zICcgKyAocHVsc2VPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zJyxcbiAgICAgICAgICBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAwIH0pLFxuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpJywgb2Zmc2V0OiAwLjUgfSksXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDEuMCB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiJdfQ==