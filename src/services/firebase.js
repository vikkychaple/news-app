// eslint-disable-next-line
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB6Sg6w6M-VounUDO2KHMk-uXNqpUeWFMY",
    authDomain: "fir-b5c5e.firebaseapp.com",
    projectId: "fir-b5c5e",
    storageBucket: "fir-b5c5e.appspot.com",
    messagingSenderId: "733449867712",
    appId: "1:733449867712:web:8ecf80dd25793789f9b825",
    measurementId: "G-2TR8C00Z8C"
  // Replace with your Firebase configuration
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
