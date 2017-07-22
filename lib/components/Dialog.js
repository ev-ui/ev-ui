'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    0%{\n        transform: scale(0) translate(-50%,-50%);\n        left: ', ';\n        top: -300px;\n        filter:blur(10px);\n    }\n    80%{\n        transform: scale(1.2) translate(-50%,-50%);\n        left:', ';\n        top:', ';\n        filter:blur(5px);\n    }\n    100%{\n        transform: scale(.99) translate(-50%,-50%);\n        left:', ';\n        top:', ';\n        filter:blur(0);\n    }\n'], ['\n    0%{\n        transform: scale(0) translate(-50%,-50%);\n        left: ', ';\n        top: -300px;\n        filter:blur(10px);\n    }\n    80%{\n        transform: scale(1.2) translate(-50%,-50%);\n        left:', ';\n        top:', ';\n        filter:blur(5px);\n    }\n    100%{\n        transform: scale(.99) translate(-50%,-50%);\n        left:', ';\n        top:', ';\n        filter:blur(0);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    0%{\n        opacity:1;   \n    }\n    30%{\n        transform: scale(1) translate(-50%,-50%);\n        border-radius: 50%;\n        width: 300px;\n        height:300px;\n        left: 10%;\n        top: 80%;\n        opacity: .9;\n    }\n    100%{\n        transform: scale(6) translate(0,0);\n        border-radius: 50%;\n        width: 300px;\n        height:300px;\n        opacity: 0.5;\n    }\n'], ['\n    0%{\n        opacity:1;   \n    }\n    30%{\n        transform: scale(1) translate(-50%,-50%);\n        border-radius: 50%;\n        width: 300px;\n        height:300px;\n        left: 10%;\n        top: 80%;\n        opacity: .9;\n    }\n    100%{\n        transform: scale(6) translate(0,0);\n        border-radius: 50%;\n        width: 300px;\n        height:300px;\n        opacity: 0.5;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    min-width:500px;\n    min-height:100px\n    overflow:hidden;\n    position:fixed;\n    left:', ';\n    top:', ';\n    transform: scale(1) translate(-50%,-50%);\n    border-radius: 10px;\n    background: rgba(255, 255, 255, .9);\n    box-shadow: 10px 10px 80px -10px rgba(30, 30, 30, .7);\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    z-index:1000;\n    &.swift-in{\n        animation:', ' .5s ease-out forwards;\n    }\n    &.swift-out{\n        animation:', ' .5s ease-out;\n    }\n    .btn-close{\n        position:absolute;\n        top:5px;\n        right:5px;\n        background:transparent;\n        width:20px;\n        height:20px;\n        line-height:20px;\n        border:none;\n        outline:none;\n        font-size:20px;\n        border-radius:5px;\n    }\n    .btn-close:hover{\n        color:red;\n    }\n    .content{\n        align-items:center;\n        justify-content:center;\n    }\n'], ['\n    min-width:500px;\n    min-height:100px\n    overflow:hidden;\n    position:fixed;\n    left:', ';\n    top:', ';\n    transform: scale(1) translate(-50%,-50%);\n    border-radius: 10px;\n    background: rgba(255, 255, 255, .9);\n    box-shadow: 10px 10px 80px -10px rgba(30, 30, 30, .7);\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    z-index:1000;\n    &.swift-in{\n        animation:', ' .5s ease-out forwards;\n    }\n    &.swift-out{\n        animation:', ' .5s ease-out;\n    }\n    .btn-close{\n        position:absolute;\n        top:5px;\n        right:5px;\n        background:transparent;\n        width:20px;\n        height:20px;\n        line-height:20px;\n        border:none;\n        outline:none;\n        font-size:20px;\n        border-radius:5px;\n    }\n    .btn-close:hover{\n        color:red;\n    }\n    .content{\n        align-items:center;\n        justify-content:center;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    background-image:', ';\n    width:', ';\n    height:', ';\n    position:absolute;\n    left:', ';\n    top:', ';\n    filter:blur(10px);\n    z-index:-1;\n'], ['\n    background-image:', ';\n    width:', ';\n    height:', ';\n    position:absolute;\n    left:', ';\n    top:', ';\n    filter:blur(10px);\n    z-index:-1;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _domToImage = require('dom-to-image');

var _domToImage2 = _interopRequireDefault(_domToImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * 此处花了太多精力写转场动画，实现dialog部分代码极少，动画部分的写的比较乱，没办法，react里面做这部分比较难，可以暂时忽略。
 */

var swiftIn = (0, _styledComponents.keyframes)(_templateObject, function (props) {
    return props.winWidth + 'px';
}, function (props) {
    return props.winWidth / 2 + 'px';
}, function (props) {
    return props.winHeight / 2 + 'px';
}, function (props) {
    return props.winWidth / 2 + 'px';
}, function (props) {
    return props.winHeight / 2 + 'px';
});
var swiftOut = (0, _styledComponents.keyframes)(_templateObject2);
var Root = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.winWidth / 2 + 'px';
}, function (props) {
    return props.winHeight / 2 + 'px';
}, swiftIn, swiftOut);
var BgLayer = _styledComponents2.default.div(_templateObject4, function (props) {
    return props.bgUrl ? 'url(' + props.bgUrl + ')' : '';
}, function (props) {
    return props.bgWidth + 'px';
}, function (props) {
    return props.bgHeight + 'px';
}, function (props) {
    return 0 - props.bgLeft + 'px';
}, function (props) {
    return 0 - props.bgTop + 'px';
});

