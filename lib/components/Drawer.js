'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    from{\n        transform:translateY(-100%);\n    }\n    to{\n        transform:translateY(0);\n    }\n'], ['\n    from{\n        transform:translateY(-100%);\n    }\n    to{\n        transform:translateY(0);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    from{\n        transform:translateY(0);\n    }\n    to{\n        transform:translateY(-100%);\n    }\n'], ['\n    from{\n        transform:translateY(0);\n    }\n    to{\n        transform:translateY(-100%);\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    from{\n        transform:translateX(100%)\n    }\n    to{\n        transform:translateX(0)\n    }\n'], ['\n    from{\n        transform:translateX(100%)\n    }\n    to{\n        transform:translateX(0)\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    from{\n        transform:translateX(0)\n    }\n    to{\n        transform:translateX(100%)\n    }\n'], ['\n    from{\n        transform:translateX(0)\n    }\n    to{\n        transform:translateX(100%)\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    from{\n        transform:translateY(100%);\n    }\n    to{\n        transform:translateY(0);\n    }\n'], ['\n    from{\n        transform:translateY(100%);\n    }\n    to{\n        transform:translateY(0);\n    }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    from{\n        transform:translateY(0);\n    }\n    to{\n        transform:translateY(100%);\n    }\n'], ['\n    from{\n        transform:translateY(0);\n    }\n    to{\n        transform:translateY(100%);\n    }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    from{\n        transform:translateX(-100%)\n    }\n    to{\n        transform:translateX(0)\n    }\n'], ['\n    from{\n        transform:translateX(-100%)\n    }\n    to{\n        transform:translateX(0)\n    }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    from{\n        transform:translateX(0)\n    }\n    to{\n        transform:translateX(-100%)\n    }\n'], ['\n    from{\n        transform:translateX(0)\n    }\n    to{\n        transform:translateX(-100%)\n    }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    z-index:1000;\n    background:rgba(0,0,0,.3);\n    .drawer-content{\n        position:absolute;\n        background:#fff;\n        box-shadow:0 0 20px -5px gray;\n        &.top{\n            top:0;\n            left:0;\n            right:0;            \n            box-shadow:0 10px 120px -5px gray;\n            animation:', ' .3s;\n            &.swift-out{\n                animation:', ' .3s;\n            }\n        }\n        &.right{\n            top:0;\n            right:0;\n            bottom:0;\n            box-shadow:-10px 0 120px -5px gray;\n            animation:', ' .3s;\n            &.swift-out{\n                animation:', ' .3s;\n            }\n        }\n        &.bottom{\n            right:0;\n            bottom:0;\n            left:0;\n            box-shadow:0 -10px 120px -5px gray;\n            animation:', ' .3s;\n            &.swift-out{\n                animation:', ' .3s;\n            }\n        }\n        &.left{\n            top:0;\n            bottom:0;\n            left:0;\n            box-shadow:10px 0 120px -5px gray;\n            animation:', ' .3s;\n            &.swift-out{\n                animation:', ' .3s;\n            }\n        }\n    }\n'], ['\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    z-index:1000;\n    background:rgba(0,0,0,.3);\n    .drawer-content{\n        position:absolute;\n        background:#fff;\n        box-shadow:0 0 20px -5px gray;\n        &.top{\n            top:0;\n            left:0;\n            right:0;            \n            box-shadow:0 10px 120px -5px gray;\n            animation:', ' .3s;\n            &.swift-out{\n                animation:', ' .3s;\n            }\n        }\n        &.right{\n            top:0;\n            right:0;\n            bottom:0;\n            box-shadow:-10px 0 120px -5px gray;\n            animation:', ' .3s;\n            &.swift-out{\n                animation:', ' .3s;\n            }\n        }\n        &.bottom{\n            right:0;\n            bottom:0;\n            left:0;\n            box-shadow:0 -10px 120px -5px gray;\n            animation:', ' .3s;\n            &.swift-out{\n                animation:', ' .3s;\n            }\n        }\n        &.left{\n            top:0;\n            bottom:0;\n            left:0;\n            box-shadow:10px 0 120px -5px gray;\n            animation:', ' .3s;\n            &.swift-out{\n                animation:', ' .3s;\n            }\n        }\n    }\n']);

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

var topIn = (0, _styledComponents.keyframes)(_templateObject);
var topOut = (0, _styledComponents.keyframes)(_templateObject2);
var rightIn = (0, _styledComponents.keyframes)(_templateObject3);
var rightOut = (0, _styledComponents.keyframes)(_templateObject4);
var bottomIn = (0, _styledComponents.keyframes)(_templateObject5);
var bottomOut = (0, _styledComponents.keyframes)(_templateObject6);
var leftIn = (0, _styledComponents.keyframes)(_templateObject7);
var leftOut = (0, _styledComponents.keyframes)(_templateObject8);

var Root = _styledComponents2.default.div(_templateObject9, topIn, topOut, rightIn, rightOut, bottomIn, bottomOut, leftIn, leftOut);

var Drawer = function (_React$Component) {
    _inherits(Drawer, _React$Component);

    function Drawer() {
        _classCallCheck(this, Drawer);

        var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this));

        DrawerOpt.drawerCtx = _this;
        return _this;
    }

    _createClass(Drawer, [{
        key: 'onOuterClick',
        value: function onOuterClick() {
            this.onClose();
        }
    }, {
        key: 'onClose',
        value: function onClose() {
            DrawerOpt.hide();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                content = _props.content,
                position = _props.position;

            var contentProps = _extends({}, this.props);
            return _react2.default.createElement(
                Root,
                { onClick: this.onOuterClick.bind(this) },
                _react2.default.createElement(
                    'div',
                    { ref: function ref(drawerContent) {
                            return _this2.drawerContent = drawerContent;
                        }, className: "drawer-content " + position, onClick: function onClick(e) {
                            return e.stopPropagation();
                        } },
                    content ? typeof content === 'function' ? _react2.default.createElement(this.props.content, _extends({}, contentProps, { onClose: this.onClose.bind(this) })) : typeof content === 'string' ? content : '' : ''
                )
            );
        }
    }]);

    return Drawer;
}(_react2.default.Component);

var DrawerOpt = {
    POSITION: {
        LEFT: 'left',
        RIGHT: 'right',
        TOP: 'top',
        BOTTOM: 'bottom'
    },
    observer: null,
    view: null,
    drawerCtx: null,
    onChange: function onChange() {
        if (typeof this.observer === 'function') {
            this.observer();
        }
    },
    subscribe: function subscribe(observer) {
        this.observer = observer;
    },
    top: function top(content) {
        this.show({ content: content, position: this.POSITION.TOP });
    },
    right: function right(content) {
        this.show({ content: content, position: this.POSITION.RIGHT });
    },
    bottom: function bottom(content) {
        this.show({ content: content, position: this.POSITION.BOTTOM });
    },
    left: function left(content) {
        this.show({ content: content, position: this.POSITION.LEFT });
    },
    show: function show(props) {
        var content = props.content || props;
        var position = props.position || this.POSITION.LEFT;
        props = _extends({}, props, {
            content: content,
            position: position
        });
        this.view = _react2.default.createElement(Drawer, props);
        this.onChange();
    },
    hide: function hide() {
        var _this3 = this;

        if (this.drawerCtx) {
            this.drawerCtx.drawerContent.classList.add('swift-out');
            window.setTimeout(function () {
                _this3.view = null;
                _this3.onChange();
            }, 200);
        } else {
            this.view = null;
            this.onChange();
        }
    }
};
exports.default = DrawerOpt;