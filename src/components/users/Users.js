import React from "react";
import UserItems from "./Useritems";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  console.log(Spinner);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
