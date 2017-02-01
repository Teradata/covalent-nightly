import { MdSidenav, MdSidenavToggleResult } from '@angular/material';
export declare class TdLayoutComponent {
    sidenav: MdSidenav;
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
