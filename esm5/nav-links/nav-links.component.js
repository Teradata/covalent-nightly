/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
/**
 * @record
 */
export function ITdLinkGroup() { }
if (false) {
    /** @type {?|undefined} */
    ITdLinkGroup.prototype.name;
    /** @type {?} */
    ITdLinkGroup.prototype.links;
}
/**
 * @record
 */
export function ITdLink() { }
if (false) {
    /** @type {?} */
    ITdLink.prototype.label;
    /** @type {?} */
    ITdLink.prototype.linkTo;
    /** @type {?|undefined} */
    ITdLink.prototype.openInNewTab;
    /** @type {?|undefined} */
    ITdLink.prototype.icon;
    /** @type {?|undefined} */
    ITdLink.prototype.show;
    /** @type {?|undefined} */
    ITdLink.prototype.fontSet;
}
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
    TdNavLinksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-nav-links',
                    template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-linkGroup let-indexGroup=\"index\">\n    <td-expansion-panel\n      *ngIf=\"linkGroup.name && linkGroup.links.length\"\n      class=\"td-nav-group\"\n      [sublabel]=\"linkGroup.name\"\n      [expand]=\"true\"\n    >\n      <mat-divider></mat-divider>\n      <ng-template [ngTemplateOutlet]=\"links\"></ng-template>\n    </td-expansion-panel>\n    <ng-template *ngIf=\"!linkGroup.name && linkGroup.links.length\" [ngTemplateOutlet]=\"links\"></ng-template>\n    <ng-template #links>\n      <ng-template ngFor [ngForOf]=\"linkGroup.links\" let-link let-indexLink=\"index\">\n        <a\n          mat-list-item\n          *ngIf=\"link.linkTo.href && (link.show === undefined || link.show)\"\n          [href]=\"link.linkTo.href\"\n          [target]=\"link.openInNewTab ? '_blank' : '_self'\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n\n        <a\n          mat-list-item\n          *ngIf=\"link.linkTo.routerLink && (link.show === undefined || link.show)\"\n          [routerLink]=\"link.linkTo.routerLink\"\n          [target]=\"link.openInNewTab ? '_blank' : null\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n      </ng-template>\n    </ng-template>\n  </ng-template>\n</mat-nav-list>\n",
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
export { TdNavLinksComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavLinksComponent.prototype._uniqueId;
    /** @type {?} */
    TdNavLinksComponent.prototype.id;
    /** @type {?} */
    TdNavLinksComponent.prototype.links;
    /** @type {?} */
    TdNavLinksComponent.prototype.afterClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL25hdi1saW5rcy8iLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFaEcsa0NBR0M7OztJQUZDLDRCQUFjOztJQUNkLDZCQUFpQjs7Ozs7QUFHbkIsNkJBT0M7OztJQU5DLHdCQUFjOztJQUNkLHlCQUEyRDs7SUFDM0QsK0JBQXVCOztJQUN2Qix1QkFBYzs7SUFDZCx1QkFBZTs7SUFDZiwwQkFBaUI7OztJQUdmLFlBQVksR0FBVyxDQUFDO0FBRTVCO0lBQUE7UUFPVSxjQUFTLEdBQVcsa0JBQWdCLEVBQUUsWUFBYyxDQUFDO1FBRXBELE9BQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTNCLGVBQVUsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUs1RSxDQUFDOzs7OztJQUhDLHlDQUFXOzs7O0lBQVgsVUFBWSxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsb3hEQUF5QztvQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7O3FCQUlFLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxNQUFNOztJQUtULDBCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FWWSxtQkFBbUI7Ozs7OztJQUM5Qix3Q0FBNkQ7O0lBRTdELGlDQUFxQzs7SUFDckMsb0NBQStCOztJQUMvQix5Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRMaW5rR3JvdXAge1xuICBuYW1lPzogc3RyaW5nO1xuICBsaW5rczogSVRkTGlua1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZExpbmsge1xuICBsYWJlbDogc3RyaW5nO1xuICBsaW5rVG86IHsgaHJlZjogc3RyaW5nIH0gfCB7IHJvdXRlckxpbms/OiBzdHJpbmcgfCBhbnlbXSB9O1xuICBvcGVuSW5OZXdUYWI/OiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICBzaG93PzogYm9vbGVhbjtcbiAgZm9udFNldD86IHN0cmluZztcbn1cblxubGV0IG5leHRVbmlxdWVJZDogbnVtYmVyID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2LWxpbmtzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1saW5rcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi1saW5rcy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZMaW5rc0NvbXBvbmVudCB7XG4gIHByaXZhdGUgX3VuaXF1ZUlkOiBzdHJpbmcgPSBgdGQtbmF2LWxpbmtzLSR7KytuZXh0VW5pcXVlSWR9YDtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5fdW5pcXVlSWQ7XG4gIEBJbnB1dCgpIGxpbmtzOiBJVGRMaW5rR3JvdXBbXTtcbiAgQE91dHB1dCgpIGFmdGVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxJVGRMaW5rPiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkTGluaz4oKTtcblxuICBsaW5rQ2xpY2tlZChsaW5rOiBJVGRMaW5rKTogdm9pZCB7XG4gICAgdGhpcy5hZnRlckNsaWNrLmVtaXQobGluayk7XG4gIH1cbn1cbiJdfQ==