import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <div className="mt-3 mb-5">
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addItem(
              this.state.productName,
              Number(this.state.productPrice)
            );
          }}
        >
          <div className="mb-3 col-6">
            <label htmlFor="inputName" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="Name"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.target.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: Number(e.target.value) });
              }}
              value={this.setState.productPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
