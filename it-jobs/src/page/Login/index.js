import { Button, Card, Checkbox, Form, Input, message } from 'antd';
import { getUserCompany } from '../../sevices/companySevice';
import { setCookie } from '../../helper/cookie';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../acttion';
function Login() {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const rule = [
        {
            required: true,
            message: 'Please input your username!',
        }
    ];

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = async (values) => {
        const email = values.email;
        const password = values.password;
        const response = await getUserCompany(email, password);
        console.log(response);
        if (response.length > 0) {
            setCookie("email", response[0].email, 1);
            setCookie("password", response[0].password, 1);
            setCookie("token", response[0].token, 1);
            setCookie("companyName", response[0].companyName, 1);
            setCookie("id", response[0].id, 1);
            setTimeout(() => {
                navigate("/");
                dispatch(checkLogin(true));
            })

        } else {
            messageApi.open({
                type: 'error',
                content: 'This is an error message',
            });
        }
    };


    return (

            <Card 
                title="Đăng Nhập Tài Khoản Công Ty"
                style={{
                    width: 600,
                    margin:"80px",
                }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
               
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={rule}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={rule}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Đăng Nhập
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        
    )
}
export default Login 