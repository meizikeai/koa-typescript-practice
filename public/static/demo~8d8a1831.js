"use strict";
(self["webpackChunkkoa_typescript_practice"] = self["webpackChunkkoa_typescript_practice"] || []).push([["demo"],{

/***/ "./client/pages/demo/index.js":
/*!************************************!*\
  !*** ./client/pages/demo/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/layout */ "./client/components/layout/index.js");
/* harmony import */ var _components_layout_pc__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/layout-pc */ "./client/components/layout-pc/index.js");
/* harmony import */ var _components_popup_min_layer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/popup-min-layer */ "./client/components/popup-min-layer/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index.scss */ "./client/pages/demo/index.scss");














function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default())) return false; if ((_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default().sham)) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var config = window.CONFIG || {};

var App = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = _super.call(this, props);

    (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", /*#__PURE__*/(0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_10___default().mark(function _callee() {
      var index, back;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_10___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = _this.state.index;
              _components_popup_min_layer__WEBPACK_IMPORTED_MODULE_17__["default"].show({
                content: 'I also want to look for a girlfriend...'
              });

              _this.setState({
                index: index + 1
              });

              _context.next = 5;
              return fetch('/json').then(function (response) {
                return response.json();
              }).then(function (res) {
                return res;
              });

            case 5:
              back = _context.sent;
              console.log(back);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mainContent", function () {
      var index = _this.state.index;
      var device = _this.props.device;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "".concat(device ? 'demo-pc' : 'demo')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", null, "Hello Demo!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("p", null, "Welcome to Demo!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "click"
      }, "You clicked", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, index), "times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("button", {
        type: "button",
        onClick: _this.handleClick
      }, "Click me"));
    });

    _this.state = {
      index: 0
    };
    return _this;
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _context2;

      fetch('/json').then(function (response) {
        return response.json();
      }).then(function (res) {
        console.log(res);
      });

      var test = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_9___default()(_context2 = [1, 2, 3, 4]).call(_context2, function (element) {
        return element === 2;
      });

      console.log(test);
    }
  }, {
    key: "render",
    value: function render() {
      var device = this.props.device;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "wrapper"
      }, device ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_15__["default"], null, this.mainContent()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_components_layout_pc__WEBPACK_IMPORTED_MODULE_16__["default"], null, this.mainContent()));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

(0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(App, "propTypes", {
  device: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool)
});

(0,react_dom__WEBPACK_IMPORTED_MODULE_14__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(App, config), document.querySelector('#app'));

/***/ }),

/***/ "./client/pages/demo/index.scss":
/*!**************************************!*\
  !*** ./client/pages/demo/index.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","default"], function() { return __webpack_exec__("./client/pages/demo/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVQsQ0FBRCxFQUFzQndCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUF0QixDQUFOOzs7Ozs7Ozs7OztBQ2pGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYS10eXBlc2NyaXB0LXByYWN0aWNlLy4vY2xpZW50L3BhZ2VzL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8va29hLXR5cGVzY3JpcHQtcHJhY3RpY2UvLi9jbGllbnQvcGFnZXMvZGVtby9pbmRleC5zY3NzPzNhNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBMYXlvdXRQQyBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQtcGMnXG5pbXBvcnQgTWluTGF5ZXIgZnJvbSAnQGNvbXBvbmVudHMvcG9wdXAtbWluLWxheWVyJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgY29uZmlnID0gd2luZG93LkNPTkZJRyB8fCB7fVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRldmljZTogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IGluZGV4OiAwIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKCcvanNvbicpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgfSlcblxuICAgIGNvbnN0IHRlc3QgPSBbMSwgMiwgMywgNF0uZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSAyKVxuXG4gICAgY29uc29sZS5sb2codGVzdClcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5kZXggfSA9IHRoaXMuc3RhdGVcblxuICAgIE1pbkxheWVyLnNob3coeyBjb250ZW50OiAnSSBhbHNvIHdhbnQgdG8gbG9vayBmb3IgYSBnaXJsZnJpZW5kLi4uJyB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmRleDogaW5kZXggKyAxLFxuICAgIH0pXG5cbiAgICBjb25zdCBiYWNrID0gYXdhaXQgZmV0Y2goJy9qc29uJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzKVxuXG4gICAgY29uc29sZS5sb2coYmFjaylcbiAgfVxuXG4gIG1haW5Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5kZXggfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGRldmljZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtkZXZpY2UgPyAnZGVtby1wYycgOiAnZGVtbyd9YH0+XG4gICAgICAgIDxoMT5IZWxsbyBEZW1vITwvaDE+XG4gICAgICAgIDxwPldlbGNvbWUgdG8gRGVtbyE8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGljayc+XG4gICAgICAgICAgWW91IGNsaWNrZWRcbiAgICAgICAgICA8c3Bhbj57aW5kZXh9PC9zcGFuPlxuICAgICAgICAgIHRpbWVzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgQ2xpY2sgbWVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZXZpY2UgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIHtkZXZpY2UgPyA8TGF5b3V0Pnt0aGlzLm1haW5Db250ZW50KCl9PC9MYXlvdXQ+IDogPExheW91dFBDPnt0aGlzLm1haW5Db250ZW50KCl9PC9MYXlvdXRQQz59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxucmVuZGVyKDxBcHAgey4uLmNvbmZpZ30gLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInJlbmRlciIsIkxheW91dCIsIkxheW91dFBDIiwiTWluTGF5ZXIiLCJjb25maWciLCJ3aW5kb3ciLCJDT05GSUciLCJBcHAiLCJwcm9wcyIsImluZGV4Iiwic3RhdGUiLCJzaG93IiwiY29udGVudCIsInNldFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwiYmFjayIsImNvbnNvbGUiLCJsb2ciLCJkZXZpY2UiLCJoYW5kbGVDbGljayIsInRlc3QiLCJlbGVtZW50IiwibWFpbkNvbnRlbnQiLCJib29sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==