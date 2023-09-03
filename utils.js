export const loadStyleSheet = (url) => {
    try {
        const path = `/coffe-alpha${url}`;
        const styleElement = document.createElement("link");
        styleElement.rel = "stylesheet";
        styleElement.href = path;
        document.head.appendChild(styleElement);
    }
    catch (err) {
        console.error(`Erro ao carregar style: ${err}`);
    }
};
