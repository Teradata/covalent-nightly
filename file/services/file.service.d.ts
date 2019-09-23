import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * @deprecated should be removed in favor of IUploadInit
 * @breaking-change 3.0.0
 */
export interface IUploadOptions {
    url: string;
    method: 'post' | 'put';
    file?: File;
    headers?: {
        [key: string]: string;
    };
    formData?: FormData;
}
export interface IUploadExtras {
    headers?: {
        [name: string]: string | string[];
    };
    params?: {
        [param: string]: string | string[];
    };
}
export declare class TdFileService {
    private readonly _http;
    private _progressSubject;
    private _progressObservable;
    /**
     * Gets progress observable to keep track of the files being uploaded.
     * Needs to be supported by backend.
     */
    readonly progress: Observable<number>;
    /**
     * Creates a new instance
     * @param _http the http client instance
     * @breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
     */
    constructor(_http: HttpClient);
    /**
     * Uploads a file to URL.
     */
    send(url: string, method: string, body: File | FormData, { headers, params }?: IUploadExtras): Observable<HttpEvent<any>>;
    /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * @deprecated use send instead
     * @breaking-change 3.0.0
     */
    upload(options: IUploadOptions): Observable<any>;
    private handleEvent;
}
