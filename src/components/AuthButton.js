import React from "react";
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import { colors, fonts } from "../constants";

export default function AuthButton({ title, onPress, isLoading = false }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			{isLoading ? (
				<ActivityIndicator size="large" color={colors.white} />
			) : (
				<Text style={styles.text}>{title}</Text>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		maxWidth: 263,
		height: 54,
		backgroundColor: colors.primary,
		borderRadius: 30,
	},
	text: {
		fontSize: fonts.size.l,
		fontWeight: fonts.weight.bold,
		color: colors.white,
	},
});
