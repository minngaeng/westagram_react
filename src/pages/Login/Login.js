import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };
  return (
    <div className="login">
      <header className="logo">Westagram</header>
      <div className="container">
        <input className="id" placeholder="전화번호,사용자 이름 또는 이메일" />
        <input className="password" placeholder="비밀번호" />
        <button onClick={goToMain} className="account">
          로그인
        </button>
      </div>
      <p className="bottom">비밀번호를 잊으셨나요?</p>
    </div>
  );
};
export default Login;
