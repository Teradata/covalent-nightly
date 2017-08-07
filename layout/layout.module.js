var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule, MdCardModule, MdListModule, ScrollDispatchModule } from '@angular/material';
import { TdLayoutComponent } from './layout.component';
import { TdLayoutToggleDirective, TdLayoutCloseDirective, TdLayoutOpenDirective } from './layout.directives';
import { TdLayoutNavComponent } from './layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout-nav-list/layout-nav-list.component';
import { TdLayoutNavListToggleDirective, TdLayoutNavListCloseDirective, TdLayoutNavListOpenDirective, } from './layout-nav-list/layout-nav-list.directives';
import { TdLayoutCardOverComponent } from './layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout-manage-list/layout-manage-list.component';
import { TdLayoutManageListToggleDirective, TdLayoutManageListCloseDirective, TdLayoutManageListOpenDirective, } from './layout-manage-list/layout-manage-list.directives';
import { TdLayoutFooterComponent } from './layout-footer/layout-footer.component';
import { TdNavigationDrawerComponent, TdNavigationDrawerMenuDirective, TdNavigationDrawerToolbarDirective, } from './navigation-drawer/navigation-drawer.component';
var TD_LAYOUTS = [
    TdLayoutComponent,
    TdLayoutToggleDirective,
    TdLayoutCloseDirective,
    TdLayoutOpenDirective,
    TdLayoutNavComponent,
    TdLayoutNavListComponent,
    TdLayoutNavListToggleDirective,
    TdLayoutNavListCloseDirective,
    TdLayoutNavListOpenDirective,
    TdLayoutCardOverComponent,
    TdLayoutManageListComponent,
    TdLayoutManageListToggleDirective,
    TdLayoutManageListCloseDirective,
    TdLayoutManageListOpenDirective,
    TdLayoutFooterComponent,
    TdNavigationDrawerComponent,
    TdNavigationDrawerMenuDirective,
    TdNavigationDrawerToolbarDirective,
];
export { TdLayoutComponent, TdLayoutToggleDirective, TdLayoutCloseDirective, TdLayoutOpenDirective, TdLayoutNavComponent, TdLayoutNavListComponent, TdLayoutNavListToggleDirective, TdLayoutNavListCloseDirective, TdLayoutNavListOpenDirective, TdLayoutCardOverComponent, TdLayoutManageListComponent, TdLayoutManageListToggleDirective, TdLayoutManageListCloseDirective, TdLayoutManageListOpenDirective, TdLayoutFooterComponent, TdNavigationDrawerComponent, TdNavigationDrawerMenuDirective, TdNavigationDrawerToolbarDirective };
var CovalentLayoutModule = (function () {
    function CovalentLayoutModule() {
    }
    return CovalentLayoutModule;
}());
CovalentLayoutModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ScrollDispatchModule,
            MdSidenavModule,
            MdToolbarModule,
            MdButtonModule,
            MdIconModule,
            MdCardModule,
            MdListModule,
        ],
        declarations: [
            TD_LAYOUTS,
        ],
        exports: [
            TD_LAYOUTS,
        ],
    })
], CovalentLayoutModule);
export { CovalentLayoutModule };
//# sourceMappingURL=layout.module.js.map