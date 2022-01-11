import { PasswordRequirements } from "./types/passwordRequirements";

export const checkPasswordRequirements = (
  password: string
): PasswordRequirements => {
  let length = false;
  let specialCharacter = false;
  let lettersNumbers = false;
  let uppercaseLowercase = false;

  if (password.length >= 8) {
    length = true;
  }

  if (/[!@#$%^&*(),.?":{}|<>`[\]~\-=+_\\;'/]/g.test(password)) {
    specialCharacter = true;
  }

  if (/[a-z]/i.test(password) && /[0-9]/.test(password)) {
    lettersNumbers = true;
  }

  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
    uppercaseLowercase = true;
  }

  return {
    length,
    specialCharacter,
    lettersNumbers,
    uppercaseLowercase,
  };
};
