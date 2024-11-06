import { useContext } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import UserContext from '../../context/userContext';
import Missions from '../mission/Mission';


const Details = () => {
  const { userId } = useParams<{ userId: string }>();
  const context = useContext(UserContext);
    if (!context) return null;

    const { users } = context;
    const user = users.find(user => user.id === Number(userId));
    if (!user) return <p>User not found</p>;

    console.log('userId from params:', userId);
    console.log('Found user:', user);

  return (
    <div>
      <h2>Details for {user.name}</h2>
        <div>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address.city}, {user.address.street}</p>
        </div>
        <div>
          <nav>
            <Link to={`/Missions/${user.id}`}>Missions</Link>
          </nav>
          <Routes>
            <Route path="/missions/:missionId" element={<Missions />} />
          </Routes>
        </div>
    </div>
  )
}

export default Details