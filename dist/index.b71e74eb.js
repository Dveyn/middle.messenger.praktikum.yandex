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
})({"3LmCz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        assetsToAccept = [];
        assetsToDispose = [];
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
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
/* eslint-disable max-len */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _pages = require("./pages");
var _stylesScss = require("./styles.scss");
var _avatar04Png = require("../static/images/avatar04.png");
var _avatar04PngDefault = parcelHelpers.interopDefault(_avatar04Png);
var _svg = require("../static/icons/*.svg");
var _svgDefault = parcelHelpers.interopDefault(_svg);
var _png = require("../static/icons/*.png");
var _pngDefault = parcelHelpers.interopDefault(_png);
var _router = require("./utils/services/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _validator = require("./utils/validator");
var _globaleventbus = require("./utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _user = require("./utils/user");
var _userDefault = parcelHelpers.interopDefault(_user);
var _user1 = require("./utils/controllers/user");
var _userDefault1 = parcelHelpers.interopDefault(_user1);
var _chat = require("./utils/controllers/chat");
var _chatDefault = parcelHelpers.interopDefault(_chat);
var _messages = require("./utils/controllers/messages");
var _messagesDefault = parcelHelpers.interopDefault(_messages);
const icons = Object.assign((0, _svgDefault.default), (0, _pngDefault.default));
const user = new (0, _userDefault.default)();
const router = new (0, _routerDefault.default)("#app");
const g = new (0, _globaleventbusDefault.default)();
const userController = new (0, _userDefault1.default)(router);
const chatController = new (0, _chatDefault.default)();
const messagesController = new (0, _messagesDefault.default)();
const assets = {
    styles: _stylesScss,
    icons,
    images: (0, _avatar04PngDefault.default)
};
const initProps = {
    ...assets,
    router
};
const login = new (0, _pages.Login)(initProps);
const signup = new (0, _pages.Signup)(initProps);
const chat = new (0, _pages.Chat)(initProps);
const profileInfo = new (0, _pages.ProfileInfo)(initProps);
const profileChange = new (0, _pages.ProfileChange)(initProps);
const profilePassword = new (0, _pages.ProfilePassword)(initProps);
function onGetUserSucceed(xhr) {
    const d = JSON.parse(xhr.responseText);
    user.setData(d);
    g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.USERDATA_UPDATED, user);
    router.go(window.location.pathname === "/" ? "/messenger" : window.location.pathname);
}
function onGetUserFailed() {
    router.go(window.location.pathname === "/sign-up" ? "/sign-up" : "/");
}
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_INIT, userController.init.bind(userController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETUSER, userController.getUser.bind(userController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETUSER_SUCCEED, onGetUserSucceed);
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETUSER_FAILED, onGetUserFailed);
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_LOGIN, (0, _validator.validateLogin));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGIN, userController.login.bind(userController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGIN_SUCCEED, chatController.getChats.bind(chatController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SIGNUP, (0, _validator.validateSignup));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SIGNUP, userController.signup.bind(userController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SAVEINFO, (0, _validator.validateSaveInfo));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEINFO, userController.saveInfo.bind(userController));
// g.EventBus.on(GlobalEventBus.EVENTS.ACTION_SAVEINFO_SUCCEED, onSaveInfoSucceed);
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SAVEPASSWORD, (0, _validator.validateSavePassword));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEPASSWORD, userController.savePassword.bind(userController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGOUT, userController.logout.bind(userController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_CHANGEAVATAR, userController.changeAvatar.bind(userController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SENDMESSAGE, (0, _validator.validateSendMessage));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SENDMESSAGE, messagesController.sendMessage.bind(messagesController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_ADDCHATUSER, (0, _validator.validateAddChatUser));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_ADDCHATUSER, chatController.addChatUser.bind(chatController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_FINDUSER, userController.findUser.bind(userController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_DELETECHATUSER, (0, _validator.validateDeleteChatUser));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHATUSER, chatController.deleteChatUser.bind(chatController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHAT, chatController.deleteChat.bind(chatController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATS, chatController.getChats.bind(chatController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATTOKEN, chatController.getChatToken.bind(chatController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATUSERS, chatController.getChatUsers.bind(chatController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_CREATECHAT, (0, _validator.validateCreateChat));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_CREATECHAT, chatController.createChat.bind(chatController));
g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_CONNECTCHAT, messagesController.connectChat.bind(messagesController));
router.use("/", login).use("/sign-up", signup).use("/messenger", chat).use("/settings", profileInfo).use("/settings-change", profileChange).use("/settings-password", profilePassword).start();
g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_INIT);

},{"./pages":"kIGWd","./styles.scss":"lHHg5","../static/images/avatar04.png":"bwDBm","../static/icons/*.svg":"hWESu","../static/icons/*.png":"1bjm9","./utils/services/router":"9kXaW","./utils/validator":"crxki","./utils/globaleventbus":"650P3","./utils/user":"1XbwN","./utils/controllers/user":"5OHdU","./utils/controllers/chat":"ce6ox","./utils/controllers/messages":"1x8HF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIGWd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Login", ()=>(0, _login.Login));
parcelHelpers.export(exports, "Signup", ()=>(0, _signup.Signup));
parcelHelpers.export(exports, "Chat", ()=>(0, _chat.Chat));
parcelHelpers.export(exports, "Conversation", ()=>(0, _conversation.Conversation));
parcelHelpers.export(exports, "ProfileInfo", ()=>(0, _info.ProfileInfo));
parcelHelpers.export(exports, "ProfileChange", ()=>(0, _change.ProfileChange));
parcelHelpers.export(exports, "ProfilePassword", ()=>(0, _password.ProfilePassword));
parcelHelpers.export(exports, "ModalAvatar", ()=>(0, _modals.ModalAvatar));
var _login = require("./login");
var _signup = require("./signup");
var _chat = require("./chat");
var _conversation = require("./conversation");
var _info = require("./profile/info");
var _change = require("./profile/change");
var _password = require("./profile/password");
var _modals = require("./modals");

},{"./login":"jvSzj","./signup":"hCnkx","./chat":"j5R60","./conversation":"dLYV5","./profile/info":"l8Cmk","./profile/change":"ep2UD","./profile/password":"6SX2D","./modals":"gNlo4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvSzj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Login", ()=>Login);
var _loginHbs = require("./login.hbs");
var _loginHbsDefault = parcelHelpers.interopDefault(_loginHbs);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../components");
var _validator = require("../../utils/validator");
var _globaleventbus = require("../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _page = require("../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class Login extends (0, _pageDefault.default) {
    constructor(props){
        super("div", props);
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_LOGIN_FAILED, this._onValidateLoginFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGIN_FAILED, this._onActionLoginFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGIN_SUCCEED, this._onActionLoginSucceed.bind(this));
    }
    _onValidateLoginFailed(formData) {
        Object.keys(formData).forEach((key)=>{
            if (!formData[key].isValid) {
                const element = document.querySelector(`input[name=${key}]`);
                element?.classList.add(this.props.styles["input-error"]);
            }
        });
        throw new Error("Validation Error");
    }
    _onActionLoginSucceed() {
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETUSER);
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATS);
    }
    _onActionLoginFailed(data) {
        const text = JSON.parse(data.responseText).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
        console.log("Error on login: ", text);
    }
    _onFocusChange(event) {
        const element = event.target;
        const validationResult = (0, _validator.isValid)(element);
        if (!validationResult.valid) element.classList.add(this.props.styles["input-error"]);
        else element.classList.remove(this.props.styles["input-error"]);
    }
    render() {
        const inputLogin = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["input-login"]}`,
            name: "login",
            validationType: "login",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const errorMessage = new (0, _components.ErrorMessage)({
            class: `${this.props.styles.error} ${this.props.styles["error-hide"]}`
        });
        const inputPassword = new (0, _components.Input)({
            type: "password",
            class: `${this.props.styles.input} ${this.props.styles["input-password"]}`,
            name: "password",
            validationType: "password",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const buttonLogin = new (0, _components.Button)({
            text: "Авторизоваться",
            class: `${this.props.styles.button} ${this.props.styles["login-form-button-primary"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    const inputs = [
                        inputLogin,
                        inputPassword
                    ];
                    try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_LOGIN, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGIN, inputs, "/messenger");
                    } catch (error) {
                        console.log("Error caught", error);
                    }
                }
            }
        });
        const buttonSignup = new (0, _components.Button)({
            text: "Нет аккаунта?",
            class: `${this.props.styles.button} ${this.props.styles["login-form-button-secondary"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this.props.router.go("/sign-up");
                }
            }
        });
        const labelLogin = new (0, _components.Label)({
            text: "Логин",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        const labelPassword = new (0, _components.Label)({
            text: "Пароль",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        this._errorMessage = errorMessage;
        return (0, _compileDefault.default)((0, _loginHbsDefault.default), {
            styles: this.props.styles,
            buttonLogin,
            buttonSignup,
            labelLogin,
            labelPassword,
            inputLogin,
            inputPassword,
            errorMessage
        });
    }
}

},{"./login.hbs":"eP1jN","../../utils/compile":"hStup","../../components":"dHnah","../../utils/validator":"crxki","../../utils/globaleventbus":"650P3","../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eP1jN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "auth-popup") : stack1, depth0)) + '">\r\n    <div class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "auth-container") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "auth-header") : stack1, depth0)) + ">Вход</div>\r\n        <form class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "form") : stack1, depth0)) + ">\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelLogin") || (depth0 != null ? lookupProperty(depth0, "labelLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputLogin") || (depth0 != null ? lookupProperty(depth0, "inputLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelPassword") || (depth0 != null ? lookupProperty(depth0, "labelPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputPassword") || (depth0 != null ? lookupProperty(depth0, "inputPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 12
                },
                "end": {
                    "line": 8,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "errorMessage") || (depth0 != null ? lookupProperty(depth0, "errorMessage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "errorMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 12
                },
                "end": {
                    "line": 9,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "form-login-spacer") : stack1, depth0)) + '">&nbsp;</div>\r\n            <div class="form-buttons">\r\n                ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonLogin") || (depth0 != null ? lookupProperty(depth0, "buttonLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 16
                },
                "end": {
                    "line": 12,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonSignup") || (depth0 != null ? lookupProperty(depth0, "buttonSignup") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonSignup",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 16
                },
                "end": {
                    "line": 13,
                    "column": 36
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHnah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>(0, _button.Button));
parcelHelpers.export(exports, "Input", ()=>(0, _input.Input));
parcelHelpers.export(exports, "Label", ()=>(0, _label.Label));
parcelHelpers.export(exports, "ChatInfo", ()=>(0, _chatInfo.ChatInfo));
parcelHelpers.export(exports, "Link", ()=>(0, _link.Link));
parcelHelpers.export(exports, "Avatar", ()=>(0, _avatar.Avatar));
parcelHelpers.export(exports, "ErrorMessage", ()=>(0, _errorMessage.ErrorMessage));
parcelHelpers.export(exports, "Image", ()=>(0, _image.Image));
parcelHelpers.export(exports, "AvatarImage", ()=>(0, _avatarImage.AvatarImage));
parcelHelpers.export(exports, "Message", ()=>(0, _message.Message));
parcelHelpers.export(exports, "ErrorComponent", ()=>(0, _error.ErrorComponent));
parcelHelpers.export(exports, "ErrorInput", ()=>(0, _error.ErrorInput));
var _button = require("./button");
var _input = require("./input");
var _label = require("./label");
var _chatInfo = require("./chat-info");
var _link = require("./link");
var _avatar = require("./avatar");
var _errorMessage = require("./error-message");
var _image = require("./image");
var _avatarImage = require("./avatar-image");
var _message = require("./message");
var _error = require("./error");

},{"./button":"dZaQH","./input":"haspD","./label":"5tSqQ","./chat-info":"fY2M7","./link":"hjADv","./avatar":"7V51Z","./error-message":"dL2Il","./image":"8UAPc","./avatar-image":"2JCNM","./message":"wPnja","./error":"7zUQr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZaQH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _buttonHbs = require("./button.hbs");
var _buttonHbsDefault = parcelHelpers.interopDefault(_buttonHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
class Button extends (0, _blockDefault.default) {
    constructor(props){
        super("button", props);
    }
    render() {
        return (0, _compileDefault.default)((0, _buttonHbsDefault.default), this.props);
    }
}

},{"./button.hbs":"jyi3k","../../utils/block":"7D3jB","../../utils/compile":"hStup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyi3k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<button class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 26
                }
            }
        }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 28
                },
                "end": {
                    "line": 1,
                    "column": 38
                }
            }
        }) : helper)) + "</button>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haspD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>Input);
var _inputHbs = require("./input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
var _textareaHbs = require("./textarea.hbs");
var _textareaHbsDefault = parcelHelpers.interopDefault(_textareaHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
class Input extends (0, _blockDefault.default) {
    constructor(props){
        super("div", props);
    }
    render() {
        if (this.props.type === "textarea") return (0, _compileDefault.default)((0, _textareaHbsDefault.default), this.props);
        return (0, _compileDefault.default)((0, _inputHbsDefault.default), this.props);
    }
}

},{"./input.hbs":"6eWJV","./textarea.hbs":"eDnBe","../../utils/block":"7D3jB","../../utils/compile":"hStup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eWJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ' value="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 19
                }
            }
        }) : helper)) + '"\r\n';
    },
    "3": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ' data-validation="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "validationType") || (depth0 != null ? lookupProperty(depth0, "validationType") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "validationType",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 18
                },
                "end": {
                    "line": 6,
                    "column": 38
                }
            }
        }) : helper)) + '"\r\n';
    },
    "5": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ' placeholder="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "placeholder") || (depth0 != null ? lookupProperty(depth0, "placeholder") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "placeholder",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 14
                },
                "end": {
                    "line": 9,
                    "column": 31
                }
            }
        }) : helper)) + '"\r\n';
    },
    "7": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ' accept="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "accept") || (depth0 != null ? lookupProperty(depth0, "accept") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "accept",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 9
                },
                "end": {
                    "line": 12,
                    "column": 21
                }
            }
        }) : helper)) + '"\r\n';
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<input type="' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
                    "column": 23
                }
            }
        }) : helper)) + '" class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 32
                },
                "end": {
                    "line": 1,
                    "column": 43
                }
            }
        }) : helper)) + '" name="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 51
                },
                "end": {
                    "line": 1,
                    "column": 61
                }
            }
        }) : helper)) + '"\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "value") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 7
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "validationType") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 0
                },
                "end": {
                    "line": 7,
                    "column": 7
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "placeholder") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(5, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 0
                },
                "end": {
                    "line": 10,
                    "column": 7
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "accept") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(7, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 0
                },
                "end": {
                    "line": 13,
                    "column": 7
                }
            }
        })) != null ? stack1 : "") + ">\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDnBe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<textarea class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 17
                },
                "end": {
                    "line": 1,
                    "column": 28
                }
            }
        }) : helper)) + '" name="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 36
                },
                "end": {
                    "line": 1,
                    "column": 46
                }
            }
        }) : helper)) + '" data-validation="' + alias4((helper = (helper = lookupProperty(helpers, "validationType") || (depth0 != null ? lookupProperty(depth0, "validationType") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "validationType",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 65
                },
                "end": {
                    "line": 1,
                    "column": 85
                }
            }
        }) : helper)) + '" placeholder="' + alias4((helper = (helper = lookupProperty(helpers, "placeholder") || (depth0 != null ? lookupProperty(depth0, "placeholder") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "placeholder",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 100
                },
                "end": {
                    "line": 1,
                    "column": 117
                }
            }
        }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 119
                },
                "end": {
                    "line": 1,
                    "column": 130
                }
            }
        }) : helper)) + "</textarea>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tSqQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Label", ()=>Label);
var _labelHbs = require("./label.hbs");
var _labelHbsDefault = parcelHelpers.interopDefault(_labelHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
class Label extends (0, _blockDefault.default) {
    constructor(props){
        super("div", props);
    }
    render() {
        return (0, _compileDefault.default)((0, _labelHbsDefault.default), this.props);
    }
}

},{"./label.hbs":"cViyE","../../utils/block":"7D3jB","../../utils/compile":"hStup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cViyE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 23
                }
            }
        }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 25
                },
                "end": {
                    "line": 1,
                    "column": 35
                }
            }
        }) : helper)) + "</div>\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fY2M7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatInfo", ()=>ChatInfo);
var _chatInfoHbs = require("./chat-info.hbs");
var _chatInfoHbsDefault = parcelHelpers.interopDefault(_chatInfoHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
class ChatInfo extends (0, _blockDefault.default) {
    constructor(props){
        super("div", props);
    }
    render() {
        return (0, _compileDefault.default)((0, _chatInfoHbsDefault.default), this.props);
    }
}

},{"./chat-info.hbs":"eonh1","../../utils/block":"7D3jB","../../utils/compile":"hStup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eonh1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-unread-count-container") : stack1, depth0)) + ">\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-unread-count") : stack1, depth0)) + ">" + alias2((helper = (helper = lookupProperty(helpers, "unread_count") || (depth0 != null ? lookupProperty(depth0, "unread_count") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "unread_count",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 54
                },
                "end": {
                    "line": 9,
                    "column": 72
                }
            }
        }) : helper)) + " </div>\r\n        </div>\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-info-container") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-info") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-avatar") : stack1, depth0)) + "><img class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar-image") : stack1, depth0)) + " src=" + alias2((helper = (helper = lookupProperty(helpers, "avatar") || (depth0 != null ? lookupProperty(depth0, "avatar") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "avatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 85
                },
                "end": {
                    "line": 3,
                    "column": 97
                }
            }
        }) : helper)) + " alt=" + alias2((helper = (helper = lookupProperty(helpers, "imagesAlt") || (depth0 != null ? lookupProperty(depth0, "imagesAlt") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "imagesAlt",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 102
                },
                "end": {
                    "line": 3,
                    "column": 117
                }
            }
        }) : helper)) + "></div>\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-name") : stack1, depth0)) + ">" + alias2((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 42
                },
                "end": {
                    "line": 4,
                    "column": 53
                }
            }
        }) : helper)) + "</div>\r\n        <time class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-time") : stack1, depth0)) + ">" + alias2((helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 43
                },
                "end": {
                    "line": 5,
                    "column": 53
                }
            }
        }) : helper)) + "</time>\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-last-message") : stack1, depth0)) + ">" + alias2((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 50
                },
                "end": {
                    "line": 6,
                    "column": 60
                }
            }
        }) : helper)) + "</div>\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias3, depth0 != null ? lookupProperty(depth0, "unread_count") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 8
                },
                "end": {
                    "line": 11,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + "    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjADv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Link", ()=>Link);
var _linkHbs = require("./link.hbs");
var _linkHbsDefault = parcelHelpers.interopDefault(_linkHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
class Link extends (0, _blockDefault.default) {
    constructor(props){
        super("div", props);
    }
    render() {
        return (0, _compileDefault.default)((0, _linkHbsDefault.default), this.props);
    }
}

},{"./link.hbs":"dRYVn","../../utils/block":"7D3jB","../../utils/compile":"hStup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRYVn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '    <img class="' + alias4((helper = (helper = lookupProperty(helpers, "imageBeforeClass") || (depth0 != null ? lookupProperty(depth0, "imageBeforeClass") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "imageBeforeClass",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 16
                },
                "end": {
                    "line": 3,
                    "column": 38
                }
            }
        }) : helper)) + '" src="' + alias4((helper = (helper = lookupProperty(helpers, "imageBeforeSrc") || (depth0 != null ? lookupProperty(depth0, "imageBeforeSrc") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "imageBeforeSrc",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 45
                },
                "end": {
                    "line": 3,
                    "column": 65
                }
            }
        }) : helper)) + '"  alt="' + alias4((helper = (helper = lookupProperty(helpers, "imagesAlt") || (depth0 != null ? lookupProperty(depth0, "imagesAlt") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "imagesAlt",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 73
                },
                "end": {
                    "line": 3,
                    "column": 88
                }
            }
        }) : helper)) + '">\r\n';
    },
    "3": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return container.escapeExpression((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 16
                },
                "end": {
                    "line": 5,
                    "column": 26
                }
            }
        }) : helper));
    },
    "5": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '    <img class="' + alias4((helper = (helper = lookupProperty(helpers, "imageAfterClass") || (depth0 != null ? lookupProperty(depth0, "imageAfterClass") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "imageAfterClass",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 16
                },
                "end": {
                    "line": 7,
                    "column": 37
                }
            }
        }) : helper)) + '" src="' + alias4((helper = (helper = lookupProperty(helpers, "imageAfterSrc") || (depth0 != null ? lookupProperty(depth0, "imageAfterSrc") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "imageAfterSrc",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 44
                },
                "end": {
                    "line": 7,
                    "column": 63
                }
            }
        }) : helper)) + '"  alt="' + alias4((helper = (helper = lookupProperty(helpers, "imagesAlt") || (depth0 != null ? lookupProperty(depth0, "imagesAlt") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "imagesAlt",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 71
                },
                "end": {
                    "line": 7,
                    "column": 86
                }
            }
        }) : helper)) + '">\r\n';
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 23
                }
            }
        }) : helper)) + '">\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "imageBeforeSrc") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "    " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "text") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 33
                }
            }
        })) != null ? stack1 : "") + "\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "imageAfterSrc") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(5, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 4
                },
                "end": {
                    "line": 8,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7V51Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Avatar", ()=>Avatar);
var _avatarHbs = require("./avatar.hbs");
var _avatarHbsDefault = parcelHelpers.interopDefault(_avatarHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _user = require("../../utils/user");
var _userDefault = parcelHelpers.interopDefault(_user);
var _avatarImage = require("../avatar-image");
var _config = require("../../utils/config");
class Avatar extends (0, _blockDefault.default) {
    constructor(props){
        super("div", props);
    }
    render() {
        const src = (0, _userDefault.default).instance.getData("avatar") ? (0, _config.config).resourceUrl + (0, _userDefault.default).instance.getData("avatar") : this.props.icons.user;
        const avatarImage = new (0, _avatarImage.AvatarImage)({
            class: this.props.styles["profile-avatar-image"],
            src: src
        });
        this._avatarImage = avatarImage;
        return (0, _compileDefault.default)((0, _avatarHbsDefault.default), {
            avatarImage,
            ...this.props
        });
    }
}

},{"./avatar.hbs":"8ipWj","../../utils/block":"7D3jB","../../utils/compile":"hStup","../../utils/user":"1XbwN","../avatar-image":"2JCNM","../../utils/config":"dAjWq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ipWj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-avatar-wrapper") : stack1, depth0)) + ">\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatarImage") || (depth0 != null ? lookupProperty(depth0, "avatarImage") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "avatarImage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 16
                },
                "end": {
                    "line": 2,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-change-avatar-container") : stack1, depth0)) + ">\r\n                    <p class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-change-avatar-text") : stack1, depth0)) + ">Поменять аватар<p>\r\n                </div>\r\n            </div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XbwN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class User {
    constructor(data){
        if (User.instance) return User.instance;
        this._data = data ? data : {};
        User.instance = this;
    }
    setData(data) {
        Object.keys(data).forEach((key)=>{
            this._data[key] = data[key];
        });
    }
    addToken(data) {
        let newChat = true;
        if (this._data.chatTokens) this._data.chatTokens.forEach((chat)=>{
            if (chat.id === data.id) {
                newChat = false;
                chat.token = data.token;
            }
        });
        else this._data.chatTokens = [];
        if (newChat) this._data.chatTokens?.push(data);
    }
    getToken(id) {
        if (this._data.chatTokens) this._data.chatTokens.forEach((chat)=>{
            if (chat.id === id) return chat.token;
        });
        return undefined;
    }
    getData(key) {
        if (key) return this._data[key];
        return this._data;
    }
}
exports.default = User;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2JCNM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AvatarImage", ()=>AvatarImage);
var _image = require("../image");
var _globaleventbus = require("../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _user = require("../../utils/user");
var _userDefault = parcelHelpers.interopDefault(_user);
var _config = require("../../utils/config");
class AvatarImage extends (0, _image.Image) {
    constructor(props){
        super(props);
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_CHANGEAVATAR_SUCCEED, this.onChangeAvatarSucceed.bind(this));
    }
    onChangeAvatarSucceed(xhr) {
        const user = JSON.parse(xhr.responseText);
        (0, _userDefault.default).instance.setData({
            avatar: user.avatar
        });
        this.setProps({
            src: (0, _config.config).resourceUrl + user.avatar
        });
    }
}

},{"../image":"8UAPc","../../utils/globaleventbus":"650P3","../../utils/user":"1XbwN","../../utils/config":"dAjWq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UAPc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Image", ()=>Image);
var _imageHbs = require("./image.hbs");
var _imageHbsDefault = parcelHelpers.interopDefault(_imageHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
class Image extends (0, _blockDefault.default) {
    constructor(props){
        super("image", props);
    }
    render() {
        return (0, _compileDefault.default)((0, _imageHbsDefault.default), this.props);
    }
}

},{"./image.hbs":"ed7ur","../../utils/block":"7D3jB","../../utils/compile":"hStup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ed7ur":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<image class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 14
                },
                "end": {
                    "line": 1,
                    "column": 25
                }
            }
        }) : helper)) + '" src="' + alias4((helper = (helper = lookupProperty(helpers, "src") || (depth0 != null ? lookupProperty(depth0, "src") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "src",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 32
                },
                "end": {
                    "line": 1,
                    "column": 41
                }
            }
        }) : helper)) + '">';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dAjWq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    baseAPIUrl: "https://ya-praktikum.tech/api/v2",
    resourceUrl: "https://ya-praktikum.tech/api/v2/resources",
    websocketUrl: "wss://ya-praktikum.tech/ws/chats",
    monthsNames: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dL2Il":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ErrorMessage", ()=>ErrorMessage);
var _errorMessageHbs = require("./error-message.hbs");
var _errorMessageHbsDefault = parcelHelpers.interopDefault(_errorMessageHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
class ErrorMessage extends (0, _blockDefault.default) {
    constructor(props){
        super("div", props);
    }
    render() {
        return (0, _compileDefault.default)((0, _errorMessageHbsDefault.default), this.props);
    }
}

},{"./error-message.hbs":"1Z4wt","../../utils/block":"7D3jB","../../utils/compile":"hStup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Z4wt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 23
                }
            }
        }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 25
                },
                "end": {
                    "line": 1,
                    "column": 35
                }
            }
        }) : helper)) + "</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wPnja":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Message", ()=>Message);
var _messageHbs = require("./message.hbs");
var _messageHbsDefault = parcelHelpers.interopDefault(_messageHbs);
var _block = require("../../utils/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
class Message extends (0, _blockDefault.default) {
    constructor(props){
        super("div", props);
    }
    render() {
        return (0, _compileDefault.default)((0, _messageHbsDefault.default), this.props);
    }
}

},{"./message.hbs":"3HzGF","../../utils/block":"7D3jB","../../utils/compile":"hStup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HzGF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "self") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.program(4, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 7,
                    "column": 7
                }
            }
        })) != null ? stack1 : "") + ">\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "file") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(6, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 8
                },
                "end": {
                    "line": 11,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "text") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(8, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 8
                },
                "end": {
                    "line": 14,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "self") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(10, data, 0),
            "inverse": container.program(13, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 8
                },
                "end": {
                    "line": 24,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + "    </div>\r\n";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "class=" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-self-message") : stack1, depth0)) + "\r\n";
    },
    "4": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "class=" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-other-message") : stack1, depth0)) + "\r\n";
    },
    "6": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        " + container.escapeExpression((helper = (helper = lookupProperty(helpers, "file") || (depth0 != null ? lookupProperty(depth0, "file") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "file",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 8
                },
                "end": {
                    "line": 10,
                    "column": 18
                }
            }
        }) : helper)) + "\r\n";
    },
    "8": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        " + container.escapeExpression((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 8
                },
                "end": {
                    "line": 13,
                    "column": 18
                }
            }
        }) : helper)) + "\r\n";
    },
    "10": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-self-message-status") : stack1, depth0)) + ">\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias3, depth0 != null ? lookupProperty(depth0, "isRead") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(11, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 12
                },
                "end": {
                    "line": 19,
                    "column": 19
                }
            }
        })) != null ? stack1 : "") + "        <time class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-self-message-time") : stack1, depth0)) + ">" + alias2((helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias3, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 20,
                    "column": 64
                },
                "end": {
                    "line": 20,
                    "column": 74
                }
            }
        }) : helper)) + "</time>\r\n        </div>\r\n";
    },
    "11": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "            <img src=" + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "icons") : depth0) != null ? lookupProperty(stack1, "status-read") : stack1, depth0)) + '  alt="' + alias1((helper = (helper = lookupProperty(helpers, "imagesAlt") || (depth0 != null ? lookupProperty(depth0, "imagesAlt") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "imagesAlt",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 51
                },
                "end": {
                    "line": 18,
                    "column": 66
                }
            }
        }) : helper)) + '">\r\n';
    },
    "13": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        <div class=" + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-other-message-time") : stack1, depth0)) + ">" + alias1((helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 23,
                    "column": 64
                },
                "end": {
                    "line": 23,
                    "column": 74
                }
            }
        }) : helper)) + "</div>\r\n";
    },
    "15": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "    <div class=" + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-date") : stack1, depth0)) + ">" + alias1((helper = (helper = lookupProperty(helpers, "date") || (depth0 != null ? lookupProperty(depth0, "date") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "date",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 27,
                    "column": 46
                },
                "end": {
                    "line": 27,
                    "column": 56
                }
            }
        }) : helper)) + "</div>\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "isMessage") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.program(15, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 28,
                    "column": 7
                }
            }
        })) != null ? stack1 : "";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crxki":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValid", ()=>isValid);
parcelHelpers.export(exports, "validateLogin", ()=>validateLogin);
parcelHelpers.export(exports, "validateSaveInfo", ()=>validateSaveInfo);
parcelHelpers.export(exports, "validateSavePassword", ()=>validateSavePassword);
parcelHelpers.export(exports, "validateSignup", ()=>validateSignup);
parcelHelpers.export(exports, "validateCreateChat", ()=>validateCreateChat);
parcelHelpers.export(exports, "validateSendMessage", ()=>validateSendMessage);
parcelHelpers.export(exports, "validateAddChatUser", ()=>validateAddChatUser);
parcelHelpers.export(exports, "validateDeleteChatUser", ()=>validateDeleteChatUser);
var _globaleventbus = require("./globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
const VALIDATION_RULES = {
    login: /^[0-9a-zA-Z\-_]{3,}/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
    phone: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/,
    email: /^[^\s@]+@[^\s@]+\.[\S]{2,}$/,
    name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
    title: /^.+$/,
    message: /.+/
};
const errorMessages = {
    name: `Введите корректное имя (латиница или кириллица, 
                  первая буква должна быть заглавной, без пробелов и цифр)`,
    surname: `Введите корректную фамилию (латиница или кириллица,
                   первая буква должна быть заглавной, без пробелов и цифр)`,
    login: `Введите корректный логин (от 3 до 20 символов латиницы, 
          возможно содержание цифр, дефиса или нижнего подчёркивания)`,
    password: `Введите корректный пароль (от 8 до 40 символов, обязательно 
              должна быть хотя бы одна заглавная буква и цифра)`,
    phone: `Введите корректный номер телефона
               (от 10 до 15 цифр, может начинаться с плюса)`,
    email: `Введите корректный адрес электронной почты (латиница, может включать цифры и 
              спецсимволы, обязательно должна быть «собака» (@) и 
              точка после неё, но перед точкой обязательно должны быть буквы)`,
    message: "Введите сообщение"
};
function isValid(element) {
    const eValidationType = element.dataset.validation;
    console.log(eValidationType);
    if (!eValidationType || !(eValidationType in VALIDATION_RULES)) return {
        valid: true
    };
    const rule = VALIDATION_RULES[eValidationType];
    if (element.value && element.value.search(rule) !== -1) return {
        valid: true
    };
    const reason = errorMessages[eValidationType];
    return {
        valid: false,
        reason
    };
}
function isValidField(data, type) {
    // console.log(data, rule);
    if (data.search(VALIDATION_RULES[type]) !== -1) return true;
    return false;
}
function validateInputs(inputs) {
    let isFormValid = true;
    let formData = {};
    let compareFields = {};
    inputs.forEach((input)=>{
        const element = input.element;
        if (element.dataset.validation) {
            const validations = element.dataset.validation.split(",");
            formData[element.name] = {
                value: element.value,
                isValid: true
            };
            if (!isValidField(element.value, validations[0])) {
                isFormValid = false;
                formData[element.name].isValid = false;
            }
            if (validations.length > 1) {
                const [k, v] = validations[1].split("=");
                if (k === "name") compareFields[element.name] = v;
            }
        }
    });
    Object.entries(compareFields).forEach(([key1, key2])=>{
        if (formData[key1].value !== formData[key2].value) {
            isFormValid = false;
            formData[key1].isValid = false;
        }
    });
    return [
        isFormValid,
        formData
    ];
}
function validateLogin(inputs) {
    const [isFormValid, formData] = validateInputs(inputs);
    if (!isFormValid) (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_LOGIN_FAILED, formData);
}
function validateSaveInfo(inputs) {
    const [isFormValid, formData] = validateInputs(inputs);
    if (!isFormValid) (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SAVEINFO_FAILED, formData);
}
function validateSavePassword(inputs) {
    const [isFormValid, formData] = validateInputs(inputs);
    if (!isFormValid) (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SAVEPASSWORD_FAILED, formData);
}
function validateSignup(inputs) {
    const [isFormValid, formData] = validateInputs(inputs);
    if (!isFormValid) (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SIGNUP_FAILED, formData);
}
function validateCreateChat(inputs) {
    const [isFormValid, formData] = validateInputs(inputs);
    if (!isFormValid) (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_CREATECHAT_FAILED, formData);
}
function validateSendMessage(inputs) {
    const [isFormValid, formData] = validateInputs(inputs);
    if (!isFormValid) (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SENDMESSAGE_FAILED, formData);
}
function validateAddChatUser(inputs) {
    const [isFormValid, formData] = validateInputs(inputs);
    if (!isFormValid) (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_ADDCHATUSER_FAILED, formData);
}
function validateDeleteChatUser(inputs) {
    const [isFormValid, formData] = validateInputs(inputs);
    if (!isFormValid) (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_DELETECHATUSER_FAILED, formData);
}

},{"./globaleventbus":"650P3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jApZs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("./block");
var _blockDefault = parcelHelpers.interopDefault(_block);
class Page extends (0, _blockDefault.default) {
}
exports.default = Page;

},{"./block":"7D3jB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hCnkx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Signup", ()=>Signup);
var _signupHbs = require("./signup.hbs");
var _signupHbsDefault = parcelHelpers.interopDefault(_signupHbs);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../components");
var _validator = require("../../utils/validator");
var _globaleventbus = require("../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _page = require("../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class Signup extends (0, _pageDefault.default) {
    constructor(props){
        super("div", props);
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SIGNUP_FAILED, this._onValidateSignupFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SIGNUP_FAILED, this._onActionSignupFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SIGNUP_SUCCEED, this._onActionSignupSucceed.bind(this));
    }
    _onValidateSignupFailed(formData) {
        Object.keys(formData).forEach((key)=>{
            if (!formData[key].isValid) {
                const element = document.querySelector(`input[name=${key}]`);
                element?.classList.add(this.props.styles["input-error"]);
            }
        });
        throw new Error("Validation Error");
    }
    _onActionSignupFailed(data) {
        const text = JSON.parse(data.responseText).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
        console.log("Error on signup: ", text);
    }
    _onActionSignupSucceed() {
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETUSER);
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATS);
    }
    _onFocusChange(event) {
        const element = event.target;
        if (!(0, _validator.isValid)(element).valid) element.classList.add(this.props.styles["input-error"]);
        else element.classList.remove(this.props.styles["input-error"]);
        if (element.name == "password2") {
            const password1 = element.form?.elements.password;
            if (password1 && element.value !== password1.value) element.classList.add(this.props.styles["input-error"]);
        }
    }
    render() {
        const inputEmail = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["input-email"]}`,
            name: "email",
            validationType: "email",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputLogin = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["input-login"]}`,
            name: "login",
            validationType: "login",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputFirstName = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["input-first-name"]}`,
            name: "first_name",
            validationType: "name",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputSecondName = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["input-second-name"]}`,
            name: "second_name",
            validationType: "name",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputPhone = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["input-phone"]}`,
            name: "phone",
            validationType: "phone",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputPassword = new (0, _components.Input)({
            type: "password",
            class: `${this.props.styles.input} ${this.props.styles["input-password"]}`,
            name: "password",
            validationType: "password",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputPassword2 = new (0, _components.Input)({
            type: "password",
            class: `${this.props.styles.input} ${this.props.styles["input-password"]}`,
            name: "password2",
            validationType: "password,name=password",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const errorMessage = new (0, _components.ErrorMessage)({
            class: `${this.props.styles.error} ${this.props.styles["error-hide"]}`
        });
        const buttonSignup = new (0, _components.Button)({
            text: "Зарегистрироваться",
            class: `${this.props.styles.button} ${this.props.styles["signup-form-button-primary"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this._errorMessage.setProps({
                        "text": "",
                        "class": this.props.styles.error
                    });
                    const inputs = [
                        inputEmail,
                        inputLogin,
                        inputFirstName,
                        inputSecondName,
                        inputPhone,
                        inputPassword,
                        inputPassword2
                    ];
                    try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SIGNUP, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SIGNUP, inputs, "/chats");
                    } catch (error) {
                        console.log("Error caught", error);
                    }
                }
            }
        });
        const buttonLogin = new (0, _components.Button)({
            text: "Войти",
            class: `${this.props.styles.button} ${this.props.styles["signup-form-button-secondary"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this.props.router.go("/");
                // renderDOM('#app', this.props.buttonClickLogin);
                }
            }
        });
        const labelEmail = new (0, _components.Label)({
            text: "Почта",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        const labelLogin = new (0, _components.Label)({
            text: "Логин",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        const labelFirstName = new (0, _components.Label)({
            text: "Имя",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        const labelSecondName = new (0, _components.Label)({
            text: "Фамилия",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        const labelPhone = new (0, _components.Label)({
            text: "Телефон",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        const labelPassword = new (0, _components.Label)({
            text: "Пароль",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        const labelPassword2 = new (0, _components.Label)({
            text: "Пароль (еще раз)",
            class: `${this.props.styles.label} ${this.props.styles["form-label"]}`
        });
        this._errorMessage = errorMessage;
        return (0, _compileDefault.default)((0, _signupHbsDefault.default), {
            styles: this.props.styles,
            labelEmail,
            labelLogin,
            labelFirstName,
            labelSecondName,
            labelPhone,
            labelPassword,
            labelPassword2,
            inputEmail,
            inputLogin,
            inputFirstName,
            inputSecondName,
            inputPhone,
            inputPassword,
            inputPassword2,
            errorMessage,
            buttonLogin,
            buttonSignup
        });
    }
}

},{"./signup.hbs":"kgcIO","../../utils/compile":"hStup","../../components":"dHnah","../../utils/validator":"crxki","../../utils/globaleventbus":"650P3","../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kgcIO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "auth-popup") : stack1, depth0)) + '">\r\n    <div class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "auth-container") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "auth-header") : stack1, depth0)) + ">Регистрация</div>\r\n        <form class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "form") : stack1, depth0)) + ">\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelEmail") || (depth0 != null ? lookupProperty(depth0, "labelEmail") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelEmail",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputEmail") || (depth0 != null ? lookupProperty(depth0, "inputEmail") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputEmail",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelLogin") || (depth0 != null ? lookupProperty(depth0, "labelLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputLogin") || (depth0 != null ? lookupProperty(depth0, "inputLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 12
                },
                "end": {
                    "line": 8,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelFirstName") || (depth0 != null ? lookupProperty(depth0, "labelFirstName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelFirstName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 12
                },
                "end": {
                    "line": 9,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputFirstName") || (depth0 != null ? lookupProperty(depth0, "inputFirstName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputFirstName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 12
                },
                "end": {
                    "line": 10,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelSecondName") || (depth0 != null ? lookupProperty(depth0, "labelSecondName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelSecondName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 12
                },
                "end": {
                    "line": 11,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputSecondName") || (depth0 != null ? lookupProperty(depth0, "inputSecondName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputSecondName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 12
                },
                "end": {
                    "line": 12,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelPhone") || (depth0 != null ? lookupProperty(depth0, "labelPhone") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelPhone",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 12
                },
                "end": {
                    "line": 13,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputPhone") || (depth0 != null ? lookupProperty(depth0, "inputPhone") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputPhone",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 12
                },
                "end": {
                    "line": 14,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelPassword") || (depth0 != null ? lookupProperty(depth0, "labelPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 12
                },
                "end": {
                    "line": 15,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputPassword") || (depth0 != null ? lookupProperty(depth0, "inputPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 12
                },
                "end": {
                    "line": 16,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelPassword2") || (depth0 != null ? lookupProperty(depth0, "labelPassword2") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelPassword2",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 12
                },
                "end": {
                    "line": 17,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputPassword2") || (depth0 != null ? lookupProperty(depth0, "inputPassword2") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputPassword2",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 12
                },
                "end": {
                    "line": 18,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "errorMessage") || (depth0 != null ? lookupProperty(depth0, "errorMessage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "errorMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 19,
                    "column": 12
                },
                "end": {
                    "line": 19,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "form-signup-spacer") : stack1, depth0)) + '">&nbsp;</div>\r\n            <div class="form-buttons">\r\n                ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonSignup") || (depth0 != null ? lookupProperty(depth0, "buttonSignup") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonSignup",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 16
                },
                "end": {
                    "line": 22,
                    "column": 36
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonLogin") || (depth0 != null ? lookupProperty(depth0, "buttonLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 23,
                    "column": 16
                },
                "end": {
                    "line": 23,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5R60":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chat", ()=>Chat);
var _chatHbs = require("./chat.hbs");
var _chatHbsDefault = parcelHelpers.interopDefault(_chatHbs);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../components");
var _validator = require("../../utils/validator");
var _renderDom = require("../../utils/renderDom");
var _globaleventbus = require("../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _modals = require("../modals");
var _user = require("../../utils/user");
var _userDefault = parcelHelpers.interopDefault(_user);
var _conversation = require("../conversation");
var _page = require("../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
var _config = require("../../utils/config");
class Chat extends (0, _pageDefault.default) {
    constructor(props){
        super("div", props);
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATS_SUCCEED, this._onGetChatsSucceed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATTOKEN_SUCCEED, this._onGetChatTokenSucceed.bind(this));
    }
    _onGetChatTokenSucceed(data) {
        (0, _userDefault.default).instance.addToken({
            id: data.id,
            token: data.token
        });
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_CONNECTCHAT, {
            userId: (0, _userDefault.default).instance.getData("id"),
            chatId: data.id,
            token: data.token
        });
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATUSERS, data.id);
    }
    _onGetChatsSucceed(xhr) {
        this._chatInfos = [];
        const chats = JSON.parse(xhr.responseText);
        chats.forEach((chat)=>{
            let timeString = "";
            if (chat.last_message?.time) {
                const time = new Date(chat.last_message.time);
                const hours = String(time.getHours()).padStart(2, "0");
                const minutes = String(time.getMinutes()).padStart(2, "0");
                timeString = `${hours}:${minutes}`;
            }
            const textString = chat.last_message?.content ? chat.last_message.content : "";
            let avatar = this.props.icons.user;
            if (chat.avatar) avatar = (0, _config.config).resourceUrl + chat.avatar;
            this._chatInfos.push(new (0, _components.ChatInfo)({
                title: chat.title,
                avatar: avatar,
                text: textString,
                imagesAlt: `Чат ${chat.title}`,
                unread_count: chat.unread_count,
                time: timeString,
                styles: this.props.styles,
                events: {
                    click: ()=>{
                        try {
                            const props = {
                                chatId: chat.id,
                                ...this.props
                            };
                            const conversation = new (0, _conversation.Conversation)(props);
                            this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATTOKEN, chat.id);
                            (0, _renderDom.renderDOM)("#conversation", conversation);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
            }));
        });
        this.setProps({
            chatInfos: this._chatInfos
        });
    }
    _onFocusChange(event) {
        const element = event.target;
        if (!(0, _validator.isValid)(element).valid) {
            if (!element.classList.contains(this.props.styles["input-error"])) element.classList.add(this.props.styles["input-error"]);
        } else element.classList.remove(this.props.styles["input-error"]);
    }
    render() {
        const chatInfos = [];
        this._chatInfos = chatInfos;
        const linkProfileOpen = new (0, _components.Link)({
            text: "Профиль ",
            class: this.props.styles["link-profile-open"],
            imageAfterSrc: this.props.icons.profilearrow,
            imagesAlt: "Профиль",
            events: {
                click: ()=>{
                    this.props.router.go("/settings");
                }
            }
        });
        const linkAddChat = new (0, _components.Link)({
            text: "+",
            class: this.props.styles["add-chat-container"],
            events: {
                click: ()=>{
                    const modalCreateChat = new (0, _modals.ModalCreateChat)({
                        styles: this.props.styles
                    });
                    (0, _renderDom.renderDOM)("#modal", modalCreateChat);
                }
            }
        });
        const inputSearch = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["input-search-box"]}`,
            name: "search",
            placeholder: " ",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        return (0, _compileDefault.default)((0, _chatHbsDefault.default), {
            chatInfos,
            linkProfileOpen,
            linkAddChat,
            inputSearch,
            ...this.props
        });
    }
}

},{"./chat.hbs":"dcbfM","../../utils/compile":"hStup","../../components":"dHnah","../../utils/validator":"crxki","../../utils/renderDom":"bcslR","../../utils/globaleventbus":"650P3","../modals":"gNlo4","../../utils/user":"1XbwN","../conversation":"dLYV5","../../utils/page":"jApZs","../../utils/config":"dAjWq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcbfM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-container") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-left-container") : stack1, depth0)) + '>\r\n        <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-link-container") : stack1, depth0)) + '">' + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkProfileOpen") || (depth0 != null ? lookupProperty(depth0, "linkProfileOpen") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkProfileOpen",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 57
                },
                "end": {
                    "line": 3,
                    "column": 80
                }
            }
        }) : helper)) != null ? stack1 : "") + '</div>\r\n        <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "search-container") : stack1, depth0)) + '">\r\n            ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputSearch") || (depth0 != null ? lookupProperty(depth0, "inputSearch") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputSearch",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 31
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "search-container-placeholder") : stack1, depth0)) + ">\r\n                <img class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "search-icon") : stack1, depth0)) + " src=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "icons") : depth0) != null ? lookupProperty(stack1, "search") : stack1, depth0)) + '  alt="' + alias2((helper = (helper = lookupProperty(helpers, "imagesAlt") || (depth0 != null ? lookupProperty(depth0, "imagesAlt") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "imagesAlt",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 81
                },
                "end": {
                    "line": 7,
                    "column": 96
                }
            }
        }) : helper)) + '"> Поиск\r\n            </div>\r\n        </div>\r\n        <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-infos-container") : stack1, depth0)) + '">\r\n            ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatInfos") || (depth0 != null ? lookupProperty(depth0, "chatInfos") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "chatInfos",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 12
                },
                "end": {
                    "line": 11,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkAddChat") || (depth0 != null ? lookupProperty(depth0, "linkAddChat") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkAddChat",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 12
                },
                "end": {
                    "line": 12,
                    "column": 31
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n        </div>\r\n    </div>\r\n    <div id="conversation" class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-right-container") : stack1, depth0)) + ">\r\n        <p class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat-stub") : stack1, depth0)) + ">Выберите чат чтобы отправить сообщение</p>\r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gNlo4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalAvatar", ()=>(0, _avatar.ModalAvatar));
parcelHelpers.export(exports, "ModalCreateChat", ()=>(0, _createChat.ModalCreateChat));
parcelHelpers.export(exports, "ChatActions", ()=>(0, _chatActions.ChatActions));
parcelHelpers.export(exports, "ModalAddUser", ()=>(0, _addUser.ModalAddUser));
parcelHelpers.export(exports, "ModalDeleteUser", ()=>(0, _deleteUser.ModalDeleteUser));
var _avatar = require("./avatar/avatar");
var _createChat = require("./create-chat/create-chat");
var _chatActions = require("./chat-actions/chat-actions");
var _addUser = require("./add-user/add-user");
var _deleteUser = require("./delete-user/delete-user");

},{"./avatar/avatar":"kz475","./create-chat/create-chat":"cSgQy","./chat-actions/chat-actions":"hxh7H","./add-user/add-user":"dIGKG","./delete-user/delete-user":"f48PR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kz475":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalAvatar", ()=>ModalAvatar);
var _avatarHbs = require("./avatar.hbs");
var _avatarHbsDefault = parcelHelpers.interopDefault(_avatarHbs);
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../../components");
var _globaleventbus = require("../../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ModalAvatar extends (0, _pageDefault.default) {
    constructor(props){
        super("div", {
            ...props,
            events: {
                click: (e)=>this.hideModal(e)
            }
        });
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_CHANGEAVATAR_FAILED, this.onChangeAvatarFailed.bind(this));
    }
    onChangeAvatarFailed(error) {
        console.log(error);
    }
    hideModal(e) {
        const el = e.target;
        if (!el) return false;
        if (el.classList.contains(this.props.styles["modal-container"])) this.hide();
    }
    render() {
        const labelFileName = new (0, _components.Label)({});
        const inputChooseFile = new (0, _components.Input)({
            type: "file",
            class: this.props.styles.hidden,
            name: "avatar_file",
            accept: "image/png, image/jpeg",
            events: {
                change: (e)=>{
                    const fileElement = e.currentTarget;
                    if (fileElement && fileElement.files) {
                        console.log(fileElement.files[0].name);
                        labelFileName.setProps({
                            text: fileElement.files[0].name,
                            class: this.props.styles["avatar-modal-file"]
                        });
                    }
                }
            }
        });
        const linkChooseFile = new (0, _components.Link)({
            text: "Выбрать файл на компьютере",
            class: `${this.props.styles.link} ${this.props.styles["avatar-modal-choose-file"]}`,
            events: {
                click: ()=>{
                    document.querySelector("[type=file]")?.dispatchEvent(new MouseEvent("click", {
                        bubbles: true
                    }));
                }
            }
        });
        const buttonChange = new (0, _components.Button)({
            text: "Поменять",
            class: `${this.props.styles.button} ${this.props.styles["avatar-modal-change-avatar"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    const formData = new FormData();
                    const fileElement = inputChooseFile.element;
                    console.log(fileElement.files);
                    if (fileElement.files) {
                        formData.append("avatar", fileElement.files[0]);
                        try {
                            this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_CHANGEAVATAR, formData);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
            }
        });
        return (0, _compileDefault.default)((0, _avatarHbsDefault.default), {
            labelFileName,
            linkChooseFile,
            inputChooseFile,
            buttonChange,
            ...this.props
        });
    }
}

},{"./avatar.hbs":"kAJpX","../../../utils/compile":"hStup","../../../components":"dHnah","../../../utils/globaleventbus":"650P3","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAJpX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-container") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-popup") : stack1, depth0)) + '>\r\n        <form method="post" class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar-form") : stack1, depth0)) + ">\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputChooseFile") || (depth0 != null ? lookupProperty(depth0, "inputChooseFile") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputChooseFile",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 12
                },
                "end": {
                    "line": 4,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar-modal-header") : stack1, depth0)) + ">Загрузите файл</div>\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar-modal-choose-file-container") : stack1, depth0)) + ">\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelFileName") || (depth0 != null ? lookupProperty(depth0, "labelFileName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelFileName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 16
                },
                "end": {
                    "line": 7,
                    "column": 37
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkChooseFile") || (depth0 != null ? lookupProperty(depth0, "linkChooseFile") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkChooseFile",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 16
                },
                "end": {
                    "line": 8,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonChange") || (depth0 != null ? lookupProperty(depth0, "buttonChange") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonChange",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 12
                },
                "end": {
                    "line": 10,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </form>\r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSgQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalCreateChat", ()=>ModalCreateChat);
var _createChatHbs = require("./create-chat.hbs");
var _createChatHbsDefault = parcelHelpers.interopDefault(_createChatHbs);
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../../components");
var _globaleventbus = require("../../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ModalCreateChat extends (0, _pageDefault.default) {
    constructor(props){
        super("div", {
            ...props,
            events: {
                click: (e)=>this.hideModal(e)
            }
        });
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_CREATECHAT_FAILED, this._onValidateCreateChatFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_CREATECHAT_FAILED, this._onActionCreateChatFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_CREATECHAT_SUCCEED, this._onActionCreateChatSucceed.bind(this));
    }
    _onValidateCreateChatFailed(formData) {
        Object.keys(formData).forEach((key)=>{
            if (!formData[key].isValid) {
                const element = document.querySelector(`input[name=${key}]`);
                element?.classList.add(this.props.styles["input-error"]);
            }
        });
        throw new Error("Validation Error");
    }
    _onActionCreateChatFailed(data) {
        const text = JSON.parse(data).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
        console.log("Error on create chat: ", text);
    }
    _onActionCreateChatSucceed() {
        this.hide();
    }
    hideModal(e) {
        const el = e.target;
        if (!el) return false;
        if (el.classList.contains(this.props.styles["modal-container"])) this.hide();
    }
    render() {
        const inputChatName = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input}`,
            name: "title",
            validationType: "title",
            placeholder: "Название чата"
        });
        const errorMessage = new (0, _components.ErrorMessage)({
            text: "",
            class: this.props.styles.error
        });
        const buttonCreate = new (0, _components.Button)({
            text: "Создать",
            class: `${this.props.styles.button} ` + `${this.props.styles["signup-form-button-primary"]} ` + `${this.props.styles["create-chat-button"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    const inputs = [
                        inputChatName
                    ];
                    try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_CREATECHAT, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_CREATECHAT, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATS);
                    } catch (error) {
                        console.log("Error: ", error);
                    }
                }
            }
        });
        this._errorMessage = errorMessage;
        return (0, _compileDefault.default)((0, _createChatHbsDefault.default), {
            inputChatName,
            errorMessage,
            buttonCreate,
            ...this.props
        });
    }
}

},{"./create-chat.hbs":"fbOYT","../../../utils/compile":"hStup","../../../components":"dHnah","../../../utils/globaleventbus":"650P3","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fbOYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-container") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-popup") : stack1, depth0)) + '>\r\n        <form method="post" class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "create-chat-form") : stack1, depth0)) + ">\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar-modal-header") : stack1, depth0)) + ">Создать новый чат:</div>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputChatName") || (depth0 != null ? lookupProperty(depth0, "inputChatName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputChatName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "errorMessage") || (depth0 != null ? lookupProperty(depth0, "errorMessage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "errorMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonCreate") || (depth0 != null ? lookupProperty(depth0, "buttonCreate") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonCreate",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </form>\r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxh7H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatActions", ()=>ChatActions);
var _chatActionsHbs = require("./chat-actions.hbs");
var _chatActionsHbsDefault = parcelHelpers.interopDefault(_chatActionsHbs);
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../../components");
var _renderDom = require("../../../utils/renderDom");
var _addUser = require("../add-user/add-user");
var _deleteUser = require("../delete-user/delete-user");
var _confirm = require("../confirm/confirm");
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ChatActions extends (0, _pageDefault.default) {
    constructor(props){
        super("div", {
            ...props,
            events: {
                click: (e)=>this.hideModal(e)
            }
        });
    }
    hideModal(e) {
        const el = e.target;
        if (!el) return false;
        if (el.classList.contains(this.props.styles["modal-container"])) this.hide();
    }
    render() {
        const linkAddChatUser = new (0, _components.Link)({
            class: `${this.props.styles.link} ${this.props.styles["chat-actions-element"]}`,
            imageBeforeSrc: this.props.icons.adduser,
            imageBeforeClass: this.props.styles["chat-actions-icon"],
            text: "Добавить пользователя",
            events: {
                click: ()=>{
                    const modalAddUser = new (0, _addUser.ModalAddUser)(this.props);
                    (0, _renderDom.renderDOM)("#modal", modalAddUser);
                }
            }
        });
        const linkDeleteChatUser = new (0, _components.Link)({
            class: `${this.props.styles.link} ${this.props.styles["chat-actions-element"]}`,
            imageBeforeSrc: this.props.icons.deleteuser,
            imageBeforeClass: this.props.styles["chat-actions-icon"],
            text: "Удалить пользователя",
            events: {
                click: ()=>{
                    const modalDeleteUser = new (0, _deleteUser.ModalDeleteUser)(this.props);
                    (0, _renderDom.renderDOM)("#modal", modalDeleteUser);
                }
            }
        });
        const linkDeleteChat = new (0, _components.Link)({
            class: `${this.props.styles.link} ${this.props.styles["chat-actions-element"]}`,
            imageBeforeSrc: this.props.icons.deletechat,
            imageBeforeClass: this.props.styles["chat-actions-icon"],
            text: "Удалить чат",
            events: {
                click: ()=>{
                    const modalConfirm = new (0, _confirm.ModalConfirm)(this.props);
                    (0, _renderDom.renderDOM)("#modal", modalConfirm);
                }
            }
        });
        return (0, _compileDefault.default)((0, _chatActionsHbsDefault.default), {
            linkAddChatUser,
            linkDeleteChatUser,
            linkDeleteChat,
            ...this.props
        });
    }
}

},{"./chat-actions.hbs":"liUqZ","../../../utils/compile":"hStup","../../../components":"dHnah","../../../utils/renderDom":"bcslR","../add-user/add-user":"dIGKG","../delete-user/delete-user":"f48PR","../confirm/confirm":"hxHi6","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"liUqZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-container") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-popup-small") : stack1, depth0)) + ">\r\n\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkAddChatUser") || (depth0 != null ? lookupProperty(depth0, "linkAddChatUser") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkAddChatUser",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 31
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkDeleteChatUser") || (depth0 != null ? lookupProperty(depth0, "linkDeleteChatUser") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkDeleteChatUser",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 8
                },
                "end": {
                    "line": 5,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkDeleteChat") || (depth0 != null ? lookupProperty(depth0, "linkDeleteChat") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkDeleteChat",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 8
                },
                "end": {
                    "line": 6,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "        \r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIGKG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalAddUser", ()=>ModalAddUser);
