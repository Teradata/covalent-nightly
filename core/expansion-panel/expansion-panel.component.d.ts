import { TemplateRef, ViewContainerRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';
export declare class TdExpansionPanelHeaderDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdExpansionPanelLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdExpansionPanelSublabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdExpansionPanelSummaryComponent {
}
export declare class TdExpansionPanelComponent {
    private _expand;
    private _disabled;
    expansionPanelHeader: TdExpansionPanelHeaderDirective;
    expansionPanelLabel: TdExpansionPanelLabelDirective;
    expansionPanelSublabel: TdExpansionPanelSublabelDirective;
    /**
     * label?: string
     * Sets label of [TdExpansionPanelComponent] header.
     * Defaults to 'Click to expand'
     */
    label: string;
    /**
     * sublabel?: string
     * Sets sublabel of [TdExpansionPanelComponent] header.
     */
    sublabel: string;
    /**
     * expand?: boolean
     * Toggles [TdExpansionPanelComponent] between expand/collapse.
     */
    expand: boolean;
    /**
     * disabled?: boolean
     * Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if 'true'.
     */
    disabled: boolean;
    /**
     * expanded?: function
     * Event emitted when [TdExpansionPanelComponent] is expanded.
     */
    expanded: EventEmitter<void>;
    /**
     * collapsed?: function
     * Event emitted when [TdExpansionPanelComponent] is collapsed.
     */
    collapsed: EventEmitter<void>;
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     */
    clickEvent(): void;
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    toggle(): boolean;
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    open(): boolean;
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    close(): boolean;
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     */
    private _setExpand(newExpand);
    private _onExpanded();
    private _onCollapsed();
}
