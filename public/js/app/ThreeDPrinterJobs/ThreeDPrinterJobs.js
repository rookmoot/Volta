webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}],\"@babel/plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ThreeDPrinterJobs/ThreeDPrinterJobs.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fieldDefs_js__ = __webpack_require__("./resources/assets/js/components/ThreeDPrinterJobs/fieldDefs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_icons_compiled_plus_js__ = __webpack_require__("./resources/svg-icons/compiled/plus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_icons_compiled_plus_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_icons_compiled_plus_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_icons_compiled_actions_js__ = __webpack_require__("./resources/svg-icons/compiled/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_icons_compiled_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__svg_icons_compiled_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_icons_compiled_404_js__ = __webpack_require__("./resources/svg-icons/compiled/404.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_icons_compiled_404_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__svg_icons_compiled_404_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_icons_compiled_mini_refresh_circle_js__ = __webpack_require__("./resources/svg-icons/compiled/mini_refresh_circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_icons_compiled_mini_refresh_circle_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__svg_icons_compiled_mini_refresh_circle_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_helpers__ = __webpack_require__("./resources/js/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_status_indicator__ = __webpack_require__("./node_modules/vue-status-indicator/dist/vue-status-indicator.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_epic_spinners__ = __webpack_require__("./node_modules/epic-spinners/src/lib.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_loading_overlay__ = __webpack_require__("./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_loading_overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vue_loading_overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue_loading_overlay_dist_vue_loading_css__ = __webpack_require__("./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue_loading_overlay_dist_vue_loading_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vue_loading_overlay_dist_vue_loading_css__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  i18n: __webpack_require__("./resources/assets/js/components/ThreeDPrinterJobs/i18n.js"),
  components: {
    StatusIndicator: __WEBPACK_IMPORTED_MODULE_8_vue_status_indicator__["a" /* StatusIndicator */],
    HalfCircleSpinner: __WEBPACK_IMPORTED_MODULE_9_epic_spinners__["HalfCircleSpinner"],
    Loading: __WEBPACK_IMPORTED_MODULE_10_vue_loading_overlay___default.a
  },
  props: {},
  data: function data() {
    return {
      isLoading: false,
      fullPage: false,
      sortBy: 'started_at',
      sortDesc: true,
      fields: Object(__WEBPACK_IMPORTED_MODULE_2__fieldDefs_js__["a" /* default */])(this.$i18n),
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      collection: [],
      filter: {
        search: '',
        machine: 'all',
        result: 'all'
      },
      total: {
        filament: 0,
        duration: 0
      }
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  computed: {
    resultFilterOptions: function resultFilterOptions() {
      return [{
        text: this.$t('filter.result.option_all'),
        value: 'all'
      }, {
        text: this.$t('filter.result.option_in_progress'),
        value: 'in_progress'
      }, {
        text: this.$t('filter.result.option_success'),
        value: 'success'
      }, {
        text: this.$t('filter.result.option_failed'),
        value: 'failed'
      }];
    },
    resultMachineOptions: function resultMachineOptions() {
      return _toConsumableArray(new Set(this.collection.map(function (item) {
        return item.machine.name;
      }))).sort().map(function (f) {
        return {
          text: f,
          value: f
        };
      });
    }
  },
  methods: {
    formatFilamentUsage: function formatFilamentUsage(record) {
      var details = JSON.parse(record);

      if (details && details.filament_length > 0) {
        return Object(__WEBPACK_IMPORTED_MODULE_7__js_helpers__["g" /* numberFormat */])(details.filament_length / 1000);
      }

      return 0;
    },
    filterFunction: function filterFunction(record) {
      return (this.filter.result === 'all' || this.filter.result === record.status) && (this.filter.machine === 'all' || record.machine.name === this.filter.machine) && (this.filter.search === '' || record.name.toLowerCase().indexOf(this.filter.search.toLowerCase()) > -1 || record.job_id.toLowerCase().indexOf(this.filter.search.toLowerCase()) > -1);
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1; // Recalculate total used filament and total print time (based on filtered set)

      this.total.filament = filteredItems.map(function (item) {
        return JSON.parse(item.details).filament_length;
      }).reduce(function (a, b) {
        return a + b;
      });
      this.total.duration = filteredItems.map(function (item) {
        return item.duration;
      }).reduce(function (a, b) {
        return a + b;
      });
    },
    deleteItem: function deleteItem(id) {
      var _this = this;

      var conf = confirm(this.$t('confirmations.delete'));
      var index = this.collection.findIndex(function (x) {
        return x.id === id;
      });

      if (conf === true) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a["delete"]('/api/threedprinterjobs/' + id).then(function (response) {
          _this.collection.splice(index, 1);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    toggleResult: function toggleResult(id, value) {
      var _this2 = this;

      this.isLoading = true;
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.patch('/api/threedprinterjobs/' + id, {
        status: value
      }).then(function (response) {
        _this2.getData();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getData: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var response, collectionData, i, o, attr, key;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/threedprinterjobs');

              case 4:
                response = _context.sent;
                // Remap JSON:API data to simple array with objects as its elements
                collectionData = response.data.data;
                this.collection = [];

                for (i = 0; i < collectionData.length; i++) {
                  o = {};
                  o.id = collectionData[i].id; // Need to fetch primary key
                  // Fetch all the attributes

                  attr = collectionData[i].attributes;

                  for (key in attr) {
                    if (attr.hasOwnProperty(key)) o[key] = attr[key];
                  }

                  this.collection.push(o);
                } // Calculate totals


                this.total.duration = this.collection.map(function (item) {
                  return item.duration;
                }).reduce(function (a, b) {
                  return a + b;
                });
                this.total.filament = this.collection.map(function (item) {
                  return JSON.parse(item.details).filament_length;
                }).reduce(function (a, b) {
                  return a + b;
                });
                this.totalRows = collectionData.length;
                this.isLoading = false;
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                return _context.abrupt("return", []);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 14]]);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }(),
    formatPrintJobDuration: __WEBPACK_IMPORTED_MODULE_7__js_helpers__["e" /* formatPrintJobDuration */],
    dateFormat: __WEBPACK_IMPORTED_MODULE_7__js_helpers__["b" /* dateFormat */],
    numberFormat: __WEBPACK_IMPORTED_MODULE_7__js_helpers__["g" /* numberFormat */]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loading-overlay/dist/vue-loading.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 1\n}\n\n.vld-overlay.is-active {\n  display: flex\n}\n\n.vld-overlay.is-full-page {\n  z-index: 999;\n  position: fixed\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-31acc484\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ThreeDPrinterJobs/ThreeDPrinterJobs.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "loading",
        {
          attrs: {
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": _vm.fullPage,
            opacity: 0.9
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        },
        [
          _c("half-circle-spinner", {
            attrs: { "animation-duration": 1000, size: 30, color: "#f5b180" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid row pr-0" }, [
        _c("div", { staticClass: "p-2 card-title" }, [
          _vm._v(
            "\n            " +
              _vm._s(
                _vm.$t("main_title", {
                  filteredRows: this.totalRows,
                  totalRows: this.collection.length
                })
              ) +
              "\n        "
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "ml-auto p-2" },
          [
            _c(
              "b-link",
              {
                attrs: { href: "#", title: _vm.$t("title.refresh") },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.getData($event)
                  }
                }
              },
              [
                _c("svgicon", {
                  staticClass: "mini_refresh_data",
                  attrs: {
                    icon: "mini_refresh_circle",
                    title: _vm.$t("title.refresh")
                  }
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.collection.length
        ? _c(
            "div",
            [
              _c("div", { staticClass: "d-flex" }, [
                _c("div", { staticClass: "p-2" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ml-auto p-2 d-inline-flex" },
                  [
                    _c(
                      "b-form-group",
                      {
                        staticClass: "mr-3",
                        attrs: {
                          label: _vm.$t("filter.search.label"),
                          "label-for": "filter_search",
                          "label-size": "sm"
                        }
                      },
                      [
                        _c(
                          "b-input-group",
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "filter_search",
                                size: "sm",
                                placeholder:
                                  _vm.$t("filter.search.label") + "..."
                              },
                              model: {
                                value: _vm.filter.search,
                                callback: function($$v) {
                                  _vm.$set(_vm.filter, "search", $$v)
                                },
                                expression: "filter.search"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-input-group-append",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    attrs: {
                                      size: "sm",
                                      disabled: !_vm.filter.search
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.filter.search = ""
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("filter.search.clear")) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      {
                        staticClass: "mr-3",
                        attrs: {
                          label: _vm.$t("filter.result.label"),
                          "label-for": "filter_result",
                          "label-size": "sm"
                        }
                      },
                      [
                        _c("b-form-radio-group", {
                          attrs: {
                            id: "filter_result",
                            buttons: "",
                            options: _vm.resultFilterOptions,
                            size: "sm",
                            "button-variant": "outline-primary"
                          },
                          model: {
                            value: _vm.filter.result,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "result", $$v)
                            },
                            expression: "filter.result"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      {
                        staticClass: "mr-3",
                        attrs: {
                          label: _vm.$t("filter.printer.label"),
                          "label-for": "filter_machine",
                          "label-size": "sm"
                        }
                      },
                      [
                        _c(
                          "b-form-select",
                          {
                            attrs: {
                              id: "filter_machine",
                              options: _vm.resultMachineOptions,
                              size: "sm"
                            },
                            model: {
                              value: _vm.filter.machine,
                              callback: function($$v) {
                                _vm.$set(_vm.filter, "machine", $$v)
                              },
                              expression: "filter.machine"
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                attrs: { slot: "first", value: "all" },
                                slot: "first"
                              },
                              [
                                _vm._v(
                                  "-- " +
                                    _vm._s(_vm.$t("filter.printer.all")) +
                                    " --\n                        "
                                )
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("b-table", {
                staticClass: "volta",
                attrs: {
                  "sort-by": _vm.sortBy,
                  "sort-desc": _vm.sortDesc,
                  "filter-function": _vm.filterFunction,
                  filter: _vm.filter,
                  items: _vm.collection,
                  fields: _vm.fields,
                  "current-page": _vm.currentPage,
                  "per-page": _vm.perPage,
                  "foot-clone": "",
                  "no-footer-sorting": ""
                },
                on: {
                  "update:sortBy": function($event) {
                    _vm.sortBy = $event
                  },
                  "update:sort-by": function($event) {
                    _vm.sortBy = $event
                  },
                  "update:sortDesc": function($event) {
                    _vm.sortDesc = $event
                  },
                  "update:sort-desc": function($event) {
                    _vm.sortDesc = $event
                  },
                  filtered: _vm.onFiltered
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "name",
                      fn: function(row) {
                        return [
                          row.item.status === "success"
                            ? _c("status-indicator", {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true }
                                  }
                                ],
                                attrs: {
                                  positive: "",
                                  title: _vm.$t(
                                    "title.status_indicator.success"
                                  )
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          row.item.status === "failed"
                            ? _c("status-indicator", {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true }
                                  }
                                ],
                                attrs: {
                                  negative: "",
                                  title: _vm.$t("title.status_indicator.failed")
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          row.item.status === "in_progress"
                            ? _c("status-indicator", {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true }
                                  }
                                ],
                                attrs: {
                                  active: "",
                                  pulse: "",
                                  title: _vm.$t(
                                    "title.status_indicator.in_progress"
                                  )
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "d-inline-block" }, [
                            row.value.length > 30
                              ? _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    attrs: { title: row.value }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          row.value.replace(/(.{30})..+/, "$1…")
                                        ) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              : _c("div", [_vm._v(_vm._s(row.value))]),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-muted small" }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(
                                    _vm.$t("job_id", { id: row.item.job_id })
                                  ) +
                                  "\n                    "
                              )
                            ])
                          ])
                        ]
                      }
                    },
                    {
                      key: "started_at",
                      fn: function(row) {
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.dateFormat(row.item.started_at, "L LTS")
                              ) +
                              "\n            "
                          )
                        ]
                      }
                    },
                    {
                      key: "duration",
                      fn: function(row) {
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.formatPrintJobDuration(row.item.duration)
                              ) +
                              "\n                "
                          ),
                          _c("div", { staticClass: "text-muted small" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.$t("usage", {
                                    usage: _vm.formatFilamentUsage(
                                      row.item.details
                                    )
                                  })
                                ) +
                                "\n                "
                            )
                          ])
                        ]
                      }
                    },
                    {
                      key: "machine",
                      fn: function(row) {
                        return [
                          _c("b-link", { attrs: { href: "/machines" } }, [
                            _vm._v(_vm._s(row.item.machine.name))
                          ])
                        ]
                      }
                    },
                    {
                      key: "actions",
                      fn: function(row) {
                        return [
                          row.item.status !== "in_progress"
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "b-dropdown",
                                    {
                                      attrs: {
                                        variant: "link",
                                        size: "sm",
                                        right: "",
                                        "no-caret": ""
                                      }
                                    },
                                    [
                                      _c(
                                        "template",
                                        { slot: "button-content" },
                                        [
                                          _c("svgicon", {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName: "v-b-tooltip.hover",
                                                modifiers: { hover: true }
                                              }
                                            ],
                                            staticClass: "action-icon-md",
                                            attrs: {
                                              title: _vm.$t(
                                                "title.more_actions"
                                              ),
                                              icon: "actions"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-dropdown-item",
                                        {
                                          attrs: {
                                            href: "#",
                                            title: _vm.$t("title.delete", {
                                              name: row.item.name
                                            })
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.deleteItem(row.item.id)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Delete\n                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("b-dropdown-divider"),
                                      _vm._v(" "),
                                      row.item.status === "failed"
                                        ? _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                title: _vm.$t(
                                                  "title.mark_as_successful"
                                                )
                                              },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.toggleResult(
                                                    row.item.id,
                                                    "success"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "Mark as Successful\n                        "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      row.item.status === "success"
                                        ? _c(
                                            "b-dropdown-item",
                                            {
                                              attrs: {
                                                title: _vm.$t(
                                                  "title.mark_as_failed"
                                                )
                                              },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.toggleResult(
                                                    row.item.id,
                                                    "failed"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "Mark as Failed\n                        "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      }
                    },
                    {
                      key: "FOOT_machine",
                      fn: function(data) {
                        return [_vm._v("\n                 \n            ")]
                      }
                    },
                    {
                      key: "FOOT_started_at",
                      fn: function(data) {
                        return [_vm._v("\n                 \n            ")]
                      }
                    },
                    {
                      key: "FOOT_name",
                      fn: function(data) {
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.$t("total")) +
                              "\n            "
                          )
                        ]
                      }
                    },
                    {
                      key: "FOOT_duration",
                      fn: function(data) {
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.formatPrintJobDuration(_vm.total.duration)
                              ) +
                              "\n                "
                          ),
                          _c("div", { staticClass: "text-muted small" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.$t("usage", {
                                    usage: _vm.numberFormat(
                                      _vm.total.filament / 1000
                                    )
                                  })
                                ) +
                                "\n                "
                            )
                          ])
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  126486678
                )
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-center flex-column" },
                [
                  _vm.totalRows > _vm.perPage
                    ? _c("b-pagination", {
                        staticClass: "my-0",
                        attrs: {
                          "total-rows": _vm.totalRows,
                          "per-page": _vm.perPage
                        },
                        model: {
                          value: _vm.currentPage,
                          callback: function($$v) {
                            _vm.currentPage = $$v
                          },
                          expression: "currentPage"
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : !_vm.isLoading
        ? _c("div", { staticClass: "container-fluid" }, [
            _c(
              "div",
              { attrs: { id: "no-data" } },
              [
                _c("svgicon", { attrs: { icon: "404" } }),
                _vm._v(" "),
                _c("div", [_vm._v(_vm._s(_vm.$t("no_data")))])
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-31acc484", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loading-overlay/dist/vue-loading.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./vue-loading.css", function() {
			var newContent = require("!!../../css-loader/index.js!./vue-loading.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("VueLoading",[],e):"object"==typeof exports?exports.VueLoading=e():t.VueLoading=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,i,n,r,a,o,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])},[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,u=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,l=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:u},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)},150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:this.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:{background:this.backgroundColor,opacity:this.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])},[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a=Object.assign({},e,n,{programmatic:!0}),o=new(t.extend(l))({el:document.createElement("div"),propsData:a}),s=Object.assign({},i,r);return Object.keys(s).map(function(t){o.$slots[t]=s[t]}),o}}};i(0);l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c(t,e,i);t.$loading=n,t.prototype.$loading=n};e.default=l}]).default});

/***/ }),

/***/ "./node_modules/vue-status-indicator/dist/vue-status-indicator.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusIndicator; });
function __vue_normalize__(e,t,_,n,i,a,r,s){var u=_||{};return u.__file="/Users/coderdiaz/github.com/coderdiaz/vue-status-indicator/src/components/StatusIndicator.vue",u.render||(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),u._scopeId=n,u}function __vue_create_injector__(){var e=document.head||document.getElementsByTagName("head")[0],t={},_="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(n,i){if(!document.querySelector('style[data-vue-ssr-id~="'+n+'"]')){var a=_?i.media||"default":n,r=t[a]||(t[a]={ids:[],parts:[],element:void 0});if(!r.ids.includes(n)){var s=i.source,u=r.ids.length;if(r.ids.push(n),_&&(r.element=r.element||document.querySelector("style[data-group="+a+"]")),!r.element){var d=r.element=document.createElement("style");d.type="text/css",i.media&&d.setAttribute("media",i.media),_&&(d.setAttribute("data-group",a),d.setAttribute("data-next-index","0")),e.appendChild(d)}if(_&&(u=parseInt(r.element.getAttribute("data-next-index")),r.element.setAttribute("data-next-index",u+1)),r.element.styleSheet)r.parts.push(s),r.element.styleSheet.cssText=r.parts.filter(Boolean).join("\n");else{var l=document.createTextNode(s),o=r.element.childNodes;o[u]&&r.element.removeChild(o[u]),o.length?r.element.insertBefore(l,o[u]):r.element.appendChild(l)}}}}}function install(e){install.installed||(install.installed=!0,e.component("StatusIndicator",StatusIndicator))}var script={name:"StatusIndicator"},__vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"status-indicator"})},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;var __vue_template__=void 0!==__vue_render__?{render:__vue_render__,staticRenderFns:__vue_staticRenderFns__}:{},__vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,StatusIndicator=__vue_normalize__(__vue_template__,__vue_inject_styles__,void 0===__vue_script__?{}:__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,void 0!==__vue_create_injector__?__vue_create_injector__:function(){},"undefined"!=typeof __vue_create_injector_ssr__?__vue_create_injector_ssr__:function(){}),plugin={install:install},GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin);/* unused harmony default export */ var _unused_webpack_default_export = (plugin);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/assets/js/components/ThreeDPrinterJobs/ThreeDPrinterJobs.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}],\"@babel/plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ThreeDPrinterJobs/ThreeDPrinterJobs.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-31acc484\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ThreeDPrinterJobs/ThreeDPrinterJobs.vue")
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
Component.options.__file = "resources/assets/js/components/ThreeDPrinterJobs/ThreeDPrinterJobs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31acc484", Component.options)
  } else {
    hotAPI.reload("data-v-31acc484", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/ThreeDPrinterJobs/fieldDefs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * This file is part of the Volta Project.
 *
 * Copyright (c) 2018 - 2019. AzuyaLabs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Sacha Telgenhof <me@sachatelgenhof.com>
 */
/* harmony default export */ __webpack_exports__["a"] = (function (i18n) {
  return [{
    key: 'name',
    label: i18n.t('fields.name'),
    sortable: true,
    "class": 'machine_jobs_column_name'
  }, {
    key: 'machine',
    label: i18n.t('fields.machine'),
    sortable: false,
    "class": 'machine_jobs_column_machine'
  }, {
    key: 'started_at',
    label: i18n.t('fields.started_at'),
    sortable: true,
    "class": 'machine_jobs_column_start'
  }, {
    key: 'duration',
    label: i18n.t('fields.duration'),
    sortable: true,
    "class": 'machine_jobs_column_duration text-right'
  }, {
    key: 'actions',
    label: '',
    sortable: false,
    "class": 'machine_jobs_column_actions'
  }];
});

/***/ }),

/***/ "./resources/assets/js/components/ThreeDPrinterJobs/i18n.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/*
 * This file is part of the Volta Project.
 *
 * Copyright (c) 2018 - 2019. AzuyaLabs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Sacha Telgenhof <me@sachatelgenhof.com>
 */
var messages = {
  'en-US': {
    main_title: 'Showing {filteredRows} of {totalRows} print jobs',
    job_id: 'Job ID: {id}',
    usage: 'Filament: {usage}m',
    no_data: "Uhm... you haven't printed anything yet. Guess it's about time, isn't it?",
    total: 'Total',
    title: {
      refresh: 'Refresh',
      "delete": 'Delete print job `{name}`',
      more_actions: 'More actions',
      mark_as_successful: 'Mark Print Job as successful',
      mark_as_failed: 'Mark Print Job as failed',
      status_indicator: {
        success: 'Success',
        failed: 'Failed',
        in_progress: 'Printing in progress'
      }
    },
    confirmations: {
      "delete": 'Do you really want to delete this print job?'
    },
    filter: {
      search: {
        label: 'Search',
        clear: 'Clear'
      },
      result: {
        label: 'Result',
        option_all: 'All',
        option_success: 'Successful',
        option_failed: 'Failed',
        option_in_progress: 'In Progress'
      },
      printer: {
        label: 'Printer',
        all: 'All'
      }
    },
    fields: {
      name: 'Name',
      machine: 'Printer',
      started_at: 'Started at',
      duration: 'Print Time'
    }
  }
};

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

/***/ }),

/***/ "./resources/svg-icons/compiled/404.js":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var icon = __webpack_require__("./node_modules/vue-svgicon/dist/components/svgicon.common.js");

icon.register({
  '404': {
    width: 62,
    height: 62,
    viewBox: '0 0 62 62',
    data: '<path pid="0" d="M49 24a17.91 17.91 0 0 0-3.177-10.215l-1.646 1.137A15.916 15.916 0 0 1 47 24c0 4.135-1.579 8.059-4.447 11.048a13.18 13.18 0 0 0-2.156 2.992c-.131-.017-.261-.04-.397-.04h-4v2h4a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-4v2h1.914A8.004 8.004 0 0 1 32 51.921V48h2v-2h-4v-2h6v-2h-2v-4h-2v-4.053a10.009 10.009 0 0 0 6.453-3.28l-1.49-1.334A8.012 8.012 0 0 1 31 32c-4.411 0-8-3.589-8-8s3.589-8 8-8c2.272 0 4.446.972 5.963 2.667l1.49-1.334A10.013 10.013 0 0 0 31 14c-.466 0-.922.043-1.372.105l-.432-1.971a12.114 12.114 0 0 1 4.574.187l.459-1.947a14.204 14.204 0 0 0-6.459 0l-.958.227.872 3.976C23.798 15.949 21 19.65 21 24c0 5.176 3.954 9.446 9 9.949V38h-2v2h4v2h-7v2h3v4h2v3.935a7.875 7.875 0 0 1-2.555-.766l-.891 1.791A9.91 9.91 0 0 0 31 54c3.996 0 7.596-2.391 9.172-6.017A2.995 2.995 0 0 0 43 45a2.98 2.98 0 0 0-.78-2c.48-.532.78-1.229.78-2 0-.795-.316-1.514-.823-2.052a11.202 11.202 0 0 1 1.819-2.516A17.88 17.88 0 0 0 49 24z"/><path pid="1" d="M21 45a1 1 0 0 1 1-1h1v-2h-1a1 1 0 0 1 0-2h4v-2h-4c-.128 0-.251.022-.375.038a11.395 11.395 0 0 0-2.025-2.832C16.864 32.43 15.296 28.823 15.055 25h1.981a13.96 13.96 0 0 0 7.501 11.412l.926-1.773A11.972 11.972 0 0 1 19 24c0-4.482 2.477-8.559 6.463-10.639l-.926-1.773A13.96 13.96 0 0 0 17.036 23h-1.98c.023-.381.034-.762.084-1.145.933-7.173 6.833-12.958 14.031-13.754 2.938-.326 5.831.16 8.427 1.335l-1.985 3.442.925.482A11.975 11.975 0 0 1 42.5 27.421l-1.812-.93c.207-.81.312-1.645.312-2.491 0-1.561-.35-3.056-1.04-4.445l-1.791.891c.403.809.656 1.666.766 2.555H36.91c-.478-2.833-2.942-5-5.91-5-3.309 0-6 2.691-6 6s2.691 6 6 6c2.967 0 5.431-2.167 5.91-5h2.021a7.958 7.958 0 0 1-.386 1.667l-.29.824 3.511 1.801a12.004 12.004 0 0 1-5.229 5.346l.926 1.773A13.964 13.964 0 0 0 45 24c0-4.882-2.516-9.351-6.632-11.896l1.001-1.736a16.048 16.048 0 0 1 2.924 2.298l1.412-1.416c-3.887-3.872-9.265-5.74-14.756-5.137-8.102.896-14.744 7.409-15.793 15.484-.725 5.569 1.105 11.042 5.02 15.013a9.376 9.376 0 0 1 1.661 2.32A2.992 2.992 0 0 0 19 41c0 .771.301 1.468.78 2a2.976 2.976 0 0 0-.78 2 2.995 2.995 0 0 0 2.835 2.983c.424.977.992 1.88 1.711 2.684l1.49-1.334c-.37-.414-.69-.86-.964-1.333H26v-2h-4a1 1 0 0 1-1-1zm10-17c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zM0 60v2h18.515L23 55.72V60h2v-8.153l-8.142 1.163.284 1.98 4.368-.624L17.485 60zM52.511 11H46v2h7.489L60 4.629V9h2V.847L53.858 2.01l.284 1.98 4.299-.614zM55 24h2v2h-2zM55 28h2v2h-2zM57 26h2v2h-2zM53 26h2v2h-2zM15 0h2v2h-2zM15 4h2v2h-2zM17 2h2v2h-2zM13 2h2v2h-2zM50 40h2v2h-2zM50 44h2v2h-2zM52 42h2v2h-2zM48 42h2v2h-2zM7 30h2v2H7zM7 34h2v2H7zM9 32h2v2H9zM5 32h2v2H5zM2 15h2v2H2zM2 19h2v2H2zM4 17h2v2H4zM0 17h2v2H0z"/>'
  }
});

/***/ }),

/***/ "./resources/svg-icons/compiled/mini_refresh_circle.js":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var icon = __webpack_require__("./node_modules/vue-svgicon/dist/components/svgicon.common.js");

icon.register({
  'mini_refresh_circle': {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    data: '<circle pid="0" cx="12" cy="12" r="10"/>'
  }
});

/***/ })

});