import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox,Cascader } from 'antd';
const FormItem = Form.Item;

const Root=styled.div`
    width:100%;
    height:100%;
    padding:10px;
    background:transparent;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .ant-input{
        background-color:rgba(255,255,255,.7);
        color:black;
        &[disabled]{
            background-color:rgba(255,255,255,.5);
            color:#333;
        }
    }
    .login-form {
        max-width: 300px;
    }
    .login-form-regist {
        float: right;
    }
    .login-form-forget{
        margin-left:20px;
    }
   .login-form-button {
        width: 100%;
    }
`;
const groups=[
    {
        value:1,
        label:'group1',
        children:[
            {
                value:11,
                label:'role1',
                children:[
                    {
                        value:111,
                        label:'user1',
                    },{
                        value:112,
                        label:'user2'
                    }
                ]
            },{
                value:12,
                label:'role2',
                children:[
                    {
                        value:121,
                        label:'user3'
                    },{
                        value:122,
                        label:'user4'
                    }
                ]
            }
        ]
    },
    {
        value:2,
        label:'group2',
        children:[
            {
                value:21,
                label:'role3',
                children:[
                    {
                        value:211,
                        label:'user5',
                    },{
                        value:212,
                        label:'user6'
                    }
                ]
            },{
                value:22,
                label:'role4',
                children:[
                    {
                        value:221,
                        label:'user7'
                    },{
                        value:222,
                        label:'user8'
                    }
                ]
            }
        ]
    }
]
class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      validateStatus:''
    }
  }
  componentWillMount(){
  }
  componentWillUnMount(){
  }

  onUserIdVerify(e){
    this.setState({validateStatus:'validating'});
    // let {verify}=this.props;//取出this.props中的verify
    // verify(e.target.value,this.onUserIdVerified.bind(this))
    //validate the userid from the server side
    setTimeout(()=>{
        this.onUserIdVerified(true)
    },300)
  }
  onUserIdVerified(res){
    this.setState({validateStatus:res?'success':'error'})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let {login}=this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login ?login(values) :''
      }else{
          console.log(err)
      }
    });
    this.props.onClose()
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Root>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2 style={{textAlign:'center',marginBottom:'10px'}}>用户登录</h2>
          <FormItem hasFeedback validateStatus={this.state.validateStatus}>
            {getFieldDecorator('userId', {
              initialValue:'1707150001',
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" onBlur={this.onUserIdVerify.bind(this)} />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              initialValue:'dydba',
              rules: [{ required: true, message: '请输入用户密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('group', {
              initialValue: [],
              rules: [{ type: 'array', required: true, message: '请选择要登录的组和角色!' }],
            })(
              <Cascader options={groups} placeholder="要登录的组和角色"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-form-regist">现在注册</a>
            <a className="login-form-forget">忘记密码？</a>
            <Button type="primary" ghost htmlType="submit" className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
      </Root>
    );
  }
}

export default Form.create()(LoginForm);