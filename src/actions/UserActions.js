import axios from "axios";

export const GetUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "USERS_LOADING",
    });

    const response = await axios.get(
      "https://immense-bastion-95145.herokuapp.com/api/users"
    );

    dispatch({
      type: "USERS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "USERS_FAILURE",
      payload: error.message,
    });
  }
};

export const GetUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOADING",
    });

    const response = await axios.get(
      `https://immense-bastion-95145.herokuapp.com/api/users/${id}`
    );

    dispatch({
      type: "USER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_FAILURE",
      payload: error.message,
    });
  }
};

export const CloseUserProfile = (id) => (dispatch) => {
  dispatch({
    type: "CLOSE_USER_PROFILE",
    payload: id,
  });
};
