import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAPlS7Bpkr7ZSYHSyG3gKSgVG6s85NdN8U",
	authDomain: "albishir-ec5fd.firebaseapp.com",
	projectId: "albishir-ec5fd",
	storageBucket: "albishir-ec5fd.appspot.com",
	messagingSenderId: "322335907727",
	appId: "1:322335907727:web:fa10e1150e393f50fb75fa",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };
