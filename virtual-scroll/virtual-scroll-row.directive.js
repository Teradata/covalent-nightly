import * as tslib_1 from "tslib";
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
var TdVirtualScrollRowDirective = (function (_super) {
    tslib_1.__extends(TdVirtualScrollRowDirective, _super);
    function TdVirtualScrollRowDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdVirtualScrollRowDirective = tslib_1.__decorate([
        Directive({ selector: '[tdVirtualScrollRow]' }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef,
            ViewContainerRef])
    ], TdVirtualScrollRowDirective);
    return TdVirtualScrollRowDirective;
}(TemplatePortalDirective));
export { TdVirtualScrollRowDirective };
//# sourceMappingURL=virtual-scroll-row.directive.js.map