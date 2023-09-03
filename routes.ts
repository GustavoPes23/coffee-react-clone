import { Error } from "./pages/error/index";

import { IMapRoutes } from "./interfaces/IMapRoutes";
import { IPropsRenderComponent } from "./interfaces/IPropsRenderComponent";
import { DefaultParams } from "./types/DefaultParams";

import { MapRoutes } from "./MapRoutes";

const debounce = (el: string): Promise<boolean> => {
    return new Promise((resolve) => {
        const debounce: number = setInterval(() => {

            if (document.querySelector(el)) {
                clearInterval(debounce);
                resolve(true);
            }

        }, 20);
    });
};

const clearHTML = (el: Element): void => {
    el.innerHTML = "";
};

const createObjParams = (path: string): DefaultParams => {
    const queryString: string = path.split("?")[1];
    const params: URLSearchParams = new URLSearchParams(queryString);
    const obj: DefaultParams = {};

    for (const [key, value] of params) {
        obj[key] = value;
    }
    
    return obj;
};

const renderComponent = ({ currentRouter, params, content }: IPropsRenderComponent): void => {
    if (!currentRouter) {
        content.insertAdjacentHTML("afterbegin", Error());
        return;
    }

    content.insertAdjacentHTML("afterbegin", currentRouter.component(params));
};

const Routes = async (routers: IMapRoutes[]): Promise<void> => {
    await debounce("#content");

    const content: Element | null= document.querySelector("#content");
    const path: string = `/${window.location.href.split("/")[4]}`;
    const currentPath: string = path.split("?")[0];
    const params: DefaultParams = createObjParams(path);
    const currentRouter: IMapRoutes | undefined = routers.find((router: IMapRoutes): boolean => router.link === currentPath);

    clearHTML(content!);

    if (currentRouter && content) {
        renderComponent({ currentRouter, params, content });
    }
};

const changeURLWithoutReload = (url: string): void => {
    history.pushState(null, "", url);
};

const handleDocumentClick = (e: MouseEvent): void => {
    e.preventDefault();

    const target = e.target as HTMLElement;

    if (target) {
        const href: string | null = target.getAttribute("href");

        if (href) {
            changeURLWithoutReload(`/coffe-alpha${href}`);
            Routes(MapRoutes);
        }
    }
};

document.addEventListener("click", handleDocumentClick);

const initializeRouting = (): void => {
    Routes(MapRoutes);
};

export {
    initializeRouting
};