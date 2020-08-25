import { addUser, getAllUsers } from './services';
import { Request, Response } from 'express';
import { User } from './models';

export const getAllUsersCtl = (_req: Request, res: Response): void => {
  const users = getAllUsers();
  res.send(users);
};

export const addUserCtl = (req: Request, res: Response): void => {
  const { firstName, lastName, email } = req.body;
  const user = new User(firstName, lastName, email);
  addUser(user);
  res.send("Created");
};