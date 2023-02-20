import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="main">
      <header className="logo">Westagram</header>
      <div className="container">
        <input className="id" placeholder="전화번호,사용자 이름 또는 이메일" />
        <input className="password" placeholder="비밀번호" />
        <button className="account">로그인</button>
      </div>
      <p className="bottom">비밀번호를 잊으셨나요?</p>
    </div>
  );
};
export default Login;
