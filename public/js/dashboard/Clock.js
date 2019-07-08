webpackJsonp([14],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}],\"@babel/plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/Clock.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atoms_Tile__ = __webpack_require__("./resources/js/components/Dashboard/atoms/Tile.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atoms_Tile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__atoms_Tile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_timezone__ = __webpack_require__("./node_modules/moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment_timezone__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  i18n: {
    messages: {
      'ja-JP': {
        message: {
          'Asia/Tokyo': '東京',
          'Europe/Amsterdam': 'ヨーロッパ/アムステルダム',
          'Europe/Rome': 'ヨーロッパ/ローマ',
          'America/New_York': 'アメリカ/ニューヨーク',
          'America/Chicago': 'アメリカ/シカゴ'
        }
      },
      'en-US': {
        message: {
          'Asia/Tokyo': 'Asia/Tokyo',
          'Europe/Amsterdam': 'Europe/Amsterdam',
          'Europe/Rome': 'Europe/Rome',
          'America/New_York': 'America/New York',
          'America/Chicago': 'America/Chicago'
        }
      }
    }
  },
  components: {
    Tile: __WEBPACK_IMPORTED_MODULE_0__atoms_Tile___default.a
  },
  props: {
    position: {
      type: String
    },
    dateFormat: {
      type: String,
      required: false,
      "default": 'LL'
    }
  },
  data: function data() {
    return {
      time: '',
      diameter: 150,
      type: 'analog'
    };
  },
  computed: {
    radius: function radius() {
      return this.diameter / 2;
    },
    hour: function hour() {
      return 30 * (this.time.hours() % 12 + this.time.minutes() / 60);
    },
    minute: function minute() {
      return this.time.minutes() * 6;
    },
    seconds: function seconds() {
      return this.time.seconds() * 6;
    }
  },
  created: function created() {
    this.type = window.Volta.preferences.dashboard.clock.type;
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.refreshTime();
    setInterval(this.refreshTime, 1000);
  },
  methods: {
    refreshTime: function refreshTime() {
      this.time = __WEBPACK_IMPORTED_MODULE_1_moment_timezone___default.a.tz(this.timeZone).locale(window.Volta.locale);
    },
    hourTick: function hourTick(hour) {
      return 'rotate(' + hour * 30 + ',' + this.radius + ',' + this.radius + ')';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}],\"@babel/plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/atoms/Tile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__("./resources/js/helpers.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['position', 'modifiers'],
  computed: {
    tilePosition: function tilePosition() {
      return "grid-area: ".concat(Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["h" /* positionToGridAreaNotation */])(this.position));
    },
    tileLook: function tileLook() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* addClassModifiers */])('tile', this.modifiers);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4dfc17c1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/atoms/Tile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.tileLook, style: _vm.tilePosition },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4dfc17c1", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-756650d0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/Clock.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tile", { attrs: { position: _vm.position, modifiers: "clock" } }, [
    _c("section", { staticClass: "clock-main" }, [
      _c("div", { staticClass: "clock-main__timezone" }, [
        _vm._v(_vm._s(_vm.$t("message." + this.timeZone)))
      ]),
      _vm._v(" "),
      _vm.type === "analog"
        ? _c("div", { staticClass: "clock-main__clock" }, [
            _c(
              "svg",
              {
                attrs: {
                  height: _vm.diameter,
                  viewBox: "0 0 150 150",
                  version: "1.2",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("circle", {
                  staticClass: "clock__face",
                  attrs: { r: "55", cx: _vm.radius, cy: _vm.radius }
                }),
                _vm._v(" "),
                _c("line", {
                  staticClass: "clock__hand-hour",
                  attrs: {
                    x1: _vm.radius,
                    y1: _vm.radius + 8,
                    x2: _vm.radius,
                    y2: _vm.radius - 18,
                    transform:
                      "rotate(" +
                      _vm.hour +
                      "," +
                      _vm.radius +
                      "," +
                      _vm.radius +
                      ")"
                  }
                }),
                _vm._v(" "),
                _c("line", {
                  staticClass: "clock__hand-minute",
                  attrs: {
                    x1: _vm.radius,
                    y1: _vm.radius + 8,
                    x2: _vm.radius,
                    y2: _vm.radius - 30,
                    transform:
                      "rotate(" +
                      _vm.minute +
                      "," +
                      _vm.radius +
                      "," +
                      _vm.radius +
                      ")"
                  }
                }),
                _vm._v(" "),
                _c("line", {
                  staticClass: "clock__hand-second",
                  attrs: {
                    x1: _vm.radius,
                    y1: _vm.radius + 12,
                    x2: _vm.radius,
                    y2: _vm.radius - 35,
                    transform:
                      "rotate(" +
                      _vm.seconds +
                      "," +
                      _vm.radius +
                      "," +
                      _vm.radius +
                      ")"
                  }
                }),
                _vm._v(" "),
                _c("circle", {
                  staticClass: "clock__hand-second-center",
                  attrs: { r: "5", cx: _vm.radius, cy: _vm.radius }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  {
                    staticClass: "clock__face-ticks",
                    attrs: { id: "hour_ticks" }
                  },
                  [
                    _vm._l(12, function(h) {
                      return [
                        _c("line", {
                          attrs: {
                            x1: 75,
                            y1: _vm.radius - 46,
                            x2: _vm.radius,
                            y2: _vm.radius - 42,
                            transform:
                              "rotate(" +
                              h * 30 +
                              "," +
                              _vm.radius +
                              "," +
                              _vm.radius +
                              ")"
                          }
                        })
                      ]
                    })
                  ],
                  2
                )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.type === "digital"
        ? _c(
            "div",
            { staticClass: "clock-main__clock clock-main__clock--digital" },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.time.format("LT")) + "\n        "
              )
            ]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("section", {
      staticClass: "clock-date",
      domProps: { textContent: _vm._s(_vm.time.format(_vm.dateFormat)) }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-756650d0", module.exports)
  }
}

/***/ }),

/***/ "./resources/js/components/Dashboard/Clock.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}],\"@babel/plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/Clock.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-756650d0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/Clock.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Dashboard/Clock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-756650d0", Component.options)
  } else {
    hotAPI.reload("data-v-756650d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/Dashboard/atoms/Tile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}],\"@babel/plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dashboard/atoms/Tile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4dfc17c1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dashboard/atoms/Tile.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Dashboard/atoms/Tile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dfc17c1", Component.options)
  } else {
    hotAPI.reload("data-v-4dfc17c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = isNew;
/* harmony export (immutable) */ __webpack_exports__["e"] = formatPrintJobDuration;
/* harmony export (immutable) */ __webpack_exports__["d"] = formatETA;
/* harmony export (immutable) */ __webpack_exports__["g"] = numberFormat;
/* harmony export (immutable) */ __webpack_exports__["b"] = dateFormat;
/* harmony export (immutable) */ __webpack_exports__["c"] = diffForHumans;
/* harmony export (immutable) */ __webpack_exports__["a"] = addClassModifiers;
/* harmony export (immutable) */ __webpack_exports__["h"] = positionToGridAreaNotation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone__ = __webpack_require__("./node_modules/moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_duration_format__ = __webpack_require__("./node_modules/moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_duration_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment_duration_format__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/**
 * Checks whether a given date took place recently (within the given period)
 *
 * @param {*} value the date value (string)
 * @param {*} period the number days to look back
 */

function isNew(value) {
  var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  var date = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default()(value).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).locale(window.Volta.locale);
  var fence = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default()().subtract(period, 'days');
  return fence.isSameOrBefore(date);
}
/**
 * Formats a given time duration
 *
 * @param {*} duration the time duration (in seconds)
 */

function formatPrintJobDuration(duration) {
  __WEBPACK_IMPORTED_MODULE_1_moment_duration_format___default()(__WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a);
  return __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.duration(duration, 'seconds').locale(window.Volta.locale).format('dd:hh:mm:ss', {
    trim: false
  });
}
/**
 * Returns the estimated time of arrival for the given period (in seconds)
 *
 * The time is formatted with the locale from the authenticated user.
 *
 * @param {*} seconds the period (in seconds)
 */

function formatETA(seconds) {
  var eta = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default()().add(seconds, 's');
  eta.locale(window.Volta.locale);
  return eta.format('LTS');
}
/**
 * Formats a given number value.
 *
 * The number is formatted with the locale from the authenticated user.
 *
 * @param {*} value the date value (string)
 * @param {*} digits the number of decimal digits to use
 */

function numberFormat(value) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return new Intl.NumberFormat(window.Volta.locale, {
    maximumFractionDigits: digits
  }).format(value);
}
/**
 * Formats a given date value.
 *
 * The date is formatted with the locale from the authenticated user.
 *
 * @param {*} value the date value (string) in UTC
 * @param {*} format the format pattern to use
 */

function dateFormat(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'D-M-Y';
  var date = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.tz(value, 'UTC').tz(Intl.DateTimeFormat().resolvedOptions().timeZone).locale(window.Volta.locale);
  return date.format(format);
}
/**
 * Displays a time period (difference) in human readable format.
 *
 * The value is formatted with the locale of the authenticated user.
 *
 * @param {*} value the date the time period needs to be based on
 */

function diffForHumans(value) {
  var date = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default()(value).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).locale(window.Volta.locale);

  if (__WEBPACK_IMPORTED_MODULE_0_moment_timezone___default()().isSame(date, 'd')) {
    return 'Today';
  }

  if (__WEBPACK_IMPORTED_MODULE_0_moment_timezone___default()().isAfter(date)) {
    return date.fromNow(false);
  }

  return 'in ' + date.toNow(true);
}
function addClassModifiers(base) {
  var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!Array.isArray(modifiers)) {
    modifiers = modifiers.split(' ');
  }

  modifiers = modifiers.map(function (modifier) {
    return "".concat(base, "--").concat(modifier);
  });
  return [base].concat(_toConsumableArray(modifiers));
}
function positionToGridAreaNotation(position) {
  var _position$toLowerCase = position.toLowerCase().split(':'),
      _position$toLowerCase2 = _slicedToArray(_position$toLowerCase, 2),
      from = _position$toLowerCase2[0],
      _position$toLowerCase3 = _position$toLowerCase2[1],
      to = _position$toLowerCase3 === void 0 ? null : _position$toLowerCase3;

  if (from.length !== 2 || to && to.length !== 2) {
    return;
  }

  var areaFrom = "".concat(from[1], " / ").concat(indexInAlphabet(from[0]));
  return to ? "".concat(areaFrom, " / ").concat(Number(to[1]) + 1, " / ").concat(indexInAlphabet(to[0]) + 1) : areaFrom;
}

function indexInAlphabet(character) {
  var index = character.toLowerCase().charCodeAt(0) - 96;
  return index < 1 ? 1 : index;
}

/***/ })

});