System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.5",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.5",
    "@angular/core": "npm:@angular/core@2.0.0-rc.5",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.5",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.5",
    "@angular/router": "npm:@angular/router@3.0.0-rc.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.8"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@angular/common@2.0.0-rc.5": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/compiler@2.0.0-rc.5": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/core@2.0.0-rc.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6",
      "zone.js": "npm:zone.js@0.6.16"
    },
    "npm:@angular/platform-browser-dynamic@2.0.0-rc.5": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.5",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.5",
      "@angular/core": "npm:@angular/core@2.0.0-rc.5",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/platform-browser@2.0.0-rc.5": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.5",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.5",
      "@angular/core": "npm:@angular/core@2.0.0-rc.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/router@3.0.0-rc.1": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.5",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.5",
      "@angular/core": "npm:@angular/core@2.0.0-rc.5",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.5",
      "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:rxjs@5.0.0-beta.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.6.16": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
