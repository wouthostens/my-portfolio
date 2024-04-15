import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
    //i know this is bad but please don't use my api key also if you even see this i'm sorry for the bad practice 
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_APP_ID,
    measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const scoreRef = collection(db, 'score');

export default db;
export { scoreRef };
