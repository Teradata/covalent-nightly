import { ModuleWithProviders } from '@angular/core';
export { TdFileUploadComponent } from './file-upload.component';
export { TdFileSelectDirective } from './directives/file-select.directive';
export { TdFileDropDirective } from './directives/file-drop.directive';
export { TdFileService, IUploadOptions } from './services/file.service';
export declare class CovalentFileModule {
    static forRoot(): ModuleWithProviders;
}
