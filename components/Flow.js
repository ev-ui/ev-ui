import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {Icon,Popover,message,Input,Button} from 'antd'
import ActionTag from './ActionTag'
import ContextMenu,{Menu,MenuItem} from './ContextMenu'
import Dialog from './Dialog'
import Confirm from './Confirm'
const Root=styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    position:relative;
    &>.header{
        display:flex;
        flex-direction:row;
        align-items:center;
        padding:0 10px;
        height:42px;
        flex-shrink:0;
        font-size:18px;
        background:#fff;
        z-index:1000;
        .icon-btn{
            padding:5px;
            &:hover,&.on{
                background:#eee;
            }
        }
        .handler{
            position:absolute;
            *{
                transition:all .5s;
            }
            .handler-btn{
                position:absolute;
                left:0;
                top:0;
                width:30px;
                line-height:30px;
                text-align:center;
                height:30px;
                border-radius:50%;
                text-align:center;
                background:#fff;
                &:hover{
                    background:#eee;
                }
                &.active{
                    width:50px;
                    height:50px;
                    line-height:50px;
                    background:#fff;
                    box-shadow:0 0 10px -2px gray;
                    &:hover{
                        background:#0099ff;
                    }
                }
            }
        }
        .title{
            flex-grow:1;
            text-align:center;
        }
        &>.btn-bar{
            display:flex;
        }
    }
    &>.content{
        display:flex;
        flex-grow:1;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        overflow:auto;
        &>.stage{
            flex-grow:1;
            display:flex;
            flex-direction:column;
            position:relative;
            overflow:hidden;
            .flow{
                flex-grow:1;
                transition:.5s all;
                cursor:pointer;
                background-color:#eee;
                background-image:linear-gradient(lightgray 1px,transparent 0),linear-gradient(90deg,lightgray 1px, transparent 0);
                background-size:30px 30px;
                .graph{
                    stroke:#000;
                    stroke-width:.5px;
                    &:hover{
                        stroke:#1188ff;
                        .graph-bg{
                            fill:#eee;
                        }
                        .task-name{
                            fill:#1188ff;
                        }
                    }
                    .graph-bg{
                        fill:#fff;
                        stroke-width:.5px;
                    }
                    .task-name{
                        font-size:15px;
                        stroke:transparent;
                        text-anchor: middle;  /* 文本水平居中 */
                        dominant-baseline: middle; /* 文本垂直居中 */
                    }
                }
                .flow-line{
                    stroke:#333;
                    fill:#333;
                    &:hover{
                        stroke:#1188ff;
                        fill:#1188ff;
                    }
                }
            }
        }
    }
    &>.footer{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        padding:10px 0;
    }
