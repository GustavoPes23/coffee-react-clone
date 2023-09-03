import { Navs } from "../../models/navs.js";

import { INavsProps } from "../../interfaces/INavsProps";

const getPathActive = (): string => {
  const path: string = `/${window.location.href.split("/")[4]}`;
  return path.split("?")[0];
};

const generateNavLink = ({ href, id, name, child = null }: INavsProps): string => {
  const path: string = getPathActive();
  const isActive: boolean = path === href || path === child;
  const activeClass: string = isActive ? "fw-bolder" : "";

  return `
    <a class="text-decoration-none nav-rout-link text-secondary ${activeClass}" href="${href}" id="${id}"
    onclick="document.querySelector('.nav-rout-link.fw-bolder').classList.remove('fw-bolder'); this.classList.add('fw-bolder')">
      ${name}
    </a>
  `;
};

const initializeNavs = (): string => Navs.map(generateNavLink).join("");

export const Navbar = (): string => `
  <div class="col-12">
    <div class="row justify-content-between align-items-center">
      <div class="col-auto">
        <a class="text-decoration-none text-dark text-uppercase" href="/">
          <h4>E-commerce</h4>
        </a>
      </div>
      <div class="col-8">
        <div class="d-flex align-items-center justify-content-center gap-4 text-uppercase navbar-container">
          ${initializeNavs()}
        </div>
      </div>
      <div class="col-auto">
        <div class="d-flex">
          <button type="button" class="btn">
            <i class="fa-solid fa-cart-shopping text-muted"></i>
          </button>
          <button type="button" class="btn">
            <i class="fa-solid fa-user text-muted"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr class="w-100"/>
`;
