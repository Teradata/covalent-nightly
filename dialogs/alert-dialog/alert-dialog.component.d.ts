import { MdDialogRef } from '@angular/material';
export declare class TdAlertDialogComponent {
    private _dialogRef;
    title: string;
    message: string;
    closeButton: string;
    constructor(_dialogRef: MdDialogRef<TdAlertDialogComponent>);
    close(): void;
}
