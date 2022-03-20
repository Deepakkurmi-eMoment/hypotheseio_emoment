import styled from "styled-components";

const ModelSWrapper = styled.div`
  .Model_overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    visibility: hidden;
    opacity: 0.6;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
      background: inherit;
    }
  }

  .Model {
    position: relative;
    visibility: hidden;
    z-index: -1;
    opacity: 0;
    height: auto !important;
    max-width: 445px !important;
    margin: auto;
    border-radius: 15px;
    background: ${(props) => props.theme.Card.CardSecondaryBg};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

    .Model_section {
      height: auto !important;
      width: 100% !important;
      padding: 1rem 2rem;

      .Model_top_Section {
        border-bottom: 1px solid white;

        .title {
          p {
            font-size: 1.4rem;
            color: white;
            font-weight: bold;
          }
        }

        .close_div {
          .close_icon {
            color: white;
            font-size: 2rem;
            cursor: pointer;
          }
        }
      }

      .Model_bottom_Section {
        .search_box {
          input {
            border: 2px solid white;
            border-radius: 50px;
            overflow-y: scroll;
            width: 100%;
            outline: none;
            text-indent: 10px;
            padding: 10px;
            color: white;
            background: transparent;

            &:hover,
            &:focus {
              outline: none;
            }

            &::placeholder {
              color: white;
            }
          }
        }

        .token_title {
          p {
            color: white;
          }
        }

        .token_list {
          height: ${(props) => props.height};
          overflow-y: scroll;
          overflow-x: hidden;

          &::-webkit-scrollbar {
            width: 8px;
            background: inherit;
          }

          &::-webkit-scrollbar-track {
            border-radius: 10px;
          }

          &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(5px);
            border-radius: 10px;
          }

          .details {
            cursor: pointer;
            padding: 1rem 0rem;
            transition: all 0.3s;
            border-radius: 20px;

            &:hover {
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(20px);
              padding: 1rem 0rem 1rem 1rem;
            }

            img {
              // border-radius: 50%;
            }

            .details_name {
              span {
                color: white;
                font-size: 0.98rem;
              }

              p {
                color: #e0e0e0;
                font-size: 0.85rem;
              }
            }

            .balance {
              p,
              span {
                color: #e0e0e0;
                font-size: 0.95rem;
              }
            }

            .cal_Balance {
              p {
                color: #e0e0e0;
                font-size: 0.7rem;
              }
            }
          }
        }
      }
    }
  }

  .Model {
    transform: scale(0);
    transition: all 0.4s ease-in-out;
  }

  .Model_overlay.show {
    visibility: visible;
    z-index: 900;
    opacity: 1;
  }

  .Model_overlay.show > .Model {
    visibility: visible;
    z-index: 1000;
    transform: scale(1);
    opacity: 1;
    animation: pop_swirl_forwards 0.4s ease forwards;
  }

  @keyframes pop_swirl_forwards {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @media only screen and (max-width: 600px) {
    .Model_overlay {
      padding: 0.1rem 0.2rem;
    }

    .Model {
      width: 100% !important;

      .Model_section {
        padding: 1.1rem 1.4rem;
      }
    }
  }
`;

export default ModelSWrapper;
