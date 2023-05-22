export const MIN_USER_NAME = 4;
export const MAX_USER_NAME = 100;

export function isUserNameValid(name: string): boolean {
  return name.length >= MIN_USER_NAME && name.length <= MAX_USER_NAME;
}

export function userNameIsNotValid(name: string): Error {
  return new Error(`Name ${name} is not valid`);
}
