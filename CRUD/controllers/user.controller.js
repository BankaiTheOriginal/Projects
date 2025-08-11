import {
  createNewUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../services/user.service.js";

export async function getUsers(req, res) {
  const users = await getAllUsers();
  res.json(users);
}

export async function getUser(req, res) {
  const user = await getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
}

export async function createUser(req, res) {
  try {
    const user = await createNewUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateUser(req, res) {
  const updatedUser = await updateUserById(req.params.id, req.body);
  if (!updatedUser) {
    res.status(400).json({ message: "User not found" });
  }
  res.json(updatedUser);
}

export async function removeUser(req, res) {
  const deletedUser = await deleteUserById(req.params.id);
  if (!deletedUser) {
    res.status(400).json({ message: "User not found" });
  }
  res.json({ message: "User deleted successfully" });
}
