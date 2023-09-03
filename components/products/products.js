import { AllProducts } from "../../models/products";
import { loadStyleSheet } from "../../utils";
export const Products = () => {
    const generateCard = ({ id, name, img }) => {
        return `
      <div class="card col-md-4 col-lg-3 mb-4 border-0 shadow product-card"
        onclick="window.location='http://localhost/coffe-alpha/product?id=${id}'">
        <img src="${img}" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Discover our premium selection of products.</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    `;
    };
    const initializeCards = () => AllProducts.map(generateCard).join("");
    loadStyleSheet("/components/products/style.css");
    return `
    <div class="col-12 py-5">
      <h3 class="text-center mb-4">Explore Our Products</h3>
      <div class="row align-items-stretch justify-content-center">
        ${initializeCards()}
      </div>
    </div>
  `;
};
