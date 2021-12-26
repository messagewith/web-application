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
    errors?: {
      email?: {
        required: string;
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
