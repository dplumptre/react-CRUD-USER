import Footer from './Partials/Footer';
import Nav from './Partials/Nav';
import SideBar from './Partials/SideBar';
import Dashboard from './Container/Dashboard';
import Layout from './Partials/Layout';
import {Route,Switch} from 'react-router-dom';
import OpenAccount from './Container/OpenAccount';
import React,{useState} from 'react';
import AccountStatus from './Container/AccountStatus';
import Register from './Container/Register';

function App() {

  const [toggleSideBar,setToggleSideBar] =  useState(false);

  const sidebarToggleHandler = ()=>{
    setToggleSideBar(!toggleSideBar);
    console.log(toggleSideBar);
  }


  return (
    <div >
      <Nav toggle={sidebarToggleHandler}  />
      <Layout>
        <div id="wrapper">
          <SideBar toggle={toggleSideBar} />
          <div id="content-wrapper">
            <div className="container-fluid">
              <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/open-account" component={OpenAccount} />
              <Route path="/account-status" component={AccountStatus} />
              <Route path="/register" component={Register} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Layout>
    </div>




  );
}

export default App;
