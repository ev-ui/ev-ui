'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    0%{\n        box-shadow:100px 75px red;\n        transform: rotate(0) rotateX(0) rotateY(0);\n    }\n    50%{\t\t\t\t\n        box-shadow: \n            0 -100px 0  orangered,\n            -86px 50px 0 -15px green,\n            86px 50px 15px  blue;\n        transform: rotate(180deg) rotateX(180deg) rotateY(27deg);\n\n    }\n    100%{\n        box-shadow: 100px 75px red;\n        transform: rotate(360deg) rotateX(360deg) rotateY(0deg);\n    }\n'], ['\n    0%{\n        box-shadow:100px 75px red;\n        transform: rotate(0) rotateX(0) rotateY(0);\n    }\n    50%{\t\t\t\t\n        box-shadow: \n            0 -100px 0  orangered,\n            -86px 50px 0 -15px green,\n            86px 50px 15px  blue;\n        transform: rotate(180deg) rotateX(180deg) rotateY(27deg);\n\n    }\n    100%{\n        box-shadow: 100px 75px red;\n        transform: rotate(360deg) rotateX(360deg) rotateY(0deg);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position:fixed;\n    left:0;\n    top:0;\n    right:0;\n    bottom:0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform-style: preserve-3d;\n    .loading-ball{\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        background:transparent;\n        box-shadow: 1px 1px 10px -1px rgba(30, 30, 30, .6);\n        animation: 3s ', ' infinite linear;\n        transform-style: preserve-3d;\n    }\n    .tips{\n        position:absolute;\n        bottom:100px;\n        font-size:30px;\n        color:white;\n    }\n'], ['\n    position:fixed;\n    left:0;\n    top:0;\n    right:0;\n    bottom:0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform-style: preserve-3d;\n    .loading-ball{\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        background:transparent;\n        box-shadow: 1px 1px 10px -1px rgba(30, 30, 30, .6);\n        animation: 3s ', ' infinite linear;\n        transform-style: preserve-3d;\n    }\n    .tips{\n        position:absolute;\n        bottom:100px;\n        font-size:30px;\n        color:white;\n    }\n']);

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

var loading = (0, _styledComponents.keyframes)(_templateObject);
var Root = _styledComponents2.default.div(_templateObject2, loading);

var Loading = function (_React$Component) {
    _inherits(Loading, _React$Component);

    function Loading() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Loading);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dots: 0
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loading, [{
        key: 'loopDots',
        value: function loopDots() {
            this.setState({
                dots: this.state.dots > 2 ? 0 : this.state.dots + 1
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.interval = setInterval(this.loopDots.bind(this), 500);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.interval && clearInterval(this.interval);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Root,
                null,
                _react2.default.createElement('div', { className: 'loading-ball' }),
                _react2.default.createElement(
                    'span',
                    { className: 'tips' },
                    'Loading',
                    ".".repeat(this.state.dots)
                )
            );
        }
    }]);

    return Loading;
}(_react2.default.Component);

var LoadingOpt = {
    observer: null,
    view: null,
    onChange: function onChange() {
        if (this.observer && typeof this.observer === 'function') {
            this.observer();
        }
    },
    subscribe: function subscribe(observer) {
        this.observer = observer;
    },
    show: function show(onConfirm, onCancel) {
        this.view = _react2.default.createElement(Loading, null);
        this.onChange();
    },
    hide: function hide() {
        this.view = null;
        this.onChange();
    }
};
exports.default = LoadingOpt;