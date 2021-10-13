import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { ContactCard } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../constants";
export default function TransferScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.QrCode}>
				<View style={styles.cameraContainer}></View>
			</View>
			<View style={styles.search}>
				<TextInput
					style={styles.textInput}
					placeholder="Type to search contact"
					clearButtonMode="while-editing"
				/>
				<TouchableOpacity>
					<MaterialCommunityIcons name="magnify" size={24} />
				</TouchableOpacity>
			</View>
			<ContactCard title={"Yusuf Muhammad Dimari"} subtitle={"08132480901"} />
			<ContactCard title={"Yusuf Muhammad Dimari"} subtitle={"08132480901"} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		padding: 15,
	},
	search: {
		padding: 15,
		width: "100%",
		height: 48,
		backgroundColor: colors.lightGreyPlus,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		paddingLeft: 30,
	},
	textInput: {
		width: 259,
	},
	QrCode: {
		width: "100%",
		borderRadius: 8,
		height: 90,
		backgroundColor: colors.lightGreen,
	},
	cameraContainer: {
		width: 56,
		height: 56,
		backgroundColor: colors.primary,
	},
});
