import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'

const Root=styled.span`
    align-self:center;
    padding:5px 0;
    color:#0099ff;
    cursor:pointer;
    border-radius:10px;
    min-width:60px;
    overflow:hidden;
    display:flex;
    &.disabled{
        cursor:not-allowed;
        color:gray;
    }
    &.large{
        font-size:30px;
        min-width:100px;
    }
    &.success{
        color:green;
    }
    &.danger{
        color:red;
    }
    *{
        transition:.5s all;
    }
    &>.wrapper{
        display:flex;
        width:100%;
    }
    & .icon{
        width:100%;
        height:100%;
        display:block;
        flex-shrink:0;
        text-align:center;
    }
    & .text{
        width:100%;
        height:100%;
        flex-shrink:0;
        text-align:center;
    }
    &:hover{
        background:#eee;
        & .wrapper{
            transform:translateX(-100%);
        }
    }
`;
export default class ActionTag extends React.Component{

    onClick(){
        const {disabled,onClick}=this.props
        if(!disabled && onClick){
            onClick()
        }
    }

    render(){
        return(
            <Root {...this.props} className={this.props.type+' '+this.props.size+(this.props.disabled ?' disabled':'')}
                onClick={this.onClick.bind(this)}>
                <span className="wrapper">
                    <span className="icon">{this.props.iconField}</span>
                    <span className="text">{this.props.textField}</span>
                </span>
            </Root>
        )
    }
}