import { MdSidenav, MdSidenavToggleResult } from '@angular/material';
export declare class TdLayoutManageListComponent {
    _sideNav: MdSidenav;
    /**
     * mode?: 'side', 'push' or 'over'
     *
     * The mode or styling of the sidenav.
     * Defaults to "side".
     * See "MdSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    mode: 'side' | 'push' | 'over';
    /**
     * opened?: boolean
     *
     * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
     * Defaults to "true".
     *
     * See "MdSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    opened: boolean;
    /**
     * sidenavWidth?: string
     *
     * Sets the "width" of the sidenav in either "px" or "%" ("%" is not well supported yet as stated in the layout docs)
     * Defaults to "257px".
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    sidenavWidth: string;
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     */
    readonly disableClose: boolean;
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    toggle(): Promise<MdSidenavToggleResult>;
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    open(): Promise<MdSidenavToggleResult>;
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    close(): Promise<MdSidenavToggleResult>;
}
