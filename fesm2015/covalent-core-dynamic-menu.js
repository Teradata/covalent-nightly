import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IMenuTrigger() { }
if (false) {
    /** @type {?|undefined} */
    IMenuTrigger.prototype.id;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.text;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.icon;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.svgIcon;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.iconClasses;
}
/**
 * @record
 */
function IMenuItem() { }
if (false) {
    /** @type {?|undefined} */
    IMenuItem.prototype.id;
    /** @type {?} */
    IMenuItem.prototype.text;
    /** @type {?|undefined} */
    IMenuItem.prototype.icon;
    /** @type {?|undefined} */
    IMenuItem.prototype.svgIcon;
    /** @type {?|undefined} */
    IMenuItem.prototype.iconClasses;
    /** @type {?|undefined} */
    IMenuItem.prototype.children;
    /** @type {?|undefined} */
    IMenuItem.prototype.link;
    /** @type {?|undefined} */
    IMenuItem.prototype.newTab;
}
class TdDynamicMenuComponent {
}
TdDynamicMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-menu',
                template: "<button *ngIf=\"!trigger.text\" mat-icon-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n</button>\n<button *ngIf=\"trigger.text\" mat-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n  <span *ngIf=\"trigger.text\">\n    {{ trigger.text }}\n  </span>\n</button>\n\n<td-dynamic-menu-item #menu [items]=\"items\"></td-dynamic-menu-item>\n",
                styles: [""]
            }] }
];
TdDynamicMenuComponent.propDecorators = {
    trigger: [{ type: Input }],
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdDynamicMenuComponent.prototype.trigger;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdDynamicMenuItemComponent {
}
TdDynamicMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-menu-item',
                template: "<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template let-item ngFor [ngForOf]=\"items\">\n    <ng-container *ngIf=\"item.children && item.children.length > 0\">\n      <button mat-menu-item [id]=\"item.id\" [matMenuTriggerFor]=\"menu.childMenu\">\n        <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n        <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n        <span *ngIf=\"item.text\">\n          {{ item.text }}\n        </span>\n      </button>\n      <td-dynamic-menu-item #menu [items]=\"item.children\"></td-dynamic-menu-item>\n    </ng-container>\n    <ng-container *ngIf=\"!item.children || item.children.length === 0\">\n      <a class=\"new-tab\" mat-menu-item [id]=\"item.id\" [href]=\"item.link\" [target]=\"item.newTab ? '_blank' : '_self'\">\n        <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n        <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n        <span *ngIf=\"item.text\">\n          {{ item.text }}\n        </span>\n        <mat-icon *ngIf=\"item.newTab\" class=\"new-tab-icon\">launch</mat-icon>\n      </a>\n    </ng-container>\n  </ng-template>\n</mat-menu>\n",
                styles: [".new-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center}.new-tab span{-ms-flex:1;flex:1}.new-tab .new-tab-icon{margin:0 0 0 16px}"]
            }] }
];
TdDynamicMenuItemComponent.propDecorators = {
    items: [{ type: Input }],
    childMenu: [{ type: ViewChild, args: ['childMenu', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.childMenu;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CovalentDynamicMenuModule {
}
CovalentDynamicMenuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TdDynamicMenuComponent, TdDynamicMenuItemComponent],
                imports: [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatTooltipModule],
                providers: [],
                exports: [TdDynamicMenuComponent, TdDynamicMenuItemComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentDynamicMenuModule, TdDynamicMenuComponent, TdDynamicMenuItemComponent };
//# sourceMappingURL=covalent-core-dynamic-menu.js.map
