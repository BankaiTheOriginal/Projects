import { User } from "../model/User.js";

export function getAllUsers() {
  return User.find();
}

export function getUserById(id) {
  return User.findById(id);
}

export function createNewUser(userData) {
  const user = new User(userData);
  return user.save();
}

export function updateUserById(id, updates) {
  return User.findByIdAndUpdate(id, updates, { new: true });
}

export function deleteUserById(id) {
  return User.findByIdAndDelete(id);
}
