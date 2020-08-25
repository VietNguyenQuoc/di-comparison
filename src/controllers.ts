import { Request, Response } from 'express';
import { User } from './models';
import { IUserServices } from './services';

const UserControllers = (userServices: IUserServices) => {
  const getAllUsers = (_req: Request, res: Response): void => {
    const users = userServices.getAllUsers();
    res.send(users);
  };

  const addUser = (req: Request, res: Response): void => {
    const { firstName, lastName, email } = req.body;
    const user = new User(firstName, lastName, email);
    userServices.addUser(user);
    res.send("Created");
  };

  return { getAllUsers, addUser };
}

export default UserControllers;