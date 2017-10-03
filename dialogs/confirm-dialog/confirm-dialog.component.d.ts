import { MatDialogRef } from '@angular/material';
export declare class TdConfirmDialogComponent {
    private _dialogRef;
    title: string;
    message: string;
    cancelButton: string;
    acceptButton: string;
    constructor(_dialogRef: MatDialogRef<TdConfirmDialogComponent>);
    cancel(): void;
    accept(): void;
}