var _addUserHbs = require("./add-user.hbs");
var _addUserHbsDefault = parcelHelpers.interopDefault(_addUserHbs);
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../../components");
var _globaleventbus = require("../../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ModalAddUser extends (0, _pageDefault.default) {
    constructor(props){
        super("div", {
            ...props,
            events: {
                click: (e)=>this.hideModal(e)
            }
        });
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_ADDCHATUSER_FAILED, this._onValidateAddChatUserFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_ADDFINDUSER_FAILED, this._onActionFindUserFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_ADDFINDUSER_SUCCEED, this._onActionFindUserSucceed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_ADDCHATUSER_FAILED, this._onActionAddChatUserFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_ADDCHATUSER_SUCCEED, this._onActionAddChatUserSucceed.bind(this));
    }
    _onValidateAddChatUserFailed(formData) {
        Object.keys(formData).forEach((key)=>{
            if (!formData[key].isValid) {
                const element = document.querySelector(`input[name=${key}]`);
                element?.classList.add(this.props.styles["input-error"]);
            }
        });
        throw new Error("Validation Error");
    }
    _onActionFindUserFailed(data) {
        console.log("Got data: ", JSON.parse(data));
        const text = JSON.parse(data).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
        console.log("Error on find user: ", text);
    }
    _onActionFindUserSucceed(data) {
        console.log("_onActionFindUserSucceed (add user): ", data);
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_ADDCHATUSER, {
            userId: data.id,
            chatId: this.props.chatId
        });
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATUSERS, this.props.chatId);
    }
    _onActionAddChatUserFailed(data) {
        const text = JSON.parse(data).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
        console.log("Error on add chat user: ", text);
    }
    _onActionAddChatUserSucceed() {
        this._errorMessage.setProps({
            "text": "User added",
            "class": this.props.styles.error
        });
    }
    hideModal(e) {
        const el = e.target;
        if (!el) return false;
        if (el.classList.contains(this.props.styles["modal-container"])) this.hide();
    }
    render() {
        const inputUserLogin = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input}`,
            name: "login",
            validationType: "login",
            placeholder: "Логин пользователя"
        });
        const errorMessage = new (0, _components.ErrorMessage)({
            text: "",
            class: this.props.styles.error
        });
        const buttonAdd = new (0, _components.Button)({
            text: "Добавить",
            class: `${this.props.styles.button} ` + `${this.props.styles["signup-form-button-primary"]} ` + `${this.props.styles["add-user-button"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this._errorMessage.setProps({
                        "text": "",
                        "class": this.props.styles.error
                    });
                    const inputs = [
                        inputUserLogin
                    ];
                    try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_ADDCHATUSER, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_FINDUSER, inputs, {
                            succeedEvent: (0, _globaleventbusDefault.default).EVENTS.ACTION_ADDFINDUSER_SUCCEED,
                            failedEvent: (0, _globaleventbusDefault.default).EVENTS.ACTION_ADDFINDUSER_FAILED
                        });
                    } catch (error) {
                        console.log("Error: ", error);
                    }
                }
            }
        });
        this._errorMessage = errorMessage;
        return (0, _compileDefault.default)((0, _addUserHbsDefault.default), {
            inputUserLogin,
            errorMessage,
            buttonAdd,
            ...this.props
        });
    }
}

},{"./add-user.hbs":"6stb9","../../../utils/compile":"hStup","../../../components":"dHnah","../../../utils/globaleventbus":"650P3","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6stb9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-container") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-popup") : stack1, depth0)) + '>\r\n        <form method="post" class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "add-user-form") : stack1, depth0)) + ">\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar-modal-header") : stack1, depth0)) + ">Добавить пользователя в чат:</div>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputUserLogin") || (depth0 != null ? lookupProperty(depth0, "inputUserLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputUserLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "errorMessage") || (depth0 != null ? lookupProperty(depth0, "errorMessage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "errorMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonAdd") || (depth0 != null ? lookupProperty(depth0, "buttonAdd") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonAdd",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </form>\r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f48PR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalDeleteUser", ()=>ModalDeleteUser);
var _deleteUserHbs = require("./delete-user.hbs");
var _deleteUserHbsDefault = parcelHelpers.interopDefault(_deleteUserHbs);
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../../components");
var _globaleventbus = require("../../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ModalDeleteUser extends (0, _pageDefault.default) {
    constructor(props){
        super("div", {
            ...props,
            events: {
                click: (e)=>this.hideModal(e)
            }
        });
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_DELETECHATUSER_FAILED, this._onValidateDeleteChatUserFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETEFINDUSER_FAILED, this._onActionFindUserFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETEFINDUSER_SUCCEED, this._onActionFindUserSucceed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHATUSER_FAILED, this._onActionDeleteChatUserFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHATUSER_SUCCEED, this._onActionDeleteChatUserSucceed.bind(this));
    }
    _onValidateDeleteChatUserFailed(formData) {
        Object.keys(formData).forEach((key)=>{
            if (!formData[key].isValid) {
                const element = document.querySelector(`input[name=${key}]`);
                element?.classList.add(this.props.styles["input-error"]);
            }
        });
        throw new Error("Validation Error");
    }
    _onActionFindUserFailed(data) {
        console.log("Got data: ", JSON.parse(data));
        const text = JSON.parse(data).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
        console.log("Error on find user: ", text);
    }
    _onActionFindUserSucceed(data) {
        console.log("_onActionFindUserSucceed (delete user): ", data);
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHATUSER, {
            userId: data.id,
            chatId: this.props.chatId
        });
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATUSERS, this.props.chatId);
    }
    _onActionDeleteChatUserFailed(data) {
        const text = JSON.parse(data).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
        console.log("Error on add chat user: ", text);
    }
    _onActionDeleteChatUserSucceed() {
        this._errorMessage.setProps({
            "text": "User deleted",
            "class": this.props.styles.error
        });
    }
    hideModal(e) {
        const el = e.target;
        if (!el) return false;
        if (el.classList.contains(this.props.styles["modal-container"])) this.hide();
    }
    render() {
        const inputUserLogin = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input}`,
            name: "login",
            validationType: "login",
            placeholder: "Логин пользователя"
        });
        const errorMessage = new (0, _components.ErrorMessage)({
            text: "",
            class: this.props.styles.error
        });
        const buttonDelete = new (0, _components.Button)({
            text: "Удалить",
            class: `${this.props.styles.button} ` + `${this.props.styles["signup-form-button-primary"]} ` + `${this.props.styles["delete-user-button"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this._errorMessage.setProps({
                        "text": "",
                        "class": this.props.styles.error
                    });
                    const inputs = [
                        inputUserLogin
                    ];
                    try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_DELETECHATUSER, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_FINDUSER, inputs, {
                            succeedEvent: (0, _globaleventbusDefault.default).EVENTS.ACTION_DELETEFINDUSER_SUCCEED,
                            failedEvent: (0, _globaleventbusDefault.default).EVENTS.ACTION_DELETEFINDUSER_FAILED
                        });
                    } catch (error) {
                        console.log("Error: ", error);
                    }
                }
            }
        });
        this._errorMessage = errorMessage;
        return (0, _compileDefault.default)((0, _deleteUserHbsDefault.default), {
            inputUserLogin,
            errorMessage,
            buttonDelete,
            ...this.props
        });
    }
}

},{"./delete-user.hbs":"c347n","../../../utils/compile":"hStup","../../../components":"dHnah","../../../utils/globaleventbus":"650P3","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c347n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-container") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-popup") : stack1, depth0)) + '>\r\n        <form method="post" class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "delete-user-form") : stack1, depth0)) + ">\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar-modal-header") : stack1, depth0)) + ">Удалить пользователя из чата:</div>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputUserLogin") || (depth0 != null ? lookupProperty(depth0, "inputUserLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputUserLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "errorMessage") || (depth0 != null ? lookupProperty(depth0, "errorMessage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "errorMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonDelete") || (depth0 != null ? lookupProperty(depth0, "buttonDelete") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonDelete",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </form>\r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxHi6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalConfirm", ()=>ModalConfirm);
var _confirmHbs = require("./confirm.hbs");
var _confirmHbsDefault = parcelHelpers.interopDefault(_confirmHbs);
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../../components");
var _globaleventbus = require("../../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _renderDom = require("../../../utils/renderDom");
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ModalConfirm extends (0, _pageDefault.default) {
    constructor(props){
        super("div", {
            ...props,
            events: {
                click: (e)=>this.hideModal(e)
            }
        });
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHAT_SUCCEED, this._onActionDeleteChatSucceed.bind(this));
    }
    _onActionDeleteChatSucceed() {
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATS);
        const stub = new (0, _components.Label)({
            text: "Выберите чат чтобы отправить сообщение",
            class: this.props.styles["chat-stub"]
        });
        (0, _renderDom.renderDOM)("#conversation", stub);
        this.hide();
    }
    hideModal(e) {
        const el = e.target;
        if (!el) return false;
        if (el.classList.contains(this.props.styles["modal-container"])) this.hide();
    }
    render() {
        const errorMessage = new (0, _components.ErrorMessage)({
            text: "",
            class: this.props.styles.error
        });
        const buttonConfirm = new (0, _components.Button)({
            text: "Подтвердить",
            class: `${this.props.styles.button} ` + `${this.props.styles["signup-form-button-primary"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this._errorMessage.setProps({
                        "text": "",
                        "class": this.props.styles.error
                    });
                    try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHAT, this.props.chatId);
                    } catch (error) {
                        console.log("Error: ", error);
                    }
                }
            }
        });
        const buttonCancel = new (0, _components.Button)({
            text: "Отменить",
            class: `${this.props.styles.button} ` + `${this.props.styles["signup-form-button-secondary"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this.hide();
                }
            }
        });
        this._errorMessage = errorMessage;
        return (0, _compileDefault.default)((0, _confirmHbsDefault.default), {
            errorMessage,
            buttonConfirm,
            buttonCancel,
            ...this.props
        });
    }
}

},{"./confirm.hbs":"gE2nS","../../../utils/compile":"hStup","../../../components":"dHnah","../../../utils/globaleventbus":"650P3","../../../utils/renderDom":"bcslR","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gE2nS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-container") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal-popup") : stack1, depth0)) + ">\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar-modal-header") : stack1, depth0)) + ">Вы уверены?</div>\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "confirm-spacer") : stack1, depth0)) + ">&nbsp;</div>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonConfirm") || (depth0 != null ? lookupProperty(depth0, "buttonConfirm") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonConfirm",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonCancel") || (depth0 != null ? lookupProperty(depth0, "buttonCancel") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonCancel",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </form>\r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLYV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Conversation", ()=>Conversation);
var _conversationHbs = require("./conversation.hbs");
var _conversationHbsDefault = parcelHelpers.interopDefault(_conversationHbs);
var _compile = require("../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../components");
var _globaleventbus = require("../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _user = require("../../utils/user");
var _userDefault = parcelHelpers.interopDefault(_user);
var _renderDom = require("../../utils/renderDom");
var _modals = require("../modals");
var _config = require("../../utils/config");
var _page = require("../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
var _validator = require("../../utils/validator");
class Conversation extends (0, _pageDefault.default) {
    constructor(props){
        super("div", props);
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.MESSAGES_RECEIVED, this._onMessagesReceived.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATUSERS_SUCCEED, this._onGetChatUsersSucceed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SENDMESSAGE_FAILED, this._onValidateSendMessageFailed.bind(this));
        this._messages = [];
    }
    _onGetChatUsersSucceed(data) {
        const { users  } = data;
        const chatUsers = [];
        users.forEach((user)=>{
            let avatar = this.props.icons.user;
            if (user.avatar) avatar = (0, _config.config).resourceUrl + user.avatar;
            console.log(avatar);
            const displayName = user.display_name ? user.display_name : `${user.first_name} ${user.second_name}`;
            chatUsers.push(new (0, _components.Image)({
                src: avatar,
                class: this.props.styles["avatar-image"]
            }));
            chatUsers.push(new (0, _components.Label)({
                text: displayName,
                class: this.props.styles["conversation-user-name"]
            }));
        });
        this.setProps({
            chatUsers
        });
    }
    _onValidateSendMessageFailed(formData) {
        Object.keys(formData).forEach((key)=>{
            if (!formData[key].isValid) {
                const element = document.querySelector(`input[name=${key}]`);
                element?.classList.add(this.props.styles["input-error"]);
            }
        });
        throw new Error("Validation Error");
    }
    _onMessagesReceived(data) {
        const messagesData = JSON.parse(data);
        let previousDate;
        if (messagesData instanceof Array) {
            messagesData.reverse();
            messagesData.forEach((message)=>{
                const messageDate = new Date(message.time);
                if (!previousDate || previousDate.toLocaleDateString() !== messageDate.toLocaleDateString()) this._messages.push(new (0, _components.Message)({
                    isMessage: false,
                    date: `${messageDate.getDate()} ${(0, _config.config).monthsNames[messageDate.getMonth()]}`,
                    styles: this.props.styles
                }));
                previousDate = messageDate;
                const timeString = `${messageDate.getHours()}:${messageDate.getMinutes()}`;
                const self = (0, _userDefault.default).instance.getData("id") == message.user_id;
                this._messages.push(new (0, _components.Message)({
                    isMessage: true,
                    styles: this.props.styles,
                    icons: this.props.icons,
                    text: message.content,
                    time: timeString,
                    isRead: message.is_read,
                    file: message.file,
                    self
                }));
            });
            this.setProps({
                messages: this._messages
            });
        } else if (messagesData.type === "message") {
            const messageDate = new Date(messagesData.time);
            const timeString = `${messageDate.getHours()}:${messageDate.getMinutes()}`;
            const self = (0, _userDefault.default).instance.getData("id") == messagesData.user_id;
            this._messages.push(new (0, _components.Message)({
                isMessage: true,
                styles: this.props.styles,
                icons: this.props.icons,
                text: messagesData.content,
                time: timeString,
                isRead: messagesData.is_read,
                file: messagesData.file,
                self
            }));
            this.setProps({
                messages: this._messages
            });
        }
    }
    render() {
        const messages = [];
        const chatUsers = [];
        const conversationActionsLink = new (0, _components.Image)({
            src: this.props.icons.threedots,
            class: this.props.styles["actions-button"],
            events: {
                click: ()=>{
                    (0, _renderDom.renderDOM)("#modal", new (0, _modals.ChatActions)(this.props));
                }
            }
        });
        const inputMessage = new (0, _components.Input)({
            type: "textarea",
            class: `${this.props.styles.input} ${this.props.styles["input-conversation-message-box"]}`,
            name: "message",
            validationType: "message",
            placeholder: "Сообщение"
        });
        const linkSend = new (0, _components.Link)({
            class: this.props.styles["arrow-button"],
            imageBeforeClass: this.props.styles["send-button"],
            imageBeforeSrc: this.props.icons.arrow,
            imagesAlt: "Отправить сообщение",
            events: {
                click: ()=>{
                    const inputs = [
                        inputMessage
                    ];
                    const formData = {};
                    let isFormValid = true;
                    inputs.map((input)=>{
                        const el = input.element;
                        const validationResult = (0, _validator.isValid)(el);
                        if (!validationResult.valid) {
                            isFormValid = false;
                            el.classList.add(this.props.styles["input-error"]);
                            const prevError = el.nextElementSibling;
                            if (prevError && prevError.parentNode && prevError instanceof (0, _components.ErrorInput)) prevError.parentNode.removeChild(prevError);
                            const error = new (0, _components.ErrorInput)({
                                text: validationResult.reason,
                                class: this.props.styles["input-error"]
                            });
                            el.insertAdjacentElement("afterend", error.getContent());
                        } else {
                            const name = el.getAttribute("name");
                            const { value  } = el;
                            if (name) formData[name] = value;
                            el.classList.remove(this.props.styles["input-error"]);
                            const prevError = el.nextElementSibling;
                            if (prevError && prevError.parentNode && prevError instanceof (0, _components.ErrorInput)) prevError.parentNode.removeChild(prevError);
                        }
                    });
                    //Мне внимательность нужно еще прокачать, закоментировал отправку и забыл про это
                    if (isFormValid) try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SENDMESSAGE, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SENDMESSAGE, inputs);
                    } catch (error) {
                        console.log("Error on send message: ", error);
                    }
                }
            }
        });
        return (0, _compileDefault.default)((0, _conversationHbsDefault.default), {
            conversationActionsLink,
            inputMessage,
            chatUsers,
            messages,
            linkSend,
            ...this.props
        });
    }
}

},{"./conversation.hbs":"7ieqQ","../../utils/compile":"hStup","../../components":"dHnah","../../utils/globaleventbus":"650P3","../../utils/user":"1XbwN","../../utils/renderDom":"bcslR","../modals":"gNlo4","../../utils/config":"dAjWq","../../utils/page":"jApZs","../../utils/validator":"crxki","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ieqQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-container") : stack1, depth0)) + ">\r\n<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-header") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-avatar-container") : stack1, depth0)) + ">\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatUsers") || (depth0 != null ? lookupProperty(depth0, "chatUsers") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "chatUsers",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 25
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    </div>\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-actions-container") : stack1, depth0)) + ">\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "conversationActionsLink") || (depth0 != null ? lookupProperty(depth0, "conversationActionsLink") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "conversationActionsLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 8
                },
                "end": {
                    "line": 7,
                    "column": 39
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    </div>\r\n\r\n</div>\r\n<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-body-container") : stack1, depth0)) + ">\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "messages") || (depth0 != null ? lookupProperty(depth0, "messages") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "messages",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 4
                },
                "end": {
                    "line": 12,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</div>\r\n<div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-footer") : stack1, depth0)) + ">\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "attach-button-container") : stack1, depth0)) + ">\r\n        <img class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "attach-button") : stack1, depth0)) + " src=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "icons") : depth0) != null ? lookupProperty(stack1, "paperclip") : stack1, depth0)) + ' alt="' + alias2((helper = (helper = lookupProperty(helpers, "imagesAlt") || (depth0 != null ? lookupProperty(depth0, "imagesAlt") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "imagesAlt",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 77
                },
                "end": {
                    "line": 16,
                    "column": 92
                }
            }
        }) : helper)) + '">\r\n    </div>\r\n    <div class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "conversation-message-box") : stack1, depth0)) + ">\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputMessage") || (depth0 != null ? lookupProperty(depth0, "inputMessage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 19,
                    "column": 8
                },
                "end": {
                    "line": 19,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    </div>\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "arrow-button-container") : stack1, depth0)) + ">\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkSend") || (depth0 != null ? lookupProperty(depth0, "linkSend") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkSend",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 8
                },
                "end": {
                    "line": 22,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + " \r\n    </div>\r\n</div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8Cmk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileInfo", ()=>ProfileInfo);
