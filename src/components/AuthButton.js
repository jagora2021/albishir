import React from "react";
import { ActivityIndicator, StyleSheet, Text, Pressable } from "react-native";

import { colors, fonts } from "../constants";

export default function AuthButton({
	title,
	onPress,
	isLoading = false,
	full = false,
}) {
	return (
		<Pressable
			onPress={onPress}
			style={[styles.button, { maxWidth: full ? "100%" : 263 }]}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={colors.white} />
			) : (
				<Text style={styles.text}>{title}</Text>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: 54,
		backgroundColor: colors.green,
		borderRadius: 8,
	},
	text: {
		fontSize: fonts.size.l,
		fontWeight: fonts.weight.bold,
		color: colors.white,
	},
});
