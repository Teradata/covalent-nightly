import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { TdDataTableComponent } from './data-table.component';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
import { TdDataTableRowComponent, TdDataTableColumnRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
import { DATA_TABLE_PROVIDER } from './services/data-table.service';
var TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableColumnRowComponent,
    TdDataTableTableComponent,
];
export { TdDataTableComponent, TdDataTableSortingOrder } from './data-table.component';
export { TdDataTableService } from './services/data-table.service';
export { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
export { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
export { TdDataTableRowComponent, TdDataTableColumnRowComponent } from './data-table-row/data-table-row.component';
export { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
var CovalentDataTableModule = (function () {
    function CovalentDataTableModule() {
    }
    CovalentDataTableModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatCheckboxModule,
                MatTooltipModule,
                MatIconModule,
                MatPseudoCheckboxModule,
            ],
            declarations: [
                TD_DATA_TABLE,
            ],
            exports: [
                TD_DATA_TABLE,
            ],
            providers: [
                DATA_TABLE_PROVIDER,
            ],
        })
    ], CovalentDataTableModule);
    return CovalentDataTableModule;
}());
export { CovalentDataTableModule };
//# sourceMappingURL=data-table.module.js.map