import UserDetails from "../../components/userDetails/UserDetails";
import UserOrders from "../../components/userOrders/UserOrders";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserAccountPage = ({ username, setLoggedIn, loggedIn }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  if (isDeleted) {
    navigate("/");
  }
  return (
    <div class="userAccountWrapper">
      <UserDetails
        username={username}
        setLoggedIn={setLoggedIn}
        setIsDeleted={setIsDeleted}
        loggedIn={loggedIn}
      />
      <UserOrders loggedIn={loggedIn} />
    </div>
  );
};

export default UserAccountPage;
