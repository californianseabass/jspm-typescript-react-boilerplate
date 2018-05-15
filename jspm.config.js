SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "jspm-typescript-react-boilerplate/": ""
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@7.1.0",
      "typescript": "npm:typescript@2.5.2",
      "net": "npm:jspm-nodelibs-net@0.2.1",
      "module": "npm:jspm-nodelibs-module@0.2.1",
      "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0",
      "express": "npm:express@4.15.4",
      "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
      "babel-core": "npm:babel-core@7.0.0-bridge.0",
      "@babel/core": "npm:@babel/core@7.0.0-beta.47",
      "tty": "npm:jspm-nodelibs-tty@0.2.1",
      "repl": "npm:jspm-nodelibs-repl@0.2.1",
      "babel-jest": "npm:babel-jest@22.4.3"
    },
    "packages": {
      "npm:typescript@2.5.2": {
        "map": {
          "source-map-support": "npm:source-map-support@0.4.17"
        }
      },
      "npm:source-map-support@0.4.17": {
        "map": {
          "source-map": "npm:source-map@0.5.7"
        }
      },
      "npm:systemjs-hot-reloader@1.1.0": {
        "map": {
          "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
        }
      },
      "npm:express@4.15.4": {
        "map": {
          "merge-descriptors": "npm:merge-descriptors@1.0.1",
          "path-to-regexp": "npm:path-to-regexp@0.1.7",
          "array-flatten": "npm:array-flatten@1.1.1",
          "encodeurl": "npm:encodeurl@1.0.1",
          "cookie": "npm:cookie@0.3.1",
          "send": "npm:send@0.15.4",
          "vary": "npm:vary@1.1.1",
          "setprototypeof": "npm:setprototypeof@1.0.3",
          "type-is": "npm:type-is@1.6.15",
          "accepts": "npm:accepts@1.3.4",
          "parseurl": "npm:parseurl@1.3.1",
          "qs": "npm:qs@6.5.0",
          "utils-merge": "npm:utils-merge@1.0.0",
          "depd": "npm:depd@1.1.1",
          "fresh": "npm:fresh@0.5.0",
          "debug": "npm:debug@2.6.8",
          "range-parser": "npm:range-parser@1.2.0",
          "proxy-addr": "npm:proxy-addr@1.1.5",
          "content-disposition": "npm:content-disposition@0.5.2",
          "on-finished": "npm:on-finished@2.3.0",
          "serve-static": "npm:serve-static@1.12.4",
          "escape-html": "npm:escape-html@1.0.3",
          "statuses": "npm:statuses@1.3.1",
          "etag": "npm:etag@1.8.0",
          "cookie-signature": "npm:cookie-signature@1.0.6",
          "content-type": "npm:content-type@1.0.2",
          "finalhandler": "npm:finalhandler@1.0.4",
          "methods": "npm:methods@1.1.2"
        }
      },
      "npm:send@0.15.4": {
        "map": {
          "encodeurl": "npm:encodeurl@1.0.1",
          "depd": "npm:depd@1.1.1",
          "fresh": "npm:fresh@0.5.0",
          "debug": "npm:debug@2.6.8",
          "range-parser": "npm:range-parser@1.2.0",
          "mime": "npm:mime@1.3.4",
          "on-finished": "npm:on-finished@2.3.0",
          "escape-html": "npm:escape-html@1.0.3",
          "statuses": "npm:statuses@1.3.1",
          "etag": "npm:etag@1.8.0",
          "http-errors": "npm:http-errors@1.6.2",
          "destroy": "npm:destroy@1.0.4",
          "ms": "npm:ms@2.0.0"
        }
      },
      "npm:serve-static@1.12.4": {
        "map": {
          "encodeurl": "npm:encodeurl@1.0.1",
          "parseurl": "npm:parseurl@1.3.1",
          "send": "npm:send@0.15.4",
          "escape-html": "npm:escape-html@1.0.3"
        }
      },
      "npm:type-is@1.6.15": {
        "map": {
          "media-typer": "npm:media-typer@0.3.0",
          "mime-types": "npm:mime-types@2.1.17"
        }
      },
      "npm:http-errors@1.6.2": {
        "map": {
          "depd": "npm:depd@1.1.1",
          "setprototypeof": "npm:setprototypeof@1.0.3",
          "statuses": "npm:statuses@1.3.1",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:proxy-addr@1.1.5": {
        "map": {
          "ipaddr.js": "npm:ipaddr.js@1.4.0",
          "forwarded": "npm:forwarded@0.1.0"
        }
      },
      "npm:accepts@1.3.4": {
        "map": {
          "negotiator": "npm:negotiator@0.6.1",
          "mime-types": "npm:mime-types@2.1.17"
        }
      },
      "npm:on-finished@2.3.0": {
        "map": {
          "ee-first": "npm:ee-first@1.1.1"
        }
      },
      "npm:finalhandler@1.0.4": {
        "map": {
          "debug": "npm:debug@2.6.8",
          "encodeurl": "npm:encodeurl@1.0.1",
          "escape-html": "npm:escape-html@1.0.3",
          "on-finished": "npm:on-finished@2.3.0",
          "parseurl": "npm:parseurl@1.3.1",
          "statuses": "npm:statuses@1.3.1",
          "unpipe": "npm:unpipe@1.0.0"
        }
      },
      "npm:debug@2.6.8": {
        "map": {
          "ms": "npm:ms@2.0.0"
        }
      },
      "npm:mime-types@2.1.17": {
        "map": {
          "mime-db": "npm:mime-db@1.30.0"
        }
      },
      "npm:@babel/core@7.0.0-beta.47": {
        "map": {
          "debug": "npm:debug@3.1.0",
          "convert-source-map": "npm:convert-source-map@1.5.1",
          "lodash": "npm:lodash@4.17.10",
          "json5": "npm:json5@0.5.1",
          "babylon": "npm:babylon@7.0.0-beta.47",
          "@babel/traverse": "npm:@babel/traverse@7.0.0-beta.47",
          "resolve": "npm:resolve@1.7.1",
          "source-map": "npm:source-map@0.5.7",
          "@babel/code-frame": "npm:@babel/code-frame@7.0.0-beta.47",
          "@babel/helpers": "npm:@babel/helpers@7.0.0-beta.47",
          "@babel/template": "npm:@babel/template@7.0.0-beta.47",
          "@babel/types": "npm:@babel/types@7.0.0-beta.47",
          "semver": "npm:semver@5.5.0",
          "micromatch": "npm:micromatch@2.3.11",
          "@babel/generator": "npm:@babel/generator@7.0.0-beta.47"
        }
      },
      "npm:@babel/traverse@7.0.0-beta.47": {
        "map": {
          "@babel/code-frame": "npm:@babel/code-frame@7.0.0-beta.47",
          "babylon": "npm:babylon@7.0.0-beta.47",
          "debug": "npm:debug@3.1.0",
          "lodash": "npm:lodash@4.17.10",
          "@babel/types": "npm:@babel/types@7.0.0-beta.47",
          "@babel/helper-function-name": "npm:@babel/helper-function-name@7.0.0-beta.47",
          "globals": "npm:globals@11.5.0",
          "invariant": "npm:invariant@2.2.4",
          "@babel/generator": "npm:@babel/generator@7.0.0-beta.47",
          "@babel/helper-split-export-declaration": "npm:@babel/helper-split-export-declaration@7.0.0-beta.47"
        }
      },
      "npm:debug@3.1.0": {
        "map": {
          "ms": "npm:ms@2.0.0"
        }
      },
      "npm:resolve@1.7.1": {
        "map": {
          "path-parse": "npm:path-parse@1.0.5"
        }
      },
      "npm:@babel/helpers@7.0.0-beta.47": {
        "map": {
          "@babel/template": "npm:@babel/template@7.0.0-beta.47",
          "@babel/traverse": "npm:@babel/traverse@7.0.0-beta.47",
          "@babel/types": "npm:@babel/types@7.0.0-beta.47"
        }
      },
      "npm:@babel/template@7.0.0-beta.47": {
        "map": {
          "@babel/code-frame": "npm:@babel/code-frame@7.0.0-beta.47",
          "@babel/types": "npm:@babel/types@7.0.0-beta.47",
          "babylon": "npm:babylon@7.0.0-beta.47",
          "lodash": "npm:lodash@4.17.10"
        }
      },
      "npm:@babel/helper-function-name@7.0.0-beta.47": {
        "map": {
          "@babel/template": "npm:@babel/template@7.0.0-beta.47",
          "@babel/types": "npm:@babel/types@7.0.0-beta.47",
          "@babel/helper-get-function-arity": "npm:@babel/helper-get-function-arity@7.0.0-beta.47"
        }
      },
      "npm:@babel/types@7.0.0-beta.47": {
        "map": {
          "lodash": "npm:lodash@4.17.10",
          "esutils": "npm:esutils@2.0.2",
          "to-fast-properties": "npm:to-fast-properties@2.0.0"
        }
      },
      "npm:invariant@2.2.4": {
        "map": {
          "loose-envify": "npm:loose-envify@1.3.1"
        }
      },
      "npm:micromatch@2.3.11": {
        "map": {
          "arr-diff": "npm:arr-diff@2.0.0",
          "array-unique": "npm:array-unique@0.2.1",
          "expand-brackets": "npm:expand-brackets@0.1.5",
          "is-glob": "npm:is-glob@2.0.1",
          "filename-regex": "npm:filename-regex@2.0.1",
          "is-extglob": "npm:is-extglob@1.0.0",
          "normalize-path": "npm:normalize-path@2.1.1",
          "braces": "npm:braces@1.8.5",
          "object.omit": "npm:object.omit@2.0.1",
          "parse-glob": "npm:parse-glob@3.0.4",
          "kind-of": "npm:kind-of@3.2.2",
          "regex-cache": "npm:regex-cache@0.4.4",
          "extglob": "npm:extglob@0.3.2"
        }
      },
      "npm:@babel/code-frame@7.0.0-beta.47": {
        "map": {
          "@babel/highlight": "npm:@babel/highlight@7.0.0-beta.47"
        }
      },
      "npm:@babel/generator@7.0.0-beta.47": {
        "map": {
          "@babel/types": "npm:@babel/types@7.0.0-beta.47",
          "lodash": "npm:lodash@4.17.10",
          "source-map": "npm:source-map@0.5.7",
          "jsesc": "npm:jsesc@2.5.1",
          "trim-right": "npm:trim-right@1.0.1"
        }
      },
      "npm:is-glob@2.0.1": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0"
        }
      },
      "npm:@babel/highlight@7.0.0-beta.47": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "chalk": "npm:chalk@2.4.1",
          "js-tokens": "npm:js-tokens@3.0.2"
        }
      },
      "npm:expand-brackets@0.1.5": {
        "map": {
          "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
        }
      },
      "npm:arr-diff@2.0.0": {
        "map": {
          "arr-flatten": "npm:arr-flatten@1.1.0"
        }
      },
      "npm:normalize-path@2.1.1": {
        "map": {
          "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0"
        }
      },
      "npm:braces@1.8.5": {
        "map": {
          "expand-range": "npm:expand-range@1.8.2",
          "preserve": "npm:preserve@0.2.0",
          "repeat-element": "npm:repeat-element@1.1.2"
        }
      },
      "npm:parse-glob@3.0.4": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0",
          "is-glob": "npm:is-glob@2.0.1",
          "glob-base": "npm:glob-base@0.3.0",
          "is-dotfile": "npm:is-dotfile@1.0.3"
        }
      },
      "npm:@babel/helper-get-function-arity@7.0.0-beta.47": {
        "map": {
          "@babel/types": "npm:@babel/types@7.0.0-beta.47"
        }
      },
      "npm:object.omit@2.0.1": {
        "map": {
          "for-own": "npm:for-own@0.1.5",
          "is-extendable": "npm:is-extendable@0.1.1"
        }
      },
      "npm:regex-cache@0.4.4": {
        "map": {
          "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
        }
      },
      "npm:kind-of@3.2.2": {
        "map": {
          "is-buffer": "npm:is-buffer@1.1.6"
        }
      },
      "npm:@babel/helper-split-export-declaration@7.0.0-beta.47": {
        "map": {
          "@babel/types": "npm:@babel/types@7.0.0-beta.47"
        }
      },
      "npm:chalk@2.4.1": {
        "map": {
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "supports-color": "npm:supports-color@5.4.0",
          "ansi-styles": "npm:ansi-styles@3.2.1"
        }
      },
      "npm:glob-base@0.3.0": {
        "map": {
          "is-glob": "npm:is-glob@2.0.1",
          "glob-parent": "npm:glob-parent@2.0.0"
        }
      },
      "npm:expand-range@1.8.2": {
        "map": {
          "fill-range": "npm:fill-range@2.2.4"
        }
      },
      "npm:extglob@0.3.2": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0"
        }
      },
      "npm:for-own@0.1.5": {
        "map": {
          "for-in": "npm:for-in@1.0.2"
        }
      },
      "npm:is-equal-shallow@0.1.3": {
        "map": {
          "is-primitive": "npm:is-primitive@2.0.0"
        }
      },
      "npm:supports-color@5.4.0": {
        "map": {
          "has-flag": "npm:has-flag@3.0.0"
        }
      },
      "npm:fill-range@2.2.4": {
        "map": {
          "repeat-element": "npm:repeat-element@1.1.2",
          "is-number": "npm:is-number@2.1.0",
          "isobject": "npm:isobject@2.1.0",
          "randomatic": "npm:randomatic@3.0.0",
          "repeat-string": "npm:repeat-string@1.6.1"
        }
      },
      "npm:glob-parent@2.0.0": {
        "map": {
          "is-glob": "npm:is-glob@2.0.1"
        }
      },
      "npm:ansi-styles@3.2.1": {
        "map": {
          "color-convert": "npm:color-convert@1.9.1"
        }
      },
      "npm:is-number@2.1.0": {
        "map": {
          "kind-of": "npm:kind-of@3.2.2"
        }
      },
      "npm:randomatic@3.0.0": {
        "map": {
          "is-number": "npm:is-number@4.0.0",
          "kind-of": "npm:kind-of@6.0.2",
          "math-random": "npm:math-random@1.0.1"
        }
      },
      "npm:isobject@2.1.0": {
        "map": {
          "isarray": "npm:isarray@1.0.0"
        }
      },
      "npm:color-convert@1.9.1": {
        "map": {
          "color-name": "npm:color-name@1.1.3"
        }
      },
      "npm:babel-jest@22.4.3": {
        "map": {
          "babel-plugin-istanbul": "npm:babel-plugin-istanbul@4.1.6",
          "babel-preset-jest": "npm:babel-preset-jest@22.4.3"
        }
      },
      "npm:babel-plugin-istanbul@4.1.6": {
        "map": {
          "find-up": "npm:find-up@2.1.0",
          "istanbul-lib-instrument": "npm:istanbul-lib-instrument@1.10.1",
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0",
          "test-exclude": "npm:test-exclude@4.2.1"
        }
      },
      "npm:babel-preset-jest@22.4.3": {
        "map": {
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0",
          "babel-plugin-jest-hoist": "npm:babel-plugin-jest-hoist@22.4.3"
        }
      },
      "npm:find-up@2.1.0": {
        "map": {
          "locate-path": "npm:locate-path@2.0.0"
        }
      },
      "npm:istanbul-lib-instrument@1.10.1": {
        "map": {
          "babel-template": "npm:babel-template@6.26.0",
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babylon": "npm:babylon@6.18.0",
          "istanbul-lib-coverage": "npm:istanbul-lib-coverage@1.2.0",
          "babel-generator": "npm:babel-generator@6.26.1",
          "semver": "npm:semver@5.5.0"
        }
      },
      "npm:locate-path@2.0.0": {
        "map": {
          "path-exists": "npm:path-exists@3.0.0",
          "p-locate": "npm:p-locate@2.0.0"
        }
      },
      "npm:babel-template@6.26.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "babylon": "npm:babylon@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "lodash": "npm:lodash@4.17.10"
        }
      },
      "npm:babel-traverse@6.26.0": {
        "map": {
          "babel-types": "npm:babel-types@6.26.0",
          "babylon": "npm:babylon@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "lodash": "npm:lodash@4.17.10",
          "babel-code-frame": "npm:babel-code-frame@6.26.0",
          "globals": "npm:globals@9.18.0",
          "debug": "npm:debug@2.6.8",
          "invariant": "npm:invariant@2.2.4",
          "babel-messages": "npm:babel-messages@6.23.0"
        }
      },
      "npm:babel-types@6.26.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "lodash": "npm:lodash@4.17.10",
          "to-fast-properties": "npm:to-fast-properties@1.0.3",
          "esutils": "npm:esutils@2.0.2"
        }
      },
      "npm:babel-generator@6.26.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.26.0",
          "lodash": "npm:lodash@4.17.10",
          "detect-indent": "npm:detect-indent@4.0.0",
          "source-map": "npm:source-map@0.5.7",
          "trim-right": "npm:trim-right@1.0.1",
          "babel-messages": "npm:babel-messages@6.23.0",
          "jsesc": "npm:jsesc@1.3.0"
        }
      },
      "npm:babel-code-frame@6.26.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "chalk": "npm:chalk@1.1.3",
          "js-tokens": "npm:js-tokens@3.0.2"
        }
      },
      "npm:p-locate@2.0.0": {
        "map": {
          "p-limit": "npm:p-limit@1.2.0"
        }
      },
      "npm:test-exclude@4.2.1": {
        "map": {
          "arrify": "npm:arrify@1.0.1",
          "require-main-filename": "npm:require-main-filename@1.0.1",
          "object-assign": "npm:object-assign@4.1.1",
          "micromatch": "npm:micromatch@3.1.10",
          "read-pkg-up": "npm:read-pkg-up@1.0.1"
        }
      },
      "npm:babel-messages@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-runtime@6.26.0": {
        "map": {
          "regenerator-runtime": "npm:regenerator-runtime@0.11.1",
          "core-js": "npm:core-js@2.5.6"
        }
      },
      "npm:p-limit@1.2.0": {
        "map": {
          "p-try": "npm:p-try@1.0.0"
        }
      },
      "npm:micromatch@3.1.10": {
        "map": {
          "arr-diff": "npm:arr-diff@4.0.0",
          "array-unique": "npm:array-unique@0.3.2",
          "braces": "npm:braces@2.3.2",
          "define-property": "npm:define-property@2.0.2",
          "extend-shallow": "npm:extend-shallow@3.0.2",
          "extglob": "npm:extglob@2.0.4",
          "fragment-cache": "npm:fragment-cache@0.2.1",
          "nanomatch": "npm:nanomatch@1.2.9",
          "object.pick": "npm:object.pick@1.3.0",
          "regex-not": "npm:regex-not@1.0.2",
          "snapdragon": "npm:snapdragon@0.8.2",
          "to-regex": "npm:to-regex@3.0.2",
          "kind-of": "npm:kind-of@6.0.2"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "has-ansi": "npm:has-ansi@2.0.0",
          "supports-color": "npm:supports-color@2.0.0",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "ansi-styles": "npm:ansi-styles@2.2.1"
        }
      },
      "npm:braces@2.3.2": {
        "map": {
          "extend-shallow": "npm:extend-shallow@2.0.1",
          "array-unique": "npm:array-unique@0.3.2",
          "snapdragon": "npm:snapdragon@0.8.2",
          "to-regex": "npm:to-regex@3.0.2",
          "isobject": "npm:isobject@3.0.1",
          "snapdragon-node": "npm:snapdragon-node@2.1.1",
          "split-string": "npm:split-string@3.1.0",
          "fill-range": "npm:fill-range@4.0.0",
          "arr-flatten": "npm:arr-flatten@1.1.0",
          "repeat-element": "npm:repeat-element@1.1.2"
        }
      },
      "npm:extglob@2.0.4": {
        "map": {
          "define-property": "npm:define-property@1.0.0",
          "extend-shallow": "npm:extend-shallow@2.0.1",
          "array-unique": "npm:array-unique@0.3.2",
          "fragment-cache": "npm:fragment-cache@0.2.1",
          "regex-not": "npm:regex-not@1.0.2",
          "snapdragon": "npm:snapdragon@0.8.2",
          "to-regex": "npm:to-regex@3.0.2",
          "expand-brackets": "npm:expand-brackets@2.1.4"
        }
      },
      "npm:nanomatch@1.2.9": {
        "map": {
          "arr-diff": "npm:arr-diff@4.0.0",
          "array-unique": "npm:array-unique@0.3.2",
          "define-property": "npm:define-property@2.0.2",
          "extend-shallow": "npm:extend-shallow@3.0.2",
          "fragment-cache": "npm:fragment-cache@0.2.1",
          "kind-of": "npm:kind-of@6.0.2",
          "object.pick": "npm:object.pick@1.3.0",
          "regex-not": "npm:regex-not@1.0.2",
          "snapdragon": "npm:snapdragon@0.8.2",
          "to-regex": "npm:to-regex@3.0.2",
          "is-odd": "npm:is-odd@2.0.0",
          "is-windows": "npm:is-windows@1.0.2"
        }
      },
      "npm:detect-indent@4.0.0": {
        "map": {
          "repeating": "npm:repeating@2.0.1"
        }
      },
      "npm:regex-not@1.0.2": {
        "map": {
          "extend-shallow": "npm:extend-shallow@3.0.2",
          "safe-regex": "npm:safe-regex@1.1.0"
        }
      },
      "npm:define-property@2.0.2": {
        "map": {
          "isobject": "npm:isobject@3.0.1",
          "is-descriptor": "npm:is-descriptor@1.0.2"
        }
      },
      "npm:object.pick@1.3.0": {
        "map": {
          "isobject": "npm:isobject@3.0.1"
        }
      },
      "npm:extend-shallow@3.0.2": {
        "map": {
          "assign-symbols": "npm:assign-symbols@1.0.0",
          "is-extendable": "npm:is-extendable@1.0.1"
        }
      },
      "npm:fragment-cache@0.2.1": {
        "map": {
          "map-cache": "npm:map-cache@0.2.2"
        }
      },
      "npm:snapdragon@0.8.2": {
        "map": {
          "define-property": "npm:define-property@0.2.5",
          "debug": "npm:debug@2.6.8",
          "extend-shallow": "npm:extend-shallow@2.0.1",
          "map-cache": "npm:map-cache@0.2.2",
          "source-map": "npm:source-map@0.5.7",
          "source-map-resolve": "npm:source-map-resolve@0.5.2",
          "use": "npm:use@3.1.0",
          "base": "npm:base@0.11.2"
        }
      },
      "npm:read-pkg-up@1.0.1": {
        "map": {
          "find-up": "npm:find-up@1.1.2",
          "read-pkg": "npm:read-pkg@1.1.0"
        }
      },
      "npm:to-regex@3.0.2": {
        "map": {
          "regex-not": "npm:regex-not@1.0.2",
          "define-property": "npm:define-property@2.0.2",
          "extend-shallow": "npm:extend-shallow@3.0.2",
          "safe-regex": "npm:safe-regex@1.1.0"
        }
      },
      "npm:extend-shallow@2.0.1": {
        "map": {
          "is-extendable": "npm:is-extendable@0.1.1"
        }
      },
      "npm:define-property@1.0.0": {
        "map": {
          "is-descriptor": "npm:is-descriptor@1.0.2"
        }
      },
      "npm:snapdragon-node@2.1.1": {
        "map": {
          "define-property": "npm:define-property@1.0.0",
          "isobject": "npm:isobject@3.0.1",
          "snapdragon-util": "npm:snapdragon-util@3.0.1"
        }
      },
      "npm:split-string@3.1.0": {
        "map": {
          "extend-shallow": "npm:extend-shallow@3.0.2"
        }
      },
      "npm:fill-range@4.0.0": {
        "map": {
          "extend-shallow": "npm:extend-shallow@2.0.1",
          "to-regex-range": "npm:to-regex-range@2.1.1",
          "is-number": "npm:is-number@3.0.0",
          "repeat-string": "npm:repeat-string@1.6.1"
        }
      },
      "npm:define-property@0.2.5": {
        "map": {
          "is-descriptor": "npm:is-descriptor@0.1.6"
        }
      },
      "npm:find-up@1.1.2": {
        "map": {
          "path-exists": "npm:path-exists@2.1.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:expand-brackets@2.1.4": {
        "map": {
          "debug": "npm:debug@2.6.8",
          "define-property": "npm:define-property@0.2.5",
          "regex-not": "npm:regex-not@1.0.2",
          "snapdragon": "npm:snapdragon@0.8.2",
          "to-regex": "npm:to-regex@3.0.2",
          "extend-shallow": "npm:extend-shallow@2.0.1",
          "posix-character-classes": "npm:posix-character-classes@0.1.1"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:repeating@2.0.1": {
        "map": {
          "is-finite": "npm:is-finite@1.0.2"
        }
      },
      "npm:is-odd@2.0.0": {
        "map": {
          "is-number": "npm:is-number@4.0.0"
        }
      },
      "npm:is-descriptor@1.0.2": {
        "map": {
          "kind-of": "npm:kind-of@6.0.2",
          "is-accessor-descriptor": "npm:is-accessor-descriptor@1.0.0",
          "is-data-descriptor": "npm:is-data-descriptor@1.0.0"
        }
      },
      "npm:is-extendable@1.0.1": {
        "map": {
          "is-plain-object": "npm:is-plain-object@2.0.4"
        }
      },
      "npm:is-descriptor@0.1.6": {
        "map": {
          "kind-of": "npm:kind-of@5.1.0",
          "is-accessor-descriptor": "npm:is-accessor-descriptor@0.1.6",
          "is-data-descriptor": "npm:is-data-descriptor@0.1.4"
        }
      },
      "npm:use@3.1.0": {
        "map": {
          "kind-of": "npm:kind-of@6.0.2"
        }
      },
      "npm:path-exists@2.1.0": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:safe-regex@1.1.0": {
        "map": {
          "ret": "npm:ret@0.1.15"
        }
      },
      "npm:source-map-resolve@0.5.2": {
        "map": {
          "decode-uri-component": "npm:decode-uri-component@0.2.0",
          "atob": "npm:atob@2.1.1",
          "source-map-url": "npm:source-map-url@0.4.0",
          "resolve-url": "npm:resolve-url@0.2.1",
          "urix": "npm:urix@0.1.0"
        }
      },
      "npm:snapdragon-util@3.0.1": {
        "map": {
          "kind-of": "npm:kind-of@3.2.2"
        }
      },
      "npm:to-regex-range@2.1.1": {
        "map": {
          "is-number": "npm:is-number@3.0.0",
          "repeat-string": "npm:repeat-string@1.6.1"
        }
      },
      "npm:read-pkg@1.1.0": {
        "map": {
          "load-json-file": "npm:load-json-file@1.1.0",
          "normalize-package-data": "npm:normalize-package-data@2.4.0",
          "path-type": "npm:path-type@1.1.0"
        }
      },
      "npm:is-number@3.0.0": {
        "map": {
          "kind-of": "npm:kind-of@3.2.2"
        }
      },
      "npm:is-plain-object@2.0.4": {
        "map": {
          "isobject": "npm:isobject@3.0.1"
        }
      },
      "npm:is-accessor-descriptor@1.0.0": {
        "map": {
          "kind-of": "npm:kind-of@6.0.2"
        }
      },
      "npm:is-accessor-descriptor@0.1.6": {
        "map": {
          "kind-of": "npm:kind-of@3.2.2"
        }
      },
      "npm:is-data-descriptor@1.0.0": {
        "map": {
          "kind-of": "npm:kind-of@6.0.2"
        }
      },
      "npm:is-data-descriptor@0.1.4": {
        "map": {
          "kind-of": "npm:kind-of@3.2.2"
        }
      },
      "npm:is-finite@1.0.2": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.1"
        }
      },
      "npm:load-json-file@1.1.0": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "parse-json": "npm:parse-json@2.2.0",
          "pify": "npm:pify@2.3.0",
          "strip-bom": "npm:strip-bom@2.0.0",
          "graceful-fs": "npm:graceful-fs@4.1.11"
        }
      },
      "npm:pinkie-promise@2.0.1": {
        "map": {
          "pinkie": "npm:pinkie@2.0.4"
        }
      },
      "npm:normalize-package-data@2.4.0": {
        "map": {
          "semver": "npm:semver@5.5.0",
          "hosted-git-info": "npm:hosted-git-info@2.6.0",
          "is-builtin-module": "npm:is-builtin-module@1.0.0",
          "validate-npm-package-license": "npm:validate-npm-package-license@3.0.3"
        }
      },
      "npm:path-type@1.1.0": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "pify": "npm:pify@2.3.0",
          "graceful-fs": "npm:graceful-fs@4.1.11"
        }
      },
      "npm:parse-json@2.2.0": {
        "map": {
          "error-ex": "npm:error-ex@1.3.1"
        }
      },
      "npm:strip-bom@2.0.0": {
        "map": {
          "is-utf8": "npm:is-utf8@0.2.1"
        }
      },
      "npm:is-builtin-module@1.0.0": {
        "map": {
          "builtin-modules": "npm:builtin-modules@1.1.1"
        }
      },
      "npm:validate-npm-package-license@3.0.3": {
        "map": {
          "spdx-correct": "npm:spdx-correct@3.0.0",
          "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0"
        }
      },
      "npm:base@0.11.2": {
        "map": {
          "define-property": "npm:define-property@1.0.0",
          "isobject": "npm:isobject@3.0.1",
          "cache-base": "npm:cache-base@1.0.1",
          "class-utils": "npm:class-utils@0.3.6",
          "component-emitter": "npm:component-emitter@1.2.1",
          "mixin-deep": "npm:mixin-deep@1.3.1",
          "pascalcase": "npm:pascalcase@0.1.1"
        }
      },
      "npm:spdx-correct@3.0.0": {
        "map": {
          "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0",
          "spdx-license-ids": "npm:spdx-license-ids@3.0.0"
        }
      },
      "npm:error-ex@1.3.1": {
        "map": {
          "is-arrayish": "npm:is-arrayish@0.2.1"
        }
      },
      "npm:spdx-expression-parse@3.0.0": {
        "map": {
          "spdx-license-ids": "npm:spdx-license-ids@3.0.0",
          "spdx-exceptions": "npm:spdx-exceptions@2.1.0"
        }
      },
      "npm:cache-base@1.0.1": {
        "map": {
          "component-emitter": "npm:component-emitter@1.2.1",
          "isobject": "npm:isobject@3.0.1",
          "collection-visit": "npm:collection-visit@1.0.0",
          "get-value": "npm:get-value@2.0.6",
          "has-value": "npm:has-value@1.0.0",
          "set-value": "npm:set-value@2.0.0",
          "to-object-path": "npm:to-object-path@0.3.0",
          "union-value": "npm:union-value@1.0.0",
          "unset-value": "npm:unset-value@1.0.0"
        }
      },
      "npm:class-utils@0.3.6": {
        "map": {
          "define-property": "npm:define-property@0.2.5",
          "isobject": "npm:isobject@3.0.1",
          "arr-union": "npm:arr-union@3.1.0",
          "static-extend": "npm:static-extend@0.1.2"
        }
      },
      "npm:mixin-deep@1.3.1": {
        "map": {
          "is-extendable": "npm:is-extendable@1.0.1",
          "for-in": "npm:for-in@1.0.2"
        }
      },
      "npm:union-value@1.0.0": {
        "map": {
          "set-value": "npm:set-value@0.4.3",
          "arr-union": "npm:arr-union@3.1.0",
          "get-value": "npm:get-value@2.0.6",
          "is-extendable": "npm:is-extendable@0.1.1"
        }
      },
      "npm:unset-value@1.0.0": {
        "map": {
          "has-value": "npm:has-value@0.3.1",
          "isobject": "npm:isobject@3.0.1"
        }
      },
      "npm:has-value@1.0.0": {
        "map": {
          "get-value": "npm:get-value@2.0.6",
          "isobject": "npm:isobject@3.0.1",
          "has-values": "npm:has-values@1.0.0"
        }
      },
      "npm:set-value@2.0.0": {
        "map": {
          "extend-shallow": "npm:extend-shallow@2.0.1",
          "is-extendable": "npm:is-extendable@0.1.1",
          "is-plain-object": "npm:is-plain-object@2.0.4",
          "split-string": "npm:split-string@3.1.0"
        }
      },
      "npm:to-object-path@0.3.0": {
        "map": {
          "kind-of": "npm:kind-of@3.2.2"
        }
      },
      "npm:collection-visit@1.0.0": {
        "map": {
          "map-visit": "npm:map-visit@1.0.0",
          "object-visit": "npm:object-visit@1.0.1"
        }
      },
      "npm:static-extend@0.1.2": {
        "map": {
          "define-property": "npm:define-property@0.2.5",
          "object-copy": "npm:object-copy@0.1.0"
        }
      },
      "npm:set-value@0.4.3": {
        "map": {
          "extend-shallow": "npm:extend-shallow@2.0.1",
          "is-extendable": "npm:is-extendable@0.1.1",
          "is-plain-object": "npm:is-plain-object@2.0.4",
          "to-object-path": "npm:to-object-path@0.3.0"
        }
      },
      "npm:has-value@0.3.1": {
        "map": {
          "get-value": "npm:get-value@2.0.6",
          "isobject": "npm:isobject@2.1.0",
          "has-values": "npm:has-values@0.1.4"
        }
      },
      "npm:map-visit@1.0.0": {
        "map": {
          "object-visit": "npm:object-visit@1.0.1"
        }
      },
      "npm:has-values@1.0.0": {
        "map": {
          "kind-of": "npm:kind-of@4.0.0",
          "is-number": "npm:is-number@3.0.0"
        }
      },
      "npm:object-visit@1.0.1": {
        "map": {
          "isobject": "npm:isobject@3.0.1"
        }
      },
      "npm:kind-of@4.0.0": {
        "map": {
          "is-buffer": "npm:is-buffer@1.1.6"
        }
      },
      "npm:object-copy@0.1.0": {
        "map": {
          "define-property": "npm:define-property@0.2.5",
          "kind-of": "npm:kind-of@3.2.2",
          "copy-descriptor": "npm:copy-descriptor@0.1.1"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "noImplicitAny": true,
    "tsconfig": true
  },
  packages: {
    "jspm-typescript-react-boilerplate": {
      "main": "server.js",
      "defaultExtension": "ts",
      "format": "esm",
      "meta": {
        "*.tsx": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "dotenv": "npm:dotenv@4.0.0",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@15.6.1",
    "react-dom": "npm:react-dom@15.6.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.1.0"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.7",
        "elliptic": "npm:elliptic@6.4.0",
        "parse-asn1": "npm:parse-asn1@5.1.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:react@15.6.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.14",
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.5.10",
        "create-react-class": "npm:create-react-class@15.6.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:react-dom@15.6.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.14",
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.5.10",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:fbjs@0.8.14": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.3.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.14",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1"
      }
    },
    "npm:prop-types@15.5.10": {
      "map": {
        "fbjs": "npm:fbjs@0.8.14",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:create-react-class@15.6.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.14",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
        "node-fetch": "npm:node-fetch@1.7.2"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
      }
    },
    "npm:node-fetch@1.7.2": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.18"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:buffer@5.1.0": {
      "map": {
        "ieee754": "npm:ieee754@1.1.11",
        "base64-js": "npm:base64-js@1.3.0"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "randomfill": "npm:randomfill@1.0.4",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "create-hmac": "npm:create-hmac@1.1.7",
        "diffie-hellman": "npm:diffie-hellman@5.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.3",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "sha.js": "npm:sha.js@2.4.11",
        "ripemd160": "npm:ripemd160@2.0.2",
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:public-encrypt@4.0.2": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "parse-asn1": "npm:parse-asn1@5.1.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:pbkdf2@3.0.16": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "browserify-des": "npm:browserify-des@1.0.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "cipher-base": "npm:cipher-base@1.0.4",
        "md5.js": "npm:md5.js@1.3.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-asn1@5.1.1": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "asn1.js": "npm:asn1.js@4.10.1"
      }
    },
    "npm:create-ecdh@4.0.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:browserify-des@1.0.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "md5.js": "npm:md5.js@1.3.4",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "process-nextick-args": "npm:process-nextick-args@2.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "string_decoder": "npm:string_decoder@1.1.1"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:randombytes@2.0.6": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    }
  }
});
