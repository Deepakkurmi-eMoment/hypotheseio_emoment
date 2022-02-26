import React from "react";

const Graph = () => {
  return (
    <>
      <div className="container-fluid Graph my-3 mb-5">
        <div className="row">
          <div className="col-12 pl-lg-2 pr-lg-2">
            <div className="Graph_card">
              <div className="row d-flex align-content-center">
                <div className="col-lg-2 col-md-3 col-12  d-flex align-content-center justify-content-lg-start justify-content-md-start justify-content-center">
                  <div className="Model">
                    <button>
                      <img
                        src="/images/figma/Choice.png"
                        alt="loading..."
                        className="img1"
                      />
                      <h1 className="pl-2 pr-2">SOL/USDC</h1>
                      <img
                        src="/images/figma/Polygon.png"
                        alt="loading..."
                        className="img2"
                      />
                    </button>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-12 mt-lg-0 mt-md-0 mt-3">
                  <div className="Candle d-flex align-content-center justify-content-lg-start justify-content-md-start justify-content-center">
                    <img src="/images/figma/Candle.png" alt="loading" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
