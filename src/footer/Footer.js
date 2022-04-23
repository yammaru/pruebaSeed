import React from "react";
import images2 from '../images/logo.svg';
import icon_twitter from '../images/icon-twitter.svg';
import icon_instagram from '../images/icon-instagram.svg';
import icon_pinterest from '../images/icon-pinterest.svg';
import icon_facebook from '../images/icon-facebook.svg';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return (
      <footer style={{ color: 'white', "background-color": "#282c34","height":"100%" }}>
        <div >
       
          <Card style={{ "backgroundColor": "purple", "text-align": "center", "justify-content": "center" }}> <br></br>
            <Container style={{ "align-items": "center", "justify-content": "center" }}>
              <Card.Body> <p style={{ "align-items": "center", "justify-content": "center", "text-align": "center", }}>
                <h2>
                  Boost your link today
                </h2>  <Button className='button-g'>  Get Started  </Button></p>


              </Card.Body>
            </Container>
          </Card> 
          
          <div className='container'>
              <div className='row'>
                  <div className='col-xs-12  col-md-3 ' style={{"backgroundColor":"green"}}>
                      <img
                alt=""
                src={images2}
                style={{ "filter": "invert(100%) sepia(0%) saturate(0%) hue-rotate(156deg) brightness(102%) contrast(101%)","align-items": "center", "justify-content": "center", "text-align": "center",  }}
              />
                  </div>
                  <div className='col-xs-12  col-md-2 ' style={{"backgroundColor":"blue"}}>
                     <ul style={{ "list-style-type": "none", "list-style-position": "outside", "align-items": "left", "justify-content": "left" }} >
                <li><strong>Features</strong></li>
                <br />
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
                  </div>
                  <div className='col-xs-12  col-md-2 xs:items-center ' style={{"backgroundColor":"cyan"}}>
                  <ul style={{ "list-style-type": "none", "list-style-position": "outside" }} >
                <li><strong>Resources</strong></li>
                <br />
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
                  </div>
                <div className='col-xs-12  col-md-2' style={{"backgroundColor":"blue" , "align-items": "center", "justify-content": "center" , "text-align": "left" }}>
                <ul style={{ "list-style-type": "none", "list-style-position": "outside" }} >
                <li><strong>Company</strong></li>
                <br />
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
                  </div>
                  <div className='col-xs-12  col-md-3 xs:width-50 ' style={{"backgroundColor":"black"}}>
              <Row>
                <Col>
                  <img src={icon_facebook} alt="" />
                </Col>
                <Col>
                  <img src={icon_twitter} alt="" />
                </Col>
                <Col>
                  <img src={icon_pinterest} alt="" />
                </Col>
                <Col>
                  <img src={icon_instagram} alt="" />
                </Col>
              </Row>
                  </div>
              </div>
             
          </div>

        </div>
      </footer>
       
    );
}
export default Footer;