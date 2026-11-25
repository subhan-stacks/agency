import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const cleanEnv = (val) => (typeof val === 'string' ? val.trim().replace(/^["']|["']$/g, '') : val);

const firebaseConfig = {
  apiKey: cleanEnv(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: cleanEnv(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  databaseURL: cleanEnv(import.meta.env.VITE_FIREBASE_DATABASE_URL),
  projectId: cleanEnv(import.meta.env.VITE_FIREBASE_PROJECT_ID),
  storageBucket: cleanEnv(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: cleanEnv(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
  appId: cleanEnv(import.meta.env.VITE_FIREBASE_APP_ID),
  measurementId: cleanEnv(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID),
};

let app = null;
let db = null;
let auth = null;
let analytics = null;

if (firebaseConfig.apiKey && firebaseConfig.databaseURL) {
  try {
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);
    auth = getAuth(app);

    if (typeof window !== 'undefined') {
      isSupported()
        .then((supported) => {
          if (supported) analytics = getAnalytics(app);
        })
        .catch(() => {});

      const recaptchaSiteKey = import.meta.env.VITE_FIREBASE_RECAPTCHA_SITE_KEY;
      if (recaptchaSiteKey) {
        initializeAppCheck(app, {
          provider: new ReCaptchaV3Provider(recaptchaSiteKey),
          isTokenAutoRefreshEnabled: true,
        });
      }
    }
  } catch (err) {
    console.warn('Firebase initialization failed:', err);
  }
}

export { app, db, auth, analytics };
