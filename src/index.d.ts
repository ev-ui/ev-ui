declare module 'ev-ui'{
    import * as React from 'react'
    
    interface IDialog{
        show(props:any):void
        hide(p:any):void
    }
    interface IConfrim{
        show(f:Function):void
    }
    interface IDrawer{
        show(props:any):void
        top(content:any):void
        right(content:any):void
        bottom(content:any):void
        left(content:any):void
        hide():void
    }
    interface ILoading{
        show():void
        hide():void
    }
    export class EvUI extends React.Component<any,any>{}
    export const Dialog:IDialog
    export const Confirm:IConfrim
    export const Drawer:IDrawer
    export const Loading:ILoading
    export class ActionTag extends React.Component<any,any>{}
    export class Img extends React.Component<any,any>{}
    export class Card extends React.Component<any,any>{}
    export class Tree extends React.Component<any,any>{}
}