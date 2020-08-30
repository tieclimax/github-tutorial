import React from "react";
// react plugin used to create google maps
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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import Header from "components/Headers/Header.js";

const dataList = [
  {
    Floor: "4",
    Room: "442",
    Location: "พระจอมเกล้าเจ้าคุณทหาร...",
    Discreption: "แถวๆห้องน้ำ",
  },
  {
    Floor: "5",
    Room: "252",
    Location: "พระจอมเกล้าเจ้าคุณทหาร...",
    Discreption: "แถวๆห้องน้ำ",
  },
  {
    Floor: "1",
    Room: "112",
    Location: "พระจอมเกล้าเจ้าคุณทหาร...",
    Discreption: "-",
  },
];

const dataName = [
  {
    Name: "Mart ",
    Lastname: "Jacob",
  },
  {
    Name: "Jason ",
    Lastname: "hornton",
  },
  {
    Name: "Ham ",
    Lastname: "Jacob",
  },
];

class Assignjob extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "",
    };
  }

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
                <CardHeader className=" border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <Row className="d-flex">
                    <Col>
                      <h2>รีพอร์ต</h2>
                    </Col>
                    <Col className="text-right">
                      <Button
                        color="success"
                        style={{ color: "black" }}
                        type="button"
                        onClick={() => this.toggleModal("exampleModal")}
                      >
                        <i className="fa fa-user-plus " aria-hidden="true"></i>
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                {/* เอาโค้ดมาวางต่อข้างล่างนี้ */}
                <CardBody className="pt-0 pt-md-4">
                  <Table responsive>
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                            className="mb-1"
                          ></input>
                        </th>
                        <th>ชั้น-ห้อง</th>
                        <th>ตำแหน่ง</th>
                        <th>รายละเอียด</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {dataList.map((dataList) => (
                        <tr>
                          <th className="text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                              className="mb-1"
                            ></input>
                          </th>

                          <td>
                            {" "}
                            ชั้น {dataList.Floor} ห้อง {dataList.Room}
                          </td>
                          <td>{dataList.Location}</td>
                          <td>{dataList.Discreption}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Row>
                                <Col>
                                  <i
                                    className="fa fa-pencil"
                                    aria-hidden="true"
                                    style={{ color: "blue" }}
                                  />
                                </Col>
                                <Col>
                                  <i
                                    className="fa fa-user-plus"
                                    aria-hidden="true"
                                    style={{ color: "green" }}
                                    onClick={() =>
                                      this.toggleModal("exampleModal")
                                    }
                                  ></i>

                                  <Modal
                                    className="modal-dialog-centered"
                                    isOpen={this.state.exampleModal}
                                    toggle={() =>
                                      this.toggleModal("exampleModal")
                                    }
                                  >
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        มอบหมายงาน
                                      </h5>
                                      <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() =>
                                          this.toggleModal("exampleModal")
                                        }
                                      >
                                        <span aria-hidden={true}>×</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <h5>sadasd</h5>
                                      <h5>sadasd</h5>
                                      <h5>sadasd</h5>
                                    </div>
                                    <UncontrolledDropdown className="text-center mb-5">
                                      <DropdownToggle className="btn btn-outline-success">เลือกช่าง</DropdownToggle>
                                      <DropdownMenu
                                        className="dropdown-menu-arrow"
                                        center
                                      >
                                        {dataName.map((dataName) => (
                                          <DropdownItem>
                                            <span>
                                              {dataName.Name}
                                              {dataName.Lastname}
                                            </span>
                                          </DropdownItem>
                                        ))}
                                      </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <div className="text-center pb-3">
                                      <Button
                                        color="warning"
                                        type="button"
                                        id="assign"
                                        onClick={(id) =>
                                          this.toggleModal("exampleModal")
                                        }
                                        style={{ color: "black" }}
                                      >
                                        มอบหมายงาน
                                      </Button>
                                    </div>
                                  </Modal>
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

export default Assignjob;
