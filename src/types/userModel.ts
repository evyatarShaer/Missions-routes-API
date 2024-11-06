export interface UserModel {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
    };
    phone: string;
}