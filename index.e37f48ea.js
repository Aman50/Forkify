// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esRegexpFlagsJs = require("core-js/modules/es.regexp.flags.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _searchResultsViewJs = require("./views/searchResultsView.js");
var _searchResultsViewJsDefault = parcelHelpers.interopDefault(_searchResultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _uploadRecipeViewJs = require("./views/uploadRecipeView.js");
var _uploadRecipeViewJsDefault = parcelHelpers.interopDefault(_uploadRecipeViewJs);
var _modelJs = require("./model.js");
var _pubSubJs = require("./pubSub.js");
var _pubSubJsDefault = parcelHelpers.interopDefault(_pubSubJs);
var _configJs = require("./config.js");
var _runtime = require("regenerator-runtime/runtime");
// HMR
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipe = async function() {
    try {
        (0, _recipeViewJsDefault.default).renderSpinner();
        const recipeId = window.location.hash.slice(1);
        // Guard clause
        if (!recipeId) {
            (0, _recipeViewJsDefault.default).renderMessage();
            return;
        }
        await _modelJs.fetchRecipe(recipeId);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // If search results, then highlight the active one, else don't render anything
        (0, _searchResultsViewJsDefault.default).update(_modelJs.getResultsForPage());
        //Updating active item in Bookmarks view
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
    } catch (error) {
        (0, _recipeViewJsDefault.default).renderError(error);
    }
};
const controlSearch = async function() {
    try {
        const searchQuery = (0, _searchViewJsDefault.default).getQuery();
        if (!searchQuery) return searchResultsView.renderMessage();
        (0, _searchResultsViewJsDefault.default).renderSpinner();
        await _modelJs.fetchSearchResults(searchQuery);
        (0, _searchResultsViewJsDefault.default).render(_modelJs.getResultsForPage(1));
        (0, _paginationViewJsDefault.default).render(_modelJs.state);
    } catch (error) {
        (0, _searchResultsViewJsDefault.default).renderError();
    }
};
const controlPaginationNewPage = function(newPageNum) {
    (0, _searchResultsViewJsDefault.default).renderSpinner();
    (0, _searchResultsViewJsDefault.default).render(_modelJs.getResultsForPage(newPageNum));
    (0, _paginationViewJsDefault.default).render(_modelJs.state);
};
const controlServings = function(newServingSize) {
    _modelJs.updateServings(newServingSize);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlBookmark = function(recipe) {
    // 1) Toggling bookmark on the recipe
    _modelJs.toggleBookmark(recipe);
    // 2) Updating the recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    // 3) Updating the bookmarks view
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const loadBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlUploadRecipe = async function(dataView) {
    try {
        // 0. Render Spinner
        (0, _uploadRecipeViewJsDefault.default).renderSpinner();
        const data = Object.fromEntries(dataView);
        // 1. Upload recipe
        await _modelJs.uploadRecipe(data);
        // 2. Render recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // 3. Render Success Message
        (0, _uploadRecipeViewJsDefault.default).renderMessage("Upload successful :)");
        // 4. Update bookmarks
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        // 5. Update the ID in the browser
        window.history.pushState("", "", `#${_modelJs.state.recipe.id}`);
        // 6. Close Modal
        setTimeout((e)=>(0, _uploadRecipeViewJsDefault.default).toggleUploadModal(), _configJs.UPLOAD_SUCCESS_CLOSE_TIME * 1000);
    } catch (error) {
        (0, _uploadRecipeViewJsDefault.default).renderError(error);
    }
};
const init = function() {
    [
        "bookmark.load"
    ].forEach((event)=>(0, _pubSubJsDefault.default).subscribe(event, loadBookmarks));
    [
        "recipeView.load",
        "recipeView.hashchange"
    ].forEach((event)=>(0, _pubSubJsDefault.default).subscribe(event, controlRecipe));
    [
        "searchView.submit"
    ].forEach((event)=>(0, _pubSubJsDefault.default).subscribe(event, controlSearch));
    [
        "paginationView.click"
    ].forEach((event)=>(0, _pubSubJsDefault.default).subscribe(event, controlPaginationNewPage));
    [
        "servings.update"
    ].forEach((event)=>(0, _pubSubJsDefault.default).subscribe(event, controlServings));
    [
        "bookmark.click"
    ].forEach((event)=>(0, _pubSubJsDefault.default).subscribe(event, controlBookmark));
    [
        "uploadRecipeView.submit"
    ].forEach((event)=>(0, _pubSubJsDefault.default).subscribe(event, controlUploadRecipe));
};
init();

},{"core-js/modules/es.regexp.flags.js":"gSXXb","core-js/modules/web.immediate.js":"49tUX","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/searchResultsView.js":"cXIN2","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/uploadRecipeView.js":"cc5Cn","./model.js":"Y4A21","./pubSub.js":"8LhNP","./config.js":"k5Hzs","regenerator-runtime/runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSXXb":[function(require,module,exports) {
var global = require("a59ecf44ae875ec7");
var DESCRIPTORS = require("de93e93d6b492d72");
var defineBuiltInAccessor = require("f9deee0caa2b48fc");
var regExpFlags = require("a9e8fc4b87942967");
var fails = require("5c8dd986ada63717");
// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;
var FORCED = DESCRIPTORS && fails(function() {
    var INDICES_SUPPORT = true;
    try {
        RegExp(".", "d");
    } catch (error) {
        INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = "";
    var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
    var addGetter = function(key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
            get: function() {
                calls += chr;
                return true;
            }
        });
    };
    var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    if (INDICES_SUPPORT) pairs.hasIndices = "d";
    for(var key in pairs)addGetter(key, pairs[key]);
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
    return result !== expected || calls !== expected;
});
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, "flags", {
    configurable: true,
    get: regExpFlags
});

},{"a59ecf44ae875ec7":"i8HOC","de93e93d6b492d72":"92ZIi","f9deee0caa2b48fc":"592rH","a9e8fc4b87942967":"9bz1x","5c8dd986ada63717":"hL6D2"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"92ZIi":[function(require,module,exports) {
var fails = require("7571663eb21d041b");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"7571663eb21d041b":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"592rH":[function(require,module,exports) {
var makeBuiltIn = require("5ef68dffd3d8b193");
var defineProperty = require("283b1f4e9d54a144");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"5ef68dffd3d8b193":"cTB4k","283b1f4e9d54a144":"iJR4w"}],"cTB4k":[function(require,module,exports) {
var fails = require("60d670378ab2017f");
var isCallable = require("bfd93074e109d60f");
var hasOwn = require("8616d81ba77ac036");
var DESCRIPTORS = require("7cc1e0cbae7d66c5");
var CONFIGURABLE_FUNCTION_NAME = require("cdc8af6d7ea94f27").CONFIGURABLE;
var inspectSource = require("6ebc34ff30721925");
var InternalStateModule = require("893bf9471aa3ea37");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"60d670378ab2017f":"hL6D2","bfd93074e109d60f":"l3Kyn","8616d81ba77ac036":"gC2Q5","7cc1e0cbae7d66c5":"92ZIi","cdc8af6d7ea94f27":"l6Kgd","6ebc34ff30721925":"9jh7O","893bf9471aa3ea37":"7AMlF"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("3ba06edf1b75b8b7");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"3ba06edf1b75b8b7":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("9f94fc0e6db2a38");
var toObject = require("2f6e958f5de009dc");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"9f94fc0e6db2a38":"7GlkT","2f6e958f5de009dc":"5cb35"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("906733d97b3643b1");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"906733d97b3643b1":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("77891c312066aa3c");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"77891c312066aa3c":"hL6D2"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("c662f3b76860a1f1");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"c662f3b76860a1f1":"fOR0B"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("d0bb660e67057b82");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"d0bb660e67057b82":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("a6a2cfec10be6fe0");
var hasOwn = require("bf06024bd8818d2");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"a6a2cfec10be6fe0":"92ZIi","bf06024bd8818d2":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("ec904fa8d0b52beb");
var isCallable = require("7817284998059322");
var store = require("a5959055004394b7");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"ec904fa8d0b52beb":"7GlkT","7817284998059322":"l3Kyn","a5959055004394b7":"l4ncH"}],"l4ncH":[function(require,module,exports) {
var global = require("43f2e72764aac05");
var defineGlobalProperty = require("a4de2ec9fb260265");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"43f2e72764aac05":"i8HOC","a4de2ec9fb260265":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("c78d0e1e52c7ac5d");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"c78d0e1e52c7ac5d":"i8HOC"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("add82d17bdbc6eae");
var global = require("6832b9dd70fdebe9");
var isObject = require("787274d017a6387f");
var createNonEnumerableProperty = require("7e405bc0b21ab5c8");
var hasOwn = require("82b706f59db65f24");
var shared = require("5fd54f3e5d8a2555");
var sharedKey = require("d1b7be51a0322fa9");
var hiddenKeys = require("6572b5e53f6a28af");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"add82d17bdbc6eae":"2PZTl","6832b9dd70fdebe9":"i8HOC","787274d017a6387f":"Z0pBo","7e405bc0b21ab5c8":"8CL42","82b706f59db65f24":"gC2Q5","5fd54f3e5d8a2555":"l4ncH","d1b7be51a0322fa9":"eAjGz","6572b5e53f6a28af":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("ba036890ba066e53");
var isCallable = require("48fc5432fbc2c141");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"ba036890ba066e53":"i8HOC","48fc5432fbc2c141":"l3Kyn"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("bebf3cac19426cbc");
var $documentAll = require("e8ae8fe468628a70");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"bebf3cac19426cbc":"l3Kyn","e8ae8fe468628a70":"5MHqB"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("aa490507f9958371");
var definePropertyModule = require("a5ebc7d8ba659ac2");
var createPropertyDescriptor = require("4de46a668ef9bff");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"aa490507f9958371":"92ZIi","a5ebc7d8ba659ac2":"iJR4w","4de46a668ef9bff":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("1e24a7747dcdc845");
var IE8_DOM_DEFINE = require("164047d09e43f80b");
var V8_PROTOTYPE_DEFINE_BUG = require("dd1ddcf198148d6b");
var anObject = require("c95fe7e536aa7fab");
var toPropertyKey = require("ae97f838bd40dc38");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"1e24a7747dcdc845":"92ZIi","164047d09e43f80b":"qS9uN","dd1ddcf198148d6b":"ka1Un","c95fe7e536aa7fab":"4isCr","ae97f838bd40dc38":"5XWKd"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("ebf8732558d0162b");
var fails = require("5449e9c31577ddda");
var createElement = require("efc5d0d9b68e0b86");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"ebf8732558d0162b":"92ZIi","5449e9c31577ddda":"hL6D2","efc5d0d9b68e0b86":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("f6d445c23ae947d3");
var isObject = require("7a55d81f0a3471d9");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f6d445c23ae947d3":"i8HOC","7a55d81f0a3471d9":"Z0pBo"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("b85d2824a5c9dd0e");
var fails = require("dedaea80151038b9");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"b85d2824a5c9dd0e":"92ZIi","dedaea80151038b9":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("20e87ef9fb38ac35");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"20e87ef9fb38ac35":"Z0pBo"}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("6ef4ea0ec59a5be3");
var isSymbol = require("76cf4699bd7a5d3a");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"6ef4ea0ec59a5be3":"a2mK1","76cf4699bd7a5d3a":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("dbc7f8751fda9dc3");
var isObject = require("bea5ed4e65c9af87");
var isSymbol = require("858c0fdb7d66df0e");
var getMethod = require("56348185712aacda");
var ordinaryToPrimitive = require("27aeaaf9ea38673e");
var wellKnownSymbol = require("5abec6b6f92f27e5");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"dbc7f8751fda9dc3":"d7JlP","bea5ed4e65c9af87":"Z0pBo","858c0fdb7d66df0e":"4aV4F","56348185712aacda":"9Zfiw","27aeaaf9ea38673e":"7MME2","5abec6b6f92f27e5":"gTwyA"}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("2467c91a1e17031f");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"2467c91a1e17031f":"i16Dq"}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("9c191716111a3052");
var isCallable = require("f5bea661560d2c01");
var isPrototypeOf = require("2d5d66254e809a81");
var USE_SYMBOL_AS_UID = require("85d6adb58881770f");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"9c191716111a3052":"6ZUSY","f5bea661560d2c01":"l3Kyn","2d5d66254e809a81":"3jtKQ","85d6adb58881770f":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("ffd1c2e666d9402c");
var isCallable = require("5791f798333e08f1");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"ffd1c2e666d9402c":"i8HOC","5791f798333e08f1":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("a34f866d540ef630");
module.exports = uncurryThis({}.isPrototypeOf);

},{"a34f866d540ef630":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("9919d433622a5dc6");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"9919d433622a5dc6":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("5f65f232a52e4b02");
var fails = require("632e1c5481bba334");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"5f65f232a52e4b02":"bjFlO","632e1c5481bba334":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("402ad0a7ccc5ebb8");
var userAgent = require("95b0ce4fa5480040");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"402ad0a7ccc5ebb8":"i8HOC","95b0ce4fa5480040":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require("5dbde126a23f7da4");
module.exports = getBuiltIn("navigator", "userAgent") || "";

},{"5dbde126a23f7da4":"6ZUSY"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("12e2e5ba684df9fc");
var isNullOrUndefined = require("dbe5e1d34e314dcc");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"12e2e5ba684df9fc":"gOMir","dbe5e1d34e314dcc":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("3dda0d0f8ca886ba");
var tryToString = require("cf3ff17625da8b53");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"3dda0d0f8ca886ba":"l3Kyn","cf3ff17625da8b53":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("f5939b0220f9d9f1");
var isCallable = require("64b3692d36987f2c");
var isObject = require("b72e37cae5d2f7e8");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"f5939b0220f9d9f1":"d7JlP","64b3692d36987f2c":"l3Kyn","b72e37cae5d2f7e8":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("8f9b406dcf4dbe3e");
var shared = require("b432b26c0061ee1e");
var hasOwn = require("57b888492eb2772a");
var uid = require("82c4602e591b48e7");
var NATIVE_SYMBOL = require("81b74541073247c8");
var USE_SYMBOL_AS_UID = require("de0bdb6b33e1ccde");
var WellKnownSymbolsStore = shared("wks");
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"8f9b406dcf4dbe3e":"i8HOC","b432b26c0061ee1e":"i1mHK","57b888492eb2772a":"gC2Q5","82c4602e591b48e7":"a3SEE","81b74541073247c8":"8KyTD","de0bdb6b33e1ccde":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("5b89f1ad2d90b096");
var store = require("1b34b275a75cd4dc");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.27.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"5b89f1ad2d90b096":"5ZsyC","1b34b275a75cd4dc":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("fd3638d548c26852");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"fd3638d548c26852":"7GlkT"}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"eAjGz":[function(require,module,exports) {
var shared = require("be612aa3cf2db703");
var uid = require("d3b33a46060345e0");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"be612aa3cf2db703":"i1mHK","d3b33a46060345e0":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9bz1x":[function(require,module,exports) {
"use strict";
var anObject = require("b7f55b01de4b28b");
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};

},{"b7f55b01de4b28b":"4isCr"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("a1954e5b5c854ca7");
require("9670b7318e52f1f1");

},{"a1954e5b5c854ca7":"fOGFr","9670b7318e52f1f1":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("dbcae2b81db5e603");
var global = require("8459d8012f601f5e");
var clearImmediate = require("fdf8a1701ec83f1b").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"dbcae2b81db5e603":"dIGt4","8459d8012f601f5e":"i8HOC","fdf8a1701ec83f1b":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("41f262ab2b484de9");
var getOwnPropertyDescriptor = require("26a22eb88e376e03").f;
var createNonEnumerableProperty = require("70c3591ccdf50471");
var defineBuiltIn = require("4d1b69c4d9e703a7");
var defineGlobalProperty = require("c3ffafde264adfe");
var copyConstructorProperties = require("b46753b66c1a6b57");
var isForced = require("50a08c37ac453832");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"41f262ab2b484de9":"i8HOC","26a22eb88e376e03":"lk5NI","70c3591ccdf50471":"8CL42","4d1b69c4d9e703a7":"6XwEX","c3ffafde264adfe":"ggjnO","b46753b66c1a6b57":"9Z12i","50a08c37ac453832":"6uTCZ"}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("efddfc5c37c53191");
var call = require("47642ffd4148d225");
var propertyIsEnumerableModule = require("df4bf14faced1fb9");
var createPropertyDescriptor = require("d8b3f9cd46d7fb5a");
var toIndexedObject = require("dab947e2b1cef716");
var toPropertyKey = require("fd8cd1e60d93d9e");
var hasOwn = require("be3d676611b73b33");
var IE8_DOM_DEFINE = require("17e52c0b08375888");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"efddfc5c37c53191":"92ZIi","47642ffd4148d225":"d7JlP","df4bf14faced1fb9":"7SuiS","d8b3f9cd46d7fb5a":"1lpav","dab947e2b1cef716":"jLWwQ","fd8cd1e60d93d9e":"5XWKd","be3d676611b73b33":"gC2Q5","17e52c0b08375888":"qS9uN"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("a3edb9d6ee5b5f15");
var requireObjectCoercible = require("5a4db6c97beae19f");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"a3edb9d6ee5b5f15":"kPk5h","5a4db6c97beae19f":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("98806593d8c45056");
var fails = require("b5737b74c5df4131");
var classof = require("e1d507b88779585f");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"98806593d8c45056":"7GlkT","b5737b74c5df4131":"hL6D2","e1d507b88779585f":"bdfmm"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("7cab98604db36fc9");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"7cab98604db36fc9":"7GlkT"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("7f70a224d345aace");
var definePropertyModule = require("93f432c3e07e7a4b");
var makeBuiltIn = require("72ad5b1756a6a367");
var defineGlobalProperty = require("21b0dd9604853a76");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"7f70a224d345aace":"l3Kyn","93f432c3e07e7a4b":"iJR4w","72ad5b1756a6a367":"cTB4k","21b0dd9604853a76":"ggjnO"}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("91088613f1b2b2cb");
var ownKeys = require("cc02c40c4f3374af");
var getOwnPropertyDescriptorModule = require("f44c125da36d7c80");
var definePropertyModule = require("704366009a2c2d77");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"91088613f1b2b2cb":"gC2Q5","cc02c40c4f3374af":"1CX1A","f44c125da36d7c80":"lk5NI","704366009a2c2d77":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("3c11421da69b2f57");
var uncurryThis = require("357b1c579f9bb303");
var getOwnPropertyNamesModule = require("9df58b96990c9c92");
var getOwnPropertySymbolsModule = require("21d7a77ccf076c26");
var anObject = require("78db174af483c86e");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3c11421da69b2f57":"6ZUSY","357b1c579f9bb303":"7GlkT","9df58b96990c9c92":"fjY04","21d7a77ccf076c26":"4DWO3","78db174af483c86e":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("3b096af9255a7254");
var enumBugKeys = require("e860999fbb82f6e5");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"3b096af9255a7254":"hl5T1","e860999fbb82f6e5":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("be110fb1df048c68");
var hasOwn = require("cb490fbb0063e50");
var toIndexedObject = require("58317609f859e084");
var indexOf = require("d2027608498ab9b").indexOf;
var hiddenKeys = require("3eee0af591b139fb");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"be110fb1df048c68":"7GlkT","cb490fbb0063e50":"gC2Q5","58317609f859e084":"jLWwQ","d2027608498ab9b":"n5IsC","3eee0af591b139fb":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("9cdd6909637e07c7");
var toAbsoluteIndex = require("6516baa4d59a1dff");
var lengthOfArrayLike = require("d37237d86a79ec37");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"9cdd6909637e07c7":"jLWwQ","6516baa4d59a1dff":"5yh27","d37237d86a79ec37":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("246620c742c27ab8");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"246620c742c27ab8":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("31bd49911e9a262a");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"31bd49911e9a262a":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("fba691bdb4756f5c");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"fba691bdb4756f5c":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("60c94422b2bb3eab");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"60c94422b2bb3eab":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("2fba714bc734a9d7");
var isCallable = require("7743d6bb9b399c21");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"2fba714bc734a9d7":"hL6D2","7743d6bb9b399c21":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("14cef586ef3e10d6");
var apply = require("1a98f176098de62");
var bind = require("dd0b2e90da06eb34");
var isCallable = require("7df9c93888179761");
var hasOwn = require("5c839ad67d06f739");
var fails = require("405f73de98634b0e");
var html = require("3f28092adafe7d02");
var arraySlice = require("40245065a726033b");
var createElement = require("c7b3a7c627a8579e");
var validateArgumentsLength = require("5f8dbade849f62e2");
var IS_IOS = require("82831d07cf50365f");
var IS_NODE = require("953cd14b2313004f");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
} catch (error) {}
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(post)) {
        defer = post;
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"14cef586ef3e10d6":"i8HOC","1a98f176098de62":"148ka","dd0b2e90da06eb34":"7vpmS","7df9c93888179761":"l3Kyn","5c839ad67d06f739":"gC2Q5","405f73de98634b0e":"hL6D2","3f28092adafe7d02":"2pze4","40245065a726033b":"RsFXo","c7b3a7c627a8579e":"4bOHl","5f8dbade849f62e2":"b9O3D","82831d07cf50365f":"bzGah","953cd14b2313004f":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("83b75e76a3d2f926");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"83b75e76a3d2f926":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("cbeac17f829679e");
var aCallable = require("da6475b9ef33552a");
var NATIVE_BIND = require("3aefd02d63230d66");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"cbeac17f829679e":"5Hioa","da6475b9ef33552a":"gOMir","3aefd02d63230d66":"i16Dq"}],"5Hioa":[function(require,module,exports) {
var classofRaw = require("64df081b5bf75af5");
var uncurryThis = require("a96fe5f4bf2506ad");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"64df081b5bf75af5":"bdfmm","a96fe5f4bf2506ad":"7GlkT"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("ab9d319919c56b95");
module.exports = getBuiltIn("document", "documentElement");

},{"ab9d319919c56b95":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("5368f60a8b290ee");
module.exports = uncurryThis([].slice);

},{"5368f60a8b290ee":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("80d605b14a6bcae");
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"80d605b14a6bcae":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var classof = require("ebaeb763dfbfe527");
var global = require("456427231e017876");
module.exports = classof(global.process) == "process";

},{"ebaeb763dfbfe527":"bdfmm","456427231e017876":"i8HOC"}],"l7FDS":[function(require,module,exports) {
var $ = require("5ddbc8bb1577ec4d");
var global = require("cfa5e2dad0dac793");
var setTask = require("be7d31b659aa044b").set;
var schedulersFix = require("66b9076949aaa5eb");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"5ddbc8bb1577ec4d":"dIGt4","cfa5e2dad0dac793":"i8HOC","be7d31b659aa044b":"7jDg7","66b9076949aaa5eb":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("d098cdd3f431b907");
var apply = require("cade3411942460af");
var isCallable = require("2558742f987d6fd8");
var ENGINE_IS_BUN = require("162e1062e77a8331");
var USER_AGENT = require("d4b37ae0b1b1c016");
var arraySlice = require("7005cfc6b37e60f7");
var validateArgumentsLength = require("b1f5d6283198163f");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"d098cdd3f431b907":"i8HOC","cade3411942460af":"148ka","2558742f987d6fd8":"l3Kyn","162e1062e77a8331":"2BA6V","d4b37ae0b1b1c016":"73xBt","7005cfc6b37e60f7":"RsFXo","b1f5d6283198163f":"b9O3D"}],"2BA6V":[function(require,module,exports) {
/* global Bun -- Deno case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _fractionJs = require("fraction.js");
var _pubSubJs = require("../pubSub.js");
var _pubSubJsDefault = parcelHelpers.interopDefault(_pubSubJs);
class RecipeView extends (0, _viewJsDefault.default) {
    constructor(){
        super(document.querySelector(".recipe"), "An Error occurred while fetching the recipe.", "Start by searching for a recipe or an ingredient. Have fun!");
        [
            "load",
            "hashchange"
        ].forEach((ev)=>window.addEventListener(ev, (0, _pubSubJsDefault.default).publish.bind((0, _pubSubJsDefault.default), `recipeView.${ev}`)));
        // Event Delegation
        this._parentEl.addEventListener("click", (e)=>{
            this._updateServingsEvent(e);
            this._toggleBookmark(e);
        });
    }
    _updateServingsEvent(e) {
        const btn = e.target.closest(".btn--tiny");
        if (!btn) return;
        let { servingsTo  } = btn.dataset;
        servingsTo = +servingsTo;
        if (servingsTo < 1) return;
        (0, _pubSubJsDefault.default).publish("servings.update", servingsTo);
    }
    _toggleBookmark(e) {
        const btn = e.target.closest(".btn--bookmark");
        if (!btn) return;
        [
            "bookmark.click"
        ].forEach((event)=>(0, _pubSubJsDefault.default).publish(event, this._data));
    }
    _constructHTML() {
        return `
          <figure class="recipe__fig">
            <img src="${this._data.imageUrl}" alt=">${this._data.title}" class="recipe__img">
            <h1 class="recipe__title">
                <span>${this._data.title}</span>
            </h1>
          </figure>
      
          <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">45</span>
                <span class="recipe__info-text">minutes</span>
              </div>
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>
                <div class="recipe__info-buttons">
                  <button class="btn--tiny btn--decrease-servings" data-servings-to="${this._data.servings - 1}">
                    <svg>
                      <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                    </svg>
                  </button>
                  <button class="btn--tiny btn--increase-servings" data-servings-to="${this._data.servings + 1}">
                    <svg>
                      <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                    </svg>
                  </button>
                </div>
          </div>
          <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
            </svg>
          </button>
          </div>
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this._data.ingredients.map((ingredient)=>this._constructIngredientHTML(ingredient)).join("")}
            </ul>
          </div>
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${this._data.sourceUrl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
        `;
    }
    _constructIngredientHTML(ingredient) {
        return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${ingredient.quantity ? (0, _fractionJs.Fraction)(ingredient.quantity).toFraction(true) : ""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${ingredient.unit}</span>
            ${ingredient.description}
          </div>
        </li>
        `;
    }
}
exports.default = new RecipeView();

},{"url:../../img/icons.svg":"loVOp","./view.js":"bWlJ9","fraction.js":"iDLoJ","../pubSub.js":"8LhNP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("2d2be5ccc30b9074").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"2d2be5ccc30b9074":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _parentEl;
    _data;
    _error;
    _message;
    constructor(parentEl, error, message){
        this._parentEl = parentEl;
        this._error = error;
        this._message = message;
    }
    render(data) {
        this._data = data;
        if (!data || Array.isArray(this._data) && this._data.length === 0) return this.renderError();
        const dataEl = this._constructHTML();
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", dataEl);
    }
    update(data) {
        this._data = data;
        const dataEl = this._constructHTML();
        this._compareAndUpdateDOM(dataEl);
    }
    _compareAndUpdateDOM(newHTMLString) {
        const newVirtualDOM = document.createRange().createContextualFragment(newHTMLString);
        const newElements = newVirtualDOM.querySelectorAll("*");
        const currentElements = this._parentEl.querySelectorAll("*");
        newElements.forEach((newElement, index)=>{
            const currentElement = currentElements[index];
            // Checking for difference in textContent
            if (!newElement.isEqualNode(currentElement) && newElement.firstChild?.nodeValue.trim() !== "") currentElement.textContent = newElement.textContent;
            // Checking for difference in attributes
            if (!newElement.isEqualNode(currentElement)) Array.from(newElement.attributes).forEach((attr)=>currentElement.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentEl.innerHTML = "";
    }
    renderSpinner() {
        const spinnerEl = `
                <div class="spinner">
                <svg>
                    <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
                </svg>
                </div>
            `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", spinnerEl);
    }
    renderMessage(message = this._message) {
        const messageEl = `
            <div class="message">
              <div>
                <svg>
                  <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
            `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", messageEl);
    }
    renderError(error = this._error) {
        const errorEl = `
          <div class="error">
            <div>
                <svg>
                    <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                </svg>
            </div>
            <p>${error.status === 400 ? "Please check the data." : error}</p>
          </div>
        `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", errorEl);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"iDLoJ":[function(require,module,exports) {
/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/ /**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <nominator>, 1 => <denominator> ]
 * [ n => <nominator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */ (function(root) {
    "use strict";
    // Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
    // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
    // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
    var MAX_CYCLE_LEN = 2000;
    // Parsed data to avoid calling "new" all the time
    var P = {
        "s": 1,
        "n": 0,
        "d": 1
    };
    function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) throw Fraction["InvalidParameter"];
        return n * s;
    }
    // Creates a new Fraction internally without the need of the bulky constructor
    function newFraction(n, d) {
        if (d === 0) throw Fraction["DivisionByZero"];
        var f = Object.create(Fraction.prototype);
        f["s"] = n < 0 ? -1 : 1;
        n = n < 0 ? -n : n;
        var a = gcd(n, d);
        f["n"] = n / a;
        f["d"] = d / a;
        return f;
    }
    function factorize(num) {
        var factors = {};
        var n = num;
        var i = 2;
        var s = 4;
        while(s <= n){
            while(n % i === 0){
                n /= i;
                factors[i] = (factors[i] || 0) + 1;
            }
            s += 1 + 2 * i++;
        }
        if (n !== num) {
            if (n > 1) factors[n] = (factors[n] || 0) + 1;
        } else factors[num] = (factors[num] || 0) + 1;
        return factors;
    }
    var parse = function(p1, p2) {
        var n = 0, d = 1, s = 1;
        var v = 0, w = 0, x = 0, y = 1, z = 1;
        var A = 0, B = 1;
        var C = 1, D = 1;
        var N = 10000000;
        var M;
        if (p1 === undefined || p1 === null) ;
        else if (p2 !== undefined) {
            n = p1;
            d = p2;
            s = n * d;
            if (n % 1 !== 0 || d % 1 !== 0) throw Fraction["NonIntegerParameter"];
        } else switch(typeof p1){
            case "object":
                if ("d" in p1 && "n" in p1) {
                    n = p1["n"];
                    d = p1["d"];
                    if ("s" in p1) n *= p1["s"];
                } else if (0 in p1) {
                    n = p1[0];
                    if (1 in p1) d = p1[1];
                } else throw Fraction["InvalidParameter"];
                s = n * d;
                break;
            case "number":
                if (p1 < 0) {
                    s = p1;
                    p1 = -p1;
                }
                if (p1 % 1 === 0) n = p1;
                else if (p1 > 0) {
                    if (p1 >= 1) {
                        z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                        p1 /= z;
                    }
                    // Using Farey Sequences
                    // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/
                    while(B <= N && D <= N){
                        M = (A + C) / (B + D);
                        if (p1 === M) {
                            if (B + D <= N) {
                                n = A + C;
                                d = B + D;
                            } else if (D > B) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                            break;
                        } else {
                            if (p1 > M) {
                                A += C;
                                B += D;
                            } else {
                                C += A;
                                D += B;
                            }
                            if (B > N) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                        }
                    }
                    n *= z;
                } else if (isNaN(p1) || isNaN(p2)) d = n = NaN;
                break;
            case "string":
                B = p1.match(/\d+|./g);
                if (B === null) throw Fraction["InvalidParameter"];
                if (B[A] === "-") {
                    s = -1;
                    A++;
                } else if (B[A] === "+") A++;
                if (B.length === A + 1) w = assign(B[A++], s);
                else if (B[A + 1] === "." || B[A] === ".") {
                    if (B[A] !== ".") v = assign(B[A++], s);
                    A++;
                    // Check for decimal places
                    if (A + 1 === B.length || B[A + 1] === "(" && B[A + 3] === ")" || B[A + 1] === "'" && B[A + 3] === "'") {
                        w = assign(B[A], s);
                        y = Math.pow(10, B[A].length);
                        A++;
                    }
                    // Check for repeating places
                    if (B[A] === "(" && B[A + 2] === ")" || B[A] === "'" && B[A + 2] === "'") {
                        x = assign(B[A + 1], s);
                        z = Math.pow(10, B[A + 1].length) - 1;
                        A += 3;
                    }
                } else if (B[A + 1] === "/" || B[A + 1] === ":") {
                    w = assign(B[A], s);
                    y = assign(B[A + 2], 1);
                    A += 3;
                } else if (B[A + 3] === "/" && B[A + 1] === " ") {
                    v = assign(B[A], s);
                    w = assign(B[A + 2], s);
                    y = assign(B[A + 4], 1);
                    A += 5;
                }
                if (B.length <= A) {
                    d = y * z;
                    s = /* void */ n = x + d * v + z * w;
                    break;
                }
            default:
                throw Fraction["InvalidParameter"];
        }
        if (d === 0) throw Fraction["DivisionByZero"];
        P["s"] = s < 0 ? -1 : 1;
        P["n"] = Math.abs(n);
        P["d"] = Math.abs(d);
    };
    function modpow(b, e, m) {
        var r = 1;
        for(; e > 0; b = b * b % m, e >>= 1)if (e & 1) r = r * b % m;
        return r;
    }
    function cycleLen(n, d) {
        for(; d % 2 === 0; d /= 2);
        for(; d % 5 === 0; d /= 5);
        if (d === 1) return 0;
        // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
        // 10^(d-1) % d == 1
        // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
        // as we want to translate the numbers to strings.
        var rem = 10 % d;
        var t = 1;
        for(; rem !== 1; t++){
            rem = rem * 10 % d;
            if (t > MAX_CYCLE_LEN) return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
        }
        return t;
    }
    function cycleStart(n, d, len) {
        var rem1 = 1;
        var rem2 = modpow(10, len, d);
        for(var t = 0; t < 300; t++){
            // Solve 10^s == 10^(s+t) (mod d)
            if (rem1 === rem2) return t;
            rem1 = rem1 * 10 % d;
            rem2 = rem2 * 10 % d;
        }
        return 0;
    }
    function gcd(a, b) {
        if (!a) return b;
        if (!b) return a;
        while(true){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    /**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */ function Fraction(a, b) {
        parse(a, b);
        if (this instanceof Fraction) {
            a = gcd(P["d"], P["n"]); // Abuse variable a
            this["s"] = P["s"];
            this["n"] = P["n"] / a;
            this["d"] = P["d"] / a;
        } else return newFraction(P["s"] * P["n"], P["d"]);
    }
    Fraction["DivisionByZero"] = new Error("Division by Zero");
    Fraction["InvalidParameter"] = new Error("Invalid argument");
    Fraction["NonIntegerParameter"] = new Error("Parameters must be integer");
    Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/ "abs": function() {
            return newFraction(this["n"], this["d"]);
        },
        /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/ "neg": function() {
            return newFraction(-this["s"] * this["n"], this["d"]);
        },
        /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/ "add": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/ "sub": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/ "mul": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/ "div": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/ "clone": function() {
            return newFraction(this["s"] * this["n"], this["d"]);
        },
        /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/ "mod": function(a, b) {
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            if (a === undefined) return newFraction(this["s"] * this["n"] % this["d"], 1);
            parse(a, b);
            if (0 === P["n"] && 0 === this["d"]) throw Fraction["DivisionByZero"];
            /*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*/ /*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */ return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */ "gcd": function(a, b) {
            parse(a, b);
            // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
            return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */ "lcm": function(a, b) {
            parse(a, b);
            // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
            if (P["n"] === 0 && this["n"] === 0) return newFraction(0, 1);
            return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/ "ceil": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/ "floor": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/ "round": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/ "inverse": function() {
            return newFraction(this["s"] * this["d"], this["n"]);
        },
        /**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */ "pow": function(a, b) {
            parse(a, b);
            // Trivial case when exp is an integer
            if (P["d"] === 1) {
                if (P["s"] < 0) return newFraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
                else return newFraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
            }
            // Negative roots become complex
            //     (-a/b)^(c/d) = x
            // <=> (-1)^(c/d) * (a/b)^(c/d) = x
            // <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
            // <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
            // From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
            if (this["s"] < 0) return null;
            // Now prime factor n and d
            var N = factorize(this["n"]);
            var D = factorize(this["d"]);
            // Exponentiate and take root for n and d individually
            var n = 1;
            var d = 1;
            for(var k in N){
                if (k === "1") continue;
                if (k === "0") {
                    n = 0;
                    break;
                }
                N[k] *= P["n"];
                if (N[k] % P["d"] === 0) N[k] /= P["d"];
                else return null;
                n *= Math.pow(k, N[k]);
            }
            for(var k in D){
                if (k === "1") continue;
                D[k] *= P["n"];
                if (D[k] % P["d"] === 0) D[k] /= P["d"];
                else return null;
                d *= Math.pow(k, D[k]);
            }
            if (P["s"] < 0) return newFraction(d, n);
            return newFraction(n, d);
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "equals": function(a, b) {
            parse(a, b);
            return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "compare": function(a, b) {
            parse(a, b);
            var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
            return (0 < t) - (t < 0);
        },
        "simplify": function(eps) {
            if (isNaN(this["n"]) || isNaN(this["d"])) return this;
            eps = eps || 0.001;
            var thisABS = this["abs"]();
            var cont = thisABS["toContinued"]();
            for(var i = 1; i < cont.length; i++){
                var s = newFraction(cont[i - 1], 1);
                for(var k = i - 2; k >= 0; k--)s = s["inverse"]()["add"](cont[k]);
                if (s["sub"](thisABS)["abs"]().valueOf() < eps) return s["mul"](this["s"]);
            }
            return this;
        },
        /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */ "divisible": function(a, b) {
            parse(a, b);
            return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
        },
        /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/ "valueOf": function() {
            return this["s"] * this["n"] / this["d"];
        },
        /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
     **/ "toFraction": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += "-";
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    str += " ";
                    n %= d;
                }
                str += n;
                str += "/";
                str += d;
            }
            return str;
        },
        /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/ "toLatex": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += "-";
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    n %= d;
                }
                str += "\\frac{";
                str += n;
                str += "}{";
                str += d;
                str += "}";
            }
            return str;
        },
        /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */ "toContinued": function() {
            var t;
            var a = this["n"];
            var b = this["d"];
            var res = [];
            if (isNaN(a) || isNaN(b)) return res;
            do {
                res.push(Math.floor(a / b));
                t = a % b;
                a = b;
                b = t;
            }while (a !== 1);
            return res;
        },
        /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/ "toString": function(dec) {
            var N = this["n"];
            var D = this["d"];
            if (isNaN(N) || isNaN(D)) return "NaN";
            dec = dec || 15; // 15 = decimal places when no repetation
            var cycLen = cycleLen(N, D); // Cycle length
            var cycOff = cycleStart(N, D, cycLen); // Cycle start
            var str = this["s"] < 0 ? "-" : "";
            str += N / D | 0;
            N %= D;
            N *= 10;
            if (N) str += ".";
            if (cycLen) {
                for(var i = cycOff; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += "(";
                for(var i = cycLen; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += ")";
            } else for(var i = dec; N && i--;){
                str += N / D | 0;
                N %= D;
                N *= 10;
            }
            return str;
        }
    };
    if (typeof define === "function" && define["amd"]) define([], function() {
        return Fraction;
    });
    else {
        Object.defineProperty(Fraction, "__esModule", {
            "value": true
        });
        Fraction["default"] = Fraction;
        Fraction["Fraction"] = Fraction;
        module["exports"] = Fraction;
    }
})(this);

},{}],"8LhNP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventStore {
    #callbacks = {};
    publish(event, data) {
        if (!this.#callbacks[event]) return;
        this.#callbacks[event].forEach((callback)=>callback(data));
    }
    subscribe(event, callback) {
        if (!this.#callbacks[event]) this.#callbacks[event] = [];
        this.#callbacks[event].push(callback);
    }
}
exports.default = new EventStore();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pubSubJs = require("../pubSub.js");
var _pubSubJsDefault = parcelHelpers.interopDefault(_pubSubJs);
class SearchView {
    #parentEl = document.querySelector(".search");
    constructor(){
        this.#parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            (0, _pubSubJsDefault.default).publish("searchView.submit", "");
        });
    }
    getQuery() {
        return this.#parentEl.querySelector(".search__input").value;
    }
}
exports.default = new SearchView();

},{"../pubSub.js":"8LhNP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXIN2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class SearchResultsView extends (0, _previewViewJsDefault.default) {
    constructor(){
        super(document.querySelector(".results"), "No recipes found for your query! Please try again ;)", "Search a query to get the results here :)");
    }
    _constructHTML() {
        const id = window.location.hash.slice(1);
        return this._data.map(this._constructHTMLPreview).join("");
    }
}
exports.default = new SearchResultsView();

},{"./previewView.js":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewClass extends (0, _viewJsDefault.default) {
    constructor(parentEl, error, message){
        super(parentEl, error, message);
    }
    _constructHTMLPreview(result) {
        const id = window.location.hash.slice(1);
        return `
            <li class="preview">
                <a href="#${result.id}" class="preview__link ${id === result.id ? "preview__link--active" : ""}">
                    <figure class="preview__fig">
                        <img src="${result.imageUrl}" alt="${result.title}">
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${result.title}</h4>
                        <div class="preview__info">
                        <p class="preview__publisher">${result.publisher}</p>
                        <div class="preview__user-generated ${result.key ? "" : "hidden"}">
                            <svg>
                                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
                </a>
            </li>
        `;
    }
}
exports.default = PreviewClass;

},{"./view.js":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PaginationView", ()=>PaginationView);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
var _pubSubJs = require("../pubSub.js");
var _pubSubJsDefault = parcelHelpers.interopDefault(_pubSubJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    constructor(){
        super(document.querySelector(".pagination"), "Unable to load controls for the result, please refresh the page and try again!", "");
        this._parentEl.addEventListener("click", (e)=>{
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            let { newPage  } = btn.dataset;
            newPage = +newPage;
            // Using Publisher-Subscriber communication pattern
            (0, _pubSubJsDefault.default).publish("paginationView.click", newPage);
        });
    }
    _constructHTML() {
        const currPage = this._data.search.currentPage;
        const totalPages = Math.round(this._data.search.results.length / _configJs.RESULTS_PER_PAGE);
        let markup = ``;
        // Rendering previous button
        if (currPage > 1) markup += `
            <button class="btn--inline pagination__btn--prev" data-new-page="${currPage - 1}">
                <svg class="pagination__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
            </button>
            `;
        // Rendering next button
        if (currPage < totalPages) markup += `
            <button class="btn--inline pagination__btn--next" data-new-page="${currPage + 1}">
                <span>Page ${currPage + 1}</span>
                <svg class="pagination__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
            </button>
            `;
        return markup;
    }
}
exports.default = new PaginationView();

},{"./view.js":"bWlJ9","../config.js":"k5Hzs","../pubSub.js":"8LhNP","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "REQUEST_TIMOUT_SEC", ()=>REQUEST_TIMOUT_SEC);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE);
parcelHelpers.export(exports, "UPLOAD_SUCCESS_CLOSE_TIME", ()=>UPLOAD_SUCCESS_CLOSE_TIME);
parcelHelpers.export(exports, "KEY", ()=>KEY);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const REQUEST_TIMOUT_SEC = 10;
const RESULTS_PER_PAGE = 10;
const UPLOAD_SUCCESS_CLOSE_TIME = 1;
const KEY = "b0ea61a8-8a43-4e52-aa34-064985c214a3";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _pubSubJs = require("../pubSub.js");
var _pubSubJsDefault = parcelHelpers.interopDefault(_pubSubJs);
class BookmarksView extends (0, _previewViewJsDefault.default) {
    constructor(){
        super(document.querySelector(".bookmarks"), "Unable to load bookmarks, please try refreshing the page.", "No bookmarks yet. Find a nice recipe and bookmark it. ;)");
        window.addEventListener("load", (0, _pubSubJsDefault.default).publish.bind((0, _pubSubJsDefault.default), "bookmark.load", null));
    }
    _constructHTML() {
        return this._data.map(this._constructHTMLPreview).join("");
    }
}
exports.default = new BookmarksView();

},{"./previewView.js":"1FDQ6","../pubSub.js":"8LhNP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cc5Cn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../views/view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _pubSubJs = require("../pubSub.js");
var _pubSubJsDefault = parcelHelpers.interopDefault(_pubSubJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class UploadRecipeView extends (0, _viewJsDefault.default) {
    _form;
    _closeBtn;
    _openBtn = document.querySelector(".nav__btn--add-recipe");
    _overlay = document.querySelector(".overlay");
    constructor(){
        super(document.querySelector(".add-recipe-window"), "", "");
        this.render({});
        this._form = document.querySelector(".upload");
        this._closeBtn = document.querySelector(".btn--close-modal");
        this._submitForm();
        this._openModal();
        this.closeModal();
    }
    _submitForm() {
        this._parentEl.addEventListener("submit", (e)=>{
            e.preventDefault();
            (0, _pubSubJsDefault.default).publish("uploadRecipeView.submit", [
                ...new FormData(this._form)
            ]);
        });
    }
    toggleUploadModal() {
        debugger;
        if (this._parentEl.classList.contains("hidden")) {
            this.render({});
            this._closeBtn = document.querySelector(".btn--close-modal");
            this._closeBtn.addEventListener("click", (e)=>this.toggleUploadModal());
        }
        this._parentEl.classList.toggle("hidden");
        this._overlay.classList.toggle("hidden");
    }
    _openModal() {
        this._openBtn.addEventListener("click", (e)=>this.toggleUploadModal());
    }
    closeModal() {
        console.log(this._closeBtn);
        this._overlay.addEventListener("click", (e)=>this.toggleUploadModal());
        this._closeBtn.addEventListener("click", (e)=>this.toggleUploadModal());
        console.log(this._closeBtn);
    }
    _constructHTML() {
        return `
        <button class="btn--close-modal">&times;</button>
        <form class="upload">
          <div class="upload__column">
            <h3 class="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input value="TEST123" required name="title" type="text" />
            <label>URL</label>
            <input value="TEST123" required name="sourceUrl" type="text" />
            <label>Image URL</label>
            <input value="TEST123" required name="image" type="text" />
            <label>Publisher</label>
            <input value="TEST123" required name="publisher" type="text" />
            <label>Prep time</label>
            <input value="23" required name="cookingTime" type="number" />
            <label>Servings</label>
            <input value="23" required name="servings" type="number" />
          </div>
  
          <div class="upload__column">
            <h3 class="upload__heading">Ingredients</h3>
            <label>Ingredient 1</label>
            <input
              value="0.5,kg,Rice"
              type="text"
              required
              name="ingredient-1"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 2</label>
            <input
              value="1,,Avocado"
              type="text"
              name="ingredient-2"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 3</label>
            <input
              value=",,salt"
              type="text"
              name="ingredient-3"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 4</label>
            <input
              type="text"
              name="ingredient-4"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 5</label>
            <input
              type="text"
              name="ingredient-5"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
            <label>Ingredient 6</label>
            <input
              type="text"
              name="ingredient-6"
              placeholder="Format: 'Quantity,Unit,Description'"
            />
          </div>
          <button class="btn upload__btn">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-upload-cloud"></use>
            </svg>
            <span>Upload</span>
          </button>
        </form>
        `;
    }
}
exports.default = new UploadRecipeView();

},{"../views/view.js":"bWlJ9","../pubSub.js":"8LhNP","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "fetchRecipe", ()=>fetchRecipe);
parcelHelpers.export(exports, "fetchSearchResults", ()=>fetchSearchResults);
parcelHelpers.export(exports, "getResultsForPage", ()=>getResultsForPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "toggleBookmark", ()=>toggleBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        currentPage: 1
    },
    bookmarks: []
};
const fetchRecipe = async function(recipeId) {
    try {
        const res = await _helpersJs.AJAXRequest(`${_configJs.API_URL}${recipeId}?key=${_configJs.KEY}`);
        const { recipe  } = res.data;
        formatRecipe(recipe);
        state.recipe = recipe;
    } catch (error) {
        throw error;
    }
};
const formatRecipe = function(recipe) {
    if (Object.keys(recipe).includes("image_url")) {
        recipe.imageUrl = recipe.image_url;
        delete recipe.image_url;
    }
    if (Object.keys(recipe).includes("source_url")) {
        recipe.sourceUrl = recipe.source_url;
        delete recipe.source_url;
    }
    if (Object.keys(recipe).includes("cooking_time")) {
        recipe.cookingTime = recipe.cooking_time;
        delete recipe.cooking_time;
    }
    if (state.bookmarks.some((bookmark)=>bookmark.id === recipe.id)) recipe.bookmarked = true;
    else recipe.bookmarked = false;
};
const fetchSearchResults = async function(query) {
    try {
        const res = await _helpersJs.AJAXRequest(`${_configJs.API_URL}?search=${query}&key=${_configJs.KEY}`);
        state.search.query = query;
        state.search.results = res.data.recipes.map((result)=>{
            const returnVal = result;
            if (Object.keys(returnVal).includes("image_url")) {
                returnVal.imageUrl = returnVal.image_url;
                delete returnVal.image_url;
            }
            return returnVal;
        });
    } catch (error) {
        throw error;
    }
};
const getResultsForPage = function(page = state.search.currentPage) {
    state.search.currentPage = page;
    const start = (page - 1) * _configJs.RESULTS_PER_PAGE;
    const end = page * _configJs.RESULTS_PER_PAGE;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServingSize) {
    const multiplyFact = newServingSize / state.recipe.servings;
    state.recipe.ingredients.forEach((ingredient)=>{
        if (!ingredient.quantity) return;
        ingredient.quantity = ingredient.quantity * multiplyFact;
    });
    state.recipe.servings = newServingSize;
};
const toggleBookmark = function(recipe) {
    if (recipe.id === state.recipe.id) {
        // Checking if it's already bookmarked
        if (recipe.bookmarked) {
            recipe.bookmarked = false;
            const index = state.bookmarks.findIndex((bookmark)=>bookmark.id === recipe.id);
            if (index === -1) return;
            state.bookmarks.splice(index, 1);
        } else {
            recipe.bookmarked = true;
            state.bookmarks.push(recipe);
        }
        saveBookmarks();
    }
};
const saveBookmarks = function() {
    localStorage.setItem("forkifyBookmarks", JSON.stringify(state.bookmarks));
};
const loadBookmarks = function() {
    const bookmarks = localStorage.getItem("forkifyBookmarks");
    // Guard clause
    if (!bookmarks) return;
    state.bookmarks = JSON.parse(bookmarks);
};
const uploadRecipe = async function(data) {
    try {
        if (!data) return;
        const ingredients = createIngredientArr(data);
        const dataToBeSent = {
            title: data.title,
            image_url: data.image,
            servings: data.servings,
            source_url: data.sourceUrl,
            publisher: data.publisher,
            cooking_time: data.cookingTime,
            ingredients
        };
        const response = await _helpersJs.AJAXRequest(`${_configJs.API_URL}?key=${_configJs.KEY}`, dataToBeSent);
        const { recipe  } = response.data;
        formatRecipe(recipe);
        state.recipe = recipe;
        toggleBookmark(state.recipe);
    } catch (error) {}
};
const createIngredientArr = function(recipe) {
    try {
        return Object.entries(recipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1].trim() !== "").map((entry)=>{
            const ingredient = entry[1].trim().split(",");
            if (ingredient.length !== 3) throw new Error("Please check the format of ingredients again");
            const [quantity, unit, description] = ingredient;
            return {
                quantity: +quantity,
                unit,
                description
            };
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const init = function() {
    loadBookmarks();
};
init();

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAXRequest", ()=>AJAXRequest);
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAXRequest = async function(url, data) {
    try {
        const req = data ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }) : fetch(url); // Post : Get
        const res = await Promise.race([
            req,
            timeout(_configJs.REQUEST_TIMOUT_SEC)
        ]);
        const responseData = await res.json();
        if (!res.ok) {
            const error = new Error(`${responseData.message} (${res.status})`);
            error.status = res.status;
            throw error;
        }
        return responseData;
    } catch (error1) {
        throw error1;
    }
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}]},["fA0o9","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
