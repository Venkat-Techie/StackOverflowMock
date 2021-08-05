import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../../api/apis";
import userData from "./UserDetails.json";
import "../questions/./Questions.scss";
import "./Profile.scss";

export function ProfileCard(props) {
  let params = useParams();
  const [userDatails, setUserDatails] = useState(userData.items);
  const [profileCard, setProfileCard] = useState([]);
  useEffect(() => {
    getUserDetails();
    setProfileCard(getProfileCard());
  }, [userDatails]);

  const getUserDetails = () => {
    fetchUserDetails(params.id)
      .then((res) => {
        setUserDatails(res.data.items);
      })
      .catch((err) => console.error(err));
  };

  const getProfileCard = () => {
    let badges;
    userDatails.forEach((arr) => {
      badges = Object.entries(arr.badge_counts).map(([key, value]) => {
        return (
          <div
            style={{
              //   backgroundColor: key === "bronze" ? `rgba(#ab825f, 0.5)` : `rgba(#ab825f, 0.5)`
              border:
                key === "bronze" ? "#ab825f 1.5px solid" : `${key} 1.5px solid`,
              borderRadius: "3px",
            }}
            className="displayFlexRow badgeDiv"
          >
            <div
              style={{
                backgroundColor: key === "bronze" ? "#ab825f" : key,
                width: "10px",
                height: "10px",
                borderRadius: "50%",
              }}
            ></div>
            <div className="">{value}</div>
          </div>
        );
      });
    });
    return badges;
  };

  return userDatails.length > 0 ? (
    <>
      <div className="picture">
        <div className="displayFlexRow reputation ">
          <img
            className="profileImage"
            src={userDatails[0].profile_image}
            alt=""
          />
        </div>
        <div className="displayFlexRow reputation">
          <div className="">
            {userDatails.length > 0 && userDatails[0].reputation}
          </div>
          <div className="">REPUTATION</div>
        </div>
        <div className="displayFlexRow">{profileCard}</div>
      </div>
      <div className="details">
        <div className="userName">{userDatails[0].display_name}</div>
        {/* <div className="">{userDatails[0]}</div> */}
        <div className="">
          <a className="userLink link" href={userDatails[0].link}>
            {userDatails[0].link}
          </a>
        </div>
      </div>
    </>
  ) : null;
}
