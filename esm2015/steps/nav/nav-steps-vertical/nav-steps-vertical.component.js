/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ViewChild, QueryList, ChangeDetectionStrategy, Renderer2, ChangeDetectorRef, ElementRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';
export class TdNavStepsVerticalComponent {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_renderer, _changeDetectorRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._separators = [];
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            this._configureSteps();
            this._changeDetectorRef.markForCheck();
        }));
        this._configureSteps();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Set the step line separators and display numbers
     * @private
     * @return {?}
     */
    _configureSteps() {
        this._separators.forEach((/**
         * @param {?} separator
         * @return {?}
         */
        (separator) => {
            this._renderer.removeChild(this._stepList.nativeElement, separator);
        }));
        /** @type {?} */
        const stepsArray = this._steps.toArray();
        // set the index number of the step so can display that number in circle
        stepsArray.forEach((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        (step, index) => {
            if (index > 0 && index < stepsArray.length) {
                /** @type {?} */
                const separator = this._renderer.createElement('div');
                this._renderer.addClass(separator, 'td-vertical-line-wrapper');
                /** @type {?} */
                const separatorChild = this._renderer.createElement('div');
                this._renderer.addClass(separatorChild, 'td-vertical-line');
                this._renderer.appendChild(separator, separatorChild);
                this._separators.push(separator);
                this._renderer.insertBefore(this._stepList.nativeElement, separator, step.elementRef.nativeElement);
            }
            step.number = index + 1;
        }));
    }
}
TdNavStepsVerticalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nav[td-steps][vertical]',
                template: "<div class=\"td-steps-header\">\n  <div class=\"td-steps-header-container\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                host: {
                    class: 'td-steps td-steps-vertical',
                },
                styles: [".td-vertical-line-wrapper{position:relative}.td-vertical-line-wrapper .td-vertical-line{position:absolute;top:-16px;height:34px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line-wrapper .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line-wrapper .td-vertical-line{left:auto;right:20px}"]
            }] }
];
/** @nocollapse */
TdNavStepsVerticalComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdNavStepsVerticalComponent.propDecorators = {
    _steps: [{ type: ContentChildren, args: [TdNavStepLinkComponent,] }],
    _stepList: [{ type: ViewChild, args: ['stepList', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._separators;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._destroyed;
    /** @type {?} */
    TdNavStepsVerticalComponent.prototype._steps;
    /** @type {?} */
    TdNavStepsVerticalComponent.prototype._stepList;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsic3RlcHMvbmF2L25hdi1zdGVwcy12ZXJ0aWNhbC9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsU0FBUyxFQUVULHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQVlsRixNQUFNLE9BQU8sMkJBQTJCOzs7OztJQVd0QyxZQUFvQixTQUFvQixFQUFVLGtCQUFxQztRQUFuRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVYvRSxnQkFBVyxHQUFrQixFQUFFLENBQUM7Ozs7UUFHdkIsZUFBVSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0lBT3lCLENBQUM7Ozs7SUFFM0Ysa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2xFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUtPLGVBQWU7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxTQUFzQixFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEUsQ0FBQyxFQUFDLENBQUM7O2NBQ0csVUFBVSxHQUE2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNsRSx3RUFBd0U7UUFDeEUsVUFBVSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxJQUE0QixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ2pFLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRTs7c0JBQ3BDLFNBQVMsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDOztzQkFDekQsY0FBYyxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3JHO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUVuQyw2TUFBa0Q7Z0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztnQkFFL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSw0QkFBNEI7aUJBQ3BDOzthQUNGOzs7O1lBbkJDLFNBQVM7WUFDVCxpQkFBaUI7OztxQkEwQmhCLGVBQWUsU0FBQyxzQkFBc0I7d0JBRXRDLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7Ozs7O0lBUnZDLGtEQUF3Qzs7Ozs7O0lBR3hDLGlEQUFpRTs7SUFHakUsNkNBQW1GOztJQUVuRixnREFBK0Q7Ozs7O0lBRW5ELGdEQUE0Qjs7Ozs7SUFBRSx5REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVmlld0NoaWxkLFxuICBRdWVyeUxpc3QsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkTmF2U3RlcExpbmtDb21wb25lbnQgfSBmcm9tICcuLi9uYXYtc3RlcC1saW5rL25hdi1zdGVwLWxpbmsuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmF2W3RkLXN0ZXBzXVt2ZXJ0aWNhbF0nLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1zdGVwcy12ZXJ0aWNhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtc3RlcHMgdGQtc3RlcHMtdmVydGljYWwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdlN0ZXBzVmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zZXBhcmF0b3JzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIHN0ZXBzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZTdGVwTGlua0NvbXBvbmVudCkgX3N0ZXBzOiBRdWVyeUxpc3Q8VGROYXZTdGVwTGlua0NvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZCgnc3RlcExpc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfc3RlcExpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGVwcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9jb25maWd1cmVTdGVwcygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGVwIGxpbmUgc2VwYXJhdG9ycyBhbmQgZGlzcGxheSBudW1iZXJzXG4gICAqL1xuICBwcml2YXRlIF9jb25maWd1cmVTdGVwcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXBhcmF0b3JzLmZvckVhY2goKHNlcGFyYXRvcjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQsIHNlcGFyYXRvcik7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RlcHNBcnJheTogVGROYXZTdGVwTGlua0NvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIHNldCB0aGUgaW5kZXggbnVtYmVyIG9mIHRoZSBzdGVwIHNvIGNhbiBkaXNwbGF5IHRoYXQgbnVtYmVyIGluIGNpcmNsZVxuICAgIHN0ZXBzQXJyYXkuZm9yRWFjaCgoc3RlcDogVGROYXZTdGVwTGlua0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IHN0ZXBzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvcjogYW55ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNlcGFyYXRvciwgJ3RkLXZlcnRpY2FsLWxpbmUtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBzZXBhcmF0b3JDaGlsZDogYW55ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNlcGFyYXRvckNoaWxkLCAndGQtdmVydGljYWwtbGluZScpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChzZXBhcmF0b3IsIHNlcGFyYXRvckNoaWxkKTtcbiAgICAgICAgdGhpcy5fc2VwYXJhdG9ycy5wdXNoKHNlcGFyYXRvcik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LCBzZXBhcmF0b3IsIHN0ZXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHN0ZXAubnVtYmVyID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICB9XG59XG4iXX0=