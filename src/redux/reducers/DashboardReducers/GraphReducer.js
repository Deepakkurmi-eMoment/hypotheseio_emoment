const point = "/images/tokens/";

const initialState = {
  img1: point + "SOL.png",
  img2: point + "USDC.png",
  name: "SOL/USDC",
};

const GraphTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Graph_TOKEN_SELECT":
      const { img1, img2, name } = action.payload;

      return {
        ...state,
        img1,
        img2,
        name,
      };

    default:
      return state;
  }
};

export default GraphTokenReducer;
