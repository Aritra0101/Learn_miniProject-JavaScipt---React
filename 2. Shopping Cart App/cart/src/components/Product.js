import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-6">
        <h2>
          {" "}
          {props.product.name}{" "}
          <span class="badge bg-secondary">₹ {props.product.price}</span>
        </h2>
      </div>

      <div className="col-2">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-2">
        Rs {props.product.price * props.product.quantity}
      </div>

      <dib className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          REMOVE
        </button>
      </dib>
    </div>
  );
}
