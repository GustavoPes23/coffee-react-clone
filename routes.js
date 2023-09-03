import { Error } from "./pages/error/index";
import { MapRoutes } from "./MapRoutes";
const debounce = (el) => {
    return new Promise((resolve) => {
        const debounce = setInterval(() => {
            if (document.querySelector(el)) {
                clearInterval(debounce);
                resolve(true);
            }
        }, 20);
    });
};
const clearHTML = (el) => {
    el.innerHTML = "";
};
const createObjParams = (path) => {
    const queryString = path.split("?")[1];
    const params = new URLSearchParams(queryString);
    const obj = {};
    for (const [key, value] of params) {
        obj[key] = value;
    }
    return obj;
};
const renderComponent = ({ currentRouter, params, content }) => {
    if (!currentRouter) {
        content.insertAdjacentHTML("afterbegin", Error());
        return;
    }
    content.insertAdjacentHTML("afterbegin", currentRouter.component(params));
};
const Routes = async (routers) => {
    await debounce("#content");
    const content = document.querySelector("#content");
    const path = `/${window.location.href.split("/")[4]}`;
    const currentPath = path.split("?")[0];
    const params = createObjParams(path);
    const currentRouter = routers.find((router) => router.link === currentPath);
    clearHTML(content);
    if (currentRouter && content) {
        renderComponent({ currentRouter, params, content });
    }
};
const changeURLWithoutReload = (url) => {
    history.pushState(null, "", url);
};
const handleDocumentClick = (e) => {
    e.preventDefault();
    const target = e.target;
    if (target) {
        const href = target.getAttribute("href");
        if (href) {
            changeURLWithoutReload(`/coffe-alpha${href}`);
            Routes(MapRoutes);
        }
    }
};
document.addEventListener("click", handleDocumentClick);
const initializeRouting = () => {
    Routes(MapRoutes);
};
export { initializeRouting };
