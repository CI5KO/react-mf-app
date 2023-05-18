import { UserRegister } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export function createBackEndRepo(): UserRepository {
  return {
    create,
  };
}

async function create(user: UserRegister) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    };
    await fetch(`http://localhost:4001/user/register`, options);
  } catch (error) {
    console.error(error);
  }
}
