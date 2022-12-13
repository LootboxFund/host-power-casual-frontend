import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { manifest } from "../../manifest";

const firebaseConfig = manifest.firebase;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.useDeviceLanguage();
