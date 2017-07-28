import React from 'react'
import ReactDOM,{render} from 'react-dom'
import styled,{keyframes} from 'styled-components'
import DomToImage from 'dom-to-image'
/**
 * 此处花了太多精力写转场动画，实现dialog部分代码极少，动画部分的写的比较乱，没办法，react里面做这部分比较难，可以暂时忽略。
 */

const swiftIn=keyframes`
    0%{
        transform: scale(0) translate(-50%,-50%);
        left: ${props=>props.winWidth+'px'};
        top: -300px;
        filter:blur(10px);
    }
    80%{
        transform: scale(1.2) translate(-50%,-50%);
        left:${props=>props.winWidth/2+'px'};
        top:${props=>props.winHeight/2+'px'};
        filter:blur(5px);
    }
    100%{
        transform: scale(.99) translate(-50%,-50%);
        left:${props=>props.winWidth/2+'px'};
        top:${props=>props.winHeight/2+'px'};
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
    left:${props=>props.winWidth/2+'px'};
    top:${props=>props.winHeight/2+'px'};
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
    width:${props=>props.bgWidth+'px'};
    height:${props=>props.bgHeight+'px'};
    position:absolute;
    left:${props=>0-props.bgLeft+'px'};
    top:${props=>0-props.bgTop+'px'};
    filter:blur(10px);
    z-index:-1;
`;
class Dialog extends React.Component{

    state={
        visible:true,
        winWidth:0,
        winHeight:0,
        bgUrl:'',
        bgWidth:0,
        bgHeight:0,
        bgPositionX:0,
        bgPositionY:0,
        bgLeft:0,
        bgTop:0
    }

     constructor(props){
         super(props);
     }

     componentDidMount(){

         this.setState({
             winWidth:window.innerWidth,
             winHeight:window.innerHeight
         })

        let root=this.Root;
        root.style.display=this.state.visible?'inherit':'none';

        root.addEventListener('animationend',()=>{
            root.style.display=this.state.visible?'inherit':'none';
            this.content.style.display=this.state.visible?'flex':'none';
            this.bgLayer ?this.bgLayer.style.display=this.state.visible?'inherit':'none' :'' ;
            if(this.state.visible){
                const appRoot=document.querySelector('body>div#app>div>div#app-main');
                DomToImage.toPng(appRoot,{quality:0.1})
                    .then(url=>{
                        this.setState({bgUrl:url})
                    })
                this.setState({
                        bgWidth:appRoot.offsetWidth,
                        bgHeight:appRoot.offsetHeight,
                        bgLeft:this.Root.offsetLeft-this.Root.offsetWidth/2-appRoot.offsetLeft,
                        bgTop:this.Root.offsetTop-this.Root.offsetHeight/2-appRoot.offsetTop,
                        bgPositionX:0-this.Root.offsetLeft,
                        bgPositionY:0-this.Root.offsetTop
                    })
            }else{
                DialogOpt.hide(this.props.dkey)
            }
        })
     }

     onClose(){
         this.setState({visible:false})
     }

     render(){
        const {content,bgBlur}=this.props
        const contentProps={
             ...this.props,
             content:null,
             mainBlur:null,
             bgBlur:null
        }
         const {visible,bgUrl,bgPositionX,bgPositionY,bgWidth,bgHeight,bgLeft,bgTop}=this.state
         return(
             <Root innerRef={root=>this.Root=root} 
                winWidth={this.state.winWidth} winHeight={this.state.winHeight}
                className={"dialog-root"+(visible?' swift-in':' swift-out')} 
                style={{display:visible?'inherit':''}}>
                <div ref={ct=>this.content=ct} className="content" style={{display:this.state.visible?'flex':'none',width:'100%',flexGrow:1}}>
                    {bgBlur?
                        <BgLayer innerRef={bgLayer=>this.bgLayer=bgLayer} style={{display:visible?'none':'none'}} bgUrl={bgUrl} bgPositionX={bgPositionX} bgPositionY={bgPositionY} 
                            bgWidth={bgWidth} bgHeight={bgHeight}
                            bgLeft={bgLeft} bgTop={bgTop}/>
                        :''
                    }
                    <button className="btn-close" onClick={this.onClose.bind(this)}>&times;</button>
                    {
                        /** 此处标签里面直接用content有问题，因为JSX会直接解析为<content/>标签而不是对应的组件,
                            这也是为什么React组件要求第一个字母大写的原因。
                         */
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
 const DialogOpt={
    dialogs:[],
    observers:[],
    onChange(){
        this.observers.forEach(observer=>{
            if (typeof observer==='function'){
                observer()
            }
        })
    },
    subscribe(observer){
        if(!this.observers.find(observer)){
            this.observers.push(observer)
        }
    },
    show(props){
        let dialog=<Dialog dkey={this.dialogs.length} key={this.dialogs.length}
            {...props}
            content={props.content || props}
            bgBlur={props.bgBlur || !props.mainBlur}/>
        this.dialogs.push({
            id:this.dialogs.length,
            dialog,
            mainBlur:props.mainBlur
        })
        this.onChange()
    },
    hide(id){
        if(id){
            this.dialogs=this.dialogs.filter(dialog=>dialog.id!==id)
        }else{
            this.dialogs.pop()
        }
        this.onChange()
    }
 }
 export default DialogOpt