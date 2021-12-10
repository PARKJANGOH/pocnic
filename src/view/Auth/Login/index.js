import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';



export default function AuthLoginView() {
  const onFinish = (values) => {
    // console.log("%content is: ", "color:green", values.user);
    const user = {
      "userID": values.user.userID,
      "pw": values.user.pw
    };
    axios.post('http://localhost:4000/login', user)
      .then(function (response) {
        console.log(response);
        if (response.data == '') { alert("없는 회원입니다! 먼저 회원 가입을 진행해주세요 "); }
        else {
          alert("로그인이 완료되었습니다!");
        }

      })
      .catch(function (error) {
        alert("알수 없는 에러 발생");
      })
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
          label="userID"
          name={['user', 'userID']}
          rules={[
            {
              required: true,
              message: 'Please input your userID!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="pw"
          name={['user', 'pw']}
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
