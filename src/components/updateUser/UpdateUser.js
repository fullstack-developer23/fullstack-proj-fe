import React, { useState } from "react";
import { updateEmailFetch } from "../../utils/fetch";

const UpdateUser = ({ setLoggedIn, loggedIn }) => {
  console.log("hello from userupdate", loggedIn);
  const [newEmail, setNewEmail] = useState("");

  const handleUpdateClick = async (e) => {
    e.preventDefault();

    try {
      const result = await updateEmailFetch(loggedIn.username, newEmail);

      if (result) {
        setLoggedIn({ ...loggedIn, email: result.user.email });
      }
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  return (
    <div className="updateEmail">
      <h3 className="updateEmail-title">Update Email</h3>

      <div className="form-box">
        <form onSubmit={handleUpdateClick}>
          <input
            className="login-input"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button type="submit" onClick={handleUpdateClick}>
            Update Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
