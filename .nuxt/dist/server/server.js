module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(13);
} else {}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'NoSsr',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;
    var ref$1 = slots();
    var defaultSlot = ref$1.default;
    if (defaultSlot === void 0) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;
    if (parent._isMounted) {
      return defaultSlot;
    }
    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });
    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(props.placeholderTag, {
        class: ['no-ssr-placeholder']
      }, props.placeholder || placeholderSlot);
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () {
      return h(false);
    }) : h(false);
  }
};
module.exports = index;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
}
// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-client-only v0.0.0-semantic-release
 * (c) 2021-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'ClientOnly',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;
    var ref$1 = slots();
    var defaultSlot = ref$1.default;
    if (defaultSlot === void 0) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;
    if (parent._isMounted) {
      return defaultSlot;
    }
    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });
    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(props.placeholderTag, {
        class: ['client-only-placeholder']
      }, props.placeholder || placeholderSlot);
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () {
      return h(false);
    }) : h(false);
  }
};
module.exports = index;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */


/*  */
function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}
function warn(condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}
function extend(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function decode(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    if (false) {}
  }
  return str;
}
function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};
  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     false && false;
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value) ? value.map(castQueryParamValue) : castQueryParamValue(value);
  }
  return parsedQuery;
}
var castQueryParamValue = function (value) {
  return value == null || typeof value === 'object' ? value : String(value);
};
function parseQuery(query) {
  var res = {};
  query = query.trim().replace(/^(\?|#|&)/, '');
  if (!query) {
    return res;
  }
  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;
    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });
  return res;
}
function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encode(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }
    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;
function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery = router && router.options.stringifyQuery;
  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}
  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route);
}
function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res;
  } else {
    return value;
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});
function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}
function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;
  if (query === void 0) query = {};
  var hash = ref.hash;
  if (hash === void 0) hash = '';
  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}
function isSameRoute(a, b, onlyPath) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query));
  } else if (a.name && b.name) {
    return a.name === b.name && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params));
  } else {
    return false;
  }
}
function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  // handle null value #1566
  if (!a || !b) {
    return a === b;
  }
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];
    if (bKey !== key) {
      return false;
    }
    var bVal = b[key];
    // query values can be null and undefined
    if (aVal == null || bVal == null) {
      return aVal === bVal;
    }
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}
function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}
function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}
function handleRouteEntered(route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];
    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];
      if (!instance || !cbs) {
        continue;
      }
      delete record.enteredCbs[name];
      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) {
          cbs[i$1](instance);
        }
      }
    }
  }
}
var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children);
      } else {
        // render previous empty view
        return h();
      }
    }
    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h();
    }

    // cache component
    cache[name] = {
      component: component
    };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;
    (data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive && vnode.componentInstance && vnode.componentInstance !== matched.instances[name]) {
        matched.instances[name] = vnode.componentInstance;
      }

      // if the route transition has already been confirmed then we weren't
      // able to call the cbs during confirmation as the component was not
      // registered yet, so we call it here.
      handleRouteEntered(route);
    };
    var configProps = matched.props && matched.props[name];
    // save route and configProps in cache
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }
    return h(component, data, children);
  }
};
function fillPropsinData(component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}
function resolveProps(route, config) {
  switch (typeof config) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (false) {}
  }
}

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }
  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }
  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }
  return stack.join('/');
}
function parsePath(path) {
  var hash = '';
  var query = '';
  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }
  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }
  return {
    path: path,
    query: query,
    hash: hash
  };
}
function cleanPath(path) {
  return path.replace(/\/(?:\s*\/)+/g, '/');
}
var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      var value = data[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];
  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }
  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';
      keys.push(token);
      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }
      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }
      route += capture;
    }
  }
  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }
  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }
  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }
  options = options || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }
  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }
  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);
function fillParams(path, params, routeMsg) {
  params = params || {};
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') {
      params[0] = params.pathMatch;
    }
    return filler(params, {
      pretty: true
    });
  } catch (e) {
    if (false) {}
    return '';
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? {
    path: raw
  } : raw;
  // named target
  if (next._normalized) {
    return next;
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, "path " + current.path);
    } else if (false) {}
    return next;
  }
  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;
  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }
  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];
var noop = function () {};
var warnedCustomSlot;
var warnedTagProp;
var warnedEventProp;
var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1$1 = this;
    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = route.redirectedFrom ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router) : route;
    classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
    classes[activeClass] = this.exact || this.exactPath ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);
    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;
    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };
    var on = {
      click: guardEvent
    };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }
    var data = {
      class: classes
    };
    var scopedSlot = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
      href: href,
      route: route,
      navigate: handler,
      isActive: classes[activeClass],
      isExactActive: classes[exactActiveClass]
    });
    if (scopedSlot) {
      if (false) {}
      if (scopedSlot.length === 1) {
        return scopedSlot[0];
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (false) {}
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot);
      }
    }
    if (false) {}
    if (this.tag === 'a') {
      data.on = on;
      data.attrs = {
        href: href,
        'aria-current': ariaCurrentValue
      };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }
    return h(this.tag, data, this.$slots.default);
  }
};
function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}
function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}
var _Vue;
function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return;
  }
  install.installed = true;
  _Vue = Vue;
  var isDef = function (v) {
    return v !== undefined;
  };
  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };
  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });
  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });
  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });
  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);
  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap, parentRoute) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);
  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }
  if (false) { var pathNames, found; }
  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}
function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (false) {}
  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);
  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || {
      default: route.component
    },
    alias: route.alias ? typeof route.alias === 'string' ? [route.alias] : route.alias : [],
    instances: {},
    enteredCbs: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : {
      default: route.props
    }
  };
  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {}
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }
  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }
  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if (false) {}
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    }
  }
  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {}
  }
}
function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) { var keys; }
  return regex;
}
function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, '');
  }
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;
  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }
  function addRoute(parentOrRoute, route) {
    var parent = typeof parentOrRoute !== 'object' ? nameMap[parentOrRoute] : undefined;
    // $flow-disable-line
    createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);

    // add aliases of parent
    if (parent && parent.alias.length) {
      createRouteMap(
      // $flow-disable-line route is defined if parent is
      parent.alias.map(function (alias) {
        return {
          path: alias,
          children: [route]
        };
      }), pathList, pathMap, nameMap, parent);
    }
  }
  function getRoutes() {
    return pathList.map(function (path) {
      return pathMap[path];
    });
  }
  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;
    if (name) {
      var record = nameMap[name];
      if (false) {}
      if (!record) {
        return _createRoute(null, location);
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });
      if (typeof location.params !== 'object') {
        location.params = {};
      }
      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }
      location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
      return _createRoute(record, location, redirectedFrom);
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }
  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;
    if (typeof redirect === 'string') {
      redirect = {
        path: redirect
      };
    }
    if (!redirect || typeof redirect !== 'object') {
      if (false) {}
      return _createRoute(null, location);
    }
    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;
    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {}
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (false) {}
      return _createRoute(null, location);
    }
  }
  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }
  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }
  return {
    match: match,
    addRoute: addRoute,
    getRoutes: getRoutes,
    addRoutes: addRoutes
  };
}
function matchRoute(regex, path, params) {
  var m = path.match(regex);
  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }
  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i];
    }
  }
  return true;
}
function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;
function genStateKey() {
  return Time.now().toFixed(3);
}
var _key = genStateKey();
function getStateKey() {
  return _key;
}
function setStateKey(key) {
  return _key = key;
}

/*  */

var positionStore = Object.create(null);
function setupScroll() {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  };
}
function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }
  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }
  if (false) {}

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);
    if (!shouldScroll) {
      return;
    }
    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition(shouldScroll, position);
      }).catch(function (err) {
        if (false) {}
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}
function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}
function handlePopState(e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}
function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}
function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}
function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}
function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}
function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}
function isNumber(v) {
  return typeof v === 'number';
}
var hashStartsWithNumberRE = /^#\d/;
function scrollToPosition(shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
    ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
    : document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }
  if (position) {
    // $flow-disable-line
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && typeof window.history.pushState === 'function';
}();
function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({
        key: setStateKey(genStateKey())
      }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}
function replaceState(url) {
  pushState(url, true);
}

// When changing thing, also edit router.d.ts
var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};
function createNavigationRedirectedError(from, to) {
  return createRouterError(from, to, NavigationFailureType.redirected, "Redirected when going from \"" + from.fullPath + "\" to \"" + stringifyRoute(to) + "\" via a navigation guard.");
}
function createNavigationDuplicatedError(from, to) {
  var error = createRouterError(from, to, NavigationFailureType.duplicated, "Avoided redundant navigation to current location: \"" + from.fullPath + "\".");
  // backwards compatible with the first introduction of Errors
  error.name = 'NavigationDuplicated';
  return error;
}
function createNavigationCancelledError(from, to) {
  return createRouterError(from, to, NavigationFailureType.cancelled, "Navigation cancelled from \"" + from.fullPath + "\" to \"" + to.fullPath + "\" with a new navigation.");
}
function createNavigationAbortedError(from, to) {
  return createRouterError(from, to, NavigationFailureType.aborted, "Navigation aborted from \"" + from.fullPath + "\" to \"" + to.fullPath + "\" via a navigation guard.");
}
function createRouterError(from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;
  return error;
}
var propertiesToLog = ['params', 'query', 'hash'];
function stringifyRoute(to) {
  if (typeof to === 'string') {
    return to;
  }
  if ('path' in to) {
    return to.path;
  }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) {
      location[key] = to[key];
    }
  });
  return JSON.stringify(location, null, 2);
}
function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}
function isNavigationFailure(err, errorType) {
  return isError(err) && err._isRouter && (errorType == null || err.type === errorType);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;
    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;
        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });
        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           false && false;
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });
        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });
    if (!hasAsync) {
      next();
    }
  };
}
function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}
var hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (called) {
      return;
    }
    called = true;
    return fn.apply(this, args);
  };
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};
History.prototype.listen = function listen(cb) {
  this.cb = cb;
};
History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};
History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};
History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1$1 = this;
  var route;
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    });
    // Exception should still be thrown
    throw e;
  }
  var prev = this.current;
  this.confirmTransition(route, function () {
    this$1$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1$1.ensureURL();
    this$1$1.router.afterHooks.forEach(function (hook) {
      hook && hook(route, prev);
    });

    // fire ready cbs once
    if (!this$1$1.ready) {
      this$1$1.ready = true;
      this$1$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1$1.ready) {
      // Initial redirection should not mark the history as ready yet
      // because it's triggered by the redirection instead
      // https://github.com/vuejs/vue-router/issues/3225
      // https://github.com/vuejs/vue-router/issues/3331
      if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
        this$1$1.ready = true;
        this$1$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    }
  });
};
History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1$1 = this;
  var current = this.current;
  this.pending = route;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1$1.errorCbs.length) {
        this$1$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        if (false) {}
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  lastRouteIndex === lastCurrentIndex && route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]) {
    this.ensureURL();
    if (route.hash) {
      handleScroll(this.router, current, route, false);
    }
    return abort(createNavigationDuplicatedError(current, route));
  }
  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;
  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));
  var iterator = function (hook, next) {
    if (this$1$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route));
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || typeof to === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1$1.replace(to);
          } else {
            this$1$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };
  runQueue(queue, iterator, function () {
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated);
    var queue = enterGuards.concat(this$1$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route));
      }
      this$1$1.pending = null;
      onComplete(route);
      if (this$1$1.router.app) {
        this$1$1.router.app.$nextTick(function () {
          handleRouteEntered(route);
        });
      }
    });
  });
};
History.prototype.updateRoute = function updateRoute(route) {
  this.current = route;
  this.cb && this.cb(route);
};
History.prototype.setupListeners = function setupListeners() {
  // Default implementation is empty
};
History.prototype.teardown = function teardown() {
  // clean up event listeners
  // https://github.com/vuejs/vue-router/issues/2341
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];

  // reset current history route
  // https://github.com/vuejs/vue-router/issues/3294
  this.current = START;
  this.pending = null;
};
function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}
function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}
function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}
function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}
function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}
function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}
function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}
function extractEnterGuards(activated) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key);
  });
}
function bindEnterGuard(guard, match, key) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        if (!match.enteredCbs[key]) {
          match.enteredCbs[key] = [];
        }
        match.enteredCbs[key].push(cb);
      }
      next(cb);
    });
  };
}

/*  */

var HTML5History = /*@__PURE__*/function (History) {
  function HTML5History(router, base) {
    History.call(this, router, base);
    this._startLocation = getLocation(this.base);
  }
  if (History) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create(History && History.prototype);
  HTML5History.prototype.constructor = HTML5History;
  HTML5History.prototype.setupListeners = function setupListeners() {
    var this$1$1 = this;
    if (this.listeners.length > 0) {
      return;
    }
    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;
    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }
    var handleRoutingEvent = function () {
      var current = this$1$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1$1.base);
      if (this$1$1.current === START && location === this$1$1._startLocation) {
        return;
      }
      this$1$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };
  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };
  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };
  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };
  return HTML5History;
}(History);
function getLocation(base) {
  var path = window.location.pathname;
  var pathLowerCase = path.toLowerCase();
  var baseLowerCase = base.toLowerCase();
  // base="/a" shouldn't turn path="/app" into "/a/pp"
  // https://github.com/vuejs/vue-router/issues/3555
  // so we ensure the trailing slash in the base
  if (base && (pathLowerCase === baseLowerCase || pathLowerCase.indexOf(cleanPath(baseLowerCase + '/')) === 0)) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = /*@__PURE__*/function (History) {
  function HashHistory(router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }
  if (History) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create(History && History.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1$1 = this;
    if (this.listeners.length > 0) {
      return;
    }
    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;
    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }
    var handleRoutingEvent = function () {
      var current = this$1$1.current;
      if (!ensureSlash()) {
        return;
      }
      this$1$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(eventType, handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };
  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };
  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };
  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };
  return HashHistory;
}(History);
function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}
function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}
function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) {
    return '';
  }
  href = href.slice(index + 1);
  return href;
}
function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}
function pushHash(path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}
function replaceHash(path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/function (History) {
  function AbstractHistory(router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }
  if (History) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create(History && History.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;
  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    this.transitionTo(location, function (route) {
      this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route);
      this$1$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };
  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    this.transitionTo(location, function (route) {
      this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };
  AbstractHistory.prototype.go = function go(n) {
    var this$1$1 = this;
    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      var prev = this$1$1.current;
      this$1$1.index = targetIndex;
      this$1$1.updateRoute(route);
      this$1$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });
    }, function (err) {
      if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
        this$1$1.index = targetIndex;
      }
    });
  };
  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };
  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };
  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};
  if (false) {}
  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);
  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;
  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (false) {}
  }
};
var prototypeAccessors = {
  currentRoute: {
    configurable: true
  }
};
VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};
prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};
VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1$1 = this;
   false && false;
  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1$1.apps.indexOf(app);
    if (index > -1) {
      this$1$1.apps.splice(index, 1);
    }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1$1.app === app) {
      this$1$1.app = this$1$1.apps[0] || null;
    }
    if (!this$1$1.app) {
      this$1$1.history.teardown();
    }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return;
  }
  this.app = app;
  var history = this.history;
  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      var from = history.current;
      var expectScroll = this$1$1.options.scrollBehavior;
      var supportsScroll = supportsPushState && expectScroll;
      if (supportsScroll && 'fullPath' in routeOrError) {
        handleScroll(this$1$1, routeOrError, from, false);
      }
    };
    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
  }
  history.listen(function (route) {
    this$1$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};
VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};
VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};
VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};
VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};
VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};
VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  var this$1$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1$1.history.push(location, resolve, reject);
    });
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};
VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  var this$1$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1$1.history.replace(location, resolve, reject);
    });
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};
VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};
VueRouter.prototype.back = function back() {
  this.go(-1);
};
VueRouter.prototype.forward = function forward() {
  this.go(1);
};
VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};
VueRouter.prototype.resolve = function resolve(to, current, append) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};
VueRouter.prototype.getRoutes = function getRoutes() {
  return this.matcher.getRoutes();
};
VueRouter.prototype.addRoute = function addRoute(parentOrRoute, route) {
  this.matcher.addRoute(parentOrRoute, route);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};
VueRouter.prototype.addRoutes = function addRoutes(routes) {
  if (false) {}
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};
Object.defineProperties(VueRouter.prototype, prototypeAccessors);
var VueRouter$1 = VueRouter;
function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}
function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

// We cannot remove this as it would be a breaking change
VueRouter.install = install;
VueRouter.version = '3.6.5';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;
VueRouter.START_LOCATION = START;
if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}
module.exports = VueRouter$1;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("8e1806be", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("734d8a41", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * vue-meta v2.4.0
 * (c) 2020
 * - Declan de Wet
 * - Sébastien Chopin (@Atinux)
 * - Pim (@pimlie)
 * - All the amazing contributors
 * @license MIT
 */



function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var deepmerge = _interopDefault(__webpack_require__(30));
var version = "2.4.0";
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * checks if passed argument is an array
 * @param  {any}  arg - the object to check
 * @return {Boolean} - true if `arg` is an array
 */
function isArray(arg) {
  return Array.isArray(arg);
}
function isUndefined(arg) {
  return typeof arg === 'undefined';
}
function isObject(arg) {
  return _typeof(arg) === 'object';
}
function isPureObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isString(arg) {
  return typeof arg === 'string';
}
function hasGlobalWindowFn() {
  try {
    return !isUndefined(window);
  } catch (e) {
    return false;
  }
}
var hasGlobalWindow = hasGlobalWindowFn();
var _global = hasGlobalWindow ? window : global;
var console = _global.console || {};
function warn(str) {
  /* istanbul ignore next */
  if (!console || !console.warn) {
    return;
  }
  console.warn(str);
}
var showWarningNotSupported = function showWarningNotSupported() {
  return warn('This vue app/component has no vue-meta configuration');
};

/**
 * These are constant variables used throughout the application.
 */
// set some sane defaults
var defaultInfo = {
  title: undefined,
  titleChunk: '',
  titleTemplate: '%s',
  htmlAttrs: {},
  bodyAttrs: {},
  headAttrs: {},
  base: [],
  link: [],
  meta: [],
  style: [],
  script: [],
  noscript: [],
  __dangerouslyDisableSanitizers: [],
  __dangerouslyDisableSanitizersByTagID: {}
};
var rootConfigKey = '_vueMeta'; // This is the name of the component option that contains all the information that
// gets converted to the various meta tags & attributes for the page.

var keyName = 'metaInfo'; // This is the attribute vue-meta arguments on elements to know which it should
// manage and which it should ignore.

var attribute = 'data-vue-meta'; // This is the attribute that goes on the `html` tag to inform `vue-meta`
// that the server has already generated the meta tags for the initial render.

var ssrAttribute = 'data-vue-meta-server-rendered'; // This is the property that tells vue-meta to overwrite (instead of append)
// an item in a tag list. For example, if you have two `meta` tag list items
// that both have `vmid` of "description", then vue-meta will overwrite the
// shallowest one with the deepest one.

var tagIDKeyName = 'vmid'; // This is the key name for possible meta templates

var metaTemplateKeyName = 'template'; // This is the key name for the content-holding property

var contentKeyName = 'content'; // The id used for the ssr app

var ssrAppId = 'ssr'; // How long meta update

var debounceWait = 10; // How long meta update

var waitOnDestroyed = true;
var defaultOptions = {
  keyName: keyName,
  attribute: attribute,
  ssrAttribute: ssrAttribute,
  tagIDKeyName: tagIDKeyName,
  contentKeyName: contentKeyName,
  metaTemplateKeyName: metaTemplateKeyName,
  waitOnDestroyed: waitOnDestroyed,
  debounceWait: debounceWait,
  ssrAppId: ssrAppId
}; // might be a bit ugly, but minimizes the browser bundles a bit

var defaultInfoKeys = Object.keys(defaultInfo); // The metaInfo property keys which are used to disable escaping

var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]]; // List of metaInfo property keys which are configuration options (and dont generate html)

var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], 'changed'].concat(disableOptionKeys); // List of metaInfo property keys which only generates attributes and no tags

var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]]; // HTML elements which support the onload event

var tagsSupportingOnload = ['link', 'style', 'script']; // HTML elements which dont have a head tag (shortened to our needs)
// see: https://www.w3.org/TR/html52/document-metadata.html

var tagsWithoutEndTag = ['base', 'meta', 'link']; // HTML elements which can have inner content (shortened to our needs)

var tagsWithInnerContent = ['noscript', 'script', 'style']; // Attributes which are inserted as childNodes instead of HTMLAttribute

var tagAttributeAsInnerContent = ['innerHTML', 'cssText', 'json'];
var tagProperties = ['once', 'skip', 'template']; // Attributes which should be added with data- prefix

var commonDataAttributes = ['body', 'pbody']; // from: https://github.com/kangax/html-minifier/blob/gh-pages/src/htmlminifier.js#L202

var booleanHtmlAttributes = ['allowfullscreen', 'amp', 'amp-boilerplate', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible'];
var batchId = null;
function triggerUpdate(_ref, rootVm, hookName) {
  var debounceWait = _ref.debounceWait;

  // if an update was triggered during initialization or when an update was triggered by the
  // metaInfo watcher, set initialized to null
  // then we keep falsy value but know we need to run a triggerUpdate after initialization
  if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === 'watcher')) {
    rootVm[rootConfigKey].initialized = null;
  }
  if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
    // batch potential DOM updates to prevent extraneous re-rendering
    // eslint-disable-next-line no-void
    batchUpdate(function () {
      return void rootVm.$meta().refresh();
    }, debounceWait);
  }
}
/**
 * Performs a batched update.
 *
 * @param  {(null|Number)} id - the ID of this update
 * @param  {Function} callback - the update to perform
 * @return {Number} id - a new ID
 */

function batchUpdate(callback, timeout) {
  timeout = timeout === undefined ? 10 : timeout;
  if (!timeout) {
    callback();
    return;
  }
  clearTimeout(batchId);
  batchId = setTimeout(function () {
    callback();
  }, timeout);
  return batchId;
}

/*
 * To reduce build size, this file provides simple polyfills without
 * overly excessive type checking and without modifying
 * the global Array.prototype
 * The polyfills are automatically removed in the commonjs build
 * Also, only files in client/ & shared/ should use these functions
 * files in server/ still use normal js function
 */
