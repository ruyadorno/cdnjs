(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "redux"], factory);
	else if(typeof exports === 'object')
		exports["ReduxForm"] = factory(require("react"), require("react-redux"), require("redux"));
	else
		root["ReduxForm"] = factory(root["React"], root["ReactRedux"], root["Redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_104__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.values = exports.untouch = exports.touch = exports.SubmissionError = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.setSubmitFailed = exports.reset = exports.propTypes = exports.initialize = exports.reduxForm = exports.reducer = exports.formValueSelector = exports.focus = exports.FieldArray = exports.Field = exports.destroy = exports.change = exports.blur = exports.arrayUnshift = exports.arraySwap = exports.arraySplice = exports.arrayShift = exports.arrayRemoveAll = exports.arrayRemove = exports.arrayPush = exports.arrayPop = exports.arrayMove = exports.arrayInsert = exports.actionTypes = undefined;

	var _createAll2 = __webpack_require__(37);

	var _createAll3 = _interopRequireDefault(_createAll2);

	var _plain = __webpack_require__(2);

	var _plain2 = _interopRequireDefault(_plain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _createAll = (0, _createAll3.default)(_plain2.default);

	var actionTypes = _createAll.actionTypes;
	var arrayInsert = _createAll.arrayInsert;
	var arrayMove = _createAll.arrayMove;
	var arrayPop = _createAll.arrayPop;
	var arrayPush = _createAll.arrayPush;
	var arrayRemove = _createAll.arrayRemove;
	var arrayRemoveAll = _createAll.arrayRemoveAll;
	var arrayShift = _createAll.arrayShift;
	var arraySplice = _createAll.arraySplice;
	var arraySwap = _createAll.arraySwap;
	var arrayUnshift = _createAll.arrayUnshift;
	var blur = _createAll.blur;
	var change = _createAll.change;
	var destroy = _createAll.destroy;
	var Field = _createAll.Field;
	var FieldArray = _createAll.FieldArray;
	var focus = _createAll.focus;
	var formValueSelector = _createAll.formValueSelector;
	var reducer = _createAll.reducer;
	var reduxForm = _createAll.reduxForm;
	var initialize = _createAll.initialize;
	var propTypes = _createAll.propTypes;
	var reset = _createAll.reset;
	var setSubmitFailed = _createAll.setSubmitFailed;
	var startAsyncValidation = _createAll.startAsyncValidation;
	var startSubmit = _createAll.startSubmit;
	var stopAsyncValidation = _createAll.stopAsyncValidation;
	var stopSubmit = _createAll.stopSubmit;
	var SubmissionError = _createAll.SubmissionError;
	var touch = _createAll.touch;
	var untouch = _createAll.untouch;
	var values = _createAll.values;
	exports.actionTypes = actionTypes;
	exports.arrayInsert = arrayInsert;
	exports.arrayMove = arrayMove;
	exports.arrayPop = arrayPop;
	exports.arrayPush = arrayPush;
	exports.arrayRemove = arrayRemove;
	exports.arrayRemoveAll = arrayRemoveAll;
	exports.arrayShift = arrayShift;
	exports.arraySplice = arraySplice;
	exports.arraySwap = arraySwap;
	exports.arrayUnshift = arrayUnshift;
	exports.blur = blur;
	exports.change = change;
	exports.destroy = destroy;
	exports.Field = Field;
	exports.FieldArray = FieldArray;
	exports.focus = focus;
	exports.formValueSelector = formValueSelector;
	exports.reducer = reducer;
	exports.reduxForm = reduxForm;
	exports.initialize = initialize;
	exports.propTypes = propTypes;
	exports.reset = reset;
	exports.setSubmitFailed = setSubmitFailed;
	exports.startAsyncValidation = startAsyncValidation;
	exports.startSubmit = startSubmit;
	exports.stopAsyncValidation = stopAsyncValidation;
	exports.stopSubmit = stopSubmit;
	exports.SubmissionError = SubmissionError;
	exports.touch = touch;
	exports.untouch = untouch;
	exports.values = values;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _some2 = __webpack_require__(100);

	var _some3 = _interopRequireDefault(_some2);

	var _splice = __webpack_require__(57);

	var _splice2 = _interopRequireDefault(_splice);

	var _getIn = __webpack_require__(22);

	var _getIn2 = _interopRequireDefault(_getIn);

	var _setIn = __webpack_require__(56);

	var _setIn2 = _interopRequireDefault(_setIn);

	var _deepEqual = __webpack_require__(54);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _deleteIn = __webpack_require__(55);

	var _deleteIn2 = _interopRequireDefault(_deleteIn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var structure = {
	  empty: {},
	  getIn: _getIn2.default,
	  setIn: _setIn2.default,
	  deepEqual: _deepEqual2.default,
	  deleteIn: _deleteIn2.default,
	  fromJS: function fromJS(value) {
	    return value;
	  },
	  size: function size(array) {
	    return array ? array.length : 0;
	  },
	  some: _some3.default,
	  splice: _splice2.default
	};

	exports.default = structure;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(95);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(79);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103)(module), (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(91);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(71),
	    copyArray = __webpack_require__(80),
	    isArray = __webpack_require__(30),
	    isSymbol = __webpack_require__(96),
	    stringToPath = __webpack_require__(89),
	    toKey = __webpack_require__(90);

	/**
	 * Converts `value` to a property path array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Util
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the new property path array.
	 * @example
	 *
	 * _.toPath('a.b.c');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toPath('a[0].b.c');
	 * // => ['a', '0', 'b', 'c']
	 *
	 * var path = ['a', 'b', 'c'],
	 *     newPath = _.toPath(path);
	 *
	 * console.log(newPath);
	 * // => ['a', 'b', 'c']
	 *
	 * console.log(path === newPath);
	 * // => false
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return arrayMap(value, toKey);
	  }
	  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
	}

	module.exports = toPath;


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ARRAY_INSERT = exports.ARRAY_INSERT = 'redux-form/ARRAY_INSERT';
	var ARRAY_MOVE = exports.ARRAY_MOVE = 'redux-form/ARRAY_MOVE';
	var ARRAY_POP = exports.ARRAY_POP = 'redux-form/ARRAY_POP';
	var ARRAY_PUSH = exports.ARRAY_PUSH = 'redux-form/ARRAY_PUSH';
	var ARRAY_REMOVE = exports.ARRAY_REMOVE = 'redux-form/ARRAY_REMOVE';
	var ARRAY_REMOVE_ALL = exports.ARRAY_REMOVE_ALL = 'redux-form/ARRAY_REMOVE_ALL';
	var ARRAY_SHIFT = exports.ARRAY_SHIFT = 'redux-form/ARRAY_SHIFT';
	var ARRAY_SPLICE = exports.ARRAY_SPLICE = 'redux-form/ARRAY_SPLICE';
	var ARRAY_UNSHIFT = exports.ARRAY_UNSHIFT = 'redux-form/ARRAY_UNSHIFT';
	var ARRAY_SWAP = exports.ARRAY_SWAP = 'redux-form/ARRAY_SWAP';
	var BLUR = exports.BLUR = 'redux-form/BLUR';
	var CHANGE = exports.CHANGE = 'redux-form/CHANGE';
	var DESTROY = exports.DESTROY = 'redux-form/DESTROY';
	var FOCUS = exports.FOCUS = 'redux-form/FOCUS';
	var INITIALIZE = exports.INITIALIZE = 'redux-form/INITIALIZE';
	var REGISTER_FIELD = exports.REGISTER_FIELD = 'redux-form/REGISTER_FIELD';
	var RESET = exports.RESET = 'redux-form/RESET';
	var SET_SUBMIT_FAILED = exports.SET_SUBMIT_FAILED = 'redux-form/SET_SUBMIT_FAILED';
	var START_ASYNC_VALIDATION = exports.START_ASYNC_VALIDATION = 'redux-form/START_ASYNC_VALIDATION';
	var START_SUBMIT = exports.START_SUBMIT = 'redux-form/START_SUBMIT';
	var STOP_ASYNC_VALIDATION = exports.STOP_ASYNC_VALIDATION = 'redux-form/STOP_ASYNC_VALIDATION';
	var STOP_SUBMIT = exports.STOP_SUBMIT = 'redux-form/STOP_SUBMIT';
	var TOUCH = exports.TOUCH = 'redux-form/TOUCH';
	var UNREGISTER_FIELD = exports.UNREGISTER_FIELD = 'redux-form/UNREGISTER_FIELD';
	var UNTOUCH = exports.UNTOUCH = 'redux-form/UNTOUCH';

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = isPromise;

	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(74),
	    baseIteratee = __webpack_require__(78);

	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Array|Function|Object|string} [iteratee=_.identity]
	 *  The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);

	  baseForOwn(object, function(value, key, object) {
	    result[key] = iteratee(value, key, object);
	  });
	  return result;
	}

	module.exports = mapValues;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(102);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _es6Error = __webpack_require__(60);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubmissionError = function (_ExtendableError) {
	  _inherits(SubmissionError, _ExtendableError);

	  function SubmissionError(errors) {
	    _classCallCheck(this, SubmissionError);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubmissionError).call(this, 'Submit Validation Failed'));

	    _this.errors = errors;
	    return _this;
	  }

	  return SubmissionError;
	}(_es6Error2.default);

	exports.default = SubmissionError;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.untouch = exports.unregisterField = exports.touch = exports.setSubmitFailed = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.registerField = exports.initialize = exports.focus = exports.destroy = exports.change = exports.blur = exports.arrayUnshift = exports.arraySwap = exports.arraySplice = exports.arrayShift = exports.arrayRemoveAll = exports.arrayRemove = exports.arrayPush = exports.arrayPop = exports.arrayMove = exports.arrayInsert = undefined;

	var _actionTypes = __webpack_require__(8);

	var arrayInsert = exports.arrayInsert = function arrayInsert(form, field, index, value) {
	  return { type: _actionTypes.ARRAY_INSERT, meta: { form: form, field: field, index: index }, payload: value };
	};

	var arrayMove = exports.arrayMove = function arrayMove(form, field, from, to) {
	  return { type: _actionTypes.ARRAY_MOVE, meta: { form: form, field: field, from: from, to: to } };
	};

	var arrayPop = exports.arrayPop = function arrayPop(form, field) {
	  return { type: _actionTypes.ARRAY_POP, meta: { form: form, field: field } };
	};

	var arrayPush = exports.arrayPush = function arrayPush(form, field, value) {
	  return { type: _actionTypes.ARRAY_PUSH, meta: { form: form, field: field }, payload: value };
	};

	var arrayRemove = exports.arrayRemove = function arrayRemove(form, field, index) {
	  return { type: _actionTypes.ARRAY_REMOVE, meta: { form: form, field: field, index: index } };
	};

	var arrayRemoveAll = exports.arrayRemoveAll = function arrayRemoveAll(form, field) {
	  return { type: _actionTypes.ARRAY_REMOVE_ALL, meta: { form: form, field: field } };
	};

	var arrayShift = exports.arrayShift = function arrayShift(form, field) {
	  return { type: _actionTypes.ARRAY_SHIFT, meta: { form: form, field: field } };
	};

	var arraySplice = exports.arraySplice = function arraySplice(form, field, index, removeNum, value) {
	  var action = {
	    type: _actionTypes.ARRAY_SPLICE,
	    meta: { form: form, field: field, index: index, removeNum: removeNum }
	  };
	  if (value !== undefined) {
	    action.payload = value;
	  }
	  return action;
	};

	var arraySwap = exports.arraySwap = function arraySwap(form, field, indexA, indexB) {
	  if (indexA === indexB) {
	    throw new Error('Swap indices cannot be equal');
	  }
	  if (indexA < 0 || indexB < 0) {
	    throw new Error('Swap indices cannot be negative');
	  }
	  return { type: _actionTypes.ARRAY_SWAP, meta: { form: form, field: field, indexA: indexA, indexB: indexB } };
	};

	var arrayUnshift = exports.arrayUnshift = function arrayUnshift(form, field, value) {
	  return { type: _actionTypes.ARRAY_UNSHIFT, meta: { form: form, field: field }, payload: value };
	};

	var blur = exports.blur = function blur(form, field, value, touch) {
	  return { type: _actionTypes.BLUR, meta: { form: form, field: field, touch: touch }, payload: value };
	};

	var change = exports.change = function change(form, field, value, touch) {
	  return { type: _actionTypes.CHANGE, meta: { form: form, field: field, touch: touch }, payload: value };
	};

	var destroy = exports.destroy = function destroy(form) {
	  return { type: _actionTypes.DESTROY, meta: { form: form } };
	};

	var focus = exports.focus = function focus(form, field) {
	  return { type: _actionTypes.FOCUS, meta: { form: form, field: field } };
	};

	var initialize = exports.initialize = function initialize(form, values) {
	  return { type: _actionTypes.INITIALIZE, meta: { form: form }, payload: values };
	};

	var registerField = exports.registerField = function registerField(form, name, type) {
	  return { type: _actionTypes.REGISTER_FIELD, meta: { form: form }, payload: { name: name, type: type } };
	};

	var reset = exports.reset = function reset(form) {
	  return { type: _actionTypes.RESET, meta: { form: form } };
	};

	var startAsyncValidation = exports.startAsyncValidation = function startAsyncValidation(form, field) {
	  return { type: _actionTypes.START_ASYNC_VALIDATION, meta: { form: form, field: field } };
	};

	var startSubmit = exports.startSubmit = function startSubmit(form) {
	  return { type: _actionTypes.START_SUBMIT, meta: { form: form } };
	};

	var stopAsyncValidation = exports.stopAsyncValidation = function stopAsyncValidation(form, errors) {
	  var action = {
	    type: _actionTypes.STOP_ASYNC_VALIDATION,
	    meta: { form: form },
	    payload: errors
	  };
	  if (errors && Object.keys(errors).length) {
	    action.error = true;
	  }
	  return action;
	};

	var stopSubmit = exports.stopSubmit = function stopSubmit(form, errors) {
	  var action = {
	    type: _actionTypes.STOP_SUBMIT,
	    meta: { form: form },
	    payload: errors
	  };
	  if (errors && Object.keys(errors).length) {
	    action.error = true;
	  }
	  return action;
	};

	var setSubmitFailed = exports.setSubmitFailed = function setSubmitFailed(form) {
	  for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    fields[_key - 1] = arguments[_key];
	  }

	  return { type: _actionTypes.SET_SUBMIT_FAILED, meta: { form: form, fields: fields }, error: true };
	};

	var touch = exports.touch = function touch(form) {
	  for (var _len2 = arguments.length, fields = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    fields[_key2 - 1] = arguments[_key2];
	  }

	  return { type: _actionTypes.TOUCH, meta: { form: form, fields: fields } };
	};

	var unregisterField = exports.unregisterField = function unregisterField(form, name) {
	  return { type: _actionTypes.UNREGISTER_FIELD, meta: { form: form }, payload: { name: name } };
	};

	var untouch = exports.untouch = function untouch(form) {
	  for (var _len3 = arguments.length, fields = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    fields[_key3 - 1] = arguments[_key3];
	  }

	  return { type: _actionTypes.UNTOUCH, meta: { form: form, fields: fields } };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dataKey = exports.dataKey = 'value';
	var createOnDragStart = function createOnDragStart(name, value) {
	  return function (event) {
	    event.dataTransfer.setData(dataKey, value);
	  };
	};

	exports.default = createOnDragStart;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isEvent = __webpack_require__(19);

	var _isEvent2 = _interopRequireDefault(_isEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getSelectedValues = function getSelectedValues(options) {
	  var result = [];
	  if (options) {
	    for (var index = 0; index < options.length; index++) {
	      var option = options[index];
	      if (option.selected) {
	        result.push(option.value);
	      }
	    }
	  }
	  return result;
	};

	var getValue = function getValue(event, isReactNative) {
	  if ((0, _isEvent2.default)(event)) {
	    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
	      return event.nativeEvent.text;
	    }
	    if (isReactNative && event.nativeEvent !== undefined) {
	      return event.nativeEvent.text;
	    }
	    var _event$target = event.target;
	    var type = _event$target.type;
	    var value = _event$target.value;
	    var checked = _event$target.checked;
	    var files = _event$target.files;
	    var dataTransfer = event.dataTransfer;

	    if (type === 'checkbox') {
	      return checked;
	    }
	    if (type === 'file') {
	      return files || dataTransfer && dataTransfer.files;
	    }
	    if (type === 'select-multiple') {
	      return getSelectedValues(event.target.options);
	    }
	    if (value !== '' && (type === 'number' || type === 'range')) {
	      return parseFloat(value);
	    }
	    return value;
	  }
	  // not an event, so must be either our value or an object containing our value in the 'value' key
	  return event && event.value !== undefined ? event.value : // extract value from { value: value } structure. https://github.com/nikgraf/belle/issues/58
	  event;
	};

	exports.default = getValue;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isEvent = function isEvent(candidate) {
	  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
	};

	exports.default = isEvent;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isEvent = __webpack_require__(19);

	var _isEvent2 = _interopRequireDefault(_isEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var silenceEvent = function silenceEvent(event) {
	  var is = (0, _isEvent2.default)(event);
	  if (is) {
	    event.preventDefault();
	  }
	  return is;
	};

	exports.default = silenceEvent;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isReactNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';

	exports.default = isReactNative;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toPath2 = __webpack_require__(6);

	var _toPath3 = _interopRequireDefault(_toPath2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var getInWithPath = function getInWithPath(state, first) {
	  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    rest[_key - 2] = arguments[_key];
	  }

	  if (!state) {
	    return state;
	  }
	  var next = state[first];
	  return rest.length ? getInWithPath.apply(undefined, [next].concat(rest)) : next;
	};

	var getIn = function getIn(state, field) {
	  return getInWithPath.apply(undefined, [state].concat(_toConsumableArray((0, _toPath3.default)(field))));
	};

	exports.default = getIn;

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(5);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(5);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(5);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(5);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mapValues2 = __webpack_require__(13);

	var _mapValues3 = _interopRequireDefault(_mapValues2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _reactRedux = __webpack_require__(7);

	var _createFieldProps = __webpack_require__(39);

	var _createFieldProps2 = _interopRequireDefault(_createFieldProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createConnectedField = function createConnectedField(_ref, _ref2, name) {
	  var asyncValidate = _ref.asyncValidate;
	  var blur = _ref.blur;
	  var change = _ref.change;
	  var focus = _ref.focus;
	  var getFormState = _ref.getFormState;
	  var initialValues = _ref.initialValues;
	  var deepEqual = _ref2.deepEqual;
	  var getIn = _ref2.getIn;


	  var propInitialValue = initialValues && getIn(initialValues, name);

	  var ConnectedField = function (_Component) {
	    _inherits(ConnectedField, _Component);

	    function ConnectedField() {
	      _classCallCheck(this, ConnectedField);

	      return _possibleConstructorReturn(this, Object.getPrototypeOf(ConnectedField).apply(this, arguments));
	    }

	    _createClass(ConnectedField, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps) {
	        return !deepEqual(this.props, nextProps);
	      }
	    }, {
	      key: 'isPristine',
	      value: function isPristine() {
	        return this.props.pristine;
	      }
	    }, {
	      key: 'getValue',
	      value: function getValue() {
	        return this.props.value;
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        return this.refs.renderedComponent;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props = this.props;
	        var component = _props.component;
	        var withRef = _props.withRef;

	        var rest = _objectWithoutProperties(_props, ['component', 'withRef']);

	        var props = (0, _createFieldProps2.default)(getIn, name, rest, asyncValidate);
	        if (withRef) {
	          props.ref = 'renderedComponent';
	        }
	        return (0, _react.createElement)(component, props);
	      }
	    }]);

	    return ConnectedField;
	  }(_react.Component);

	  ConnectedField.propTypes = {
	    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	    defaultValue: _react.PropTypes.any,
	    props: _react.PropTypes.object
	  };

	  ConnectedField.contextTypes = {
	    _reduxForm: _react.PropTypes.object
	  };

	  var actions = (0, _mapValues3.default)({ blur: blur, change: change, focus: focus }, function (actionCreator) {
	    return actionCreator.bind(null, name);
	  });
	  var connector = (0, _reactRedux.connect)(function (state, ownProps) {
	    var initial = getIn(getFormState(state), 'initial.' + name) || propInitialValue;
	    var value = getIn(getFormState(state), 'values.' + name);
	    var pristine = value === initial;
	    return {
	      asyncError: getIn(getFormState(state), 'asyncErrors.' + name),
	      asyncValidating: getIn(getFormState(state), 'asyncValidating') === name,
	      dirty: !pristine,
	      pristine: pristine,
	      state: getIn(getFormState(state), 'fields.' + name),
	      submitError: getIn(getFormState(state), 'submitErrors.' + name),
	      value: value,
	      _value: ownProps.value // save value passed in (for checkboxes)
	    };
	  }, actions, undefined, { withRef: true });
	  return connector(ConnectedField);
	};

	exports.default = createConnectedField;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mapValues2 = __webpack_require__(13);

	var _mapValues3 = _interopRequireDefault(_mapValues2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _reactRedux = __webpack_require__(7);

	var _createFieldArrayProps = __webpack_require__(38);

	var _createFieldArrayProps2 = _interopRequireDefault(_createFieldArrayProps);

	var _reactAddonsShallowCompare = __webpack_require__(14);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createConnectedFieldArray = function createConnectedFieldArray(_ref, _ref2, name) {
	  var arrayInsert = _ref.arrayInsert;
	  var arrayMove = _ref.arrayMove;
	  var arrayPop = _ref.arrayPop;
	  var arrayPush = _ref.arrayPush;
	  var arrayRemove = _ref.arrayRemove;
	  var arrayRemoveAll = _ref.arrayRemoveAll;
	  var arrayShift = _ref.arrayShift;
	  var arraySplice = _ref.arraySplice;
	  var arraySwap = _ref.arraySwap;
	  var arrayUnshift = _ref.arrayUnshift;
	  var asyncValidate = _ref.asyncValidate;
	  var blur = _ref.blur;
	  var change = _ref.change;
	  var focus = _ref.focus;
	  var getFormState = _ref.getFormState;
	  var initialValues = _ref.initialValues;
	  var deepEqual = _ref2.deepEqual;
	  var getIn = _ref2.getIn;
	  var size = _ref2.size;


	  var propInitialValue = initialValues && getIn(initialValues, name);

	  var ConnectedFieldArray = function (_Component) {
	    _inherits(ConnectedFieldArray, _Component);

	    function ConnectedFieldArray() {
	      _classCallCheck(this, ConnectedFieldArray);

	      return _possibleConstructorReturn(this, Object.getPrototypeOf(ConnectedFieldArray).apply(this, arguments));
	    }

	    _createClass(ConnectedFieldArray, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps) {
	        return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        return this.refs.renderedComponent;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props = this.props;
	        var component = _props.component;
	        var withRef = _props.withRef;

	        var rest = _objectWithoutProperties(_props, ['component', 'withRef']);

	        var props = (0, _createFieldArrayProps2.default)(getIn, size, name, rest);
	        if (withRef) {
	          props.ref = 'renderedComponent';
	        }
	        return (0, _react.createElement)(component, props);
	      }
	    }, {
	      key: 'dirty',
	      get: function get() {
	        return this.props.dirty;
	      }
	    }, {
	      key: 'pristine',
	      get: function get() {
	        return this.props.pristine;
	      }
	    }, {
	      key: 'value',
	      get: function get() {
	        return this.props.value;
	      }
	    }]);

	    return ConnectedFieldArray;
	  }(_react.Component);

	  ConnectedFieldArray.propTypes = {
	    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	    defaultValue: _react.PropTypes.any,
	    props: _react.PropTypes.object
	  };

	  ConnectedFieldArray.contextTypes = {
	    _reduxForm: _react.PropTypes.object
	  };

	  var actions = (0, _mapValues3.default)({
	    arrayInsert: arrayInsert,
	    arrayMove: arrayMove,
	    arrayPop: arrayPop,
	    arrayPush: arrayPush,
	    arrayRemove: arrayRemove,
	    arrayRemoveAll: arrayRemoveAll,
	    arrayShift: arrayShift,
	    arraySplice: arraySplice,
	    arraySwap: arraySwap,
	    arrayUnshift: arrayUnshift
	  }, function (actionCreator) {
	    return actionCreator.bind(null, name);
	  });
	  var connector = (0, _reactRedux.connect)(function (state) {
	    var initial = getIn(getFormState(state), 'initial.' + name) || propInitialValue;
	    var value = getIn(getFormState(state), 'values.' + name);
	    var pristine = deepEqual(value, initial);
	    return {
	      asyncError: getIn(getFormState(state), 'asyncErrors.' + name + '._error'),
	      dirty: !pristine,
	      pristine: pristine,
	      submitError: getIn(getFormState(state), 'submitErrors.' + name + '._error'),
	      value: value
	    };
	  }, actions, undefined, { withRef: true });
	  return connector(ConnectedFieldArray);
	};

	exports.default = createConnectedFieldArray;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ConnectedField = __webpack_require__(32);

	var _ConnectedField2 = _interopRequireDefault(_ConnectedField);

	var _reactAddonsShallowCompare = __webpack_require__(14);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _plain = __webpack_require__(2);

	var _plain2 = _interopRequireDefault(_plain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var getSyncError = function getSyncError(context, name) {
	  var syncErrors = context._reduxForm.syncErrors;

	  var error = _plain2.default.getIn(syncErrors, name);
	  // Because the error for this field might not be at a level in the error structure where
	  // it can be set directly, it might need to be unwrapped from the _error property
	  return error && error._error ? error._error : error;
	};

	var createField = function createField(_ref) {
	  var deepEqual = _ref.deepEqual;
	  var getIn = _ref.getIn;
	  var setIn = _ref.setIn;

	  var Field = function (_Component) {
	    _inherits(Field, _Component);

	    function Field(props, context) {
	      _classCallCheck(this, Field);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this, props, context));

	      if (!context._reduxForm) {
	        throw new Error('Field must be inside a component decorated with reduxForm()');
	      }
	      _this.ConnectedField = (0, _ConnectedField2.default)(context._reduxForm, {
	        deepEqual: deepEqual,
	        getIn: getIn
	      }, props.name);
	      _this.normalize = _this.normalize.bind(_this);
	      return _this;
	    }

	    _createClass(Field, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	        var nextSyncError = getSyncError(nextContext, nextProps.name);
	        return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState) || this.syncError !== nextSyncError;
	      }
	    }, {
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        this.context._reduxForm.register(this.name, 'Field');
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (this.props.name !== nextProps.name) {
	          // name changed, regenerate connected field
	          this.ConnectedField = (0, _ConnectedField2.default)(this.context._reduxForm, { deepEqual: deepEqual, getIn: getIn }, nextProps.name);
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.context._reduxForm.unregister(this.name);
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to Field');
	        return this.refs.connected.getWrappedInstance().getRenderedComponent();
	      }
	    }, {
	      key: 'normalize',
	      value: function normalize(value) {
	        var normalize = this.props.normalize;

	        if (!normalize) {
	          return value;
	        }
	        var previousValues = this.context._reduxForm.getValues();
	        var previousValue = this.value;
	        var nextValues = setIn(previousValues, this.props.name, value);
	        return normalize(value, previousValue, nextValues, previousValues);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return (0, _react.createElement)(this.ConnectedField, _extends({}, this.props, {
	          normalize: this.normalize,
	          syncError: this.syncError,
	          ref: 'connected'
	        }));
	      }
	    }, {
	      key: 'syncError',
	      get: function get() {
	        return getSyncError(this.context, this.props.name);
	      }
	    }, {
	      key: 'name',
	      get: function get() {
	        return this.props.name;
	      }
	    }, {
	      key: 'dirty',
	      get: function get() {
	        return !this.pristine;
	      }
	    }, {
	      key: 'pristine',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().isPristine();
	      }
	    }, {
	      key: 'value',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().getValue();
	      }
	    }]);

	    return Field;
	  }(_react.Component);

	  Field.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	    defaultValue: _react.PropTypes.any,
	    normalize: _react.PropTypes.func,
	    props: _react.PropTypes.object
	  };
	  Field.contextTypes = {
	    _reduxForm: _react.PropTypes.object
	  };

	  return Field;
	};

	exports.default = createField;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ConnectedFieldArray = __webpack_require__(33);

	var _ConnectedFieldArray2 = _interopRequireDefault(_ConnectedFieldArray);

	var _reactAddonsShallowCompare = __webpack_require__(14);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _plain = __webpack_require__(2);

	var _plain2 = _interopRequireDefault(_plain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var getSyncError = function getSyncError(context, name) {
	  var syncErrors = context._reduxForm.syncErrors;
	  // For an array, the error can _ONLY_ be under _error.
	  // This is why this getSyncError is not the same as the
	  // one in Field.

	  return _plain2.default.getIn(syncErrors, name + '._error');
	};

	var createFieldArray = function createFieldArray(_ref) {
	  var deepEqual = _ref.deepEqual;
	  var getIn = _ref.getIn;
	  var size = _ref.size;

	  var FieldArray = function (_Component) {
	    _inherits(FieldArray, _Component);

	    function FieldArray(props, context) {
	      _classCallCheck(this, FieldArray);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FieldArray).call(this, props, context));

	      if (!context._reduxForm) {
	        throw new Error('FieldArray must be inside a component decorated with reduxForm()');
	      }
	      _this.ConnectedFieldArray = (0, _ConnectedFieldArray2.default)(context._reduxForm, { deepEqual: deepEqual, getIn: getIn, size: size }, props.name);
	      return _this;
	    }

	    _createClass(FieldArray, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	        var nextSyncError = getSyncError(nextContext, nextProps.name);
	        return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState) || this.syncError !== nextSyncError;
	      }
	    }, {
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        this.context._reduxForm.register(this.name, 'FieldArray');
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (this.props.name !== nextProps.name) {
	          // name changed, regenerate connected field
	          this.ConnectedFieldArray = (0, _ConnectedFieldArray2.default)(this.context._reduxForm, {
	            deepEqual: deepEqual,
	            getIn: getIn,
	            size: size
	          }, nextProps.name);
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.context._reduxForm.unregister(this.name);
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to FieldArray');
	        return this.refs.connected.getWrappedInstance().getRenderedComponent();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return (0, _react.createElement)(this.ConnectedFieldArray, _extends({}, this.props, {
	          syncError: this.syncError,
	          ref: 'connected'
	        }));
	      }
	    }, {
	      key: 'syncError',
	      get: function get() {
	        return getSyncError(this.context, this.props.name);
	      }
	    }, {
	      key: 'name',
	      get: function get() {
	        return this.props.name;
	      }
	    }, {
	      key: 'dirty',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().dirty;
	      }
	    }, {
	      key: 'pristine',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().pristine;
	      }
	    }, {
	      key: 'value',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().value;
	      }
	    }]);

	    return FieldArray;
	  }(_react.Component);

	  FieldArray.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.func.isRequired,
	    props: _react.PropTypes.object
	  };
	  FieldArray.contextTypes = {
	    _reduxForm: _react.PropTypes.object
	  };

	  return FieldArray;
	};

	exports.default = createFieldArray;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isPromise = __webpack_require__(10);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var asyncValidation = function asyncValidation(fn, start, stop, field) {
	  start(field);
	  var promise = fn();
	  if (!(0, _isPromise2.default)(promise)) {
	    throw new Error('asyncValidate function passed to reduxForm must return a promise');
	  }
	  var handleErrors = function handleErrors(rejected) {
	    return function (errors) {
	      if (errors && Object.keys(errors).length) {
	        stop(errors);
	        return Promise.reject(errors);
	      } else if (rejected) {
	        stop();
	        throw new Error('Asynchronous validation promise was rejected without errors.');
	      }
	      stop();
	      return Promise.resolve();
	    };
	  };
	  return promise.then(handleErrors(false), handleErrors(true));
	};

	exports.default = asyncValidation;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _reducer = __webpack_require__(52);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _reduxForm = __webpack_require__(53);

	var _reduxForm2 = _interopRequireDefault(_reduxForm);

	var _Field = __webpack_require__(34);

	var _Field2 = _interopRequireDefault(_Field);

	var _FieldArray = __webpack_require__(35);

	var _FieldArray2 = _interopRequireDefault(_FieldArray);

	var _formValueSelector = __webpack_require__(47);

	var _formValueSelector2 = _interopRequireDefault(_formValueSelector);

	var _values = __webpack_require__(59);

	var _values2 = _interopRequireDefault(_values);

	var _SubmissionError = __webpack_require__(15);

	var _SubmissionError2 = _interopRequireDefault(_SubmissionError);

	var _propTypes = __webpack_require__(51);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _actions = __webpack_require__(16);

	var actions = _interopRequireWildcard(_actions);

	var _actionTypes = __webpack_require__(8);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createAll = function createAll(structure) {
	  return _extends({
	    // separate out field actions
	    actionTypes: actionTypes
	  }, actions, {
	    Field: (0, _Field2.default)(structure),
	    FieldArray: (0, _FieldArray2.default)(structure),
	    formValueSelector: (0, _formValueSelector2.default)(structure),
	    propTypes: _propTypes2.default,
	    reduxForm: (0, _reduxForm2.default)(structure),
	    reducer: (0, _reducer2.default)(structure),
	    SubmissionError: _SubmissionError2.default,
	    values: (0, _values2.default)(structure)
	  });
	};

	exports.default = createAll;

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var createFieldArrayProps = function createFieldArrayProps(getIn, size, name, _ref) {
	  var arrayInsert = _ref.arrayInsert;
	  var arrayMove = _ref.arrayMove;
	  var arrayPop = _ref.arrayPop;
	  var arrayPush = _ref.arrayPush;
	  var arrayRemove = _ref.arrayRemove;
	  var arrayRemoveAll = _ref.arrayRemoveAll;
	  var arrayShift = _ref.arrayShift;
	  var arraySplice = _ref.arraySplice;
	  var arraySwap = _ref.arraySwap;
	  var arrayUnshift = _ref.arrayUnshift;
	  var asyncError = _ref.asyncError;
	  var // eslint-disable-line no-unused-vars
	  dirty = _ref.dirty;
	  var pristine = _ref.pristine;
	  var submitError = _ref.submitError;
	  var submitFailed = _ref.submitFailed;
	  var // eslint-disable-line no-unused-vars
	  syncError = _ref.syncError;
	  var value = _ref.value;
	  var props = _ref.props;

	  var rest = _objectWithoutProperties(_ref, ["arrayInsert", "arrayMove", "arrayPop", "arrayPush", "arrayRemove", "arrayRemoveAll", "arrayShift", "arraySplice", "arraySwap", "arrayUnshift", "asyncError", "dirty", "pristine", "submitError", "submitFailed", "syncError", "value", "props"]);

	  var error = syncError || asyncError || submitError;
	  var length = size(value);
	  return _extends({
	    fields: {
	      dirty: dirty,
	      error: error,
	      forEach: function forEach(callback) {
	        return (value || []).forEach(function (item, index) {
	          return callback(name + "[" + index + "]", index);
	        });
	      },
	      insert: arrayInsert,
	      invalid: !!error,
	      length: length,
	      map: function map(callback) {
	        return (value || []).map(function (item, index) {
	          return callback(name + "[" + index + "]", index);
	        });
	      },
	      move: arrayMove,
	      pop: function pop() {
	        arrayPop();
	        return getIn(value, length - 1);
	      },
	      pristine: pristine,
	      push: arrayPush,
	      remove: arrayRemove,
	      removeAll: arrayRemoveAll,
	      shift: function shift() {
	        arrayShift();
	        return getIn(value, 0);
	      },
	      swap: arraySwap,
	      unshift: arrayUnshift,
	      valid: !error
	    }
	  }, props, rest);
	};

	exports.default = createFieldArrayProps;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _noop2 = __webpack_require__(99);

	var _noop3 = _interopRequireDefault(_noop2);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createOnBlur = __webpack_require__(42);

	var _createOnBlur2 = _interopRequireDefault(_createOnBlur);

	var _createOnChange = __webpack_require__(43);

	var _createOnChange2 = _interopRequireDefault(_createOnChange);

	var _createOnDragStart = __webpack_require__(17);

	var _createOnDragStart2 = _interopRequireDefault(_createOnDragStart);

	var _createOnDrop = __webpack_require__(44);

	var _createOnDrop2 = _interopRequireDefault(_createOnDrop);

	var _createOnFocus = __webpack_require__(45);

	var _createOnFocus2 = _interopRequireDefault(_createOnFocus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var processProps = function processProps(props, _value) {
	  var type = props.type;
	  var value = props.value;

	  var rest = _objectWithoutProperties(props, ['type', 'value']);

	  if (type === 'checkbox') {
	    return _extends({}, rest, {
	      checked: !!value,
	      type: type
	    });
	  }
	  if (type === 'radio') {
	    return _extends({}, rest, {
	      checked: value === _value,
	      type: type,
	      value: _value
	    });
	  }
	  if (type === 'select-multiple') {
	    return _extends({}, rest, {
	      type: type,
	      value: value || []
	    });
	  }
	  return props;
	};

	var createFieldProps = function createFieldProps(getIn, name, _ref) {
	  var asyncError = _ref.asyncError;
	  var blur = _ref.blur;
	  var change = _ref.change;
	  var _ref$defaultValue = _ref.defaultValue;
	  var defaultValue = _ref$defaultValue === undefined ? '' : _ref$defaultValue;
	  var dirty = _ref.dirty;
	  var focus = _ref.focus;
	  var normalize = _ref.normalize;
	  var pristine = _ref.pristine;
	  var props = _ref.props;
	  var state = _ref.state;
	  var submitError = _ref.submitError;
	  var value = _ref.value;
	  var _value = _ref._value;
	  var syncError = _ref.syncError;

	  var rest = _objectWithoutProperties(_ref, ['asyncError', 'blur', 'change', 'defaultValue', 'dirty', 'focus', 'normalize', 'pristine', 'props', 'state', 'submitError', 'value', '_value', 'syncError']);

	  var asyncValidate = arguments.length <= 3 || arguments[3] === undefined ? _noop3.default : arguments[3];

	  var error = syncError || asyncError || submitError;
	  var onChange = (0, _createOnChange2.default)(change, normalize);
	  return processProps(_extends({
	    active: state && !!getIn(state, 'active'),
	    dirty: dirty,
	    error: error,
	    invalid: !!error,
	    name: name,
	    onBlur: (0, _createOnBlur2.default)(blur, normalize, asyncValidate.bind(null, name)),
	    onChange: onChange,
	    onDragStart: (0, _createOnDragStart2.default)(name, value),
	    onDrop: (0, _createOnDrop2.default)(name, change),
	    onFocus: (0, _createOnFocus2.default)(name, focus),
	    onUpdate: onChange,
	    pristine: pristine,
	    touched: !!(state && getIn(state, 'touched')),
	    valid: !error,
	    value: value == null ? defaultValue : value,
	    visited: state && !!getIn(state, 'visited')
	  }, props, rest), _value);
	};

	exports.default = createFieldProps;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var defaultShouldAsyncValidate = function defaultShouldAsyncValidate(_ref) {
	  var initialized = _ref.initialized;
	  var trigger = _ref.trigger;
	  var
	  // blurredField,  // not used in default implementation
	  pristine = _ref.pristine;
	  var syncValidationPasses = _ref.syncValidationPasses;

	  if (!syncValidationPasses) {
	    return false;
	  }
	  switch (trigger) {
	    case 'blur':
	      // blurring
	      return true;
	    case 'submit':
	      // submitting, so only async validate if form is dirty or was never initialized
	      // conversely, DON'T async validate if the form is pristine just as it was initialized
	      return !pristine || !initialized;
	    default:
	      return false;
	  }
	};

	exports.default = defaultShouldAsyncValidate;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toPath2 = __webpack_require__(6);

	var _toPath3 = _interopRequireDefault(_toPath2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createDeleteInWithCleanUp = function createDeleteInWithCleanUp(_ref) {
	  var deepEqual = _ref.deepEqual;
	  var empty = _ref.empty;
	  var getIn = _ref.getIn;
	  var deleteIn = _ref.deleteIn;
	  var setIn = _ref.setIn;


	  var deleteInWithCleanUp = function deleteInWithCleanUp(state, path) {
	    if (path[path.length - 1] === ']') {
	      // array path
	      var pathTokens = (0, _toPath3.default)(path);
	      pathTokens.pop();
	      var parent = getIn(state, pathTokens.join('.'));
	      return parent ? setIn(state, path, undefined) : state;
	    }
	    var result = deleteIn(state, path);
	    var dotIndex = path.lastIndexOf('.');
	    if (dotIndex > 0) {
	      var parentPath = path.substring(0, dotIndex);
	      if (parentPath[parentPath.length - 1] !== ']') {
	        var _parent = getIn(result, parentPath);
	        if (deepEqual(_parent, empty)) {
	          return deleteInWithCleanUp(result, parentPath);
	        }
	      }
	    }
	    return result;
	  };

	  return deleteInWithCleanUp;
	};

	exports.default = createDeleteInWithCleanUp;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getValue = __webpack_require__(18);

	var _getValue2 = _interopRequireDefault(_getValue);

	var _isReactNative = __webpack_require__(21);

	var _isReactNative2 = _interopRequireDefault(_isReactNative);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createOnBlur = function createOnBlur(blur, normalize, afterBlur) {
	  return function (event) {
	    var value = normalize((0, _getValue2.default)(event, _isReactNative2.default));
	    blur(value);
	    if (afterBlur) {
	      afterBlur(value);
	    }
	  };
	};
	exports.default = createOnBlur;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getValue = __webpack_require__(18);

	var _getValue2 = _interopRequireDefault(_getValue);

	var _isReactNative = __webpack_require__(21);

	var _isReactNative2 = _interopRequireDefault(_isReactNative);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createOnChange = function createOnChange(change, normalize) {
	  return function (event) {
	    return change(normalize((0, _getValue2.default)(event, _isReactNative2.default)));
	  };
	};

	exports.default = createOnChange;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createOnDragStart = __webpack_require__(17);

	var createOnDrop = function createOnDrop(name, change) {
	  return function (event) {
	    change(name, event.dataTransfer.getData(_createOnDragStart.dataKey));
	  };
	};
	exports.default = createOnDrop;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createOnFocus = function createOnFocus(name, focus) {
	  return function () {
	    return focus(name);
	  };
	};
	exports.default = createOnFocus;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _silenceEvent = __webpack_require__(20);

	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var silenceEvents = function silenceEvents(fn) {
	  return function (event) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return (0, _silenceEvent2.default)(event) ? fn.apply(undefined, args) : fn.apply(undefined, [event].concat(args));
	  };
	};

	exports.default = silenceEvents;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _plain = __webpack_require__(2);

	var _plain2 = _interopRequireDefault(_plain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createFormValueSelector = function createFormValueSelector(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length <= 1 || arguments[1] === undefined ? function (state) {
	      return getIn(state, 'form');
	    } : arguments[1];

	    (0, _invariant2.default)(form, 'Form value must be specified');
	    return function (state) {
	      for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        fields[_key - 1] = arguments[_key];
	      }

	      (0, _invariant2.default)(fields.length, 'No fields specified');
	      return fields.length === 1 ?
	      // only selecting one field, so return its value
	      getIn(getFormState(state), form + '.values.' + fields[0]) :
	      // selecting many fields, so return an object of field values
	      fields.reduce(function (accumulator, field) {
	        var value = getIn(getFormState(state), form + '.values.' + field);
	        return value === undefined ? accumulator : _plain2.default.setIn(accumulator, field, value);
	      }, {});
	    };
	  };
	};

	exports.default = createFormValueSelector;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isPromise = __webpack_require__(10);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _SubmissionError = __webpack_require__(15);

	var _SubmissionError2 = _interopRequireDefault(_SubmissionError);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var handleSubmit = function handleSubmit(submit, props, valid, asyncValidate, fields) {
	  var dispatch = props.dispatch;
	  var onSubmitFail = props.onSubmitFail;
	  var onSubmitSuccess = props.onSubmitSuccess;
	  var startSubmit = props.startSubmit;
	  var stopSubmit = props.stopSubmit;
	  var setSubmitFailed = props.setSubmitFailed;
	  var syncErrors = props.syncErrors;
	  var touch = props.touch;
	  var values = props.values;


	  touch.apply(undefined, _toConsumableArray(fields)); // mark all fields as touched

	  if (valid) {
	    var doSubmit = function doSubmit() {
	      var result = void 0;
	      try {
	        result = submit(values, dispatch);
	      } catch (submitError) {
	        var error = submitError instanceof _SubmissionError2.default ? submitError.errors : undefined;
	        if (onSubmitFail) {
	          onSubmitFail(error, dispatch);
	        }
	        return error;
	      }
	      if ((0, _isPromise2.default)(result)) {
	        startSubmit();
	        return result.then(function (submitResult) {
	          stopSubmit();
	          if (onSubmitSuccess) {
	            onSubmitSuccess(submitResult, dispatch);
	          }
	          return submitResult;
	        }, function (submitError) {
	          var error = submitError instanceof _SubmissionError2.default ? submitError.errors : undefined;
	          stopSubmit(error);
	          if (onSubmitFail) {
	            onSubmitFail(error, dispatch);
	          }
	          return Promise.reject(error);
	        });
	      }
	      if (onSubmitSuccess) {
	        onSubmitSuccess(result, dispatch);
	      }
	      return result;
	    };

	    var asyncValidateResult = asyncValidate && asyncValidate();
	    if (asyncValidateResult) {
	      return asyncValidateResult.then(doSubmit, function (asyncErrors) {
	        setSubmitFailed.apply(undefined, _toConsumableArray(fields));
	        if (onSubmitFail) {
	          onSubmitFail(asyncErrors, dispatch);
	        }
	        return Promise.reject(asyncErrors);
	      });
	    } else {
	      return doSubmit();
	    }
	  } else {
	    setSubmitFailed.apply(undefined, _toConsumableArray(fields));
	    if (onSubmitFail) {
	      onSubmitFail(syncErrors, dispatch);
	    }
	    // Can't know here if submission is sync or async, so we guess async (the most common case) and
	    // return the sync errors in a promise.
	    return Promise.reject(syncErrors);
	  }
	};

	exports.default = handleSubmit;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIn = __webpack_require__(22);

	var _getIn2 = _interopRequireDefault(_getIn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getErrorKey = function getErrorKey(name, type) {
	  switch (type) {
	    case 'Field':
	      return name;
	    case 'FieldArray':
	      return name + '._error';
	  }
	};

	var createHasError = function createHasError(_ref) {
	  var getIn = _ref.getIn;

	  var hasError = function hasError(field, syncErrors, asyncErrors, submitErrors) {
	    var name = getIn(field, 'name');
	    var type = getIn(field, 'type');
	    if (!syncErrors && !asyncErrors && !submitErrors) {
	      return false;
	    }
	    var errorKey = getErrorKey(name, type);
	    var syncError = (0, _getIn2.default)(syncErrors, errorKey);
	    if (syncError && typeof syncError === 'string') {
	      return true;
	    }
	    var asyncError = getIn(asyncErrors, errorKey);
	    if (asyncError && typeof asyncError === 'string') {
	      return true;
	    }
	    var submitError = getIn(submitErrors, errorKey);
	    if (submitError && typeof submitError === 'string') {
	      return true;
	    }

	    return false;
	  };
	  return hasError;
	};

	exports.default = createHasError;

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createHasErrors = function createHasErrors(_ref) {
	  var getIn = _ref.getIn;

	  var hasErrors = function hasErrors(errors) {
	    if (!errors) {
	      return false;
	    }
	    var globalError = getIn(errors, '_error');
	    if (globalError) {
	      return true;
	    }
	    if (typeof errors === 'string') {
	      return !!errors;
	    }
	    return false;
	  };
	  return hasErrors;
	};

	exports.default = createHasErrors;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.propTypes = undefined;

	var _react = __webpack_require__(1);

	var any = _react.PropTypes.any;
	var bool = _react.PropTypes.bool;
	var func = _react.PropTypes.func;
	var propTypes = exports.propTypes = {
	  // State:
	  asyncValidating: bool.isRequired, // true if async validation is running
	  autofilled: bool, // true if set programmatically by autofill
	  dirty: bool.isRequired, // true if any values are different from initialValues
	  error: any, // form-wide error from '_error' key in validation result
	  invalid: bool.isRequired, // true if there are any validation errors
	  pristine: bool.isRequired, // true if the values are the same as initialValues
	  submitting: bool.isRequired, // true if the form is in the process of being submitted
	  submitFailed: bool.isRequired, // true if the form was submitted and failed for any reason
	  valid: bool.isRequired, // true if there are no validation errors

	  // Actions:
	  asyncValidate: func.isRequired, // function to trigger async validation
	  destroy: func.isRequired, // action to destroy the form's data in Redux
	  handleSubmit: func.isRequired, // function to submit the form
	  initialize: func.isRequired, // action to initialize form data
	  reset: func.isRequired, // action to reset the form data to previously initialized values
	  touch: func.isRequired, // action to mark fields as touched
	  untouch: func.isRequired // action to mark fields as untouched
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actionTypes = __webpack_require__(8);

	var _deleteInWithCleanUp = __webpack_require__(41);

	var _deleteInWithCleanUp2 = _interopRequireDefault(_deleteInWithCleanUp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var createReducer = function createReducer(structure) {
	  var _behaviors;

	  var splice = structure.splice;
	  var empty = structure.empty;
	  var getIn = structure.getIn;
	  var setIn = structure.setIn;
	  var deleteIn = structure.deleteIn;
	  var fromJS = structure.fromJS;
	  var size = structure.size;
	  var some = structure.some;

	  var deleteInWithCleanUp = (0, _deleteInWithCleanUp2.default)(structure);
	  var doSplice = function doSplice(state, key, field, index, removeNum, value, force) {
	    var existing = getIn(state, key + '.' + field);
	    return existing || force ? setIn(state, key + '.' + field, splice(existing, index, removeNum, value)) : state;
	  };
	  var rootKeys = ['values', 'fields', 'submitErrors', 'asyncErrors'];
	  var arraySplice = function arraySplice(state, field, index, removeNum, value) {
	    var result = state;
	    result = doSplice(result, 'values', field, index, removeNum, value, true);
	    result = doSplice(result, 'fields', field, index, removeNum, empty);
	    result = doSplice(result, 'submitErrors', field, index, removeNum, empty);
	    result = doSplice(result, 'asyncErrors', field, index, removeNum, empty);
	    return result;
	  };

	  var behaviors = (_behaviors = {}, _defineProperty(_behaviors, _actionTypes.ARRAY_INSERT, function (state, _ref) {
	    var _ref$meta = _ref.meta;
	    var field = _ref$meta.field;
	    var index = _ref$meta.index;
	    var payload = _ref.payload;

	    return arraySplice(state, field, index, 0, payload);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_MOVE, function (state, _ref2) {
	    var _ref2$meta = _ref2.meta;
	    var field = _ref2$meta.field;
	    var from = _ref2$meta.from;
	    var to = _ref2$meta.to;

	    var array = getIn(state, 'values.' + field);
	    var length = array ? size(array) : 0;
	    var result = state;
	    if (length) {
	      rootKeys.forEach(function (key) {
	        var path = key + '.' + field;
	        if (getIn(result, path)) {
	          var value = getIn(result, path + '[' + from + ']');
	          result = setIn(result, path, splice(getIn(result, path), from, 1)); // remove
	          result = setIn(result, path, splice(getIn(result, path), to, 0, value)); // insert
	        }
	      });
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_POP, function (state, _ref3) {
	    var field = _ref3.meta.field;

	    var array = getIn(state, 'values.' + field);
	    var length = array ? size(array) : 0;
	    return length ? arraySplice(state, field, length - 1, 1) : state;
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_PUSH, function (state, _ref4) {
	    var field = _ref4.meta.field;
	    var payload = _ref4.payload;

	    var array = getIn(state, 'values.' + field);
	    var length = array ? size(array) : 0;
	    return arraySplice(state, field, length, 0, payload);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_REMOVE, function (state, _ref5) {
	    var _ref5$meta = _ref5.meta;
	    var field = _ref5$meta.field;
	    var index = _ref5$meta.index;

	    return arraySplice(state, field, index, 1);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_REMOVE_ALL, function (state, _ref6) {
	    var field = _ref6.meta.field;

	    var array = getIn(state, 'values.' + field);
	    var length = array ? size(array) : 0;
	    return length ? arraySplice(state, field, 0, length) : state;
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SHIFT, function (state, _ref7) {
	    var field = _ref7.meta.field;

	    return arraySplice(state, field, 0, 1);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SPLICE, function (state, _ref8) {
	    var _ref8$meta = _ref8.meta;
	    var field = _ref8$meta.field;
	    var index = _ref8$meta.index;
	    var removeNum = _ref8$meta.removeNum;
	    var payload = _ref8.payload;

	    return arraySplice(state, field, index, removeNum, payload);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SWAP, function (state, _ref9) {
	    var _ref9$meta = _ref9.meta;
	    var field = _ref9$meta.field;
	    var indexA = _ref9$meta.indexA;
	    var indexB = _ref9$meta.indexB;

	    var result = state;
	    rootKeys.forEach(function (key) {
	      var valueA = getIn(result, key + '.' + field + '[' + indexA + ']');
	      var valueB = getIn(result, key + '.' + field + '[' + indexB + ']');
	      if (valueA !== undefined || valueB !== undefined) {
	        result = setIn(result, key + '.' + field + '[' + indexA + ']', valueB);
	        result = setIn(result, key + '.' + field + '[' + indexB + ']', valueA);
	      }
	    });
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_UNSHIFT, function (state, _ref10) {
	    var field = _ref10.meta.field;
	    var payload = _ref10.payload;

	    return arraySplice(state, field, 0, 0, payload);
	  }), _defineProperty(_behaviors, _actionTypes.BLUR, function (state, _ref11) {
	    var _ref11$meta = _ref11.meta;
	    var field = _ref11$meta.field;
	    var touch = _ref11$meta.touch;
	    var payload = _ref11.payload;

	    var result = state;
	    var initial = getIn(result, 'initial.' + field);
	    if (initial === undefined && payload === '') {
	      result = deleteInWithCleanUp(result, 'values.' + field);
	    } else if (payload !== undefined) {
	      result = setIn(result, 'values.' + field, payload);
	    }
	    if (field === getIn(result, 'active')) {
	      result = deleteIn(result, 'active');
	    }
	    result = deleteIn(result, 'fields.' + field + '.active');
	    if (touch) {
	      result = setIn(result, 'fields.' + field + '.touched', true);
	      result = setIn(result, 'anyTouched', true);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.CHANGE, function (state, _ref12) {
	    var _ref12$meta = _ref12.meta;
	    var field = _ref12$meta.field;
	    var touch = _ref12$meta.touch;
	    var payload = _ref12.payload;

	    var result = state;
	    var initial = getIn(result, 'initial.' + field);
	    if (initial === undefined && payload === '') {
	      result = deleteInWithCleanUp(result, 'values.' + field);
	    } else if (payload !== undefined) {
	      result = setIn(result, 'values.' + field, payload);
	    }
	    result = deleteInWithCleanUp(result, 'asyncErrors.' + field);
	    result = deleteInWithCleanUp(result, 'submitErrors.' + field);
	    if (touch) {
	      result = setIn(result, 'fields.' + field + '.touched', true);
	      result = setIn(result, 'anyTouched', true);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.FOCUS, function (state, _ref13) {
	    var field = _ref13.meta.field;

	    var result = state;
	    var previouslyActive = getIn(state, 'active');
	    result = deleteIn(result, 'fields.' + previouslyActive + '.active');
	    result = setIn(result, 'fields.' + field + '.visited', true);
	    result = setIn(result, 'fields.' + field + '.active', true);
	    result = setIn(result, 'active', field);
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.INITIALIZE, function (state, _ref14) {
	    var payload = _ref14.payload;

	    var mapData = fromJS(payload);
	    var result = empty; // clean all field state
	    var registeredFields = getIn(state, 'registeredFields');
	    if (registeredFields) {
	      result = setIn(result, 'registeredFields', registeredFields);
	    }
	    result = setIn(result, 'values', mapData);
	    result = setIn(result, 'initial', mapData);
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.REGISTER_FIELD, function (state, _ref15) {
	    var _ref15$payload = _ref15.payload;
	    var name = _ref15$payload.name;
	    var type = _ref15$payload.type;

	    var result = state;
	    var registeredFields = getIn(result, 'registeredFields');
	    if (some(registeredFields, function (field) {
	      return getIn(field, 'name') === name;
	    })) {
	      return state;
	    }

	    var mapData = fromJS({ name: name, type: type });
	    result = setIn(state, 'registeredFields', splice(registeredFields, size(registeredFields), 0, mapData));
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.RESET, function (state) {
	    var result = empty;
	    var registeredFields = getIn(state, 'registeredFields');
	    if (registeredFields) {
	      result = setIn(result, 'registeredFields', registeredFields);
	    }
	    var values = getIn(state, 'initial');
	    if (values) {
	      result = setIn(result, 'values', values);
	      result = setIn(result, 'initial', values);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.START_ASYNC_VALIDATION, function (state, _ref16) {
	    var field = _ref16.meta.field;

	    return setIn(state, 'asyncValidating', field || true);
	  }), _defineProperty(_behaviors, _actionTypes.START_SUBMIT, function (state) {
	    return setIn(state, 'submitting', true);
	  }), _defineProperty(_behaviors, _actionTypes.STOP_ASYNC_VALIDATION, function (state, _ref17) {
	    var payload = _ref17.payload;

	    var result = state;
	    result = deleteIn(result, 'asyncValidating');
	    if (payload && Object.keys(payload).length) {
	      var _error = payload._error;

	      var fieldErrors = _objectWithoutProperties(payload, ['_error']);

	      if (_error) {
	        result = setIn(result, 'error', _error);
	      }
	      if (Object.keys(fieldErrors).length) {
	        result = setIn(result, 'asyncErrors', fromJS(fieldErrors));
	      } else {
	        result = deleteIn(result, 'asyncErrors');
	      }
	    } else {
	      result = deleteIn(result, 'error');
	      result = deleteIn(result, 'asyncErrors');
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.STOP_SUBMIT, function (state, _ref18) {
	    var payload = _ref18.payload;

	    var result = state;
	    result = deleteIn(result, 'submitting');
	    result = deleteIn(result, 'submitFailed');
	    if (payload && Object.keys(payload).length) {
	      var _error = payload._error;

	      var fieldErrors = _objectWithoutProperties(payload, ['_error']);

	      if (_error) {
	        result = setIn(result, 'error', _error);
	      }
	      if (Object.keys(fieldErrors).length) {
	        result = setIn(result, 'submitErrors', fromJS(fieldErrors));
	      } else {
	        result = deleteIn(result, 'submitErrors');
	      }
	      result = setIn(result, 'submitFailed', true);
	    } else {
	      result = deleteIn(result, 'error');
	      result = deleteIn(result, 'submitErrors');
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.SET_SUBMIT_FAILED, function (state, _ref19) {
	    var fields = _ref19.meta.fields;

	    var result = state;
	    result = setIn(result, 'submitFailed', true);
	    result = deleteIn(result, 'submitting');
	    fields.forEach(function (field) {
	      return result = setIn(result, 'fields.' + field + '.touched', true);
	    });
	    if (fields.length) {
	      result = setIn(result, 'anyTouched', true);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.TOUCH, function (state, _ref20) {
	    var fields = _ref20.meta.fields;

	    var result = state;
	    fields.forEach(function (field) {
	      return result = setIn(result, 'fields.' + field + '.touched', true);
	    });
	    result = setIn(result, 'anyTouched', true);
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.UNREGISTER_FIELD, function (state, _ref21) {
	    var name = _ref21.payload.name;

	    var registeredFields = getIn(state, 'registeredFields');

	    // in case the form was destroyed and registeredFields no longer exists
	    if (!registeredFields) {
	      return state;
	    }

	    var fieldIndex = registeredFields.findIndex(function (value) {
	      return getIn(value, 'name') === name;
	    });
	    if (size(registeredFields) <= 1 && fieldIndex >= 0) {
	      return deleteInWithCleanUp(state, 'registeredFields');
	    }
	    return setIn(state, 'registeredFields', splice(registeredFields, fieldIndex, 1));
	  }), _defineProperty(_behaviors, _actionTypes.UNTOUCH, function (state, _ref22) {
	    var fields = _ref22.meta.fields;

	    var result = state;
	    fields.forEach(function (field) {
	      return result = deleteIn(result, 'fields.' + field + '.touched');
	    });
	    return result;
	  }), _behaviors);

	  var reducer = function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? empty : arguments[0];
	    var action = arguments[1];

	    var behavior = behaviors[action.type];
	    return behavior ? behavior(state, action) : state;
	  };

	  var byForm = function byForm(reducer) {
	    return function () {
	      var state = arguments.length <= 0 || arguments[0] === undefined ? empty : arguments[0];
	      var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var form = action && action.meta && action.meta.form;
	      if (!form) {
	        return state;
	      }
	      if (action.type === _actionTypes.DESTROY) {
	        return deleteInWithCleanUp(state, action.meta.form);
	      }
	      var formState = getIn(state, form);
	      var result = reducer(formState, action);
	      return result === formState ? state : setIn(state, form, result);
	    };
	  };

	  /**
	   * Adds additional functionality to the reducer
	   */
	  function decorate(target) {
	    target.plugin = function plugin(reducers) {
	      var _this = this;

	      // use 'function' keyword to enable 'this'
	      return decorate(function () {
	        var state = arguments.length <= 0 || arguments[0] === undefined ? empty : arguments[0];
	        var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        return Object.keys(reducers).reduce(function (accumulator, key) {
	          var previousState = getIn(accumulator, key);
	          var nextState = reducers[key](previousState, action);
	          return nextState === previousState ? accumulator : setIn(accumulator, key, nextState);
	        }, _this(state, action));
	      });
	    };

	    return target;
	  }

	  return decorate(byForm(reducer));
	};

	exports.default = createReducer;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mapValues2 = __webpack_require__(13);

	var _mapValues3 = _interopRequireDefault(_mapValues2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _hoistNonReactStatics = __webpack_require__(62);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _reactRedux = __webpack_require__(7);

	var _redux = __webpack_require__(104);

	var _isPromise = __webpack_require__(10);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _getDisplayName = __webpack_require__(58);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	var _actions = __webpack_require__(16);

	var importedActions = _interopRequireWildcard(_actions);

	var _handleSubmit = __webpack_require__(48);

	var _handleSubmit2 = _interopRequireDefault(_handleSubmit);

	var _silenceEvent = __webpack_require__(20);

	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

	var _silenceEvents = __webpack_require__(46);

	var _silenceEvents2 = _interopRequireDefault(_silenceEvents);

	var _asyncValidation = __webpack_require__(36);

	var _asyncValidation2 = _interopRequireDefault(_asyncValidation);

	var _hasErrors = __webpack_require__(50);

	var _hasErrors2 = _interopRequireDefault(_hasErrors);

	var _hasError = __webpack_require__(49);

	var _hasError2 = _interopRequireDefault(_hasError);

	var _defaultShouldAsyncValidate = __webpack_require__(40);

	var _defaultShouldAsyncValidate2 = _interopRequireDefault(_defaultShouldAsyncValidate);

	var _plain = __webpack_require__(2);

	var _plain2 = _interopRequireDefault(_plain);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
	};

	// extract field-specific actions
	var arrayInsert = importedActions.arrayInsert;
	var arrayPop = importedActions.arrayPop;
	var arrayPush = importedActions.arrayPush;
	var arrayRemove = importedActions.arrayRemove;
	var arrayShift = importedActions.arrayShift;
	var arraySplice = importedActions.arraySplice;
	var arraySwap = importedActions.arraySwap;
	var arrayUnshift = importedActions.arrayUnshift;
	var blur = importedActions.blur;
	var change = importedActions.change;
	var focus = importedActions.focus;

	var formActions = _objectWithoutProperties(importedActions, ['arrayInsert', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'blur', 'change', 'focus']);

	var arrayActions = {
	  arrayInsert: arrayInsert,
	  arrayPop: arrayPop,
	  arrayPush: arrayPush,
	  arrayRemove: arrayRemove,
	  arrayShift: arrayShift,
	  arraySplice: arraySplice,
	  arraySwap: arraySwap,
	  arrayUnshift: arrayUnshift
	};

	var propsToNotUpdateFor = [].concat(_toConsumableArray(Object.keys(importedActions)), ['array', 'asyncErrors', 'initialized', 'initialValues', 'syncErrors', 'values', 'registeredFields']);

	var checkSubmit = function checkSubmit(submit) {
	  if (!submit || typeof submit !== 'function') {
	    throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
	  }
	  return submit;
	};

	/**
	 * The decorator that is the main API to redux-form
	 */
	var createReduxForm = function createReduxForm(structure) {
	  var deepEqual = structure.deepEqual;
	  var empty = structure.empty;
	  var getIn = structure.getIn;
	  var setIn = structure.setIn;
	  var fromJS = structure.fromJS;
	  var some = structure.some;

	  var hasErrors = (0, _hasErrors2.default)(structure);
	  var hasError = (0, _hasError2.default)(structure);
	  var plainHasErrors = (0, _hasErrors2.default)(_plain2.default);
	  return function (initialConfig) {
	    var config = _extends({
	      touchOnBlur: true,
	      touchOnChange: false,
	      destroyOnUnmount: true,
	      shouldAsyncValidate: _defaultShouldAsyncValidate2.default,
	      enableReinitialize: false,
	      getFormState: function getFormState(state) {
	        return getIn(state, 'form');
	      }
	    }, initialConfig);
	    return function (WrappedComponent) {
	      var Form = function (_Component) {
	        _inherits(Form, _Component);

	        function Form(props) {
	          _classCallCheck(this, Form);

	          var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

	          _this.submit = _this.submit.bind(_this);
	          _this.reset = _this.reset.bind(_this);
	          _this.asyncValidate = _this.asyncValidate.bind(_this);
	          _this.getValues = _this.getValues.bind(_this);
	          _this.register = _this.register.bind(_this);
	          _this.unregister = _this.unregister.bind(_this);
	          _this.submitCompleted = _this.submitCompleted.bind(_this);
	          return _this;
	        }

	        _createClass(Form, [{
	          key: 'getChildContext',
	          value: function getChildContext() {
	            var _this2 = this;

	            return {
	              _reduxForm: _extends({}, this.props, {
	                getFormState: function getFormState(state) {
	                  return getIn(_this2.props.getFormState(state), _this2.props.form);
	                },
	                asyncValidate: this.asyncValidate,
	                getValues: this.getValues,
	                register: this.register,
	                unregister: this.unregister
	              })
	            };
	          }
	        }, {
	          key: 'initIfNeeded',
	          value: function initIfNeeded(nextProps) {
	            if (nextProps) {
	              var enableReinitialize = this.props.enableReinitialize;

	              if ((enableReinitialize || !nextProps.initialized) && !deepEqual(this.props.initialValues, nextProps.initialValues)) {
	                this.props.initialize(nextProps.initialValues);
	              }
	            } else if (this.props.initialValues) {
	              this.props.initialize(this.props.initialValues);
	            }
	          }
	        }, {
	          key: 'componentWillMount',
	          value: function componentWillMount() {
	            this.initIfNeeded();
	          }
	        }, {
	          key: 'componentWillReceiveProps',
	          value: function componentWillReceiveProps(nextProps) {
	            this.initIfNeeded(nextProps);
	          }
	        }, {
	          key: 'shouldComponentUpdate',
	          value: function shouldComponentUpdate(nextProps) {
	            var _this3 = this;

	            return Object.keys(nextProps).some(function (prop) {
	              // useful to debug rerenders
	              // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
	              //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
	              // }
	              return ! ~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
	            });
	          }
	        }, {
	          key: 'componentWillUnmount',
	          value: function componentWillUnmount() {
	            var _props = this.props;
	            var destroyOnUnmount = _props.destroyOnUnmount;
	            var destroy = _props.destroy;

	            if (destroyOnUnmount) {
	              this.destroyed = true;
	              destroy();
	            }
	          }
	        }, {
	          key: 'getValues',
	          value: function getValues() {
	            return this.props.values;
	          }
	        }, {
	          key: 'isValid',
	          value: function isValid() {
	            return this.props.valid;
	          }
	        }, {
	          key: 'isPristine',
	          value: function isPristine() {
	            return this.props.pristine;
	          }
	        }, {
	          key: 'register',
	          value: function register(name, type) {
	            this.props.registerField(name, type);
	          }
	        }, {
	          key: 'unregister',
	          value: function unregister(name) {
	            if (!this.destroyed) {
	              this.props.unregisterField(name);
	            }
	          }
	        }, {
	          key: 'getFieldList',
	          value: function getFieldList() {
	            return this.props.registeredFields.map(function (field) {
	              return getIn(field, 'name');
	            });
	          }
	        }, {
	          key: 'asyncValidate',
	          value: function asyncValidate(name, value) {
	            var _this4 = this;

	            var _props2 = this.props;
	            var asyncBlurFields = _props2.asyncBlurFields;
	            var asyncErrors = _props2.asyncErrors;
	            var asyncValidate = _props2.asyncValidate;
	            var dispatch = _props2.dispatch;
	            var initialized = _props2.initialized;
	            var pristine = _props2.pristine;
	            var shouldAsyncValidate = _props2.shouldAsyncValidate;
	            var startAsyncValidation = _props2.startAsyncValidation;
	            var stopAsyncValidation = _props2.stopAsyncValidation;
	            var syncErrors = _props2.syncErrors;
	            var values = _props2.values;

	            var submitting = !name;
	            if (asyncValidate) {
	              var _ret = function () {
	                var valuesToValidate = submitting ? values : setIn(values, name, value);
	                var syncValidationPasses = submitting || !getIn(syncErrors, name);
	                var isBlurredField = !submitting && (!asyncBlurFields || ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+\]/g, '[]')));
	                if ((isBlurredField || submitting) && shouldAsyncValidate({
	                  asyncErrors: asyncErrors,
	                  initialized: initialized,
	                  trigger: submitting ? 'submit' : 'blur',
	                  blurredField: name,
	                  pristine: pristine,
	                  syncValidationPasses: syncValidationPasses
	                })) {
	                  return {
	                    v: (0, _asyncValidation2.default)(function () {
	                      return asyncValidate(valuesToValidate, dispatch, _this4.props);
	                    }, startAsyncValidation, stopAsyncValidation, name)
	                  };
	                }
	              }();

	              if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	          }
	        }, {
	          key: 'submitCompleted',
	          value: function submitCompleted(result) {
	            delete this.submitPromise;
	            return result;
	          }
	        }, {
	          key: 'listenToSubmit',
	          value: function listenToSubmit(promise) {
	            var _this5 = this;

	            if (!(0, _isPromise2.default)(promise)) {
	              return promise;
	            }
	            this.submitPromise = promise;
	            return promise.then(this.submitCompleted, function (err) {
	              _this5.submitCompleted();
	              return Promise.reject(err);
	            });
	          }
	        }, {
	          key: 'submit',
	          value: function submit(submitOrEvent) {
	            var _this6 = this;

	            var onSubmit = this.props.onSubmit;


	            if (!submitOrEvent || (0, _silenceEvent2.default)(submitOrEvent)) {
	              // submitOrEvent is an event: fire submit if not already submitting
	              if (!this.submitPromise) {
	                return this.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(onSubmit), this.props, this.isValid(), this.asyncValidate, this.getFieldList()));
	              }
	            } else {
	              // submitOrEvent is the submit function: return deferred submit thunk
	              return (0, _silenceEvents2.default)(function () {
	                return !_this6.submitPromise && _this6.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(submitOrEvent), _this6.props, _this6.isValid(), _this6.asyncValidate, _this6.getFieldList()));
	              });
	            }
	          }
	        }, {
	          key: 'reset',
	          value: function reset() {
	            this.props.reset();
	          }
	        }, {
	          key: 'render',
	          value: function render() {
	            // remove some redux-form config-only props
	            /* eslint-disable no-unused-vars */
	            var _props3 = this.props;
	            var anyTouched = _props3.anyTouched;
	            var arrayInsert = _props3.arrayInsert;
	            var arrayPop = _props3.arrayPop;
	            var arrayPush = _props3.arrayPush;
	            var arrayRemove = _props3.arrayRemove;
	            var arrayShift = _props3.arrayShift;
	            var arraySplice = _props3.arraySplice;
	            var arraySwap = _props3.arraySwap;
	            var arrayUnshift = _props3.arrayUnshift;
	            var asyncErrors = _props3.asyncErrors;
	            var asyncValidate = _props3.asyncValidate;
	            var asyncValidating = _props3.asyncValidating;
	            var destroy = _props3.destroy;
	            var destroyOnUnmount = _props3.destroyOnUnmount;
	            var dirty = _props3.dirty;
	            var dispatch = _props3.dispatch;
	            var enableReinitialize = _props3.enableReinitialize;
	            var error = _props3.error;
	            var form = _props3.form;
	            var getFormState = _props3.getFormState;
	            var initialize = _props3.initialize;
	            var invalid = _props3.invalid;
	            var pristine = _props3.pristine;
	            var propNamespace = _props3.propNamespace;
	            var registerField = _props3.registerField;
	            var reset = _props3.reset;
	            var submitting = _props3.submitting;
	            var submitFailed = _props3.submitFailed;
	            var touch = _props3.touch;
	            var touchOnBlur = _props3.touchOnBlur;
	            var touchOnChange = _props3.touchOnChange;
	            var syncErrors = _props3.syncErrors;
	            var unregisterField = _props3.unregisterField;
	            var untouch = _props3.untouch;
	            var valid = _props3.valid;
	            var values = _props3.values;

	            var rest = _objectWithoutProperties(_props3, ['anyTouched', 'arrayInsert', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncErrors', 'asyncValidate', 'asyncValidating', 'destroy', 'destroyOnUnmount', 'dirty', 'dispatch', 'enableReinitialize', 'error', 'form', 'getFormState', 'initialize', 'invalid', 'pristine', 'propNamespace', 'registerField', 'reset', 'submitting', 'submitFailed', 'touch', 'touchOnBlur', 'touchOnChange', 'syncErrors', 'unregisterField', 'untouch', 'valid', 'values']);
	            /* eslint-enable no-unused-vars */


	            var reduxFormProps = {
	              anyTouched: anyTouched,
	              asyncValidate: asyncValidate,
	              asyncValidating: asyncValidating,
	              destroy: destroy,
	              dirty: dirty,
	              dispatch: dispatch,
	              error: error,
	              form: form,
	              handleSubmit: this.submit,
	              initialize: initialize,
	              invalid: invalid,
	              pristine: pristine,
	              reset: reset,
	              submitting: submitting,
	              submitFailed: submitFailed,
	              touch: touch,
	              untouch: untouch,
	              valid: valid
	            };
	            var propsToPass = _extends({}, propNamespace ? _defineProperty({}, propNamespace, reduxFormProps) : reduxFormProps, rest);
	            if (isClassComponent(WrappedComponent)) {
	              propsToPass.ref = 'wrapped';
	            }
	            return (0, _react.createElement)(WrappedComponent, propsToPass);
	          }
	        }]);

	        return Form;
	      }(_react.Component);

	      Form.displayName = 'Form(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
	      Form.WrappedComponent = WrappedComponent;
	      Form.childContextTypes = {
	        _reduxForm: _react.PropTypes.object.isRequired
	      };
	      Form.propTypes = {
	        destroyOnUnmount: _react.PropTypes.bool,
	        form: _react.PropTypes.string.isRequired,
	        initialValues: _react.PropTypes.object,
	        getFormState: _react.PropTypes.func,
	        onSubmitFail: _react.PropTypes.func,
	        onSubmitSuccess: _react.PropTypes.func,
	        propNameSpace: _react.PropTypes.string,
	        validate: _react.PropTypes.func,
	        touchOnBlur: _react.PropTypes.bool,
	        touchOnChange: _react.PropTypes.bool,
	        registeredFields: _react.PropTypes.any
	      };

	      var connector = (0, _reactRedux.connect)(function (state, props) {
	        var form = props.form;
	        var getFormState = props.getFormState;
	        var initialValues = props.initialValues;
	        var validate = props.validate;

	        var formState = getIn(getFormState(state) || empty, form) || empty;
	        var stateInitial = getIn(formState, 'initial');
	        var initial = initialValues || stateInitial || empty;
	        var values = getIn(formState, 'values') || initial;
	        var pristine = deepEqual(initial, values);
	        var asyncErrors = getIn(formState, 'asyncErrors');
	        var submitErrors = getIn(formState, 'submitErrors');
	        var syncErrors = validate && validate(values, props) || {};
	        var hasSyncErrors = plainHasErrors(syncErrors);
	        var hasAsyncErrors = hasErrors(asyncErrors);
	        var hasSubmitErrors = hasErrors(submitErrors);
	        var registeredFields = getIn(formState, 'registeredFields') || [];
	        var hasFieldWithError = registeredFields && some(registeredFields, function (field) {
	          return hasError(field, syncErrors, asyncErrors, submitErrors);
	        });
	        var valid = !hasSyncErrors && !hasAsyncErrors && !hasSubmitErrors && !hasFieldWithError;
	        var anyTouched = !!getIn(formState, 'anyTouched');
	        var submitting = !!getIn(formState, 'submitting');
	        var submitFailed = !!getIn(formState, 'submitFailed');
	        var error = getIn(formState, 'error');
	        return {
	          anyTouched: anyTouched,
	          asyncErrors: asyncErrors,
	          asyncValidating: getIn(formState, 'asyncValidating'),
	          dirty: !pristine,
	          error: error,
	          initialized: !!stateInitial,
	          invalid: !valid,
	          pristine: pristine,
	          registeredFields: registeredFields,
	          submitting: submitting,
	          submitFailed: submitFailed,
	          syncErrors: syncErrors,
	          values: values,
	          valid: valid
	        };
	      }, function (dispatch, initialProps) {
	        var bindForm = function bindForm(actionCreator) {
	          return actionCreator.bind(null, initialProps.form);
	        };

	        // Bind the first parameter on `props.form`
	        var boundFormACs = (0, _mapValues3.default)(formActions, bindForm);
	        var boundArrayACs = (0, _mapValues3.default)(arrayActions, bindForm);
	        var boundBlur = function boundBlur(field, value) {
	          return blur(initialProps.form, field, value, !!initialProps.touchOnBlur);
	        };
	        var boundChange = function boundChange(field, value) {
	          return change(initialProps.form, field, value, !!initialProps.touchOnChange);
	        };
	        var boundFocus = bindForm(focus);

	        // Wrap action creators with `dispatch`
	        var connectedFormACs = (0, _redux.bindActionCreators)(boundFormACs, dispatch);
	        var connectedArrayACs = {
	          insert: (0, _redux.bindActionCreators)(boundArrayACs.arrayInsert, dispatch),
	          pop: (0, _redux.bindActionCreators)(boundArrayACs.arrayPop, dispatch),
	          push: (0, _redux.bindActionCreators)(boundArrayACs.arrayPush, dispatch),
	          remove: (0, _redux.bindActionCreators)(boundArrayACs.arrayRemove, dispatch),
	          shift: (0, _redux.bindActionCreators)(boundArrayACs.arrayShift, dispatch),
	          splice: (0, _redux.bindActionCreators)(boundArrayACs.arraySplice, dispatch),
	          swap: (0, _redux.bindActionCreators)(boundArrayACs.arraySwap, dispatch),
	          unshift: (0, _redux.bindActionCreators)(boundArrayACs.arrayUnshift, dispatch)
	        };

	        var computedActions = _extends({}, connectedFormACs, boundArrayACs, {
	          blur: boundBlur,
	          change: boundChange,
	          array: connectedArrayACs,
	          focus: boundFocus,
	          dispatch: dispatch
	        });

	        return function () {
	          return computedActions;
	        };
	      }, undefined, { withRef: true });
	      var ConnectedForm = (0, _hoistNonReactStatics2.default)(connector(Form), WrappedComponent);
	      ConnectedForm.defaultProps = config;

	      // build outer component to expose instance api
	      return function (_Component2) {
	        _inherits(ReduxForm, _Component2);

	        function ReduxForm() {
	          _classCallCheck(this, ReduxForm);

	          return _possibleConstructorReturn(this, Object.getPrototypeOf(ReduxForm).apply(this, arguments));
	        }

	        _createClass(ReduxForm, [{
	          key: 'submit',
	          value: function submit() {
	            return this.refs.wrapped.getWrappedInstance().submit();
	          }
	        }, {
	          key: 'reset',
	          value: function reset() {
	            return this.refs.wrapped.getWrappedInstance().reset();
	          }
	        }, {
	          key: 'render',
	          value: function render() {
	            var _props4 = this.props;
	            var initialValues = _props4.initialValues;

	            var rest = _objectWithoutProperties(_props4, ['initialValues']);

	            return (0, _react.createElement)(ConnectedForm, _extends({}, rest, {
	              ref: 'wrapped',
	              // convert initialValues if need to
	              initialValues: fromJS(initialValues)
	            }));
	          }
	        }, {
	          key: 'valid',
	          get: function get() {
	            return this.refs.wrapped.getWrappedInstance().isValid();
	          }
	        }, {
	          key: 'invalid',
	          get: function get() {
	            return !this.valid;
	          }
	        }, {
	          key: 'pristine',
	          get: function get() {
	            return this.refs.wrapped.getWrappedInstance().isPristine();
	          }
	        }, {
	          key: 'dirty',
	          get: function get() {
	            return !this.pristine;
	          }
	        }, {
	          key: 'values',
	          get: function get() {
	            return this.refs.wrapped.getWrappedInstance().getValues();
	          }
	        }, {
	          key: 'fieldList',
	          get: function get() {
	            // mainly provided for testing
	            return this.refs.wrapped.getWrappedInstance().getFieldList();
	          }
	        }, {
	          key: 'wrappedInstance',
	          get: function get() {
	            // for testine
	            return this.refs.wrapped.getWrappedInstance().refs.wrapped;
	          }
	        }]);

	        return ReduxForm;
	      }(_react.Component);
	    };
	  };
	};

	exports.default = createReduxForm;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isEqualWith2 = __webpack_require__(92);

	var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var customizer = function customizer(obj, other) {
	  if (obj == other) return true;
	  if (obj == null && other === '') return true;
	  if (obj === '' && other == null) return true;
	};

	var deepEqual = function deepEqual(a, b) {
	  return (0, _isEqualWith3.default)(a, b, customizer);
	};

	exports.default = deepEqual;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toPath2 = __webpack_require__(6);

	var _toPath3 = _interopRequireDefault(_toPath2);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var deleteInWithPath = function deleteInWithPath(state, first) {
	  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    rest[_key - 2] = arguments[_key];
	  }

	  if (state === undefined || first === undefined) {
	    return state;
	  }
	  if (rest.length) {
	    if (Array.isArray(state)) {
	      if (first < state.length) {
	        var result = deleteInWithPath.apply(undefined, [state && state[first]].concat(rest));
	        if (result !== state[first]) {
	          var copy = [].concat(_toConsumableArray(state));
	          copy[first] = result;
	          return copy;
	        }
	      }
	      return state;
	    }
	    if (first in state) {
	      var _result = deleteInWithPath.apply(undefined, [state && state[first]].concat(rest));
	      return state[first] === _result ? state : _extends({}, state, _defineProperty({}, first, _result));
	    }
	    return state;
	  }
	  if (Array.isArray(state)) {
	    if (isNaN(first)) {
	      throw new Error('Cannot delete non-numerical index from an array');
	    }
	    if (first < state.length) {
	      var _copy = [].concat(_toConsumableArray(state));
	      _copy.splice(first, 1);
	      return _copy;
	    }
	    return state;
	  }
	  if (first in state) {
	    var _copy2 = _extends({}, state);
	    delete _copy2[first];
	    return _copy2;
	  }
	  return state;
	};

	var deleteIn = function deleteIn(state, field) {
	  return deleteInWithPath.apply(undefined, [state].concat(_toConsumableArray((0, _toPath3.default)(field))));
	};

	exports.default = deleteIn;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toPath2 = __webpack_require__(6);

	var _toPath3 = _interopRequireDefault(_toPath2);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var setInWithPath = function setInWithPath(state, value, first) {
	  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    rest[_key - 3] = arguments[_key];
	  }

	  if (first === undefined) {
	    return value;
	  }
	  var next = setInWithPath.apply(undefined, [state && state[first], value].concat(rest));
	  if (!state) {
	    var initialized = isNaN(first) ? {} : [];
	    initialized[first] = next;
	    return initialized;
	  }
	  if (Array.isArray(state)) {
	    var copy = [].concat(_toConsumableArray(state));
	    copy[first] = next;
	    return copy;
	  }
	  return _extends({}, state, _defineProperty({}, first, next));
	};

	var setIn = function setIn(state, field, value) {
	  return setInWithPath.apply(undefined, [state, value].concat(_toConsumableArray((0, _toPath3.default)(field))));
	};

	exports.default = setIn;

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var splice = function splice() {
	  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var index = arguments[1];
	  var removeNum = arguments[2];
	  var value = arguments[3];

	  var copy = [].concat(_toConsumableArray(array));
	  if (removeNum) {
	    copy.splice(index, removeNum); // removing
	  } else {
	      if (index < copy.length) {
	        copy.splice(index, 0, value); // adding
	      } else {
	          copy[index] = value; // outside range, so just set it
	        }
	    }
	  return copy;
	};

	exports.default = splice;

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getDisplayName = function getDisplayName(Comp) {
	  return Comp.displayName || Comp.name || 'Component';
	};

	exports.default = getDisplayName;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _reactRedux = __webpack_require__(7);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var createValues = function createValues(_ref) {
	  var getIn = _ref.getIn;
	  return function (config) {
	    var _prop$getFormState$co = _extends({
	      prop: 'values',
	      getFormState: function getFormState(state) {
	        return getIn(state, 'form');
	      }
	    }, config);

	    var form = _prop$getFormState$co.form;
	    var prop = _prop$getFormState$co.prop;
	    var getFormState = _prop$getFormState$co.getFormState;

	    return (0, _reactRedux.connect)(function (state) {
	      return _defineProperty({}, prop, getIn(getFormState(state), form + '.values'));
	    }, function () {
	      return {};
	    } // ignore dispatch
	    );
	  };
	};

	exports.default = createValues;

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    cls.apply(this, arguments);
	  }

	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });

	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }

	  return ExtendableBuiltin;
	}

	var ExtendableError = function (_extendableBuiltin2) {
	  _inherits(ExtendableError, _extendableBuiltin2);

	  function ExtendableError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    _classCallCheck(this, ExtendableError);

	    // extending Error is weird and does not propagate `message`

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExtendableError).call(this, message));

	    Object.defineProperty(_this, 'message', {
	      configurable: true,
	      enumerable: false,
	      value: message,
	      writable: true
	    });

	    Object.defineProperty(_this, 'name', {
	      configurable: true,
	      enumerable: false,
	      value: _this.constructor.name,
	      writable: true
	    });

	    if (Error.hasOwnProperty('captureStackTrace')) {
	      Error.captureStackTrace(_this, _this.constructor);
	      return _possibleConstructorReturn(_this);
	    }

	    Object.defineProperty(_this, 'stack', {
	      configurable: true,
	      enumerable: false,
	      value: new Error(message).stack,
	      writable: true
	    });
	    return _this;
	  }

	  return ExtendableError;
	}(_extendableBuiltin(Error));

	exports.default = ExtendableError;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	        for (var i=0; i<keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(24),
	    listCacheDelete = __webpack_require__(25),
	    listCacheGet = __webpack_require__(26),
	    listCacheHas = __webpack_require__(27),
	    listCacheSet = __webpack_require__(28);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(65),
	    setCacheAdd = __webpack_require__(87),
	    setCacheHas = __webpack_require__(88);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(24),
	    listCacheDelete = __webpack_require__(25),
	    listCacheGet = __webpack_require__(26),
	    listCacheHas = __webpack_require__(27),
	    listCacheSet = __webpack_require__(28);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(81);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(73),
	    keys = __webpack_require__(31);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(85);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(77),
	    isObject = __webpack_require__(11),
	    isObjectLike = __webpack_require__(12);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(69),
	    equalArrays = __webpack_require__(82),
	    equalByTag = __webpack_require__(83),
	    equalObjects = __webpack_require__(84),
	    getTag = __webpack_require__(86),
	    isArray = __webpack_require__(30),
	    isHostObject = __webpack_require__(23),
	    isTypedArray = __webpack_require__(97);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(68),
	    arraySome = __webpack_require__(72);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(75),
	    keys = __webpack_require__(31);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(63),
	    Map = __webpack_require__(64),
	    Promise = __webpack_require__(66),
	    Set = __webpack_require__(67),
	    WeakMap = __webpack_require__(70),
	    toSource = __webpack_require__(29);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(98),
	    toString = __webpack_require__(101);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(76);

	/**
	 * This method is like `_.isEqual` except that it accepts `customizer` which
	 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	 * are handled by the method instead. The `customizer` is invoked with up to
	 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if the values are equivalent,
	 *  else `false`.
	 * @example
	 *
	 * function isGreeting(value) {
	 *   return /^h(?:i|ello)$/.test(value);
	 * }
	 *
	 * function customizer(objValue, othValue) {
	 *   if (isGreeting(objValue) && isGreeting(othValue)) {
	 *     return true;
	 *   }
	 * }
	 *
	 * var array = ['hello', 'goodbye'];
	 * var other = ['hi', 'goodbye'];
	 *
	 * _.isEqualWith(array, other, customizer);
	 * // => true
	 */
	function isEqualWith(value, other, customizer) {
	  customizer = typeof customizer == 'function' ? customizer : undefined;
	  var result = customizer ? customizer(value, other) : undefined;
	  return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	}

	module.exports = isEqualWith;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(93),
	    isHostObject = __webpack_require__(23),
	    isObject = __webpack_require__(11),
	    toSource = __webpack_require__(29);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(12);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(94),
	    isObjectLike = __webpack_require__(12);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(61);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_104__;

/***/ }
/******/ ])
});
;