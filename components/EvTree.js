import React from 'react'
import {render} from 'react-dom'
import {Icon} from 'antd'
import styled from 'styled-components'

const Tree=styled.div`
    user-select:none;
    font-size:17px;
    padding-left:10px;
    ul{
        list-style:inherit;
        margin-left:20px;
    }
    li{
        list-style:none;
        .item{
            cursor:pointer;
            .text{
                margin-left:10px;
            }
        }
        .item:hover{
            background:#bbeeff;
        }
    }
`;
const data=[
    {
        name:"home",
        children:[
            {
                name:"01",
                children:[
                    {name:"011"}
                ]
            },
            {name:"02"},
            {name:"03"},
            {
                name:"04",
                children:[
                    {name:"041"},
                    {
                        name:"042",
                        children:[
                            {name:"0421"}
                        ]
                    }
                ]
            }
        ]
    }
]


class TreeNode extends React.Component{

    constructor(props){
        super(props)
        this.state={collapsed:false}
    }

    onNodeClick(){
        this.setState({collapsed:!this.state.collapsed})
    }

    render(){
        let data=this.props.dataSource;
        return(
            <li>
                <div className="item" onClick={this.onNodeClick.bind(this)}>
                    <span><Icon type={
                        data.children?
                        this.state.collapsed?"folder":"folder-open"
                        :"file"
                    } /></span>
                    <span className="text">{data.name}</span>
                </div>
                {
                    data.children?
                        <ul style={{display:this.state.collapsed?'none' :'inherit'}}>
                            {
                                data.children.map((item,index)=>
                                    <TreeNode key={index} dataSource={item}/>
                                )
                            }
                        </ul>
                        :''
                }
            </li>
        )
    }
}


export default class EvTree extends React.Component{

    componentDidMount(){
    }

    render(){
        let dataSource=this.props.dataSource;
        return(
            <Tree>
                <TreeNode dataSource={data[0]}/>
            </Tree>
        )
    }
}