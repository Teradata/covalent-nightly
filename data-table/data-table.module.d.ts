import { ModuleWithProviders } from '@angular/core';
export { TdDataTableComponent, TdDataTableSortingOrder, ITdDataTableColumn, ITdDataTableSelectEvent } from './data-table.component';
export { TdDataTableService } from './services/data-table.service';
export { TdDataTableColumnComponent, ITdDataTableSortChangeEvent } from './data-table-column/data-table-column.component';
export { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
export { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
export { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
export declare class CovalentDataTableModule {
    static forRoot(): ModuleWithProviders;
}
