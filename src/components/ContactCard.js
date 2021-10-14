import React from "react";
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
	Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, fonts } from "../constants";

function ContactCard({ onPress, title, subtitle }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View style={styles.icon}>
				<MaterialCommunityIcons
					name={"account"}
					size={24}
					color={colors.darkGrey}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subtitle}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 80,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: colors.lightGreyPlus,
		padding: 15,
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 5,
	},
	icon: {
		width: 48,
		height: 48,
		borderRadius: 30,
		marginLeft: 10,
		backgroundColor: colors.lightGreyPlus,
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		flexDirection: "column",
		marginLeft: 10,
	},
	title: {
		fontWeight:
			Platform.OS === "ios" ? fonts.weight.semiBold : fonts.weight.bold,
		fontSize: fonts.size.ml,
	},
	subTitle: {
		color: colors.darkGrey,
		fontSize: fonts.size.m,
		fontWeight: fonts.weight.medium,
	},
});

export default ContactCard;
