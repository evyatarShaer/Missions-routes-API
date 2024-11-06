import { useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/userContext";

const Mission = () => {
  const { userId } = useParams<{ userId: string }>();
  const context = useContext(UserContext);
  if (!context) return null;

  const { missions } = context;
  const missionsList = missions.filter(
    (mission) => mission.userId === Number(userId)
  );
  return (
    <div>
      <h2>Missions for User {userId}</h2>
      {missionsList.length > 0 ? (
        missionsList.map((mission) => (
          <div key={mission.id}>
            <h3>Mission: {mission.title}</h3>
            <p>Completed: {mission.completed}</p>
          </div>
        ))
      ) : (
        <p>No missions found for this user.</p>
      )}
    </div>
  );
};

export default Mission;
