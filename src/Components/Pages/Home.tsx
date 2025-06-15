import { Col, Row } from "react-bootstrap";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";


const Home = () =>{
    return (
       
             <Row>
             {products.map(product => 
                <Col md={3}> 
                <ProductCard product= {product} />
                   </Col> 
             )}
          </Row>
  
    )
}
export default Home ;