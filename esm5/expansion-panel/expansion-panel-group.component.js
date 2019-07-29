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
        expansionPanels: [{ type: ContentChildren, args: [TdExpansionPanelComponent,] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsZUFBZSxFQUVmLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQTZCRSx3Q0FBb0IsU0FBb0IsRUFBVSxXQUF1QjtRQUFyRCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUF2QmpFLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsc0JBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUVwRCxlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDdEQsd0JBQW1CLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFtQnJFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQVpELHNCQUNJLGlEQUFLO1FBUFQ7Ozs7O1dBS0c7Ozs7Ozs7OztRQUNILFVBQ1UsS0FBYztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FB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QUM5RCw2REFBdUU7O0lBZ0J2RSx5REFBa0c7Ozs7O0lBRXRGLG1EQUE0Qjs7Ozs7SUFBRSxxREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tcGFuZWwtZ3JvdXAnLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX211bHRpOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfbGFzdE9wZW5lZFBhbmVsczogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudFtdID0gW107XG5cbiAgcHJpdmF0ZSBfZGVzdHJveWVkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfc3RvcFdhdGNoaW5nUGFuZWxzOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogbXVsdGk/OiBib29sZWFuXG4gICAqIFNldHMgd2hldGhlciBtdWx0aXBsZSBwYW5lbHMgY2FuIGJlIG9wZW5lZCBhdCBhIGdpdmVuIHRpbWUuXG4gICAqIFNldCB0byBmYWxzZSBmb3IgYWNjb3JkaW9uIG1vZGUuXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCdtdWx0aScpXG4gIHNldCBtdWx0aShtdWx0aTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpKTtcbiAgICBpZiAodGhpcy5fbXVsdGkgPT09IGZhbHNlICYmIHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fY2xvc2VBbGxFeGNlcHQodGhpcy5fbGFzdE9wZW5lZFBhbmVsc1t0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpIGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1leHBhbnNpb24tcGFuZWwtZ3JvdXAnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KHRydWUpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy5uZXh0KHRydWUpO1xuICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX211bHRpKSB7XG4gICAgICBjb25zdCBvcGVuZWRQYW5lbHM6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRbXSA9IHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZpbHRlcihcbiAgICAgICAgKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiBleHBhbnNpb25QYW5lbC5leHBhbmQsXG4gICAgICApO1xuICAgICAgY29uc3QgbnVtT3BlbmVkUGFuZWxzOiBudW1iZXIgPSBvcGVuZWRQYW5lbHMubGVuZ3RoO1xuICAgICAgaWYgKG51bU9wZW5lZFBhbmVscyA+IDEpIHtcbiAgICAgICAgdGhpcy5fY2xvc2VBbGxFeGNlcHQob3BlbmVkUGFuZWxzW251bU9wZW5lZFBhbmVscyAtIDFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hdHRhY2hMaXN0ZW5lcnModGhpcy5leHBhbnNpb25QYW5lbHMpO1xuXG4gICAgdGhpcy5leHBhbnNpb25QYW5lbHMuY2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChleHBhbnNpb25QYW5lbHM6IFF1ZXJ5TGlzdDxUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaExpc3RlbmVycyhleHBhbnNpb25QYW5lbHMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYWxsIGV4cGFuc2lvbiBwYW5lbHMsIG9ubHkgaWYgbXVsdGkgc2V0IHNldCB0byB0cnVlLlxuICAgKi9cbiAgcHVibGljIG9wZW5BbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX211bHRpKSB7XG4gICAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgICBleHBhbnNpb25QYW5lbC5vcGVuKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBleHBhbnNpb24gcGFuZWxzXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25QYW5lbHMuZm9yRWFjaCgoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgIGV4cGFuc2lvblBhbmVsLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hMaXN0ZW5lcnMoZXhwYW5zaW9uUGFuZWxzOiBRdWVyeUxpc3Q8VGRFeHBhbnNpb25QYW5lbENvbXBvbmVudD4pOiB2b2lkIHtcbiAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzID0gW107XG4gICAgZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICBleHBhbnNpb25QYW5lbC5leHBhbmRlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleE9mUGFuZWw6IG51bWJlciA9IHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMuaW5kZXhPZihleHBhbnNpb25QYW5lbCk7XG4gICAgICAgIGlmIChpbmRleE9mUGFuZWwgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5zcGxpY2UoaW5kZXhPZlBhbmVsLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLnB1c2goZXhwYW5zaW9uUGFuZWwpO1xuXG4gICAgICAgIGlmICghdGhpcy5fbXVsdGkpIHtcbiAgICAgICAgICB0aGlzLl9jbG9zZUFsbEV4Y2VwdChleHBhbnNpb25QYW5lbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBleHBhbnNpb25QYW5lbC5jb2xsYXBzZWQucGlwZSh0YWtlVW50aWwodGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhPZlBhbmVsOiBudW1iZXIgPSB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmluZGV4T2YoZXhwYW5zaW9uUGFuZWwpO1xuICAgICAgICBpZiAoaW5kZXhPZlBhbmVsICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMuc3BsaWNlKGluZGV4T2ZQYW5lbCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VBbGxFeGNlcHQoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChwYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKHBhbmVsICE9PSBleHBhbnNpb25QYW5lbCkge1xuICAgICAgICBwYW5lbC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=