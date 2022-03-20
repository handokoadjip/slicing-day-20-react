import { Img4, Img5 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-0 my-lg-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-3 d-none d-lg-block">
                <div className="wrapper d-flex align-items-center mt-5 h-100">
                  <i className="fab fa-pinterest fa-2x text-gray-5"></i>
                </div>
              </div>
              <div className="col-lg-3 my-3 my-lg-0">
                <div className="wrapper">
                  <img
                    className="h-image-200px w-100"
                    src={Img4}
                    alt="image-4"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-3 my-lg-0">
                <div className="wrapper">
                  <img
                    className="h-image-400px w-100"
                    src={Img5}
                    alt="image-5"
                  />
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
