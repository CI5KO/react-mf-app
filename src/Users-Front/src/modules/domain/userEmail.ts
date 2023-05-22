export function isUserEmailValid(email: string): boolean {
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return EMAIL_REGEX.test(email);
}

export function userEmailIsNotValid(email: string): Error {
  return new Error(`Email ${email} is not Valid!`);
}
