import React from "react";
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

import { CustomHeader, HistoryCard } from "../../components";
import { colors, fonts } from "../../constants";

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			<CustomHeader />
			<ImageBackground
				style={styles.cardBackground}
				source={require("../../../assets/images/dashboard-card-frame.png")}
			>
				<View style={styles.cardTop}>
					<View style={styles.top}>
						<Text style={styles.profileText}>Profile</Text>
						<Image
							style={styles.cardProfileImage}
							source={require("../../../assets/images/profile-pic-sm.png")}
						/>
					</View>
					<Text style={styles.greetingText}>Hi, Lawal</Text>
				</View>
				<View style={styles.bottom}>
					<Text style={styles.totalText}>Total Balance</Text>
					<Text style={styles.amount}>₦12,400.00</Text>
				</View>
			</ImageBackground>

			<View style={styles.historyHeader}>
				<Text style={styles.historyHeaderText}>History</Text>
				<TouchableOpacity>
					<Text style={styles.viewAllText}>View all</Text>
				</TouchableOpacity>
			</View>

			<ScrollView bounces={false}>
				<View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							title="Glory Azul"
							subTitle="Oct 14, 10:24 AM"
							amount="-₦15.00"
						/>
					</View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							title="Sara Ibrahim"
							subTitle="Oct 14, 10:24 AM"
							amount="-₦21.00"
						/>
					</View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							title="Ahmad Ibrahim"
							subTitle="Oct 14, 10:24 AM"
							amount="+₦20.00"
						/>
					</View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							title="Yusuf Muhammad"
							subTitle="Oct 14, 10:24 AM"
							amount="-₦13.00"
						/>
					</View>
					<View style={styles.historyCardContainer}>
						<HistoryCard
							title="Ahmad Umar"
							subTitle="Oct 14, 10:24 AM"
							amount="+₦18.00"
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	cardBackground: {
		marginHorizontal: 10,
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
		flexDirection: "row",
		justifyContent: "space-between",
	},
	cardProfileImage: {
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
	totalText: {
		fontSize: fonts.size.l,
		color: colors.dark,
		marginTop: 15,
	},
	amount: {
		fontSize: fonts.size.xxl,
		fontWeight: fonts.weight.bold,
	},
	historyHeader: {
		marginHorizontal: 20,
		paddingTop: 10,
		paddingBottom: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	historyHeaderText: {
		fontWeight: fonts.weight.semiBold,
		fontSize: fonts.size.ml,
	},
	viewAllText: {
		color: colors.blue,
		fontWeight: fonts.weight.bold,
		fontSize: fonts.size.ml,
	},
	historyCardContainer: {
		paddingHorizontal: 20,
	},
});
