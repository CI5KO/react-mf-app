import { UserRegister } from "./user";

export interface UserRepository {
  create: (user: UserRegister) => void;
}
