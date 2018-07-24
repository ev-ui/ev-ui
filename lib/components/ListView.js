'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _radio = require('antd/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    box-shadow:none;\n    background:rgba(230,230,230,.5);\n    border:1px solid #ccc;\n    user-select:none;\n    ::-webkit-scrollbar{\n        width:1px;\n        height:1px;\n    }\n    ::-webkit-scollbar-thumb{\n        background:#aaa;\n    }\n    &>.header{\n        display:flex;                    \n        background:rgba(250,250,250,.5);\n        box-shadow:0 1px 2px -1px gray;\n        padding:5px;\n        .title{\n            flex-grow:1;\n        }\n    }\n    &>.content{\n        padding:5px 0 0 ;\n        overflow:hidden;\n        box-sizing:content-box;\n        &>.list-view{\n            display:flex;\n            overflow:scroll;\n            padding-top:5px;\n            width:100%;\n            height:100%;\n            .list-item{\n                white-space:nowrap;\n                width:100%;\n                position:relative;\n                overflow:hidden;\n                &.selected{\n                    color:white;\n                }\n            }\n            &.grid{\n                flex-flow:row wrap;\n                .list-item{\n                    width:70px;\n                    height:70px;\n                    margin:5px;\n                    display:flex;\n                    flex-direction:column;\n                    justify-content:space-around;\n                    align-items:center;\n                    align-items:center;\n                    background:#fff;\n                    box-shadow:0px 0px 5px -1px gray;\n                    &.selected{\n                        background:#00aaff;\n                    }\n                    &:hover{\n                        box-shadow:1px 1px 5px -1px gray;\n                    }\n                    &:hover .btn-remove.enable{\n                        display:inherit;\n                    }\n                    .icon{\n                        font-size:30px;\n                    }\n                    .name{\n                        text-align:center;\n                    }\n                    .btn-remove{\n                        &:before{\n                            content:\'\\2715\';\n                            display:inline-block;\n                            width:20px;\n                            height:20px;\n                            line-height:20px;\n                            text-align:center;\n                            background:transparent;\n                        }\n                        display:none;\n                        position:absolute;\n                        right:-10px;\n                        top:-10px;\n                        width:20px;\n                        height:20px;\n                        padding:0;\n                        border:none;\n                        outline:none;\n                        overflow:hidden;\n                        background:#fff;\n                        border:1px solid #ee2200;\n                        color:#ee2200;\n                        border-radius:50%;\n                        &:hover{\n                            color:white;\n                            background:#ee2200;\n                        }\n                    }\n                    &.add{\n                        display:none;\n                        &.enable{\n                            display:inherit;\n                        }\n                    }\n                }\n            }\n            &.list{\n                flex-direction:column;\n                width:100%;\n                .list-item{\n                    display:flex;\n                    flex-direction:row;\n                    align-items:center;\n                    padding:10px;\n                    width:100%;\n                    height:30px;\n                    overflow:hidden;\n                    &.even{\n                        background:#fff;\n                    }\n                    &.selected{\n                        background:#00aaff;\n                    }\n                    .icon{\n\n                    }\n                    .name{\n                        margin-left:10px;\n                    }\n                    .btn-remove{\n                        &:after{\n                            content:\'\u5220\u9664\';\n                            display:inherit;\n                            color:white;\n                        }\n                        position:absolute;\n                        right:0;\n                        top:0;\n                        height:100%;\n                        border:none;\n                        background:#ee2200;\n                        padding:0 5px;\n                        display:none;\n                        outline:none;\n                        border-radius:0;\n                        cursor:pointer;\n                    }\n                    &.add{\n                        display:none;\n                    }\n                    &:hover{\n                       background:#00aaff; \n                       color:white;\n                    }\n                    &:hover .btn-remove{\n                        display:inherit;\n                    }\n                }\n            }\n        }\n    }\n'], ['\n    box-shadow:none;\n    background:rgba(230,230,230,.5);\n    border:1px solid #ccc;\n    user-select:none;\n    ::-webkit-scrollbar{\n        width:1px;\n        height:1px;\n    }\n    ::-webkit-scollbar-thumb{\n        background:#aaa;\n    }\n    &>.header{\n        display:flex;                    \n        background:rgba(250,250,250,.5);\n        box-shadow:0 1px 2px -1px gray;\n        padding:5px;\n        .title{\n            flex-grow:1;\n        }\n    }\n    &>.content{\n        padding:5px 0 0 ;\n        overflow:hidden;\n        box-sizing:content-box;\n        &>.list-view{\n            display:flex;\n            overflow:scroll;\n            padding-top:5px;\n            width:100%;\n            height:100%;\n            .list-item{\n                white-space:nowrap;\n                width:100%;\n                position:relative;\n                overflow:hidden;\n                &.selected{\n                    color:white;\n                }\n            }\n            &.grid{\n                flex-flow:row wrap;\n                .list-item{\n                    width:70px;\n                    height:70px;\n                    margin:5px;\n                    display:flex;\n                    flex-direction:column;\n                    justify-content:space-around;\n                    align-items:center;\n                    align-items:center;\n                    background:#fff;\n                    box-shadow:0px 0px 5px -1px gray;\n                    &.selected{\n                        background:#00aaff;\n                    }\n                    &:hover{\n                        box-shadow:1px 1px 5px -1px gray;\n                    }\n                    &:hover .btn-remove.enable{\n                        display:inherit;\n                    }\n                    .icon{\n                        font-size:30px;\n                    }\n                    .name{\n                        text-align:center;\n                    }\n                    .btn-remove{\n                        &:before{\n                            content:\'\\\\2715\';\n                            display:inline-block;\n                            width:20px;\n                            height:20px;\n                            line-height:20px;\n                            text-align:center;\n                            background:transparent;\n                        }\n                        display:none;\n                        position:absolute;\n                        right:-10px;\n                        top:-10px;\n                        width:20px;\n                        height:20px;\n                        padding:0;\n                        border:none;\n                        outline:none;\n                        overflow:hidden;\n                        background:#fff;\n                        border:1px solid #ee2200;\n                        color:#ee2200;\n                        border-radius:50%;\n                        &:hover{\n                            color:white;\n                            background:#ee2200;\n                        }\n                    }\n                    &.add{\n                        display:none;\n                        &.enable{\n                            display:inherit;\n                        }\n                    }\n                }\n            }\n            &.list{\n                flex-direction:column;\n                width:100%;\n                .list-item{\n                    display:flex;\n                    flex-direction:row;\n                    align-items:center;\n                    padding:10px;\n                    width:100%;\n                    height:30px;\n                    overflow:hidden;\n                    &.even{\n                        background:#fff;\n                    }\n                    &.selected{\n                        background:#00aaff;\n                    }\n                    .icon{\n\n                    }\n                    .name{\n                        margin-left:10px;\n                    }\n                    .btn-remove{\n                        &:after{\n                            content:\'\u5220\u9664\';\n                            display:inherit;\n                            color:white;\n                        }\n                        position:absolute;\n                        right:0;\n                        top:0;\n                        height:100%;\n                        border:none;\n                        background:#ee2200;\n                        padding:0 5px;\n                        display:none;\n                        outline:none;\n                        border-radius:0;\n                        cursor:pointer;\n                    }\n                    &.add{\n                        display:none;\n                    }\n                    &:hover{\n                       background:#00aaff; \n                       color:white;\n                    }\n                    &:hover .btn-remove{\n                        display:inherit;\n                    }\n                }\n            }\n        }\n    }\n']);

