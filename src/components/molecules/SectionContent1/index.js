import { Img2, Img3 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-0 my-lg-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-6">
                <div className="wrapper">
                  <img
                    className="h-image-400px w-100"
                    src={Img2}
                    alt="image-2"
                  />
                </div>
              </div>
              <div className="col-lg-3 my-3 my-lg-0">
                <div className="wrapper d-flex align-items-end h-100">
                  <img
                    className="h-image-200px w-100"
                    src={Img3}
                    alt="image-3"
                  />
                </div>
              </div>
              <div className="col-lg-3 my-3 my-lg-0">
                <div className="wrapper d-flex justify-content-center justify-content-lg-start align-items-end h-100">
                  <p className="text-uppercase my-5 text-fade-black-1 fw-medium r-45deg">
                    newsletter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
