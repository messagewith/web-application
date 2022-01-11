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
    backToLoginPage: "Wróć do logowania",
    resetPassword: "Zresetuj hasło",
    sendMail: "Wyślij maila",
    emailOrNickname: "E-mail albo pseudonim",
    registerTitle: "Zarejestruj się",
    registerDescription: "Jesteśmy szczęśliwi, że chcesz do nas dołączyć",
    forgottenPasswordTitle: "Zapomniałem hasła",
    forgottenPasswordDescription:
      "Podaj adres e-mail lub pseduonim. Wyślemy na twoją skrzynkę pocztową wiadomość z linkiem, dzięki któremu będziesz mógł zresetować hasło",
    errors: {
      email: {
        required: "E-mail jest wymagany",
        unique: "Użytkownik z podanym adresem e-mail już istnieje",
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
    firstName: "Imię",
    lastName: "Nazwisko",
    middleName: "Drugie imię",
    passwordRequirements: {
      length: "Przynajmniej 8 znaków",
      lettersNumbers: "Zawiera znaki i cyfry",
      specialCharacter: "Przynajmniej jeden specjalny znak,  np. , ! @ # ? ]",
      uppercaseLowercase: "Zawiera małe oraz duże litery",
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
