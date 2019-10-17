import { EventEmitter } from '@angular/core';
export interface ITdLinkGroup {
    name?: string;
    links: ITdLink[];
}
export interface ITdLink {
    label: string;
    linkTo: {
        href?: string;
    } | {
        routerLink?: string | string[];
    };
    openInNewTab?: boolean;
    icon?: string;
    show?: boolean;
    fontSet?: string;
}
export declare class TdNavLinksComponent {
    private _uniqueId;
    id: string;
    links: ITdLinkGroup[];
    afterClick: EventEmitter<ITdLink>;
    linkClicked(link: ITdLink): void;
    getHref(link: ITdLink): string;
    getRouterLink(link: ITdLink): string | string[];
}
