/**
 * @fileoverview added by tsickle
 * Generated from: expansion-panel-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            const openedPanels = this.expansionPanels.filter((/**
             * @param {?} expansionPanel
             * @return {?}
             */
            (expansionPanel) => expansionPanel.expand));
            /** @type {?} */
            const numOpenedPanels = openedPanels.length;
            if (numOpenedPanels > 1) {
                this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
            }
        }
        this._attachListeners(this.expansionPanels);
        this.expansionPanels.changes
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} expansionPanels
         * @return {?}
         */
        (expansionPanels) => {
            this._stopWatchingPanels.next(true);
            this._stopWatchingPanels.unsubscribe();
            this._stopWatchingPanels = new Subject();
            this._attachListeners(expansionPanels);
        }));
    }
    /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    openAll() {
        if (this._multi) {
            this.expansionPanels.forEach((/**
             * @param {?} expansionPanel
             * @return {?}
             */
            (expansionPanel) => {
                expansionPanel.open();
            }));
        }
    }
    /**
     * Closes all expansion panels
     * @return {?}
     */
    closeAll() {
        this.expansionPanels.forEach((/**
         * @param {?} expansionPanel
         * @return {?}
         */
        (expansionPanel) => {
            expansionPanel.close();
        }));
    }
    /**
     * @private
     * @param {?} expansionPanels
     * @return {?}
     */
    _attachListeners(expansionPanels) {
        this._lastOpenedPanels = [];
        expansionPanels.forEach((/**
         * @param {?} expansionPanel
         * @return {?}
         */
        (expansionPanel) => {
            expansionPanel.expanded.pipe(takeUntil(this._stopWatchingPanels)).subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const indexOfPanel = this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
                this._lastOpenedPanels.push(expansionPanel);
                if (!this._multi) {
                    this._closeAllExcept(expansionPanel);
                }
            }));
            expansionPanel.collapsed.pipe(takeUntil(this._stopWatchingPanels)).subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const indexOfPanel = this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
            }));
        }));
    }
    /**
     * @private
     * @param {?} expansionPanel
     * @return {?}
     */
    _closeAllExcept(expansionPanel) {
        this.expansionPanels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        (panel) => {
            if (panel !== expansionPanel) {
                panel.close();
            }
        }));
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
    expansionPanels: [{ type: ContentChildren, args: [TdExpansionPanelComponent, { descendants: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._multi;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._lastOpenedPanels;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._stopWatchingPanels;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype.expansionPanels;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBRWYsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTy9CLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBMEJ6QyxZQUFvQixTQUFvQixFQUFVLFdBQXVCO1FBQXJELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXpCakUsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixzQkFBaUIsR0FBZ0MsRUFBRSxDQUFDO1FBRXBELGVBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN0RCx3QkFBbUIsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQXFCckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7Ozs7SUFkRCxJQUNJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJ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LHFEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWV4cGFuc2lvbi1wYW5lbC1ncm91cCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9sYXN0T3BlbmVkUGFuZWxzOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50W10gPSBbXTtcblxuICBwcml2YXRlIF9kZXN0cm95ZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIF9zdG9wV2F0Y2hpbmdQYW5lbHM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBtdWx0aT86IGJvb2xlYW5cbiAgICogU2V0cyB3aGV0aGVyIG11bHRpcGxlIHBhbmVscyBjYW4gYmUgb3BlbmVkIGF0IGEgZ2l2ZW4gdGltZS5cbiAgICogU2V0IHRvIGZhbHNlIGZvciBhY2NvcmRpb24gbW9kZS5cbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ211bHRpJylcbiAgc2V0IG11bHRpKG11bHRpOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGkpO1xuICAgIGlmICh0aGlzLl9tdWx0aSA9PT0gZmFsc2UgJiYgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9jbG9zZUFsbEV4Y2VwdCh0aGlzLl9sYXN0T3BlbmVkUGFuZWxzW3RoaXMuX2xhc3RPcGVuZWRQYW5lbHMubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBleHBhbnNpb25QYW5lbHM6IFF1ZXJ5TGlzdDxcbiAgICBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XG4gID47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuc2lvbi1wYW5lbC1ncm91cCcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fZGVzdHJveWVkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbXVsdGkpIHtcbiAgICAgIGNvbnN0IG9wZW5lZFBhbmVsczogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudFtdID0gdGhpcy5leHBhbnNpb25QYW5lbHMuZmlsdGVyKFxuICAgICAgICAoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IGV4cGFuc2lvblBhbmVsLmV4cGFuZCxcbiAgICAgICk7XG4gICAgICBjb25zdCBudW1PcGVuZWRQYW5lbHM6IG51bWJlciA9IG9wZW5lZFBhbmVscy5sZW5ndGg7XG4gICAgICBpZiAobnVtT3BlbmVkUGFuZWxzID4gMSkge1xuICAgICAgICB0aGlzLl9jbG9zZUFsbEV4Y2VwdChvcGVuZWRQYW5lbHNbbnVtT3BlbmVkUGFuZWxzIC0gMV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaExpc3RlbmVycyh0aGlzLmV4cGFuc2lvblBhbmVscyk7XG5cbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5jaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoTGlzdGVuZXJzKGV4cGFuc2lvblBhbmVscyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbGwgZXhwYW5zaW9uIHBhbmVscywgb25seSBpZiBtdWx0aSBzZXQgc2V0IHRvIHRydWUuXG4gICAqL1xuICBwdWJsaWMgb3BlbkFsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbXVsdGkpIHtcbiAgICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGV4cGFuc2lvblBhbmVsLm9wZW4oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYWxsIGV4cGFuc2lvbiBwYW5lbHNcbiAgICovXG4gIHB1YmxpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgZXhwYW5zaW9uUGFuZWwuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaExpc3RlbmVycyhleHBhbnNpb25QYW5lbHM6IFF1ZXJ5TGlzdDxUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50Pik6IHZvaWQge1xuICAgIHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMgPSBbXTtcbiAgICBleHBhbnNpb25QYW5lbHMuZm9yRWFjaCgoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgIGV4cGFuc2lvblBhbmVsLmV4cGFuZGVkLnBpcGUodGFrZVVudGlsKHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZQYW5lbDogbnVtYmVyID0gdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5pbmRleE9mKGV4cGFuc2lvblBhbmVsKTtcbiAgICAgICAgaWYgKGluZGV4T2ZQYW5lbCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLnNwbGljZShpbmRleE9mUGFuZWwsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMucHVzaChleHBhbnNpb25QYW5lbCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9tdWx0aSkge1xuICAgICAgICAgIHRoaXMuX2Nsb3NlQWxsRXhjZXB0KGV4cGFuc2lvblBhbmVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGV4cGFuc2lvblBhbmVsLmNvbGxhcHNlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleE9mUGFuZWw6IG51bWJlciA9IHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMuaW5kZXhPZihleHBhbnNpb25QYW5lbCk7XG4gICAgICAgIGlmIChpbmRleE9mUGFuZWwgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5zcGxpY2UoaW5kZXhPZlBhbmVsLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZUFsbEV4Y2VwdChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKHBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICBpZiAocGFuZWwgIT09IGV4cGFuc2lvblBhbmVsKSB7XG4gICAgICAgIHBhbmVsLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==