import React, { createContext, useContext, useState } from "react";
import { auth, db } from "../config/firebase";

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [signupDetails, setSignupDetails] = useState({});

	const signup = async (
		email,
		password,
		nin,
		phoneNumber,
		firstName,
		lastName
	) => {
		try {
			const cred = await auth.createUserWithEmailAndPassword(email, password);
			cred.user
				.updateProfile({ displayName: firstName + " " + lastName })
				.then(() => {
					db.collection("users").doc(cred.user.uid).set({
						email: cred.user.email,
						firstName,
						lastName,
						nin,
						phoneNumber,
					});
				})
				.catch(err => {
					console.log(err);
				});
		} catch (err) {
			console.log(err.message);
		}
	};

	const login = async (email, password) => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			console.log(err.message);
		}
	};

	const logout = async () => {
		try {
			await auth.signOut();
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				signupDetails,
				setSignupDetails,
				signup,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
