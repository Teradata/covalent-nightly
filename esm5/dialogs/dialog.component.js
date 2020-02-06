/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, ContentChildren, QueryList } from '@angular/core';
var TdDialogTitleDirective = /** @class */ (function () {
    function TdDialogTitleDirective() {
    }
    TdDialogTitleDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-title' },] }
    ];
    return TdDialogTitleDirective;
}());
export { TdDialogTitleDirective };
var TdDialogContentDirective = /** @class */ (function () {
    function TdDialogContentDirective() {
    }
    TdDialogContentDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-content' },] }
    ];
    return TdDialogContentDirective;
}());
export { TdDialogContentDirective };
var TdDialogActionsDirective = /** @class */ (function () {
    function TdDialogActionsDirective() {
    }
    TdDialogActionsDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-actions' },] }
    ];
    return TdDialogActionsDirective;
}());
export { TdDialogActionsDirective };
var TdDialogComponent = /** @class */ (function () {
    function TdDialogComponent() {
    }
    /**
     * @return {?}
     */
    TdDialogComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate td-dialog-title component at in td-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate td-dialog-content component at in td-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
        }
    };
    TdDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-dialog',
                    template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>\n",
                    styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
                }] }
    ];
    TdDialogComponent.propDecorators = {
        dialogTitle: [{ type: ContentChildren, args: [TdDialogTitleDirective, { descendants: true },] }],
        dialogContent: [{ type: ContentChildren, args: [TdDialogContentDirective, { descendants: true },] }],
        dialogActions: [{ type: ContentChildren, args: [TdDialogActionsDirective, { descendants: true },] }]
    };
    return TdDialogComponent;
}());
export { TdDialogComponent };
if (false) {
    /** @type {?} */
    TdDialogComponent.prototype.dialogTitle;
    /** @type {?} */
    TdDialogComponent.prototype.dialogContent;
    /** @type {?} */
    TdDialogComponent.prototype.dialogActions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3MvIiwic291cmNlcyI6WyJkaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUVuRztJQUFBO0lBQ3FDLENBQUM7O2dCQURyQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7O0lBQ0wsNkJBQUM7Q0FBQSxBQUR0QyxJQUNzQztTQUF6QixzQkFBc0I7QUFFbkM7SUFBQTtJQUN1QyxDQUFDOztnQkFEdkMsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOztJQUNMLCtCQUFDO0NBQUEsQUFEeEMsSUFDd0M7U0FBM0Isd0JBQXdCO0FBRXJDO0lBQUE7SUFDdUMsQ0FBQzs7Z0JBRHZDLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTs7SUFDTCwrQkFBQztDQUFBLEFBRHhDLElBQ3dDO1NBQTNCLHdCQUF3QjtBQUVyQztJQUFBO0lBcUJBLENBQUM7Ozs7SUFYQyw4Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHVnQkFBc0M7O2lCQUV2Qzs7OzhCQUVFLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0NBQzdELGVBQWUsU0FBQyx3QkFBd0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0NBQy9ELGVBQWUsU0FBQyx3QkFBd0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7O0lBYWxFLHdCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksaUJBQWlCOzs7SUFDNUIsd0NBQStHOztJQUMvRywwQ0FBcUg7O0lBQ3JILDBDQUFxSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICd0ZC1kaWFsb2ctdGl0bGUnIH0pXG5leHBvcnQgY2xhc3MgVGREaWFsb2dUaXRsZURpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICd0ZC1kaWFsb2ctY29udGVudCcgfSlcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ0NvbnRlbnREaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAndGQtZGlhbG9nLWFjdGlvbnMnIH0pXG5leHBvcnQgY2xhc3MgVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihUZERpYWxvZ1RpdGxlRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGRpYWxvZ1RpdGxlOiBRdWVyeUxpc3Q8VGREaWFsb2dUaXRsZURpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREaWFsb2dDb250ZW50RGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGRpYWxvZ0NvbnRlbnQ6IFF1ZXJ5TGlzdDxUZERpYWxvZ0NvbnRlbnREaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKFRkRGlhbG9nQWN0aW9uc0RpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBkaWFsb2dBY3Rpb25zOiBRdWVyeUxpc3Q8VGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nVGl0bGUubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgdGQtZGlhbG9nLXRpdGxlIGNvbXBvbmVudCBhdCBpbiB0ZC1kaWFsb2cuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpYWxvZ0NvbnRlbnQubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgdGQtZGlhbG9nLWNvbnRlbnQgY29tcG9uZW50IGF0IGluIHRkLWRpYWxvZy4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlhbG9nQWN0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSB0ZC1kaWFsb2ctYWN0aW9ucyBjb21wb25lbnQgYXQgaW4gdGQtZGlhbG9nLicpO1xuICAgIH1cbiAgfVxufVxuIl19