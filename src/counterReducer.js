const counterReducer = (state = 0, action) => {
  if (action.type === "ADD") {
    state++;
  }
  if(action.type === "SUB") {
    state--;
  }
  return state;
};
export default counterReducer;
