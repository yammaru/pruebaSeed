import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Card, Col, Container, FormControl, InputGroup, Nav, NavDropdown, Row } from 'react-bootstrap';
import images2 from './images/logo.svg';
import illustration_working from './images/illustration-working.svg';
import icon_twitter from './images/icon-twitter.svg';
import icon_instagram from './images/icon-instagram.svg';
import icon_pinterest from './images/icon-pinterest.svg';
import icon_facebook from './images/icon-facebook.svg';
function App() {
  return (
    <div>

      <nav >
        <Navbar style={{ "backgroundColor": "#f9f9f9" }} collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home"> <img src={images2} alt="lossgo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Resources" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Login</Nav.Link>
                <Button className='button-g'>Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </nav>
<div className='container'>

  <div className='row'>
     <div className='col-xs-12  col-md-6 md:top-50  ' style={{"backgroundColor":"green"}}>
                    <h1>
                      More that just<br />
                      shorter links
                    </h1>
                    <p>
                      Build your brand´s recongnition and get detailed<br />
                      insights on how your links are performing.<br /><br />
                      <button className='button-g'>  Get Started  </button>
                    </p>
      </div>  
      <div className='col-xs-12 col-md-6' style={{"backgroundColor":"indigo"}}>
        <img src={illustration_working} style={{display:"flex",height:"auto"}}  alt="logo" />
      </div>  
</div>
</div>


 
      <header style={{"height":"600px"}}>
        <Container>
          <Row style={{ "align-items": "center", "justify-content": "center" }} >
            <Col xs={0  } sm={0} md={0} lg={0} xl={0} style={{ "text-align": "left" }}>
              <h1>
                More that just<br />
                shorter links
              </h1>
              <p>
                Build your brand´s recongnition and get detailed<br />
                insights on how your links are performing.<br /><br />
                <button className='button-g'>  Get Started  </button>
              </p>
            </Col>
            <Col xs={6} sm={24} md={24} lg={24} xl={2} >
              <img src={illustration_working}   alt="logo" />
            </Col>
          </Row>
        </Container>

      </header>
      <selection style={{ "background-color": "blue","height":"350px" }}>
      <p style={{ "background-color": "blue","height":"350px" }}>okos</p>
      </selection>
      <div className='container' style={{"position":"absolute" ,"top":"590px", "text-align": "center", "justify-content": "center"}}>
        <Card style={{ "backgroundColor": "indigo" }}> <br></br>
          <Container>
            <Card.Body style={{ "width": "90%" }}>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Shorten a link here..."
                  aria-label="Input group example"  
                  aria-describedby="btnGroupAddon2"
                />
                <Button variant="primary" className='button-n'>Shorten it!</Button>
              </InputGroup>
            </Card.Body>
          </Container> <br></br>
        </Card>
      </div>


      

    </div>
  );
}

export default App;
