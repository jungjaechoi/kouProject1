import React,{useRef } from 'react';
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie"; 
import styled from "styled-components";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };


const Container = styled.div`
position: absolute;
z-index: -998;
top: 0;
right: 0;
width: 100%;
height: 100%;`;

const formStyle = {
    margin: 'auto',
    padding: '20px',
    border: '1px solid #c9c9c9',
    borderRadius: '10px',
    background: '#f5f5f5',
    width: '400px',
      display: 'block'
};

const appStyle = {
  height: '800px',
    display: 'flex'
};


const inputStyle = {
    margin: '10px 0 10px 0',
    padding: '10px', 
    border: '1px solid #bfbfbf',
    borderRadius: '6px',
    fontSize: '20px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '20px 0 0 0',
    padding: '10px 20px',
    border: '1px solid #efffff',
    borderRadius: '6px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '24px',
    color: 'white',
    display: 'block'
};

const Field = React.forwardRef(({placeholder, type}, ref) => {
    return (
      <div>
        <input ref={ref} type={type} placeholder={placeholder} style={inputStyle} />
      </div>
    );
});


const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username: "+usernameRef.current.value);
        console.log("pw: "+passwordRef.current.value);
        
        if (usernameRef.current.value === "" && passwordRef.current.value=== "") {
            alert("이메일 주소를 입력해주세요.");
            usernameRef.current.focus();
            //return;
          } else if (passwordRef.current.value === "") {
            alert("비밀번호를 입력해주세요.");
            passwordRef.current.focus();
            //return;
          } else{
            const send_param = {
              headers,
              email: usernameRef.current.value,
              password: passwordRef.current.value
            };
            
            axios //비동기 통신
              .post("http://localhost:4000/user/loginapp", send_param) //서버에 저 url 주소 보내주기
              //정상 수행
              .then(returnData => {
                if (returnData.status === 200) {
                  // console.log("login_id:" + returnData.data._id);
                  $.cookie("login_id", returnData.data._id, { expires: 1 });
                  $.cookie("login_name", returnData.data.name, { expires: 1 });
                  $.cookie("login_email", returnData.data.email, { expires: 1 }); //로그인 되면 쿠키값을 설정해줌 -> 쿠키값 여부로 로그인 여부 확인
                  alert(returnData.data.name+"님 환영합니다!");
                  //onSubmit(data);
                  window.location.href="http://localhost:3000/writepost";
                } else {
                    alert("로그인 실패!"); //로그인 실패
                }
              }).catch(err => {
                console.log(err);
                alert("오류!");
              });  
          }
        
    };


    return (
      <Container>
      <div style={appStyle}>
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={usernameRef} placeholder="이메일" type="text" />
        <Field ref={passwordRef} placeholder="비밀번호" type="password" />

        <div>
          <button style={submitStyle} type="submit">로그인</button>
        </div>
      </form>
      </div>
      </Container>
    );
};

export default Login;