import { addUserCtl, getAllUsersCtl } from './controllers';
import * as services from './services';
import { Request, Response } from 'express';
import { mocked } from 'ts-jest/utils';

// Here we explicitly mock the services
jest.mock('./services');

// ts-jest mocked is a helper function that return a mock object with module's typings.
// Without it, we have to use type assertion for the module.
const mockedServices = mocked(services);
const mockUsers = [
  {
    firstName: "First#1",
    lastName: "Last#1",
    email: "email1@test.com"
  },
  {
    firstName: "First#2",
    lastName: "Last#2",
    email: "email2@test.com"
  },
];

describe('userControllers', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return all users when call api /allUsers', () => {
    mockedServices.getAllUsers.mockReturnValue(mockUsers);
    let req = {} as Request, res = {} as Response;
    res.send = jest.fn();

    getAllUsersCtl(req, res);
    expect(mockedServices.getAllUsers).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(mockUsers);
  });

  it('should return all users when call api /addUser', () => {
    let req = {} as Request, res = {} as Response;
    req.body = mockUsers[0];
    res.send = jest.fn();

    addUserCtl(req, res);
    expect(mockedServices.addUser).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalled();
  });
});