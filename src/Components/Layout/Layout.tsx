import {Row, Col, Container } from "react-bootstrap";
import Content from "./Content";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <Container fluid className="vh-100 overflow-hidden">
        <Row>
          <Col md={3} className="vh-100 p-0">
            <Sidebar />
          </Col>
          <Col md={9} className="vh-100 p-3 overflow-auto">
            <Content />
          </Col>
        </Row>
        </Container>
  );
}

export default Layout;
