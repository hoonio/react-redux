module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "./components/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/hoon.kim/code/rialto/root/components/contact.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.form.heading), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "section-subheading text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.form.body))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
    action: props.form.url,
    method: "post",
    id: "ss-form",
    name: "ss-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "entry.0.single",
    id: "entry_0",
    placeholder: "Name",
    required: true,
    "data-validation-required-message": "Please enter your name.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "help-block text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "email",
    className: "form-control",
    name: "entry.1.single",
    id: "entry_1",
    placeholder: "Email",
    required: true,
    "data-validation-required-message": "Please enter your email address.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "help-block text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
    className: "form-control",
    name: "entry.2.single",
    id: "entry_2",
    placeholder: "Message",
    rows: "6",
    required: true,
    "data-validation-required-message": "Please enter a message.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "help-block text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Send Message")))));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/hoon.kim/code/rialto/root/components/contact.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/hoon.kim/code/rialto/root/components/product.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: props.prod.imageOn == 'right' ? 'content-section-a' : 'content-section-b',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: props.prod.imageOn == 'right' ? 'col-lg-5 push-lg-7 col-sm-6 push-sm-6' : 'col-lg-5 col-sm-6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: props.prod.target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "img-responsive img-fluid pull-sm-right",
    src: props.prod.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: props.prod.imageOn == 'right' ? 'col-lg-7 pull-lg-5 col-sm-6 pull-sm-6' : 'col-lg-7 col-sm-6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: props.prod.target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, props.prod.heading)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "lead",
    dangerouslySetInnerHTML: {
      __html: props.prod.body
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/hoon.kim/code/rialto/root/components/product.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/hoon.kim/code/rialto/root/components/service.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "fa-stack fa-4x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-circle fa-stack-2x text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-shopping-cart fa-stack-1x fa-inverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "service-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.serv.heading), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.serv.body));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/hoon.kim/code/rialto/root/components/service.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_product__ = __webpack_require__("./components/product.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_service__ = __webpack_require__("./components/service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contact__ = __webpack_require__("./components/contact.js");
var _jsxFileName = "/Users/hoon.kim/code/rialto/root/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      slogan: 'Bridging the gap between ideas and technology',
      company: 'Turning your ideas into technical implementation',
      services: [{
        'heading': 'Web Development',
        'body': 'HTML|CSS, JavaScript (React, Node.js, AngularJS) programming, hosting|cloud deployment, CMS configuration, social media integration'
      }, {
        'heading': 'Online Marketing',
        'body': 'Search Engine Optimization, Google Analytics/Tag Manager configuration, Google AdWords/Facebook Ads campaign setup and reporting'
      }, {
        'heading': 'Consultancy Services',
        'body': 'Extra services available upon request: data visualization, mobile applications development, financial analysis, graphic design, et cetera'
      }],
      products: [{
        'heading': 'Feria cum Hoonio',
        'body': 'Recitals by and with Hoonio, with vision to deliver music in order to enlighten the audience, provide a different angle on their view on the world we live in, and foundation for musicians of next generation to proactively pursue their passion.<br /><a href="http://hoon.io/feriaApp"><img class="appstore-badge" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png" width="135px"/></a>',
        'target': 'http://feria.hoonio.com',
        'img': 'https://lh3.googleusercontent.com/mvwsxK_jpFHLoteeScrcnP1_D1dIO_mv92oyy5AhXDZ8DQ9rOMVI9FajP6dt32Yma9CHr59NbsQStRuyQN2GzU764EHtgjSxRqpkkw=w569-h320-rw-no',
        'imageOn': 'right'
      }, {
        'heading': 'AgeWatch Index',
        'body': 'Data visualization for HelpAge International which aims to support elderly around the globe. The work was featured in press coverage by <a target="_blank" title="Best and worst places to be old: interactive map" href="http://bit.ly/19YDIBV">The Guardian</a> and <a target="_blank" title="Lepiej niż w Polsce seniorom żyje się w Albanii, na Litwie czy Białorusi. Najgorzej jest z opieką zdrowotną Cały tekst" href="http://bit.ly/1fIVwIv">Wyborcza.pl</a>',
        'target': 'http://www.helpage.org/global-agewatch/population-ageing-data/global-rankings-map',
        'img': 'https://lh3.googleusercontent.com/-TzWilRcgbbc/UktfVGEL8oI/AAAAAAAB5Sk/cPk3nN6PWOo/w980-h551/frontcover-agewatch.jpg',
        'imageOn': 'left'
      }, {
        heading: 'Densha de Tokyo',
        body: 'iOS application providing comprehensive guide for Tokyo Metropolitan Transit System, covering additional rail services including JR and major private lines. <br /><a href="http://hoon.io/1DWTTNa"><img class="playstore-badge" src="https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store-jp.svg" /></a>',
        target: 'http://hoon.io/1DWTTNa',
        img: 'https://lh3.googleusercontent.com/-sQSx-LtdT3g/VcaHUL1Z2oI/AAAAAAACjxo/Sr3OXnVK2Og/s800-Ic42/denshadetokyo.jpg',
        imageOn: 'right'
      }],
      contact: {
        heading: 'Contact Us',
        body: 'Please fill out the form for any requests and inquiries, we will return to you shortly. Thank you',
        url: 'https://docs.google.com/a/hoonio.com/spreadsheet/formResponse?key=0Aum0r5zaOGMjdHFBSG9wb3p6NjJhdm02MGxoZU9heXc'
      }
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "intro-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.state.slogan))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: "services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        id: "who-we-are",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-12 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "section-heading text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.state.company))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row text-center",
        id: "what-we-do",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.state.services.map(function (service, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_service__["a" /* default */], {
          serv: service,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        });
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: "products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.state.products.map(function (product, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_product__["a" /* default */], {
          prod: product,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_contact__["a" /* default */], {
        form: this.state.contact,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/hoon.kim/code/rialto/root/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map