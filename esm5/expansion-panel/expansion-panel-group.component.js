/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer2, ElementRef, QueryList, ContentChildren, Input, } from '@angular/core';
import { TdExpansionPanelComponent } from './expansion-panel.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var TdExpansionPanelGroupComponent = /** @class */ (function () {
    function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._multi = false;
        this._lastOpenedPanels = [];
        this._destroyed = new Subject();
        this._stopWatchingPanels = new Subject();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    Object.defineProperty(TdExpansionPanelGroupComponent.prototype, "multi", {
        /**
         * multi?: boolean
         * Sets whether multiple panels can be opened at a given time.
         * Set to false for accordion mode.
         * Defaults to false.
         */
        set: /**
         * multi?: boolean
         * Sets whether multiple panels can be opened at a given time.
         * Set to false for accordion mode.
         * Defaults to false.
         * @param {?} multi
         * @return {?}
         */
        function (multi) {
            this._multi = coerceBooleanProperty(multi);
            if (this._multi === false && this._lastOpenedPanels.length > 0) {
                this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next(true);
        this._destroyed.unsubscribe();
        this._stopWatchingPanels.next(true);
        this._stopWatchingPanels.unsubscribe();
    };
    /**
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._multi) {
            /** @type {?} */
            var openedPanels = this.expansionPanels.filter((/**
             * @param {?} expansionPanel
             * @return {?}
             */
            function (expansionPanel) { return expansionPanel.expand; }));
            /** @type {?} */
            var numOpenedPanels = openedPanels.length;
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
        function (expansionPanels) {
            _this._stopWatchingPanels.next(true);
            _this._stopWatchingPanels.unsubscribe();
            _this._stopWatchingPanels = new Subject();
            _this._attachListeners(expansionPanels);
        }));
    };
    /**
     * Opens all expansion panels, only if multi set set to true.
     */
    /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.openAll = /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    function () {
        if (this._multi) {
            this.expansionPanels.forEach((/**
             * @param {?} expansionPanel
             * @return {?}
             */
            function (expansionPanel) {
                expansionPanel.open();
            }));
        }
    };
    /**
     * Closes all expansion panels
     */
    /**
     * Closes all expansion panels
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.closeAll = /**
     * Closes all expansion panels
     * @return {?}
     */
    function () {
        this.expansionPanels.forEach((/**
         * @param {?} expansionPanel
         * @return {?}
         */
        function (expansionPanel) {
            expansionPanel.close();
        }));
    };
    /**
     * @private
     * @param {?} expansionPanels
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype._attachListeners = /**
     * @private
     * @param {?} expansionPanels
     * @return {?}
     */
    function (expansionPanels) {
        var _this = this;
        this._lastOpenedPanels = [];
        expansionPanels.forEach((/**
         * @param {?} expansionPanel
         * @return {?}
         */
        function (expansionPanel) {
            expansionPanel.expanded.pipe(takeUntil(_this._stopWatchingPanels)).subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    _this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
                _this._lastOpenedPanels.push(expansionPanel);
                if (!_this._multi) {
                    _this._closeAllExcept(expansionPanel);
                }
            }));
            expansionPanel.collapsed.pipe(takeUntil(_this._stopWatchingPanels)).subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    _this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
            }));
        }));
    };
    /**
     * @private
     * @param {?} expansionPanel
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype._closeAllExcept = /**
     * @private
     * @param {?} expansionPanel
     * @return {?}
     */
    function (expansionPanel) {
        this.expansionPanels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) {
            if (panel !== expansionPanel) {
                panel.close();
            }
        }));
    };
    TdExpansionPanelGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-expansion-panel-group',
                    template: "<ng-content></ng-content>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdExpansionPanelGroupComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdExpansionPanelGroupComponent.propDecorators = {
        multi: [{ type: Input, args: ['multi',] }],
        expansionPanels: [{ type: ContentChildren, args: [TdExpansionPanelComponent, { descendants: true },] }]
    };
    return TdExpansionPanelGroupComponent;
}());
export { TdExpansionPanelGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsZUFBZSxFQUVmLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQStCRSx3Q0FBb0IsU0FBb0IsRUFBVSxXQUF1QjtRQUFyRCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUF6QmpFLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsc0JBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUVwRCxlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDdEQsd0JBQW1CLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFxQnJFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQWRELHNCQUNJLGlEQUFLO1FBUFQ7Ozs7O1dBS0c7Ozs7Ozs7OztRQUNILFVBQ1UsS0FBYztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRjtRQUNILENBQUM7OztPQUFBOzs7O0lBVUQsb0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRU0sMkRBQWtCOzs7SUFBekI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7O2dCQUNWLFlBQVksR0FBZ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNOzs7O1lBQzNFLFVBQUMsY0FBeUMsSUFBSyxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLEVBQ3JFOztnQkFDSyxlQUFlLEdBQVcsWUFBWSxDQUFDLE1BQU07WUFDbkQsSUFBSSxlQUFlLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6RDtTQUNGO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87YUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDaEMsU0FBUzs7OztRQUFDLFVBQUMsZUFBcUQ7WUFDL0QsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7WUFDbEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLGdEQUFPOzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLGNBQXlDO2dCQUNyRSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSxpREFBUTs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxjQUF5QztZQUNyRSxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyx5REFBZ0I7Ozs7O0lBQXhCLFVBQXlCLGVBQXFEO1FBQTlFLGlCQXNCQztRQXJCQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLGVBQWUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxjQUF5QztZQUNoRSxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTOzs7WUFBQzs7b0JBQ3BFLFlBQVksR0FBVyxLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDM0UsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNoRDtnQkFDRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUU1QyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDdEM7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUVILGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztZQUFDOztvQkFDckUsWUFBWSxHQUFXLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUMzRSxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdkIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2hEO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLHdEQUFlOzs7OztJQUF2QixVQUF3QixjQUF5QztRQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQWdDO1lBQzVELElBQUksS0FBSyxLQUFLLGNBQWMsRUFBRTtnQkFDNUIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQW5IRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFFcEMsdUNBQXFEOztpQkFDdEQ7Ozs7Z0JBakJDLFNBQVM7Z0JBQ1QsVUFBVTs7O3dCQStCVCxLQUFLLFNBQUMsT0FBTztrQ0FRYixlQUFlLFNBQUMseUJBQXlCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztJQXlGbkUscUNBQUM7Q0FBQSxBQXBIRCxJQW9IQztTQS9HWSw4QkFBOEI7Ozs7OztJQUN6QyxnREFBZ0M7Ozs7O0lBRWhDLDJEQUE0RDs7Ozs7SUFFNUQsb0RBQThEOzs7OztJQUM5RCw2REFBdUU7O0lBZ0J2RSx5REFFRTs7Ozs7SUFFVSxtREFBNEI7Ozs7O0lBQUUscURBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZXhwYW5zaW9uLXBhbmVsLWdyb3VwJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9tdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2xhc3RPcGVuZWRQYW5lbHM6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3llZDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX3N0b3BXYXRjaGluZ1BhbmVsczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIG11bHRpPzogYm9vbGVhblxuICAgKiBTZXRzIHdoZXRoZXIgbXVsdGlwbGUgcGFuZWxzIGNhbiBiZSBvcGVuZWQgYXQgYSBnaXZlbiB0aW1lLlxuICAgKiBTZXQgdG8gZmFsc2UgZm9yIGFjY29yZGlvbiBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGknKVxuICBzZXQgbXVsdGkobXVsdGk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aSk7XG4gICAgaWYgKHRoaXMuX211bHRpID09PSBmYWxzZSAmJiB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2Nsb3NlQWxsRXhjZXB0KHRoaXMuX2xhc3RPcGVuZWRQYW5lbHNbdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFxuICAgIFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRcbiAgPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZXhwYW5zaW9uLXBhbmVsLWdyb3VwJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCh0cnVlKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMubmV4dCh0cnVlKTtcbiAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9tdWx0aSkge1xuICAgICAgY29uc3Qgb3BlbmVkUGFuZWxzOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50W10gPSB0aGlzLmV4cGFuc2lvblBhbmVscy5maWx0ZXIoXG4gICAgICAgIChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4gZXhwYW5zaW9uUGFuZWwuZXhwYW5kLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG51bU9wZW5lZFBhbmVsczogbnVtYmVyID0gb3BlbmVkUGFuZWxzLmxlbmd0aDtcbiAgICAgIGlmIChudW1PcGVuZWRQYW5lbHMgPiAxKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlQWxsRXhjZXB0KG9wZW5lZFBhbmVsc1tudW1PcGVuZWRQYW5lbHMgLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYXR0YWNoTGlzdGVuZXJzKHRoaXMuZXhwYW5zaW9uUGFuZWxzKTtcblxuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmNoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoZXhwYW5zaW9uUGFuZWxzOiBRdWVyeUxpc3Q8VGRFeHBhbnNpb25QYW5lbENvbXBvbmVudD4pID0+IHtcbiAgICAgICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgICB0aGlzLl9hdHRhY2hMaXN0ZW5lcnMoZXhwYW5zaW9uUGFuZWxzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFsbCBleHBhbnNpb24gcGFuZWxzLCBvbmx5IGlmIG11bHRpIHNldCBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHB1YmxpYyBvcGVuQWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9tdWx0aSkge1xuICAgICAgdGhpcy5leHBhbnNpb25QYW5lbHMuZm9yRWFjaCgoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgICAgZXhwYW5zaW9uUGFuZWwub3BlbigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbGwgZXhwYW5zaW9uIHBhbmVsc1xuICAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICBleHBhbnNpb25QYW5lbC5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0YWNoTGlzdGVuZXJzKGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+KTogdm9pZCB7XG4gICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscyA9IFtdO1xuICAgIGV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgZXhwYW5zaW9uUGFuZWwuZXhwYW5kZWQucGlwZSh0YWtlVW50aWwodGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhPZlBhbmVsOiBudW1iZXIgPSB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmluZGV4T2YoZXhwYW5zaW9uUGFuZWwpO1xuICAgICAgICBpZiAoaW5kZXhPZlBhbmVsICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMuc3BsaWNlKGluZGV4T2ZQYW5lbCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5wdXNoKGV4cGFuc2lvblBhbmVsKTtcblxuICAgICAgICBpZiAoIXRoaXMuX211bHRpKSB7XG4gICAgICAgICAgdGhpcy5fY2xvc2VBbGxFeGNlcHQoZXhwYW5zaW9uUGFuZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZXhwYW5zaW9uUGFuZWwuY29sbGFwc2VkLnBpcGUodGFrZVVudGlsKHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZQYW5lbDogbnVtYmVyID0gdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5pbmRleE9mKGV4cGFuc2lvblBhbmVsKTtcbiAgICAgICAgaWYgKGluZGV4T2ZQYW5lbCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLnNwbGljZShpbmRleE9mUGFuZWwsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlQWxsRXhjZXB0KGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25QYW5lbHMuZm9yRWFjaCgocGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgIGlmIChwYW5lbCAhPT0gZXhwYW5zaW9uUGFuZWwpIHtcbiAgICAgICAgcGFuZWwuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19