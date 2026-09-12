import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {firebaseConfig} from './firestore.config';
import { getAnalytics } from "firebase/analytics";


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
