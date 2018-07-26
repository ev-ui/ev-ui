import React from 'react'
import {render} from 'react-dom'
import styled,{keyframes} from 'styled-components'
import Ripple from './Ripple.js'

const swiftIn=keyframes`
    0%{
        transform:scale(0);
    }
    70%{
        transform:scale(1.1);
    }
    100%{
        transform:scale(1);
    }
`;
const swiftOut=keyframes`
    0%{
        transform:scale(1);
    }
    30%{
        transform:scale(1.1);
    }
    100%{
        transform:scale(0);
    }
`;

const Root=styled.div`
    position:fixed;
    outline:none;
    z-index:1000;
    transform-origin:top left;
    &:before{
        content:'';
        display:inherit;
        position:absolute;
        left:0;
        top:${props=>props.triggerTop-3+'px'};
        width:0;
        height:0;
        border-right:10px solid rgba(255,255,255,.95);
        border-top:6px solid transparent;
        border-bottom:6px solid transparent;
    }
    &.swift-in{
        animation:${swiftIn} .3s forwards;
    }
    &.swift-out{
        animation:${swiftOut} .3s forwards;
    }
    &>.menu{
        margin:-15px 0 0 10px;
    }
    .menu{
        border-radius:10px;
        box-shadow:2px 2px 25px -1px rgba(30,30,30,.6);
        // border:1px solid gray;
    }
    .menu>li{
        position:relative;
    }
    .menu.subMenu{
        position:absolute;
        left:100%;
        top:0;
        display:none;
    }
    .menu>li:hover>.subMenu{
        display:inherit;
    }
    .menu-item{
        min-width:100px;
        white-space:nowrap;
        text-align:center;
        background:rgba(255,255,255,.95);
        font-size:14px;
        padding:5px 30px;
        border-bottom:1px solid #aaa;
        cursor:pointer;
        &.remove{
            color:red;
            &:hover{
                background:#ee4411;
                color:white;
            }
        }
        &.disabled{
            color:#ccc;
        }
        &:hover{
            color:white;
            background:#55aaff;
            &.disabled{
                color:black;
                background:#aaa;
            }
        }
    }
    .menu>li:first-child>.menu-item{
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }
    .menu>li:last-child>.menu-item{
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
        border:none;
    }
`;

class ContextMenu extends React.Component{

    constructor(props){
        super(props)
        this.state={
            top:props.top
        }
    }

    onClick(menuItem){
        if(menuItem.type!=='disabled'){
            menuItem.action?menuItem.action():'';
            this.onBlur();
        }
    }

    onBlur(){
        this.Root.classList.add('swift-out');
        setTimeout(()=>{
            this.Root.classList.remove('swift-out');
            ContextMenuOpt.hide();
        },299)
    }
    componentDidMount(){
        const Root=this.Root
        this.Root.focus()
        if(Root.offsetTop+Root.offsetHeight>window.innerHeight){
            this.setState({
                top:window.innerHeight-Root.offsetHeight-10
            })
        }
    }

    mapPropsToMenu(menu,sub){
        return(
            <ul className={'menu'+(sub?' subMenu':'')}>
                {
                    menu.map((menuItem,index)=>(
                        <li className='ripple' key={index}><Ripple className={"menu-item "+menuItem.type} onClick={this.onClick.bind(this,menuItem)}>{menuItem.text}&nbsp;&nbsp;&nbsp;&nbsp;{menuItem.subMenu && menuItem.subMenu.length>0?'>':''}</Ripple>
                            {
                                menuItem.subMenu && menuItem.subMenu.length>0?this.mapPropsToMenu(menuItem.subMenu,true)
                                :''
                            }
                        </li>
                    ))
                }
            </ul>
        )
    }

    render(){
        let menu = this.props.menu||[];
        const triggerTop=this.props.top-this.state.top
        return(
            <Root id='root' className={'swift-in'} style={{left:this.props.left+'px',top:this.state.top+'px'}}
                triggerTop={triggerTop}
                tabIndex='-1'
                innerRef={root=>{this.Root=root}}
                onBlur={this.onBlur.bind(this)} >
                {this.mapPropsToMenu(menu)}
            </Root>
        )
    }
}
export class MenuItem{
    /**
     * Constructor
     * @param {string} text 
     * @param {function} action 
     */
    constructor(text,action){
        this._text=text;
        this._action=action;
        this._subMenu=new Menu();
    }

    type(type){
        this._type=type;
        return this;
    } 
    icon(icon){
        this._icon=icon;
        return this;
    }
    action(action){
        this._action=action;
        return this;
    }

    /**
     * Add subMenuItem
     * @param {MenuItem} menuItem 
     */
    add(menuItem){
        this._subMenu.add(menuItem);
        return this;
    }
    /**
     * clear the subMenu of the menuItem
     */
    clear(){
        this._subMenu.clear();
        return this;
    }
}
export class Menu{
    constructor(){
        this.menu=[];
    }
    notEmpty(){
        return this.menu && this.menu.length>0;
    }
    /**
     * add menuItem
     * @param {MenuItem}menuItem
     * @return Menu
     */
    add(menuItem){
        this.menu.push(menuItem);
        return this;
    }
    /**
     * clear the menu
     */
    clear(){
        this.menu.length=0;
        return this;
    }
    mapMenuToProps(menu){
        let _menu=menu || this.menu;
        return _menu.map(menuItem=>({
            text:menuItem._text,
            action:menuItem._action,
            type:menuItem._type,
            icon:menuItem._icon,
            subMenu:menuItem._subMenu.notEmpty() ?this.mapMenuToProps(menuItem._subMenu.menu) :null
        }))
    }
}
const ContextMenuOpt = {
    observer:null,
    view:null,
    onChange(){
        if (typeof this.observer==='function'){
            this.observer()
        }
    },
    subscribe(observer){
        this.observer=observer 
    },
    show({menu,left,top}){
        if(this.view){
            setTimeout(()=>{
                this.view=<ContextMenu menu={menu.mapMenuToProps()} left={left} top={top}/>
                this.onChange()
            },300)
        }else{
            this.view=<ContextMenu menu={menu.mapMenuToProps()} left={left} top={top}/>
            this.onChange()
        }
    },
    hide(){
        this.view=null
        this.onChange()
    }
}
export default ContextMenuOpt