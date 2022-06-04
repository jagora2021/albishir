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
		lastName,
		virtualUserData
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
				.then(() => {
					db.collection("users")
						.doc(cred.user.uid)
						.collection("virtualUserBank")
						.add({ ...virtualUserData });
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (err) {
			console.log(err.message);
		}
	};

	const login = async (email, password) => {
		await auth.signInWithEmailAndPassword(email, password);
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
