import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Card, Col, Container, FormControl, InputGroup, Nav, NavDropdown, Row } from 'react-bootstrap';
import images2 from './images/logo.svg';
import illustration_working from './images/illustration-working.svg';
import grafica from './images/icon-brand-recognition.svg';
import pinceles from './images/icon-fully-customizable.svg';
import cromenetro from './images/icon-detailed-records.svg';

function App() {
  return (
    <div className='constainer'>

      <nav style={{ backgroundColor: "white", justifyItems: "center" }} >
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

      <div className='container' style={{ backgroundColor: "white" }}>

        <div className='row align-items-center' style={{ "height": "600px" }}>
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
            <img class="responsive" src={illustration_working} style={{ display: "flex", height: "auto" }} alt="logo" />
          </div>
        </div>
      </div>

      <selection >

        <p style={{ "background-color": "transparent", "height": "100px" }} />

        <div style={{  backgroundColor: "transparent", "align-items": "center", "text-align": "center", justifyContent: "center", width: "100%" }}>
          <h1 >
            Advanced Statistics
          </h1>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>

      </selection>
{/*  <div style={{ "font-size": " 1vw",display:'flex', backgroundColor: "transparent", "align-items": "center", "text-align": "center", justifyContent: "center", width: "100%" }}>
          <h1 style={{ "font-size": " 3vw" }}>
            Advanced Statistics
          </h1>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>*/}
      <section style={{  }}>
        <div className="container">
          <div className="row">
            <div class='col-xs-1   col-md-3 ' style={{"background-color": "white", "align-items": "left", "justify-content": "left", "text-align": "left" }}>
             <div  style={{ display: "flex", "justify-content": "center",     "align-items": "center", "background-position": "50% 50%","backgroundColor": "rgb(63, 46, 85)","border-radius": "50%", width:"80px",height:"80px"}}>
               <img src={grafica} style={{width:"auto%" , height: "50%"}} alt="" />
             </div> 
             <h3>  <strong>Brand Recognition</strong></h3>
              <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.  </p>
            </div>
            {/*linea*/}
            <div class='col-xs-1   col-md-1 ' style={{ "background-color": "cyan",height:"10px","align-items": "center", "justify-content": "center", "text-align": "center" }}/>
            {/*linea*/}
            <div class='col-xs-1  col-md-3' style={{"background-color": "white", "align-items": "left", "justify-content": "left", "text-align": "left" }}>
            <div style={{ display: "flex", "justify-content": "center",     "align-items": "center",  "background-position": "50% 50%","backgroundColor": "rgb(63, 46, 85)","border-radius": "50%", width:"80px",height:"80px"}}>
              <img src={cromenetro} style={{ width:"auto%" , height: "50%"}}  alt="" />
            </div>
              
             <h3><strong>Detailed Records</strong></h3> 
              <p>
               Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
              </p>
            </div>
            {/*linea*/}
            <div class='col-xs-1   col-md-1 ' style={{"background-color": "cyan",height:"10px", "align-items": "center", "justify-content": "center", "text-align": "center" }}/>
            {/*linea*/}
            
            <div class='col-xs-1   col-md-3 ' style={{"background-color": "white", "align-items": "center", "justify-content": "center", "text-align": "left" }}>
            <div style={{ display: "flex", "justify-content": "center",     "align-items": "center",  "background-position": "50% 50%","backgroundColor": "rgb(63, 46, 85)","border-radius": "50%", width:"80px",height:"80px"}}>
              <img src={pinceles}style={{ width:"auto%" , height: "60%"}}  alt="" />
            </div>
              
              <h3><strong>Fully Customizable</strong></h3>
              <p>
              Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='container' style={{ "position": "absolute", "top": "590px", }}>
          <div class='lol' style={{ height:"150px","background-size": "100% 100%", backgroundColor: "rgb(63, 46, 85)", "border-radius": "5px" }} > <br></br>
          <br></br>
                <div className='row' style={{display: "flex", "align-items": "center", "justify-content": "center"}}>
                  <div class='col-xs-12  col-md-8 ' style={{width:"70%"}}>
                    <input className='kkkk' placeholder='horten a link here...' style={{}} required={{}}></input>
                  </div><br />
                  <div class='col-xs-12  col-md-2  ' style={{width:"15%"}}>
                    <button variant="primary" className='button-n'>Shorten it!</button>
                  </div>
                </div>
          
                

              <br></br>
          </div>
        </div>
      </div>





    </div>
  );
}

export default App;
