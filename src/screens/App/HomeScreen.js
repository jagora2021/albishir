import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { CustomHeader } from "../../components";
import { colors } from "../../constants";

export default function DashboardScreen() {
	return (
		<View style={styles.container}>
			<CustomHeader />
			<Text>Dashboard</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGreen,
	},
});
