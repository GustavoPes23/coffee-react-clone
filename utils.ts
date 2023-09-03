export const loadStyleSheet = (url: string): void => {
    try {
        const path: string = `/coffe-alpha${url}`;
        const styleElement: HTMLLinkElement = document.createElement("link");
        styleElement.rel = "stylesheet";
        styleElement.href = path;

        document.head.appendChild(styleElement);
    } catch (err) {
        console.error(`Erro ao carregar style: ${err}`)
    }
};