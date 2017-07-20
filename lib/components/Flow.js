'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = require('antd/lib/button/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _css2 = require('antd/lib/input/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _css3 = require('antd/lib/popover/style/css');

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _css4 = require('antd/lib/icon/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _css5 = require('antd/lib/message/style/css');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display:flex;\n    flex-direction:column;\n    height:100%;\n    position:relative;\n    &>.header{\n        display:flex;\n        flex-direction:row;\n        align-items:center;\n        padding:0 10px;\n        height:42px;\n        flex-shrink:0;\n        font-size:18px;\n        background:#fff;\n        z-index:1000;\n        .icon-btn{\n            padding:5px;\n            &:hover,&.on{\n                background:#eee;\n            }\n        }\n        .handler{\n            position:absolute;\n            *{\n                transition:all .5s;\n            }\n            .handler-btn{\n                position:absolute;\n                left:0;\n                top:0;\n                width:30px;\n                line-height:30px;\n                text-align:center;\n                height:30px;\n                border-radius:50%;\n                text-align:center;\n                background:#fff;\n                &:hover{\n                    background:#eee;\n                }\n                &.active{\n                    width:50px;\n                    height:50px;\n                    line-height:50px;\n                    background:#fff;\n                    box-shadow:0 0 10px -2px gray;\n                    &:hover{\n                        background:#0099ff;\n                    }\n                }\n            }\n        }\n        .title{\n            flex-grow:1;\n            text-align:center;\n        }\n        &>.btn-bar{\n            display:flex;\n        }\n    }\n    &>.content{\n        display:flex;\n        flex-grow:1;\n        flex-direction:column;\n        align-items:center;\n        justify-content:center;\n        overflow:auto;\n        &>.stage{\n            flex-grow:1;\n            display:flex;\n            flex-direction:column;\n            position:relative;\n            overflow:hidden;\n            .flow{\n                flex-grow:1;\n                transition:.5s all;\n                cursor:pointer;\n                background-color:#eee;\n                background-image:linear-gradient(lightgray 1px,transparent 0),linear-gradient(90deg,lightgray 1px, transparent 0);\n                background-size:30px 30px;\n                .graph{\n                    stroke:#000;\n                    stroke-width:.5px;\n                    &:hover{\n                        stroke:#1188ff;\n                        .graph-bg{\n                            fill:#eee;\n                        }\n                        .task-name{\n                            fill:#1188ff;\n                        }\n                    }\n                    .graph-bg{\n                        fill:#fff;\n                        stroke-width:.5px;\n                    }\n                    .task-name{\n                        font-size:15px;\n                        stroke:transparent;\n                        text-anchor: middle;  /* \u6587\u672C\u6C34\u5E73\u5C45\u4E2D */\n                        dominant-baseline: middle; /* \u6587\u672C\u5782\u76F4\u5C45\u4E2D */\n                    }\n                }\n                .flow-line{\n                    stroke:#333;\n                    fill:#333;\n                    &:hover{\n                        stroke:#1188ff;\n                        fill:#1188ff;\n                    }\n                }\n            }\n        }\n    }\n    &>.footer{\n        position:absolute;\n        bottom:0;\n        left:0;\n        width:100%;\n        display:flex;\n        flex-direction:row;\n        justify-content:center;\n        padding:10px 0;\n    }\n'], ['\n    display:flex;\n    flex-direction:column;\n    height:100%;\n    position:relative;\n    &>.header{\n        display:flex;\n        flex-direction:row;\n        align-items:center;\n        padding:0 10px;\n        height:42px;\n        flex-shrink:0;\n        font-size:18px;\n        background:#fff;\n        z-index:1000;\n        .icon-btn{\n            padding:5px;\n            &:hover,&.on{\n                background:#eee;\n            }\n        }\n        .handler{\n            position:absolute;\n            *{\n                transition:all .5s;\n            }\n            .handler-btn{\n                position:absolute;\n                left:0;\n                top:0;\n                width:30px;\n                line-height:30px;\n                text-align:center;\n                height:30px;\n                border-radius:50%;\n                text-align:center;\n                background:#fff;\n                &:hover{\n                    background:#eee;\n                }\n                &.active{\n                    width:50px;\n                    height:50px;\n                    line-height:50px;\n                    background:#fff;\n                    box-shadow:0 0 10px -2px gray;\n                    &:hover{\n                        background:#0099ff;\n                    }\n                }\n            }\n        }\n        .title{\n            flex-grow:1;\n            text-align:center;\n        }\n        &>.btn-bar{\n            display:flex;\n        }\n    }\n    &>.content{\n        display:flex;\n        flex-grow:1;\n        flex-direction:column;\n        align-items:center;\n        justify-content:center;\n        overflow:auto;\n        &>.stage{\n            flex-grow:1;\n            display:flex;\n            flex-direction:column;\n            position:relative;\n            overflow:hidden;\n            .flow{\n                flex-grow:1;\n                transition:.5s all;\n                cursor:pointer;\n                background-color:#eee;\n                background-image:linear-gradient(lightgray 1px,transparent 0),linear-gradient(90deg,lightgray 1px, transparent 0);\n                background-size:30px 30px;\n                .graph{\n                    stroke:#000;\n                    stroke-width:.5px;\n                    &:hover{\n                        stroke:#1188ff;\n                        .graph-bg{\n                            fill:#eee;\n                        }\n                        .task-name{\n                            fill:#1188ff;\n                        }\n                    }\n                    .graph-bg{\n                        fill:#fff;\n                        stroke-width:.5px;\n                    }\n                    .task-name{\n                        font-size:15px;\n                        stroke:transparent;\n                        text-anchor: middle;  /* \u6587\u672C\u6C34\u5E73\u5C45\u4E2D */\n                        dominant-baseline: middle; /* \u6587\u672C\u5782\u76F4\u5C45\u4E2D */\n                    }\n                }\n                .flow-line{\n                    stroke:#333;\n                    fill:#333;\n                    &:hover{\n                        stroke:#1188ff;\n                        fill:#1188ff;\n                    }\n                }\n            }\n        }\n    }\n    &>.footer{\n        position:absolute;\n        bottom:0;\n        left:0;\n        width:100%;\n        display:flex;\n        flex-direction:row;\n        justify-content:center;\n        padding:10px 0;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    .ant-input{\n        background:transparent;\n    }\n'], ['\n    .ant-input{\n        background:transparent;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ActionTag = require('./ActionTag');

var _ActionTag2 = _interopRequireDefault(_ActionTag);

var _ContextMenu = require('./ContextMenu');

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject);

var Process = function (_React$Component) {
    _inherits(Process, _React$Component);

    function Process() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Process);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Process.__proto__ || Object.getPrototypeOf(Process)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            handlerVisible: false,
            graphHeight: 50,
            graphWidth: 100,
            tasks: [],
            selectedPoint: 1,
            selectedTask: {},
            editing: false,
            stageWidth: 0,
            stageHeight: 0,
            flowWidth: 0,
            flowHeight: 0,
            vbx: 0,
            vby: 0,
            vbw: 0,
            vbh: 0
        }, _this.menus = [], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Process, [{
        key: 'mapFlow',
        value: function mapFlow(tasks) {
            var flow = [];
            var ts = tasks.filter(function (t) {
                return !t.parent || t.parent.length <= 0;
            });
            flow.push(ts);
            while (ts.some(function (t) {
                return t.children && t.children.length > 0;
            })) {
                ts = tasks.filter(function (t) {
                    return ts.some(function (t1) {
                        return t1.children.some(function (p) {
                            return p === t.point;
                        });
                    });
                });
                flow = flow.map(function (fs) {
                    return fs.filter(function (t) {
                        return ts.every(function (t1) {
                            return t1.point !== t.point;
                        });
                    });
                });
                flow.push(ts);
            }
            return flow;
        }
    }, {
        key: 'toGraph',
        value: function toGraph(flow) {
            var _this2 = this;

            var graph = [];
            var mc = Math.max.apply(Math, _toConsumableArray(flow.map(function (ts) {
                return ts.length;
            })));
            flow.forEach(function (ts, i) {
                var y0 = (mc - ts.length) * _this2.state.graphHeight * 1.5 / 2 + _this2.state.graphHeight;
                ts.forEach(function (t, j) {
                    graph.push({
                        task: t,
                        depth: i,
                        range: j,
                        w: _this2.state.graphWidth,
                        h: _this2.state.graphHeight,
                        x: i * _this2.state.graphWidth * 1.5 + _this2.state.graphWidth,
                        y: j * _this2.state.graphHeight * 1.5 + y0
                    });
                });
            });
            return graph;
        }
    }, {
        key: 'calcFlowHeight',
        value: function calcFlowHeight(flow) {
            return (Math.max.apply(Math, _toConsumableArray(flow.map(function (ts) {
                return ts.length;
            }))) * 1.5 + 1.5) * this.state.graphHeight;
        }
    }, {
        key: 'calcFlowWidth',
        value: function calcFlowWidth(flow) {
            return (flow.length * 1.5 + 1.5) * this.state.graphWidth;
        }
    }, {
        key: 'toLines',
        value: function toLines(graph) {
            var _this3 = this;

            var lines = [];
            var tmc = Math.max.apply(Math, _toConsumableArray(this.flow.map(function (ts) {
                return ts.length;
            })));
            graph.filter(function (g) {
                return g.task.children && g.task.children.length > 0;
            }).forEach(function (g) {
                return g.task.children.forEach(function (p) {
                    var toG = _this3.findGraph(p);
                    var mc = Math.max.apply(Math, _toConsumableArray(_this3.flow.filter(function (f, i) {
                        return i > g.depth && i < toG.depth;
                    }).map(function (fs) {
                        return fs.length;
                    }).concat(0)));
                    var mh = mc === 0 ? 0 : (tmc + mc) / 2 * _this3.state.graphHeight * 1.5 + _this3.state.graphHeight;
                    toG ? lines.push({
                        from: g,
                        to: toG,
                        x1: g.x + g.w,
                        y1: g.y + g.h / 2,
                        mh: mh,
                        x2: toG.x,
                        y2: toG.y + toG.h / 2
                    }) : '';
                });
            });
            return lines;
        }
    }, {
        key: 'findGraph',
        value: function findGraph(p) {
            return this.graph ? this.graph.find(function (g) {
                return g.task.point === p;
            }) : null;
        }
    }, {
        key: 'createTask',
        value: function createTask() {
            var props = {
                content: TaskCreate,
                onConfirm: this.onTaskCreated.bind(this)
            };
            _Dialog2.default.show(props);
        }
    }, {
        key: 'onTaskCreated',
        value: function onTaskCreated(task) {
            var _this4 = this;

            task.point = this.state.tasks.length + 1;
            var pt = this.state.tasks.find(function (t) {
                return t.point === _this4.state.selectedPoint;
            });
            var tasks = [].concat(_toConsumableArray(this.state.tasks.filter(function (t) {
                return t.point !== _this4.state.selectedPoint;
            })), [task]);
            if (pt) {
                task.parent.push(pt.point);
                tasks.push(_extends({}, pt, { children: [].concat(_toConsumableArray(pt.children), [task.point]) }));
            }

            this.mapData(tasks);
            this.setState({
                editing: true
            });
        }
    }, {
        key: 'onLineTo',
        value: function onLineTo(task) {
            var _this5 = this;

            var pTask = this.state.tasks.find(function (t) {
                return t.point === _this5.state.selectedPoint;
            });
            pTask.children.every(function (tp) {
                return tp !== task.point;
            }) ? this.setState({
                tasks: [].concat(_toConsumableArray(this.state.tasks.filter(function (t) {
                    return t.point !== _this5.state.selectedPoint;
                })), [_extends({}, pTask, {
                    children: [].concat(_toConsumableArray(pTask.children), [task.point])
                })])
            }) : '';
            task.parent.every(function (tp) {
                return tp !== _this5.state.selectedTask.point;
            }) ? task.parent.push(this.state.selectedTask.point) : '';
        }
    }, {
        key: 'onTasksSubmit',
        value: function onTasksSubmit() {
            var onChange = this.props.onChange;

            onChange ? onChange(this.state.tasks) : '';
            this.setState({
                editing: false
            });
        }
    }, {
        key: 'onTasksReset',
        value: function onTasksReset() {
            this.setState({
                tasks: this.props.selectedProcess.tasks || [],
                editing: false
            });
        }
    }, {
        key: 'onRemove',
        value: function onRemove() {
            var _this6 = this;

            _Confirm2.default.show(function () {
                _this6.props.delete ? _this6.props.delete(function () {
                    _message2.default.info('删除成功');
                }, function () {
                    _message2.default.info('删除失败');
                }) : '';
            });
        }
    }, {
        key: 'onScale',
        value: function onScale(e) {
            var x = e.offsetX || e.pageX;
            var y = e.offsetY || e.pageY;
            var scale = e.deltaY > 0 ? 1.2 : 0.8;
            var vbw = this.state.vbw * scale;
            var vbh = this.state.vbh * scale;
            this.setState({
                vbw: vbw,
                vbh: vbh
            });
            e.preventDefault();
            e.stopPropagation();
        }
    }, {
        key: 'onReset',
        value: function onReset() {
            this.setState({
                vbx: 0,
                vby: 0,
                vbw: this.state.flowWidth,
                vbh: this.state.flowHeight
            });
        }
    }, {
        key: 'onContextMenu',
        value: function onContextMenu(graph, event) {
            if (!this.state.editing) {
                return;
            }
            var x = event.pageX || event.clientX;
            var y = event.pageY || event.clientY;
            var menu = this.loadMenu(graph);
            //菜单为空则不显示
            if (menu.notEmpty()) {
                var menuProps = {
                    left: x,
                    top: y,
                    menu: menu
                };
                _ContextMenu2.default.show(menuProps);
            }
            this.setState({
                selectedPoint: graph.task.point,
                selectedTask: graph.task
            });
        }
    }, {
        key: 'loadMenu',
        value: function loadMenu(graph) {
            var _this7 = this;

            var menu = new _ContextMenu.Menu();
            var menus = this.menus;
            menus.new.clear();
            menus.lineTo.clear();
            this.state.tasks.forEach(function (t) {
                menus.lineTo.add(new _ContextMenu.MenuItem(t.name, function () {
                    _this7.onLineTo(t);
                }));
            });
            menu.add(menus.new.add(menus.task)).add(menus.lineTo);
            return menu;
        }
    }, {
        key: 'initMenu',
        value: function initMenu() {
            var _this8 = this;

            this.menus.new = new _ContextMenu.MenuItem('新建');
            this.menus.task = new _ContextMenu.MenuItem('任务', function () {
                _this8.createTask();
            });
            this.menus.lineTo = new _ContextMenu.MenuItem('连线到', function () {});
        }
    }, {
        key: 'mapData',
        value: function mapData(tasks) {
            console.log(tasks);
            this.flow = this.flow || this.mapFlow(tasks);
            var flowHeight = this.calcFlowHeight(this.flow) + this.state.graphHeight * 2;
            var flowWidth = this.calcFlowWidth(this.flow) + this.state.graphWidth * 2;
            this.setState({
                tasks: tasks,
                flowWidth: flowWidth,
                flowHeight: flowHeight,
                vbw: flowWidth,
                vbh: flowHeight
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.mapData(this.props.selectedProcess.tasks || []);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this9 = this;

            this.initMenu();
            if (!this.flowStage) {
                return;
            }
            this.flowStage.onmousewheel = this.onScale.bind(this);
            // const resize=window.onresize;
            // window.onresize=()=>{
            //     resize()
            //     this.setState({
            //         stageWidth:this.flowStage.clientWidth,
            //         stageHeight:this.flowStage.clientHeight
            //     })
            // }
            this.flowStage.onmousedown = function (e) {
                _this9.draging = true;
                _this9.curX = e.screenX || e.pageX;
                _this9.curY = e.screenY || e.pageY;
            };
            this.flowStage.onmouseup = function (e) {
                _this9.draging = false;
            };
            this.flowStage.onmousemove = function (e) {
                if (!_this9.draging) {
                    return;
                }
                var x = e.screenX || e.pageX;
                var y = e.screenY || e.pageY;
                _this9.setState({
                    vbx: _this9.state.vbx + _this9.curX - x,
                    vby: _this9.state.vby + _this9.curY - y
                });
                _this9.curX = x;
                _this9.curY = y;
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.selectedProcess !== this.props.selectedProcess) {
                this.mapData(nextProps.selectedProcess.tasks);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this10 = this;

            var flow = this.flow = this.mapFlow(this.state.tasks);
            var graph = this.graph = this.toGraph(this.flow || []);
            var lines = this.toLines(graph || []);
            return _react2.default.createElement(
                Root,
                null,
                _react2.default.createElement(
                    'header',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'icon-bar' },
                        _react2.default.createElement(
                            _popover2.default,
                            { content: this.state.handlerVisible ? '关闭操作盘' : '显示操作盘', placement: 'bottom' },
                            _react2.default.createElement(
                                'span',
                                { className: "icon-btn" + (this.state.handlerVisible ? ' on' : ''),
                                    onClick: function onClick() {
                                        return _this10.setState({ handlerVisible: !_this10.state.handlerVisible });
                                    } },
                                _react2.default.createElement(_icon2.default, { type: 'tool' })
                            )
                        ),
                        _react2.default.createElement(
                            _popover2.default,
                            { placement: 'bottom',
                                overlayStyle: { fontSize: 18, maxWidth: 300 },
                                content: '\u7528\u9F20\u6807\u6EDA\u8F6E\u7F29\u653E\uFF0C\u62D6\u52A8\u9F20\u6807\u6765\u62D6\u62FD\uFF0C\u53CC\u51FB\u7A7A\u767D\u5904\u8FD8\u539F\uFF0C\u5FEB\u6377\u6309\u94AE\u7A0D\u540E\u6DFB\u52A0\u3002\u3002\u3002' },
                            _react2.default.createElement(
                                'span',
                                { className: 'icon-btn' },
                                _react2.default.createElement(_icon2.default, { type: 'question' })
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'handler' },
                            _react2.default.createElement(
                                _popover2.default,
                                { placement: 'bottom', content: '\u7F29\u5C0F' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'handler-btn' + (this.state.handlerVisible ? ' active' : ''),
                                        onClick: function onClick() {
                                            return _this10.setState({
                                                vbw: _this10.state.vbw * 1.2,
                                                vbh: _this10.state.vbh * 1.2
                                            });
                                        },
                                        style: this.state.handlerVisible ? {
                                            left: -50, top: 120
                                        } : {
                                            left: 0
                                        } },
                                    _react2.default.createElement(_icon2.default, { type: 'minus' })
                                )
                            ),
                            _react2.default.createElement(
                                _popover2.default,
                                { placement: 'bottom', content: '\u4E0A\u79FB' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'handler-btn' + (this.state.handlerVisible ? ' active' : ''),
                                        onClick: function onClick() {
                                            return _this10.setState({
                                                vby: _this10.state.vby + 20
                                            });
                                        },
                                        style: this.state.handlerVisible ? {
                                            left: 70, top: 60
                                        } : {
                                            left: 40
                                        } },
                                    _react2.default.createElement(_icon2.default, { type: 'up' })
                                )
                            ),
                            _react2.default.createElement(
                                _popover2.default,
                                { placement: 'bottom', content: '\u5DE6\u79FB' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'handler-btn' + (this.state.handlerVisible ? ' active' : ''),
                                        onClick: function onClick() {
                                            return _this10.setState({
                                                vbx: _this10.state.vbx + 20
                                            });
                                        },
                                        style: this.state.handlerVisible ? {
                                            left: 10, top: 120
                                        } : {
                                            left: 80
                                        } },
                                    _react2.default.createElement(_icon2.default, { type: 'left' })
                                )
                            ),
                            _react2.default.createElement(
                                _popover2.default,
                                { placement: 'bottom', content: '\u91CD\u7F6E' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'handler-btn' + (this.state.handlerVisible ? ' active' : ''),
                                        onClick: this.onReset.bind(this),
                                        style: this.state.handlerVisible ? {
                                            left: 70, top: 120
                                        } : {
                                            left: 120
                                        } },
                                    _react2.default.createElement(_icon2.default, { type: 'reload' })
                                )
                            ),
                            _react2.default.createElement(
                                _popover2.default,
                                { placement: 'bottom', content: '\u53F3\u79FB' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'handler-btn' + (this.state.handlerVisible ? ' active' : ''),
                                        onClick: function onClick() {
                                            return _this10.setState({
                                                vbx: _this10.state.vbx - 20
                                            });
                                        },
                                        style: this.state.handlerVisible ? {
                                            left: 130, top: 120
                                        } : {
                                            left: 160
                                        } },
                                    _react2.default.createElement(_icon2.default, { type: 'right' })
                                )
                            ),
                            _react2.default.createElement(
                                _popover2.default,
                                { placement: 'bottom', content: '\u4E0B\u79FB' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'handler-btn' + (this.state.handlerVisible ? ' active' : ''),
                                        onClick: function onClick() {
                                            return _this10.setState({
                                                vby: _this10.state.vby - 20
                                            });
                                        },
                                        style: this.state.handlerVisible ? {
                                            left: 70, top: 190
                                        } : {
                                            left: 200
                                        } },
                                    _react2.default.createElement(_icon2.default, { type: 'down' })
                                )
                            ),
                            _react2.default.createElement(
                                _popover2.default,
                                { placement: 'bottom', content: '\u653E\u5927' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'handler-btn' + (this.state.handlerVisible ? ' active' : ''),
                                        onClick: function onClick() {
                                            return _this10.setState({
                                                vbw: _this10.state.vbw * .8,
                                                vbh: _this10.state.vbh * .8
                                            });
                                        },
                                        style: this.state.handlerVisible ? {
                                            left: 190, top: 120
                                        } : {
                                            left: 240
                                        } },
                                    _react2.default.createElement(_icon2.default, { type: 'plus' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'title' },
                        '\u6A21\u677F\u8BE6\u60C5'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-bar' },
                        _react2.default.createElement(_ActionTag2.default, { iconField: _react2.default.createElement(_icon2.default, { type: 'plus' }), textField: '\u65B0\u5EFA', onClick: this.props.onFlowCreate }),
                        _react2.default.createElement(_ActionTag2.default, { iconField: _react2.default.createElement(_icon2.default, { type: 'edit' }), textField: '\u7F16\u8F91', onClick: this.setState.bind(this, { editing: true }, null) }),
                        _react2.default.createElement(_ActionTag2.default, { iconField: _react2.default.createElement(_icon2.default, { type: 'delete' }), textField: '\u5220\u9664', type: 'danger',
                            onClick: this.onRemove.bind(this) })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    graph.length <= 0 ? _react2.default.createElement(
                        'span',
                        { style: { fontSize: 30, padding: 20, cursor: 'pointer', position: 'absolute', textAlign: 'center', zIndex: 100 }, onClick: this.createTask.bind(this), className: 'tip' },
                        '\u8FD8\u6CA1\u6709task\uFF0C\u70B9\u51FB\u6B64\u5904\u521B\u5EFA'
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'stage', style: { minHeight: this.state.flowHeight, width: '100%' } },
                        _react2.default.createElement(
                            'svg',
                            { className: 'flow', ref: function ref(flowStage) {
                                    return _this10.flowStage = flowStage;
                                },
                                onDoubleClick: this.onReset.bind(this),
                                viewBox: this.state.vbx + ',' + this.state.vby + ',' + this.state.vbw + ',' + this.state.vbh },
                            lines.map(function (l, i) {
                                return _react2.default.createElement(
                                    'g',
                                    { className: 'flow-line', key: i },
                                    l.mh !== 0 ? _react2.default.createElement('path', { className: 'line',
                                        d: 'M' + l.x1 + ' ' + l.y1 + ' \n                                                    Q' + (l.x1 + _this10.state.graphWidth * .25) + ' ' + l.y1 + ' ' + (l.x1 + _this10.state.graphWidth * .25) + ' ' + (l.y1 + l.mh) * .5 + ' \n                                                    T' + (l.x1 + _this10.state.graphWidth * .5) + ' ' + l.mh + '\n                                                    L' + (l.x2 - _this10.state.graphWidth * .5) + ' ' + l.mh + '\n                                                    Q' + (l.x2 - _this10.state.graphWidth * .25) + ' ' + l.mh + ' ' + (l.x2 - _this10.state.graphWidth * .25) + ' ' + (l.mh + l.y2) * .5 + '\n                                                    T' + l.x2 + ' ' + l.y2 + '\n                                                ',
                                        fill: 'transparent' }) : _react2.default.createElement('path', { className: 'line', d: 'M' + l.x1 + ' ' + l.y1 + ' Q' + (l.x1 + l.x2) * .5 + ' ' + l.y1 + ' ' + (l.x1 + l.x2) * .5 + ' ' + (l.y1 + l.y2) * .5 + ' T' + l.x2 + ' ' + l.y2, fill: 'transparent' }),
                                    _react2.default.createElement('polygon', { className: 'arrow', points: [l.x2 - 7, l.y2 - 4, l.x2 - 7, l.y2 + 4, l.x2, l.y2].join(' ') })
                                );
                            }),
                            graph.map(function (g, i) {
                                return _react2.default.createElement(
                                    'g',
                                    { key: i, className: 'graph',
                                        onContextMenu: _this10.onContextMenu.bind(_this10, g),
                                        style: { cursor: 'pointer' } },
                                    _react2.default.createElement('rect', { className: 'graph-bg', x: g.x, y: g.y, width: g.w, height: g.h }),
                                    _react2.default.createElement(
                                        'text',
                                        { className: 'task-name', x: g.x + g.w / 2, y: g.y + g.h / 2 },
                                        g.task.name
                                    )
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'footer',
                    { className: 'footer', style: { display: this.state.editing ? 'flex' : 'none' } },
                    _react2.default.createElement(_ActionTag2.default, { type: 'danger', size: 'large', iconField: _react2.default.createElement(_icon2.default, { type: 'close-circle-o' }), textField: '\u53D6\u6D88',
                        onClick: this.onTasksReset.bind(this) }),
                    _react2.default.createElement(_ActionTag2.default, { type: 'success', size: 'large', iconField: _react2.default.createElement(_icon2.default, { type: 'check-circle-o' }), textField: '\u63D0\u4EA4',
                        onClick: this.onTasksSubmit.bind(this) })
                )
            );
        }
    }]);

    return Process;
}(_react2.default.Component);

exports.default = Process;


var DialogRoot = _styledComponents2.default.div(_templateObject2);

var TaskCreate = function (_React$Component2) {
    _inherits(TaskCreate, _React$Component2);

    function TaskCreate() {
        var _ref2;

        var _temp2, _this11, _ret2;

        _classCallCheck(this, TaskCreate);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this11 = _possibleConstructorReturn(this, (_ref2 = TaskCreate.__proto__ || Object.getPrototypeOf(TaskCreate)).call.apply(_ref2, [this].concat(args))), _this11), _this11.state = {
            name: '',
            desc: '',
            parent: [],
            children: []
        }, _temp2), _possibleConstructorReturn(_this11, _ret2);
    }

    _createClass(TaskCreate, [{
        key: 'onCancel',
        value: function onCancel() {
            var onClose = this.props.onClose;
            onClose ? onClose() : '';
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit() {
            var onConfirm = this.props.onConfirm;

            onConfirm ? onConfirm(this.state) : '';
            this.onCancel();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this12 = this;

            return _react2.default.createElement(
                DialogRoot,
                { style: { display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between' } },
                _react2.default.createElement(
                    'header',
                    { className: 'header', style: { textAlign: 'center', fontSize: 18 } },
                    '\u65B0\u5EFA\u4EFB\u52A1'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content', style: { display: 'flex', flexDirection: 'column' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'items', style: { display: 'flex', width: '80%', flexDirection: 'row', alignItems: 'center', padding: 10 } },
                        _react2.default.createElement(
                            'span',
                            { className: 'label', style: { flexShrink: 0 } },
                            '\u540D\u79F0'
                        ),
                        _react2.default.createElement(_input2.default, { className: 'input', value: this.state.name,
                            onChange: function onChange(e) {
                                return _this12.setState({ name: e.target.value });
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'items', style: { width: '80%', display: 'flex', flexDirection: 'row' } },
                        _react2.default.createElement(
                            'span',
                            { className: 'label', style: { flexShrink: 0 } },
                            '\u63CF\u8FF0'
                        ),
                        _react2.default.createElement(_input2.default, { className: 'input', type: 'textarea', rows: 4, value: this.state.desc,
                            onChange: function onChange(e) {
                                return _this12.setState({ desc: e.target.value });
                            } })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'footer', style: { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } },
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'danger', onClick: this.onCancel.bind(this), style: { margin: 10 } },
                        '\u53D6\u6D88'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'primary', onClick: this.onSubmit.bind(this), style: { margin: 10 } },
                        '\u521B\u5EFA'
                    )
                )
            );
        }
    }]);

    return TaskCreate;
}(_react2.default.Component);