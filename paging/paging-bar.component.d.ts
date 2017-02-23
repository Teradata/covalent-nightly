import { EventEmitter, OnInit } from '@angular/core';
export interface IPageChangeEvent {
    page: number;
    maxPage: number;
    pageSize: number;
    total: number;
    fromRow: number;
    toRow: number;
}
export declare class TdPagingBarComponent implements OnInit {
    private _pageSizes;
    private _pageSize;
    private _total;
    private _page;
    private _fromRow;
    private _toRow;
    private _initialized;
    /**
     * pageSizeAll?: boolean
     * Shows or hides the 'all' menu item in the page size menu. Defaults to 'false'
     */
    pageSizeAll: boolean;
    /**
     * pageSizeAllText?: string
     * Text for the 'all' menu item in the page size menu. Defaults to 'All'
     */
    pageSizeAllText: string;
    /**
     * firstLast?: boolean
     * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
     */
    firstLast: boolean;
    /**
     * initialPage?: number
     * Sets starting page for the paging bar. Defaults to '1'
     */
    initialPage: number;
    /**
     * pageSizes?: number[]
     * Array that populates page size menu. Defaults to [50, 100, 200, 500, 1000]
     */
    pageSizes: number[];
    /**
     * pageSize?: number
     * Selected page size for the pagination. Defaults to first element of the [pageSizes] array.
     */
    pageSize: number;
    /**
     * total: number
     * Total rows for the pagination.
     */
    total: number;
    /**
     * range: string
     * Returns the range of the rows.
     */
    readonly range: string;
    /**
     * page: number
     * Returns the current page.
     */
    readonly page: number;
    /**
     * page: number
     * Returns the max page for the current pageSize and total.
     */
    readonly maxPage: number;
    /**
     * change?: function
     * Method to be executed when page size changes or any button is clicked in the paging bar.
     * Emits an [IPageChangeEvent] implemented object.
     */
    onChange: EventEmitter<IPageChangeEvent>;
    ngOnInit(): void;
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     */
    navigateToPage(page: number): boolean;
    /**
     * firstPage?: function
     * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
     */
    firstPage(): boolean;
    /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     */
    prevPage(): boolean;
    /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     */
    nextPage(): boolean;
    /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     */
    lastPage(): boolean;
    isMinPage(): boolean;
    isMaxPage(): boolean;
    private _calculateRows();
    private _handleOnChange();
}
