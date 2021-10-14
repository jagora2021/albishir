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
	FlatList,
} from "react-native";

import { CustomHeader, HistoryCard } from "../../components";
import { colors, fonts } from "../../constants";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function ProfileScreen({ navigation }) {
	const { currentUser } = useAuthContext();
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		fetch(
			"https://fsi.ng/api/woven/transactions?from=2021-01-01&status=ACTIVE&to=2021-11-09&unique_reference=SPKL100007629691012078221614840477696&settlement_status=settled",
			{
				headers: {
					requestId: "30484e41-0120-48b2-b575-2e3149cb5b9e",
					"api-secret": "vb_ls_bfac75fe54a952841971b6918d06aeb2659523dc92d6",
					"sandbox-key": "8wnheaSRHdj1gmkvCdN3uWvnf4rd6ni11634149218",
				},
			}
		)
			.then(res => res.json())
			.then(data => setTransactions(data.data.transactions))
			.catch(err => console.log(err.message));
	}, []);

	return (
		<View style={styles.container}>
			{Dimensions.get("window").height > 700 && <CustomHeader />}
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
					<Text style={styles.greetingText}>
						Hi, {currentUser.displayName.split(" ")[0]}
					</Text>
				</View>
				<View style={styles.bottom}>
					<Text style={styles.totalText}>Total Balance</Text>
					<Text style={styles.amount}>₦12,400.00</Text>
				</View>
			</ImageBackground>

			<View style={styles.historyHeader}>
				<Text style={styles.historyHeaderText}>History</Text>
				<TouchableOpacity onPress={() => navigation.navigate("History")}>
					<Text style={styles.viewAllText}>View all</Text>
				</TouchableOpacity>
			</View>

			{/* <ScrollView bounces={false}>
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
			</ScrollView> */}

			<FlatList
				bounces={false}
				ListFooterComponent={() => <View style={{ paddingBottom: 80 }} />}
				keyExtractor={item => item.unique_reference}
				data={transactions}
				renderItem={({ item }) => (
					<View style={styles.historyCardContainer}>
						<HistoryCard
							title={item.source_account_name}
							subTitle={item.created_at}
							amount={"₦" + item.amount}
						/>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	cardBackground: {
		marginHorizontal: 10,
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