`;

export default class Process extends React.Component{

    state=({
        handlerVisible:false,
        graphHeight:50,
        graphWidth:100,
        tasks:[],
        selectedPoint:1,
        selectedTask:{},
        editing:false,
        stageWidth:0,
        stageHeight:0,
        flowWidth:0,
        flowHeight:0,
        vbx:0,
        vby:0,
        vbw:0,
        vbh:0
    })
    menus=[]

    mapFlow(tasks){
        let flow=[]
        let ts=tasks.filter(t=>!t.parent || t.parent.length<=0)
        flow.push(ts)
        while(ts.some(t=>t.children && t.children.length>0)){
            ts=tasks.filter(t=>ts.some(t1=>t1.children.some(p=>p===t.point)))
            flow=flow.map(fs=>fs.filter(t=>ts.every(t1=>t1.point!==t.point)))
            flow.push(ts)
        }
        return flow;
    }
    toGraph(flow){
        let graph=[];
        let mc=Math.max(...flow.map(ts=>ts.length))
        flow.forEach((ts,i)=>{
            const y0=(mc-ts.length)*this.state.graphHeight*1.5/2+this.state.graphHeight
            ts.forEach((t,j)=>{
                graph.push({
                    task:t,
                    depth:i,
                    range:j,
                    w:this.state.graphWidth,
                    h:this.state.graphHeight,
                    x:i*this.state.graphWidth*1.5+this.state.graphWidth,
                    y:j*this.state.graphHeight*1.5+y0
                })
            })
        })
        return graph;
    }
    calcFlowHeight(flow){
        return (Math.max(...flow.map(ts=>ts.length))*1.5+1.5)*this.state.graphHeight
    }
    calcFlowWidth(flow){
        return (flow.length*1.5+1.5)*this.state.graphWidth
    }
    toLines(graph){
        let lines=[]
        let tmc=Math.max(...this.flow.map(ts=>ts.length))
        graph.filter(g=>g.task.children && g.task.children.length>0)
            .forEach(g=>g.task.children.forEach(p=>{
                const toG=this.findGraph(p);
                const mc=Math.max(...this.flow.filter((f,i)=>i>g.depth && i<toG.depth).map(fs=>fs.length).concat(0))
                const  mh=mc===0 ?0 :(tmc+mc)/2*this.state.graphHeight*1.5+this.state.graphHeight
                toG?lines.push({
                    from:g,
                    to:toG,
                    x1:g.x+g.w,
                    y1:g.y+g.h/2,
                    mh,
                    x2:toG.x,
                    y2:toG.y+toG.h/2
                }):''
            }))
        return lines
    }
    findGraph(p){
        return this.graph?this.graph.find(g=>g.task.point===p):null
    }


    createTask(){
        let props={
            content:TaskCreate,
            onConfirm:this.onTaskCreated.bind(this)
        }
        Dialog.show(props)
    }
    onTaskCreated(task){
        task.point=this.state.tasks.length+1
        const pt=this.state.tasks.find(t=>t.point===this.state.selectedPoint)
        if(pt){
            task.parent.push(pt.point)
        }

        this.mapData([...this.state.tasks.filter(t=>t.point!==this.state.selectedPoint),{...pt,children:[...pt.children,task.point]},task])
        this.setState({
            editing:true
        })
    }
    onLineTo(task){
        let pTask=this.state.tasks.find(t=>t.point===this.state.selectedPoint)
        pTask.children.every(tp=>tp!==task.point)
            ?this.setState({
                tasks:[
                    ...this.state.tasks.filter(t=>t.point!==this.state.selectedPoint),
                    {
                        ...pTask,
                        children:[
                            ...pTask.children,
                            task.point
                        ]
                    }
                ]
            })
            :''
        task.parent.every(tp=>tp!==this.state.selectedTask.point)
            ?task.parent.push(this.state.selectedTask.point)
            :''
    }
    onTasksSubmit(){
        const {onChange}=this.props
        onChange ?onChange(this.state.tasks) :''
        this.setState({
            editing:false
        })
    }
    onTasksReset(){
        this.setState({
            tasks:this.props.selectedProcess.tasks || [],
            editing:false
        })
    }
    onRemove(){
        Confirm.show(()=>{
            this.props.delete ?this.props.delete(
                ()=>{
                    message.info('删除成功')
                },()=>{
                    message.info('删除失败')
                }
            ) :''
        })
    }
    onScale(e){
        const x=e.offsetX || e.pageX
        const y=e.offsetY || e.pageY
        const scale=e.deltaY>0 ?1.2 :0.8
        const vbw=this.state.vbw*scale
        const vbh=this.state.vbh*scale
        this.setState({
            vbw,
            vbh
        })
        e.preventDefault()
        e.stopPropagation()
    }
    onReset(){
        this.setState({
            vbx:0,
            vby:0,
            vbw:this.state.flowWidth,
            vbh:this.state.flowHeight
        })
    }
    onContextMenu(graph,event){
        if(!this.state.editing){
            return
        }
        var x=event.pageX || event.clientX;
        var y=event.pageY || event.clientY;
        let menu=this.loadMenu(graph);
        //菜单为空则不显示
        if(menu.notEmpty()){
            let menuProps={
                left:x,
                top:y,
                menu:menu
            }
            ContextMenu.show(menuProps);
        }
        this.setState({
            selectedPoint:graph.task.point,
            selectedTask:graph.task
        })
    }
    loadMenu(graph){
        let menu=new Menu()
        let menus=this.menus
        menus.new.clear()
        menus.lineTo.clear()
        this.state.tasks.forEach(t=>{
            menus.lineTo.add(
                new MenuItem(t.name,()=>{
                    this.onLineTo(t)
                })
            )
        })
        menu.add(
            menus.new
                .add(menus.task)
        )
        .add(menus.lineTo)
        return menu
    }

    initMenu(){
        this.menus.new=new MenuItem('新建')
        this.menus.task=new MenuItem('任务',()=>{
            this.createTask()
        })
        this.menus.lineTo=new MenuItem('连线到',()=>{

        })
    }
    mapData(tasks){
        console.log(tasks)
        this.flow=this.flow ||this.mapFlow(tasks)
        const flowHeight=this.calcFlowHeight(this.flow)+this.state.graphHeight*2
        const flowWidth=this.calcFlowWidth(this.flow)+this.state.graphWidth*2
        this.setState({
            tasks,
            flowWidth,
            flowHeight,
            vbw:flowWidth,
            vbh:flowHeight
        })
    }
    componentWillMount(){
        this.mapData(this.props.selectedProcess.tasks || [])
    }
    componentDidMount(){
        this.initMenu()
        if(!this.flowStage){
            return
        }
        this.flowStage.onmousewheel=this.onScale.bind(this)
        // const resize=window.onresize;
        // window.onresize=()=>{
        //     resize()
        //     this.setState({
        //         stageWidth:this.flowStage.clientWidth,
        //         stageHeight:this.flowStage.clientHeight
        //     })
        // }
        this.flowStage.onmousedown=e=>{
            this.draging=true
            this.curX=e.screenX || e.pageX
            this.curY=e.screenY || e.pageY
        }
        this.flowStage.onmouseup=e=>{
            this.draging=false
        }
        this.flowStage.onmousemove=e=>{
            if(!this.draging){
                return                
            }
            const x=e.screenX || e.pageX
            const y=e.screenY || e.pageY
            this.setState({
                vbx:this.state.vbx+this.curX-x,
                vby:this.state.vby+this.curY-y
            })
            this.curX=x
            this.curY=y
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedProcess !== this.props.selectedProcess){
            this.mapData(nextProps.selectedProcess.tasks)
        }
    }
    render(){
        const flow=this.flow=this.mapFlow(this.state.tasks)
        const graph=this.graph=this.toGraph(this.flow || [])
        const lines=this.toLines(graph || [])
        return(
            <Root>
                <header className='header'>
                    <div className="icon-bar">
                        <Popover content={this.state.handlerVisible ?'关闭操作盘':'显示操作盘'} placement='bottom'>
                            <span className={"icon-btn"+(this.state.handlerVisible?' on':'')}
                                onClick={()=>this.setState({handlerVisible:!this.state.handlerVisible})}>
                                <Icon type="tool" />
                            </span>
                        </Popover>
                        <Popover placement='bottom' 
                            overlayStyle={{fontSize:18,maxWidth:300}}
                            content='用鼠标滚轮缩放，拖动鼠标来拖拽，双击空白处还原，快捷按钮稍后添加。。。'>
                            <span className="icon-btn"><Icon type="question" /></span>
                        </Popover>

                        <span className="handler">
                            <Popover placement='bottom' content='缩小'>
                                <span className={'handler-btn'+(this.state.handlerVisible ?' active' :'')} 
                                    onClick={()=>this.setState({
                                        vbw:this.state.vbw*1.2,
                                        vbh:this.state.vbh*1.2
                                    })}
                                    style={this.state.handlerVisible?{
                                    left:-50,top:120
                                    }:{
                                        left:0
                                    }}>
                                    <Icon type="minus" />
                                </span>
                            </Popover>

                            <Popover placement='bottom' content='上移'>
                                <span className={'handler-btn'+(this.state.handlerVisible ?' active' :'')} 
                                    onClick={()=>this.setState({
                                        vby:this.state.vby+20,
                                    })}
                                    style={this.state.handlerVisible?{
                                    left:70,top:60
                                    }:{
                                        left:40
                                    }}>
                                    <Icon type="up" />
                                </span>
                            </Popover>

                            <Popover placement='bottom' content='左移'>
                                <span className={'handler-btn'+(this.state.handlerVisible ?' active' :'')} 
                                    onClick={()=>this.setState({
                                        vbx:this.state.vbx+20,
                                    })}
                                    style={this.state.handlerVisible?{
                                    left:10,top:120
                                    }:{
                                        left:80
                                    }}>
                                    <Icon type="left" />
                                </span>
                            </Popover>

                            <Popover placement='bottom' content='重置'>
                                <span className={'handler-btn'+(this.state.handlerVisible ?' active' :'')} 
                                    onClick={this.onReset.bind(this)}
                                    style={this.state.handlerVisible?{
                                    left:70,top:120
                                    }:{
                                        left:120
                                    }}>
                                    <Icon type="reload" />
                                </span>
                            </Popover>

                            <Popover placement='bottom' content='右移'>
                                <span className={'handler-btn'+(this.state.handlerVisible ?' active' :'')} 
                                    onClick={()=>this.setState({
                                        vbx:this.state.vbx-20,
                                    })}
                                    style={this.state.handlerVisible?{
                                    left:130,top:120
                                    }:{
                                    left:160 
                                    }}>
                                    <Icon type="right" />
                                </span>
                            </Popover>

                            <Popover placement='bottom' content='下移'>
                                <span className={'handler-btn'+(this.state.handlerVisible ?' active' :'')} 
                                    onClick={()=>this.setState({
                                        vby:this.state.vby-20,
                                    })}
                                    style={this.state.handlerVisible?{
                                    left:70,top:190
                                    }:{
                                        left:200
                                    }}>
                                    <Icon type="down" />
                                </span>
                            </Popover>

                            <Popover placement='bottom' content='放大'>
                                <span className={'handler-btn'+(this.state.handlerVisible ?' active' :'')} 
                                    onClick={()=>this.setState({
                                        vbw:this.state.vbw*.8,
                                        vbh:this.state.vbh*.8
                                    })}
                                    style={this.state.handlerVisible?{
                                    left:190,top:120
                                    }:{
                                        left:240
                                    }}>
                                    <Icon type="plus" />
                                </span>
                            </Popover>
                        </span>
                    </div>
                    <span className="title">模板详情</span>
                    <div className="btn-bar">
                        <ActionTag iconField={<Icon type="plus" />} textField='新建' onClick={this.props.createProcess}/>
                        <ActionTag iconField={<Icon type="edit" />} textField='编辑' onClick={this.setState.bind(this,{editing:true},null)}/>
                        <ActionTag iconField={<Icon type="delete" />} textField='删除' type='danger'
                            onClick={this.onRemove.bind(this)}/>
                    </div>
                </header>
                <div className="content">
                    {
                        graph.length<=0?<span style={{fontSize:30,padding:20,cursor:'pointer',position:'absolute',textAlign:'center',zIndex:100}} onClick={this.createTask.bind(this)} className="tip">还没有task，点击此处创建</span>:''
                    }
                    <div className="stage" style={{minHeight:this.state.flowHeight,width:'100%'}}>
                        <svg className='flow' ref={flowStage=>this.flowStage=flowStage} 
                            onDoubleClick={this.onReset.bind(this)}
                            viewBox={`${this.state.vbx},${this.state.vby},${this.state.vbw},${this.state.vbh}`}>
                            {/* 先画线条，再画流程图，不然部分图会被线条挡住，无法捕捉鼠标事件。此处设置zIndex无效  */}
                            {
                                lines.map((l,i)=>(
                                    <g className='flow-line' key={i}>
                                        {   
                                            l.mh!==0?
                                            <path className='line' 
                                                d={`M${l.x1} ${l.y1} 
                                                    Q${l.x1+this.state.graphWidth*.25} ${l.y1} ${l.x1+this.state.graphWidth*.25} ${(l.y1+l.mh)*.5} 
                                                    T${l.x1+this.state.graphWidth*.5} ${l.mh}
                                                    L${l.x2-this.state.graphWidth*.5} ${l.mh}
                                                    Q${l.x2-this.state.graphWidth*.25} ${l.mh} ${l.x2-this.state.graphWidth*.25} ${(l.mh+l.y2)*.5}
                                                    T${l.x2} ${l.y2}
                                                `} 
                                                fill='transparent'> 
                                            </path>
                                            :
                                            <path className='line' d={`M${l.x1} ${l.y1} Q${(l.x1+l.x2)*.5} ${l.y1} ${(l.x1+l.x2)*.5} ${(l.y1+l.y2)*.5} T${l.x2} ${l.y2}`} fill='transparent'>
                                            </path>  
                                        }
                                        <polygon className='arrow' points={[l.x2-7,l.y2-4,l.x2-7,l.y2+4,l.x2,l.y2].join(' ')}/>
                                    </g>
                                ))
                            }
                            {
                                graph.map((g,i)=>(
                                    <g key={i} className='graph'
                                        onContextMenu={this.onContextMenu.bind(this,g)}
                                        style={{cursor:'pointer'}}>
                                        <rect className='graph-bg' x={g.x} y={g.y} width={g.w} height={g.h} />
                                        <text className='task-name' x={g.x+g.w/2} y={g.y+g.h/2}>{g.task.name}</text>
                                    </g>
                                ))
                            }

                        </svg>
                    </div>  
                </div>
                <footer className="footer" style={{display:this.state.editing ?'flex' :'none'}}>
                    <ActionTag type='danger' size='large' iconField={<Icon type="close-circle-o" />} textField='取消'
                        onClick={this.onTasksReset.bind(this)}/>
                    <ActionTag type='success' size='large' iconField={<Icon type="check-circle-o" />} textField='提交'
                        onClick={this.onTasksSubmit.bind(this)}/>
                </footer>
            </Root>
        )
    }
}

const DialogRoot=styled.div`
    .ant-input{
        background:transparent;
    }
