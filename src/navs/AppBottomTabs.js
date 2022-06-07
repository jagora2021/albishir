import React from "react";
import { Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	AntDesign,
	Feather,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
	ProfileScreen,
	HomeScreen,
	HistoryScreen,
	QRDisplayScreen,
	TransferScreen,
} from "../screens";

import { colors } from "../constants";

const Tab = createBottomTabNavigator();

export default function AppBottomTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				// tabBarInactiveTintColor: colors.white,
				tabBarShowLabel: true,
				tabBarActiveTintColor: colors.green,
				tabBarLabelStyle: {
					fontSize: 12,
					marginBottom: 5,
				},
				tabBarStyle: {
					height: 59,
					// backgroundColor: colors.secondary,
					borderTopWidth: Platform.OS === "ios" ? 0.5 : 0,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Transfer"
				component={TransferScreen}
				options={{
					headerShown: true,
					tabBarIcon: ({ color, size }) => (
						// <Ionicons name="swap-vertical" size={size} color={color} />
						<Feather name="send" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="QRDisplay"
				component={QRDisplayScreen}
				options={{
					// headerShown: true,
					headerTitle: "Scan",
					tabBarLabel: "",
					tabBarIcon: ({ color, size, focused }) => (
						<View
							style={{
								width: 70,
								height: 70,
								backgroundColor: focused ? colors.green : colors.grey,
								borderRadius: 50,
								justifyContent: "center",
								alignItems: "center",
								top: -10,
							}}
						>
							<Ionicons
								name="qr-code-outline"
								size={size}
								color={focused ? colors.white : color}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="History"
				component={HistoryScreen}
				options={{
					headerShown: true,
					headerTitle: "Transactions",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="history" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "ios-person" : "ios-person-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
