import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
   render(){
      return(
         <React.Fragment>
         <Navbar dark>
            <div className = "container">
               <NavbarBrand href = "/">Let's do it</NavbarBrand>
            </div>
         </Navbar>
         <Jumbotron>
            <div className = "container">
               <div className = "row row-header">
                  <div className = "col-12 col-sm-6">
                     <h1>HEHEHEHEHE</h1>
                     <p> I was choking in the cloud , building my rain up in the cloud.. Falling like ashes to the ground. Hoping my feelings they would drown.. But they never did ever lived, ebbing and flowing,, inhibited, limited, till it grow up and it rained down. It rained down likee.. Pain.. You made me a . you made me a believer.. believer.. Pain .. You turn me down.. You build me up.. Believer.. Believer.. Pain.. Let the bullet fly oh let them rain.. </p>
                  </div>
               </div>
            </div>
         </Jumbotron>
         </React.Fragment>
      );
   }
}
export default Header;
