export class isUserPasswordValid {
  static containsUpperCase(password: string): boolean {
    return /[A-Z]/.test(password);
  }

  static containsLowerCase(password: string): boolean {
    return /[a-z]/.test(password);
  }

  static containsNumber(password: string): boolean {
    return /[0-9]/.test(password);
  }

  static containsSpecialCharacter(password: string): boolean {
    return /[!#$%&'()*+,-./:;<=>?@[\]^_{|}~]/.test(password);
  }
}

export class userPasswordIsNotValid {
  static notcontainsUpperCase(): Error {
    return new Error(`Password needs upper case letters`);
  }

  static notcontainsLowerCase(): Error {
    return new Error(`Password needs lower case letters`);
  }

  static notcontainsNumber(): Error {
    return new Error(`Password needs a least 1 number`);
  }

  static notcontainsSpecialCharacter(): Error {
    return new Error(`Password needs a least 1 spacial character`);
  }
}
