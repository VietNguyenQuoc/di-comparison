import UserControllers from './controllers';
import { Request, Response } from 'express';
import { User } from './models';

// const mockUsers = [
//   {
//     firstName: "First#1",
//     lastName: "Last#1",
//     email: "email1@test.com"
//   },
//   {
//     firstName: "First#2",
//     lastName: "Last#2",
//     email: "email2@test.com"
//   },
// ];

const mockUsers = [
  new User('First#1', 'Last#1', 'email1@test.com'),
  new User('First#2', 'Last#2', 'email2@test.com'),
];

const mockedServices = {
  getAllUsers: jest.fn(),
  addUser: jest.fn()
}

const userControllers = UserControllers(mockedServices);

describe('userControllers', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return all users when call api /allUsers', () => {
    mockedServices.getAllUsers.mockReturnValue(mockUsers);
    let req = {} as Request, res = {} as Response;
    res.send = jest.fn();

    userControllers.getAllUsers(req, res);
    expect(mockedServices.getAllUsers).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(mockUsers);
  });

  it('should return all users when call api /addUser', () => {
    let req = {} as Request, res = {} as Response;
    req.body = mockUsers[0];
    res.send = jest.fn();

    userControllers.addUser(req, res);
    expect(mockedServices.addUser).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalled();
  });
});