import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
	StyleSheet,
	Image,
	View,
	Text,
	Pressable,
	Platform,
} from "react-native";
import { fonts, colors } from "../constants";
import debitIcon from "../../assets/images/transfer-sender-icon.png";

export default function HistoryCard({
	title,
	subTitle,
	amount,
	variant,
	image,
}) {
	return (
		<Pressable>
			<View style={styles.container}>
				<View style={styles.left}>
					<View style={styles.imageContainer}>
						{image ? (
							<Image source={{ uri: image }} style={styles.image} />
						) : (
							<Ionicons name="person" size={24} color={colors.darkGrey} />
						)}
						<View style={styles.transferIconContainer}>
							<Image style={styles.transferIcon} source={debitIcon} />
						</View>
					</View>
					<View>
						<Text style={styles.name}>{title}</Text>
						<Text style={styles.date}>{subTitle}</Text>
					</View>
				</View>
				<Text
					style={[
						styles.amount,
						{ color: variant === "income" ? colors.green : colors.red },
					]}
				>
					{amount}
				</Text>
			</View>
		</Pressable>
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
		marginRight: 10,
		backgroundColor: colors.grey,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	image: {
		borderRadius: 20,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
	name: {
		fontSize: fonts.size.ml,
		fontWeight:
			Platform.OS === "ios" ? fonts.weight.semiBold : fonts.weight.bold,
	},
	date: {
		fontSize: fonts.size.s,
		fontWeight:
			Platform.OS === "ios" ? fonts.weight.medium : fonts.weight.semiBold,
		color: colors.darkGrey,
	},
	amount: {
		fontSize: fonts.size.ml,
		fontWeight:
			Platform.OS === "ios" ? fonts.weight.semiBold : fonts.weight.bold,
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
