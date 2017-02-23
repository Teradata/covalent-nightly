import { MdSidenav, MdSidenavToggleResult } from '@angular/material';
import { TdLayoutComponent } from '../layout.component';
export declare class TdLayoutNavListComponent {
    private _layout;
    _sideNav: MdSidenav;
    /**
     * toolbarTitle?: string
     *
     * Title set in toolbar.
     */
    toolbarTitle: string;
    /**
     * icon?: string
     * icon name to be displayed before the title
     */
    icon: string;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     */
    logo: string;
    /**
     * color?: string
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     */
    color: string;
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
     * Defaults to "350px".
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    sidenavWidth: string;
    /**
     * navigationRoute?: string
     *
     * option to set the combined logo, icon, toolbar title route
     * defaults to '/'
     */
    navigationRoute: string;
    /**
     * Checks if there is a [TdLayoutComponent] as parent.
     */
    readonly isMainSidenavAvailable: boolean;
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     */
    readonly disableClose: boolean;
    constructor(_layout: TdLayoutComponent);
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
    /**
     * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
     */
    openMainSidenav(): void;
}
