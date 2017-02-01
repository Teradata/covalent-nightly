var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, ContentChildren, QueryList } from '@angular/core';
var TdDialogTitleDirective = (function () {
    function TdDialogTitleDirective() {
    }
    return TdDialogTitleDirective;
}());
TdDialogTitleDirective = __decorate([
    Directive({ selector: 'td-dialog-title' })
], TdDialogTitleDirective);
export { TdDialogTitleDirective };
var TdDialogContentDirective = (function () {
    function TdDialogContentDirective() {
    }
    return TdDialogContentDirective;
}());
TdDialogContentDirective = __decorate([
    Directive({ selector: 'td-dialog-content' })
], TdDialogContentDirective);
export { TdDialogContentDirective };
var TdDialogActionsDirective = (function () {
    function TdDialogActionsDirective() {
    }
    return TdDialogActionsDirective;
}());
TdDialogActionsDirective = __decorate([
    Directive({ selector: 'td-dialog-actions' })
], TdDialogActionsDirective);
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
    return TdDialogComponent;
}());
__decorate([
    ContentChildren(TdDialogTitleDirective),
    __metadata("design:type", QueryList)
], TdDialogComponent.prototype, "dialogTitle", void 0);
__decorate([
    ContentChildren(TdDialogContentDirective),
    __metadata("design:type", QueryList)
], TdDialogComponent.prototype, "dialogContent", void 0);
__decorate([
    ContentChildren(TdDialogActionsDirective),
    __metadata("design:type", QueryList)
], TdDialogComponent.prototype, "dialogActions", void 0);
TdDialogComponent = __decorate([
    Component({
        selector: 'td-dialog',
        template: "<div class=\"td-dialog-wrapper\"> <h3 class=\"td-dialog-title md-title\" *ngIf=\"dialogTitle.length > 0\"> <ng-content select=\"td-dialog-title\"></ng-content> </h3> <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\"> <ng-content select=\"td-dialog-content\"></ng-content> </div> <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\" layout=\"row\"> <span flex></span> <ng-content select=\"td-dialog-actions\"></ng-content> </div> </div>",
        styles: [".td-dialog-title { margin-top: 0; margin-bottom: 20px; } .td-dialog-content { margin-bottom: 16px; } .td-dialog-actions { position: relative; top: 16px; left: 16px; } :host { display: block; } :host .td-dialog-actions /deep/ button { text-transform: uppercase; margin-left: 8px; padding-left: 8px; padding-right: 8px; min-width: 64px; } "],
    })
], TdDialogComponent);
export { TdDialogComponent };
//# sourceMappingURL=dialog.component.js.map