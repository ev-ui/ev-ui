'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = require('antd/lib/button/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    border:1px solid #aaa;\n    max-width:500px;\n    &>.content{\n        display:flex;\n        flex-direction:row!important;\n        align-items:stretch!important;\n        .tree-wrapper{\n            width:200px;\n            height:300px;\n            background:#f0f0f0;\n            flex-grow:1;\n        }\n        .action-bar{\n            display:flex;\n            flex-direction:column;\n            justify-content:space-around;\n            .btn-group .ant-btn{\n                display:block;\n            }\n        }\n    }\n'], ['\n    border:1px solid #aaa;\n    max-width:500px;\n    &>.content{\n        display:flex;\n        flex-direction:row!important;\n        align-items:stretch!important;\n        .tree-wrapper{\n            width:200px;\n            height:300px;\n            background:#f0f0f0;\n            flex-grow:1;\n        }\n        .action-bar{\n            display:flex;\n            flex-direction:column;\n            justify-content:space-around;\n            .btn-group .ant-btn{\n                display:block;\n            }\n        }\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Tree = require('__public/component/Tree');

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject);
function mapDataSource(data) {
    return data.map(function (d) {
        return _extends({}, d, {
            key: d.uid,
            name: d.name || d.objectName,
            children: d.children ? mapDataSource(d.children) : null
        });
    });
}

var Shuttle = function (_React$Component) {
    _inherits(Shuttle, _React$Component);

    function Shuttle(props) {
        _classCallCheck(this, Shuttle);

        var _this = _possibleConstructorReturn(this, (Shuttle.__proto__ || Object.getPrototypeOf(Shuttle)).call(this, props));

        _this.state = {
            selectedSourceKeys: [],
            selectedTargetKeys: [],
            targetKeys: []
        };

        _this.data = mapDataSource(props.dataSource || []);
        return _this;
    }

    _createClass(Shuttle, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.dataSource !== nextProps.dataSource) {
                this.data = mapDataSource(nextProps.dataSource || []);
            }
            if (this.state.targetKeys.length <= 0 && nextProps.targetKeys) {
                this.setState({
                    targetKeys: nextProps.targetKeys
                });
            }
        }
    }, {
        key: 'inTarget',
        value: function inTarget(key) {
            return this.state.targetKeys.some(function (k) {
                return k === key;
            });
        }
    }, {
        key: 'shouldInTarget',
        value: function shouldInTarget(data) {
            var _this2 = this;

            return this.inTarget(data.key) || data.children && data.children.some(function (d) {
                return _this2.shouldInTarget(d);
            });
        }
    }, {
        key: 'shouldNotInTarget',
        value: function shouldNotInTarget(data) {
            var _this3 = this;

            return this.state.selectedTargetKeys.some(function (k) {
                return k === data.key;
            }) || data.children && data.children.some(function (d) {
                return _this3.shouldNotInTarget(d);
            });
        }
    }, {
        key: 'filterSourceData',
        value: function filterSourceData(data) {
            var _this4 = this;

            return data.filter(function (d) {
                return !_this4.inTarget(d.key);
            }).map(function (d) {
                return _extends({}, d, {
                    children: d.children ? _this4.filterSourceData(d.children) : null
                });
            });
        }
    }, {
        key: 'filterTargetData',
        value: function filterTargetData(data) {
            var _this5 = this;

            return data.filter(function (d) {
                return _this5.shouldInTarget(d);
            }).map(function (d) {
                return _extends({}, d, {
                    children: d.children ? _this5.filterTargetData(d.children) : null
                });
            });
        }
    }, {
        key: 'onSourceSelectChange',
        value: function onSourceSelectChange(keys) {
            this.setState({
                selectedSourceKeys: keys
            });
        }
    }, {
        key: 'onTargetSelectChange',
        value: function onTargetSelectChange(keys) {
            this.setState({
                selectedTargetKeys: keys
            });
        }
    }, {
        key: 'mapDataToKeys',
        value: function mapDataToKeys(data) {
            var _this6 = this;

            return new Array([]).concat(data).reduce(function (d1, d2) {
                return d1.concat(d2.key, _this6.mapDataToKeys(d2.children || []));
            });
        }
    }, {
        key: 'findPanrentKeys',
        value: function findPanrentKeys(data, key) {
            var _this7 = this;

            return new Array([]).concat(data).reduce(function (d1, d2) {
                return d1.concat(d1.children ? d1.children.some(function (d) {
                    return d.key === key;
                }) ? d1.key : _this7.findPanrentKeys(d1.children, key) : []);
            });
        }
    }, {
        key: 'filterNotInTargetKeys',
        value: function filterNotInTargetKeys(data) {
            var _this8 = this;

            return new Array(this.state.selectedTargetKeys).concat(data).reduce(function (d1, d2) {
                return d1.concat(d2.children ? d2.children.some(function (d) {
                    return _this8.state.selectedTargetKeys.some(function (k) {
                        return k === d.key;
                    });
                }) ? d2.key : _this8.findPanrentKeys(d2.children) : []);
            });
        }

        /**
         * 
         * @param {boolean} all 是否全选
         */

    }, {
        key: 'onSelect',
        value: function onSelect(all) {
            var _this9 = this;

            var data = this.data;
            var onChange = this.props.onChange;

            var tks = all === true ? this.mapDataToKeys(data) : this.state.targetKeys.concat(this.state.selectedSourceKeys.filter(function (k) {
                return !_this9.inTarget(k);
            }));
            this.setState({
                targetKeys: tks
            }, function () {
                return onChange ? onChange(_this9.filterTargetData(data)) : '';
            });
        }

        /**
         * 
         * @param {boolean} all 是否取消全部选择
         */

    }, {
        key: 'onUnSelect',
        value: function onUnSelect(all) {
            var _this10 = this;

            var data = this.data;
            var onChange = this.props.onChange;

            this.setState({
                targetKeys: all === true ? [] : this.state.targetKeys.filter(function (k) {
                    return !_this10.filterNotInTargetKeys(data).some(function (sk) {
                        return sk === k;
                    });
                })
            }, function () {
                return onChange ? onChange(_this10.filterTargetData(data)) : '';
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var data = this.data;
            var sourceData = this.filterSourceData(data);
            var targetData = this.filterTargetData(data);
            return _react2.default.createElement(
                Root,
                this.props,
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'tree-wrapper source' },
                        _react2.default.createElement(_Tree2.default, { dataSource: sourceData,
                            onSelectChange: this.onSourceSelectChange.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'action-bar' },
                        _react2.default.createElement(
                            'span',
                            { className: 'btn-group' },
                            _react2.default.createElement(_button2.default, { icon: 'double-right', type: 'primary', ghost: true, size: 'small',
                                onClick: this.onSelect.bind(this, true) }),
                            _react2.default.createElement(_button2.default, { icon: 'right', disabled: this.state.selectedSourceKeys.length <= 0, size: 'small',
                                onClick: this.onSelect.bind(this) })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'btn-group' },
                            _react2.default.createElement(_button2.default, { icon: 'left', disabled: this.state.selectedTargetKeys.length <= 0, size: 'small',
                                onClick: this.onUnSelect.bind(this) }),
                            _react2.default.createElement(_button2.default, { icon: 'double-left', type: 'primary', ghost: true, size: 'small',
                                onClick: this.onUnSelect.bind(this, true) })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'tree-wrapper target' },
                        _react2.default.createElement(_Tree2.default, { dataSource: targetData,
                            onSelectChange: this.onTargetSelectChange.bind(this) })
                    )
                )
            );
        }
    }]);

    return Shuttle;
}(_react2.default.Component);

exports.default = Shuttle;