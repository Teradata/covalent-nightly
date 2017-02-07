import { OnInit, OnDestroy } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { MdSidenavToggleResult } from '@angular/material';
import { TdLayoutComponent } from '../layout.component';
export declare class TdNavigationDrawerMenuDirective {
}
export declare class TdNavigationDrawerComponent implements OnInit, OnDestroy {
    private _layout;
    private _sanitize;
    private _closeSubscription;
    private _menuToggled;
    private _backgroundImage;
    readonly menuToggled: boolean;
    private _drawerMenu;
    /**
     * Checks if there is a [TdNavigationDrawerMenuDirective] as content.
     */
    readonly isMenuAvailable: boolean;
    /**
     * Checks if there is a background image for the toolbar.
     */
    readonly isBackgroundAvailable: boolean;
    /**
     * sidenavTitle?: string
     * Title set in sideNav.
     */
    sidenavTitle: string;
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
     * If [color] is not set, default is used.
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
     * backgroundUrl?: SafeResourceUrl
     *
     * image to be displayed as the background of the toolbar.
     * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
     */
    backgroundUrl: any;
    readonly backgroundImage: SafeStyle;
    /**
     * name?: string
     *
     * string to be displayed as part of the navigation drawer sublabel.
     * if [email] is not set, then [name] will be the toggle menu text.
     */
    name: string;
    /**
     * email?: string
     *
     * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
     * if [email] and [name] are not set, then the toggle menu is not rendered.
     */
    email: string;
    constructor(_layout: TdLayoutComponent, _sanitize: DomSanitizer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleMenu(): void;
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
