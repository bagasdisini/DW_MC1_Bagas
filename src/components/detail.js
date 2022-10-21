import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const Profile = [
    {
      id: "1",
      username: "jedeye__",
      image:
        "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
      follower: "1.1m",
      following: "1.2k",
    },
    {
      id: "2",
      username: "radif_mp",
      image:
        "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      follower: "2m",
      following: "8k",
    },
    {
      id: "3",
      username: "samsul_rijal29",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      follower: "5k",
      following: "3k",
    },
    {
      id: "4",
      username: "ilfat_fathul",
      image:
        "https://images.unsplash.com/photo-1543965170-4c01a586684e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1449&q=80",
      follower: "2k",
      following: "1k",
    },
    {
      id: "5",
      username: "suryaa6666",
      image:
        "https://cdn.idntimes.com/content-images/duniaku/post/20201223/rinnegan-sasuke-c07f5e2e4fe0650927cf540a9c47a286_600x400.jpg",
      follower: "999k",
      following: "1k",
    },
  ];

  const idparams = useParams();
  const profile = Profile.filter((p) => p.id === idparams.id);

  return (
    <div>
      <div style={{ backgroundColor: "#808080" }}>
        <img
          src={profile[0].image}
          alt="foto"
          width="200px"
          height="200px"
          style={{
            display: "flex",
            objectFit: "cover",
            borderRadius: "50%",
            border: "10px solid red",
            margin: "0px auto",
          }}
        ></img>
        <div
          style={{
            display: "flex",
            margin: "0px auto",
            justifyContent: "center",
            color: "white"
          }}
        >
          <h2>@{profile[0].username}</h2>
        </div>
        <div
          style={{
            display: "flex",
            margin: "0px auto",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              marginRight: "50px",
            }}
          >
            {profile[0].follower}
          </h3>
          <h3>{profile[0].following}</h3>
        </div>
        <div
          style={{
            display: "flex",
            margin: "0px auto",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              marginRight: "50px",
            }}
          >
            Followers
          </h3>
          <h3>following</h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "0px auto",
          justifyContent: "center",
        }}
      >
        <h4>
          <a href="/">Back</a>
        </h4>
      </div>
    </div>
  );
};

export default Detail;
