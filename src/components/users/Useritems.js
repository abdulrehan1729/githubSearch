import React, { Component } from "react";

const Useritems = () => {
  let state = {
    id: "id",
    login: "octocat",
    avatar_ulr: "https://github.com/images/error/octocat_happy.gif",
    html_url: "https://github.com/octocat"
  };

  const { login, avatar_ulr, html_url } = state;
  return (
    <div className="card text-center">
      <img
        src={avatar_ulr}
        alt=""
        className="round-img"
        style={{ width: "70px" }}
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default Useritems;
