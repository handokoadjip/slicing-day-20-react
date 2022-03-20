import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="bg-primary">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrapper mb-5">
                  <div className="copyright">
                    <p className="mp-0 text-center text-fade-1 fw-bold fs-2 text-white">
                      {"<"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="wrapper mb-5">
                  <div className="address text-white">
                    <p className="fw-medium text-center text-lg-start">
                      Valdama Sri <br />
                      Via Galilleo Galillel 5 <br />
                      05033 Ciwit Castelina <br />
                      Viterbo - Italy
                    </p>
                    <p className="fw-medium text-center text-lg-start">
                      info@valdama.it <br />
                      www.valdama.it
                    </p>
                    <p className="fw-medium text-center text-lg-start">
                      tel. +39 0761 540709 <br />
                      tel. +39 0761 540765 <br />
                      tel. +39 0761 540499
                    </p>
                    <p className="fw-medium text-center text-lg-start">
                      Cap. soc. Int. vers. ouro <br />
                      100.000,00 <br />
                      VAT n. 01738970563 <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="wrapper">
                  <div className="copyright">
                    <div className="d-flex justify-content-between align-items-center mb-5 w-100">
                      <Link
                        className="text-decoration-none mx-2 circle-icon"
                        to="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="text-decoration-none mx-2 circle-icon"
                        to="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="text-decoration-none mx-2 circle-icon"
                        to="#"
                      >
                        <i className="fab fa-pinterest"></i>
                      </Link>
                      <Link
                        className="text-decoration-none mx-2 circle-icon"
                        to="#"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="info text-white">
                      <p className="fw-medium text-center text-lg-start">
                        Press Office
                      </p>
                      <p className="fw-medium text-center text-lg-start">
                        Luagency <br />
                        press@luagency.com <br />
                        www.luagency.com <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="offset-lg-5 col-lg-7">
                <div className="wrapper">
                  <div className="copyright">
                    <div className="info text-white">
                      <p className="fw-medium text-center text-lg-start">
                        Art Director Prospero Rasulo <br />
                        -<br />
                        Photos Antonio Rasulo <br />
                        Design The Chocksmiths <br />
                        development Dahlic <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
