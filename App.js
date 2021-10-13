import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import { colors } from "./src/constants";
import Navigator from "./src/navs";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
			<Navigator />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
