"use strict";
(self["webpackChunkkoa_typescript_practice"] = self["webpackChunkkoa_typescript_practice"] || []).push([["default"],{

/***/ "./client/components/layout-pc/index.js":
/*!**********************************************!*\
  !*** ./client/components/layout-pc/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _utils_flexible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/flexible */ "./client/utils/flexible.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./client/components/layout-pc/index.css");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default())) return false; if ((_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default().sham)) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Layout = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Layout);

    _this = _super.call(this);
    _this.setState = {};
    (0,_utils_flexible__WEBPACK_IMPORTED_MODULE_9__["default"])(window, document);
    return _this;
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node)
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./client/components/layout/index.js":
/*!*******************************************!*\
  !*** ./client/components/layout/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _utils_flexible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/flexible */ "./client/utils/flexible.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./client/components/layout/index.css");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default())) return false; if ((_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default().sham)) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Layout = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Layout);

    _this = _super.call(this);
    _this.setState = {};
    (0,_utils_flexible__WEBPACK_IMPORTED_MODULE_9__["default"])(window, document);
    return _this;
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node)
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./client/components/popup-min-layer/index.js":
/*!****************************************************!*\
  !*** ./client/components/popup-min-layer/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.css */ "./client/components/popup-min-layer/index.css");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default())) return false; if ((_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default().sham)) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * 简单提示框模版
 * 参数说明：
 * @param {String} content 提示内容
 * @param {Number} duration 自动关闭的时间，默认2000
 * @param {Boolean} layer 透明庶档是不是出现
 * @param {Boolean} model 黑/白
 * @param {Function} callback 回调
 * 使用方式：
 * PopupMinLayer.show({
 *  content: '请输入体验码',
 *  duration: 2000,
 *  layer: false,
 *  model: false,
 *  callback: () => { },
 * })
 */




var popupMinLayerScrollTop = 0;

var PopupMinLayer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PopupMinLayer, _Component);

  var _super = _createSuper(PopupMinLayer);

  function PopupMinLayer(props) {
    var _this;

    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PopupMinLayer);

    _this = _super.call(this, props);

    (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentWillUnmount", function () {// clearTimeout(this.timer)
    });

    var show = _this.props.show;
    _this.state = {
      show: show
    };
    return _this;
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PopupMinLayer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!nextState.show) {
        var node = this.props.node;
        react_dom__WEBPACK_IMPORTED_MODULE_12__.unmountComponentAtNode(node);
        document.body.removeChild(node);
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var show = this.state.show;
      var _this$props = this.props,
          content = _this$props.content,
          height = _this$props.height,
          layer = _this$props.layer,
          model = _this$props.model;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
        className: "model-mini-layer",
        style: {
          display: show ? null : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
        className: "layer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
        className: "content"
      }, content)), layer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
        className: model ? 'layer-back white' : 'layer-back black',
        style: {
          height: "".concat(height, "px")
        }
      }) : '');
    }
  }]);

  return PopupMinLayer;
}(react__WEBPACK_IMPORTED_MODULE_11__.Component);
/**
 * 获取滚动条位置
 */


(0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(PopupMinLayer, "propTypes", {
  content: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  layer: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  model: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  node: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  show: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)
});

