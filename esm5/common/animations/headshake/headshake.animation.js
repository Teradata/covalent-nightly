/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group } from '@angular/animations';
/**
 * const tdHeadshakeAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a headshake animation.
 *
 * usage: [\@tdHeadshake]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export var tdHeadshakeAnimation = trigger('tdHeadshake', [
    state('0', style({
        transform: 'translateX(0)',
    })),
    state('1', style({
        transform: 'translateX(0)',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'translateX(0)', offset: 0 }),
                style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                style({ transform: 'translateX(0)', offset: 0.50 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdHeadshakeAnimation
 * @param {?=} headshakeOptions
 * @return {?}
 */
export function TdHeadshakeAnimation(headshakeOptions) {
    if (headshakeOptions === void 0) { headshakeOptions = {}; }
    return trigger(headshakeOptions.anchor || 'tdHeadshake', [
        state('0', style({
            transform: 'translateX(0)',
        })),
        state('1', style({
            transform: 'translateX(0)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((headshakeOptions.duration || 500) + 'ms ' + (headshakeOptions.delay || 0) + 'ms', keyframes([
                    style({ transform: 'translateX(0)', offset: 0 }),
                    style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                    style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                    style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                    style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                    style({ transform: 'translateX(0)', offset: 0.50 }),
                ])),
            ]),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZHNoYWtlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2FuaW1hdGlvbnMvaGVhZHNoYWtlL2hlYWRzaGFrZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFDZixLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWV2RyxNQUFNLEtBQU8sb0JBQW9CLEdBQTZCLE9BQU8sQ0FBQyxhQUFhLEVBQUU7SUFDbkYsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDZixTQUFTLEVBQUUsZUFBZTtLQUMzQixDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsR0FBRyxFQUFHLEtBQUssQ0FBQztRQUNoQixTQUFTLEVBQUUsZUFBZTtLQUMzQixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxFQUNuRCxTQUFTLENBQUM7Z0JBQ1IsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQzlDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7Z0JBQ3BFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7Z0JBQ2xFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7Z0JBQ3BFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7Z0JBQ2xFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ2xELENBQUMsQ0FBQztTQUNKLENBQUM7S0FDSCxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBQyxDQUFDO0NBQy9ELENBQUM7Ozs7OztBQUdGLE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxnQkFBd0M7SUFBeEMsaUNBQUEsRUFBQSxxQkFBd0M7SUFDM0UsT0FBTyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxJQUFJLGFBQWEsRUFBRTtRQUN2RCxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNmLFNBQVMsRUFBRSxlQUFlO1NBQzNCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxlQUFlO1NBQzNCLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQztvQkFDbkcsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQzlDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7b0JBQ3BFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7b0JBQ2xFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7b0JBQ3BFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7b0JBQ2xFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO2lCQUNsRCxDQUFDLENBQUM7YUFDSixDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxuICAgICAgICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBBVVRPX1NUWUxFLCBxdWVyeSwgYW5pbWF0ZUNoaWxkLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogY29uc3QgdGRIZWFkc2hha2VBbmltYXRpb25cbiAqXG4gKiBQYXJhbWV0ZXIgT3B0aW9uczpcbiAqICogZHVyYXRpb246IER1cmF0aW9uIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byA1MDAgbXMuXG4gKiAqIGRlbGF5OiBEZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDAgbXMuXG4gKiAqIGVhc2U6IEFuaW1hdGlvbiBhY2NlbGVyYXRlIGFuZCBkZWNlbGVyYXRlIHN0eWxlLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGhlYWRzaGFrZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRIZWFkc2hha2VdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEhlYWRzaGFrZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRIZWFkc2hha2UnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyknLCBvZmZzZXQ6IDAuMDY1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKScsIG9mZnNldDogMC4xODV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyknLCBvZmZzZXQ6IDAuMzE1fSksXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKScsIG9mZnNldDogMC40MzV9KSxcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvZmZzZXQ6IDAuNTB9KSxcbiAgICAgIF0pKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZEhlYWRzaGFrZUFuaW1hdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRkSGVhZHNoYWtlQW5pbWF0aW9uKGhlYWRzaGFrZU9wdGlvbnM6IElBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihoZWFkc2hha2VPcHRpb25zLmFuY2hvciB8fCAndGRIZWFkc2hha2UnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKChoZWFkc2hha2VPcHRpb25zLmR1cmF0aW9uIHx8IDUwMCkgKyAnbXMgJyArIChoZWFkc2hha2VPcHRpb25zLmRlbGF5IHx8IDApICsgJ21zJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpJywgb2Zmc2V0OiAwLjA2NX0pLFxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKScsIG9mZnNldDogMC4xODV9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKScsIG9mZnNldDogMC4zMTV9KSxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyknLCBvZmZzZXQ6IDAuNDM1fSksXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvZmZzZXQ6IDAuNTB9KSxcbiAgICAgICAgXSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIl19