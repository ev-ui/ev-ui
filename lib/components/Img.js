'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    overflow:hidden;\n'], ['\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    overflow:hidden;\n']);

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

var Img = function (_React$Component) {
    _inherits(Img, _React$Component);

    function Img() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Img);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Img.__proto__ || Object.getPrototypeOf(Img)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            width: 'auto',
            height: 'auto'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Img, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.resize(this.props.src, this.props.width || 100, this.props.height || 100);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.resize(nextProps.src, nextProps.width || 100, nextProps.height || 100);
        }
    }, {
        key: 'resize',
        value: function resize(src, width, height) {
            var _this2 = this;

            if (this.img && this.img.complete) {
                this.doResize(src, width, height);
            } else {
                this.img.onload = function () {
                    _this2.doResize(src, width, height);
                };
            }
        }
    }, {
        key: 'doResize',
        value: function doResize(src, width, height) {
            var w = this.img.naturalWidth;
            var h = this.img.naturalHeight;
            if (w / width < h / height) {
                this.setState({
                    width: width,
                    height: 'auto'
                });
            } else {
                this.setState({
                    width: 'auto',
                    height: height
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                width = _props.width,
                height = _props.height,
                src = _props.src;

            return _react2.default.createElement(
                Root,
                _extends({}, this.props, { style: { width: width || 100, height: height || 100 } }),
                _react2.default.createElement('img', { ref: function ref(img) {
                        return _this3.img = img;
                    }, src: src, width: this.state.width, height: this.state.height })
            );
        }
    }]);

    return Img;
}(_react2.default.Component);

exports.default = Img;