import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TdFileSelectDirective } from './directives/file-select.directive';
import { TdFileDropDirective } from './directives/file-drop.directive';
import { TdFileUploadComponent } from './file-upload/file-upload.component';
import { TdFileInputComponent, TdFileInputLabelDirective } from './file-input/file-input.component';
import { TdFileService } from './services/file.service';
var TD_FILE = [
    TdFileSelectDirective,
    TdFileDropDirective,
    TdFileUploadComponent,
    TdFileInputComponent,
    TdFileInputLabelDirective,
];
export { TdFileUploadComponent } from './file-upload/file-upload.component';
export { TdFileInputComponent, TdFileInputLabelDirective } from './file-input/file-input.component';
export { TdFileSelectDirective } from './directives/file-select.directive';
export { TdFileDropDirective } from './directives/file-drop.directive';
export { TdFileService } from './services/file.service';
var CovalentFileModule = (function () {
    function CovalentFileModule() {
    }
    CovalentFileModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule,
                CommonModule,
                MatIconModule,
                MatButtonModule,
                PortalModule,
            ],
            declarations: [
                TD_FILE,
            ],
            exports: [
                TD_FILE,
            ],
            providers: [
                TdFileService,
            ],
        })
    ], CovalentFileModule);
    return CovalentFileModule;
}());
export { CovalentFileModule };
//# sourceMappingURL=file.module.js.map