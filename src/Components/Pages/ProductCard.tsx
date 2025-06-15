import React from "react";
import { Product } from "../../Types/Product";

interface IProductCardProps {
    product: Product
}
const ProductCard: React.FC<IProductCardProps> = ({product})  => {
    return (
       <div>
         <span className="simpleLine"></span>
         <h5>{ product.name }</h5> 
         <span>{ product.price} </span>
         <img src={product.img} alt= {product.name} width="150px"/>
          
        </div>
        )
}
export default ProductCard ;
