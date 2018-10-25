/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group } from '@angular/animations';
/**
 * const tdFlashAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a flash animation.
 *
 * usage: [\@tdFlash]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export const tdFlashAnimation = trigger('tdFlash', [
    state('0', style({
        opacity: 1,
    })),
    state('1', style({
        opacity: 1,
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ opacity: 0, offset: 0.25 }),
                style({ opacity: 1, offset: 0.5 }),
                style({ opacity: 0, offset: 0.75 }),
                style({ opacity: 1, offset: 1.0 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdFlashAnimation
 * @param {?=} flashOptions
 * @return {?}
 */
export function TdFlashAnimation(flashOptions = {}) {
    return trigger(flashOptions.anchor || 'tdFlash', [
        state('0', style({
            opacity: 1,
        })),
        state('1', style({
            opacity: 1,
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((flashOptions.duration || 500) + 'ms ' + (flashOptions.delay || 0) + 'ms', keyframes([
                    style({ opacity: 1, offset: 0 }),
                    style({ opacity: 0, offset: 0.25 }),
                    style({ opacity: 1, offset: 0.5 }),
                    style({ opacity: 0, offset: 0.75 }),
                    style({ opacity: 1, offset: 1.0 }),
                ])),
            ]),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2guYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYW5pbWF0aW9ucy9mbGFzaC9mbGFzaC5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFDZixLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWV2RyxNQUFNLE9BQU8sZ0JBQWdCLEdBQTZCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7SUFDM0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUNwQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywyQ0FBMkMsRUFDbkQsU0FBUyxDQUFDO2dCQUNSLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO2dCQUM5QixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO2dCQUNqQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUNqQyxDQUFDLENBQUM7U0FDSixDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUMsQ0FBQztDQUMvRCxDQUFDOzs7Ozs7QUFHRixNQUFNLFVBQVUsZ0JBQWdCLENBQUMsZUFBa0MsRUFBRTtJQUNuRSxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtRQUMvQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7WUFDaEIsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3BCLEtBQUssQ0FBQztnQkFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUMvQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQztvQkFDM0YsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQzlCLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO29CQUNqQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztvQkFDaEMsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBQ2pDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2lCQUNqQyxDQUFDLENBQUM7YUFDSixDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRGbGFzaEFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDUwMCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZTogQW5pbWF0aW9uIGFjY2VsZXJhdGUgYW5kIGRlY2VsZXJhdGUgc3R5bGUuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgZmxhc2ggYW5pbWF0aW9uLlxuICpcbiAqIHVzYWdlOiBbQHRkRmxhc2hdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEZsYXNoQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd0ZEZsYXNoJywgW1xuICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICBvcGFjaXR5OiAxLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICBvcGFjaXR5OiAxLFxuICB9KSksXG4gIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScsXG4gICAgICBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuMjV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMC41fSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuNzV9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMS4wfSksXG4gICAgICBdKSksXG4gICAgXSksXG4gIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAnMCcsIGVhc2U6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRGbGFzaEFuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkRmxhc2hBbmltYXRpb24oZmxhc2hPcHRpb25zOiBJQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoZmxhc2hPcHRpb25zLmFuY2hvciB8fCAndGRGbGFzaCcsIFtcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChmbGFzaE9wdGlvbnMuZHVyYXRpb24gfHwgNTAwKSArICdtcyAnICsgKGZsYXNoT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcycsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuMjV9KSxcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjV9KSxcbiAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwLjc1fSksXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMS4wfSksXG4gICAgICAgIF0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKTtcbn1cbiJdfQ==