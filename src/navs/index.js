import React, { useState } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./navigationTheme";
import AuthStackNavigator from "./AuthStack";
import { useAuthContext } from "../contexts/AuthProvider";
import { auth } from "../config/firebase";
import AppStackNavigator from "./AppStackNavigator";

export default function Navigator() {
	LogBox.ignoreLogs(["Setting a timer"]);
	const { currentUser, setCurrentUser } = useAuthContext();

	const [initializing, setInitializing] = useState(true);

	auth.onAuthStateChanged((user) => {
		setCurrentUser(user);

		if (initializing) setInitializing(false);
	});

	if (initializing) return null;

	return (
		<NavigationContainer theme={navigationTheme}>
			{currentUser ? <AppStackNavigator /> : <AuthStackNavigator />}
		</NavigationContainer>
	);
}
