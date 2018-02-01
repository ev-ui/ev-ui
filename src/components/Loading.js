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
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    .loading-ball{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background:transparent;
        box-shadow: 1px 1px 10px -1px rgba(30, 30, 30, .6);
        animation: 3s ${loading} infinite linear;
        transform-style: preserve-3d;
    }
    .tips{
        position:absolute;
        bottom:100px;
        font-size:30px;
        color:white;
    }
`
class Loading extends React.Component{
    
    state={
        dots:0
    }

    loopDots(){
        this.setState({
            dots:this.state.dots>2 ?0 :this.state.dots+1
        })
    }

    componentDidMount(){
        setInterval(this.loopDots.bind(this),500)
    }

    render(){
        return(
            <Root>
                <div className="loading-ball"></div>
                <span className="tips">Loading{".".repeat(this.state.dots)}</span>
            </Root>
        )
    }
}
const LoadingOpt={
    observer:null,
    view:null,
    onChange(){
        if(this.observer && typeof this.observer === 'function'){
            this.observer()
        }
    },
    subscribe(observer){
        this.observer=observer
    },
    show(onConfirm,onCancel){
        this.view=<Loading />
        this.onChange()
    },
    hide(){
        this.view=null
        this.onChange()
    }
}
export default LoadingOpt