import React from 'react'
import {render} from 'react-dom'
import styled,{keyframes} from 'styled-components'
const confirmIn=keyframes`
    0%{
        left:100%;
        top:0; 
    }
    70%{
        left:60%;
        top:100%;
    }
    100%{
        left:50%;
        top:50%;
    }
`;
const confirmOut=keyframes`
    0%{
        transform:translate(-100px,-50%);
        color:transparent;
    }
    100%{
        transform:translate(-100px,-50%) scale(30);
        color:transparent;
        opacity:.3;
    }
`;
const cancelIn=keyframes`
    0%{
        left:0;
        top:100%
    }
    70%{
        left:40%;
        top:0;
    }
    100%{
        left:50%;
        top:50%;
    }
`;
const cancelOut=keyframes`
    0%{
        transform:translate(100px,-50%);
        color:transparent;
    }
    100%{
        transform:translate(100px,-50%) scale(30);
        color:transparent;
        opacity:.3;
    }
`;
const Root=styled.div`
    z-index:1000;
    user-select:none;
    .btn{
        position:fixed;
        top:50%;
        left:50%;
        width:100px;
        height:100px;
        line-height:100px;
        text-align:center;
        font-size:20px;
        font-weight:100;
        border-radius:50%;
        color:white;
        cursor:pointer;
    }
    .btn-confirm{
        background:#33bb77;
        transform:translate(-100px,-50%);
        &:hover{
            box-shadow:0px 0px 70px #33bb77;
        }
        &.confirm-in{
            animation:${confirmIn} .3s;
        }
        &.confirm-out{
            animation:${confirmOut} .3s;
        }
    }
    .btn-cancel{
        background:#ee5533;
        transform:translate(100px,-50%);
        &:hover{
            box-shadow:0px 0px 50px #ee5533;
        }
        &.cancel-in{
            animation:${cancelIn} .3s;
        }
        &.cancel-out{
            animation:${cancelOut} .3s;
        }
    }
`;
export default class Confirm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            confirmed:false,
            canceled:false
        }
    }

    componentDidMount(){
        this.setState({
            winWidth:window.innerWidth,
            winHeight:window.innerHeight
        })
        this.Root.style.display=this.props.visible?'inherit':'none';
        this.props.onVisible?this.props.onVisible(this.props.visible):'';
        this.btnConfirm.addEventListener('animationend',this.animationEnd.bind(this));
        this.btnCancel.addEventListener('animationend',this.animationEnd.bind(this));
    }
    componentWillReceiveProps(nextProps){
        if(this.props.visible!==nextProps.visible){
            this.props.onVisible ?this.props.onVisible(nextProps.visible):''
        }
    }

    animationEnd(){
        this.Root.style.display=this.props.visible?'inherit':'none';
        this.setState({
            confirmed:false,
            canceled:false
        })
    }

    onConfirm(){
        this.setState({
            confirmed:true
        })
        this.props.onConfirm ?this.props.onConfirm() :'';
        this.onClick();
    }
    onCancel(){
        this.setState({
            canceled:true
        })
        this.props.onCancel ?this.props.onCancel() :'';
        this.onClick();
    }
    onClick(){
        this.props.hideConfirm ?this.props.hideConfirm() :'';
    }

    render() {
        return(
            <Root 
            innerRef={root=>this.Root=root} 
            winWidth={this.state.winWidth}
            winHeight={this.state.winHeight}
            style={{display:this.props.visible ?'inherit' :''}}>
                <div ref={btnConfirm=>this.btnConfirm=btnConfirm} 
                    onClick={this.onConfirm.bind(this)} 
                    style={{display:this.state.canceled?'none':''}}
                    className={"btn btn-confirm"+(this.state.confirmed?' confirm-out':' confirm-in')}>确 认</div>
                <div ref={btnCancel=>this.btnCancel=btnCancel} 
                    onClick={this.onCancel.bind(this)} 
                    style={{display:this.state.confirmed?'none':''}}
                    className={"btn btn-cancel"+(this.state.canceled?' cancel-out':' cancel-in')}>取 消</div>
            </Root> 
        )
    }
}