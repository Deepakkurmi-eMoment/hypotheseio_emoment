import styled from "styled-components";

const RightPanelWrapper = styled.div`
  .chat {
    height: 90vh;
    overflow-y: scroll;
    padding-bottom: 50px;

    &::-webkit-scrollbar {
      height: 10px;
      width: 5px;
      background: rgba(30, 31, 37, 0.8);
    }

    &::-webkit-scrollbar-corner {
      background: rgba(30, 31, 37, 0.8);
    }

    &::-webkit-scrollbar-thumb {
      background: #a8a8a8;
      border-radius: 10px;
      -webkit-border-radius: 1ex;
    }

    .close_section {
      display: none;
      padding-top: 5px;

      .icon {
        color: #0addff;
        font-size: 1.5rem;
      }
    }

    .chart_section {
      margin-top: 2rem;

      .card_list {
        width: 100%;

        .img_section {
          position: relative;

          .img_people {
            border-radius: 50%;
            height: auto;
            width: 2.4rem;
          }

          .user_type {
            position: absolute;
            left: 11px;
            top: 27px;
            height: auto;
            width: 1.2rem;
          }
        }

        .details_section {
          .NameTime {
            .name {
              h1 {
                font-size: 1rem;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }

            .time {
              p {
                font-size: 0.8rem;
                color: white;
                margin-left: 8px;
              }
            }
          }

          .message_section {
            .message_card {
              background: #353841;
              border-radius: 20px;
              padding: 0.5rem 0.8rem;
              width: auto;
              display: flex;
              align-items: center;

              p {
                color: white;
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }

    .search_section {
      position: absolute;
      bottom: 0;
      width: 100%;

      .search_card {
        height: 70px;
        padding: 0rem 0.6rem;
        background: #353841;
        display: flex;
        justify-content: center;

        .search {
          position: relative;
          width: 100%;

          input {
            background: #1d1f25;
            border: 0.807806px solid #0addff;
            box-sizing: border-box;
            border-radius: 40.3903px;
            padding: 0.45rem 1rem;
            width: 100%;
            color: white;
            font-style: normal;
            font-size: 0.9rem !important;

            &:focus {
              outline: none;
            }
          }

          img {
            position: absolute;
            right: 13px;
            top: 7px;
            cursor: pointer;
          }
        }

        .send_icon {
          cursor: pointer;

          img {
            height: auto;
            width: 1.5rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .chat {
      height: 100vh;

      .close_section {
        display: block;
      }
    }
  }
`;

export default RightPanelWrapper;
