import styled from "styled-components";

const NavbarWrapper = styled.div`
  .sideNav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1000;
    top: 0;
    border-radius: 0px 12px 12px 0px;
    left: 0;
    overflow-x: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    transition: 0.3s;
    background-color: ${(props) => props.theme.navbar.NavbarSmallSliderBg};

    .sideNav_img {
      height: 2.2rem;
      width: auto;
    }

    .closeBtn {
      font-size: 40px;
      cursor: pointer;

      .close_icon {
        font-size: 1.8rem;
        color: ${(props) => props.theme.navbar.NavbarSmallSliderCloseBtnColor};
      }
    }

    ul {
      list-style-type: none;

      li {
        .noActive,
        .active {
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          text-decoration: none;
          font-weight: 900;
          font-size: 1rem;
          padding: 0px 10px;
          transition: all 0.4s;
          padding: 0.8rem 0rem;

          &:hover {
            color: ${(props) => props.theme.navbar.NavbarActiveColor};
          }
        }

        .noActive {
          color: ${(props) => props.theme.navbar.NavbarColor};
          transition: all 0.4s;
        }

        .active {
          color: ${(props) => props.theme.navbar.NavbarActiveColor};
        }
      }
    }
  }

  .navbar_component {
    background: ${(props) => props.theme.navbar.NavbarBg} !important;
    width: 100%;
    padding: 0.5rem 1rem;
    z-index: 800;
    border-radius: 12px;
    align-items: center;

    nav {
      justify-content: inherit !important;
      flex-wrap: inherit;

      .navbar-brand {
        flex-grow: 0 !important;
        display: flex;
        align-items: center;

        img {
          height: 2.5rem;
          width: auto;
        }

        h1 {
          font-size: 1rem;
          text-transform: uppercase;
        }
      }

      .navbar-icon {
        color: white;
        display: none;
        font-size: 1.6rem;
        cursor: pointer;
      }

      .left_ui_block {
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;

        .nav_list {
          display: flex;
          align-items: center;
          padding: 0rem 0rem 0rem 1rem;

          .noActive,
          .active {
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            text-decoration: none;
            font-weight: 900;
            font-size: 0.9rem;
            padding: 0px 10px;
            transition: all 0.4s;

            &:hover {
              color: ${(props) => props.theme.navbar.NavbarActiveColor};
            }
          }

          .noActive {
            color: ${(props) => props.theme.navbar.NavbarColor};
            transition: all 0.4s;
          }

          .active {
            color: ${(props) => props.theme.navbar.NavbarActiveColor};
          }
        }
      }

      .right_ui_block {
        margin-bottom: 0;
        list-style: none;

        .right_nav_list {
          display: flex;
          align-items: center;
          padding: 0rem 1rem 0rem 1rem;

          .search {
            position: relative;
            display: flex;
            justify-content: flex-end;

            input {
              background: ${(props) => props.theme.input.InputBg};
              border-radius: 50px;
              padding: 8px 22px;
              border: none;
              outline: none;
              width: 90%;
              color: ${(props) => props.theme.input.InputColor};
              font-size: 0.95rem;

              &::placeholder {
                color: ${(props) => props.theme.input.InputColor};
              }
            }

            img {
              position: absolute;
              right: 18px;
              top: 9px;
            }
          }

          .notification {
            position: relative;
            cursor: pointer;

            span {
              position: absolute;
              width: 8px;
              height: 8px;
              top: 1px;
              right: 2px;
              background: #01cdec;
              border-radius: 50%;
            }
          }

          .btn-group {
            .dropdown_btn {
              outline: none;
              border: none;
              background-color: transparent;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s;
              padding: 0.4rem;

              .icon {
                font-size: 1.4rem;
              }

              span {
                font-weight: 900;
                font-size: 0.9rem;
              }

              img {
                border-radius: 50%;
                height: auto;
                width: 2rem;
                margin-left: 0.5rem;
              }
            }

            .dropdown-menu {
              margin: 1.2rem 0 0;
              border-radius: 0.4rem;
              transition: all 0.2s;
              overflow: hidden;
              transform-origin: top center;
              transform: scale(1, 0);
              display: block;
              background-color: ${(props) =>
                props.theme.dropDownList.DropDownListBg};

              .dropdown-item {
                color: ${(props) => props.theme.dropDownList.DropDownListColor};
                transition: all 0.2s;

                &:hover {
                  color: white;
                  text-decoration: none;
                  background-color: ${(props) =>
                    props.theme.dropDownList.DropDownListBg};
                }

                &:focus {
                  color: white;
                  background-color: ${(props) =>
                    props.theme.dropDownList.DropDownListBg};
                }
              }
            }

            &.show {
              .dropdown-menu {
                transform: scale(1);
              }
            }
          }
        }
      }
    }

    .mobile_input_search {
      display: none;
      justify-content: center;
      align-items: center;
      width: 100%;

      .input_section {
        position: relative;
        width: 100%;

        input {
          background: ${(props) => props.theme.input.InputBg};
          border-radius: 50px;
          padding: 0.7rem 1.5rem;
          border: none;
          outline: none;
          width: 100%;
          color: ${(props) => props.theme.input.InputColor};
          font-size: 0.95rem;

          &::placeholder {
            color: ${(props) => props.theme.input.InputColor};
          }
        }

        img {
          position: absolute;
          right: 25px;
          top: 12px;
        }
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .navbar_component {
      padding: 0.5rem 0.5rem;

      nav {
        flex-wrap: wrap;

        .navbar-brand {
          margin-left: 12px;
        }

        .navbar-icon {
          display: block;
        }

        .left_ui_block {
          display: none !important;
        }
      }
    }
  }

  @media only screen and (max-width: 750px) {
    .navbar_component {
      nav {
        flex-wrap: inherit;

        .navbar-brand {
          h1 {
            display: none;
          }
        }

        .right_ui_block {
          .right_nav_list {
            padding: 0rem 0.5rem 0rem 0.5rem;

            .btn-group {
              .dropdown_btn {
                padding: 0.4rem 0rem;

                span {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .navbar_component {
      padding: 0.3rem 1rem 0.8rem 1rem;

      nav {
        .right_ui_block {
          .right_nav_list {
            padding: 0rem 0.5rem 0rem 0.5rem;

            .search {
              display: none;
            }

            .btn-group {
              .dropdown_btn {
                padding: 0.4rem 0rem;

                span {
                  display: none;
                }
              }
            }
          }
        }
      }

      .mobile_input_search {
        display: flex;
      }
    }
  }
`;

export default NavbarWrapper;
