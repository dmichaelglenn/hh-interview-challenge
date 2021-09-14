// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"a9hZE":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "ffcb8b8bf2319df9";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8fVck":[function(require,module,exports) {
var _variables = require("./src/scripts/variables");
var _operations = require("./src/scripts/operations");
var _components = require("./src/scripts/components");
const urlParams = new URLSearchParams(window.location.search);
const adminStatus = urlParams.get('admin');
if (adminStatus === 'yes') document.querySelector('body').classList.add('admin');

},{"./src/scripts/variables":"aRp6g","./src/scripts/operations":"gq2x4","./src/scripts/components":"7u8Xe"}],"aRp6g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baseColorsUrl", ()=>baseColorsUrl
);
parcelHelpers.export(exports, "perPageCount", ()=>perPageCount
);
parcelHelpers.export(exports, "mainWindow", ()=>mainWindow
);
parcelHelpers.export(exports, "activeWindow", ()=>activeWindow
);
parcelHelpers.export(exports, "fakeTiles", ()=>fakeTiles
);
parcelHelpers.export(exports, "paginationWrap", ()=>paginationWrap
);
parcelHelpers.export(exports, "swatchTemplate", ()=>swatchTemplate
);
const baseColorsUrl = '/colors';
const perPageCount = 12;
const mainWindow = document.getElementById('main');
const activeWindow = document.getElementById('active-window');
const fakeTiles = document.getElementById('fake-tiles');
const paginationWrap = document.getElementById('pagination');
const swatchTemplate = document.getElementById("swatch-template");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gq2x4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setActiveCollection", ()=>setActiveCollection
);
parcelHelpers.export(exports, "setActiveColor", ()=>setActiveColor
);
parcelHelpers.export(exports, "placeTiles", ()=>placeTiles
);
parcelHelpers.export(exports, "getAllColors", ()=>getAllColors
);
parcelHelpers.export(exports, "getColorsByCategory", ()=>getColorsByCategory
);
parcelHelpers.export(exports, "getRandomColor", ()=>getRandomColor
);
parcelHelpers.export(exports, "getColorByHex", ()=>getColorByHex
);
var _variables = require("./variables");
var _pagination = require("./pagination");
var _activeWindow = require("./components/activeWindow");
function setActiveCollection(newCollection) {
    activeCollection = newCollection;
    _pagination.generatePagination(activeCollection);
}
function setActiveColor(color) {
    activeColor = color;
}
function placeTiles(tiles) {
    _variables.mainWindow.innerHTML = '';
    tiles.forEach((color)=>{
        const tile = _variables.swatchTemplate.content.firstElementChild.cloneNode(true);
        tile.querySelector('.color').style.backgroundColor = `#${color.hex}`;
        tile.querySelector('.label').innerText = `#${color.hex}`;
        tile.dataset.id = color._id;
        tile.dataset.hex = color.hex;
        tile.addEventListener('click', function() {
            _activeWindow.openActiveWindow(color);
        });
        _variables.mainWindow.append(tile);
    });
}
async function getAllColors() {
    let res = await fetch(_variables.baseColorsUrl);
    let colors = await res.json();
    return colors;
}
async function getColorsByCategory(category) {
    let res = await fetch(_variables.baseColorsUrl + `/category/${category}`);
    let colors = await res.json();
    return colors;
}
async function getRandomColor() {
    let res = await fetch(_variables.baseColorsUrl + '/random');
    let color = await res.json();
    return color;
}
async function getColorByHex(hex) {
    if (hex.includes('#')) {
        console.log('removed a hash');
        hex = hex.replace('#', '');
    }
    let res = await fetch(_variables.baseColorsUrl + `/${hex}`);
    let color = await res.json();
    return color;
}

},{"./variables":"aRp6g","./pagination":"4h2OG","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./components/activeWindow":"9PCLO"}],"4h2OG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPaginatedTiles", ()=>getPaginatedTiles
);
parcelHelpers.export(exports, "generatePagination", ()=>generatePagination
);
var _variables = require("./variables");
var _operations = require("./operations");
function getPaginatedTiles(activeCollection, page) {
    let max = _variables.perPageCount * page;
    let min = max - _variables.perPageCount;
    let tiles = [];
    for(var i = min; i < max; i++){
        if (i > activeCollection.length - 1) break;
        tiles.push(activeCollection[i]);
    }
    return tiles;
}
function handlePaginationClick(e) {
    let page = e.target.dataset.page;
    let tiles = getPaginatedTiles(activeCollection, page);
    _variables.paginationWrap.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    _operations.placeTiles(tiles);
}
function generatePagination(activeCollection) {
    let pageCount = Math.ceil(activeCollection.length / _variables.perPageCount);
    _variables.paginationWrap.innerHTML = '';
    for(i = 0; i < pageCount; i++){
        let el = document.createElement('li');
        el.innerText = i + 1;
        el.dataset.page = i + 1;
        el.addEventListener('click', handlePaginationClick);
        if (i === 0) el.classList.add('active');
        _variables.paginationWrap.append(el);
    }
}

},{"./variables":"aRp6g","./operations":"gq2x4","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9PCLO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openActiveWindow", ()=>openActiveWindow
);
var _variables = require("../variables");
var _operations = require("../operations");
var _helpers = require("../helpers");
function generateFakeTile(color) {
    let hex = _helpers.HSLToHex(color.h, color.s, color.l);
    let tile = _variables.swatchTemplate.content.firstElementChild.cloneNode(true);
    tile.querySelector('.color').style.backgroundColor = `#${hex}`;
    tile.querySelector('.label').innerText = `#${hex}`;
    return tile;
}
function generateAndPlaceFakeTiles(baseColor) {
    _variables.fakeTiles.innerHTML = '';
    let tileColors = [
        {
            h: baseColor.h,
            s: baseColor.s,
            l: baseColor.l - 20 > -1 ? baseColor.l - 20 : 0
        },
        {
            h: baseColor.h,
            s: baseColor.s,
            l: baseColor.l - 10 > -1 ? baseColor.l - 10 : 0
        },
        baseColor,
        {
            h: baseColor.h,
            s: baseColor.s,
            l: baseColor.l + 10 < 101 ? baseColor.l + 10 : 100
        },
        {
            h: baseColor.h,
            s: baseColor.s,
            l: baseColor.l + 20 < 101 ? baseColor.l + 20 : 100
        }
    ];
    tileColors.forEach((color)=>{
        let tile = generateFakeTile(color);
        _variables.fakeTiles.append(tile);
    });
}
function openActiveWindow(color) {
    console.log('opening active window for ', color.hex);
    _variables.activeWindow.querySelector('.active-color').style.backgroundColor = `#${color.hex}`;
    _variables.activeWindow.querySelector('.active-label').innerText = `#${color.hex}`;
    generateAndPlaceFakeTiles(color);
    _variables.activeWindow.classList.add('open');
}
function closeActiveWindow() {
    _variables.activeWindow.classList.remove('open');
}
document.getElementById('clear').addEventListener('click', closeActiveWindow);

},{"../variables":"aRp6g","../operations":"gq2x4","../helpers":"i1e5p","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"i1e5p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HSLToHex", ()=>HSLToHex
);
parcelHelpers.export(exports, "hexToHSL", ()=>hexToHSL
);
parcelHelpers.export(exports, "generateRandomHexColor", ()=>generateRandomHexColor
);
parcelHelpers.export(exports, "generateRandomHSL", ()=>generateRandomHSL
);
function HSLToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n)=>{
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix "0" if needed
    };
    return `${f(0)}${f(8)}${f(4)}`;
}
//shamelessly 'borrowed' this function from github. I'm not a plagerizer
function hexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) h = s = 0; // achromatic
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    var HSL = new Object();
    HSL['h'] = h;
    HSL['s'] = s;
    HSL['l'] = l;
    return HSL;
}
function generateRandomHexColor() {
    //also a stack overflow special just fyi
    let n = (Math.random() * 1048575000000).toString(16);
    return n.slice(0, 6);
}
function generateRandomHSL() {
    var h = Math.floor(Math.random() * 361);
    var s = Math.floor(Math.random() * 101);
    var l = Math.floor(Math.random() * 101);
    return {
        h: h,
        s: s,
        l: l
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7u8Xe":[function(require,module,exports) {
var _mainWindow = require("./components/mainWindow");
var _activeWindow = require("./components/activeWindow");
var _sidebar = require("./components/sidebar");
var _colorGenerator = require("./components/colorGenerator");

},{"./components/mainWindow":"iRG7P","./components/activeWindow":"9PCLO","./components/sidebar":"7D917","./components/colorGenerator":"a0c80"}],"iRG7P":[function(require,module,exports) {
var _operations = require("../operations");
var _pagination = require("../pagination");
async function setInitialState() {
    let colors = await _operations.getAllColors();
    _operations.setActiveCollection(colors);
    let tiles = _pagination.getPaginatedTiles(activeCollection, 1);
    _operations.placeTiles(tiles);
}
setInitialState();

},{"../operations":"gq2x4","../pagination":"4h2OG"}],"7D917":[function(require,module,exports) {
var _activeWindow = require("./activeWindow");
var _operations = require("../operations");
var _pagination = require("../pagination");
async function handleCategoryClick(e) {
    let colors = await _operations.getColorsByCategory(e.target.innerText.toLowerCase());
    _operations.setActiveCollection(colors);
    let tiles = _pagination.getPaginatedTiles(activeCollection, 1);
    _operations.placeTiles(tiles);
}
async function handleRandomClick(e) {
    let color = await _operations.getRandomColor();
    _activeWindow.openActiveWindow(color);
}
document.querySelectorAll('.color-category').forEach(function(el) {
    console.log(el);
    el.addEventListener('click', handleCategoryClick);
});
document.getElementById('random').addEventListener('click', handleRandomClick);

},{"./activeWindow":"9PCLO","../operations":"gq2x4","../pagination":"4h2OG"}],"a0c80":[function(require,module,exports) {
var _variables = require("../variables");
var _helpers = require("../helpers");
var _operations = require("../operations");
function generateAndAddRandomColors(count) {
    for(let i = 0; i < count; i++){
        let hsl = _helpers.generateRandomHSL();
        let hex = _helpers.HSLToHex(hsl.h, hsl.s, hsl.l);
        console.log('random hex', hex);
        let exists = _operations.getColorByHex(hex);
        if (exists.length > 0) {
            console.log('ima skip this 1 chief');
            i--;
            continue;
        }
        let data = {
            h: hsl.h,
            s: hsl.s,
            l: hsl.l,
            hex: hex
        };
        fetch(_variables.baseColorsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json()
        ).then((data1)=>{
            console.log('Success:', data1);
        }).catch((error)=>{
            console.error('Error:', error);
        });
    }
}
function handleGeneratorClick() {
    let count = document.getElementById('generator-count').value;
    console.log('going with count', count);
    generateAndAddRandomColors(count);
}
if (document.getElementById('generate-by-count').length > 0) document.getElementById('generate-by-count').addEventListener('click', handleGeneratorClick);
 // export { generateAndAddRandomColors };
 // var randomColor = Math.floor(Math.random()*16777215).toString(16);

},{"../variables":"aRp6g","../helpers":"i1e5p","../operations":"gq2x4"}]},["a9hZE","8fVck"], "8fVck", "parcelRequirefb48")

//# sourceMappingURL=index.f2319df9.js.map
