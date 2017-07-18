import React from 'react'
import ReactDOM,{render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import mainAction from '__module/main/action/Action'
import styled,{keyframes} from 'styled-components'
import DomToImage from 'dom-to-image'
/**
 * 此处花了太多精力写转场动画，实现dialog部分代码极少，动画部分的写的比较乱，没办法，react里面做这部分比较难，可以暂时忽略。
 */

const swiftIn=keyframes`
    0%{
        transform: scale(0) translate(-50%,-50%);
        left: 100%;
        top: -300px;
        filter:blur(10px);
    }
    80%{
        transform: scale(1.2) translate(-50%,-50%);
        left: 50%;
        top: 50%;
        filter:blur(5px);
    }
    100%{
        transform: scale(.99) translate(-50%,-50%);
        left: 50%;
        top: 50%;
        filter:blur(0);
    }
`;
const swiftOut=keyframes`
    0%{
        opacity:1;   
    }
    30%{
        transform: scale(1) translate(-50%,-50%);
        border-radius: 50%;
        width: 300px;
        height:300px;
        left: 10%;
        top: 80%;
        opacity: .9;
    }
    100%{
        transform: scale(6) translate(0,0);
        border-radius: 50%;
        width: 300px;
        height:300px;
        opacity: 0.5;
    }
`;
const Root=styled.div`
    min-width:500px;
    min-height:100px
    overflow:hidden;
    position:fixed;
    left:50%;
    top:50%;
    transform: scale(1) translate(-50%,-50%);
    border-radius: 10px;
    background: rgba(255, 255, 255, .9);
    box-shadow: 10px 10px 80px -10px rgba(30, 30, 30, .7);
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:1000;
    &.swift-in{
        animation:${swiftIn} .5s ease-out forwards;
    }
    &.swift-out{
        animation:${swiftOut} .5s ease-out;
    }
    .btn-close{
        position:absolute;
        top:5px;
        right:5px;
        background:transparent;
        width:20px;
        height:20px;
        line-height:20px;
        border:none;
        outline:none;
        font-size:20px;
        border-radius:5px;
    }
    .btn-close:hover{
        color:red;
    }
    .content{
        align-items:center;
        justify-content:center;
    }
`;
const BgLayer=styled.div`
    background-image:${props=>props.bgUrl?'url('+props.bgUrl+')':''};
    // background-size:${props=>props.bgWidth+'px '+props.bgHeight+'px'};
    width:${props=>props.bgWidth+'px'};
    height:${props=>props.bgHeight+'px'};
    position:absolute;
    left:${props=>0-props.bgLeft+'px'};
    top:${props=>0-props.bgTop+'px'};
    filter:blur(10px);
    z-index:-1;
    // background-position:${props=>props.bgPositionX+'px '+props.bgPositionY+'px'};
    // background-position:center;
`;
class Dialog extends React.Component{
     constructor(props){
         super(props);
         this.state={
             bgUrl:'',
             bgWidth:0,
             bgHeight:0,
             bgPositionX:0,
             bgPositionY:0,
             bgLeft:0,
             bgTop:0
         }
     }

     componentWillMount(){
         let {onVisible}=this.props;
            if(onVisible){
                onVisible(this.props.visible)
            }
     }
     componentDidMount(){
        let root=this.Root;
        root.style.display=this.props.visible?'inherit':'none';

        root.addEventListener('animationend',()=>{
            root.style.display=this.props.visible?'inherit':'none';
            this.content.style.display=this.props.visible?'flex':'none';
            this.bgLayer ?this.bgLayer.style.display=this.props.visible?'inherit':'none' :'' ;
            if(this.props.visible){
                const appRoot=document.querySelector('body>div#app>div>div.ant-layout');
                DomToImage.toPng(appRoot,{quality:0.1})
                    .then(url=>{
                        this.setState({bgUrl:url})
                    })
                this.setState({
                        bgWidth:appRoot.offsetWidth,
                        bgHeight:appRoot.offsetHeight,
                        bgLeft:this.Root.offsetLeft-this.Root.offsetWidth/2,
                        bgTop:this.Root.offsetTop-this.Root.offsetHeight/2,
                        bgPositionX:0-this.Root.offsetLeft,
                        bgPositionY:0-this.Root.offsetTop
                    })
            }
        })
     }
     componentWillUnmount(){
     }

     componentWillReceiveProps(nextProps){
         if(this.props.visible!=nextProps.visible){
            let {onVisible}=this.props;
            onVisible? onVisible(nextProps.mainBlur) :'' 
         }
     }

     onClose(){
         this.props.hideDialog();
     }
     

     render(){
         let {mainBlur,bgBlur,onConfirm,onCancel}=this.props;
         return(
             <Root innerRef={root=>this.Root=root} className={"dialog-root"+(this.props.visible?' swift-in':' swift-out')} style={{display:this.props.visible?'inherit':''}}>
                <div ref={ct=>this.content=ct} className="content" style={{display:this.props.visible?'flex':'none',width:'100%',flexGrow:1}}>
                    {this.props.bgBlur?
                        <BgLayer innerRef={bgLayer=>this.bgLayer=bgLayer} style={{display:this.props.visible?'none':'none'}} bgUrl={this.state.bgUrl} bgPositionX={this.state.bgPositionX} bgPositionY={this.state.bgPositionY} 
                            bgWidth={this.state.bgWidth} bgHeight={this.state.bgHeight}
                            bgLeft={this.state.bgLeft} bgTop={this.state.bgTop}/>
                        :''
                    }
                    <button className="btn-close" onClick={this.onClose.bind(this)}>&times;</button>
                    {this.props.content?<this.props.content onConfirm={onConfirm} onCancel={onCancel} onClose={this.onClose.bind(this)}/>:''}
                </div>
             </Root>
         )
     }
 }
 function mapStateToProps(state){
    return state.main.dialog
 }
 function mapDispatchToProps(dispatch){
     return bindActionCreators(mainAction,dispatch)
 }
 export default connect(mapStateToProps,mapDispatchToProps)(Dialog)