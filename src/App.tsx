import { Link, Routes, Route } from "react-router-dom";
import UserList from "./components/user/User";
import Details from "./components/details/Details";
import Missions from "./components/mission/Mission";
import { UserProvider } from "./context/userContext";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <UserProvider>
          <nav>
            <Link to="/users">users</Link>
          </nav>
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/details/:userId" element={<Details />} />
            <Route path="/Missions/:userId" element={<Missions />} />
          </Routes>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
