import { Language } from "../types/language";

export const PL_PL: Language = {
  form: {
    email: "E-mail",
    password: "Hasło",
    logIn: "Zaloguj się",
    logInGithub: "Zaloguj się za pomocą Githuba",
    logInGoogle: "Zaloguj się za pomocą Google",
    logInFacebook: "Zaloguj się za pomocą Facebooka",
    register: "Zarejestruj się",
    forgottenPassword: "Zapomniałeś hasła?",
    errors: {
      email: {
        required: "E-mail jest wymagany",
      },
      password: {
        required: "Hasło jest wymagane",
      },
      global: {
        connection:
          "Wystąpił problem z połączeniem. Proszę spróbować ponownie później",
        unauthorized: "Użytkownik o podanych danych nie istnieje",
        unknown: "Wystąpił nieznany błąd. Prosimy spróbować ponownie później",
      },
    },
  },
  headings: {
    slogan:
      "<span>Otwartoźródłowe</span>, <span>prywatne</span> social media dla każdego",
  },
  errors: {
    notAvailableYet: {
      headline: "Ta funkcja jest jeszcze <span>niedostępna!</span>",
      confirm: "Ok, będę czekał",
      paragraph:
        "Pracujemy nad tym, aby ta funkcja działała. Bądź cierpliwy :)",
    },
  },
  time: {
    yesterday: "Wczoraj",
  },
};
