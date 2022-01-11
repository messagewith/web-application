import { Language } from "../types/language";

export const EN_US: Language = {
  form: {
    email: "E-mail",
    password: "Password",
    logIn: "Log In",
    logInGithub: "Log in with Github",
    logInGoogle: "Log in with Google",
    logInFacebook: "Log in with Facebook",
    register: "Register",
    forgottenPassword: "Forgotten password?",
    registerTitle: "Register new user",
    registerDescription: "We're excited that you want to join us.",
    forgottenPasswordTitle: "Forgotten password",
    forgottenPasswordDescription:
      "Enter an email address or your nickname. We will then send a message to your mailbox with a link so you can reset your password",
    emailOrNickname: "E-mail or nickname",
    resetPassword: "Reset password",
    sendMail: "Send mail",
    backToLoginPage: "Back to login page",
    errors: {
      email: {
        required: "E-mail is required",
        unique: "User with this e-mail already exists",
      },
      password: {
        required: "Password is required",
      },
      global: {
        connection:
          "There was a problem with the connection. Please try again later",
        unauthorized: "The user with the specified data does not exist",
        unknown: "An unknown error has occurred. Please try again later",
      },
    },
    firstName: "First name",
    lastName: "Last name",
    middleName: "Middle name",
    passwordRequirements: {
      length: "At least 8 characters",
      lettersNumbers: "Includes letters and numbers",
      specialCharacter: "At least one special character,  e.g., ! @ # ? ]",
      uppercaseLowercase: "Includes uppercase and lowercase letters",
    },
  },
  headings: {
    slogan:
      "The <span>Open</span> Source, <span>Private</span> social media for everyone",
  },
  errors: {
    notAvailableYet: {
      headline: "This functionality is <span>not available</span> yet!",
      paragraph: "We are working on making this feature work. Be patient! :)",
      confirm: "Ok, I’ll be waiting",
    },
  },
  time: {
    yesterday: "Yesterday",
  },
};