function find(array, predicate, thisArg) {
  if (!Array.prototype.find) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return array[idx];
      }
    }
    return;
  }
  return array.find(predicate, thisArg);
}
function findIndex(array, predicate, thisArg) {
  if (!Array.prototype.findIndex) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return idx;
      }
    }
    return -1;
  }
  return array.findIndex(predicate, thisArg);
}
function toArray(arg) {
  if (!Array.from) {
    return Array.prototype.slice.call(arg);
  }
  return Array.from(arg);
}
function includes(array, value) {
  if (!Array.prototype.includes) {
    for (var idx in array) {
      if (array[idx] === value) {
        return true;
      }
    }
    return false;
  }
  return array.includes(value);
}
var querySelector = function querySelector(arg, el) {
  return (el || document).querySelectorAll(arg);
};
function getTag(tags, tag) {
  if (!tags[tag]) {
    tags[tag] = document.getElementsByTagName(tag)[0];
  }
  return tags[tag];
}
function getElementsKey(_ref) {
  var body = _ref.body,
    pbody = _ref.pbody;
  return body ? 'body' : pbody ? 'pbody' : 'head';
}
function queryElements(parentNode, _ref2, attributes) {
  var appId = _ref2.appId,
    attribute = _ref2.attribute,
    type = _ref2.type,
    tagIDKeyName = _ref2.tagIDKeyName;
  attributes = attributes || {};
  var queries = ["".concat(type, "[").concat(attribute, "=\"").concat(appId, "\"]"), "".concat(type, "[data-").concat(tagIDKeyName, "]")].map(function (query) {
    for (var key in attributes) {
      var val = attributes[key];
      var attributeValue = val && val !== true ? "=\"".concat(val, "\"") : '';
      query += "[data-".concat(key).concat(attributeValue, "]");
    }
    return query;
  });
  return toArray(querySelector(queries.join(', '), parentNode));
}
function removeElementsByAppId(_ref3, appId) {
  var attribute = _ref3.attribute;
  toArray(querySelector("[".concat(attribute, "=\"").concat(appId, "\"]"))).map(function (el) {
    return el.remove();
  });
}
function removeAttribute(el, attributeName) {
  el.removeAttribute(attributeName);
}
function hasMetaInfo(vm) {
  vm = vm || this;
  return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]));
} // a component is in a metaInfo branch when itself has meta info or one of its (grand-)children has

function inMetaInfoBranch(vm) {
  vm = vm || this;
  return vm && !isUndefined(vm[rootConfigKey]);
}
function pause(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = true;
  return function () {
    return resume(rootVm, refresh);
  };
}
function resume(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = false;
  if (refresh || refresh === undefined) {
    return rootVm.$meta().refresh();
  }
}
function addNavGuards(rootVm) {
  var router = rootVm.$router; // return when nav guards already added or no router exists

  if (rootVm[rootConfigKey].navGuards || !router) {
    /* istanbul ignore next */
    return;
  }
  rootVm[rootConfigKey].navGuards = true;
  router.beforeEach(function (to, from, next) {
    pause(rootVm);
    next();
  });
  router.afterEach(function () {
    rootVm.$nextTick(function () {
      var _resume = resume(rootVm),
        metaInfo = _resume.metaInfo;
      if (metaInfo && isFunction(metaInfo.afterNavigation)) {
        metaInfo.afterNavigation(metaInfo);
      }
    });
  });
}
var appId = 1;
function createMixin(Vue, options) {
  // for which Vue lifecycle hooks should the metaInfo be refreshed
  var updateOnLifecycleHook = ['activated', 'deactivated', 'beforeMount'];
  var wasServerRendered = false; // watch for client side component updates

  return {
    beforeCreate: function beforeCreate() {
      var _this2 = this;
      var rootKey = '$root';
      var $root = this[rootKey];
      var $options = this.$options;
      var devtoolsEnabled = Vue.config.devtools;
      Object.defineProperty(this, '_hasMetaInfo', {
        configurable: true,
        get: function get() {
          // Show deprecation warning once when devtools enabled
          if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
            warn('VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead');
            $root[rootConfigKey].deprecationWarningShown = true;
          }
          return hasMetaInfo(this);
        }
      });
      if (this === $root) {
        $root.$once('hook:beforeMount', function () {
          wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute('data-server-rendered'); // In most cases when you have a SSR app it will be the first app thats gonna be
          // initiated, if we cant detect the data-server-rendered attribute from Vue but we
          // do see our own ssrAttribute then _assume_ the Vue app with appId 1 is the ssr app
          // attempted fix for #404 & #562, but we rly need to refactor how we pass appIds from
          // ssr to the client

          if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
            var htmlTag = getTag({}, 'html');
            wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute);
          }
        });
      } // Add a marker to know if it uses metaInfo
      // _vnode is used to know that it's attached to a real component
      // useful if we use some mixin to add some meta tags (like nuxt-i18n)

      if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
        return;
      }
      if (!$root[rootConfigKey]) {
        $root[rootConfigKey] = {
          appId: appId
        };
        appId++;
        if (devtoolsEnabled && $root.$options[options.keyName]) {
          // use nextTick so the children should be added to $root
          this.$nextTick(function () {
            // find the first child that lists fnOptions
            var child = find($root.$children, function (c) {
              return c.$vnode && c.$vnode.fnOptions;
            });
            if (child && child.$vnode.fnOptions[options.keyName]) {
              warn("VueMeta has detected a possible global mixin which adds a ".concat(options.keyName, " property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"));
            }
          });
        }
      } // to speed up updates we keep track of branches which have a component with vue-meta info defined
      // if _vueMeta = true it has info, if _vueMeta = false a child has info

      if (!this[rootConfigKey]) {
        this[rootConfigKey] = true;
        var parent = this.$parent;
        while (parent && parent !== $root) {
          if (isUndefined(parent[rootConfigKey])) {
            parent[rootConfigKey] = false;
          }
          parent = parent.$parent;
        }
      } // coerce function-style metaInfo to a computed prop so we can observe
      // it on creation

      if (isFunction($options[options.keyName])) {
        $options.computed = $options.computed || {};
        $options.computed.$metaInfo = $options[options.keyName];
        if (!this.$isServer) {
          // if computed $metaInfo exists, watch it for updates & trigger a refresh
          // when it changes (i.e. automatically handle async actions that affect metaInfo)
          // credit for this suggestion goes to [Sébastien Chopin](https://github.com/Atinux)
          this.$on('hook:created', function () {
            this.$watch('$metaInfo', function () {
              triggerUpdate(options, this[rootKey], 'watcher');
            });
          });
        }
      } // force an initial refresh on page load and prevent other lifecycleHooks
      // to triggerUpdate until this initial refresh is finished
      // this is to make sure that when a page is opened in an inactive tab which
      // has throttled rAF/timers we still immediately set the page title

      if (isUndefined($root[rootConfigKey].initialized)) {
        $root[rootConfigKey].initialized = this.$isServer;
        if (!$root[rootConfigKey].initialized) {
          if (!$root[rootConfigKey].initializedSsr) {
            $root[rootConfigKey].initializedSsr = true;
            this.$on('hook:beforeMount', function () {
              var $root = this[rootKey]; // if this Vue-app was server rendered, set the appId to 'ssr'
              // only one SSR app per page is supported

              if (wasServerRendered) {
                $root[rootConfigKey].appId = options.ssrAppId;
              }
            });
          } // we use the mounted hook here as on page load

          this.$on('hook:mounted', function () {
            var $root = this[rootKey];
            if ($root[rootConfigKey].initialized) {
              return;
            } // used in triggerUpdate to check if a change was triggered
            // during initialization

            $root[rootConfigKey].initializing = true; // refresh meta in nextTick so all child components have loaded

            this.$nextTick(function () {
              var _$root$$meta$refresh = $root.$meta().refresh(),
                tags = _$root$$meta$refresh.tags,
                metaInfo = _$root$$meta$refresh.metaInfo; // After ssr hydration (identifier by tags === false) check
              // if initialized was set to null in triggerUpdate. That'd mean
              // that during initilazation changes where triggered which need
              // to be applied OR a metaInfo watcher was triggered before the
              // current hook was called
              // (during initialization all changes are blocked)

              if (tags === false && $root[rootConfigKey].initialized === null) {
                this.$nextTick(function () {
                  return triggerUpdate(options, $root, 'init');
                });
              }
              $root[rootConfigKey].initialized = true;
              delete $root[rootConfigKey].initializing; // add the navigation guards if they havent been added yet
              // they are needed for the afterNavigation callback

              if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
                addNavGuards($root);
              }
            });
          }); // add the navigation guards if requested

          if (options.refreshOnceOnNavigation) {
            addNavGuards($root);
          }
        }
      }
      this.$on('hook:destroyed', function () {
        var _this = this;

        // do not trigger refresh:
        // - when user configured to not wait for transitions on destroyed
        // - when the component doesnt have a parent
        // - doesnt have metaInfo defined
        if (!this.$parent || !hasMetaInfo(this)) {
          return;
        }
        delete this._hasMetaInfo;
        this.$nextTick(function () {
          if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
            triggerUpdate(options, _this.$root, 'destroyed');
            return;
          } // Wait that element is hidden before refreshing meta tags (to support animations)

          var interval = setInterval(function () {
            if (_this.$el && _this.$el.offsetParent !== null) {
              /* istanbul ignore next line */
              return;
            }
            clearInterval(interval);
            triggerUpdate(options, _this.$root, 'destroyed');
          }, 50);
        });
      }); // do not trigger refresh on the server side

      if (this.$isServer) {
        /* istanbul ignore next */
        return;
      } // no need to add this hooks on server side

      updateOnLifecycleHook.forEach(function (lifecycleHook) {
        _this2.$on("hook:".concat(lifecycleHook), function () {
          triggerUpdate(options, this[rootKey], lifecycleHook);
        });
      });
    }
  };
}
function setOptions(options) {
  // combine options
  options = isObject(options) ? options : {}; // The options are set like this so they can
  // be minified by terser while keeping the
  // user api intact
  // terser --mangle-properties keep_quoted=strict

  /* eslint-disable dot-notation */

  return {
    keyName: options['keyName'] || defaultOptions.keyName,
    attribute: options['attribute'] || defaultOptions.attribute,
    ssrAttribute: options['ssrAttribute'] || defaultOptions.ssrAttribute,
    tagIDKeyName: options['tagIDKeyName'] || defaultOptions.tagIDKeyName,
    contentKeyName: options['contentKeyName'] || defaultOptions.contentKeyName,
    metaTemplateKeyName: options['metaTemplateKeyName'] || defaultOptions.metaTemplateKeyName,
    debounceWait: isUndefined(options['debounceWait']) ? defaultOptions.debounceWait : options['debounceWait'],
    waitOnDestroyed: isUndefined(options['waitOnDestroyed']) ? defaultOptions.waitOnDestroyed : options['waitOnDestroyed'],
    ssrAppId: options['ssrAppId'] || defaultOptions.ssrAppId,
    refreshOnceOnNavigation: !!options['refreshOnceOnNavigation']
  };
  /* eslint-enable dot-notation */
}
function getOptions(options) {
  var optionsCopy = {};
  for (var key in options) {
    optionsCopy[key] = options[key];
  }
  return optionsCopy;
}
function ensureIsArray(arg, key) {
  if (!key || !isObject(arg)) {
    return isArray(arg) ? arg : [];
  }
  if (!isArray(arg[key])) {
    arg[key] = [];
  }
  return arg;
}
var serverSequences = [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/"/g, '&quot;'], [/'/g, '&#x27;']];
var clientSequences = [[/&/g, "&"], [/</g, "<"], [/>/g, ">"], [/"/g, "\""], [/'/g, "'"]]; // sanitizes potentially dangerous characters

function escape(info, options, escapeOptions, escapeKeys) {
  var tagIDKeyName = options.tagIDKeyName;
  var _escapeOptions$doEsca = escapeOptions.doEscape,
    doEscape = _escapeOptions$doEsca === void 0 ? function (v) {
      return v;
    } : _escapeOptions$doEsca;
  var escaped = {};
  for (var key in info) {
    var value = info[key]; // no need to escape configuration options

    if (includes(metaInfoOptionKeys, key)) {
      escaped[key] = value;
      continue;
    } // do not use destructuring for disableOptionKeys, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb

    var disableKey = disableOptionKeys[0];
    if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
      // this info[key] doesnt need to escaped if the option is listed in __dangerouslyDisableSanitizers
      escaped[key] = value;
      continue;
    }
    var tagId = info[tagIDKeyName];
    if (tagId) {
      disableKey = disableOptionKeys[1]; // keys which are listed in __dangerouslyDisableSanitizersByTagID for the current vmid do not need to be escaped

      if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
        escaped[key] = value;
        continue;
      }
    }
    if (isString(value)) {
      escaped[key] = doEscape(value);
    } else if (isArray(value)) {
      escaped[key] = value.map(function (v) {
        if (isPureObject(v)) {
          return escape(v, options, escapeOptions, true);
        }
        return doEscape(v);
      });
    } else if (isPureObject(value)) {
      escaped[key] = escape(value, options, escapeOptions, true);
    } else {
      escaped[key] = value;
    }
    if (escapeKeys) {
      var escapedKey = doEscape(key);
      if (key !== escapedKey) {
        escaped[escapedKey] = escaped[key];
        delete escaped[key];
      }
    }
  }
  return escaped;
}
function escapeMetaInfo(options, info, escapeSequences) {
  escapeSequences = escapeSequences || []; // do not use destructuring for seq, it increases transpiled size
  // due to var checks while we are guaranteed the structure of the cb

  var escapeOptions = {
    doEscape: function doEscape(value) {
      return escapeSequences.reduce(function (val, seq) {
        return val.replace(seq[0], seq[1]);
      }, value);
    }
  };
  disableOptionKeys.forEach(function (disableKey, index) {
    if (index === 0) {
      ensureIsArray(info, disableKey);
    } else if (index === 1) {
      for (var key in info[disableKey]) {
        ensureIsArray(info[disableKey], key);
      }
    }
    escapeOptions[disableKey] = info[disableKey];
  }); // begin sanitization

  return escape(info, options, escapeOptions);
}
function applyTemplate(_ref, headObject, template, chunk) {
  var component = _ref.component,
    metaTemplateKeyName = _ref.metaTemplateKeyName,
    contentKeyName = _ref.contentKeyName;
  if (template === true || headObject[metaTemplateKeyName] === true) {
    // abort, template was already applied
    return false;
  }
  if (isUndefined(template) && headObject[metaTemplateKeyName]) {
    template = headObject[metaTemplateKeyName];
    headObject[metaTemplateKeyName] = true;
  } // return early if no template defined

  if (!template) {
    // cleanup faulty template properties
    delete headObject[metaTemplateKeyName];
    return false;
  }
  if (isUndefined(chunk)) {
    chunk = headObject[contentKeyName];
  }
  headObject[contentKeyName] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk);
  return true;
}
function _arrayMerge(_ref, target, source) {
  var component = _ref.component,
    tagIDKeyName = _ref.tagIDKeyName,
    metaTemplateKeyName = _ref.metaTemplateKeyName,
    contentKeyName = _ref.contentKeyName;
  // we concat the arrays without merging objects contained in,
  // but we check for a `vmid` property on each object in the array
  // using an O(1) lookup associative array exploit
  var destination = [];
  if (!target.length && !source.length) {
    return destination;
  }
  target.forEach(function (targetItem, targetIndex) {
    // no tagID so no need to check for duplicity
    if (!targetItem[tagIDKeyName]) {
      destination.push(targetItem);
      return;
    }
    var sourceIndex = findIndex(source, function (item) {
      return item[tagIDKeyName] === targetItem[tagIDKeyName];
    });
    var sourceItem = source[sourceIndex]; // source doesnt contain any duplicate vmid's, we can keep targetItem

    if (sourceIndex === -1) {
      destination.push(targetItem);
      return;
    } // when sourceItem explictly defines contentKeyName or innerHTML as undefined, its
    // an indication that we need to skip the default behaviour or child has preference over parent
    // which means we keep the targetItem and ignore/remove the sourceItem

    if (contentKeyName in sourceItem && sourceItem[contentKeyName] === undefined || 'innerHTML' in sourceItem && sourceItem.innerHTML === undefined) {
      destination.push(targetItem); // remove current index from source array so its not concatenated to destination below

      source.splice(sourceIndex, 1);
      return;
    } // we now know that targetItem is a duplicate and we should ignore it in favor of sourceItem
    // if source specifies null as content then ignore both the target as the source

    if (sourceItem[contentKeyName] === null || sourceItem.innerHTML === null) {
      // remove current index from source array so its not concatenated to destination below
      source.splice(sourceIndex, 1);
      return;
    } // now we only need to check if the target has a template to combine it with the source

    var targetTemplate = targetItem[metaTemplateKeyName];
    if (!targetTemplate) {
      return;
    }
    var sourceTemplate = sourceItem[metaTemplateKeyName];
    if (!sourceTemplate) {
      // use parent template and child content
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, targetTemplate); // set template to true to indicate template was already applied

      sourceItem.template = true;
      return;
    }
    if (!sourceItem[contentKeyName]) {
      // use parent content and child template
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, undefined, targetItem[contentKeyName]);
    }
  });
  return destination.concat(source);
}
var warningShown = false;
function merge(target, source, options) {
  options = options || {}; // remove properties explicitly set to false so child components can
  // optionally _not_ overwrite the parents content
  // (for array properties this is checked in arrayMerge)

  if (source.title === undefined) {
    delete source.title;
  }
  metaInfoAttributeKeys.forEach(function (attrKey) {
    if (!source[attrKey]) {
      return;
    }
    for (var key in source[attrKey]) {
      if (key in source[attrKey] && source[attrKey][key] === undefined) {
        if (includes(booleanHtmlAttributes, key) && !warningShown) {
          warn('VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details');
          warningShown = true;
        }
        delete source[attrKey][key];
      }
    }
  });
  return deepmerge(target, source, {
    arrayMerge: function arrayMerge(t, s) {
      return _arrayMerge(options, t, s);
    }
  });
}
function getComponentMetaInfo(options, component) {
  return getComponentOption(options || {}, component, defaultInfo);
}
/**
 * Returns the `opts.option` $option value of the given `opts.component`.
 * If methods are encountered, they will be bound to the component context.
 * If `opts.deep` is true, will recursively merge all child component
 * `opts.option` $option values into the returned result.
 *
 * @param  {Object} opts - options
 * @param  {Object} opts.component - Vue component to fetch option data from
 * @param  {Boolean} opts.deep - look for data in child components as well?
 * @param  {Function} opts.arrayMerge - how should arrays be merged?
 * @param  {String} opts.keyName - the name of the option to look for
 * @param  {Object} [result={}] - result so far
 * @return {Object} result - final aggregated result
 */

function getComponentOption(options, component, result) {
  result = result || {};
  if (component._inactive) {
    return result;
  }
  options = options || {};
  var _options = options,
    keyName = _options.keyName;
  var $metaInfo = component.$metaInfo,
    $options = component.$options,
    $children = component.$children; // only collect option data if it exists

  if ($options[keyName]) {
    // if $metaInfo exists then [keyName] was defined as a function
    // and set to the computed prop $metaInfo in the mixin
    // using the computed prop should be a small performance increase
    // because Vue caches those internally
    var data = $metaInfo || $options[keyName]; // only merge data with result when its an object
    // eg it could be a function when metaInfo() returns undefined
    // dueo to the or statement above

    if (isObject(data)) {
      result = merge(result, data, options);
    }
  } // collect & aggregate child options if deep = true

  if ($children.length) {
    $children.forEach(function (childComponent) {
      // check if the childComponent is in a branch
      // return otherwise so we dont walk all component branches unnecessarily
      if (!inMetaInfoBranch(childComponent)) {
        return;
      }
      result = getComponentOption(options, childComponent, result);
    });
  }
  return result;
}
var callbacks = [];
function isDOMComplete(d) {
  return (d || document).readyState === 'complete';
}
function addCallback(query, callback) {
  if (arguments.length === 1) {
    callback = query;
    query = '';
  }
  callbacks.push([query, callback]);
}
function addCallbacks(_ref, type, tags, autoAddListeners) {
  var tagIDKeyName = _ref.tagIDKeyName;
  var hasAsyncCallback = false;
  tags.forEach(function (tag) {
    if (!tag[tagIDKeyName] || !tag.callback) {
      return;
    }
    hasAsyncCallback = true;
    addCallback("".concat(type, "[data-").concat(tagIDKeyName, "=\"").concat(tag[tagIDKeyName], "\"]"), tag.callback);
  });
  if (!autoAddListeners || !hasAsyncCallback) {
    return hasAsyncCallback;
  }
  return addListeners();
}
function addListeners() {
  if (isDOMComplete()) {
    applyCallbacks();
    return;
  } // Instead of using a MutationObserver, we just apply

  /* istanbul ignore next */

  document.onreadystatechange = function () {
    applyCallbacks();
  };
}
function applyCallbacks(matchElement) {
  callbacks.forEach(function (args) {
    // do not use destructuring for args, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb
    var query = args[0];
    var callback = args[1];
    var selector = "".concat(query, "[onload=\"this.__vm_l=1\"]");
    var elements = [];
    if (!matchElement) {
      elements = toArray(querySelector(selector));
    }
    if (matchElement && matchElement.matches(selector)) {
      elements = [matchElement];
    }
    elements.forEach(function (element) {
      /* __vm_cb: whether the load callback has been called
       * __vm_l: set by onload attribute, whether the element was loaded
       * __vm_ev: whether the event listener was added or not
       */
      if (element.__vm_cb) {
        return;
      }
      var onload = function onload() {
        /* Mark that the callback for this element has already been called,
         * this prevents the callback to run twice in some (rare) conditions
         */
        element.__vm_cb = true;
        /* onload needs to be removed because we only need the
         * attribute after ssr and if we dont remove it the node
         * will fail isEqualNode on the client
         */

        removeAttribute(element, 'onload');
        callback(element);
      };
      /* IE9 doesnt seem to load scripts synchronously,
       * causing a script sometimes/often already to be loaded
       * when we add the event listener below (thus adding an onload event
       * listener has no use because it will never be triggered).
       * Therefore we add the onload attribute during ssr, and
       * check here if it was already loaded or not
       */

      if (element.__vm_l) {
        onload();
        return;
      }
      if (!element.__vm_ev) {
        element.__vm_ev = true;
        element.addEventListener('load', onload);
      }
    });
  });
}

// instead of adding it to the html

var attributeMap = {};
/**
 * Updates the document's html tag attributes
 *
 * @param  {Object} attrs - the new document html attributes
 * @param  {HTMLElement} tag - the HTMLElement tag to update with new attrs
 */

