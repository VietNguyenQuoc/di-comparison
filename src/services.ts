import { User } from "./models";

let users: User[] = [];

export interface IUserServices {
  getAllUsers(): User[];
  addUser(user: User): void;
}

const UserServices = (): IUserServices => {
  const getAllUsers = (): User[] => {
    return users;
  }

  const addUser = (user: User): void => {
    users.push(user);
  }

  return { getAllUsers, addUser };
}

export default UserServices;