(0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(PopupMinLayer, "defaultProps", {
  content: '',
  layer: true,
  model: true,
  show: true
});

var getScrollTop = function getScrollTop() {
  var total = document.body.scrollTop + document.documentElement.scrollTop;
  return _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_9___default()(total, 10);
};
/**
 * 设置滚动条位置
 * @param {number} top 位置
 */


var setScrollTop = function setScrollTop(top) {
  document.body.scrollTop = top;
  document.documentElement.scrollTop = top;
};
/**
 * disableScroll 禁止滚动条
 */


function disableScroll() {
  popupMinLayerScrollTop = getScrollTop();
  var toastNode = document.querySelector('.toast-model-mini');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  if (toastNode) {
    toastNode.addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
  }
}
/**
 * restartScroll 放开滚动条
 */


function restartScroll() {
  var toastNode = document.querySelector('.toast-model-mini');
  var marker = document.querySelector('.toast-marker');

  if (!marker) {
    document.documentElement.style.overflow = 'inherit';
    document.body.style.overflow = 'inherit';
    setScrollTop(popupMinLayerScrollTop);
  }

  if (toastNode) {
    toastNode.removeEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
  }
}
/**
 * 创建一个节点〜
 */


function createToast() {
  var toast = document.createElement('div');
  toast.setAttribute('id', "toast-".concat(Math.floor(Math.random() * 10000000)));
  toast.setAttribute('class', "toast-model-mini");
  document.body.appendChild(toast);
  return toast;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  show: function show(options) {
    var content = options.content,
        callback = options.callback,
        duration = options.duration,
        layer = options.layer,
        model = options.model;
    var toast = createToast();

    if (!duration) {
      duration = 2000;
    } else if (typeof duration !== 'number') {
      duration = 2000;
    }

    _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10___default()(function () {
      restartScroll();
      react_dom__WEBPACK_IMPORTED_MODULE_12__.unmountComponentAtNode(toast);
      document.body.removeChild(toast);

      if (typeof callback === 'function') {
        callback();
      }
    }, duration);

    react_dom__WEBPACK_IMPORTED_MODULE_12__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(PopupMinLayer, {
      content: content,
      height: document.body.clientHeight,
      layer: layer,
      model: model,
      node: toast
    }), toast);
    disableScroll();
  }
});

/***/ }),

/***/ "./client/utils/flexible.js":
/*!**********************************!*\
  !*** ./client/utils/flexible.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// 此文件用于templates/index.hbs
// 达到适配手机与电脑的目的
function flexible(window, document) {
  var device = window.CONFIG.device;
  var docElement = document.documentElement;
  var screenWidth = docElement.clientWidth;

  function setPhoneRem() {
    if (screenWidth > 425) {
      screenWidth = 425;
    }

    docElement.style.fontSize = "".concat(screenWidth / 750 * 100, "px");
  }

  function setComputerRem() {
    if (screenWidth > 1366) {
      screenWidth = 1366;
    }

    docElement.style.fontSize = "".concat(screenWidth / 13.66, "px");
  }

  if (device) {
    document.body.style.minWidth = "980px";
    setComputerRem(); // reset rem unit on page resize

    window.addEventListener('resize', setComputerRem);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setComputerRem();
      }
    });
    return false;
  }

  document.body.style.maxWidth = "425px";
  setPhoneRem(); // reset rem unit on page resize

  window.addEventListener('resize', setPhoneRem);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setPhoneRem();
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (flexible);

/***/ }),

