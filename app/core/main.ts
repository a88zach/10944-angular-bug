/// <reference path="../../typings/index.d.ts" />

"use strict";

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import {NgModuleRef} from "@angular/core";

import "./app.imports";

platformBrowserDynamic().bootstrapModule(AppModule);
