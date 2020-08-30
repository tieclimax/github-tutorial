import React from "react";
// react plugin used to create google maps
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Button,
  Table,
  Modal,
  Input,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const dataList = [
  {
    No: "1",
    Name: "Mart ",
    Lastname: "Jacob",
    Email: "Jibiza@hotmail.com",
    Tel: "092-258-7958",
  },
  {
    No: "2",
    Name: "Jason ",
    Lastname: "hornton",
    Email: "Jibiza@hotmail.com",
    Tel: "092-258-7958",
  },
  {
    No: "3",
    Name: "Mart ",
    Lastname: "Jacob",
    Email: "Jibiza@hotmail.com",
    Tel: "092-258-7958",
  },
  {
    No: "4",
    Name: "Mart ",
    Lastname: "Jacob",
    Email: "Jibiza@hotmail.com",
    Tel: "092-258-7958",
  },
  {
    No: "5",
    Name: "Jason ",
    Lastname: "hornton",
    Email: "Jibiza@hotmail.com",
    Tel: "092-258-7958",
  },
  {
    No: "6",
    Name: "Mart ",
    Lastname: "Jacob",
    Email: "Jibiza@hotmail.com",
    Tel: "092-258-7958",
  },
];

class Addstaff extends React.Component {
  state = {
    exampleModal: false,
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">เพิ่มรายชื่อช่าง</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          {" "}
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Lucky"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          {" "}
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jesse"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="jesse@example.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Tel
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jesse"
                              id="input-number"
                              placeholder="0857415214"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className=" mt-3 mr-5">
            <Link to="/admin/contracts">
              <Button color="danger" type="button" style={{ color: "black" }}>
                ยกเลิก
              </Button>
            </Link>
            <Link to="/admin/contracts">
              <Button color="info" type="button" style={{ color: "black" }}>
                ตกลง
              </Button>
            </Link>
          </Row>
        </Container>
      </>
    );
  }
}

export default Addstaff;
