import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDc9Vn7WldHpvZqMBJjtfX_Lwm_tmuqgvM",
  authDomain: "netflix-clone-fe261.firebaseapp.com",
  projectId: "netflix-clone-fe261",
  storageBucket: "netflix-clone-fe261.firebasestorage.app",
  messagingSenderId: "407129251286",
  appId: "1:407129251286:web:da1f211cddd4ae4db4d877",
  measurementId: "G-VM87ZTH3LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));

  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
