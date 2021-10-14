import React from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";

import { colors, fonts } from "../../constants";
import { CustomHeader } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuthContext } from "../../contexts/AuthProvider";

function Receipt({ route }) {
	const { currentUser } = useAuthContext();
	return (
		<ScrollView>
			<View style={styles.screen}>
				{/* Top Container */}

				<View style={styles.topContainer}>
					<Text style={styles.title}>My Receipt</Text>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons name={"check"} size={45} />
					</View>
					<Text style={styles.title}>Transfer Done</Text>
				</View>

				{/* Bottom Container */}

				<View style={styles.bottomContainer}>
					<View style={styles.receierDetails}>
						<Image
							source={require("../../../assets/images/profile-pic-lg.png")}
							style={styles.img}
						/>
						<View style={styles.receiverDetail}>
							<Text style={styles.transTitle}>Receipt</Text>
							<Text style={styles.transSubTitle}>
								{currentUser.displayName}
							</Text>
						</View>
					</View>
					<View style={styles.receiptDetail}>
						<Text style={styles.transTitle}>Reference number</Text>
						<Text style={styles.transSubTitle}>#D79004321786</Text>
					</View>
					<View style={styles.receiptDetail}>
						<Text style={styles.transTitle}>Amount Sent</Text>
						<Text style={styles.transSubTitle}>₦{route.params.amount}</Text>
					</View>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonTitle}>Share Receipt</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	screen: { padding: 15 },
	topContainer: {
		alignItems: "center",
	},
	bottomContainer: {
		margin: 20,
		borderWidth: 1,
		borderColor: colors.lightGreyPlus,
		borderRadius: 20,
		padding: 15,
		marginBottom: 70,
	},
	title: {
		fontSize: fonts.size.xl,
		fontWeight: fonts.weight.bold,
		marginVertical: 20,
	},
	receiptDetail: {
		marginVertical: 20,
	},
	receierDetails: {
		flexDirection: "row",
	},
	receiverDetail: {
		marginHorizontal: 20,
	},
	img: {
		width: 54,
		height: 54,
	},
	transTitle: {
		fontSize: fonts.size.m,
		fontWeight: fonts.weight.bold,
		color: colors.darkGrey,
	},
	transSubTitle: {
		fontSize: fonts.size.ml,
		fontWeight: fonts.weight.bold,
	},
	iconContainer: {
		width: 74,
		height: 74,
		borderRadius: 25,
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
	button: {
		width: "80%",
		height: 50,
		borderWidth: 1,
		borderColor: colors.dark,
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		borderRadius: 15,
		marginTop: 20,
	},
	buttonTitle: {
		fontWeight: fonts.weight.bold,
	},
});

export default Receipt;
