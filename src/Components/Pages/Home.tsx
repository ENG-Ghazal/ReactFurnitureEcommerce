import { Col, Row } from "react-bootstrap";
import { products } from "../../data/products";
import ProductCard from "./ProductCard/ProductCard";


const Home = () =>{
    return (
      
        <Row>
             {products.map(product =>
                <Col md={4} key={product.id} > 
                <ProductCard product= {product} />
                </Col> 
             )}
          </Row>
        
  
    )
}
export default Home ;