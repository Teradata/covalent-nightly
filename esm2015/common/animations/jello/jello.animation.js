/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group } from '@angular/animations';
/**
 * const tdJelloAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a jello animation.
 *
 * usage: [\@tdJello]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export const tdJelloAnimation = trigger('tdJello', [
    state('0', style({
        transform: 'none',
    })),
    state('1', style({
        transform: 'none',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'none', offset: 0 }),
                style({ transform: 'none', offset: 0.011 }),
                style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdJelloAnimation
 * @param {?=} jelloOptions
 * @return {?}
 */
export function TdJelloAnimation(jelloOptions = {}) {
    return trigger(jelloOptions.anchor || 'tdJello', [
        state('0', style({
            transform: 'none',
        })),
        state('1', style({
            transform: 'none',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((jelloOptions.duration || 500) + 'ms ' + (jelloOptions.delay || 0) + 'ms', keyframes([
                    style({ transform: 'none', offset: 0 }),
                    style({ transform: 'none', offset: 0.011 }),
                    style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                    style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                    style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                    style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                    style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                    style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                    style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
                ])),
            ]),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVsbG8uYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYW5pbWF0aW9ucy9qZWxsby9qZWxsby5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFDZixLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWV2RyxNQUFNLE9BQU8sZ0JBQWdCLEdBQTZCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7SUFDM0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDZixTQUFTLEVBQUUsTUFBTTtLQUNsQixDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsR0FBRyxFQUFHLEtBQUssQ0FBQztRQUNoQixTQUFTLEVBQUUsTUFBTTtLQUNsQixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxFQUNuRCxTQUFTLENBQUM7Z0JBQ1IsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2dCQUN6QyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2dCQUNwRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2dCQUNsRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2dCQUN0RSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2dCQUN0RSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2dCQUMxRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2dCQUMxRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2FBQy9FLENBQUMsQ0FBQztTQUNKLENBQUM7S0FDSCxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBQyxDQUFDO0NBQy9ELENBQUM7Ozs7OztBQUdGLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxlQUFrQyxFQUFFO0lBQ25FLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1FBQy9DLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ2YsU0FBUyxFQUFFLE1BQU07U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7WUFDaEIsU0FBUyxFQUFFLE1BQU07U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxTQUFTLENBQUM7b0JBQzNGLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO29CQUNyQyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDekMsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDcEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDbEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDdEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDdEUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDMUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDMUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztpQkFDL0UsQ0FBQyxDQUFDO2FBQ0osQ0FBQztTQUNILENBQUM7S0FDSCxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGNvbnN0IHRkSmVsbG9BbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byA1MDAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlIGFuZCBkZWNlbGVyYXRlIHN0eWxlLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGplbGxvIGFuaW1hdGlvbi5cbiAqXG4gKiB1c2FnZTogW0B0ZEplbGxvXT1cInsgdmFsdWU6IHRydWUgfCBmYWxzZSwgcGFyYW1zOiB7IGR1cmF0aW9uOiAyMDAgfX1cIlxuICovXG5leHBvcnQgY29uc3QgdGRKZWxsb0FuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRKZWxsbycsIFtcbiAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gIH0pKSxcbiAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ25vbmUnLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMC4wMTF9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyknLCBvZmZzZXQ6IDAuMjIyfSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKScsIG9mZnNldDogMC4zMzN9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKScsIG9mZnNldDogMC40NDR9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKScsIG9mZnNldDogMC41NTV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyknLCBvZmZzZXQ6IDAuNjY2fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpJywgb2Zmc2V0OiAwLjc3N30pLFxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyknLCBvZmZzZXQ6IDAuODg4fSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRKZWxsb0FuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkSmVsbG9BbmltYXRpb24oamVsbG9PcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoamVsbG9PcHRpb25zLmFuY2hvciB8fCAndGRKZWxsbycsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUnLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICdub25lJyxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGplbGxvT3B0aW9ucy5kdXJhdGlvbiB8fCA1MDApICsgJ21zICcgKyAoamVsbG9PcHRpb25zLmRlbGF5IHx8IDApICsgJ21zJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdub25lJywgb2Zmc2V0OiAwLjAxMX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpJywgb2Zmc2V0OiAwLjIyMn0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKScsIG9mZnNldDogMC4zMzN9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpJywgb2Zmc2V0OiAwLjQ0NH0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyknLCBvZmZzZXQ6IDAuNTU1fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyknLCBvZmZzZXQ6IDAuNjY2fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyknLCBvZmZzZXQ6IDAuNzc3fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpJywgb2Zmc2V0OiAwLjg4OH0pLFxuICAgICAgICBdKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSk7XG59XG4iXX0=