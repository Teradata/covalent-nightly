/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate, AUTO_STYLE, query, animateChild, group } from '@angular/animations';
/**
 * @record
 */
export function ICollapseAnimation() { }
if (false) {
    /** @type {?|undefined} */
    ICollapseAnimation.prototype.easeOnClose;
    /** @type {?|undefined} */
    ICollapseAnimation.prototype.easeOnOpen;
}
/**
 * const tdCollapseAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
 * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a collapse/expand animation.
 *
 * usage: [\@tdCollapse]="{ value: true | false, params: { duration: 500 }}"
 * @type {?}
 */
export const tdCollapseAnimation = trigger('tdCollapse', [
    state('1', style({
        height: '0',
        visibility: 'hidden',
    })),
    state('0', style({
        height: AUTO_STYLE,
        visibility: AUTO_STYLE,
    })),
    transition('0 => 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
        ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
    transition('1 => 0', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
        ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdCollapseAnimation
 * @param {?=} collapseOptions
 * @return {?}
 */
export function TdCollapseAnimation(collapseOptions = {}) {
    return trigger(collapseOptions.anchor || 'tdCollapse', [
        state('1', style({
            height: '0',
            visibility: 'hidden',
        })),
        state('0', style({
            height: AUTO_STYLE,
            visibility: AUTO_STYLE,
        })),
        transition('0 => 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((collapseOptions.duration || 150) + 'ms ' +
                    (collapseOptions.delay || 0) + 'ms ' +
                    (collapseOptions.easeOnClose || 'ease-in')),
            ]),
        ]),
        transition('1 => 0', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((collapseOptions.duration || 150) + 'ms ' +
                    (collapseOptions.delay || 0) + 'ms ' +
                    (collapseOptions.easeOnOpen || 'ease-out')),
            ]),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYW5pbWF0aW9ucy9jb2xsYXBzZS9jb2xsYXBzZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUNoQixVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUd2Ryx3Q0FHQzs7O0lBRkUseUNBQXFCOztJQUNyQix3Q0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnZCLE1BQU0sT0FBTyxtQkFBbUIsR0FBNkIsT0FBTyxDQUFDLFlBQVksRUFBRTtJQUMvRSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsVUFBVSxFQUFFLFFBQVE7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7UUFDaEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsVUFBVSxFQUFFLFVBQVU7S0FDdkIsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQztTQUNyRCxDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUMsQ0FBQztJQUM3RCxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQztZQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLDJDQUEyQyxDQUFDO1NBQ3JELENBQUM7S0FDSCxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBQyxDQUFDO0NBQy9ELENBQUM7Ozs7OztBQUdKLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxrQkFBc0MsRUFBRTtJQUMxRSxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLFlBQVksRUFBRTtRQUNyRCxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNmLE1BQU0sRUFBRSxHQUFHO1lBQ1gsVUFBVSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRyxLQUFLLENBQUM7WUFDaEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLO29CQUN6QyxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSztvQkFDcEMsQ0FBQyxlQUFlLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDO2FBQ3BELENBQUM7U0FDSCxDQUFDO1FBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLO29CQUN6QyxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSztvQkFDcEMsQ0FBQyxlQUFlLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFDO2FBQ3BELENBQUM7U0FDSCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSxcbiAgICAgICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgQVVUT19TVFlMRSwgcXVlcnksIGFuaW1hdGVDaGlsZCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsYXBzZUFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgIGVhc2VPbkNsb3NlPzogc3RyaW5nO1xuICAgZWFzZU9uT3Blbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZENvbGxhcHNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMTUwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlT25DbG9zZTogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGNsb3NpbmcuIERlZmF1bHRzIHRvIGVhc2UtaW4uXG4gKiAqIGVhc2VPbk9wZW46IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBvcGVuaW5nLiBEZWZhdWx0cyB0byBlYXNlLW91dC5cbiAqXG4gKiBSZXR1cm5zIGFuIFtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFdIG9iamVjdCB3aXRoIGJvb2xlYW4gc3RhdGVzIGZvciBhIGNvbGxhcHNlL2V4cGFuZCBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRDb2xsYXBzZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogNTAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkQ29sbGFwc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkQ29sbGFwc2UnLCBbXG4gICAgc3RhdGUoJzEnLCBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIH0pKSxcbiAgICBzdGF0ZSgnMCcsICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICB2aXNpYmlsaXR5OiBBVVRPX1NUWUxFLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2UtaW4nIH19KSxcbiAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIHt7IGRlbGF5IH19bXMge3sgZWFzZSB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG4gIF0pO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2VlIHRkQ29sbGFwc2VBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZENvbGxhcHNlQW5pbWF0aW9uKGNvbGxhcHNlT3B0aW9uczogSUNvbGxhcHNlQW5pbWF0aW9uID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihjb2xsYXBzZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZENvbGxhcHNlJywgW1xuICAgIHN0YXRlKCcxJywgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzAnLCAgc3R5bGUoe1xuICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgICAgdmlzaWJpbGl0eTogQVVUT19TVFlMRSxcbiAgICB9KSksXG4gICAgdHJhbnNpdGlvbignMCA9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoY29sbGFwc2VPcHRpb25zLmR1cmF0aW9uIHx8IDE1MCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGNvbGxhcHNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmVhc2VPbkNsb3NlIHx8ICdlYXNlLWluJykpLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignMSA9PiAwJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgoY29sbGFwc2VPcHRpb25zLmR1cmF0aW9uIHx8IDE1MCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGNvbGxhcHNlT3B0aW9ucy5kZWxheSB8fCAwKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAoY29sbGFwc2VPcHRpb25zLmVhc2VPbk9wZW4gfHwgJ2Vhc2Utb3V0JykpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIl19