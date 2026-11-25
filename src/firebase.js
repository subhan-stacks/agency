import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDKnRjRCHZEw05u4JiOzCj5TBv6wfx3guE',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'blog-pg-agency.firebaseapp.com',
  databaseURL:
    import.meta.env.VITE_FIREBASE_DATABASE_URL ||
    'https://blog-pg-agency-default-rtdb.firebaseio.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'blog-pg-agency',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'blog-pg-agency.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '238008577593',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:238008577593:web:cbe3b1e3be9ccd4c06e7e8',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-CMGTKJ3XK8',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

let analytics = null;
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

export { app, db, auth, analytics };
