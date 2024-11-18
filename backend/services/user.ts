import { Role, User } from "../../api-types";
import DB from "./db";
import crypto from "crypto";

const userSchema = new DB.Schema<User>({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  created_at: String,
  updated_at: String,
  role: String,
  token: String,
});

const UserModel = DB.model("user", userSchema);

function generateToken(): string {
  return crypto.randomBytes(16).toString("hex");
}

export const login = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email, password });

  if (!user) {
    throw new Error("Invalid credentials");
  }
  const token = generateToken();
  user.token = token;
  await user.save();

  return { userId: user._id, token };
};

// Middleware per la verifica del token
export const verifyToken = async (token: string) => {
  const user = await UserModel.findOne({ token });

  if (!user) {
    throw new Error("Invalid token, please log in again");
  }

  return user;
};

export const index = async () => {
  return UserModel.find({});
};

export const getUsersByRole = async (role: Role) => {
  return UserModel.find({ role });
};

export const view = async (id: string) => {
  return UserModel.findById(id);
};

export const add = async (user: User) => {
  const UserData = new UserModel(user);
  return UserData.save();
};

export const edit = async (id: string, user: User) => {
  const UserDocument = await UserModel.findById(id);

  if (!UserDocument) {
    throw new Error(`User with ID: ${user._id} not found`);
  }

  UserDocument.set(user);
  return UserDocument.save();
};

export const remove = async (id: string) => {
  return UserModel.deleteOne({ _id: id });
};

// Protected route  per avere getProfile
export const getProfile = async (token: string) => {
  const user = await verifyToken(token);
  return UserModel.findById(user._id);
};