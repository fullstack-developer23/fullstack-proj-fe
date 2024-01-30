import React from "react";
import DeleteUser from "../deleteUser/DeleteUser";
import UpdateUser from "../updateUser/UpdateUser";

const UserDetails = ({ username, setLoggedIn, setIsDeleted, loggedIn }) => {
  return (
    <div>
      <DeleteUser
        username={username}
        setLoggedIn={setLoggedIn}
        setIsDeleted={setIsDeleted}
      />

      <UpdateUser setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
    </div>
  );
};

export default UserDetails;
