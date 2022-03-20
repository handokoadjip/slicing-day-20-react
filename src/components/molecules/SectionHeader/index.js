import { Img1 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrapper">
                  <img
                    className="h-image-65vh w-100"
                    src={Img1}
                    alt="image-1"
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
