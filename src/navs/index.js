import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./navigationTheme";
import AppBottomTabs from "./AppBottomTabs";

export default function Navigator() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppBottomTabs />
		</NavigationContainer>
	);
}
