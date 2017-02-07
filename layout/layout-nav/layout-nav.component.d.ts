import { TdLayoutComponent } from '../layout.component';
export declare class TdLayoutNavComponent {
    private _layout;
    /**
     * toolbarTitle?: string
     *
     * Title set in toolbar.
     */
    toolbarTitle: string;
    /**
     * icon?: string
     *
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
    constructor(_layout: TdLayoutComponent);
    /**
     * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
     */
    openMainSidenav(): void;
}
