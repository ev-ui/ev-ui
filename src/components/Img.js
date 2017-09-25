import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
const Root = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
`

export default class Img extends React.Component{

    state={
        width:'auto',
        height:'auto'
    }

    componentDidMount(){
        this.resize(this.props.src,this.props.width || 100,this.props.height || 100)
    }
    componentWillReceiveProps(nextProps){
        this.resize(nextProps.src,nextProps.width || 100,nextProps.height || 100)
    }
    resize(src,width,height){
        this.img.onload=()=>{
            const w=this.img.naturalWidth
            const h=this.img.naturalHeight
            if(w/width < h/height){
                this.setState({
                    width:width,
                    height:'auto'
                })
            }else{
                this.setState({
                    width:'auto',
                    height:height
                })
            }
        }
    }

    render(){
        let {width,height,src}=this.props
        return(
            <Root {...this.props} style={{width:width || 100,height:height || 100}}>
                <img ref={img=>this.img=img} src={src} width={this.state.width} height={this.state.height}/>
            </Root>
        )
    }
}