import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {EvUI,Dialog} from 'ev-ui'
import DialogContent from './DialogContent'

import Main from './Main'
import Demo from './Demo'
import Introduction from './Introduction'

const Root=styled(EvUI)`
    .content{
        transition:all .5s;
        &>.page{
        }
    }
    .pager{
        position:fixed;
        right:20px;
        top:50%;
        transfrom:translateY(-50%);
        &>.pager-item{
            display:block;
            width:10px;
            height:10px;
            line-height:10px;
            color:transparent;
            background:gray;
            border-radius:50%;
            border:1px solid gray;
            text-align:center;
            cursor:pointer;
            transition:.5s all;
            margin:20px auto;
            &.active{
                width:40px;
                height:40px;
                line-height:40px;
                background:transparent;
                color:black;
            }
            &:hover{
                width:30px;
                height:30px;
                line-height:30px;
                background:#eee;
                color:black;
            }
        }
    }
`;
const pages=[Main,Demo,Introduction]
export default class Index extends React.Component{

    state={
        ww:0,
        wh:0,
        topY:0,
        pageIndex:0
    }

    resize(){
        this.setState({
            ww:window.innerWidth,
            wh:window.innerHeight
        })
    }

    page(index){
        this.setState({
            pageIndex:index>pages.length-1 ?pages.length-1 :index<0 ?0 :index
        })
    }
    
    componentDidMount(){
        this.resize()
        window.oncontextmenu=(e)=>{
            e.preventDefault()
        }
        window.onresize=()=>{
            this.onresize()
        }
        window.onmousewheel=(e)=>{
            e.preventDefault()
            const i=this.state.pageIndex
            this.page(i+(e.deltaY>0 ?1 :-1)) 
        }
    }

    render(){
        return(
            <Root ref={root=>this.root=root}>
                <header className='header'></header>
                <div className="content" style={{marginTop:-this.state.pageIndex*window.innerHeight}}>
                {
                    pages.map((Page,index)=><Page key={index} style={{height:this.state.wh}}/>)
                }
                </div>
                <div className="footer"></div>
                <div className="pager">
                {
                    pages.map((p,i)=><span className={'pager-item'+(this.state.pageIndex===i?' active':'')} key={i}
                        onClick={this.page.bind(this,i)}>
                            {i}
                        </span>)
                }
                </div>
            </Root>
        )
    }
}