'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    align-self:center;\n    padding:5px 0;\n    color:#0099ff;\n    cursor:pointer;\n    border-radius:10px;\n    min-width:60px;\n    overflow:hidden;\n    &.large{\n        font-size:30px;\n        min-width:100px;\n    }\n    &.success{\n        color:green;\n    }\n    &.danger{\n        color:red;\n    }\n    *{\n        transition:.5s all;\n    }\n    &>.wrapper{\n        display:flex;\n    }\n    & .icon{\n        width:100%;\n        height:100%;\n        display:block;\n        flex-shrink:0;\n        text-align:center;\n    }\n    & .text{\n        width:100%;\n        height:100%;\n        flex-shrink:0;\n        text-align:center;\n    }\n    &:hover{\n        background:#eee;\n        & .wrapper{\n            transform:translateX(-100%);\n        }\n    }\n'], ['\n    align-self:center;\n    padding:5px 0;\n    color:#0099ff;\n    cursor:pointer;\n    border-radius:10px;\n    min-width:60px;\n    overflow:hidden;\n    &.large{\n        font-size:30px;\n        min-width:100px;\n    }\n    &.success{\n        color:green;\n    }\n    &.danger{\n        color:red;\n    }\n    *{\n        transition:.5s all;\n    }\n    &>.wrapper{\n        display:flex;\n    }\n    & .icon{\n        width:100%;\n        height:100%;\n        display:block;\n        flex-shrink:0;\n        text-align:center;\n    }\n    & .text{\n        width:100%;\n        height:100%;\n        flex-shrink:0;\n        text-align:center;\n    }\n    &:hover{\n        background:#eee;\n        & .wrapper{\n            transform:translateX(-100%);\n        }\n    }\n']);

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

var Root = _styledComponents2.default.span(_templateObject);

var ActionTag = function (_React$Component) {
    _inherits(ActionTag, _React$Component);

    function ActionTag() {
        _classCallCheck(this, ActionTag);

        return _possibleConstructorReturn(this, (ActionTag.__proto__ || Object.getPrototypeOf(ActionTag)).apply(this, arguments));
    }

    _createClass(ActionTag, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Root,
                _extends({}, this.props, { className: this.props.type + ' ' + this.props.size }),
                _react2.default.createElement(
                    'span',
                    { className: 'wrapper' },
                    _react2.default.createElement(
                        'span',
                        { className: 'icon' },
                        this.props.iconField
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'text' },
                        this.props.textField
                    )
                )
            );
        }
    }]);

    return ActionTag;
}(_react2.default.Component);

exports.default = ActionTag;