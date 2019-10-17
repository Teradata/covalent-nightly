import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId = 0;
var TdNavLinksComponent = /** @class */ (function () {
    function TdNavLinksComponent() {
        this._uniqueId = "td-nav-links-" + ++nextUniqueId;
        this.id = this._uniqueId;
        this.afterClick = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    TdNavLinksComponent.prototype.linkClicked = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.afterClick.emit(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    TdNavLinksComponent.prototype.getHref = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        return link.linkTo && ((/** @type {?} */ (link.linkTo))).href;
    };
    /**
     * @param {?} link
     * @return {?}
     */
    TdNavLinksComponent.prototype.getRouterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        return link.linkTo && ((/** @type {?} */ (link.linkTo))).routerLink;
    };
    TdNavLinksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-nav-links',
                    template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-linkGroup let-indexGroup=\"index\">\n    <td-expansion-panel\n      *ngIf=\"linkGroup.name && linkGroup.links.length\"\n      class=\"td-nav-group\"\n      [sublabel]=\"linkGroup.name\"\n      [expand]=\"true\"\n    >\n      <mat-divider></mat-divider>\n      <ng-template [ngTemplateOutlet]=\"links\"></ng-template>\n    </td-expansion-panel>\n    <ng-template *ngIf=\"!linkGroup.name && linkGroup.links.length\" [ngTemplateOutlet]=\"links\"></ng-template>\n    <ng-template #links>\n      <ng-template ngFor [ngForOf]=\"linkGroup.links\" let-link let-indexLink=\"index\">\n        <a\n          mat-list-item\n          *ngIf=\"getHref(link) && (link.show === undefined || link.show)\"\n          [href]=\"getHref(link)\"\n          [target]=\"link.openInNewTab ? '_blank' : '_self'\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n\n        <a\n          mat-list-item\n          *ngIf=\"getRouterLink(link) && (link.show === undefined || link.show)\"\n          [routerLink]=\"getRouterLink(link)\"\n          [target]=\"link.openInNewTab ? '_blank' : null\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n      </ng-template>\n    </ng-template>\n  </ng-template>\n</mat-nav-list>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block}:host .mat-nav-list.mat-list-base{padding-top:2px}:host .mat-icon{margin-right:0}"]
                }] }
    ];
    TdNavLinksComponent.propDecorators = {
        id: [{ type: Input }],
        links: [{ type: Input }],
        afterClick: [{ type: Output }]
    };
    return TdNavLinksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CovalentNavLinksModule = /** @class */ (function () {
    function CovalentNavLinksModule() {
    }
    CovalentNavLinksModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TdNavLinksComponent],
                    // directives, components, and pipes owned by this NgModule
                    exports: [TdNavLinksComponent],
                    imports: [
                        CommonModule,
                        CovalentCommonModule,
                        CovalentExpansionPanelModule,
                        MatListModule,
                        MatIconModule,
                        MatDividerModule,
                        RouterModule,
                    ],
                },] }
    ];
    return CovalentNavLinksModule;
}());

export { CovalentNavLinksModule, TdNavLinksComponent };
//# sourceMappingURL=covalent-core-nav-links.js.map
