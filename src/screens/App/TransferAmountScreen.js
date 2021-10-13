import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { CustomHeader } from "../../components";
import { colors, fonts } from "../../constants";
function TransferAmountScreen(props) {
	return (
		<View style={{ flex: 1 }}>
			<CustomHeader />
			<View style={styles.amountContainer}>
				<View style={{ flex: 1 }}>
					<Text>Enter the amount to send</Text>
					<Text style={styles.amount}>N1000.00</Text>
				</View>
				<View style={styles.AmountRecommendation}>
					<View style={recAmountContainer}>
						<Text style={styles.recAmount}>N1000.00</Text>
					</View>
					<View style={recAmountContainer}>
						<Text style={styles.recAmount}>N1000.00</Text>
					</View>
					<View style={recAmountContainer}>
						<Text style={styles.recAmount}>N1000.00</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	amountContainer: {
		height: 200,
		width: "100%",
		backgroundColor: colors.lightGreen,
		alignItems: "center",
		padding: 15,
	},
	amountRecommendation: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	amount: {
		fontSize: fonts.size.xxl,
		fontWeight: fonts.weight.bold,
	},
	recAmount: {
		fontWeight: fonts.weight.semiBold,
		fontSize: fonts.size.m,
	},
	recAmountContainer: {
		backgroundColor: colors.primary,
		width: 85,
		padding: 8,
		marginHorizontal: 5,
		borderRadius: 10,
	},
});

export default TransferAmountScreen;
