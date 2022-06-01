import React from "react";
import { StyleSheet, View } from "react-native";

import { CustomHeader } from "../../components";
import HistoryTopTab from "../../navs/HistoryTopTab";

export default function HistoryScreen() {
	return (
		<View style={styles.container}>
			<HistoryTopTab />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
});
