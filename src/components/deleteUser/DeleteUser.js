import { deleteUserFetch } from "../../utils/fetch";

const DeleteUser = ({ username, setLoggedIn, setIsDeleted }) => {
  const handleDeleteClick = async (e) => {
    e.preventDefault();
    await deleteUserFetch(username);
    setLoggedIn(false);
    setIsDeleted(true);
  };

  return (
    <div className="deletebutton">
      <button type="button" onClick={handleDeleteClick}>
        Delete User
      </button>
    </div>
  );
};

export default DeleteUser;
