const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...state, posts: action.payload };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default reducer;
