import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'

const Root=styled.div`
    position:relative;
    overflow:hidden;
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
        width:200,
        mx:0
    }
    mx=0
    width=200
    resizing=false
    bg='white'

    onResizeStart(event){
        this.resizing=true
        this.mx=event.pageX || event.clientX
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
        e.preventDefault()
    }
    onResizeEnd(event){
        this.resizing=false
    }

    componentDidMount(){
        document.onmousemove=this.onResize.bind(this)
        document.onmouseup=this.onResizeEnd.bind(this)
    }
    
    render(){
        return(
            <Root {...this.props} style={{width:this.state.width}}>
                {this.props.children}
                <span className="trigger"
                    onMouseDown={this.onResizeStart.bind(this)}/>
            </Root>
        )
    }
}