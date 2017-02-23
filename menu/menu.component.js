var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var TdMenuComponent = (function () {
    function TdMenuComponent() {
    }
    return TdMenuComponent;
}());
TdMenuComponent = __decorate([
    Component({
        selector: 'td-menu',
        template: "<div layout=\"column\"> <ng-content select=\"[td-menu-header]\"></ng-content> <md-divider></md-divider> <div class=\"td-menu-content\"> <ng-content></ng-content> </div> <md-divider></md-divider> <ng-content select=\"[td-menu-footer]\"></ng-content> </div>",
        styles: [":host { display: block; margin-top: -8px; margin-bottom: -8px; } :host /deep/ [td-menu-header] { padding: 8px; text-align: center; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content { height: auto; padding: 8px; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content .mat-list-text { padding-right: 0px; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line] { margin-top: 4px; } .td-menu-content { max-height: calc(50vh); overflow-y: auto; } "],
    })
], TdMenuComponent);
export { TdMenuComponent };
//# sourceMappingURL=menu.component.js.map