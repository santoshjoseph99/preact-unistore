/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@f/hyphenate/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/@f/hyphenate/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Expose hyphenate\n */\n\nmodule.exports = hyphenate\n\n/**\n * Constants\n */\n\nvar upperCasePattern = /([A-Z])/g\n\n/**\n * hyphenate\n */\n\nfunction hyphenate (str) {\n  return str.replace(upperCasePattern, dashLower)\n}\n\nfunction dashLower (c) {\n  return '-' + c.toLowerCase()\n}\n\n\n//# sourceURL=webpack:///./node_modules/@f/hyphenate/lib/index.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/hyperscript-helpers/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hyperscript-helpers/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nvar isValidString = function isValidString(param) {\n  return typeof param === 'string' && param.length > 0;\n};\n\nvar startsWith = function startsWith(string, start) {\n  return string[0] === start;\n};\n\nvar isSelector = function isSelector(param) {\n  return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'));\n};\n\nvar node = function node(h) {\n  return function (tagName) {\n    return function (first) {\n      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        rest[_key - 1] = arguments[_key];\n      }\n\n      if (isSelector(first)) {\n        return h.apply(undefined, [tagName + first].concat(rest));\n      } else if (typeof first === 'undefined') {\n        return h(tagName);\n      } else {\n        return h.apply(undefined, [tagName, first].concat(rest));\n      }\n    };\n  };\n};\n\nvar TAG_NAMES = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];\n\nexports['default'] = function (h) {\n  var createTag = node(h);\n  var exported = { TAG_NAMES: TAG_NAMES, isSelector: isSelector, createTag: createTag };\n  TAG_NAMES.forEach(function (n) {\n    exported[n] = createTag(n);\n  });\n  return exported;\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/hyperscript-helpers/dist/index.js?");

/***/ }),

/***/ "./node_modules/parse-hyperscript/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-hyperscript/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar parseSelector = __webpack_require__(/*! ./selector */ \"./node_modules/parse-hyperscript/lib/selector.js\")\r\n\r\nmodule.exports = parse\r\n\r\nfunction parse (args) {\r\n  var children = []\r\n  var attrs = {}\r\n  var node\r\n\r\n  for (var i = args.length - 1; i >= 0; i--) {\r\n    var arg = args[i]\r\n\r\n    if (i === 0) {\r\n      node = arg\r\n    } else if (Array.isArray(arg)) {\r\n      children = arg\r\n    } else if (isObj(arg)) {\r\n      attrs = arg\r\n    } else {\r\n      children = [arg]\r\n    }\r\n  }\r\n\r\n  // is it a default tag or a custom element like a react class or a\r\n  // functional component?\r\n  if (isString(node)) {\r\n    var selector = parseSelector(node)\r\n    selector.id && (attrs.id = selector.id)\r\n\r\n    if (selector.classes !== '') {\r\n      if (attrs.class) {\r\n        attrs.class = (attrs.class) + \" \" + (selector.classes)\r\n      } else {\r\n        attrs.class = selector.classes\r\n      }\r\n    }\r\n\r\n    return { node: selector.tag, attrs: attrs, children: children }\r\n  } else {\r\n    return { node: node, attrs: attrs, children: children }\r\n  }\r\n}\r\n\r\nfunction isString (val) { return typeof val === 'string' }\r\nfunction isObj (val) { return typeof val === 'object' }\r\n\n\n//# sourceURL=webpack:///./node_modules/parse-hyperscript/lib/index.js?");

/***/ }),

/***/ "./node_modules/parse-hyperscript/lib/selector.js":
/*!********************************************************!*\
  !*** ./node_modules/parse-hyperscript/lib/selector.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports = parseSelector\r\n\r\nvar re = /([\\.#]?[^\\s#.]+)/\r\n\r\nfunction parseSelector (selector) {\r\n  var matches = selector.split(re)\r\n  var classes = ''\r\n  var id = null\r\n  var tag = null\r\n\r\n  // we know it's only a tag -> ['', TAG, ''].length === 3\r\n  if (matches.length === 3) return { tag: selector, classes: classes }\r\n\r\n  matches.forEach(function (match, i) {\r\n    var s = match.substring(1, match.length)\r\n    if (!match) return\r\n\r\n    if (match[0] === '.') {\r\n      classes += s + ' '\r\n    } else if (match[0] === '#') {\r\n      id = s\r\n    } else {\r\n      tag = match\r\n    }\r\n  })\r\n\r\n  return { classes: classes.trim(), id: id, tag: tag }\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/parse-hyperscript/lib/selector.js?");

/***/ }),

