type FirebaseAuthError = string;

const WRONG_EMAIL_OR_PASSWORD: FirebaseAuthError[] = [
  "auth/wrong-password",
  "auth/user-not-found",
];
const ACCOUNT_ALREADY_EXISTS: FirebaseAuthError[] = [
  "auth/email-already-exists",
  "auth/uid-already-exists",
];

export const parseAuthError = (message: string) => {
  // Tries to turn errors from https://firebase.google.com/docs/reference/js/auth#autherrorcodes into something more readable
  // First remove "Firebase: "
  message = message.replace(/^Firebase: /, "");

  const incorrectEmailOrPasswordText = "Incorrect email or password!";

  const accountAlreadyExistsText = "This account already exists!";

  if (WRONG_EMAIL_OR_PASSWORD.some((code) => message.indexOf(code) > -1)) {
    return incorrectEmailOrPasswordText;
  } else if (
    ACCOUNT_ALREADY_EXISTS.some((code) => message.indexOf(code) > -1)
  ) {
    return accountAlreadyExistsText;
  } else {
    const parsedMessage = message.replace(/auth\//, "");
    // This won't be localized. Displays the error message as-is from firebase.
    return parsedMessage;
  }
};
