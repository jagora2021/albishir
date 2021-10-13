import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { colors } from "../constants";

export default function CustomHeader() {
	return (
		<View style={styles.container}>
			<Image
				resizeMode="contain"
				style={{ width: "100%", height: "100%" }}
				source={require("../../assets/images/albishir-top-logo.png")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 80,
		backgroundColor: colors.white,
	},
});
