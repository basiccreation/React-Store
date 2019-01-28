import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from "./Navbar"
import ProductList from "./ProductList"
import Details from "./Details"
import Default from "./Default"
import Cart from "./Cart"
import Modal from "./Modal"

class App extends Component {
  render() {
    return (
<div className="container">
  <React-Fragment>
    <Navbar></Navbar>
  <Switch>
    <Route exact path="/" component={ProductList}></Route>
    <Route path="/details" component={Details}></Route>
    <Route path="/cart" component={Cart}></Route>
    <Route component={Default}></Route>
  </Switch>
  <Modal/>
</React-Fragment>
</div>



    );
  }
}

export default App;
