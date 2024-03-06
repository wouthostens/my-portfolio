import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
    //i know this is bad but please don't use my api key also if you even see this i'm sorry for the bad practice 
    //i tried with env variables but it was not working beacause i'm hosting my website on one.com and it's not working with env variables
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const scoreRef = collection(db, 'score');

export default db;
export { scoreRef };
