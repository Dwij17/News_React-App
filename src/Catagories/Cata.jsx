import React from 'react'
import { Link } from 'react-router-dom'

export default function Cata() {
  return (
    <>
      <section className="w3l-servicesblock1 py-5" id="moreservices">
        <div className="container py-lg-5 py-md-4 py-3">
          <div className="grids-area-hny main-cont-wthree-fea row ">
            <div className="col-lg-4 col-md-6 grids-feature">
              <div className="area-box">
                <span className="fa fa-trophy mt-0"></span>
                <div className="area-box-info">
                  <h4>
                    <Link to="/cricket" className="title-head">
                      cricekt
                    </Link>
                  </h4>
                  <p className="mt-lg-3 mt-2">
                    Vivamus a ligula quam tesque et libero justo, ultrices in.
                    Ut eu leo non. Duis sed et dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
              <div className="area-box">
                <span className="fa fa-briefcase mt-0"></span>
                <div className="area-box-info">
                  <h4>
                    <Link to="/business" className="title-head">
                      Business
                    </Link>
                  </h4>
                  <p className="mt-lg-3 mt-2">
                    Vivamus a ligula quam tesque et libero justo, ultrices in.
                    Ut eu leo non. Duis sed et dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5">
              <div className="area-box">
                <span className="fa fa-flask mt-0"></span>
                <div className="area-box-info">
                  <h4>
                    <Link to="/science" className="title-head">
                      Science
                    </Link>
                  </h4>
                  <p className="mt-lg-3 mt-2">
                    Vivamus a ligula quam tesque et libero justo, ultrices in.
                    Ut eu leo non. Duis sed et dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
              <div className="area-box">
                <span className="fa fa-desktop mt-0"></span>
                <div className="area-box-info">
                  <h4>
                    <Link to="/technology" className="title-head">
                      Technology
                    </Link>
                  </h4>
                  <p className="mt-lg-3 mt-2">
                    Vivamus a ligula quam tesque et libero justo, ultrices in.
                    Ut eu leo non. Duis sed et dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
              <div className="area-box">
                <span className="fa fa-globe mt-0"></span>
                <div className="area-box-info">
                  <h4>
                    <Link to="/world" className="title-head">
                      World
                    </Link>
                  </h4>
                  <p className="mt-lg-3 mt-2">
                    Vivamus a ligula quam tesque et libero justo, ultrices in.
                    Ut eu leo non. Duis sed et dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
              <div className="area-box">
                <span className="fa fa-book mt-0"></span>
                <div className="area-box-info">
                  <h4>
                    <Link to="/education" className="title-head">
                    Education
                    </Link>
                  </h4>
                  <p className="mt-lg-3 mt-2">
                    Vivamus a ligula quam tesque et libero justo, ultrices in.
                    Ut eu leo non. Duis sed et dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
