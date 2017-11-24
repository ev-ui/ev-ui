import React from 'react'
import {render} from 'react-dom'
import styled,{keyframes} from 'styled-components'

const topIn=keyframes`
    from{
        transform:translateY(-100%);
    }
    to{
        transform:translateY(0);
    }
`
const topOut=keyframes`
    from{
        transform:translateY(0);
    }
    to{
        transform:translateY(-100%);
    }
`
const rightIn=keyframes`
    from{
        transform:translateX(100%)
    }
    to{
        transform:translateX(0)
    }
`
const rightOut=keyframes`
    from{
        transform:translateX(0)
    }
    to{
        transform:translateX(100%)
    }
`
const bottomIn=keyframes`
    from{
        transform:translateY(100%);
    }
    to{
        transform:translateY(0);
    }
`
const bottomOut=keyframes`
    from{
        transform:translateY(0);
    }
    to{
        transform:translateY(100%);
    }
`
const leftIn=keyframes`
    from{
        transform:translateX(-100%)
    }
    to{
        transform:translateX(0)
    }
`
const leftOut=keyframes`
    from{
        transform:translateX(0)
    }
    to{
        transform:translateX(-100%)
    }
`

const Root = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:1000;
    background:rgba(0,0,0,.3);
    overflow:auto;
    .drawer-content{
        position:absolute;
        background:#fff;
        box-shadow:0 0 20px -5px gray;
        &.top{
            top:0;
            left:0;
            right:0;            
            box-shadow:0 10px 120px -5px gray;
            animation:${topIn} .3s;
            &.swift-out{
                animation:${topOut} .3s;
            }
        }
        &.right{
            top:0;
            right:0;
            bottom:0;
            box-shadow:-10px 0 120px -5px gray;
            animation:${rightIn} .3s;
            &.swift-out{
                animation:${rightOut} .3s;
            }
        }
        &.bottom{
            right:0;
            bottom:0;
            left:0;
            box-shadow:0 -10px 120px -5px gray;
            animation:${bottomIn} .3s;
            &.swift-out{
                animation:${bottomOut} .3s;
            }
        }
        &.left{
            top:0;
            bottom:0;
            left:0;
            box-shadow:10px 0 120px -5px gray;
            animation:${leftIn} .3s;
            &.swift-out{
                animation:${leftOut} .3s;
            }
        }
    }
`

class Drawer extends React.Component{

    constructor(){
        super()
        DrawerOpt.drawerCtx=this
    }

    onOuterClick(){
        if(this.props.modal){
            return
        }
        this.onClose()
    }
    
    onClose(){
        DrawerOpt.hide()
    }

    render(){
        const {content,position}=this.props
        const contentProps={
            ...this.props
        }
        return(
            <Root onClick={this.onOuterClick.bind(this)}>
                <div ref={drawerContent=>this.drawerContent=drawerContent} className={"drawer-content "+position} onClick={e=>e.stopPropagation()}>
                {
                    content?
                        typeof content==='function'?<this.props.content {...contentProps} onClose={this.onClose.bind(this)}/>
                        :typeof content==='string'?content:''
                    :''
                }
                </div>
            </Root>
        )
    }
}

const DrawerOpt={
    POSITION:{
        LEFT:'left',
        RIGHT:'right',
        TOP:'top',
        BOTTOM:'bottom'
    },
    observer:null,
    view:null,
    drawerCtx:null,
    onChange(){
        if (typeof this.observer==='function'){
            this.observer()
        }
    },
    subscribe(observer){
        this.observer=observer 
    },
    top(content){
        this.show({content,position:this.POSITION.TOP})
    },
    right(content){
        this.show({content,position:this.POSITION.RIGHT})
    },
    bottom(content){
        this.show({content,position:this.POSITION.BOTTOM})
    },
    left(content){
        this.show({content,position:this.POSITION.LEFT})
    },
    show(props){
        const content=props.content || props
        const position=props.position || this.POSITION.LEFT
        props={
            ...props,
            content,
            position
        }
        this.view=<Drawer {...props}/>
        this.onChange()
    },
    hide(){
        if(this.drawerCtx){
            this.drawerCtx.drawerContent.classList.add('swift-out')
            window.setTimeout(()=>{
                this.view=null
                this.onChange()
            },200)
        }else{
            this.view=null
            this.onChange()
        }
    }
}
export default DrawerOpt