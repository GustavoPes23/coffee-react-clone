import { Products } from "../../components/products/products";

export const Store = (): string => {
    return `
        ${ Products() }
    `;
};