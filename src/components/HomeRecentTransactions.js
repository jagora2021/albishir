import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

import HistoryCard from "./HistoryCard";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts } from "../constants";

const HomeRecentTransactions = () => {
	const navigation = useNavigation();

	return (
		<View>
			<View style={styles.historyHeader}>
				<Text style={styles.historyHeaderText}>Recent transactions</Text>
				<TouchableOpacity onPress={() => navigation.navigate("History")}>
					<Text style={styles.seeAllTransactionsText}>See all</Text>
				</TouchableOpacity>
			</View>

			<HistoryCard
				image="https://randomuser.me/api/portraits/med/women/30.jpg"
				variant="income"
				title="Glory Azul"
				subTitle="March 30, 10:24 AM"
				amount="₦15.00"
			/>
			<HistoryCard
				image="https://randomuser.me/api/portraits/med/women/75.jpg"
				variant="income"
				title="Sara Ibrahim"
				subTitle="March 24, 10:24 AM"
				amount="₦21.00"
			/>
			<HistoryCard
				image="https://randomuser.me/api/portraits/med/men/75.jpg"
				variant="expenditure"
				title="Ahmad Ibrahim"
				subTitle="March 19, 10:24 AM"
				amount="₦20.00"
			/>
			<HistoryCard
				image="https://randomuser.me/api/portraits/med/men/60.jpg"
				variant="expenditure"
				title="Yusuf Muhammad"
				subTitle="March 11, 10:24 AM"
				amount="₦13.00"
			/>
			<HistoryCard
				image="https://randomuser.me/api/portraits/med/men/20.jpg"
				variant="income"
				title="Ahmad Umar"
				subTitle="March 10, 10:24 AM"
				amount="₦18.00"
			/>
		</View>
	);
};

export default HomeRecentTransactions;

const styles = StyleSheet.create({
	historyHeader: {
		paddingBottom: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	historyHeaderText: {
		fontWeight: fonts.weight.semiBold,
		fontSize: fonts.size.ml,
	},
	seeAllTransactionsText: {
		color: colors.blue,
		fontWeight: fonts.weight.semiBold,
		fontSize: fonts.size.s,
		opacity: 0.7,
	},
});
