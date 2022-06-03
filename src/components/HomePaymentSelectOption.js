import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { colors } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";

const HomePaymentSelectOption = () => {
	return (
		<View style={styles.selectOptionContainer}>
			<TouchableOpacity activeOpacity={0.7} style={styles.optionContainer}>
				<Ionicons name="qr-code-outline" size={22} color={colors.white} />
				<Text style={styles.option}>Scan & Pay</Text>
			</TouchableOpacity>

			<TouchableOpacity
				activeOpacity={0.7}
				style={[
					styles.optionContainer,
					{ marginLeft: 15, backgroundColor: colors.secondary },
				]}
			>
				<Feather name="send" size={22} color={colors.white} />
				<Text style={styles.option}>Receive</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomePaymentSelectOption;

const styles = StyleSheet.create({
	selectOptionContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 20,
	},
	optionContainer: {
		flex: 0.5,
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: colors.green,
		padding: 10,
		borderRadius: 12,
	},
	option: {
		fontSize: 16,
		marginLeft: 5,
		color: colors.white,
	},
});
