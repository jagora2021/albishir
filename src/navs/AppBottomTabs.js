import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
	ProfileScreen,
	HomeScreen,
	HistoryScreen,
	MoreScreen,
} from "../screens";
import AppStackNavigator from "./AppStackNavigator";

import { colors } from "../constants";

const Tab = createBottomTabNavigator();

export default function AppBottomTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				// tabBarInactiveTintColor: colors.white,
				tabBarActiveTintColor: colors.green,
				tabBarLabelStyle: {
					fontSize: 12,
					marginBottom: 5,
				},
				tabBarStyle: {
					height: 59,
					// backgroundColor: colors.secondary,
					borderTopWidth: 0,
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
				component={AppStackNavigator}
				options={{
					headerShown: true,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="swap-vertical" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="History"
				component={HistoryScreen}
				options={{
					headerShown: true,
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
							size={23}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
