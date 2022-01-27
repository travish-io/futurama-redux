import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../actions/UserActions";
import { GetUser } from "../actions/UserActions";
import { CloseUserProfile } from "../actions/UserActions";

export const ListUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const profiles = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(GetUsers());
  }, []);

  return (
    <>
      <div>
        {users?.users?.users?.map((user) => {
          return (
            <div>
              <div>
                <p>
                  {user.name} <br />
                  <small>{user.company}</small>
                </p>
              </div>
              <button onClick={() => dispatch(GetUser(user.id))}>
                Show Profile
              </button>
              <button
                onClick={() => {
                  dispatch(CloseUserProfile(user.id));
                }}
              >
                Close Profile
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
