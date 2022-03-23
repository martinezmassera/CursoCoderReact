import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7Ofnou6qbsDP3le4T6xKvsvYOSA1-y04",
  authDomain: "queco-cc4e6.firebaseapp.com",
  projectId: "queco-cc4e6",
  storageBucket: "queco-cc4e6.appspot.com",
  messagingSenderId: "509616479206",
  appId: "1:509616479206:web:805d447a98ba11367e1427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}