function updateAttribute(appId, options, type, attrs, tag) {
  var _ref = options || {},
    attribute = _ref.attribute;
  var vueMetaAttrString = tag.getAttribute(attribute);
  if (vueMetaAttrString) {
    attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString));
    removeAttribute(tag, attribute);
  }
  var data = attributeMap[type] || {};
  var toUpdate = []; // remove attributes from the map
  // which have been removed for this appId

  for (var attr in data) {
    if (data[attr] !== undefined && appId in data[attr]) {
      toUpdate.push(attr);
      if (!attrs[attr]) {
        delete data[attr][appId];
      }
    }
  }
  for (var _attr in attrs) {
    var attrData = data[_attr];
    if (!attrData || attrData[appId] !== attrs[_attr]) {
      toUpdate.push(_attr);
      if (attrs[_attr] !== undefined) {
        data[_attr] = data[_attr] || {};
        data[_attr][appId] = attrs[_attr];
      }
    }
  }
  for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
    var _attr2 = _toUpdate[_i];
    var _attrData = data[_attr2];
    var attrValues = [];
    for (var _appId in _attrData) {
      Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]));
    }
    if (attrValues.length) {
      var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? '' : attrValues.filter(function (v) {
        return v !== undefined;
      }).join(' ');
      tag.setAttribute(_attr2, attrValue);
    } else {
      removeAttribute(tag, _attr2);
    }
  }
  attributeMap[type] = data;
}

/**
 * Updates the document title
 *
 * @param  {String} title - the new title of the document
 */
function updateTitle(title) {
  if (!title && title !== '') {
    return;
  }
  document.title = title;
}

/**
 * Updates meta tags inside <head> and <body> on the client. Borrowed from `react-helmet`:
 * https://github.com/nfl/react-helmet/blob/004d448f8de5f823d10f838b02317521180f34da/src/Helmet.js#L195-L245
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} type - the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - a representation of what tags changed
 */

function updateTag(appId, options, type, tags, head, body) {
  var _ref = options || {},
    attribute = _ref.attribute,
    tagIDKeyName = _ref.tagIDKeyName;
  var dataAttributes = commonDataAttributes.slice();
  dataAttributes.push(tagIDKeyName);
  var newElements = [];
  var queryOptions = {
    appId: appId,
    attribute: attribute,
    type: type,
    tagIDKeyName: tagIDKeyName
  };
  var currentElements = {
    head: queryElements(head, queryOptions),
    pbody: queryElements(body, queryOptions, {
      pbody: true
    }),
    body: queryElements(body, queryOptions, {
      body: true
    })
  };
  if (tags.length > 1) {
    // remove duplicates that could have been found by merging tags
    // which include a mixin with metaInfo and that mixin is used
    // by multiple components on the same page
    var found = [];
    tags = tags.filter(function (x) {
      var k = JSON.stringify(x);
      var res = !includes(found, k);
      found.push(k);
      return res;
    });
  }
  tags.forEach(function (tag) {
    if (tag.skip) {
      return;
    }
    var newElement = document.createElement(type);
    if (!tag.once) {
      newElement.setAttribute(attribute, appId);
    }
    Object.keys(tag).forEach(function (attr) {
      /* istanbul ignore next */
      if (includes(tagProperties, attr)) {
        return;
      }
      if (attr === 'innerHTML') {
        newElement.innerHTML = tag.innerHTML;
        return;
      }
      if (attr === 'json') {
        newElement.innerHTML = JSON.stringify(tag.json);
        return;
      }
      if (attr === 'cssText') {
        if (newElement.styleSheet) {
          /* istanbul ignore next */
          newElement.styleSheet.cssText = tag.cssText;
        } else {
          newElement.appendChild(document.createTextNode(tag.cssText));
        }
        return;
      }
      if (attr === 'callback') {
        newElement.onload = function () {
          return tag[attr](newElement);
        };
        return;
      }
      var _attr = includes(dataAttributes, attr) ? "data-".concat(attr) : attr;
      var isBooleanAttribute = includes(booleanHtmlAttributes, attr);
      if (isBooleanAttribute && !tag[attr]) {
        return;
      }
      var value = isBooleanAttribute ? '' : tag[attr];
      newElement.setAttribute(_attr, value);
    });
    var oldElements = currentElements[getElementsKey(tag)]; // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

    var indexToDelete;
    var hasEqualElement = oldElements.some(function (existingTag, index) {
      indexToDelete = index;
      return newElement.isEqualNode(existingTag);
    });
    if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
      oldElements.splice(indexToDelete, 1);
    } else {
      newElements.push(newElement);
    }
  });
  var oldElements = [];
  for (var _type in currentElements) {
    Array.prototype.push.apply(oldElements, currentElements[_type]);
  } // remove old elements

  oldElements.forEach(function (element) {
    element.parentNode.removeChild(element);
  }); // insert new elements

  newElements.forEach(function (element) {
    if (element.hasAttribute('data-body')) {
      body.appendChild(element);
      return;
    }
    if (element.hasAttribute('data-pbody')) {
      body.insertBefore(element, body.firstChild);
      return;
    }
    head.appendChild(element);
  });
  return {
    oldTags: oldElements,
    newTags: newElements
  };
}

/**
 * Performs client-side updates when new meta info is received
 *
 * @param  {Object} newInfo - the meta info to update to
 */

function updateClientMetaInfo(appId, options, newInfo) {
  options = options || {};
  var _options = options,
    ssrAttribute = _options.ssrAttribute,
    ssrAppId = _options.ssrAppId; // only cache tags for current update

  var tags = {};
  var htmlTag = getTag(tags, 'html'); // if this is a server render, then dont update

  if (appId === ssrAppId && htmlTag.hasAttribute(ssrAttribute)) {
    // remove the server render attribute so we can update on (next) changes
    removeAttribute(htmlTag, ssrAttribute); // add load callbacks if the

    var addLoadListeners = false;
    tagsSupportingOnload.forEach(function (type) {
      if (newInfo[type] && addCallbacks(options, type, newInfo[type])) {
        addLoadListeners = true;
      }
    });
    if (addLoadListeners) {
      addListeners();
    }
    return false;
  } // initialize tracked changes

  var tagsAdded = {};
  var tagsRemoved = {};
  for (var type in newInfo) {
    // ignore these
    if (includes(metaInfoOptionKeys, type)) {
      continue;
    }
    if (type === 'title') {
      // update the title
      updateTitle(newInfo.title);
      continue;
    }
    if (includes(metaInfoAttributeKeys, type)) {
      var tagName = type.substr(0, 4);
      updateAttribute(appId, options, type, newInfo[type], getTag(tags, tagName));
      continue;
    } // tags should always be an array, ignore if it isnt

    if (!isArray(newInfo[type])) {
      continue;
    }
    var _updateTag = updateTag(appId, options, type, newInfo[type], getTag(tags, 'head'), getTag(tags, 'body')),
      oldTags = _updateTag.oldTags,
      newTags = _updateTag.newTags;
    if (newTags.length) {
      tagsAdded[type] = newTags;
      tagsRemoved[type] = oldTags;
    }
  }
  return {
    tagsAdded: tagsAdded,
    tagsRemoved: tagsRemoved
  };
}
var appsMetaInfo;
function addApp(rootVm, appId, options) {
  return {
    set: function set(metaInfo) {
      return setMetaInfo(rootVm, appId, options, metaInfo);
    },
    remove: function remove() {
      return removeMetaInfo(rootVm, appId, options);
    }
  };
}
function setMetaInfo(rootVm, appId, options, metaInfo) {
  // if a vm exists _and_ its mounted then immediately update
  if (rootVm && rootVm.$el) {
    return updateClientMetaInfo(appId, options, metaInfo);
  } // store for later, the info
  // will be set on the first refresh

  appsMetaInfo = appsMetaInfo || {};
  appsMetaInfo[appId] = metaInfo;
}
function removeMetaInfo(rootVm, appId, options) {
  if (rootVm && rootVm.$el) {
    var tags = {};
    var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var tagName = type.substr(0, 4);
        updateAttribute(appId, options, type, {}, getTag(tags, tagName));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return removeElementsByAppId(options, appId);
  }
  if (appsMetaInfo[appId]) {
    delete appsMetaInfo[appId];
    clearAppsMetaInfo();
  }
}
function getAppsMetaInfo() {
  return appsMetaInfo;
}
function clearAppsMetaInfo(force) {
  if (force || !Object.keys(appsMetaInfo).length) {
    appsMetaInfo = undefined;
  }
}

/**
 * Returns the correct meta info for the given component
 * (child components will overwrite parent meta info)
 *
 * @param  {Object} component - the Vue instance to get meta info from
 * @return {Object} - returned meta info
 */

function getMetaInfo(options, info, escapeSequences, component) {
  options = options || {};
  escapeSequences = escapeSequences || [];
  var _options = options,
    tagIDKeyName = _options.tagIDKeyName; // Remove all "template" tags from meta
  // backup the title chunk in case user wants access to it

  if (info.title) {
    info.titleChunk = info.title;
  } // replace title with populated template

  if (info.titleTemplate && info.titleTemplate !== '%s') {
    applyTemplate({
      component: component,
      contentKeyName: 'title'
    }, info, info.titleTemplate, info.titleChunk || '');
  } // convert base tag to an array so it can be handled the same way
  // as the other tags

  if (info.base) {
    info.base = Object.keys(info.base).length ? [info.base] : [];
  }
  if (info.meta) {
    // remove meta items with duplicate vmid's
    info.meta = info.meta.filter(function (metaItem, index, arr) {
      var hasVmid = !!metaItem[tagIDKeyName];
      if (!hasVmid) {
        return true;
      }
      var isFirstItemForVmid = index === findIndex(arr, function (item) {
        return item[tagIDKeyName] === metaItem[tagIDKeyName];
      });
      return isFirstItemForVmid;
    }); // apply templates if needed

    info.meta.forEach(function (metaObject) {
      return applyTemplate(options, metaObject);
    });
  }
  return escapeMetaInfo(options, info, escapeSequences);
}

/**
 * When called, will update the current meta info with new meta info.
 * Useful when updating meta info as the result of an asynchronous
 * action that resolves after the initial render takes place.
 *
 * Credit to [Sébastien Chopin](https://github.com/Atinux) for the suggestion
 * to implement this method.
 *
 * @return {Object} - new meta info
 */

function refresh(rootVm, options) {
  options = options || {}; // make sure vue-meta was initiated

  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options

  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm);
  var appId = rootVm[rootConfigKey].appId;
  var tags = updateClientMetaInfo(appId, options, metaInfo); // emit "event" with new info

  if (tags && isFunction(metaInfo.changed)) {
    metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved);
    tags = {
      addedTags: tags.tagsAdded,
      removedTags: tags.tagsRemoved
    };
  }
  var appsMetaInfo = getAppsMetaInfo();
  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      updateClientMetaInfo(additionalAppId, options, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }
    clearAppsMetaInfo(true);
  }
  return {
    vm: rootVm,
    metaInfo: metaInfo,
    // eslint-disable-line object-shorthand
    tags: tags
  };
}

/**
 * Generates tag attributes for use on the server.
 *
 * @param  {('bodyAttrs'|'htmlAttrs'|'headAttrs')} type - the type of attributes to generate
 * @param  {Object} data - the attributes to generate
 * @return {Object} - the attribute generator
 */

function attributeGenerator(options, type, data, _ref) {
  var addSsrAttribute = _ref.addSsrAttribute;
  var _ref2 = options || {},
    attribute = _ref2.attribute,
    ssrAttribute = _ref2.ssrAttribute;
  var attributeStr = '';
  for (var attr in data) {
    var attrData = data[attr];
    var attrValues = [];
    for (var appId in attrData) {
      attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId])));
    }
    if (attrValues.length) {
      attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? "".concat(attr) : "".concat(attr, "=\"").concat(attrValues.join(' '), "\"");
      attributeStr += ' ';
    }
  }
  if (attributeStr) {
    attributeStr += "".concat(attribute, "=\"").concat(encodeURI(JSON.stringify(data)), "\"");
  }
  if (type === 'htmlAttrs' && addSsrAttribute) {
    return "".concat(ssrAttribute).concat(attributeStr ? ' ' : '').concat(attributeStr);
  }
  return attributeStr;
}

/**
 * Generates title output for the server
 *
 * @param  {'title'} type - the string "title"
 * @param  {String} data - the title text
 * @return {Object} - the title generator
 */
function titleGenerator(options, type, data, generatorOptions) {
  var _ref = generatorOptions || {},
    ln = _ref.ln;
  if (!data) {
    return '';
  }
  return "<".concat(type, ">").concat(data, "</").concat(type, ">").concat(ln ? '\n' : '');
}

/**
 * Generates meta, base, link, style, script, noscript tags for use on the server
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - the tag generator
 */

function tagGenerator(options, type, tags, generatorOptions) {
  var _ref = options || {},
    ssrAppId = _ref.ssrAppId,
    attribute = _ref.attribute,
    tagIDKeyName = _ref.tagIDKeyName;
  var _ref2 = generatorOptions || {},
    appId = _ref2.appId,
    _ref2$isSSR = _ref2.isSSR,
    isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR,
    _ref2$body = _ref2.body,
    body = _ref2$body === void 0 ? false : _ref2$body,
    _ref2$pbody = _ref2.pbody,
    pbody = _ref2$pbody === void 0 ? false : _ref2$pbody,
    _ref2$ln = _ref2.ln,
    ln = _ref2$ln === void 0 ? false : _ref2$ln;
  var dataAttributes = [tagIDKeyName].concat(_toConsumableArray(commonDataAttributes));
  if (!tags || !tags.length) {
    return '';
  } // build a string containing all tags of this type

  return tags.reduce(function (tagsStr, tag) {
    if (tag.skip) {
      return tagsStr;
    }
    var tagKeys = Object.keys(tag);
    if (tagKeys.length === 0) {
      return tagsStr; // Bail on empty tag object
    }
    if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
      return tagsStr;
    }
    var attrs = tag.once ? '' : " ".concat(attribute, "=\"").concat(appId || (isSSR === false ? '1' : ssrAppId), "\""); // build a string containing all attributes of this tag

    for (var attr in tag) {
      // these attributes are treated as children on the tag
      if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
        continue;
      }
      if (attr === 'callback') {
        attrs += ' onload="this.__vm_l=1"';
        continue;
      } // these form the attribute list for this tag

      var prefix = '';
      if (dataAttributes.includes(attr)) {
        prefix = 'data-';
      }
      var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr);
      if (isBooleanAttr && !tag[attr]) {
        continue;
      }
      attrs += " ".concat(prefix).concat(attr) + (isBooleanAttr ? '' : "=\"".concat(tag[attr], "\""));
    }
    var json = '';
    if (tag.json) {
      json = JSON.stringify(tag.json);
    } // grab child content from one of these attributes, if possible

    var content = tag.innerHTML || tag.cssText || json; // generate tag exactly without any other redundant attribute
    // these tags have no end tag

    var hasEndTag = !tagsWithoutEndTag.includes(type); // these tag types will have content inserted

    var hasContent = hasEndTag && tagsWithInnerContent.includes(type); // the final string for this specific tag

    return "".concat(tagsStr, "<").concat(type).concat(attrs).concat(!hasContent && hasEndTag ? '/' : '', ">") + (hasContent ? "".concat(content, "</").concat(type, ">") : '') + (ln ? '\n' : '');
  }, '');
}

/**
 * Converts a meta info property to one that can be stringified on the server
 *
 * @param  {String} type - the type of data to convert
 * @param  {(String|Object|Array<Object>)} data - the data value
 * @return {Object} - the new injector
 */

function generateServerInjector(options, metaInfo, globalInjectOptions) {
  var serverInjector = {
    data: metaInfo,
    extraData: undefined,
    addInfo: function addInfo(appId, metaInfo) {
      this.extraData = this.extraData || {};
      this.extraData[appId] = metaInfo;
    },
    callInjectors: function callInjectors(opts) {
      var m = this.injectors; // only call title for the head

      return (opts.body || opts.pbody ? '' : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts);
    },
    injectors: {
      head: function head(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln
        }));
      },
      bodyPrepend: function bodyPrepend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          pbody: true
        }));
      },
      bodyAppend: function bodyAppend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          body: true
        }));
      }
    }
  };
  var _loop = function _loop(type) {
    if (metaInfoOptionKeys.includes(type)) {
      return "continue";
    }
    serverInjector.injectors[type] = {
      text: function text(injectOptions) {
        var addSsrAttribute = injectOptions === true;
        injectOptions = _objectSpread2(_objectSpread2({
          addSsrAttribute: addSsrAttribute
        }, globalInjectOptions), injectOptions);
        if (type === 'title') {
          return titleGenerator(options, type, serverInjector.data[type], injectOptions);
        }
        if (metaInfoAttributeKeys.includes(type)) {
          var attributeData = {};
          var data = serverInjector.data[type];
          if (data) {
            var appId = injectOptions.isSSR === false ? '1' : options.ssrAppId;
            for (var attr in data) {
              attributeData[attr] = _defineProperty({}, appId, data[attr]);
            }
          }
          if (serverInjector.extraData) {
            for (var _appId in serverInjector.extraData) {
              var _data = serverInjector.extraData[_appId][type];
              if (_data) {
                for (var _attr in _data) {
                  attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]));
                }
              }
            }
          }
          return attributeGenerator(options, type, attributeData, injectOptions);
        }
        var str = tagGenerator(options, type, serverInjector.data[type], injectOptions);
        if (serverInjector.extraData) {
          for (var _appId2 in serverInjector.extraData) {
            var _data2 = serverInjector.extraData[_appId2][type];
            var extraStr = tagGenerator(options, type, _data2, _objectSpread2({
              appId: _appId2
            }, injectOptions));
            str = "".concat(str).concat(extraStr);
          }
        }
        return str;
      }
    };
  };
  for (var type in defaultInfo) {
    var _ret = _loop(type);
    if (_ret === "continue") continue;
  }
  return serverInjector;
}

/**
 * Converts the state of the meta info object such that each item
 * can be compiled to a tag string on the server
 *
 * @vm {Object} - Vue instance - ideally the root component
 * @return {Object} - server meta info with `toString` methods
 */

function inject(rootVm, options, injectOptions) {
  // make sure vue-meta was initiated
  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options

  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm); // generate server injector

  var serverInjector = generateServerInjector(options, metaInfo, injectOptions); // add meta info from additional apps

  var appsMetaInfo = getAppsMetaInfo();
  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      serverInjector.addInfo(additionalAppId, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }
    clearAppsMetaInfo(true);
  }
  return serverInjector.injectors;
}
function $meta(options) {
  options = options || {};
  /**
   * Returns an injector for server-side rendering.
   * @this {Object} - the Vue instance (a root component)
   * @return {Object} - injector
   */

  var $root = this.$root;
  return {
    getOptions: function getOptions$1() {
      return getOptions(options);
    },
    setOptions: function setOptions(newOptions) {
      var refreshNavKey = 'refreshOnceOnNavigation';
      if (newOptions && newOptions[refreshNavKey]) {
        options.refreshOnceOnNavigation = !!newOptions[refreshNavKey];
        addNavGuards($root);
      }
      var debounceWaitKey = 'debounceWait';
      if (newOptions && debounceWaitKey in newOptions) {
        var debounceWait = parseInt(newOptions[debounceWaitKey]);
        if (!isNaN(debounceWait)) {
          options.debounceWait = debounceWait;
        }
      }
      var waitOnDestroyedKey = 'waitOnDestroyed';
      if (newOptions && waitOnDestroyedKey in newOptions) {
        options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey];
      }
    },
    refresh: function refresh$1() {
      return refresh($root, options);
    },
    inject: function inject$1(injectOptions) {
      return inject($root, options, injectOptions);
    },
    pause: function pause$1() {
      return pause($root);
    },
    resume: function resume$1() {
      return resume($root);
    },
    addApp: function addApp$1(appId) {
      return addApp($root, appId, options);
    }
  };
}
function generate(rawInfo, options) {
  options = setOptions(options);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences);
  var serverInjector = generateServerInjector(options, metaInfo);
  return serverInjector.injectors;
}

/**
 * Plugin install function.
 * @param {Function} Vue - the Vue constructor.
 */

function install(Vue, options) {
  if (Vue.__vuemeta_installed) {
    return;
  }
  Vue.__vuemeta_installed = true;
  options = setOptions(options);
  Vue.prototype.$meta = function () {
    return $meta.call(this, options);
  };
  Vue.mixin(createMixin(Vue, options));
}
var index = {
  version: version,
  install: install,
  generate: function generate$1(metaInfo, options) {
    return generate(metaInfo, options);
  },
  hasMetaInfo: hasMetaInfo
};
module.exports = index;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */


__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
const t = Object.freeze({}),
  e = Array.isArray;
function n(t) {
  return null == t;
}
function o(t) {
  return null != t;
}
function r(t) {
  return !0 === t;
}
function s(t) {
  return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t;
}
function i(t) {
  return "function" == typeof t;
}
function c(t) {
  return null !== t && "object" == typeof t;
}
const a = Object.prototype.toString;
function l(t) {
  return "[object Object]" === a.call(t);
}
function u(t) {
  const e = parseFloat(String(t));
  return e >= 0 && Math.floor(e) === e && isFinite(t);
}
function f(t) {
  return o(t) && "function" == typeof t.then && "function" == typeof t.catch;
}
function d(t) {
  return null == t ? "" : Array.isArray(t) || l(t) && t.toString === a ? JSON.stringify(t, p, 2) : String(t);
}
function p(t, e) {
  return e && e.__v_isRef ? e.value : e;
}
function h(t) {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}
function m(t, e) {
  const n = Object.create(null),
    o = t.split(",");
  for (let t = 0; t < o.length; t++) n[o[t]] = !0;
  return e ? t => n[t.toLowerCase()] : t => n[t];
}
const _ = m("key,ref,slot,slot-scope,is");
function v(t, e) {
  const n = t.length;
  if (n) {
    if (e === t[n - 1]) return void (t.length = n - 1);
    const o = t.indexOf(e);
    if (o > -1) return t.splice(o, 1);
  }
}
const y = Object.prototype.hasOwnProperty;
function g(t, e) {
  return y.call(t, e);
}
function b(t) {
  const e = Object.create(null);
  return function (n) {
    return e[n] || (e[n] = t(n));
  };
}
const $ = /-(\w)/g,
  w = b(t => t.replace($, (t, e) => e ? e.toUpperCase() : "")),
  C = b(t => t.charAt(0).toUpperCase() + t.slice(1)),
  x = /\B([A-Z])/g,
  O = b(t => t.replace(x, "-$1").toLowerCase());