/***/ "./node_modules/preact-hyperscript/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/preact-hyperscript/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar createHelpers = __webpack_require__(/*! hyperscript-helpers */ \"./node_modules/hyperscript-helpers/dist/index.js\")\nvar toInlineStyle = __webpack_require__(/*! ./to-inline-style */ \"./node_modules/preact-hyperscript/lib/to-inline-style.js\")\nvar parse = __webpack_require__(/*! parse-hyperscript */ \"./node_modules/parse-hyperscript/lib/index.js\")\nvar classNames = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\")\nvar ref = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.mjs\");\nvar h = ref.h;\n\nexports.createComponent = createComponent\nexports.createElement = createElement\n\nvar helpers = createHelpers(createElement)\n\nObject.keys(helpers).forEach(function (name) {\n  module.exports[name] = helpers[name]\n})\n\nfunction createElement () {\n  var ref = parse(arguments);\n  var node = ref.node;\n  var attrs = ref.attrs;\n  var children = ref.children;\n\n  for (var key in attrs) {\n    attrs[key] = decorate(attrs[key], key)\n  }\n\n  return h(node, attrs, children)\n}\n\nfunction decorate (val, name) {\n  switch (name) {\n    case 'class':\n      return classNames(val)\n    case 'style':\n      return typeof val !== 'string'\n        ? toInlineStyle(val)\n        : val\n    default:\n      return val\n  }\n}\n\nfunction createComponent (Component) {\n  return function () {\n    var args = [], len = arguments.length;\n    while ( len-- ) args[ len ] = arguments[ len ];\n\n    return createElement.apply(void 0, [ Component ].concat( args ));\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/preact-hyperscript/lib/index.js?");

/***/ }),

/***/ "./node_modules/preact-hyperscript/lib/to-inline-style.js":
/*!****************************************************************!*\
  !*** ./node_modules/preact-hyperscript/lib/to-inline-style.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar hyphenate = __webpack_require__(/*! @f/hyphenate */ \"./node_modules/@f/hyphenate/lib/index.js\")\n\nmodule.exports = toInlineStyle\n\nfunction toInlineStyle (styles) {\n  var str = ''\n\n  for (var key in styles) {\n    var val = styles[key]\n\n    if (val !== null && val !== undefined) {\n      str += format(hyphenate(key), val)\n    }\n  }\n\n  return str\n}\n\nfunction format (key, value) {\n  return key + ':' + value + ';'\n}\n\n\n//# sourceURL=webpack:///./node_modules/preact-hyperscript/lib/to-inline-style.js?");

