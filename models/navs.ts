import { INavsProps } from "../interfaces/INavsProps";

export const Navs: INavsProps[] = [
    {
        id: "home-nav",
        name: "Home",
        href: "/",
        child: null
    },
    {
        id: "store-nav",
        name: "Store",
        href: "/store",
        child: "/product"
    },
    {
        id: "about-us-nav",
        name: "About us",
        href: "/about-us",
        child: null
    }
];
