import React from "react";
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";
import { fonts, colors } from "../constants";

export default function HistoryCard({ title, subTitle, amount }) {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.left}>
					<View style={styles.imageContainer}>
						<Image source={require("../../assets/images/profile-pic-sm.png")} />
						<View style={styles.transferIconContainer}>
							<Image
								style={styles.transferIcon}
								source={require("../../assets/images/transfer-sender-icon.png")}
							/>
						</View>
					</View>
					<View>
						<Text style={styles.name}>{title}</Text>
						<Text style={styles.date}>{subTitle}</Text>
					</View>
				</View>
				<Text style={styles.amount}>{amount}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	left: {
		flexDirection: "row",
	},
	imageContainer: {
		width: 40,
		height: 40,
		overflow: "hidden",
		marginRight: 10,
	},
	image: {
		borderRadius: 20,
		width: "100%",
		height: "100%",
	},
	name: {
		fontSize: fonts.size.ml,
		fontWeight: fonts.weight.bold,
	},
	date: {
		fontSize: fonts.size.s,
		fontWeight: fonts.weight.bold,
		color: colors.darkGrey,
	},
	amount: {
		fontSize: fonts.size.ml,
		fontWeight: fonts.weight.bold,
	},
	transferIconContainer: {
		width: 15,
		height: 15,
		position: "absolute",
		right: 0,
		bottom: 0,
		backgroundColor: colors.white,
		borderRadius: 10,
	},
	transferIcon: {
		width: "100%",
		height: "100%",
	},
});
