/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * Directives
 */
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
import { TdFullscreenDirective } from './directives/fullscreen/fullscreen.directive';
/** @type {?} */
const TD_DIRECTIVES = [TdAutoTrimDirective, TdFullscreenDirective];
// Validators
/** @type {?} */
const TD_VALIDATORS = [];
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
const TD_PIPES = [
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
export class CovalentCommonModule {
}
CovalentCommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule],
                declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                exports: [FormsModule, CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7TUFFL0UsYUFBYSxHQUFnQixDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDOzs7TUFHekUsYUFBYSxHQUFnQixFQUFFOzs7O0FBS3JDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O01BRTFELFFBQVEsR0FBZ0I7SUFDNUIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztDQUNmOzs7O0FBV0QsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTGhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO2dCQUNwQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQztnQkFDdEQsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQzthQUM3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBEaXJlY3RpdmVzXG4gKi9cbmltcG9ydCB7IFRkQXV0b1RyaW1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm1zL2F1dG8tdHJpbS9hdXRvLXRyaW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mdWxsc2NyZWVuL2Z1bGxzY3JlZW4uZGlyZWN0aXZlJztcblxuY29uc3QgVERfRElSRUNUSVZFUzogVHlwZTxhbnk+W10gPSBbVGRBdXRvVHJpbURpcmVjdGl2ZSwgVGRGdWxsc2NyZWVuRGlyZWN0aXZlXTtcblxuLy8gVmFsaWRhdG9yc1xuY29uc3QgVERfVkFMSURBVE9SUzogVHlwZTxhbnk+W10gPSBbXTtcblxuLyoqXG4gKiBQSVBFU1xuICovXG5pbXBvcnQgeyBUZFRpbWVBZ29QaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLWFnby90aW1lLWFnby5waXBlJztcbmltcG9ydCB7IFRkVGltZURpZmZlcmVuY2VQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLWRpZmZlcmVuY2UvdGltZS1kaWZmZXJlbmNlLnBpcGUnO1xuaW1wb3J0IHsgVGRUaW1lVW50aWxQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLXVudGlsL3RpbWUtdW50aWwucGlwZSc7XG5pbXBvcnQgeyBUZEJ5dGVzUGlwZSB9IGZyb20gJy4vcGlwZXMvYnl0ZXMvYnl0ZXMucGlwZSc7XG5pbXBvcnQgeyBUZERlY2ltYWxCeXRlc1BpcGUgfSBmcm9tICcuL3BpcGVzL2RlY2ltYWwtYnl0ZXMvZGVjaW1hbC1ieXRlcy5waXBlJztcbmltcG9ydCB7IFRkRGlnaXRzUGlwZSB9IGZyb20gJy4vcGlwZXMvZGlnaXRzL2RpZ2l0cy5waXBlJztcbmltcG9ydCB7IFRkVHJ1bmNhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy90cnVuY2F0ZS90cnVuY2F0ZS5waXBlJztcblxuY29uc3QgVERfUElQRVM6IFR5cGU8YW55PltdID0gW1xuICBUZFRpbWVBZ29QaXBlLFxuICBUZFRpbWVEaWZmZXJlbmNlUGlwZSxcbiAgVGRUaW1lVW50aWxQaXBlLFxuICBUZEJ5dGVzUGlwZSxcbiAgVGREZWNpbWFsQnl0ZXNQaXBlLFxuICBUZERpZ2l0c1BpcGUsXG4gIFRkVHJ1bmNhdGVQaXBlLFxuXTtcblxuLyoqXG4gKiBTZXJ2aWNlc1xuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVERfRElSRUNUSVZFUywgVERfUElQRVMsIFREX1ZBTElEQVRPUlNdLFxuICBleHBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgVERfRElSRUNUSVZFUywgVERfUElQRVMsIFREX1ZBTElEQVRPUlNdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudENvbW1vbk1vZHVsZSB7fVxuIl19