var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MdIconModule, MdButtonModule, PortalModule } from '@angular/material';
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
var CovalentFileModule = CovalentFileModule_1 = (function () {
    function CovalentFileModule() {
    }
    CovalentFileModule.forRoot = function () {
        return {
            ngModule: CovalentFileModule_1,
            providers: [TdFileService],
        };
    };
    return CovalentFileModule;
}());
CovalentFileModule = CovalentFileModule_1 = __decorate([
    NgModule({
        imports: [
            HttpModule,
            JsonpModule,
            FormsModule,
            CommonModule,
            MdIconModule.forRoot(),
            MdButtonModule.forRoot(),
            PortalModule.forRoot(),
        ],
        declarations: [
            TD_FILE,
        ],
        exports: [
            TD_FILE,
        ],
    })
], CovalentFileModule);
export { CovalentFileModule };
var CovalentFileModule_1;
//# sourceMappingURL=file.module.js.map