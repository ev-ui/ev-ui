import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import Card from '__public/component/Card'
import {Radio,Button,Icon,Popover} from 'antd'

const RadioGroup=Radio.Group;
const RadioButton=Radio.Button;

const Root=styled(Card)`
    box-shadow:none;
    background:rgba(230,230,230,.5);
    border:1px solid #ccc;
    user-select:none;
    ::-webkit-scrollbar{
        width:1px;
        height:1px;
    }
    ::-webkit-scollbar-thumb{
        background:#aaa;
    }
    &>.header{
        display:flex;                    
        background:rgba(250,250,250,.5);
        box-shadow:0 1px 2px -1px gray;
        padding:5px;
        .title{
            flex-grow:1;
        }
    }
    &>.content{
        padding:5px 0 0 ;
        overflow:hidden;
        box-sizing:content-box;
        &>.list-view{
            display:flex;
            overflow:scroll;
            padding-top:5px;
            width:100%;
            height:100%;
            .list-item{
                white-space:nowrap;
                width:100%;
                position:relative;
                overflow:hidden;
                &.selected{
                    color:white;
                }
            }
            &.grid{
                flex-flow:row wrap;
                .list-item{
                    width:70px;
                    height:70px;
                    margin:5px;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    align-items:center;
                    align-items:center;
                    background:#fff;
                    box-shadow:0px 0px 5px -1px gray;
                    &.selected{
                        background:#00aaff;
                    }
                    &:hover{
                        box-shadow:1px 1px 5px -1px gray;
                    }
                    &:hover .btn-remove.enable{
                        display:inherit;
                    }
                    .icon{
                        font-size:30px;
                    }
                    .name{
                        text-align:center;
                    }
                    .btn-remove{
                        &:before{
                            content:'\\2715';
                            display:inline-block;
                            width:20px;
                            height:20px;
                            line-height:20px;
                            text-align:center;
                            background:transparent;
                        }
                        display:none;
                        position:absolute;
                        right:-10px;
                        top:-10px;
                        width:20px;
                        height:20px;
                        padding:0;
                        border:none;
                        outline:none;
                        overflow:hidden;
                        background:#fff;
                        border:1px solid #ee2200;
                        color:#ee2200;
                        border-radius:50%;
                        &:hover{
                            color:white;
                            background:#ee2200;
                        }
                    }
                    &.add{
                        display:none;
                        &.enable{
                            display:inherit;
                        }
                    }
                }
            }
            &.list{
                flex-direction:column;
                width:100%;
                .list-item{
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    padding:10px;
                    width:100%;
                    height:30px;
                    overflow:hidden;
                    &.even{
                        background:#fff;
                    }
                    &.selected{
                        background:#00aaff;
                    }
                    .icon{

                    }
                    .name{
                        margin-left:10px;
                    }
                    .btn-remove{
                        &:after{
                            content:'删除';
                            display:inherit;
                            color:white;
                        }
                        position:absolute;
                        right:0;
                        top:0;
                        height:100%;
                        border:none;
                        background:#ee2200;
                        padding:0 5px;
                        display:none;
                        outline:none;
                        border-radius:0;
                        cursor:pointer;
                    }
                    &.add{
                        display:none;
                    }
                    &:hover{
                       background:#00aaff; 
                       color:white;
                    }
                    &:hover .btn-remove{
                        display:inherit;
                    }
                }
            }
        }
    }
`;

export default class ListView extends React.Component{

    state={
        listStyle:'grid',
        selectedIndex:-1
    }

    onListStyleChange(e){
        this.setState({
            listStyle:e.target.value
        })
    }

    onItemClick(index){
        this.setState({
            selectedIndex:index
        })
    }
    
    onItemDoubleClick(){
        let {onItemDoubleClick}=this.props;
        onItemDoubleClick ?onItemDoubleClick(this.state.selectedIndex) :'';
    }

    onAdd(){
        this.props.onAdd ?this.props.onAdd() :''
    }
    onRemove(){
        this.props.onRemove ?this.props.onRemove(this.state.selectedIndex) :''
    }

    render(){
        let dataSource=this.props.dataSource || data;
        let {editable}=this.props;
        return(
            <Root {...this.props}>
                <header className="header">
                    <div className="layout-switch">
                        <RadioGroup defaultValue='grid' size='small' onChange={this.onListStyleChange.bind(this)}>
                            <RadioButton value='grid'><Icon type='appstore-o'/></RadioButton>
                            <RadioButton value='list'><Icon type='bars'/></RadioButton>
                        </RadioGroup>
                    </div>
                    <span className="title">{this.props.title}</span>
                    <div className="btn-group">
                        <Button size='small' icon='plus' onClick={this.onAdd.bind(this)}></Button>
                        <Button size='small' icon='minus' onClick={this.onRemove.bind(this)}/>
                    </div>
                </header>
                <div className="content">
                    <div className={'list-view '+this.state.listStyle}>
                        {
                            dataSource.map((item,index)=>(
                                <Popover key={index} content={item.name} placement='bottom'>
                                    <div className={'list-item'+(index%2 ?'' :' even')+(this.state.selectedIndex===index ?' selected' :'')}
                                        onDoubleClick={this.onItemDoubleClick.bind(this,index)}
                                        onClick={this.onItemClick.bind(this,index)}>
                                        <Icon className='icon' type={item.icon || 'file'}/>
                                        <span className="name">{item.name}</span>
                                        <button className={'btn-remove'+(editable ?' enable' :'')} onClick={this.onRemove.bind(this,index)}></button>
                                    </div>
                                </Popover>
                            ))
                        }
                        <div className={"list-item add"+(editable ?' enable':'')} onClick={this.onAdd.bind(this)}>
                            <span className="icon"><Icon type='plus'/></span>
                        </div>
                    </div>
                </div>
            </Root>
        )
    }
}