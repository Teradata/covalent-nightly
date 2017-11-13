import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
var TdDataTableTemplateDirective = (function (_super) {
    tslib_1.__extends(TdDataTableTemplateDirective, _super);
    function TdDataTableTemplateDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TdDataTableTemplateDirective.prototype, "tdDataTableTemplate", void 0);
    TdDataTableTemplateDirective = tslib_1.__decorate([
        Directive({ selector: '[tdDataTableTemplate]ng-template' }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], TdDataTableTemplateDirective);
    return TdDataTableTemplateDirective;
}(TemplatePortalDirective));
export { TdDataTableTemplateDirective };
//# sourceMappingURL=data-table-template.directive.js.map