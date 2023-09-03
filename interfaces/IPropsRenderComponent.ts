import { IMapRoutes } from "./IMapRoutes"

import { DefaultParams } from "../types/DefaultParams"

export interface IPropsRenderComponent {
    currentRouter: IMapRoutes,
    params: DefaultParams,
    content: Element
};