import styled from "styled-components";

const GraphWrapper = styled.div`
  .Graph {
    .Graph_card {
      background: ${(props) => props.theme.Card.CardBg};
      border-radius: 12.3451px;
      padding: 1rem 2rem;

      .Model {
        height: 100%;
        display: flex;
        align-items: center;

        button {
          display: flex;
          align-items: center;
          background-color: transparent;
          border: none;
          outline: none;
          box-shadow: none;
          border-bottom: 2px dotted white;
          padding-bottom: 0rem;
          height: 2rem;

          h1 {
            font-size: 1rem;
          }

          .img1 {
            height: auto;
            width: 1rem;
          }

          .img2 {
            height: auto;
            width: 0.7rem;
          }
        }
      }

      .Candle {
        img {
          max-width: 100%;
        }
      }
    }
  }
`;

export default GraphWrapper;
