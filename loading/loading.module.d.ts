import { ModuleWithProviders } from '@angular/core';
export { LoadingType, LoadingMode, LoadingStrategy } from './loading.component';
export { TdLoadingService, ITdLoadingConfig } from './services/loading.service';
export declare class CovalentLoadingModule {
    /**
     * @deprecated in 1.0.0-beta.3
     *
     * Please use without calling forRoot()
     */
    static forRoot(): ModuleWithProviders;
}
