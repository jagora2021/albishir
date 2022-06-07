import { StyleSheet, Text, View, Platform, Switch } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, fonts } from "../constants";

const HomeBalanceCard = () => {
	const balanceIsInProfit = true;

	const [isShowBalance, setIsShowBalance] = useState(false);

	const toggleSwitch = () => setIsShowBalance((prev) => !prev);

	return (
		<View style={styles.top}>
			<View style={styles.amountContainer}>
				<Text style={styles.totalText}>Total Balance</Text>
				<View style={styles.balanceAndSwitchContainer}>
					<Text style={styles.amount}>
						{isShowBalance ? "₦252,400.00" : "******"}
					</Text>

					<Switch
						onValueChange={toggleSwitch}
						ios_backgroundColor={colors.grey}
						value={isShowBalance}
						thumbColor={isShowBalance ? colors.secondary : colors.grey}
					/>
				</View>
			</View>

			<View style={styles.statsContainer}>
				<Text style={styles.statTitle}>
					{balanceIsInProfit ? "Profit" : "Drop"}
				</Text>
				<View style={styles.statsDetailsContainer}>
					<Text
						style={[
							styles.statAmount,
							{
								color: balanceIsInProfit ? colors.green : colors.red,
							},
						]}
					>
						₦11,289.22
					</Text>
					<MaterialCommunityIcons
						style={styles.statIcon}
						name={
							balanceIsInProfit
								? "arrow-up-drop-circle"
								: "arrow-down-drop-circle"
						}
						color={balanceIsInProfit ? colors.green : colors.red}
						size={18}
					/>
					<Text style={styles.statPercentage}>3.2%</Text>
				</View>
			</View>
		</View>
	);
};

export default HomeBalanceCard;

const styles = StyleSheet.create({
	top: {
		marginTop: 20,
		marginBottom: 25,
	},
	amountContainer: {
		backgroundColor: "#D5EDE0",
		borderRadius: 16,
		paddingVertical: 40,
		paddingHorizontal: 20,
	},
	totalText: {
		fontSize: fonts.size.ml,
		color: colors.dark,
	},
	amount: {
		fontSize: fonts.size.xxl,
		fontWeight: fonts.weight.bold,
	},
	balanceAndSwitchContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
		backgroundColor: colors.white,
		width: "90%",
		bottom: -20,
		height: 60,
		alignSelf: "center",
		marginTop: -50,
		elevation: 3,
		shadowColor: Platform.OS === "ios" ? colors.lightGreyPlus : colors.darkGrey,
		shadowOffset: { width: 0, height: 1.5 },
		shadowOpacity: 0.7,
		shadowRadius: 1,
		borderRadius: 30,
	},
	statTitle: {
		color: "#3b3b3b",
		opacity: 0.7,
	},
	statsDetailsContainer: {
		flexDirection: "row",
	},
	statAmount: {
		fontWeight:
			Platform.OS === "ios" ? fonts.weight.semiBold : fonts.weight.bold,
	},
	statIcon: {
		marginHorizontal: 8,
	},
});