`;

class TaskCreate extends React.Component{

    state={
        name:'',
        desc:'',
        parent:[],
        children:[]
    }

    onCancel(){
        const onClose=this.props.onClose
        onClose ?onClose() :''
    }
    onSubmit(){
        const {onConfirm}=this.props
        onConfirm ?onConfirm(this.state) :''
        this.onCancel()
    }

    render(){
        return(
            <DialogRoot style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'space-between'}}>
                <header className="header" style={{textAlign:'center',fontSize:18}}>新建任务</header>
                <div className="content" style={{display:'flex',flexDirection:'column'}}>
                    <div className="items" style={{display:'flex',width:'80%',flexDirection:'row',alignItems:'center',padding:10}}>
                        <span className="label" style={{flexShrink:0}}>名称</span>
                        <Input className="input" value={this.state.name}
                            onChange={e=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className="items" style={{width:'80%',display:'flex',flexDirection:'row'}}>
                        <span className="label" style={{flexShrink:0}}>描述</span>
                        <Input className="input" type='textarea' rows={4} value={this.state.desc}
                            onChange={e=>this.setState({desc:e.target.value})}/>
                    </div>
                </div>
                <div className="footer" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Button type='danger' onClick={this.onCancel.bind(this)} style={{margin:10}}>取消</Button>
                    <Button type='primary' onClick={this.onSubmit.bind(this)} style={{margin:10}}>创建</Button>
                </div>
            </DialogRoot>
        )
    }
}