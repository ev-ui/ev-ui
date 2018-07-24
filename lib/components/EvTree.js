'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    user-select:none;\n    font-size:17px;\n    padding-left:10px;\n    ul{\n        list-style:inherit;\n        margin-left:20px;\n    }\n    li{\n        list-style:none;\n        .item{\n            cursor:pointer;\n            .text{\n                margin-left:10px;\n            }\n        }\n        .item:hover{\n            background:#bbeeff;\n        }\n    }\n'], ['\n    user-select:none;\n    font-size:17px;\n    padding-left:10px;\n    ul{\n        list-style:inherit;\n        margin-left:20px;\n    }\n    li{\n        list-style:none;\n        .item{\n            cursor:pointer;\n            .text{\n                margin-left:10px;\n            }\n        }\n        .item:hover{\n            background:#bbeeff;\n        }\n    }\n']);

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

var Tree = _styledComponents2.default.div(_templateObject);
var data = [{
    name: "home",
    children: [{
        name: "01",
        children: [{ name: "011" }]
    }, { name: "02" }, { name: "03" }, {
        name: "04",
        children: [{ name: "041" }, {
            name: "042",
            children: [{ name: "0421" }]
        }]
    }]
}];

var TreeNode = function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

        _this.state = { collapsed: false };
        return _this;
    }

    _createClass(TreeNode, [{
        key: 'onNodeClick',
        value: function onNodeClick() {
            this.setState({ collapsed: !this.state.collapsed });
        }
    }, {
        key: 'render',
        value: function render() {
            var data = this.props.dataSource;
            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'item', onClick: this.onNodeClick.bind(this) },
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(_icon2.default, { type: data.children ? this.state.collapsed ? "folder" : "folder-open" : "file" })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'text' },
                        data.name
                    )
                ),
                data.children ? _react2.default.createElement(
                    'ul',
                    { style: { display: this.state.collapsed ? 'none' : 'inherit' } },
                    data.children.map(function (item, index) {
                        return _react2.default.createElement(TreeNode, { key: index, dataSource: item });
                    })
                ) : ''
            );
        }
    }]);

    return TreeNode;
}(_react2.default.Component);

var EvTree = function (_React$Component2) {
    _inherits(EvTree, _React$Component2);

    function EvTree() {
        _classCallCheck(this, EvTree);

        return _possibleConstructorReturn(this, (EvTree.__proto__ || Object.getPrototypeOf(EvTree)).apply(this, arguments));
    }

    _createClass(EvTree, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var dataSource = this.props.dataSource;
            return _react2.default.createElement(
                Tree,
                null,
                _react2.default.createElement(TreeNode, { dataSource: data[0] })
            );
        }
    }]);

    return EvTree;
}(_react2.default.Component);

exports.default = EvTree;