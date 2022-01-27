const defaultState = {
  loading: false,
  userProfiles: [],
  error: "",
};

const ProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USER_SUCCESS":
      const findState = state?.userProfiles?.find(
        (obj) => obj.user.id === action.payload.user.id
      );
      if (findState) {
        return {
          loading: false,
          userProfiles: [...state],
        };
      } else {
        return {
          ...state,
          loading: false,
          userProfiles: [...state.userProfiles, action.payload],
        };
      }
    case "USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CLOSE_USER_PROFILE":
      const filterState = state?.userProfiles?.filter(
        (obj) => obj.user.id !== action.payload
      );
      return {
        loading: false,
        userProfiles: [...filterState],
      };
    default:
      return state;
  }
};

export default ProfileReducer;
