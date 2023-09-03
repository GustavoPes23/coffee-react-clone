import Index from "./index.js";

const initializeApp = (): void => {
  const app: HTMLElement | null = document.getElementById("app");
  app!.textContent = "";
  app!.appendChild(document.createRange().createContextualFragment(Index()));
};

document.addEventListener("DOMContentLoaded", initializeApp);