import React from "react";
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
	Platform,
	Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, fonts } from "../constants";

export default function ContactCard({ onPress, title, subtitle, image }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View style={styles.icon}>
				{image ? (
					<Image
						style={{ width: "100%", height: "100%", resizeMode: "cover" }}
						source={{ uri: image }}
					/>
				) : (
					<MaterialCommunityIcons
						name={"account"}
						size={24}
						color={colors.darkGrey}
					/>
				)}
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
		borderRadius: 16,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 8,
	},
	icon: {
		width: 48,
		height: 48,
		borderRadius: 30,
		marginLeft: 10,
		backgroundColor: colors.lightGrey,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
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
