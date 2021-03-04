import 'antd/dist/antd.css'
import React,{useState} from "react";

import {Card,Spin,Input,Button} from 'antd'
import Icon from "@ant-design/icons";
import './static/Login.css'

function Login() {
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    // const [timeout, setTimeout ] = useState(1000)
    const  checkLogin = ()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        },1000)
    }

    return(
        <div className='login-div'>
            <Spin tip='Loading...' spinning={isLoading} >
                <Card title='FYJ Blog System' bordered={true} style={{ width: 400 }}>
                    <Input
                        id='userName'
                        size="large"
                        placeholder='Enter your userName'
                        prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}
                        onChange={(e)=>(e.target.value)}
                    />
                    <Input.Password
                        id='userName'
                        size="large"
                        placeholder='Enter your userName'
                        prefix={<Icon type='key' style={{color:'rgba(0,0,0,.25)'}}/>}
                        onChange={(e)=>(e.target.value)}
                    />
                </Card>
            </Spin>
            <Button type="primary" block onClick={checkLogin}>Login in</Button>
        </div>
    )
}
export default Login