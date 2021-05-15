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
}
