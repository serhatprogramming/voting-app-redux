// Initial state for voting
const initialState = {
  yay: 0,
  nay: 0,
  neutral: 0,
};

// Voting reducer function
const votingReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle different vote actions
    case "VOTE_YAY":
      return { ...state, yay: state.yay + 1 };
    case "VOTE_NAY":
      return { ...state, nay: state.nay + 1 };
    case "VOTE_NEUTRAL":
      return { ...state, neutral: state.neutral + 1 };
    default:
      return state;
  }
};

export default votingReducer;
