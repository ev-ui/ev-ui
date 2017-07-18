import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'

const Root=styled.span`
    margin-right:5px;
    align-self:center;
    padding:5px 0;
    color:#0099ff;
    cursor:pointer;
    border-radius:10px;
    min-width:60px;
    overflow:hidden;
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

    render(){
        return(
            <Root {...this.props} className={this.props.type+' '+this.props.size}>
                <span className="wrapper">
                    <span className="icon">{this.props.iconField}</span>
                    <span className="text">{this.props.textField}</span>
                </span>
            </Root>
        )
    }
}