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
    errors: {
      email: {
        required: "E-mail is required",
      },
      password: {
        required: "Password is required",
      },
      global: {
        connection:
          "There was a problem with the connection. Please try again later.",
        unauthorized: "The user with the specified data does not exist",
        unknown: "An unknown error has occurred. Please try again later.",
      },
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
