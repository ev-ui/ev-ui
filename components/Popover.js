import React from 'react'
import {render} from 'react-dom'
import styled,{keyframes} from 'styled-components'
import Ripple from '../plugin/evolify/ripple.jsx'

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
    display:none;
    outline:none;
    transform-origin:top left;
    &.swift-in{
        animation:${swiftIn} .5s forwards;
    }
    &.swift-out{
        animation:${swiftOut} .5s forwards;
    }
`;

export default class ContextMenu extends React.Component{

    onBlur(){
        this.Root.classList.add('swift-out');
        setTimeout(()=>{
            this.Root.classList.remove('swift-out');
            this.props.onHide();
        },499)
    }

    componentDidUpdate(){
        if(this.props.visible){
            this.Root.focus();
        }
    }

    mapPropsToMenu(menu,sub){
        return(
            <ul className={'menu'+(sub?' subMenu':'')}>
                {
                    menu.map((menuItem,index)=>(
                        <li className='ripple' key={index}><Ripple className="menu-item" onClick={this.onClick.bind(this,menuItem.action)}>{menuItem.text}&nbsp;&nbsp;&nbsp;&nbsp;{menuItem.subMenu && menuItem.subMenu.length>0?'>':''}</Ripple>
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
        return(
            <Root id='root' className={this.props.visible?'swift-in':''} style={{display:this.props.visible?'inherit':'',left:this.props.left+'px',top:this.props.top+'px'}}
                tabIndex='-1'
                innerRef={root=>{this.Root=root}}
                onBlur={this.onBlur.bind(this)} >
                {this.props.content}
            </Root>
        )
    }
}