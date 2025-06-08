import './App.css';
import {BrowserRouter} from "react-router-dom"
import AppRouter from './components/AppRouter';
import NavBar from './components/navBar.js'
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from './index.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { auth } from './http/userAPI.js';
import { Spinner } from 'react-bootstrap';
import { getBasket, getOneBasketItem } from './http/basketAPI.js';
import { getOneItem } from './http/itemAPI.js';

const App = observer(() => {
  const {user} = useContext(Context);
  const [load, setLoad] = useState(true);
  const {basket} = useContext(Context);
  const [cart, setCart] = useState([])  //Отслеживание состояния корзины
  useEffect(() => {       //Сохранение авторизации пользователя при перезагрузке страницы
    setTimeout(() => {
    auth().then(data => {
      user.setUser(true);
      user.setAuth(true);
      user.setRole(data.role);
      basket.setBasketId(data.userId);
    },(data => {
      user.setUser({});
      user.setAuth(false);
    }) ).finally(() => setLoad(false))
    }, 1000)
  }, [])

  useEffect(() => {
     const loadBasketItems = async() =>  {    //Получение данных о корзине  
                const itemIds = await getBasket(basket.basketId);
                
                const itemsPromises = itemIds.map(id => getOneItem(id.itemId));
                const items = await Promise.all(itemsPromises);
                
                await basket.setBasketItems(itemIds);
                await basket.setItems(items);
              let data = [];
              basket.items.map(value => {
                  getOneBasketItem(basket.basketId, value.itemId).then(quantity => {
                  data.push({itemId:value.itemId, name:value.name, description:value.description, price:value.price, img:value.img, quantity:quantity.quantity});
                })
                
              })
           
          setCart(data);         
          await basket.setItems(data);     
          return data;
        }
      loadBasketItems()
  }, [user.role])


  if (load) {
    return <Spinner animation={'grow'}/>
  }
  return (
    <BrowserRouter>
    <NavBar/>
    <AppRouter cart ={cart} setCart = {setCart} />
    </BrowserRouter>
  );
})

export default App;
