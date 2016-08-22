"use strict";

import {NgModule, provide, ExceptionHandler} from "@angular/core";
import {UrlResolver} from "@angular/compiler";
import {VersionUrlResolver} from "../commons/url-resolver/url-resolver";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routing, appRoutingProviders} from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders,
    { provide: UrlResolver, useClass: VersionUrlResolver },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


