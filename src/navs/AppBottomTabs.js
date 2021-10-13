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
				tabBarActiveBackgroundColor: colors.primary,
				tabBarItemStyle: { borderRadius: 8 },
				tabBarInactiveTintColor: colors.black,
				tabBarActiveTintColor: colors.black,
				tabBarLabelStyle: {
					fontSize: 12,
					marginBottom: 5,
				},
				tabBarStyle: {
					position: "absolute",
					bottom: 15,
					left: 15,
					right: 15,
					shadowColor: "rgba(0, 0, 0, 0.3)",
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 1,
					shadowRadius: 1,
					elevation: 2,
					borderTopWidth: 0,
					height: 59,
					borderRadius: 8,
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
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="swap-vertical" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="History"
				component={HistoryScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="bars" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Transfer"
				component={AppStackNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="swap-vertical" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="More"
				component={MoreScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="dots-vertical"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
