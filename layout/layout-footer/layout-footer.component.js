var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var TdLayoutFooterComponent = (function () {
    function TdLayoutFooterComponent() {
    }
    return TdLayoutFooterComponent;
}());
TdLayoutFooterComponent = __decorate([
    Component({
        /* tslint:disable-next-line */
        selector: 'td-layout-footer,td-layout-footer-inner',
        styles: [":host { display: block; } .td-layout-footer { padding: 10px 16px; } "],
        template: "<div class=\"td-layout-footer\"> <ng-content></ng-content> </div> ",
    })
], TdLayoutFooterComponent);
export { TdLayoutFooterComponent };
//# sourceMappingURL=layout-footer.component.js.map