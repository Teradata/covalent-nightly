(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/menu'), require('@angular/material/divider')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/menu', ['exports', '@angular/core', '@angular/common', '@angular/material/menu', '@angular/material/divider'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.menu = {}),global.ng.core,global.ng.common,global.ng.material.menu,global.ng.material.divider));
}(this, (function (exports,core,common,menu,divider) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdMenuComponent = /** @class */ (function () {
        function TdMenuComponent() {
        }
        TdMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-menu',
                        template: "<ng-content select=\"[td-menu-header]\"></ng-content>\n<mat-divider></mat-divider>\n<div class=\"td-menu-content\">\n  <ng-content></ng-content>\n</div>\n<mat-divider></mat-divider>\n<ng-content select=\"[td-menu-footer]\"></ng-content>",
                        styles: [":host{margin-top:-8px;margin-bottom:-8px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep [td-menu-header]{padding:8px;text-align:center}:host ::ng-deep mat-list a[mat-list-item].mat-2-line,:host ::ng-deep mat-list mat-list-item.mat-2-line,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line{height:auto}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content{height:auto;padding:8px}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{padding-right:0}[dir=rtl] :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{padding-left:0;padding-right:16px}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine]{margin-top:4px}.td-menu-content{max-height:calc(50vh);overflow-y:auto}"]
                    }] }
        ];
        return TdMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MENU = [
        TdMenuComponent,
    ];
    var CovalentMenuModule = /** @class */ (function () {
        function CovalentMenuModule() {
        }
        CovalentMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            menu.MatMenuModule,
                            divider.MatDividerModule,
                        ],
                        declarations: [
                            TD_MENU,
                        ],
                        exports: [
                            TD_MENU,
                        ],
                    },] }
        ];
        return CovalentMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentMenuModule = CovalentMenuModule;
    exports.TdMenuComponent = TdMenuComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1tZW51LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbWVudS9tZW51Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lbnVDb21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuXG5pbXBvcnQgeyBUZE1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUuY29tcG9uZW50JztcblxuY29uc3QgVERfTUVOVTogVHlwZTxhbnk+W10gPSBbXG4gIFRkTWVudUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9NRU5VLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfTUVOVSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRNZW51TW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUVBO1NBT0M7O29CQVBBQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLHdQQUFvQzs7cUJBRXJDOztRQUdELHNCQUFDO0tBUEQ7Ozs7OztBQ0RBO1FBUU0sT0FBTyxHQUFnQjtRQUMzQixlQUFlO0tBQ2hCO0FBRUQ7UUFBQTtTQWVDOztvQkFmQUMsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLGtCQUFhOzRCQUNiQyx3QkFBZ0I7eUJBQ2pCO3dCQUNELFlBQVksRUFBRTs0QkFDWixPQUFPO3lCQUNSO3dCQUNELE9BQU8sRUFBRTs0QkFDUCxPQUFPO3lCQUNSO3FCQUNGOztRQUdELHlCQUFDO0tBZkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=