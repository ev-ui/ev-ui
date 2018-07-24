'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    user-select:none;\n    font-size:17px;\n    display:flex;\n    flex-direction:column;\n    height:100%;\n    ::-webkit-scrollbar{\n        width:1px;\n        height:1px;\n    }\n    ::-webkit-scollbar-thumb{\n        background:#aaa;\n    }\n    &>.search-box{\n        background:#ccc;\n        padding:5px;\n        .ant-input-affix-wrapper{\n            width:100%!important;\n            .ant-input{\n                background:rgba(255,255,255,.7);\n            }\n        }\n    }\n    &>ul.tree{\n        overflow:scroll;\n    }\n    &>li>ul{\n        margin-left:10px;\n    }\n    li>ul{\n        list-style:inherit;\n        margin-left:25px;\n        overflow:hidden;\n        // border-left:1px solid #aaa;\n        &:before{\n            content:\'\';\n            width:1px;\n            top:25px;\n            bottom:13px;\n            background:#aaa;\n            display:inherit;\n            position:absolute;\n        }\n        &>li>span{\n            &:before{\n                content:\'\';\n                width:15px;\n                height:1px;\n                background:#aaa;\n                display:inherit;\n            }\n        }\n    }\n    li{\n        list-style:none;\n        position:relative;\n        .item{\n            flex-grow:1;\n            display:flex;\n            align-items:center;\n            cursor:pointer;\n            position:relative;\n            outline:none;\n            &.matched .text{\n                color:red;\n            }\n            .check-box{\n            }\n            .icon{\n                color:#0088dd;\n                &.leaf{\n                    color:gray;\n                }\n            }\n            .text{\n                margin-left:10px;\n                white-space:nowrap;\n                overflow:hidden;\n            }\n            .menu{\n                width:200px;\n                height:300px;\n                display:none;\n                border:1px solid black;\n                position:absolute;\n                left:200px;\n                top:0px;\n            }\n            .menu.active{\n                display:inherit;\n            }\n        }\n        .item:hover,.item.selected{\n            background:#bbeeff;\n        }\n    }\n'], ['\n    user-select:none;\n    font-size:17px;\n    display:flex;\n    flex-direction:column;\n    height:100%;\n    ::-webkit-scrollbar{\n        width:1px;\n        height:1px;\n    }\n    ::-webkit-scollbar-thumb{\n        background:#aaa;\n    }\n    &>.search-box{\n        background:#ccc;\n        padding:5px;\n        .ant-input-affix-wrapper{\n            width:100%!important;\n            .ant-input{\n                background:rgba(255,255,255,.7);\n            }\n        }\n    }\n    &>ul.tree{\n        overflow:scroll;\n    }\n    &>li>ul{\n        margin-left:10px;\n    }\n    li>ul{\n        list-style:inherit;\n        margin-left:25px;\n        overflow:hidden;\n        // border-left:1px solid #aaa;\n        &:before{\n            content:\'\';\n            width:1px;\n            top:25px;\n            bottom:13px;\n            background:#aaa;\n            display:inherit;\n            position:absolute;\n        }\n        &>li>span{\n            &:before{\n                content:\'\';\n                width:15px;\n                height:1px;\n                background:#aaa;\n                display:inherit;\n            }\n        }\n    }\n    li{\n        list-style:none;\n        position:relative;\n        .item{\n            flex-grow:1;\n            display:flex;\n            align-items:center;\n            cursor:pointer;\n            position:relative;\n            outline:none;\n            &.matched .text{\n                color:red;\n            }\n            .check-box{\n            }\n            .icon{\n                color:#0088dd;\n                &.leaf{\n                    color:gray;\n                }\n            }\n            .text{\n                margin-left:10px;\n                white-space:nowrap;\n                overflow:hidden;\n            }\n            .menu{\n                width:200px;\n                height:300px;\n                display:none;\n                border:1px solid black;\n                position:absolute;\n                left:200px;\n                top:0px;\n            }\n            .menu.active{\n                display:inherit;\n            }\n        }\n        .item:hover,.item.selected{\n            background:#bbeeff;\n        }\n    }\n']);