/***/ "./client/components/layout-pc/index.css":
/*!***********************************************!*\
  !*** ./client/components/layout-pc/index.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/components/layout/index.css":
/*!********************************************!*\
  !*** ./client/components/layout/index.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/components/popup-min-layer/index.css":
/*!*****************************************************!*\
  !*** ./client/components/popup-min-layer/index.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2EsSUFBVCxDQUFjb0IsS0FBZCxDQUFvQjZCLFFBQXBCO0FBRUFELElBQUFBLGNBQWMsR0FISixDQUtWOztBQUNBOUQsSUFBQUEsTUFBTSxDQUFDb0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MwQixjQUFsQztBQUNBOUQsSUFBQUEsTUFBTSxDQUFDb0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBQzRCLENBQUQsRUFBTztBQUN6QyxVQUFJQSxDQUFDLENBQUNDLFNBQU4sRUFBaUI7QUFDZkgsUUFBQUEsY0FBYztBQUNmO0FBQ0YsS0FKRDtBQU1BLFdBQU8sS0FBUDtBQUNEOztBQUVEN0QsRUFBQUEsUUFBUSxDQUFDYSxJQUFULENBQWNvQixLQUFkLENBQW9CZ0MsUUFBcEI7QUFFQU4sRUFBQUEsV0FBVyxHQXJDdUIsQ0F1Q2xDOztBQUNBNUQsRUFBQUEsTUFBTSxDQUFDb0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0N3QixXQUFsQztBQUNBNUQsRUFBQUEsTUFBTSxDQUFDb0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBQzRCLENBQUQsRUFBTztBQUN6QyxRQUFJQSxDQUFDLENBQUNDLFNBQU4sRUFBaUI7QUFDZkwsTUFBQUEsV0FBVztBQUNaO0FBQ0YsR0FKRDtBQUtEOztBQUVELCtEQUFlL0QsUUFBZjs7Ozs7Ozs7Ozs7QUNuREE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYS10eXBlc2NyaXB0LXByYWN0aWNlLy4vY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0LXBjL2luZGV4LmpzIiwid2VicGFjazovL2tvYS10eXBlc2NyaXB0LXByYWN0aWNlLy4vY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL2tvYS10eXBlc2NyaXB0LXByYWN0aWNlLy4vY2xpZW50L2NvbXBvbmVudHMvcG9wdXAtbWluLWxheWVyL2luZGV4LmpzIiwid2VicGFjazovL2tvYS10eXBlc2NyaXB0LXByYWN0aWNlLy4vY2xpZW50L3V0aWxzL2ZsZXhpYmxlLmpzIiwid2VicGFjazovL2tvYS10eXBlc2NyaXB0LXByYWN0aWNlLy4vY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0LXBjL2luZGV4LmNzcz85ODdhIiwid2VicGFjazovL2tvYS10eXBlc2NyaXB0LXByYWN0aWNlLy4vY2xpZW50L2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmNzcz81NjdlIiwid2VicGFjazovL2tvYS10eXBlc2NyaXB0LXByYWN0aWNlLy4vY2xpZW50L2NvbXBvbmVudHMvcG9wdXAtbWluLWxheWVyL2luZGV4LmNzcz83ODFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IGZsZXhpYmxlIGZyb20gJy4uLy4uL3V0aWxzL2ZsZXhpYmxlJ1xuXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zZXRTdGF0ZSA9IHt9XG5cbiAgICBmbGV4aWJsZSh3aW5kb3csIGRvY3VtZW50KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PntjaGlsZHJlbn08L1JlYWN0LkZyYWdtZW50PlxuICB9XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCBmbGV4aWJsZSBmcm9tICcuLi8uLi91dGlscy9mbGV4aWJsZSdcblxuaW1wb3J0ICcuL2luZGV4LmNzcydcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc2V0U3RhdGUgPSB7fVxuXG4gICAgZmxleGlibGUod2luZG93LCBkb2N1bWVudClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Y2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD5cbiAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiLyoqXG4gKiDnroDljZXmj5DnpLrmoYbmqKHniYhcbiAqIOWPguaVsOivtOaYju+8mlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQg5o+Q56S65YaF5a65XG4gKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24g6Ieq5Yqo5YWz6Zet55qE5pe26Ze077yM6buY6K6kMjAwMFxuICogQHBhcmFtIHtCb29sZWFufSBsYXllciDpgI/mmI7lurbmoaPmmK/kuI3mmK/lh7rnjrBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbW9kZWwg6buRL+eZvVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5Zue6LCDXG4gKiDkvb/nlKjmlrnlvI/vvJpcbiAqIFBvcHVwTWluTGF5ZXIuc2hvdyh7XG4gKiAgY29udGVudDogJ+ivt+i+k+WFpeS9k+mqjOeggScsXG4gKiAgZHVyYXRpb246IDIwMDAsXG4gKiAgbGF5ZXI6IGZhbHNlLFxuICogIG1vZGVsOiBmYWxzZSxcbiAqICBjYWxsYmFjazogKCkgPT4geyB9LFxuICogfSlcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICcuL2luZGV4LmNzcydcblxubGV0IHBvcHVwTWluTGF5ZXJTY3JvbGxUb3AgPSAwXG5cbmNsYXNzIFBvcHVwTWluTGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxheWVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtb2RlbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9kZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGVudDogJycsXG4gICAgbGF5ZXI6IHRydWUsXG4gICAgbW9kZWw6IHRydWUsXG4gICAgc2hvdzogdHJ1ZSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3csXG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKCFuZXh0U3RhdGUuc2hvdykge1xuICAgICAgY29uc3QgeyBub2RlIH0gPSB0aGlzLnByb3BzXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKG5vZGUpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgLy8gY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb250ZW50LCBoZWlnaHQsIGxheWVyLCBtb2RlbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kZWwtbWluaS1sYXllcicgc3R5bGU9e3sgZGlzcGxheTogc2hvdyA/IG51bGwgOiAnbm9uZScgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXllcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPntjb250ZW50fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2xheWVyID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlbCA/ICdsYXllci1iYWNrIHdoaXRlJyA6ICdsYXllci1iYWNrIGJsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPlua7muWKqOadoeS9jee9rlxuICovXG5jb25zdCBnZXRTY3JvbGxUb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIHJldHVybiBwYXJzZUludCh0b3RhbCwgMTApXG59XG5cbi8qKlxuICog6K6+572u5rua5Yqo5p2h5L2N572uXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIOS9jee9rlxuICovXG5jb25zdCBzZXRTY3JvbGxUb3AgPSAodG9wKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gdG9wXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSB0b3Bcbn1cblxuLyoqXG4gKiBkaXNhYmxlU2Nyb2xsIOemgeatoua7muWKqOadoVxuICovXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xuICBwb3B1cE1pbkxheWVyU2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wKClcblxuICBjb25zdCB0b2FzdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtbW9kZWwtbWluaScpXG5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG5cbiAgaWYgKHRvYXN0Tm9kZSkge1xuICAgIHRvYXN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogcmVzdGFydFNjcm9sbCDmlL7lvIDmu5rliqjmnaFcbiAqL1xuZnVuY3Rpb24gcmVzdGFydFNjcm9sbCgpIHtcbiAgY29uc3QgdG9hc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0LW1vZGVsLW1pbmknKVxuICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtbWFya2VyJylcbiAgaWYgKCFtYXJrZXIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaW5oZXJpdCdcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2luaGVyaXQnXG5cbiAgICBzZXRTY3JvbGxUb3AocG9wdXBNaW5MYXllclNjcm9sbFRvcClcbiAgfVxuXG4gIGlmICh0b2FzdE5vZGUpIHtcbiAgICB0b2FzdE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIOWIm+W7uuS4gOS4quiKgueCueOAnFxuICovXG5mdW5jdGlvbiBjcmVhdGVUb2FzdCgpIHtcbiAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0b2FzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvYXN0LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApfWApXG4gIHRvYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdG9hc3QtbW9kZWwtbWluaWApXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3QpXG4gIHJldHVybiB0b2FzdFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNob3cob3B0aW9ucykge1xuICAgIGxldCB7IGNvbnRlbnQsIGNhbGxiYWNrLCBkdXJhdGlvbiwgbGF5ZXIsIG1vZGVsIH0gPSBvcHRpb25zXG4gICAgY29uc3QgdG9hc3QgPSBjcmVhdGVUb2FzdCgpXG5cbiAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IDIwMDBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ251bWJlcicpIHtcbiAgICAgIGR1cmF0aW9uID0gMjAwMFxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzdGFydFNjcm9sbCgpXG5cbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodG9hc3QpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvYXN0KVxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSwgZHVyYXRpb24pXG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8UG9wdXBNaW5MYXllciBjb250ZW50PXtjb250ZW50fSBoZWlnaHQ9e2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0fSBsYXllcj17bGF5ZXJ9IG1vZGVsPXttb2RlbH0gbm9kZT17dG9hc3R9IC8+LFxuICAgICAgdG9hc3RcbiAgICApXG5cbiAgICBkaXNhYmxlU2Nyb2xsKClcbiAgfSxcbn1cbiIsIi8vIOatpOaWh+S7tueUqOS6jnRlbXBsYXRlcy9pbmRleC5oYnNcbi8vIOi+vuWIsOmAgumFjeaJi+acuuS4jueUteiEkeeahOebrueahFxuXG5mdW5jdGlvbiBmbGV4aWJsZSh3aW5kb3csIGRvY3VtZW50KSB7XG4gIGNvbnN0IHsgZGV2aWNlIH0gPSB3aW5kb3cuQ09ORklHXG4gIGNvbnN0IGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgbGV0IHNjcmVlbldpZHRoID0gZG9jRWxlbWVudC5jbGllbnRXaWR0aFxuXG4gIGZ1bmN0aW9uIHNldFBob25lUmVtKCkge1xuICAgIGlmIChzY3JlZW5XaWR0aCA+IDQyNSkge1xuICAgICAgc2NyZWVuV2lkdGggPSA0MjVcbiAgICB9XG4gICAgZG9jRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAkeyhzY3JlZW5XaWR0aCAvIDc1MCkgKiAxMDB9cHhgXG4gIH1cblxuICBmdW5jdGlvbiBzZXRDb21wdXRlclJlbSgpIHtcbiAgICBpZiAoc2NyZWVuV2lkdGggPiAxMzY2KSB7XG4gICAgICBzY3JlZW5XaWR0aCA9IDEzNjZcbiAgICB9XG4gICAgZG9jRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke3NjcmVlbldpZHRoIC8gMTMuNjZ9cHhgXG4gIH1cblxuICBpZiAoZGV2aWNlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5taW5XaWR0aCA9IGA5ODBweGBcblxuICAgIHNldENvbXB1dGVyUmVtKClcblxuICAgIC8vIHJlc2V0IHJlbSB1bml0IG9uIHBhZ2UgcmVzaXplXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldENvbXB1dGVyUmVtKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsIChlKSA9PiB7XG4gICAgICBpZiAoZS5wZXJzaXN0ZWQpIHtcbiAgICAgICAgc2V0Q29tcHV0ZXJSZW0oKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUubWF4V2lkdGggPSBgNDI1cHhgXG5cbiAgc2V0UGhvbmVSZW0oKVxuXG4gIC8vIHJlc2V0IHJlbSB1bml0IG9uIHBhZ2UgcmVzaXplXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRQaG9uZVJlbSlcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VzaG93JywgKGUpID0+IHtcbiAgICBpZiAoZS5wZXJzaXN0ZWQpIHtcbiAgICAgIHNldFBob25lUmVtKClcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsZXhpYmxlXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmbGV4aWJsZSIsIkxheW91dCIsInNldFN0YXRlIiwid2luZG93IiwiZG9jdW1lbnQiLCJjaGlsZHJlbiIsInByb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsIlJlYWN0RE9NIiwicG9wdXBNaW5MYXllclNjcm9sbFRvcCIsIlBvcHVwTWluTGF5ZXIiLCJzaG93Iiwic3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwiYm9keSIsInJlbW92ZUNoaWxkIiwiY29udGVudCIsImhlaWdodCIsImxheWVyIiwibW9kZWwiLCJkaXNwbGF5Iiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCIsImdldFNjcm9sbFRvcCIsInRvdGFsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0U2Nyb2xsVG9wIiwidG9wIiwiZGlzYWJsZVNjcm9sbCIsInRvYXN0Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIm92ZXJmbG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXN0YXJ0U2Nyb2xsIiwibWFya2VyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRvYXN0IiwidG9hc3QiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXBwZW5kQ2hpbGQiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInJlbmRlciIsImNsaWVudEhlaWdodCIsImRldmljZSIsIkNPTkZJRyIsImRvY0VsZW1lbnQiLCJzY3JlZW5XaWR0aCIsImNsaWVudFdpZHRoIiwic2V0UGhvbmVSZW0iLCJmb250U2l6ZSIsInNldENvbXB1dGVyUmVtIiwibWluV2lkdGgiLCJlIiwicGVyc2lzdGVkIiwibWF4V2lkdGgiXSwic291cmNlUm9vdCI6IiJ9