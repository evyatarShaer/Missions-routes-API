import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchMissions, fetchUsers } from '../services/api'; 
import { UserModel } from '../types/userModel';
import { MissionModel } from "../types/missinModel";

interface UserContextType {
    users: UserModel[];
    missions: MissionModel[];
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<UserModel[]>([]);
    const [missions, setMissions] = useState<MissionModel[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            const usersList = await fetchUsers();
            setUsers(usersList); 
        };
        getUsers();
    }, []);
    
    useEffect(() => {
        const getMissions = async () => {
            const missionsList = await fetchMissions();
            setMissions(missionsList);
        };
        getMissions();
    }, []);

    return (
        <UserContext.Provider value={{ users, missions }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;