/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-center text-muted">
              © 2020{" "}
              <a
                className="font-weight-bold ml-1"
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                EasyRepair
              </a>
            </div>
          </Col>

          <Col md="6">
            <Nav className="nav-footer justify-content-center">
              <NavItem>
                <NavLink href="" target="_blank">
                  EZrepair
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" target="_blank">
                  เกี่ยวกับเรา
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" target="_blank">
                  บทความ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="d" target="_blank">
                  ลิขสิทธิ์
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
