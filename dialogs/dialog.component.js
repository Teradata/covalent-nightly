import * as tslib_1 from "tslib";
import { Component, Directive, ContentChildren, QueryList } from '@angular/core';
var TdDialogTitleDirective = (function () {
    function TdDialogTitleDirective() {
    }
    TdDialogTitleDirective = tslib_1.__decorate([
        Directive({ selector: 'td-dialog-title' })
    ], TdDialogTitleDirective);
    return TdDialogTitleDirective;
}());
export { TdDialogTitleDirective };
var TdDialogContentDirective = (function () {
    function TdDialogContentDirective() {
    }
    TdDialogContentDirective = tslib_1.__decorate([
        Directive({ selector: 'td-dialog-content' })
    ], TdDialogContentDirective);
    return TdDialogContentDirective;
}());
export { TdDialogContentDirective };
var TdDialogActionsDirective = (function () {
    function TdDialogActionsDirective() {
    }
    TdDialogActionsDirective = tslib_1.__decorate([
        Directive({ selector: 'td-dialog-actions' })
    ], TdDialogActionsDirective);
    return TdDialogActionsDirective;
}());
export { TdDialogActionsDirective };
var TdDialogComponent = (function () {
    function TdDialogComponent() {
    }
    TdDialogComponent.prototype.ngAfterContentInit = function () {
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
    tslib_1.__decorate([
        ContentChildren(TdDialogTitleDirective),
        tslib_1.__metadata("design:type", QueryList)
    ], TdDialogComponent.prototype, "dialogTitle", void 0);
    tslib_1.__decorate([
        ContentChildren(TdDialogContentDirective),
        tslib_1.__metadata("design:type", QueryList)
    ], TdDialogComponent.prototype, "dialogContent", void 0);
    tslib_1.__decorate([
        ContentChildren(TdDialogActionsDirective),
        tslib_1.__metadata("design:type", QueryList)
    ], TdDialogComponent.prototype, "dialogActions", void 0);
    TdDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'td-dialog',
            template: "<div class=\"td-dialog-wrapper\"> <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\"> <ng-content select=\"td-dialog-title\"></ng-content> </h3> <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\"> <ng-content select=\"td-dialog-content\"></ng-content> </div> <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\"> <span class=\"td-dialog-spacer\"></span> <ng-content select=\"td-dialog-actions\"></ng-content> </div> </div>",
            styles: [".td-dialog-title { margin-top: 0; margin-bottom: 20px; } .td-dialog-content { margin-bottom: 16px; } .td-dialog-actions { position: relative; top: 16px; left: 16px; } ::ng-deep [dir='rtl'] .td-dialog-actions { right: 16px; left: auto; } :host { display: block; } :host .td-dialog-actions { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } :host .td-dialog-actions .td-dialog-spacer { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-dialog-actions ::ng-deep button { text-transform: uppercase; margin-left: 8px; padding-left: 8px; padding-right: 8px; min-width: 64px; } [dir='rtl'] :host .td-dialog-actions ::ng-deep button { margin-right: 8px; margin-left: inherit; } /*# sourceMappingURL=dialog.component.css.map */ "],
        })
    ], TdDialogComponent);
    return TdDialogComponent;
}());
export { TdDialogComponent };
//# sourceMappingURL=dialog.component.js.map