require('antd/lib/checkbox/style/css');

require('antd/lib/icon/style/css');

require('antd/lib/input/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Search = _input2.default.Search;
var Root = _styledComponents2.default.div(_templateObject);

var TreeNode = function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

        _this.state = { expanded: _this.props.expanded ? true : false };
        return _this;
    }

    _createClass(TreeNode, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // if(this.props.type===ObjectType.HOME){
            //     this.setState({collapsed:false})
            // }
        }
    }, {
        key: 'onNodeClick',
        value: function onNodeClick(event) {

            // this.props.onSelected();
            var onClick = this.props.onClick;

            onClick ? onClick(event.ctrlKey) : '';
        }
    }, {
        key: 'onBlur',
        value: function onBlur(event) {
            // this.props.onBlur();
        }
    }, {
        key: 'onFocus',
        value: function onFocus(event) {}
    }, {
        key: 'onContextMenu',
        value: function onContextMenu(event) {
            var x = event.pageX || event.clientX;
            var y = event.pageY || event.clientY;
            // this.onNodeClick();
            // this.props.onContextMenu(x,y);
        }
    }, {
        key: 'onDoubleClick',
        value: function onDoubleClick(event) {
            var x = event.pageX || event.clientX;
            var y = event.pageY || event.clientY;
            this.setState({ expanded: !this.state.expanded });
            this.props.onDoubleClick(x, y);
        }
    }, {
        key: 'onArrowClick',
        value: function onArrowClick() {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.expanded !== nextProps.expanded) {
                this.setState({
                    expanded: nextProps.expanded
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var iconType = 'file';
            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'span',
                    { style: { display: 'flex', alignItems: 'center' } },
                    _react2.default.createElement(_icon2.default, { type: this.state.expanded ? 'caret-down' : 'caret-right',
                        style: { visibility: this.props.isLeaf ? 'hidden' : '', fontSize: 10 },
                        onClick: this.onArrowClick.bind(this) }),
                    _react2.default.createElement(
                        'div',
                        { className: 'item' + (this.props.selected ? ' selected' : '') + (this.props.matched ? ' matched' : ''), tabIndex: '-1',
                            onClick: this.onNodeClick.bind(this),
                            onDoubleClick: this.onDoubleClick.bind(this),
                            onFocus: this.onFocus.bind(this),
                            onBlur: this.onBlur.bind(this),
                            onContextMenu: this.onContextMenu.bind(this) },
                        _react2.default.createElement(_checkbox2.default, { className: 'check-box', style: { display: this.props.editable ? 'inherit' : 'none' } }),
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(_icon2.default, { type: iconType, className: 'icon' + (this.props.isLeaf ? ' leaf' : '') })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            this.props.name
                        )
                    )
                ),
                !this.props.isLeaf ? _react2.default.createElement(
                    'ul',
                    { style: { display: this.state.expanded ? 'inherit' : 'none' } },
                    this.props.children
                ) : ''
            );
        }
    }]);

    return TreeNode;
}(_react2.default.Component);