const k = Function.prototype.bind ? function (t, e) {
  return t.bind(e);
} : function (t, e) {
  function n(n) {
    const o = arguments.length;
    return o ? o > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
  }
  return n._length = t.length, n;
};
function S(t, e) {
  e = e || 0;
  let n = t.length - e;
  const o = new Array(n);
  for (; n--;) o[n] = t[n + e];
  return o;
}
function j(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function A(t) {
  const e = {};
  for (let n = 0; n < t.length; n++) t[n] && j(e, t[n]);
  return e;
}
function T(t, e, n) {}
const E = (t, e, n) => !1,
  P = t => t;
function I(t, e) {
  if (t === e) return !0;
  const n = c(t),
    o = c(e);
  if (!n || !o) return !n && !o && String(t) === String(e);
  try {
    const n = Array.isArray(t),
      o = Array.isArray(e);
    if (n && o) return t.length === e.length && t.every((t, n) => I(t, e[n]));
    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
    if (n || o) return !1;
    {
      const n = Object.keys(t),
        o = Object.keys(e);
      return n.length === o.length && n.every(n => I(t[n], e[n]));
    }
  } catch (t) {
    return !1;
  }
}
function D(t, e) {
  for (let n = 0; n < t.length; n++) if (I(t[n], e)) return n;
  return -1;
}
function N(t) {
  let e = !1;
  return function () {
    e || (e = !0, t.apply(this, arguments));
  };
}
function M(t, e) {
  return t === e ? 0 === t && 1 / t != 1 / e : t == t || e == e;
}
const L = "data-server-rendered",
  R = ["component", "directive", "filter"],
  F = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch", "renderTracked", "renderTriggered"];
var U = {
  optionMergeStrategies: Object.create(null),
  silent: !1,
  productionTip: !1,
  devtools: !1,
  performance: !1,
  errorHandler: null,
  warnHandler: null,
  ignoredElements: [],
  keyCodes: Object.create(null),
  isReservedTag: E,
  isReservedAttr: E,
  isUnknownElement: E,
  getTagNamespace: T,
  parsePlatformTagName: P,
  mustUseProp: E,
  async: !0,
  _lifecycleHooks: F
};
function B(t) {
  const e = (t + "").charCodeAt(0);
  return 36 === e || 95 === e;
}
function V(t, e, n, o) {
  Object.defineProperty(t, e, {
    value: n,
    enumerable: !!o,
    writable: !0,
    configurable: !0
  });
}
const z = new RegExp(`[^${/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source}.$_\\d]`);
const H = ("__proto__" in {}),
  W = "undefined" != typeof window,
  K = W && window.navigator.userAgent.toLowerCase(),
  q = K && /msie|trident/.test(K),
  G = K && K.indexOf("msie 9.0") > 0,
  Z = K && K.indexOf("edge/") > 0;
K && K.indexOf("android");
const J = K && /iphone|ipad|ipod|ios/.test(K);
K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K);
const X = K && K.match(/firefox\/(\d+)/),
  Q = {}.watch;
let Y,
  tt = !1;
if (W) try {
  const t = {};
  Object.defineProperty(t, "passive", {
    get() {
      tt = !0;
    }
  }), window.addEventListener("test-passive", null, t);
} catch (t) {}
const et = () => (void 0 === Y && (Y = !W && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV), Y),
  nt = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function ot(t) {
  return "function" == typeof t && /native code/.test(t.toString());
}
const rt = "undefined" != typeof Symbol && ot(Symbol) && "undefined" != typeof Reflect && ot(Reflect.ownKeys);
let st;
st = "undefined" != typeof Set && ot(Set) ? Set : class {
  constructor() {
    this.set = Object.create(null);
  }
  has(t) {
    return !0 === this.set[t];
  }
  add(t) {
    this.set[t] = !0;
  }
  clear() {
    this.set = Object.create(null);
  }
};
let it = null;
function ct(t = null) {
  t || it && it._scope.off(), it = t, t && t._scope.on();
}
class at {
  constructor(t, e, n, o, r, s, i, c) {
    this.tag = t, this.data = e, this.children = n, this.text = o, this.elm = r, this.ns = void 0, this.context = s, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = i, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = c, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
  }
  get child() {
    return this.componentInstance;
  }
}
const lt = (t = "") => {
  const e = new at();
  return e.text = t, e.isComment = !0, e;
};
function ut(t) {
  return new at(void 0, void 0, void 0, String(t));
}
function ft(t) {
  const e = new at(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
  return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
}
let dt = 0;
const pt = [],
  ht = () => {
    for (let t = 0; t < pt.length; t++) {
      const e = pt[t];
      e.subs = e.subs.filter(t => t), e._pending = !1;
    }
    pt.length = 0;
  };
class mt {
  constructor() {
    this._pending = !1, this.id = dt++, this.subs = [];
  }
  addSub(t) {
    this.subs.push(t);
  }
  removeSub(t) {
    this.subs[this.subs.indexOf(t)] = null, this._pending || (this._pending = !0, pt.push(this));
  }
  depend(t) {
    mt.target && mt.target.addDep(this);
  }
  notify(t) {
    const e = this.subs.filter(t => t);
    for (let t = 0, n = e.length; t < n; t++) {
      e[t].update();
    }
  }
}
mt.target = null;
const _t = [];
function vt(t) {
  _t.push(t), mt.target = t;
}
function yt() {
  _t.pop(), mt.target = _t[_t.length - 1];
}
const gt = Array.prototype,
  bt = Object.create(gt);
["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
  const e = gt[t];
  V(bt, t, function (...n) {
    const o = e.apply(this, n),
      r = this.__ob__;
    let s;
    switch (t) {
      case "push":
      case "unshift":
        s = n;
        break;
      case "splice":
        s = n.slice(2);
    }
    return s && r.observeArray(s), r.dep.notify(), o;
  });
});
const $t = Object.getOwnPropertyNames(bt),
  wt = {};
let Ct = !0;
function xt(t) {
  Ct = t;
}
const Ot = {
  notify: T,
  depend: T,
  addSub: T,
  removeSub: T
};
class kt {
  constructor(t, n = !1, o = !1) {
    if (this.value = t, this.shallow = n, this.mock = o, this.dep = o ? Ot : new mt(), this.vmCount = 0, V(t, "__ob__", this), e(t)) {
      if (!o) if (H) t.__proto__ = bt;else for (let e = 0, n = $t.length; e < n; e++) {
        const n = $t[e];
        V(t, n, bt[n]);
      }
      n || this.observeArray(t);
    } else {
      const e = Object.keys(t);
      for (let r = 0; r < e.length; r++) {
        jt(t, e[r], wt, void 0, n, o);
      }
    }
  }
  observeArray(t) {
    for (let e = 0, n = t.length; e < n; e++) St(t[e], !1, this.mock);
  }
}
function St(t, n, o) {
  return t && g(t, "__ob__") && t.__ob__ instanceof kt ? t.__ob__ : !Ct || !o && et() || !e(t) && !l(t) || !Object.isExtensible(t) || t.__v_skip || Rt(t) || t instanceof at ? void 0 : new kt(t, n, o);
}
function jt(t, n, o, r, s, i, c = !1) {
  const a = new mt(),
    l = Object.getOwnPropertyDescriptor(t, n);
  if (l && !1 === l.configurable) return;
  const u = l && l.get,
    f = l && l.set;
  u && !f || o !== wt && 2 !== arguments.length || (o = t[n]);
  let d = s ? o && o.__ob__ : St(o, !1, i);
  return Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function () {
      const n = u ? u.call(t) : o;
      return mt.target && (a.depend(), d && (d.dep.depend(), e(n) && Et(n))), Rt(n) && !s ? n.value : n;
    },
    set: function (e) {
      const n = u ? u.call(t) : o;
      if (M(n, e)) {
        if (f) f.call(t, e);else {
          if (u) return;
          if (!s && Rt(n) && !Rt(e)) return void (n.value = e);
          o = e;
        }
        d = s ? e && e.__ob__ : St(e, !1, i), a.notify();
      }
    }
  }), a;
}
function At(t, n, o) {
  if (Mt(t)) return;
  const r = t.__ob__;
  return e(t) && u(n) ? (t.length = Math.max(t.length, n), t.splice(n, 1, o), r && !r.shallow && r.mock && St(o, !1, !0), o) : n in t && !(n in Object.prototype) ? (t[n] = o, o) : t._isVue || r && r.vmCount ? o : r ? (jt(r.value, n, o, void 0, r.shallow, r.mock), r.dep.notify(), o) : (t[n] = o, o);
}
function Tt(t, n) {
  if (e(t) && u(n)) return void t.splice(n, 1);
  const o = t.__ob__;
  t._isVue || o && o.vmCount || Mt(t) || g(t, n) && (delete t[n], o && o.dep.notify());
}
function Et(t) {
  for (let n, o = 0, r = t.length; o < r; o++) n = t[o], n && n.__ob__ && n.__ob__.dep.depend(), e(n) && Et(n);
}
function Pt(t) {
  return It(t, !0), V(t, "__v_isShallow", !0), t;
}
function It(t, e) {
  Mt(t) || St(t, e, et());
}
function Dt(t) {
  return Mt(t) ? Dt(t.__v_raw) : !(!t || !t.__ob__);
}
function Nt(t) {
  return !(!t || !t.__v_isShallow);
}
function Mt(t) {
  return !(!t || !t.__v_isReadonly);
}
const Lt = "__v_isRef";
function Rt(t) {
  return !(!t || !0 !== t.__v_isRef);
}
function Ft(t, e) {
  if (Rt(t)) return t;
  const n = {};
  return V(n, Lt, !0), V(n, "__v_isShallow", e), V(n, "dep", jt(n, "value", t, null, e, et())), n;
}
function Ut(t, e, n) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: () => {
      const t = e[n];
      if (Rt(t)) return t.value;
      {
        const e = t && t.__ob__;
        return e && e.dep.depend(), t;
      }
    },
    set: t => {
      const o = e[n];
      Rt(o) && !Rt(t) ? o.value = t : e[n] = t;
    }
  });
}
function Bt(t, e, n) {
  const o = t[e];
  if (Rt(o)) return o;
  const r = {
    get value() {
      const o = t[e];
      return void 0 === o ? n : o;
    },
    set value(n) {
      t[e] = n;
    }
  };
  return V(r, Lt, !0), r;
}
const Vt = "__v_rawToReadonly",
  zt = "__v_rawToShallowReadonly";
function Ht(t) {
  return Wt(t, !1);
}
function Wt(t, e) {
  if (!l(t)) return t;
  if (Mt(t)) return t;
  const n = e ? zt : Vt,
    o = t[n];
  if (o) return o;
  const r = Object.create(Object.getPrototypeOf(t));
  V(t, n, r), V(r, "__v_isReadonly", !0), V(r, "__v_raw", t), Rt(t) && V(r, Lt, !0), (e || Nt(t)) && V(r, "__v_isShallow", !0);
  const s = Object.keys(t);
  for (let n = 0; n < s.length; n++) Kt(r, t, s[n], e);
  return r;
}
function Kt(t, e, n, o) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get() {
      const t = e[n];
      return o || !l(t) ? t : Ht(t);
    },
    set() {}
  });
}
const qt = "watcher",
  Gt = `${qt} callback`,
  Zt = `${qt} getter`,
  Jt = `${qt} cleanup`;
function Xt(t, e) {
  return Yt(t, null, {
    flush: "post"
  });
}
const Qt = {};
function Yt(n, o, {
  immediate: r,
  deep: s,
  flush: c = "pre",
  onTrack: a,
  onTrigger: l
} = t) {
  const u = it,
    f = (t, e, n = null) => {
      const o = Ke(t, null, n, u, e);
      return s && o && o.__ob__ && o.__ob__.dep.depend(), o;
    };
  let d,
    p,
    h = !1,
    m = !1;
  if (Rt(n) ? (d = () => n.value, h = Nt(n)) : Dt(n) ? (d = () => (n.__ob__.dep.depend(), n), s = !0) : e(n) ? (m = !0, h = n.some(t => Dt(t) || Nt(t)), d = () => n.map(t => Rt(t) ? t.value : Dt(t) ? (t.__ob__.dep.depend(), yn(t)) : i(t) ? f(t, Zt) : void 0)) : d = i(n) ? o ? () => f(n, Zt) : () => {
    if (!u || !u._isDestroyed) return p && p(), f(n, qt, [_]);
  } : T, o && s) {
    const t = d;
    d = () => yn(t());
  }
  let _ = t => {
    p = v.onStop = () => {
      f(t, Jt);
    };
  };
  if (et()) return _ = T, o ? r && f(o, Gt, [d(), m ? [] : void 0, _]) : d(), T;
  const v = new wn(it, d, T, {
    lazy: !0
  });
  v.noRecurse = !o;
  let y = m ? [] : Qt;
  return v.run = () => {
    if (v.active) if (o) {
      const t = v.get();
      (s || h || (m ? t.some((t, e) => M(t, y[e])) : M(t, y))) && (p && p(), f(o, Gt, [t, y === Qt ? void 0 : y, _]), y = t);
    } else v.get();
  }, "sync" === c ? v.update = v.run : "post" === c ? (v.post = !0, v.update = () => zn(v)) : v.update = () => {
    if (u && u === it && !u._isMounted) {
      const t = u._preWatchers || (u._preWatchers = []);
      t.indexOf(v) < 0 && t.push(v);
    } else zn(v);
  }, o ? r ? v.run() : y = v.get() : "post" === c && u ? u.$once("hook:mounted", () => v.get()) : v.get(), () => {
    v.teardown();
  };
}
let te;
class ee {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = te, !t && te && (this.index = (te.scopes || (te.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const e = te;
      try {
        return te = this, t();
      } finally {
        te = e;
      }
    }
  }
  on() {
    te = this;
  }
  off() {
    te = this.parent;
  }
  stop(t) {
    if (this.active) {
      let e, n;
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].teardown();
      for (e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
      if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(!0);
      if (!this.detached && this.parent && !t) {
        const t = this.parent.scopes.pop();
        t && t !== this && (this.parent.scopes[this.index] = t, t.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function ne() {
  return te;
}
function oe(t) {
  const e = t._provided,
    n = t.$parent && t.$parent._provided;
  return n === e ? t._provided = Object.create(n) : e;
}
const re = b(t => {
  const e = "&" === t.charAt(0),
    n = "~" === (t = e ? t.slice(1) : t).charAt(0),
    o = "!" === (t = n ? t.slice(1) : t).charAt(0);
  return {
    name: t = o ? t.slice(1) : t,
    once: n,
    capture: o,
    passive: e
  };
});
function se(t, n) {
  function o() {
    const t = o.fns;
    if (!e(t)) return Ke(t, null, arguments, n, "v-on handler");
    {
      const e = t.slice();
      for (let t = 0; t < e.length; t++) Ke(e[t], null, arguments, n, "v-on handler");
    }
  }
  return o.fns = t, o;
}
function ie(t, e, o, s, i, c) {
  let a, l, u, f;
  for (a in t) l = t[a], u = e[a], f = re(a), n(l) || (n(u) ? (n(l.fns) && (l = t[a] = se(l, c)), r(f.once) && (l = t[a] = i(f.name, l, f.capture)), o(f.name, l, f.capture, f.passive, f.params)) : l !== u && (u.fns = l, t[a] = u));
  for (a in e) n(t[a]) && (f = re(a), s(f.name, e[a], f.capture));
}
function ce(t, e, s) {
  let i;
  t instanceof at && (t = t.data.hook || (t.data.hook = {}));
  const c = t[e];
  function a() {
    s.apply(this, arguments), v(i.fns, a);
  }
  n(c) ? i = se([a]) : o(c.fns) && r(c.merged) ? (i = c, i.fns.push(a)) : i = se([c, a]), i.merged = !0, t[e] = i;
}
function ae(t, e, n, r, s) {
  if (o(e)) {
    if (g(e, n)) return t[n] = e[n], s || delete e[n], !0;
    if (g(e, r)) return t[n] = e[r], s || delete e[r], !0;
  }
  return !1;
}
function le(t) {
  return s(t) ? [ut(t)] : e(t) ? fe(t) : void 0;
}
function ue(t) {
  return o(t) && o(t.text) && !1 === t.isComment;
}
function fe(t, i) {
  const c = [];
  let a, l, u, f;
  for (a = 0; a < t.length; a++) l = t[a], n(l) || "boolean" == typeof l || (u = c.length - 1, f = c[u], e(l) ? l.length > 0 && (l = fe(l, `${i || ""}_${a}`), ue(l[0]) && ue(f) && (c[u] = ut(f.text + l[0].text), l.shift()), c.push.apply(c, l)) : s(l) ? ue(f) ? c[u] = ut(f.text + l) : "" !== l && c.push(ut(l)) : ue(l) && ue(f) ? c[u] = ut(f.text + l.text) : (r(t._isVList) && o(l.tag) && n(l.key) && o(i) && (l.key = `__vlist${i}_${a}__`), c.push(l)));
  return c;
}
function de(t, n) {
  let r,
    s,
    i,
    a,
    l = null;
  if (e(t) || "string" == typeof t) for (l = new Array(t.length), r = 0, s = t.length; r < s; r++) l[r] = n(t[r], r);else if ("number" == typeof t) for (l = new Array(t), r = 0; r < t; r++) l[r] = n(r + 1, r);else if (c(t)) if (rt && t[Symbol.iterator]) {
    l = [];
    const e = t[Symbol.iterator]();
    let o = e.next();
    for (; !o.done;) l.push(n(o.value, l.length)), o = e.next();
  } else for (i = Object.keys(t), l = new Array(i.length), r = 0, s = i.length; r < s; r++) a = i[r], l[r] = n(t[a], a, r);
  return o(l) || (l = []), l._isVList = !0, l;
}
function pe(t, e, n, o) {
  const r = this.$scopedSlots[t];
  let s;
  r ? (n = n || {}, o && (n = j(j({}, o), n)), s = r(n) || (i(e) ? e() : e)) : s = this.$slots[t] || (i(e) ? e() : e);
  const c = n && n.slot;
  return c ? this.$createElement("template", {
    slot: c
  }, s) : s;
}
function he(t) {
  return co(this.$options, "filters", t) || P;
}
function me(t, n) {
  return e(t) ? -1 === t.indexOf(n) : t !== n;
}
function _e(t, e, n, o, r) {
  const s = U.keyCodes[e] || n;
  return r && o && !U.keyCodes[e] ? me(r, o) : s ? me(s, t) : o ? O(o) !== e : void 0 === t;
}
function ve(t, n, o, r, s) {
  if (o) if (c(o)) {
    let i;
    e(o) && (o = A(o));
    for (const e in o) {
      if ("class" === e || "style" === e || _(e)) i = t;else {
        const o = t.attrs && t.attrs.type;
        i = r || U.mustUseProp(n, o, e) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
      }
      const c = w(e),
        a = O(e);
      if (!(c in i) && !(a in i) && (i[e] = o[e], s)) {
        (t.on || (t.on = {}))[`update:${e}`] = function (t) {
          o[e] = t;
        };
      }
    }
  } else ;
  return t;
}
function ye(t, e) {
  const n = this._staticTrees || (this._staticTrees = []);
  let o = n[t];
  return o && !e || (o = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, this._c, this), be(o, `__static__${t}`, !1)), o;
}
function ge(t, e, n) {
  return be(t, `__once__${e}${n ? `_${n}` : ""}`, !0), t;
}
function be(t, n, o) {
  if (e(t)) for (let e = 0; e < t.length; e++) t[e] && "string" != typeof t[e] && $e(t[e], `${n}_${e}`, o);else $e(t, n, o);
}
function $e(t, e, n) {
  t.isStatic = !0, t.key = e, t.isOnce = n;
}
function we(t, e) {
  if (e) if (l(e)) {
    const n = t.on = t.on ? j({}, t.on) : {};
    for (const t in e) {
      const o = n[t],
        r = e[t];
      n[t] = o ? [].concat(o, r) : r;
    }
  } else ;
  return t;
}
function Ce(t, n, o, r) {
  n = n || {
    $stable: !o
  };
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    e(s) ? Ce(s, n, o) : s && (s.proxy && (s.fn.proxy = !0), n[s.key] = s.fn);
  }
  return r && (n.$key = r), n;
}
function xe(t, e) {
  for (let n = 0; n < e.length; n += 2) {
    const o = e[n];
    "string" == typeof o && o && (t[e[n]] = e[n + 1]);
  }
  return t;
}
function Oe(t, e) {
  return "string" == typeof t ? e + t : t;
}
function ke(t) {
  t._o = ge, t._n = h, t._s = d, t._l = de, t._t = pe, t._q = I, t._i = D, t._m = ye, t._f = he, t._k = _e, t._b = ve, t._v = ut, t._e = lt, t._u = Ce, t._g = we, t._d = xe, t._p = Oe;
}
function Se(t, e) {
  if (!t || !t.length) return {};
  const n = {};
  for (let o = 0, r = t.length; o < r; o++) {
    const r = t[o],
      s = r.data;
    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, r.context !== e && r.fnContext !== e || !s || null == s.slot) (n.default || (n.default = [])).push(r);else {
      const t = s.slot,
        e = n[t] || (n[t] = []);
      "template" === r.tag ? e.push.apply(e, r.children || []) : e.push(r);
    }
  }
  for (const t in n) n[t].every(je) && delete n[t];
  return n;
}
function je(t) {
  return t.isComment && !t.asyncFactory || " " === t.text;
}
function Ae(t) {
  return t.isComment && t.asyncFactory;
}
function Te(e, n, o, r) {
  let s;
  const i = Object.keys(o).length > 0,
    c = n ? !!n.$stable : !i,
    a = n && n.$key;
  if (n) {
    if (n._normalized) return n._normalized;
    if (c && r && r !== t && a === r.$key && !i && !r.$hasNormal) return r;
    s = {};
    for (const t in n) n[t] && "$" !== t[0] && (s[t] = Ee(e, o, t, n[t]));
  } else s = {};
  for (const t in o) t in s || (s[t] = Pe(o, t));
  return n && Object.isExtensible(n) && (n._normalized = s), V(s, "$stable", c), V(s, "$key", a), V(s, "$hasNormal", i), s;
}
function Ee(t, n, o, r) {
  const s = function () {
    const n = it;
    ct(t);
    let o = arguments.length ? r.apply(null, arguments) : r({});
    o = o && "object" == typeof o && !e(o) ? [o] : le(o);
    const s = o && o[0];
    return ct(n), o && (!s || 1 === o.length && s.isComment && !Ae(s)) ? void 0 : o;
  };
  return r.proxy && Object.defineProperty(n, o, {
    get: s,
    enumerable: !0,
    configurable: !0
  }), s;
}
function Pe(t, e) {
  return () => t[e];
}
function Ie(e) {
  return {
    get attrs() {
      if (!e._attrsProxy) {
        const n = e._attrsProxy = {};
        V(n, "_v_attr_proxy", !0), De(n, e.$attrs, t, e, "$attrs");
      }
      return e._attrsProxy;
    },
    get listeners() {
      if (!e._listenersProxy) {
        De(e._listenersProxy = {}, e.$listeners, t, e, "$listeners");
      }
      return e._listenersProxy;
    },
    get slots() {
      return function (t) {
        t._slotsProxy || Me(t._slotsProxy = {}, t.$scopedSlots);
        return t._slotsProxy;
      }(e);
    },
    emit: k(e.$emit, e),
    expose(t) {
      t && Object.keys(t).forEach(n => Ut(e, t, n));
    }
  };
}
function De(t, e, n, o, r) {
  let s = !1;
  for (const i in e) i in t ? e[i] !== n[i] && (s = !0) : (s = !0, Ne(t, i, o, r));
  for (const n in t) n in e || (s = !0, delete t[n]);
  return s;
}
function Ne(t, e, n, o) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    configurable: !0,
    get: () => n[o][e]
  });
}
function Me(t, e) {
  for (const n in e) t[n] = e[n];
  for (const n in t) n in e || delete t[n];
}
function Le() {
  const t = it;
  return t._setupContext || (t._setupContext = Ie(t));
}
let Re = null;
function Fe(t, e) {
  return (t.__esModule || rt && "Module" === t[Symbol.toStringTag]) && (t = t.default), c(t) ? e.extend(t) : t;
}
function Ue(t) {
  if (e(t)) for (let e = 0; e < t.length; e++) {
    const n = t[e];
    if (o(n) && (o(n.componentOptions) || Ae(n))) return n;
  }
}
const Be = 1,
  Ve = 2;
