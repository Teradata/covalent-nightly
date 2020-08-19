/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var TdDynamicMenuLinkComponent = /** @class */ (function () {
    function TdDynamicMenuLinkComponent() {
        this.itemClicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TdDynamicMenuLinkComponent.prototype.emitClicked = /**
     * @return {?}
     */
    function () {
        this.itemClicked.emit({ text: this.item.text, action: this.item.action });
    };
    TdDynamicMenuLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-dynamic-menu-link',
                    template: "<a\n  *ngIf=\"item.link\"\n  class=\"new-tab\"\n  mat-menu-item\n  [id]=\"item.id\"\n  [href]=\"item.link\"\n  [target]=\"item.newTab ? '_blank' : '_self'\"\n  (click)=\"emitClicked()\"\n>\n  <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n  <span>{{ item.text }}</span>\n  <mat-icon *ngIf=\"item.newTab\" class=\"new-tab-icon\">launch</mat-icon>\n</a>\n<button *ngIf=\"item.action\" mat-menu-item [id]=\"item.id\" (click)=\"emitClicked()\">\n  <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n  <span>{{ item.text }}</span>\n</button>\n",
                    styles: [".new-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center}.new-tab span{-ms-flex:1;flex:1}.new-tab .new-tab-icon{margin:0 0 0 16px}"]
                }] }
    ];
    TdDynamicMenuLinkComponent.propDecorators = {
        item: [{ type: Input }],
        itemClicked: [{ type: Output }]
    };
    return TdDynamicMenuLinkComponent;
}());
export { TdDynamicMenuLinkComponent };
if (false) {
    /** @type {?} */
    TdDynamicMenuLinkComponent.prototype.item;
    /** @type {?} */
    TdDynamicMenuLinkComponent.prototype.itemClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZHluYW1pYy1tZW51LyIsInNvdXJjZXMiOlsiZHluYW1pYy1tZW51LWl0ZW0vZHluYW1pYy1tZW51LWxpbmsvZHluYW1pYy1tZW51LWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBR2xGO0lBQUE7UUFRWSxnQkFBVyxHQUErQyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztJQUt2SCxDQUFDOzs7O0lBSEMsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsazBCQUFpRDs7aUJBRWxEOzs7dUJBRUUsS0FBSzs4QkFFTCxNQUFNOztJQUtULGlDQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlksMEJBQTBCOzs7SUFDckMsMENBQXlCOztJQUV6QixpREFBcUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTWVudUl0ZW0sIElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQgfSBmcm9tICcuLi8uLi9keW5hbWljLW1lbnUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZHluYW1pYy1tZW51LWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1tZW51LWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLW1lbnUtbGluay5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZER5bmFtaWNNZW51TGlua0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW06IElNZW51SXRlbTtcblxuICBAT3V0cHV0KCkgaXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudD4oKTtcblxuICBlbWl0Q2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1DbGlja2VkLmVtaXQoeyB0ZXh0OiB0aGlzLml0ZW0udGV4dCwgYWN0aW9uOiB0aGlzLml0ZW0uYWN0aW9uIH0pO1xuICB9XG59XG4iXX0=