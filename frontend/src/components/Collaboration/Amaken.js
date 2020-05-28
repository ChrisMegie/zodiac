import React, { Component } from "react";
import actions from "../../services/index";
import { Link } from "react-router-dom";

class Amaken extends Component {
  render() {
    return (
      <div className="background">
        
          <section className="common">
            <div className="Featured">
            <h2>Artist Name</h2><br/>
              <p id="Bio">
              
              </p>
          
            </div>
            </section>
      
      
      <div className="background2">
      <section className="common">
      <div>
      <h2 >Designs</h2>
      </div>
      <br/><br/>
        <div class="card">
        <img src="" alt="poster" className="img"/>
        <h1></h1>
        <p></p>
        <p><button className="button2">add</button></p>
        </div>

        </section>
        </div>
        </div>
      
    );
  }
}

export default Amaken;
