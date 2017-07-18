import React from 'react'
import {render} from 'react-dom'
import {Icon} from 'antd'
import styled from 'styled-components'

const Root=styled.div`
    background:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-weight:100;
    .name{
        font-size:50px;
    }
    .motto{
        font-size:30px;
    }
    .btn-links{
        margin-top:50px;
        display:flex;
        flex-direction:row;
        .btn-link{
            margin:10px;
            padding:10px 20px;
            border:1px solid gray;
            cursor:pointer;
            text-decoration:none;
            color:gray;
            border-radius:5px;
            display:flex;
            flex-direction:row;
            align-items:center;
            &>.icon{
                margin-right:10px;
                font-size:20px;
            }
            &:hover{
                box-shadow:0 0 30px -5px gray;
                background:#fefefe;
            }
        }
    }
`;

export default class Main extends React.Component{

    render(){
        return(
            <Root {...this.props}>
                <span className="name">
                    EvUI
                </span>
                <span className="motto">
                    An UI library,some awesome components.
                </span>
                <span style={{fontSize:18,marginTop:10}}>
                    scroll down to see a demo.
                </span>
                <div className="btn-links">
                    <a href="https://github.com/ev-ui/ev-ui" target='_blank' className="btn-link"><Icon className='icon' type="github" />View on Github</a>
                    <a href="http://evolify.cn" className="btn-link" target='_blank'><Icon className='icon' type="user" />About me</a>
                </div>
            </Root>
        )
    }    
}