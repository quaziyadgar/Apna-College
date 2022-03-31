import React, { Component } from "react";

class AddItem extends Component{
  constructor(props)
  {
      super(props);
      this.state = {
            productName : "",
            productPrice : 0,
      };
  }
  render() {
    return (
      <form className="row mb-5" onSubmit={(e)=>{
          e.preventDefault();
          this.props.addItem(this.state.productName,Number(this.state.productPrice))
      }}>
        <div className="mb-3 col-5">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="productName"
            onChange={(e)=>{this.setState({productName:e.currentTarget.value})}}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e)=>{this.setState({productPrice:Number(e.currentTarget.value)})}}
          />
        </div>
        <div className="col-2">
        <button type="submit" className="btn btn-primary m-4">
          Add
        </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
