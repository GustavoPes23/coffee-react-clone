import { Home } from "./pages/home/index";
import { Store } from "./pages/store/index";
import { AboutUs } from "./pages/aboutUs/index";
import { Product } from "./pages/product/index";
import { Login } from "./pages/login/index";

import { IMapRoutes } from "./interfaces/IMapRoutes";

export const MapRoutes: IMapRoutes[] = [
    {
        link: "/",
        component: Home
    },
    {
        link: "/store",
        component: Store
    },
    {
        link: "/product",
        component: Product
    },
    {
        link: "/about-us",
        component: AboutUs
    },
    {
        link: "/login",
        component: Login
    }
];