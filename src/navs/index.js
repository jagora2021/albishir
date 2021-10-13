import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./navigationTheme";
import AppBottomTabs from "./AppBottomTabs";
import AuthStackNavigator from "./AuthStack";
import { useAuthContext } from "../contexts/AuthProvider";
import { auth } from "../config/firebase";

export default function Navigator() {
	const { currentUser, setCurrentUser } = useAuthContext();

	auth.onAuthStateChanged(user => {
		setCurrentUser(user);
	});

	return (
		<NavigationContainer theme={navigationTheme}>
			{currentUser ? <AppBottomTabs /> : <AuthStackNavigator />}
		</NavigationContainer>
	);
}
