import { Img6, Img7 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-lg-1 d-flex align-items-end order-0">
            <div className="wrapper w-100">
              <p className="fw-medium text-center text-lg-start">search</p>
            </div>
          </div>
          <div className="col-lg-10 order-3 order-lg-1">
            <div className="row">
              <div className="col-lg-3 my-3 my-lg-0">
                <div className="wrapper">
                  <div className="h-image-200px w-100 bg-linear">
                  </div>
                </div>
              </div>
              <div className="col-lg-3 my-3 my-lg-0">
                <div className="wrapper">
                  <figure className="m-0">
                    <img className="h-image-200px w-100" src={Img6} alt="image-6" />
                  </figure>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-3 my-3 my-lg-0">
                <div className="wrapper">
                  <figure className="m-0">
                    <img className="h-image-200px w-100" src={Img7} alt="image-7" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-1 d-flex align-items-end order-0 order-lg-2">
            <div className="wrapper w-100">
              <p className="fw-medium text-end">download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
