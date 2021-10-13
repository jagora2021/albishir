import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import { CustomHeader } from "../../components";
import { colors, fonts } from "../../constants";
export default function HomeScreen() {
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGrey,
	},
	cardBackground: {
		height: 250,
		padding: 20,
		justifyContent: "space-between",
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
});
