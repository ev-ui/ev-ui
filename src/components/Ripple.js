import React from 'react'
import {render} from 'react-dom'
import styled,{keyframes} from 'styled-components'

const ripple=keyframes`
	from{
		transform: scale(.2);
	}
	to{
		transform: scale(2);
		opacity: 0;
	}
`;
const Root=styled.div`
    position: relative;
	overflow: hidden;
    .ripple-layer{
        border-radius:100%;
        background: rgba(100,100,100,.7);
        animation: ${ripple} .5s ease-out;
        position: absolute;
        left: 0;
        top: 0;
        transform: scale(0);
    }
`;

export default class Ripple extends React.Component{
    
    componentDidMount(){
        this.Root.onmousedown=(e)=>{
            var size=Math.max(this.Root.offsetWidth,this.Root.offsetHeight);
			var x=e.offsetX || e.layerX;
			var y=e.offsetY || e.layerY;
			var rippleLayer=document.createElement('div');
			rippleLayer.className='ripple-layer';
			rippleLayer.style.height=size+"px";
			rippleLayer.style.width=size+"px";
			rippleLayer.style.left=x-size/2+"px";
			rippleLayer.style.top=y-size/2+"px";
            rippleLayer.addEventListener('animationend',()=>{
                rippleLayer.parentNode.removeChild(rippleLayer);
            })
			this.Root.appendChild(rippleLayer);
        }
    }

    render(){
        return(
            <Root {...this.props} innerRef={root=>{this.Root=root}}>
                {this.props.children}
            </Root>
        )
    }
}