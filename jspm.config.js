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
      "module": "npm:jspm-nodelibs-module@0.2.1",
      "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0",
      "express": "npm:express@4.15.4",
      "querystring": "npm:jspm-nodelibs-querystring@0.2.2"
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
      "main": "server.tsx",
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
    "bcryptjs": "npm:bcryptjs@2.4.3",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "dotenv": "npm:dotenv@4.0.0",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "jss": "npm:jss@9.8.1",
    "material-ui": "npm:material-ui@next",
    "mobx": "npm:mobx@4.2.0",
    "mobx-react": "npm:mobx-react@5.0.0",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "passport": "npm:passport@0.4.0",
    "passport-local": "npm:passport-local@1.0.0",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "pg": "npm:pg@7.4.1",
    "pg-native": "npm:pg-native@2.2.0",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@16.3.2",
    "react-dom": "npm:react-dom@16.3.2",
    "react-jss": "npm:react-jss@8.4.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
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
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4",
        "node-fetch": "npm:node-fetch@1.7.3"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.2.0"
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
        "iconv-lite": "npm:iconv-lite@0.4.21"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.1"
      }
    },
    "npm:passport@0.4.0": {
      "map": {
        "passport-strategy": "npm:passport-strategy@1.0.0",
        "pause": "npm:pause@0.0.1"
      }
    },
    "npm:stream-http@2.8.1": {
      "map": {
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "readable-stream": "npm:readable-stream@2.3.6",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "inherits": "npm:inherits@2.0.3",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@1.1.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@2.0.0"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:buffer@5.1.0": {
      "map": {
        "base64-js": "npm:base64-js@1.3.0",
        "ieee754": "npm:ieee754@1.1.11"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "randomfill": "npm:randomfill@1.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "diffie-hellman": "npm:diffie-hellman@5.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "public-encrypt": "npm:public-encrypt@4.0.2",
        "create-ecdh": "npm:create-ecdh@4.0.1",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:pbkdf2@3.0.16": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.3"
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
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-des": "npm:browserify-des@1.0.1",
        "browserify-aes": "npm:browserify-aes@1.2.0"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:public-encrypt@4.0.2": {
      "map": {
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.2.0",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.1",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "md5.js": "npm:md5.js@1.3.4",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:browserify-des@1.0.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
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
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
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
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:create-ecdh@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:randombytes@2.0.6": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:react-jss@8.4.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "prop-types": "npm:prop-types@15.6.1",
        "jss": "npm:jss@9.8.1",
        "jss-preset-default": "npm:jss-preset-default@4.3.0",
        "theming": "npm:theming@1.3.0"
      }
    },
    "npm:prop-types@15.6.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "fbjs": "npm:fbjs@0.8.16",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:fbjs@0.8.16": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "core-js": "npm:core-js@1.2.7",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "ua-parser-js": "npm:ua-parser-js@0.7.17"
      }
    },
    "npm:jss@9.8.1": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "warning": "npm:warning@3.0.0",
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:jss-preset-default@4.3.0": {
      "map": {
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "jss-global": "npm:jss-global@3.0.0",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "jss-nested": "npm:jss-nested@6.0.1",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "jss-compose": "npm:jss-compose@5.0.0",
        "jss-template": "npm:jss-template@1.0.1",
        "jss-expand": "npm:jss-expand@5.1.0",
        "jss-extend": "npm:jss-extend@6.2.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:theming@1.3.0": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "brcast": "npm:brcast@3.0.1",
        "is-plain-object": "npm:is-plain-object@2.0.4",
        "is-function": "npm:is-function@1.0.1"
      }
    },
    "npm:jss-nested@6.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-compose@5.0.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-template@1.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-camel-case@6.1.0": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2"
      }
    },
    "npm:jss-vendor-prefixer@7.0.0": {
      "map": {
        "css-vendor": "npm:css-vendor@0.3.8"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:css-vendor@0.3.8": {
      "map": {
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:jss-extend@6.2.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:is-plain-object@2.0.4": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:iconv-lite@0.4.21": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:material-ui@next": {
      "map": {
        "dom-helpers": "npm:dom-helpers@3.3.1",
        "classnames": "npm:classnames@2.2.5",
        "normalize-scroll-left": "npm:normalize-scroll-left@0.1.2",
        "deepmerge": "npm:deepmerge@2.1.0",
        "react-event-listener": "npm:react-event-listener@0.5.3",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@2.0.2",
        "lodash": "npm:lodash@4.17.10",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "react-scrollbar-size": "npm:react-scrollbar-size@2.1.0",
        "react-transition-group": "npm:react-transition-group@2.3.1",
        "scroll": "npm:scroll@2.0.3",
        "recompose": "npm:recompose@0.27.0",
        "react-popper": "npm:react-popper@0.10.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "brcast": "npm:brcast@3.0.1",
        "jss-nested": "npm:jss-nested@6.0.1",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "jss-global": "npm:jss-global@3.0.0",
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "warning": "npm:warning@3.0.0",
        "react-jss": "npm:react-jss@8.4.0",
        "jss": "npm:jss@9.8.1",
        "@types/react-transition-group": "npm:@types/react-transition-group@2.0.9",
        "@types/jss": "npm:@types/jss@9.5.2",
        "keycode": "npm:keycode@2.2.0",
        "prop-types": "npm:prop-types@15.6.1",
        "@babel/runtime": "npm:@babel/runtime@7.0.0-beta.49"
      }
    },
    "npm:react-transition-group@2.3.1": {
      "map": {
        "dom-helpers": "npm:dom-helpers@3.3.1",
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:recompose@0.27.0": {
      "map": {
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.2",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "change-emitter": "npm:change-emitter@0.1.6",
        "fbjs": "npm:fbjs@0.8.16",
        "symbol-observable": "npm:symbol-observable@1.2.0"
      }
    },
    "npm:react-event-listener@0.5.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "warning": "npm:warning@3.0.0",
        "fbjs": "npm:fbjs@0.8.16",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:react-scrollbar-size@2.1.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "react-event-listener": "npm:react-event-listener@0.5.3",
        "stifle": "npm:stifle@1.0.4",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:react-popper@0.10.1": {
      "map": {
        "popper.js": "npm:popper.js@1.14.3",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "core-js": "npm:core-js@2.5.7",
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
      }
    },
    "npm:scroll@2.0.3": {
      "map": {
        "rafl": "npm:rafl@1.2.2"
      }
    },
    "npm:@types/react-transition-group@2.0.9": {
      "map": {
        "@types/react": "npm:@types/react@16.3.13"
      }
    },
    "npm:@types/jss@9.5.2": {
      "map": {
        "indefinite-observable": "npm:indefinite-observable@1.0.1",
        "csstype": "npm:csstype@2.4.2"
      }
    },
    "npm:@types/react@16.3.13": {
      "map": {
        "csstype": "npm:csstype@2.4.2"
      }
    },
    "npm:rafl@1.2.2": {
      "map": {
        "global": "npm:global@4.3.2"
      }
    },
    "npm:indefinite-observable@1.0.1": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:global@4.3.2": {
      "map": {
        "min-document": "npm:min-document@2.19.0",
        "node-min-document": "npm:min-document@2.19.0",
        "process": "npm:process@0.5.2"
      }
    },
    "npm:min-document@2.19.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:react@16.3.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:react-dom@16.3.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:pg@7.4.1": {
      "map": {
        "buffer-writer": "npm:buffer-writer@1.0.1",
        "packet-reader": "npm:packet-reader@0.3.1",
        "pg-connection-string": "npm:pg-connection-string@0.1.3",
        "js-string-escape": "npm:js-string-escape@1.0.1",
        "pg-pool": "npm:pg-pool@2.0.3",
        "semver": "npm:semver@4.3.2",
        "pg-types": "npm:pg-types@1.12.1",
        "pgpass": "npm:pgpass@1.0.2"
      }
    },
    "npm:pg-types@1.12.1": {
      "map": {
        "postgres-array": "npm:postgres-array@1.0.2",
        "postgres-bytea": "npm:postgres-bytea@1.0.0",
        "postgres-interval": "npm:postgres-interval@1.1.1",
        "postgres-date": "npm:postgres-date@1.0.3"
      }
    },
    "npm:postgres-interval@1.1.1": {
      "map": {
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:pgpass@1.0.2": {
      "map": {
        "split": "npm:split@1.0.1"
      }
    },
    "npm:split@1.0.1": {
      "map": {
        "through": "npm:through@2.3.8"
      }
    },
    "npm:passport-local@1.0.0": {
      "map": {
        "passport-strategy": "npm:passport-strategy@1.0.0"
      }
    },
    "npm:mobx-react@5.0.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0"
      }
    },
    "npm:pg-native@2.2.0": {
      "map": {
        "libpq": "npm:libpq@1.8.7",
        "pg-types": "npm:pg-types@1.12.1",
        "readable-stream": "npm:readable-stream@1.0.31"
      }
    },
    "npm:libpq@1.8.7": {
      "map": {
        "nan": "npm:nan@2.10.0",
        "bindings": "npm:bindings@1.2.1"
      }
    },
    "npm:readable-stream@1.0.31": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:@babel/runtime@7.0.0-beta.49": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1",
        "core-js": "npm:core-js@2.5.7"
      }
    }
  }
});
