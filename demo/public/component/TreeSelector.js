import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import Tree from '__public/component/Tree'
const Root=styled.div`

`;

const data=[
    {name:'123'},
    {name:234},
    {name:'345'},
    {name:456,children:[
        {name:123},
        {name:'234'}
    ]}
]
export default class TreeSelector extends React.Component{

    render(){
        return(
            <Root>
                <Tree dataSource={data}/>
            </Root>
        )
    }
}