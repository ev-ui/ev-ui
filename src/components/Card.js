import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'

const Root=styled.div`
    box-shadow:0 1px 5px gray;
    background-color:#f0f0f0;
    .header{
        width:100%;
        padding:5px 10px;
        font-size:16px;
        display:flex;
        justify-content:center;
        text-align:center;
        box-shadow:0 1px 2px -1px gray;
        background:#fff;
    }
    &>.content{
        padding:10px 20px;
    }
`;

export default class Card extends React.Component{

    render(){
        return(
            <Root {...this.props}>
                {this.props.children}
            </Root>
        )
    }
}