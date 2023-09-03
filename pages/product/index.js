import { AllProducts } from "../../models/products";
export const Product = (props) => {
    const productId = props.id;
    const foundProduct = AllProducts.find((item) => item.id === Number(productId));
    const name = foundProduct?.name;
    const img = foundProduct?.img;
    const price = foundProduct?.price;
    const description = foundProduct?.description;
    const rating = foundProduct?.rating;
    return `
    <div class="col-12 py-5" style="background-color: var(--background-color);">
        <div class="card product-card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${img}" class="img-fluid rounded-start product-img" alt="${name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title product-title">${name}</h2>
                        <p class="card-text product-description">${description}</p>
                        <p class="card-text product-price">${price?.toFixed(2)}</p>
                        <div class="d-flex align-items-center">
                            <div class="product-rating">${getRatingStars(rating)}</div>
                            <button class="btn btn-primary ms-auto">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};
const getRatingStars = (rating) => {
    const stars = '<i class="bi bi-star-fill"></i>';
    const emptyStars = '<i class="bi bi-star"></i>';
    if (rating) {
        const ratingStars = stars.repeat(rating) + emptyStars.repeat(5 - rating);
        return `<span class="product-rating-stars">${ratingStars}</span>`;
    }
    return "";
};
