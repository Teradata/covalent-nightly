import { Router } from '@angular/router';
import { TdLayoutComponent } from '../layout.component';
export declare class TdLayoutNavComponent {
    private _layout;
    private _router;
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
     * option to set the combined route for the icon, logo, and toolbarTitle.
     */
    navigationRoute: string;
    /**
     * Checks if there is a [TdLayoutComponent] as parent.
     */
    readonly isMainSidenavAvailable: boolean;
    /**
     * Checks if router was injected.
     */
    readonly routerEnabled: boolean;
    constructor(_layout: TdLayoutComponent, _router: Router);
    handleNavigationClick(): void;
    /**
     * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
     */
    openMainSidenav(): void;
}
