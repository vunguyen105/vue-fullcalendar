(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _fullCalendar = __webpack_require__(1);

	var _fullCalendar2 = _interopRequireDefault(_fullCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fc = _fullCalendar2.default;

	module.exports = fc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Volumes/DATA/DEV/git/vue-fullcalendar/src/fullCalendar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2d2d729e&file=fullCalendar.vue!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./fullCalendar.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2d2d729e&file=fullCalendar.vue!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./fullCalendar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".comp-full-calendar {\n  padding: 20px;\n  background: #fff;\n  max-width: 960px;\n  margin: 0 auto; }\n  .comp-full-calendar ul, .comp-full-calendar p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px; }\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _langSets = __webpack_require__(7);

	var _langSets2 = _interopRequireDefault(_langSets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    events: { // events will be displayed on calendar
	      type: Array,
	      default: []
	    },
	    lang: {
	      type: String,
	      default: 'en'
	    },
	    firstDay: {
	      type: Number | String,
	      validator: function validator(val) {
	        var res = parseInt(val);
	        return res >= 0 && res <= 6;
	      },

	      default: 0
	    },
	    titleFormat: {
	      type: String,
	      default: function _default() {
	        return _langSets2.default[this.lang].titleFormat;
	      }
	    },
	    monthNames: {
	      type: Array,
	      default: function _default() {
	        return _langSets2.default[this.lang].monthNames;
	      }
	    },
	    weekNames: {
	      type: Array,
	      default: function _default() {
	        var arr = _langSets2.default[this.lang].weekNames;
	        return arr.slice(this.firstDay).concat(arr.slice(0, this.firstDay));
	      }
	    }
	  },
	  data: function data() {
	    return {
	      currentDate: new Date()
	    };
	  },

	  methods: {
	    emitChangeMonth: function emitChangeMonth(start, end, currentStart, current) {
	      console.log('currentDate 2', this.currentDate);
	      this.currentDate = current;
	      console.log('currentDate 3', this.currentDate);
	      this.$emit('changeMonth', start, end, currentStart);
	    },
	    emitEventClick: function emitEventClick(event, jsEvent, pos) {
	      this.$emit('eventClick', event, jsEvent, pos);
	    },
	    emitDayClick: function emitDayClick(day, jsEvent) {
	      this.$emit('dayClick', day, jsEvent);
	    },
	    emitMoreClick: function emitMoreClick(day, events, jsEvent) {
	      this.$emit('moreClick', day, events, jsEvent);
	    }
	  },
	  components: {
	    'fc-body': __webpack_require__(8),
	    'fc-header': __webpack_require__(14)
	  }

	  // </script>
	  // <style lang="scss">
	  //   .comp-full-calendar{
	  //     // font-family: "elvetica neue", tahoma, "hiragino sans gb";
	  //     padding:20px;
	  //     background: #fff;
	  //     max-width: 960px;
	  //     margin:0 auto;
	  //     ul,p{
	  //       margin:0;
	  //       padding:0;
	  //       font-size: 14px;
	  //     }
	  //   }
	  // </style>

	}; // <template>
	//   <div class="comp-full-calendar">
	//     <!-- header pick month -->
	//     <fc-header :current-date="currentDate" 
	//       :title-format="titleFormat"
	//       :first-day="firstDay"
	//       :month-names="monthNames"
	//       @change="emitChangeMonth">
	//
	//       <div slot="header-left">
	//         <slot name="fc-header-left">
	//         </slot>
	//       </div>
	//
	//       <div slot="header-right">
	//         <slot name="fc-header-right">
	//         </slot>
	//       </div>
	//     </fc-header>
	//     <!-- body display date day and events -->
	//     <fc-body :current-date="currentDate" :events="events" :month-names="monthNames" 
	//       :week-names="weekNames" :first-day="firstDay"
	//       @eventclick="emitEventClick" @dayclick="emitDayClick"
	//       @moreclick="emitMoreClick">
	//       <div slot="body-card">
	//         <slot name="fc-body-card">
	//         </slot>
	//       </div>
	//     </fc-body>
	//   </div>
	// </template>
	// <script type="text/babel">

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  en: {
	    weekNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    titleFormat: 'MMMM yyyy'
	  },
	  zh: {
	    weekNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	    titleFormat: 'yyyy年MM月'
	  },
	  fr: {
	    weekNames: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
	    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
	    titleFormat: 'MMMM yyyy'
	  }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Volumes/DATA/DEV/git/vue-fullcalendar/src/components/body.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-fbe1184c&file=body.vue!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./body.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-fbe1184c&file=body.vue!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./body.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".full-calendar-body {\n  margin-top: 20px; }\n  .full-calendar-body .weeks {\n    display: flex;\n    border-top: 1px solid #e0e0e0;\n    border-bottom: 1px solid #e0e0e0;\n    border-left: 1px solid #e0e0e0; }\n    .full-calendar-body .weeks .week {\n      flex: 1;\n      text-align: center;\n      border-right: 1px solid #e0e0e0; }\n  .full-calendar-body .dates {\n    position: relative; }\n    .full-calendar-body .dates .week-row {\n      border-left: 1px solid #e0e0e0;\n      display: flex; }\n      .full-calendar-body .dates .week-row .day-cell {\n        flex: 1;\n        min-height: 100px;\n        padding: 4px;\n        border-right: 1px solid #e0e0e0;\n        border-bottom: 1px solid #e0e0e0; }\n        .full-calendar-body .dates .week-row .day-cell .day-number {\n          text-align: right; }\n        .full-calendar-body .dates .week-row .day-cell.today {\n          background-color: #fcf8e3; }\n        .full-calendar-body .dates .week-row .day-cell.not-cur-month .day-number {\n          color: rgba(0, 0, 0, 0.24); }\n    .full-calendar-body .dates .dates-events {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%; }\n      .full-calendar-body .dates .dates-events .events-week {\n        display: flex; }\n        .full-calendar-body .dates .dates-events .events-week .events-day {\n          cursor: pointer;\n          flex: 1;\n          min-height: 109px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .full-calendar-body .dates .dates-events .events-week .events-day .day-number {\n            text-align: right;\n            padding: 4px 5px 4px 4px;\n            opacity: 0; }\n          .full-calendar-body .dates .dates-events .events-week .events-day.not-cur-month .day-number {\n            color: rgba(0, 0, 0, 0.24); }\n          .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {\n            cursor: pointer;\n            font-size: 12px;\n            background-color: #C7E6FD;\n            margin-bottom: 2px;\n            color: rgba(0, 0, 0, 0.87);\n            padding: 0 0 0 4px;\n            height: 18px;\n            line-height: 18px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis; }\n            .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-start {\n              margin-left: 4px; }\n            .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-end {\n              margin-right: 4px; }\n            .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-opacity {\n              opacity: 0; }\n          .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.red {\n            background-color: #ffa3e8; }\n          .full-calendar-body .dates .dates-events .events-week .events-day .event-box .more-link {\n            cursor: pointer;\n            padding-left: 8px;\n            padding-right: 2px;\n            color: rgba(0, 0, 0, 0.38);\n            font-size: 14px; }\n    .full-calendar-body .dates .more-events {\n      position: absolute;\n      width: 150px;\n      z-index: 2;\n      border: 1px solid #eee;\n      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }\n      .full-calendar-body .dates .more-events .more-header {\n        background-color: #eee;\n        padding: 5px;\n        display: flex;\n        align-items: center;\n        font-size: 14px; }\n        .full-calendar-body .dates .more-events .more-header .title {\n          flex: 1; }\n        .full-calendar-body .dates .more-events .more-header .close {\n          margin-right: 2px;\n          cursor: pointer;\n          font-size: 16px; }\n      .full-calendar-body .dates .more-events .more-body {\n        height: 140px;\n        overflow: hidden; }\n        .full-calendar-body .dates .more-events .more-body .body-list {\n          height: 120px;\n          padding: 5px;\n          overflow: auto;\n          background-color: #fff; }\n          .full-calendar-body .dates .more-events .more-body .body-list .body-item {\n            cursor: pointer;\n            font-size: 12px;\n            background-color: #C7E6FD;\n            margin-bottom: 2px;\n            color: rgba(0, 0, 0, 0.87);\n            padding: 0 0 0 4px;\n            height: 18px;\n            line-height: 18px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis; }\n          .full-calendar-body .dates .more-events .more-body .body-list .body-item.red {\n            background-color: #ffa3e8; }\n", ""]);

	// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dateFunc = __webpack_require__(12);

	var _dateFunc2 = _interopRequireDefault(_dateFunc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    currentDate: {},
	    events: {},
	    weekNames: {
	      type: Array,
	      default: []
	    },
	    monthNames: {},
	    firstDay: {}
	  },
	  created: function created() {
	    this.events.forEach(function (item, index) {
	      item._id = item.id || index;
	      item.end = item.end || item.start;
	    });
	    // this.events = events
	  },
	  data: function data() {
	    return {
	      // weekNames : DAY_NAMES,
	      weekMask: [1, 2, 3, 4, 5, 6, 7],
	      // events : [],
	      isLismit: true,
	      eventLimit: 3,
	      showMore: false,
	      morePos: {
	        top: 0,
	        left: 0
	      },
	      dayIndex: 0,
	      weekIndex: 0,
	      selectDay: {}
	    };
	  },

	  watch: {
	    weekNames: function weekNames(val) {
	      console.log('watch weekNames', val);
	    },
	    events: function events(val) {
	      var currentDate = this.getCalendar();
	      this.selectDay = currentDate[this.weekIndex][this.dayIndex];
	    }
	  },
	  computed: {
	    currentDates: function currentDates() {
	      return this.getCalendar();
	    }
	  },
	  methods: {
	    isBegin: function isBegin(event, date, index) {
	      var st = new Date(event.start);

	      if (index == 0 || st.toDateString() == date.toDateString()) {
	        return event.title;
	      }
	      return '　';
	    },
	    moreTitle: function moreTitle(date) {
	      var dt = new Date(date);
	      return this.weekNames[dt.getDay()] + ', ' + this.monthNames[dt.getMonth()] + dt.getDate();
	    },
	    classNames: function classNames(cssClass) {
	      if (!cssClass) return '';
	      // string  
	      if (typeof cssClass == 'string') return cssClass;

	      // Array
	      if (Array.isArray(cssClass)) return cssClass.join(' ');

	      // else
	      return '';
	    },
	    getCalendar: function getCalendar() {
	      // calculate 2d-array of each month
	      // first day of this month
	      var now = new Date(); // today
	      var current = new Date(this.currentDate);

	      var startDate = _dateFunc2.default.getStartDate(current); // 1st day of this month

	      var curWeekDay = startDate.getDay();

	      // begin date of this table may be some day of last month
	      var diff = parseInt(this.firstDay) - curWeekDay;
	      diff = diff > 0 ? diff - 7 : diff;

	      startDate.setDate(startDate.getDate() + diff);
	      var calendar = [];

	      for (var perWeek = 0; perWeek < 6; perWeek++) {

	        var week = [];

	        for (var perDay = 0; perDay < 7; perDay++) {
	          week.push({
	            monthDay: startDate.getDate(),
	            isToday: now.toDateString() == startDate.toDateString(),
	            isCurMonth: startDate.getMonth() == current.getMonth(),
	            weekDay: perDay,
	            date: new Date(startDate),
	            events: this.slotEvents(startDate)
	          });

	          startDate.setDate(startDate.getDate() + 1);
	          // if (startDate.toDateString() == endDate.toDateString()) {
	          //   isFinal = true
	          //   break
	          // }
	        }
	        calendar.push(week);
	        // if (isFinal) break
	      }
	      return calendar;
	    },
	    slotEvents: function slotEvents(date) {

	      // find all events start from this date
	      var cellIndexArr = [];
	      var thisDayEvents = this.events.filter(function (day) {
	        var dt = new Date(day.start);
	        var st = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
	        var ed = day.end ? new Date(day.end) : st;
	        // console.log('slotEvt', st, ed, date)
	        return date >= st && date <= ed;
	      });

	      // sort by duration
	      thisDayEvents.sort(function (a, b) {
	        if (!a.cellIndex) return 1;
	        if (!b.cellIndex) return -1;
	        return a.cellIndex - b.cellIndex;
	      });

	      // mark cellIndex and place holder
	      for (var i = 0; i < thisDayEvents.length; i++) {
	        thisDayEvents[i].cellIndex = thisDayEvents[i].cellIndex || i + 1;
	        thisDayEvents[i].isShow = true;
	        if (thisDayEvents[i].cellIndex == i + 1 || i > 2) continue;
	        thisDayEvents.splice(i, 0, {
	          title: 'holder',
	          cellIndex: i + 1,
	          start: _dateFunc2.default.format(date, 'yyyy-MM-dd'),
	          end: _dateFunc2.default.format(date, 'yyyy-MM-dd'),
	          isShow: false
	        });
	      }

	      return thisDayEvents;
	    },
	    isStart: function isStart(eventDate, date) {
	      var st = new Date(eventDate);
	      return st.toDateString() == date.toDateString();
	    },
	    isEnd: function isEnd(eventDate, date) {
	      var ed = new Date(eventDate);
	      return ed.toDateString() == date.toDateString();
	    },
	    selectThisDay: function selectThisDay(day, jsEvent, index, ntd) {
	      this.selectDay = day;
	      this.dayIndex = index;
	      this.weekIndex = ntd;
	      this.showMore = true;
	      this.morePos = this.computePos(event.target);
	      this.morePos.top -= 100;
	      var events = day.events.filter(function (item) {
	        return item.isShow == true;
	      });
	      this.$emit('moreclick', day, events, jsEvent);
	    },
	    computePos: function computePos(target) {
	      var eventRect = target.getBoundingClientRect();
	      var pageRect = this.$refs.dates.getBoundingClientRect();
	      return {
	        left: eventRect.left - pageRect.left,
	        top: eventRect.top + eventRect.height - pageRect.top
	      };
	    },
	    dayClick: function dayClick(day, jsEvent) {
	      this.$emit('dayclick', day, jsEvent);
	    },
	    eventClick: function eventClick(event, jsEvent) {
	      if (!event.isShow) {
	        return;
	      }
	      jsEvent.stopPropagation();
	      var pos = this.computePos(jsEvent.target);
	      this.$emit('eventclick', event, jsEvent, pos);
	    }
	  }
	  // </script>
	  // <style lang="scss">
	  // .full-calendar-body{
	  //   margin-top: 20px;
	  //   .weeks{
	  //     display: flex;
	  //     border-top:1px solid #e0e0e0;
	  //     border-bottom:1px solid #e0e0e0;
	  //     border-left:1px solid #e0e0e0;
	  //     .week{
	  //       flex:1;
	  //       text-align: center;
	  //       border-right:1px solid #e0e0e0;
	  //     }
	  //   }
	  //   .dates {
	  //     position:relative;
	  //     .week-row{
	  //       // width: 100%;
	  //       // position:absolute;
	  //       border-left:1px solid #e0e0e0;
	  //       display: flex;
	  //       .day-cell{
	  //         flex:1;
	  //         min-height: 100px;
	  //         padding:4px;
	  //         border-right:1px solid #e0e0e0;
	  //         border-bottom:1px solid #e0e0e0;
	  //         .day-number{
	  //           text-align: right;
	  //         }
	  //         &.today{
	  //           background-color:#fcf8e3;
	  //         }
	  //         &.not-cur-month{
	  //           .day-number{
	  //             color:rgba(0,0,0,.24);
	  //           }
	  //         }
	  //       }
	  //     }
	  //     .dates-events{
	  //       position:absolute;
	  //       top:0;
	  //       left:0;
	  //       z-index:1;
	  //       width: 100%;
	  //       .events-week{
	  //         display: flex;
	  //         .events-day{
	  //           cursor: pointer;
	  //           flex:1;
	  //           min-height: 109px;
	  //           overflow: hidden;
	  //           text-overflow: ellipsis;
	  //           .day-number{
	  //             text-align: right;
	  //             padding:4px 5px 4px 4px;
	  //             opacity: 0;
	  //           }
	  //           &.not-cur-month{
	  //             .day-number{
	  //               color:rgba(0,0,0,.24);
	  //             }
	  //           }
	  //           .event-box{
	  //             .event-item{
	  //               cursor: pointer;
	  //               font-size:12px;
	  //               background-color:#C7E6FD;
	  //               margin-bottom:2px;
	  //               color: rgba(0,0,0,.87);
	  //               padding:0 0 0 4px;
	  //               height: 18px;
	  //               line-height: 18px;
	  //               white-space: nowrap;
	  //               overflow: hidden;
	  //               text-overflow: ellipsis;
	  //               &.is-start{
	  //                 margin-left: 4px;
	  //                 // border-top-left-radius:4px;
	  //                 // border-bottom-left-radius:4px;
	  //               }
	  //               &.is-end{
	  //                 margin-right: 4px;
	  //                 // border-top-right-radius:4px;
	  //                 // border-bottom-right-radius:4px;
	  //               }
	  //               &.is-opacity{
	  //                 opacity: 0;
	  //               }
	  //             }
	  //             .event-item.red{
	  //               background-color: #ffa3e8;
	  //             }
	  //             .more-link{
	  //               cursor: pointer;
	  //               // text-align: right;
	  //               padding-left: 8px;
	  //               padding-right: 2px;
	  //               color: rgba(0,0,0,.38);
	  //               font-size: 14px;
	  //             }
	  //           }
	  //         }
	  //       }
	  //     }
	  //     .more-events{
	  //       position:absolute;
	  //       width: 150px;
	  //       z-index: 2;
	  //       border:1px solid #eee;
	  //       box-shadow: 0 2px 6px rgba(0,0,0,.15);
	  //       .more-header{
	  //         background-color:#eee;
	  //         padding:5px;
	  //         display: flex;
	  //         align-items : center;
	  //         font-size: 14px;
	  //         .title{
	  //           flex:1;
	  //         }
	  //         .close{
	  //           margin-right: 2px;
	  //           cursor: pointer;
	  //           font-size: 16px;
	  //         }
	  //       }
	  //       .more-body{
	  //         height: 140px;
	  //         overflow: hidden;
	  //         .body-list{
	  //           height: 120px;
	  //           padding:5px;
	  //           overflow: auto;
	  //           background-color:#fff;
	  //           .body-item{
	  //             cursor: pointer;
	  //             font-size:12px;
	  //             background-color:#C7E6FD;
	  //             margin-bottom:2px;
	  //             color: rgba(0,0,0,.87);
	  //             padding:0 0 0 4px;
	  //             height: 18px;
	  //             line-height: 18px;
	  //             white-space: nowrap;
	  //             overflow: hidden;
	  //             text-overflow: ellipsis;
	  //           }
	  //           .body-item.red{
	  //             background-color: #ffa3e8;
	  //           }
	  //         }
	  //       }
	  //     }
	  //   }
	  // }
	  // </style>
	  //

	}; // <template>
	//   <div class="full-calendar-body">
	//     <div class="weeks">
	//       <strong class="week" v-for="week in weekNames">{{week}}</strong>
	//     </div>
	//     <div class="dates" ref="dates">
	//       <div class="dates-bg">
	//         <div class="week-row" v-for="week in currentDates">
	//           <div class="day-cell" v-for="day in week"
	//             :class="{'today' : day.isToday,
	//               'not-cur-month' : !day.isCurMonth}">
	//             <p class="day-number">{{day.monthDay}}</p>
	//           </div>
	//         </div>
	//       </div>
	//
	//       <!-- absolute so we can make dynamic td -->
	//       <div class="dates-events">
	//         <div class="events-week" v-for="(week, ntd) in currentDates">
	//           <div class="events-day" v-for="(day, index) in week" track-by="$index"
	//             :class="{'today' : day.isToday,
	//               'not-cur-month' : !day.isCurMonth}" @click.stop="dayClick(day.date, $event)">
	//             <p class="day-number">{{day.monthDay}}</p>
	//             <div class="event-box">
	//               <p class="event-item" v-for="event in day.events" v-show="event.cellIndex <= eventLimit"
	//                  :class="[event.hasOwnProperty('classEvent') ? event.classEvent : '',
	//                  {
	//                   'event-item' : true,
	//                   'is-start'   : isStart(event.start, day.date),
	//                   'is-end'     : isEnd(event.end,day.date),
	//                   'is-opacity' : !event.isShow,
	//                   }]"
	//                 @click="eventClick(event,$event)">
	//                 {{isBegin(event, day.date, day.weekDay)}}
	//               </p>
	//               <p v-if="day.events.length > eventLimit"
	//                 class="more-link" @click.stop="selectThisDay(day, $event, index, ntd)">
	//                 + {{day.events[day.events.length -1].cellIndex - eventLimit}} more
	//               </p>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//
	//       <!-- full events when click show more -->
	//       <div class="more-events" v-show="showMore"
	//         :style="{left: morePos.left + 'px', top: morePos.top + 'px'}">
	//         <div class="more-header">
	//           <span class="title">{{moreTitle(selectDay.date)}}</span>
	//           <span class="close" @click.stop="showMore = false">x</span>
	//         </div>
	//         <div class="more-body">
	//           <ul class="body-list">
	//             <li v-for="event in selectDay.events"
	//               v-show="event.isShow"
	//                :class="[event.hasOwnProperty('classEvent') ? event.classEvent+' body-item' : 'body-item']"
	//               @click="eventClick(event,$event)">
	//               {{event.title}}
	//             </li>
	//           </ul>
	//         </div>
	//       </div>
	//
	//       <slot name="body-card">
	//
	//       </slot>
	//
	//     </div>
	//   </div>
	// </template>
	// <script type="text/babel">

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var defMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var dateFunc = {
	    getDuration: function getDuration(date) {
	        // how many days of this month
	        var dt = new Date(date);
	        var month = dt.getMonth();
	        dt.setMonth(dt.getMonth() + 1);
	        dt.setDate(0);
	        return dt.getDate();
	    },
	    changeDay: function changeDay(date, num) {
	        var dt = new Date(date);
	        return new Date(dt.setDate(dt.getDate() + num));
	    },
	    getStartDate: function getStartDate(date) {
	        // return first day of this month
	        return new Date(date.getFullYear(), date.getMonth(), 1);
	    },
	    getEndDate: function getEndDate(date) {
	        // get last day of this month
	        var dt = new Date(date.getFullYear(), date.getMonth() + 1, 1); // 1st day of next month
	        return new Date(dt.setDate(dt.getDate() - 1)); // last day of this month
	    },
	    format: function format(date, _format, monthNames) {
	        monthNames = monthNames || defMonthNames;
	        if (typeof date === 'string') {
	            date = new Date(date.replace(/-/g, '/'));
	        } else {
	            date = new Date(date);
	        }

	        var map = {
	            'M': date.getMonth() + 1,
	            'd': date.getDate(),
	            'h': date.getHours(),
	            'm': date.getMinutes(),
	            's': date.getSeconds(),
	            'q': Math.floor((date.getMonth() + 3) / 3),
	            'S': date.getMilliseconds()
	        };

	        _format = _format.replace(/([yMdhmsqS])+/g, function (all, t) {
	            var v = map[t];
	            if (v !== undefined) {
	                if (all === 'MMMM') {
	                    return monthNames[v - 1];
	                }
	                if (all === 'MMM') {
	                    return shortMonth[v - 1];
	                }
	                if (all.length > 1) {
	                    v = '0' + v;
	                    v = v.substr(v.length - 2);
	                }
	                return v;
	            } else if (t === 'y') {
	                return String(date.getFullYear()).substr(4 - all.length);
	            }
	            return all;
	        });
	        return _format;
	    }
	};

	module.exports = dateFunc;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "\n  <div class=\"full-calendar-body\">\n    <div class=\"weeks\">\n      <strong class=\"week\" v-for=\"week in weekNames\">{{week}}</strong>\n    </div>\n    <div class=\"dates\" ref=\"dates\">\n      <div class=\"dates-bg\">\n        <div class=\"week-row\" v-for=\"week in currentDates\">\n          <div class=\"day-cell\" v-for=\"day in week\"\n            :class=\"{'today' : day.isToday,\n              'not-cur-month' : !day.isCurMonth}\">\n            <p class=\"day-number\">{{day.monthDay}}</p>\n          </div>\n        </div>\n      </div>\n\n      <!-- absolute so we can make dynamic td -->\n      <div class=\"dates-events\">\n        <div class=\"events-week\" v-for=\"(week, ntd) in currentDates\">\n          <div class=\"events-day\" v-for=\"(day, index) in week\" track-by=\"$index\"\n            :class=\"{'today' : day.isToday,\n              'not-cur-month' : !day.isCurMonth}\" @click.stop=\"dayClick(day.date, $event)\">\n            <p class=\"day-number\">{{day.monthDay}}</p>\n            <div class=\"event-box\">\n              <p class=\"event-item\" v-for=\"event in day.events\" v-show=\"event.cellIndex <= eventLimit\"\n                 :class=\"[event.hasOwnProperty('classEvent') ? event.classEvent : '',\n                 {\n                  'event-item' : true,\n                  'is-start'   : isStart(event.start, day.date),\n                  'is-end'     : isEnd(event.end,day.date),\n                  'is-opacity' : !event.isShow,\n                  }]\"\n                @click=\"eventClick(event,$event)\">\n                {{isBegin(event, day.date, day.weekDay)}}\n              </p>\n              <p v-if=\"day.events.length > eventLimit\"\n                class=\"more-link\" @click.stop=\"selectThisDay(day, $event, index, ntd)\">\n                + {{day.events[day.events.length -1].cellIndex - eventLimit}} more\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- full events when click show more -->\n      <div class=\"more-events\" v-show=\"showMore\"\n        :style=\"{left: morePos.left + 'px', top: morePos.top + 'px'}\">\n        <div class=\"more-header\">\n          <span class=\"title\">{{moreTitle(selectDay.date)}}</span>\n          <span class=\"close\" @click.stop=\"showMore = false\">x</span>\n        </div>\n        <div class=\"more-body\">\n          <ul class=\"body-list\">\n            <li v-for=\"event in selectDay.events\"\n              v-show=\"event.isShow\"\n               :class=\"[event.hasOwnProperty('classEvent') ? event.classEvent+' body-item' : 'body-item']\"\n              @click=\"eventClick(event,$event)\">\n              {{event.title}}\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <slot name=\"body-card\">\n\n      </slot>\n\n    </div>\n  </div>\n";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(15)
	__vue_script__ = __webpack_require__(17)
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Volumes/DATA/DEV/git/vue-fullcalendar/src/components/header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0bebf176&file=header.vue!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0bebf176&file=header.vue!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".full-calendar-header {\n  display: flex;\n  align-items: center; }\n  .full-calendar-header .header-left, .full-calendar-header .header-right {\n    flex: 1; }\n  .full-calendar-header .header-center {\n    flex: 3;\n    text-align: center; }\n    .full-calendar-header .header-center .title {\n      margin: 0 10px; }\n    .full-calendar-header .header-center .prev-month, .full-calendar-header .header-center .next-month {\n      cursor: pointer; }\n", ""]);

	// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dateFunc = __webpack_require__(12);

	var _dateFunc2 = _interopRequireDefault(_dateFunc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  created: function created() {
	    this.dispatchEvent();
	  },

	  props: {
	    currentDate: {},
	    titleFormat: {},
	    firstDay: {},
	    monthNames: {}
	  },
	  data: function data() {
	    return {
	      title: '',
	      leftArrow: '<',
	      rightArrow: '>',
	      headDate: new Date()
	    };
	  },

	  watch: {
	    currentDate: function currentDate(val) {
	      if (!val) return;
	      this.headDate = val;
	      console.log('currentDate', val);
	      // this.headDate = JSON.parse(JSON.stringify(val))
	    }
	  },
	  methods: {
	    goPrev: function goPrev() {
	      this.headDate = this.changeMonth(this.headDate, -1);
	      this.dispatchEvent();
	    },
	    goNext: function goNext() {
	      this.headDate = this.changeMonth(this.headDate, 1);
	      this.dispatchEvent();
	    },
	    changeMonth: function changeMonth(date, num) {
	      var dt = new Date(date);
	      return new Date(dt.setMonth(dt.getMonth() + num));
	    },
	    dispatchEvent: function dispatchEvent() {
	      this.title = _dateFunc2.default.format(this.headDate, this.titleFormat, this.monthNames);

	      var startDate = _dateFunc2.default.getStartDate(this.headDate);
	      var curWeekDay = startDate.getDay();

	      // 1st day of this monthView
	      var diff = parseInt(this.firstDay) - curWeekDay;
	      if (diff) diff -= 7;
	      startDate.setDate(startDate.getDate() + diff);

	      // the month view is 6*7
	      var endDate = _dateFunc2.default.changeDay(startDate, 41);

	      // 1st day of current month
	      var currentDate = _dateFunc2.default.getStartDate(this.headDate);

	      this.$emit('change', _dateFunc2.default.format(startDate, 'yyyy-MM-dd'), _dateFunc2.default.format(endDate, 'yyyy-MM-dd'), _dateFunc2.default.format(currentDate, 'yyyy-MM-dd'), this.headDate);
	    }
	  }
	  // </script>
	  // <style lang="scss">
	  // .full-calendar-header{
	  //   display: flex;
	  //   align-items: center;
	  //   .header-left,.header-right{
	  //     flex:1;
	  //   }
	  //   .header-center{
	  //     flex:3;
	  //     text-align:center;
	  //     .title{
	  //       margin: 0 10px;
	  //     }
	  //     .prev-month,.next-month{
	  //       cursor: pointer;
	  //     }
	  //   }
	  // }
	  // </style>
	  //

	}; // <template>
	//   <div class="full-calendar-header">
	//     <div class="header-left">
	//       <slot name="header-left">
	//       </slot>
	//     </div>
	//     <div class="header-center">
	//       <span class="prev-month" @click.stop="goPrev">{{leftArrow}}</span>
	//       <span class="title">{{title}}</span>
	//       <span class="next-month" @click.stop="goNext">{{rightArrow}}</span>
	//     </div>
	//     <div class="header-right">
	//       <slot name="header-right">
	//       </slot>
	//     </div>
	//   </div>
	// </template>
	// <script type="text/babel">

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "\n  <div class=\"full-calendar-header\">\n    <div class=\"header-left\">\n      <slot name=\"header-left\">\n      </slot>\n    </div>\n    <div class=\"header-center\">\n      <span class=\"prev-month\" @click.stop=\"goPrev\">{{leftArrow}}</span>\n      <span class=\"title\">{{title}}</span>\n      <span class=\"next-month\" @click.stop=\"goNext\">{{rightArrow}}</span>\n    </div>\n    <div class=\"header-right\">\n      <slot name=\"header-right\">\n      </slot>\n    </div>\n  </div>\n";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "\n  <div class=\"comp-full-calendar\">\n    <!-- header pick month -->\n    <fc-header :current-date=\"currentDate\" \n      :title-format=\"titleFormat\"\n      :first-day=\"firstDay\"\n      :month-names=\"monthNames\"\n      @change=\"emitChangeMonth\">\n\n      <div slot=\"header-left\">\n        <slot name=\"fc-header-left\">\n        </slot>\n      </div>\n\n      <div slot=\"header-right\">\n        <slot name=\"fc-header-right\">\n        </slot>\n      </div>\n    </fc-header>\n    <!-- body display date day and events -->\n    <fc-body :current-date=\"currentDate\" :events=\"events\" :month-names=\"monthNames\" \n      :week-names=\"weekNames\" :first-day=\"firstDay\"\n      @eventclick=\"emitEventClick\" @dayclick=\"emitDayClick\"\n      @moreclick=\"emitMoreClick\">\n      <div slot=\"body-card\">\n        <slot name=\"fc-body-card\">\n        </slot>\n      </div>\n    </fc-body>\n  </div>\n";

/***/ })
/******/ ])
});
;