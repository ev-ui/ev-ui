'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    0%{\n        transform:scale(0);\n    }\n    70%{\n        transform:scale(1.1);\n    }\n    100%{\n        transform:scale(1);\n    }\n'], ['\n    0%{\n        transform:scale(0);\n    }\n    70%{\n        transform:scale(1.1);\n    }\n    100%{\n        transform:scale(1);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    0%{\n        transform:scale(1);\n    }\n    30%{\n        transform:scale(1.1);\n    }\n    100%{\n        transform:scale(0);\n    }\n'], ['\n    0%{\n        transform:scale(1);\n    }\n    30%{\n        transform:scale(1.1);\n    }\n    100%{\n        transform:scale(0);\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position:fixed;\n    display:none;\n    outline:none;\n    transform-origin:top left;\n    &.swift-in{\n        animation:', ' .5s forwards;\n    }\n    &.swift-out{\n        animation:', ' .5s forwards;\n    }\n'], ['\n    position:fixed;\n    display:none;\n    outline:none;\n    transform-origin:top left;\n    &.swift-in{\n        animation:', ' .5s forwards;\n    }\n    &.swift-out{\n        animation:', ' .5s forwards;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ripple = require('../plugin/evolify/ripple.jsx');

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var swiftIn = (0, _styledComponents.keyframes)(_templateObject);
var swiftOut = (0, _styledComponents.keyframes)(_templateObject2);

var Root = _styledComponents2.default.div(_templateObject3, swiftIn, swiftOut);

var ContextMenu = function (_React$Component) {
    _inherits(ContextMenu, _React$Component);

    function ContextMenu() {
        _classCallCheck(this, ContextMenu);

        return _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).apply(this, arguments));
    }

    _createClass(ContextMenu, [{
        key: 'onBlur',
        value: function onBlur() {
            var _this2 = this;

            this.Root.classList.add('swift-out');
            setTimeout(function () {
                _this2.Root.classList.remove('swift-out');
                _this2.props.onHide();
            }, 499);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.visible) {
                this.Root.focus();
            }
        }
    }, {
        key: 'mapPropsToMenu',
        value: function mapPropsToMenu(menu, sub) {
            var _this3 = this;

            return _react2.default.createElement(
                'ul',
                { className: 'menu' + (sub ? ' subMenu' : '') },
                menu.map(function (menuItem, index) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'ripple', key: index },
                        _react2.default.createElement(
                            _ripple2.default,
                            { className: 'menu-item', onClick: _this3.onClick.bind(_this3, menuItem.action) },
                            menuItem.text,
                            '\xA0\xA0\xA0\xA0',
                            menuItem.subMenu && menuItem.subMenu.length > 0 ? '>' : ''
                        ),
                        menuItem.subMenu && menuItem.subMenu.length > 0 ? _this3.mapPropsToMenu(menuItem.subMenu, true) : ''
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var menu = this.props.menu || [];
            return _react2.default.createElement(
                Root,
                { id: 'root', className: this.props.visible ? 'swift-in' : '', style: { display: this.props.visible ? 'inherit' : '', left: this.props.left + 'px', top: this.props.top + 'px' },
                    tabIndex: '-1',
                    innerRef: function innerRef(root) {
                        _this4.Root = root;
                    },
                    onBlur: this.onBlur.bind(this) },
                this.props.content
            );
        }
    }]);

    return ContextMenu;
}(_react2.default.Component);

exports.default = ContextMenu;