import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-light px-lg-2 py-4 mb-5">
      <div className="container-fluid d-flex align-items-center">
        <div className="address w-25">
          <Link className="fs-6 mb-0 fw-medium" to="#">
            company
          </Link>
        </div>

        <Link className="navbar-brand text-center fw-medium fs-4" to="#">
          <span className="fw-bold text-primary">{`>`}</span>valdama
        </Link>

        <div className="language w-25 text-end">
          <Link className="fs-6 mb-0 fw-medium" to="#">
            products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default index;
