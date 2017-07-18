import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'

const Root=styled.div`
    background:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-weight:100;
    .header{
        font-size:20px;
        padding:10px 50px;
        border-bottom:1px solid #ccc;
    }
    .content{
        flex-grow:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        .comp-list{
            margin-top:100px; 
            display:flex;
            flex-flow:row wrap;
            max-width:800px;
            &>.comp{
                width:100px;
                padding:30px 0;
                margin:20px;
                text-align:center;
                border-bottom:1px solid #eee;
            }
        }
        .tips{
            margin-top:30px;
            font-size:18px;
        }
    }
    .footer{
        
    }
`;
const comps=['Dialog','ContextMenu','Confirm','ActionTag','FreePane','FloatActionButton','Flow','ListView','Ripple','SearchBox','Tree','Loading']
export default class Introduction extends React.Component{

    render(){
        return(
            <Root {...this.props}>
                <header className="header">Current Components</header>
                <div className="content">
                    <div className="comp-list">
                    {
                        comps.map((comp,i)=>(
                            <div key={i} className="comp">{comp}</div>
                        ))
                    }
                    </div>
                    <span className='tips'>The details introduction will be added later...</span>
                </div>
                <div className="footer">
                </div> 
            </Root>
        )
    }    
}