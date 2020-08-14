export interface IMenuTrigger {
    id?: string;
    text?: string;
    icon?: string;
    svgIcon?: string;
    iconClasses?: string[];
}
export interface IMenuItem {
    id?: string;
    text: string;
    icon?: string;
    svgIcon?: string;
    iconClasses?: string[];
    children?: IMenuItem[];
    link?: string;
    newTab?: boolean;
}
export declare class TdDynamicMenuComponent {
    trigger: IMenuTrigger;
    items: IMenuItem[];
}
