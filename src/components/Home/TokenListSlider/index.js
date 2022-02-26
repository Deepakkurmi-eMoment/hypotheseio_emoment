import React from "react";
import Slider from "react-slick";
import { TokenListSliderAPi } from "../../../assets/api/TokenListSliderAPi";

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: true,
        slidesToScroll: 1,
      },
    },
  ],
};

const TokenListSlider = () => {
  return (
    <>
      <div className="container-fluid TokenListSlider mt-3">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div className="slider">
              <Slider {...settings}>
                {TokenListSliderAPi.map((list) => {
                  return (
                    <div className="col-12 pl-2 pr-2 m-0">
                      <div className="TokenListSlider_card">
                        <div className="row">
                          <div className="col-5 d-flex justify-content-start">
                            <div className="token_icon">
                              <img src={list.token} alt="Loading" />
                            </div>
                          </div>
                          <div className="col-7 d-flex justify-content-end">
                            <div className="graph_section">
                              <div className="img_section">
                                <img src={list.graph} alt="Loading.." />
                              </div>
                              <div className="transition d-flex justify-content-end align-items-center mt-2">
                                <img src={list.icon} className="upIcon" />
                                <h1
                                  className="pt-1"
                                  style={{ color: list.color }}
                                >
                                  {list.number}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row py-2">
                          <div className="col-12">
                            <div className="Name_section">
                              <p>{list.fullName}</p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-10 d-flex justify-content-start align-items-center">
                            <div className="total_section">
                              <h1>{list.total}</h1>
                            </div>
                          </div>
                          <div className="col-2 d-flex justify-content-end align-items-center">
                            <div className="sort_section">
                              <p>{list.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenListSlider;
