import { useId, useState } from 'react';
import S from './Register.module.css'


function Register() {

  const emailId = useId();
  const pwId = useId();
  const pwConfirmId = useId();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirm,setPasswordConfirm] = useState('');
  const [error,setError] = useState<string|null>(null);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    

  }

  /* 
  
  1. email 상태 설정
  2. pw 상태 설정
  3. handler 연결하기
  4. supabase 통신하기 (signUp)
  5. error 처리하기


  회원가입 완료 -> supabase authentication refresh 이후 정보 확인
  */


  return (
    <div className={S.container}>
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <hr />
        <div>
          <label htmlFor={emailId}>이메일</label>
          <input 
            id={emailId}
            type="email"
            required 
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwId}>비밀번호</label>
          <input 
            id={pwId}
            type="password"
            required 
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwConfirmId}>비밀번호 확인</label>
          <input 
            id={pwConfirmId}
            type="password"
            required 
            onChange={(e)=>setPasswordConfirm(e.target.value)}
          />
        </div>
        <button type="submit">가입하기</button>
        {error && <p>Error!</p>}
      </form>
    </div>
  )
}

export default Register