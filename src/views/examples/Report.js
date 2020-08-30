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
  CardFooter,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const dataList = [
  {
    No: "1",
    equipment: "พัดลม",
    Discreption: "แถวๆห้องน้ำ",
    Qty: "5",
  },
  {
    No: "2",
    equipment: "แอร์",
    Discreption: "แถวๆห้องน้ำ",
    Qty: "5",
  },
  {
    No: "3",
    equipment: "ประตู",
    Discreption: "แถวๆห้องน้ำ",
    Qty: "5",
  },
];

// mapTypeId={google.maps.MapTypeId.ROADMAP}
const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 13.726717, lng: 100.783186 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 13.726717, lng: 100.783186 }} />
    </GoogleMap>
  ))
);

class Report extends React.Component {
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
                <CardHeader className=" border-0  ">
                  <Row>
                    <Col>
                      <p className="text-center">
                        แบบฟอร์มใบแจ้งงานซ่อมไฟฟ้า ประปา และอื่น ๆ
                        คณะวิทยาศาสตร์
                        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                      </p>
                    </Col>
                  </Row>

                  <div>
                    <Row className="right mt-4">
                      <img
                        className=" mb-2"
                        alt="..."
                        src={require("assets/img/brand/kmitl-fixed-orange.png")}
                        style={{
                          width: 250,
                          height: 150,
                        }}
                      />

                      <Col>
                        <h5>EazyRepair Studio</h5>
                        <h5>1 ซอย ฉลองกรุง 1 </h5>
                        <h5>แขวง ลาดกระบัง เขตลาดกระบัง</h5>
                        <h5>กรุงเทพมหานคร 10520</h5>
                      </Col>
                      <Col className="text-right mt-2 mr-2">
                        <h4>Report</h4>
                        <h6>#4155315</h6>
                      </Col>
                    </Row>
                  </div>

                  <Row className=" mt-3">
                    <Col>
                      <h5>นาย สมหวัง มาเร็ว</h5>
                      <h5>หน่วย : ฟิสิกส์ </h5>
                      <h5>เบอร์ : 066-789-9874</h5>
                    </Col>
                    <Col className="text-right">
                      <h5>วัน 18 สิงหาคม 2563</h5>
                      <h5>เวลา 09:30 น.</h5>
                    </Col>
                  </Row>
                </CardHeader>
                {/* เอาโค้ดมาวางต่อข้างล่างนี้ */}
                <CardBody className="pt-0 pt-md-4">
                  <Table responsive>
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">#</th>
                        <th>รายการ - อธิบายเพิ่มเติม</th>
                        <th></th>
                        <th></th>
                        <th className="text-center">จำนวน</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {dataList.map((dataList) => (
                        <tr>
                          <th className="text-center">{dataList.No}</th>

                          <td>
                            <Col>
                              <Row>{dataList.equipment}</Row>
                              <Row>{dataList.Discreption}</Row>
                            </Col>
                          </td>
                          <td></td>
                          <td></td>
                          <td className="text-center">{dataList.Qty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <Row className="mt-3">
                    <Col className="mt-5">K-Fiexd Co.</Col>
                    <Col className="text-right mt-2"></Col>
                  </Row>
                </CardFooter>
              </Card>
              <div className="text-right mt-4 ">
                {" "}
                <Button color="info" style={{ color: "black" }}>
                  <i className="fa fa-paper-plane mr-2" aria-hidden="true"></i>
                  ปริ้นใบรีพอร์ต
                </Button>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </>
    );
  }
}

export default Report;
