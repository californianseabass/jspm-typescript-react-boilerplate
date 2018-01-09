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
      "main": "server.js",
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
    "csv-parse": "npm:csv-parse@2.0.0",
    "d3": "npm:d3@4.12.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "lodash": "npm:lodash@4.17.4",
    "moment": "npm:moment@2.20.1",
    "ndjson": "npm:ndjson@1.5.0",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@15.6.1",
    "react-dom": "npm:react-dom@15.6.1",
    "react-faux-dom": "npm:react-faux-dom@4.1.0",
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
        "buffer": "npm:buffer@5.0.8"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.9",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-aes": "npm:browserify-aes@1.1.1"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "elliptic": "npm:elliptic@6.4.0",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "sha.js": "npm:sha.js@2.4.9",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
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
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "asn1.js": "npm:asn1.js@4.9.2",
        "browserify-aes": "npm:browserify-aes@1.1.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.5"
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
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "hash-base": "npm:hash-base@2.0.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:react@15.6.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.6.0",
        "create-react-class": "npm:create-react-class@15.6.2",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:react-dom@15.6.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.6.0",
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
        "node-fetch": "npm:node-fetch@1.7.3"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
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
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.19"
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
        "readable-stream": "npm:readable-stream@2.3.3",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:d3@4.12.0": {
      "map": {
        "d3-chord": "npm:d3-chord@1.0.4",
        "d3-brush": "npm:d3-brush@1.0.4",
        "d3-collection": "npm:d3-collection@1.0.4",
        "d3-color": "npm:d3-color@1.0.3",
        "d3-drag": "npm:d3-drag@1.2.1",
        "d3-dispatch": "npm:d3-dispatch@1.0.3",
        "d3-dsv": "npm:d3-dsv@1.0.8",
        "d3-array": "npm:d3-array@1.2.1",
        "d3-format": "npm:d3-format@1.2.1",
        "d3-ease": "npm:d3-ease@1.0.3",
        "d3-axis": "npm:d3-axis@1.0.8",
        "d3-force": "npm:d3-force@1.1.0",
        "d3-queue": "npm:d3-queue@3.0.7",
        "d3-interpolate": "npm:d3-interpolate@1.1.6",
        "d3-random": "npm:d3-random@1.1.0",
        "d3-geo": "npm:d3-geo@1.9.0",
        "d3-hierarchy": "npm:d3-hierarchy@1.1.5",
        "d3-quadtree": "npm:d3-quadtree@1.0.3",
        "d3-polygon": "npm:d3-polygon@1.0.3",
        "d3-request": "npm:d3-request@1.0.6",
        "d3-shape": "npm:d3-shape@1.2.0",
        "d3-voronoi": "npm:d3-voronoi@1.1.2",
        "d3-timer": "npm:d3-timer@1.0.7",
        "d3-scale": "npm:d3-scale@1.0.7",
        "d3-time": "npm:d3-time@1.0.8",
        "d3-zoom": "npm:d3-zoom@1.7.1",
        "d3-transition": "npm:d3-transition@1.1.1",
        "d3-selection": "npm:d3-selection@1.2.0",
        "d3-time-format": "npm:d3-time-format@2.1.1",
        "d3-path": "npm:d3-path@1.0.5"
      }
    },
    "npm:d3-chord@1.0.4": {
      "map": {
        "d3-array": "npm:d3-array@1.2.1",
        "d3-path": "npm:d3-path@1.0.5"
      }
    },
    "npm:d3-brush@1.0.4": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@1.0.3",
        "d3-drag": "npm:d3-drag@1.2.1",
        "d3-interpolate": "npm:d3-interpolate@1.1.6",
        "d3-transition": "npm:d3-transition@1.1.1",
        "d3-selection": "npm:d3-selection@1.2.0"
      }
    },
    "npm:d3-drag@1.2.1": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@1.0.3",
        "d3-selection": "npm:d3-selection@1.2.0"
      }
    },
    "npm:d3-force@1.1.0": {
      "map": {
        "d3-collection": "npm:d3-collection@1.0.4",
        "d3-dispatch": "npm:d3-dispatch@1.0.3",
        "d3-quadtree": "npm:d3-quadtree@1.0.3",
        "d3-timer": "npm:d3-timer@1.0.7"
      }
    },
    "npm:d3-dsv@1.0.8": {
      "map": {
        "commander": "npm:commander@2.12.2",
        "rw": "npm:rw@1.3.3",
        "iconv-lite": "npm:iconv-lite@0.4.19"
      }
    },
    "npm:d3-interpolate@1.1.6": {
      "map": {
        "d3-color": "npm:d3-color@1.0.3"
      }
    },
    "npm:d3-geo@1.9.0": {
      "map": {
        "d3-array": "npm:d3-array@1.2.1"
      }
    },
    "npm:d3-request@1.0.6": {
      "map": {
        "d3-collection": "npm:d3-collection@1.0.4",
        "d3-dispatch": "npm:d3-dispatch@1.0.3",
        "d3-dsv": "npm:d3-dsv@1.0.8",
        "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
      }
    },
    "npm:d3-scale@1.0.7": {
      "map": {
        "d3-array": "npm:d3-array@1.2.1",
        "d3-collection": "npm:d3-collection@1.0.4",
        "d3-color": "npm:d3-color@1.0.3",
        "d3-format": "npm:d3-format@1.2.1",
        "d3-interpolate": "npm:d3-interpolate@1.1.6",
        "d3-time": "npm:d3-time@1.0.8",
        "d3-time-format": "npm:d3-time-format@2.1.1"
      }
    },
    "npm:d3-zoom@1.7.1": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@1.0.3",
        "d3-drag": "npm:d3-drag@1.2.1",
        "d3-interpolate": "npm:d3-interpolate@1.1.6",
        "d3-transition": "npm:d3-transition@1.1.1",
        "d3-selection": "npm:d3-selection@1.2.0"
      }
    },
    "npm:d3-transition@1.1.1": {
      "map": {
        "d3-color": "npm:d3-color@1.0.3",
        "d3-dispatch": "npm:d3-dispatch@1.0.3",
        "d3-ease": "npm:d3-ease@1.0.3",
        "d3-interpolate": "npm:d3-interpolate@1.1.6",
        "d3-timer": "npm:d3-timer@1.0.7",
        "d3-selection": "npm:d3-selection@1.2.0"
      }
    },
    "npm:d3-time-format@2.1.1": {
      "map": {
        "d3-time": "npm:d3-time@1.0.8"
      }
    },
    "npm:buffer@5.0.8": {
      "map": {
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:d3-shape@1.2.0": {
      "map": {
        "d3-path": "npm:d3-path@1.0.5"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "randomfill": "npm:randomfill@1.0.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.3",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.5",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "browserify-sign": "npm:browserify-sign@4.0.4"
      }
    },
    "npm:randomfill@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9"
      }
    },
    "npm:sha.js@2.4.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-aes@1.1.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:asn1.js@4.9.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:react-faux-dom@4.1.0": {
      "map": {
        "create-react-class": "npm:create-react-class@15.6.2",
        "query-selector": "npm:query-selector@1.0.9",
        "style-attr": "npm:style-attr@1.3.0"
      }
    },
    "npm:create-react-class@15.6.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "loose-envify": "npm:loose-envify@1.3.1",
        "fbjs": "npm:fbjs@0.8.16"
      }
    },
    "npm:prop-types@15.6.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.16"
      }
    },
    "npm:fbjs@0.8.16": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.3.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.17",
        "core-js": "npm:core-js@1.2.7"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:ndjson@1.5.0": {
      "map": {
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "split2": "npm:split2@2.2.0",
        "minimist": "npm:minimist@1.2.0",
        "through2": "npm:through2@2.0.3"
      }
    },
    "npm:split2@2.2.0": {
      "map": {
        "through2": "npm:through2@2.0.3"
      }
    },
    "npm:through2@2.0.3": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    }
  }
});
