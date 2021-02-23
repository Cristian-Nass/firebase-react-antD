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
        layout="vertical"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: 'Please input your first name!' }]}
          >
          <Input className="input-register-form" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[{ required: true, message: 'Please input your last name!' }]}
          >
          <Input className="input-register-form" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email name!' }]}
          >
          <Input className="input-register-form" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          >
          <Input.Password className="input-register-form" />
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