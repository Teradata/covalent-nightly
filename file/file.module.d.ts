import { ModuleWithProviders } from '@angular/core';
export { TdFileUploadComponent } from './file-upload/file-upload.component';
export { TdFileInputComponent, TdFileInputLabelDirective } from './file-input/file-input.component';
export { TdFileSelectDirective } from './directives/file-select.directive';
export { TdFileDropDirective } from './directives/file-drop.directive';
export { TdFileService, IUploadOptions } from './services/file.service';
export declare class CovalentFileModule {
    /**
     * @deprecated in 1.0.0-beta.3
     *
     * Please use without calling forRoot()
     */
    static forRoot(): ModuleWithProviders;
}
