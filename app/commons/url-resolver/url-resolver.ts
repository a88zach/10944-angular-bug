"use strict";

import {PACKAGE_ROOT_URL, Inject, Injectable} from "@angular/core";
import {UrlResolver} from "@angular/compiler";

@Injectable()
export class VersionUrlResolver extends UrlResolver {
    constructor( @Inject(PACKAGE_ROOT_URL) private _prefix: string = null) {
        super(_prefix);
    }

    resolve(baseUrl: string, url: string): string {
        return super.resolve(baseUrl, url) + `?v=cacheVersion`;
    }
}
