import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import ProductList from "./ProductList"
import Details from "./Details"
import Default from "./Default"
import Cart from "./Cart"

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
</React-Fragment>
</div>



    );
  }
}

export default App;
