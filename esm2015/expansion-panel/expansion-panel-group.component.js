/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Renderer2, ElementRef, QueryList, ContentChildren, Input, } from '@angular/core';
import { TdExpansionPanelComponent } from './expansion-panel.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class TdExpansionPanelGroupComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._multi = false;
        this._lastOpenedPanels = [];
        this._destroyed = new Subject();
        this._stopWatchingPanels = new Subject();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    /**
     * multi?: boolean
     * Sets whether multiple panels can be opened at a given time.
     * Set to false for accordion mode.
     * Defaults to false.
     * @param {?} multi
     * @return {?}
     */
    set multi(multi) {
        this._multi = coerceBooleanProperty(multi);
        if (this._multi === false && this._lastOpenedPanels.length > 0) {
            this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next(true);
        this._destroyed.unsubscribe();
        this._stopWatchingPanels.next(true);
        this._stopWatchingPanels.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this._multi) {
            /** @type {?} */
            const openedPanels = this.expansionPanels.filter((expansionPanel) => expansionPanel.expand);
            /** @type {?} */
            const numOpenedPanels = openedPanels.length;
            if (numOpenedPanels > 1) {
                this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
            }
        }
        this._attachListeners(this.expansionPanels);
        this.expansionPanels.changes
            .pipe(takeUntil(this._destroyed))
            .subscribe((expansionPanels) => {
            this._stopWatchingPanels.next(true);
            this._stopWatchingPanels.unsubscribe();
            this._stopWatchingPanels = new Subject();
            this._attachListeners(expansionPanels);
        });
    }
    /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    openAll() {
        if (this._multi) {
            this.expansionPanels.forEach((expansionPanel) => {
                expansionPanel.open();
            });
        }
    }
    /**
     * Closes all expansion panels
     * @return {?}
     */
    closeAll() {
        this.expansionPanels.forEach((expansionPanel) => {
            expansionPanel.close();
        });
    }
    /**
     * @param {?} expansionPanels
     * @return {?}
     */
    _attachListeners(expansionPanels) {
        this._lastOpenedPanels = [];
        expansionPanels.forEach((expansionPanel) => {
            expansionPanel.expanded.pipe(takeUntil(this._stopWatchingPanels)).subscribe(() => {
                /** @type {?} */
                const indexOfPanel = this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
                this._lastOpenedPanels.push(expansionPanel);
                if (!this._multi) {
                    this._closeAllExcept(expansionPanel);
                }
            });
            expansionPanel.collapsed.pipe(takeUntil(this._stopWatchingPanels)).subscribe(() => {
                /** @type {?} */
                const indexOfPanel = this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
            });
        });
    }
    /**
     * @param {?} expansionPanel
     * @return {?}
     */
    _closeAllExcept(expansionPanel) {
        this.expansionPanels.forEach((panel) => {
            if (panel !== expansionPanel) {
                panel.close();
            }
        });
    }
}
TdExpansionPanelGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel-group',
                template: "<ng-content></ng-content>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TdExpansionPanelGroupComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
