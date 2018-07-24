'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    min-width:150px;\n    height:30px;\n    border-radius:15px;\n    background:#eee;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    transition:.2s all;\n    cursor:pointer;\n    &.focus{\n        background:#ddd;\n        outline:none;\n        .text-input{\n            width:200px;\n        }\n        &>.label{\n            opacity:.7;\n        }\n    }\n    &>.label{\n        padding:5px;\n        transition:.2s all;\n    }\n    .text-input{\n        line-height:25px;\n        width:0;\n        box-sizing:border-box;\n        background:transparent;\n        transition:all .2s;\n        &,&:focus{\n            outline:none;\n            border:none;\n        }\n    }\n'], ['\n    min-width:150px;\n    height:30px;\n    border-radius:15px;\n    background:#eee;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    transition:.2s all;\n    cursor:pointer;\n    &.focus{\n        background:#ddd;\n        outline:none;\n        .text-input{\n            width:200px;\n        }\n        &>.label{\n            opacity:.7;\n        }\n    }\n    &>.label{\n        padding:5px;\n        transition:.2s all;\n    }\n    .text-input{\n        line-height:25px;\n        width:0;\n        box-sizing:border-box;\n        background:transparent;\n        transition:all .2s;\n        &,&:focus{\n            outline:none;\n            border:none;\n        }\n    }\n']);

require('antd/lib/icon/style/css');

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

var SearchBox = function (_React$Component) {
    _inherits(SearchBox, _React$Component);

    function SearchBox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            focus: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SearchBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                Root,
                { className: (this.state.focus ? 'focus ' : ' ') + (this.props.className || ''), onFocus: function onFocus() {
                        return _this2.textInput.focus();
                    }, tabIndex: '100' },
                _react2.default.createElement(
                    'span',
                    { className: 'label' },
                    _react2.default.createElement(_icon2.default, { style: { marginRight: 2 }, type: 'search' }),
                    '\u641C\u7D22'
                ),
                _react2.default.createElement('input', { ref: function ref(input) {
                        return _this2.textInput = input;
                    }, type: 'text', className: 'text-input',
                    onFocus: function onFocus() {
                        return _this2.setState({ focus: true });
                    },
                    onBlur: function onBlur() {
                        return _this2.setState({ focus: false });
                    } })
            );
        }
    }]);

    return SearchBox;
}(_react2.default.Component);

exports.default = SearchBox;