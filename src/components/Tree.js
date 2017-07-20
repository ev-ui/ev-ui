import React from 'react'
import {render} from 'react-dom'
import {Icon,Popover,message,Checkbox,Input} from 'antd'
import styled from 'styled-components'
const Search=Input.Search
const Root=styled.div`
    user-select:none;
    font-size:17px;
    display:flex;
    flex-direction:column;
    height:100%;
    ::-webkit-scrollbar{
        width:1px;
        height:1px;
    }
    ::-webkit-scollbar-thumb{
        background:#aaa;
    }
    &>.search-box{
        background:#ccc;
        padding:5px;
        .ant-input-affix-wrapper{
            width:100%!important;
            .ant-input{
                background:rgba(255,255,255,.7);
            }
        }
    }
    &>ul.tree{
        overflow:scroll;
    }
    &>li>ul{
        margin-left:10px;
    }
    li>ul{
        list-style:inherit;
        margin-left:25px;
        overflow:hidden;
        // border-left:1px solid #aaa;
        &:before{
            content:'';
            width:1px;
            top:25px;
            bottom:13px;
            background:#aaa;
            display:inherit;
            position:absolute;
        }
        &>li>span{
            &:before{
                content:'';
                width:15px;
                height:1px;
                background:#aaa;
                display:inherit;
            }
        }
    }
    li{
        list-style:none;
        position:relative;
        .item{
            flex-grow:1;
            display:flex;
            align-items:center;
            cursor:pointer;
            position:relative;
            outline:none;
            &.matched .text{
                color:red;
            }
            .check-box{
            }
            .icon{
                color:#0088dd;
                &.leaf{
                    color:gray;
                }
            }
            .text{
                margin-left:10px;
                white-space:nowrap;
                overflow:hidden;
            }
            .menu{
                width:200px;
                height:300px;
                display:none;
                border:1px solid black;
                position:absolute;
                left:200px;
                top:0px;
            }
            .menu.active{
                display:inherit;
            }
        }
        .item:hover,.item.selected{
            background:#bbeeff;
        }
    }
`;

class TreeNode extends React.Component{
    constructor(props){
        super(props)
        this.state={expanded:this.props.expanded? true :false}
    }

    componentDidMount(){
        // if(this.props.type===ObjectType.HOME){
        //     this.setState({collapsed:false})
        // }
    }

    onNodeClick(event){
        
        // this.props.onSelected();
        const {onClick}=this.props;
        onClick ?onClick(event.ctrlKey) :''
    }

    onBlur(event){
        // this.props.onBlur();
    }
    onFocus(event){
    }

    onContextMenu(event){
        var x=event.pageX || event.clientX;
        var y=event.pageY || event.clientY;
        // this.onNodeClick();
        // this.props.onContextMenu(x,y);
    }
    onDoubleClick(event){
        var x=event.pageX || event.clientX;
        var y=event.pageY || event.clientY;
        this.setState({expanded:!this.state.expanded})
        this.props.onDoubleClick(x,y)
    }
    onArrowClick(){
        this.setState({expanded:!this.state.expanded})
    }

    componentWillReceiveProps(nextProps){
        if(this.props.expanded!==nextProps.expanded){
            this.setState({
                expanded:nextProps.expanded
            })
        }
    }

    render(){
        let iconType='file';
        return (
            <li>
            <span style={{display:'flex',alignItems:'center'}}>
                    <Icon type={this.state.expanded ?'caret-down' :'caret-right'}
                        style={{visibility:this.props.isLeaf?'hidden':'',fontSize:10}}
                        onClick={this.onArrowClick.bind(this)}/>
                    <div className={'item'+(this.props.selected? ' selected':'')+(this.props.matched ?' matched' :'')} tabIndex="-1"
                        onClick={this.onNodeClick.bind(this)} 
                        onDoubleClick={this.onDoubleClick.bind(this)}
                        onFocus={this.onFocus.bind(this)}
                        onBlur={this.onBlur.bind(this)}
                        onContextMenu={this.onContextMenu.bind(this)}>
                        <Checkbox className='check-box' style={{display:this.props.editable? 'inherit' :'none'}}/>
                        <span><Icon type={iconType} className={'icon'+(this.props.isLeaf ?' leaf':'')} /></span>
                        <span className="text">{this.props.name}</span>
                    </div>
                </span>
                
                
                {
                    !this.props.isLeaf?
                        <ul style={{display:this.state.expanded?'inherit' :'none'}}>{this.props.children}</ul>
                        :''
                }
            </li>
        )
    }
}

