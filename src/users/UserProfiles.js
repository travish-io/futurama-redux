import React from "react";
import { useSelector } from "react-redux";
import "./userProfiles.css";

export const UserProfiles = () => {
  const profiles = useSelector((state) => state.profiles);

  console.log(profiles);
  return (
    <>
      <div className="user-profile">
        {profiles?.userProfiles.map((profile) => {
          return (
            <div style={{ height: 290, width: 360, position: "relative" }}>
              <div className={`bg-${profile.user.id}`}></div>
              <p
                style={{
                  position: "absolute",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {profile.user.name}: <br />
                <small>{profile.user.company}</small>
                <br />
                <small>{profile.user.position}</small>
                <br />
                <small>Age: {profile.user.profile.age}</small>
                <br />
                <small>Gender: {profile.user.profile.gender}</small>
                <br />
                <small>Home Planet: {profile.user.profile.planet}</small>
                <br />
                <small>Species: {profile.user.profile.species}</small>
                <br />
                <small>Status: {profile.user.profile.status}</small>
                <br />
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
