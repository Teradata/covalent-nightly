import { MdDialogRef } from '@angular/material';
export declare class TdPromptDialogComponent {
    private _dialogRef;
    title: string;
    message: string;
    value: string;
    cancelButton: string;
    acceptButton: string;
    constructor(_dialogRef: MdDialogRef<TdPromptDialogComponent>);
    cancel(): void;
    accept(): void;
}
