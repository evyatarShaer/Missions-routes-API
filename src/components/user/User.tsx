import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link, Routes, Route } from "react-router-dom";
import Details from "../details/Details";
import styles from "./user.module.css";

const UsersList = () => {
  const context = useContext(UserContext);
  if (!context) return null;

  const { users } = context;

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <div className={styles.userCard} key={user.id}>
          <strong>{user.name}</strong>
          <button className={styles.detailsButton}>
            <nav>
              <Link className={styles.link} to={`/Details/${user.id}`}>Details</Link>
            </nav>
          </button>
        </div>
      ))}
      <Routes>
        <Route path="/details/:userId" element={<Details />} />
      </Routes>
    </div>
  );
};

export default UsersList;
