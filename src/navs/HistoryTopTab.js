import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import IncomesScreen from "../screens/App/IncomesScreen";
import ExpensesScreen from "../screens/App/ExpensesScreen";
import { colors, fonts } from "../constants";

const TopTab = createMaterialTopTabNavigator();

export default function HistoryTopTab() {
	return (
		<TopTab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: colors.green,
					marginHorizontal: 20,
					borderRadius: 8,
					elevation: 0,
					shadowOpacity: 0,
				},
				tabBarPressColor: colors.primary,
				tabBarPressOpacity: 0,
				tabBarActiveTintColor: colors.dark,
				tabBarInactiveTintColor: colors.white,
				tabBarLabelStyle: {
					fontWeight: fonts.weight.medium,
					fontSize: fonts.size.ml,
					textTransform: "capitalize",
				},
				tabBarIndicatorStyle: {
					backgroundColor: colors.grey,
					borderRadius: 5,
					elevation: 5,
					shadowColor: "rgba(0, 0, 0, 0.4)",
					shadowOffset: { width: -3, height: 3 },
					shadowOpacity: 0.2,
					shadowRadius: 3,
					height: 43,
					top: 3,
					width: "48.3%",
					left: 3,
				},
				tabBarIndicatorContainerStyle: {
					width: "100%",
				},
			}}
		>
			<TopTab.Screen name="Incomes" component={IncomesScreen} />
			<TopTab.Screen name="Expenses" component={ExpensesScreen} />
		</TopTab.Navigator>
	);
}
