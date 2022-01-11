export interface Language {
  form: {
    email: string;
    password: string;
    logIn: string;
    logInGithub: string;
    logInFacebook: string;
    logInGoogle: string;
    register: string;
    forgottenPassword: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    registerTitle?: string;
    registerDescription?: string;
    forgottenPasswordTitle?: string;
    forgottenPasswordDescription?: string;
    emailOrNickname?: string;
    backToLoginPage?: string;
    resetPassword?: string;
    sendMail?: string;
    errors?: {
      email?: {
        required: string;
        unique: string;
      };
      password?: {
        required: string;
      };
      global?: {
        connection: string;
        unauthorized: string;
        unknown: string;
      };
    };
    passwordRequirements?: {
      length: string;
      uppercaseLowercase: string;
      lettersNumbers: string;
      specialCharacter: string;
    };
  };
  headings: {
    slogan: string;
  };
  errors: {
    notAvailableYet: {
      headline: string;
      paragraph: string;
      confirm: string;
    };
  };
  time: {
    yesterday: string;
  };
}
