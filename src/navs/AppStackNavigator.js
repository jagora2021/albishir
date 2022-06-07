import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
	TransferScreen,
	ReceiptScreen,
	TransferAmountScreen,
} from "../screens";
import AppBottomTabs from "./AppBottomTabs";
import QRCameraScreen from "../screens/App/QRCameraScreen";

const Stack = createStackNavigator();
function AppStackNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="home" component={AppBottomTabs} />
			<Stack.Screen name="transfer" component={TransferScreen} />
			<Stack.Screen name="transfer amount" component={TransferAmountScreen} />
			<Stack.Screen name="receipt" component={ReceiptScreen} />
			<Stack.Screen name="QR Camera" component={QRCameraScreen} />
		</Stack.Navigator>
	);
}

export default AppStackNavigator;
