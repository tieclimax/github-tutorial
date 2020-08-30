import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import {  Link } from "react-router-dom";
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

class Contracts extends React.Component {
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
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3"></Col>
                </Row>
                <CardHeader className=" border-0  pt-md-4 pb-0 pb-md-4">
                  <Row className="d-flex">
                    <Col>
                      <h2>รายชื่อ ช่าง</h2>
                    </Col>
                    <Col className="text-right">
                      <Link to="/admin/addstaff">
                      <Button color="success" style={{ color: "black" }}>
                        <i className="fa fa-user-plus " aria-hidden="true"></i>
                      </Button>
                      </Link>
                    </Col>
                  </Row>
                </CardHeader>
                {/* เอาโค้ดมาวางต่อข้างล่างนี้ */}
                <CardBody className="pt-0 pt-md-4">
                  <Table responsive>
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">
                         No.
                        </th>
                        <th>ชื่อ-สกุล</th>
                        <th>อีเมล</th>
                        <th>เบอร์โทร</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {dataList.map((dataList) => (
                        <tr>
                          <th className="text-center">{dataList.No}</th>

                          <td>
                            {dataList.Name} {dataList.Lastname}
                          </td>
                          <td>{dataList.Email}</td>
                          <td>{dataList.Tel}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Row>
                                <Col>
                                  <i
                                    className="fa fa-edit"
                                    aria-hidden="true"
                                    style={{ color: "blue" }}
                                  />
                                </Col>
                                <Col>
                                  <i
                                    className="fa fa-trash"
                                    aria-hidden="true"
                                    style={{ color: "red" }}
                                  ></i>
                                </Col>
                              </Row>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </>
    );
  }
}

export default Contracts;
