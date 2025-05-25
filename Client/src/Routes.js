import AdminPage from "./page/AdminPage"
import BasketPage from "./page/BasketPage"
import Auth from "./page/Auth"
import Shop from "./page/Shop"
import ItemPage from "./page/ItemPage"
import PaymentPage from "./page/PaymentPage"
export const AuthRoutes = [

    {
        path: '/basket/:basketId',
        Component: BasketPage
    },
    {
        path: '/payment',
        Component: PaymentPage
    },

]
export const AdminRoutes = [
    {
        path: '/admin',
        Component: AdminPage
    },
]
export const PublicRoutes = [
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/registration',
        Component: Auth
    },
    {
        path: '/item/:id',
        Component: ItemPage
    },
    {
        path: '/',
        Component: Shop
    },
]