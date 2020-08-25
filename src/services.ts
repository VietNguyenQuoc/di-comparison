import { User } from "./models";

let users: User[] = [];

export function getAllUsers(): User[] {
  return users;
}

export function addUser(user: User): void {
  users.push(user);
}