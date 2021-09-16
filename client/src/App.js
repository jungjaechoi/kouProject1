import Login from './loginRegister/Login';
import Register from "./loginRegister/Register";
import styled from "styled-components";

import { Route, NavLink } from "react-router-dom";



const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -999;`;

  const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 40px;
  margin-left: 19.5%;
  margin-top: 2%;
  padding-top: 5px;
  padding-bottom: 5px;
  /* margin: 10px 10px 10px 10px; */
  width: 17%;
  cursor: pointer;`;


function App() {

  let resultForm;
  const setstyle = {
    margin:"20px",
  }

  
  const getResultForm = () => {
   
      resultForm = 
      <Route exact path = "/">
      <Container>
       </Container>
        <div style ={
          setstyle 
        }>
        <div>
          <NavLink to="/login">
          <Button>로그인</Button>
        </NavLink>
        </div>
        <div>
        <NavLink to="/register">
          <Button>회원가입</Button>
        </NavLink>
        </div>
        </div>
       
      </Route>
        
    return resultForm;
  }

  getResultForm();
    
  return (
    <div>
      
      {resultForm}
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </div>
  );  
}

export default App;