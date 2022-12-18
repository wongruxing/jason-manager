import { ChangeEvent, useEffect, useState } from 'react'
import { Input, Space, Button } from 'antd';
import styles from './login.module.scss'
import initLoginBg from "./init"
import './login.less'
const view = () => {
    //加载完这个组件之后 加载背景
    useEffect(() => {
        initLoginBg();
        window.onresize = function () { initLoginBg() }
    }, []);
    // 获取用户输入信息
    const [usernameVal, setUsernameVal] = useState("");//定义用户输入用户名信息这个变量
    const [passwordVal, setPasswordVal] = useState("");//定义用户输入密码信息这个变量 
    const [captchaVal, setCaptchaVal] = useState("");//定义用户输入验证码信息这个变量
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 获取输入的用户名
        // console.log(e.target.value);
        // 修改usernameVal这个变量为用户输入的那个值 以后拿到usernameVal这个变量就相当于拿到用户输入信息的信息
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 获取输入的用户名
        // console.log(e.target.value);
        // 修改usernameVal这个变量为用户输入的那个值 以后拿到usernameVal这个变量就相当于拿到用户输入信息的信息
        setPasswordVal(e.target.value)
    }
    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 获取输入的用户名
        // console.log(e.target.value);
        // 修改usernameVal这个变量为用户输入的那个值 以后拿到usernameVal这个变量就相当于拿到用户输入信息的信息
        setCaptchaVal(e.target.value)
    }
    // 点击登录事件
    const gotoLogin = () => {
        console.log("用户输入的用户名 ，密码，验证码分别是：", usernameVal, passwordVal, captchaVal);

    }
    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: 'block' }}></canvas>
            {/* 登录盒子 */}
            {/* 加多个类名双引号前要加空格 */}
            <div className={styles.loginBox + " loginbox"}>
                <div className={styles.title}>
                    <h1>前端Jason&nbsp;·&nbsp;后台通用系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className='form'>
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder='用户名' onChange={usernameChange} />
                        <Input.Password placeholder='密码' onChange={passwordChange} />
                        <div className="captchaBox">
                            <Input placeholder='验证码' onChange={captchaChange} />
                            <div className="captchaImg">
                                <img height="38" src="" alt="" />
                            </div>
                        </div>
                        <Button
                            className='loginBtn'
                            type="primary"
                            block
                            onClick={gotoLogin}
                        >
                            登录
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default view