function ze(t, n, a, l, u, f) {
  return (e(a) || s(a)) && (u = l, l = a, a = void 0), r(f) && (u = Ve), function (t, n, r, s, a) {
    if (o(r) && o(r.__ob__)) return lt();
    o(r) && o(r.is) && (n = r.is);
    if (!n) return lt();
    e(s) && i(s[0]) && ((r = r || {}).scopedSlots = {
      default: s[0]
    }, s.length = 0);
    a === Ve ? s = le(s) : a === Be && (s = function (t) {
      for (let n = 0; n < t.length; n++) if (e(t[n])) return Array.prototype.concat.apply([], t);
      return t;
    }(s));
    let l, u;
    if ("string" == typeof n) {
      let e;
      u = t.$vnode && t.$vnode.ns || U.getTagNamespace(n), l = U.isReservedTag(n) ? new at(U.parsePlatformTagName(n), r, s, void 0, void 0, t) : r && r.pre || !o(e = co(t.$options, "components", n)) ? new at(n, r, s, void 0, void 0, t) : Xn(e, r, t, s, n);
    } else l = Xn(n, r, t, s);
    return e(l) ? l : o(l) ? (o(u) && He(l, u), o(r) && function (t) {
      c(t.style) && yn(t.style);
      c(t.class) && yn(t.class);
    }(r), l) : lt();
  }(t, n, a, l, u);
}
function He(t, e, s) {
  if (t.ns = e, "foreignObject" === t.tag && (e = void 0, s = !0), o(t.children)) for (let i = 0, c = t.children.length; i < c; i++) {
    const c = t.children[i];
    o(c.tag) && (n(c.ns) || r(s) && "svg" !== c.tag) && He(c, e, s);
  }
}
function We(t, e, n) {
  vt();
  try {
    if (e) {
      let o = e;
      for (; o = o.$parent;) {
        const r = o.$options.errorCaptured;
        if (r) for (let s = 0; s < r.length; s++) try {
          if (!1 === r[s].call(o, t, e, n)) return;
        } catch (t) {
          qe(t, o, "errorCaptured hook");
        }
      }
    }
    qe(t, e, n);
  } finally {
    yt();
  }
}
function Ke(t, e, n, o, r) {
  let s;
  try {
    s = n ? t.apply(e, n) : t.call(e), s && !s._isVue && f(s) && !s._handled && (s.catch(t => We(t, o, r + " (Promise/async)")), s._handled = !0);
  } catch (t) {
    We(t, o, r);
  }
  return s;
}
function qe(t, e, n) {
  if (U.errorHandler) try {
    return U.errorHandler.call(null, t, e, n);
  } catch (e) {
    e !== t && Ge(e);
  }
  Ge(t);
}
function Ge(t, e, n) {
  if (!W || "undefined" == typeof console) throw t;
  console.error(t);
}
let Ze = !1;
const Je = [];
let Xe,
  Qe = !1;
function Ye() {
  Qe = !1;
  const t = Je.slice(0);
  Je.length = 0;
  for (let e = 0; e < t.length; e++) t[e]();
}
if ("undefined" != typeof Promise && ot(Promise)) {
  const t = Promise.resolve();
  Xe = () => {
    t.then(Ye), J && setTimeout(T);
  }, Ze = !0;
} else if (q || "undefined" == typeof MutationObserver || !ot(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Xe = "undefined" != typeof setImmediate && ot(setImmediate) ? () => {
  setImmediate(Ye);
} : () => {
  setTimeout(Ye, 0);
};else {
  let t = 1;
  const e = new MutationObserver(Ye),
    n = document.createTextNode(String(t));
  e.observe(n, {
    characterData: !0
  }), Xe = () => {
    t = (t + 1) % 2, n.data = String(t);
  }, Ze = !0;
}
function tn(t, e) {
  let n;
  if (Je.push(() => {
    if (t) try {
      t.call(e);
    } catch (t) {
      We(t, e, "nextTick");
    } else n && n(e);
  }), Qe || (Qe = !0, Xe()), !t && "undefined" != typeof Promise) return new Promise(t => {
    n = t;
  });
}
function en(t) {
  return (e, n = it) => {
    if (n) return function (t, e, n) {
      const o = t.$options;
      o[e] = oo(o[e], n);
    }(n, t, e);
  };
}
const nn = en("beforeMount"),
  on = en("mounted"),
  rn = en("beforeUpdate"),
  sn = en("updated"),
  cn = en("beforeDestroy"),
  an = en("destroyed"),
  ln = en("activated"),
  un = en("deactivated"),
  fn = en("serverPrefetch"),
  dn = en("renderTracked"),
  pn = en("renderTriggered"),
  hn = en("errorCaptured");
const mn = "2.7.16";
var _n = Object.freeze({
  __proto__: null,
  version: mn,
  defineComponent: function (t) {
    return t;
  },
  ref: function (t) {
    return Ft(t, !1);
  },
  shallowRef: function (t) {
    return Ft(t, !0);
  },
  isRef: Rt,
  toRef: Bt,
  toRefs: function (t) {
    const n = e(t) ? new Array(t.length) : {};
    for (const e in t) n[e] = Bt(t, e);
    return n;
  },
  unref: function (t) {
    return Rt(t) ? t.value : t;
  },
  proxyRefs: function (t) {
    if (Dt(t)) return t;
    const e = {},
      n = Object.keys(t);
    for (let o = 0; o < n.length; o++) Ut(e, t, n[o]);
    return e;
  },
  customRef: function (t) {
    const e = new mt(),
      {
        get: n,
        set: o
      } = t(() => {
        e.depend();
      }, () => {
        e.notify();
      }),
      r = {
        get value() {
          return n();
        },
        set value(t) {
          o(t);
        }
      };
    return V(r, Lt, !0), r;
  },
  triggerRef: function (t) {
    t.dep && t.dep.notify();
  },
  reactive: function (t) {
    return It(t, !1), t;
  },
  isReactive: Dt,
  isReadonly: Mt,
  isShallow: Nt,
  isProxy: function (t) {
    return Dt(t) || Mt(t);
  },
  shallowReactive: Pt,
  markRaw: function (t) {
    return Object.isExtensible(t) && V(t, "__v_skip", !0), t;
  },
  toRaw: function t(e) {
    const n = e && e.__v_raw;
    return n ? t(n) : e;
  },
  readonly: Ht,
  shallowReadonly: function (t) {
    return Wt(t, !0);
  },
  computed: function (t, e) {
    let n, o;
    const r = i(t);
    r ? (n = t, o = T) : (n = t.get, o = t.set);
    const s = et() ? null : new wn(it, n, T, {
        lazy: !0
      }),
      c = {
        effect: s,
        get value() {
          return s ? (s.dirty && s.evaluate(), mt.target && s.depend(), s.value) : n();
        },
        set value(t) {
          o(t);
        }
      };
    return V(c, Lt, !0), V(c, "__v_isReadonly", r), c;
  },
  watch: function (t, e, n) {
    return Yt(t, e, n);
  },
  watchEffect: function (t, e) {
    return Yt(t, null, e);
  },
  watchPostEffect: Xt,
  watchSyncEffect: function (t, e) {
    return Yt(t, null, {
      flush: "sync"
    });
  },
  EffectScope: ee,
  effectScope: function (t) {
    return new ee(t);
  },
  onScopeDispose: function (t) {
    te && te.cleanups.push(t);
  },
  getCurrentScope: ne,
  provide: function (t, e) {
    it && (oe(it)[t] = e);
  },
  inject: function (t, e, n = !1) {
    const o = it;
    if (o) {
      const r = o.$parent && o.$parent._provided;
      if (r && t in r) return r[t];
      if (arguments.length > 1) return n && i(e) ? e.call(o) : e;
    }
  },
  h: function (t, e, n) {
    return ze(it, t, e, n, 2, !0);
  },
  getCurrentInstance: function () {
    return it && {
      proxy: it
    };
  },
  useSlots: function () {
    return Le().slots;
  },
  useAttrs: function () {
    return Le().attrs;
  },
  useListeners: function () {
    return Le().listeners;
  },
  mergeDefaults: function (t, n) {
    const o = e(t) ? t.reduce((t, e) => (t[e] = {}, t), {}) : t;
    for (const t in n) {
      const r = o[t];
      r ? e(r) || i(r) ? o[t] = {
        type: r,
        default: n[t]
      } : r.default = n[t] : null === r && (o[t] = {
        default: n[t]
      });
    }
    return o;
  },
  nextTick: tn,
  set: At,
  del: Tt,
  useCssModule: function (e = "$style") {
    {
      if (!it) return t;
      const n = it[e];
      return n || t;
    }
  },
  useCssVars: function (t) {
    if (!W) return;
    const e = it;
    e && Xt(() => {
      const n = e.$el,
        o = t(e, e._setupProxy);
      if (n && 1 === n.nodeType) {
        const t = n.style;
        for (const e in o) t.setProperty(`--${e}`, o[e]);
      }
    });
  },
  defineAsyncComponent: function (t) {
    i(t) && (t = {
      loader: t
    });
    const {
      loader: e,
      loadingComponent: n,
      errorComponent: o,
      delay: r = 200,
      timeout: s,
      suspensible: c = !1,
      onError: a
    } = t;
    let l = null,
      u = 0;
    const f = () => {
      let t;
      return l || (t = l = e().catch(t => {
        if (t = t instanceof Error ? t : new Error(String(t)), a) return new Promise((e, n) => {
          a(t, () => e((u++, l = null, f())), () => n(t), u + 1);
        });
        throw t;
      }).then(e => t !== l && l ? l : (e && (e.__esModule || "Module" === e[Symbol.toStringTag]) && (e = e.default), e)));
    };
    return () => ({
      component: f(),
      delay: r,
      timeout: s,
      error: o,
      loading: n
    });
  },
  onBeforeMount: nn,
  onMounted: on,
  onBeforeUpdate: rn,
  onUpdated: sn,
  onBeforeUnmount: cn,
  onUnmounted: an,
  onActivated: ln,
  onDeactivated: un,
  onServerPrefetch: fn,
  onRenderTracked: dn,
  onRenderTriggered: pn,
  onErrorCaptured: function (t, e = it) {
    hn(t, e);
  }
});
const vn = new st();
function yn(t) {
  return gn(t, vn), vn.clear(), t;
}
function gn(t, n) {
  let o, r;
  const s = e(t);
  if (!(!s && !c(t) || t.__v_skip || Object.isFrozen(t) || t instanceof at)) {
    if (t.__ob__) {
      const e = t.__ob__.dep.id;
      if (n.has(e)) return;
      n.add(e);
    }
    if (s) for (o = t.length; o--;) gn(t[o], n);else if (Rt(t)) gn(t.value, n);else for (r = Object.keys(t), o = r.length; o--;) gn(t[r[o]], n);
  }
}
let bn,
  $n = 0;
class wn {
  constructor(t, e, n, o, r) {
    !function (t, e = te) {
      e && e.active && e.effects.push(t);
    }(this, te && !te._vm ? te : t ? t._scope : void 0), (this.vm = t) && r && (t._watcher = this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync, this.before = o.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++$n, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new st(), this.newDepIds = new st(), this.expression = "", i(e) ? this.getter = e : (this.getter = function (t) {
      if (z.test(t)) return;
      const e = t.split(".");
      return function (t) {
        for (let n = 0; n < e.length; n++) {
          if (!t) return;
          t = t[e[n]];
        }
        return t;
      };
    }(e), this.getter || (this.getter = T)), this.value = this.lazy ? void 0 : this.get();
  }
  get() {
    let t;
    vt(this);
    const e = this.vm;
    try {
      t = this.getter.call(e, e);
    } catch (t) {
      if (!this.user) throw t;
      We(t, e, `getter for watcher "${this.expression}"`);
    } finally {
      this.deep && yn(t), yt(), this.cleanupDeps();
    }
    return t;
  }
  addDep(t) {
    const e = t.id;
    this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
  }
  cleanupDeps() {
    let t = this.deps.length;
    for (; t--;) {
      const e = this.deps[t];
      this.newDepIds.has(e.id) || e.removeSub(this);
    }
    let e = this.depIds;
    this.depIds = this.newDepIds, this.newDepIds = e, this.newDepIds.clear(), e = this.deps, this.deps = this.newDeps, this.newDeps = e, this.newDeps.length = 0;
  }
  update() {
    this.lazy ? this.dirty = !0 : this.sync ? this.run() : zn(this);
  }
  run() {
    if (this.active) {
      const t = this.get();
      if (t !== this.value || c(t) || this.deep) {
        const e = this.value;
        if (this.value = t, this.user) {
          const n = `callback for watcher "${this.expression}"`;
          Ke(this.cb, this.vm, [t, e], this.vm, n);
        } else this.cb.call(this.vm, t, e);
      }
    }
  }
  evaluate() {
    this.value = this.get(), this.dirty = !1;
  }
  depend() {
    let t = this.deps.length;
    for (; t--;) this.deps[t].depend();
  }
  teardown() {
    if (this.vm && !this.vm._isBeingDestroyed && v(this.vm._scope.effects, this), this.active) {
      let t = this.deps.length;
      for (; t--;) this.deps[t].removeSub(this);
      this.active = !1, this.onStop && this.onStop();
    }
  }
}
function Cn(t, e) {
  bn.$on(t, e);
}
function xn(t, e) {
  bn.$off(t, e);
}
function On(t, e) {
  const n = bn;
  return function o() {
    null !== e.apply(null, arguments) && n.$off(t, o);
  };
}
function kn(t, e, n) {
  bn = t, ie(e, n || {}, Cn, xn, On, t), bn = void 0;
}
let Sn = null;
function jn(t) {
  const e = Sn;
  return Sn = t, () => {
    Sn = e;
  };
}
function An(t) {
  for (; t && (t = t.$parent);) if (t._inactive) return !0;
  return !1;
}
function Tn(t, e) {
  if (e) {
    if (t._directInactive = !1, An(t)) return;
  } else if (t._directInactive) return;
  if (t._inactive || null === t._inactive) {
    t._inactive = !1;
    for (let e = 0; e < t.$children.length; e++) Tn(t.$children[e]);
    Pn(t, "activated");
  }
}
function En(t, e) {
  if (!(e && (t._directInactive = !0, An(t)) || t._inactive)) {
    t._inactive = !0;
    for (let e = 0; e < t.$children.length; e++) En(t.$children[e]);
    Pn(t, "deactivated");
  }
}
function Pn(t, e, n, o = !0) {
  vt();
  const r = it,
    s = ne();
  o && ct(t);
  const i = t.$options[e],
    c = `${e} hook`;
  if (i) for (let e = 0, o = i.length; e < o; e++) Ke(i[e], t, n || null, t, c);
  t._hasHookEvent && t.$emit("hook:" + e), o && (ct(r), s && s.on()), yt();
}
const In = [],
  Dn = [];
let Nn = {},
  Mn = !1,
  Ln = !1,
  Rn = 0;
let Fn = 0,
  Un = Date.now;
if (W && !q) {
  const t = window.performance;
  t && "function" == typeof t.now && Un() > document.createEvent("Event").timeStamp && (Un = () => t.now());
}
const Bn = (t, e) => {
  if (t.post) {
    if (!e.post) return 1;
  } else if (e.post) return -1;
  return t.id - e.id;
};
function Vn() {
  let t, e;
  for (Fn = Un(), Ln = !0, In.sort(Bn), Rn = 0; Rn < In.length; Rn++) t = In[Rn], t.before && t.before(), e = t.id, Nn[e] = null, t.run();
  const n = Dn.slice(),
    o = In.slice();
  Rn = In.length = Dn.length = 0, Nn = {}, Mn = Ln = !1, function (t) {
    for (let e = 0; e < t.length; e++) t[e]._inactive = !0, Tn(t[e], !0);
  }(n), function (t) {
    let e = t.length;
    for (; e--;) {
      const n = t[e],
        o = n.vm;
      o && o._watcher === n && o._isMounted && !o._isDestroyed && Pn(o, "updated");
    }
  }(o), ht(), nt && U.devtools && nt.emit("flush");
}
function zn(t) {
  const e = t.id;
  if (null == Nn[e] && (t !== mt.target || !t.noRecurse)) {
    if (Nn[e] = !0, Ln) {
      let e = In.length - 1;
      for (; e > Rn && In[e].id > t.id;) e--;
      In.splice(e + 1, 0, t);
    } else In.push(t);
    Mn || (Mn = !0, tn(Vn));
  }
}
function Hn(t, e) {
  if (t) {
    const n = Object.create(null),
      o = rt ? Reflect.ownKeys(t) : Object.keys(t);
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      if ("__ob__" === s) continue;
      const c = t[s].from;
      if (c in e._provided) n[s] = e._provided[c];else if ("default" in t[s]) {
        const o = t[s].default;
        n[s] = i(o) ? o.call(e) : o;
      }
    }
    return n;
  }
}
function Wn(n, o, s, i, c) {
  const a = c.options;
  let l;
  g(i, "_uid") ? (l = Object.create(i), l._original = i) : (l = i, i = i._original);
  const u = r(a._compiled),
    f = !u;
  this.data = n, this.props = o, this.children = s, this.parent = i, this.listeners = n.on || t, this.injections = Hn(a.inject, i), this.slots = () => (this.$slots || Te(i, n.scopedSlots, this.$slots = Se(s, i)), this.$slots), Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get() {
      return Te(i, n.scopedSlots, this.slots());
    }
  }), u && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = Te(i, n.scopedSlots, this.$slots)), a._scopeId ? this._c = (t, n, o, r) => {
    const s = ze(l, t, n, o, r, f);
    return s && !e(s) && (s.fnScopeId = a._scopeId, s.fnContext = i), s;
  } : this._c = (t, e, n, o) => ze(l, t, e, n, o, f);
}
function Kn(t, e, n, o, r) {
  const s = ft(t);
  return s.fnContext = n, s.fnOptions = o, e.slot && ((s.data || (s.data = {})).slot = e.slot), s;
}
function qn(t, e) {
  for (const n in e) t[w(n)] = e[n];
}
function Gn(t) {
  return t.name || t.__name || t._componentTag;
}
ke(Wn.prototype);
const Zn = {
    init(t, e) {
      if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
        const e = t;
        Zn.prepatch(e, e);
      } else {
        (t.componentInstance = function (t, e) {
          const n = {
              _isComponent: !0,
              _parentVnode: t,
              parent: e
            },
            r = t.data.inlineTemplate;
          o(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
          return new t.componentOptions.Ctor(n);
        }(t, Sn)).$mount(e ? t.elm : void 0, e);
      }
    },
    prepatch(e, n) {
      const o = n.componentOptions;
      !function (e, n, o, r, s) {
        const i = r.data.scopedSlots,
          c = e.$scopedSlots,
          a = !!(i && !i.$stable || c !== t && !c.$stable || i && e.$scopedSlots.$key !== i.$key || !i && e.$scopedSlots.$key);
        let l = !!(s || e.$options._renderChildren || a);
        const u = e.$vnode;
        e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = s;
        const f = r.data.attrs || t;
        e._attrsProxy && De(e._attrsProxy, f, u.data && u.data.attrs || t, e, "$attrs") && (l = !0), e.$attrs = f, o = o || t;
        const d = e.$options._parentListeners;
        if (e._listenersProxy && De(e._listenersProxy, o, d || t, e, "$listeners"), e.$listeners = e.$options._parentListeners = o, kn(e, o, d), n && e.$options.props) {
          xt(!1);
          const t = e._props,
            o = e.$options._propKeys || [];
          for (let r = 0; r < o.length; r++) {
            const s = o[r],
              i = e.$options.props;
            t[s] = ao(s, i, n, e);
          }
          xt(!0), e.$options.propsData = n;
        }
        l && (e.$slots = Se(s, r.context), e.$forceUpdate());
      }(n.componentInstance = e.componentInstance, o.propsData, o.listeners, n, o.children);
    },
    insert(t) {
      const {
        context: e,
        componentInstance: n
      } = t;
      var o;
      n._isMounted || (n._isMounted = !0, Pn(n, "mounted")), t.data.keepAlive && (e._isMounted ? ((o = n)._inactive = !1, Dn.push(o)) : Tn(n, !0));
    },
    destroy(t) {
      const {
        componentInstance: e
      } = t;
      e._isDestroyed || (t.data.keepAlive ? En(e, !0) : e.$destroy());
    }
  },
  Jn = Object.keys(Zn);
