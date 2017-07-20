'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute;\n    right:150px;\n    bottom:150px;\n    .btn:hover{\n        box-shadow:0 0 30px rgba(30,30,30,.5);\n    }\n    .btn{\n        position: absolute;\n        left:0;\n        top:0;\n        width:75px;\n        height:75px;\n        background:transparent;\n        transition: all .2s ease-in;\n        border-radius:50%;\n        border:none;\n        font-size:17px;\n        margin:12.5px;\n        cursor:pointer;\n        outline:none;\n        &.btn0{\n            background: white;\n            box-shadow:0 0 10px rgba(30,30,30,.7);\n        }\n        &.btn-create{\n            background:#22cc66;\n            color:white;\n        }\n        &.btn-update{\n            background:#22bbff;\n            color:white;\n        }\n        &.btn-remove{\n            background:#cc1111;\n            color:#fff;\n        }\n        &.btn-query{\n            background:#ee5533;\n            color:#fff;\n        }\n        &.expand{\n            box-shadow:0 0 15px rgba(30,30,30,.7);\n        }\n        &.btn0.expand{\n            transform:rotate(235deg);\n        }\n        &.btn1.expand{\n            left:-150px;\n            top:0px;\n        }\n        &.btn2.expand{\n            left:-130px;\n            top:-75px;\n        }\n        &.btn3.expand{\n            left:-75px;\n            top:-130px\n        }\n        &.btn4.expand{\n            left:0;\n            top:-150px;\n        }\n        &:hover{\n            box-shadow:0 0 50px rgba(30,30,30,.5);\n        }\n    }\n'], ['\n    position: absolute;\n    right:150px;\n    bottom:150px;\n    .btn:hover{\n        box-shadow:0 0 30px rgba(30,30,30,.5);\n    }\n    .btn{\n        position: absolute;\n        left:0;\n        top:0;\n        width:75px;\n        height:75px;\n        background:transparent;\n        transition: all .2s ease-in;\n        border-radius:50%;\n        border:none;\n        font-size:17px;\n        margin:12.5px;\n        cursor:pointer;\n        outline:none;\n        &.btn0{\n            background: white;\n            box-shadow:0 0 10px rgba(30,30,30,.7);\n        }\n        &.btn-create{\n            background:#22cc66;\n            color:white;\n        }\n        &.btn-update{\n            background:#22bbff;\n            color:white;\n        }\n        &.btn-remove{\n            background:#cc1111;\n            color:#fff;\n        }\n        &.btn-query{\n            background:#ee5533;\n            color:#fff;\n        }\n        &.expand{\n            box-shadow:0 0 15px rgba(30,30,30,.7);\n        }\n        &.btn0.expand{\n            transform:rotate(235deg);\n        }\n        &.btn1.expand{\n            left:-150px;\n            top:0px;\n        }\n        &.btn2.expand{\n            left:-130px;\n            top:-75px;\n        }\n        &.btn3.expand{\n            left:-75px;\n            top:-130px\n        }\n        &.btn4.expand{\n            left:0;\n            top:-150px;\n        }\n        &:hover{\n            box-shadow:0 0 50px rgba(30,30,30,.5);\n        }\n    }\n']);

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

var FloatActionBtn = _styledComponents2.default.div(_templateObject);

var FloatActionButton = function (_React$Component) {
    _inherits(FloatActionButton, _React$Component);

    function FloatActionButton(props) {
        _classCallCheck(this, FloatActionButton);

        var _this = _possibleConstructorReturn(this, (FloatActionButton.__proto__ || Object.getPrototypeOf(FloatActionButton)).call(this, props));

        _this.state = { expand: false };
        return _this;
    }

    _createClass(FloatActionButton, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({ expand: !this.state.expand });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                FloatActionBtn,
                null,
                _react2.default.createElement(
                    'button',
                    { className: (this.state.expand ? "expand " : "") + "btn btn1 btn-create" },
                    '\u65B0\u5EFA'
                ),
                _react2.default.createElement(
                    'button',
                    { className: "btn btn2 btn-update" + (this.state.expand ? " expand" : "") },
                    '\u4FEE\u6539'
                ),
                _react2.default.createElement(
                    'button',
                    { className: "btn btn3 btn-remove" + (this.state.expand ? " expand" : "") },
                    '\u5220\u9664'
                ),
                _react2.default.createElement(
                    'button',
                    { className: "btn btn4 btn-query" + (this.state.expand ? " expand" : "") },
                    '\u67E5\u627E'
                ),
                _react2.default.createElement(
                    'button',
                    { className: "btn btn0" + (this.state.expand ? " expand" : ""), onClick: this.toggle.bind(this) },
                    '+'
                )
            );
        }
    }]);

    return FloatActionButton;
}(_react2.default.Component);

exports.default = FloatActionButton;