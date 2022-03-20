export const GraphTokenSelect = ({ img1, img2, name }) => {
  return {
    type: "Graph_TOKEN_SELECT",
    payload: {
      img1,
      img2,
      name,
    },
  };
};
