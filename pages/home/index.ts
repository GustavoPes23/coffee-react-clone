import { Carousel } from "../../components/carousel/carousel";
import { Products } from "../../components/products/products";
import { History } from '../../components/history/history';

export const Home = (): string => {
    return `
        ${ Carousel() }
        ${ Products() }
        ${ History() }
    `;
};