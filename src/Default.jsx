import React, { Component } from 'react';
class Default extends Component {
render() {
return (
<div className="container">
    <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h3>page not found</h3>
            <h3>-</h3>
            <h1 className="display-3">404 
        <span className = "text-danger"> error</span></h1>
            <h3>-</h3>
            <h4>the requested page, <br/>localhost:3000<span className = "text-danger">{this.props.location.pathname}</span> not found</h4>
        </div>
    </div>
</div>
);
}
}
export default Default;