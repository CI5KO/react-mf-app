import { UserRegister, ensureUserIsValid } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export function createUser(
  userRepository: UserRepository,
  user: UserRegister
): void {
  ensureUserIsValid(user);
  userRepository.create(user);
}
