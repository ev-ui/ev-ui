'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = exports.MenuItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    0%{\n        transform:scale(0);\n    }\n    70%{\n        transform:scale(1.1);\n    }\n    100%{\n        transform:scale(1);\n    }\n'], ['\n    0%{\n        transform:scale(0);\n    }\n    70%{\n        transform:scale(1.1);\n    }\n    100%{\n        transform:scale(1);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    0%{\n        transform:scale(1);\n    }\n    30%{\n        transform:scale(1.1);\n    }\n    100%{\n        transform:scale(0);\n    }\n'], ['\n    0%{\n        transform:scale(1);\n    }\n    30%{\n        transform:scale(1.1);\n    }\n    100%{\n        transform:scale(0);\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position:fixed;\n    outline:none;\n    z-index:1000;\n    transform-origin:top left;\n    &:before{\n        content:\'\';\n        display:inherit;\n        position:absolute;\n        left:0;\n        top:', ';\n        width:0;\n        height:0;\n        border-right:10px solid rgba(255,255,255,.95);\n        border-top:6px solid transparent;\n        border-bottom:6px solid transparent;\n    }\n    &.swift-in{\n        animation:', ' .3s forwards;\n    }\n    &.swift-out{\n        animation:', ' .3s forwards;\n    }\n    &>.menu{\n        margin:-15px 0 0 10px;\n    }\n    .menu{\n        border-radius:10px;\n        box-shadow:2px 2px 25px -1px rgba(30,30,30,.6);\n        // border:1px solid gray;\n    }\n    .menu>li{\n        position:relative;\n    }\n    .menu.subMenu{\n        position:absolute;\n        left:100%;\n        top:0;\n        display:none;\n    }\n    .menu>li:hover>.subMenu{\n        display:inherit;\n    }\n    .menu-item{\n        min-width:100px;\n        white-space:nowrap;\n        text-align:center;\n        background:rgba(255,255,255,.95);\n        font-size:14px;\n        padding:5px 30px;\n        border-bottom:1px solid #aaa;\n        cursor:pointer;\n        &.remove{\n            color:red;\n            &:hover{\n                background:#ee4411;\n                color:white;\n            }\n        }\n        &.disabled{\n            color:#ccc;\n        }\n        &:hover{\n            color:white;\n            background:#55aaff;\n            &.disabled{\n                color:black;\n                background:#aaa;\n            }\n        }\n    }\n    .menu>li:first-child>.menu-item{\n        border-top-left-radius:10px;\n        border-top-right-radius:10px;\n    }\n    .menu>li:last-child>.menu-item{\n        border-bottom-left-radius:10px;\n        border-bottom-right-radius:10px;\n        border:none;\n    }\n'], ['\n    position:fixed;\n    outline:none;\n    z-index:1000;\n    transform-origin:top left;\n    &:before{\n        content:\'\';\n        display:inherit;\n        position:absolute;\n        left:0;\n        top:', ';\n        width:0;\n        height:0;\n        border-right:10px solid rgba(255,255,255,.95);\n        border-top:6px solid transparent;\n        border-bottom:6px solid transparent;\n    }\n    &.swift-in{\n        animation:', ' .3s forwards;\n    }\n    &.swift-out{\n        animation:', ' .3s forwards;\n    }\n    &>.menu{\n        margin:-15px 0 0 10px;\n    }\n    .menu{\n        border-radius:10px;\n        box-shadow:2px 2px 25px -1px rgba(30,30,30,.6);\n        // border:1px solid gray;\n    }\n    .menu>li{\n        position:relative;\n    }\n    .menu.subMenu{\n        position:absolute;\n        left:100%;\n        top:0;\n        display:none;\n    }\n    .menu>li:hover>.subMenu{\n        display:inherit;\n    }\n    .menu-item{\n        min-width:100px;\n        white-space:nowrap;\n        text-align:center;\n        background:rgba(255,255,255,.95);\n        font-size:14px;\n        padding:5px 30px;\n        border-bottom:1px solid #aaa;\n        cursor:pointer;\n        &.remove{\n            color:red;\n            &:hover{\n                background:#ee4411;\n                color:white;\n            }\n        }\n        &.disabled{\n            color:#ccc;\n        }\n        &:hover{\n            color:white;\n            background:#55aaff;\n            &.disabled{\n                color:black;\n                background:#aaa;\n            }\n        }\n    }\n    .menu>li:first-child>.menu-item{\n        border-top-left-radius:10px;\n        border-top-right-radius:10px;\n    }\n    .menu>li:last-child>.menu-item{\n        border-bottom-left-radius:10px;\n        border-bottom-right-radius:10px;\n        border:none;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Ripple = require('./Ripple.js');

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var swiftIn = (0, _styledComponents.keyframes)(_templateObject);
var swiftOut = (0, _styledComponents.keyframes)(_templateObject2);

var Root = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.triggerTop - 3 + 'px';
}, swiftIn, swiftOut);

