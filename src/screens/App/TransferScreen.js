import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, fonts } from "../../constants";

export default function TransferScreen() {
	return (
		<SafeAreaView
			style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
		>
			<View>
				<Text>Transfer</Text>
			</View>
			<View style={styles.container}>
				<View style={styles.icon}>
					<MaterialCommunityIcons
						name={"account"}
						size={24}
						color={colors.darkGrey}
					/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Yusuf Dimari</Text>
					<Text style={styles.subTitle}>08132480901</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "90%",
		height: 80,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: colors.lightGreyPlus,
		padding: 15,

		flexDirection: "row",
		alignItems: "center",
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
		marginLeft: 20,
	},
	title: {
		fontWeight: fonts.weight.medium,
		fontSize: fonts.size.ml,
	},
	subTitle: {
		color: colors.darkGrey,
	},
});
