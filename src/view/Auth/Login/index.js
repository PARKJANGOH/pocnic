import { Form, Input, Button, Checkbox } from 'antd';




export default function AuthLoginView() {
  const onFinish = (values) => {
    //   console.log('Success:', values);
    //   const user = {
    //     "userName": "weproejfslkejfij",
    //     "userID": values.user.title,
    //     "email": "dsfe@xyz.com",
    //     "pw": "sdfae"
    // };
    // axios.post('http://localhost:4000/sign_up', user)
    //     .then(res => { alert(JSON.stringify(res)) });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form
        name="loginForm"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
        >
          <Button type="link" href="./register">
            Register
          </Button>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