var Tree = function (_React$Component2) {
    _inherits(Tree, _React$Component2);

    function Tree(props) {
        _classCallCheck(this, Tree);

        var _this2 = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

        _this2.state = {
            selectedKeys: [],
            expandedKeys: [],
            matchedKeys: []
        };
        return _this2;
    }

    _createClass(Tree, [{
        key: 'selected',
        value: function selected(key) {
            return this.state.selectedKeys.some(function (k) {
                return k === key;
            });
        }
    }, {
        key: 'removeKey',
        value: function removeKey(key) {
            var keys = this.state.selectedKeys.filter(function (k) {
                return k !== key;
            });
            this.setState({
                selectedKeys: keys
            }, this.onSelectChange);
        }
    }, {
        key: 'loopKeys',
        value: function loopKeys(data) {
            var _this3 = this;

            var keys = [data.key];
            if (data.children) {
                data.children.forEach(function (d) {
                    return keys = keys.concat(_this3.loopKeys(d));
                });
            }
            return keys;
        }
    }, {
        key: 'addKey',
        value: function addKey(keys) {
            this.setState({
                selectedKeys: [].concat(_toConsumableArray(this.state.selectedKeys), _toConsumableArray(keys))
            }, this.onSelectChange);
        }
    }, {
        key: 'onSelectChange',
        value: function onSelectChange() {
            var onSelectChange = this.props.onSelectChange;

            onSelectChange ? onSelectChange(this.state.selectedKeys) : '';
        }
    }, {
        key: 'onNodeClick',
        value: function onNodeClick(data, ctrl) {
            var _this4 = this;

            var key = data.key;
            ctrl ? this.selected(key) ? this.removeKey(key) : this.addKey(this.loopKeys(data)) : this.setState({
                selectedKeys: this.selected(key) ? [] : [].concat(_toConsumableArray(this.loopKeys(data)))
            }, function () {
                _this4.onSelectChange();
            });
        }
    }, {
        key: 'onContextMenu',
        value: function onContextMenu(data, x, y) {}
    }, {
        key: 'onNodeDoubleClick',
        value: function onNodeDoubleClick(data, x, y) {
            //双击事件，目前仅仅是展开/收起节点
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {}
    }, {
        key: 'onFilter',
        value: function onFilter(value) {

            var matchedKeys = value ? this.filterKeys(this.props.dataSource || [], value) : [];
            var expandedKeys = value ? this.findParentKeys(this.props.dataSource || [], matchedKeys) : [];
            this.setState({
                matchedKeys: matchedKeys,
                expandedKeys: expandedKeys
            });
        }
    }, {
        key: 'findParentKeys',
        value: function findParentKeys(data, keys) {
            var _this5 = this;

            return new Array([]).concat(data).reduce(function (d1, d2) {
                return d1.concat(d2.children ? _this5.findParentKeys(d2.children, keys).concat(d2.children.some(function (d) {
                    return keys.some(function (k) {
                        return k === d.key;
                    });
                }) ? d2.key : []) : []);
            });
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(data, value) {
            var _this6 = this;

            //TODO
            return new Array([]).concat(data).reduce(function (d1, d2) {
                return d1.concat(new RegExp(value).test(d2.name) ? d2.key : [], d2.children ? _this6.filterKeys(d2.children, value) : []);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.home !== nextProps.home) {
                if (!this.state.selectedObjectUid) {
                    this.onNodeSelected(nextProps.home);
                }
            }
        }
    }, {
        key: 'mapDataToNode',
        value: function mapDataToNode(data) {
            var _this7 = this;

            var key = data.key || data.uid;
            return _react2.default.createElement(
                TreeNode,
                { key: key, uid: data.uid, name: data.name, type: data.ctype,
                    onClick: this.onNodeClick.bind(this, _extends({}, data, { key: key })),
                    onContextMenu: this.onContextMenu.bind(this, data),
                    onDoubleClick: this.onNodeDoubleClick.bind(this, data),
                    onBlur: this.onBlur.bind(this),
                    editable: this.props.editable,
                    isLeaf: data.children && data.children.length > 0 ? false : true,
                    expanded: this.state.expandedKeys.some(function (k) {
                        return k === key;
                    }),
                    matched: this.state.matchedKeys.some(function (k) {
                        return k === key;
                    }),
                    selected: this.selected.call(this, key) },
                data.children ? data.children.map(function (item, index) {
                    return _this7.mapDataToNode(item);
                }) : ''
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            var dataSource = this.props.dataSource || {};
            return _react2.default.createElement(
                Root,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'search-box' },
                    _react2.default.createElement(Search, {
                        placeholder: 'input search text',
                        style: { width: 200 },
                        onChange: function onChange(event) {
                            return _this8.onFilter(event.target.value);
                        }
                    })
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'tree' },
                    dataSource instanceof Array ? dataSource.map(function (item, index) {
                        return _this8.mapDataToNode(item, index);
                    }) : this.mapDataToNode(dataSource)
                )
            );
        }
    }]);

    return Tree;
}(_react2.default.Component);

exports.default = Tree;