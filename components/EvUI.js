import React from 'react'
import {render} from 'react-dom'
import Dialog from './Dialog.js'
import ContextMenu from './ContextMenu.js'
import Confirm from './Confirm.js'

export default class EvUI extends React.Component{
    state={
        mainBlur:false,
        dialogs:[],
        ctxMenu:null,
        confirm:null
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        Dialog.subscribe(this.onDialogChange.bind(this))
        ContextMenu.subscribe(this.onContextMenuChange.bind(this))
        Confirm.subscribe(this.onConfirmChange.bind(this)) 
    }
    onDialogChange(){
        this.setState({
            dialogs:Dialog.dialogs,
            mainBlur:Dialog.dialogs.some(d=>d.mainBlur)
        })
    }
    onContextMenuChange(){
        this.setState({ctxMenu:ContextMenu.view})
    }
    onConfirmChange(){
        this.setState({
            confirm:Confirm.view,
            mainBlur:Confirm.view!==null
        })
    }

    render(){
        return(
            <div {...this.props}>
                <div id='app-main' style={{filter:this.state.mainBlur ?'blur(10px) brightness(80%)':'none'}}>
                    {this.props.children}
                </div>
                {
                    this.state.dialogs.map((d,i)=>d.dialog)
                }
                {
                    this.state.ctxMenu ?ContextMenu.view :''
                }
                {
                    this.state.confirm ?Confirm.view :''
                }
            </div>
        )
    }
}