var Dialog = function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

        _this.state = {
            visible: true,
            winWidth: 0,
            winHeight: 0,
            bgUrl: '',
            bgWidth: 0,
            bgHeight: 0,
            bgPositionX: 0,
            bgPositionY: 0,
            bgLeft: 0,
            bgTop: 0
        };
        return _this;
    }

    _createClass(Dialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            });

            var root = this.Root;
            root.style.display = this.state.visible ? 'inherit' : 'none';

            root.addEventListener('animationend', function () {
                root.style.display = _this2.state.visible ? 'inherit' : 'none';
                _this2.content.style.display = _this2.state.visible ? 'flex' : 'none';
                _this2.bgLayer ? _this2.bgLayer.style.display = _this2.state.visible ? 'inherit' : 'none' : '';
                if (_this2.state.visible) {
                    var appRoot = document.querySelector('body>div#app>div>div#app-main');
                    _domToImage2.default.toPng(appRoot, { quality: 0.1 }).then(function (url) {
                        _this2.setState({ bgUrl: url });
                    });
                    _this2.setState({
                        bgWidth: appRoot.offsetWidth,
                        bgHeight: appRoot.offsetHeight,
                        bgLeft: _this2.Root.offsetLeft - _this2.Root.offsetWidth / 2 - appRoot.offsetLeft,
                        bgTop: _this2.Root.offsetTop - _this2.Root.offsetHeight / 2 - appRoot.offsetTop,
                        bgPositionX: 0 - _this2.Root.offsetLeft,
                        bgPositionY: 0 - _this2.Root.offsetTop
                    });
                } else {
                    DialogOpt.hide(_this2.props.dkey);
                }
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            //  if(this.state.visible!=nextProps.visible){
            //      this.setState({visible:nextProps.visible})
            //  }
        }
    }, {
        key: 'onClose',
        value: function onClose() {
            this.setState({ visible: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                content = _props.content,
                mainBlur = _props.mainBlur,
                bgBlur = _props.bgBlur,
                onConfirm = _props.onConfirm,
                onCancel = _props.onCancel;
            var _state = this.state,
                visible = _state.visible,
                bgUrl = _state.bgUrl,
                bgPositionX = _state.bgPositionX,
                bgPositionY = _state.bgPositionY,
                bgWidth = _state.bgWidth,
                bgHeight = _state.bgHeight,
                bgLeft = _state.bgLeft,
                bgTop = _state.bgTop;

            return _react2.default.createElement(
                Root,
                { innerRef: function innerRef(root) {
                        return _this3.Root = root;
                    },
                    winWidth: this.state.winWidth, winHeight: this.state.winHeight,
                    className: "dialog-root" + (visible ? ' swift-in' : ' swift-out'),
                    style: { display: visible ? 'inherit' : '' } },
                _react2.default.createElement(
                    'div',
                    { ref: function ref(ct) {
                            return _this3.content = ct;
                        }, className: 'content', style: { display: this.state.visible ? 'flex' : 'none', width: '100%', flexGrow: 1 } },
                    bgBlur ? _react2.default.createElement(BgLayer, { innerRef: function innerRef(bgLayer) {
                            return _this3.bgLayer = bgLayer;
                        }, style: { display: visible ? 'none' : 'none' }, bgUrl: bgUrl, bgPositionX: bgPositionX, bgPositionY: bgPositionY,
                        bgWidth: bgWidth, bgHeight: bgHeight,
                        bgLeft: bgLeft, bgTop: bgTop }) : '',
                    _react2.default.createElement(
                        'button',
                        { className: 'btn-close', onClick: this.onClose.bind(this) },
                        '\xD7'
                    ),

                    /** 此处标签里面直接用content有问题，因为JSX会直接解析为<content/>标签而不是对应的组件,
                        这也是为什么React组件要求第一个字母大写的原因。
                     */
                    content ? typeof content === 'function' ? _react2.default.createElement(this.props.content, { onConfirm: onConfirm, onCancel: onCancel, onClose: this.onClose.bind(this) }) : typeof content === 'string' ? content : '' : ''
                )
            );
        }
    }]);

    return Dialog;
}(_react2.default.Component);

var DialogOpt = {
    dialogs: [],
    observers: [],
    onChange: function onChange() {
        this.observers.forEach(function (observer) {
            if (typeof observer === 'function') {
                observer();
            }
        });
    },
    subscribe: function subscribe(observer) {
        if (!this.observers.find(observer)) {
            this.observers.push(observer);
        }
    },
    show: function show(props) {
        var dialog = _react2.default.createElement(Dialog, { dkey: this.dialogs.length, key: this.dialogs.length,
            content: props.content || props,
            bgBlur: props.bgBlur || !props.mainBlur,
            onConfirm: props.onConfirm,
            onCancel: props.onCancel });
        this.dialogs.push({
            id: this.dialogs.length,
            dialog: dialog,
            mainBlur: props.mainBlur
        });
        this.onChange();
    },
    hide: function hide(id) {
        if (id) {
            this.dialogs = this.dialogs.filter(function (dialog) {
                return dialog.id !== id;
            });
        } else {
            this.dialogs.pop();
        }
        this.onChange();
    }
};
exports.default = DialogOpt;