/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/*! exports provided: default, h, createElement, cloneElement, createRef, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return cloneElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRef\", function() { return createRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rerender\", function() { return rerender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\nvar VNode = function VNode() {};\n\nvar options = {};\n\nvar stack = [];\n\nvar EMPTY_CHILDREN = [];\n\nfunction h(nodeName, attributes) {\n\tvar children = EMPTY_CHILDREN,\n\t    lastSimple,\n\t    child,\n\t    simple,\n\t    i;\n\tfor (i = arguments.length; i-- > 2;) {\n\t\tstack.push(arguments[i]);\n\t}\n\tif (attributes && attributes.children != null) {\n\t\tif (!stack.length) stack.push(attributes.children);\n\t\tdelete attributes.children;\n\t}\n\twhile (stack.length) {\n\t\tif ((child = stack.pop()) && child.pop !== undefined) {\n\t\t\tfor (i = child.length; i--;) {\n\t\t\t\tstack.push(child[i]);\n\t\t\t}\n\t\t} else {\n\t\t\tif (typeof child === 'boolean') child = null;\n\n\t\t\tif (simple = typeof nodeName !== 'function') {\n\t\t\t\tif (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;\n\t\t\t}\n\n\t\t\tif (simple && lastSimple) {\n\t\t\t\tchildren[children.length - 1] += child;\n\t\t\t} else if (children === EMPTY_CHILDREN) {\n\t\t\t\tchildren = [child];\n\t\t\t} else {\n\t\t\t\tchildren.push(child);\n\t\t\t}\n\n\t\t\tlastSimple = simple;\n\t\t}\n\t}\n\n\tvar p = new VNode();\n\tp.nodeName = nodeName;\n\tp.children = children;\n\tp.attributes = attributes == null ? undefined : attributes;\n\tp.key = attributes == null ? undefined : attributes.key;\n\n\tif (options.vnode !== undefined) options.vnode(p);\n\n\treturn p;\n}\n\nfunction extend(obj, props) {\n  for (var i in props) {\n    obj[i] = props[i];\n  }return obj;\n}\n\nfunction applyRef(ref, value) {\n  if (ref != null) {\n    if (typeof ref == 'function') ref(value);else ref.current = value;\n  }\n}\n\nvar defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;\n\nfunction cloneElement(vnode, props) {\n  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);\n}\n\nvar IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;\n\nvar items = [];\n\nfunction enqueueRender(component) {\n\tif (!component._dirty && (component._dirty = true) && items.push(component) == 1) {\n\t\t(options.debounceRendering || defer)(rerender);\n\t}\n}\n\nfunction rerender() {\n\tvar p;\n\twhile (p = items.pop()) {\n\t\tif (p._dirty) renderComponent(p);\n\t}\n}\n\nfunction isSameNodeType(node, vnode, hydrating) {\n\tif (typeof vnode === 'string' || typeof vnode === 'number') {\n\t\treturn node.splitText !== undefined;\n\t}\n\tif (typeof vnode.nodeName === 'string') {\n\t\treturn !node._componentConstructor && isNamedNode(node, vnode.nodeName);\n\t}\n\treturn hydrating || node._componentConstructor === vnode.nodeName;\n}\n\nfunction isNamedNode(node, nodeName) {\n\treturn node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();\n}\n\nfunction getNodeProps(vnode) {\n\tvar props = extend({}, vnode.attributes);\n\tprops.children = vnode.children;\n\n\tvar defaultProps = vnode.nodeName.defaultProps;\n\tif (defaultProps !== undefined) {\n\t\tfor (var i in defaultProps) {\n\t\t\tif (props[i] === undefined) {\n\t\t\t\tprops[i] = defaultProps[i];\n\t\t\t}\n\t\t}\n\t}\n\n\treturn props;\n}\n\nfunction createNode(nodeName, isSvg) {\n\tvar node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);\n\tnode.normalizedNodeName = nodeName;\n\treturn node;\n}\n\nfunction removeNode(node) {\n\tvar parentNode = node.parentNode;\n\tif (parentNode) parentNode.removeChild(node);\n}\n\nfunction setAccessor(node, name, old, value, isSvg) {\n\tif (name === 'className') name = 'class';\n\n\tif (name === 'key') {} else if (name === 'ref') {\n\t\tapplyRef(old, null);\n\t\tapplyRef(value, node);\n\t} else if (name === 'class' && !isSvg) {\n\t\tnode.className = value || '';\n\t} else if (name === 'style') {\n\t\tif (!value || typeof value === 'string' || typeof old === 'string') {\n\t\t\tnode.style.cssText = value || '';\n\t\t}\n\t\tif (value && typeof value === 'object') {\n\t\t\tif (typeof old !== 'string') {\n\t\t\t\tfor (var i in old) {\n\t\t\t\t\tif (!(i in value)) node.style[i] = '';\n\t\t\t\t}\n\t\t\t}\n\t\t\tfor (var i in value) {\n\t\t\t\tnode.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];\n\t\t\t}\n\t\t}\n\t} else if (name === 'dangerouslySetInnerHTML') {\n\t\tif (value) node.innerHTML = value.__html || '';\n\t} else if (name[0] == 'o' && name[1] == 'n') {\n\t\tvar useCapture = name !== (name = name.replace(/Capture$/, ''));\n\t\tname = name.toLowerCase().substring(2);\n\t\tif (value) {\n\t\t\tif (!old) node.addEventListener(name, eventProxy, useCapture);\n\t\t} else {\n\t\t\tnode.removeEventListener(name, eventProxy, useCapture);\n\t\t}\n\t\t(node._listeners || (node._listeners = {}))[name] = value;\n\t} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {\n\t\ttry {\n\t\t\tnode[name] = value == null ? '' : value;\n\t\t} catch (e) {}\n\t\tif ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);\n\t} else {\n\t\tvar ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));\n\n\t\tif (value == null || value === false) {\n\t\t\tif (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);\n\t\t} else if (typeof value !== 'function') {\n\t\t\tif (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);\n\t\t}\n\t}\n}\n\nfunction eventProxy(e) {\n\treturn this._listeners[e.type](options.event && options.event(e) || e);\n}\n\nvar mounts = [];\n\nvar diffLevel = 0;\n\nvar isSvgMode = false;\n\nvar hydrating = false;\n\nfunction flushMounts() {\n\tvar c;\n\twhile (c = mounts.shift()) {\n\t\tif (options.afterMount) options.afterMount(c);\n\t\tif (c.componentDidMount) c.componentDidMount();\n\t}\n}\n\nfunction diff(dom, vnode, context, mountAll, parent, componentRoot) {\n\tif (!diffLevel++) {\n\t\tisSvgMode = parent != null && parent.ownerSVGElement !== undefined;\n\n\t\thydrating = dom != null && !('__preactattr_' in dom);\n\t}\n\n\tvar ret = idiff(dom, vnode, context, mountAll, componentRoot);\n\n\tif (parent && ret.parentNode !== parent) parent.appendChild(ret);\n\n\tif (! --diffLevel) {\n\t\thydrating = false;\n\n\t\tif (!componentRoot) flushMounts();\n\t}\n\n\treturn ret;\n}\n\nfunction idiff(dom, vnode, context, mountAll, componentRoot) {\n\tvar out = dom,\n\t    prevSvgMode = isSvgMode;\n\n\tif (vnode == null || typeof vnode === 'boolean') vnode = '';\n\n\tif (typeof vnode === 'string' || typeof vnode === 'number') {\n\t\tif (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {\n\t\t\tif (dom.nodeValue != vnode) {\n\t\t\t\tdom.nodeValue = vnode;\n\t\t\t}\n\t\t} else {\n\t\t\tout = document.createTextNode(vnode);\n\t\t\tif (dom) {\n\t\t\t\tif (dom.parentNode) dom.parentNode.replaceChild(out, dom);\n\t\t\t\trecollectNodeTree(dom, true);\n\t\t\t}\n\t\t}\n\n\t\tout['__preactattr_'] = true;\n\n\t\treturn out;\n\t}\n\n\tvar vnodeName = vnode.nodeName;\n\tif (typeof vnodeName === 'function') {\n\t\treturn buildComponentFromVNode(dom, vnode, context, mountAll);\n\t}\n\n\tisSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;\n\n\tvnodeName = String(vnodeName);\n\tif (!dom || !isNamedNode(dom, vnodeName)) {\n\t\tout = createNode(vnodeName, isSvgMode);\n\n\t\tif (dom) {\n\t\t\twhile (dom.firstChild) {\n\t\t\t\tout.appendChild(dom.firstChild);\n\t\t\t}\n\t\t\tif (dom.parentNode) dom.parentNode.replaceChild(out, dom);\n\n\t\t\trecollectNodeTree(dom, true);\n\t\t}\n\t}\n\n\tvar fc = out.firstChild,\n\t    props = out['__preactattr_'],\n\t    vchildren = vnode.children;\n\n\tif (props == null) {\n\t\tprops = out['__preactattr_'] = {};\n\t\tfor (var a = out.attributes, i = a.length; i--;) {\n\t\t\tprops[a[i].name] = a[i].value;\n\t\t}\n\t}\n\n\tif (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {\n\t\tif (fc.nodeValue != vchildren[0]) {\n\t\t\tfc.nodeValue = vchildren[0];\n\t\t}\n\t} else if (vchildren && vchildren.length || fc != null) {\n\t\t\tinnerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);\n\t\t}\n\n\tdiffAttributes(out, vnode.attributes, props);\n\n\tisSvgMode = prevSvgMode;\n\n\treturn out;\n}\n\nfunction innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {\n\tvar originalChildren = dom.childNodes,\n\t    children = [],\n\t    keyed = {},\n\t    keyedLen = 0,\n\t    min = 0,\n\t    len = originalChildren.length,\n\t    childrenLen = 0,\n\t    vlen = vchildren ? vchildren.length : 0,\n\t    j,\n\t    c,\n\t    f,\n\t    vchild,\n\t    child;\n\n\tif (len !== 0) {\n\t\tfor (var i = 0; i < len; i++) {\n\t\t\tvar _child = originalChildren[i],\n\t\t\t    props = _child['__preactattr_'],\n\t\t\t    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;\n\t\t\tif (key != null) {\n\t\t\t\tkeyedLen++;\n\t\t\t\tkeyed[key] = _child;\n\t\t\t} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {\n\t\t\t\tchildren[childrenLen++] = _child;\n\t\t\t}\n\t\t}\n\t}\n\n\tif (vlen !== 0) {\n\t\tfor (var i = 0; i < vlen; i++) {\n\t\t\tvchild = vchildren[i];\n\t\t\tchild = null;\n\n\t\t\tvar key = vchild.key;\n\t\t\tif (key != null) {\n\t\t\t\tif (keyedLen && keyed[key] !== undefined) {\n\t\t\t\t\tchild = keyed[key];\n\t\t\t\t\tkeyed[key] = undefined;\n\t\t\t\t\tkeyedLen--;\n\t\t\t\t}\n\t\t\t} else if (min < childrenLen) {\n\t\t\t\t\tfor (j = min; j < childrenLen; j++) {\n\t\t\t\t\t\tif (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {\n\t\t\t\t\t\t\tchild = c;\n\t\t\t\t\t\t\tchildren[j] = undefined;\n\t\t\t\t\t\t\tif (j === childrenLen - 1) childrenLen--;\n\t\t\t\t\t\t\tif (j === min) min++;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\tchild = idiff(child, vchild, context, mountAll);\n\n\t\t\tf = originalChildren[i];\n\t\t\tif (child && child !== dom && child !== f) {\n\t\t\t\tif (f == null) {\n\t\t\t\t\tdom.appendChild(child);\n\t\t\t\t} else if (child === f.nextSibling) {\n\t\t\t\t\tremoveNode(f);\n\t\t\t\t} else {\n\t\t\t\t\tdom.insertBefore(child, f);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tif (keyedLen) {\n\t\tfor (var i in keyed) {\n\t\t\tif (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);\n\t\t}\n\t}\n\n\twhile (min <= childrenLen) {\n\t\tif ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);\n\t}\n}\n\nfunction recollectNodeTree(node, unmountOnly) {\n\tvar component = node._component;\n\tif (component) {\n\t\tunmountComponent(component);\n\t} else {\n\t\tif (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);\n\n\t\tif (unmountOnly === false || node['__preactattr_'] == null) {\n\t\t\tremoveNode(node);\n\t\t}\n\n\t\tremoveChildren(node);\n\t}\n}\n\nfunction removeChildren(node) {\n\tnode = node.lastChild;\n\twhile (node) {\n\t\tvar next = node.previousSibling;\n\t\trecollectNodeTree(node, true);\n\t\tnode = next;\n\t}\n}\n\nfunction diffAttributes(dom, attrs, old) {\n\tvar name;\n\n\tfor (name in old) {\n\t\tif (!(attrs && attrs[name] != null) && old[name] != null) {\n\t\t\tsetAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);\n\t\t}\n\t}\n\n\tfor (name in attrs) {\n\t\tif (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {\n\t\t\tsetAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);\n\t\t}\n\t}\n}\n\nvar recyclerComponents = [];\n\nfunction createComponent(Ctor, props, context) {\n\tvar inst,\n\t    i = recyclerComponents.length;\n\n\tif (Ctor.prototype && Ctor.prototype.render) {\n\t\tinst = new Ctor(props, context);\n\t\tComponent.call(inst, props, context);\n\t} else {\n\t\tinst = new Component(props, context);\n\t\tinst.constructor = Ctor;\n\t\tinst.render = doRender;\n\t}\n\n\twhile (i--) {\n\t\tif (recyclerComponents[i].constructor === Ctor) {\n\t\t\tinst.nextBase = recyclerComponents[i].nextBase;\n\t\t\trecyclerComponents.splice(i, 1);\n\t\t\treturn inst;\n\t\t}\n\t}\n\n\treturn inst;\n}\n\nfunction doRender(props, state, context) {\n\treturn this.constructor(props, context);\n}\n\nfunction setComponentProps(component, props, renderMode, context, mountAll) {\n\tif (component._disable) return;\n\tcomponent._disable = true;\n\n\tcomponent.__ref = props.ref;\n\tcomponent.__key = props.key;\n\tdelete props.ref;\n\tdelete props.key;\n\n\tif (typeof component.constructor.getDerivedStateFromProps === 'undefined') {\n\t\tif (!component.base || mountAll) {\n\t\t\tif (component.componentWillMount) component.componentWillMount();\n\t\t} else if (component.componentWillReceiveProps) {\n\t\t\tcomponent.componentWillReceiveProps(props, context);\n\t\t}\n\t}\n\n\tif (context && context !== component.context) {\n\t\tif (!component.prevContext) component.prevContext = component.context;\n\t\tcomponent.context = context;\n\t}\n\n\tif (!component.prevProps) component.prevProps = component.props;\n\tcomponent.props = props;\n\n\tcomponent._disable = false;\n\n\tif (renderMode !== 0) {\n\t\tif (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {\n\t\t\trenderComponent(component, 1, mountAll);\n\t\t} else {\n\t\t\tenqueueRender(component);\n\t\t}\n\t}\n\n\tapplyRef(component.__ref, component);\n}\n\nfunction renderComponent(component, renderMode, mountAll, isChild) {\n\tif (component._disable) return;\n\n\tvar props = component.props,\n\t    state = component.state,\n\t    context = component.context,\n\t    previousProps = component.prevProps || props,\n\t    previousState = component.prevState || state,\n\t    previousContext = component.prevContext || context,\n\t    isUpdate = component.base,\n\t    nextBase = component.nextBase,\n\t    initialBase = isUpdate || nextBase,\n\t    initialChildComponent = component._component,\n\t    skip = false,\n\t    snapshot = previousContext,\n\t    rendered,\n\t    inst,\n\t    cbase;\n\n\tif (component.constructor.getDerivedStateFromProps) {\n\t\tstate = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));\n\t\tcomponent.state = state;\n\t}\n\n\tif (isUpdate) {\n\t\tcomponent.props = previousProps;\n\t\tcomponent.state = previousState;\n\t\tcomponent.context = previousContext;\n\t\tif (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {\n\t\t\tskip = true;\n\t\t} else if (component.componentWillUpdate) {\n\t\t\tcomponent.componentWillUpdate(props, state, context);\n\t\t}\n\t\tcomponent.props = props;\n\t\tcomponent.state = state;\n\t\tcomponent.context = context;\n\t}\n\n\tcomponent.prevProps = component.prevState = component.prevContext = component.nextBase = null;\n\tcomponent._dirty = false;\n\n\tif (!skip) {\n\t\trendered = component.render(props, state, context);\n\n\t\tif (component.getChildContext) {\n\t\t\tcontext = extend(extend({}, context), component.getChildContext());\n\t\t}\n\n\t\tif (isUpdate && component.getSnapshotBeforeUpdate) {\n\t\t\tsnapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);\n\t\t}\n\n\t\tvar childComponent = rendered && rendered.nodeName,\n\t\t    toUnmount,\n\t\t    base;\n\n\t\tif (typeof childComponent === 'function') {\n\n\t\t\tvar childProps = getNodeProps(rendered);\n\t\t\tinst = initialChildComponent;\n\n\t\t\tif (inst && inst.constructor === childComponent && childProps.key == inst.__key) {\n\t\t\t\tsetComponentProps(inst, childProps, 1, context, false);\n\t\t\t} else {\n\t\t\t\ttoUnmount = inst;\n\n\t\t\t\tcomponent._component = inst = createComponent(childComponent, childProps, context);\n\t\t\t\tinst.nextBase = inst.nextBase || nextBase;\n\t\t\t\tinst._parentComponent = component;\n\t\t\t\tsetComponentProps(inst, childProps, 0, context, false);\n\t\t\t\trenderComponent(inst, 1, mountAll, true);\n\t\t\t}\n\n\t\t\tbase = inst.base;\n\t\t} else {\n\t\t\tcbase = initialBase;\n\n\t\t\ttoUnmount = initialChildComponent;\n\t\t\tif (toUnmount) {\n\t\t\t\tcbase = component._component = null;\n\t\t\t}\n\n\t\t\tif (initialBase || renderMode === 1) {\n\t\t\t\tif (cbase) cbase._component = null;\n\t\t\t\tbase = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);\n\t\t\t}\n\t\t}\n\n\t\tif (initialBase && base !== initialBase && inst !== initialChildComponent) {\n\t\t\tvar baseParent = initialBase.parentNode;\n\t\t\tif (baseParent && base !== baseParent) {\n\t\t\t\tbaseParent.replaceChild(base, initialBase);\n\n\t\t\t\tif (!toUnmount) {\n\t\t\t\t\tinitialBase._component = null;\n\t\t\t\t\trecollectNodeTree(initialBase, false);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (toUnmount) {\n\t\t\tunmountComponent(toUnmount);\n\t\t}\n\n\t\tcomponent.base = base;\n\t\tif (base && !isChild) {\n\t\t\tvar componentRef = component,\n\t\t\t    t = component;\n\t\t\twhile (t = t._parentComponent) {\n\t\t\t\t(componentRef = t).base = base;\n\t\t\t}\n\t\t\tbase._component = componentRef;\n\t\t\tbase._componentConstructor = componentRef.constructor;\n\t\t}\n\t}\n\n\tif (!isUpdate || mountAll) {\n\t\tmounts.push(component);\n\t} else if (!skip) {\n\n\t\tif (component.componentDidUpdate) {\n\t\t\tcomponent.componentDidUpdate(previousProps, previousState, snapshot);\n\t\t}\n\t\tif (options.afterUpdate) options.afterUpdate(component);\n\t}\n\n\twhile (component._renderCallbacks.length) {\n\t\tcomponent._renderCallbacks.pop().call(component);\n\t}if (!diffLevel && !isChild) flushMounts();\n}\n\nfunction buildComponentFromVNode(dom, vnode, context, mountAll) {\n\tvar c = dom && dom._component,\n\t    originalComponent = c,\n\t    oldDom = dom,\n\t    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,\n\t    isOwner = isDirectOwner,\n\t    props = getNodeProps(vnode);\n\twhile (c && !isOwner && (c = c._parentComponent)) {\n\t\tisOwner = c.constructor === vnode.nodeName;\n\t}\n\n\tif (c && isOwner && (!mountAll || c._component)) {\n\t\tsetComponentProps(c, props, 3, context, mountAll);\n\t\tdom = c.base;\n\t} else {\n\t\tif (originalComponent && !isDirectOwner) {\n\t\t\tunmountComponent(originalComponent);\n\t\t\tdom = oldDom = null;\n\t\t}\n\n\t\tc = createComponent(vnode.nodeName, props, context);\n\t\tif (dom && !c.nextBase) {\n\t\t\tc.nextBase = dom;\n\n\t\t\toldDom = null;\n\t\t}\n\t\tsetComponentProps(c, props, 1, context, mountAll);\n\t\tdom = c.base;\n\n\t\tif (oldDom && dom !== oldDom) {\n\t\t\toldDom._component = null;\n\t\t\trecollectNodeTree(oldDom, false);\n\t\t}\n\t}\n\n\treturn dom;\n}\n\nfunction unmountComponent(component) {\n\tif (options.beforeUnmount) options.beforeUnmount(component);\n\n\tvar base = component.base;\n\n\tcomponent._disable = true;\n\n\tif (component.componentWillUnmount) component.componentWillUnmount();\n\n\tcomponent.base = null;\n\n\tvar inner = component._component;\n\tif (inner) {\n\t\tunmountComponent(inner);\n\t} else if (base) {\n\t\tif (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);\n\n\t\tcomponent.nextBase = base;\n\n\t\tremoveNode(base);\n\t\trecyclerComponents.push(component);\n\n\t\tremoveChildren(base);\n\t}\n\n\tapplyRef(component.__ref, null);\n}\n\nfunction Component(props, context) {\n\tthis._dirty = true;\n\n\tthis.context = context;\n\n\tthis.props = props;\n\n\tthis.state = this.state || {};\n\n\tthis._renderCallbacks = [];\n}\n\nextend(Component.prototype, {\n\tsetState: function setState(state, callback) {\n\t\tif (!this.prevState) this.prevState = this.state;\n\t\tthis.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);\n\t\tif (callback) this._renderCallbacks.push(callback);\n\t\tenqueueRender(this);\n\t},\n\tforceUpdate: function forceUpdate(callback) {\n\t\tif (callback) this._renderCallbacks.push(callback);\n\t\trenderComponent(this, 2);\n\t},\n\trender: function render() {}\n});\n\nfunction render(vnode, parent, merge) {\n  return diff(merge, vnode, {}, false, parent, false);\n}\n\nfunction createRef() {\n\treturn {};\n}\n\nvar preact = {\n\th: h,\n\tcreateElement: h,\n\tcloneElement: cloneElement,\n\tcreateRef: createRef,\n\tComponent: Component,\n\trender: render,\n\trerender: rerender,\n\toptions: options\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (preact);\n\n//# sourceMappingURL=preact.mjs.map\n\n\n//# sourceURL=webpack:///./node_modules/preact/dist/preact.mjs?");

/***/ }),

