import { Carousels } from "../../models/carousels";
export const Carousel = () => {
    const generateCarouselItem = ({ src, alt }, index) => {
        const isActive = index === 0 ? "active" : "";
        return `
        <div class="carousel-item ${isActive}" style="height: 16rem; width: 100%;">
          <img src="${src}" class="d-block w-100 rounded" alt="${alt}">
        </div>
      `;
    };
    const initializeCarouselItems = () => Carousels.map(generateCarouselItem).join("");
    return `
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${initializeCarouselItems()}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
};
