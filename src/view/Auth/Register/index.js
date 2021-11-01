import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

const Signup = () => {
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
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-email">*Email</label>
          <br />
          <Input
            name="user-Email"
            value={email}
            required
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="user-nick">*UserName</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">*Password</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">*Confirm Password</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordChk}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            Email과 개인정보를 입력하는 데 동의하십니까? 다른 곳에 이용되지 않을
            것입니다.
          </Checkbox>

          {termError && (
            <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Link to="./login">
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </Link>
        </div>
      </Form>
    </>
  );
};
//ID와 비번
export default Signup;
