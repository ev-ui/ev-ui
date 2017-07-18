import React from 'react'
import {render} from 'react-dom'
import styled,{keyframes} from 'styled-components'

const loading=keyframes`
    0%{
        box-shadow:100px 75px red;
        transform: rotate(0) rotateX(0) rotateY(0);
    }
    50%{				
        box-shadow: 
            0 -100px 0  orangered,
            -86px 50px 0 -15px green,
            86px 50px 15px  blue;
        transform: rotate(180deg) rotateX(180deg) rotateY(27deg);

    }
    100%{
        box-shadow: 100px 75px red;
        transform: rotate(360deg) rotateX(360deg) rotateY(0deg);
    }
`;
const Root=styled.div`
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    .loading-ball{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 1px 1px 10px -1px rgba(30, 30, 30, .6);
        animation: 3s ${loading} infinite linear;
        transform-style: preserve-3d;
    }
`;

export default class Loading extends React.Component{
    
    state={};

    componentDidMount(){
        this.setState({
            winWidth:window.innerWidth,
            winHeight:window.innerHeight
        })
    }
    componentWillReceiveProps(nextProps){
        if(this.props.visible!==nextProps.visible){
            this.props.onVisible ?this.props.onVisible(nextProps.visible):''
        }
    }
    render(){
        return(
            <Root style={{width:this.state.winWidth,height:this.state.winHeight,display:this.props.visible?'flex':'none'}}>
                <div className="loading-ball"></div>
            </Root>
        )
    }
}