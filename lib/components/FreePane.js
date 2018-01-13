'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position:relative;\n    overflow:hidden;\n    width:auto;\n    .trigger{\n        width:5px;\n        height:100%;\n        display:block;\n        position:absolute;\n        top:0;\n        right:0;\n        cursor:e-resize;\n    }\n'], ['\n    position:relative;\n    overflow:hidden;\n    width:auto;\n    .trigger{\n        width:5px;\n        height:100%;\n        display:block;\n        position:absolute;\n        top:0;\n        right:0;\n        cursor:e-resize;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject);

var FreePane = function (_React$Component) {
    _inherits(FreePane, _React$Component);

    function FreePane() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FreePane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FreePane.__proto__ || Object.getPrototypeOf(FreePane)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            resizing: false,
            width: 0
        }, _this.mx = 0, _this.resizing = false, _this.bg = 'white', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FreePane, [{
        key: 'onResizeStart',
        value: function onResizeStart(event) {
            this.resizing = true;
            this.mx = event.pageX || event.clientX;
        }
    }, {
        key: 'onResize',
        value: function onResize(event) {
            var e = event || window.event;
            var ex = event.pageX || event.client;
            if (this.resizing) {
                this.setState({
                    width: this.state.width + ex - this.mx
                });
                this.mx = ex;
            }
            e.preventDefault();
        }
    }, {
        key: 'onResizeEnd',
        value: function onResizeEnd(event) {
            this.resizing = false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.onmousemove = this.onResize.bind(this);
            document.onmouseup = this.onResizeEnd.bind(this);
            this.root && this.setState({
                width: this.root.offsetWidth
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                Root,
                _extends({}, this.props, { innerRef: function innerRef(root) {
                        return _this2.root = root;
                    }, style: { width: this.state.width || 'auto' } }),
                this.props.children,
                _react2.default.createElement('span', { className: 'trigger',
                    onMouseDown: this.onResizeStart.bind(this) })
            );
        }
    }]);

    return FreePane;
}(_react2.default.Component);

exports.default = FreePane;