export default class Tree extends React.Component{

    constructor(props){
        super(props);
        this.state=({
            selectedKeys:[],
            expandedKeys:[],
            matchedKeys:[]
        })
    }
    selected(key){
        return this.state.selectedKeys.some(k=>k===key)
    }
    removeKey(key){
        const keys=this.state.selectedKeys.filter(k=>k!==key);
        this.setState({
            selectedKeys:keys
        },this.onSelectChange)
    }
    loopKeys(data){
        let keys=[data.key]
        if(data.children){
            data.children.forEach(d=>keys=keys.concat(this.loopKeys(d)))
        }
        return keys
    }
    addKey(keys){
        this.setState({
            selectedKeys:[...this.state.selectedKeys,...keys]
        },this.onSelectChange)
    }
    onSelectChange(){
        let {onSelectChange}=this.props;
        onSelectChange ?onSelectChange(this.state.selectedKeys) :''
    }

    onNodeClick(data,ctrl){
        const key=data.key;
        ctrl ?this.selected(key) ?this.removeKey(key) :this.addKey(this.loopKeys(data))
        : this.setState({
            selectedKeys:this.selected(key) ?[] :[...this.loopKeys(data)]
        },()=>{
            this.onSelectChange();
        })
    }
    onContextMenu(data,x,y){
    }
    onNodeDoubleClick(data,x,y){
        //双击事件，目前仅仅是展开/收起节点
    }

    onBlur(){
    }

    onFilter(value){
        
        const matchedKeys=value ?this.filterKeys(this.props.dataSource || [],value) :[]
        const expandedKeys=value ?this.findParentKeys(this.props.dataSource || [] , matchedKeys) :[]
        this.setState({
            matchedKeys:matchedKeys,
            expandedKeys:expandedKeys
        })
    }
    findParentKeys(data,keys){
        return new Array([]).concat(data).reduce((d1,d2)=>d1.concat(d2.children ?this.findParentKeys(d2.children,keys).concat(d2.children.some(d=>keys.some(k=>k===d.key))?d2.key :[]) :[]))
    }
    filterKeys(data,value){
        //TODO
        return new Array([]).concat(data).reduce((d1,d2)=>d1.concat(new RegExp(value).test(d2.name) ?d2.key:[],d2.children ?this.filterKeys(d2.children,value):[]))
    }

    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){
        if(this.props.home!==nextProps.home){
            if(!this.state.selectedObjectUid){
                this.onNodeSelected(nextProps.home)
            }
        }
    }
    mapDataToNode(data){
        let key=data.key || data.uid;
        return(
            <TreeNode key={key} uid={data.uid} name={data.name} type={data.ctype} 
                onClick={this.onNodeClick.bind(this,{...data,key})}
                onContextMenu={this.onContextMenu.bind(this,data)}
                onDoubleClick={this.onNodeDoubleClick.bind(this,data)}
                onBlur={this.onBlur.bind(this)}
                editable={this.props.editable}
                isLeaf={data.children&&data.children.length>0?false:true}
                expanded={this.state.expandedKeys.some(k=>k===key)}
                matched={this.state.matchedKeys.some(k=>k===key)}
                selected={this.selected.call(this,key)}>
                {
                    data.children?
                    data.children.map((item,index)=>(
                       this.mapDataToNode(item)
                    ))
                    :''
                }
            </TreeNode>
        )
    }

    render(){
        let dataSource=this.props.dataSource||{};
        return(
            <Root>
                <div className="search-box">
                    <Search
                        placeholder="input search text"
                        style={{ width: 200 }}
                        onChange={(event)=>this.onFilter(event.target.value)}
                    />
                </div>
                <ul className="tree">
                    {
                        dataSource instanceof Array ?dataSource.map((item,index)=>(this.mapDataToNode(item,index))) :this.mapDataToNode(dataSource)
                    }
                </ul>
            </Root>
        )
    }
}
