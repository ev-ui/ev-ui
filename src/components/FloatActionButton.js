import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'

const FloatActionBtn=styled.div`
    position: absolute;
    right:150px;
    bottom:150px;
    .btn:hover{
        box-shadow:0 0 30px rgba(30,30,30,.5);
    }
    .btn{
        position: absolute;
        left:0;
        top:0;
        width:75px;
        height:75px;
        background:transparent;
        transition: all .2s ease-in;
        border-radius:50%;
        border:none;
        font-size:17px;
        margin:12.5px;
        cursor:pointer;
        outline:none;
        &.btn0{
            background: white;
            box-shadow:0 0 10px rgba(30,30,30,.7);
        }
        &.btn-create{
            background:#22cc66;
            color:white;
        }
        &.btn-update{
            background:#22bbff;
            color:white;
        }
        &.btn-remove{
            background:#cc1111;
            color:#fff;
        }
        &.btn-query{
            background:#ee5533;
            color:#fff;
        }
        &.expand{
            box-shadow:0 0 15px rgba(30,30,30,.7);
        }
        &.btn0.expand{
            transform:rotate(235deg);
        }
        &.btn1.expand{
            left:-150px;
            top:0px;
        }
        &.btn2.expand{
            left:-130px;
            top:-75px;
        }
        &.btn3.expand{
            left:-75px;
            top:-130px
        }
        &.btn4.expand{
            left:0;
            top:-150px;
        }
        &:hover{
            box-shadow:0 0 50px rgba(30,30,30,.5);
        }
    }
`;
export default class FloatActionButton extends React.Component{

    constructor(props){
        super(props);
        this.state={expand:false}
    }
    toggle(){
        this.setState({expand:!this.state.expand})
    }

    render(){
        return(
            <FloatActionBtn>
                <button className={(this.state.expand?"expand ":"")+"btn btn1 btn-create"}>新建</button>
                <button className={"btn btn2 btn-update"+(this.state.expand?" expand":"")}>修改</button>
                <button className={"btn btn3 btn-remove"+(this.state.expand?" expand":"")}>删除</button>
                <button className={"btn btn4 btn-query"+(this.state.expand?" expand":"")}>查找</button>
                <button className={"btn btn0"+(this.state.expand?" expand":"")} onClick={this.toggle.bind(this)}>+</button>
            </FloatActionBtn>
        )
    }
}