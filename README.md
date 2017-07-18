# ev-ui
## An ui library , some awesome components.  
Some Components are available now as below.
[Home](https://ev-ui.github.io "ev-ui")

### preview  
![Home](https://github.com/ev-ui/ev-ui/raw/dev/res/1.jpg)  
![Demo](https://github.com/ev-ui/ev-ui/raw/dev/res/2.jpg)  

### install
`npm install --save ev-ui`


### usage
first include your code in the `EvUI` component
```js
import {EvUI} from 'ev-ui'

...
    render(){
        return(
            <EvUI>
                your code
            </EvUI>
        )
    }
```

1. `Dialog`:  
* usage  
```js
import {Dialog} from 'ev-ui'
const props={
    content:Comp, //Component or string ,required
    mainBlur:false,// the background where filter blur if true,or else the background of the dialog it self will blur.
    onConfirm:()=>{},//function ,can be called when you click the confirm button,can be empty
    onCancel:()=>{} //function ,called when you click the cancel button can be empty
}
Dialog.show(props)
```
* screenshot  
![login](https://github.com/ev-ui/ev-ui/raw/dev/res/6.jpg)  
![create](https://github.com/ev-ui/ev-ui/raw/dev/res/7.jpg)  

2. `ContextMenu`:  
* usage
```js
import {ContextMenu,Menu,Item} from 'ev-ui'

export default class Demo extends React.Component{


    /**
    * first disable the default contextmenu
    */
    componentDidMount(){
        window.oncontextmenu=(e)=>{
            e.preventDefault()
        
    }
    /**
    * then bind the function to the node's onContextMenu event.
    */
    onContextMenu(e){
        let menu=new Menu()
            .add(new MenuItem('新建',()=>{})
                    .add(new MenuItem('A',()=>{}))
                    .add(new MenuItem('B',()=>{}))
                    .add(new MenuItem('C',()=>{}))
                )
            .add(new MenuItem('编辑',()=>{}))
            .add(new MenuItem('复制',()=>{}))
            .add(new MenuItem('剪切',()=>{}))
            .add(new MenuItem('粘贴',()=>{}))
            .add(new MenuItem('删除',()=>{}).type('remove'))
            
        ContextMenu.show({menu,left:e.pageX,top:e.pageY})
    }
    render(){
        return(
            <div onContextMenu={this.onContextMenu.bind(this)}>demo</div>
        )
    }
}
```  
* screenshot  
![ContextMenu](https://github.com/ev-ui/ev-ui/raw/dev/res/3.jpg)  

3. `Confirm`:  

* usage
```js
import {Confirm} from 'ev-ui'

Confirm.show(()=>{
    //called when you click confirm
},()=>{
    // called when you click cancel
})
```  
* screenshot
![Confirm](https://github.com/ev-ui/ev-ui/raw/dev/res/8.jpg)  

4. `ActionTag`:  
* usage
```js
    import {ActionTag} from 'ev-ui'
    //here use the Icon of the antd for demo,you can use others for example FontAwesome...
    import {Icon} from 'antd'

    render(){
        return(
            <div style={{display:flex,flexDirection:row,alignItems:center}}>
                <ActionTag
                    iconField={<Icon type='plus'/>}
                    textField='Create'
                    onClick={()=>{}}
                    />
                {/* set the type*/}
                <ActionTag
                    iconField={<Icon type='delete'/>}
                    textField='Remove'
                    type='danger'
                    onClick={()=>{}}
                    />
                {/* or set the size*/}
                <ActionTag
                    iconField={<Icon type='edit'/>}
                    textField='Edit'
                    size='large'
                    onClick={()=>{}}
                    />
            </div>
        )
    }
```  
* screenshot  
![ActionTag](https://github.com/ev-ui/ev-ui/raw/dev/res/5.jpg)  

5. `Flow`:  
* usage  
```js
import {Flow} from 'ev-ui'
const data=[
    {
        id:'0',
        name:'Flow0',
        tasks:[
            {point:0,name:'Task0',parent:[],children:[1]},
            {point:1,name:'Task1',parent:[0],children:[2,3]},
            {point:2,name:'Task2',parent:[1],children:[4]},
            {point:3,name:'Task3',parent:[1],children:[4]},
            {point:4,name:'Task4',parent:[2,3],children:[]},
        ]
    },  
    {
        id:'1',
        name:'Flow1',
        tasks:[
            {point:0,name:'Task0',parent:[],children:[1]},
            {point:1,name:'Task1',parent:[0],children:[2]},
            {point:2,name:'Task2',parent:[1],children:[3]},
            {point:3,name:'Task3',parent:[2],children:[4]},
            {point:4,name:'Task4',parent:[3],children:[]},
        ]
    }  
]

export default class Process extends React.Component{

    state={
        processes:data,
        selectedProcess:{}
    }

    onTaskChange(tasks){
        //update the tasks
    }
    onCreate(){
        //create process
    }
    
    render(){
        return(
            <div className='left-nav'>
                {/* show the processes list */}
            </div>
            <div className='content'>
                <Flow tasks={this.state.selectedProcess.tasks} 
                    onChange={this.onTasksChange.bind(this)}
                    onFlowCreate={this.onCreate.bind(this)}
                    selectedProcess={this.state.selectedProcess || {}}/>
            </div>
        )
    }
}
```  
* screenshot  
![Flow](https://github.com/ev-ui/ev-ui/raw/dev/res/4.jpg)   

The document will be added later.