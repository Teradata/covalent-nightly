/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * FORMS
 */
// Form Directives
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
/** @type {?} */
var TD_FORMS = [
    TdAutoTrimDirective,
];
// Validators
/** @type {?} */
var TD_VALIDATORS = [];
/**
 * PIPES
 */
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdTimeUntilPipe } from './pipes/time-until/time-until.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDecimalBytesPipe } from './pipes/decimal-bytes/decimal-bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';
/** @type {?} */
var TD_PIPES = [
    TdTimeAgoPipe,
    TdTimeDifferencePipe,
    TdTimeUntilPipe,
    TdBytesPipe,
    TdDecimalBytesPipe,
    TdDigitsPipe,
    TdTruncatePipe,
];
/**
 * Services
 */
import { RouterPathService } from './services/router-path.service';
import { IconService } from './services/icon.service';
var CovalentCommonModule = /** @class */ (function () {
    function CovalentCommonModule() {
    }
    CovalentCommonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule,
                    ],
                    declarations: [
                        TD_FORMS,
                        TD_PIPES,
                        TD_VALIDATORS,
                    ],
                    exports: [
                        FormsModule,
                        CommonModule,
                        TD_FORMS,
                        TD_PIPES,
                        TD_VALIDATORS,
                    ],
                    providers: [
                        RouterPathService,
                        IconService,
                    ],
                },] }
    ];
    return CovalentCommonModule;
}());
export { CovalentCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFPN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0lBRXRFLFFBQVEsR0FBZ0I7SUFDNUIsbUJBQW1CO0NBQ3BCOzs7SUFHSyxhQUFhLEdBQWdCLEVBQ2xDOzs7O0FBS0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFFMUQsUUFBUSxHQUFnQjtJQUM1QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0NBQ2Y7Ozs7QUFNRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQ7SUFBQTtJQXdCQSxDQUFDOztnQkF4QkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osUUFBUTt3QkFDUixRQUFRO3dCQUNSLGFBQWE7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGlCQUFpQjt3QkFDakIsV0FBVztxQkFDWjtpQkFDRjs7SUFHRCwyQkFBQztDQUFBLEFBeEJELElBd0JDO1NBRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEZPUk1TXG4gKi9cblxuLy8gRm9ybSBEaXJlY3RpdmVzXG5pbXBvcnQgeyBUZEF1dG9UcmltRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3Jtcy9hdXRvLXRyaW0vYXV0by10cmltLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX0ZPUk1TOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRBdXRvVHJpbURpcmVjdGl2ZSxcbl07XG5cbi8vIFZhbGlkYXRvcnNcbmNvbnN0IFREX1ZBTElEQVRPUlM6IFR5cGU8YW55PltdID0gW1xuXTtcblxuLyoqXG4gKiBQSVBFU1xuICovXG5pbXBvcnQgeyBUZFRpbWVBZ29QaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLWFnby90aW1lLWFnby5waXBlJztcbmltcG9ydCB7IFRkVGltZURpZmZlcmVuY2VQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLWRpZmZlcmVuY2UvdGltZS1kaWZmZXJlbmNlLnBpcGUnO1xuaW1wb3J0IHsgVGRUaW1lVW50aWxQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLXVudGlsL3RpbWUtdW50aWwucGlwZSc7XG5pbXBvcnQgeyBUZEJ5dGVzUGlwZSB9IGZyb20gJy4vcGlwZXMvYnl0ZXMvYnl0ZXMucGlwZSc7XG5pbXBvcnQgeyBUZERlY2ltYWxCeXRlc1BpcGUgfSBmcm9tICcuL3BpcGVzL2RlY2ltYWwtYnl0ZXMvZGVjaW1hbC1ieXRlcy5waXBlJztcbmltcG9ydCB7IFRkRGlnaXRzUGlwZSB9IGZyb20gJy4vcGlwZXMvZGlnaXRzL2RpZ2l0cy5waXBlJztcbmltcG9ydCB7IFRkVHJ1bmNhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy90cnVuY2F0ZS90cnVuY2F0ZS5waXBlJztcblxuY29uc3QgVERfUElQRVM6IFR5cGU8YW55PltdID0gW1xuICBUZFRpbWVBZ29QaXBlLFxuICBUZFRpbWVEaWZmZXJlbmNlUGlwZSxcbiAgVGRUaW1lVW50aWxQaXBlLFxuICBUZEJ5dGVzUGlwZSxcbiAgVGREZWNpbWFsQnl0ZXNQaXBlLFxuICBUZERpZ2l0c1BpcGUsXG4gIFRkVHJ1bmNhdGVQaXBlLFxuXTtcblxuLyoqXG4gKiBTZXJ2aWNlc1xuICovXG5cbmltcG9ydCB7IFJvdXRlclBhdGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXItcGF0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEljb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pY29uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9GT1JNUyxcbiAgICBURF9QSVBFUyxcbiAgICBURF9WQUxJREFUT1JTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFREX0ZPUk1TLFxuICAgIFREX1BJUEVTLFxuICAgIFREX1ZBTElEQVRPUlMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFJvdXRlclBhdGhTZXJ2aWNlLFxuICAgIEljb25TZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudENvbW1vbk1vZHVsZSB7XG5cbn1cbiJdfQ==