function HomeReducer(state = { count: 0 }, action) {
  let count;
  switch (action.type) {
    case "INCREMENT":
      count = state.count + 1;
      return { ...state, count };
    case "DECREMENT":
      count = state.count - 1;
      return { ...state, count };
    default:
      return state;
  }
}

export default HomeReducer;
