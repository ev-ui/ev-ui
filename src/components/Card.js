import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'

const Root=styled.div`
    box-shadow:0 1px 10px -3px gray;
    display:flex;
    flex-direction:column;
    &:hover{
        box-shadow:0 0px 20px -3px gray;
    }
    .card-title{
        background:#f0f0f0;
        padding:5px 10px;
        font-size:16px;
        text-align:center;
    }
    .card-content{
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