import { isUserEmailValid, userEmailIsNotValid } from "./userEmail";
import { isUserNameValid, userNameIsNotValid } from "./userName";
import { isUserPasswordValid, userPasswordIsNotValid } from "./userPassword";

export interface UserLogin {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserRegister extends UserLogin {
  isAdmin: boolean;
  isFormDone: boolean;
}

export function ensureUserIsValid({
  id,
  name,
  email,
  password,
  isAdmin,
  isFormDone,
}: UserRegister) {
  if (!isUserNameValid(name)) throw userNameIsNotValid(name);

  if (!isUserEmailValid(email)) throw userEmailIsNotValid(email);

  if (!isUserPasswordValid.containsLowerCase(password))
    throw userPasswordIsNotValid.notcontainsLowerCase();

  if (!isUserPasswordValid.containsNumber(password))
    throw userPasswordIsNotValid.notcontainsNumber();

  if (!isUserPasswordValid.containsSpecialCharacter(password))
    throw userPasswordIsNotValid.notcontainsSpecialCharacter();

  if (!isUserPasswordValid.containsUpperCase(password))
    throw userPasswordIsNotValid.notcontainsUpperCase();
}
