(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/material/list'), require('@angular/material/icon'), require('@angular/material/divider'), require('@covalent/core/common'), require('@covalent/core/expansion-panel')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/nav-links', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/material/list', '@angular/material/icon', '@angular/material/divider', '@covalent/core/common', '@covalent/core/expansion-panel'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['nav-links'] = {}), global.ng.core, global.ng.common, global.ng.router, global.ng.material.list, global.ng.material.icon, global.ng.material.divider, global.covalent.core.common, global.covalent.core['expansion-panel']));
}(this, function (exports, core, common, router, list, icon, divider, common$1, expansionPanel) { 'use strict';

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
            this.afterClick = new core.EventEmitter();
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
        TdNavLinksComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-nav-links',
                        template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-linkGroup let-indexGroup=\"index\">\n    <td-expansion-panel\n      *ngIf=\"linkGroup.name && linkGroup.links.length\"\n      class=\"td-nav-group\"\n      [sublabel]=\"linkGroup.name\"\n      [expand]=\"true\"\n    >\n      <mat-divider></mat-divider>\n      <ng-template [ngTemplateOutlet]=\"links\"></ng-template>\n    </td-expansion-panel>\n    <ng-template *ngIf=\"!linkGroup.name && linkGroup.links.length\" [ngTemplateOutlet]=\"links\"></ng-template>\n    <ng-template #links>\n      <ng-template ngFor [ngForOf]=\"linkGroup.links\" let-link let-indexLink=\"index\">\n        <a\n          mat-list-item\n          *ngIf=\"link.linkTo.href && (link.show === undefined || link.show)\"\n          [href]=\"link.linkTo.href\"\n          [target]=\"link.openInNewTab ? '_blank' : '_self'\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n\n        <a\n          mat-list-item\n          *ngIf=\"link.linkTo.routerLink && (link.show === undefined || link.show)\"\n          [routerLink]=\"link.linkTo.routerLink\"\n          [target]=\"link.openInNewTab ? '_blank' : null\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n      </ng-template>\n    </ng-template>\n  </ng-template>\n</mat-nav-list>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block}:host .mat-nav-list.mat-list-base{padding-top:2px}:host .mat-icon{margin-right:0}"]
                    }] }
        ];
        TdNavLinksComponent.propDecorators = {
            id: [{ type: core.Input }],
            links: [{ type: core.Input }],
            afterClick: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
                        declarations: [TdNavLinksComponent],
                        // directives, components, and pipes owned by this NgModule
                        exports: [TdNavLinksComponent],
                        imports: [
                            common.CommonModule,
                            common$1.CovalentCommonModule,
                            expansionPanel.CovalentExpansionPanelModule,
                            list.MatListModule,
                            icon.MatIconModule,
                            divider.MatDividerModule,
                            router.RouterModule,
                        ],
                    },] }
        ];
        return CovalentNavLinksModule;
    }());

    exports.CovalentNavLinksModule = CovalentNavLinksModule;
    exports.ɵa = TdNavLinksComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-core-nav-links.umd.js.map