require('antd/lib/popover/style/css');

require('antd/lib/button/style/css');

require('antd/lib/icon/style/css');

require('antd/lib/radio/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Card = require('__public/component/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RadioGroup = _radio2.default.Group;
var RadioButton = _radio2.default.Button;

var Root = (0, _styledComponents2.default)(_Card2.default)(_templateObject);

var ListView = function (_React$Component) {
    _inherits(ListView, _React$Component);

    function ListView() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ListView);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListView.__proto__ || Object.getPrototypeOf(ListView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            listStyle: 'grid',
            selectedIndex: -1
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ListView, [{
        key: 'onListStyleChange',
        value: function onListStyleChange(e) {
            this.setState({
                listStyle: e.target.value
            });
        }
    }, {
        key: 'onItemClick',
        value: function onItemClick(index) {
            this.setState({
                selectedIndex: index
            });
        }
    }, {
        key: 'onItemDoubleClick',
        value: function onItemDoubleClick() {
            var onItemDoubleClick = this.props.onItemDoubleClick;

            onItemDoubleClick ? onItemDoubleClick(this.state.selectedIndex) : '';
        }
    }, {
        key: 'onAdd',
        value: function onAdd() {
            this.props.onAdd ? this.props.onAdd() : '';
        }
    }, {
        key: 'onRemove',
        value: function onRemove() {
            this.props.onRemove ? this.props.onRemove(this.state.selectedIndex) : '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var dataSource = this.props.dataSource || data;
            var editable = this.props.editable;

            return _react2.default.createElement(
                Root,
                this.props,
                _react2.default.createElement(
                    'header',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'layout-switch' },
                        _react2.default.createElement(
                            RadioGroup,
                            { defaultValue: 'grid', size: 'small', onChange: this.onListStyleChange.bind(this) },
                            _react2.default.createElement(
                                RadioButton,
                                { value: 'grid' },
                                _react2.default.createElement(_icon2.default, { type: 'appstore-o' })
                            ),
                            _react2.default.createElement(
                                RadioButton,
                                { value: 'list' },
                                _react2.default.createElement(_icon2.default, { type: 'bars' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'title' },
                        this.props.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-group' },
                        _react2.default.createElement(_button2.default, { size: 'small', icon: 'plus', onClick: this.onAdd.bind(this) }),
                        _react2.default.createElement(_button2.default, { size: 'small', icon: 'minus', onClick: this.onRemove.bind(this) })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'list-view ' + this.state.listStyle },
                        dataSource.map(function (item, index) {
                            return _react2.default.createElement(
                                _popover2.default,
                                { key: index, content: item.name, placement: 'bottom' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'list-item' + (index % 2 ? '' : ' even') + (_this2.state.selectedIndex === index ? ' selected' : ''),
                                        onDoubleClick: _this2.onItemDoubleClick.bind(_this2, index),
                                        onClick: _this2.onItemClick.bind(_this2, index) },
                                    _react2.default.createElement(_icon2.default, { className: 'icon', type: item.icon || 'file' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'name' },
                                        item.name
                                    ),
                                    _react2.default.createElement('button', { className: 'btn-remove' + (editable ? ' enable' : ''), onClick: _this2.onRemove.bind(_this2, index) })
                                )
                            );
                        }),
                        _react2.default.createElement(
                            'div',
                            { className: "list-item add" + (editable ? ' enable' : ''), onClick: this.onAdd.bind(this) },
                            _react2.default.createElement(
                                'span',
                                { className: 'icon' },
                                _react2.default.createElement(_icon2.default, { type: 'plus' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ListView;
}(_react2.default.Component);

exports.default = ListView;