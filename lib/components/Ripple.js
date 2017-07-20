'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tfrom{\n\t\ttransform: scale(.2);\n\t}\n\tto{\n\t\ttransform: scale(2);\n\t\topacity: 0;\n\t}\n'], ['\n\tfrom{\n\t\ttransform: scale(.2);\n\t}\n\tto{\n\t\ttransform: scale(2);\n\t\topacity: 0;\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: relative;\n\toverflow: hidden;\n    .ripple-layer{\n        border-radius:100%;\n        background: rgba(100,100,100,.7);\n        animation: ', ' .5s ease-out;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transform: scale(0);\n    }\n'], ['\n    position: relative;\n\toverflow: hidden;\n    .ripple-layer{\n        border-radius:100%;\n        background: rgba(100,100,100,.7);\n        animation: ', ' .5s ease-out;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transform: scale(0);\n    }\n']);

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

var ripple = (0, _styledComponents.keyframes)(_templateObject);
var Root = _styledComponents2.default.div(_templateObject2, ripple);

var Ripple = function (_React$Component) {
    _inherits(Ripple, _React$Component);

    function Ripple() {
        _classCallCheck(this, Ripple);

        return _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).apply(this, arguments));
    }

    _createClass(Ripple, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.Root.onmousedown = function (e) {
                var size = Math.max(_this2.Root.offsetWidth, _this2.Root.offsetHeight);
                var x = e.offsetX || e.layerX;
                var y = e.offsetY || e.layerY;
                var rippleLayer = document.createElement('div');
                rippleLayer.className = 'ripple-layer';
                rippleLayer.style.height = size + "px";
                rippleLayer.style.width = size + "px";
                rippleLayer.style.left = x - size / 2 + "px";
                rippleLayer.style.top = y - size / 2 + "px";
                rippleLayer.addEventListener('animationend', function () {
                    rippleLayer.parentNode.removeChild(rippleLayer);
                });
                _this2.Root.appendChild(rippleLayer);
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                Root,
                _extends({}, this.props, { innerRef: function innerRef(root) {
                        _this3.Root = root;
                    } }),
                this.props.children
            );
        }
    }]);

    return Ripple;
}(_react2.default.Component);

exports.default = Ripple;