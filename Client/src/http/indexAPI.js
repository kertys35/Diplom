import axios from "axios"

const $host = axios.create({        //Пользователь
    baseURL:process.env.REACT_APP_SERVER_URL
})
const $authHost = axios.create({    //Авторизованный пользователь
    baseURL:process.env.REACT_APP_SERVER_URL
})

const authInterceptor = config =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,
}