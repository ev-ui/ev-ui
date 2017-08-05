'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    box-shadow:0 1px 10px -3px gray;\n    display:flex;\n    flex-direction:column;\n    &:hover{\n        box-shadow:0 0px 20px -3px gray;\n    }\n    .card-title{\n        background:#f0f0f0;\n        padding:5px 10px;\n        font-size:16px;\n        text-align:center;\n    }\n    .card-content{\n        padding:10px 20px;\n    }\n'], ['\n    box-shadow:0 1px 10px -3px gray;\n    display:flex;\n    flex-direction:column;\n    &:hover{\n        box-shadow:0 0px 20px -3px gray;\n    }\n    .card-title{\n        background:#f0f0f0;\n        padding:5px 10px;\n        font-size:16px;\n        text-align:center;\n    }\n    .card-content{\n        padding:10px 20px;\n    }\n']);

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

var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Root,
                this.props,
                this.props.children
            );
        }
    }]);

    return Card;
}(_react2.default.Component);

exports.default = Card;