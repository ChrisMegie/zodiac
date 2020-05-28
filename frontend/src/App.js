import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile'
import actions from './services/index'
import Apparel from './components/clothing/clothing';
import Prints from './components/Post/Prints.js'
import Mens from './components/clothing/Mens clothing/Mens';
import Womens from './components/clothing/Womens clothing/Womens';
import Etc from './components/clothing/Acessories/Etc';

import Collabs from './components/Collaboration/Collabs'
import Amaken from './components/Collaboration/Amaken'
import NewCollab from './components/Collaboration/newCollab'

class App extends Component {
  
  state = { }
  
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    console.log(user.data)
    this.setState({...user.data})
    

  }

  setUser = (user) => this.setState(user)
  
  logOut = async () => {
    let res = await actions.logOut()
    this.setUser({email:null, createdAt: null, updatedAt: null, _id: null }) //FIX 
  }

 

  render(){

    return (
    <BrowserRouter>
      
      <nav>
      <NavLink to ='/'><img src='./images/pro.png' className="logo" alt="logo"/></NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="/">Home </NavLink>&nbsp;&nbsp;&nbsp;
  
        {this.state.email ? 
          <Fragment>
           <NavLink onClick={this.logOut} to='/'>Log Out </NavLink> &nbsp;&nbsp;&nbsp;
           <NavLink to="/profile">Profile</NavLink>&nbsp;&nbsp;&nbsp;
           </Fragment>
           :
           <Fragment>
           <NavLink to="/log-in">Log In </NavLink>&nbsp;&nbsp;&nbsp;
           </Fragment>
          }
      <NavLink to ='/Apparel'>Apparel </NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to ='/Prints'>Prints</NavLink> &nbsp;&nbsp;&nbsp;
      <NavLink to ='/Collabs'>Collabs</NavLink> &nbsp;&nbsp;&nbsp;
      </nav>
      

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/sign-up" render={(props)=><SignUp {...props} setUser={this.setUser} />} />
        <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={this.setUser}/>} />
        <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state}/>} />
        <Route exact path="/Apparel" render={(props) => <Apparel {...props} />} />
        <Route exact path="/Prints" render={(props) => <Prints {...props} />} />
        <Route exact path="/Mens" render={(props) => <Mens {...props} />} />
        <Route exact path="/Womens" render={(props) => <Womens {...props} />} />
        <Route exact path="/Etc" render={(props) => <Etc {...props} />} />
        <Route exact path="/Collabs" render={(props) => <Collabs {...props}email={this.state.email}id={this.state._id} />} />
        <Route exact path="/Works" render={(props) => <Amaken {...props} />} />
        <Route exact path="/newCollab" render={(props) => <NewCollab {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
  }
}
export default App;
