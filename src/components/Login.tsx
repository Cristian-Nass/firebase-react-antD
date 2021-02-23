import React from "react";
import {Form, Input, Button} from 'antd';
import FirebaseWrapper from "./../services/firebaseWrapper";

const Login = () => {

  const onFinish = (values: any) => 
  {
    FirebaseWrapper.register(values);
  }

  const onFinishFailed = () => 
  {
    console.log('Test');
  }


	return (
    <div className="login-main-window">
      <Form className="login-form-container"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;