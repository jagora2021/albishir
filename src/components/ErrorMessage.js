import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../constants";

export default function ErrorMessage({ error }) {
	return (
		<View>
			<Text style={styles.error}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	error: {
		color: "red",
		fontSize: fonts.size.m,
		fontWeight: fonts.weight.regular,
		alignSelf: "flex-end",
	},
});
