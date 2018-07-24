'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    0%{\n        left:100%;\n        top:0; \n    }\n    70%{\n        left:60%;\n        top:100%;\n    }\n    100%{\n        left:50%;\n        top:50%;\n    }\n'], ['\n    0%{\n        left:100%;\n        top:0; \n    }\n    70%{\n        left:60%;\n        top:100%;\n    }\n    100%{\n        left:50%;\n        top:50%;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    0%{\n        transform:translate(-100px,-50%);\n        color:transparent;\n    }\n    100%{\n        transform:translate(-100px,-50%) scale(30);\n        color:transparent;\n        opacity:.3;\n    }\n'], ['\n    0%{\n        transform:translate(-100px,-50%);\n        color:transparent;\n    }\n    100%{\n        transform:translate(-100px,-50%) scale(30);\n        color:transparent;\n        opacity:.3;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    0%{\n        left:0;\n        top:100%\n    }\n    70%{\n        left:40%;\n        top:0;\n    }\n    100%{\n        left:50%;\n        top:50%;\n    }\n'], ['\n    0%{\n        left:0;\n        top:100%\n    }\n    70%{\n        left:40%;\n        top:0;\n    }\n    100%{\n        left:50%;\n        top:50%;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    0%{\n        transform:translate(100px,-50%);\n        color:transparent;\n    }\n    100%{\n        transform:translate(100px,-50%) scale(30);\n        color:transparent;\n        opacity:.3;\n    }\n'], ['\n    0%{\n        transform:translate(100px,-50%);\n        color:transparent;\n    }\n    100%{\n        transform:translate(100px,-50%) scale(30);\n        color:transparent;\n        opacity:.3;\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    z-index:1000;\n    user-select:none;\n    position:fixed;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0;\n    .btn{\n        position:fixed;\n        top:50%;\n        left:50%;\n        width:100px;\n        height:100px;\n        line-height:100px;\n        text-align:center;\n        font-size:20px;\n        font-weight:100;\n        border-radius:50%;\n        color:white;\n        cursor:pointer;\n    }\n    .btn-confirm{\n        background:#33bb77;\n        transform:translate(-100px,-50%);\n        &:hover{\n            box-shadow:0px 0px 70px #33bb77;\n        }\n        &.confirm-in{\n            animation:', ' .3s;\n        }\n        &.confirm-out{\n            animation:', ' .3s;\n        }\n    }\n    .btn-cancel{\n        background:#ee5533;\n        transform:translate(100px,-50%);\n        &:hover{\n            box-shadow:0px 0px 50px #ee5533;\n        }\n        &.cancel-in{\n            animation:', ' .3s;\n        }\n        &.cancel-out{\n            animation:', ' .3s;\n        }\n    }\n'], ['\n    z-index:1000;\n    user-select:none;\n    position:fixed;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0;\n    .btn{\n        position:fixed;\n        top:50%;\n        left:50%;\n        width:100px;\n        height:100px;\n        line-height:100px;\n        text-align:center;\n        font-size:20px;\n        font-weight:100;\n        border-radius:50%;\n        color:white;\n        cursor:pointer;\n    }\n    .btn-confirm{\n        background:#33bb77;\n        transform:translate(-100px,-50%);\n        &:hover{\n            box-shadow:0px 0px 70px #33bb77;\n        }\n        &.confirm-in{\n            animation:', ' .3s;\n        }\n        &.confirm-out{\n            animation:', ' .3s;\n        }\n    }\n    .btn-cancel{\n        background:#ee5533;\n        transform:translate(100px,-50%);\n        &:hover{\n            box-shadow:0px 0px 50px #ee5533;\n        }\n        &.cancel-in{\n            animation:', ' .3s;\n        }\n        &.cancel-out{\n            animation:', ' .3s;\n        }\n    }\n']);

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

var confirmIn = (0, _styledComponents.keyframes)(_templateObject);
var confirmOut = (0, _styledComponents.keyframes)(_templateObject2);
var cancelIn = (0, _styledComponents.keyframes)(_templateObject3);
var cancelOut = (0, _styledComponents.keyframes)(_templateObject4);
var Root = _styledComponents2.default.div(_templateObject5, confirmIn, confirmOut, cancelIn, cancelOut);

var Confirm = function (_React$Component) {
    _inherits(Confirm, _React$Component);

    function Confirm(props) {
        _classCallCheck(this, Confirm);

        var _this = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, props));

        _this.state = {
            confirmed: false,
            canceled: false
        };
        return _this;
    }

    _createClass(Confirm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            });
            // this.Root.style.display=this.props.visible?'inherit':'none';
            // this.props.onVisible?this.props.onVisible(this.props.visible):'';
            this.btnConfirm.addEventListener('animationend', this.animationEnd.bind(this));
            this.btnCancel.addEventListener('animationend', this.animationEnd.bind(this));
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.visible !== nextProps.visible) {
                this.props.onVisible ? this.props.onVisible(nextProps.visible) : '';
            }
        }
    }, {
        key: 'animationEnd',
        value: function animationEnd() {
            this.setState({
                confirmed: false,
                canceled: false
            });
        }
    }, {
        key: 'onConfirm',
        value: function onConfirm() {
            this.setState({
                confirmed: true
            });
            this.props.onConfirm ? this.props.onConfirm() : '';
            this.onClick();
        }
    }, {
        key: 'onCancel',
        value: function onCancel() {
            this.setState({
                canceled: true
            });
            this.props.onCancel ? this.props.onCancel() : '';
            this.onClick();
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            setTimeout(function () {
                ConfirmOpt.hide();
            }, 300);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                Root,
                { innerRef: function innerRef(root) {
                        return _this2.Root = root;
                    } },
                _react2.default.createElement(
                    'div',
                    { ref: function ref(btnConfirm) {
                            return _this2.btnConfirm = btnConfirm;
                        },
                        onClick: this.onConfirm.bind(this),
                        style: { display: this.state.canceled ? 'none' : '' },
                        className: "btn btn-confirm" + (this.state.confirmed ? ' confirm-out' : ' confirm-in') },
                    '\u786E \u8BA4'
                ),
                _react2.default.createElement(
                    'div',
                    { ref: function ref(btnCancel) {
                            return _this2.btnCancel = btnCancel;
                        },
                        onClick: this.onCancel.bind(this),
                        style: { display: this.state.confirmed ? 'none' : '' },
                        className: "btn btn-cancel" + (this.state.canceled ? ' cancel-out' : ' cancel-in') },
                    '\u53D6 \u6D88'
                )
            );
        }
    }]);

    return Confirm;
}(_react2.default.Component);

var ConfirmOpt = {
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
        this.view = _react2.default.createElement(Confirm, { onConfirm: onConfirm, onCancel: onCancel });
        this.onChange();
    },
    hide: function hide() {
        this.view = null;
        this.onChange();
    }
};
exports.default = ConfirmOpt;