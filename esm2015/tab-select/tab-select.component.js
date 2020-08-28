/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, QueryList, forwardRef, Output, EventEmitter, ViewChild, ElementRef, NgZone, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple, } from '@covalent/core/common';
import { timer, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { TdTabOptionComponent } from './tab-option.component';
export class TdTabSelectBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdTabSelectBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));
export class TdTabSelectComponent extends _TdTabSelectMixinBase {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _ngZone
     * @param {?} _elementRef
     */
    constructor(_changeDetectorRef, _ngZone, _elementRef) {
        super(_changeDetectorRef);
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._destroy = new Subject();
        this._widthSubject = new Subject();
        this._values = [];
        this._selectedIndex = 0;
        this._stretchTabs = false;
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         */
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get tabOptions() {
        return this._tabOptions ? this._tabOptions.toArray() : undefined;
    }
    /**
     * Makes the tabs stretch to fit the parent container.
     * @param {?} stretchTabs
     * @return {?}
     */
    set stretchTabs(stretchTabs) {
        this._stretchTabs = coerceBooleanProperty(stretchTabs);
    }
    /**
     * @return {?}
     */
    get stretchTabs() {
        return this._stretchTabs;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // set a timer to check every 250ms if the width has changed.
        // if the width has changed, then we realign the ink bar
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._widthSubject
                .asObservable()
                .pipe(takeUntil(this._destroy), distinctUntilChanged(), debounceTime(100))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    this._matTabGroup.realignInkBar();
                    this._changeDetectorRef.markForCheck();
                }));
            }));
            timer(500, 250)
                .pipe(takeUntil(this._destroy))
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (this._elementRef && this._elementRef.nativeElement) {
                    this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
                }
            }));
        }));
        // subscribe to check if value changes and update the selectedIndex internally.
        this.valueChanges.pipe(takeUntil(this._destroy)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this._setValue(value);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // subscribe to listen to any tab changes.
        this._refreshValues();
        this._tabOptions.changes.pipe(takeUntil(this._destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this._refreshValues();
        }));
        // initialize value
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._setValue(this.value);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next(true);
        this._destroy.unsubscribe();
    }
    /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     * @param {?} selectedIndex
     * @return {?}
     */
    selectedIndexChange(selectedIndex) {
        this._selectedIndex = selectedIndex;
        /** @type {?} */
        const value = this._values[selectedIndex];
        this.value = value;
        this.valueChange.emit(value);
        this.onChange(value);
    }
    /**
     * Refresh the values array whenever the number of tabs gets updated
     * @private
     * @return {?}
     */
    _refreshValues() {
        this._values = this.tabOptions.map((/**
         * @param {?} tabOption
         * @return {?}
         */
        (tabOption) => {
            return tabOption.value;
        }));
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     * @private
     * @param {?} value
     * @return {?}
     */
    _setValue(value) {
        /** @type {?} */
        const index = this._values.indexOf(value);
        if (index > -1) {
            this._selectedIndex = index;
        }
        else {
            this.value = this._values.length ? this._values[0] : undefined;
            this._selectedIndex = 0;
        }
        this._changeDetectorRef.markForCheck();
    }
}
TdTabSelectComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdTabSelectComponent)),
                        multi: true,
                    },
                ],
                selector: 'td-tab-select',
                template: "<mat-tab-group\n  [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n  [backgroundColor]=\"backgroundColor\"\n  [color]=\"color\"\n  [disableRipple]=\"disableRipple\"\n  [selectedIndex]=\"selectedIndex\"\n  (selectedIndexChange)=\"selectedIndexChange($event)\"\n>\n  <ng-template let-tabOption ngFor [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template *ngIf=\"tabOption.content\" [cdkPortalOutlet]=\"tabOption.content\"></ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                /* tslint:disable-next-line */
                inputs: ['value', 'disabled', 'disableRipple'],
                styles: [":host::ng-deep>.mat-tab-group>.mat-tab-body-wrapper{display:none}"]
            }] }
];
/** @nocollapse */
TdTabSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ElementRef }
];
TdTabSelectComponent.propDecorators = {
    _matTabGroup: [{ type: ViewChild, args: [MatTabGroup, { static: true },] }],
    _tabOptions: [{ type: ContentChildren, args: [TdTabOptionComponent, { descendants: true },] }],
    stretchTabs: [{ type: Input, args: ['stretchTabs',] }],
    color: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    valueChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._values;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._selectedIndex;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._stretchTabs;
    /** @type {?} */
    TdTabSelectComponent.prototype._matTabGroup;
    /**
     * Gets all tab option children
     * @type {?}
     */
    TdTabSelectComponent.prototype._tabOptions;
    /**
     * Color of the tab group.
     * @type {?}
     */
    TdTabSelectComponent.prototype.color;
    /**
     * Background color of the tab group.
     * @type {?}
     */
    TdTabSelectComponent.prototype.backgroundColor;
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @type {?}
     */
    TdTabSelectComponent.prototype.valueChange;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS90YWItc2VsZWN0LyIsInNvdXJjZXMiOlsidGFiLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFHVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFFWixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUVMLGFBQWEsRUFFYix5QkFBeUIsRUFFekIsa0JBQWtCLEdBQ25CLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RCxNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFtQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7Q0FDN0Q7OztJQURhLDZDQUE0Qzs7OztBQUkxRCxNQUFNLE9BQU8scUJBQXFCLEdBQUcseUJBQXlCLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFpQmxILE1BQU0sT0FBTyxvQkFDWCxTQUFRLHFCQUFx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dkMsMkNBQTRFOzs7OztJQUV6Qix1Q0FBdUI7Ozs7O0lBQUUsMkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBmb3J3YXJkUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRUYWJHcm91cCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHtcbiAgSUNhbkRpc2FibGUsXG4gIG1peGluRGlzYWJsZWQsXG4gIElDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgSUNhbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbn0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgdGltZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRUYWJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRkVGFiU2VsZWN0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRUYWJTZWxlY3RNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQobWl4aW5EaXNhYmxlUmlwcGxlKFRkVGFiU2VsZWN0QmFzZSkpKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkVGFiU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHNlbGVjdG9yOiAndGQtdGFiLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaW5wdXRzOiBbJ3ZhbHVlJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRUYWJTZWxlY3RDb21wb25lbnRcbiAgZXh0ZW5kcyBfVGRUYWJTZWxlY3RNaXhpbkJhc2VcbiAgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBfdmFsdWVzOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zdHJldGNoVGFiczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoTWF0VGFiR3JvdXAsIHsgc3RhdGljOiB0cnVlIH0pIF9tYXRUYWJHcm91cDogTWF0VGFiR3JvdXA7XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFsbCB0YWIgb3B0aW9uIGNoaWxkcmVuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKFRkVGFiT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHJlYWRvbmx5IF90YWJPcHRpb25zOiBRdWVyeUxpc3Q8VGRUYWJPcHRpb25Db21wb25lbnQ+O1xuXG4gIGdldCB0YWJPcHRpb25zKCk6IFRkVGFiT3B0aW9uQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl90YWJPcHRpb25zID8gdGhpcy5fdGFiT3B0aW9ucy50b0FycmF5KCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgdGhlIHRhYnMgc3RyZXRjaCB0byBmaXQgdGhlIHBhcmVudCBjb250YWluZXIuXG4gICAqL1xuICBASW5wdXQoJ3N0cmV0Y2hUYWJzJylcbiAgc2V0IHN0cmV0Y2hUYWJzKHN0cmV0Y2hUYWJzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyZXRjaFRhYnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc3RyZXRjaFRhYnMpO1xuICB9XG4gIGdldCBzdHJldGNoVGFicygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZXRjaFRhYnM7XG4gIH1cblxuICAvKipcbiAgICogQ29sb3Igb2YgdGhlIHRhYiBncm91cC5cbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG5cbiAgLyoqXG4gICAqIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYiBncm91cC5cbiAgICovXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBFdmVudCB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSByYXcgdmFsdWUgb2YgdGhlIHNlbGVjdCBjaGFuZ2VzLiBUaGlzIGlzIGhlcmUgcHJpbWFyaWx5XG4gICAqIHRvIGZhY2lsaXRhdGUgdGhlIHR3by13YXkgYmluZGluZyBmb3IgdGhlIGB2YWx1ZWAgaW5wdXQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gc2V0IGEgdGltZXIgdG8gY2hlY2sgZXZlcnkgMjUwbXMgaWYgdGhlIHdpZHRoIGhhcyBjaGFuZ2VkLlxuICAgIC8vIGlmIHRoZSB3aWR0aCBoYXMgY2hhbmdlZCwgdGhlbiB3ZSByZWFsaWduIHRoZSBpbmsgYmFyXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdFxuICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCBkZWJvdW5jZVRpbWUoMTAwKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9tYXRUYWJHcm91cC5yZWFsaWduSW5rQmFyKCk7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB0aW1lcig1MDAsIDI1MClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHN1YnNjcmliZSB0byBjaGVjayBpZiB2YWx1ZSBjaGFuZ2VzIGFuZCB1cGRhdGUgdGhlIHNlbGVjdGVkSW5kZXggaW50ZXJuYWxseS5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgLy8gc3Vic2NyaWJlIHRvIGxpc3RlbiB0byBhbnkgdGFiIGNoYW5nZXMuXG4gICAgdGhpcy5fcmVmcmVzaFZhbHVlcygpO1xuICAgIHRoaXMuX3RhYk9wdGlvbnMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3JlZnJlc2hWYWx1ZXMoKTtcbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIHZhbHVlXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCh0cnVlKTtcbiAgICB0aGlzLl9kZXN0cm95LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdXNlciBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYlxuICAgKiBUaGlzIHVwZGF0ZXMgdGhlIG5ldyBzZWxlY3RlZEluZGV4IGFuZCBpbmZlcnMgd2hhdCB2YWx1ZSBzaG91bGQgYmUgbWFwcGVkIHRvLlxuICAgKi9cbiAgc2VsZWN0ZWRJbmRleENoYW5nZShzZWxlY3RlZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICBjb25zdCB2YWx1ZTogYW55ID0gdGhpcy5fdmFsdWVzW3NlbGVjdGVkSW5kZXhdO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIHZhbHVlcyBhcnJheSB3aGVuZXZlciB0aGUgbnVtYmVyIG9mIHRhYnMgZ2V0cyB1cGRhdGVkXG4gICAqL1xuICBwcml2YXRlIF9yZWZyZXNoVmFsdWVzKCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHRoaXMudGFiT3B0aW9ucy5tYXAoKHRhYk9wdGlvbjogVGRUYWJPcHRpb25Db21wb25lbnQpID0+IHtcbiAgICAgIHJldHVybiB0YWJPcHRpb24udmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIHNldCB2YWx1ZSBkZXBlbmRpbmcgaWYgaXRzIHBhcnQgb2Ygb3VyIG9wdGlvbnNcbiAgICogZWxzZSBzZXQgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCB0YWIuXG4gICAqL1xuICBwcml2YXRlIF9zZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuX3ZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWVzLmxlbmd0aCA/IHRoaXMuX3ZhbHVlc1swXSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19