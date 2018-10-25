/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate, AUTO_STYLE, query, animateChild, group } from '@angular/animations';
/**
 * @record
 */
export function IFadeInOutAnimation() { }
if (false) {
    /** @type {?|undefined} */
    IFadeInOutAnimation.prototype.easeOnIn;
    /** @type {?|undefined} */
    IFadeInOutAnimation.prototype.easeOnOut;
}
/**
 * const tdFadeInOutAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
 * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a fade animation.
 *
 * usage: [\@tdFadeInOut]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export var tdFadeInOutAnimation = trigger('tdFadeInOut', [
    state('0', style({
        opacity: '0',
        visibility: 'hidden',
    })),
    state('1', style({
        opacity: AUTO_STYLE,
        visibility: AUTO_STYLE,
    })),
    transition('0 => 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ easeOnIn }}'),
        ]),
    ], { params: { duration: 150, delay: '0', easeOnIn: 'ease-in' } }),
    transition('1 => 0', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ easeOnOut }}'),
        ]),
    ], { params: { duration: 150, delay: '0', easeOnOut: 'ease-out' } }),
]);
/**
 * @deprecated see tdFadeInOutAnimation
 * @param {?=} fadeInOut
 * @return {?}
 */
export function TdFadeInOutAnimation(fadeInOut) {
    if (fadeInOut === void 0) { fadeInOut = {}; }
    return trigger((fadeInOut.anchor || 'tdFadeInOut'), [
        state('0', style({
            opacity: '0',
            visibility: 'hidden',
        })),
        state('1', style({
            opacity: AUTO_STYLE,
            visibility: AUTO_STYLE,
        })),
        transition('0 => 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((fadeInOut.duration || 150) + 'ms ' +
                    (fadeInOut.delay || 0) + 'ms ' +
                    (fadeInOut.easeOnIn || 'ease-in')),
            ]),
        ]),
        transition('1 => 0', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((fadeInOut.duration || 150) + 'ms ' +
                    (fadeInOut.delay || 0) + 'ms ' +
                    (fadeInOut.easeOnOut || 'ease-out')),
            ]),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZUluT3V0LmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2FuaW1hdGlvbnMvZmFkZS9mYWRlSW5PdXQuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFDaEIsVUFBVSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFHLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHeEcseUNBR0M7OztJQUZDLHVDQUFrQjs7SUFDbEIsd0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JyQixNQUFNLEtBQU8sb0JBQW9CLEdBQTZCLE9BQU8sQ0FBQyxhQUFhLEVBQUU7SUFDakYsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsR0FBRztRQUNaLFVBQVUsRUFBRSxRQUFRO0tBQ3JCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFVBQVUsRUFBRSxVQUFVO0tBQ3ZCLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDO1lBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUMvQyxPQUFPLENBQUMsK0NBQStDLENBQUM7U0FDekQsQ0FBQztLQUNILEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFDLENBQUM7SUFDakUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxnREFBZ0QsQ0FBQztTQUM1RCxDQUFDO0tBQ0gsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUMsQ0FBQztDQUNwRSxDQUFDOzs7Ozs7QUFHRixNQUFNLFVBQVUsb0JBQW9CLENBQUMsU0FBbUM7SUFBbkMsMEJBQUEsRUFBQSxjQUFtQztJQUN0RSxPQUFPLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLEVBQUU7UUFDbEQsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDZixPQUFPLEVBQUUsR0FBRztZQUNaLFVBQVUsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSztvQkFDbkMsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUs7b0JBQzlCLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQzthQUMzQyxDQUFDO1NBQ0gsQ0FBQztRQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSztvQkFDbkMsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUs7b0JBQzlCLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsQ0FBQzthQUM3QyxDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwICB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSUFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhZGVJbk91dEFuaW1hdGlvbiBleHRlbmRzIElBbmltYXRpb25PcHRpb25zIHtcbiAgZWFzZU9uSW4/OiBzdHJpbmc7XG4gIGVhc2VPbk91dD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBjb25zdCB0ZEZhZGVJbk91dEFuaW1hdGlvblxuICpcbiAqIFBhcmFtZXRlciBPcHRpb25zOlxuICogKiBkdXJhdGlvbjogRHVyYXRpb24gdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHRzIHRvIDE1MCBtcy5cbiAqICogZGVsYXk6IERlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gMCBtcy5cbiAqICogZWFzZU9uSW46IEFuaW1hdGlvbiBhY2NlbGVyYXRlcyBhbmQgZGVjZWxlcmF0ZXMgd2hlbiBmYWRpbmcgaW4uIERlZmF1bHRzIHRvIGVhc2UtaW4uXG4gKiAqIGVhc2VPbk91dDogQW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlcyB3aGVuIGZhZGluZyBvdXQuIERlZmF1bHRzIHRvIGVhc2Utb3V0LlxuICpcbiAqIFJldHVybnMgYW4gW0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YV0gb2JqZWN0IHdpdGggYm9vbGVhbiBzdGF0ZXMgZm9yIGEgZmFkZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRGYWRlSW5PdXRdPVwieyB2YWx1ZTogdHJ1ZSB8IGZhbHNlLCBwYXJhbXM6IHsgZHVyYXRpb246IDIwMCB9fVwiXG4gKi9cbmV4cG9ydCBjb25zdCB0ZEZhZGVJbk91dEFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndGRGYWRlSW5PdXQnLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7IGR1cmF0aW9uIH19bXMge3sgZGVsYXkgfX1tcyB7eyBlYXNlT25JbiB9fScpLFxuICAgICAgXSksXG4gICAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDE1MCwgZGVsYXk6ICcwJywgZWFzZU9uSW46ICdlYXNlLWluJyB9fSksXG4gICAgdHJhbnNpdGlvbignMSA9PiAwJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2VPbk91dCB9fScpLFxuICAgIF0pLFxuICBdLCB7IHBhcmFtczogeyBkdXJhdGlvbjogMTUwLCBkZWxheTogJzAnLCBlYXNlT25PdXQ6ICdlYXNlLW91dCcgfX0pLFxuXSk7XG5cbi8qKiBAZGVwcmVjYXRlZCBzZWUgdGRGYWRlSW5PdXRBbmltYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZEZhZGVJbk91dEFuaW1hdGlvbihmYWRlSW5PdXQ6IElGYWRlSW5PdXRBbmltYXRpb24gPSB7fSk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKChmYWRlSW5PdXQuYW5jaG9yIHx8ICd0ZEZhZGVJbk91dCcpLCBbXG4gICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KSksXG4gICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogQVVUT19TVFlMRSxcbiAgICAgIHZpc2liaWxpdHk6IEFVVE9fU1RZTEUsXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGZhZGVJbk91dC5kdXJhdGlvbiB8fCAxNTApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZGVsYXkgfHwgMCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGZhZGVJbk91dC5lYXNlT25JbiB8fCAnZWFzZS1pbicpKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJzEgPT4gMCcsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJ0AqJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gICAgICAgIGFuaW1hdGUoKGZhZGVJbk91dC5kdXJhdGlvbiB8fCAxNTApICsgJ21zICcgK1xuICAgICAgICAgICAgICAgIChmYWRlSW5PdXQuZGVsYXkgfHwgMCkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKGZhZGVJbk91dC5lYXNlT25PdXQgfHwgJ2Vhc2Utb3V0JykpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIl19