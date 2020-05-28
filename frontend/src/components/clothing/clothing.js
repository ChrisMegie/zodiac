
import React, { Component } from 'react';
import actions from '../../services/index'
import { Link } from "react-router-dom";



class Apparel extends Component {
  async componentDidMount() {
   
    //actions.test()
  }
  //created request for clothing action
  backendReq = async() => {
    let response = await actions.getClothing()
    console.log(response)
  }

  render() {
    return (
      <div className="background2">
      <div class="card">
        <img src='./images/Mens.jpg' alt="Mens" className="img"/>
        <h1>Mens clothing</h1>
        <p>Mens clothing</p>
        <p><Link to = "/Mens" ><button className="button2">Browse</button></Link></p>
        </div>

        
        <div class="card">
        <img src='./images/Womens.jpg' alt="Womens" className="img"/>
        <h1>Womens clothing</h1>
        <p>Womens clothing</p>
        <p><Link to ="/Womens"><button className="button2">Browse</button></Link></p>
        </div>
        

        
        <div class="card">
        <img src='./images/Acessories.jpg' alt="Acessories" className="img"/>
        <h1>Acessories</h1>
        <p>Acessories</p>
        <p><Link to ="/Etc"><button className="button2">Browse</button></Link></p>
        </div>
        
        
      </div>
      
    );
  }
}

export default Apparel;
