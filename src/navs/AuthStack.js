import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
	ChooseAuthScreen,
	LoginScreen,
	SignupScreen,
	LinkBankScreen,
	IdentificationScreen,
} from "../screens";
import { CustomHeader } from "../components";

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Choose Auth" component={ChooseAuthScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
			<Stack.Screen name="Link Bank" component={LinkBankScreen} />
			<Stack.Screen name="Identification" component={IdentificationScreen} />
		</Stack.Navigator>
	);
}
