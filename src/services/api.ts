import axios from 'axios';
import { UserModel } from '../types/userModel';
import { MissionModel } from '../types/missinModel';

export const fetchUsers = async (): Promise<UserModel[]> => {
    try {
        const response = await axios.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
        console.log('fetch function is success');
        return response.data; 
    } catch (error) {
        console.error('Failed to fetch users', error);
        return [];
    }
};


export const fetchMissions = async (): Promise<MissionModel[]> => {
    try {
        const response = await axios.get<MissionModel[]>('https://jsonplaceholder.typicode.com/todos');
        console.log('fetch function is success');
        return response.data.filter(mission => mission.userId <= 10);
    } catch (error) {
        console.error('Failed to fetch missions', error);
        return [];
    }
}