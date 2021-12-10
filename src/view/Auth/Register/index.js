import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

import axios from 'axios';

const Signup = () => {

  const onFinish = (values) => {
    console.log("%content is: ", "color:green", values.user);
    // axios.post({
    //     'content': content
    // }).then(resp)
    const user = {
      "userName": values.user.userName,
      "userID": values.user.userID,
      "email": values.user.email,
      "pw": values.user.pw
    };
    axios.post('http://localhost:4000/sign_up', user)
      .then(function (response) {
        if (response.status >= 200 && response.status <= 204) { alert("회원가입이 완료되었습니다!") }

      })
      .catch(function (error) {
        alert("이미 동일한 ID를 갖는 사용자가 있습니다. 다시 가입해주세요");
      })

  };


  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    /**검증 로직 만들기
     * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
     * 2. 약관 동의를 확인한다.
     */
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      email,
      nick,
      password,
      passwordCheck,
      term,
    });
  };

  // Coustom Hook 후

  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = (e) => {
    //체크박스 초기화
    setTermError(false);
    setTerm(e.target.checked);
  };

  //반복되는 코드들을 Coustom Hook을 활용하여 줄여줄 수 있다.
  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = (e) => {
      setter(e.target.value);
    };
    return [value, handler];
  };

  const [email, onChangeEmail] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");


  return (
    <div>
      <Form onSubmit={onSubmit} style={{ padding: 10 }} onFinish={onFinish}>
        <br />
        <div>
          <Form.Item
            name={['user', 'email']}
            label="이메일"
            rules={[
              {
                required: true,
              },
            ]}

          >
            <Input onChange={onChangeEmail} />
          </Form.Item>
        </div>
        <div>

          <Form.Item
            name={['user', 'userID']}
            label="아이디"
            rules={[
              {
                required: true,
              },
            ]}

          >
            <Input onChange={onChangeNick} />
          </Form.Item>
        </div>

        <div>

          <Form.Item
            name={['user', 'userName']}
            label="사용자 이름"
            rules={[
              {
                required: true,
              },
            ]}

          >
            <Input onChange={onChangeEmail} />
          </Form.Item>
        </div>
        <div>

          <Form.Item
            name={['user', 'pw']}
            label="암호"
            rules={[
              {
                required: true,
              },
            ]}

          >
            <Input type="password" onChange={onChangePassword} />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name={'confirm password'}
            label="confirm password"
            rules={[
              {
                required: true,
              },
            ]}

          >
            <Input
              value={passwordCheck}
              onChange={onChangePasswordChk}
            />
          </Form.Item>
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}

        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            개인정보를 입력하는 데 동의하십니까? 다른 곳에 이용되지 않을
            것입니다.
          </Checkbox>
          <br />
          {termError && (
            <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>

          <Button type="primary" htmlType="submit">
            가입하기
          </Button>

        </div>
      </Form>
    </div>
  );
};
//ID와 비번
export default Signup;