TdExpansionPanelGroupComponent.propDecorators = {
    multi: [{ type: Input, args: ['multi',] }],
    expansionPanels: [{ type: ContentChildren, args: [TdExpansionPanelComponent,] }]
};
if (false) {
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._multi;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._lastOpenedPanels;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._destroyed;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._stopWatchingPanels;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype.expansionPanels;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._renderer;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsZUFBZSxFQUVmLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU8vQixNQUFNLE9BQU8sOEJBQThCOzs7OztJQXdCekMsWUFBb0IsU0FBb0IsRUFBVSxXQUF1QjtRQUFyRCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUF2QmpFLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsc0JBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUVwRCxlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDdEQsd0JBQW1CLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFtQnJFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Ozs7Ozs7O0lBWkQsSUFDSSxLQUFLLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FB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LENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDdEM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O3NCQUMxRSxZQUFZLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7Z0JBQzNFLElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDaEQ7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxlQUFlLENBQUMsY0FBeUM7UUFDL0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFnQyxFQUFFLEVBQUU7WUFDaEUsSUFBSSxLQUFLLEtBQUssY0FBYyxFQUFFO2dCQUM1QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUVwQyx1Q0FBcUQ7O2FBQ3REOzs7O1lBakJDLFNBQVM7WUFDVCxVQUFVOzs7b0JBK0JULEtBQUssU0FBQyxPQUFPOzhCQVFiLGVBQWUsU0FBQyx5QkFBeUI7Ozs7SUFyQjFDLGdEQUFnQzs7SUFFaEMsMkRBQTREOztJQUU1RCxvREFBOEQ7O0lBQzlELDZEQUF1RTs7SUFnQnZFLHlEQUFrRzs7SUFFdEYsbURBQTRCOztJQUFFLHFEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWV4cGFuc2lvbi1wYW5lbC1ncm91cCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9sYXN0T3BlbmVkUGFuZWxzOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50W10gPSBbXTtcblxuICBwcml2YXRlIF9kZXN0cm95ZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIF9zdG9wV2F0Y2hpbmdQYW5lbHM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBtdWx0aT86IGJvb2xlYW5cbiAgICogU2V0cyB3aGV0aGVyIG11bHRpcGxlIHBhbmVscyBjYW4gYmUgb3BlbmVkIGF0IGEgZ2l2ZW4gdGltZS5cbiAgICogU2V0IHRvIGZhbHNlIGZvciBhY2NvcmRpb24gbW9kZS5cbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ211bHRpJylcbiAgc2V0IG11bHRpKG11bHRpOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGkpO1xuICAgIGlmICh0aGlzLl9tdWx0aSA9PT0gZmFsc2UgJiYgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9jbG9zZUFsbEV4Y2VwdCh0aGlzLl9sYXN0T3BlbmVkUGFuZWxzW3RoaXMuX2xhc3RPcGVuZWRQYW5lbHMubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgZXhwYW5zaW9uUGFuZWxzOiBRdWVyeUxpc3Q8VGRFeHBhbnNpb25QYW5lbENvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuc2lvbi1wYW5lbC1ncm91cCcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fZGVzdHJveWVkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbXVsdGkpIHtcbiAgICAgIGNvbnN0IG9wZW5lZFBhbmVsczogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudFtdID0gdGhpcy5leHBhbnNpb25QYW5lbHMuZmlsdGVyKFxuICAgICAgICAoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IGV4cGFuc2lvblBhbmVsLmV4cGFuZCxcbiAgICAgICk7XG4gICAgICBjb25zdCBudW1PcGVuZWRQYW5lbHM6IG51bWJlciA9IG9wZW5lZFBhbmVscy5sZW5ndGg7XG4gICAgICBpZiAobnVtT3BlbmVkUGFuZWxzID4gMSkge1xuICAgICAgICB0aGlzLl9jbG9zZUFsbEV4Y2VwdChvcGVuZWRQYW5lbHNbbnVtT3BlbmVkUGFuZWxzIC0gMV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaExpc3RlbmVycyh0aGlzLmV4cGFuc2lvblBhbmVscyk7XG5cbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5jaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoTGlzdGVuZXJzKGV4cGFuc2lvblBhbmVscyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbGwgZXhwYW5zaW9uIHBhbmVscywgb25seSBpZiBtdWx0aSBzZXQgc2V0IHRvIHRydWUuXG4gICAqL1xuICBwdWJsaWMgb3BlbkFsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbXVsdGkpIHtcbiAgICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGV4cGFuc2lvblBhbmVsLm9wZW4oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYWxsIGV4cGFuc2lvbiBwYW5lbHNcbiAgICovXG4gIHB1YmxpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgZXhwYW5zaW9uUGFuZWwuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaExpc3RlbmVycyhleHBhbnNpb25QYW5lbHM6IFF1ZXJ5TGlzdDxUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50Pik6IHZvaWQge1xuICAgIHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMgPSBbXTtcbiAgICBleHBhbnNpb25QYW5lbHMuZm9yRWFjaCgoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgIGV4cGFuc2lvblBhbmVsLmV4cGFuZGVkLnBpcGUodGFrZVVudGlsKHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZQYW5lbDogbnVtYmVyID0gdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5pbmRleE9mKGV4cGFuc2lvblBhbmVsKTtcbiAgICAgICAgaWYgKGluZGV4T2ZQYW5lbCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLnNwbGljZShpbmRleE9mUGFuZWwsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMucHVzaChleHBhbnNpb25QYW5lbCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9tdWx0aSkge1xuICAgICAgICAgIHRoaXMuX2Nsb3NlQWxsRXhjZXB0KGV4cGFuc2lvblBhbmVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGV4cGFuc2lvblBhbmVsLmNvbGxhcHNlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleE9mUGFuZWw6IG51bWJlciA9IHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMuaW5kZXhPZihleHBhbnNpb25QYW5lbCk7XG4gICAgICAgIGlmIChpbmRleE9mUGFuZWwgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5zcGxpY2UoaW5kZXhPZlBhbmVsLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZUFsbEV4Y2VwdChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKHBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICBpZiAocGFuZWwgIT09IGV4cGFuc2lvblBhbmVsKSB7XG4gICAgICAgIHBhbmVsLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==