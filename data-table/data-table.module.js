var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCheckboxModule, MdTooltipModule, MdIconModule, MdSelectionModule } from '@angular/material';
import { TdDataTableComponent } from './data-table.component';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
import { TdDataTableService } from './services/data-table.service';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
var TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableTableComponent,
];
export { TdDataTableComponent, TdDataTableSortingOrder } from './data-table.component';
export { TdDataTableService } from './services/data-table.service';
export { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
export { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
export { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
export { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
var CovalentDataTableModule = CovalentDataTableModule_1 = (function () {
    function CovalentDataTableModule() {
    }
    CovalentDataTableModule.forRoot = function () {
        return {
            ngModule: CovalentDataTableModule_1,
            providers: [TdDataTableService],
        };
    };
    return CovalentDataTableModule;
}());
CovalentDataTableModule = CovalentDataTableModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MdCheckboxModule.forRoot(),
            MdTooltipModule.forRoot(),
            MdIconModule.forRoot(),
            MdSelectionModule,
        ],
        declarations: [
            TD_DATA_TABLE,
        ],
        exports: [
            TD_DATA_TABLE,
        ],
    })
], CovalentDataTableModule);
export { CovalentDataTableModule };
var CovalentDataTableModule_1;
//# sourceMappingURL=data-table.module.js.map