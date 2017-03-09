import { ModuleWithProviders } from '@angular/core';
import { TdMediaService } from './services/media.service';
import { TdMediaToggleDirective } from './directives/media-toggle.directive';
export { TdMediaService, TdMediaToggleDirective };
export declare class CovalentMediaModule {
    /**
     * @deprecated in 1.0.0-beta.3
     *
     * Please use without calling forRoot()
     */
    static forRoot(): ModuleWithProviders;
}