function Xn(s, i, a, l, u) {
  if (n(s)) return;
  const d = a.$options._base;
  if (c(s) && (s = d.extend(s)), "function" != typeof s) return;
  let p;
  if (n(s.cid) && (p = s, s = function (t, e) {
    if (r(t.error) && o(t.errorComp)) return t.errorComp;
    if (o(t.resolved)) return t.resolved;
    const s = Re;
    if (s && o(t.owners) && -1 === t.owners.indexOf(s) && t.owners.push(s), r(t.loading) && o(t.loadingComp)) return t.loadingComp;
    if (s && !o(t.owners)) {
      const r = t.owners = [s];
      let i = !0,
        a = null,
        l = null;
      s.$on("hook:destroyed", () => v(r, s));
      const u = t => {
          for (let t = 0, e = r.length; t < e; t++) r[t].$forceUpdate();
          t && (r.length = 0, null !== a && (clearTimeout(a), a = null), null !== l && (clearTimeout(l), l = null));
        },
        d = N(n => {
          t.resolved = Fe(n, e), i ? r.length = 0 : u(!0);
        }),
        p = N(e => {
          o(t.errorComp) && (t.error = !0, u(!0));
        }),
        h = t(d, p);
      return c(h) && (f(h) ? n(t.resolved) && h.then(d, p) : f(h.component) && (h.component.then(d, p), o(h.error) && (t.errorComp = Fe(h.error, e)), o(h.loading) && (t.loadingComp = Fe(h.loading, e), 0 === h.delay ? t.loading = !0 : a = setTimeout(() => {
        a = null, n(t.resolved) && n(t.error) && (t.loading = !0, u(!1));
      }, h.delay || 200)), o(h.timeout) && (l = setTimeout(() => {
        l = null, n(t.resolved) && p(null);
      }, h.timeout)))), i = !1, t.loading ? t.loadingComp : t.resolved;
    }
  }(p, d), void 0 === s)) return function (t, e, n, o, r) {
    const s = lt();
    return s.asyncFactory = t, s.asyncMeta = {
      data: e,
      context: n,
      children: o,
      tag: r
    }, s;
  }(p, i, a, l, u);
  i = i || {}, Co(s), o(i.model) && function (t, n) {
    const r = t.model && t.model.prop || "value",
      s = t.model && t.model.event || "input";
    (n.attrs || (n.attrs = {}))[r] = n.model.value;
    const i = n.on || (n.on = {}),
      c = i[s],
      a = n.model.callback;
    o(c) ? (e(c) ? -1 === c.indexOf(a) : c !== a) && (i[s] = [a].concat(c)) : i[s] = a;
  }(s.options, i);
  const h = function (t, e, r) {
    const s = e.options.props;
    if (n(s)) return;
    const i = {},
      {
        attrs: c,
        props: a
      } = t;
    if (o(c) || o(a)) for (const t in s) {
      const e = O(t);
      ae(i, a, t, e, !0) || ae(i, c, t, e, !1);
    }
    return i;
  }(i, s);
  if (r(s.options.functional)) return function (n, r, s, i, c) {
    const a = n.options,
      l = {},
      u = a.props;
    if (o(u)) for (const e in u) l[e] = ao(e, u, r || t);else o(s.attrs) && qn(l, s.attrs), o(s.props) && qn(l, s.props);
    const f = new Wn(s, l, c, i, n),
      d = a.render.call(null, f._c, f);
    if (d instanceof at) return Kn(d, s, f.parent, a);
    if (e(d)) {
      const t = le(d) || [],
        e = new Array(t.length);
      for (let n = 0; n < t.length; n++) e[n] = Kn(t[n], s, f.parent, a);
      return e;
    }
  }(s, h, i, a, l);
  const m = i.on;
  if (i.on = i.nativeOn, r(s.options.abstract)) {
    const t = i.slot;
    i = {}, t && (i.slot = t);
  }
  !function (t) {
    const e = t.hook || (t.hook = {});
    for (let t = 0; t < Jn.length; t++) {
      const n = Jn[t],
        o = e[n],
        r = Zn[n];
      o === r || o && o._merged || (e[n] = o ? Qn(r, o) : r);
    }
  }(i);
  const _ = Gn(s.options) || u;
  return new at(`vue-component-${s.cid}${_ ? `-${_}` : ""}`, i, void 0, void 0, void 0, a, {
    Ctor: s,
    propsData: h,
    listeners: m,
    tag: u,
    children: l
  }, p);
}
function Qn(t, e) {
  const n = (n, o) => {
    t(n, o), e(n, o);
  };
  return n._merged = !0, n;
}
let Yn = T;
const to = U.optionMergeStrategies;
function eo(t, e, n = !0) {
  if (!e) return t;
  let o, r, s;
  const i = rt ? Reflect.ownKeys(e) : Object.keys(e);
  for (let c = 0; c < i.length; c++) o = i[c], "__ob__" !== o && (r = t[o], s = e[o], n && g(t, o) ? r !== s && l(r) && l(s) && eo(r, s) : At(t, o, s));
  return t;
}
function no(t, e, n) {
  return n ? function () {
    const o = i(e) ? e.call(n, n) : e,
      r = i(t) ? t.call(n, n) : t;
    return o ? eo(o, r) : r;
  } : e ? t ? function () {
    return eo(i(e) ? e.call(this, this) : e, i(t) ? t.call(this, this) : t);
  } : e : t;
}
function oo(t, n) {
  const o = n ? t ? t.concat(n) : e(n) ? n : [n] : t;
  return o ? function (t) {
    const e = [];
    for (let n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
    return e;
  }(o) : o;
}
function ro(t, e, n, o) {
  const r = Object.create(t || null);
  return e ? j(r, e) : r;
}
to.data = function (t, e, n) {
  return n ? no(t, e, n) : e && "function" != typeof e ? t : no(t, e);
}, F.forEach(t => {
  to[t] = oo;
}), R.forEach(function (t) {
  to[t + "s"] = ro;
}), to.watch = function (t, n, o, r) {
  if (t === Q && (t = void 0), n === Q && (n = void 0), !n) return Object.create(t || null);
  if (!t) return n;
  const s = {};
  j(s, t);
  for (const t in n) {
    let o = s[t];
    const r = n[t];
    o && !e(o) && (o = [o]), s[t] = o ? o.concat(r) : e(r) ? r : [r];
  }
  return s;
}, to.props = to.methods = to.inject = to.computed = function (t, e, n, o) {
  if (!t) return e;
  const r = Object.create(null);
  return j(r, t), e && j(r, e), r;
}, to.provide = function (t, e) {
  return t ? function () {
    const n = Object.create(null);
    return eo(n, i(t) ? t.call(this) : t), e && eo(n, i(e) ? e.call(this) : e, !1), n;
  } : e;
};
const so = function (t, e) {
  return void 0 === e ? t : e;
};
function io(t, n, o) {
  if (i(n) && (n = n.options), function (t, n) {
    const o = t.props;
    if (!o) return;
    const r = {};
    let s, i, c;
    if (e(o)) for (s = o.length; s--;) i = o[s], "string" == typeof i && (c = w(i), r[c] = {
      type: null
    });else if (l(o)) for (const t in o) i = o[t], c = w(t), r[c] = l(i) ? i : {
      type: i
    };
    t.props = r;
  }(n), function (t, n) {
    const o = t.inject;
    if (!o) return;
    const r = t.inject = {};
    if (e(o)) for (let t = 0; t < o.length; t++) r[o[t]] = {
      from: o[t]
    };else if (l(o)) for (const t in o) {
      const e = o[t];
      r[t] = l(e) ? j({
        from: t
      }, e) : {
        from: e
      };
    }
  }(n), function (t) {
    const e = t.directives;
    if (e) for (const t in e) {
      const n = e[t];
      i(n) && (e[t] = {
        bind: n,
        update: n
      });
    }
  }(n), !n._base && (n.extends && (t = io(t, n.extends, o)), n.mixins)) for (let e = 0, r = n.mixins.length; e < r; e++) t = io(t, n.mixins[e], o);
  const r = {};
  let s;
  for (s in t) c(s);
  for (s in n) g(t, s) || c(s);
  function c(e) {
    const s = to[e] || so;
    r[e] = s(t[e], n[e], o, e);
  }
  return r;
}
function co(t, e, n, o) {
  if ("string" != typeof n) return;
  const r = t[e];
  if (g(r, n)) return r[n];
  const s = w(n);
  if (g(r, s)) return r[s];
  const i = C(s);
  if (g(r, i)) return r[i];
  return r[n] || r[s] || r[i];
}
function ao(t, e, n, o) {
  const r = e[t],
    s = !g(n, t);
  let c = n[t];
  const a = po(Boolean, r.type);
  if (a > -1) if (s && !g(r, "default")) c = !1;else if ("" === c || c === O(t)) {
    const t = po(String, r.type);
    (t < 0 || a < t) && (c = !0);
  }
  if (void 0 === c) {
    c = function (t, e, n) {
      if (!g(e, "default")) return;
      const o = e.default;
      if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
      return i(o) && "Function" !== uo(e.type) ? o.call(t) : o;
    }(o, r, t);
    const e = Ct;
    xt(!0), St(c), xt(e);
  }
  return c;
}
const lo = /^\s*function (\w+)/;
function uo(t) {
  const e = t && t.toString().match(lo);
  return e ? e[1] : "";
}
function fo(t, e) {
  return uo(t) === uo(e);
}
function po(t, n) {
  if (!e(n)) return fo(n, t) ? 0 : -1;
  for (let e = 0, o = n.length; e < o; e++) if (fo(n[e], t)) return e;
  return -1;
}
const ho = {
  enumerable: !0,
  configurable: !0,
  get: T,
  set: T
};
function mo(t, e, n) {
  ho.get = function () {
    return this[e][n];
  }, ho.set = function (t) {
    this[e][n] = t;
  }, Object.defineProperty(t, n, ho);
}
function _o(t) {
  const n = t.$options;
  if (n.props && function (t, e) {
    const n = t.$options.propsData || {},
      o = t._props = Pt({}),
      r = t.$options._propKeys = [],
      s = !t.$parent;
    s || xt(!1);
    for (const s in e) {
      r.push(s);
      jt(o, s, ao(s, e, n, t), void 0, !0), s in t || mo(t, "_props", s);
    }
    xt(!0);
  }(t, n.props), function (t) {
    const e = t.$options,
      n = e.setup;
    if (n) {
      const o = t._setupContext = Ie(t);
      ct(t), vt();
      const r = Ke(n, null, [t._props || Pt({}), o], t, "setup");
      if (yt(), ct(), i(r)) e.render = r;else if (c(r)) if (t._setupState = r, r.__sfc) {
        const e = t._setupProxy = {};
        for (const t in r) "__sfc" !== t && Ut(e, r, t);
      } else for (const e in r) B(e) || Ut(t, r, e);
    }
  }(t), n.methods && function (t, e) {
    t.$options.props;
    for (const n in e) t[n] = "function" != typeof e[n] ? T : k(e[n], t);
  }(t, n.methods), n.data) !function (t) {
    let e = t.$options.data;
    e = t._data = i(e) ? function (t, e) {
      vt();
      try {
        return t.call(e, e);
      } catch (t) {
        return We(t, e, "data()"), {};
      } finally {
        yt();
      }
    }(e, t) : e || {}, l(e) || (e = {});
    const n = Object.keys(e),
      o = t.$options.props;
    t.$options.methods;
    let r = n.length;
    for (; r--;) {
      const e = n[r];
      o && g(o, e) || B(e) || mo(t, "_data", e);
    }
    const s = St(e);
    s && s.vmCount++;
  }(t);else {
    const e = St(t._data = {});
    e && e.vmCount++;
  }
  n.computed && function (t, e) {
    const n = t._computedWatchers = Object.create(null),
      o = et();
    for (const r in e) {
      const s = e[r],
        c = i(s) ? s : s.get;
      o || (n[r] = new wn(t, c || T, T, vo)), r in t || yo(t, r, s);
    }
  }(t, n.computed), n.watch && n.watch !== Q && function (t, n) {
    for (const o in n) {
      const r = n[o];
      if (e(r)) for (let e = 0; e < r.length; e++) $o(t, o, r[e]);else $o(t, o, r);
    }
  }(t, n.watch);
}
const vo = {
  lazy: !0
};
function yo(t, e, n) {
  const o = !et();
  i(n) ? (ho.get = o ? go(e) : bo(n), ho.set = T) : (ho.get = n.get ? o && !1 !== n.cache ? go(e) : bo(n.get) : T, ho.set = n.set || T), Object.defineProperty(t, e, ho);
}
function go(t) {
  return function () {
    const e = this._computedWatchers && this._computedWatchers[t];
    if (e) return e.dirty && e.evaluate(), mt.target && e.depend(), e.value;
  };
}
function bo(t) {
  return function () {
    return t.call(this, this);
  };
}
function $o(t, e, n, o) {
  return l(n) && (o = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, o);
}
let wo = 0;
function Co(t) {
  let e = t.options;
  if (t.super) {
    const n = Co(t.super);
    if (n !== t.superOptions) {
      t.superOptions = n;
      const o = function (t) {
        let e;
        const n = t.options,
          o = t.sealedOptions;
        for (const t in n) n[t] !== o[t] && (e || (e = {}), e[t] = n[t]);
        return e;
      }(t);
      o && j(t.extendOptions, o), e = t.options = io(n, t.extendOptions), e.name && (e.components[e.name] = t);
    }
  }
  return e;
}
function xo(t) {
  this._init(t);
}
function Oo(t) {
  t.cid = 0;
  let e = 1;
  t.extend = function (t) {
    t = t || {};
    const n = this,
      o = n.cid,
      r = t._Ctor || (t._Ctor = {});
    if (r[o]) return r[o];
    const s = Gn(t) || Gn(n.options),
      i = function (t) {
        this._init(t);
      };
    return (i.prototype = Object.create(n.prototype)).constructor = i, i.cid = e++, i.options = io(n.options, t), i.super = n, i.options.props && function (t) {
      const e = t.options.props;
      for (const n in e) mo(t.prototype, "_props", n);
    }(i), i.options.computed && function (t) {
      const e = t.options.computed;
      for (const n in e) yo(t.prototype, n, e[n]);
    }(i), i.extend = n.extend, i.mixin = n.mixin, i.use = n.use, R.forEach(function (t) {
      i[t] = n[t];
    }), s && (i.options.components[s] = i), i.superOptions = n.options, i.extendOptions = t, i.sealedOptions = j({}, i.options), r[o] = i, i;
  };
}
function ko(t) {
  return t && (Gn(t.Ctor.options) || t.tag);
}
function So(t, n) {
  return e(t) ? t.indexOf(n) > -1 : "string" == typeof t ? t.split(",").indexOf(n) > -1 : (o = t, "[object RegExp]" === a.call(o) && t.test(n));
  var o;
}
function jo(t, e) {
  const {
    cache: n,
    keys: o,
    _vnode: r,
    $vnode: s
  } = t;
  for (const t in n) {
    const s = n[t];
    if (s) {
      const i = s.name;
      i && !e(i) && Ao(n, t, o, r);
    }
  }
  s.componentOptions.children = void 0;
}
function Ao(t, e, n, o) {
  const r = t[e];
  !r || o && r.tag === o.tag || r.componentInstance.$destroy(), t[e] = null, v(n, e);
}
!function (e) {
  e.prototype._init = function (e) {
    const n = this;
    n._uid = wo++, n._isVue = !0, n.__v_skip = !0, n._scope = new ee(!0), n._scope.parent = void 0, n._scope._vm = !0, e && e._isComponent ? function (t, e) {
      const n = t.$options = Object.create(t.constructor.options),
        o = e._parentVnode;
      n.parent = e.parent, n._parentVnode = o;
      const r = o.componentOptions;
      n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
    }(n, e) : n.$options = io(Co(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, function (t) {
      const e = t.$options;
      let n = e.parent;
      if (n && !e.abstract) {
        for (; n.$options.abstract && n.$parent;) n = n.$parent;
        n.$children.push(t);
      }
      t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._provided = n ? n._provided : Object.create(null), t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
    }(n), function (t) {
      t._events = Object.create(null), t._hasHookEvent = !1;
      const e = t.$options._parentListeners;
      e && kn(t, e);
    }(n), function (e) {
      e._vnode = null, e._staticTrees = null;
      const n = e.$options,
        o = e.$vnode = n._parentVnode,
        r = o && o.context;
      e.$slots = Se(n._renderChildren, r), e.$scopedSlots = o ? Te(e.$parent, o.data.scopedSlots, e.$slots) : t, e._c = (t, n, o, r) => ze(e, t, n, o, r, !1), e.$createElement = (t, n, o, r) => ze(e, t, n, o, r, !0);
      const s = o && o.data;
      jt(e, "$attrs", s && s.attrs || t, null, !0), jt(e, "$listeners", n._parentListeners || t, null, !0);
    }(n), Pn(n, "beforeCreate", void 0, !1), function (t) {
      const e = Hn(t.$options.inject, t);
      e && (xt(!1), Object.keys(e).forEach(n => {
        jt(t, n, e[n]);
      }), xt(!0));
    }(n), _o(n), function (t) {
      const e = t.$options.provide;
      if (e) {
        const n = i(e) ? e.call(t) : e;
        if (!c(n)) return;
        const o = oe(t),
          r = rt ? Reflect.ownKeys(n) : Object.keys(n);
        for (let t = 0; t < r.length; t++) {
          const e = r[t];
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(n, e));
        }
      }
    }(n), Pn(n, "created"), n.$options.el && n.$mount(n.$options.el);
  };
}(xo), function (t) {
  const e = {
      get: function () {
        return this._data;
      }
    },
    n = {
      get: function () {
        return this._props;
      }
    };
  Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = At, t.prototype.$delete = Tt, t.prototype.$watch = function (t, e, n) {
    const o = this;
    if (l(e)) return $o(o, t, e, n);
    (n = n || {}).user = !0;
    const r = new wn(o, t, e, n);
    if (n.immediate) {
      const t = `callback for immediate watcher "${r.expression}"`;
      vt(), Ke(e, o, [r.value], o, t), yt();
    }
    return function () {
      r.teardown();
    };
  };
}(xo), function (t) {
  const n = /^hook:/;
  t.prototype.$on = function (t, o) {
    const r = this;
    if (e(t)) for (let e = 0, n = t.length; e < n; e++) r.$on(t[e], o);else (r._events[t] || (r._events[t] = [])).push(o), n.test(t) && (r._hasHookEvent = !0);
    return r;
  }, t.prototype.$once = function (t, e) {
    const n = this;
    function o() {
      n.$off(t, o), e.apply(n, arguments);
    }
    return o.fn = e, n.$on(t, o), n;
  }, t.prototype.$off = function (t, n) {
    const o = this;
    if (!arguments.length) return o._events = Object.create(null), o;
    if (e(t)) {
      for (let e = 0, r = t.length; e < r; e++) o.$off(t[e], n);
      return o;
    }
    const r = o._events[t];
    if (!r) return o;
    if (!n) return o._events[t] = null, o;
    let s,
      i = r.length;
    for (; i--;) if (s = r[i], s === n || s.fn === n) {
      r.splice(i, 1);
      break;
    }
    return o;
  }, t.prototype.$emit = function (t) {
    const e = this;
    let n = e._events[t];
    if (n) {
      n = n.length > 1 ? S(n) : n;
      const o = S(arguments, 1),
        r = `event handler for "${t}"`;
      for (let t = 0, s = n.length; t < s; t++) Ke(n[t], e, o, e, r);
    }
    return e;
  };
}(xo), function (t) {
  t.prototype._update = function (t, e) {
    const n = this,
      o = n.$el,
      r = n._vnode,
      s = jn(n);
    n._vnode = t, n.$el = r ? n.__patch__(r, t) : n.__patch__(n.$el, t, e, !1), s(), o && (o.__vue__ = null), n.$el && (n.$el.__vue__ = n);
    let i = n;
    for (; i && i.$vnode && i.$parent && i.$vnode === i.$parent._vnode;) i.$parent.$el = i.$el, i = i.$parent;
  }, t.prototype.$forceUpdate = function () {
    const t = this;
    t._watcher && t._watcher.update();
  }, t.prototype.$destroy = function () {
    const t = this;
    if (t._isBeingDestroyed) return;
    Pn(t, "beforeDestroy"), t._isBeingDestroyed = !0;
    const e = t.$parent;
    !e || e._isBeingDestroyed || t.$options.abstract || v(e.$children, t), t._scope.stop(), t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Pn(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
  };
}(xo), function (t) {
  ke(t.prototype), t.prototype.$nextTick = function (t) {
    return tn(t, this);
  }, t.prototype._render = function () {
    const t = this,
      {
        render: n,
        _parentVnode: o
      } = t.$options;
    o && t._isMounted && (t.$scopedSlots = Te(t.$parent, o.data.scopedSlots, t.$slots, t.$scopedSlots), t._slotsProxy && Me(t._slotsProxy, t.$scopedSlots)), t.$vnode = o;
    const r = it,
      s = Re;
    let i;
    try {
      ct(t), Re = t, i = n.call(t._renderProxy, t.$createElement);
    } catch (e) {
      We(e, t, "render"), i = t._vnode;
    } finally {
      Re = s, ct(r);
    }
    return e(i) && 1 === i.length && (i = i[0]), i instanceof at || (i = lt()), i.parent = o, i;
  };
}(xo);
const To = [String, RegExp, Array];
var Eo = {
  KeepAlive: {
    name: "keep-alive",
    abstract: !0,
    props: {
      include: To,
      exclude: To,
      max: [String, Number]
    },
    methods: {
      cacheVNode() {
        const {
          cache: t,
          keys: e,
          vnodeToCache: n,
          keyToCache: o
        } = this;
        if (n) {
          const {
            tag: r,
            componentInstance: s,
            componentOptions: i
          } = n;
          t[o] = {
            name: ko(i),
            tag: r,
            componentInstance: s
          }, e.push(o), this.max && e.length > parseInt(this.max) && Ao(t, e[0], e, this._vnode), this.vnodeToCache = null;
        }
      }
    },
    created() {
      this.cache = Object.create(null), this.keys = [];
    },
    destroyed() {
      for (const t in this.cache) Ao(this.cache, t, this.keys);
    },
    mounted() {
      this.cacheVNode(), this.$watch("include", t => {
        jo(this, e => So(t, e));
      }), this.$watch("exclude", t => {
        jo(this, e => !So(t, e));
      });
    },
    updated() {
      this.cacheVNode();
    },
    render() {
      const t = this.$slots.default,
        e = Ue(t),
        n = e && e.componentOptions;
      if (n) {
        const t = ko(n),
          {
            include: o,
            exclude: r
          } = this;
        if (o && (!t || !So(o, t)) || r && t && So(r, t)) return e;
        const {
            cache: s,
            keys: i
          } = this,
          c = null == e.key ? n.Ctor.cid + (n.tag ? `::${n.tag}` : "") : e.key;
        s[c] ? (e.componentInstance = s[c].componentInstance, v(i, c), i.push(c)) : (this.vnodeToCache = e, this.keyToCache = c), e.data.keepAlive = !0;
      }
      return e || t && t[0];
    }
  }
};
!function (t) {
  const e = {
    get: () => U
  };
  Object.defineProperty(t, "config", e), t.util = {
    warn: Yn,
    extend: j,
    mergeOptions: io,
    defineReactive: jt
  }, t.set = At, t.delete = Tt, t.nextTick = tn, t.observable = t => (St(t), t), t.options = Object.create(null), R.forEach(e => {
    t.options[e + "s"] = Object.create(null);
  }), t.options._base = t, j(t.options.components, Eo), function (t) {
    t.use = function (t) {
      const e = this._installedPlugins || (this._installedPlugins = []);
      if (e.indexOf(t) > -1) return this;
      const n = S(arguments, 1);
      return n.unshift(this), i(t.install) ? t.install.apply(t, n) : i(t) && t.apply(null, n), e.push(t), this;
    };
  }(t), function (t) {
    t.mixin = function (t) {
      return this.options = io(this.options, t), this;
    };
  }(t), Oo(t), function (t) {
    R.forEach(e => {
      t[e] = function (t, n) {
        return n ? ("component" === e && l(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && i(n) && (n = {
          bind: n,
          update: n
        }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
      };
    });
  }(t);
}(xo), Object.defineProperty(xo.prototype, "$isServer", {
  get: et
}), Object.defineProperty(xo.prototype, "$ssrContext", {
  get() {
    return this.$vnode && this.$vnode.ssrContext;
  }
}), Object.defineProperty(xo, "FunctionalRenderContext", {
  value: Wn
}), xo.version = mn;
const Po = m("style,class"),
  Io = m("input,textarea,option,select,progress"),
  Do = m("contenteditable,draggable,spellcheck"),
  No = m("events,caret,typing,plaintext-only"),
  Mo = (t, e) => Bo(e) || "false" === e ? "false" : "contenteditable" === t && No(e) ? e : "true",
  Lo = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),
  Ro = "http://www.w3.org/1999/xlink",
  Fo = t => ":" === t.charAt(5) && "xlink" === t.slice(0, 5),
  Uo = t => Fo(t) ? t.slice(6, t.length) : "",
  Bo = t => null == t || !1 === t;
function Vo(t) {
  let e = t.data,
    n = t,
    r = t;
  for (; o(r.componentInstance);) r = r.componentInstance._vnode, r && r.data && (e = zo(r.data, e));
  for (; o(n = n.parent);) n && n.data && (e = zo(e, n.data));
  return function (t, e) {
    if (o(t) || o(e)) return Ho(t, Wo(e));
    return "";
  }(e.staticClass, e.class);
}
function zo(t, e) {
  return {
    staticClass: Ho(t.staticClass, e.staticClass),
    class: o(t.class) ? [t.class, e.class] : e.class
  };
}
function Ho(t, e) {
  return t ? e ? t + " " + e : t : e || "";
}
function Wo(t) {
  return Array.isArray(t) ? function (t) {
    let e,
      n = "";
    for (let r = 0, s = t.length; r < s; r++) o(e = Wo(t[r])) && "" !== e && (n && (n += " "), n += e);
    return n;
  }(t) : c(t) ? function (t) {
    let e = "";
    for (const n in t) t[n] && (e && (e += " "), e += n);
    return e;
  }(t) : "string" == typeof t ? t : "";
}
const Ko = {
    svg: "http://www.w3.org/2000/svg",
    math: "http://www.w3.org/1998/Math/MathML"
  },
  qo = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
  Go = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
  Zo = t => qo(t) || Go(t);
const Jo = Object.create(null);
const Xo = m("text,number,password,search,email,tel,url");
var Qo = Object.freeze({
    __proto__: null,
    createElement: function (t, e) {
      const n = document.createElement(t);
      return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
    },
    createElementNS: function (t, e) {
      return document.createElementNS(Ko[t], e);
    },
    createTextNode: function (t) {
      return document.createTextNode(t);
    },
    createComment: function (t) {
      return document.createComment(t);
    },
    insertBefore: function (t, e, n) {
      t.insertBefore(e, n);
    },
    removeChild: function (t, e) {
      t.removeChild(e);
    },
    appendChild: function (t, e) {
      t.appendChild(e);
    },
    parentNode: function (t) {
      return t.parentNode;
    },
    nextSibling: function (t) {
      return t.nextSibling;
    },
    tagName: function (t) {
      return t.tagName;
    },
    setTextContent: function (t, e) {
      t.textContent = e;
    },
    setStyleScope: function (t, e) {
      t.setAttribute(e, "");
    }
  }),
  Yo = {
    create(t, e) {
      tr(e);
    },
    update(t, e) {
      t.data.ref !== e.data.ref && (tr(t, !0), tr(e));
    },
    destroy(t) {
      tr(t, !0);
    }
  };
function tr(t, n) {
  const r = t.data.ref;
  if (!o(r)) return;
  const s = t.context,
    c = t.componentInstance || t.elm,
    a = n ? null : c,
    l = n ? void 0 : c;
  if (i(r)) return void Ke(r, s, [a], s, "template ref function");
  const u = t.data.refInFor,
    f = "string" == typeof r || "number" == typeof r,
    d = Rt(r),
    p = s.$refs;
  if (f || d) if (u) {
    const t = f ? p[r] : r.value;
    n ? e(t) && v(t, c) : e(t) ? t.includes(c) || t.push(c) : f ? (p[r] = [c], er(s, r, p[r])) : r.value = [c];
  } else if (f) {
    if (n && p[r] !== c) return;
    p[r] = l, er(s, r, a);
  } else if (d) {
    if (n && r.value !== c) return;
    r.value = a;
  }
}
function er({
  _setupState: t
}, e, n) {
  t && g(t, e) && (Rt(t[e]) ? t[e].value = n : t[e] = n);
}
const nr = new at("", {}, []),
  or = ["create", "activate", "update", "remove", "destroy"];
function rr(t, e) {
  return t.key === e.key && t.asyncFactory === e.asyncFactory && (t.tag === e.tag && t.isComment === e.isComment && o(t.data) === o(e.data) && function (t, e) {
    if ("input" !== t.tag) return !0;
    let n;
    const r = o(n = t.data) && o(n = n.attrs) && n.type,
      s = o(n = e.data) && o(n = n.attrs) && n.type;
    return r === s || Xo(r) && Xo(s);
  }(t, e) || r(t.isAsyncPlaceholder) && n(e.asyncFactory.error));
}
function sr(t, e, n) {
  let r, s;
  const i = {};
  for (r = e; r <= n; ++r) s = t[r].key, o(s) && (i[s] = r);
  return i;
}
var ir = {
  create: cr,
  update: cr,
  destroy: function (t) {
    cr(t, nr);
  }
};
function cr(t, e) {
  (t.data.directives || e.data.directives) && function (t, e) {
    const n = t === nr,
      o = e === nr,
      r = lr(t.data.directives, t.context),
      s = lr(e.data.directives, e.context),
      i = [],
      c = [];
    let a, l, u;
    for (a in s) l = r[a], u = s[a], l ? (u.oldValue = l.value, u.oldArg = l.arg, fr(u, "update", e, t), u.def && u.def.componentUpdated && c.push(u)) : (fr(u, "bind", e, t), u.def && u.def.inserted && i.push(u));
    if (i.length) {
      const o = () => {
        for (let n = 0; n < i.length; n++) fr(i[n], "inserted", e, t);
      };
      n ? ce(e, "insert", o) : o();
    }
    c.length && ce(e, "postpatch", () => {
      for (let n = 0; n < c.length; n++) fr(c[n], "componentUpdated", e, t);
    });
    if (!n) for (a in r) s[a] || fr(r[a], "unbind", t, t, o);
  }(t, e);
}
const ar = Object.create(null);
function lr(t, e) {
  const n = Object.create(null);
  if (!t) return n;
  let o, r;
  for (o = 0; o < t.length; o++) {
    if (r = t[o], r.modifiers || (r.modifiers = ar), n[ur(r)] = r, e._setupState && e._setupState.__sfc) {
      const t = r.def || co(e, "_setupState", "v-" + r.name);
      r.def = "function" == typeof t ? {
        bind: t,
        update: t
      } : t;
    }
    r.def = r.def || co(e.$options, "directives", r.name);
  }
  return n;
}
function ur(t) {
  return t.rawName || `${t.name}.${Object.keys(t.modifiers || {}).join(".")}`;
}
function fr(t, e, n, o, r) {
  const s = t.def && t.def[e];
  if (s) try {
    s(n.elm, t, n, o, r);
  } catch (o) {
    We(o, n.context, `directive ${t.name} ${e} hook`);
  }
}
var dr = [Yo, ir];
function pr(t, e) {
  const s = e.componentOptions;
  if (o(s) && !1 === s.Ctor.options.inheritAttrs) return;
  if (n(t.data.attrs) && n(e.data.attrs)) return;
  let i, c, a;
  const l = e.elm,
    u = t.data.attrs || {};
  let f = e.data.attrs || {};
  for (i in (o(f.__ob__) || r(f._v_attr_proxy)) && (f = e.data.attrs = j({}, f)), f) c = f[i], a = u[i], a !== c && hr(l, i, c, e.data.pre);
  for (i in (q || Z) && f.value !== u.value && hr(l, "value", f.value), u) n(f[i]) && (Fo(i) ? l.removeAttributeNS(Ro, Uo(i)) : Do(i) || l.removeAttribute(i));
}
function hr(t, e, n, o) {
  o || t.tagName.indexOf("-") > -1 ? mr(t, e, n) : Lo(e) ? Bo(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : Do(e) ? t.setAttribute(e, Mo(e, n)) : Fo(e) ? Bo(n) ? t.removeAttributeNS(Ro, Uo(e)) : t.setAttributeNS(Ro, e, n) : mr(t, e, n);
}
function mr(t, e, n) {
  if (Bo(n)) t.removeAttribute(e);else {
    if (q && !G && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
      const e = n => {
        n.stopImmediatePropagation(), t.removeEventListener("input", e);
      };
      t.addEventListener("input", e), t.__ieph = !0;
    }
    t.setAttribute(e, n);
  }
}
var _r = {
  create: pr,
  update: pr
};
function vr(t, e) {
  const r = e.elm,
    s = e.data,
    i = t.data;
  if (n(s.staticClass) && n(s.class) && (n(i) || n(i.staticClass) && n(i.class))) return;
  let c = Vo(e);
  const a = r._transitionClasses;
  o(a) && (c = Ho(c, Wo(a))), c !== r._prevClass && (r.setAttribute("class", c), r._prevClass = c);
}
var yr = {
  create: vr,
  update: vr
};
const gr = "__r",
  br = "__c";
let $r;
function wr(t, e, n) {
  const o = $r;
  return function r() {
    null !== e.apply(null, arguments) && Or(t, r, n, o);
  };
}
const Cr = Ze && !(X && Number(X[1]) <= 53);
function xr(t, e, n, o) {
  if (Cr) {
    const t = Fn,
      n = e;
    e = n._wrapper = function (e) {
      if (e.target === e.currentTarget || e.timeStamp >= t || e.timeStamp <= 0 || e.target.ownerDocument !== document) return n.apply(this, arguments);
    };
  }
  $r.addEventListener(t, e, tt ? {
    capture: n,
    passive: o
  } : n);
}
function Or(t, e, n, o) {
  (o || $r).removeEventListener(t, e._wrapper || e, n);
}
function kr(t, e) {
  if (n(t.data.on) && n(e.data.on)) return;
  const r = e.data.on || {},
    s = t.data.on || {};
  $r = e.elm || t.elm, function (t) {
    if (o(t[gr])) {
      const e = q ? "change" : "input";
      t[e] = [].concat(t[gr], t[e] || []), delete t[gr];
    }
    o(t[br]) && (t.change = [].concat(t[br], t.change || []), delete t[br]);
  }(r), ie(r, s, xr, Or, wr, e.context), $r = void 0;
}
var Sr = {
  create: kr,
  update: kr,
  destroy: t => kr(t, nr)
};
let jr;
function Ar(t, e) {
  if (n(t.data.domProps) && n(e.data.domProps)) return;
  let s, i;
  const c = e.elm,
    a = t.data.domProps || {};
  let l = e.data.domProps || {};
  for (s in (o(l.__ob__) || r(l._v_attr_proxy)) && (l = e.data.domProps = j({}, l)), a) s in l || (c[s] = "");
  for (s in l) {
    if (i = l[s], "textContent" === s || "innerHTML" === s) {
      if (e.children && (e.children.length = 0), i === a[s]) continue;
      1 === c.childNodes.length && c.removeChild(c.childNodes[0]);
    }
    if ("value" === s && "PROGRESS" !== c.tagName) {
      c._value = i;
      const t = n(i) ? "" : String(i);
      Tr(c, t) && (c.value = t);
    } else if ("innerHTML" === s && Go(c.tagName) && n(c.innerHTML)) {
      jr = jr || document.createElement("div"), jr.innerHTML = `<svg>${i}</svg>`;
      const t = jr.firstChild;
      for (; c.firstChild;) c.removeChild(c.firstChild);
      for (; t.firstChild;) c.appendChild(t.firstChild);
    } else if (i !== a[s]) try {
      c[s] = i;
    } catch (t) {}
  }
}
function Tr(t, e) {
  return !t.composing && ("OPTION" === t.tagName || function (t, e) {
    let n = !0;
    try {
      n = document.activeElement !== t;
    } catch (t) {}
    return n && t.value !== e;
  }(t, e) || function (t, e) {
    const n = t.value,
      r = t._vModifiers;
    if (o(r)) {
      if (r.number) return h(n) !== h(e);
      if (r.trim) return n.trim() !== e.trim();
    }
    return n !== e;
  }(t, e));
}
var Er = {
  create: Ar,
  update: Ar
};
const Pr = b(function (t) {
  const e = {},
    n = /:(.+)/;
  return t.split(/;(?![^(]*\))/g).forEach(function (t) {
    if (t) {
      const o = t.split(n);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
});
function Ir(t) {
  const e = Dr(t.style);
  return t.staticStyle ? j(t.staticStyle, e) : e;
}
function Dr(t) {
  return Array.isArray(t) ? A(t) : "string" == typeof t ? Pr(t) : t;
}
const Nr = /^--/,
  Mr = /\s*!important$/,
  Lr = (t, e, n) => {
    if (Nr.test(e)) t.style.setProperty(e, n);else if (Mr.test(n)) t.style.setProperty(O(e), n.replace(Mr, ""), "important");else {
      const o = Ur(e);
      if (Array.isArray(n)) for (let e = 0, r = n.length; e < r; e++) t.style[o] = n[e];else t.style[o] = n;
    }
  },
  Rr = ["Webkit", "Moz", "ms"];
let Fr;
const Ur = b(function (t) {
  if (Fr = Fr || document.createElement("div").style, "filter" !== (t = w(t)) && t in Fr) return t;
  const e = t.charAt(0).toUpperCase() + t.slice(1);
  for (let t = 0; t < Rr.length; t++) {
    const n = Rr[t] + e;
    if (n in Fr) return n;
  }
});
function Br(t, e) {
  const r = e.data,
    s = t.data;
  if (n(r.staticStyle) && n(r.style) && n(s.staticStyle) && n(s.style)) return;
  let i, c;
  const a = e.elm,
    l = s.staticStyle,
    u = s.normalizedStyle || s.style || {},
    f = l || u,
    d = Dr(e.data.style) || {};
  e.data.normalizedStyle = o(d.__ob__) ? j({}, d) : d;
  const p = function (t, e) {
    const n = {};
    let o;
    if (e) {
      let e = t;
      for (; e.componentInstance;) e = e.componentInstance._vnode, e && e.data && (o = Ir(e.data)) && j(n, o);
    }
    (o = Ir(t.data)) && j(n, o);
    let r = t;
    for (; r = r.parent;) r.data && (o = Ir(r.data)) && j(n, o);
    return n;
  }(e, !0);
  for (c in f) n(p[c]) && Lr(a, c, "");
  for (c in p) i = p[c], Lr(a, c, null == i ? "" : i);
}
var Vr = {
  create: Br,
  update: Br
};
const zr = /\s+/;
function Hr(t, e) {
  if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(zr).forEach(e => t.classList.add(e)) : t.classList.add(e);else {
    const n = ` ${t.getAttribute("class") || ""} `;
    n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
  }
}
function Wr(t, e) {
  if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(zr).forEach(e => t.classList.remove(e)) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");else {
    let n = ` ${t.getAttribute("class") || ""} `;
    const o = " " + e + " ";
    for (; n.indexOf(o) >= 0;) n = n.replace(o, " ");
    n = n.trim(), n ? t.setAttribute("class", n) : t.removeAttribute("class");
  }
}
function Kr(t) {
  if (t) {
    if ("object" == typeof t) {
      const e = {};
      return !1 !== t.css && j(e, qr(t.name || "v")), j(e, t), e;
    }
    return "string" == typeof t ? qr(t) : void 0;
  }
}
const qr = b(t => ({
    enterClass: `${t}-enter`,
    enterToClass: `${t}-enter-to`,
    enterActiveClass: `${t}-enter-active`,
    leaveClass: `${t}-leave`,
    leaveToClass: `${t}-leave-to`,
    leaveActiveClass: `${t}-leave-active`
  })),
  Gr = W && !G,
  Zr = "transition",
  Jr = "animation";
let Xr = "transition",
  Qr = "transitionend",
  Yr = "animation",
  ts = "animationend";
Gr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Xr = "WebkitTransition", Qr = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Yr = "WebkitAnimation", ts = "webkitAnimationEnd"));
const es = W ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : t => t();
function ns(t) {
  es(() => {
    es(t);
  });
}
function os(t, e) {
  const n = t._transitionClasses || (t._transitionClasses = []);
  n.indexOf(e) < 0 && (n.push(e), Hr(t, e));
}
function rs(t, e) {
  t._transitionClasses && v(t._transitionClasses, e), Wr(t, e);
}
function ss(t, e, n) {
  const {
    type: o,
    timeout: r,
    propCount: s
  } = cs(t, e);
  if (!o) return n();
  const i = o === Zr ? Qr : ts;
  let c = 0;
  const a = () => {
      t.removeEventListener(i, l), n();
    },
    l = e => {
      e.target === t && ++c >= s && a();
    };
  setTimeout(() => {
    c < s && a();
  }, r + 1), t.addEventListener(i, l);
}
const is = /\b(transform|all)(,|$)/;
function cs(t, e) {
  const n = window.getComputedStyle(t),
    o = (n[Xr + "Delay"] || "").split(", "),
    r = (n[Xr + "Duration"] || "").split(", "),
    s = as(o, r),
    i = (n[Yr + "Delay"] || "").split(", "),
    c = (n[Yr + "Duration"] || "").split(", "),
    a = as(i, c);
  let l,
    u = 0,
    f = 0;
  e === Zr ? s > 0 && (l = Zr, u = s, f = r.length) : e === Jr ? a > 0 && (l = Jr, u = a, f = c.length) : (u = Math.max(s, a), l = u > 0 ? s > a ? Zr : Jr : null, f = l ? l === Zr ? r.length : c.length : 0);
  return {
    type: l,
    timeout: u,
    propCount: f,
    hasTransform: l === Zr && is.test(n[Xr + "Property"])
  };
}
function as(t, e) {
  for (; t.length < e.length;) t = t.concat(t);
  return Math.max.apply(null, e.map((e, n) => ls(e) + ls(t[n])));
}
function ls(t) {
  return 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function us(t, e) {
  const r = t.elm;
  o(r._leaveCb) && (r._leaveCb.cancelled = !0, r._leaveCb());
  const s = Kr(t.data.transition);
  if (n(s)) return;
  if (o(r._enterCb) || 1 !== r.nodeType) return;
  const {
    css: a,
    type: l,
    enterClass: u,
    enterToClass: f,
    enterActiveClass: d,
    appearClass: p,
    appearToClass: m,
    appearActiveClass: _,
    beforeEnter: v,
    enter: y,
    afterEnter: g,
    enterCancelled: b,
    beforeAppear: $,
    appear: w,
    afterAppear: C,
    appearCancelled: x,
    duration: O
  } = s;
  let k = Sn,
    S = Sn.$vnode;
  for (; S && S.parent;) k = S.context, S = S.parent;
  const j = !k._isMounted || !t.isRootInsert;
  if (j && !w && "" !== w) return;
  const A = j && p ? p : u,
    T = j && _ ? _ : d,
    E = j && m ? m : f,
    P = j && $ || v,
    I = j && i(w) ? w : y,
    D = j && C || g,
    M = j && x || b,
    L = h(c(O) ? O.enter : O),
    R = !1 !== a && !G,
    F = ps(I),
    U = r._enterCb = N(() => {
      R && (rs(r, E), rs(r, T)), U.cancelled ? (R && rs(r, A), M && M(r)) : D && D(r), r._enterCb = null;
    });
  t.data.show || ce(t, "insert", () => {
    const e = r.parentNode,
      n = e && e._pending && e._pending[t.key];
    n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), I && I(r, U);
  }), P && P(r), R && (os(r, A), os(r, T), ns(() => {
    rs(r, A), U.cancelled || (os(r, E), F || (ds(L) ? setTimeout(U, L) : ss(r, l, U)));
  })), t.data.show && (e && e(), I && I(r, U)), R || F || U();
}
function fs(t, e) {
  const r = t.elm;
  o(r._enterCb) && (r._enterCb.cancelled = !0, r._enterCb());
  const s = Kr(t.data.transition);
  if (n(s) || 1 !== r.nodeType) return e();
  if (o(r._leaveCb)) return;
  const {
      css: i,
      type: a,
      leaveClass: l,
      leaveToClass: u,
      leaveActiveClass: f,
      beforeLeave: d,
      leave: p,
      afterLeave: m,
      leaveCancelled: _,
      delayLeave: v,
      duration: y
    } = s,
    g = !1 !== i && !G,
    b = ps(p),
    $ = h(c(y) ? y.leave : y),
    w = r._leaveCb = N(() => {
      r.parentNode && r.parentNode._pending && (r.parentNode._pending[t.key] = null), g && (rs(r, u), rs(r, f)), w.cancelled ? (g && rs(r, l), _ && _(r)) : (e(), m && m(r)), r._leaveCb = null;
    });
  function C() {
    w.cancelled || (!t.data.show && r.parentNode && ((r.parentNode._pending || (r.parentNode._pending = {}))[t.key] = t), d && d(r), g && (os(r, l), os(r, f), ns(() => {
      rs(r, l), w.cancelled || (os(r, u), b || (ds($) ? setTimeout(w, $) : ss(r, a, w)));
    })), p && p(r, w), g || b || w());
  }
  v ? v(C) : C();
}
function ds(t) {
  return "number" == typeof t && !isNaN(t);
}
function ps(t) {
  if (n(t)) return !1;
  const e = t.fns;
  return o(e) ? ps(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
}
function hs(t, e) {
  !0 !== e.data.show && us(e);
}
const ms = function (t) {
  let i, c;
  const a = {},
    {
      modules: l,
      nodeOps: u
    } = t;
  for (i = 0; i < or.length; ++i) for (a[or[i]] = [], c = 0; c < l.length; ++c) o(l[c][or[i]]) && a[or[i]].push(l[c][or[i]]);
  function f(t) {
    const e = u.parentNode(t);
    o(e) && u.removeChild(e, t);
  }
  function d(t, e, n, s, i, c, l) {
    if (o(t.elm) && o(c) && (t = c[l] = ft(t)), t.isRootInsert = !i, function (t, e, n, s) {
      let i = t.data;
      if (o(i)) {
        const c = o(t.componentInstance) && i.keepAlive;
        if (o(i = i.hook) && o(i = i.init) && i(t, !1), o(t.componentInstance)) return p(t, e), h(n, t.elm, s), r(c) && function (t, e, n, r) {
          let s,
            i = t;
          for (; i.componentInstance;) if (i = i.componentInstance._vnode, o(s = i.data) && o(s = s.transition)) {
            for (s = 0; s < a.activate.length; ++s) a.activate[s](nr, i);
            e.push(i);
            break;
          }
          h(n, t.elm, r);
        }(t, e, n, s), !0;
      }
    }(t, e, n, s)) return;
    const f = t.data,
      d = t.children,
      m = t.tag;
    o(m) ? (t.elm = t.ns ? u.createElementNS(t.ns, m) : u.createElement(m, t), g(t), _(t, d, e), o(f) && y(t, e), h(n, t.elm, s)) : r(t.isComment) ? (t.elm = u.createComment(t.text), h(n, t.elm, s)) : (t.elm = u.createTextNode(t.text), h(n, t.elm, s));
  }
  function p(t, e) {
    o(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, v(t) ? (y(t, e), g(t)) : (tr(t), e.push(t));
  }
  function h(t, e, n) {
    o(t) && (o(n) ? u.parentNode(n) === t && u.insertBefore(t, e, n) : u.appendChild(t, e));
  }
  function _(t, n, o) {
    if (e(n)) for (let e = 0; e < n.length; ++e) d(n[e], o, t.elm, null, !0, n, e);else s(t.text) && u.appendChild(t.elm, u.createTextNode(String(t.text)));
  }
  function v(t) {
    for (; t.componentInstance;) t = t.componentInstance._vnode;
    return o(t.tag);
  }
  function y(t, e) {
    for (let e = 0; e < a.create.length; ++e) a.create[e](nr, t);
    i = t.data.hook, o(i) && (o(i.create) && i.create(nr, t), o(i.insert) && e.push(t));
  }
  function g(t) {
    let e;
    if (o(e = t.fnScopeId)) u.setStyleScope(t.elm, e);else {
      let n = t;
      for (; n;) o(e = n.context) && o(e = e.$options._scopeId) && u.setStyleScope(t.elm, e), n = n.parent;
    }
    o(e = Sn) && e !== t.context && e !== t.fnContext && o(e = e.$options._scopeId) && u.setStyleScope(t.elm, e);
  }
  function b(t, e, n, o, r, s) {
    for (; o <= r; ++o) d(n[o], s, t, e, !1, n, o);
  }
  function $(t) {
    let e, n;
    const r = t.data;
    if (o(r)) for (o(e = r.hook) && o(e = e.destroy) && e(t), e = 0; e < a.destroy.length; ++e) a.destroy[e](t);
    if (o(e = t.children)) for (n = 0; n < t.children.length; ++n) $(t.children[n]);
  }
  function w(t, e, n) {
    for (; e <= n; ++e) {
      const n = t[e];
      o(n) && (o(n.tag) ? (C(n), $(n)) : f(n.elm));
    }
  }
  function C(t, e) {
    if (o(e) || o(t.data)) {
      let n;
      const r = a.remove.length + 1;
      for (o(e) ? e.listeners += r : e = function (t, e) {
        function n() {
          0 == --n.listeners && f(t);
        }
        return n.listeners = e, n;
      }(t.elm, r), o(n = t.componentInstance) && o(n = n._vnode) && o(n.data) && C(n, e), n = 0; n < a.remove.length; ++n) a.remove[n](t, e);
      o(n = t.data.hook) && o(n = n.remove) ? n(t, e) : e();
    } else f(t.elm);
  }
  function x(t, e, n, r) {
    for (let s = n; s < r; s++) {
      const n = e[s];
      if (o(n) && rr(t, n)) return s;
    }
  }
  function O(t, e, s, i, c, l) {
    if (t === e) return;
    o(e.elm) && o(i) && (e = i[c] = ft(e));
    const f = e.elm = t.elm;
    if (r(t.isAsyncPlaceholder)) return void (o(e.asyncFactory.resolved) ? j(t.elm, e, s) : e.isAsyncPlaceholder = !0);
    if (r(e.isStatic) && r(t.isStatic) && e.key === t.key && (r(e.isCloned) || r(e.isOnce))) return void (e.componentInstance = t.componentInstance);
    let p;
    const h = e.data;
    o(h) && o(p = h.hook) && o(p = p.prepatch) && p(t, e);
    const m = t.children,
      _ = e.children;
    if (o(h) && v(e)) {
      for (p = 0; p < a.update.length; ++p) a.update[p](t, e);
      o(p = h.hook) && o(p = p.update) && p(t, e);
    }
    n(e.text) ? o(m) && o(_) ? m !== _ && function (t, e, r, s, i) {
      let c,
        a,
        l,
        f,
        p = 0,
        h = 0,
        m = e.length - 1,
        _ = e[0],
        v = e[m],
        y = r.length - 1,
        g = r[0],
        $ = r[y];
      const C = !i;
      for (; p <= m && h <= y;) n(_) ? _ = e[++p] : n(v) ? v = e[--m] : rr(_, g) ? (O(_, g, s, r, h), _ = e[++p], g = r[++h]) : rr(v, $) ? (O(v, $, s, r, y), v = e[--m], $ = r[--y]) : rr(_, $) ? (O(_, $, s, r, y), C && u.insertBefore(t, _.elm, u.nextSibling(v.elm)), _ = e[++p], $ = r[--y]) : rr(v, g) ? (O(v, g, s, r, h), C && u.insertBefore(t, v.elm, _.elm), v = e[--m], g = r[++h]) : (n(c) && (c = sr(e, p, m)), a = o(g.key) ? c[g.key] : x(g, e, p, m), n(a) ? d(g, s, t, _.elm, !1, r, h) : (l = e[a], rr(l, g) ? (O(l, g, s, r, h), e[a] = void 0, C && u.insertBefore(t, l.elm, _.elm)) : d(g, s, t, _.elm, !1, r, h)), g = r[++h]);
      p > m ? (f = n(r[y + 1]) ? null : r[y + 1].elm, b(t, f, r, h, y, s)) : h > y && w(e, p, m);
    }(f, m, _, s, l) : o(_) ? (o(t.text) && u.setTextContent(f, ""), b(f, null, _, 0, _.length - 1, s)) : o(m) ? w(m, 0, m.length - 1) : o(t.text) && u.setTextContent(f, "") : t.text !== e.text && u.setTextContent(f, e.text), o(h) && o(p = h.hook) && o(p = p.postpatch) && p(t, e);
  }
  function k(t, e, n) {
    if (r(n) && o(t.parent)) t.parent.data.pendingInsert = e;else for (let t = 0; t < e.length; ++t) e[t].data.hook.insert(e[t]);
  }
  const S = m("attrs,class,staticClass,staticStyle,key");
  function j(t, e, n, s) {
    let i;
    const {
      tag: c,
      data: a,
      children: l
    } = e;
    if (s = s || a && a.pre, e.elm = t, r(e.isComment) && o(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
    if (o(a) && (o(i = a.hook) && o(i = i.init) && i(e, !0), o(i = e.componentInstance))) return p(e, n), !0;
    if (o(c)) {
      if (o(l)) if (t.hasChildNodes()) {
        if (o(i = a) && o(i = i.domProps) && o(i = i.innerHTML)) {
          if (i !== t.innerHTML) return !1;
        } else {
          let e = !0,
            o = t.firstChild;
          for (let t = 0; t < l.length; t++) {
            if (!o || !j(o, l[t], n, s)) {
              e = !1;
              break;
            }
            o = o.nextSibling;
          }
          if (!e || o) return !1;
        }
      } else _(e, l, n);
      if (o(a)) {
        let t = !1;
        for (const o in a) if (!S(o)) {
          t = !0, y(e, n);
          break;
        }
        !t && a.class && yn(a.class);
      }
    } else t.data !== e.text && (t.data = e.text);
    return !0;
  }
  return function (t, e, s, i) {
    if (n(e)) return void (o(t) && $(t));
    let c = !1;
    const l = [];
    if (n(t)) c = !0, d(e, l);else {
      const n = o(t.nodeType);
      if (!n && rr(t, e)) O(t, e, l, null, null, i);else {
        if (n) {
          if (1 === t.nodeType && t.hasAttribute(L) && (t.removeAttribute(L), s = !0), r(s) && j(t, e, l)) return k(e, l, !0), t;
          f = t, t = new at(u.tagName(f).toLowerCase(), {}, [], void 0, f);
        }
        const i = t.elm,
          c = u.parentNode(i);
        if (d(e, l, i._leaveCb ? null : c, u.nextSibling(i)), o(e.parent)) {
          let t = e.parent;
          const n = v(e);
          for (; t;) {
            for (let e = 0; e < a.destroy.length; ++e) a.destroy[e](t);
            if (t.elm = e.elm, n) {
              for (let e = 0; e < a.create.length; ++e) a.create[e](nr, t);
              const e = t.data.hook.insert;
              if (e.merged) {
                const t = e.fns.slice(1);
                for (let e = 0; e < t.length; e++) t[e]();
              }
            } else tr(t);
            t = t.parent;
          }
        }
        o(c) ? w([t], 0, 0) : o(t.tag) && $(t);
      }
    }
    var f;
    return k(e, l, c), e.elm;
  };
}({
  nodeOps: Qo,
  modules: [_r, yr, Sr, Er, Vr, W ? {
    create: hs,
    activate: hs,
    remove(t, e) {
      !0 !== t.data.show ? fs(t, e) : e();
    }
  } : {}].concat(dr)
});
G && document.addEventListener("selectionchange", () => {
  const t = document.activeElement;
  t && t.vmodel && Cs(t, "input");
});
const _s = {
  inserted(t, e, n, o) {
    "select" === n.tag ? (o.elm && !o.elm._vOptions ? ce(n, "postpatch", () => {
      _s.componentUpdated(t, e, n);
    }) : vs(t, e, n.context), t._vOptions = [].map.call(t.options, bs)) : ("textarea" === n.tag || Xo(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", $s), t.addEventListener("compositionend", ws), t.addEventListener("change", ws), G && (t.vmodel = !0)));
  },
  componentUpdated(t, e, n) {
    if ("select" === n.tag) {
      vs(t, e, n.context);
      const o = t._vOptions,
        r = t._vOptions = [].map.call(t.options, bs);
      if (r.some((t, e) => !I(t, o[e]))) {
        (t.multiple ? e.value.some(t => gs(t, r)) : e.value !== e.oldValue && gs(e.value, r)) && Cs(t, "change");
      }
    }
  }
};
function vs(t, e, n) {
  ys(t, e), (q || Z) && setTimeout(() => {
    ys(t, e);
  }, 0);
}
function ys(t, e, n) {
  const o = e.value,
    r = t.multiple;
  if (r && !Array.isArray(o)) return;
  let s, i;
  for (let e = 0, n = t.options.length; e < n; e++) if (i = t.options[e], r) s = D(o, bs(i)) > -1, i.selected !== s && (i.selected = s);else if (I(bs(i), o)) return void (t.selectedIndex !== e && (t.selectedIndex = e));
  r || (t.selectedIndex = -1);
}
function gs(t, e) {
  return e.every(e => !I(e, t));
}
function bs(t) {
  return "_value" in t ? t._value : t.value;
}
function $s(t) {
  t.target.composing = !0;
}
function ws(t) {
  t.target.composing && (t.target.composing = !1, Cs(t.target, "input"));
}
function Cs(t, e) {
  const n = document.createEvent("HTMLEvents");
  n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
function xs(t) {
  return !t.componentInstance || t.data && t.data.transition ? t : xs(t.componentInstance._vnode);
}
var Os = {
    bind(t, {
      value: e
    }, n) {
      const o = (n = xs(n)).data && n.data.transition,
        r = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
      e && o ? (n.data.show = !0, us(n, () => {
        t.style.display = r;
      })) : t.style.display = e ? r : "none";
    },
    update(t, {
      value: e,
      oldValue: n
    }, o) {
      if (!e == !n) return;
      (o = xs(o)).data && o.data.transition ? (o.data.show = !0, e ? us(o, () => {
        t.style.display = t.__vOriginalDisplay;
      }) : fs(o, () => {
        t.style.display = "none";
      })) : t.style.display = e ? t.__vOriginalDisplay : "none";
    },
    unbind(t, e, n, o, r) {
      r || (t.style.display = t.__vOriginalDisplay);
    }
  },
  ks = {
    model: _s,
    show: Os
  };
const Ss = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function js(t) {
  const e = t && t.componentOptions;
  return e && e.Ctor.options.abstract ? js(Ue(e.children)) : t;
}
function As(t) {
  const e = {},
    n = t.$options;
  for (const o in n.propsData) e[o] = t[o];
  const o = n._parentListeners;
  for (const t in o) e[w(t)] = o[t];
  return e;
}
function Ts(t, e) {
  if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
    props: e.componentOptions.propsData
  });
}
const Es = t => t.tag || Ae(t),
  Ps = t => "show" === t.name;
var Is = {
  name: "transition",
  props: Ss,
  abstract: !0,
  render(t) {
    let e = this.$slots.default;
    if (!e) return;
    if (e = e.filter(Es), !e.length) return;
    const n = this.mode,
      o = e[0];
    if (function (t) {
      for (; t = t.parent;) if (t.data.transition) return !0;
    }(this.$vnode)) return o;
    const r = js(o);
    if (!r) return o;
    if (this._leaving) return Ts(t, o);
    const i = `__transition-${this._uid}-`;
    r.key = null == r.key ? r.isComment ? i + "comment" : i + r.tag : s(r.key) ? 0 === String(r.key).indexOf(i) ? r.key : i + r.key : r.key;
    const c = (r.data || (r.data = {})).transition = As(this),
      a = this._vnode,
      l = js(a);
    if (r.data.directives && r.data.directives.some(Ps) && (r.data.show = !0), l && l.data && !function (t, e) {
      return e.key === t.key && e.tag === t.tag;
    }(r, l) && !Ae(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
      const e = l.data.transition = j({}, c);
      if ("out-in" === n) return this._leaving = !0, ce(e, "afterLeave", () => {
        this._leaving = !1, this.$forceUpdate();
      }), Ts(t, o);
      if ("in-out" === n) {
        if (Ae(r)) return a;
        let t;
        const n = () => {
          t();
        };
        ce(c, "afterEnter", n), ce(c, "enterCancelled", n), ce(e, "delayLeave", e => {
          t = e;
        });
      }
    }
    return o;
  }
};
const Ds = j({
  tag: String,
  moveClass: String
}, Ss);
delete Ds.mode;
var Ns = {
  props: Ds,
  beforeMount() {
    const t = this._update;
    this._update = (e, n) => {
      const o = jn(this);
      this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept, o(), t.call(this, e, n);
    };
  },
  render(t) {
    const e = this.tag || this.$vnode.data.tag || "span",
      n = Object.create(null),
      o = this.prevChildren = this.children,
      r = this.$slots.default || [],
      s = this.children = [],
      i = As(this);
    for (let t = 0; t < r.length; t++) {
      const e = r[t];
      e.tag && null != e.key && 0 !== String(e.key).indexOf("__vlist") && (s.push(e), n[e.key] = e, (e.data || (e.data = {})).transition = i);
    }
    if (o) {
      const r = [],
        s = [];
      for (let t = 0; t < o.length; t++) {
        const e = o[t];
        e.data.transition = i, e.data.pos = e.elm.getBoundingClientRect(), n[e.key] ? r.push(e) : s.push(e);
      }
      this.kept = t(e, null, r), this.removed = s;
    }
    return t(e, null, s);
  },
  updated() {
    const t = this.prevChildren,
      e = this.moveClass || (this.name || "v") + "-move";
    t.length && this.hasMove(t[0].elm, e) && (t.forEach(Ms), t.forEach(Ls), t.forEach(Rs), this._reflow = document.body.offsetHeight, t.forEach(t => {
      if (t.data.moved) {
        const n = t.elm,
          o = n.style;
        os(n, e), o.transform = o.WebkitTransform = o.transitionDuration = "", n.addEventListener(Qr, n._moveCb = function t(o) {
          o && o.target !== n || o && !/transform$/.test(o.propertyName) || (n.removeEventListener(Qr, t), n._moveCb = null, rs(n, e));
        });
      }
    }));
  },
  methods: {
    hasMove(t, e) {
      if (!Gr) return !1;
      if (this._hasMove) return this._hasMove;
      const n = t.cloneNode();
      t._transitionClasses && t._transitionClasses.forEach(t => {
        Wr(n, t);
      }), Hr(n, e), n.style.display = "none", this.$el.appendChild(n);
      const o = cs(n);
      return this.$el.removeChild(n), this._hasMove = o.hasTransform;
    }
  }
};
function Ms(t) {
  t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
}
function Ls(t) {
  t.data.newPos = t.elm.getBoundingClientRect();
}
function Rs(t) {
  const e = t.data.pos,
    n = t.data.newPos,
    o = e.left - n.left,
    r = e.top - n.top;
  if (o || r) {
    t.data.moved = !0;
    const e = t.elm.style;
    e.transform = e.WebkitTransform = `translate(${o}px,${r}px)`, e.transitionDuration = "0s";
  }
}
var Fs = {
  Transition: Is,
  TransitionGroup: Ns
};
xo.config.mustUseProp = (t, e, n) => "value" === n && Io(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t, xo.config.isReservedTag = Zo, xo.config.isReservedAttr = Po, xo.config.getTagNamespace = function (t) {
  return Go(t) ? "svg" : "math" === t ? "math" : void 0;
}, xo.config.isUnknownElement = function (t) {
  if (!W) return !0;
  if (Zo(t)) return !1;
  if (t = t.toLowerCase(), null != Jo[t]) return Jo[t];
  const e = document.createElement(t);
  return t.indexOf("-") > -1 ? Jo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Jo[t] = /HTMLUnknownElement/.test(e.toString());
}, j(xo.options.directives, ks), j(xo.options.components, Fs), xo.prototype.__patch__ = W ? ms : T, xo.prototype.$mount = function (t, e) {
  return function (t, e, n) {
    let o;
    t.$el = e, t.$options.render || (t.$options.render = lt), Pn(t, "beforeMount"), o = () => {
      t._update(t._render(), n);
    }, new wn(t, o, T, {
      before() {
        t._isMounted && !t._isDestroyed && Pn(t, "beforeUpdate");
      }
    }, !0), n = !1;
    const r = t._preWatchers;
    if (r) for (let t = 0; t < r.length; t++) r[t].run();
    return null == t.$vnode && (t._isMounted = !0, Pn(t, "mounted")), t;
  }(this, t = t && W ? function (t) {
    if ("string" == typeof t) {
      return document.querySelector(t) || document.createElement("div");
    }
    return t;
  }(t) : void 0, e);
}, W && setTimeout(() => {
  U.devtools && nt && nt.emit("init", xo);
}, 0), j(xo, _n), module.exports = xo;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{align-items:center;background:#f7f8fb;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;padding:1rem;text-align:center;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;bottom:0;left:0;position:absolute;right:0;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("22a9315d", content, true)

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-context,.v-context ul{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:border-box;display:block;list-style:none;margin:0;max-height:calc(100% - 50px);min-width:10rem;overflow-y:auto;padding:10px 0;position:fixed;z-index:1500}.v-context ul>li,.v-context>li{margin:0;position:relative}.v-context ul>li>a,.v-context>li>a{background-color:transparent;border:0;color:#212529;display:block;font-weight:400;padding:.5rem 1.5rem;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.v-context ul>li>a:focus,.v-context ul>li>a:hover,.v-context>li>a:focus,.v-context>li>a:hover{background-color:#f8f9fa;color:#212529;-webkit-text-decoration:none;text-decoration:none}.v-context ul:focus,.v-context ul>li>a:focus,.v-context:focus,.v-context>li>a:focus{outline:0}.v-context__sub>a:after{content:\"\\203A\";float:right;padding-left:1rem}.v-context__sub>ul{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.common.js
var vue_runtime_common = __webpack_require__(0);
var vue_runtime_common_default = /*#__PURE__*/__webpack_require__.n(vue_runtime_common);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(10);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (vue_runtime_common_default.a.config.errorHandler) {
    vue_runtime_common_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = vue_runtime_common_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }
        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    vue_runtime_common_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.common.js
var vue_meta_common = __webpack_require__(11);
var vue_meta_common_default = /*#__PURE__*/__webpack_require__.n(vue_meta_common);

// EXTERNAL MODULE: ./node_modules/vue-client-only/dist/vue-client-only.common.js
var vue_client_only_common = __webpack_require__(6);
var vue_client_only_common_default = /*#__PURE__*/__webpack_require__.n(vue_client_only_common);

// EXTERNAL MODULE: ./node_modules/vue-no-ssr/dist/vue-no-ssr.common.js
var vue_no_ssr_common = __webpack_require__(3);
var vue_no_ssr_common_default = /*#__PURE__*/__webpack_require__.n(vue_no_ssr_common);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.common.js
var vue_router_common = __webpack_require__(7);
var vue_router_common_default = /*#__PURE__*/__webpack_require__.n(vue_router_common);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _03b46660 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 1).then(__webpack_require__.bind(null, 38)));
const emptyFn = () => {};
vue_runtime_common_default.a.use(vue_router_common_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _03b46660,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new vue_router_common_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_errorvue_type_script_lang_js = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js = (nuxt_errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6f313bf9"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    vue_runtime_common_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "43adc226"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-context/dist/css/vue-context.css
var vue_context = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Nuxt');
};
var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "eddded3a"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    vue_runtime_common_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              vue_runtime_common_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

// Component: <ClientOnly>
vue_runtime_common_default.a.component(vue_client_only_common_default.a.name, vue_client_only_common_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
vue_runtime_common_default.a.component(vue_no_ssr_common_default.a.name, {
  ...vue_no_ssr_common_default.a,
  render(h, ctx) {
    if (false) {}
    return vue_no_ssr_common_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
vue_runtime_common_default.a.component(nuxt_child.name, nuxt_child);
vue_runtime_common_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
vue_runtime_common_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(vue_runtime_common_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
vue_runtime_common_default.a.use(vue_meta_common_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const store = null;
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "meta": [],
      "link": [],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (vue_runtime_common_default.a[installKey]) {
      return;
    }
    vue_runtime_common_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    vue_runtime_common_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(vue_runtime_common_default.a.prototype, key)) {
        Object.defineProperty(vue_runtime_common_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: vue_runtime_common_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
vue_runtime_common_default.a.config.optionMergeStrategies.serverPrefetch = vue_runtime_common_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!vue_runtime_common_default.a.__nuxt__fetch__mixin__) {
  vue_runtime_common_default.a.mixin(fetch_server);
  vue_runtime_common_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
vue_runtime_common_default.a.component(nuxt_link_server.name, nuxt_link_server);
vue_runtime_common_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new vue_runtime_common_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new vue_runtime_common_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map