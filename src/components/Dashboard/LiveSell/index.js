import React from "react";
import { LiveSellListApi } from "../../../assets/api/LiveSellListApi";
import Slider1 from "react-slick";
import LiveSellWrapper from "./LiveSell.style";

const SlickArrowLefts = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <div>
      <img src="/images/figma/leftArrow.png" alt="loading..." />
    </div>
  </button>
);

const SlickArrowRights = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <div>
      <img src="/images/figma/rightArrow.png" alt="loading..." />
    </div>
  </button>
);

const settings1 = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: true,
  nextArrow: <SlickArrowRights />,
  prevArrow: <SlickArrowLefts />,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const LiveSell = () => {
  return (
    <LiveSellWrapper>
      <div className="container-fluid LiveSell my-5">
        <div className="row">
          <div className="col-12 m-0 pr-lg-2 pl-lg-2 pl-auto">
            <div className="LiveSell_section">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12 order-lg-1 order-md-1 order-2 d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center mt-lg-0 mt-md-0 mt-3">
                  <div className="title">
                    <h1>BNBUSDT $381.470</h1>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12  order-lg-2 order-md-2 order-1 d-flex justify-content-center align-items-center">
                  <div className="live_cart">
                    <div className="circle">
                      <img src="/images/figma/Live.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12  order-3 d-flex justify-content-lg-end justify-content-md-end justify-content-center align-items-center mt-lg-0 mt-md-0 mt-3">
                  <div className="time d-flex align-items-center">
                    <p>03:40</p>
                    <span className="pt-1 pl-1">5m</span>
                    <img
                      src="/images/figma/watch.png"
                      alt="Loading..."
                      className="ml-2"
                    />
                  </div>
                </div>
              </div>

              {/* list */}

              <div className="row List_Slider mt-5">
                <div className="col-12">
                  <div className="List_Slider_slider">
                    <Slider1 {...settings1}>
                      {LiveSellListApi.map((list) => {
                        return (
                          <div
                            className="col-12 pr-lg-3 pl-lg-3 pl-auto pr-auto d-flex justify-content-center"
                            key={list.id}
                          >
                            <div
                              className={
                                list.status === "live"
                                  ? "LiveSell_section_card2"
                                  : "LiveSell_section_card1"
                              }
                            >
                              <div className="row">
                                <div className="col-12 d-flex align-items-center">
                                  <div className="card_title d-flex align-items-center">
                                    {list.TitleIcon && (
                                      <img
                                        src={list.TitleIcon}
                                        alt="Loading..."
                                      />
                                    )}

                                    <p
                                      style={{ color: list.TitleColor }}
                                      className="ml-2 pt-1"
                                    >
                                      {list.Title}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-3">
                                <div className="col-12 payout1">
                                  <div
                                    className="payout1_card"
                                    style={{ background: list.Up.Cardbg }}
                                  >
                                    <div className="row">
                                      <div className="col-9 d-flex align-items-center justify-content-center">
                                        <div className="payout1_card_title">
                                          <p
                                            style={{
                                              color: list.Up.TitleColor,
                                            }}
                                          >
                                            {list.Up.Title}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="col-3">
                                        <div className="payout1_card_img d-flex justify-content-end align-items-center">
                                          <img
                                            src={list.Up.Icon}
                                            alt="Loading..."
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="small_card3"></div>
                                  <div
                                    className="small_card1"
                                    style={{ background: list.Up.SmallCardBg }}
                                  ></div>
                                </div>
                              </div>

                              <div className="row details d-flex align-items-center mt-5 pt-3">
                                <div
                                  className={
                                    list.status === "live"
                                      ? "col-3 d-flex justify-content-end order-2"
                                      : "col-3 d-flex justify-content-start order-1"
                                  }
                                >
                                  <div className="Number">
                                    <p
                                      style={{
                                        color: list.details.NumberColor,
                                      }}
                                    >
                                      {list.details.Number}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className={
                                    list.status === "live"
                                      ? "col-9  d-flex align-items-start justify-content-start flex-column order-1"
                                      : "col-9  d-flex align-items-end justify-content-end flex-column order-2"
                                  }
                                >
                                  <div className="LastPrice_title">
                                    <p>Last Price</p>
                                  </div>
                                  <div className="LastPrice_value">
                                    <h1
                                      style={{
                                        textShadow:
                                          list.details.LastPriceShadow,
                                      }}
                                    >
                                      {list.details.LastPrice}
                                    </h1>
                                  </div>
                                </div>

                                <div className="col-6 d-flex align-items-start justify-content-start flex-column mt-3 order-3">
                                  <div className="LockedPrice_title">
                                    <p>Locked Price</p>
                                  </div>
                                  <div className="LockedPrice_value">
                                    <p
                                      style={{
                                        textShadow:
                                          list.details.LockedPriceShadow,
                                      }}
                                    >
                                      {list.details.LockedPrice}
                                    </p>
                                  </div>
                                </div>

                                <div className="col-6 d-flex align-items-end justify-content-end flex-column mt-3 order-4">
                                  <div className="PricePool_title">
                                    <p>Price Pool</p>
                                  </div>
                                  <div className="PricePool_value">
                                    <h1
                                      style={{
                                        textShadow:
                                          list.details.PricePoolShadow,
                                      }}
                                    >
                                      {list.details.PricePool}
                                    </h1>
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-4 pt-1">
                                <div className="col-12 payout2">
                                  <div
                                    className="payout2_card"
                                    style={{ background: list.Down.Cardbg }}
                                  >
                                    <div className="row">
                                      <div className="col-3">
                                        <div className="payout2_card_img d-flex align-items-center">
                                          <img
                                            src={list.Down.Icon}
                                            alt="Loading..."
                                          />
                                        </div>
                                      </div>
                                      <div className="col-9 d-flex align-items-center justify-content-center">
                                        <div className="payout2_card_title">
                                          <p
                                            style={{
                                              color: list.Down.TitleColor,
                                            }}
                                          >
                                            {list.Down.Title}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="small_card4"></div>
                                  <div
                                    className="small_card2"
                                    style={{
                                      background: list.Down.SmallCardBg,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LiveSellWrapper>
  );
};

export default LiveSell;
