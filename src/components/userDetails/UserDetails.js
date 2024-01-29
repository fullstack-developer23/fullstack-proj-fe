import React from "react";
import DeleteUser from "../deleteUser/DeleteUser";

const UserDetails = ({ username, setLoggedIn, setIsDeleted }) => {
  return (
    <div>
      <DeleteUser
        username={username}
        setLoggedIn={setLoggedIn}
        setIsDeleted={setIsDeleted}
      />
    </div>
  );
};

export default UserDetails;
