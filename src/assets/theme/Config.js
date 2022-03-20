import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: {
    BodyMainColor: "#5D6588",
    BodyTextMain: "#5D6588",
    BodyTextPrimary: "#7D8396",
    BodyHeader: "white",
  },

  rightPanel: {
    RightPanelBg: "rgba(30, 31, 37, 0.8)",
    RightPanelBgMobile: "rgba(30, 31, 37, 1)",
  },

  navbar: {
    NavbarBg: "rgba(20, 21, 24, 0.8)",
    NavbarActiveColor: "white",
    NavbarColor: "#5D6588",
    NavbarHoverColor: "white",
    NavbarSmallSliderBg: "rgba(20, 21, 24, 1)",
    NavbarSmallSliderCloseBtnColor: "white",
  },

  input: {
    InputBg: "rgba(47, 50, 65, 0.5)",
    InputColor: "#5D6588",
  },

  dropDownList: {
    DropDownListBg: "rgba(30, 31, 37, 0.8)",
    DropDownListColor: "white",
  },

  Card: {
    CardBg: "rgba(30, 31, 37, 0.8)",
    CardSecondaryBg: "rgba(30, 31, 37, 1)",
    CardBg1: "rgba(33, 35, 41, 1)",
    CardFilter: "blur(3.82692px)",
    CardMainColor: "#A5ADCF",
    CardPrimaryColor: "#5D6588",
    CardMask: "linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0)",
    CardBorderColor1:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #D43259 100%) border-box",
    CardBorderColor2:
      "linear-gradient(180deg, #01F4C8 0%, rgba(0, 0, 0, 0) 100%) border-box",
  },
};

export const darkTheme = {};

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Sora:wght@400;500;600;700;800&display=swap');

*,
*:before,
*:after {
    box-sizing: inherit;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body,
html {
    margin: 0;
}

html {
    margin: 0;
    padding: 0;
    text-size-adjust: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
}

::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background: white;
}

::-webkit-scrollbar-corner {
    background: white;
}

::-webkit-scrollbar-thumb {
    background: #a8a8a8;
    border-radius: 10px;
    -webkit-border-radius: 1ex;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Sora', sans-serif;
    font-style: normal;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    background: transparent;
    background-image: url("/images/Dashboard.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    background-attachment: fixed;
}

h1,
h2 {
    font-weight: 900;
    color: ${(props) => props.theme.body.BodyHeader};
    margin-bottom: 0rem !important;
}

p {
    margin-bottom: 0 !important;
}

.container {
    max-width: 1250px !important;
}

.RightPanel {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 230px;
    z-index: 1;
    transition: all 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 0px 9.69367px 9.69367px 0px;
    background: ${(props) => props.theme.rightPanel.RightPanelBg};
}

.LeftPanel {
    position: relative;
    padding: 1rem 1.5rem;
    right: 0px;
    width: calc(100% - 230px);
    transition: all 0.5s ease;
}

.chat_btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 800;
    display: none;

    .card {
        background-color: rgba(30, 31, 37, 1);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        cursor: pointer;
        border-radius: 50%;
        padding: 0.8rem;

        img {
            height: auto;
            width: 2rem;
        }
    }
}

@media only screen and (max-width: 1000px) {
    .LeftPanel {
        left: 0;
        width: 100%;
        padding: 0rem;
    }

    .RightPanel {
        position: fixed;
        top: 0;
        right: 0;
        height: auto;
        width: 0;
        z-index: 999;
        overflow-x: hidden;
        transition: all 0.3s ease;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        background: ${(props) => props.theme.rightPanel.RightPanelBgMobile};
    }


    .chat_btn {
        display: block;
    }
}

`;
