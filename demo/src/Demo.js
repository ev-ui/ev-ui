import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {Icon,Input,Button} from 'antd'
import {FreePane,SearchBox,ActionTag,Dialog,ContextMenu,Menu,MenuItem,Flow} from 'ev-ui'
import Login from './Login'
const Root=styled.div`
    display:flex;
    flex-direction:column;
    background:#f0f0f0;
    &>.header{
        height:70px;
        background:#fff;
        box-shadow:0 1px 5px -1px gray;
        display:flex;
        padding:0 20px;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        &>.search-box{
            margin-left:50px;
        }
    }
    &>.content{
        flex-grow:1;
        display:flex;
        flex-direction:row;
        margin-top:5px;
        .left{
            background:#fff;
            display:flex;
            flex-direction:column;
            &>.head{
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:space-between;
                height:42px;
                padding:5px 10px;
                &>.title{
                    font-weight:bold;
                }
            }
            &>.flow-list{
                flex-grow:1;
                background:#f0f0f0;
                &>.process{
                    padding:5px 10px;
                    border-bottom:1px solid #ccc;
                    &:hover,&.selected{
                        color:white
                        background:#00bb77;
                    }
                }
            }
        }
        .main{
            flex-grow:1;
            margin-left:5px;
        }
    }
`;
const data=[
    {
        id:'0',
        name:'Flow0',
        tasks:[
            {point:0,name:'Task0',parent:[],children:[1]},
            {point:1,name:'Task1',parent:[0],children:[2,3]},
            {point:2,name:'Task2',parent:[1],children:[4]},
            {point:3,name:'Task3',parent:[1],children:[4]},
            {point:4,name:'Task4',parent:[2,3],children:[]},
        ]
    },  
    {
        id:'1',
        name:'Flow1',
        tasks:[
            {point:0,name:'Task0',parent:[],children:[1]},
            {point:1,name:'Task1',parent:[0],children:[2]},
            {point:2,name:'Task2',parent:[1],children:[3]},
            {point:3,name:'Task3',parent:[2],children:[4]},
            {point:4,name:'Task4',parent:[3],children:[]},
        ]
    },  
    {
        id:'2',
        name:'Flow2',
        tasks:[
            {point:0,name:'Task0',parent:[],children:[1]},
            {point:1,name:'Task1',parent:[0],children:[2]},
            {point:2,name:'Task2',parent:[1],children:[]}
        ]
    },  
    {
        id:'3',
        name:'Flow3',
        tasks:[
            {point:0,name:'Task0',parent:[],children:[1]},
            {point:1,name:'Task1',parent:[0],children:[2,3]},
            {point:2,name:'Task2',parent:[1],children:[]},
            {point:3,name:'Task3',parent:[1],children:[]},
        ]
    },  
]
export default class Demo extends React.Component{

    state={
        processes:data,
        selectedProcess:data[0]
    }


    constructor(props){
        super(props)
    }

    onCreate(){
        let props={
            content:ProcessCreate,
            onConfirm:process=>{
                this.setState({
                    processes:[
                        ...this.state.processes,
                        {
                            ...process,
                            id:this.state.processes.length
                        }
                    ]
                })
            }
        }
        Dialog.show(props)
    }
    onTasksChange(tasks){
        this.setState({
            processes:[
                ...this.state.processes.filter(p=>p.id!==this.state.selectedProcess.id),
                {
                    ...this.state.selectedProcess,
                    tasks:tasks
                }
            ]
        })
    }
    init(){
        this.setState({
            processes:data
        })
    }

    onContextMenu(e){
        let menu=new Menu()
            .add(new MenuItem('新建',()=>{})
                    .add(new MenuItem('A',()=>{}))
                    .add(new MenuItem('B',()=>{}))
                    .add(new MenuItem('C',()=>{}))
                )
            .add(new MenuItem('编辑',()=>{}))
            .add(new MenuItem('复制',()=>{}))
            .add(new MenuItem('剪切',()=>{}))
            .add(new MenuItem('粘贴',()=>{}))
            .add(new MenuItem('删除',()=>{}).type('remove'))
            
        ContextMenu.show({menu,left:e.pageX,top:e.pageY})
    }

    render(){
        let {processes}=this.state
        return(
            <Root {...this.props}>
                <header className="header">
                    <SearchBox className='search-box'/>
                    <div className="placeholder"></div>
                    <ActionTag iconField={<Icon type="user"/>} textField='登录' onClick={()=>Dialog.show({content:Login,mainBlur:true})}/>
                </header>
                <div className="content">
                    <FreePane className='left'>
                        <div className="head">
                            <span className="title">流程列表</span>
                            <ActionTag onClick={this.onCreate.bind(this)} iconField={<Icon type="plus-circle-o" />} textField='创建'/>
                        </div>
                        <div className="flow-list">
                        {
                            processes.map((p,i)=>(
                                <div key={i} className={'process'+(this.state.selectedProcess.id===p.id ?' selected':'')}
                                    onContextMenu={this.onContextMenu.bind(this)}
                                    onClick={()=>this.setState({selectedProcess:p})}>
                                    {p.name}
                                </div>
                            ))
                        }
                        </div>
                    </FreePane>
                    <div className="main">
                        <Flow tasks={this.state.tasks} 
                            onChange={this.onTasksChange.bind(this)}
                            onFlowCreate={this.onCreate.bind(this)}
                            selectedProcess={this.state.selectedProcess || {}}/>
                    </div>
                </div>
            </Root>
        )
    }    
}
const DialogRoot=styled.div`
    .ant-input{
        background:transparent;
    }
`;

class ProcessCreate extends React.Component{

    state={
        name:'',
        desc:'',
        tasks:[]
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
                <header className="header" style={{textAlign:'center',fontSize:18}}>新建流程</header>
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