import { Navbar } from "./components/navbar/navbar.js";
import { Footer } from "./components/footer/footer.js";
import { initializeRouting } from "./routes.js";

const Index = (): string => {
    return `
        <div class="container py-4">
            ${Navbar()}
            <div id="content"></div>
            ${Footer()}
        </div>
    `
};

initializeRouting();

export default Index;