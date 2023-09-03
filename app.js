import Index from "./index.js";
const initializeApp = () => {
    const app = document.getElementById("app");
    app.textContent = "";
    app.appendChild(document.createRange().createContextualFragment(Index()));
};
document.addEventListener("DOMContentLoaded", initializeApp);
