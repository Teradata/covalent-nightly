import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';
export declare class TdDataTableTemplateDirective extends TemplatePortalDirective {
    tdDataTableTemplate: string;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
