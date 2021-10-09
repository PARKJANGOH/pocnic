import Profile from '/home/dmsgk724/pocnic/src/components/profile.js'
import { Form , Input , Button} from 'antd';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
export default function MypageSettingView() {


        const [prev,setPrev]=useState('');
        const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false);
   

    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
     
    };

    // Coustom Hook 후
    
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
   

    //반복되는 코드들을 Coustom Hook을 활용하여 줄여줄 수 있다.
    const useInput = (initValue = null) =>{
        const [value,setter] = useState(initValue);
        const handler = (e) => {
            setter(e.target.value);
        }
        return [value,handler];
    };

    const [nick,onChangeNick] = useInput('');
    const [password,onChangePassword] = useInput('');

    return (
        <>
        <Profile/>
        <Form onSubmit={onSubmit} style={{padding:10}}>
            <div>
                <label htmlFor="user-nick">*UserName</label><br/>
                <Input name="user-nick" value={nick} required onChange={onChangeNick} />
            </div>
            <div>
                <label htmlFor="user-password">*New Password</label><br/>
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <label htmlFor="user-password-check">*Confirm New Password</label><br/>
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
                {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
            </div>
            <div>
            </div>
            <div style={{marginTop:10}}>
            <Link to ="./Home">
                <Button type="primary" htmlType="submit" onClick={()=>alert('프로필 수정이 완료되었습니다!')} >가입하기</Button>
                </Link>
            </div>
        </Form>
        </>
    );}