var ContextMenu = function (_React$Component) {
    _inherits(ContextMenu, _React$Component);

    function ContextMenu(props) {
        _classCallCheck(this, ContextMenu);

        var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, props));

        _this.state = {
            top: props.top
        };
        return _this;
    }

    _createClass(ContextMenu, [{
        key: 'onClick',
        value: function onClick(menuItem) {
            if (menuItem.type !== 'disabled') {
                menuItem.action ? menuItem.action() : '';
                this.onBlur();
            }
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            var _this2 = this;

            this.Root.classList.add('swift-out');
            setTimeout(function () {
                _this2.Root.classList.remove('swift-out');
                ContextMenuOpt.hide();
            }, 299);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var Root = this.Root;
            this.Root.focus();
            if (Root.offsetTop + Root.offsetHeight > window.innerHeight) {
                this.setState({
                    top: window.innerHeight - Root.offsetHeight - 10
                });
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
                            _Ripple2.default,
                            { className: "menu-item " + menuItem.type, onClick: _this3.onClick.bind(_this3, menuItem) },
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
            var triggerTop = this.props.top - this.state.top;
            return _react2.default.createElement(
                Root,
                { id: 'root', className: 'swift-in', style: { left: this.props.left + 'px', top: this.state.top + 'px' },
                    triggerTop: triggerTop,
                    tabIndex: '-1',
                    innerRef: function innerRef(root) {
                        _this4.Root = root;
                    },
                    onBlur: this.onBlur.bind(this) },
                this.mapPropsToMenu(menu)
            );
        }
    }]);

    return ContextMenu;
}(_react2.default.Component);

var MenuItem = function () {
    /**
     * Constructor
     * @param {string} text 
     * @param {function} action 
     */
    function MenuItem(text, action) {
        _classCallCheck(this, MenuItem);

        this._text = text;
        this._action = action;
        this._subMenu = new Menu();
    }

    _createClass(MenuItem, [{
        key: 'type',
        value: function type(_type) {
            this._type = _type;
            return this;
        }
    }, {
        key: 'icon',
        value: function icon(_icon) {
            this._icon = _icon;
            return this;
        }
    }, {
        key: 'action',
        value: function action(_action) {
            this._action = _action;
            return this;
        }

        /**
         * Add subMenuItem
         * @param {MenuItem} menuItem 
         */

    }, {
        key: 'add',
        value: function add(menuItem) {
            this._subMenu.add(menuItem);
            return this;
        }
        /**
         * clear the subMenu of the menuItem
         */

    }, {
        key: 'clear',
        value: function clear() {
            this._subMenu.clear();
            return this;
        }
    }]);

    return MenuItem;
}();

exports.MenuItem = MenuItem;

var Menu = exports.Menu = function () {
    function Menu() {
        _classCallCheck(this, Menu);

        this.menu = [];
    }

    _createClass(Menu, [{
        key: 'notEmpty',
        value: function notEmpty() {
            return this.menu && this.menu.length > 0;
        }
        /**
         * add menuItem
         * @param {MenuItem}menuItem
         * @return Menu
         */

    }, {
        key: 'add',
        value: function add(menuItem) {
            this.menu.push(menuItem);
            return this;
        }
        /**
         * clear the menu
         */

    }, {
        key: 'clear',
        value: function clear() {
            this.menu.length = 0;
            return this;
        }
    }, {
        key: 'mapMenuToProps',
        value: function mapMenuToProps(menu) {
            var _this5 = this;

            var _menu = menu || this.menu;
            return _menu.map(function (menuItem) {
                return {
                    text: menuItem._text,
                    action: menuItem._action,
                    type: menuItem._type,
                    icon: menuItem._icon,
                    subMenu: menuItem._subMenu.notEmpty() ? _this5.mapMenuToProps(menuItem._subMenu.menu) : null
                };
            });
        }
    }]);

    return Menu;
}();

var ContextMenuOpt = {
    observer: null,
    view: null,
    onChange: function onChange() {
        if (typeof this.observer === 'function') {
            this.observer();
        }
    },
    subscribe: function subscribe(observer) {
        this.observer = observer;
    },
    show: function show(_ref) {
        var _this6 = this;

        var menu = _ref.menu,
            left = _ref.left,
            top = _ref.top;

        if (this.view) {
            setTimeout(function () {
                _this6.view = _react2.default.createElement(ContextMenu, { menu: menu.mapMenuToProps(), left: left, top: top });
                _this6.onChange();
            }, 300);
        } else {
            this.view = _react2.default.createElement(ContextMenu, { menu: menu.mapMenuToProps(), left: left, top: top });
            this.onChange();
        }
    },
    hide: function hide() {
        this.view = null;
        this.onChange();
    }
};
exports.default = ContextMenuOpt;