/***/ "./node_modules/unistore/dist/unistore.es.js":
/*!***************************************************!*\
  !*** ./node_modules/unistore/dist/unistore.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction n(n,t){for(var r in t)n[r]=t[r];return n}/* harmony default export */ __webpack_exports__[\"default\"] = (function(t){var r=[];function u(n){for(var t=[],u=0;u<r.length;u++)r[u]===n?n=null:t.push(r[u]);r=t}function e(u,e,f){t=e?u:n(n({},t),u);for(var i=r,o=0;o<i.length;o++)i[o](t,f)}return t=t||{},{action:function(n){function r(t){e(t,!1,n)}return function(){for(var u=arguments,e=[t],f=0;f<arguments.length;f++)e.push(u[f]);var i=n.apply(this,e);if(null!=i)return i.then?i.then(r):r(i)}},setState:e,subscribe:function(n){return r.push(n),function(){u(n)}},unsubscribe:u,getState:function(){return t}}});;\n//# sourceMappingURL=unistore.es.js.map\n\n\n//# sourceURL=webpack:///./node_modules/unistore/dist/unistore.es.js?");

/***/ }),

/***/ "./node_modules/unistore/preact.js":
/*!*****************************************!*\
  !*** ./node_modules/unistore/preact.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var t=__webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.mjs\");function n(t,n){for(var r in n)t[r]=n[r];return t}function r(t){this.getChildContext=function(){return{store:t.store}}}r.prototype.render=function(t){return t.children[0]},exports.connect=function(r,e){var o;return\"function\"!=typeof r&&(\"string\"==typeof(o=r||[])&&(o=o.split(/\\s*,\\s*/)),r=function(t){for(var n={},r=0;r<o.length;r++)n[o[r]]=t[o[r]];return n}),function(o){function i(i,u){var c=this,f=u.store,s=r(f?f.getState():{},i),a=e?function(t,n){\"function\"==typeof t&&(t=t(n));var r={};for(var e in t)r[e]=n.action(t[e]);return r}(e,f):{store:f},p=function(){var t=r(f?f.getState():{},c.props);for(var n in t)if(t[n]!==s[n])return s=t,c.setState(null);for(var e in s)if(!(e in t))return s=t,c.setState(null)};this.componentDidMount=function(){f.subscribe(p)},this.componentWillUnmount=function(){f.unsubscribe(p)},this.render=function(r){return t.h(o,n(n(n({},a),r),s))}}return(i.prototype=new t.Component).constructor=i}},exports.Provider=r;\n//# sourceMappingURL=preact.js.map\n\n\n//# sourceURL=webpack:///./node_modules/unistore/preact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var unistore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unistore */ \"./node_modules/unistore/dist/unistore.es.js\");\n/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ \"./node_modules/unistore/preact.js\");\n/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);\nconst { createElement, div, p, button } = __webpack_require__(/*! preact-hyperscript */ \"./node_modules/preact-hyperscript/lib/index.js\");\nconst { render, Component } = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.mjs\");\nconst h = createElement;\n\n\n\nlet store = Object(unistore__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nlet actions = store => ({});\n\nconst App = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])('', actions)(\n  () => {\n    return (\n      div([ ])\n    );\n  }\n);\n\nrender(\n  h(unistore_preact__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], { store: store }, [\n    div(\n      [\n        h(App),\n      ])]),\n  document.getElementById('app')\n);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });