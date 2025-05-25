import React from "react";
import { Container, Form, Card, Button, Row} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import {Context} from "../index.js"

const Auth = observer(() => {
  const location = useLocation()    //Отслеживание и навигация между страницами авторизации и регистрации
  const {user} = useContext(Context)
  const {basket} = useContext(Context)
  const isLogin = location.pathname === "/login"
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async() =>{            //Регистрация
    try{
    let data = await registration(username, password);
    user.setUser(user);
    user.setAuth(true);
    user.setRole(data.role);
    basket.setBasketId(data.userId);
    navigate('/');
    } catch (e){
      alert(e.response.data.message)
    }
  }
  const logIn = async() =>{           //Логин
    try{
      let data = await login(username, password);
      user.setUser(user);
      user.setAuth(true);
      user.setRole(data.role);
      basket.setBasketId(data.userId);
      navigate('/');
    }catch (e){
      alert(e.response.data.message)
    }
  }
  return (
    <Container className="d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}>
      <Card style={{width:600}} className = "p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация' }</h2>
      <Form className="d-flex flex-column">
        <Form.Control
          className="mt-4"
          placeholder="Введите логин"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Form.Control
          className="mt-4"
          placeholder="Введите пароль"
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        {isLogin ?        //Кнопка логина
        <Button 
        variant="outline-success" 
        className="d-flex justify-content-center mt-3"
        onClick={() => logIn()}
        >
          Войти
        </Button>
        :
        <Button          //Кнопка регистрации
        variant="outline-success" 
        className="d-flex justify-content-center mt-3"
        onClick={() => signIn()}
        >
          Зарегистрироваться
        </Button>
        }
        <Row className="d-flex justify-content-center mt-3">

        {isLogin ?  
        <div>
         Нет аккаунта? <NavLink to='/registration'>Зарегистрируйтесь</NavLink>
        </div>
        :
        <div>
         Есть аккаунт? <NavLink to='/login'>Войти</NavLink>
        </div>
        }
        </Row>
      </Form>
      </Card>
    </Container>
  );
})

export default Auth;
