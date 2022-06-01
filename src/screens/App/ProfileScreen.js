import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
	ScrollView,
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
} from "react-native";

import { CustomHeader, HistoryCard, Screen } from "../../components";
import { colors, fonts } from "../../constants";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function ProfileScreen({ navigation }) {
	const balanceIsInProfit = true;

	const { currentUser } = useAuthContext();

	const { logout } = useAuthContext();

	return (
		<Screen paddingT>
			<View style={styles.header}>
				<Text style={styles.headerGreeting}>Hi, Sanni</Text>

				<Image
					style={styles.profileImg}
					source={require("../../../assets/images/profile-pic-sm.png")}
				/>
			</View>

			<View style={styles.top}>
				<View style={styles.amountContainer}>
					<Text style={styles.totalText}>Total Balance</Text>
					<Text style={styles.amount}>₦252,400.00</Text>
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

			<View style={styles.selectOptionContainer}>
				<TouchableOpacity style={styles.optionContainer}>
					<Ionicons name="qr-code-outline" size={22} color={colors.white} />
					<Text style={styles.option}>Scan & Pay</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.optionContainer,
						{ marginLeft: 15, backgroundColor: colors.secondary },
					]}
				>
					<Feather name="send" size={22} color={colors.white} />
					<Text style={styles.option}>Receive</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.historyHeader}>
				<Text style={styles.historyHeaderText}>Recent transactions</Text>
				<TouchableOpacity onPress={() => navigation.navigate("History")}>
					<Text style={styles.seeAllTransactionsText}>See all</Text>
				</TouchableOpacity>
			</View>

			<ScrollView bounces={false}>
				<View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							image="https://randomuser.me/api/portraits/med/women/30.jpg"
							variant="income"
							title="Glory Azul"
							subTitle="March 30, 10:24 AM"
							amount="₦15.00"
						/>
					</View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							image="https://randomuser.me/api/portraits/med/women/75.jpg"
							variant="income"
							title="Sara Ibrahim"
							subTitle="March 24, 10:24 AM"
							amount="₦21.00"
						/>
					</View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							image="https://randomuser.me/api/portraits/med/men/75.jpg"
							variant="expenditure"
							title="Ahmad Ibrahim"
							subTitle="March 19, 10:24 AM"
							amount="₦20.00"
						/>
					</View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							image="https://randomuser.me/api/portraits/med/men/60.jpg"
							variant="expenditure"
							title="Yusuf Muhammad"
							subTitle="March 11, 10:24 AM"
							amount="₦13.00"
						/>
					</View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							image="https://randomuser.me/api/portraits/med/men/20.jpg"
							variant="income"
							title="Ahmad Umar"
							subTitle="March 10, 10:24 AM"
							amount="₦18.00"
						/>
					</View>
				</View>
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	cardBackground: {
		marginTop: Dimensions.get("window").height < 700 ? 20 : 0,
		borderRadius: 15,
		overflow: "hidden",
		padding: 20,
		justifyContent: "space-between",
		height:
			Dimensions.get("window").height < 600
				? Dimensions.get("window").height / 3.5
				: 230,
	},
	top: {
		marginBottom: 25,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	headerGreeting: {
		fontSize: 30,
		fontWeight: fonts.weight.bold,
	},
	profileImg: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	profileText: {
		fontSize: fonts.size.l,
		fontWeight: fonts.weight.semiBold,
	},
	greetingText: {
		color: colors.mediumGrey,
		fontSize: fonts.size.ml,
		fontWeight: fonts.weight.semiBold,
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
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
		backgroundColor: colors.white,
		elevation: 3,
		borderRadius: 30,
		width: "90%",
		bottom: -20,
		height: 60,
		alignSelf: "center",
		marginTop: -50,
	},
	statTitle: {
		color: "#3b3b3b",
		opacity: 0.7,
		// fontWeight: fonts.weight.bold,
	},
	statsDetailsContainer: {
		flexDirection: "row",
	},
	statAmount: {
		fontWeight: fonts.weight.bold,
	},
	statIcon: {
		marginHorizontal: 8,
	},

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
		fontWeight: fonts.weight.bold,
		fontSize: fonts.size.m,
		opacity: 0.7,
	},
	historyCardContainer: {},
	bottom: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

{
	/* <ImageBackground
				style={styles.cardBackground}
				source={require("../../../assets/images/dashboard-card-frame.png")}
			>
				<View style={styles.cardTop}>
					<View style={styles.top}>
						<Text style={styles.profileText}>Profile</Text>
						<Image
							style={styles.profileImg}
							source={require("../../../assets/images/profile-pic-sm.png")}
						/>
					</View>
					<Text style={styles.greetingText}>
						Hi, {currentUser.displayName.split(" ")[0]}
					</Text>
				</View>
				<View style={styles.bottom}>
					<View>
						<Text style={styles.totalText}>Total Balance</Text>
						<Text style={styles.amount}>₦12,400.00</Text>
					</View>

					<TouchableOpacity
						onPress={logout}
						style={{ position: "absolute", bottom: 10, right: 0 }}
					>
						<MaterialCommunityIcons
							name="logout"
							size={30}
							color={colors.red}
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground> */
}
