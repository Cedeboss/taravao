import { Outlet } from "react-router-dom";
import Header  from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import SideBarMenu from "./SideBarMenu";
const AdminLayout = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <SideBarMenu />
          {/* <Col xs={2} className='bg-secondary vh-100'>
            <Container fluid className="pt-3 ps-1">
              <Row>
                <Col className="py-2" xs={12}>
                  <Row>
                    <Col xs={1}>
                    <i className="ri-user-line" ></i>
                    </Col>
                    <Col>
                  Messages
                    </Col>
                  </Row>
                  </Col>
                <Col className="py-2" xs={12}>kbkuyb</Col>
                <Col className="py-2" xs={12}>klunhliu</Col>
                <Col className="py-2" xs={12}>klunhliu</Col>
                <Col className="py-2" xs={12}>klunhliu</Col>
                <Col className="py-2" xs={12}></Col>
              </Row>


            </Container>
          </Col> */}
          <Outlet />
        </Row>
      </Container>
    </>
  )
}

export default AdminLayout
