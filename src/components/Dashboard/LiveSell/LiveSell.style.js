import styled from "styled-components";

const LiveSellWrapper = styled.div`
  .LiveSell {
    .LiveSell_section {
      background: rgba(30, 31, 37, 0.7);
      border-radius: 12.3722px;
      padding: 1.5rem 2rem;

      .title {
        h1 {
          font-size: 1rem;
        }
      }

      .live_cart {
        .circle {
          background-color: #2c2e3a;
          border-radius: 50px;
          padding: 0.85rem 0.8rem;

          img {
            height: auto;
            width: 1.6rem;
          }
        }
      }

      .time {
        p {
          color: #00b3f4;
          font-weight: 600;
        }

        span {
          color: white;
          font-size: 0.8rem;
        }
      }

      .List_Slider {
        .LiveSell_section_card1 {
          &::before {
            background: ${(props) => props.theme.Card.CardBorderColor1};
          }
        }

        .LiveSell_section_card2 {
          &::before {
            background: ${(props) => props.theme.Card.CardBorderColor2};
          }
        }

        .LiveSell_section_card1,
        .LiveSell_section_card2 {
          background: ${(props) => props.theme.Card.CardBg1};
          height: 300px;
          width: 90%;
          padding: 1rem;
          position: relative;
          border-radius: 8.82472px;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 8.82472px;
            border: 0.74px solid transparent;
            -webkit-mask: ${(props) => props.theme.Card.CardMask};
            -webkit-mask-composite: destination-out;
            -moz-mask: ${(props) => props.theme.Card.CardMask};
            -moz-mask-composite: destination-out;
            -o-mask: ${(props) => props.theme.Card.CardMask};
            -o-mask-composite: destination-out;
            mask-composite: exclude;
          }

          .payout1 {
            position: relative;

            .payout1_card {
              position: absolute;
              left: -30px;
              height: 38px;
              width: 100%;
              border-radius: 0px 36.7697px 36.7697px 0px;

              .payout1_card_title {
                p {
                  font-size: 0.7rem;
                  font-weight: 700;
                }
              }
            }

            .small_card1 {
              position: absolute;
              height: 35px;
              width: 40px;
              left: -23px;
              z-index: -1;
              overflow: hidden;
              top: 18px;
              transform: rotate(213deg);
            }

            .small_card3 {
              position: absolute;
              width: 170px;
              height: 11.03px;
              left: 0;
              top: 33px;
              background: rgba(0, 0, 0, 0.4);
              // background-color:red;
              filter: blur(7.35394px);
              transform: rotate(176deg);
            }
          }

          .payout2 {
            position: relative;

            .payout2_card {
              position: absolute;
              right: -30px;
              height: 38px;
              width: 100%;
              border-radius: 36.7697px 0px 0px 36.7697px;

              .payout2_card_title {
                p {
                  font-size: 0.7rem;
                  font-weight: 700;
                }
              }
            }

            .small_card2 {
              position: absolute;
              height: 35px;
              width: 40px;
              right: -24px;
              z-index: -1;
              overflow: hidden;
              top: -11px;
              transform: rotate(210deg);
              background: #161314;
            }

            .small_card4 {
              position: absolute;
              width: 150px;
              height: 15px;
              right: 0;
              top: -8px;
              background: rgba(0, 0, 0, 0.4);
              // background-color:red;
              filter: blur(7.35394px);
              transform: rotate(178deg);
            }
          }

          .card_title {
            img {
              height: auto;
              width: 1rem;
            }

            p {
              font-size: 0.8rem;
              font-weight: 700;
            }
          }

          .details {
            .Number {
              p {
                font-size: 0.7rem;
                font-weight: 800;
              }
            }

            .LastPrice_title {
              p {
                color: ${(props) => props.theme.body.BodyMainColor};
                font-size: 0.8rem;
              }
            }

            .LastPrice_value {
              h1 {
                font-size: 1.1rem;
              }
            }

            .LockedPrice_value {
              p {
                font-size: 0.7rem;
                color: white;
              }
            }

            .PricePool_value {
              h1 {
                font-size: 0.7rem;
              }
            }

            .LockedPrice_title,
            .PricePool_title {
              color: ${(props) => props.theme.body.BodyMainColor};
              font-size: 0.6rem;
            }
          }
        }

        .slick-prev,
        .slick-next {
          z-index: 400 !important;
          font-size: 3rem !important;
          line-height: 1;
          color: white !important;
          text-align: center;
          opacity: 0.85;
          -webkit-font-smoothing: antialiased;
        }

        .slick-prev {
          top: -90px;
          left: 44% !important;
        }

        .slick-next {
          top: -90px;
          right: 44% !important;
        }

        .slick-next:before,
        .slick-prev:before {
          content: "" !important;
        }

        .next-slick-arrow,
        .prev-slick-arrow {
          color: white;
          font-size: 48px;
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 1.8rem !important;
          line-height: 1;
          background-color: white !important;
          color: black;
          opacity: 0.75;
          -webkit-font-smoothing: antialiased;
        }

        .slick-dots li.slick-active button:before {
          color: white !important;
          font-size: 0.4rem !important;
        }

        .slick-dots li button:before {
          font-size: 0.4rem !important;
          color: black !important;
          opacity: 1 !important;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .LiveSell {
      .LiveSell_section {
        .List_Slider {
          .slick-prev {
            top: -90px;
            left: 42% !important;
          }

          .slick-next {
            top: -90px;
            right: 42% !important;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .LiveSell {
      .LiveSell_section {
        .List_Slider {
          .slick-prev {
            top: -170px;
            left: 40% !important;
          }

          .slick-next {
            top: -170px;
            right: 40% !important;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .LiveSell {
      .LiveSell_section {
        padding: 1.5rem 1rem 2.5rem 1rem;

        .List_Slider {
          .slick-prev {
            top: -170px;
            left: 30% !important;
          }

          .slick-next {
            top: -170px;
            right: 30% !important;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 340px) {
    .LiveSell {
      .LiveSell_section {
        padding: 1.5rem 1rem 2.5rem 1rem;

        .List_Slider {
          .slick-prev {
            top: -170px;
            left: 20% !important;
          }

          .slick-next {
            top: -170px;
            right: 20% !important;
          }
        }
      }
    }
  }
`;

export default LiveSellWrapper;