var _infoHbs = require("./info.hbs");
var _infoHbsDefault = parcelHelpers.interopDefault(_infoHbs);
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _components = require("../../../components");
var _renderDom = require("../../../utils/renderDom");
var _globaleventbus = require("../../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _modals = require("../../modals");
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ProfileInfo extends (0, _pageDefault.default) {
    constructor(props){
        super("div", props);
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.USERDATA_UPDATED, this._onUserDataUpdated.bind(this));
    }
    _onUserDataUpdated(user) {
        this.setProps({
            user: user.getData()
        });
    }
    render() {
        const changeAvatar = new (0, _components.Avatar)({
            ...this.props,
            imagesAlt: "Аватар",
            events: {
                click: ()=>{
                    (0, _renderDom.renderDOM)("#modal", new (0, _modals.ModalAvatar)(this.props));
                }
            }
        });
        const linkProfileReturn = new (0, _components.Link)({
            class: this.props.styles["arrow-button"],
            imageBeforeClass: this.props.styles["profile-return-button"],
            imageBeforeSrc: this.props.icons.arrowback,
            imagesAlt: "Назад",
            events: {
                click: ()=>{
                    this.props.router.go("/messenger");
                }
            }
        });
        const linkChangeInfo = new (0, _components.Link)({
            class: `${this.props.styles.link} ${this.props.styles["profile-info-link-change-info"]}`,
            text: "Изменить данные",
            imagesAlt: "Изменить данные",
            events: {
                click: ()=>{
                    this.props.router.go("/settings-change");
                }
            }
        });
        const linkChangePassword = new (0, _components.Link)({
            class: `${this.props.styles.link} ${this.props.styles["profile-info-link-change-password"]}`,
            text: "Изменить пароль",
            imagesAlt: "Изменить пароль",
            events: {
                click: ()=>{
                    this.props.router.go("/settings-password");
                }
            }
        });
        const linkExit = new (0, _components.Link)({
            class: `${this.props.styles.link} ${this.props.styles["profile-info-link-exit"]}`,
            text: "Выйти",
            imagesAlt: "Выйти",
            events: {
                click: ()=>{
                    this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGOUT, "/");
                }
            }
        });
        return (0, _compileDefault.default)((0, _infoHbsDefault.default), {
            changeAvatar,
            linkProfileReturn,
            linkChangeInfo,
            linkChangePassword,
            linkExit,
            ...this.props
        });
    }
}

},{"./info.hbs":"knwY0","../../../utils/compile":"hStup","../../../components":"dHnah","../../../utils/renderDom":"bcslR","../../../utils/globaleventbus":"650P3","../../modals":"gNlo4","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knwY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-container") : stack1, depth0)) + '">\r\n    <div class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-return") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "arrow-button-container") : stack1, depth0)) + ">\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkProfileReturn") || (depth0 != null ? lookupProperty(depth0, "linkProfileReturn") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkProfileReturn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 12
                },
                "end": {
                    "line": 4,
                    "column": 37
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </div>\r\n    </div>\r\n\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-container") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info") : stack1, depth0)) + ">\r\n            <div>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "changeAvatar") || (depth0 != null ? lookupProperty(depth0, "changeAvatar") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "changeAvatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 16
                },
                "end": {
                    "line": 11,
                    "column": 36
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-display-name") : stack1, depth0)) + ">" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "display_name") : stack1, depth0)) + "</div>\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-fields-container") : stack1, depth0)) + ">\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-name") : stack1, depth0)) + ">Почта</div>\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-value") : stack1, depth0)) + ">" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "email") : stack1, depth0)) + "</div>\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-name") : stack1, depth0)) + ">Логин</div>\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-value") : stack1, depth0)) + ">" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "login") : stack1, depth0)) + "</div>\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-name") : stack1, depth0)) + ">Имя</div>\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-value") : stack1, depth0)) + ">" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "first_name") : stack1, depth0)) + "</div>\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-name") : stack1, depth0)) + ">Фамилия</div>\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-value") : stack1, depth0)) + ">" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "second_name") : stack1, depth0)) + "</div>\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-name") : stack1, depth0)) + ">Имя в чате</div>\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-value") : stack1, depth0)) + ">" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "display_name") : stack1, depth0)) + "</div>\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-name") : stack1, depth0)) + ">Телефон</div>\r\n                    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field-value") : stack1, depth0)) + ">" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "phone") : stack1, depth0)) + "</div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-link") : stack1, depth0)) + ">\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkChangeInfo") || (depth0 != null ? lookupProperty(depth0, "linkChangeInfo") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkChangeInfo",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 43,
                    "column": 16
                },
                "end": {
                    "line": 43,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-link") : stack1, depth0)) + ">\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkChangePassword") || (depth0 != null ? lookupProperty(depth0, "linkChangePassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkChangePassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 46,
                    "column": 16
                },
                "end": {
                    "line": 46,
                    "column": 42
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-link") : stack1, depth0)) + ">\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkExit") || (depth0 != null ? lookupProperty(depth0, "linkExit") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkExit",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 49,
                    "column": 16
                },
                "end": {
                    "line": 49,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ep2UD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileChange", ()=>ProfileChange);
var _changeHbs = require("./change.hbs");
var _changeHbsDefault = parcelHelpers.interopDefault(_changeHbs);
var _components = require("../../../components");
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _validator = require("../../../utils/validator");
var _globaleventbus = require("../../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _user = require("../../../utils/user");
var _userDefault = parcelHelpers.interopDefault(_user);
var _config = require("../../../utils/config");
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ProfileChange extends (0, _pageDefault.default) {
    constructor(props){
        super("div", props);
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SAVEINFO_FAILED, this._onValidateSaveInfoFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEINFO_FAILED, this._onActionSaveInfoFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEINFO_SUCCEED, this._onActionSaveInfoSucceed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.USERDATA_UPDATED, this._onUserDataUpdated.bind(this));
    }
    _onUserDataUpdated(user) {
        this.setProps({
            user: user.getData()
        });
    }
    _onValidateSaveInfoFailed(formData) {
        Object.keys(formData).forEach((key)=>{
            if (!formData[key].isValid) {
                const element = document.querySelector(`input[name=${key}]`);
                element?.classList.add(this.props.styles["input-error"]);
                element?.previousElementSibling?.classList.add(this.props.styles["input-error"]);
            }
        });
        throw new Error("Validation Error");
    }
    _onActionSaveInfoFailed(res) {
        const text = JSON.parse(res.responseText).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
    }
    _onActionSaveInfoSucceed(userData) {
        const user = (0, _userDefault.default).instance;
        user.setData(userData);
        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.USERDATA_UPDATED, user);
        this._errorMessage.setProps({
            "text": "Info saved",
            "class": this.props.styles.error
        });
    }
    _onFocusChange(event) {
        const element = event.target;
        const validationResult = (0, _validator.isValid)(element);
        if (!validationResult.valid) {
            element.classList.add(this.props.styles["input-error"]);
            element.previousElementSibling?.classList.add(this.props.styles["input-error"]);
            const prevError = element.nextElementSibling;
            if (prevError && prevError.parentNode && prevError instanceof (0, _components.ErrorInput)) prevError.parentNode.removeChild(prevError);
            const error = new (0, _components.ErrorInput)({
                text: validationResult.reason,
                class: this.props.styles["input-error"]
            });
            element.insertAdjacentElement("afterend", error.getContent());
        } else {
            element.classList.remove(this.props.styles["input-error"]);
            element.previousElementSibling?.classList.remove(this.props.styles["input-error"]);
            const prevError = element.nextElementSibling;
            if (prevError && prevError.parentNode && prevError instanceof (0, _components.ErrorInput)) prevError.parentNode.removeChild(prevError);
        }
    }
    render() {
        const src = (0, _userDefault.default).instance.getData("avatar") ? (0, _config.config).resourceUrl + (0, _userDefault.default).instance.getData("avatar") : this.props.icons.user;
        const avatarImage = new (0, _components.AvatarImage)({
            class: this.props.styles["profile-avatar-image"],
            src
        });
        const inputEmail = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "email",
            validationType: "email",
            value: this.props.user?.email,
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputLogin = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "login",
            validationType: "login",
            value: this.props.user?.login,
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputFirstName = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "first_name",
            validationType: "name",
            value: this.props.user?.first_name,
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputSecondName = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "second_name",
            validationType: "name",
            value: this.props.user?.second_name,
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputDisplayName = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "display_name",
            validationType: "name",
            value: this.props.user?.display_name,
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputPhone = new (0, _components.Input)({
            type: "text",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "phone",
            validationType: "phone",
            value: this.props.user?.phone,
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const linkProfileChangeReturn = new (0, _components.Link)({
            class: this.props.styles["arrow-button"],
            imageBeforeClass: this.props.styles["profile-return-button"],
            imageBeforeSrc: this.props.icons.arrowback,
            events: {
                click: ()=>{
                    this._errorMessage.setProps({
                        "text": "",
                        "class": `${this.props.styles.error} ${this.props.styles["error-hide"]}`
                    });
                    this.props.router.go("/settings");
                }
            }
        });
        const errorMessage = new (0, _components.ErrorMessage)({
            class: `${this.props.styles.error} ${this.props.styles["error-hide"]}`
        });
        const buttonSave = new (0, _components.Button)({
            text: "Сохранить",
            class: `${this.props.styles.button} ${this.props.styles["profile-change-save-button"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    const inputs = [
                        inputEmail,
                        inputLogin,
                        inputFirstName,
                        inputSecondName,
                        inputPhone,
                        inputDisplayName
                    ];
                    try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SAVEINFO, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEINFO, inputs);
                    } catch (error) {
                        console.log("Error caught", error);
                    }
                }
            }
        });
        const labelEmail = new (0, _components.Label)({
            text: "Почта",
            class: this.props.styles["profile-info-field-name"]
        });
        const labelLogin = new (0, _components.Label)({
            text: "Логин",
            class: this.props.styles["profile-info-field-name"]
        });
        const labelFirstName = new (0, _components.Label)({
            text: "Имя",
            class: this.props.styles["profile-info-field-name"]
        });
        const labelSecondName = new (0, _components.Label)({
            text: "Фамилия",
            class: this.props.styles["profile-info-field-name"]
        });
        const labelDisplayName = new (0, _components.Label)({
            text: "Имя в чате",
            class: this.props.styles["profile-info-field-name"]
        });
        const labelPhone = new (0, _components.Label)({
            text: "Телефон",
            class: this.props.styles["profile-info-field-name"]
        });
        this._errorMessage = errorMessage;
        return (0, _compileDefault.default)((0, _changeHbsDefault.default), {
            styles: this.props.styles,
            images: this.props.images,
            avatarImage,
            labelEmail,
            labelLogin,
            labelFirstName,
            labelSecondName,
            labelDisplayName,
            labelPhone,
            inputEmail,
            inputLogin,
            inputFirstName,
            inputSecondName,
            inputDisplayName,
            inputPhone,
            linkProfileChangeReturn,
            errorMessage,
            buttonSave
        });
    }
}

},{"./change.hbs":"1dJ3c","../../../components":"dHnah","../../../utils/compile":"hStup","../../../utils/validator":"crxki","../../../utils/globaleventbus":"650P3","../../../utils/user":"1XbwN","../../../utils/config":"dAjWq","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1dJ3c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-container") : stack1, depth0)) + '">\r\n    <div class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-change-return") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "arrow-button-container") : stack1, depth0)) + ">\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkProfileChangeReturn") || (depth0 != null ? lookupProperty(depth0, "linkProfileChangeReturn") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkProfileChangeReturn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 12
                },
                "end": {
                    "line": 4,
                    "column": 43
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </div>\r\n\r\n    </div>\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-container") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info") : stack1, depth0)) + ">\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatarImage") || (depth0 != null ? lookupProperty(depth0, "avatarImage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "avatarImage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 12
                },
                "end": {
                    "line": 10,
                    "column": 31
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-fields-container") : stack1, depth0)) + ">\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelEmail") || (depth0 != null ? lookupProperty(depth0, "labelEmail") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelEmail",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 20
                },
                "end": {
                    "line": 13,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputEmail") || (depth0 != null ? lookupProperty(depth0, "inputEmail") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputEmail",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 20
                },
                "end": {
                    "line": 14,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelLogin") || (depth0 != null ? lookupProperty(depth0, "labelLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 20
                },
                "end": {
                    "line": 17,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputLogin") || (depth0 != null ? lookupProperty(depth0, "inputLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 20
                },
                "end": {
                    "line": 18,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelFirstName") || (depth0 != null ? lookupProperty(depth0, "labelFirstName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelFirstName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 21,
                    "column": 20
                },
                "end": {
                    "line": 21,
                    "column": 42
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputFirstName") || (depth0 != null ? lookupProperty(depth0, "inputFirstName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputFirstName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 20
                },
                "end": {
                    "line": 22,
                    "column": 42
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelSecondName") || (depth0 != null ? lookupProperty(depth0, "labelSecondName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelSecondName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 25,
                    "column": 20
                },
                "end": {
                    "line": 25,
                    "column": 43
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputSecondName") || (depth0 != null ? lookupProperty(depth0, "inputSecondName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputSecondName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 26,
                    "column": 20
                },
                "end": {
                    "line": 26,
                    "column": 43
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelDisplayName") || (depth0 != null ? lookupProperty(depth0, "labelDisplayName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelDisplayName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 29,
                    "column": 20
                },
                "end": {
                    "line": 29,
                    "column": 44
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputDisplayName") || (depth0 != null ? lookupProperty(depth0, "inputDisplayName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputDisplayName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 30,
                    "column": 20
                },
                "end": {
                    "line": 30,
                    "column": 44
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelPhone") || (depth0 != null ? lookupProperty(depth0, "labelPhone") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelPhone",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 33,
                    "column": 20
                },
                "end": {
                    "line": 33,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputPhone") || (depth0 != null ? lookupProperty(depth0, "inputPhone") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputPhone",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 34,
                    "column": 20
                },
                "end": {
                    "line": 34,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n            </div>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "errorMessage") || (depth0 != null ? lookupProperty(depth0, "errorMessage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "errorMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 37,
                    "column": 12
                },
                "end": {
                    "line": 37,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonSave") || (depth0 != null ? lookupProperty(depth0, "buttonSave") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonSave",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 38,
                    "column": 12
                },
                "end": {
                    "line": 38,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </div>\r\n    </div>\r\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6SX2D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePassword", ()=>ProfilePassword);
var _passwordHbs = require("./password.hbs");
var _passwordHbsDefault = parcelHelpers.interopDefault(_passwordHbs);
var _components = require("../../../components");
var _compile = require("../../../utils/compile");
var _compileDefault = parcelHelpers.interopDefault(_compile);
var _validator = require("../../../utils/validator");
var _globaleventbus = require("../../../utils/globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
var _user = require("../../../utils/user");
var _userDefault = parcelHelpers.interopDefault(_user);
var _config = require("../../../utils/config");
var _page = require("../../../utils/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class ProfilePassword extends (0, _pageDefault.default) {
    constructor(props){
        super("div", props);
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SAVEPASSWORD_FAILED, this._onValidateSavePasswordFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEPASSWORD_FAILED, this._onActionSavePasswordFailed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEPASSWORD_SUCCEED, this._onActionSavePasswordSucceed.bind(this));
        this.g.EventBus.on((0, _globaleventbusDefault.default).EVENTS.USERDATA_UPDATED, this._onUserDataUpdated.bind(this));
    }
    _onUserDataUpdated(user) {
        this.setProps({
            user: user.getData()
        });
    }
    _onValidateSavePasswordFailed(formData) {
        Object.keys(formData).forEach((key)=>{
            if (!formData[key].isValid) {
                const element = document.querySelector(`input[name=${key}]`);
                element?.classList.add(this.props.styles["input-error"]);
                element?.previousElementSibling?.classList.add(this.props.styles["input-error"]);
            }
        });
        throw new Error("Validation Error");
    }
    _onActionSavePasswordFailed(res) {
        const text = JSON.parse(res.responseText).reason;
        this._errorMessage.setProps({
            "text": text,
            "class": this.props.styles.error
        });
    }
    _onActionSavePasswordSucceed() {
        this._errorMessage.setProps({
            "text": "Password saved",
            "class": this.props.styles.error
        });
    }
    _onFocusChange(event) {
        const element = event.target;
        const validationResult = (0, _validator.isValid)(element);
        if (!validationResult.valid) {
            element.classList.add(this.props.styles["input-error"]);
            element.previousElementSibling?.classList.add(this.props.styles["input-error"]);
            const prevError = element.nextElementSibling;
            if (prevError && prevError.parentNode && prevError instanceof (0, _components.ErrorInput)) prevError.parentNode.removeChild(prevError);
            const error = new (0, _components.ErrorInput)({
                text: validationResult.reason,
                class: this.props.styles["input-error"]
            });
            element.insertAdjacentElement("afterend", error.getContent());
        } else {
            element.classList.remove(this.props.styles["input-error"]);
            element.previousElementSibling?.classList.remove(this.props.styles["input-error"]);
            const prevError = element.nextElementSibling;
            if (prevError && prevError.parentNode && prevError instanceof (0, _components.ErrorInput)) prevError.parentNode.removeChild(prevError);
        }
        if (element.name == "newPassword2") {
            const password1 = element.form?.elements.newPassword;
            if (password1 && element.value !== password1.value) {
                element.classList.add(this.props.styles["input-error"]);
                element.previousElementSibling?.classList.remove(this.props.styles["input-error"]);
            }
        }
    }
    render() {
        const src = (0, _userDefault.default).instance.getData("avatar") ? (0, _config.config).resourceUrl + (0, _userDefault.default).instance.getData("avatar") : this.props.icons.user;
        const avatarImage = new (0, _components.AvatarImage)({
            class: this.props.styles["profile-avatar-image"],
            src
        });
        const inputOldPassword = new (0, _components.Input)({
            type: "password",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "oldPassword",
            validationType: "password",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputNewPassword = new (0, _components.Input)({
            type: "password",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "newPassword",
            validationType: "password",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const inputNewPassword2 = new (0, _components.Input)({
            type: "password",
            class: `${this.props.styles.input} ${this.props.styles["profile-change-field-value"]}`,
            name: "newPassword2",
            validationType: "password",
            events: {
                blur: this._onFocusChange.bind(this),
                focus: this._onFocusChange.bind(this)
            }
        });
        const linkProfilePasswordReturn = new (0, _components.Link)({
            class: this.props.styles["arrow-button"],
            imageBeforeClass: this.props.styles["profile-return-button"],
            imageBeforeSrc: this.props.icons.arrowback,
            events: {
                click: ()=>{
                    this._errorMessage.setProps({
                        "text": "",
                        "class": `${this.props.styles.error} ${this.props.styles["error-hide"]}`
                    });
                    this.props.router.go("/settings");
                }
            }
        });
        const errorMessage = new (0, _components.ErrorMessage)({
            class: `${this.props.styles.error} ${this.props.styles["error-hide"]}`
        });
        const inputs = [
            inputOldPassword,
            inputNewPassword,
            inputNewPassword2
        ];
        const buttonSave = new (0, _components.Button)({
            text: "Сохранить",
            class: `${this.props.styles.button} ${this.props.styles["profile-change-password-save-button"]}`,
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this._errorMessage.setProps({
                        "class": `${this.props.styles.error} ${this.props.styles["error-hide"]}`
                    });
                    try {
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.VALIDATE_SAVEPASSWORD, inputs);
                        this.g.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEPASSWORD, inputs);
                    } catch (error) {
                        console.log("Error caught", error);
                    }
                }
            }
        });
        const labelOldPassword = new (0, _components.Label)({
            text: "Старый пароль",
            class: this.props.styles["profile-info-field-name"]
        });
        const labelNewPassword = new (0, _components.Label)({
            text: "Новый пароль",
            class: this.props.styles["profile-info-field-name"]
        });
        const labelNewPassword2 = new (0, _components.Label)({
            text: "Повторите новый пароль",
            class: this.props.styles["profile-info-field-name"]
        });
        this._errorMessage = errorMessage;
        return (0, _compileDefault.default)((0, _passwordHbsDefault.default), {
            styles: this.props.styles,
            images: this.props.images,
            avatarImage,
            labelOldPassword,
            labelNewPassword,
            labelNewPassword2,
            inputOldPassword,
            inputNewPassword,
            inputNewPassword2,
            linkProfilePasswordReturn,
            errorMessage,
            buttonSave
        });
    }
}

},{"./password.hbs":"6inpi","../../../components":"dHnah","../../../utils/compile":"hStup","../../../utils/validator":"crxki","../../../utils/globaleventbus":"650P3","../../../utils/user":"1XbwN","../../../utils/config":"dAjWq","../../../utils/page":"jApZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6inpi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-container") : stack1, depth0)) + '">\r\n    <div class=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-change-password-return") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "arrow-button-container") : stack1, depth0)) + ">\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "linkProfilePasswordReturn") || (depth0 != null ? lookupProperty(depth0, "linkProfilePasswordReturn") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "linkProfilePasswordReturn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 12
                },
                "end": {
                    "line": 4,
                    "column": 45
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </div>\r\n\r\n    </div>\r\n    <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-container") : stack1, depth0)) + ">\r\n        <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info") : stack1, depth0)) + ">\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatarImage") || (depth0 != null ? lookupProperty(depth0, "avatarImage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "avatarImage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 12
                },
                "end": {
                    "line": 10,
                    "column": 31
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-fields-container") : stack1, depth0)) + ">\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelOldPassword") || (depth0 != null ? lookupProperty(depth0, "labelOldPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelOldPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 20
                },
                "end": {
                    "line": 13,
                    "column": 44
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputOldPassword") || (depth0 != null ? lookupProperty(depth0, "inputOldPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputOldPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 20
                },
                "end": {
                    "line": 14,
                    "column": 44
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelNewPassword") || (depth0 != null ? lookupProperty(depth0, "labelNewPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelNewPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 20
                },
                "end": {
                    "line": 17,
                    "column": 44
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputNewPassword") || (depth0 != null ? lookupProperty(depth0, "inputNewPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputNewPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 20
                },
                "end": {
                    "line": 18,
                    "column": 44
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n                <div class=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile-info-field") : stack1, depth0)) + ">\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "labelNewPassword2") || (depth0 != null ? lookupProperty(depth0, "labelNewPassword2") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "labelNewPassword2",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 21,
                    "column": 20
                },
                "end": {
                    "line": 21,
                    "column": 45
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputNewPassword2") || (depth0 != null ? lookupProperty(depth0, "inputNewPassword2") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "inputNewPassword2",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 20
                },
                "end": {
                    "line": 22,
                    "column": 45
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                </div>\r\n            </div>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "errorMessage") || (depth0 != null ? lookupProperty(depth0, "errorMessage") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "errorMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 25,
                    "column": 12
                },
                "end": {
                    "line": 25,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonSave") || (depth0 != null ? lookupProperty(depth0, "buttonSave") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "buttonSave",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 26,
                    "column": 12
                },
                "end": {
                    "line": 26,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </div>\r\n    </div>\r\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHHg5":[function(require,module,exports) {
module.exports["button"] = "button_28904b";
module.exports["button-primary-loading"] = "button-primary-loading_28904b";
module.exports["input"] = "input_28904b";
module.exports["label"] = "label_28904b";
module.exports["form-label"] = "form-label_28904b";
module.exports["chat-info-container"] = "chat-info-container_28904b";
module.exports["chat-info"] = "chat-info_28904b";
module.exports["chat-avatar"] = "chat-avatar_28904b";
module.exports["avatar-image"] = "avatar-image_28904b";
module.exports["chat-name"] = "chat-name_28904b";
module.exports["chat-time"] = "chat-time_28904b";
module.exports["chat-last-message"] = "chat-last-message_28904b";
module.exports["chat-unread-count-container"] = "chat-unread-count-container_28904b";
module.exports["chat-unread-count"] = "chat-unread-count_28904b";
module.exports["link"] = "link_28904b";
module.exports["error"] = "error_28904b";
module.exports["error-hide"] = "error-hide_28904b";
module.exports["form-login-spacer"] = "form-login-spacer_28904b";
module.exports["login-form-button-primary"] = "login-form-button-primary_28904b";
module.exports["login-form-button-secondary"] = "login-form-button-secondary_28904b";
module.exports["form-signup-spacer"] = "form-signup-spacer_28904b";
module.exports["signup-form-button-primary"] = "signup-form-button-primary_28904b";
module.exports["signup-form-button-secondary"] = "signup-form-button-secondary_28904b";
module.exports["chat-container"] = "chat-container_28904b";
module.exports["chat-left-container"] = "chat-left-container_28904b";
module.exports["chat-infos-container"] = "chat-infos-container_28904b";
module.exports["chat-right-container"] = "chat-right-container_28904b";
module.exports["chat-stub"] = "chat-stub_28904b";
module.exports["profile-link-container"] = "profile-link-container_28904b";
module.exports["link-profile-open"] = "link-profile-open_28904b";
module.exports["search-container"] = "search-container_28904b";
module.exports["search-container-placeholder"] = "search-container-placeholder_28904b";
module.exports["search-icon"] = "search-icon_28904b";
module.exports["input-search-box"] = "input-search-box_28904b";
module.exports["add-chat-container"] = "add-chat-container_28904b";
module.exports["link-add-chat"] = "link-add-chat_28904b";
module.exports["conversation-container"] = "conversation-container_28904b";
module.exports["conversation-header"] = "conversation-header_28904b";
module.exports["conversation-avatar-container"] = "conversation-avatar-container_28904b";
module.exports["conversation-avatar-image"] = "conversation-avatar-image_28904b";
module.exports["conversation-user-name"] = "conversation-user-name_28904b";
module.exports["conversation-actions-container"] = "conversation-actions-container_28904b";
module.exports["actions-button"] = "actions-button_28904b";
module.exports["conversation-body-container"] = "conversation-body-container_28904b";
module.exports["conversation-date"] = "conversation-date_28904b";
module.exports["conversation-other-message"] = "conversation-other-message_28904b";
module.exports["conversation-other-message-time"] = "conversation-other-message-time_28904b";
module.exports["conversation-self-message"] = "conversation-self-message_28904b";
module.exports["conversation-self-message-status"] = "conversation-self-message-status_28904b";
module.exports["conversation-self-message-time"] = "conversation-self-message-time_28904b";
module.exports["conversation-footer"] = "conversation-footer_28904b";
module.exports["attach-button-container"] = "attach-button-container_28904b";
module.exports["attach-button"] = "attach-button_28904b";
module.exports["conversation-message-box"] = "conversation-message-box_28904b";
module.exports["input-conversation-message-box"] = "input-conversation-message-box_28904b";
module.exports["arrow-button-container"] = "arrow-button-container_28904b";
module.exports["arrow-button"] = "arrow-button_28904b";
module.exports["send-button"] = "send-button_28904b";
module.exports["profile-container"] = "profile-container_28904b";
module.exports["profile-return"] = "profile-return_28904b";
module.exports["profile-return-button"] = "profile-return-button_28904b";
module.exports["profile-info-container"] = "profile-info-container_28904b";
module.exports["profile-info"] = "profile-info_28904b";
module.exports["profile-avatar-image"] = "profile-avatar-image_28904b";
module.exports["profile-avatar-wrapper"] = "profile-avatar-wrapper_28904b";
module.exports["profile-change-avatar-container"] = "profile-change-avatar-container_28904b";
module.exports["profile-change-avatar-text"] = "profile-change-avatar-text_28904b";
module.exports["profile-display-name"] = "profile-display-name_28904b";
module.exports["profile-info-fields-container"] = "profile-info-fields-container_28904b";
module.exports["profile-info-field"] = "profile-info-field_28904b";
module.exports["profile-info-field-name"] = "profile-info-field-name_28904b";
module.exports["profile-info-field-value"] = "profile-info-field-value_28904b";
module.exports["profile-info-link"] = "profile-info-link_28904b";
module.exports["profile-info-link-change-info"] = "profile-info-link-change-info_28904b";
module.exports["profile-info-link-change-password"] = "profile-info-link-change-password_28904b";
module.exports["profile-info-link-exit"] = "profile-info-link-exit_28904b";
module.exports["form-profile-spacer"] = "form-profile-spacer_28904b";
module.exports["profile-change-return"] = "profile-change-return_28904b";
module.exports["profile-change-field-value"] = "profile-change-field-value_28904b";
module.exports["profile-change-save-button"] = "profile-change-save-button_28904b";
module.exports["profile-change-password-return"] = "profile-change-password-return_28904b";
module.exports["profile-change-password-save-button"] = "profile-change-password-save-button_28904b";
module.exports["avatar-modal-header"] = "avatar-modal-header_28904b";
module.exports["avatar-form"] = "avatar-form_28904b";
module.exports["hidden"] = "hidden_28904b";
module.exports["avatar-modal-choose-file-container"] = "avatar-modal-choose-file-container_28904b";
module.exports["avatar-modal-file"] = "avatar-modal-file_28904b";
module.exports["avatar-modal-choose-file"] = "avatar-modal-choose-file_28904b";
module.exports["avatar-modal-change-avatar"] = "avatar-modal-change-avatar_28904b";
module.exports["create-chat-form"] = "create-chat-form_28904b";
module.exports["create-chat-button"] = "create-chat-button_28904b";
module.exports["chat-actions-element"] = "chat-actions-element_28904b";
module.exports["chat-actions-icon"] = "chat-actions-icon_28904b";
module.exports["add-user-form"] = "add-user-form_28904b";
module.exports["add-user-button"] = "add-user-button_28904b";
module.exports["delete-user-form"] = "delete-user-form_28904b";
module.exports["delete-user-button"] = "delete-user-button_28904b";
module.exports["confirm-spacer"] = "confirm-spacer_28904b";
module.exports["modal-container"] = "modal-container_28904b";
module.exports["modal-popup"] = "modal-popup_28904b";
module.exports["modal-popup-small"] = "modal-popup-small_28904b";
module.exports["auth-popup"] = "auth-popup_28904b";
module.exports["auth-container"] = "auth-container_28904b";
module.exports["auth-header"] = "auth-header_28904b";
module.exports["form"] = "form_28904b";

},{}],"bwDBm":[function(require,module,exports) {
module.exports = require("e91c38578278749a").getBundleURL("7UhFu") + "avatar04.beca602b.png" + "?" + Date.now();

},{"e91c38578278749a":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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

},{}],"hWESu":[function(require,module,exports) {
const _temp0 = require("f9d4c4b9b2696fc6");
const _temp1 = require("fb8a3845b71c41e");
const _temp2 = require("60065caaf404ce31");
const _temp3 = require("dd25abf6de826d8b");
const _temp4 = require("b45c77721726a096");
const _temp5 = require("a39e78c93c77626d");
const _temp6 = require("bc972b519b47c4fe");
module.exports = {
    "arrow": _temp0,
    "arrowback": _temp1,
    "paperclip": _temp2,
    "profilearrow": _temp3,
    "search": _temp4,
    "status-read": _temp5,
    "threedots": _temp6
};

},{"f9d4c4b9b2696fc6":"1rcZ6","fb8a3845b71c41e":"e52U8","60065caaf404ce31":"b35Px","dd25abf6de826d8b":"48BmJ","b45c77721726a096":"3KugL","a39e78c93c77626d":"ecp6B","bc972b519b47c4fe":"cyiyZ"}],"1rcZ6":[function(require,module,exports) {
module.exports = require("6a894fb5843a71ce").getBundleURL("7UhFu") + "arrow.efc41f8d.svg" + "?" + Date.now();

},{"6a894fb5843a71ce":"lgJ39"}],"e52U8":[function(require,module,exports) {
module.exports = require("608231f3e8a983dc").getBundleURL("7UhFu") + "arrowback.b08707c3.svg" + "?" + Date.now();

},{"608231f3e8a983dc":"lgJ39"}],"b35Px":[function(require,module,exports) {
module.exports = require("7e5200ee1f17d20").getBundleURL("7UhFu") + "paperclip.75b1155c.svg" + "?" + Date.now();

},{"7e5200ee1f17d20":"lgJ39"}],"48BmJ":[function(require,module,exports) {
module.exports = require("6c480bbdf3a24c59").getBundleURL("7UhFu") + "profilearrow.573b2444.svg" + "?" + Date.now();

},{"6c480bbdf3a24c59":"lgJ39"}],"3KugL":[function(require,module,exports) {
module.exports = require("382d486e12b96669").getBundleURL("7UhFu") + "search.1a0ada5e.svg" + "?" + Date.now();

},{"382d486e12b96669":"lgJ39"}],"ecp6B":[function(require,module,exports) {
module.exports = require("5ffb1c3b8570cb59").getBundleURL("7UhFu") + "status-read.6a6b7662.svg" + "?" + Date.now();

},{"5ffb1c3b8570cb59":"lgJ39"}],"cyiyZ":[function(require,module,exports) {
module.exports = require("5adce87ca2dff31e").getBundleURL("7UhFu") + "threedots.ec2c729b.svg" + "?" + Date.now();

},{"5adce87ca2dff31e":"lgJ39"}],"1bjm9":[function(require,module,exports) {
const _temp0 = require("381e2e76d970f8c6");
module.exports = {
    "favicon": _temp0
};

},{"381e2e76d970f8c6":"b9uyj"}],"b9uyj":[function(require,module,exports) {
module.exports = require("7d2567d9b896d6c1").getBundleURL("7UhFu") + "favicon.385001e9.png" + "?" + Date.now();

},{"7d2567d9b896d6c1":"lgJ39"}],"9kXaW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _route = require("./route");
var _routeDefault = parcelHelpers.interopDefault(_route);
class Router {
    constructor(rootQuery){
        if (Router.__instance) return Router.__instance;
        this.routes = [];
        this.history = window.history;
        this._rootQuery = rootQuery;
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new (0, _routeDefault.default)(pathname, block, {
            rootQuery: this._rootQuery
        });
        this.routes.push(route);
        return this;
    }
    start() {
        console.log(location.pathname);
        window.onpopstate = (event)=>{
            this._onRoute(event.currentTarget.location.pathname);
        };
    }
    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) return;
        if (this._currentRoute && this._currentRoute !== route) this._currentRoute.leave();
        this._currentRoute = route;
        route.render();
    }
    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname) {
        return this.routes.find((route)=>route.match(pathname));
    }
    getCurrentRoute() {
        return this._currentRoute;
    }
}
exports.default = Router;

},{"./route":"lfpLS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lfpLS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderDom = require("../renderDom");
class Route {
    constructor(pathname, view, props){
        this._pathname = pathname;
        this._blockClass = view;
        this._props = props;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }
    leave() {
        if (this._block) this._block.hide();
    }
    match(pathname) {
        return pathname === this._pathname;
    }
    render() {
        if (!this._block) this._block = this._blockClass;
        (0, _renderDom.renderDOM)(this._props.rootQuery, this._block);
    }
}
exports.default = Route;

},{"../renderDom":"bcslR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OHdU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _authApi = require("../api/auth-api");
var _authApiDefault = parcelHelpers.interopDefault(_authApi);
var _userApi = require("../api/user-api");
var _userApiDefault = parcelHelpers.interopDefault(_userApi);
var _config = require("../config");
var _globaleventbus = require("../globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
class UserController {
    constructor(router){
        this._router = router;
        this._authAPI = new (0, _authApiDefault.default)((0, _config.config).baseAPIUrl);
        this._userAPI = new (0, _userApiDefault.default)((0, _config.config).baseAPIUrl);
    }
    async init() {
        (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETUSER);
        (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATS);
    }
    async getUser() {
        try {
            const user = await this._authAPI.getUser();
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETUSER_SUCCEED, user);
        } catch (error) {
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETUSER_FAILED, error);
        }
    }
    async logout(successPath) {
        try {
            this._authAPI.logout();
            if (successPath) this._router.go(successPath);
        } catch (error) {
            console.log("Logout await error", error);
        }
    }
    async login(inputs, successPath) {
        const user = {
            login: "",
            password: ""
        };
        inputs.forEach((input)=>{
            const element = input.element;
            user[element.name] = element.value;
        });
        try {
            await this._authAPI.login(user);
            this._router.go(successPath);
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGIN_SUCCEED);
        // Останавливаем крутилку
        } catch (error) {
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_LOGIN_FAILED, error);
        }
    }
    async signup(inputs, successPath) {
        const data = {};
        inputs.forEach((input)=>{
            const element = input.element;
            data[element.name] = element.value;
        });
        try {
            await this._authAPI.signup(data);
            this._router.go(successPath);
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SIGNUP_SUCCEED);
        } catch (error) {
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SIGNUP_FAILED, error);
        }
    }
    async findUser(inputs, options) {
        const data = {
            login: ""
        };
        inputs.forEach((input)=>{
            const element = input.element;
            data[element.name] = element.value;
        });
        try {
            const result = await this._userAPI.findUser(data);
            const users = JSON.parse(result.responseText);
            let found = false;
            let uFound;
            users.forEach((u)=>{
                if (u.login === data.login) {
                    found = true;
                    uFound = u;
                }
            });
            if (!found) {
                const error = JSON.stringify({
                    reason: "User not found"
                });
                (0, _globaleventbusDefault.default).instance.EventBus.emit(options.failedEvent, error);
            } else (0, _globaleventbusDefault.default).instance.EventBus.emit(options.succeedEvent, uFound);
        } catch (error) {
            (0, _globaleventbusDefault.default).instance.EventBus.emit(options.failedEvent, error);
        }
    }
    async saveInfo(inputs) {
        const data = {};
        inputs.forEach((input)=>{
            const element = input.element;
            data[element.name] = element.value;
        });
        try {
            await this._userAPI.saveInfo(data);
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEINFO_SUCCEED, data);
        } catch (error) {
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEINFO_FAILED, error);
        }
    }
    async savePassword(inputs) {
        const data = {
            oldPassword: "",
            newPassword: ""
        };
        inputs.forEach((input)=>{
            const element = input.element;
            data[element.name] = element.value;
        });
        try {
            await this._userAPI.savePassword(data);
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEPASSWORD_SUCCEED);
        } catch (error) {
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_SAVEPASSWORD_FAILED, error);
        }
    }
    async changeAvatar(formData) {
        try {
            for (var key of formData.keys())console.log(key, formData.get(key));
            const result = await this._userAPI.changeAvatar(formData);
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_CHANGEAVATAR_SUCCEED, result);
        } catch (error) {
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_CHANGEAVATAR_FAILED, error);
        }
    }
}
exports.default = UserController;

},{"../api/auth-api":"51UgO","../api/user-api":"gh7Cl","../config":"dAjWq","../globaleventbus":"650P3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51UgO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _httptransport = require("../HTTPTransport");
var _httptransportDefault = parcelHelpers.interopDefault(_httptransport);
class AuthAPI {
    constructor(baseUrl){
        this._API = new (0, _httptransportDefault.default)(baseUrl);
    }
    async login(user) {
        const response = await this._API.post("/auth/signin", {
            data: user
        });
        return response.responseText;
    }
    async signup(user) {
        const response = await this._API.post("/auth/signup", {
            data: user
        });
        return response.responseText;
    }
    async logout() {
        const response = await this._API.post("/auth/logout");
        return response.responseText;
    }
    async getUser() {
        const response = await this._API.get("/auth/user");
        return response;
    }
}
exports.default = AuthAPI;

},{"../HTTPTransport":"5g2Mp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5g2Mp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let Method;
(function(Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
    Method["DELETE"] = "DELETE";
})(Method || (Method = {}));
function queryStringify(data) {
    return Object.entries(data).map(([key, value])=>{
        return encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }).join("&");
}
class HTTPTransport {
    constructor(baseurl){
        this._baseurl = baseurl;
    }
    get(url, options) {
        if (options && options.data) {
            url += "?" + queryStringify(options.data);
            options.data = {};
        }
        return this.request(this._baseurl + url, {
            ...options,
            method: Method.GET
        });
    }
    post(url, options) {
        return this.request(this._baseurl + url, {
            ...options,
            method: Method.POST
        });
    }
    put(url, options) {
        return this.request(this._baseurl + url, {
            ...options,
            method: Method.PUT
        });
    }
    delete(url, options) {
        return this.request(this._baseurl + url, {
            ...options,
            method: Method.DELETE
        });
    }
    request(url, options = {
        method: Method.GET
    }) {
        const { headers ={
            "Content-Type": "application/json"
        } , method , data  } = options;
        return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.withCredentials = true;
            let json = true;
            Object.keys(headers).forEach((key)=>{
                if (key.toLowerCase() === "content-type" && headers[key].toLowerCase() === "multipart/form-data") json = false;
                else xhr.setRequestHeader(key, headers[key]);
            });
            xhr.onload = function() {
                const { status  } = xhr;
                if (status === 200 || status === 201) return resolve(xhr);
                return reject(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (method === Method.GET || !data) xhr.send();
            else {
                const d = json ? JSON.stringify(data) : data;
                xhr.send(d);
            }
        });
    }
}
exports.default = HTTPTransport;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gh7Cl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _httptransport = require("../HTTPTransport");
var _httptransportDefault = parcelHelpers.interopDefault(_httptransport);
class UserAPI {
    constructor(baseUrl){
        this._API = new (0, _httptransportDefault.default)(baseUrl);
    }
    async savePassword(data) {
        const response = await this._API.put("/user/password", {
            data
        });
        return response.responseText;
    }
    async saveInfo(user) {
        const response = await this._API.put("/user/profile", {
            data: user
        });
        return response.responseText;
    }
    async findUser(data) {
        const response = await this._API.post("/user/search", {
            data
        });
        return response;
    }
    async changeAvatar(data) {
        const response = await this._API.put("/user/profile/avatar", {
            data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    }
}
exports.default = UserAPI;

},{"../HTTPTransport":"5g2Mp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ce6ox":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chatApi = require("../api/chat-api");
var _chatApiDefault = parcelHelpers.interopDefault(_chatApi);
var _config = require("../config");
var _globaleventbus = require("../globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
class ChatController {
    constructor(){
        this._chatAPI = new (0, _chatApiDefault.default)((0, _config.config).baseAPIUrl);
    }
    async getChats() {
        try {
            const data = await this._chatAPI.list();
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATS_SUCCEED, data);
        } catch (error) {
            console.log("Get chats error: ", error);
        }
    }
    async createChat(inputs) {
        const data = {
            title: ""
        };
        inputs.forEach((input)=>{
            const element = input.element;
            data[element.name] = element.value;
        });
        try {
            await this._chatAPI.create(data);
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_CREATECHAT_SUCCEED);
        } catch (error) {
            console.log("Create chat error: ", error);
        }
    }
    async getChatToken(id) {
        try {
            const result = await this._chatAPI.getToken(id);
            const token = JSON.parse(result.responseText).token;
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATTOKEN_SUCCEED, {
                id,
                token
            });
        } catch (error) {
            console.log("Get chat token error: ", error);
        }
    }
    async getChatUsers(chatId) {
        try {
            const result = await this._chatAPI.getUsers(chatId);
            const users = JSON.parse(result.responseText);
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_GETCHATUSERS_SUCCEED, {
                chatId,
                users
            });
        } catch (error) {
            console.log("Get chat users error: ", error);
        }
    }
    async addChatUser(data) {
        try {
            await this._chatAPI.addUser({
                users: [
                    data.userId
                ],
                chatId: data.chatId
            });
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_ADDCHATUSER_SUCCEED);
        } catch (error) {
            console.log("Add chat user error: ", error);
        }
    }
    async deleteChatUser(data) {
        try {
            await this._chatAPI.deleteUser({
                users: [
                    data.userId
                ],
                chatId: data.chatId
            });
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHATUSER_SUCCEED);
        } catch (error) {
            console.log("Delete chat user error: ", error);
        }
    }
    async deleteChat(chatId) {
        try {
            await this._chatAPI.delete({
                chatId
            });
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.ACTION_DELETECHAT_SUCCEED);
        } catch (error) {
            console.log("Delete chat error: ", error);
        }
    }
}
exports.default = ChatController;

},{"../api/chat-api":"g65We","../config":"dAjWq","../globaleventbus":"650P3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g65We":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _httptransport = require("../HTTPTransport");
var _httptransportDefault = parcelHelpers.interopDefault(_httptransport);
class ChatAPI {
    constructor(baseUrl){
        this._API = new (0, _httptransportDefault.default)(baseUrl);
    }
    async list() {
        const response = await this._API.get("/chats");
        return response;
    }
    async create(data) {
        const response = await this._API.post("/chats", {
            data
        });
        return response.responseText;
    }
    async delete(data) {
        const response = await this._API.delete("/chats", {
            data
        });
        return response;
    }
    async addUser(data) {
        const response = await this._API.put("/chats/users", {
            data
        });
        return response;
    }
    async deleteUser(data) {
        const response = await this._API.delete("/chats/users", {
            data
        });
        return response;
    }
    async getToken(chatId) {
        const response = await this._API.post(`/chats/token/${chatId}`);
        return response;
    }
    async getUsers(chatId) {
        const response = await this._API.get(`/chats/${chatId}/users`);
        return response;
    }
    async changeAvatar(data) {
        const response = await this._API.put("/chats/avatar", {
            data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    }
}
exports.default = ChatAPI;

},{"../HTTPTransport":"5g2Mp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1x8HF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _wsApi = require("../api/ws-api");
var _wsApiDefault = parcelHelpers.interopDefault(_wsApi);
class MessagesController {
    constructor(){
        this._WSAPI = new (0, _wsApiDefault.default)();
    }
    connectChat(data) {
        this._WSAPI.connect(data);
    }
    sendMessage(inputs) {
        const element = inputs[0].element;
        const data = {
            content: element.value ? element.value : "",
            type: "message"
        };
        this._WSAPI.send(data);
    }
}
exports.default = MessagesController;

},{"../api/ws-api":"dVkIz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVkIz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
var _globaleventbus = require("../globaleventbus");
var _globaleventbusDefault = parcelHelpers.interopDefault(_globaleventbus);
class WebSocketsAPI {
    connect(data) {
        this._socket = new WebSocket(`${(0, _config.config).websocketUrl}/${data.userId}/${data.chatId}/${data.token}`);
        this._socket.addEventListener("message", (e)=>{
            (0, _globaleventbusDefault.default).instance.EventBus.emit((0, _globaleventbusDefault.default).EVENTS.MESSAGES_RECEIVED, e.data);
        });
        this._socket.addEventListener("open", ()=>{
            this.getOld(0);
            this.ping();
        });
        this._socket.addEventListener("close", ()=>{
            console.log("Closing socket");
        });
    }
    send(data) {
        this._socket.send(JSON.stringify(data));
    }
    getOld(count) {
        this._socket.send(JSON.stringify({
            content: count,
            type: "get old"
        }));
    }
    ping() {
        this.send({
            "content": "ping",
            "type": "ping"
        });
        setTimeout(this.ping.bind(this), 10000);
    }
}
exports.default = WebSocketsAPI;

},{"../config":"dAjWq","../globaleventbus":"650P3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3LmCz","h7u1C"], "h7u1C", "parcelRequire4741")

//# sourceMappingURL=index.b71e74eb.js.map
