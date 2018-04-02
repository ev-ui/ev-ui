import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'

const Root=styled.div`
    position:relative;
    overflow:hidden;
    width:auto;
    .trigger{
        width:5px;
        height:100%;
        display:block;
        position:absolute;
        top:0;
        right:0;
        cursor:e-resize;
    }
`;
export default class FreePane extends React.Component{

    state={
        resizing:false,
        width:0
    }
    mx=0
    resizing=false
    bg='white'

    onResizeStart(event){
        this.resizing=true
        this.mx=event.pageX || event.clientX
        this.root && this.setState({
            width: this.root.offsetWidth
        })
    }
    onResize(event){
        const e=event || window.event
        const ex=event.pageX || event.client
        if(this.resizing){
            this.setState({
                width:this.state.width+ex-this.mx
            })
            this.mx=ex
        }
        // e.preventDefault()
    }
    onResizeEnd(event){
        this.resizing=false
    }

    componentDidMount(){
		document.addEventListener('mousemove',this.onResize.bind(this))
		document.addEventListener('mouseup',this.onResizeEnd.bind(this))
    }
    
    render(){
        return(
            <Root {...this.props} innerRef={root=>this.root=root} style={{width:this.state.width || 'auto'}}>
                {this.props.children}
                <span className="trigger"
                    onMouseDown={this.onResizeStart.bind(this)}/>
            </Root>
        )
    }
}