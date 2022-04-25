import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Card, Col, Container, FormControl, InputGroup, Nav, NavDropdown, Row } from 'react-bootstrap';
import images2 from './images/logo.svg';
import illustration_working from './images/illustration-working.svg';

function App() {
  return (
    <div>

      <nav >
        <Navbar collapseOnSelect expand="lg">
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
                <button className='button-g'>Sign Up</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </nav>

<div className='container'>

  <div className='row align-items-center' style={{"height":"600px"}}>
     <div class='col-xs-12  col-md-6 md:top-50  ' style={{}}>
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
      <div class='col-xs-12 col-md-6' style={{}}>
        <img class="responsive" src={illustration_working} style={{display:"flex",height:"auto"}}  alt="logo" />
      </div>  
</div>
</div>


 
    
      <selection style={{"height":"350px" }}>
      <p style={{ "background-color": "#ddd","height":"350px" }}></p>
      </selection>
      <div className='container' style={{"position":"absolute" ,"top":"590px", left:"10%"}}>
        <Card class='hhhh' style={{backgroundColor:"violet"}} > <br></br>
          <Container>
            <Card.Body style={{ "width": "90%" }}>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Shorten a link here..."
                  aria-label="Input group example"  
                  aria-describedby="btnGroupAddon2"
                />
                <button variant="primary" className='button-n'>Shorten it!</button>
              </InputGroup>
            </Card.Body>
          </Container> <br></br>
        </Card>
      </div>

<dic class='hhh'>

</dic>
      

    </div>
  );
}

export default App;
