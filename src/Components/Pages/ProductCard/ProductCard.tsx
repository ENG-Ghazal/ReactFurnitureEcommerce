import React from "react";
import { Product } from "../../../Types/Product";
import "./ProdutCard.css";
interface IProductCardProps {
  product: Product;
}
const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={product.img} alt={product.name} />
        <div className="overlay">
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-title">
          <span className="simple-line"></span>
          <h5>{product.name}</h5>
        </div>
        <p>{product.price} </p>
      </div>
    </div>
  );
};
export default ProductCard;
