import React, { useContext, useState } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import { AdminRoutes, AuthRoutes, PublicRoutes } from "../Routes";
import { Context } from "../index.js";


const AppRouter = ({cart, setCart}) => {
  const {user} = useContext(Context);

  return (
    //Список путей сайта
    <Routes>    
      {user.isAuth === true && AuthRoutes.map(({path, Component}) =>  //Авторизованный аккаунт
       <Route key = {path} path={path} element={<Component cart = {cart} setCart = {setCart} />} />
      )}
      {user.isAuth === true && user.role === 'ADMIN' && AdminRoutes.map(({path, Component}) =>  //Авторизованный аккаунт
       <Route key = {path} path={path} element={<Component cart = {cart} setCart = {setCart} />} />
      )}
      {PublicRoutes.map(({path, Component}) =>  //Общедоступные пути
      <Route key = {path} path={path} element={<Component cart = {cart} setCart = {setCart}/>} /> 
      )}
      <Route path="*" element={<Navigate to="/" replace cart = {cart} setCart = {setCart}/>}/>
    </Routes>
  );
}

export default AppRouter;