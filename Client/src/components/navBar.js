import React, {useContext} from "react";
import { Context } from "..";
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const {basket} = useContext(Context);
    const logOut = () =>{   //Функция выхода из аккаунта
      user.setUser({});
      user.setAuth(false);
      localStorage.removeItem('token');
      navigate('/');
    }
    return(
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <NavLink style={{color:'white', textDecoration: 'none'}} to = '/'>Comfy shopping</NavLink>
        {user.isAuth && user.role === 'USER' ? 
        <Nav className="ml-auto" style ={{color:'white'}}>
            <Button variant="outline-light" onClick={() => navigate('/basket/'+ basket.basketId)} className = "me-2" >Корзина</Button>
            <Button variant="outline-light" onClick={()=> logOut()}>Выйти</Button>
        </Nav>
        :
        <></>
        }
        {!user.isAuth ?
        <Nav className="ml-auto" style ={{color:'white'}}>
            <Button variant="outline-light" onClick={() => navigate('/login')}>Авторизация</Button>
        </Nav> 
        :
         <></>}
        {user.isAuth && user.role === 'ADMIN' ?
        <Nav className="ml-auto" style ={{color:'white'}}>
            <Button variant="outline-light" onClick={() => navigate('/admin')} className = "me-2" >Админ</Button>
            <Button variant="outline-light" onClick={() => navigate('/basket/'+ basket.basketId)} className = "me-2" >Корзина</Button>
            <Button variant="outline-light" onClick={()=> logOut()}>Выйти</Button>
        </Nav>  
        :
        <></>
        }
      </Container>
    </Navbar>
    )
})
export default NavBar;