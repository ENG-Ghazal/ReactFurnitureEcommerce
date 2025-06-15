import { Container, Row, Col } from "react-bootstrap";
import Content from "./Content";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <Container  className="p-0 m-0">
        <Row>
          <Col md={3} className="vh-100">
            <Sidebar />
          </Col>
          <Col md={9} className="vh-100 overflow-auto">
            <Content />
          </Col>
        </Row>
      </Container>

     
    </>
  );
}

export default Layout;
