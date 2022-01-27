const defaultState = {
  loading: false,
  users: [],
  error: "",
};

const UsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USERS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UsersReducer;
