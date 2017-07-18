import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import Tree from '__public/component/Tree'
import {Button} from 'antd'
const Root=styled.div`
    border:1px solid #aaa;
    max-width:500px;
    &>.content{
        display:flex;
        flex-direction:row!important;
        align-items:stretch!important;
        .tree-wrapper{
            width:200px;
            height:300px;
            background:#f0f0f0;
            flex-grow:1;
        }
        .action-bar{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            .btn-group .ant-btn{
                display:block;
            }
        }
    }
`;
function mapDataSource(data){
    return data.map(d=>({
        ...d,
        key:d.uid,
        name:d.name || d.objectName,
        children:d.children?mapDataSource(d.children) :null
    }))
}
export default class Shuttle extends React.Component{

    state={
        selectedSourceKeys:[],
        selectedTargetKeys:[],
        targetKeys:[]
    }

    constructor(props){
        super(props)
        this.data=mapDataSource(props.dataSource || [])
    }

    componentWillReceiveProps(nextProps){
        if(this.props.dataSource!==nextProps.dataSource){
            this.data=mapDataSource(nextProps.dataSource || [])
        }
        if(this.state.targetKeys.length<=0 && nextProps.targetKeys){
            this.setState({
                targetKeys:nextProps.targetKeys
            })
        }
    }

    inTarget(key){
        return this.state.targetKeys.some(k=>k===key)
    }
    shouldInTarget(data){
        return this.inTarget(data.key) || data.children && data.children.some(d=>this.shouldInTarget(d))
    }
    shouldNotInTarget(data){
        return this.state.selectedTargetKeys.some(k=>k===data.key) || data.children && data.children.some(d=>this.shouldNotInTarget(d))
    }

    filterSourceData(data){
        return data
            .filter(d=>!this.inTarget(d.key))
            .map(d=>({
                ...d,
                children:d.children ?this.filterSourceData(d.children) :null
            }))
    }

    filterTargetData(data){
        return data
            .filter(d=>this.shouldInTarget(d))
            .map(d=>({
                ...d,
                children:d.children ?this.filterTargetData(d.children) :null
            }))
    }

    onSourceSelectChange(keys){
        this.setState({
            selectedSourceKeys:keys
        })
    }
    onTargetSelectChange(keys){
        this.setState({
            selectedTargetKeys:keys
        })
    }
    mapDataToKeys(data){
        return new Array([]).concat(data).reduce((d1,d2)=>d1.concat(d2.key,this.mapDataToKeys(d2.children || [])))
    }

    findPanrentKeys(data,key){
        return new Array([]).concat(data).reduce((d1,d2)=>d1.concat(d1.children ? d1.children.some(d=>d.key===key) ?d1.key :this.findPanrentKeys(d1.children,key) :[]))
    }
    filterNotInTargetKeys(data){
        return new Array(this.state.selectedTargetKeys).concat(data).reduce((d1,d2)=>d1.concat(d2.children ? d2.children.some(d=>this.state.selectedTargetKeys.some(k=>k===d.key)) ?d2.key :this.findPanrentKeys(d2.children) :[]))
    }

    /**
     * 
     * @param {boolean} all 是否全选
     */
    onSelect(all){
        const data=this.data
        const {onChange}=this.props
        const tks= all===true ?this.mapDataToKeys(data)
            :this.state.targetKeys.concat(this.state.selectedSourceKeys.filter(k=>!this.inTarget(k)));
        this.setState({
            targetKeys:tks
        },()=>onChange?onChange(this.filterTargetData(data)) :'')
    }

    /**
     * 
     * @param {boolean} all 是否取消全部选择
     */
    onUnSelect(all){
        const data=this.data
        const {onChange}=this.props
        this.setState({
            targetKeys:all===true ?[] :this.state.targetKeys.filter(k=>!this.filterNotInTargetKeys(data).some(sk=>sk===k))
        },()=>onChange?onChange(this.filterTargetData(data)) :'')
    }

    render(){
        const data=this.data
        const sourceData=this.filterSourceData(data)
        const targetData=this.filterTargetData(data)
        return(
            <Root {...this.props}>
                <div className="content">
                    <div className="tree-wrapper source">
                        <Tree dataSource={sourceData} 
                            onSelectChange={this.onSourceSelectChange.bind(this)}/>
                    </div>
                    <div className="action-bar">
                        <span className="btn-group">
                            <Button icon='double-right' type='primary' ghost size='small'
                                onClick={this.onSelect.bind(this,true)}/>
                            <Button icon='right' disabled={this.state.selectedSourceKeys.length<=0} size='small'
                                onClick={this.onSelect.bind(this)}/>
                        </span>
                        <span className="btn-group">
                            <Button icon='left' disabled={this.state.selectedTargetKeys.length<=0} size='small'
                                onClick={this.onUnSelect.bind(this)}/>
                            <Button icon='double-left' type='primary' ghost size='small' 
                                onClick={this.onUnSelect.bind(this,true)}/>
                        </span>
                    </div>
                    <div className="tree-wrapper target">
                        <Tree dataSource={targetData}
                            onSelectChange={this.onTargetSelectChange.bind(this)}/>
                    </div>
                </div>
            </Root>
        )
    }
}