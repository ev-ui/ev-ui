'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Dialog = require('./Dialog.js');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ContextMenu = require('./ContextMenu.js');

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _Confirm = require('./Confirm.js');

var _Confirm2 = _interopRequireDefault(_Confirm);

var _Drawer = require('./Drawer.js');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Loading = require('./Loading.js');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EvUI = function (_React$Component) {
    _inherits(EvUI, _React$Component);

    function EvUI(props) {
        _classCallCheck(this, EvUI);

        var _this = _possibleConstructorReturn(this, (EvUI.__proto__ || Object.getPrototypeOf(EvUI)).call(this, props));

        _this.state = {
            mainBlur: false,
            dialogs: [],
            ctxMenu: null,
            confirm: null,
            drawer: null,
            loading: null
        };
        return _this;
    }

    _createClass(EvUI, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _Dialog2.default.subscribe(this.onDialogChange.bind(this));
            _ContextMenu2.default.subscribe(this.onContextMenuChange.bind(this));
            _Confirm2.default.subscribe(this.onConfirmChange.bind(this));
            _Drawer2.default.subscribe(this.onDrawerChange.bind(this));
            _Loading2.default.subscribe(this.onLoadingChange.bind(this));
        }
    }, {
        key: 'onDialogChange',
        value: function onDialogChange() {
            this.setState({
                dialogs: _Dialog2.default.dialogs,
                mainBlur: _Dialog2.default.dialogs.some(function (d) {
                    return d.mainBlur;
                })
            });
        }
    }, {
        key: 'onContextMenuChange',
        value: function onContextMenuChange() {
            this.setState({ ctxMenu: _ContextMenu2.default.view });
        }
    }, {
        key: 'onConfirmChange',
        value: function onConfirmChange() {
            this.setState({
                confirm: _Confirm2.default.view,
                mainBlur: _Confirm2.default.view !== null
            });
        }
    }, {
        key: 'onDrawerChange',
        value: function onDrawerChange() {
            this.setState({
                drawer: _Drawer2.default.view
            });
        }
    }, {
        key: 'onLoadingChange',
        value: function onLoadingChange() {
            this.setState({
                loading: _Loading2.default.view,
                mainBlur: _Loading2.default.view !== null
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                this.props,
                _react2.default.createElement(
                    'div',
                    { id: 'app-main', style: { filter: this.state.mainBlur ? 'blur(7px) brightness(80%)' : 'none' } },
                    this.props.children
                ),
                this.state.drawer ? _Drawer2.default.view : '',
                this.state.dialogs.map(function (d, i) {
                    return d.dialog;
                }),
                this.state.ctxMenu ? _ContextMenu2.default.view : '',
                this.state.confirm ? _Confirm2.default.view : '',
                this.state.loading ? _Loading2.default.view : ''
            );
        }
    }]);

    return EvUI;
}(_react2.default.Component);

exports.default = EvUI;