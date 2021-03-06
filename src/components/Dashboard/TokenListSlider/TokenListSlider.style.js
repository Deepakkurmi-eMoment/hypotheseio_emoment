import styled from "styled-components";

const TokenListSliderWrapper = styled.div`
  .TokenListSlider {
    .slider {
      .TokenListSlider_card {
        background: ${(props) => props.theme.Card.CardBg};
        backdrop-filter: ${(props) => props.theme.Card.CardFilter};
        border-radius: 7.65385px;
        padding: 1.2rem 1.2rem;

        .token_icon {
          img {
            height: auto;
            width: 2.5rem;
            border-radius: 50%;
          }
        }

        .graph_section {
          .img_section {
            img {
              // height: auto;
              // width: 8rem;
            }
          }

          .transition {
            .upIcon {
              color: white;
              font-size: 1.3rem;
            }

            h1 {
              font-size: 1.1rem;
            }
          }
        }

        .Name_section {
          p {
            color: ${(props) => props.theme.Card.CardMainColor};
            font-size: 0.9rem;
          }
        }

        .total_section {
          h1 {
            font-size: 1.2rem;
          }
        }

        .sort_section {
          p {
            color: ${(props) => props.theme.Card.CardPrimaryColor};
            font-size: 0.9rem;
          }
        }
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
`;

export default TokenListSliderWrapper;
